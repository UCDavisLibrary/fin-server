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
      item: {type: Object},
      imgSrc: {type: String, attribute: 'img-src'},
      cardTitle: {type: String, attribute: 'card-title'},
      itemCt: {type: Number, attribute: 'item-ct'},
      href: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.imgSrc = "";
    this.cardTitle = "Davis BoyScout Troup";
    this.itemCt = 0;
    this.href = "";

  }

  /**
   * @method updated
   * @description Lit lifecycle method called when element is updated.
   * @param {Map} props - Properties that have changed.
   */
  updated(props) {
    if ( props.has('item') && this.item['@id'] ) {
      if ( this.item.associatedMedia ) {
        this.imgSrc = this.item.thumbnailUrl ? this.item.thumbnailUrl : this.item.associatedMedia.thumbnailUrl;
        this.cardTitle = this.item.label ? this.item.label : this.item.associatedMedia.name;
        this.itemCt = this.item.associatedMedia.recordCount;
        this.href = this.item.associatedMedia['@id'];
      } else {
        this.imgSrc = this.item.thumbnailUrl;
        this.cardTitle = this.item.name;
        this.itemCt = this.item.recordCount;
        this.href = this.item['@id'];
      }
    }

    // truncate title if longer than 1 line
    if( this.cardTitle.length > 38 ) {
      this.cardTitle = this.cardTitle.substring(0, 35) + '...';
    }
  }
}

customElements.define('dams-item-card', DamsItemCard);
