
var es = require('../lib/esClient');
var config = require('../config');

class SearchModel {

  searchCollection(body = {}) {
    return es.search({
      index : config.elasticsearch.collection.alias,
      body : body
    });
  }

  search(body = {}) {
    // right now, only allow search on root records
    if( !body.query ) body.query = {};
    if( !body.query.bool ) body.query.bool = {};
    if( !body.query.bool.filter ) body.query.bool.filter = [];
    body.query.bool.filter.push({
      term : {
        isRootRecord : true
      }
    });

    return es.search({
      index : config.elasticsearch.record.alias,
      body : body
    });
  }

  get(id) {
    return es.get({
      index: config.elasticsearch.record.alias,
      type: '_all',
      id: id
    });
  }

  mget(ids) {
    return es.mget({
      index: config.elasticsearch.record.alias,
      type: '_all',
      body: {ids}
    });
  }

}

module.exports = new SearchModel();