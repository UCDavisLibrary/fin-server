var {ElasticSearchStore} = require('@ucd-lib/cork-app-elastic-search');

class ElasticSearchStoreImpl extends ElasticSearchStore {

  constructor() {
    super();

    this.data.byId = {};

    this.events.RECORD_UPDATE = 'es-record-update';
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

}

module.exports = new ElasticSearchStoreImpl();