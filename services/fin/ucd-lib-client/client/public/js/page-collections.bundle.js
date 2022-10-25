(self["webpackChunk"] = self["webpackChunk"] || []).push([["page-collections"],{

/***/ "./public/elements/utils/app-collection-card.html":
/*!********************************************************!*\
  !*** ./public/elements/utils/app-collection-card.html ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<style>\n  :host {\n    display: inline-block;\n    margin: 15px;\n    outline : 0;\n    height: 320px;\n    width: 320px;\n  }\n\n  :host(:hover), :host(:focus)  {\n    cursor: pointer;\n    margin: 13px;\n    border: 2px solid var(--default-secondary-color);\n  }\n\n  .img.defaultImage {\n    background-size: 65%;\n  }\n\n  .img {\n    height: 320px;\n    width: 320px;\n    position: relative;\n    background-image: url('/images/logos/logo-white-512.png'); /* fallback */\n    background-color: var(--light-background-color);\n    background-size: cover; /* needs to be 65% */\n    background-repeat: no-repeat;\n    background-position: center center;    \n  }\n\n  .img > div  {\n    padding: 15px;\n    position: absolute;\n    left: 0;\n    right: 25px;\n    bottom: 25px;\n    \n    color: var(--default-secondary-color);\n    font-weight: var(--fw-bold);\n\n    background-color: rgba(0, 38, 85, .8);      \n  }\n</style>\n\n<div \n  id=\"img\"\n  class=\"img\" \n  role=\"img\" \n  aria-label=\"[[collection.name]]\">\n  <div>\n    <div>[[collection.name]]</div>\n    <div>[[collection.recordCount]] items</div>\n  </div>\n</div>\n";

/***/ }),

/***/ "./public/elements/pages/collections/app-collections.js":
/*!**************************************************************!*\
  !*** ./public/elements/pages/collections/app-collections.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _ucd_lib_fin_search_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/fin-search-box */ "./public/node_modules/@ucd-lib/fin-search-box/fin-search-box.js");
/* harmony import */ var _utils_app_collection_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/app-collection-card */ "./public/elements/utils/app-collection-card.js");
/* harmony import */ var _polymer_iron_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-icons */ "./public/node_modules/@polymer/iron-icons/iron-icons.js");
/* harmony import */ var _components_graphics_dams_watercolor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/graphics/dams-watercolor */ "./public/elements/components/graphics/dams-watercolor.js");
/* harmony import */ var _components_graphics_dams_watercolor_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/graphics/dams-watercolor-overlay */ "./public/elements/components/graphics/dams-watercolor-overlay.js");
/* harmony import */ var _components_cards_dams_collection_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cards/dams-collection-card */ "./public/elements/components/cards/dams-collection-card.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icon */ "./public/elements/components/icon.js");
/* harmony import */ var _components_search_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/search-box */ "./public/elements/components/search-box.js");
/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/nav-bar */ "./public/elements/components/nav-bar.js");
/* harmony import */ var _components_filterButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/filterButton */ "./public/elements/components/filterButton.js");
/* harmony import */ var _components_radioButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/radioButton */ "./public/elements/components/radioButton.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/pagination */ "./public/elements/components/pagination.js");
/* harmony import */ var _app_collections_tpl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-collections.tpl.js */ "./public/elements/pages/collections/app-collections.tpl.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../interfaces/RecordInterface */ "./public/elements/interfaces/RecordInterface.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../interfaces/AppStateInterface */ "./public/elements/interfaces/AppStateInterface.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../interfaces/CollectionInterface */ "./public/elements/interfaces/CollectionInterface.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_16__);




















 



/**
 * @class AppHome
 * @description home page is rendered to the DAMS v2
 */
class AppCollections extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(EventInterface, (_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_14___default()), (_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_15___default()), (_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_16___default())) {

  static get properties() {
    return {
      hasPagination: {type: Boolean},
      pgPer: {type: Number},
      pgCurrent: {type: Number},
      items: {type: Array},
      itemsStatus: {type: String},
      itemsTotal: {type: Number},
      count : {type : String},
      choices: {
        type: Array
      },
    };
  }

  constructor() {
    super();
    this.render = _app_collections_tpl_js__WEBPACK_IMPORTED_MODULE_13__["default"].bind(this);
    this.active = true;
    this.items = [];
    this.itemsTotal = 17;
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
    this.items = overview;

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

customElements.define('app-collections', AppCollections);

/***/ }),

/***/ "./public/elements/pages/collections/app-collections.tpl.js":
/*!******************************************************************!*\
  !*** ./public/elements/pages/collections/app-collections.tpl.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/shared-styles */ "./public/elements/styles/shared-styles.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/style-map */ "./public/node_modules/lit-html/directives/style-map.js");





function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
<style>
  :host {
    display: block;
    position: relative;
    background-color: var(--super-light-background-color);
  }

  .text-container {
    margin: 0;
    padding: 2rem 5rem 2rem 5rem ;
  }

  h1, h2 {
    color: var(--default-primary-color);
  }

  h2 {
    margin: 15px 0 0 0px;
  }

  .yellow-line {
    margin: 0 auto 0 0;
    text-align: left;
    width: 50px;
    height: 4px;

    border-color: var(--default-secondary-color);
    background-color: var(--default-secondary-color);
  }
  
  .rasterImage{
    height:100px;
    max-width: 20%;    
    background-color: var(--color-aggie-blue-50);
    margin: 0 auto;
    text-align:center;
  }
  .headerText {
    text-align: center;
    font-size: 2.94rem;
    color: var(--color-aggie-blue);
  }
  fieldset {
    text-align:center;
  }
  .radioMenu {
    text-align:center;
  }
  .icon{
    text-align:center;
  }

  .collection-grid-container {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    background-color: transparent;
    padding: 20px;
    margin-bottom: 5px;
  }
  .grid-item {
    padding: 20px;
    font-size: 30px;
  }

  .content{
    padding-bottom: 40px;
  }

  dams-pagination {
    margin-top: 40px;
  }

  ${_styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__["default"]}


</style>

<div class="content">
  <div class="text-container">  
    <div class=icon>
      <dams-watercolor-overlay 
        icon="star">
      </dams-watercolor-overlay>
    </div>
    <div class="headerText"> Browse <b>Collections</b></div>
    
    <app-radio-button choices='[{"text": "Title"},
                                {"text": "Recent"},
                                {"text": "Item Quantity"}]'></app-radio-button>
    
  </div>


  <!-- <div class="collection-grid-container">
      <div class="collection-outer">
        <div class="collections" id="collections-home">
          ${this.items.map((item) => 
            lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
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
    </div> -->
    
  <div class="collection-grid-container">

    <div class="grid-item">
      <div>  
        <dams-collection-card
          href="https://google.com"
          item-ct="1"
          card-title="A Collection">
        </dams-collection-card>
      </div>
    </div>
    <div class="grid-item">
      <div>  
        <dams-collection-card
          href="https://google.com"
          item-ct="1"
          card-title="A Collection">
        </dams-collection-card>
      </div>
    </div>
    <div class="grid-item">
      <div>  
        <dams-collection-card
          href="https://google.com"
          item-ct="1"
          card-title="A Collection">
        </dams-collection-card>
      </div>
    </div>
    <div class="grid-item">
      <div>  
        <dams-collection-card
          href="https://google.com"
          item-ct="1"
          card-title="A Collection">
        </dams-collection-card>
      </div>
    </div>
    <div class="grid-item">
      <div>  
        <dams-collection-card
          href="https://google.com"
          item-ct="1"
          card-title="A Collection">
        </dams-collection-card>
      </div>
    </div>
    <div class="grid-item">
      <div>  
        <dams-collection-card
          href="https://google.com"
          item-ct="1"
          card-title="A Collection">
        </dams-collection-card>
      </div>
    </div> 
    <div class="grid-item">
      <div>  
        <dams-collection-card
          href="https://google.com"
          item-ct="1"
          card-title="A Collection">
        </dams-collection-card>
      </div>
    </div>
    <div class="grid-item">
      <div>  
        <dams-collection-card
          href="https://google.com"
          item-ct="1"
          card-title="A Collection">
        </dams-collection-card>
      </div>
    </div>
    <div class="grid-item">
      <div>  
        <dams-collection-card
          href="https://google.com"
          item-ct="1"
          card-title="A Collection">
        </dams-collection-card>
      </div>
    </div>
    <div class="grid-item">
      <div>  
        <dams-collection-card
          href="https://google.com"
          item-ct="1"
          card-title="A Collection">
        </dams-collection-card>
      </div>
    </div>

  </div>

  <div>
    ${this.itemsTotal > 16 ? 
        lit_element__WEBPACK_IMPORTED_MODULE_0__.html`    
          <dams-pagination ></dams-pagination>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_0__.html``}
  </div>

</div>  

</div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxvRkFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyw2QkFBNkI7QUFDNUU7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksK0xBQTJFO0FBQ3ZGO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZ0NBQWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL2FwcC1jb2xsZWN0aW9uLWNhcmQuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29sbGVjdGlvbnMvYXBwLWNvbGxlY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9jb2xsZWN0aW9ucy9hcHAtY29sbGVjdGlvbnMudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9hcHAtY29sbGVjdGlvbi1jYXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9saWIvdXRpbHMvaW50ZXJzZWN0aW9uLW9ic2VydmVyLWxvYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgb3V0bGluZSA6IDA7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gIH1cXG5cXG4gIDpob3N0KDpob3ZlciksIDpob3N0KDpmb2N1cykgIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDEzcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5pbWcuZGVmYXVsdEltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NSU7XFxuICB9XFxuXFxuICAuaW1nIHtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9sb2dvcy9sb2dvLXdoaXRlLTUxMi5wbmcnKTsgLyogZmFsbGJhY2sgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIG5lZWRzIHRvIGJlIDY1JSAqL1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAgICBcXG4gIH1cXG5cXG4gIC5pbWcgPiBkaXYgIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMjVweDtcXG4gICAgYm90dG9tOiAyNXB4O1xcbiAgICBcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDM4LCA4NSwgLjgpOyAgICAgIFxcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBcXG4gIGlkPVxcXCJpbWdcXFwiXFxuICBjbGFzcz1cXFwiaW1nXFxcIiBcXG4gIHJvbGU9XFxcImltZ1xcXCIgXFxuICBhcmlhLWxhYmVsPVxcXCJbW2NvbGxlY3Rpb24ubmFtZV1dXFxcIj5cXG4gIDxkaXY+XFxuICAgIDxkaXY+W1tjb2xsZWN0aW9uLm5hbWVdXTwvZGl2PlxcbiAgICA8ZGl2PltbY29sbGVjdGlvbi5yZWNvcmRDb3VudF1dIGl0ZW1zPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjsiLCJpbXBvcnQgeyBMaXRFbGVtZW50fSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCBcIkB1Y2QtbGliL2Zpbi1zZWFyY2gtYm94XCI7XG5pbXBvcnQgXCIuLi8uLi91dGlscy9hcHAtY29sbGVjdGlvbi1jYXJkXCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbnNcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9ncmFwaGljcy9kYW1zLXdhdGVyY29sb3JcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZ3JhcGhpY3MvZGFtcy13YXRlcmNvbG9yLW92ZXJsYXlcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvZGFtcy1jb2xsZWN0aW9uLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaWNvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9zZWFyY2gtYm94XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL25hdi1iYXJcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZmlsdGVyQnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3JhZGlvQnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcblxuXG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vYXBwLWNvbGxlY3Rpb25zLnRwbC5qcyc7XG5cbmltcG9ydCBSZWNvcmRJbnRlcmZhY2UgZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvUmVjb3JkSW50ZXJmYWNlXCI7IFxuaW1wb3J0IEFwcFN0YXRlSW50ZXJmYWNlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0FwcFN0YXRlSW50ZXJmYWNlXCI7XG5pbXBvcnQgQ29sbGVjdGlvbkludGVyZmFjZSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9Db2xsZWN0aW9uSW50ZXJmYWNlXCI7XG5cbi8qKlxuICogQGNsYXNzIEFwcEhvbWVcbiAqIEBkZXNjcmlwdGlvbiBob21lIHBhZ2UgaXMgcmVuZGVyZWQgdG8gdGhlIERBTVMgdjJcbiAqL1xuY2xhc3MgQXBwQ29sbGVjdGlvbnMgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChFdmVudEludGVyZmFjZSwgUmVjb3JkSW50ZXJmYWNlLCBBcHBTdGF0ZUludGVyZmFjZSwgQ29sbGVjdGlvbkludGVyZmFjZSkge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzUGFnaW5hdGlvbjoge3R5cGU6IEJvb2xlYW59LFxuICAgICAgcGdQZXI6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgcGdDdXJyZW50OiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIGl0ZW1zOiB7dHlwZTogQXJyYXl9LFxuICAgICAgaXRlbXNTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgaXRlbXNUb3RhbDoge3R5cGU6IE51bWJlcn0sXG4gICAgICBjb3VudCA6IHt0eXBlIDogU3RyaW5nfSxcbiAgICAgIGNob2ljZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXlcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuaXRlbXNUb3RhbCA9IDE3O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVhZHlcbiAgICogQGRlc2NyaXB0aW9uIEl0IGdldHMgdGhlIG1vZGVsIGluZm9ybWF0aW9uIGZvciB0aGUgQ29sbGVjdGlvbnMgd2hlbiBcbiAgICogZnVuY3Rpb24gaXMgZmlyZWQuXG4gICAqIFxuICAgKi9cbiAgLy8gYXN5bmMgcmVhZHkoKSB7XG4gIC8vICAgc3VwZXIucmVhZHkoKTtcbiAgLy8gICB0aGlzLl9zZXRDb2xsZWN0aW9ucyhhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5vdmVydmlldygpKTtcbiAgLy8gfVxuXG4gIGFzeW5jIGZpcnN0VXBkYXRlZCgpIHtcbiAgICB0aGlzLl9zZXRDb2xsZWN0aW9ucyhhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5vdmVydmlldygpKTtcblxuICB9XG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkFwcFN0YXRlVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBvbiB0aGUgQXBwIHVwZGF0ZSwgdGhlIHN0YXRlIGlzIGRldGVybWluZWQgYW5kIGJ5IGNoZWNraW5nXG4gICAqIHRoZSBsb2NhdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgXG4gICAqL1xuICBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgaWYoIGUubG9jYXRpb24uaGFzaCA9PT0gJ2NvbGxlY3Rpb25zJyApIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZWxlID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNjb2xsZWN0aW9ucy1ob21lJyk7XG4gICAgICAgIGlmKCBlbGUgKSBlbGUuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH0sIDI1KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfc2V0Q29sbGVjdGlvbnNcbiAgICogQGRlc2NyaXB0aW9uIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVhZHksIHRoZSBjb2xsZWN0aW9uIG1vZGVsIGlzIGNhbGxlZCBcbiAgICogZm9yIHRoZSBjb2xsZWN0aW9uIGxpc3QuICB0aGlzIHJlbmRlcnMgaXMuXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcbiAgICovXG4gIF9zZXRDb2xsZWN0aW9ucyhlKSB7XG4gICAgaWYoIGUuc3RhdGUgIT09ICdsb2FkZWQnICkgcmV0dXJuO1xuICAgIGxldCBvdmVydmlldyA9IGUucGF5bG9hZDtcbiAgICBsZXQgYnJvd3NlID0ge307XG5cbiAgICBvdmVydmlldy5zb3J0KChhLGIpID0+IHtcbiAgICAgIGlmKCBhLm5hbWUgPiBiLm5hbWUgKSByZXR1cm4gMTtcbiAgICAgIGlmKCBhLm5hbWUgPCBiLm5hbWUgKSByZXR1cm4gLTE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIG92ZXJ2aWV3LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBicm93c2VbaXRlbVsnQGlkJ11dID0gaXRlbS5uYW1lO1xuICAgICAgaWYoICFpdGVtLnRodW1ibmFpbFVybCApIHtcbiAgICAgICAgaXRlbS50aHVtYm5haWxVcmwgPSAnL2ltYWdlcy9sb2dvcy9sb2dvLXdoaXRlLTUxMi5wbmcnO1xuICAgICAgfVxuXG4gICAgICBpZiggaXRlbS53b3JrRXhhbXBsZSApIHtcbiAgICAgICAgaXRlbS50aHVtYm5haWwgPSAnL2ZjcmVwby9yZXN0JytpdGVtLndvcmtFeGFtcGxlWydAaWQnXSsnL3N2YzppaWlmL2Z1bGwvLDMyMC8wL2RlZmF1bHQuanBnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0udGh1bWJuYWlsID0gJy9pbWFnZXMvbG9nb3MvbG9nby13aGl0ZS01MTIucG5nJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vdGhpcy4kLnNlYXJjaEJveC5icm93c2UgPSBicm93c2U7XG4gICAgdGhpcy5pdGVtcyA9IG92ZXJ2aWV3O1xuXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlYXJjaFxuICAgKiBAZGVzY3JpcHRpb24gY2FsbGVkIGZyb20gdGhlIHNlYXJjaCBib3ggYnV0dG9uIGlzIGNsaWNrZWQgb3JcbiAgICogdGhlIGVudGVyIGtleSBpcyBoaXQuICBzZXQgdGhlIHRleHQgZmlsdGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAqL1xuICBfb25TZWFyY2goZSkge1xuXG4gICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuX2dldEVtcHR5U2VhcmNoRG9jdW1lbnQoKTtcbiAgICB0aGlzLl9zZXRUZXh0RmlsdGVyKHNlYXJjaERvYywgZS5kZXRhaWwpO1xuICAgIHRoaXMuUmVjb3JkTW9kZWwuc2V0U2VhcmNoTG9jYXRpb24oc2VhcmNoRG9jKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNvbGxlY3Rpb25DbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsZWQgd2hlbiBjb2xsZWN0aW9uIGltZyBvbiBob21lIHBhZ2UgaXMgY2xpY2tlZCBcbiAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICovXG4gIF9vbkNvbGxlY3Rpb25DbGlja2VkKGUpIHtcbiAgICBpZiggZS50eXBlID09PSAna2V5dXAnICYmIGUud2hpY2ggIT09IDEzICkgcmV0dXJuO1xuICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25TZWxlY3RlZChpZCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Db2xsZWN0aW9uU2VsZWN0ZWRcbiAgICogQGRlc2NyaXB0aW9uIGZpbHRlciBiYXNlZCBvbiBhIGNvbGxlY3Rpb24gdXNpbmcgc2hvcnQgaWRzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICogXG4gICAqL1xuICBfb25Db2xsZWN0aW9uU2VsZWN0ZWQoaWQpIHtcbiAgICB0aGlzLl9zZXRXaW5kb3dMb2NhdGlvbihpZCk7XG4gIH1cbiAgXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWNvbGxlY3Rpb25zJywgQXBwQ29sbGVjdGlvbnMpOyIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc2hhcmVkU3R5bGVzQ3NzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2hhcmVkLXN0eWxlc1wiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cGVyLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgLnRleHQtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMnJlbSA1cmVtIDJyZW0gNXJlbSA7XG4gIH1cblxuICBoMSwgaDIge1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xuICB9XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMTVweCAwIDAgMHB4O1xuICB9XG5cbiAgLnllbGxvdy1saW5lIHtcbiAgICBtYXJnaW46IDAgYXV0byAwIDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDRweDtcblxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgfVxuICBcbiAgLnJhc3RlckltYWdle1xuICAgIGhlaWdodDoxMDBweDtcbiAgICBtYXgtd2lkdGg6IDIwJTsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWdnaWUtYmx1ZS01MCk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIH1cbiAgLmhlYWRlclRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIuOTRyZW07XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFnZ2llLWJsdWUpO1xuICB9XG4gIGZpZWxkc2V0IHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgfVxuICAucmFkaW9NZW51IHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgfVxuICAuaWNvbntcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgfVxuXG4gIC5jb2xsZWN0aW9uLWdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDMzJSAzMyU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLmdyaWQtaXRlbSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICAuY29udGVudHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgfVxuXG4gIGRhbXMtcGFnaW5hdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuXG4gICR7c2hhcmVkU3R5bGVzQ3NzfVxuXG5cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiPiAgXG4gICAgPGRpdiBjbGFzcz1pY29uPlxuICAgICAgPGRhbXMtd2F0ZXJjb2xvci1vdmVybGF5IFxuICAgICAgICBpY29uPVwic3RhclwiPlxuICAgICAgPC9kYW1zLXdhdGVyY29sb3Itb3ZlcmxheT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyVGV4dFwiPiBCcm93c2UgPGI+Q29sbGVjdGlvbnM8L2I+PC9kaXY+XG4gICAgXG4gICAgPGFwcC1yYWRpby1idXR0b24gY2hvaWNlcz0nW3tcInRleHRcIjogXCJUaXRsZVwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIlJlY2VudFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkl0ZW0gUXVhbnRpdHlcIn1dJz48L2FwcC1yYWRpby1idXR0b24+XG4gICAgXG4gIDwvZGl2PlxuXG5cbiAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sbGVjdGlvbi1ncmlkLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbGxlY3Rpb24tb3V0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxlY3Rpb25zXCIgaWQ9XCJjb2xsZWN0aW9ucy1ob21lXCI+XG4gICAgICAgICAgJHt0aGlzLml0ZW1zLm1hcCgoaXRlbSkgPT4gXG4gICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgICAgICAgICA8YXBwLWNvbGxlY3Rpb24tY2FyZCBcbiAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHtpdGVtLl9pZH1cIiBcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbj1cIiR7aXRlbX1cIiBcbiAgICAgICAgICAgICAgICBAa2V5dXA9XCIke3RoaXMuX29uQ29sbGVjdGlvbkNsaWNrZWR9XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29uQ29sbGVjdGlvbkNsaWNrZWR9XCI+XG4gICAgICAgICAgICAgIDwvYXBwLWNvbGxlY3Rpb24tY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+IC0tPlxuICAgIFxuICA8ZGl2IGNsYXNzPVwiY29sbGVjdGlvbi1ncmlkLWNvbnRhaW5lclwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgPGRpdj4gIFxuICAgICAgICA8ZGFtcy1jb2xsZWN0aW9uLWNhcmRcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCJcbiAgICAgICAgICBpdGVtLWN0PVwiMVwiXG4gICAgICAgICAgY2FyZC10aXRsZT1cIkEgQ29sbGVjdGlvblwiPlxuICAgICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgPGRpdj4gIFxuICAgICAgICA8ZGFtcy1jb2xsZWN0aW9uLWNhcmRcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCJcbiAgICAgICAgICBpdGVtLWN0PVwiMVwiXG4gICAgICAgICAgY2FyZC10aXRsZT1cIkEgQ29sbGVjdGlvblwiPlxuICAgICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgPGRpdj4gIFxuICAgICAgICA8ZGFtcy1jb2xsZWN0aW9uLWNhcmRcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCJcbiAgICAgICAgICBpdGVtLWN0PVwiMVwiXG4gICAgICAgICAgY2FyZC10aXRsZT1cIkEgQ29sbGVjdGlvblwiPlxuICAgICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgPGRpdj4gIFxuICAgICAgICA8ZGFtcy1jb2xsZWN0aW9uLWNhcmRcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCJcbiAgICAgICAgICBpdGVtLWN0PVwiMVwiXG4gICAgICAgICAgY2FyZC10aXRsZT1cIkEgQ29sbGVjdGlvblwiPlxuICAgICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgPGRpdj4gIFxuICAgICAgICA8ZGFtcy1jb2xsZWN0aW9uLWNhcmRcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCJcbiAgICAgICAgICBpdGVtLWN0PVwiMVwiXG4gICAgICAgICAgY2FyZC10aXRsZT1cIkEgQ29sbGVjdGlvblwiPlxuICAgICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgPGRpdj4gIFxuICAgICAgICA8ZGFtcy1jb2xsZWN0aW9uLWNhcmRcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCJcbiAgICAgICAgICBpdGVtLWN0PVwiMVwiXG4gICAgICAgICAgY2FyZC10aXRsZT1cIkEgQ29sbGVjdGlvblwiPlxuICAgICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+IFxuICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5cbiAgICAgIDxkaXY+ICBcbiAgICAgICAgPGRhbXMtY29sbGVjdGlvbi1jYXJkXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiXG4gICAgICAgICAgaXRlbS1jdD1cIjFcIlxuICAgICAgICAgIGNhcmQtdGl0bGU9XCJBIENvbGxlY3Rpb25cIj5cbiAgICAgICAgPC9kYW1zLWNvbGxlY3Rpb24tY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5cbiAgICAgIDxkaXY+ICBcbiAgICAgICAgPGRhbXMtY29sbGVjdGlvbi1jYXJkXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiXG4gICAgICAgICAgaXRlbS1jdD1cIjFcIlxuICAgICAgICAgIGNhcmQtdGl0bGU9XCJBIENvbGxlY3Rpb25cIj5cbiAgICAgICAgPC9kYW1zLWNvbGxlY3Rpb24tY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5cbiAgICAgIDxkaXY+ICBcbiAgICAgICAgPGRhbXMtY29sbGVjdGlvbi1jYXJkXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiXG4gICAgICAgICAgaXRlbS1jdD1cIjFcIlxuICAgICAgICAgIGNhcmQtdGl0bGU9XCJBIENvbGxlY3Rpb25cIj5cbiAgICAgICAgPC9kYW1zLWNvbGxlY3Rpb24tY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5cbiAgICAgIDxkaXY+ICBcbiAgICAgICAgPGRhbXMtY29sbGVjdGlvbi1jYXJkXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiXG4gICAgICAgICAgaXRlbS1jdD1cIjFcIlxuICAgICAgICAgIGNhcmQtdGl0bGU9XCJBIENvbGxlY3Rpb25cIj5cbiAgICAgICAgPC9kYW1zLWNvbGxlY3Rpb24tY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgJHt0aGlzLml0ZW1zVG90YWwgPiAxNiA/IFxuICAgICAgICBodG1sYCAgICBcbiAgICAgICAgICA8ZGFtcy1wYWdpbmF0aW9uID48L2RhbXMtcGFnaW5hdGlvbj5cbiAgICAgICAgYCA6IGh0bWxgYH1cbiAgPC9kaXY+XG5cbjwvZGl2PiAgXG5cbjwvZGl2PlxuYDt9IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLWNvbGxlY3Rpb24tY2FyZC5odG1sXCI7XG5pbXBvcnQgaW9Mb2FkZXIgZnJvbSBcIi4uLy4uL2xpYi91dGlscy9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXItbG9hZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbGxlY3Rpb25DYXJkIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbGxlY3Rpb24gOiB7XG4gICAgICAgIHR5cGUgOiBPYmplY3QsXG4gICAgICAgIHZhbHVlIDogKCkgPT4gKHt9KSxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX29uQ29sbGVjdGlvbkNoYW5nZSdcbiAgICAgIH0sXG4gICAgICB0YWJpbmRleCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAwLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGUgOiB0cnVlXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hvd25JblZpZXdwb3J0ID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7ICAgIFxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKCB0aGlzLmNvbGxlY3Rpb24udGh1bWJuYWlsVXJsID09PSAnL2ltYWdlcy9sb2dvcy9sb2dvLXdoaXRlLTUxMi5wbmcnICkge1xuICAgICAgbGV0IGNhcmRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWcnKVswXTtcbiAgICAgIGNhcmRzLmNsYXNzTmFtZSArPSAnIGRlZmF1bHRJbWFnZSc7XG4gICAgfVxuXG4gICAgaWYoICF0aGlzLm9ic2VydmVyICkge1xuICAgICAgYXdhaXQgaW9Mb2FkZXIubG9hZCgpO1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgICAgZSA9PiB0aGlzLl9vblZpZXdwb3J0SW50ZXJzZWN0aW9uKGUpLCBcbiAgICAgICAge1xuICAgICAgICAgIHJvb3RNYXJnaW46ICcxMHB4JywgXG4gICAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5pbWFnZUxvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH1cblxuICBfb25Db2xsZWN0aW9uQ2hhbmdlKCkge1xuICAgIGlmKCAhdGhpcy5zaG93bkluVmlld3BvcnQgKSByZXR1cm47XG4gICAgdGhpcy5fc2V0QmFja2dyb3VuZEltYWdlKCk7XG4gIH1cblxuICBfb25WaWV3cG9ydEludGVyc2VjdGlvbihlKSB7XG4gICAgaWYoIGUubGVuZ3RoID09PSAwICkgcmV0dXJuO1xuICAgIGUgPSBlWzBdO1xuICAgIFxuICAgIGlmKCB0aGlzLnNob3duSW5WaWV3cG9ydCB8fCAhZS5pc0ludGVyc2VjdGluZyApIHJldHVybjtcbiAgICB0aGlzLnNob3duSW5WaWV3cG9ydCA9IHRydWU7XG5cbiAgICB0aGlzLl9zZXRCYWNrZ3JvdW5kSW1hZ2UoKTtcbiAgfVxuXG4gIF9zZXRCYWNrZ3JvdW5kSW1hZ2UoKSB7XG4gICAgdGhpcy4kLmltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3RoaXMuY29sbGVjdGlvbi50aHVtYm5haWxVcmx9JylgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWNvbGxlY3Rpb24tY2FyZCcsIEFwcENvbGxlY3Rpb25DYXJkKTsiLCJjbGFzcyBJbnRlcnNlY3Rpb25PYnNlcnZlckxvYWRlciB7XG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgaWYoIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciApIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKCB0aGlzLmxvYWRlZCApIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKCB0aGlzLmxvYWRpbmcgKSB7XG4gICAgICBhd2FpdCB0aGlzLmxvYWRpbmc7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkaW5nID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwib2JzZXJ2ZXItcG9seWZpbGxcIiAqLyAnaW50ZXJzZWN0aW9uLW9ic2VydmVyJyk7XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMubG9hZGluZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJMb2FkZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=