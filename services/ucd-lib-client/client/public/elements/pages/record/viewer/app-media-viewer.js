import { LitElement } from "lit-element"
import render from "./app-media-viewer.tpl"

import '@polymer/iron-pages'

import "./app-image-viewer"
import "./app-360-image-viewer"
import "./app-video-viewer"
import "./app-audio-viewer"

import "./app-media-viewer-nav"
import "./app-image-viewer-lightbox"

import "@ucd-lib/cork-app-utils"

export default class AppMediaViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {

    static get properties() {
      return {
        isMediaType: {
          type: String
        }
      }
    }

    constructor() {
      super();
      this.render = render.bind(this);
      this._injectModel('AppStateModel');
      this._injectModel('MediaModel');
      this.isMediaType = 'image';
    }

    async firstUpdated(changedProperties) {
      this.$.wrapper  = this.shadowRoot.getElementById('wrapper');
      this.$.lightbox = this.shadowRoot.getElementById('lightbox');
      this.$.mediaNav = this.shadowRoot.querySelector('app-media-viewer-nav');
      this.$.zoomBtn  = this.$.mediaNav.shadowRoot.getElementById('zoomIn1');
    }

    async updated(e) {
      this.$.zoomBtn.addEventListener('click', (e) => {
        this._onZoomIn(e);
      });
    }
    
    async _onSelectedRecordMediaUpdate(record) {
      if ( this.MediaModel.get360Media(record.media).length ) {
        this.isMediaType = "360";
        this.$.mediaNav.style.display = 'none';
        return;
      }

      if (record.media && record.media.video || record.video ) {
        this.isMediaType = "video";
        this.$.mediaNav.classList.add('video');
        this.$.wrapper.classList.add('positionRelative');
      } else if (record.media && record.media.audio || record.audio) {
        this.isMediaType = "audio";
        this.$.mediaNav.classList.add('audio');
        this.$.wrapper.classList.add('positionRelative');
        this.$.mediaNav.classList.remove('video');
      } else {
        this.isMediaType = "image";
        this.$.mediaNav.classList.remove('video');
        this.$.mediaNav.classList.remove('audio');
        this.$.wrapper.classList.remove('positionRelative');
      }
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