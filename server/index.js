const express = require('express');
const path = require('path');
const {logger} = require('@ucd-lib/fin-node-utils');
const Logger = logger('ucd-dams-server');
const session = require('express-session');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const authUtils = require('./lib/auth');
const config = require('./config');
const FcrepoProxy = require('./lib/fcrepoProxy');

// global catch alls for errors
process.on('uncaughtException', (e) => {
    Logger.error(e)
    process.exit(-1);
});
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

// setup http logging
app.use((req, res, next) => {
    function log() {
        Logger.info(`${res.statusCode} ${req.protocol}/${req.httpVersion} ${req.originalUrl} ${req.get('User-Agent')}`);
    }
    res.on('finish', log);
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// wire up stomp connection
require('./lib/activeMqProxy');
const mainProxy = new FcrepoProxy(app);

// setup static routes
require('./lib/static')(app);
 
/**
 * Register Controllers
 */
app.use('/rest', require('./controllers/rest'));
app.use('/auth', require('./controllers/auth'));

app.listen(3001, () => {
    Logger.info('server ready on port 3001');
});