/**
 * Use this to listen to messages from ActiveMQ
 */
const http = require('http');
const body = require('body/json');
const request = require('request');
const jwt = require('./jwt');
const config = require('./config');
const logger = require('./logger');

class MessageServer {

  constructor(name, port=3333) {
    this.name = name;
    this.port = port;
    this.request = request;

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

    this.server.listen(this.port, function() {
      logger.info(`${name} - Server Listening on ${this.port}`);
    });

    this.server.on('error', (e) => {
      logger.error(`${name} - Server failed to start`, e);
    });

    this.token = null;
    setInterval(this._generateToken.bind(this), 1000 * 60 * 60 * 6);
    this._generateToken()
  }

  getEventTypes(msg) {
    return msg.payload
      .headers['org.fcrepo.jms.eventType']
      .split(',')
      .map(type => type.trim().replace(/.*#/, ''));
  }

  isCreate(eventTypes) {
    return (eventTypes.indexOf('ResourceCreation') > -1);
  }

  isModify(eventTypes) {
    return (eventTypes.indexOf('ResourceModification') > -1);
  }

  isDelete(eventType) {
    return (eventTypes.indexOf('ResourceDeletion') > -1);
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