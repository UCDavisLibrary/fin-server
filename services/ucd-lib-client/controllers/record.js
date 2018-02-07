var router = require('express').Router();
var model = require('../models/search');
var utils = require('./utils');

router.get('/*', handleRequest);

async function handleRequest(req, res) {
  let id = req.query.id;
  if( !id ) {
    id = req.path.replace(/\/rest\/record/);
  }

  if( !id ) {
    return res.json({error: true, message: 'no id sent'});
  }

  try {
    res.json(await model.get(id));
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error retrieving record: '+id));
  }
}




module.exports = router;