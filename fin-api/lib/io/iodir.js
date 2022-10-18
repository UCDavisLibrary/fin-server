const fs = require('fs-extra');
const path = require('path');
const ignore = require('ignore');
const pathutils = require('../utils/path');
const transform = require('../utils/transform');
const ioutils = require('./utils');

const IGNORE_FILE = '.finignore';
const ARCHIVAL_GROUP = 'http://fedora.info/definitions/v4/repository#ArchivalGroup';
// https://www.npmjs.com/package/ignore

class IoDir {

  constructor(fsroot, subPath, config={}, archivalGroup) {
    if( !subPath.match(/^\//) ) {
      subPath = '/'+subPath;
    }

    this.archivalGroup = archivalGroup;
    this.fsroot = fsroot;
    this.subPath = subPath;
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

    this.parentSubPath = parts.join('/');
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
    let folderMetadataFile = path.resolve(this.fsfull, '..', this.id+'.ttl');
    this.metadata = null;
    if( fs.existsSync(folderMetadataFile) ) {
      this.hasMetadata = true;
      this.metadata = (await this.getMetadata(folderMetadataFile))[0];
      
      if( this.metadata && this.metadata['@type'] && this.metadata['@type'].includes(ARCHIVAL_GROUP) ) {
        this.archivalGroup = this;
      }
    }

    let children = await fs.readdir(this.fsfull);
    for( let child of children ) {
      let p = path.join(this.fsfull, child);
      if( !fs.statSync(p).isDirectory() ) {
        this.files.push(child);
        continue;
      }

      child = new IoDir(
        this.fsroot, 
        path.join(this.subPath, child),
        this.config,
        this.archivalGroup
      );

      this.children.push(child);
      await child.crawl();
    }

    return this.children;
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
      } else if( path.parse(child).ext !== '.ttl' ) {
        binaryFiles[child] = childFsPath;
      } else {
        containerFiles[child] = childFsPath;
      }
    }

    let result = {
      containers : [],
      binaries : []
    }

    for( let name in binaryFiles ) {
      let id = symlinks[name] ? symlinks[name] : name;

      let fcpath = pathutils.joinUrlPath(this.subPath, id);
      if( this.config.fcrepoPath ) {
        fcpath = pathutils.joinUrlPath(this.config.fcrepoPath, fcpath);
      }

      if( this.archivalGroup ) {
        id = fcpath.replace(this.archivalGroup.subPath, '').replace(/^\//, '');
        fcpath = this.archivalGroup.subPath;
      } else {
        id = fcpath;
        fcpath = '/';
      }

      result.binaries.push({
        id,
        filename : name,
        parentPath : this.subPath,
        fcpath,
        localpath : path.join(this.fsfull, name),
        metadata : containerFiles[name+'.ttl'] || null
      });
      if( containerFiles[name+'.ttl'] ) {
        delete containerFiles[name+'.ttl'];
      }
    }

    for( let name in containerFiles ) {
      let fcpath = pathutils.joinUrlPath(this.subPath, path.parse(name).name);
      if( this.config.fcrepoPath ) {
        fcpath = pathutils.joinUrlPath(this.config.fcrepoPath, fcpath);
      }

      let parentFcPath = fcpath.split('/');
      let id = parentFcPath.pop();
      parentFcPath = parentFcPath.join('/');

      
      // at this point, we are in the parent.  We need to check child dirs to 
      // see if there are any marked as an archive group and the parent is
      // about to add the .ttl file.
      let isArchiveGroup = this.children.find(item => item.archivalGroup && item.fsfull+'.ttl' === path.join(this.fsfull, name));
      if( isArchiveGroup  ) {
        fcpath = this.subPath;
      } else if( this.archivalGroup ) {
        id = fcpath.replace(this.archivalGroup.subPath, '').replace(/^\//, '');
        fcpath = this.archivalGroup.subPath;
      } else {
        id = fcpath;
        fcpath = '/';
      }

      result.containers.push({
        localpath : path.join(this.fsfull, name),
        fcpath, id, 
        parentPath : parentFcPath
      });
    }

    return result;
  }

  getMetadata(path, options={}) {
    let content = fs.readFileSync(path, 'utf-8');

    // binary files are posted at /fcr:metadata, so root rdf node should point one level up
    if( options.binaryId ) {
      content = content.replace(/<\s*>/g, '<../'+options.binaryId+'>');
    }

    // if we are renaming collections, this hack is for the fact the top level containers
    // must have the collection name in the ttl to correctly PUT to the LDP.  Simply
    // replacing the old collection name with the new collection name.
    if( options.oldCollectionName && options.newCollectionName ) {
      content = content.replace(
        new RegExp('<'+options.oldCollectionName+'(\/| *>)', 'g'), 
        '<'+options.newCollectionName+'$1'
      );
    }

    return transform.turtleToJsonLd(content);
  }

  getTTLPath() {
    return path.join(this.root, this.path, 'index.ttl');
  }

  getBinaryPath() {
    return path.join(this.root, this.path, 'index.bin');
  }

}

module.exports = IoDir;