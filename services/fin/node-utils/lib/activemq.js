const stompit = require('stompit'); // docs: http://gdaws.github.io/node-stomp/api/channel/
const config = require('../config.js');
const logger = require('./logger.js');


var connectOptions = {
  host : config.fcrepo.hostname,
  port : config.fcrepo.stomp.port,
  connectHeaders: {
    host : '/',
    login : 'fedoraAdmin',
    passcode : 'fedoraAdmin',
    'heart-beat': '10000,10000'
  }
};

var subscribeHeaders = {
  destination: config.fcrepo.stomp.queue || '/queue/fedora',
  ack: 'client-individual',
  'activemq.prefetchSize' : 1
};

/**
 * @class MessageConsumer
 * @description connects to activemq via STOMP protocol and emits
 * messages via nodejs events
 */
class MessageConsumer {

  constructor() {
    this.wait = 0;
    this.counter = 0;

    this.ACTIVE_MQ_HEADER_ID = 'org.fcrepo.jms.identifier';
    this.ACTIVE_MQ_HEADER_EVENT = 'org.fcrepo.jms.eventType';
    this.callback = null;
  }

  onMessage(callback) {
    this.callback = callback;
  }

  onDisconnect(event, error) {
    logger.warn('STOMP client disconnected: '+event);
    if( error ) logger.error('STOMP client disconnect error: ', error)
    
    if( this.client ) { // make sure we are closed
      this.client.disconnect();
      this.client = null;
    }

    this.wait = 0;
  
    if( !this.connecting && !this.client ) {
      this.connect();
    }
  }

  sendMessage(msg, additionalHeaders={}) {
    if( typeof message !== 'string' ) {
      msg = JSON.stringify(msg);
    } 
    const frame = this.client.send(Object.assign({
      'destination': subscribeHeaders.destination,
      'content-type': 'application/json'
    }, additionalHeaders));
    frame.write(msg);
    frame.end();
  }

  connect(clientName, queue) {
    if( !this.connecting ) {
      this.connecting = true;
    }

    if( clientName ) {
      connectOptions.connectHeaders['client-id'] = clientName;
    }
    if( queue ) {
      subscribeHeaders.destination = queue;
    }

    setTimeout(() => {
      let logOpts = Object.assign({}, connectOptions);
      logOpts.connectHeaders.passcode = '******';
      logger.info('STOMP attempting connection', logOpts);

      stompit.connect(connectOptions, (error, client) => {
        if( error ) {
          this.wait += 1000;
          logger.warn('STOMP connection attempt failed, retry in: '+this.wait+'ms');
          return this.connect();
        }

        // capture all end/close/finish events, assume badness, reconnect
        client.on('error', e => this.onDisconnect('error', e));
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
    logger.info('STOMP client connected to server', subscribeHeaders);


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

      var id = headers[this.ACTIVE_MQ_HEADER_ID];
      logger.debug('ActiveMQ Event', id, headers[this.ACTIVE_MQ_HEADER_EVENT]);

      await this.callback({headers, body})

      this.client.ack(message);
    });
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