import {PolymerElement} from "@polymer/polymer/polymer-element"
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
      },
      tabindex : {
        type : Number,
        value : 0,
        reflectToAttribute : true
      }
    }
  }

}

customElements.define('app-collection-card', AppCollectionCard);