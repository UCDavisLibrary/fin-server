
var es = require('../lib/esClient');
var config = require('../config');

class SearchModel {

  search(body = {}) {
    return es.search({
      index : config.elasticsearch.record.alias,
      body : body
    });
  }

  get(id) {
    if( !id.match(/^http/) ) {
      id = config.server.url+config.fcrepo.root+id;
    }
      
    return es.get({
      index: config.elasticsearch.record.alias,
      type: '_all',
      id: id
    });
  }

}

module.exports = new SearchModel();