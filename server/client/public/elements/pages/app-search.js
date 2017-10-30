import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-search.html";

import SearchInterface from '../interfaces/SearchInterface'

export class AppSearch extends Mixin(PolymerElement)
            .with(EventMixin, SearchInterface) {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return template;
  }

  constructor() {
    super();
    this.search();
  }

  async search(query) {
    try {
      let response = await this._search(query);
      console.log(response);
    } catch(e) {
      console.log(e);
    }
  }


}

customElements.define('app-search', AppSearch);