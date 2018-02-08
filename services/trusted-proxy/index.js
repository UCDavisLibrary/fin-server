var proxy = require('http-proxy');
var http = require('http');
const {jwt, config} = require('@ucd-lib/fin-node-utils');


var token = null;
function setToken() {
  token = jwt.create('trusted-proxy', true);
}

setInterval(setToken, 1000 * 60 * 60 * 6);
setToken();

var proxy = proxy.createProxyServer({});
var server = http.createServer(function(req, res) {
  req.headers.Authorization = `Bearer ${token}`;
  proxy.web(req, res, { target: config.fcrepo.host });
});

server.listen(3000, () => {
  console.log('Trusted Fcrepo Proxy listening on port 3000');
});