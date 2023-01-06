const {activemq, logger, config, RDF_URIS} = require('@ucd-lib/fin-service-utils');
const api = require('@ucd-lib/fin-api');

const FC_BASE_RE = new RegExp('^'+api.getConfig().fcBasePath);
const FC_HOST_RE = new RegExp('^'+config.fcrepo.host+api.getConfig().fcBasePath);

/**
 * @class ReindexCrawler
 */
class ReindexCrawler {

  constructor(path, options={}) {  
    this.rootPath = this.cleanPath(path);

    if( !options.follow ) options.follow = [];

    options.follow = options.follow.map(prop => RDF_URIS.SCHEMA_BASE.SCHEMA_ORG+prop);
    options.follow.push(RDF_URIS.PROPERTIES.CONTAINS);

    this.options = options;
  }

  /**
   * @method reindex
   * @description start reindex processs
   * 
   * @returns {Array}
   */
  async reindex(writeIndex) {
    let crawled = new Set();
    this.crawled = crawled;

    logger.info('Starting reindex of: '+this.rootPath+(writeIndex ? ' into index'+writeIndex : ''));
    await this.crawl(this.rootPath, crawled, writeIndex);
    return Array.from(crawled);
  }

  /**
   * @method crawl
   * @description crawl path. find main node, node that matches path.  Send reindex
   * event if node is found.  Crawl 'contains' and any additional defined 'follow' 
   * links for node.
   * 
   * @param {String} path 
   * @param {Set} crawled 
   */
  async crawl(path, crawled, writeIndex) {
    path = this.cleanPath(path);

    if( crawled.has(path) ) return;
    
    let graph = await api.metadata({
      path,
      host: config.fcrepo.host,
      directAccess: true,
      superuser : true
    });

    // we might have accessed fcr:metadata
    path = this.cleanPath(graph.data.request.url);
    crawled.add(path);

    // no metadata associated
    if( !graph.data.body ) {
      return;
    }

    graph = JSON.parse(graph.data.body);

    let mainNode = graph.find(item => item['@id'].match(api.getConfig().fcBasePath+path.replace(/\/fcr:metadata$/,'')));
    if( !mainNode ) return;
    
    // patch in all graph types
    let types = new Set();
    graph.forEach(node => {
      if( !node['@type'] ) return;
      node['@type'].forEach(type => types.add(type));
    });
    mainNode['@type'] = Array.from(types);

    // hack events for binary containers.
    if( mainNode['@type'] && mainNode['@type'].includes(RDF_URIS.TYPES.BINARY) ) {
      mainNode['@id'] = mainNode['@id'] + '/fcr:metadata';
      mainNode['@type'].splice(mainNode['@type'].indexOf(RDF_URIS.TYPES.BINARY), 1);
    }

    this.sendReindexEvent(mainNode, writeIndex);

    for( let followProp of this.options.follow ) {
      let prop = mainNode[followProp];
      if( !prop ) continue;
      
      for( let val of prop ) {
        await this.crawl(val['@id'] || val['@value'], crawled, writeIndex);
      }
    }
  }

  cleanPath(path) {
    return path.replace(FC_HOST_RE, '').replace(FC_BASE_RE, '');
  }

  /**
   * @method sendReindexEvent
   * 
   * @param {Object} msg
   * @param {String} node.@id
   * @param {Array} node.@type
   * @param {String} writeIndex Optional.  Index to write to. mostly used for reindex
   */
  sendReindexEvent(node, writeIndex) {
    let headers = {
      'edu.ucdavis.library.eventType' : 'Reindex'
    };
    if( writeIndex ) {
      headers['edu.ucdavis.library.writeIndex'] = writeIndex;
    }

    activemq.sendMessage(
      {
        '@id' : this.cleanPath(node['@id']),
        '@type' : node['@type'] || []
      },
      headers
    );
  }
}

module.exports = ReindexCrawler;