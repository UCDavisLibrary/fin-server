const {BaseStore} = require('@ucd-lib/cork-app-utils');
const clone = require('clone');

class RecordStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      byId : {},
      // by collection id
      defaultSearch : {},
      search : {
        state : this.STATE.INIT
      }
    }

    this.events = {
      RECORD_UPDATE : 'record-update',
      RECORD_SEARCH_UPDATE : 'record-search-update',
      DEFAULT_RECORD_SEARCH_UPDATE : 'default-record-search-update'
    }

  }

  getRecord(id) {
    let parts = id.split('/').filter(p => p !== '');
    for( let i = parts.length-1; i >= 0; i-- ) {
      let pid = '/'+parts.join('/');
      if( this.data.byId[pid] ) {
        return this.data.byId[pid];
      }
      parts.splice(i, 1);
    }
    return null;
  }

  setRecordLoading(id, promise) {
    this._setRecordState({
      state: this.STATE.LOADING, 
      id,
      request : promise
    });
  }

  setRecordLoaded(id, payload) {
    this._setRecordState({
      state: this.STATE.LOADED,
      rootId : payload['@id'],
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
    if( state.rootId ) {
      this.data.byId[state.rootId] = state;
    }
    this.emit(this.events.RECORD_UPDATE, state);
  }

  /**
   * Search
   */
  setSearchLoaded(searchDocument, payload) {
    this._setSearchState({
      state: this.STATE.LOADED,   
      searchDocument, payload
    });
  }

  setSearchLoading(searchDocument, request) {
    this._setSearchState({
      state: this.STATE.LOADING,   
      searchDocument, request
    });
  }

  setSearchError(searchDocument, error, showErrorMessage=false) {
    this._setSearchState({
      state: this.STATE.ERROR,   
      searchDocument, error,
      showErrorMessage
    });
  }

  _setSearchState(state) {
    this.data.search = state;
    this.emit(this.events.RECORD_SEARCH_UPDATE, state);
  }

  getSearch() {
    return clone(this.data.search);
  }

  /**
   * Default Search
   */
  setDefaultSearchLoading(id, searchDocument, promise) {
    this._setDefaultSearchState({
      id, searchDocument,
      state: this.STATE.LOADING, 
      request : promise
    });
  }

  setDefaultSearchLoaded(id, searchDocument, payload) {
    this._setDefaultSearchState({
      id, searchDocument,
      state: this.STATE.LOADED,   
      payload
    });
  }

  setDefaultSearchError(id, searchDocument, e) {
    this._setDefaultSearchState({
      id, searchDocument,
      state: this.STATE.ERROR,   
      error: e
    });
  }

  getDefaultSearch(id) {
    return this.data.defaultSearch[id];
  }

  _setDefaultSearchState(state) {
    this.data.defaultSearch[state.id] = state;
    this.emit(this.events.DEFAULT_SEARCH_UPDATE, this.data.defaultSearch[state.id]);
  }

}

module.exports = new RecordStore();