// global connection to elastic search client

const { Client } = require('@elastic/elasticsearch')
const config = require('../../config.js');

var client = new Client({
  node: config.elasticsearch.connStr,
  auth: {
    username: config.elasticsearch.username,
    password: config.elasticsearch.password
  }
});

module.exports = client;