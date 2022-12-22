const express = require('express');
const api = require('@ucd-lib/fin-api');
const {config, logger, FinAC} = require('@ucd-lib/fin-service-utils');
const model = new FinAC();

api.setConfig({
  host : config.fcrepo.host,
  directAccess : true,
  superuser : true
})

const app = express();

app.get(/\/.*/, async (req, res) => {
  try {
    res.json(await model.getAccess(cleanPath(req.path)));
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
    let path = cleanPath(req.path);
    let agent = (req.body && req.body.agent ? req.body.agent : req.query.agent)+'';
    if( !agent ) throw new Error('Agent Required');
    await model.setProtectedPath(path, agent);

    // see if we were given grants
    if( req.body && req.body.access && Array.isArray(req.body.access) ) {
      for( let access of req.body.access ) {
        await model.grantAccess(access.agent, path, access.expire);
      }
    }

    res.json(await model.getAccess(path));
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
    res.json(await model.removeProtectedPath(cleanPath(req.path)));
  } catch(e) {
    res.status(500).json({
      error: true,
      message : e.message,
      stack : e.stack
    });
  }
});

app.put(/\/.*/, async (req, res) => {
  let path = cleanPath(req.path);
  let agent = req.body && req.body.agent ? req.body.agent : req.query.agent;
  let expire = req.body && req.body.expire ? req.body.expire : req.query.expire;

  try {
    await model.grantAccess(agent, path, expire);

    res.json(await model.getAccess(path));
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
    res.json(await model.removeProtectedPath(cleanPath(req.path)));
  } catch(e) {
    res.status(500).json({
      error: true,
      message : e.message,
      stack : e.stack
    });
  }
});

function cleanPath(path) {
  return path.replace(/\/fcrepo\/rest/, '');
}

app.listen(3000, () => {
  logger.info('fin ac listening on port 3000');
});

