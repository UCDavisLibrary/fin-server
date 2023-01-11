const api = require('@ucd-lib/fin-api');
const {pg, logger} = require('@ucd-lib/fin-service-utils');
const crypto = require('crypto');

pg.connect();

class LabelService {

  constructor() {
    this.schema = 'label_service';
    this.TYPES = [
      'http://schema.org/name',
      'http://www.w3.org/2000/01/rdf-schema#label'
    ];
  }

  async load(containerUri) {
    let hostRoot = api.getConfig().host+api.getConfig().fcBasePath;
    if( !containerUri.match(/^http(s)?:\/\//) ) {
      containerUri = hostRoot+containerUri;
    }
    let containerPath = containerUri.replace(hostRoot, '');

    let container = await api.get({
      path: containerPath,
      headers: {accept: api.RDF_FORMATS.JSON_LD}
    });

    if( container.data.statusCode !== 200 ) {
      return logger.error('Failed to load container into label service: '+containerPath)
    }

    let hash = crypto.createHash('sha256');
    hash.update(container.data.body);
    let containerSha = hash.digest('hex');

    let shaok = await this.checkSha(containerPath, containerSha);
    if( shaok ) return;

    container = JSON.parse(container.data.body);
    if( container['@graph'] ) container = container['@graph'];
    if( !Array.isArray(container) ) container = [container];

    for( let node of container ) {
      for( let type of this.TYPES ) {
        if( !node[type] ) continue;

        await pg.query(
          `INSERT INTO ${this.schema}.label (container, subject, predicate, object) values ($1, $2, $3, $4)`,
          [containerPath, node['@id'], type, JSON.stringify(node[type])]
        );
      }
    }
  }

  /**
   * @method render
   * @description render a label
   * 
   * @param {String} uri uri for label
   * @param {Object} opts 
   */
  async render(uri, opts={}) {
    let resp = await pg.query(`SELECT * FROM ${this.schema}.label WHERE subject = $1`, [uri]);
    resp.rows.forEach(item => {
      item.object = JSON.parse(item.object);
    });
    return resp.rows;
  }

  async checkSha(uri, sha) {
    let resp = await pg.query(`SELECT * FROM ${this.schema}.label_container WHERE uri = $1`, [uri]);
    if( !resp.rows.length ) {
      await this.cleanContainer(uri, sha);
      return false;
    }

    let currentSha = resp.rows[0].sha;
    if( currentSha === sha ) return true;

    // run cleanup after sha mismatch
    await this.cleanContainer(uri, sha);

    return false;
  }

  async cleanContainer(uri, sha) {
    await pg.query(`DELETE FROM ${this.schema}.label WHERE container = $1`, [uri]);
    await pg.query(`DELETE FROM ${this.schema}.label_container WHERE uri = $1`, [uri]);
    await pg.query(`INSERT INTO ${this.schema}.label_container (uri, sha) VALUES ($1, $2)`, [uri, sha]);
  }

}

module.exports = new LabelService();