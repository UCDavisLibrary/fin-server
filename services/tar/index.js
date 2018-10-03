const express = require('express');
const app = express();
const {logger} = require('@ucd-lib/fin-node-utils');

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

require('./controllers')(app);
app.listen(3333, () => {
  logger.info('tar service listening on port 3333');
});