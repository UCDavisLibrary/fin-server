const jwt = require('jsonwebtoken');
const config = require('../config');
const logger = require('./logger');
var jwksClient = require('jwks-rsa');


class JwtUtils {

  constructor() {
    if( config.jwt.jwksUri ) {
      this.jwksClient = jwksClient({
        jwksUri: config.jwt.jwksUri 
      });
      this._getSigningKey = this._getSigningKey.bind(this);
      setTimeout(() => this.signingKey = null, 1000);
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
    if( this.signingKey ) {
      callback(null, this.signingKey);
    }
    
    this.jwksClient.getSigningKey(header.kid, (err, key) => {
      if( err ) {
        return callback(err);
      }
      this.signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, this.signingKey);
    });
  }
}

module.exports = new JwtUtils();