import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        display: block;
        background: black;
      }

      #nav-bottom {
        position: relative;
      }
    </style>

    <app-image-viewer-lightbox id="lightbox"></app-image-viewer-lightbox>

    <app-image-viewer id="viewerImg"></app-image-viewer>
    <app-360-image-viewer id="viewer360"></app-360-image-viewer>
    <app-video-viewer id="viewerVid"></app-video-viewer>

    <app-image-viewer-nav id="nav-bottom" on-zoom-in="_onZoomIn"></app-image-viewer-nav>
  `
}