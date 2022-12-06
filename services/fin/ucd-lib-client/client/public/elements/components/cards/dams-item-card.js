import { LitElement } from 'lit';
import render from "./dams-item-card.tpl.js";
import "@ucd-lib/theme-elements/ucdlib/ucdlib-icon/ucdlib-icon";

/**
 * @class DamsItemCard
 * @description UI component class for displaying a item preview card
 * 
 * @prop {Object} item - An object describing a DAMS item. 
 * If used, element will set all subsequent properties with data from items object.
 * @prop {String} imgSrc - The item thumbnail src.
 * @prop {String} cardTitle - The title of the item.
 * @prop {Number} itemCt - The total number of items in the items.
 * @prop {String} href - Link to the item landing page.
 */
export default class DamsItemCard extends LitElement {

  static get properties() {
    return {
      data : { type : Object },
      truncatedTitle : { type : String }
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.data = {};
    this.truncatedTitle = '';
  }

  /**
   * @method updated
   * @description Lit lifecycle method called when element is updated.
   * @param {Map} props - Properties that have changed.
   */
  updated(props) {
    // if ( props.has('item') && this.item['@id'] ) {
    //   if ( this.item.associatedMedia ) {
    //     this.imgSrc = this.item.thumbnailUrl ? this.item.thumbnailUrl : this.item.associatedMedia.thumbnailUrl;
    //     this.cardTitle = this.item.label ? this.item.label : this.item.associatedMedia.name;
    //     this.itemCt = this.item.associatedMedia.recordCount;
    //     this.href = this.item.associatedMedia['@id'];
    //   } else {
    //     this.imgSrc = this.item.thumbnailUrl;
    //     this.cardTitle = this.item.name;
    //     this.itemCt = this.item.recordCount;
    //     this.href = this.item['@id'];
    //   }
    // }

    // truncate title if longer than 1 line
    if( this.data && this.data.title && this.data.title.length > 38 ) {
      this.truncatedTitle = this.data.title.substring(0, 34) + '...';
    } else if( this.data && this.data.title ) {
      this.truncatedTitle = this.data.title;
    }
  }
}

customElements.define('dams-item-card', DamsItemCard);
