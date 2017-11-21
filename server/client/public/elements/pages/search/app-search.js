import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-input/paper-input"
import template from "./app-search.html";

import "./app-search-header";
import "./app-search-breadcrumb";
import "./results/app-search-results-panel"
import "./filtering/app-filters-panel"

import ElasticSearchInterface from '../../interfaces/ElasticSearchInterface'

export class AppSearch extends Mixin(PolymerElement)
            .with(EventInterface, ElasticSearchInterface) {

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
    this._defaultSearch();
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

    let payload = e.payload;
    let total = 0;
    if( !payload.hits ) return this.results = [];
    else total = payload.hits.total;

    if( !payload.hits.hits ) return this.results = [];
    this.results = payload.hits.hits.map(item => item._source);

    this.$.resultsPanel.render(this.results, total, e.query.size);
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

  _toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

}

customElements.define('app-search', AppSearch);