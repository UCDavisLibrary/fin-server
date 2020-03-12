const api = require('@ucd-lib/fin-node-api');
const {config, jwt} = require('@ucd-lib/fin-node-utils');
const path = require('path');

api.setConfig({
  host: config.fin.host
});

class LdpWorkflow {

  constructor() {
    this.ROOT = '/.workflow';
    this.setJwt();
  }

  setJwt() {
    api.setConfig({
      jwt: jwt.create('ldp-workflow', true)
    });
    setInterval(() => this.setJwt(), 1000*60*60);
  }

  async update(id, jsonld) {
    if( typeof jsonld !== 'object' ) jsonld = JSON.parse(jsonld);
    if( Array.isArray(jsonld) ) jsonld = jsonld[0];

    let response = await api.get({
      path: id,
      headers : {
        accept : 'application/ld+json',
        prefer : 'return=minimal'
      }
    });
    if( !response.checkStatus(200) ) {
      throw new Error(`Unable to load LDP workflow ${id}.  HTTP ${response.last.statusCode}: ${response.last.body}`);
    }

    let cJsonld = JSON.parse(response.last.body)[0];
    jsonld = Object.assign(cJsonld, jsonld);
    jsonld['@id'] = '';

    response = await api.put({
      path: this._appendWorkflowNs(id),
      headers : {
        'content-type': 'application/ld+json',
        'prefer' : 'handling=lenient; received="minimal"'
      },
      content : JSON.stringify(jsonld)
    });
    if( !response.checkStatus(204) ) {
      throw new Error(`Unable to update LDP workflow ${id}.  HTTP ${response.last.statusCode}: ${response.last.body}`);
    }
  }

  async delete(id) {
    return api.delete({
      path: this._appendWorkflowNs(id),
      permanent: true
    })
  }

  _appendWorkflowNs(id) {
    if( id.startsWith(this.ROOT) ) return id;
    return path.join(this.ROOT, id);
  }

}

module.exports = new LdpWorkflow();