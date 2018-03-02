const request = require('superagent');
const elasticsearch = require('elasticsearch');
const {jwt, config, logger} = require('@ucd-lib/fin-node-utils');
const schemaRecord = require('./schemas/record');
const schemaCollection = require('./schemas/collection');
const clone = require('clone');
const indexer = require('./indexer');
const Logger = logger('essync');
const {URL} = require('url');
const api = require('@ucd-lib/fin-node-api');

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
    api.setConfig({jwt: indexer.token});

    let recordConfig = config.elasticsearch.record;
    let colConfig = config.elasticsearch.collection;

    Logger.info('Grabbing current indexes')
    var oldRecordIndexes = await this.getCurrentIndexes(recordConfig.alias);
    var oldCollectionIndexes = await this.getCurrentIndexes(colConfig.alias);
    Logger.info('Found indexes', oldRecordIndexes, oldCollectionIndexes);

    Logger.info('Creating new index');
    var newRecordIndexName = await indexer.createIndex(recordConfig.alias, recordConfig.schemaType, schemaRecord);
    var newCollectionIndexName = await indexer.createIndex(colConfig.alias, colConfig.schemaType, schemaCollection);
    Logger.info('New index created', newRecordIndexName, newCollectionIndexName);
    
    Logger.info('Crawling fedora and populating Index');
    await this.crawl(`${config.fcrepo.host}${config.fcrepo.root}/collection`, newRecordIndexName, newCollectionIndexName);

    Logger.info('Updating aliases');
    await this.updateAliases(oldRecordIndexes, newRecordIndexName, recordConfig.alias);
    await this.updateAliases(oldCollectionIndexes, newCollectionIndexName, colConfig.alias);

    Logger.info('Removing old record indexes', oldRecordIndexes);
    await this.dropIndexes(oldRecordIndexes);
    Logger.info('Removing old collection indexes', oldCollectionIndexes);
    await this.dropIndexes(oldCollectionIndexes);
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

    url = url.split(config.fcrepo.root)[1];

    let response = await api.head({path : url});
    
    if( !response.checkStatus(200) ) return;
    if( !api.isRdfContainer(response) ) {
      url = url + '/fcr:metadata'
    }

    response = await api.get({
      path: url,
      headers : {
        accept : api.RDF_FORMATS.JSON_LD
      }
    });
    response = response.last;

    let jsonld = JSON.parse(response.body)[0];
    let frame = await indexer.getJsonFrame(url, jsonld['@type']);

    if( frame ) {
      frame = await indexer.frameToEs(frame);
      await indexer.update(frame, recordIndex, collectionIndex);
    }

    let contains = jsonld['http://www.w3.org/ns/ldp#contains'];
    if( !contains ) return;

    if( !Array.isArray(contains) ) {
      contains = [contains];
    }

    // update children
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

// manually run reindexer
if( process.argv.indexOf('reindex') > -1 ) {
  reindexer.run()
    .then(() => Logger.info('done'))
    .catch((e) => console.error(e))
}

module.exports = reindexer;