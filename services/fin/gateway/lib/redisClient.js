var redis = require('redis');
const {logger} = require('@ucd-lib/fin-service-utils');


module.exports = () => {
  var client = redis.createClient({
    socket : {host: 'redis'}
  });
  client.on('error', function (err) {
    logger.error('Redis client error', err);
  });
  return client;
}