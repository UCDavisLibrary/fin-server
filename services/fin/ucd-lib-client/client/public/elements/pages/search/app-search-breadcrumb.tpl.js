import { html } from 'lit';


export default function render() {
return html`
<style>
  :host {
    display: block;
    color: var(--default-primary-color);
    background-image: url('/images/header-colorbar.png');
    background-size: cover;
    background-position: left center;    
  }

  .layout {
    padding: 0 15px;
  }

  .layout > div {
    margin: 0 5px;
  }

  a,
  iron-icon {
    cursor: pointer;
  }

  a:focus {
    outline-color: var(--default-primary-color);
  }
</style>

<div class="layout" ?hidden="${!this.selected}" id="layout">
  <a on-click="${this._onSearchClicked}" tabindex="0">Search</a>
  
  <span ?hidden="${!this.collection}">&gt;</span>
  <span ?hidden="${!this.collection}"><a on-click="${this._onCollectionClicked}" tabindex="0">${this.collection.name}</a></span>

  <span ?hidden="${!this.record}">&gt;</span>
  <span ?hidden="${!this.record}">Item</span>
</div>
`;}