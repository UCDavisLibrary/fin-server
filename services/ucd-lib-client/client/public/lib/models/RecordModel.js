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

    this.MAX_WINDOW = 10000;

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

  async createMediaObject(record) {
    if (record.isRootRecord === false) return;
    
    let media = {};

    record['associatedMedia'] ? traverse(record['associatedMedia']) : traverse(record);

    function traverse(item) {
      if (Array.isArray(item)) {
        item.forEach(element => traverse(element));
      } else if ((typeof item === 'object') && (item !== null)) {
        for (let key in item) {
          if (key !== '@type') continue;
          traverse(searchTypes(item[key], item));
        }
      }
    }

    function searchTypes(types, element) {
      if (types.some(res => res.includes("AudioObject"))){
        if (!media.audio) media.audio = [];
        return media.audio.push(element);
      }
      if (types.some(res => res.includes("Video"))) {
        if (!media.video) media.video = [];
        return media.video.push(element);
      } 
      if (types.some(res => res.includes("ImageObject"))) {
        if (!media.image) media.image = [];
        return media.image.push(element);
      }
      if (types.some(res => res.includes("ImageList"))) {
        if (!media.imageList) media.imageList = [];
        return media.imageList.push(element);
      }
    }

    record.media = media;

    return record;
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

  setSearchLocation(searchDocument) {
    AppStateModel.setLocation('/search/'+this.searchDocumentToUrl(searchDocument));
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
    if( searchDocument.filters['isPartOf.@id'] ) {
      collectionId = searchDocument.filters['isPartOf.@id'].value[0];
    }

    let defaultSearch = await this.defaultSearch(collectionId);
    let corrections = false;
    for( var key in searchDocument.filters ) {
      if( key === 'isPartOf.@id' ) continue;

      let type = config.elasticSearch.facets[key].type;

      if( type === 'facet' ) {
        let bucket = defaultSearch.payload.aggregations.facets[key];
        if( bucket === undefined ) {
          corrections = true;
          console.warn(`Collection '${collectionId}' unknown bucket '${key}', correcting search.`);
          delete searchDocument.filters[key];
        } else {
          searchDocument.filters[key].value = searchDocument.filters[key].value
            .filter(value => {
              if( bucket[value] === undefined ) {
                console.warn(`Collection '${collectionId}' bucket '${key}' has no value: '${value}', correcting search.`, defaultSearch.payload.aggregations.facets);
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
      // This causes loop badness
      // AppStateModel.setLocation(path);
      return await this.search(searchDocument, false);
    }
    
    // if( updateHistoryState ) {
    //   if( !history.state ) {
    //     AppStateModel.setLocation(path);
    //   } if( history.state && history.state.location !== path ) {
    //     AppStateModel.setLocation(path);
    //   }
    // }

    if( searchDocument.limit + searchDocument.offset > this.MAX_WINDOW ) {
      this.store.setSearchError(searchDocument, new Error('Sorry, digital.ucdavis.edu does not serve more than 10,000 results for a query'), true);
      return this.store.getSearch();
    }

    try {
      await this.service.search(searchDocument);
    } catch(e) {}

    return this.store.getSearch();
  }

  /**
   * @method getCurrentSearchDocument
   * @description return the current search document
   * 
   * @returns {Object}
   */
  getCurrentSearchDocument() {
    if( this.store.data.search.searchDocument ) {
      return this.store.getSearch().searchDocument;
    }
    return this.emptySearchDocument();
  }

}

module.exports = new RecordModel();