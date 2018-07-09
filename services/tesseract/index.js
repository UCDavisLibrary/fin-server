global.LOGGER_NAME = 'tesseract';
const {config, logger, jwt} = require('@ucd-lib/fin-node-utils');
const {exec} = require('child_process');
const url = require('url');
const http = require('http');
const uuid = require('uuid/v4');
const request = require('request');
const fs = require('fs');
const path = require('path');

const ROOT = '/tmp-app-files';
if( !fs.existsSync(ROOT) ) {
  fs.mkdirSync(ROOT);
}

const SERVER_ERROR = 500;
const FILENAME = 'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#filename';

class TesseractServer {

  constructor() {
    this.port = '3333';
    this.name = 'Tesseract Server'

    this.server = http.createServer(async (req, res) => {
      let urlinfo = url.parse(req.url);
      let txt = '';
      let id, type;

      logger.info(`Running tesseract for: ${urlinfo.pathname}`);

      try {
        let file = await this.getFile(urlinfo.pathname);
        id = file.id;
        type = file.type;

        await this.ocr(id, type);

        file = path.join(ROOT, id+'.txt');
        if( fs.existsSync(file) ) {
          txt = fs.readFileSync(file, 'utf-8');
        }
        this.cleanup(id, type);

      } catch(e) {
        logger.error(`Tesseract failed for: ${urlinfo.pathname}`, e);

        this.cleanup(id, type);
        res.statusCode = parseInt(e.code || SERVER_ERROR);
        res.write(e.message);
        res.end();
        
        return;
      }
      
      res.setHeader('Content-type', 'text/plain');
      res.write(txt);
      res.end();
    });

    this.server.listen(this.port, () => {
      logger.info(`${this.name} - Server Listening on ${this.port}`);
    });

    this.server.on('error', (e) => {
      logger.critical(`${this.name} - Server failed to start`, e);
    });
  }

  cleanup(id, type) {
    let file = path.join(ROOT, id+type);
    if( fs.existsSync(file) ) fs.unlinkSync(file);

    file = path.join(ROOT, id+'.txt');
    if( fs.existsSync(id) ) fs.unlinkSync(file);
  }

  async ocr(id, type) {
    return new Promise((resolve, reject) => {
      let options = {
        cwd : ROOT,
        shell : '/bin/bash'
      }

      exec(`tesseract ${ROOT}/${id}${type} ${id} -l eng --psm 1 --oem 3 txt`, options, (error, stdout, stderr) => {
        if( error ) reject(new ExecError(error.message, SERVER_ERROR));
        else resolve({stdout, stderr});
      }); 
    });
  }

  async getFile(urlPath) {
    let id = uuid();

    // first grab fc metadata... this will also check access
    let response = await this.request({
      method : 'GET',
      headers : {
        'Accept' : 'application/ld+json'
      },
      uri : urlPath+'/fcr:metadata'
    });

    if( response.statusCode !== 200 ) {
      throw new Error(response.body, response.statusCode);
    }

    let type = await this.extractFileType(urlPath, JSON.parse(response.body));
    let file = path.join(ROOT, id+type);

    // then load file
    return new Promise((resolve, reject) => {
      request
        .get(this.getFcRepoBaseUrl() + urlPath)
        .on('error', (err) => reject(err))
        .on('end', () => resolve({id,type}))
        .pipe(fs.createWriteStream(file))
    });
    
  }

  extractFileType(fcpath, graph) {
    let item;
    for( var i = 0; i < graph.length; i++ ) {
      if( graph[i]['@id'].endsWith(fcpath) ) {
        item = graph[i];
      }
    }
    if( !item ) throw new ExecError('Failed to find graph node for: '+fcpath, SERVER_ERROR);

    let info;
    try {
      info = path.parse(item[FILENAME][0]['@value']);
    } catch(e) {
      throw new ExecError('Failed to parse file information', SERVER_ERROR);
    }

    return info.ext;
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
    return config.fin.host;
  }

  sendJson(res, msg) {
    res.setHeader('Content-Type: application/json');
    res.send(JSON.stringify(msg));
  }

  

}

class ExecError extends Error {
  constructor(msg, code) {
    super(msg);
    this.code = code;
  }
}

new TesseractServer();