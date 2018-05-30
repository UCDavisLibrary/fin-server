import {PolymerElement} from "@polymer/polymer/polymer-element"

import "../../auth/app-auth-header";
import template from "./app-search-header.html"
import RecordInterface from '../../interfaces/RecordInterface'
import CollectionInferface from '../../interfaces/CollectionInterface'

class AppSearchHeader extends Mixin(PolymerElement)
      .with(EventInterface, RecordInterface, CollectionInferface) {

  static get properties() {
    return {
      selectedCollection : {
        type : String,
        value : ''
      }
    }
  }

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  constructor() {
    super();
    this.active = true;
  }

  /**
   * @method _onCollectionOverviewUpdate
   * @description from CollectionInferface, called when overview collection loads
   * 
   * @param {Object} e 
   */
  _onCollectionOverviewUpdate(e) {
    if( e.state !== 'loaded' ) return;
    let overview = e.payload;

    let browse = {};
    overview.forEach(item => {
      browse[item.id] = item.name;
    });

    this.$.searchInput.browse = browse;
  }

  /**
   * @method _onBrowse
   * @description bound to fin-search-box `browse` event.  Called when user
   * selects a specific collection to browse
   * 
   * @param {Object} e 
   */
  _onBrowse(e) {
    let id = e.detail;

    this.$.searchInput.browseValue = 'Browse';

    if( !id || id === 'Browse' ) {
      return this._searchRecords(this._getEmptySearchDocument());
    }

    let searchDoc = this._getEmptySearchDocument();
    this._setKeywordFilter(searchDoc, 'isPartOf', id);
    this._searchRecords(searchDoc);    
  }

  /**
   * @method _onSearch
   * @description bound to fin-search-box `search` event.  called when user
   * hits enter or clicked the search icon.  start a text search
   * 
   * @param {Object} e
   */
  _onSearch(e) {
    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, 0);
    this._setTextFilter(searchDoc, e.detail);
    this._searchRecords(searchDoc);
  }

  /**
   * @method _onEsSearchUpdate
   * @description from RecordInterface, called when search state updates
   * 
   * @param {*} e 
   */
  _onRecordSearchUpdate(e) {
    try {
      this.$.searchInput.value = e.searchDocument.text || '';
    } catch(e) {
      this.$.searchInput.value = '';
    }
  }

  /**
   * @method _onSelectedCollectionUpdate
   * @description from CollectionInterface, called when a collection is selected.
   * This is done by setting a collection filter.
   * 
   * @param {Object} selected currently selected collection 
   */
  _onSelectedCollectionUpdate(selected) {
    this.selectedCollection = selected;
  }

}
customElements.define('app-search-header', AppSearchHeader);