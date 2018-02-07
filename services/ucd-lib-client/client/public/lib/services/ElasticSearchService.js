const {ElasticSearchService} = require('@ucd-lib/cork-app-elastic-search');
const ElasticSearchStore = require('../stores/ElasticSearchStore');

class ElasticSearchServiceImpl extends ElasticSearchService {
  constructor() {
    super();
    this.store = ElasticSearchStore;

    this.baseUrl = '/rest/record'
  }

  async get(id) {
    await this.request({
      url : `${this.baseUrl}${id}`,
      checkCached : () => this.store.data.byId[id],
      onLoading : request => this.store.setRecordLoading(id, request),
      onLoad : result => this.store.setRecordLoaded(id, result.body),
      onError : e => this.store.setRecordError(id, e)
    });

    return this.store.data.byId[id];
  }
}

module.exports = new ElasticSearchServiceImpl();