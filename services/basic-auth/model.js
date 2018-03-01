var bcrypt = require('bcrypt');
var {config, jwt} = require('@ucd-lib/fin-node-utils');
var redis = require('./lib/redisClient');

class AuthModel {
  
  constructor() {
    this.USER_KEY_PREFIX = 'basic-auth:';
    this.saltRounds = 10;
  }

  /**
   * @method userVerification
   * @description given a user account (stored in redis) username and password
   * verify password user and return user information
   * 
   * @param {String} username local username
   * @param {String} password
   * 
   * @returns {Object|false} false if not a username/password match
   */
  async userVerification(username, password) {
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
   * @method createUser
   * @description create a user account
   * 
   * @param {String} username 
   * @param {String} email used to reset password 
   * @param {String} password
   * 
   * @returns {Promise} 
   */
  async createUser(username='', email='', password='') {
    if( username.length < 3 ) throw new Error('Username must be at least 3 characters');
    if( password.length < 6 ) throw new Error('Password must be at least 6 characters');

    var userinfo = await redis.get(username);
    if( userinfo ) throw new Error('User already exists');

    password = await bcrypt.hash(password, this.saltRounds);
    var userinfo = JSON.stringify({username, email, password});
    await redis.set(this.USER_KEY_PREFIX+username, userinfo);
  }

  /**
   * @method updateUser
   * @description update information stored with a user account
   * 
   * @param {Object} userinfo
   * @param {String} userinfo.username 
   * @param {String} userinfo.email 
   * @param {String} userinfo.password
   * @param {Boolean} merge merge or replace with new information
   * 
   * @return {Promise}
   */
  async updateUser(userinfo, merge = true) {
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
   * @method getUsers
   * @description get all users
   * 
   * @returns {Array}
   */
  async getUsers() {
    var list = await redis.keys(this.USER_KEY_PREFIX+'*');
    return list.map(user => user.replace(this.USER_KEY_PREFIX, ''));
  }

  /**
   * @method getUser
   * @description return a user account given username
   * 
   * @param {String} username
   * 
   * @returns {Object} information associated with account
   */
  async getUser(username) {
    var userinfo = await redis.get(this.USER_KEY_PREFIX+username);
    if( !userinfo ) throw new Error('User does not already exist');
    userinfo = JSON.parse(userinfo);
    if( userinfo.password ) delete userinfo.password;
    return userinfo;
  }

  /**
   * @method removeUser
   * @description remove a user account by username.  returns
   * true if account was removed or throws an error is user doen't
   * exist
   * 
   * @param {String} username
   * 
   * @return {Boolean}
   */
  async removeUser(username) {
    var userinfo = await redis.get(this.USER_KEY_PREFIX+username);
    if( !userinfo ) throw new Error('User does not already exist');
    await redis.del(username);
    return true;
  }
}

module.exports = new AuthModel();