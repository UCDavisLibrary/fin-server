const es = require('../client.js');
const config = require('../config');
const finSearch = require('./fin-search.js');
const PG = require('../lib/pg');
const api = require('@ucd-lib/fin-api');
const utils = require('./utils.js');

class ElasticSearchModel {

  constructor(modelName) {
    this.modelName = modelName;
    this.pathRegex = new RegExp('^/'+modelName+'/');
    this.readIndexAlias = this.modelName+'-read';

    this.pg = new PG();
    this.client = es;
    pg.connect();
  }

  /**
   * @description search the elasticsearch collections using the ucd dams
   * search document.
   * 
   * @param {Object} SearchDocument
   * @param {Boolean} options.debug will return searchDocument and esBody in result
   * 
   * @returns {Promise} resolves to search result
   */
  async search(searchDocument, options={debug:false}, index) {
    if( !index ) index = this.readIndexAlias;

    // set default sort
    if( !searchDocument.sort ) {
      searchDocument.sort = [
        '_score',
        { 'name.raw' : 'asc' }
      ]
    }

    let esBody = this.searchDocumentToEsBody(searchDocument);
    let esResult = await this.esSearch(esBody, index);
    let result = this.esResultToDamsResult(esResult);

    result.results = result.results.forEach(item => {
      if( options.compact ) utils.compactAllTypes(item);
      if( options.singleNode ) item.node = utils.singleNode(item.id, item.node);
    });
    
    if( options.debug ) {
      result.searchDocument = searchDocument;
      result.esBody = esBody;
      result.options = options;
    }

    return result;
  }

  /**
   * @method get
   * @description get a object by id
   * 
   * @param {String} id node.identifier or node.@id
   * 
   * @returns {Promise} resolves to elasticsearch result
   */
  async get(id, opts={}, index) {
    let _source_excludes = true;
    if( opts.admin ) _source_excludes = false;
    else if( opts.compact ) _source_excludes = 'compact';

    let result = await this.esSearch({
      from: 0,
      size: 1,
      query: {
        bool : {
          should : [
            {term : {'node.identifier.raw' : id.replace(this.pathRegex, '')}},
            {term: {'node.@id': id}}
          ]
        }
      }
    }, {
      _source_excludes
    });

    if( result.hits.total.value >= 1 ) {
      result = result.hits.hits[0]._source;

      if( opts.compact ) utils.compactAllTypes(result);
      if( opts.singleNode ) result.node = utils.singleNode(id, result.node);
    } else {
      return null;
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

    return result;
  }

  /**
   * @method all
   * @description get all from index.  this will batch results
   * 
   * @returns {Promise} resolves to array of collection objects
   */
  async all(callback, index) {
    if( !index ) index = this.readIndexAlias;

    let results = await this.esSearch({
      index,
      size : 1000,
      scroll: '30s',
    });
    // TODO: get scrollId from results

    await callback(finSearch.esResultToDamsResult(results));

    while( results = await this.esScroll(scrollResult) ) {
      await callback(finSearch.esResultToDamsResult(results));
    }
  }

  /**
   * @method esScroll
   * @description scroll a search request (retrieve the next set of results) after specifying the scroll parameter in a search() call.
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
   * @method esSearch
   * @description search the elasticsearch collections using
   * es search document
   * 
   * @param {Object} body elasticsearch search body
   * 
   * @returns {Promise} resolves to elasticsearch result
   */
  esSearch(body = {}, options={}, index) {
    if( !index ) index = this.readIndexAlias;

    options.index = index;
    options.body = body;

    if( options._source_excludes === false ) {
      delete options._source_excludes; 
    } else if( options._source_excludes === 'compact' ) {
      options._source_excludes = config.elasticsearch.fields.excludeCompact.join(',');
    } else {
      options._source_excludes = config.elasticsearch.fields.exclude.join(',');
    }

    return this.client.search(options);
  }

}

module.exports = ElasticSearchModel;