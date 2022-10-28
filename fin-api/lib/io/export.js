const fs = require('fs-extra');
const path = require('path');
const config = require('../config');
const yaml = require('js-yaml');
const utils = require('./utils');

const BINARY = 'http://fedora.info/definitions/v4/repository#Binary';
let api;

class ExportCollection {

  constructor(_api) {
    api = _api;
  }

  /**
   * @method run
   * 
   * @param {Object} options
   * @param {String} options.collectionName Optional collection name to export
   * @param {String} options.fsRoot local file system path to export to
   * @param {Boolean} options.cleanDir remove dir if it already exists
   * @param {Boolean} options.ignoreBinary ignore binary file downloads
   * @param {Boolean} options.ignoreMetadata ignore metadata file downloads
   * @param {RegExp} options.includeFilter filter paths to include
   * @param {Boolean} options.dryRun do not download the files
   * @param {Array} options.subPaths only export specified subpaths
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
    if( options.subPaths ) options.subPaths = options.subPaths.map(p => p.split('/'));

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

    let orgRoot = options.fsRoot;
    // let finDir = path.join(orgRoot, '.fin');
    // let rootColDir = path.join(orgRoot, options.collectionName);

    // if( fs.existsSync(options.fsRoot) ) {
    //   if( options.cleanDir ) {
    //     console.log(`DIR EXISTS, removing: ${options.fsRoot}`);
    //     if( options.dryRun !== true ) {
    //       await fs.remove(options.fsRoot);
    //     }
    //   } else {
    //     console.log(`DIR EXISTS, syncing: ${options.fsRoot}`);
    //   }
    // }

    let contentTypes = {};
    await this.crawl(options, contentTypes);

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

  async crawl(options, contentTypes) {
    if( !utils.crawlSubPath(options) ) {
        console.log('IGNORING: '+options.currentPath);
        return;
    }

    
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

    metadata = await api.get({
      path: cpath,
      headers : {
        accept : api.RDF_FORMATS.JSON_LD
      }
    });

    metadata = JSON.parse(metadata.last.body).find(item => item['@id'].match(api.getConfig().basePath+options.currentPath) );
    let cdir = path.join(options.fsRoot, options.currentPath.replace(options.dirReplace, ''))
    let dirname = options.currentPath.split('/').pop();

    if( options.dryRun !== true ) {
      if( isBinary ) await fs.mkdirp(path.resolve(cdir, '..'));
      else await fs.mkdirp(cdir);
    }

    let binaryFile = '';

    // write binary
    if( isBinary ) {
      cdir = path.resolve(cdir, '..');

      // if we are ignoring binary, we have hit a leaf and are down
      if( options.ignoreBinary === true || utils.ignoreSubPath(options) === true ) return;

      binaryFile = metadata['http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#filename']
      if( binaryFile && binaryFile.length ) {
        binaryFile = binaryFile[0]['@value'];
      }
      
      // HACK: not sure how this happens, but you can have empty filenames for binaries...
      if( !binaryFile ) binaryFile = dirname;

      // get content type
      let contentType = metadata['http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasMimeType'];
      if( contentType ) {
        contentType = contentType[0]['@value'];
        contentTypes[path.parse(binaryFile).ext.replace(/^\./, '')] = contentType;
      }

      // prep dir
      if( options.dryRun !== true ) {
        await fs.mkdirp(cdir);
      }

      let download = false;

      // check sha
      let filePath = path.resolve(cdir, binaryFile);
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
        else console.log('SHA OK: '+filePath);
      }

      if( download ) {
        console.log('DOWNLOADING BINARY: '+filePath);
        if( options.dryRun !== true ) {
          await api.get({
            path : options.currentPath,
            encoding : null,
            writeStream : fs.createWriteStream(filePath)
          });
        }
      }

      // hack: fs.existsSync doesn't seem to link symlinks :(
      // let exists = true;
      // try {fs.lstatSync(path.join(cdir, dirname))} 
      // catch(e) {exists = false}
      
      // if( binaryFile !== dirname && !exists ) {
      //   let rpath = path.relative(
      //     path.join(cdir, dirname),
      //     path.join(cdir, binaryFile) 
      //   );

      //   console.log('  -> SETTING SYMLINK: '+path.join(cdir, dirname));
      //   if( options.dryRun !== true ) {
      //     await fs.symlink(
      //       rpath,
      //       path.join(cdir, dirname)
      //     );
      //   }
      // }

      options.currentPath += '/fcr:metadata'
    }

    // write ttl
    let ttl = await api.get({
      path: options.currentPath,
      headers : {
        Prefer : 'return=representation; omit="http://www.w3.org/ns/ldp#PreferMembership http://www.w3.org/ns/ldp#PreferContainment http://fedora.info/definitions/fcrepo#PreferInboundReferences http://fedora.info/definitions/fcrepo#ServerManaged"'
      }
    });

    ttl = ttl.last.body

    
    // if( options.currentPath !== '/collection/'+options.collectionName ) {
    //   baseRe += '/'+options.collectionName;
    // }

    // replace the root node, set as self reference
    let rootNode = '<'+config.host+config.fcBasePath+options.currentPath.replace(/\/fcr:metadata\/?$/, '')+'>';
    ttl = ttl.split('\n')
      .map(row => (row.trim() === rootNode) ? '<>' : row)
      .join('\n');

    let baseUrl = config.host+config.fcBasePath;
    let urls = ttl.match(new RegExp('<'+baseUrl+'(>|/.*>)', 'g')) || [];
    // let relCurrentPath = (options.currentPath.replace(new RegExp(options.currentPath, 'g'), '') || '/');

    urls.forEach(url => {
      console.log('url', url);

      let cleanUrl = url.replace(/^</, '').replace(/>$/, '');
      let relativePath = path.relative(
        path.dirname(rootNode.replace(/^</, '').replace(/>$/, '')),
        path.dirname(cleanUrl)
      );

      console.log(path.dirname(rootNode.replace(/^</, '').replace(/>$/, '')), path.dirname(cleanUrl))

      console.log('url', url, relativePath);
      if( relativePath === '' ) relativePath = '.';
      ttl = ttl.replace(cleanUrl, relativePath);

      // let urlPath = url
      //   .replace(new RegExp(baseRe), '')
      //   .replace(/>/, '') || '/';

      // /**
      //  * If we have to go up a directory to get from current container path to linked container, you must
      //  * remember the starting point is the parent path. So if you are at container /foo/bar/baz.  The parent
      //  * 'folder'/'path' /foo/bar holds container baz, and relative paths should be from /foo/bar. 
      //  */
      // let containerPath = path.resolve(relCurrentPath, '..');
      // containerPath = path.relative(containerPath, urlPath);
      // if( containerPath === '' ) containerPath = '.';
      // ttl = ttl.replace(url, '<'+containerPath+'>');
    });

    if( options.ignoreMetadata !== true && utils.ignoreSubPath(options) !== true ) {
      if( binaryFile ) {
        console.log('  -> WRITING METADATA: '+path.resolve(cdir, binaryFile+'.ttl'));
        if( options.dryRun !== true ) {
          await fs.writeFile(path.resolve(cdir, binaryFile+'.ttl'), ttl);
        }
        return;
      } 

      console.log('WRITING METADATA: '+path.resolve(cdir, '..', dirname+'.ttl'));
      if( options.dryRun !== true ) {
        await fs.writeFile(path.resolve(cdir, '..', dirname+'.ttl'), ttl);
      }
    } else {
      console.log('IGNORING: '+options.currentPath);
    }

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

      await this.crawl(cOptions, contentTypes);
    }

  }

}

module.exports = ExportCollection;