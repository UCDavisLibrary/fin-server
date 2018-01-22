const stompit = require('stompit');
const {config, logger} = require('@ucd-lib/fin-node-utils');
const request = require('request');
const Logger = logger();
const EventEmitter = require('events');


var connectOptions = {
  host : config.fcrepo.hostname,
  port : config.fcrepo.stomp.port,
  connectHeaders: {
    host : config.fcrepo.hostname
  }
};

var subscribeHeaders = {
  destination: config.fcrepo.stomp.topic,
  ack: 'client-individual'
};

class MessageConsumer extends EventEmitter {

  connect() {
    setTimeout(() => {
      stompit.connect(connectOptions, (error, client) => {
        if( error ) {
          this.wait += 1000;
          return this.connect();
        }

        this.wait = 1000;
        this.client = client;
        this.init();
      });
    }, this.wait);
  }

  init() {
    if( !this.client ) return;
    Logger.info('STOMP client connected');


    this.client.subscribe(subscribeHeaders, async (error, message) => {
      if( error ) {
        return console.error(error);
      }

      var headers = message.headers;

      // message must be read before it can be ack'd ...
      var body = await this.readMessage(message);
      if( typeof body === 'string' ) {
        try {
          body = JSON.parse(body);
        } catch(e) {}
      }

      var id = headers['org.fcrepo.jms.identifier'];
      Logger.debug('ActiveMQ Event', id, headers['org.fcrepo.jms.eventType']);

      this.broadcast({
        type : 'fcrepo-event',
        payload : {headers, body}
      });

      // TODO: do we need to ack?
      // this.client.ack(message);
    });
  }

  broadcast(message) {
    // send via JS events
    this.emit('fcrepo-event', {headers, body});
  }

  // async broadcastToService(service, message) {
  //   return new Promise((resolve, reject) => {
  //     request({
  //       type : 'POST',
  //       uri : `http://${service}:3333`,
  //       body : message 
  //     },
  //     (error, response, body) => {
  //       if( error ) reject(error);
  //       else resolve({response, body});
  //     });
  //   });
  // }

  readMessage(message) {
    return new Promise((resolve, reject) => {
      message.readString('utf-8', function(error, body) {
        if( error ) reject(error);
        else resolve(body);
      });
    });
  }

}

var mc = new MessageConsumer();
mc.connect();

module.exports = mc;