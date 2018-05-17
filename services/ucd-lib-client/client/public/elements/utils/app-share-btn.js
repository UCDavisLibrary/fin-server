import {PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-share-btn.html"

import AppStateInterface from "../interfaces/AppStateInterface"
import MediaInterface from "../interfaces/MediaInterface"

const BASE_SHARE_LINKS = {
  facebook : 'https://www.facebook.com/sharer/sharer.php',
  google : 'https://plus.google.com/share',
  twitter : 'https://twitter.com/home',
  // pinterest can also add ?media and ?description
  pinterest : 'https://pinterest.com/pin/create/button/'
}

export default class AppShareBtn extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, MediaInterface) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      visible : {
        type : Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  ready() {
    super.ready();

    // handle outside clicks
    window.addEventListener('click', () => {
      if( this.visible ) this.hide();
    });
    this.addEventListener('keyup', (e) => {
      if( this.visible && e.which === 27 ) {
        this.hide();
        e.preventDefault();
        e.stopPropagation();
      }
    });

    this.$.popup.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }

  _onAppStateUpdate() {
    setTimeout(() => {
      this.$.link.value = window.location.href;
    }, 100);
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
    setTimeout(() => this.$.facebook.focus(), 100);
    e.preventDefault();
    e.stopPropagation();
  }

  /**
   * @method _onSelectedRecordUpdate
   * @description from AppStateInterface, called when a record is selected
   * 
   * @param {Object} record selected record
   */
  _onSelectedRecordUpdate(record) {
    this.record = record;
  }

  /**
   * @method _onSocialIconClick
   * @description bound to social icon buttons.  Called when one os clicked
   * 
   * @param {Object} e HTML click event 
   */
  _onSocialIconClick(e) {
    if( e.type === 'keyup' && e.which !== 13 ) return;
    let id = e.currentTarget.id;

    let url = BASE_SHARE_LINKS[id];
    let qso = {};

    if( id === 'pinterest' ) {  
      let path = this._getImgPath(this.record);
      if( path ) {
        qso.media = window.location.protocol+'//'+window.location.host+this._getImgUrl(path);
      }
      qso.description = this.record.name;
      qso.url = window.location.href;
    } else if ( id === 'facebook' ) {
      qso.u = window.location.href;
    } else if ( id === 'google' ) {
      qso.url = window.location.href;
    } else if( id === 'twitter' ) {
      qso.status = this.record.name+' - '+window.location.href;
    }

    url += this._createQs(qso);
    window.open(url, '_blank', 'height=400,width=500');
  }

  _createQs(qso) {
    let query = [];
    for( let key in qso ) {
      query.push(key+'='+encodeURIComponent(qso[key]));
    }
    return '?'+query.join('&');
  }

  /**
   * @method _copyLink
   * @description bound to click event on button.  Copy text to clipboard
   * show UI interaction.
   */
  _copyLink() {
    // this.$.link.select();
    this.$.link.focus();
    this.$.link.setSelectionRange(0, 9999);
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