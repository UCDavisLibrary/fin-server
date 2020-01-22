import {PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-search-header.html"

import "../../auth/app-auth-header";
import "@ucd-lib/fin-search-box"

import RecordInterface from '../../interfaces/RecordInterface'
import CollectionInterface from '../../interfaces/CollectionInterface'
import AppStateInterface from '../../interfaces/AppStateInterface'

class AppSearchHeader extends Mixin(PolymerElement)
      .with(EventInterface, RecordInterface, CollectionInterface, AppStateInterface) {

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

  async ready() {
    super.ready();
    this._setCollections(await this.CollectionModel.overview());
  }

  /**
   * @method _setCollections
   * @description when the element is ready, the collection model is called 
   * for the collection list.  this renders is.
   * 
   * @param {Object} e 
   */
  _setCollections(e) {
    let overview = e.payload;

    let browse = {};
    overview.forEach(item => {
      browse[item['@id']] = item.name;
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
      return this.RecordModel.setSearchLocation(this._getEmptySearchDocument());
    }

    this._setWindowLocation(id);
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
    this.RecordModel.setSearchLocation(searchDoc);
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