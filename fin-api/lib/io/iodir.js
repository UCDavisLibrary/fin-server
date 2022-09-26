const fs = require('fs-extra');
const path = require('path');
const ignore = require('ignore');
const pathutils = require('../utils/path');
const ioutils = require('./utils');

const IGNORE_FILE = '.finignore';
// https://www.npmjs.com/package/ignore

class IoDir {

  constructor(fsroot, subPath, config={}) {
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
    if( fs.existsSync(path.resolve(this.fsfull, '..', this.id+'.ttl')) ) {
      this.hasMetadata = true;
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
        this.config
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

      result.containers.push({
        localpath : path.join(this.fsfull, name),
        fcpath, id, 
        parentPath : parentFcPath
      });
    }

    return result;
  }

  getTTLPath() {
    return path.join(this.root, this.path, 'index.ttl');
  }

  getBinaryPath() {
    return path.join(this.root, this.path, 'index.bin');
  }

}

module.exports = IoDir;