global.LOGGER_NAME = 'essync';

// manually run reindexer from command line
const indexer = require('./lib/indexer');
const reindexer = require('./lib/reindexer');
const config = require('./lib/config');
const {logger} = require('@ucd-lib/fin-node-utils');

/**
 * Log promise errors, uncaught exceptions
 */
process.on('unhandledRejection', e => logger.fatal(e));
process.on('uncaughtException', e => logger.fatal(e));

let collection = '';
if( process.argv.length > 2 ) {
  collection = process.argv[2];
}

if( collection ) {
  logger.info('reindexing collection '+collection);

  reindexer
    .crawl(
      indexer.getFcRepoBaseUrl()+'/collection/'+collection,  
      config.elasticsearch.record.alias,
      config.elasticsearch.collection.alias
    )
    .then(() => logger.info('finished reindexing collection '+collection))
    .catch((e) => logger.error('failed to reindex collection '+collection, e));

} else {
  logger.info('reindexing all collections');

  reindexer
    .run()
    .then(() => logger.info('finished reindexing all collections'))
    .catch((e) => logger.error('failed to reindex all collections', e));
}