import AppSearchResult from "./app-search-result"
import template from "./app-search-grid-result.html"

export class AppSearchGridResult extends AppSearchResult {
  static get template() {
    return template;
  }
}

customElements.define('app-search-grid-result', AppSearchGridResult);