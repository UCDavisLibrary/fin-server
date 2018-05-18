const {BaseModel} = require('@ucd-lib/cork-app-utils');
const AppStateModel = require('./AppStateModel');
const RecordModel = require('./RecordModel');
const config = require('../config');
const clone = require('clone');

// keep the JSON-LD script tag up to date
class SeoModel extends BaseModel {

  constructor() {
    super();
    if( typeof window === 'undefined' ) return;
    this.ele = document.querySelector('#seo-jsonld');
    
    this.MasterController.on(AppStateModel.store.events.APP_STATE_UPDATE, (e) => this._onAppStateUpdate(e));
    this.MasterController.on(AppStateModel.store.events.SELECTED_RECORD_UPDATE, (e) => this._onAppStateUpdate(e));
  }

    /**
   * @method _onAppStateUpdate
   * @description set site meta tags and jsonld
   */
  _onAppStateUpdate() {
    let state = AppStateModel.store.data;
    let isRecord = state.location.pathname.match(/^\/record\//);

    if( state.selectedRecord && isRecord ) {
      this._setJsonLd(state.selectedRecord);
      this._setMetaTags({
        title : state.selectedRecord.name + ' - ' + config.metadata.title,
        description : state.selectedRecord.description || '',
        keywords : (state.selectedRecord.abouts || []).join(', ')
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
    document.title = metadata.title;
    this._setMetaTag('description', metadata.description);
    this._setMetaTag('keywords', metadata.keywords);
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

    record['@context'] = 'http://schema.org';
    record['@type'] = record['@type']
      .filter(type => type.match(/^schema:/) ? true : false)
      .map(type => type.replace(/^schema:/, ''));

    for( var key in record ) {
      if( key[0] === '_' ) delete record[key];
    }

    this.ele.innerHTML = JSON.stringify(record, '  ', '  ');
  }

  _clearJsonLd() {
    this.ele.innerHTML = '';
  }

}

module.exports = new SeoModel();