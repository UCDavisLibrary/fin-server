import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import CollectionInterface from "../../interfaces/CollectionInterface"
import template from "./app-search-breadcrumb.html"


class AppSearchBreadcrumb extends Mixin(PolymerElement)
        .with(EventInterface, CollectionInterface) {

  static get template() {
    return template;
  }

  constructor() {
    super();
    this.active = true;
  }

  _onSelectedCollectionUpdate(selected) {
    if( !selected ) {
      this.$.layout.innerHTML = '';
      return;
    } 

    this.$.layout.innerHTML = `<div>Collections</div>
      <div>&gt;</div>
      <div>${selected.title}</div>
    `;
  }

}
customElements.define('app-search-breadcrumb', AppSearchBreadcrumb);