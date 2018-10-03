const router = require('express').Router();
const {logger} = require('@ucd-lib/fin-node-utils');
const tar = require('../lib/tar');
const path = require('path');

router.get('/', async (req, res) => {
  let path = req.query.fcrepoPath;
  let jwt = (req.headers.authorization || '').replace(/bearer /i, '');

  if( !path ) {
    return res.status(400).json({
      error : true,
      message : 'Query parameters fcrepoPath required'
    });
  }

  logger.info(`tar service listing files from ${path}`);

  try {
    let files = await tar.extractFileListFromBag({path, jwt});
    json.send(files);
  } catch(e) {
    logger.error(`tar service failed to list files from ${path}`, e);
    res.status(400).json({
      error : true,
      message : e.message,
      stack : e.stack
    });
  }
});

module.exports = router;