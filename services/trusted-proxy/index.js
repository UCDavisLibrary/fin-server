var proxy = require('http-proxy');
var http = require('http');
var jwt = require('jsonwebtoken');

var token = null;
function setToken() {
  token = jwt.sign(
    {
      username: 'trusted-proxy',
      admin : true
    }, 
    process.env.JWT_SECRET, 
    {
      issuer: process.env.JWT_ISSUER,
      expiresIn: parseInt(process.env.JWT_TTL)
    }
  );
}
setInterval(setToken, 1000 * 60 * 60 * 6);
setToken();

var proxy = proxy.createProxyServer({});
var server = http.createServer(function(req, res) {
  req.headers.Authorization = `Bearer ${token}`;
  proxy.web(req, res, { target: 'http://fcrepo:8080' });
});

server.listen(3000, () => {
  console.log('Trusted Fcrepo Proxy listening on port 3000');
});