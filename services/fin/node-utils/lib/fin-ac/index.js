const pg = require('./pg.js');
const fcrepo = require('./fcrepo.js');

class FinAc {

  constructor() {
    pg.connect();
  }

  async setProtectedPath(path, agent) {
    await fcrepo.setProtectedPath(path, agent);
    // await pg.setProtectedPath(path, isPublic=false);
  }

  async removeProtectPath(path) {
    await fcrepo.removeProtectPath(path, agent);
    // await pg.removeProtectPath(path);
  }

  async grantAgentRole(agent, role, expire) {
    await pg.removeAgentRole(agent, role);
    await pg.grantAgentRole(agent, role, expire);
  }

  async grantAccess(agent, path, expire) {
    await pg.removeAccess(agent, path);
    await pg.grantAccess(agent, path, expire);
  }

  async getGrants(query) {
    return pg.getGrants(query);
  }

  async getAccess(path) {
    let ac = await pg.getProtected(path);
    if( !ac ) {
      return {protected: false};
    }
    ac.protected = true;
    ac.access = await pg.getAccess(path);

    return ac;
  }

  async hasAccess(path, agents) {
    let result = await pg.getAgentsAccess(path, agents);
    if( result.length > 0 ) return true;
    return false;
  }

}

module.exports = FinAc;