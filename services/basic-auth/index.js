global.LOGGER_NAME = 'basic-auth-service';
const express = require('express');
const path = require('path');
const {logger, jwt, config} = require('@ucd-lib/fin-node-utils');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// global catch alls for errors
process.on('uncaughtException', (e) => logger.error(e));
process.on('unhandledRejection', (e) => logger.error(e));

// create express instance
const app = express();
app.use(cookieParser()); 

// setup simple http logging
app.use((req, res, next) => {
  res.on('finish',() => {
    logger.info(`${res.statusCode} ${req.method} ${req.protocol}/${req.httpVersion} ${req.originalUrl || req.url} ${req.get('User-Agent') || 'no-user-agent'}`);
  });
  next();
});

// parse application/json req body
app.use(bodyParser.json());

// register controller
app.use(require('./controller'));

// serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// start server
app.listen(8000, () => {
  logger.info('server ready on port 8000');
});