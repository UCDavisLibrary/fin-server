const express = require('express');
const path = require('path');
const {logger, jwt, config} = require('@ucd-lib/fin-node-utils');
const Logger = logger('fin-server');
const session = require('express-session');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const authUtils = require('./lib/auth');
const api = require('@ucd-lib/fin-node-api');

// used for JWT
const SERVER_USERNAME = 'fin-server';

// global catch alls for errors
process.on('uncaughtException', (e) => Logger.error(e));
process.on('unhandledRejection', (e) => Logger.error(e));

// create express instance
const app = express();

// Set up an Express session, which is required for CASAuthentication. 
const RedisStore = require('connect-redis')(session); 
app.use(session({
  name : 'fin-sid',
  store: new RedisStore({
    host : 'redis'
  }),
  secret            : config.server.cookieSecret,
  resave            : false,
  maxAge            : config.server.cookieMaxAge,
  saveUninitialized : true
}));
app.use(cookieParser()); 

// setup simple http logging
app.use((req, res, next) => {
  res.on('finish',() => {
    Logger.info(`${res.statusCode} ${req.method} ${req.protocol}/${req.httpVersion} ${req.originalUrl || req.url} ${req.get('User-Agent') || 'no-user-agent'}`);
  });
  next();
});



// wire up fin api for server
api.setConfig({
  host: config.fcrepo.host,
  basePath : config.fcrepo.root,
  jwt : jwt.create(SERVER_USERNAME, true)
});

// rotate jwt token every six hours
setInterval(() => {
  api.setConfig({jwt: jwt.create(SERVER_USERNAME, true)})
}, 6*60*60*1000);


/**
 * Wire up stomp connection
 */
require('./lib/activeMqProxy');

/**
 * Wire up main proxy
 */
const FcrepoProxy = require('./lib/fcrepoProxy');
const mainProxy = new FcrepoProxy(app);

/**
 * Register Auth Controller
 * 
 * Body parsers will mess up proxy, ALWAYS use them after the proxy
 */

// parse application/x-www-form-urlencoded req body
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json req body
app.use(bodyParser.json());
// register auth controller
app.use('/auth', require('./controllers/auth'));



app.listen(3001, () => {
  Logger.info('server ready on port 3001');
});