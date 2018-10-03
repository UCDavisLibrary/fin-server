const tar = require('tar-stream');
const zlib = require('zlib');
const request = require('request');
const api = require('@ucd-lib/fin-node-api');
const {config} = require('@ucd-lib/fin-node-utils');

const FILENAME = 'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#filename';

api.setConfig({
  host : 'http://server:3001',
  fcBasePath: config.fcrepo.root
});

class TarModel {

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
    return new Promise(async (resolve, reject) => {
      let response = await api.get({
        path: options.path+'/fcr:metadata',
        headers : {
          accept : api.RDF_FORMATS.JSON_LD,
          Authorization : `Bearer ${options.jwt}`
        }
      });
      response = response.last;

      let filename = this._getFilename(response.body);
      if( !filename.match(/\.tar/) ) {
        return reject(new Error('File must have tar extension'));
      }

      let filestream = await this.extractFileFromStream({
        stream: request(`http://server:3001/fcrepo/rest/${options.path}`),
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

    return new Promise((resolve, reject) => {
      extract.on('entry', function(header, stream, next) {
        if( header.name === options.filename ){
          found = true;
          resolve(stream);
        }
      
        stream.on('end', () => {
          if( found ) stream.destroy(); // this should stop rest of stream read...
          else next();
        });
        stream.resume();      
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

}

module.exports = new TarModel();