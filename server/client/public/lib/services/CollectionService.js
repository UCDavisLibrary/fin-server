const {BaseService} = require('@ucd-lib/cork-app-utils');
const CollectionStore = require('../stores/CollectionStore');

class CollectionService extends BaseService {

  constructor() {
    super();
    this.store = CollectionStore;

    this.baseUrl = '/rest/collections';
  }

  overview() {
    return this.request({
      url : `${this.baseUrl}/overview`,
      checkCached : () => this.store.data.overview,
      onLoading : request => this.store.setCollectionOverviewLoading(request),
      onLoad : result => this.store.setCollectionOvreviewLoaded(result.body),
      onError : e => this.store.setCollectionOverviewError(e)
    });
  }

}

module.exports = new CollectionService();