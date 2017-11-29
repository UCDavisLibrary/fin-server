import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@ucd-lib/fin-search-box"

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

  _onCollectionOverviewUpdate(e) {
    if( e.state !== 'loaded' ) return;
    let overview = e.payload;
    let browse = {};

    overview.sort((a,b) => {
      if( a.title > b.title ) return 1;
      if( a.title < b.title ) return -1;
      return 0;
    });

    overview.forEach(item => {
      browse[item.id] = item.title;
      item.thumbnail = item.previewImage+'/svc:iiif/full/,320/0/default.png'
    });

    this.$.searchBox.browse = browse;
    this.highlightedCollections = overview;
  }

  _onBrowse(e) {
    let id = e.detail;
    this.$.searchBox.browseValue = 'Browse';
    this._onCollectionSelected(id);
  }

  _onCollectionClicked(e) {
    let id = e.currentTarget.getAttribute('data-id');
    this._onCollectionSelected(id);
  }

  _onCollectionSelected(id) {
    this._selectCollection(id);
    this._setWindowLocation('/search');
  }

  _onSearch(e) {
    this._textSearch(e.detail);
    this._setWindowLocation('/search');
  }
  
}

customElements.define('app-home', AppHome);