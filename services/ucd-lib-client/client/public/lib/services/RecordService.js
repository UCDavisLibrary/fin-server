const {BaseService} = require('@ucd-lib/cork-app-utils');
const RecordStore = require('../stores/RecordStore');
const deepEqual = require('deep-equal');
const config = require('../config');

class RecordService extends BaseService {

  constructor() {
    super();
    this.store = RecordStore;
    this.baseUrl = '/api/records'
  }

  async get(id) {
    return await this.request({
      url : `${this.baseUrl}${id}`,
      checkCached : () => this.store.data.byId[id],
      onLoading : request => this.store.setRecordLoading(id, request),
      onLoad : result => this.store.setRecordLoaded(id, result.body),
      onError : e => this.store.setRecordError(id, e)
    });
  }

  /**
   * @method search
   * @description Search the records
   * 
   * @param {Object} searchDocument 
   * 
   * @returns {Promise}
   */
  async search(searchDocument = {}) {
    searchDocument.textFields = config.elasticSearch.textFields.record;

    // make sure we aren't sending the same query twice
    let currentSearchDocument = this.store.data.search.searchDocument || {};
    if( deepEqual(currentSearchDocument, searchDocument) ) {
      return this.store.getSearch();
    }

    return await this.request({
      url : `${this.baseUrl}/search?debug=true`,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchDocument)
      },
      onLoading : promise => this.store.setSearchLoading(searchDocument,  promise),
      onLoad : result => this.store.setSearchLoaded(searchDocument, result.body),
      onError : e => this.store.setSearchError(searchDocument, e)
    });
  }


  /**
   * @method defaultSearch
   * @description Search the catalogs
   * 
   * @param {Object} searchDocument elastic search query parameters
   * @returns {Promise}
   */
  async defaultSearch(id, searchDocument = {}) {
    return await this.request({
      url : `${this.baseUrl}/search?debug=true`,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchDocument)
      },
      onLoading : promise => this.store.setDefaultSearchLoading(id, searchDocument, promise),
      onLoad : result => this.store.setDefaultSearchLoaded(id, searchDocument, result.body),
      onError : e => this.store.setDefaultSearchError(id, searchDocument, e)
    });
  }
}

module.exports = new RecordService();