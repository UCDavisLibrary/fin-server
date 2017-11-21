var {BaseStore} = require('@ucd-lib/cork-app-utils');

class CollectionStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      selected : {
        state : this.STATE.INIT
      },
      byId : {},
      // should include the overview state
      overview : {
        state : this.STATE.INIT
      }
    }

    this.events = {
      COLLECTION_UPDATE : 'collection-update',
      SELECTED_COLLECTION_UPDATE : 'selected-collection-update',
      COLLECTION_OVERVIEW_UPDATE : 'collection-overview-update'
    }
  }

  setSelectedCollection(collection) {
    this.data.selected = collection;
    this.semit(this.events.SELECTED_COLLECTION_UPDATE, this.data.selected);
  }

  setCollectionLoading(id, promise) {
    this._setCollectionState({
      state: this.STATE.LOADING, 
      id: id,
      request : promise
    });
  }

  setCollectionLoaded(id, payload) {
    this._setCollectionState({
      state: this.STATE.LOADED,   
      id, payload
    });
  }

  setCollectionError(id, error) {
    this._setCollectionState({
      state: this.STATE.ERROR,   
      id, error
    });
  }

  _setCollectionState(state) {
    this.data.byId[state.id] = state;
    this.emit(this.events.COLLECTION_UPDATE, this.data.byId[state.id]);
  }

  setCollectionOverviewLoading(promise) {
    this._setCollectionOverviewState({
      state: this.STATE.LOADING, 
      request : promise
    });
  }

  setCollectionOvreviewLoaded(payload) {
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