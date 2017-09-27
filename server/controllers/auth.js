var router = require('express').Router();
var authUtils = require('../lib/auth');
var utils = require('./utils');

router.get('/cas', authUtils.middleware.bounce, (req, res) => {
  res.redirect(req.session.cas_return_to || '/');
});

app.get('/cas/user', authUtils.cas.block, function ( req, res ) {
  res.json({ 
      cas_user: req.session[ cas.session_name ],
      jwt : authUtils.jwt.createFromCasRequest(req)
  });
});

router.get('/local', authUtils.middleware.block, async (req, res) => {
  var username = req.query.username;
  var password = req.query.password;
  var userinfo;

  try { 
    userinfo = await authUtils.localUserVerification(username, password);
  } catch(e) {
    res.json(utils.errorResponse(e, 'Unable to verify local user'));
  }

  res.json(userinfo);
});


module.exports = router;