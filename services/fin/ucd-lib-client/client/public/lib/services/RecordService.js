const {BaseService} = require('@ucd-lib/cork-app-utils');
const RecordStore = require('../stores/RecordStore');
const deepEqual = require('deep-equal');
const config = require('../config');
const seo = require('@ucd-lib/fin-service-utils/lib/seo');
const graphConcat = seo.graphConcat;
const RecordGraph = require('../utils/RecordGraph.js').default;

class RecordService extends BaseService {

  constructor() {
    super();
    this.store = RecordStore;
    this.baseUrl = '/api/item';
  }

  setModel(model) {
    this.model = model;
  }

  get(id) {
    return this.request({
      url : `${this.baseUrl}${id}?root=true`,
      checkCached : () => this.store.getRecord(id),
      onLoading : request => this.store.setRecordLoading(id, request),
      onLoad : result => this.store.setRecordLoaded(id, new RecordGraph(result.body)),
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
  search(searchDocument = {}, debug=true) {
    if( !searchDocument.textFields ) {
      searchDocument.textFields = config.elasticSearch.textFields.record;
    }

    // make sure we aren't sending the same query twice
    let currentSearchDocument = this.store.data.search.searchDocument || {};
    if( deepEqual(currentSearchDocument, searchDocument) ) {
      return this.store.getSearch();
    }

    return this.request({
      url : `${this.baseUrl}${debug ? '?debug=true' : ''}`,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchDocument)
      },
      onLoading : promise => this.store.setSearchLoading(searchDocument,  promise),
      onLoad : result => {
        if( result.body.results ) {
          result.body.results = result.body.results.map(record => new RecordGraph(record));
        }
        result.body.results.map(item => item.getChildren(item.root))
        this.store.setSearchLoaded(searchDocument, result.body)
      },
      onError : e => this.store.setSearchError(searchDocument, e)
    });
  }

    /**
   * @method typeaheadSearch
   * @description Search the records
   * 
   * @param {Object} searchDocument 
   * 
   * @returns {Promise}
   */
  typeaheadSearch(searchDocument = {}, opts={}) {
    if( !searchDocument.textFields ) {
      searchDocument.textFields = config.elasticSearch.textFields.record;
    }

    let qs = {};
    if( opts.debug ) qs.debug = true;
    if( opts.allRecords ) qs.all = true;

    return new Promise((resolve, reject) => {
      this.request({
        url : `${this.baseUrl}`,
        fetchOptions : {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(searchDocument)
        },
        qs,
        onLoad : result => resolve({searchDocument, payload: result.body, state: 'loaded'}),
        onError : e => reject({searchDocument, error: e, state: 'error'})
      });
    });
  }


  /**
   * @method defaultSearch
   * @description Search the catalogs
   * 
   * @param {Object} searchDocument elastic search query parameters
   * @returns {Promise}
   */
  defaultSearch(id, searchDocument = {}) {
    return this.request({
      url : `${this.baseUrl}?debug=true`,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchDocument)
      },
      onLoading : promise => this.store.setDefaultSearchLoading(id, searchDocument, promise),
      // onLoad : result => this.store.setDefaultSearchLoaded(id, searchDocument, result.body),

      onLoad : result => {
        if( result.body.results ) {
          result.body.results = result.body.results.map(record => new RecordGraph(record));
        }
        result.body.results.map(item => item.getChildren(item.root))
        this.store.setDefaultSearchLoaded(id, searchDocument, result.body)
      },

      onError : e => this.store.setDefaultSearchError(id, searchDocument, e)
    });
  }
}

module.exports = new RecordService();