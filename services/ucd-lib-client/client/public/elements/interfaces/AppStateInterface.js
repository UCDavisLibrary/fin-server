const {AppStateInterface} = require('@ucd-lib/cork-app-state');

module.exports = subclass => 
  class AppStateInterfaceImpl extends Mixin(subclass).with(AppStateInterface) {
    _setSelectedRecord(record) {
      this.AppStateModel.setSelectedRecord(record);
    }
  
    _getSelectedRecord() {
      return this.AppStateModel.getSelectedRecord();
    }
  
    _setSelectedRecordMedia(record) {
      this.AppStateModel.setSelectedRecordMedia(record);
    }
  
    _getSelectedRecordMedia() {
      return this.AppStateModel.getSelectedRecordMedia();
    }
  }