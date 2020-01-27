import { LitElement } from "lit-element"
import render from "./app-media-viewer.tpl"

import '@polymer/iron-pages'

import "./app-image-viewer"
// import "./app-360-image-viewer"
import "./app-video-viewer"
import "./app-audio-viewer"

import "./app-media-viewer-nav"
import "./app-image-viewer-lightbox"

import "@ucd-lib/cork-app-utils"
import utils from "../../../../lib/utils"

export default class AppMediaViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {

    static get properties() {
      return {
        mediaType: {
          type: String
        },
        tallControls : {type: Boolean}
      }
    }

    constructor() {
      super();
      this.render = render.bind(this);
      this._injectModel('AppStateModel');
      this._injectModel('RecordModel');
      this.mediaType = 'image';
    }

    async firstUpdated() {
      this.$.lightbox = this.shadowRoot.getElementById('lightbox');
      if( !this.$.lightbox ) this.$.lightbox = document.getElementById('lightbox');

      let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
      if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
    }

    /**
     * @method _onRecordUpdate
     * @description from RecordModel, listen for loading events and reset UI.
     * 
     * @param {Object} e state event 
     */
    _onRecordUpdate(e) {
      if( e.state !== 'loading' ) return;
      this.mediaType = '';
    }

    async _onSelectedRecordMediaUpdate(record) {
      let mediaType = utils.getMediaType(record).toLowerCase().replace(/object/i, '');
      if ( mediaType === "imagelist" ) {
        mediaType = "image";
      } else if ( mediaType === "streamingvideo" ){
        mediaType = "video";
      }
      this.mediaType = mediaType;
    }

    /**
     * @method _onZoomIn
     * @description bound to zoom event in app-media-viewer-nav. 
     * 
     * @param {Object} e custom HTML event
     */
    _onZoomIn(e) {
      this.AppStateModel.set({showLightbox: true});
      this.$.lightbox.show();
    }
  }

  customElements.define('app-media-viewer', AppMediaViewer);