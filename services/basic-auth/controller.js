const router = require('express').Router();
const model = require('./model');
const {logger, config, jwt} = require('@ucd-lib/fin-node-utils');
const Logger = logger();

router.post('/login', async (req, res) => {
  login(req.body.username, req.body.password, res);
});
router.get('/login', async (req, res) => {
  login(req.query.username, req.query.password, res);
});

router.post('/', requireAdmin, async(req, res) => {
  if( !req.body.username || !req.body.password ) {
    return res.status(400).json({error: true, message: 'Username and password required'});
  }

  let result = await model.createUser(req.body.username, req.body.password);
  res.send({success: true, username: req.body.username, details: result});
});

router.delete('/:username', requireAdmin, async(req, res) => {
  if( !req.param.username) {
    return res.status(400).json({error: true, message: 'Username required'});
  }

  let result = await model.removeUser(req.param.username)
  res.send({success: true, username: req.param.username, details: result});
});

router.get('/', requireAdmin, async(req, res) => {
  let result = await model.getUsers();
  res.json(result);
});

router.get('/:username', requireAdmin, async(req, res) => {
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
      Logger.info('Basic Auth Service: login failure');
      return res.status(401).send('Invalid username or password');
    }
    userinfo = await model.getUser(username);
  } catch(e) {
    Logger.error('Basic Auth Service: login failure', e);
    res.status(401).send();
  }

  Logger.info('Basic Auth Service: login success: '+username);
  res.set('X-FIN-AUTHORIZED-AGENT', username)
     .json({success: true, username: username});
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