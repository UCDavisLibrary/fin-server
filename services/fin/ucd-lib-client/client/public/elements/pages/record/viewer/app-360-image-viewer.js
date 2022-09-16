import {PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-360-image-viewer.html"

import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"

import "@ucd-lib/cork-360-image-viewer"

export default class App360ImageViewer extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, MediaInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  constructor() {
    super();
    this._injectModel('AppStateModel', 'MediaModel');
  }

  ready() {
    super.ready();
    this.$.viewer.frameToImgPath = this._frameToImgPath.bind(this);

    let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
    if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
  }

  async _onSelectedRecordMediaUpdate(record) {
    this.images = this.MediaModel.get360Media(record);
    
    /*
    if( !this.images.length ) {
      this.style.display = 'none';
      return;
    }
    */

    //this.style.display = 'block';
    
    this.$.viewer.totalFrames = this.images.length;
    
    this.$.viewer.render();
    await this.$.viewer.preload();
    this.$.viewer.spin();
  }

  _frameToImgPath(frame) {
    return this.images[frame].image.url;
  }

}

customElements.define('app-360-image-viewer', App360ImageViewer);