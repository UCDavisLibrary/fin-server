import {PolymerElement} from "@polymer/polymer/polymer-element"
import "@ucd-lib/fin-search-box"
import "../../utils/app-collection-card"

import "@polymer/iron-icons"

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
      },
      count : {
        type : String,
        value : (APP_CONFIG.recordCount || 0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  async ready() {
    super.ready();
    this._setCollections(await this.CollectionModel.overview());
  }

  _onAppStateUpdate(e) {
    if( e.location.hash === 'collections' ) {
      setTimeout(() => {
        let ele = this.shadowRoot.querySelector('#collections-home');
        if( ele ) ele.scrollIntoView();
      }, 25);
    }
  }

  /**
   * @method _setCollections
   * @description when the element is ready, the collection model is called 
   * for the collection list.  this renders is.
   * 
   * @param {Object} e 
   */
  _setCollections(e) {
    if( e.state !== 'loaded' ) return;
    let overview = e.payload;
    let browse = {};

    overview.sort((a,b) => {
      if( a.name > b.name ) return 1;
      if( a.name < b.name ) return -1;
      return 0;
    });

    overview.forEach(item => {
      browse[item['@id']] = item.name;
      if( !item.thumbnailUrl ) {
        item.thumbnailUrl = '/images/logos/logo-white-512.png';
      }

      if( item.workExample ) {
        item.thumbnail = '/fcrepo/rest'+item.workExample['@id']+'/svc:iiif/full/,320/0/default.jpg';
      } else {
         item.thumbnail = '/images/logos/logo-white-512.png';
      }
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
      return this.RecordModel.setSearchLocation(this._getEmptySearchDocument());
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
    this.RecordModel.setSearchLocation(searchDoc);
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
    this._setWindowLocation(id);
  }
  
}

customElements.define('app-home', AppHome);