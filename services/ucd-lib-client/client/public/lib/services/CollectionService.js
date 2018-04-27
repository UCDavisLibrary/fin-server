const {BaseService} = require('@ucd-lib/cork-app-utils');
const CollectionStore = require('../stores/CollectionStore');

class CollectionService extends BaseService {

  constructor() {
    super();
    this.store = CollectionStore;

    this.baseUrl = '/api/collections';
  }

  async overview() {
    await this.request({
      url : `${this.baseUrl}/all`,
      checkCached : () => this.store.data.overview,
      onLoading : request => this.store.setCollectionOverviewLoading(request),
      onLoad : result => this.store.setCollectionOverviewLoaded(result.body),
      onError : e => this.store.setCollectionOverviewError(e)
    });

    return this.store.data.overview;
  }

  /**
   * @method searchCollection
   * @description Search the catalogs
   * 
   * @param {Object} searchDocument
   * 
   * @returns {Promise}
   */
  async search(searchDocument = {}) {
    return await this.request({
      url : this.apiPath+'/search',
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchDocument)
      },
      onLoading : promise => this.store.setSearchLoading(searchDocument, promise),
      onLoad : result => this.store.setSearchLoaded(searchDocument, result.body),
      onError : e => this.store.setSearchError(searchDocument, e)
    });
  }

}

module.exports = new CollectionService();