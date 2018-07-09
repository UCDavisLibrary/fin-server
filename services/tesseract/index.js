global.LOGGER_NAME = 'tesseract';
const {config, logger, jwt} = require('@ucd-lib/fin-node-utils');
const {exec} = require('child_process');
const url = require('url');
const http = require('http');
const uuid = require('uuid/v3');
const request = require('request');
const fs = require('fs');
const path = require('path');

const ROOT = '/tmp-app-files';
if( fs.existsSync(ROOT) ) {
  fs.mkdirSync(ROOT);
}

class TesseractServer {

  constructor() {
    this.port = '3333';
    this.name = 'Tesseract Server'

    this.server = http.createServer((req, res) => {
      let urlinfo = url.parse(req.url);
      
      try {
        await this.getFile(urlinfo);
      } catch(e) {
        req.socket.destroy();
        res.statusCode = parseInt(e.message);
        return res.send('');
      }
      
      

      res.writeHead(200);
      res.end();
      
    });

    this.server.listen(this.port, () => {
      logger.info(`${this.name} - Server Listening on ${this.port}`);
    });

    this.server.on('error', (e) => {
      logger.critical(`${this.name} - Server failed to start`, e);
    });


  }

  exec(id) {
    
  }

  async getFile(urlPath) {
    let id = uuid();
    let file = path.join(ROOT, id);

    // first grab fc metadata... this will also check access
    let response = await this.request({
      method : 'HEAD',
      uri : urlPath
    });

    if( response.statusCode !== 200 ) {
      throw new Error(response.statusCode);
    }

    // then load file
    return new Promise((resolve, reject) => {
      request
        .get(this.getFcRepoBaseUrl() + urlPath)
        .on('error', (err) => reject(err))
        .on('close', () => resolve(id))
        .pipe(fs.createWriteStream(file))
    });
    
  }

  /**
   * @method request
   * @description wrap request library in promise.  set authorization header with
   * jwt token and set uri to full path of fcrepo based on config.fcrepo params.
   */
  request(options) {
    if( !options.uri.match(/^http/i) ) {
      options.uri = this.getFcRepoBaseUrl() + options.uri;
    }

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if( error ) reject(error);
        else resolve(response);
      });
    });
  }
  
  /** 
   * @method getFcRepoBaseUrl
   * @description get the base url for fcrepo
   *  
   * @returns {String}
   */
  getFcRepoBaseUrl() {
    return config.fin.host + config.fcrepo.root;
  }

  sendJson(res, msg) {
    res.setHeader('Content-Type: application/json');
    res.send(JSON.stringify(msg));
  }

  

}

new TesseractServer();