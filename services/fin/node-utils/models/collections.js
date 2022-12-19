const es = require('../lib/esClient');
const config = require('../config');
const ElasticSearchModel = require('./elasticsearch');
const PG = require('../lib/pg');
const api = require('@ucd-lib/fin-api');
const utils = require('./utils.js');

const pg = new PG();
pg.connect();

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

    // set default sort
    if( !searchDocument.sort ) {
      searchDocument.sort = [
        '_score',
        { 'node.name.raw' : 'asc' }
      ]
    }

    let esBody = this.searchDocumentToEsBody(searchDocument);
    let esResult = await this.esSearch(esBody);
    let result = this.esResultToDamsResult(esResult);
    
    result.results.forEach(item => {
      if( options.compact ) utils.compactAllTypes(item);
      if( options.singleNode ) item.node = utils.singleNode(item.id, item.node);
    });
    
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
  esSearch(body = {}, options={}) {
    options.index = config.elasticsearch.collection.alias;
    options.body = body;

    if( options._source_excludes === false ) {
      delete options._source_excludes; 
    } else if( options._source_excludes === 'compact' ) {
      options._source_excludes = config.elasticsearch.fields.excludeCompact.join(',');
    } else {
      options._source_excludes = config.elasticsearch.fields.exclude.join(',');
    }

    return es.search(options);
  }

  /**
   * @method get
   * @description get a collection by id
   * 
   * @param {String} id collection id 
   * 
   * @returns {Promise} resolves to elasticsearch result
   */
  async get(id, opts={}) {
    if( typeof opts !== 'object' ) {
      opts = {seo: opts};
    }

    let _source_excludes = true;
    if( opts.admin ) _source_excludes = false;
    else if( opts.compact ) _source_excludes = 'compact';

    let result = await this.esSearch({
      from: 0,
      size: 1,
      query: {
        bool : {
          should : [
            {term : {'node.identifier.raw' : id.replace(/^\/collection\//, '')}},
            {term: {'node.@id': id}}
          ]
        }
      }
    }, {
      _source_excludes
    });

    if( result.hits.total.value === 1 ) {
      result = result.hits.hits[0]._source;
      if( opts.compact ) utils.compactAllTypes(result);
      if( opts.singleNode ) result.node = utils.singleNode(id, result.node);
    } else {
      result = {};
    }

    if( opts.admin === true ) {
      try {
        let response = await api.metadata({
          path : id,
          host : config.gateway.host
        });
        if( response.data.statusCode === 200 ) {
          result.fcrepo = JSON.parse(response.data.body);
        } else {
          result.fcrepo = {
            error: true,
            body : response.data.body,
            statusCode : response.data.statusCode
          }
        }
      } catch(e) {
        result.fcrepo = {
          error: true,
          message : e.message,
          stack : e.stack
        }
      }
      
      try {
        result.essync = {};
        let response = await pg.query('select * from essync.update_status where path = $1', [id]);
        if( response.rows.length ) result.essync[id] = response.rows[0];

        response = await pg.query('select * from essync.update_status where path = $1', [id+'/fcr:metadata']);
        if( response.rows.length ) result.essync[id+'/fcr:metadata'] = response.rows[0];
      } catch(e) {
        result.essync = {
          message : e.message,
          stack : e.stack
        }
      }
    }

    // let graph = {[id]: result._source};

    // await this._fillGraphRecord(graph, result._source, seo);

    // graph = Object.values(graph);

    // if( seo ) {
    //   let record = graphConcat(id, graph)
    //   transform(record);
    //   return record;
    // }
    
    return result;
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