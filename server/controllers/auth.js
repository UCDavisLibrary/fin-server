var router = require('express').Router();
var authUtils = require('../lib/auth');
var utils = require('./utils');
var config = require('../config');

function hackBounce(req, res, next) {
  req.url = req.originalUrl;
  next();
}

router.get('/cas', hackBounce, authUtils.cas.bounce, (req, res) => {
  res.redirect('/');
});

router.get('/cas/user', authUtils.cas.block, async ( req, res ) => {
  var newJwt = await authUtils.jwt.createFromCasRequest(req);
  var isAdmin = await authUtils.isAdmin(req.session[ authUtils.cas.session_name ]);

  res.json({ 
      cas_user: req.session[ authUtils.cas.session_name ],
      admin : isAdmin,
      jwt : newJwt
  });
});

router.get('/login', authUtils.middleware.bounce, (req, res) => {
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  res.clearCookie(config.jwt.cookieName);
  res.redirect('/auth/cas/logout');
});

router.get('/cas/logout', authUtils.cas.logout);

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