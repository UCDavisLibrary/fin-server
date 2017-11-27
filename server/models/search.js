
var es = require('../lib/esClient');
var config = require('../config');

class SearchModel {

  search(body = {}) {
    return es.search({
      index : config.elasticsearch.record.alias,
      body : body
    });
  }

}

module.exports = new SearchModel();