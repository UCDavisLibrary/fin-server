const bcrypt = require('bcrypt');
const {config, jwt} = require('@ucd-lib/fin-node-utils');
const redis = require('../lib/redisClient');
const crypto = require('crypto');

class AuthModel {

  constructor() {
    this.ADMIN_LIST_KEY = 'admins';
    this.REFRESH_TOKEN_PREFIX = 'rtoken:';

    redis.config('SET', 'save', '60 1 30 10');

    this.admins = [];
    this._initAdminSync();
  }

  /**
   * @method _initAdminSync
   * @description this method keeps the admin list in sync with redis.  Background, the AuthenticationService
   * needs to know if a given agent is a admin.  This WAS stored in Redis, but the http-proxy doesn't let
   * you do async work when handling to proxy response.  So to get around that we are keeping the admin
   * list in memory.
   */
  async _initAdminSync() {
    // make sure redis is setup to listen to keyspace events
    // https://redis.io/topics/notifications
    redis.config('SET', 'notify-keyspace-events', 'Kg$s');

    // load our current list of admins into memory
    await this.loadAdmins();

    // clone our current redis connection to setup a listener
    redis.duplicate((err, listenerClient) => {
      if( err ) throw new Error('Failed to setup redis sync for admin list');

      // handle updates to the admin key which we have subscribed to below
      listenerClient.on('pmessage', async (channel, message) => {
        await this.loadAdmins();
      });

      // listen for updates to the admin key
      listenerClient.psubscribe(`__keyspace@*__:${this.ADMIN_LIST_KEY}`, function (err) {
        if( err ) throw new Error('Failed to setup redis sync for admin list');
      });
    });    
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
    let admins = await redis.get(this.ADMIN_LIST_KEY);
    this.admins = admins ? JSON.parse(admins) : [];
    return this.admins;
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
  isAdmin(username) {
    return this.admins.indexOf(username) > -1;
  }
}

module.exports = new AuthModel();