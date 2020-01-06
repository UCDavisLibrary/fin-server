import {PolymerElement} from "@polymer/polymer/polymer-element"
import AppStateInterface from "./interfaces/AppStateInterface"
import "./auth/app-auth-footer"

import template from "./app-footer.html"

class AppFooter extends Mixin(PolymerElement)
      .with(EventInterface, AppStateInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return { }
  }

  constructor() {
    super();
    this.active = true;
  }  
}

customElements.define('app-footer', AppFooter);