var proxy = require('express-http-proxy');
var app = require('express')();
var jwt = require('jsonwebtoken');

var token = null;
function setToken() {
  token = jwt.sign(
    {
      username: 'karaf-services',
      admin : true
    }, 
    process.env.JWT_SECRET, 
    {
      issuer: process.env.JWT_ISSUER,
      expiresIn: process.env.JWT_TTL
    }
  );
}
setInterval(setToken, 1000 * 60 * 60 * 6);
setToken();

app.use('/', proxy('fcrepo:8080', {
  proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
    proxyReqOpts.headers.Authorization = `Bearer ${token}`;
    return proxyReqOpts;
  }
}));

app.listen(3000, () => {
  console.log('Proxy listening on port 3000');
});