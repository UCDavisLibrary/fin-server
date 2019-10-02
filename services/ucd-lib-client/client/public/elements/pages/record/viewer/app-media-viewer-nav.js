import {PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-media-viewer-nav.html"

import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"

import "../../../utils/app-share-btn"
import utils from "../../../../lib/utils"

export default class AppMediaViewerNav extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, MediaInterface) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      // thumbnail width w/ border and margin
      totalThumbnailWidth : {
        type : Number,
        value : 64,
      },
      icon: {
        type: String,
        value: ''
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
        value : 10
      },
      leftMostThumbnail : {
        type : Number,
        value : 0
      },
      breakControls : {
        type : Boolean,
        value : false
      },
      /*
      showNavLeft : {
        type : Boolean,
        value : false
      },
      showNavRight : {
        type : Boolean,
        value : false
      },
      */
      isLightbox : {
        type : Boolean,
        value : false
      },
      singleImage : {
        type : Boolean,
        value : false
      },
      mediaList : {
        type : Array,
        value : () => []
      },
    }
  }

  constructor() {
    super();
    this.active = true;

    window.addEventListener('resize', () => this._resize());
    window.addEventListener('touchend', (e) => this._onTouchEnd(e));
    window.addEventListener('touchcancel', (e) => this._onTouchEnd(e));
    window.addEventListener('touchmove', (e) => this._onTouchMove(e));
    this.addEventListener('touchstart', (e) => this._onTouchStart(e));
  }

  connectedCallback() {
    super.connectedCallback();
    this._resize();
  }

  /**
   * @method _onTouchEnd
   * @description bound to window touch end/cancel events. if we are
   * performing a touch (swipe) action, see if we have reached the 
   * threshold for swipe and if so, page left/right
   *  
   * @param {Object} e HTML touch event
   */
  _onTouchEnd(e) {
    if( !this.touchAction ) return;
    this.touchAction = false;

    let diff = this.touchStartX - this.touchCurrentX;
    let sdiff = Math.abs(diff);

    if( sdiff > this.totalThumbnailWidth / 2 ) {
      if( diff < 0 ) this._pageLeft();
      else this._pageRight();
    }
  }

  /**
   * @method _onTouchMove
   * @description bound to windows touch move event. if we are performing 
   * a touch (swipe) action, need to keep track of current x offset
   * 
   * @param {Object} e HTML touch event
   */
  _onTouchMove(e) {
    if( !this.touchAction ) return;
    this.touchCurrentX = e.touches[0].clientX;
  }

  /**
   * @method _onTouchStart
   * @description bound to this elements touchstart event.
   * start performing a touch (swipe) action
   * 
   * @param {Object} e HTML touch event
   */
  _onTouchStart(e) {
    this.touchAction = true;
    this.touchStartX = e.touches[0].clientX;
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

    let iconsWidth;
    if( this.breakControls ) {
      iconsWidth = this.iconWidth * 2;
    } else {
      iconsWidth = this.iconWidth * 4;
      if( this.isLightbox ) iconsWidth += this.iconWidth * 2;
    }

    //let availableThumbSpace = Math.min(w - iconsWidth, 512);
    //this.thumbnailsPerFrame = Math.max(Math.floor(availableThumbSpace / this.totalThumbnailWidth), 1);
   
    //this.showNavLeft = (this.leftMostThumbnail !== 0);
    //this.showNavRight = !this._showingLastThumbFrame();

    this._updateThumbnailContainerPos();
  }

  _getTotalIconWidth() {
    let totalIconWidth = this.iconWidth * 4; // nav icons and default icons
    if( this.isLightbox ) totalIconWidth += this.iconWidth * 2;
    return totalIconWidth;
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
    if( this.leftMostThumbnail + this.thumbnailsPerFrame > this.thumbnails.length-1 ) {
      return true;
    }
    return false;
  }

  _updateThumbnailContainerPos() {
    // that +1 is a hack, what am I missing !?
    this.$.thumbnailInnerContainer.style.marginLeft = (-1 * this.leftMostThumbnail * (this.totalThumbnailWidth + 1)) + 'px';

    let lastThumb = this.leftMostThumbnail + this.thumbnailsPerFrame;
    this.thumbnails.forEach((thumbnail, index) => {
      this.set(`thumbnails.${index}.disabled`, (index < this.leftMostThumbnail || index >= lastThumb));
    });
  }

  /**
   * @method _onSelectedRecordUpdate
   * @description from AppStateInterface, called when a record is selected
   * 
   * @param {Object} record selected record
   */
  _onSelectedRecordUpdate(record) {
    //console.log("app-media-viewer-nav(record) ", record);
    this.zoomButton1 = this.shadowRoot.getElementById('zoomIn1');
    this.zoomButton3 = this.shadowRoot.getElementById('zoomIn3');

    if (!record.media.imageList) {
      this.singleImage = true;
    }

    // If only a single video item, display compacted nav bar
    // Otherwise display full bar.
    if (record.media.video) {
      this.zoomButton1.style.display = 'none';
      this.zoomButton3.style.display = 'none';
      this.classList.add('video');
    } else {
      this.zoomButton1.style.display = 'inline-block';
      this.zoomButton3.style.display = 'inline-block';
      this.classList.remove('video');
    }
    
    if (utils.countMediaItems(record.media) === 1) return;
    this.mediaList = utils.flattenMediaList(record.media);
    this.mediaList = utils.organizeMediaList(this.mediaList);

    this.thumbnails = this.mediaList.map(record => {
      let _file = '';
      let fileType   = _file;
      let fileFormat = _file;
      let iconType   = '';

      if (record.fileFormat || record.encodingFormat) {
        _file = (record.fileFormat ? record.fileFormat : record.encodingFormat);
        fileType   = _file.split('/').shift();
        fileFormat = _file.split('/').pop();

        if (fileType === 'audio') iconType = 'sound-round';
        if (fileType === 'video') iconType = 'video-round';
        if (fileFormat === 'pdf') iconType = 'blank-round';
        // TODO: Get back to this
        if (fileType === '360')   iconType = '360-round';
      }
      
      let url = (record.image ? record.image.url : false)
      let thumbnail = {
        id: record['@id'],
        icon: iconType,
        position: record.position,
        selected: false,
        disabled: true,
        src: url,
        thumbnail: url
      }

      return thumbnail;
    });

    // TODO: Filtering out the text based files for now until we get the PDF/text viewer set up correctly
    this.thumbnails = this.thumbnails.filter(element => element.icon !== 'blank-round');

    this.singleImage = (this.thumbnails.length !== 0 && this.thumbnails.length > 1) ? false : true;
    this._resize();

    if( this.singleImage ) this.classList.add('single');
    else this.classList.remove('single');
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
      this.set(`thumbnails.${index}.selected`, (this.media['@id'] === thumbnail.id));
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
    let media = this.mediaList.find(item => item['@id'] === id);
    this._setSelectedRecordMedia(media);
  }

  /**
   * @method _onZoomInClicked
   * @description bound to zoom icon click event.  emit zoom event
   * 
   * @param {Object} e HTML click event
   */
  _onZoomInClicked(e) {
    this.dispatchEvent(new CustomEvent('zoom-in'));
  }

  /**
   * @method _onZoomOutClicked
   * @description bound to zoom icon click event.  emit zoom event
   * 
   * @param {Object} e HTML click event
   */
  _onZoomOutClicked(e) {
    this.dispatchEvent(new CustomEvent('zoom-out'));
  }

  /**
   * @method _onCloseClicked
   * @description bound to close icon click event.  emit close event
   * 
   * @param {Object} e HTML click event
   */
  _onCloseClicked(e) {
    this.dispatchEvent(new CustomEvent('close'));
  }

  /**
   * @method setFocus
   * @description set focus to first clickable element
   */
  setFocus() {
    if( this.singleImage ) {
      if( !this.breakControls ) this.$.zoomOut1.focus();
      else this.$.zoomOut2.focus();
    } else {
      let firstBtn = this.shadowRoot.querySelector('button');
      if( firstBtn ) firstBtn.focus();
    }
    window.scrollTo(0,0);
  }
}

customElements.define('app-media-viewer-nav', AppMediaViewerNav);