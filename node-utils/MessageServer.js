/**
 * Use this to listen to messages from ActiveMQ
 */
const http = require('http');
const body = require('body/json');
const request = require('request');
const jwt = require('./jwt');
const config = require('./config');
const port = 3333;

class MessageServer {

  constructor(name) {
    this.name = name;
    this.request = request;

    this.server = http.createServer((req, res) => {
      body(req, async (err, body) => {
        if( err ) {
          
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

    this.server.listen(port, function() {
      console.log(`${name} - Message Server Listening`);
    });

    this.server.on('error', (e) => {
      console.log(`${name} - Message server failed to start`);
      console.error(e);
    });

    this.token = null;
    setInterval(this._generateToken.bind(this), 1000 * 60 * 60 * 6);
    this._generateToken()
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