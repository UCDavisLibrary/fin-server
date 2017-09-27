const DataSync = require('./DataSync');
const esClient = require('../lib/esClient');
const config = require('../config');


class ElasticSearchSync extends DataSync {

  constructor() {
    super();
  }

  onUpdate(id, jsonld) {
    client.index({
      index : config.elasticsearch.alias,
      type: config.elasticsearch.recordSchemaType,
      id : id,
      body: jsonld
    });
  }

  onDelete(id) {
    client.delete({
      index : config.elasticsearch.alias,
      type: config.elasticsearch.recordSchemaType,
      id: id
    });
  }
}

module.exports = new ElasticSearchSync();