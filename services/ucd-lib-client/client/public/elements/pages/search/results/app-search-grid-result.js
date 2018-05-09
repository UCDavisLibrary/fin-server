import AppSearchResult from "./app-search-result"
import template from "./app-search-grid-result.html"

export class AppSearchGridResult extends AppSearchResult {
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }
}

customElements.define('app-search-grid-result', AppSearchGridResult);