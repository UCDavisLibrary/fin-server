import {PolymerElement} from "@polymer/polymer/polymer-element"
import "@ucd-lib/fin-search-box"
import "../../utils/app-collection-card"

import template from "./app-home.html"
import RecordInterface from "../../interfaces/RecordInterface"
import AppStateInterface from "../../interfaces/AppStateInterface"
import CollectionInterface from "../../interfaces/CollectionInterface"

class AppHome extends Mixin(PolymerElement) 
      .with(EventInterface, RecordInterface, AppStateInterface, CollectionInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      highlightedCollections : {
        type : Array,
        value : () => []
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  /**
   * @method _onCollectionOverviewUpdate
   * @description from CollectionInterface, called when the collection overview is loaded
   * 
   * @param {Object} e 
   */
  _onCollectionOverviewUpdate(e) {
    if( e.state !== 'loaded' ) return;
    let overview = e.payload;
    let browse = {};

    overview.sort((a,b) => {
      if( a.name > b.name ) return 1;
      if( a.name < b.name ) return -1;
      return 0;
    });

    overview.forEach(item => {
      browse[item.id] = item.name;
      item.thumbnail = '/fcrepo/rest'+item.workExample+'/svc:iiif/full/,320/0/default.jpg'
    });

    this.$.searchBox.browse = browse;
    this.highlightedCollections = overview;
  }

  /**
   * @method _onBrowse
   * @description called from the search box browse button
   */
  _onBrowse(e) {
    let id = e.detail;
    if( !id || id === 'Browse' ) {
      return this._searchRecords(this._getEmptySearchDocument());
    }
    this.$.searchBox.browseValue = 'Browse';
    this._onCollectionSelected(id);
  }

  /**
   * @method _onSearch
   * @description called from the search box button is clicked or
   * the enter key is hit.  set the text filter
   */
  _onSearch(e) {
    let searchDoc = this._getEmptySearchDocument();
    this._setTextFilter(searchDoc, e.detail);
    this._searchRecords(searchDoc);
  }

  /**
   * @method _onCollectionClicked
   * @description called when collection img on home page is clicked 
   */
  _onCollectionClicked(e) {
    if( e.type === 'keyup' && e.which !== 13 ) return;
    let id = e.currentTarget.getAttribute('data-id');
    this._onCollectionSelected(id);
  }

  /**
   * @method _onCollectionSelected
   * @description filter based on a collection using short ids.
   */
  _onCollectionSelected(id) {
    let searchDoc = this._setKeywordFilter(this._getEmptySearchDocument(), 'isPartOf', id);
    this._searchRecords(searchDoc);
  }
  
}

customElements.define('app-home', AppHome);