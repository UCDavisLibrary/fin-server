import { LitElement } from 'lit-element';
import render from "./dams-hero.tpl.js";

import "./dams-watercolor";

/**
 * @class DamsHero
 * @description UI component for displaying a hero image
 * @prop {Array} srcOptions - Set of image sources to randomly display
 * @prop {String} src - Fallback background image source
 * @prop {String} watercolor - Watercolor type
 */
export default class DamsHero extends LitElement {

  static get properties() {
    return {
      src: {type: String},
      srcOptions: {type: Array, attribute: "src-options"},
      watercolor: {type: String},
      _selectedSrc: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.src = "";
    this.srcOptions = [];
    this._selectedSrc = "";
    this.watercolor = "border-white";

    this._srcChange = new CustomEvent('src-change', {
      detail: {
        message: 'A new image has been loaded'
      }
    });
  }

  /**
   * @method updated
   * @description Lit lifecyle method fired when element is updated.
   * 
   * @param {Map} props - Change properties
   */
  updated(props){
    if (props.has('srcOptions')) this._setSrc();
  }


  /**
   * @method shuffleImage
   * @description Randomly displays a new hero image.
   * 
   * @returns {String} The new img src
   */
  shuffleImage(){
    this._setSrc();
    return this._selectedSrc;
  }

  /**
   * @method _setSrc
   * @description Sets the background image src property.
   */
  _setSrc(){
    let src = "";
    let setCt = this.srcOptions.length;
    if ( setCt === 0 && this.src ) {
      src = this.src;
    }
    else if ( setCt > 0 ) {
      let i = Math.floor(Math.random() *  setCt);
      src = this.srcOptions[i];
    }
    this._selectedSrc = src;
    this.dispatchEvent(this._srcChange);
  }

  /**
   * @method getContainerStyles
   * @description Inline styles for element's base container
   * 
   * @returns {Object}
   */
  getContainerStyles(){
    let styles = {
      'background-image': 'var(--gradient-ag-putah)'
    };
    if ( this._selectedSrc ) styles['background-image'] += `, url(${this._selectedSrc})`;
    return styles;
  }

}

customElements.define('dams-hero', DamsHero);
