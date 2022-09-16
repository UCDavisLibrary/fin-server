var {config, jwt} = require('@ucd-lib/fin-node-utils');

class AuthUtils {
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
}

module.exports = new AuthUtils();