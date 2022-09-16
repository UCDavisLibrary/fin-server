(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-home"],{

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

/***/ "./public/elements/components/graphics/dams-hero.js":
/*!**********************************************************!*\
  !*** ./public/elements/components/graphics/dams-hero.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DamsHero; });
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
class DamsHero extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {

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
   * @method firstUpdated
   * @description Lit lifecyle method fired when element is first updated.
   */
  firstUpdated(){
    this._setSrc();
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
      src = Math.floor(Math.random() *  setCt + 1);
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
<div class="container" style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__["styleMap"])(this.getContainerStyles())}">
  <slot></slot>
  ${this.watercolor ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <dams-watercolor 
      element="div"
      src-file-prefix="${this.watercolor.split("-")[0]}"
      color="${this.watercolor.split("-")[1]}">
    </dams-watercolor>
  `: lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
</div>

`;}

/***/ }),

/***/ "./public/elements/pages/home/app-home.js":
/*!************************************************!*\
  !*** ./public/elements/pages/home/app-home.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _app_home_tpl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-home.tpl.js */ "./public/elements/pages/home/app-home.tpl.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../interfaces/RecordInterface */ "./public/elements/interfaces/RecordInterface.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../interfaces/AppStateInterface */ "./public/elements/interfaces/AppStateInterface.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../interfaces/CollectionInterface */ "./public/elements/interfaces/CollectionInterface.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_14__);


















 



/**
 * @class AppHome
 * @description home page is rendered to the DAMS v2
 */
class AppHome extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
  .with(EventInterface, _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_12___default.a, _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_13___default.a, _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_14___default.a) {
  
  // static get template() {
  //   let tag = document.createElement('template');
  //   tag.innerHTML = template;
  //   return tag;
  // }

  static get properties() {
    return {
      highlightedCollections : {type : Array},
      count : {type : String}
    };
  }

  constructor() {
    super();
    this.render = _app_home_tpl_js__WEBPACK_IMPORTED_MODULE_11__["default"].bind(this);
    this.active = true;
    this.highlightedCollections = [];
    this._injectModel('FcAppConfigModel');
    // console.log(this.FcAppConfigModel.getFeaturedImages());
  }

  /**
   * @method ready
   * @description It gets the model information for the Collections when 
   * function is fired.
   * 
   */
  // async ready() {
  //   super.ready();
  //   this._setCollections(await this.CollectionModel.overview());
  // }

  async firstUpdated() {
    this._setCollections(await this.CollectionModel.overview());

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
   * @method _setCollections
   * @description when the element is ready, the collection model is called 
   * for the collection list.  this renders is.
   * 
   * @param {Object} e 
   */
  _setCollections(e) {
    if( e.state !== 'loaded' ) return;
    let overview = e.payload;
    let browse = {};

    overview.sort((a,b) => {
      if( a.name > b.name ) return 1;
      if( a.name < b.name ) return -1;
      return 0;
    });

    overview.forEach(item => {
      browse[item['@id']] = item.name;
      if( !item.thumbnailUrl ) {
        item.thumbnailUrl = '/images/logos/logo-white-512.png';
      }

      if( item.workExample ) {
        item.thumbnail = '/fcrepo/rest'+item.workExample['@id']+'/svc:iiif/full/,320/0/default.jpg';
      } else {
        item.thumbnail = '/images/logos/logo-white-512.png';
      }
    });

    //this.$.searchBox.browse = browse;
    this.highlightedCollections = overview;

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils_shared_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/shared-html */ "./public/elements/utils/shared-html.js");
/* harmony import */ var _styles_shared_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/shared-styles */ "./public/elements/styles/shared-styles.js");
/* harmony import */ var _components_graphics_dams_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/graphics/dams-hero */ "./public/elements/components/graphics/dams-hero.js");







function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
<style>
  ${_styles_shared_styles__WEBPACK_IMPORTED_MODULE_2__["sharedStyles"]}
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
  span {
    color:var(--color-aggie-gold);
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
  .recent{
    text-align: center;
    background-color: var(--color-white);
  }
  .featured{
    margin: 0;
    text-align: center;
    background-color: var(--color-aggie-blue-20);
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
  @media (min-width: 767px) {
    .hero-top {
      margin-bottom: 60px;
      margin-top: 40px;
    }
    .hero-top-left img {
      height: 30px;
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

<dams-hero src="/images/defaults/annual-winter-sale1952.jpg" .src-options="${[]}">
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
        Featured Image: <a href="https://digital.ucdavis.edu/collection/sherry-lehmann/D-202/d7hg6v">Annual Winter Sale 1952</a> | 
        <a href="https://digital.ucdavis.edu/collection/sherry-lehmann">Sherry Lehmann Wine Catalogs</a>
      </div>
    </div>
  </div>
</dams-hero>

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
<section class="featured">
  <h1 style="margin-bottom:0;">Featured Collections</h1>
  <dams-watercolor-overlay 
      icon="star">
  </dams-watercolor-overlay>
  
  <div class="featured-grid-container">
    <div class="featured-grid-item"><h3>The Greatest <br/> Wine Library</h3>

    </div>
    <div class="featured-grid-item"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Aliquam suscipit interdum dolor, vitae mattis odio convallis 
                                    vitae. Etiam erat arcu, condimentum sed sagittis id, malesuada 
                                    sit amet libero. Nullam blandit mollis commodo. Nunc in 
                                    ipsum vitae felis venenatis tristique. Donec id orci id purus 
                                    bibendum auctor. Etiam porta mi ut sem finibus, nec pellentesque 
                                    erat ultrices. Fusce et massa nec turpis pretium convallis sed ut 
                                    mi. Curabitur in dolor non justo volutpat sagittis ac ut quam.</p>
    </div>


<div class="featured-collections">
  <h1>Featured Collections</h1>
  <div class="card-grid">
    ${this.highlightedCollections.map((collection) => 
      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <dams-collection-card .collection="${collection}"></dams-collection-card>

      `
      )}
  </div>

  <div class="collection-grid-container">
      <div class="collection-outer">
        <div class="collections" id="collections-home">
          ${this.highlightedCollections.map((item) => 
            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <div class="grid-item">
              <app-collection-card 
                data-id="${item._id}" 
                .collection="${item}" 
                @keyup="${this._onCollectionClicked}"
                @click="${this._onCollectionClicked}">
              </app-collection-card>
            </div>
            `
            )}
        </div>
    </div>
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

/***/ "./public/elements/utils/app-collection-card.html":
/*!********************************************************!*\
  !*** ./public/elements/utils/app-collection-card.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  :host {\n    display: inline-block;\n    margin: 15px;\n    outline : 0;\n    height: 320px;\n    width: 320px;\n  }\n\n  :host(:hover), :host(:focus)  {\n    cursor: pointer;\n    margin: 13px;\n    border: 2px solid var(--default-secondary-color);\n  }\n\n  .img.defaultImage {\n    background-size: 65%;\n  }\n\n  .img {\n    height: 320px;\n    width: 320px;\n    position: relative;\n    background-image: url('/images/logos/logo-white-512.png'); /* fallback */\n    background-color: var(--light-background-color);\n    background-size: cover; /* needs to be 65% */\n    background-repeat: no-repeat;\n    background-position: center center;    \n  }\n\n  .img > div  {\n    padding: 15px;\n    position: absolute;\n    left: 0;\n    right: 25px;\n    bottom: 25px;\n    \n    color: var(--default-secondary-color);\n    font-weight: var(--fw-bold);\n\n    background-color: rgba(0, 38, 85, .8);      \n  }\n</style>\n\n<div \n  id=\"img\"\n  class=\"img\" \n  role=\"img\" \n  aria-label=\"[[collection.name]]\">\n  <div>\n    <div>[[collection.name]]</div>\n    <div>[[collection.recordCount]] items</div>\n  </div>\n</div>\n";

/***/ }),

/***/ "./public/elements/utils/app-collection-card.js":
/*!******************************************************!*\
  !*** ./public/elements/utils/app-collection-card.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppCollectionCard; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_collection_card_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-collection-card.html */ "./public/elements/utils/app-collection-card.html");
/* harmony import */ var _app_collection_card_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_collection_card_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_intersection_observer_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/utils/intersection-observer-loader */ "./public/lib/utils/intersection-observer-loader.js");




class AppCollectionCard extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_collection_card_html__WEBPACK_IMPORTED_MODULE_1___default.a;
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="header-dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    `;
  }

}
/* harmony default export */ __webpack_exports__["default"] = (new SharedHtml());

/***/ }),

/***/ "./public/lib/utils/intersection-observer-loader.js":
/*!**********************************************************!*\
  !*** ./public/lib/utils/intersection-observer-loader.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class IntersectionObserverLoader {
  async load() {
    if( window.IntersectionObserver ) return true;

    if ( this.loaded ) return true;

    if ( this.loading ) {
      await this.loading;
      return this.loaded;
    }

    this.loading = new Promise(async (resolve, reject) => {
      await __webpack_require__.e(/*! import() | observer-polyfill */ "vendors~observer-polyfill").then(__webpack_require__.t.bind(null, /*! intersection-observer */ "./public/node_modules/intersection-observer/intersection-observer.js", 7));
      resolve(true);
    });

    return this.loading;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (new IntersectionObserverLoader());

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jYXJkcy9kYW1zLWNvbGxlY3Rpb24tY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jYXJkcy9kYW1zLWNvbGxlY3Rpb24tY2FyZC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvZ3JhcGhpY3MvZGFtcy1oZXJvLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2dyYXBoaWNzL2RhbXMtaGVyby50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hvbWUvYXBwLWhvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hvbWUvYXBwLWhvbWUudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9hcHAtY29sbGVjdGlvbi1jYXJkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL2FwcC1jb2xsZWN0aW9uLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL3NoYXJlZC1odG1sLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9saWIvdXRpbHMvaW50ZXJzZWN0aW9uLW9ic2VydmVyLWxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDVTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQSxVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakI7QUFDZSxpQ0FBaUMsc0RBQVU7O0FBRTFEO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYTtBQUNoQyxlQUFlLG1DQUFtQztBQUNs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O0FBQUE7QUFBbUM7O0FBRWM7QUFDUzs7QUFFYjs7QUFFOUIsbUI7QUFDZixPQUFPLGdEQUFJO0FBQ1g7QUFDQSxJQUFJLGtFQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBRUE7QUFDQSxZQUFZLHFPQUEyRTtBQUN2RjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVlLCtGQUFnQyxFIiwiZmlsZSI6InBhZ2UtaG9tZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9kYW1zLWNvbGxlY3Rpb24tY2FyZC50cGwuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgRGFtc0NvbGxlY3Rpb25DYXJkXG4gKiBAZGVzY3JpcHRpb24gVUkgY29tcG9uZW50IGNsYXNzIGZvciBkaXNwbGF5aW5nIGEgY29sbGVjdGlvbiBwcmV2aWV3IGNhcmRcbiAqIFxuICogQHByb3Age09iamVjdH0gY29sbGVjdGlvbiAtIEFuIG9iamVjdCBkZXNjcmliaW5nIGEgREFNUyBjb2xsZWN0aW9uLiBcbiAqIElmIHVzZWQsIGVsZW1lbnQgd2lsbCBzZXQgYWxsIHN1YnNlcXVlbnQgcHJvcGVydGllcyB3aXRoIGRhdGEgZnJvbSBjb2xsZWN0aW9ucyBvYmplY3QuXG4gKiBAcHJvcCB7U3RyaW5nfSBpbWdTcmMgLSBUaGUgY29sbGVjdGlvbiB0aHVtYm5haWwgc3JjLlxuICogQHByb3Age1N0cmluZ30gY2FyZFRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBjb2xsZWN0aW9uLlxuICogQHByb3Age051bWJlcn0gaXRlbUN0IC0gVGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgY29sbGVjdGlvbnMuXG4gKiBAcHJvcCB7U3RyaW5nfSBocmVmIC0gTGluayB0byB0aGUgY29sbGVjdGlvbiBsYW5kaW5nIHBhZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhbXNDb2xsZWN0aW9uQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sbGVjdGlvbjoge3R5cGU6IE9iamVjdH0sXG4gICAgICBpbWdTcmM6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2ltZy1zcmMnfSxcbiAgICAgIGNhcmRUaXRsZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnY2FyZC10aXRsZSd9LFxuICAgICAgaXRlbUN0OiB7dHlwZTogTnVtYmVyLCBhdHRyaWJ1dGU6ICdpdGVtLWN0J30sXG4gICAgICBocmVmOiB7dHlwZTogU3RyaW5nfVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbWdTcmMgPSBcIlwiO1xuICAgIHRoaXMuY2FyZFRpdGxlID0gXCJcIjtcbiAgICB0aGlzLml0ZW1DdCA9IDA7XG4gICAgdGhpcy5ocmVmID0gXCJcIjtcblxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdXBkYXRlZFxuICAgKiBAZGVzY3JpcHRpb24gTGl0IGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIHdoZW4gZWxlbWVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0ge01hcH0gcHJvcHMgLSBQcm9wZXJ0aWVzIHRoYXQgaGF2ZSBjaGFuZ2VkLlxuICAgKi9cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIGlmICggcHJvcHMuaGFzKCdjb2xsZWN0aW9uJykgJiYgdGhpcy5jb2xsZWN0aW9uWydfaWQnXSApIHtcbiAgICAgIHRoaXMuaW1nU3JjID0gdGhpcy5jb2xsZWN0aW9uLnRodW1ibmFpbFVybDtcbiAgICAgIHRoaXMuY2FyZFRpdGxlID0gdGhpcy5jb2xsZWN0aW9uLm5hbWU7XG4gICAgICB0aGlzLml0ZW1DdCA9IHRoaXMuY29sbGVjdGlvbi5yZWNvcmRDb3VudDtcbiAgICAgIHRoaXMuaHJlZiA9IHRoaXMuY29sbGVjdGlvblsnX2lkJ107XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZGFtcy1jb2xsZWN0aW9uLWNhcmQnLCBEYW1zQ29sbGVjdGlvbkNhcmQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLmltZy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogNzUlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1hZ2VzL2xvZ29zL2xvZ28td2hpdGUtNTEyLnBuZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2stMjApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIH1cbiAgLmltZy1jb250YWluZXIgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICAuaGVhZCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xuICB9XG4gIC5jb250YWluZXI6aG92ZXIgLmhlYWQsIC5jb250YWluZXI6Zm9jdXMgLmhlYWQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWRhbXMtc2Vjb25kYXJ5KTtcbiAgfVxuICBoNSB7XG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWg1KTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWg1KTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctaDUpO1xuICB9XG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1wKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctZXh0cmEtYm9sZCk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFnZ2llLWJsdWUtNzApO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmdvbGQtZG90cyB7XG4gICAgd2lkdGg6IDA7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIGJvcmRlci1ib3R0b206IDVweCBkb3R0ZWQgdmFyKC0tY29sb3ItZGFtcy1zZWNvbmRhcnkpO1xuICB9XG4gIC5jb250YWluZXI6aG92ZXIgLmdvbGQtZG90cywgLmNvbnRhaW5lcjpmb2N1cyAuZ29sZC1kb3RzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG48L3N0eWxlPiAgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PGEgaHJlZj1cIiR7dGhpcy5ocmVmfVwiPlxuICA8ZGl2IGNsYXNzPVwiaGVhZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAke3RoaXMuaW1nU3JjID8gaHRtbGBcbiAgICAgICAgPGltZyBzcmM9XCIke3RoaXMuaW1nU3JjfVwiPlxuICAgICAgYCA6IGh0bWxgYH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgPGg1PiR7dGhpcy5jYXJkVGl0bGV9PC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwic3VidGl0bGVcIj4ke3RoaXMuaXRlbUN0fSBpdGVtJHt0aGlzLml0ZW1DdCA9PT0gMSA/IFwiXCIgOiBcInNcIn08L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ29sZC1kb3RzXCI+PC9kaXY+XG4gIDwvZGl2PjwvYT5cblxuXG48L2Rpdj5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2RhbXMtaGVyby50cGwuanNcIjtcblxuaW1wb3J0IFwiLi9kYW1zLXdhdGVyY29sb3JcIjtcblxuLyoqXG4gKiBAY2xhc3MgRGFtc0hlcm9cbiAqIEBkZXNjcmlwdGlvbiBVSSBjb21wb25lbnQgZm9yIGRpc3BsYXlpbmcgYSBoZXJvIGltYWdlXG4gKiBAcHJvcCB7QXJyYXl9IHNyY09wdGlvbnMgLSBTZXQgb2YgaW1hZ2Ugc291cmNlcyB0byByYW5kb21seSBkaXNwbGF5XG4gKiBAcHJvcCB7U3RyaW5nfSBzcmMgLSBGYWxsYmFjayBiYWNrZ3JvdW5kIGltYWdlIHNvdXJjZVxuICogQHByb3Age1N0cmluZ30gd2F0ZXJjb2xvciAtIFdhdGVyY29sb3IgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYW1zSGVybyBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHNyY09wdGlvbnM6IHt0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcInNyYy1vcHRpb25zXCJ9LFxuICAgICAgd2F0ZXJjb2xvcjoge3R5cGU6IFN0cmluZ30sXG4gICAgICBfc2VsZWN0ZWRTcmM6IHt0eXBlOiBTdHJpbmd9XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNyYyA9IFwiXCI7XG4gICAgdGhpcy5zcmNPcHRpb25zID0gW107XG4gICAgdGhpcy5fc2VsZWN0ZWRTcmMgPSBcIlwiO1xuICAgIHRoaXMud2F0ZXJjb2xvciA9IFwiYm9yZGVyLXdoaXRlXCI7XG5cbiAgICB0aGlzLl9zcmNDaGFuZ2UgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NyYy1jaGFuZ2UnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IGltYWdlIGhhcyBiZWVuIGxvYWRlZCdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGZpcnN0VXBkYXRlZFxuICAgKiBAZGVzY3JpcHRpb24gTGl0IGxpZmVjeWxlIG1ldGhvZCBmaXJlZCB3aGVuIGVsZW1lbnQgaXMgZmlyc3QgdXBkYXRlZC5cbiAgICovXG4gIGZpcnN0VXBkYXRlZCgpe1xuICAgIHRoaXMuX3NldFNyYygpO1xuICB9XG5cblxuICAvKipcbiAgICogQG1ldGhvZCBzaHVmZmxlSW1hZ2VcbiAgICogQGRlc2NyaXB0aW9uIFJhbmRvbWx5IGRpc3BsYXlzIGEgbmV3IGhlcm8gaW1hZ2UuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbmV3IGltZyBzcmNcbiAgICovXG4gIHNodWZmbGVJbWFnZSgpe1xuICAgIHRoaXMuX3NldFNyYygpO1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFNyYztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zZXRTcmNcbiAgICogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGJhY2tncm91bmQgaW1hZ2Ugc3JjIHByb3BlcnR5LlxuICAgKi9cbiAgX3NldFNyYygpe1xuICAgIGxldCBzcmMgPSBcIlwiO1xuICAgIGxldCBzZXRDdCA9IHRoaXMuc3JjT3B0aW9ucy5sZW5ndGg7XG4gICAgaWYgKCBzZXRDdCA9PT0gMCAmJiB0aGlzLnNyYyApIHtcbiAgICAgIHNyYyA9IHRoaXMuc3JjO1xuICAgIH1cbiAgICBlbHNlIGlmICggc2V0Q3QgPiAwICkge1xuICAgICAgc3JjID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogIHNldEN0ICsgMSk7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkU3JjID0gc3JjO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9zcmNDaGFuZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0Q29udGFpbmVyU3R5bGVzXG4gICAqIEBkZXNjcmlwdGlvbiBJbmxpbmUgc3R5bGVzIGZvciBlbGVtZW50J3MgYmFzZSBjb250YWluZXJcbiAgICogXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBnZXRDb250YWluZXJTdHlsZXMoKXtcbiAgICBsZXQgc3R5bGVzID0ge1xuICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndmFyKC0tZ3JhZGllbnQtYWctcHV0YWgpJ1xuICAgIH07XG4gICAgaWYgKCB0aGlzLl9zZWxlY3RlZFNyYyApIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddICs9IGAsIHVybCgke3RoaXMuX3NlbGVjdGVkU3JjfSlgO1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RhbXMtaGVybycsIERhbXNIZXJvKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICB9XG4gIDo6c2xvdHRlZCgqKSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKSAhaW1wb3J0YW50O1xuICB9XG4gIGRhbXMtd2F0ZXJjb2xvciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIGRhbXMtd2F0ZXJjb2xvciB7XG4gICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTA2MHB4KSB7XG4gICAgZGFtcy13YXRlcmNvbG9yIHtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNjAxcHgpIHtcbiAgICBkYW1zLXdhdGVyY29sb3Ige1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCIke3N0eWxlTWFwKHRoaXMuZ2V0Q29udGFpbmVyU3R5bGVzKCkpfVwiPlxuICA8c2xvdD48L3Nsb3Q+XG4gICR7dGhpcy53YXRlcmNvbG9yID8gaHRtbGBcbiAgICA8ZGFtcy13YXRlcmNvbG9yIFxuICAgICAgZWxlbWVudD1cImRpdlwiXG4gICAgICBzcmMtZmlsZS1wcmVmaXg9XCIke3RoaXMud2F0ZXJjb2xvci5zcGxpdChcIi1cIilbMF19XCJcbiAgICAgIGNvbG9yPVwiJHt0aGlzLndhdGVyY29sb3Iuc3BsaXQoXCItXCIpWzFdfVwiPlxuICAgIDwvZGFtcy13YXRlcmNvbG9yPlxuICBgOiBodG1sYGB9XG48L2Rpdj5cblxuYDt9IiwiaW1wb3J0IHsgTGl0RWxlbWVudH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5pbXBvcnQgXCJAdWNkLWxpYi9maW4tc2VhcmNoLWJveFwiO1xuaW1wb3J0IFwiLi4vLi4vdXRpbHMvYXBwLWNvbGxlY3Rpb24tY2FyZFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb25zXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaWNvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9zZWFyY2gtYm94XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL25hdi1iYXJcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZmlsdGVyQnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2dyYXBoaWNzL2RhbXMtd2F0ZXJjb2xvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9ncmFwaGljcy9kYW1zLXdhdGVyY29sb3Itb3ZlcmxheVwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL2RhbXMtY29sbGVjdGlvbi1jYXJkXCI7XG5cbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hcHAtaG9tZS50cGwuanMnO1xuXG5pbXBvcnQgUmVjb3JkSW50ZXJmYWNlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL1JlY29yZEludGVyZmFjZVwiOyBcbmltcG9ydCBBcHBTdGF0ZUludGVyZmFjZSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9BcHBTdGF0ZUludGVyZmFjZVwiO1xuaW1wb3J0IENvbGxlY3Rpb25JbnRlcmZhY2UgZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvQ29sbGVjdGlvbkludGVyZmFjZVwiO1xuXG4vKipcbiAqIEBjbGFzcyBBcHBIb21lXG4gKiBAZGVzY3JpcHRpb24gaG9tZSBwYWdlIGlzIHJlbmRlcmVkIHRvIHRoZSBEQU1TIHYyXG4gKi9cbmNsYXNzIEFwcEhvbWUgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChFdmVudEludGVyZmFjZSwgUmVjb3JkSW50ZXJmYWNlLCBBcHBTdGF0ZUludGVyZmFjZSwgQ29sbGVjdGlvbkludGVyZmFjZSkge1xuICBcbiAgLy8gc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgLy8gICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgLy8gICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gIC8vICAgcmV0dXJuIHRhZztcbiAgLy8gfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGlnaGxpZ2h0ZWRDb2xsZWN0aW9ucyA6IHt0eXBlIDogQXJyYXl9LFxuICAgICAgY291bnQgOiB7dHlwZSA6IFN0cmluZ31cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkQ29sbGVjdGlvbnMgPSBbXTtcbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnRmNBcHBDb25maWdNb2RlbCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuRmNBcHBDb25maWdNb2RlbC5nZXRGZWF0dXJlZEltYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlYWR5XG4gICAqIEBkZXNjcmlwdGlvbiBJdCBnZXRzIHRoZSBtb2RlbCBpbmZvcm1hdGlvbiBmb3IgdGhlIENvbGxlY3Rpb25zIHdoZW4gXG4gICAqIGZ1bmN0aW9uIGlzIGZpcmVkLlxuICAgKiBcbiAgICovXG4gIC8vIGFzeW5jIHJlYWR5KCkge1xuICAvLyAgIHN1cGVyLnJlYWR5KCk7XG4gIC8vICAgdGhpcy5fc2V0Q29sbGVjdGlvbnMoYXdhaXQgdGhpcy5Db2xsZWN0aW9uTW9kZWwub3ZlcnZpZXcoKSk7XG4gIC8vIH1cblxuICBhc3luYyBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5fc2V0Q29sbGVjdGlvbnMoYXdhaXQgdGhpcy5Db2xsZWN0aW9uTW9kZWwub3ZlcnZpZXcoKSk7XG5cbiAgfVxuICAvKipcbiAgICogQG1ldGhvZCBfb25BcHBTdGF0ZVVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gb24gdGhlIEFwcCB1cGRhdGUsIHRoZSBzdGF0ZSBpcyBkZXRlcm1pbmVkIGFuZCBieSBjaGVja2luZ1xuICAgKiB0aGUgbG9jYXRpb25cbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxuICAgKi9cbiAgX29uQXBwU3RhdGVVcGRhdGUoZSkge1xuICAgIGlmKCBlLmxvY2F0aW9uLmhhc2ggPT09ICdjb2xsZWN0aW9ucycgKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGVsZSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjY29sbGVjdGlvbnMtaG9tZScpO1xuICAgICAgICBpZiggZWxlICkgZWxlLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICB9LCAyNSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3NldENvbGxlY3Rpb25zXG4gICAqIEBkZXNjcmlwdGlvbiB3aGVuIHRoZSBlbGVtZW50IGlzIHJlYWR5LCB0aGUgY29sbGVjdGlvbiBtb2RlbCBpcyBjYWxsZWQgXG4gICAqIGZvciB0aGUgY29sbGVjdGlvbiBsaXN0LiAgdGhpcyByZW5kZXJzIGlzLlxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgXG4gICAqL1xuICBfc2V0Q29sbGVjdGlvbnMoZSkge1xuICAgIGlmKCBlLnN0YXRlICE9PSAnbG9hZGVkJyApIHJldHVybjtcbiAgICBsZXQgb3ZlcnZpZXcgPSBlLnBheWxvYWQ7XG4gICAgbGV0IGJyb3dzZSA9IHt9O1xuXG4gICAgb3ZlcnZpZXcuc29ydCgoYSxiKSA9PiB7XG4gICAgICBpZiggYS5uYW1lID4gYi5uYW1lICkgcmV0dXJuIDE7XG4gICAgICBpZiggYS5uYW1lIDwgYi5uYW1lICkgcmV0dXJuIC0xO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICBvdmVydmlldy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgYnJvd3NlW2l0ZW1bJ0BpZCddXSA9IGl0ZW0ubmFtZTtcbiAgICAgIGlmKCAhaXRlbS50aHVtYm5haWxVcmwgKSB7XG4gICAgICAgIGl0ZW0udGh1bWJuYWlsVXJsID0gJy9pbWFnZXMvbG9nb3MvbG9nby13aGl0ZS01MTIucG5nJztcbiAgICAgIH1cblxuICAgICAgaWYoIGl0ZW0ud29ya0V4YW1wbGUgKSB7XG4gICAgICAgIGl0ZW0udGh1bWJuYWlsID0gJy9mY3JlcG8vcmVzdCcraXRlbS53b3JrRXhhbXBsZVsnQGlkJ10rJy9zdmM6aWlpZi9mdWxsLywzMjAvMC9kZWZhdWx0LmpwZyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLnRodW1ibmFpbCA9ICcvaW1hZ2VzL2xvZ29zL2xvZ28td2hpdGUtNTEyLnBuZyc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL3RoaXMuJC5zZWFyY2hCb3guYnJvd3NlID0gYnJvd3NlO1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRDb2xsZWN0aW9ucyA9IG92ZXJ2aWV3O1xuXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlYXJjaFxuICAgKiBAZGVzY3JpcHRpb24gY2FsbGVkIGZyb20gdGhlIHNlYXJjaCBib3ggYnV0dG9uIGlzIGNsaWNrZWQgb3JcbiAgICogdGhlIGVudGVyIGtleSBpcyBoaXQuICBzZXQgdGhlIHRleHQgZmlsdGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAqL1xuICBfb25TZWFyY2goZSkge1xuXG4gICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuX2dldEVtcHR5U2VhcmNoRG9jdW1lbnQoKTtcbiAgICB0aGlzLl9zZXRUZXh0RmlsdGVyKHNlYXJjaERvYywgZS5kZXRhaWwpO1xuICAgIHRoaXMuUmVjb3JkTW9kZWwuc2V0U2VhcmNoTG9jYXRpb24oc2VhcmNoRG9jKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNvbGxlY3Rpb25DbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsZWQgd2hlbiBjb2xsZWN0aW9uIGltZyBvbiBob21lIHBhZ2UgaXMgY2xpY2tlZCBcbiAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICovXG4gIF9vbkNvbGxlY3Rpb25DbGlja2VkKGUpIHtcbiAgICBpZiggZS50eXBlID09PSAna2V5dXAnICYmIGUud2hpY2ggIT09IDEzICkgcmV0dXJuO1xuICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25TZWxlY3RlZChpZCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Db2xsZWN0aW9uU2VsZWN0ZWRcbiAgICogQGRlc2NyaXB0aW9uIGZpbHRlciBiYXNlZCBvbiBhIGNvbGxlY3Rpb24gdXNpbmcgc2hvcnQgaWRzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICogXG4gICAqL1xuICBfb25Db2xsZWN0aW9uU2VsZWN0ZWQoaWQpIHtcbiAgICB0aGlzLl9zZXRXaW5kb3dMb2NhdGlvbihpZCk7XG4gIH1cbiAgXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWhvbWUnLCBBcHBIb21lKTsiLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5pbXBvcnQgU2hhcmVkSHRtbCBmcm9tICcuLi8uLi91dGlscy9zaGFyZWQtaHRtbCc7XG5pbXBvcnQgeyBzaGFyZWRTdHlsZXMgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3NoYXJlZC1zdHlsZXNcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9ncmFwaGljcy9kYW1zLWhlcm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuPHN0eWxlPlxuICAke3NoYXJlZFN0eWxlc31cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXBlci1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBpbnB1dCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIC5hYm91dC1saW5rLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA1OyAgICBcbiAgICB0b3A6IDI1cHg7XG4gICAgcmlnaHQ6IDI1cHg7XG4gIH1cblxuICAuYWJvdXQtbGluay1pY29uID4gaXJvbi1pY29uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciB7ICAgIFxuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gIC5zZWFyY2gtYm94IHtcbiAgICB6LWluZGV4OiA1O1xuICAgIGNvbG9yOiB2YXIoLS1pbnZlcnNlLXRleHQtY29sb3IpOyAgICBcbiAgfVxuXG4gIC5zZWFyY2gtYm94IC5tYWluIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMzgsIDg1LCAuOCk7ICAgIFxuICB9XG5cbiAgLnNlYXJjaC1ib3ggLm1haW4gaDEge1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDIuMHJlbTtcbiAgfVxuXG4gIC5zZWFyY2gtYm94IC5mb290ZXIgeyAgXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS4wcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDgzLCAxMjEsIC44KTtcbiAgfVxuXG4gIC5zZWFyY2gtYm94IC5mb290ZXIgYSB7XG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgfVxuXG4gIC5mZWF0dXJlZC1jb2xsZWN0aW9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWdnaWUtYmx1ZS0yMCk7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCkgMDtcbiAgfVxuXG4gIC5mZWF0dXJlZC1jb2xsZWN0aW9ucyBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hZ2dpZS1ibHVlKTtcbiAgfVxuXG4gIC5mZWF0dXJlZC1jb2xsZWN0aW9ucyAuY2FyZC1ncmlkIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gIH1cblxuICAuY2FyZC1ncmlkIHtcbiAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IHZhcigtLXNwYWNpbmctZGVmYXVsdCk7XG4gIH1cblxuXG4gIGlyb24taWNvbi5zZWFyY2gtaWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XG4gIH1cblxuICBpcm9uLWljb24uaW5mbyB7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cblxuICAjc2FtcGxlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxMTEsMjA3LDIzNSwwLjgpLCByZ2JhKDIsIDQwLCA4MSwgMC44KSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzoycmVtIDRyZW0gMCA0cmVtO1xuXG4gIH1cblxuICAjb3B0aW9ucyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAjb3B0aW9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gICN0b3AtaGVhZGVye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBzcGFuIHtcbiAgICBjb2xvcjp2YXIoLS1jb2xvci1hZ2dpZS1nb2xkKTtcbiAgfVxuXG4gICNzdWJ0ZXh0e1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gICN3YXRlcmNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiA4cmVtO1xuICAgIG1hcmdpbi1sZWZ0OjBweDtcbiAgfVxuICAucmVjZW50e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIH1cbiAgLmZlYXR1cmVke1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWdnaWUtYmx1ZS0yMCk7XG4gIH1cbiAgLmFib3V0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hZ2dpZS1ibHVlLTQwKTtcbiAgfVxuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICB9XG4gIFxuICAuZmVhdHVyZWQtZ3JpZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmZlYXR1cmVkLWdyaWQtaXRlbSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIFxuICB9XG4gIC5hYm91dC1ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDU1JSA0NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuYWJvdXQtZ3JpZC1pdGVtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBcbiAgfVxuICAuY29sbGVjdGlvbi1ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzMlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmNvbGxlY3Rpb24tZ3JpZC1pdGVtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAuY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpwaW5rO1xuICAgIG1hcmdpbjoyMHB4O1xuICAgIHdpZHRoOmZpeGVkO1xuICAgIHBhZGRpbmc6IDBweCA2MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC8qIFNUWUxFUyBCRUxPVyBBUkUgQUNUVUFMTFkgVVNFRC4gTkVFRCBUTyBBVURJVCBBTllUSElORyBBQk9WRSAqL1xuICAuaGVyby10b3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgLmhlcm8tdG9wLWxlZnQgaW1nIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAuaGVyby10b3AtcmlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWV4dHJhYm9sZCk7XG4gICAgZm9udC1zaXplOiAuODJyZW07XG4gIH1cbiAgLmhlcm8tdG9wLXJpZ2h0IGEge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIH1cbiAgLmhlcm8tdG9wLXJpZ2h0IGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hLWhvdmVyKTtcbiAgfVxuICAuaGVyby10b3AtcmlnaHQgLmRvdCB7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBtaW4td2lkdGg6IDhweDtcbiAgICBtaW4taGVpZ2h0OiA4cHg7XG4gIH1cbiAgLmhlcm8tbWFpbiBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuaGVyby1tYWluIC5zdWItaGVhZGluZyB7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LXApO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbiAgLmhlcm8tbWFpbiAuc3ViLWhlYWRpbmcgYSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhbXMtc2Vjb25kYXJ5KTtcbiAgfVxuICAuaGVyby1tYWluIC5zdWItaGVhZGluZyBhOmhvdmVyLCAuaGVyby1tYWluIC5zdWItaGVhZGluZyBhOmZvY3VzIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYS1ob3Zlcik7XG4gIH1cbiAgLmhlcm8tbWFpbiBhcHAtc2VhcmNoLWJveCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5oZXJvLW1haW4gLnN1Yi1zZWFyY2gge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWV4dHJhYm9sZCk7XG4gICAgZm9udC1zaXplOiAuODJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgfVxuICAuaGVyby1tYWluIC5zdWItc2VhcmNoIGEge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gICAgLmhlcm8tdG9wIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbiAgICAuaGVyby10b3AtbGVmdCBpbWcge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDYwcHgpIHtcbiAgICAuaGVyby10b3Age1xuICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxuICAgIC5oZXJvLW1haW4gLnN1Yi1zZWFyY2gge1xuICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTYwMXB4KSB7XG4gICAgLmhlcm8tdG9wIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG4gICAgLmhlcm8tbWFpbiAuc3ViLXNlYXJjaCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbiAgICB9XG4gIH1cblxuXG48L3N0eWxlPlxuXG48ZGFtcy1oZXJvIHNyYz1cIi9pbWFnZXMvZGVmYXVsdHMvYW5udWFsLXdpbnRlci1zYWxlMTk1Mi5qcGdcIiAuc3JjLW9wdGlvbnM9XCIke1tdfVwiPlxuICA8ZGl2IGNsYXNzPVwiaGVyby1jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cImhlcm8tdG9wIHNpdGUtZnJhbWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZXJvLXRvcC1sZWZ0XCI+PGEgaHJlZj1cImh0dHBzOi8vdWNkYXZpcy5lZHVcIj48aW1nIHNyYz1cIi9pbWFnZXMvbG9nb3MvdWNkYXZpc19sb2dvX2dvbGQucG5nXCI+PC9hPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhlcm8tdG9wLXJpZ2h0XCI+XG4gICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgICAgIDxhIGhyZWY9XCIjXCI+RkFRPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImhlcm8tbWFpbiBzaXRlLWZyYW1lXCI+XG4gICAgICA8aDEgY2xhc3M9XCJjb2xvci1saWdodFwiPkRpZ2l0YWwgQ29sbGVjdGlvbnM8L2gxPlxuICAgICAgPGRpdiBjbGFzcz1cInN1Yi1oZWFkaW5nIGg0IGNvbG9yLWxpZ2h0XCI+RXhwbG9yZSBkaWdpdGl6ZWQgaXRlbXMgZnJvbSB0aGUgPGEgaHJlZj1cIlwiPlVDIERhdmlzIExpYnJhcnk8L2E+IGNvbGxlY3Rpb25zLjwvZGl2PlxuICAgICAgPGFwcC1zZWFyY2gtYm94IFxuICAgICAgICBpZD1cInNlYXJjaEJveFwiIFxuICAgICAgICBAc2VhcmNoPVwiJHt0aGlzLl9vblNlYXJjaH1cIiBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIj5cbiAgICAgICAgPGlyb24taWNvbiBpY29uPVwiZmluLWljb25zOnNlYXJjaFwiIGNsYXNzPVwic2VhcmNoLWljb25cIiBzbG90PVwiYnV0dG9uLWNvbnRlbnRcIj48L2lyb24taWNvbj5cbiAgICAgIDwvYXBwLXNlYXJjaC1ib3g+XG4gICAgICA8ZGl2IGNsYXNzPVwic3ViLXNlYXJjaFwiPlxuICAgICAgICBGZWF0dXJlZCBJbWFnZTogPGEgaHJlZj1cImh0dHBzOi8vZGlnaXRhbC51Y2RhdmlzLmVkdS9jb2xsZWN0aW9uL3NoZXJyeS1sZWhtYW5uL0QtMjAyL2Q3aGc2dlwiPkFubnVhbCBXaW50ZXIgU2FsZSAxOTUyPC9hPiB8IFxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kaWdpdGFsLnVjZGF2aXMuZWR1L2NvbGxlY3Rpb24vc2hlcnJ5LWxlaG1hbm5cIj5TaGVycnkgTGVobWFubiBXaW5lIENhdGFsb2dzPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kYW1zLWhlcm8+XG5cbjwhLS1cbjxkaXYgaWQ9XCJzYW1wbGVcIj5cbiAgPGRpdiBpZD1cInRvcC1oZWFkZXJcIj4gIFxuICAgIDxpbWcgc3R5bGU9XCJhbGw6dW5zZXQ7IGhlaWdodDogMS41cmVtOyBcIiBzcmM9XCIvaW1hZ2VzL3VjZC1saWItbG9nby13aGl0ZS5wbmdcIj5cbiAgICA8cCBzdHlsZT1cImFsbDp1bnNldDsgZmxvYXQ6cmlnaHQ7IGNvbG9yOndoaXRlOyBmb250LXdlaWdodDp2YXIoLS1mdy1leHRyYS1ib2xkKTsgZmxvYXQ6cmlnaHRcIj5BYm91dCA8c3Bhbj4mIzk2Nzk7PC9zcGFuPiBGQVE8L3A+XG4gIDwvZGl2PlxuXG4gIDxoMSBzdHlsZT1cImNvbG9yOnZhcigtLWNvbG9yLWgxLWxpZ2h0KTsgbWFyZ2luLXRvcDo0cmVtOyBtYXJnaW4tYm90dG9tOjFyZW07XCIgPkRpZ2l0YWwgQ29sbGVjdGlvbnM8L2gxPlxuICA8aDQgc3R5bGU9XCJjb2xvcjp2YXIoLS1jb2xvci1oNC1saWdodCk7IGZvbnQtd2VpZ2h0OnZhcigtLWZ3LXJlZ3VsYXIpOyBtYXJnaW4tdG9wOjA7XCIgPkV4cGxvcmUgZGlnaXRpemVkIGl0ZW1zIGZyb20gdGhlIDxhIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtjb2xvcjp2YXIoLS1jb2xvci1hZ2dpZS1nb2xkKTtcIj5VQyBEYXZpcyBMaWJyYXJ5PC9hPiBjb2xsZWN0aW9ucy48L2g0PlxuXG4gIDxhcHAtc2VhcmNoLWJveCBcbiAgICBpZD1cInNlYXJjaEJveFwiIFxuICAgIEBzZWFyY2g9XCIke3RoaXMuX29uU2VhcmNofVwiIFxuICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoXCI+XG4gICAgPGlyb24taWNvbiBpY29uPVwiZmluLWljb25zOnNlYXJjaFwiIGNsYXNzPVwic2VhcmNoLWljb25cIiBzbG90PVwiYnV0dG9uLWNvbnRlbnRcIj48L2lyb24taWNvbj5cbiAgPC9hcHAtc2VhcmNoLWJveD5cblxuICA8ZGl2IHN0eWxlPVwiY29sb3I6d2hpdGU7IG1hcmdpbi10b3A6Ljc1cmVtOyBtYXJnaW4tYm90dG9tOiAycmVtOyBmb250LXNpemU6Ljc1cmVtO2ZvbnQtd2VpZ2h0OiA4MDA7XCI+XG4gICAgRmVhdHVyZWQgSW1hZ2U6ICA8YSBpZD1cInN1YnRleHRcIj5Bbm51YWwgV2ludGVyIFNhbGUgMTk1MjwvYT4gIHwgIDxhIGlkPVwic3VidGV4dFwiPlNoZXJyeSBMZWhtYW5uIFdpbmUgQ2F0YWxvZ3M8L2E+XG4gIDwvZGl2PlxuICA8ZGl2IGlkPVwid2F0ZXJjb2xvclwiPjwvZGl2PlxuPC9kaXY+XG4tLT5cblxuPCEtLVxuPGRpdiBpZD1cIm9wdGlvbnNcIj5cbiAgPGFwcC1pY29ucyBpZD1cIm9wdGlvblwiIGljb249XCJpcm9uLWFyY2hpdmVcIiB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBzaXplLWljb24tc3ZnPSdleHRyYWxnJyBzaXplPVwiZXh0cmFsZ1wiPjxkaXYgc2xvdD1cImljb24tdGV4dFwiPkNvbGxlY3Rpb25zPC9kaXY+PC9hcHAtaWNvbnM+XG5cbiAgPGEgaHJlZj1cIi9zZWFyY2hcIj5cbiAgICA8YXBwLWljb25zIGlkPVwib3B0aW9uXCIgXG4gICAgICBpY29uPVwiaXJvbi1kYXNoYm9hcmRcIiBcbiAgICAgIHRoZW1lLWNvbG9yPSdzZWNvbmRhcnknIFxuICAgICAgc2l6ZS1pY29uLXN2Zz0nZXh0cmFsZycgXG4gICAgICBzaXplPVwiZXh0cmFsZ1wiPlxuICAgICAgPGRpdiBzbG90PVwiaWNvbi10ZXh0XCI+QWxsIEl0ZW1zPC9kaXY+XG4gICAgPC9hcHAtaWNvbnM+XG4gIDwvYT5cbiAgXG4gIDxhIGhyZWY9XCIvYnJvd3NlL2NyZWF0b3JcIj5cbiAgICA8YXBwLWljb25zIGlkPVwib3B0aW9uXCIgXG4gICAgICBpY29uPVwiaXJvbi1hY2NvdW50LWJveFwiIFxuICAgICAgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgXG4gICAgICBzaXplLWljb24tc3ZnPSdleHRyYWxnJyBcbiAgICAgIHNpemU9XCJleHRyYWxnXCI+XG4gICAgICA8ZGl2IHNsb3Q9XCJpY29uLXRleHRcIj5DcmVhdG9yczwvZGl2PlxuICAgIDwvYXBwLWljb25zPlxuICA8L2E+XG5cbiAgPGEgaHJlZj1cIi9icm93c2UvZm9ybWF0XCI+XG4gICAgPGFwcC1pY29ucyBpZD1cIm9wdGlvblwiIFxuICAgICAgaWNvbj1cImlyb24tY3JlYXRlXCIgXG4gICAgICB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBcbiAgICAgIHNpemUtaWNvbi1zdmc9J2V4dHJhbGcnIFxuICAgICAgc2l6ZT1cImV4dHJhbGdcIj5cbiAgICAgIDxkaXYgc2xvdD1cImljb24tdGV4dFwiPkZvcm1hdHM8L2Rpdj5cbiAgICA8L2FwcC1pY29ucz5cbiAgPC9hPlxuXG4gIDxhIGhyZWY9XCIvYnJvd3NlL3N1YmplY3RcIj5cbiAgICA8YXBwLWljb25zIGlkPVwib3B0aW9uXCIgXG4gICAgICBpY29uPVwiZmluLXNlYXJjaFwiIFxuICAgICAgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgXG4gICAgICBzaXplLWljb24tc3ZnPSdleHRyYWxnJyBcbiAgICAgIHNpemU9XCJleHRyYWxnXCI+XG4gICAgICA8ZGl2IHNsb3Q9XCJpY29uLXRleHRcIj5TdWJqZWN0czwvZGl2PlxuICAgIDwvYXBwLWljb25zPlxuICA8L2E+XG4gIDwvZGl2PlxuLS0+XG5cbjwhLS1cbjxzZWN0aW9uIGNsYXNzPVwicmVjZW50XCI+XG4gIDxoMiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MDtcIj5SZWNlbnRseSBEaWdpdGl6ZWQ8L2gyPiBcbiAgPGgyIHN0eWxlPVwibWFyZ2luLWJvdHRvbTowOyBtYXJnaW4tdG9wOjA7IGZvbnQtd2VpZ2h0OnZhcigtLWZ3LXJlZ3VsYXIpXCI+Q29sbGVjdGlvbnM8L2gyPlxuICAkeyBTaGFyZWRIdG1sLmhlYWRlckRvdHMoKSB9XG4gIDxkaXYgY2xhc3M9XCJjb2xsZWN0aW9uLWdyaWQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPjxkaXYgY2xhc3M9XCJjb250ZW50XCI+ZDwvZGl2PjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj48ZGl2IGNsYXNzPVwiY29udGVudFwiPmQ8L2Rpdj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5kPC9kaXY+PC9kaXY+IFxuICA8L2Rpdj5cblxuPC9zZWN0aW9uPlxuLS0+XG5cbjwhLS1cbjxzZWN0aW9uIGNsYXNzPVwiZmVhdHVyZWRcIj5cbiAgPGgxIHN0eWxlPVwibWFyZ2luLWJvdHRvbTowO1wiPkZlYXR1cmVkIENvbGxlY3Rpb25zPC9oMT5cbiAgPGRhbXMtd2F0ZXJjb2xvci1vdmVybGF5IFxuICAgICAgaWNvbj1cInN0YXJcIj5cbiAgPC9kYW1zLXdhdGVyY29sb3Itb3ZlcmxheT5cbiAgXG4gIDxkaXYgY2xhc3M9XCJmZWF0dXJlZC1ncmlkLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlZC1ncmlkLWl0ZW1cIj48aDM+VGhlIEdyZWF0ZXN0IDxici8+IFdpbmUgTGlicmFyeTwvaDM+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZWQtZ3JpZC1pdGVtXCI+PHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGlxdWFtIHN1c2NpcGl0IGludGVyZHVtIGRvbG9yLCB2aXRhZSBtYXR0aXMgb2RpbyBjb252YWxsaXMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXRhZS4gRXRpYW0gZXJhdCBhcmN1LCBjb25kaW1lbnR1bSBzZWQgc2FnaXR0aXMgaWQsIG1hbGVzdWFkYSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdCBhbWV0IGxpYmVyby4gTnVsbGFtIGJsYW5kaXQgbW9sbGlzIGNvbW1vZG8uIE51bmMgaW4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcHN1bSB2aXRhZSBmZWxpcyB2ZW5lbmF0aXMgdHJpc3RpcXVlLiBEb25lYyBpZCBvcmNpIGlkIHB1cnVzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmliZW5kdW0gYXVjdG9yLiBFdGlhbSBwb3J0YSBtaSB1dCBzZW0gZmluaWJ1cywgbmVjIHBlbGxlbnRlc3F1ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyYXQgdWx0cmljZXMuIEZ1c2NlIGV0IG1hc3NhIG5lYyB0dXJwaXMgcHJldGl1bSBjb252YWxsaXMgc2VkIHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWkuIEN1cmFiaXR1ciBpbiBkb2xvciBub24ganVzdG8gdm9sdXRwYXQgc2FnaXR0aXMgYWMgdXQgcXVhbS48L3A+XG4gICAgPC9kaXY+XG5cblxuPGRpdiBjbGFzcz1cImZlYXR1cmVkLWNvbGxlY3Rpb25zXCI+XG4gIDxoMT5GZWF0dXJlZCBDb2xsZWN0aW9uczwvaDE+XG4gIDxkaXYgY2xhc3M9XCJjYXJkLWdyaWRcIj5cbiAgICAke3RoaXMuaGlnaGxpZ2h0ZWRDb2xsZWN0aW9ucy5tYXAoKGNvbGxlY3Rpb24pID0+IFxuICAgICAgaHRtbGBcbiAgICAgIDxkYW1zLWNvbGxlY3Rpb24tY2FyZCAuY29sbGVjdGlvbj1cIiR7Y29sbGVjdGlvbn1cIj48L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuXG4gICAgICBgXG4gICAgICApfVxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sbGVjdGlvbi1ncmlkLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbGxlY3Rpb24tb3V0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxlY3Rpb25zXCIgaWQ9XCJjb2xsZWN0aW9ucy1ob21lXCI+XG4gICAgICAgICAgJHt0aGlzLmhpZ2hsaWdodGVkQ29sbGVjdGlvbnMubWFwKChpdGVtKSA9PiBcbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhcHAtY29sbGVjdGlvbi1jYXJkIFxuICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke2l0ZW0uX2lkfVwiIFxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uPVwiJHtpdGVtfVwiIFxuICAgICAgICAgICAgICAgIEBrZXl1cD1cIiR7dGhpcy5fb25Db2xsZWN0aW9uQ2xpY2tlZH1cIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fb25Db2xsZWN0aW9uQ2xpY2tlZH1cIj5cbiAgICAgICAgICAgICAgPC9hcHAtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4tLT5cblxuPCEtLVxuPHNlY3Rpb24gY2xhc3M9XCJhYm91dFwiPlxuICA8ZGl2IGNsYXNzPVwiYWJvdXQtZ3JpZC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4gXG4gICAgICAgIDxoMiBzdHlsZT1cIm1hcmdpbjowOyBcIj5BYm91dDwvaDI+XG4gICAgICAgIDxoMSBzdHlsZT1cIm1hcmdpbjowOyBmb250LXdlaWdodDp2YXIoLS1mdy1yZWd1bGFyKVwiPkRpZ2l0YWwgQ29sbGVjdGlvbnM8L2gxPlxuICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OjEwcHg7ZmxvYXQ6bGVmdDtcIj4keyBTaGFyZWRIdG1sLmhlYWRlckRvdHMoKSB9ICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjowOyBcIj5UaGUgVUMgRGF2aXMgRGlnaXRhbCBDb2xsZWN0aW9ucyBpcyBhIGxvY2FsbHkgZGV2ZWxvcGVkIGRpZ2l0YWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBvc2l0b3J5IHRoYXQgd2FzIGRlc2lnbmVkIHRvIHN0b3JlIGFuZCBtYW5hZ2UgdGhlIGRpZ2l0YWwgYXNzZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiBVQyBEYXZpcy4gIFRoZXNlIERpZ2l0YWwgQ29sbGVjdGlvbnMgYXJlIGludGVuZGVkIHRvIGluY3JlYXNlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzIHRvIHByZXZpb3VzbHkgdW5kaXNjb3ZlcmFibGUgZGlnaXRhbCBhc3NldHMgaGVsZCBieSB0aGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbml2ZXJzaXR5IExpYnJhcnkuIDwvcD5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuLS0+XG5cblxuXG5gO30iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgb3V0bGluZSA6IDA7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gIH1cXG5cXG4gIDpob3N0KDpob3ZlciksIDpob3N0KDpmb2N1cykgIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDEzcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5pbWcuZGVmYXVsdEltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NSU7XFxuICB9XFxuXFxuICAuaW1nIHtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9sb2dvcy9sb2dvLXdoaXRlLTUxMi5wbmcnKTsgLyogZmFsbGJhY2sgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIG5lZWRzIHRvIGJlIDY1JSAqL1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAgICBcXG4gIH1cXG5cXG4gIC5pbWcgPiBkaXYgIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMjVweDtcXG4gICAgYm90dG9tOiAyNXB4O1xcbiAgICBcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDM4LCA4NSwgLjgpOyAgICAgIFxcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBcXG4gIGlkPVxcXCJpbWdcXFwiXFxuICBjbGFzcz1cXFwiaW1nXFxcIiBcXG4gIHJvbGU9XFxcImltZ1xcXCIgXFxuICBhcmlhLWxhYmVsPVxcXCJbW2NvbGxlY3Rpb24ubmFtZV1dXFxcIj5cXG4gIDxkaXY+XFxuICAgIDxkaXY+W1tjb2xsZWN0aW9uLm5hbWVdXTwvZGl2PlxcbiAgICA8ZGl2PltbY29sbGVjdGlvbi5yZWNvcmRDb3VudF1dIGl0ZW1zPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtY29sbGVjdGlvbi1jYXJkLmh0bWxcIjtcbmltcG9ydCBpb0xvYWRlciBmcm9tIFwiLi4vLi4vbGliL3V0aWxzL2ludGVyc2VjdGlvbi1vYnNlcnZlci1sb2FkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29sbGVjdGlvbkNhcmQgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sbGVjdGlvbiA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiAoe30pLFxuICAgICAgICBvYnNlcnZlciA6ICdfb25Db2xsZWN0aW9uQ2hhbmdlJ1xuICAgICAgfSxcbiAgICAgIHRhYmluZGV4IDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDAsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZSA6IHRydWVcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zaG93bkluVmlld3BvcnQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHsgICAgXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAoIHRoaXMuY29sbGVjdGlvbi50aHVtYm5haWxVcmwgPT09ICcvaW1hZ2VzL2xvZ29zL2xvZ28td2hpdGUtNTEyLnBuZycgKSB7XG4gICAgICBsZXQgY2FyZHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnLmltZycpWzBdO1xuICAgICAgY2FyZHMuY2xhc3NOYW1lICs9ICcgZGVmYXVsdEltYWdlJztcbiAgICB9XG5cbiAgICBpZiggIXRoaXMub2JzZXJ2ZXIgKSB7XG4gICAgICBhd2FpdCBpb0xvYWRlci5sb2FkKCk7XG4gICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICBlID0+IHRoaXMuX29uVmlld3BvcnRJbnRlcnNlY3Rpb24oZSksIFxuICAgICAgICB7XG4gICAgICAgICAgcm9vdE1hcmdpbjogJzEwcHgnLCBcbiAgICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmltYWdlTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIF9vbkNvbGxlY3Rpb25DaGFuZ2UoKSB7XG4gICAgaWYoICF0aGlzLnNob3duSW5WaWV3cG9ydCApIHJldHVybjtcbiAgICB0aGlzLl9zZXRCYWNrZ3JvdW5kSW1hZ2UoKTtcbiAgfVxuXG4gIF9vblZpZXdwb3J0SW50ZXJzZWN0aW9uKGUpIHtcbiAgICBpZiggZS5sZW5ndGggPT09IDAgKSByZXR1cm47XG4gICAgZSA9IGVbMF07XG4gICAgXG4gICAgaWYoIHRoaXMuc2hvd25JblZpZXdwb3J0IHx8ICFlLmlzSW50ZXJzZWN0aW5nICkgcmV0dXJuO1xuICAgIHRoaXMuc2hvd25JblZpZXdwb3J0ID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NldEJhY2tncm91bmRJbWFnZSgpO1xuICB9XG5cbiAgX3NldEJhY2tncm91bmRJbWFnZSgpIHtcbiAgICB0aGlzLiQuaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7dGhpcy5jb2xsZWN0aW9uLnRodW1ibmFpbFVybH0nKWA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtY29sbGVjdGlvbi1jYXJkJywgQXBwQ29sbGVjdGlvbkNhcmQpOyIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZEh0bWxcbiAqIEBkZXNjcmlwdGlvbiBMaXQgaHRtbCB0ZW1wbGF0ZSBzdHJpbmdzIHVzZWQgYWNyb3NzIHRoZSBzaXRlLlxuICogRGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIERBTVMgc2hhcmVkIHN0eWxlcywgc28gbWFrZSBzdXJlIHlvdSBpbXBvcnQgdGhvc2UgaW50byB5b3VyIGVsZW1lbnRcbiAqL1xuY2xhc3MgU2hhcmVkSHRtbCB7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaGVhZGVyRG90c1xuICAgKiBAZGVzY3JpcHRpb24gRGlzcGxheXMgdGhlIHllbGxvdyBkb3RzIGJlbmVhdGggYSBzZWN0aW9uIGhlYWRlclxuICAgKiBAcmV0dXJucyB7VGVtcGxhdGVSZXN1bHR9XG4gICAqL1xuICBoZWFkZXJEb3RzKCl7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWRvdHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkb3RcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBuZXcgU2hhcmVkSHRtbCgpOyIsImNsYXNzIEludGVyc2VjdGlvbk9ic2VydmVyTG9hZGVyIHtcbiAgYXN5bmMgbG9hZCgpIHtcbiAgICBpZiggd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyICkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAoIHRoaXMubG9hZGVkICkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAoIHRoaXMubG9hZGluZyApIHtcbiAgICAgIGF3YWl0IHRoaXMubG9hZGluZztcbiAgICAgIHJldHVybiB0aGlzLmxvYWRlZDtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRpbmcgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJvYnNlcnZlci1wb2x5ZmlsbFwiICovICdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInKTtcbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlckxvYWRlcigpOyJdLCJzb3VyY2VSb290IjoiIn0=