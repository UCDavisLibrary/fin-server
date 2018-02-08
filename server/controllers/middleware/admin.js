const {config, jwt} = require('@ucd-lib/fin-node-utils');
const auth = require('../../models/auth');

/**
 * Only allow admin users
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = async (req, res, next) => {
  let token = jwt.getJwtFromRequest(req);

  if( token ) {
    let user = jwt.validate(token);
    if( user ) {
      let isAdmin = await auth.isAdmin(user.username);
      if( isAdmin) return next();
    }
  }

  res.sendStatus(401);
}