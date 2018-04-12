var {AppStateModel} = require('@ucd-lib/cork-app-state');
var AppStateStore = require('../stores/AppStateStore');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();
    this.store = AppStateStore;
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