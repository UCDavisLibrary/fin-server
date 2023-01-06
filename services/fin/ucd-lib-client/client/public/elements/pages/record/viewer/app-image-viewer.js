// import {PolymerElement} from "@polymer/polymer/polymer-element"
import { LitElement } from "lit"
import "@polymer/paper-spinner/paper-spinner-lite"
import render from "./app-image-viewer.tpl.js"

import utils from "../../../../lib/utils"

export default class AppImageViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {
  
  static get properties() {
    return {
      record : { type : Object },
      media : { type : Object },
      loading: { type : Boolean },
      height : { type : Number },
      hasMultipleImages : { type : Boolean },
    }
  }

  constructor() {
    super();
    this.active = true;
    this.render = render.bind(this);
    this._injectModel('AppStateModel', 'MediaModel');

    this.record = {};
    this.media = {};
    this.loading = false;
    this.height = 600;
    this.hasMultipleImages = false;
  }

  async firstUpdated() {
    let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
    if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
  }

  _onAppStateUpdate(e) {
    if( e.selectedRecord.index[e.location.pathname] !== e.selectedRecordMedia && e.selectedRecord.root['@id'] !== e.location.pathname ) {
      let selectedRecordMedia = e.selectedRecord.index[e.location.pathname];
      this._onSelectedRecordMediaUpdate(selectedRecordMedia);
    }
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

    if ( this.media.image.width < this.height) this.height = this.media.image.width;
    let url = this.MediaModel.getImgUrl(this.media.image.url, '', this.height);
    let r = 600 / this.media.image.height;
    let w = this.media.image.width * r;

    let eleWidth = this.offsetWidth-20;
    if ( eleWidth < 1 ) eleWidth = 1;

    let startHeight = Math.ceil(eleWidth > w ? this.height : ((eleWidth/w)*this.height));

    let img = new Image();
    this.loading = true;
    
    this.shadowRoot.querySelector('#loading').style.height = startHeight+'px';
    
    img.onload = () => {
      this.loading = false;
      this.shadowRoot.querySelector('#img').style.maxHeight = '600px';
    };
    img.src = url;

    this.shadowRoot.querySelector('#img').style.maxWidth = w + 'px';
    this.shadowRoot.querySelector('#img').src = url;
  }
}

customElements.define('app-image-viewer', AppImageViewer);