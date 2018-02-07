const express = require('express');
const {logger} = require('@ucd-lib/fin-node-utils');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config');

const Logger = logger('ucd-lib-client');


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

// parse application/x-www-form-urlencoded req body
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json req body
app.use(bodyParser.json());


/**
 * Register Controllers
 */
app.use('/rest', require('./controllers'));

/**
 * setup static routes
 */
require('./lib/static')(app);
 
app.listen(8000, () => {
  Logger.info('server ready on port 8000');
});