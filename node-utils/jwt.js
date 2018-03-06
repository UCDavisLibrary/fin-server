const jwt = require('jsonwebtoken');
const config = require('./config');
const logger = require('./logger');

class JwtUtils {

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
    if( token ) return token.replace(/^Bearer /, '');

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
   * @param {Boolean} admin admin flag, set true for admin privileges 
   * 
   * @return {String} new jwt token
   */
  create(username, admin) {
    var user = { username }

    if( admin === true ) {
       user.admin = true;
    }

    return jwt.sign(
      user, 
      config.jwt.secret, 
      {
        issuer: config.jwt.issuer,
        expiresIn: config.jwt.ttl
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
  validate(token) {
    try {
      token = jwt.verify(token, config.jwt.secret);
      var issuer = token.iss;
      if( issuer !== config.jwt.issuer ) {
        logger.info('Invalid JWT Token:', `Invalid issuer: ${issuer}/${config.jwt.issuer}`);
        return false;
      }
      if( !token.username ) {
        logger.info('Invalid JWT Token:', `No username provided`);
        return false;
      }
    } catch(e) {
      logger.info('Invalid JWT Token:', e.message);
      return false;
    }

    return token;
  }
}

module.exports = new JwtUtils();