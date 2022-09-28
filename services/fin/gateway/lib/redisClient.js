var redis = require('redis');
const {logger} = require('@ucd-lib/fin-service-utils');

// var util = require('util');

// var promisify = ['get', 'set', 'del', 'keys', 'expire'];
// promisify.forEach(key => client[key] = util.promisify(client[key]));





module.exports = () => {
  var client = redis.createClient({
    socket : {host: 'redis'}
  });
  client.on('error', function (err) {
    logger.error('Redis client error', err);
  });
  return client;
}