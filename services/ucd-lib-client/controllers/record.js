var router = require('express').Router();
var model = require('../models/search');
var utils = require('./utils');

const FILL_ATTRIBUTES = ['hasPart', 'associatedMedia'];

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
    let result = await model.get(id);
    await fillRecord(result._source);
    res.json(result);
  } catch(e) {
    res.json(utils.errorResponse(e, 'Error retrieving record: '+id));
  }
}

async function fillRecord(record) {
  for( var i = 0; i < FILL_ATTRIBUTES.length; i++ ) {
    if( !record[FILL_ATTRIBUTES[i]] ) continue;

    await fillAttribute(record, FILL_ATTRIBUTES[i]);
  }
}

async function fillAttribute(record, attribute) {
  let values = record[attribute];
  if( !Array.isArray(values) ) values = [values];

  record['_'+attribute] = [];

  try {
    let resp = await model.mget(values);
    record['_'+attribute] = await resp.docs.map(doc => doc._source);
  } catch(e) {
    // hummmm....
    record['_'+attribute] = e.message;
  }

  for( var i = 0; i < record['_'+attribute].length; i++ ) {
    let childRecord = record['_'+attribute][i];
    await fillRecord(childRecord);
  }
}




module.exports = router;