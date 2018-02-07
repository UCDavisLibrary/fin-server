const express = require('express');
const {logger, jwt, config} = require('@ucd-lib/fin-node-utils');
const Logger = logger('basic-auth-service');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// global catch alls for errors
process.on('uncaughtException', (e) => Logger.error(e));
process.on('unhandledRejection', (e) => Logger.error(e));

// create express instance
const app = express();
app.use(cookieParser()); 

// setup simple http logging
app.use((req, res, next) => {
  res.on('finish',() => {
    Logger.info(`${res.statusCode} ${req.method} ${req.protocol}/${req.httpVersion} ${req.originalUrl || req.url} ${req.get('User-Agent') || 'no-user-agent'}`);
  });
  next();
});

// parse application/json req body
app.use(bodyParser.json());

// register controller
app.use(require('./controller'));

// start server
app.listen(8000, () => {
  Logger.info('server ready on port 8000');
});