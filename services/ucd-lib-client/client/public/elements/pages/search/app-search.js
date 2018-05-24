import {PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-input/paper-input"
import template from "./app-search.html";

import "./app-search-header";
import "./app-search-breadcrumb";
import "./results/app-search-results-panel"
import "./filtering/app-filters-panel"

import AppStateInterface from '../../interfaces/AppStateInterface'
import RecordInterface from '../../interfaces/RecordInterface'
import CollectionInterface from '../../interfaces/CollectionInterface'

export class AppSearch extends Mixin(PolymerElement)
            .with(EventInterface, RecordInterface, CollectionInterface, AppStateInterface) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      visible : {
        type : Boolean,
        value : false
        // observer : '_onVisibleUpdate'
      },
      results : {
        type : Array,
        value : () => []
      },
      drawerOpen : {
        type : Boolean,
        value : false
      },
      firstLoad : {
        type : Boolean,
        value : true
      },
      appState : {
        type : Object,
        value : () => ({})
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    // this._initState();
  }

  // async _initState() {
  //   let startState = await this._getAppState();
  //   if( startState.location.path[0] === 'search' ) {
  //     this.appState = startState;
  //     this._searchFromAppState();
  //   }
  // }

  /**
   * @description AppStateInterface, fired when state updates
   * @param {*} e 
   */
  _onAppStateUpdate(e) {
    this.appState = e;
    if( e.location.path[0] !== 'search' ) return;
    this._searchFromAppState();
  }

  /**
   * @method _searchFromAppState
   * @description use current app state to preform a search, should be called on first load
   * or if state update event is from popup state (forward, back button hit)
   */
  _searchFromAppState() {
    this.firstLoad = false;

    let searchUrlParts = this.appState.location.path;
    let query;
    if( searchUrlParts.length > 1 ) {
      query = this._urlToSearchDocument(searchUrlParts.slice(1, searchUrlParts.length));
    } else {
      query = this._getCurrentSearchDocument();
    }

    this._searchRecords(query);
  }

  /**
   * @method _onCollectionOverviewUpdate
   * @description CollectionInterface, fired when the collection overview updates
   * TODO: we should not preform a search untill this is fired 
   */
  // _onCollectionOverviewUpdate(e) {
  //   if( e.state === 'loaded' ) this._esDefaultSearch();
  // }

  /**
   * @method _onEsSearchUpdate
   * @description RecordInterface, fired when search updates
   * 
   * @param {Object} e 
   */
  _onRecordSearchUpdate(e) {
    if( e.state === 'error' ) {
      return this.$.resultsPanel.onError(e);
    } else if( e.state === 'loading' ) {
      return this.$.resultsPanel.onLoading();
    }

    if( e.state !== 'loaded' ) return;

    let currentIndex = e.searchDocument.offset;
    let payload = e.payload;
    let total = payload.total;
    this.results = payload.results;

    this.$.resultsPanel.render(this.results, total, e.searchDocument.limit, currentIndex);
  }

  /**
   * @method _onPageSizeChange
   * @description fired when then user selects a new page size
   * 
   * @param {Object} e 
   */
  _onPageSizeChange(e) {
    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, searchDoc.offset, e.detail);
    this._searchRecords(searchDoc);
  }

  /**
   * @method _onPaginationChange
   * @description fired when pagination button is clicked
   * 
   * @param {Object} e 
   */
  _onPaginationChange(e) {
    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, e.detail.startIndex);
    this._searchRecords(searchDoc);
  }

  /**
   * @method _toggleDrawer
   * @description toggles the drawer state.  Listens to 
   * toggle-drawer event from app-search-results-panel
   */
  _toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

}

customElements.define('app-search', AppSearch);