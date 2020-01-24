const {AppStateStore} = require('@ucd-lib/cork-app-state');

class ImplAppStateStore extends AppStateStore {

  constructor() {
    super();

    this.data.selectedRecord = null;
    this.data.selectedRecordMedia = null;
    this.data.selectedCollection = null;

    this.events.SELECTED_RECORD_UPDATE = 'selected-record-update';
    this.events.SELECTED_RECORD_MEDIA_UPDATE = 'selected-record-media-update';
    this.events.SELECTED_COLLECTION_UPDATE = 'selected-collection-update';
  }

  set(state) {
    super.set(state);
  }

  setSelectedRecord(record) {
    if( this.data.selectedRecord === record ) return;
    this.set({selectedRecord: record});
    this.emit(this.events.SELECTED_RECORD_UPDATE, record);
  }

  getSelectedRecord() {
    return this.data.selectedRecord;
  }

  setSelectedRecordMedia(record) {
    if( this.data.selectedRecordMedia === record ) return;
    this.set({selectedRecordMedia: record});
    this.emit(this.events.SELECTED_RECORD_MEDIA_UPDATE, record);
  }

  getSelectedRecordMedia() {
    return this.data.selectedRecordMedia;
  }

  setSelectedCollection(collection) {
    if( this.data.selectedCollection === collection ) return;
    this.set({selectedCollection: collection});
    this.emit(this.events.SELECTED_COLLECTION_UPDATE, collection);
  }

  getSelectedCollection() {
    return this.data.selectedCollection;
  }

}

module.exports = new ImplAppStateStore();