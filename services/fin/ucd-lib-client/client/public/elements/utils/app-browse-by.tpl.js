import { html } from 'lit-element';
import { sharedStyles } from "../styles/shared-styles";

export default function render() { 
return html`
<style>${sharedStyles}</style>
<style>
  :host {
    display: block;
    padding-bottom: 4rem;
  }

  .header {
    display: flex;
    justify-content : center;
    margin-top: 4rem;
  }

  .header-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin: 1rem;
  }

  h1 .regular-wt {
    font-weight: var(--fw-regular);
  }

  .radio-btn-container {
    margin-left: 15px;
  }

  .sort {
    display: flex;
    align-items: center;
  }

  .body {
    display: flex;
  }

  .results {
    width: 100%;
    box-sizing: border-box;
    max-width: 400px;
  }

  .results > * {
    display: flex;
    box-sizing: border-box;
    width: 100%;
  }

  .results > * > *:first-child {
    flex: 1;
  }

  .list-item {
    margin-top: 1rem;
  }

  .list-key {
    font-weight: var(--fw-bold);
    color: var(--color-aggie-blue);
  }
</style>

<div class="header">
  <div class="header-layout">
    <div><slot name="header-icon"></slot></div>
    <div>
      <h1><span class="regular-wt">Browse</span> <span>${this.label}s</span></h1>
    </div>

    <div class="sort">
      <div style="font-weight: var(--fw-bold)">Sort By:</div> 
      ${this.sortByOptions.map((item, index) => html`
        <div class="radio-btn-container">
          <input type="radio" 
            id="browse-by-${this.facetQueryName}-${item.label}"
            name="browse-by-${this.facetQueryName}" 
            index="${index}"
            .checked="${item.selected}"
            @change="${this._onSortChange}" />
          <label for="browse-by-${this.facetQueryName}-${item.label}">${item.label}</label> 
        </div>
      `)}
    </div>
  </div>
</div>

<div class="body">
  <div style="flex: 1">
    <slot name="left-image"></slot>
  </div>
  <div class="results">
    <h5>
      <div>${this.label}</div>
      <div>Items</div>
    </h5>
    ${this.results.map(item => html`
      <div class="list-item">
        <div class="list-key"><a href="${this.getFilterUrl(item)}">${item.key}</a></div>
        <div class="list-count">${item.count}</div>
      </div>
    `)}

    <div class="solid-line-break"></div>

    <div>
      <cork-pagination 
        total-results="${this.totalResults}" 
        items-per-page="${this.resultsPerPage}"
        current-index="${this.currentIndex}"
        @nav="${this._onPaginationNav}">
      </cork-pagination>
    </div>

  </div>
  <div style="flex: 1">
    <slot name="right-image"></slot>
  </div>
</div>

`;}