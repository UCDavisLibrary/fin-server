import AppSearchResult from "./app-search-result"
import template from "./app-search-list-result.html"

export class AppSearchListResult extends AppSearchResult {
  static get template() {
    return template;
  }
}

customElements.define('app-search-list-result', AppSearchListResult);