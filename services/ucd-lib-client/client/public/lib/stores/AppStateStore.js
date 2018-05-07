const {AppStateStore} = require('@ucd-lib/cork-app-state');

class ImplAppStateStore extends AppStateStore {

  constructor() {
    super();

    this.data.selectedRecord = null;
    this.data.selectedRecordMedia = null;

    this.events.SELECTED_RECORD_UPDATE = 'selected-record-update';
    this.events.SELECTED_RECORD_MEDIA_UPDATE = 'selected-record-media-update';
  }

  set(state) {
    super.set(state);
  }

  setSelectedRecord(record) {
    this.data.selectedRecord = record;
    this.emit(this.events.SELECTED_RECORD_UPDATE, record);
  }

  getSelectedRecord() {
    return this.data.selectedRecord;
  }

  setSelectedRecordMedia(record) {
    this.data.selectedRecordMedia = record;
    this.emit(this.events.SELECTED_RECORD_MEDIA_UPDATE, record);
  }

  getSelectedRecordMedia() {
    return this.data.selectedRecordMedia;
  }

}

module.exports = new ImplAppStateStore();