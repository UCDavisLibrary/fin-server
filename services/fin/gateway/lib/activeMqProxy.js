const stompit = require('stompit'); // docs: http://gdaws.github.io/node-stomp/api/channel/
const {config, logger} = require('@ucd-lib/fin-node-utils');
const request = require('request');
const EventEmitter = require('events');


var connectOptions = {
  host : config.fcrepo.hostname,
  port : config.fcrepo.stomp.port,
  connectHeaders: {
    host : config.fcrepo.hostname,
    'heart-beat': '5000,5000'
  }
};

var subscribeHeaders = {
  destination: config.fcrepo.stomp.queue || '/queue/fedora',
  ack: 'client-individual'
};

const ACTIVE_MQ_HEADER_ID = 'org.fcrepo.jms.identifier';
const ACTIVE_MQ_HEADER_EVENT = 'org.fcrepo.jms.eventType';

/**
 * @class MessageConsumer
 * @description connects to activemq via STOMP protocol and emits
 * messages via nodejs events
 */
class MessageConsumer extends EventEmitter {

  constructor() {
    super();
    this.wait = 0;
    this.counter = 0;
  }

  onDisconnect(event) {
    logger.warn('STOMP client disconnected: '+event);
    
    if( this.client ) { // make sure we are closed
      this.client.disconnect();
      this.client = null;
    }

    this.wait = 0;
  
    if( !this.connecting && !this.client ) {
      this.connect();
    }
  }


  connect() {
    if( !this.connecting ) {
      this.connecting = true;
    }

    setTimeout(() => {
      logger.info('STOMP attempting connection');

      stompit.connect(connectOptions, (error, client) => {
        if( error ) {
          this.wait += 1000;
          logger.warn('STOMP connection attempt failed, retry in: '+this.wait+'ms');
          return this.connect();
        }

        // capture all end/close/finish events, assume badness, reconnect
        client.on('error', () => this.onDisconnect('error'));
        client.on('end', () => this.onDisconnect('end'));
        client.on('finish', () => this.onDisconnect('finish'));
        client.on('close', () => this.onDisconnect('close'));

        this.connecting = false;
        this.wait = 0;
        this.client = client;
        this.init();
      });
    }, this.wait);
  }

  /**
   * @method init
   * @description connect to activemq via STOMP
   */
  init() {
    if( !this.client ) return;
    logger.info('STOMP client connected to server');

    var uid = this.counter;
    this.counter++;

    this.client.subscribe(subscribeHeaders, async (error, message) => {
      if( error ) {
        return logger.error('STOMP message error', error);
      }

      var headers = message.headers;

      // message must be read before it can be ack'd ...
      var body = await this.readMessage(message);
      if( typeof body === 'string' ) {
        try {
          body = JSON.parse(body);
        } catch(e) {}
      }

      var id = headers[ACTIVE_MQ_HEADER_ID];
      logger.debug('ActiveMQ Event', id, headers[ACTIVE_MQ_HEADER_EVENT]);

      this.broadcast({
        type : 'fcrepo-event',
        payload : {headers, body}
      });

      // TODO: do we need to ack?
      this.client.ack(message);
    });
  }

  /**
   * @method message
   * @description broadcast activemq message via event bus to internal modules
   * 
   * @param {Object} message
   */
  broadcast(message) {
    // send via JS events
    this.emit('fcrepo-event', message);
  }

  /**
   * @method readMessage
   * @description read a activemq message
   * 
   * @param {Object} message activemq message
   * 
   * @returns {Promise} resolves to activemq message
   */
  readMessage(message) {
    return new Promise((resolve, reject) => {
      message.readString('utf-8', function(error, body) {
        if( error ) reject(error);
        else resolve(body);
      });
    });
  }

}

module.exports = new MessageConsumer();