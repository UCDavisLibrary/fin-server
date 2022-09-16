const config = require('../config');
const {logger} = require('@ucd-lib/fin-node-utils');
const cors = require('cors');
const {records} = require('@ucd-lib/fin-ucd-lib-node-utils');
const model = records;

let idRegExp = /(ark|doi):\/?[a-zA-Z0-9\.]+\/[a-zA-Z0-9\.]+/;

module.exports = (app) => {
  /**
   * listen for /ark: or /doi:
   */
  app.get(/^\/(ark|doi):*/, cors(), handleRequest);
};

/**
 * @function handleRequest
 * @description handle express request
 * 
 * @param {Object} req express request
 * @param {Object} resp express response
 */
async function handleRequest(req, resp) {
  // split apart id, type and suffix from url
  let info = req.url.split(idRegExp);
  info = {
    id : req.url.match(idRegExp)[0],
    type : info[1],
    suffix : info[2]
  }

  // request record from identifier field in elasticsearch
  let record;
  try {
    record = await model.getByArk(info.id);
  } catch(e) {
    logger.error('error looking up ark: ', info, e);
    return resp.status(500).json({error: true, message: e.message, stack: e.stack});
  }

  // if we dont find a record, send unknown id message
  if( !record ) {
    return resp.status(404).send(`Unknown ${info.type} identifier: ${info.id}`);
  }

  // if the Accept header contains text/html and there is no
  // suffix in the url, ie just the ark or doi is provided
  // redirect to ucd dams UI.  otherwise send to fcrepo UI
  if( (req.get('accept') || '').match(/text\/html/) ) {
    if( record['@type'].indexOf('http://schema.org/Collection') > -1 ) {
      resp.redirect(record['@id']);
    } else {
      resp.redirect(record['@id']+info.suffix);
    }
  } else {
    resp.redirect(config.fcrepo.root+record['@id']+info.suffix);
  }
};

