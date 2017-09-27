var jwt = require('jsonwebtoken');
var config = require('../config');

class JwtUtils {

  init(cas, authUtils) {
    this.cas = cas;
    this.authUtils = authUtils;
  }

  createFromCasRequest(req) {
    if( !this.cas.session_name ) return null;
    if( !req.session[ this.cas.session_name ] ) return null;

    var username = req.session[this.cas.session_name];
    var admin = false;
    if( this.authUtils.isAdmin(username) ) {
      admin = true;
   }

    return this.create(username, admin);
  }

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

  validate(token) {
    try {
      token = jwt.verify(token, config.jwt.secret);
      var issuer = token.iss;
      if( issuer !== config.jwt.issuer ) {
        console.log('Invalid JWT Token:', `Invalid issuer: ${issuer}/${config.jwt.issuer}`);
        return false;
      }
    } catch(e) {
      console.log('Invalid JWT Token:', e.message);
      return false;
    }

    return token;
  }
}

module.exports = new JwtUtils();