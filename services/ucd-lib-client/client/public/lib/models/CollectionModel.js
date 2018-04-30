const {BaseModel} = require('@ucd-lib/cork-app-utils');
const CollectionStore = require('../stores/CollectionStore');
const CollectionService = require('../services/CollectionService');
// it's ok to import other stores & services, just not models
const RecordStore = require('../stores/RecordStore');

class CollectionModel extends BaseModel {
  
    constructor() {
      super();
      this.store = CollectionStore;
      this.service = CollectionService;

      // the selected collection functionality is just a shortcut for listening
      // to es filters and seeing if a collection is being filtered on. This is
      // where we wire up the event listener for es events.
      this.MasterController.on(
        RecordStore.events.RECORD_SEARCH_UPDATE, 
        this._onSearchDocumentUpdate.bind(this)
      );

      this.register('CollectionModel');
    }

    /**
     * @method overview
     * @description get all collections
     * 
     * @returns {Promise} resolves to array of collections
     */
    async overview() {
      if( this.store.data.overview.state === 'loading' ) {
        await this.store.data.overview.request;
      } else {
        await this.service.overview();
      }

      return this.store.data.overview;
    }

    /**
     * @method get
     * @description get a collection by id
     * 
     * @param {String} id id of the collection
     */
    async get(id) {
      if( this.store.data.overview.state === 'loading' ) {
        await this.store.data.overview.request;
      }

      return this.store.data.byId[id];
    }

    /**
     * @method getSelectedCollection
     * @description get the selected collection
     */
    getSelectedCollection() {
      return this.store.data.selected;
    }

    search(searchDocument) {
      return this.service.search(searchDocument);
    }

    /**
     * @method _onSearchDocumentUpdate
     * @description listen to search document updates, if we have isPartOf filter,
     * then there is a selected collection
     */
    async _onSearchDocumentUpdate(e) {
      let selected = null;

      if( e.searchDocument.filters.isPartOf ) {
        selected = await this.get(e.searchDocument.filters.isPartOf.value[0]);
      }

      if( !e.searchDocument.filters.isPartOf && e.searchDocument.text ) {
        if( e.state === 'loading' ) {
          this.search({text: e.searchDocument.text});
        }
        this.emit('show-collection-search-results', true);
      } else {
        this.emit('show-collection-search-results', false);
      }

      this.store.setSelectedCollection(selected);
    }
}

module.exports = new CollectionModel();