import {Element as PolymerElement} from "@polymer/polymer/polymer-element"

import "../../auth/app-auth-header";
import template from "./app-search-header.html"
import ElasticSearchInterface from '../../interfaces/ElasticSearchInterface'

class AppSearchHeader extends Mixin(PolymerElement)
      .with(EventInterface, ElasticSearchInterface) {

  static get template() {
    return template;
  }

  constructor() {
    super();
    this.active = true;
  }

  _onEsSearchUpdate(e) {
    try {
      this.$.searchInput.value = e.query.query.bool.must[0].multi_match.query;
    } catch(e) {
      this.$.searchInput.value = '';
    }
  }

  _onSearch(e) {
    this._textSearch(e.detail);
  }

}
customElements.define('app-search-header', AppSearchHeader);