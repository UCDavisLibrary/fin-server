import {Element as PolymerElement} from "@polymer/polymer/polymer-element"

import "../../auth/app-auth-header";
import template from "./app-search-header.html"

class AppSearchHeader extends PolymerElement {

  static get template() {
    return template;
  }

}
customElements.define('app-search-header', AppSearchHeader);