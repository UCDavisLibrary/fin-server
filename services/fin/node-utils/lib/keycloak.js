const fetch = require('node-fetch');
const config = require('../config.js');
const logger = require('./logger.js');
const jwt = require('./jwt.js');

// hack for self signed cert for now...
if( process.env.LOCAL_KEYCLOAK === 'true' ) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
}

class KeycloakUtils {

  constructor() {
    // we will cache all tokens for 5 seconds
    this.tokenCache = new Map();
    this.tokenCacheTTL = 1000*5;

    this.setUser = this.setUser.bind(this);
    this.protect = this.protect.bind(this);
  }

  async loginServiceAccount(username, secret) {
    let apiResp = await fetch(config.oidc.baseUrl+'/protocol/openid-connect/token', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },    
      body: new URLSearchParams({
        grant_type : 'password',
        client_id : config.oidc.clientId,
        client_secret : config.oidc.secret,
        username : username,
        password : secret,
        scope : config.oidc.scopes
      })
    });

    let json = await apiResp.json();

    return {
      body : json,
      status : apiResp.status
    }
  }

  async verifyActiveToken(token) {
    token = token.replace(/^Bearer /i, '');

    // 5 second caching
    if( this.tokenCache.has(token) ) {
      return this.tokenCache.get(token);
    }

    let resp = {};

    try {
      // short abort
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1000);

      resp = await fetch(config.oidc.baseUrl+'/protocol/openid-connect/userinfo', {
        signal: controller.signal,
        headers : {
          authorization : 'Bearer '+token
        }
      });
      clearTimeout(timeoutId);

      let body = await resp.text();

      let result = {
        active : resp.status === 200,
        status : resp.status,
        user : body ? JSON.parse(body) : null
      }

      this.tokenCache.set(token, result);
      
      setTimeout(() => {
        this.tokenCache.delete(token);
      }, this.tokenCacheTTL);
      
      return result;
    } catch(e) {
      if (e.name === 'AbortError' || e.name === 'FetchError') {
        logger.warn('Failed to verify jwt from keycloak, attempting pub key decryption')
        let user = await jwt.validate(token);
        if( user ) {
          return {
            active : true,
            status : 200,
            fallback : true,
            user
          }
        }
      }

      return {
        active : resp.status === 200,
        status : resp.status,
        user : null,
        error : true,
        message : e.message
      }
    }
  }

  async setUser(req, res, next) {
    if( req.headers['x-fin-user'] ) {
      req.user = JSON.parse(req.headers['x-fin-user']);
      if( !req.user.roles ) req.user.roles = [];

      return next();
    }

    let token = jwt.getJwtFromRequest(req);
    if( !token ) return next();

    let resp = await this.verifyActiveToken(token);
    if( resp.active !== true ) return next();

    req.user = resp.user;
    if( !resp.user.roles ) resp.user.roles = [];
    req.headers['x-fin-user'] = JSON.stringify(resp.user);

    next();
  }

  protect(roles=[]) {
    if( !Array.isArray(roles) ) {
      roles = [];
    }

    let authorize = function (req, res, next)  {
      this.setUser(req, res, () => {
        // no user
        if( !req.user ) return res.status(403).send();

        // there is a user and no roles required, good to go
        if( roles.length === 0 ) {
          return next();
        }

        for( let role of roles ) {
          if( req.user.roles.includes(role) ) {
            return next();
          }
        }

        return res.status(403).send();
      })
    };

    authorize = authorize.bind(this);
    return authorize;
  }

}

module.exports = new KeycloakUtils();