import { LitElement } from "lit-element"
import render from "./app-media-viewer.tpl"

import '@polymer/iron-pages'

import "./app-image-viewer"
import "./app-360-image-viewer"
import "./app-video-viewer"

import "./app-image-viewer-nav"
import "./app-image-viewer-lightbox"

import "@ucd-lib/cork-app-utils"

export default class AppMediaViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {

    static get properties() {
      return {
        isVideo: {
          type: Boolean
        },
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

      this.isVideo    = false;
      this.mediaType  = '';
    }

    firstUpdated(e) {
      this.$.lightbox   = this.shadowRoot.getElementById('lightbox');
      this.$.navBottom  = this.shadowRoot.querySelector('app-image-viewer-nav');
      this.$.zoomButton = this.$.navBottom.shadowRoot.getElementById('zoomIn1');
    }

    async updated(e) {
      this.$.zoomButton.addEventListener('click', (e) => {
        this._onZoomIn(e);
      });
    }
    
    async _onSelectedRecordMediaUpdate(record) {
      if ( this.MediaModel.get360Media(record.media).length ) {
        this.mediaType = '360';
        this.$.navBottom.style.display = 'none';
        return;
      }

      if (record.media && record.media.video) {
        this.mediaType = "video";
        this.isVideo = true;
      } else {
        this.mediaType = "image";
        this.isVideo = false;
      }
    }

    /**
     * @method _onZoomIn
     * @description bound to zoom event in app-image-viewer-nav. 
     * 
     * @param {Object} e custom HTML event
     */
    _onZoomIn(e) {
      this.$.lightbox.show();
    }
  }

  customElements.define('app-media-viewer', AppMediaViewer);