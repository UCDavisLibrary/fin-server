const pg = require('pg');
const logger = require('./logger.js');
const config = require('../config.js');

const {Pool} = pg;

class PG {

  // TODO: add opts for Client instead of pool
  // make sure to wrap end
  constructor(searchPath) {
    if( !searchPath ) searchPath = ['public'];
    if( typeof searchPath === 'string' ) {
      searchPath = [searchPath];
    }

    this.client = new Pool({
      host : config.pg.host, 
      user : config.pg.user, 
      port : config.pg.port,
      database : config.pg.database,
      options : '--search_path='+searchPath.join(','),
      max : 3
    });

    this.client.on('end', async () => {
      logger.info('Postgresql client end event');
    });
    this.client.on('error', async e => {
      logger.error('Postgresql client error event', e);
    });
  }

  async connect() {
    if( this.connected ) return;

    if( this.connecting ) {
      await this.connecting;
    } else {
      logger.info('Connecting to postgresql');
      this.connecting = this.client.connect();
      this._client = await this.connecting;
      logger.info('Connected to postgresql');
      this.connecting = null;
      this.connected = true;
    }
  }

  async query(query, params) {
    await this.connect();
    return this.client.query(query, params);
  }

  async end() {
    await this._client.release();
    await this.client.end();
    this._client = null;
    this.connected = false;
    this.connecting = null;
  }
}

module.exports = PG;