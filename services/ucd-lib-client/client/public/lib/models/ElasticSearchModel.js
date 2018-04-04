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

  /**
   * @method search
   * @description preform a es collection search given an app search document
   * 
   * @param {Object} searchDocument
   * 
   * @returns {Promise}
   */
  search(searchDocument = {}) {
    let promise = super.search(searchDocument);

    // there is search text but no collection filter applied
    if( !searchDocument.filters.isPartOf && searchDocument.text ) {
      this.searchCollection({text: searchDocument.text});
      this.emit('show-collection-search-results', true);
    } else {
      this.emit('show-collection-search-results', false);
    }

    return promise;
  }

  /**
   * @method searchCollection
   * @description preform a es collection search given an app search document
   * 
   * @param {Object} searchDocument
   * 
   * @returns {Promise}
   */
  async searchCollection(searchDocument = {}) {
    searchDocument.limit = 100;
    searchDocument.offset = 0;

    let esBody = this.fromSearchDocumentToEsBody(searchDocument);
    delete esBody.aggs;

    return this.service.searchCollection(esBody);
  }

  async setKeywordAndText(text, attr, value, op = 'or') {
    let query = this.getAppSearchDocument();
    
    query.filters[attr] = {
      type : 'keyword',
      op : op,
      value : [value]
    }
    query.offset = 0;
    query.text = '';

    return this.search(query);
  }

}

module.exports = new ElasticSearchModelImpl();