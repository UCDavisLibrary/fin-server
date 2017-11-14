import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-input/paper-input"
import template from "./app-search.html";

import "./app-search-header";
import "./app-search-breadcrumb";

import "./app-search-result"
import "./app-filter-panel"
import ElasticSearchInterface from '../../interfaces/ElasticSearchInterface'
import config from "../../../lib/config"

const facetFilters = [];
for( var key in config.elasticSearch.facets ) {
  facetFilters.push({
    label : config.elasticSearch.facets[key].label,
    type : config.elasticSearch.facets[key].type,
    isDollar : config.elasticSearch.facets[key].isDollar,
    filter : key
  });
}


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
      facetFilters : {
        type : Array,
        value : facetFilters
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
  }


}

customElements.define('app-search', AppSearch);