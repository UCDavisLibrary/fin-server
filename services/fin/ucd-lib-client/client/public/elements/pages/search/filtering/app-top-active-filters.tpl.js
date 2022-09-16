import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: none;
    margin-left: 10px;
    padding-top: 10px;
    padding-bottom: 5px;
    border-top: 1px solid var(--light-background-color);
    font-size: var(--fs-sm);
  }

  .layout {
    display: flex;
    flex-wrap: wrap;
  }

  iron-icon {
    color: var(--default-secondary-color);
    margin-left: -6px;
  }

  .title {
    margin-right: 10px;
    font-style: italic;
  }

  .rm-btn {
    font-weight: bold;
    font-style: italic;
    display: flex;
    margin-right: 12px;
    cursor: pointer;
  }
</style>  

<div class="layout">
  <div class="title">Active Filters:</div>
  ${this.activeFilters.map((item, index) => html`
    <div @click="${this._onRemoveFilterClicked}" class="rm-btn" index="${index}" role="button" tabindex="0">
      <iron-icon icon="fin-icons:close"></iron-icon> ${item.label}
    </div>
  `)}
</div>

`;}