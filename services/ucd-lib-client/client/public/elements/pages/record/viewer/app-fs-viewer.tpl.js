import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: none;
    position: absolute;
    z-index: 10000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .layout {
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
  }

  .content {
    margin: 50px 0;
    height: calc(100vh - 100px);
    width: 700px;
    background-color: var(--super-light-background-color);
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin: 0;
  }

  .content-body {
    flex: 1;
    padding: 20px;
  }

  .header-layout {
    background-color: var(--light-background-color);
    padding: 20px;
    display: flex;
  }

  .header-image {
    margin-right: 20px;
  }

  .header-image img {
    height: 100px;
    width: 100px;
  }

  input[type="text"] {
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    padding: 0 5px;
    background: white;
    border: none;
    height: 45px;
    outline: none;
    background-color: white;
  }

  .row {
    display: flex;
    align-items: center;
    margin: 0 5px;
    border-bottom: 1px solid var(--medium-background-color);
  }

  .row[directory] {
    cursor: pointer;
  }

  .row .directory {
    font-size: 11px; 
    line-height: 12px; 
    color: #888;
    margin-bottom: 6px;
  }

  .row .icon {
    width: 30px;
  }

  .row .filesize {
    flex: 0.2;
  }

  .row .icon, .row .filesize {
    padding: 6px 0;
  }

  .row .file {
    flex: 1;
  }

  button.search {
    background-color: white;
    color: var(--default-secondary-color);
    border: none;
    margin: 0;
    padding: 5px;
    height: 45px;
  }

  iron-icon[icon="home"] {
    cursor: pointer;
    color: var(--default-secondary-color);
  }

  iron-icon[icon="chevron-right"] {
    color: var(--medium-background-color);
  }

  .breadcrumbs {
    color: var(--default-primary-color);
  }

  .breadcrumbs .breadcrumb {
    cursor: pointer;
  }

  app-virtual-scroller {
    flex: 1;
    background-color: white;
  }

  .break {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed var(--medium-background-color);
  }

  @media (max-width: 700px) {
    .content {
      margin: 0;
      flex: 1;
      width: 100%;
    }
  }
</style>

<div class="layout">
<div class="content">

  
    <div class="header-layout">
      <div class="header-image">
        <img src="" />
      </div>
      <div style="flex:1">
        <h2>${this.title}</h2>
        <div>${this.files.length} files</div>
        <div style="display: flex">
          <input id="searchInput" type="text" placeholder="Search Files" @keyup="${this._onInputKeyup}" />
          <button class="search">
            <iron-icon icon="${this.mode === 'search' ? 'close' : 'fin-icons:search'}" @click="${this._onClearSearchClicked}"></iron-icon>
          </button>
        </div>
      </div>
    </div>

    <div class="content-body">
      <div class="breadcrumbs">
        <iron-icon icon="home" @click="${this._onBreadcrumbClicked}" dir="/"></iron-icon>
        ${this._renderBreadcrumbs()}
      </div>

      <div class="break"></div>

      <app-virtual-scroller item-height="${this.lineHeight}" .items="${this.files}"></app-virtual-scroller>

      <div></div> <!-- footer -->
    </div>


</div> <!-- content -->
</div> <!-- layout -->

`;}