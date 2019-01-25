const express = require('express');
const app = express();
const {logger, jwt} = require('@ucd-lib/fin-node-utils');
const api = require('@ucd-lib/fin-node-api');
const acl = require('./lib/acl');
const bucket = require('./lib/bucket');
const config = require('./lib/config');

/**
 * FIN API SETUP
 */
api.setConfig({
  host : 'http://server:3001',
  fcBasePath: config.fcrepo.root
});
setToken();
setInterval(() => setToken(), 1000*60*60);
function setToken() {
  let token = jwt.create('aws-bucket-service', true);
  api.setConfig({jwt: token});
}

// setup simple http logging
app.use((req, res, next) => {
  res.on('finish',() => {
    let fcrepoProxyTime = req.fcrepoProxyTime ? 'fcrepo:'+req.fcrepoProxyTime+'ms' : '';
    let userAgent = req.get('User-Agent') || 'no-user-agent';
    let url = req.originalUrl || req.url;
    let cache = 'cache:' + (res.get('x-fin-cache') || 'no-cache');

    logger.info(`${res.statusCode} ${req.method} ${req.protocol}/${req.httpVersion} ${url} ${userAgent}, ${fcrepoProxyTime} ${cache}`);
  });
  next();
});


app.get('*', async (req, res) => {
  try {
    let fcpath = req.query.fcrepoPath.replace(config.fcrepo.root, '');
    let jwt = (req.get('Authorization') || '').replace(/^Bearer /, '');

    let collection = fcpath.replace(/^\//, '').split('/')[1];

    if( !(await acl.hasAccess(collection, jwt) ) ) {
      return res.status(403);
    }

    let response = await api.get({
      path : fcpath,
      headers : {
        Accept : api.RDF_FORMATS.JSON_LD
      }
    });

    let body = JSON.parse(response.last.body);
    if( Array.isArray(body) ) body = body[0];
    let contentUrl = body['http://schema.org/contentUrl'];
    if( !contentUrl ) {
      return res.send(400).json({
        error : true,
        message : 'container does not have contentUrl property'
      });
    }

    if( Array.isArray(contentUrl) ) contentUrl = contentUrl[0];
    contentUrl = contentUrl['@value'];

    let filename = contentUrl.replace(/^\//, '').split('/');
    let bucketName = filename.shift();

    res.redirect(bucket.getSignedUrl(
      bucketName, filename.join('/')
    ));

  } catch(e) {
    res.status(400).json({
      error : true,
      message : e.message,
      stack : e.stack
    });
  }
});

app.listen(3333, () => {
  logger.info('aws-bucket service listening on port 3333');
});