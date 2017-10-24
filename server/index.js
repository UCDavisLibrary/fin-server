const express = require('express');
const Logger = require('ucdlib-dams-utils').logger('ucd-dams-server');
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
    store: new RedisStore({
        host : 'redis'
    }),
    secret            : config.server.cookieSecret,
    resave            : false,
    maxAge            : config.server.cookieMaxAge,
    saveUninitialized : true
}));
app.use(cookieParser()); 

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
 
// Unauthenticated clients will be redirected to the CAS login and then back to 
// this route once authenticated. 
app.get( '/app', authUtils.middleware.bounce, function ( req, res ) {
    res.send( '<html><body>Hello!</body></html>' );
});

app.get( '/', function ( req, res ) {
    res.send( '<html><body>Hello!</body></html>' );
});
 
// Unauthenticated clients will receive a 401 Unauthorized response instead of 
// the JSON data. 
app.get( '/api', authUtils.cas.block, function ( req, res ) {
    res.json( { success: true } );
});
 
// An example of accessing the CAS user session variable. This could be used to 
// retrieve your own local user records based on authenticated CAS username. 

 
// Unauthenticated clients will be redirected to the CAS login and then to the 
// provided "redirectTo" query parameter once authenticated. 
app.get('/authenticate', authUtils.middleware.bounce, (req, res) => {
    res.redirect(req.session.cas_return_to);
});

 
// This route will de-authenticate the client with the Express server and then 
// redirect the client to the CAS logout page. 
app.get( '/logout', authUtils.cas.logout );

/**
 * Register Controllers
 */
app.use('/search', require('./controllers/search'));
app.use('/auth', require('./controllers/auth'));

app.listen(3001, () => {
    console.log('ready on port 3001');
});