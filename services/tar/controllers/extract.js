const router = require('express').Router();
const {logger} = require('@ucd-lib/fin-node-utils');
const tar = require('../lib/tar');
const path = require('path');

router.get('*', async (req, res) => {
  let fcpath = req.query.fcrepoPath;
  let filename = req.query.filePath;
  let jwt = (req.headers.authorization || '').replace(/bearer /i, '');

  if( !fcpath || !filename ) {
    return res.status(400).json({
      error : true,
      message : 'Query parameters fcrepoPath and filePath required'
    });
  }

  logger.info(`tar service extracting ${filename} from ${fcpath}`);

  try {
    filename = path.parse(filename).base;
    res.set('Content-Disposition', `attachment; filename="${filename}"`);

    let fileStream = await tar.extractFileFromBag({
      path: fcpath, filename, jwt
    });

    fileStream.pipe(res);
  } catch(e) {
    logger.error(`tar service failed to extract ${filename} from ${fcpath}`, e);
    res.status(400).json({
      error : true,
      message : e.message,
      stack : e.stack
    });
  }
});

module.exports = router;