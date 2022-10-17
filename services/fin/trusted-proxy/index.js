global.LOGGER_NAME = 'trusted-proxy';

var proxy = require('http-proxy');
var http = require('http');
const {config, logger} = require('@ucd-lib/fin-service-utils');
const api = require('@ucd-lib/fin-api');
const apiConfig = api.getConfig();
const token = Buffer.from(apiConfig.username+':'+apiConfig.password).toString('base64');


var proxy = proxy.createProxyServer({});
var server = http.createServer(function(req, res) {
  req.headers.Authorization = `Basic ${token}`;
  req.headers['x-fin-principal'] = 'admin';
  proxy.web(req, res, { target: config.fcrepo.host });
});

server.listen(3000, () => {
  logger.info('Trusted Fcrepo Proxy listening on port 3000');
});