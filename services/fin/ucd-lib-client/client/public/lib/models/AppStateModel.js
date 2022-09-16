const {AppStateModel} = require('@ucd-lib/cork-app-state');
const AppStateStore = require('../stores/AppStateStore');
const config = require('../config');
const clone = require('clone');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();
    this.store = AppStateStore;

    this._sendGA();
  }

  set(update) {
    if( update.location ) {
      update.lastLocation = clone(this.store.data.location);

      // /collection/* is an alias for a base collection search

      let page = update.location.path ? update.location.path[0] : 'home';
      if( !page ) page = 'home'

      if( page === 'collection' ) {
        if( update.location.path.length === 2 ) {
          page = 'search';
        } else {
          page = 'record';
        }
      }
      
      update.location.page = page;
    }

    this._sendGA();
    return super.set(update);
  }

  /**
   * @method _sendGA
   * @description send a google analytics event if pathname has changed
   */
  _sendGA() {
    if( !window.gtag ) return console.warn('No global gtag variable set for analytics events');
    if( this.lastGaLocation === window.location.pathname ) return;
    this.lastGaLocation = window.location.pathname;

    gtag('config', config.gaCode, {
      page_path: window.location.pathname
    });
  }

  setSelectedRecord(record) {
    this.store.setSelectedRecord(record);
  }

  getSelectedRecord() {
    return this.store.getSelectedRecord();
  }

  setSelectedRecordMedia(record) {
    this.store.setSelectedRecordMedia(record);
  }

  getSelectedRecordMedia() {
    return this.store.getSelectedRecordMedia();
  }

  setSelectedCollection(collection) {
    this.store.setSelectedCollection(collection);
  }

  getSelectedCollection() {
    return this.store.getSelectedCollection();
  }

}

module.exports = new AppStateModelImpl();