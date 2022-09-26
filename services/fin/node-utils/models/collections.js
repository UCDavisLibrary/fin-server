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
    let results = await this.esSearch({size : 1000});
    return this.esResultToDamsResult(results);
  }

  /**
   * @method overview
   * @description get all collections
   * 
   * @returns {Promise} resolves to array of collection objects
   */
  async overview() {
    // get collection counts
    let results = await es.search({
      index : config.elasticsearch.record.alias,
      body : {
        aggs : {
          collectionId : {
            terms: {
              field: 'collectionId',
              size: 10000
            }
          }
        },
        query : {
          bool : {
            filter: [{
              term: {isRootRecord: true}
            }]
          }
        },
        size: 0
      }
    });
    let counts = {};
    results.aggregations.collectionId.buckets.forEach(item => {
      counts[item.key] = item.doc_count;
    });

    // grab basic collection info
    results = await es.search({
      index : config.elasticsearch.collection.alias,
      body : {
        size: 10000
      },
      _source_includes : ['@id', 'name', 'description', 'thumbnailUrl'].join(',')
    });

    // join counts with basic info
    return results.hits.hits.map(item => {
      item._source.recordCount = counts[item._source['@id']];
      return item._source;
    })
  }
}

module.exports = new CollectionsModel();