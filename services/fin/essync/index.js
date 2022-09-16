global.LOGGER_NAME = 'essync';

const {MessageServer, config, logger, jwt} = require('@ucd-lib/fin-node-utils');
const indexer = require('./lib/indexer');
const reindexer = require('./lib/reindexer');
const buffer = require('./lib/buffer');
const JobQueue = require('./lib/queue');

/**
 * Log promise errors, uncaught exceptions
 */
process.on('unhandledRejection', e => logger.fatal(e));
process.on('uncaughtException', e => logger.fatal(e));

class EsSyncMessageServer extends MessageServer {

  constructor() {
    super('Elasticsearch Sync');

    this.queue = new JobQueue();
    this.queue.process = this.onContainerEvent.bind(this);

    buffer.on('container-update', e => this.queue.add(e.id, e.data));
  }

  /**
   * @method handleMessage
   * 
   */
  async handleMessage(msg) {
    // check to see if we got a fin reindex event
    if( msg.type === this.WEBHOOK_EVENT_TYPES.FIN_EVENT && msg.payload.action === 'reindex' ) {
      return reindexer.run();
    }

    // at this point, we are only handling fcrepo events
    if( msg.type !== this.WEBHOOK_EVENT_TYPES.FCREPO_EVENT ) return;

    // make sure indexer is using our latest jwt token
    // MessageServer is automatically keeping the token up to date for us
    indexer.token = this.token;

    // grab the resource path
    let path = this.getPath(msg);

    // walk path and register all containers in buffer


    // let parts = path.replace(/\/collection\/?/, '').split('/');
    let parts = path.replace(/\//, '').split('/');
    let root = parts.shift();

    for( let i = parts.length; i >= 0; i-- ) {
      path = parts.slice(0, i).join('/').trim();
      if( !path ) continue;

      path = '/'+root+'/'+path;

      // we don't want anything in a dot path
      if( this.isDotPath(path) ) continue;

      buffer.add('container', path, {path});
    }
  }

  /**
   * @method onContainerEvent
   * @description called been buffer event timer fires
   * 
   * @param {Object} e event payload passed to buffer.
   */
  async onContainerEvent(e) {
    let path = e.path;
    let container = await indexer.getContainer(path);

    // either doesn't exist or we don't have access
    if( !container ) {
      logger.info('Container '+path+' either doesn\'t exist in LDP or is not publicly accessible.  Removing from index');

      // remove from elastic search
      return indexer.remove(path);
    }

    container = this._getGraphById(container, config.server.url+config.fcrepo.root+path);
    if( !container ) {
      return logger.error('Failed to get container: ', path);
    }

    let type = container['@type'];

    // we only want collection and record types
    if( !indexer.isCollection(type) && 
        !indexer.isRecord(path, type) &&
        !indexer.isApplication(path) ) {
      logger.info('Ignoring container '+path+'.  Not of type record or collection');
      return;
    }

    let esRecord = await indexer.getTransformedContainer(path, type);
    if( !esRecord ) {
      return logger.error('Failed to get transform for container:', path);
    }

    // update elasticsearch
    try {
      await indexer.update(esRecord);
    } catch(e) {
      logger.error('Failed to update: '+path, e);
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

  version() {
    return '';
  }
}

module.exports = new EsSyncMessageServer();