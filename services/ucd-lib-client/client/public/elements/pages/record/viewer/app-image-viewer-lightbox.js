import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-image-viewer-lightbox.html"

import "@polymer/paper-spinner/paper-spinner-lite"
import leaflet from "leaflet"
import leafletCss from "leaflet/dist/leaflet.css"

import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"

export default class AppImageViewer extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, MediaInterface) {

  static get template() {
    return `<style>${leafletCss}</style>
            ${template}`;
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
  }

  ready() {
    super.ready();
    this.parentNode.removeChild(this);
    document.body.appendChild(this);
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
    this.style.display = 'block';
    this.render();
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.width= '100vw';
    this.visible = true;
  }

  /**
   * @method hide
   */
  async hide() {
    this.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.height = '';
    document.body.style.width= '';
    this.visible = false;
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
    this.loading = true;

    return new Promise((resolve, reject) => {
      var img = new Image();
      img.onload = () => {
        let res = [img.naturalHeight, img.naturalWidth];
        this.bounds = [[0,0], res];
        this.loading = false;
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

    let height = this.media.height;
    let width = this.media.width;
    if( this.media.height > this.media.width ) {
      if( this.media.height > this.maxImageSize ) {
        let scale = this.maxImageSize / this.media.height;
        height = Math.floor(this.media.height * scale);
        width = '';
      }
    } else {
      if( this.media.width > this.maxImageSize ) {
        let scale = this.maxImageSize / this.media.width;
        width = Math.floor(this.media.width * scale);
        height = '';
      }
    }

    let url = this._getImgUrl(this.media.id, width, height);

    if( this.viewer ) this.viewer.remove();

    await this._loadImage(url);

    this.viewer = L.map(this.$.viewer, {
      crs: L.CRS.Simple,
      minZoom: -4,
      // dragging :  !L.Browser.mobile,
      // scrollWheelZoom : false,
      // touchZoom : true,
      zoomControl : false
    });

    L.imageOverlay(url, this.bounds).addTo(this.viewer);
    this.viewer.fitBounds(this.bounds);

    this.shadowRoot.querySelector('.leaflet-control-attribution').style.display = 'none';
  }

  /**
   * @method _onCloseClicked
   * @description bound to view nav close event
   */
  _onCloseClicked() {
    this.hide();
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