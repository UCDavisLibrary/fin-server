var CASAuthentication = require('cas-authentication');
var bcrypt = require('bcrypt');
var jwt = require('./jwt');
var config = require('../config');
var redis = require('./redisClient');


class AuthUtils {

  constructor() {
    this.ADMIN_LIST_KEY = 'admins';
    this.USER_KEY_PREFIX = 'user_';
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

    this.loadAdmins();
  }

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

  async createLocalUser(username, password) {
    var userinfo = await redis.get(username);
    if( userinfo ) throw new Error('User already exists');

    password = await bcrypt.hash(password, this.saltRounds);
    var userinfo = JSON.stringify({username, password});
    await redis.set(this.USER_KEY_PREFIX+username, userinfo);
  }

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

  async getLocalUsers() {
    var list = await redis.keys(this.USER_KEY_PREFIX+'*');
    return list.map(user => user.replace(this.USER_KEY_PREFIX, ''));
  }

  async getLocalUser(username) {
    var userinfo = await redis.get(this.USER_KEY_PREFIX+username);
    if( !userinfo ) throw new Error('User does not already exist');
    userinfo = JSON.parse(userinfo);
    if( userinfo.password ) delete userinfo.password;
    return userinfo;
  }

  async removeLocalUser(username) {
    var userinfo = await redis.get(this.USER_KEY_PREFIX+username);
    if( !userinfo ) throw new Error('User does not already exist');
    await redis.del(username);
    return true;
  }

  async loadAdmins() {
    if( this.admins ) return;

    var admins = await redis.get(this.ADMIN_LIST_KEY);
    this.admins = admins ? JSON.parse(admins) : [];
  }

  async addAdmin(username) {
    if( this.isAdmin(username) ) return false;
    this.admins.push(username);
    await redis.set(this.ADMIN_LIST_KEY, JSON.stringify(this.admins));
    return true;
  }

  async removeAdmin(username) {
    var index = this.admins.indexOf(username);
    if( index === -1 ) return false;
    this.admins.splice(index, 1);
    await redis.set(this.ADMIN_LIST_KEY, JSON.stringify(this.admins));
    return true;
  }

  isAdmin(username) {
    return this.admins.indexOf(username) > -1;
  }
}

module.exports = new AuthUtils();