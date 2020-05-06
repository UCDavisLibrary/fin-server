const es = require('../lib/esClient');
const config = require('../config');
const ElasticSearchModel = require('./elasticsearch');

class CollectionsModel extends ElasticSearchModel {

  /**
   * @description search the elasticsearch collections using the ucd dams
   * search document.
   * 
   * @param {Object} SearchDocument
   * @param {Boolean} options.debug will return searchDocument and esBody in result
   * 
   * @returns {Promise} resolves to search result
   */
  async search(searchDocument, options={debug:false}) {
    let esBody = this.searchDocumentToEsBody(searchDocument);
    let esResult = await this.esSearch(esBody);
    let result = this.esResultToDamsResult(esResult);
    
    if( options.debug ) {
      result.searchDocument = searchDocument;
      result.esBody = esBody;
    }

    return result
  }

  /**
   * @method esSearch
   * @description search the elasticsearch collections using
   * es search document
   * 
   * @param {Object} body elasticsearch search body
   * 
   * @returns {Promise} resolves to elasticsearch result
   */
  esSearch(body = {}) {
    return es.search({
      index : config.elasticsearch.collection.alias,
      body : body
    });
  }

  /**
   * @method get
   * @description get a collection by id
   * 
   * @param {String} id collection id 
   * 
   * @returns {Promise} resolves to elasticsearch result
   */
  get(id) {
    return es.get({
      index : config.elasticsearch.collection.alias,
      type: '_all',
      id: id
    });
  }

  /**
   * @method all
   * @description get all collections
   * 
   * @returns {Promise} resolves to array of collection objects
   */
  async all() {
    let results = await this.esSearch();
    return this.esResultToDamsResult(results);
  }
}

module.exports = new CollectionsModel();