var {BaseModel} = require('@ucd-lib/cork-app-utils');
var CollectionStore = require('../stores/CollectionStore');
var CollectionService = require('../services/CollectionService');


class CollectionModel extends BaseModel {
  
    constructor() {
      super();
      this.store = CollectionStore;
      this.service = CollectionService;

      this.register('CollectionModel');
    }



}

module.exports = new CollectionModel();