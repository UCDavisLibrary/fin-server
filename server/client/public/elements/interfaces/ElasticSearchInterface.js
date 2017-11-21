const {ElasticSearchInterface} = require('@ucd-lib/cork-app-elastic-search');

module.exports = subclass => 
  class ElasticSearchInterfaceImpl extends Mixin(subclass).with(ElasticSearchInterface) {

    async _setSearchPageSize(size) {
      this.ElasticSearchModel.size = size;
      let query = this.ElasticSearchModel.getSearch().query;
      return await this.ElasticSearchModel.search(query);
    }
  }