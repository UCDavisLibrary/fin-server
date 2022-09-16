import { LitElement } from 'lit-element';
import render from "./app-browse-by.tpl.js";

import "@ucd-lib/cork-pagination";

/**
 * @class AppBrowseBy
 * @description base class for the browse by [facet] page elements
 * 
 * Bound to app-state-update, rendering when the url matches /browse/[id] where
 * element id is.  You must provide facet-query-name and label as well.
 * 
 * Three slots are available for images; 'header-icon', 'left-image' and 'right-image'
 * 
 * @property {String} id required so page is rendered on correct app-state-update event
 * @property {String} facet-query-name the record property to be queried on
 * @property {String} label nice label text for query facet
 * @property {Array} sortByOptions override this property to change the default sorts
 */
export default class AppBrowseBy extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      facetQueryName : {type: String, attribute: 'facet-query-name'},
      label : {type: String},
      sortByOptions : {type: Array},
      results : {type: Array},
      totalResults : {type: Number},
      resultsPerPage : {type: Number},
      currentIndex : {type: Number}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.sortByOptions = [
      {label : 'A-Z', type: 'key', dir : 'asc', selected: true},
      {label : 'Item Quantity', dir : 'dsc', type: 'count'}
    ];

    this.reset();

    this._injectModel('BrowseByModel', 'AppStateModel', 'RecordModel');
  }

  /**
   * @method reset
   * @description reset search properties
   */
  reset() {
    this.results = [];
    this.totalResults = 0;
    this.resultsPerPage = 20;
    this.currentIndex = 0;
    this.label = '';
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   * 
   * @param {Object} e 
   * @returns {Promise} 
   */
  async _onAppStateUpdate(e) {
    if( e.location.page !== 'browse' ) return;
    if( e.location.path.length < 2 ) return;
    if( e.location.path[1] !== this.id ) return; // the page

    if( this.totalResults === 0 ) {
      this.loading = true;
      this.allResults = await this.BrowseByModel.getFacets(this.facetQueryName);
      this.totalResults = this.allResults.payload.length;
      this.loading = false;
    }

    if( e.location.path.length > 2 ) {
      this.currentIndex = parseInt(e.location.path[2]);
    } else {
      this.currentIndex = 0;
    }

    let sort = 0;
    if( e.location.path.length > 2 ) {
      sort = parseInt(e.location.path[2]);
    }
    this.sortByOptions.forEach((item, index) => item.selected = (sort === index));

    this._renderResults();
  }

  /**
   * @method _renderResults
   * @description render the results array based on currentPage and sort
   * params
   */
  _renderResults() {
    let sort = this.sortByOptions.find(item => item.selected);

    if( this.sortedAs !== sort.type ) {
      this.allResults.payload.sort((a, b) => {
        if( a[sort.type] > b[sort.type] ) return (sort.dir === 'asc') ? 1 : -1;
        if( a[sort.type] < b[sort.type] ) return (sort.dir === 'asc') ? -1 : 1;
        return 0; 
      });
      this.sortedAs = sort.type;
    }

    this.results = this.allResults.payload.slice(
      this.currentIndex, 
      this.currentIndex + this.resultsPerPage 
    );

    this.requestUpdate();
  }

  /**
   * @method _onPaginationNav
   * @description bound to cork-pagination nav event
   * 
   * @param {Object} e 
   */
  _onPaginationNav(e) {
    this.currentIndex = (e.detail.page-1) * this.resultsPerPage;
    this._renderResults();
  }

  /**
   * @method _onSortChange
   * @description bound to sort radio button change events
   * 
   * @param {Object} e 
   */
  _onSortChange(e) {
    let sortIndex = parseInt(e.currentTarget.getAttribute('index'));
    this.sortByOptions.forEach((item, index) => item.selected = (index === sortIndex));
    this.currentIndex = 0;
    this._renderResults();
  }

  /**
   * @method getFilterUrl
   * @description used by UI to create anchor tag urls for search queries
   * based on given facet
   * 
   * @param {Object} item facet result item 
   * @returns {String}
   */
  getFilterUrl(item) {
    let searchDocument = this.RecordModel.emptySearchDocument();
    this.RecordModel.appendKeywordFilter(searchDocument, this.facetQueryName, item.key);
    return '/search/'+this.RecordModel.searchDocumentToUrl(searchDocument);
  }

}

customElements.define('app-browse-by', AppBrowseBy);
