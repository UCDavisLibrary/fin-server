import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-image-viewer.html"
import leaflet from "leaflet"
import leafletCss from "leaflet/dist/leaflet.css"

export default class AppImageViewer extends PolymerElement {

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
      formats : {
        type : Array,
        value : () => ['png', 'jpg', 'webp']
      }
    }
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
        this.dispatchEvent(new CustomEvent('resolution-resolved', {detail: res.slice(0)}));
        this.bounds = [[0,0], res];
        resolve();
      };
      img.src = url;
    });
  }

  async render(id) {
    let url = id+'/svc:iiif/full/full/0/default.png';
    if( this.currentUrl === url ) return;

    if( this.viewer ) this.viewer.remove();

    await this._loadImage(url);

    this.viewer = L.map(this.$.viewer, {
      crs: L.CRS.Simple,
      minZoom: -4,
      dragging :  !L.Browser.mobile,
      scrollWheelZoom : false,
      touchZoom : false
    });

    L.imageOverlay(url, this.bounds).addTo(this.viewer);
    this.viewer.fitBounds(this.bounds);

    // setTimeout(function(){
    //   this.viewer.zoomOut();
    // }.bind(this), 200);

    this.currentUrl = url;
  }

}

customElements.define('app-image-viewer', AppImageViewer);