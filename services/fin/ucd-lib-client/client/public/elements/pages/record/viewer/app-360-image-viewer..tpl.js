import { html } from 'lit';

export default function render() {
return html`
  <style include="shared-styles">
    :host {
      display: block;
      background: black;
      text-align: center;
    }

    cork-360-image-viewer {
      padding: 10px;
    }
  </style>

  <cork-360-image-viewer id="viewer" spin-fps="4"></cork-360-image-viewer>
`;}