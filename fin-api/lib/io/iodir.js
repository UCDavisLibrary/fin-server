const fs = require('fs-extra');
const path = require('path');
const pathutils = require('../utils/path');
const utils = require('./utils');
const git = require('./git.js');


class IoDir {

  /**
   * 
   * @param {String} fsroot 
   * @param {String} subPath for child directories 
   * @param {Object} config
   * @param {Object} config.fcrepoPathType id or subpath. 
   * @param {IoDir} archivalGroup reference to IoDir object for ArchivalGroup 
   * @param {Array} archivalGroups list of all known ArchivalGroups
   */
  constructor(fsroot, subPath='', config={}, archivalGroup, archivalGroups=[]) {
    if( process.stdout && process.stdout.clearLine ) {
      process.stdout.clearLine();
      process.stdout.cursorTo(0); 
      process.stdout.write('Crawling: '+subPath);
    }

    if( !subPath.match(/^\//) ) {
      subPath = '/'+subPath;
    }

    if( !config.fcrepoPathType ) config.fcrepoPathType = 'id';

    this.archivalGroup = archivalGroup;
    this.archivalGroups = archivalGroups;
    this.hasRelations = []; // virtualIndirectContainers defined on disk
    this.fsroot = fsroot;
    this.subPath = subPath;
    this.fcrepoPath = '';
    this.fsfull = path.join(this.fsroot, this.subPath);

    this.config = config;
    if( !this.config.ignore ) {
      this.config.ignore = [];
    }
    if( !this.config.subPaths ) {
      this.config.subPaths = [];
    }

    let parts = subPath.split('/');
    this.id = parts.pop();
    this.pathName = this.id;

    this.parentSubPath = parts.join('/');


    this.containers = [];
    this.binaries = [];
  }

  async crawl() {
    if( this.children ) return this.children;

    if( !fs.existsSync(this.fsfull) ) {
      throw new Error('Unable to crawl directory: '+this.fsfull);
    }

    this.children = [];
    this.files = [];

    this.hasContainerGraph = false;

    let folderGraph = await this.getContainerGraph(this.fsfull);
    this.containerGraph = null;
    if( folderGraph.graph !== null ) {
      this.hasContainerGraph = true;
      this.containerGraph = folderGraph.graph;
      this.containerFile = folderGraph.filePath;
      this.mainGraphNode = folderGraph.mainNode;
      await this.handleArchivalGroup();

      if( !this.fcrepoPath ) {
        this.fcrepoPath = this.getFcrepoPath(path.resolve(this.subPath, '..'), this.id);
      }
    }

    let children = await fs.readdir(this.fsfull);
    for( let child of children ) {
      let p = path.join(this.fsfull, child);
      if( !fs.statSync(p).isDirectory() ) {

        // if this is a .ttl file and there is a directory of same name, skip.
        let childFileInfo = path.parse(child);
        if( this.isContainerGraphFile(child) && 
            children.includes(childFileInfo.name) && 
            fs.statSync(path.join(this.fsfull, childFileInfo.name)) ) {
          continue;
        }

        // add archive groups for binary files not in archive group
        let fileInfo = path.parse(p);
        if( !this.archivalGroup && !this.isContainerGraphFile(p) && !this.config.importFromRoot ) {
          let containerFile = await this.getContainerGraph(p);

          if( containerFile.graph !== null ) {
            let graph = containerFile.graph;
            let gitInfo = await git.info(this.fsroot, {cwd: this.fsroot});
            gitInfo.file = containerFile.filePath.replace(gitInfo.rootDir, '');
            gitInfo.rootDir = this.fsfull.replace(gitInfo.rootDir, '');

            let id = this.getIdentifier(containerFile.mainNode) || fileInfo.base;
            this.archivalGroups.push({
              id,
              isBinary : true,
              fsroot : this.fsroot,
              localpath : p,
              subPath : this.subPath,
              fcrepoPath : utils.ROOT_FCREPO_PATHS.ITEM+'/'+id,
              gitInfo,
              containerGraph: graph,
              mainGraphNode : containerFile.mainNode,
              containerFile : containerFile.filePath
            });
            continue;
          }
        }

        // TODO: need to check for hasPart/isPartOf and add inverse
        // perhaps on the crawl?  check collection AG and dir hasPart?
        if( this.archivalGroup && this.typeConfig && this.typeConfig.virtualIndirectContainers ) {
          await this.setHasRelation(p)
          // continue;
        }

        this.files.push(child);
        continue;
      }

      child = new IoDir(
        this.fsroot, 
        path.join(this.subPath, child),
        this.config,
        this.archivalGroup,
        this.archivalGroups
      );

      this.children.push(child);
      await child.crawl();
    }

    await this.getFiles();

    return this.children;
  }

  /**
   * @method setHasRelation
   * @description given a path, create the 'virtual' fin io indirect
   * reference has/is relation root containers
   * 
   * @param {*} cPath 
   */
  async setHasRelation(cPath) {
    let containerGraph = await this.getContainerGraph(cPath);
    let id = path.parse(cPath).name;

    let vIdCConfig = this.typeConfig.virtualIndirectContainers;
    let hasRelation = vIdCConfig.links[utils.PROPERTIES.LDP.HAS_MEMBER_RELATION];
    let isRelation = vIdCConfig.links[utils.PROPERTIES.LDP.IS_MEMBER_OF_RELATION];

    let mainNode = containerGraph.mainNode;

    let ref = mainNode[hasRelation];
    if( !ref ) ref = mainNode[isRelation];

    let relationDef = {
      id,
      fsroot : this.fsroot,
      localpath : cPath,
      subPath : this.subPath,
      containerFile : containerGraph.filePath
    }

    let has = Object.assign({}, relationDef);
    has.fcrepoPath = this.archivalGroup.fcrepoPath +'/'+vIdCConfig.hasFolder+'/'+id,
    has.mainGraphNode = {
      '@id' : '',
      [hasRelation] : ref
    };
    has.containerGraph = [has.mainGraphNode];
    this.archivalGroup.hasRelations.push(has);

    let is = Object.assign({}, relationDef);
    is.fcrepoPath = this.archivalGroup.fcrepoPath +'/'+vIdCConfig.isFolder+'/'+id,
    is.mainGraphNode = {
      '@id' : '',
      '@type' : [utils.TYPES.FIN_IO_INDIRECT_REFERENCE],
      [isRelation] : ref
    };
    is.containerGraph = [is.mainGraphNode];
    this.archivalGroup.hasRelations.push(is);
  }

  /**
   * @method getFiles
   * @description call after dir has been crawled.  Will return all finio file objects,
   * both containers and binaries, for a given dir. These file objects will be ready for
   * insert by `fin io import`.
   * 
   * @returns {Object}
   */
  async getFiles() {
    // this function has already run.  just return results
    if( this.containers.length || this.binaries.length ) {
      return {containers: this.containers, binaries: this.binaries};
    }

    let symlinks = {};
    let binaryFiles = {};
    let containerFiles = {};

    for( let child of this.files ) {
      if( child.match(/^\..*/) ) {
        console.log('IGNORING (dot file):', path.join(this.subPath, child));
        continue;
      }

      let childFsPath = path.join(this.fsfull, child);
      let info = fs.lstatSync(childFsPath);

      if( info.isSymbolicLink() ) {
        let pointer = fs.realpathSync(childFsPath).split('/').pop();
        symlinks[pointer] = child;
      } else if( !this.isContainerGraphFile(child) ) {
        binaryFiles[child] = childFsPath;
      } else {
        containerFiles[child] = childFsPath;
      }
    }

    // for all binary files, create binary file container objects
    for( let name in binaryFiles ) {
      let id = symlinks[name] ? symlinks[name] : name;

      // read the binary container graph if it exists
      let binaryGraph = await this.getContainerGraph(path.join(this.fsfull, name));
      let container = {
        id,
        filename : name,
        parentPath : this.subPath,
        fcrepoPath : this.getFcrepoPath(this.subPath, id),
        localpath : path.join(this.fsfull, name),
        containerGraph : binaryGraph.graph,
        mainGraphNode : binaryGraph.mainNode,
        containerFile : binaryGraph.graph ? binaryGraph.filePath : null
      };

      // if we are not an archive group, grab git info
      if( !this.archivalGroup && this.containerFile ) {
        container.gitInfo = await git.info(this.fsfull, {cwd: this.fsroot});
        container.gitInfo.file = binaryGraph.filePath.replace(container.gitInfo.rootDir, '');
        container.gitInfo.rootDir = this.fsfull.replace(container.gitInfo.rootDir, '');
        if( !this.config.importFromRoot ) {
          container.fcrepoPath = pathutils.joinUrlPath(utils.ROOT_FCREPO_PATHS.ITEM, container.fcrepoPath);
        }
      }

      // add binary container to list
      this.binaries.push(container);

      // remove binary container for list of known containers for dir
      utils.CONTAINER_FILE_EXTS.forEach(ext => {
        if( containerFiles[name+ext] ) {
          delete containerFiles[name+ext];
        }
      })
    }

    // for all container (.ttl, jsonld.json) files, create binary file container objects
    for( let name in containerFiles ) {
      let fcpath = this.getFcrepoPath(this.subPath, path.parse(name).base.replace(utils.CONTAINER_FILE_EXTS_REGEX, ''));

      let parentFcPath = fcpath.split('/');
      let id = parentFcPath.pop();
      parentFcPath = parentFcPath.join('/');
      let containerGraph = await this.getContainerGraph(path.join(this.fsfull, name));

      let fileObject = {
        localpath : path.join(this.fsfull, name),
        fcrepoPath: fcpath, 
        id, 
        parentPath : parentFcPath,
        containerFile : containerGraph.filePath,
        mainGraphNode : containerGraph.mainNode,
        containerGraph : containerGraph.graph
      }

      await this.handleArchivalGroup(fileObject);
      this.containers.push(fileObject);
    }

    return {
      containers: this.containers, 
      binaries: this.binaries
    };
  }

  /**
   * @method isContainerGraphFile
   * @description is the given file path a special container graph (metadata) file
   * type
   * 
   * @param {String} filePath 
   * @returns {Boolean}
   */
  isContainerGraphFile(filePath) {
    let info = path.parse(filePath);
    if( info.base.match(utils.CONTAINER_FILE_EXTS_REGEX) ) return true;
    return false;
  }

  async getContainerGraph(filePath, options={}) {
    if( !fs.existsSync(filePath) ) return {filePath, graph:null};

    // special check for directories
    if( fs.lstatSync(filePath).isDirectory() ) {

      // check for container graph file one folder up
      for( let ext of utils.CONTAINER_FILE_EXTS ) {
        let jsonldPath = path.resolve(filePath, '..', path.parse(filePath).base + ext);
        let jsonld = await this.getContainerGraph(jsonldPath, options);
        if( jsonld.graph !== null ) return jsonld;
      }

      return {filePath, graph: null};
    }

    // special check for binary files
    if( !this.isContainerGraphFile(filePath) ) {
      // see if there is an [binaryFile].[containerExt] file
      for( let ext of utils.CONTAINER_FILE_EXTS ) {
        let jsonldPath = filePath+ext;
        let jsonld = await this.getContainerGraph(jsonldPath, options);
        if( jsonld.graph !== null ) return jsonld;
      }

      return {filePath, graph: null};
    }

    let jsonld = await utils.parseContainerGraphFile(filePath);
    if( jsonld === null ) return {filePath, graph: null};

    if( !jsonld['@graph'] && !Array.isArray(jsonld) ) {
      jsonld = [jsonld];
    }

    // attempt to lookup main node for graph
    let mainNode = utils.getMainGraphNode(jsonld, options.id);

    return {filePath, graph: jsonld, mainNode};
  }

  /**
   * @method getFcrepoPath
   * @description given the subpath of the crawl, container id
   * and fileObject, return the correct fcrepo path
   * 
   * @param {*} subPath 
   * @param {*} id 
   * @param {*} fileObject 
   * @returns 
   */
  getFcrepoPath(subPath, id, fileObject) {
    if( fileObject === undefined ) fileObject = this;

    // this is root archival group
    if( fileObject.archivalGroup === fileObject ) {
      if( this.config.fcrepoPathType === 'id' ) {
        return pathutils.joinUrlPath(fileObject.archivalGroup.fcrepoPath, id);
      } else if( this.config.fcrepoPathType === 'subpath' ) {
        return pathutils.joinUrlPath(fileObject.archivalGroup.fcrepoPath, subPath, id);
      }
    }

    if( fileObject.archivalGroup ) {
      if( this.config.fcrepoPathType === 'id' ) {
        return pathutils.joinUrlPath(
          fileObject.archivalGroup.fcrepoPath,
          subPath.replace(fileObject.archivalGroup.subPath, ''),
          id
        );
      } else if( this.config.fcrepoPathType === 'subpath' ) {
        return pathutils.joinUrlPath(fileObject.archivalGroup.fcrepoPath, subPath, id);
      }
    }

    if( this.config.fcrepoPathType === 'id' ) {
      return id;
    }

    return pathutils.joinUrlPath(subPath, id);
  }

  getIdentifier(graphNode={}) {
    if( graphNode['@id'] ) {
      return graphNode['@id'];
    }

    let ids = graphNode[utils.PROPERTIES.SCHEMA.IDENTIFIER];
    if( ids && ids.length ) {
      
        // attempt to find ark
      let ark = ids
        .find(item => (item['@id'] || item['@value']).match(/^ark:\//) );
      if( ark ) return ark['@id'] || ark['@value'];

      // TODO: secondary uri?

      // if no ark return first
      return ids[0]['@id'] || ids[0]['@value'];
    }

    return null;
  }


  /**
   * @method handleArchivalGroup
   * @description handle ldp:ArchivalGroup nodes. this method checks if node is of 
   * correct ldp:ArchivalGroup type. If so, sets the gitInfo for the node, and sets
   * the correct fcrepo root path based on container type.
   * 
   * @param {*} fileObject 
   */
  async handleArchivalGroup(fileObject) {
    if( fileObject === undefined ) fileObject = this;

    if( fileObject.mainGraphNode && fileObject.mainGraphNode['@type'] && 
      fileObject.mainGraphNode['@type'].includes(utils.TYPES.ARCHIVAL_GROUP) ) {
      fileObject.archivalGroup = fileObject;

      this.archivalGroups.push(fileObject);
      fileObject.gitInfo = await git.info(this.fsfull, {cwd: this.fsroot});
      fileObject.gitInfo.file = fileObject.containerFile.replace(fileObject.gitInfo.rootDir, '');
      fileObject.gitInfo.rootDir = this.fsfull.replace(fileObject.gitInfo.rootDir, '');

      if( this.config.instanceConfig ) {
        fileObject.typeConfig = this.config.instanceConfig.typeMappers.find(item => {
          for( let type of item.types ) {
            if( fileObject.mainGraphNode['@type'].includes(type) ) return true;
          }
          return false;
        });

        if( !fileObject.typeConfig && this.config.instanceConfig.default ) {
          fileObject.typeConfig = this.config.instanceConfig.default;
        }
      }

      if( fileObject.typeConfig ) {
        fileObject.fcrepoPath = fileObject.typeConfig.basePath;
      }

      // if( fileObject.mainGraphNode['@type'].includes(utils.TYPES.COLLECTION) ) {
      //   fileObject.isCollection = true;
      //   fileObject.localpath = fileObject.containerFile;
      //   fileObject.fcrepoPath = utils.ROOT_FCREPO_PATHS.COLLECTION;
      // } else {
      //   fileObject.fcrepoPath = utils.ROOT_FCREPO_PATHS.ITEM;
      // }

      fileObject.id = this.getIdentifier(fileObject.mainGraphNode) || fileObject.id;
      fileObject.fcrepoPath = this.getFcrepoPath(fileObject.subPath, fileObject.id, fileObject);
    }
  }


}

module.exports = IoDir;