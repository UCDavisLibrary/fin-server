import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-input/paper-input"
import template from "./app-search.html";

import "./app-search-header";
import "./app-search-breadcrumb";
import "./results/app-search-results-panel"
import "./filtering/app-filters-panel"

import ElasticSearchInterface from '../../interfaces/ElasticSearchInterface'
import CollectionInterface from '../../interfaces/CollectionInterface'

export class AppSearch extends Mixin(PolymerElement)
            .with(EventInterface, ElasticSearchInterface, CollectionInterface) {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return template;
  }

  static get properties() {
    return {
      results : {
        type : Array,
        value : () => []
      },
      drawerOpen : {
        type : Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    this._defaultSearch();
  }

  /**
   * @method _onCollectionOverviewUpdate
   * @description CollectionInterface, fired when the collection overview updates
   * TODO: we should not preform a search untill this is fired 
   */
  _onCollectionOverviewUpdate(e) {
    if( e.state === 'loaded' ) this._defaultSearch();
  }

  /**
   * @method _onDefaultEsSearchUpdate
   * @description fired when then default search updates
   * 
   * @param {Object} e 
   */
  _onDefaultEsSearchUpdate(e) {
    this._onEsSearchUpdate(e);
  }

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
    this._setSearchPageSize(e.detail);
  }

  /**
   * @method _onPaginationChange
   * @description fired when pagination button is clicked
   * 
   * @param {Object} e 
   */
  _onPaginationChange(e) {
    this._setSearchStartIndex(e.detail.startIndex);
  }

  _toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

}

customElements.define('app-search', AppSearch);