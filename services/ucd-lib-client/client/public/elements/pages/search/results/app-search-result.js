import {PolymerElement} from "@polymer/polymer/polymer-element"
import utils from "../../../../lib/utils"
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
      isVideo: {
        type: Boolean,
        value: false
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
      },
      tabindex : {
        type : Number,
        value : 0,
        reflectToAttribute : true
      }
    }
  }

  constructor() {
    super();

    this.baseUrl = window.location.protocol+'//'+window.location.host+'/fcrepo/rest';
  }

  ready() {
    super.ready();
    this.addEventListener('click', e => this._onClick());
    this.addEventListener('keyup', e => {
      if( e.which !== 13 ) return;
      this._onClick();
    });
  }

  /**
   * @method _onClick
   * @description Fired when this element is clicked
   */
  _onClick() {
    this._setWindowLocation(this.fetchId);
  }

  /**
   * @method _onDataUpdate
   * @description fired when `data` property updates.  Set UI properties.
   */
  async _onDataUpdate() {
    let data = Object.assign({}, this.data);

    if( !data['@id'] ) return;
    
    this.fetchId = data['@id'];

    this.name = this.data.name || (this.data.identifier ? this.data.identifier['@id'] : '');

    let video = this.data.video;
    if ( video ) {
      this.isVideo = true;
    }
    
    let imgEle = this.shadowRoot.querySelector('#img');
    if( imgEle ) imgEle.style.display = 'none';

    let imgWidth = 250;    
    let img = this.data.image;  
    if( img ) {
      let ratio = img.height / img.width;
      this.imgHeight = Math.floor(imgWidth * ratio);
      this.imgUrl = this._getImgUrl(img.url, null, this.imgHeight);

      if( img.colorPalette ) {
        this.imgThumbail = img.colorPalette;
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

    this.year = utils.getYearFromDate(data.created);

    if( Array.isArray(data.creator) ) {
      this.creator = data.creator;
    } else {
      this.creator = [data.creator || ''];
    }

    this.collectionName = this.data.collectionId || '';
    if( this.collectionName ) {
      let collection = await this._getCollection(this.collectionName);
      this.collectionName = collection.name;
    }
  }

}