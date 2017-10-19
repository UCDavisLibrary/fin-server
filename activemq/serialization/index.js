const MessageServer = require('ucdlib-dams-utils/MessageServer');
const config = require('ucdlib-dams-utils/config');
const jwt = require('ucdlib-dams-utils/jwt');
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
      await this.removeFile(fspath);
      await this.removeFile(fspath+'.ttl');
    } else {
      await this.removeFile(path.join(fspath, 'index.ttl'));
    }
  }

  async handleMessage(msg) {

    if( msg.type !== 'fcrepo-event' ) return;

    let eventTypes = msg.payload
                          .headers['org.fcrepo.jms.eventType']
                          .split(',')
                          .map(type => type.trim().replace(/.*#/, ''));

    let fcpath = msg.payload.headers['org.fcrepo.jms.identifier'];

    if( eventTypes.indexOf('ResourceModification') > -1 ||
        eventTypes.indexOf('ResourceCreation') > -1  ) {
      console.log(`Updating: ${fcpath}`);
      await this.getData(fcpath);

    } else if( eventTypes.indexOf('ResourceDeletion') > -1 ) {
      console.log(`Delete: ${fcpath}`);
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