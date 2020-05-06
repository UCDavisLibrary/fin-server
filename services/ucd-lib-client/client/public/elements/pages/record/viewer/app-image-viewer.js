import {PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-spinner/paper-spinner-lite"
import template from "./app-image-viewer.html"

import utils from "../../../../lib/utils"

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

  async ready() {
    super.ready();

    let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
    if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    if( !media ) return;
    let getMediaType = utils.getMediaType(media);
    if (getMediaType !== 'ImageList' && getMediaType !== 'ImageObject') return;

    this.media = media;
    this._renderImg();
  }

  _renderImg() {
    if ( this.media.hasPart && this.media.hasPart.length > 0 ) {
      this.media.image = this.media.hasPart[0].image;
    }

    // TODO: Justin please review.  Fixes the problem w/the height being too large since 
    //       the problem seems to originate in this.height 
    //       being set to 600 in this component's properties.
    if ( this.media.image.width < this.height) this.height = this.media.image.width;
    let url = this._getImgUrl(this.media.image.url, '', this.height);
    let r = 600 / this.media.image.height;
    let w = this.media.image.width * r;

    let eleWidth = this.offsetWidth-20;
    if ( eleWidth < 1 ) eleWidth = 1;

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