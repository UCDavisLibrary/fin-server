const router = require('express').Router();
const model = require('./model.js');

// record by id
router.get('/*', async (req, res) => {
  try {
    let id = '/collection'+req.path;

    let opts = {
      seo : (req.query.seo || req.query.schema) ? true : false,
      admin : req.query.admin ? true : false,
      compact : req.query.compact ? true : false,
      singleNode : req.query['single-node'] ? true : false
    }

    res.json(await model.get(id, opts));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with collection retrieval'));
  }
});

module.exports = router;