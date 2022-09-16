global.LOGGER_NAME = 'api';

const express = require('express');
const {logger} = require('@ucd-lib/fin-node-utils');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
// const config = require('./config');

// create express instance
const app = express();

// parse cookies and add compression
app.use(cookieParser()); 
app.use(compression());

// setup simple http logging
app.use((req, res, next) => {
  res.on('finish',() => {
    logger.info(`${res.statusCode} ${req.method} ${req.protocol}/${req.httpVersion} ${req.originalUrl || req.url} ${req.get('User-Agent') || 'no-user-agent'}`);
  });
  next();
});

// parse application/x-www-form-urlencoded req body
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json req body
app.use(bodyParser.json());

/**
 * Register Controllers
 */
app.use('/api', require('./controllers'));
 
app.listen(3000, () => {
  logger.info('server ready on port 3000');
});