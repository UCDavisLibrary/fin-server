import { LitElement } from "lit-element"
import render from "./app-media-viewer.tpl"

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
          type: Boolean,
          value: false
        }
      }
    }

    constructor() {
      super();
      this.render = render.bind(this);
      this._injectModel('AppStateModel');
      this._injectModel('MediaModel');
    }

    firstUpdated(e) {
      this.$.viewerImg  = this.shadowRoot.getElementById('viewerImg');
      this.$.viewer360  = this.shadowRoot.getElementById('viewer360');
      this.$.viewerVid  = this.shadowRoot.getElementById('viewerVid');
      this.$.lightbox   = this.shadowRoot.getElementById('lightbox');
      this.$.navBottom  = this.shadowRoot.getElementById('nav-bottom');
      this.$.zoomButton = this.$.navBottom.shadowRoot.getElementById('zoomIn1');

      this.$.viewerImg.style.display = 'block';
      this.$.viewer360.style.display = 'none';
      this.$.viewerVid.style.display = 'none';
    }

    updated(e) {
      this.$.zoomButton.addEventListener('click', (e) => {
        this._onZoomIn(e);
      });
    }

    async _onSelectedRecordMediaUpdate(record) {
      /*
      if ( this.MediaModel.get360Media(record.media).length ) {
        console.info("360 Media Present");
        
        this.$.viewer360.style.display  = 'block';

        this.$.viewerImg.style.display  = 'none';
        this.$.video.style.display      = 'none';
        this.$.navBottom.style.display  = 'none';

        return;
      }
      */

      /*
      if (record.media && record.media.video) {
        this.isVideo = true;
      } else {
        this.isVideo = false;
      }

      if ( this.isVideo ) {
        this.$.video.style.display      = 'block';
        this.$.viewerImg.style.display  = 'none';
      } else {
        this.$.video.style.display      = 'none';
        this.$.viewerImg.style.display  = 'block';
      }
      */
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