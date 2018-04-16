import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-share-btn.html"

import AppStateInterface from "../interfaces/AppStateInterface"

const BASE_SHARE_LINKS = {
  facebook : 'https://www.facebook.com/sharer/sharer.php?u=',
  google : 'https://plus.google.com/share?url=',
  twitter : 'https://twitter.com/home?status=',
  // pinterest can also add ?media and ?description
  pinterest : 'https://pinterest.com/pin/create/button/?url='
}

export default class AppShareBtn extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface) {

  static get template() {
    return template;
  }

  static get properties() {
    return {
      visible : {
        type : Boolean,
        value : false
      }
    }
  }

  ready() {
    super.ready();

    // handle outside clicks
    window.addEventListener('click', () => {
      if( this.visible ) this.hide();
    });

    this.$.popup.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }

  _onAppStateUpdate() {
    this.$.link.value = window.location.href;
  }

  /**
   * @method hide
   * @description hide popup
   */
  hide() {
    this.visible = false;
    this.$.popup.style.display = 'none';
  }

  /**
   * @method _onBtnClicked
   * @description bound to main icon, toggles popup when clicked
   * 
   * @param {Object} e HTML click event
   */
  _onBtnClicked(e) {
    this.visible = !this.visible;
    this.$.popup.style.display = this.visible ? 'block' : 'none';
    e.preventDefault();
    e.stopPropagation();
  }

  /**
   * @method _onSocialIconClick
   * @description bound to social icon buttons.  Called when one os clicked
   * 
   * @param {Object} e HTML click event 
   */
  _onSocialIconClick(e) {
    let id = e.currentTarget.id;
    let url = BASE_SHARE_LINKS[id]+encodeURIComponent(window.location.href);
    window.open(url, '_blank', 'height=400,width=500');
  }

  /**
   * @method _copyLink
   * @description bound to click event on button.  Copy text to clipboard
   * show UI interaction.
   */
  _copyLink() {
    this.$.link.select();
    document.execCommand("Copy");

    this.$.copyIcon.icon = 'check';
    this.$.copyButton.setAttribute('active', 'active');

    setTimeout(() => {
      this.$.copyIcon.icon = 'content-copy';
      this.$.copyButton.removeAttribute('active', 'active');
    }, 3000);
  }

}

customElements.define('app-share-btn', AppShareBtn);