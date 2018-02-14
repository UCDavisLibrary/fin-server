const redis = require('../lib/redisClient');

/**
 * Custom redis cache
 */
class CacheModel {

  constructor() {
    this.PREFIX = 'cache:';
    this.HEADER = 'X-CACHE';
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
      let key = this.PREFIX + path + (res.headers.etag || '') +
          (req.get('accept') || '') + (req.get('prefer') || '');

      let value = JSON.stringify({
        header : res.headers,
        body : body
      });
      
      await redis.set(key, value);
      await redis.expire(key, config.server.cacheExpireTime || 60*60*24);
    });
  }

  /**
   * @method get
   * @description check the redis cache for a specific request
   * 
   * @param {String} path 
   * @param {String} etag from response headers 
   * @param {Object} req express request 
   */
  async get(path, etag = '', req) {
    let key = this.PREFIX + path + etag + 
              (req.get('accept') || '') + (req.get('prefer') || '');

    let value = await redis.get(key);
    if( value ) value = JSON.parse(value);
    return value;
  }

  isCacheableRequest(req) {
    if( req.method !== 'GET' ) return false;
    if( req.originalUrl.match(/.*fcr:assets.*/) ) return false;
    return true;
  }

}

module.exports = new CacheModel();