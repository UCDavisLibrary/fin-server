module.exports = subclass => 
  class MediaInterface extends subclass {

    constructor() {
      super();
      this._injectModel('RecordModel');
    }

    _defaultRecordSearch(collectionId) {
      return this.RecordModel.defaultSearch(collectionId);
    }

    _getRecord(id) {
      return this.RecordModel.get(id);
    }

    _searchDocumentToUrl(searchDocument, allowSpecial) {
      return this.RecordModel.searchDocumentToUrl(searchDocument, allowSpecial);
    }

    _urlToSearchDocument(url) {
      return this.RecordModel.urlToSearchDocument(url);
    }

    _getEmptySearchDocument() {
      return this.RecordModel.emptySearchDocument();
    }

    _setKeywordFilter(searchDocument, attr, value, op) {
      return this.RecordModel.setKeywordFilter(searchDocument, attr, value, op);
    }

    _appendKeywordFilter(searchDocument, attr, value, op) {
      return this.RecordModel.appendKeywordFilter(searchDocument, attr, value);
    }

    _removeKeywordFilter(searchDocument, attr, value) {
      return this.RecordModel.removeKeywordFilter(searchDocument, attr, value);
    }

    _searchRecords(searchDocument, updateHistoryState) {
      return this.RecordModel.search(searchDocument, updateHistoryState);
    }

    _getCurrentSearchDocument() {
      return this.RecordModel.getCurrentSearchDocument();
    }

    _setTextFilter(searchDocument, text) {
      return this.RecordModel.setTextFilter(searchDocument, text);
    }

    _setPaging(searchDocument, offset, limit) {
      return this.RecordModel.setPaging(searchDocument, offset, limit);
    }

    _appendRangeFilter(searchDocument, attr, value) {
      return this.RecordModel.appendRangeFilter(searchDocument, attr, value);
    }

    _removeRangeFilter(searchDocument, attr) {
      return this.RecordModel.removeRangeFilter(searchDocument, attr);
    }

  }