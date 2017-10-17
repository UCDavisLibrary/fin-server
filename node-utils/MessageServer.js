/**
 * Use this to listen to messages from ActiveMQ
 */
const http = require('http');
const body = require('body/json');
const port = 3333;

class MessageServer {

  constructor(name) {
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
    
  }

  async handleMessage(msg) {
    // TODO: implmentment me
  }

}

module.exports = MessageServer;