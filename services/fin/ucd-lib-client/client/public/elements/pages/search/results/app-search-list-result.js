import AppSearchResult from "./app-search-result"
import template from "./app-search-list-result.html"

export class AppSearchListResult extends AppSearchResult {
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }
}

customElements.define('app-search-list-result', AppSearchListResult);