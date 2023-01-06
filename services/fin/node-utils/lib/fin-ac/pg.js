const pg = require('../pg');
const config = require('../../config.js');
const SCHEMA = 'finac';


class FinAcPg {

  connect() {
    return pg.connect();
  }

  // setProtectedPath(path, isPublic) {
  //   return pg.query(`INSERT INTO ${SCHEMA}.protected (path, public_metadata) VALUES ($1, $2)`, [path, isPublic]);
  // }

  // async removeProtectedPath(path) {
  //   await pg.query(`DELETE FROM ${SCHEMA}.protected WHERE path = $1`, [path]);
  //   await pg.query(`DELETE FROM ${SCHEMA}.access WHERE path = $1`, [path]);
  // }

  // async getProtected(path) {
  //   let result = await pg.query(`SELECT * FROM ${SCHEMA}.protected WHERE path = $1`, [path]);
  //   if( !result.rows.length ) return null;
  //   return result.rows[0]
  // }

  async grantAgentRole(agent, role, expire) {
    if( !expire ) expire = config.finac.defaultAccessTime;
    expire = new Date(Date.now() + (expire*1000));
    return pg.query(`INSERT INTO ${SCHEMA}."grant" (agent, role, expire) VALUES ($1, $2, $3)`, [agent, role, expire]);
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

    return pg.query(`DELETE FROM ${SCHEMA}."grant" WHERE agent = $1 ${roleQuery}`, params);
  }

  async grantAccess(agent, path, expire) {
    if( !expire ) expire = config.finac.defaultAccessTime;
    expire = new Date(Date.now() + (expire*1000));
    return pg.query(`INSERT INTO ${SCHEMA}.access (agent, path, expire) VALUES ($1, $2, $3)`, [agent, path, expire]);
  }

  removeAccess(agent, path) {
    return pg.query(`DELETE FROM ${SCHEMA}.access WHERE agent = $1 and path = $2`, [agent, path]);
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

    let result = await pg.query(`SELECT * FROM ${SCHEMA}.current_grants `+where, [value]);
    return result.rows;
  }

  async getAccess(path) {
    let result = await pg.query(`SELECT * FROM ${SCHEMA}.current_access WHERE path = $1`, [path]);
    return result.rows;
  }

  async getAgentsAccess(agents, path) {
    let params = [agents];
    let pathQuery = '';

    if( path ) {
      params.push(path);
      pathQuery = 'AND path = $2';
    }

    let result = await pg.query(`SELECT * FROM ${SCHEMA}.current_access WHERE agent = ANY($1) ${pathQuery}`, params);
    return result.rows;
  }

}

module.exports = new FinAcPg();