const {MessageServer, config, logger, jwt} = require('@ucd-lib/fin-node-utils');
const indexer = require('./indexer');
const reindexer = require('./reindexer');
const Logger = logger('essync');


class EsSyncMessageServer extends MessageServer {

  constructor() {
    super('Elastic Search Sync');
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

    // fedora create or modify event
    if( eventTypes.indexOf('ResourceModification') > -1 ||
        eventTypes.indexOf('ResourceCreation') > -1  ) {
      
      let frame = await indexer.getJsonFrame(path, msg.payload.body.type);
      frame = await indexer.frameToEs(frame);

      indexer.update(frame);

    // fedora remove event
    } else if( eventTypes.indexOf('ResourceDeletion') > -1 ) {
      indexer.remove(path);
    }
  }
}

module.exports = new EsSyncMessageServer();