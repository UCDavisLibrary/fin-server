import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        border: 1px solid gold;
      }

      app-image-viewer-nav {
        margin-top: 20px;
      }
    </style>

    <app-image-viewer-lightbox id="lightbox"></app-image-viewer-lightbox>
    <app-image-viewer-nav on-zoom-in="_onZoomIn"></app-image-viewer-nav>

    <!-- Rename app-image-viewer-static => app-image-viewer -->
    <app-image-viewer-static id="viewerStatic" hidden$="[[isVideo]]"></app-image-viewer-static>
    <app-360-image-viewer id="viewer360" hidden$="[[isVideo]]"></app-360-image-viewer>
    <app-video-viewer id="videoViewer" hidden$="[[!isVideo]]"></app-video-viewer>
  `
}