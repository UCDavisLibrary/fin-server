const jwt = require('./jwt.js');

function auth(config) {
  return (req, res, next) => {
    let token = jwt.getJwtFromRequest(req);
    if( !token ) return res.status(401).send();

    token = jwt.validate(token);
    if( !token ) return res.status(401).send();

    req.user = token;

    if( !config ) return next();

  }
}