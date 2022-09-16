const {BaseModel} = require('@ucd-lib/cork-app-utils');
const CollectionStore = require('../stores/CollectionStore');
const CollectionService = require('../services/CollectionService');
// it's ok to import other stores & services, just not models
const RecordStore = require('../stores/RecordStore');
const AppStateModel = require('./AppStateModel');

class CollectionModel extends BaseModel {
  
    constructor() {
      super();
      this.store = CollectionStore;
      this.service = CollectionService;

      // the selected collection functionality is just a shortcut for listening
      // to es filters and seeing if a collection is being filtered on. This is
      // where we wire up the event listener for es events.
      this.EventBus.on(
        RecordStore.events.RECORD_SEARCH_UPDATE, 
        this._onSearchDocumentUpdate.bind(this)
      );

      // if we pre-loaded collections, set them
      if( APP_CONFIG.collections ) {
        this.store.setCollectionOverviewLoaded(APP_CONFIG.collections);
      }

      this.register('CollectionModel');
    }

    /**
     * @method overview
     * @description get all collections
     * 
     * @returns {Promise} resolves to array of collections
     */
    async overview() {
      let state = this.store.data.overview;

      if( state.state === 'init' ) {
        await this.service.overview();
      } else if( state.state === 'loading' ) {
        await state.request;
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
      if( this.store.data.overview.state !== 'loaded' ) {
        await this.overview();
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

    getRecentCollections() {
      //TODO: change to 'uploadDate'
      let searchDocument = {
        limit: 3,
        sort: [{
          lastModified: {order : "desc"} 
        }]
      };
      searchDocument = {limit: 3};
      return this.service.search(searchDocument);
    }

    /**
     * @method _onSearchDocumentUpdate
     * @description listen to search document updates, if we have isPartOf filter,
     * then there is a selected collection
     */
    async _onSearchDocumentUpdate(e) {
      let selected = null;

      // if( e.searchDocument.filters['isPartOf.@id'] ) {
      //   selected = await this.get(e.searchDocument.filters['isPartOf.@id'].value[0]);
      // }
      // is there one and only one collection filter set
      if( e.searchDocument.filters['collectionId'] && e.searchDocument.filters['collectionId'].value.length === 1 ) {
        selected = await this.get(e.searchDocument.filters['collectionId'].value[0]);
      }

      // if( !e.searchDocument.filters['isPartOf.@id'] && e.searchDocument.text ) {
      if( !e.searchDocument.filters['collectionId'] && e.searchDocument.text ) {
        if( e.state === 'loading' ) {
          this.search({text: e.searchDocument.text});
        }
        this.emit('show-collection-search-results', true);
      } else {
        this.emit('show-collection-search-results', false);
      }

      AppStateModel.setSelectedCollection(selected);
      AppStateModel.set({searchCollection: selected});
    }
}

module.exports = new CollectionModel();