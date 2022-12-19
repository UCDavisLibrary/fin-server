const express = require('express');
const {config, logger, jwt} = require('@ucd-lib/fin-service-utils');
const ReindexCrawler = require('./lib/reindex-crawler.js');
const api = require('@ucd-lib/fin-api');
const elasticsearch = require('./lib/elasticsearch.js');
require('./lib/model');

api.setConfig({
  host: config.gatway.host,
  basePath : config.fcrepo.root,
  jwt : jwt.create('essync', ['public', config.finac.agent])
});
setInterval(() => {
  api.setConfig({
    jwt: jwt.create('essync', ['public', config.finac.agent])
  });
}, 1000);


// simple, in mem, for now
let statusCache = {};

const app = express();

// TODO: add admin check
app.get(/^\/reindex\/.*/, async (req, res) => {
  let path = req.path.replace( /^\/reindex\//, '/');
  let cache = statusCache[path];

  if( req.query.status === 'true' ) {
    if( cache ) {
      res.json(cache);
    } else {
      res.json({status: 'none'});
    }
    return;
  }
  if( cache && cache.status === 'crawling' ) {
    return res.json(cache);
  }

  try {
    let crawler = new ReindexCrawler(path, {
      follow : (req.query.follow || '')
        .split(',')
        .map(item => item.trim())
        .filter(item => item)
    });

    statusCache[path] = {
      status : 'crawling',
      startTime : new Date().toISOString(),
      options : crawler.options
    }

    res.redirect(req.headers['x-fin-original-url'].replace(/\?.*/, '')+'?status=true');

    statusCache[path].paths = await crawler.reindex()
    statusCache[path].status = 'crawl-complete';
    statusCache[path].completedTime = new Date().toISOString();
  } catch(e) {
    onError(res, e);
  }
});

app.get('/rebuild-index', async (req, res) => {
  try {
    let crawler = new ReindexCrawler('/collection', {
      follow : 'hasPart'
    });
    crawler.reindex();
  } catch(e) {
    onError(res, e);
  }
});

app.get('/alias', async (req, res) => {
  try {
    let aliases = await elasticsearch.getCurrentIndexes(req.query.alias);
    res.json(aliases);
  } catch(e) {
    onError(res, e);
  }
});

app.put('/alias', async (req, res) => {
  try {
    let resp = await elasticsearch.getCurrentIndexes(req.query.indexName, req.query.alias);
    resp.state = await elasticsearch.getCurrentIndexes(req.query.alias);
    res.json(resp);
  } catch(e) {
    onError(res, e);
  }
});

app.delete('/index/:indexName', async (req, res) => {
  try {
    let resp = await elasticsearch.deleteIndex(req.params.indexName);
    res.json(resp);
  } catch(e) {
    onError(res, e);
  }
});

app.listen(3000, () => {
  logger.info('server ready on port 3000');
});

function onError(res, e) {
  res.status(500).json({
    error : true,
    message : e.message,
    stack : e.stack
  });
}