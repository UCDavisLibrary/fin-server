import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import moment from "moment"
import "./app-search-result-creator"

export default class AppSearchResult extends PolymerElement {

  static get properties() {
    return {
      data : {
        type : Object,
        value : () => {},
        observer : '_onDataUpdate'
      },
      isImage : {
        type : Boolean,
        value : false
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
      creator : {
        type : Array,
        value : () => []
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
  }

  _isImg(mimeType) {
    if( !mimeType ) return false;
    return mimeType.match(/^image/i) ? true : false;
  }

  _onDataUpdate() {
    let data = Object.assign({}, this.data);
    if( !data['@id'] ) return;
    
    this.collectionName = this.data.memberOf || '';
  if( this.collectionName ) this.collectionName = this.collectionName.replace(/.*\//, '');

    this.title = this.data.title || 'Untitled Container';

    if( this._isImg(this.data.hasMimeType) ) {
      this.imgUrl = this.data['@id']+'/svc:iiif/full/,290/0/default.png'
      this.isImage = true;
    } else {
      this.imgUrl = '';
      this.isImage = false;
    }

    this.description = this.data.description || '';
    if( this.description.length > 200 ) {
      this.description = this.description.substr(0, 200)+'...';
    }

    this.year = data.created ? moment(data.created).format(this.momentFormat) : '';

    if( Array.isArray(data.creator) ) {
      this.creator = data.creator;
    } else {
      this.creator = [data.creator || ''];
    }
  }

}