var request = require('superagent');
var elasticsearch = require('elasticsearch');
var jwt = require('./jwt');
var jsonld = require('./jsonld');
var config = require('../config');
var schema = require('../elasticsearch/schema');

var client = new elasticsearch.Client({
  host: config.elasticsearch.host,
  log: config.elasticsearch.log
});

var token = jwt.create('reindex-crawler', true);

async function run() {
  console.log('Grabbing current indexes')
  var oldIndexes = await getCurrentIndexes();
  console.log('Found indexes', oldIndexes);

  console.log('Creating new index');
  var newIndexName = await createIndex();
  console.log('New index created', newIndexName);
  
  console.log('Populating Index');
  console.time('Populating Index Time');
  await crawl(`${config.fcrepo.host}${config.fcrepo.root}`, newIndexName);
  console.timeEnd('Populating Index Time');

  console.log('Updating aliases');
  await updateAliases(oldIndexes, newIndexName);

  console.log('Removing old indexes', oldIndexes);
  await dropIndexes(oldIndexes);
}

async function crawl(url, indexName) {
  let resp;

  if( url === `${server}${root}acl` ) {
    return console.log('Ignoring ACL');
  }
  
  try {
    resp = await request
                      .get(url)
                      .set('Authorization', `Bearer ${token}`)
                      .set('Accept', 'application/ld+json')
  } catch(e) {
    console.log('Failed to fetch', url, e.message);
  }

  if( resp.body && resp.body.length > 0 ) {
    resp = await jsonld.clean(resp.body[0]);
    await insert(resp, indexName);

    console.log('Crawled', resp['@id']);
    if( !resp.contains ) return;

    if( Array.isArray(resp.contains) ) {
      for( var i = 0; i < resp.contains.length; i++ ) {
        crawl(resp.contains[i], indexName);
      }
    } else {
      crawl(resp.contains, indexName);
    }
  }
}

async function getCurrentIndexes() {
  var re = new RegExp('^'+config.elasticsearch.alias);
  var results = [];

  try {
    var resp = await client.cat.indices({v: true, format: 'json'});
    resp.forEach((i) => {
      if( i.index.match(re) ) {
        results.push(i.index);
      }
    })
  } catch(e) {
    throw e;
  }

  return results;
}

async function insert(data, index) {
  try {
    await client.index({
      index : index,
      type: config.elasticsearch.recordSchemaType,
      id : data['@id'],
      body: data
    });
  } catch(e) {
    throw e;
  }
}

async function updateAliases(oldIndexes, newIndex) {
  if( typeof oldIndexes === 'string' ) {
    oldIndexes = [oldIndexes];
  }

  var actions = [];
  oldIndexes.forEach((i) => {
    actions.push({ remove: { index: i, alias: config.elasticsearch.alias } })
  });
  actions.push({ add: { index: newIndex, alias: config.elasticsearch.alias } })

  await client.indices.updateAliases({body: {actions}});
}

async function dropIndexes(oldIndexes) {
    if( typeof oldIndexes === 'string' ) {
    oldIndexes = [oldIndexes];
  }

  try {
    for( var i = 0; i < oldIndexes.length; i++) {
      await client.indices.delete({index: oldIndexes[i]});
    }
  } catch(e) {
    console.log(e);
  }
}

async function createIndex() {
  var newIndexName = `${config.elasticsearch.alias}-${Date.now()}`;

  try {
    await client.indices.create({
      index: newIndexName,
      body : {
        mappings : {
          mark : schema
        }
      }
    });
  } catch(e) {
    throw e;
  }

  return newIndexName;
}

run()
  .then(() => console.log('done'))
  .catch((e) => console.error(e))

process.on('unhandledRejection', (e) => console.error(e));