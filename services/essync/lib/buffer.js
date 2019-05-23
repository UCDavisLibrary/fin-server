const EventEmitter = require('events');

class UpdateBuffer extends EventEmitter {

  constructor() {
    super();
    this.buffer = {};
    this.bufferTime = 1000 * 10;
  }

  add(type, id, data) {
    if( !this.buffer[type] ) {
      this.buffer[type] = {};
    }
    let buffer = this.buffer[type];

    if( buffer[id] ) {
      clearTimeout(buffer[id]);
    }

    buffer[id] = setTimeout(() => {
      delete buffer[id];
      this.emit(type+'-update', {data, id});
    }, this.bufferTime);
  }

}

module.exports = new UpdateBuffer();