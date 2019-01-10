import {PolymerElement} from "@polymer/polymer/polymer-element"
import AppStateInterface from "./interfaces/AppStateInterface"
import CollectionInterface from "./interfaces/CollectionInterface"
import RecordInterface from "./interfaces/RecordInterface"
import "./auth/app-auth-footer"

import template from "./app-footer.html"

class AppFooter extends Mixin(PolymerElement)
      .with(EventInterface, AppStateInterface, CollectionInterface, RecordInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
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
    this.collections = e.payload.map(item => ({
      id: item['@id'],
      name : item.name
    }));
  }

  /**
   * @method _onBrowseCollection
   * @description from click event, called when collection image is clicked
   * 
   * @param {Object} e HTML click event 
   */
  _onBrowseCollection(e) {
    let id = e.currentTarget.getAttribute('data-id');
    debugger;
    this._setWindowLocation(id);
  }
}

customElements.define('app-footer', AppFooter);