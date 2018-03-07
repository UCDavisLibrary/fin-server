/**
 * Use this to listen to messages from ActiveMQ
 */
const http = require('http');
const body = require('body/json');
const request = require('request');
const jwt = require('./jwt');
const config = require('./config');
const logger = require('./logger');

const WEBHOOK_EVENT_TYPES = {
  FIN_EVENT : 'fin-event',
  FCREPO_EVENT : 'fcrepo-event'
}

class MessageServer {

  constructor(name, port=3333) {
    this.name = name;
    this.port = port;
    this.request = request;

    this.WEBHOOK_EVENT_TYPES = WEBHOOK_EVENT_TYPES;

    this.server = http.createServer((req, res) => {
      body(req, async (err, body) => {
        if( err ) {
          logger.error(`${name} - failed to parse message`, err);
        }

        var response = JSON.stringify({ack: true});
        res.writeHead(200, {
          'Content-Length': response.length,
          'Content-Type': 'application/json'
        });
        res.end(response);
        req.socket.destroy();

        await this.handleMessage(body);
      });
    });

    this.server.listen(this.port, () => {
      logger.info(`${name} - Server Listening on ${port}`);
    });

    this.server.on('error', (e) => {
      logger.error(`${name} - Server failed to start`, e);
    });

    this.token = null;
    setInterval(this._generateToken.bind(this), 1000 * 60 * 60 * 6);
    this._generateToken()
  }

  /**
   * @method getEventTypes
   * @description given a webhook message, return the fcrepo event message
   * types for this event.  The types will have the prefixes removed,
   * only the type name will be in the array.
   * 
   * @param {Object} msg webhook message body
   * 
   * @returns {Array}
   */
  getEventTypes(msg) {
    return msg.payload
      .headers['org.fcrepo.jms.eventType']
      .split(',')
      .map(type => type.trim().replace(/.*#/, ''));
  }

  /**
   * @method getPath
   * @description given a webhook message, return the fcrepo path
   * for the event message
   * 
   * @param {Object} msg webhook message body
   * 
   * @returns {String}
   */
  getPath(msg) {
    return msg.payload.headers['org.fcrepo.jms.identifier'] || '/';
  }

  /**
   * @method isCreate
   * @description given an array of strings from getEventTypes(),
   * return true of this is a create event
   * 
   * @param {Array} eventTypes array of event names
   * 
   * @returns {Boolean}
   */
  isCreate(eventTypes) {
    return (eventTypes.indexOf('ResourceCreation') > -1);
  }

  /**
   * @method isModify
   * @description given an array of strings from getEventTypes(),
   * return true of this is a modify event
   * 
   * @param {Array} eventTypes array of event names
   * 
   * @returns {Boolean}
   */
  isModify(eventTypes) {
    return (eventTypes.indexOf('ResourceModification') > -1);
  }

  /**
   * @method isDelete
   * @description given an array of strings from getEventTypes(),
   * return true of this is a delete event
   * 
   * @param {Array} eventTypes array of event names
   * 
   * @returns {Boolean}
   */
  isDelete(eventTypes) {
    return (eventTypes.indexOf('ResourceDeletion') > -1);
  }

  /**
   * @method isDotPath
   * @description given a path string from getPath, does any section of the path start
   * with a .
   * 
   * @param {String} path
   * 
   * @returns {Boolean}
   */
  isDotPath(path) {
    if( path.match(/http/) ) {
      let urlInfo = new URL(path);
      path = urlInfo.pathname;
    }
    
    path = path.split('/');
    for( var i = 0; i < path.length; i++ ) {
      if( path[i].match(/^\./) ) {
        return path[i];
      }
    }

    return null;
  }

  _generateToken() {
    this.token = jwt.create(this.name, true);
  }

  _request(options) {
    if( !options.headers ) options.headers = {};
    options.headers.Authorization = `Bearer ${this.token}`;
    options.uri = `${config.fcrepo.host}${config.fcrepo.root}${options.uri}`;

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if( error ) reject(error);
        else resolve({response, body});
      });
    });
  }

  async handleMessage(msg) {
    // TODO: implmentment me
  }

}

module.exports = MessageServer;