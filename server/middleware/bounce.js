var jwt = require('../lib/jwt');
var config = require('../config');

// wrapper for case bounce
// setting our auth token
module.exports = (cas) => {
  return (req, res, next) => {
    // first check cookie
    var token = req.cookies[config.jwt.cookieName];

    if( !token ) {
      token = req.get('Authizoration');
      if( token ) token = token.replace(/^Bearer /, '');
    }

    // if valid jwt set in cookie, we are good to go
    if( token && jwt.validate(token) ) {
      return next();
    }

    // otherwise bounce to cas
    cas.bounce(req, res, () => {
      // after CAS module completes login flow,
      // set JWT cookie and retur
      setCookie(req, res);
      next();
    });
  }
}

function setCookie(req, res) {
  res.cookie(
    config.jwt.cookieName, 
    jwt.createFromCasRequest(req),
    {   
      httpOnly: true
      // domain: 'localhost',
      // secure: true     
    }
  );
}