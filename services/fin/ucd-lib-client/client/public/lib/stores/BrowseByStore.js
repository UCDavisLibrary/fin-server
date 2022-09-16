const {BaseStore} = require('@ucd-lib/cork-app-utils');

class BrowseByStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      facets : {}
    };
    this.events = {
      BROWSE_BY_FACET_UPDATE : 'browse-by-facet-update'
    };
  }

  setFacetLoading(property, request) {
    this._setFacetState({
      state : this.STATE.LOADING,
      request, id : property
    });
  }

  setFacetLoaded(property, payload) {
    if( payload.aggregations.facets[property] ) {
      payload = payload.aggregations.facets[property];

      let arr = [];
      for( let key in payload ) {
        arr.push({key, count: payload[key]});
      }
      payload = arr;
    }

    this._setFacetState({
      state : this.STATE.LOADED,
      payload, id : property
    });
  }

  setFacetError(property, error) {
    this._setFacetState({
      state : this.STATE.ERROR,
      error, id : property
    });
  }

  _setFacetState(state) {
    this.data.facets[state.id] = state;
    this.emit(this.events.BROWSE_BY_FACET_UPDATE, state);
  }


}

module.exports = new BrowseByStore();