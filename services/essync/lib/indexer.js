const elasticsearch = require('elasticsearch');
const request = require('request');
const schemaRecord = require('../schemas/record');
const schemaCollection = require('../schemas/collection');
const {logger, jwt} = require('@ucd-lib/fin-node-utils');
const fs = require('fs');
const {URL} = require('url');
const api = require('@ucd-lib/fin-node-api');
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
      host: config.elasticsearch.host,
      log: config.elasticsearch.log
    });

    this.attributeReducer = new AttributeReducer(this.esClient);
    this.finUrlRegex = new RegExp(`^${config.server.url}${config.fcrepo.root}`);

    this.init();
  }

  /**
   * @method isConnected
   * @description make sure we are connected to elasticsearch
   */
  isConnected() {
    return new Promise((resolve, reject) => {
      this._connect(0, resolve, reject);
    });
  }

  /**
   * @method _connect
   * @description actually try to connect to elasticsearch, throttle delay back
   * on failure.
   * 
   * @param {Number} count number of connection attempts
   * @param {Function} resolve resolve wrapper promise
   * @param {Function} reject reject wrapper promise
   */
  async _connect(count, resolve, reject) {
    if( count === 5 ) return reject('Unable to connect to Elastic Search');
    setTimeout(async () => {
      try {
        await this.esClient.ping({requestTimeout: 5000});
        resolve();
      } catch(e) {
        count++;
        this._connect(count, resolve, reject);
      }
      // grrrrr just waiting a bit for es to start
    }, 20000 + (1000 * count));
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
    if( this.isRecord(jsonld['@type']) ) {
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

    } else if ( this.isCollection(jsonld['@type']) ) {
      logger.info(`ES Indexer updating collection container: ${jsonld['@id']}`);

      await this.esClient.index({
        index : collectionIndex || config.elasticsearch.collection.alias,
        type: config.elasticsearch.collection.schemaType,
        id : jsonld['@id'],
        body: jsonld
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
  async remove(path='', types=[]) {
    if( this.isRecord(types) ) {
      let exists = await this.esClient.exists({
        index : config.elasticsearch.record.alias,
        type: config.elasticsearch.record.schemaType,
        id : path
      });
      if( !exists ) return;

      try {

        // start the timer for the attribute reducing
        this.attributeReducer.onRecordUpdate({record: path});

        await this.esClient.delete({
          index : config.elasticsearch.record.alias,
          type: config.elasticsearch.record.schemaType,
          id : path
        });
  
        logger.info(`ES Indexer removed record container: ${path}`);
      } catch(e) {
        logger.error('Failed to remove record container from elasticsearch: '+path, e);
      }
    } else if( this.isCollection(types) ) {
      let exists = await this.esClient.exists({
        index : config.elasticsearch.collection.alias,
        type: config.elasticsearch.collection.schemaType,
        id : path
      });
      if( !exists ) return;

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
    } else {
      logger.info('Unknown type of container to remove', types);
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
    if( this.isRecord(types) ) svc = config.essync.transformServices.record;
    else if( this.isCollection(types) ) svc = config.essync.transformServices.collection;

    // we don't have a frame service for this
    if( !svc ) return null;

    var response = await this.request({
      type : 'GET',
      uri : path+`/svc:${svc}`
    });
    
    if( response.statusCode === 403 ) {
      logger.error('Ignoring non-public container: '+path);
      return null;
    }

    if( response.statusCode !== 200 ) {
      logger.fatal('Non 200 status code for frame request '+path, response.statusCode, response.body);
      return null;
    }

    try {
      return JSON.parse(response.body);
    } catch(e) {
      logger.fatal('Failed to get frame for: '+path, response.statusCode+' '+response.body,  e);
      return null;
    }
  }

  /**
   * @method generateToken
   * @description create a new jwt token
   */
  generateToken() {
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
  isRecord(types = []) {
    return (
      types.indexOf(CREATIVE_WORK) > -1 || 
      types.indexOf(MEDIA_OBJECT) > -1 ||
      types.indexOf(SHORT_CREATIVE_WORK) > -1 || 
      types.indexOf(SHORT_MEDIA_OBJECT) > -1
    );
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