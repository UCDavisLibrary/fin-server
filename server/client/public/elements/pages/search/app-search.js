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

  _onInputChange() {
    this._textSearch(this.$.input.value)
  }

  _onDefaultEsSearchUpdate(e) {
    this._onEsSearchUpdate(e);
  }

  _onEsSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;

    let payload = e.payload;
    if( !payload.hits ) return this.results = [];
    if( !payload.hits.hits ) return this.results = [];
    this.results = payload.hits.hits.map(item => item._source);

    this.$.resultsPanel.render(this.results);
  }

  _toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

}

customElements.define('app-search', AppSearch);