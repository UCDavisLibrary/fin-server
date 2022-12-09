const config = require('../config.js');
const api = require('@ucd-lib/fin-api');
const {activemq, waitUntil} = require('@ucd-lib/fin-service-utils');

const CONTAINS = 'http://www.w3.org/ns/ldp#contains';
const BINARY = 'http://fedora.info/definitions/v4/repository#Binary';
const MIME_TYPE = 'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasMimeType'

api.setConfig({
  host: config.fcrepo.host,
  basePath : config.fcrepo.root,
  directAccess : true
});

class AppConfig {

  constructor() {
    activemq.onMessage(e => this.handleMessage(e));
    activemq.connect('ucd-lib-client', '/queue/ucd-lib-client');
    this.ROOT_PATH = '/application/'+config.server.appName;
    this.config = {};
    this.reload(true);
  }


  handleMessage(msg) {
    let id = msg.headers['org.fcrepo.jms.identifier'];

    if( !id.match(this.ROOT_PATH) ) return;
    this.reload();
  }

  async reload(first) {
    if( first === true ) await waitUntil('fcrepo', 8080);
    this.config = await this.crawl('/application/'+config.server.appName);
  }

  async crawl(path, ldp={}) {
    path = this.cleanPath(path);
    if( ldp[path] ) return ldp;

    let response = await api.metadata({path});
    if( response.data.statusCode !== 200 ) return ldp;

    let graph = JSON.parse(response.data.body);
    if( graph['@graph'] ) graph = graph['@graph'];
    if( !Array.isArray(graph) ) graph = [graph];

    ldp[path] = {graph};
    
    let firstNode = graph[0];
    if( firstNode['@type'] && 
      firstNode['@type'].includes(BINARY) ) {

      // don't load images
      let mimeType = firstNode[MIME_TYPE]
      if( mimeType && mimeType[0]['@value'] && !mimeType[0]['@value'].match(/^image\//i) ) {
        response = await api.get({path});
        ldp[path].body = response.data.body;
      }
    }

    for( let node of graph ) {
      // clean local ids
      if( node['@id'] ) node['@id'] = this.cleanPath(node['@id']);

      if( !node[CONTAINS] ) continue;
      for( let child of node[CONTAINS] ) {
        await this.crawl(child['@id'], ldp);
      }
    }

    return ldp;
  }

  cleanPath(path) {
    if( path.match(api.getConfig().fcBasePath) ) {
      path = path.split(api.getConfig().fcBasePath)[1];
    }
    return path;
  }

}

module.exports = new AppConfig();