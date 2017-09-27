var router = require('express').Router();
var model = require('../models/search');
var utils = require('./utils');

router.post('/', async (req, res) => {
  if( !req.body ) {
    return res.json({error: true, message: 'no body sent'});
  }

  try {
    res.json(await model.search(req.body));
  } catch(e) {
    res.json({error: true, message: 'Error with search query', details: errorToDetails(e)});
  }
});

router.get('/', async (req, res) => {
  try {
    var q = JSON.parse(req.query.q || '{}');
    res.json(await model.search(q));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});

module.exports = router;