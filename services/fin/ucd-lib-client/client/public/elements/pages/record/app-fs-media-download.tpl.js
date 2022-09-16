import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }

  .layout {
    display:flex; 
    align-items: center;
  }

  .layout.btns > * {
    width: 33%
  }

  .radio {
    margin-bottom: 10px;
  }

  a {
    cursor: pointer;
    display: inline-block;
    padding: 8px 12px 8px 8px;
    color : var(--default-primary-color);
    background-color : var(--default-secondary-color);
    text-transform: uppercase;
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    text-decoration: none;
    white-space: nowrap;
    height: 24px;
  }
  a iron-icon {
    vertical-align: middle;
  }
</style> 

<div id="wrapper">
  <div class="layout">
    <div class="radio" style="margin-right: 40px">
      <input id="single" type="radio" name="set-fs-dl-type" checked @click="${this._toggleMultipleDownload}" /> 
      <label for="single">Single</label>
    </div>
    <div class="radio">
      <input id="archive" type="radio" name="set-fs-dl-type" @click="${this._toggleMultipleDownload}"/> 
      <label for="archive">Archive</label>
    </div>
  </div>
</div>

<a id="downloadBtn" @click="${this._onDownloadClicked}" @keyup="${this._onDownloadClicked}" tabindex="0">
  ${this._renderDownloadBtn(this.mode)}
</a>

<app-fs-viewer></app-fs-viewer>

`;}