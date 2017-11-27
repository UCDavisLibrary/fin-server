var request = require('superagent');
var elasticsearch = require('elasticsearch');
const {jwt, config, logger} = require('@ucd-lib/fin-node-utils');
var schema = require('./schema');
var clone = require('clone');
const utils = require('./utils');
const indexer = require('./indexer');
const Logger = logger('essync');
const {URL} = require('url');

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
    console.time('reindex');

    // make sure indexer has fresh token
    indexer.generateToken();

    let recordConfig = config.elasticsearch.record;
    let colConfig = config.elasticsearch.collection;

    Logger.info('Grabbing current indexes')
    var oldRecordIndexes = await this.getCurrentIndexes(recordConfig.alias);
    var oldCollectionIndexes = await this.getCurrentIndexes(colConfig.alias);
    Logger.info('Found indexes', oldRecordIndexes, oldCollectionIndexes);

    Logger.info('Creating new index');
    var newRecordIndexName = await this.createIndex(recordConfig.alias, recordConfig.schemaType);
    var newCollectionIndexName = await this.createIndex(colConfig.alias, colConfig.schemaType);
    Logger.info('New index created', newRecordIndexName, newCollectionIndexName);
    
    Logger.info('Crawling fedora and populating Index');
    await this.crawl(`${config.fcrepo.host}${config.fcrepo.root}`, newRecordIndexName, newCollectionIndexName);

    Logger.info('Updating aliases');
    await this.updateAliases(oldRecordIndexes, newRecordIndexName, recordConfig.alias);
    await this.updateAliases(oldCollectionIndexes, newCollectionIndexName, colConfig.alias);

    Logger.info('Removing old record indexes', oldRecordIndexes);
    await this.dropIndexes(oldRecordIndexes);
    Logger.info('Removing old collection indexes', oldCollectionIndexes);
    await this.dropIndexes(oldCollectionIndexes);

    console.timeEnd('reindex');
  }

  /**
   * @method crawl
   * @description crawl a specific url.  This is a recursive function that will insert
   * the url via the indexer (index.js EsSyncMessageServer) then if the jsonld has
   * a 'contains' attribute, child containers will be crawled recursively.
   * 
   * @param {String} url - url of fcrepo to crawl
   * @param {String} recordIndex - name of current index to insert records into
   * @param {String} collectionIndex - name of current index to insert collections into
   * @returns {Promise}
   */
  async crawl(url, recordIndex, collectionIndex) {
    let urlInfo = new URL(url);


    if( utils.isDotPath(url) ) {
      console.log('ignoring dot path:', url);
      return;
    }

    let body = await indexer.getContainer(url, false);
    if( !body ) return;
    
    await indexer.update(utils.cleanupData(clone(body)), recordIndex, collectionIndex);

    if( !body.contains ) return;

    // update children
    if( Array.isArray(body.contains) ) {
      for( var i = 0; i < body.contains.length; i++ ) {
        await this.crawl(body.contains[i], recordIndex, collectionIndex);
      }
    } else {
      await this.crawl(body.contains, recordIndex, collectionIndex);
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

  /**
   * @method createIndex
   * @description create new new index with a unique name based on alias name
   * 
   * @param {String} alias alias name to base index name off of
   * @param {String} schemaType schema name for objects in index
   * 
   * @returns {Promise} resolves to string, new index name
   */
  async createIndex(alias, schemaType) {
    var newIndexName = `${alias}-${Date.now()}`;

    try {
      await indexer.esClient.indices.create({
        index: newIndexName,
        body : {
          mappings : {
            [schemaType] : schema
          }
        }
      });
    } catch(e) {
      throw e;
    }

    return newIndexName;
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