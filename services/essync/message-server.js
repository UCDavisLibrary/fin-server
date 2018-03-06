const {MessageServer, config, logger, jwt} = require('@ucd-lib/fin-node-utils');
const indexer = require('./indexer');
const reindexer = require('./reindexer');
const Logger = logger('essync');


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
    if( msg.type == 'fin-event' && msg.payload.action === 'reindex' ) {
      return reindexer.run();
    }

    if( msg.type !== 'fcrepo-event' ) return;

    // make sure indexer is using our latest jwt token
    // MessageServer is automatically keeping the token up to date for us
    indexer.token = this.token;

    // extract and cleanup event types
    let eventTypes = msg.payload
                          .headers['org.fcrepo.jms.eventType']
                          .split(',')
                          .map(type => type.trim().replace(/.*#/, ''));

    // grab the resource path
    let path = msg.payload.headers['org.fcrepo.jms.identifier'] || '/';

    // we don't want anything in a dot path
    if( indexer.isDotPath(path) ) return;

    // we only want collection and record types
    if( !indexer.isCollection(msg.payload.body.type) && 
        !indexer.isRecord(msg.payload.body.type) ) {
      return;
    }

    // fedora create event
    if( eventTypes.indexOf('ResourceCreation') > -1 ) {

      // grab the frame for the path
      let frame = await indexer.getJsonFrame(path, msg.payload.body.type);
      if( !frame ) return; // no access, quit out

      // make required modifications to frame (see method docs for more information)
      frame = await indexer.frameToEs(frame);

      // insert into elasticsearch
      indexer.update(frame);

    // fedora modify event
    } else if( eventTypes.indexOf('ResourceModification') > -1 ) {

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

      // TODO: if the collection doesn't exist in the  
      // elasticsearch we need to reindex the entire collection
      if( indexer.isCollection(msg.payload.body.type) ) {
        let exists = await indexer.esClient.exists({
          index : config.elasticsearch.collection.alias,
          type: config.elasticsearch.collection.schemaType,
          id : path
        });

        if( !exists ) {
          Logger.info('Modification to existing collection not in elasticsearch, reindexing collection: '+path);
          await reindexer.crawl(
            indexer.getBaseUrl()+path,  
            config.elasticsearch.record.alias,
            config.elasticsearch.collection.alias
          );
          Logger.info('Reindexing collection complete: '+path);
          return;
        }
      }

      // make required modifications to frame (see method docs for more information)
      frame = await indexer.frameToEs(frame);

      // insert into elasticsearch
      indexer.update(frame);

    // fedora remove event
    } else if( eventTypes.indexOf('ResourceDeletion') > -1 ) {
      // remove from elastic search
      indexer.remove(path, msg.payload.body.type);
    } else {
      
      Logger.info('Unknown event', eventTypes);
    }
  }
}

module.exports = new EsSyncMessageServer();