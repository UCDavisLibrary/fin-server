const {AppStateModel} = require('@ucd-lib/cork-app-state');
const AppStateStore = require('../stores/AppStateStore');
const config = require('../config');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();
    this.store = AppStateStore;

    this._sendGA();

    this.appStateUpdateHandlers = [];
  }

  registerUpdateHandler(handler) {
    this.appStateUpdateHandlers.push(handler);
  }

  async set(update) {

    if( update.location ) {
      let selectedRecord = null;
      // /collection/* is an alias for a base collection search

      let page = update.location.path ? update.location.path[0] : 'home';
      if( !page ) page = 'home'

      if( page === 'collection' ) {
        if( update.location.path.length === 2 ) {
          page = 'search';
        } else {
          page = 'record';
          selectedRecord = '/'+update.location.path.join('/');
        }
      }

      update.selectedRecord = selectedRecord;
      update.location.page = page;
    }

    for( let handler of this.appStateUpdateHandlers ) {
      await handler(update);
    }

    this._sendGA();
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

  setSelectedRecordMedia(record) {
    this.store.setSelectedRecordMedia(record);
  }

  getSelectedRecordMedia() {
    return this.store.getSelectedRecordMedia();
  }

}

module.exports = new AppStateModelImpl();