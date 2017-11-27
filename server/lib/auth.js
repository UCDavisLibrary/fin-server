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

  async refreshTokenVerification(username, token) {
    let key = this.REFRESH_TOKEN_PREFIX+token;
    var keyusername = await redis.get(key);
    return (keyusername === username);
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
    var admins = await redis.get(this.ADMIN_LIST_KEY);
    return admins ? JSON.parse(admins) : [];
  }

  async addAdmin(username) {
    var admins = await this.loadAdmins();
    if( admins.indexOf(username) > -1 ) return false;
    
    admins.push(username);
    await redis.set(this.ADMIN_LIST_KEY, JSON.stringify(admins));

    return true;
  }

  async removeAdmin(username) {
    var admins = await this.loadAdmins();
    var index = admins.indexOf(username);
    if( index === -1 ) return false;

    admins.splice(index, 1);
    await redis.set(this.ADMIN_LIST_KEY, JSON.stringify(admins));

    return true;
  }

  async isAdmin(username) {
    var admins = await this.loadAdmins();

    return admins.indexOf(username) > -1;
  }
}

module.exports = new AuthUtils();