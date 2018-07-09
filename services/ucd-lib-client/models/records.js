const es = require('../lib/esClient');
const config = require('../config');
const ElasticSearchModel = require('./elasticsearch');
const clone = require('clone');

const FILL_ATTRIBUTES = config.elasticsearch.fields.fill;

class RecordsModel extends ElasticSearchModel {

  /**
   * @method get
   * @description get a record by id.  This method will walk 'hasPart'
   * and 'associatedMedia' array filling in child records in '_hasPart' and
   * '_associatedMedia' respectively.
   * 
   * @param {String} id record id
   * 
   * @return {Promise} resolves to record
   */
  async get(id) {
    let result = await this.esGet(id);
    await this._fillRecord(result._source);
    return result._source;
  }

  /**
   * @method _fillRecord
   * @description helper 'get' method for walking 'fill' attributes
   * 
   * @param {Object} record 
   */
  async _fillRecord(record) {
    for( var i = 0; i < FILL_ATTRIBUTES.length; i++ ) {
      if( !record[FILL_ATTRIBUTES[i]] ) continue;
  
      await this._fillAttribute(record, FILL_ATTRIBUTES[i]);
    }
  }
  
  /**
   * @method _fillAttribute
   * @description helper 'get' method for walking 'fill' attributes
   * 
   * @param {Object} record 
   */
  async _fillAttribute(record, attribute) {
    let values = record[attribute];
    if( !Array.isArray(values) ) values = [values];
  
    record['_'+attribute] = [];
  
    try {
      let resp = await this.esMget(values);
      record['_'+attribute] = await resp.docs.map(doc => doc._source);
    } catch(e) {
      // hummmm....
      record['_'+attribute] = e.message;
    }
  
    for( var i = 0; i < record['_'+attribute].length; i++ ) {
      let childRecord = record['_'+attribute][i];
      if( !childRecord ) {
        record['_'+attribute][i] = {error:true, message:'record not found'}
        continue;
      }
      await this._fillRecord(childRecord);
    }
  }

  /**
   * @method search
   * @description search the elasticsearch records using the ucd dams
   * search document.  This will only search root records (records flagged
   * with isRootRecord).
   * 
   * @param {Object} SearchDocument
   * @param {Boolean} debug will return searchDocument and esBody in result
   * 
   * @returns {Promise} resolves to search result
   */
  async search(searchDocument = {}, debug = false) {
    // right now, only allow search on root records
    if( !searchDocument.filters ) {
      searchDocument.filters = {};
    }

    searchDocument.filters.isRootRecord = {
      type : 'keyword',
      op : 'and',
      value : [true]
    }

    let esBody = this.searchDocumentToEsBody(searchDocument);
    let esResult = await this.esSearch(esBody);
    let result = this.esResultToDamsResult(esResult, searchDocument);

    // now we need to fill on 'or' filters facets options
    // to get counts as the dams UI wants them, we need to perform a
    // agg only query with the 'or' bucket attributes removed
    let facets = searchDocument.facets || {};
    for( let filter in searchDocument.filters ) {
      // user don't care about this agg
      if( !facets[filter] ) continue; 
      // only need to worry about facet filters
      if( searchDocument.filters[filter].type !== 'keyword' ) continue; 
      // only need to worry about 'or' filters
      if( searchDocument.filters[filter].op !== 'or' ) continue; 

      let tmpSearchDoc = clone(searchDocument);
      // we don't need results
      tmpSearchDoc.offset = 0;
      tmpSearchDoc.limit = 0;
      // remove the filter
      delete tmpSearchDoc.filters[filter]
      // only ask for aggs on this filter
      tmpSearchDoc.facets = {
        [filter] : {
          type : 'facet'
        }
      }

      let tmpResult = await this.esSearch(this.searchDocumentToEsBody(tmpSearchDoc));
      tmpResult = this.esResultToDamsResult(tmpResult, tmpSearchDoc);

      // finally replace facets response
      result.aggregations.facets[filter] = tmpResult.aggregations.facets[filter];
    }

    if( debug ) {
      result.searchDocument = searchDocument;
      result.esBody = esBody;
    }

    return result;
  }

  /**
   * @method esSearch
   * @description search the elasticsearch records using
   * es search document
   * 
   * @param {Object} body elasticsearch search body
   * @param {Object} options elasticsearch main object for additional options
   * 
   * @returns {Promise} resolves to elasticsearch result
   */
  esSearch(body = {}, options={}) {
    options.index = config.elasticsearch.record.alias;
    options.body = body;

    options._sourceExclude = config.elasticsearch.fields.exclude;

    return es.search(options);
  }

  /**
   * @method esScroll
   * @description croll a search request (retrieve the next set of results) after specifying the scroll parameter in a search() call.
   * https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-scroll
   * 
   * @param {Object} options
   * @param {String} options.scrollId current scroll id
   * @param {String} options.scroll time to keep open
   * 
   * @returns {Promise} resolves to elasticsearch result
   */
  esScroll(options={}) {
    return es.scroll(options);
  }

  /**
   * @method esGet
   * @description get the elasticsearch record using record id
   * 
   * @param {String} id record id
   * 
   * @returns {Promise} resolves to elasticsearch result
   */
  esGet(id) {
    return es.get({
      index: config.elasticsearch.record.alias,
      type: '_all',
      _sourceExclude : config.elasticsearch.fields.exclude,
      id: id
    });
  }

  /**
   * @method esMget
   * @description get the elasticsearch records using array of record ids
   * 
   * @param {Array} ids record ids
   * 
   * @returns {Promise} resolves to elasticsearch result
   */
  esMget(ids) {
    return es.mget({
      index: config.elasticsearch.record.alias,
      type: '_all',
      body: {ids}
    });
  }

}

module.exports = new RecordsModel();