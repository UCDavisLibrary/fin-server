import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import moment from "moment"
import "./app-search-result-creator"

import CollectionInterface from "../../../interfaces/CollectionInterface"
import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"

export default class AppSearchResult extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, CollectionInterface, MediaInterface) {

  static get properties() {
    return {
      data : {
        type : Object,
        value : () => {},
        observer : '_onDataUpdate'
      },
      fetchId : {
        type : String,
        value : ''
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
      name : {
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

    this.baseUrl = window.location.protocol+'//'+window.location.host+'/fcrepo/rest';
    this.momentFormat = 'YYYY';
  }

  ready() {
    super.ready();
    this.addEventListener('click', this._onClick);
  }

  /**
   * @method _onClick
   * @description Fired when this element is clicked
   */
  _onClick() {
    this._setWindowLocation('/record'+this.fetchId);
  }

  /**
   * @method _onDataUpdate
   * @description fired when `data` property updates.  Set UI properties.
   */
  async _onDataUpdate() {
    let data = Object.assign({}, this.data);
    if( !data['@id'] ) return;
    
    this.fetchId = data.id;   

    this.name = this.data.name || this.data.identifier || '';

    let imgPath = this._getImgPath(this.data);
    if( imgPath ) {
      if( this.data.width && this.data.height ) {
        let ratio = this.data.height / this.data.width;
        this.imgHeight = Math.floor(250 * ratio);
        this.imgUrl = this._getImgUrl(imgPath, null, this.imgHeight+40);
      } else {
        this.imgHeight = 250;
        this.imgUrl = this._getImgUrl(imgPath, null, this.imgHeight);
      }

      if( this.data.thumbnailUrl ) {
        this.imgThumbail = this.data.thumbnailUrl;
      } else {
        this.imgThumbail = '';
      }
      
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

    this.collectionName = this.data.isPartOf || '';
    if( this.collectionName ) {
      let collection = await this._getCollection(this.collectionName);
      this.collectionName = collection.name;
    }
  }

}