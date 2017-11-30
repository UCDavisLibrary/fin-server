const {ElasticSearchService} = require('@ucd-lib/cork-app-elastic-search');
const ElasticSearchStore = require('../stores/ElasticSearchStore');

class ElasticSearchServiceImpl extends ElasticSearchService {
  constructor() {
    super();
    this.store = ElasticSearchStore;

    this.baseUrl = '/rest/record'
  }

  get(id) {
    return this.request({
      url : `${this.baseUrl}${id}`,
      checkCached : () => this.store.data.byId[id],
      onLoading : request => this.store.setRecordLoading(id, request),
      onLoad : result => this.store.setRecordLoaded(id, result.body),
      onError : e => this.store.setRecordError(id, e)
    });
  }
}

module.exports = new ElasticSearchServiceImpl();