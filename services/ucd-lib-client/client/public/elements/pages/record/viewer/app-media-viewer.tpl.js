import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        display: block;
      }
    </style>

    <app-image-viewer id="viewer" hidden$="[[isVideo]]"></app-image-viewer>
    <app-360-image-viewer id="viewer360" hidden$="[[isVideo]]"></app-360-image-viewer>
    <app-video-viewer id="videoViewer" hidden$="[[!isVideo]]"></app-video-viewer>

    <app-image-viewer-lightbox id="lightbox"></app-image-viewer-lightbox>
    <app-image-viewer-nav id="nav" on-zoom-in="_onZoomIn"></app-image-viewer-nav>
  `
}