import { LitElement } from 'lit';
import render from "./app-share-btn.tpl.js"

import AppStateInterface from "../interfaces/AppStateInterface"
import MediaInterface from "../interfaces/MediaInterface"

const BASE_SHARE_LINKS = {
  facebook : 'https://www.facebook.com/sharer/sharer.php',
  twitter : 'https://twitter.com/intent/tweet',
  // pinterest can also add ?media and ?description
  pinterest : 'https://pinterest.com/pin/create/button/'
}

export default class AppShareBtn extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      visible : { type : Boolean }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;

    this.visible = false;
    this._injectModel('AppStateModel', 'MediaModel');
  }

  /**
   * @method _onShareSelected
   * @description bound to main icon, toggles popup when clicked
   * 
   * @param {Object} e HTML click event
   */
  _onShareSelected(e) {
    this.visible = !this.visible;
    e.preventDefault();
    e.stopPropagation();
  }

  /**
   * @method _onCopyLink
   * @description bound to share icon copy link button
   * 
   * @param {Object} e HTML click event 
   */
  async _onCopyLink(e) {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (err) {
      console.error('Failed to copy url: ', err);
    }
  }

  /**
   * @method _onSocialIconClick
   * @description bound to social icon buttons.  Called when one os clicked
   * 
   * @param {Object} e HTML click event 
   */
  _onSocialIconClick(e) {
    let record = this.AppStateModel.getSelectedRecord();
    let media = this.AppStateModel.getSelectedRecordMedia();

    if( e.type === 'keyup' && e.which !== 13 ) return;
    let id = e.currentTarget['id'];

    let url = BASE_SHARE_LINKS[id];
    let qso = {};
    let name = (media.name || media.title || record.name || record.title);

    if( id === 'pinterest' ) {  
      let path = this.MediaModel.getImgPath(media)
      if( path ) {
        qso.media = window.location.protocol+'//'+window.location.host+this.MediaModel.getImgUrl(path);
      }
      qso.description = name;
      qso.url = window.location.href;
    } else if ( id === 'facebook' ) {
      qso.u = window.location.href;
    } else if( id === 'twitter' ) {
      let text = name+' - '+window.location.href+' #UCDavisLibrary #DigitalCollections';
      if( text.length > 280) {
        let diff = (text.length + 3) - 280;
        name = name.substr(0, name.length-diff)+'...';
        text = name+' - '+window.location.href+' #UCDavisLibrary #DigitalCollections';
      }

      qso.text = text;
    } else {
      throw new Error('Unknown social media type: '+id);
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
    this.shadowRoot.querySelector('#link').focus();
    this.shadowRoot.querySelector('#link').setSelectionRange(0, 9999);
    document.execCommand("Copy");

    this.shadowRoot.querySelector('#copyIcon').icon = 'check';
    this.shadowRoot.querySelector('#copyButton').setAttribute('active', 'active');

    setTimeout(() => {
      this.shadowRoot.querySelector('#copyIcon').icon = 'content-copy';
      this.shadowRoot.querySelector('#copyButton').removeAttribute('active', 'active');
    }, 3000);
  }

}

customElements.define('app-share-btn', AppShareBtn);