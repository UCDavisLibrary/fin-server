var jwt = require('jsonwebtoken');
var config = require('./config');
const logger = require('./logger')();

class JwtUtils {

  /**
   * Create a new jwt
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
   * Check if a token is valid
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