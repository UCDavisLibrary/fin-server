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
        }
      }
    }

    constructor() {
      super();
      this.render = render.bind(this);
      this._injectModel('AppStateModel');
      this._injectModel('MediaModel');
      this.mediaType = 'image';
    }

    async firstUpdated(changedProperties) {
      this.$.lightbox = this.shadowRoot.getElementById('lightbox');
      if( !this.$.lightbox ) this.$.lightbox = document.getElementById('lightbox');
      this.$.mediaNav = this.shadowRoot.querySelector('app-media-viewer-nav');
      this.$.zoomBtn  = this.$.mediaNav.shadowRoot.getElementById('zoomIn1');
    }

    async updated(e) {
      this.$.zoomBtn.addEventListener('click', (e) => {
        this._onZoomIn(e);
      });
    }
    
    async _onSelectedRecordMediaUpdate(record) {
      let mediaType = utils.getType(record);
      if ( mediaType === "imageList" ) {
        mediaType = "image";
      } else if ( mediaType === "streamingVideo" ){
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
      this.$.lightbox.show();
    }
  }

  customElements.define('app-media-viewer', AppMediaViewer);