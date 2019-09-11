import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        display: block;
        /* position: relative; */
        box-sizing: border-box;
        background: black;
      }
    </style>

    <app-image-viewer-lightbox id="lightbox"></app-image-viewer-lightbox>

    <app-image-viewer id="viewerImg"></app-image-viewer>
    <app-360-image-viewer id="viewer360"></app-360-image-viewer>
    <app-video-viewer id="viewerVid"></app-video-viewer>

    <app-image-viewer-nav on-zoom-in="_onZoomIn"></app-image-viewer-nav>
  `
}