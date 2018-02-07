const {jwt} = require('@ucd-lib/fin-node-utils');

/**
 * Block user if not logged in
 */
module.exports = (req, res, next) => {
  let token = jwt.getJwtFromRequest(req);

  // if valid jwt set in cookie, we are good to go
  if( token && jwt.validate(token) ) {
    return next();
  }

  // not logged in
  res.sendStatus(401);
}
