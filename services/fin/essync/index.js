const express = require('express');
const bodyParser = require('body-parser');
const {config, logger, keycloak, models} = require('@ucd-lib/fin-service-utils');
const ReindexCrawler = require('./lib/reindex-crawler.js');
const api = require('@ucd-lib/fin-api');
const elasticsearch = require('./lib/elasticsearch.js');
require('./lib/model');

api.setConfig({
  host: config.fcrepo.host,
  superuser : true,
  directAccess : true
  // jwt : jwt.create('essync', [config.finac.agents.discover, config.finac.agents.protected])
});
// setInterval(() => {
//   api.setConfig({
//     jwt: jwt.create('essync', [config.finac.agents.discover, config.finac.agents.protected])
//   });
// }, 1000);


// simple, in mem, for now
let statusCache = {};

const app = express();
app.use(bodyParser.text({type: '*/*'}));

// TODO: add admin check
app.get(/^\/reindex\/.*/, keycloak.protect(['admin']), async (req, res) => {
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

function ensureRootPath(req, res, next) {
  let path = req.headers['x-fin-original-url'].match(/\/fcrepo\/rest\/(.*)\/svc:elastic-search/)[1];
  let cmd = req.headers['x-fin-original-url'].match(/\/svc:elastic-search\/(.*)/)[1];
  path = path.split('/');

  // TODO: get svc id from headers
  if( path.length > 1 ) {
    return res.status(400).json({
      error: true,
      message : 'the /svc:elastic-search endpoint only works at the root of models path: /'+path[0],
      correctUrl : config.server.url+'/fcrepo/rest/'+path[0]+'/svc:elastic-search/'+cmd
    });
  }

  req.modelName = path[0];
  req.cmd = cmd;

  next();
}

// list all indexes
app.get(/^\/elastic-search\/.*\/index$/, keycloak.protect(['admin']), ensureRootPath, async (req, res) => {
  try {
    let modelName = req.modelName;

    // make sure this is a known model
    let {model} = await models.get(modelName);
    if( !model.hasSyncMethod('essync') ) {
      throw new Error('The model '+model.id+' does not use essync')
    }

    res.json({
      model : model.id,
      indexes : await elasticsearch.getCurrentIndexes(model.id),
      readAlias : {
        name : model.readIndexAlias,
        index : await elasticsearch.getAlias(model.readIndexAlias)
      },
      writeAlias : {
        name : model.writeIndexAlias,
        index : await elasticsearch.getAlias(model.writeIndexAlias)
      }
    })

  } catch(e) {
    onError(res, e);
  }

});

// get information about an index
app.get(/^\/elastic-search\/.*\/index\/.+/, keycloak.protect(['admin']), ensureRootPath, async (req, res) => {
  try {
    let modelName = req.modelName;
    let indexName = req.path.split('/').pop();

    // make sure this is a known model
    let {model} = await models.get(modelName);
    if( !model.hasSyncMethod('essync') ) {
      throw new Error('The model '+model.id+' does not use essync')
    }

    res.json({
      model : model.id,
      index : indexName,
      definition: await elasticsearch.getIndex(indexName)
    });

  } catch(e) {
    onError(res, e);
  }

});

// get information about an index
app.post(/^\/elastic-search\/.*\/index(\/)?$/, keycloak.protect(['admin']), ensureRootPath, async (req, res) => {
  try {
    let modelName = req.modelName;

    // make sure this is a known model
    let {model} = await models.get(modelName);
    if( !model.hasSyncMethod('essync') ) {
      throw new Error('The model '+model.id+' does not use essync')
    }

    let indexName = await elasticsearch.createIndex(modelName);

    res.json({
      model : model.id,
      index : indexName,
      definition: await elasticsearch.getIndex(indexName)
    });

  } catch(e) {
    onError(res, e);
  }

});

// remove index
app.delete(/^\/elastic-search\/.*\/index\/.+$/, keycloak.protect(['admin']), ensureRootPath, async (req, res) => {
  try {
    let modelName = req.modelName;
    let indexName = req.path.split('/').pop();

    // make sure this is a known model
    let {model} = await models.get(modelName);
    if( !model.hasSyncMethod('essync') ) {
      throw new Error('The model '+model.id+' does not use essync')
    }

    // check if index has aliases
    let index = await elasticsearch.getIndex(indexName);
    if( index.aliases && Object.keys(index.aliases).length ) {
      let aliases = Object.keys(index.aliases).join(', ')
      throw new Error(`Index ${indexName} still has the following aliases pointing to it: ${aliases}`);
    }

    let response = await elasticsearch.deleteIndex(indexName);

    res.json({
      model : model.id,
      index : indexName,
      response 
    });

  } catch(e) {
    onError(res, e);
  }

});

// set alias to an index
app.put(/^\/elastic-search\/.*\/index\/.+$/, keycloak.protect(['admin']), ensureRootPath, async (req, res) => {
  try {
    let modelName = req.modelName;
    let indexName = req.path.split('/').pop();

    let aliasName = req.body;
    if( typeof aliasName === 'object' ) {
      aliasName = req.query.alias;
    }

    if( !aliasName ) throw new Error('You must supply an alias either as the request body or via ?alias=[name] query parameter');
    aliasName = modelName+'-'+aliasName.replace(/.*-/, '');

    // make sure this is a known model
    let {model} = await models.get(modelName);
    if( !model.hasSyncMethod('essync') ) {
      throw new Error('The model '+model.id+' does not use essync')
    }

    await elasticsearch.setAlias(indexName, aliasName);

    res.json({
      model : model.id,
      index : indexName,
      definition: await elasticsearch.getIndex(indexName)
    });

  } catch(e) {
    onError(res, e);
  }

});

// get information about an index
app.post(/^\/elastic-search\/.*\/recreate-index\/.+$/, keycloak.protect(['admin']), ensureRootPath, async (req, res) => {
  try {
    let modelName = req.modelName;
    let indexSource = req.path.split('/').pop();

    // make sure this is a known model
    let {model} = await models.get(modelName);
    if( !model.hasSyncMethod('essync') ) {
      throw new Error('The model '+model.id+' does not use essync')
    }

    let {response, destination} = await elasticsearch.recreateIndex(indexSource);

    res.json({
      model : model.id,
      source : indexSource,
      destination,
      response
    });

  } catch(e) {
    onError(res, e);
  }

});

// get information about an index
app.get(/^\/elastic-search\/.*\/task-status\/.+$/, keycloak.protect(['admin']), async (req, res) => {
  try {
    let id = req.path.split('/').pop();
    res.json(await elasticsearch.esClient.tasks.get({task_id: id}));
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