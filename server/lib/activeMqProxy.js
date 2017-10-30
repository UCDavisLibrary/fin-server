const stompit = require('stompit');
const config = require('ucdlib-dams-utils/config');
const logger = require('ucdlib-dams-utils/logger')();
const request = require('request');


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

class MessageConsumer {

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
    logger.info('STOMP client connected');


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
      logger.debug('ActiveMQ Event', id, headers['org.fcrepo.jms.eventType']);

      await this.broadcastToServices(JSON.stringify({
        type : 'fcrepo-event',
        payload : {headers, body}
      }));

      this.client.ack(message);
    });
  }

  async broadcastToServices(message) {
    var services = config.services.activemq;
    for( var i = 0; i < services.length; i++ ) {
      try {
        await this.broadcastToService(services[i], message);
      } catch(e) {
        logger.error(e);
      }
    }
  }

  async broadcastToService(service, message) {
    return new Promise((resolve, reject) => {
      request({
        type : 'POST',
        uri : `http://${service}:3333`,
        body : message 
      },
      (error, response, body) => {
        if( error ) reject(error);
        else resolve({response, body});
      });
    });
  }

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