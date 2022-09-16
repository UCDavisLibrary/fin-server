import {PolymerElement} from "@polymer/polymer/polymer-element"
import AuthInterface from "../interfaces/AuthInterface"
import template from "./app-auth-footer.html"

class AppAuthFooter extends Mixin(PolymerElement)
      .with(EventInterface, AuthInterface) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      loggedIn : {
        type : Boolean,
        value : false
      },
      user : {
        type : Object,
        value : () => {}
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  /**
   * @method _onAuthUpdate
   * @description from AuthInterface. called whenever auth state changes
   */
  _onAuthUpdate(e) {
    if( e.state === 'loggedIn' ) {
      this.user = e.user;
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
}

customElements.define('app-auth-footer', AppAuthFooter);