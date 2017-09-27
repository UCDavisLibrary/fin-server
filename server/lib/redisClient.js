var redis = require('redis');
var client = redis.createClient({host: 'redis'});
var util = require('util');

var promisify = ['get', 'set', 'del'];
promisify.forEach(key => client[key] = util.promisify(client[key]));

client.on('error', function (err) {
  console.log("Error " + err);
});

module.exports = client;