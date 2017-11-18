import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-material/paper-material"
import moment from "moment"

import template from "./app-search-list-result.html";

export class AppSearchListResult extends PolymerElement {


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

  constructor() {
    super();
    this.momentFormat = 'MMMM Do YYYY, h:mm:ss a';
    this.fcBase = window.location.protocol+'//'+window.location.host+'/fcrepo/rest';
  }

  _onDataUpdate() {
    let data = Object.assign({}, this.data);
    if( !data['@id'] ) return;
    
    data.title = data.title || 'Untitled Container';

    data.href = data['@id'];
    if( data.filename ) {
      data.href += '/fcr:metadata';
    }

    data.id = data['@id'].replace(this.fcBase, '');

    data.children = 0;
    data.hasChildren = false;
    if( typeof data.contains === 'string' ) {
      data.hasChildren = true;
      data.children = 1;
    } else if ( data.contains ) {
      data.hasChildren = true;
      data.children = data.contains.length;
    }

    if( data.created ) data.created = moment(data.created).format(this.momentFormat);
    if( data.lastModified ) data.lastModified = moment(data.lastModified).format(this.momentFormat)

    if( data.hasParent ) {
      data.parentId = data.hasParent.replace(this.fcBase, '');
    }

    this.renderdata = data;
  }
}

customElements.define('app-search-list-result', AppSearchListResult);