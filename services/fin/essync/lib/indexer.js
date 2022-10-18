// const elasticsearch = require('elasticsearch');
const request = require('request');
const schemaRecord = require('../schemas/record');
const schemaCollection = require('../schemas/collection');
const schemaApplication = require('../schemas/application');
const {logger, jwt, waitUntil, esClient} = require('@ucd-lib/fin-service-utils');
const api = require('@ucd-lib/fin-api');
const {URL} = require('url');
const config = require('./config');
const postgres = require('./postgres.js');
// const AttributeReducer = require('./attribute-reducer');

// everything depends on indexer, so placing this here...
// process.on('unhandledRejection', err => logger.error(err));

const NULL_VALUE = '';
const COLLECTION = 'http://schema.org/Collection';
const CREATIVE_WORK = 'http://schema.org/CreativeWork';
const MEDIA_OBJECT = 'http://schema.org/MediaObject';
const SHORT_COLLECTION = 'schema:Collection';
const SHORT_CREATIVE_WORK = 'schema:CreativeWork';
const SHORT_MEDIA_OBJECT = 'schema:MediaObject';
const BINARY = 'http://fedora.info/definitions/v4/repository#Binary';
const SHORT_BINARY = 'fedora:Binary';
const TEXT_INDEXABLE = 'textIndexable';

const FIN_URL = new URL(config.server.url);
const HOST = FIN_URL.host;

class EsIndexer {
  
  constructor() {
    this.name = 'essync-indexer';
    // this.esClient = new elasticsearch.Client({
    //   host: config.elasticsearch.connStr,
    //   log: config.elasticsearch.log,
    //   requestTimeout : 3*60*1000
    // });
    this.esClient = esClient;

    // this.attributeReducer = new AttributeReducer(this.esClient);
    this.finUrlRegex = new RegExp(`^${config.server.url}${config.fcrepo.root}`);

    setInterval(() => this.generateToken(), 1000 * 60 * 60 * 6);
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
    await this.esClient.indices.putAlias({index: indexName, name: alias});
    
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

    // only index binary and collections
    if ( this.isCollection(jsonld['@type']) ) {
      logger.info(`ES Indexer updating collection container: ${id}`);

      let index = collectionIndex || config.elasticsearch.collection.alias;
      let response = await this.esClient.index({
        index,
        id,
        body: jsonld
      });

      return {index, id, response}
    }  
    
    if( this.isRecord(jsonld['@id'], jsonld['@type']) ) {
      logger.info(`ES Indexer updating record container: ${id}`);

      let index = recordIndex || config.elasticsearch.record.alias;

      // ensure the base recoder exists
      try {
        await this.esClient.index({
          index,
          op_type : 'create',
          id : jsonld._.esId,
          body: {id: jsonld._.esId, node: []}
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
          ctx._source.node.removeIf((Map item) -> { item['@id'] == params['@id'] });
          ctx._source.node.add(params);`,
          params : jsonld
        }
      });
      response['@id'] = jsonld['@id'];
      
      return {index, id, response};
    } 
    
    if ( this.isApplication(jsonld['@id']) ) {

      logger.info(`ES Indexer updating application container: ${id}`);

      let index = applicationIndex || config.elasticsearch.application.alias;
      let response = await this.esClient.index({
        index,
        id,
        body: jsonld
      });

      return {index, id, response};
    }
    
    logger.info(`ES Indexer ignoring container: ${id}`, jsonld['@type']);
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
    // check collection
    let exists = await this.esClient.exists({
      index : config.elasticsearch.collection.alias,
      id : path
    });

    if( exists ) {
      logger.info(`ES Indexer removing collection container: ${path}`);
      try {
        await this.esClient.delete({
          index : config.elasticsearch.collection.alias,
          id : path
        });
  
      } catch(e) {
        logger.error('Failed to remove collection container from elasticsearch: '+path, e);
      }
    }

    // check container
    let containerStatus = await postgres.getStatus(path);
    let containerRecordId = null, containerRecordPath = null;
    if( containerStatus && containerStatus.es_response ) {
      containerRecordId = containerStatus.es_response._id;
      containerRecordPath = containerStatus.es_response['@id'] || path;
    }

    if( containerRecordId && containerRecordId !== path ) {
      exists = await this.esClient.exists({
        index : config.elasticsearch.record.alias,
        id : containerRecordId
      });
      if( exists ) {
        logger.info(`ES Indexer removing record container: ${containerRecordId} => ${containerRecordPath}`);
        
        try {
          // start the timer for the attribute reducing
  
          await this.esClient.update({
            index : config.elasticsearch.record.alias,
            id : containerRecordId,
            script : {
              source : `ctx._source.node.removeIf((Map item) -> { item['@id'] == params['id'] });`,
              params : {id: containerRecordPath}
            }
          });
        } catch(e) {
          logger.error(`Failed to remove record container from elasticsearch: ${containerRecordId} => ${containerRecordPath}`, e);
        }
      }
    } else {
      exists = await this.esClient.exists({
        index : config.elasticsearch.record.alias,
        id : path
      });
      if( exists ) {
        logger.info(`ES Indexer removing record container: ${path}`);
        
        try {
          // start the timer for the attribute reducing
  
          await this.esClient.delete({
            index : config.elasticsearch.record.alias,
            id : path
          });
    
        } catch(e) {
          logger.error('Failed to remove record container from elasticsearch: '+path, e);
        }
      }
    }

    // check application
    exists = await this.esClient.exists({
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

  async removeCollection(collectionId) {
    logger.info(`Removing all records for collection: ${collectionId}`);

    try {
      let response = await this.esClient.deleteByQuery({
        index: config.elasticsearch.record.alias,
        body : {
          query: {
            term : { 
              collectionId : collectionId
            }
          }
        }
      });

      let exists = await this.esClient.exists({
        index : config.elasticsearch.collection.alias,
        id : collectionId
      });
      if( !exists ) return;

      await this.esClient.delete({
        index : config.elasticsearch.collection.alias,
        id : collectionId
      });
    } catch(e) {
      logger.error(`Failed to remove all records for collection: ${collectionId}`, e);
    }
  }

  /**
   * @method getTransformedContainer
   * @description get a es object for container at specified path. 
   * 
   * @param {String} path fcrepo url
   * @param {Array} types JSON-LD @type array 
   * 
   * @returns {Promise}
   */
  async getTransformedContainer(path='', types=[], jwt) {
    if( path.match(/fcr:metadata$/) ) {
      path = path.replace(/\/fcr:metadata$/, '');
    }

    let svc = '';
    if( this.isCollection(types) ) svc = config.essync.transformServices.collection;
    else if( this.isRecord(path, types) ) svc = config.essync.transformServices.record;
    else if( this.isApplication(path, types) ) svc = config.essync.transformServices.application;

    // we don't have a frame service for this
    // if( !svc ) return null;

    if( !svc ) {
      let resp = await this.getContainer(path, true);
      if( Array.isArray(resp) ) resp = resp[0];
      if( resp['@context'] ) delete resp['@context'];
      return resp;
    }

    return this._requestSvcContainer(path, svc);
  }

  /**
   * @method getContainer
   * @description get a es object for container at specified path. 
   * 
   * @param {String} path fcrepo url
   * 
   * @returns {Promise}
   */
  async getContainer(path='', compact=false) {
    if( path.match(/fcr:metadata$/) ) {
      path = path.replace(/\/fcr:metadata$/, '');
    }
 
    let response = await this._requestContainer(path, compact);
    if( !response ) return null;

    try {
      return JSON.parse(response.data.body);
    } catch(e) {
      logger.fatal('Failed to get container for: '+path, response.data.statusCode+' '+response.data.body,  e);
      return null;
    }
  }

  /**
   * @method _requestSvcContainer
   * @description request a container, if a non-200 status code that is not
   * a 403 is returned, will automatically try request again
   * 
   * @param {String} path fcrepo path
   * @param {String} svc fin service
   * @param {Boolean} retry leave as false, function will handle this param
   * 
   * @return {Promise} resolves to null or response object
   */
  async _requestSvcContainer(path, svc, retry=false) {
    var response = await api.get({
      host : config.gateway.host,
      path : path+`/svc:${svc}`
    });
    
    // if( response.statusCode === 403 ) {
    //   logger.error('Ignoring non-public container: '+path);
    //   return null;
    // }

    // if( response.statusCode !== 200 ) {
    //   logger.error('Non 200 status code for transform request '+path, response.statusCode, response.body);
    //   if( retry ) return null;
    //   logger.info('Retrying request for transform: '+path);
    //   return await this._requestSvcContainer(path, svc, true);
    // }

    return response;
  }

  /**
   * @method _requestContainer
   * @description request a container, if a non-200 status code that is not
   * a 403 is returned, will automatically try request again
   * 
   * @param {String} path fcrepo path
   * @param {String} types fcrepo path
   * 
   * @return {Promise} resolves to null or response object
   */
  async _requestContainer(path, types, compact=false) {
    // make a head request for access and container type info
    let response = await api.head({path});

    if( response.last.statusCode === 403 ) {
      logger.debug('Ignoring non-public container: '+path);
      return null;
    }

    // make a head request for access and container type info
    if( !response.checkStatus(200) ) {
      logger.debug('Non 200 status code for '+path, response.last.statusCode);
      return null;
    }

    // if this is binary container, append /fcr:metadata to path
    if( !api.isRdfContainer(response) ) {
      path = path + '/fcr:metadata'
    }

    response = await api.get({
      path,
      headers : {
        accept : 'application/ld+json'+(compact ? '; profile="http://www.w3.org/ns/json-ld#compacted"' : '')
      }
    })

    // response = await this.request({
    //   type : 'GET',
    //   uri : path,
    //   headers : {
    //     accept : 'application/ld+json'+(compact ? '; profile="http://www.w3.org/ns/json-ld#compacted"' : '')
    //   }
    // });
    
    if( response.data.statusCode === 403 ) {
      logger.debug('Ignoring non-public container: '+path);
      return response.data.statusCode;
    }

    if( response.data.statusCode !== 200 ) {
      logger.debug('Non 200 status code for container request '+path, response.statusCode, response.body);
      return response.data.statusCode;
    }

    return response;
  }

  /**
   * @method generateToken
   * @description create a new jwt token
   */
  generateToken() {
    logger.info('Setting essync jwt token');
    this.token = jwt.create(this.name, true);
  }

  /**
   * @method request
   * @description wrap request library in promise.  set authorization header with
   * jwt token and set uri to full path of fcrepo based on config.fcrepo params.
   */
  request(options) {
    if( !options.uri.match(/^http/i) ) {
      options.uri = this.getFcRepoBaseUrl() + options.uri;
    }
    options.timeout = 3*60*1000;

    if( !options.headers ) options.headers = {};
    if( !options.headers.Authorization ) {
      options.headers.Authorization = `Bearer ${this.token}`;
    }

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if( error ) reject(error);
        else resolve(response);
      });
    });
  }


  /** 
   * @method getFcRepoBaseUrl
   * @description get the base url for fcrepo
   *  
   * @returns {String}
   */
  getFcRepoBaseUrl() {
    return config.fcrepo.host + config.fcrepo.root;
  }

  /**
   * @method isBinary
   * @description given an array of types, is this a fedora binary container.
   * 
   * @param {Array} types array or type uri's
   * 
   * @returns {Boolean}
   */
  isBinary(types = []) {
    return (
      types.indexOf(BINARY) > -1 || 
      types.indexOf(SHORT_BINARY) > -1
    );
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
  isCollection(types = []) {
    return (
      types.indexOf(COLLECTION) > -1 || 
      types.indexOf(SHORT_COLLECTION) > -1
    );
  }

  /**
   * @method isRecord
   * @description given an array of types, is this a es record.
   * Currently that is any schema.org creative work or media object.
   * 
   * @param {Array} types array or type uri's
   * 
   * @returns {Boolean}
   */ 
  // isRecord(types = []) {
  //   return (
  //     types.indexOf(CREATIVE_WORK) > -1 || 
  //     types.indexOf(MEDIA_OBJECT) > -1 ||
  //     types.indexOf(SHORT_CREATIVE_WORK) > -1 || 
  //     types.indexOf(SHORT_MEDIA_OBJECT) > -1
  //   );
  // }
  isRecord(path, types=[]) {
    return path.match(/^\/collection\/.*\/.*/);
  }

  isApplication(path) {
    return path.match(/^\/application\//);
  }

  /**
   * @method shouldIndexRecord
   * @description we only index archival groups and binary containers
   * 
   * @param {Object} item 
   * 
   * @return {Boolean}
   */
  shouldIndexContainer(item) {

  }

  /**
   * @method isDotPath
   * @description given a path string, does any section of the path start
   * with a .
   * 
   * @param {String} path
   * 
   * @returns {Boolean}
   */
  isDotPath(path) {
    if( path.match(/http/) ) {
      let urlInfo = new URL(path);
      path = urlInfo.pathname;
    }
    
    path = path.split('/');
    for( var i = 0; i < path.length; i++ ) {
      if( path[i].match(/^\./) ) {
        return path[i];
      }
    }

    return null;
  }

}

module.exports = new EsIndexer();