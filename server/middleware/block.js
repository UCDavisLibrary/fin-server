var jwt = require('ucdlib-dams-utils/jwt');
var config = require('ucdlib-dams-utils/config');

module.exports = (req, res, next) => {
  // first check cookie
  var token = req.cookies[config.jwt.cookieName];

  if( !token ) {
    token = req.get('Authorization');
    if( token ) token = token.replace(/^Bearer /, '');
  }

  // if valid jwt set in cookie, we are good to go
  if( token && jwt.validate(token) ) {
    return next();
  }

  res.sendStatus(401);
}
