const archiver = require('archiver');
const request = require('request');
const {logger} = require('@ucd-lib/fin-service-utils');

class HttpZipStream {

  /**
   * @method zip
   * @description given a Express Response object, tar file name and hash of filename
   * to url, streams responses to tar and gzips.  Create a new instance of class for
   * each stream.
   * 
   * @param {Object} res ExpressJS response object 
   * @param {String} zipName filename of resulting .zip file
   * @param {Object} urls hash of filename -> url
   * 
   * @return {Promise} resolves when after tar stream completes 
   */
  zip(res, zipName, urls) {
    let resolved = false;
    return new Promise(async (resolve, reject) => {
      
      res.setHeader('content-type', 'application/zip');
      res.setHeader('content-disposition', `attachment; filename="${zipName}"`)

      let archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
      });

      archive.on('close', () => {
        if( resolved ) return;
        resolved = true;
        resolve();
      });

      archive.on('warning', err => {
        logger.warn(`zip stream warning for ${zipName}.zip`, err);
      });

      archive.on('error', err => {
        if( resolved ) return;
        resolved = true;
        reject(err);
      });

      archive.pipe(res);

      // only make one request at a time
      for( let filename in urls ) {
        if( typeof urls[filename] === 'object' ) {
          let {promise, stream} = this.request(urls[filename].url);
          archive.append(stream, {
            name: filename,
            prefix: urls[filename].dir
          });
          await promise;
        } else {
          let {promise, stream} = this.request(urls[filename]);
          archive.append(request(stream), {name: filename});
          await promise;
        }
      }

      archive.finalize();
    });
  }

  request(url) {
    let stream = request(url);
    let promise = new Promise((resolve, reject) => {
      stream.on('close', () => resolve());
    });
    return {promise, stream}
  }

}

module.exports = HttpZipStream;