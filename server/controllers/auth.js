var router = require('express').Router();
var authUtils = require('../lib/auth');
var utils = require('./utils');
const {config, logger} = require('@ucd-lib/fin-node-utils');
var {URL} = require('url');
const Logger = logger();


router.get('/token/create', authUtils.middleware.block, async (req, res) => {
  var username = req.query.username;
  if( !username ) return res.json({error: true, message: 'Username required'});

  try {
    let token = await authUtils.refreshToken(username);
    res.json({
      success : true,
      token : token
    });
  } catch(e) {
    res.json({
      error: true,
      message: e.message
    });
  }
});

router.post('/token/verify', async (req, res) => {
  let username = req.body.username;
  let token = req.body.token;

  try {
    let valid = await authUtils.refreshTokenVerification(username, token);
    if( valid ) {
      let isAdmin = await authUtils.isAdmin(username);
      res.json({
        success : true,
        jwt : authUtils.jwt.create(username, isAdmin)
      });
    } else {
      res.json({
        error : true,
        message: 'Invalid token'
      });
    }
  } catch(e) {
    res.json({
      error: true,
      message: e.message
    });
  }
});


router.get('/user', async ( req, res ) => {
  let user = authUtils.getUserFromRequest(req);

  if( user ) {
    res.json(user);
  } else {
    res.json({loggedIn: false});
  }
});

router.get('/logout', (req, res) => {
  if( req.cookies ) {
    for( var key in req.cookies ) {
      res.clearCookie(key);
    }
  }
  
  req.session.destroy();
  res.redirect('/');
});


router.get('/mint', authUtils.middleware.admin, (req, res) => {
  var username = req.query.username;
  var isAdmin = req.query.admin ? true : false;

  res.json({
    jwt : authUtils.jwt.create(username, isAdmin),
    username : username,
    admin : isAdmin
  });
});

router.post('/local', async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var userinfo;

  try { 
    var valid = await authUtils.localUserVerification(username, password);
    if( !valid ) return res.send({error: true, message: 'Unable to verify local user'});
    userinfo = await authUtils.getLocalUser(username);
  } catch(e) {
    res.json(utils.errorResponse(e, 'Unable to verify local user'));
  }

  var isAdmin = await authUtils.isAdmin(username);
  var token = authUtils.jwt.create(username, isAdmin);

  res.cookie(
    config.jwt.cookieName, 
    token,
    {httpOnly: true}
  );

  userinfo.jwt = token;
  res.json(userinfo);
});


module.exports = router;