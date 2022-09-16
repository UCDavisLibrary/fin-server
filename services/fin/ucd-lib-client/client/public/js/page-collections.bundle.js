(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-collections"],{

/***/ "./public/elements/pages/collections/app-collections.js":
/*!**************************************************************!*\
  !*** ./public/elements/pages/collections/app-collections.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
class AppCollections extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
  .with(EventInterface, _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_14___default.a, _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_15___default.a, _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_16___default.a) {

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/shared-styles */ "./public/elements/styles/shared-styles.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/style-map */ "./public/node_modules/lit-html/directives/style-map.js");





function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`    
          <dams-pagination ></dams-pagination>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
  </div>

</div>  

</div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29sbGVjdGlvbnMvYXBwLWNvbGxlY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9jb2xsZWN0aW9ucy9hcHAtY29sbGVjdGlvbnMudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9hcHAtY29sbGVjdGlvbi1jYXJkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL2FwcC1jb2xsZWN0aW9uLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2xpYi91dGlscy9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXItbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7O0FBRVA7QUFDUTs7QUFFWjs7QUFFc0I7QUFDUTtBQUNOO0FBQ3RCO0FBQ007QUFDSDtBQUNLO0FBQ0Q7QUFDRDs7O0FBR1M7OztBQUdxQjtBQUNJOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzREFBVTtBQUM3Qyx3QkFBd0IsbUVBQWUsRUFBRSxxRUFBaUIsRUFBRSx1RUFBbUI7O0FBRS9FO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYztBQUNwQyxjQUFjLGFBQWE7QUFDM0Isa0JBQWtCLGFBQWE7QUFDL0IsY0FBYyxZQUFZO0FBQzFCLG9CQUFvQixhQUFhO0FBQ2pDLG1CQUFtQixhQUFhO0FBQ2hDLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnRUFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QixrQkFBa0Isb0JBQW9CLG1CQUFtQixLQUFLLHFDQUFxQyxzQkFBc0IsbUJBQW1CLHVEQUF1RCxLQUFLLHlCQUF5QiwyQkFBMkIsS0FBSyxZQUFZLG9CQUFvQixtQkFBbUIseUJBQXlCLGdFQUFnRSxxRUFBcUUsNkJBQTZCLHlEQUF5RCx5Q0FBeUMsU0FBUyxtQkFBbUIsb0JBQW9CLHlCQUF5QixjQUFjLGtCQUFrQixtQkFBbUIsa0RBQWtELGtDQUFrQyw4Q0FBOEMsV0FBVywrTjs7Ozs7Ozs7Ozs7O0FDQTc2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0U7QUFDZDtBQUNrQjs7QUFFckQsZ0NBQWdDLCtFQUFjOztBQUU3RDtBQUNBO0FBQ0Esb0JBQW9CLGdFQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksK0VBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyw2QkFBNkI7QUFDNUU7QUFDQTs7QUFFQSxnRTs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxxT0FBMkU7QUFDdkY7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFZSwrRkFBZ0MsRSIsImZpbGUiOiJwYWdlLWNvbGxlY3Rpb25zLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnR9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuaW1wb3J0IFwiQHVjZC1saWIvZmluLXNlYXJjaC1ib3hcIjtcbmltcG9ydCBcIi4uLy4uL3V0aWxzL2FwcC1jb2xsZWN0aW9uLWNhcmRcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2dyYXBoaWNzL2RhbXMtd2F0ZXJjb2xvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9ncmFwaGljcy9kYW1zLXdhdGVyY29sb3Itb3ZlcmxheVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9jYXJkcy9kYW1zLWNvbGxlY3Rpb24tY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3NlYXJjaC1ib3hcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbmF2LWJhclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9maWx0ZXJCdXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcmFkaW9CdXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xuXG5cbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hcHAtY29sbGVjdGlvbnMudHBsLmpzJztcblxuaW1wb3J0IFJlY29yZEludGVyZmFjZSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9SZWNvcmRJbnRlcmZhY2VcIjsgXG5pbXBvcnQgQXBwU3RhdGVJbnRlcmZhY2UgZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvQXBwU3RhdGVJbnRlcmZhY2VcIjtcbmltcG9ydCBDb2xsZWN0aW9uSW50ZXJmYWNlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0NvbGxlY3Rpb25JbnRlcmZhY2VcIjtcblxuLyoqXG4gKiBAY2xhc3MgQXBwSG9tZVxuICogQGRlc2NyaXB0aW9uIGhvbWUgcGFnZSBpcyByZW5kZXJlZCB0byB0aGUgREFNUyB2MlxuICovXG5jbGFzcyBBcHBDb2xsZWN0aW9ucyBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKEV2ZW50SW50ZXJmYWNlLCBSZWNvcmRJbnRlcmZhY2UsIEFwcFN0YXRlSW50ZXJmYWNlLCBDb2xsZWN0aW9uSW50ZXJmYWNlKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNQYWdpbmF0aW9uOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBwZ1Blcjoge3R5cGU6IE51bWJlcn0sXG4gICAgICBwZ0N1cnJlbnQ6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgaXRlbXM6IHt0eXBlOiBBcnJheX0sXG4gICAgICBpdGVtc1N0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBpdGVtc1RvdGFsOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIGNvdW50IDoge3R5cGUgOiBTdHJpbmd9LFxuICAgICAgY2hvaWNlczoge1xuICAgICAgICB0eXBlOiBBcnJheVxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5pdGVtc1RvdGFsID0gMTc7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCByZWFkeVxuICAgKiBAZGVzY3JpcHRpb24gSXQgZ2V0cyB0aGUgbW9kZWwgaW5mb3JtYXRpb24gZm9yIHRoZSBDb2xsZWN0aW9ucyB3aGVuIFxuICAgKiBmdW5jdGlvbiBpcyBmaXJlZC5cbiAgICogXG4gICAqL1xuICAvLyBhc3luYyByZWFkeSgpIHtcbiAgLy8gICBzdXBlci5yZWFkeSgpO1xuICAvLyAgIHRoaXMuX3NldENvbGxlY3Rpb25zKGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLm92ZXJ2aWV3KCkpO1xuICAvLyB9XG5cbiAgYXN5bmMgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuX3NldENvbGxlY3Rpb25zKGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLm92ZXJ2aWV3KCkpO1xuXG4gIH1cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQXBwU3RhdGVVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIG9uIHRoZSBBcHAgdXBkYXRlLCB0aGUgc3RhdGUgaXMgZGV0ZXJtaW5lZCBhbmQgYnkgY2hlY2tpbmdcbiAgICogdGhlIGxvY2F0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcbiAgICovXG4gIF9vbkFwcFN0YXRlVXBkYXRlKGUpIHtcbiAgICBpZiggZS5sb2NhdGlvbi5oYXNoID09PSAnY29sbGVjdGlvbnMnICkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBlbGUgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2NvbGxlY3Rpb25zLWhvbWUnKTtcbiAgICAgICAgaWYoIGVsZSApIGVsZS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgfSwgMjUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zZXRDb2xsZWN0aW9uc1xuICAgKiBAZGVzY3JpcHRpb24gd2hlbiB0aGUgZWxlbWVudCBpcyByZWFkeSwgdGhlIGNvbGxlY3Rpb24gbW9kZWwgaXMgY2FsbGVkIFxuICAgKiBmb3IgdGhlIGNvbGxlY3Rpb24gbGlzdC4gIHRoaXMgcmVuZGVycyBpcy5cbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxuICAgKi9cbiAgX3NldENvbGxlY3Rpb25zKGUpIHtcbiAgICBpZiggZS5zdGF0ZSAhPT0gJ2xvYWRlZCcgKSByZXR1cm47XG4gICAgbGV0IG92ZXJ2aWV3ID0gZS5wYXlsb2FkO1xuICAgIGxldCBicm93c2UgPSB7fTtcblxuICAgIG92ZXJ2aWV3LnNvcnQoKGEsYikgPT4ge1xuICAgICAgaWYoIGEubmFtZSA+IGIubmFtZSApIHJldHVybiAxO1xuICAgICAgaWYoIGEubmFtZSA8IGIubmFtZSApIHJldHVybiAtMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgb3ZlcnZpZXcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGJyb3dzZVtpdGVtWydAaWQnXV0gPSBpdGVtLm5hbWU7XG4gICAgICBpZiggIWl0ZW0udGh1bWJuYWlsVXJsICkge1xuICAgICAgICBpdGVtLnRodW1ibmFpbFVybCA9ICcvaW1hZ2VzL2xvZ29zL2xvZ28td2hpdGUtNTEyLnBuZyc7XG4gICAgICB9XG5cbiAgICAgIGlmKCBpdGVtLndvcmtFeGFtcGxlICkge1xuICAgICAgICBpdGVtLnRodW1ibmFpbCA9ICcvZmNyZXBvL3Jlc3QnK2l0ZW0ud29ya0V4YW1wbGVbJ0BpZCddKycvc3ZjOmlpaWYvZnVsbC8sMzIwLzAvZGVmYXVsdC5qcGcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS50aHVtYm5haWwgPSAnL2ltYWdlcy9sb2dvcy9sb2dvLXdoaXRlLTUxMi5wbmcnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy90aGlzLiQuc2VhcmNoQm94LmJyb3dzZSA9IGJyb3dzZTtcbiAgICB0aGlzLml0ZW1zID0gb3ZlcnZpZXc7XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VhcmNoXG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsZWQgZnJvbSB0aGUgc2VhcmNoIGJveCBidXR0b24gaXMgY2xpY2tlZCBvclxuICAgKiB0aGUgZW50ZXIga2V5IGlzIGhpdC4gIHNldCB0aGUgdGV4dCBmaWx0ZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICovXG4gIF9vblNlYXJjaChlKSB7XG5cbiAgICBsZXQgc2VhcmNoRG9jID0gdGhpcy5fZ2V0RW1wdHlTZWFyY2hEb2N1bWVudCgpO1xuICAgIHRoaXMuX3NldFRleHRGaWx0ZXIoc2VhcmNoRG9jLCBlLmRldGFpbCk7XG4gICAgdGhpcy5SZWNvcmRNb2RlbC5zZXRTZWFyY2hMb2NhdGlvbihzZWFyY2hEb2MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ29sbGVjdGlvbkNsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGNhbGxlZCB3aGVuIGNvbGxlY3Rpb24gaW1nIG9uIGhvbWUgcGFnZSBpcyBjbGlja2VkIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZVxuICAgKi9cbiAgX29uQ29sbGVjdGlvbkNsaWNrZWQoZSkge1xuICAgIGlmKCBlLnR5cGUgPT09ICdrZXl1cCcgJiYgZS53aGljaCAhPT0gMTMgKSByZXR1cm47XG4gICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIHRoaXMuX29uQ29sbGVjdGlvblNlbGVjdGVkKGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNvbGxlY3Rpb25TZWxlY3RlZFxuICAgKiBAZGVzY3JpcHRpb24gZmlsdGVyIGJhc2VkIG9uIGEgY29sbGVjdGlvbiB1c2luZyBzaG9ydCBpZHMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgKiBcbiAgICovXG4gIF9vbkNvbGxlY3Rpb25TZWxlY3RlZChpZCkge1xuICAgIHRoaXMuX3NldFdpbmRvd0xvY2F0aW9uKGlkKTtcbiAgfVxuICBcbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtY29sbGVjdGlvbnMnLCBBcHBDb2xsZWN0aW9ucyk7IiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzaGFyZWRTdHlsZXNDc3MgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaGFyZWQtc3R5bGVzXCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VwZXItbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICAudGV4dC1jb250YWluZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAycmVtIDVyZW0gMnJlbSA1cmVtIDtcbiAgfVxuXG4gIGgxLCBoMiB7XG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMCAwcHg7XG4gIH1cblxuICAueWVsbG93LWxpbmUge1xuICAgIG1hcmdpbjogMCBhdXRvIDAgMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNHB4O1xuXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICB9XG4gIFxuICAucmFzdGVySW1hZ2V7XG4gICAgaGVpZ2h0OjEwMHB4O1xuICAgIG1heC13aWR0aDogMjAlOyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hZ2dpZS1ibHVlLTUwKTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgfVxuICAuaGVhZGVyVGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMi45NHJlbTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWdnaWUtYmx1ZSk7XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG4gIC5yYWRpb01lbnUge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG4gIC5pY29ue1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG5cbiAgLmNvbGxlY3Rpb24tZ3JpZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMzMlIDMzJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAuZ3JpZC1pdGVtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5jb250ZW50e1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB9XG5cbiAgZGFtcy1wYWdpbmF0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG5cbiAgJHtzaGFyZWRTdHlsZXNDc3N9XG5cblxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+ICBcbiAgICA8ZGl2IGNsYXNzPWljb24+XG4gICAgICA8ZGFtcy13YXRlcmNvbG9yLW92ZXJsYXkgXG4gICAgICAgIGljb249XCJzdGFyXCI+XG4gICAgICA8L2RhbXMtd2F0ZXJjb2xvci1vdmVybGF5PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJUZXh0XCI+IEJyb3dzZSA8Yj5Db2xsZWN0aW9uczwvYj48L2Rpdj5cbiAgICBcbiAgICA8YXBwLXJhZGlvLWJ1dHRvbiBjaG9pY2VzPSdbe1widGV4dFwiOiBcIlRpdGxlXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiUmVjZW50XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiSXRlbSBRdWFudGl0eVwifV0nPjwvYXBwLXJhZGlvLWJ1dHRvbj5cbiAgICBcbiAgPC9kaXY+XG5cblxuICA8IS0tIDxkaXYgY2xhc3M9XCJjb2xsZWN0aW9uLWdyaWQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sbGVjdGlvbi1vdXRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGVjdGlvbnNcIiBpZD1cImNvbGxlY3Rpb25zLWhvbWVcIj5cbiAgICAgICAgICAke3RoaXMuaXRlbXMubWFwKChpdGVtKSA9PiBcbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhcHAtY29sbGVjdGlvbi1jYXJkIFxuICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke2l0ZW0uX2lkfVwiIFxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uPVwiJHtpdGVtfVwiIFxuICAgICAgICAgICAgICAgIEBrZXl1cD1cIiR7dGhpcy5fb25Db2xsZWN0aW9uQ2xpY2tlZH1cIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fb25Db2xsZWN0aW9uQ2xpY2tlZH1cIj5cbiAgICAgICAgICAgICAgPC9hcHAtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gLS0+XG4gICAgXG4gIDxkaXYgY2xhc3M9XCJjb2xsZWN0aW9uLWdyaWQtY29udGFpbmVyXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XG4gICAgICA8ZGl2PiAgXG4gICAgICAgIDxkYW1zLWNvbGxlY3Rpb24tY2FyZFxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dvb2dsZS5jb21cIlxuICAgICAgICAgIGl0ZW0tY3Q9XCIxXCJcbiAgICAgICAgICBjYXJkLXRpdGxlPVwiQSBDb2xsZWN0aW9uXCI+XG4gICAgICAgIDwvZGFtcy1jb2xsZWN0aW9uLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XG4gICAgICA8ZGl2PiAgXG4gICAgICAgIDxkYW1zLWNvbGxlY3Rpb24tY2FyZFxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dvb2dsZS5jb21cIlxuICAgICAgICAgIGl0ZW0tY3Q9XCIxXCJcbiAgICAgICAgICBjYXJkLXRpdGxlPVwiQSBDb2xsZWN0aW9uXCI+XG4gICAgICAgIDwvZGFtcy1jb2xsZWN0aW9uLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XG4gICAgICA8ZGl2PiAgXG4gICAgICAgIDxkYW1zLWNvbGxlY3Rpb24tY2FyZFxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dvb2dsZS5jb21cIlxuICAgICAgICAgIGl0ZW0tY3Q9XCIxXCJcbiAgICAgICAgICBjYXJkLXRpdGxlPVwiQSBDb2xsZWN0aW9uXCI+XG4gICAgICAgIDwvZGFtcy1jb2xsZWN0aW9uLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XG4gICAgICA8ZGl2PiAgXG4gICAgICAgIDxkYW1zLWNvbGxlY3Rpb24tY2FyZFxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dvb2dsZS5jb21cIlxuICAgICAgICAgIGl0ZW0tY3Q9XCIxXCJcbiAgICAgICAgICBjYXJkLXRpdGxlPVwiQSBDb2xsZWN0aW9uXCI+XG4gICAgICAgIDwvZGFtcy1jb2xsZWN0aW9uLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XG4gICAgICA8ZGl2PiAgXG4gICAgICAgIDxkYW1zLWNvbGxlY3Rpb24tY2FyZFxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dvb2dsZS5jb21cIlxuICAgICAgICAgIGl0ZW0tY3Q9XCIxXCJcbiAgICAgICAgICBjYXJkLXRpdGxlPVwiQSBDb2xsZWN0aW9uXCI+XG4gICAgICAgIDwvZGFtcy1jb2xsZWN0aW9uLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+XG4gICAgICA8ZGl2PiAgXG4gICAgICAgIDxkYW1zLWNvbGxlY3Rpb24tY2FyZFxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dvb2dsZS5jb21cIlxuICAgICAgICAgIGl0ZW0tY3Q9XCIxXCJcbiAgICAgICAgICBjYXJkLXRpdGxlPVwiQSBDb2xsZWN0aW9uXCI+XG4gICAgICAgIDwvZGFtcy1jb2xsZWN0aW9uLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gXG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgPGRpdj4gIFxuICAgICAgICA8ZGFtcy1jb2xsZWN0aW9uLWNhcmRcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCJcbiAgICAgICAgICBpdGVtLWN0PVwiMVwiXG4gICAgICAgICAgY2FyZC10aXRsZT1cIkEgQ29sbGVjdGlvblwiPlxuICAgICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgPGRpdj4gIFxuICAgICAgICA8ZGFtcy1jb2xsZWN0aW9uLWNhcmRcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCJcbiAgICAgICAgICBpdGVtLWN0PVwiMVwiXG4gICAgICAgICAgY2FyZC10aXRsZT1cIkEgQ29sbGVjdGlvblwiPlxuICAgICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgPGRpdj4gIFxuICAgICAgICA8ZGFtcy1jb2xsZWN0aW9uLWNhcmRcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCJcbiAgICAgICAgICBpdGVtLWN0PVwiMVwiXG4gICAgICAgICAgY2FyZC10aXRsZT1cIkEgQ29sbGVjdGlvblwiPlxuICAgICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgPGRpdj4gIFxuICAgICAgICA8ZGFtcy1jb2xsZWN0aW9uLWNhcmRcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCJcbiAgICAgICAgICBpdGVtLWN0PVwiMVwiXG4gICAgICAgICAgY2FyZC10aXRsZT1cIkEgQ29sbGVjdGlvblwiPlxuICAgICAgICA8L2RhbXMtY29sbGVjdGlvbi1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICAke3RoaXMuaXRlbXNUb3RhbCA+IDE2ID8gXG4gICAgICAgIGh0bWxgICAgIFxuICAgICAgICAgIDxkYW1zLXBhZ2luYXRpb24gPjwvZGFtcy1wYWdpbmF0aW9uPlxuICAgICAgICBgIDogaHRtbGBgfVxuICA8L2Rpdj5cblxuPC9kaXY+ICBcblxuPC9kaXY+XG5gO30iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgb3V0bGluZSA6IDA7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gIH1cXG5cXG4gIDpob3N0KDpob3ZlciksIDpob3N0KDpmb2N1cykgIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDEzcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5pbWcuZGVmYXVsdEltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NSU7XFxuICB9XFxuXFxuICAuaW1nIHtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9sb2dvcy9sb2dvLXdoaXRlLTUxMi5wbmcnKTsgLyogZmFsbGJhY2sgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIG5lZWRzIHRvIGJlIDY1JSAqL1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAgICBcXG4gIH1cXG5cXG4gIC5pbWcgPiBkaXYgIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMjVweDtcXG4gICAgYm90dG9tOiAyNXB4O1xcbiAgICBcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDM4LCA4NSwgLjgpOyAgICAgIFxcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBcXG4gIGlkPVxcXCJpbWdcXFwiXFxuICBjbGFzcz1cXFwiaW1nXFxcIiBcXG4gIHJvbGU9XFxcImltZ1xcXCIgXFxuICBhcmlhLWxhYmVsPVxcXCJbW2NvbGxlY3Rpb24ubmFtZV1dXFxcIj5cXG4gIDxkaXY+XFxuICAgIDxkaXY+W1tjb2xsZWN0aW9uLm5hbWVdXTwvZGl2PlxcbiAgICA8ZGl2PltbY29sbGVjdGlvbi5yZWNvcmRDb3VudF1dIGl0ZW1zPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtY29sbGVjdGlvbi1jYXJkLmh0bWxcIjtcbmltcG9ydCBpb0xvYWRlciBmcm9tIFwiLi4vLi4vbGliL3V0aWxzL2ludGVyc2VjdGlvbi1vYnNlcnZlci1sb2FkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29sbGVjdGlvbkNhcmQgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sbGVjdGlvbiA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiAoe30pLFxuICAgICAgICBvYnNlcnZlciA6ICdfb25Db2xsZWN0aW9uQ2hhbmdlJ1xuICAgICAgfSxcbiAgICAgIHRhYmluZGV4IDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDAsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZSA6IHRydWVcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zaG93bkluVmlld3BvcnQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHsgICAgXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAoIHRoaXMuY29sbGVjdGlvbi50aHVtYm5haWxVcmwgPT09ICcvaW1hZ2VzL2xvZ29zL2xvZ28td2hpdGUtNTEyLnBuZycgKSB7XG4gICAgICBsZXQgY2FyZHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnLmltZycpWzBdO1xuICAgICAgY2FyZHMuY2xhc3NOYW1lICs9ICcgZGVmYXVsdEltYWdlJztcbiAgICB9XG5cbiAgICBpZiggIXRoaXMub2JzZXJ2ZXIgKSB7XG4gICAgICBhd2FpdCBpb0xvYWRlci5sb2FkKCk7XG4gICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICBlID0+IHRoaXMuX29uVmlld3BvcnRJbnRlcnNlY3Rpb24oZSksIFxuICAgICAgICB7XG4gICAgICAgICAgcm9vdE1hcmdpbjogJzEwcHgnLCBcbiAgICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmltYWdlTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIF9vbkNvbGxlY3Rpb25DaGFuZ2UoKSB7XG4gICAgaWYoICF0aGlzLnNob3duSW5WaWV3cG9ydCApIHJldHVybjtcbiAgICB0aGlzLl9zZXRCYWNrZ3JvdW5kSW1hZ2UoKTtcbiAgfVxuXG4gIF9vblZpZXdwb3J0SW50ZXJzZWN0aW9uKGUpIHtcbiAgICBpZiggZS5sZW5ndGggPT09IDAgKSByZXR1cm47XG4gICAgZSA9IGVbMF07XG4gICAgXG4gICAgaWYoIHRoaXMuc2hvd25JblZpZXdwb3J0IHx8ICFlLmlzSW50ZXJzZWN0aW5nICkgcmV0dXJuO1xuICAgIHRoaXMuc2hvd25JblZpZXdwb3J0ID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NldEJhY2tncm91bmRJbWFnZSgpO1xuICB9XG5cbiAgX3NldEJhY2tncm91bmRJbWFnZSgpIHtcbiAgICB0aGlzLiQuaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7dGhpcy5jb2xsZWN0aW9uLnRodW1ibmFpbFVybH0nKWA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtY29sbGVjdGlvbi1jYXJkJywgQXBwQ29sbGVjdGlvbkNhcmQpOyIsImNsYXNzIEludGVyc2VjdGlvbk9ic2VydmVyTG9hZGVyIHtcbiAgYXN5bmMgbG9hZCgpIHtcbiAgICBpZiggd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyICkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAoIHRoaXMubG9hZGVkICkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAoIHRoaXMubG9hZGluZyApIHtcbiAgICAgIGF3YWl0IHRoaXMubG9hZGluZztcbiAgICAgIHJldHVybiB0aGlzLmxvYWRlZDtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRpbmcgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJvYnNlcnZlci1wb2x5ZmlsbFwiICovICdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInKTtcbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlckxvYWRlcigpOyJdLCJzb3VyY2VSb290IjoiIn0=