const tar = require('tar-stream');
const request = require('request');
const zlib = require('zlib');

class HttpTarStream {

  /**
   * @method tar
   * @description given a Express Response object, tar file name and hash of filename
   * to url, streams responses to tar and gzips.  Create a new instance of class for
   * each stream.
   * 
   * @param {Object} res ExpressJS response object 
   * @param {String} tarName filename of resulting tar.gz file
   * @param {Object} urls hash of filename -> url
   * 
   * @return {Promise} resolves when after tar stream completes 
   */
  tar(res, tarName, urls) {
    return new Promise(async (resolve, reject) => {
      
      res.setHeader('content-type', 'application/tar');
      res.setHeader('content-disposition', `attachment; filename="${tarName}.tar.gz"`)

      this.pack = tar.pack();
      this.pack
        .pipe(zlib.createGzip())
        .pipe(res);

      for( let filename in urls ) {
        await this._addFile(filename, urls[filename]);
      }

      this.pack.finalize();

      resolve();
    });
  }

  async _addFile(filename, url) {
    let length = await this._getContentLength(url);

    return new Promise((resolve, reject) => {
      let entry = this.pack.entry({ name: filename, size: length}, (err) => {
        if( err ) return reject(err);
        resolve();
      });

      request(url).pipe(entry);
    });
  }

  _getContentLength(url) {
    return new Promise((resolve, reject) => {
      request({method: 'HEAD', uri: url}, function (error, response, body) {
        if( error ) return reject(error);
        if( !response.headers['content-length'] ) {
          return reject(new Error('Content-Length not provided for: '+url));
        }
        resolve(parseInt(response.headers['content-length']));
      });
    });
  }

}

module.exports = HttpTarStream;