global.LOGGER_NAME = 'essync';

const {config, logger, activemq, pg, jwt} = require('@ucd-lib/fin-service-utils');
const api = require('@ucd-lib/fin-api');
const indexer = require('./lib/indexer');
const reindexer = require('./lib/reindexer');
const postgres = require('./lib/postgres');
// const buffer = require('./lib/buffer');
// const JobQueue = require('./lib/queue');



/**
 * Log promise errors, uncaught exceptions
 */
// process.on('unhandledRejection', e => logger.fatal(e));
// process.on('uncaughtException', e => logger.fatal(e));

api.setConfig({
  host: config.fcrepo.host,
  basePath : config.fcrepo.root,
  directAccess : true
});


class EsSync {

  constructor() {
    // super('Elasticsearch Sync');

    // this.queue = new JobQueue();
    // this.queue.process = this.onContainerEvent.bind(this);

    // buffer.on('container-update', e => this.queue.add(e.id, e.data));

    activemq.onMessage(e => this.handleMessage(e));
    activemq.connect('essync', '/queue/essync');

    this.UPDATE_TYPES = {
      UPDATE : ['Create', 'Update'],
      DELETE : ['Delete', 'Purge']
    }

    this.BINARY_CONTAINER = 'http://fedora.info/definitions/v4/repository#Binary';

    postgres.connect()
      .then(() => this.readLoop());
  }

  async readLoop() {
    let item = await postgres.nextLogItem();
    
    if( !item ) {
      setTimeout(() => this.readLoop(), 500);
      return;
    }

    await this.updateContainer(item);
    await postgres.clearLog(item.event_id);

    this.readLoop();
  }

  /**
   * @method handleMessage
   * 
   */
  async handleMessage(msg) {
    // check to see if we got a fin reindex event
    // if( msg.type === this.WEBHOOK_EVENT_TYPES.FIN_EVENT && msg.payload.action === 'reindex' ) {
    //   return reindexer.run();
    // }

    // at this point, we are only handling fcrepo events
    // if( msg.type !== this.WEBHOOK_EVENT_TYPES.FCREPO_EVENT ) return;

    // make sure indexer is using our latest jwt token
    // MessageServer is automatically keeping the token up to date for us
    // indexer.token = this.token;

    await postgres.log({
      event_id : msg.headers['org.fcrepo.jms.eventID'],
      event_timestamp : new Date(parseInt(msg.headers['org.fcrepo.jms.timestamp'])).toISOString(),
      path : msg.headers['org.fcrepo.jms.identifier'],
      container_types : msg.headers['org.fcrepo.jms.resourceType']
        .split(',')
        .map(item => item.trim())
        .filter(item => item),
      update_types : msg.body.type
    });

    // for( let i = parts.length; i >= 0; i-- ) {
    //   path = parts.slice(0, i).join('/').trim();
    //   if( !path ) continue;

    //   path = '/'+root+'/'+path;

    //   // we don't want anything in a dot path
    //   if( this.isDotPath(path) ) continue;

    //   // buffer.add('container', path, {path});

    //   // await this.onContainerEvent({path});
    // }
  }

  isUpdate(e) {
    return e.update_types.find(item => this.UPDATE_TYPES.UPDATE.includes(item)) ? true : false;
  }

  isDelete(e) {
    return e.update_types.find(item => this.UPDATE_TYPES.DELETE.includes(item)) ? true : false;
  }

  /**
   * @method item
   * @description called been buffer event timer fires
   * 
   * @param {Object} e event payload from log table
   */
  async updateContainer(e) {

    // check update_type is delete.
    if( this.isDelete(e) ) {
      logger.info('Container '+e.path+' was removed from LDP, removing from index');

      e.action = 'delete';
      await postgres.updateStatus(e);
      return indexer.remove(e.path);
    }

    // check for binary
    if( e.container_types.includes(this.BINARY_CONTAINER) ) {
      logger.info('Ignoring container '+e.path+'.  binary container');

      e.action = 'ignored';
      e.message = 'binary container';
      await postgres.updateStatus(e);
      return indexer.remove(e.path);   
    }

    // we only want collection, application, record types
    if( !indexer.isCollection(e.type) && 
        !indexer.isRecord(e.path, e.type) &&
        !indexer.isApplication(e.path) ) {
      logger.info('Ignoring container '+e.path+'.  Not of type record, collection or application');
      
      e.action = 'ignored';
      e.message = 'non-fin container type'
      await postgres.updateStatus(e);
      return indexer.remove(e.path);
    }

    // TODO: return status code
    // let container = await indexer.getContainer(e.path);

    // either doesn't exist or we don't have access
    // if( typeof container === 'number' ) {
    //   logger.info('Container '+e.path+' was publicly inaccessible ('+container+') from LDP, removing from index');

    //   e.action = 'ignored';
    //   e.message = 'inaccessible'
    //   await postgres.updateStatus(e);
    //   return indexer.remove(e.path);
    // }

    // if( !e.container_types ) {
    //   container = this._getGraphById(container, config.server.url+config.fcrepo.root+path);
    //   if( !container ) {
    //     return logger.error('Failed to get container: ', path);
    //   }

    //   let type = container['@type'];
    // }

    // let esRecord = await indexer.getTransformedContainer(path, type);
    // if( !esRecord ) {
    //   return logger.error('Failed to get transform for container:', path);
    // }

    if( !e.container_types ) {
      e.container_types = [];

      let response = await api.head({path});
      if( response.data.statusCode === 200 ) {
        var link = response.last.headers['link'];
        if( link ) {
          link = api.parseLinkHeader(link);
          e.container_types = link.type || [];
        }
      }
    }

    let response = await indexer.getTransformedContainer(e.path, e.container_types);
    if( response.data.statusCode !== 200 ) {
      logger.info('Container '+e.path+' was inaccessible ('+response.data.statusCode+') from LDP, removing from index. url='+response.data.request.url);

      e.action = 'ignored';
      e.message = 'inaccessible'
      await postgres.updateStatus(e);
      return indexer.remove(e.path);
    }

    // update elasticsearch
    try {
      let jsonld = JSON.parse(response.data.body);
      if( jsonld['@id'].match(/\/fcrepo\/rest\//) ) {
        jsonld['@id'] = jsonld['@id'].split('/fcrepo/rest')[1];
      }
      
      let result = await indexer.update(e.path, jsonld);

      e.action = 'updated';
      e.es_response = JSON.stringify(result.response);
      await postgres.updateStatus(e);
    } catch(error) {
      logger.error('Failed to update: '+e.path, error);
      e.action = 'error';
      e.message = error.message+'\n'+error.stack+'\n\nResponse: '+response.data.statusCode;
      await postgres.updateStatus(e);
    }
  }

  _getGraphById(graphs, path) {
    if( !Array.isArray(graphs) ) return graphs;
    for( let graph of graphs ) {
      if( graph['@id'] === path ) {
        return graph;
      }
    }
    return null;
  }

  /**
   * @method isDotPath
   * @description given a path string from getPath, does any section of the path start
   * with a .
   * 
   * @param {String} path
   * 
   * @returns {Boolean}
   */
  isDotPath(path) {
    if( path.match(/^http/) ) {
      let urlInfo = new URL(path);
      path = urlInfo.pathname;
    }
    
    path = path.split('/');
    for( var i = 0; i < path.length; i++ ) {
      if( path[i].match(/^\./) ) {
        return path[i];
      }
    }

    return null;
  }

  version() {
    return '';
  }
}

module.exports = new EsSync();