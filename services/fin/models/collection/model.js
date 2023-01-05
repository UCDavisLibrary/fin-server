const {ElasticSearchModel} = require('@ucd-lib/fin-service-utils');

class CollectionsModel extends ElasticSearchModel {

  constructor() {
    super('collection');
  }

}

module.exports = new CollectionsModel();