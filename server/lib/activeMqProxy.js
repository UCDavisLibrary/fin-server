const stompit = require('stompit'); // docs: http://gdaws.github.io/node-stomp/api/channel/
const {config, logger} = require('@ucd-lib/fin-node-utils');
const request = require('request');
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
    this.connect();
  }


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

  /**
   * @method init
   * @description connect to activemq via STOMP
   */
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

      var id = headers[ACTIVE_MQ_HEADER_ID];
      logger.debug('ActiveMQ Event', id, headers[ACTIVE_MQ_HEADER_EVENT]);

      this.broadcast({
        type : 'fcrepo-event',
        payload : {headers, body}
      });

      // TODO: do we need to ack?
      // this.client.ack(message);
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