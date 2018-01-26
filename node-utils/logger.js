const bunyan = require('bunyan');
const path = require('path');
const config = require('./config');

// TODO: wire in stack driver
// const LoggingBunyan = require('@google-cloud/logging-bunyan');

// console.log(path.join(__dirname, '..', 'config', 'webapp-service-account.json'));
// const loggingBunyan = LoggingBunyan({
//   projectId: 'new-forests',
//   keyFilename: path.join(__dirname, '..', 'config', 'webapp-service-account.json')
// });

let logger;

module.exports = (name) => {
  if( logger ) return logger;

  logger = bunyan.createLogger({
    name: name || 'fin-server-generic',
    level: config.server.loglevel || 'info',
    streams: [
      // Log to the console
      { stream: process.stdout }
      // And log to Stackdriver Logging
      // loggingBunyan.stream()
    ]
  });

  return logger;
}