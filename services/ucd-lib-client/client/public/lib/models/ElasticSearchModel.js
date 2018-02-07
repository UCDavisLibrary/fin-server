var {ElasticSearchModel} = require('@ucd-lib/cork-app-elastic-search');
const ElasticSearchStore = require('../stores/ElasticSearchStore');
const ElasticSearchService = require('../services/ElasticSearchService');
var config = require('../config');

class ElasticSearchModelImpl extends ElasticSearchModel {

  constructor() {
    super();

    this.service = ElasticSearchService;
    this.store = ElasticSearchStore;
    this.store.config = config.elasticSearch;
  }

  /**
   * @method get
   * @description load a record by id from elastic search
   * 
   * @param {String} id record id
   * 
   * @returns {Promise} resolves to record
   */
  async get(id) {
    return this.service.get(id);
  }

}

module.exports = new ElasticSearchModelImpl();