const schemaRecord = require('../schemas/record');
const schemaCollection = require('../schemas/collection');
const schemaApplication = require('../schemas/application');
const api = require('@ucd-lib/fin-api');
const {logger, waitUntil, esClient, FinAC, jwt} = require('@ucd-lib/fin-service-utils');
const config = require('./config');
const finac = new FinAC();

const AUTHORIZATION_TYPE = 'http://www.w3.org/ns/auth/acl#Authorization';
const AGENT = 'http://www.w3.org/ns/auth/acl#agent';
const MODE = 'http://www.w3.org/ns/auth/acl#mode';
const ACCESS_TO = 'http://www.w3.org/ns/auth/acl#accessTo';

class ElasticSearchModel {
  
  constructor() {
    this.esClient = esClient;
  }

  /**
   * @method isConnected
   * @description make sure we are connected to elasticsearch
   */
  async isConnected() {
    await waitUntil(config.elasticsearch.host, config.elasticsearch.port);

    await this.esClient.cluster.health();
    await this.init();
  }

  /**
   * @method init
   * @description connect to elasticsearch and ensure collection indexes
   */
  async init() {
    logger.info('Connected to Elastic Search. Verifing indexes.');

    let recordConfig = config.elasticsearch.record;
    let colConfig = config.elasticsearch.collection;
    let appConfig = config.elasticsearch.application;

    await this.ensureIndex(recordConfig.alias, recordConfig.schemaType, schemaRecord);
    await this.ensureIndex(colConfig.alias, colConfig.schemaType, schemaCollection);
    await this.ensureIndex(appConfig.alias, appConfig.schemaType, schemaApplication);

    logger.info('Elastic Search ready.');
  }

  /**
   * @method ensureIndex
   * @description make sure given index exists in elastic search
   * 
   * @param {String} alias 
   * @param {String} schemaName 
   * @param {Object} schema 
   * 
   * @returns {Promise}
   */
  async ensureIndex(alias, schemaName, schema) {
    let exits = await this.esClient.indices.existsAlias({name: alias});
    if( exits ) return;

    logger.info(`No alias exists: ${alias}, creating...`);

    let indexName = await this.createIndex(alias, schemaName, schema);
    this.setIndex(indexName, alias)
    
    logger.info(`Index ${indexName} created pointing at alias ${alias}`);
  }

  /**
   * @method createIndex
   * @description create new new index with a unique name based on alias name
   * 
   * @param {String} alias alias name to base index name off of
   * @param {String} schemaName schema name for objects in index
   * 
   * @returns {Promise} resolves to string, new index name
   */
  async createIndex(alias, schemaName, schema) {
    var newIndexName = `${alias}-${Date.now()}`;

    try {
      await this.esClient.indices.create({
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
          // mappings : {
          //   [schemaName] : schema
          // }
          mappings : schema
        }
      });
    } catch(e) {
      throw e;
    }

    return newIndexName;
  }

  /**
   * @method update
   * @description insert or update record
   * 
   * @param {String|Object} jsonld either jsonld container or path to container in fcrepo
   * @param {String} recordIndex optional record index to insert into, otherwise alias is used
   * @param {String} collectionIndex optional collection index to insert into, otherwise alias is used
   * 
   * @returns {Promise}
   */
  async update(id, jsonld, recordIndex, collectionIndex, applicationIndex) {
    if( !jsonld ) throw new Error('jsonld is null');

    if( !jsonld._ ) jsonld._ = {};
    jsonld._.updated = new Date();

    let roles = await this.getEsRoles(jsonld);

    // only index binary and collections
    if ( this.isCollection(jsonld['@id']) ) {
      logger.info(`ES Indexer updating collection container: ${id}`);

      // let index = collectionIndex || config.elasticsearch.collection.alias;
      // let response = await this.esClient.index({
      //   index,
      //   id,
      //   body: jsonld
      // });
    
      let index = collectionIndex || config.elasticsearch.collection.alias;

      // ensure the base recoder exists
      try {
        await this.esClient.index({
          index,
          op_type : 'create',
          id : jsonld._.esId,
          body: {id: jsonld._.esId, node: [], roles: []}
        });
      } catch(e) {}

      let response = await this.esClient.update({
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
      
      return {index, id, response}

    } else if ( this.isApplication(jsonld['@id']) ) {

      logger.info(`ES Indexer updating application container: ${id}`);

      let index = applicationIndex || config.elasticsearch.application.alias;
      let response = await this.esClient.index({
        index,
        id,
        body: jsonld
      });

      return {index, id, response};
    
    } else {
      logger.info(`ES Indexer updating record container: ${id}`);

      let index = recordIndex || config.elasticsearch.record.alias;

      // ensure the base recoder exists
      try {
        await this.esClient.index({
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

      let response = await this.esClient.update({
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
      
      return {index, id, response};
    } 
    
    // logger.info(`ES Indexer ignoring container: ${id}`, jsonld['@type']);
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

  /**
   * @method remove
   * @description remove record
   * 
   * @param {String} path fcrepo path
   * 
   * @returns {Promise}
   */
  async remove(path='') {
    let type = path.replace(/^\//, '').split('/')[0];

    if( type === 'collection' || type === 'item' ) {
      if( type === 'item' ) type = 'record';
      await this._remove(path, type);
      return;
    }

    // check application
    let exists = await this.esClient.exists({
      index : config.elasticsearch.application.alias,
      id : path
    });
    if( exists ) {
      logger.info(`ES Indexer removing application container: ${path}`);
      
      try {
        await this.esClient.delete({
          index : config.elasticsearch.application.alias,
          id : path
        });

      } catch(e) {
        logger.error('Failed to remove application container from elasticsearch: '+path, e);
      }
    }
  }

  async _remove(path, type) {
    // find container
    let body = {
      from: 0,
      size: 100,
      query: {
        bool : {
          filter : [
            {term: {'node.@id': path}}
          ]
        }
      }
    };

    let response = await this.esClient.search({
      index : config.elasticsearch[type].alias,
      body
    });

    let hits = [];
    if( response.hits && response.hits.hits ) {
      hits = response.hits.hits;
    }

    if( !hits.length ) return;

    for( let doc of hits ) {
      logger.info(`ES Indexer removing ${type} container: ${path} from ${doc._id}`);
        
      try {  
        await this.esClient.update({
          index : config.elasticsearch[type].alias,
          id : doc._id,
          script : {
            source : `ctx._source.node.removeIf((Map item) -> { item['@id'] == params['id'] });`,
            params : {id: path}
          }
        });

        // now see if document is empty
        response = await this.esClient.get({
          index : config.elasticsearch[type].alias,
          id : doc._id
        });
        
        // if the document is empty, remove
        if( response._source && response._source.node && response._source.node.length === 0 ) {
          logger.info(`ES Indexer removing ${type} document: ${doc._id}.  No nodes left in graph`);
          await this.esClient.delete({
            index : config.elasticsearch[type].alias,
            id : doc._id
          });
        }

      } catch(e) {
        logger.error(`Failed to remove ${type} container from elasticsearch: ${path} from ${doc._id}`, e);
      }
    }


  }

  /**
   * @method isCollection
   * @description given an array of types, is this a es collection.
   * Currently that is any schema.org collection.
   * 
   * @param {Array} types array or type uri's
   * 
   * @returns {Boolean}
   */
  isCollection(path) {
    return path.match(/^\/collection\//);
  }

  /**
   * @method isRecord
   * @description given an array of types, is this a es record.
   * Currently that is any schema.org creative work or media object.
   * 
   * @param {String} path array or type uri's
   * 
   * @returns {Boolean}
   */ 
  isRecord(path) {
    return path.match(/^\/item\//);
  }

  isApplication(path) {
    return path.match(/^\/application\//);
  }

  /**
   * @method getCurrentIndexes
   * @description given a index alias name, find all real indexes that use this name.
   * This is done by querying for all indexes that regex for the alias name.  The indexers
   * index name creation always uses the alias name in the index.
   * 
   * @param {String} alias name of alias to find real indexes for
   * @return {Promise} resolves to array of index names
   */
  async getCurrentIndexes(alias) {
    var re = new RegExp('^'+alias);
    var results = [];

    try {
      var resp = await indexer.esClient.cat.indices({v: true, format: 'json'});
      resp.forEach((i) => {
        if( i.index.match(re) ) {
          results.push(i.index);
        }
      })
    } catch(e) {
      throw e;
    }

    return results;
  }

  setIndex(indexName, alias) {
    return this.esClient.indices.putAlias({index: indexName, name: alias});
  }
 
}

module.exports = new ElasticSearchModel();