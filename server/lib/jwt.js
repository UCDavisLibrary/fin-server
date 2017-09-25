var jwt = require('jsonwebtoken');
var config = require('../config');

var adminList = ['qjhart', 'jrmerz'];

class JwtUtils {

  init(cas) {
    this.cas = cas;
  }

  createFromCasRequest(req) {
    if( !this.cas.session_name ) return null;
    if( !req.session[ this.cas.session_name ] ) return null;

    var username = req.session[this.cas.session_name];
    var admin = false;
    if( adminList.indexOf(username) > -1 ) {
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
      var issuer = jwt.verify(token, config.jwt.secret).iss;
      if( issuer !== config.jwt.issuer ) {
        console.log('Invalid JWT Token:', `Invalid issuer: ${issuer}/${config.jwt.issuer}`);
        return false;
      }
    } catch(e) {
      console.log('Invalid JWT Token:', e.message);
      return false;
    }

    return true;
  }
}

module.exports = new JwtUtils();