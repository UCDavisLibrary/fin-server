const MessageServer = require('./MessageServer');

class AutoGenerator extends MessageServer {

  constructor(name, options) {
    super(name, options.port);

    this.AUTO_GENERATED_CONTAINER_TYPE = 'http://library.ucdavis.edu/fin-server#AutoGeneratedContainer';
    this.AUTO_GENERATED_CONTAINER_TYPE_COMPACT = 'fin:AutoGeneratedContainer';

    this.types = options.types || [];
    if( !Array.isArray(this.types) ) {
      this.types = [this.types];
    }
  }

  async handleMessage(msg) {
    // message is not fcrepo event message
    if( msg.type !== this.WEBHOOK_EVENT_TYPES.FCREPO_EVENT ) return;

    // container is not of valid type
    if( !this.isValidType(msg.payload.body.type) ) return;

    // don't process auto-generated containers
    if( this.isAutoGeneratedContainer(msg.payload.body.type) ) return;
    
    let path = this.getPath(msg);

    // ignore dot paths
    if( this.isDotPath(path) ) return;

    let eventTypes = this.getEventTypes(msg);

    if( this.isCreate(eventTypes) ) this.onContainerCreated(msg);
    else if( this.isModify(eventTypes) ) this.onContainerModified(msg);
    else if( this.isDelete(eventTypes) ) this.onContainerDeleted(msg);
  }

  /**
   * @method isValidType
   * @description is the container a valid type for this auto generator?
   * 
   * @param {Array} types container types
   * 
   * @returns {Boolean} 
   */
  isValidType(types) {
    for( var i = 0; i < this.types.length; i++ ) {
      if( types.indexOf(this.types[i]) > -1 ) return true;
    }
    return false;
  }

  /**
   * @method isAutoGeneratedContainer
   * @description this container is of type auto generated.  when c
   * 
   * @param {Array} types array of container types 
   */
  isAutoGeneratedContainer(types) {
    return (
      types.indexOf(this.AUTO_GENERATED_CONTAINER_TYPE) > -1 ||
      types.indexOf(this.AUTO_GENERATED_CONTAINER_TYPE_COMPACT) > -1
    );
  }

  /**
   * @method onContainerCreated
   * @description called when a created event is sent on a valid type
   * for this generator.  You should create a container here, but DO NOT
   * do any additional work.  Perform work on the modification event that
   * will be fired one the container is created.  You should override this
   * method call.
   * 
   * Note.  When creating a container with a auto generator, it is recommended
   * you include the http://library.ucdavis.edu/fin-server#AutoGeneratedContainer type
   * to ensure you don't have recursive generation badness.
   * 
   * @param {Object} msg the event message
   */
  onContainerCreated(msg) {
    // implement me
  }

  /**
   * @method onContainerModified
   * @description called when a modify event is sent on a valid type
   * for this generator.  You should perform work on the auto generated
   * container here.  You should override this method call.
   * 
   * @param {Object} msg the event message
   */
  onContainerModified(msg) {
    // implement me
  }

  /**
   * @method onContainerModified
   * @description called when a delete event is sent on a valid type
   * for this generator.  The container may or may not have been removed.  
   * You should override this method call.
   * 
   * @param {Object} msg the event message
   */
  onContainerDeleted(msg) {
    // implement me
  }

}

module.exports = AutoGenerator;