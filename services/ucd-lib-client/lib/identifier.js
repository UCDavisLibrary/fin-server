const express = require('express');
const path = require('http-proxy');
const es = require('./esClient');
const config = require('../config');

let idRegExp = /(ark|doi):\/?[a-zA-Z0-9\.]+\/[a-zA-Z0-9\.]+/;

module.exports = (app) => {
  app.get(/^\/(ark|doi):*/, handleRequest);
};

async function handleRequest(req, resp) {
  let info = req.url.split(idRegExp);
  info = {
    id : req.url.match(idRegExp)[0],
    type : info[1],
    suffix : info[2]
  }

  let record = await get(info.id);
  if( !record ) {
    return resp.status(404).send(`Unknown ${info.type} identifier: ${info.id}`);
  }

  if( req.get('accept').match(/text\/html/) && !info.suffix ) {
    resp.redirect('/record'+record.id);
  } else {
    resp.redirect(config.fcrepo.root+record.id+info.suffix);
  }
};

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