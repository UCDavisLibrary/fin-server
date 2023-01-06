const {ElasticSearchModel} = require('@ucd-lib/fin-service-utils');

class ApplicationsModel extends ElasticSearchModel {

  constructor() {
    super('application');
  }

  is(id, types=[]) {
    if( id.match(/^\/application\//) ) return true;
    return false;
  }


}

module.exports = new ApplicationsModel();