const httpProxy = require('http-proxy');

let proxy = httpProxy.createProxyServer({
  ignorePath : true
});

module.exports = proxy;