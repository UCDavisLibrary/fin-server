(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-search"],{

/***/ "./public/elements/interfaces/FiltersInterface.js":
/*!********************************************************!*\
  !*** ./public/elements/interfaces/FiltersInterface.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = subclass => 
  class FiltersInterface extends subclass {
    constructor() {
      super();
      this._injectModel('FiltersModel');
    }

  }

/***/ }),

/***/ "./public/elements/interfaces/MediaInterface.js":
/*!******************************************************!*\
  !*** ./public/elements/interfaces/MediaInterface.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = subclass => 
  class MediaInterface extends subclass {
    constructor() {
      super();
      this._injectModel('MediaModel');
    }

    _getImgPath(record) {
      return this.MediaModel.getImgPath(record);
    }

    _getImgUrl(path, width, height) {
      return this.MediaModel.getImgUrl(path, width, height);
    }

    _getImageMediaList(rootRecord) {
      return this.MediaModel.getImageMediaList(rootRecord);
    }

  }

/***/ }),

/***/ "./public/elements/pages/record/app-copy-cite.html":
/*!*********************************************************!*\
  !*** ./public/elements/pages/record/app-copy-cite.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  :host {\n    display: block;\n  }\n  [hidden] {\n    display:none !important;\n  }\n  textarea {\n    width: 100%;\n    font-size: var(--fs-p);\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    /* width: 85px; */\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    font-weight: var(--fw-bold);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n  }\n\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  \n  .copyButton[active] span {\n    display: none;\n  }\n\n  #citeText {\n    padding-bottom: 10px;\n    overflow: auto;\n    word-break: break-word;\n  }\n\n  .buttons {\n    display: flex;\n  }\n</style>\n\n<div hidden$=\"[[copying]]\" id=\"citeText\"></div>\n<textarea hidden$=\"[[!copying]]\" id=\"copyArea\"></textarea>\n\n<div class=\"buttons\">\n  <div>\n    <slot></slot>\n  </div>\n  <button active$=\"[[copying]]\" on-click=\"_onCopyClicked\" class=\"copyButton\">\n    <iron-icon icon=\"content-copy\" id=\"icon\"></iron-icon>\n    <span>Copy</span>\n  </button>\n</div>\n";

/***/ }),

/***/ "./public/elements/pages/record/app-copy-cite.js":
/*!*******************************************************!*\
  !*** ./public/elements/pages/record/app-copy-cite.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppCopyCite; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_copy_cite_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-copy-cite.html */ "./public/elements/pages/record/app-copy-cite.html");
/* harmony import */ var _app_copy_cite_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_copy_cite_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! striptags */ "./public/node_modules/striptags/src/striptags.js");
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(striptags__WEBPACK_IMPORTED_MODULE_2__);




class AppCopyCite extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_copy_cite_html__WEBPACK_IMPORTED_MODULE_1___default.a;
    return tag;
  }

  static get properties() {
    return {
      text : {
        type : String,
        value : '',
        observer : '_onTextUpdate'
      },
      copying : {
        type : Boolean,
        value : false
      }
    }
  }

  /**
   * @method _onTextUpdate
   * @description bound to 'text' property observer
   */
  _onTextUpdate() {
    this.$.citeText.innerHTML = this.text || '';
    this.$.copyArea.value = striptags__WEBPACK_IMPORTED_MODULE_2___default()(this.text).trim();
  }

  /**
   * @method _onCopyClicked
   * @description bound to copy btn click event
   */
  _onCopyClicked() {
    // first set correct height
    this.$.copyArea.style.height = (this.$.citeText.offsetHeight-10)+'px';
    this.$.copyArea.style.width = (this.$.citeText.offsetWidth-10)+'px';
  
    this.copying = true;
    // this.$.copyArea.select();
    this.$.copyArea.focus();
    this.$.copyArea.setSelectionRange(0, 9999);
    document.execCommand("Copy");
    this.$.icon.icon = 'check';

    setTimeout(() => {
      this.$.icon.icon = 'content-copy';
      this.copying = false;
    }, 3000);
  }

}

customElements.define('app-copy-cite', AppCopyCite);

/***/ }),

/***/ "./public/elements/pages/search/app-collection-info-panel.html":
/*!*********************************************************************!*\
  !*** ./public/elements/pages/search/app-collection-info-panel.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    padding: 15px;\n  }\n  h3, .header {\n    color: var(--default-primary-color);\n    margin: 5px 0;\n    font-weight: bold;\n  }\n  .section {\n    margin-bottom: 20px;\n  }\n  .break {\n    border-bottom: 1px solid var(--medium-background-color);\n    margin: 5px;\n  }\n\n  select {\n    margin-right: 10px;\n    outline-offset: 1px;\n    border: none;\n    background-color: white;\n    border-radius: 0;\n    height: 38px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n    -webkit-border-radius: 0px;\n    -moz-border-radius: 0px;\n    -ms-border-radius: 0px;\n    -o-border-radius: 0px;\n    padding: 5px 30px 5px 10px;\n    background-position: right 10px center;\n    background-size: 10px 6px;\n    background-repeat: no-repeat;\n    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCA2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMjg1NTt9PC9zdHlsZT48L2RlZnM+PGc+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjAgMCAxMCAwIDUgNiAwIDAiLz48L2c+PC9zdmc+');\n    background-color: var(--medium-background-color);\n  }\n  /* for IE */\n  select::-ms-expand {\n      display: none;\n  }\n\n  .buttons {\n    display: flex;\n    margin-top: 10px;\n  }\n</style>\n\n<div class=\"section\" hidden$=\"[[!title]]\">\n  <h3>[[title]]</h3>\n</div>\n\n<div class=\"section\" hidden$=\"[[!description]]\">\n  <div class=\"header\">Description</div>\n  <div id=\"description\"></div>\n</div>\n\n<div class=\"section\" hidden$=\"[[!coverage]]\">\n  <div class=\"header\">Coverage</div>\n  <div>[[coverage]]</div>\n</div>\n\n<div class=\"break\"></div>\n\n<div class=\"header\">Cite this Collection</div>\n<div>\n  <app-copy-cite id=\"copyCite\" text=\"[[citation]]\">\n    <select id=\"citeFormatInput\" value$=\"[[citationFormat]]\" on-change=\"_onCiteFormatChange\">\n      <template is=\"dom-repeat\" items=\"[[engines]]\">\n        <option value=\"[[item.engine]]\">[[item.label]]</option>\n      </template>\n    </select>\n  </app-copy-cite>\n</div>\n";

/***/ }),

/***/ "./public/elements/pages/search/app-collection-info-panel.js":
/*!*******************************************************************!*\
  !*** ./public/elements/pages/search/app-collection-info-panel.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown */ "./public/node_modules/markdown/lib/index.js");
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _record_app_copy_cite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../record/app-copy-cite */ "./public/elements/pages/record/app-copy-cite.js");
/* harmony import */ var _app_collection_info_panel_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-collection-info-panel.html */ "./public/elements/pages/search/app-collection-info-panel.html");
/* harmony import */ var _app_collection_info_panel_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_collection_info_panel_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_models_CitationsModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/models/CitationsModel */ "./public/lib/models/CitationsModel/index.js");







class AppCollectionInfoPanel extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
      .with(EventInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_collection_info_panel_html__WEBPACK_IMPORTED_MODULE_3___default.a;
    return tag;
  }

  static get properties() {
    return {
      showing : {
        type: Boolean,
        value: false,
        observer : '_onShowingUpdate'
      },
      title : {
        type : String,
        value : ''
      },
      coverage : {
        type : String,
        value : ''
      },
      subject : {
        type : String,
        value : ''
      },
      citation : {
        type: String,
        value : ''
      },
      citationFormat : {
        type: String,
        value : 'mla'
      },
      engines : {
        type : Array,
        value : []
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    this.firstShow = true;

    this._injectModel('RecordModel', 'AppStateModel');
  }

  async ready() {
    super.ready();
    this._onSelectedCollectionUpdate(this.AppStateModel.getSelectedCollection());
  }

  /**
   * @method _onSelectedCollectionUpdate
   * @description from CollectionInterface, called when a collection is selected.
   * This is done by setting a collection filter.
   * 
   * @param {Object} selected currently selected collection 
   */
  async _onSelectedCollectionUpdate(selected) {
    if( !selected ) {
      this.title = '';
      this.$.description.innerHTML = '';
      this.subject = '';
      this.coverage = '';
      this.citation = '';
      return;
    }

    this.collection = selected;
    this.title = selected.name || '';
    this.$.description.innerHTML = markdown__WEBPACK_IMPORTED_MODULE_1__["markdown"].toHTML(selected.description || '');

    if( selected.subject ) {
      this.subject = selected.subject.join(', ');
    } else {
      this.subject = '';
    }

    if( selected.coverage ) {
      this.coverage = selected.coverage.join(', ');
    } else {
      this.selectedCollectionId = selected['@id'];
      let result = await this.RecordModel.defaultSearch(selected['@id']);
      if( result.id !== this.selectedCollectionId ) return; // make sure we haven't updated

      if( result.payload && result.payload.aggregations && result.payload.aggregations.ranges &&
        result.payload.aggregations.ranges.yearPublished ) {
        let yearPublished = result.payload.aggregations.ranges.yearPublished;
        this.coverage = yearPublished.min+' - '+yearPublished.max;
      } else {
        this.coverage = '';
      }
    }

    if( !this.firstShow ) {
      this._onCiteFormatChange();
    }
  }

  async _onShowingUpdate() {
    if( !this.showing ) return;
    if( !this.firstShow ) return;
    this.firstShow = false;

    this.engines = _lib_models_CitationsModel__WEBPACK_IMPORTED_MODULE_4__["default"].engineList.map((engine, index) => {
      return {engine, label: _lib_models_CitationsModel__WEBPACK_IMPORTED_MODULE_4__["default"].engineListLabels[index]}
    });
    await _lib_models_CitationsModel__WEBPACK_IMPORTED_MODULE_4__["default"]._loadEngines();
    await this._onCiteFormatChange();
  }

  async _onCiteFormatChange() {
    this.citation = await _lib_models_CitationsModel__WEBPACK_IMPORTED_MODULE_4__["default"].renderEsRecord(this.collection, this.$.citeFormatInput.value);
  }

}

customElements.define('app-collection-info-panel', AppCollectionInfoPanel);

/***/ }),

/***/ "./public/elements/pages/search/app-search.html":
/*!******************************************************!*\
  !*** ./public/elements/pages/search/app-search.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n  }\n  .search-container {\n    background-color: var(--super-light-background-color);\n    min-height: 60vh;\n    display: block;\n  }\n  .search-content {\n    flex: 1;\n    padding-bottom: 35px;\n  }\n\n  app-filters-panel {\n    width: 350px;\n    transition: width 300ms linear;\n  }\n  app-filters-panel[wide] {\n    width: 475px;\n  }\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: .7;\n    }\n  }\n\n  #desktop-filter-panel {\n    display: none;\n  }\n\n  @media( max-width: 1025px ) {\n    app-filters-panel[wide] {\n      width: 415px;\n    }\n  }\n\n  @media( min-width: 975px ) {\n    #desktop-filter-panel {\n      display: block;\n    }\n    .search-container {\n      display: flex;\n    }\n  }\n</style>\n\n<div class=\"search-container\">\n  <app-filters-panel id=\"desktop-filter-panel\" wide$=\"[[wideFiltersPanel]]\" on-selected-tab-changed=\"_onFiltersTabUpdate\"></app-filters-panel>\n  <div class=\"search-content\">\n    <app-search-results-panel \n      id=\"resultsPanel\" \n      on-toggle-drawer=\"_toggleDrawer\" \n      on-page-size-change=\"_onPageSizeChange\"\n      on-page-change=\"_onPaginationChange\">\n    </app-search-results-panel>\n  </div>\n</div>";

/***/ }),

/***/ "./public/elements/pages/search/app-search.js":
/*!****************************************************!*\
  !*** ./public/elements/pages/search/app-search.js ***!
  \****************************************************/
/*! exports provided: AppSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSearch", function() { return AppSearch; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./public/node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _app_search_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-search.html */ "./public/elements/pages/search/app-search.html");
/* harmony import */ var _app_search_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_search_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _results_app_search_results_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results/app-search-results-panel */ "./public/elements/pages/search/results/app-search-results-panel.js");
/* harmony import */ var _filtering_app_filters_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtering/app-filters-panel */ "./public/elements/pages/search/filtering/app-filters-panel.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interfaces/AppStateInterface */ "./public/elements/interfaces/AppStateInterface.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../interfaces/RecordInterface */ "./public/elements/interfaces/RecordInterface.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../interfaces/CollectionInterface */ "./public/elements/interfaces/CollectionInterface.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_7__);











class AppSearch extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
            .with(EventInterface, _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_6___default.a, _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_7___default.a, _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_5___default.a) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_search_html__WEBPACK_IMPORTED_MODULE_2___default.a;
    return tag;
  }

  static get properties() {
    return {
      visible : {
        type : Boolean,
        value : false
        // observer : '_onVisibleUpdate'
      },
      results : {
        type : Array,
        value : () => []
      },
      drawerOpen : {
        type : Boolean,
        value : false
      },
      firstLoad : {
        type : Boolean,
        value : true
      },
      appState : {
        type : Object,
        value : () => ({})
      },
      wideFiltersPanel : {
        type : Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    // this._initState();
  }

  // async _initState() {
  //   let startState = await this._getAppState();
  //   if( startState.location.path[0] === 'search' ) {
  //     this.appState = startState;
  //     this._searchFromAppState();
  //   }
  // }

  /**
   * @description AppStateInterface, fired when state updates
   * @param {*} e 
   */
  _onAppStateUpdate(e) {
    this.drawerOpen = e.filtersDrawerOpen ? true : false;
    this.appState = e;
    if( 
      e.location.path[0] !== 'search' &&
      e.location.path[0] !== 'collection'
    ) return;
    this._searchFromAppState();
  }

  /**
   * @method _searchFromAppState
   * @description use current app state to preform a search, should be called on first load
   * or if state update event is from popup state (forward, back button hit)
   */
  _searchFromAppState() {
    if( !this.drawerOpen || window.innerWidth > 975 ) {
      window.scrollTo(0, 0);
    }

    this.firstLoad = false;

    let searchUrlParts = this.appState.location.path;
    let query;

    if( searchUrlParts[0] === 'collection' ) {
      query = this._urlToSearchDocument(['', encodeURIComponent(JSON.stringify([
        // ["isPartOf.@id","or",`/collection/${searchUrlParts[1]}`]
        ["collectionId","or",`/collection/${searchUrlParts[1]}`]
      ])),'', '10']);

      if( this.lastQuery === query ) return;
      this.lastQuery = query;

      this._searchRecords(query, false);
      return;
    } else if( searchUrlParts[0] === 'search' && searchUrlParts.length > 1 ) {
      query = this._urlToSearchDocument(searchUrlParts.slice(1, searchUrlParts.length));
    } else {
      query = this.RecordModel.emptySearchDocument();
    }
    
    if( this.lastQuery === query ) return;
    this.lastQuery = query;

    this._searchRecords(query);
  }

  /**
   * @method _onEsSearchUpdate
   * @description RecordInterface, fired when search updates
   * 
   * @param {Object} e 
   */
  _onRecordSearchUpdate(e) {
    if( e.state === 'error' ) {
      return this.$.resultsPanel.onError(e);
    } else if( e.state === 'loading' ) {
      return this.$.resultsPanel.onLoading();
    }

    if( e.state !== 'loaded' ) return;

    let currentIndex = e.searchDocument.offset;
    let payload = e.payload;
    let total = payload.total;
    this.results = payload.results;

    this.$.resultsPanel.render(this.results, total, e.searchDocument.limit, currentIndex);
  }

  /**
   * @method _onPageSizeChange
   * @description fired when then user selects a new page size
   * 
   * @param {Object} e 
   */
  _onPageSizeChange(e) {
    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, searchDoc.offset, e.detail);
    this.RecordModel.setSearchLocation(searchDoc);
  }

  /**
   * @method _onPaginationChange
   * @description fired when pagination button is clicked
   * 
   * @param {Object} e 
   */
  _onPaginationChange(e) {
    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, e.detail.startIndex);
    this.RecordModel.setSearchLocation(searchDoc);
  }

  /**
   * @method _toggleDrawer
   * @description toggles the drawer state.  Listens to 
   * toggle-drawer event from app-search-results-panel
   */
  _toggleDrawer() {
    this.AppStateModel.set({filtersDrawerOpen: !this.drawerOpen});
  }

  _onFiltersTabUpdate(e) {
    this.wideFiltersPanel = e.detail.value === 'info' ? true : false;
    setTimeout(() => {
      requestAnimationFrame(() => {
        this.$.resultsPanel._resizeAsync();
      });
    }, 300);
    
  }

}

customElements.define('app-search', AppSearch);

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-facet-checkbox.js":
/*!**********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-facet-checkbox.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_normal_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-normal-checkbox */ "./public/elements/pages/search/filtering/app-normal-checkbox.js");




class AppFacetCheckbox extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  
  static get properties() {
    return {
      type : {
        type : String,
        value : ''
      },
      value : {
        type : String,
        value : '',
        observer : '_onValueChange'
      },
      labelMap : {
        type : Object,
        value : () => {}
      },
      checked : {
        type : Boolean,
        value : false,
        notify : true,
        observer : '_onCheckedChange'
      }
    };
  }

  // static get template() {
  //   return ` `;
  // }

  ready() {
    super.ready();

    this.ele = document.createElement('app-normal-checkbox');
    this.ele.label = this._getLabel();
    
    this._setValue();
    if( this.checked ) {
      this.ele.setAttribute('checked', this.checked);
    }

    this.ele.addEventListener('checked-changed', (e) => {
      this.checked = e.detail.value;
    });

    this.appendChild(this.ele);
  }

  _setValue() {
    if( this.value ) {
      this.ele.value = this.value;
      this.ele.label = this._getLabel();
    }
  }

  _getLabel() {
    if( this.labelMap && this.labelMap[this.value] ) {
      return this.labelMap[this.value];
    }
    return this.value;
  }

  _onCheckedChange() {
    if( !this.ele || this.ele.checked === this.checked ) return;
    this.ele.checked = this.checked;
  }

  _onValueChange() {
    if( !this.ele ) return;
    this.ele.setAttribute('value', this.value);
  }

}

window.customElements.define('app-facet-checkbox', AppFacetCheckbox);

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-facet-filter.html":
/*!**********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-facet-filter.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block\n  }\n\n  .filter {\n    padding: 4px 5px;\n    display: flex;\n    align-items: center;\n  }\n  .filter a {\n    display: inline-block;\n    cursor: pointer;\n    color: black;\n    transition: color 250ms ease-out, transform 250ms ease-out;\n    transform: scale(1);\n  }\n  .filter a span {\n    color: var(--default-primary-color);\n  }\n  .filter a:hover {\n    transform: scale(1.5);\n    color: var(--default-primary-color);\n  }\n\n  .typehead-panel {\n    margin: 0 28px 10px 5px;\n  }\n  #typeahead {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0 5px;\n    background: var( --super-light-background-color);\n    border: none;\n    height: 40px;\n    outline: none;\n  }\n\n  .active-filter {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    color: white;\n    font-size: 14px;\n    background: var(--primary-text-color);\n    padding: 5px;\n    border-radius: 3px;\n    margin: 3px;\n  }\n\n  .active-filter:hover {\n    color: var(--default-primary-color);\n    background: #ccc;\n  }\n\n  .count {\n    color: var(--text-disabled);\n    flex: 1;\n    text-align: right;\n    min-width : 40px;\n    padding: 0 10px;\n  }\n\n  .overflow {\n    overflow: auto;\n    max-height: 200px;\n  }\n\n  iron-list {\n    height: 200px;\n    display: none;\n  }\n\n  app-normal-checkbox {\n    overflow: hidden;\n    padding-right: 5px;\n  }\n\n  paper-checkbox[active] .key {\n    color: var(--default-primary-color);\n    font-weight: bold;\n  }\n\n  paper-checkbox[disabled] .key {\n    color: var(--secondary-text-color);\n    font-style: italic;\n  }\n</style>\n\n<!-- typeahead search -->\n<div class=\"typehead-panel\" hidden$=\"[[!includeTypeahead]]\">\n  <input id=\"typeahead\" \n    type=\"text\" \n    placeholder=\"Search [[label]]s\" \n    on-keyup=\"_onTypeaheadKeyup\" />\n</div>\n\n<!-- used for large lists -->\n<iron-list id=\"list\" items=\"[[bucketsIronList]]\" as=\"item\">\n  <template>\n    <div class=\"filter\">\n\n      <app-normal-checkbox\n        type$=\"[[label]]\"\n        index$=\"[[index]]\"\n        value$=\"[[item.key]]\"\n        label-map=\"[[valueMap]]\"\n        checked$=\"[[item.active]]\" \n        on-change=\"_toggleFilter\"\n        disabled$=\"[[item.disabled]]\">\n      </app-normal-checkbox>\n\n      <div class=\"count\">[[item.doc_count]]</div>\n    </div>\n  </template>\n</iron-list>\n\n<!-- used for small lists -->\n<div class=\"overflow\">\n  <div>  \n    <template is=\"dom-repeat\" items=\"[[buckets]]\">\n      <div class=\"filter\">\n\n        <app-normal-checkbox\n          type$=\"[[label]]\"\n          index$=\"[[index]]\"\n          value$=\"[[item.key]]\"\n          label-map=\"[[valueMap]]\"\n          checked$=\"[[item.active]]\" \n          on-change=\"_toggleFilter\"\n          disabled$=\"[[item.disabled]]\">\n        </app-normal-checkbox>\n\n        <div class=\"count\">[[item.doc_count]]</div>\n      </div>\n    </template>\n  </div>\n</div>\n";

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-facet-filter.js":
/*!********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-facet-filter.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _interfaces_FiltersInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../interfaces/FiltersInterface */ "./public/elements/interfaces/FiltersInterface.js");
/* harmony import */ var _interfaces_FiltersInterface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_interfaces_FiltersInterface__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/RecordInterface */ "./public/elements/interfaces/RecordInterface.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_facet_filter_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-facet-filter.html */ "./public/elements/pages/search/filtering/app-facet-filter.html");
/* harmony import */ var _app_facet_filter_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_facet_filter_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clone */ "./public/node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_facet_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-facet-checkbox */ "./public/elements/pages/search/filtering/app-facet-checkbox.js");
/* harmony import */ var _polymer_iron_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/iron-list */ "./public/node_modules/@polymer/iron-list/iron-list.js");











class AppFacetFilter extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
  .with(EventInterface, _interfaces_FiltersInterface__WEBPACK_IMPORTED_MODULE_1___default.a, _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2___default.a) {

  static get properties() {
    return {
      label : {
        type : String,
        value : ''
      },
      filter : {
        type : String,
        value : ''
      },
      ignore : {
        type : Array,
        value : () => []
      },
      valueMap : {
        type : Object,
        value : null,
      },
      buckets : {
        type : Array,
        value : () => []
      },
      bucketsIronList : {
        type : Array,
        value : () => []
      },
      ironListActive : {
        type : Boolean,
        value : false
      },
      notified : {
        type : Object,
        value : () => ({})
      },
      includeTypeahead : {
        type : Boolean,
        value : false
      },
      typeaheadField : {
        type : String,
        value : ''
      }
    };
  }

  constructor() {
    super();
    this.active = true;
    this.updateTimer = -1;
  }

  resize() {
    requestAnimationFrame(() => {
      this.$.list.fire('iron-resize');
    });
  }

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_facet_filter_html__WEBPACK_IMPORTED_MODULE_3___default.a;
    return tag;
  }

  _onFilterBucketsUpdate(e) {
    if( e.filter !== this.filter ) return;

    e.buckets.forEach(item => {
      if( this.notified[item.key] && !item.active ) {
        this._notifySelected(item.active, item.key);
      } else if( !this.notified[item.key] && item.active ) {
        this._notifySelected(item.active, item.key);
      }
    });

    if( Object.keys(e.buckets).length > 50 ) {
      this.$.list.style.display = 'block';
      let top = this.$.list.scrollTop;

      this.bucketsIronList = e.buckets;
      this.buckets = [];
      this.ironListActive = true;

      // make sure we don't change scroll position
      this.$.list.scrollTop = top;
      requestAnimationFrame(() => {
        this.$.list.scrollTop = top;
      });
    } else {
      this.$.list.style.display = 'none';
      this.bucketsIronList = [];
      this.buckets = e.buckets;
      this.ironListActive = false;
    }

    this.dispatchEvent(
      new CustomEvent('update-visibility', {
        detail: {
          show: (e.buckets.length !== 0)
        }
      })
    );
  }

  getBuckets() {
    return this.ironListActive ? this.bucketsIronList : this.buckets;
  }

  /**
   * @method onParentFilterClicked
   * @description called from parent toggle panel when selected filter
   * is clicked
   * 
   * @param {String} key filter key 
   */
  onParentFilterClicked(key) {
    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, 0);
    this._removeKeywordFilter(searchDoc, this.filter, key);
    this.RecordModel.setSearchLocation(searchDoc);

    this._notifySelected(false, key);
  };

  /**
   * @method _notifySelected
   * @description notify parent of selected/unselected filter
   * 
   * @param {Boolean} selected is the filter selected
   * @param {String} key filter key/label
   */
  _notifySelected(selected, key) {
    if( !selected && this.notified[key] ) {
      delete this.notified[key];
    } else if( selected ) {
      this.notified[key] = true;
    }

    this.dispatchEvent(
      new CustomEvent(`${selected ? 'add' : 'remove'}-selected`, {
        detail: {
          label: key
        }
      })
    );
  }

  _toggleFilter(e) {
    if( e.currentTarget.checked ) this.appendFilter(e);
    else this.removeFilter(e);
  }

  appendFilter(e) {
    let buckets = this.getBuckets();
    let item = buckets[parseInt(e.currentTarget.getAttribute('index'))];
    if( item.empty ) return;

    // reset typeahead incase it was active
    this.$.typeahead.value = '';
    if( this.originalBuckets ) {
      this.originalBuckets = null;
    }

    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, 0);
    this._appendKeywordFilter(searchDoc, this.filter, item.key);
    this.RecordModel.setSearchLocation(searchDoc);

    this._notifySelected(true, item.key);
  }

  removeFilter(e) {
    let buckets = this.getBuckets();
    let item = buckets[parseInt(e.currentTarget.getAttribute('index'))];

    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, 0);
    this._removeKeywordFilter(searchDoc, this.filter, item.key);
    this.RecordModel.setSearchLocation(searchDoc);

    this._notifySelected(false, item.key);
  }

  /**
   * @method _onTypeaheadKeyup
   * @description bound to typeahead text input keyup event
   * 
   * @param {Object} e 
   */
  _onTypeaheadKeyup() {
    this._updateTypeahead();
  }

  _updateTypeahead() {
    let text = this.$.typeahead.value;
    if( !text ) {
      if( this.originalBuckets ) {

        if( this.ironListActive ) {
          this.bucketsIronList = this.originalBuckets;
        } else {
          this.buckets = this.originalBuckets;
        }

        this.originalBuckets = null;
      }
      return;
    }

    if( !this.originalBuckets ) {
      this.originalBuckets = [...(this.ironListActive ? this.bucketsIronList : this.buckets)];
    }

    let re = new RegExp('.*'+text.toLowerCase()+'.*', 'i');
    let buckets = this.originalBuckets.filter(item => item.sortKey.match(re) ? true : false);

    if( this.ironListActive ) {
      this.bucketsIronList = buckets;
    } else {
      this.buckets = buckets;
    }
  }

}

window.customElements.define('app-facet-filter', AppFacetFilter);

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-filter-panel.html":
/*!**********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-filter-panel.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n  }\n\n  .label {\n    cursor: pointer;\n    display: flex;\n    color: var(--default-primary-color);\n    padding: 10px 0;\n    font-weight: bold;\n    position: relative;\n    outline: none !important;\n  }\n\n  .highlight {\n    position: absolute;\n    left: -10px;\n    top: 0;\n    bottom: 0;\n    width: 4px;\n    background-color:  var(--default-secondary-color);\n    display: none;\n  }\n\n  .label:focus > .highlight {\n    display: block;\n  }\n\n  #activeFilters > div {\n    padding: 4px 5px;\n  }\n\n  .filter {\n    display: flex;\n    cursor: pointer;\n    align-items: center;\n    font-weight: bold;\n    font-style: italic;\n  }\n\n  iron-icon[closed] {\n    transform: rotate(-90deg);\n  }\n\n  iron-icon[clear] {\n    color: var(--default-secondary-color);\n    margin-right: 2px;\n  }\n\n  /* JM - think this is redundant, scroll inforced by app-*-filter element */\n  /* #filters {\n    overflow-y: auto;\n    max-height: 200px;\n  } */\n</style>\n\n<div class=\"label\" on-click=\"_onToggleClicked\" on-keyup=\"_onToggleClicked\" role=\"button\" tabindex=\"0\">\n  <div style=\"flex:1\">[[filter.label]]</div>\n  <iron-icon icon=\"arrow-drop-down\" closed$=\"[[!opened]]\"></iron-icon>\n  <div class=\"highlight\"></div>\n</div>\n\n<div id=\"activeFilters\" hidden$=\"[[opened]]\">\n  <div hidden$=\"[[!selected.length]]\">\n    <template is=\"dom-repeat\" items=\"[[selected]]\">\n      <div class=\"filter\" \n        on-click=\"_onFilterClicked\"\n        on-keyup=\"_onFilterClicked\" \n        label$=\"[[item.label]]\"\n        tabindex=\"0\" \n        role=\"button\">\n        <iron-icon icon=\"fin-icons:close\" clear></iron-icon>\n        <div>[[item.niceLabel]]</div>\n      </div>\n    </template>\n  </div>\n</div>\n\n<div id=\"filters\" hidden$=\"[[!opened]]\"></div>";

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-filter-panel.js":
/*!********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-filter-panel.js ***!
  \********************************************************************/
/*! exports provided: AppFilterPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFilterPanel", function() { return AppFilterPanel; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./public/node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _ucd_lib_cork_toggle_panel_cork_toggle_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/cork-toggle-panel/cork-toggle-panel */ "./public/node_modules/@ucd-lib/cork-toggle-panel/cork-toggle-panel.js");
/* harmony import */ var _app_range_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-range-filter */ "./public/elements/pages/search/filtering/app-range-filter.js");
/* harmony import */ var _app_filter_panel_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-filter-panel.html */ "./public/elements/pages/search/filtering/app-filter-panel.html");
/* harmony import */ var _app_filter_panel_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_filter_panel_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_facet_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-facet-filter */ "./public/elements/pages/search/filtering/app-facet-filter.js");
  







class AppFilterPanel extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {

  static get properties() {
    return {
      filter : {
        type : Object,
        value : null,
        observer : '_render'
      },
      opened : {
        type : Boolean,
        value : false,
        observer : '_toggleOpened'
      },
      selected : {
        type : Array,
        value : () => []
      }
    };
  }

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_filter_panel_html__WEBPACK_IMPORTED_MODULE_4___default.a;
    return tag;
  }

  _render() {
    if( !this.filter ) return;

    this.innerHTML = '';
    var ele = document.createElement('app-'+this.filter.type+'-filter');
    ele.label = this.filter.label;
    ele.filter = this.filter.filter;
    ele.ignore = this.filter.ignore;
    ele.valueMap = this.filter.valueMap || {};
    ele.isDollar = this.filter.isDollar;
    ele.includeTypeahead = this.filter.includeTypeahead || false;
    ele.typeaheadField = this.filter.typeaheadField;

    ele.addEventListener('update-visibility', (e) => {
      this.style.display = e.detail.show ? 'block' : 'none';
    });
    ele.addEventListener('add-selected', (e) => {
      let index = this.selected.findIndex(item => item.label === e.detail.label);
      if( index > -1 ) return;
      e.detail.niceLabel = this._getLabel(e.detail.label);
      this.push('selected', e.detail);
    });
    ele.addEventListener('remove-selected', (e) => {
      let index = this.selected.findIndex(item => item.label === e.detail.label);
      if( index === -1 ) return;
      this.splice('selected', index, 1);
    });
    ele.addEventListener('set-selected', (e) => {
      if( e.detail.selected ) {
        e.detail.niceLabel = this._getLabel(e.detail.label);
        this.selected = [e.detail];
      } else {
        this.selected = [];
      }
    });

    this.ele = ele;
    
    this.$.filters.appendChild(ele);
  }

  _getLabel(label) {
    if( !this.filter.valueMap ) return label;
    if( typeof this.filter.valueMap === 'object' ) {
      return this.filter.valueMap[label] || label;
    }
    return this.filter.valueMap(label);
  }

  /**
   * @method toggle
   * @description toggle opened state
   */
  toggle() {
    this.opened = !this.opened;
  }

  /**
   * @method _toggleOpened
   * @description bound to opened observer.  if opened is true,
   * tell the child to resize
   */
  _toggleOpened() {
    if( !this.opened ) return;
    if( this.ele && this.ele.resize ) {
      this.ele.resize();
    }
  }

  /**
   * @method _onToggleClicked
   * @description bound to main label click/keyboard events. Toggle
   * the panel.
   * 
   * @param {Object} e Click/Keyword event
   */
  _onToggleClicked(e) {
    if( e.type === 'keyup' ) { // from keyboard event
      if( e.which !== 13 && e.which !== 32 ) return;
    }

    this.toggle();
  }

  /**
   * @method _onFilterClicked
   * @description called when selected filter is clicked,
   * notify child of click
   */
  _onFilterClicked(e) {
    if( e.type === 'keyup' ) { // from keyboard event
      if( e.which !== 13 ) return;
    }

    this._notifyFilterClicked(e.currentTarget.getAttribute('label'));
  }

  /**
   * @method _onFilterClicked
   * @description notify child of filter click
   */
  _notifyFilterClicked(label) {
    if( !this.ele ) return;
    if( !this.ele.onParentFilterClicked ) return;
    this.ele.onParentFilterClicked(label);
  }

}

window.customElements.define('app-filter-panel', AppFilterPanel);

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-filters-panel.html":
/*!***********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-filters-panel.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    background-color: var(--light-background-color);\n    position: relative;\n  }\n\n  #filters {\n    margin-left: 10px;\n  }\n\n  .title {\n    color: var(--default-primary-color);\n    font-weight: bold;\n    padding: 15px 0;\n    margin-left: 10px;\n    border-bottom: 1px solid var(--medium-background-color);\n    display: none;\n  }\n\n  app-filter-panel {\n    border-bottom: 1px solid var(--medium-background-color);\n  }\n\n  .thumbnail {\n    background-size: cover;\n    background-position: center center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n  .thumbnail-root {\n    position: relative;\n    height: 200px;\n  }\n\n  .label {\n    padding: 10px 0;\n    color: var(--default-primary-color);\n    font-weight: var(--fw-bold);\n  }\n\n  .collection-filter {\n    padding: 4px 5px;\n    border-bottom: 1px solid var(--medium-background-color);\n  }\n\n  .outer-drawer-toggle {\n    position: relative;\n  }\n  .outer-drawer-toggle[spacer] {\n    height: 50px;\n    border-bottom: 1px solid var(--medium-background-color);\n    margin-left: 10px;\n  }\n\n  .drawer-toggle {\n    font-size: var(--fs-sm);\n    position: absolute;\n    z-index: 15;\n    top : 15px;\n    right: -24px;\n    cursor: pointer;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n    font-weight: var(--fw-bold);\n    color: var(--default-primary-color);\n    background-color: var(--light-background-color);\n    border-radius: 0;\n    border: 0;\n    padding: 0;\n  }\n  .drawer-toggle > span {\n    padding : 0 10px;\n  }\n  .drawer-toggle iron-icon {\n    background-color: var(--default-secondary-color);\n  }\n\n  @media(min-width: 975px) {\n    h2 {\n      display: block;\n    }\n    .outer-drawer-toggle {\n      display: none;\n    }\n    .title {\n      display: block;\n    }\n  }\n</style>\n\n<div class=\"title\" hidden$=\"[[collectionMode]]\" >FILTERS</div>\n\n<div class=\"outer-drawer-toggle\" spacer$=\"[[!collectionMode]]\" on-click=\"_fireToggleDrawer\">\n  <button class=\"drawer-toggle\">\n    <span><span hidden$=\"[[!collectionMode]]\">Info / </span>Filters</span>\n    <iron-icon icon=\"fin-icons:close\"></iron-icon>\n  </button>\n</div>\n<div class=\"thumbnail-root\"  hidden$=\"[[!collectionMode]]\">\n  <div class=\"thumbnail\" style$=\"background-image: url('[[selectedCollection.thumbnailUrl]]')\"></div>\n  <!-- <div class=\"thumbnail\" style$=\"background-image: url('[[selectedCollection.thumbnail]]')\"></div>  -->\n</div>\n\n<app-tabs \n  tabs=\"[[tabs]]\" \n  selected=\"{{selectedTab}}\" \n  hidden$=\"[[!collectionMode]]\">\n</app-tabs>\n\n<iron-pages \n  selected=\"[[selectedTab]]\"   \n  attr-for-selected=\"id\" \n  selected-attribute=\"showing\">\n  <div id=\"filters\">\n\n    <!-- <div hidden$=\"[[!collectionMode]]\" class=\"label\">Collection</div>\n    <div hidden$=\"[[!collectionMode]]\" class=\"collection-filter\">\n      <app-facet-checkbox \n        type=\"collection\" \n        value=\"[[selectedCollection.name]]\" \n        checked=\"[[collectionMode]]\"\n        on-click=\"_removeCollectionFilter\">\n      </app-facet-checkbox>\n    </div> -->\n\n    <template is=\"dom-repeat\" items=\"[[facetFilters]]\">\n      <app-filter-panel filter=\"[[item]]\"></app-filter-panel>\n    </template>\n  </div>\n  <app-collection-info-panel id=\"info\"></app-collection-info-panel>\n</iron-pages>\n\n";

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-filters-panel.js":
/*!*********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-filters-panel.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_iron_pages_iron_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-pages/iron-pages */ "./public/node_modules/@polymer/iron-pages/iron-pages.js");
/* harmony import */ var _app_filter_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-filter-panel */ "./public/elements/pages/search/filtering/app-filter-panel.js");
/* harmony import */ var _app_collection_info_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-collection-info-panel */ "./public/elements/pages/search/app-collection-info-panel.js");
/* harmony import */ var _utils_app_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/app-tabs */ "./public/elements/utils/app-tabs.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../interfaces/RecordInterface */ "./public/elements/interfaces/RecordInterface.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../interfaces/CollectionInterface */ "./public/elements/interfaces/CollectionInterface.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_filters_panel_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-filters-panel.html */ "./public/elements/pages/search/filtering/app-filters-panel.html");
/* harmony import */ var _app_filters_panel_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_app_filters_panel_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../lib/config */ "./public/lib/config.js");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_config__WEBPACK_IMPORTED_MODULE_8__);











// init facet filters from template

const facetFilters = [];
for( var key in _lib_config__WEBPACK_IMPORTED_MODULE_8___default.a.elasticSearch.facets ) {
  let c = _lib_config__WEBPACK_IMPORTED_MODULE_8___default.a.elasticSearch.facets[key];
  facetFilters.push({
    label : c.label,
    type : c.type,
    ignore : c.ignore,
    valueMap : c.valueMap,
    isDollar : c.isDollar,
    includeTypeahead : c.typeahead ? true : false,
    typeaheadField : c.typeahead,
    filter : key
  });
}


class AppFiltersPanel extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
      .with(EventInterface, _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_5___default.a) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_filters_panel_html__WEBPACK_IMPORTED_MODULE_7___default.a;
    return tag;
  }

  static get properties() {
    return {
      facetFilters : {
        type : Array,
        value : function() {
          return facetFilters;
        }
      },
      selectedTab : {
        type : String,
        value : '',
        notify: true
      },

      selectedCollection : {
        type : Object,
        value : () => {}
      },

      collectionMode : {
        type : Boolean,
        value : false
      },

      tabs : {
        type : Array,
        value : () => [
          {label : 'Information', value: 'info'},
          {label : 'Filters', value: 'filters'}
        ]
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    this._injectModel('AppStateModel');
  }

  ready() {
    super.ready();
    this._onSelectedCollectionUpdate();
  }

  /**
   * @method _onSelectedCollectionUpdate
   * @description CollectionInterface, render the iron-pages and current collection
   */
  _onSelectedCollectionUpdate(selected) {
    if( !selected ) {
      this.selectedTab = 'filters';
      this.collectionMode = false;
      return;
    } 
    
    this.collectionMode = true;
    this.selectedCollection = selected;
    
    if( !this.selectedTab ) this.selectedTab = 'info';
  }

  /**
   * @method _fireToggleDrawer
   * @description called from toggle button, dispatches event for app-search to handle hiding drawer;
   */
  _fireToggleDrawer() {
    this.dispatchEvent(new CustomEvent('toggle-drawer'));
  }

  /**
   * @method _removeCollectionFilter
   * @description fired from hard coded collection filter checkbox.  Remove
   * collection filter when clicked
   */
  _removeCollectionFilter() {
    let searchDoc = this._getCurrentSearchDocument();
    this._removeKeywordFilter(searchDoc, 'isPartOf.@id');
    this._setPaging(searchDoc, 0);
    this.RecordModel.setSearchLocation(searchDoc);
  }
}

customElements.define('app-filters-panel', AppFiltersPanel);

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-normal-checkbox.html":
/*!*************************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-normal-checkbox.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    cursor: pointer;\n  }\n\n  :host(:focus) {\n    outline: var(--default-outline);\n  }\n\n  :host([disabled]) {\n    cursor: default;\n    outline: none !important;\n  }\n\n  iron-icon {\n    display: none;\n    color: var(--default-secondary-color);\n    min-width: 24px;\n    margin-right: 2px;\n  }\n\n  div {\n    user-select: none;\n    display: flex;\n    min-height: 24px;\n    align-items: top;\n  }\n\n  span {\n    display: inline-block;\n    padding-top: 3px;\n    line-height: normal;\n  }\n\n  div[checked] iron-icon {\n    display: inline-block;\n  }\n\n  div[checked] .value {\n    font-style: italic;\n    font-weight: bold;\n  }\n\n  div[disabled] iron-icon {\n    display: none;\n  }\n\n  div[disabled] .value {\n    font-style: italic;\n    color: var(--gray-text);\n  }\n</style>\n\n<div checked$=\"[[checked]]\" disabled$=\"[[disabled]]\">\n  <iron-icon icon=\"fin-icons:close\"></iron-icon>\n  <span class=\"value\">[[realLabel]]</span>\n</div>";

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-normal-checkbox.js":
/*!***********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-normal-checkbox.js ***!
  \***********************************************************************/
/*! exports provided: AppNormalCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNormalCheckbox", function() { return AppNormalCheckbox; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./public/node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _app_normal_checkbox_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-normal-checkbox.html */ "./public/elements/pages/search/filtering/app-normal-checkbox.html");
/* harmony import */ var _app_normal_checkbox_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_normal_checkbox_html__WEBPACK_IMPORTED_MODULE_2__);





class AppNormalCheckbox extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  
  static get properties() {
    return {
      value : {
        type : String,
        value : ''
      },
      label : {
        type : String,
        value : ''
      },
      labelMap : {
        type : Object,
        value : null,
        observer : '_onLabelMapUpdate'
      },
      labelMapType : {
        type : String,
        value : null
      },
      realLabel: {
        type: String,
        computed: '_realLabel(value, label)'
      },
      checked : {
        type : Boolean,
        value : false,
        notify: true,
        reflectToAttribute : true
      },
      disabled : {
        type : Boolean,
        value : false,
      },

      ariaChecked : {
        type : String,
        reflectToAttribute : true,
        computed: '_computeAriaChecked(checked)'
      },
      ariaDisabled : {
        type : String,
        reflectToAttribute : true,
        computed: '_computeAriaDisabled(disabled)'
      },
      role : {
        type : String,
        value : 'checkbox',
        reflectToAttribute : true
      },
      tabindex : {
        type : Number,
        computed: '_computeTabIndex(disabled)',
        reflectToAttribute : true
      }
    };
  }

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_normal_checkbox_html__WEBPACK_IMPORTED_MODULE_2___default.a;
    return tag;
  }

  constructor() {
    super();
    this.addEventListener('click', e => this._onClick(e));
    this.addEventListener('keyup', e => {
      if( e.which !== 13 ) return;
      this._onClick(e)
    });
  }

  /**
   * @method _realLabel
   * @description render label
   * 
   * @param {String} value 
   * @param {String} label 
   */
  _realLabel(value, label) {
    return this._getLabel();
  }

  /**
   * @method _computeAriaChecked
   * @description Bound to 'checked' property.  set aria-checked value
   */
  _computeAriaChecked() {
    return this.checked ? 'true' : 'false';
  }

  /**
   * @method _computeAriaDisabled
   * @description Bound to 'disabled' property.  set aria-disabled value
   */
  _computeAriaDisabled() {
    return this.disabled ? 'true' : 'false';
  }

  /**
   * @method _computeTabIndex
   * @description Bound to 'disabled' property.  set tabindex value
   */
  _computeTabIndex() {
    return this.disabled ? -1 : 0;
  }

  /**
   * @method _getLabel
   * @description return label for a value
   */
  _getLabel() {
    if( this.labelMapType === null ) this._onLabelMapUpdate();
    if( !this.labelMapType ) return this.value;
    
    if( this.labelMapType === 'object' && this.labelMap[this.value] ) {
      return this.labelMap[this.value];
    } else if( this.labelMapType === 'function' ) {
      return this.labelMap(this.value);
    }

    return this.value;
  }

  /**
   * @method _onLabelMapUpdate
   * @description bound to 'labelMap' property observer.  set the 
   * labelMapType property
   */
  _onLabelMapUpdate() {
    this.labelMapType = '';
    if( !this.labelMap ) return;
    this.labelMapType = typeof this.labelMap;
  }

  /**
   * @method _onClick
   * @description called when div wrapper is clicked
   * 
   * TODO: add aria checkbox role
   */
  _onClick() {
    if( this.disabled ) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('change', {bubbles: true, composed: true}));
  }

}

window.customElements.define('app-normal-checkbox', AppNormalCheckbox);

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-range-filter.html":
/*!**********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-range-filter.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  :host {\n    display: block;\n  }\n  \n  .labels {\n    display: flex;\n    margin: 0 23px 0 13px;\n    color: var(--gray-text);\n    font-size: var(--fs-sm);\n  }\n\n  .inputs {\n    display: flex;\n    align-items: center;\n  }\n\n  input[type=\"number\"] {\n    margin: 0 13px;\n    padding: 7px;\n    border: 0;\n    width: 50px;\n    font-size: var(--fs-sm);\n  }\n\n  .unknown {\n    margin-left: 9px;\n    display: flex;\n    align-items: center;\n  }\n\n  label {\n    font-size: var(--fs-sm);\n    font-style: italic;\n    padding-left: 5px;\n  }\n\n  app-range-slider {\n    --light-background-color: var(--medium-background-color);\n  }\n</style>\n\n<div class=\"inputs\">\n  <input id=\"minValueInput\" type=\"number\" on-change=\"_onInputChange\" >\n  <span> - </span>\n  <input id=\"maxValueInput\" type=\"number\" on-change=\"_onInputChange\" >\n</div>\n\n<div style=\"margin-right: 10px\">\n  <app-range-slider\n    id=\"slider\"\n    on-range-value-change=\"_onRangeSliderChange\"\n    abs-min-value=\"[[absMinValue]]\"\n    abs-max-value=\"[[absMaxValue]]\"\n    min-value=\"[[minValue]]\"\n    max-value=\"[[maxValue]]\">\n  </app-range-slider>\n</div>\n\n<div class=\"labels\">\n  <div style=\"flex:1\">[[absMinValue]]</div>\n  <div>[[absMaxValue]]</div>\n</div>\n\n<div class=\"unknown\" hidden$=\"[[showUnknown]]\">\n  <input type=\"checkbox\" id=\"unknown\" on-click=\"_onRangeNullChange\" checked />\n  <label for=\"unknown\">include unknown / unspecified</label>\n</div>";

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-range-filter.js":
/*!********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-range-filter.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppRangeFilter; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _utils_app_range_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/app-range-slider */ "./public/elements/utils/app-range-slider.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/RecordInterface */ "./public/elements/interfaces/RecordInterface.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces/CollectionInterface */ "./public/elements/interfaces/CollectionInterface.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_range_filter_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-range-filter.html */ "./public/elements/pages/search/filtering/app-range-filter.html");
/* harmony import */ var _app_range_filter_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_range_filter_html__WEBPACK_IMPORTED_MODULE_4__);






class AppRangeFilter extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
  .with(EventInterface, _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2___default.a, _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3___default.a) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_range_filter_html__WEBPACK_IMPORTED_MODULE_4___default.a;
    return tag;
  }

  static get properties() {
    return {
      label : {
        type : String,
        value : ''
      },
      filter : {
        type : String,
        value : ''
      },

      absMinValue : {
        type : Number,
        value : -1
      },
      absMaxValue : {
        type : Number,
        value : -1 
      },

      minValue : {
        type : Number,
        value : -1
      },
      maxValue : {
        type : Number,
        value : Number.MAX_VALUE
      },

      showUnknown : {
        type : Boolean,
        value : false
      }

    }
  }

  constructor() {
    super();
    this.active = true;
    this._injectModel('AppStateModel');
  }

  connectedCallback() {
    super.connectedCallback();
    this.resize();
  }

  resize() {
    this.$.slider._onResize();

    setTimeout(() => {
      this.$.slider._onResize();
    }, 100);
  }

  /**
   * @method _isDefaultState
   * @description is range filter in the default state?  ie abs min/max
   * is the same as min/max and unknown values are included?  If so
   * we don't actually need a filter on.
   */
  _isDefaultState() {
    if( !this._isFilterApplied() ) {
      
      let searchDoc = this._getCurrentSearchDocument();
      this._removeRangeFilter(searchDoc, this.filter);
      this.RecordModel.setSearchLocation(searchDoc);

      return true;
    }
    return false;
  }

  /**
   * @method _onRangeSliderChange
   * @description bound to custom 'range-value-change' event from app-range-slider
   */
  _onRangeSliderChange(e) {
    this.minValue = e.detail.min;
    this.maxValue = e.detail.max;

    this.$.minValueInput.value = this.minValue;
    this.$.maxValueInput.value = this.maxValue;

    this._onRangeNullChange();
  }

  /**
   * @method _onRangeNullChange
   * @description bound to input checkbox.  Currently called by internal
   * functions as well to search after value change :/
   */
  _onRangeNullChange() {
    let value = {
      gte: this.minValue,
      lte: this.maxValue
    }

    if( this.$.unknown.checked ) {
      value.includeNull = true;
    }

    // remove filter and return
    if( this._isDefaultState() ) return;

    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, 0);
    this._appendRangeFilter(searchDoc, this.filter, value);
    this.RecordModel.setSearchLocation(searchDoc);
  }

  /**
   * @method _onInputChange
   * @description bound to min/max number inputs.
   */
  _onInputChange() {
    let min = this.$.minValueInput.value;
    let max = this.$.maxValueInput.value;

    if( min < this.absMinValue ) {
      this.$.minValueInput.value = this.absMinValue;
      min = this.absMinValue;
    }
    if( max > this.absMaxValue ) {
      this.$.maxValueInput.value = this.absMaxValue;
      max = this.absMaxValue;
    }
    if( min > max ) min = max;

    this.minValue = min;
    this.maxValue = max;

    this._onRangeNullChange();
  }

  /**
   * @method _onSelectedCollectionUpdate
   * @description from CollectionInterface, called whenever selected collection updates
   * 
   * @param {Object} e
   */
  _onSelectedCollectionUpdate(e) {
    this.selectedCollection = e ? e['@id'] : '';
    this._renderFilters();
  }

  /**
   * @method _onRecordSearchUpdate
   * @description from RecordInterface
   * 
   * @param {Object} e 
   */
  _onRecordSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;

    this.currentFilters = e.searchDocument.filters || {};
    this._renderFilters();
  }

  /**
   * @method _renderFilters
   * @description called after a collection is selected or a filter set updates.
   * make sure range filter is set correctly.
   * 
   */
  async _renderFilters() {
    if( !this.currentFilters ) return;

    // grab default aggregations for collection
    let cid = this.selectedCollection;
    let result = await this._defaultRecordSearch(this.selectedCollection);
    if( cid !== this.selectedCollection ) return; // make sure we haven't updated
    this.default = result;

    let rangeFilter = this.default.payload.aggregations.ranges[this.filter];
    if( rangeFilter ) {
      this.absMinValue = rangeFilter.min;
      this.absMaxValue = rangeFilter.max;
    } else {
      return this._show(false);
    }

    this._show(true);

    // make sure any current values are set correctly
    if( this.minValue < this.absMinValue || !this.currentFilters[this.filter] ) {
      this.minValue = this.absMinValue;
      this.$.minValueInput.value = this.minValue;
    }
    if( this.maxValue > this.absMaxValue || !this.currentFilters[this.filter] ) {
      this.maxValue = this.absMaxValue;
      this.$.maxValueInput.value = this.maxValue;
    }

    // now set the current filters from search
    if( this.currentFilters[this.filter] ) {
      let value = this.currentFilters[this.filter].value;

      this.minValue = value.gte;
      this.maxValue = value.lte;
      this.$.minValueInput.value = this.minValue;
      this.$.maxValueInput.value = this.maxValue;
      this.$.unknown.checked = value.includeNull ? true : false;
    }

    this._notifySelected();
  }

  /**
   * @method _isFilterApplied
   * @description is there currenlty a filter set
   * 
   * @return {Boolean}
   */
  _isFilterApplied() {
    if( this.minValue === this.absMinValue &&
      this.maxValue === this.absMaxValue &&
      this.$.unknown.checked === true ) {
      return false;
    }
    return true;
  }

  /**
   * @method _notifySelected
   * @description notify parent of selected/unselected filter
   */
  _notifySelected() {
    let selected = false;
    let key = '';

    if( this.minValue !== this.absMinValue || 
        this.maxValue !== this.absMaxValue ||
        !this.$.unknown.checked ) {
      selected = true;
    }

    if( selected ) {
      key = this.minValue+' to '+this.maxValue;
    }

    this.dispatchEvent(
      new CustomEvent(`set-selected`, {
        detail: {
          selected,
          label: key
        }
      })
    );
  }

  /**
   * @method _show
   * @description notify parent to hide/show filter
   * 
   * @param {Boolean} show should the parent hide or show filter
   */
  _show(show) {
    this.dispatchEvent(
      new CustomEvent('update-visibility', {
        detail: {show}
      })
    );
  }

  /**
   * @method reset
   * @description reset range filter
   */
  reset() {
    this.minValue = this.absMinValue;
    this.maxValue = this.absMaxValue;
    this.$.unknown.checked = true;
    
    this._onRangeNullChange();
  }


  /**
   * @method onParentFilterClicked
   * @description called from parent toggle panel when selected filter
   * is clicked.  Reset slider
   */
  onParentFilterClicked() {
    this.reset();
  }

}

customElements.define('app-range-filter', AppRangeFilter);

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-top-active-filters.js":
/*!**************************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-top-active-filters.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppTopActiveFilters; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _app_top_active_filters_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-top-active-filters.tpl.js */ "./public/elements/pages/search/filtering/app-top-active-filters.tpl.js");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/config */ "./public/lib/config.js");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_config__WEBPACK_IMPORTED_MODULE_2__);




class AppTopActiveFilters extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
  .with(LitCorkUtils) {

  static get properties() {
    return {
      activeFilters : {type : Array}
    }
  }

  constructor() {
    super();
    this.render = _app_top_active_filters_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.filters = {};
    this.activeFilters = [];

    this._injectModel('FiltersModel', 'RecordModel');
  }

  /**
   * @method _onFilterBucketsUpdate
   * @description bound the FiltersModel filter-buckets-update event
   * 
   * @param {Object} e 
   */
  _onRecordSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;

    let active = [];
    this.currentFilters = e.searchDocument.filters || {};
    
    for( let key in this.currentFilters ) {
      let filter = this.currentFilters[key];

      if( filter.type === 'keyword' ) {
        this.currentFilters[key].value.forEach(value => {
          active.push({
            bucket : key,
            type : 'keyword',
            value : value,
            label :  this._getLabel(key, value)
          });
        });
      } else if( filter.type === 'range' ) {
        let value = this.currentFilters[key].value;
        active.push({
          bucket : key,
          type : 'range',
          value : value,
          label :  value.gte+' to '+value.lte
        });
      }
    }

    active.sort((a, b) => a.label.toLowerCase() < b.label.toLowerCase() ? -1 : 1);

    this.activeFilters = active;
    this.style.display = active.length ? 'block' : 'none';
  }

  _getLabel(bucket, label) {
    let conf = _lib_config__WEBPACK_IMPORTED_MODULE_2___default.a.elasticSearch.facets[bucket] || {};
    if( !conf.valueMap ) return label;
    if( typeof conf.valueMap === 'object' ) {
      return conf.valueMap[label] || label;
    }
    return conf.valueMap(label);
  }

  /**
   * @method _onRemoveFilterClicked
   * @description bound to remove filter button click event
   * 
   * @param {Element} e 
   */
  _onRemoveFilterClicked(e) {
    let item = this.activeFilters.splice(parseInt(e.currentTarget.getAttribute('index')), 1)[0];

    let searchDoc = this.RecordModel.getCurrentSearchDocument();
    this.RecordModel.setPaging(searchDoc, 0);
    if( item.type === 'keyword') {
      this.RecordModel.removeKeywordFilter(searchDoc, item.bucket, item.value);
    } else if( item.type === 'range' ) {
      this.RecordModel.removeRangeFilter(searchDoc, item.bucket);
    }
    this.RecordModel.setSearchLocation(searchDoc);

    this.requestUpdate();
  }

}

customElements.define('app-top-active-filters', AppTopActiveFilters);


/***/ }),

/***/ "./public/elements/pages/search/filtering/app-top-active-filters.tpl.js":
/*!******************************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-top-active-filters.tpl.js ***!
  \******************************************************************************/
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
    display: none;
    margin-left: 10px;
    padding-top: 10px;
    padding-bottom: 5px;
    border-top: 1px solid var(--light-background-color);
    font-size: var(--fs-sm);
  }

  .layout {
    display: flex;
    flex-wrap: wrap;
  }

  iron-icon {
    color: var(--default-secondary-color);
    margin-left: -6px;
  }

  .title {
    margin-right: 10px;
    font-style: italic;
  }

  .rm-btn {
    font-weight: bold;
    font-style: italic;
    display: flex;
    margin-right: 12px;
    cursor: pointer;
  }
</style>  

<div class="layout">
  <div class="title">Active Filters:</div>
  ${this.activeFilters.map((item, index) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <div @click="${this._onRemoveFilterClicked}" class="rm-btn" index="${index}" role="button" tabindex="0">
      <iron-icon icon="fin-icons:close"></iron-icon> ${item.label}
    </div>
  `)}
</div>

`;}

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-grid-result.html":
/*!**************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-grid-result.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    width: var(--grid-cell-width);\n    background-color: white;\n    cursor: pointer;\n  }\n\n  :host(:hover), :host(:focus) {\n    border: 2px solid var(--default-secondary-color);\n    margin: -2px 0 0 -2px;\n    outline: none !important;\n  }\n\n  @keyframes show-img {\n    from {opacity: 0}\n    to {opacity: 1}\n  }\n\n  img {\n    animation: show-img 300ms linear;\n    box-sizing: border-box;\n    display:none;\n    /* width: var(--grid-cell-width); */\n    /* background-size: cover;\n    background-color: transparent;\n    background-position: center center; */\n    /* position: absolute;\n    top: 0;\n    left: 0; */\n  }\n\n  .collection-name {\n    font-style: italic;\n    font-size: var(--fs-sm);\n    color: var(--gray-text);\n    font-weight: var(--fw-light);\n  }\n\n  .year {\n    color: var(--gray-text);\n    font-weight: var(--fw-light);\n    flex: 1;\n  }\n\n  .footer {\n    display : flex; \n    align-items : center; \n    margin-top : 10px;\n  }\n\n  h4 {\n    margin: 5px 0;\n    color: var(--default-primary-color);\n  }\n\n  iron-icon {\n    color: var(--default-primary-color);\n  }\n\n  .image {\n    position: relative; \n    background-size: cover;\n    background-color: transparent;\n    background-position: center center;\n    width: 250px; \n  }\n\n  .card-text {\n    padding: 15px;\n    line-height: 1.3;\n  }\n\n  .video-thumbnail {\n    z-index: 1000;\n    width: 30px; \n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background-image: url('https://via.placeholder.com/25');\n  }\n</style>\n\n<div \n  hidden$=\"[[!isImage]]\" \n  class=\"image\" \n  id=\"imgRoot\"\n  style$=\"background-image: url('[[imgThumbail]]'); height:[[imgHeight]]px;\">\n  <img id=\"img\" src$=\"[[imgUrl]]\" style$=\"height:[[imgHeight]]px; width: 100%\" onload=\"this.style.display='block';\" />\n  <div hidden$=\"[[!isVideo]]\" class=\"video-thumbnail\"></div>\n  <!--\n    <div style$=\"background-image: url('[[imgThumbail]]');height:[[imgHeight]]px\" class=\"img\"></div>\n    <div style$=\"background-image: url('[[imgUrl]]');height:[[imgHeight]]px\" class=\"img\"></div>\n  -->\n</div>\n\n<div class=\"card-text\">\n  <div class=\"collection-name\">[[collectionName]]</div>\n\n  <h4>[[name]]</h4>\n\n  <template is=\"dom-repeat\" items=\"[[creator]]\">\n    <app-search-result-creator creator=\"[[item]]\" grid></app-search-result-creator>\n  </template>\n\n  <div class=\"footer\">\n    <div class=\"year\">[[year]]</div>\n    <div>\n      <!-- <iron-icon icon=\"fin-icons:image\" hidden$=\"[[!isImage]]\"></iron-icon> -->\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-grid-result.js":
/*!************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-grid-result.js ***!
  \************************************************************************/
/*! exports provided: AppSearchGridResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSearchGridResult", function() { return AppSearchGridResult; });
/* harmony import */ var _app_search_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-search-result */ "./public/elements/pages/search/results/app-search-result.js");
/* harmony import */ var _app_search_grid_result_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-search-grid-result.html */ "./public/elements/pages/search/results/app-search-grid-result.html");
/* harmony import */ var _app_search_grid_result_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_search_grid_result_html__WEBPACK_IMPORTED_MODULE_1__);



class AppSearchGridResult extends _app_search_result__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_search_grid_result_html__WEBPACK_IMPORTED_MODULE_1___default.a;
    return tag;
  }
}

customElements.define('app-search-grid-result', AppSearchGridResult);

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-list-result.html":
/*!**************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-list-result.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    background-color: white;\n    margin: 10px;\n    border: 2px solid transparent;\n  }\n  \n  :host(:hover), :host(:focus) {\n    cursor: pointer;\n    border: 2px solid var(--default-secondary-color);\n    outline: none !important;\n  }\n\n  .img {\n    height: 250px;\n    width: var(--grid-cell-width);\n    background-size: cover;\n    background-color: white;\n    background-position: center center;\n  }\n\n  .collection-name {\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    color: var(--gray-text);\n  }\n\n  .year {\n    color: var(--gray-text);\n    flex: 1;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .footer {\n    display : flex; \n    align-items : center; \n    margin-top : 10px;\n  }\n\n  .layout {\n    display: flex;\n  }\n\n  h4 {\n    margin: 10px 0;\n    color: var(--default-primary-color);\n  }\n\n  iron-icon {\n    color: var(--default-primary-color);\n  }\n\n  .flex-vertical {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  }\n\n  .data {\n    padding: 15px; \n    flex: 1;\n    overflow: hidden;\n  }\n\n  @media(max-width: 600px) {\n    .img {\n      height: auto;\n      width: 150px;\n    }\n\n    .data {\n      padding: 8px;\n    }\n\n    :host {\n      display: block;\n      background-color: white;\n      margin: 10px 0;\n    }\n  }\n</style>\n\n<div class=\"layout\">\n  <div style$=\"background-image: url('[[imgUrl]]')\" hidden$=\"[[!isImage]]\" class=\"img\" ></div>\n\n  <div class=\"data\">\n    <div class=\"flex-vertical\">\n      <div class=\"collection-name\">[[collectionName]]</div>\n      \n      <h4>[[name]]</h4>\n    \n      <template is=\"dom-repeat\" items=\"[[creator]]\">\n        <app-search-result-creator creator=\"[[item]]\" col></app-search-result-creator>\n      </template>\n      \n      <div class=\"spacer\"></div>\n\n      <div class=\"footer\">\n        <div class=\"year\">[[year]]</div>\n        <div>\n          <!-- <iron-icon icon=\"fin-icons:image\" hidden$=\"[[!isImage]]\"></iron-icon> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-list-result.js":
/*!************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-list-result.js ***!
  \************************************************************************/
/*! exports provided: AppSearchListResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSearchListResult", function() { return AppSearchListResult; });
/* harmony import */ var _app_search_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-search-result */ "./public/elements/pages/search/results/app-search-result.js");
/* harmony import */ var _app_search_list_result_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-search-list-result.html */ "./public/elements/pages/search/results/app-search-list-result.html");
/* harmony import */ var _app_search_list_result_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_search_list_result_html__WEBPACK_IMPORTED_MODULE_1__);



class AppSearchListResult extends _app_search_result__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_search_list_result_html__WEBPACK_IMPORTED_MODULE_1___default.a;
    return tag;
  }
}

customElements.define('app-search-list-result', AppSearchListResult);

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-result-creator.html":
/*!*****************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-result-creator.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n  }\n  .text {\n    display: block;\n    color: var(--gray-text);\n    line-height: 1.3;\n    font-weight: var(--fw-light);\n  }\n  :host([col]) .text {\n    word-break: break-all;\n  }\n  :host([grid]) .text {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: calc(var(--grid-cell-width) - 30px);\n  }\n</style>\n\n<a class=\"text\" hidden=\"[[!link]]\" href=\"[[textLabel]]\" target=\"_blank\" rel=\"noopener\" on-click=\"_onClick\">[[textLabel]]</a>\n<div class=\"text\" hidden=\"[[link]]\">[[textLabel]]</div>";

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-result-creator.js":
/*!***************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-result-creator.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppSearchResultCreator; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_search_result_creator_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-search-result-creator.html */ "./public/elements/pages/search/results/app-search-result-creator.html");
/* harmony import */ var _app_search_result_creator_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_search_result_creator_html__WEBPACK_IMPORTED_MODULE_1__);



class AppSearchResultCreator extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_search_result_creator_html__WEBPACK_IMPORTED_MODULE_1___default.a;
    return tag;
  }

  static get properties() {
    return {
      creator : {
        type : Object,
        value : null,
        observer : '_onCreatorUpdate'
      },
      textLabel : {
        type : String,
        value : ''
      },
      link : {
        type : Boolean,
        value : false
      }
    }
  }

  /**
   * @method _onLabelUpdate
   * @description fired when label updates.  This element detects if the creator
   * is an external link or a string label.  Then renders a link
   */
  _onCreatorUpdate() {
    if( !this.creator ) return;

    if( this.creator['@id'] ) this.link = true;
    else this.link = false;

    if( this.creator.name ) this.textLabel = this.creator.name;
    else this.textLabel = this.creator['@id'];
  }

  /**
   * @method _onClick
   * @description bound to anchor tag click event. Stop event from bubbling;
   */
  _onClick(e) {
    e.stopPropagation();
  }
}

customElements.define('app-search-result-creator', AppSearchResultCreator);

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-result.js":
/*!*******************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-result.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppSearchResult; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/utils */ "./public/lib/utils/index.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_search_result_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-search-result-creator */ "./public/elements/pages/search/results/app-search-result-creator.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces/CollectionInterface */ "./public/elements/interfaces/CollectionInterface.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../interfaces/AppStateInterface */ "./public/elements/interfaces/AppStateInterface.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../interfaces/MediaInterface */ "./public/elements/interfaces/MediaInterface.js");
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_5__);








class AppSearchResult extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
  .with(EventInterface, _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_4___default.a, _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3___default.a, _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_5___default.a) {

  static get properties() {
    return {
      data : {
        type : Object,
        value : () => {},
        observer : '_onDataUpdate'
      },
      fetchId : {
        type : String,
        value : ''
      },
      isVideo: {
        type: Boolean,
        value: false
      },
      isImage : {
        type : Boolean,
        value : false
      },
      imgUrl : {
        type : String,
        value : ''
      },
      collectionName : {
        type : String,
        value : ''
      },
      name : {
        type : String,
        value : ''
      },
      description : {
        type : String,
        value : ''
      },
      creator : {
        type : Array,
        value : () => []
      },
      year : {
        type : String,
        value : ''
      },
      tabindex : {
        type : Number,
        value : 0,
        reflectToAttribute : true
      }
    }
  }

  constructor() {
    super();

    this.baseUrl = window.location.protocol+'//'+window.location.host+'/fcrepo/rest';
  }

  ready() {
    super.ready();
    this.addEventListener('click', e => this._onClick());
    this.addEventListener('keyup', e => {
      if( e.which !== 13 ) return;
      this._onClick();
    });
  }

  /**
   * @method _onClick
   * @description Fired when this element is clicked
   */
  _onClick() {
    this._setWindowLocation(this.fetchId);
  }

  /**
   * @method _onDataUpdate
   * @description fired when `data` property updates.  Set UI properties.
   */
  async _onDataUpdate() {
    let data = Object.assign({}, this.data);

    if( !data['@id'] ) return;
    
    this.fetchId = data['@id'];

    this.name = this.data.name || (this.data.identifier ? this.data.identifier['@id'] : '');

    let video = this.data.video;
    if ( video ) {
      this.isVideo = true;
    }
    
    let imgEle = this.shadowRoot.querySelector('#img');
    if( imgEle ) imgEle.style.display = 'none';

    let imgWidth = 250;    
    let img = this.data.image;  
    if( img ) {
      let ratio = img.height / img.width;
      this.imgHeight = Math.floor(imgWidth * ratio);
      this.imgUrl = this._getImgUrl(img.url, null, this.imgHeight);

      if( img.colorPalette ) {
        this.imgThumbail = img.colorPalette;
      } else {
        this.imgThumbail = '';
      }
      
      this.isImage = true;
    } else {
      this.imgUrl = '';
      this.isImage = false;
    }

    this.description = this.data.description || '';
    if( this.description.length > 200 ) {
      this.description = this.description.substr(0, 200)+'...';
    }

    this.year = _lib_utils__WEBPACK_IMPORTED_MODULE_1___default.a.getYearFromDate(data.created);

    if( Array.isArray(data.creator) ) {
      this.creator = data.creator;
    } else {
      this.creator = [data.creator || ''];
    }

    this.collectionName = this.data.collectionId || '';
    if( this.collectionName ) {
      let collection = await this._getCollection(this.collectionName);
      this.collectionName = collection.name;
    }
  }

}

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-results-panel.html":
/*!****************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-results-panel.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    max-width: 1150px;\n    position: relative;\n    margin: 0 5px\n  }\n\n  .header {\n    font-size: var(--fs-sm);\n    display: flex;\n    align-items: center;\n    margin-bottom: 11px;\n    margin-top: 5px;\n  }\n\n  select {\n    margin-left: 10px;\n    border: 1px solid var(--light-background-color);\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n    -webkit-border-radius: 0px;\n    padding: 5px 30px 5px 10px;\n    background-position: right 10px center;\n    background-size: 16px 16px;\n    background-repeat: no-repeat;\n    background-color: transparent;\n    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCA2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMjg1NTt9PC9zdHlsZT48L2RlZnM+PGc+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjAgMCAxMCAwIDUgNiAwIDAiLz48L2c+PC9zdmc+');\n  }\n  /* for IE */\n  select::-ms-expand {\n    display: none;\n  }\n\n  h3 {\n    border-top: 1px solid var(--light-background-color);\n    margin: 15px 0 0 0;\n    padding: 15px 0 0 0;\n    color: var(--default-primary-color);\n  }\n\n  .masonry {\n    margin: 10px;\n    position: relative;\n  }\n\n  .masonry .item {\n    display: block;\n    position: absolute;\n    /* visibility: hidden; */\n    top : 25px;\n    left: 25px;\n    will-change: top, left;\n    transition: top 500ms ease-out, left 500ms ease-out;\n  }\n\n  .list {\n    margin: 10px;\n  }\n\n  .list .item {\n    padding: 10px;\n    margin-bottom: 15px;\n    background-color: #daaa00;\n    height: 250px;\n  }\n\n  .spacer {\n    height: 20px;\n    border-right: 1px solid var(--light-background-color);\n  }\n\n  .total {\n    font-style: italic; \n    padding-left: 10px;\n    flex: 1;\n  }\n\n  .mobile-total {\n    font-style: italic; \n  }\n\n  .filler {\n    flex: 1;\n  }\n\n  paper-spinner-lite {\n    --paper-spinner-color: var(--default-secondary-color);\n  }\n\n  .loading {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 250px;\n  }\n\n  .error {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 250px;\n    color: red;\n  }\n\n  cork-pagination {\n    display: inline-block;\n\n    --cork-color : var(--default-primary-color);\n    --cork-background-color : var(--default-secondary-color);\n  }\n\n  .drawer-toggle {\n    font-size: var(--fs-sm);\n    cursor: pointer;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n    font-weight: var(--fw-bold);\n    color: var(--default-primary-color);\n    background-color: var(--light-background-color);\n    border-radius: 0;\n    border: 0;\n    padding: 0;\n  }\n  .drawer-toggle > span {\n    padding : 0 10px;\n  }\n  .drawer-toggle iron-icon {\n    background-color: var(--default-secondary-color);\n  }\n\n  .drawer-toggle[disabled] {\n    color: var(--light-background-color);\n  }\n\n  .header {\n    display : none;\n  }\n\n  .mobile-header {\n    padding-top: 15px;\n    margin-bottom: 10px;\n  }\n\n  .mobile-header .row2 {\n    display: flex;\n    align-items: center;\n    margin-right: 10px;\n  }\n\n  .mobile-header .row2-right {\n    display: flex;\n    align-items: center;\n  }\n\n  .collections {\n    text-align: center;\n  }\n\n  @media( max-width: 400px ) {\n    .mobile-header .row2 {\n      flex-direction: column;\n      justify-content: center;\n    }\n    .mobile-header .row2 .total {\n      padding: 8px 0 5px 0;\n    }\n  }\n\n  @media( min-width: 975px ) {\n    .header {\n      display: flex;\n    }\n    .mobile-header {\n      display: none;\n    }\n  }\n</style>\n\n<div class=\"header\">\n  <div class=\"total\" hidden$=\"[[showLoading]]\">[[total]] results found</div>\n  \n  <div class=\"filler\"></div>\n  \n  <paper-icon-button \n    noink\n    icon=\"fin-icons:grid\" \n    disabled$=\"[[!isListLayout]]\"\n    on-click=\"_onLayoutToggle\" \n    type=\"masonry\">\n  </paper-icon-button>\n  <div class=\"spacer\"></div>\n  <paper-icon-button \n    noink\n    icon=\"fin-icons:list\" \n    disabled$=\"[[isListLayout]]\"\n    on-click=\"_onLayoutToggle\" \n    type=\"list\">\n  </paper-icon-button>\n  <div class=\"spacer\"></div>\n  \n  <div>\n    <select id=\"numPerPage\" on-change=\"_onPageSizeChange\">\n      <option value=\"50\">50</option>\n      <option value=\"20\">20</option>\n      <option value=\"10\" selected>10</option>\n    </select>\n  </div>\n  <div style=\"margin: 0 10px; font-style:italic\">Items per page</div>\n</div>\n\n<div class=\"mobile-header\">\n  <div>\n    <div style=\"display:inline-block\">\n      <button class=\"drawer-toggle\" on-click=\"_onToggleDrawer\">\n        <span>Info / Filters</span>\n        <iron-icon icon=\"add\"></iron-icon>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row2\">\n    <div class=\"total\" hidden$=\"[[showLoading]]\">[[total]] results</div>\n\n    <div class=\"row2-right\">\n      <div class=\"filler\"></div>\n    \n      <paper-icon-button \n        noink\n        icon=\"fin-icons:grid\" \n        disabled$=\"[[!isListLayout]]\"\n        on-click=\"_onLayoutToggle\" \n        type=\"masonry\">\n      </paper-icon-button>\n      <div class=\"spacer\"></div>\n      <paper-icon-button\n        noink\n        icon=\"fin-icons:list\" \n        disabled$=\"[[isListLayout]]\"\n        on-click=\"_onLayoutToggle\" \n        type=\"list\">\n      </paper-icon-button>\n      <div class=\"spacer\"></div>\n      \n      <div>\n        <select id=\"numPerPageM\" on-change=\"_onPageSizeChange\">\n          <option>50</option>\n          <option>20</option>\n          <option>10</option>\n        </select>\n      </div>\n      <div style=\"margin: 0 10px; font-style:italic\">per page</div>\n    </div>\n  </div>\n</div>\n\n<app-top-active-filters></app-top-active-filters>\n\n<div class=\"collections\" hidden$=\"[[!showCollectionResults]]\">\n  <div hidden$=\"[[!collectionResults.length]]\">\n    <h3>Collections</h3>\n    <div style=\"text-align:center\">\n      <template is=\"dom-repeat\" items=\"[[collectionResults]]\">\n        <app-collection-card \n          collection=\"[[item]]\" \n          on-keyup=\"_onCollectionClicked\"\n          on-click=\"_onCollectionClicked\">\n        </app-collection-card>\n      </template>\n    </div>\n    <h3 hidden$=\"[[!results.length]]\">Items</h3>\n  </div>\n</div>\n\n<div hidden$=\"[[showError]]\">\n  <div hidden$=\"[[showLoading]]\">\n    <div class=\"masonry\" id=\"layout\" hidden$=\"[[isListLayout]]\">\n      <template is=\"dom-repeat\" items=\"[[results]]\">\n        <app-search-grid-result data=\"[[item]]\" class=\"item\"></app-search-grid-result>\n      </template>\n    </div>\n\n    <div class=\"list\" hidden$=\"[[!isListLayout]]\">\n      <template is=\"dom-repeat\" items=\"[[results]]\">\n        <app-search-list-result data=\"[[item]]\"></app-search-list-result>\n      </template>\n    </div>\n  </div>\n</div>\n\n<div class=\"error\" hidden$=\"[[!showError]]\">\n  <div>[[errorMsg]]</div>\n</div>\n<div class=\"loading\" hidden$=\"[[!showLoading]]\">\n  <paper-spinner-lite active$=\"[[showLoading]]\"></paper-spinner-lite>\n</div>\n\n<div style=\"text-align:center\" hidden$=\"[[showLoading]]\">\n  <cork-pagination \n    total-results=\"[[paginationTotal]]\" \n    items-per-page=\"[[numPerPage]]\"\n    current-index=\"[[currentIndex]]\"\n    on-nav=\"_onPaginationNav\">\n  </cork-pagination>\n</div>\n\n<div hidden$=\"[[!totalOverMaxWindow]]\" style=\"text-align: center\">Digital Collections limits results to \n  10,000.  Use keywords and/or filters to refine search.\n</div>";

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-results-panel.js":
/*!**************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-results-panel.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ucd_lib_cork_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/cork-pagination */ "./public/node_modules/@ucd-lib/cork-pagination/cork-pagination.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner-lite */ "./public/node_modules/@polymer/paper-spinner/paper-spinner-lite.js");
/* harmony import */ var _app_search_grid_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-search-grid-result */ "./public/elements/pages/search/results/app-search-grid-result.js");
/* harmony import */ var _app_search_list_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-search-list-result */ "./public/elements/pages/search/results/app-search-list-result.js");
/* harmony import */ var _utils_app_collection_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/app-collection-card */ "./public/elements/utils/app-collection-card.js");
/* harmony import */ var _filtering_app_top_active_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filtering/app-top-active-filters */ "./public/elements/pages/search/filtering/app-top-active-filters.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../interfaces/RecordInterface */ "./public/elements/interfaces/RecordInterface.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../interfaces/AppStateInterface */ "./public/elements/interfaces/AppStateInterface.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../interfaces/CollectionInterface */ "./public/elements/interfaces/CollectionInterface.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../interfaces/MediaInterface */ "./public/elements/interfaces/MediaInterface.js");
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_search_results_panel_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-search-results-panel.html */ "./public/elements/pages/search/results/app-search-results-panel.html");
/* harmony import */ var _app_search_results_panel_html__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_app_search_results_panel_html__WEBPACK_IMPORTED_MODULE_11__);















const SEARCH_RESULTS_LAYOUT = 'search-results-layout';
let initIsListLayout = localStorage.getItem(SEARCH_RESULTS_LAYOUT);
if( initIsListLayout === 'list' ) initIsListLayout = true
else initIsListLayout = false;

class AppSearchResultsPanel extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
      .with(EventInterface, _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_7___default.a, _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_8___default.a, _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_9___default.a, _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_10___default.a) {

  static get properties() {
    return {
      /**
       * Array of search results
       */
      results : {
        type : Array,
        value : () => []
      },

      /**
       * Array of collection search results
       */
      collectionResults : {
        type : Array,
        value : () => []
      },

      /**
       * size in px's between each masonary layout cell
       */
      masonryMargin : {
        type : Number,
        value : 15
      },
      /**
       * are we in list or masonry layout
       */
      isListLayout : {
        type : Boolean,
        value : initIsListLayout
      },
      /**
       * UI display of total results
       */
      total : {
        type : String,
        value : '0'
      },

      numPerPage : {
        type : Number,
        value : 1
      },
      
      currentIndex : {
        type : Number,
        value : 0
      },

      showCollectionResults : {
        type : Boolean,
        value : false
      },

      showError : {
        type : Boolean,
        value : false
      },
      
      showLoading : {
        type : Boolean,
        value : false
      },

      errorMsg : {
        type : Boolean,
        value : false
      },

      // total number for pagination widget
      // we make out at 10000
      paginationTotal : {
        type : Number,
        value : false
      },

      totalOverMaxWindow : {
        type : Boolean,
        value : false
      }

    }
  }

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_search_results_panel_html__WEBPACK_IMPORTED_MODULE_11___default.a;
    return tag;
  }

  constructor() {
    super();
    this.active = true;

    this.resizeTimer = -1;
    window.addEventListener('resize', () => this._resizeAsync());

    this.EventBus().on('show-collection-search-results', show => this._updateCollectionResultsVisibility(show));
  }

  /**
   * @method _onAppStateUpdate
   * @description from AppStateInterface, called when app state updates
   * 
   * @param {Object} e 
   */
  _onAppStateUpdate(e) {
    if( e.location.page !== 'search') return;
    this._resizeAsync();
  }

  /**
   * @method render
   * @description render results of search query
   * 
   * @param {Array} results results to render
   */
  render(results, total, numPerPage, currentIndex) {
    this.results = [];
    this.showHeaderFooter = true;
    this.showError = false;

    clearTimeout(this.showLoadingTimer);
    this.showLoading = false;

    requestAnimationFrame(() => {
      this.total = this.numberWithCommas(total);

      // make sure we don't have a page the returns results > 10000k
      let t = Math.floor((10000-numPerPage) / numPerPage) * numPerPage;
      if( total > t ) {
        total = t;
        this.totalOverMaxWindow = true;
      } else {
        this.totalOverMaxWindow = false;
      }

      this.results = results;
      this.paginationTotal = total;
      this.numPerPage = numPerPage;
      this.$.numPerPage.value = numPerPage+'';
      this.$.numPerPageM.value = numPerPage+'';
      this.currentIndex = currentIndex;

      requestAnimationFrame(() => this._resize());
    });
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  onLoading() {
    this.results = [];
    // this.showHeaderFooter = false;
    this.showCollectionResults = false;
    this.showError = false;
    this.showLoadingTimer = setTimeout(() => {
      this.showLoading = true;
    }, 100);
  }

  onError(state) {
    this.results = [];
    // this.showHeaderFooter = false;
    this.showCollectionResults = false;
    this.showError = true;
   
    clearTimeout(this.showLoadingTimer);
    this.showLoading = false;

    if( state.showErrorMessage ) {
      this.errorMsg = state.error.message;
    } else {
      this.errorMsg = 'Ooops. Something went wrong with search!';
    }
  }

  /**
   * @method _onLayoutToggle
   * @description Toggle between masonry and list layout
   * 
   * @param {Event} e HTML click event
   */
  _onLayoutToggle(e) {
    let type = e.currentTarget.getAttribute('type');
    if( type === 'masonry' ) {
      this.isListLayout = false;
      localStorage.setItem(SEARCH_RESULTS_LAYOUT, 'masonry');
    } else {
      this.isListLayout = true;
      localStorage.setItem(SEARCH_RESULTS_LAYOUT, 'list');
    }

    if( !this.isListLayout ) {
      requestAnimationFrame(() => this._resize());
    }
  }

  /**
   * @method _resizeAsync
   * @description buffer resize masonary layout call
   */
  _resizeAsync() {
    if( this.resizeTimer !== -1 ) clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.resizeTimer = -1;
      this._resize();
    }, 50);
  }

  /**
   * @method _resize
   * @description resize masonary layout
   */
  _resize() {
    if( this.isListLayout ) return;

    let firstDiv = this.$.layout.querySelector('app-search-grid-result');
    if( !firstDiv ) return;

    let ew = this.offsetWidth;
    let w = firstDiv.offsetWidth + this.masonryMargin;

    let numCols = Math.max(Math.floor(ew / w), 1);
    // this makes sure columns are centered
    let leftOffset = Math.floor((ew - numCols * w) / 2);

    let colHeights = [];
    for( let i = 0; i < numCols; i++ ) colHeights.push(0);

    let eles = this.$.layout.querySelectorAll('app-search-grid-result');
    for( let i = 0; i < eles.length; i++ ) {
      let col = this._findMinCol(colHeights);
      let cheight = colHeights[col];

      eles[i].style.left = (leftOffset + col * w) + 'px';
      eles[i].style.top = colHeights[col] + 'px';
      // eles[i].style.visibility = 'visible';

      colHeights[col] += eles[i].offsetHeight + this.masonryMargin;
    }

    let maxHeight = Math.max.apply(Math, colHeights);
    this.$.layout.style.height = maxHeight+'px';
  }

  /**
   * @method _findMinCol
   * @description given an array of column heights, return
   * the column index that has the min height
   * 
   * @param {Array} colHeights array of heights
   */
  _findMinCol(colHeights) {
    let min = colHeights[0];
    let minCol = 0;
    for( var i = 1; i < colHeights.length; i++ ) {
      if( min > colHeights[i] ) {
        min = colHeights[i];
        minCol = i;
      }
    }
    return minCol;
  }

  /**
   * @method _onToggleDrawer
   * @description fire an event for app-search indicating the drawer toggle has
   * been clicked.
   */
  _onToggleDrawer() {
    this.dispatchEvent(new CustomEvent('toggle-drawer'));
  }

  /**
   * @method _onPageSizeChange
   * @description bound to select box change event, dispatch event to parent
   * alerting new page size
   */
  _onPageSizeChange(e) {
    this.dispatchEvent(new CustomEvent('page-size-change', {
      detail : parseInt(e.currentTarget.value)
    }));
  }

  /**
   * @method _onPaginationNav
   * @description bound to scork-pagination `nav` event, dispatch event to parent
   * alerting to new page 
   */
  _onPaginationNav(e) {
    this.dispatchEvent(new CustomEvent('page-change', {
      detail : e.detail
    }));
  }

  /**
   * @method _updateCollectionResultsVisibility
   * @description bound to collection visibility updates (see contructor).  Fired
   * via CollectionModel which decides if a collection search should be preformed.
   */
  _updateCollectionResultsVisibility(show) {
    this.showCollectionResults = show;
  }

  /**
   * @method _onSearchCollectionUpdate
   * @description from CollectionInterface, called when a collection search state
   * is updated.
   * 
   * @param {Object} e 
   */
  _onCollectionSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this.collectionResults = e.payload.results;
  }

  /**
   * @method _onCollectionClicked
   * @description bound to app-collection-card click event
   * 
   * @param {Object} e click|keyup event
   */
  _onCollectionClicked(e) {
    if( e.type === 'keyup' && e.which !== 13 ) return;
    let id = e.currentTarget.collection['@id']

    let searchDoc = this._getEmptySearchDocument();
    this._setKeywordFilter(searchDoc, 'isPartOf.@id', id);
    this.RecordModel.setSearchLocation(searchDoc);
  }

}

customElements.define('app-search-results-panel', AppSearchResultsPanel);

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

/***/ "./public/elements/utils/app-range-slider.html":
/*!*****************************************************!*\
  !*** ./public/elements/utils/app-range-slider.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  :host {\n    display: block;\n    position: relative;\n    height: 50px;\n    margin: 0 13px;\n\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently */\n  }\n\n  #numberLine {\n    position: absolute;\n    left : 0;\n    right : 0;\n    height: 3px;\n    background-color: var(--light-background-color, #888);\n  }\n\n  #fillLine {\n    position: absolute;\n    cursor: move;\n    background-color: var(--default-primary-color);\n    height: 3px;\n  }\n\n  .btn {\n    position: absolute;\n    height: 25px;\n    width: 25px;\n    cursor: move;\n  }\n\n  .btn > div {\n    margin: 5px;\n    height: 15px;\n    width: 15px;\n    border-radius: 15px;\n    background-color: var(--default-primary-color);\n    transition: all 150ms linear;\n  }\n\n  .btn[moving] > div {\n    margin: 0px;\n    height: 25px;\n    width: 25px;\n    border-radius: 25px;\n  }\n\n  .label {\n    width : 25px;\n    font-size: 12px; \n    position: absolute;\n    text-align: center;\n    transform: scale(0);\n    transition: transform 200ms linear;\n    color: var(--default-primary-color);\n  }\n\n  .label[moving] {\n    transform: scale(1);\n  }\n\n</style>\n\n<div id=\"numberLine\"></div>\n\n<div id=\"fillLine\" \n  prop=\"range\" \n  on-mousedown=\"_onMoveStart\" \n  on-touchstart=\"_onMoveStart\">\n</div>\n\n<div id=\"lowNumberLabel\" class=\"label\" moving$=\"[[isMoving]]\">[[minValueLabel]]</div>\n<div id=\"highNumberLabel\" class=\"label\" moving$=\"[[isMoving]]\">[[maxValueLabel]]</div>\n\n<div id=\"lowNumberBtn\" \n  class=\"btn\" \n  prop=\"min\" \n  on-mousedown=\"_onMoveStart\" \n  on-touchstart=\"_onMoveStart\" \n  moving$=\"[[movingMin]]\" >\n  <div></div>\n</div>\n\n<div id=\"highNumberBtn\" \n  class=\"btn\" \n  prop=\"max\" \n  on-mousedown=\"_onMoveStart\" \n  on-touchstart=\"_onMoveStart\" \n  moving$=\"[[movingMax]]\">\n  <div></div>\n</div>";

/***/ }),

/***/ "./public/elements/utils/app-range-slider.js":
/*!***************************************************!*\
  !*** ./public/elements/utils/app-range-slider.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppRangeSlider; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_range_slider_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-range-slider.html */ "./public/elements/utils/app-range-slider.html");
/* harmony import */ var _app_range_slider_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_range_slider_html__WEBPACK_IMPORTED_MODULE_1__);



class AppRangeSlider extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_range_slider_html__WEBPACK_IMPORTED_MODULE_1___default.a;
    return tag;
  }

  static get properties() {
    return {
      // absolute min/max values for slider
      absMinValue : {
        type : Number,
        value : 0,
        observer : '_renderAsync'
      },
      absMaxValue : {
        type : Number,
        value : 100,
        observer : '_renderAsync'
      },

      // current min/max values for slider (where the btns are)
      minValue : {
        type : Number,
        value : 10,
        observer : '_renderAsync'
      },
      maxValue : {
        type : Number,
        value : 90,
        observer : '_renderAsync'
      },

      // labels for slide btns
      minValueLabel : {
        type : String,
        value : ''
      },
      maxValueLabel : {
        type : String,
        value : ''
      },

      // current widget size info
      // used so we don't have to ask the DOM on each render
      width : {
        type : Number,
        value : 1
      },
      height : {
        type : Number,
        value : 1
      },
      btnHeight : {
        type : Number,
        value : 1
      },

      // string that indicate type of move
      moving : {
        type : String,
        value : ''
      },

      // different moving flags for binding UI element classes
      movingMin : {
        type : Boolean,
        value : false
      },
      movingMax : {
        type : Boolean,
        value : false
      },
      isMoving : {
        type : Boolean,
        value : false
      }
    }
  }

  
  constructor() {
    super();
    this._windowResizeListener = this._onResize.bind(this);
    this._windowMouseListener = this._onMoveStop.bind(this);

    this.addEventListener('mousemove', (e) => this._onMove(e));
    this.addEventListener('touchmove', (e) => this._onMove(e));
  }

  /**
   * @method connectedCallback
   * @description setup our window mouse listeners, fire first render
   */
  connectedCallback() {
    super.connectedCallback();
    
    requestAnimationFrame(() => {
      this._onResize();
    });

    window.addEventListener('resize', this._windowResizeListener);
    window.addEventListener('mouseup', this._windowMouseListener);
    window.addEventListener('mouseout', this._windowMouseListener);
    window.addEventListener('touchend', this._windowMouseListener);
    window.addEventListener('touchcancel', this._windowMouseListener);
  }

  /**
   * @method disconnectedCallback
   * @description remove our window mouse listeners
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._windowResizeListener);
    window.removeEventListener('mouseup', this._windowMouseListener);
    window.removeEventListener('mouseout', this._windowMouseListener);
    window.removeEventListener('touchend', this._windowMouseListener);
    window.removeEventListener('touchcancel', this._windowMouseListener);
  }

  /**
   * @method _onResize
   * @description cache the element size so we don't have to look it up
   * on each render of btn and line positions.  Then fire render to make
   * sure everything is visually correct.
   */
  _onResize() {
    this.width = this.offsetWidth || 1;
    this.height = this.offsetHeight;
    this.left = this.offsetLeft;

    this.btnHeight = this.$.lowNumberBtn.offsetHeight;
    this._render();
  }

  /**
   * @method _valueToPx
   * @description given a number line value, return px location relative
   * to the widget
   * 
   * @param {Number} value number line value
   * 
   * @returns {Number} px location
   */
  _valueToPx(value) {
    value = value - this.absMinValue;
    let range = this.absMaxValue - this.absMinValue;
    let valPerPx = range / this.width;
    return Math.round(value / valPerPx);
  }

  /**
   * @method _pxToValue
   * @description given a px location, return number line value
   * 
   * @param {Number} px location
   * 
   * @returns {Number} value
   */
  _pxToValue(px) {
    let range = this.absMaxValue - this.absMinValue;
    let valPerPx = range / this.width;
    return Math.round(px * valPerPx) + this.absMinValue;
  }

  _renderAsync() {
    if( this.renderTimer ) {
      clearTimeout(this.renderTimer);
    }

    this.renderTimer = setTimeout(() => {
      this.renderTimer = 0;
      this._render();
    }, 0);
  }

  /**
   * @method _renderAsync
   * @description set the current top/left px values for all btns,
   * labels and lines bases on current min/max values.
   */
  _render() {
    let hh = this.height * 0.60;

    // set line heights
    this.$.numberLine.style.top = hh+'px';
    this.$.fillLine.style.top = hh+'px';

    // set btn heights
    let hBtnHeight = this.btnHeight / 2;
    this.$.lowNumberBtn.style.top = (hh - hBtnHeight) +'px';
    this.$.highNumberBtn.style.top = (hh - hBtnHeight) +'px';

    this.$.lowNumberLabel.style.top = (hh - hBtnHeight - 22) +'px';
    this.$.highNumberLabel.style.top = (hh - hBtnHeight - 22) +'px';

    // set btn left
    let lv = ( this.minValue < this.absMinValue ) ? this.absMinValue : this.minValue;
    let uv = ( this.maxValue > this.absMaxValue ) ? this.absMaxValue : this.maxValue;

    let minPxValue = this._valueToPx(lv);
    let maxPxValue = this._valueToPx(uv);

    this.$.lowNumberBtn.style.left = (minPxValue - hBtnHeight)  + 'px';
    this.$.highNumberBtn.style.left = (maxPxValue - hBtnHeight) + 'px';

    this.$.lowNumberLabel.style.left = (minPxValue - hBtnHeight) + 'px';
    this.$.highNumberLabel.style.left = (maxPxValue - hBtnHeight) + 'px';
    
    this.$.fillLine.style.left = minPxValue +'px';
    this.$.fillLine.style.width = (maxPxValue - minPxValue)  +'px';

    this.minValueLabel = this.renderLabel(this.minValue);
    this.maxValueLabel = this.renderLabel(this.maxValue);
  }

  /**
   * @method _onMoveStart
   * @description bound to btns and center line.  Fired when the user mouses
   * down on element indicating a move is starting
   * 
   * @param {MouseEvent} e 
   */
  _onMoveStart(e) {
    this.moving = e.currentTarget.getAttribute('prop');
    
    if( this.moving === 'range' ) {
      this.startRange = {
        min : e.currentTarget.offsetLeft,
        max : e.currentTarget.offsetLeft + e.currentTarget.offsetWidth,
        left :  e.pageX - this.left
      }
    }

    this.isMoving = true;
    this.movingMin = (this.moving === 'max') ? false : true;
    this.movingMax = (this.moving === 'min') ? false : true;
  }

  /**
   * @method _onMove
   * @description bound to mousemove event on this element.  Update min/max
   * values based on type of move that is happening ie min, max or range.  Does
   * nothing if we are not moving.
   * 
   * @param {MouseEvent} e 
   */
  _onMove(e) {
    if( !this.moving ) return;
    e.preventDefault();


    // handle both mouse and touch event
    let left;
    if( e.type === 'touchmove' ) {
      if( !e.changedTouches.length ) return;
      left = e.changedTouches[0].pageX - this.left;
    } else {
      left = e.pageX - this.left;
    }
    
    if( this.moving === 'min' ) {
      this.minValue = this._pxToValue(left);
    } else if( this.moving === 'max' ) {
      this.maxValue = this._pxToValue(left);
    } else if( this.moving === 'max' ) {
      this.maxValue = this._pxToValue(left);
    } else if( this.moving === 'range' ) {
      let diff = this.startRange.left - left;

      this.minValue = this._pxToValue(this.startRange.min - diff);
      this.maxValue = this._pxToValue(this.startRange.max - diff);
    }
    
    if( this.minValue < this.absMinValue ) {
      this.minValue = this.absMinValue;
    }
    if( this.maxValue > this.absMaxValue ) {
      this.maxValue = this.absMaxValue;
    }

    if( this.minValue > this.maxValue ) {
      if( this.moving === 'min' ) this.minValue = this.maxValue;
      else this.maxValue = this.minValue;
    }
  }

  /**
   * @method _onMoveStop
   * @description bound to mouseup/mouseout event on window.  It's always best to bind
   * this to the window as a catch all.  Resets all moving flags
   */
  _onMoveStop() {
    if( !this.moving ) return;

    this.moving = '';
    this.movingMin = false;
    this.movingMax = false;
    this.isMoving = false;

    this.dispatchEvent(
      new CustomEvent('range-value-change', {
        detail: {
          min : this.minValue,
          max : this.maxValue
        }
      })
    );
  }

  /**
   * @method renderLabel
   * @description render the label value.  Override if you want
   * anything other than the number.
   * 
   * @param {Number} value current value to render
   * 
   * @returns {String}
   */
  renderLabel(value) {
    return value;
  }

}

customElements.define('app-range-slider', AppRangeSlider);

/***/ }),

/***/ "./public/elements/utils/app-tabs.html":
/*!*********************************************!*\
  !*** ./public/elements/utils/app-tabs.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  :host {\n    display : block;\n  }\n  .layout {\n    display: flex;\n  }\n  .tab {\n    flex: 1;\n    cursor: pointer;\n    text-transform: uppercase;\n    padding: 12px 0 9px 0;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: normal;\n    color: var(--gray-text);\n    border-bottom: 2px solid var(--gray-text);\n  }\n  .tab:focus {\n    border-bottom-color: var(--default-secondary-color);\n    outline: none;\n  }\n  .tab[selected] {\n    cursor: default;\n    font-weight: bold;\n    color: var(--default-primary-color);\n    border-bottom: 4px solid var(--default-primary-color);\n    padding: 12px 0 7px 0;\n  }\n</style>\n\n<div class=\"layout\">\n  <template is=\"dom-repeat\" items=\"[[tabs]]\">\n    <div class=\"tab\" \n      role=\"tab\" \n      tabindex=\"0\" \n      aria-selected$=\"[[item.ariaSelected]]\"\n      selected$=\"[[item.selected]]\"\n      on-click=\"_onTabClicked\" \n      on-keyup=\"_onTabClicked\"\n      value$=\"[[item.value]]\">\n      [[item.label]]\n    </div>\n  </template>\n</div>";

/***/ }),

/***/ "./public/elements/utils/app-tabs.js":
/*!*******************************************!*\
  !*** ./public/elements/utils/app-tabs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppTabs; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_tabs_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-tabs.html */ "./public/elements/utils/app-tabs.html");
/* harmony import */ var _app_tabs_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_tabs_html__WEBPACK_IMPORTED_MODULE_1__);



class AppTabs extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_tabs_html__WEBPACK_IMPORTED_MODULE_1___default.a;
    return tag;
  }

  static get properties() {
    return {
      role : {
        type : String,
        value : 'tablist',
        reflectToAttribute : true
      },
      selected : {
        type : String,
        value : '',
        notify : true,
        observer : '_renderTabs'
      },
      tabs : {
        type : Array,
        value : () => [],
        observer : '_renderTabs'
      }
    }
  }

  /**
   * @method _renderTabs
   * @description bound to 'tabs' property observer
   */
  _renderTabs() {
    if( !this.tabs ) return;

    if( !this.selected && this.tabs.length ) {
      this.selected = this.tabs[0];
      return;
    }

    this.tabs.forEach((tab, index) => {
      let selected = (tab.value === this.selected);
      this.set(`tabs.${index}.selected`, selected);
      this.set(`tabs.${index}.ariaSelected`, selected+'');
      if( !tab.label ) this.set(`tabs.${index}.label`, tab.value);
    });
  }

  _onTabClicked(e) {
    if( e.type === 'keyup' && e.which !== 13 ) return;
    this.selected = e.currentTarget.getAttribute('value');
  }

}

customElements.define('app-tabs', AppTabs);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvaW50ZXJmYWNlcy9GaWx0ZXJzSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9pbnRlcmZhY2VzL01lZGlhSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvYXBwLWNvcHktY2l0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvYXBwLWNvcHktY2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2FwcC1jb2xsZWN0aW9uLWluZm8tcGFuZWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2FwcC1jb2xsZWN0aW9uLWluZm8tcGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9hcHAtc2VhcmNoLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9hcHAtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvZmlsdGVyaW5nL2FwcC1mYWNldC1jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2ZpbHRlcmluZy9hcHAtZmFjZXQtZmlsdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9maWx0ZXJpbmcvYXBwLWZhY2V0LWZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2ZpbHRlcmluZy9hcHAtZmlsdGVyLXBhbmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9maWx0ZXJpbmcvYXBwLWZpbHRlci1wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2ZpbHRlcmluZy9hcHAtZmlsdGVycy1wYW5lbC5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvZmlsdGVyaW5nL2FwcC1maWx0ZXJzLXBhbmVsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvZmlsdGVyaW5nL2FwcC1ub3JtYWwtY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2ZpbHRlcmluZy9hcHAtbm9ybWFsLWNoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvZmlsdGVyaW5nL2FwcC1yYW5nZS1maWx0ZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2ZpbHRlcmluZy9hcHAtcmFuZ2UtZmlsdGVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvZmlsdGVyaW5nL2FwcC10b3AtYWN0aXZlLWZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9maWx0ZXJpbmcvYXBwLXRvcC1hY3RpdmUtZmlsdGVycy50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9yZXN1bHRzL2FwcC1zZWFyY2gtZ3JpZC1yZXN1bHQuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3Jlc3VsdHMvYXBwLXNlYXJjaC1ncmlkLXJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3Jlc3VsdHMvYXBwLXNlYXJjaC1saXN0LXJlc3VsdC5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvcmVzdWx0cy9hcHAtc2VhcmNoLWxpc3QtcmVzdWx0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvcmVzdWx0cy9hcHAtc2VhcmNoLXJlc3VsdC1jcmVhdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9yZXN1bHRzL2FwcC1zZWFyY2gtcmVzdWx0LWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9yZXN1bHRzL2FwcC1zZWFyY2gtcmVzdWx0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvcmVzdWx0cy9hcHAtc2VhcmNoLXJlc3VsdHMtcGFuZWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3Jlc3VsdHMvYXBwLXNlYXJjaC1yZXN1bHRzLXBhbmVsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9hcHAtY29sbGVjdGlvbi1jYXJkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL2FwcC1jb2xsZWN0aW9uLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL2FwcC1yYW5nZS1zbGlkZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvYXBwLXJhbmdlLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvYXBwLXRhYnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvYXBwLXRhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2xpYi91dGlscy9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXItbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtB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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFR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O0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwRDs7Ozs7Ozs7Ozs7QUMxVUEsb0NBQW9DLHNCQUFzQixLQUFLLGFBQWEsb0JBQW9CLEtBQUssVUFBVSxjQUFjLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHlCQUF5Qix1QkFBdUIsOEJBQThCLDBCQUEwQiw4QkFBOEIsZ0RBQWdELEtBQUssZ0JBQWdCLDBEQUEwRCxvQkFBb0IsS0FBSyxvQkFBb0Isc0JBQXNCLHdCQUF3QiwwQ0FBMEMsNERBQTRELDRCQUE0QixLQUFLLHFaOzs7Ozs7Ozs7Ozs7QUNBdHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0Q7QUFDekI7O0FBRXZCLHNCQUFzQiwrRUFBYzs7QUFFbkQ7QUFDQTtBQUNBLG9CQUFvQixxREFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0IsdUJBQXVCLE1BQU07QUFDN0Isd0NBQXdDLE1BQU07QUFDOUMsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJDOzs7Ozs7Ozs7Ozs7QUMzREE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHFPQUEyRTtBQUN2RjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVlLCtGQUFnQyxFIiwiZmlsZSI6InBhZ2Utc2VhcmNoLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gc3ViY2xhc3MgPT4gXG4gIGNsYXNzIEZpbHRlcnNJbnRlcmZhY2UgZXh0ZW5kcyBzdWJjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5faW5qZWN0TW9kZWwoJ0ZpbHRlcnNNb2RlbCcpO1xuICAgIH1cblxuICB9IiwibW9kdWxlLmV4cG9ydHMgPSBzdWJjbGFzcyA9PiBcbiAgY2xhc3MgTWVkaWFJbnRlcmZhY2UgZXh0ZW5kcyBzdWJjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5faW5qZWN0TW9kZWwoJ01lZGlhTW9kZWwnKTtcbiAgICB9XG5cbiAgICBfZ2V0SW1nUGF0aChyZWNvcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLk1lZGlhTW9kZWwuZ2V0SW1nUGF0aChyZWNvcmQpO1xuICAgIH1cblxuICAgIF9nZXRJbWdVcmwocGF0aCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgcmV0dXJuIHRoaXMuTWVkaWFNb2RlbC5nZXRJbWdVcmwocGF0aCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgX2dldEltYWdlTWVkaWFMaXN0KHJvb3RSZWNvcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLk1lZGlhTW9kZWwuZ2V0SW1hZ2VNZWRpYUxpc3Qocm9vdFJlY29yZCk7XG4gICAgfVxuXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFtoaWRkZW5dIHtcXG4gICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXApO1xcbiAgfVxcblxcbiAgLmNvcHlCdXR0b24ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIC8qIHdpZHRoOiA4NXB4OyAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXNtKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5jb3B5QnV0dG9uW2FjdGl2ZV0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuICBcXG4gIC5jb3B5QnV0dG9uW2FjdGl2ZV0gc3BhbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjY2l0ZVRleHQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB9XFxuXFxuICAuYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IGhpZGRlbiQ9XFxcIltbY29weWluZ11dXFxcIiBpZD1cXFwiY2l0ZVRleHRcXFwiPjwvZGl2Plxcbjx0ZXh0YXJlYSBoaWRkZW4kPVxcXCJbWyFjb3B5aW5nXV1cXFwiIGlkPVxcXCJjb3B5QXJlYVxcXCI+PC90ZXh0YXJlYT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXG4gIDxkaXY+XFxuICAgIDxzbG90Pjwvc2xvdD5cXG4gIDwvZGl2PlxcbiAgPGJ1dHRvbiBhY3RpdmUkPVxcXCJbW2NvcHlpbmddXVxcXCIgb24tY2xpY2s9XFxcIl9vbkNvcHlDbGlja2VkXFxcIiBjbGFzcz1cXFwiY29weUJ1dHRvblxcXCI+XFxuICAgIDxpcm9uLWljb24gaWNvbj1cXFwiY29udGVudC1jb3B5XFxcIiBpZD1cXFwiaWNvblxcXCI+PC9pcm9uLWljb24+XFxuICAgIDxzcGFuPkNvcHk8L3NwYW4+XFxuICA8L2J1dHRvbj5cXG48L2Rpdj5cXG5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1jb3B5LWNpdGUuaHRtbFwiXG5pbXBvcnQgc3RyaXB0YWdzIGZyb20gXCJzdHJpcHRhZ3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb3B5Q2l0ZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0IDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnLFxuICAgICAgICBvYnNlcnZlciA6ICdfb25UZXh0VXBkYXRlJ1xuICAgICAgfSxcbiAgICAgIGNvcHlpbmcgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uVGV4dFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gJ3RleHQnIHByb3BlcnR5IG9ic2VydmVyXG4gICAqL1xuICBfb25UZXh0VXBkYXRlKCkge1xuICAgIHRoaXMuJC5jaXRlVGV4dC5pbm5lckhUTUwgPSB0aGlzLnRleHQgfHwgJyc7XG4gICAgdGhpcy4kLmNvcHlBcmVhLnZhbHVlID0gc3RyaXB0YWdzKHRoaXMudGV4dCkudHJpbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ29weUNsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGNvcHkgYnRuIGNsaWNrIGV2ZW50XG4gICAqL1xuICBfb25Db3B5Q2xpY2tlZCgpIHtcbiAgICAvLyBmaXJzdCBzZXQgY29ycmVjdCBoZWlnaHRcbiAgICB0aGlzLiQuY29weUFyZWEuc3R5bGUuaGVpZ2h0ID0gKHRoaXMuJC5jaXRlVGV4dC5vZmZzZXRIZWlnaHQtMTApKydweCc7XG4gICAgdGhpcy4kLmNvcHlBcmVhLnN0eWxlLndpZHRoID0gKHRoaXMuJC5jaXRlVGV4dC5vZmZzZXRXaWR0aC0xMCkrJ3B4JztcbiAgXG4gICAgdGhpcy5jb3B5aW5nID0gdHJ1ZTtcbiAgICAvLyB0aGlzLiQuY29weUFyZWEuc2VsZWN0KCk7XG4gICAgdGhpcy4kLmNvcHlBcmVhLmZvY3VzKCk7XG4gICAgdGhpcy4kLmNvcHlBcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTkpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiQ29weVwiKTtcbiAgICB0aGlzLiQuaWNvbi5pY29uID0gJ2NoZWNrJztcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy4kLmljb24uaWNvbiA9ICdjb250ZW50LWNvcHknO1xuICAgICAgdGhpcy5jb3B5aW5nID0gZmFsc2U7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1jb3B5LWNpdGUnLCBBcHBDb3B5Q2l0ZSk7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSBpbmNsdWRlPVxcXCJzaGFyZWQtc3R5bGVzXFxcIj5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuICBoMywgLmhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBtYXJnaW46IDVweCAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC5zZWN0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG4gIC5icmVhayB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgfVxcblxcbiAgc2VsZWN0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBvdXRsaW5lLW9mZnNldDogMXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbXMtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW8tYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAtby1ib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAzMHB4IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMHB4IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDZweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBeE1DQTJJajQ4WkdWbWN6NDhjM1I1YkdVK0xtTnNjeTB4ZTJacGJHdzZJekF3TWpnMU5UdDlQQzl6ZEhsc1pUNDhMMlJsWm5NK1BHYytQSEJ2YkhsbmIyNGdZMnhoYzNNOUltTnNjeTB4SWlCd2IybHVkSE05SWpBZ01DQXhNQ0F3SURVZ05pQXdJREFpTHo0OEwyYytQQzl6ZG1jKycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICB9XFxuICAvKiBmb3IgSUUgKi9cXG4gIHNlbGVjdDo6LW1zLWV4cGFuZCB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgY2xhc3M9XFxcInNlY3Rpb25cXFwiIGhpZGRlbiQ9XFxcIltbIXRpdGxlXV1cXFwiPlxcbiAgPGgzPltbdGl0bGVdXTwvaDM+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCIgaGlkZGVuJD1cXFwiW1shZGVzY3JpcHRpb25dXVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkRlc2NyaXB0aW9uPC9kaXY+XFxuICA8ZGl2IGlkPVxcXCJkZXNjcmlwdGlvblxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCIgaGlkZGVuJD1cXFwiW1shY292ZXJhZ2VdXVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkNvdmVyYWdlPC9kaXY+XFxuICA8ZGl2PltbY292ZXJhZ2VdXTwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImJyZWFrXFxcIj48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkNpdGUgdGhpcyBDb2xsZWN0aW9uPC9kaXY+XFxuPGRpdj5cXG4gIDxhcHAtY29weS1jaXRlIGlkPVxcXCJjb3B5Q2l0ZVxcXCIgdGV4dD1cXFwiW1tjaXRhdGlvbl1dXFxcIj5cXG4gICAgPHNlbGVjdCBpZD1cXFwiY2l0ZUZvcm1hdElucHV0XFxcIiB2YWx1ZSQ9XFxcIltbY2l0YXRpb25Gb3JtYXRdXVxcXCIgb24tY2hhbmdlPVxcXCJfb25DaXRlRm9ybWF0Q2hhbmdlXFxcIj5cXG4gICAgICA8dGVtcGxhdGUgaXM9XFxcImRvbS1yZXBlYXRcXFwiIGl0ZW1zPVxcXCJbW2VuZ2luZXNdXVxcXCI+XFxuICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJbW2l0ZW0uZW5naW5lXV1cXFwiPltbaXRlbS5sYWJlbF1dPC9vcHRpb24+XFxuICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgPC9zZWxlY3Q+XFxuICA8L2FwcC1jb3B5LWNpdGU+XFxuPC9kaXY+XFxuXCI7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCB7bWFya2Rvd259IGZyb20gXCJtYXJrZG93blwiXG5cbmltcG9ydCBcIi4uL3JlY29yZC9hcHAtY29weS1jaXRlXCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtY29sbGVjdGlvbi1pbmZvLXBhbmVsLmh0bWxcIlxuaW1wb3J0IENpdGF0aW9uc01vZGVsIGZyb20gXCIuLi8uLi8uLi9saWIvbW9kZWxzL0NpdGF0aW9uc01vZGVsXCJcblxuY2xhc3MgQXBwQ29sbGVjdGlvbkluZm9QYW5lbCBleHRlbmRzIE1peGluKFBvbHltZXJFbGVtZW50KVxuICAgICAgLndpdGgoRXZlbnRJbnRlcmZhY2UpIHtcbiAgXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dpbmcgOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX29uU2hvd2luZ1VwZGF0ZSdcbiAgICAgIH0sXG4gICAgICB0aXRsZSA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIGNvdmVyYWdlIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgc3ViamVjdCA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIGNpdGF0aW9uIDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBjaXRhdGlvbkZvcm1hdCA6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICdtbGEnXG4gICAgICB9LFxuICAgICAgZW5naW5lcyA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6IFtdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5maXJzdFNob3cgPSB0cnVlO1xuXG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ1JlY29yZE1vZGVsJywgJ0FwcFN0YXRlTW9kZWwnKTtcbiAgfVxuXG4gIGFzeW5jIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fb25TZWxlY3RlZENvbGxlY3Rpb25VcGRhdGUodGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkQ29sbGVjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlbGVjdGVkQ29sbGVjdGlvblVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBDb2xsZWN0aW9uSW50ZXJmYWNlLCBjYWxsZWQgd2hlbiBhIGNvbGxlY3Rpb24gaXMgc2VsZWN0ZWQuXG4gICAqIFRoaXMgaXMgZG9uZSBieSBzZXR0aW5nIGEgY29sbGVjdGlvbiBmaWx0ZXIuXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0ZWQgY3VycmVudGx5IHNlbGVjdGVkIGNvbGxlY3Rpb24gXG4gICAqL1xuICBhc3luYyBfb25TZWxlY3RlZENvbGxlY3Rpb25VcGRhdGUoc2VsZWN0ZWQpIHtcbiAgICBpZiggIXNlbGVjdGVkICkge1xuICAgICAgdGhpcy50aXRsZSA9ICcnO1xuICAgICAgdGhpcy4kLmRlc2NyaXB0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgICAgdGhpcy5zdWJqZWN0ID0gJyc7XG4gICAgICB0aGlzLmNvdmVyYWdlID0gJyc7XG4gICAgICB0aGlzLmNpdGF0aW9uID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb2xsZWN0aW9uID0gc2VsZWN0ZWQ7XG4gICAgdGhpcy50aXRsZSA9IHNlbGVjdGVkLm5hbWUgfHwgJyc7XG4gICAgdGhpcy4kLmRlc2NyaXB0aW9uLmlubmVySFRNTCA9IG1hcmtkb3duLnRvSFRNTChzZWxlY3RlZC5kZXNjcmlwdGlvbiB8fCAnJyk7XG5cbiAgICBpZiggc2VsZWN0ZWQuc3ViamVjdCApIHtcbiAgICAgIHRoaXMuc3ViamVjdCA9IHNlbGVjdGVkLnN1YmplY3Quam9pbignLCAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJqZWN0ID0gJyc7XG4gICAgfVxuXG4gICAgaWYoIHNlbGVjdGVkLmNvdmVyYWdlICkge1xuICAgICAgdGhpcy5jb3ZlcmFnZSA9IHNlbGVjdGVkLmNvdmVyYWdlLmpvaW4oJywgJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDb2xsZWN0aW9uSWQgPSBzZWxlY3RlZFsnQGlkJ107XG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZWNvcmRNb2RlbC5kZWZhdWx0U2VhcmNoKHNlbGVjdGVkWydAaWQnXSk7XG4gICAgICBpZiggcmVzdWx0LmlkICE9PSB0aGlzLnNlbGVjdGVkQ29sbGVjdGlvbklkICkgcmV0dXJuOyAvLyBtYWtlIHN1cmUgd2UgaGF2ZW4ndCB1cGRhdGVkXG5cbiAgICAgIGlmKCByZXN1bHQucGF5bG9hZCAmJiByZXN1bHQucGF5bG9hZC5hZ2dyZWdhdGlvbnMgJiYgcmVzdWx0LnBheWxvYWQuYWdncmVnYXRpb25zLnJhbmdlcyAmJlxuICAgICAgICByZXN1bHQucGF5bG9hZC5hZ2dyZWdhdGlvbnMucmFuZ2VzLnllYXJQdWJsaXNoZWQgKSB7XG4gICAgICAgIGxldCB5ZWFyUHVibGlzaGVkID0gcmVzdWx0LnBheWxvYWQuYWdncmVnYXRpb25zLnJhbmdlcy55ZWFyUHVibGlzaGVkO1xuICAgICAgICB0aGlzLmNvdmVyYWdlID0geWVhclB1Ymxpc2hlZC5taW4rJyAtICcreWVhclB1Ymxpc2hlZC5tYXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvdmVyYWdlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoICF0aGlzLmZpcnN0U2hvdyApIHtcbiAgICAgIHRoaXMuX29uQ2l0ZUZvcm1hdENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9vblNob3dpbmdVcGRhdGUoKSB7XG4gICAgaWYoICF0aGlzLnNob3dpbmcgKSByZXR1cm47XG4gICAgaWYoICF0aGlzLmZpcnN0U2hvdyApIHJldHVybjtcbiAgICB0aGlzLmZpcnN0U2hvdyA9IGZhbHNlO1xuXG4gICAgdGhpcy5lbmdpbmVzID0gQ2l0YXRpb25zTW9kZWwuZW5naW5lTGlzdC5tYXAoKGVuZ2luZSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB7ZW5naW5lLCBsYWJlbDogQ2l0YXRpb25zTW9kZWwuZW5naW5lTGlzdExhYmVsc1tpbmRleF19XG4gICAgfSk7XG4gICAgYXdhaXQgQ2l0YXRpb25zTW9kZWwuX2xvYWRFbmdpbmVzKCk7XG4gICAgYXdhaXQgdGhpcy5fb25DaXRlRm9ybWF0Q2hhbmdlKCk7XG4gIH1cblxuICBhc3luYyBfb25DaXRlRm9ybWF0Q2hhbmdlKCkge1xuICAgIHRoaXMuY2l0YXRpb24gPSBhd2FpdCBDaXRhdGlvbnNNb2RlbC5yZW5kZXJFc1JlY29yZCh0aGlzLmNvbGxlY3Rpb24sIHRoaXMuJC5jaXRlRm9ybWF0SW5wdXQudmFsdWUpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtY29sbGVjdGlvbi1pbmZvLXBhbmVsJywgQXBwQ29sbGVjdGlvbkluZm9QYW5lbCk7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSBpbmNsdWRlPVxcXCJzaGFyZWQtc3R5bGVzXFxcIj5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cGVyLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5zZWFyY2gtY29udGVudCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xcbiAgfVxcblxcbiAgYXBwLWZpbHRlcnMtcGFuZWwge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGxpbmVhcjtcXG4gIH1cXG4gIGFwcC1maWx0ZXJzLXBhbmVsW3dpZGVdIHtcXG4gICAgd2lkdGg6IDQ3NXB4O1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICBvcGFjaXR5OiAuNztcXG4gICAgfVxcbiAgfVxcblxcbiAgI2Rlc2t0b3AtZmlsdGVyLXBhbmVsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIEBtZWRpYSggbWF4LXdpZHRoOiAxMDI1cHggKSB7XFxuICAgIGFwcC1maWx0ZXJzLXBhbmVsW3dpZGVdIHtcXG4gICAgICB3aWR0aDogNDE1cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSggbWluLXdpZHRoOiA5NzVweCApIHtcXG4gICAgI2Rlc2t0b3AtZmlsdGVyLXBhbmVsIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICAuc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBjbGFzcz1cXFwic2VhcmNoLWNvbnRhaW5lclxcXCI+XFxuICA8YXBwLWZpbHRlcnMtcGFuZWwgaWQ9XFxcImRlc2t0b3AtZmlsdGVyLXBhbmVsXFxcIiB3aWRlJD1cXFwiW1t3aWRlRmlsdGVyc1BhbmVsXV1cXFwiIG9uLXNlbGVjdGVkLXRhYi1jaGFuZ2VkPVxcXCJfb25GaWx0ZXJzVGFiVXBkYXRlXFxcIj48L2FwcC1maWx0ZXJzLXBhbmVsPlxcbiAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLWNvbnRlbnRcXFwiPlxcbiAgICA8YXBwLXNlYXJjaC1yZXN1bHRzLXBhbmVsIFxcbiAgICAgIGlkPVxcXCJyZXN1bHRzUGFuZWxcXFwiIFxcbiAgICAgIG9uLXRvZ2dsZS1kcmF3ZXI9XFxcIl90b2dnbGVEcmF3ZXJcXFwiIFxcbiAgICAgIG9uLXBhZ2Utc2l6ZS1jaGFuZ2U9XFxcIl9vblBhZ2VTaXplQ2hhbmdlXFxcIlxcbiAgICAgIG9uLXBhZ2UtY2hhbmdlPVxcXCJfb25QYWdpbmF0aW9uQ2hhbmdlXFxcIj5cXG4gICAgPC9hcHAtc2VhcmNoLXJlc3VsdHMtcGFuZWw+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1zZWFyY2guaHRtbFwiO1xuXG5pbXBvcnQgXCIuL3Jlc3VsdHMvYXBwLXNlYXJjaC1yZXN1bHRzLXBhbmVsXCJcbmltcG9ydCBcIi4vZmlsdGVyaW5nL2FwcC1maWx0ZXJzLXBhbmVsXCJcblxuaW1wb3J0IEFwcFN0YXRlSW50ZXJmYWNlIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvQXBwU3RhdGVJbnRlcmZhY2UnXG5pbXBvcnQgUmVjb3JkSW50ZXJmYWNlIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvUmVjb3JkSW50ZXJmYWNlJ1xuaW1wb3J0IENvbGxlY3Rpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9Db2xsZWN0aW9uSW50ZXJmYWNlJ1xuXG5leHBvcnQgY2xhc3MgQXBwU2VhcmNoIGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gICAgICAgICAgICAud2l0aChFdmVudEludGVyZmFjZSwgUmVjb3JkSW50ZXJmYWNlLCBDb2xsZWN0aW9uSW50ZXJmYWNlLCBBcHBTdGF0ZUludGVyZmFjZSkge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2libGUgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICAgIC8vIG9ic2VydmVyIDogJ19vblZpc2libGVVcGRhdGUnXG4gICAgICB9LFxuICAgICAgcmVzdWx0cyA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IFtdXG4gICAgICB9LFxuICAgICAgZHJhd2VyT3BlbiA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBmaXJzdExvYWQgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IHRydWVcbiAgICAgIH0sXG4gICAgICBhcHBTdGF0ZSA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiAoe30pXG4gICAgICB9LFxuICAgICAgd2lkZUZpbHRlcnNQYW5lbCA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyB0aGlzLl9pbml0U3RhdGUoKTtcbiAgfVxuXG4gIC8vIGFzeW5jIF9pbml0U3RhdGUoKSB7XG4gIC8vICAgbGV0IHN0YXJ0U3RhdGUgPSBhd2FpdCB0aGlzLl9nZXRBcHBTdGF0ZSgpO1xuICAvLyAgIGlmKCBzdGFydFN0YXRlLmxvY2F0aW9uLnBhdGhbMF0gPT09ICdzZWFyY2gnICkge1xuICAvLyAgICAgdGhpcy5hcHBTdGF0ZSA9IHN0YXJ0U3RhdGU7XG4gIC8vICAgICB0aGlzLl9zZWFyY2hGcm9tQXBwU3RhdGUoKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFwcFN0YXRlSW50ZXJmYWNlLCBmaXJlZCB3aGVuIHN0YXRlIHVwZGF0ZXNcbiAgICogQHBhcmFtIHsqfSBlIFxuICAgKi9cbiAgX29uQXBwU3RhdGVVcGRhdGUoZSkge1xuICAgIHRoaXMuZHJhd2VyT3BlbiA9IGUuZmlsdGVyc0RyYXdlck9wZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5hcHBTdGF0ZSA9IGU7XG4gICAgaWYoIFxuICAgICAgZS5sb2NhdGlvbi5wYXRoWzBdICE9PSAnc2VhcmNoJyAmJlxuICAgICAgZS5sb2NhdGlvbi5wYXRoWzBdICE9PSAnY29sbGVjdGlvbidcbiAgICApIHJldHVybjtcbiAgICB0aGlzLl9zZWFyY2hGcm9tQXBwU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zZWFyY2hGcm9tQXBwU3RhdGVcbiAgICogQGRlc2NyaXB0aW9uIHVzZSBjdXJyZW50IGFwcCBzdGF0ZSB0byBwcmVmb3JtIGEgc2VhcmNoLCBzaG91bGQgYmUgY2FsbGVkIG9uIGZpcnN0IGxvYWRcbiAgICogb3IgaWYgc3RhdGUgdXBkYXRlIGV2ZW50IGlzIGZyb20gcG9wdXAgc3RhdGUgKGZvcndhcmQsIGJhY2sgYnV0dG9uIGhpdClcbiAgICovXG4gIF9zZWFyY2hGcm9tQXBwU3RhdGUoKSB7XG4gICAgaWYoICF0aGlzLmRyYXdlck9wZW4gfHwgd2luZG93LmlubmVyV2lkdGggPiA5NzUgKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuXG4gICAgdGhpcy5maXJzdExvYWQgPSBmYWxzZTtcblxuICAgIGxldCBzZWFyY2hVcmxQYXJ0cyA9IHRoaXMuYXBwU3RhdGUubG9jYXRpb24ucGF0aDtcbiAgICBsZXQgcXVlcnk7XG5cbiAgICBpZiggc2VhcmNoVXJsUGFydHNbMF0gPT09ICdjb2xsZWN0aW9uJyApIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5fdXJsVG9TZWFyY2hEb2N1bWVudChbJycsIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIC8vIFtcImlzUGFydE9mLkBpZFwiLFwib3JcIixgL2NvbGxlY3Rpb24vJHtzZWFyY2hVcmxQYXJ0c1sxXX1gXVxuICAgICAgICBbXCJjb2xsZWN0aW9uSWRcIixcIm9yXCIsYC9jb2xsZWN0aW9uLyR7c2VhcmNoVXJsUGFydHNbMV19YF1cbiAgICAgIF0pKSwnJywgJzEwJ10pO1xuXG4gICAgICBpZiggdGhpcy5sYXN0UXVlcnkgPT09IHF1ZXJ5ICkgcmV0dXJuO1xuICAgICAgdGhpcy5sYXN0UXVlcnkgPSBxdWVyeTtcblxuICAgICAgdGhpcy5fc2VhcmNoUmVjb3JkcyhxdWVyeSwgZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiggc2VhcmNoVXJsUGFydHNbMF0gPT09ICdzZWFyY2gnICYmIHNlYXJjaFVybFBhcnRzLmxlbmd0aCA+IDEgKSB7XG4gICAgICBxdWVyeSA9IHRoaXMuX3VybFRvU2VhcmNoRG9jdW1lbnQoc2VhcmNoVXJsUGFydHMuc2xpY2UoMSwgc2VhcmNoVXJsUGFydHMubGVuZ3RoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5SZWNvcmRNb2RlbC5lbXB0eVNlYXJjaERvY3VtZW50KCk7XG4gICAgfVxuICAgIFxuICAgIGlmKCB0aGlzLmxhc3RRdWVyeSA9PT0gcXVlcnkgKSByZXR1cm47XG4gICAgdGhpcy5sYXN0UXVlcnkgPSBxdWVyeTtcblxuICAgIHRoaXMuX3NlYXJjaFJlY29yZHMocXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uRXNTZWFyY2hVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIFJlY29yZEludGVyZmFjZSwgZmlyZWQgd2hlbiBzZWFyY2ggdXBkYXRlc1xuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgXG4gICAqL1xuICBfb25SZWNvcmRTZWFyY2hVcGRhdGUoZSkge1xuICAgIGlmKCBlLnN0YXRlID09PSAnZXJyb3InICkge1xuICAgICAgcmV0dXJuIHRoaXMuJC5yZXN1bHRzUGFuZWwub25FcnJvcihlKTtcbiAgICB9IGVsc2UgaWYoIGUuc3RhdGUgPT09ICdsb2FkaW5nJyApIHtcbiAgICAgIHJldHVybiB0aGlzLiQucmVzdWx0c1BhbmVsLm9uTG9hZGluZygpO1xuICAgIH1cblxuICAgIGlmKCBlLnN0YXRlICE9PSAnbG9hZGVkJyApIHJldHVybjtcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSBlLnNlYXJjaERvY3VtZW50Lm9mZnNldDtcbiAgICBsZXQgcGF5bG9hZCA9IGUucGF5bG9hZDtcbiAgICBsZXQgdG90YWwgPSBwYXlsb2FkLnRvdGFsO1xuICAgIHRoaXMucmVzdWx0cyA9IHBheWxvYWQucmVzdWx0cztcblxuICAgIHRoaXMuJC5yZXN1bHRzUGFuZWwucmVuZGVyKHRoaXMucmVzdWx0cywgdG90YWwsIGUuc2VhcmNoRG9jdW1lbnQubGltaXQsIGN1cnJlbnRJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25QYWdlU2l6ZUNoYW5nZVxuICAgKiBAZGVzY3JpcHRpb24gZmlyZWQgd2hlbiB0aGVuIHVzZXIgc2VsZWN0cyBhIG5ldyBwYWdlIHNpemVcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxuICAgKi9cbiAgX29uUGFnZVNpemVDaGFuZ2UoZSkge1xuICAgIGxldCBzZWFyY2hEb2MgPSB0aGlzLl9nZXRDdXJyZW50U2VhcmNoRG9jdW1lbnQoKTtcbiAgICB0aGlzLl9zZXRQYWdpbmcoc2VhcmNoRG9jLCBzZWFyY2hEb2Mub2Zmc2V0LCBlLmRldGFpbCk7XG4gICAgdGhpcy5SZWNvcmRNb2RlbC5zZXRTZWFyY2hMb2NhdGlvbihzZWFyY2hEb2MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uUGFnaW5hdGlvbkNoYW5nZVxuICAgKiBAZGVzY3JpcHRpb24gZmlyZWQgd2hlbiBwYWdpbmF0aW9uIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcbiAgICovXG4gIF9vblBhZ2luYXRpb25DaGFuZ2UoZSkge1xuICAgIGxldCBzZWFyY2hEb2MgPSB0aGlzLl9nZXRDdXJyZW50U2VhcmNoRG9jdW1lbnQoKTtcbiAgICB0aGlzLl9zZXRQYWdpbmcoc2VhcmNoRG9jLCBlLmRldGFpbC5zdGFydEluZGV4KTtcbiAgICB0aGlzLlJlY29yZE1vZGVsLnNldFNlYXJjaExvY2F0aW9uKHNlYXJjaERvYyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfdG9nZ2xlRHJhd2VyXG4gICAqIEBkZXNjcmlwdGlvbiB0b2dnbGVzIHRoZSBkcmF3ZXIgc3RhdGUuICBMaXN0ZW5zIHRvIFxuICAgKiB0b2dnbGUtZHJhd2VyIGV2ZW50IGZyb20gYXBwLXNlYXJjaC1yZXN1bHRzLXBhbmVsXG4gICAqL1xuICBfdG9nZ2xlRHJhd2VyKCkge1xuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXQoe2ZpbHRlcnNEcmF3ZXJPcGVuOiAhdGhpcy5kcmF3ZXJPcGVufSk7XG4gIH1cblxuICBfb25GaWx0ZXJzVGFiVXBkYXRlKGUpIHtcbiAgICB0aGlzLndpZGVGaWx0ZXJzUGFuZWwgPSBlLmRldGFpbC52YWx1ZSA9PT0gJ2luZm8nID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy4kLnJlc3VsdHNQYW5lbC5fcmVzaXplQXN5bmMoKTtcbiAgICAgIH0pO1xuICAgIH0sIDMwMCk7XG4gICAgXG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1zZWFyY2gnLCBBcHBTZWFyY2gpOyIsImltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiXG5cbmltcG9ydCBcIi4vYXBwLW5vcm1hbC1jaGVja2JveFwiXG5cbmNsYXNzIEFwcEZhY2V0Q2hlY2tib3ggZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIFxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICB2YWx1ZSA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJyxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX29uVmFsdWVDaGFuZ2UnXG4gICAgICB9LFxuICAgICAgbGFiZWxNYXAgOiB7XG4gICAgICAgIHR5cGUgOiBPYmplY3QsXG4gICAgICAgIHZhbHVlIDogKCkgPT4ge31cbiAgICAgIH0sXG4gICAgICBjaGVja2VkIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5IDogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX29uQ2hlY2tlZENoYW5nZSdcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgLy8gICByZXR1cm4gYCBgO1xuICAvLyB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIHRoaXMuZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXBwLW5vcm1hbC1jaGVja2JveCcpO1xuICAgIHRoaXMuZWxlLmxhYmVsID0gdGhpcy5fZ2V0TGFiZWwoKTtcbiAgICBcbiAgICB0aGlzLl9zZXRWYWx1ZSgpO1xuICAgIGlmKCB0aGlzLmNoZWNrZWQgKSB7XG4gICAgICB0aGlzLmVsZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoZWNrZWQtY2hhbmdlZCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5lbGUpO1xuICB9XG5cbiAgX3NldFZhbHVlKCkge1xuICAgIGlmKCB0aGlzLnZhbHVlICkge1xuICAgICAgdGhpcy5lbGUudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy5lbGUubGFiZWwgPSB0aGlzLl9nZXRMYWJlbCgpO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRMYWJlbCgpIHtcbiAgICBpZiggdGhpcy5sYWJlbE1hcCAmJiB0aGlzLmxhYmVsTWFwW3RoaXMudmFsdWVdICkge1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxNYXBbdGhpcy52YWx1ZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgX29uQ2hlY2tlZENoYW5nZSgpIHtcbiAgICBpZiggIXRoaXMuZWxlIHx8IHRoaXMuZWxlLmNoZWNrZWQgPT09IHRoaXMuY2hlY2tlZCApIHJldHVybjtcbiAgICB0aGlzLmVsZS5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xuICB9XG5cbiAgX29uVmFsdWVDaGFuZ2UoKSB7XG4gICAgaWYoICF0aGlzLmVsZSApIHJldHVybjtcbiAgICB0aGlzLmVsZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy52YWx1ZSk7XG4gIH1cblxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZmFjZXQtY2hlY2tib3gnLCBBcHBGYWNldENoZWNrYm94KTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlIGluY2x1ZGU9XFxcInNoYXJlZC1zdHlsZXNcXFwiPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9ja1xcbiAgfVxcblxcbiAgLmZpbHRlciB7XFxuICAgIHBhZGRpbmc6IDRweCA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuZmlsdGVyIGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLW91dCwgdHJhbnNmb3JtIDI1MG1zIGVhc2Utb3V0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgLmZpbHRlciBhIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG4gIC5maWx0ZXIgYTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAudHlwZWhlYWQtcGFuZWwge1xcbiAgICBtYXJnaW46IDAgMjhweCAxMHB4IDVweDtcXG4gIH1cXG4gICN0eXBlYWhlYWQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhciggLS1zdXBlci1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuXFxuICAuYWN0aXZlLWZpbHRlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW46IDNweDtcXG4gIH1cXG5cXG4gIC5hY3RpdmUtZmlsdGVyOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6ICNjY2M7XFxuICB9XFxuXFxuICAuY291bnQge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kaXNhYmxlZCk7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBtaW4td2lkdGggOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICB9XFxuXFxuICAub3ZlcmZsb3cge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICB9XFxuXFxuICBpcm9uLWxpc3Qge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgYXBwLW5vcm1hbC1jaGVja2JveCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIH1cXG5cXG4gIHBhcGVyLWNoZWNrYm94W2FjdGl2ZV0gLmtleSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIHBhcGVyLWNoZWNrYm94W2Rpc2FibGVkXSAua2V5IHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPCEtLSB0eXBlYWhlYWQgc2VhcmNoIC0tPlxcbjxkaXYgY2xhc3M9XFxcInR5cGVoZWFkLXBhbmVsXFxcIiBoaWRkZW4kPVxcXCJbWyFpbmNsdWRlVHlwZWFoZWFkXV1cXFwiPlxcbiAgPGlucHV0IGlkPVxcXCJ0eXBlYWhlYWRcXFwiIFxcbiAgICB0eXBlPVxcXCJ0ZXh0XFxcIiBcXG4gICAgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBbW2xhYmVsXV1zXFxcIiBcXG4gICAgb24ta2V5dXA9XFxcIl9vblR5cGVhaGVhZEtleXVwXFxcIiAvPlxcbjwvZGl2PlxcblxcbjwhLS0gdXNlZCBmb3IgbGFyZ2UgbGlzdHMgLS0+XFxuPGlyb24tbGlzdCBpZD1cXFwibGlzdFxcXCIgaXRlbXM9XFxcIltbYnVja2V0c0lyb25MaXN0XV1cXFwiIGFzPVxcXCJpdGVtXFxcIj5cXG4gIDx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmlsdGVyXFxcIj5cXG5cXG4gICAgICA8YXBwLW5vcm1hbC1jaGVja2JveFxcbiAgICAgICAgdHlwZSQ9XFxcIltbbGFiZWxdXVxcXCJcXG4gICAgICAgIGluZGV4JD1cXFwiW1tpbmRleF1dXFxcIlxcbiAgICAgICAgdmFsdWUkPVxcXCJbW2l0ZW0ua2V5XV1cXFwiXFxuICAgICAgICBsYWJlbC1tYXA9XFxcIltbdmFsdWVNYXBdXVxcXCJcXG4gICAgICAgIGNoZWNrZWQkPVxcXCJbW2l0ZW0uYWN0aXZlXV1cXFwiIFxcbiAgICAgICAgb24tY2hhbmdlPVxcXCJfdG9nZ2xlRmlsdGVyXFxcIlxcbiAgICAgICAgZGlzYWJsZWQkPVxcXCJbW2l0ZW0uZGlzYWJsZWRdXVxcXCI+XFxuICAgICAgPC9hcHAtbm9ybWFsLWNoZWNrYm94PlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvdW50XFxcIj5bW2l0ZW0uZG9jX2NvdW50XV08L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L3RlbXBsYXRlPlxcbjwvaXJvbi1saXN0PlxcblxcbjwhLS0gdXNlZCBmb3Igc21hbGwgbGlzdHMgLS0+XFxuPGRpdiBjbGFzcz1cXFwib3ZlcmZsb3dcXFwiPlxcbiAgPGRpdj4gIFxcbiAgICA8dGVtcGxhdGUgaXM9XFxcImRvbS1yZXBlYXRcXFwiIGl0ZW1zPVxcXCJbW2J1Y2tldHNdXVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsdGVyXFxcIj5cXG5cXG4gICAgICAgIDxhcHAtbm9ybWFsLWNoZWNrYm94XFxuICAgICAgICAgIHR5cGUkPVxcXCJbW2xhYmVsXV1cXFwiXFxuICAgICAgICAgIGluZGV4JD1cXFwiW1tpbmRleF1dXFxcIlxcbiAgICAgICAgICB2YWx1ZSQ9XFxcIltbaXRlbS5rZXldXVxcXCJcXG4gICAgICAgICAgbGFiZWwtbWFwPVxcXCJbW3ZhbHVlTWFwXV1cXFwiXFxuICAgICAgICAgIGNoZWNrZWQkPVxcXCJbW2l0ZW0uYWN0aXZlXV1cXFwiIFxcbiAgICAgICAgICBvbi1jaGFuZ2U9XFxcIl90b2dnbGVGaWx0ZXJcXFwiXFxuICAgICAgICAgIGRpc2FibGVkJD1cXFwiW1tpdGVtLmRpc2FibGVkXV1cXFwiPlxcbiAgICAgICAgPC9hcHAtbm9ybWFsLWNoZWNrYm94PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY291bnRcXFwiPltbaXRlbS5kb2NfY291bnRdXTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3RlbXBsYXRlPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcblxuaW1wb3J0IEZpbHRlcnNJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9GaWx0ZXJzSW50ZXJmYWNlJ1xuaW1wb3J0IFJlY29yZEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL1JlY29yZEludGVyZmFjZSdcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYXBwLWZhY2V0LWZpbHRlci5odG1sJ1xuXG5pbXBvcnQgY2xvbmUgZnJvbSBcImNsb25lXCJcbmltcG9ydCBcIi4vYXBwLWZhY2V0LWNoZWNrYm94XCJcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24tbGlzdFwiXG5cbmNsYXNzIEFwcEZhY2V0RmlsdGVyIGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gIC53aXRoKEV2ZW50SW50ZXJmYWNlLCBGaWx0ZXJzSW50ZXJmYWNlLCBSZWNvcmRJbnRlcmZhY2UpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgZmlsdGVyIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgaWdub3JlIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW11cbiAgICAgIH0sXG4gICAgICB2YWx1ZU1hcCA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiBudWxsLFxuICAgICAgfSxcbiAgICAgIGJ1Y2tldHMgOiB7XG4gICAgICAgIHR5cGUgOiBBcnJheSxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiBbXVxuICAgICAgfSxcbiAgICAgIGJ1Y2tldHNJcm9uTGlzdCA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IFtdXG4gICAgICB9LFxuICAgICAgaXJvbkxpc3RBY3RpdmUgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbm90aWZpZWQgOiB7XG4gICAgICAgIHR5cGUgOiBPYmplY3QsXG4gICAgICAgIHZhbHVlIDogKCkgPT4gKHt9KVxuICAgICAgfSxcbiAgICAgIGluY2x1ZGVUeXBlYWhlYWQgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuICAgICAgdHlwZWFoZWFkRmllbGQgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVUaW1lciA9IC0xO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLiQubGlzdC5maXJlKCdpcm9uLXJlc2l6ZScpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIF9vbkZpbHRlckJ1Y2tldHNVcGRhdGUoZSkge1xuICAgIGlmKCBlLmZpbHRlciAhPT0gdGhpcy5maWx0ZXIgKSByZXR1cm47XG5cbiAgICBlLmJ1Y2tldHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmKCB0aGlzLm5vdGlmaWVkW2l0ZW0ua2V5XSAmJiAhaXRlbS5hY3RpdmUgKSB7XG4gICAgICAgIHRoaXMuX25vdGlmeVNlbGVjdGVkKGl0ZW0uYWN0aXZlLCBpdGVtLmtleSk7XG4gICAgICB9IGVsc2UgaWYoICF0aGlzLm5vdGlmaWVkW2l0ZW0ua2V5XSAmJiBpdGVtLmFjdGl2ZSApIHtcbiAgICAgICAgdGhpcy5fbm90aWZ5U2VsZWN0ZWQoaXRlbS5hY3RpdmUsIGl0ZW0ua2V5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKCBPYmplY3Qua2V5cyhlLmJ1Y2tldHMpLmxlbmd0aCA+IDUwICkge1xuICAgICAgdGhpcy4kLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBsZXQgdG9wID0gdGhpcy4kLmxpc3Quc2Nyb2xsVG9wO1xuXG4gICAgICB0aGlzLmJ1Y2tldHNJcm9uTGlzdCA9IGUuYnVja2V0cztcbiAgICAgIHRoaXMuYnVja2V0cyA9IFtdO1xuICAgICAgdGhpcy5pcm9uTGlzdEFjdGl2ZSA9IHRydWU7XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBjaGFuZ2Ugc2Nyb2xsIHBvc2l0aW9uXG4gICAgICB0aGlzLiQubGlzdC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLiQubGlzdC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuYnVja2V0c0lyb25MaXN0ID0gW107XG4gICAgICB0aGlzLmJ1Y2tldHMgPSBlLmJ1Y2tldHM7XG4gICAgICB0aGlzLmlyb25MaXN0QWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KCd1cGRhdGUtdmlzaWJpbGl0eScsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2hvdzogKGUuYnVja2V0cy5sZW5ndGggIT09IDApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldEJ1Y2tldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXJvbkxpc3RBY3RpdmUgPyB0aGlzLmJ1Y2tldHNJcm9uTGlzdCA6IHRoaXMuYnVja2V0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIG9uUGFyZW50RmlsdGVyQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gY2FsbGVkIGZyb20gcGFyZW50IHRvZ2dsZSBwYW5lbCB3aGVuIHNlbGVjdGVkIGZpbHRlclxuICAgKiBpcyBjbGlja2VkXG4gICAqIFxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IGZpbHRlciBrZXkgXG4gICAqL1xuICBvblBhcmVudEZpbHRlckNsaWNrZWQoa2V5KSB7XG4gICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuX2dldEN1cnJlbnRTZWFyY2hEb2N1bWVudCgpO1xuICAgIHRoaXMuX3NldFBhZ2luZyhzZWFyY2hEb2MsIDApO1xuICAgIHRoaXMuX3JlbW92ZUtleXdvcmRGaWx0ZXIoc2VhcmNoRG9jLCB0aGlzLmZpbHRlciwga2V5KTtcbiAgICB0aGlzLlJlY29yZE1vZGVsLnNldFNlYXJjaExvY2F0aW9uKHNlYXJjaERvYyk7XG5cbiAgICB0aGlzLl9ub3RpZnlTZWxlY3RlZChmYWxzZSwga2V5KTtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBfbm90aWZ5U2VsZWN0ZWRcbiAgICogQGRlc2NyaXB0aW9uIG5vdGlmeSBwYXJlbnQgb2Ygc2VsZWN0ZWQvdW5zZWxlY3RlZCBmaWx0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2VsZWN0ZWQgaXMgdGhlIGZpbHRlciBzZWxlY3RlZFxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IGZpbHRlciBrZXkvbGFiZWxcbiAgICovXG4gIF9ub3RpZnlTZWxlY3RlZChzZWxlY3RlZCwga2V5KSB7XG4gICAgaWYoICFzZWxlY3RlZCAmJiB0aGlzLm5vdGlmaWVkW2tleV0gKSB7XG4gICAgICBkZWxldGUgdGhpcy5ub3RpZmllZFtrZXldO1xuICAgIH0gZWxzZSBpZiggc2VsZWN0ZWQgKSB7XG4gICAgICB0aGlzLm5vdGlmaWVkW2tleV0gPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudChgJHtzZWxlY3RlZCA/ICdhZGQnIDogJ3JlbW92ZSd9LXNlbGVjdGVkYCwge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBsYWJlbDoga2V5XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIF90b2dnbGVGaWx0ZXIoZSkge1xuICAgIGlmKCBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCApIHRoaXMuYXBwZW5kRmlsdGVyKGUpO1xuICAgIGVsc2UgdGhpcy5yZW1vdmVGaWx0ZXIoZSk7XG4gIH1cblxuICBhcHBlbmRGaWx0ZXIoZSkge1xuICAgIGxldCBidWNrZXRzID0gdGhpcy5nZXRCdWNrZXRzKCk7XG4gICAgbGV0IGl0ZW0gPSBidWNrZXRzW3BhcnNlSW50KGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZGV4JykpXTtcbiAgICBpZiggaXRlbS5lbXB0eSApIHJldHVybjtcblxuICAgIC8vIHJlc2V0IHR5cGVhaGVhZCBpbmNhc2UgaXQgd2FzIGFjdGl2ZVxuICAgIHRoaXMuJC50eXBlYWhlYWQudmFsdWUgPSAnJztcbiAgICBpZiggdGhpcy5vcmlnaW5hbEJ1Y2tldHMgKSB7XG4gICAgICB0aGlzLm9yaWdpbmFsQnVja2V0cyA9IG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuX2dldEN1cnJlbnRTZWFyY2hEb2N1bWVudCgpO1xuICAgIHRoaXMuX3NldFBhZ2luZyhzZWFyY2hEb2MsIDApO1xuICAgIHRoaXMuX2FwcGVuZEtleXdvcmRGaWx0ZXIoc2VhcmNoRG9jLCB0aGlzLmZpbHRlciwgaXRlbS5rZXkpO1xuICAgIHRoaXMuUmVjb3JkTW9kZWwuc2V0U2VhcmNoTG9jYXRpb24oc2VhcmNoRG9jKTtcblxuICAgIHRoaXMuX25vdGlmeVNlbGVjdGVkKHRydWUsIGl0ZW0ua2V5KTtcbiAgfVxuXG4gIHJlbW92ZUZpbHRlcihlKSB7XG4gICAgbGV0IGJ1Y2tldHMgPSB0aGlzLmdldEJ1Y2tldHMoKTtcbiAgICBsZXQgaXRlbSA9IGJ1Y2tldHNbcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kZXgnKSldO1xuXG4gICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuX2dldEN1cnJlbnRTZWFyY2hEb2N1bWVudCgpO1xuICAgIHRoaXMuX3NldFBhZ2luZyhzZWFyY2hEb2MsIDApO1xuICAgIHRoaXMuX3JlbW92ZUtleXdvcmRGaWx0ZXIoc2VhcmNoRG9jLCB0aGlzLmZpbHRlciwgaXRlbS5rZXkpO1xuICAgIHRoaXMuUmVjb3JkTW9kZWwuc2V0U2VhcmNoTG9jYXRpb24oc2VhcmNoRG9jKTtcblxuICAgIHRoaXMuX25vdGlmeVNlbGVjdGVkKGZhbHNlLCBpdGVtLmtleSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25UeXBlYWhlYWRLZXl1cFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gdHlwZWFoZWFkIHRleHQgaW5wdXQga2V5dXAgZXZlbnRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxuICAgKi9cbiAgX29uVHlwZWFoZWFkS2V5dXAoKSB7XG4gICAgdGhpcy5fdXBkYXRlVHlwZWFoZWFkKCk7XG4gIH1cblxuICBfdXBkYXRlVHlwZWFoZWFkKCkge1xuICAgIGxldCB0ZXh0ID0gdGhpcy4kLnR5cGVhaGVhZC52YWx1ZTtcbiAgICBpZiggIXRleHQgKSB7XG4gICAgICBpZiggdGhpcy5vcmlnaW5hbEJ1Y2tldHMgKSB7XG5cbiAgICAgICAgaWYoIHRoaXMuaXJvbkxpc3RBY3RpdmUgKSB7XG4gICAgICAgICAgdGhpcy5idWNrZXRzSXJvbkxpc3QgPSB0aGlzLm9yaWdpbmFsQnVja2V0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJ1Y2tldHMgPSB0aGlzLm9yaWdpbmFsQnVja2V0cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3JpZ2luYWxCdWNrZXRzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiggIXRoaXMub3JpZ2luYWxCdWNrZXRzICkge1xuICAgICAgdGhpcy5vcmlnaW5hbEJ1Y2tldHMgPSBbLi4uKHRoaXMuaXJvbkxpc3RBY3RpdmUgPyB0aGlzLmJ1Y2tldHNJcm9uTGlzdCA6IHRoaXMuYnVja2V0cyldO1xuICAgIH1cblxuICAgIGxldCByZSA9IG5ldyBSZWdFeHAoJy4qJyt0ZXh0LnRvTG93ZXJDYXNlKCkrJy4qJywgJ2knKTtcbiAgICBsZXQgYnVja2V0cyA9IHRoaXMub3JpZ2luYWxCdWNrZXRzLmZpbHRlcihpdGVtID0+IGl0ZW0uc29ydEtleS5tYXRjaChyZSkgPyB0cnVlIDogZmFsc2UpO1xuXG4gICAgaWYoIHRoaXMuaXJvbkxpc3RBY3RpdmUgKSB7XG4gICAgICB0aGlzLmJ1Y2tldHNJcm9uTGlzdCA9IGJ1Y2tldHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVja2V0cyA9IGJ1Y2tldHM7XG4gICAgfVxuICB9XG5cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWZhY2V0LWZpbHRlcicsIEFwcEZhY2V0RmlsdGVyKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlIGluY2x1ZGU9XFxcInNoYXJlZC1zdHlsZXNcXFwiPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5sYWJlbCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmhpZ2hsaWdodCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTEwcHg7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmxhYmVsOmZvY3VzID4gLmhpZ2hsaWdodCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgI2FjdGl2ZUZpbHRlcnMgPiBkaXYge1xcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xcbiAgfVxcblxcbiAgLmZpbHRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIH1cXG5cXG4gIGlyb24taWNvbltjbG9zZWRdIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gIH1cXG5cXG4gIGlyb24taWNvbltjbGVhcl0ge1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG4gIH1cXG5cXG4gIC8qIEpNIC0gdGhpbmsgdGhpcyBpcyByZWR1bmRhbnQsIHNjcm9sbCBpbmZvcmNlZCBieSBhcHAtKi1maWx0ZXIgZWxlbWVudCAqL1xcbiAgLyogI2ZpbHRlcnMge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIH0gKi9cXG48L3N0eWxlPlxcblxcbjxkaXYgY2xhc3M9XFxcImxhYmVsXFxcIiBvbi1jbGljaz1cXFwiX29uVG9nZ2xlQ2xpY2tlZFxcXCIgb24ta2V5dXA9XFxcIl9vblRvZ2dsZUNsaWNrZWRcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPlxcbiAgPGRpdiBzdHlsZT1cXFwiZmxleDoxXFxcIj5bW2ZpbHRlci5sYWJlbF1dPC9kaXY+XFxuICA8aXJvbi1pY29uIGljb249XFxcImFycm93LWRyb3AtZG93blxcXCIgY2xvc2VkJD1cXFwiW1shb3BlbmVkXV1cXFwiPjwvaXJvbi1pY29uPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGlnaGxpZ2h0XFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cXG48ZGl2IGlkPVxcXCJhY3RpdmVGaWx0ZXJzXFxcIiBoaWRkZW4kPVxcXCJbW29wZW5lZF1dXFxcIj5cXG4gIDxkaXYgaGlkZGVuJD1cXFwiW1shc2VsZWN0ZWQubGVuZ3RoXV1cXFwiPlxcbiAgICA8dGVtcGxhdGUgaXM9XFxcImRvbS1yZXBlYXRcXFwiIGl0ZW1zPVxcXCJbW3NlbGVjdGVkXV1cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZpbHRlclxcXCIgXFxuICAgICAgICBvbi1jbGljaz1cXFwiX29uRmlsdGVyQ2xpY2tlZFxcXCJcXG4gICAgICAgIG9uLWtleXVwPVxcXCJfb25GaWx0ZXJDbGlja2VkXFxcIiBcXG4gICAgICAgIGxhYmVsJD1cXFwiW1tpdGVtLmxhYmVsXV1cXFwiXFxuICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxuICAgICAgICByb2xlPVxcXCJidXR0b25cXFwiPlxcbiAgICAgICAgPGlyb24taWNvbiBpY29uPVxcXCJmaW4taWNvbnM6Y2xvc2VcXFwiIGNsZWFyPjwvaXJvbi1pY29uPlxcbiAgICAgICAgPGRpdj5bW2l0ZW0ubmljZUxhYmVsXV08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC90ZW1wbGF0ZT5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgaWQ9XFxcImZpbHRlcnNcXFwiIGhpZGRlbiQ9XFxcIltbIW9wZW5lZF1dXFxcIj48L2Rpdj5cIjsiLCIgIGltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYnNcIlxuaW1wb3J0IFwiQHVjZC1saWIvY29yay10b2dnbGUtcGFuZWwvY29yay10b2dnbGUtcGFuZWxcIlxuXG5pbXBvcnQgXCIuL2FwcC1yYW5nZS1maWx0ZXJcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1maWx0ZXItcGFuZWwuaHRtbFwiXG5pbXBvcnQgXCIuL2FwcC1mYWNldC1maWx0ZXJcIlxuXG5leHBvcnQgY2xhc3MgQXBwRmlsdGVyUGFuZWwgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWx0ZXIgOiB7XG4gICAgICAgIHR5cGUgOiBPYmplY3QsXG4gICAgICAgIHZhbHVlIDogbnVsbCxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX3JlbmRlcidcbiAgICAgIH0sXG4gICAgICBvcGVuZWQgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlLFxuICAgICAgICBvYnNlcnZlciA6ICdfdG9nZ2xlT3BlbmVkJ1xuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW11cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIF9yZW5kZXIoKSB7XG4gICAgaWYoICF0aGlzLmZpbHRlciApIHJldHVybjtcblxuICAgIHRoaXMuaW5uZXJIVE1MID0gJyc7XG4gICAgdmFyIGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FwcC0nK3RoaXMuZmlsdGVyLnR5cGUrJy1maWx0ZXInKTtcbiAgICBlbGUubGFiZWwgPSB0aGlzLmZpbHRlci5sYWJlbDtcbiAgICBlbGUuZmlsdGVyID0gdGhpcy5maWx0ZXIuZmlsdGVyO1xuICAgIGVsZS5pZ25vcmUgPSB0aGlzLmZpbHRlci5pZ25vcmU7XG4gICAgZWxlLnZhbHVlTWFwID0gdGhpcy5maWx0ZXIudmFsdWVNYXAgfHwge307XG4gICAgZWxlLmlzRG9sbGFyID0gdGhpcy5maWx0ZXIuaXNEb2xsYXI7XG4gICAgZWxlLmluY2x1ZGVUeXBlYWhlYWQgPSB0aGlzLmZpbHRlci5pbmNsdWRlVHlwZWFoZWFkIHx8IGZhbHNlO1xuICAgIGVsZS50eXBlYWhlYWRGaWVsZCA9IHRoaXMuZmlsdGVyLnR5cGVhaGVhZEZpZWxkO1xuXG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZS12aXNpYmlsaXR5JywgKGUpID0+IHtcbiAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IGUuZGV0YWlsLnNob3cgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgIH0pO1xuICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKCdhZGQtc2VsZWN0ZWQnLCAoZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gdGhpcy5zZWxlY3RlZC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmxhYmVsID09PSBlLmRldGFpbC5sYWJlbCk7XG4gICAgICBpZiggaW5kZXggPiAtMSApIHJldHVybjtcbiAgICAgIGUuZGV0YWlsLm5pY2VMYWJlbCA9IHRoaXMuX2dldExhYmVsKGUuZGV0YWlsLmxhYmVsKTtcbiAgICAgIHRoaXMucHVzaCgnc2VsZWN0ZWQnLCBlLmRldGFpbCk7XG4gICAgfSk7XG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3JlbW92ZS1zZWxlY3RlZCcsIChlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLnNlbGVjdGVkLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubGFiZWwgPT09IGUuZGV0YWlsLmxhYmVsKTtcbiAgICAgIGlmKCBpbmRleCA9PT0gLTEgKSByZXR1cm47XG4gICAgICB0aGlzLnNwbGljZSgnc2VsZWN0ZWQnLCBpbmRleCwgMSk7XG4gICAgfSk7XG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3NldC1zZWxlY3RlZCcsIChlKSA9PiB7XG4gICAgICBpZiggZS5kZXRhaWwuc2VsZWN0ZWQgKSB7XG4gICAgICAgIGUuZGV0YWlsLm5pY2VMYWJlbCA9IHRoaXMuX2dldExhYmVsKGUuZGV0YWlsLmxhYmVsKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IFtlLmRldGFpbF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICBcbiAgICB0aGlzLiQuZmlsdGVycy5hcHBlbmRDaGlsZChlbGUpO1xuICB9XG5cbiAgX2dldExhYmVsKGxhYmVsKSB7XG4gICAgaWYoICF0aGlzLmZpbHRlci52YWx1ZU1hcCApIHJldHVybiBsYWJlbDtcbiAgICBpZiggdHlwZW9mIHRoaXMuZmlsdGVyLnZhbHVlTWFwID09PSAnb2JqZWN0JyApIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlci52YWx1ZU1hcFtsYWJlbF0gfHwgbGFiZWw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpbHRlci52YWx1ZU1hcChsYWJlbCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB0b2dnbGVcbiAgICogQGRlc2NyaXB0aW9uIHRvZ2dsZSBvcGVuZWQgc3RhdGVcbiAgICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF90b2dnbGVPcGVuZWRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIG9wZW5lZCBvYnNlcnZlci4gIGlmIG9wZW5lZCBpcyB0cnVlLFxuICAgKiB0ZWxsIHRoZSBjaGlsZCB0byByZXNpemVcbiAgICovXG4gIF90b2dnbGVPcGVuZWQoKSB7XG4gICAgaWYoICF0aGlzLm9wZW5lZCApIHJldHVybjtcbiAgICBpZiggdGhpcy5lbGUgJiYgdGhpcy5lbGUucmVzaXplICkge1xuICAgICAgdGhpcy5lbGUucmVzaXplKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uVG9nZ2xlQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gbWFpbiBsYWJlbCBjbGljay9rZXlib2FyZCBldmVudHMuIFRvZ2dsZVxuICAgKiB0aGUgcGFuZWwuXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBDbGljay9LZXl3b3JkIGV2ZW50XG4gICAqL1xuICBfb25Ub2dnbGVDbGlja2VkKGUpIHtcbiAgICBpZiggZS50eXBlID09PSAna2V5dXAnICkgeyAvLyBmcm9tIGtleWJvYXJkIGV2ZW50XG4gICAgICBpZiggZS53aGljaCAhPT0gMTMgJiYgZS53aGljaCAhPT0gMzIgKSByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkZpbHRlckNsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGNhbGxlZCB3aGVuIHNlbGVjdGVkIGZpbHRlciBpcyBjbGlja2VkLFxuICAgKiBub3RpZnkgY2hpbGQgb2YgY2xpY2tcbiAgICovXG4gIF9vbkZpbHRlckNsaWNrZWQoZSkge1xuICAgIGlmKCBlLnR5cGUgPT09ICdrZXl1cCcgKSB7IC8vIGZyb20ga2V5Ym9hcmQgZXZlbnRcbiAgICAgIGlmKCBlLndoaWNoICE9PSAxMyApIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZnlGaWx0ZXJDbGlja2VkKGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2xhYmVsJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uRmlsdGVyQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gbm90aWZ5IGNoaWxkIG9mIGZpbHRlciBjbGlja1xuICAgKi9cbiAgX25vdGlmeUZpbHRlckNsaWNrZWQobGFiZWwpIHtcbiAgICBpZiggIXRoaXMuZWxlICkgcmV0dXJuO1xuICAgIGlmKCAhdGhpcy5lbGUub25QYXJlbnRGaWx0ZXJDbGlja2VkICkgcmV0dXJuO1xuICAgIHRoaXMuZWxlLm9uUGFyZW50RmlsdGVyQ2xpY2tlZChsYWJlbCk7XG4gIH1cblxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZmlsdGVyLXBhbmVsJywgQXBwRmlsdGVyUGFuZWwpOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICAjZmlsdGVycyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgYXBwLWZpbHRlci1wYW5lbCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICB9XFxuXFxuICAudGh1bWJuYWlsIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuXFxuICAudGh1bWJuYWlsLXJvb3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICB9XFxuXFxuICAubGFiZWwge1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctYm9sZCk7XFxuICB9XFxuXFxuICAuY29sbGVjdGlvbi1maWx0ZXIge1xcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgfVxcblxcbiAgLm91dGVyLWRyYXdlci10b2dnbGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAub3V0ZXItZHJhd2VyLXRvZ2dsZVtzcGFjZXJdIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIH1cXG5cXG4gIC5kcmF3ZXItdG9nZ2xlIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTU7XFxuICAgIHRvcCA6IDE1cHg7XFxuICAgIHJpZ2h0OiAtMjRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctYm9sZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgLmRyYXdlci10b2dnbGUgPiBzcGFuIHtcXG4gICAgcGFkZGluZyA6IDAgMTBweDtcXG4gIH1cXG4gIC5kcmF3ZXItdG9nZ2xlIGlyb24taWNvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIEBtZWRpYShtaW4td2lkdGg6IDk3NXB4KSB7XFxuICAgIGgyIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICAub3V0ZXItZHJhd2VyLXRvZ2dsZSB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAudGl0bGUge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJ0aXRsZVxcXCIgaGlkZGVuJD1cXFwiW1tjb2xsZWN0aW9uTW9kZV1dXFxcIiA+RklMVEVSUzwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcIm91dGVyLWRyYXdlci10b2dnbGVcXFwiIHNwYWNlciQ9XFxcIltbIWNvbGxlY3Rpb25Nb2RlXV1cXFwiIG9uLWNsaWNrPVxcXCJfZmlyZVRvZ2dsZURyYXdlclxcXCI+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJkcmF3ZXItdG9nZ2xlXFxcIj5cXG4gICAgPHNwYW4+PHNwYW4gaGlkZGVuJD1cXFwiW1shY29sbGVjdGlvbk1vZGVdXVxcXCI+SW5mbyAvIDwvc3Bhbj5GaWx0ZXJzPC9zcGFuPlxcbiAgICA8aXJvbi1pY29uIGljb249XFxcImZpbi1pY29uczpjbG9zZVxcXCI+PC9pcm9uLWljb24+XFxuICA8L2J1dHRvbj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJ0aHVtYm5haWwtcm9vdFxcXCIgIGhpZGRlbiQ9XFxcIltbIWNvbGxlY3Rpb25Nb2RlXV1cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwidGh1bWJuYWlsXFxcIiBzdHlsZSQ9XFxcImJhY2tncm91bmQtaW1hZ2U6IHVybCgnW1tzZWxlY3RlZENvbGxlY3Rpb24udGh1bWJuYWlsVXJsXV0nKVxcXCI+PC9kaXY+XFxuICA8IS0tIDxkaXYgY2xhc3M9XFxcInRodW1ibmFpbFxcXCIgc3R5bGUkPVxcXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ1tbc2VsZWN0ZWRDb2xsZWN0aW9uLnRodW1ibmFpbF1dJylcXFwiPjwvZGl2PiAgLS0+XFxuPC9kaXY+XFxuXFxuPGFwcC10YWJzIFxcbiAgdGFicz1cXFwiW1t0YWJzXV1cXFwiIFxcbiAgc2VsZWN0ZWQ9XFxcInt7c2VsZWN0ZWRUYWJ9fVxcXCIgXFxuICBoaWRkZW4kPVxcXCJbWyFjb2xsZWN0aW9uTW9kZV1dXFxcIj5cXG48L2FwcC10YWJzPlxcblxcbjxpcm9uLXBhZ2VzIFxcbiAgc2VsZWN0ZWQ9XFxcIltbc2VsZWN0ZWRUYWJdXVxcXCIgICBcXG4gIGF0dHItZm9yLXNlbGVjdGVkPVxcXCJpZFxcXCIgXFxuICBzZWxlY3RlZC1hdHRyaWJ1dGU9XFxcInNob3dpbmdcXFwiPlxcbiAgPGRpdiBpZD1cXFwiZmlsdGVyc1xcXCI+XFxuXFxuICAgIDwhLS0gPGRpdiBoaWRkZW4kPVxcXCJbWyFjb2xsZWN0aW9uTW9kZV1dXFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiPkNvbGxlY3Rpb248L2Rpdj5cXG4gICAgPGRpdiBoaWRkZW4kPVxcXCJbWyFjb2xsZWN0aW9uTW9kZV1dXFxcIiBjbGFzcz1cXFwiY29sbGVjdGlvbi1maWx0ZXJcXFwiPlxcbiAgICAgIDxhcHAtZmFjZXQtY2hlY2tib3ggXFxuICAgICAgICB0eXBlPVxcXCJjb2xsZWN0aW9uXFxcIiBcXG4gICAgICAgIHZhbHVlPVxcXCJbW3NlbGVjdGVkQ29sbGVjdGlvbi5uYW1lXV1cXFwiIFxcbiAgICAgICAgY2hlY2tlZD1cXFwiW1tjb2xsZWN0aW9uTW9kZV1dXFxcIlxcbiAgICAgICAgb24tY2xpY2s9XFxcIl9yZW1vdmVDb2xsZWN0aW9uRmlsdGVyXFxcIj5cXG4gICAgICA8L2FwcC1mYWNldC1jaGVja2JveD5cXG4gICAgPC9kaXY+IC0tPlxcblxcbiAgICA8dGVtcGxhdGUgaXM9XFxcImRvbS1yZXBlYXRcXFwiIGl0ZW1zPVxcXCJbW2ZhY2V0RmlsdGVyc11dXFxcIj5cXG4gICAgICA8YXBwLWZpbHRlci1wYW5lbCBmaWx0ZXI9XFxcIltbaXRlbV1dXFxcIj48L2FwcC1maWx0ZXItcGFuZWw+XFxuICAgIDwvdGVtcGxhdGU+XFxuICA8L2Rpdj5cXG4gIDxhcHAtY29sbGVjdGlvbi1pbmZvLXBhbmVsIGlkPVxcXCJpbmZvXFxcIj48L2FwcC1jb2xsZWN0aW9uLWluZm8tcGFuZWw+XFxuPC9pcm9uLXBhZ2VzPlxcblxcblwiOyIsImltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiXG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLXBhZ2VzL2lyb24tcGFnZXNcIlxuaW1wb3J0IFwiLi9hcHAtZmlsdGVyLXBhbmVsXCJcbmltcG9ydCBcIi4uL2FwcC1jb2xsZWN0aW9uLWluZm8tcGFuZWxcIlxuaW1wb3J0IFwiLi4vLi4vLi4vdXRpbHMvYXBwLXRhYnNcIlxuXG5pbXBvcnQgUmVjb3JkSW50ZXJmYWNlIGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL1JlY29yZEludGVyZmFjZVwiXG5pbXBvcnQgQ29sbGVjdGlvbkludGVyZmFjZSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9Db2xsZWN0aW9uSW50ZXJmYWNlXCJcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1maWx0ZXJzLXBhbmVsLmh0bWxcIlxuXG4vLyBpbml0IGZhY2V0IGZpbHRlcnMgZnJvbSB0ZW1wbGF0ZVxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2NvbmZpZ1wiXG5jb25zdCBmYWNldEZpbHRlcnMgPSBbXTtcbmZvciggdmFyIGtleSBpbiBjb25maWcuZWxhc3RpY1NlYXJjaC5mYWNldHMgKSB7XG4gIGxldCBjID0gY29uZmlnLmVsYXN0aWNTZWFyY2guZmFjZXRzW2tleV07XG4gIGZhY2V0RmlsdGVycy5wdXNoKHtcbiAgICBsYWJlbCA6IGMubGFiZWwsXG4gICAgdHlwZSA6IGMudHlwZSxcbiAgICBpZ25vcmUgOiBjLmlnbm9yZSxcbiAgICB2YWx1ZU1hcCA6IGMudmFsdWVNYXAsXG4gICAgaXNEb2xsYXIgOiBjLmlzRG9sbGFyLFxuICAgIGluY2x1ZGVUeXBlYWhlYWQgOiBjLnR5cGVhaGVhZCA/IHRydWUgOiBmYWxzZSxcbiAgICB0eXBlYWhlYWRGaWVsZCA6IGMudHlwZWFoZWFkLFxuICAgIGZpbHRlciA6IGtleVxuICB9KTtcbn1cblxuXG5jbGFzcyBBcHBGaWx0ZXJzUGFuZWwgZXh0ZW5kcyBNaXhpbihQb2x5bWVyRWxlbWVudClcbiAgICAgIC53aXRoKEV2ZW50SW50ZXJmYWNlLCBSZWNvcmRJbnRlcmZhY2UpIHtcbiAgXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZhY2V0RmlsdGVycyA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBmYWNldEZpbHRlcnM7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZWxlY3RlZFRhYiA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJyxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICBzZWxlY3RlZENvbGxlY3Rpb24gOiB7XG4gICAgICAgIHR5cGUgOiBPYmplY3QsXG4gICAgICAgIHZhbHVlIDogKCkgPT4ge31cbiAgICAgIH0sXG5cbiAgICAgIGNvbGxlY3Rpb25Nb2RlIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgdGFicyA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IFtcbiAgICAgICAgICB7bGFiZWwgOiAnSW5mb3JtYXRpb24nLCB2YWx1ZTogJ2luZm8nfSxcbiAgICAgICAgICB7bGFiZWwgOiAnRmlsdGVycycsIHZhbHVlOiAnZmlsdGVycyd9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnQXBwU3RhdGVNb2RlbCcpO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9vblNlbGVjdGVkQ29sbGVjdGlvblVwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VsZWN0ZWRDb2xsZWN0aW9uVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDb2xsZWN0aW9uSW50ZXJmYWNlLCByZW5kZXIgdGhlIGlyb24tcGFnZXMgYW5kIGN1cnJlbnQgY29sbGVjdGlvblxuICAgKi9cbiAgX29uU2VsZWN0ZWRDb2xsZWN0aW9uVXBkYXRlKHNlbGVjdGVkKSB7XG4gICAgaWYoICFzZWxlY3RlZCApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAnZmlsdGVycyc7XG4gICAgICB0aGlzLmNvbGxlY3Rpb25Nb2RlID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfSBcbiAgICBcbiAgICB0aGlzLmNvbGxlY3Rpb25Nb2RlID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdGVkQ29sbGVjdGlvbiA9IHNlbGVjdGVkO1xuICAgIFxuICAgIGlmKCAhdGhpcy5zZWxlY3RlZFRhYiApIHRoaXMuc2VsZWN0ZWRUYWIgPSAnaW5mbyc7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZmlyZVRvZ2dsZURyYXdlclxuICAgKiBAZGVzY3JpcHRpb24gY2FsbGVkIGZyb20gdG9nZ2xlIGJ1dHRvbiwgZGlzcGF0Y2hlcyBldmVudCBmb3IgYXBwLXNlYXJjaCB0byBoYW5kbGUgaGlkaW5nIGRyYXdlcjtcbiAgICovXG4gIF9maXJlVG9nZ2xlRHJhd2VyKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RvZ2dsZS1kcmF3ZXInKSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVtb3ZlQ29sbGVjdGlvbkZpbHRlclxuICAgKiBAZGVzY3JpcHRpb24gZmlyZWQgZnJvbSBoYXJkIGNvZGVkIGNvbGxlY3Rpb24gZmlsdGVyIGNoZWNrYm94LiAgUmVtb3ZlXG4gICAqIGNvbGxlY3Rpb24gZmlsdGVyIHdoZW4gY2xpY2tlZFxuICAgKi9cbiAgX3JlbW92ZUNvbGxlY3Rpb25GaWx0ZXIoKSB7XG4gICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuX2dldEN1cnJlbnRTZWFyY2hEb2N1bWVudCgpO1xuICAgIHRoaXMuX3JlbW92ZUtleXdvcmRGaWx0ZXIoc2VhcmNoRG9jLCAnaXNQYXJ0T2YuQGlkJyk7XG4gICAgdGhpcy5fc2V0UGFnaW5nKHNlYXJjaERvYywgMCk7XG4gICAgdGhpcy5SZWNvcmRNb2RlbC5zZXRTZWFyY2hMb2NhdGlvbihzZWFyY2hEb2MpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWZpbHRlcnMtcGFuZWwnLCBBcHBGaWx0ZXJzUGFuZWwpOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICA6aG9zdCg6Zm9jdXMpIHtcXG4gICAgb3V0bGluZTogdmFyKC0tZGVmYXVsdC1vdXRsaW5lKTtcXG4gIH1cXG5cXG4gIDpob3N0KFtkaXNhYmxlZF0pIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBpcm9uLWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBtaW4td2lkdGg6IDI0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgfVxcblxcbiAgZGl2IHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XFxuICB9XFxuXFxuICBzcGFuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgfVxcblxcbiAgZGl2W2NoZWNrZWRdIGlyb24taWNvbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG5cXG4gIGRpdltjaGVja2VkXSAudmFsdWUge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgZGl2W2Rpc2FibGVkXSBpcm9uLWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgZGl2W2Rpc2FibGVkXSAudmFsdWUge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LXRleHQpO1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBjaGVja2VkJD1cXFwiW1tjaGVja2VkXV1cXFwiIGRpc2FibGVkJD1cXFwiW1tkaXNhYmxlZF1dXFxcIj5cXG4gIDxpcm9uLWljb24gaWNvbj1cXFwiZmluLWljb25zOmNsb3NlXFxcIj48L2lyb24taWNvbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ2YWx1ZVxcXCI+W1tyZWFsTGFiZWxdXTwvc3Bhbj5cXG48L2Rpdj5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIlxuXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLW5vcm1hbC1jaGVja2JveC5odG1sXCJcblxuZXhwb3J0IGNsYXNzIEFwcE5vcm1hbENoZWNrYm94IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZSA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIGxhYmVsIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgbGFiZWxNYXAgOiB7XG4gICAgICAgIHR5cGUgOiBPYmplY3QsXG4gICAgICAgIHZhbHVlIDogbnVsbCxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX29uTGFiZWxNYXBVcGRhdGUnXG4gICAgICB9LFxuICAgICAgbGFiZWxNYXBUeXBlIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6IG51bGxcbiAgICAgIH0sXG4gICAgICByZWFsTGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogJ19yZWFsTGFiZWwodmFsdWUsIGxhYmVsKSdcbiAgICAgIH0sXG4gICAgICBjaGVja2VkIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGUgOiB0cnVlXG4gICAgICB9LFxuICAgICAgZGlzYWJsZWQgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgYXJpYUNoZWNrZWQgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZSA6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBcmlhQ2hlY2tlZChjaGVja2VkKSdcbiAgICAgIH0sXG4gICAgICBhcmlhRGlzYWJsZWQgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZSA6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBcmlhRGlzYWJsZWQoZGlzYWJsZWQpJ1xuICAgICAgfSxcbiAgICAgIHJvbGUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJ2NoZWNrYm94JyxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlIDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHRhYmluZGV4IDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICBjb21wdXRlZDogJ19jb21wdXRlVGFiSW5kZXgoZGlzYWJsZWQpJyxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlIDogdHJ1ZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLl9vbkNsaWNrKGUpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICBpZiggZS53aGljaCAhPT0gMTMgKSByZXR1cm47XG4gICAgICB0aGlzLl9vbkNsaWNrKGUpXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVhbExhYmVsXG4gICAqIEBkZXNjcmlwdGlvbiByZW5kZXIgbGFiZWxcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGxhYmVsIFxuICAgKi9cbiAgX3JlYWxMYWJlbCh2YWx1ZSwgbGFiZWwpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TGFiZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9jb21wdXRlQXJpYUNoZWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIEJvdW5kIHRvICdjaGVja2VkJyBwcm9wZXJ0eS4gIHNldCBhcmlhLWNoZWNrZWQgdmFsdWVcbiAgICovXG4gIF9jb21wdXRlQXJpYUNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tlZCA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfY29tcHV0ZUFyaWFEaXNhYmxlZFxuICAgKiBAZGVzY3JpcHRpb24gQm91bmQgdG8gJ2Rpc2FibGVkJyBwcm9wZXJ0eS4gIHNldCBhcmlhLWRpc2FibGVkIHZhbHVlXG4gICAqL1xuICBfY29tcHV0ZUFyaWFEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfY29tcHV0ZVRhYkluZGV4XG4gICAqIEBkZXNjcmlwdGlvbiBCb3VuZCB0byAnZGlzYWJsZWQnIHByb3BlcnR5LiAgc2V0IHRhYmluZGV4IHZhbHVlXG4gICAqL1xuICBfY29tcHV0ZVRhYkluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gLTEgOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2dldExhYmVsXG4gICAqIEBkZXNjcmlwdGlvbiByZXR1cm4gbGFiZWwgZm9yIGEgdmFsdWVcbiAgICovXG4gIF9nZXRMYWJlbCgpIHtcbiAgICBpZiggdGhpcy5sYWJlbE1hcFR5cGUgPT09IG51bGwgKSB0aGlzLl9vbkxhYmVsTWFwVXBkYXRlKCk7XG4gICAgaWYoICF0aGlzLmxhYmVsTWFwVHlwZSApIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIFxuICAgIGlmKCB0aGlzLmxhYmVsTWFwVHlwZSA9PT0gJ29iamVjdCcgJiYgdGhpcy5sYWJlbE1hcFt0aGlzLnZhbHVlXSApIHtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVsTWFwW3RoaXMudmFsdWVdO1xuICAgIH0gZWxzZSBpZiggdGhpcy5sYWJlbE1hcFR5cGUgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbE1hcCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkxhYmVsTWFwVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byAnbGFiZWxNYXAnIHByb3BlcnR5IG9ic2VydmVyLiAgc2V0IHRoZSBcbiAgICogbGFiZWxNYXBUeXBlIHByb3BlcnR5XG4gICAqL1xuICBfb25MYWJlbE1hcFVwZGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsTWFwVHlwZSA9ICcnO1xuICAgIGlmKCAhdGhpcy5sYWJlbE1hcCApIHJldHVybjtcbiAgICB0aGlzLmxhYmVsTWFwVHlwZSA9IHR5cGVvZiB0aGlzLmxhYmVsTWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ2xpY2tcbiAgICogQGRlc2NyaXB0aW9uIGNhbGxlZCB3aGVuIGRpdiB3cmFwcGVyIGlzIGNsaWNrZWRcbiAgICogXG4gICAqIFRPRE86IGFkZCBhcmlhIGNoZWNrYm94IHJvbGVcbiAgICovXG4gIF9vbkNsaWNrKCkge1xuICAgIGlmKCB0aGlzLmRpc2FibGVkICkgcmV0dXJuO1xuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlfSkpO1xuICB9XG5cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLW5vcm1hbC1jaGVja2JveCcsIEFwcE5vcm1hbENoZWNrYm94KTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLmxhYmVscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMCAyM3B4IDAgMTNweDtcXG4gICAgY29sb3I6IHZhcigtLWdyYXktdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtc20pO1xcbiAgfVxcblxcbiAgLmlucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICAgIG1hcmdpbjogMCAxM3B4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtc20pO1xcbiAgfVxcblxcbiAgLnVua25vd24ge1xcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgbGFiZWwge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXNtKTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIH1cXG5cXG4gIGFwcC1yYW5nZS1zbGlkZXIge1xcbiAgICAtLWxpZ2h0LWJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgY2xhc3M9XFxcImlucHV0c1xcXCI+XFxuICA8aW5wdXQgaWQ9XFxcIm1pblZhbHVlSW5wdXRcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgb24tY2hhbmdlPVxcXCJfb25JbnB1dENoYW5nZVxcXCIgPlxcbiAgPHNwYW4+IC0gPC9zcGFuPlxcbiAgPGlucHV0IGlkPVxcXCJtYXhWYWx1ZUlucHV0XFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIG9uLWNoYW5nZT1cXFwiX29uSW5wdXRDaGFuZ2VcXFwiID5cXG48L2Rpdj5cXG5cXG48ZGl2IHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDEwcHhcXFwiPlxcbiAgPGFwcC1yYW5nZS1zbGlkZXJcXG4gICAgaWQ9XFxcInNsaWRlclxcXCJcXG4gICAgb24tcmFuZ2UtdmFsdWUtY2hhbmdlPVxcXCJfb25SYW5nZVNsaWRlckNoYW5nZVxcXCJcXG4gICAgYWJzLW1pbi12YWx1ZT1cXFwiW1thYnNNaW5WYWx1ZV1dXFxcIlxcbiAgICBhYnMtbWF4LXZhbHVlPVxcXCJbW2Fic01heFZhbHVlXV1cXFwiXFxuICAgIG1pbi12YWx1ZT1cXFwiW1ttaW5WYWx1ZV1dXFxcIlxcbiAgICBtYXgtdmFsdWU9XFxcIltbbWF4VmFsdWVdXVxcXCI+XFxuICA8L2FwcC1yYW5nZS1zbGlkZXI+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwibGFiZWxzXFxcIj5cXG4gIDxkaXYgc3R5bGU9XFxcImZsZXg6MVxcXCI+W1thYnNNaW5WYWx1ZV1dPC9kaXY+XFxuICA8ZGl2PltbYWJzTWF4VmFsdWVdXTwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcInVua25vd25cXFwiIGhpZGRlbiQ9XFxcIltbc2hvd1Vua25vd25dXVxcXCI+XFxuICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJ1bmtub3duXFxcIiBvbi1jbGljaz1cXFwiX29uUmFuZ2VOdWxsQ2hhbmdlXFxcIiBjaGVja2VkIC8+XFxuICA8bGFiZWwgZm9yPVxcXCJ1bmtub3duXFxcIj5pbmNsdWRlIHVua25vd24gLyB1bnNwZWNpZmllZDwvbGFiZWw+XFxuPC9kaXY+XCI7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCBcIi4uLy4uLy4uL3V0aWxzL2FwcC1yYW5nZS1zbGlkZXJcIlxuaW1wb3J0IFJlY29yZEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL1JlY29yZEludGVyZmFjZSdcbmltcG9ydCBDb2xsZWN0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvQ29sbGVjdGlvbkludGVyZmFjZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtcmFuZ2UtZmlsdGVyLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBSYW5nZUZpbHRlciBleHRlbmRzIE1peGluKFBvbHltZXJFbGVtZW50KVxuICAud2l0aChFdmVudEludGVyZmFjZSwgUmVjb3JkSW50ZXJmYWNlLCBDb2xsZWN0aW9uSW50ZXJmYWNlKSB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWwgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBmaWx0ZXIgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG5cbiAgICAgIGFic01pblZhbHVlIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IC0xXG4gICAgICB9LFxuICAgICAgYWJzTWF4VmFsdWUgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogLTEgXG4gICAgICB9LFxuXG4gICAgICBtaW5WYWx1ZSA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAtMVxuICAgICAgfSxcbiAgICAgIG1heFZhbHVlIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IE51bWJlci5NQVhfVkFMVUVcbiAgICAgIH0sXG5cbiAgICAgIHNob3dVbmtub3duIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5yZXNpemUoKTtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICB0aGlzLiQuc2xpZGVyLl9vblJlc2l6ZSgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiQuc2xpZGVyLl9vblJlc2l6ZSgpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNEZWZhdWx0U3RhdGVcbiAgICogQGRlc2NyaXB0aW9uIGlzIHJhbmdlIGZpbHRlciBpbiB0aGUgZGVmYXVsdCBzdGF0ZT8gIGllIGFicyBtaW4vbWF4XG4gICAqIGlzIHRoZSBzYW1lIGFzIG1pbi9tYXggYW5kIHVua25vd24gdmFsdWVzIGFyZSBpbmNsdWRlZD8gIElmIHNvXG4gICAqIHdlIGRvbid0IGFjdHVhbGx5IG5lZWQgYSBmaWx0ZXIgb24uXG4gICAqL1xuICBfaXNEZWZhdWx0U3RhdGUoKSB7XG4gICAgaWYoICF0aGlzLl9pc0ZpbHRlckFwcGxpZWQoKSApIHtcbiAgICAgIFxuICAgICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuX2dldEN1cnJlbnRTZWFyY2hEb2N1bWVudCgpO1xuICAgICAgdGhpcy5fcmVtb3ZlUmFuZ2VGaWx0ZXIoc2VhcmNoRG9jLCB0aGlzLmZpbHRlcik7XG4gICAgICB0aGlzLlJlY29yZE1vZGVsLnNldFNlYXJjaExvY2F0aW9uKHNlYXJjaERvYyk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25SYW5nZVNsaWRlckNoYW5nZVxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gY3VzdG9tICdyYW5nZS12YWx1ZS1jaGFuZ2UnIGV2ZW50IGZyb20gYXBwLXJhbmdlLXNsaWRlclxuICAgKi9cbiAgX29uUmFuZ2VTbGlkZXJDaGFuZ2UoZSkge1xuICAgIHRoaXMubWluVmFsdWUgPSBlLmRldGFpbC5taW47XG4gICAgdGhpcy5tYXhWYWx1ZSA9IGUuZGV0YWlsLm1heDtcblxuICAgIHRoaXMuJC5taW5WYWx1ZUlucHV0LnZhbHVlID0gdGhpcy5taW5WYWx1ZTtcbiAgICB0aGlzLiQubWF4VmFsdWVJbnB1dC52YWx1ZSA9IHRoaXMubWF4VmFsdWU7XG5cbiAgICB0aGlzLl9vblJhbmdlTnVsbENoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uUmFuZ2VOdWxsQ2hhbmdlXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBpbnB1dCBjaGVja2JveC4gIEN1cnJlbnRseSBjYWxsZWQgYnkgaW50ZXJuYWxcbiAgICogZnVuY3Rpb25zIGFzIHdlbGwgdG8gc2VhcmNoIGFmdGVyIHZhbHVlIGNoYW5nZSA6L1xuICAgKi9cbiAgX29uUmFuZ2VOdWxsQ2hhbmdlKCkge1xuICAgIGxldCB2YWx1ZSA9IHtcbiAgICAgIGd0ZTogdGhpcy5taW5WYWx1ZSxcbiAgICAgIGx0ZTogdGhpcy5tYXhWYWx1ZVxuICAgIH1cblxuICAgIGlmKCB0aGlzLiQudW5rbm93bi5jaGVja2VkICkge1xuICAgICAgdmFsdWUuaW5jbHVkZU51bGwgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBmaWx0ZXIgYW5kIHJldHVyblxuICAgIGlmKCB0aGlzLl9pc0RlZmF1bHRTdGF0ZSgpICkgcmV0dXJuO1xuXG4gICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuX2dldEN1cnJlbnRTZWFyY2hEb2N1bWVudCgpO1xuICAgIHRoaXMuX3NldFBhZ2luZyhzZWFyY2hEb2MsIDApO1xuICAgIHRoaXMuX2FwcGVuZFJhbmdlRmlsdGVyKHNlYXJjaERvYywgdGhpcy5maWx0ZXIsIHZhbHVlKTtcbiAgICB0aGlzLlJlY29yZE1vZGVsLnNldFNlYXJjaExvY2F0aW9uKHNlYXJjaERvYyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25JbnB1dENoYW5nZVxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gbWluL21heCBudW1iZXIgaW5wdXRzLlxuICAgKi9cbiAgX29uSW5wdXRDaGFuZ2UoKSB7XG4gICAgbGV0IG1pbiA9IHRoaXMuJC5taW5WYWx1ZUlucHV0LnZhbHVlO1xuICAgIGxldCBtYXggPSB0aGlzLiQubWF4VmFsdWVJbnB1dC52YWx1ZTtcblxuICAgIGlmKCBtaW4gPCB0aGlzLmFic01pblZhbHVlICkge1xuICAgICAgdGhpcy4kLm1pblZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLmFic01pblZhbHVlO1xuICAgICAgbWluID0gdGhpcy5hYnNNaW5WYWx1ZTtcbiAgICB9XG4gICAgaWYoIG1heCA+IHRoaXMuYWJzTWF4VmFsdWUgKSB7XG4gICAgICB0aGlzLiQubWF4VmFsdWVJbnB1dC52YWx1ZSA9IHRoaXMuYWJzTWF4VmFsdWU7XG4gICAgICBtYXggPSB0aGlzLmFic01heFZhbHVlO1xuICAgIH1cbiAgICBpZiggbWluID4gbWF4ICkgbWluID0gbWF4O1xuXG4gICAgdGhpcy5taW5WYWx1ZSA9IG1pbjtcbiAgICB0aGlzLm1heFZhbHVlID0gbWF4O1xuXG4gICAgdGhpcy5fb25SYW5nZU51bGxDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlbGVjdGVkQ29sbGVjdGlvblVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBDb2xsZWN0aW9uSW50ZXJmYWNlLCBjYWxsZWQgd2hlbmV2ZXIgc2VsZWN0ZWQgY29sbGVjdGlvbiB1cGRhdGVzXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZVxuICAgKi9cbiAgX29uU2VsZWN0ZWRDb2xsZWN0aW9uVXBkYXRlKGUpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ29sbGVjdGlvbiA9IGUgPyBlWydAaWQnXSA6ICcnO1xuICAgIHRoaXMuX3JlbmRlckZpbHRlcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblJlY29yZFNlYXJjaFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBSZWNvcmRJbnRlcmZhY2VcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxuICAgKi9cbiAgX29uUmVjb3JkU2VhcmNoVXBkYXRlKGUpIHtcbiAgICBpZiggZS5zdGF0ZSAhPT0gJ2xvYWRlZCcgKSByZXR1cm47XG5cbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXJzID0gZS5zZWFyY2hEb2N1bWVudC5maWx0ZXJzIHx8IHt9O1xuICAgIHRoaXMuX3JlbmRlckZpbHRlcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJGaWx0ZXJzXG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsZWQgYWZ0ZXIgYSBjb2xsZWN0aW9uIGlzIHNlbGVjdGVkIG9yIGEgZmlsdGVyIHNldCB1cGRhdGVzLlxuICAgKiBtYWtlIHN1cmUgcmFuZ2UgZmlsdGVyIGlzIHNldCBjb3JyZWN0bHkuXG4gICAqIFxuICAgKi9cbiAgYXN5bmMgX3JlbmRlckZpbHRlcnMoKSB7XG4gICAgaWYoICF0aGlzLmN1cnJlbnRGaWx0ZXJzICkgcmV0dXJuO1xuXG4gICAgLy8gZ3JhYiBkZWZhdWx0IGFnZ3JlZ2F0aW9ucyBmb3IgY29sbGVjdGlvblxuICAgIGxldCBjaWQgPSB0aGlzLnNlbGVjdGVkQ29sbGVjdGlvbjtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmYXVsdFJlY29yZFNlYXJjaCh0aGlzLnNlbGVjdGVkQ29sbGVjdGlvbik7XG4gICAgaWYoIGNpZCAhPT0gdGhpcy5zZWxlY3RlZENvbGxlY3Rpb24gKSByZXR1cm47IC8vIG1ha2Ugc3VyZSB3ZSBoYXZlbid0IHVwZGF0ZWRcbiAgICB0aGlzLmRlZmF1bHQgPSByZXN1bHQ7XG5cbiAgICBsZXQgcmFuZ2VGaWx0ZXIgPSB0aGlzLmRlZmF1bHQucGF5bG9hZC5hZ2dyZWdhdGlvbnMucmFuZ2VzW3RoaXMuZmlsdGVyXTtcbiAgICBpZiggcmFuZ2VGaWx0ZXIgKSB7XG4gICAgICB0aGlzLmFic01pblZhbHVlID0gcmFuZ2VGaWx0ZXIubWluO1xuICAgICAgdGhpcy5hYnNNYXhWYWx1ZSA9IHJhbmdlRmlsdGVyLm1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX3Nob3coZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3codHJ1ZSk7XG5cbiAgICAvLyBtYWtlIHN1cmUgYW55IGN1cnJlbnQgdmFsdWVzIGFyZSBzZXQgY29ycmVjdGx5XG4gICAgaWYoIHRoaXMubWluVmFsdWUgPCB0aGlzLmFic01pblZhbHVlIHx8ICF0aGlzLmN1cnJlbnRGaWx0ZXJzW3RoaXMuZmlsdGVyXSApIHtcbiAgICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLmFic01pblZhbHVlO1xuICAgICAgdGhpcy4kLm1pblZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLm1pblZhbHVlO1xuICAgIH1cbiAgICBpZiggdGhpcy5tYXhWYWx1ZSA+IHRoaXMuYWJzTWF4VmFsdWUgfHwgIXRoaXMuY3VycmVudEZpbHRlcnNbdGhpcy5maWx0ZXJdICkge1xuICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuYWJzTWF4VmFsdWU7XG4gICAgICB0aGlzLiQubWF4VmFsdWVJbnB1dC52YWx1ZSA9IHRoaXMubWF4VmFsdWU7XG4gICAgfVxuXG4gICAgLy8gbm93IHNldCB0aGUgY3VycmVudCBmaWx0ZXJzIGZyb20gc2VhcmNoXG4gICAgaWYoIHRoaXMuY3VycmVudEZpbHRlcnNbdGhpcy5maWx0ZXJdICkge1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5jdXJyZW50RmlsdGVyc1t0aGlzLmZpbHRlcl0udmFsdWU7XG5cbiAgICAgIHRoaXMubWluVmFsdWUgPSB2YWx1ZS5ndGU7XG4gICAgICB0aGlzLm1heFZhbHVlID0gdmFsdWUubHRlO1xuICAgICAgdGhpcy4kLm1pblZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLm1pblZhbHVlO1xuICAgICAgdGhpcy4kLm1heFZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLm1heFZhbHVlO1xuICAgICAgdGhpcy4kLnVua25vd24uY2hlY2tlZCA9IHZhbHVlLmluY2x1ZGVOdWxsID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeVNlbGVjdGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNGaWx0ZXJBcHBsaWVkXG4gICAqIEBkZXNjcmlwdGlvbiBpcyB0aGVyZSBjdXJyZW5sdHkgYSBmaWx0ZXIgc2V0XG4gICAqIFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgX2lzRmlsdGVyQXBwbGllZCgpIHtcbiAgICBpZiggdGhpcy5taW5WYWx1ZSA9PT0gdGhpcy5hYnNNaW5WYWx1ZSAmJlxuICAgICAgdGhpcy5tYXhWYWx1ZSA9PT0gdGhpcy5hYnNNYXhWYWx1ZSAmJlxuICAgICAgdGhpcy4kLnVua25vd24uY2hlY2tlZCA9PT0gdHJ1ZSApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfbm90aWZ5U2VsZWN0ZWRcbiAgICogQGRlc2NyaXB0aW9uIG5vdGlmeSBwYXJlbnQgb2Ygc2VsZWN0ZWQvdW5zZWxlY3RlZCBmaWx0ZXJcbiAgICovXG4gIF9ub3RpZnlTZWxlY3RlZCgpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBsZXQga2V5ID0gJyc7XG5cbiAgICBpZiggdGhpcy5taW5WYWx1ZSAhPT0gdGhpcy5hYnNNaW5WYWx1ZSB8fCBcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSAhPT0gdGhpcy5hYnNNYXhWYWx1ZSB8fFxuICAgICAgICAhdGhpcy4kLnVua25vd24uY2hlY2tlZCApIHtcbiAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiggc2VsZWN0ZWQgKSB7XG4gICAgICBrZXkgPSB0aGlzLm1pblZhbHVlKycgdG8gJyt0aGlzLm1heFZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudChgc2V0LXNlbGVjdGVkYCwge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICBsYWJlbDoga2V5XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zaG93XG4gICAqIEBkZXNjcmlwdGlvbiBub3RpZnkgcGFyZW50IHRvIGhpZGUvc2hvdyBmaWx0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hvdyBzaG91bGQgdGhlIHBhcmVudCBoaWRlIG9yIHNob3cgZmlsdGVyXG4gICAqL1xuICBfc2hvdyhzaG93KSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KCd1cGRhdGUtdmlzaWJpbGl0eScsIHtcbiAgICAgICAgZGV0YWlsOiB7c2hvd31cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlc2V0XG4gICAqIEBkZXNjcmlwdGlvbiByZXNldCByYW5nZSBmaWx0ZXJcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLmFic01pblZhbHVlO1xuICAgIHRoaXMubWF4VmFsdWUgPSB0aGlzLmFic01heFZhbHVlO1xuICAgIHRoaXMuJC51bmtub3duLmNoZWNrZWQgPSB0cnVlO1xuICAgIFxuICAgIHRoaXMuX29uUmFuZ2VOdWxsQ2hhbmdlKCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIG9uUGFyZW50RmlsdGVyQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gY2FsbGVkIGZyb20gcGFyZW50IHRvZ2dsZSBwYW5lbCB3aGVuIHNlbGVjdGVkIGZpbHRlclxuICAgKiBpcyBjbGlja2VkLiAgUmVzZXQgc2xpZGVyXG4gICAqL1xuICBvblBhcmVudEZpbHRlckNsaWNrZWQoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtcmFuZ2UtZmlsdGVyJywgQXBwUmFuZ2VGaWx0ZXIpOyIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2FwcC10b3AtYWN0aXZlLWZpbHRlcnMudHBsLmpzXCJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9jb25maWdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBUb3BBY3RpdmVGaWx0ZXJzIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVGaWx0ZXJzIDoge3R5cGUgOiBBcnJheX1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmZpbHRlcnMgPSB7fTtcbiAgICB0aGlzLmFjdGl2ZUZpbHRlcnMgPSBbXTtcblxuICAgIHRoaXMuX2luamVjdE1vZGVsKCdGaWx0ZXJzTW9kZWwnLCAnUmVjb3JkTW9kZWwnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkZpbHRlckJ1Y2tldHNVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRoZSBGaWx0ZXJzTW9kZWwgZmlsdGVyLWJ1Y2tldHMtdXBkYXRlIGV2ZW50XG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcbiAgICovXG4gIF9vblJlY29yZFNlYXJjaFVwZGF0ZShlKSB7XG4gICAgaWYoIGUuc3RhdGUgIT09ICdsb2FkZWQnICkgcmV0dXJuO1xuXG4gICAgbGV0IGFjdGl2ZSA9IFtdO1xuICAgIHRoaXMuY3VycmVudEZpbHRlcnMgPSBlLnNlYXJjaERvY3VtZW50LmZpbHRlcnMgfHwge307XG4gICAgXG4gICAgZm9yKCBsZXQga2V5IGluIHRoaXMuY3VycmVudEZpbHRlcnMgKSB7XG4gICAgICBsZXQgZmlsdGVyID0gdGhpcy5jdXJyZW50RmlsdGVyc1trZXldO1xuXG4gICAgICBpZiggZmlsdGVyLnR5cGUgPT09ICdrZXl3b3JkJyApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RmlsdGVyc1trZXldLnZhbHVlLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgIGFjdGl2ZS5wdXNoKHtcbiAgICAgICAgICAgIGJ1Y2tldCA6IGtleSxcbiAgICAgICAgICAgIHR5cGUgOiAna2V5d29yZCcsXG4gICAgICAgICAgICB2YWx1ZSA6IHZhbHVlLFxuICAgICAgICAgICAgbGFiZWwgOiAgdGhpcy5fZ2V0TGFiZWwoa2V5LCB2YWx1ZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYoIGZpbHRlci50eXBlID09PSAncmFuZ2UnICkge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmN1cnJlbnRGaWx0ZXJzW2tleV0udmFsdWU7XG4gICAgICAgIGFjdGl2ZS5wdXNoKHtcbiAgICAgICAgICBidWNrZXQgOiBrZXksXG4gICAgICAgICAgdHlwZSA6ICdyYW5nZScsXG4gICAgICAgICAgdmFsdWUgOiB2YWx1ZSxcbiAgICAgICAgICBsYWJlbCA6ICB2YWx1ZS5ndGUrJyB0byAnK3ZhbHVlLmx0ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmUuc29ydCgoYSwgYikgPT4gYS5sYWJlbC50b0xvd2VyQ2FzZSgpIDwgYi5sYWJlbC50b0xvd2VyQ2FzZSgpID8gLTEgOiAxKTtcblxuICAgIHRoaXMuYWN0aXZlRmlsdGVycyA9IGFjdGl2ZTtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBhY3RpdmUubGVuZ3RoID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgfVxuXG4gIF9nZXRMYWJlbChidWNrZXQsIGxhYmVsKSB7XG4gICAgbGV0IGNvbmYgPSBjb25maWcuZWxhc3RpY1NlYXJjaC5mYWNldHNbYnVja2V0XSB8fCB7fTtcbiAgICBpZiggIWNvbmYudmFsdWVNYXAgKSByZXR1cm4gbGFiZWw7XG4gICAgaWYoIHR5cGVvZiBjb25mLnZhbHVlTWFwID09PSAnb2JqZWN0JyApIHtcbiAgICAgIHJldHVybiBjb25mLnZhbHVlTWFwW2xhYmVsXSB8fCBsYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmYudmFsdWVNYXAobGFiZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uUmVtb3ZlRmlsdGVyQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gcmVtb3ZlIGZpbHRlciBidXR0b24gY2xpY2sgZXZlbnRcbiAgICogXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZSBcbiAgICovXG4gIF9vblJlbW92ZUZpbHRlckNsaWNrZWQoZSkge1xuICAgIGxldCBpdGVtID0gdGhpcy5hY3RpdmVGaWx0ZXJzLnNwbGljZShwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleCcpKSwgMSlbMF07XG5cbiAgICBsZXQgc2VhcmNoRG9jID0gdGhpcy5SZWNvcmRNb2RlbC5nZXRDdXJyZW50U2VhcmNoRG9jdW1lbnQoKTtcbiAgICB0aGlzLlJlY29yZE1vZGVsLnNldFBhZ2luZyhzZWFyY2hEb2MsIDApO1xuICAgIGlmKCBpdGVtLnR5cGUgPT09ICdrZXl3b3JkJykge1xuICAgICAgdGhpcy5SZWNvcmRNb2RlbC5yZW1vdmVLZXl3b3JkRmlsdGVyKHNlYXJjaERvYywgaXRlbS5idWNrZXQsIGl0ZW0udmFsdWUpO1xuICAgIH0gZWxzZSBpZiggaXRlbS50eXBlID09PSAncmFuZ2UnICkge1xuICAgICAgdGhpcy5SZWNvcmRNb2RlbC5yZW1vdmVSYW5nZUZpbHRlcihzZWFyY2hEb2MsIGl0ZW0uYnVja2V0KTtcbiAgICB9XG4gICAgdGhpcy5SZWNvcmRNb2RlbC5zZXRTZWFyY2hMb2NhdGlvbihzZWFyY2hEb2MpO1xuXG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC10b3AtYWN0aXZlLWZpbHRlcnMnLCBBcHBUb3BBY3RpdmVGaWx0ZXJzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXNtKTtcbiAgfVxuXG4gIC5sYXlvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgaXJvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgLnJtLWJ0biB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuPC9zdHlsZT4gIFxuXG48ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPkFjdGl2ZSBGaWx0ZXJzOjwvZGl2PlxuICAke3RoaXMuYWN0aXZlRmlsdGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiBodG1sYFxuICAgIDxkaXYgQGNsaWNrPVwiJHt0aGlzLl9vblJlbW92ZUZpbHRlckNsaWNrZWR9XCIgY2xhc3M9XCJybS1idG5cIiBpbmRleD1cIiR7aW5kZXh9XCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmluLWljb25zOmNsb3NlXCI+PC9pcm9uLWljb24+ICR7aXRlbS5sYWJlbH1cbiAgICA8L2Rpdj5cbiAgYCl9XG48L2Rpdj5cblxuYDt9IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSBpbmNsdWRlPVxcXCJzaGFyZWQtc3R5bGVzXFxcIj5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiB2YXIoLS1ncmlkLWNlbGwtd2lkdGgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgOmhvc3QoOmhvdmVyKSwgOmhvc3QoOmZvY3VzKSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAtMnB4IDAgMCAtMnB4O1xcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHNob3ctaW1nIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMH1cXG4gICAgdG8ge29wYWNpdHk6IDF9XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBhbmltYXRpb246IHNob3ctaW1nIDMwMG1zIGxpbmVhcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICAvKiB3aWR0aDogdmFyKC0tZ3JpZC1jZWxsLXdpZHRoKTsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7ICovXFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwOyAqL1xcbiAgfVxcblxcbiAgLmNvbGxlY3Rpb24tbmFtZSB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LXRleHQpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctbGlnaHQpO1xcbiAgfVxcblxcbiAgLnllYXIge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheS10ZXh0KTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWxpZ2h0KTtcXG4gICAgZmxleDogMTtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBkaXNwbGF5IDogZmxleDsgXFxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyOyBcXG4gICAgbWFyZ2luLXRvcCA6IDEwcHg7XFxuICB9XFxuXFxuICBoNCB7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgfVxcblxcbiAgaXJvbi1pY29uIHtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAuaW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1MHB4OyBcXG4gIH1cXG5cXG4gIC5jYXJkLXRleHQge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcbiAgfVxcblxcbiAgLnZpZGVvLXRodW1ibmFpbCB7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHdpZHRoOiAzMHB4OyBcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI1Jyk7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IFxcbiAgaGlkZGVuJD1cXFwiW1shaXNJbWFnZV1dXFxcIiBcXG4gIGNsYXNzPVxcXCJpbWFnZVxcXCIgXFxuICBpZD1cXFwiaW1nUm9vdFxcXCJcXG4gIHN0eWxlJD1cXFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdbW2ltZ1RodW1iYWlsXV0nKTsgaGVpZ2h0OltbaW1nSGVpZ2h0XV1weDtcXFwiPlxcbiAgPGltZyBpZD1cXFwiaW1nXFxcIiBzcmMkPVxcXCJbW2ltZ1VybF1dXFxcIiBzdHlsZSQ9XFxcImhlaWdodDpbW2ltZ0hlaWdodF1dcHg7IHdpZHRoOiAxMDAlXFxcIiBvbmxvYWQ9XFxcInRoaXMuc3R5bGUuZGlzcGxheT0nYmxvY2snO1xcXCIgLz5cXG4gIDxkaXYgaGlkZGVuJD1cXFwiW1shaXNWaWRlb11dXFxcIiBjbGFzcz1cXFwidmlkZW8tdGh1bWJuYWlsXFxcIj48L2Rpdj5cXG4gIDwhLS1cXG4gICAgPGRpdiBzdHlsZSQ9XFxcImJhY2tncm91bmQtaW1hZ2U6IHVybCgnW1tpbWdUaHVtYmFpbF1dJyk7aGVpZ2h0OltbaW1nSGVpZ2h0XV1weFxcXCIgY2xhc3M9XFxcImltZ1xcXCI+PC9kaXY+XFxuICAgIDxkaXYgc3R5bGUkPVxcXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ1tbaW1nVXJsXV0nKTtoZWlnaHQ6W1tpbWdIZWlnaHRdXXB4XFxcIiBjbGFzcz1cXFwiaW1nXFxcIj48L2Rpdj5cXG4gIC0tPlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb2xsZWN0aW9uLW5hbWVcXFwiPltbY29sbGVjdGlvbk5hbWVdXTwvZGl2PlxcblxcbiAgPGg0PltbbmFtZV1dPC9oND5cXG5cXG4gIDx0ZW1wbGF0ZSBpcz1cXFwiZG9tLXJlcGVhdFxcXCIgaXRlbXM9XFxcIltbY3JlYXRvcl1dXFxcIj5cXG4gICAgPGFwcC1zZWFyY2gtcmVzdWx0LWNyZWF0b3IgY3JlYXRvcj1cXFwiW1tpdGVtXV1cXFwiIGdyaWQ+PC9hcHAtc2VhcmNoLXJlc3VsdC1jcmVhdG9yPlxcbiAgPC90ZW1wbGF0ZT5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInllYXJcXFwiPltbeWVhcl1dPC9kaXY+XFxuICAgIDxkaXY+XFxuICAgICAgPCEtLSA8aXJvbi1pY29uIGljb249XFxcImZpbi1pY29uczppbWFnZVxcXCIgaGlkZGVuJD1cXFwiW1shaXNJbWFnZV1dXFxcIj48L2lyb24taWNvbj4gLS0+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XCI7IiwiaW1wb3J0IEFwcFNlYXJjaFJlc3VsdCBmcm9tIFwiLi9hcHAtc2VhcmNoLXJlc3VsdFwiXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLXNlYXJjaC1ncmlkLXJlc3VsdC5odG1sXCJcblxuZXhwb3J0IGNsYXNzIEFwcFNlYXJjaEdyaWRSZXN1bHQgZXh0ZW5kcyBBcHBTZWFyY2hSZXN1bHQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXNlYXJjaC1ncmlkLXJlc3VsdCcsIEFwcFNlYXJjaEdyaWRSZXN1bHQpOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIFxcbiAgOmhvc3QoOmhvdmVyKSwgOmhvc3QoOmZvY3VzKSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaW1nIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IHZhcigtLWdyaWQtY2VsbC13aWR0aCk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgfVxcblxcbiAgLmNvbGxlY3Rpb24tbmFtZSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtc20pO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheS10ZXh0KTtcXG4gIH1cXG5cXG4gIC55ZWFyIHtcXG4gICAgY29sb3I6IHZhcigtLWdyYXktdGV4dCk7XFxuICAgIGZsZXg6IDE7XFxuICB9XFxuXFxuICAuc3BhY2VyIHtcXG4gICAgZmxleDogMTtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBkaXNwbGF5IDogZmxleDsgXFxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyOyBcXG4gICAgbWFyZ2luLXRvcCA6IDEwcHg7XFxuICB9XFxuXFxuICAubGF5b3V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIGg0IHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgfVxcblxcbiAgaXJvbi1pY29uIHtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAuZmxleC12ZXJ0aWNhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIC5kYXRhIHtcXG4gICAgcGFkZGluZzogMTVweDsgXFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuICBAbWVkaWEobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuaW1nIHtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5kYXRhIHtcXG4gICAgICBwYWRkaW5nOiA4cHg7XFxuICAgIH1cXG5cXG4gICAgOmhvc3Qge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICB9XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJsYXlvdXRcXFwiPlxcbiAgPGRpdiBzdHlsZSQ9XFxcImJhY2tncm91bmQtaW1hZ2U6IHVybCgnW1tpbWdVcmxdXScpXFxcIiBoaWRkZW4kPVxcXCJbWyFpc0ltYWdlXV1cXFwiIGNsYXNzPVxcXCJpbWdcXFwiID48L2Rpdj5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcImRhdGFcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4LXZlcnRpY2FsXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsZWN0aW9uLW5hbWVcXFwiPltbY29sbGVjdGlvbk5hbWVdXTwvZGl2PlxcbiAgICAgIFxcbiAgICAgIDxoND5bW25hbWVdXTwvaDQ+XFxuICAgIFxcbiAgICAgIDx0ZW1wbGF0ZSBpcz1cXFwiZG9tLXJlcGVhdFxcXCIgaXRlbXM9XFxcIltbY3JlYXRvcl1dXFxcIj5cXG4gICAgICAgIDxhcHAtc2VhcmNoLXJlc3VsdC1jcmVhdG9yIGNyZWF0b3I9XFxcIltbaXRlbV1dXFxcIiBjb2w+PC9hcHAtc2VhcmNoLXJlc3VsdC1jcmVhdG9yPlxcbiAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgXFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3BhY2VyXFxcIj48L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwieWVhclxcXCI+W1t5ZWFyXV08L2Rpdj5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgIDwhLS0gPGlyb24taWNvbiBpY29uPVxcXCJmaW4taWNvbnM6aW1hZ2VcXFwiIGhpZGRlbiQ9XFxcIltbIWlzSW1hZ2VdXVxcXCI+PC9pcm9uLWljb24+IC0tPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XCI7IiwiaW1wb3J0IEFwcFNlYXJjaFJlc3VsdCBmcm9tIFwiLi9hcHAtc2VhcmNoLXJlc3VsdFwiXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLXNlYXJjaC1saXN0LXJlc3VsdC5odG1sXCJcblxuZXhwb3J0IGNsYXNzIEFwcFNlYXJjaExpc3RSZXN1bHQgZXh0ZW5kcyBBcHBTZWFyY2hSZXN1bHQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXNlYXJjaC1saXN0LXJlc3VsdCcsIEFwcFNlYXJjaExpc3RSZXN1bHQpOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgLnRleHQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6IHZhcigtLWdyYXktdGV4dCk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1saWdodCk7XFxuICB9XFxuICA6aG9zdChbY29sXSkgLnRleHQge1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICB9XFxuICA6aG9zdChbZ3JpZF0pIC50ZXh0IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWdyaWQtY2VsbC13aWR0aCkgLSAzMHB4KTtcXG4gIH1cXG48L3N0eWxlPlxcblxcbjxhIGNsYXNzPVxcXCJ0ZXh0XFxcIiBoaWRkZW49XFxcIltbIWxpbmtdXVxcXCIgaHJlZj1cXFwiW1t0ZXh0TGFiZWxdXVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9vcGVuZXJcXFwiIG9uLWNsaWNrPVxcXCJfb25DbGlja1xcXCI+W1t0ZXh0TGFiZWxdXTwvYT5cXG48ZGl2IGNsYXNzPVxcXCJ0ZXh0XFxcIiBoaWRkZW49XFxcIltbbGlua11dXFxcIj5bW3RleHRMYWJlbF1dPC9kaXY+XCI7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtc2VhcmNoLXJlc3VsdC1jcmVhdG9yLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBTZWFyY2hSZXN1bHRDcmVhdG9yIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0b3IgOiB7XG4gICAgICAgIHR5cGUgOiBPYmplY3QsXG4gICAgICAgIHZhbHVlIDogbnVsbCxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX29uQ3JlYXRvclVwZGF0ZSdcbiAgICAgIH0sXG4gICAgICB0ZXh0TGFiZWwgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBsaW5rIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkxhYmVsVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBmaXJlZCB3aGVuIGxhYmVsIHVwZGF0ZXMuICBUaGlzIGVsZW1lbnQgZGV0ZWN0cyBpZiB0aGUgY3JlYXRvclxuICAgKiBpcyBhbiBleHRlcm5hbCBsaW5rIG9yIGEgc3RyaW5nIGxhYmVsLiAgVGhlbiByZW5kZXJzIGEgbGlua1xuICAgKi9cbiAgX29uQ3JlYXRvclVwZGF0ZSgpIHtcbiAgICBpZiggIXRoaXMuY3JlYXRvciApIHJldHVybjtcblxuICAgIGlmKCB0aGlzLmNyZWF0b3JbJ0BpZCddICkgdGhpcy5saW5rID0gdHJ1ZTtcbiAgICBlbHNlIHRoaXMubGluayA9IGZhbHNlO1xuXG4gICAgaWYoIHRoaXMuY3JlYXRvci5uYW1lICkgdGhpcy50ZXh0TGFiZWwgPSB0aGlzLmNyZWF0b3IubmFtZTtcbiAgICBlbHNlIHRoaXMudGV4dExhYmVsID0gdGhpcy5jcmVhdG9yWydAaWQnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNsaWNrXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBhbmNob3IgdGFnIGNsaWNrIGV2ZW50LiBTdG9wIGV2ZW50IGZyb20gYnViYmxpbmc7XG4gICAqL1xuICBfb25DbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1zZWFyY2gtcmVzdWx0LWNyZWF0b3InLCBBcHBTZWFyY2hSZXN1bHRDcmVhdG9yKTsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvdXRpbHNcIlxuaW1wb3J0IFwiLi9hcHAtc2VhcmNoLXJlc3VsdC1jcmVhdG9yXCJcblxuaW1wb3J0IENvbGxlY3Rpb25JbnRlcmZhY2UgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvQ29sbGVjdGlvbkludGVyZmFjZVwiXG5pbXBvcnQgQXBwU3RhdGVJbnRlcmZhY2UgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvQXBwU3RhdGVJbnRlcmZhY2VcIlxuaW1wb3J0IE1lZGlhSW50ZXJmYWNlIGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL01lZGlhSW50ZXJmYWNlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwU2VhcmNoUmVzdWx0IGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gIC53aXRoKEV2ZW50SW50ZXJmYWNlLCBBcHBTdGF0ZUludGVyZmFjZSwgQ29sbGVjdGlvbkludGVyZmFjZSwgTWVkaWFJbnRlcmZhY2UpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEgOiB7XG4gICAgICAgIHR5cGUgOiBPYmplY3QsXG4gICAgICAgIHZhbHVlIDogKCkgPT4ge30sXG4gICAgICAgIG9ic2VydmVyIDogJ19vbkRhdGFVcGRhdGUnXG4gICAgICB9LFxuICAgICAgZmV0Y2hJZCA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIGlzVmlkZW86IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgaXNJbWFnZSA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBpbWdVcmwgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBjb2xsZWN0aW9uTmFtZSA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIG5hbWUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbiA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIGNyZWF0b3IgOiB7XG4gICAgICAgIHR5cGUgOiBBcnJheSxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiBbXVxuICAgICAgfSxcbiAgICAgIHllYXIgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICB0YWJpbmRleCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAwLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGUgOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYmFzZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCsnLy8nK3dpbmRvdy5sb2NhdGlvbi5ob3N0KycvZmNyZXBvL3Jlc3QnO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLl9vbkNsaWNrKCkpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgIGlmKCBlLndoaWNoICE9PSAxMyApIHJldHVybjtcbiAgICAgIHRoaXMuX29uQ2xpY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNsaWNrXG4gICAqIEBkZXNjcmlwdGlvbiBGaXJlZCB3aGVuIHRoaXMgZWxlbWVudCBpcyBjbGlja2VkXG4gICAqL1xuICBfb25DbGljaygpIHtcbiAgICB0aGlzLl9zZXRXaW5kb3dMb2NhdGlvbih0aGlzLmZldGNoSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uRGF0YVVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZmlyZWQgd2hlbiBgZGF0YWAgcHJvcGVydHkgdXBkYXRlcy4gIFNldCBVSSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgYXN5bmMgX29uRGF0YVVwZGF0ZSgpIHtcbiAgICBsZXQgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0YSk7XG5cbiAgICBpZiggIWRhdGFbJ0BpZCddICkgcmV0dXJuO1xuICAgIFxuICAgIHRoaXMuZmV0Y2hJZCA9IGRhdGFbJ0BpZCddO1xuXG4gICAgdGhpcy5uYW1lID0gdGhpcy5kYXRhLm5hbWUgfHwgKHRoaXMuZGF0YS5pZGVudGlmaWVyID8gdGhpcy5kYXRhLmlkZW50aWZpZXJbJ0BpZCddIDogJycpO1xuXG4gICAgbGV0IHZpZGVvID0gdGhpcy5kYXRhLnZpZGVvO1xuICAgIGlmICggdmlkZW8gKSB7XG4gICAgICB0aGlzLmlzVmlkZW8gPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBsZXQgaW1nRWxlID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNpbWcnKTtcbiAgICBpZiggaW1nRWxlICkgaW1nRWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBsZXQgaW1nV2lkdGggPSAyNTA7ICAgIFxuICAgIGxldCBpbWcgPSB0aGlzLmRhdGEuaW1hZ2U7ICBcbiAgICBpZiggaW1nICkge1xuICAgICAgbGV0IHJhdGlvID0gaW1nLmhlaWdodCAvIGltZy53aWR0aDtcbiAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gTWF0aC5mbG9vcihpbWdXaWR0aCAqIHJhdGlvKTtcbiAgICAgIHRoaXMuaW1nVXJsID0gdGhpcy5fZ2V0SW1nVXJsKGltZy51cmwsIG51bGwsIHRoaXMuaW1nSGVpZ2h0KTtcblxuICAgICAgaWYoIGltZy5jb2xvclBhbGV0dGUgKSB7XG4gICAgICAgIHRoaXMuaW1nVGh1bWJhaWwgPSBpbWcuY29sb3JQYWxldHRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbWdUaHVtYmFpbCA9ICcnO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLmlzSW1hZ2UgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltZ1VybCA9ICcnO1xuICAgICAgdGhpcy5pc0ltYWdlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMuZGF0YS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICBpZiggdGhpcy5kZXNjcmlwdGlvbi5sZW5ndGggPiAyMDAgKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbi5zdWJzdHIoMCwgMjAwKSsnLi4uJztcbiAgICB9XG5cbiAgICB0aGlzLnllYXIgPSB1dGlscy5nZXRZZWFyRnJvbURhdGUoZGF0YS5jcmVhdGVkKTtcblxuICAgIGlmKCBBcnJheS5pc0FycmF5KGRhdGEuY3JlYXRvcikgKSB7XG4gICAgICB0aGlzLmNyZWF0b3IgPSBkYXRhLmNyZWF0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JlYXRvciA9IFtkYXRhLmNyZWF0b3IgfHwgJyddO1xuICAgIH1cblxuICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSB0aGlzLmRhdGEuY29sbGVjdGlvbklkIHx8ICcnO1xuICAgIGlmKCB0aGlzLmNvbGxlY3Rpb25OYW1lICkge1xuICAgICAgbGV0IGNvbGxlY3Rpb24gPSBhd2FpdCB0aGlzLl9nZXRDb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbk5hbWUpO1xuICAgICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb24ubmFtZTtcbiAgICB9XG4gIH1cblxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDExNTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgNXB4XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gIH1cXG5cXG4gIHNlbGVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tcy1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtby1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgcGFkZGluZzogNXB4IDMwcHggNXB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXhNQ0EySWo0OFpHVm1jejQ4YzNSNWJHVStMbU5zY3kweGUyWnBiR3c2SXpBd01qZzFOVHQ5UEM5emRIbHNaVDQ4TDJSbFpuTStQR2MrUEhCdmJIbG5iMjRnWTJ4aGMzTTlJbU5zY3kweElpQndiMmx1ZEhNOUlqQWdNQ0F4TUNBd0lEVWdOaUF3SURBaUx6NDhMMmMrUEM5emRtYysnKTtcXG4gIH1cXG4gIC8qIGZvciBJRSAqL1xcbiAgc2VsZWN0OjotbXMtZXhwYW5kIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIGgzIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBtYXJnaW46IDE1cHggMCAwIDA7XFxuICAgIHBhZGRpbmc6IDE1cHggMCAwIDA7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgfVxcblxcbiAgLm1hc29ucnkge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC5tYXNvbnJ5IC5pdGVtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xcbiAgICB0b3AgOiAyNXB4O1xcbiAgICBsZWZ0OiAyNXB4O1xcbiAgICB3aWxsLWNoYW5nZTogdG9wLCBsZWZ0O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgNTAwbXMgZWFzZS1vdXQsIGxlZnQgNTAwbXMgZWFzZS1vdXQ7XFxuICB9XFxuXFxuICAubGlzdCB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG5cXG4gIC5saXN0IC5pdGVtIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhYWEwMDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIH1cXG5cXG4gIC5zcGFjZXIge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgfVxcblxcbiAgLnRvdGFsIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljOyBcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcblxcbiAgLm1vYmlsZS10b3RhbCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgXFxuICB9XFxuXFxuICAuZmlsbGVyIHtcXG4gICAgZmxleDogMTtcXG4gIH1cXG5cXG4gIHBhcGVyLXNwaW5uZXItbGl0ZSB7XFxuICAgIC0tcGFwZXItc3Bpbm5lci1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgfVxcblxcbiAgLmxvYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIH1cXG5cXG4gIC5lcnJvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcblxcbiAgY29yay1wYWdpbmF0aW9uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICAtLWNvcmstY29sb3IgOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICAtLWNvcmstYmFja2dyb3VuZC1jb2xvciA6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5kcmF3ZXItdG9nZ2xlIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC5kcmF3ZXItdG9nZ2xlID4gc3BhbiB7XFxuICAgIHBhZGRpbmcgOiAwIDEwcHg7XFxuICB9XFxuICAuZHJhd2VyLXRvZ2dsZSBpcm9uLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAuZHJhd2VyLXRvZ2dsZVtkaXNhYmxlZF0ge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZGlzcGxheSA6IG5vbmU7XFxuICB9XFxuXFxuICAubW9iaWxlLWhlYWRlciB7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLm1vYmlsZS1oZWFkZXIgLnJvdzIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuXFxuICAubW9iaWxlLWhlYWRlciAucm93Mi1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY29sbGVjdGlvbnMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICBAbWVkaWEoIG1heC13aWR0aDogNDAwcHggKSB7XFxuICAgIC5tb2JpbGUtaGVhZGVyIC5yb3cyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIC5tb2JpbGUtaGVhZGVyIC5yb3cyIC50b3RhbCB7XFxuICAgICAgcGFkZGluZzogOHB4IDAgNXB4IDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSggbWluLXdpZHRoOiA5NzVweCApIHtcXG4gICAgLmhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgICAubW9iaWxlLWhlYWRlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInRvdGFsXFxcIiBoaWRkZW4kPVxcXCJbW3Nob3dMb2FkaW5nXV1cXFwiPltbdG90YWxdXSByZXN1bHRzIGZvdW5kPC9kaXY+XFxuICBcXG4gIDxkaXYgY2xhc3M9XFxcImZpbGxlclxcXCI+PC9kaXY+XFxuICBcXG4gIDxwYXBlci1pY29uLWJ1dHRvbiBcXG4gICAgbm9pbmtcXG4gICAgaWNvbj1cXFwiZmluLWljb25zOmdyaWRcXFwiIFxcbiAgICBkaXNhYmxlZCQ9XFxcIltbIWlzTGlzdExheW91dF1dXFxcIlxcbiAgICBvbi1jbGljaz1cXFwiX29uTGF5b3V0VG9nZ2xlXFxcIiBcXG4gICAgdHlwZT1cXFwibWFzb25yeVxcXCI+XFxuICA8L3BhcGVyLWljb24tYnV0dG9uPlxcbiAgPGRpdiBjbGFzcz1cXFwic3BhY2VyXFxcIj48L2Rpdj5cXG4gIDxwYXBlci1pY29uLWJ1dHRvbiBcXG4gICAgbm9pbmtcXG4gICAgaWNvbj1cXFwiZmluLWljb25zOmxpc3RcXFwiIFxcbiAgICBkaXNhYmxlZCQ9XFxcIltbaXNMaXN0TGF5b3V0XV1cXFwiXFxuICAgIG9uLWNsaWNrPVxcXCJfb25MYXlvdXRUb2dnbGVcXFwiIFxcbiAgICB0eXBlPVxcXCJsaXN0XFxcIj5cXG4gIDwvcGFwZXItaWNvbi1idXR0b24+XFxuICA8ZGl2IGNsYXNzPVxcXCJzcGFjZXJcXFwiPjwvZGl2PlxcbiAgXFxuICA8ZGl2PlxcbiAgICA8c2VsZWN0IGlkPVxcXCJudW1QZXJQYWdlXFxcIiBvbi1jaGFuZ2U9XFxcIl9vblBhZ2VTaXplQ2hhbmdlXFxcIj5cXG4gICAgICA8b3B0aW9uIHZhbHVlPVxcXCI1MFxcXCI+NTA8L29wdGlvbj5cXG4gICAgICA8b3B0aW9uIHZhbHVlPVxcXCIyMFxcXCI+MjA8L29wdGlvbj5cXG4gICAgICA8b3B0aW9uIHZhbHVlPVxcXCIxMFxcXCIgc2VsZWN0ZWQ+MTA8L29wdGlvbj5cXG4gICAgPC9zZWxlY3Q+XFxuICA8L2Rpdj5cXG4gIDxkaXYgc3R5bGU9XFxcIm1hcmdpbjogMCAxMHB4OyBmb250LXN0eWxlOml0YWxpY1xcXCI+SXRlbXMgcGVyIHBhZ2U8L2Rpdj5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJtb2JpbGUtaGVhZGVyXFxcIj5cXG4gIDxkaXY+XFxuICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6aW5saW5lLWJsb2NrXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcmF3ZXItdG9nZ2xlXFxcIiBvbi1jbGljaz1cXFwiX29uVG9nZ2xlRHJhd2VyXFxcIj5cXG4gICAgICAgIDxzcGFuPkluZm8gLyBGaWx0ZXJzPC9zcGFuPlxcbiAgICAgICAgPGlyb24taWNvbiBpY29uPVxcXCJhZGRcXFwiPjwvaXJvbi1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cXFwicm93MlxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRvdGFsXFxcIiBoaWRkZW4kPVxcXCJbW3Nob3dMb2FkaW5nXV1cXFwiPltbdG90YWxdXSByZXN1bHRzPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdzItcmlnaHRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZpbGxlclxcXCI+PC9kaXY+XFxuICAgIFxcbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBcXG4gICAgICAgIG5vaW5rXFxuICAgICAgICBpY29uPVxcXCJmaW4taWNvbnM6Z3JpZFxcXCIgXFxuICAgICAgICBkaXNhYmxlZCQ9XFxcIltbIWlzTGlzdExheW91dF1dXFxcIlxcbiAgICAgICAgb24tY2xpY2s9XFxcIl9vbkxheW91dFRvZ2dsZVxcXCIgXFxuICAgICAgICB0eXBlPVxcXCJtYXNvbnJ5XFxcIj5cXG4gICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNwYWNlclxcXCI+PC9kaXY+XFxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXFxuICAgICAgICBub2lua1xcbiAgICAgICAgaWNvbj1cXFwiZmluLWljb25zOmxpc3RcXFwiIFxcbiAgICAgICAgZGlzYWJsZWQkPVxcXCJbW2lzTGlzdExheW91dF1dXFxcIlxcbiAgICAgICAgb24tY2xpY2s9XFxcIl9vbkxheW91dFRvZ2dsZVxcXCIgXFxuICAgICAgICB0eXBlPVxcXCJsaXN0XFxcIj5cXG4gICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNwYWNlclxcXCI+PC9kaXY+XFxuICAgICAgXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxzZWxlY3QgaWQ9XFxcIm51bVBlclBhZ2VNXFxcIiBvbi1jaGFuZ2U9XFxcIl9vblBhZ2VTaXplQ2hhbmdlXFxcIj5cXG4gICAgICAgICAgPG9wdGlvbj41MDwvb3B0aW9uPlxcbiAgICAgICAgICA8b3B0aW9uPjIwPC9vcHRpb24+XFxuICAgICAgICAgIDxvcHRpb24+MTA8L29wdGlvbj5cXG4gICAgICAgIDwvc2VsZWN0PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbjogMCAxMHB4OyBmb250LXN0eWxlOml0YWxpY1xcXCI+cGVyIHBhZ2U8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48YXBwLXRvcC1hY3RpdmUtZmlsdGVycz48L2FwcC10b3AtYWN0aXZlLWZpbHRlcnM+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY29sbGVjdGlvbnNcXFwiIGhpZGRlbiQ9XFxcIltbIXNob3dDb2xsZWN0aW9uUmVzdWx0c11dXFxcIj5cXG4gIDxkaXYgaGlkZGVuJD1cXFwiW1shY29sbGVjdGlvblJlc3VsdHMubGVuZ3RoXV1cXFwiPlxcbiAgICA8aDM+Q29sbGVjdGlvbnM8L2gzPlxcbiAgICA8ZGl2IHN0eWxlPVxcXCJ0ZXh0LWFsaWduOmNlbnRlclxcXCI+XFxuICAgICAgPHRlbXBsYXRlIGlzPVxcXCJkb20tcmVwZWF0XFxcIiBpdGVtcz1cXFwiW1tjb2xsZWN0aW9uUmVzdWx0c11dXFxcIj5cXG4gICAgICAgIDxhcHAtY29sbGVjdGlvbi1jYXJkIFxcbiAgICAgICAgICBjb2xsZWN0aW9uPVxcXCJbW2l0ZW1dXVxcXCIgXFxuICAgICAgICAgIG9uLWtleXVwPVxcXCJfb25Db2xsZWN0aW9uQ2xpY2tlZFxcXCJcXG4gICAgICAgICAgb24tY2xpY2s9XFxcIl9vbkNvbGxlY3Rpb25DbGlja2VkXFxcIj5cXG4gICAgICAgIDwvYXBwLWNvbGxlY3Rpb24tY2FyZD5cXG4gICAgICA8L3RlbXBsYXRlPlxcbiAgICA8L2Rpdj5cXG4gICAgPGgzIGhpZGRlbiQ9XFxcIltbIXJlc3VsdHMubGVuZ3RoXV1cXFwiPkl0ZW1zPC9oMz5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgaGlkZGVuJD1cXFwiW1tzaG93RXJyb3JdXVxcXCI+XFxuICA8ZGl2IGhpZGRlbiQ9XFxcIltbc2hvd0xvYWRpbmddXVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1hc29ucnlcXFwiIGlkPVxcXCJsYXlvdXRcXFwiIGhpZGRlbiQ9XFxcIltbaXNMaXN0TGF5b3V0XV1cXFwiPlxcbiAgICAgIDx0ZW1wbGF0ZSBpcz1cXFwiZG9tLXJlcGVhdFxcXCIgaXRlbXM9XFxcIltbcmVzdWx0c11dXFxcIj5cXG4gICAgICAgIDxhcHAtc2VhcmNoLWdyaWQtcmVzdWx0IGRhdGE9XFxcIltbaXRlbV1dXFxcIiBjbGFzcz1cXFwiaXRlbVxcXCI+PC9hcHAtc2VhcmNoLWdyaWQtcmVzdWx0PlxcbiAgICAgIDwvdGVtcGxhdGU+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0XFxcIiBoaWRkZW4kPVxcXCJbWyFpc0xpc3RMYXlvdXRdXVxcXCI+XFxuICAgICAgPHRlbXBsYXRlIGlzPVxcXCJkb20tcmVwZWF0XFxcIiBpdGVtcz1cXFwiW1tyZXN1bHRzXV1cXFwiPlxcbiAgICAgICAgPGFwcC1zZWFyY2gtbGlzdC1yZXN1bHQgZGF0YT1cXFwiW1tpdGVtXV1cXFwiPjwvYXBwLXNlYXJjaC1saXN0LXJlc3VsdD5cXG4gICAgICA8L3RlbXBsYXRlPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImVycm9yXFxcIiBoaWRkZW4kPVxcXCJbWyFzaG93RXJyb3JdXVxcXCI+XFxuICA8ZGl2PltbZXJyb3JNc2ddXTwvZGl2PlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImxvYWRpbmdcXFwiIGhpZGRlbiQ9XFxcIltbIXNob3dMb2FkaW5nXV1cXFwiPlxcbiAgPHBhcGVyLXNwaW5uZXItbGl0ZSBhY3RpdmUkPVxcXCJbW3Nob3dMb2FkaW5nXV1cXFwiPjwvcGFwZXItc3Bpbm5lci1saXRlPlxcbjwvZGl2PlxcblxcbjxkaXYgc3R5bGU9XFxcInRleHQtYWxpZ246Y2VudGVyXFxcIiBoaWRkZW4kPVxcXCJbW3Nob3dMb2FkaW5nXV1cXFwiPlxcbiAgPGNvcmstcGFnaW5hdGlvbiBcXG4gICAgdG90YWwtcmVzdWx0cz1cXFwiW1twYWdpbmF0aW9uVG90YWxdXVxcXCIgXFxuICAgIGl0ZW1zLXBlci1wYWdlPVxcXCJbW251bVBlclBhZ2VdXVxcXCJcXG4gICAgY3VycmVudC1pbmRleD1cXFwiW1tjdXJyZW50SW5kZXhdXVxcXCJcXG4gICAgb24tbmF2PVxcXCJfb25QYWdpbmF0aW9uTmF2XFxcIj5cXG4gIDwvY29yay1wYWdpbmF0aW9uPlxcbjwvZGl2PlxcblxcbjxkaXYgaGlkZGVuJD1cXFwiW1shdG90YWxPdmVyTWF4V2luZG93XV1cXFwiIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXJcXFwiPkRpZ2l0YWwgQ29sbGVjdGlvbnMgbGltaXRzIHJlc3VsdHMgdG8gXFxuICAxMCwwMDAuICBVc2Uga2V5d29yZHMgYW5kL29yIGZpbHRlcnMgdG8gcmVmaW5lIHNlYXJjaC5cXG48L2Rpdj5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IFwiQHVjZC1saWIvY29yay1wYWdpbmF0aW9uXCJcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1saXRlXCJcblxuaW1wb3J0IFwiLi9hcHAtc2VhcmNoLWdyaWQtcmVzdWx0XCJcbmltcG9ydCBcIi4vYXBwLXNlYXJjaC1saXN0LXJlc3VsdFwiXG5pbXBvcnQgXCIuLi8uLi8uLi91dGlscy9hcHAtY29sbGVjdGlvbi1jYXJkXCJcbmltcG9ydCBcIi4uL2ZpbHRlcmluZy9hcHAtdG9wLWFjdGl2ZS1maWx0ZXJzXCJcbmltcG9ydCBSZWNvcmRJbnRlcmZhY2UgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvUmVjb3JkSW50ZXJmYWNlXCJcbmltcG9ydCBBcHBTdGF0ZUludGVyZmFjZSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9BcHBTdGF0ZUludGVyZmFjZVwiXG5pbXBvcnQgQ29sbGVjdGlvbkludGVyZmFjZSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9Db2xsZWN0aW9uSW50ZXJmYWNlXCJcbmltcG9ydCBNZWRpYUludGVyZmFjZSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9NZWRpYUludGVyZmFjZVwiXG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2FwcC1zZWFyY2gtcmVzdWx0cy1wYW5lbC5odG1sJ1xuXG5jb25zdCBTRUFSQ0hfUkVTVUxUU19MQVlPVVQgPSAnc2VhcmNoLXJlc3VsdHMtbGF5b3V0JztcbmxldCBpbml0SXNMaXN0TGF5b3V0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU0VBUkNIX1JFU1VMVFNfTEFZT1VUKTtcbmlmKCBpbml0SXNMaXN0TGF5b3V0ID09PSAnbGlzdCcgKSBpbml0SXNMaXN0TGF5b3V0ID0gdHJ1ZVxuZWxzZSBpbml0SXNMaXN0TGF5b3V0ID0gZmFsc2U7XG5cbmNsYXNzIEFwcFNlYXJjaFJlc3VsdHNQYW5lbCBleHRlbmRzIE1peGluKFBvbHltZXJFbGVtZW50KVxuICAgICAgLndpdGgoRXZlbnRJbnRlcmZhY2UsIFJlY29yZEludGVyZmFjZSwgQXBwU3RhdGVJbnRlcmZhY2UsIENvbGxlY3Rpb25JbnRlcmZhY2UsIE1lZGlhSW50ZXJmYWNlKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIEFycmF5IG9mIHNlYXJjaCByZXN1bHRzXG4gICAgICAgKi9cbiAgICAgIHJlc3VsdHMgOiB7XG4gICAgICAgIHR5cGUgOiBBcnJheSxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiBbXVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBcnJheSBvZiBjb2xsZWN0aW9uIHNlYXJjaCByZXN1bHRzXG4gICAgICAgKi9cbiAgICAgIGNvbGxlY3Rpb25SZXN1bHRzIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW11cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogc2l6ZSBpbiBweCdzIGJldHdlZW4gZWFjaCBtYXNvbmFyeSBsYXlvdXQgY2VsbFxuICAgICAgICovXG4gICAgICBtYXNvbnJ5TWFyZ2luIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDE1XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBhcmUgd2UgaW4gbGlzdCBvciBtYXNvbnJ5IGxheW91dFxuICAgICAgICovXG4gICAgICBpc0xpc3RMYXlvdXQgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGluaXRJc0xpc3RMYXlvdXRcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFVJIGRpc3BsYXkgb2YgdG90YWwgcmVzdWx0c1xuICAgICAgICovXG4gICAgICB0b3RhbCA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnMCdcbiAgICAgIH0sXG5cbiAgICAgIG51bVBlclBhZ2UgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogMVxuICAgICAgfSxcbiAgICAgIFxuICAgICAgY3VycmVudEluZGV4IDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDBcbiAgICAgIH0sXG5cbiAgICAgIHNob3dDb2xsZWN0aW9uUmVzdWx0cyA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIHNob3dFcnJvciA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIHNob3dMb2FkaW5nIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgZXJyb3JNc2cgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvLyB0b3RhbCBudW1iZXIgZm9yIHBhZ2luYXRpb24gd2lkZ2V0XG4gICAgICAvLyB3ZSBtYWtlIG91dCBhdCAxMDAwMFxuICAgICAgcGFnaW5hdGlvblRvdGFsIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICB0b3RhbE92ZXJNYXhXaW5kb3cgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLnJlc2l6ZVRpbWVyID0gLTE7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMuX3Jlc2l6ZUFzeW5jKCkpO1xuXG4gICAgdGhpcy5FdmVudEJ1cygpLm9uKCdzaG93LWNvbGxlY3Rpb24tc2VhcmNoLXJlc3VsdHMnLCBzaG93ID0+IHRoaXMuX3VwZGF0ZUNvbGxlY3Rpb25SZXN1bHRzVmlzaWJpbGl0eShzaG93KSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25BcHBTdGF0ZVVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBBcHBTdGF0ZUludGVyZmFjZSwgY2FsbGVkIHdoZW4gYXBwIHN0YXRlIHVwZGF0ZXNcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxuICAgKi9cbiAgX29uQXBwU3RhdGVVcGRhdGUoZSkge1xuICAgIGlmKCBlLmxvY2F0aW9uLnBhZ2UgIT09ICdzZWFyY2gnKSByZXR1cm47XG4gICAgdGhpcy5fcmVzaXplQXN5bmMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlbmRlclxuICAgKiBAZGVzY3JpcHRpb24gcmVuZGVyIHJlc3VsdHMgb2Ygc2VhcmNoIHF1ZXJ5XG4gICAqIFxuICAgKiBAcGFyYW0ge0FycmF5fSByZXN1bHRzIHJlc3VsdHMgdG8gcmVuZGVyXG4gICAqL1xuICByZW5kZXIocmVzdWx0cywgdG90YWwsIG51bVBlclBhZ2UsIGN1cnJlbnRJbmRleCkge1xuICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgIHRoaXMuc2hvd0hlYWRlckZvb3RlciA9IHRydWU7XG4gICAgdGhpcy5zaG93RXJyb3IgPSBmYWxzZTtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnNob3dMb2FkaW5nVGltZXIpO1xuICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnRvdGFsID0gdGhpcy5udW1iZXJXaXRoQ29tbWFzKHRvdGFsKTtcblxuICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IGhhdmUgYSBwYWdlIHRoZSByZXR1cm5zIHJlc3VsdHMgPiAxMDAwMGtcbiAgICAgIGxldCB0ID0gTWF0aC5mbG9vcigoMTAwMDAtbnVtUGVyUGFnZSkgLyBudW1QZXJQYWdlKSAqIG51bVBlclBhZ2U7XG4gICAgICBpZiggdG90YWwgPiB0ICkge1xuICAgICAgICB0b3RhbCA9IHQ7XG4gICAgICAgIHRoaXMudG90YWxPdmVyTWF4V2luZG93ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG90YWxPdmVyTWF4V2luZG93ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgICB0aGlzLnBhZ2luYXRpb25Ub3RhbCA9IHRvdGFsO1xuICAgICAgdGhpcy5udW1QZXJQYWdlID0gbnVtUGVyUGFnZTtcbiAgICAgIHRoaXMuJC5udW1QZXJQYWdlLnZhbHVlID0gbnVtUGVyUGFnZSsnJztcbiAgICAgIHRoaXMuJC5udW1QZXJQYWdlTS52YWx1ZSA9IG51bVBlclBhZ2UrJyc7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGN1cnJlbnRJbmRleDtcblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuX3Jlc2l6ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG51bWJlcldpdGhDb21tYXMoeCkge1xuICAgIHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuICB9XG5cbiAgb25Mb2FkaW5nKCkge1xuICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgIC8vIHRoaXMuc2hvd0hlYWRlckZvb3RlciA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0NvbGxlY3Rpb25SZXN1bHRzID0gZmFsc2U7XG4gICAgdGhpcy5zaG93RXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dMb2FkaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBvbkVycm9yKHN0YXRlKSB7XG4gICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgLy8gdGhpcy5zaG93SGVhZGVyRm9vdGVyID0gZmFsc2U7XG4gICAgdGhpcy5zaG93Q29sbGVjdGlvblJlc3VsdHMgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dFcnJvciA9IHRydWU7XG4gICBcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zaG93TG9hZGluZ1RpbWVyKTtcbiAgICB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XG5cbiAgICBpZiggc3RhdGUuc2hvd0Vycm9yTWVzc2FnZSApIHtcbiAgICAgIHRoaXMuZXJyb3JNc2cgPSBzdGF0ZS5lcnJvci5tZXNzYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yTXNnID0gJ09vb3BzLiBTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHNlYXJjaCEnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkxheW91dFRvZ2dsZVxuICAgKiBAZGVzY3JpcHRpb24gVG9nZ2xlIGJldHdlZW4gbWFzb25yeSBhbmQgbGlzdCBsYXlvdXRcbiAgICogXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgSFRNTCBjbGljayBldmVudFxuICAgKi9cbiAgX29uTGF5b3V0VG9nZ2xlKGUpIHtcbiAgICBsZXQgdHlwZSA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgICBpZiggdHlwZSA9PT0gJ21hc29ucnknICkge1xuICAgICAgdGhpcy5pc0xpc3RMYXlvdXQgPSBmYWxzZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNFQVJDSF9SRVNVTFRTX0xBWU9VVCwgJ21hc29ucnknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0xpc3RMYXlvdXQgPSB0cnVlO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU0VBUkNIX1JFU1VMVFNfTEFZT1VULCAnbGlzdCcpO1xuICAgIH1cblxuICAgIGlmKCAhdGhpcy5pc0xpc3RMYXlvdXQgKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5fcmVzaXplKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZXNpemVBc3luY1xuICAgKiBAZGVzY3JpcHRpb24gYnVmZmVyIHJlc2l6ZSBtYXNvbmFyeSBsYXlvdXQgY2FsbFxuICAgKi9cbiAgX3Jlc2l6ZUFzeW5jKCkge1xuICAgIGlmKCB0aGlzLnJlc2l6ZVRpbWVyICE9PSAtMSApIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKTtcbiAgICB0aGlzLnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlc2l6ZVRpbWVyID0gLTE7XG4gICAgICB0aGlzLl9yZXNpemUoKTtcbiAgICB9LCA1MCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVzaXplXG4gICAqIEBkZXNjcmlwdGlvbiByZXNpemUgbWFzb25hcnkgbGF5b3V0XG4gICAqL1xuICBfcmVzaXplKCkge1xuICAgIGlmKCB0aGlzLmlzTGlzdExheW91dCApIHJldHVybjtcblxuICAgIGxldCBmaXJzdERpdiA9IHRoaXMuJC5sYXlvdXQucXVlcnlTZWxlY3RvcignYXBwLXNlYXJjaC1ncmlkLXJlc3VsdCcpO1xuICAgIGlmKCAhZmlyc3REaXYgKSByZXR1cm47XG5cbiAgICBsZXQgZXcgPSB0aGlzLm9mZnNldFdpZHRoO1xuICAgIGxldCB3ID0gZmlyc3REaXYub2Zmc2V0V2lkdGggKyB0aGlzLm1hc29ucnlNYXJnaW47XG5cbiAgICBsZXQgbnVtQ29scyA9IE1hdGgubWF4KE1hdGguZmxvb3IoZXcgLyB3KSwgMSk7XG4gICAgLy8gdGhpcyBtYWtlcyBzdXJlIGNvbHVtbnMgYXJlIGNlbnRlcmVkXG4gICAgbGV0IGxlZnRPZmZzZXQgPSBNYXRoLmZsb29yKChldyAtIG51bUNvbHMgKiB3KSAvIDIpO1xuXG4gICAgbGV0IGNvbEhlaWdodHMgPSBbXTtcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IG51bUNvbHM7IGkrKyApIGNvbEhlaWdodHMucHVzaCgwKTtcblxuICAgIGxldCBlbGVzID0gdGhpcy4kLmxheW91dC5xdWVyeVNlbGVjdG9yQWxsKCdhcHAtc2VhcmNoLWdyaWQtcmVzdWx0Jyk7XG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBlbGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgbGV0IGNvbCA9IHRoaXMuX2ZpbmRNaW5Db2woY29sSGVpZ2h0cyk7XG4gICAgICBsZXQgY2hlaWdodCA9IGNvbEhlaWdodHNbY29sXTtcblxuICAgICAgZWxlc1tpXS5zdHlsZS5sZWZ0ID0gKGxlZnRPZmZzZXQgKyBjb2wgKiB3KSArICdweCc7XG4gICAgICBlbGVzW2ldLnN0eWxlLnRvcCA9IGNvbEhlaWdodHNbY29sXSArICdweCc7XG4gICAgICAvLyBlbGVzW2ldLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICAgIGNvbEhlaWdodHNbY29sXSArPSBlbGVzW2ldLm9mZnNldEhlaWdodCArIHRoaXMubWFzb25yeU1hcmdpbjtcbiAgICB9XG5cbiAgICBsZXQgbWF4SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgY29sSGVpZ2h0cyk7XG4gICAgdGhpcy4kLmxheW91dC5zdHlsZS5oZWlnaHQgPSBtYXhIZWlnaHQrJ3B4JztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9maW5kTWluQ29sXG4gICAqIEBkZXNjcmlwdGlvbiBnaXZlbiBhbiBhcnJheSBvZiBjb2x1bW4gaGVpZ2h0cywgcmV0dXJuXG4gICAqIHRoZSBjb2x1bW4gaW5kZXggdGhhdCBoYXMgdGhlIG1pbiBoZWlnaHRcbiAgICogXG4gICAqIEBwYXJhbSB7QXJyYXl9IGNvbEhlaWdodHMgYXJyYXkgb2YgaGVpZ2h0c1xuICAgKi9cbiAgX2ZpbmRNaW5Db2woY29sSGVpZ2h0cykge1xuICAgIGxldCBtaW4gPSBjb2xIZWlnaHRzWzBdO1xuICAgIGxldCBtaW5Db2wgPSAwO1xuICAgIGZvciggdmFyIGkgPSAxOyBpIDwgY29sSGVpZ2h0cy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGlmKCBtaW4gPiBjb2xIZWlnaHRzW2ldICkge1xuICAgICAgICBtaW4gPSBjb2xIZWlnaHRzW2ldO1xuICAgICAgICBtaW5Db2wgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluQ29sO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uVG9nZ2xlRHJhd2VyXG4gICAqIEBkZXNjcmlwdGlvbiBmaXJlIGFuIGV2ZW50IGZvciBhcHAtc2VhcmNoIGluZGljYXRpbmcgdGhlIGRyYXdlciB0b2dnbGUgaGFzXG4gICAqIGJlZW4gY2xpY2tlZC5cbiAgICovXG4gIF9vblRvZ2dsZURyYXdlcigpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUtZHJhd2VyJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uUGFnZVNpemVDaGFuZ2VcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIHNlbGVjdCBib3ggY2hhbmdlIGV2ZW50LCBkaXNwYXRjaCBldmVudCB0byBwYXJlbnRcbiAgICogYWxlcnRpbmcgbmV3IHBhZ2Ugc2l6ZVxuICAgKi9cbiAgX29uUGFnZVNpemVDaGFuZ2UoZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3BhZ2Utc2l6ZS1jaGFuZ2UnLCB7XG4gICAgICBkZXRhaWwgOiBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uUGFnaW5hdGlvbk5hdlxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gc2NvcmstcGFnaW5hdGlvbiBgbmF2YCBldmVudCwgZGlzcGF0Y2ggZXZlbnQgdG8gcGFyZW50XG4gICAqIGFsZXJ0aW5nIHRvIG5ldyBwYWdlIFxuICAgKi9cbiAgX29uUGFnaW5hdGlvbk5hdihlKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGFnZS1jaGFuZ2UnLCB7XG4gICAgICBkZXRhaWwgOiBlLmRldGFpbFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF91cGRhdGVDb2xsZWN0aW9uUmVzdWx0c1Zpc2liaWxpdHlcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGNvbGxlY3Rpb24gdmlzaWJpbGl0eSB1cGRhdGVzIChzZWUgY29udHJ1Y3RvcikuICBGaXJlZFxuICAgKiB2aWEgQ29sbGVjdGlvbk1vZGVsIHdoaWNoIGRlY2lkZXMgaWYgYSBjb2xsZWN0aW9uIHNlYXJjaCBzaG91bGQgYmUgcHJlZm9ybWVkLlxuICAgKi9cbiAgX3VwZGF0ZUNvbGxlY3Rpb25SZXN1bHRzVmlzaWJpbGl0eShzaG93KSB7XG4gICAgdGhpcy5zaG93Q29sbGVjdGlvblJlc3VsdHMgPSBzaG93O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VhcmNoQ29sbGVjdGlvblVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBDb2xsZWN0aW9uSW50ZXJmYWNlLCBjYWxsZWQgd2hlbiBhIGNvbGxlY3Rpb24gc2VhcmNoIHN0YXRlXG4gICAqIGlzIHVwZGF0ZWQuXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcbiAgICovXG4gIF9vbkNvbGxlY3Rpb25TZWFyY2hVcGRhdGUoZSkge1xuICAgIGlmKCBlLnN0YXRlICE9PSAnbG9hZGVkJyApIHJldHVybjtcbiAgICB0aGlzLmNvbGxlY3Rpb25SZXN1bHRzID0gZS5wYXlsb2FkLnJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Db2xsZWN0aW9uQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gYXBwLWNvbGxlY3Rpb24tY2FyZCBjbGljayBldmVudFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgY2xpY2t8a2V5dXAgZXZlbnRcbiAgICovXG4gIF9vbkNvbGxlY3Rpb25DbGlja2VkKGUpIHtcbiAgICBpZiggZS50eXBlID09PSAna2V5dXAnICYmIGUud2hpY2ggIT09IDEzICkgcmV0dXJuO1xuICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5jb2xsZWN0aW9uWydAaWQnXVxuXG4gICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuX2dldEVtcHR5U2VhcmNoRG9jdW1lbnQoKTtcbiAgICB0aGlzLl9zZXRLZXl3b3JkRmlsdGVyKHNlYXJjaERvYywgJ2lzUGFydE9mLkBpZCcsIGlkKTtcbiAgICB0aGlzLlJlY29yZE1vZGVsLnNldFNlYXJjaExvY2F0aW9uKHNlYXJjaERvYyk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1zZWFyY2gtcmVzdWx0cy1wYW5lbCcsIEFwcFNlYXJjaFJlc3VsdHNQYW5lbCk7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIG91dGxpbmUgOiAwO1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICB9XFxuXFxuICA6aG9zdCg6aG92ZXIpLCA6aG9zdCg6Zm9jdXMpICB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAxM3B4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAuaW1nLmRlZmF1bHRJbWFnZSB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNjUlO1xcbiAgfVxcblxcbiAgLmltZyB7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvbG9nb3MvbG9nby13aGl0ZS01MTIucG5nJyk7IC8qIGZhbGxiYWNrICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBuZWVkcyB0byBiZSA2NSUgKi9cXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgICAgXFxuICB9XFxuXFxuICAuaW1nID4gZGl2ICB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDI1cHg7XFxuICAgIGJvdHRvbTogMjVweDtcXG4gICAgXFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1ib2xkKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzOCwgODUsIC44KTsgICAgICBcXG4gIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgXFxuICBpZD1cXFwiaW1nXFxcIlxcbiAgY2xhc3M9XFxcImltZ1xcXCIgXFxuICByb2xlPVxcXCJpbWdcXFwiIFxcbiAgYXJpYS1sYWJlbD1cXFwiW1tjb2xsZWN0aW9uLm5hbWVdXVxcXCI+XFxuICA8ZGl2PlxcbiAgICA8ZGl2PltbY29sbGVjdGlvbi5uYW1lXV08L2Rpdj5cXG4gICAgPGRpdj5bW2NvbGxlY3Rpb24ucmVjb3JkQ291bnRdXSBpdGVtczwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLWNvbGxlY3Rpb24tY2FyZC5odG1sXCI7XG5pbXBvcnQgaW9Mb2FkZXIgZnJvbSBcIi4uLy4uL2xpYi91dGlscy9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXItbG9hZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbGxlY3Rpb25DYXJkIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbGxlY3Rpb24gOiB7XG4gICAgICAgIHR5cGUgOiBPYmplY3QsXG4gICAgICAgIHZhbHVlIDogKCkgPT4gKHt9KSxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX29uQ29sbGVjdGlvbkNoYW5nZSdcbiAgICAgIH0sXG4gICAgICB0YWJpbmRleCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAwLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGUgOiB0cnVlXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hvd25JblZpZXdwb3J0ID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7ICAgIFxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKCB0aGlzLmNvbGxlY3Rpb24udGh1bWJuYWlsVXJsID09PSAnL2ltYWdlcy9sb2dvcy9sb2dvLXdoaXRlLTUxMi5wbmcnICkge1xuICAgICAgbGV0IGNhcmRzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWcnKVswXTtcbiAgICAgIGNhcmRzLmNsYXNzTmFtZSArPSAnIGRlZmF1bHRJbWFnZSc7XG4gICAgfVxuXG4gICAgaWYoICF0aGlzLm9ic2VydmVyICkge1xuICAgICAgYXdhaXQgaW9Mb2FkZXIubG9hZCgpO1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgICAgZSA9PiB0aGlzLl9vblZpZXdwb3J0SW50ZXJzZWN0aW9uKGUpLCBcbiAgICAgICAge1xuICAgICAgICAgIHJvb3RNYXJnaW46ICcxMHB4JywgXG4gICAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5pbWFnZUxvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH1cblxuICBfb25Db2xsZWN0aW9uQ2hhbmdlKCkge1xuICAgIGlmKCAhdGhpcy5zaG93bkluVmlld3BvcnQgKSByZXR1cm47XG4gICAgdGhpcy5fc2V0QmFja2dyb3VuZEltYWdlKCk7XG4gIH1cblxuICBfb25WaWV3cG9ydEludGVyc2VjdGlvbihlKSB7XG4gICAgaWYoIGUubGVuZ3RoID09PSAwICkgcmV0dXJuO1xuICAgIGUgPSBlWzBdO1xuICAgIFxuICAgIGlmKCB0aGlzLnNob3duSW5WaWV3cG9ydCB8fCAhZS5pc0ludGVyc2VjdGluZyApIHJldHVybjtcbiAgICB0aGlzLnNob3duSW5WaWV3cG9ydCA9IHRydWU7XG5cbiAgICB0aGlzLl9zZXRCYWNrZ3JvdW5kSW1hZ2UoKTtcbiAgfVxuXG4gIF9zZXRCYWNrZ3JvdW5kSW1hZ2UoKSB7XG4gICAgdGhpcy4kLmltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3RoaXMuY29sbGVjdGlvbi50aHVtYm5haWxVcmx9JylgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWNvbGxlY3Rpb24tY2FyZCcsIEFwcENvbGxlY3Rpb25DYXJkKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbjogMCAxM3B4O1xcblxcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHkgKi9cXG4gIH1cXG5cXG4gICNudW1iZXJMaW5lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0IDogMDtcXG4gICAgcmlnaHQgOiAwO1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvciwgIzg4OCk7XFxuICB9XFxuXFxuICAjZmlsbExpbmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICB9XFxuXFxuICAuYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBjdXJzb3I6IG1vdmU7XFxuICB9XFxuXFxuICAuYnRuID4gZGl2IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXI7XFxuICB9XFxuXFxuICAuYnRuW21vdmluZ10gPiBkaXYge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIH1cXG5cXG4gIC5sYWJlbCB7XFxuICAgIHdpZHRoIDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxMnB4OyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBsaW5lYXI7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgfVxcblxcbiAgLmxhYmVsW21vdmluZ10ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcblxcbjwvc3R5bGU+XFxuXFxuPGRpdiBpZD1cXFwibnVtYmVyTGluZVxcXCI+PC9kaXY+XFxuXFxuPGRpdiBpZD1cXFwiZmlsbExpbmVcXFwiIFxcbiAgcHJvcD1cXFwicmFuZ2VcXFwiIFxcbiAgb24tbW91c2Vkb3duPVxcXCJfb25Nb3ZlU3RhcnRcXFwiIFxcbiAgb24tdG91Y2hzdGFydD1cXFwiX29uTW92ZVN0YXJ0XFxcIj5cXG48L2Rpdj5cXG5cXG48ZGl2IGlkPVxcXCJsb3dOdW1iZXJMYWJlbFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiBtb3ZpbmckPVxcXCJbW2lzTW92aW5nXV1cXFwiPltbbWluVmFsdWVMYWJlbF1dPC9kaXY+XFxuPGRpdiBpZD1cXFwiaGlnaE51bWJlckxhYmVsXFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiIG1vdmluZyQ9XFxcIltbaXNNb3ZpbmddXVxcXCI+W1ttYXhWYWx1ZUxhYmVsXV08L2Rpdj5cXG5cXG48ZGl2IGlkPVxcXCJsb3dOdW1iZXJCdG5cXFwiIFxcbiAgY2xhc3M9XFxcImJ0blxcXCIgXFxuICBwcm9wPVxcXCJtaW5cXFwiIFxcbiAgb24tbW91c2Vkb3duPVxcXCJfb25Nb3ZlU3RhcnRcXFwiIFxcbiAgb24tdG91Y2hzdGFydD1cXFwiX29uTW92ZVN0YXJ0XFxcIiBcXG4gIG1vdmluZyQ9XFxcIltbbW92aW5nTWluXV1cXFwiID5cXG4gIDxkaXY+PC9kaXY+XFxuPC9kaXY+XFxuXFxuPGRpdiBpZD1cXFwiaGlnaE51bWJlckJ0blxcXCIgXFxuICBjbGFzcz1cXFwiYnRuXFxcIiBcXG4gIHByb3A9XFxcIm1heFxcXCIgXFxuICBvbi1tb3VzZWRvd249XFxcIl9vbk1vdmVTdGFydFxcXCIgXFxuICBvbi10b3VjaHN0YXJ0PVxcXCJfb25Nb3ZlU3RhcnRcXFwiIFxcbiAgbW92aW5nJD1cXFwiW1ttb3ZpbmdNYXhdXVxcXCI+XFxuICA8ZGl2PjwvZGl2PlxcbjwvZGl2PlwiOyIsImltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLXJhbmdlLXNsaWRlci5odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwUmFuZ2VTbGlkZXIgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gYWJzb2x1dGUgbWluL21heCB2YWx1ZXMgZm9yIHNsaWRlclxuICAgICAgYWJzTWluVmFsdWUgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogMCxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX3JlbmRlckFzeW5jJ1xuICAgICAgfSxcbiAgICAgIGFic01heFZhbHVlIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDEwMCxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX3JlbmRlckFzeW5jJ1xuICAgICAgfSxcblxuICAgICAgLy8gY3VycmVudCBtaW4vbWF4IHZhbHVlcyBmb3Igc2xpZGVyICh3aGVyZSB0aGUgYnRucyBhcmUpXG4gICAgICBtaW5WYWx1ZSA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAxMCxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX3JlbmRlckFzeW5jJ1xuICAgICAgfSxcbiAgICAgIG1heFZhbHVlIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDkwLFxuICAgICAgICBvYnNlcnZlciA6ICdfcmVuZGVyQXN5bmMnXG4gICAgICB9LFxuXG4gICAgICAvLyBsYWJlbHMgZm9yIHNsaWRlIGJ0bnNcbiAgICAgIG1pblZhbHVlTGFiZWwgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBtYXhWYWx1ZUxhYmVsIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuXG4gICAgICAvLyBjdXJyZW50IHdpZGdldCBzaXplIGluZm9cbiAgICAgIC8vIHVzZWQgc28gd2UgZG9uJ3QgaGF2ZSB0byBhc2sgdGhlIERPTSBvbiBlYWNoIHJlbmRlclxuICAgICAgd2lkdGggOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogMVxuICAgICAgfSxcbiAgICAgIGhlaWdodCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAxXG4gICAgICB9LFxuICAgICAgYnRuSGVpZ2h0IDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDFcbiAgICAgIH0sXG5cbiAgICAgIC8vIHN0cmluZyB0aGF0IGluZGljYXRlIHR5cGUgb2YgbW92ZVxuICAgICAgbW92aW5nIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuXG4gICAgICAvLyBkaWZmZXJlbnQgbW92aW5nIGZsYWdzIGZvciBiaW5kaW5nIFVJIGVsZW1lbnQgY2xhc3Nlc1xuICAgICAgbW92aW5nTWluIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1vdmluZ01heCA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBpc01vdmluZyA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl93aW5kb3dSZXNpemVMaXN0ZW5lciA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fd2luZG93TW91c2VMaXN0ZW5lciA9IHRoaXMuX29uTW92ZVN0b3AuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHRoaXMuX29uTW92ZShlKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4gdGhpcy5fb25Nb3ZlKGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNvbm5lY3RlZENhbGxiYWNrXG4gICAqIEBkZXNjcmlwdGlvbiBzZXR1cCBvdXIgd2luZG93IG1vdXNlIGxpc3RlbmVycywgZmlyZSBmaXJzdCByZW5kZXJcbiAgICovXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuX29uUmVzaXplKCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fd2luZG93UmVzaXplTGlzdGVuZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fd2luZG93TW91c2VMaXN0ZW5lcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5fd2luZG93TW91c2VMaXN0ZW5lcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5fd2luZG93TW91c2VMaXN0ZW5lcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5fd2luZG93TW91c2VMaXN0ZW5lcik7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBkaXNjb25uZWN0ZWRDYWxsYmFja1xuICAgKiBAZGVzY3JpcHRpb24gcmVtb3ZlIG91ciB3aW5kb3cgbW91c2UgbGlzdGVuZXJzXG4gICAqL1xuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl93aW5kb3dSZXNpemVMaXN0ZW5lcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl93aW5kb3dNb3VzZUxpc3RlbmVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLl93aW5kb3dNb3VzZUxpc3RlbmVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl93aW5kb3dNb3VzZUxpc3RlbmVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLl93aW5kb3dNb3VzZUxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblJlc2l6ZVxuICAgKiBAZGVzY3JpcHRpb24gY2FjaGUgdGhlIGVsZW1lbnQgc2l6ZSBzbyB3ZSBkb24ndCBoYXZlIHRvIGxvb2sgaXQgdXBcbiAgICogb24gZWFjaCByZW5kZXIgb2YgYnRuIGFuZCBsaW5lIHBvc2l0aW9ucy4gIFRoZW4gZmlyZSByZW5kZXIgdG8gbWFrZVxuICAgKiBzdXJlIGV2ZXJ5dGhpbmcgaXMgdmlzdWFsbHkgY29ycmVjdC5cbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5vZmZzZXRXaWR0aCB8fCAxO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5vZmZzZXRIZWlnaHQ7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5vZmZzZXRMZWZ0O1xuXG4gICAgdGhpcy5idG5IZWlnaHQgPSB0aGlzLiQubG93TnVtYmVyQnRuLm9mZnNldEhlaWdodDtcbiAgICB0aGlzLl9yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF92YWx1ZVRvUHhcbiAgICogQGRlc2NyaXB0aW9uIGdpdmVuIGEgbnVtYmVyIGxpbmUgdmFsdWUsIHJldHVybiBweCBsb2NhdGlvbiByZWxhdGl2ZVxuICAgKiB0byB0aGUgd2lkZ2V0XG4gICAqIFxuICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgbnVtYmVyIGxpbmUgdmFsdWVcbiAgICogXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9IHB4IGxvY2F0aW9uXG4gICAqL1xuICBfdmFsdWVUb1B4KHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSAtIHRoaXMuYWJzTWluVmFsdWU7XG4gICAgbGV0IHJhbmdlID0gdGhpcy5hYnNNYXhWYWx1ZSAtIHRoaXMuYWJzTWluVmFsdWU7XG4gICAgbGV0IHZhbFBlclB4ID0gcmFuZ2UgLyB0aGlzLndpZHRoO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdmFsUGVyUHgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3B4VG9WYWx1ZVxuICAgKiBAZGVzY3JpcHRpb24gZ2l2ZW4gYSBweCBsb2NhdGlvbiwgcmV0dXJuIG51bWJlciBsaW5lIHZhbHVlXG4gICAqIFxuICAgKiBAcGFyYW0ge051bWJlcn0gcHggbG9jYXRpb25cbiAgICogXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9IHZhbHVlXG4gICAqL1xuICBfcHhUb1ZhbHVlKHB4KSB7XG4gICAgbGV0IHJhbmdlID0gdGhpcy5hYnNNYXhWYWx1ZSAtIHRoaXMuYWJzTWluVmFsdWU7XG4gICAgbGV0IHZhbFBlclB4ID0gcmFuZ2UgLyB0aGlzLndpZHRoO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHB4ICogdmFsUGVyUHgpICsgdGhpcy5hYnNNaW5WYWx1ZTtcbiAgfVxuXG4gIF9yZW5kZXJBc3luYygpIHtcbiAgICBpZiggdGhpcy5yZW5kZXJUaW1lciApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlbmRlclRpbWVyKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlclRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclRpbWVyID0gMDtcbiAgICAgIHRoaXMuX3JlbmRlcigpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3JlbmRlckFzeW5jXG4gICAqIEBkZXNjcmlwdGlvbiBzZXQgdGhlIGN1cnJlbnQgdG9wL2xlZnQgcHggdmFsdWVzIGZvciBhbGwgYnRucyxcbiAgICogbGFiZWxzIGFuZCBsaW5lcyBiYXNlcyBvbiBjdXJyZW50IG1pbi9tYXggdmFsdWVzLlxuICAgKi9cbiAgX3JlbmRlcigpIHtcbiAgICBsZXQgaGggPSB0aGlzLmhlaWdodCAqIDAuNjA7XG5cbiAgICAvLyBzZXQgbGluZSBoZWlnaHRzXG4gICAgdGhpcy4kLm51bWJlckxpbmUuc3R5bGUudG9wID0gaGgrJ3B4JztcbiAgICB0aGlzLiQuZmlsbExpbmUuc3R5bGUudG9wID0gaGgrJ3B4JztcblxuICAgIC8vIHNldCBidG4gaGVpZ2h0c1xuICAgIGxldCBoQnRuSGVpZ2h0ID0gdGhpcy5idG5IZWlnaHQgLyAyO1xuICAgIHRoaXMuJC5sb3dOdW1iZXJCdG4uc3R5bGUudG9wID0gKGhoIC0gaEJ0bkhlaWdodCkgKydweCc7XG4gICAgdGhpcy4kLmhpZ2hOdW1iZXJCdG4uc3R5bGUudG9wID0gKGhoIC0gaEJ0bkhlaWdodCkgKydweCc7XG5cbiAgICB0aGlzLiQubG93TnVtYmVyTGFiZWwuc3R5bGUudG9wID0gKGhoIC0gaEJ0bkhlaWdodCAtIDIyKSArJ3B4JztcbiAgICB0aGlzLiQuaGlnaE51bWJlckxhYmVsLnN0eWxlLnRvcCA9IChoaCAtIGhCdG5IZWlnaHQgLSAyMikgKydweCc7XG5cbiAgICAvLyBzZXQgYnRuIGxlZnRcbiAgICBsZXQgbHYgPSAoIHRoaXMubWluVmFsdWUgPCB0aGlzLmFic01pblZhbHVlICkgPyB0aGlzLmFic01pblZhbHVlIDogdGhpcy5taW5WYWx1ZTtcbiAgICBsZXQgdXYgPSAoIHRoaXMubWF4VmFsdWUgPiB0aGlzLmFic01heFZhbHVlICkgPyB0aGlzLmFic01heFZhbHVlIDogdGhpcy5tYXhWYWx1ZTtcblxuICAgIGxldCBtaW5QeFZhbHVlID0gdGhpcy5fdmFsdWVUb1B4KGx2KTtcbiAgICBsZXQgbWF4UHhWYWx1ZSA9IHRoaXMuX3ZhbHVlVG9QeCh1dik7XG5cbiAgICB0aGlzLiQubG93TnVtYmVyQnRuLnN0eWxlLmxlZnQgPSAobWluUHhWYWx1ZSAtIGhCdG5IZWlnaHQpICArICdweCc7XG4gICAgdGhpcy4kLmhpZ2hOdW1iZXJCdG4uc3R5bGUubGVmdCA9IChtYXhQeFZhbHVlIC0gaEJ0bkhlaWdodCkgKyAncHgnO1xuXG4gICAgdGhpcy4kLmxvd051bWJlckxhYmVsLnN0eWxlLmxlZnQgPSAobWluUHhWYWx1ZSAtIGhCdG5IZWlnaHQpICsgJ3B4JztcbiAgICB0aGlzLiQuaGlnaE51bWJlckxhYmVsLnN0eWxlLmxlZnQgPSAobWF4UHhWYWx1ZSAtIGhCdG5IZWlnaHQpICsgJ3B4JztcbiAgICBcbiAgICB0aGlzLiQuZmlsbExpbmUuc3R5bGUubGVmdCA9IG1pblB4VmFsdWUgKydweCc7XG4gICAgdGhpcy4kLmZpbGxMaW5lLnN0eWxlLndpZHRoID0gKG1heFB4VmFsdWUgLSBtaW5QeFZhbHVlKSAgKydweCc7XG5cbiAgICB0aGlzLm1pblZhbHVlTGFiZWwgPSB0aGlzLnJlbmRlckxhYmVsKHRoaXMubWluVmFsdWUpO1xuICAgIHRoaXMubWF4VmFsdWVMYWJlbCA9IHRoaXMucmVuZGVyTGFiZWwodGhpcy5tYXhWYWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Nb3ZlU3RhcnRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGJ0bnMgYW5kIGNlbnRlciBsaW5lLiAgRmlyZWQgd2hlbiB0aGUgdXNlciBtb3VzZXNcbiAgICogZG93biBvbiBlbGVtZW50IGluZGljYXRpbmcgYSBtb3ZlIGlzIHN0YXJ0aW5nXG4gICAqIFxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGUgXG4gICAqL1xuICBfb25Nb3ZlU3RhcnQoZSkge1xuICAgIHRoaXMubW92aW5nID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgncHJvcCcpO1xuICAgIFxuICAgIGlmKCB0aGlzLm1vdmluZyA9PT0gJ3JhbmdlJyApIHtcbiAgICAgIHRoaXMuc3RhcnRSYW5nZSA9IHtcbiAgICAgICAgbWluIDogZS5jdXJyZW50VGFyZ2V0Lm9mZnNldExlZnQsXG4gICAgICAgIG1heCA6IGUuY3VycmVudFRhcmdldC5vZmZzZXRMZWZ0ICsgZS5jdXJyZW50VGFyZ2V0Lm9mZnNldFdpZHRoLFxuICAgICAgICBsZWZ0IDogIGUucGFnZVggLSB0aGlzLmxlZnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcbiAgICB0aGlzLm1vdmluZ01pbiA9ICh0aGlzLm1vdmluZyA9PT0gJ21heCcpID8gZmFsc2UgOiB0cnVlO1xuICAgIHRoaXMubW92aW5nTWF4ID0gKHRoaXMubW92aW5nID09PSAnbWluJykgPyBmYWxzZSA6IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Nb3ZlXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBtb3VzZW1vdmUgZXZlbnQgb24gdGhpcyBlbGVtZW50LiAgVXBkYXRlIG1pbi9tYXhcbiAgICogdmFsdWVzIGJhc2VkIG9uIHR5cGUgb2YgbW92ZSB0aGF0IGlzIGhhcHBlbmluZyBpZSBtaW4sIG1heCBvciByYW5nZS4gIERvZXNcbiAgICogbm90aGluZyBpZiB3ZSBhcmUgbm90IG1vdmluZy5cbiAgICogXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZSBcbiAgICovXG4gIF9vbk1vdmUoZSkge1xuICAgIGlmKCAhdGhpcy5tb3ZpbmcgKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgICAvLyBoYW5kbGUgYm90aCBtb3VzZSBhbmQgdG91Y2ggZXZlbnRcbiAgICBsZXQgbGVmdDtcbiAgICBpZiggZS50eXBlID09PSAndG91Y2htb3ZlJyApIHtcbiAgICAgIGlmKCAhZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggKSByZXR1cm47XG4gICAgICBsZWZ0ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIHRoaXMubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCA9IGUucGFnZVggLSB0aGlzLmxlZnQ7XG4gICAgfVxuICAgIFxuICAgIGlmKCB0aGlzLm1vdmluZyA9PT0gJ21pbicgKSB7XG4gICAgICB0aGlzLm1pblZhbHVlID0gdGhpcy5fcHhUb1ZhbHVlKGxlZnQpO1xuICAgIH0gZWxzZSBpZiggdGhpcy5tb3ZpbmcgPT09ICdtYXgnICkge1xuICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuX3B4VG9WYWx1ZShsZWZ0KTtcbiAgICB9IGVsc2UgaWYoIHRoaXMubW92aW5nID09PSAnbWF4JyApIHtcbiAgICAgIHRoaXMubWF4VmFsdWUgPSB0aGlzLl9weFRvVmFsdWUobGVmdCk7XG4gICAgfSBlbHNlIGlmKCB0aGlzLm1vdmluZyA9PT0gJ3JhbmdlJyApIHtcbiAgICAgIGxldCBkaWZmID0gdGhpcy5zdGFydFJhbmdlLmxlZnQgLSBsZWZ0O1xuXG4gICAgICB0aGlzLm1pblZhbHVlID0gdGhpcy5fcHhUb1ZhbHVlKHRoaXMuc3RhcnRSYW5nZS5taW4gLSBkaWZmKTtcbiAgICAgIHRoaXMubWF4VmFsdWUgPSB0aGlzLl9weFRvVmFsdWUodGhpcy5zdGFydFJhbmdlLm1heCAtIGRpZmYpO1xuICAgIH1cbiAgICBcbiAgICBpZiggdGhpcy5taW5WYWx1ZSA8IHRoaXMuYWJzTWluVmFsdWUgKSB7XG4gICAgICB0aGlzLm1pblZhbHVlID0gdGhpcy5hYnNNaW5WYWx1ZTtcbiAgICB9XG4gICAgaWYoIHRoaXMubWF4VmFsdWUgPiB0aGlzLmFic01heFZhbHVlICkge1xuICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuYWJzTWF4VmFsdWU7XG4gICAgfVxuXG4gICAgaWYoIHRoaXMubWluVmFsdWUgPiB0aGlzLm1heFZhbHVlICkge1xuICAgICAgaWYoIHRoaXMubW92aW5nID09PSAnbWluJyApIHRoaXMubWluVmFsdWUgPSB0aGlzLm1heFZhbHVlO1xuICAgICAgZWxzZSB0aGlzLm1heFZhbHVlID0gdGhpcy5taW5WYWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Nb3ZlU3RvcFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gbW91c2V1cC9tb3VzZW91dCBldmVudCBvbiB3aW5kb3cuICBJdCdzIGFsd2F5cyBiZXN0IHRvIGJpbmRcbiAgICogdGhpcyB0byB0aGUgd2luZG93IGFzIGEgY2F0Y2ggYWxsLiAgUmVzZXRzIGFsbCBtb3ZpbmcgZmxhZ3NcbiAgICovXG4gIF9vbk1vdmVTdG9wKCkge1xuICAgIGlmKCAhdGhpcy5tb3ZpbmcgKSByZXR1cm47XG5cbiAgICB0aGlzLm1vdmluZyA9ICcnO1xuICAgIHRoaXMubW92aW5nTWluID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZpbmdNYXggPSBmYWxzZTtcbiAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3JhbmdlLXZhbHVlLWNoYW5nZScsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgbWluIDogdGhpcy5taW5WYWx1ZSxcbiAgICAgICAgICBtYXggOiB0aGlzLm1heFZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlbmRlckxhYmVsXG4gICAqIEBkZXNjcmlwdGlvbiByZW5kZXIgdGhlIGxhYmVsIHZhbHVlLiAgT3ZlcnJpZGUgaWYgeW91IHdhbnRcbiAgICogYW55dGhpbmcgb3RoZXIgdGhhbiB0aGUgbnVtYmVyLlxuICAgKiBcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIGN1cnJlbnQgdmFsdWUgdG8gcmVuZGVyXG4gICAqIFxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgcmVuZGVyTGFiZWwodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1yYW5nZS1zbGlkZXInLCBBcHBSYW5nZVNsaWRlcik7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheSA6IGJsb2NrO1xcbiAgfVxcbiAgLmxheW91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAudGFiIHtcXG4gICAgZmxleDogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDAgOXB4IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LXRleHQpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ3JheS10ZXh0KTtcXG4gIH1cXG4gIC50YWI6Zm9jdXMge1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuICAudGFiW3NlbGVjdGVkXSB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTJweCAwIDdweCAwO1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBjbGFzcz1cXFwibGF5b3V0XFxcIj5cXG4gIDx0ZW1wbGF0ZSBpcz1cXFwiZG9tLXJlcGVhdFxcXCIgaXRlbXM9XFxcIltbdGFic11dXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFiXFxcIiBcXG4gICAgICByb2xlPVxcXCJ0YWJcXFwiIFxcbiAgICAgIHRhYmluZGV4PVxcXCIwXFxcIiBcXG4gICAgICBhcmlhLXNlbGVjdGVkJD1cXFwiW1tpdGVtLmFyaWFTZWxlY3RlZF1dXFxcIlxcbiAgICAgIHNlbGVjdGVkJD1cXFwiW1tpdGVtLnNlbGVjdGVkXV1cXFwiXFxuICAgICAgb24tY2xpY2s9XFxcIl9vblRhYkNsaWNrZWRcXFwiIFxcbiAgICAgIG9uLWtleXVwPVxcXCJfb25UYWJDbGlja2VkXFxcIlxcbiAgICAgIHZhbHVlJD1cXFwiW1tpdGVtLnZhbHVlXV1cXFwiPlxcbiAgICAgIFtbaXRlbS5sYWJlbF1dXFxuICAgIDwvZGl2PlxcbiAgPC90ZW1wbGF0ZT5cXG48L2Rpdj5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC10YWJzLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBUYWJzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvbGUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJ3RhYmxpc3QnLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGUgOiB0cnVlXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWQgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJycsXG4gICAgICAgIG5vdGlmeSA6IHRydWUsXG4gICAgICAgIG9ic2VydmVyIDogJ19yZW5kZXJUYWJzJ1xuICAgICAgfSxcbiAgICAgIHRhYnMgOiB7XG4gICAgICAgIHR5cGUgOiBBcnJheSxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiBbXSxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX3JlbmRlclRhYnMnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3JlbmRlclRhYnNcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvICd0YWJzJyBwcm9wZXJ0eSBvYnNlcnZlclxuICAgKi9cbiAgX3JlbmRlclRhYnMoKSB7XG4gICAgaWYoICF0aGlzLnRhYnMgKSByZXR1cm47XG5cbiAgICBpZiggIXRoaXMuc2VsZWN0ZWQgJiYgdGhpcy50YWJzLmxlbmd0aCApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnRhYnNbMF07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RlZCA9ICh0YWIudmFsdWUgPT09IHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5zZXQoYHRhYnMuJHtpbmRleH0uc2VsZWN0ZWRgLCBzZWxlY3RlZCk7XG4gICAgICB0aGlzLnNldChgdGFicy4ke2luZGV4fS5hcmlhU2VsZWN0ZWRgLCBzZWxlY3RlZCsnJyk7XG4gICAgICBpZiggIXRhYi5sYWJlbCApIHRoaXMuc2V0KGB0YWJzLiR7aW5kZXh9LmxhYmVsYCwgdGFiLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vblRhYkNsaWNrZWQoZSkge1xuICAgIGlmKCBlLnR5cGUgPT09ICdrZXl1cCcgJiYgZS53aGljaCAhPT0gMTMgKSByZXR1cm47XG4gICAgdGhpcy5zZWxlY3RlZCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC10YWJzJywgQXBwVGFicyk7IiwiY2xhc3MgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJMb2FkZXIge1xuICBhc3luYyBsb2FkKCkge1xuICAgIGlmKCB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgKSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICggdGhpcy5sb2FkZWQgKSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICggdGhpcy5sb2FkaW5nICkge1xuICAgICAgYXdhaXQgdGhpcy5sb2FkaW5nO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZGVkO1xuICAgIH1cblxuICAgIHRoaXMubG9hZGluZyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm9ic2VydmVyLXBvbHlmaWxsXCIgKi8gJ2ludGVyc2VjdGlvbi1vYnNlcnZlcicpO1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEludGVyc2VjdGlvbk9ic2VydmVyTG9hZGVyKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==