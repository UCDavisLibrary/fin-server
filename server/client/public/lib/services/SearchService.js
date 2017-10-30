var request = require('superagent');
var BaseService = require('cork-app-utils').BaseService;
var SearchStore = require('../stores/SearchStore');

class SearchService extends BaseService {

  constructor() {
    super();
    this.store = SearchStore;
  }

  /**
   * @method
   * @description Search the catalogs
   * 
   * @param {Object} query - elastic search query parameters
   * @returns {Promise}
   */
  search(query = {}) {
    this.store.setSearchLoading(query);

    return new Promise((resolve, reject) => {
      this.call({
        resolve, reject,
        request : request
                    .post('/rest/search')
                    .send(query),
        onError   : e => this.store.setSearchError(e),
        onSuccess : result => this.store.setSearchLoaded(result)
      });
    });
  }

  /**
   * @method
   * @description Search the catalogs
   * 
   * @param {Object} query - elastic search query parameters
   * @returns {Promise}
   */
  defaultSearch(query = {}) {
    this.store.setDefaultSearchLoading(query);

    return new Promise((resolve, reject) => {
      this.call({
        resolve, reject,
        request : request
                    .post('/rest/search')
                    .send(query),
        onError   : e => this.store.setDefaultSearchError(e),
        onSuccess : result => this.store.setDefaultSearchLoaded(result)
      });
    });
  }

}

module.exports = new SearchService();