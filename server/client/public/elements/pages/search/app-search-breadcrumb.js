import {Element as PolymerElement} from "@polymer/polymer/polymer-element"

import template from "./app-search-breadcrumb.html"

class AppSearchBreadcrumb extends PolymerElement {

  static get template() {
    return template;
  }

}
customElements.define('app-search-breadcrumb', AppSearchBreadcrumb);