const {config, jwt} = require('@ucd-lib/fin-service-utils');
const auth = require('../../models/auth');

/**
 * Only allow admin users
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = (req, res, next) => {
  let token = jwt.getJwtFromRequest(req);
  
  if( token ) {
    let user = jwt.validate(token);
    if( user && user.admin ) {
      return next();
    }
  }

  res.sendStatus(403);
}
