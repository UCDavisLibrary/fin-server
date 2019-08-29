import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        display: block;
        background: black;
      }
    </style>

    <app-image-viewer-lightbox id="lightbox"></app-image-viewer-lightbox>

    <app-image-viewer-nav id="nav-top" .isVideo=${this.isVideo} on-zoom-in="_onZoomIn"></app-image-viewer-nav>

    <app-image-viewer id="viewer"></app-image-viewer>
    <app-360-image-viewer id="viewer360"></app-360-image-viewer>
    <app-video-viewer id="videoViewer"></app-video-viewer>

    <app-image-viewer-nav id="nav-bottom" .isVideo=${this.isVideo} on-zoom-in="_onZoomIn"></app-image-viewer-nav>
  `
}