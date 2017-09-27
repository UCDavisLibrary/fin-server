var authUtils = require('../lib/auth');
var config = require('../config');

module.exports = (authUtils) => {
  return (req, res, next) => {
    // first check cookie
    var token = req.cookies[config.jwt.cookieName];

    if( !token ) {
      token = req.get('Authizoration');
      if( token ) token = token.replace(/^Bearer /, '');
    }
    
    if( token ) {
      var info = authUtils.jwt.validate(token);
      if( info && authUtils.isAdmin(info.username) ) {
        return next();
      }
    }

    res.sendStatus(401);
  }
  }
