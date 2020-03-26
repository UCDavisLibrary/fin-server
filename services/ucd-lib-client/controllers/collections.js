const router = require('express').Router();
const model = require('../models/collections');
const utils = require('./utils');
const cors = require('cors');

router.use(cors());

// all record
router.get('/all', async (req, res) => {
  try {
    res.json(await model.all());
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with collection retrieval'));
  }
});

// dams search
router.post('/search', async (req, res) => {
  if( !req.body ) {
    return res.json({error: true, message: 'no body sent'});
  }

  try {
    res.json(await model.search(req.body, {debug: req.query.debug}));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});
router.get('/search', async (req, res) => {
  try {
    var q = JSON.parse(req.query.q || '{}');
    res.json(await model.search(q, {debug: req.query.debug}));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});

// es search
router.post('/es-search', async (req, res) => {
  if( !req.body ) {
    return res.json({error: true, message: 'no body sent'});
  }

  try {
    res.json(await model.esSearch(req.body));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});
router.get('/es-search', async (req, res) => {
  try {
    var q = JSON.parse(req.query.q || '{}');
    res.json(await model.esSearch(q));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});

// record by id
router.get('/:id', async (req, res) => {
  try {
    let id = req.param.id;
    res.json(await model.get(id));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with collection retrieval'));
  }
});



module.exports = router;