const router = require('express').Router();
const authUtils = require('../lib/auth');
const utils = require('./utils');
const {config, logger, jwt} = require('@ucd-lib/fin-node-utils');
const {URL} = require('url');
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
        jwt : jwt.create(username, isAdmin)
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
  let user = jwt.getUserFromRequest(req);

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
    jwt : jwt.create(username, isAdmin),
    username : username,
    admin : isAdmin
  });
});


module.exports = router;