var jwt = require('ucdlib-dams-utils/jwt');
var config = require('ucdlib-dams-utils/config');

// wrapper for case bounce
// setting our auth token
module.exports = (cas) => {
  return (req, res, next) => {
    var force = (req.query.force === 'true');

    if( !force ) {
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
    }
    
    // hack
    req.url = req.originalUrl;

    // otherwise bounce to cas
    cas.bounce(req, res, async () => {
      // after CAS module completes login flow,
      // set JWT cookie and retur
      await setCookie(req, res);
      next();
    });
  }
}

async function setCookie(req, res) {
  var newJwt = await jwt.createFromCasRequest(req);
  
  res.cookie(
    config.jwt.cookieName, 
    newJwt,
    {   
      httpOnly: true
      // domain: 'localhost',
      // secure: true     
    }
  );
}