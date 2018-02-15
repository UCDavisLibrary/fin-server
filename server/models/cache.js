const redis = require('../lib/redisClient');
const md5 = require('md5');
const {config} = require('@ucd-lib/fin-node-utils');

/**
 * Custom redis cache
 */
class CacheModel {

  constructor() {
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
      let headerHash = this._createHeadersMD5(req.get('accept'), req.get('prefer'), res.headers.link);
      let key = this.PREFIX + path + res.headers.etag + headerHash;

      let value = JSON.stringify({
        headers : res.headers,
        body : body
      });
      
      await redis.set(key, value);
      await redis.expire(key, config.server.cacheExpireTime || 60*60*12);
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
    let headerHash = this._createHeadersMD5(req.get('accept'), req.get('prefer'), resHeaders.link);
    let key = this.PREFIX + path + (resHeaders.etag || '') + headerHash;

    let value = await redis.get(key);
    if( value ) value = JSON.parse(value);
    return value;
  }

  isCacheableRequest(req) {
    if( req.method !== 'GET' ) return false;
    if( req.originalUrl.match(/.*fcr:assets.*/) ) return false;
    return true;
  }

  _createHeadersMD5(accept='', prefer='', link='') {
    return md5(accept.trim()+prefer.trim()+link.trim());
  }

}

module.exports = new CacheModel();