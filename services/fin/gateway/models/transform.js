const api = require('@ucd-lib/fin-api');
const {logger, config} = require('@ucd-lib/fin-service-utils');
const request = require('request');
const fs = require('fs-extra');
const {URL} = require('url');
const path = require('path');

const NULL_VALUE = '';
const FIN_URL = new URL(config.server.url);
const ROOT_DIR = path.join(__dirname, 'loaded-transforms');
let finUrlRegex = new RegExp(`^${config.server.url}${config.fcrepo.root}`);

const BLACK_LIST_LABEL_ATTRS = ['http://schema.org/hasPart', 'http://schema.org/associatedMedia', 
'http://www.w3.org/ns/ldp#contains', 'http://schema.org/workExample'];

class TransformUtils {

  constructor() {
    this.TEXT_INDEXABLE = 'textIndexable';
    this.SHORT_CREATIVE_WORK = 'schema:CreativeWork';
    this.SHORT_MEDIA_OBJECT = 'schema:MediaObject';
    this.CREATIVE_WORK = 'http://schema.org/CreativeWork';
    this.MEDIA_OBJECT = 'http://schema.org/MediaObject';
    this.FILE_FORMAT = 'http://schema.org/fileFormat';
    this.HAS_MIME_TYPE = 'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasMimeType';
    this.IMAGE_LIST = 'http://digital.ucdavis.edu/schema#ImageList';
    this.BAG_OF_FILES = 'http://digital.ucdavis.edu/schema#bagOfFiles';
    this.HAS_PART = 'http://schema.org/hasPart';
    this.ENCODING_FORMAT = 'http://schema.org/encodingFormat';
    this.HAS_SIZE = 'http://www.loc.gov/premis/rdf/v1#hasSize';
    this.FILENAME = 'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#filename';

    this.MAX_THUMBNAIL_SIZE = 500;

    // if these attributes exist, the ISO 8601 date will be stripped for
    // everything but the year and a new attribute created with the name
    // of the given key in the hash
    this.dateToYear = {
      datePublished : 'yearPublished'
    }
  }

  init(item, container, isCollection=true) {
    this.item = item;
    this.container = container;

    item['@id'] = container['@id'];
    item['@type'] = container['@type'];

    if( isCollection ) {
      let re = new RegExp('.*'+config.fcrepo.root+'/collection/');
      this.collection = container['@id'].replace(re, '').split('/')[0];
    }
  }

  ns(namespace) {
    this.namespace = namespace;
  }

  async add(opts) {
    let sAttr = this._getSourceAttribute(opts);
    if( !opts.regex ) {
      return this._addValue(opts, sAttr);
    }

    let re = new RegExp(sAttr);
    let props = Object.keys(this.container)
      .filter(prop => prop.match(re));

    for( let prop of props ) {
      let tOpts = Object.assign({}, opts);
      tOpts.attr = prop.match(re)[1];
      this._addValue(tOpts, prop);
    }
  }

  async _addValue(opts, sAttr) {
    let val = await this._getValues(sAttr, opts);
    if( val === null || val.length === 0 ) {
      if( opts.default ) {
        this.item[opts.attr] = opts.default;
      }
    } else {
      if( val.length === 1 ) val = val[0];
      this.item[opts.attr] = val;
    }
  }

  async _getValues(attr, opts) {
    let val = this.container[attr];
    if( val === undefined ) return null;

    if( Array.isArray(val) ) {
      for( let i = 0; i < val.length; i++ ) {
        val[i] = await this._getValue(attr, val[i], opts);
      }
      return val.filter(v => v !== null);
    }

    let v = await this._getValue(attr, val, opts)
    return (v === null) ? '' : v; 
  }

  async _getValue(attr, obj, opts) {
    if( obj === null ) return null;

    if( opts.type === 'id' ) {
      if( obj['@value'] !== undefined ) {
        return {name: obj['@value']};
      } else if( obj['@id'] !== undefined ) {
        return await this._lookupLabel(attr, obj['@id']);
      }
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

  async _lookupLabel(attr, uri) {
    let result = {'@id': uri};
    if( BLACK_LIST_LABEL_ATTRS.indexOf(attr) > -1 ) {
      return result;
    }

    try {
      let response = await this.request({
        uri: config.gateway.host+'/label/'+encodeURIComponent(uri)
      });
      response = JSON.parse(response.body);
      
      // this is the list of graph, grab first
      if( response['@graph'] ) response = response['@graph'];
      if( !Array.isArray(response) ) response = [response];
      if( !response.length ) return result;

      response = response[0];

      // this is the list of responses within the graph
      if( response['@graph'] ) response = response['@graph'];
      
      response.forEach(item => {
        if( item['@id'] !== uri ) return;

        let tmp = {'@id': item['@id']};
        for( let key in item ) {
          if( key.startsWith('@') ) continue;
          if( !item[key].length ) continue;
          if( !item[key][0]['@value'] ) continue;

          tmp[key.split(/(#|\/)/).pop()] = item[key][0]['@value'];
        }

        result = Object.assign(result, tmp);
      });
    } catch(e) {
      logger.warn('Label service lookup failed in transform, collection: '+uri, e);
    }

    return result;
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
    let imgPath = await this.getImagePath(json);
    if( !imgPath ) return json;

    json.image = {
      url : config.fcrepo.root+imgPath
    };

    await this._setImageMetadata(json);
    await this._setThumbnailUrl(json);
    await this._setColorPalette(json);
  }

  /**
   * @method _setImageMetadata
   * @description given a JSON-LD frame, set the image resolution.  If there is an workExample,
   * this property will be used otherwise the id of the frame.  The uri will be hit against
   * the iiif service for resolution information.
   * 
   * @param {Object} json
   * 
   * @returns {Object}
   */
  async _setImageMetadata(json) {
    if( json.image.url.match(/svc:iiif/) ) {
      let parts = json.image.url.split('/svc:iiif/');
      let iiif = parts[1].split('/');

      json.image.iiif = {
        region : iiif[0],
        size : iiif[1],
        rotation : iiif[2],
        quality : iiif[3].split('.')[0],
        format : iiif[3].split('.')[1]
      }
      json.image.url = parts[0];
    } else {
      json.image.iiif = {
        region : 'full',
        size : 'full',
        rotation : 0,
        quality : 'default',
        format : 'jpg'
      }
    }

    let imgUrl = config.gateway.host+json.image.url+'/svc:iiif/info.json';
    var result = await this.request({
      type : 'GET',
      uri: imgUrl
    });

    let body = result.body;
    try {
      result = JSON.parse(result.body);

      json.image.width = result.width;
      json.image.height = result.height;
    } catch(e) {
      logger.error('failed to get image height/width for: '+json['@id'], e,  body);
    }
    
    imgUrl = config.gateway.host+json.image.url+'/fcr:metadata';
    result = await this.request({
      type : 'GET',
      uri: imgUrl,
      headers : {
        Accept : api.RDF_FORMATS.JSON_LD
      }
    });
    
    body = result.body;
    try {
      result = JSON.parse(result.body)[0];
      if( result[this.FILENAME] ) {
        json.image.name = result[this.FILENAME][0]['@value'];
      }
      if( result[this.HAS_SIZE] ) {
        json.image.contentSize = result[this.HAS_SIZE][0]['@value'];
      }
      if( result[this.FILE_FORMAT] ) {
        json.image.encodingFormat = result[this.FILE_FORMAT][0]['@value'];
      }
      if( result[this.HAS_MIME_TYPE] ) {
        json.image.encodingFormat = result[this.HAS_MIME_TYPE][0]['@value'];
      }
    } catch(e) {
      logger.error('failed to get image metadata for: '+json['@id'], e, body);
    }

    return json;
  }

  _setThumbnailUrl(json) {
    let h, w;
    if( json.image.height > json.image.width ) {
      if( json.image.height > this.MAX_THUMBNAIL_SIZE ) {
        w = Math.floor((this.MAX_THUMBNAIL_SIZE / json.image.height) * json.image.width)
        h = this.MAX_THUMBNAIL_SIZE;
      } 
    } else {
      if( json.image.width > this.MAX_THUMBNAIL_SIZE ) {
        h = Math.floor((this.MAX_THUMBNAIL_SIZE / json.image.width) * json.image.height)
        w = this.MAX_THUMBNAIL_SIZE;
      }
    }

    let size;
    if( !h && !w ) size = 'full';
    else size = w+','+h;

    let thumbnailUrl = (this._getJsonLdProperty(json.thumbnailUrl) || []);
    thumbnailUrl = thumbnailUrl.map(url => {
      if( typeof url === 'string' ) return url;
      return url['@id'] || url['@value'];
    });

    thumbnailUrl.unshift(
      json.image.url + '/svc:iiif/' +
      json.image.iiif.region + '/' +
      size + '/' +
      json.image.iiif.rotation + '/' +
      json.image.iiif.quality + '.' + json.image.iiif.format
    );

    if( thumbnailUrl.length === 1 ) {
      thumbnailUrl = thumbnailUrl[0];
    }
    json.thumbnailUrl = thumbnailUrl;

    return json;
  }

  /**
   * @method getImagePath
   * @description return the representative image for record.  The order of lookup is
   * image, record id (if fileFormat is of type image/*), associatedMedia
   * 
   * @param {Object} json record
   * 
   * @returns {String|null}
   */
  async getImagePath(json) {
    let imagePath = this._getJsonLdProperty(json.image, true);

    if( imagePath ) {
      if( imagePath.match(/^\//) ) return imagePath;
      return json['@id'].replace(finUrlRegex, '')+imagePath;
    }

    imagePath = this._getJsonLdProperty(json.fileFormat, true);
    if( imagePath && imagePath.match(/^image\//i) ) {
      return json['@id'].replace(finUrlRegex, '');
    }

    imagePath = this._getJsonLdProperty(json.hasMimeType, true);
    if( imagePath && imagePath.match(/^image\//i) ) {
      return json['@id'].replace(finUrlRegex, '');
    }
    
    let associatedMedia = this._getJsonLdProperty(json.associatedMedia);
    if( associatedMedia ) {
      for( var i = 0; i < associatedMedia.length; i++ ) {
        if( !associatedMedia[i]['@id'] ) continue;

        let uri = associatedMedia[i]['@id'];
        let response = await this.request({
          type : 'HEAD', uri
        });
        if( !api.isRdfContainer(response) ) {
          uri += '/fcr:metadata';
        }

        response = await this.request({
          type : 'GET', uri,
          headers : {
            Accept : api.RDF_FORMATS.JSON_LD
          }
        });

        response = JSON.parse(response.body)[0];
        if( (response[this.FILE_FORMAT] && response[this.FILE_FORMAT][0]['@value'].match(/^image\//i)) ||
            (response[this.HAS_MIME_TYPE] && response[this.HAS_MIME_TYPE][0]['@value'].match(/^image\//i)) ) {
          return response['@id'].replace(finUrlRegex, '');
        }

        if( response['@type'].indexOf(this.IMAGE_LIST) > -1 && response[this.HAS_PART] ) {
          return response[this.HAS_PART][0]['@id'].replace(finUrlRegex, '');
        }
      }
    }

    imagePath = this._getJsonLdProperty(json.workExample, true);
    if( imagePath ) {
      return imagePath.replace(finUrlRegex, '');
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
  async _setColorPalette(json, width='8') {
    let imgPath = json.image.url.replace(/\/?svc:iiif\/.*/, '');
    let imgUrl = config.gateway.host+imgPath+`/svc:iiif/full/${width},/0/default.jpg`;

    let result = await this.request({
      type : 'GET',
      encoding : null,
      uri: imgUrl
    });

    json.image.colorPalette = 'data:image/jpg;base64,'+Buffer.from(result.body).toString('base64');
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
      uri: config.gateway.host+config.fcrepo.root+json['@id']
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
    if( !path ) {
      if( Array.isArray(container) ) return container[0];
      return container;
    }

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
   * @method get
   * @description get a container from JSON-LD graph array by path/id
   * 
   * @param {String} type type uri of container to fetch from array  
   * @param {Object|Array} container 
   * 
   * @returns {Object}
   */
  getByType(type, container) {
    if( !Array.isArray(container) ) {
      container = [container];
    }

    for( var i = 0; i < container.length; i++ ) {
      if( container[i]['@type'] && container[i]['@type'].includes(type) ) {
        return container[i];
      }
    }

    return null;
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
    return config.gateway.host + config.fcrepo.root;
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

  _getJsonLdProperty(value, returnFirst=false) {
    if( value === undefined ) return null;
    
    if( !Array.isArray(value) ) {
      value = [value];
    }

    if( value.length === 0 ) return null;

    if( returnFirst ) {
      value = value[0];
      if( typeof value === 'object' ) {
        return value['@id'] || value['@value'];
      }
      return value;
    }

    return value;
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

  /**
   * @method exec run transform
   */
  async exec(name, pathOrData) {
    if( !this.transforms[name] ) throw new Error('Unknown transform: '+name);

    let container = pathOrData;
    let path = pathOrData;
    let headers = {};

    if( typeof container === 'string' ) {
      path = pathOrData;
      let options = {
        path : pathOrData,
        headers : {
          Accept : api.RDF_FORMATS.JSON_LD,
        }
      }
      this.setForwardedHeader(options.headers);

      let response = await api.head(options);
      if( !api.isRdfContainer(response.last) ) {
        options.path += '/fcr:metadata';
      }

      response = await api.get(options);
      if( !response.checkStatus(200) ) {
        throw new Error(response.last.statusCode+' '+response.last.body);
      }

      container = JSON.parse(response.last.body);
      headers = response.last.headers || {};
      if( headers.link ) {
        headers.link = api.parseLinkHeader(headers.link);
      }
    
    } else {
      path = null;
    } 

    return this.transforms[name](path, container, headers, new TransformUtils());
  }

  /**
   * @method getForwardedHeader
   * @description return the forwarded header for fcrepo responses that represent actual domain
   * name and protocol, not docker fcrepo:8080 name.
   * 
   * @returns {String}
   */
  setForwardedHeader(headers) {
    headers.host = FIN_URL.host;
    // headers.forwarded = `host=${FIN_URL.host}; proto=${FIN_URL.protocol.replace(/:/, '')}`;
    // headers['x-forwarded-host'] = FIN_URL.host;
    // headers['x-forwarded-proto'] = FIN_URL.protocol.replace(/:/, '');
  }

}



module.exports = new TransformService();