import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-image-viewer-nav.html"

import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"

export default class AppImageViewerNav extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, MediaInterface) {

  static get template() {
    return template;
  }

  static get properties() {
    return {
      mediaList : {
        type : Array,
        value : () => []
      },
      mediaListSrc : {
        type : Array,
        value : () => []
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
    this.mediaList = this._getImageMediaList(record);

    this.thumbnails = this.mediaList.map(record => {

      let thumbnail = {
        id : record.id,
        selected : false,
        src : ''
      }

      if( record.width > record.height ) {
        thumbnail.src = this._getImgUrl(record.id, '', 50);
      }
      thumbnail.src = this._getImgUrl(record.id, 50, '');

      return thumbnail;
    });
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    this.media = media;
    
    this.thumbnails.forEach((thumbnail, index) => {
      this.set(`thumbnails.${index}.selected`, (media.id === thumbnail.id));
    });
  }

  /**
   * @method _onThumbnailClicked
   * @description bound to thumbnail click event.  select a media object
   * 
   * @param {Object} e HTML click event
   */
  _onThumbnailClicked(e) {
    let id = e.currentTarget.getAttribute('media-id');
    let media = this.mediaList.find(item => item.id === id);
    this._setSelectedRecordMedia(media);
  }

}

customElements.define('app-image-viewer-nav', AppImageViewerNav);