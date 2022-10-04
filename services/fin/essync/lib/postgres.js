const {PG} = require('@ucd-lib/fin-service-utils');

class EssyncPostgresUtils {

  constructor() {
    this.pg = new PG('essync');
    this.pg.connect();
  }

  async log(headers, body) {
    let path = headers['org.fcrepo.jms.identifier'];
    console.log(path);
    let ctypes = headers['org.fcrepo.jms.resourceType'].split(',').map(item => item.trim());
    let utype = body.type[body.type.length-1];

    let resp = await this.pg.query(`SELECT path FROM update_log where path = $1;`, [path]);

    if( resp.rows.length ) {
      await this.pg.query(`
      UPDATE update_log 
        SET (update_type, container_types, date) = ($2, $3, $4)
      WHERE 
        PATH = $1
    ;`, [path, utype, ctypes, new Date().toISOString()]);
    } else {
      await this.pg.query(`
        INSERT INTO update_log (path, update_type, container_types) 
        VALUES ($1, $2, $3)
      ;`, [path, utype, ctypes]);
    }
  }

}

module.exports = new EssyncPostgresUtils();