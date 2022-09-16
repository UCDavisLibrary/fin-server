(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-collections~page-components"],{

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

/***/ "./public/elements/components/pagination.js":
/*!**************************************************!*\
  !*** ./public/elements/components/pagination.js ***!
  \**************************************************/
/*! exports provided: DamsPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DamsPagination", function() { return DamsPagination; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _pagination_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.tpl.js */ "./public/elements/components/pagination.tpl.js");




/**
 * @class DamsPagination
 * @description A pagination UI component
 */
class DamsPagination extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
    return {
      currentPage:  {converter: parseInt, attribute: 'current-page', reflect: true},
      maxPage: {converter: parseInt, attribute: 'max-page', reflect: true},
      minPage: {converter: parseInt, attribute: 'min-page', reflect: true},
      pagesPerSide: {converter: parseInt, attribute: 'pages-per-side'},
      centerPages: {type: Array}
    };
  }

  constructor() {
    super();
    this.render = _pagination_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(this);
    this.pagesPerSide = 1;
    this.minPage = 1;
    this.currentPage = this.minPage;
    this.maxPage = this.currentPage;
    this.centerPages = [];

    this._changedPage = new CustomEvent('changed-page', {
      detail: {
        message: 'A new page has been selected.'
      }
    });
  }

  /**
   * @method updated
   * @description Lit method that is called on element update.
   * @param {Map} props - Changed properties
   */
  updated(props) {
    for (const p of ['pagesPerSide', 'minPage', 'currentPage', 'maxPage']) {
      if (props.has(p)){ 
        this._constructCenterPagesArray();
        break;
      }
    }
  }

  /**
   * @method _hasValidLogic
   * @description Ensures that page properties are internally consistent
   * 
   * @returns {Boolean}
   */
  _hasValidLogic() {
    if (this.maxPage < this.currentPage || this.maxPage < this.minPage ) {
      return false;
    }
    else if (this.minPage > this.currentPage ) {
      return false;
    }
    return true;

  }

  /**
   * @method _renderEdge
   * @description Renders max/min page links with ellipsis, if necessary.
   * 
   * @param {String} direction - 'left' or 'right'
   * 
   * @returns {TemplateResult}
   */
  _renderEdge(direction) {
    if (!this._hasValidLogic()) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    if (direction == 'left') {
      if ( this.centerPages.length >= 1 && this.minPage < this.centerPages[0].page ) {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <div @click="${this.handleClick}" class="page" page="${this.minPage}">${this.minPage}</div>
          <div class="ellipsis">...</div>`;
      }
    }
    else if (direction == 'right') {
      if ( this.centerPages.length >= 1 && this.maxPage > this.centerPages.slice(-1)[0].page ) {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <div class="ellipsis">...</div>
          <div @click="${this.handleClick}" class="page" page="${this.maxPage}">${this.maxPage}</div>`;
      }
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
  }

  /**
   * @method _renderCenter
   * @description Renders page links between the ellipses
   * 
   * @returns {TemplateResult}
   */
  _renderCenter() {
    if (!this._hasValidLogic()) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({page: true, selected: true})}" page="${this.currentPage}">${this.currentPage}</div>`;
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this.centerPages.map(page => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div 
        @click="${this.handleClick}"
        class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({"page": true, selected: page.selected})}"
        page="${page.page}">${page.page}
      </div>`)}`;
  }

  /**
   * @method _constructCenterPageArray
   * @description Sets centerPages property. Called on element update.
   */
  _constructCenterPagesArray(){
    // mete out pages-per-side to either side of the current page.
    let pages = [{page: this.currentPage, selected: true}];
    let remainder = this.pagesPerSide * 2;
    let self = this;
    addPages(this.pagesPerSide);
    addPages(remainder);

    // Add pages to beginning/end of array if within 2 of min/max page
    if (pages[0].page == this.minPage + 2 ) {
      pages.unshift({page: this.minPage + 1, selected: false});
    }
    if (pages.slice(-1)[0].page == this.maxPage - 2) {
      pages.push({page: this.maxPage - 1, selected: false});
    }
    if (pages[0].page - this.minPage === 1) {
      pages.unshift({page: this.minPage, selected: false});
    }
    if (this.maxPage - pages.slice(-1)[0].page === 1) {
      pages.push({page: this.maxPage, selected: false});
    }
    this.centerPages = pages;

    /**
     * @function addPages
     * @description private function for _constructCenterPageArray that builds the pages array
     * @param {Number} loops - Number of pages to be added on either side of the pages array
     */
    function addPages(loops){
      let directions = ['left', 'right'];
      for (let direction of directions) {
        if (direction === 'left') {
          for (let i = 0; i < loops; i++) {
            let first = pages[0].page;
            if (first > self.minPage) {
              pages.unshift({page: first - 1, selected: false});
              remainder -= 1;
            }
          }
        }
        if (direction === 'right') {
          for (let i = 0; i < loops; i++) {
            let last = pages.slice(-1)[0].page;
            if (last < self.maxPage) {
              pages.push({page: last + 1, selected: false});
              remainder -= 1;
            }
          }
        }
      }
    }
  }

  /**
   * @method handleClick
   * @description Event handler for element click. Changes the active page.
   * Dispatches the 'changed-page' event
   * 
   * @param {Event} e - Click event on page numbers or arrow icons
   */
  handleClick(e) {
    let new_page = parseInt(e.target.getAttribute('page'));
    if (new_page != this.currentPage) {
      this.currentPage = new_page;
      this.dispatchEvent(this._changedPage);
    }
  }
}

customElements.define('dams-pagination', DamsPagination);


/***/ }),

/***/ "./public/elements/components/pagination.tpl.js":
/*!******************************************************!*\
  !*** ./public/elements/components/pagination.tpl.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");

function render() {
  return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    :host {
      display: block;
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-bold);
      color: var(--tcolor-primary);
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      text-align:center;

    }
    .container-center { 
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      margin: auto;

    }
    .page {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      transition: 0.3s;
      min-width: 40px;
      min-height: 40px;
    }
    .page:hover {
      color: var(--tcolor-link-hover-text);
    }
    .page.selected {
      background-color: var(--color-dams-secondary);
      pointer-events: none;
      cursor: auto;
    }
    .page.selected:hover {
      color: var(--tcolor-primary);
    }
    .ellipsis {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      min-height: 40px;
      margin-left: 4px;
      margin-right: 4px;
    }
    iron-icon {
      cursor: pointer;
    }
    iron-icon:hover {
      color: var(--tcolor-link-hover-text);
    }
    iron-icon[disabled]:hover {
      color: var(--tcolor-primary-disabled);
    }
    iron-icon[disabled] {
      color: var(--tcolor-primary-disabled);
      pointer-events: none;
    }
  </style>
  <div class=container>

    <div class="container-center">
        <iron-icon ?disabled="${this.currentPage == this.minPage || !this._hasValidLogic() }"
                @click="${this.handleClick}"
                page="${this.currentPage - 1}"
                icon="arrow-back">
        </iron-icon>
        ${this._renderEdge('left')}
        ${this._renderCenter()}
        ${this._renderEdge('right')}
        <iron-icon ?disabled="${this.currentPage == this.maxPage || !this._hasValidLogic() }"
                @click="${this.handleClick}"
                page="${this.currentPage + 1}"
                icon="arrow-forward">
        </iron-icon>
    </div>

  </div>
  `;
}


/***/ }),

/***/ "./public/elements/components/radioButton.js":
/*!***************************************************!*\
  !*** ./public/elements/components/radioButton.js ***!
  \***************************************************/
/*! exports provided: AppRadioButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRadioButton", function() { return AppRadioButton; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _radioButton_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radioButton.tpl.js */ "./public/elements/components/radioButton.tpl.js");



/**
 * @class AppRadioButton
 * @description Styleized UI component for Radio button. Wrapper around polymer's options.
 */
class AppRadioButton extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
    return {
      count : {type : String},
      choices: {
        type: Array
      },
    };
  }

  constructor() {
    super();
    this.render = _radioButton_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.active = true;

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
}

customElements.define('app-radio-button', AppRadioButton);


/***/ }),

/***/ "./public/elements/components/radioButton.tpl.js":
/*!*******************************************************!*\
  !*** ./public/elements/components/radioButton.tpl.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/shared-styles */ "./public/elements/styles/shared-styles.js");
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

  fieldset {
    text-align:center;
  }
  .radioMenu {
    text-align:center;
  }

  ${_styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__["default"]}


</style>
<div class="radioMenu">   
<p>
  <b>Sort by:</b>
    ${this.choices.map(choice => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <input type="radio" class="radio" name="sort-menu" value="${choice.text}" id="${choice.text}" />
      <label class="radio" for="${choice.text}">${choice.text}</label>
    `)}
    </p>
  </div> 
`;}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jYXJkcy9kYW1zLWNvbGxlY3Rpb24tY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jYXJkcy9kYW1zLWNvbGxlY3Rpb24tY2FyZC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9yYWRpb0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9yYWRpb0J1dHRvbi50cGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ1U7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsT0FBTztBQUNqQixVQUFVLE9BQU87QUFDakIsVUFBVSxPQUFPO0FBQ2pCO0FBQ2UsaUNBQWlDLHNEQUFVOztBQUUxRDtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEMsZUFBZSxtQ0FBbUM7QUFDbEQsa0JBQWtCLHNDQUFzQztBQUN4RCxlQUFlLG1DQUFtQztBQUNsRCxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9FQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNzQjs7QUFF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Q1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDJEQUFNO0FBQ3hCOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ21CO0FBQ0c7QUFDQTs7QUFFMUMsbUI7QUFDZixPQUFPLGdEQUFJO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDZEQUFlOzs7QUFHbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJCQUEyQixnREFBSTtBQUNyQyxrRUFBa0UsWUFBWSxRQUFRLFlBQVk7QUFDbEcsa0NBQWtDLFlBQVksSUFBSSxZQUFZO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLEciLCJmaWxlIjoicGFnZS1jb2xsZWN0aW9uc35wYWdlLWNvbXBvbmVudHMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vZGFtcy1jb2xsZWN0aW9uLWNhcmQudHBsLmpzXCI7XG5cbi8qKlxuICogQGNsYXNzIERhbXNDb2xsZWN0aW9uQ2FyZFxuICogQGRlc2NyaXB0aW9uIFVJIGNvbXBvbmVudCBjbGFzcyBmb3IgZGlzcGxheWluZyBhIGNvbGxlY3Rpb24gcHJldmlldyBjYXJkXG4gKiBcbiAqIEBwcm9wIHtPYmplY3R9IGNvbGxlY3Rpb24gLSBBbiBvYmplY3QgZGVzY3JpYmluZyBhIERBTVMgY29sbGVjdGlvbi4gXG4gKiBJZiB1c2VkLCBlbGVtZW50IHdpbGwgc2V0IGFsbCBzdWJzZXF1ZW50IHByb3BlcnRpZXMgd2l0aCBkYXRhIGZyb20gY29sbGVjdGlvbnMgb2JqZWN0LlxuICogQHByb3Age1N0cmluZ30gaW1nU3JjIC0gVGhlIGNvbGxlY3Rpb24gdGh1bWJuYWlsIHNyYy5cbiAqIEBwcm9wIHtTdHJpbmd9IGNhcmRUaXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgY29sbGVjdGlvbi5cbiAqIEBwcm9wIHtOdW1iZXJ9IGl0ZW1DdCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb25zLlxuICogQHByb3Age1N0cmluZ30gaHJlZiAtIExpbmsgdG8gdGhlIGNvbGxlY3Rpb24gbGFuZGluZyBwYWdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYW1zQ29sbGVjdGlvbkNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbGxlY3Rpb246IHt0eXBlOiBPYmplY3R9LFxuICAgICAgaW1nU3JjOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdpbWctc3JjJ30sXG4gICAgICBjYXJkVGl0bGU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2NhcmQtdGl0bGUnfSxcbiAgICAgIGl0ZW1DdDoge3R5cGU6IE51bWJlciwgYXR0cmlidXRlOiAnaXRlbS1jdCd9LFxuICAgICAgaHJlZjoge3R5cGU6IFN0cmluZ31cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW1nU3JjID0gXCJcIjtcbiAgICB0aGlzLmNhcmRUaXRsZSA9IFwiXCI7XG4gICAgdGhpcy5pdGVtQ3QgPSAwO1xuICAgIHRoaXMuaHJlZiA9IFwiXCI7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHVwZGF0ZWRcbiAgICogQGRlc2NyaXB0aW9uIExpdCBsaWZlY3ljbGUgbWV0aG9kIGNhbGxlZCB3aGVuIGVsZW1lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHtNYXB9IHByb3BzIC0gUHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZC5cbiAgICovXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiAoIHByb3BzLmhhcygnY29sbGVjdGlvbicpICYmIHRoaXMuY29sbGVjdGlvblsnX2lkJ10gKSB7XG4gICAgICB0aGlzLmltZ1NyYyA9IHRoaXMuY29sbGVjdGlvbi50aHVtYm5haWxVcmw7XG4gICAgICB0aGlzLmNhcmRUaXRsZSA9IHRoaXMuY29sbGVjdGlvbi5uYW1lO1xuICAgICAgdGhpcy5pdGVtQ3QgPSB0aGlzLmNvbGxlY3Rpb24ucmVjb3JkQ291bnQ7XG4gICAgICB0aGlzLmhyZWYgPSB0aGlzLmNvbGxlY3Rpb25bJ19pZCddO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RhbXMtY29sbGVjdGlvbi1jYXJkJywgRGFtc0NvbGxlY3Rpb25DYXJkKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC5pbWctY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDc1JTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltYWdlcy9sb2dvcy9sb2dvLXdoaXRlLTUxMi5wbmcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLTIwKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB9XG4gIC5pbWctY29udGFpbmVyIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgLmhlYWQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgfVxuICAuY29udGFpbmVyOmhvdmVyIC5oZWFkLCAuY29udGFpbmVyOmZvY3VzIC5oZWFkIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1kYW1zLXNlY29uZGFyeSk7XG4gIH1cbiAgaDUge1xuICAgIG1hcmdpbjogMTBweCAwIDVweCAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oNSk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1oNSk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWg1KTtcbiAgfVxuICAuc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtcCk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWV4dHJhLWJvbGQpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hZ2dpZS1ibHVlLTcwKTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5nb2xkLWRvdHMge1xuICAgIHdpZHRoOiAwO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItYm90dG9tOiA1cHggZG90dGVkIHZhcigtLWNvbG9yLWRhbXMtc2Vjb25kYXJ5KTtcbiAgfVxuICAuY29udGFpbmVyOmhvdmVyIC5nb2xkLWRvdHMsIC5jb250YWluZXI6Zm9jdXMgLmdvbGQtZG90cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuPC9zdHlsZT4gIFxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPjxhIGhyZWY9XCIke3RoaXMuaHJlZn1cIj5cbiAgPGRpdiBjbGFzcz1cImhlYWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPlxuICAgICAgJHt0aGlzLmltZ1NyYyA/IGh0bWxgXG4gICAgICAgIDxpbWcgc3JjPVwiJHt0aGlzLmltZ1NyY31cIj5cbiAgICAgIGAgOiBodG1sYGB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYm9keVwiPlxuICAgIDxoNT4ke3RoaXMuY2FyZFRpdGxlfTwvaDU+XG4gICAgPGRpdiBjbGFzcz1cInN1YnRpdGxlXCI+JHt0aGlzLml0ZW1DdH0gaXRlbSR7dGhpcy5pdGVtQ3QgPT09IDEgPyBcIlwiIDogXCJzXCJ9PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImdvbGQtZG90c1wiPjwvZGl2PlxuICA8L2Rpdj48L2E+XG5cblxuPC9kaXY+XG5gO30iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcGFnaW5hdGlvbi50cGwuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEYW1zUGFnaW5hdGlvblxuICogQGRlc2NyaXB0aW9uIEEgcGFnaW5hdGlvbiBVSSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIERhbXNQYWdpbmF0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFBhZ2U6ICB7Y29udmVydGVyOiBwYXJzZUludCwgYXR0cmlidXRlOiAnY3VycmVudC1wYWdlJywgcmVmbGVjdDogdHJ1ZX0sXG4gICAgICBtYXhQYWdlOiB7Y29udmVydGVyOiBwYXJzZUludCwgYXR0cmlidXRlOiAnbWF4LXBhZ2UnLCByZWZsZWN0OiB0cnVlfSxcbiAgICAgIG1pblBhZ2U6IHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdtaW4tcGFnZScsIHJlZmxlY3Q6IHRydWV9LFxuICAgICAgcGFnZXNQZXJTaWRlOiB7Y29udmVydGVyOiBwYXJzZUludCwgYXR0cmlidXRlOiAncGFnZXMtcGVyLXNpZGUnfSxcbiAgICAgIGNlbnRlclBhZ2VzOiB7dHlwZTogQXJyYXl9XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhZ2VzUGVyU2lkZSA9IDE7XG4gICAgdGhpcy5taW5QYWdlID0gMTtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5taW5QYWdlO1xuICAgIHRoaXMubWF4UGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7XG4gICAgdGhpcy5jZW50ZXJQYWdlcyA9IFtdO1xuXG4gICAgdGhpcy5fY2hhbmdlZFBhZ2UgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZWQtcGFnZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgcGFnZSBoYXMgYmVlbiBzZWxlY3RlZC4nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB1cGRhdGVkXG4gICAqIEBkZXNjcmlwdGlvbiBMaXQgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIG9uIGVsZW1lbnQgdXBkYXRlLlxuICAgKiBAcGFyYW0ge01hcH0gcHJvcHMgLSBDaGFuZ2VkIHByb3BlcnRpZXNcbiAgICovXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBmb3IgKGNvbnN0IHAgb2YgWydwYWdlc1BlclNpZGUnLCAnbWluUGFnZScsICdjdXJyZW50UGFnZScsICdtYXhQYWdlJ10pIHtcbiAgICAgIGlmIChwcm9wcy5oYXMocCkpeyBcbiAgICAgICAgdGhpcy5fY29uc3RydWN0Q2VudGVyUGFnZXNBcnJheSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaGFzVmFsaWRMb2dpY1xuICAgKiBAZGVzY3JpcHRpb24gRW5zdXJlcyB0aGF0IHBhZ2UgcHJvcGVydGllcyBhcmUgaW50ZXJuYWxseSBjb25zaXN0ZW50XG4gICAqIFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIF9oYXNWYWxpZExvZ2ljKCkge1xuICAgIGlmICh0aGlzLm1heFBhZ2UgPCB0aGlzLmN1cnJlbnRQYWdlIHx8IHRoaXMubWF4UGFnZSA8IHRoaXMubWluUGFnZSApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5taW5QYWdlID4gdGhpcy5jdXJyZW50UGFnZSApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJFZGdlXG4gICAqIEBkZXNjcmlwdGlvbiBSZW5kZXJzIG1heC9taW4gcGFnZSBsaW5rcyB3aXRoIGVsbGlwc2lzLCBpZiBuZWNlc3NhcnkuXG4gICAqIFxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIC0gJ2xlZnQnIG9yICdyaWdodCdcbiAgICogXG4gICAqIEByZXR1cm5zIHtUZW1wbGF0ZVJlc3VsdH1cbiAgICovXG4gIF9yZW5kZXJFZGdlKGRpcmVjdGlvbikge1xuICAgIGlmICghdGhpcy5faGFzVmFsaWRMb2dpYygpKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09ICdsZWZ0Jykge1xuICAgICAgaWYgKCB0aGlzLmNlbnRlclBhZ2VzLmxlbmd0aCA+PSAxICYmIHRoaXMubWluUGFnZSA8IHRoaXMuY2VudGVyUGFnZXNbMF0ucGFnZSApIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgPGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgY2xhc3M9XCJwYWdlXCIgcGFnZT1cIiR7dGhpcy5taW5QYWdlfVwiPiR7dGhpcy5taW5QYWdlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGxpcHNpc1wiPi4uLjwvZGl2PmA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICBpZiAoIHRoaXMuY2VudGVyUGFnZXMubGVuZ3RoID49IDEgJiYgdGhpcy5tYXhQYWdlID4gdGhpcy5jZW50ZXJQYWdlcy5zbGljZSgtMSlbMF0ucGFnZSApIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVsbGlwc2lzXCI+Li4uPC9kaXY+XG4gICAgICAgICAgPGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgY2xhc3M9XCJwYWdlXCIgcGFnZT1cIiR7dGhpcy5tYXhQYWdlfVwiPiR7dGhpcy5tYXhQYWdlfTwvZGl2PmA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBodG1sYGA7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVuZGVyQ2VudGVyXG4gICAqIEBkZXNjcmlwdGlvbiBSZW5kZXJzIHBhZ2UgbGlua3MgYmV0d2VlbiB0aGUgZWxsaXBzZXNcbiAgICogXG4gICAqIEByZXR1cm5zIHtUZW1wbGF0ZVJlc3VsdH1cbiAgICovXG4gIF9yZW5kZXJDZW50ZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNWYWxpZExvZ2ljKCkpIHtcbiAgICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCIke2NsYXNzTWFwKHtwYWdlOiB0cnVlLCBzZWxlY3RlZDogdHJ1ZX0pfVwiIHBhZ2U9XCIke3RoaXMuY3VycmVudFBhZ2V9XCI+JHt0aGlzLmN1cnJlbnRQYWdlfTwvZGl2PmA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYCR7dGhpcy5jZW50ZXJQYWdlcy5tYXAocGFnZSA9PiBodG1sYFxuICAgICAgPGRpdiBcbiAgICAgICAgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiXG4gICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XCJwYWdlXCI6IHRydWUsIHNlbGVjdGVkOiBwYWdlLnNlbGVjdGVkfSl9XCJcbiAgICAgICAgcGFnZT1cIiR7cGFnZS5wYWdlfVwiPiR7cGFnZS5wYWdlfVxuICAgICAgPC9kaXY+YCl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9jb25zdHJ1Y3RDZW50ZXJQYWdlQXJyYXlcbiAgICogQGRlc2NyaXB0aW9uIFNldHMgY2VudGVyUGFnZXMgcHJvcGVydHkuIENhbGxlZCBvbiBlbGVtZW50IHVwZGF0ZS5cbiAgICovXG4gIF9jb25zdHJ1Y3RDZW50ZXJQYWdlc0FycmF5KCl7XG4gICAgLy8gbWV0ZSBvdXQgcGFnZXMtcGVyLXNpZGUgdG8gZWl0aGVyIHNpZGUgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAgICBsZXQgcGFnZXMgPSBbe3BhZ2U6IHRoaXMuY3VycmVudFBhZ2UsIHNlbGVjdGVkOiB0cnVlfV07XG4gICAgbGV0IHJlbWFpbmRlciA9IHRoaXMucGFnZXNQZXJTaWRlICogMjtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgYWRkUGFnZXModGhpcy5wYWdlc1BlclNpZGUpO1xuICAgIGFkZFBhZ2VzKHJlbWFpbmRlcik7XG5cbiAgICAvLyBBZGQgcGFnZXMgdG8gYmVnaW5uaW5nL2VuZCBvZiBhcnJheSBpZiB3aXRoaW4gMiBvZiBtaW4vbWF4IHBhZ2VcbiAgICBpZiAocGFnZXNbMF0ucGFnZSA9PSB0aGlzLm1pblBhZ2UgKyAyICkge1xuICAgICAgcGFnZXMudW5zaGlmdCh7cGFnZTogdGhpcy5taW5QYWdlICsgMSwgc2VsZWN0ZWQ6IGZhbHNlfSk7XG4gICAgfVxuICAgIGlmIChwYWdlcy5zbGljZSgtMSlbMF0ucGFnZSA9PSB0aGlzLm1heFBhZ2UgLSAyKSB7XG4gICAgICBwYWdlcy5wdXNoKHtwYWdlOiB0aGlzLm1heFBhZ2UgLSAxLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICB9XG4gICAgaWYgKHBhZ2VzWzBdLnBhZ2UgLSB0aGlzLm1pblBhZ2UgPT09IDEpIHtcbiAgICAgIHBhZ2VzLnVuc2hpZnQoe3BhZ2U6IHRoaXMubWluUGFnZSwgc2VsZWN0ZWQ6IGZhbHNlfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heFBhZ2UgLSBwYWdlcy5zbGljZSgtMSlbMF0ucGFnZSA9PT0gMSkge1xuICAgICAgcGFnZXMucHVzaCh7cGFnZTogdGhpcy5tYXhQYWdlLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICB9XG4gICAgdGhpcy5jZW50ZXJQYWdlcyA9IHBhZ2VzO1xuXG4gICAgLyoqXG4gICAgICogQGZ1bmN0aW9uIGFkZFBhZ2VzXG4gICAgICogQGRlc2NyaXB0aW9uIHByaXZhdGUgZnVuY3Rpb24gZm9yIF9jb25zdHJ1Y3RDZW50ZXJQYWdlQXJyYXkgdGhhdCBidWlsZHMgdGhlIHBhZ2VzIGFycmF5XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxvb3BzIC0gTnVtYmVyIG9mIHBhZ2VzIHRvIGJlIGFkZGVkIG9uIGVpdGhlciBzaWRlIG9mIHRoZSBwYWdlcyBhcnJheVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFBhZ2VzKGxvb3BzKXtcbiAgICAgIGxldCBkaXJlY3Rpb25zID0gWydsZWZ0JywgJ3JpZ2h0J107XG4gICAgICBmb3IgKGxldCBkaXJlY3Rpb24gb2YgZGlyZWN0aW9ucykge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHBhZ2VzWzBdLnBhZ2U7XG4gICAgICAgICAgICBpZiAoZmlyc3QgPiBzZWxmLm1pblBhZ2UpIHtcbiAgICAgICAgICAgICAgcGFnZXMudW5zaGlmdCh7cGFnZTogZmlyc3QgLSAxLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICAgICAgICAgICAgcmVtYWluZGVyIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsYXN0ID0gcGFnZXMuc2xpY2UoLTEpWzBdLnBhZ2U7XG4gICAgICAgICAgICBpZiAobGFzdCA8IHNlbGYubWF4UGFnZSkge1xuICAgICAgICAgICAgICBwYWdlcy5wdXNoKHtwYWdlOiBsYXN0ICsgMSwgc2VsZWN0ZWQ6IGZhbHNlfSk7XG4gICAgICAgICAgICAgIHJlbWFpbmRlciAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGhhbmRsZUNsaWNrXG4gICAqIEBkZXNjcmlwdGlvbiBFdmVudCBoYW5kbGVyIGZvciBlbGVtZW50IGNsaWNrLiBDaGFuZ2VzIHRoZSBhY3RpdmUgcGFnZS5cbiAgICogRGlzcGF0Y2hlcyB0aGUgJ2NoYW5nZWQtcGFnZScgZXZlbnRcbiAgICogXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBDbGljayBldmVudCBvbiBwYWdlIG51bWJlcnMgb3IgYXJyb3cgaWNvbnNcbiAgICovXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBsZXQgbmV3X3BhZ2UgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3BhZ2UnKSk7XG4gICAgaWYgKG5ld19wYWdlICE9IHRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBuZXdfcGFnZTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9jaGFuZ2VkUGFnZSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZGFtcy1wYWdpbmF0aW9uJywgRGFtc1BhZ2luYXRpb24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcblxuICAgIH1cbiAgICAuY29udGFpbmVyLWNlbnRlciB7IFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogYXV0bztcblxuICAgIH1cbiAgICAucGFnZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgfVxuICAgIC5wYWdlOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgLnBhZ2Uuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFtcy1zZWNvbmRhcnkpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgfVxuICAgIC5wYWdlLnNlbGVjdGVkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC5lbGxpcHNpcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgaXJvbi1pY29uOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgaXJvbi1pY29uW2Rpc2FibGVkXTpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnktZGlzYWJsZWQpO1xuICAgIH1cbiAgICBpcm9uLWljb25bZGlzYWJsZWRdIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeS1kaXNhYmxlZCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9Y29udGFpbmVyPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1jZW50ZXJcIj5cbiAgICAgICAgPGlyb24taWNvbiA/ZGlzYWJsZWQ9XCIke3RoaXMuY3VycmVudFBhZ2UgPT0gdGhpcy5taW5QYWdlIHx8ICF0aGlzLl9oYXNWYWxpZExvZ2ljKCkgfVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiXG4gICAgICAgICAgICAgICAgcGFnZT1cIiR7dGhpcy5jdXJyZW50UGFnZSAtIDF9XCJcbiAgICAgICAgICAgICAgICBpY29uPVwiYXJyb3ctYmFja1wiPlxuICAgICAgICA8L2lyb24taWNvbj5cbiAgICAgICAgJHt0aGlzLl9yZW5kZXJFZGdlKCdsZWZ0Jyl9XG4gICAgICAgICR7dGhpcy5fcmVuZGVyQ2VudGVyKCl9XG4gICAgICAgICR7dGhpcy5fcmVuZGVyRWRnZSgncmlnaHQnKX1cbiAgICAgICAgPGlyb24taWNvbiA/ZGlzYWJsZWQ9XCIke3RoaXMuY3VycmVudFBhZ2UgPT0gdGhpcy5tYXhQYWdlIHx8ICF0aGlzLl9oYXNWYWxpZExvZ2ljKCkgfVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiXG4gICAgICAgICAgICAgICAgcGFnZT1cIiR7dGhpcy5jdXJyZW50UGFnZSArIDF9XCJcbiAgICAgICAgICAgICAgICBpY29uPVwiYXJyb3ctZm9yd2FyZFwiPlxuICAgICAgICA8L2lyb24taWNvbj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnR9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yYWRpb0J1dHRvbi50cGwuanMnO1xuXG4vKipcbiAqIEBjbGFzcyBBcHBSYWRpb0J1dHRvblxuICogQGRlc2NyaXB0aW9uIFN0eWxlaXplZCBVSSBjb21wb25lbnQgZm9yIFJhZGlvIGJ1dHRvbi4gV3JhcHBlciBhcm91bmQgcG9seW1lcidzIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBSYWRpb0J1dHRvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvdW50IDoge3R5cGUgOiBTdHJpbmd9LFxuICAgICAgY2hvaWNlczoge1xuICAgICAgICB0eXBlOiBBcnJheVxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcblxuICB9XG5cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25BcHBTdGF0ZVVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gb24gdGhlIEFwcCB1cGRhdGUsIHRoZSBzdGF0ZSBpcyBkZXRlcm1pbmVkIGFuZCBieSBjaGVja2luZ1xuICAgKiB0aGUgbG9jYXRpb25cbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxuICAgKi9cbiAgX29uQXBwU3RhdGVVcGRhdGUoZSkge1xuICAgIGlmKCBlLmxvY2F0aW9uLmhhc2ggPT09ICdjb2xsZWN0aW9ucycgKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGVsZSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjY29sbGVjdGlvbnMtaG9tZScpO1xuICAgICAgICBpZiggZWxlICkgZWxlLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICB9LCAyNSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXJhZGlvLWJ1dHRvbicsIEFwcFJhZGlvQnV0dG9uKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc2hhcmVkU3R5bGVzQ3NzIGZyb20gXCIuLi9zdHlsZXMvc2hhcmVkLXN0eWxlc1wiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cGVyLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgZmllbGRzZXQge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG4gIC5yYWRpb01lbnUge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG5cbiAgJHtzaGFyZWRTdHlsZXNDc3N9XG5cblxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJyYWRpb01lbnVcIj4gICBcbjxwPlxuICA8Yj5Tb3J0IGJ5OjwvYj5cbiAgICAke3RoaXMuY2hvaWNlcy5tYXAoY2hvaWNlID0+IGh0bWxgXG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJyYWRpb1wiIG5hbWU9XCJzb3J0LW1lbnVcIiB2YWx1ZT1cIiR7Y2hvaWNlLnRleHR9XCIgaWQ9XCIke2Nob2ljZS50ZXh0fVwiIC8+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpb1wiIGZvcj1cIiR7Y2hvaWNlLnRleHR9XCI+JHtjaG9pY2UudGV4dH08L2xhYmVsPlxuICAgIGApfVxuICAgIDwvcD5cbiAgPC9kaXY+IFxuYDt9Il0sInNvdXJjZVJvb3QiOiIifQ==