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

  ready() {
    super.ready();
    
    // TODO: Have Justin review these.  No longer necessary using Lit?
    //this.parentNode.removeChild(this);
    //document.body.appendChild(this);

    this.shadowRoot.removeChild(this.$.safeCover);
    document.body.appendChild(this.$.safeCover);

    this.mainApp = document.querySelector('fin-app');
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
    this.visible = true;
    window.scrollTo(0,0);
    this.$.safeCover.style.display = 'block';

    // TODO: Justin Review
    //this.mainApp.style.display = 'none';

    setTimeout(() => this.$.nav.setFocus(), 0);
  }

  /**
   * @method hide
   */
  async hide() {
    this.style.display = 'none';
    this.$.safeCover.style.display = 'none';
    document.body.style.overflow = 'auto';
    this.visible = false;

    // TODO: Justin Review
    //this.mainApp.style.display = 'block';
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

    let height = this.media.image.height;
    let width = this.media.image.width;

    let url = this._getImgUrl(this.media['@id'], '', '');

    if( this.viewer ) this.viewer.remove();

    this.$.safeCover.style.border = "10px solid red";
    
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