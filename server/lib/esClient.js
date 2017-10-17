var elasticsearch = require('elasticsearch');
var config = require('ucdlib-dams-utils/config');

var client = new elasticsearch.Client({
  host: config.elasticsearch.host,
  log: config.elasticsearch.log
});

module.exports = client;