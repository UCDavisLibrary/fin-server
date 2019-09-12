import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        background: black;
      }
    </style>

    <app-image-viewer-lightbox id="lightbox"></app-image-viewer-lightbox>
    
    <iron-pages selected="${this.mediaType}" attr-for-selected="id" selected-attribute="visible">
      <app-360-image-viewer id="360"></app-360-image-viewer>
      <app-image-viewer id="image"></app-image-viewer>
      <app-video-viewer id="video"></app-video-viewer>
    </iron-pages>

    <app-image-viewer-nav on-zoom-in="_onZoomIn"></app-image-viewer-nav>
  `
}