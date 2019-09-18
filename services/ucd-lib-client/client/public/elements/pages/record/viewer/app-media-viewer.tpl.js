import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        background: black;
      }

      /*
      app-video-viewer {
        position: relative;
      }

      .video {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      */

      .positionRelative {
        position: relative;
      }
    </style>
    <div id="wrapper">
      <app-image-viewer-lightbox id="lightbox"></app-image-viewer-lightbox>
    
      <iron-pages selected="${this.isMediaType}" attr-for-selected="id" selected-attribute="visible">
        <app-360-image-viewer id="360"></app-360-image-viewer>
        <app-image-viewer id="image"></app-image-viewer>
        <app-video-viewer id="video"></app-video-viewer>
        <app-audio-viewer id="audio"></app-audio-viewer>
      </iron-pages>

      <app-media-viewer-nav on-zoom-in="_onZoomIn"></app-media-viewer-nav>
    </div>
  `
}