const hdt = require('hdt');
const fs = require('fs-extra');
const path = require('path');
const {config, logger} = require('@ucd-lib/fin-service-utils');
const api = require('@ucd-lib/fin-api');

const HAS_GRAPH = 'http://digital.ucdavis.edu/schema#hasGraph';
const FILE_NAME = 'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#filename';
const CONTAINS  = 'http://www.w3.org/ns/ldp#contains';

class HdtWrapper {

  constructor() {
    this.updateBufferTime = 5000;
    this.updateBuffers = {};
  }

  async init() {
    // nuke cache directory on restart
    if( fs.existsSync(config.server.hdtCacheDir) ) {
      fs.removeSync(config.server.hdtCacheDir);
    }
    fs.mkdirpSync(config.server.hdtCacheDir);

    // grab all collections
    let response = await api.get({
      path : `/collection`,
      headers : {Accept : api.RDF_FORMATS.JSON_LD}
    });

    if( response.data !== 200 ) return;
    
    try {
      let body = JSON.parse(response.last.body);
      body = this._get('/collection', body);

      let contains = body[CONTAINS];
      for( let i = 0; i < contains.length; i++ ) {
        let collectionName = contains[i]['@id'].replace(/.*\/collection\//, '');
        await this._getHdtFiles(collectionName);
      }
    } catch(e) {
      console.log('Failed to init HDT library', e);
    }
  }

  async _getHdtFiles(collection) {
    logger.info('HDT lib updating file cache for: '+collection);

    // remove current files
    let dir = path.join(config.server.hdtCacheDir, collection);
    if( fs.existsSync(dir) ) {
      fs.removeSync(dir);
    }
    fs.mkdirpSync(dir);

    // grab current collection record
    let response = await api.get({
      path : `/collection/${collection}`,
      headers : {Accept : api.RDF_FORMATS.JSON_LD}
    });

    if( !api.isSuccess(response.last) ) {
      throw new Error('Unknown collection: '+collection);
    }

    let body = JSON.parse(response.last.body);
    body = this._get(`/collection/${collection}`, body);

    let item;
    for( var key in body ) {
      if( key !== HAS_GRAPH ) continue;
      for( let i = 0; i < body[key].length; i++ ) {
        item = body[key][i];
        if( !item['@id'] ) continue;
        await this._downloadHdtFile(collection, item['@id'].replace(config.fcrepo.host+config.fcrepo.root, '')); 
      }
    }
  }

  async _downloadHdtFile(collection, url) {
    logger.info('HDT lib downloading file cache '+collection+', '+url);

    let response = await api.get({
      path : url+'/fcr:metadata',
      headers : {Accept : api.RDF_FORMATS.JSON_LD}
    });

    if( !api.isSuccess(response.last) ) {
      throw new Error('Unknown hdt file: '+url);
    }

    let body = JSON.parse(response.last.body);
    body = this._get(url, body);

    let filename = body[FILE_NAME][0]['@value'];

    response = await api.get({path: url, encoding: null});
    await fs.writeFile(path.join(config.server.hdtCacheDir, collection, filename), response.last.body);
  }

  /**
   * @method onCollectionUpdate
   * @description should be called whenever the ActiveMQ bus sends a message that a collection
   * has been updated
   * 
   * @param {String} collectionName 
   */
  onCollectionUpdate(collectionName) {
    // buffer, then redownload file
    if( this.updateBuffers[collectionName] ) {
      clearTimeout(this.updateBuffers[collectionName]);
    }

    this.updateBuffers[collectionName] = setTimeout(() => {
      this.updateBuffers[collectionName] = null;
      this._getHdtFiles(collectionName);
    }, this.updateBufferTime);
  }

  /**
   * @method _get
   * @description get a container from JSON-LD graph array by path/id
   * TODO: this should probably be utility in main fin-node library
   * 
   * @param {String} path id of container to fetch from array  
   * @param {Object|Array} container 
   * 
   * @returns {Object}
   */
  _get(path, container) {
    if( Array.isArray(container) ) {
      for( var i = 0; i < container.length; i++ ) {
        if( container[i]['@id'].endsWith(path) ) {
          return container[i];
        }
      }
    } else if( container['@id'].endsWith(path) ) {
      return container;
    }

    return null;
  }

  /**
   * @method getSubjects
   * @description given a collection and a subject uri, retrieve the first entry that matches the
   * given uri.  Returns null if not found
   * 
   * @param {String} collection collection name
   * @param {String} uri uri of subject to find
   * 
   * @returns {Promise} resolves to triple or null
   */
  async getSubjects(collection, uri) {
    logger.info(`running label service for collection ${collection}: ${uri}`);

    let results = [];

    let rootDir = path.join(config.server.hdtCacheDir, collection);
    let files = await fs.readdir(rootDir);
    for( let i = 0; i < files.length; i++ ) {
      if( path.parse(files[i]).ext !== '.hdt' ) continue;

      let document = await hdt.fromFile(path.join(rootDir, files[i]));
      let result = await document.searchTriples(uri, null, null, {offset: 0});
      if( result.totalCount !== 0 ) {
        result.triples.forEach(item => {
          item.object = item.object.replace(/(^"|"$)/g, '')
        });
        results = results.concat(result.triples);
      }
      await document.close();
    }

    return results;
  }

}

module.exports = new HdtWrapper();