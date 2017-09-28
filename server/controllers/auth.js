var router = require('express').Router();
var authUtils = require('../lib/auth');
var utils = require('./utils');
var config = require('../config');

router.get('/cas', authUtils.middleware.bounce, (req, res) => {
  res.redirect(req.session.cas_return_to || '/');
});

router.get('/cas/user', authUtils.cas.block, function ( req, res ) {
  res.json({ 
      cas_user: req.session[ cas.session_name ],
      jwt : authUtils.jwt.createFromCasRequest(req)
  });
});

router.get('/local', async (req, res) => {
  var username = req.query.username;
  var password = req.query.password;
  var userinfo;

  try { 
    var valid = await authUtils.localUserVerification(username, password);
    if( !valid ) return res.send({error: true, message: 'Unable to verify local user'});
    userinfo = await authUtils.getLocalUser(username);
  } catch(e) {
    res.json(utils.errorResponse(e, 'Unable to verify local user'));
  }

  var token = authUtils.jwt.create(username, authUtils.isAdmin(username));

  res.cookie(
    config.jwt.cookieName, 
    token,
    {httpOnly: true}
  );

  userinfo.jwt = token;
  res.json(userinfo);
});


module.exports = router;