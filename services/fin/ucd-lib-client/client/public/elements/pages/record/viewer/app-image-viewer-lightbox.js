import { LitElement} from 'lit';
import render from "./app-image-viewer-lightbox.tpl.js"

import "@polymer/paper-spinner/paper-spinner-lite"
import "leaflet"

export default class AppImageViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {

  properties() {
    return {
      bounds : { type : Array },
      maxImageSize : { type : Number },
      media : { type : Object },
      visible : { type : Boolean },
      loading : { type : Boolean }
    }
  }

  constructor() {
    super();
    this.active = true;
    this.render = render.bind(this);

    this.bounds = null;
    this.maxImageSize = 2048;
    this.media = {};
    this.visible = false;
    this.loading = false;

    window.addEventListener('keyup', (e) => {
      if( this.visible && e.which === 27 ) this.hide();
    });

    this._injectModel('AppStateModel', 'MediaModel');
  }

  async firstUpdated() {
    this.parentElement.removeChild(this);
    document.body.appendChild(this);

    const safeCoverNode = this.shadowRoot.querySelector('#safeCover');
    if( safeCoverNode ) {
      this.shadowRoot.removeChild(safeCoverNode);
      document.body.appendChild(safeCoverNode);
    }

    let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
    if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   */
  _onAppStateUpdate(e) {
    if( e.showLightbox && !this.visible ) {
      this.show();
    } else if( !e.showLightbox && this.visible ) {
      this.hide();
    }
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    this.media = media;
    if( this.visible ) this.renderCanvas();
  }

  /**
   * @method show
   */
  async show() {
    debugger;
    this.visible = true;
    this.style.display = 'block';
    // this.shadowRoot.querySelector('#safeCover').style.display = 'block';

    document.querySelector('fin-app').style.display = 'none';
    document.body.style.overflow = 'hidden';
    window.scrollTo(0,0);

    this.renderCanvas();

    setTimeout(() => {
      this.shadowRoot.querySelector('#nav')._resize();
      this.shadowRoot.querySelector('#nav').setFocus();
    }, 25);
  }

  /**
   * @method hide
   */
  async hide() {
    this.visible = false;
    this.AppStateModel.set({showLightbox: false});
    this.style.display = 'none';
    // this.shadowRoot.querySelector('#safeCover').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.querySelector('fin-app').style.display = 'block';
  }

  /**
   * @method _loadImage
   * @description preload image and set bounds to image dimensions
   * 
   * @param {String} url url of image to load
   * 
   * @returns {Promise} resolves when image is loaded and bounds array has been set
   */
   _loadImage(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();

      img.onload = () => {
        let res = [img.naturalHeight, img.naturalWidth];
        this.bounds = [[0,0], res];
        resolve();
      };

      img.src = url;
    });
  }

  /**
   * @method renderCanvas
   * @description render leaflet canvas based on fedora id
   * 
   */
  async renderCanvas() {
    if( this.renderedMedia === this.media ) return;
    this.renderedMedia = this.media;
    let id = this.renderedMedia['@id'];
    // if ( this.renderedMedia.associatedMedia && this.renderedMedia.media.imageList ) {
    //   id = this.renderedMedia.image.url;
    // }
    
    let url = this.MediaModel.getImgUrl(id, '', '');
    // let url = this.media.thumbnailUrl; 

    // used to check state below
    this.loadingUrl = url;

    this.loading = true;
    if( this.imageOverlay ) {
      this.renderedUrl = '';
      this.viewer.removeLayer(this.imageOverlay);
      this.imageOverlay = null;
    }

    await this._loadImage(url);

    // check that we 
    //  - didn't have a new request that took longer than an old request
    //  - that we didn't already render this url
    if( url !== this.loadingUrl ) return;
    if( url === this.renderedUrl ) return;

    this.renderedUrl = url;

    this.loading = false;

    if( !this.viewer ) {
      this.viewer = L.map(this.shadowRoot.querySelector('#viewer'), {
        crs: L.CRS.Simple,
        minZoom: -4,
        zoomControl : false
      });
    }

    this.imageOverlay = L.imageOverlay(url, this.bounds).addTo(this.viewer);
    this.viewer.fitBounds(this.bounds);

    this.shadowRoot.querySelector('.leaflet-control-attribution').style.display = 'none';
  }

  /**
   * @method _onCloseClicked
   * @description bound to view nav close event
   */
  _onCloseClicked() {
    // this.showLightbox = false;
    this.AppStateModel.set({showLightbox: false});
  }

  /**
   * @method _onZoomInClicked
   * @description bound to view nav zoom-in event
   */
  _onZoomInClicked() {
    this.viewer.zoomIn();
  }

  /**
   * @method _onZoomOutClicked
   * @description bound to view nav zoom-out event
   */
  _onZoomOutClicked() {
    this.viewer.zoomOut();
  }

}

customElements.define('app-image-viewer-lightbox', AppImageViewer);