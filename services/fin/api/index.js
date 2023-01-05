const express = require('express');
const {logger, keycloak} = require('@ucd-lib/fin-service-utils');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// create express instance
const app = express();

// parse cookies
app.use(cookieParser()); 
app.use(cors());

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

app.use(keycloak.setUser);

/**
 * Register Controllers
 */
app.use('/api', require('./controllers'));
 
app.listen(3000, () => {
  logger.info('server ready on port 3000');
});