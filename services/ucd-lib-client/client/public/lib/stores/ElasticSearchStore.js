var {ElasticSearchStore} = require('@ucd-lib/cork-app-elastic-search');

class ElasticSearchStoreImpl extends ElasticSearchStore {

  constructor() {
    super();

    this.data.byId = {};
    this.data.searchCollection = {};

    this.events.RECORD_UPDATE = 'es-record-update';
    this.events.SEARCH_COLLECTION_UPDATE = 'es-search-collection-update';
  }

  setRecordLoading(id, promise) {
    this._setRecordState({
      state: this.STATE.LOADING, 
      id,
      request : promise
    });
  }

  setRecordLoaded(id, payload) {
    payload._source.id = payload._source['@id'];
    this._setRecordState({
      state: this.STATE.LOADED,   
      payload, id
    });
  }

  setRecordError(id, error) {
    this._setRecordState({
      state: this.STATE.ERROR,   
      error, id
    });
  }

  _setRecordState(state) {
    this.data.byId[state.id] = state;
    this.emit(this.events.RECORD_UPDATE, state);
  }

  /**
   * Search Collection
   */
  setSearchCollectionLoading(query, promise) {
    this._setSearchCollectionState({
      state: this.STATE.LOADING, 
      query: query,
      request : promise
    });
  }

  setSearchCollectionLoaded(query, payload) {
    payload = payload
      .hits.hits.map(item => {
        item._source.thumbnail = '/fcrepo/rest'+item._source.workExample+'/svc:iiif/full/,320/0/default.jpg'
        return item._source;
      });

    this._setSearchCollectionState({
      state: this.STATE.LOADED,   
      query: query,
      payload: payload
    });
  }

  setSearchCollectionError(query, e) {
    this._setSearchCollectionState({
      state: this.STATE.ERROR,   
      query: query,
      error: e
    });
  }

  _setSearchCollectionState(state) {
    this.data.searchCollection = Object.assign({}, state);
    this.emit(this.events.SEARCH_COLLECTION_UPDATE, this.data.searchCollection);
  }

  getSearch() {
    return this.data.search;
  }

}

module.exports = new ElasticSearchStoreImpl();