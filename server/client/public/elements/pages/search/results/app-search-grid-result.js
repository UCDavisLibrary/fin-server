import {Element as PolymerElement} from "@polymer/polymer/polymer-element"

import template from "./app-search-grid-result.html"

export class AppSearchGridResult extends PolymerElement {

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
      imgUrl : {
        type : String,
        value : ''
      },
      collectionName : {
        type : String,
        value : ''
      },
      title : {
        type : String,
        value : ''
      },
      description : {
        type : String,
        value : ''
      },
      year : {
        type : String,
        value : ''
      }
    }
  }

  constructor() {
    super();
    this.momentFormat = 'YYYY';

    // this.style.height = Math.floor(200 + Math.random() * 200)+'px';
    // this.style.backgroundColor = '#daaa00';
  }

  _isImg(mimeType) {
    if( !mimeType ) return false;
    return mimeType.match(/^image/i) ? true : false;
  }

  _onDataUpdate() {
    let data = Object.assign({}, this.data);
    if( !data['@id'] ) return;
    
    this.collectionName = this.data.collection || 'Untitled Collection';

    this.title = this.data.title || 'Untitled Container';

    if( this._isImg(this.data.hasMimeType) ) {
      this.imgUrl = this.data['@id']+'/250,/full/0/default.png'
    } else {
      this.imgUrl = '';
    }

    this.description = this.data.description || '';

    // this.year = moment(data.created).format(this.momentFormat);
  }

}

customElements.define('app-search-grid-result', AppSearchGridResult);