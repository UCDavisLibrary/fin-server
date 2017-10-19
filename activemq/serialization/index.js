const MessageServer = require('ucdlib-dams-utils/MessageServer');
const config = require('ucdlib-dams-utils/config');
const jwt = require('ucdlib-dams-utils/jwt');
const request = require('request');
const {URL} = require('url');
const fs = require('fs-extra');
const path = require('path');
const SERIAL_PATH = require('path');

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

  async getTurtle(path) {
    var {response, body} = await this._request({
      type : 'GET',
      uri: path,
      headers : {
        Accept: 'text/turtle'
      }
    });
    return body;
  }

  async getFile(path) {
    var filename = path.split(',').pop();

    var {response, body} = await this._request({
      type : 'GET',
      uri: path,
      headers : {
        Accept: 'text/turtle'
      }
    });
    return body;
  }

  async getData(fcpath) {
    
    let isData = await this.isDataFile(fcpath);

    if( isData ) {
      let dir = fcpath.split('/');
      dir.pop();

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
          Accept: 'text/turtle'
        }
      }, fspath+'.ttl');
    
    } else {
      fs.mkdirsSync(path);

      await this._stream({
        type : 'GET',
        uri : fcpath,
        headers : {
          Accept: 'text/turtle'
        }
      }, path.join(fspath, 'index.ttl'));
    }
  }

  async cleanData(fcpath) {
    
    let isData = await this.isDataFile(fcpath);

    if( isData ) {
      
      if( fs.existsSync(fspath) ) {
        await fs.remove(fspath);
      }
      if( fs.existsSync(fspath+'.ttl') ) {
        await fs.remove(fspath+'.ttl');
      }

      let dir = fcpath.split('/');
      dir.pop();

      

      await this._stream({
        type : 'GET',
        uri : fcpath+'/fcr:metadata',
        headers : {
          Accept: 'text/turtle'
        }
      }, fspath+'.ttl');
    
    } else {
      fs.mkdirsSync(path);

      await this._stream({
        type : 'GET',
        uri : fcpath,
        headers : {
          Accept: 'text/turtle'
        }
      }, path.join(fspath, 'index.ttl'));
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

      this.getData(fcpath);

    } else if( eventTypes.indexOf('ResourceDeletion') > -1 ) {

      this.cleanData(fcpath);
    
    }
  }

  _stream(options, filepath) {
    if( !options.headers ) options.headers = {};
    options.headers.Authorization = `Bearer ${this.token}`;
    options.uri = `${config.fcrepo.host}${config.fcrepo.root}${options.uri}`;

    return new Promise((resolve, reject) => {
      request(options)
        .pipe(fs.createWriteStream(filepath))
        .on('end', () => resolve());
    });
  }

}

new SerializationMessageServer();