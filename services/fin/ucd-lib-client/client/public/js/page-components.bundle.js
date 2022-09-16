(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-components"],{

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

/***/ "./public/elements/pages/components/app-components.js":
/*!************************************************************!*\
  !*** ./public/elements/pages/components/app-components.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppComponents; });
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
class AppComponents extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/shared-styles */ "./public/elements/styles/shared-styles.js");
/* harmony import */ var _utils_shared_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/shared-html */ "./public/elements/utils/shared-html.js");




function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

<style>
  ${_styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__["sharedStyles"]}
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9ncmFwaGljcy9kYW1zLWhlcm8uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvZ3JhcGhpY3MvZGFtcy1oZXJvLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL3NoYXJlZC1odG1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0Q7O0FBRWI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsTUFBTTtBQUNoQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCO0FBQ2UsdUJBQXVCLHNEQUFVOztBQUVoRDtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLG1CQUFtQixzQ0FBc0M7QUFDekQsbUJBQW1CLGFBQWE7QUFDaEMscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix5REFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtB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Q2Y7QUFDQTs7QUFFQSwrQkFBK0IsZ0JBQWdCO0FBQy9DLCtCQUErQixpQkFBaUI7QUFDaEQsK0JBQStCLHdCQUF3QjtBQUN2RDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxDQUFDLDBEQUFVO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7OztBQzdMQTtBQUFBO0FBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXLGdEQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLCtFQUFnQixFIiwiZmlsZSI6InBhZ2UtY29tcG9uZW50cy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9kYW1zLWhlcm8udHBsLmpzXCI7XG5cbmltcG9ydCBcIi4vZGFtcy13YXRlcmNvbG9yXCI7XG5cbi8qKlxuICogQGNsYXNzIERhbXNIZXJvXG4gKiBAZGVzY3JpcHRpb24gVUkgY29tcG9uZW50IGZvciBkaXNwbGF5aW5nIGEgaGVybyBpbWFnZVxuICogQHByb3Age0FycmF5fSBzcmNPcHRpb25zIC0gU2V0IG9mIGltYWdlIHNvdXJjZXMgdG8gcmFuZG9tbHkgZGlzcGxheVxuICogQHByb3Age1N0cmluZ30gc3JjIC0gRmFsbGJhY2sgYmFja2dyb3VuZCBpbWFnZSBzb3VyY2VcbiAqIEBwcm9wIHtTdHJpbmd9IHdhdGVyY29sb3IgLSBXYXRlcmNvbG9yIHR5cGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFtc0hlcm8gZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzoge3R5cGU6IFN0cmluZ30sXG4gICAgICBzcmNPcHRpb25zOiB7dHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJzcmMtb3B0aW9uc1wifSxcbiAgICAgIHdhdGVyY29sb3I6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgX3NlbGVjdGVkU3JjOiB7dHlwZTogU3RyaW5nfVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zcmMgPSBcIlwiO1xuICAgIHRoaXMuc3JjT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuX3NlbGVjdGVkU3JjID0gXCJcIjtcbiAgICB0aGlzLndhdGVyY29sb3IgPSBcImJvcmRlci13aGl0ZVwiO1xuXG4gICAgdGhpcy5fc3JjQ2hhbmdlID0gbmV3IEN1c3RvbUV2ZW50KCdzcmMtY2hhbmdlJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBpbWFnZSBoYXMgYmVlbiBsb2FkZWQnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBmaXJzdFVwZGF0ZWRcbiAgICogQGRlc2NyaXB0aW9uIExpdCBsaWZlY3lsZSBtZXRob2QgZmlyZWQgd2hlbiBlbGVtZW50IGlzIGZpcnN0IHVwZGF0ZWQuXG4gICAqL1xuICBmaXJzdFVwZGF0ZWQoKXtcbiAgICB0aGlzLl9zZXRTcmMoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgc2h1ZmZsZUltYWdlXG4gICAqIEBkZXNjcmlwdGlvbiBSYW5kb21seSBkaXNwbGF5cyBhIG5ldyBoZXJvIGltYWdlLlxuICAgKiBcbiAgICogQHJldHVybnMge1N0cmluZ30gVGhlIG5ldyBpbWcgc3JjXG4gICAqL1xuICBzaHVmZmxlSW1hZ2UoKXtcbiAgICB0aGlzLl9zZXRTcmMoKTtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRTcmM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfc2V0U3JjXG4gICAqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHNyYyBwcm9wZXJ0eS5cbiAgICovXG4gIF9zZXRTcmMoKXtcbiAgICBsZXQgc3JjID0gXCJcIjtcbiAgICBsZXQgc2V0Q3QgPSB0aGlzLnNyY09wdGlvbnMubGVuZ3RoO1xuICAgIGlmICggc2V0Q3QgPT09IDAgJiYgdGhpcy5zcmMgKSB7XG4gICAgICBzcmMgPSB0aGlzLnNyYztcbiAgICB9XG4gICAgZWxzZSBpZiAoIHNldEN0ID4gMCApIHtcbiAgICAgIHNyYyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICBzZXRDdCArIDEpO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZFNyYyA9IHNyYztcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fc3JjQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldENvbnRhaW5lclN0eWxlc1xuICAgKiBAZGVzY3JpcHRpb24gSW5saW5lIHN0eWxlcyBmb3IgZWxlbWVudCdzIGJhc2UgY29udGFpbmVyXG4gICAqIFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0Q29udGFpbmVyU3R5bGVzKCl7XG4gICAgbGV0IHN0eWxlcyA9IHtcbiAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3ZhcigtLWdyYWRpZW50LWFnLXB1dGFoKSdcbiAgICB9O1xuICAgIGlmICggdGhpcy5fc2VsZWN0ZWRTcmMgKSBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSArPSBgLCB1cmwoJHt0aGlzLl9zZWxlY3RlZFNyY30pYDtcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkYW1zLWhlcm8nLCBEYW1zSGVybyk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgfVxuICA6OnNsb3R0ZWQoKikge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSkgIWltcG9ydGFudDtcbiAgfVxuICBkYW1zLXdhdGVyY29sb3Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgICBkYW1zLXdhdGVyY29sb3Ige1xuICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwNjBweCkge1xuICAgIGRhbXMtd2F0ZXJjb2xvciB7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTYwMXB4KSB7XG4gICAgZGFtcy13YXRlcmNvbG9yIHtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiJHtzdHlsZU1hcCh0aGlzLmdldENvbnRhaW5lclN0eWxlcygpKX1cIj5cbiAgPHNsb3Q+PC9zbG90PlxuICAke3RoaXMud2F0ZXJjb2xvciA/IGh0bWxgXG4gICAgPGRhbXMtd2F0ZXJjb2xvciBcbiAgICAgIGVsZW1lbnQ9XCJkaXZcIlxuICAgICAgc3JjLWZpbGUtcHJlZml4PVwiJHt0aGlzLndhdGVyY29sb3Iuc3BsaXQoXCItXCIpWzBdfVwiXG4gICAgICBjb2xvcj1cIiR7dGhpcy53YXRlcmNvbG9yLnNwbGl0KFwiLVwiKVsxXX1cIj5cbiAgICA8L2RhbXMtd2F0ZXJjb2xvcj5cbiAgYDogaHRtbGBgfVxuPC9kaXY+XG5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2FwcC1jb21wb25lbnRzLnRwbC5qc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2dyYXBoaWNzL2RhbXMtd2F0ZXJjb2xvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9ncmFwaGljcy9kYW1zLXdhdGVyY29sb3Itb3ZlcmxheVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9ncmFwaGljcy9kYW1zLWhlcm9cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvZGFtcy1jb2xsZWN0aW9uLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZmlsdGVyQnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2ljb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbmF2LWJhclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9yYWRpb0J1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9zZWFyY2gtYm94XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcblxuLyoqXG4gKiBAY2xhc3MgQXBwQ29tcG9uZW50c1xuICogQGRlc2NyaXB0aW9uIFBhZ2UgZm9yIHNob3djYXNpbmcgc2l0ZSBjb21wb25lbnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbXBvbmVudHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1jb21wb25lbnRzJywgQXBwQ29tcG9uZW50cyk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgc2hhcmVkU3R5bGVzIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9zaGFyZWQtc3R5bGVzXCI7XG5pbXBvcnQgU2hhcmVkSHRtbCBmcm9tICcuLi8uLi91dGlscy9zaGFyZWQtaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICAke3NoYXJlZFN0eWxlc31cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgfVxuICBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgfVxuICBzZWN0aW9uOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIH1cbiAgc2VjdGlvbjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbXMtcHJpbWFyeS1nNCk7XG4gIH1cbiAgY29kZSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhbXMtcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2stMTApO1xuICB9XG4gIC5zZWFyY2gge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5jb2xsZWN0aW9uLWNhcmRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbiAgICBncmlkLWdhcDogdmFyKC0tc3BhY2luZy1kZWZhdWx0KTtcbiAgfVxuPC9zdHlsZT5cblxuPGgxIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+RGFtcyBTaXRlIENvbXBvbmVudHM8L2gxPlxuPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtcIj5UaGVzZSBhcmUgc2l0ZSBjb21wb25lbnRzLjwvcD5cblxuPGRpdiBjbGFzcz1cInNlY3Rpb25zXCI+XG4gIDxzZWN0aW9uPlxuICAgIDxoMj5XYXRlciBDb2xvcjwvaDI+XG4gICAgJHsgU2hhcmVkSHRtbC5oZWFkZXJEb3RzKCkgfVxuICAgIDxwPlVzZSA8Y29kZT5kYW1zLXdhdGVyY29sb3I8L2NvZGU+IGVsZW1lbnQgdG8gZGlzcGxheSByYXN0ZXIgd2F0ZXJjb2xvciBpbWFnZXMuIFlvdSBjYW4gdXNlIFxuICAgIHByb3BlcnRpZXMgdG8gY2hhbmdlIHRoZSB3YXRlcmNvbG9yIHBhdHRlcm4sIGNvbG9yLCBzaXplLCBhbmQgcm90YXRpb24uXG4gICAgPC9wPlxuICAgIDxkYW1zLXdhdGVyY29sb3I+PC9kYW1zLXdhdGVyY29sb3I+XG4gIDwvc2VjdGlvbj5cblxuICA8c2VjdGlvbj5cbiAgICA8aDI+V2F0ZXIgQ29sb3I8YnI+IDxzcGFuIGNsYXNzPVwiZnctbGlnaHRcIj53aXRoIEltYWdlPC9zcGFuPjwvaDI+XG4gICAgJHsgU2hhcmVkSHRtbC5oZWFkZXJEb3RzKCkgfVxuICAgIDxwPlVzZSA8Y29kZT5kYW1zLXdhdGVyY29sb3Itb3ZlcmxheTwvY29kZT4gZWxlbWVudCB3aXRoIHRoZSA8Y29kZT5pbWctc3JjPC9jb2RlPiBhdHRyaWJ1dGUgdG8gb3ZlcmxheSBhbiBpbWFnZSBvbiB0aGUgd2F0ZXJjb2xvci5cbiAgICAgIEluIGFkZGl0aW9uIHRvIGN1c3RvbWl6aW5nIHRoZSB3YXRlcmNvbG9yLCB5b3UgY2FuIGFkanVzdCB0aGUgaW1hZ2Ugc2l6ZSBhbmQgcG9zaXRpb24gdXNpbmcgZWxlbWVudCBwcm9wZXJ0aWVzLlxuICAgIDwvcD5cbiAgICA8ZGFtcy13YXRlcmNvbG9yLW92ZXJsYXkgXG4gICAgICB3Yy1yb3RhdGlvbj1cIjMwXCJcbiAgICAgIGltZy1wb3NpdGlvbj1cIjUwJSAyMCVcIlxuICAgICAgaW1nLXNyYz1cIi9pbWFnZXMvZGV2L2V2ZXJlc3QuanBnXCI+PC9kYW1zLXdhdGVyY29sb3Itb3ZlcmxheT5cbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uPlxuICAgIDxoMj5XYXRlciBDb2xvcjxicj4gPHNwYW4gY2xhc3M9XCJmdy1saWdodFwiPndpdGggSWNvbjwvc3Bhbj48L2gyPlxuICAgICR7IFNoYXJlZEh0bWwuaGVhZGVyRG90cygpIH1cbiAgICA8cD5Vc2UgPGNvZGU+ZGFtcy13YXRlcmNvbG9yLW92ZXJsYXk8L2NvZGU+IGVsZW1lbnQgd2l0aCB0aGUgPGNvZGU+aWNvbjwvY29kZT4gYXR0cmlidXRlIHRvIG92ZXJsYXkgYW4gaXJvbi1pY29uIG9uIHRoZSB3YXRlcmNvbG9yLlxuICAgIEluIGFkZGl0aW9uIHRvIGN1c3RvbWl6aW5nIHRoZSB3YXRlcmNvbG9yLCB5b3UgY2FuIGFkanVzdCB0aGUgaWNvbiBjb2xvciwgc2l6ZSwgYW5kIHBvc2l0aW9uIHVzaW5nIGVsZW1lbnQgcHJvcGVydGllcy5cbiAgIDwvcD5cbiAgICA8ZGFtcy13YXRlcmNvbG9yLW92ZXJsYXkgXG4gICAgICBpY29uPVwic3RhclwiPjwvZGFtcy13YXRlcmNvbG9yLW92ZXJsYXk+XG4gIDwvc2VjdGlvbj5cblxuICA8c2VjdGlvbj5cbiAgICA8aDI+SGVybyBJbWFnZTwvaDI+XG4gICAgJHsgU2hhcmVkSHRtbC5oZWFkZXJEb3RzKCkgfVxuICAgIDxwPkRpc3BsYXlzIGEgaGVybyBpbWFnZSB3aXRoIG92ZXJsYXllZCBncmFkaWVudCBhbmQgd2F0ZXIgY29sb3IuIEVudGVyIGNvbnRlbnQgdXNpbmcgYSBzbG90LiBVc2UgdGhlIDxjb2RlPi5zcmNPcHRpb25zPC9jb2RlPiBwcm9wZXJ0eSB0byBwYXNzIGFuIGFycmF5IG9mIGltZyBzcmNzIGZvclxuICAgIHRoZSBoZXJvIGltYWdlIHRvIHJhbmRvbWx5IGNob29zZSBmcm9tLlxuICAgIDwvcD5cbiAgICA8ZGFtcy1oZXJvIHNyYz1cIi9pbWFnZXMvZGVmYXVsdHMvYW5udWFsLXdpbnRlci1zYWxlMTk1Mi5qcGdcIiBzdHlsZT1cImhlaWdodDozMDBweDtcIj5cbiAgICAgIDxwPkhpIHRoZXJlISBUaGlzIGlzIHNsb3R0ZWQgY29udGVudC48L3A+XG4gICAgPC9kYW1zLWhlcm8+XG4gIDwvc2VjdGlvbj5cblxuICA8c2VjdGlvbj5cbiAgICA8aDI+Q29sbGVjdGlvbnMgUHJldmlldyBDYXJkPC9oMj5cbiAgICAkeyBTaGFyZWRIdG1sLmhlYWRlckRvdHMoKSB9XG4gICAgPHA+VXNlIHRoZSA8Y29kZT4uY29sbGVjdGlvbjwvY29kZT4gcHJvcGVydHkgdG8gcG9wdWxhdGUgdGhlIGNhcmQuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJjb2xsZWN0aW9uLWNhcmRzXCI+XG4gICAgICA8ZGFtcy1jb2xsZWN0aW9uLWNhcmRcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiXG4gICAgICAgIGl0ZW0tY3Q9XCIxXCJcbiAgICAgICAgY2FyZC10aXRsZT1cIkEgQ29sbGVjdGlvblwiPlxuICAgICAgPC9kYW1zLWNvbGxlY3Rpb24tY2FyZD5cbiAgICAgIDxkYW1zLWNvbGxlY3Rpb24tY2FyZFxuICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgIGl0ZW0tY3Q9XCI0NVwiIFxuICAgICAgICBjYXJkLXRpdGxlPVwiUGlvbmVlcmluZyBQdW5qYWJpc1wiXG4gICAgICAgIGltZy1zcmM9XCIvaW1hZ2VzL2Rldi9ldmVyZXN0LmpwZ1wiPlxuICAgICAgPC9kYW1zLWNvbGxlY3Rpb24tY2FyZD5cbiAgICAgIDxkYW1zLWNvbGxlY3Rpb24tY2FyZCBcbiAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICBpdGVtLWN0PVwiODA5XCJcbiAgICAgICAgY2FyZC10aXRsZT1cIlNoZXJyeSBMZWhtYW5uXCJcbiAgICAgICAgaW1nLXNyYz1cIi9pbWFnZXMvZGV2L2xlaG1hbm4uanBnXCI+XG4gICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgIDwvZGl2PlxuXG4gIDwvc2VjdGlvbj5cblxuICA8c2VjdGlvbj5cbiAgPGgyPkZpbHRlciBCdXR0b248L2gyPlxuICAkeyBTaGFyZWRIdG1sLmhlYWRlckRvdHMoKSB9XG4gIDxwPkF0dGFjaCBhIGxpc3RlbmVyIHRvIGFjdGl2YXRlIGZpbHRlciBidXR0b24gYXBwZWFyZW5jZSBhbmQgY2FuIGJlIGV4aXRlZCBvdXQgb25jZSBhdHRhY2hlZC48L3A+XG4gICAgICA8YXBwLWZpbHRlci1idXR0b24+PGRpdiBzbG90PVwiZmlsdGVyLWJ1dHRvbi10ZXh0XCI+RmlsdGVyMTwvZGl2PjwvYXBwLWZpbHRlci1idXR0b24+IFxuICAgICAgPGFwcC1maWx0ZXItYnV0dG9uPjxkaXYgc2xvdD1cImZpbHRlci1idXR0b24tdGV4dFwiPkZpbHRlcjI8L2Rpdj48L2FwcC1maWx0ZXItYnV0dG9uPiBcbiAgICAgIDxhcHAtZmlsdGVyLWJ1dHRvbj48ZGl2IHNsb3Q9XCJmaWx0ZXItYnV0dG9uLXRleHRcIj5GaWx0ZXIzPC9kaXY+PC9hcHAtZmlsdGVyLWJ1dHRvbj4gXG4gICAgICA8YXBwLWZpbHRlci1idXR0b24+PGRpdiBzbG90PVwiZmlsdGVyLWJ1dHRvbi10ZXh0XCI+RmlsdGVyNDwvZGl2PjwvYXBwLWZpbHRlci1idXR0b24+IFxuICA8L3NlY3Rpb24+XG5cbiAgPHNlY3Rpb24+XG4gIDxoMj5JY29uPC9oMj5cbiAgJHsgU2hhcmVkSHRtbC5oZWFkZXJEb3RzKCkgfVxuICA8cD5BIHNwZWNpZmljIGljb24gZm9yIERBTVMgY3JlYXRpb24uPC9wPlxuICA8cD5TaXplIEljb24gZm9yIGFuIGV4dHJhIGxhcmdlIHNpemUgd2l0aCA8Y29kZT5zaXplLWljb24tc3ZnPSdleHRyYWxnJyBzaXplPVwiZXh0cmFsZ1wiPC9jb2RlPjwvcD5cbiAgPGFwcC1pY29ucyBpZD1cIm9wdGlvblwiIGljb249XCJpcm9uLWFyY2hpdmVcIiB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBzaXplLWljb24tc3ZnPSdleHRyYWxnJyBzaXplPVwiZXh0cmFsZ1wiPjxkaXYgc2xvdD1cImljb24tdGV4dFwiPkNvbGxlY3Rpb25zPC9kaXY+PC9hcHAtaWNvbnM+XG4gIDxhcHAtaWNvbnMgaWQ9XCJvcHRpb25cIiBpY29uPVwiaXJvbi1kYXNoYm9hcmRcIiB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBzaXplLWljb24tc3ZnPSdleHRyYWxnJyBzaXplPVwiZXh0cmFsZ1wiPjxkaXYgc2xvdD1cImljb24tdGV4dFwiPkFsbCBJdGVtczwvZGl2PjwvYXBwLWljb25zPlxuICA8YnIgLz5cbiAgPHA+U2l6ZSBJY29uIGZvciBhIHNtYWxsZXIgc2l6ZSB3aXRoIDxjb2RlPnNpemUtaWNvbi1zdmc9J2xnJyBzaXplPVwibGdcIjwvY29kZT48L3A+XG4gIDxhcHAtaWNvbnMgaWQ9XCJvcHRpb25cIiBpY29uPVwiaXJvbi1hY2NvdW50LWJveFwiIHRoZW1lLWNvbG9yPSdzZWNvbmRhcnknIHNpemUtaWNvbi1zdmc9J2xnJyBzaXplPVwibGdcIj48ZGl2IHNsb3Q9XCJpY29uLXRleHRcIj5DcmVhdG9yczwvZGl2PjwvYXBwLWljb25zPlxuICA8YXBwLWljb25zIGlkPVwib3B0aW9uXCIgaWNvbj1cImlyb24tY3JlYXRlXCIgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgc2l6ZS1pY29uLXN2Zz0nbGcnIHNpemU9XCJsZ1wiPjxkaXYgc2xvdD1cImljb24tdGV4dFwiPkZvcm1hdHM8L2Rpdj48L2FwcC1pY29ucz5cbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uPlxuICA8aDI+TmF2aWdhdGlvbiBCYXI8L2gyPlxuICAkeyBTaGFyZWRIdG1sLmhlYWRlckRvdHMoKSB9XG4gIDxwPkVudGlyZSBOYXZhZ2F0aW9uIEJhciB3aGVyZSB5b3UgY2FuIGFkZCBlbGVtZW50cyB3aXRoIGtleXdvcmQgPGNvZGU+Y2hvaWNlczwvY29kZT4uPC9wPlxuICA8YXBwLW5hdi1iYXIgY2hvaWNlcz0nW3tcInRleHRcIjogXCJCcm93c2VcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQWJvdXRcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiRkFRXCJ9XSc+XG4gIDwvYXBwLW5hdi1iYXI+IFxuICA8L3NlY3Rpb24+XG5cbiAgPC9zZWN0aW9uPlxuICA8aDI+UGFnaW5hdGlvbjwvaDI+XG4gICR7IFNoYXJlZEh0bWwuaGVhZGVyRG90cygpIH1cblxuICAgIDxwPkF0dGFjaCBhIGxpc3RlbmVyIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHBhZ2UgY2hhbmdlcyBpLmUuPGJyIC8+PGNvZGU+QGNoYW5nZWQtcGFnZT1cXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmN1cnJlbnRQYWdlKX08L2NvZGU+PC9wPlxuICAgIDxkYW1zLXBhZ2luYXRpb24gbWF4LXBhZ2U9OCBAY2hhbmdlZC1wYWdlPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmN1cnJlbnRQYWdlKX0+PC9kYW1zLXBhZ2luYXRpb24+XG4gICAgPHA+VXNlIHRoZSA8Y29kZT5tYXgtcGFnZTwvY29kZT4sIDxjb2RlPm1pbi1wYWdlPC9jb2RlPiwgYW5kIDxjb2RlPmN1cnJlbnQtcGFnZTwvY29kZT4gYXR0cmlidXRlcyB0byBjb250cm9sIHRoZSBkaXNwbGF5LjwvcD5cbiAgICA8ZGFtcy1wYWdpbmF0aW9uIG1heC1wYWdlPTE1IGN1cnJlbnQtcGFnZT1cIjdcIj48L2RhbXMtcGFnaW5hdGlvbj5cbiAgICA8cD5Vc2UgdGhlIDxjb2RlPnBhZ2VzLXBlci1zaWRlPC9jb2RlPiBhdHRyaWJ1dGUgdG8gc2hvdyBtb3JlIHBhZ2VzIG9uIGVpdGhlciBzaWRlIG9mIHRoZSBjdXJyZW50IHBhZ2U8cD5cbiAgICA8ZGFtcy1wYWdpbmF0aW9uIG1heC1wYWdlPTIwIGN1cnJlbnQtcGFnZT0xMCBwYWdlcy1wZXItc2lkZT0zPjwvZGFtcy1wYWdpbmF0aW9uPlxuICAgIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24+XG5cbiAgPHNlY3Rpb24+XG4gIDxoMj5SYWRpbyBCdXR0b248L2gyPlxuICAkeyBTaGFyZWRIdG1sLmhlYWRlckRvdHMoKSB9XG4gIDxwPlJhZGlvIGJ1dHRvbiBsaXN0IHdoZXJlIHlvdSBjYW4gYWRkIGVsZW1lbnRzIHdpdGgga2V5d29yZCA8Y29kZT5jaG9pY2VzPC9jb2RlPi48L3A+XG4gIDxwPlJhZGlvIGJ1dHRvbiBsaXN0IGlzIGhvcml6b250YWwgYnV0IGNhbiBiZSBtYWRlIHZlcnRpY2FsLjwvcD5cblxuICA8YXBwLXJhZGlvLWJ1dHRvbiBjaG9pY2VzPSdbe1widGV4dFwiOiBcIlRpdGxlXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIlJlY2VudFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJJdGVtIFF1YW50aXR5XCJ9XSc+PC9hcHAtcmFkaW8tYnV0dG9uPlxuICA8L3NlY3Rpb24+XG5cbiAgPHNlY3Rpb24+XG4gIDxoMj5TZWFyY2ggQm94PC9oMj5cbiAgJHsgU2hhcmVkSHRtbC5oZWFkZXJEb3RzKCkgfVxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cbiAgICAgIDxhcHAtc2VhcmNoLWJveCBcbiAgICAgICAgaWQ9XCJzZWFyY2hCb3hcIiBcbiAgICAgICAgQHNlYXJjaD1cIiR7dGhpcy5fb25TZWFyY2h9XCIgXG4gICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoXCI+XG4gICAgICAgIDxpcm9uLWljb24gaWNvbj1cImZpbi1pY29uczpzZWFyY2hcIiBjbGFzcz1cInNlYXJjaC1pY29uXCIgc2xvdD1cImJ1dHRvbi1jb250ZW50XCI+PC9pcm9uLWljb24+XG4gICAgICA8L2FwcC1zZWFyY2gtYm94PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG5cbjwvZGl2PlxuXG5cblxuXG5gO31cbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbi8qKlxuICogQGNsYXNzIFNoYXJlZEh0bWxcbiAqIEBkZXNjcmlwdGlvbiBMaXQgaHRtbCB0ZW1wbGF0ZSBzdHJpbmdzIHVzZWQgYWNyb3NzIHRoZSBzaXRlLlxuICogRGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIERBTVMgc2hhcmVkIHN0eWxlcywgc28gbWFrZSBzdXJlIHlvdSBpbXBvcnQgdGhvc2UgaW50byB5b3VyIGVsZW1lbnRcbiAqL1xuY2xhc3MgU2hhcmVkSHRtbCB7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaGVhZGVyRG90c1xuICAgKiBAZGVzY3JpcHRpb24gRGlzcGxheXMgdGhlIHllbGxvdyBkb3RzIGJlbmVhdGggYSBzZWN0aW9uIGhlYWRlclxuICAgKiBAcmV0dXJucyB7VGVtcGxhdGVSZXN1bHR9XG4gICAqL1xuICBoZWFkZXJEb3RzKCl7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWRvdHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkb3RcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBuZXcgU2hhcmVkSHRtbCgpOyJdLCJzb3VyY2VSb290IjoiIn0=