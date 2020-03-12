// global connection to elastic search client

const elasticsearch = require('elasticsearch');
const {config} = require('@ucd-lib/fin-node-utils');


var client = new elasticsearch.Client({
  apiVersion: '5.6',
  host: config.elasticsearch.connStr,
  log: config.elasticsearch.log
});

module.exports = client;