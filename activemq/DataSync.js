
/**
 * Base class for writing data storage synchronization
 */
class DataSync {

  constructor() {
    // should acl updates be ignored?
    this.ignoreACL = true;
  }

  onUpdate(id, jsonld) {
    throw Error('DataSync class did not implement onUpdate');
  }

  onDelete(id) {
    throw Error('DataSync class did not implement onDelete');
  }
  
}

module.exports = DataSync;