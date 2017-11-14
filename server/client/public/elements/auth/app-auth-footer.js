import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import AuthInterface from "../interfaces/AuthInterface"
import template from "./app-auth-footer.html"

class AppAuthFooter extends Mixin(PolymerElement)
      .with(EventInterface, AuthInterface) {

  static get template() {
    return template;
  }

  static get properties() {
    return {
      loggedIn : {
        type : Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }
}

customElements.define('app-auth-footer', AppAuthFooter);