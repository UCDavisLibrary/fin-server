var Stomp = require('stomp-client');
var config = require('../config');

class MessageConsumer {

  constructor() {
    this.buffer = new MsgBuffer();
  }

  init() {
    setTimeout(() => {
      var stompClient = new Stomp(config.fcrepo.hostname, config.fcrepo.stomp.port);
      
      stompClient.connect((sessionId) => {
        console.log('connected', sessionId);

        stompClient.subscribe(config.fcrepo.stomp.topic, (body, headers) => {
          var id = headers['org.fcrepo.jms.identifier'];

          this.buffer.push(id, () => {
            console.log('UPDATED', id);
          });
        });
      });
    }, 20000);
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
mc.init();