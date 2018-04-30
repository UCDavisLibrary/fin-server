const ElasticSearchModel = require('./ElasticSearchModel');
const RecordStore = require('../stores/RecordStore');
const RecordService = require('../services/RecordService');
const AppStateModel = require('./AppStateModel');
var config = require('../config');

class RecordModel extends ElasticSearchModel {

  constructor() {
    super();

    this.service = RecordService;
    this.store = RecordStore;
    this.store.config = config.elasticSearch;

    this.register('RecordModel');
  }

  /**
   * @method defaultSearch
   * @description preform a default search.  Good for finding default
   * agg counts.
   * 
   * @param {String} collectionId
   * 
   * @returns {Promise}
   */
  async defaultSearch(collectionId) {
    let storeId = collectionId;
    if( !storeId ) storeId = 'default';

    if( this.store.getDefaultSearch(storeId) ) {
      let search = this.store.getDefaultSearch(storeId);

      if( search.state === this.store.STATE.LOADING ) {
        await search.request;
      }
      
      return this.store.getDefaultSearch(storeId);
    }

    let searchDocument = this.emptySearchDocument();

    if( collectionId ) {
      this.appendKeywordFilter(searchDocument, 'collectionId', collectionId, 'and');
    }

    await this.service.defaultSearch(storeId, searchDocument);

    return this.store.getDefaultSearch(storeId);
  }


  /**
   * @method get
   * @description load a record by id from elastic search
   * 
   * @param {String} id record id
   * 
   * @returns {Promise} resolves to record
   */
  async get(id) {
    await this.service.get(id);
    return this.store.data.byId[id];
  }

  /**
   * @method search
   * @description preform a es collection search given an app search document
   * 
   * @param {Object} searchDocument
   * 
   * @returns {Promise}
   */
  async search(searchDocument = {}) {
    if( !searchDocument.filters ) searchDocument.filters = {};

    // first, we need to verify all filters are available to us
    let collectionId = '';
    if( searchDocument.filters.isPartOf ) {
      collectionId = searchDocument.filters.isPartOf.value[0];
    }

    let defaultSearch = await this.defaultSearch(collectionId);
    let corrections = false;
    for( var key in searchDocument.filters ) {
      if( key === 'isPartOf' ) continue;


      let type = config.elasticSearch.facets[key].type;

      if( type === 'facet' ) {
        let bucket = defaultSearch.payload.aggregations.facets[key];
        if( bucket === undefined ) {
          corrections = true;
          delete searchDocument.filters[key];
        } else {
          searchDocument.filters[key].value = searchDocument.filters[key].value
            .filter(value => {
              if( bucket[value] === undefined ) {
                corrections = true;
                return false;
              }
              return true;
            });
          
          if( !searchDocument.filters[key].value.length ) {
            delete searchDocument.filters[key];
          }
        }
      }
    }

    if( corrections ) {
      AppStateModel.setLocation('/search/'+this.searchDocumentToUrl(searchDocument));
      return await this.search(searchDocument);
    }

    await this.service.search(searchDocument);

    return this.store.getSearch();
  }

  /**
   * @method getCurrentSearchDocument
   * @description return the current search document
   */
  getCurrentSearchDocument() {
    if( this.store.data.search.searchDocument ) {
      return this.store.data.search.searchDocument;
    }
    return this.emptySearchDocument();
  }

}

module.exports = new RecordModel();