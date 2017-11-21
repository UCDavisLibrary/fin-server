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

  ready() {
    super.ready();
    this._getCollectionOverview();
  }

  _onCollectionOverviewUpdate(e) {
    if( e.state !== 'loaded' ) return;
    let overview = e.payload;

    let arr = [];
    overview.forEach(item => {
      item.thumbnail = '/images/stub/'+item.thumbnail;
      if( item.highlighted ) arr.push(item);
    });
    this.highlightedCollections = arr;
  }

  _onSearch(e) {
    this._textSearch(e.detail);
    this._setWindowLocation('/search');
  }
  
}

customElements.define('app-home', AppHome);