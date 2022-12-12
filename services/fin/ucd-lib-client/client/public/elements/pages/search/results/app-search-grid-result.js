import { LitElement } from 'lit';
// import AppSearchResult from "./app-search-result"
import render from "./app-search-grid-result.tpl.js"

export class AppSearchGridResult extends Mixin(LitElement)
  .with(LitCorkUtils) {

    static get properties() {
      return {
        data : { type : Object },
        imgHeight : { type : Number }
      }
    }

    constructor() {
      super();
      this.active = true;
      this.render = render.bind(this);

      this.data = {};

      this._injectModel('AppStateModel', 'MediaModel');      
    }

    /**
     * @method _onAppStateUpdate
     * @description on the App update, the state is determined and by checking
     * the location
     * 
     * @param {Object} e 
     */
    _onAppStateUpdate(e) {
      this._updateThumbnailProps();
    }

    _updateThumbnailProps() {
      let imgWidth = 250;    
      let img = this.data.image;
      if( img ) {
        let ratio = img.height / img.width;
        this.imgHeight = Math.floor(imgWidth * ratio);
        // this.imgUrl = this._getImgUrl(img.url, null, this.imgHeight);
        this.imgUrl = this.MediaModel.getImgUrl(img.url, null, this.imgHeight);
  
        // if( img.colorPalette ) {
          // this.imgThumbail = img.colorPalette;
        // } else {
        //   this.imgThumbail = '';
        // }
        
        this.isImage = true;
      } else {
        this.imgUrl = '';
        this.isImage = false;
      }
    }

}

customElements.define('app-search-grid-result', AppSearchGridResult);