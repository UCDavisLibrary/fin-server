import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import AppStateInterface from "./interfaces/AppStateInterface"
import CollectionInterface from "./interfaces/CollectionInterface"
import ElasticSearchInterface from "./interfaces/ElasticSearchInterface"
import "./auth/app-auth-footer"

import template from "./app-footer.html"

class AppFooter extends Mixin(PolymerElement)
      .with(EventInterface, AppStateInterface, CollectionInterface, ElasticSearchInterface) {
  
  static get template() {
    return template;
  }

  static get properties() {
    return {
      // JSON payload of collection overview
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

  /**
   * @method _onCollectionOverviewUpdate
   * @description from CollectionInterface, called when collection overview query completes
   */
  _onCollectionOverviewUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.collections = e.payload;
  }

  /**
   * @method _onBrowseCollection
   * @description from click event, called when collection image is clicked
   * 
   * @param {Object} e HTML click event 
   */
  _onBrowseCollection(e) {
    let id = e.currentTarget.getAttribute('data-id');
    this._esSetKeywordFilter('isPartOf', id);
  }
}

customElements.define('app-footer', AppFooter);