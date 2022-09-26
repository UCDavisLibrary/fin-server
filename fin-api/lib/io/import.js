const IoDir = require('./iodir');
const config = require('../config');
const fs = require('fs-extra');
const path = require('path');
const ignore = require('ignore');
const yaml = require('js-yaml');
const mime = require('mime');
const pathutils = require('../utils/path');

let api;
let CONFIG_DIR = '.fin';
let CONFIG_FILE = 'config.yml';
const IGNORE_FILE = '.finignore';

class ImportCollection {

  constructor(_api) {
    api = _api;
  }

  /**
   * @method run
   * 
   * @param {Object} options
   * @param {String} options.collectionName Optional collection name to insert.  Defaults to current collection name
   * @param {String} options.fsPath local file system path
   * @param {Boolean} options.includeImplementation defaults to true
   * @param {Boolean} options.ignorePost ignore container creation (POST), just re-PUT metadata
   * @param {Boolean} options.ignoreRemoval skip container removal where fc containers that do not exist on disk are removed.
   * @param {RegExp} options.includeFilter filter paths to include
   * @param {Boolean} options.dryRun do not download the files
   * @param {Array} options.subPaths only export specified subpaths
   * @param {String} options.fcrepoPath import files to a specificed path within the collection
   * 
   */
  async run(options) {
    if( options.includeImplementation === undefined ) options.includeImplementation = true;
    if( options.ignorePost !== true ) options.ignorePost = false;
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
    let config = this.parseConfig(options.fsPath);
    
    console.log('IMPORT OPTIONS:');
    console.log(options);
    console.log('COLLECTION CONFIG:');
    console.log(config);

    // collection name we are inserting into.  Either passed via options or provided by config
    let newCollectionName = options.collectionName || config.source.collection;

    // root fs path
    let fsPath = path.join(options.fsPath, config.source.collection || '.');

    // IoDir object for root fs path, crawl repo
    let rootDir = new IoDir(fsPath, '/', {
      includeFilter : options.includeFilter,
      dryRun : options.dryRun,
      subPaths : options.subPaths,
      fcrepoPath : options.fcrepoPath,
      collectionName : config.source.collection || options.collectionName
    });

    // set root ignore file if it exists
    if( fs.existsSync(path.join(options.fsPath, IGNORE_FILE)) ) {
      rootDir.parseIgnore(
        path.join(options.fsPath, IGNORE_FILE),
        path.join(options.fsPath, '/')
      );
    }

    await rootDir.crawl();


    // check for current collection status
    let response = await api.head({path: '/collection/'+newCollectionName});
    
    // check if collection is deleted but tombstone exists
    if( response.last.statusCode === 410 ) {
      console.log('Collection tombstone found, removing');
      if( options.dryRun !== true ) {
        try {
          await api.collection.delete({id: newCollectionName});
        } catch(e) { 
          console.log(e);
        }
      }
    }

    // create collection if it doesn't exist
    if( response.last.statusCode !== 200 ) {
      console.log('Collection doesn\'t exist, creating');
      if( options.dryRun !== true ) {
        await api.collection.create({
          id: newCollectionName
        });
      }
    }

    // add implementation containers
    // we do not preform this step in importing to a nested collection path
    if( options.includeImplementation && !options.fcrepoPath ) {
      let ig = ignore();
      ig.add(CONFIG_FILE);
      rootDir.config.ignore.push({
        rules : ig,
        fsfull : path.join(options.fsPath, CONFIG_DIR)
      });
    
      let implDir = new IoDir(
        options.fsPath, 
        CONFIG_DIR,
        rootDir.config
      );

      await implDir.crawl();
        
      let implRootDir = new IoDir(fsPath, '/');
      implRootDir.children = [implDir];
      implRootDir.files = [];

      await this.postContainers(newCollectionName, implRootDir, config);
      await this.putContainers(newCollectionName, implRootDir, config.source.collection);
    }
    
    // create empty rdf as well as binary containers
    if( !options.ignorePost ) {
      await this.postContainers(newCollectionName, rootDir, config);
    } else {
      console.log('IGNORING CONTAINER POST');
    }

    // patch root collection container
    if( !options.fcrepoPath ) {
      let rootMetadata = path.resolve(options.fsPath, config.source.collection+'.ttl');

      // add the root metadata
      if( fs.existsSync(rootMetadata) ) {
        let p = path.join('/collection', newCollectionName);
        console.log('PUT CONTAINER '+p+'.ttl');

        if( this.options.dryRun !== true ) {
          response = await api.put({
            path : p,
            content : this.getMetadata(rootMetadata, {newCollectionName, oldCollectionName: config.source.collection}),
            partial : true,
            headers : {
              'content-type' : api.RDF_FORMATS.TURTLE
            }
          });
          console.log(response.last.statusCode, response.last.body);
        }
      }
    }

    // path rdf metadata now that all containers exist
    await this.putContainers(newCollectionName, rootDir, config.source.collection);

    // remove all containers that exist in fedora but not locally on disk
    if( !options.ignoreRemoval ) {
      console.log('Crawling for container removal');

      if( !options.fcrepoPath ) {
        await this.remove(rootDir, newCollectionName);
      } else {
        // we can only sync deletes for child files as other same-level containers in fcrepo
        // may exist but not be on disk with fcrepoPath

        // remove same level files
        let fsPaths = await this.getAllFsPaths(rootDir, {}, newCollectionName);
        for( let file of rootDir.files ) {
          let startPath = pathutils.joinUrlPath(this.options.fcrepoPath, file);
          await this._removeFcPaths(startPath, fsPaths, newCollectionName);
        }

        // remove sub folders
        for( let child of rootDir.children ) {
          await this.remove(child, newCollectionName);
        }
      }

    } else {
      console.log('IGNORING CONTAINER REMOVAL');
    }

    console.log('Filesytem import completed.');
  }

  /**
   * @method parseConfig
   * @description parse the ./.fin/config.yaml file
   * 
   * @param {String} fsRoot
   * 
   * @returns {Object}
   */
  parseConfig(fsRoot) {
    let configFolder = path.join(fsRoot, CONFIG_DIR);
    let configFile = path.join(configFolder, CONFIG_FILE);

    if( !fs.existsSync(configFolder) ) return {source:{},implementation:{}};
    if( !fs.existsSync(configFile) ) return {source:{},implementation:{}};
    
    let config = yaml.safeLoad(fs.readFileSync(configFile, 'utf-8'));
    if( !config.source ) config.source = {};
    if( !config.implementation ) config.implementation = [];
    config.implementation = config.implementation.map(item => {
      let [id, fcPath] = item.split(':');
      return {id, fcPath}; 
    });

    return config;
  }

  async remove(dir, collectionName) {
    let fsPaths = await this.getAllFsPaths(dir, {}, collectionName);
    fsPaths[pathutils.joinUrlPath('/collection', collectionName, '.fin')] = true;

    let startPath = '';
    if( this.options.fcrepoPath ) {
      startPath = pathutils.joinUrlPath(this.options.fcrepoPath, dir.subPath);
    }

    await this._removeFcPaths(startPath, fsPaths, collectionName);
  }

  async _removeFcPaths(currentPath, fsPaths, collectionName) {
    let cPath = pathutils.joinUrlPath('/collection', collectionName, currentPath);

    let response = await api.head({path: cPath});
    if( response.last.statusCode !== 200 ) return;

    if( !api.isRdfContainer(response.last) ) {
      if( !fsPaths[cPath] ) {
        console.log('REMOVING: '+cPath);
        if( this.options.dryRun !== true ) {
          response = await api.delete({
            path : cPath,
            permanent : true
          });
          console.log(response.last.statusCode, response.last.body);
        }
      }
      return;
    } 
    
    response = await api.get({
      path: cPath,
      headers : {
        accept : api.RDF_FORMATS.JSON_LD
      }
    });
    response = JSON.parse(response.last.body)[0];

    let contains = response['http://www.w3.org/ns/ldp#contains'];
    if( !contains ) return;
    if( !Array.isArray(contains) ) {
      contains = [contains];
    }

    for( var i = 0; i < contains.length; i++ ) {
      let p = contains[i]['@id'].replace(new RegExp('.*'+pathutils.joinUrlPath(config.fcBasePath, 'collection', collectionName)+'/'), '');

      if( p.match(/^.fin/) ) continue; 

      if( !fsPaths[pathutils.joinUrlPath('/collection', collectionName, p)] ) {
        console.log('REMOVING: '+pathutils.joinUrlPath('/collection', collectionName, p));
        if( this.options.dryRun !== true ) {
          response = await api.delete({
            path : pathutils.joinUrlPath('/collection', collectionName, p),
            permanent : true
          });
          console.log(response.last.statusCode, response.last.body);
        }
      } else {
        await this._removeFcPaths(p, fsPaths, collectionName);
      }
    }
  }

  async getAllFsPaths(dir, paths, collectionName) {
    let files = await dir.getFiles();
    for( let container of files.containers ) {
      paths[pathutils.joinUrlPath('/collection', collectionName, container.fcpath)] = true;
    }
    for( let binary of files.binaries ) {
      paths[pathutils.joinUrlPath('/collection', collectionName, binary.fcpath)] = true;
    }
    for( let child of dir.children ) {
      await this.getAllFsPaths(child, paths, collectionName);
    }
    return paths;
  }

  /**
   * @method postContainers
   * @description create all containers.  rdf containers are empty.  binary files or posted.
   * 
   * @param {String} collectionName new collection name
   * @param {IoDir} dir 
   */
  async postContainers(collectionName, dir, collectionConfig={}) {
    let files = await dir.getFiles();

    for( let container of files.containers ) {
      let response = await api.head({path: pathutils.joinUrlPath('/collection', collectionName, container.fcpath)});
      if( response.last.statusCode === 200 ) continue;

      console.log('POST CONTAINER: ', container.fcpath);
      if( this.options.dryRun !== true ) {
        response = await api.collection.addResource({
          collectionId : collectionName,
          id : container.fcpath,
          parentPath : ''
        });
        console.log(response.last.statusCode, response.last.body);
      }
    }

    for( let binary of files.binaries ) {
      let fullfcpath = pathutils.joinUrlPath('/collection/', collectionName, binary.fcpath);
      let response = await api.head({path: fullfcpath});

      if( !api.isRdfContainer(response.last) && response.last.statusCode === 200 ) {
        response = await api.get({
          path: pathutils.joinUrlPath(fullfcpath, 'fcr:metadata'),
          headers : {
            accept : api.RDF_FORMATS.JSON_LD
          }
        });

        response = JSON.parse(response.last.body)[0];

        if( !response['http://www.loc.gov/premis/rdf/v1#hasMessageDigest'] ) continue;

        let [urn,shaNum,sha] = response['http://www.loc.gov/premis/rdf/v1#hasMessageDigest'][0]['@id'].split(':');
        shaNum = shaNum.replace('sha', '');

        let localSha = await api.sha(binary.localpath, shaNum);
        if( localSha === sha ) {
          console.log('IGNORING (sha match): '+binary.fcpath);
          continue;
        }
      }

      if( this.options.dryRun !== true ) {
        await api.collection.deleteResource({
          collectionId : collectionName,
          id : binary.fcpath
        });
      }

      console.log('POST BINARY: ', binary.fcpath);
      
      let customHeaders = {};
      let ext = path.parse(binary.localpath).ext.replace(/^\./, '');
      let mimeLibType = mime.getType(ext);
      if( collectionConfig.contentTypes && collectionConfig.contentTypes[ext] ) {
        customHeaders['content-type'] = collectionConfig.contentTypes[ext];
      } else if( mimeLibType ) {
        customHeaders['content-type'] = mimeLibType;
      } else {
        customHeaders['content-type'] = 'application/octet-stream';
      }

      if( this.options.dryRun !== true ) {
        response = await api.collection.addResource({
          collectionId : collectionName,
          id : binary.fcpath,
          parentPath : '',
          data : binary.localpath,
          customHeaders
        });
        console.log(response.last.statusCode, response.last.body);
      }
    }
    
    for( let child of dir.children ) {
      await this.postContainers(collectionName, child);
    }
  }

  /**
   * @method putContainers
   * @description put rdf container metadata
   * 
   * @param {String} collectionName
   * @param {IoDir} dir 
   */
  async putContainers(collectionName, dir, oldCollectionName) {
    let files = await dir.getFiles();

    for( let container of files.containers ) {
      console.log('PUT CONTAINER: ', container.fcpath, container.localpath);

      if( this.options.dryRun !== true ) {
        let response = await api.put({
          path : pathutils.joinUrlPath('/collection', collectionName, container.fcpath)+'/',
          content : this.getMetadata(container.localpath, {newCollectionName:collectionName, oldCollectionName}),
          partial : true,
          headers : {
            'content-type' : api.RDF_FORMATS.TURTLE
          }
        });
        console.log(response.last.statusCode, response.last.body);
      }
    }

    for( let binary of files.binaries ) {
      if( !binary.metadata ) continue;
      console.log('PUT BINARY METADATA: ', binary.fcpath, binary.metadata);

      if( this.options.dryRun !== true ) {
        let response = await api.put({
          path : pathutils.joinUrlPath('/collection', collectionName, binary.fcpath, 'fcr:metadata'),
          content : this.getMetadata(binary.metadata, {binaryId: binary.id, newCollectionName:collectionName, oldCollectionName}),
          partial : true,
          headers : {
            'content-type' : api.RDF_FORMATS.TURTLE
          }
        });
        console.log(response.last.statusCode, response.last.body);
      }
    }

    for( let child of dir.children ) {
      await this.putContainers(collectionName, child);
    }
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

    return content;
  }

}

module.exports = ImportCollection;