const tar = require('tar-stream');
const zlib = require('zlib');
const request = require('request');
const path = require('path');
const api = require('@ucd-lib/fin-node-api');
const {config} = require('@ucd-lib/fin-node-utils');

const FILENAME = 'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#filename';

api.setConfig({
  host : 'http://server:3001',
  fcBasePath: config.fcrepo.root
});

class TarModel {
  
  /**
   * @method extractFileListFromBag
   * 
   * @param {Object} options 
   * @param {String} options.path
   * @param {String} options.jwt 
   * 
   * @returns {Promise} resolves to {Stream}
   */
  async extractFileListFromBag(options) {
    options.path = options.path.replace(config.fcrepo.root, '');

    return new Promise(async (resolve, reject) => {
      let headers = {
        accept : api.RDF_FORMATS.JSON_LD
      }
      if( options.jwt ) {
        headers.Authorization = `Bearer ${options.jwt}`;
      }

      let response = await api.get({
        path: options.path+'/fcr:metadata',
        headers
      });
      response = response.last;

      let filename = '';
      try {
        filename = this._getFilename(response.body);
      } catch(e) { return reject(e) }

      if( !filename.match(/\.tar/) ) {
        return reject(new Error('File must have tar extension'));
      }

      let files = await this.extractFileListFromStream({
        stream: request(`${config.fin.host}/fcrepo/rest/${options.path}`),
        ignoreDotFiles : true,
        gzip: filename.match(/\.gz$/) ? true : false
      });

      resolve(files);
    });
  }

  /**
   * @method extractFileFromBag
   * 
   * @param {Object} options 
   * @param {String} options.path
   * @param {String} options.filename
   * @param {String} options.jwt 
   * 
   * @returns {Promise} resolves to {Stream}
   */
  async extractFileFromBag(options) {
    options.path = options.path.replace(config.fcrepo.root, '');

    return new Promise(async (resolve, reject) => {
      let headers = {
        accept : api.RDF_FORMATS.JSON_LD
      }
      if( options.jwt ) {
        headers.Authorization = `Bearer ${options.jwt}`;
      }
      let response = await api.get({
        path: options.path+'/fcr:metadata',
        headers
      });
      response = response.last;

      let filename = this._getFilename(response.body);
      if( !filename.match(/\.tar/) ) {
        return reject(new Error('File must have tar extension'));
      }

      let filestream = await this.extractFileFromStream({
        stream: request(`${config.fin.host}/fcrepo/rest/${options.path}`),
        filename: options.filename,
        gzip: filename.match(/\.gz$/) ? true : false
      });
      
      if( !filestream ) reject(new Error(`Unable to find ${options.filename} in ${options.path}`));
      else resolve(filestream);
    });
  }

  _getFilename(jsonld) {
    if( typeof jsonld === 'string' ) {
      jsonld = JSON.parse(jsonld);
    }
    if( Array.isArray(jsonld) ) {
      jsonld = jsonld[0];
    }

    if( jsonld[FILENAME] ) {
      let filename = jsonld[FILENAME];
      if( Array.isArray(filename) ) {
        filename = filename[0];
      }
      return filename['@value'] || '';
    }

    return '';
  }

  /**
   * @method extractFileFromStream
   * @description given a tar file file stream, a file name and option gzip
   * flag, extract a filestream
   * 
   * @param {Object} options
   * @param {Stream} options.stream tar or tar.gz file stream
   * @param {String} options.filename filename (with path) to get stream for
   * @param {Boolean} options.gzip file is gzipped
   * 
   * @return {Promise} resolves to {Stream}
   */
  extractFileFromStream(options) {
    let stream = options.stream;
    let extract = tar.extract();
    let found = false;
    let re = new RegExp('/'+options.filename+'$');

    return new Promise((resolve, reject) => {
      extract.on('entry', function(header, fstream, next) {
        fstream.on('end', () => {
          if( found ) stream.destroy(); // this should stop rest of stream read...
          else next();
        });

        if( header.name.match(re) && !found ){
          found = true;
          resolve(fstream);
        } else {
          fstream.resume();
        }
      });

      extract.on('finish', () => {
        if( !found ) {
          reject(new Error(`File ${options.filename} not found`));
        }
      });

      if( options.gzip ) {
        stream = stream.pipe(zlib.createGunzip());
      }

      stream.pipe(extract);
    });
  }

    /**
   * @method extractFileListFromStream
   * @description given a tar file file stream file list from a stream
   * 
   * @param {Object} options
   * @param {Stream} options.stream tar or tar.gz file stream
   * @param {Boolean} options.ignoreDotFiles ignore filenames that start with .
   * @param {Boolean} options.gzip file is gzipped
   * 
   * @return {Promise} resolves to {Array}
   */
  extractFileListFromStream(options) {
    let stream = options.stream;
    let extract = tar.extract();
    let files = [];

    return new Promise((resolve, reject) => {
      extract.on('entry', function(header, stream, next) {
        files.push(header);

        stream.on('end', () => next());
        stream.resume();
      });
      extract.on('finish', () => {
        let tmp = [], d = [];

        // this is a really dumb hack to get the root directory
        let rootDir = '';
        files.forEach(f => {
          if( f.type === 'directory' && (f.name.length < rootDir.length || !rootDir) )  {
            rootDir = f.name;
          } else if( f.type === 'file' ) {
            if( !(options.ignoreDotFiles && path.parse(f.name).base[0] === '.') ) {
              tmp.push(f);
            }
          }
        });

        files = tmp.map(f => {
          return {
            name : f.name.replace(rootDir, ''),
            size : f.size
          }
        });
      
        resolve(files)
      });

      if( options.gzip ) {
        stream = stream.pipe(zlib.createGunzip());
      }
      stream.pipe(extract);
    });
  }

}

module.exports = new TarModel();