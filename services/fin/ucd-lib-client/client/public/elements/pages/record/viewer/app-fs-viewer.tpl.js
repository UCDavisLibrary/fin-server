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
    /* animation: 300ms linear fs-viewer-animate-in; */
  }

  @keyframes fs-viewer-animate-in {
    0% {
      transform: scale(1.2);
      opacity: 0.5
    }
    100% {
      transform: scale(1);
      opacity: 1
    }
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
    color: var(--default-primary-color);
    background-color: var(--light-background-color);
    padding: 20px;
    display: flex;
  }

  .header-image {
    margin-right: 20px;
  }

  .header-image .img, .header-image iron-icon[icon="fin-icons:various-outline-stacked"] {
    height: 100px;
    width: 100px;
  }

  #searchInput {
    font-size: 16px;
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    padding: 0 5px;
    background: white;
    border: none;
    height: 45px;
    outline: none;
    background-color: white;
    border-radius: 0;
  }

  .row {
    /* height: 100%; */
  }

  .vs-row[hover] {
    background-color: var(--color-light-yellow);
  }

  .row {
    cursor: pointer;
    /* background-color: var(--color-light-yellow); */
  }

  .row > div {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 8px;
    border-bottom: 1px solid var(--medium-background-color);
  }

  .row[selected] {
    background-color: var(--color-light-yellow);
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
    width: 75px;
  }

  .row .icon, .row .filesize {
    padding: 6px 0;
  }

  /* .row .file {
    flex: 1;
  } */

  .row .directory, .row .filename {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .row .selected-file {
    width: 25px;
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

  iron-icon[icon="folder"] {
    color: var(--color-aggie-blue);
  }
  iron-icon[icon="fin-icons:image-solid"] {
    color: var(--color-aggie-gold);
  }
  iron-icon[icon="fin-icons:video-solid"] {
    color: var(--color-pinot);
  }
  iron-icon[icon="fin-icons:sound-solid"] {
    color: var(--color-redbud);
  }
  iron-icon[icon="fin-icons:text-solid"] {
    color: var(--color-putah-creek);
  }
  iron-icon[icon="fin-icons:spreadsheet-solid"] {
    color: var(--color-quad);
  }
  iron-icon[icon="fin-icons:pdf-solid"] {
    color: var(--double-decker);
  }
  iron-icon[icon="fin-icons:compressed-solid"] {
    color: var(--color-poppy);
  }
  iron-icon[icon="fin-icons:file-solid"] {
    color: var(--color-grey);
  }
  iron-icon[icon="check"] {
    color: var(--default-secondary-color);
  }

  .table-header {
    display: flex;
    font-size: var(--fs-p);
    color: var(--color-grey);
    font-style: italic;
    padding: 10px 0;
  }

  .table-header > div {
    padding-left: 5px;
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

  .footer {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  .cancel-btn {
    border: 1px solid var(--default-secondary-color);
    color: var(--default-primary-color);
    padding: 6px 10px;
    margin: 0 15px 0 0;
    background-color: transparent;
    border-radius: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 20px;
    cursor: pointer;
  }

  .download-btn {
    border: 1px solid var(--default-secondary-color);
    background-color: var(--default-secondary-color);
    color: var(--default-primary-color);
    padding: 6px 10px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
  }
  .download-button:visited {
    color: var(--default-primary-color);
  }

  a[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 700px) {
    .content {
      margin: 0;
      flex: 1;
      width: 100%;
      height: calc(100vh);
    }
  }
</style>

<div class="layout">
<div class="content">

  
    <div class="header-layout">
      <div class="header-image">
        <iron-icon icon="fin-icons:various-outline-stacked" ?hidden="${this.thumbnail}"></iron-icon>
        <div class="img" style="background-image: url(${this.thumbnail}); background-size: cover; background-position: center center;" ?hidden="${!this.thumbnail}" ></div>
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

      <div class="table-header">
        <div style="flex:1">Name</div> 
        <div style="width: 115px">Size</div>
      </div>
      <app-virtual-scroller item-height="${this.lineHeight}" .items="${this.files}"></app-virtual-scroller>

      <div class="footer">
        <div style="flex: 1"></div>
        <div>
          <button class="cancel-btn" @click="${this.hide}">Cancel</button>
        </div>
        <div>
          <a class="download-btn" ?disabled="${!this.selectedFile}" href="${this.selectedFile}" target="_blank">Download</a>
        </div>
      </div> <!-- footer -->
    </div>


</div> <!-- content -->
</div> <!-- layout -->

`;}