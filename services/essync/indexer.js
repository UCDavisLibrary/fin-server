const elasticsearch = require('elasticsearch');
const request = require('request');
const schemaRecord = require('./schemas/record');
const schemaCollection = require('./schemas/collection');
const {logger, jwt} = require('@ucd-lib/fin-node-utils');
const Logger = logger('essync');
const fs = require('fs');
const {URL} = require('url');
const api = require('@ucd-lib/fin-node-api');
const config = require('./config');

// everything depends on indexer, so placing this here...
process.on('unhandledRejection', err => Logger.error(err));

const COLLECTION = 'http://schema.org/Collection';
const CREATIVE_WORK = 'http://schema.org/CreativeWork';
const MEDIA_OBJECT = 'http://schema.org/MediaObject';
const SHORT_COLLECTION = 'schema:Collection';
const SHORT_CREATIVE_WORK = 'schema:CreativeWork';
const SHORT_MEDIA_OBJECT = 'schema:MediaObject';
const BINARY = 'http://fedora.info/definitions/v4/repository#Binary';
const SHORT_BINARY = 'fedora:Binary';

const HOST = new URL(config.server.url).host;

class EsIndexer {
  
  constructor() {
    this.name = 'essync-indexer';
    this.esClient = new elasticsearch.Client({
      host: config.elasticsearch.host,
      log: config.elasticsearch.log
    });

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

    Logger.info('Connected to Elastic Search');

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

    Logger.info(`No alias exists: ${alias}, creating...`);

    let indexName = await this.createIndex(alias, schemaName, schema);
    await this.esClient.indices.putAlias({index: indexName, name: alias});
    
    Logger.info(`Index ${indexName} created pointing at alias ${alias}`);
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
    // only index binary and collections
    if( this.isRecord(jsonld['@type']) ) {
      Logger.info(`ES Indexer updating record container: ${jsonld.localId}`);

      await this.esClient.index({
        index : recordIndex || config.elasticsearch.record.alias,
        type: config.elasticsearch.record.schemaType,
        id : jsonld.localId,
        body: jsonld
      });

    } else if ( this.isCollection(jsonld['@type']) ) {
      Logger.info(`ES Indexer updating collection container: ${jsonld.localId}`);

      await this.esClient.index({
        index : collectionIndex || config.elasticsearch.collection.alias,
        type: config.elasticsearch.collection.schemaType,
        id : jsonld.localId,
        body: jsonld
      });
    } else {
      Logger.info(`ES Indexer ignoring container: ${jsonld.localId}`, jsonld['@type']);
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
  async remove(path, types) {
    if( this.isRecord(types) ) {
      let exists = await this.esClient.exists({
        index : config.elasticsearch.record.alias,
        type: config.elasticsearch.record.schemaType,
        id : path
      });
      if( !exists ) return;

      try {
        await this.esClient.delete({
          index : config.elasticsearch.record.alias,
          type: config.elasticsearch.record.schemaType,
          id : path
        });
  
        Logger.info(`ES Indexer removed record container: ${path}`);
      } catch(e) {
        Logger.error('Failed to remove record container from elasticsearch: '+path, e);
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
  
        Logger.info(`ES Indexer removed collection container: ${path}`);
      } catch(e) {
        Logger.error('Failed to remove collection container from elasticsearch: '+path, e);
      }
    } else {
      Logger.info('Unknown type of container to remove', types);
    }
  }

  async removeCollection(collectionLocalId) {
    Logger.info(`Removing all records for collection: ${collectionLocalId}`);

    try {
      let response = await this.esClient.deleteByQuery({
        index: config.elasticsearch.record.alias,
        body : {
          query: {
            term : { 
              collectionLocalId : collectionLocalId
            }
          }
        }
      });

      let exists = await this.esClient.exists({
        index : config.elasticsearch.collection.alias,
        type: config.elasticsearch.collection.schemaType,
        id : collectionLocalId
      });
      if( !exists ) return;

      await this.esClient.delete({
        index : config.elasticsearch.collection.alias,
        type: config.elasticsearch.collection.schemaType,
        id : collectionLocalId
      });
    } catch(e) {
      Logger.error(`Failed to remove all records for collection: ${collectionLocalId}`, e);
    }
  }

  /**
   * @method getJsonFrame
   * @description get a fcrepo container frame at specified path. 
   * 
   * @param {String} path fcrepo url
   * @param {Array} types JSON-LD @type array 
   * 
   * @returns {Promise}
   */
  async getJsonFrame(path, types) {
    if( path.match(/fcr:metadata$/) ) {
      path = path.replace(/\/fcr:metadata$/, '');
    }

    let svc = '';
    if( this.isRecord(types) ) svc = config.essync.frameServices.record;
    else if( this.isCollection(types) ) svc = config.essync.frameServices.collection;

    // we don't have a frame service for this
    if( !svc ) return null;

    var response = await this.request({
      type : 'GET',
      uri : path+`/svc:${svc}`
    });
    if( response.statusCode === 403 ) {
      Logger.error('Ignoring non-public container: '+path);
      return null;
    }

    try {
      return JSON.parse(response.body);
    } catch(e) {
      Logger.error('Failed to get frame for: '+path, response.statusCode+' '+response.body,  e);
      return null;
    }
  }

  /**
   * @method frameToEs
   * @description given a JSON-LD frame, extract the record or collection,
   * set the local identifiers, set the base64 encoded thumbnail (if image), set
   * the image resolution (if image)
   * 
   * @param {Object} frame
   * 
   * @returns {Promise} 
   */
  async frameToEs(frame) {
    frame = this.getRecordOrCollectionFrame(frame);
    this.setLocalIds(frame);
    await this.setThumbnail(frame);
    await this.setImageResolution(frame);

    if( this.isRecord(frame['@type']) ) {
      frame.collectionLocalId = frame.localId.split('/').splice(0, 3).join('/');
    }

    return frame;
  }

  /**
   * @method setThumbnail
   * @description given a JSON-LD frame, set the thumbnail.  If there is an exampleOfWork,
   * this property will be used otherwise the id of the frame.  The uri will be hit against
   * the iiif service.
   * 
   * @param {Object} json
   * 
   * @returns {Object}
   */
  async setThumbnail(json) {
    if( !json.exampleOfWork ) {
      if( !json.mimeType ) return;
      if( !json.mimeType.match(/image/i) ) return;
    }

    let imgUrl = json.exampleOfWork ? json.exampleOfWork : json['@id'];
    imgUrl = imgUrl.replace(this.getFrameBaseUrl(), 'http://server:3001'+config.fcrepo.root)+'/svc:iiif/full/8,/0/default.png';

    let result = await this.request({
      type : 'GET',
      encoding : null,
      uri: imgUrl
    });

    json.thumbnailUrl = 'data:image/png;base64,'+new Buffer(result.body).toString('base64');
    return json;
  }

  /**
   * @method setImageResolution
   * @description given a JSON-LD frame, set the image resolution.  If there is an exampleOfWork,
   * this property will be used otherwise the id of the frame.  The uri will be hit against
   * the iiif service for resolution information.
   * 
   * @param {Object} json
   * 
   * @returns {Object}
   */
  async setImageResolution(json) {
    if( !json.exampleOfWork ) {
      if( !json.mimeType ) return;
      if( !json.mimeType.match(/image/i) ) return;
    }

    let imgUrl = json.exampleOfWork ? json.exampleOfWork : json['@id'];
    imgUrl = imgUrl.replace(this.getFrameBaseUrl(), 'http://server:3001'+config.fcrepo.root)+'/svc:iiif/info.json';
    
    var result = await this.request({
      type : 'GET',
      uri: imgUrl
    });
    result = JSON.parse(result.body);

    json.width = result.width;
    json.height = result.height;

    return json;
  }

  /**
   * @method setLocalIds
   * @description set shortend local identifiers for object.  These ids strip off the 
   * jsonld data
   * 
   * @param {Object} json
   * 
   * @return {Object}
   */
  setLocalIds(json) {
    config.essync.localIds.forEach(id => {
      if( json[id] === undefined ) return;
      let localId = (id === '@id') ? 'localId' : id+'LocalId';

      if( Array.isArray(json[id]) ) {
        json[localId] = json[id].map(id => id.replace(this.getFrameBaseUrl(), '')); 
      } else {
        json[localId] = json[id].replace(this.getFrameBaseUrl(), ''); 
      }
    });

    return json;
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
    // if( !this.token ) this.generateToken();

    if( !options.headers ) options.headers = {};
    // options.headers.Authorization = `Bearer ${this.token}`;

    if( !options.uri.match(/^http/i) ) {
      options.uri = this.getBaseUrl() + options.uri;
    }

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if( error ) reject(error);
        else resolve(response);
      });
    });
  }

  /**
   * @method getRecordOrCollectionFrame
   * @description given a frame response, first grab the graph.  Then 
   * look through the graph and return the first record or collection
   * object you find
   * 
   * @param {Object} frame a response from a frame service
   * 
   * @returns {Object} 
   */
  getRecordOrCollectionFrame(frame) {
    if( frame['@graph'] ) frame = frame['@graph'];
    if( Array.isArray(frame) ) {
      return frame.find(item => {
        if( this.isCollection(item['@type']) ||
            this.isRecord(item['@type']) ) {
          return true;
        }
      });
    }
    return frame;
  }

  /** 
   * @method getBaseUrl
   * @description get the base url for fin
   *  
   * @returns {String}
   */
  getBaseUrl() {
    if( config.server.url.match(/localhost/) ) {
      return 'http://server:3001' + config.fcrepo.root;
    }
    return config.server.url + config.fcrepo.root;
  }

  /**
   * @method getFrameBaseUrl
   * @description this should be used to make localIds from frame 
   * responses.  If you are running on localhost in dev mode, the frame
   * uri's will be http://fcrepo:8080, otherwise they should be the 
   * fin host
   * 
   * @return {String}
   */
  getFrameBaseUrl() {
    if( config.server.url.match(/localhost/) ) {
      return 'http://fcrepo:8080' + config.fcrepo.root;
    }
    return config.server.url + config.fcrepo.root;
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