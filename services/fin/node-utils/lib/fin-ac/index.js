const pg = require('./pg.js');
const fcrepo = require('./fcrepo.js');

class FinAc {

  constructor() {
    pg.connect();
  }

  async setProtectedPath(path, agent) {
    path = await fcrepo.getFinAcPath(path);
    await fcrepo.setProtectedPath(path, agent);
    // await pg.setProtectedPath(path, isPublic=false);
  }

  async removeProtectedPath(path) {
    path = await fcrepo.getFinAcPath(path);
    await fcrepo.removeProtectedPath(path);
    // await pg.removeProtectPath(path);
  }

  // async grantAgentRole(agent, role, expire) {
  //   await pg.removeAgentRole(agent, role);
  //   await pg.grantAgentRole(agent, role, expire);
  // }

  async grantAccess(agent, path, expire) {
    path = await fcrepo.getFinAcPath(path);
    await pg.removeAccess(agent, path);
    await pg.grantAccess(agent, path, expire);
  }

  // async getGrants(query) {
  //   return pg.getGrants(query);
  // }

  async getAccess(path, finAcOnly=true) {
    path = await fcrepo.getFinAcPath(path);
    let ac = await fcrepo.getProtected(path, finAcOnly);
    if( !ac.length ) {
      return {
        path,
        protected: false
      };
    }

    ac = {
      path,
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

  async getAgentsAccess(agents, path) {
    path = await fcrepo.getFinAcPath(path);
    return pg.getAgentsAccess(agents, path);
  }

  async hasAccess(path, agents) {
    let result = await pg.getAgentsAccess(agents, path);
    if( result.length > 0 ) return true;
    return false;
  }

}

module.exports = FinAc;