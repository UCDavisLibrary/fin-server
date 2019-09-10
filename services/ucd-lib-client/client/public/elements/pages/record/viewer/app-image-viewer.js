import {PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-spinner/paper-spinner-lite"
import template from "./app-image-viewer.html"

import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"

export default class AppImageViewer extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, MediaInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
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
      },
      hasMultipleImages : {
        type : Boolean,
        value : false
      },
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
    console.log("app-image-viewer.js => _onSelectedRecordUpdate(): ", record);
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
    let url = this._getImgUrl(this.media.image.url, '', this.height);

    let r = 600 / this.media.image.height;
    let w = this.media.image.width * r;
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
}

customElements.define('app-image-viewer', AppImageViewer);