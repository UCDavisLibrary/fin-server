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
    res.json(utils.errorResponse(e, 'Error with search query'));
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

router.post('/collection', async (req, res) => {
  if( !req.body ) {
    return res.json({error: true, message: 'no body sent'});
  }

  try {
    res.json(await model.searchCollection(req.body));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});

router.get('/collection', async (req, res) => {
  try {
    var q = JSON.parse(req.query.q || '{}');
    res.json(await model.searchCollection(q));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with collection search query'));
  }
});

module.exports = router;