const {URL} = require('url');
const {config} = require('@ucd-lib/fin-service-utils');
const FIN_URL = new URL(config.server.url);

module.exports = () => {
  return `host=${FIN_URL.host}; proto=${FIN_URL.protocol.replace(/:$/,'')}`;
}