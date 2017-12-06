const {BaseService} = require('@ucd-lib/cork-app-utils');
const CollectionStore = require('../stores/CollectionStore');

class CollectionService extends BaseService {

  constructor() {
    super();
    this.store = CollectionStore;

    this.baseUrl = '/rest/collections';
  }

  async overview() {
    await this.request({
      url : `${this.baseUrl}/overview`,
      checkCached : () => this.store.data.overview,
      onLoading : request => this.store.setCollectionOverviewLoading(request),
      onLoad : result => this.store.setCollectionOverviewLoaded(result.body),
      onError : e => this.store.setCollectionOverviewError(e)
    });

    return this.store.data.overview;
  }

}

module.exports = new CollectionService();