const {AppStateModel} = require('@ucd-lib/cork-app-state');
const AppStateStore = require('../stores/AppStateStore');
const config = require('../config');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();
    this.store = AppStateStore;

    this.EventBus.on(this.store.events.APP_STATE_UPDATE, () => this._sendGA());
    this._sendGA();
  }

  set(update) {
    if( update.location ) {
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

    return super.set(update);
  }

  /**
   * @method _sendGA
   * @description send a google analytics event if pathname has changed
   */
  _sendGA() {
    if( !gtag ) console.warn('No global gtag variable set for analytics events');
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

}

module.exports = new AppStateModelImpl();