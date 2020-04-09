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
    width: 700px;
    background-color: var(--light-background-color);
  }

  .header-layout {
    display: flex;
    margin: 20px;
  }

  .header-image {
    margin-left: 20px;
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

  button.close {
    background-color: white;
    border: none;
    margin: 0;
    padding: 5px;
    height: 45px;
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
      <div>${this.fileCount} files</div>
      <div style="display: flex">
        <input type="text" placeholder="Search Files" @keyup="${this._onInputKeyup}" />
        <button class="search"><iron-icon icon="fin-icons:search"></iron-icon></button>
        <iron-icon icon="close"></iron-icon>
      </div>
    </div>
  </div>

  <div class="breadcrumbs">
    <iron-icon icon="home"></iron-icon>
    ${this._renderBreadcrumbs()}
  </div>

  <div class="break"></div>

  <div class="table-flex">
    <div></div>
    <div></div>
  </div>

  <div>
  ${this.files.map(file => html`
  <div>
    <div>${file.filename}</div>
    <div>${file.directParent}</div>
  </div>
  `)}
    <app-virtual-scroller item-height="25" count="${this.files.length}"></app-virtual-scroller>
  </div>

</div> <!-- content -->
</div> <!-- layout -->

`;}