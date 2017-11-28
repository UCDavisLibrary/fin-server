import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-search-result-creator.html"

export default class AppSearchResultCreator extends PolymerElement {

  static get template() {
    return template;
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

  _onLabelUpdate() {
    if( this.label.match(/^http/i) ) this.link = true;
    else this.link = false;
  }
}

customElements.define('app-search-result-creator', AppSearchResultCreator);