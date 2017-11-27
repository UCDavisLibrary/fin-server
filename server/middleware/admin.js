var authUtils = require('../lib/auth');
const {config} = require('@ucd-lib/fin-node-utils');

module.exports = (authUtils) => {
  return async (req, res, next) => {
    // first check cookie
    var token = req.cookies[config.jwt.cookieName];

    if( !token ) {
      token = req.get('Authizoration');
      if( token ) token = token.replace(/^Bearer /, '');
    }

    if( token ) {
      var info = authUtils.jwt.validate(token);
      var isAdmin = await authUtils.isAdmin(info.username);
      if( info &&  isAdmin) {
        return next();
      }
    }

    res.sendStatus(401);
  }
}
