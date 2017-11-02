const {ElasticSearchService} = require('@ucd-lib/cork-app-elastic-search');
const ElasticSearchStore = require('../stores/ElasticSearchStore');

class ElasticSearchServiceImpl extends ElasticSearchService {
  constructor() {
    super();
    this.store = ElasticSearchStore;
  }
}

module.exports = new ElasticSearchServiceImpl();