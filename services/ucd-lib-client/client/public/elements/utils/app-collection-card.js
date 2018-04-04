import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-collection-card.html"

export default class AppCollectionCard extends PolymerElement {

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

}

customElements.define('app-collection-card', AppCollectionCard);