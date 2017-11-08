import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-home.html"

class AppHome extends Mixin(PolymerElement) 
      .with(EventInterface) {
  
  static get template() {
    return template;
  }
  
}

customElements.define('app-home', AppHome);