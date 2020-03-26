const archiver = require('archiver');
const request = require('request');
const {logger} = require('@ucd-lib/fin-node-utils');

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
      res.setHeader('content-disposition', `attachment; filename="${zipName}.tar.gz"`)

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

      for( let filename in urls ) {
        archive.append(request(urls[filename]), {name: filename});
      }

      archive.finalize();
    });
  }

}

module.exports = HttpZipStream;