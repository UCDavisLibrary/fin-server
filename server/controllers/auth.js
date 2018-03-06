const router = require('express').Router();
const model = require('../models/auth');
const serviceModel = require('../models/services');
const middleware = require('./middleware');
const utils = require('./utils');
const {config, jwt} = require('@ucd-lib/fin-node-utils');
const {URL} = require('url');

router.get('/service/:id', middleware.admin, async (req, res) => {
  try {
    res.set(serviceModel.SIGNATURE_HEADER, serviceModel.createServiceSignature(req.params.id));
    res.status(200).send('Service secret verification');
  } catch(e) {
    res.status(400).send(e.message);
  }
});

router.post('/service/:id', middleware.admin, async (req, res) => {
  let secret = req.body;
  if( !secret ) {
    return res.status(400).send('Service id and secret required');
  }

  try {
    await serviceModel.setServiceSecret(req.params.id, secret);
    res.status(201).send('Success.  Secret set for '+req.params.id);
  } catch(e) {
    res.status(400).send(e.message);
  }
});

router.delete('/service/:id', middleware.admin, async (req, res) => {
  try {
    await serviceModel.deleteServiceSecret(req.params.id);
    res.status(204).send('Success.  Removed secret for '+req.params.id);
  } catch(e) {
    res.status(400).send(e.message);
  }
});

router.get('/token/create', middleware.block, async (req, res) => {
  var username = req.query.username;
  if( !username ) return res.json({error: true, message: 'Username required'});

  try {
    let token = await model.refreshToken(username);
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
    let valid = await model.refreshTokenVerification(username, token);
    if( valid ) {
      let isAdmin = model.isAdmin(username);
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

router.get('/mint', middleware.admin, (req, res) => {
  var username = req.query.username;
  var isAdmin = req.query.admin ? true : false;

  res.json({
    jwt : jwt.create(username, isAdmin),
    username : username,
    admin : isAdmin
  });
});


module.exports = router;