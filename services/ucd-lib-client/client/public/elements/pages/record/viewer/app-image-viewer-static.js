import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-spinner/paper-spinner-lite"
import template from "./app-image-viewer-static.html"

import "./app-image-viewer-nav"
import "./app-image-viewer-lightbox"

import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"

export default class AppImageViewerStatic extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, MediaInterface) {
  
    static get template() {
    return template;
  }

  static get properties() {
    return {
      record : {
        type : Object,
        value : () => {}
      },
      media : {
        type : Object,
        value : () => {}
      },
      loading: {
        type : Boolean,
        value : false
      },
      height : {
        type : Number,
        value : 600
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  /**
   * @method _onSelectedRecordUpdate
   * @description from AppStateInterface, called when a record is selected
   * 
   * @param {Object} record selected record
   */
  _onSelectedRecordUpdate(record) {
    
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    this.media = media;
    this._renderImg();
  }

  _renderImg() {
    let url = this._getImgUrl(this.media.id, '', this.height);
    let r = 600 / this.media.height;
    let w = this.media.width * r;
    let eleWidth = this.offsetWidth-20;
    let startHeight = Math.ceil(eleWidth > w ? this.height : ((eleWidth/w)*this.height));

    let img = new Image();
    this.loading = true;
    
    this.$.loading.style.height = startHeight+'px';
    
    img.onload = () => {
      this.loading = false;
      this.$.img.style.height = 'auto';
    };
    img.src = url;

    this.$.img.style.maxWidth = w + 'px';
    this.$.img.src = url; 
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

customElements.define('app-image-viewer-static', AppImageViewerStatic);