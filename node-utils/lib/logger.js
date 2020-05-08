const bunyan = require('bunyan');
const path = require('path');
const fs = require('fs');
const config = require('../config');
const {URL} = require('url');

// hack, see below
// const BUNYAN_TO_STACKDRIVER = {
//   60: 'CRITICAL',
//   50: 'ERROR',
//   40: 'WARNING',
//   30: 'INFO',
//   20: 'DEBUG',
//   10: 'DEBUG',
// };

const streams = [
  // Log to the console
  { stream: process.stdout }
];

// wire in stack driver if google cloud service account provided
let projectId;
if( config.google.serviceAccountExists ) {
  let {LoggingBunyan} = require('@google-cloud/logging-bunyan');

  // grab project id from service account file
  let accountFile = require(config.google.serviceAccountFile);

  // create bunyan logger for stackdriver
  projectId = accountFile.project_id;
  let loggingBunyan = new LoggingBunyan({
    projectId: accountFile.project_id,
    keyFilename: config.google.serviceAccountFile,
    resource : {type: 'project'}
  });

  // hack fix for issue we need to file
  // they are not properly setting the severity level
  // let googleFormatEntry = loggingBunyan.formatEntry_;
  // loggingBunyan.formatEntry_ = function(record) {
  //   record = googleFormatEntry.call(loggingBunyan, record);
  //   if( !record.metadata.severity ) {
  //     record.metadata.severity = BUNYAN_TO_STACKDRIVER[record.data.level];
  //   }
  //   return record;
  // }
  

  // add new logger stream
  streams.push(loggingBunyan.stream());
}

let host = 'unknown.host'
try {
  host = new URL(config.server.url).host;
} catch(e) {}

let logger = bunyan.createLogger({
  name: (process.env.FIN_LOGGER_NAME || global.LOGGER_NAME || 'fin-server-generic')+'-'+host,
  level: config.server.loglevel || 'info',
  streams: streams
});

let info = {
  name: (process.env.FIN_LOGGER_NAME || global.LOGGER_NAME || 'fin-server-generic')+'-'+host,
  level: config.server.loglevel || 'info',
  stackdriver : {
    enabled : projectId ? true : false,
    file : config.google.serviceAccountFile
  }
}
if( projectId ) {
  info.stackdriver.projectId = projectId;
}

logger.info('logger initialized', info);

module.exports = logger;