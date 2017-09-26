var elasticsearch = require('elasticsearch');
var config = require('../config').elasticsearch;

var client = new elasticsearch.Client({
  host: config.host,
  log: config.log
});

module.exports = function search(body) {
  return client.search({
    index : config.elasticsearch.alias,
    body : body
  });
}