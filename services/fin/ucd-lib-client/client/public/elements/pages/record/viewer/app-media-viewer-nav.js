import { LitElement } from 'lit';
import render from "./app-media-viewer-nav.tpl.js"

// import "@polymer/paper-icon-button"
import "../../../utils/app-share-btn"
import utils from "../../../../lib/utils"
import "@ucd-lib/theme-elements/ucdlib/ucdlib-icon/ucdlib-icon";
import '../../../utils/app-icons';


export default class AppMediaViewerNav extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      totalThumbnailWidth : { type : Number }, // thumbnail width w/ border and margin
      icon: { type: String },
      iconWidth : { type : Number },
      thumbnails : { type : Array },
      thumbnailsPerFrame : { type : Number },
      leftMostThumbnail : { type : Number },
      breakControls : { type : Boolean },
      showNavLeft : { type : Boolean },
      showNavRight : { type : Boolean },
      isLightbox : { attribute: 'is-lightbox', type : Boolean },
      singleImage : { type : Boolean },
      mediaList : { type : Array },
      showOpenLightbox : { type : Boolean },
      searchingText : { type : Boolean }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;

    this.totalThumbnailWidth = 64;
    this.icon = '';
    this.iconWidth = 40;
    
    this.thumbnails = [{},{},{},{},{},{},{},{}];

    this.thumbnailsPerFrame = 10;
    this.leftMostThumbnail = 0;
    this.breakControls = true;
    this.showNavLeft = false;
    this.showNavRight = false;
    this.isLightbox = false;
    this.singleImage = false;
    this.mediaList = [];
    this.showOpenLightbox = false;
    this.searchingText = false;

    window.addEventListener('resize', () => this._resize());
    window.addEventListener('touchend', (e) => this._onTouchEnd(e));
    window.addEventListener('touchcancel', (e) => this._onTouchEnd(e));
    window.addEventListener('touchmove', (e) => this._onTouchMove(e));
    this.addEventListener('touchstart', (e) => this._onTouchStart(e));

    this._injectModel('AppStateModel', 'MediaModel', 'RecordVcModel');
  }

  connectedCallback() {
    super.connectedCallback();
    this._resize();
  }

  async firstUpdated() {
    let selectedRecord = await this.AppStateModel.getSelectedRecord();
    if( selectedRecord ) {
      this._onSelectedRecordUpdate(selectedRecord);
      let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
      if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
    }
  }

  _onAppStateUpdate(e) {
    if( e.mediaViewerNavLeftMostThumbnail === undefined ) return;
    if( e.mediaViewerNavLeftMostThumbnail === this.leftMostThumbnail ) return;
    this.leftMostThumbnail = e.mediaViewerNavLeftMostThumbnail;
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
    this.touchCurrentX = e.touches[0].clientX;
  }

  /**
   * @method _resize
   * @description update thumbnail preview on resize
   * 
   */
  _resize() {
    // let w = this.offsetWidth;
    let w = window.innerWidth;
    
    // grrrr
    if( w === 0 ) {
      // console.log('Ignoreing resize')
      // setTimeout(() => this._resize(), 200);
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

    let availableThumbSpace = Math.min(w - iconsWidth, w * .42);
    this.thumbnailsPerFrame = Math.max(Math.floor(availableThumbSpace / this.totalThumbnailWidth), 1);
    if( this.isLightbox ) this.thumbnailsPerFrame *= 2;
    let thumbnailContainer = this.shadowRoot.querySelector('#thumbnails');
    if( !thumbnailContainer ) return;
    
    thumbnailContainer.style.width = (this.thumbnailsPerFrame * this.totalThumbnailWidth)+'px';

    this.showNavLeft = (this.leftMostThumbnail !== 0);
    this.showNavRight = !this._showingLastThumbFrame();

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
    this.AppStateModel.set({mediaViewerNavLeftMostThumbnail: this.leftMostThumbnail});
  }

  _pageRight() {
    if( this._showingLastThumbFrame() ) return;
    this.leftMostThumbnail = this.leftMostThumbnail + this.thumbnailsPerFrame;
    this._resize();
    this.AppStateModel.set({mediaViewerNavLeftMostThumbnail: this.leftMostThumbnail});
  }

  _showingLastThumbFrame() {
    if( this.leftMostThumbnail + this.thumbnailsPerFrame > this.thumbnails.length-1 ) {
      return true;
    }
    return false;
  }

  _updateThumbnailContainerPos() {
    // that +1 is a hack, what am I missing !?
    this.shadowRoot.querySelector('#thumbnailInnerContainer').style.marginLeft = (-1 * this.leftMostThumbnail * (this.totalThumbnailWidth + 1)) + 'px';

    let lastThumb = this.leftMostThumbnail + this.thumbnailsPerFrame;
    this.thumbnails.forEach((thumbnail, index) => {
      // thumbnail.disabled = (index < this.leftMostThumbnail || index >= lastThumb);
    });
  }

  /**
   * @method _onSelectedRecordUpdate
   * @description from AppStateInterface, called when a record is selected
   * 
   * @param {Object} record selected record
   */
  _onSelectedRecordUpdate(record) {
    this.leftMostThumbnail = 0;
    // if( !record ) {
    //   this.singleImage = true;
    //   return;
    // }

    // sort thumbnails, and add each mediaGroup into mediaList
    let mediaList = [];
    record.clientMedia.mediaGroups.forEach(mg => {
      let nodes = mg.display.hasPart.map(item => record.index[item['@id']]);
      mediaList.push(...utils.organizeMediaList(nodes));
    });
    this.mediaList = mediaList;
    
    // if (this.mediaList.length === 1) {
    //   this.singleImage = true;
    //   return;
    // }
    // this.mediaList = utils.flattenMediaList(record.media);
    // this.mediaList = utils.organizeMediaList(this.mediaList);

    this.thumbnails = this.mediaList.map(media => {
      let {fileType, iconType} = this._getFileAndIconType(media);

      if( this.isLightbox && fileType !== 'image' ) {
        return null;
      }

      let thumbnailUrl = media.thumbnailUrl;
      if( thumbnailUrl && !thumbnailUrl.match(/\/svc:iiif\//) ) {
        thumbnailUrl += '/svc:iiif/full/,50/0/default.jpg';
      }

      let thumbnail = {
        id: media['@id'],
        icon: iconType,
        position: media.position,
        selected: false,
        disabled: false,
        src: thumbnailUrl 
        // thumbnail: url
      }

      return thumbnail;
    })
    .filter(item => item ? true : false)
    // TODO: Filtering out the text based files for now until we get the PDF/text viewer set up correctly
    .filter(element => element.icon !== 'blank-round');

    this.singleImage = (this.thumbnails.length !== 0 && this.thumbnails.length > 1) ? false : true;
    this._resize();

    this.AppStateModel.set({mediaViewerNavLeftMostThumbnail: 0});
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    this.media = media;
    if( !media ) return;

    this.thumbnails.forEach((thumbnail, index) => {
      // this.set(`thumbnails.${index}.selected`, (this.media['@id'] === thumbnail.id));
    });

    let {fileType, iconType} = this._getFileAndIconType(media);
    
    this.showOpenLightbox = (fileType === 'image') ? true : false;
  }

  _getFileAndIconType(media) {
    let _file = '';
    let fileType   = _file;
    let fileFormat = _file;
    let iconType   = '';

    if (media.fileFormat || media.encodingFormat) {
      _file = (media.fileFormat ? media.fileFormat : media.encodingFormat);

      
      fileType   = _file.split('/').shift();
      fileFormat = _file.split('/').pop();
    }

    let type = utils.getMediaType(media);
    if (type === 'AudioObject' || fileType === 'audio') iconType = 'sound-round';
    else if (type === 'VideoObject' || type === 'StreamingVideo' || fileType === 'video') iconType = 'video-round';
    else if (fileFormat === 'pdf') iconType = 'blank-round';
    // TODO: Get back to this
    else if (fileType === '360')   iconType = '360-round';

    return {fileType, iconType};
  }

  /**
   * @method _onThumbnailClicked
   * @description bound to thumbnail click event.  select a media object
   * 
   * @param {Object} e HTML click event
   */
  _onThumbnailClicked(e) {
    this.shadowRoot.querySelectorAll('#thumbnailInnerContainer > button').forEach(btn => btn.removeAttribute('selected'));
    e.currentTarget.setAttribute('selected', '');
    let id = e.currentTarget.getAttribute('media-id');
    this.AppStateModel.setLocation(id);
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
   * @method _onSearchClicked
   * @description bound to search icon click event
   * 
   * @param {Object} e HTML click event
   */
  _onSearchClicked(e) {
    this.searchingText = !this.searchingText;
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