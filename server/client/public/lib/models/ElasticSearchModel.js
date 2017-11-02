var {ElasticSearchModel} = require('@ucd-lib/cork-app-elastic-search');
const ElasticSearchStore = require('../stores/ElasticSearchStore');
const ElasticSearchService = require('../services/ElasticSearchService');
var config = require('../config');

class ElasticSearchModelImpl extends ElasticSearchModel {

  constructor() {
    super();
    this.service = ElasticSearchService;
    this.store = ElasticSearchStore;
    this.config = config;
  }

}

module.exports = new ElasticSearchModelImpl();