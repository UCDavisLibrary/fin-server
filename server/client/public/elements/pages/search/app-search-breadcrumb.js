import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import CollectionInterface from "../../interfaces/CollectionInterface"
import ElasticSearchInterface from "../../interfaces/ElasticSearchInterface"
import AppStateInterface from "../../interfaces/AppStateInterface"
import template from "./app-search-breadcrumb.html"


class AppSearchBreadcrumb extends Mixin(PolymerElement)
        .with(EventInterface, AppStateInterface, CollectionInterface, ElasticSearchInterface) {

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
   * @method _onAppStateUpdate
   * @description listen to app state update events and if this is a record, set record collection
   * as the current collection
   */
  _onAppStateUpdate(e) {
    if( e.location.path[0] !== 'record' ) return;

    let path = e.location.path.slice(0);
    path.splice(0, 1);
    this.currentRecordId = '/'+path.join('/');

    this._esGetRecord(this.currentRecordId);
  }

  _onEsRecordUpdate(e) {
    if( e.id !== this.currentRecordId ) return;
    if( e.state !== 'loaded' ) return;

    if( e.payload._source.memberOf ) {
      this.selected = this._getCollection(e.payload._source.memberOf);
    } else {
      this.selected = null;
    }
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