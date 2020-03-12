const httpProxy = require('http-proxy');
const {logger} = require('@ucd-lib/fin-node-utils')

let proxy = httpProxy.createProxyServer({
  ignorePath : true
});

proxy.on('error', e => {
  logger.error('http-proxy error', e.message, e.stack);
});

module.exports = proxy;