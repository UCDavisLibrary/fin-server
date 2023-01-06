const {BaseService} = require('@ucd-lib/cork-app-utils');
const RecordStore = require('../stores/RecordStore');
const deepEqual = require('deep-equal');
const config = require('../config');
const seo = require('@ucd-lib/fin-service-utils/lib/seo');
const graphConcat = seo.graphConcat;
const RecordGraph = require('../utils/RecordGraph.js').default;
const ClientMedia = require('../../../../../node-utils/lib/client-media/model.js');

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
      url : `${this.baseUrl}${id.replace(/^\/item/, '')}?root=true`,
      checkCached : () => this.store.getRecord(id),
      onLoading : request => this.store.setRecordLoading(id, request),
      onLoad : result => {
        let rg = new RecordGraph(result.body);
        // get clientMedia for entire collection, even if viewing a single item
        rg.clientMedia = new ClientMedia(id.split('/media')[0], result.body.node);
        this.store.setRecordLoaded(id, rg);
      },
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
  search(searchDocument = {}, debug=true, compact=false, singleNode=false, ignoreClientMedia=false) {
    if( !searchDocument.textFields ) {
      searchDocument.textFields = config.elasticSearch.textFields.record;
    }

    // make sure we aren't sending the same query twice
    let currentSearchDocument = this.store.data.search.searchDocument || {};
    if( deepEqual(currentSearchDocument, searchDocument) ) {
      return this.store.getSearch();
    }

    let params = [];
    if( debug ) params.push('debug=true');
    if( compact ) params.push('compact=true');
    if( singleNode ) params.push('single-node=true');
    
    return this.request({
      url : `${this.baseUrl}${params.length ? '?' + params.join('&') : ''}`,
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
          result.body.results = result.body.results.map(record => {
            let rg = new RecordGraph(record);
            if( !ignoreClientMedia ) {
              rg.clientMedia = new ClientMedia(record.id, record);
            }
            return rg;
          });
          if( !ignoreClientMedia ) {
            result.body.results.map(item => item.getChildren(item.root));
          }
          this.store.setSearchLoaded(searchDocument, result.body);
        }
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
  defaultSearch(id, searchDocument = {}, compact=false, singleNode=false) {
    return this.request({
      url : `${this.baseUrl}?debug=true${compact ? '&compact=true' : ''}${singleNode ? '&single-node=true' : ''}`,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchDocument)
      },
      onLoading : promise => this.store.setDefaultSearchLoading(id, searchDocument, promise),
      onLoad : result => {
        if( result.body.results ) {
          result.body.results = result.body.results.map(record => new RecordGraph(record));
          result.body.results.map(item => item.getChildren(item.root))
          this.store.setDefaultSearchLoaded(id, searchDocument, result.body)
        }        
      },

      onError : e => this.store.setDefaultSearchError(id, searchDocument, e)
    });
  }
}

module.exports = new RecordService();