const {jwt, FinAC, config} = require('@ucd-lib/fin-service-utils');
const finac = new FinAC();

async function roles(req, res, next) {
  let user = await jwt.getUserFromRequest(req);
  if( !user ) {
    req.esRoles = [config.finac.agents.public];
    return next();
  }

  req.user = user;

  let agents = [];
  if( user.username || user.preferred_username ) agents.push(user.username || user.preferred_username);
  (user.roles || []).forEach(role => agents.push(role));

  // now add finac grants
  let access = (await finac.getAgentsAccess(agents))
    .map(item => config.finac.agents.protected+'-'+item.path);

  // add roles to access excluding special roles
  agents.forEach(role => {
    if( config.finac.agents[role] ) return;
    access.push(role);
  });
  access.push(config.finac.agents.public);

  req.esRoles = access;
  next();
}

module.exports = {roles};