const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authUtils = require('./lib/auth');
const config = require('./config');
 
// Set up an Express session, which is required for CASAuthentication. 
app.use(session({
    secret            : config.server.cookieSecret,
    resave            : false,
    saveUninitialized : true
}));
app.use(cookieParser()); 

 
// Unauthenticated clients will be redirected to the CAS login and then back to 
// this route once authenticated. 
app.get( '/app', authUtils.middleware.bounce, function ( req, res ) {
    res.send( '<html><body>Hello!</body></html>' );
});

app.get( '/', authUtils.middleware.bounce, function ( req, res ) {
    res.send( '<html><body>Hello!</body></html>' );
});
 
// Unauthenticated clients will receive a 401 Unauthorized response instead of 
// the JSON data. 
app.get( '/api', authUtils.cas.block, function ( req, res ) {
    res.json( { success: true } );
});
 
// An example of accessing the CAS user session variable. This could be used to 
// retrieve your own local user records based on authenticated CAS username. 
app.get( '/api/user', authUtils.cas.block, function ( req, res ) {
    res.json({ 
        cas_user: req.session[ cas.session_name ],
        jwt : jwt.create(req)
    });
});
 
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

app.listen(3001, () => {
    console.log('ready on port 3001');
});