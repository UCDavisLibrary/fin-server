const express = require('express');
const path = require('http-proxy');
const es = require('./esClient');
const config = require('../config');

let idRegExp = /(ark|doi):\/?[a-zA-Z0-9\.]+\/[a-zA-Z0-9\.]+/;

module.exports = (app) => {
  /**
   * listen for /ark: or /doi:
   */
  app.get(/^\/(ark|doi):*/, handleRequest);
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
  let record = await get(info.id);

  // if we dont find a record, send unknown id message
  if( !record ) {
    return resp.status(404).send(`Unknown ${info.type} identifier: ${info.id}`);
  }

  // if the Accept header contains text/html and there is no
  // suffix in the url, ie just the ark or doi is provided
  // redirect to ucd dams UI.  otherwise send to fcrepo UI
  if( req.get('accept').match(/text\/html/) && !info.suffix ) {
    resp.redirect('/record'+record.id);
  } else {
    resp.redirect(config.fcrepo.root+record.id+info.suffix);
  }
};

/**
 * @function get
 * @description request record from elasticsearch with given
 * identifier (doi or ark)
 * 
 * @param {String} id doi or ark
 * 
 * @returns {Object|null}
 */
async function get(id) {
  let result = await es.search({
    index: config.elasticsearch.record.alias,
    body : {
      query : {
        term : {
          identifier : id
        }
      }
    }
  });

  if( result.hits.total === 0 ) return null;
  return result.hits.hits[0]._source;
}