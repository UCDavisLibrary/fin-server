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

let api;
let CONFIG_DIR = '.fin';
let ACL_FILE = 'acl.ttl';
let CONFIG_FILE = 'config.yml';
const IGNORE_FILE = '.finignore';

const HAS_MESSAGE_DIGEST = 'http://www.loc.gov/premis/rdf/v1#hasMessageDigest';

const FIN_IO_INDIRECT_REFERENCE = 'http://library.ucdavis.edu/schema#finIoIndirectReference';
const FIN_IO_INDIRECT_REFERENCE_SHA = 'http://library.ucdavis.edu/schema#finIoIndirectReferenceSha';
const METADATA_SHA = 'http://digital.ucdavis.edu/schema#finIoMetadataSha256';
const IS_PART_OF = 'http://schema.org/isPartOf';
const HAS_PART = 'http://schema.org/hasPart';

const INDIRECT_CONTAINER = 'http://www.w3.org/ns/ldp#IndirectContainer';
const MEMBERSHIP_RESOURCE = 'http://www.w3.org/ns/ldp#membershipResource';
const IS_MEMBER_OF_RELATION = 'http://www.w3.org/ns/ldp#isMemberOfRelation';
const HAS_MEMBER_RELATION = 'http://www.w3.org/ns/ldp#hasMemberRelation';
const INSERTED_CONTENT_RELATION = 'http://www.w3.org/ns/ldp#insertedContentRelation';

class ImportCollection {

  constructor(_api) {
    api = _api;

    this.TO_HEADER_TYPES = [
      api.LDP_TYPES.DIRECT_CONTAINER,
      api.LDP_TYPES.INDIRECT_CONTAINER,
      api.FEDORA_TYPES.ARCHIVAL_GROUP
    ]
  }

  /**
   * @method run
   * 
   * @param {Object} options
   * @param {String} options.fsPath local file system path
   * @param {Boolean} options.forceMetadataUpdate
   * @param {Boolean} options.ignoreRemoval skip container removal where fc containers that do not exist on disk are removed.
   * @param {Boolean} options.dryRun do not download the files
   * 
   */
  async run(options) {
    if( options.ignoreRemoval !== true ) options.ignoreRemoval = false;
    if( options.fcrepoPath && !options.fcrepoPath.match(/^\//) ) {
      options.fcrepoPath = '/'+options.fcrepoPath;
    }
    this.options = options;

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
      fcrepoPath : options.fcrepoPath
    });

    // crawl user suppied director f
    await rootDir.crawl();
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log('');

    let collections = rootDir.archivalGroups.filter(item => item.isCollection);
    if( collections.length > 1 ) {
      throw new Error('More than one collection found: ', collections.map(item => item.localpath).join(', '));
    }

    for( let ag of rootDir.archivalGroups ) {
      // just put container and binary
      if( ag.isBinary ) {
        await this.putBinary(ag);
        await this.putBinaryMetadata(ag);
        continue;
      }

      // recursively add all containers for archival group
      await this.putAGContainers(ag, rootDir);
    }

    console.log('Filesytem import completed.');
    console.log(` - ArchivalGroup Collections: ${collections.length}`);
    console.log(` - ArchivalGroup Items: ${rootDir.archivalGroups.length-collections.length}`);
  }

  /**
   * @method putAGContainers
   * @description put rdf container metadata
   * 
   * @param {String} collectionName
   * @param {IoDir} dir 
   */
  async putAGContainers(dir, rootDir) {
    let isArchivalGroup = (dir.archivalGroup === dir);
    let indirectContainers = null;
    let indirectContainerSha = null;


    // check for changes
    if( isArchivalGroup ) {
      console.log('ARCHIVAL GROUP: '+dir.fcrepoPath);
      console.log(' -> crawling fcrepo and local fs for changes');

      if( !dir.isCollection ) {
        return;
      }

      let fcrManifest = await this.createArchivalGroupFcrManifest(dir.fcrepoPath);
      let dirManifest = await this.createArchivalGroupDirManifest(dir);
      let response = this.checkArchivalGroupManifest(fcrManifest, dirManifest);

      // maybe required below
      if( dir.isCollection ) {
        indirectContainers = this.getIndirectContainerList(rootDir, dir);
      }

      // if collection, we need to check if the indirect references as changed
      if( dir.isCollection && response.equal === true ) {
        let hash = crypto.createHash('sha256');
        hash.update(JSON.stringify(indirectContainers));
        indirectContainerSha = hash.digest('hex');

        if( !fcrManifest[dir.fcrepoPath].indirectSha ) {
          response = {equal:false, message: 'No indirect reference sha found: '+dir.fcrepoPath};
        } else if( indirectContainerSha !== fcrManifest[dir.fcrepoPath].indirectSha ) {
          response = {equal:false, message: 'indirect reference sha missmatch: '+dir.fcrepoPath};
        }

        dir.metadata[FIN_IO_INDIRECT_REFERENCE_SHA] = [{'@value': indirectContainerSha}];
      }

      response.equal = false;

      if( response.equal === true ) {
        console.log(' -> no changes found, ignoring');
        return;
      } else {
        console.log(' -> changes found, removing and reimporting: '+response.message);
        await api.delete({path: dir.fcrepoPath, permanent: true});
      }
    }

    // does the archive group need a container?
    if( isArchivalGroup|| dir.metadata) {
      await this.putContainer(dir);
    }

    // if this is an archival group collection, add all 'virtual'
    // indirect container references
    if( isArchivalGroup && dir.isCollection ) {
      await this.putIndirectContainers(rootDir, indirectContainers);

      // where there hardcoded collection hasParts?
      if( dir.hasParts ) {
        for( let container of dir.hasParts ) {
          await this.putContainer(container);
        }
      }
    }
    
    // are we a directory?
    // if not quit, otherwise add dir containers and binary files
    if( !dir.getFiles ) return;
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
  }

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

    let metadata = container.metadata;
    if( !metadata ) metadata = {};

    let response = await api.get({
      path: containerPath,
      headers : {
        accept : api.RDF_FORMATS.JSON_LD
      }
    });

    // check if d exists and if there is the ucd metadata sha.
    if( this.options.forceMetadataUpdate !== true && response.data.statusCode === 200 && localpath !== '_virtual_' ) {
      let jsonld = JSON.parse(response.last.body)[0];
      if( await this.isMetaShaMatch(jsonld, metadata, localpath ) ) {
        console.log(` -> IGNORING (sha match)`);
        return;
      }
    } else if ( localpath !== '_virtual_' ) {
      let localSha = await api.sha(localpath);
      metadata[METADATA_SHA] = [{'@value': localSha}];
    }

    // strip @types that must be provided as a Link headers
    if( metadata['@type'] ) {
      this.TO_HEADER_TYPES.forEach(type => {
        if( !metadata['@type'].includes(type) ) return;

        metadata['@type'] = metadata['@type'].filter(item => item !== type);

        if( response.data.statusCode !== 200 ) {
          if( !headers.link ) headers.link = [];
          headers.link.push(`<${type}>;rel="type"`)
          console.log(`  - creating ${type.replace(/.*#/, '')}`);
        }
      })
    }

    // strip all ldp (and possibly fedora properties)
    if( metadata['@type'] ) {
      metadata['@type'] = metadata['@type'].filter(item => !item.match('http://www.w3.org/ns/ldp#') && !item.match('http://fedora.info/definitions/v4/repository#'));
    }

    // HACK to work around: https://fedora-repository.atlassian.net/browse/FCREPO-3858
    // Just keeping down direction required by fin UI for now.
    if( metadata[HAS_MEMBER_RELATION] && metadata[IS_MEMBER_OF_RELATION] ) {
      delete metadata[IS_MEMBER_OF_RELATION];
    }

    // check for gitinfo, add container
    if( container.gitInfo ) {
      metadata = [
        metadata,
        this.createGitContainer(container.gitInfo)
      ];
    }

    if( this.options.dryRun !== true ) {
      response = await api.put({
        path : containerPath,
        content : JSON.stringify(metadata),
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
      if( response[HAS_MESSAGE_DIGEST] ) {
        let shas = response[HAS_MESSAGE_DIGEST]
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
          return;
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
  }

  async putBinaryMetadata(binary) {
    if( !binary.metadata ) return;


    let containerPath = pathutils.joinUrlPath(binary.fcrepoPath, 'fcr:metadata');
    console.log(`PUT BINARY METADATA: ${containerPath}\n -> ${binary.containerFile}`);

    if( this.options.dryRun !== true ) {
      let metadata = binary.metadata;

      let headers = {
        'content-type' : api.RDF_FORMATS.JSON_LD
      }

      let response = await api.get({
        path : containerPath,
        headers : {
          accept : api.RDF_FORMATS.JSON_LD
        }
      });

      // check if d exists and if there is the ucd metadata sha.
      if( this.options.forceMetadataUpdate !== true && response.data.statusCode === 200 ) {
        response = JSON.parse(response.last.body)[0];
        if( await this.isMetaShaMatch(response, metadata, binary.containerFile ) ) {
          console.log(` -> IGNORING (sha match)`);
          return;
        } 
      } else {
        let localSha = await api.sha(binary.containerFile);
        metadata[METADATA_SHA] = [{'@value': localSha}];
      }

      // strip any ldp types that are not allowed
      if( metadata['@type'] ) {
        this.TO_HEADER_TYPES.forEach(type => {
          if( !metadata['@type'].includes(type) ) return;
          metadata['@type'] = metadata['@type'].filter(item => item !== type);
        })
      }

      // check for gitinfo, add container
      if( binary.gitInfo ) {
        metadata = [
          metadata,
          this.createGitContainer(binary.gitInfo)
        ];
      }

      response = await api.put({
        path : containerPath,
        content : JSON.stringify(metadata),
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
          content : JSON.stringify(metadata),
          partial : true,
          headers
        });
      }

      if( response.error ) {
        throw new Error(response.error);
      }
      console.log(response.last.statusCode, response.last.body);
    }
  }

  async putIndirectContainers(rootDir, containers) {
    for( let container of containers ) {
      await this.putContainer(container, rootDir);
    }
  }

  getIndirectContainerList(rootDir, ag) {
    let containers = [];

    // root hasPart
    containers.push({
      fcrepoPath : pathutils.joinUrlPath(ag.fcrepoPath, 'hasPart'),
      localpath : '_virtual_',
      metadata : {
        '@id' : '',
        '@type' : [FIN_IO_INDIRECT_REFERENCE, INDIRECT_CONTAINER],
        [MEMBERSHIP_RESOURCE] : [{
          '@id':  pathutils.joinUrlPath('info:fedora', ag.fcrepoPath)
        }],
        [HAS_MEMBER_RELATION] : [{
          '@id': HAS_PART
        }],
        [INSERTED_CONTENT_RELATION] : [{
          '@id': HAS_PART
        }]
      }
    });

    // root isPartOf
    containers.push({
      fcrepoPath : pathutils.joinUrlPath(ag.fcrepoPath, 'isPartOf'),
      localpath : '_virtual_',
      metadata : {
        '@id' : '',
        '@type' : [FIN_IO_INDIRECT_REFERENCE, INDIRECT_CONTAINER],
        [MEMBERSHIP_RESOURCE] : [{
          '@id':  pathutils.joinUrlPath('info:fedora', ag.fcrepoPath)
        }],
        [IS_MEMBER_OF_RELATION] : [{
          '@id': IS_PART_OF
        }],
        [INSERTED_CONTENT_RELATION] : [{
          '@id': IS_PART_OF
        }]
      }
    });

    for( let item of rootDir.archivalGroups ) {
      if( item.isCollection ) continue;

      containers.push({
        fcrepoPath : pathutils.joinUrlPath(ag.fcrepoPath, 'isPartOf', item.id),
        localpath : '_virtual_',
        metadata : {
          '@id' : '',
          '@type' : [FIN_IO_INDIRECT_REFERENCE],
          [IS_PART_OF] : [{
            '@id': pathutils.joinUrlPath(api.getConfig().fcBasePath, item.fcrepoPath) 
          }]
        }
      });

      containers.push({
        fcrepoPath : pathutils.joinUrlPath(ag.fcrepoPath, 'hasPart', item.id),
        localpath : '_virtual_',
        metadata : {
          '@id' : '',
          '@type' : [FIN_IO_INDIRECT_REFERENCE],
          [HAS_PART] : [{
            '@id': pathutils.joinUrlPath(api.getConfig().fcBasePath, item.fcrepoPath) 
          }]
        }
      });
    }

    return containers;
  }

  createGitContainer(gitInfo) {
    for( let attr in gitInfo ) {
      gitInfo['http://library.ucdavis.edu/git#'+attr] = [{'@value' : gitInfo[attr]}];
      delete gitInfo[attr];
    }
    gitInfo['@id'] = '#gitsource';
    gitInfo['@type'] = 'http://library.ucdavis.edu/gitsource';
    return gitInfo;
  }

  async getRootMetadataContainer(path) {
    let response = await api.metadata({path});

    if( response.error || response.last.statusCode !== 200 ) {
      return {metadata: null, response: response.last};
    }

    let graph = JSON.parse(response.data.body);
    let metadata = graph.find(item => item['@id'].match(api.getConfig().fcBasePath+path));
    return {metadata, response: response.last};
  }

  async createArchivalGroupFcrManifest(path, manifest={}) {
    let metadata = await this.getRootMetadataContainer(path);
    manifest[path] = {statusCode: metadata.response.statusCode};
    if( metadata.response.error || metadata.response.statusCode !== 200 ) {
      return manifest;
    }
    metadata = metadata.metadata;

    if( !metadata ) {
      manifest[path].metadata = false;
      return manifest;
    }

    if( metadata['@type'] && !metadata['@type'].includes(FIN_IO_INDIRECT_REFERENCE) ) {
      if( metadata[HAS_MESSAGE_DIGEST] ) {
        let shas = metadata[HAS_MESSAGE_DIGEST]
          .map(item => {
            let [urn, sha, hash] = item['@id'].split(':')
            return [sha.replace('sha-', ''), hash];
          });

        // picking the 256 sha or first
        let sha = shas.find(item => item[0] === '256');
        if( !sha ) sha = shas[0];
        manifest[path].binarySha = sha[1];
      }
      if( metadata[METADATA_SHA] ) {
        manifest[path].metadataSha = metadata[METADATA_SHA][0]['@value'];
      }
      if( metadata[FIN_IO_INDIRECT_REFERENCE_SHA] ) {
        manifest[path].indirectSha = metadata[FIN_IO_INDIRECT_REFERENCE_SHA][0]['@value'];
      }
    } else {
      delete manifest[path]
    }

    let contains = metadata['http://www.w3.org/ns/ldp#contains'];
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
        metadataSha :  await api.sha(container.localfile)
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
    let localSha = await api.sha(file);
    if( currentJsonLd[METADATA_SHA] && currentJsonLd[METADATA_SHA][0]['@value'] === localSha ) {
      return true;
    }

    newJsonld[METADATA_SHA] = [{'@value': localSha}];

    return false;
  }

}

module.exports = ImportCollection;