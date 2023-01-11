const jwt = require('jsonwebtoken');
const config = require('../config');
const logger = require('./logger');
const jwksClient = require('jwks-rsa');
const fetch = require('node-fetch');
const waitUntil = require('./wait-until');

class JwtUtils {

  constructor() {
    if( config.jwt.jwksUri ) {
      this.jwksClient = jwksClient({
        cache: false,
        jwksUri: config.jwt.jwksUri,
        getKeysInterceptor: () => {
          if( this.signingKey ) {
            return this.signingKey.keys;
          }
          return null;
        }
      });
      
      this.signingKeyFail = false;
      this._getSigningKey = this._getSigningKey.bind(this);
      this.getSigningKey(config.jwt.jwksUri);
      setInterval(() => this.getSigningKey(config.jwt.jwksUri), 1000*60);
    }
  }

  async getSigningKey(url) {
    logger.debug('Fetching rsa signing key from: '+url);

    let parts = new URL(url);
    await waitUntil(parts.hostname, parts.port || 80);

    try {
      let resp = await fetch(url);

      let hasSigningKey = this.signingKey ? true : false;
      this.signingKey = await resp.json();

      if( hasSigningKey === false ) {
        logger.info('Successfully fetched rsa signing key when none was present from: '+url);
      }

      this.signingKeyFail = false;
    } catch(e) {
      // no need to keep loging failures
      if( this.signingKeyFail === true && this.signingKey === null ) {
        return;
      }

      if( this.signingKeyFail === false ) {
        logger.warn('Failed to fetch signing key.  First attempt', e);
        this.signingKeyFail = true;
      } else {
        logger.warn('Failed to fetch signing key.  Final attempt, invalidating key', e);
        this.signingKey = null;
      }
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
    if( !req.cookies ) return null;

    let token = req.cookies[config.jwt.cookieName];
    if( token ) return token;
    
    token = req.get('Authorization');
    if( token && token.match(/^Bearer /i) ) {
      return token.replace(/^Bearer /i, '');
    }

    return null;
  }

  /**
   * @method getUserFromRequest
   * @description given a express object, return the used object stored 
   * in the jwt token if exists. Throws error if invalid token found.
   * 
   * @param {Object} req express request object
   * @returns {Boolean|Object} token payload if valid, otherwise false
   */
  getUserFromRequest(req) {
    let token = this.getJwtFromRequest(req);
    if( !token ) return null;
    return this.validate(token);
  }


  /**
   * @method create
   * @description create a new JWT token
   * 
   * @param {String} username username to create token for
   * @param {Array} roles 
   * 
   * @return {String} new jwt token
   */
  create(username, roles = [], expires) {
    var user = { username, roles }
    return jwt.sign(
      user, 
      config.jwt.secret, 
      {
        issuer: config.jwt.issuer,
        expiresIn: expires || config.jwt.ttl
      }
    );
  }

  /**
   * @method validate
   * @description validate a JWT token
   * 
   * @param {String} token jwt token to validate
   * 
   * @return {Boolean|Object} returns false if invalid or token payload if valid.
   */
  async validate(token) {
    // TODO: fix this!
    // we need service accounts and never allow secret below
    if( config.jwt.jwksUri ) {
      try {
        return await this.verifyJwksUriToken(token);
      } catch(e) {}
    }

    // todo: user issuer to check for this.
    try {
      token = jwt.verify(token, config.jwt.secret);
    } catch(e) {
      logger.debug('Invalid JWT Token:', e.message);
      return false;
    }

    return token;
  }

  verifyJwksUriToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this._getSigningKey, {}, function(err, decoded) {
        if( err ) {
          logger.debug('Invalid JWT Token: '+err.message);
          reject(false);
        } else {
          resolve(decoded);
        }
      });
    });
  }

  _getSigningKey(header, callback) {    
    this.jwksClient.getSigningKey(header.kid, (err, key) => {
      if( err ) {
        return callback(err);
      }
      callback(null, key.publicKey || key.rsaPublicKey);
    });
  }
}

module.exports = new JwtUtils();