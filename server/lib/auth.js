var bcrypt = require('bcrypt');
var {config, jwt} = require('@ucd-lib/fin-node-utils');
var redis = require('./redisClient');
const crypto = require('crypto');

class AuthUtils {

  constructor() {
    this.ADMIN_LIST_KEY = 'admins';
    this.REFRESH_TOKEN_PREFIX = 'rtoken_';

    this.jwt = jwt;
   
    this.middleware = {
      block : require('../middleware/block'),
      admin : require('../middleware/admin')
    }
  }

  /**
   * @method refreshToken
   * @description generate a refresh token for a user and store in redis
   * 
   * @param {String} username user to generate the refresh token for
   * 
   * @returns {String} refresh token
   */
  async refreshToken(username) {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(48, async (err, buffer) => {
        let token = buffer.toString('hex');
        let key = this.REFRESH_TOKEN_PREFIX+token;
        redis.set(key, username);
        redis.expire(key, config.redis.refreshTokenExpire);

        resolve(token);
      });
    });
  }

  /**
   * @method refreshTokenVerification
   * @description given a username and a refresh token, verify the refresh
   * token is for the username.
   * 
   * @param {String} username username
   * @param {String} token refresh token
   * 
   * @returns {Boolean}
   */
  async refreshTokenVerification(username, token) {
    let key = this.REFRESH_TOKEN_PREFIX+token;
    var keyusername = await redis.get(key);
    return (keyusername === username);
  }

  /**
   * @method loadAdmins
   * @description return all users in the admin list
   * 
   * @returns {Array}
   */
  async loadAdmins() {
    var admins = await redis.get(this.ADMIN_LIST_KEY);
    return admins ? JSON.parse(admins) : [];
  }

  /**
   * @method addAdmin
   * @description add user to admin list
   * 
   * @param {String} username user to add
   * 
   * @returns {Boolean} was user added to admin list
   */
  async addAdmin(username) {
    var admins = await this.loadAdmins();
    if( admins.indexOf(username) > -1 ) return false;
    
    admins.push(username);
    await redis.set(this.ADMIN_LIST_KEY, JSON.stringify(admins));

    return true;
  }

  /**
   * @method removeAdmin
   * @description remove user from admin list
   * 
   * @param {String} username user to remove
   * 
   * @returns {Boolean} was user removed from admin list
   */
  async removeAdmin(username) {
    var admins = await this.loadAdmins();
    var index = admins.indexOf(username);
    if( index === -1 ) return false;

    admins.splice(index, 1);
    await redis.set(this.ADMIN_LIST_KEY, JSON.stringify(admins));

    return true;
  }

  /**
   * @method isAdmin
   * @description is user in the admin list
   * 
   * @param {String} username
   * 
   * @returns {Boolean}
   */
  async isAdmin(username) {
    var admins = await this.loadAdmins();

    return admins.indexOf(username) > -1;
  }
}

module.exports = new AuthUtils();