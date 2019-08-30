const bcrypt = require('bcrypt');
const {config, jwt, logger} = require('@ucd-lib/fin-node-utils');
const api = require('@ucd-lib/fin-node-api');
const ContainerHelper = require('@ucd-lib/fin-node-api/lib/utils/ContainerHelper');
const redis = require('../lib/redisClient');
const crypto = require('crypto');

// const BASE_URI = config.fcrepo.host+config.fcrepo.root;
const AUTHORIZATION_TYPE = 'http://www.w3.org/ns/auth/acl#Authorization';
const WEBAC_TYPE = 'http://fedora.info/definitions/v4/webacAcl';
const AGENT = 'http://www.w3.org/ns/auth/acl#agent';
const AGENT_CLASS = 'http://www.w3.org/ns/auth/acl#agentClass';
const WRITE = 'http://www.w3.org/ns/auth/acl#Write';
const MODE = 'http://www.w3.org/ns/auth/acl#mode';
const MEMBER = 'http://xmlns.com/foaf/0.1/member';
const GROUP = 'http://xmlns.com/foaf/0.1/Group';
const SERVICE = 'http://digital.ucdavis.edu/schema#Service';
const COLLECTION = 'http://schema.org/Collection';

class AuthModel {

  constructor() {
    this.ADMIN_LIST_KEY = 'admins';
    this.REFRESH_TOKEN_PREFIX = 'rtoken:';

    redis.config('SET', 'save', '60 1 30 10');

    this.webac = {};
    this.admins = [];
    this.refreshTimer = -1;
  }

  init() {
    return this.refreshInMemAcl();
  }

  onContainerUpdate(event) {
    let types = event.payload.body.type || [];

    if( types.indexOf(GROUP) > -1 ) {
      return this.refreshInMemAclDebounce();
    }
    if( types.indexOf(AUTHORIZATION_TYPE) ) {
      return this.refreshInMemAclDebounce();
    }
    if( types.indexOf(WEBAC_TYPE) ) {
      return this.refreshInMemAclDebounce();
    }
    if( types.indexOf(SERVICE) ) {
      return this.refreshInMemAclDebounce();
    }
    if( types.indexOf(COLLECTION) ) {
      return this.refreshInMemAclDebounce();
    }
  }

  refreshInMemAclDebounce() {
    if( this.refreshTimer !== -1 ) clearTimeout(this.refreshTimer);
    this.refreshTimer = setTimeout(() => {
      this.refreshTimer = -1;
      this.refreshInMemAcl();
    }, 5000);
  }

  async refreshInMemAcl() {
    logger.info('Refreshing webac in memory cache');
    this.webac = await api.acl.getAll();

    // set admin list
    this.admins = [];
    if( !this.webac['/'] ) return;
    for( let container of this.webac['/'] ) {
      container = new ContainerHelper(container);

      // this is not a authorization container
      if( !container.isType(AUTHORIZATION_TYPE) ) continue;

      // make sure authorization is write access
      let modes = container.getValue(MODE) || [];
      if( modes.indexOf(WRITE) === -1 ) continue;
      
      // add all agents
      this.admins = this.admins.concat(container.getValue(AGENT) || []);
      
      // find all groups and add group members as well
      let groups = container.getValue(AGENT_CLASS) || [];
      for( let group of groups ) {
        group = this.webac['/'].find(item => item['@id'] === group);
        if( !group ) continue;
        group = new ContainerHelper(group);
        this.admins = this.admins.concat(group.getValue(MEMBER));
      }
    }

    logger.info('Refresh webac in memory cache complete, admins: ', this.admins);
  }

  getUserAcl(username) {
    let groups = [];
    let access = {};
    for( let path in this.webac ) {
      if( !this.webac[path] ) continue;
      for( let container of this.webac[path] ) {
        container = new ContainerHelper(container);
        if( container.isType(AUTHORIZATION_TYPE) ) {
          if( !this._userInAuthorization(path, container, username) ) continue;
          if( !access[path] ) access[path] = '';

          access[path] = (container.getValue(MODE) || [])
            .map(v => v.replace(/.*#/,'')[0].toLowerCase())
            .join('');
        } else if( container.isType(GROUP) ) {
          if( (container.getValue(MEMBER) || []).indexOf(username) > -1 ) {
            groups.push(container.getFinPath());
          }
        }
      }
    }

    return {groups, acl: access};
  }

  _userInAuthorization(path, container, username) {
    if( (container.getValue(AGENT) || []).indexOf(username) > -1 ) return true;
    let groups = container.getValue(AGENT_CLASS) || [];
    for( let group of groups ) {

      group = this.webac[path].find(item => item['@id'] === group);
      if( !group ) continue;
      group = new ContainerHelper(group);
      if( (group.getValue(MEMBER) || []).indexOf(username) > -1 ) {
        return true;
      }
    }
    return false;
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