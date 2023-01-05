const config = require('../../config.js');
const FinAC = require('./index.js');
const finac = new FinAC();

async function esRoles(req, res, next) {
  let user = req.user;
  if( !user ) {
    req.esRoles = [config.finac.agents.public];
    return next();
  }


  let agents = new Set();
  if( user.username ) agents.add(user.username);
  if( user.preferred_username ) agents.add(user.preferred_username);
  (user.roles || []).forEach(role => agents.add(role));
  agents = Array.from(agents);

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

module.exports = {esRoles};