import {PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-collection-card.html"

export default class AppCollectionCard extends PolymerElement {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      collection : {
        type : Object,
        value : () => ({})
      },
      tabindex : {
        type : Number,
        value : 0,
        reflectToAttribute : true
      },
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  ready() {
    super.ready();
  }

  connectedCallback() {    
    super.connectedCallback();
    if ( this.collection.thumbnailUrl === '/images/logos/logo-white-512.png' ) {
      let cards = this.shadowRoot.querySelectorAll('.img')[0];
      cards.className += ' defaultImage';
    }    
  }
}

customElements.define('app-collection-card', AppCollectionCard);