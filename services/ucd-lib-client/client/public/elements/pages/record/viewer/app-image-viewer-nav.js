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
      // thumbnail width w/ border and margin
      totalThumbnailWidth : {
        type : Number,
        value : 64,
      },
      iconWidth : {
        type : Number,
        value : 40
      },
      thumbnails : {
        type : Array,
        value : () => []
      },
      thumbnailsPerFrame : {
        type : Number,
        value : 8
      },
      leftMostThumbnail : {
        type : Number,
        value : 0
      },
      breakControls : {
        type : Boolean,
        value : false
      },
      showNavLeft : {
        type : Boolean,
        value : false
      },
      showNavRight : {
        type : Boolean,
        value : false
      },
      isLightbox : {
        type : Boolean,
        value : false
      },
      singleImage : {
        type : Boolean,
        value : true
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    window.addEventListener('resize', () => this._resize());
  }

  connectedCallback() {
    super.connectedCallback();
    this._resize();
  }

  /**
   * @method _resize
   * @description update thumbnail preview on resize
   * 
   */
  _resize() {
    let w = this.offsetWidth;

    // grrrr
    if( w === 0 ) {
      setTimeout(() => this._resize(), 200);
      return;
    }

    w -= 16; // padding

    this._setNavBreak(w);
    this.showNavLeft = (this.leftMostThumbnail !== 0);

    let iconsWidth;
    if( this.breakControls ) {
      iconsWidth = this.iconWidth * 2;
    } else {
      iconsWidth = this.iconWidth * 4;
      if( this.isLightbox ) iconsWidth += this.iconWidth * 2;
    }

    let availableThumbSpace = Math.min(w - iconsWidth, 512);
    this.thumbnailsPerFrame = Math.max(Math.floor(availableThumbSpace / this.totalThumbnailWidth), 1);

    this.showNavRight = !this._showingLastThumbFrame();
    this._updateThumbnailContainerPos();
  }

  _getTotalIconWidth() {
    let totalIconWidth = this.iconWidth * 4; // nav icons and default icons
    if( this.isLightbox ) totalIconWidth += this.iconWidth * 2;
    return ;
  }

  _setNavBreak(width) {
    let totalIconWidth = this.iconWidth * 4; // nav icons and default icons
    if( this.isLightbox ) totalIconWidth += this.iconWidth * 2;

    if( totalIconWidth + (this.totalThumbnailWidth * 4) > width ) {
      this.breakControls = true;
    } else {
      this.breakControls = false;
    }
  }

  _pageLeft() {
    this.leftMostThumbnail = this.leftMostThumbnail - this.thumbnailsPerFrame;
    if( this.leftMostThumbnail < 0 ) this.leftMostThumbnail = 0;
    this._resize();
  }

  _pageRight() {
    if( this._showingLastThumbFrame() ) return;
    this.leftMostThumbnail = this.leftMostThumbnail + this.thumbnailsPerFrame;
    this._resize();
  }

  _showingLastThumbFrame() {
    console.log( this.leftMostThumbnail , this.thumbnailsPerFrame, this.thumbnails.length );
    if( this.leftMostThumbnail + this.thumbnailsPerFrame > this.thumbnails.length-1 ) {
      return true;
    }
    return false;
  }

  _updateThumbnailContainerPos() {
    // that +1 is a hack, what am I missing !?
    this.$.thumbnailContainer.style.marginLeft = (-1 * this.leftMostThumbnail * (this.totalThumbnailWidth + 1)) + 'px';
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
        position : record.position,
        selected : false,
        src : ''
      }

      if( record.width > record.height ) {
        thumbnail.src = this._getImgUrl(record.id, '', 50);
      }
      thumbnail.src = this._getImgUrl(record.id, 50, '');

      return thumbnail;
    });

    this.singleImage = (this.thumbnails.length > 1) ? false : true;
    if( this.singleImage ) this.classList.add('single');
    else this.classList.remove('single');

    this._resize();
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