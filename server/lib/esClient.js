var elasticsearch = require('elasticsearch');
var config = require('../config');

var client = new elasticsearch.Client({
  host: config.elasticsearch.host,
  log: config.elasticsearch.log
});

module.exports = client;