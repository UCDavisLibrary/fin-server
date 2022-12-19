const express = require('express');
const {config, logger} = require('@ucd-lib/fin-service-utils');
const model = require('./lib/model.js');

const app = express();

app.get(/\/.*/, async (req, res) => {
  try {
    res.json(await model.getAccess({path: req.path}));
  } catch(e) {
    res.status(500).json({
      error: true,
      message : e.message,
      stack : e.stack
    });
  }
});

app.post(/\/.*/, async (req, res) => {
  try {
    let public = (req.body && req.body.public ? req.body.public : req.query.public)+'';
    await model.setProtectedPath(req.path, public === 'true');

    // see if we were given grants
    if( req.body && req.body.access && Array.isArray(req.body.access) ) {
      for( let access of req.body.access ) {
        await model.grantAccess(access.agent, req.path, access.expire);
      }
    }

    res.json(await model.getAccess({path: req.path}));
  } catch(e) {
    res.status(500).json({
      error: true,
      message : e.message,
      stack : e.stack
    });
  }
});

app.delete(/\/.*/, async (req, res) => {
  try {
    res.json(await model.removeProtectedPath({path: req.path}));
  } catch(e) {
    res.status(500).json({
      error: true,
      message : e.message,
      stack : e.stack
    });
  }
});

app.put(/\/.*/, async (req, res) => {
  let agent = req.body && req.body.agent ? req.body.agent : req.query.agent;
  let expire = req.body && req.body.expire ? req.body.expire : req.query.expire;

  try {
    await model.grantAccess({
      path: req.path,
      agent, expire
    });

    res.json(await model.getAccess({path: req.path}));
  } catch(e) {
    res.status(500).json({
      error: true,
      message : e.message,
      stack : e.stack
    });
  }
});

app.delete(/\/.*/, async (req, res) => {
  try {
    res.json(await model.removeProtectedPath({path: req.path}));
  } catch(e) {
    res.status(500).json({
      error: true,
      message : e.message,
      stack : e.stack
    });
  }
});


app.listen(3000, () => {
  logger.info('fin ac listening on port 3000');
});

