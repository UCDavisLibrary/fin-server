const router = require('express').Router();
const {logger} = require('@ucd-lib/fin-node-utils');
const tar = require('../lib/tar');
const path = require('path');

router.get('/', async (req, res) => {
  let path = req.query.fcrepoPath;
  let filename = req.query.filePath;
  let jwt = (req.headers.authorization || '').replace(/bearer /i, '');

  if( !path || !filename ) {
    return res.status(400).json({
      error : true,
      message : 'Query parameters fcrepoPath and filePath required'
    });
  }

  logger.info(`bag service extracting ${filename} from ${path}`);

  try {
    let fileStream = await tar.extractFileFromBag({
      path, filename, jwt
    });

    filename = path.parse(filename).base;
    res.set('Content-Disposition', `attachment; filename="${path}"`);

    fileStream.pipe(res);
  } catch(e) {
    logger.error(`bag service failed to extract ${filename} from ${path}`, e);
    res.status(400).json({
      error : true,
      message : e.message,
      stack : e.stack
    });
  }
});

module.exports = router;