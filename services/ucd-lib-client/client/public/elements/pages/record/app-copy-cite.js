import {PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-copy-cite.html"
import striptags from "striptags"

export default class AppCopyCite extends PolymerElement {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      text : {
        type : String,
        value : '',
        observer : '_onTextUpdate'
      },
      copying : {
        type : Boolean,
        value : false
      }
    }
  }

  /**
   * @method _onTextUpdate
   * @description bound to 'text' property observer
   */
  _onTextUpdate() {
    this.$.citeText.innerHTML = this.text || '';
    this.$.copyArea.value = striptags(this.text).trim();
  }

  /**
   * @method _onCopyClicked
   * @description bound to copy btn click event
   */
  _onCopyClicked() {
    // first set correct height
    this.$.copyArea.style.height = (this.$.citeText.offsetHeight-10)+'px';
    this.$.copyArea.style.width = (this.$.citeText.offsetWidth-10)+'px';
  
    this.copying = true;
    // this.$.copyArea.select();
    this.$.copyArea.focus();
    this.$.copyArea.setSelectionRange(0, 9999);
    document.execCommand("Copy");
    this.$.icon.icon = 'check';

    setTimeout(() => {
      this.$.icon.icon = 'content-copy';
      this.copying = false;
    }, 3000);
  }

}

customElements.define('app-copy-cite', AppCopyCite);