import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import CollectionInterface from '../../interfaces/CollectionInterface'

import template from "./app-collection-info-panel.html"

class AppCollectionInfoPanel extends Mixin(PolymerElement)
      .with(EventInterface, CollectionInterface) {
  
  static get template() {
    return template;
  }

  static get properties() {
    return {
      collection : {
        type : Object,
        value : () => {}
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  _onSelectedCollectionUpdate(selected) {
    this.collection = selected;
  }

}

customElements.define('app-collection-info-panel', AppCollectionInfoPanel);