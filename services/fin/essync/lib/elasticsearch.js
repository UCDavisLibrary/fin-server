const {logger, waitUntil, esClient, models, config} = require('@ucd-lib/fin-service-utils');

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

    let names = await models.names();
    for( let name of names ) {
      let {schema} = await models.get(name);
      if( !schema ) continue;

      logger.info('Ensuring model schema '+name);
      await this.ensureIndex(name);
    }

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
  async ensureIndex(name) {
    let readAlias = name+'-read';
    let writeAlias = name+'-write';

    let exits = await this.esClient.indices.existsAlias({name: readAlias});
    if( exits ) return;

    logger.info(`No alias exists for ${name}, creating...`);

    let indexName = await this.createIndex(name);
    this.setAlias(indexName, readAlias);
    this.setAlias(indexName, writeAlias);
    
    logger.info(`Index ${indexName} created pointing with aliases ${readAlias} and ${writeAlias}`);
  }

  /**
   * @method createIndex
   * @description create new new index with a unique name based on alias name
   * 
   * @param {String} name model name to base index name off of
   * 
   * @returns {Promise} resolves to string, new index name
   */
  async createIndex(name) {
    let {model, schema} = await models.get(name);
    
    let indexDef = model.getDefaultIndexConfig(schema);
    await this.esClient.indices.create(indexDef);

    return indexDef.index;
  }

  /**
   * @method update
   * @description insert or update record
   * 
   * @param {Object} jsonld either jsonld container or path to container in fcrepo
   * @param {String} index
   * 
   * @returns {Promise}
   */
  async update(jsonld, index) {
    if( !jsonld ) throw new Error('jsonld is null');

    if( !jsonld._ ) jsonld._ = {};
    jsonld._.updated = new Date();

    let names = await models.names();
    for( let name of names ) {
      let {model} = await models.get(name);
      if( !await model.is(jsonld['@id'], jsonld['@type']) ) continue;

      logger.info(`ES Indexer updating ${name} container: ${jsonld['@id']} in es index: ${index|| model.readIndexAlias}`);
      return model.update(jsonld, index);
    }

    logger.warn(`ES Indexer note updating ${jsonld['@id']}, no model found`);
  }

  /**
   * @method remove
   * @description remove record
   * 
   * @param {String} path fcrepo path
   * 
   * @returns {Promise}
   */
  async remove(path='', index) {
    let names = await models.names();
    for( let name of names ) {
      let {model} = await models.get(name);
      if( !await model.is(path) ) continue;

      logger.info(`ES Indexer remove ${name} container: ${id} from es index: ${index || model.writeIndexAlias}`);
      return model.remove(path, index);
    }

    logger.warn(`ES Indexer note updating ${jsonld['@id']}, no model found`);
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

  setAlias(indexName, alias) {
    return this.esClient.indices.putAlias({index: indexName, name: alias});
  }
 
}

module.exports = new ElasticSearchModel();