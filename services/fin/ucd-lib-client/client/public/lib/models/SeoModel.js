const {BaseModel} = require('@ucd-lib/cork-app-utils');
const AppStateModel = require('./AppStateModel');
const CollectionModel = require('./CollectionModel');
const config = require('../config');
const clone = require('clone');

const seo = require('@ucd-lib/fin-ucd-lib-node-utils/lib/seo');

const transform = seo.recordTransform;
const collectionTransform = seo.collectionTransform;

// keep the JSON-LD script tag up to date
class SeoModel extends BaseModel {

  constructor() {
    super();
    if( typeof window === 'undefined' ) return;
    this.ele = document.querySelector('#seo-jsonld');
    
    this.EventBus.on(AppStateModel.store.events.APP_STATE_UPDATE, (e) => this._onAppStateUpdate(e));
    this.EventBus.on(AppStateModel.store.events.SELECTED_RECORD_UPDATE, (e) => this._onAppStateUpdate(e));
    this.EventBus.on(CollectionModel.store.events.SELECTED_COLLECTION_UPDATE, (e) => this._onAppStateUpdate(e));
  }

  /**
   * @method _onAppStateUpdate
   * @description set site meta tags and jsonld
   */
  async _onAppStateUpdate() {
    let state = AppStateModel.store.data;

    let isRecord = (state.location.page === 'record');
    let isCollection = (
      state.location.pathname.match(/^\/search\//) &&
      CollectionModel.getSelectedCollection()
    ) ? true : false;
    if( !isCollection && 
        state.location.path.length === 2 &&
        state.location.path[0] === 'collection' ) {
      isCollection = '/'+state.location.path.join('/');
    }

    if( state.selectedRecord && isRecord ) {
      this._setJsonLd(state.selectedRecord);
      this._setMetaTags({
        title : state.selectedRecord.name + ' - ' + config.metadata.title,
        description : state.selectedRecord.description || '',
        keywords : (state.selectedRecord.abouts || []).join(', ')
      });
    } else if ( isCollection ) {
      let collection = CollectionModel.getSelectedCollection();
      if( !collection && typeof isCollection === 'string' ) {
        collection = await CollectionModel.get(isCollection);
      }

      this._setCollectionJsonLd(collection);
      this._setMetaTags({
        title : collection.name + ' - ' + config.metadata.title,
        description : collection.description || '',
        keywords : (collection.abouts || []).join(', ')
      });
    } else if( !isRecord ) {
      this._clearJsonLd();
      this._setMetaTags({
        title : config.metadata.title,
        description : config.metadata.description,
        keywords : ''
      });
    }
  }

  /**
   * @method _setMetaTags
   * @description set site title and meta tags
   * 
   * @param {Object} metadata
   * @param {String} metadata.title
   * @param {String} metadata.description
   * @param {String} metadata.keywords
   */
  _setMetaTags(metadata) {
    document.title = metadata.title || '';
    this._setMetaTag('description', metadata.description || '');
    this._setMetaTag('keywords', metadata.keywords || '');
  }

  /**
   * @method _setMetaTag
   * @description set a specific meta tag attributes by name.
   * 
   * @param {String} tagname 
   * @param {String} content 
   */
  _setMetaTag(tagname, content) {
    let ele = document.head.querySelector(`meta[name=${tagname}]`);
    if( !ele ) return;
    ele.setAttribute('content', content);
  }

  _setJsonLd(selectedRecord) {
    let record = clone(selectedRecord);
    
    for( var key in record ) {
      if( key[0] === '_' ) delete record[key];
    }
    record = transform(record);

    this.ele.innerHTML = JSON.stringify(record, '  ', '  ');
  }

  _setCollectionJsonLd(selectedCollection) {
    let collection = clone(selectedCollection);
    
    for( var key in collection ) {
      if( key[0] === '_' ) delete collection[key];
    }
    collection = collectionTransform(collection, window.location.protocol+'//'+window.location.host);

    this.ele.innerHTML = JSON.stringify(collection, '  ', '  ');
  }

  _clearJsonLd() {
    this.ele.innerHTML = '';
  }

}

module.exports = new SeoModel();