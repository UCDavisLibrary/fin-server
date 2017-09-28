var stompit = require('stompit');
var config = require('../config');

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

  constructor() {
    this.buffer = new MsgBuffer();
    this.wait = 1000;
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

  init() {
    if( !this.client ) return;
    console.log('STOMP client connected');


    this.client.subscribe(subscribeHeaders, async (error, message) => {
      if( error ) {
        return console.error(error);
      }

      var headers = message.headers;

      // message must be read before it can be ack'd ...
      var body = await this.readMessage(message);
      // console.log(body);
      
      var id = headers['org.fcrepo.jms.identifier'];
      console.log(id, headers['org.fcrepo.jms.eventType']);
      console.log('-------------');

      setTimeout(() => {
        this.client.ack(message);
      }, 2000);
      
      
      // this.buffer.push(id, () => {
      //   console.log('UPDATED', id);
      // });
      
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

class MsgBuffer {

  constructor() {
    this.lookup = {};
    this.bufferTime = 2000;
  }

  push(id, callback) {
    if( !id ) return;

    if( this.lookup[id] ) {
      clearTimeout(this.lookup[id].timeoutId);
      this.lookup[id].timeoutId = setTimeout(() => {
        this.lookup[id].callback(id);
        delete this.lookup[id];
      }, this.bufferTime);
      return;
    }

    var item = {
      id : id,
      timestamp : Date.now(),
      timeoutId : setTimeout(() => {
        this.lookup[id].callback(id);
        delete this.lookup[id];
      }, this.bufferTime),
      callback : callback
    }

    this.lookup[id] = item;
  }
}

var mc = new MessageConsumer();
mc.connect();