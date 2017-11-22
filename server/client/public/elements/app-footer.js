import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import AppStateInterface from "./interfaces/AppStateInterface"
import CollectionInterface from "./interfaces/CollectionInterface"
import "./auth/app-auth-footer"

import template from "./app-footer.html"

class AppFooter extends Mixin(PolymerElement)
      .with(EventInterface, AppStateInterface, CollectionInterface) {
  
  static get template() {
    return template;
  }

  static get properties() {
    return {
      collections : {
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
    this.collections = e.payload;
  }

  _onBrowseCollection(e) {
    let id = e.currentTarget.getAttribute('data-id');
    this._selectCollection(id);
    this._setWindowLocation('/search');
  }
}

customElements.define('app-footer', AppFooter);