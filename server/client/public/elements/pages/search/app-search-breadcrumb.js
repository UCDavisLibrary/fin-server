import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import CollectionInterface from "../../interfaces/CollectionInterface"
import ElasticSearchInterface from "../../interfaces/ElasticSearchInterface"
import template from "./app-search-breadcrumb.html"


class AppSearchBreadcrumb extends Mixin(PolymerElement)
        .with(EventInterface, CollectionInterface, ElasticSearchInterface) {

  static get properties() {
    return {
      selected : {
        type : Object,
        value : null
      }
    }
  }

  static get template() {
    return template;
  }

  constructor() {
    super();
    this.active = true;
  }

  /**
   * @method _removeSelectedCollection
   * @description called when clear icon is clicked
   */
  _removeSelectedCollection() {
    this._esRemoveKeywordFilter('shortIdMemberOf');
  }

  /**
   * @method _onSelectedCollectionUpdate
   * @description CollectionInterface, fired when selected collection updates
   */
  _onSelectedCollectionUpdate(e) {
    this.selected = e;
  }

}
customElements.define('app-search-breadcrumb', AppSearchBreadcrumb);