const express = require('express');
const router = require('express').Router();
const model = require('./model');
const fs = require('fs');
const path = require('path');
const {logger, config, jwt} = require('@ucd-lib/fin-node-utils');

const AGENT_DOMAIN = process.env.BASIC_AUTH_AGENT_DOMAIN || 'local';

router.post('/login', async (req, res) => {
  login(req.body.username, req.body.password, res);
});

router.get('/login', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(loadHtml('login.html'));
});

router.post('/user', async(req, res) => {
  if( !req.body.username ) {
    return res.status(400).json({error: true, message: 'Username required'});
  }
  if( !req.body.password ) {
    return res.status(400).json({error: true, message: 'Password required'});
  }
  if( !req.body.email ) {
    return res.status(400).json({error: true, message: 'Email required'});
  }

  try {
    let result = await model.createUser(req.body.username, req.body.password, req.body.password);
    res.send({success: true, username: req.body.username, details: result});
  } catch(e) {
    res.status(400).send({error: true, message: e.message});
  }
});

router.delete('/user/:username', requireAdmin, async(req, res) => {
  if( !req.param.username) {
    return res.status(400).json({error: true, message: 'Username required'});
  }

  let result = await model.removeUser(req.param.username)
  res.send({success: true, username: req.param.username, details: result});
});

router.get('/users', requireAdmin, async(req, res) => {
  let result = await model.getUsers();
  res.json(result);
});

router.get('/user/:username', requireAdmin, async(req, res) => {
  if( !req.param.username) {
    return res.status(400).json({error: true, message: 'Username required'});
  }

  let user = await model.getUser(req.param.username);
  res.json(user);
});

async function login(username, password, res) {
  try { 
    var valid = await model.userVerification(username, password);
    if( !valid ) {
      logger.info('Basic Auth Service: login failure');
      return res.status(401).send('Invalid username or password');
    }
    userinfo = await model.getUser(username);
  } catch(e) {
    logger.error('Basic Auth Service: login failure', e);
    res.status(401).send();
  }

  logger.info('Basic Auth Service: login success: '+username);
  res.set('X-FIN-AUTHORIZED-AGENT', username+'@'+AGENT_DOMAIN)
     .json({success: true, username: username});
}

function loadHtml(file) {
  return fs.readFileSync(path.join(__dirname, 'public', file), 'utf-8');
}

/**
 * @function requireAdmin
 * @description admin to verify request is from a admin user
 */
async function requireAdmin(req, res, next) {
  let user = jwt.getUserFromRequest(req);
  if( !user ) return res.status(403).send();
  if( !user.admin ) return res.status(403).send();
  next();
};

module.exports = router;