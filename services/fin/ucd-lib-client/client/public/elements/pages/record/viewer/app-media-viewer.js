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
        tallControls : {type: Boolean},
        bagOfFilesImage : {type: String}
      }
    }

    constructor() {
      super();
      this.render = render.bind(this);
      this._injectModel('AppStateModel', 'RecordModel');
      this.mediaType = 'image';
      this.bagOfFilesImage = '';
    }

    async firstUpdated() {
      this.$.lightbox = this.shadowRoot.getElementById('lightbox');
      if( !this.$.lightbox ) this.$.lightbox = document.getElementById('lightbox');

      this._onAppStateUpdate(await this.AppStateModel.get());
    }

    /**
     * @method _onRecordUpdate
     * @description from RecordModel, listen for loading events and reset UI.
     * 
     * @param {Object} e state event 
     */
    _onRecordUpdate(e) {
      // if( e.state !== 'loading' ) return;
      // this.mediaType = '';
    }

    _onAppStateUpdate(e) {
      if( !e.selectedRecordMedia ) {
        this.selectedRecordMediaId = '';
        return this.mediaType = '';
      }
      if( e.selectedRecordMedia['@id'] === this.selectedRecordMediaId ) {
        return;
      }

      this.selectedRecordMediaId = e.selectedRecordMedia['@id'];

      let mediaType = utils.getMediaType(e.selectedRecordMedia).toLowerCase().replace(/object/i, '');
      if ( mediaType === "imagelist" ) {
        mediaType = "image";
      } else if ( mediaType === "streamingvideo" ){
        mediaType = "video";
      }

      if( mediaType === 'bagoffiles' && e.selectedRecordMedia.thumbnailUrl ) {
        this.bagOfFilesImage = e.selectedRecordMedia.thumbnailUrl;
      } else {
        this.bagOfFilesImage = '';
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