const {ElasticSearchModel} = require('@ucd-lib/fin-service-utils');

class CollectionsModel extends ElasticSearchModel {

  constructor() {
    super('collection');
    this.transformService = 'es-collection-transform';
  }

  is(id, types=[]) {
    if( id.match(/^\/collection\//) ) return true;
    return false;
  }

}

module.exports = new CollectionsModel();