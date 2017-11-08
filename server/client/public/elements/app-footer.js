import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import AppStateInterface from "./interfaces/AppStateInterface"

import template from "./app-footer.html"

class AppFooter extends Mixin(PolymerElement)
      .with(EventInterface, AppStateInterface) {
  
  static get template() {
    return template;
  }
}

customElements.define('app-footer', AppFooter);