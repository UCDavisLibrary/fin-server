import { LitElement } from 'lit';

import AppSearchResult from "./app-search-result";
import render from "./app-search-list-result.tpl.js";

export class AppSearchListResult extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      data : { type : Object },
    }
  }
  
  constructor() {
    super();
    this.active = true;
    this.render = render.bind(this);  

    this.data = {};
    
    // todo remove
    // this.title = `
    //   The Wine and Food Society of San Francisco in Cooperation with 
    //   American President Lines Presents a "World Cruise" Dinner on Board S.
    //   S. President Wilson
    // `;  
    // this.collectionName = 'Amerine (Maynard) Menu Collection';
    // this.creator = 'Unknown';
    // this.date = '1964, 1964-05-17';
    // this.format = '6 pages, Image';
    // this.imgUrl = 'https://stage.library.ucdavis.edu/wp-content/uploads/2022/09/d74w7z-0-web.png';
    // this.isImage = true;

  }

}

customElements.define('app-search-list-result', AppSearchListResult);