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

  async removeProtectedPath(path) {
    await fcrepo.removeProtectedPath(path);
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

  async getAccess(path, finAcOnly=true) {
    let ac = await fcrepo.getProtected(path, finAcOnly);
    if( !ac.length ) {
      return {protected: false};
    }

    ac = {
      protected: true,
      readAuthorizations: ac
    }

    ac.access = (await pg.getAccess(path))
      .map(item => ({
        created : item.created,
        expire : item.expire,
        agent : item.agent
      }));
    return ac;
  }

  getAgentsAccess(agents, path) {
    return pg.getAgentsAccess(agents, path);
  }

  async hasAccess(path, agents) {
    let result = await pg.getAgentsAccess(agents, path);
    if( result.length > 0 ) return true;
    return false;
  }

}

module.exports = FinAc;