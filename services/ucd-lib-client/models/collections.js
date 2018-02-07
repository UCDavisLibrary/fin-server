var es = require('../lib/esClient');
var config = require('../config');

class CollectionsModel {

  async get(id) {
    return es.search({
      index : config.elasticsearch.collections.alias,
      body : {
        query : {
          terms : {
            _id : [id]
          }
        }
      }
    });
  }

  async overview() {
    let results = await es.search({
      index : config.elasticsearch.collection.alias,
      body : {}
    });

    if( !results.hits ) return [];
    if( !results.hits.hits ) return [];

    return results.hits.hits
            .filter(item => !item._id.match(/\/fcrepo\/rest\/$/))
            .map(item => item._source);
  }
}

module.exports = new CollectionsModel();