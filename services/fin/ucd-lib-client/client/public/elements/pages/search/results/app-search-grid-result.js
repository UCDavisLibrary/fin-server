import { LitElement } from 'lit';
import AppSearchResult from "./app-search-result"
import render from "./app-search-grid-result.tpl.js"

export class AppSearchGridResult extends Mixin(LitElement, AppSearchResult)
  .with(LitCorkUtils) {

    constructor() {
      super();
      this.active = true;
      this.render = render.bind(this);
    }

    updated() {
      debugger;
    }

}

customElements.define('app-search-grid-result', AppSearchGridResult);