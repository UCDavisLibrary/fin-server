const {BaseModel} = require('@ucd-lib/cork-app-utils');
const AppStateModel = require('./AppStateModel');
const RecordModel = require('./RecordModel');
const clone = require('clone');

// keep the JSON-LD script tag up to date
class SeoModel extends BaseModel {

  constructor() {
    super();
    if( typeof window === 'undefined' ) return;
    this.ele = document.querySelector('#seo-jsonld');
    
    this.MasterController.on(AppStateModel.store.events.APP_STATE_UPDATE, (e) => this._onAppStateUpdate(e));
    this.MasterController.on(AppStateModel.store.events.SELECTED_RECORD_UPDATE, (e) => this._onSelectedRecordUpdate(e));
  }

  async _onAppStateUpdate(e) {
    if( !e.location.path.length ) return this._clear();
    if( e.location.path[0] !== 'record' ) return this._clear();
    if( !e.selectedRecord ) return this._clear();
  }

  _onSelectedRecordUpdate(selectedRecord) {
    let record = clone(selectedRecord);

    record['@context'] = 'http://schema.org';
    record['@type'] = record['@type']
      .filter(type => type.match(/^schema:/) ? true : false)
      .map(type => type.replace(/^schema:/, ''));

    for( var key in record ) {
      if( key[0] === '_' ) delete record[key];
    }

    this.ele.innerHTML = JSON.stringify(record, '  ', '  ');
  }

  _clear() {
    this.ele.innerHTML = '';
  }

}

module.exports = new SeoModel();