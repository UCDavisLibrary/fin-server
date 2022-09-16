const {logger} = require('@ucd-lib/fin-node-utils');
const buffer = require('./buffer');
const config = require('./config');

class AttributeReducer {
  
  constructor(esClient) {
    this.esClient = esClient;
    buffer.on('attributes-update', async (e) => {
      try {
        await this.reduceAttributes(e.data)
      } catch(err) {
        logger.error('Failed to reduce attributes for: ', e.data['@id'], err);
      }
    });
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
      let record = await this._get(e.record, e.alias);
      if( !record ) {
        logger.info(`ES Indexer attribute-reducer ignoring remove record container: ${e.record}, record does not exist in es`);
        return;
      }
      e.record = record;
    }

    // don't reduce bag of file attributes
    let isBagOfFiles = e.record['@type'].includes(config.essync.bagOfFiles.type);
    if( isBagOfFiles ) return;

    if( e.record.isRootRecord ) {
      return buffer.add('attributes', e.record['@id'], {'@id': e.record['@id'], alias: e.alias});
    }

    let rootRecordPath = await this.findRootRecord(e.record['@id'], e.alias);
    if( rootRecordPath ) {
      buffer.add('attributes', rootRecordPath, {'@id': rootRecordPath, alias: e.alias});
    }
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
  async findRootRecord(path='', alias, crawled={}) {
    if( path.match(/^http/) ) return null;

    let record = await this._get(path, alias);
    if( !record ) return null;

    if( crawled[record['@id']] ) return null;
    crawled[record['@id']] = true;

    if( record.isRootRecord ) {
      return record['@id'];
    }

    for( let attr of config.essync.parentConnections ) {
      if( !record[attr] ) continue;
      
      let property = record[attr];
      if( !Array.isArray(property) ) {
        property = [property];
      }

      for( let item of property ) {
        if( !item['@id'] ) continue;
        if( item['@id'].match(/^http/) ) continue;

        return this.findRootRecord(item['@id'], alias, crawled);
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
    let record = await this._get(e['@id'], e.alias);
    if( !record ) return;
    if( !record.isRootRecord ) return;

    // don't reduce bag of file attributes
    let isBagOfFiles = record['@type'].includes(config.essync.bagOfFiles.type);
    if( isBagOfFiles ) return;

    let reduced = {};
    let images = [];
    let visited = {};
    let identifier = record.identifier;
    if( identifier ) { 
      if( !Array.isArray(identifier) ) {
        identifier = [identifier];
      }

      identifier = {
        ark : identifier.find(id => id.match(/^ark:\//)),
        id: record['@id']
      }
    }

    await this.walkRecord(images, record, record, reduced, visited, identifier, e.alias);

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
   * @param {Object} visited hash of ids that have been visited
   * @param {Object} identifier identifier information (ark and id) of root record if it exists 
   * @param {String} alias (optional) index alias to use
   * 
   * @returns {Promise} 
   */
  async walkRecord(images, parent, record, reduced, visited, identifier, alias) {
    if( typeof record === 'string' ) {
      record = await this._get(record, alias);
      if( !record ) return;
    }

    if( visited[record['@id']] ) return;
    visited[record['@id']] = true;

    // append id information
    if( identifier ) {
      let recordIdentifier = record.identifier || [];
      if( !Array.isArray(recordIdentifier) ) {
        recordIdentifier = [recordIdentifier];
      }

      if( recordIdentifier.indexOf(identifier.id) === -1 ) {
        recordIdentifier.push(identifier.id);
      }

      if( identifier.ark ) {
        let localArk = identifier.ark+record['@id'].replace(identifier.id, '');

        if( recordIdentifier.indexOf(identifier.ark) === -1 ) {
          recordIdentifier.push(identifier.ark);
        }
        if( recordIdentifier.indexOf(localArk) === -1 ) {
          recordIdentifier.push(localArk);
        }
      }
      
      record.identifier = recordIdentifier;

      await this.esClient.index({
        index : alias,
        type: config.elasticsearch.record.schemaType,
        id : record['@id'],
        body: record
      });
    }

    // check for images to add to list
    if( record.fileFormat && record.fileFormat.match(/^image/i) ) {
      images.push({
        inheritedFrom : record['@id'],
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
        if( !values[j] ) continue;
        let id = values[j];
        if( id['@id'] ) id = id['@id'];
        await this.walkRecord(images, record, id, reduced, visited, identifier, alias);
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

  async _get(id, alias) {
    let stackTrace;
    try { throw new Error('Stack Trace') }
    catch(e) {stackTrace = e.stack};

    try {
      let record = await this.esClient.get({
        index: alias || config.elasticsearch.record.alias,
        type: config.elasticsearch.record.schemaType,
        id: id
      });
      return record._source;
    } catch(e) {
      if( e.status === 404 ) return null;
      logger.error(`Failed to get '${id}' in elasticsearch`, e);
      logger.error(stackTrace);
    }
    return null;
  }

}

module.exports = AttributeReducer;