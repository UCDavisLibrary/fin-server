const router = require('express').Router();
const {applications} = require('@ucd-lib/fin-ucd-lib-node-utils');
const utils = require('./utils');
const cors = require('cors');

router.use(cors());

// all record
router.get('/:appname', async (req, res) => {
  try {
    res.json(await applications.get(req.params.appname));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with collection retrieval'));
  }
});

module.exports = router;