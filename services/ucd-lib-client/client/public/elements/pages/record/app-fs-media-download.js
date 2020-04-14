import { LitElement, html } from 'lit-element';
import render from "./app-fs-media-download.tpl.js"

import "./viewer/app-fs-viewer"

export default class AppFsMediaDownload extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      mode : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.mode = 'single'

    this._injectModel('AppStateModel');
  }

  async firstUpdated() {
    this.fsViewer = this.shadowRoot.querySelector('app-fs-viewer');
    this._onAppStateUpdate(await this.AppStateModel.get());
  }

  _onAppStateUpdate(e) {
    this.selectedRecord = e.selectedRecord;
    this.selectedRecordMedia = e.selectedRecordMedia;
  }

  _toggleMultipleDownload(e) {
    this.mode = e.currentTarget.id;
  }

  _onDownloadClicked(e) {
    if( e.type === 'keyup' && e.which !== 13 ) return;

    if( this.mode === 'single' ) {
      this.fsViewer.show();
    } else {
      if( this.selectedRecordMedia.clientMediaDownload ) {
        let url = this.selectedRecordMedia.clientMediaDownload;
        if( Array.isArray(url) ) url = url[0];
        if( typeof url === 'object' ) url = url['@id'];
        url = '/fcrepo/rest/'+url;
        console.log('downloading archive using: '+url);
        open(url, '_blank');
      } else {
        let url = '/api/zip/bag-of-files'+this.selectedRecordMedia['@id'];
        open(url, '_blank');
        console.log('downloading archive using: '+url);
      }
    }
  }

  _renderDownloadBtn(mode) {
    if( this.mode === 'single' ) {
      return html`<iron-icon icon='file-download'></iron-icon> Browse for file`;
    } else {
      return html`<iron-icon icon='file-download'></iron-icon> Download Archive`;
    }
  }
}

customElements.define('app-fs-media-download', AppFsMediaDownload);
