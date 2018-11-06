global.LOGGER_NAME = 'essync';

const {MessageServer, config, logger, jwt} = require('@ucd-lib/fin-node-utils');
const indexer = require('./lib/indexer');
const reindexer = require('./lib/reindexer');
const buffer = require('./lib/buffer');
const gitinfo = require('./gitinfo.json');

/**
 * Log promise errors, uncaught exceptions
 */
process.on('unhandledRejection', e => logger.fatal(e));
process.on('uncaughtException', e => logger.fatal(e));

class EsSyncMessageServer extends MessageServer {

  constructor() {
    super('Elasticsearch Sync');
    buffer.on('container-update', e => this.onContainerEvent(e));
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

    // grab event types
    let eventTypes = this.getEventTypes(msg);

    // grab the resource path
    let path = this.getPath(msg);

    // we don't want anything in a dot path
    if( this.isDotPath(path) ) return;

    // we only want collection and record types
    if( !indexer.isCollection(msg.payload.body.type) && 
        !indexer.isRecord(msg.payload.body.type) ) {
      return;
    }

    // walk path and register all containers in buffer
    let parts = path.replace(/\/collection\/?/, '').split('/');
    for( let i = parts.length; i >= 0; i-- ) {
      path = parts.slice(0, i).join('/').trim();
      if( !path ) continue;

      path = '/collection/'+path;
      buffer.add('container', path, {path, msg, eventTypes});
    }
  }

  /**
   * @method onContainerEvent
   * @description called been buffer event timer fires
   * 
   * @param {Object} e event payload passed to buffer.
   */
  onContainerEvent(e) {
    if( this.isCreate(e.eventTypes) ) this.onContainerCreated(e.path, e.msg);
    else if( this.isModify(e.eventTypes) ) this.onContainerModified(e.path, e.msg);
    else if( this.isDelete(e.eventTypes) ) this.onContainerDeleted(e.path, e.msg);
  }

  /**
   * @method onContainerCreated
   * @description handle container creation event
   * 
   * @param {String} path fcrepo container path 
   * @param {Object} msg webhook message
   */
  async onContainerCreated(path, msg) {
    // grab the record for the path
    let esRecord = await indexer.getTransformedContainer(path, msg.payload.body.type);
    if( !esRecord ) return; // no access, quit out

    // insert into elasticsearch
    indexer.update(esRecord);
  }

  /**
   * @method onContainerModified
   * @description handle container modified event
   * 
   * @param {String} path fcrepo container path 
   * @param {Object} msg webhook message
   */
  async onContainerModified(path, msg) {
    // grab the esRecord for the path
    let esRecord = await indexer.getTransformedContainer(path, msg.payload.body.type);
          
    // at this point, likely doesn't have public access
    if( !esRecord ) {
      if( indexer.isCollection(msg.payload.body.type) ) {
        // remove collection and all children
        indexer.removeCollection(path);
      } else {
        // remove from elastic search
        indexer.remove(path, msg.payload.body.type);
      }
      return;
    }

    // if the collection doesn't exist in the  
    // elasticsearch we need to reindex the entire collection
    if( indexer.isCollection(msg.payload.body.type) ) {
      let exists = await indexer.esClient.exists({
        index : config.elasticsearch.collection.alias,
        type: config.elasticsearch.collection.schemaType,
        id : path
      });

      if( !exists ) {
        logger.info('Modification to existing collection not in elasticsearch, reindexing collection: '+path);
        await reindexer.crawl(
          indexer.getBaseUrl()+path,  
          config.elasticsearch.record.alias,
          config.elasticsearch.collection.alias
        );
        logger.info('Reindexing collection complete: '+path);
        return;
      }
    }

    // insert into elasticsearch
    indexer.update(esRecord);
  }

 /**
   * @method onContainerDeleted
   * @description handle container delete event
   * 
   * @param {String} path fcrepo container path 
   * @param {Object} msg webhook message
   */
  async onContainerDeleted(path, msg) {
    // remove from elastic search
    indexer.remove(path, msg.payload.body.type);
  }

  version() {
    return gitinfo;
  }
}

module.exports = new EsSyncMessageServer();