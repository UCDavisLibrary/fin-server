import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@ucd-lib/fin-search-box"

import template from "./app-home.html"
import ElasticSearchInterface from "../../interfaces/ElasticSearchInterface"
import AppStateInterface from "../../interfaces/AppStateInterface"

class AppHome extends Mixin(PolymerElement) 
      .with(EventInterface, ElasticSearchInterface, AppStateInterface) {
  
  static get template() {
    return template;
  }

  _onSearch(e) {
    this._textSearch(e.detail);
    this._setWindowLocation('/search');
  }
  
}

customElements.define('app-home', AppHome);