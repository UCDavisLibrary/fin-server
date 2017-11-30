const {ElasticSearchInterface} = require('@ucd-lib/cork-app-elastic-search');

module.exports = subclass => 
  class ElasticSearchInterfaceImpl extends Mixin(subclass).with(ElasticSearchInterface) {

    async _esGetRecord(id) {
      return this.ElasticSearchModel.get(id);
    }
  }