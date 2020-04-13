import { LitElement, html } from 'lit-element';
import render from "./app-fs-media-download.tpl.js"

import "./viewer/app-fs-viewer"

export default class AppFsMediaDownload extends LitElement {

  static get properties() {
    return {
      mode : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.mode = 'single'
  }

  firstUpdated() {
    this.fsViewer = this.shadowRoot.querySelector('app-fs-viewer');
  }

  _toggleMultipleDownload(e) {
    this.mode = e.currentTarget.id;
  }

  _onDownloadClicked(e) {
    if( e.type === 'keyup' && e.which !== 13 ) return;

    if( this.mode === 'single' ) {
      this.fsViewer.show();
    }
  }

  _renderDownloadBtn(mode) {
    if( this.mode === 'single' ) {
      return html`<iron-icon icon='file-download'></iron-icon> Browse for file`;
    } else {
      return html`Download`;
    }
  }
}

customElements.define('app-fs-media-download', AppFsMediaDownload);
