const IoDir = require('./iodir');
const config = require('../config');
const fs = require('fs-extra');
const path = require('path');
const ignore = require('ignore');
const yaml = require('js-yaml');
const crypto = require('crypto');
const mime = require('mime');
const pathutils = require('../utils/path');
const transform = require('../utils/transform');
const utils = require('./utils');

let api;


class ImportCollection {

  constructor(_api) {
    api = _api;
  }

  /**
   * @method run
   *
   * @param {Object} options
   * @param {String} options.fsPath local file system path
   * @param {Boolean} options.forceMetadataUpdate
   * @param {Boolean} options.ignoreRemoval skip container removal where fc containers that do not exist on disk are removed.
   * @param {Boolean} options.dryRun do not download the files
   * @param {String} options.agImportStrategy
   *
   */
  async run(options) {
    if( options.ignoreRemoval !== true ) options.ignoreRemoval = false;
    if( options.fcrepoPath && !options.fcrepoPath.match(/^\//) ) {
      options.fcrepoPath = '/'+options.fcrepoPath;
    }
    this.options = options;

    if( !options.agImportStrategy ) {
      options.agImportStrategy = 'transaction'
    }
    // TODO: check options.agImportStrategy types

    if( options.dryRun ) {
      console.log(`
***********
* Dry Run
***********
`);
    }

    // parse the ./.fin/config.yaml file
    // let config = this.parseConfig(options.fsPath);

    console.log('IMPORT OPTIONS:');
    console.log(options);

    // IoDir object for root fs path, crawl repo
    let rootDir = new IoDir(options.fsPath, '/', {
      dryRun : options.dryRun,
      fcrepoPath : options.fcrepoPath,
      fcrepoPathType : options.fcrepoPathType,
      importFromRoot : options.importFromRoot
    });

    // crawl user suppied director f
    await rootDir.crawl();

    if( process.stdout && process.stdout.clearLine ) {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      console.log('');
    }

    let collections = rootDir.archivalGroups.filter(item => item.isCollection);
    if( collections.length > 1 ) {
      throw new Error('More than one collection found: ', collections.map(item => item.localpath).join(', '));
    }
    let agUpdates = 0;

    if( options.importFromRoot ) {
      await this.putAGContainers(rootDir, rootDir)
    } else {
      for( let ag of rootDir.archivalGroups ) {
        // just put container and binary
        if( ag.isBinary ) {
          let bUpdate = await this.putBinary(ag);
          let mUpdate = await this.putBinaryMetadata(ag);
          if( bUpdate || mUpdate ) agUpdates++;
          continue;
        }

        // recursively add all containers for archival group
        if( await this.putAGContainers(ag, rootDir) ) {
          agUpdates++;
        }
      }
    }



    console.log('Filesytem import completed.');
    console.log(` - ArchivalGroup Collections: ${collections.length}`);
    console.log(` - ArchivalGroup Items: ${rootDir.archivalGroups.length-collections.length}`);
    console.log(` - Total ArchivalGroups updated: ${agUpdates}`);
  }

  /**
   * @method putAGContainers
   * @description put ldp:ArchivalGraph container
   *
   * @param {IoDir} dir current directory
   * @param {IoDir} rootDir root directory for crawl
   */
  async putAGContainers(dir, rootDir) {
    let isArchivalGroup = (dir.archivalGroup === dir);
    let indirectContainers = null;
    let indirectContainerSha = null;

    // check for changes
    if( isArchivalGroup ) {
      console.log('ARCHIVAL GROUP: '+dir.fcrepoPath);
      console.log(' -> crawling fcrepo and local fs for changes');

      let fcrManifest = await this.createArchivalGroupFcrManifest(dir.fcrepoPath);
      let dirManifest = await this.createArchivalGroupDirManifest(dir);
      let response = this.checkArchivalGroupManifest(fcrManifest, dirManifest);

      // maybe required below
      if( dir.isCollection ) {
        indirectContainers = this.getIndirectContainerList(rootDir, dir);
      }

      // if collection, we need to check if the indirect references as changed
      if( dir.isCollection ) {
        let hash = crypto.createHash('sha256');
        hash.update(JSON.stringify(indirectContainers));
        indirectContainerSha = hash.digest('hex');

        if( response.equal === true ) {
          if( !fcrManifest[dir.fcrepoPath].indirectSha ) {
            response = {equal:false, message: 'No indirect reference sha found: '+dir.fcrepoPath};
          } else if( indirectContainerSha !== fcrManifest[dir.fcrepoPath].indirectSha ) {
            response = {equal:false, message: 'indirect reference sha missmatch: '+dir.fcrepoPath};
          }
        }

        dir.finIoNode = this.createFinIoNode();
        dir.finIoNode[utils.PROPERTIES.FIN_IO.INDIRECT_REFERENCE_SHA] = [{'@value': indirectContainerSha}];
      }

      if( response.equal === true ) {
        console.log(' -> no changes found, ignoring');
        return false;
      } else if( this.options.agImportStrategy === 'remove' ) {
        console.log(' -> changes found, removing and reimporting: '+response.message);
        await api.delete({path: dir.fcrepoPath, permanent: true});
      } else if( this.options.agImportStrategy === 'transaction' ) {
        await api.startTransaction();
        console.log(' -> changes found, running transaction based update ('+api.getConfig().transactionToken+'): '+response.message);
      } else if( this.options.agImportStrategy === 'version-all' ) {
        console.log(' -> changes found, WARNING versioning every change: '+response.message);
      } else {
        throw new Error('Invalid ArchivalGroup strategy provided');
      }
    }

    // does the archive group need a container?
    if( isArchivalGroup || dir.containerGraph) {
      await this.putContainer(dir);
    }

    // if this is an archival group collection, add all 'virtual'
    // indirect container references
    if( isArchivalGroup && dir.isCollection ) {
      // add all indirect containers
      for( let container of indirectContainers ) {
        await this.putContainer(container, rootDir);
      }

      // where there hardcoded collection hasParts?
      if( dir.hasParts ) {
        for( let container of dir.hasParts ) {
          await this.putContainer(container);
        }
      }
    }

    // are we a directory?
    // if not quit, otherwise add dir containers and binary files
    if( !dir.getFiles ) {
      if( isArchivalGroup && this.options.agImportStrategy === 'transaction' ) {
        let token = api.getConfig().transactionToken;
        let tResp = await api.commitTransaction();
        console.log(' -> commit ArchivalGroup transaction based update ('+token+'): '+tResp.data.statusCode);
      }
      return true;
    }
    let files = await dir.getFiles();

    for( let container of files.containers ) {
      await this.putContainer(container);
    }

    for( let binary of files.binaries ) {
      await this.putBinary(binary);
      await this.putBinaryMetadata(binary);
    }

    // are their child directories
    for( let child of dir.children ) {
      await this.putAGContainers(child);
    }

    if( isArchivalGroup && this.options.agImportStrategy === 'transaction' ) {
      let token = api.getConfig().transactionToken;
      let tResp = await api.commitTransaction();
      console.log(' -> commit ArchivalGroup transaction based update ('+token+'): '+tResp.data.statusCode);
    }

    return true;
  }

  /**
   * @method putContainer
   * @description PUT rdf container
   *
   * @param {Object} container
   * @returns {Promise}
   */
  async putContainer(container) {
    let containerPath = container.fcrepoPath;
    let localpath = container.localpath || container.containerFile;

    console.log(`PUT CONTAINER: ${containerPath}\n -> ${localpath}`);

    let headers = {
      'content-type' : api.RDF_FORMATS.JSON_LD,
    }

    // TODO: head check that container exists.  if exists, we are posting otherwise put.
    // if exists ignore ArchivalGroup
    // update log message as well

    let containerNode = container.mainGraphNode;

    let response = await api.get({
      path: containerPath,
      headers : {
        accept : api.RDF_FORMATS.JSON_LD
      }
    });

    // collections might have already created the node in the manifest check set
    let finIoNode = container.finIoNode || this.createFinIoNode();

    // check if d exists and if there is the ucd metadata sha.
    if( this.options.forceMetadataUpdate !== true &&
        response.data.statusCode === 200 && localpath !== '_virtual_' ) {

      let jsonld = JSON.parse(response.last.body);
      if( await this.isMetaShaMatch(jsonld, finIoNode, localpath ) ) {
        console.log(` -> IGNORING (sha match)`);
        return;
      }
    } else if ( localpath !== '_virtual_' ) {
      let localSha = await api.sha(localpath);
      finIoNode[utils.PROPERTIES.FIN_IO.METADATA_SHA] = [{'@value': localSha}];
    }

    // set ldp headers for types that must be specified there and not in @type
    utils.cleanupContainerNode(containerNode, headers, response);

    // check for gitinfo, add container
    if( container.gitInfo ) {
      this.addNodeToGraph(container.containerGraph, this.createGitNode(container.gitInfo));
    }
    this.addNodeToGraph(container.containerGraph, finIoNode);

    if( this.options.dryRun !== true ) {
      response = await api.put({
        path : containerPath,
        content : JSON.stringify(container.containerGraph),
        partial : true,
        headers
      });

      if( response.error ) {
        throw new Error(response.error);
      }
      console.log(response.last.statusCode, response.last.body);
    }
  }

  async putBinary(binary) {
    let fullfcpath = binary.fcrepoPath;
    console.log(`PUT BINARY: ${fullfcpath}\n -> ${binary.localpath}`);

    let response = await api.get({
      path: pathutils.joinUrlPath(fullfcpath, 'fcr:metadata'),
      headers : {
        accept : api.RDF_FORMATS.JSON_LD
      }
    });

    if( response.last.statusCode === 200 ) {
      response = JSON.parse(response.last.body)[0];
      if( response[utils.PROPERTIES.PREMIS.HAS_MESSAGE_DIGEST] ) {
        let shas = response[utils.PROPERTIES.PREMIS.HAS_MESSAGE_DIGEST]
          .map(item => {
            let [urn, sha, hash] = item['@id'].split(':')
            return [sha.replace('sha-', ''), hash];
          });

        // picking the 256 sha or first
        let sha = shas.find(item => item[0] === '256');
        if( !sha ) sha = shas[0];

        let localSha = await api.sha(binary.localpath, sha[0]);
        if( localSha === sha[1] ) {
          console.log(' -> IGNORING (sha match)');
          return false;
        }
      }
    }

    // attempt to set mime type
    let customHeaders = {};
    let ext = path.parse(binary.localpath).ext.replace(/^\./, '');
    let mimeLibType = mime.getType(ext);
    if( mimeLibType ) {
      customHeaders['content-type'] = mimeLibType;
    } else {
      customHeaders['content-type'] = 'application/octet-stream';
    }

    if( this.options.dryRun !== true ) {
      response = await api.put({
        path : fullfcpath,
        file : binary.localpath,
        partial : true,
        headers : customHeaders
      });

      // tombstone found, attempt removal
      if( response.last.statusCode === 410 ) {
        console.log(' -> tombstone found, removing')
        response = await api.delete({
          path: fullfcpath,
          permanent: true
        });
        console.log(' -> tombstone request: '+response.last.statusCode);

        response = await api.put({
          path : fullfcpath,
          file : binary.localpath,
          partial : true,
          headers : customHeaders
        });
      }

      if( response.error ) {
        throw new Error(response.error);
      } else {
        console.log(response.last.statusCode, response.last.body);
      }
    }

    return true;
  }

  async putBinaryMetadata(binary) {
    if( !binary.containerGraph ) return false;

    let containerPath = pathutils.joinUrlPath(binary.fcrepoPath, 'fcr:metadata');
    console.log(`PUT BINARY METADATA: ${containerPath}\n -> ${binary.containerFile}`);

    if( this.options.dryRun !== true ) {
      let headers = {
        'content-type' : api.RDF_FORMATS.JSON_LD
      }

      let response = await api.get({
        path : containerPath,
        headers : {
          accept : api.RDF_FORMATS.JSON_LD
        }
      });

      let finIoContainer = this.createFinIoNode();

      // check if d exists and if there is the ucd metadata sha.
      if( this.options.forceMetadataUpdate !== true && response.data.statusCode === 200 ) {
        response = JSON.parse(response.last.body);
        if( await this.isMetaShaMatch(response, finIoContainer, binary.containerFile ) ) {
          console.log(` -> IGNORING (sha match)`);
          return false;
        }
      } else {
        let localSha = await api.sha(binary.containerFile);
        finIoContainer[utils.PROPERTIES.FIN_IO.METADATA_SHA] = [{'@value': localSha}];
      }

      utils.cleanupContainerNode(binary.mainGraphNode);

      // check for gitinfo, add container
      if( binary.gitInfo ) {
        this.addNodeToGraph(binary.containerGraph, this.createGitNode(binary.gitInfo));
      }
      this.addNodeToGraph(binary.containerGraph, finIoContainer);

      response = await api.put({
        path : containerPath,
        content : JSON.stringify(binary.containerGraph),
        partial : true,
        headers
      });

      if( response.last.statusCode === 410 ) {
        console.log(' -> tombstone found, removing')
        response = await api.delete({
          path: containerPath.replace(/\/fcr:metadata/, ''),
          permanent: true
        });
        console.log(' -> tombstone request: '+response.last.statusCode);

        response = await api.put({
          path : containerPath,
          content : JSON.stringify(binary.containerGraph),
          partial : true,
          headers
        });
      }

      if( response.error ) {
        throw new Error(response.error);
      }
      console.log(response.last.statusCode, response.last.body);
    }

    return true;
  }

  /**
   * @method getIndirectContainerList
   * @description given a list of ldp:ArchivalGroup nodes (from the root dir crawled)
   * create the virual 'hasPart', 'isPartOf' root containers and their child containers
   * based on all of the item AG's found in the crawl
   *
   * @param {IoDir} rootDir the root dir for the crawl
   * @param {IoDir} ag the collection AG
   * @returns
   */
  getIndirectContainerList(rootDir, ag) {
    let containers = [];

    // root hasPart
    containers.push({
      fcrepoPath : pathutils.joinUrlPath(ag.fcrepoPath, 'hasPart'),
      localpath : '_virtual_',
      mainGraphNode : {
        '@id' : '',
        '@type' : [utils.TYPES.INDIRECT_CONTAINER],
        [utils.PROPERTIES.LDP.MEMBERSHIP_RESOURCE] : [{
          '@id':  pathutils.joinUrlPath('info:fedora', ag.fcrepoPath)
        }],
        [utils.PROPERTIES.LDP.HAS_MEMBER_RELATION] : [{
          '@id': utils.PROPERTIES.SCHEMA.HAS_PART
        }],
        [utils.PROPERTIES.LDP.INSERTED_CONTENT_RELATION] : [{
          '@id': utils.PROPERTIES.SCHEMA.HAS_PART
        }]
      }
    });

    // root isPartOf
    containers.push({
      fcrepoPath : pathutils.joinUrlPath(ag.fcrepoPath, 'isPartOf'),
      localpath : '_virtual_',
      mainGraphNode : {
        '@id' : '',
        '@type' : [utils.TYPES.INDIRECT_CONTAINER],
        [utils.PROPERTIES.LDP.MEMBERSHIP_RESOURCE] : [{
          '@id':  pathutils.joinUrlPath('info:fedora', ag.fcrepoPath)
        }],
        [utils.PROPERTIES.LDP.IS_MEMBER_OF_RELATION] : [{
          '@id': utils.PROPERTIES.SCHEMA.IS_PART_OF
        }],
        [utils.PROPERTIES.LDP.INSERTED_CONTENT_RELATION] : [{
          '@id': utils.PROPERTIES.SCHEMA.IS_PART_OF
        }]
      }
    });

    for( let item of rootDir.archivalGroups ) {
      if( item.isCollection ) continue;

      containers.push({
        fcrepoPath : pathutils.joinUrlPath(ag.fcrepoPath, 'isPartOf', item.id),
        localpath : '_virtual_',
        mainGraphNode : {
          '@id' : '',
          [utils.PROPERTIES.SCHEMA.IS_PART_OF] : [{
            '@id': pathutils.joinUrlPath(api.getConfig().fcBasePath, item.fcrepoPath)
          }]
        }
      });

      containers.push({
        fcrepoPath : pathutils.joinUrlPath(ag.fcrepoPath, 'hasPart', item.id),
        localpath : '_virtual_',
        mainGraphNode : {
          '@id' : '',
          [utils.PROPERTIES.SCHEMA.HAS_PART] : [{
            '@id': pathutils.joinUrlPath(api.getConfig().fcBasePath, item.fcrepoPath)
          }]
        }
      });
    }

    // now assign a containerGraph and a FinIo node to every graph
    containers.forEach(item => {
      item.containerGraph = [item.mainGraphNode, this.createFinIoNode([utils.TYPES.FIN_IO_INDIRECT_REFERENCE])];
    })

    return containers;
  }

  addNodeToGraph(graph, node) {
    if( graph['@graph'] ) graph = graph['@graph'];
    graph.push(node);
  }

  /**
   * @method createGitNode
   * @description given a gitInfo object (created in git.js), turn it into rdf graph node
   *
   * @param {Object} gitInfo
   * @returns {Object}
   */
  createGitNode(gitInfo) {
    for( let attr in gitInfo ) {
      gitInfo[utils.GIT_SOURCE_PROPERTY_BASE+attr] = [{'@value' : gitInfo[attr]}];
      delete gitInfo[attr];
    }
    gitInfo['@id'] = utils.GRAPH_NODES.GIT_SOURCE;
    gitInfo['@type'] = utils.TYPES.GIT_SOURCE;
    return gitInfo;
  }

  /**
   * @method createFinIoNode create the base FinIo graph node
   *
   * @param {Array} additionalTypes optional additional types to add to node
   * @returns
   */
  createFinIoNode(additionalTypes=[]) {
    return {
      '@id' : utils.GRAPH_NODES.FIN_IO,
      '@type' : [utils.TYPES.FIN_IO, ...additionalTypes]
    };
  }

  /**
   * @method getRootGraphNode
   * @description fetch the main graph node for container.  Mostly a helper for
   * createArchivalGroupFcrManifest()
   *
   * @param {String} path fcrepo path without fedora:info stuffs
   * @returns
   */
  async getRootGraphNode(path) {
    let response = await api.metadata({path});

    if( response.error || response.last.statusCode !== 200 ) {
      return {graph: null, response: response.last};
    }

    let graph = JSON.parse(response.data.body);
    let mainNode = graph.find(item => item['@id'].match(api.getConfig().fcBasePath+path));
    return {mainNode, graph, response: response.last};
  }

  async createArchivalGroupFcrManifest(path, manifest={}) {
    let nodeGraph = await this.getRootGraphNode(path);
    manifest[path] = {statusCode: nodeGraph.response.statusCode};
    if( nodeGraph.response.error || nodeGraph.response.statusCode !== 200 ) {
      return manifest;
    }
    let mainNode = nodeGraph.mainNode;

    if( !mainNode ) {
      manifest[path].mainNode = false;
      return manifest;
    }

    let finIoIndirectRef = utils.getGraphNode(nodeGraph.graph, utils.TYPES.FIN_IO_INDIRECT_REFERENCE);

    if( mainNode['@type'] && !finIoIndirectRef ) {
      if( mainNode[utils.PROPERTIES.PREMIS.HAS_MESSAGE_DIGEST] ) {
        let shas = mainNode[utils.PROPERTIES.PREMIS.HAS_MESSAGE_DIGEST]
          .map(item => {
            let [urn, sha, hash] = item['@id'].split(':')
            return [sha.replace('sha-', ''), hash];
          });

        // picking the 256 sha or first
        let sha = shas.find(item => item[0] === '256');
        if( !sha ) sha = shas[0];
        manifest[path].binarySha = sha[1];
      }

      let finIoSha = utils.getGraphValue(nodeGraph.graph, utils.PROPERTIES.FIN_IO.METADATA_SHA);
      if( finIoSha ) {
        manifest[path].metadataSha = finIoSha;
      }

      let finIoRefSha = utils.getGraphValue(nodeGraph.graph, utils.PROPERTIES.FIN_IO.INDIRECT_REFERENCE_SHA);
      if( finIoRefSha ) {
        manifest[path].indirectSha = finIoRefSha;
      }
    } else {
      delete manifest[path];
    }

    let contains = mainNode[utils.PROPERTIES.LDP.CONTAINS];
    if( !contains ) return manifest;
    for( var i = 0; i < contains.length; i++ ) {
      path = contains[i]['@id'].replace(new RegExp('.*'+api.getConfig().fcBasePath), '');
      await this.createArchivalGroupFcrManifest(path, manifest);
    }

    return manifest;
  }

  async createArchivalGroupDirManifest(dir, manifest={}) {
    if( dir.containerFile ) {
      manifest[dir.fcrepoPath] = {
        metadataSha :  await api.sha(dir.containerFile)
      }
    }

    if( !dir.getFiles ) return manifest;

    let files = await dir.getFiles();

    for( let container of files.containers ) {
      manifest[container.fcrepoPath] = {
        metadataSha : await api.sha(container.localfile || container.containerFile)
      }
    }

    for( let binary of files.binaries ) {
      manifest[binary.fcrepoPath] = {
        binarySha : await api.sha(binary.localpath || binary.containerFile),
      }

      if( binary.containerFile ) {
        manifest[binary.fcrepoPath].metadataSha = await api.sha(binary.containerFile);
      }
    }

    for( let child of dir.children ) {
      await this.createArchivalGroupDirManifest(child, manifest);
    }

    return manifest;
  }

  checkArchivalGroupManifest(fcrManifest, dirManifest) {
    for( let path in dirManifest ) {
      if( !fcrManifest[path] ) {
        return {equal: false, message: 'fcrepo missing: '+path};
      }

      if( fcrManifest[path].binarySha !== dirManifest[path].binarySha ) {
        return {equal: false, message: 'binary sha missmatch: '+path};
      }

      if( fcrManifest[path].metadataSha !== dirManifest[path].metadataSha ) {
        return {equal: false, message: 'metadata sha missmatch: '+path};
      }
    }

    for( let path in fcrManifest ) {
      if( !dirManifest[path] ) {
        return {equal: false, message: 'dir missing: '+path};
      }
    }

    return {equal: true};
  }

  async isMetaShaMatch(currentJsonLd, newJsonld, file) {
    // newJsonLd might not be a graph, but the node itself
    if( !Array.isArray(newJsonld) ) newJsonld = [newJsonld];

    let currentSha = utils.getGraphValue(currentJsonLd, utils.PROPERTIES.FIN_IO.METADATA_SHA);

    // check sha match
    let localSha = await api.sha(file);
    if(currentSha === localSha ) {
      return true;
    }

    // if not match, set value on new finIoNode
    let newFinIoNode = utils.getGraphNode(newJsonld, utils.GRAPH_NODES.FIN_IO);
    newFinIoNode[utils.PROPERTIES.FIN_IO.METADATA_SHA] = [{'@value': localSha}];

    return false;
  }

}

module.exports = ImportCollection;
