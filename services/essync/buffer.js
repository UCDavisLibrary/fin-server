const EventEmitter = require('events');

class RootRecordBuffer extends EventEmitter {

  constructor() {
    super();
    this.buffer = {};
    this.bufferTime = 1000 * 10;
  }

  add(e) {
    if( this.buffer[e.id] ) {
      clearTimeout(this.buffer[e.id]);
    }

    this.buffer[e.id] = setTimeout(() => {
      delete this.buffer[e.id];
      this.emit('record-update', e);
    }, this.bufferTime);
  }

}

module.exports = new RootRecordBuffer();