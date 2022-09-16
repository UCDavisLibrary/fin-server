var redis = require('redis');
const {logger} = require('@ucd-lib/fin-node-utils');
var client = redis.createClient({host: 'redis'});
var util = require('util');

var promisify = ['get', 'set', 'del', 'keys', 'expire'];
promisify.forEach(key => client[key] = util.promisify(client[key]));

client.on('error', function (err) {
  logger.error('Redis client error', err);
});

module.exports = client;