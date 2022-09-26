global.LOGGER_NAME = 'tesseract';
const {config, logger, jwt} = require('@ucd-lib/fin-service-utils');
const {exec} = require('child_process');
const {URL} = require('url');
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

    // create server
    this.server = http.createServer(async (req, res) => {

      let extractTo = 'txt';
      let accept = req.headers['accept'];
      if( accept ) {
        if( accept === 'application/hocr+xml' ) extractTo = 'hocr';
        else if( accept === 'application/pdf' ) extractTo = 'pdf';
      }

      let args = '-l eng --psm 1 --oem 3'
      // see: https://github.com/tesseract-ocr/tesseract/wiki/Command-Line-Usage
      if( req.headers['x-tesseract-args'] ) {
        args = req.headers['x-tesseract-args']
      }

      // parse service path and check for iiif information
      let urlinfo = new URL(req.url, 'https://example.org/');
      let iiif = urlinfo.searchParams.get('svcPath');

      let txt = '';
      let id, fileInfo;

      logger.info(`Running tesseract for: ${urlinfo.pathname}, extracting to ${extractTo}`);

      try {
        // download image to tmp file
        let file = await this.getFile(urlinfo.pathname, iiif);
        id = file.id;
        fileInfo = file.fileInfo;

        // run tesseract on tmp file
        await this.ocr(id, fileInfo.ext, extractTo, args);

        // read in tesseract output


        // send responses
        res.setHeader('Content-type', accept || 'text/plain');
        res.setHeader('Content-Disposition', `inline; filename="${fileInfo.name}.${extractTo}"`);

        file = path.join(ROOT, id+'.'+extractTo);
        fs.createReadStream(file)
          .on('end', () => this.cleanup(id, fileInfo.ext))
          .on('error', () => this.cleanup(id, fileInfo.ext))
          .pipe(res);

      } catch(e) {
        logger.error(`Tesseract failed for: ${urlinfo.pathname}`, e);

        this.cleanup(id, fileInfo.ext);
        res.statusCode = parseInt(e.code || SERVER_ERROR);
        res.write(e.message);
        res.end();
      }
    });

    this.server.listen(this.port, () => {
      logger.info(`${this.name} - Server Listening on ${this.port}`);
    });

    this.server.on('error', (e) => {
      logger.critical(`${this.name} - Server failed to start`, e);
    });
  }

  /**
   * @method cleanup
   * @description remove all tmp files if they exist
   * 
   * @param {String} id tmp file id
   * @param {String} ext fcrepo file extension
   */
  cleanup(id, ext) {
    if( !id ) return;

    [ext, '.txt', '.pdf', '.hocr'].forEach(ext => {
      let file = path.join(ROOT, id+ext);
      if( fs.existsSync(file) ) fs.unlinkSync(file);
    })
  }

  /**
   * @method ocr
   * @description run tesseract on tmp file
   * 
   * @param {String} id tmp file id 
   * @param {String} ext fcrepo file extension
   * @param {String} extractTo type of extract
   * @param {String} args tesseract args
   * 
   * @return {Promise}
   */
  ocr(id, type, extractTo, args) {
    return new Promise((resolve, reject) => {
      let options = {
        cwd : ROOT,
        shell : '/bin/bash'
      }

      exec(`tesseract ${ROOT}/${id}${type} ${id} ${args} ${extractTo}`, options, (error, stdout, stderr) => {
        if( error ) reject(new ExecError(error.message, SERVER_ERROR));
        else resolve({stdout, stderr});
      }); 
    });
  }

  /**
   * @method getFile
   * @description download fcrepo image file to local tmp file, returns file information
   * 
   * @param {String} urlPath fcrepo path
   * @param {String} iiif (optional) iiif service path
   * 
   * @return {Promise}
   */
  async getFile(urlPath, iiif) {
    // generate tmp file id
    let id = uuid();

    // first grab fc metadata... this will also check access
    let response = await this.request({
      method : 'GET',
      headers : {
        'Accept' : 'application/ld+json'
      },
      uri : urlPath+'/fcr:metadata'
    });

    // no public access, quit.... for now
    if( response.statusCode !== 200 ) {
      throw new Error(response.body, response.statusCode);
    }

    let fileInfo = await this.extractFileInfo(urlPath, JSON.parse(response.body));
    let file = path.join(ROOT, id+fileInfo.ext);

    // then load file
    return new Promise((resolve, reject) => {
      request
        .get(this.getFcRepoBaseUrl() + urlPath + (iiif ? '/svc:iiif'+iiif : ''))
        .on('error', (err) => reject(err))
        .on('end', () => resolve({id, fileInfo}))
        .pipe(fs.createWriteStream(file))
    });
    
  }

  /**
   * @method extractFileInfo
   * @description given fcrepo path and JSON-LD response graph, find the JSON-LD item
   * for the path and parse the ebucore filename information
   * 
   * @param {*} fcpath 
   * @param {*} graph 
   */
  extractFileInfo(fcpath, graph) {
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

    return info;
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