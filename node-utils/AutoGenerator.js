const MessageServer = require('./MessageServer');

class AutoGenerator extends MessageServer {

  constructor(name, options) {
    super(name, options.port);
    this.type = options.type;
  }

  async handleMessage(msg) {
    if( msg.type !== 'fcrepo-event' ) return;
    if( !this.isValidType(msg.payload.body.type) ) return;

    let eventTypes = this.getEventTypes(msg);

    if( this.isCreate(eventTypes) ) this.onContainerCreated(msg);
    else if( this.isModify(eventTypes) ) this.onContainerModified(msg);
    else if( this.isDelete(eventTypes) ) this.onContainerDeleted(msg);
  }

  isValidType(types) {
    return (types.indexOf(type) > -1);
  }

  onContainerCreated(msg) {
    // implement me
  }

  onContainerModified(msg) {
    // implement me
  }

  onContainerDeleted(msg) {
    // implement me
  }

}

module.exports = AutoGenerator;