import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-material/paper-material"


import template from "./app-search-result.html";

export class AppSearchResult extends PolymerElement {


  static get template() {
    return template;
  }

  static get properties() {
    return {
      data : {
        type : Object,
        value : () => {},
        observer : '_onDataUpdate'
      },
      renderdata : {
        type : Object,
        value : () => {}
      }
    }
  }

  _onDataUpdate() {
    let data = Object.assign({}, this.data);
    if( !data['@id'] ) return;
    data.href = data['@id'];
    
    if( typeof data.contains === 'string' ) {
      data.contains = [data.contains];
    }

    this.renderdata = data;
  }
}

customElements.define('app-search-result', AppSearchResult);