import {Element as PolymerElement} from "@polymer/polymer/polymer-element"

import "../../auth/app-auth-header";
import template from "./app-search-header.html"
import ElasticSearchInterface from '../../interfaces/ElasticSearchInterface'
import CollectionInferface from '../../interfaces/CollectionInterface'

class AppSearchHeader extends Mixin(PolymerElement)
      .with(EventInterface, ElasticSearchInterface, CollectionInferface) {

  static get template() {
    return template;
  }

  constructor() {
    super();
    this.active = true;
  }

  _onCollectionOverviewUpdate(e) {
    if( e.state !== 'loaded' ) return;
    let overview = e.payload;

    let browse = {};
    overview.forEach(item => {
      browse[item.id] = item.title;
    });

    this.$.searchInput.browse = browse;
  }

  _onBrowse(e) {
    let id = e.detail;
    this.$.searchInput.browseValue = 'Browse';
    this._selectCollection(id);
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