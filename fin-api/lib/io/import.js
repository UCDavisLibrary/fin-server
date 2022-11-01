const IoDir = require('./iodir');
const config = require('../config');
const fs = require('fs-extra');
const path = require('path');
const ignore = require('ignore');
const yaml = require('js-yaml');
const mime = require('mime');
const pathutils = require('../utils/path');
const transform = require('../utils/transform');

let api;
let CONFIG_DIR = '.fin';
let ACL_FILE = 'acl.ttl';
let CONFIG_FILE = 'config.yml';
const IGNORE_FILE = '.finignore';
const METADATA_SHA = 'http://digital.ucdavis.edu/schema#metadataSha256';
const HAS_MESSAGE_DIGEST = 'http://www.loc.gov/premis/rdf/v1#hasMessageDigest';

const HAS_MEMBER_RELATION = 'http://www.w3.org/ns/ldp#hasMemberRelation';
const IS_MEMBER_OF_RELATION = 'http://www.w3.org/ns/ldp#isMemberOfRelation';

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

    // IoDir object for root fs path, crawl repo
    let rootDir = new IoDir(options.fsPath, '/', {
      includeFilter : options.includeFilter,
      dryRun : options.dryRun,
      subPaths : options.subPaths,
      fcrepoPath : options.fcrepoPath,
      collectionName : config.source.collection || options.collectionName
    });


    await rootDir.crawl();    
    
    await this.putContainers(rootDir, config);

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
   * @method putContainers
   * @description put rdf container metadata
   * 
   * @param {String} collectionName
   * @param {IoDir} dir 
   */
  async putContainers(dir, collectionConfig={}) {
    
    let files = await dir.getFiles();

    for( let container of files.containers ) {
      let op = 'PUT';
      let containerPath = container.fcpath;
      // let op = ( response.data.statusCode === 200 ) ? 'PUT' : 'POST';
      console.log(`${op} CONTAINER ${op === 'PUT' ? 'Update' : 'Creation'}: ${containerPath}\n -> ${container.localpath}`);      

      let headers = {
        'content-type' : api.RDF_FORMATS.TURTLE,
        Prefer: 'handling=lenient'
      }

      // TODO: head check that container exists.  if exists, we are posting otherwise put.
      // if exists ignore ArchivalGroup
      // update log message as well

      let metadata = this.getMetadata(container.localpath);
      metadata = (await transform.turtleToJsonLd(metadata))[0];
      if( !metadata ) metadata = {};

     
      let response = await api.get({
        path: containerPath,
        headers : {
          accept : api.RDF_FORMATS.JSON_LD
        }
      });

      // check if d exists and if there is the ucd metadata sha.
      if( response.data.statusCode === 200 ) {
        let jsonld = JSON.parse(response.last.body)[0];
        if( await this.isMetaShaMatch(jsonld, metadata, container.localpath ) ) {
          console.log(` -> IGNORING (sha match)`);
          continue;
        } 
      }

      
      
      // strip @types that must be provided as a Link headers
      if( metadata['@type'] ) {
        this.TO_HEADER_TYPES.forEach(type => {
          if( !metadata['@type'].includes(type) ) return;

          metadata['@type'] = metadata['@type'].filter(item => item !== type);

          if( response.data.statusCode !== 200 ) {
            headers.link = `<${type}>;rel="type"`
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

      metadata = await transform.jsonldToTurtle(metadata);

      if( this.options.dryRun !== true ) {
        // if( op === 'POST' ) {
        //   response = await api.postEnsureSlug({
        //     slug : container.id,
        //     path : pathutils.joinUrlPath(container.fcpath)+'/',
        //     content : metadata,
        //     partial : true,
        //     headers
        //   });
        // } else {
          response = await api.put({
            path : containerPath,
            content : metadata,
            partial : true,
            headers
          });
        // }
        if( response.error ) {
          throw new Error(response.error);
        }
        console.log(response.last.statusCode, response.last.body);
      }

    }

    for( let binary of files.binaries ) {
      let fullfcpath = pathutils.joinUrlPath(binary.fcpath, binary.id);
      console.log(`PUT BINARY: ${fullfcpath}\n -> ${binary.localpath}`);

      
      // let response = await api.head({path: fullfcpath});
      // let headResponse = response;
      let response = await api.get({
        path: pathutils.joinUrlPath(fullfcpath, 'fcr:metadata'),
        headers : {
          accept : api.RDF_FORMATS.JSON_LD
        }
      });

      if( response.last.statusCode === 200 ) {
        response = JSON.parse(response.last.body)[0];
        if( !response['http://www.loc.gov/premis/rdf/v1#hasMessageDigest'] ) continue;

        let shas = response['http://www.loc.gov/premis/rdf/v1#hasMessageDigest']
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
          continue;
        }
      }

      if( this.options.dryRun !== true ) {
        await api.delete({
          path : fullfcpath,
          permanent: true
        });
      }
      
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
        response = await api.put({
          path : fullfcpath,
          file : binary.localpath,
          partial : true,
          headers : customHeaders
        });
        // response = await api.collection.addResource({
        //   collectionId : collectionName,
        //   id : binary.id,
        //   parentPath : binary.fcpath.replace(/\/$/, ''),
        //   data : binary.localpath,
        //   customHeaders,
        //   method : 'POST'
        // });

        if( response.error ) {
          throw new Error(response.error);
        } else {
          console.log(response.last.statusCode, response.last.body);
        }
      }

    }

    // you get a boost of up to 150ms by checking md5 of metadata file;
    for( let binary of files.binaries ) {
      if( !binary.metadata ) continue;
      let containerPath = pathutils.joinUrlPath(binary.fcpath, binary.id, 'fcr:metadata');
      console.log(`PUT BINARY METADATA: ${containerPath}\n -> ${binary.metadata}`);

      if( this.options.dryRun !== true ) {
        let metadata = this.getMetadata(binary.metadata);
        let headers = {
          'content-type' : api.RDF_FORMATS.TURTLE
        }

        let response = await api.get({
          path : pathutils.joinUrlPath(binary.fcpath, binary.id, 'fcr:metadata'),
          headers : {
            accept : api.RDF_FORMATS.JSON_LD
          }
        });

        metadata = (await transform.turtleToJsonLd(metadata))[0];

        if( metadata['@type'] ) {
          this.TO_HEADER_TYPES.forEach(type => {
            if( !metadata['@type'].includes(type) ) return;
            metadata['@type'] = metadata['@type'].filter(item => item !== type);
          })
        }

        // check if d exists and if there is the ucd metadata sha.
        if( response.data.statusCode === 200 ) {
          response = JSON.parse(response.last.body)[0];
          if( await this.isMetaShaMatch(response, metadata, binary.metadata ) ) {
            console.log(` -> IGNORING (sha match)`);
            continue;
          } 
        }

        metadata = await transform.jsonldToTurtle(metadata);

        response = await api.put({
          path : pathutils.joinUrlPath(binary.fcpath, binary.id, 'fcr:metadata'),
          content : metadata,
          partial : true,
          headers
        });
        if( response.error ) {
          throw new Error(response.error);
        }
        console.log(response.last.statusCode, response.last.body);
      }
    }

    for( let child of dir.children ) {
      await this.putContainers(child, collectionConfig);
    }
  }

  getMetadata(path, options={}) {
    let content = fs.readFileSync(path, 'utf-8');

    // binary files are posted at /fcr:metadata, so root rdf node should point one level up
    if( options.binaryId ) {
      content = content.replace(/<\s*>/g, '<../'+options.binaryId.split('/').pop()+'>');
    }

    // if we are renaming collections, this hack is for the fact the top level containers
    // must have the collection name in the ttl to correctly PUT to the LDP.  Simply
    // replacing the old collection name with the new collection name.
    // if( options.oldCollectionName && options.newCollectionName ) {
    //   content = content.replace(
    //     new RegExp('<'+options.oldCollectionName+'(\/| *>)', 'g'), 
    //     '<'+options.newCollectionName+'$1'
    //   );
    // }

    return content;
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