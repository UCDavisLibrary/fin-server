const request = require('superagent');
const elasticsearch = require('elasticsearch');
const {jwt, logger} = require('@ucd-lib/fin-node-utils');
const schemaRecord = require('./schemas/record');
const schemaCollection = require('./schemas/collection');
const clone = require('clone');
const indexer = require('./indexer');
const Logger = logger('essync');
const {URL} = require('url');
const api = require('@ucd-lib/fin-node-api');
const config = require('./config');

api.setConfig({
  host : 'http://server:3001',
  fcBasePath: config.fcrepo.root
});

class EsReindexer {

  /**
   * @method run
   * @description main function.  Function will:
   * 
   *  - find all old indexes
   *  - create a new index names
   *  - crawl fedora inserting items into new indexes
   *  - update the main index aliases to the new indexes
   *  - delete all old indexes
   * 
   * @returns {Promise}
   */
  async run() {

    // make sure indexer has fresh token
    indexer.generateToken();

    let recordConfig = config.elasticsearch.record;
    let colConfig = config.elasticsearch.collection;

    // grab the current indexes being used for records and collections
    Logger.info('Grabbing current indexes')
    var oldRecordIndexes = await this.getCurrentIndexes(recordConfig.alias);
    var oldCollectionIndexes = await this.getCurrentIndexes(colConfig.alias);
    Logger.info('Found indexes', oldRecordIndexes, oldCollectionIndexes);

    // create new indexes to insert into during the crawl
    Logger.info('Creating new index');
    var newRecordIndexName = await indexer.createIndex(recordConfig.alias, recordConfig.schemaType, schemaRecord);
    var newCollectionIndexName = await indexer.createIndex(colConfig.alias, colConfig.schemaType, schemaCollection);
    Logger.info('New index created', newRecordIndexName, newCollectionIndexName);

    // now crawl collections
    Logger.info('Crawling fin collections and populating Index');
    // first thing, us a admin token to get all children of collection
    api.setConfig({jwt: indexer.token});
    let collections = await this.getRootCollections();

    // we want to crawl as a public user (no jwt)
    api.setConfig({jwt: null});
    // crawl all collections
    for( var i = 0; i < collections.length; i++ ) {
      await this.crawl(collections[i], newRecordIndexName, newCollectionIndexName);
    }

    // for any currently active index, remove the alias name.  Set the alias name to the new indexes
    Logger.info('Updating aliases');
    await this.updateAliases(oldRecordIndexes, newRecordIndexName, recordConfig.alias);
    await this.updateAliases(oldCollectionIndexes, newCollectionIndexName, colConfig.alias);

    // finally, drop all old indexes (the indexes that were active until the lines above)
    Logger.info('Removing old record indexes', oldRecordIndexes);
    await this.dropIndexes(oldRecordIndexes);
    Logger.info('Removing old collection indexes', oldCollectionIndexes);
    await this.dropIndexes(oldCollectionIndexes);
  }

  async getRootCollections() {
    let response = await api.get({
      path: config.essync.basePath,
      headers : {
        accept : api.RDF_FORMATS.JSON_LD
      }
    });
    response = response.last;
    let jsonld = JSON.parse(response.body)[0];

    let contains = jsonld['http://www.w3.org/ns/ldp#contains'];
    if( !contains ) return [];

    // just make sure this is an array...
    if( !Array.isArray(contains) ) {
      contains = [contains];
    }

    return contains.map(item => item['@id']);
  }

  /**
   * @method crawl
   * @description crawl a specific url.  This is a recursive function that will insert
   * the url via the indexer then if the jsonld has
   * a 'contains' attribute, child containers will be crawled recursively.
   * 
   * @param {String} url - url of fcrepo to crawl
   * @param {String} recordIndex - name of current index to insert records into
   * @param {String} collectionIndex - name of current index to insert collections into
   * @returns {Promise}
   */
  async crawl(url, recordIndex, collectionIndex) {
    if( indexer.isDotPath(url) ) return;

    // we just want the path, no host or fcBasePath
    url = url.split(config.fcrepo.root)[1];

    // make a head request for access and container type info
    let response = await api.head({path : url});
    
    // make a head request for access and container type info
    if( !response.checkStatus(200) ) return;

    // if this is binary container, append /fcr:metadata to path
    if( !api.isRdfContainer(response) ) {
      url = url + '/fcr:metadata'
    }

    // grab the current container as json-ld because we need full type 
    // information in order to know which frame service to access.  We
    // also need the contains information to continue the crawl
    response = await api.get({
      path: url,
      headers : {
        accept : api.RDF_FORMATS.JSON_LD
      }
    });
    response = response.last;
    let jsonld = JSON.parse(response.body)[0];

    // grab the frame for the container
    let frame = await indexer.getJsonFrame(url, jsonld['@type']);

    // the getJsonFrame returns null if not a valid container type, 
    // so we only update elasticsearch if a valid frame was returned
    if( frame ) {
      // munge the frame a bit (see method doc for more)
      frame = await indexer.frameToEs(frame);
      // insert into elastic search
      // here we pass the temporary aliases instead for the active index
      // we will make the temp aliases the active index once we finish the crawl
      await indexer.update(frame, recordIndex, collectionIndex);
    }

    // check if this container has children
    let contains = jsonld['http://www.w3.org/ns/ldp#contains'];
    if( !contains ) return; // no more children, done crawling this branch

    // just make sure this is an array...
    if( !Array.isArray(contains) ) {
      contains = [contains];
    }

    // recursively crawl the children
    for( var i = 0; i < contains.length; i++ ) {
      await this.crawl(contains[i]['@id'], recordIndex, collectionIndex);
    }
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

  /**
   * @method updateAliases
   * @description given a list of old index names and a new index name, remove
   * all alias references from the old indexes and add the new alias reference
   * 
   * @param {Array} oldIndexes list of old index names 
   * @param {String} newIndex new index name 
   * @param {String} alias alias that is references by old indexes and should be 
   * used by new reference
   * 
   * @returns {Promise} 
   */
  async updateAliases(oldIndexes, newIndex, alias) {
    if( typeof oldIndexes === 'string' ) {
      oldIndexes = [oldIndexes];
    }

    var actions = [];
    oldIndexes.forEach((i) => {
      actions.push({ remove: { index: i, alias } })
    });
    actions.push({ add: { index: newIndex, alias } })

    await indexer.esClient.indices.updateAliases({body: {actions}});
  }

  /**
   * @method dropIndexes
   * @description remove given indexes
   * 
   * @param {Array} oldIndexes old indexes to remove
   * @returns {Promise} 
   */
  async dropIndexes(oldIndexes) {
    if( typeof oldIndexes === 'string' ) {
      oldIndexes = [oldIndexes];
    }

    try {
      for( var i = 0; i < oldIndexes.length; i++) {
        await indexer.esClient.indices.delete({index: oldIndexes[i]});
      }
    } catch(e) {
      Logger.error(e);
    }
  }

}

const reindexer = new EsReindexer();

// manually run reindexer from command line
if( process.argv.indexOf('reindex') > -1 ) {
  reindexer.run()
    .then(() => Logger.info('done'))
    .catch((e) => console.error(e))
}

module.exports = reindexer;