var {BaseStore} = require('@ucd-lib/cork-app-utils');

class CollectionStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      byId : {},
      overview : {
        state : this.STATE.INIT
      },
      search : {
        state : this.STATE.INIT
      }
    }

    this.events = {
      COLLECTION_OVERVIEW_UPDATE : 'collection-overview-update',
      COLLECTION_UPDATE : 'collection-update',
      COLLECTION_SEARCH_UPDATE : 'collection-search-update'
    }
  }

  getCollection(id) {
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
    // payload = payload.results;

    payload.forEach(item => {
      item._id = item['@id']; // friendly id for polymer data binding
      this.data.byId[item['@id']] = item;
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


  /**
   * Get
   */
  setCollectionLoading(promise) {
    this._setCollectionState({
      state: this.STATE.LOADING, 
      request : promise
    });
  }

  setCollectionLoaded(payload) {
    // debugger;
    if( payload.node && payload.node.length ) {
      payload.node.forEach(item => {
        item._id = item['@id']; // friendly id for polymer data binding
        this.data.byId[item['@id']] = item;
      });

      // payload.sort((a,b) => {
      //   if( a.name > b.name ) return 1;
      //   if( a.name < b.name ) return -1;
      //   return 0;
      // });  
    }
   
    this._setCollectionState({
      state: this.STATE.LOADED,   
      payload
    });
  }

  setCollectionError(error) {
    this._setCollectionState({
      state: this.STATE.ERROR,   
      error
    });
  }

  _setCollectionState(state) {
    this.data.overview = state;
    this.emit(this.events.COLLECTION_UPDATE, this.data.overview);
  }


  /**
   * Admin Data
   */
  // setAdminDataLoading(promise) {
  //   this._setCollectionState({
  //     state: this.STATE.LOADING, 
  //     request : promise
  //   });
  // }

  // setAdminDataLoaded(payload) {
  //   // debugger;
  //   if( payload.node && payload.node.length ) {
  //     payload.node.forEach(item => {
  //       item._id = item['@id']; // friendly id for polymer data binding
  //       this.data.byId[item['@id']] = item;
  //     });

  //     // payload.sort((a,b) => {
  //     //   if( a.name > b.name ) return 1;
  //     //   if( a.name < b.name ) return -1;
  //     //   return 0;
  //     // });  
  //   }
   
  //   this._setCollectionState({
  //     state: this.STATE.LOADED,   
  //     payload
  //   });
  // }

  // setAdminDataError(error) {
  //   this._setCollectionState({
  //     state: this.STATE.ERROR,   
  //     error
  //   });
  // }

  // _setCollectionState(state) {
  //   this.data.overview = state;
  //   this.emit(this.events.COLLECTION_UPDATE, this.data.overview);
  // }
  
}

module.exports = new CollectionStore();