import {PolymerElement, html} from "@polymer/polymer/polymer-element"
import AuthInterface from "../interfaces/AuthInterface"

class AppAuthHeader extends Mixin(PolymerElement)
      .with(EventInterface, AuthInterface) {

  static get template() {
    return html`<iron-icon icon="fin-icons:account" style="width: 40px; height:40px"></iron-icon>`;
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
    if( e.state === 'loggedIn') this.style.display = 'block';
    else this.style.display = 'none';
  }
}

customElements.define('app-auth-header', AppAuthHeader);