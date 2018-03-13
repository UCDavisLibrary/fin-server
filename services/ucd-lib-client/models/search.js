
var es = require('../lib/esClient');
var config = require('../config');

class SearchModel {

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
    // if( !id.match(/^http/) ) {
    //   id = config.server.url+config.fcrepo.root+id;
    // }
      
    return es.get({
      index: config.elasticsearch.record.alias,
      type: '_all',
      id: id
    });
  }

}

module.exports = new SearchModel();