const pg = require('pg');
const logger = require('./logger.js');
const config = require('../config.js');
const waitUntil = require('./wait-until.js');

const {Pool} = pg;

class PG {

  constructor() {
    this.pgLib = pg;
  }

  _initClient() {
    if( this.client ) return;

    this.client = new Pool({
      host : config.pg.host, 
      user : config.pg.user, 
      port : config.pg.port,
      database : config.pg.database,
      options : '--search_path='+config.pg.searchPath.join(','),
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

    if( this.connecting || this.wait ) {
      await this.wait;
      await this.connecting;
    } else {
      this._initClient();

      this.wait = waitUntil(config.pg.host, config.pg.port);
      await this.wait;

      logger.info('Connecting to postgresql');

      this.connecting = this.client.connect();
      this._client = await this.connecting;
      logger.info('Connected to postgresql');
      this.connecting = null;
      this.wait = null;
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

module.exports = new PG();