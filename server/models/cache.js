const redis = require('../lib/redisClient');
const md5 = require('md5');
const {config} = require('@ucd-lib/fin-node-utils');

/**
 * Custom redis cache
 */
class CacheModel {

  constructor() {
    this.EXPIRE_TIME = config.server.cacheExpireTime || 60*60*12;
    this.PREFIX = 'cache:';
    this.HEADER = 'X-FIN-CACHE';
  }

  /**
   * @method destroy
   * @description destroy the redis cache (remove all keys with cache prefix)
   */
  async destroy() {
    let keys = await redis.keys(this.PREFIX+'*');
    for( var i = 0; i < keys.length; i++ ) {
      await redis.del(keys[i]);
    }
  }

  /**
   * @method cache
   * @description cache a request
   *
   * @param {String} path 
   * @param {Object} res http-proxy response 
   * @param {Object} req express request
   */
  set(path, res, req) {
    let body = '';
    res.on('data', (data) => body += data.toString());
    res.on('end', async () => {
      let headerHash = this._createHeadersMD5(req.get('accept'), req.get('prefer'), req.get('host'), res.headers.link);
      let key = this.PREFIX + path + res.headers.etag + headerHash;

      let value = JSON.stringify({
        headers : res.headers,
        body : body
      });
      
      await redis.set(key, value);
      await redis.expire(key, this.EXPIRE_TIME);
    });
  }

  /**
   * @method get
   * @description check the redis cache for a specific request
   * 
   * @param {String} path 
   * @param {String} resHeaders from response headers 
   * @param {Object} req express request 
   */
  async get(path, resHeaders, req) {
    let headerHash = this._createHeadersMD5(req.get('accept'), req.get('prefer'), req.get('host'), resHeaders.link);
    let key = this.PREFIX + path + (resHeaders.etag || '') + headerHash;

    let value = await redis.get(key);
    if( value ) {
      value = JSON.parse(value);
      
      // update expire time on cache hit
      redis.expire(key, this.EXPIRE_TIME);
    }
    return value;
  }

  /**
   * @method isCacheableRequest
   * @description given a express request, see if the request is possibly cacheable.
   * As much as we can anyway.  We still don't know container type, that will require
   * a HEAD request to fedora.
   * 
   * @param {Object} req express request 
   */
  isCacheableRequest(req) {
    if( req.method !== 'GET' ) return false;
    if( req.originalUrl.match(/.*fcr:assets.*/) ) return false;
    return true;
  }

  /**
   * @method _createHeadersMD5
   * @description create the md5 of the accept, prefer and link headers.  this is used
   * in creating the redis cache key
   * 
   * @param {String} accept request Accept header
   * @param {String} prefer request Prefer header
   * @param {String} host request Host header
   * @param {String} link response Link header
   * 
   * @returns {String}
   */
  _createHeadersMD5(accept='', prefer='', host='', link='') {
    return md5(accept.trim()+prefer.trim()+host.trim()+link.trim());
  }

}

module.exports = new CacheModel();