(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-collections~page-components~page-home"],{

/***/ "./public/elements/components/cards/dams-collection-card.js":
/*!******************************************************************!*\
  !*** ./public/elements/components/cards/dams-collection-card.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DamsCollectionCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _dams_collection_card_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dams-collection-card.tpl.js */ "./public/elements/components/cards/dams-collection-card.tpl.js");



/**
 * @class DamsCollectionCard
 * @description UI component class for displaying a collection preview card
 * 
 * @prop {Object} collection - An object describing a DAMS collection. 
 * If used, element will set all subsequent properties with data from collections object.
 * @prop {String} imgSrc - The collection thumbnail src.
 * @prop {String} cardTitle - The title of the collection.
 * @prop {Number} itemCt - The total number of items in the collections.
 * @prop {String} href - Link to the collection landing page.
 */
class DamsCollectionCard extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {

  static get properties() {
    return {
      collection: {type: Object},
      imgSrc: {type: String, attribute: 'img-src'},
      cardTitle: {type: String, attribute: 'card-title'},
      itemCt: {type: Number, attribute: 'item-ct'},
      href: {type: String}
    };
  }

  constructor() {
    super();
    this.render = _dams_collection_card_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.imgSrc = "";
    this.cardTitle = "";
    this.itemCt = 0;
    this.href = "";

  }

  /**
   * @method updated
   * @description Lit lifecycle method called when element is updated.
   * @param {Map} props - Properties that have changed.
   */
  updated(props) {
    if ( props.has('collection') && this.collection['_id'] ) {
      this.imgSrc = this.collection.thumbnailUrl;
      this.cardTitle = this.collection.name;
      this.itemCt = this.collection.recordCount;
      this.href = this.collection['_id'];
    }
  }
}

customElements.define('dams-collection-card', DamsCollectionCard);


/***/ }),

/***/ "./public/elements/components/cards/dams-collection-card.tpl.js":
/*!**********************************************************************!*\
  !*** ./public/elements/components/cards/dams-collection-card.tpl.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/style-map */ "./public/node_modules/lit-html/directives/style-map.js");



function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

<style>
  :host {
    display: block;
  }
  .container {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  .img-container {
    width: 100%;
    position: relative;
    padding-top: 75%;
    background-image: url(/images/logos/logo-white-512.png);
    background-color: var(--color-black-20);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .img-container img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .head {
    border: 3px solid transparent;
    transition: .3s;
  }
  .container:hover .head, .container:focus .head {
    border: 3px solid var(--color-dams-secondary);
  }
  h5 {
    margin: 10px 0 5px 0;
    color: var(--color-h5);
    font-size: var(--fs-h5);
    font-weight: var(--fw-h5);
  }
  .subtitle {
    font-size: var(--fs-p);
    font-weight: var(--fw-extra-bold);
    color: var(--color-aggie-blue-70);
    margin-bottom: 20px;
  }
  .gold-dots {
    width: 0;
    transition: .4s;
    border-bottom: 5px dotted var(--color-dams-secondary);
  }
  .container:hover .gold-dots, .container:focus .gold-dots {
    width: 100%;
  }

</style>  
<div class="container"><a href="${this.href}">
  <div class="head">
    <div class="img-container">
      ${this.imgSrc ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <img src="${this.imgSrc}">
      ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
    </div>
  </div>
  <div class="body">
    <h5>${this.cardTitle}</h5>
    <div class="subtitle">${this.itemCt} item${this.itemCt === 1 ? "" : "s"}</div>
  </div>
  <div class="footer">
    <div class="gold-dots"></div>
  </div></a>


</div>
`;}

/***/ }),

/***/ "./public/elements/components/graphics/dams-watercolor-overlay.js":
/*!************************************************************************!*\
  !*** ./public/elements/components/graphics/dams-watercolor-overlay.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DamsWatercolorOverlay; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _dams_watercolor_overlay_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dams-watercolor-overlay.tpl.js */ "./public/elements/components/graphics/dams-watercolor-overlay.tpl.js");



/**
 * @class DamsWatercolorOverlay
 * @description UI component class that overlays an image or icon over watercolor artwork
 * 
 * @prop {String} wcPattern - Watercolor pattern to use
 * @prop {String} wcColor - Color of background watercolor
 * @prop {Number} wcRotation - Rotation (in degrees) of background watercolor
 * @prop {String} imgSrc - Path to the overlay image
 * @prop {String} icon - Iron Icon to overlay over watercolor (use this OR imgSrc)
 * @prop {Number} overlayWidth - The width of the overlayed asset in pixels
 * @prop {Number} overlayHeight - The height of the overlayed asset in pixels
 * @prop {String} overlayTop - Where the overlayed asset should be placed on the Y axis
 * @prop {String} overlayLeft - Where the overlayed asset should be placed on the X axis
 */
class DamsWatercolorOverlay extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {

  static get properties() {
    return {
      wcPattern: {type: String, attribute: "wc-pattern"},
      wcColor: {type: String, attribute: "wc-color"},
      wcRotation: {type: Number, attribute: "wc-rotation"},
      overlayWidth: {type: Number, attribute: "overlay-width"},
      overlayHeight: {type: Number, attribute: "overlay-height"},
      imgSrc: {type: String, attribute: "img-src"},
      imgPosition: {type: String, attribute: "img-position"},
      overlayTop: {type: String, attribute: "overlay-top"},
      overlayLeft: {type: String, attribute: "overlay-left"},
      icon: {type: String}
    };
  }

  constructor() {
    super();
    this.render = _dams_watercolor_overlay_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.wcPattern = "";
    this.wcColor = "";
    this.wcRotation = 0;
    this.overlayWidth = 100;
    this.overlayHeight = 100;
    this.imgSrc = "";
    this.overlayTop = "";
    this.overlayLeft = "";
    this.imgPosition = "center center";
    this.icon = "";
    this.iconColor = "#ffffff";
  }

  /**
   * @method getImgStyles
   * @description Constructs styles for the overlay image. Bound to '.img-container'
   * @returns {Object}
   */
  getImgStyles(){
    if ( !this.imgSrc ) return {};
    let styles = {
      width: `${this.overlayWidth}px`,
      height: `${this.overlayHeight}px`,
      'background-image': `url(${this.imgSrc})`,
      'background-position': this.imgPosition,
      top: this.overlayTop ? this.overlayTop : `calc(50% - ${this.overlayWidth/2}px)`,
      left: this.overlayLeft ? this.overlayLeft : `calc(50% - ${this.overlayHeight/2}px)`
    };
    return styles;
  }

  /**
   * @method getIconStyles
   * @description Constructs styles for the overlay icon. Bound to iron-icon
   * @returns {Object}
   */
  getIconStyles(){
    if ( !this.icon ) return {};
    let styles = {
      width: `${this.overlayWidth}px`,
      height: `${this.overlayHeight}px`,
      top: this.overlayTop ? this.overlayTop : `calc(50% - ${this.overlayWidth/2}px)`,
      left: this.overlayLeft ? this.overlayLeft : `calc(50% - ${this.overlayHeight/2}px)`,
      color: this.iconColor
    };
    return styles;
  }

}

customElements.define('dams-watercolor-overlay', DamsWatercolorOverlay);


/***/ }),

/***/ "./public/elements/components/graphics/dams-watercolor-overlay.tpl.js":
/*!****************************************************************************!*\
  !*** ./public/elements/components/graphics/dams-watercolor-overlay.tpl.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/style-map */ "./public/node_modules/lit-html/directives/style-map.js");
/* harmony import */ var _polymer_iron_icons_iron_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-icons/iron-icons */ "./public/node_modules/@polymer/iron-icons/iron-icons.js");
/* harmony import */ var _dams_watercolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dams-watercolor */ "./public/elements/components/graphics/dams-watercolor.js");






function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

<style>
  :host {
    display: inline-block;
    position: relative;
  }
  .img-container {
    border-radius: 50%;
    background-size: cover;
    position: absolute;
  }
  iron-icon {
    position: absolute;
  }
</style>
<dams-watercolor
  rotate="${this.wcRotation}"
  color="${this.wcColor}"
  src-file-prefix="${this.wcPattern}">
</dams-watercolor>
${this.imgSrc ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <div class="img-container" style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__["styleMap"])(this.getImgStyles())}"></div>
` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
${this.icon ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <iron-icon icon="${this.icon}" style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__["styleMap"])(this.getIconStyles())}"></iron-icon>
` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}


`;}

/***/ }),

/***/ "./public/elements/components/graphics/dams-watercolor.js":
/*!****************************************************************!*\
  !*** ./public/elements/components/graphics/dams-watercolor.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DamsWatercolor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _dams_watercolor_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dams-watercolor.tpl.js */ "./public/elements/components/graphics/dams-watercolor.tpl.js");



/**
 * @class DamsWatercolor
 * @description UI component class for displaying decorative watercolor images
 * @prop {String} srcDir - Server directory containing watercolor assets
 * @prop {String} srcFilePrefix - The requested watercolor pattern
 * @prop {String} srcExt - The watercolor image extension type
 * @prop {String} color - The watercolor image. See CSS custom variables for accepted values
 * @prop {Number} rotate - Degree to rotate watercolor
 * @prop {String} width - Watercolor width
 * @prop {String} height - Watercolor height
 * @prop {String} element - Type of element to use: img or div
 */
class DamsWatercolor extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {

  static get properties() {
    return {
      srcDir: {type: String, attribute: 'src-dir'},
      srcFilePrefix: {type: String, attribute: 'src-file-prefix'},
      srcExt: {type: String, attribute: 'src-ext'},
      color: {type: String},
      rotate: {type: Number},
      width: {type: String},
      height: {type: String},
      element: {type: String}
    };
  }

  constructor() {
    super();
    this.render = _dams_watercolor_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.validateImgSrc();
    this.height = "";
    this.width = "";
    this.rotate = 0;
    this.element = "img";
  }

  /**
   * @method validateImgSrc
   * @description Sets default value if any img src path components are missing.
   */
  validateImgSrc(){
    let pathDefaults = {
      srcDir: "/images/watercolors",
      srcFilePrefix: "watercolor",
      srcExt: "png",
      color: "blue"
    };
    for (const pathComponent in pathDefaults) {
      if (!this[pathComponent]) this[pathComponent] = pathDefaults[pathComponent];
    }
  }

  /**
   * @method getImgPath
   * @description Constructs image src attribute for watercolor
   * @param resolution - Image resolution: x-descriptors
   * @returns {String}
   */
  getImgSrc(resolution="1x") {
    this.validateImgSrc();
    let path = `${this.srcDir}/${this.srcFilePrefix}-${this.color}`;
    if (resolution && resolution !== "1x") path += `-${resolution}`;
    path += `.${this.srcExt}`;
    return path;
  }

  /**
   * @method getImgSrcSet
   * @description Constructs the img srcset attribute for water color
   * @returns {String}
   */
  getImgSrcSet(){
    return `${this.getImgSrc()}, ${this.getImgSrc('2x')} 2x`;
  }

  /**
   * @method getImgStyles
   * @description Constructs inline styles for watercolor img element
   * @returns {Object}
   */
  getImgStyles() {
    let styles = {};
    styles.transform = `rotate(${this.rotate}deg)`;
    return styles;
  }

  /**
   * @method getBgImgStyles
   * @description Constructs inline styles for watercolor background-image div
   * 
   * @returns {Object}
   */
  getBgImgStyles(){
    let styles = {
      "background-image": `url(${this.getImgSrc()})`
    };
    if (this.rotate) styles.transform = `rotate(${this.rotate}deg)`;
    //if (this.width) styles.width = this.width;
    //if (this.height) styles.height = this.height;
    return styles;
  }

}

customElements.define('dams-watercolor', DamsWatercolor);


/***/ }),

/***/ "./public/elements/components/graphics/dams-watercolor.tpl.js":
/*!********************************************************************!*\
  !*** ./public/elements/components/graphics/dams-watercolor.tpl.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/style-map */ "./public/node_modules/lit-html/directives/style-map.js");



function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

<style>
  :host {
    display: inline-block;
  }
  img {
    object-fit: contain;
  }
  .bg-img {
    background-repeat: repeat-x;
    background-size: auto 100%;
    background-position: bottom;
    width: 100%;
    height: 100%;
  }
</style> 
${this.element === 'img' ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <img 
    src="${this.getImgSrc()}" 
    srcset="${this.getImgSrcSet()}"
    height="${this.height}"
    width="${this.width}"
    alt="" 
    style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__["styleMap"])(this.getImgStyles())}">
` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <div class="bg-img" style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__["styleMap"])(this.getBgImgStyles())}"></div>
`}


`;}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jYXJkcy9kYW1zLWNvbGxlY3Rpb24tY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jYXJkcy9kYW1zLWNvbGxlY3Rpb24tY2FyZC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvZ3JhcGhpY3MvZGFtcy13YXRlcmNvbG9yLW92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvZ3JhcGhpY3MvZGFtcy13YXRlcmNvbG9yLW92ZXJsYXkudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2dyYXBoaWNzL2RhbXMtd2F0ZXJjb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9ncmFwaGljcy9kYW1zLXdhdGVyY29sb3IudHBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNVOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQjtBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQjtBQUNlLGlDQUFpQyxzREFBVTs7QUFFMUQ7QUFDQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDLGVBQWUsbUNBQW1DO0FBQ2xELGtCQUFrQixzQ0FBc0M7QUFDeEQsZUFBZSxtQ0FBbUM7QUFDbEQsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixvRUFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUFtQztBQUNzQjs7QUFFMUMsbUI7QUFDZixPQUFPLGdEQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUJBQXlCLGdEQUFJO0FBQy9CO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsY0FBYyxvQkFBb0I7QUFDbEMsY0FBYyxZQUFZO0FBQzFCLGFBQWEsV0FBVztBQUN4QjtBQUNBLGFBQWEsOEVBQVEsc0JBQXNCO0FBQzNDLElBQUksZ0RBQUk7QUFDUiwrQkFBK0IsOEVBQVEsd0JBQXdCO0FBQy9EOzs7QUFHQSxHIiwiZmlsZSI6InBhZ2UtY29sbGVjdGlvbnN+cGFnZS1jb21wb25lbnRzfnBhZ2UtaG9tZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9kYW1zLWNvbGxlY3Rpb24tY2FyZC50cGwuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgRGFtc0NvbGxlY3Rpb25DYXJkXG4gKiBAZGVzY3JpcHRpb24gVUkgY29tcG9uZW50IGNsYXNzIGZvciBkaXNwbGF5aW5nIGEgY29sbGVjdGlvbiBwcmV2aWV3IGNhcmRcbiAqIFxuICogQHByb3Age09iamVjdH0gY29sbGVjdGlvbiAtIEFuIG9iamVjdCBkZXNjcmliaW5nIGEgREFNUyBjb2xsZWN0aW9uLiBcbiAqIElmIHVzZWQsIGVsZW1lbnQgd2lsbCBzZXQgYWxsIHN1YnNlcXVlbnQgcHJvcGVydGllcyB3aXRoIGRhdGEgZnJvbSBjb2xsZWN0aW9ucyBvYmplY3QuXG4gKiBAcHJvcCB7U3RyaW5nfSBpbWdTcmMgLSBUaGUgY29sbGVjdGlvbiB0aHVtYm5haWwgc3JjLlxuICogQHByb3Age1N0cmluZ30gY2FyZFRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBjb2xsZWN0aW9uLlxuICogQHByb3Age051bWJlcn0gaXRlbUN0IC0gVGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgY29sbGVjdGlvbnMuXG4gKiBAcHJvcCB7U3RyaW5nfSBocmVmIC0gTGluayB0byB0aGUgY29sbGVjdGlvbiBsYW5kaW5nIHBhZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhbXNDb2xsZWN0aW9uQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sbGVjdGlvbjoge3R5cGU6IE9iamVjdH0sXG4gICAgICBpbWdTcmM6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2ltZy1zcmMnfSxcbiAgICAgIGNhcmRUaXRsZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnY2FyZC10aXRsZSd9LFxuICAgICAgaXRlbUN0OiB7dHlwZTogTnVtYmVyLCBhdHRyaWJ1dGU6ICdpdGVtLWN0J30sXG4gICAgICBocmVmOiB7dHlwZTogU3RyaW5nfVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbWdTcmMgPSBcIlwiO1xuICAgIHRoaXMuY2FyZFRpdGxlID0gXCJcIjtcbiAgICB0aGlzLml0ZW1DdCA9IDA7XG4gICAgdGhpcy5ocmVmID0gXCJcIjtcblxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdXBkYXRlZFxuICAgKiBAZGVzY3JpcHRpb24gTGl0IGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIHdoZW4gZWxlbWVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0ge01hcH0gcHJvcHMgLSBQcm9wZXJ0aWVzIHRoYXQgaGF2ZSBjaGFuZ2VkLlxuICAgKi9cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIGlmICggcHJvcHMuaGFzKCdjb2xsZWN0aW9uJykgJiYgdGhpcy5jb2xsZWN0aW9uWydfaWQnXSApIHtcbiAgICAgIHRoaXMuaW1nU3JjID0gdGhpcy5jb2xsZWN0aW9uLnRodW1ibmFpbFVybDtcbiAgICAgIHRoaXMuY2FyZFRpdGxlID0gdGhpcy5jb2xsZWN0aW9uLm5hbWU7XG4gICAgICB0aGlzLml0ZW1DdCA9IHRoaXMuY29sbGVjdGlvbi5yZWNvcmRDb3VudDtcbiAgICAgIHRoaXMuaHJlZiA9IHRoaXMuY29sbGVjdGlvblsnX2lkJ107XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZGFtcy1jb2xsZWN0aW9uLWNhcmQnLCBEYW1zQ29sbGVjdGlvbkNhcmQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLmltZy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogNzUlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1hZ2VzL2xvZ29zL2xvZ28td2hpdGUtNTEyLnBuZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2stMjApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIH1cbiAgLmltZy1jb250YWluZXIgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICAuaGVhZCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xuICB9XG4gIC5jb250YWluZXI6aG92ZXIgLmhlYWQsIC5jb250YWluZXI6Zm9jdXMgLmhlYWQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWRhbXMtc2Vjb25kYXJ5KTtcbiAgfVxuICBoNSB7XG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWg1KTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWg1KTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctaDUpO1xuICB9XG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1wKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctZXh0cmEtYm9sZCk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFnZ2llLWJsdWUtNzApO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmdvbGQtZG90cyB7XG4gICAgd2lkdGg6IDA7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIGJvcmRlci1ib3R0b206IDVweCBkb3R0ZWQgdmFyKC0tY29sb3ItZGFtcy1zZWNvbmRhcnkpO1xuICB9XG4gIC5jb250YWluZXI6aG92ZXIgLmdvbGQtZG90cywgLmNvbnRhaW5lcjpmb2N1cyAuZ29sZC1kb3RzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG48L3N0eWxlPiAgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PGEgaHJlZj1cIiR7dGhpcy5ocmVmfVwiPlxuICA8ZGl2IGNsYXNzPVwiaGVhZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAke3RoaXMuaW1nU3JjID8gaHRtbGBcbiAgICAgICAgPGltZyBzcmM9XCIke3RoaXMuaW1nU3JjfVwiPlxuICAgICAgYCA6IGh0bWxgYH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgPGg1PiR7dGhpcy5jYXJkVGl0bGV9PC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwic3VidGl0bGVcIj4ke3RoaXMuaXRlbUN0fSBpdGVtJHt0aGlzLml0ZW1DdCA9PT0gMSA/IFwiXCIgOiBcInNcIn08L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ29sZC1kb3RzXCI+PC9kaXY+XG4gIDwvZGl2PjwvYT5cblxuXG48L2Rpdj5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2RhbXMtd2F0ZXJjb2xvci1vdmVybGF5LnRwbC5qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBEYW1zV2F0ZXJjb2xvck92ZXJsYXlcbiAqIEBkZXNjcmlwdGlvbiBVSSBjb21wb25lbnQgY2xhc3MgdGhhdCBvdmVybGF5cyBhbiBpbWFnZSBvciBpY29uIG92ZXIgd2F0ZXJjb2xvciBhcnR3b3JrXG4gKiBcbiAqIEBwcm9wIHtTdHJpbmd9IHdjUGF0dGVybiAtIFdhdGVyY29sb3IgcGF0dGVybiB0byB1c2VcbiAqIEBwcm9wIHtTdHJpbmd9IHdjQ29sb3IgLSBDb2xvciBvZiBiYWNrZ3JvdW5kIHdhdGVyY29sb3JcbiAqIEBwcm9wIHtOdW1iZXJ9IHdjUm90YXRpb24gLSBSb3RhdGlvbiAoaW4gZGVncmVlcykgb2YgYmFja2dyb3VuZCB3YXRlcmNvbG9yXG4gKiBAcHJvcCB7U3RyaW5nfSBpbWdTcmMgLSBQYXRoIHRvIHRoZSBvdmVybGF5IGltYWdlXG4gKiBAcHJvcCB7U3RyaW5nfSBpY29uIC0gSXJvbiBJY29uIHRvIG92ZXJsYXkgb3ZlciB3YXRlcmNvbG9yICh1c2UgdGhpcyBPUiBpbWdTcmMpXG4gKiBAcHJvcCB7TnVtYmVyfSBvdmVybGF5V2lkdGggLSBUaGUgd2lkdGggb2YgdGhlIG92ZXJsYXllZCBhc3NldCBpbiBwaXhlbHNcbiAqIEBwcm9wIHtOdW1iZXJ9IG92ZXJsYXlIZWlnaHQgLSBUaGUgaGVpZ2h0IG9mIHRoZSBvdmVybGF5ZWQgYXNzZXQgaW4gcGl4ZWxzXG4gKiBAcHJvcCB7U3RyaW5nfSBvdmVybGF5VG9wIC0gV2hlcmUgdGhlIG92ZXJsYXllZCBhc3NldCBzaG91bGQgYmUgcGxhY2VkIG9uIHRoZSBZIGF4aXNcbiAqIEBwcm9wIHtTdHJpbmd9IG92ZXJsYXlMZWZ0IC0gV2hlcmUgdGhlIG92ZXJsYXllZCBhc3NldCBzaG91bGQgYmUgcGxhY2VkIG9uIHRoZSBYIGF4aXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFtc1dhdGVyY29sb3JPdmVybGF5IGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3Y1BhdHRlcm46IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJ3Yy1wYXR0ZXJuXCJ9LFxuICAgICAgd2NDb2xvcjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcIndjLWNvbG9yXCJ9LFxuICAgICAgd2NSb3RhdGlvbjoge3R5cGU6IE51bWJlciwgYXR0cmlidXRlOiBcIndjLXJvdGF0aW9uXCJ9LFxuICAgICAgb3ZlcmxheVdpZHRoOiB7dHlwZTogTnVtYmVyLCBhdHRyaWJ1dGU6IFwib3ZlcmxheS13aWR0aFwifSxcbiAgICAgIG92ZXJsYXlIZWlnaHQ6IHt0eXBlOiBOdW1iZXIsIGF0dHJpYnV0ZTogXCJvdmVybGF5LWhlaWdodFwifSxcbiAgICAgIGltZ1NyYzoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImltZy1zcmNcIn0sXG4gICAgICBpbWdQb3NpdGlvbjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImltZy1wb3NpdGlvblwifSxcbiAgICAgIG92ZXJsYXlUb3A6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJvdmVybGF5LXRvcFwifSxcbiAgICAgIG92ZXJsYXlMZWZ0OiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwib3ZlcmxheS1sZWZ0XCJ9LFxuICAgICAgaWNvbjoge3R5cGU6IFN0cmluZ31cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2NQYXR0ZXJuID0gXCJcIjtcbiAgICB0aGlzLndjQ29sb3IgPSBcIlwiO1xuICAgIHRoaXMud2NSb3RhdGlvbiA9IDA7XG4gICAgdGhpcy5vdmVybGF5V2lkdGggPSAxMDA7XG4gICAgdGhpcy5vdmVybGF5SGVpZ2h0ID0gMTAwO1xuICAgIHRoaXMuaW1nU3JjID0gXCJcIjtcbiAgICB0aGlzLm92ZXJsYXlUb3AgPSBcIlwiO1xuICAgIHRoaXMub3ZlcmxheUxlZnQgPSBcIlwiO1xuICAgIHRoaXMuaW1nUG9zaXRpb24gPSBcImNlbnRlciBjZW50ZXJcIjtcbiAgICB0aGlzLmljb24gPSBcIlwiO1xuICAgIHRoaXMuaWNvbkNvbG9yID0gXCIjZmZmZmZmXCI7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRJbWdTdHlsZXNcbiAgICogQGRlc2NyaXB0aW9uIENvbnN0cnVjdHMgc3R5bGVzIGZvciB0aGUgb3ZlcmxheSBpbWFnZS4gQm91bmQgdG8gJy5pbWctY29udGFpbmVyJ1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0SW1nU3R5bGVzKCl7XG4gICAgaWYgKCAhdGhpcy5pbWdTcmMgKSByZXR1cm4ge307XG4gICAgbGV0IHN0eWxlcyA9IHtcbiAgICAgIHdpZHRoOiBgJHt0aGlzLm92ZXJsYXlXaWR0aH1weGAsXG4gICAgICBoZWlnaHQ6IGAke3RoaXMub3ZlcmxheUhlaWdodH1weGAsXG4gICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGB1cmwoJHt0aGlzLmltZ1NyY30pYCxcbiAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogdGhpcy5pbWdQb3NpdGlvbixcbiAgICAgIHRvcDogdGhpcy5vdmVybGF5VG9wID8gdGhpcy5vdmVybGF5VG9wIDogYGNhbGMoNTAlIC0gJHt0aGlzLm92ZXJsYXlXaWR0aC8yfXB4KWAsXG4gICAgICBsZWZ0OiB0aGlzLm92ZXJsYXlMZWZ0ID8gdGhpcy5vdmVybGF5TGVmdCA6IGBjYWxjKDUwJSAtICR7dGhpcy5vdmVybGF5SGVpZ2h0LzJ9cHgpYFxuICAgIH07XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldEljb25TdHlsZXNcbiAgICogQGRlc2NyaXB0aW9uIENvbnN0cnVjdHMgc3R5bGVzIGZvciB0aGUgb3ZlcmxheSBpY29uLiBCb3VuZCB0byBpcm9uLWljb25cbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGdldEljb25TdHlsZXMoKXtcbiAgICBpZiAoICF0aGlzLmljb24gKSByZXR1cm4ge307XG4gICAgbGV0IHN0eWxlcyA9IHtcbiAgICAgIHdpZHRoOiBgJHt0aGlzLm92ZXJsYXlXaWR0aH1weGAsXG4gICAgICBoZWlnaHQ6IGAke3RoaXMub3ZlcmxheUhlaWdodH1weGAsXG4gICAgICB0b3A6IHRoaXMub3ZlcmxheVRvcCA/IHRoaXMub3ZlcmxheVRvcCA6IGBjYWxjKDUwJSAtICR7dGhpcy5vdmVybGF5V2lkdGgvMn1weClgLFxuICAgICAgbGVmdDogdGhpcy5vdmVybGF5TGVmdCA/IHRoaXMub3ZlcmxheUxlZnQgOiBgY2FsYyg1MCUgLSAke3RoaXMub3ZlcmxheUhlaWdodC8yfXB4KWAsXG4gICAgICBjb2xvcjogdGhpcy5pY29uQ29sb3JcbiAgICB9O1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RhbXMtd2F0ZXJjb2xvci1vdmVybGF5JywgRGFtc1dhdGVyY29sb3JPdmVybGF5KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbnMvaXJvbi1pY29uc1wiO1xuaW1wb3J0ICcuL2RhbXMtd2F0ZXJjb2xvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5pbWctY29udGFpbmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgaXJvbi1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbjwvc3R5bGU+XG48ZGFtcy13YXRlcmNvbG9yXG4gIHJvdGF0ZT1cIiR7dGhpcy53Y1JvdGF0aW9ufVwiXG4gIGNvbG9yPVwiJHt0aGlzLndjQ29sb3J9XCJcbiAgc3JjLWZpbGUtcHJlZml4PVwiJHt0aGlzLndjUGF0dGVybn1cIj5cbjwvZGFtcy13YXRlcmNvbG9yPlxuJHt0aGlzLmltZ1NyYyA/IGh0bWxgXG4gIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCIgc3R5bGU9XCIke3N0eWxlTWFwKHRoaXMuZ2V0SW1nU3R5bGVzKCkpfVwiPjwvZGl2PlxuYCA6IGh0bWxgYH1cbiR7dGhpcy5pY29uID8gaHRtbGBcbiAgPGlyb24taWNvbiBpY29uPVwiJHt0aGlzLmljb259XCIgc3R5bGU9XCIke3N0eWxlTWFwKHRoaXMuZ2V0SWNvblN0eWxlcygpKX1cIj48L2lyb24taWNvbj5cbmAgOiBodG1sYGB9XG5cblxuYDt9IiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vZGFtcy13YXRlcmNvbG9yLnRwbC5qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBEYW1zV2F0ZXJjb2xvclxuICogQGRlc2NyaXB0aW9uIFVJIGNvbXBvbmVudCBjbGFzcyBmb3IgZGlzcGxheWluZyBkZWNvcmF0aXZlIHdhdGVyY29sb3IgaW1hZ2VzXG4gKiBAcHJvcCB7U3RyaW5nfSBzcmNEaXIgLSBTZXJ2ZXIgZGlyZWN0b3J5IGNvbnRhaW5pbmcgd2F0ZXJjb2xvciBhc3NldHNcbiAqIEBwcm9wIHtTdHJpbmd9IHNyY0ZpbGVQcmVmaXggLSBUaGUgcmVxdWVzdGVkIHdhdGVyY29sb3IgcGF0dGVyblxuICogQHByb3Age1N0cmluZ30gc3JjRXh0IC0gVGhlIHdhdGVyY29sb3IgaW1hZ2UgZXh0ZW5zaW9uIHR5cGVcbiAqIEBwcm9wIHtTdHJpbmd9IGNvbG9yIC0gVGhlIHdhdGVyY29sb3IgaW1hZ2UuIFNlZSBDU1MgY3VzdG9tIHZhcmlhYmxlcyBmb3IgYWNjZXB0ZWQgdmFsdWVzXG4gKiBAcHJvcCB7TnVtYmVyfSByb3RhdGUgLSBEZWdyZWUgdG8gcm90YXRlIHdhdGVyY29sb3JcbiAqIEBwcm9wIHtTdHJpbmd9IHdpZHRoIC0gV2F0ZXJjb2xvciB3aWR0aFxuICogQHByb3Age1N0cmluZ30gaGVpZ2h0IC0gV2F0ZXJjb2xvciBoZWlnaHRcbiAqIEBwcm9wIHtTdHJpbmd9IGVsZW1lbnQgLSBUeXBlIG9mIGVsZW1lbnQgdG8gdXNlOiBpbWcgb3IgZGl2XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhbXNXYXRlcmNvbG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzcmNEaXI6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ3NyYy1kaXInfSxcbiAgICAgIHNyY0ZpbGVQcmVmaXg6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ3NyYy1maWxlLXByZWZpeCd9LFxuICAgICAgc3JjRXh0OiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdzcmMtZXh0J30sXG4gICAgICBjb2xvcjoge3R5cGU6IFN0cmluZ30sXG4gICAgICByb3RhdGU6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgd2lkdGg6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgaGVpZ2h0OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGVsZW1lbnQ6IHt0eXBlOiBTdHJpbmd9XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZhbGlkYXRlSW1nU3JjKCk7XG4gICAgdGhpcy5oZWlnaHQgPSBcIlwiO1xuICAgIHRoaXMud2lkdGggPSBcIlwiO1xuICAgIHRoaXMucm90YXRlID0gMDtcbiAgICB0aGlzLmVsZW1lbnQgPSBcImltZ1wiO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdmFsaWRhdGVJbWdTcmNcbiAgICogQGRlc2NyaXB0aW9uIFNldHMgZGVmYXVsdCB2YWx1ZSBpZiBhbnkgaW1nIHNyYyBwYXRoIGNvbXBvbmVudHMgYXJlIG1pc3NpbmcuXG4gICAqL1xuICB2YWxpZGF0ZUltZ1NyYygpe1xuICAgIGxldCBwYXRoRGVmYXVsdHMgPSB7XG4gICAgICBzcmNEaXI6IFwiL2ltYWdlcy93YXRlcmNvbG9yc1wiLFxuICAgICAgc3JjRmlsZVByZWZpeDogXCJ3YXRlcmNvbG9yXCIsXG4gICAgICBzcmNFeHQ6IFwicG5nXCIsXG4gICAgICBjb2xvcjogXCJibHVlXCJcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcGF0aENvbXBvbmVudCBpbiBwYXRoRGVmYXVsdHMpIHtcbiAgICAgIGlmICghdGhpc1twYXRoQ29tcG9uZW50XSkgdGhpc1twYXRoQ29tcG9uZW50XSA9IHBhdGhEZWZhdWx0c1twYXRoQ29tcG9uZW50XTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRJbWdQYXRoXG4gICAqIEBkZXNjcmlwdGlvbiBDb25zdHJ1Y3RzIGltYWdlIHNyYyBhdHRyaWJ1dGUgZm9yIHdhdGVyY29sb3JcbiAgICogQHBhcmFtIHJlc29sdXRpb24gLSBJbWFnZSByZXNvbHV0aW9uOiB4LWRlc2NyaXB0b3JzXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBnZXRJbWdTcmMocmVzb2x1dGlvbj1cIjF4XCIpIHtcbiAgICB0aGlzLnZhbGlkYXRlSW1nU3JjKCk7XG4gICAgbGV0IHBhdGggPSBgJHt0aGlzLnNyY0Rpcn0vJHt0aGlzLnNyY0ZpbGVQcmVmaXh9LSR7dGhpcy5jb2xvcn1gO1xuICAgIGlmIChyZXNvbHV0aW9uICYmIHJlc29sdXRpb24gIT09IFwiMXhcIikgcGF0aCArPSBgLSR7cmVzb2x1dGlvbn1gO1xuICAgIHBhdGggKz0gYC4ke3RoaXMuc3JjRXh0fWA7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRJbWdTcmNTZXRcbiAgICogQGRlc2NyaXB0aW9uIENvbnN0cnVjdHMgdGhlIGltZyBzcmNzZXQgYXR0cmlidXRlIGZvciB3YXRlciBjb2xvclxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0SW1nU3JjU2V0KCl7XG4gICAgcmV0dXJuIGAke3RoaXMuZ2V0SW1nU3JjKCl9LCAke3RoaXMuZ2V0SW1nU3JjKCcyeCcpfSAyeGA7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRJbWdTdHlsZXNcbiAgICogQGRlc2NyaXB0aW9uIENvbnN0cnVjdHMgaW5saW5lIHN0eWxlcyBmb3Igd2F0ZXJjb2xvciBpbWcgZWxlbWVudFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0SW1nU3R5bGVzKCkge1xuICAgIGxldCBzdHlsZXMgPSB7fTtcbiAgICBzdHlsZXMudHJhbnNmb3JtID0gYHJvdGF0ZSgke3RoaXMucm90YXRlfWRlZylgO1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRCZ0ltZ1N0eWxlc1xuICAgKiBAZGVzY3JpcHRpb24gQ29uc3RydWN0cyBpbmxpbmUgc3R5bGVzIGZvciB3YXRlcmNvbG9yIGJhY2tncm91bmQtaW1hZ2UgZGl2XG4gICAqIFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0QmdJbWdTdHlsZXMoKXtcbiAgICBsZXQgc3R5bGVzID0ge1xuICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IGB1cmwoJHt0aGlzLmdldEltZ1NyYygpfSlgXG4gICAgfTtcbiAgICBpZiAodGhpcy5yb3RhdGUpIHN0eWxlcy50cmFuc2Zvcm0gPSBgcm90YXRlKCR7dGhpcy5yb3RhdGV9ZGVnKWA7XG4gICAgLy9pZiAodGhpcy53aWR0aCkgc3R5bGVzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAvL2lmICh0aGlzLmhlaWdodCkgc3R5bGVzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RhbXMtd2F0ZXJjb2xvcicsIERhbXNXYXRlcmNvbG9yKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIC5iZy1pbWcge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG48L3N0eWxlPiBcbiR7dGhpcy5lbGVtZW50ID09PSAnaW1nJyA/IGh0bWxgXG4gIDxpbWcgXG4gICAgc3JjPVwiJHt0aGlzLmdldEltZ1NyYygpfVwiIFxuICAgIHNyY3NldD1cIiR7dGhpcy5nZXRJbWdTcmNTZXQoKX1cIlxuICAgIGhlaWdodD1cIiR7dGhpcy5oZWlnaHR9XCJcbiAgICB3aWR0aD1cIiR7dGhpcy53aWR0aH1cIlxuICAgIGFsdD1cIlwiIFxuICAgIHN0eWxlPVwiJHtzdHlsZU1hcCh0aGlzLmdldEltZ1N0eWxlcygpKX1cIj5cbmAgOiBodG1sYFxuICA8ZGl2IGNsYXNzPVwiYmctaW1nXCIgc3R5bGU9XCIke3N0eWxlTWFwKHRoaXMuZ2V0QmdJbWdTdHlsZXMoKSl9XCI+PC9kaXY+XG5gfVxuXG5cbmA7fSJdLCJzb3VyY2VSb290IjoiIn0=