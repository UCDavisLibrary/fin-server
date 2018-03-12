var {BaseStore} = require('@ucd-lib/cork-app-utils');

class CollectionStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      selected : null,
      byId : {},
      // should include the overview state
      overview : {
        state : this.STATE.INIT
      }
    }

    this.events = {
      SELECTED_COLLECTION_UPDATE : 'selected-collection-update',
      COLLECTION_OVERVIEW_UPDATE : 'collection-overview-update'
    }
  }

  setSelectedCollection(selected) {
    if( this.data.selected === selected ) return;
    this.data.selected = selected;
    this.emit(this.events.SELECTED_COLLECTION_UPDATE, this.data.selected);
  }

  setCollectionOverviewLoading(promise) {
    this._setCollectionOverviewState({
      state: this.STATE.LOADING, 
      request : promise
    });
  }

  setCollectionOverviewLoaded(payload) {
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