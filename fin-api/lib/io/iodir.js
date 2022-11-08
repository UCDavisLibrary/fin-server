const fs = require('fs-extra');
const path = require('path');
const ignore = require('ignore');
const pathutils = require('../utils/path');
const transform = require('../utils/transform');
const ioutils = require('./utils');
const git = require('./git.js');
const config = require('../config');

const IGNORE_FILE = '.finignore';
const ARCHIVAL_GROUP = 'http://fedora.info/definitions/v4/repository#ArchivalGroup';
const COLLECTION = 'http://schema.org/Collection';
const IDENTIFIER = 'http://schema.org/identifier';
const IS_PART_OF = 'http://schema.org/isPartOf';
const HAS_PART = 'http://schema.org/hasPart';

const FIN_IO_INDIRECT_REFERENCE = 'http://library.ucdavis.edu/schema#finIoIndirectReference';

const INDIRECT_CONTAINER = 'http://www.w3.org/ns/ldp#IndirectContainer';
const MEMBERSHIP_RESOURCE = 'http://www.w3.org/ns/ldp#membershipResource';
const IS_MEMBER_OF_RELATION = 'http://www.w3.org/ns/ldp#isMemberOfRelation';
const INSERTED_CONTENT_RELATION = 'http://www.w3.org/ns/ldp#insertedContentRelation';
// https://www.npmjs.com/package/ignore

const ROOT_FCR_PATHS = {
  COLLECTION : '/collection',
  ITEM : '/item'
}

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
    if( process.stdout ) {
      // process.stdout.clearLine();
      // process.stdout.cursorTo(0); 
      // process.stdout.write('Crawling: '+subPath);
    }

    if( !subPath.match(/^\//) ) {
      subPath = '/'+subPath;
    }

    if( !config.fcrepoPathType ) config.fcrepoPathType = 'id';

    this.archivalGroup = archivalGroup;
    this.archivalGroups = archivalGroups;
    this.hasParts = [];
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

  _ioDirOptsToUtilsOpts(subPath) {
    return {
      currentPath: subPath || this.subPath,
      collectionPath : '/'+this.config.collectionName,
      includeFilter : this.config.includeFilter,
      subPaths : this.config.subPaths.map(p => ('/'+p.replace(/(^\/|\/$)/, '')).split('/'))
    }
  }

  async crawl() {
    if( this.children ) return this.children;

    if( !fs.existsSync(this.fsfull) ) {
      throw new Error('Unable to crawl directory: '+this.fsfull);
    }

    this.children = [];
    this.files = [];

    if( !ioutils.crawlSubPath(this._ioDirOptsToUtilsOpts()) ) {
      console.log('IGNORING (from options):', this.subPath);
      return this.children;
    }

    this.hasMetadata = false;

    let folderMetadata = await this.getMetadata(this.fsfull);
    this.metadata = null;
    if( folderMetadata.metadata !== null ) {
      this.hasMetadata = true;
      this.metadata = folderMetadata.metadata;
      this.containerFile = folderMetadata.filePath;
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
        if( this.isMetadataFile(child) && 
            children.includes(childFileInfo.name) && 
            fs.statSync(path.join(this.fsfull, childFileInfo.name)) ) {
          continue;
        }

        // add archive groups for binary files not in archive group
        let fileInfo = path.parse(p);
        if( !this.archivalGroup && !this.isMetadataFile(p) ) {
          let metadataFile = await this.getMetadata(p);

          if( metadataFile.metadata !== null ) {
            let metadata = metadataFile.metadata;
            let gitInfo = await git.info(this.fsroot, {cwd: this.fsroot});
            gitInfo.file = metadataFile.filePath.replace(gitInfo.rootDir, '');
            gitInfo.rootDir = this.fsfull.replace(gitInfo.rootDir, '');

            let id = this.getIdentifier(metadata) || fileInfo.base;
            this.archivalGroups.push({
              id,
              isBinary : true,
              fsroot : this.fsroot,
              localpath : p,
              subPath : this.subPath,
              fcrepoPath : ROOT_FCR_PATHS.ITEM+'/'+id,
              gitInfo,
              metadata,
              containerFile : metadataFile.filePath
            });
            continue;
          }
        }

        // TODO: need to check for hasPart/isPartOf and add inverse
        // perhaps on the crawl?  check collection AG and dir hasPart?
        if( this.archivalGroup && this.id === 'hasPart' || this.id === 'isPartOf' ) {
          await this.setHasPart(p)
          continue;
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

  async setHasPart(cPath) {
    let metadataFile = await this.getMetadata(cPath);
    let id = path.parse(cPath).name;

    let orgMetadata = metadataFile.metadata;

    let ref = orgMetadata[HAS_PART];
    if( !ref ) ref = orgMetadata[IS_PART_OF];

    let part = {
      id,
      fsroot : this.fsroot,
      localpath : cPath,
      subPath : this.subPath,
      containerFile : metadataFile.filePath
    }

    let hasPart = Object.assign({}, part);
    hasPart.fcrepoPath = this.archivalGroup.fcrepoPath +'/hasPart/'+id,
    hasPart.metadata = {
      '@id' : '',
      [HAS_PART] : ref
    };
    this.archivalGroup.hasParts.push(hasPart);

    let isPartOf = Object.assign({}, part);
    isPartOf.fcrepoPath = this.archivalGroup.fcrepoPath +'/isPartOf/'+id,
    isPartOf.metadata = {
      '@id' : '',
      '@type' : [FIN_IO_INDIRECT_REFERENCE],
      [IS_PART_OF] : ref
    };
  }

  parseIgnore(file, fsfull) {
    let ig = {
      rules : ignore(),
      fsfull : fsfull || this.fsfull
    };
 
    fs.readFileSync(file, 'utf-8')
      .split(/(\r|\n)/)
      .map(line => line.trim())
      .filter(line => line ? true : false)
      .forEach(line => ig.rules.add(line));
      
    this.config.ignore.push(ig);
  }

  ignore(file) {
    for( let ignore of this.config.ignore ) {
      if( !file.startsWith(ignore.fsfull) ) continue;
      let relpath = file
        .replace(new RegExp('^'+ignore.fsfull.replace(/\\/g, '\\\\')), '')
        .replace(/^(\/|\\)/, '');

      if( ignore.rules.ignores(relpath) ) {
        return true;
      }
    }
    return false;
  }

  async getFiles() {
    if( this.containers.length || this.binaries.length ) {
      return {containers: this.containers, binaries: this.binaries};
    }

    let symlinks = {};
    let binaryFiles = {};
    let containerFiles = {};

    for( let child of this.files ) {
      if( child === IGNORE_FILE ) {
        this.parseIgnore(path.join(this.fsfull, child));
        break;
      }
    }

    for( let child of this.files ) {
      if( this.ignore(path.join(this.fsfull, child)) ) {
        console.log('IGNORING (ignore file):', path.join(this.subPath, child));
        continue;
      }
      if( child.match(/^\..*/) ) {
        console.log('IGNORING (dot file):', path.join(this.subPath, child));
        continue;
      }
      if( ioutils.ignoreSubPath(this._ioDirOptsToUtilsOpts(path.join(this.subPath, child))) ) {
        console.log('IGNORING (from options):', path.join(this.subPath, child));
        continue;
      }

      let childFsPath = path.join(this.fsfull, child);
      let info = fs.lstatSync(childFsPath);

      if( info.isSymbolicLink() ) {
        let pointer = fs.realpathSync(childFsPath).split('/').pop();
        symlinks[pointer] = child;
      } else if( !this.isMetadataFile(child) ) {
        binaryFiles[child] = childFsPath;
      } else {
        containerFiles[child] = childFsPath;
      }
    }

    for( let name in binaryFiles ) {
      let id = symlinks[name] ? symlinks[name] : name;

      let binaryMetadata = await this.getMetadata(path.join(this.fsfull, name));
      let metadata = {
        id,
        filename : name,
        parentPath : this.subPath,
        fcrepoPath : this.getFcrepoPath(this.subPath, id),
        localpath : path.join(this.fsfull, name),
        metadata : binaryMetadata.metadata,
        containerFile : binaryMetadata.metadata ? binaryMetadata.filePath : null
      };

      // if we are not an archive group, grab git info
      if( !this.archivalGroup ) {
        metadata.gitInfo = await git.info(this.fsfull, {cwd: this.fsroot});
        metadata.gitInfo.file = this.containerFile.replace(gitInfo.rootDir, '');
        metadata.gitInfo.rootDir = this.fsfull.replace(gitInfo.rootDir, '');
        metadata.fcrepoPath = pathutils.joinUrlPath(ROOT_FCR_PATHS.ITEM, metadata.fcpath);
      }

      this.binaries.push(metadata);

      if( containerFiles[name+'.ttl'] ) {
        delete containerFiles[name+'.ttl'];
      }
      if( containerFiles[name+'.jsonld.json'] ) {
        delete containerFiles[name+'.jsonld.json'];
      }
    }

    for( let name in containerFiles ) {
      let fcpath = this.getFcrepoPath(this.subPath, path.parse(name).name);

      let parentFcPath = fcpath.split('/');
      let id = parentFcPath.pop();
      parentFcPath = parentFcPath.join('/');
      let containerMetadata = await this.getMetadata(path.join(this.fsfull, name));

      let fileObject = {
        localpath : path.join(this.fsfull, name),
        fcrepoPath: fcpath, 
        id, 
        parentPath : parentFcPath,
        containerFile : containerMetadata.filePath,
        metadata : containerMetadata.metadata
      }

      await this.handleArchivalGroup(fileObject);
      this.containers.push(fileObject);
    }

    return {
      containers: this.containers, 
      binaries: this.binaries
    };
  }

  isMetadataFile(filePath) {
    let info = path.parse(filePath);
    return (info.ext === '.ttl' || info.base.match(/\/.jsonld\.json$/)) ? true : false;
  }

  async getMetadata(filePath, options={}) {
    if( !fs.existsSync(filePath) ) return {filePath, metadata:null};

    if( fs.lstatSync(filePath).isDirectory() ) {
      // check for jsonld file one folder up
      let jsonldPath = path.resolve(filePath, '..', path.parse(filePath).base + '.jsonld.json');
      let jsonld = await this.getMetadata(jsonldPath, options);
      if( jsonld.metadata !== null ) return jsonld;

      // check for ttl file one folder up
      let ttlPath = path.resolve(filePath, '..', path.parse(filePath).base + '.ttl');
      let ttl = await this.getMetadata(ttlPath, options);
      if( ttl.metadata !== null ) return ttl;

      return {filePath, metadata: null};
    }

    if( !this.isMetadataFile(filePath) ) {
      // check for jsonld file 
      let jsonldPath = filePath+'.jsonld.json';
      let jsonld = await this.getMetadata(jsonldPath, options);
      if( jsonld.metadata !== null ) return jsonld;

      // check for ttl file
      let ttlPath = filePath+'.ttl';
      let ttl = await this.getMetadata(ttlPath, options);
      if( ttl.metadata !== null ) return ttl;

      return {filePath, metadata: null};
    }

    let content = fs.readFileSync(filePath, 'utf-8');
    let jsonld = null;

    if( path.parse(filePath).ext === '.ttl' ) {
      jsonld = await transform.turtleToJsonLd(content);
    } else if( filePath.match(/\.jsonld\.json$/) ) {
      jsonld = JSON.parse(content);
    }

    if( jsonld === null ) return {filePath, metadata: null};

    // TODO: have id lookup?
    if( Array.isArray(jsonld) && jsonld.length ) {
      if( options.id ) {
        jsonld = jsonld.find(item => item['@id'] === options.id);
        if( !jsonld ) jsonld = jsonld[0];
      } else {
        jsonld = jsonld[0];
      }
    }

    return {filePath, metadata: jsonld};
  }

  getTTLPath() {
    return path.join(this.root, this.path, 'index.ttl');
  }


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
        return pathutils.joinUrlPath(fileObject.archivalGroup.fcrepoPath, subpath, id);
      }
    }

    if( this.config.fcrepoPathType === 'id' ) {
      return id;
    }

    return pathutils.joinUrlPath(subpath, id);
  }

  getIdentifier(metadata={}) {
    if( metadata['@id'] ) {
      return metadata['@id'];
    }

    if( metadata[IDENTIFIER] && metadata[IDENTIFIER].length ) {
      // attempt to find ark
      let ark = metadata[IDENTIFIER].find(item => (item['@id'] || item['@value']).match(/^ark:\//) );
      if( ark ) return ark['@id'] || ark['@value'];

      // TODO: secondary uri?

      // if no ark return first
      return metadata[IDENTIFIER][0]['@id'] || metadata[IDENTIFIER][0]['@value'];
    }

    return null;
  }

  // setIndirectCollection(fileObject) {
  //   fileObject = fileObject || this;

  //   // fileObject.indirectProxyUri = 'http://library.ucdavis.edu/'+fileObject.id+'/proxy';
  //   fileObject.indirectProxyUri = IS_PART_OF;

  //   if( !fileObject.metadata['@type'].includes(INDIRECT_CONTAINER) ) {
  //     fileObject.metadata['@type'].push(INDIRECT_CONTAINER);
  //   }

  //   fileObject.metadata[MEMBERSHIP_RESOURCE] = [{
  //     '@id': pathutils.joinUrlPath(config.fcBasePath, fileObject.fcrepoPath)
  //   }];

  //   fileObject.metadata[IS_MEMBER_OF_RELATION] = [{
  //     '@id': IS_PART_OF
  //   }];

  //   fileObject.metadata[INSERTED_CONTENT_RELATION] = [{
  //     '@id': fileObject.indirectProxyUri
  //   }];
  // }

  async handleArchivalGroup(fileObject) {
    if( fileObject === undefined ) fileObject = this;

    if( fileObject.metadata && fileObject.metadata['@type'] && 
      fileObject.metadata['@type'].includes(ARCHIVAL_GROUP) ) {
      fileObject.archivalGroup = fileObject;

      this.archivalGroups.push(fileObject);
      fileObject.gitInfo = await git.info(this.fsfull, {cwd: this.fsroot});
      fileObject.gitInfo.file = fileObject.containerFile.replace(fileObject.gitInfo.rootDir, '');
      fileObject.gitInfo.rootDir = this.fsfull.replace(fileObject.gitInfo.rootDir, '');

      if( fileObject.metadata['@type'].includes(COLLECTION) ) {
        fileObject.isCollection = true;
        fileObject.localpath = fileObject.containerFile;
        fileObject.fcrepoPath = ROOT_FCR_PATHS.COLLECTION;
      } else {
        fileObject.fcrepoPath = ROOT_FCR_PATHS.ITEM;
      }

      fileObject.id = this.getIdentifier(fileObject.metadata) || fileObject.id;
      fileObject.fcrepoPath = this.getFcrepoPath(fileObject.subPath, fileObject.id, fileObject);
    }
  }

}

module.exports = IoDir;