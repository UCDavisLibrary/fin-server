import { LitElement, html, svg} from 'lit-element';
import render from './icon.tpl.js';
import "@polymer/polymer/polymer-element";
import "@polymer/iron-icons/iron-icons";
import { styleMap } from 'lit-html/directives/style-map';



/**
 * @class AppIcons
 * @description Icons for the DAMS app
 */
export default class AppIcons extends LitElement {


  static get properties() {
    return { 
      size: {type: String},
      icon: {type: String},
      themeColor: {type: String, attribute: 'theme-color'},
      isLink: {type: Boolean, attribute: 'is-link'},
      circleBg: {type: Boolean, attribute: 'circle-bg'},
      hasText: {type: Boolean, attribute: 'has-text'},
      sizeIcon: {type: String, attribute: 'size-icon'},
      sizeIconSVG:  {type: String, attribute: 'size-icon-svg'},
      _customIcons: {type: Object},
      iconPixelSize: {type: Number},
      circlePixelSize: {type: Number}

    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.icon = "";
    this.themeColor = "";
    this.isLink = false;
    this.circleBg = false;
    this.hasText = false;
    this.size = "";
    this.sizeIcon = "";
    this.sizeIconSVG = "";
    this.iconPixelSize = 24;
    this.circlePixelSize = this.iconPixelSize + 6;

    this._customIcons = {
      'search': svg`<path d="M21.55,19.4l-4.14-4.15a8.44,8.44,0,1,0-2.16,2.16l4.15,4.15a1.55,1.55,0,0,0,1.08.44,1.52,1.52,0,0,0,1.07-2.6ZM5.05,10.45a5.41,5.41,0,1,1,5.4,5.4A5.4,5.4,0,0,1,5.05,10.45Z"/>`,
      'qr': svg`<path d="M3,3V8.25H8.25V3ZM6.75,6.75H4.5V4.5H6.75Z"/>
        <path d="M3,15.75V21H8.25V15.75ZM6.75,19.5H4.5V17.25H6.75Z"/>
        <path d="M15.75,3V8.25H21V3ZM19.5,6.75H17.25V4.5H19.5Z"/>
        <polygon points="19.5 9.75 19.5 14.25 15.75 14.25 15.75 15.75 21 15.75 21 9.75 19.5 9.75"/>
        <polygon points="15.75 17.25 15.75 21 17.25 21 17.25 18.75 19.5 18.75 19.5 21 21 21 21 17.25 15.75 17.25"/>
        <polygon points="9.75 3 9.75 4.5 12.75 4.5 12.75 8.25 14.25 8.25 14.25 3 9.75 3"/>
        <polygon points="12.75 9.75 12.75 12.75 9.75 12.75 9.75 17.25 12.75 17.25 12.75 21 14.25 21 14.25 15.75 11.25 15.75 11.25 14.25 14.25 14.25 14.25 11.25 15.75 11.25 15.75 12.75 17.25 12.75 17.25 9.75 12.75 9.75"/>
        <rect x="9.75" y="18.75" width="1.5" height="2.25"/>
        <rect x="6" y="12.75" width="2.25" height="1.5"/>
        <polygon points="9.75 6 9.75 9.75 3 9.75 3 14.25 4.5 14.25 4.5 11.25 11.25 11.25 11.25 6 9.75 6"/>`,
      'filter': svg`<path d="M22,1H2A1,1,0,0,0,1.3,2.76l8,8v8.85a1,1,0,0,0,.44.85l3.44,2.4A1,1,0,0,0,14.75,22V10.71l8-8A1,1,0,0,0,22,1Z"/>`
    };
  }
  
  /**
   * @method getIconSize
   * @description return the size of the icon depending on the 
   * assigned sizeIcon
   * @returns {Integer} 
   */
  getIconSize(){
    let size = this.iconPixelSize;
    if (this.sizeIconSVG == 'extralg' || this.sizeIcon == 'extralg')  {
      size = 40;
    }
    else if (this.sizeIconSVG == 'lg' || this.sizeIcon == 'lg') {
      size = 24;
    }

    return size;
  }

  /**
   * @method getIconSizeStyles
   * @description return the object of the style assigned
   * icons and calls the getIconSize
   * @returns {Object} 
   */
  getIconSizeStyles(){
    let size = `${this.getIconSize()}px`;
    return {'width': size,'min-width': size,'height': size, 'display': 'block', 'margin': '0 auto' };
  }

  /**
   * @method getCircleSize
   * @description returns the size of the circle based on the 
   * size of the icon
   * @returns {Integer} 
   */
  getCircleSize(){
    let size = this.circlePixelSize;
    if (this.size == 'lg') {
      size = 35;
    }
    else if ( this.size == 'extralg') {
      size = 86;
    }
    return size;
  }

  /**
   * @method getCircleSizeStyles
   * @description return the object of the style assigned
   * circles of icon and calls the getCircleSize
   * @returns {Object} 
   */
  getCircleSizeStyles(){
    let size = `${this.getCircleSize()}px`;
    return {'width': size, "min-width": size, 'height': size, 'text-align':'center', 'justify-content': 'center', 'display': 'flex', 'align-items': 'center'};
  }

  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */
  constructClasses() {
    let classes = {};
    if ( (!this.icon ) || (this.icon == "iron-") ) {
      classes['noicon'] = true;
      return classes;
    }
    if (this.icon.startsWith('fin-') && !this._isCustomIcon(this.icon)) {
      classes['noicon'] = true;
      return classes;
    }
    if (this.circleBg) {
      classes.circle = true;
    }
    if (this.isLink) {
      classes.link = true;
    }
    if (this.themeColor) {
      classes[this.themeColor] = true;
    }
    if (this.size) {
      classes[this.size] = true;
    }
    if(this.hasText){
      classes.text = true;
    }
    if(this.sizeIcon){
      classes[this.sizeIcon] = true;
    }
    if(this.sizeIconSVG){
      classes[this.sizeIconSVG] = true;
    }
    return classes;
  }

  /**
   * @method _calculateViewBox
   * @description return the calcuation of the viewbox
   * for each icon size and calls getIconSize
   * @returns {String} 
   */
  _calculateViewBox() {
    //let size = this.getIconSize();
    //console.log(size);
    return `0 0 24 24`;
  }

  /**
   * @method renderIcon
   * @description renders the icon depending on if it is
   * and iron icon or a custom icon as an html
   * @returns {HTML} 
   */
  renderIcon() {
    if ( (!this.icon ) || (this.icon == "iron-") ) {
      return html``;
    }
    if (this.icon.startsWith('iron-')) {
      let icon = this.icon.split("-").slice(1).join('-');

      return html`<iron-icon class="icon ${this.sizeIcon ? this.sizeIcon : ''}" icon="${icon}" style="${styleMap(this.getIconSizeStyles())}"></iron-icon>`;

    }
    if (this._isCustomIcon(this.icon)) {
      let icon = this.icon.split("-").slice(1).join('-');
      return html`<svg id="svg" class="icon fin ${this.sizeIconSVG ? this.sizeIconSVG : ''}" viewBox="${this._calculateViewBox()}" style="${styleMap(this.getIconSizeStyles())}" xmlns="http://www.w3.org/2000/svg">${this._renderCustomIcon(icon)}</svg>`; 
    }
    return html``;
  }

  /**
   * @method _renderCustomIcon
   * @param {Object} icon
   * @description returns the custom icon definition defined
   * above in the constructor
   * @returns {HTML} 
   */
  _renderCustomIcon(icon) {
    return this._customIcons[icon];
  }

  /**
   * @method _isCustomIcon
   * @param {Object} icon
   * @description returns if it is a custom icon or not
   * 
   * @returns {Boolean} 
   */
  _isCustomIcon(icon){
    if (icon.startsWith('fin-')) icon = icon.split("-").slice(1).join('-');
    if (Object.keys(this._customIcons).includes(icon)) {
      return true;
    }
    return false;
  }
}

customElements.define('app-icons', AppIcons);
