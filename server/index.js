const express = require('express');
const app = express();
var session = require('express-session');
var CASAuthentication = require('cas-authentication');
var jwt = require('./lib/jwt');

 
// Set up an Express session, which is required for CASAuthentication. 
app.use( session({
    secret            : 'super secret key',
    resave            : false,
    saveUninitialized : true
}));
 
// Create a new instance of CASAuthentication. 
var cas = new CASAuthentication({
    cas_url     : 'https://cas.ucdavis.edu/cas',
    service_url : 'http://localhost:3000'
});
jwt.init(cas);
var bounce = require('./middleware/bounce')(cas);
 
// Unauthenticated clients will be redirected to the CAS login and then back to 
// this route once authenticated. 
app.get( '/app', bounce, function ( req, res ) {
    res.send( '<html><body>Hello!</body></html>' );
});

app.get( '/', bounce, function ( req, res ) {
    res.send( '<html><body>Hello!</body></html>' );
});
 
// Unauthenticated clients will receive a 401 Unauthorized response instead of 
// the JSON data. 
app.get( '/api', cas.block, function ( req, res ) {
    res.json( { success: true } );
});
 
// An example of accessing the CAS user session variable. This could be used to 
// retrieve your own local user records based on authenticated CAS username. 
app.get( '/api/user', cas.block, function ( req, res ) {
    res.json({ 
        cas_user: req.session[ cas.session_name ],
        jwt : jwt.create(req)
    });
});
 
// Unauthenticated clients will be redirected to the CAS login and then to the 
// provided "redirectTo" query parameter once authenticated. 
app.get('/authenticate', bounce, (req, res) => {
    res.redirect(req.session.cas_return_to);
});

 
// This route will de-authenticate the client with the Express server and then 
// redirect the client to the CAS logout page. 
app.get( '/logout', cas.logout );

app.listen(3001, () => {
    console.log('ready on port 3001');
});