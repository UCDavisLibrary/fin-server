const fs = require('fs-extra');
const path = require('path');
const config = require('../config');
const yaml = require('js-yaml');
const utils = require('./utils');

const METADATA_SHA = 'http://digital.ucdavis.edu/schema#finIoMetadataSha256';
const FIN_IO_INDIRECT_REFERENCE = 'http://library.ucdavis.edu/schema#finIoIndirectReference';
const GIT_SOURCE = 'http://library.ucdavis.edu/gitsource';
const GIT_SOURCE_PROP = 'http://library.ucdavis.edu/git#';

const ARCHIVAL_GROUP = 'http://fedora.info/definitions/v4/repository#ArchivalGroup';
const BINARY = 'http://fedora.info/definitions/v4/repository#Binary';
const COLLECTION = 'http://schema.org/Collection';
const HAS_PART = 'http://schema.org/hasPart';


let api;

const OMIT = [
  'http://www.w3.org/ns/ldp#PreferMembership',
  'http://www.w3.org/ns/ldp#PreferContainment',
  'http://fedora.info/definitions/fcrepo#PreferInboundReferences',
  'http://fedora.info/definitions/fcrepo#ServerManaged'
]

class ExportCollection {

  constructor(_api) {
    api = _api;
  }

  /**
   * @method run
   * 
   * @param {Object} options
   * @param {String} options.fsRoot local file system path to export to
   * @param {Boolean} options.cleanDir remove dir if it already exists
   * @param {Boolean} options.ignoreBinary ignore binary file downloads
   * @param {Boolean} options.ignoreMetadata ignore metadata file downloads
   * @param {Boolean} options.exportCollectionParts
   * @param {Boolean} options.dryRun do not download the files
   * 
   */
  async run(options) {
    options.fsRoot = options.fsRoot || '.';

    if( options.dryRun !== true ) {
      await fs.mkdirp(options.fsRoot);
    }

    options.currentPath = options.fcrepoPath;
    let parts = options.currentPath.split('/');
    parts.pop();
    options.dirReplace = parts.join('/');

    if( options.ignoreBinary !== true ) options.ignoreBinary = false;
    if( options.ignoreMetadata !== true ) options.ignoreMetadata = false;
    if( options.cleanDir !== true ) options.cleanDir = false;

    // if( options.ignoreBinary && options.cleanDir ) {
    //   console.error('ERROR: you cannot clean directory and ignore binary.');
    //   return;
    // }

    if( options.dryRun ) {
      console.log(`
***********
* Dry Run
***********
`);
    }

    if( options.cleanDir ) {
      console.log(`DIR EXISTS, cleaning: ${options.fsRoot}`);

      if( options.dryRun !== true ) {
        let children = await fs.readdir(options.fsRoot);
        for( let child of children ) {
          await fs.remove(path.join(options.fsRoot, child));
        }
      }
    }

    await this.crawl(options);

    if( options.dryRun === true ) return;

    // if( fs.existsSync(path.join(rootColDir, '.fin')) ) {
    //   if( fs.existsSync(finDir) ) await fs.remove(finDir);
    //   await fs.move(path.join(rootColDir, '.fin'), finDir);
    // } else {
    //   await fs.mkdirp(finDir);
    // }

    // await fs.writeFile(
    //   path.join(finDir, 'config.yml'), 
    //   yaml.dump({
    //     source: {
    //       host : config.host,
    //       base : config.fcBasePath,
    //       collection : options.collectionName
    //     },
    //     contentTypes : contentTypes
    //   })
    // );
  }

  async crawl(options, archivalGroup) {
    let metadata = await api.head({
      path: options.currentPath,
      headers : {
        accept : api.RDF_FORMATS.JSON_LD
      }
    });

    if( metadata.error ) {
      console.log('Error Access Path: '+options.currentPath);
      console.error(metadata.error);
      // TODO:
      // options.errors.push(metadata.error);
      return;
    }

    let links = api.parseLinkHeader(metadata.data.headers.link);
    let cpath = options.currentPath;

    let isBinary = false;
    if( links.type && links.type.find(item => item.url === BINARY) ) {
      isBinary = true;
      cpath += '/fcr:metadata';
    }

    let isArchivalGroup = false;
    if( links.type && links.type.find(item => item.url === ARCHIVAL_GROUP) ) {
      isArchivalGroup = true;
    }

    metadata = await api.get({
      path: cpath,
      headers : {
        accept : api.RDF_FORMATS.JSON_LD
      }
    });

    let graph = JSON.parse(metadata.last.body);
    metadata = graph.find(item => item['@id'].match(api.getConfig().fcBasePath+options.currentPath) );

    if( metadata['@type'] && metadata['@type'].includes(FIN_IO_INDIRECT_REFERENCE) ) {
      console.log('IGNORING FIN IO INDIRECT REFERENCE: '+options.currentPath);
      await this.crawlContains(options, metadata, archivalGroup);
      return;
    }

    // set archivalGroup and gitsource if is archivalGroup
    if( isArchivalGroup ) {
      archivalGroup = metadata;
      let gitsource = graph.find(item => item['@type'] && item['@type'].includes(GIT_SOURCE));
      if( gitsource ) {
        archivalGroup.gitsource = {};
        for( let prop in gitsource ) {
          if( !prop.startsWith(GIT_SOURCE_PROP) ) continue;
          archivalGroup.gitsource[prop.replace(GIT_SOURCE_PROP, '')] = gitsource[prop][0]['@id'] || gitsource[prop][0]['@value']; 
        }
      }
    }

    let cdir = this.getPath(options.fsRoot, metadata, archivalGroup, options);
    let dirname = options.currentPath.split('/').pop();

    if( options.dryRun !== true ) {
      if( isBinary ) await fs.mkdirp(path.resolve(cdir, '..'));
      else await fs.mkdirp(cdir);
      // await fs.mkdirp(path.resolve(cdir, '..'))
    }

    let binaryFile = '';

    // write binary
    if( isBinary ) {
      // if we are ignoring binary, we have hit a leaf and are down
      if( options.ignoreBinary === true ) return;

      let download = false;

      // check sha
      
      // let filePath = path.join(cdir, binaryFile);
      let filePath = cdir;
      if( !fs.existsSync(filePath) ) {
        download = true;
      } else {
        let shas = metadata['http://www.loc.gov/premis/rdf/v1#hasMessageDigest']
          .map(item => {
            let [urn, sha, hash] = item['@id'].split(':')
            return [sha.replace('sha-', ''), hash];
          });
        
        // picking the 256 sha or first
        let sha = shas.find(item => item[0] === '256');
        if( !sha ) sha = shas[0];

        let localSha = await api.sha(filePath, sha[0]);
        if( localSha !== sha[1] ) download = true;
        else console.log('SHA OK: '+filePath.replace(options.fsRoot, ''));
      }

      if( download ) {
        console.log('DOWNLOADING BINARY: '+filePath.replace(options.fsRoot, ''));
        if( options.dryRun !== true ) {
          await api.get({
            path : options.currentPath,
            encoding : null,
            writeStream : fs.createWriteStream(filePath)
          });
        }
      }

      options.currentPath += '/fcr:metadata'
    }

    let diskMetadata = await this.getDiskMetadataFile(options.currentPath, isArchivalGroup);
    if( diskMetadata === null ) return;

    if( options.ignoreMetadata !== true ) {
      if( binaryFile ) {
        console.log('  -> WRITING METADATA: '+path.resolve(cdir, binaryFile+'.jsonld.json').replace(options.fsRoot, ''));
        if( options.dryRun !== true ) {
          await fs.writeFile(path.resolve(cdir, binaryFile+'.jsonld.json'), diskMetadata);
        }
        return;
      } 

      let mFile;
      if( cdir.match(/\.ttl$/) ) {
        mFile = cdir.replace(/\.ttl$/, '.jsonld.json');
      } else {
        mFile = cdir + '.jsonld.json';
      }

      console.log('WRITING METADATA: '+mFile.replace(options.fsRoot, ''));
      if( options.dryRun !== true ) {
        await fs.writeFile(mFile, diskMetadata);
      }

      let aclTTL = await this.getDiskMetadataFile(options.currentPath+'/fcr:acl');
      if( aclTTL ) {
        console.log(' -> WRITING ACL: '+path.resolve(cdir, 'fcr:acl.jsonld.json').replace(options.fsRoot, ''));
        await fs.writeFile(path.resolve(cdir, 'fcr:acl.jsonld.json'), aclTTL);
      }
    }

    // are we a collection and exporting hasPart references?
    if( options.exportCollectionParts && 
        metadata['@type'] && 
        metadata['@type'].includes(COLLECTION) ) {

      let parts = metadata[HAS_PART] || [];
      for( let part of parts ) {
        let cOptions = Object.assign({}, options);
        cOptions.currentPath = part['@id'].replace(new RegExp('.*'+config.fcBasePath), '');
  
        // crawl part without archival group
        await this.crawl(cOptions);
      }
    }

    await this.crawlContains(options, metadata, archivalGroup);
  }

  async crawlContains(options, metadata, archivalGroup) {
    // check if this container has children
    let contains = metadata['http://www.w3.org/ns/ldp#contains'];
    if( !contains ) return; // no more children, done crawling this branch

    // just make sure this is an array...
    if( !Array.isArray(contains) ) {
      contains = [contains];
    }

    // recursively crawl the children
    for( var i = 0; i < contains.length; i++ ) {
      let cOptions = Object.assign({}, options);
      cOptions.currentPath = contains[i]['@id'].replace(new RegExp('.*'+config.fcBasePath), '');

      await this.crawl(cOptions, archivalGroup);
    }
  }

  getPath(currentDir, container, archivalGroup, options) {
    let id = container['@id'];
    if( id.match(/\/fcr:metadata$/) ) {
      id = id.replace(/\/fcr:metadata$/, '')
    }

    if( options.useFcExportPath !== true ) {
      let rootDir = '.';
      if( archivalGroup && archivalGroup.gitsource && archivalGroup.gitsource.rootDir ) {
        rootDir = archivalGroup.gitsource.rootDir;
      }
      
      if( container === archivalGroup &&  archivalGroup.gitsource &&  archivalGroup.gitsource.file ) {
        return path.join(currentDir, archivalGroup.gitsource.file);
      }

      if( archivalGroup ) {
        let agRelativePath = container['@id'].replace(archivalGroup['@id'], '');
        return path.join(currentDir, rootDir, agRelativePath);
      }
    }

    return path.join(currentDir, container['@id'].split(api.getConfig().fcBasePath)[1])
  }

  async getDiskMetadataFile(fcrepoPath, isArchivalGroup) {
    let metadata = await api.get({
      path: fcrepoPath,
      headers : {
        accept : api.RDF_FORMATS.JSON_LD,
        Prefer : `return=representation; omit="${OMIT.join(' ')}"`
      }
    });

    if( metadata.error ) return '';
    if( metadata.last.statusCode !== 200 ) return '';

    metadata = JSON.parse(metadata.last.body);
    metadata = metadata.find(item => item['@id'] = fcrepoPath);

    if( !metadata ) return null;

    if( isArchivalGroup ) {
      metadata['@id'] = metadata['@id'].replace(/^\/.+?\//, '');
    } else {
      metadata['@id'] = '';
    }

    // replace the root node, set as self reference
    // let rootNode = config.host+config.fcBasePath+fcrepoPath.replace(/\/fcr:metadata\/?$/, '');

    // find all references to DAMS urls and replace with relative path
    let baseUrl = config.host+config.fcBasePath;
    // let urls = ttl.match(new RegExp('<'+baseUrl+'(>|/.*>)', 'g')) || [];

    for( let prop in metadata ) {
      if( prop.startsWith('@') ) continue;

      if( prop === METADATA_SHA ) {
        delete metadata[prop];
        continue;
      }

      prop = metadata[prop];
      prop.forEach(item => {
        if( !item['@id'] ) return;
        if( !item['@id'].startsWith(baseUrl) ) return;

        // item['@id'] = path.relative(
        //   path.dirname(rootNode),
        //   path.dirname(item['@id'])
        // );
        item['@id'] = item['@id'].replace(baseUrl, 'info:fedora');
      });      
    }

    return JSON.stringify(metadata, '  ', '  ');
  }

}

module.exports = ExportCollection;