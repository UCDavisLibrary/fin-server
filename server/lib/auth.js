var CASAuthentication = require('cas-authentication');
var bcrypt = require('bcrypt');
var {config, jwt} = require('@ucd-lib/fin-node-utils');
var redis = require('./redisClient');
const crypto = require('crypto');

class AuthUtils {

  constructor() {
    this.ADMIN_LIST_KEY = 'admins';
    this.USER_KEY_PREFIX = 'user_';
    this.REFRESH_TOKEN_PREFIX = 'rtoken_';
    this.saltRounds = 10;

    // Create a new instance of CASAuthentication. 
    this.cas = new CASAuthentication({
      cas_url     : config.cas.url,
      service_url : config.server.url
    });

    this.jwt = jwt;
    jwt.init(this.cas, this);
   
    this.middleware = {
      bounce : require('../middleware/bounce')(this.cas),
      block : require('../middleware/block'),
      admin : require('../middleware/admin')(this)
    }
  }

  /**
   * @method getJwtFromRequest
   * @description given a express request object, return a given jwt token.
   * Method will first check the request cookies of the jwt token cookie then
   * checks the Authorization header of the token.
   * 
   * @param {Object} req express request object
   * 
   * @returns {String|null} null if no token found.
   */
  getJwtFromRequest(req) {
    let token = req.cookies[config.jwt.cookieName];
    if( token ) return token;
    
    token = req.get('Authizoration');
    if( token ) return token.replace(/^Bearer /, '');

    return null;
  }

  /**
   * @method getUserFromRequest
   * @description given a express object, return the used object stored 
   * in the jwt token if exists. Throws error if invalid token found.
   * 
   * @param {Object} req express request object
   * @returns {Object} token payload
   */
  getUserFromRequest(req) {
    let token = this.getJwtFromRequest(req);
    if( !token ) return null;
    return jwt.validate(token);
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
   * @method localUserVerification
   * @description given a local account (stored in redis) username and password
   * verify password user and return user information
   * 
   * @param {String} username local username
   * @param {String} password
   * 
   * @returns {Object|false} false if not a username/password match
   */
  async localUserVerification(username, password) {
    var userinfo = await redis.get(this.USER_KEY_PREFIX+username);
    if( !userinfo ) return false;
    userinfo = JSON.parse(userinfo);
    var valid = await bcrypt.compare(password, userinfo.password);

    if( valid ) {
      delete userinfo.password;
      return userinfo;
    }
    return false;
  }

  /**
   * @method createLocalUser
   * @description create a local user account
   * 
   * @param {String} username 
   * @param {Password} password
   * 
   * @returns {Promise} 
   */
  async createLocalUser(username, password) {
    var userinfo = await redis.get(username);
    if( userinfo ) throw new Error('User already exists');

    password = await bcrypt.hash(password, this.saltRounds);
    var userinfo = JSON.stringify({username, password});
    await redis.set(this.USER_KEY_PREFIX+username, userinfo);
  }

  /**
   * @method updateLocalUser
   * @description update information stored with a local user account
   * 
   * @param {Object} userinfo
   * @param {String} userinfo.username 
   * @param {String} userinfo.password
   * @param {Boolean} merge merge or replace with new information
   * 
   * @return {Promise}
   */
  async updateLocalUser(userinfo, merge = true) {
    var existingUserInfo = await redis.get(this.USER_KEY_PREFIX+userinfo.username);
    if( !existingUserInfo ) throw new Error('User does not exist');

    if( userinfo.password ) {
      userinfo.password = await bcrypt.hash(userinfo.password, this.saltRounds);
    }

    if( merge ) {
      existingUserInfo = JSON.parse(existingUserInfo);
      for( var key in userinfo ) {
        existingUserInfo[key] = userinfo[key];
      }
      userinfo = existingUserInfo;
    }

    redis.set(userinfo.username, JSON.stringify(userinfo));
  }

  /**
   * @method getLocalUsers
   * @description get all local users for system
   * 
   * @returns {Array}
   */
  async getLocalUsers() {
    var list = await redis.keys(this.USER_KEY_PREFIX+'*');
    return list.map(user => user.replace(this.USER_KEY_PREFIX, ''));
  }

  /**
   * @method getLocalUser
   * @description return a local user account given username
   * 
   * @param {String} username
   * 
   * @returns {Object} information associated with account
   */
  async getLocalUser(username) {
    var userinfo = await redis.get(this.USER_KEY_PREFIX+username);
    if( !userinfo ) throw new Error('User does not already exist');
    userinfo = JSON.parse(userinfo);
    if( userinfo.password ) delete userinfo.password;
    return userinfo;
  }

  /**
   * @method removeLocalUser
   * @description remove a local user account by username.  returns
   * true if account was removed or throws an error is user doen't
   * exist
   * 
   * @param {String} username
   * 
   * @return {Boolean}
   */
  async removeLocalUser(username) {
    var userinfo = await redis.get(this.USER_KEY_PREFIX+username);
    if( !userinfo ) throw new Error('User does not already exist');
    await redis.del(username);
    return true;
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