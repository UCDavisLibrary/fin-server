import { html } from 'lit';

import { sharedStyles } from '../styles/shared-styles';

export default function render() { 
  return html`

<style include="shared-styles">
  ${sharedStyles}

  :host {
    display: inline-block;
    position: relative;
    width: 48px;
    height: 48px;
  }

  [hidden] { display: none !important; }

  #popup {
    display: block;
    z-index: 5;
    background: var(--color-aggie-blue-30);
    padding: 10px;
    position: absolute;
    bottom: 70px;
    right: -20px;
    min-width: 200px;
  }

  /* #popup::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 150%;
    left: 0;
    top: 0;
    z-index: -1;
    border: 1px solid green;    
  } */

  .layout {
    display: flex;
    justify-content: center;
  }

  input {
    font-size: var(--fs-p);
    padding: 0 0 0 5px;
    display: block;
    border: none;
    height: 38px;
    outline: none;
  }

  #link {
    width: 100%;
    border-top: 1px solid var(--medium-background-color);
    border-left: 1px solid var(--medium-background-color);
    border-bottom: 1px solid var(--medium-background-color);
    box-sizing: border-box;
  }

  .social {
    margin: 8px;
    display: inline-block;
    cursor: pointer;
    height: 40px;
    width: 40px;
    border: 2px solid transparent;
    outline: none;
  }
  .social:focus {
    border: var(--default-outline);
    border-radius: 20px;
  }

  .copyButton {
    white-space: nowrap;
    height: 38px;
    text-transform: uppercase;
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    background-color: var(--default-secondary-color);
    color: var(--default-primary-color);
    border-radius: 0;
    border: none;
    cursor: pointer;
    padding: 0 5px;
  }
  .copyButton[active] {
    text-align: center;
    background-color: var(--default-primary-color);
    color: var(--default-secondary-color);
  }
  .copyButton[active] span {
    display: none;
  }

  #main {
    color: var(--default-secondary-color);
  }

  .arrow-down {
    position: absolute;
    width: 0; 
    height: 0; 
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 20px solid var(--color-aggie-blue-30);
    bottom: -20px;
    right: 27px;
  }

  paper-icon-button:focus {
    border-radius: 0 !important;
  }

  ucdlib-icon {
    fill: white;
    width: 25px;
    height: 50px;
    margin: auto;
    cursor: pointer;
  }

  .icon {
    text-align: center;
    margin: .5rem;
  }

  .icon ucdlib-icon {
    /* width: 37px; */
    height: 60px;
  }

  .circle {
    /* background-color: orange; */
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin: auto;
    cursor: pointer;
  }

  .circle.copy {
    background-color: var(--color-aggie-gold);
  }
  .circle.facebook {
    background-color: #3b5998;
  }
  .circle.twitter {
    background-color: #55acee;
  }
  .circle.pinterest {
    background-color: #cb2027;
  }

  .icon span {
    font-size: .7rem;
  }
</style>

<div id="popup" ?hidden="${!this.visible}">
  <div class="layout">
      <div class="icon">
        <div class="circle copy"
          @click="${this._onCopyLink}">
          <ucdlib-icon icon="ucdlib-dams:fa-link"></ucdlib-icon>
        </div>
        <span>Copy Link</span>
      </div>

      <div class="icon">
        <div class="circle facebook" id="facebook"
          @click="${this._onSocialIconClick}">
          <ucdlib-icon icon="ucdlib-dams:fa-facebook-f"></ucdlib-icon>
        </div>
      <span>Facebook</span>
    </div>

    <div class="icon">
        <div class="circle twitter" id="twitter"
          @click="${this._onSocialIconClick}">
          <ucdlib-icon icon="ucdlib-dams:fa-twitter"></ucdlib-icon>
        </div>
      <span>Twitter</span>
    </div>
    <div class="icon">
      <div class="circle pinterest" id="pinterest"
        @click="${this._onSocialIconClick}">
        <ucdlib-icon icon="ucdlib-dams:fa-pinterest-p"></ucdlib-icon>
      </div>
      <span>Pinterest</span>
    </div>
  </div>
  <div class="arrow-down"></div>
</div>

<ucdlib-icon 
  icon="ucdlib-dams:fa-share" 
  @click="${this._onShareSelected}">
</ucdlib-icon>

`;}