const {logger} = require('@ucd-lib/fin-node-utils');
const buffer = require('./buffer');
const config = require('./config');

const WEB_FRIENDLY = 'ucdlib:WebFriendlyMediaObject';

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
      let exists = await this._exists(e.record, e.alias);
      if( !exists ) return;
      e.record = await this._get(e.record, e.alias);
    }

    if( e.record.isRootRecord ) {
      return buffer.add({'@id': e.record['@id'], alias: e.alias});
    }

    let rootRecordPath = await this.findRootRecord(e.record['@id'], e.alias);
    if( rootRecordPath ) buffer.add({'@id': rootRecordPath, alias: e.alias});
  }

  /**
   * @method findRootRecord
   * @description given a path, walk the isPartOf and encodesCreativeWork links
   * to find the parent container that is marked with isRootRecord (if it exists).
   * Either a id string or null is returned if the root record cannot be found.
   * 
   * @param {String} path record id
   * @param {String} alias (optional) index alias to use
   * 
   * @returns {Promise} resolves to String or null 
   */
  async findRootRecord(path, alias) {
    let exists = await this._exists(path, alias);
    if( !exists ) return null;

    let record = await this._get(path, alias);

    if( record.isRootRecord ) {
      return record['@id'];
    }

    let parentConnections = config.essync.parentConnections;
    for( let i = 0; i < parentConnections.length; i++ ) {
      if( record[parentConnections[i]] ) {
        return await this.findRootRecord(record[parentConnections[i]]['@id'], alias);
      }
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
    let exists = await this._exists(e['@id'], e.alias);
    if( !exists ) return;

    let record = await this._get(e['@id'], e.alias);
    if( !record.isRootRecord ) return;

    let reduced = {};
    let images = [];

    await this.walkRecord(images, record, record, reduced, e.alias);

    this.setImage(record, images);
    
    for( let key in reduced ) {
      record[key] = reduced[key];
      reduced[key] = reduced[key].length;
    }

    let index = e.alias || config.elasticsearch.record.alias;
    logger.info('Setting reduced attributes', e['@id'], index, reduced);

    await this.esClient.index({
      index : index,
      type: config.elasticsearch.record.schemaType,
      id : record['@id'],
      body: record
    });
  }

  /**
   * @method setImagePath
   * @description given a root record and a list of images from the record tree
   * set the imagePath attribute.
   * 
   * @param {Object} record 
   * @param {Array} images 
   */
  setImage(record, images) {
    // does the record have an image?
    if( record.image ) {
      return;
    }

    // find a web friendly image 
    for( var i = 0; i < images.length; i++ ) {
      if( !images[i].isWebFriendly ) continue;
      return record.image = images[i];
    }

    // set any image
    for( var i = 0; i < images.length; i++ ) {
      return record.image = images[i];
    }
  }

  /**
   * @method walkRecord
   * @description recursively walk to the associatedMedia and parts adding
   * reduced attributes as you go
   * 
   * @param {Array} images list of images for this
   * @param {String|Object} record either record object or record id string
   * @param {Object} reduced current reduced attribute state
   * @param {String} alias (optional) index alias to use
   * 
   * @returns {Promise} 
   */
  async walkRecord(images, parent, record, reduced, alias) {
    if( typeof record === 'string' ) {
      let exists = await this._exists(record, alias);
      if( !exists ) return;
      record = await this._get(record, alias);
    }

    // check for images to add to list
    if( record.fileFormat && record.fileFormat.match(/^image/i) ) {
      images.push({
        inheritedFrom : record['@id'],
        isWebFriendly : this.isWebFriendly(parent),
        url : record.image.url,
        height : record.image.height,
        width : record.image.width,
        colorPalette : record.image.colorPalette
      });
    }

    this.addAttributes(record, reduced);

    let childConnections = config.essync.childConnections;
    for( let i = 0; i < childConnections.length; i++ ) {
      if( !record[childConnections[i]] ) continue;
      
      let values = Array.isArray(record[childConnections[i]]) ? record[childConnections[i]] : [record[childConnections[i]]];
      
      for( let j = 0; j < values.length; j++ ) {
        if( values[j] && values[j]['@id'] ) {
          values[j] = values[j]['@id'];
        }
        await this.walkRecord(images, record, values[j], reduced, alias);
      }
    }
  }

  /**
   * @method isWebFriendly
   * @description is the record a web-friendly image list
   * 
   * @param {Object} record 
   * 
   * @returns {Boolean}
   */
  isWebFriendly(record) {
    return (record['@type'].indexOf(WEB_FRIENDLY) > -1);
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
      let rkey = config.essync.reduceAttributes[key];

      let values = this._getAttributeValues(0, key, record);
      if( values.length === 0 ) continue;

      if( !reduced[rkey] ) {
        reduced[rkey] = values;
        continue;
      }

      values.forEach(val => {
        if( reduced[rkey].indexOf(val) > -1 ) return;
        reduced[rkey].push(val);
      });
    }

    // reduce @type to type for schema.org attributes
    if( !reduced.type ) reduced.type = [];
    (record['@type'] || []).forEach(val => {
      if( !val.match(/^schema:/) && !val.match(/^http:\/\/schema.org/) ) return;
      val = val.replace(/^schema:/, '').replace('http://schema.org/', '');
      if( reduced.type.indexOf(val) > -1 ) return;
      reduced.type.push(val);
    });

    return reduced;
  }

  /**
   * @method _getAttributeValues
   * @description given an attribute dot path, walk object and return all values
   * at nested path.
   * 
   * @param index {Number} call this with 0 on start
   * @param attrArray {Array|String} dot path to crawl.  if string, should be foo.bar.baz
   * @param obj object to walk for values.  probably JSON-LD here.
   * 
   * @return {Array}
   */
  _getAttributeValues(index, attrArray, obj) {
    if( !Array.isArray(attrArray) ) attrArray = attrArray.split('.');

    // if we are at the end of the index, return values
    if( index === attrArray.length ) {

      // make sure we are handling an array
      if( !Array.isArray(obj) ) {
        obj = [obj];
      }
      
      // only return unqiue values in array
      let unique = [];
      obj.forEach(value => {
        if( unique.indexOf(value) === -1 ) {
          unique.push(value);
        }
      });
  
      return unique;
    }
  
    // get current key
    let key = attrArray[index];
    index++;
  
    if( Array.isArray(obj) ) {
      let arr = [];
      obj
        // filter out array items that don't have our current key
        .filter(value => {
          return (typeof value === 'object' && value[key] !== undefined);
        })
        // append current values to new array
        .forEach(value => {
          if( Array.isArray(value[key]) ) {
            arr = arr.concat(value[key]);
          } else {
            arr.push(value[key]);
          }
        });

      // set object to new appended array
      obj = arr;
    } else if( typeof obj === 'object' && obj[key] !== undefined ) {
      // if we are looking at an object, this is a simple operation
      obj = obj[key];
    } else {
      // attribute was not found
      return [];
    }
    
    // walk next level in attribute array
    return this._getAttributeValues(index, attrArray, obj);
  }

  _exists(id, alias) {
    return this.esClient.exists({
      index : alias || config.elasticsearch.record.alias,
      type: config.elasticsearch.record.schemaType,
      id : id
    });
  }

  async _get(id, alias) {
    let record = await this.esClient.get({
      index: alias || config.elasticsearch.record.alias,
      type: config.elasticsearch.record.schemaType,
      id: id
    });
    return record._source;
  }

}

module.exports = AttributeReducer;