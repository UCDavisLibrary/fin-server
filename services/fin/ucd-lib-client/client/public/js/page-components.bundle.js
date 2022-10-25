"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["page-components"],{

/***/ "./public/elements/components/graphics/dams-hero.js":
/*!**********************************************************!*\
  !*** ./public/elements/components/graphics/dams-hero.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./public/elements/pages/components/app-components.js":
/*!************************************************************!*\
  !*** ./public/elements/pages/components/app-components.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppComponents)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _app_components_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-components.tpl.js */ "./public/elements/pages/components/app-components.tpl.js");
/* harmony import */ var _components_graphics_dams_watercolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/graphics/dams-watercolor */ "./public/elements/components/graphics/dams-watercolor.js");
/* harmony import */ var _components_graphics_dams_watercolor_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/graphics/dams-watercolor-overlay */ "./public/elements/components/graphics/dams-watercolor-overlay.js");
/* harmony import */ var _components_graphics_dams_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/graphics/dams-hero */ "./public/elements/components/graphics/dams-hero.js");
/* harmony import */ var _components_cards_dams_collection_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cards/dams-collection-card */ "./public/elements/components/cards/dams-collection-card.js");
/* harmony import */ var _components_filterButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/filterButton */ "./public/elements/components/filterButton.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icon */ "./public/elements/components/icon.js");
/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/nav-bar */ "./public/elements/components/nav-bar.js");
/* harmony import */ var _components_radioButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/radioButton */ "./public/elements/components/radioButton.js");
/* harmony import */ var _components_search_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/search-box */ "./public/elements/components/search-box.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/pagination */ "./public/elements/components/pagination.js");














/**
 * @class AppComponents
 * @description Page for showcasing site components
 */
class AppComponents extends lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement {

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();
    this.render = _app_components_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
  }

}

customElements.define('app-components', AppComponents);


/***/ }),

/***/ "./public/elements/pages/components/app-components.tpl.js":
/*!****************************************************************!*\
  !*** ./public/elements/pages/components/app-components.tpl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/shared-styles */ "./public/elements/styles/shared-styles.js");
/* harmony import */ var _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/shared-html */ "./public/elements/utils/shared-html.js");




function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`

<style>
  ${_styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__.sharedStyles}
  :host {
    display: block;
    background-color: var(--color-white);
  }
  h2 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
  section {
    padding: var(--spacing-sm);
  }
  section:nth-child(odd) {
    background-color: var(--color-white);
  }
  section:nth-child(even) {
    background-color: var(--color-dams-primary-g4);
  }
  code {
    color: var(--color-dams-primary);
    background-color: var(--color-black-10);
  }
  .search {
    text-align:center;
    margin: 0 auto;
  }
  .collection-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: var(--spacing-default);
  }
</style>

<h1 style="text-align:center;">Dams Site Components</h1>
<p style="text-align:center;">These are site components.</p>

<div class="sections">
  <section>
    <h2>Water Color</h2>
    ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__["default"].headerDots() }
    <p>Use <code>dams-watercolor</code> element to display raster watercolor images. You can use 
    properties to change the watercolor pattern, color, size, and rotation.
    </p>
    <dams-watercolor></dams-watercolor>
  </section>

  <section>
    <h2>Water Color<br> <span class="fw-light">with Image</span></h2>
    ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__["default"].headerDots() }
    <p>Use <code>dams-watercolor-overlay</code> element with the <code>img-src</code> attribute to overlay an image on the watercolor.
      In addition to customizing the watercolor, you can adjust the image size and position using element properties.
    </p>
    <dams-watercolor-overlay 
      wc-rotation="30"
      img-position="50% 20%"
      img-src="/images/dev/everest.jpg"></dams-watercolor-overlay>
  </section>

  <section>
    <h2>Water Color<br> <span class="fw-light">with Icon</span></h2>
    ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__["default"].headerDots() }
    <p>Use <code>dams-watercolor-overlay</code> element with the <code>icon</code> attribute to overlay an iron-icon on the watercolor.
    In addition to customizing the watercolor, you can adjust the icon color, size, and position using element properties.
   </p>
    <dams-watercolor-overlay 
      icon="star"></dams-watercolor-overlay>
  </section>

  <section>
    <h2>Hero Image</h2>
    ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__["default"].headerDots() }
    <p>Displays a hero image with overlayed gradient and water color. Enter content using a slot. Use the <code>.srcOptions</code> property to pass an array of img srcs for
    the hero image to randomly choose from.
    </p>
    <dams-hero src="/images/defaults/annual-winter-sale1952.jpg" style="height:300px;">
      <p>Hi there! This is slotted content.</p>
    </dams-hero>
  </section>

  <section>
    <h2>Collections Preview Card</h2>
    ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__["default"].headerDots() }
    <p>Use the <code>.collection</code> property to populate the card.</p>
    <div class="collection-cards">
      <dams-collection-card
        href="https://google.com"
        item-ct="1"
        card-title="A Collection">
      </dams-collection-card>
      <dams-collection-card
        href="#"
        item-ct="45" 
        card-title="Pioneering Punjabis"
        img-src="/images/dev/everest.jpg">
      </dams-collection-card>
      <dams-collection-card 
        href="#"
        item-ct="809"
        card-title="Sherry Lehmann"
        img-src="/images/dev/lehmann.jpg">
      </dams-collection-card>
    </div>

  </section>

  <section>
  <h2>Filter Button</h2>
  ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__["default"].headerDots() }
  <p>Attach a listener to activate filter button appearence and can be exited out once attached.</p>
      <app-filter-button><div slot="filter-button-text">Filter1</div></app-filter-button> 
      <app-filter-button><div slot="filter-button-text">Filter2</div></app-filter-button> 
      <app-filter-button><div slot="filter-button-text">Filter3</div></app-filter-button> 
      <app-filter-button><div slot="filter-button-text">Filter4</div></app-filter-button> 
  </section>

  <section>
  <h2>Icon</h2>
  ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__["default"].headerDots() }
  <p>A specific icon for DAMS creation.</p>
  <p>Size Icon for an extra large size with <code>size-icon-svg='extralg' size="extralg"</code></p>
  <app-icons id="option" icon="iron-archive" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">Collections</div></app-icons>
  <app-icons id="option" icon="iron-dashboard" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">All Items</div></app-icons>
  <br />
  <p>Size Icon for a smaller size with <code>size-icon-svg='lg' size="lg"</code></p>
  <app-icons id="option" icon="iron-account-box" theme-color='secondary' size-icon-svg='lg' size="lg"><div slot="icon-text">Creators</div></app-icons>
  <app-icons id="option" icon="iron-create" theme-color='secondary' size-icon-svg='lg' size="lg"><div slot="icon-text">Formats</div></app-icons>
  </section>

  <section>
  <h2>Navigation Bar</h2>
  ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__["default"].headerDots() }
  <p>Entire Navagation Bar where you can add elements with keyword <code>choices</code>.</p>
  <app-nav-bar choices='[{"text": "Browse"},
                        {"text": "About"},
                        {"text": "FAQ"}]'>
  </app-nav-bar> 
  </section>

  </section>
  <h2>Pagination</h2>
  ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__["default"].headerDots() }

    <p>Attach a listener to be notified when the page changes i.e.<br /><code>@changed-page=\${(e) => console.log(e.target.currentPage)}</code></p>
    <dams-pagination max-page=8 @changed-page=${(e) => console.log(e.target.currentPage)}></dams-pagination>
    <p>Use the <code>max-page</code>, <code>min-page</code>, and <code>current-page</code> attributes to control the display.</p>
    <dams-pagination max-page=15 current-page="7"></dams-pagination>
    <p>Use the <code>pages-per-side</code> attribute to show more pages on either side of the current page<p>
    <dams-pagination max-page=20 current-page=10 pages-per-side=3></dams-pagination>
    </section>
  <section>

  <section>
  <h2>Radio Button</h2>
  ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__["default"].headerDots() }
  <p>Radio button list where you can add elements with keyword <code>choices</code>.</p>
  <p>Radio button list is horizontal but can be made vertical.</p>

  <app-radio-button choices='[{"text": "Title"},
                              {"text": "Recent"},
                              {"text": "Item Quantity"}]'></app-radio-button>
  </section>

  <section>
  <h2>Search Box</h2>
  ${ _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__["default"].headerDots() }
    <div class="search">
      <app-search-box 
        id="searchBox" 
        @search="${this._onSearch}" 
        placeholder="search">
        <iron-icon icon="fin-icons:search" class="search-icon" slot="button-content"></iron-icon>
      </app-search-box>
    </div>
  </section>

</div>




`;}


/***/ }),

/***/ "./public/elements/utils/shared-html.js":
/*!**********************************************!*\
  !*** ./public/elements/utils/shared-html.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUsscUVBQXFCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxxRUFBcUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHFFQUFxQjtBQUMxQjtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0MseUJBQXlCLGdCQUFnQjtBQUN6Qyx5QkFBeUIsY0FBYztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHFFQUFxQjs7QUFFMUIsK0ZBQStGLHlDQUF5QztBQUN4SSxnREFBZ0QseUNBQXlDO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxxRUFBcUI7QUFDMUI7QUFDQTs7QUFFQSwrQkFBK0IsZ0JBQWdCO0FBQy9DLCtCQUErQixpQkFBaUI7QUFDaEQsK0JBQStCLHdCQUF3QjtBQUN2RDs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxxRUFBcUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdMbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvZ3JhcGhpY3MvZGFtcy1oZXJvLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2dyYXBoaWNzL2RhbXMtaGVyby50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2NvbXBvbmVudHMvYXBwLWNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2NvbXBvbmVudHMvYXBwLWNvbXBvbmVudHMudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9zaGFyZWQtaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9kYW1zLWhlcm8udHBsLmpzXCI7XG5cbmltcG9ydCBcIi4vZGFtcy13YXRlcmNvbG9yXCI7XG5cbi8qKlxuICogQGNsYXNzIERhbXNIZXJvXG4gKiBAZGVzY3JpcHRpb24gVUkgY29tcG9uZW50IGZvciBkaXNwbGF5aW5nIGEgaGVybyBpbWFnZVxuICogQHByb3Age0FycmF5fSBzcmNPcHRpb25zIC0gU2V0IG9mIGltYWdlIHNvdXJjZXMgdG8gcmFuZG9tbHkgZGlzcGxheVxuICogQHByb3Age1N0cmluZ30gc3JjIC0gRmFsbGJhY2sgYmFja2dyb3VuZCBpbWFnZSBzb3VyY2VcbiAqIEBwcm9wIHtTdHJpbmd9IHdhdGVyY29sb3IgLSBXYXRlcmNvbG9yIHR5cGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFtc0hlcm8gZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzoge3R5cGU6IFN0cmluZ30sXG4gICAgICBzcmNPcHRpb25zOiB7dHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJzcmMtb3B0aW9uc1wifSxcbiAgICAgIHdhdGVyY29sb3I6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgX3NlbGVjdGVkU3JjOiB7dHlwZTogU3RyaW5nfVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zcmMgPSBcIlwiO1xuICAgIHRoaXMuc3JjT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuX3NlbGVjdGVkU3JjID0gXCJcIjtcbiAgICB0aGlzLndhdGVyY29sb3IgPSBcImJvcmRlci13aGl0ZVwiO1xuXG4gICAgdGhpcy5fc3JjQ2hhbmdlID0gbmV3IEN1c3RvbUV2ZW50KCdzcmMtY2hhbmdlJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBpbWFnZSBoYXMgYmVlbiBsb2FkZWQnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB1cGRhdGVkXG4gICAqIEBkZXNjcmlwdGlvbiBMaXQgbGlmZWN5bGUgbWV0aG9kIGZpcmVkIHdoZW4gZWxlbWVudCBpcyB1cGRhdGVkLlxuICAgKiBcbiAgICogQHBhcmFtIHtNYXB9IHByb3BzIC0gQ2hhbmdlIHByb3BlcnRpZXNcbiAgICovXG4gIHVwZGF0ZWQocHJvcHMpe1xuICAgIGlmIChwcm9wcy5oYXMoJ3NyY09wdGlvbnMnKSkgdGhpcy5fc2V0U3JjKCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNodWZmbGVJbWFnZVxuICAgKiBAZGVzY3JpcHRpb24gUmFuZG9tbHkgZGlzcGxheXMgYSBuZXcgaGVybyBpbWFnZS5cbiAgICogXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBuZXcgaW1nIHNyY1xuICAgKi9cbiAgc2h1ZmZsZUltYWdlKCl7XG4gICAgdGhpcy5fc2V0U3JjKCk7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkU3JjO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3NldFNyY1xuICAgKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgYmFja2dyb3VuZCBpbWFnZSBzcmMgcHJvcGVydHkuXG4gICAqL1xuICBfc2V0U3JjKCl7XG4gICAgbGV0IHNyYyA9IFwiXCI7XG4gICAgbGV0IHNldEN0ID0gdGhpcy5zcmNPcHRpb25zLmxlbmd0aDtcbiAgICBpZiAoIHNldEN0ID09PSAwICYmIHRoaXMuc3JjICkge1xuICAgICAgc3JjID0gdGhpcy5zcmM7XG4gICAgfVxuICAgIGVsc2UgaWYgKCBzZXRDdCA+IDAgKSB7XG4gICAgICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICBzZXRDdCk7XG4gICAgICBzcmMgPSB0aGlzLnNyY09wdGlvbnNbaV07XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkU3JjID0gc3JjO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9zcmNDaGFuZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0Q29udGFpbmVyU3R5bGVzXG4gICAqIEBkZXNjcmlwdGlvbiBJbmxpbmUgc3R5bGVzIGZvciBlbGVtZW50J3MgYmFzZSBjb250YWluZXJcbiAgICogXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBnZXRDb250YWluZXJTdHlsZXMoKXtcbiAgICBsZXQgc3R5bGVzID0ge1xuICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndmFyKC0tZ3JhZGllbnQtYWctcHV0YWgpJ1xuICAgIH07XG4gICAgaWYgKCB0aGlzLl9zZWxlY3RlZFNyYyApIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddICs9IGAsIHVybCgke3RoaXMuX3NlbGVjdGVkU3JjfSlgO1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RhbXMtaGVybycsIERhbXNIZXJvKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICB9XG4gIDo6c2xvdHRlZCgqKSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKSAhaW1wb3J0YW50O1xuICB9XG4gIGRhbXMtd2F0ZXJjb2xvciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAgIGRhbXMtd2F0ZXJjb2xvciB7XG4gICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTA2MHB4KSB7XG4gICAgZGFtcy13YXRlcmNvbG9yIHtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNjAxcHgpIHtcbiAgICBkYW1zLXdhdGVyY29sb3Ige1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCIke3N0eWxlTWFwKHRoaXMuZ2V0Q29udGFpbmVyU3R5bGVzKCkpfVwiPlxuICA8c2xvdD48L3Nsb3Q+XG4gICR7dGhpcy53YXRlcmNvbG9yID8gaHRtbGBcbiAgICA8ZGFtcy13YXRlcmNvbG9yIFxuICAgICAgZWxlbWVudD1cImRpdlwiXG4gICAgICBzcmMtZmlsZS1wcmVmaXg9XCIke3RoaXMud2F0ZXJjb2xvci5zcGxpdChcIi1cIilbMF19XCJcbiAgICAgIGNvbG9yPVwiJHt0aGlzLndhdGVyY29sb3Iuc3BsaXQoXCItXCIpWzFdfVwiPlxuICAgIDwvZGFtcy13YXRlcmNvbG9yPlxuICBgOiBodG1sYGB9XG48L2Rpdj5cblxuYDt9IiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLWNvbXBvbmVudHMudHBsLmpzXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZ3JhcGhpY3MvZGFtcy13YXRlcmNvbG9yXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2dyYXBoaWNzL2RhbXMtd2F0ZXJjb2xvci1vdmVybGF5XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2dyYXBoaWNzL2RhbXMtaGVyb1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9jYXJkcy9kYW1zLWNvbGxlY3Rpb24tY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9maWx0ZXJCdXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaWNvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9uYXYtYmFyXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3JhZGlvQnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3NlYXJjaC1ib3hcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xuXG4vKipcbiAqIEBjbGFzcyBBcHBDb21wb25lbnRzXG4gKiBAZGVzY3JpcHRpb24gUGFnZSBmb3Igc2hvd2Nhc2luZyBzaXRlIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29tcG9uZW50cyBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWNvbXBvbmVudHMnLCBBcHBDb21wb25lbnRzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBzaGFyZWRTdHlsZXMgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3NoYXJlZC1zdHlsZXNcIjtcbmltcG9ydCBTaGFyZWRIdG1sIGZyb20gJy4uLy4uL3V0aWxzL3NoYXJlZC1odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gICR7c2hhcmVkU3R5bGVzfVxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICB9XG4gIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xuICB9XG4gIHNlY3Rpb246bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgfVxuICBzZWN0aW9uOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFtcy1wcmltYXJ5LWc0KTtcbiAgfVxuICBjb2RlIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFtcy1wcmltYXJ5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjay0xMCk7XG4gIH1cbiAgLnNlYXJjaCB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmNvbGxlY3Rpb24tY2FyZHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICAgIGdyaWQtZ2FwOiB2YXIoLS1zcGFjaW5nLWRlZmF1bHQpO1xuICB9XG48L3N0eWxlPlxuXG48aDEgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtcIj5EYW1zIFNpdGUgQ29tcG9uZW50czwvaDE+XG48cCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiPlRoZXNlIGFyZSBzaXRlIGNvbXBvbmVudHMuPC9wPlxuXG48ZGl2IGNsYXNzPVwic2VjdGlvbnNcIj5cbiAgPHNlY3Rpb24+XG4gICAgPGgyPldhdGVyIENvbG9yPC9oMj5cbiAgICAkeyBTaGFyZWRIdG1sLmhlYWRlckRvdHMoKSB9XG4gICAgPHA+VXNlIDxjb2RlPmRhbXMtd2F0ZXJjb2xvcjwvY29kZT4gZWxlbWVudCB0byBkaXNwbGF5IHJhc3RlciB3YXRlcmNvbG9yIGltYWdlcy4gWW91IGNhbiB1c2UgXG4gICAgcHJvcGVydGllcyB0byBjaGFuZ2UgdGhlIHdhdGVyY29sb3IgcGF0dGVybiwgY29sb3IsIHNpemUsIGFuZCByb3RhdGlvbi5cbiAgICA8L3A+XG4gICAgPGRhbXMtd2F0ZXJjb2xvcj48L2RhbXMtd2F0ZXJjb2xvcj5cbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uPlxuICAgIDxoMj5XYXRlciBDb2xvcjxicj4gPHNwYW4gY2xhc3M9XCJmdy1saWdodFwiPndpdGggSW1hZ2U8L3NwYW4+PC9oMj5cbiAgICAkeyBTaGFyZWRIdG1sLmhlYWRlckRvdHMoKSB9XG4gICAgPHA+VXNlIDxjb2RlPmRhbXMtd2F0ZXJjb2xvci1vdmVybGF5PC9jb2RlPiBlbGVtZW50IHdpdGggdGhlIDxjb2RlPmltZy1zcmM8L2NvZGU+IGF0dHJpYnV0ZSB0byBvdmVybGF5IGFuIGltYWdlIG9uIHRoZSB3YXRlcmNvbG9yLlxuICAgICAgSW4gYWRkaXRpb24gdG8gY3VzdG9taXppbmcgdGhlIHdhdGVyY29sb3IsIHlvdSBjYW4gYWRqdXN0IHRoZSBpbWFnZSBzaXplIGFuZCBwb3NpdGlvbiB1c2luZyBlbGVtZW50IHByb3BlcnRpZXMuXG4gICAgPC9wPlxuICAgIDxkYW1zLXdhdGVyY29sb3Itb3ZlcmxheSBcbiAgICAgIHdjLXJvdGF0aW9uPVwiMzBcIlxuICAgICAgaW1nLXBvc2l0aW9uPVwiNTAlIDIwJVwiXG4gICAgICBpbWctc3JjPVwiL2ltYWdlcy9kZXYvZXZlcmVzdC5qcGdcIj48L2RhbXMtd2F0ZXJjb2xvci1vdmVybGF5PlxuICA8L3NlY3Rpb24+XG5cbiAgPHNlY3Rpb24+XG4gICAgPGgyPldhdGVyIENvbG9yPGJyPiA8c3BhbiBjbGFzcz1cImZ3LWxpZ2h0XCI+d2l0aCBJY29uPC9zcGFuPjwvaDI+XG4gICAgJHsgU2hhcmVkSHRtbC5oZWFkZXJEb3RzKCkgfVxuICAgIDxwPlVzZSA8Y29kZT5kYW1zLXdhdGVyY29sb3Itb3ZlcmxheTwvY29kZT4gZWxlbWVudCB3aXRoIHRoZSA8Y29kZT5pY29uPC9jb2RlPiBhdHRyaWJ1dGUgdG8gb3ZlcmxheSBhbiBpcm9uLWljb24gb24gdGhlIHdhdGVyY29sb3IuXG4gICAgSW4gYWRkaXRpb24gdG8gY3VzdG9taXppbmcgdGhlIHdhdGVyY29sb3IsIHlvdSBjYW4gYWRqdXN0IHRoZSBpY29uIGNvbG9yLCBzaXplLCBhbmQgcG9zaXRpb24gdXNpbmcgZWxlbWVudCBwcm9wZXJ0aWVzLlxuICAgPC9wPlxuICAgIDxkYW1zLXdhdGVyY29sb3Itb3ZlcmxheSBcbiAgICAgIGljb249XCJzdGFyXCI+PC9kYW1zLXdhdGVyY29sb3Itb3ZlcmxheT5cbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uPlxuICAgIDxoMj5IZXJvIEltYWdlPC9oMj5cbiAgICAkeyBTaGFyZWRIdG1sLmhlYWRlckRvdHMoKSB9XG4gICAgPHA+RGlzcGxheXMgYSBoZXJvIGltYWdlIHdpdGggb3ZlcmxheWVkIGdyYWRpZW50IGFuZCB3YXRlciBjb2xvci4gRW50ZXIgY29udGVudCB1c2luZyBhIHNsb3QuIFVzZSB0aGUgPGNvZGU+LnNyY09wdGlvbnM8L2NvZGU+IHByb3BlcnR5IHRvIHBhc3MgYW4gYXJyYXkgb2YgaW1nIHNyY3MgZm9yXG4gICAgdGhlIGhlcm8gaW1hZ2UgdG8gcmFuZG9tbHkgY2hvb3NlIGZyb20uXG4gICAgPC9wPlxuICAgIDxkYW1zLWhlcm8gc3JjPVwiL2ltYWdlcy9kZWZhdWx0cy9hbm51YWwtd2ludGVyLXNhbGUxOTUyLmpwZ1wiIHN0eWxlPVwiaGVpZ2h0OjMwMHB4O1wiPlxuICAgICAgPHA+SGkgdGhlcmUhIFRoaXMgaXMgc2xvdHRlZCBjb250ZW50LjwvcD5cbiAgICA8L2RhbXMtaGVybz5cbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uPlxuICAgIDxoMj5Db2xsZWN0aW9ucyBQcmV2aWV3IENhcmQ8L2gyPlxuICAgICR7IFNoYXJlZEh0bWwuaGVhZGVyRG90cygpIH1cbiAgICA8cD5Vc2UgdGhlIDxjb2RlPi5jb2xsZWN0aW9uPC9jb2RlPiBwcm9wZXJ0eSB0byBwb3B1bGF0ZSB0aGUgY2FyZC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImNvbGxlY3Rpb24tY2FyZHNcIj5cbiAgICAgIDxkYW1zLWNvbGxlY3Rpb24tY2FyZFxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCJcbiAgICAgICAgaXRlbS1jdD1cIjFcIlxuICAgICAgICBjYXJkLXRpdGxlPVwiQSBDb2xsZWN0aW9uXCI+XG4gICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgPGRhbXMtY29sbGVjdGlvbi1jYXJkXG4gICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgaXRlbS1jdD1cIjQ1XCIgXG4gICAgICAgIGNhcmQtdGl0bGU9XCJQaW9uZWVyaW5nIFB1bmphYmlzXCJcbiAgICAgICAgaW1nLXNyYz1cIi9pbWFnZXMvZGV2L2V2ZXJlc3QuanBnXCI+XG4gICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgPGRhbXMtY29sbGVjdGlvbi1jYXJkIFxuICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgIGl0ZW0tY3Q9XCI4MDlcIlxuICAgICAgICBjYXJkLXRpdGxlPVwiU2hlcnJ5IExlaG1hbm5cIlxuICAgICAgICBpbWctc3JjPVwiL2ltYWdlcy9kZXYvbGVobWFubi5qcGdcIj5cbiAgICAgIDwvZGFtcy1jb2xsZWN0aW9uLWNhcmQ+XG4gICAgPC9kaXY+XG5cbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uPlxuICA8aDI+RmlsdGVyIEJ1dHRvbjwvaDI+XG4gICR7IFNoYXJlZEh0bWwuaGVhZGVyRG90cygpIH1cbiAgPHA+QXR0YWNoIGEgbGlzdGVuZXIgdG8gYWN0aXZhdGUgZmlsdGVyIGJ1dHRvbiBhcHBlYXJlbmNlIGFuZCBjYW4gYmUgZXhpdGVkIG91dCBvbmNlIGF0dGFjaGVkLjwvcD5cbiAgICAgIDxhcHAtZmlsdGVyLWJ1dHRvbj48ZGl2IHNsb3Q9XCJmaWx0ZXItYnV0dG9uLXRleHRcIj5GaWx0ZXIxPC9kaXY+PC9hcHAtZmlsdGVyLWJ1dHRvbj4gXG4gICAgICA8YXBwLWZpbHRlci1idXR0b24+PGRpdiBzbG90PVwiZmlsdGVyLWJ1dHRvbi10ZXh0XCI+RmlsdGVyMjwvZGl2PjwvYXBwLWZpbHRlci1idXR0b24+IFxuICAgICAgPGFwcC1maWx0ZXItYnV0dG9uPjxkaXYgc2xvdD1cImZpbHRlci1idXR0b24tdGV4dFwiPkZpbHRlcjM8L2Rpdj48L2FwcC1maWx0ZXItYnV0dG9uPiBcbiAgICAgIDxhcHAtZmlsdGVyLWJ1dHRvbj48ZGl2IHNsb3Q9XCJmaWx0ZXItYnV0dG9uLXRleHRcIj5GaWx0ZXI0PC9kaXY+PC9hcHAtZmlsdGVyLWJ1dHRvbj4gXG4gIDwvc2VjdGlvbj5cblxuICA8c2VjdGlvbj5cbiAgPGgyPkljb248L2gyPlxuICAkeyBTaGFyZWRIdG1sLmhlYWRlckRvdHMoKSB9XG4gIDxwPkEgc3BlY2lmaWMgaWNvbiBmb3IgREFNUyBjcmVhdGlvbi48L3A+XG4gIDxwPlNpemUgSWNvbiBmb3IgYW4gZXh0cmEgbGFyZ2Ugc2l6ZSB3aXRoIDxjb2RlPnNpemUtaWNvbi1zdmc9J2V4dHJhbGcnIHNpemU9XCJleHRyYWxnXCI8L2NvZGU+PC9wPlxuICA8YXBwLWljb25zIGlkPVwib3B0aW9uXCIgaWNvbj1cImlyb24tYXJjaGl2ZVwiIHRoZW1lLWNvbG9yPSdzZWNvbmRhcnknIHNpemUtaWNvbi1zdmc9J2V4dHJhbGcnIHNpemU9XCJleHRyYWxnXCI+PGRpdiBzbG90PVwiaWNvbi10ZXh0XCI+Q29sbGVjdGlvbnM8L2Rpdj48L2FwcC1pY29ucz5cbiAgPGFwcC1pY29ucyBpZD1cIm9wdGlvblwiIGljb249XCJpcm9uLWRhc2hib2FyZFwiIHRoZW1lLWNvbG9yPSdzZWNvbmRhcnknIHNpemUtaWNvbi1zdmc9J2V4dHJhbGcnIHNpemU9XCJleHRyYWxnXCI+PGRpdiBzbG90PVwiaWNvbi10ZXh0XCI+QWxsIEl0ZW1zPC9kaXY+PC9hcHAtaWNvbnM+XG4gIDxiciAvPlxuICA8cD5TaXplIEljb24gZm9yIGEgc21hbGxlciBzaXplIHdpdGggPGNvZGU+c2l6ZS1pY29uLXN2Zz0nbGcnIHNpemU9XCJsZ1wiPC9jb2RlPjwvcD5cbiAgPGFwcC1pY29ucyBpZD1cIm9wdGlvblwiIGljb249XCJpcm9uLWFjY291bnQtYm94XCIgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgc2l6ZS1pY29uLXN2Zz0nbGcnIHNpemU9XCJsZ1wiPjxkaXYgc2xvdD1cImljb24tdGV4dFwiPkNyZWF0b3JzPC9kaXY+PC9hcHAtaWNvbnM+XG4gIDxhcHAtaWNvbnMgaWQ9XCJvcHRpb25cIiBpY29uPVwiaXJvbi1jcmVhdGVcIiB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBzaXplLWljb24tc3ZnPSdsZycgc2l6ZT1cImxnXCI+PGRpdiBzbG90PVwiaWNvbi10ZXh0XCI+Rm9ybWF0czwvZGl2PjwvYXBwLWljb25zPlxuICA8L3NlY3Rpb24+XG5cbiAgPHNlY3Rpb24+XG4gIDxoMj5OYXZpZ2F0aW9uIEJhcjwvaDI+XG4gICR7IFNoYXJlZEh0bWwuaGVhZGVyRG90cygpIH1cbiAgPHA+RW50aXJlIE5hdmFnYXRpb24gQmFyIHdoZXJlIHlvdSBjYW4gYWRkIGVsZW1lbnRzIHdpdGgga2V5d29yZCA8Y29kZT5jaG9pY2VzPC9jb2RlPi48L3A+XG4gIDxhcHAtbmF2LWJhciBjaG9pY2VzPSdbe1widGV4dFwiOiBcIkJyb3dzZVwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJBYm91dFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJGQVFcIn1dJz5cbiAgPC9hcHAtbmF2LWJhcj4gXG4gIDwvc2VjdGlvbj5cblxuICA8L3NlY3Rpb24+XG4gIDxoMj5QYWdpbmF0aW9uPC9oMj5cbiAgJHsgU2hhcmVkSHRtbC5oZWFkZXJEb3RzKCkgfVxuXG4gICAgPHA+QXR0YWNoIGEgbGlzdGVuZXIgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgcGFnZSBjaGFuZ2VzIGkuZS48YnIgLz48Y29kZT5AY2hhbmdlZC1wYWdlPVxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuY3VycmVudFBhZ2UpfTwvY29kZT48L3A+XG4gICAgPGRhbXMtcGFnaW5hdGlvbiBtYXgtcGFnZT04IEBjaGFuZ2VkLXBhZ2U9JHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuY3VycmVudFBhZ2UpfT48L2RhbXMtcGFnaW5hdGlvbj5cbiAgICA8cD5Vc2UgdGhlIDxjb2RlPm1heC1wYWdlPC9jb2RlPiwgPGNvZGU+bWluLXBhZ2U8L2NvZGU+LCBhbmQgPGNvZGU+Y3VycmVudC1wYWdlPC9jb2RlPiBhdHRyaWJ1dGVzIHRvIGNvbnRyb2wgdGhlIGRpc3BsYXkuPC9wPlxuICAgIDxkYW1zLXBhZ2luYXRpb24gbWF4LXBhZ2U9MTUgY3VycmVudC1wYWdlPVwiN1wiPjwvZGFtcy1wYWdpbmF0aW9uPlxuICAgIDxwPlVzZSB0aGUgPGNvZGU+cGFnZXMtcGVyLXNpZGU8L2NvZGU+IGF0dHJpYnV0ZSB0byBzaG93IG1vcmUgcGFnZXMgb24gZWl0aGVyIHNpZGUgb2YgdGhlIGN1cnJlbnQgcGFnZTxwPlxuICAgIDxkYW1zLXBhZ2luYXRpb24gbWF4LXBhZ2U9MjAgY3VycmVudC1wYWdlPTEwIHBhZ2VzLXBlci1zaWRlPTM+PC9kYW1zLXBhZ2luYXRpb24+XG4gICAgPC9zZWN0aW9uPlxuICA8c2VjdGlvbj5cblxuICA8c2VjdGlvbj5cbiAgPGgyPlJhZGlvIEJ1dHRvbjwvaDI+XG4gICR7IFNoYXJlZEh0bWwuaGVhZGVyRG90cygpIH1cbiAgPHA+UmFkaW8gYnV0dG9uIGxpc3Qgd2hlcmUgeW91IGNhbiBhZGQgZWxlbWVudHMgd2l0aCBrZXl3b3JkIDxjb2RlPmNob2ljZXM8L2NvZGU+LjwvcD5cbiAgPHA+UmFkaW8gYnV0dG9uIGxpc3QgaXMgaG9yaXpvbnRhbCBidXQgY2FuIGJlIG1hZGUgdmVydGljYWwuPC9wPlxuXG4gIDxhcHAtcmFkaW8tYnV0dG9uIGNob2ljZXM9J1t7XCJ0ZXh0XCI6IFwiVGl0bGVcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiUmVjZW50XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkl0ZW0gUXVhbnRpdHlcIn1dJz48L2FwcC1yYWRpby1idXR0b24+XG4gIDwvc2VjdGlvbj5cblxuICA8c2VjdGlvbj5cbiAgPGgyPlNlYXJjaCBCb3g8L2gyPlxuICAkeyBTaGFyZWRIdG1sLmhlYWRlckRvdHMoKSB9XG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaFwiPlxuICAgICAgPGFwcC1zZWFyY2gtYm94IFxuICAgICAgICBpZD1cInNlYXJjaEJveFwiIFxuICAgICAgICBAc2VhcmNoPVwiJHt0aGlzLl9vblNlYXJjaH1cIiBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIj5cbiAgICAgICAgPGlyb24taWNvbiBpY29uPVwiZmluLWljb25zOnNlYXJjaFwiIGNsYXNzPVwic2VhcmNoLWljb25cIiBzbG90PVwiYnV0dG9uLWNvbnRlbnRcIj48L2lyb24taWNvbj5cbiAgICAgIDwvYXBwLXNlYXJjaC1ib3g+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cblxuPC9kaXY+XG5cblxuXG5cbmA7fVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuLyoqXG4gKiBAY2xhc3MgU2hhcmVkSHRtbFxuICogQGRlc2NyaXB0aW9uIExpdCBodG1sIHRlbXBsYXRlIHN0cmluZ3MgdXNlZCBhY3Jvc3MgdGhlIHNpdGUuXG4gKiBEZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggREFNUyBzaGFyZWQgc3R5bGVzLCBzbyBtYWtlIHN1cmUgeW91IGltcG9ydCB0aG9zZSBpbnRvIHlvdXIgZWxlbWVudFxuICovXG5jbGFzcyBTaGFyZWRIdG1sIHtcblxuICAvKipcbiAgICogQG1ldGhvZCBoZWFkZXJEb3RzXG4gICAqIEBkZXNjcmlwdGlvbiBEaXNwbGF5cyB0aGUgeWVsbG93IGRvdHMgYmVuZWF0aCBhIHNlY3Rpb24gaGVhZGVyXG4gICAqIEByZXR1cm5zIHtUZW1wbGF0ZVJlc3VsdH1cbiAgICovXG4gIGhlYWRlckRvdHMoKXtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItZG90c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkb3RcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBTaGFyZWRIdG1sKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9