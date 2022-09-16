import { LitElement } from 'lit-element';
import render from "./dams-highlighted-collection.tpl.js";

/**
 * @class DamsHighlightedCollection
 * @description Homepage UI component class for displaying a page section higlighting a collection.
 * 
 * @prop {Object} collection - A featured collection from the FcAppConfigModel. 
 * @prop {Boolean} imageRight - Should the image be on the right or left?
 */
export default class DamsHighlightedCollection extends LitElement {

  static get properties() {
    return {
      collection: {type: Object},
      imageRight: {type: Boolean, attribute: 'image-right'},
      _collectionTitle: {type: String, attribute: 'collection-title'},
      _imgSrc: {type: String, attribute: 'img-src'},
      _collectionDesc: {type: String, attribute: 'collection-desc'},
      _itemCt: {type: Number, attribute: 'item-ct'},
      _href: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.collection = {};
    this.imageRight = false;
    this._collectionTitle = "";
    this._imgSrc = "";
    this._collectionDesc = "";
    this._itemCt = 0;
    this._href = "";
  }

  /**
   * @method updated
   * @description Lit lifecycle method called when element is updated.
   * @param {Map} props - Properties that have changed.
   */
  updated(props) {
    if ( props.has('collection') ) {
      if ( this.collection.label ) {
        this._collectionTitle = this.collection.label;
      } else if ( this.collection.associatedMedia.name ) {
        this._collectionTitle = this.collection.associatedMedia.name;
      }
      if ( this.collection.description ) {
        this._collectionDesc = this.collection.description;
      } else if (this.collection.associatedMedia.description) {
        this._collectionDesc = this.collection.associatedMedia.description;
      }
      this._imgSrc = this.collection.thumbnailUrl ? this.collection.thumbnailUrl : this.collection.associatedMedia.thumbnailUrl;
      this._itemCt = this.collection.associatedMedia.recordCount;
      this._href = this.collection.associatedMedia['@id'];
    }
  }

  /**
   * @method getContainerClasses
   * @description Gets classes for the element base container. Bound to that div.
   * 
   * @returns {Object}
   */
  getContainerClasses(){
    let classes = {
      "container": true,
      "image-right": this.imageRight,
      "image-left": !this.imageRight
    };
    return classes;
  }

}

customElements.define('dams-highlighted-collection', DamsHighlightedCollection);
