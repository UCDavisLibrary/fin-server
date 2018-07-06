const api = require('@ucd-lib/fin-node-api');
const {logger, config} = require('@ucd-lib/fin-node-utils');
const request = require('request');
const fs = require('fs-extra');
const {URL} = require('url');
const path = require('path');

const NULL_VALUE = '';
const FIN_URL = new URL(config.server.url);
const ROOT_DIR = path.join(__dirname, 'loaded-transforms');
let finUrlRegex = new RegExp(`^${config.server.url}${config.fcrepo.root}`);

class TransformUtils {

  constructor() {
    this.TEXT_INDEXABLE = 'textIndexable';
    this.SHORT_CREATIVE_WORK = 'schema:CreativeWork';
    this.SHORT_MEDIA_OBJECT = 'schema:MediaObject';
    this.CREATIVE_WORK = 'http://schema.org/CreativeWork';
    this.MEDIA_OBJECT = 'http://schema.org/MediaObject';

    // if these attributes exist, the ISO 8601 date will be stripped for
    // everything but the year and a new attribute created with the name
    // of the given key in the hash
    this.dateToYear = {
      datePublished : 'yearPublished'
    }
  }

  init(item, container) {
    this.item = item;
    this.container = container;

    item.id = container['@id'];
    item['@id'] = container['@id'];
    item['@type'] = container['@type'];
  }

  ns(namespace) {
    this.namespace = namespace;
  }

  add(opts) {
    let sAttr = this._getSourceAttribute(opts);
    let val = this._getValues(sAttr, opts);
    if( val === null || val.length === 0 ) {
      if( opts.default ) {
        this.item[opts.attr] = opts.default;
      }
    } else {
      if( val.length === 1 ) val = val[0];
      this.item[opts.attr] = val;
    }
  }

  _getValues(attr, opts) {
    let val = this.container[attr];
    if( val === undefined ) return null;

    if( Array.isArray(val) ) {
      return val.map(v => this._getValue(v, opts))
                .filter(v => v !== null);
    }

    let v = this._getValue(val, opts)
    return (v === null) ? '' : v; 
  }

  _getValue(obj, opts) {
    if( opts.type === 'id' ) {
      if( obj['@id'] !== undefined ) return obj['@id'];
      return null;
    }
    
    let val = obj['@value'];
    if( val === undefined ) return null;

    if( !opts.type && !opts.parser ) return val;
    if( opts.type === 'date' ) return new Date(val);
    if( opts.type === 'number' ) return parseInt(val);
    if( opts.type === 'float' ) return parseFloat(val);
    if( opts.type === 'boolean' ) return ((val+'').toLowerCase().trim() === 'true') ? true : false;
    if( opts.parser ) return opts.parser(val);
    
    return val;
  }

  _getSourceAttribute(opts) {
    if( typeof opts.value === 'string' ) return opts.value;
    return this.namespace[opts.value[0]]+opts.value[1];
  }
  
  /**
   * @method stripFinHost
   * @description short id's removing fin host and base path.  this also
   * removes empty values
   * 
   * @param {Object} json
   * 
   * @return {Object}
   */
  stripFinHost(json) {
    if( Array.isArray(json) ) {
      json.forEach((item, index) => {
        if( typeof item === 'object' ) {
          this.stripFinHost(item);
        } else if( typeof item === 'string' ) {
          json[index] = json[index].replace(finUrlRegex, '');
        }
      });
    } else {
      for( var key in json ) {
        if( typeof json[key] === 'object' ) {
          this.stripFinHost(json[key]);
        } else if( typeof json[key] === 'string' ) {
          json[key] = json[key].replace(finUrlRegex, '');
          if( json[key] === NULL_VALUE ) delete json[key];
        }
      }
    }

    return json;
  }

  async setImage(json) {
    let imgPath = this.getImagePath(json);
    if( !imgPath ) return json;

    json.image = {
      path : imgPath
    };
    await this._setImageResolution(json, imgPath);
    await this._setColorPalette(json, imgPath);
  }

  /**
   * @method setImageResolution
   * @description given a JSON-LD frame, set the image resolution.  If there is an workExample,
   * this property will be used otherwise the id of the frame.  The uri will be hit against
   * the iiif service for resolution information.
   * 
   * @param {Object} json
   * 
   * @returns {Object}
   */
  async _setImageResolution(json, imgPath) {
    let imgUrl = config.fin.host+config.fcrepo.root+imgPath+'/svc:iiif/info.json';
    
    var result = await this.request({
      type : 'GET',
      uri: imgUrl
    });

    try {
      result = JSON.parse(result.body);

      json.image.width = result.width;
      json.image.height = result.height;
    } catch(e) {
      logger.error('failed to get image height/width for: '+json['@id'], result.body);
    }
    

    return json;
  }

  /**
   * @method getImagePath
   * @description return the representative image for record.  The order of lookup is
   * workExample, record id (if fileFormat is of type image/*), associatedMedia
   * 
   * @param {Object} json record
   * 
   * @returns {String|null}
   */
  getImagePath(json) {
    if( json.workExample ) {
      return Array.isArray(json.workExample) ? json.workExample[0] : json.workExample;
    }
    
    if( json.fileFormat && json.fileFormat.match(/^image\//i) ) {
      return json.id
    }
    if( json.hasMimeType && json.hasMimeType.match(/^image\//i) ) {
      return json.id
    }
    
    if( json.associatedMedia ) {
      return Array.isArray(json.associatedMedia) ? json.associatedMedia[0] : json.associatedMedia;
    }

    return null;
  }

  /**
   * @method setColorPalette
   * @description given a JSON-LD frame, set the thumbnail.  If there is an workExample,
   * this property will be used otherwise the id of the frame.  The uri will be hit against
   * the iiif service.
   * 
   * @param {Object} json
   * 
   * @returns {Object}
   */
  async _setColorPalette(json, imgPath, width='8') {
    let imgUrl = config.fin.host+config.fcrepo.root+imgPath+`/svc:iiif/full/${width},/0/default.png`;

    let result = await this.request({
      type : 'GET',
      encoding : null,
      uri: imgUrl
    });

    json.image.colorPalette = 'data:image/png;base64,'+new Buffer(result.body).toString('base64');
    return json;
  }

  /**
   * @method setIndexableContent
   * @description given a JSON-LD frame, set the file contents if the textIndexable flag
   * is provided.
   * 
   * @param {Object} json
   * 
   * @return {Object} 
   */
  async setIndexableContent(json) {
    let include = json[this.TEXT_INDEXABLE];
    if( include !== true && include !== 'true' ) return;

    var result = await this.request({
      type : 'GET',
      uri: config.fin.host+config.fcrepo.root+json['@id']
    });
    json.indexableContent = result.body;

    return json;
  }

  /**
   * @method isType
   * @description is container of given type
   * 
   * @param {String} type 
   * 
   * @returns {Boolean}
   */
  isType(container, type) {
    return (container['@type'].indexOf(type) > -1);
  }

  /**
   * @method get
   * @description get a container from JSON-LD graph array by path/id
   * 
   * @param {String} path id of container to fetch from array  
   * @param {Object|Array} container 
   * 
   * @returns {Object}
   */
  get(path, container) {
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
   * @method isRecord
   * @description given an array of types, is this a es record.
   * Currently that is any schema.org creative work or media object.
   * 
   * @param {Array} types array or type uri's
   * 
   * @returns {Boolean}
   */ 
  isRecord(types = []) {
    return (
      types.indexOf(this.CREATIVE_WORK) > -1 || 
      types.indexOf(this.MEDIA_OBJECT) > -1 ||
      types.indexOf(this.SHORT_CREATIVE_WORK) > -1 || 
      types.indexOf(this.SHORT_MEDIA_OBJECT) > -1
    );
  }

  /**
   * @method setRootRecord
   * @description given a record, set the isRootRecord flag if the
   * isPartOf attribute is equal to the collection id
   * 
   * @param {Object} json record
   */
  setRootRecord(json) {
    if( json.isPartOf && json.isPartOf === json.collectionId ) {
      json.isRootRecord = true;
    }
  }

  /**
   * @method setYearFromDate
   * @description given ISO 8601 Date attributes, map them to a year
   * attribute if the date attribute exits.
   * 
   * @param {Object} json record
   */
  setYearFromDate(json) {
    for( let dateAttr in this.dateToYear ) {
      if( !json[dateAttr] ) continue;

      let year = (json[dateAttr]+'').match(/^\d\d\d\d/);
      if( !year ) continue;

      json[this.dateToYear[dateAttr]] = parseInt(year[0]);
    }
  }

  /** 
   * @method getFcRepoBaseUrl
   * @description get the base url for fcrepo
   *  
   * @returns {String}
   */
  getFcRepoBaseUrl() {
    return config.fin.host + config.fcrepo.root;
  }

  /**
   * @method request
   * @description wrap request library in promise.  set authorization header with
   * jwt token and set uri to full path of fcrepo based on config.fcrepo params.
   */
  request(options) {
    if( !options.uri.match(/^http/i) ) {
      options.uri = this.getFcRepoBaseUrl() + options.uri;
    }

    return new Promise((resolve, reject) => {
      request(options, (error, response) => {
        if( error ) reject(error);
        else resolve(response);
      });
    });
  }
}

class TransformService {

  constructor() {
    this.count = 0;

    if( fs.existsSync(ROOT_DIR) ) {
      fs.removeSync(ROOT_DIR);
    }
    fs.mkdirpSync(ROOT_DIR);
    this.transforms = {};
  }

  async load(name, script) {
    // add -count so we always load a fresh instance
    let file = path.join(ROOT_DIR, name+'-'+this.count+'.js');
    await fs.writeFile(file, script);
    this.transforms[name] = require(file);
    this.count++;
  }

  async exec(name, path) {
    if( !this.transforms[name] ) throw new Error('Unknown transform: '+name);

    let options = {
      path : path,
      headers : {
        Accept : api.RDF_FORMATS.JSON_LD,
        Forwarded : this.getForwardedHeader()
      }
    }

    let response = await api.head(options);
    if( !api.isRdfContainer(response.last) ) {
      options.path += '/fcr:metadata';
    }

    response = await api.get(options);
    if( !response.checkStatus(200) ) {
      throw new Error(response.last.statusCode+' '+response.last.body);
    }

    let container = JSON.parse(response.last.body);
    return this.transforms[name](path, container, new TransformUtils());
  }

  /**
   * @method getForwardedHeader
   * @description return the forwarded header for fcrepo responses that represent actual domain
   * name and protocol, not docker fcrepo:8080 name.
   * 
   * @returns {String}
   */
  getForwardedHeader() {
    return `host=${FIN_URL.host}; proto=${FIN_URL.protocol.replace(/:/, '')}`;
  }

}



module.exports = new TransformService();