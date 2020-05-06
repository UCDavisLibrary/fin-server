const es = require('../lib/esClient');
const config = require('../config');
const ElasticSearchModel = require('./elasticsearch');
const clone = require('clone');
const transform = require('../lib/seo/record-transform');
const graphConcat = require('../lib/seo/graph-concat');

const FILL_ATTRIBUTES = config.elasticsearch.fields.fill;

class RecordsModel extends ElasticSearchModel {

  /**
   * @method get
   * @description get a record by id.  This method will walk 'hasPart'
   * and 'associatedMedia' array filling in child records.
   * 
   * @param {String} id record id
   * @param {Boolean} seo apply seo/schema.org transform.  This will provide json-ld
   * that can be validated against a schema.org parser.
   * 
   * @return {Promise} resolves to record
   */
  async get(id, seo=false) {
    let result = await this.esGet(id);
    let graph = {[id]: result._source};

    await this._fillGraphRecord(graph, result._source, seo);

    graph = Object.values(graph);

    if( seo ) {
      let record = graphConcat(id, graph)
      transform(record);
      return record;
    }
    
    return graph;
  }

  /**
   * @function getByArk
   * @description request record from elasticsearch with given
   * identifier (doi or ark)
   * 
   * @param {String} id doi or ark
   * 
   * @returns {Object|null}
   */
  async getByArk(id) {
    let result = await es.search({
      index: config.elasticsearch.record.alias,
      body : {
        query : {
          bool : {
            filter : [
              {term : {'identifier.raw' : id}},
              {term : {isRootRecord : true}}
            ]
          }
        }
      },
      _source_exclude : config.elasticsearch.fields.exclude,
    });

    // see if its a collection
    if( result.hits.total === 0 )  {
      result = await es.search({
        index : config.elasticsearch.collection.alias,
        body : {
          query : {
            bool : {
              filter : [
                {term : {'identifier.raw' : id}},
              ]
            }
          }
        },
        _source_exclude : config.elasticsearch.fields.exclude
      });
    }

    if( result.hits.total === 0 ) return null;
    return result.hits.hits[0]._source;
  }

  /**
   * @method _fillGraphRecord
   * @description helper 'get' method for walking 'fill' attributes
   * 
   * @param {Object} graph
   * @param {Object} record 
   * @param {Boolean} seo
   */
  async _fillGraphRecord(graph, record, seo) {
    for( var i = 0; i < FILL_ATTRIBUTES.length; i++ ) {
      if( !record[FILL_ATTRIBUTES[i]] ) continue;
      await this._fillGraphAttribute(graph, record, FILL_ATTRIBUTES[i], seo);
    }
  }
  
  /**
   * @method _fillGraphAttribute
   * @description helper 'get' method for walking 'fill' attributes
   * 
   * @param {Object} graph
   * @param {Object} record
   * @param {String} attribute
   * @param {Boolean} seo
   */
  async _fillGraphAttribute(graph, record, attribute, seo) {
    let values = record[attribute];
    if( !Array.isArray(values) ) values = [values];

    values = values
      .map(v => {
        if( typeof v === 'object' ) return v['@id'];
        return v;
      })
      .filter(v => !v || graph[v] ? false : true);

    let newDocs = [];
    try {
      let resp = await this.esMget(values);
      resp.docs.forEach(doc => {
        if( !doc.found ) {
          doc = {error:true, message:'record not found', '@id' : doc._id};
        } else {
          doc = doc._source;
          newDocs.push(doc);
        }
        graph[doc['@id']] = doc;
      });
    } catch(e) {
      values.forEach(v => graph[v] = e.message);
    }

    for( var i = 0; i < newDocs.length; i++ ) {
      let childRecord = newDocs[i] || {};
      if( Object.keys(childRecord).length === 0 || childRecord.error ) {
        continue;
      }
      await this._fillGraphRecord(graph, childRecord, seo);
    }
  }

  async getFiles(id, files=[]) {
    let searchDocument = {
      "filters":{
        "directParent":{
            type:"keyword",
            value:[id],
            "op":"or"
        }
      }
    }
    let resp = await this.search(searchDocument, {allRecords: true, noLimit: true});

    let types;
    for( let result of resp.results ) {
      types = result['@type'] || [];
      if( types.includes('http://fedora.info/definitions/v4/repository#Resource') ) {
        files.push({
          filename: result.filename, 
          path: result['@id'],
          fileFormat : result.fileFormat,
          fileSize : result.fileSize
        });
      } else if( types.includes('http://www.w3.org/ns/ldp#BasicContainer') ) {
        await this.getFiles(result['@id'], files);
      }
    }

    return files;
  }

  /**
   * @method search
   * @description search the elasticsearch records using the ucd dams
   * search document.  This will only search root records (records flagged
   * with isRootRecord).
   * 
   * @param {Object} SearchDocument
   * @param {Boolean} options.allRecords search all records, not just root records.  defaults to false
   * @param {Boolean} options.noLimit no limit on returned search filters.  defaults to false
   * @param {Boolean} options.debug will return searchDocument and esBody in result
   * 
   * @returns {Promise} resolves to search result
   */
  async search(searchDocument = {}, options = {allRecords: false, noLimit: false, debug: false}) {
    // right now, only allow search on root records
    if( !searchDocument.filters ) {
      searchDocument.filters = {};
    }

    if( !options.allRecords ) {
      searchDocument.filters.isRootRecord = {
        type : 'keyword',
        op : 'and',
        value : [true]
      }
    }

    let esBody = this.searchDocumentToEsBody(searchDocument, options.noLimit);
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

    if( options.debug ) {
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
    options._source_exclude = config.elasticsearch.fields.exclude;

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
  esGet(id, debug=false) {
    let queryDoc = {
      index: config.elasticsearch.record.alias,
      type: '_all',
      id: id
    }

    if( !debug ) {
      queryDoc._source_exclude = config.elasticsearch.fields.exclude;
    }

    return es.get(queryDoc);
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
      _source_exclude : config.elasticsearch.fields.exclude,
      body: {ids}
    });
  }

  /**
   * @method rootCount
   * @description get count of all root records
   * 
   * @returns {Promise} resolves to {Number}
   */
  rootCount() {
    return es.count({
      index: config.elasticsearch.record.alias,
      body : {
        query : {
          bool : {
            filter : {
              term : {
                isRootRecord : true
              }
            }
          }
        }
      }
    });
  }

}

module.exports = new RecordsModel();