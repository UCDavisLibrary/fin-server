import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@ucd-lib/fin-search-box"
import "../../utils/app-collection-card"

import template from "./app-home.html"
import ElasticSearchInterface from "../../interfaces/ElasticSearchInterface"
import AppStateInterface from "../../interfaces/AppStateInterface"
import CollectionInterface from "../../interfaces/CollectionInterface"

class AppHome extends Mixin(PolymerElement) 
      .with(EventInterface, ElasticSearchInterface, AppStateInterface, CollectionInterface) {
  
  static get template() {
    return template;
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
      return this._esRemoveKeywordFilter('isPartOf');
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
    this._esSetTextFilter(e.detail);
  }

  /**
   * @method _onCollectionClicked
   * @description called when collection img on home page is clicked 
   */
  _onCollectionClicked(e) {
    let id = e.currentTarget.getAttribute('data-id');
    this._onCollectionSelected(id);
  }

  /**
   * @method _onCollectionSelected
   * @description filter based on a collection using short ids.
   */
  _onCollectionSelected(id) {
    this._esSetKeywordFilter('isPartOf', id);
  }
  
}

customElements.define('app-home', AppHome);