import {PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-search-result-creator.html"

export default class AppSearchResultCreator extends PolymerElement {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      label : {
        type : String,
        value : '',
        observer : '_onLabelUpdate'
      },
      link : {
        type : Boolean,
        value : false
      }
    }
  }

  /**
   * @method _onLabelUpdate
   * @description fired when label updates.  This element detects if the creator
   * is an external link or a string label.  Then renders a link
   */
  _onLabelUpdate() {
    if( this.label.match(/^http/i) ) this.link = true;
    else this.link = false;
  }
}

customElements.define('app-search-result-creator', AppSearchResultCreator);