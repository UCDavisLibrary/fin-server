import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-input/paper-input"
import template from "./app-search.html";

import "./app-search-result"
import SearchInterface from '../../interfaces/SearchInterface'

export class AppSearch extends Mixin(PolymerElement)
            .with(EventMixin, SearchInterface) {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return template;
  }

  static get properties() {
    return {
      results : {
        type : Array,
        value : () => []
      }
    }
  }

  constructor() {
    super();
    this.search();
  }

  _onInputChange() {
    this._onSearch(
      this._textSearch(this.$.input.value)
    );
  }

  search(query) {
    this._onSearch(
      this._search(query)
    );
  }

  /**
   * @method
   * @private
   * @description Handle a search promise
   * 
   * @param {Promise} promise a search promise
   */
  _onSearch(promise) {
    promise
      .then(r => this._onSearchResponse(r))
      .catch(e => this._onSearchError(e));
  }

  /**
   * @method
   * @private
   * @description called from search catch
   * 
   * @param {Error} e search error
   */
  _onSearchError(e) {
    console.error(e);
  }

  _onSearchResponse(response) {
    if( !response.hits ) return this.results = [];
    if( !response.hits.hits ) return this.results = [];
    this.results = response.hits.hits.map(item => item._source);
  }


}

customElements.define('app-search', AppSearch);