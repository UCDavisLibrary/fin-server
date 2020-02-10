import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
        background: black;
      }

      .wrapper {
        /* display: flex; */
        /* flex-direction: column; */
        /* min-height:250px; */
      }

      iron-pages {
        /* flex: 1; */
        min-height: 250px;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    </style>

    <div class="wrapper">
      <app-image-viewer-lightbox id="lightbox"></app-image-viewer-lightbox>

      <iron-pages selected="${this.mediaType}" attr-for-selected="id" selected-attribute="visible">
        <!-- <app-360-image-viewer id="360"></app-360-image-viewer> -->
        <app-image-viewer id="image"></app-image-viewer>
        <app-video-viewer id="video"></app-video-viewer>
        <app-audio-viewer id="audio"></app-audio-viewer>
      </iron-pages>

      <app-media-viewer-nav @zoom-in="${this._onZoomIn}"></app-media-viewer-nav>
    </div>
  `
}