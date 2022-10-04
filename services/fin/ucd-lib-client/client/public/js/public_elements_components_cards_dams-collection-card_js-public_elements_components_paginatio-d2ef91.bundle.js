"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["public_elements_components_cards_dams-collection-card_js-public_elements_components_paginatio-d2ef91"],{

/***/ "./public/elements/components/cards/dams-collection-card.js":
/*!******************************************************************!*\
  !*** ./public/elements/components/cards/dams-collection-card.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./public/elements/components/pagination.js":
/*!**************************************************!*\
  !*** ./public/elements/components/pagination.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DamsPagination": () => (/* binding */ DamsPagination)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _pagination_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.tpl.js */ "./public/elements/components/pagination.tpl.js");




/**
 * @class DamsPagination
 * @description A pagination UI component
 */
class DamsPagination extends lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement {
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
      return lit_element__WEBPACK_IMPORTED_MODULE_0__.html``;
    }
    if (direction == 'left') {
      if ( this.centerPages.length >= 1 && this.minPage < this.centerPages[0].page ) {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
          <div @click="${this.handleClick}" class="page" page="${this.minPage}">${this.minPage}</div>
          <div class="ellipsis">...</div>`;
      }
    }
    else if (direction == 'right') {
      if ( this.centerPages.length >= 1 && this.maxPage > this.centerPages.slice(-1)[0].page ) {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
          <div class="ellipsis">...</div>
          <div @click="${this.handleClick}" class="page" page="${this.maxPage}">${this.maxPage}</div>`;
      }
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__.html``;
  }

  /**
   * @method _renderCenter
   * @description Renders page links between the ellipses
   * 
   * @returns {TemplateResult}
   */
  _renderCenter() {
    if (!this._hasValidLogic()) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`<div class="${(0,lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__.classMap)({page: true, selected: true})}" page="${this.currentPage}">${this.currentPage}</div>`;
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`${this.centerPages.map(page => lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
      <div 
        @click="${this.handleClick}"
        class="${(0,lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__.classMap)({"page": true, selected: page.selected})}"
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");

function render() {
  return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRadioButton": () => (/* binding */ AppRadioButton)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _radioButton_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radioButton.tpl.js */ "./public/elements/components/radioButton.tpl.js");



/**
 * @class AppRadioButton
 * @description Styleized UI component for Radio button. Wrapper around polymer's options.
 */
class AppRadioButton extends lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _styles_shared_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/shared-styles */ "./public/elements/styles/shared-styles.js");
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
    ${this.choices.map(choice => lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
      <input type="radio" class="radio" name="sort-menu" value="${choice.text}" id="${choice.text}" />
      <label class="radio" for="${choice.text}">${choice.text}</label>
    `)}
    </p>
  </div> 
`;}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2VsZW1lbnRzX2NvbXBvbmVudHNfY2FyZHNfZGFtcy1jb2xsZWN0aW9uLWNhcmRfanMtcHVibGljX2VsZW1lbnRzX2NvbXBvbmVudHNfcGFnaW5hdGlvLWQyZWY5MS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1U7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxRQUFRO0FBQ2xCO0FBQ0EsVUFBVSxRQUFRO0FBQ2xCLFVBQVUsUUFBUTtBQUNsQixVQUFVLFFBQVE7QUFDbEIsVUFBVSxRQUFRO0FBQ2xCO0FBQ2UsaUNBQWlDLG1EQUFVOztBQUUxRDtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEMsZUFBZSxtQ0FBbUM7QUFDbEQsa0JBQWtCLHNDQUFzQztBQUN4RCxlQUFlLG1DQUFtQztBQUNsRCxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHlFQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNEbUM7QUFDc0I7O0FBRTFDO0FBQ2YsT0FBTyw2Q0FBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsVUFBVTtBQUM1QztBQUNBO0FBQ0EsUUFBUSxjQUFjLDZDQUFJO0FBQzFCLG9CQUFvQixZQUFZO0FBQ2hDLFVBQVUsNkNBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVLGVBQWU7QUFDekIsNEJBQTRCLGFBQWEsTUFBTSw2QkFBNkI7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEYrQztBQUNVO0FBQ2hCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNPLDZCQUE2QixtREFBVTtBQUM5QztBQUNBO0FBQ0EscUJBQXFCLDhEQUE4RDtBQUNuRixnQkFBZ0IsMERBQTBEO0FBQzFFLGdCQUFnQiwwREFBMEQ7QUFDMUUscUJBQXFCLGlEQUFpRDtBQUN0RSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLCtEQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsYUFBYSw2Q0FBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZDQUFJO0FBQ25CLHlCQUF5QixpQkFBaUIsdUJBQXVCLGFBQWEsSUFBSSxhQUFhO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZDQUFJO0FBQ25CO0FBQ0EseUJBQXlCLGlCQUFpQix1QkFBdUIsYUFBYSxJQUFJLGFBQWE7QUFDL0Y7QUFDQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDZDQUFJLGVBQWUsdUVBQVEsRUFBRSwyQkFBMkIsRUFBRSxVQUFVLGlCQUFpQixJQUFJLGlCQUFpQjtBQUN2SDtBQUNBLFdBQVcsNkNBQUksR0FBRyw2QkFBNkIsNkNBQUk7QUFDbkQ7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DLGlCQUFpQix1RUFBUSxFQUFFLHNDQUFzQyxFQUFFO0FBQ25FLGdCQUFnQixVQUFVLElBQUk7QUFDOUIsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1Q0FBdUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQix3Q0FBd0M7QUFDN0Q7QUFDQTtBQUNBLGtCQUFrQix3Q0FBd0M7QUFDMUQ7QUFDQTtBQUNBLHFCQUFxQixvQ0FBb0M7QUFDekQ7QUFDQTtBQUNBLGtCQUFrQixvQ0FBb0M7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQSw2QkFBNkIsaUNBQWlDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQztBQUNBO0FBQ0EsMEJBQTBCLGdDQUFnQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFMbUM7QUFDcEI7QUFDZixTQUFTLDZDQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsNERBQTREO0FBQzVGLDBCQUEwQixpQkFBaUI7QUFDM0Msd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVixVQUFVO0FBQ1YsZ0NBQWdDLDREQUE0RDtBQUM1RiwwQkFBMEIsaUJBQWlCO0FBQzNDLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRndDO0FBQ0U7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ08sNkJBQTZCLG1EQUFVO0FBQzlDO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZ0VBQVc7QUFDN0I7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDbUM7QUFDbUI7QUFDRztBQUNBOztBQUUxQztBQUNmLE9BQU8sNkNBQUk7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksNkRBQWU7OztBQUduQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkJBQTJCLDZDQUFJO0FBQ3JDLGtFQUFrRSxZQUFZLFFBQVEsWUFBWTtBQUNsRyxrQ0FBa0MsWUFBWSxJQUFJLFlBQVk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jYXJkcy9kYW1zLWNvbGxlY3Rpb24tY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jYXJkcy9kYW1zLWNvbGxlY3Rpb24tY2FyZC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9yYWRpb0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9yYWRpb0J1dHRvbi50cGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vZGFtcy1jb2xsZWN0aW9uLWNhcmQudHBsLmpzXCI7XG5cbi8qKlxuICogQGNsYXNzIERhbXNDb2xsZWN0aW9uQ2FyZFxuICogQGRlc2NyaXB0aW9uIFVJIGNvbXBvbmVudCBjbGFzcyBmb3IgZGlzcGxheWluZyBhIGNvbGxlY3Rpb24gcHJldmlldyBjYXJkXG4gKiBcbiAqIEBwcm9wIHtPYmplY3R9IGNvbGxlY3Rpb24gLSBBbiBvYmplY3QgZGVzY3JpYmluZyBhIERBTVMgY29sbGVjdGlvbi4gXG4gKiBJZiB1c2VkLCBlbGVtZW50IHdpbGwgc2V0IGFsbCBzdWJzZXF1ZW50IHByb3BlcnRpZXMgd2l0aCBkYXRhIGZyb20gY29sbGVjdGlvbnMgb2JqZWN0LlxuICogQHByb3Age1N0cmluZ30gaW1nU3JjIC0gVGhlIGNvbGxlY3Rpb24gdGh1bWJuYWlsIHNyYy5cbiAqIEBwcm9wIHtTdHJpbmd9IGNhcmRUaXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgY29sbGVjdGlvbi5cbiAqIEBwcm9wIHtOdW1iZXJ9IGl0ZW1DdCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb25zLlxuICogQHByb3Age1N0cmluZ30gaHJlZiAtIExpbmsgdG8gdGhlIGNvbGxlY3Rpb24gbGFuZGluZyBwYWdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYW1zQ29sbGVjdGlvbkNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbGxlY3Rpb246IHt0eXBlOiBPYmplY3R9LFxuICAgICAgaW1nU3JjOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdpbWctc3JjJ30sXG4gICAgICBjYXJkVGl0bGU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2NhcmQtdGl0bGUnfSxcbiAgICAgIGl0ZW1DdDoge3R5cGU6IE51bWJlciwgYXR0cmlidXRlOiAnaXRlbS1jdCd9LFxuICAgICAgaHJlZjoge3R5cGU6IFN0cmluZ31cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW1nU3JjID0gXCJcIjtcbiAgICB0aGlzLmNhcmRUaXRsZSA9IFwiXCI7XG4gICAgdGhpcy5pdGVtQ3QgPSAwO1xuICAgIHRoaXMuaHJlZiA9IFwiXCI7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHVwZGF0ZWRcbiAgICogQGRlc2NyaXB0aW9uIExpdCBsaWZlY3ljbGUgbWV0aG9kIGNhbGxlZCB3aGVuIGVsZW1lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHtNYXB9IHByb3BzIC0gUHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZC5cbiAgICovXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiAoIHByb3BzLmhhcygnY29sbGVjdGlvbicpICYmIHRoaXMuY29sbGVjdGlvblsnQGlkJ10gKSB7XG4gICAgICBpZiAoIHRoaXMuY29sbGVjdGlvbi5hc3NvY2lhdGVkTWVkaWEgKSB7XG4gICAgICAgIHRoaXMuaW1nU3JjID0gdGhpcy5jb2xsZWN0aW9uLnRodW1ibmFpbFVybCA/IHRoaXMuY29sbGVjdGlvbi50aHVtYm5haWxVcmwgOiB0aGlzLmNvbGxlY3Rpb24uYXNzb2NpYXRlZE1lZGlhLnRodW1ibmFpbFVybDtcbiAgICAgICAgdGhpcy5jYXJkVGl0bGUgPSB0aGlzLmNvbGxlY3Rpb24ubGFiZWwgPyB0aGlzLmNvbGxlY3Rpb24ubGFiZWwgOiB0aGlzLmNvbGxlY3Rpb24uYXNzb2NpYXRlZE1lZGlhLm5hbWU7XG4gICAgICAgIHRoaXMuaXRlbUN0ID0gdGhpcy5jb2xsZWN0aW9uLmFzc29jaWF0ZWRNZWRpYS5yZWNvcmRDb3VudDtcbiAgICAgICAgdGhpcy5ocmVmID0gdGhpcy5jb2xsZWN0aW9uLmFzc29jaWF0ZWRNZWRpYVsnQGlkJ107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmltZ1NyYyA9IHRoaXMuY29sbGVjdGlvbi50aHVtYm5haWxVcmw7XG4gICAgICAgIHRoaXMuY2FyZFRpdGxlID0gdGhpcy5jb2xsZWN0aW9uLm5hbWU7XG4gICAgICAgIHRoaXMuaXRlbUN0ID0gdGhpcy5jb2xsZWN0aW9uLnJlY29yZENvdW50O1xuICAgICAgICB0aGlzLmhyZWYgPSB0aGlzLmNvbGxlY3Rpb25bJ0BpZCddO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZGFtcy1jb2xsZWN0aW9uLWNhcmQnLCBEYW1zQ29sbGVjdGlvbkNhcmQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLmltZy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogNzUlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1hZ2VzL2xvZ29zL2xvZ28td2hpdGUtNTEyLnBuZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2stMjApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIH1cbiAgLmltZy1jb250YWluZXIgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICAuaGVhZCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xuICB9XG4gIC5jb250YWluZXI6aG92ZXIgLmhlYWQsIC5jb250YWluZXI6Zm9jdXMgLmhlYWQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWRhbXMtc2Vjb25kYXJ5KTtcbiAgfVxuICBoNSB7XG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWg1KTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWg1KTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctaDUpO1xuICB9XG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1wKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctZXh0cmEtYm9sZCk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFnZ2llLWJsdWUtNzApO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmdvbGQtZG90cyB7XG4gICAgd2lkdGg6IDA7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIGJvcmRlci1ib3R0b206IDVweCBkb3R0ZWQgdmFyKC0tY29sb3ItZGFtcy1zZWNvbmRhcnkpO1xuICB9XG4gIC5jb250YWluZXI6aG92ZXIgLmdvbGQtZG90cywgLmNvbnRhaW5lcjpmb2N1cyAuZ29sZC1kb3RzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG48L3N0eWxlPiAgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PGEgaHJlZj1cIiR7dGhpcy5ocmVmfVwiPlxuICA8ZGl2IGNsYXNzPVwiaGVhZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAke3RoaXMuaW1nU3JjID8gaHRtbGBcbiAgICAgICAgPGltZyBzcmM9XCIke3RoaXMuaW1nU3JjfVwiPlxuICAgICAgYCA6IGh0bWxgYH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgPGg1PiR7dGhpcy5jYXJkVGl0bGV9PC9oNT5cbiAgICA8ZGl2IGNsYXNzPVwic3VidGl0bGVcIj4ke3RoaXMuaXRlbUN0fSBpdGVtJHt0aGlzLml0ZW1DdCA9PT0gMSA/IFwiXCIgOiBcInNcIn08L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ29sZC1kb3RzXCI+PC9kaXY+XG4gIDwvZGl2PjwvYT5cblxuXG48L2Rpdj5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9wYWdpbmF0aW9uLnRwbC5qcyc7XG5cbi8qKlxuICogQGNsYXNzIERhbXNQYWdpbmF0aW9uXG4gKiBAZGVzY3JpcHRpb24gQSBwYWdpbmF0aW9uIFVJIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRGFtc1BhZ2luYXRpb24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50UGFnZTogIHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdjdXJyZW50LXBhZ2UnLCByZWZsZWN0OiB0cnVlfSxcbiAgICAgIG1heFBhZ2U6IHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdtYXgtcGFnZScsIHJlZmxlY3Q6IHRydWV9LFxuICAgICAgbWluUGFnZToge2NvbnZlcnRlcjogcGFyc2VJbnQsIGF0dHJpYnV0ZTogJ21pbi1wYWdlJywgcmVmbGVjdDogdHJ1ZX0sXG4gICAgICBwYWdlc1BlclNpZGU6IHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdwYWdlcy1wZXItc2lkZSd9LFxuICAgICAgY2VudGVyUGFnZXM6IHt0eXBlOiBBcnJheX1cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZXNQZXJTaWRlID0gMTtcbiAgICB0aGlzLm1pblBhZ2UgPSAxO1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLm1pblBhZ2U7XG4gICAgdGhpcy5tYXhQYWdlID0gdGhpcy5jdXJyZW50UGFnZTtcbiAgICB0aGlzLmNlbnRlclBhZ2VzID0gW107XG5cbiAgICB0aGlzLl9jaGFuZ2VkUGFnZSA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlZC1wYWdlJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBwYWdlIGhhcyBiZWVuIHNlbGVjdGVkLidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHVwZGF0ZWRcbiAgICogQGRlc2NyaXB0aW9uIExpdCBtZXRob2QgdGhhdCBpcyBjYWxsZWQgb24gZWxlbWVudCB1cGRhdGUuXG4gICAqIEBwYXJhbSB7TWFwfSBwcm9wcyAtIENoYW5nZWQgcHJvcGVydGllc1xuICAgKi9cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIGZvciAoY29uc3QgcCBvZiBbJ3BhZ2VzUGVyU2lkZScsICdtaW5QYWdlJywgJ2N1cnJlbnRQYWdlJywgJ21heFBhZ2UnXSkge1xuICAgICAgaWYgKHByb3BzLmhhcyhwKSl7IFxuICAgICAgICB0aGlzLl9jb25zdHJ1Y3RDZW50ZXJQYWdlc0FycmF5KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9oYXNWYWxpZExvZ2ljXG4gICAqIEBkZXNjcmlwdGlvbiBFbnN1cmVzIHRoYXQgcGFnZSBwcm9wZXJ0aWVzIGFyZSBpbnRlcm5hbGx5IGNvbnNpc3RlbnRcbiAgICogXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgX2hhc1ZhbGlkTG9naWMoKSB7XG4gICAgaWYgKHRoaXMubWF4UGFnZSA8IHRoaXMuY3VycmVudFBhZ2UgfHwgdGhpcy5tYXhQYWdlIDwgdGhpcy5taW5QYWdlICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm1pblBhZ2UgPiB0aGlzLmN1cnJlbnRQYWdlICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3JlbmRlckVkZ2VcbiAgICogQGRlc2NyaXB0aW9uIFJlbmRlcnMgbWF4L21pbiBwYWdlIGxpbmtzIHdpdGggZWxsaXBzaXMsIGlmIG5lY2Vzc2FyeS5cbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb24gLSAnbGVmdCcgb3IgJ3JpZ2h0J1xuICAgKiBcbiAgICogQHJldHVybnMge1RlbXBsYXRlUmVzdWx0fVxuICAgKi9cbiAgX3JlbmRlckVkZ2UoZGlyZWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNWYWxpZExvZ2ljKCkpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICBpZiAoIHRoaXMuY2VudGVyUGFnZXMubGVuZ3RoID49IDEgJiYgdGhpcy5taW5QYWdlIDwgdGhpcy5jZW50ZXJQYWdlc1swXS5wYWdlICkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICA8ZGl2IEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiBjbGFzcz1cInBhZ2VcIiBwYWdlPVwiJHt0aGlzLm1pblBhZ2V9XCI+JHt0aGlzLm1pblBhZ2V9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVsbGlwc2lzXCI+Li4uPC9kaXY+YDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZGlyZWN0aW9uID09ICdyaWdodCcpIHtcbiAgICAgIGlmICggdGhpcy5jZW50ZXJQYWdlcy5sZW5ndGggPj0gMSAmJiB0aGlzLm1heFBhZ2UgPiB0aGlzLmNlbnRlclBhZ2VzLnNsaWNlKC0xKVswXS5wYWdlICkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxsaXBzaXNcIj4uLi48L2Rpdj5cbiAgICAgICAgICA8ZGl2IEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiBjbGFzcz1cInBhZ2VcIiBwYWdlPVwiJHt0aGlzLm1heFBhZ2V9XCI+JHt0aGlzLm1heFBhZ2V9PC9kaXY+YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJDZW50ZXJcbiAgICogQGRlc2NyaXB0aW9uIFJlbmRlcnMgcGFnZSBsaW5rcyBiZXR3ZWVuIHRoZSBlbGxpcHNlc1xuICAgKiBcbiAgICogQHJldHVybnMge1RlbXBsYXRlUmVzdWx0fVxuICAgKi9cbiAgX3JlbmRlckNlbnRlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhc1ZhbGlkTG9naWMoKSkge1xuICAgICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cIiR7Y2xhc3NNYXAoe3BhZ2U6IHRydWUsIHNlbGVjdGVkOiB0cnVlfSl9XCIgcGFnZT1cIiR7dGhpcy5jdXJyZW50UGFnZX1cIj4ke3RoaXMuY3VycmVudFBhZ2V9PC9kaXY+YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgJHt0aGlzLmNlbnRlclBhZ2VzLm1hcChwYWdlID0+IGh0bWxgXG4gICAgICA8ZGl2IFxuICAgICAgICBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCJcbiAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcInBhZ2VcIjogdHJ1ZSwgc2VsZWN0ZWQ6IHBhZ2Uuc2VsZWN0ZWR9KX1cIlxuICAgICAgICBwYWdlPVwiJHtwYWdlLnBhZ2V9XCI+JHtwYWdlLnBhZ2V9XG4gICAgICA8L2Rpdj5gKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2NvbnN0cnVjdENlbnRlclBhZ2VBcnJheVxuICAgKiBAZGVzY3JpcHRpb24gU2V0cyBjZW50ZXJQYWdlcyBwcm9wZXJ0eS4gQ2FsbGVkIG9uIGVsZW1lbnQgdXBkYXRlLlxuICAgKi9cbiAgX2NvbnN0cnVjdENlbnRlclBhZ2VzQXJyYXkoKXtcbiAgICAvLyBtZXRlIG91dCBwYWdlcy1wZXItc2lkZSB0byBlaXRoZXIgc2lkZSBvZiB0aGUgY3VycmVudCBwYWdlLlxuICAgIGxldCBwYWdlcyA9IFt7cGFnZTogdGhpcy5jdXJyZW50UGFnZSwgc2VsZWN0ZWQ6IHRydWV9XTtcbiAgICBsZXQgcmVtYWluZGVyID0gdGhpcy5wYWdlc1BlclNpZGUgKiAyO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBhZGRQYWdlcyh0aGlzLnBhZ2VzUGVyU2lkZSk7XG4gICAgYWRkUGFnZXMocmVtYWluZGVyKTtcblxuICAgIC8vIEFkZCBwYWdlcyB0byBiZWdpbm5pbmcvZW5kIG9mIGFycmF5IGlmIHdpdGhpbiAyIG9mIG1pbi9tYXggcGFnZVxuICAgIGlmIChwYWdlc1swXS5wYWdlID09IHRoaXMubWluUGFnZSArIDIgKSB7XG4gICAgICBwYWdlcy51bnNoaWZ0KHtwYWdlOiB0aGlzLm1pblBhZ2UgKyAxLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICB9XG4gICAgaWYgKHBhZ2VzLnNsaWNlKC0xKVswXS5wYWdlID09IHRoaXMubWF4UGFnZSAtIDIpIHtcbiAgICAgIHBhZ2VzLnB1c2goe3BhZ2U6IHRoaXMubWF4UGFnZSAtIDEsIHNlbGVjdGVkOiBmYWxzZX0pO1xuICAgIH1cbiAgICBpZiAocGFnZXNbMF0ucGFnZSAtIHRoaXMubWluUGFnZSA9PT0gMSkge1xuICAgICAgcGFnZXMudW5zaGlmdCh7cGFnZTogdGhpcy5taW5QYWdlLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4UGFnZSAtIHBhZ2VzLnNsaWNlKC0xKVswXS5wYWdlID09PSAxKSB7XG4gICAgICBwYWdlcy5wdXNoKHtwYWdlOiB0aGlzLm1heFBhZ2UsIHNlbGVjdGVkOiBmYWxzZX0pO1xuICAgIH1cbiAgICB0aGlzLmNlbnRlclBhZ2VzID0gcGFnZXM7XG5cbiAgICAvKipcbiAgICAgKiBAZnVuY3Rpb24gYWRkUGFnZXNcbiAgICAgKiBAZGVzY3JpcHRpb24gcHJpdmF0ZSBmdW5jdGlvbiBmb3IgX2NvbnN0cnVjdENlbnRlclBhZ2VBcnJheSB0aGF0IGJ1aWxkcyB0aGUgcGFnZXMgYXJyYXlcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbG9vcHMgLSBOdW1iZXIgb2YgcGFnZXMgdG8gYmUgYWRkZWQgb24gZWl0aGVyIHNpZGUgb2YgdGhlIHBhZ2VzIGFycmF5XG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkUGFnZXMobG9vcHMpe1xuICAgICAgbGV0IGRpcmVjdGlvbnMgPSBbJ2xlZnQnLCAncmlnaHQnXTtcbiAgICAgIGZvciAobGV0IGRpcmVjdGlvbiBvZiBkaXJlY3Rpb25zKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcHM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGZpcnN0ID0gcGFnZXNbMF0ucGFnZTtcbiAgICAgICAgICAgIGlmIChmaXJzdCA+IHNlbGYubWluUGFnZSkge1xuICAgICAgICAgICAgICBwYWdlcy51bnNoaWZ0KHtwYWdlOiBmaXJzdCAtIDEsIHNlbGVjdGVkOiBmYWxzZX0pO1xuICAgICAgICAgICAgICByZW1haW5kZXIgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcHM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxhc3QgPSBwYWdlcy5zbGljZSgtMSlbMF0ucGFnZTtcbiAgICAgICAgICAgIGlmIChsYXN0IDwgc2VsZi5tYXhQYWdlKSB7XG4gICAgICAgICAgICAgIHBhZ2VzLnB1c2goe3BhZ2U6IGxhc3QgKyAxLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICAgICAgICAgICAgcmVtYWluZGVyIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaGFuZGxlQ2xpY2tcbiAgICogQGRlc2NyaXB0aW9uIEV2ZW50IGhhbmRsZXIgZm9yIGVsZW1lbnQgY2xpY2suIENoYW5nZXMgdGhlIGFjdGl2ZSBwYWdlLlxuICAgKiBEaXNwYXRjaGVzIHRoZSAnY2hhbmdlZC1wYWdlJyBldmVudFxuICAgKiBcbiAgICogQHBhcmFtIHtFdmVudH0gZSAtIENsaWNrIGV2ZW50IG9uIHBhZ2UgbnVtYmVycyBvciBhcnJvdyBpY29uc1xuICAgKi9cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGxldCBuZXdfcGFnZSA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncGFnZScpKTtcbiAgICBpZiAobmV3X3BhZ2UgIT0gdGhpcy5jdXJyZW50UGFnZSkge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG5ld19wYWdlO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX2NoYW5nZWRQYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkYW1zLXBhZ2luYXRpb24nLCBEYW1zUGFnaW5hdGlvbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuXG4gICAgfVxuICAgIC5jb250YWluZXItY2VudGVyIHsgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgfVxuICAgIC5wYWdlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLnBhZ2U6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAucGFnZS5zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW1zLXNlY29uZGFyeSk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICB9XG4gICAgLnBhZ2Uuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgLmVsbGlwc2lzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICBpcm9uLWljb24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBpcm9uLWljb246aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICBpcm9uLWljb25bZGlzYWJsZWRdOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeS1kaXNhYmxlZCk7XG4gICAgfVxuICAgIGlyb24taWNvbltkaXNhYmxlZF0ge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5LWRpc2FibGVkKTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1jb250YWluZXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWNlbnRlclwiPlxuICAgICAgICA8aXJvbi1pY29uID9kaXNhYmxlZD1cIiR7dGhpcy5jdXJyZW50UGFnZSA9PSB0aGlzLm1pblBhZ2UgfHwgIXRoaXMuX2hhc1ZhbGlkTG9naWMoKSB9XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCJcbiAgICAgICAgICAgICAgICBwYWdlPVwiJHt0aGlzLmN1cnJlbnRQYWdlIC0gMX1cIlxuICAgICAgICAgICAgICAgIGljb249XCJhcnJvdy1iYWNrXCI+XG4gICAgICAgIDwvaXJvbi1pY29uPlxuICAgICAgICAke3RoaXMuX3JlbmRlckVkZ2UoJ2xlZnQnKX1cbiAgICAgICAgJHt0aGlzLl9yZW5kZXJDZW50ZXIoKX1cbiAgICAgICAgJHt0aGlzLl9yZW5kZXJFZGdlKCdyaWdodCcpfVxuICAgICAgICA8aXJvbi1pY29uID9kaXNhYmxlZD1cIiR7dGhpcy5jdXJyZW50UGFnZSA9PSB0aGlzLm1heFBhZ2UgfHwgIXRoaXMuX2hhc1ZhbGlkTG9naWMoKSB9XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCJcbiAgICAgICAgICAgICAgICBwYWdlPVwiJHt0aGlzLmN1cnJlbnRQYWdlICsgMX1cIlxuICAgICAgICAgICAgICAgIGljb249XCJhcnJvdy1mb3J3YXJkXCI+XG4gICAgICAgIDwvaXJvbi1pY29uPlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3JhZGlvQnV0dG9uLnRwbC5qcyc7XG5cbi8qKlxuICogQGNsYXNzIEFwcFJhZGlvQnV0dG9uXG4gKiBAZGVzY3JpcHRpb24gU3R5bGVpemVkIFVJIGNvbXBvbmVudCBmb3IgUmFkaW8gYnV0dG9uLiBXcmFwcGVyIGFyb3VuZCBwb2x5bWVyJ3Mgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIEFwcFJhZGlvQnV0dG9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY291bnQgOiB7dHlwZSA6IFN0cmluZ30sXG4gICAgICBjaG9pY2VzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkFwcFN0YXRlVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBvbiB0aGUgQXBwIHVwZGF0ZSwgdGhlIHN0YXRlIGlzIGRldGVybWluZWQgYW5kIGJ5IGNoZWNraW5nXG4gICAqIHRoZSBsb2NhdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgXG4gICAqL1xuICBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgaWYoIGUubG9jYXRpb24uaGFzaCA9PT0gJ2NvbGxlY3Rpb25zJyApIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZWxlID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNjb2xsZWN0aW9ucy1ob21lJyk7XG4gICAgICAgIGlmKCBlbGUgKSBlbGUuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH0sIDI1KTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtcmFkaW8tYnV0dG9uJywgQXBwUmFkaW9CdXR0b24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzaGFyZWRTdHlsZXNDc3MgZnJvbSBcIi4uL3N0eWxlcy9zaGFyZWQtc3R5bGVzXCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VwZXItbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICBmaWVsZHNldCB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIH1cbiAgLnJhZGlvTWVudSB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIH1cblxuICAke3NoYXJlZFN0eWxlc0Nzc31cblxuXG48L3N0eWxlPlxuPGRpdiBjbGFzcz1cInJhZGlvTWVudVwiPiAgIFxuPHA+XG4gIDxiPlNvcnQgYnk6PC9iPlxuICAgICR7dGhpcy5jaG9pY2VzLm1hcChjaG9pY2UgPT4gaHRtbGBcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInJhZGlvXCIgbmFtZT1cInNvcnQtbWVudVwiIHZhbHVlPVwiJHtjaG9pY2UudGV4dH1cIiBpZD1cIiR7Y2hvaWNlLnRleHR9XCIgLz5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvXCIgZm9yPVwiJHtjaG9pY2UudGV4dH1cIj4ke2Nob2ljZS50ZXh0fTwvbGFiZWw+XG4gICAgYCl9XG4gICAgPC9wPlxuICA8L2Rpdj4gXG5gO30iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=