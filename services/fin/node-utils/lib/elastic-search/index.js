const es = require('./client.js');
const config = require('../../config.js');
const finSearch = require('./fin-search.js');
const pg = require('../pg.js');
const logger = require('../logger.js');
const api = require('@ucd-lib/fin-api');
const utils = require('./utils.js');
const FinAC = require('../fin-ac/index.js');

const finac = new FinAC();

class ElasticSearchModel {

  constructor(modelName) {
    this.id = modelName;
    this.modelName = modelName;
    this.pathRegex = new RegExp('^/'+modelName+'/');

    this.readIndexAlias = this.modelName+'-read';
    this.writeIndexAlias = this.modelName+'-write';

    this.syncMethod = 'essync';

    this.pg = pg;
    this.client = es;
    this.pg.connect();
  }

  hasSyncMethod(method) {
    let methods = this.syncMethod;
    if( !Array.isArray(methods) ) {
      methods = [methods];
    }
    return methods.includes(method);
  }

  /**
   * @method is
   * @description Given a fin container id (path without /fcrepo/rest), and possibly
   * a list of types, return if this model is for this container or not 
   * 
   * @param {String} id fin path 
   * @param {Array} types array of rdf types.  NOTE!  this may be empty when types exist!
   * If you need types and this is param is empty, request types from fcrepo via HTTP HEAD.
   */
  is(id, types) {
    throw new Error('is(id, types) has not been implemented for model: '+this.modelName);
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
      }, 
      {_source_excludes},
      index
    );

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
        let response = await this.pg.query('select * from essync.update_status where path = $1', [id]);
        if( response.rows.length ) result.essync[id] = response.rows[0];

        response = await this.pg.query('select * from essync.update_status where path = $1', [id+'/fcr:metadata']);
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

  async update(jsonld, index) {
    if( !index ) index = this.writeIndexAlias;
    let roles = await this.getEsRoles(jsonld);

    // ensure the base recoder exists
    try {
      await this.client.index({
        index,
        op_type : 'create',
        id : jsonld._.esId,
        body: {id: jsonld._.esId, node: [], roles: []}
      });
    } catch(e) {}

    // for debug in the kinban -> menu -> management -> dev tools
    // console.log(JSON.stringify({
    //   index,
    //   id : jsonld._.esId,
    //   script : {
    //     source : `
    //     ctx._source.nodes.removeIf((Map item) -> { item['@id'] == params['@id'] });
    //     ctx._source.nodes.add(params);
    //     `,
    //     params : jsonld
    //   }
    // }, '  ', '  '));

    let response = await this.client.update({
      index,
      id : jsonld._.esId,
      script : {
        source : `
        ctx._source.node.removeIf((Map item) -> { item['@id'] == params.node['@id'] });
        ctx._source.node.add(params.node);
        ctx._source.roles = params.roles;`,
        params : {node:jsonld, roles}
      }
    });
    response['@id'] = jsonld['@id'];

    return {index, id: jsonld['@id'], response};
  }

  async remove(id, index) {
    if( !index ) index = this.writeIndexAlias;

    // find container
    let body = {
      from: 0,
      size: 100,
      query: {
        bool : {
          filter : [
            {term: {'node.@id': id}}
          ]
        }
      }
    };

    let response = await this.client.search({
      index,
      body
    });

    let hits = [];
    if( response.hits && response.hits.hits ) {
      hits = response.hits.hits;
    }

    if( !hits.length ) return;

    for( let doc of hits ) {
      logger.info(`ES Indexer removing ${this.moduleName} container: ${id} from ${doc._id}`);
        
      await this.client.update({
        index,
        id : doc._id,
        script : {
          source : `ctx._source.node.removeIf((Map item) -> { item['@id'] == params['id'] });`,
          params : {id}
        }
      });

      // now see if document is empty
      response = await this.client.get({
        index,
        id : doc._id
      });
      
      // if the document is empty, remove
      if( response._source && response._source.node && response._source.node.length === 0 ) {
        logger.info(`ES Indexer removing ${this.moduleName} document: ${doc._id}.  No nodes left in graph`);
        await this.client.delete({
          index,
          id : doc._id
        });
      }
    }
  }

  async getEsRoles(jsonld) {
    let roles = [];
    let acl = await finac.getAccess(jsonld._.esId, false)
    if( acl.protected === true ) {
      acl.readAuthorizations.forEach(role => {
        if( !config.finac.agents[role] ) {
          roles.push(role);
          return;
        }

        // discover role is public metadata access
        if( role === config.finac.agents.discover ) {
          roles.push(config.finac.agents.public);
          return;
        }

        // protected is only accessible by agents with promoted role
        // as well as admins
        if( role === config.finac.agents.protected ) {
          roles.push(config.finac.agents.protected+'-'+jsonld._.esId);
          roles.push(config.finac.agents.admin);
          
          // add collection access roles
          if( jsonld.isPartOf ) {
            let isPartOf = jsonld.isPartOf;
            if( !Array.isArray(isPartOf) ) {
              isPartOf = [isPartOf];
            }

            isPartOf.forEach(item => {
              if( item['@id'] && item['@id'].match(/\/collection\//) ) {
                roles.push(config.finac.agents.protected+'-'+item['@id']);
              }
            });
          }
        }

      });
    } else { // not protected by finac
      roles.push(config.finac.agents.public);
    }

    return roles;
  }

  getDefaultIndexConfig(schema) {
    var newIndexName = `${this.modelName}-${Date.now()}`;

    return {
      index: newIndexName,
      body : {
        settings : {
          analysis : {
            analyzer: {
              autocomplete: { 
                tokenizer: 'autocomplete',
                filter: [
                  'lowercase'
                ]
              },
              autocomplete_search : {
                tokenizer: "lowercase"
              }
            },
            tokenizer: {
              autocomplete: {
                type: 'edge_ngram',
                min_gram: 1,
                max_gram: 20,
                token_chars: [
                  "letter",
                  "digit"
                ]
              }
            }
          }
        },
        mappings : schema
      }
    }
  }

}

module.exports = ElasticSearchModel;