const utils = require('./utils');
const elasticsearch = require('elasticsearch');
const request = require('request');
const {config, logger, jwt} = require('@ucd-lib/fin-node-utils');
const Logger = logger('essync');

// everything depends on indexer, so placing this here...
process.on('unhandledRejection', err => Logger.error(err));

class EsIndexer {
  
  constructor() {
    this.esClient = new elasticsearch.Client({
      host: config.elasticsearch.host,
      log: config.elasticsearch.log
    });
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
    if( typeof jsonld === 'string') {
      jsonld = await this.getContainer(jsonld);
    }

    if( !jsonld ) return;
    if( !jsonld['@type'] ) return;

    jsonld = utils.cleanupData(jsonld);

    let id = jsonld['@id'];

    // only index binary and collections
    if( utils.isBinary(jsonld['@type']) ) {
      Logger.info(`ES Indexer updating binary container: ${id}`);

      return this.esClient.index({
        index : recordIndex || config.elasticsearch.record.alias,
        type: config.elasticsearch.record.schemaType,
        id : id,
        body: jsonld
      });
    } else if ( utils.isCollection(jsonld['@type']) ) {
      Logger.info(`ES Indexer updating collection container: ${id}`);

      return this.esClient.index({
        index : collectionIndex || config.elasticsearch.collection.alias,
        type: config.elasticsearch.collection.schemaType,
        id : id,
        body: jsonld
      });
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
  async remove(path) {
    // so we no longer have reference to item... 
    // going to just try record first, if that fails
    // then try collection

    // first try record collection
    try {
      await this.esClient.delete({
        index : config.elasticsearch.record.alias,
        type: config.elasticsearch.record.schemaType,
        id : config.server.url+config.fcrepo.root+path,
      });
      Logger.info(`ES Indexer removing binary container: ${id}`);
    } catch(e) {
      // otherwise, try collection
      try {
        await this.esClient.delete({
          index : config.elasticsearch.collection.alias,
          type: config.elasticsearch.collection.schemaType,
          id : config.server.url+config.fcrepo.root+path,
        });
        Logger.info(`ES Indexer removing collection container: ${id}`);
      } catch(e) {}
    }
  }

  /**
   * @method getCompactJson
   * @description fetch and cleanup a fcrepo path container as fedora compacted jsonld
   * 
   * @param {String} path fcrepo url
   * @param {Boolean} clean should the response json urls be cleaned up. defaults to true.
   * 
   * @returns {Promise} resolves to json data on success or null if failed
   */
  async getCompactJson(path) {
    var {response, body} = await this.request({
      type : 'GET',
      uri: path,
      headers : {
        Accept: 'application/ld+json; profile="http://www.w3.org/ns/json-ld#compacted"'
      }
    });

    try {
      body = JSON.parse(body);
      let context = body['@context'];

      if( body['@graph'] ) {
        body = body['@graph'];
      }
      if( Array.isArray(body) ) {
        for( var i = 0; i < body.length; i++ ) {
          if( body[i]['@id'].indexOf(path) > -1 ) {
            body = body[i];
            break;
          }
        }
        // not found
        if( Array.isArray(body) ) body = {};
      }
      body['@context'] = context;

      return body;
    } catch(e) {
      Logger.error('Invalid response from server', e);
    }

    return null;
  }

  /**
   * @method getContainer
   * @description get a fcrepo container at specified path. will check to see if this is a 
   * binary container and add /fcr:metadata if so
   * 
   * @param {String} path fcrepo url
   * @param {Boolean} clean should the response json urls be cleaned up. defaults to true.
   * 
   * @returns {Promise}
   */
  async getContainer(path) {
    let isBinary = await this.isBinaryContainer(path);
    if( isBinary ) path += '/fcr:metadata';
    return await this.getCompactJson(path);
  }

  /**
   * @method isBinaryContainer
   * @description given a fcrepo path, makes a head request and checks for 'content-disposition'
   * in response headers.  The existance of this header means the container is a binary container
   * 
   * @param {String} path - fcrepo url to call
   * @returns {Promise} resolves to boolean
   */
  async isBinaryContainer(path) {
    var {response, body} = await this.request({
      type : 'HEAD',
      uri : path
    });

    if( response.headers['content-disposition'] ) {
      return true;
    }
    return false;
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
    if( !this.token ) this.generateToken();

    if( !options.headers ) options.headers = {};
    options.headers.Authorization = `Bearer ${this.token}`;

    if( !options.uri.match(/^http/i) ) {
      options.uri = `${config.fcrepo.host}${config.fcrepo.root}${options.uri}`;
    }

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if( error ) reject(error);
        else resolve({response, body});
      });
    });
  }
}

module.exports = new EsIndexer();