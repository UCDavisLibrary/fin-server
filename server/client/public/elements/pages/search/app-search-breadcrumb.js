import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import CollectionInterface from "../../interfaces/CollectionInterface"
import ElasticSearchInterface from "../../interfaces/ElasticSearchInterface"
import AppStateInterface from "../../interfaces/AppStateInterface"
import template from "./app-search-breadcrumb.html"


class AppSearchBreadcrumb extends Mixin(PolymerElement)
        .with(EventInterface, AppStateInterface, CollectionInterface, ElasticSearchInterface) {

  static get properties() {
    return {
      collection : {
        type : Object,
        value : null
      },
      record : {
        type : Object,
        value : null
      },
      title : {
        type : String,
        value : ''
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

  ready() {
    super.ready();
    this.$.layout.style.width = (window.innerWidth-55)+'px';
    window.addEventListener('resize', () => {
      this.$.layout.style.width = (window.innerWidth-55)+'px';
    });
  }

  /**
   * @method _onAppStateUpdate
   * @description listen to app state update events and if this is a record, set record collection
   * as the current collection
   */
  async _onAppStateUpdate(e) {
    if( e.location.path[0] === 'search' ) {
      this.lastSearch = e.location.pathname;
      return;
    }

    if( e.location.path[0] !== 'record' ) return;

    let path = e.location.path.slice(0);
    path.splice(0, 1);
    this.currentRecordId = '/'+path.join('/');

    this.record = await this._esGetRecord(this.currentRecordId);
    this.record = this.record.payload._source;

    if( this.record.memberOf ) {
      this.collection = await this._getCollection(this.record.memberOf);
    } else {
      this.collection = null;
    }
  }

  _onSearchClicked() {
    this._setWindowLocation(this.lastSearch || '/search');
  }

  _onCollectionClicked() {
    this._esClearFilters();
    this._esSetKeywordFilter('shortIdMemberOf', this.collection.shortId);
  }

  /**
   * @method _onSelectedCollectionUpdate
   * @description CollectionInterface, fired when selected collection updates
   */
  _onSelectedCollectionUpdate(e) {
    this.collection = e;
    this.record = null;
  }

}
customElements.define('app-search-breadcrumb', AppSearchBreadcrumb);