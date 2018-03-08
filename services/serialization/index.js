global.LOGGER_NAME = 'serialization';
const {jwt, config, logger, MessageServer} = require('@ucd-lib/fin-node-utils');
const request = require('request');
const {URL} = require('url');
const fs = require('fs-extra');
const path = require('path');
const SERIAL_PATH = '/data';

process.on('unhandledRejection', err => console.error(err));

class SerializationMessageServer extends MessageServer {

  constructor() {
    super('Serialization');
  }

  async isDataFile(path) {
    var {response, body} = await this._request({
      type : 'HEAD',
      uri : path
    });

    if( response.headers['content-disposition'] ) {
      return true;
    }
    return false;
  }

  async getData(fcpath) {
    
    let isData = await this.isDataFile(fcpath);

    if( isData ) {
      let dir = fcpath.split('/');
      dir.pop();
      dir.unshift(SERIAL_PATH);

      let fspath = path.join(SERIAL_PATH, fcpath);
      fs.mkdirsSync(path.join.apply(path,dir));

      await this._stream({
        type : 'GET',
        uri : fcpath
      }, fspath);

      await this._stream({
        type : 'GET',
        uri : fcpath+'/fcr:metadata',
        headers : {
          Prefer : 'return=representation; omit="http://fedora.info/definitions/v4/repository#ServerManaged"',
          Accept: 'text/turtle'
        }
      }, fspath+'.ttl');
    
    } else {
      let fspath = path.join(SERIAL_PATH, fcpath);
      fs.mkdirsSync(fspath);

      await this._stream({
        type : 'GET',
        uri : fcpath,
        headers : {
          Prefer : 'return=representation; omit="http://fedora.info/definitions/v4/repository#ServerManaged"',
          Accept: 'text/turtle'
        }
      }, path.join(fspath, 'index.ttl'));
    }
  }

  async removeFile(fspath) {
    if( fs.existsSync(fspath) ) {
      await fs.remove(fspath);
    }
  }

  async cleanData(fcpath) {
    let isData = await this.isDataFile(fcpath);

    if( isData ) {
      await this.removeFile(fcpath);
      await this.removeFile(fcpath+'.ttl');
    } else {
      await this.removeFile(path.join(fcpath, 'index.ttl'));
    }
  }

  async handleMessage(msg) {
    if( msg.type !== this.WEBHOOK_EVENT_TYPES.FCREPO_EVENT ) return;

    let eventTypes = this.getEventTypes(msg);
    let fcpath = this.getPath(msg);

    if( this.isCreate(eventTypes) || this.isModify(eventTypes) ) {
      logger.info(`Updating: ${fcpath}`);
      await this.getData(fcpath);
    } else if( this.isDelete(eventTypes) ) {
      logger.info(`Delete: ${fcpath}`);
      await this.cleanData(fcpath);
    }
  }

  async _stream(options, filepath) {

    if( !options.headers ) options.headers = {};
    options.headers.Authorization = `Bearer ${this.token}`;
    options.uri = `${config.fcrepo.host}${config.fcrepo.root}${options.uri}`;

    return new Promise((resolve, reject) => {
      let stream = fs.createWriteStream(filepath);
      stream.on('finish', () => resolve());

      request(options).pipe(stream);
    });
  }

}

new SerializationMessageServer();