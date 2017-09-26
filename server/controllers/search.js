var router = require('express').Router();
var model = require('../models/search');

router.post('/', async (req, res) => {
  if( !req.body ) {
    return res.send({error: true, message: 'no body sent'});
  }

  try {
    res.send(await model.search(req.body));
  } catch(e) {
    res.send({error: true, message: 'Error with search query', details: errorToDetails(e)});
  }
});

router.get('/', async (req, res) => {
  try {
    var q = JSON.parse(req.query.q || '{}');
    res.send(await model.search(q));
  } catch(e) {
    res.send({error: true, message: 'Error with search query', details: errorToDetails(e)});
  }
});

function errorToDetails(e) {
  return {
    message : e.message,
    details : e.details
  }
}

module.exports = router;