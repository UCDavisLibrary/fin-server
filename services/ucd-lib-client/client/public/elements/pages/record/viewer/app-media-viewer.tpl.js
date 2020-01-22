import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        background: black;
        min-height: 250px;
      }

      .wrapper {
        position: relative;
        min-height: 250px;
        padding-bottom: 62px;
      }
      .wrapper[tall-controls] {
        padding-bottom: 102px;
      }

      app-media-viewer-nav {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
      }
    </style>
    <div class="wrapper" ?tall-controls="${this.tallControls}">
      <app-image-viewer-lightbox id="lightbox"></app-image-viewer-lightbox>
      <iron-pages selected="${this.mediaType}" attr-for-selected="id" selected-attribute="visible">
        <!-- <app-360-image-viewer id="360"></app-360-image-viewer> -->
        <app-image-viewer id="image"></app-image-viewer>
        <app-video-viewer id="video"></app-video-viewer>
        <app-audio-viewer id="audio"></app-audio-viewer>
      </iron-pages>

      <app-media-viewer-nav 
        @zoom-in="${this._onZoomIn}" 
        @break-controls-changed="${this._onControlLayoutChange}">
      </app-media-viewer-nav>
    </div>
  `
}