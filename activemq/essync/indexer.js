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
      jsonld = await this.getContainer(path);
    }

    if( !jsonld ) return;
    if( !jsonld['@type'] ) return;
  
    let id = jsonld['@id'];

    // only index binary and collections
    if( jsonld['@type'].indexOf('fedora:Binary') > -1  ) {
      Logger.info(`ES Indexer updating binary container: ${id}`);

      console.log(jsonld)

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
    let jsonld = await this.getContainer(path);
    
    if( !jsonld ) return;
    if( !jsonld['@types'] ) return;

    // only index binary and collections
    if( jsonld['@types'].indexOf('fedora:Binary') > -1  ) {
      Logger.info(`ES Indexer removing binary container: ${path}`);

      return this.esClient.delete({
        index : config.elasticsearch.record.alias,
        type: config.elasticsearch.record.schemaType,
        id : config.server.url+config.fcrepo.root+path,
      });
    } else if ( this.isCollection(jsonld['@types']) ) {
      Logger.info(`ES Indexer removing collection container: ${path}`);

      return this.esClient.delete({
        index : config.elasticsearch.collection.alias,
        type: config.elasticsearch.collection.schemaType,
        id : config.server.url+config.fcrepo.root+path,
      });
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
  async getCompactJson(path, clean = true) {
    var {response, body} = await this.request({
      type : 'GET',
      uri: path,
      headers : {
        Accept: 'application/ld+json; profile="http://www.w3.org/ns/json-ld#compacted"',
        Prefer: 'return=representation; include="http://fedora.info/definitions/v4/repository#InboundResources"'
      }
    });

    try {
      body = JSON.parse(body);
      if( body['@graph'] ) {
        body = body['@graph'];
      }
      if( Array.isArray(body) ) {
        body = body[0];
      }

      // remove rdf context, fix urls
      if( clean ) utils.cleanupData(body);

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
  async getContainer(path, clean) {
    let isBinary = await this.isBinaryContainer(path);
    if( isBinary ) path += '/fcr:metadata';
    return await this.getCompactJson(path, clean);
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