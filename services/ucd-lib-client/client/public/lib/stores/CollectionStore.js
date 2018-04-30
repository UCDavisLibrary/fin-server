var {BaseStore} = require('@ucd-lib/cork-app-utils');

class CollectionStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      selected : null,
      byId : {},
      overview : {
        state : this.STATE.INIT
      },
      search : {
        state : this.STATE.INIT
      }
    }

    this.events = {
      SELECTED_COLLECTION_UPDATE : 'selected-collection-update',
      COLLECTION_OVERVIEW_UPDATE : 'collection-overview-update',
      COLLECTION_SEARCH_UPDATE : 'collection-search-update'
    }
  }

  /**
   * Selected
   */
  setSelectedCollection(selected) {
    if( this.data.selected === selected ) return;
    this.data.selected = selected;
    this.emit(this.events.SELECTED_COLLECTION_UPDATE, this.data.selected);
  }

  getSelectedCollection() {
    return this.data.selected;
  }

  /**
   * Search
   */
  setSearchLoading(searchDocument, request) {
    this._setSearchState({
      state : this.STATE.LOADING,
      request, searchDocument
    })
  }

  setSearchLoaded(searchDocument, payload) {
    this._setSearchState({
      state : this.STATE.LOADED,
      searchDocument, payload
    })
  }

  setSearchError(searchDocument, error) {
    this._setSearchState({
      state : this.STATE.ERROR,
      searchDocument, error
    })
  }

  _setSearchState(state) {
    this.data.search = state;
    this.emit(this.events.COLLECTION_SEARCH_UPDATE, this.data.search);
  }

  /**
   * Overview
   */
  setCollectionOverviewLoading(promise) {
    this._setCollectionOverviewState({
      state: this.STATE.LOADING, 
      request : promise
    });
  }

  setCollectionOverviewLoaded(payload) {
    payload = payload.results;

    payload.forEach(item => {
      item.id = item['@id'];
      this.data.byId[item.id] = item;
    });

    payload.sort((a,b) => {
      if( a.name > b.name ) return 1;
      if( a.name < b.name ) return -1;
      return 0;
    });

    this._setCollectionOverviewState({
      state: this.STATE.LOADED,   
      payload
    });
  }

  setCollectionOverviewError(error) {
    this._setCollectionOverviewState({
      state: this.STATE.ERROR,   
      error
    });
  }

  _setCollectionOverviewState(state) {
    this.data.overview = state;
    this.emit(this.events.COLLECTION_OVERVIEW_UPDATE, this.data.overview);
  }

}

module.exports = new CollectionStore();