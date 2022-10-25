(self["webpackChunk"] = self["webpackChunk"] || []).push([["page-home"],{

/***/ "./public/elements/utils/app-collection-card.html":
/*!********************************************************!*\
  !*** ./public/elements/utils/app-collection-card.html ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<style>\n  :host {\n    display: inline-block;\n    margin: 15px;\n    outline : 0;\n    height: 320px;\n    width: 320px;\n  }\n\n  :host(:hover), :host(:focus)  {\n    cursor: pointer;\n    margin: 13px;\n    border: 2px solid var(--default-secondary-color);\n  }\n\n  .img.defaultImage {\n    background-size: 65%;\n  }\n\n  .img {\n    height: 320px;\n    width: 320px;\n    position: relative;\n    background-image: url('/images/logos/logo-white-512.png'); /* fallback */\n    background-color: var(--light-background-color);\n    background-size: cover; /* needs to be 65% */\n    background-repeat: no-repeat;\n    background-position: center center;    \n  }\n\n  .img > div  {\n    padding: 15px;\n    position: absolute;\n    left: 0;\n    right: 25px;\n    bottom: 25px;\n    \n    color: var(--default-secondary-color);\n    font-weight: var(--fw-bold);\n\n    background-color: rgba(0, 38, 85, .8);      \n  }\n</style>\n\n<div \n  id=\"img\"\n  class=\"img\" \n  role=\"img\" \n  aria-label=\"[[collection.name]]\">\n  <div>\n    <div>[[collection.name]]</div>\n    <div>[[collection.recordCount]] items</div>\n  </div>\n</div>\n";

/***/ }),

/***/ "./public/elements/components/cards/dams-collection-card.js":
/*!******************************************************************!*\
  !*** ./public/elements/components/cards/dams-collection-card.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DamsCollectionCard)
/* harmony export */ });
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
class DamsCollectionCard extends lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement {

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
    if ( props.has('collection') && this.collection['@id'] ) {
      if ( this.collection.associatedMedia ) {
        this.imgSrc = this.collection.thumbnailUrl ? this.collection.thumbnailUrl : this.collection.associatedMedia.thumbnailUrl;
        this.cardTitle = this.collection.label ? this.collection.label : this.collection.associatedMedia.name;
        this.itemCt = this.collection.associatedMedia.recordCount;
        this.href = this.collection.associatedMedia['@id'];
      } else {
        this.imgSrc = this.collection.thumbnailUrl;
        this.cardTitle = this.collection.name;
        this.itemCt = this.collection.recordCount;
        this.href = this.collection['@id'];
      }

    }
  }
}

customElements.define('dams-collection-card', DamsCollectionCard);


/***/ }),

/***/ "./public/elements/components/cards/dams-collection-card.tpl.js":
/*!**********************************************************************!*\
  !*** ./public/elements/components/cards/dams-collection-card.tpl.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/style-map */ "./public/node_modules/lit-html/directives/style-map.js");



function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`

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
      ${this.imgSrc ? lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
        <img src="${this.imgSrc}">
      ` : lit_element__WEBPACK_IMPORTED_MODULE_0__.html``}
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

/***/ "./public/elements/components/graphics/dams-hero.js":
/*!**********************************************************!*\
  !*** ./public/elements/components/graphics/dams-hero.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DamsHero)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _dams_hero_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dams-hero.tpl.js */ "./public/elements/components/graphics/dams-hero.tpl.js");
/* harmony import */ var _dams_watercolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dams-watercolor */ "./public/elements/components/graphics/dams-watercolor.js");





/**
 * @class DamsHero
 * @description UI component for displaying a hero image
 * @prop {Array} srcOptions - Set of image sources to randomly display
 * @prop {String} src - Fallback background image source
 * @prop {String} watercolor - Watercolor type
 */
class DamsHero extends lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement {

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
    this.render = _dams_hero_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
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


/***/ }),

/***/ "./public/elements/components/graphics/dams-hero.tpl.js":
/*!**************************************************************!*\
  !*** ./public/elements/components/graphics/dams-hero.tpl.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/style-map */ "./public/node_modules/lit-html/directives/style-map.js");



function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`

<style>
  :host {
    display: block;
  }
  .container {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--color-white);
  }
  ::slotted(*) {
    color: var(--color-white) !important;
  }
  dams-watercolor {
    display: block;
    height: 80px;
  }
  @media (min-width: 767px) {
    dams-watercolor {
      height: 120px;
    }
  }
  @media (min-width: 1060px) {
    dams-watercolor {
      height: 150px;
    }
  }
  @media (min-width: 1601px) {
    dams-watercolor {
      height: 200px;
    }
  }
</style>
<div class="container" style="${(0,lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__.styleMap)(this.getContainerStyles())}">
  <slot></slot>
  ${this.watercolor ? lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
    <dams-watercolor 
      element="div"
      src-file-prefix="${this.watercolor.split("-")[0]}"
      color="${this.watercolor.split("-")[1]}">
    </dams-watercolor>
  `: lit_element__WEBPACK_IMPORTED_MODULE_0__.html``}
</div>

`;}

/***/ }),

/***/ "./public/elements/components/sections/dams-highlighted-collection.js":
/*!****************************************************************************!*\
  !*** ./public/elements/components/sections/dams-highlighted-collection.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DamsHighlightedCollection)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _dams_highlighted_collection_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dams-highlighted-collection.tpl.js */ "./public/elements/components/sections/dams-highlighted-collection.tpl.js");



/**
 * @class DamsHighlightedCollection
 * @description Homepage UI component class for displaying a page section higlighting a collection.
 * 
 * @prop {Object} collection - A featured collection from the FcAppConfigModel. 
 * @prop {Boolean} imageRight - Should the image be on the right or left?
 */
class DamsHighlightedCollection extends lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement {

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
    this.render = _dams_highlighted_collection_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
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


/***/ }),

/***/ "./public/elements/components/sections/dams-highlighted-collection.tpl.js":
/*!********************************************************************************!*\
  !*** ./public/elements/components/sections/dams-highlighted-collection.tpl.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");



function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`

<style>
  :host {
    display: block;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .img-container {
    position: relative;
    padding-top: 75%;
    width: 100%;
    background-image: url(/images/logos/logo-white-512.png);
    background-color: var(--color-black-20);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .img-flex {
    flex-grow: 1;
  }
  .img-container img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .text-container {
    flex-grow: 1;
    align-self: flex-start;
  }
  .title {
    color: var(--color-h3);
    font-size: var(--fs-h3);
    font-weight: var(--fw-h3);
    margin-bottom: 5px;
    margin-top: 40px;
  }
  .subtitle {
    color: var(--color-h5);
    font-size: var(--fs-h5);
    font-weight: var(--fw-h5);
    margin-bottom: 20px;
  }
  .description {
    color: var(--color-p);
    font-size: var(--fs-p);
    font-weight: var(--fw-p);
    margin-bottom: 40px;
  }
  .divider {
    width: 0;
  }
  @media (min-width: 767px) {
    .container {
      flex-direction: row;
    }
    .container.image-right {
      flex-direction: row-reverse;
    }
    .img-flex {
      flex-grow: unset;
      width: calc(50% - 20px);
      min-width: calc(50% - 20px);
    }
    .divider {
      width: 40px;
      min-width: 40px;
    }
    .title {
      margin-top: 0;
    }
    .text-container {
      align-self: center;
    }
  }

  @media (min-width: 1060px) {
    .img-flex {
      width: calc(50% - 50px);
      min-width: calc(50% - 50px);
    }
    .divider {
      width: 100px;
      min-width: 100px;
    }
  }

  @media (min-width: 1601px) {

  }
</style>  
<div class="${ (0,lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__.classMap)(this.getContainerClasses()) }">

  <div class="img-flex">
    <div class="img-container">
      ${this._imgSrc ? lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
        <img src="${this._imgSrc}">
      ` : lit_element__WEBPACK_IMPORTED_MODULE_0__.html``}
    </div>
  </div>
  <div class="divider"></div>
  <div class="text-container">
    <div class="title" role="heading" aria-level="2">${this._collectionTitle}</div>
    <div class="subtitle">${this._itemCt} item${this._itemCt === 1 ? "" : "s"}</div>
    <div class="description">${this._collectionDesc}</div>
    <a href="${this._href}">Placeholder for button</a>
  </div>
</div>
`;}

/***/ }),

/***/ "./public/elements/pages/home/app-home.js":
/*!************************************************!*\
  !*** ./public/elements/pages/home/app-home.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _ucd_lib_fin_search_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/fin-search-box */ "./public/node_modules/@ucd-lib/fin-search-box/fin-search-box.js");
/* harmony import */ var _utils_app_collection_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/app-collection-card */ "./public/elements/utils/app-collection-card.js");
/* harmony import */ var _polymer_iron_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-icons */ "./public/node_modules/@polymer/iron-icons/iron-icons.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icon */ "./public/elements/components/icon.js");
/* harmony import */ var _components_search_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/search-box */ "./public/elements/components/search-box.js");
/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/nav-bar */ "./public/elements/components/nav-bar.js");
/* harmony import */ var _components_filterButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/filterButton */ "./public/elements/components/filterButton.js");
/* harmony import */ var _components_graphics_dams_watercolor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/graphics/dams-watercolor */ "./public/elements/components/graphics/dams-watercolor.js");
/* harmony import */ var _components_graphics_dams_watercolor_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/graphics/dams-watercolor-overlay */ "./public/elements/components/graphics/dams-watercolor-overlay.js");
/* harmony import */ var _components_cards_dams_collection_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/cards/dams-collection-card */ "./public/elements/components/cards/dams-collection-card.js");
/* harmony import */ var _components_graphics_dams_hero__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/graphics/dams-hero */ "./public/elements/components/graphics/dams-hero.js");
/* harmony import */ var _components_sections_dams_highlighted_collection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/sections/dams-highlighted-collection */ "./public/elements/components/sections/dams-highlighted-collection.js");
/* harmony import */ var _app_home_tpl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-home.tpl.js */ "./public/elements/pages/home/app-home.tpl.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../interfaces/RecordInterface */ "./public/elements/interfaces/RecordInterface.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../interfaces/AppStateInterface */ "./public/elements/interfaces/AppStateInterface.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../interfaces/CollectionInterface */ "./public/elements/interfaces/CollectionInterface.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_16__);




















 



/**
 * @class AppHome
 * @description home page is rendered to the DAMS v2
 * 
 * @prop {Object[]} featuredCollections - Collections to  be displayed on homepage. Retrieved by model.
 * @prop {Number} featuredCollectionsCt - Total number of featured collections.
 * @prop {Object[]} recentCollections - Array of recently uploaded collections.
 * @prop {Boolean} showCollectionGroup - Displays the featured multi-collection section.
 * @prop {Object} textTrio - ApplicationTextContainer for the collection group.
 * @prop {Object} heroImgOptions - Data options for the hero image (src, collection name, etc)
 * @prop {Object} heroImgCurrent - The currently displayed hero image.
 */
class AppHome extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(EventInterface, (_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_14___default()), (_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_15___default()), (_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_16___default())) {
  
  static get properties() {
    return {
      featuredCollections: {type : Array},
      featuredCollectionsCt: {type: Number},
      recentCollections: {type: Array},
      showCollectionGroup: {type: Boolean},
      textTrio: {type: Object},
      heroImgOptions: {type: Object},
      heroImgCurrent: {type: Object}
    };
  }

  constructor() {
    super();
    this.render = _app_home_tpl_js__WEBPACK_IMPORTED_MODULE_13__["default"].bind(this);
    this.active = true;
    this.featuredCollections = [];
    this.featuredCollectionsCt = 0;
    this.showCollectionGroup = false;
    this.recentCollections = [];
    this.textTrio = {};
    this.heroImgOptions = {};
    this.heroImgCurrent = {};
    this._injectModel('FcAppConfigModel');
    this._injectModel('CollectionModel');
  }


  /**
   * @method firstUpdated
   * @description Lit lifecycle method called when element is first updated
   */
  async firstUpdated() {
    
    // Get featured collections
    this.featuredCollections = this.FcAppConfigModel.getFeaturedCollections();
    this.featuredCollectionsCt = this.featuredCollections.length;
    let groupText = this.FcAppConfigModel.getAppText('hp-trio');
    if ( groupText ) this.textTrio = groupText;
    if ( this.featuredCollectionsCt > 1 && groupText ) this.showCollectionGroup = true;

    // Get recent collections
    let d = await this.CollectionModel.getRecentCollections();
    if ( d.response.ok && Array.isArray(APP_CONFIG.collections) ) {
      d.body.results.forEach(item => {
        let collectionData = APP_CONFIG.collections.find(c => c['@id'] === item['@id']);
        if ( collectionData ) this.recentCollections.push(collectionData);
      });
    }

    // Get hero image options
    this.heroImgOptions = this.FcAppConfigModel.getHomepageHeroOptions();


    this.requestUpdate();
    
  }

  /**
   * @method _onAppStateUpdate
   * @description on the App update, the state is determined and by checking
   * the location
   * 
   * @param {Object} e 
   */
  _onAppStateUpdate(e) {
    if( e.location.hash === 'collections' ) {
      setTimeout(() => {
        let ele = this.shadowRoot.querySelector('#collections-home');
        if( ele ) ele.scrollIntoView();
      }, 25);
    }
  }

  /**
   * @method _onHeroChange
   * @description Listener attached to <dams-hero> image change
   * @param {CustomEvent} e 
   */
  _onHeroChange(e) {
    let img = e.target._selectedSrc;
    if ( !img ) return;
    this.heroImgCurrent = this.heroImgOptions[img];

  }

  /**
   * @method _onSearch
   * @description called from the search box button is clicked or
   * the enter key is hit.  set the text filter
   * @param {Object} e
   */
  _onSearch(e) {

    let searchDoc = this._getEmptySearchDocument();
    this._setTextFilter(searchDoc, e.detail);
    this.RecordModel.setSearchLocation(searchDoc);
  }

  /**
   * @method _onCollectionClicked
   * @description called when collection img on home page is clicked 
   * @param {Object} e
   */
  _onCollectionClicked(e) {
    if( e.type === 'keyup' && e.which !== 13 ) return;
    let id = e.currentTarget.getAttribute('data-id');
    this._onCollectionSelected(id);
  }

  /**
   * @method _onCollectionSelected
   * @description filter based on a collection using short ids.
   * @param {String} id
   * 
   */
  _onCollectionSelected(id) {
    this._setWindowLocation(id);
  }
  
}

customElements.define('app-home', AppHome);

/***/ }),

/***/ "./public/elements/pages/home/app-home.tpl.js":
/*!****************************************************!*\
  !*** ./public/elements/pages/home/app-home.tpl.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils_shared_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/shared-html */ "./public/elements/utils/shared-html.js");
/* harmony import */ var _styles_shared_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/shared-styles */ "./public/elements/styles/shared-styles.js");





function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
<style>
  ${_styles_shared_styles__WEBPACK_IMPORTED_MODULE_2__.sharedStyles}
  :host {
    display: block;
    position: relative;
    background: var(--super-light-background-color);

  }
  a {
    text-decoration: none;
  }
  input {
    padding: 15px;
    display: block;
    width: 90%;
    border: 0;
  }

  .about-link-icon {
    position: absolute;
    z-index: 5;    
    top: 25px;
    right: 25px;
  }

  .about-link-icon > iron-icon {
    height: 30px;
    width: 30px;
  }
  .container {    
    padding: 25px 10px;
    background: white;
  }

  .search-box {
    z-index: 5;
    color: var(--inverse-text-color);    
  }

  .search-box .main {
    padding: 20px;
    background-color: rgba(0, 38, 85, .8);    
  }

  .search-box .main h1 {
    margin: 5px 0;
    line-height: 2.0rem;
  }

  .search-box .footer {  
    padding: 10px 20px;
    color: white;
    font-size: 0.8rem;
    font-style: italic;
    font-weight: normal;
    line-height: 1.0rem;
    background-color: rgba(51, 83, 121, .8);
  }

  .search-box .footer a {
    color: var(--default-secondary-color);
  }

  .featured-collections {
    background-color: var(--color-aggie-blue-20);
    padding: var(--spacing-md) 0;
  }

  .featured-collections h1 {
    text-align: center;
    color: var(--color-aggie-blue);
  }

  .featured-collections .card-grid {
    margin: 0 auto;
    padding: 20px 0;
  }

  .card-grid {
    max-width: var(--max-width);
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: var(--spacing-default);
  }


  iron-icon.search-icon {
    color: var(--default-primary-color);
  }

  iron-icon.info {
    fill: white;
  }

  #sample {
    background: linear-gradient(0deg, rgba(111,207,235,0.8), rgba(2, 40, 81, 0.8) 100%);
    background-size: cover;
    background-position: center;
    height: auto;
    padding:2rem 4rem 0 4rem;

  }

  #options {
    height: 150px;
    background-color:white;
    width: auto;
    padding: 2rem 4rem;
    vertical-align: middle;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #option{
    display: inline-block;
  }

  #top-header{
    display: inline-block;
    width: 100%;
  }
  #subtext{
    color:white;
    text-decoration: underline;
  }
  #watercolor{
    background-color:transparent;
    height: 8rem;
    margin-left:0px;
  }
  .about{
    text-align: center;
    background-color: var(--color-aggie-blue-40);
  }
  section {
    padding: 40px;
  }
  
  .featured-grid-container {
    display: grid;
    grid-template-columns: 40% 60%;
    background-color: transparent;
    padding: 10px;
  }
  .featured-grid-item {
    padding: 20px;
    font-size: 30px;
    text-align:left;
    
  }
  .about-grid-container {
    display: grid;
    grid-template-columns: 55% 45%;
    background-color: transparent;
    padding: 10px;
  }
  .about-grid-item {
    padding: 20px;
    font-size: 30px;
    
  }
  .collection-grid-container {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    background-color: transparent;
    padding: 10px;
  }
  .collection-grid-item {
    padding: 20px;
    font-size: 30px;
  }
  .content {
    background-color:pink;
    margin:20px;
    width:fixed;
    padding: 0px 60px;
    text-align: left;
  }
  
  /* STYLES BELOW ARE ACTUALLY USED. NEED TO AUDIT ANYTHING ABOVE */
  [hidden] {
    display: none;
  }
  .hero-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 20px;
  }
  .hero-top-left img {
    height: 24px;
  }

  .hero-top-right {
    display: inline-flex;
    align-items: center;
    font-weight: var(--fw-extrabold);
    font-size: .82rem;
  }
  .hero-top-right a {
    color: var(--color-white);
  }
  .hero-top-right a:hover {
    color: var(--color-a-hover);
  }
  .hero-top-right .dot {
    margin: 0 20px;
    width: 8px;
    height: 8px;
    min-width: 8px;
    min-height: 8px;
  }
  .hero-main h1 {
    margin-bottom: 20px;
  }
  .hero-main .sub-heading {
    font-weight: var(--fw-p);
    margin-bottom: 40px;
  }
  .hero-main .sub-heading a {
    color: var(--color-dams-secondary);
  }
  .hero-main .sub-heading a:hover, .hero-main .sub-heading a:focus {
    color: var(--color-a-hover);
  }
  .hero-main app-search-box {
    max-width: 400px;
    margin-bottom: 20px;
  }
  .hero-main .sub-search {
    color: var(--color-white);
    font-weight: var(--fw-extrabold);
    font-size: .82rem;
    margin-bottom: 60px;
  }
  .hero-main .sub-search a {
    color: var(--color-white);
    text-decoration: underline;
  }
  .browse-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    padding-top: 40px;
    padding-bottom: 20px;
    background-color: var(--color-white);
  }
  .browse-buttons > div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .browse-buttons app-icons {
    margin: 0 10px;
  }
  .recent{
    background-color: var(--color-white);
  }
  .recent h2 {
    margin-bottom: 0;
    text-align: center;
    margin-top: 0;
  }
  .card-trio {
    display: grid;
    grid-template-columns: auto;
    grid-gap: var(--spacing-sm);
  }
  .card-trio dams-collection-card {
    margin-bottom: var(--spacing-default);
  }
  .featured {
    background-color: var(--color-aggie-blue-20);
  }
  .featured h1 {
    margin-bottom: var(--spacing-default);
    text-align: center;
    margin-top: 0;
  }
  .featured dams-watercolor-overlay {
    height: 100px;
  }
  dams-highlighted-collection {
    margin: 40px 0;
  }
  .fg-header {
    display: grid;
    grid-gap: var(--spacing-default);
    grid-template-columns: auto;
    margin-bottom: var(--spacing-sm);
  }
  .fg-header h3 {
    margin: 0;
  }
  .featured-more {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--spacing-default) 0;
  }
  @media (min-width: 480px) {
    .featured-group .card-trio {
      margin-right: var(--spacing-sm);
      margin-left: var(--spacing-sm);
    }
  }
  @media (min-width: 767px) {
    .hero-top {
      margin-bottom: 60px;
      margin-top: 40px;
    }
    .hero-top-left img {
      height: 30px;
    }
    .card-trio {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .fg-header {
      grid-template-columns: 33% 66%;
    }
    .featured-group .card-trio {
      margin-right: 0;
      margin-left: 0;
    }
    .fg-header h3 {
      text-align: center;
    }
  }

  @media (min-width: 1060px) {
    .hero-top {
      margin-bottom: 80px;
      margin-top: 40px;
    }
    .hero-main .sub-search {
      margin-bottom: 80px;
    }
  }

  @media (min-width: 1601px) {
    .hero-top {
      margin-bottom: 200px;
      margin-top: 40px;
    }
    .hero-main .sub-search {
      margin-bottom: 150px;
    }
  }


</style>

<dams-hero .srcOptions="${Object.keys(this.heroImgOptions)}" @src-change="${this._onHeroChange}">
  <div class="hero-content">
    <div class="hero-top site-frame">
      <div class="hero-top-left"><a href="https://ucdavis.edu"><img src="/images/logos/ucdavis_logo_gold.png"></a></div>
      <div class="hero-top-right">
        <a href="/about">About</a>
        <span class="dot"></span>
        <a href="#">FAQ</a>
      </div>
    </div>
    <div class="hero-main site-frame">
      <h1 class="color-light">Digital Collections</h1>
      <div class="sub-heading h4 color-light">Explore digitized items from the <a href="">UC Davis Library</a> collections.</div>
      <app-search-box 
        id="searchBox" 
        @search="${this._onSearch}" 
        placeholder="search">
        <iron-icon icon="fin-icons:search" class="search-icon" slot="button-content"></iron-icon>
      </app-search-box>
      <div class="sub-search">
        Featured Image: <a href="${this.heroImgCurrent.itemLink}">${this.heroImgCurrent.itemName}</a> | 
        <a href="${this.heroImgCurrent.collectionLink}">${this.heroImgCurrent.collectionName}</a>
      </div>
    </div>
  </div>
</dams-hero>

<section class="browse-buttons site-frame">
  <div>
    <app-icons 
      id="option" 
      icon="iron-archive" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">Collections</div>
    </app-icons>

    <a href="/search">
      <app-icons id="option" 
        icon="iron-dashboard" 
        theme-color='secondary' 
        size-icon-svg='extralg' 
        size="extralg">
        <div slot="icon-text">All Items</div>
      </app-icons>
    </a>

    <a href="/browse/creator">
      <app-icons id="option" 
        icon="iron-account-box" 
        theme-color='secondary' 
        size-icon-svg='extralg' 
        size="extralg">
        <div slot="icon-text">Creators</div>
      </app-icons>
    </a>
  </div>
  <div>
    <a href="/browse/format">
      <app-icons id="option" 
        icon="iron-create" 
        theme-color='secondary' 
        size-icon-svg='extralg' 
        size="extralg">
        <div slot="icon-text">Formats</div>
      </app-icons>
    </a>

    <a href="/browse/subject">
      <app-icons id="option" 
        icon="fin-search" 
        theme-color='secondary' 
        size-icon-svg='extralg' 
        size="extralg">
        <div slot="icon-text">Subjects</div>
      </app-icons>
    </a>

  </div>
</section>

<section class="recent site-frame" ?hidden="${this.recentCollections.length === 0}">
  <h2>Recently Digitized<br><span class="fw-light">Collections</span></h2> 
  ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_1__["default"].headerDots() } 
  <div class="card-trio">
  ${this.recentCollections.map((collection) => 
      lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
      <dams-collection-card .collection="${collection}"></dams-collection-card>
      `
      )}
    
  </div>
</section>

${this.featuredCollectionsCt > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__.html`

  <section class="featured site-frame">
    <h1>Featured Collections</h1>
    <div style="text-align:center;">
      <dams-watercolor-overlay 
          overlay-template="stars">
      </dams-watercolor-overlay>
    </div>
    <dams-highlighted-collection .collection="${this.featuredCollections[0]}"></dams-highlighted-collection>
    <div class="featured-group" ?hidden="${!this.showCollectionGroup}">
      <div class="fg-header">
        <h3>${this.textTrio.label}</h3>
        <div>${this.textTrio.text}</div>
      </div>
      <div class="card-trio">
        ${[1,2,3].map(i => lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
          ${this.featuredCollectionsCt > i ? lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
            <dams-collection-card .collection="${this.featuredCollections[i]}"></dams-collection-card>
          ` : lit_element__WEBPACK_IMPORTED_MODULE_0__.html``}
        `)}
      </div>
      <div class="featured-more"><a href="/collections">Placeholder for button</a></div>
    </div>
  </section>

` : lit_element__WEBPACK_IMPORTED_MODULE_0__.html``}


<!--
<div id="sample">
  <div id="top-header">  
    <img style="all:unset; height: 1.5rem; " src="/images/ucd-lib-logo-white.png">
    <p style="all:unset; float:right; color:white; font-weight:var(--fw-extra-bold); float:right">About <span>&#9679;</span> FAQ</p>
  </div>

  <h1 style="color:var(--color-h1-light); margin-top:4rem; margin-bottom:1rem;" >Digital Collections</h1>
  <h4 style="color:var(--color-h4-light); font-weight:var(--fw-regular); margin-top:0;" >Explore digitized items from the <a style="text-decoration:underline;color:var(--color-aggie-gold);">UC Davis Library</a> collections.</h4>

  <app-search-box 
    id="searchBox" 
    @search="${this._onSearch}" 
    placeholder="search">
    <iron-icon icon="fin-icons:search" class="search-icon" slot="button-content"></iron-icon>
  </app-search-box>

  <div style="color:white; margin-top:.75rem; margin-bottom: 2rem; font-size:.75rem;font-weight: 800;">
    Featured Image:  <a id="subtext">Annual Winter Sale 1952</a>  |  <a id="subtext">Sherry Lehmann Wine Catalogs</a>
  </div>
  <div id="watercolor"></div>
</div>
-->

<!--
<div id="options">
  <app-icons id="option" icon="iron-archive" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">Collections</div></app-icons>

  <a href="/search">
    <app-icons id="option" 
      icon="iron-dashboard" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">All Items</div>
    </app-icons>
  </a>
  
  <a href="/browse/creator">
    <app-icons id="option" 
      icon="iron-account-box" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">Creators</div>
    </app-icons>
  </a>

  <a href="/browse/format">
    <app-icons id="option" 
      icon="iron-create" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">Formats</div>
    </app-icons>
  </a>

  <a href="/browse/subject">
    <app-icons id="option" 
      icon="fin-search" 
      theme-color='secondary' 
      size-icon-svg='extralg' 
      size="extralg">
      <div slot="icon-text">Subjects</div>
    </app-icons>
  </a>
  </div>
-->

<!--
<section class="recent">
  <h2 style="margin-bottom:0;">Recently Digitized</h2> 
  <h2 style="margin-bottom:0; margin-top:0; font-weight:var(--fw-regular)">Collections</h2>
  ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_1__["default"].headerDots() }
  <div class="collection-grid-container">
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div>
    <div class="grid-item"><div class="content">d</div></div> 
  </div>

</section>
-->

<!--
<section class="about">
  <div class="about-grid-container">
    <div class="grid-item">
      <div class="content">
      </div>
    </div>
    <div class="grid-item">
      <div class="content"> 
        <h2 style="margin:0; ">About</h2>
        <h1 style="margin:0; font-weight:var(--fw-regular)">Digital Collections</h1>
        <div style="height:10px;float:left;">${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_1__["default"].headerDots() }         </div>
        <br />
        <br />

        <p style="margin:0; ">The UC Davis Digital Collections is a locally developed digital 
                              repository that was designed to store and manage the digital assets
                              of UC Davis.  These Digital Collections are intended to increase 
                              access to previously undiscoverable digital assets held by the 
                              University Library. </p>

      </div>
    </div>
  </div>
</section>
-->



`;}

/***/ }),

/***/ "./public/elements/utils/app-collection-card.js":
/*!******************************************************!*\
  !*** ./public/elements/utils/app-collection-card.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppCollectionCard)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_collection_card_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-collection-card.html */ "./public/elements/utils/app-collection-card.html");
/* harmony import */ var _app_collection_card_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_collection_card_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_intersection_observer_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/utils/intersection-observer-loader */ "./public/lib/utils/intersection-observer-loader.js");




class AppCollectionCard extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_collection_card_html__WEBPACK_IMPORTED_MODULE_1___default());
    return tag;
  }

  static get properties() {
    return {
      collection : {
        type : Object,
        value : () => ({}),
        observer : '_onCollectionChange'
      },
      tabindex : {
        type : Number,
        value : 0,
        reflectToAttribute : true
      },
    };
  }

  constructor() {
    super();
    this.shownInViewport = false;
    this.active = true;
  }

  async connectedCallback() {    
    super.connectedCallback();
    if ( this.collection.thumbnailUrl === '/images/logos/logo-white-512.png' ) {
      let cards = this.shadowRoot.querySelectorAll('.img')[0];
      cards.className += ' defaultImage';
    }

    if( !this.observer ) {
      await _lib_utils_intersection_observer_loader__WEBPACK_IMPORTED_MODULE_2__["default"].load();
      this.observer = new IntersectionObserver(
        e => this._onViewportIntersection(e), 
        {
          rootMargin: '10px', 
          threshold: 0
        }
      );
    }

    this.imageLoaded = false;
    this.observer.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer.disconnect();
  }

  _onCollectionChange() {
    if( !this.shownInViewport ) return;
    this._setBackgroundImage();
  }

  _onViewportIntersection(e) {
    if( e.length === 0 ) return;
    e = e[0];
    
    if( this.shownInViewport || !e.isIntersecting ) return;
    this.shownInViewport = true;

    this._setBackgroundImage();
  }

  _setBackgroundImage() {
    this.$.img.style.backgroundImage = `url('${this.collection.thumbnailUrl}')`;
  }
}

customElements.define('app-collection-card', AppCollectionCard);

/***/ }),

/***/ "./public/elements/utils/shared-html.js":
/*!**********************************************!*\
  !*** ./public/elements/utils/shared-html.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");


/**
 * @class SharedHtml
 * @description Lit html template strings used across the site.
 * Designed to be used with DAMS shared styles, so make sure you import those into your element
 */
class SharedHtml {

  /**
   * @method headerDots
   * @description Displays the yellow dots beneath a section header
   * @returns {TemplateResult}
   */
  headerDots(){
    return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
      <div class="header-dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    `;
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SharedHtml());

/***/ }),

/***/ "./public/lib/utils/intersection-observer-loader.js":
/*!**********************************************************!*\
  !*** ./public/lib/utils/intersection-observer-loader.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class IntersectionObserverLoader {
  async load() {
    if( window.IntersectionObserver ) return true;

    if ( this.loaded ) return true;

    if ( this.loading ) {
      await this.loading;
      return this.loaded;
    }

    this.loading = new Promise(async (resolve, reject) => {
      await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! intersection-observer */ "./public/node_modules/intersection-observer/intersection-observer.js", 23));
      resolve(true);
    });

    return this.loading;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new IntersectionObserverLoader());

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakttQzs7QUFFYztBQUNTOztBQUUzQztBQUNmLE9BQU8sNkNBQUk7QUFDWDtBQUNBLElBQUksK0RBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztB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QTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxvRkFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyw2QkFBNkI7QUFDNUU7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7QUMxQi9CO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksK0xBQTJFO0FBQ3ZGO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZ0NBQWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL2FwcC1jb2xsZWN0aW9uLWNhcmQuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jYXJkcy9kYW1zLWNvbGxlY3Rpb24tY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jYXJkcy9kYW1zLWNvbGxlY3Rpb24tY2FyZC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvZ3JhcGhpY3MvZGFtcy1oZXJvLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2dyYXBoaWNzL2RhbXMtaGVyby50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvc2VjdGlvbnMvZGFtcy1oaWdobGlnaHRlZC1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3NlY3Rpb25zL2RhbXMtaGlnaGxpZ2h0ZWQtY29sbGVjdGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hvbWUvYXBwLWhvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hvbWUvYXBwLWhvbWUudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9hcHAtY29sbGVjdGlvbi1jYXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9zaGFyZWQtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbGliL3V0aWxzL2ludGVyc2VjdGlvbi1vYnNlcnZlci1sb2FkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIG91dGxpbmUgOiAwO1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICB9XFxuXFxuICA6aG9zdCg6aG92ZXIpLCA6aG9zdCg6Zm9jdXMpICB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAxM3B4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAuaW1nLmRlZmF1bHRJbWFnZSB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNjUlO1xcbiAgfVxcblxcbiAgLmltZyB7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvbG9nb3MvbG9nby13aGl0ZS01MTIucG5nJyk7IC8qIGZhbGxiYWNrICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBuZWVkcyB0byBiZSA2NSUgKi9cXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgICAgXFxuICB9XFxuXFxuICAuaW1nID4gZGl2ICB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDI1cHg7XFxuICAgIGJvdHRvbTogMjVweDtcXG4gICAgXFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1ib2xkKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzOCwgODUsIC44KTsgICAgICBcXG4gIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgXFxuICBpZD1cXFwiaW1nXFxcIlxcbiAgY2xhc3M9XFxcImltZ1xcXCIgXFxuICByb2xlPVxcXCJpbWdcXFwiIFxcbiAgYXJpYS1sYWJlbD1cXFwiW1tjb2xsZWN0aW9uLm5hbWVdXVxcXCI+XFxuICA8ZGl2PlxcbiAgICA8ZGl2PltbY29sbGVjdGlvbi5uYW1lXV08L2Rpdj5cXG4gICAgPGRpdj5bW2NvbGxlY3Rpb24ucmVjb3JkQ291bnRdXSBpdGVtczwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vZGFtcy1jb2xsZWN0aW9uLWNhcmQudHBsLmpzXCI7XG5cbi8qKlxuICogQGNsYXNzIERhbXNDb2xsZWN0aW9uQ2FyZFxuICogQGRlc2NyaXB0aW9uIFVJIGNvbXBvbmVudCBjbGFzcyBmb3IgZGlzcGxheWluZyBhIGNvbGxlY3Rpb24gcHJldmlldyBjYXJkXG4gKiBcbiAqIEBwcm9wIHtPYmplY3R9IGNvbGxlY3Rpb24gLSBBbiBvYmplY3QgZGVzY3JpYmluZyBhIERBTVMgY29sbGVjdGlvbi4gXG4gKiBJZiB1c2VkLCBlbGVtZW50IHdpbGwgc2V0IGFsbCBzdWJzZXF1ZW50IHByb3BlcnRpZXMgd2l0aCBkYXRhIGZyb20gY29sbGVjdGlvbnMgb2JqZWN0LlxuICogQHByb3Age1N0cmluZ30gaW1nU3JjIC0gVGhlIGNvbGxlY3Rpb24gdGh1bWJuYWlsIHNyYy5cbiAqIEBwcm9wIHtTdHJpbmd9IGNhcmRUaXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgY29sbGVjdGlvbi5cbiAqIEBwcm9wIHtOdW1iZXJ9IGl0ZW1DdCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb25zLlxuICogQHByb3Age1N0cmluZ30gaHJlZiAtIExpbmsgdG8gdGhlIGNvbGxlY3Rpb24gbGFuZGluZyBwYWdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYW1zQ29sbGVjdGlvbkNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbGxlY3Rpb246IHt0eXBlOiBPYmplY3R9LFxuICAgICAgaW1nU3JjOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdpbWctc3JjJ30sXG4gICAgICBjYXJkVGl0bGU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2NhcmQtdGl0bGUnfSxcbiAgICAgIGl0ZW1DdDoge3R5cGU6IE51bWJlciwgYXR0cmlidXRlOiAnaXRlbS1jdCd9LFxuICAgICAgaHJlZjoge3R5cGU6IFN0cmluZ31cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW1nU3JjID0gXCJcIjtcbiAgICB0aGlzLmNhcmRUaXRsZSA9IFwiXCI7XG4gICAgdGhpcy5pdGVtQ3QgPSAwO1xuICAgIHRoaXMuaHJlZiA9IFwiXCI7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHVwZGF0ZWRcbiAgICogQGRlc2NyaXB0aW9uIExpdCBsaWZlY3ljbGUgbWV0aG9kIGNhbGxlZCB3aGVuIGVsZW1lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHtNYXB9IHByb3BzIC0gUHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZC5cbiAgICovXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiAoIHByb3BzLmhhcygnY29sbGVjdGlvbicpICYmIHRoaXMuY29sbGVjdGlvblsnQGlkJ10gKSB7XG4gICAgICBpZiAoIHRoaXMuY29sbGVjdGlvbi5hc3NvY2lhdGVkTWVkaWEgKSB7XG4gICAgICAgIHRoaXMuaW1nU3JjID0gdGhpcy5jb2xsZWN0aW9uLnRodW1ibmFpbFVybCA/IHRoaXMuY29sbGVjdGlvbi50aHVtYm5haWxVcmwgOiB0aGlzLmNvbGxlY3Rpb24uYXNzb2NpYXRlZE1lZGlhLnRodW1ibmFpbFVybDtcbiAgICAgICAgdGhpcy5jYXJkVGl0bGUgPSB0aGlzLmNvbGxlY3Rpb24ubGFiZWwgPyB0aGlzLmNvbGxlY3Rpb24ubGFiZWwgOiB0aGlzLmNvbGxlY3Rpb24uYXNzb2NpYXRlZE1lZGlhLm5hbWU7XG4gICAgICAgIHRoaXMuaXRlbUN0ID0gdGhpcy5jb2xsZWN0aW9uLmFzc29jaWF0ZWRNZWRpYS5yZWNvcmRDb3VudDtcbiAgICAgICAgdGhpcy5ocmVmID0gdGhpcy5jb2xsZWN0aW9uLmFzc29jaWF0ZWRNZWRpYVsnQGlkJ107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmltZ1NyYyA9IHRoaXMuY29sbGVjdGlvbi50aHVtYm5haWxVcmw7XG4gICAgICAgIHRoaXMuY2FyZFRpdGxlID0gdGhpcy5jb2xsZWN0aW9uLm5hbWU7XG4gICAgICAgIHRoaXMuaXRlbUN0ID0gdGhpcy5jb2xsZWN0aW9uLnJlY29yZENvdW50O1xuICAgICAgICB0aGlzLmhyZWYgPSB0aGlzLmNvbGxlY3Rpb25bJ0BpZCddO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZGFtcy1jb2xsZWN0aW9uLWNhcmQnLCBEYW1zQ29sbGVjdGlvbkNhcmQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLmltZy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogNzUlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1hZ2VzL2xvZ29zL2xvZ28td2hpdGUtNTEyLnBuZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2stMjApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIH1cbiAgLmltZy1jb250YWluZXIgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICAuaGVhZCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xuICB9XG4gIC5jb250YWluZXI6aG92ZXIgLmhlYWQsIC5jb250YWluZXI6Zm9jdXMgLmhlYWQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWRhbXMtc2Vjb25kYXJ5KTtcbiAgfVxuICBoNSB7XG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWg1KTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWg1KTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctaDUpO1xuICB9XG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1wKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctZXh0cmEtYm9sZCk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFnZ2llLWJsdWUtNzApO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmdvbGQtZG90cyB7XG4gICAgd2lkdGg6IDA7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIGJvcmRlci1ib3R0b206IDVweCBkb3R0ZWQgdmFyKC0tY29sb3ItZGFtcy1zZWNvbmRhcnkpO1xuICB9XG4gIC5jb250YWluZXI6aG92ZXIgLmdvbGQtZG90cywgLmNvbnRhaW5lcjpmb2N1cyAuZ29sZC1kb3RzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG48L3N0eWxlPiAgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PGEgaHJlZj1cIiR7dGhpcy5ocmVmfVwiPlxuICA8ZGl2IGNsYXNzPVwiaGVhZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAke3RoaXMuaW1nU3JjID8gaHRtbGBcbiAgICAgICAgPGltZyBzcmM9XCIke3RoaXMuaW1nU3JjfVwiPlxuICAgICAgYCA6IGh0bWxgYH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgPGg1PiR7dGhpcy5jYXJkVGl0bGV9PC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwic3VidGl0bGVcIj4ke3RoaXMuaXRlbUN0fSBpdGVtJHt0aGlzLml0ZW1DdCA9PT0gMSA/IFwiXCIgOiBcInNcIn08L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ29sZC1kb3RzXCI+PC9kaXY+XG4gIDwvZGl2PjwvYT5cblxuXG48L2Rpdj5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2RhbXMtaGVyby50cGwuanNcIjtcblxuaW1wb3J0IFwiLi9kYW1zLXdhdGVyY29sb3JcIjtcblxuLyoqXG4gKiBAY2xhc3MgRGFtc0hlcm9cbiAqIEBkZXNjcmlwdGlvbiBVSSBjb21wb25lbnQgZm9yIGRpc3BsYXlpbmcgYSBoZXJvIGltYWdlXG4gKiBAcHJvcCB7QXJyYXl9IHNyY09wdGlvbnMgLSBTZXQgb2YgaW1hZ2Ugc291cmNlcyB0byByYW5kb21seSBkaXNwbGF5XG4gKiBAcHJvcCB7U3RyaW5nfSBzcmMgLSBGYWxsYmFjayBiYWNrZ3JvdW5kIGltYWdlIHNvdXJjZVxuICogQHByb3Age1N0cmluZ30gd2F0ZXJjb2xvciAtIFdhdGVyY29sb3IgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYW1zSGVybyBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHNyY09wdGlvbnM6IHt0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcInNyYy1vcHRpb25zXCJ9LFxuICAgICAgd2F0ZXJjb2xvcjoge3R5cGU6IFN0cmluZ30sXG4gICAgICBfc2VsZWN0ZWRTcmM6IHt0eXBlOiBTdHJpbmd9XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNyYyA9IFwiXCI7XG4gICAgdGhpcy5zcmNPcHRpb25zID0gW107XG4gICAgdGhpcy5fc2VsZWN0ZWRTcmMgPSBcIlwiO1xuICAgIHRoaXMud2F0ZXJjb2xvciA9IFwiYm9yZGVyLXdoaXRlXCI7XG5cbiAgICB0aGlzLl9zcmNDaGFuZ2UgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NyYy1jaGFuZ2UnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IGltYWdlIGhhcyBiZWVuIGxvYWRlZCdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHVwZGF0ZWRcbiAgICogQGRlc2NyaXB0aW9uIExpdCBsaWZlY3lsZSBtZXRob2QgZmlyZWQgd2hlbiBlbGVtZW50IGlzIHVwZGF0ZWQuXG4gICAqIFxuICAgKiBAcGFyYW0ge01hcH0gcHJvcHMgLSBDaGFuZ2UgcHJvcGVydGllc1xuICAgKi9cbiAgdXBkYXRlZChwcm9wcyl7XG4gICAgaWYgKHByb3BzLmhhcygnc3JjT3B0aW9ucycpKSB0aGlzLl9zZXRTcmMoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc2h1ZmZsZUltYWdlXG4gICAqIEBkZXNjcmlwdGlvbiBSYW5kb21seSBkaXNwbGF5cyBhIG5ldyBoZXJvIGltYWdlLlxuICAgKiBcbiAgICogQHJldHVybnMge1N0cmluZ30gVGhlIG5ldyBpbWcgc3JjXG4gICAqL1xuICBzaHVmZmxlSW1hZ2UoKXtcbiAgICB0aGlzLl9zZXRTcmMoKTtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRTcmM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfc2V0U3JjXG4gICAqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHNyYyBwcm9wZXJ0eS5cbiAgICovXG4gIF9zZXRTcmMoKXtcbiAgICBsZXQgc3JjID0gXCJcIjtcbiAgICBsZXQgc2V0Q3QgPSB0aGlzLnNyY09wdGlvbnMubGVuZ3RoO1xuICAgIGlmICggc2V0Q3QgPT09IDAgJiYgdGhpcy5zcmMgKSB7XG4gICAgICBzcmMgPSB0aGlzLnNyYztcbiAgICB9XG4gICAgZWxzZSBpZiAoIHNldEN0ID4gMCApIHtcbiAgICAgIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogIHNldEN0KTtcbiAgICAgIHNyYyA9IHRoaXMuc3JjT3B0aW9uc1tpXTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWRTcmMgPSBzcmM7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX3NyY0NoYW5nZSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRDb250YWluZXJTdHlsZXNcbiAgICogQGRlc2NyaXB0aW9uIElubGluZSBzdHlsZXMgZm9yIGVsZW1lbnQncyBiYXNlIGNvbnRhaW5lclxuICAgKiBcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGdldENvbnRhaW5lclN0eWxlcygpe1xuICAgIGxldCBzdHlsZXMgPSB7XG4gICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd2YXIoLS1ncmFkaWVudC1hZy1wdXRhaCknXG4gICAgfTtcbiAgICBpZiAoIHRoaXMuX3NlbGVjdGVkU3JjICkgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gKz0gYCwgdXJsKCR7dGhpcy5fc2VsZWN0ZWRTcmN9KWA7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZGFtcy1oZXJvJywgRGFtc0hlcm8pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIH1cbiAgOjpzbG90dGVkKCopIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgZGFtcy13YXRlcmNvbG9yIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgZGFtcy13YXRlcmNvbG9yIHtcbiAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDYwcHgpIHtcbiAgICBkYW1zLXdhdGVyY29sb3Ige1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE2MDFweCkge1xuICAgIGRhbXMtd2F0ZXJjb2xvciB7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cIiR7c3R5bGVNYXAodGhpcy5nZXRDb250YWluZXJTdHlsZXMoKSl9XCI+XG4gIDxzbG90Pjwvc2xvdD5cbiAgJHt0aGlzLndhdGVyY29sb3IgPyBodG1sYFxuICAgIDxkYW1zLXdhdGVyY29sb3IgXG4gICAgICBlbGVtZW50PVwiZGl2XCJcbiAgICAgIHNyYy1maWxlLXByZWZpeD1cIiR7dGhpcy53YXRlcmNvbG9yLnNwbGl0KFwiLVwiKVswXX1cIlxuICAgICAgY29sb3I9XCIke3RoaXMud2F0ZXJjb2xvci5zcGxpdChcIi1cIilbMV19XCI+XG4gICAgPC9kYW1zLXdhdGVyY29sb3I+XG4gIGA6IGh0bWxgYH1cbjwvZGl2PlxuXG5gO30iLCJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9kYW1zLWhpZ2hsaWdodGVkLWNvbGxlY3Rpb24udHBsLmpzXCI7XG5cbi8qKlxuICogQGNsYXNzIERhbXNIaWdobGlnaHRlZENvbGxlY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiBIb21lcGFnZSBVSSBjb21wb25lbnQgY2xhc3MgZm9yIGRpc3BsYXlpbmcgYSBwYWdlIHNlY3Rpb24gaGlnbGlnaHRpbmcgYSBjb2xsZWN0aW9uLlxuICogXG4gKiBAcHJvcCB7T2JqZWN0fSBjb2xsZWN0aW9uIC0gQSBmZWF0dXJlZCBjb2xsZWN0aW9uIGZyb20gdGhlIEZjQXBwQ29uZmlnTW9kZWwuIFxuICogQHByb3Age0Jvb2xlYW59IGltYWdlUmlnaHQgLSBTaG91bGQgdGhlIGltYWdlIGJlIG9uIHRoZSByaWdodCBvciBsZWZ0P1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYW1zSGlnaGxpZ2h0ZWRDb2xsZWN0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xsZWN0aW9uOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGltYWdlUmlnaHQ6IHt0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6ICdpbWFnZS1yaWdodCd9LFxuICAgICAgX2NvbGxlY3Rpb25UaXRsZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnY29sbGVjdGlvbi10aXRsZSd9LFxuICAgICAgX2ltZ1NyYzoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnaW1nLXNyYyd9LFxuICAgICAgX2NvbGxlY3Rpb25EZXNjOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdjb2xsZWN0aW9uLWRlc2MnfSxcbiAgICAgIF9pdGVtQ3Q6IHt0eXBlOiBOdW1iZXIsIGF0dHJpYnV0ZTogJ2l0ZW0tY3QnfSxcbiAgICAgIF9ocmVmOiB7dHlwZTogU3RyaW5nfVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb2xsZWN0aW9uID0ge307XG4gICAgdGhpcy5pbWFnZVJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5fY29sbGVjdGlvblRpdGxlID0gXCJcIjtcbiAgICB0aGlzLl9pbWdTcmMgPSBcIlwiO1xuICAgIHRoaXMuX2NvbGxlY3Rpb25EZXNjID0gXCJcIjtcbiAgICB0aGlzLl9pdGVtQ3QgPSAwO1xuICAgIHRoaXMuX2hyZWYgPSBcIlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdXBkYXRlZFxuICAgKiBAZGVzY3JpcHRpb24gTGl0IGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIHdoZW4gZWxlbWVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0ge01hcH0gcHJvcHMgLSBQcm9wZXJ0aWVzIHRoYXQgaGF2ZSBjaGFuZ2VkLlxuICAgKi9cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIGlmICggcHJvcHMuaGFzKCdjb2xsZWN0aW9uJykgKSB7XG4gICAgICBpZiAoIHRoaXMuY29sbGVjdGlvbi5sYWJlbCApIHtcbiAgICAgICAgdGhpcy5fY29sbGVjdGlvblRpdGxlID0gdGhpcy5jb2xsZWN0aW9uLmxhYmVsO1xuICAgICAgfSBlbHNlIGlmICggdGhpcy5jb2xsZWN0aW9uLmFzc29jaWF0ZWRNZWRpYS5uYW1lICkge1xuICAgICAgICB0aGlzLl9jb2xsZWN0aW9uVGl0bGUgPSB0aGlzLmNvbGxlY3Rpb24uYXNzb2NpYXRlZE1lZGlhLm5hbWU7XG4gICAgICB9XG4gICAgICBpZiAoIHRoaXMuY29sbGVjdGlvbi5kZXNjcmlwdGlvbiApIHtcbiAgICAgICAgdGhpcy5fY29sbGVjdGlvbkRlc2MgPSB0aGlzLmNvbGxlY3Rpb24uZGVzY3JpcHRpb247XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29sbGVjdGlvbi5hc3NvY2lhdGVkTWVkaWEuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5fY29sbGVjdGlvbkRlc2MgPSB0aGlzLmNvbGxlY3Rpb24uYXNzb2NpYXRlZE1lZGlhLmRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgICAgdGhpcy5faW1nU3JjID0gdGhpcy5jb2xsZWN0aW9uLnRodW1ibmFpbFVybCA/IHRoaXMuY29sbGVjdGlvbi50aHVtYm5haWxVcmwgOiB0aGlzLmNvbGxlY3Rpb24uYXNzb2NpYXRlZE1lZGlhLnRodW1ibmFpbFVybDtcbiAgICAgIHRoaXMuX2l0ZW1DdCA9IHRoaXMuY29sbGVjdGlvbi5hc3NvY2lhdGVkTWVkaWEucmVjb3JkQ291bnQ7XG4gICAgICB0aGlzLl9ocmVmID0gdGhpcy5jb2xsZWN0aW9uLmFzc29jaWF0ZWRNZWRpYVsnQGlkJ107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0Q29udGFpbmVyQ2xhc3Nlc1xuICAgKiBAZGVzY3JpcHRpb24gR2V0cyBjbGFzc2VzIGZvciB0aGUgZWxlbWVudCBiYXNlIGNvbnRhaW5lci4gQm91bmQgdG8gdGhhdCBkaXYuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0Q29udGFpbmVyQ2xhc3Nlcygpe1xuICAgIGxldCBjbGFzc2VzID0ge1xuICAgICAgXCJjb250YWluZXJcIjogdHJ1ZSxcbiAgICAgIFwiaW1hZ2UtcmlnaHRcIjogdGhpcy5pbWFnZVJpZ2h0LFxuICAgICAgXCJpbWFnZS1sZWZ0XCI6ICF0aGlzLmltYWdlUmlnaHRcbiAgICB9O1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkYW1zLWhpZ2hsaWdodGVkLWNvbGxlY3Rpb24nLCBEYW1zSGlnaGxpZ2h0ZWRDb2xsZWN0aW9uKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmltZy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogNzUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1hZ2VzL2xvZ29zL2xvZ28td2hpdGUtNTEyLnBuZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2stMjApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIH1cbiAgLmltZy1mbGV4IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmltZy1jb250YWluZXIgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICAudGV4dC1jb250YWluZXIge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC50aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWgzKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWgzKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctaDMpO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG4gIC5zdWJ0aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWg1KTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWg1KTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctaDUpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1wKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctcCk7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuICAuZGl2aWRlciB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgICAuY29udGFpbmVyLmltYWdlLXJpZ2h0IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB9XG4gICAgLmltZy1mbGV4IHtcbiAgICAgIGZsZXgtZ3JvdzogdW5zZXQ7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgICAgIG1pbi13aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgICB9XG4gICAgLmRpdmlkZXIge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDYwcHgpIHtcbiAgICAuaW1nLWZsZXgge1xuICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XG4gICAgICBtaW4td2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XG4gICAgfVxuICAgIC5kaXZpZGVyIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE2MDFweCkge1xuXG4gIH1cbjwvc3R5bGU+ICBcbjxkaXYgY2xhc3M9XCIkeyBjbGFzc01hcCh0aGlzLmdldENvbnRhaW5lckNsYXNzZXMoKSkgfVwiPlxuXG4gIDxkaXYgY2xhc3M9XCJpbWctZmxleFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAke3RoaXMuX2ltZ1NyYyA/IGh0bWxgXG4gICAgICAgIDxpbWcgc3JjPVwiJHt0aGlzLl9pbWdTcmN9XCI+XG4gICAgICBgIDogaHRtbGBgfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRpdmlkZXJcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCIgcm9sZT1cImhlYWRpbmdcIiBhcmlhLWxldmVsPVwiMlwiPiR7dGhpcy5fY29sbGVjdGlvblRpdGxlfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzdWJ0aXRsZVwiPiR7dGhpcy5faXRlbUN0fSBpdGVtJHt0aGlzLl9pdGVtQ3QgPT09IDEgPyBcIlwiIDogXCJzXCJ9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHt0aGlzLl9jb2xsZWN0aW9uRGVzY308L2Rpdj5cbiAgICA8YSBocmVmPVwiJHt0aGlzLl9ocmVmfVwiPlBsYWNlaG9sZGVyIGZvciBidXR0b248L2E+XG4gIDwvZGl2PlxuPC9kaXY+XG5gO30iLCJpbXBvcnQgeyBMaXRFbGVtZW50fSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCBcIkB1Y2QtbGliL2Zpbi1zZWFyY2gtYm94XCI7XG5pbXBvcnQgXCIuLi8uLi91dGlscy9hcHAtY29sbGVjdGlvbi1jYXJkXCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbnNcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3NlYXJjaC1ib3hcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbmF2LWJhclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9maWx0ZXJCdXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZ3JhcGhpY3MvZGFtcy13YXRlcmNvbG9yXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2dyYXBoaWNzL2RhbXMtd2F0ZXJjb2xvci1vdmVybGF5XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvZGFtcy1jb2xsZWN0aW9uLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZ3JhcGhpY3MvZGFtcy1oZXJvXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb25zL2RhbXMtaGlnaGxpZ2h0ZWQtY29sbGVjdGlvblwiO1xuXG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vYXBwLWhvbWUudHBsLmpzJztcblxuaW1wb3J0IFJlY29yZEludGVyZmFjZSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9SZWNvcmRJbnRlcmZhY2VcIjsgXG5pbXBvcnQgQXBwU3RhdGVJbnRlcmZhY2UgZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvQXBwU3RhdGVJbnRlcmZhY2VcIjtcbmltcG9ydCBDb2xsZWN0aW9uSW50ZXJmYWNlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0NvbGxlY3Rpb25JbnRlcmZhY2VcIjtcblxuLyoqXG4gKiBAY2xhc3MgQXBwSG9tZVxuICogQGRlc2NyaXB0aW9uIGhvbWUgcGFnZSBpcyByZW5kZXJlZCB0byB0aGUgREFNUyB2MlxuICogXG4gKiBAcHJvcCB7T2JqZWN0W119IGZlYXR1cmVkQ29sbGVjdGlvbnMgLSBDb2xsZWN0aW9ucyB0byAgYmUgZGlzcGxheWVkIG9uIGhvbWVwYWdlLiBSZXRyaWV2ZWQgYnkgbW9kZWwuXG4gKiBAcHJvcCB7TnVtYmVyfSBmZWF0dXJlZENvbGxlY3Rpb25zQ3QgLSBUb3RhbCBudW1iZXIgb2YgZmVhdHVyZWQgY29sbGVjdGlvbnMuXG4gKiBAcHJvcCB7T2JqZWN0W119IHJlY2VudENvbGxlY3Rpb25zIC0gQXJyYXkgb2YgcmVjZW50bHkgdXBsb2FkZWQgY29sbGVjdGlvbnMuXG4gKiBAcHJvcCB7Qm9vbGVhbn0gc2hvd0NvbGxlY3Rpb25Hcm91cCAtIERpc3BsYXlzIHRoZSBmZWF0dXJlZCBtdWx0aS1jb2xsZWN0aW9uIHNlY3Rpb24uXG4gKiBAcHJvcCB7T2JqZWN0fSB0ZXh0VHJpbyAtIEFwcGxpY2F0aW9uVGV4dENvbnRhaW5lciBmb3IgdGhlIGNvbGxlY3Rpb24gZ3JvdXAuXG4gKiBAcHJvcCB7T2JqZWN0fSBoZXJvSW1nT3B0aW9ucyAtIERhdGEgb3B0aW9ucyBmb3IgdGhlIGhlcm8gaW1hZ2UgKHNyYywgY29sbGVjdGlvbiBuYW1lLCBldGMpXG4gKiBAcHJvcCB7T2JqZWN0fSBoZXJvSW1nQ3VycmVudCAtIFRoZSBjdXJyZW50bHkgZGlzcGxheWVkIGhlcm8gaW1hZ2UuXG4gKi9cbmNsYXNzIEFwcEhvbWUgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChFdmVudEludGVyZmFjZSwgUmVjb3JkSW50ZXJmYWNlLCBBcHBTdGF0ZUludGVyZmFjZSwgQ29sbGVjdGlvbkludGVyZmFjZSkge1xuICBcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmZWF0dXJlZENvbGxlY3Rpb25zOiB7dHlwZSA6IEFycmF5fSxcbiAgICAgIGZlYXR1cmVkQ29sbGVjdGlvbnNDdDoge3R5cGU6IE51bWJlcn0sXG4gICAgICByZWNlbnRDb2xsZWN0aW9uczoge3R5cGU6IEFycmF5fSxcbiAgICAgIHNob3dDb2xsZWN0aW9uR3JvdXA6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIHRleHRUcmlvOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGhlcm9JbWdPcHRpb25zOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGhlcm9JbWdDdXJyZW50OiB7dHlwZTogT2JqZWN0fVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZmVhdHVyZWRDb2xsZWN0aW9ucyA9IFtdO1xuICAgIHRoaXMuZmVhdHVyZWRDb2xsZWN0aW9uc0N0ID0gMDtcbiAgICB0aGlzLnNob3dDb2xsZWN0aW9uR3JvdXAgPSBmYWxzZTtcbiAgICB0aGlzLnJlY2VudENvbGxlY3Rpb25zID0gW107XG4gICAgdGhpcy50ZXh0VHJpbyA9IHt9O1xuICAgIHRoaXMuaGVyb0ltZ09wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmhlcm9JbWdDdXJyZW50ID0ge307XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0ZjQXBwQ29uZmlnTW9kZWwnKTtcbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnQ29sbGVjdGlvbk1vZGVsJyk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGZpcnN0VXBkYXRlZFxuICAgKiBAZGVzY3JpcHRpb24gTGl0IGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIHdoZW4gZWxlbWVudCBpcyBmaXJzdCB1cGRhdGVkXG4gICAqL1xuICBhc3luYyBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgXG4gICAgLy8gR2V0IGZlYXR1cmVkIGNvbGxlY3Rpb25zXG4gICAgdGhpcy5mZWF0dXJlZENvbGxlY3Rpb25zID0gdGhpcy5GY0FwcENvbmZpZ01vZGVsLmdldEZlYXR1cmVkQ29sbGVjdGlvbnMoKTtcbiAgICB0aGlzLmZlYXR1cmVkQ29sbGVjdGlvbnNDdCA9IHRoaXMuZmVhdHVyZWRDb2xsZWN0aW9ucy5sZW5ndGg7XG4gICAgbGV0IGdyb3VwVGV4dCA9IHRoaXMuRmNBcHBDb25maWdNb2RlbC5nZXRBcHBUZXh0KCdocC10cmlvJyk7XG4gICAgaWYgKCBncm91cFRleHQgKSB0aGlzLnRleHRUcmlvID0gZ3JvdXBUZXh0O1xuICAgIGlmICggdGhpcy5mZWF0dXJlZENvbGxlY3Rpb25zQ3QgPiAxICYmIGdyb3VwVGV4dCApIHRoaXMuc2hvd0NvbGxlY3Rpb25Hcm91cCA9IHRydWU7XG5cbiAgICAvLyBHZXQgcmVjZW50IGNvbGxlY3Rpb25zXG4gICAgbGV0IGQgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5nZXRSZWNlbnRDb2xsZWN0aW9ucygpO1xuICAgIGlmICggZC5yZXNwb25zZS5vayAmJiBBcnJheS5pc0FycmF5KEFQUF9DT05GSUcuY29sbGVjdGlvbnMpICkge1xuICAgICAgZC5ib2R5LnJlc3VsdHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IGNvbGxlY3Rpb25EYXRhID0gQVBQX0NPTkZJRy5jb2xsZWN0aW9ucy5maW5kKGMgPT4gY1snQGlkJ10gPT09IGl0ZW1bJ0BpZCddKTtcbiAgICAgICAgaWYgKCBjb2xsZWN0aW9uRGF0YSApIHRoaXMucmVjZW50Q29sbGVjdGlvbnMucHVzaChjb2xsZWN0aW9uRGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBHZXQgaGVybyBpbWFnZSBvcHRpb25zXG4gICAgdGhpcy5oZXJvSW1nT3B0aW9ucyA9IHRoaXMuRmNBcHBDb25maWdNb2RlbC5nZXRIb21lcGFnZUhlcm9PcHRpb25zKCk7XG5cblxuICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQXBwU3RhdGVVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIG9uIHRoZSBBcHAgdXBkYXRlLCB0aGUgc3RhdGUgaXMgZGV0ZXJtaW5lZCBhbmQgYnkgY2hlY2tpbmdcbiAgICogdGhlIGxvY2F0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcbiAgICovXG4gIF9vbkFwcFN0YXRlVXBkYXRlKGUpIHtcbiAgICBpZiggZS5sb2NhdGlvbi5oYXNoID09PSAnY29sbGVjdGlvbnMnICkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBlbGUgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2NvbGxlY3Rpb25zLWhvbWUnKTtcbiAgICAgICAgaWYoIGVsZSApIGVsZS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgfSwgMjUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkhlcm9DaGFuZ2VcbiAgICogQGRlc2NyaXB0aW9uIExpc3RlbmVyIGF0dGFjaGVkIHRvIDxkYW1zLWhlcm8+IGltYWdlIGNoYW5nZVxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBlIFxuICAgKi9cbiAgX29uSGVyb0NoYW5nZShlKSB7XG4gICAgbGV0IGltZyA9IGUudGFyZ2V0Ll9zZWxlY3RlZFNyYztcbiAgICBpZiAoICFpbWcgKSByZXR1cm47XG4gICAgdGhpcy5oZXJvSW1nQ3VycmVudCA9IHRoaXMuaGVyb0ltZ09wdGlvbnNbaW1nXTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VhcmNoXG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsZWQgZnJvbSB0aGUgc2VhcmNoIGJveCBidXR0b24gaXMgY2xpY2tlZCBvclxuICAgKiB0aGUgZW50ZXIga2V5IGlzIGhpdC4gIHNldCB0aGUgdGV4dCBmaWx0ZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICovXG4gIF9vblNlYXJjaChlKSB7XG5cbiAgICBsZXQgc2VhcmNoRG9jID0gdGhpcy5fZ2V0RW1wdHlTZWFyY2hEb2N1bWVudCgpO1xuICAgIHRoaXMuX3NldFRleHRGaWx0ZXIoc2VhcmNoRG9jLCBlLmRldGFpbCk7XG4gICAgdGhpcy5SZWNvcmRNb2RlbC5zZXRTZWFyY2hMb2NhdGlvbihzZWFyY2hEb2MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ29sbGVjdGlvbkNsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGNhbGxlZCB3aGVuIGNvbGxlY3Rpb24gaW1nIG9uIGhvbWUgcGFnZSBpcyBjbGlja2VkIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZVxuICAgKi9cbiAgX29uQ29sbGVjdGlvbkNsaWNrZWQoZSkge1xuICAgIGlmKCBlLnR5cGUgPT09ICdrZXl1cCcgJiYgZS53aGljaCAhPT0gMTMgKSByZXR1cm47XG4gICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIHRoaXMuX29uQ29sbGVjdGlvblNlbGVjdGVkKGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNvbGxlY3Rpb25TZWxlY3RlZFxuICAgKiBAZGVzY3JpcHRpb24gZmlsdGVyIGJhc2VkIG9uIGEgY29sbGVjdGlvbiB1c2luZyBzaG9ydCBpZHMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgKiBcbiAgICovXG4gIF9vbkNvbGxlY3Rpb25TZWxlY3RlZChpZCkge1xuICAgIHRoaXMuX3NldFdpbmRvd0xvY2F0aW9uKGlkKTtcbiAgfVxuICBcbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaG9tZScsIEFwcEhvbWUpOyIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCBTaGFyZWRIdG1sIGZyb20gJy4uLy4uL3V0aWxzL3NoYXJlZC1odG1sJztcbmltcG9ydCB7IHNoYXJlZFN0eWxlcyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvc2hhcmVkLXN0eWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG48c3R5bGU+XG4gICR7c2hhcmVkU3R5bGVzfVxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cGVyLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xuXG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGlucHV0IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgLmFib3V0LWxpbmstaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDU7ICAgIFxuICAgIHRvcDogMjVweDtcbiAgICByaWdodDogMjVweDtcbiAgfVxuXG4gIC5hYm91dC1saW5rLWljb24gPiBpcm9uLWljb24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxuICAuY29udGFpbmVyIHsgICAgXG4gICAgcGFkZGluZzogMjVweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG5cbiAgLnNlYXJjaC1ib3gge1xuICAgIHotaW5kZXg6IDU7XG4gICAgY29sb3I6IHZhcigtLWludmVyc2UtdGV4dC1jb2xvcik7ICAgIFxuICB9XG5cbiAgLnNlYXJjaC1ib3ggLm1haW4ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzOCwgODUsIC44KTsgICAgXG4gIH1cblxuICAuc2VhcmNoLWJveCAubWFpbiBoMSB7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBsaW5lLWhlaWdodDogMi4wcmVtO1xuICB9XG5cbiAgLnNlYXJjaC1ib3ggLmZvb3RlciB7ICBcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgODMsIDEyMSwgLjgpO1xuICB9XG5cbiAgLnNlYXJjaC1ib3ggLmZvb3RlciBhIHtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICB9XG5cbiAgLmZlYXR1cmVkLWNvbGxlY3Rpb25zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hZ2dpZS1ibHVlLTIwKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKSAwO1xuICB9XG5cbiAgLmZlYXR1cmVkLWNvbGxlY3Rpb25zIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFnZ2llLWJsdWUpO1xuICB9XG5cbiAgLmZlYXR1cmVkLWNvbGxlY3Rpb25zIC5jYXJkLWdyaWQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgfVxuXG4gIC5jYXJkLWdyaWQge1xuICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbiAgICBncmlkLWdhcDogdmFyKC0tc3BhY2luZy1kZWZhdWx0KTtcbiAgfVxuXG5cbiAgaXJvbi1pY29uLnNlYXJjaC1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcbiAgfVxuXG4gIGlyb24taWNvbi5pbmZvIHtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuXG4gICNzYW1wbGUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDExMSwyMDcsMjM1LDAuOCksIHJnYmEoMiwgNDAsIDgxLCAwLjgpIDEwMCUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOjJyZW0gNHJlbSAwIDRyZW07XG5cbiAgfVxuXG4gICNvcHRpb25zIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICNvcHRpb257XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgI3RvcC1oZWFkZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNzdWJ0ZXh0e1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gICN3YXRlcmNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiA4cmVtO1xuICAgIG1hcmdpbi1sZWZ0OjBweDtcbiAgfVxuICAuYWJvdXR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFnZ2llLWJsdWUtNDApO1xuICB9XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gIH1cbiAgXG4gIC5mZWF0dXJlZC1ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA2MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuZmVhdHVyZWQtZ3JpZC1pdGVtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgXG4gIH1cbiAgLmFib3V0LWdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTUlIDQ1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5hYm91dC1ncmlkLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIFxuICB9XG4gIC5jb2xsZWN0aW9uLWdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDMzJSAzMyU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuY29sbGVjdGlvbi1ncmlkLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnBpbms7XG4gICAgbWFyZ2luOjIwcHg7XG4gICAgd2lkdGg6Zml4ZWQ7XG4gICAgcGFkZGluZzogMHB4IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLyogU1RZTEVTIEJFTE9XIEFSRSBBQ1RVQUxMWSBVU0VELiBORUVEIFRPIEFVRElUIEFOWVRISU5HIEFCT1ZFICovXG4gIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oZXJvLXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLmhlcm8tdG9wLWxlZnQgaW1nIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAuaGVyby10b3AtcmlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWV4dHJhYm9sZCk7XG4gICAgZm9udC1zaXplOiAuODJyZW07XG4gIH1cbiAgLmhlcm8tdG9wLXJpZ2h0IGEge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIH1cbiAgLmhlcm8tdG9wLXJpZ2h0IGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hLWhvdmVyKTtcbiAgfVxuICAuaGVyby10b3AtcmlnaHQgLmRvdCB7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBtaW4td2lkdGg6IDhweDtcbiAgICBtaW4taGVpZ2h0OiA4cHg7XG4gIH1cbiAgLmhlcm8tbWFpbiBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuaGVyby1tYWluIC5zdWItaGVhZGluZyB7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LXApO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbiAgLmhlcm8tbWFpbiAuc3ViLWhlYWRpbmcgYSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhbXMtc2Vjb25kYXJ5KTtcbiAgfVxuICAuaGVyby1tYWluIC5zdWItaGVhZGluZyBhOmhvdmVyLCAuaGVyby1tYWluIC5zdWItaGVhZGluZyBhOmZvY3VzIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYS1ob3Zlcik7XG4gIH1cbiAgLmhlcm8tbWFpbiBhcHAtc2VhcmNoLWJveCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5oZXJvLW1haW4gLnN1Yi1zZWFyY2gge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWV4dHJhYm9sZCk7XG4gICAgZm9udC1zaXplOiAuODJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgfVxuICAuaGVyby1tYWluIC5zdWItc2VhcmNoIGEge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgLmJyb3dzZS1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIH1cbiAgLmJyb3dzZS1idXR0b25zID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuYnJvd3NlLWJ1dHRvbnMgYXBwLWljb25zIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuICAucmVjZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgfVxuICAucmVjZW50IGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5jYXJkLXRyaW8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgIGdyaWQtZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgfVxuICAuY2FyZC10cmlvIGRhbXMtY29sbGVjdGlvbi1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLWRlZmF1bHQpO1xuICB9XG4gIC5mZWF0dXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWdnaWUtYmx1ZS0yMCk7XG4gIH1cbiAgLmZlYXR1cmVkIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLWRlZmF1bHQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5mZWF0dXJlZCBkYW1zLXdhdGVyY29sb3Itb3ZlcmxheSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICBkYW1zLWhpZ2hsaWdodGVkLWNvbGxlY3Rpb24ge1xuICAgIG1hcmdpbjogNDBweCAwO1xuICB9XG4gIC5mZy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IHZhcigtLXNwYWNpbmctZGVmYXVsdCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctc20pO1xuICB9XG4gIC5mZy1oZWFkZXIgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuZmVhdHVyZWQtbW9yZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogdmFyKC0tc3BhY2luZy1kZWZhdWx0KSAwO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgIC5mZWF0dXJlZC1ncm91cCAuY2FyZC10cmlvIHtcbiAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc3BhY2luZy1zbSk7XG4gICAgICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2luZy1zbSk7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIC5oZXJvLXRvcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG4gICAgLmhlcm8tdG9wLWxlZnQgaW1nIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgLmNhcmQtdHJpbyB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG4gICAgfVxuICAgIC5mZy1oZWFkZXIge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgNjYlO1xuICAgIH1cbiAgICAuZmVhdHVyZWQtZ3JvdXAgLmNhcmQtdHJpbyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgLmZnLWhlYWRlciBoMyB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwNjBweCkge1xuICAgIC5oZXJvLXRvcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG4gICAgLmhlcm8tbWFpbiAuc3ViLXNlYXJjaCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNjAxcHgpIHtcbiAgICAuaGVyby10b3Age1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbiAgICAuaGVyby1tYWluIC5zdWItc2VhcmNoIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xuICAgIH1cbiAgfVxuXG5cbjwvc3R5bGU+XG5cbjxkYW1zLWhlcm8gLnNyY09wdGlvbnM9XCIke09iamVjdC5rZXlzKHRoaXMuaGVyb0ltZ09wdGlvbnMpfVwiIEBzcmMtY2hhbmdlPVwiJHt0aGlzLl9vbkhlcm9DaGFuZ2V9XCI+XG4gIDxkaXYgY2xhc3M9XCJoZXJvLWNvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVyby10b3Agc2l0ZS1mcmFtZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlcm8tdG9wLWxlZnRcIj48YSBocmVmPVwiaHR0cHM6Ly91Y2RhdmlzLmVkdVwiPjxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvcy91Y2RhdmlzX2xvZ29fZ29sZC5wbmdcIj48L2E+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVyby10b3AtcmlnaHRcIj5cbiAgICAgICAgPGEgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9hPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIj5GQVE8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVyby1tYWluIHNpdGUtZnJhbWVcIj5cbiAgICAgIDxoMSBjbGFzcz1cImNvbG9yLWxpZ2h0XCI+RGlnaXRhbCBDb2xsZWN0aW9uczwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwic3ViLWhlYWRpbmcgaDQgY29sb3ItbGlnaHRcIj5FeHBsb3JlIGRpZ2l0aXplZCBpdGVtcyBmcm9tIHRoZSA8YSBocmVmPVwiXCI+VUMgRGF2aXMgTGlicmFyeTwvYT4gY29sbGVjdGlvbnMuPC9kaXY+XG4gICAgICA8YXBwLXNlYXJjaC1ib3ggXG4gICAgICAgIGlkPVwic2VhcmNoQm94XCIgXG4gICAgICAgIEBzZWFyY2g9XCIke3RoaXMuX29uU2VhcmNofVwiIFxuICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaFwiPlxuICAgICAgICA8aXJvbi1pY29uIGljb249XCJmaW4taWNvbnM6c2VhcmNoXCIgY2xhc3M9XCJzZWFyY2gtaWNvblwiIHNsb3Q9XCJidXR0b24tY29udGVudFwiPjwvaXJvbi1pY29uPlxuICAgICAgPC9hcHAtc2VhcmNoLWJveD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdWItc2VhcmNoXCI+XG4gICAgICAgIEZlYXR1cmVkIEltYWdlOiA8YSBocmVmPVwiJHt0aGlzLmhlcm9JbWdDdXJyZW50Lml0ZW1MaW5rfVwiPiR7dGhpcy5oZXJvSW1nQ3VycmVudC5pdGVtTmFtZX08L2E+IHwgXG4gICAgICAgIDxhIGhyZWY9XCIke3RoaXMuaGVyb0ltZ0N1cnJlbnQuY29sbGVjdGlvbkxpbmt9XCI+JHt0aGlzLmhlcm9JbWdDdXJyZW50LmNvbGxlY3Rpb25OYW1lfTwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGFtcy1oZXJvPlxuXG48c2VjdGlvbiBjbGFzcz1cImJyb3dzZS1idXR0b25zIHNpdGUtZnJhbWVcIj5cbiAgPGRpdj5cbiAgICA8YXBwLWljb25zIFxuICAgICAgaWQ9XCJvcHRpb25cIiBcbiAgICAgIGljb249XCJpcm9uLWFyY2hpdmVcIiBcbiAgICAgIHRoZW1lLWNvbG9yPSdzZWNvbmRhcnknIFxuICAgICAgc2l6ZS1pY29uLXN2Zz0nZXh0cmFsZycgXG4gICAgICBzaXplPVwiZXh0cmFsZ1wiPlxuICAgICAgPGRpdiBzbG90PVwiaWNvbi10ZXh0XCI+Q29sbGVjdGlvbnM8L2Rpdj5cbiAgICA8L2FwcC1pY29ucz5cblxuICAgIDxhIGhyZWY9XCIvc2VhcmNoXCI+XG4gICAgICA8YXBwLWljb25zIGlkPVwib3B0aW9uXCIgXG4gICAgICAgIGljb249XCJpcm9uLWRhc2hib2FyZFwiIFxuICAgICAgICB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBcbiAgICAgICAgc2l6ZS1pY29uLXN2Zz0nZXh0cmFsZycgXG4gICAgICAgIHNpemU9XCJleHRyYWxnXCI+XG4gICAgICAgIDxkaXYgc2xvdD1cImljb24tdGV4dFwiPkFsbCBJdGVtczwvZGl2PlxuICAgICAgPC9hcHAtaWNvbnM+XG4gICAgPC9hPlxuXG4gICAgPGEgaHJlZj1cIi9icm93c2UvY3JlYXRvclwiPlxuICAgICAgPGFwcC1pY29ucyBpZD1cIm9wdGlvblwiIFxuICAgICAgICBpY29uPVwiaXJvbi1hY2NvdW50LWJveFwiIFxuICAgICAgICB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBcbiAgICAgICAgc2l6ZS1pY29uLXN2Zz0nZXh0cmFsZycgXG4gICAgICAgIHNpemU9XCJleHRyYWxnXCI+XG4gICAgICAgIDxkaXYgc2xvdD1cImljb24tdGV4dFwiPkNyZWF0b3JzPC9kaXY+XG4gICAgICA8L2FwcC1pY29ucz5cbiAgICA8L2E+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxhIGhyZWY9XCIvYnJvd3NlL2Zvcm1hdFwiPlxuICAgICAgPGFwcC1pY29ucyBpZD1cIm9wdGlvblwiIFxuICAgICAgICBpY29uPVwiaXJvbi1jcmVhdGVcIiBcbiAgICAgICAgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgXG4gICAgICAgIHNpemUtaWNvbi1zdmc9J2V4dHJhbGcnIFxuICAgICAgICBzaXplPVwiZXh0cmFsZ1wiPlxuICAgICAgICA8ZGl2IHNsb3Q9XCJpY29uLXRleHRcIj5Gb3JtYXRzPC9kaXY+XG4gICAgICA8L2FwcC1pY29ucz5cbiAgICA8L2E+XG5cbiAgICA8YSBocmVmPVwiL2Jyb3dzZS9zdWJqZWN0XCI+XG4gICAgICA8YXBwLWljb25zIGlkPVwib3B0aW9uXCIgXG4gICAgICAgIGljb249XCJmaW4tc2VhcmNoXCIgXG4gICAgICAgIHRoZW1lLWNvbG9yPSdzZWNvbmRhcnknIFxuICAgICAgICBzaXplLWljb24tc3ZnPSdleHRyYWxnJyBcbiAgICAgICAgc2l6ZT1cImV4dHJhbGdcIj5cbiAgICAgICAgPGRpdiBzbG90PVwiaWNvbi10ZXh0XCI+U3ViamVjdHM8L2Rpdj5cbiAgICAgIDwvYXBwLWljb25zPlxuICAgIDwvYT5cblxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24gY2xhc3M9XCJyZWNlbnQgc2l0ZS1mcmFtZVwiID9oaWRkZW49XCIke3RoaXMucmVjZW50Q29sbGVjdGlvbnMubGVuZ3RoID09PSAwfVwiPlxuICA8aDI+UmVjZW50bHkgRGlnaXRpemVkPGJyPjxzcGFuIGNsYXNzPVwiZnctbGlnaHRcIj5Db2xsZWN0aW9uczwvc3Bhbj48L2gyPiBcbiAgJHsgU2hhcmVkSHRtbC5oZWFkZXJEb3RzKCkgfSBcbiAgPGRpdiBjbGFzcz1cImNhcmQtdHJpb1wiPlxuICAke3RoaXMucmVjZW50Q29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uKSA9PiBcbiAgICAgIGh0bWxgXG4gICAgICA8ZGFtcy1jb2xsZWN0aW9uLWNhcmQgLmNvbGxlY3Rpb249XCIke2NvbGxlY3Rpb259XCI+PC9kYW1zLWNvbGxlY3Rpb24tY2FyZD5cbiAgICAgIGBcbiAgICAgICl9XG4gICAgXG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuXG4ke3RoaXMuZmVhdHVyZWRDb2xsZWN0aW9uc0N0ID4gMCA/IGh0bWxgXG5cbiAgPHNlY3Rpb24gY2xhc3M9XCJmZWF0dXJlZCBzaXRlLWZyYW1lXCI+XG4gICAgPGgxPkZlYXR1cmVkIENvbGxlY3Rpb25zPC9oMT5cbiAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+XG4gICAgICA8ZGFtcy13YXRlcmNvbG9yLW92ZXJsYXkgXG4gICAgICAgICAgb3ZlcmxheS10ZW1wbGF0ZT1cInN0YXJzXCI+XG4gICAgICA8L2RhbXMtd2F0ZXJjb2xvci1vdmVybGF5PlxuICAgIDwvZGl2PlxuICAgIDxkYW1zLWhpZ2hsaWdodGVkLWNvbGxlY3Rpb24gLmNvbGxlY3Rpb249XCIke3RoaXMuZmVhdHVyZWRDb2xsZWN0aW9uc1swXX1cIj48L2RhbXMtaGlnaGxpZ2h0ZWQtY29sbGVjdGlvbj5cbiAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZWQtZ3JvdXBcIiA/aGlkZGVuPVwiJHshdGhpcy5zaG93Q29sbGVjdGlvbkdyb3VwfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZnLWhlYWRlclwiPlxuICAgICAgICA8aDM+JHt0aGlzLnRleHRUcmlvLmxhYmVsfTwvaDM+XG4gICAgICAgIDxkaXY+JHt0aGlzLnRleHRUcmlvLnRleHR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRyaW9cIj5cbiAgICAgICAgJHtbMSwyLDNdLm1hcChpID0+IGh0bWxgXG4gICAgICAgICAgJHt0aGlzLmZlYXR1cmVkQ29sbGVjdGlvbnNDdCA+IGkgPyBodG1sYFxuICAgICAgICAgICAgPGRhbXMtY29sbGVjdGlvbi1jYXJkIC5jb2xsZWN0aW9uPVwiJHt0aGlzLmZlYXR1cmVkQ29sbGVjdGlvbnNbaV19XCI+PC9kYW1zLWNvbGxlY3Rpb24tY2FyZD5cbiAgICAgICAgICBgIDogaHRtbGBgfVxuICAgICAgICBgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmVkLW1vcmVcIj48YSBocmVmPVwiL2NvbGxlY3Rpb25zXCI+UGxhY2Vob2xkZXIgZm9yIGJ1dHRvbjwvYT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuXG5gIDogaHRtbGBgfVxuXG5cbjwhLS1cbjxkaXYgaWQ9XCJzYW1wbGVcIj5cbiAgPGRpdiBpZD1cInRvcC1oZWFkZXJcIj4gIFxuICAgIDxpbWcgc3R5bGU9XCJhbGw6dW5zZXQ7IGhlaWdodDogMS41cmVtOyBcIiBzcmM9XCIvaW1hZ2VzL3VjZC1saWItbG9nby13aGl0ZS5wbmdcIj5cbiAgICA8cCBzdHlsZT1cImFsbDp1bnNldDsgZmxvYXQ6cmlnaHQ7IGNvbG9yOndoaXRlOyBmb250LXdlaWdodDp2YXIoLS1mdy1leHRyYS1ib2xkKTsgZmxvYXQ6cmlnaHRcIj5BYm91dCA8c3Bhbj4mIzk2Nzk7PC9zcGFuPiBGQVE8L3A+XG4gIDwvZGl2PlxuXG4gIDxoMSBzdHlsZT1cImNvbG9yOnZhcigtLWNvbG9yLWgxLWxpZ2h0KTsgbWFyZ2luLXRvcDo0cmVtOyBtYXJnaW4tYm90dG9tOjFyZW07XCIgPkRpZ2l0YWwgQ29sbGVjdGlvbnM8L2gxPlxuICA8aDQgc3R5bGU9XCJjb2xvcjp2YXIoLS1jb2xvci1oNC1saWdodCk7IGZvbnQtd2VpZ2h0OnZhcigtLWZ3LXJlZ3VsYXIpOyBtYXJnaW4tdG9wOjA7XCIgPkV4cGxvcmUgZGlnaXRpemVkIGl0ZW1zIGZyb20gdGhlIDxhIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtjb2xvcjp2YXIoLS1jb2xvci1hZ2dpZS1nb2xkKTtcIj5VQyBEYXZpcyBMaWJyYXJ5PC9hPiBjb2xsZWN0aW9ucy48L2g0PlxuXG4gIDxhcHAtc2VhcmNoLWJveCBcbiAgICBpZD1cInNlYXJjaEJveFwiIFxuICAgIEBzZWFyY2g9XCIke3RoaXMuX29uU2VhcmNofVwiIFxuICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoXCI+XG4gICAgPGlyb24taWNvbiBpY29uPVwiZmluLWljb25zOnNlYXJjaFwiIGNsYXNzPVwic2VhcmNoLWljb25cIiBzbG90PVwiYnV0dG9uLWNvbnRlbnRcIj48L2lyb24taWNvbj5cbiAgPC9hcHAtc2VhcmNoLWJveD5cblxuICA8ZGl2IHN0eWxlPVwiY29sb3I6d2hpdGU7IG1hcmdpbi10b3A6Ljc1cmVtOyBtYXJnaW4tYm90dG9tOiAycmVtOyBmb250LXNpemU6Ljc1cmVtO2ZvbnQtd2VpZ2h0OiA4MDA7XCI+XG4gICAgRmVhdHVyZWQgSW1hZ2U6ICA8YSBpZD1cInN1YnRleHRcIj5Bbm51YWwgV2ludGVyIFNhbGUgMTk1MjwvYT4gIHwgIDxhIGlkPVwic3VidGV4dFwiPlNoZXJyeSBMZWhtYW5uIFdpbmUgQ2F0YWxvZ3M8L2E+XG4gIDwvZGl2PlxuICA8ZGl2IGlkPVwid2F0ZXJjb2xvclwiPjwvZGl2PlxuPC9kaXY+XG4tLT5cblxuPCEtLVxuPGRpdiBpZD1cIm9wdGlvbnNcIj5cbiAgPGFwcC1pY29ucyBpZD1cIm9wdGlvblwiIGljb249XCJpcm9uLWFyY2hpdmVcIiB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBzaXplLWljb24tc3ZnPSdleHRyYWxnJyBzaXplPVwiZXh0cmFsZ1wiPjxkaXYgc2xvdD1cImljb24tdGV4dFwiPkNvbGxlY3Rpb25zPC9kaXY+PC9hcHAtaWNvbnM+XG5cbiAgPGEgaHJlZj1cIi9zZWFyY2hcIj5cbiAgICA8YXBwLWljb25zIGlkPVwib3B0aW9uXCIgXG4gICAgICBpY29uPVwiaXJvbi1kYXNoYm9hcmRcIiBcbiAgICAgIHRoZW1lLWNvbG9yPSdzZWNvbmRhcnknIFxuICAgICAgc2l6ZS1pY29uLXN2Zz0nZXh0cmFsZycgXG4gICAgICBzaXplPVwiZXh0cmFsZ1wiPlxuICAgICAgPGRpdiBzbG90PVwiaWNvbi10ZXh0XCI+QWxsIEl0ZW1zPC9kaXY+XG4gICAgPC9hcHAtaWNvbnM+XG4gIDwvYT5cbiAgXG4gIDxhIGhyZWY9XCIvYnJvd3NlL2NyZWF0b3JcIj5cbiAgICA8YXBwLWljb25zIGlkPVwib3B0aW9uXCIgXG4gICAgICBpY29uPVwiaXJvbi1hY2NvdW50LWJveFwiIFxuICAgICAgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgXG4gICAgICBzaXplLWljb24tc3ZnPSdleHRyYWxnJyBcbiAgICAgIHNpemU9XCJleHRyYWxnXCI+XG4gICAgICA8ZGl2IHNsb3Q9XCJpY29uLXRleHRcIj5DcmVhdG9yczwvZGl2PlxuICAgIDwvYXBwLWljb25zPlxuICA8L2E+XG5cbiAgPGEgaHJlZj1cIi9icm93c2UvZm9ybWF0XCI+XG4gICAgPGFwcC1pY29ucyBpZD1cIm9wdGlvblwiIFxuICAgICAgaWNvbj1cImlyb24tY3JlYXRlXCIgXG4gICAgICB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBcbiAgICAgIHNpemUtaWNvbi1zdmc9J2V4dHJhbGcnIFxuICAgICAgc2l6ZT1cImV4dHJhbGdcIj5cbiAgICAgIDxkaXYgc2xvdD1cImljb24tdGV4dFwiPkZvcm1hdHM8L2Rpdj5cbiAgICA8L2FwcC1pY29ucz5cbiAgPC9hPlxuXG4gIDxhIGhyZWY9XCIvYnJvd3NlL3N1YmplY3RcIj5cbiAgICA8YXBwLWljb25zIGlkPVwib3B0aW9uXCIgXG4gICAgICBpY29uPVwiZmluLXNlYXJjaFwiIFxuICAgICAgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgXG4gICAgICBzaXplLWljb24tc3ZnPSdleHRyYWxnJyBcbiAgICAgIHNpemU9XCJleHRyYWxnXCI+XG4gICAgICA8ZGl2IHNsb3Q9XCJpY29uLXRleHRcIj5TdWJqZWN0czwvZGl2PlxuICAgIDwvYXBwLWljb25zPlxuICA8L2E+XG4gIDwvZGl2PlxuLS0+XG5cbjwhLS1cbjxzZWN0aW9uIGNsYXNzPVwicmVjZW50XCI+XG4gIDxoMiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MDtcIj5SZWNlbnRseSBEaWdpdGl6ZWQ8L2gyPiBcbiAgPGgyIHN0eWxlPVwibWFyZ2luLWJvdHRvbTowOyBtYXJnaW4tdG9wOjA7IGZvbnQtd2VpZ2h0OnZhcigtLWZ3LXJlZ3VsYXIpXCI+Q29sbGVjdGlvbnM8L2gyPlxuICAkeyBTaGFyZWRIdG1sLmhlYWRlckRvdHMoKSB9XG4gIDxkaXYgY2xhc3M9XCJjb2xsZWN0aW9uLWdyaWQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPjxkaXYgY2xhc3M9XCJjb250ZW50XCI+ZDwvZGl2PjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj48ZGl2IGNsYXNzPVwiY29udGVudFwiPmQ8L2Rpdj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5kPC9kaXY+PC9kaXY+IFxuICA8L2Rpdj5cblxuPC9zZWN0aW9uPlxuLS0+XG5cbjwhLS1cbjxzZWN0aW9uIGNsYXNzPVwiYWJvdXRcIj5cbiAgPGRpdiBjbGFzcz1cImFib3V0LWdyaWQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+IFxuICAgICAgICA8aDIgc3R5bGU9XCJtYXJnaW46MDsgXCI+QWJvdXQ8L2gyPlxuICAgICAgICA8aDEgc3R5bGU9XCJtYXJnaW46MDsgZm9udC13ZWlnaHQ6dmFyKC0tZnctcmVndWxhcilcIj5EaWdpdGFsIENvbGxlY3Rpb25zPC9oMT5cbiAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDoxMHB4O2Zsb2F0OmxlZnQ7XCI+JHsgU2hhcmVkSHRtbC5oZWFkZXJEb3RzKCkgfSAgICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46MDsgXCI+VGhlIFVDIERhdmlzIERpZ2l0YWwgQ29sbGVjdGlvbnMgaXMgYSBsb2NhbGx5IGRldmVsb3BlZCBkaWdpdGFsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3NpdG9yeSB0aGF0IHdhcyBkZXNpZ25lZCB0byBzdG9yZSBhbmQgbWFuYWdlIHRoZSBkaWdpdGFsIGFzc2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgVUMgRGF2aXMuICBUaGVzZSBEaWdpdGFsIENvbGxlY3Rpb25zIGFyZSBpbnRlbmRlZCB0byBpbmNyZWFzZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VzcyB0byBwcmV2aW91c2x5IHVuZGlzY292ZXJhYmxlIGRpZ2l0YWwgYXNzZXRzIGhlbGQgYnkgdGhlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pdmVyc2l0eSBMaWJyYXJ5LiA8L3A+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbi0tPlxuXG5cblxuYDt9IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLWNvbGxlY3Rpb24tY2FyZC5odG1sXCI7XG5pbXBvcnQgaW9Mb2FkZXIgZnJvbSBcIi4uLy4uL2xpYi91dGlscy9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXItbG9hZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbGxlY3Rpb25DYXJkIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbGxlY3Rpb24gOiB7XG4gICAgICAgIHR5cGUgOiBPYmplY3QsXG4gICAgICAgIHZhbHVlIDogKCkgPT4gKHt9KSxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX29uQ29sbGVjdGlvbkNoYW5nZSdcbiAgICAgIH0sXG4gICAgICB0YWJpbmRleCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAwLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGUgOiB0cnVlXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hvd25JblZpZXdwb3J0ID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7ICAgIFxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKCB0aGlzLmNvbGxlY3Rpb24udGh1bWJuYWlsVXJsID09PSAnL2ltYWdlcy9sb2dvcy9sb2dvLXdoaXRlLTUxMi5wbmcnICkge1xuICAgICAgbGV0IGNhcmRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWcnKVswXTtcbiAgICAgIGNhcmRzLmNsYXNzTmFtZSArPSAnIGRlZmF1bHRJbWFnZSc7XG4gICAgfVxuXG4gICAgaWYoICF0aGlzLm9ic2VydmVyICkge1xuICAgICAgYXdhaXQgaW9Mb2FkZXIubG9hZCgpO1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgICAgZSA9PiB0aGlzLl9vblZpZXdwb3J0SW50ZXJzZWN0aW9uKGUpLCBcbiAgICAgICAge1xuICAgICAgICAgIHJvb3RNYXJnaW46ICcxMHB4JywgXG4gICAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5pbWFnZUxvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH1cblxuICBfb25Db2xsZWN0aW9uQ2hhbmdlKCkge1xuICAgIGlmKCAhdGhpcy5zaG93bkluVmlld3BvcnQgKSByZXR1cm47XG4gICAgdGhpcy5fc2V0QmFja2dyb3VuZEltYWdlKCk7XG4gIH1cblxuICBfb25WaWV3cG9ydEludGVyc2VjdGlvbihlKSB7XG4gICAgaWYoIGUubGVuZ3RoID09PSAwICkgcmV0dXJuO1xuICAgIGUgPSBlWzBdO1xuICAgIFxuICAgIGlmKCB0aGlzLnNob3duSW5WaWV3cG9ydCB8fCAhZS5pc0ludGVyc2VjdGluZyApIHJldHVybjtcbiAgICB0aGlzLnNob3duSW5WaWV3cG9ydCA9IHRydWU7XG5cbiAgICB0aGlzLl9zZXRCYWNrZ3JvdW5kSW1hZ2UoKTtcbiAgfVxuXG4gIF9zZXRCYWNrZ3JvdW5kSW1hZ2UoKSB7XG4gICAgdGhpcy4kLmltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3RoaXMuY29sbGVjdGlvbi50aHVtYm5haWxVcmx9JylgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWNvbGxlY3Rpb24tY2FyZCcsIEFwcENvbGxlY3Rpb25DYXJkKTsiLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG4vKipcbiAqIEBjbGFzcyBTaGFyZWRIdG1sXG4gKiBAZGVzY3JpcHRpb24gTGl0IGh0bWwgdGVtcGxhdGUgc3RyaW5ncyB1c2VkIGFjcm9zcyB0aGUgc2l0ZS5cbiAqIERlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCBEQU1TIHNoYXJlZCBzdHlsZXMsIHNvIG1ha2Ugc3VyZSB5b3UgaW1wb3J0IHRob3NlIGludG8geW91ciBlbGVtZW50XG4gKi9cbmNsYXNzIFNoYXJlZEh0bWwge1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGhlYWRlckRvdHNcbiAgICogQGRlc2NyaXB0aW9uIERpc3BsYXlzIHRoZSB5ZWxsb3cgZG90cyBiZW5lYXRoIGEgc2VjdGlvbiBoZWFkZXJcbiAgICogQHJldHVybnMge1RlbXBsYXRlUmVzdWx0fVxuICAgKi9cbiAgaGVhZGVyRG90cygpe1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1kb3RzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkb3RcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkb3RcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFNoYXJlZEh0bWwoKTsiLCJjbGFzcyBJbnRlcnNlY3Rpb25PYnNlcnZlckxvYWRlciB7XG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgaWYoIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciApIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKCB0aGlzLmxvYWRlZCApIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKCB0aGlzLmxvYWRpbmcgKSB7XG4gICAgICBhd2FpdCB0aGlzLmxvYWRpbmc7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkaW5nID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwib2JzZXJ2ZXItcG9seWZpbGxcIiAqLyAnaW50ZXJzZWN0aW9uLW9ic2VydmVyJyk7XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMubG9hZGluZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJMb2FkZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=