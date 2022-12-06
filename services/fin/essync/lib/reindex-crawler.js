const {activemq, logger, config} = require('@ucd-lib/fin-service-utils');
const api = require('@ucd-lib/fin-api');

const SCHEMA_ORG = 'http://schema.org/';
const CONTAINS = 'http://www.w3.org/ns/ldp#contains';
const BINARY = 'http://fedora.info/definitions/v4/repository#Binary';

const FC_BASE_RE = new RegExp('^'+api.getConfig().fcBasePath);
const FC_HOST_RE = new RegExp('^'+config.fcrepo.host+api.getConfig().fcBasePath);

/**
 * @class ReindexCrawler
 */
class ReindexCrawler {

  constructor(path, options={}) {  
    this.rootPath = this.cleanPath(path);

    if( !options.follow ) options.follow = [];

    options.follow = options.follow.map(prop => SCHEMA_ORG+prop);
    options.follow.push(CONTAINS);

    this.options = options;
  }

  /**
   * @method reindex
   * @description start reindex processs
   * 
   * @returns {Array}
   */
  async reindex() {
    let crawled = new Set();
    this.crawled = crawled;

    logger.info('Starting reindex of: '+this.rootPath);
    await this.crawl(this.rootPath, crawled);
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
  async crawl(path, crawled) {
    path = this.cleanPath(path);

    if( crawled.has(path) ) return;
    
    let graph = await api.metadata({path});

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

    // hack events for binary containers.
    if( mainNode['@type'] && mainNode['@type'].includes(BINARY) ) {
      mainNode['@id'] = mainNode['@id'] + '/fcr:metadata';
      mainNode['@type'].splice(mainNode['@type'].indexOf(BINARY), 1);
    }
    this.sendReindexEvent(mainNode);

    for( let followProp of this.options.follow ) {
      let prop = mainNode[followProp];
      if( !prop ) continue;
      
      for( let val of prop ) {
        await this.crawl(val['@id'] || val['@value'], crawled);
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
   */
  sendReindexEvent(node) {
    activemq.sendMessage(
      {
        '@id' : this.cleanPath(node['@id']),
        '@type' : node['@type'] || []
      },
      {'edu.ucdavis.library.eventType' : 'Reindex'}
    );
  }
}

module.exports = ReindexCrawler;