const {logger} = require('@ucd-lib/fin-node-utils');
const buffer = require('./buffer');
const config = require('./config');

class AttributeReducer {
  
  constructor(esClient) {
    this.esClient = esClient;
    buffer.on('record-update', (e) => this.reduceAttributes(e));
  }

  /**
   * @method onRecordUpdate
   * @description should be called whenever a record updates
   * 
   * @param {Object} e 
   * @param {Object|String} e.record the record (container) that was updated
   * @param {String} e.alias alias to add record to
   */
  async onRecordUpdate(e) {
    if( typeof e.record === 'string' ) {
      let exists = await this._exists(e.record);
      if( !exists ) return;
      e.record = await this._get(e.record);
    }

    if( e.record.isRootRecord ) {
      return buffer.add({id: e.record.id, alias: e.alias});
    }

    let rootRecordPath = await this.findRootRecord(e.record.id);
    if( rootRecordPath ) buffer.add({id: rootRecordPath, alias: e.alias});
  }

  /**
   * @method findRootRecord
   * @description given a path, walk the isPartOf and encodesCreativeWork links
   * to find the parent container that is marked with isRootRecord (if it exists).
   * Either a id string or null is returned if the root record cannot be found.
   * 
   * @param {String} path record id
   * 
   * @returns {Promise} resolves to String or null 
   */
  async findRootRecord(path) {
    let exists = await this._exists(path);
    if( !exists ) return null;

    let record = await this._get(path);

    if( record.isRootRecord ) {
      return record.id;
    }

    if( record.isPartOf ) {
      return await this.findRootRecord(record.isPartOf);
    } else if( record.encodesCreativeWork ) {
      return await this.findRootRecord(record.encodesCreativeWork);
    }

    return null;
  }

  /**
   * @method reduceAttributes
   * @description walk the entire tree of hasParts and associatedMedia
   * adding reducing properties as you go.  id should be a root record
   * 
   * @param {Object} e event
   * @param {String} e.id root record id 
   * @param {String} e.alias alias to add record to
   */
  async reduceAttributes(e) {
    let exists = await this._exists(e.id);
    if( !exists ) return;

    let record = await this._get(e.id);
    if( !record.isRootRecord ) return;

    let reduced = {};
    await this.walkRecord(record, reduced);
    
    for( let key in reduced ) {
      record[key] = reduced[key];
    }

    let index = e.alias || config.elasticsearch.record.alias;
    logger.info('Setting reduced attributes', e.id, index, reduced);

    await this.esClient.index({
      index : index,
      type: config.elasticsearch.record.schemaType,
      id : record.id,
      body: record
    });
  }

  /**
   * @method walkRecord
   * @description recursively walk to the associatedMedia and parts adding
   * reduced attributes as you go
   * 
   * @param {String|Object} record either record object or record id string
   * @param {Object} reduced current reduced attribute state
   * 
   * @returns {Promise} 
   */
  async walkRecord(record, reduced) {
    if( typeof record === 'string' ) {
      let exists = await this._exists(record);
      if( !exists ) return;
      record = await this._get(record);
    }

    this.addAttributes(record, reduced);

    if( record.hasPart ) {
      let hasPart = Array.isArray(record.hasPart) ? record.hasPart : [record.hasPart];
      for( var i = 0; i < hasPart.length; i++ ) {
        await this.walkRecord(hashPart[i], reduced);
      }
    }

    if( record.associatedMedia ) {
      let associatedMedia = Array.isArray(record.associatedMedia) ? record.associatedMedia : [record.associatedMedia];
      for( var i = 0; i < associatedMedia.length; i++ ) {
        await this.walkRecord(associatedMedia[i], reduced);
      }
    }
  }
  

  /**
   * @method addAttributes
   * @description given a record and the reduced attributes hash,
   * add the given records attributes to the reduced has
   * 
   * @param {Object} record 
   * @param {Object} reduced
   * 
   * @returns {Object} 
   */
  addAttributes(record, reduced = {}) {
    for( var key in config.essync.reduceAttributes ) {
      if( !record[key] ) continue;

      let values = record[key];
      if( !Array.isArray(values) ) values = [values];
      
      let rkey = config.essync.reduceAttributes[key];
      if( !reduced[rkey] ) {
        reduced[rkey] = values;
        continue;
      }

      values.forEach(val => {
        if( reduced[rkey].indexOf(val) > -1 ) return;
        reduced[rkey].push(val);
      });
    }

    return reduced;
  }

  _exists(id) {
    return this.esClient.exists({
      index : config.elasticsearch.record.alias,
      type: config.elasticsearch.record.schemaType,
      id : id
    });
  }

  async _get(id) {
    let record = await this.esClient.get({
      index: config.elasticsearch.record.alias,
      type: config.elasticsearch.record.schemaType,
      id: id
    });
    return record._source;
  }

}

module.exports = AttributeReducer;