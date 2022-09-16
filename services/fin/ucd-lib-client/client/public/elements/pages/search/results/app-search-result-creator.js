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
      creator : {
        type : Object,
        value : null,
        observer : '_onCreatorUpdate'
      },
      textLabel : {
        type : String,
        value : ''
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
  _onCreatorUpdate() {
    if( !this.creator ) return;

    if( this.creator['@id'] ) this.link = true;
    else this.link = false;

    if( this.creator.name ) this.textLabel = this.creator.name;
    else this.textLabel = this.creator['@id'];
  }

  /**
   * @method _onClick
   * @description bound to anchor tag click event. Stop event from bubbling;
   */
  _onClick(e) {
    e.stopPropagation();
  }
}

customElements.define('app-search-result-creator', AppSearchResultCreator);