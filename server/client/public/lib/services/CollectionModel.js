const {BaseService} = require('@ucd-lib/cork-app-utils');
const CollectionStore = require('../stores/CollectionStore');

class CollectionSerivce extends BaseService {

  constructor() {
    super();
    this.store = CollectionStore;

  }

}

module.exports = new CollectionSerivce();