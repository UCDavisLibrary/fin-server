const elasticsearch = require('elasticsearch');
const request = require('request');
const schemaRecord = require('../schemas/record');
const schemaCollection = require('../schemas/collection');
const {logger, jwt, waitUntil} = require('@ucd-lib/fin-node-utils');
const api = require('@ucd-lib/fin-node-api');
const {URL} = require('url');
const config = require('./config');
const AttributeReducer = require('./attribute-reducer');

// everything depends on indexer, so placing this here...
process.on('unhandledRejection', err => logger.error(err));

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
    this.esClient = new elasticsearch.Client({
      host: config.elasticsearch.connStr,
      log: config.elasticsearch.log,
      requestTimeout : 3*60*1000
    });

    this.attributeReducer = new AttributeReducer(this.esClient);
    this.finUrlRegex = new RegExp(`^${config.server.url}${config.fcrepo.root}`);

    setInterval(() => this.generateToken(), 1000 * 60 * 60 * 6);
    this.init();
  }

  /**
   * @method isConnected
   * @description make sure we are connected to elasticsearch
   */
  async isConnected() {
    await waitUntil(config.elasticsearch.host, config.elasticsearch.port);

    // sometimes we still aren't ready....
    try {
      await this.esClient.ping({requestTimeout: 5000});
    } catch(e) {
      await this.isConnected();
    }
  }

  /**
   * @method init
   * @description connect to elasticsearch and ensure collection indexes
   */
  async init() {
    await this.isConnected();

    logger.info('Connected to Elastic Search');

    let recordConfig = config.elasticsearch.record;
    let colConfig = config.elasticsearch.collection;

    await this.ensureIndex(recordConfig.alias, recordConfig.schemaType, schemaRecord);
    await this.ensureIndex(colConfig.alias, colConfig.schemaType, schemaCollection);
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
          mappings : {
            [schemaName] : schema
          }
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
  async update(jsonld, recordIndex, collectionIndex) {
    if( !jsonld ) return;

    // only index binary and collections
    if ( this.isCollection(jsonld['@type']) ) {
      logger.info(`ES Indexer updating collection container: ${jsonld['@id']}`);

      await this.esClient.index({
        index : collectionIndex || config.elasticsearch.collection.alias,
        type: config.elasticsearch.collection.schemaType,
        id : jsonld['@id'],
        body: jsonld
      });

    } else if( this.isRecord(jsonld['@id'], jsonld['@type']) ) {
      logger.info(`ES Indexer updating record container: ${jsonld['@id']}`);

      await this.esClient.index({
        index : recordIndex || config.elasticsearch.record.alias,
        type: config.elasticsearch.record.schemaType,
        id : jsonld['@id'],
        body: jsonld
      });

      // start the timer for the attribute reducing
      this.attributeReducer.onRecordUpdate({
        record: jsonld,
        alias : recordIndex || config.elasticsearch.record.alias
      });

    } else {
      logger.info(`ES Indexer ignoring container: ${jsonld['@id']}`, jsonld['@type']);
    }
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
      type: config.elasticsearch.collection.schemaType,
      id : path
    });
    if( exists ) {
      logger.info(`ES Indexer removing collection container: ${path}`);
      try {
        await this.esClient.delete({
          index : config.elasticsearch.collection.alias,
          type: config.elasticsearch.collection.schemaType,
          id : path
        });
  
        logger.info(`ES Indexer removed collection container: ${path}`);
      } catch(e) {
        logger.error('Failed to remove collection container from elasticsearch: '+path, e);
      }
    }

    // check container
    exists = await this.esClient.exists({
      index : config.elasticsearch.record.alias,
      type: config.elasticsearch.record.schemaType,
      id : path
    });
    if( exists ) {
      logger.info(`ES Indexer removing record container: ${path}`);
      
      try {
        // start the timer for the attribute reducing
        await this.attributeReducer.onRecordUpdate({record: path, alias: config.elasticsearch.record.alias});

        await this.esClient.delete({
          index : config.elasticsearch.record.alias,
          type: config.elasticsearch.record.schemaType,
          id : path
        });
  
        logger.info(`ES Indexer removed record container: ${path}`);
      } catch(e) {
        logger.error('Failed to remove record container from elasticsearch: '+path, e);
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
        type: config.elasticsearch.collection.schemaType,
        id : collectionId
      });
      if( !exists ) return;

      await this.esClient.delete({
        index : config.elasticsearch.collection.alias,
        type: config.elasticsearch.collection.schemaType,
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
  async getTransformedContainer(path='', types=[]) {
    if( path.match(/fcr:metadata$/) ) {
      path = path.replace(/\/fcr:metadata$/, '');
    }

    let svc = '';
    if( this.isCollection(types) ) svc = config.essync.transformServices.collection;
    else if( this.isRecord(path, types) ) svc = config.essync.transformServices.record;

    // we don't have a frame service for this
    if( !svc ) return null;

    let response = await this._requestSvcContainer(path, svc);
    if( !response ) return null;

    try {
      return JSON.parse(response.body);
    } catch(e) {
      logger.fatal('Failed to get transform for: '+path, response.statusCode+' '+response.body,  e);
      return null;
    }
  }

  /**
   * @method getContainer
   * @description get a es object for container at specified path. 
   * 
   * @param {String} path fcrepo url
   * 
   * @returns {Promise}
   */
  async getContainer(path='') {
    if( path.match(/fcr:metadata$/) ) {
      path = path.replace(/\/fcr:metadata$/, '');
    }

    let response = await this._requestContainer(path);
    if( !response ) return null;

    try {
      return JSON.parse(response.body);
    } catch(e) {
      logger.fatal('Failed to get container for: '+path, response.statusCode+' '+response.body,  e);
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
    var response = await this.request({
      type : 'GET',
      uri : path+`/svc:${svc}`
    });
    
    if( response.statusCode === 403 ) {
      logger.error('Ignoring non-public container: '+path);
      return null;
    }

    if( response.statusCode !== 200 ) {
      logger.error('Non 200 status code for transform request '+path, response.statusCode, response.body);
      if( retry ) return null;
      logger.info('Retrying request for transform: '+path);
      return await this._requestSvcContainer(path, svc, true);
    }

    return response;
  }

  /**
   * @method _requestContainer
   * @description request a container, if a non-200 status code that is not
   * a 403 is returned, will automatically try request again
   * 
   * @param {String} path fcrepo path
   * 
   * @return {Promise} resolves to null or response object
   */
  async _requestContainer(path) {
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

    response = await this.request({
      type : 'GET',
      uri : path,
      headers : {
        accept : 'application/ld+json'
      }
    });
    
    if( response.statusCode === 403 ) {
      logger.debug('Ignoring non-public container: '+path);
      return null;
    }

    if( response.statusCode !== 200 ) {
      logger.debug('Non 200 status code for container request '+path, response.statusCode, response.body);
      return null;
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
    return config.fin.host + config.fcrepo.root;
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