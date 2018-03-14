import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-input/paper-input"
import template from "./app-search.html";

import "./app-search-header";
import "./app-search-breadcrumb";
import "./results/app-search-results-panel"
import "./filtering/app-filters-panel"

import AppStateInterface from '../../interfaces/AppStateInterface'
import ElasticSearchInterface from '../../interfaces/ElasticSearchInterface'
import CollectionInterface from '../../interfaces/CollectionInterface'

export class AppSearch extends Mixin(PolymerElement)
            .with(EventInterface, ElasticSearchInterface, CollectionInterface, AppStateInterface) {

  static get template() {
    return template;
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
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    this._initState();
  }

  async _initState() {
    let startState = await this._getAppState();
    if( startState.location.path[0] === 'search' ) {
      this.appState = startState;
      this._searchFromAppState();
    }
  }

  /**
   * @description AppStateInterface, fired when state updates
   * @param {*} e 
   */
  _onAppStateUpdate(e) {
    this.appState = e;

    if( e.location.path[0] === 'search' && e.location.popstate ) {
      this._searchFromAppState();
    }
  }

  /**
   * @method _onVisibleUpdate
   * @description fired when iron-pages sets this page to visible.  We need to see if this is 
   * the first time we are loading.  if so, see if we need to search.  search is required
   * if this is the first load and there is a query document in url path 
   */
  // _onVisibleUpdate() {
  //   if( !this.visible ) return;

  //   if( this.firstLoad ) {
  //     this._searchFromAppState();
  //   }
  // }

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
      query = this._fromUrlToSearchDocument(searchUrlParts.slice(1, searchUrlParts.length));
    } else {
      query = this._getAppSearchDocument();
    }

    this._esSearch(query);
  }

  /**
   * @method _onCollectionOverviewUpdate
   * @description CollectionInterface, fired when the collection overview updates
   * TODO: we should not preform a search untill this is fired 
   */
  _onCollectionOverviewUpdate(e) {
    if( e.state === 'loaded' ) this._esDefaultSearch();
  }

  // /**
  //  * @method _onDefaultEsSearchUpdate
  //  * @description ElasticSearchInterface, fired when then default search updates
  //  * 
  //  * @param {Object} e 
  //  */
  // _onDefaultEsSearchUpdate(e) {
  //   this._onEsSearchUpdate(e);
  // }

  /**
   * @method _onEsSearchUpdate
   * @description ElasticSearchInterface, fired when search updates
   * 
   * @param {Object} e 
   */
  _onEsSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;

    let currentIndex = e.query.from;
    let payload = e.payload;
    let total = 0;
    if( !payload.hits ) return this.results = [];
    else total = payload.hits.total;

    if( !payload.hits.hits ) return this.results = [];
    this.results = payload.hits.hits.map(item => item._source);

    this.$.resultsPanel.render(this.results, total, e.query.size, currentIndex);
  }

  /**
   * @method _onPageSizeChange
   * @description fired when then user selects a new page size
   * 
   * @param {Object} e 
   */
  _onPageSizeChange(e) {
    let offset = this._getAppSearchDocument().offset;
    this._esSetPaging(offset, e.detail);
  }

  /**
   * @method _onPaginationChange
   * @description fired when pagination button is clicked
   * 
   * @param {Object} e 
   */
  _onPaginationChange(e) {
    this._esSetPaging(e.detail.startIndex);
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