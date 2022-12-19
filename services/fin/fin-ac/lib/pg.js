const {config, pg} = require('@ucd-lib/fin-service-utils');
const SCHEMA = 'finac';

class FinAcPg {

  setProtectedPath(path, public) {
    return pg.query(`INSERT INTO ${SCHEMA}.protected (path, public_metadata) VALUES ($1, $2)`, [path, public]);
  }

  async removeProtectedPath(path) {
    await pg.query(`DELETE FROM ${SCHEMA}.protected WHERE path = $1`, [path]);
    await pg.query(`DELETE FROM ${SCHEMA}.access WHERE path = $1`, [path]);
  }

  getProtected(path) {
    let result = pg.query(`SELECT * FROM ${SCHEMA}.access WHERE path = $1`, [path]);
    if( !result.rows.length ) return null;
    return results.rows[0]
  }

  async grantAgentRole(agent, role, expire) {
    if( !expire ) expire = config.finac.defaultAccessTime;
    expire = new Date(Date.now() + (expire*1000));
    return pg.query(`INSERT INTO ${SCHEMA}.grant (agent, role, expire) VALUES ($1, $2, $3)`, [agent, role, expire]);
  }

  async removeAgentRole(agent, role) {
    let params = [agent];

    let roleQuery = '';
    if( role === '*' ) {
      roleQuery = '';
    } else {
      roleQuery = 'AND role = $2';
      params.push(role);
    }

    return pg.query(`DELETE FROM grant WHERE agent = $1 ${roleQuery}`, params);
  }

  async grantAccess(agent, path, expire) {
    if( !expire ) expire = config.finac.defaultAccessTime;
    expire = new Date(Date.now() + (expire*1000));
    return pg.query(`INSERT INTO ${SCHEMA}.access (agent, path, expire) VALUES ($1, $2, $3)`, [agent, path, expire]);
  }

  removeAccess(agent, path) {
    return pg.query(`DELETE FROM access WHERE agent = $1 and path = $2`, [agent, path]);
  }

  async getGrants(query) {
    let where = '';
    let value = ''
    if( query.role ) {
      value = query.role
      where = 'WHERE role = $1';
    } else if( query.agent ) {
      value = query.agent
      where = 'WHERE agent = $1';
    } else {
      throw new Error('Invalid query object: '+JSON.stringify(query));
    }

    let result = await pg.query('SELECT * FROM current_grants '+where, [value]);
    return result.rows;
  }

  async getAccess(path) {
    let result = await pg.query('SELECT * FROM current_access WHERE path = $1', [path]);
    return result.rows;
  }

  async getAgentsAccess(path, agents) {
    let result = await pg.query('SELECT * FROM current_access WHERE path = $1 AND agent = ANY($2) ', [path, agents]);
    return result.rows;
  }

}

module.exports = new FinAcPg();