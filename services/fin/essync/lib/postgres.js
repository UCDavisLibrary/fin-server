const {PG, logger} = require('@ucd-lib/fin-service-utils');
const pg = require('pg');

class EssyncPostgresUtils {

  constructor() {
    this.pg = new PG('essync');
    
  }

  async connect() {
    await this.pg.connect()
    await this.getEnumTypes()
  }

  /**
   * @method getEnumTypes
   * @description need to set parser for custom enum types
   */
  async getEnumTypes() {
    let resp = await this.pg.query('SELECT typname, oid, typarray FROM pg_type WHERE typname = \'text\'');
    let text = resp.rows[0];

    resp = await this.pg.query('SELECT typname, oid, typarray FROM pg_type WHERE typname = $1', ['fcrepo_update_type']);
    let eum = resp.rows[0];

    if( !eum ) {
      logger.warn('Unable to discover enum types, retrying in 2 sec');
      setTimeout(() => this.getEnumTypes(), 2000);
      return;
    }

    pg.types.setTypeParser(eum.typarray, pg.types.getTypeParser(text.typarray));
  }

  async nextLogItem() {
    let resp = await this.pg.query(`SELECT * FROM update_log order by updated limit 1`);
    if( !resp.rows.length ) return null;
    return resp.rows[0];
  }

  async clearLog(eventId) {
    await this.pg.query(`DELETE FROM update_log WHERE event_id = $1`, [eventId]);
  }

  /**
   * @method log
   * @description log events to be indexed by indexer
   * 
   * @param {Object} args 
   * @param {String} arg.event_id
   * @param {Date} args.event_timestamp
   * @param {String} args.path
   * @param {Array<String>} args.container_types
   * @param {Array<String>} args.update_types
   * 
   * @return {Promise}
   */
  async log(args) {
    let resp = await this.pg.query(`SELECT path FROM update_log where path = $1;`, [args.path]);

    if( resp.rows.length ) {
      await this.pg.query(`
      UPDATE update_log 
        SET (event_id, event_timestamp, container_types, update_types, updated) = ($2, $3, $4, $5, $6)
      WHERE 
        PATH = $1
    ;`, [args.path, args.event_id, args.event_timestamp, args.container_types, args.update_types, new Date().toISOString()]);
    } else {
      await this.pg.query(`
        INSERT INTO update_log (path, event_id, event_timestamp, container_types, update_types) 
        VALUES ($1, $2, $3, $4, $5)
      ;`, [args.path, args.event_id, args.event_timestamp, args.container_types, args.update_types]);
    }
  }

  /**
   * @method updateStatus
   * @description update indexer status
   * 
   * @param {Object} args 
   * @param {String} arg.event_id
   * @param {Date} args.event_timestamp
   * @param {String} args.path
   * @param {Array<String>} args.container_types
   * @param {Array<String>} args.update_types
   * @param {String} action
   * @param {String} message
   * 
   * @return {Promise}
   */
  async updateStatus(args) {
  let resp = await this.pg.query(`SELECT path FROM update_status where path = $1;`, [args.path]);

  if( resp.rows.length ) {
    await this.pg.query(`
        UPDATE update_status 
          SET (event_id, event_timestamp, container_types, update_types, action, message, es_response, updated) = ($2, $3, $4, $5, $6, $7, $8, $9)
        WHERE 
          PATH = $1
        ;`, [args.path, args.event_id, args.event_timestamp, args.container_types, args.update_types, args.action, args.message, args.response, new Date().toISOString()]
      );
    } else {
      await this.pg.query(`
        INSERT INTO update_status (path, event_id, event_timestamp, container_types, update_types, action, message, es_response) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ;`, [args.path, args.event_id, args.event_timestamp, args.container_types, args.update_types, args.action, args.message, args.response]
      );
    }
  }

  async getStatus(path) {
    let response = await this.pg.query(`select * from update_status where path = $1`, [path]);
    if( !response.rows.length ) return null;
    return response.rows[0];
  }


}

module.exports = new EssyncPostgresUtils();