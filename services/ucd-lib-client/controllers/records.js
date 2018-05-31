const router = require('express').Router();
const model = require('../models/records');
const utils = require('./utils');
const cors = require('cors');

router.use(cors());

router.post('/search', async (req, res) => {
  if( !req.body ) {
    return res.json({error: true, message: 'no body sent'});
  }

  try {
    res.json(await model.search(req.body, req.query.debug));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});
router.get('/search', async (req, res) => {
  try {
    var q = JSON.parse(req.query.q || '{}');
    res.json(await model.search(q, req.query.debug));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error with search query'));
  }
});

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


router.get('/*', async (req, res) => {
  let id = req.query.id;
  if( !id ) {
    id = req.path.replace(/\/api\/record/);
  }

  if( !id ) {
    return res.json({error: true, message: 'no id sent'});
  }

  try {
    let result = await model.get(id);
    res.json(result);
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error retrieving record: '+id));
  }
});

module.exports = router;