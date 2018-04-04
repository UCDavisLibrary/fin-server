import {Element as PolymerElement} from "@polymer/polymer/polymer-element"

import "../../auth/app-auth-header";
import template from "./app-search-header.html"
import ElasticSearchInterface from '../../interfaces/ElasticSearchInterface'
import CollectionInferface from '../../interfaces/CollectionInterface'

class AppSearchHeader extends Mixin(PolymerElement)
      .with(EventInterface, ElasticSearchInterface, CollectionInferface) {

  static get properties() {
    return {
      selectedCollection : {
        type : String,
        value : ''
      }
    }
  }

  static get template() {
    return template;
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
    if( !id || id === 'Browse' ) {
      return this._esRemoveKeywordFilter('isPartOf');
    }
    this.$.searchInput.browseValue = 'Browse';
    this._esSetKeywordFilter('isPartOf', id);
  }

  /**
   * @method _onSearch
   * @description bound to fin-search-box `search` event.  called when user
   * hits enter or clicked the search icon.  start a text search
   * 
   * @param {Object} e
   */
  _onSearch(e) {
    this._esSetTextFilter(e.detail);
  }

  /**
   * @method _onEsSearchUpdate
   * @description from ElasticSearchInterface, called when search state updates
   * 
   * @param {*} e 
   */
  _onEsSearchUpdate(e) {
    try {
      this.$.searchInput.value = e.query.query.bool.must[0].multi_match.query;
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