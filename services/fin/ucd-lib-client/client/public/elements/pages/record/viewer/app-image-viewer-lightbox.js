import {PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-image-viewer-lightbox.html"

import "@polymer/paper-spinner/paper-spinner-lite"
import "leaflet"
import leafletCss from "leaflet/dist/leaflet.css"

import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"
import config from "../../../../lib/config"

export default class AppImageViewer extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, MediaInterface) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = `<style>${leafletCss}</style>${template}`;
    return tag;
  }

  properties() {
    return {
      bounds : {
        type : Array,
        value : null
      },
      maxImageSize : {
        type : Number,
        value : 2048
      },
      media : {
        type : Object,
        value : () => {}
      },
      visible : {
        type : Boolean,
        value : false
      },
      loading : {
        type : Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;

    window.addEventListener('keyup', (e) => {
      if( this.visible && e.which === 27 ) this.hide();
    });
  }

  async ready() {
    super.ready();
    
    this.parentElement.removeChild(this);
    document.body.appendChild(this);

    this.shadowRoot.removeChild(this.$.safeCover);
    document.body.appendChild(this.$.safeCover);

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
    if( this.visible ) this.render();
  }

  /**
   * @method show
   */
  async show() {
    this.visible = true;
    this.style.display = 'block';
    this.$.safeCover.style.display = 'block';

    document.querySelector('fin-app').style.display = 'none';
    document.body.style.overflow = 'hidden';
    window.scrollTo(0,0);

    this.render();

    setTimeout(() => {
      this.$.nav._resize();
      this.$.nav.setFocus();
    }, 25);
  }

  /**
   * @method hide
   */
  async hide() {
    this.visible = false;
    this.style.display = 'none';
    this.$.safeCover.style.display = 'none';
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
   * @method render
   * @description render leaflet canvas based on fedora id
   * 
   */
  async render() {
    if( this.renderedMedia === this.media ) return;

    this.renderedMedia = this.media;
    let id = this.renderedMedia['@id'];
    if ( this.renderedMedia.associatedMedia && this.renderedMedia.media.imageList ) {
      id = this.renderedMedia.image.url;
    }
    
    let url = this._getImgUrl(id, '', '');

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
      this.viewer = L.map(this.$.viewer, {
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