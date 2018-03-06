const {MessageServer, config, logger, jwt} = require('@ucd-lib/fin-node-utils');
const indexer = require('./indexer');
const reindexer = require('./reindexer');

class EsSyncMessageServer extends MessageServer {

  constructor() {
    super('Elasticsearch Sync');
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

    // handle event type
    if( this.isCreate(eventTypes) ) this.onContainerCreated(path, msg);
    else if( this.isModify(eventTypes) ) this.onContainerModified(path, msg);
    else if( this.isDelete(eventTypes) ) this.onContainerDeleted(path, msg);
  }

  /**
   * @method onContainerCreated
   * @description handle container creation event
   * 
   * @param {String} path fcrepo container path 
   * @param {Object} msg webhook message
   */
  async onContainerCreated(path, msg) {
    // grab the frame for the path
    let frame = await indexer.getJsonFrame(path, msg.payload.body.type);
    if( !frame ) return; // no access, quit out

    // make required modifications to frame (see method docs for more information)
    frame = await indexer.frameToEs(frame);

    // insert into elasticsearch
    indexer.update(frame);
  }

  /**
   * @method onContainerModified
   * @description handle container modified event
   * 
   * @param {String} path fcrepo container path 
   * @param {Object} msg webhook message
   */
  async onContainerModified(path, msg) {
    // grab the frame for the path
    let frame = await indexer.getJsonFrame(path, msg.payload.body.type);
          
    // at this point, likely doesn't have public access
    if( !frame ) {
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

    // make required modifications to frame (see method docs for more information)
    frame = await indexer.frameToEs(frame);

    // insert into elasticsearch
    indexer.update(frame);
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
}

module.exports = new EsSyncMessageServer();