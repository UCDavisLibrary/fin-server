import { html } from 'lit';

import { sharedStyles } from '../../../styles/shared-styles';

export default function render() { 
  return html`

<style include="shared-styles">
  ${sharedStyles}

  [hidden] {
    display: none;
  }
  
  :host {
    display: none;
    position: absolute;
    z-index: 1000;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: white;    
    animation: show 350ms ease-out;
  }

  :host #nav.single {
    padding: 10px;
    background-color: transparent;
  }

  @keyframes show {
    from {
      /* top: -100vh; */
      opacity: 0.5;
      transform: scale(1.3);
    }
    to {
      /* top: 0; */
      opacity: 1;
      transform: scale(1);
    }
  }

  #viewer { 
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
  }

  paper-spinner-lite {
    --paper-spinner-color: var(--default-secondary-color);
  }
  
  .spinner-layout {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #nav {
    z-index: 2000;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  #close {
    z-index: 2000;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
  }

  #close ucdlib-icon {
    fill: var(--color-aggie-blue-80);
    margin: auto;
    height: 36px;
    padding-top: 7px;
  }

  #close:hover {
    background-color: var(--color-aggie-blue-80);
    cursor: pointer;
  }

  #close:hover ucdlib-icon {
    fill: var(--color-aggie-gold);
  }
</style>

<!-- make sure background is blacked out... iOS hack -->
<div id="safeCover" style="display:none;position:absolute;z-index:999;top:0;left:0;width:100vw;height:100vh;background-color:white;"></div>

<div id="viewer" ?hidden="${this.loading}"></div>
<div class="spinner-layout" ?hidden="${!this.loading}">
  <paper-spinner-lite ?active="${this.loading}"></paper-spinner-lite>
</div>

<div id="close">
  <ucdlib-icon icon="ucdlib-dams:fa-xmark" @click="${this._onCloseClicked}"></ucdlib-icon>
</div>   

<app-media-viewer-nav 
  id="nav"
  is-lightbox
  @zoom-in="${this._onZoomInClicked}"
  @zoom-out="${this._onZoomOutClicked}">
</app-media-viewer-nav>

`;}