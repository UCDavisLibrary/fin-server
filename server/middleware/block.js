const {jwt, config} = require('@ucd-lib/fin-node-utils');
const auth = require('../lib/auth');

/**
 * Block user if not logged in
 */
module.exports = (req, res, next) => {
  let token = auth.getJwtFromRequest(req);

  // if valid jwt set in cookie, we are good to go
  if( token && jwt.validate(token) ) {
    return next();
  }

  // not logged in
  res.sendStatus(401);
}
