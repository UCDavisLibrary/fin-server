var router = require('express').Router();
var model = require('../models/collections');
var utils = require('./utils');

router.get('/overview', async (req, res) => {
  try {
    res.json(await model.overview());
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with collection overview retrieval'));
  }
});

router.get('/:id', async (req, res) => {
  try {
    let id = req.param.id;
    res.json(await model.get(id));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with collection retrieval'));
  }
});



module.exports = router;