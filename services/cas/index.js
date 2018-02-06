const express = require('express');
const {logger, config} = require('@ucd-lib/fin-node-utils');
const bodyParser = require('body-parser');
const session = require('express-session');
const Logger = logger('cas-service');

// global catch alls for errors
process.on('uncaughtException', (e) => {
  Logger.error(e)
  process.exit(-1);
});
process.on('unhandledRejection', (e) => Logger.error(e));

// create express instance
const app = express();

app.use(session({
  name              : 'cas-service-id',
  secret            : config.server.cookieSecret,
  resave            : false,
  maxAge            : config.server.cookieMaxAge,
  saveUninitialized : true
}));

// setup simple http logging
app.use((req, res, next) => {
  res.on('finish',() => {
    Logger.info(`${res.statusCode} ${req.protocol}/${req.httpVersion} ${req.originalUrl || req.url} ${req.get('User-Agent') || 'no-user-agent'}`);
  });
  next();
});

// parse application/json req body
app.use(bodyParser.json());

require('./controller')(app);

app.listen(8000, () => {
  Logger.info('server ready on port 8000');
});