import { LitElement, } from "lit-element"
import render from "./app-media-viewer.tpl"

import "./app-image-viewer-static"
import "./app-360-image-viewer"
import "./app-video-viewer"

import "./app-image-viewer-nav"
import "./app-image-viewer-lightbox"

import "@ucd-lib/cork-app-utils"
import config from "../../../../lib/config"
import utils from "../../../../lib/utils"

export default class AppMediaViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {

    static get properties() {
      return {}
    }

    constructor() {
      super();
      this.render = render.bind(this);
      this._injectModel('AppStateModel');
    }

    async _onSelectedRecordMediaUpdate(media) {
      console.log("medai: ", media);
    }

    /**
     * @method _onZoomIn
     * @description bound to zoom event from viewer nav. 
     * 
     * @param {Object} e custom HTML event
     */
    _onZoomIn(e) {
      this.$.lightbox.show();
    }
  }

  customElements.define('app-media-viewer', AppMediaViewer);