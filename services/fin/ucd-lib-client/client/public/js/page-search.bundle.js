(self["webpackChunk"] = self["webpackChunk"] || []).push([["page-search"],{

/***/ "./public/elements/pages/record/app-copy-cite.html":
/*!*********************************************************!*\
  !*** ./public/elements/pages/record/app-copy-cite.html ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<style>\n  :host {\n    display: block;\n  }\n  [hidden] {\n    display:none !important;\n  }\n  textarea {\n    width: 100%;\n    font-size: var(--fs-p);\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    /* width: 85px; */\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    font-weight: var(--fw-bold);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n  }\n\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  \n  .copyButton[active] span {\n    display: none;\n  }\n\n  #citeText {\n    padding-bottom: 10px;\n    overflow: auto;\n    word-break: break-word;\n  }\n\n  .buttons {\n    display: flex;\n  }\n</style>\n\n<div hidden$=\"[[copying]]\" id=\"citeText\"></div>\n<textarea hidden$=\"[[!copying]]\" id=\"copyArea\"></textarea>\n\n<div class=\"buttons\">\n  <div>\n    <slot></slot>\n  </div>\n  <button active$=\"[[copying]]\" on-click=\"_onCopyClicked\" class=\"copyButton\">\n    <iron-icon icon=\"content-copy\" id=\"icon\"></iron-icon>\n    <span>Copy</span>\n  </button>\n</div>\n";

/***/ }),

/***/ "./public/elements/pages/search/app-collection-info-panel.html":
/*!*********************************************************************!*\
  !*** ./public/elements/pages/search/app-collection-info-panel.html ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    padding: 15px;\n  }\n  h3, .header {\n    color: var(--default-primary-color);\n    margin: 5px 0;\n    font-weight: bold;\n  }\n  .section {\n    margin-bottom: 20px;\n  }\n  .break {\n    border-bottom: 1px solid var(--medium-background-color);\n    margin: 5px;\n  }\n\n  select {\n    margin-right: 10px;\n    outline-offset: 1px;\n    border: none;\n    background-color: white;\n    border-radius: 0;\n    height: 38px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n    -webkit-border-radius: 0px;\n    -moz-border-radius: 0px;\n    -ms-border-radius: 0px;\n    -o-border-radius: 0px;\n    padding: 5px 30px 5px 10px;\n    background-position: right 10px center;\n    background-size: 10px 6px;\n    background-repeat: no-repeat;\n    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCA2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMjg1NTt9PC9zdHlsZT48L2RlZnM+PGc+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjAgMCAxMCAwIDUgNiAwIDAiLz48L2c+PC9zdmc+');\n    background-color: var(--medium-background-color);\n  }\n  /* for IE */\n  select::-ms-expand {\n      display: none;\n  }\n\n  .buttons {\n    display: flex;\n    margin-top: 10px;\n  }\n</style>\n\n<div class=\"section\" hidden$=\"[[!title]]\">\n  <h3>[[title]]</h3>\n</div>\n\n<div class=\"section\" hidden$=\"[[!description]]\">\n  <div class=\"header\">Description</div>\n  <div id=\"description\"></div>\n</div>\n\n<div class=\"section\" hidden$=\"[[!coverage]]\">\n  <div class=\"header\">Coverage</div>\n  <div>[[coverage]]</div>\n</div>\n\n<div class=\"break\"></div>\n\n<div class=\"header\">Cite this Collection</div>\n<div>\n  <app-copy-cite id=\"copyCite\" text=\"[[citation]]\">\n    <select id=\"citeFormatInput\" value$=\"[[citationFormat]]\" on-change=\"_onCiteFormatChange\">\n      <template is=\"dom-repeat\" items=\"[[engines]]\">\n        <option value=\"[[item.engine]]\">[[item.label]]</option>\n      </template>\n    </select>\n  </app-copy-cite>\n</div>\n";

/***/ }),

/***/ "./public/elements/pages/search/app-search.html":
/*!******************************************************!*\
  !*** ./public/elements/pages/search/app-search.html ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n  }\n  .search-container {\n    background-color: var(--super-light-background-color);\n    min-height: 60vh;\n    display: block;\n  }\n  .search-content {\n    flex: 1;\n    padding-bottom: 35px;\n  }\n\n  app-filters-panel {\n    width: 350px;\n    transition: width 300ms linear;\n  }\n  app-filters-panel[wide] {\n    width: 475px;\n  }\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: .7;\n    }\n  }\n\n  #desktop-filter-panel {\n    display: none;\n  }\n\n  @media( max-width: 1025px ) {\n    app-filters-panel[wide] {\n      width: 415px;\n    }\n  }\n\n  @media( min-width: 975px ) {\n    #desktop-filter-panel {\n      display: block;\n    }\n    .search-container {\n      display: flex;\n    }\n  }\n</style>\n\n<div class=\"search-container\">\n  <app-filters-panel id=\"desktop-filter-panel\" wide$=\"[[wideFiltersPanel]]\" on-selected-tab-changed=\"_onFiltersTabUpdate\"></app-filters-panel>\n  <div class=\"search-content\">\n    <app-search-results-panel \n      id=\"resultsPanel\" \n      on-toggle-drawer=\"_toggleDrawer\" \n      on-page-size-change=\"_onPageSizeChange\"\n      on-page-change=\"_onPaginationChange\">\n    </app-search-results-panel>\n  </div>\n</div>";

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-facet-filter.html":
/*!**********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-facet-filter.html ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block\n  }\n\n  .filter {\n    padding: 4px 5px;\n    display: flex;\n    align-items: center;\n  }\n  .filter a {\n    display: inline-block;\n    cursor: pointer;\n    color: black;\n    transition: color 250ms ease-out, transform 250ms ease-out;\n    transform: scale(1);\n  }\n  .filter a span {\n    color: var(--default-primary-color);\n  }\n  .filter a:hover {\n    transform: scale(1.5);\n    color: var(--default-primary-color);\n  }\n\n  .typehead-panel {\n    margin: 0 28px 10px 5px;\n  }\n  #typeahead {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0 5px;\n    background: var( --super-light-background-color);\n    border: none;\n    height: 40px;\n    outline: none;\n  }\n\n  .active-filter {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    color: white;\n    font-size: 14px;\n    background: var(--primary-text-color);\n    padding: 5px;\n    border-radius: 3px;\n    margin: 3px;\n  }\n\n  .active-filter:hover {\n    color: var(--default-primary-color);\n    background: #ccc;\n  }\n\n  .count {\n    color: var(--text-disabled);\n    flex: 1;\n    text-align: right;\n    min-width : 40px;\n    padding: 0 10px;\n  }\n\n  .overflow {\n    overflow: auto;\n    max-height: 200px;\n  }\n\n  iron-list {\n    height: 200px;\n    display: none;\n  }\n\n  app-normal-checkbox {\n    overflow: hidden;\n    padding-right: 5px;\n  }\n\n  paper-checkbox[active] .key {\n    color: var(--default-primary-color);\n    font-weight: bold;\n  }\n\n  paper-checkbox[disabled] .key {\n    color: var(--secondary-text-color);\n    font-style: italic;\n  }\n</style>\n\n<!-- typeahead search -->\n<div class=\"typehead-panel\" hidden$=\"[[!includeTypeahead]]\">\n  <input id=\"typeahead\" \n    type=\"text\" \n    placeholder=\"Search [[label]]s\" \n    on-keyup=\"_onTypeaheadKeyup\" />\n</div>\n\n<!-- used for large lists -->\n<iron-list id=\"list\" items=\"[[bucketsIronList]]\" as=\"item\">\n  <template>\n    <div class=\"filter\">\n\n      <app-normal-checkbox\n        type$=\"[[label]]\"\n        index$=\"[[index]]\"\n        value$=\"[[item.key]]\"\n        label-map=\"[[valueMap]]\"\n        checked$=\"[[item.active]]\" \n        on-change=\"_toggleFilter\"\n        disabled$=\"[[item.disabled]]\">\n      </app-normal-checkbox>\n\n      <div class=\"count\">[[item.doc_count]]</div>\n    </div>\n  </template>\n</iron-list>\n\n<!-- used for small lists -->\n<div class=\"overflow\">\n  <div>  \n    <template is=\"dom-repeat\" items=\"[[buckets]]\">\n      <div class=\"filter\">\n\n        <app-normal-checkbox\n          type$=\"[[label]]\"\n          index$=\"[[index]]\"\n          value$=\"[[item.key]]\"\n          label-map=\"[[valueMap]]\"\n          checked$=\"[[item.active]]\" \n          on-change=\"_toggleFilter\"\n          disabled$=\"[[item.disabled]]\">\n        </app-normal-checkbox>\n\n        <div class=\"count\">[[item.doc_count]]</div>\n      </div>\n    </template>\n  </div>\n</div>\n";

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-filter-panel.html":
/*!**********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-filter-panel.html ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n  }\n\n  .label {\n    cursor: pointer;\n    display: flex;\n    color: var(--default-primary-color);\n    padding: 10px 0;\n    font-weight: bold;\n    position: relative;\n    outline: none !important;\n  }\n\n  .highlight {\n    position: absolute;\n    left: -10px;\n    top: 0;\n    bottom: 0;\n    width: 4px;\n    background-color:  var(--default-secondary-color);\n    display: none;\n  }\n\n  .label:focus > .highlight {\n    display: block;\n  }\n\n  #activeFilters > div {\n    padding: 4px 5px;\n  }\n\n  .filter {\n    display: flex;\n    cursor: pointer;\n    align-items: center;\n    font-weight: bold;\n    font-style: italic;\n  }\n\n  iron-icon[closed] {\n    transform: rotate(-90deg);\n  }\n\n  iron-icon[clear] {\n    color: var(--default-secondary-color);\n    margin-right: 2px;\n  }\n\n  /* JM - think this is redundant, scroll inforced by app-*-filter element */\n  /* #filters {\n    overflow-y: auto;\n    max-height: 200px;\n  } */\n</style>\n\n<div class=\"label\" on-click=\"_onToggleClicked\" on-keyup=\"_onToggleClicked\" role=\"button\" tabindex=\"0\">\n  <div style=\"flex:1\">[[filter.label]]</div>\n  <iron-icon icon=\"arrow-drop-down\" closed$=\"[[!opened]]\"></iron-icon>\n  <div class=\"highlight\"></div>\n</div>\n\n<div id=\"activeFilters\" hidden$=\"[[opened]]\">\n  <div hidden$=\"[[!selected.length]]\">\n    <template is=\"dom-repeat\" items=\"[[selected]]\">\n      <div class=\"filter\" \n        on-click=\"_onFilterClicked\"\n        on-keyup=\"_onFilterClicked\" \n        label$=\"[[item.label]]\"\n        tabindex=\"0\" \n        role=\"button\">\n        <iron-icon icon=\"fin-icons:close\" clear></iron-icon>\n        <div>[[item.niceLabel]]</div>\n      </div>\n    </template>\n  </div>\n</div>\n\n<div id=\"filters\" hidden$=\"[[!opened]]\"></div>";

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-filters-panel.html":
/*!***********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-filters-panel.html ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    background-color: var(--light-background-color);\n    position: relative;\n  }\n\n  #filters {\n    margin-left: 10px;\n  }\n\n  .title {\n    color: var(--default-primary-color);\n    font-weight: bold;\n    padding: 15px 0;\n    margin-left: 10px;\n    border-bottom: 1px solid var(--medium-background-color);\n    display: none;\n  }\n\n  app-filter-panel {\n    border-bottom: 1px solid var(--medium-background-color);\n  }\n\n  .thumbnail {\n    background-size: cover;\n    background-position: center center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n  .thumbnail-root {\n    position: relative;\n    height: 200px;\n  }\n\n  .label {\n    padding: 10px 0;\n    color: var(--default-primary-color);\n    font-weight: var(--fw-bold);\n  }\n\n  .collection-filter {\n    padding: 4px 5px;\n    border-bottom: 1px solid var(--medium-background-color);\n  }\n\n  .outer-drawer-toggle {\n    position: relative;\n  }\n  .outer-drawer-toggle[spacer] {\n    height: 50px;\n    border-bottom: 1px solid var(--medium-background-color);\n    margin-left: 10px;\n  }\n\n  .drawer-toggle {\n    font-size: var(--fs-sm);\n    position: absolute;\n    z-index: 15;\n    top : 15px;\n    right: -24px;\n    cursor: pointer;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n    font-weight: var(--fw-bold);\n    color: var(--default-primary-color);\n    background-color: var(--light-background-color);\n    border-radius: 0;\n    border: 0;\n    padding: 0;\n  }\n  .drawer-toggle > span {\n    padding : 0 10px;\n  }\n  .drawer-toggle iron-icon {\n    background-color: var(--default-secondary-color);\n  }\n\n  @media(min-width: 975px) {\n    h2 {\n      display: block;\n    }\n    .outer-drawer-toggle {\n      display: none;\n    }\n    .title {\n      display: block;\n    }\n  }\n</style>\n\n<div class=\"title\" hidden$=\"[[collectionMode]]\" >FILTERS</div>\n\n<div class=\"outer-drawer-toggle\" spacer$=\"[[!collectionMode]]\" on-click=\"_fireToggleDrawer\">\n  <button class=\"drawer-toggle\">\n    <span><span hidden$=\"[[!collectionMode]]\">Info / </span>Filters</span>\n    <iron-icon icon=\"fin-icons:close\"></iron-icon>\n  </button>\n</div>\n<div class=\"thumbnail-root\"  hidden$=\"[[!collectionMode]]\">\n  <div class=\"thumbnail\" style$=\"background-image: url('[[selectedCollection.thumbnailUrl]]')\"></div>\n  <!-- <div class=\"thumbnail\" style$=\"background-image: url('[[selectedCollection.thumbnail]]')\"></div>  -->\n</div>\n\n<app-tabs \n  tabs=\"[[tabs]]\" \n  selected=\"{{selectedTab}}\" \n  hidden$=\"[[!collectionMode]]\">\n</app-tabs>\n\n<iron-pages \n  selected=\"[[selectedTab]]\"   \n  attr-for-selected=\"id\" \n  selected-attribute=\"showing\">\n  <div id=\"filters\">\n\n    <!-- <div hidden$=\"[[!collectionMode]]\" class=\"label\">Collection</div>\n    <div hidden$=\"[[!collectionMode]]\" class=\"collection-filter\">\n      <app-facet-checkbox \n        type=\"collection\" \n        value=\"[[selectedCollection.name]]\" \n        checked=\"[[collectionMode]]\"\n        on-click=\"_removeCollectionFilter\">\n      </app-facet-checkbox>\n    </div> -->\n\n    <template is=\"dom-repeat\" items=\"[[facetFilters]]\">\n      <app-filter-panel filter=\"[[item]]\"></app-filter-panel>\n    </template>\n  </div>\n  <app-collection-info-panel id=\"info\"></app-collection-info-panel>\n</iron-pages>\n\n";

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-normal-checkbox.html":
/*!*************************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-normal-checkbox.html ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    cursor: pointer;\n  }\n\n  :host(:focus) {\n    outline: var(--default-outline);\n  }\n\n  :host([disabled]) {\n    cursor: default;\n    outline: none !important;\n  }\n\n  iron-icon {\n    display: none;\n    color: var(--default-secondary-color);\n    min-width: 24px;\n    margin-right: 2px;\n  }\n\n  div {\n    user-select: none;\n    display: flex;\n    min-height: 24px;\n    align-items: top;\n  }\n\n  span {\n    display: inline-block;\n    padding-top: 3px;\n    line-height: normal;\n  }\n\n  div[checked] iron-icon {\n    display: inline-block;\n  }\n\n  div[checked] .value {\n    font-style: italic;\n    font-weight: bold;\n  }\n\n  div[disabled] iron-icon {\n    display: none;\n  }\n\n  div[disabled] .value {\n    font-style: italic;\n    color: var(--gray-text);\n  }\n</style>\n\n<div checked$=\"[[checked]]\" disabled$=\"[[disabled]]\">\n  <iron-icon icon=\"fin-icons:close\"></iron-icon>\n  <span class=\"value\">[[realLabel]]</span>\n</div>";

/***/ }),

/***/ "./public/elements/pages/search/filtering/app-range-filter.html":
/*!**********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-range-filter.html ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<style>\n  :host {\n    display: block;\n  }\n  \n  .labels {\n    display: flex;\n    margin: 0 23px 0 13px;\n    color: var(--gray-text);\n    font-size: var(--fs-sm);\n  }\n\n  .inputs {\n    display: flex;\n    align-items: center;\n  }\n\n  input[type=\"number\"] {\n    margin: 0 13px;\n    padding: 7px;\n    border: 0;\n    width: 50px;\n    font-size: var(--fs-sm);\n  }\n\n  .unknown {\n    margin-left: 9px;\n    display: flex;\n    align-items: center;\n  }\n\n  label {\n    font-size: var(--fs-sm);\n    font-style: italic;\n    padding-left: 5px;\n  }\n\n  app-range-slider {\n    --light-background-color: var(--medium-background-color);\n  }\n</style>\n\n<div class=\"inputs\">\n  <input id=\"minValueInput\" type=\"number\" on-change=\"_onInputChange\" >\n  <span> - </span>\n  <input id=\"maxValueInput\" type=\"number\" on-change=\"_onInputChange\" >\n</div>\n\n<div style=\"margin-right: 10px\">\n  <app-range-slider\n    id=\"slider\"\n    on-range-value-change=\"_onRangeSliderChange\"\n    abs-min-value=\"[[absMinValue]]\"\n    abs-max-value=\"[[absMaxValue]]\"\n    min-value=\"[[minValue]]\"\n    max-value=\"[[maxValue]]\">\n  </app-range-slider>\n</div>\n\n<div class=\"labels\">\n  <div style=\"flex:1\">[[absMinValue]]</div>\n  <div>[[absMaxValue]]</div>\n</div>\n\n<div class=\"unknown\" hidden$=\"[[showUnknown]]\">\n  <input type=\"checkbox\" id=\"unknown\" on-click=\"_onRangeNullChange\" checked />\n  <label for=\"unknown\">include unknown / unspecified</label>\n</div>";

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-grid-result.html":
/*!**************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-grid-result.html ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    width: var(--grid-cell-width);\n    background-color: white;\n    cursor: pointer;\n  }\n\n  :host(:hover), :host(:focus) {\n    border: 2px solid var(--default-secondary-color);\n    margin: -2px 0 0 -2px;\n    outline: none !important;\n  }\n\n  @keyframes show-img {\n    from {opacity: 0}\n    to {opacity: 1}\n  }\n\n  img {\n    animation: show-img 300ms linear;\n    box-sizing: border-box;\n    display:none;\n    /* width: var(--grid-cell-width); */\n    /* background-size: cover;\n    background-color: transparent;\n    background-position: center center; */\n    /* position: absolute;\n    top: 0;\n    left: 0; */\n  }\n\n  .collection-name {\n    font-style: italic;\n    font-size: var(--fs-sm);\n    color: var(--gray-text);\n    font-weight: var(--fw-light);\n  }\n\n  .year {\n    color: var(--gray-text);\n    font-weight: var(--fw-light);\n    flex: 1;\n  }\n\n  .footer {\n    display : flex; \n    align-items : center; \n    margin-top : 10px;\n  }\n\n  h4 {\n    margin: 5px 0;\n    color: var(--default-primary-color);\n  }\n\n  iron-icon {\n    color: var(--default-primary-color);\n  }\n\n  .image {\n    position: relative; \n    background-size: cover;\n    background-color: transparent;\n    background-position: center center;\n    width: 250px; \n  }\n\n  .card-text {\n    padding: 15px;\n    line-height: 1.3;\n  }\n\n  .video-thumbnail {\n    z-index: 1000;\n    width: 30px; \n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    background-image: url('https://via.placeholder.com/25');\n  }\n</style>\n\n<div \n  hidden$=\"[[!isImage]]\" \n  class=\"image\" \n  id=\"imgRoot\"\n  style$=\"background-image: url('[[imgThumbail]]'); height:[[imgHeight]]px;\">\n  <img id=\"img\" src$=\"[[imgUrl]]\" style$=\"height:[[imgHeight]]px; width: 100%\" onload=\"this.style.display='block';\" />\n  <div hidden$=\"[[!isVideo]]\" class=\"video-thumbnail\"></div>\n  <!--\n    <div style$=\"background-image: url('[[imgThumbail]]');height:[[imgHeight]]px\" class=\"img\"></div>\n    <div style$=\"background-image: url('[[imgUrl]]');height:[[imgHeight]]px\" class=\"img\"></div>\n  -->\n</div>\n\n<div class=\"card-text\">\n  <div class=\"collection-name\">[[collectionName]]</div>\n\n  <h4>[[name]]</h4>\n\n  <template is=\"dom-repeat\" items=\"[[creator]]\">\n    <app-search-result-creator creator=\"[[item]]\" grid></app-search-result-creator>\n  </template>\n\n  <div class=\"footer\">\n    <div class=\"year\">[[year]]</div>\n    <div>\n      <!-- <iron-icon icon=\"fin-icons:image\" hidden$=\"[[!isImage]]\"></iron-icon> -->\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-list-result.html":
/*!**************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-list-result.html ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    background-color: white;\n    margin: 10px;\n    border: 2px solid transparent;\n  }\n  \n  :host(:hover), :host(:focus) {\n    cursor: pointer;\n    border: 2px solid var(--default-secondary-color);\n    outline: none !important;\n  }\n\n  .img {\n    height: 250px;\n    width: var(--grid-cell-width);\n    background-size: cover;\n    background-color: white;\n    background-position: center center;\n  }\n\n  .collection-name {\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    color: var(--gray-text);\n  }\n\n  .year {\n    color: var(--gray-text);\n    flex: 1;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .footer {\n    display : flex; \n    align-items : center; \n    margin-top : 10px;\n  }\n\n  .layout {\n    display: flex;\n  }\n\n  h4 {\n    margin: 10px 0;\n    color: var(--default-primary-color);\n  }\n\n  iron-icon {\n    color: var(--default-primary-color);\n  }\n\n  .flex-vertical {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  }\n\n  .data {\n    padding: 15px; \n    flex: 1;\n    overflow: hidden;\n  }\n\n  @media(max-width: 600px) {\n    .img {\n      height: auto;\n      width: 150px;\n    }\n\n    .data {\n      padding: 8px;\n    }\n\n    :host {\n      display: block;\n      background-color: white;\n      margin: 10px 0;\n    }\n  }\n</style>\n\n<div class=\"layout\">\n  <div style$=\"background-image: url('[[imgUrl]]')\" hidden$=\"[[!isImage]]\" class=\"img\" ></div>\n\n  <div class=\"data\">\n    <div class=\"flex-vertical\">\n      <div class=\"collection-name\">[[collectionName]]</div>\n      \n      <h4>[[name]]</h4>\n    \n      <template is=\"dom-repeat\" items=\"[[creator]]\">\n        <app-search-result-creator creator=\"[[item]]\" col></app-search-result-creator>\n      </template>\n      \n      <div class=\"spacer\"></div>\n\n      <div class=\"footer\">\n        <div class=\"year\">[[year]]</div>\n        <div>\n          <!-- <iron-icon icon=\"fin-icons:image\" hidden$=\"[[!isImage]]\"></iron-icon> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-result-creator.html":
/*!*****************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-result-creator.html ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n  }\n  .text {\n    display: block;\n    color: var(--gray-text);\n    line-height: 1.3;\n    font-weight: var(--fw-light);\n  }\n  :host([col]) .text {\n    word-break: break-all;\n  }\n  :host([grid]) .text {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: calc(var(--grid-cell-width) - 30px);\n  }\n</style>\n\n<a class=\"text\" hidden=\"[[!link]]\" href=\"[[textLabel]]\" target=\"_blank\" rel=\"noopener\" on-click=\"_onClick\">[[textLabel]]</a>\n<div class=\"text\" hidden=\"[[link]]\">[[textLabel]]</div>";

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-results-panel.html":
/*!****************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-results-panel.html ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    max-width: 1150px;\n    position: relative;\n    margin: 0 5px\n  }\n\n  .header {\n    font-size: var(--fs-sm);\n    display: flex;\n    align-items: center;\n    margin-bottom: 11px;\n    margin-top: 5px;\n  }\n\n  select {\n    margin-left: 10px;\n    border: 1px solid var(--light-background-color);\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n    -webkit-border-radius: 0px;\n    padding: 5px 30px 5px 10px;\n    background-position: right 10px center;\n    background-size: 16px 16px;\n    background-repeat: no-repeat;\n    background-color: transparent;\n    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCA2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMjg1NTt9PC9zdHlsZT48L2RlZnM+PGc+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjAgMCAxMCAwIDUgNiAwIDAiLz48L2c+PC9zdmc+');\n  }\n  /* for IE */\n  select::-ms-expand {\n    display: none;\n  }\n\n  h3 {\n    border-top: 1px solid var(--light-background-color);\n    margin: 15px 0 0 0;\n    padding: 15px 0 0 0;\n    color: var(--default-primary-color);\n  }\n\n  .masonry {\n    margin: 10px;\n    position: relative;\n  }\n\n  .masonry .item {\n    display: block;\n    position: absolute;\n    /* visibility: hidden; */\n    top : 25px;\n    left: 25px;\n    will-change: top, left;\n    transition: top 500ms ease-out, left 500ms ease-out;\n  }\n\n  .list {\n    margin: 10px;\n  }\n\n  .list .item {\n    padding: 10px;\n    margin-bottom: 15px;\n    background-color: #daaa00;\n    height: 250px;\n  }\n\n  .spacer {\n    height: 20px;\n    border-right: 1px solid var(--light-background-color);\n  }\n\n  .total {\n    font-style: italic; \n    padding-left: 10px;\n    flex: 1;\n  }\n\n  .mobile-total {\n    font-style: italic; \n  }\n\n  .filler {\n    flex: 1;\n  }\n\n  paper-spinner-lite {\n    --paper-spinner-color: var(--default-secondary-color);\n  }\n\n  .loading {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 250px;\n  }\n\n  .error {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 250px;\n    color: red;\n  }\n\n  cork-pagination {\n    display: inline-block;\n\n    --cork-color : var(--default-primary-color);\n    --cork-background-color : var(--default-secondary-color);\n  }\n\n  .drawer-toggle {\n    font-size: var(--fs-sm);\n    cursor: pointer;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n    font-weight: var(--fw-bold);\n    color: var(--default-primary-color);\n    background-color: var(--light-background-color);\n    border-radius: 0;\n    border: 0;\n    padding: 0;\n  }\n  .drawer-toggle > span {\n    padding : 0 10px;\n  }\n  .drawer-toggle iron-icon {\n    background-color: var(--default-secondary-color);\n  }\n\n  .drawer-toggle[disabled] {\n    color: var(--light-background-color);\n  }\n\n  .header {\n    display : none;\n  }\n\n  .mobile-header {\n    padding-top: 15px;\n    margin-bottom: 10px;\n  }\n\n  .mobile-header .row2 {\n    display: flex;\n    align-items: center;\n    margin-right: 10px;\n  }\n\n  .mobile-header .row2-right {\n    display: flex;\n    align-items: center;\n  }\n\n  .collections {\n    text-align: center;\n  }\n\n  @media( max-width: 400px ) {\n    .mobile-header .row2 {\n      flex-direction: column;\n      justify-content: center;\n    }\n    .mobile-header .row2 .total {\n      padding: 8px 0 5px 0;\n    }\n  }\n\n  @media( min-width: 975px ) {\n    .header {\n      display: flex;\n    }\n    .mobile-header {\n      display: none;\n    }\n  }\n</style>\n\n<div class=\"header\">\n  <div class=\"total\" hidden$=\"[[showLoading]]\">[[total]] results found</div>\n  \n  <div class=\"filler\"></div>\n  \n  <paper-icon-button \n    noink\n    icon=\"fin-icons:grid\" \n    disabled$=\"[[!isListLayout]]\"\n    on-click=\"_onLayoutToggle\" \n    type=\"masonry\">\n  </paper-icon-button>\n  <div class=\"spacer\"></div>\n  <paper-icon-button \n    noink\n    icon=\"fin-icons:list\" \n    disabled$=\"[[isListLayout]]\"\n    on-click=\"_onLayoutToggle\" \n    type=\"list\">\n  </paper-icon-button>\n  <div class=\"spacer\"></div>\n  \n  <div>\n    <select id=\"numPerPage\" on-change=\"_onPageSizeChange\">\n      <option value=\"50\">50</option>\n      <option value=\"20\">20</option>\n      <option value=\"10\" selected>10</option>\n    </select>\n  </div>\n  <div style=\"margin: 0 10px; font-style:italic\">Items per page</div>\n</div>\n\n<div class=\"mobile-header\">\n  <div>\n    <div style=\"display:inline-block\">\n      <button class=\"drawer-toggle\" on-click=\"_onToggleDrawer\">\n        <span>Info / Filters</span>\n        <iron-icon icon=\"add\"></iron-icon>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row2\">\n    <div class=\"total\" hidden$=\"[[showLoading]]\">[[total]] results</div>\n\n    <div class=\"row2-right\">\n      <div class=\"filler\"></div>\n    \n      <paper-icon-button \n        noink\n        icon=\"fin-icons:grid\" \n        disabled$=\"[[!isListLayout]]\"\n        on-click=\"_onLayoutToggle\" \n        type=\"masonry\">\n      </paper-icon-button>\n      <div class=\"spacer\"></div>\n      <paper-icon-button\n        noink\n        icon=\"fin-icons:list\" \n        disabled$=\"[[isListLayout]]\"\n        on-click=\"_onLayoutToggle\" \n        type=\"list\">\n      </paper-icon-button>\n      <div class=\"spacer\"></div>\n      \n      <div>\n        <select id=\"numPerPageM\" on-change=\"_onPageSizeChange\">\n          <option>50</option>\n          <option>20</option>\n          <option>10</option>\n        </select>\n      </div>\n      <div style=\"margin: 0 10px; font-style:italic\">per page</div>\n    </div>\n  </div>\n</div>\n\n<app-top-active-filters></app-top-active-filters>\n\n<div class=\"collections\" hidden$=\"[[!showCollectionResults]]\">\n  <div hidden$=\"[[!collectionResults.length]]\">\n    <h3>Collections</h3>\n    <div style=\"text-align:center\">\n      <template is=\"dom-repeat\" items=\"[[collectionResults]]\">\n        <app-collection-card \n          collection=\"[[item]]\" \n          on-keyup=\"_onCollectionClicked\"\n          on-click=\"_onCollectionClicked\">\n        </app-collection-card>\n      </template>\n    </div>\n    <h3 hidden$=\"[[!results.length]]\">Items</h3>\n  </div>\n</div>\n\n<div hidden$=\"[[showError]]\">\n  <div hidden$=\"[[showLoading]]\">\n    <div class=\"masonry\" id=\"layout\" hidden$=\"[[isListLayout]]\">\n      <template is=\"dom-repeat\" items=\"[[results]]\">\n        <app-search-grid-result data=\"[[item]]\" class=\"item\"></app-search-grid-result>\n      </template>\n    </div>\n\n    <div class=\"list\" hidden$=\"[[!isListLayout]]\">\n      <template is=\"dom-repeat\" items=\"[[results]]\">\n        <app-search-list-result data=\"[[item]]\"></app-search-list-result>\n      </template>\n    </div>\n  </div>\n</div>\n\n<div class=\"error\" hidden$=\"[[!showError]]\">\n  <div>[[errorMsg]]</div>\n</div>\n<div class=\"loading\" hidden$=\"[[!showLoading]]\">\n  <paper-spinner-lite active$=\"[[showLoading]]\"></paper-spinner-lite>\n</div>\n\n<div style=\"text-align:center\" hidden$=\"[[showLoading]]\">\n  <cork-pagination \n    total-results=\"[[paginationTotal]]\" \n    items-per-page=\"[[numPerPage]]\"\n    current-index=\"[[currentIndex]]\"\n    on-nav=\"_onPaginationNav\">\n  </cork-pagination>\n</div>\n\n<div hidden$=\"[[!totalOverMaxWindow]]\" style=\"text-align: center\">Digital Collections limits results to \n  10,000.  Use keywords and/or filters to refine search.\n</div>";

/***/ }),

/***/ "./public/elements/utils/app-collection-card.html":
/*!********************************************************!*\
  !*** ./public/elements/utils/app-collection-card.html ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<style>\n  :host {\n    display: inline-block;\n    margin: 15px;\n    outline : 0;\n    height: 320px;\n    width: 320px;\n  }\n\n  :host(:hover), :host(:focus)  {\n    cursor: pointer;\n    margin: 13px;\n    border: 2px solid var(--default-secondary-color);\n  }\n\n  .img.defaultImage {\n    background-size: 65%;\n  }\n\n  .img {\n    height: 320px;\n    width: 320px;\n    position: relative;\n    background-image: url('/images/logos/logo-white-512.png'); /* fallback */\n    background-color: var(--light-background-color);\n    background-size: cover; /* needs to be 65% */\n    background-repeat: no-repeat;\n    background-position: center center;    \n  }\n\n  .img > div  {\n    padding: 15px;\n    position: absolute;\n    left: 0;\n    right: 25px;\n    bottom: 25px;\n    \n    color: var(--default-secondary-color);\n    font-weight: var(--fw-bold);\n\n    background-color: rgba(0, 38, 85, .8);      \n  }\n</style>\n\n<div \n  id=\"img\"\n  class=\"img\" \n  role=\"img\" \n  aria-label=\"[[collection.name]]\">\n  <div>\n    <div>[[collection.name]]</div>\n    <div>[[collection.recordCount]] items</div>\n  </div>\n</div>\n";

/***/ }),

/***/ "./public/elements/utils/app-range-slider.html":
/*!*****************************************************!*\
  !*** ./public/elements/utils/app-range-slider.html ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<style>\n  :host {\n    display: block;\n    position: relative;\n    height: 50px;\n    margin: 0 13px;\n\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently */\n  }\n\n  #numberLine {\n    position: absolute;\n    left : 0;\n    right : 0;\n    height: 3px;\n    background-color: var(--light-background-color, #888);\n  }\n\n  #fillLine {\n    position: absolute;\n    cursor: move;\n    background-color: var(--default-primary-color);\n    height: 3px;\n  }\n\n  .btn {\n    position: absolute;\n    height: 25px;\n    width: 25px;\n    cursor: move;\n  }\n\n  .btn > div {\n    margin: 5px;\n    height: 15px;\n    width: 15px;\n    border-radius: 15px;\n    background-color: var(--default-primary-color);\n    transition: all 150ms linear;\n  }\n\n  .btn[moving] > div {\n    margin: 0px;\n    height: 25px;\n    width: 25px;\n    border-radius: 25px;\n  }\n\n  .label {\n    width : 25px;\n    font-size: 12px; \n    position: absolute;\n    text-align: center;\n    transform: scale(0);\n    transition: transform 200ms linear;\n    color: var(--default-primary-color);\n  }\n\n  .label[moving] {\n    transform: scale(1);\n  }\n\n</style>\n\n<div id=\"numberLine\"></div>\n\n<div id=\"fillLine\" \n  prop=\"range\" \n  on-mousedown=\"_onMoveStart\" \n  on-touchstart=\"_onMoveStart\">\n</div>\n\n<div id=\"lowNumberLabel\" class=\"label\" moving$=\"[[isMoving]]\">[[minValueLabel]]</div>\n<div id=\"highNumberLabel\" class=\"label\" moving$=\"[[isMoving]]\">[[maxValueLabel]]</div>\n\n<div id=\"lowNumberBtn\" \n  class=\"btn\" \n  prop=\"min\" \n  on-mousedown=\"_onMoveStart\" \n  on-touchstart=\"_onMoveStart\" \n  moving$=\"[[movingMin]]\" >\n  <div></div>\n</div>\n\n<div id=\"highNumberBtn\" \n  class=\"btn\" \n  prop=\"max\" \n  on-mousedown=\"_onMoveStart\" \n  on-touchstart=\"_onMoveStart\" \n  moving$=\"[[movingMax]]\">\n  <div></div>\n</div>";

/***/ }),

/***/ "./public/elements/utils/app-tabs.html":
/*!*********************************************!*\
  !*** ./public/elements/utils/app-tabs.html ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<style>\n  :host {\n    display : block;\n  }\n  .layout {\n    display: flex;\n  }\n  .tab {\n    flex: 1;\n    cursor: pointer;\n    text-transform: uppercase;\n    padding: 12px 0 9px 0;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: normal;\n    color: var(--gray-text);\n    border-bottom: 2px solid var(--gray-text);\n  }\n  .tab:focus {\n    border-bottom-color: var(--default-secondary-color);\n    outline: none;\n  }\n  .tab[selected] {\n    cursor: default;\n    font-weight: bold;\n    color: var(--default-primary-color);\n    border-bottom: 4px solid var(--default-primary-color);\n    padding: 12px 0 7px 0;\n  }\n</style>\n\n<div class=\"layout\">\n  <template is=\"dom-repeat\" items=\"[[tabs]]\">\n    <div class=\"tab\" \n      role=\"tab\" \n      tabindex=\"0\" \n      aria-selected$=\"[[item.ariaSelected]]\"\n      selected$=\"[[item.selected]]\"\n      on-click=\"_onTabClicked\" \n      on-keyup=\"_onTabClicked\"\n      value$=\"[[item.value]]\">\n      [[item.label]]\n    </div>\n  </template>\n</div>";

/***/ }),

/***/ "./public/elements/interfaces/FiltersInterface.js":
/*!********************************************************!*\
  !*** ./public/elements/interfaces/FiltersInterface.js ***!
  \********************************************************/
/***/ ((module) => {

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
/***/ ((module) => {

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

/***/ "./public/elements/pages/record/app-copy-cite.js":
/*!*******************************************************!*\
  !*** ./public/elements/pages/record/app-copy-cite.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppCopyCite)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_copy_cite_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-copy-cite.html */ "./public/elements/pages/record/app-copy-cite.html");
/* harmony import */ var _app_copy_cite_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_copy_cite_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! striptags */ "./public/node_modules/striptags/src/striptags.js");
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(striptags__WEBPACK_IMPORTED_MODULE_2__);




class AppCopyCite extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_copy_cite_html__WEBPACK_IMPORTED_MODULE_1___default());
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

/***/ "./public/elements/pages/search/app-collection-info-panel.js":
/*!*******************************************************************!*\
  !*** ./public/elements/pages/search/app-collection-info-panel.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown */ "./public/node_modules/markdown/lib/index.js");
/* harmony import */ var _record_app_copy_cite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../record/app-copy-cite */ "./public/elements/pages/record/app-copy-cite.js");
/* harmony import */ var _app_collection_info_panel_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-collection-info-panel.html */ "./public/elements/pages/search/app-collection-info-panel.html");
/* harmony import */ var _app_collection_info_panel_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_collection_info_panel_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_models_CitationsModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/models/CitationsModel */ "./public/lib/models/CitationsModel/index.js");







class AppCollectionInfoPanel extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
      .with(EventInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_collection_info_panel_html__WEBPACK_IMPORTED_MODULE_3___default());
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
    this.$.description.innerHTML = markdown__WEBPACK_IMPORTED_MODULE_1__.markdown.toHTML(selected.description || '');

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

/***/ "./public/elements/pages/search/app-search.js":
/*!****************************************************!*\
  !*** ./public/elements/pages/search/app-search.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSearch": () => (/* binding */ AppSearch)
/* harmony export */ });
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











class AppSearch extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
            .with(EventInterface, (_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_6___default()), (_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_7___default()), (_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_5___default())) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_search_html__WEBPACK_IMPORTED_MODULE_2___default());
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_normal_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-normal-checkbox */ "./public/elements/pages/search/filtering/app-normal-checkbox.js");




class AppFacetCheckbox extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement {
  
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

/***/ "./public/elements/pages/search/filtering/app-facet-filter.js":
/*!********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-facet-filter.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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











class AppFacetFilter extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
  .with(EventInterface, (_interfaces_FiltersInterface__WEBPACK_IMPORTED_MODULE_1___default()), (_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2___default())) {

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
    tag.innerHTML = (_app_facet_filter_html__WEBPACK_IMPORTED_MODULE_3___default());
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

/***/ "./public/elements/pages/search/filtering/app-filter-panel.js":
/*!********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-filter-panel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppFilterPanel": () => (/* binding */ AppFilterPanel)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./public/node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _ucd_lib_cork_toggle_panel_cork_toggle_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/cork-toggle-panel/cork-toggle-panel */ "./public/node_modules/@ucd-lib/cork-toggle-panel/cork-toggle-panel.js");
/* harmony import */ var _app_range_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-range-filter */ "./public/elements/pages/search/filtering/app-range-filter.js");
/* harmony import */ var _app_filter_panel_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-filter-panel.html */ "./public/elements/pages/search/filtering/app-filter-panel.html");
/* harmony import */ var _app_filter_panel_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_filter_panel_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_facet_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-facet-filter */ "./public/elements/pages/search/filtering/app-facet-filter.js");
  







class AppFilterPanel extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement {

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
    tag.innerHTML = (_app_filter_panel_html__WEBPACK_IMPORTED_MODULE_4___default());
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

/***/ "./public/elements/pages/search/filtering/app-filters-panel.js":
/*!*********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-filters-panel.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
for( var key in (_lib_config__WEBPACK_IMPORTED_MODULE_8___default().elasticSearch.facets) ) {
  let c = (_lib_config__WEBPACK_IMPORTED_MODULE_8___default().elasticSearch.facets)[key];
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


class AppFiltersPanel extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
      .with(EventInterface, (_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_5___default())) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_filters_panel_html__WEBPACK_IMPORTED_MODULE_7___default());
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

/***/ "./public/elements/pages/search/filtering/app-normal-checkbox.js":
/*!***********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-normal-checkbox.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppNormalCheckbox": () => (/* binding */ AppNormalCheckbox)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./public/node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _app_normal_checkbox_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-normal-checkbox.html */ "./public/elements/pages/search/filtering/app-normal-checkbox.html");
/* harmony import */ var _app_normal_checkbox_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_normal_checkbox_html__WEBPACK_IMPORTED_MODULE_2__);





class AppNormalCheckbox extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement {
  
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
    tag.innerHTML = (_app_normal_checkbox_html__WEBPACK_IMPORTED_MODULE_2___default());
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

/***/ "./public/elements/pages/search/filtering/app-range-filter.js":
/*!********************************************************************!*\
  !*** ./public/elements/pages/search/filtering/app-range-filter.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppRangeFilter)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _utils_app_range_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/app-range-slider */ "./public/elements/utils/app-range-slider.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/RecordInterface */ "./public/elements/interfaces/RecordInterface.js");
/* harmony import */ var _interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces/CollectionInterface */ "./public/elements/interfaces/CollectionInterface.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_range_filter_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-range-filter.html */ "./public/elements/pages/search/filtering/app-range-filter.html");
/* harmony import */ var _app_range_filter_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_range_filter_html__WEBPACK_IMPORTED_MODULE_4__);






class AppRangeFilter extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
  .with(EventInterface, (_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_2___default()), (_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3___default())) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_range_filter_html__WEBPACK_IMPORTED_MODULE_4___default());
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppTopActiveFilters)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _app_top_active_filters_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-top-active-filters.tpl.js */ "./public/elements/pages/search/filtering/app-top-active-filters.tpl.js");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/config */ "./public/lib/config.js");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_config__WEBPACK_IMPORTED_MODULE_2__);




class AppTopActiveFilters extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement)
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
    let conf = (_lib_config__WEBPACK_IMPORTED_MODULE_2___default().elasticSearch.facets)[bucket] || {};
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");


function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`

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
  ${this.activeFilters.map((item, index) => lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
    <div @click="${this._onRemoveFilterClicked}" class="rm-btn" index="${index}" role="button" tabindex="0">
      <iron-icon icon="fin-icons:close"></iron-icon> ${item.label}
    </div>
  `)}
</div>

`;}

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-grid-result.js":
/*!************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-grid-result.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSearchGridResult": () => (/* binding */ AppSearchGridResult)
/* harmony export */ });
/* harmony import */ var _app_search_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-search-result */ "./public/elements/pages/search/results/app-search-result.js");
/* harmony import */ var _app_search_grid_result_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-search-grid-result.html */ "./public/elements/pages/search/results/app-search-grid-result.html");
/* harmony import */ var _app_search_grid_result_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_search_grid_result_html__WEBPACK_IMPORTED_MODULE_1__);



class AppSearchGridResult extends _app_search_result__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_search_grid_result_html__WEBPACK_IMPORTED_MODULE_1___default());
    return tag;
  }
}

customElements.define('app-search-grid-result', AppSearchGridResult);

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-list-result.js":
/*!************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-list-result.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSearchListResult": () => (/* binding */ AppSearchListResult)
/* harmony export */ });
/* harmony import */ var _app_search_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-search-result */ "./public/elements/pages/search/results/app-search-result.js");
/* harmony import */ var _app_search_list_result_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-search-list-result.html */ "./public/elements/pages/search/results/app-search-list-result.html");
/* harmony import */ var _app_search_list_result_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_search_list_result_html__WEBPACK_IMPORTED_MODULE_1__);



class AppSearchListResult extends _app_search_result__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_search_list_result_html__WEBPACK_IMPORTED_MODULE_1___default());
    return tag;
  }
}

customElements.define('app-search-list-result', AppSearchListResult);

/***/ }),

/***/ "./public/elements/pages/search/results/app-search-result-creator.js":
/*!***************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-result-creator.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppSearchResultCreator)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_search_result_creator_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-search-result-creator.html */ "./public/elements/pages/search/results/app-search-result-creator.html");
/* harmony import */ var _app_search_result_creator_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_search_result_creator_html__WEBPACK_IMPORTED_MODULE_1__);



class AppSearchResultCreator extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_search_result_creator_html__WEBPACK_IMPORTED_MODULE_1___default());
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppSearchResult)
/* harmony export */ });
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








class AppSearchResult extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
  .with(EventInterface, (_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_4___default()), (_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_3___default()), (_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_5___default())) {

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

    this.year = _lib_utils__WEBPACK_IMPORTED_MODULE_1___default().getYearFromDate(data.created);

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

/***/ "./public/elements/pages/search/results/app-search-results-panel.js":
/*!**************************************************************************!*\
  !*** ./public/elements/pages/search/results/app-search-results-panel.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

class AppSearchResultsPanel extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
      .with(EventInterface, (_interfaces_RecordInterface__WEBPACK_IMPORTED_MODULE_7___default()), (_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_8___default()), (_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_9___default()), (_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_10___default())) {

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
    tag.innerHTML = (_app_search_results_panel_html__WEBPACK_IMPORTED_MODULE_11___default());
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

/***/ "./public/elements/utils/app-range-slider.js":
/*!***************************************************!*\
  !*** ./public/elements/utils/app-range-slider.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppRangeSlider)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_range_slider_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-range-slider.html */ "./public/elements/utils/app-range-slider.html");
/* harmony import */ var _app_range_slider_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_range_slider_html__WEBPACK_IMPORTED_MODULE_1__);



class AppRangeSlider extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_range_slider_html__WEBPACK_IMPORTED_MODULE_1___default());
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

/***/ "./public/elements/utils/app-tabs.js":
/*!*******************************************!*\
  !*** ./public/elements/utils/app-tabs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppTabs)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_tabs_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-tabs.html */ "./public/elements/utils/app-tabs.html");
/* harmony import */ var _app_tabs_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_tabs_html__WEBPACK_IMPORTED_MODULE_1__);



class AppTabs extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_tabs_html__WEBPACK_IMPORTED_MODULE_1___default());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RC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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isd0VBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDBDQUEwQyxFQUFFO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFVK0Q7QUFDekI7O0FBRXZCLHNCQUFzQiw0RUFBYzs7QUFFbkQ7QUFDQTtBQUNBLG9CQUFvQix1REFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0IsdUJBQXVCLE1BQU07QUFDN0Isd0NBQXdDLE1BQU07QUFDOUMsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwrTEFBMkU7QUFDdkY7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL2FwcC1jb3B5LWNpdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2FwcC1jb2xsZWN0aW9uLWluZm8tcGFuZWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2FwcC1zZWFyY2guaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2ZpbHRlcmluZy9hcHAtZmFjZXQtZmlsdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9maWx0ZXJpbmcvYXBwLWZpbHRlci1wYW5lbC5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvZmlsdGVyaW5nL2FwcC1maWx0ZXJzLXBhbmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9maWx0ZXJpbmcvYXBwLW5vcm1hbC1jaGVja2JveC5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvZmlsdGVyaW5nL2FwcC1yYW5nZS1maWx0ZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3Jlc3VsdHMvYXBwLXNlYXJjaC1ncmlkLXJlc3VsdC5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvcmVzdWx0cy9hcHAtc2VhcmNoLWxpc3QtcmVzdWx0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9yZXN1bHRzL2FwcC1zZWFyY2gtcmVzdWx0LWNyZWF0b3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3Jlc3VsdHMvYXBwLXNlYXJjaC1yZXN1bHRzLXBhbmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL2FwcC1jb2xsZWN0aW9uLWNhcmQuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvYXBwLXJhbmdlLXNsaWRlci5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9hcHAtdGFicy5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9pbnRlcmZhY2VzL0ZpbHRlcnNJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2ludGVyZmFjZXMvTWVkaWFJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC9hcHAtY29weS1jaXRlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvYXBwLWNvbGxlY3Rpb24taW5mby1wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2FwcC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9maWx0ZXJpbmcvYXBwLWZhY2V0LWNoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvZmlsdGVyaW5nL2FwcC1mYWNldC1maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9maWx0ZXJpbmcvYXBwLWZpbHRlci1wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2ZpbHRlcmluZy9hcHAtZmlsdGVycy1wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2ZpbHRlcmluZy9hcHAtbm9ybWFsLWNoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvZmlsdGVyaW5nL2FwcC1yYW5nZS1maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9maWx0ZXJpbmcvYXBwLXRvcC1hY3RpdmUtZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL2ZpbHRlcmluZy9hcHAtdG9wLWFjdGl2ZS1maWx0ZXJzLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3Jlc3VsdHMvYXBwLXNlYXJjaC1ncmlkLXJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3Jlc3VsdHMvYXBwLXNlYXJjaC1saXN0LXJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3Jlc3VsdHMvYXBwLXNlYXJjaC1yZXN1bHQtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3Jlc3VsdHMvYXBwLXNlYXJjaC1yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9yZXN1bHRzL2FwcC1zZWFyY2gtcmVzdWx0cy1wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvYXBwLWNvbGxlY3Rpb24tY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvYXBwLXJhbmdlLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvYXBwLXRhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2xpYi91dGlscy9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXItbG9hZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtcCk7XFxuICB9XFxuXFxuICAuY29weUJ1dHRvbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgLyogd2lkdGg6IDg1cHg7ICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtc20pO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctYm9sZCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmNvcHlCdXR0b25bYWN0aXZlXSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG4gIFxcbiAgLmNvcHlCdXR0b25bYWN0aXZlXSBzcGFuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNjaXRlVGV4dCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIH1cXG5cXG4gIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgaGlkZGVuJD1cXFwiW1tjb3B5aW5nXV1cXFwiIGlkPVxcXCJjaXRlVGV4dFxcXCI+PC9kaXY+XFxuPHRleHRhcmVhIGhpZGRlbiQ9XFxcIltbIWNvcHlpbmddXVxcXCIgaWQ9XFxcImNvcHlBcmVhXFxcIj48L3RleHRhcmVhPlxcblxcbjxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcbiAgPGRpdj5cXG4gICAgPHNsb3Q+PC9zbG90PlxcbiAgPC9kaXY+XFxuICA8YnV0dG9uIGFjdGl2ZSQ9XFxcIltbY29weWluZ11dXFxcIiBvbi1jbGljaz1cXFwiX29uQ29weUNsaWNrZWRcXFwiIGNsYXNzPVxcXCJjb3B5QnV0dG9uXFxcIj5cXG4gICAgPGlyb24taWNvbiBpY29uPVxcXCJjb250ZW50LWNvcHlcXFwiIGlkPVxcXCJpY29uXFxcIj48L2lyb24taWNvbj5cXG4gICAgPHNwYW4+Q29weTwvc3Bhbj5cXG4gIDwvYnV0dG9uPlxcbjwvZGl2PlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgfVxcbiAgaDMsIC5oZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICAuc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuICAuYnJlYWsge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBtYXJnaW46IDVweDtcXG4gIH1cXG5cXG4gIHNlbGVjdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDFweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1vLWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgLW8tYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMzBweCA1cHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTBweCBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCA2cHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXhNQ0EySWo0OFpHVm1jejQ4YzNSNWJHVStMbU5zY3kweGUyWnBiR3c2SXpBd01qZzFOVHQ5UEM5emRIbHNaVDQ4TDJSbFpuTStQR2MrUEhCdmJIbG5iMjRnWTJ4aGMzTTlJbU5zY3kweElpQndiMmx1ZEhNOUlqQWdNQ0F4TUNBd0lEVWdOaUF3SURBaUx6NDhMMmMrUEM5emRtYysnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgfVxcbiAgLyogZm9yIElFICovXFxuICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJzZWN0aW9uXFxcIiBoaWRkZW4kPVxcXCJbWyF0aXRsZV1dXFxcIj5cXG4gIDxoMz5bW3RpdGxlXV08L2gzPlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcInNlY3Rpb25cXFwiIGhpZGRlbiQ9XFxcIltbIWRlc2NyaXB0aW9uXV1cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5EZXNjcmlwdGlvbjwvZGl2PlxcbiAgPGRpdiBpZD1cXFwiZGVzY3JpcHRpb25cXFwiPjwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcInNlY3Rpb25cXFwiIGhpZGRlbiQ9XFxcIltbIWNvdmVyYWdlXV1cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5Db3ZlcmFnZTwvZGl2PlxcbiAgPGRpdj5bW2NvdmVyYWdlXV08L2Rpdj5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJicmVha1xcXCI+PC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5DaXRlIHRoaXMgQ29sbGVjdGlvbjwvZGl2PlxcbjxkaXY+XFxuICA8YXBwLWNvcHktY2l0ZSBpZD1cXFwiY29weUNpdGVcXFwiIHRleHQ9XFxcIltbY2l0YXRpb25dXVxcXCI+XFxuICAgIDxzZWxlY3QgaWQ9XFxcImNpdGVGb3JtYXRJbnB1dFxcXCIgdmFsdWUkPVxcXCJbW2NpdGF0aW9uRm9ybWF0XV1cXFwiIG9uLWNoYW5nZT1cXFwiX29uQ2l0ZUZvcm1hdENoYW5nZVxcXCI+XFxuICAgICAgPHRlbXBsYXRlIGlzPVxcXCJkb20tcmVwZWF0XFxcIiBpdGVtcz1cXFwiW1tlbmdpbmVzXV1cXFwiPlxcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiW1tpdGVtLmVuZ2luZV1dXFxcIj5bW2l0ZW0ubGFiZWxdXTwvb3B0aW9uPlxcbiAgICAgIDwvdGVtcGxhdGU+XFxuICAgIDwvc2VsZWN0PlxcbiAgPC9hcHAtY29weS1jaXRlPlxcbjwvZGl2PlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXBlci1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgbWluLWhlaWdodDogNjB2aDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuc2VhcmNoLWNvbnRlbnQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcXG4gIH1cXG5cXG4gIGFwcC1maWx0ZXJzLXBhbmVsIHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBsaW5lYXI7XFxuICB9XFxuICBhcHAtZmlsdGVycy1wYW5lbFt3aWRlXSB7XFxuICAgIHdpZHRoOiA0NzVweDtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgb3BhY2l0eTogLjc7XFxuICAgIH1cXG4gIH1cXG5cXG4gICNkZXNrdG9wLWZpbHRlci1wYW5lbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBAbWVkaWEoIG1heC13aWR0aDogMTAyNXB4ICkge1xcbiAgICBhcHAtZmlsdGVycy1wYW5lbFt3aWRlXSB7XFxuICAgICAgd2lkdGg6IDQxNXB4O1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEoIG1pbi13aWR0aDogOTc1cHggKSB7XFxuICAgICNkZXNrdG9wLWZpbHRlci1wYW5lbCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgY2xhc3M9XFxcInNlYXJjaC1jb250YWluZXJcXFwiPlxcbiAgPGFwcC1maWx0ZXJzLXBhbmVsIGlkPVxcXCJkZXNrdG9wLWZpbHRlci1wYW5lbFxcXCIgd2lkZSQ9XFxcIltbd2lkZUZpbHRlcnNQYW5lbF1dXFxcIiBvbi1zZWxlY3RlZC10YWItY2hhbmdlZD1cXFwiX29uRmlsdGVyc1RhYlVwZGF0ZVxcXCI+PC9hcHAtZmlsdGVycy1wYW5lbD5cXG4gIDxkaXYgY2xhc3M9XFxcInNlYXJjaC1jb250ZW50XFxcIj5cXG4gICAgPGFwcC1zZWFyY2gtcmVzdWx0cy1wYW5lbCBcXG4gICAgICBpZD1cXFwicmVzdWx0c1BhbmVsXFxcIiBcXG4gICAgICBvbi10b2dnbGUtZHJhd2VyPVxcXCJfdG9nZ2xlRHJhd2VyXFxcIiBcXG4gICAgICBvbi1wYWdlLXNpemUtY2hhbmdlPVxcXCJfb25QYWdlU2l6ZUNoYW5nZVxcXCJcXG4gICAgICBvbi1wYWdlLWNoYW5nZT1cXFwiX29uUGFnaW5hdGlvbkNoYW5nZVxcXCI+XFxuICAgIDwvYXBwLXNlYXJjaC1yZXN1bHRzLXBhbmVsPlxcbiAgPC9kaXY+XFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSBpbmNsdWRlPVxcXCJzaGFyZWQtc3R5bGVzXFxcIj5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogYmxvY2tcXG4gIH1cXG5cXG4gIC5maWx0ZXIge1xcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmZpbHRlciBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAyNTBtcyBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIC5maWx0ZXIgYSBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuICAuZmlsdGVyIGE6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgfVxcblxcbiAgLnR5cGVoZWFkLXBhbmVsIHtcXG4gICAgbWFyZ2luOiAwIDI4cHggMTBweCA1cHg7XFxuICB9XFxuICAjdHlwZWFoZWFkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoIC0tc3VwZXItbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcblxcbiAgLmFjdGl2ZS1maWx0ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICB9XFxuXFxuICAuYWN0aXZlLWZpbHRlcjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgfVxcblxcbiAgLmNvdW50IHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtZGlzYWJsZWQpO1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgbWluLXdpZHRoIDogNDBweDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgfVxcblxcbiAgLm92ZXJmbG93IHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgfVxcblxcbiAgaXJvbi1saXN0IHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIGFwcC1ub3JtYWwtY2hlY2tib3gge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB9XFxuXFxuICBwYXBlci1jaGVja2JveFthY3RpdmVdIC5rZXkge1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICBwYXBlci1jaGVja2JveFtkaXNhYmxlZF0gLmtleSB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIH1cXG48L3N0eWxlPlxcblxcbjwhLS0gdHlwZWFoZWFkIHNlYXJjaCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJ0eXBlaGVhZC1wYW5lbFxcXCIgaGlkZGVuJD1cXFwiW1shaW5jbHVkZVR5cGVhaGVhZF1dXFxcIj5cXG4gIDxpbnB1dCBpZD1cXFwidHlwZWFoZWFkXFxcIiBcXG4gICAgdHlwZT1cXFwidGV4dFxcXCIgXFxuICAgIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggW1tsYWJlbF1dc1xcXCIgXFxuICAgIG9uLWtleXVwPVxcXCJfb25UeXBlYWhlYWRLZXl1cFxcXCIgLz5cXG48L2Rpdj5cXG5cXG48IS0tIHVzZWQgZm9yIGxhcmdlIGxpc3RzIC0tPlxcbjxpcm9uLWxpc3QgaWQ9XFxcImxpc3RcXFwiIGl0ZW1zPVxcXCJbW2J1Y2tldHNJcm9uTGlzdF1dXFxcIiBhcz1cXFwiaXRlbVxcXCI+XFxuICA8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpbHRlclxcXCI+XFxuXFxuICAgICAgPGFwcC1ub3JtYWwtY2hlY2tib3hcXG4gICAgICAgIHR5cGUkPVxcXCJbW2xhYmVsXV1cXFwiXFxuICAgICAgICBpbmRleCQ9XFxcIltbaW5kZXhdXVxcXCJcXG4gICAgICAgIHZhbHVlJD1cXFwiW1tpdGVtLmtleV1dXFxcIlxcbiAgICAgICAgbGFiZWwtbWFwPVxcXCJbW3ZhbHVlTWFwXV1cXFwiXFxuICAgICAgICBjaGVja2VkJD1cXFwiW1tpdGVtLmFjdGl2ZV1dXFxcIiBcXG4gICAgICAgIG9uLWNoYW5nZT1cXFwiX3RvZ2dsZUZpbHRlclxcXCJcXG4gICAgICAgIGRpc2FibGVkJD1cXFwiW1tpdGVtLmRpc2FibGVkXV1cXFwiPlxcbiAgICAgIDwvYXBwLW5vcm1hbC1jaGVja2JveD5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb3VudFxcXCI+W1tpdGVtLmRvY19jb3VudF1dPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC90ZW1wbGF0ZT5cXG48L2lyb24tbGlzdD5cXG5cXG48IS0tIHVzZWQgZm9yIHNtYWxsIGxpc3RzIC0tPlxcbjxkaXYgY2xhc3M9XFxcIm92ZXJmbG93XFxcIj5cXG4gIDxkaXY+ICBcXG4gICAgPHRlbXBsYXRlIGlzPVxcXCJkb20tcmVwZWF0XFxcIiBpdGVtcz1cXFwiW1tidWNrZXRzXV1cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZpbHRlclxcXCI+XFxuXFxuICAgICAgICA8YXBwLW5vcm1hbC1jaGVja2JveFxcbiAgICAgICAgICB0eXBlJD1cXFwiW1tsYWJlbF1dXFxcIlxcbiAgICAgICAgICBpbmRleCQ9XFxcIltbaW5kZXhdXVxcXCJcXG4gICAgICAgICAgdmFsdWUkPVxcXCJbW2l0ZW0ua2V5XV1cXFwiXFxuICAgICAgICAgIGxhYmVsLW1hcD1cXFwiW1t2YWx1ZU1hcF1dXFxcIlxcbiAgICAgICAgICBjaGVja2VkJD1cXFwiW1tpdGVtLmFjdGl2ZV1dXFxcIiBcXG4gICAgICAgICAgb24tY2hhbmdlPVxcXCJfdG9nZ2xlRmlsdGVyXFxcIlxcbiAgICAgICAgICBkaXNhYmxlZCQ9XFxcIltbaXRlbS5kaXNhYmxlZF1dXFxcIj5cXG4gICAgICAgIDwvYXBwLW5vcm1hbC1jaGVja2JveD5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvdW50XFxcIj5bW2l0ZW0uZG9jX2NvdW50XV08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC90ZW1wbGF0ZT5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLmxhYmVsIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuaGlnaGxpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMTBweDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubGFiZWw6Zm9jdXMgPiAuaGlnaGxpZ2h0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAjYWN0aXZlRmlsdGVycyA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDRweCA1cHg7XFxuICB9XFxuXFxuICAuZmlsdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgfVxcblxcbiAgaXJvbi1pY29uW2Nsb3NlZF0ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgfVxcblxcbiAgaXJvbi1pY29uW2NsZWFyXSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgfVxcblxcbiAgLyogSk0gLSB0aGluayB0aGlzIGlzIHJlZHVuZGFudCwgc2Nyb2xsIGluZm9yY2VkIGJ5IGFwcC0qLWZpbHRlciBlbGVtZW50ICovXFxuICAvKiAjZmlsdGVycyB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgfSAqL1xcbjwvc3R5bGU+XFxuXFxuPGRpdiBjbGFzcz1cXFwibGFiZWxcXFwiIG9uLWNsaWNrPVxcXCJfb25Ub2dnbGVDbGlja2VkXFxcIiBvbi1rZXl1cD1cXFwiX29uVG9nZ2xlQ2xpY2tlZFxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxuICA8ZGl2IHN0eWxlPVxcXCJmbGV4OjFcXFwiPltbZmlsdGVyLmxhYmVsXV08L2Rpdj5cXG4gIDxpcm9uLWljb24gaWNvbj1cXFwiYXJyb3ctZHJvcC1kb3duXFxcIiBjbG9zZWQkPVxcXCJbWyFvcGVuZWRdXVxcXCI+PC9pcm9uLWljb24+XFxuICA8ZGl2IGNsYXNzPVxcXCJoaWdobGlnaHRcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgaWQ9XFxcImFjdGl2ZUZpbHRlcnNcXFwiIGhpZGRlbiQ9XFxcIltbb3BlbmVkXV1cXFwiPlxcbiAgPGRpdiBoaWRkZW4kPVxcXCJbWyFzZWxlY3RlZC5sZW5ndGhdXVxcXCI+XFxuICAgIDx0ZW1wbGF0ZSBpcz1cXFwiZG9tLXJlcGVhdFxcXCIgaXRlbXM9XFxcIltbc2VsZWN0ZWRdXVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsdGVyXFxcIiBcXG4gICAgICAgIG9uLWNsaWNrPVxcXCJfb25GaWx0ZXJDbGlja2VkXFxcIlxcbiAgICAgICAgb24ta2V5dXA9XFxcIl9vbkZpbHRlckNsaWNrZWRcXFwiIFxcbiAgICAgICAgbGFiZWwkPVxcXCJbW2l0ZW0ubGFiZWxdXVxcXCJcXG4gICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIiBcXG4gICAgICAgIHJvbGU9XFxcImJ1dHRvblxcXCI+XFxuICAgICAgICA8aXJvbi1pY29uIGljb249XFxcImZpbi1pY29uczpjbG9zZVxcXCIgY2xlYXI+PC9pcm9uLWljb24+XFxuICAgICAgICA8ZGl2PltbaXRlbS5uaWNlTGFiZWxdXTwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3RlbXBsYXRlPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuPGRpdiBpZD1cXFwiZmlsdGVyc1xcXCIgaGlkZGVuJD1cXFwiW1shb3BlbmVkXV1cXFwiPjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICAjZmlsdGVycyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgYXBwLWZpbHRlci1wYW5lbCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICB9XFxuXFxuICAudGh1bWJuYWlsIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuXFxuICAudGh1bWJuYWlsLXJvb3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICB9XFxuXFxuICAubGFiZWwge1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctYm9sZCk7XFxuICB9XFxuXFxuICAuY29sbGVjdGlvbi1maWx0ZXIge1xcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgfVxcblxcbiAgLm91dGVyLWRyYXdlci10b2dnbGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAub3V0ZXItZHJhd2VyLXRvZ2dsZVtzcGFjZXJdIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIH1cXG5cXG4gIC5kcmF3ZXItdG9nZ2xlIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTU7XFxuICAgIHRvcCA6IDE1cHg7XFxuICAgIHJpZ2h0OiAtMjRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctYm9sZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgLmRyYXdlci10b2dnbGUgPiBzcGFuIHtcXG4gICAgcGFkZGluZyA6IDAgMTBweDtcXG4gIH1cXG4gIC5kcmF3ZXItdG9nZ2xlIGlyb24taWNvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIEBtZWRpYShtaW4td2lkdGg6IDk3NXB4KSB7XFxuICAgIGgyIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICAub3V0ZXItZHJhd2VyLXRvZ2dsZSB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAudGl0bGUge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJ0aXRsZVxcXCIgaGlkZGVuJD1cXFwiW1tjb2xsZWN0aW9uTW9kZV1dXFxcIiA+RklMVEVSUzwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcIm91dGVyLWRyYXdlci10b2dnbGVcXFwiIHNwYWNlciQ9XFxcIltbIWNvbGxlY3Rpb25Nb2RlXV1cXFwiIG9uLWNsaWNrPVxcXCJfZmlyZVRvZ2dsZURyYXdlclxcXCI+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJkcmF3ZXItdG9nZ2xlXFxcIj5cXG4gICAgPHNwYW4+PHNwYW4gaGlkZGVuJD1cXFwiW1shY29sbGVjdGlvbk1vZGVdXVxcXCI+SW5mbyAvIDwvc3Bhbj5GaWx0ZXJzPC9zcGFuPlxcbiAgICA8aXJvbi1pY29uIGljb249XFxcImZpbi1pY29uczpjbG9zZVxcXCI+PC9pcm9uLWljb24+XFxuICA8L2J1dHRvbj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJ0aHVtYm5haWwtcm9vdFxcXCIgIGhpZGRlbiQ9XFxcIltbIWNvbGxlY3Rpb25Nb2RlXV1cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwidGh1bWJuYWlsXFxcIiBzdHlsZSQ9XFxcImJhY2tncm91bmQtaW1hZ2U6IHVybCgnW1tzZWxlY3RlZENvbGxlY3Rpb24udGh1bWJuYWlsVXJsXV0nKVxcXCI+PC9kaXY+XFxuICA8IS0tIDxkaXYgY2xhc3M9XFxcInRodW1ibmFpbFxcXCIgc3R5bGUkPVxcXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ1tbc2VsZWN0ZWRDb2xsZWN0aW9uLnRodW1ibmFpbF1dJylcXFwiPjwvZGl2PiAgLS0+XFxuPC9kaXY+XFxuXFxuPGFwcC10YWJzIFxcbiAgdGFicz1cXFwiW1t0YWJzXV1cXFwiIFxcbiAgc2VsZWN0ZWQ9XFxcInt7c2VsZWN0ZWRUYWJ9fVxcXCIgXFxuICBoaWRkZW4kPVxcXCJbWyFjb2xsZWN0aW9uTW9kZV1dXFxcIj5cXG48L2FwcC10YWJzPlxcblxcbjxpcm9uLXBhZ2VzIFxcbiAgc2VsZWN0ZWQ9XFxcIltbc2VsZWN0ZWRUYWJdXVxcXCIgICBcXG4gIGF0dHItZm9yLXNlbGVjdGVkPVxcXCJpZFxcXCIgXFxuICBzZWxlY3RlZC1hdHRyaWJ1dGU9XFxcInNob3dpbmdcXFwiPlxcbiAgPGRpdiBpZD1cXFwiZmlsdGVyc1xcXCI+XFxuXFxuICAgIDwhLS0gPGRpdiBoaWRkZW4kPVxcXCJbWyFjb2xsZWN0aW9uTW9kZV1dXFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiPkNvbGxlY3Rpb248L2Rpdj5cXG4gICAgPGRpdiBoaWRkZW4kPVxcXCJbWyFjb2xsZWN0aW9uTW9kZV1dXFxcIiBjbGFzcz1cXFwiY29sbGVjdGlvbi1maWx0ZXJcXFwiPlxcbiAgICAgIDxhcHAtZmFjZXQtY2hlY2tib3ggXFxuICAgICAgICB0eXBlPVxcXCJjb2xsZWN0aW9uXFxcIiBcXG4gICAgICAgIHZhbHVlPVxcXCJbW3NlbGVjdGVkQ29sbGVjdGlvbi5uYW1lXV1cXFwiIFxcbiAgICAgICAgY2hlY2tlZD1cXFwiW1tjb2xsZWN0aW9uTW9kZV1dXFxcIlxcbiAgICAgICAgb24tY2xpY2s9XFxcIl9yZW1vdmVDb2xsZWN0aW9uRmlsdGVyXFxcIj5cXG4gICAgICA8L2FwcC1mYWNldC1jaGVja2JveD5cXG4gICAgPC9kaXY+IC0tPlxcblxcbiAgICA8dGVtcGxhdGUgaXM9XFxcImRvbS1yZXBlYXRcXFwiIGl0ZW1zPVxcXCJbW2ZhY2V0RmlsdGVyc11dXFxcIj5cXG4gICAgICA8YXBwLWZpbHRlci1wYW5lbCBmaWx0ZXI9XFxcIltbaXRlbV1dXFxcIj48L2FwcC1maWx0ZXItcGFuZWw+XFxuICAgIDwvdGVtcGxhdGU+XFxuICA8L2Rpdj5cXG4gIDxhcHAtY29sbGVjdGlvbi1pbmZvLXBhbmVsIGlkPVxcXCJpbmZvXFxcIj48L2FwcC1jb2xsZWN0aW9uLWluZm8tcGFuZWw+XFxuPC9pcm9uLXBhZ2VzPlxcblxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICA6aG9zdCg6Zm9jdXMpIHtcXG4gICAgb3V0bGluZTogdmFyKC0tZGVmYXVsdC1vdXRsaW5lKTtcXG4gIH1cXG5cXG4gIDpob3N0KFtkaXNhYmxlZF0pIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBpcm9uLWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBtaW4td2lkdGg6IDI0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgfVxcblxcbiAgZGl2IHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XFxuICB9XFxuXFxuICBzcGFuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgfVxcblxcbiAgZGl2W2NoZWNrZWRdIGlyb24taWNvbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG5cXG4gIGRpdltjaGVja2VkXSAudmFsdWUge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgZGl2W2Rpc2FibGVkXSBpcm9uLWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgZGl2W2Rpc2FibGVkXSAudmFsdWUge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LXRleHQpO1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBjaGVja2VkJD1cXFwiW1tjaGVja2VkXV1cXFwiIGRpc2FibGVkJD1cXFwiW1tkaXNhYmxlZF1dXFxcIj5cXG4gIDxpcm9uLWljb24gaWNvbj1cXFwiZmluLWljb25zOmNsb3NlXFxcIj48L2lyb24taWNvbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ2YWx1ZVxcXCI+W1tyZWFsTGFiZWxdXTwvc3Bhbj5cXG48L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLmxhYmVscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMCAyM3B4IDAgMTNweDtcXG4gICAgY29sb3I6IHZhcigtLWdyYXktdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtc20pO1xcbiAgfVxcblxcbiAgLmlucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICAgIG1hcmdpbjogMCAxM3B4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtc20pO1xcbiAgfVxcblxcbiAgLnVua25vd24ge1xcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgbGFiZWwge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXNtKTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIH1cXG5cXG4gIGFwcC1yYW5nZS1zbGlkZXIge1xcbiAgICAtLWxpZ2h0LWJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgY2xhc3M9XFxcImlucHV0c1xcXCI+XFxuICA8aW5wdXQgaWQ9XFxcIm1pblZhbHVlSW5wdXRcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgb24tY2hhbmdlPVxcXCJfb25JbnB1dENoYW5nZVxcXCIgPlxcbiAgPHNwYW4+IC0gPC9zcGFuPlxcbiAgPGlucHV0IGlkPVxcXCJtYXhWYWx1ZUlucHV0XFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIG9uLWNoYW5nZT1cXFwiX29uSW5wdXRDaGFuZ2VcXFwiID5cXG48L2Rpdj5cXG5cXG48ZGl2IHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDEwcHhcXFwiPlxcbiAgPGFwcC1yYW5nZS1zbGlkZXJcXG4gICAgaWQ9XFxcInNsaWRlclxcXCJcXG4gICAgb24tcmFuZ2UtdmFsdWUtY2hhbmdlPVxcXCJfb25SYW5nZVNsaWRlckNoYW5nZVxcXCJcXG4gICAgYWJzLW1pbi12YWx1ZT1cXFwiW1thYnNNaW5WYWx1ZV1dXFxcIlxcbiAgICBhYnMtbWF4LXZhbHVlPVxcXCJbW2Fic01heFZhbHVlXV1cXFwiXFxuICAgIG1pbi12YWx1ZT1cXFwiW1ttaW5WYWx1ZV1dXFxcIlxcbiAgICBtYXgtdmFsdWU9XFxcIltbbWF4VmFsdWVdXVxcXCI+XFxuICA8L2FwcC1yYW5nZS1zbGlkZXI+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwibGFiZWxzXFxcIj5cXG4gIDxkaXYgc3R5bGU9XFxcImZsZXg6MVxcXCI+W1thYnNNaW5WYWx1ZV1dPC9kaXY+XFxuICA8ZGl2PltbYWJzTWF4VmFsdWVdXTwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcInVua25vd25cXFwiIGhpZGRlbiQ9XFxcIltbc2hvd1Vua25vd25dXVxcXCI+XFxuICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJ1bmtub3duXFxcIiBvbi1jbGljaz1cXFwiX29uUmFuZ2VOdWxsQ2hhbmdlXFxcIiBjaGVja2VkIC8+XFxuICA8bGFiZWwgZm9yPVxcXCJ1bmtub3duXFxcIj5pbmNsdWRlIHVua25vd24gLyB1bnNwZWNpZmllZDwvbGFiZWw+XFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSBpbmNsdWRlPVxcXCJzaGFyZWQtc3R5bGVzXFxcIj5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiB2YXIoLS1ncmlkLWNlbGwtd2lkdGgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgOmhvc3QoOmhvdmVyKSwgOmhvc3QoOmZvY3VzKSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAtMnB4IDAgMCAtMnB4O1xcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHNob3ctaW1nIHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMH1cXG4gICAgdG8ge29wYWNpdHk6IDF9XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBhbmltYXRpb246IHNob3ctaW1nIDMwMG1zIGxpbmVhcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICAvKiB3aWR0aDogdmFyKC0tZ3JpZC1jZWxsLXdpZHRoKTsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7ICovXFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwOyAqL1xcbiAgfVxcblxcbiAgLmNvbGxlY3Rpb24tbmFtZSB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LXRleHQpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctbGlnaHQpO1xcbiAgfVxcblxcbiAgLnllYXIge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheS10ZXh0KTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWxpZ2h0KTtcXG4gICAgZmxleDogMTtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBkaXNwbGF5IDogZmxleDsgXFxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyOyBcXG4gICAgbWFyZ2luLXRvcCA6IDEwcHg7XFxuICB9XFxuXFxuICBoNCB7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgfVxcblxcbiAgaXJvbi1pY29uIHtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAuaW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1MHB4OyBcXG4gIH1cXG5cXG4gIC5jYXJkLXRleHQge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcbiAgfVxcblxcbiAgLnZpZGVvLXRodW1ibmFpbCB7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHdpZHRoOiAzMHB4OyBcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI1Jyk7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IFxcbiAgaGlkZGVuJD1cXFwiW1shaXNJbWFnZV1dXFxcIiBcXG4gIGNsYXNzPVxcXCJpbWFnZVxcXCIgXFxuICBpZD1cXFwiaW1nUm9vdFxcXCJcXG4gIHN0eWxlJD1cXFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdbW2ltZ1RodW1iYWlsXV0nKTsgaGVpZ2h0OltbaW1nSGVpZ2h0XV1weDtcXFwiPlxcbiAgPGltZyBpZD1cXFwiaW1nXFxcIiBzcmMkPVxcXCJbW2ltZ1VybF1dXFxcIiBzdHlsZSQ9XFxcImhlaWdodDpbW2ltZ0hlaWdodF1dcHg7IHdpZHRoOiAxMDAlXFxcIiBvbmxvYWQ9XFxcInRoaXMuc3R5bGUuZGlzcGxheT0nYmxvY2snO1xcXCIgLz5cXG4gIDxkaXYgaGlkZGVuJD1cXFwiW1shaXNWaWRlb11dXFxcIiBjbGFzcz1cXFwidmlkZW8tdGh1bWJuYWlsXFxcIj48L2Rpdj5cXG4gIDwhLS1cXG4gICAgPGRpdiBzdHlsZSQ9XFxcImJhY2tncm91bmQtaW1hZ2U6IHVybCgnW1tpbWdUaHVtYmFpbF1dJyk7aGVpZ2h0OltbaW1nSGVpZ2h0XV1weFxcXCIgY2xhc3M9XFxcImltZ1xcXCI+PC9kaXY+XFxuICAgIDxkaXYgc3R5bGUkPVxcXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ1tbaW1nVXJsXV0nKTtoZWlnaHQ6W1tpbWdIZWlnaHRdXXB4XFxcIiBjbGFzcz1cXFwiaW1nXFxcIj48L2Rpdj5cXG4gIC0tPlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb2xsZWN0aW9uLW5hbWVcXFwiPltbY29sbGVjdGlvbk5hbWVdXTwvZGl2PlxcblxcbiAgPGg0PltbbmFtZV1dPC9oND5cXG5cXG4gIDx0ZW1wbGF0ZSBpcz1cXFwiZG9tLXJlcGVhdFxcXCIgaXRlbXM9XFxcIltbY3JlYXRvcl1dXFxcIj5cXG4gICAgPGFwcC1zZWFyY2gtcmVzdWx0LWNyZWF0b3IgY3JlYXRvcj1cXFwiW1tpdGVtXV1cXFwiIGdyaWQ+PC9hcHAtc2VhcmNoLXJlc3VsdC1jcmVhdG9yPlxcbiAgPC90ZW1wbGF0ZT5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInllYXJcXFwiPltbeWVhcl1dPC9kaXY+XFxuICAgIDxkaXY+XFxuICAgICAgPCEtLSA8aXJvbi1pY29uIGljb249XFxcImZpbi1pY29uczppbWFnZVxcXCIgaGlkZGVuJD1cXFwiW1shaXNJbWFnZV1dXFxcIj48L2lyb24taWNvbj4gLS0+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSBpbmNsdWRlPVxcXCJzaGFyZWQtc3R5bGVzXFxcIj5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgXFxuICA6aG9zdCg6aG92ZXIpLCA6aG9zdCg6Zm9jdXMpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5pbWcge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogdmFyKC0tZ3JpZC1jZWxsLXdpZHRoKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICB9XFxuXFxuICAuY29sbGVjdGlvbi1uYW1lIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LXRleHQpO1xcbiAgfVxcblxcbiAgLnllYXIge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheS10ZXh0KTtcXG4gICAgZmxleDogMTtcXG4gIH1cXG5cXG4gIC5zcGFjZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGRpc3BsYXkgOiBmbGV4OyBcXG4gICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7IFxcbiAgICBtYXJnaW4tdG9wIDogMTBweDtcXG4gIH1cXG5cXG4gIC5sYXlvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgaDQge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuXFxuICBpcm9uLWljb24ge1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5mbGV4LXZlcnRpY2FsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLmRhdGEge1xcbiAgICBwYWRkaW5nOiAxNXB4OyBcXG4gICAgZmxleDogMTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIEBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5pbWcge1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICB3aWR0aDogMTUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmRhdGEge1xcbiAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgfVxcblxcbiAgICA6aG9zdCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIH1cXG4gIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgY2xhc3M9XFxcImxheW91dFxcXCI+XFxuICA8ZGl2IHN0eWxlJD1cXFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdbW2ltZ1VybF1dJylcXFwiIGhpZGRlbiQ9XFxcIltbIWlzSW1hZ2VdXVxcXCIgY2xhc3M9XFxcImltZ1xcXCIgPjwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiZGF0YVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZsZXgtdmVydGljYWxcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbGxlY3Rpb24tbmFtZVxcXCI+W1tjb2xsZWN0aW9uTmFtZV1dPC9kaXY+XFxuICAgICAgXFxuICAgICAgPGg0PltbbmFtZV1dPC9oND5cXG4gICAgXFxuICAgICAgPHRlbXBsYXRlIGlzPVxcXCJkb20tcmVwZWF0XFxcIiBpdGVtcz1cXFwiW1tjcmVhdG9yXV1cXFwiPlxcbiAgICAgICAgPGFwcC1zZWFyY2gtcmVzdWx0LWNyZWF0b3IgY3JlYXRvcj1cXFwiW1tpdGVtXV1cXFwiIGNvbD48L2FwcC1zZWFyY2gtcmVzdWx0LWNyZWF0b3I+XFxuICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICBcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzcGFjZXJcXFwiPjwvZGl2PlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ5ZWFyXFxcIj5bW3llYXJdXTwvZGl2PlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgPCEtLSA8aXJvbi1pY29uIGljb249XFxcImZpbi1pY29uczppbWFnZVxcXCIgaGlkZGVuJD1cXFwiW1shaXNJbWFnZV1dXFxcIj48L2lyb24taWNvbj4gLS0+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlIGluY2x1ZGU9XFxcInNoYXJlZC1zdHlsZXNcXFwiPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC50ZXh0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LXRleHQpO1xcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctbGlnaHQpO1xcbiAgfVxcbiAgOmhvc3QoW2NvbF0pIC50ZXh0IHtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgfVxcbiAgOmhvc3QoW2dyaWRdKSAudGV4dCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1ncmlkLWNlbGwtd2lkdGgpIC0gMzBweCk7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48YSBjbGFzcz1cXFwidGV4dFxcXCIgaGlkZGVuPVxcXCJbWyFsaW5rXV1cXFwiIGhyZWY9XFxcIltbdGV4dExhYmVsXV1cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIiBvbi1jbGljaz1cXFwiX29uQ2xpY2tcXFwiPltbdGV4dExhYmVsXV08L2E+XFxuPGRpdiBjbGFzcz1cXFwidGV4dFxcXCIgaGlkZGVuPVxcXCJbW2xpbmtdXVxcXCI+W1t0ZXh0TGFiZWxdXTwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDExNTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgNXB4XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gIH1cXG5cXG4gIHNlbGVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tcy1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtby1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgcGFkZGluZzogNXB4IDMwcHggNXB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXhNQ0EySWo0OFpHVm1jejQ4YzNSNWJHVStMbU5zY3kweGUyWnBiR3c2SXpBd01qZzFOVHQ5UEM5emRIbHNaVDQ4TDJSbFpuTStQR2MrUEhCdmJIbG5iMjRnWTJ4aGMzTTlJbU5zY3kweElpQndiMmx1ZEhNOUlqQWdNQ0F4TUNBd0lEVWdOaUF3SURBaUx6NDhMMmMrUEM5emRtYysnKTtcXG4gIH1cXG4gIC8qIGZvciBJRSAqL1xcbiAgc2VsZWN0OjotbXMtZXhwYW5kIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIGgzIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBtYXJnaW46IDE1cHggMCAwIDA7XFxuICAgIHBhZGRpbmc6IDE1cHggMCAwIDA7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgfVxcblxcbiAgLm1hc29ucnkge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC5tYXNvbnJ5IC5pdGVtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xcbiAgICB0b3AgOiAyNXB4O1xcbiAgICBsZWZ0OiAyNXB4O1xcbiAgICB3aWxsLWNoYW5nZTogdG9wLCBsZWZ0O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgNTAwbXMgZWFzZS1vdXQsIGxlZnQgNTAwbXMgZWFzZS1vdXQ7XFxuICB9XFxuXFxuICAubGlzdCB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG5cXG4gIC5saXN0IC5pdGVtIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhYWEwMDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIH1cXG5cXG4gIC5zcGFjZXIge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgfVxcblxcbiAgLnRvdGFsIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljOyBcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcblxcbiAgLm1vYmlsZS10b3RhbCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgXFxuICB9XFxuXFxuICAuZmlsbGVyIHtcXG4gICAgZmxleDogMTtcXG4gIH1cXG5cXG4gIHBhcGVyLXNwaW5uZXItbGl0ZSB7XFxuICAgIC0tcGFwZXItc3Bpbm5lci1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgfVxcblxcbiAgLmxvYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIH1cXG5cXG4gIC5lcnJvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcblxcbiAgY29yay1wYWdpbmF0aW9uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICAtLWNvcmstY29sb3IgOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICAtLWNvcmstYmFja2dyb3VuZC1jb2xvciA6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5kcmF3ZXItdG9nZ2xlIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC5kcmF3ZXItdG9nZ2xlID4gc3BhbiB7XFxuICAgIHBhZGRpbmcgOiAwIDEwcHg7XFxuICB9XFxuICAuZHJhd2VyLXRvZ2dsZSBpcm9uLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAuZHJhd2VyLXRvZ2dsZVtkaXNhYmxlZF0ge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZGlzcGxheSA6IG5vbmU7XFxuICB9XFxuXFxuICAubW9iaWxlLWhlYWRlciB7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgLm1vYmlsZS1oZWFkZXIgLnJvdzIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuXFxuICAubW9iaWxlLWhlYWRlciAucm93Mi1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY29sbGVjdGlvbnMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICBAbWVkaWEoIG1heC13aWR0aDogNDAwcHggKSB7XFxuICAgIC5tb2JpbGUtaGVhZGVyIC5yb3cyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIC5tb2JpbGUtaGVhZGVyIC5yb3cyIC50b3RhbCB7XFxuICAgICAgcGFkZGluZzogOHB4IDAgNXB4IDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSggbWluLXdpZHRoOiA5NzVweCApIHtcXG4gICAgLmhlYWRlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgICAubW9iaWxlLWhlYWRlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInRvdGFsXFxcIiBoaWRkZW4kPVxcXCJbW3Nob3dMb2FkaW5nXV1cXFwiPltbdG90YWxdXSByZXN1bHRzIGZvdW5kPC9kaXY+XFxuICBcXG4gIDxkaXYgY2xhc3M9XFxcImZpbGxlclxcXCI+PC9kaXY+XFxuICBcXG4gIDxwYXBlci1pY29uLWJ1dHRvbiBcXG4gICAgbm9pbmtcXG4gICAgaWNvbj1cXFwiZmluLWljb25zOmdyaWRcXFwiIFxcbiAgICBkaXNhYmxlZCQ9XFxcIltbIWlzTGlzdExheW91dF1dXFxcIlxcbiAgICBvbi1jbGljaz1cXFwiX29uTGF5b3V0VG9nZ2xlXFxcIiBcXG4gICAgdHlwZT1cXFwibWFzb25yeVxcXCI+XFxuICA8L3BhcGVyLWljb24tYnV0dG9uPlxcbiAgPGRpdiBjbGFzcz1cXFwic3BhY2VyXFxcIj48L2Rpdj5cXG4gIDxwYXBlci1pY29uLWJ1dHRvbiBcXG4gICAgbm9pbmtcXG4gICAgaWNvbj1cXFwiZmluLWljb25zOmxpc3RcXFwiIFxcbiAgICBkaXNhYmxlZCQ9XFxcIltbaXNMaXN0TGF5b3V0XV1cXFwiXFxuICAgIG9uLWNsaWNrPVxcXCJfb25MYXlvdXRUb2dnbGVcXFwiIFxcbiAgICB0eXBlPVxcXCJsaXN0XFxcIj5cXG4gIDwvcGFwZXItaWNvbi1idXR0b24+XFxuICA8ZGl2IGNsYXNzPVxcXCJzcGFjZXJcXFwiPjwvZGl2PlxcbiAgXFxuICA8ZGl2PlxcbiAgICA8c2VsZWN0IGlkPVxcXCJudW1QZXJQYWdlXFxcIiBvbi1jaGFuZ2U9XFxcIl9vblBhZ2VTaXplQ2hhbmdlXFxcIj5cXG4gICAgICA8b3B0aW9uIHZhbHVlPVxcXCI1MFxcXCI+NTA8L29wdGlvbj5cXG4gICAgICA8b3B0aW9uIHZhbHVlPVxcXCIyMFxcXCI+MjA8L29wdGlvbj5cXG4gICAgICA8b3B0aW9uIHZhbHVlPVxcXCIxMFxcXCIgc2VsZWN0ZWQ+MTA8L29wdGlvbj5cXG4gICAgPC9zZWxlY3Q+XFxuICA8L2Rpdj5cXG4gIDxkaXYgc3R5bGU9XFxcIm1hcmdpbjogMCAxMHB4OyBmb250LXN0eWxlOml0YWxpY1xcXCI+SXRlbXMgcGVyIHBhZ2U8L2Rpdj5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJtb2JpbGUtaGVhZGVyXFxcIj5cXG4gIDxkaXY+XFxuICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6aW5saW5lLWJsb2NrXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcmF3ZXItdG9nZ2xlXFxcIiBvbi1jbGljaz1cXFwiX29uVG9nZ2xlRHJhd2VyXFxcIj5cXG4gICAgICAgIDxzcGFuPkluZm8gLyBGaWx0ZXJzPC9zcGFuPlxcbiAgICAgICAgPGlyb24taWNvbiBpY29uPVxcXCJhZGRcXFwiPjwvaXJvbi1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cXFwicm93MlxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRvdGFsXFxcIiBoaWRkZW4kPVxcXCJbW3Nob3dMb2FkaW5nXV1cXFwiPltbdG90YWxdXSByZXN1bHRzPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdzItcmlnaHRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZpbGxlclxcXCI+PC9kaXY+XFxuICAgIFxcbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBcXG4gICAgICAgIG5vaW5rXFxuICAgICAgICBpY29uPVxcXCJmaW4taWNvbnM6Z3JpZFxcXCIgXFxuICAgICAgICBkaXNhYmxlZCQ9XFxcIltbIWlzTGlzdExheW91dF1dXFxcIlxcbiAgICAgICAgb24tY2xpY2s9XFxcIl9vbkxheW91dFRvZ2dsZVxcXCIgXFxuICAgICAgICB0eXBlPVxcXCJtYXNvbnJ5XFxcIj5cXG4gICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNwYWNlclxcXCI+PC9kaXY+XFxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXFxuICAgICAgICBub2lua1xcbiAgICAgICAgaWNvbj1cXFwiZmluLWljb25zOmxpc3RcXFwiIFxcbiAgICAgICAgZGlzYWJsZWQkPVxcXCJbW2lzTGlzdExheW91dF1dXFxcIlxcbiAgICAgICAgb24tY2xpY2s9XFxcIl9vbkxheW91dFRvZ2dsZVxcXCIgXFxuICAgICAgICB0eXBlPVxcXCJsaXN0XFxcIj5cXG4gICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNwYWNlclxcXCI+PC9kaXY+XFxuICAgICAgXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxzZWxlY3QgaWQ9XFxcIm51bVBlclBhZ2VNXFxcIiBvbi1jaGFuZ2U9XFxcIl9vblBhZ2VTaXplQ2hhbmdlXFxcIj5cXG4gICAgICAgICAgPG9wdGlvbj41MDwvb3B0aW9uPlxcbiAgICAgICAgICA8b3B0aW9uPjIwPC9vcHRpb24+XFxuICAgICAgICAgIDxvcHRpb24+MTA8L29wdGlvbj5cXG4gICAgICAgIDwvc2VsZWN0PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbjogMCAxMHB4OyBmb250LXN0eWxlOml0YWxpY1xcXCI+cGVyIHBhZ2U8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48YXBwLXRvcC1hY3RpdmUtZmlsdGVycz48L2FwcC10b3AtYWN0aXZlLWZpbHRlcnM+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY29sbGVjdGlvbnNcXFwiIGhpZGRlbiQ9XFxcIltbIXNob3dDb2xsZWN0aW9uUmVzdWx0c11dXFxcIj5cXG4gIDxkaXYgaGlkZGVuJD1cXFwiW1shY29sbGVjdGlvblJlc3VsdHMubGVuZ3RoXV1cXFwiPlxcbiAgICA8aDM+Q29sbGVjdGlvbnM8L2gzPlxcbiAgICA8ZGl2IHN0eWxlPVxcXCJ0ZXh0LWFsaWduOmNlbnRlclxcXCI+XFxuICAgICAgPHRlbXBsYXRlIGlzPVxcXCJkb20tcmVwZWF0XFxcIiBpdGVtcz1cXFwiW1tjb2xsZWN0aW9uUmVzdWx0c11dXFxcIj5cXG4gICAgICAgIDxhcHAtY29sbGVjdGlvbi1jYXJkIFxcbiAgICAgICAgICBjb2xsZWN0aW9uPVxcXCJbW2l0ZW1dXVxcXCIgXFxuICAgICAgICAgIG9uLWtleXVwPVxcXCJfb25Db2xsZWN0aW9uQ2xpY2tlZFxcXCJcXG4gICAgICAgICAgb24tY2xpY2s9XFxcIl9vbkNvbGxlY3Rpb25DbGlja2VkXFxcIj5cXG4gICAgICAgIDwvYXBwLWNvbGxlY3Rpb24tY2FyZD5cXG4gICAgICA8L3RlbXBsYXRlPlxcbiAgICA8L2Rpdj5cXG4gICAgPGgzIGhpZGRlbiQ9XFxcIltbIXJlc3VsdHMubGVuZ3RoXV1cXFwiPkl0ZW1zPC9oMz5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgaGlkZGVuJD1cXFwiW1tzaG93RXJyb3JdXVxcXCI+XFxuICA8ZGl2IGhpZGRlbiQ9XFxcIltbc2hvd0xvYWRpbmddXVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1hc29ucnlcXFwiIGlkPVxcXCJsYXlvdXRcXFwiIGhpZGRlbiQ9XFxcIltbaXNMaXN0TGF5b3V0XV1cXFwiPlxcbiAgICAgIDx0ZW1wbGF0ZSBpcz1cXFwiZG9tLXJlcGVhdFxcXCIgaXRlbXM9XFxcIltbcmVzdWx0c11dXFxcIj5cXG4gICAgICAgIDxhcHAtc2VhcmNoLWdyaWQtcmVzdWx0IGRhdGE9XFxcIltbaXRlbV1dXFxcIiBjbGFzcz1cXFwiaXRlbVxcXCI+PC9hcHAtc2VhcmNoLWdyaWQtcmVzdWx0PlxcbiAgICAgIDwvdGVtcGxhdGU+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0XFxcIiBoaWRkZW4kPVxcXCJbWyFpc0xpc3RMYXlvdXRdXVxcXCI+XFxuICAgICAgPHRlbXBsYXRlIGlzPVxcXCJkb20tcmVwZWF0XFxcIiBpdGVtcz1cXFwiW1tyZXN1bHRzXV1cXFwiPlxcbiAgICAgICAgPGFwcC1zZWFyY2gtbGlzdC1yZXN1bHQgZGF0YT1cXFwiW1tpdGVtXV1cXFwiPjwvYXBwLXNlYXJjaC1saXN0LXJlc3VsdD5cXG4gICAgICA8L3RlbXBsYXRlPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImVycm9yXFxcIiBoaWRkZW4kPVxcXCJbWyFzaG93RXJyb3JdXVxcXCI+XFxuICA8ZGl2PltbZXJyb3JNc2ddXTwvZGl2PlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImxvYWRpbmdcXFwiIGhpZGRlbiQ9XFxcIltbIXNob3dMb2FkaW5nXV1cXFwiPlxcbiAgPHBhcGVyLXNwaW5uZXItbGl0ZSBhY3RpdmUkPVxcXCJbW3Nob3dMb2FkaW5nXV1cXFwiPjwvcGFwZXItc3Bpbm5lci1saXRlPlxcbjwvZGl2PlxcblxcbjxkaXYgc3R5bGU9XFxcInRleHQtYWxpZ246Y2VudGVyXFxcIiBoaWRkZW4kPVxcXCJbW3Nob3dMb2FkaW5nXV1cXFwiPlxcbiAgPGNvcmstcGFnaW5hdGlvbiBcXG4gICAgdG90YWwtcmVzdWx0cz1cXFwiW1twYWdpbmF0aW9uVG90YWxdXVxcXCIgXFxuICAgIGl0ZW1zLXBlci1wYWdlPVxcXCJbW251bVBlclBhZ2VdXVxcXCJcXG4gICAgY3VycmVudC1pbmRleD1cXFwiW1tjdXJyZW50SW5kZXhdXVxcXCJcXG4gICAgb24tbmF2PVxcXCJfb25QYWdpbmF0aW9uTmF2XFxcIj5cXG4gIDwvY29yay1wYWdpbmF0aW9uPlxcbjwvZGl2PlxcblxcbjxkaXYgaGlkZGVuJD1cXFwiW1shdG90YWxPdmVyTWF4V2luZG93XV1cXFwiIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXJcXFwiPkRpZ2l0YWwgQ29sbGVjdGlvbnMgbGltaXRzIHJlc3VsdHMgdG8gXFxuICAxMCwwMDAuICBVc2Uga2V5d29yZHMgYW5kL29yIGZpbHRlcnMgdG8gcmVmaW5lIHNlYXJjaC5cXG48L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgb3V0bGluZSA6IDA7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gIH1cXG5cXG4gIDpob3N0KDpob3ZlciksIDpob3N0KDpmb2N1cykgIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDEzcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5pbWcuZGVmYXVsdEltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NSU7XFxuICB9XFxuXFxuICAuaW1nIHtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9sb2dvcy9sb2dvLXdoaXRlLTUxMi5wbmcnKTsgLyogZmFsbGJhY2sgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIG5lZWRzIHRvIGJlIDY1JSAqL1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAgICBcXG4gIH1cXG5cXG4gIC5pbWcgPiBkaXYgIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMjVweDtcXG4gICAgYm90dG9tOiAyNXB4O1xcbiAgICBcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDM4LCA4NSwgLjgpOyAgICAgIFxcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBcXG4gIGlkPVxcXCJpbWdcXFwiXFxuICBjbGFzcz1cXFwiaW1nXFxcIiBcXG4gIHJvbGU9XFxcImltZ1xcXCIgXFxuICBhcmlhLWxhYmVsPVxcXCJbW2NvbGxlY3Rpb24ubmFtZV1dXFxcIj5cXG4gIDxkaXY+XFxuICAgIDxkaXY+W1tjb2xsZWN0aW9uLm5hbWVdXTwvZGl2PlxcbiAgICA8ZGl2PltbY29sbGVjdGlvbi5yZWNvcmRDb3VudF1dIGl0ZW1zPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbjogMCAxM3B4O1xcblxcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHkgKi9cXG4gIH1cXG5cXG4gICNudW1iZXJMaW5lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0IDogMDtcXG4gICAgcmlnaHQgOiAwO1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvciwgIzg4OCk7XFxuICB9XFxuXFxuICAjZmlsbExpbmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICB9XFxuXFxuICAuYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBjdXJzb3I6IG1vdmU7XFxuICB9XFxuXFxuICAuYnRuID4gZGl2IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXI7XFxuICB9XFxuXFxuICAuYnRuW21vdmluZ10gPiBkaXYge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIH1cXG5cXG4gIC5sYWJlbCB7XFxuICAgIHdpZHRoIDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxMnB4OyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBsaW5lYXI7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgfVxcblxcbiAgLmxhYmVsW21vdmluZ10ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcblxcbjwvc3R5bGU+XFxuXFxuPGRpdiBpZD1cXFwibnVtYmVyTGluZVxcXCI+PC9kaXY+XFxuXFxuPGRpdiBpZD1cXFwiZmlsbExpbmVcXFwiIFxcbiAgcHJvcD1cXFwicmFuZ2VcXFwiIFxcbiAgb24tbW91c2Vkb3duPVxcXCJfb25Nb3ZlU3RhcnRcXFwiIFxcbiAgb24tdG91Y2hzdGFydD1cXFwiX29uTW92ZVN0YXJ0XFxcIj5cXG48L2Rpdj5cXG5cXG48ZGl2IGlkPVxcXCJsb3dOdW1iZXJMYWJlbFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiBtb3ZpbmckPVxcXCJbW2lzTW92aW5nXV1cXFwiPltbbWluVmFsdWVMYWJlbF1dPC9kaXY+XFxuPGRpdiBpZD1cXFwiaGlnaE51bWJlckxhYmVsXFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiIG1vdmluZyQ9XFxcIltbaXNNb3ZpbmddXVxcXCI+W1ttYXhWYWx1ZUxhYmVsXV08L2Rpdj5cXG5cXG48ZGl2IGlkPVxcXCJsb3dOdW1iZXJCdG5cXFwiIFxcbiAgY2xhc3M9XFxcImJ0blxcXCIgXFxuICBwcm9wPVxcXCJtaW5cXFwiIFxcbiAgb24tbW91c2Vkb3duPVxcXCJfb25Nb3ZlU3RhcnRcXFwiIFxcbiAgb24tdG91Y2hzdGFydD1cXFwiX29uTW92ZVN0YXJ0XFxcIiBcXG4gIG1vdmluZyQ9XFxcIltbbW92aW5nTWluXV1cXFwiID5cXG4gIDxkaXY+PC9kaXY+XFxuPC9kaXY+XFxuXFxuPGRpdiBpZD1cXFwiaGlnaE51bWJlckJ0blxcXCIgXFxuICBjbGFzcz1cXFwiYnRuXFxcIiBcXG4gIHByb3A9XFxcIm1heFxcXCIgXFxuICBvbi1tb3VzZWRvd249XFxcIl9vbk1vdmVTdGFydFxcXCIgXFxuICBvbi10b3VjaHN0YXJ0PVxcXCJfb25Nb3ZlU3RhcnRcXFwiIFxcbiAgbW92aW5nJD1cXFwiW1ttb3ZpbmdNYXhdXVxcXCI+XFxuICA8ZGl2PjwvZGl2PlxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXkgOiBibG9jaztcXG4gIH1cXG4gIC5sYXlvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLnRhYiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcGFkZGluZzogMTJweCAwIDlweCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheS10ZXh0KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWdyYXktdGV4dCk7XFxuICB9XFxuICAudGFiOmZvY3VzIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbiAgLnRhYltzZWxlY3RlZF0ge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEycHggMCA3cHggMDtcXG4gIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgY2xhc3M9XFxcImxheW91dFxcXCI+XFxuICA8dGVtcGxhdGUgaXM9XFxcImRvbS1yZXBlYXRcXFwiIGl0ZW1zPVxcXCJbW3RhYnNdXVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYlxcXCIgXFxuICAgICAgcm9sZT1cXFwidGFiXFxcIiBcXG4gICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxuICAgICAgYXJpYS1zZWxlY3RlZCQ9XFxcIltbaXRlbS5hcmlhU2VsZWN0ZWRdXVxcXCJcXG4gICAgICBzZWxlY3RlZCQ9XFxcIltbaXRlbS5zZWxlY3RlZF1dXFxcIlxcbiAgICAgIG9uLWNsaWNrPVxcXCJfb25UYWJDbGlja2VkXFxcIiBcXG4gICAgICBvbi1rZXl1cD1cXFwiX29uVGFiQ2xpY2tlZFxcXCJcXG4gICAgICB2YWx1ZSQ9XFxcIltbaXRlbS52YWx1ZV1dXFxcIj5cXG4gICAgICBbW2l0ZW0ubGFiZWxdXVxcbiAgICA8L2Rpdj5cXG4gIDwvdGVtcGxhdGU+XFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBzdWJjbGFzcyA9PiBcbiAgY2xhc3MgRmlsdGVyc0ludGVyZmFjZSBleHRlbmRzIHN1YmNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLl9pbmplY3RNb2RlbCgnRmlsdGVyc01vZGVsJyk7XG4gICAgfVxuXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHN1YmNsYXNzID0+IFxuICBjbGFzcyBNZWRpYUludGVyZmFjZSBleHRlbmRzIHN1YmNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLl9pbmplY3RNb2RlbCgnTWVkaWFNb2RlbCcpO1xuICAgIH1cblxuICAgIF9nZXRJbWdQYXRoKHJlY29yZCkge1xuICAgICAgcmV0dXJuIHRoaXMuTWVkaWFNb2RlbC5nZXRJbWdQYXRoKHJlY29yZCk7XG4gICAgfVxuXG4gICAgX2dldEltZ1VybChwYXRoLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gdGhpcy5NZWRpYU1vZGVsLmdldEltZ1VybChwYXRoLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBfZ2V0SW1hZ2VNZWRpYUxpc3Qocm9vdFJlY29yZCkge1xuICAgICAgcmV0dXJuIHRoaXMuTWVkaWFNb2RlbC5nZXRJbWFnZU1lZGlhTGlzdChyb290UmVjb3JkKTtcbiAgICB9XG5cbiAgfSIsImltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLWNvcHktY2l0ZS5odG1sXCJcbmltcG9ydCBzdHJpcHRhZ3MgZnJvbSBcInN0cmlwdGFnc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvcHlDaXRlIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJycsXG4gICAgICAgIG9ic2VydmVyIDogJ19vblRleHRVcGRhdGUnXG4gICAgICB9LFxuICAgICAgY29weWluZyA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25UZXh0VXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byAndGV4dCcgcHJvcGVydHkgb2JzZXJ2ZXJcbiAgICovXG4gIF9vblRleHRVcGRhdGUoKSB7XG4gICAgdGhpcy4kLmNpdGVUZXh0LmlubmVySFRNTCA9IHRoaXMudGV4dCB8fCAnJztcbiAgICB0aGlzLiQuY29weUFyZWEudmFsdWUgPSBzdHJpcHRhZ3ModGhpcy50ZXh0KS50cmltKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Db3B5Q2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gY29weSBidG4gY2xpY2sgZXZlbnRcbiAgICovXG4gIF9vbkNvcHlDbGlja2VkKCkge1xuICAgIC8vIGZpcnN0IHNldCBjb3JyZWN0IGhlaWdodFxuICAgIHRoaXMuJC5jb3B5QXJlYS5zdHlsZS5oZWlnaHQgPSAodGhpcy4kLmNpdGVUZXh0Lm9mZnNldEhlaWdodC0xMCkrJ3B4JztcbiAgICB0aGlzLiQuY29weUFyZWEuc3R5bGUud2lkdGggPSAodGhpcy4kLmNpdGVUZXh0Lm9mZnNldFdpZHRoLTEwKSsncHgnO1xuICBcbiAgICB0aGlzLmNvcHlpbmcgPSB0cnVlO1xuICAgIC8vIHRoaXMuJC5jb3B5QXJlYS5zZWxlY3QoKTtcbiAgICB0aGlzLiQuY29weUFyZWEuZm9jdXMoKTtcbiAgICB0aGlzLiQuY29weUFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OSk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDb3B5XCIpO1xuICAgIHRoaXMuJC5pY29uLmljb24gPSAnY2hlY2snO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiQuaWNvbi5pY29uID0gJ2NvbnRlbnQtY29weSc7XG4gICAgICB0aGlzLmNvcHlpbmcgPSBmYWxzZTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWNvcHktY2l0ZScsIEFwcENvcHlDaXRlKTsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IHttYXJrZG93bn0gZnJvbSBcIm1hcmtkb3duXCJcblxuaW1wb3J0IFwiLi4vcmVjb3JkL2FwcC1jb3B5LWNpdGVcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1jb2xsZWN0aW9uLWluZm8tcGFuZWwuaHRtbFwiXG5pbXBvcnQgQ2l0YXRpb25zTW9kZWwgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ2l0YXRpb25zTW9kZWxcIlxuXG5jbGFzcyBBcHBDb2xsZWN0aW9uSW5mb1BhbmVsIGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gICAgICAud2l0aChFdmVudEludGVyZmFjZSkge1xuICBcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd2luZyA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBvYnNlcnZlciA6ICdfb25TaG93aW5nVXBkYXRlJ1xuICAgICAgfSxcbiAgICAgIHRpdGxlIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgY292ZXJhZ2UgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBzdWJqZWN0IDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgY2l0YXRpb24gOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIGNpdGF0aW9uRm9ybWF0IDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJ21sYSdcbiAgICAgIH0sXG4gICAgICBlbmdpbmVzIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogW11cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmZpcnN0U2hvdyA9IHRydWU7XG5cbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnUmVjb3JkTW9kZWwnLCAnQXBwU3RhdGVNb2RlbCcpO1xuICB9XG5cbiAgYXN5bmMgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9vblNlbGVjdGVkQ29sbGVjdGlvblVwZGF0ZSh0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0U2VsZWN0ZWRDb2xsZWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VsZWN0ZWRDb2xsZWN0aW9uVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBmcm9tIENvbGxlY3Rpb25JbnRlcmZhY2UsIGNhbGxlZCB3aGVuIGEgY29sbGVjdGlvbiBpcyBzZWxlY3RlZC5cbiAgICogVGhpcyBpcyBkb25lIGJ5IHNldHRpbmcgYSBjb2xsZWN0aW9uIGZpbHRlci5cbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RlZCBjdXJyZW50bHkgc2VsZWN0ZWQgY29sbGVjdGlvbiBcbiAgICovXG4gIGFzeW5jIF9vblNlbGVjdGVkQ29sbGVjdGlvblVwZGF0ZShzZWxlY3RlZCkge1xuICAgIGlmKCAhc2VsZWN0ZWQgKSB7XG4gICAgICB0aGlzLnRpdGxlID0gJyc7XG4gICAgICB0aGlzLiQuZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLnN1YmplY3QgPSAnJztcbiAgICAgIHRoaXMuY292ZXJhZ2UgPSAnJztcbiAgICAgIHRoaXMuY2l0YXRpb24gPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbGxlY3Rpb24gPSBzZWxlY3RlZDtcbiAgICB0aGlzLnRpdGxlID0gc2VsZWN0ZWQubmFtZSB8fCAnJztcbiAgICB0aGlzLiQuZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gbWFya2Rvd24udG9IVE1MKHNlbGVjdGVkLmRlc2NyaXB0aW9uIHx8ICcnKTtcblxuICAgIGlmKCBzZWxlY3RlZC5zdWJqZWN0ICkge1xuICAgICAgdGhpcy5zdWJqZWN0ID0gc2VsZWN0ZWQuc3ViamVjdC5qb2luKCcsICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YmplY3QgPSAnJztcbiAgICB9XG5cbiAgICBpZiggc2VsZWN0ZWQuY292ZXJhZ2UgKSB7XG4gICAgICB0aGlzLmNvdmVyYWdlID0gc2VsZWN0ZWQuY292ZXJhZ2Uuam9pbignLCAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZENvbGxlY3Rpb25JZCA9IHNlbGVjdGVkWydAaWQnXTtcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLlJlY29yZE1vZGVsLmRlZmF1bHRTZWFyY2goc2VsZWN0ZWRbJ0BpZCddKTtcbiAgICAgIGlmKCByZXN1bHQuaWQgIT09IHRoaXMuc2VsZWN0ZWRDb2xsZWN0aW9uSWQgKSByZXR1cm47IC8vIG1ha2Ugc3VyZSB3ZSBoYXZlbid0IHVwZGF0ZWRcblxuICAgICAgaWYoIHJlc3VsdC5wYXlsb2FkICYmIHJlc3VsdC5wYXlsb2FkLmFnZ3JlZ2F0aW9ucyAmJiByZXN1bHQucGF5bG9hZC5hZ2dyZWdhdGlvbnMucmFuZ2VzICYmXG4gICAgICAgIHJlc3VsdC5wYXlsb2FkLmFnZ3JlZ2F0aW9ucy5yYW5nZXMueWVhclB1Ymxpc2hlZCApIHtcbiAgICAgICAgbGV0IHllYXJQdWJsaXNoZWQgPSByZXN1bHQucGF5bG9hZC5hZ2dyZWdhdGlvbnMucmFuZ2VzLnllYXJQdWJsaXNoZWQ7XG4gICAgICAgIHRoaXMuY292ZXJhZ2UgPSB5ZWFyUHVibGlzaGVkLm1pbisnIC0gJyt5ZWFyUHVibGlzaGVkLm1heDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY292ZXJhZ2UgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggIXRoaXMuZmlyc3RTaG93ICkge1xuICAgICAgdGhpcy5fb25DaXRlRm9ybWF0Q2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX29uU2hvd2luZ1VwZGF0ZSgpIHtcbiAgICBpZiggIXRoaXMuc2hvd2luZyApIHJldHVybjtcbiAgICBpZiggIXRoaXMuZmlyc3RTaG93ICkgcmV0dXJuO1xuICAgIHRoaXMuZmlyc3RTaG93ID0gZmFsc2U7XG5cbiAgICB0aGlzLmVuZ2luZXMgPSBDaXRhdGlvbnNNb2RlbC5lbmdpbmVMaXN0Lm1hcCgoZW5naW5lLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHtlbmdpbmUsIGxhYmVsOiBDaXRhdGlvbnNNb2RlbC5lbmdpbmVMaXN0TGFiZWxzW2luZGV4XX1cbiAgICB9KTtcbiAgICBhd2FpdCBDaXRhdGlvbnNNb2RlbC5fbG9hZEVuZ2luZXMoKTtcbiAgICBhd2FpdCB0aGlzLl9vbkNpdGVGb3JtYXRDaGFuZ2UoKTtcbiAgfVxuXG4gIGFzeW5jIF9vbkNpdGVGb3JtYXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5jaXRhdGlvbiA9IGF3YWl0IENpdGF0aW9uc01vZGVsLnJlbmRlckVzUmVjb3JkKHRoaXMuY29sbGVjdGlvbiwgdGhpcy4kLmNpdGVGb3JtYXRJbnB1dC52YWx1ZSk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1jb2xsZWN0aW9uLWluZm8tcGFuZWwnLCBBcHBDb2xsZWN0aW9uSW5mb1BhbmVsKTsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1zZWFyY2guaHRtbFwiO1xuXG5pbXBvcnQgXCIuL3Jlc3VsdHMvYXBwLXNlYXJjaC1yZXN1bHRzLXBhbmVsXCJcbmltcG9ydCBcIi4vZmlsdGVyaW5nL2FwcC1maWx0ZXJzLXBhbmVsXCJcblxuaW1wb3J0IEFwcFN0YXRlSW50ZXJmYWNlIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvQXBwU3RhdGVJbnRlcmZhY2UnXG5pbXBvcnQgUmVjb3JkSW50ZXJmYWNlIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvUmVjb3JkSW50ZXJmYWNlJ1xuaW1wb3J0IENvbGxlY3Rpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9Db2xsZWN0aW9uSW50ZXJmYWNlJ1xuXG5leHBvcnQgY2xhc3MgQXBwU2VhcmNoIGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gICAgICAgICAgICAud2l0aChFdmVudEludGVyZmFjZSwgUmVjb3JkSW50ZXJmYWNlLCBDb2xsZWN0aW9uSW50ZXJmYWNlLCBBcHBTdGF0ZUludGVyZmFjZSkge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2libGUgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICAgIC8vIG9ic2VydmVyIDogJ19vblZpc2libGVVcGRhdGUnXG4gICAgICB9LFxuICAgICAgcmVzdWx0cyA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IFtdXG4gICAgICB9LFxuICAgICAgZHJhd2VyT3BlbiA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBmaXJzdExvYWQgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IHRydWVcbiAgICAgIH0sXG4gICAgICBhcHBTdGF0ZSA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiAoe30pXG4gICAgICB9LFxuICAgICAgd2lkZUZpbHRlcnNQYW5lbCA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyB0aGlzLl9pbml0U3RhdGUoKTtcbiAgfVxuXG4gIC8vIGFzeW5jIF9pbml0U3RhdGUoKSB7XG4gIC8vICAgbGV0IHN0YXJ0U3RhdGUgPSBhd2FpdCB0aGlzLl9nZXRBcHBTdGF0ZSgpO1xuICAvLyAgIGlmKCBzdGFydFN0YXRlLmxvY2F0aW9uLnBhdGhbMF0gPT09ICdzZWFyY2gnICkge1xuICAvLyAgICAgdGhpcy5hcHBTdGF0ZSA9IHN0YXJ0U3RhdGU7XG4gIC8vICAgICB0aGlzLl9zZWFyY2hGcm9tQXBwU3RhdGUoKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFwcFN0YXRlSW50ZXJmYWNlLCBmaXJlZCB3aGVuIHN0YXRlIHVwZGF0ZXNcbiAgICogQHBhcmFtIHsqfSBlIFxuICAgKi9cbiAgX29uQXBwU3RhdGVVcGRhdGUoZSkge1xuICAgIHRoaXMuZHJhd2VyT3BlbiA9IGUuZmlsdGVyc0RyYXdlck9wZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5hcHBTdGF0ZSA9IGU7XG4gICAgaWYoIFxuICAgICAgZS5sb2NhdGlvbi5wYXRoWzBdICE9PSAnc2VhcmNoJyAmJlxuICAgICAgZS5sb2NhdGlvbi5wYXRoWzBdICE9PSAnY29sbGVjdGlvbidcbiAgICApIHJldHVybjtcbiAgICB0aGlzLl9zZWFyY2hGcm9tQXBwU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zZWFyY2hGcm9tQXBwU3RhdGVcbiAgICogQGRlc2NyaXB0aW9uIHVzZSBjdXJyZW50IGFwcCBzdGF0ZSB0byBwcmVmb3JtIGEgc2VhcmNoLCBzaG91bGQgYmUgY2FsbGVkIG9uIGZpcnN0IGxvYWRcbiAgICogb3IgaWYgc3RhdGUgdXBkYXRlIGV2ZW50IGlzIGZyb20gcG9wdXAgc3RhdGUgKGZvcndhcmQsIGJhY2sgYnV0dG9uIGhpdClcbiAgICovXG4gIF9zZWFyY2hGcm9tQXBwU3RhdGUoKSB7XG4gICAgaWYoICF0aGlzLmRyYXdlck9wZW4gfHwgd2luZG93LmlubmVyV2lkdGggPiA5NzUgKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuXG4gICAgdGhpcy5maXJzdExvYWQgPSBmYWxzZTtcblxuICAgIGxldCBzZWFyY2hVcmxQYXJ0cyA9IHRoaXMuYXBwU3RhdGUubG9jYXRpb24ucGF0aDtcbiAgICBsZXQgcXVlcnk7XG5cbiAgICBpZiggc2VhcmNoVXJsUGFydHNbMF0gPT09ICdjb2xsZWN0aW9uJyApIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5fdXJsVG9TZWFyY2hEb2N1bWVudChbJycsIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIC8vIFtcImlzUGFydE9mLkBpZFwiLFwib3JcIixgL2NvbGxlY3Rpb24vJHtzZWFyY2hVcmxQYXJ0c1sxXX1gXVxuICAgICAgICBbXCJjb2xsZWN0aW9uSWRcIixcIm9yXCIsYC9jb2xsZWN0aW9uLyR7c2VhcmNoVXJsUGFydHNbMV19YF1cbiAgICAgIF0pKSwnJywgJzEwJ10pO1xuXG4gICAgICBpZiggdGhpcy5sYXN0UXVlcnkgPT09IHF1ZXJ5ICkgcmV0dXJuO1xuICAgICAgdGhpcy5sYXN0UXVlcnkgPSBxdWVyeTtcblxuICAgICAgdGhpcy5fc2VhcmNoUmVjb3JkcyhxdWVyeSwgZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiggc2VhcmNoVXJsUGFydHNbMF0gPT09ICdzZWFyY2gnICYmIHNlYXJjaFVybFBhcnRzLmxlbmd0aCA+IDEgKSB7XG4gICAgICBxdWVyeSA9IHRoaXMuX3VybFRvU2VhcmNoRG9jdW1lbnQoc2VhcmNoVXJsUGFydHMuc2xpY2UoMSwgc2VhcmNoVXJsUGFydHMubGVuZ3RoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5SZWNvcmRNb2RlbC5lbXB0eVNlYXJjaERvY3VtZW50KCk7XG4gICAgfVxuICAgIFxuICAgIGlmKCB0aGlzLmxhc3RRdWVyeSA9PT0gcXVlcnkgKSByZXR1cm47XG4gICAgdGhpcy5sYXN0UXVlcnkgPSBxdWVyeTtcblxuICAgIHRoaXMuX3NlYXJjaFJlY29yZHMocXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uRXNTZWFyY2hVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIFJlY29yZEludGVyZmFjZSwgZmlyZWQgd2hlbiBzZWFyY2ggdXBkYXRlc1xuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgXG4gICAqL1xuICBfb25SZWNvcmRTZWFyY2hVcGRhdGUoZSkge1xuICAgIGlmKCBlLnN0YXRlID09PSAnZXJyb3InICkge1xuICAgICAgcmV0dXJuIHRoaXMuJC5yZXN1bHRzUGFuZWwub25FcnJvcihlKTtcbiAgICB9IGVsc2UgaWYoIGUuc3RhdGUgPT09ICdsb2FkaW5nJyApIHtcbiAgICAgIHJldHVybiB0aGlzLiQucmVzdWx0c1BhbmVsLm9uTG9hZGluZygpO1xuICAgIH1cblxuICAgIGlmKCBlLnN0YXRlICE9PSAnbG9hZGVkJyApIHJldHVybjtcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSBlLnNlYXJjaERvY3VtZW50Lm9mZnNldDtcbiAgICBsZXQgcGF5bG9hZCA9IGUucGF5bG9hZDtcbiAgICBsZXQgdG90YWwgPSBwYXlsb2FkLnRvdGFsO1xuICAgIHRoaXMucmVzdWx0cyA9IHBheWxvYWQucmVzdWx0cztcblxuICAgIHRoaXMuJC5yZXN1bHRzUGFuZWwucmVuZGVyKHRoaXMucmVzdWx0cywgdG90YWwsIGUuc2VhcmNoRG9jdW1lbnQubGltaXQsIGN1cnJlbnRJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25QYWdlU2l6ZUNoYW5nZVxuICAgKiBAZGVzY3JpcHRpb24gZmlyZWQgd2hlbiB0aGVuIHVzZXIgc2VsZWN0cyBhIG5ldyBwYWdlIHNpemVcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxuICAgKi9cbiAgX29uUGFnZVNpemVDaGFuZ2UoZSkge1xuICAgIGxldCBzZWFyY2hEb2MgPSB0aGlzLl9nZXRDdXJyZW50U2VhcmNoRG9jdW1lbnQoKTtcbiAgICB0aGlzLl9zZXRQYWdpbmcoc2VhcmNoRG9jLCBzZWFyY2hEb2Mub2Zmc2V0LCBlLmRldGFpbCk7XG4gICAgdGhpcy5SZWNvcmRNb2RlbC5zZXRTZWFyY2hMb2NhdGlvbihzZWFyY2hEb2MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uUGFnaW5hdGlvbkNoYW5nZVxuICAgKiBAZGVzY3JpcHRpb24gZmlyZWQgd2hlbiBwYWdpbmF0aW9uIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcbiAgICovXG4gIF9vblBhZ2luYXRpb25DaGFuZ2UoZSkge1xuICAgIGxldCBzZWFyY2hEb2MgPSB0aGlzLl9nZXRDdXJyZW50U2VhcmNoRG9jdW1lbnQoKTtcbiAgICB0aGlzLl9zZXRQYWdpbmcoc2VhcmNoRG9jLCBlLmRldGFpbC5zdGFydEluZGV4KTtcbiAgICB0aGlzLlJlY29yZE1vZGVsLnNldFNlYXJjaExvY2F0aW9uKHNlYXJjaERvYyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfdG9nZ2xlRHJhd2VyXG4gICAqIEBkZXNjcmlwdGlvbiB0b2dnbGVzIHRoZSBkcmF3ZXIgc3RhdGUuICBMaXN0ZW5zIHRvIFxuICAgKiB0b2dnbGUtZHJhd2VyIGV2ZW50IGZyb20gYXBwLXNlYXJjaC1yZXN1bHRzLXBhbmVsXG4gICAqL1xuICBfdG9nZ2xlRHJhd2VyKCkge1xuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXQoe2ZpbHRlcnNEcmF3ZXJPcGVuOiAhdGhpcy5kcmF3ZXJPcGVufSk7XG4gIH1cblxuICBfb25GaWx0ZXJzVGFiVXBkYXRlKGUpIHtcbiAgICB0aGlzLndpZGVGaWx0ZXJzUGFuZWwgPSBlLmRldGFpbC52YWx1ZSA9PT0gJ2luZm8nID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy4kLnJlc3VsdHNQYW5lbC5fcmVzaXplQXN5bmMoKTtcbiAgICAgIH0pO1xuICAgIH0sIDMwMCk7XG4gICAgXG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1zZWFyY2gnLCBBcHBTZWFyY2gpOyIsImltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiXG5cbmltcG9ydCBcIi4vYXBwLW5vcm1hbC1jaGVja2JveFwiXG5cbmNsYXNzIEFwcEZhY2V0Q2hlY2tib3ggZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIFxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICB2YWx1ZSA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJyxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX29uVmFsdWVDaGFuZ2UnXG4gICAgICB9LFxuICAgICAgbGFiZWxNYXAgOiB7XG4gICAgICAgIHR5cGUgOiBPYmplY3QsXG4gICAgICAgIHZhbHVlIDogKCkgPT4ge31cbiAgICAgIH0sXG4gICAgICBjaGVja2VkIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5IDogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX29uQ2hlY2tlZENoYW5nZSdcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgLy8gICByZXR1cm4gYCBgO1xuICAvLyB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIHRoaXMuZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXBwLW5vcm1hbC1jaGVja2JveCcpO1xuICAgIHRoaXMuZWxlLmxhYmVsID0gdGhpcy5fZ2V0TGFiZWwoKTtcbiAgICBcbiAgICB0aGlzLl9zZXRWYWx1ZSgpO1xuICAgIGlmKCB0aGlzLmNoZWNrZWQgKSB7XG4gICAgICB0aGlzLmVsZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoZWNrZWQtY2hhbmdlZCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5lbGUpO1xuICB9XG5cbiAgX3NldFZhbHVlKCkge1xuICAgIGlmKCB0aGlzLnZhbHVlICkge1xuICAgICAgdGhpcy5lbGUudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy5lbGUubGFiZWwgPSB0aGlzLl9nZXRMYWJlbCgpO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRMYWJlbCgpIHtcbiAgICBpZiggdGhpcy5sYWJlbE1hcCAmJiB0aGlzLmxhYmVsTWFwW3RoaXMudmFsdWVdICkge1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxNYXBbdGhpcy52YWx1ZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgX29uQ2hlY2tlZENoYW5nZSgpIHtcbiAgICBpZiggIXRoaXMuZWxlIHx8IHRoaXMuZWxlLmNoZWNrZWQgPT09IHRoaXMuY2hlY2tlZCApIHJldHVybjtcbiAgICB0aGlzLmVsZS5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xuICB9XG5cbiAgX29uVmFsdWVDaGFuZ2UoKSB7XG4gICAgaWYoICF0aGlzLmVsZSApIHJldHVybjtcbiAgICB0aGlzLmVsZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy52YWx1ZSk7XG4gIH1cblxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZmFjZXQtY2hlY2tib3gnLCBBcHBGYWNldENoZWNrYm94KTsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuXG5pbXBvcnQgRmlsdGVyc0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL0ZpbHRlcnNJbnRlcmZhY2UnXG5pbXBvcnQgUmVjb3JkSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvUmVjb3JkSW50ZXJmYWNlJ1xuXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9hcHAtZmFjZXQtZmlsdGVyLmh0bWwnXG5cbmltcG9ydCBjbG9uZSBmcm9tIFwiY2xvbmVcIlxuaW1wb3J0IFwiLi9hcHAtZmFjZXQtY2hlY2tib3hcIlxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1saXN0XCJcblxuY2xhc3MgQXBwRmFjZXRGaWx0ZXIgZXh0ZW5kcyBNaXhpbihQb2x5bWVyRWxlbWVudClcbiAgLndpdGgoRXZlbnRJbnRlcmZhY2UsIEZpbHRlcnNJbnRlcmZhY2UsIFJlY29yZEludGVyZmFjZSkge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWwgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBmaWx0ZXIgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBpZ25vcmUgOiB7XG4gICAgICAgIHR5cGUgOiBBcnJheSxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiBbXVxuICAgICAgfSxcbiAgICAgIHZhbHVlTWFwIDoge1xuICAgICAgICB0eXBlIDogT2JqZWN0LFxuICAgICAgICB2YWx1ZSA6IG51bGwsXG4gICAgICB9LFxuICAgICAgYnVja2V0cyA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IFtdXG4gICAgICB9LFxuICAgICAgYnVja2V0c0lyb25MaXN0IDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW11cbiAgICAgIH0sXG4gICAgICBpcm9uTGlzdEFjdGl2ZSA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBub3RpZmllZCA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiAoe30pXG4gICAgICB9LFxuICAgICAgaW5jbHVkZVR5cGVhaGVhZCA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB0eXBlYWhlYWRGaWVsZCA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZVRpbWVyID0gLTE7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuJC5saXN0LmZpcmUoJ2lyb24tcmVzaXplJyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgX29uRmlsdGVyQnVja2V0c1VwZGF0ZShlKSB7XG4gICAgaWYoIGUuZmlsdGVyICE9PSB0aGlzLmZpbHRlciApIHJldHVybjtcblxuICAgIGUuYnVja2V0cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYoIHRoaXMubm90aWZpZWRbaXRlbS5rZXldICYmICFpdGVtLmFjdGl2ZSApIHtcbiAgICAgICAgdGhpcy5fbm90aWZ5U2VsZWN0ZWQoaXRlbS5hY3RpdmUsIGl0ZW0ua2V5KTtcbiAgICAgIH0gZWxzZSBpZiggIXRoaXMubm90aWZpZWRbaXRlbS5rZXldICYmIGl0ZW0uYWN0aXZlICkge1xuICAgICAgICB0aGlzLl9ub3RpZnlTZWxlY3RlZChpdGVtLmFjdGl2ZSwgaXRlbS5rZXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoIE9iamVjdC5rZXlzKGUuYnVja2V0cykubGVuZ3RoID4gNTAgKSB7XG4gICAgICB0aGlzLiQubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGxldCB0b3AgPSB0aGlzLiQubGlzdC5zY3JvbGxUb3A7XG5cbiAgICAgIHRoaXMuYnVja2V0c0lyb25MaXN0ID0gZS5idWNrZXRzO1xuICAgICAgdGhpcy5idWNrZXRzID0gW107XG4gICAgICB0aGlzLmlyb25MaXN0QWN0aXZlID0gdHJ1ZTtcblxuICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IGNoYW5nZSBzY3JvbGwgcG9zaXRpb25cbiAgICAgIHRoaXMuJC5saXN0LnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuJC5saXN0LnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiQubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5idWNrZXRzSXJvbkxpc3QgPSBbXTtcbiAgICAgIHRoaXMuYnVja2V0cyA9IGUuYnVja2V0cztcbiAgICAgIHRoaXMuaXJvbkxpc3RBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3VwZGF0ZS12aXNpYmlsaXR5Jywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzaG93OiAoZS5idWNrZXRzLmxlbmd0aCAhPT0gMClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QnVja2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pcm9uTGlzdEFjdGl2ZSA/IHRoaXMuYnVja2V0c0lyb25MaXN0IDogdGhpcy5idWNrZXRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgb25QYXJlbnRGaWx0ZXJDbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsZWQgZnJvbSBwYXJlbnQgdG9nZ2xlIHBhbmVsIHdoZW4gc2VsZWN0ZWQgZmlsdGVyXG4gICAqIGlzIGNsaWNrZWRcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgZmlsdGVyIGtleSBcbiAgICovXG4gIG9uUGFyZW50RmlsdGVyQ2xpY2tlZChrZXkpIHtcbiAgICBsZXQgc2VhcmNoRG9jID0gdGhpcy5fZ2V0Q3VycmVudFNlYXJjaERvY3VtZW50KCk7XG4gICAgdGhpcy5fc2V0UGFnaW5nKHNlYXJjaERvYywgMCk7XG4gICAgdGhpcy5fcmVtb3ZlS2V5d29yZEZpbHRlcihzZWFyY2hEb2MsIHRoaXMuZmlsdGVyLCBrZXkpO1xuICAgIHRoaXMuUmVjb3JkTW9kZWwuc2V0U2VhcmNoTG9jYXRpb24oc2VhcmNoRG9jKTtcblxuICAgIHRoaXMuX25vdGlmeVNlbGVjdGVkKGZhbHNlLCBrZXkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9ub3RpZnlTZWxlY3RlZFxuICAgKiBAZGVzY3JpcHRpb24gbm90aWZ5IHBhcmVudCBvZiBzZWxlY3RlZC91bnNlbGVjdGVkIGZpbHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtCb29sZWFufSBzZWxlY3RlZCBpcyB0aGUgZmlsdGVyIHNlbGVjdGVkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgZmlsdGVyIGtleS9sYWJlbFxuICAgKi9cbiAgX25vdGlmeVNlbGVjdGVkKHNlbGVjdGVkLCBrZXkpIHtcbiAgICBpZiggIXNlbGVjdGVkICYmIHRoaXMubm90aWZpZWRba2V5XSApIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm5vdGlmaWVkW2tleV07XG4gICAgfSBlbHNlIGlmKCBzZWxlY3RlZCApIHtcbiAgICAgIHRoaXMubm90aWZpZWRba2V5XSA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KGAke3NlbGVjdGVkID8gJ2FkZCcgOiAncmVtb3ZlJ30tc2VsZWN0ZWRgLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIGxhYmVsOiBrZXlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgX3RvZ2dsZUZpbHRlcihlKSB7XG4gICAgaWYoIGUuY3VycmVudFRhcmdldC5jaGVja2VkICkgdGhpcy5hcHBlbmRGaWx0ZXIoZSk7XG4gICAgZWxzZSB0aGlzLnJlbW92ZUZpbHRlcihlKTtcbiAgfVxuXG4gIGFwcGVuZEZpbHRlcihlKSB7XG4gICAgbGV0IGJ1Y2tldHMgPSB0aGlzLmdldEJ1Y2tldHMoKTtcbiAgICBsZXQgaXRlbSA9IGJ1Y2tldHNbcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kZXgnKSldO1xuICAgIGlmKCBpdGVtLmVtcHR5ICkgcmV0dXJuO1xuXG4gICAgLy8gcmVzZXQgdHlwZWFoZWFkIGluY2FzZSBpdCB3YXMgYWN0aXZlXG4gICAgdGhpcy4kLnR5cGVhaGVhZC52YWx1ZSA9ICcnO1xuICAgIGlmKCB0aGlzLm9yaWdpbmFsQnVja2V0cyApIHtcbiAgICAgIHRoaXMub3JpZ2luYWxCdWNrZXRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgc2VhcmNoRG9jID0gdGhpcy5fZ2V0Q3VycmVudFNlYXJjaERvY3VtZW50KCk7XG4gICAgdGhpcy5fc2V0UGFnaW5nKHNlYXJjaERvYywgMCk7XG4gICAgdGhpcy5fYXBwZW5kS2V5d29yZEZpbHRlcihzZWFyY2hEb2MsIHRoaXMuZmlsdGVyLCBpdGVtLmtleSk7XG4gICAgdGhpcy5SZWNvcmRNb2RlbC5zZXRTZWFyY2hMb2NhdGlvbihzZWFyY2hEb2MpO1xuXG4gICAgdGhpcy5fbm90aWZ5U2VsZWN0ZWQodHJ1ZSwgaXRlbS5rZXkpO1xuICB9XG5cbiAgcmVtb3ZlRmlsdGVyKGUpIHtcbiAgICBsZXQgYnVja2V0cyA9IHRoaXMuZ2V0QnVja2V0cygpO1xuICAgIGxldCBpdGVtID0gYnVja2V0c1twYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleCcpKV07XG5cbiAgICBsZXQgc2VhcmNoRG9jID0gdGhpcy5fZ2V0Q3VycmVudFNlYXJjaERvY3VtZW50KCk7XG4gICAgdGhpcy5fc2V0UGFnaW5nKHNlYXJjaERvYywgMCk7XG4gICAgdGhpcy5fcmVtb3ZlS2V5d29yZEZpbHRlcihzZWFyY2hEb2MsIHRoaXMuZmlsdGVyLCBpdGVtLmtleSk7XG4gICAgdGhpcy5SZWNvcmRNb2RlbC5zZXRTZWFyY2hMb2NhdGlvbihzZWFyY2hEb2MpO1xuXG4gICAgdGhpcy5fbm90aWZ5U2VsZWN0ZWQoZmFsc2UsIGl0ZW0ua2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblR5cGVhaGVhZEtleXVwXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byB0eXBlYWhlYWQgdGV4dCBpbnB1dCBrZXl1cCBldmVudFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgXG4gICAqL1xuICBfb25UeXBlYWhlYWRLZXl1cCgpIHtcbiAgICB0aGlzLl91cGRhdGVUeXBlYWhlYWQoKTtcbiAgfVxuXG4gIF91cGRhdGVUeXBlYWhlYWQoKSB7XG4gICAgbGV0IHRleHQgPSB0aGlzLiQudHlwZWFoZWFkLnZhbHVlO1xuICAgIGlmKCAhdGV4dCApIHtcbiAgICAgIGlmKCB0aGlzLm9yaWdpbmFsQnVja2V0cyApIHtcblxuICAgICAgICBpZiggdGhpcy5pcm9uTGlzdEFjdGl2ZSApIHtcbiAgICAgICAgICB0aGlzLmJ1Y2tldHNJcm9uTGlzdCA9IHRoaXMub3JpZ2luYWxCdWNrZXRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYnVja2V0cyA9IHRoaXMub3JpZ2luYWxCdWNrZXRzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcmlnaW5hbEJ1Y2tldHMgPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCAhdGhpcy5vcmlnaW5hbEJ1Y2tldHMgKSB7XG4gICAgICB0aGlzLm9yaWdpbmFsQnVja2V0cyA9IFsuLi4odGhpcy5pcm9uTGlzdEFjdGl2ZSA/IHRoaXMuYnVja2V0c0lyb25MaXN0IDogdGhpcy5idWNrZXRzKV07XG4gICAgfVxuXG4gICAgbGV0IHJlID0gbmV3IFJlZ0V4cCgnLionK3RleHQudG9Mb3dlckNhc2UoKSsnLionLCAnaScpO1xuICAgIGxldCBidWNrZXRzID0gdGhpcy5vcmlnaW5hbEJ1Y2tldHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zb3J0S2V5Lm1hdGNoKHJlKSA/IHRydWUgOiBmYWxzZSk7XG5cbiAgICBpZiggdGhpcy5pcm9uTGlzdEFjdGl2ZSApIHtcbiAgICAgIHRoaXMuYnVja2V0c0lyb25MaXN0ID0gYnVja2V0cztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idWNrZXRzID0gYnVja2V0cztcbiAgICB9XG4gIH1cblxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZmFjZXQtZmlsdGVyJywgQXBwRmFjZXRGaWx0ZXIpOyIsIiAgaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRhYnMvcGFwZXItdGFic1wiXG5pbXBvcnQgXCJAdWNkLWxpYi9jb3JrLXRvZ2dsZS1wYW5lbC9jb3JrLXRvZ2dsZS1wYW5lbFwiXG5cbmltcG9ydCBcIi4vYXBwLXJhbmdlLWZpbHRlclwiXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLWZpbHRlci1wYW5lbC5odG1sXCJcbmltcG9ydCBcIi4vYXBwLWZhY2V0LWZpbHRlclwiXG5cbmV4cG9ydCBjbGFzcyBBcHBGaWx0ZXJQYW5lbCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbHRlciA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiBudWxsLFxuICAgICAgICBvYnNlcnZlciA6ICdfcmVuZGVyJ1xuICAgICAgfSxcbiAgICAgIG9wZW5lZCA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyIDogJ190b2dnbGVPcGVuZWQnXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWQgOiB7XG4gICAgICAgIHR5cGUgOiBBcnJheSxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiBbXVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgX3JlbmRlcigpIHtcbiAgICBpZiggIXRoaXMuZmlsdGVyICkgcmV0dXJuO1xuXG4gICAgdGhpcy5pbm5lckhUTUwgPSAnJztcbiAgICB2YXIgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXBwLScrdGhpcy5maWx0ZXIudHlwZSsnLWZpbHRlcicpO1xuICAgIGVsZS5sYWJlbCA9IHRoaXMuZmlsdGVyLmxhYmVsO1xuICAgIGVsZS5maWx0ZXIgPSB0aGlzLmZpbHRlci5maWx0ZXI7XG4gICAgZWxlLmlnbm9yZSA9IHRoaXMuZmlsdGVyLmlnbm9yZTtcbiAgICBlbGUudmFsdWVNYXAgPSB0aGlzLmZpbHRlci52YWx1ZU1hcCB8fCB7fTtcbiAgICBlbGUuaXNEb2xsYXIgPSB0aGlzLmZpbHRlci5pc0RvbGxhcjtcbiAgICBlbGUuaW5jbHVkZVR5cGVhaGVhZCA9IHRoaXMuZmlsdGVyLmluY2x1ZGVUeXBlYWhlYWQgfHwgZmFsc2U7XG4gICAgZWxlLnR5cGVhaGVhZEZpZWxkID0gdGhpcy5maWx0ZXIudHlwZWFoZWFkRmllbGQ7XG5cbiAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcigndXBkYXRlLXZpc2liaWxpdHknLCAoZSkgPT4ge1xuICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gZS5kZXRhaWwuc2hvdyA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgfSk7XG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZC1zZWxlY3RlZCcsIChlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLnNlbGVjdGVkLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubGFiZWwgPT09IGUuZGV0YWlsLmxhYmVsKTtcbiAgICAgIGlmKCBpbmRleCA+IC0xICkgcmV0dXJuO1xuICAgICAgZS5kZXRhaWwubmljZUxhYmVsID0gdGhpcy5fZ2V0TGFiZWwoZS5kZXRhaWwubGFiZWwpO1xuICAgICAgdGhpcy5wdXNoKCdzZWxlY3RlZCcsIGUuZGV0YWlsKTtcbiAgICB9KTtcbiAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcigncmVtb3ZlLXNlbGVjdGVkJywgKGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuc2VsZWN0ZWQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5sYWJlbCA9PT0gZS5kZXRhaWwubGFiZWwpO1xuICAgICAgaWYoIGluZGV4ID09PSAtMSApIHJldHVybjtcbiAgICAgIHRoaXMuc3BsaWNlKCdzZWxlY3RlZCcsIGluZGV4LCAxKTtcbiAgICB9KTtcbiAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcignc2V0LXNlbGVjdGVkJywgKGUpID0+IHtcbiAgICAgIGlmKCBlLmRldGFpbC5zZWxlY3RlZCApIHtcbiAgICAgICAgZS5kZXRhaWwubmljZUxhYmVsID0gdGhpcy5fZ2V0TGFiZWwoZS5kZXRhaWwubGFiZWwpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gW2UuZGV0YWlsXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZWxlID0gZWxlO1xuICAgIFxuICAgIHRoaXMuJC5maWx0ZXJzLmFwcGVuZENoaWxkKGVsZSk7XG4gIH1cblxuICBfZ2V0TGFiZWwobGFiZWwpIHtcbiAgICBpZiggIXRoaXMuZmlsdGVyLnZhbHVlTWFwICkgcmV0dXJuIGxhYmVsO1xuICAgIGlmKCB0eXBlb2YgdGhpcy5maWx0ZXIudmFsdWVNYXAgPT09ICdvYmplY3QnICkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyLnZhbHVlTWFwW2xhYmVsXSB8fCBsYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyLnZhbHVlTWFwKGxhYmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHRvZ2dsZVxuICAgKiBAZGVzY3JpcHRpb24gdG9nZ2xlIG9wZW5lZCBzdGF0ZVxuICAgKi9cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3RvZ2dsZU9wZW5lZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gb3BlbmVkIG9ic2VydmVyLiAgaWYgb3BlbmVkIGlzIHRydWUsXG4gICAqIHRlbGwgdGhlIGNoaWxkIHRvIHJlc2l6ZVxuICAgKi9cbiAgX3RvZ2dsZU9wZW5lZCgpIHtcbiAgICBpZiggIXRoaXMub3BlbmVkICkgcmV0dXJuO1xuICAgIGlmKCB0aGlzLmVsZSAmJiB0aGlzLmVsZS5yZXNpemUgKSB7XG4gICAgICB0aGlzLmVsZS5yZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Ub2dnbGVDbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBtYWluIGxhYmVsIGNsaWNrL2tleWJvYXJkIGV2ZW50cy4gVG9nZ2xlXG4gICAqIHRoZSBwYW5lbC5cbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIENsaWNrL0tleXdvcmQgZXZlbnRcbiAgICovXG4gIF9vblRvZ2dsZUNsaWNrZWQoZSkge1xuICAgIGlmKCBlLnR5cGUgPT09ICdrZXl1cCcgKSB7IC8vIGZyb20ga2V5Ym9hcmQgZXZlbnRcbiAgICAgIGlmKCBlLndoaWNoICE9PSAxMyAmJiBlLndoaWNoICE9PSAzMiApIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uRmlsdGVyQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gY2FsbGVkIHdoZW4gc2VsZWN0ZWQgZmlsdGVyIGlzIGNsaWNrZWQsXG4gICAqIG5vdGlmeSBjaGlsZCBvZiBjbGlja1xuICAgKi9cbiAgX29uRmlsdGVyQ2xpY2tlZChlKSB7XG4gICAgaWYoIGUudHlwZSA9PT0gJ2tleXVwJyApIHsgLy8gZnJvbSBrZXlib2FyZCBldmVudFxuICAgICAgaWYoIGUud2hpY2ggIT09IDEzICkgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeUZpbHRlckNsaWNrZWQoZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnbGFiZWwnKSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25GaWx0ZXJDbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBub3RpZnkgY2hpbGQgb2YgZmlsdGVyIGNsaWNrXG4gICAqL1xuICBfbm90aWZ5RmlsdGVyQ2xpY2tlZChsYWJlbCkge1xuICAgIGlmKCAhdGhpcy5lbGUgKSByZXR1cm47XG4gICAgaWYoICF0aGlzLmVsZS5vblBhcmVudEZpbHRlckNsaWNrZWQgKSByZXR1cm47XG4gICAgdGhpcy5lbGUub25QYXJlbnRGaWx0ZXJDbGlja2VkKGxhYmVsKTtcbiAgfVxuXG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1maWx0ZXItcGFuZWwnLCBBcHBGaWx0ZXJQYW5lbCk7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24tcGFnZXMvaXJvbi1wYWdlc1wiXG5pbXBvcnQgXCIuL2FwcC1maWx0ZXItcGFuZWxcIlxuaW1wb3J0IFwiLi4vYXBwLWNvbGxlY3Rpb24taW5mby1wYW5lbFwiXG5pbXBvcnQgXCIuLi8uLi8uLi91dGlscy9hcHAtdGFic1wiXG5cbmltcG9ydCBSZWNvcmRJbnRlcmZhY2UgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvUmVjb3JkSW50ZXJmYWNlXCJcbmltcG9ydCBDb2xsZWN0aW9uSW50ZXJmYWNlIGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL0NvbGxlY3Rpb25JbnRlcmZhY2VcIlxuXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLWZpbHRlcnMtcGFuZWwuaHRtbFwiXG5cbi8vIGluaXQgZmFjZXQgZmlsdGVycyBmcm9tIHRlbXBsYXRlXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvY29uZmlnXCJcbmNvbnN0IGZhY2V0RmlsdGVycyA9IFtdO1xuZm9yKCB2YXIga2V5IGluIGNvbmZpZy5lbGFzdGljU2VhcmNoLmZhY2V0cyApIHtcbiAgbGV0IGMgPSBjb25maWcuZWxhc3RpY1NlYXJjaC5mYWNldHNba2V5XTtcbiAgZmFjZXRGaWx0ZXJzLnB1c2goe1xuICAgIGxhYmVsIDogYy5sYWJlbCxcbiAgICB0eXBlIDogYy50eXBlLFxuICAgIGlnbm9yZSA6IGMuaWdub3JlLFxuICAgIHZhbHVlTWFwIDogYy52YWx1ZU1hcCxcbiAgICBpc0RvbGxhciA6IGMuaXNEb2xsYXIsXG4gICAgaW5jbHVkZVR5cGVhaGVhZCA6IGMudHlwZWFoZWFkID8gdHJ1ZSA6IGZhbHNlLFxuICAgIHR5cGVhaGVhZEZpZWxkIDogYy50eXBlYWhlYWQsXG4gICAgZmlsdGVyIDoga2V5XG4gIH0pO1xufVxuXG5cbmNsYXNzIEFwcEZpbHRlcnNQYW5lbCBleHRlbmRzIE1peGluKFBvbHltZXJFbGVtZW50KVxuICAgICAgLndpdGgoRXZlbnRJbnRlcmZhY2UsIFJlY29yZEludGVyZmFjZSkge1xuICBcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmFjZXRGaWx0ZXJzIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGZhY2V0RmlsdGVycztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkVGFiIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIHNlbGVjdGVkQ29sbGVjdGlvbiA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiB7fVxuICAgICAgfSxcblxuICAgICAgY29sbGVjdGlvbk1vZGUgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICB0YWJzIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW1xuICAgICAgICAgIHtsYWJlbCA6ICdJbmZvcm1hdGlvbicsIHZhbHVlOiAnaW5mbyd9LFxuICAgICAgICAgIHtsYWJlbCA6ICdGaWx0ZXJzJywgdmFsdWU6ICdmaWx0ZXJzJ31cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2luamVjdE1vZGVsKCdBcHBTdGF0ZU1vZGVsJyk7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX29uU2VsZWN0ZWRDb2xsZWN0aW9uVXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25TZWxlY3RlZENvbGxlY3Rpb25VcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIENvbGxlY3Rpb25JbnRlcmZhY2UsIHJlbmRlciB0aGUgaXJvbi1wYWdlcyBhbmQgY3VycmVudCBjb2xsZWN0aW9uXG4gICAqL1xuICBfb25TZWxlY3RlZENvbGxlY3Rpb25VcGRhdGUoc2VsZWN0ZWQpIHtcbiAgICBpZiggIXNlbGVjdGVkICkge1xuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9ICdmaWx0ZXJzJztcbiAgICAgIHRoaXMuY29sbGVjdGlvbk1vZGUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9IFxuICAgIFxuICAgIHRoaXMuY29sbGVjdGlvbk1vZGUgPSB0cnVlO1xuICAgIHRoaXMuc2VsZWN0ZWRDb2xsZWN0aW9uID0gc2VsZWN0ZWQ7XG4gICAgXG4gICAgaWYoICF0aGlzLnNlbGVjdGVkVGFiICkgdGhpcy5zZWxlY3RlZFRhYiA9ICdpbmZvJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9maXJlVG9nZ2xlRHJhd2VyXG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsZWQgZnJvbSB0b2dnbGUgYnV0dG9uLCBkaXNwYXRjaGVzIGV2ZW50IGZvciBhcHAtc2VhcmNoIHRvIGhhbmRsZSBoaWRpbmcgZHJhd2VyO1xuICAgKi9cbiAgX2ZpcmVUb2dnbGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9nZ2xlLWRyYXdlcicpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW1vdmVDb2xsZWN0aW9uRmlsdGVyXG4gICAqIEBkZXNjcmlwdGlvbiBmaXJlZCBmcm9tIGhhcmQgY29kZWQgY29sbGVjdGlvbiBmaWx0ZXIgY2hlY2tib3guICBSZW1vdmVcbiAgICogY29sbGVjdGlvbiBmaWx0ZXIgd2hlbiBjbGlja2VkXG4gICAqL1xuICBfcmVtb3ZlQ29sbGVjdGlvbkZpbHRlcigpIHtcbiAgICBsZXQgc2VhcmNoRG9jID0gdGhpcy5fZ2V0Q3VycmVudFNlYXJjaERvY3VtZW50KCk7XG4gICAgdGhpcy5fcmVtb3ZlS2V5d29yZEZpbHRlcihzZWFyY2hEb2MsICdpc1BhcnRPZi5AaWQnKTtcbiAgICB0aGlzLl9zZXRQYWdpbmcoc2VhcmNoRG9jLCAwKTtcbiAgICB0aGlzLlJlY29yZE1vZGVsLnNldFNlYXJjaExvY2F0aW9uKHNlYXJjaERvYyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZmlsdGVycy1wYW5lbCcsIEFwcEZpbHRlcnNQYW5lbCk7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCJcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1ub3JtYWwtY2hlY2tib3guaHRtbFwiXG5cbmV4cG9ydCBjbGFzcyBBcHBOb3JtYWxDaGVja2JveCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBsYWJlbCA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIGxhYmVsTWFwIDoge1xuICAgICAgICB0eXBlIDogT2JqZWN0LFxuICAgICAgICB2YWx1ZSA6IG51bGwsXG4gICAgICAgIG9ic2VydmVyIDogJ19vbkxhYmVsTWFwVXBkYXRlJ1xuICAgICAgfSxcbiAgICAgIGxhYmVsTWFwVHlwZSA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiBudWxsXG4gICAgICB9LFxuICAgICAgcmVhbExhYmVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6ICdfcmVhbExhYmVsKHZhbHVlLCBsYWJlbCknXG4gICAgICB9LFxuICAgICAgY2hlY2tlZCA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2UsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlIDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRpc2FibGVkIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGFyaWFDaGVja2VkIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGUgOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogJ19jb21wdXRlQXJpYUNoZWNrZWQoY2hlY2tlZCknXG4gICAgICB9LFxuICAgICAgYXJpYURpc2FibGVkIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGUgOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogJ19jb21wdXRlQXJpYURpc2FibGVkKGRpc2FibGVkKSdcbiAgICAgIH0sXG4gICAgICByb2xlIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICdjaGVja2JveCcsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZSA6IHRydWVcbiAgICAgIH0sXG4gICAgICB0YWJpbmRleCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgY29tcHV0ZWQ6ICdfY29tcHV0ZVRhYkluZGV4KGRpc2FibGVkKScsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZSA6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5fb25DbGljayhlKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgaWYoIGUud2hpY2ggIT09IDEzICkgcmV0dXJuO1xuICAgICAgdGhpcy5fb25DbGljayhlKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3JlYWxMYWJlbFxuICAgKiBAZGVzY3JpcHRpb24gcmVuZGVyIGxhYmVsXG4gICAqIFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCBcbiAgICovXG4gIF9yZWFsTGFiZWwodmFsdWUsIGxhYmVsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldExhYmVsKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfY29tcHV0ZUFyaWFDaGVja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBCb3VuZCB0byAnY2hlY2tlZCcgcHJvcGVydHkuICBzZXQgYXJpYS1jaGVja2VkIHZhbHVlXG4gICAqL1xuICBfY29tcHV0ZUFyaWFDaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2NvbXB1dGVBcmlhRGlzYWJsZWRcbiAgICogQGRlc2NyaXB0aW9uIEJvdW5kIHRvICdkaXNhYmxlZCcgcHJvcGVydHkuICBzZXQgYXJpYS1kaXNhYmxlZCB2YWx1ZVxuICAgKi9cbiAgX2NvbXB1dGVBcmlhRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2NvbXB1dGVUYWJJbmRleFxuICAgKiBAZGVzY3JpcHRpb24gQm91bmQgdG8gJ2Rpc2FibGVkJyBwcm9wZXJ0eS4gIHNldCB0YWJpbmRleCB2YWx1ZVxuICAgKi9cbiAgX2NvbXB1dGVUYWJJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/IC0xIDogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9nZXRMYWJlbFxuICAgKiBAZGVzY3JpcHRpb24gcmV0dXJuIGxhYmVsIGZvciBhIHZhbHVlXG4gICAqL1xuICBfZ2V0TGFiZWwoKSB7XG4gICAgaWYoIHRoaXMubGFiZWxNYXBUeXBlID09PSBudWxsICkgdGhpcy5fb25MYWJlbE1hcFVwZGF0ZSgpO1xuICAgIGlmKCAhdGhpcy5sYWJlbE1hcFR5cGUgKSByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICBcbiAgICBpZiggdGhpcy5sYWJlbE1hcFR5cGUgPT09ICdvYmplY3QnICYmIHRoaXMubGFiZWxNYXBbdGhpcy52YWx1ZV0gKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbE1hcFt0aGlzLnZhbHVlXTtcbiAgICB9IGVsc2UgaWYoIHRoaXMubGFiZWxNYXBUeXBlID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxNYXAodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25MYWJlbE1hcFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gJ2xhYmVsTWFwJyBwcm9wZXJ0eSBvYnNlcnZlci4gIHNldCB0aGUgXG4gICAqIGxhYmVsTWFwVHlwZSBwcm9wZXJ0eVxuICAgKi9cbiAgX29uTGFiZWxNYXBVcGRhdGUoKSB7XG4gICAgdGhpcy5sYWJlbE1hcFR5cGUgPSAnJztcbiAgICBpZiggIXRoaXMubGFiZWxNYXAgKSByZXR1cm47XG4gICAgdGhpcy5sYWJlbE1hcFR5cGUgPSB0eXBlb2YgdGhpcy5sYWJlbE1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNsaWNrXG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsZWQgd2hlbiBkaXYgd3JhcHBlciBpcyBjbGlja2VkXG4gICAqIFxuICAgKiBUT0RPOiBhZGQgYXJpYSBjaGVja2JveCByb2xlXG4gICAqL1xuICBfb25DbGljaygpIHtcbiAgICBpZiggdGhpcy5kaXNhYmxlZCApIHJldHVybjtcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZX0pKTtcbiAgfVxuXG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1ub3JtYWwtY2hlY2tib3gnLCBBcHBOb3JtYWxDaGVja2JveCk7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCBcIi4uLy4uLy4uL3V0aWxzL2FwcC1yYW5nZS1zbGlkZXJcIlxuaW1wb3J0IFJlY29yZEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL1JlY29yZEludGVyZmFjZSdcbmltcG9ydCBDb2xsZWN0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvQ29sbGVjdGlvbkludGVyZmFjZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtcmFuZ2UtZmlsdGVyLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBSYW5nZUZpbHRlciBleHRlbmRzIE1peGluKFBvbHltZXJFbGVtZW50KVxuICAud2l0aChFdmVudEludGVyZmFjZSwgUmVjb3JkSW50ZXJmYWNlLCBDb2xsZWN0aW9uSW50ZXJmYWNlKSB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWwgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBmaWx0ZXIgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG5cbiAgICAgIGFic01pblZhbHVlIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IC0xXG4gICAgICB9LFxuICAgICAgYWJzTWF4VmFsdWUgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogLTEgXG4gICAgICB9LFxuXG4gICAgICBtaW5WYWx1ZSA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAtMVxuICAgICAgfSxcbiAgICAgIG1heFZhbHVlIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IE51bWJlci5NQVhfVkFMVUVcbiAgICAgIH0sXG5cbiAgICAgIHNob3dVbmtub3duIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5yZXNpemUoKTtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICB0aGlzLiQuc2xpZGVyLl9vblJlc2l6ZSgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiQuc2xpZGVyLl9vblJlc2l6ZSgpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNEZWZhdWx0U3RhdGVcbiAgICogQGRlc2NyaXB0aW9uIGlzIHJhbmdlIGZpbHRlciBpbiB0aGUgZGVmYXVsdCBzdGF0ZT8gIGllIGFicyBtaW4vbWF4XG4gICAqIGlzIHRoZSBzYW1lIGFzIG1pbi9tYXggYW5kIHVua25vd24gdmFsdWVzIGFyZSBpbmNsdWRlZD8gIElmIHNvXG4gICAqIHdlIGRvbid0IGFjdHVhbGx5IG5lZWQgYSBmaWx0ZXIgb24uXG4gICAqL1xuICBfaXNEZWZhdWx0U3RhdGUoKSB7XG4gICAgaWYoICF0aGlzLl9pc0ZpbHRlckFwcGxpZWQoKSApIHtcbiAgICAgIFxuICAgICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuX2dldEN1cnJlbnRTZWFyY2hEb2N1bWVudCgpO1xuICAgICAgdGhpcy5fcmVtb3ZlUmFuZ2VGaWx0ZXIoc2VhcmNoRG9jLCB0aGlzLmZpbHRlcik7XG4gICAgICB0aGlzLlJlY29yZE1vZGVsLnNldFNlYXJjaExvY2F0aW9uKHNlYXJjaERvYyk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25SYW5nZVNsaWRlckNoYW5nZVxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gY3VzdG9tICdyYW5nZS12YWx1ZS1jaGFuZ2UnIGV2ZW50IGZyb20gYXBwLXJhbmdlLXNsaWRlclxuICAgKi9cbiAgX29uUmFuZ2VTbGlkZXJDaGFuZ2UoZSkge1xuICAgIHRoaXMubWluVmFsdWUgPSBlLmRldGFpbC5taW47XG4gICAgdGhpcy5tYXhWYWx1ZSA9IGUuZGV0YWlsLm1heDtcblxuICAgIHRoaXMuJC5taW5WYWx1ZUlucHV0LnZhbHVlID0gdGhpcy5taW5WYWx1ZTtcbiAgICB0aGlzLiQubWF4VmFsdWVJbnB1dC52YWx1ZSA9IHRoaXMubWF4VmFsdWU7XG5cbiAgICB0aGlzLl9vblJhbmdlTnVsbENoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uUmFuZ2VOdWxsQ2hhbmdlXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBpbnB1dCBjaGVja2JveC4gIEN1cnJlbnRseSBjYWxsZWQgYnkgaW50ZXJuYWxcbiAgICogZnVuY3Rpb25zIGFzIHdlbGwgdG8gc2VhcmNoIGFmdGVyIHZhbHVlIGNoYW5nZSA6L1xuICAgKi9cbiAgX29uUmFuZ2VOdWxsQ2hhbmdlKCkge1xuICAgIGxldCB2YWx1ZSA9IHtcbiAgICAgIGd0ZTogdGhpcy5taW5WYWx1ZSxcbiAgICAgIGx0ZTogdGhpcy5tYXhWYWx1ZVxuICAgIH1cblxuICAgIGlmKCB0aGlzLiQudW5rbm93bi5jaGVja2VkICkge1xuICAgICAgdmFsdWUuaW5jbHVkZU51bGwgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBmaWx0ZXIgYW5kIHJldHVyblxuICAgIGlmKCB0aGlzLl9pc0RlZmF1bHRTdGF0ZSgpICkgcmV0dXJuO1xuXG4gICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuX2dldEN1cnJlbnRTZWFyY2hEb2N1bWVudCgpO1xuICAgIHRoaXMuX3NldFBhZ2luZyhzZWFyY2hEb2MsIDApO1xuICAgIHRoaXMuX2FwcGVuZFJhbmdlRmlsdGVyKHNlYXJjaERvYywgdGhpcy5maWx0ZXIsIHZhbHVlKTtcbiAgICB0aGlzLlJlY29yZE1vZGVsLnNldFNlYXJjaExvY2F0aW9uKHNlYXJjaERvYyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25JbnB1dENoYW5nZVxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gbWluL21heCBudW1iZXIgaW5wdXRzLlxuICAgKi9cbiAgX29uSW5wdXRDaGFuZ2UoKSB7XG4gICAgbGV0IG1pbiA9IHRoaXMuJC5taW5WYWx1ZUlucHV0LnZhbHVlO1xuICAgIGxldCBtYXggPSB0aGlzLiQubWF4VmFsdWVJbnB1dC52YWx1ZTtcblxuICAgIGlmKCBtaW4gPCB0aGlzLmFic01pblZhbHVlICkge1xuICAgICAgdGhpcy4kLm1pblZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLmFic01pblZhbHVlO1xuICAgICAgbWluID0gdGhpcy5hYnNNaW5WYWx1ZTtcbiAgICB9XG4gICAgaWYoIG1heCA+IHRoaXMuYWJzTWF4VmFsdWUgKSB7XG4gICAgICB0aGlzLiQubWF4VmFsdWVJbnB1dC52YWx1ZSA9IHRoaXMuYWJzTWF4VmFsdWU7XG4gICAgICBtYXggPSB0aGlzLmFic01heFZhbHVlO1xuICAgIH1cbiAgICBpZiggbWluID4gbWF4ICkgbWluID0gbWF4O1xuXG4gICAgdGhpcy5taW5WYWx1ZSA9IG1pbjtcbiAgICB0aGlzLm1heFZhbHVlID0gbWF4O1xuXG4gICAgdGhpcy5fb25SYW5nZU51bGxDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlbGVjdGVkQ29sbGVjdGlvblVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBDb2xsZWN0aW9uSW50ZXJmYWNlLCBjYWxsZWQgd2hlbmV2ZXIgc2VsZWN0ZWQgY29sbGVjdGlvbiB1cGRhdGVzXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZVxuICAgKi9cbiAgX29uU2VsZWN0ZWRDb2xsZWN0aW9uVXBkYXRlKGUpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ29sbGVjdGlvbiA9IGUgPyBlWydAaWQnXSA6ICcnO1xuICAgIHRoaXMuX3JlbmRlckZpbHRlcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblJlY29yZFNlYXJjaFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBSZWNvcmRJbnRlcmZhY2VcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxuICAgKi9cbiAgX29uUmVjb3JkU2VhcmNoVXBkYXRlKGUpIHtcbiAgICBpZiggZS5zdGF0ZSAhPT0gJ2xvYWRlZCcgKSByZXR1cm47XG5cbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXJzID0gZS5zZWFyY2hEb2N1bWVudC5maWx0ZXJzIHx8IHt9O1xuICAgIHRoaXMuX3JlbmRlckZpbHRlcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJGaWx0ZXJzXG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsZWQgYWZ0ZXIgYSBjb2xsZWN0aW9uIGlzIHNlbGVjdGVkIG9yIGEgZmlsdGVyIHNldCB1cGRhdGVzLlxuICAgKiBtYWtlIHN1cmUgcmFuZ2UgZmlsdGVyIGlzIHNldCBjb3JyZWN0bHkuXG4gICAqIFxuICAgKi9cbiAgYXN5bmMgX3JlbmRlckZpbHRlcnMoKSB7XG4gICAgaWYoICF0aGlzLmN1cnJlbnRGaWx0ZXJzICkgcmV0dXJuO1xuXG4gICAgLy8gZ3JhYiBkZWZhdWx0IGFnZ3JlZ2F0aW9ucyBmb3IgY29sbGVjdGlvblxuICAgIGxldCBjaWQgPSB0aGlzLnNlbGVjdGVkQ29sbGVjdGlvbjtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmYXVsdFJlY29yZFNlYXJjaCh0aGlzLnNlbGVjdGVkQ29sbGVjdGlvbik7XG4gICAgaWYoIGNpZCAhPT0gdGhpcy5zZWxlY3RlZENvbGxlY3Rpb24gKSByZXR1cm47IC8vIG1ha2Ugc3VyZSB3ZSBoYXZlbid0IHVwZGF0ZWRcbiAgICB0aGlzLmRlZmF1bHQgPSByZXN1bHQ7XG5cbiAgICBsZXQgcmFuZ2VGaWx0ZXIgPSB0aGlzLmRlZmF1bHQucGF5bG9hZC5hZ2dyZWdhdGlvbnMucmFuZ2VzW3RoaXMuZmlsdGVyXTtcbiAgICBpZiggcmFuZ2VGaWx0ZXIgKSB7XG4gICAgICB0aGlzLmFic01pblZhbHVlID0gcmFuZ2VGaWx0ZXIubWluO1xuICAgICAgdGhpcy5hYnNNYXhWYWx1ZSA9IHJhbmdlRmlsdGVyLm1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX3Nob3coZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3codHJ1ZSk7XG5cbiAgICAvLyBtYWtlIHN1cmUgYW55IGN1cnJlbnQgdmFsdWVzIGFyZSBzZXQgY29ycmVjdGx5XG4gICAgaWYoIHRoaXMubWluVmFsdWUgPCB0aGlzLmFic01pblZhbHVlIHx8ICF0aGlzLmN1cnJlbnRGaWx0ZXJzW3RoaXMuZmlsdGVyXSApIHtcbiAgICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLmFic01pblZhbHVlO1xuICAgICAgdGhpcy4kLm1pblZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLm1pblZhbHVlO1xuICAgIH1cbiAgICBpZiggdGhpcy5tYXhWYWx1ZSA+IHRoaXMuYWJzTWF4VmFsdWUgfHwgIXRoaXMuY3VycmVudEZpbHRlcnNbdGhpcy5maWx0ZXJdICkge1xuICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuYWJzTWF4VmFsdWU7XG4gICAgICB0aGlzLiQubWF4VmFsdWVJbnB1dC52YWx1ZSA9IHRoaXMubWF4VmFsdWU7XG4gICAgfVxuXG4gICAgLy8gbm93IHNldCB0aGUgY3VycmVudCBmaWx0ZXJzIGZyb20gc2VhcmNoXG4gICAgaWYoIHRoaXMuY3VycmVudEZpbHRlcnNbdGhpcy5maWx0ZXJdICkge1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5jdXJyZW50RmlsdGVyc1t0aGlzLmZpbHRlcl0udmFsdWU7XG5cbiAgICAgIHRoaXMubWluVmFsdWUgPSB2YWx1ZS5ndGU7XG4gICAgICB0aGlzLm1heFZhbHVlID0gdmFsdWUubHRlO1xuICAgICAgdGhpcy4kLm1pblZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLm1pblZhbHVlO1xuICAgICAgdGhpcy4kLm1heFZhbHVlSW5wdXQudmFsdWUgPSB0aGlzLm1heFZhbHVlO1xuICAgICAgdGhpcy4kLnVua25vd24uY2hlY2tlZCA9IHZhbHVlLmluY2x1ZGVOdWxsID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeVNlbGVjdGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNGaWx0ZXJBcHBsaWVkXG4gICAqIEBkZXNjcmlwdGlvbiBpcyB0aGVyZSBjdXJyZW5sdHkgYSBmaWx0ZXIgc2V0XG4gICAqIFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgX2lzRmlsdGVyQXBwbGllZCgpIHtcbiAgICBpZiggdGhpcy5taW5WYWx1ZSA9PT0gdGhpcy5hYnNNaW5WYWx1ZSAmJlxuICAgICAgdGhpcy5tYXhWYWx1ZSA9PT0gdGhpcy5hYnNNYXhWYWx1ZSAmJlxuICAgICAgdGhpcy4kLnVua25vd24uY2hlY2tlZCA9PT0gdHJ1ZSApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfbm90aWZ5U2VsZWN0ZWRcbiAgICogQGRlc2NyaXB0aW9uIG5vdGlmeSBwYXJlbnQgb2Ygc2VsZWN0ZWQvdW5zZWxlY3RlZCBmaWx0ZXJcbiAgICovXG4gIF9ub3RpZnlTZWxlY3RlZCgpIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBsZXQga2V5ID0gJyc7XG5cbiAgICBpZiggdGhpcy5taW5WYWx1ZSAhPT0gdGhpcy5hYnNNaW5WYWx1ZSB8fCBcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSAhPT0gdGhpcy5hYnNNYXhWYWx1ZSB8fFxuICAgICAgICAhdGhpcy4kLnVua25vd24uY2hlY2tlZCApIHtcbiAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiggc2VsZWN0ZWQgKSB7XG4gICAgICBrZXkgPSB0aGlzLm1pblZhbHVlKycgdG8gJyt0aGlzLm1heFZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudChgc2V0LXNlbGVjdGVkYCwge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICBsYWJlbDoga2V5XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zaG93XG4gICAqIEBkZXNjcmlwdGlvbiBub3RpZnkgcGFyZW50IHRvIGhpZGUvc2hvdyBmaWx0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hvdyBzaG91bGQgdGhlIHBhcmVudCBoaWRlIG9yIHNob3cgZmlsdGVyXG4gICAqL1xuICBfc2hvdyhzaG93KSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KCd1cGRhdGUtdmlzaWJpbGl0eScsIHtcbiAgICAgICAgZGV0YWlsOiB7c2hvd31cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlc2V0XG4gICAqIEBkZXNjcmlwdGlvbiByZXNldCByYW5nZSBmaWx0ZXJcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLmFic01pblZhbHVlO1xuICAgIHRoaXMubWF4VmFsdWUgPSB0aGlzLmFic01heFZhbHVlO1xuICAgIHRoaXMuJC51bmtub3duLmNoZWNrZWQgPSB0cnVlO1xuICAgIFxuICAgIHRoaXMuX29uUmFuZ2VOdWxsQ2hhbmdlKCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIG9uUGFyZW50RmlsdGVyQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gY2FsbGVkIGZyb20gcGFyZW50IHRvZ2dsZSBwYW5lbCB3aGVuIHNlbGVjdGVkIGZpbHRlclxuICAgKiBpcyBjbGlja2VkLiAgUmVzZXQgc2xpZGVyXG4gICAqL1xuICBvblBhcmVudEZpbHRlckNsaWNrZWQoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtcmFuZ2UtZmlsdGVyJywgQXBwUmFuZ2VGaWx0ZXIpOyIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2FwcC10b3AtYWN0aXZlLWZpbHRlcnMudHBsLmpzXCJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9jb25maWdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBUb3BBY3RpdmVGaWx0ZXJzIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVGaWx0ZXJzIDoge3R5cGUgOiBBcnJheX1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmZpbHRlcnMgPSB7fTtcbiAgICB0aGlzLmFjdGl2ZUZpbHRlcnMgPSBbXTtcblxuICAgIHRoaXMuX2luamVjdE1vZGVsKCdGaWx0ZXJzTW9kZWwnLCAnUmVjb3JkTW9kZWwnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkZpbHRlckJ1Y2tldHNVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRoZSBGaWx0ZXJzTW9kZWwgZmlsdGVyLWJ1Y2tldHMtdXBkYXRlIGV2ZW50XG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcbiAgICovXG4gIF9vblJlY29yZFNlYXJjaFVwZGF0ZShlKSB7XG4gICAgaWYoIGUuc3RhdGUgIT09ICdsb2FkZWQnICkgcmV0dXJuO1xuXG4gICAgbGV0IGFjdGl2ZSA9IFtdO1xuICAgIHRoaXMuY3VycmVudEZpbHRlcnMgPSBlLnNlYXJjaERvY3VtZW50LmZpbHRlcnMgfHwge307XG4gICAgXG4gICAgZm9yKCBsZXQga2V5IGluIHRoaXMuY3VycmVudEZpbHRlcnMgKSB7XG4gICAgICBsZXQgZmlsdGVyID0gdGhpcy5jdXJyZW50RmlsdGVyc1trZXldO1xuXG4gICAgICBpZiggZmlsdGVyLnR5cGUgPT09ICdrZXl3b3JkJyApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RmlsdGVyc1trZXldLnZhbHVlLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgIGFjdGl2ZS5wdXNoKHtcbiAgICAgICAgICAgIGJ1Y2tldCA6IGtleSxcbiAgICAgICAgICAgIHR5cGUgOiAna2V5d29yZCcsXG4gICAgICAgICAgICB2YWx1ZSA6IHZhbHVlLFxuICAgICAgICAgICAgbGFiZWwgOiAgdGhpcy5fZ2V0TGFiZWwoa2V5LCB2YWx1ZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYoIGZpbHRlci50eXBlID09PSAncmFuZ2UnICkge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmN1cnJlbnRGaWx0ZXJzW2tleV0udmFsdWU7XG4gICAgICAgIGFjdGl2ZS5wdXNoKHtcbiAgICAgICAgICBidWNrZXQgOiBrZXksXG4gICAgICAgICAgdHlwZSA6ICdyYW5nZScsXG4gICAgICAgICAgdmFsdWUgOiB2YWx1ZSxcbiAgICAgICAgICBsYWJlbCA6ICB2YWx1ZS5ndGUrJyB0byAnK3ZhbHVlLmx0ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmUuc29ydCgoYSwgYikgPT4gYS5sYWJlbC50b0xvd2VyQ2FzZSgpIDwgYi5sYWJlbC50b0xvd2VyQ2FzZSgpID8gLTEgOiAxKTtcblxuICAgIHRoaXMuYWN0aXZlRmlsdGVycyA9IGFjdGl2ZTtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBhY3RpdmUubGVuZ3RoID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgfVxuXG4gIF9nZXRMYWJlbChidWNrZXQsIGxhYmVsKSB7XG4gICAgbGV0IGNvbmYgPSBjb25maWcuZWxhc3RpY1NlYXJjaC5mYWNldHNbYnVja2V0XSB8fCB7fTtcbiAgICBpZiggIWNvbmYudmFsdWVNYXAgKSByZXR1cm4gbGFiZWw7XG4gICAgaWYoIHR5cGVvZiBjb25mLnZhbHVlTWFwID09PSAnb2JqZWN0JyApIHtcbiAgICAgIHJldHVybiBjb25mLnZhbHVlTWFwW2xhYmVsXSB8fCBsYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmYudmFsdWVNYXAobGFiZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uUmVtb3ZlRmlsdGVyQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gcmVtb3ZlIGZpbHRlciBidXR0b24gY2xpY2sgZXZlbnRcbiAgICogXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZSBcbiAgICovXG4gIF9vblJlbW92ZUZpbHRlckNsaWNrZWQoZSkge1xuICAgIGxldCBpdGVtID0gdGhpcy5hY3RpdmVGaWx0ZXJzLnNwbGljZShwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleCcpKSwgMSlbMF07XG5cbiAgICBsZXQgc2VhcmNoRG9jID0gdGhpcy5SZWNvcmRNb2RlbC5nZXRDdXJyZW50U2VhcmNoRG9jdW1lbnQoKTtcbiAgICB0aGlzLlJlY29yZE1vZGVsLnNldFBhZ2luZyhzZWFyY2hEb2MsIDApO1xuICAgIGlmKCBpdGVtLnR5cGUgPT09ICdrZXl3b3JkJykge1xuICAgICAgdGhpcy5SZWNvcmRNb2RlbC5yZW1vdmVLZXl3b3JkRmlsdGVyKHNlYXJjaERvYywgaXRlbS5idWNrZXQsIGl0ZW0udmFsdWUpO1xuICAgIH0gZWxzZSBpZiggaXRlbS50eXBlID09PSAncmFuZ2UnICkge1xuICAgICAgdGhpcy5SZWNvcmRNb2RlbC5yZW1vdmVSYW5nZUZpbHRlcihzZWFyY2hEb2MsIGl0ZW0uYnVja2V0KTtcbiAgICB9XG4gICAgdGhpcy5SZWNvcmRNb2RlbC5zZXRTZWFyY2hMb2NhdGlvbihzZWFyY2hEb2MpO1xuXG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC10b3AtYWN0aXZlLWZpbHRlcnMnLCBBcHBUb3BBY3RpdmVGaWx0ZXJzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXNtKTtcbiAgfVxuXG4gIC5sYXlvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgaXJvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgLnJtLWJ0biB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuPC9zdHlsZT4gIFxuXG48ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPkFjdGl2ZSBGaWx0ZXJzOjwvZGl2PlxuICAke3RoaXMuYWN0aXZlRmlsdGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiBodG1sYFxuICAgIDxkaXYgQGNsaWNrPVwiJHt0aGlzLl9vblJlbW92ZUZpbHRlckNsaWNrZWR9XCIgY2xhc3M9XCJybS1idG5cIiBpbmRleD1cIiR7aW5kZXh9XCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmluLWljb25zOmNsb3NlXCI+PC9pcm9uLWljb24+ICR7aXRlbS5sYWJlbH1cbiAgICA8L2Rpdj5cbiAgYCl9XG48L2Rpdj5cblxuYDt9IiwiaW1wb3J0IEFwcFNlYXJjaFJlc3VsdCBmcm9tIFwiLi9hcHAtc2VhcmNoLXJlc3VsdFwiXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLXNlYXJjaC1ncmlkLXJlc3VsdC5odG1sXCJcblxuZXhwb3J0IGNsYXNzIEFwcFNlYXJjaEdyaWRSZXN1bHQgZXh0ZW5kcyBBcHBTZWFyY2hSZXN1bHQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXNlYXJjaC1ncmlkLXJlc3VsdCcsIEFwcFNlYXJjaEdyaWRSZXN1bHQpOyIsImltcG9ydCBBcHBTZWFyY2hSZXN1bHQgZnJvbSBcIi4vYXBwLXNlYXJjaC1yZXN1bHRcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1zZWFyY2gtbGlzdC1yZXN1bHQuaHRtbFwiXG5cbmV4cG9ydCBjbGFzcyBBcHBTZWFyY2hMaXN0UmVzdWx0IGV4dGVuZHMgQXBwU2VhcmNoUmVzdWx0IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1zZWFyY2gtbGlzdC1yZXN1bHQnLCBBcHBTZWFyY2hMaXN0UmVzdWx0KTsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1zZWFyY2gtcmVzdWx0LWNyZWF0b3IuaHRtbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFNlYXJjaFJlc3VsdENyZWF0b3IgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRvciA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiBudWxsLFxuICAgICAgICBvYnNlcnZlciA6ICdfb25DcmVhdG9yVXBkYXRlJ1xuICAgICAgfSxcbiAgICAgIHRleHRMYWJlbCA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIGxpbmsgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uTGFiZWxVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGZpcmVkIHdoZW4gbGFiZWwgdXBkYXRlcy4gIFRoaXMgZWxlbWVudCBkZXRlY3RzIGlmIHRoZSBjcmVhdG9yXG4gICAqIGlzIGFuIGV4dGVybmFsIGxpbmsgb3IgYSBzdHJpbmcgbGFiZWwuICBUaGVuIHJlbmRlcnMgYSBsaW5rXG4gICAqL1xuICBfb25DcmVhdG9yVXBkYXRlKCkge1xuICAgIGlmKCAhdGhpcy5jcmVhdG9yICkgcmV0dXJuO1xuXG4gICAgaWYoIHRoaXMuY3JlYXRvclsnQGlkJ10gKSB0aGlzLmxpbmsgPSB0cnVlO1xuICAgIGVsc2UgdGhpcy5saW5rID0gZmFsc2U7XG5cbiAgICBpZiggdGhpcy5jcmVhdG9yLm5hbWUgKSB0aGlzLnRleHRMYWJlbCA9IHRoaXMuY3JlYXRvci5uYW1lO1xuICAgIGVsc2UgdGhpcy50ZXh0TGFiZWwgPSB0aGlzLmNyZWF0b3JbJ0BpZCddO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ2xpY2tcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGFuY2hvciB0YWcgY2xpY2sgZXZlbnQuIFN0b3AgZXZlbnQgZnJvbSBidWJibGluZztcbiAgICovXG4gIF9vbkNsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXNlYXJjaC1yZXN1bHQtY3JlYXRvcicsIEFwcFNlYXJjaFJlc3VsdENyZWF0b3IpOyIsImltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi91dGlsc1wiXG5pbXBvcnQgXCIuL2FwcC1zZWFyY2gtcmVzdWx0LWNyZWF0b3JcIlxuXG5pbXBvcnQgQ29sbGVjdGlvbkludGVyZmFjZSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9Db2xsZWN0aW9uSW50ZXJmYWNlXCJcbmltcG9ydCBBcHBTdGF0ZUludGVyZmFjZSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9BcHBTdGF0ZUludGVyZmFjZVwiXG5pbXBvcnQgTWVkaWFJbnRlcmZhY2UgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvTWVkaWFJbnRlcmZhY2VcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBTZWFyY2hSZXN1bHQgZXh0ZW5kcyBNaXhpbihQb2x5bWVyRWxlbWVudClcbiAgLndpdGgoRXZlbnRJbnRlcmZhY2UsIEFwcFN0YXRlSW50ZXJmYWNlLCBDb2xsZWN0aW9uSW50ZXJmYWNlLCBNZWRpYUludGVyZmFjZSkge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YSA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiB7fSxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX29uRGF0YVVwZGF0ZSdcbiAgICAgIH0sXG4gICAgICBmZXRjaElkIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgaXNWaWRlbzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBpc0ltYWdlIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGltZ1VybCA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIGNvbGxlY3Rpb25OYW1lIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgbmFtZSA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIGRlc2NyaXB0aW9uIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgY3JlYXRvciA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IFtdXG4gICAgICB9LFxuICAgICAgeWVhciA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIHRhYmluZGV4IDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDAsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZSA6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5iYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sKycvLycrd2luZG93LmxvY2F0aW9uLmhvc3QrJy9mY3JlcG8vcmVzdCc7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuX29uQ2xpY2soKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgaWYoIGUud2hpY2ggIT09IDEzICkgcmV0dXJuO1xuICAgICAgdGhpcy5fb25DbGljaygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ2xpY2tcbiAgICogQGRlc2NyaXB0aW9uIEZpcmVkIHdoZW4gdGhpcyBlbGVtZW50IGlzIGNsaWNrZWRcbiAgICovXG4gIF9vbkNsaWNrKCkge1xuICAgIHRoaXMuX3NldFdpbmRvd0xvY2F0aW9uKHRoaXMuZmV0Y2hJZCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25EYXRhVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBmaXJlZCB3aGVuIGBkYXRhYCBwcm9wZXJ0eSB1cGRhdGVzLiAgU2V0IFVJIHByb3BlcnRpZXMuXG4gICAqL1xuICBhc3luYyBfb25EYXRhVXBkYXRlKCkge1xuICAgIGxldCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kYXRhKTtcblxuICAgIGlmKCAhZGF0YVsnQGlkJ10gKSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5mZXRjaElkID0gZGF0YVsnQGlkJ107XG5cbiAgICB0aGlzLm5hbWUgPSB0aGlzLmRhdGEubmFtZSB8fCAodGhpcy5kYXRhLmlkZW50aWZpZXIgPyB0aGlzLmRhdGEuaWRlbnRpZmllclsnQGlkJ10gOiAnJyk7XG5cbiAgICBsZXQgdmlkZW8gPSB0aGlzLmRhdGEudmlkZW87XG4gICAgaWYgKCB2aWRlbyApIHtcbiAgICAgIHRoaXMuaXNWaWRlbyA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIGxldCBpbWdFbGUgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI2ltZycpO1xuICAgIGlmKCBpbWdFbGUgKSBpbWdFbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGxldCBpbWdXaWR0aCA9IDI1MDsgICAgXG4gICAgbGV0IGltZyA9IHRoaXMuZGF0YS5pbWFnZTsgIFxuICAgIGlmKCBpbWcgKSB7XG4gICAgICBsZXQgcmF0aW8gPSBpbWcuaGVpZ2h0IC8gaW1nLndpZHRoO1xuICAgICAgdGhpcy5pbWdIZWlnaHQgPSBNYXRoLmZsb29yKGltZ1dpZHRoICogcmF0aW8pO1xuICAgICAgdGhpcy5pbWdVcmwgPSB0aGlzLl9nZXRJbWdVcmwoaW1nLnVybCwgbnVsbCwgdGhpcy5pbWdIZWlnaHQpO1xuXG4gICAgICBpZiggaW1nLmNvbG9yUGFsZXR0ZSApIHtcbiAgICAgICAgdGhpcy5pbWdUaHVtYmFpbCA9IGltZy5jb2xvclBhbGV0dGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmltZ1RodW1iYWlsID0gJyc7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuaXNJbWFnZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW1nVXJsID0gJyc7XG4gICAgICB0aGlzLmlzSW1hZ2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy5kYXRhLmRlc2NyaXB0aW9uIHx8ICcnO1xuICAgIGlmKCB0aGlzLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDIwMCApIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uLnN1YnN0cigwLCAyMDApKycuLi4nO1xuICAgIH1cblxuICAgIHRoaXMueWVhciA9IHV0aWxzLmdldFllYXJGcm9tRGF0ZShkYXRhLmNyZWF0ZWQpO1xuXG4gICAgaWYoIEFycmF5LmlzQXJyYXkoZGF0YS5jcmVhdG9yKSApIHtcbiAgICAgIHRoaXMuY3JlYXRvciA9IGRhdGEuY3JlYXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jcmVhdG9yID0gW2RhdGEuY3JlYXRvciB8fCAnJ107XG4gICAgfVxuXG4gICAgdGhpcy5jb2xsZWN0aW9uTmFtZSA9IHRoaXMuZGF0YS5jb2xsZWN0aW9uSWQgfHwgJyc7XG4gICAgaWYoIHRoaXMuY29sbGVjdGlvbk5hbWUgKSB7XG4gICAgICBsZXQgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMuX2dldENvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uTmFtZSk7XG4gICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbi5uYW1lO1xuICAgIH1cbiAgfVxuXG59IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCBcIkB1Y2QtbGliL2NvcmstcGFnaW5hdGlvblwiXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXItbGl0ZVwiXG5cbmltcG9ydCBcIi4vYXBwLXNlYXJjaC1ncmlkLXJlc3VsdFwiXG5pbXBvcnQgXCIuL2FwcC1zZWFyY2gtbGlzdC1yZXN1bHRcIlxuaW1wb3J0IFwiLi4vLi4vLi4vdXRpbHMvYXBwLWNvbGxlY3Rpb24tY2FyZFwiXG5pbXBvcnQgXCIuLi9maWx0ZXJpbmcvYXBwLXRvcC1hY3RpdmUtZmlsdGVyc1wiXG5pbXBvcnQgUmVjb3JkSW50ZXJmYWNlIGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL1JlY29yZEludGVyZmFjZVwiXG5pbXBvcnQgQXBwU3RhdGVJbnRlcmZhY2UgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvQXBwU3RhdGVJbnRlcmZhY2VcIlxuaW1wb3J0IENvbGxlY3Rpb25JbnRlcmZhY2UgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvQ29sbGVjdGlvbkludGVyZmFjZVwiXG5pbXBvcnQgTWVkaWFJbnRlcmZhY2UgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvTWVkaWFJbnRlcmZhY2VcIlxuXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9hcHAtc2VhcmNoLXJlc3VsdHMtcGFuZWwuaHRtbCdcblxuY29uc3QgU0VBUkNIX1JFU1VMVFNfTEFZT1VUID0gJ3NlYXJjaC1yZXN1bHRzLWxheW91dCc7XG5sZXQgaW5pdElzTGlzdExheW91dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNFQVJDSF9SRVNVTFRTX0xBWU9VVCk7XG5pZiggaW5pdElzTGlzdExheW91dCA9PT0gJ2xpc3QnICkgaW5pdElzTGlzdExheW91dCA9IHRydWVcbmVsc2UgaW5pdElzTGlzdExheW91dCA9IGZhbHNlO1xuXG5jbGFzcyBBcHBTZWFyY2hSZXN1bHRzUGFuZWwgZXh0ZW5kcyBNaXhpbihQb2x5bWVyRWxlbWVudClcbiAgICAgIC53aXRoKEV2ZW50SW50ZXJmYWNlLCBSZWNvcmRJbnRlcmZhY2UsIEFwcFN0YXRlSW50ZXJmYWNlLCBDb2xsZWN0aW9uSW50ZXJmYWNlLCBNZWRpYUludGVyZmFjZSkge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBBcnJheSBvZiBzZWFyY2ggcmVzdWx0c1xuICAgICAgICovXG4gICAgICByZXN1bHRzIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW11cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQXJyYXkgb2YgY29sbGVjdGlvbiBzZWFyY2ggcmVzdWx0c1xuICAgICAgICovXG4gICAgICBjb2xsZWN0aW9uUmVzdWx0cyA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IFtdXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIHNpemUgaW4gcHgncyBiZXR3ZWVuIGVhY2ggbWFzb25hcnkgbGF5b3V0IGNlbGxcbiAgICAgICAqL1xuICAgICAgbWFzb25yeU1hcmdpbiA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAxNVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogYXJlIHdlIGluIGxpc3Qgb3IgbWFzb25yeSBsYXlvdXRcbiAgICAgICAqL1xuICAgICAgaXNMaXN0TGF5b3V0IDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBpbml0SXNMaXN0TGF5b3V0XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBVSSBkaXNwbGF5IG9mIHRvdGFsIHJlc3VsdHNcbiAgICAgICAqL1xuICAgICAgdG90YWwgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJzAnXG4gICAgICB9LFxuXG4gICAgICBudW1QZXJQYWdlIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDFcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIGN1cnJlbnRJbmRleCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAwXG4gICAgICB9LFxuXG4gICAgICBzaG93Q29sbGVjdGlvblJlc3VsdHMgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBzaG93RXJyb3IgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuICAgICAgXG4gICAgICBzaG93TG9hZGluZyA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIGVycm9yTXNnIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLy8gdG90YWwgbnVtYmVyIGZvciBwYWdpbmF0aW9uIHdpZGdldFxuICAgICAgLy8gd2UgbWFrZSBvdXQgYXQgMTAwMDBcbiAgICAgIHBhZ2luYXRpb25Ub3RhbCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgdG90YWxPdmVyTWF4V2luZG93IDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5yZXNpemVUaW1lciA9IC0xO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB0aGlzLl9yZXNpemVBc3luYygpKTtcblxuICAgIHRoaXMuRXZlbnRCdXMoKS5vbignc2hvdy1jb2xsZWN0aW9uLXNlYXJjaC1yZXN1bHRzJywgc2hvdyA9PiB0aGlzLl91cGRhdGVDb2xsZWN0aW9uUmVzdWx0c1Zpc2liaWxpdHkoc2hvdykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQXBwU3RhdGVVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGZyb20gQXBwU3RhdGVJbnRlcmZhY2UsIGNhbGxlZCB3aGVuIGFwcCBzdGF0ZSB1cGRhdGVzXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcbiAgICovXG4gIF9vbkFwcFN0YXRlVXBkYXRlKGUpIHtcbiAgICBpZiggZS5sb2NhdGlvbi5wYWdlICE9PSAnc2VhcmNoJykgcmV0dXJuO1xuICAgIHRoaXMuX3Jlc2l6ZUFzeW5jKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCByZW5kZXJcbiAgICogQGRlc2NyaXB0aW9uIHJlbmRlciByZXN1bHRzIG9mIHNlYXJjaCBxdWVyeVxuICAgKiBcbiAgICogQHBhcmFtIHtBcnJheX0gcmVzdWx0cyByZXN1bHRzIHRvIHJlbmRlclxuICAgKi9cbiAgcmVuZGVyKHJlc3VsdHMsIHRvdGFsLCBudW1QZXJQYWdlLCBjdXJyZW50SW5kZXgpIHtcbiAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICB0aGlzLnNob3dIZWFkZXJGb290ZXIgPSB0cnVlO1xuICAgIHRoaXMuc2hvd0Vycm9yID0gZmFsc2U7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5zaG93TG9hZGluZ1RpbWVyKTtcbiAgICB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy50b3RhbCA9IHRoaXMubnVtYmVyV2l0aENvbW1hcyh0b3RhbCk7XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBoYXZlIGEgcGFnZSB0aGUgcmV0dXJucyByZXN1bHRzID4gMTAwMDBrXG4gICAgICBsZXQgdCA9IE1hdGguZmxvb3IoKDEwMDAwLW51bVBlclBhZ2UpIC8gbnVtUGVyUGFnZSkgKiBudW1QZXJQYWdlO1xuICAgICAgaWYoIHRvdGFsID4gdCApIHtcbiAgICAgICAgdG90YWwgPSB0O1xuICAgICAgICB0aGlzLnRvdGFsT3Zlck1heFdpbmRvdyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvdGFsT3Zlck1heFdpbmRvdyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzO1xuICAgICAgdGhpcy5wYWdpbmF0aW9uVG90YWwgPSB0b3RhbDtcbiAgICAgIHRoaXMubnVtUGVyUGFnZSA9IG51bVBlclBhZ2U7XG4gICAgICB0aGlzLiQubnVtUGVyUGFnZS52YWx1ZSA9IG51bVBlclBhZ2UrJyc7XG4gICAgICB0aGlzLiQubnVtUGVyUGFnZU0udmFsdWUgPSBudW1QZXJQYWdlKycnO1xuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBjdXJyZW50SW5kZXg7XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLl9yZXNpemUoKSk7XG4gICAgfSk7XG4gIH1cblxuICBudW1iZXJXaXRoQ29tbWFzKHgpIHtcbiAgICByZXR1cm4geC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgfVxuXG4gIG9uTG9hZGluZygpIHtcbiAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICAvLyB0aGlzLnNob3dIZWFkZXJGb290ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dDb2xsZWN0aW9uUmVzdWx0cyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5zaG93TG9hZGluZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgb25FcnJvcihzdGF0ZSkge1xuICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgIC8vIHRoaXMuc2hvd0hlYWRlckZvb3RlciA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0NvbGxlY3Rpb25SZXN1bHRzID0gZmFsc2U7XG4gICAgdGhpcy5zaG93RXJyb3IgPSB0cnVlO1xuICAgXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc2hvd0xvYWRpbmdUaW1lcik7XG4gICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYoIHN0YXRlLnNob3dFcnJvck1lc3NhZ2UgKSB7XG4gICAgICB0aGlzLmVycm9yTXNnID0gc3RhdGUuZXJyb3IubWVzc2FnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvck1zZyA9ICdPb29wcy4gU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCBzZWFyY2ghJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25MYXlvdXRUb2dnbGVcbiAgICogQGRlc2NyaXB0aW9uIFRvZ2dsZSBiZXR3ZWVuIG1hc29ucnkgYW5kIGxpc3QgbGF5b3V0XG4gICAqIFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIEhUTUwgY2xpY2sgZXZlbnRcbiAgICovXG4gIF9vbkxheW91dFRvZ2dsZShlKSB7XG4gICAgbGV0IHR5cGUgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG4gICAgaWYoIHR5cGUgPT09ICdtYXNvbnJ5JyApIHtcbiAgICAgIHRoaXMuaXNMaXN0TGF5b3V0ID0gZmFsc2U7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTRUFSQ0hfUkVTVUxUU19MQVlPVVQsICdtYXNvbnJ5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNMaXN0TGF5b3V0ID0gdHJ1ZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNFQVJDSF9SRVNVTFRTX0xBWU9VVCwgJ2xpc3QnKTtcbiAgICB9XG5cbiAgICBpZiggIXRoaXMuaXNMaXN0TGF5b3V0ICkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuX3Jlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVzaXplQXN5bmNcbiAgICogQGRlc2NyaXB0aW9uIGJ1ZmZlciByZXNpemUgbWFzb25hcnkgbGF5b3V0IGNhbGxcbiAgICovXG4gIF9yZXNpemVBc3luYygpIHtcbiAgICBpZiggdGhpcy5yZXNpemVUaW1lciAhPT0gLTEgKSBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG4gICAgdGhpcy5yZXNpemVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNpemVUaW1lciA9IC0xO1xuICAgICAgdGhpcy5fcmVzaXplKCk7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3Jlc2l6ZVxuICAgKiBAZGVzY3JpcHRpb24gcmVzaXplIG1hc29uYXJ5IGxheW91dFxuICAgKi9cbiAgX3Jlc2l6ZSgpIHtcbiAgICBpZiggdGhpcy5pc0xpc3RMYXlvdXQgKSByZXR1cm47XG5cbiAgICBsZXQgZmlyc3REaXYgPSB0aGlzLiQubGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJ2FwcC1zZWFyY2gtZ3JpZC1yZXN1bHQnKTtcbiAgICBpZiggIWZpcnN0RGl2ICkgcmV0dXJuO1xuXG4gICAgbGV0IGV3ID0gdGhpcy5vZmZzZXRXaWR0aDtcbiAgICBsZXQgdyA9IGZpcnN0RGl2Lm9mZnNldFdpZHRoICsgdGhpcy5tYXNvbnJ5TWFyZ2luO1xuXG4gICAgbGV0IG51bUNvbHMgPSBNYXRoLm1heChNYXRoLmZsb29yKGV3IC8gdyksIDEpO1xuICAgIC8vIHRoaXMgbWFrZXMgc3VyZSBjb2x1bW5zIGFyZSBjZW50ZXJlZFxuICAgIGxldCBsZWZ0T2Zmc2V0ID0gTWF0aC5mbG9vcigoZXcgLSBudW1Db2xzICogdykgLyAyKTtcblxuICAgIGxldCBjb2xIZWlnaHRzID0gW107XG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBudW1Db2xzOyBpKysgKSBjb2xIZWlnaHRzLnB1c2goMCk7XG5cbiAgICBsZXQgZWxlcyA9IHRoaXMuJC5sYXlvdXQucXVlcnlTZWxlY3RvckFsbCgnYXBwLXNlYXJjaC1ncmlkLXJlc3VsdCcpO1xuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgZWxlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGxldCBjb2wgPSB0aGlzLl9maW5kTWluQ29sKGNvbEhlaWdodHMpO1xuICAgICAgbGV0IGNoZWlnaHQgPSBjb2xIZWlnaHRzW2NvbF07XG5cbiAgICAgIGVsZXNbaV0uc3R5bGUubGVmdCA9IChsZWZ0T2Zmc2V0ICsgY29sICogdykgKyAncHgnO1xuICAgICAgZWxlc1tpXS5zdHlsZS50b3AgPSBjb2xIZWlnaHRzW2NvbF0gKyAncHgnO1xuICAgICAgLy8gZWxlc1tpXS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgICBjb2xIZWlnaHRzW2NvbF0gKz0gZWxlc1tpXS5vZmZzZXRIZWlnaHQgKyB0aGlzLm1hc29ucnlNYXJnaW47XG4gICAgfVxuXG4gICAgbGV0IG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIGNvbEhlaWdodHMpO1xuICAgIHRoaXMuJC5sYXlvdXQuc3R5bGUuaGVpZ2h0ID0gbWF4SGVpZ2h0KydweCc7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZmluZE1pbkNvbFxuICAgKiBAZGVzY3JpcHRpb24gZ2l2ZW4gYW4gYXJyYXkgb2YgY29sdW1uIGhlaWdodHMsIHJldHVyblxuICAgKiB0aGUgY29sdW1uIGluZGV4IHRoYXQgaGFzIHRoZSBtaW4gaGVpZ2h0XG4gICAqIFxuICAgKiBAcGFyYW0ge0FycmF5fSBjb2xIZWlnaHRzIGFycmF5IG9mIGhlaWdodHNcbiAgICovXG4gIF9maW5kTWluQ29sKGNvbEhlaWdodHMpIHtcbiAgICBsZXQgbWluID0gY29sSGVpZ2h0c1swXTtcbiAgICBsZXQgbWluQ29sID0gMDtcbiAgICBmb3IoIHZhciBpID0gMTsgaSA8IGNvbEhlaWdodHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICBpZiggbWluID4gY29sSGVpZ2h0c1tpXSApIHtcbiAgICAgICAgbWluID0gY29sSGVpZ2h0c1tpXTtcbiAgICAgICAgbWluQ29sID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1pbkNvbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblRvZ2dsZURyYXdlclxuICAgKiBAZGVzY3JpcHRpb24gZmlyZSBhbiBldmVudCBmb3IgYXBwLXNlYXJjaCBpbmRpY2F0aW5nIHRoZSBkcmF3ZXIgdG9nZ2xlIGhhc1xuICAgKiBiZWVuIGNsaWNrZWQuXG4gICAqL1xuICBfb25Ub2dnbGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9nZ2xlLWRyYXdlcicpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblBhZ2VTaXplQ2hhbmdlXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBzZWxlY3QgYm94IGNoYW5nZSBldmVudCwgZGlzcGF0Y2ggZXZlbnQgdG8gcGFyZW50XG4gICAqIGFsZXJ0aW5nIG5ldyBwYWdlIHNpemVcbiAgICovXG4gIF9vblBhZ2VTaXplQ2hhbmdlKGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwYWdlLXNpemUtY2hhbmdlJywge1xuICAgICAgZGV0YWlsIDogcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblBhZ2luYXRpb25OYXZcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIHNjb3JrLXBhZ2luYXRpb24gYG5hdmAgZXZlbnQsIGRpc3BhdGNoIGV2ZW50IHRvIHBhcmVudFxuICAgKiBhbGVydGluZyB0byBuZXcgcGFnZSBcbiAgICovXG4gIF9vblBhZ2luYXRpb25OYXYoZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3BhZ2UtY2hhbmdlJywge1xuICAgICAgZGV0YWlsIDogZS5kZXRhaWxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfdXBkYXRlQ29sbGVjdGlvblJlc3VsdHNWaXNpYmlsaXR5XG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBjb2xsZWN0aW9uIHZpc2liaWxpdHkgdXBkYXRlcyAoc2VlIGNvbnRydWN0b3IpLiAgRmlyZWRcbiAgICogdmlhIENvbGxlY3Rpb25Nb2RlbCB3aGljaCBkZWNpZGVzIGlmIGEgY29sbGVjdGlvbiBzZWFyY2ggc2hvdWxkIGJlIHByZWZvcm1lZC5cbiAgICovXG4gIF91cGRhdGVDb2xsZWN0aW9uUmVzdWx0c1Zpc2liaWxpdHkoc2hvdykge1xuICAgIHRoaXMuc2hvd0NvbGxlY3Rpb25SZXN1bHRzID0gc2hvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlYXJjaENvbGxlY3Rpb25VcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGZyb20gQ29sbGVjdGlvbkludGVyZmFjZSwgY2FsbGVkIHdoZW4gYSBjb2xsZWN0aW9uIHNlYXJjaCBzdGF0ZVxuICAgKiBpcyB1cGRhdGVkLlxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgXG4gICAqL1xuICBfb25Db2xsZWN0aW9uU2VhcmNoVXBkYXRlKGUpIHtcbiAgICBpZiggZS5zdGF0ZSAhPT0gJ2xvYWRlZCcgKSByZXR1cm47XG4gICAgdGhpcy5jb2xsZWN0aW9uUmVzdWx0cyA9IGUucGF5bG9hZC5yZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ29sbGVjdGlvbkNsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGFwcC1jb2xsZWN0aW9uLWNhcmQgY2xpY2sgZXZlbnRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIGNsaWNrfGtleXVwIGV2ZW50XG4gICAqL1xuICBfb25Db2xsZWN0aW9uQ2xpY2tlZChlKSB7XG4gICAgaWYoIGUudHlwZSA9PT0gJ2tleXVwJyAmJiBlLndoaWNoICE9PSAxMyApIHJldHVybjtcbiAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuY29sbGVjdGlvblsnQGlkJ11cblxuICAgIGxldCBzZWFyY2hEb2MgPSB0aGlzLl9nZXRFbXB0eVNlYXJjaERvY3VtZW50KCk7XG4gICAgdGhpcy5fc2V0S2V5d29yZEZpbHRlcihzZWFyY2hEb2MsICdpc1BhcnRPZi5AaWQnLCBpZCk7XG4gICAgdGhpcy5SZWNvcmRNb2RlbC5zZXRTZWFyY2hMb2NhdGlvbihzZWFyY2hEb2MpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtc2VhcmNoLXJlc3VsdHMtcGFuZWwnLCBBcHBTZWFyY2hSZXN1bHRzUGFuZWwpOyIsImltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1jb2xsZWN0aW9uLWNhcmQuaHRtbFwiO1xuaW1wb3J0IGlvTG9hZGVyIGZyb20gXCIuLi8uLi9saWIvdXRpbHMvaW50ZXJzZWN0aW9uLW9ic2VydmVyLWxvYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb2xsZWN0aW9uQ2FyZCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xsZWN0aW9uIDoge1xuICAgICAgICB0eXBlIDogT2JqZWN0LFxuICAgICAgICB2YWx1ZSA6ICgpID0+ICh7fSksXG4gICAgICAgIG9ic2VydmVyIDogJ19vbkNvbGxlY3Rpb25DaGFuZ2UnXG4gICAgICB9LFxuICAgICAgdGFiaW5kZXggOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogMCxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlIDogdHJ1ZVxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNob3duSW5WaWV3cG9ydCA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkgeyAgICBcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICggdGhpcy5jb2xsZWN0aW9uLnRodW1ibmFpbFVybCA9PT0gJy9pbWFnZXMvbG9nb3MvbG9nby13aGl0ZS01MTIucG5nJyApIHtcbiAgICAgIGxldCBjYXJkcyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nJylbMF07XG4gICAgICBjYXJkcy5jbGFzc05hbWUgKz0gJyBkZWZhdWx0SW1hZ2UnO1xuICAgIH1cblxuICAgIGlmKCAhdGhpcy5vYnNlcnZlciApIHtcbiAgICAgIGF3YWl0IGlvTG9hZGVyLmxvYWQoKTtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAgIGUgPT4gdGhpcy5fb25WaWV3cG9ydEludGVyc2VjdGlvbihlKSwgXG4gICAgICAgIHtcbiAgICAgICAgICByb290TWFyZ2luOiAnMTBweCcsIFxuICAgICAgICAgIHRocmVzaG9sZDogMFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuaW1hZ2VMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcyk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9XG5cbiAgX29uQ29sbGVjdGlvbkNoYW5nZSgpIHtcbiAgICBpZiggIXRoaXMuc2hvd25JblZpZXdwb3J0ICkgcmV0dXJuO1xuICAgIHRoaXMuX3NldEJhY2tncm91bmRJbWFnZSgpO1xuICB9XG5cbiAgX29uVmlld3BvcnRJbnRlcnNlY3Rpb24oZSkge1xuICAgIGlmKCBlLmxlbmd0aCA9PT0gMCApIHJldHVybjtcbiAgICBlID0gZVswXTtcbiAgICBcbiAgICBpZiggdGhpcy5zaG93bkluVmlld3BvcnQgfHwgIWUuaXNJbnRlcnNlY3RpbmcgKSByZXR1cm47XG4gICAgdGhpcy5zaG93bkluVmlld3BvcnQgPSB0cnVlO1xuXG4gICAgdGhpcy5fc2V0QmFja2dyb3VuZEltYWdlKCk7XG4gIH1cblxuICBfc2V0QmFja2dyb3VuZEltYWdlKCkge1xuICAgIHRoaXMuJC5pbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt0aGlzLmNvbGxlY3Rpb24udGh1bWJuYWlsVXJsfScpYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1jb2xsZWN0aW9uLWNhcmQnLCBBcHBDb2xsZWN0aW9uQ2FyZCk7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtcmFuZ2Utc2xpZGVyLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBSYW5nZVNsaWRlciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBhYnNvbHV0ZSBtaW4vbWF4IHZhbHVlcyBmb3Igc2xpZGVyXG4gICAgICBhYnNNaW5WYWx1ZSA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAwLFxuICAgICAgICBvYnNlcnZlciA6ICdfcmVuZGVyQXN5bmMnXG4gICAgICB9LFxuICAgICAgYWJzTWF4VmFsdWUgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogMTAwLFxuICAgICAgICBvYnNlcnZlciA6ICdfcmVuZGVyQXN5bmMnXG4gICAgICB9LFxuXG4gICAgICAvLyBjdXJyZW50IG1pbi9tYXggdmFsdWVzIGZvciBzbGlkZXIgKHdoZXJlIHRoZSBidG5zIGFyZSlcbiAgICAgIG1pblZhbHVlIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDEwLFxuICAgICAgICBvYnNlcnZlciA6ICdfcmVuZGVyQXN5bmMnXG4gICAgICB9LFxuICAgICAgbWF4VmFsdWUgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogOTAsXG4gICAgICAgIG9ic2VydmVyIDogJ19yZW5kZXJBc3luYydcbiAgICAgIH0sXG5cbiAgICAgIC8vIGxhYmVscyBmb3Igc2xpZGUgYnRuc1xuICAgICAgbWluVmFsdWVMYWJlbCA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIG1heFZhbHVlTGFiZWwgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG5cbiAgICAgIC8vIGN1cnJlbnQgd2lkZ2V0IHNpemUgaW5mb1xuICAgICAgLy8gdXNlZCBzbyB3ZSBkb24ndCBoYXZlIHRvIGFzayB0aGUgRE9NIG9uIGVhY2ggcmVuZGVyXG4gICAgICB3aWR0aCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAxXG4gICAgICB9LFxuICAgICAgaGVpZ2h0IDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDFcbiAgICAgIH0sXG4gICAgICBidG5IZWlnaHQgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogMVxuICAgICAgfSxcblxuICAgICAgLy8gc3RyaW5nIHRoYXQgaW5kaWNhdGUgdHlwZSBvZiBtb3ZlXG4gICAgICBtb3ZpbmcgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG5cbiAgICAgIC8vIGRpZmZlcmVudCBtb3ZpbmcgZmxhZ3MgZm9yIGJpbmRpbmcgVUkgZWxlbWVudCBjbGFzc2VzXG4gICAgICBtb3ZpbmdNaW4gOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbW92aW5nTWF4IDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGlzTW92aW5nIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3dpbmRvd1Jlc2l6ZUxpc3RlbmVyID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl93aW5kb3dNb3VzZUxpc3RlbmVyID0gdGhpcy5fb25Nb3ZlU3RvcC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4gdGhpcy5fb25Nb3ZlKGUpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB0aGlzLl9vbk1vdmUoZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY29ubmVjdGVkQ2FsbGJhY2tcbiAgICogQGRlc2NyaXB0aW9uIHNldHVwIG91ciB3aW5kb3cgbW91c2UgbGlzdGVuZXJzLCBmaXJlIGZpcnN0IHJlbmRlclxuICAgKi9cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25SZXNpemUoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl93aW5kb3dSZXNpemVMaXN0ZW5lcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl93aW5kb3dNb3VzZUxpc3RlbmVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLl93aW5kb3dNb3VzZUxpc3RlbmVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl93aW5kb3dNb3VzZUxpc3RlbmVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLl93aW5kb3dNb3VzZUxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGRpc2Nvbm5lY3RlZENhbGxiYWNrXG4gICAqIEBkZXNjcmlwdGlvbiByZW1vdmUgb3VyIHdpbmRvdyBtb3VzZSBsaXN0ZW5lcnNcbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3dpbmRvd1Jlc2l6ZUxpc3RlbmVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX3dpbmRvd01vdXNlTGlzdGVuZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMuX3dpbmRvd01vdXNlTGlzdGVuZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX3dpbmRvd01vdXNlTGlzdGVuZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuX3dpbmRvd01vdXNlTGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uUmVzaXplXG4gICAqIEBkZXNjcmlwdGlvbiBjYWNoZSB0aGUgZWxlbWVudCBzaXplIHNvIHdlIGRvbid0IGhhdmUgdG8gbG9vayBpdCB1cFxuICAgKiBvbiBlYWNoIHJlbmRlciBvZiBidG4gYW5kIGxpbmUgcG9zaXRpb25zLiAgVGhlbiBmaXJlIHJlbmRlciB0byBtYWtlXG4gICAqIHN1cmUgZXZlcnl0aGluZyBpcyB2aXN1YWxseSBjb3JyZWN0LlxuICAgKi9cbiAgX29uUmVzaXplKCkge1xuICAgIHRoaXMud2lkdGggPSB0aGlzLm9mZnNldFdpZHRoIHx8IDE7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLm9mZnNldEhlaWdodDtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9mZnNldExlZnQ7XG5cbiAgICB0aGlzLmJ0bkhlaWdodCA9IHRoaXMuJC5sb3dOdW1iZXJCdG4ub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuX3JlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3ZhbHVlVG9QeFxuICAgKiBAZGVzY3JpcHRpb24gZ2l2ZW4gYSBudW1iZXIgbGluZSB2YWx1ZSwgcmV0dXJuIHB4IGxvY2F0aW9uIHJlbGF0aXZlXG4gICAqIHRvIHRoZSB3aWRnZXRcbiAgICogXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBudW1iZXIgbGluZSB2YWx1ZVxuICAgKiBcbiAgICogQHJldHVybnMge051bWJlcn0gcHggbG9jYXRpb25cbiAgICovXG4gIF92YWx1ZVRvUHgodmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlIC0gdGhpcy5hYnNNaW5WYWx1ZTtcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLmFic01heFZhbHVlIC0gdGhpcy5hYnNNaW5WYWx1ZTtcbiAgICBsZXQgdmFsUGVyUHggPSByYW5nZSAvIHRoaXMud2lkdGg7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyB2YWxQZXJQeCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcHhUb1ZhbHVlXG4gICAqIEBkZXNjcmlwdGlvbiBnaXZlbiBhIHB4IGxvY2F0aW9uLCByZXR1cm4gbnVtYmVyIGxpbmUgdmFsdWVcbiAgICogXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBweCBsb2NhdGlvblxuICAgKiBcbiAgICogQHJldHVybnMge051bWJlcn0gdmFsdWVcbiAgICovXG4gIF9weFRvVmFsdWUocHgpIHtcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLmFic01heFZhbHVlIC0gdGhpcy5hYnNNaW5WYWx1ZTtcbiAgICBsZXQgdmFsUGVyUHggPSByYW5nZSAvIHRoaXMud2lkdGg7XG4gICAgcmV0dXJuIE1hdGgucm91bmQocHggKiB2YWxQZXJQeCkgKyB0aGlzLmFic01pblZhbHVlO1xuICB9XG5cbiAgX3JlbmRlckFzeW5jKCkge1xuICAgIGlmKCB0aGlzLnJlbmRlclRpbWVyICkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVuZGVyVGltZXIpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyVGltZXIgPSAwO1xuICAgICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVuZGVyQXN5bmNcbiAgICogQGRlc2NyaXB0aW9uIHNldCB0aGUgY3VycmVudCB0b3AvbGVmdCBweCB2YWx1ZXMgZm9yIGFsbCBidG5zLFxuICAgKiBsYWJlbHMgYW5kIGxpbmVzIGJhc2VzIG9uIGN1cnJlbnQgbWluL21heCB2YWx1ZXMuXG4gICAqL1xuICBfcmVuZGVyKCkge1xuICAgIGxldCBoaCA9IHRoaXMuaGVpZ2h0ICogMC42MDtcblxuICAgIC8vIHNldCBsaW5lIGhlaWdodHNcbiAgICB0aGlzLiQubnVtYmVyTGluZS5zdHlsZS50b3AgPSBoaCsncHgnO1xuICAgIHRoaXMuJC5maWxsTGluZS5zdHlsZS50b3AgPSBoaCsncHgnO1xuXG4gICAgLy8gc2V0IGJ0biBoZWlnaHRzXG4gICAgbGV0IGhCdG5IZWlnaHQgPSB0aGlzLmJ0bkhlaWdodCAvIDI7XG4gICAgdGhpcy4kLmxvd051bWJlckJ0bi5zdHlsZS50b3AgPSAoaGggLSBoQnRuSGVpZ2h0KSArJ3B4JztcbiAgICB0aGlzLiQuaGlnaE51bWJlckJ0bi5zdHlsZS50b3AgPSAoaGggLSBoQnRuSGVpZ2h0KSArJ3B4JztcblxuICAgIHRoaXMuJC5sb3dOdW1iZXJMYWJlbC5zdHlsZS50b3AgPSAoaGggLSBoQnRuSGVpZ2h0IC0gMjIpICsncHgnO1xuICAgIHRoaXMuJC5oaWdoTnVtYmVyTGFiZWwuc3R5bGUudG9wID0gKGhoIC0gaEJ0bkhlaWdodCAtIDIyKSArJ3B4JztcblxuICAgIC8vIHNldCBidG4gbGVmdFxuICAgIGxldCBsdiA9ICggdGhpcy5taW5WYWx1ZSA8IHRoaXMuYWJzTWluVmFsdWUgKSA/IHRoaXMuYWJzTWluVmFsdWUgOiB0aGlzLm1pblZhbHVlO1xuICAgIGxldCB1diA9ICggdGhpcy5tYXhWYWx1ZSA+IHRoaXMuYWJzTWF4VmFsdWUgKSA/IHRoaXMuYWJzTWF4VmFsdWUgOiB0aGlzLm1heFZhbHVlO1xuXG4gICAgbGV0IG1pblB4VmFsdWUgPSB0aGlzLl92YWx1ZVRvUHgobHYpO1xuICAgIGxldCBtYXhQeFZhbHVlID0gdGhpcy5fdmFsdWVUb1B4KHV2KTtcblxuICAgIHRoaXMuJC5sb3dOdW1iZXJCdG4uc3R5bGUubGVmdCA9IChtaW5QeFZhbHVlIC0gaEJ0bkhlaWdodCkgICsgJ3B4JztcbiAgICB0aGlzLiQuaGlnaE51bWJlckJ0bi5zdHlsZS5sZWZ0ID0gKG1heFB4VmFsdWUgLSBoQnRuSGVpZ2h0KSArICdweCc7XG5cbiAgICB0aGlzLiQubG93TnVtYmVyTGFiZWwuc3R5bGUubGVmdCA9IChtaW5QeFZhbHVlIC0gaEJ0bkhlaWdodCkgKyAncHgnO1xuICAgIHRoaXMuJC5oaWdoTnVtYmVyTGFiZWwuc3R5bGUubGVmdCA9IChtYXhQeFZhbHVlIC0gaEJ0bkhlaWdodCkgKyAncHgnO1xuICAgIFxuICAgIHRoaXMuJC5maWxsTGluZS5zdHlsZS5sZWZ0ID0gbWluUHhWYWx1ZSArJ3B4JztcbiAgICB0aGlzLiQuZmlsbExpbmUuc3R5bGUud2lkdGggPSAobWF4UHhWYWx1ZSAtIG1pblB4VmFsdWUpICArJ3B4JztcblxuICAgIHRoaXMubWluVmFsdWVMYWJlbCA9IHRoaXMucmVuZGVyTGFiZWwodGhpcy5taW5WYWx1ZSk7XG4gICAgdGhpcy5tYXhWYWx1ZUxhYmVsID0gdGhpcy5yZW5kZXJMYWJlbCh0aGlzLm1heFZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbk1vdmVTdGFydFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gYnRucyBhbmQgY2VudGVyIGxpbmUuICBGaXJlZCB3aGVuIHRoZSB1c2VyIG1vdXNlc1xuICAgKiBkb3duIG9uIGVsZW1lbnQgaW5kaWNhdGluZyBhIG1vdmUgaXMgc3RhcnRpbmdcbiAgICogXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZSBcbiAgICovXG4gIF9vbk1vdmVTdGFydChlKSB7XG4gICAgdGhpcy5tb3ZpbmcgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdwcm9wJyk7XG4gICAgXG4gICAgaWYoIHRoaXMubW92aW5nID09PSAncmFuZ2UnICkge1xuICAgICAgdGhpcy5zdGFydFJhbmdlID0ge1xuICAgICAgICBtaW4gOiBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdCxcbiAgICAgICAgbWF4IDogZS5jdXJyZW50VGFyZ2V0Lm9mZnNldExlZnQgKyBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0V2lkdGgsXG4gICAgICAgIGxlZnQgOiAgZS5wYWdlWCAtIHRoaXMubGVmdFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xuICAgIHRoaXMubW92aW5nTWluID0gKHRoaXMubW92aW5nID09PSAnbWF4JykgPyBmYWxzZSA6IHRydWU7XG4gICAgdGhpcy5tb3ZpbmdNYXggPSAodGhpcy5tb3ZpbmcgPT09ICdtaW4nKSA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbk1vdmVcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIG1vdXNlbW92ZSBldmVudCBvbiB0aGlzIGVsZW1lbnQuICBVcGRhdGUgbWluL21heFxuICAgKiB2YWx1ZXMgYmFzZWQgb24gdHlwZSBvZiBtb3ZlIHRoYXQgaXMgaGFwcGVuaW5nIGllIG1pbiwgbWF4IG9yIHJhbmdlLiAgRG9lc1xuICAgKiBub3RoaW5nIGlmIHdlIGFyZSBub3QgbW92aW5nLlxuICAgKiBcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBlIFxuICAgKi9cbiAgX29uTW92ZShlKSB7XG4gICAgaWYoICF0aGlzLm1vdmluZyApIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cblxuICAgIC8vIGhhbmRsZSBib3RoIG1vdXNlIGFuZCB0b3VjaCBldmVudFxuICAgIGxldCBsZWZ0O1xuICAgIGlmKCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnICkge1xuICAgICAgaWYoICFlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCApIHJldHVybjtcbiAgICAgIGxlZnQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy5sZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gZS5wYWdlWCAtIHRoaXMubGVmdDtcbiAgICB9XG4gICAgXG4gICAgaWYoIHRoaXMubW92aW5nID09PSAnbWluJyApIHtcbiAgICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLl9weFRvVmFsdWUobGVmdCk7XG4gICAgfSBlbHNlIGlmKCB0aGlzLm1vdmluZyA9PT0gJ21heCcgKSB7XG4gICAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5fcHhUb1ZhbHVlKGxlZnQpO1xuICAgIH0gZWxzZSBpZiggdGhpcy5tb3ZpbmcgPT09ICdtYXgnICkge1xuICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuX3B4VG9WYWx1ZShsZWZ0KTtcbiAgICB9IGVsc2UgaWYoIHRoaXMubW92aW5nID09PSAncmFuZ2UnICkge1xuICAgICAgbGV0IGRpZmYgPSB0aGlzLnN0YXJ0UmFuZ2UubGVmdCAtIGxlZnQ7XG5cbiAgICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLl9weFRvVmFsdWUodGhpcy5zdGFydFJhbmdlLm1pbiAtIGRpZmYpO1xuICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuX3B4VG9WYWx1ZSh0aGlzLnN0YXJ0UmFuZ2UubWF4IC0gZGlmZik7XG4gICAgfVxuICAgIFxuICAgIGlmKCB0aGlzLm1pblZhbHVlIDwgdGhpcy5hYnNNaW5WYWx1ZSApIHtcbiAgICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLmFic01pblZhbHVlO1xuICAgIH1cbiAgICBpZiggdGhpcy5tYXhWYWx1ZSA+IHRoaXMuYWJzTWF4VmFsdWUgKSB7XG4gICAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5hYnNNYXhWYWx1ZTtcbiAgICB9XG5cbiAgICBpZiggdGhpcy5taW5WYWx1ZSA+IHRoaXMubWF4VmFsdWUgKSB7XG4gICAgICBpZiggdGhpcy5tb3ZpbmcgPT09ICdtaW4nICkgdGhpcy5taW5WYWx1ZSA9IHRoaXMubWF4VmFsdWU7XG4gICAgICBlbHNlIHRoaXMubWF4VmFsdWUgPSB0aGlzLm1pblZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbk1vdmVTdG9wXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBtb3VzZXVwL21vdXNlb3V0IGV2ZW50IG9uIHdpbmRvdy4gIEl0J3MgYWx3YXlzIGJlc3QgdG8gYmluZFxuICAgKiB0aGlzIHRvIHRoZSB3aW5kb3cgYXMgYSBjYXRjaCBhbGwuICBSZXNldHMgYWxsIG1vdmluZyBmbGFnc1xuICAgKi9cbiAgX29uTW92ZVN0b3AoKSB7XG4gICAgaWYoICF0aGlzLm1vdmluZyApIHJldHVybjtcblxuICAgIHRoaXMubW92aW5nID0gJyc7XG4gICAgdGhpcy5tb3ZpbmdNaW4gPSBmYWxzZTtcbiAgICB0aGlzLm1vdmluZ01heCA9IGZhbHNlO1xuICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudCgncmFuZ2UtdmFsdWUtY2hhbmdlJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBtaW4gOiB0aGlzLm1pblZhbHVlLFxuICAgICAgICAgIG1heCA6IHRoaXMubWF4VmFsdWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVuZGVyTGFiZWxcbiAgICogQGRlc2NyaXB0aW9uIHJlbmRlciB0aGUgbGFiZWwgdmFsdWUuICBPdmVycmlkZSBpZiB5b3Ugd2FudFxuICAgKiBhbnl0aGluZyBvdGhlciB0aGFuIHRoZSBudW1iZXIuXG4gICAqIFxuICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgY3VycmVudCB2YWx1ZSB0byByZW5kZXJcbiAgICogXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICByZW5kZXJMYWJlbCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXJhbmdlLXNsaWRlcicsIEFwcFJhbmdlU2xpZGVyKTsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC10YWJzLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBUYWJzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvbGUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJ3RhYmxpc3QnLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGUgOiB0cnVlXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWQgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJycsXG4gICAgICAgIG5vdGlmeSA6IHRydWUsXG4gICAgICAgIG9ic2VydmVyIDogJ19yZW5kZXJUYWJzJ1xuICAgICAgfSxcbiAgICAgIHRhYnMgOiB7XG4gICAgICAgIHR5cGUgOiBBcnJheSxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiBbXSxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX3JlbmRlclRhYnMnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3JlbmRlclRhYnNcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvICd0YWJzJyBwcm9wZXJ0eSBvYnNlcnZlclxuICAgKi9cbiAgX3JlbmRlclRhYnMoKSB7XG4gICAgaWYoICF0aGlzLnRhYnMgKSByZXR1cm47XG5cbiAgICBpZiggIXRoaXMuc2VsZWN0ZWQgJiYgdGhpcy50YWJzLmxlbmd0aCApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnRhYnNbMF07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RlZCA9ICh0YWIudmFsdWUgPT09IHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5zZXQoYHRhYnMuJHtpbmRleH0uc2VsZWN0ZWRgLCBzZWxlY3RlZCk7XG4gICAgICB0aGlzLnNldChgdGFicy4ke2luZGV4fS5hcmlhU2VsZWN0ZWRgLCBzZWxlY3RlZCsnJyk7XG4gICAgICBpZiggIXRhYi5sYWJlbCApIHRoaXMuc2V0KGB0YWJzLiR7aW5kZXh9LmxhYmVsYCwgdGFiLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vblRhYkNsaWNrZWQoZSkge1xuICAgIGlmKCBlLnR5cGUgPT09ICdrZXl1cCcgJiYgZS53aGljaCAhPT0gMTMgKSByZXR1cm47XG4gICAgdGhpcy5zZWxlY3RlZCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC10YWJzJywgQXBwVGFicyk7IiwiY2xhc3MgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJMb2FkZXIge1xuICBhc3luYyBsb2FkKCkge1xuICAgIGlmKCB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgKSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICggdGhpcy5sb2FkZWQgKSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICggdGhpcy5sb2FkaW5nICkge1xuICAgICAgYXdhaXQgdGhpcy5sb2FkaW5nO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZGVkO1xuICAgIH1cblxuICAgIHRoaXMubG9hZGluZyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm9ic2VydmVyLXBvbHlmaWxsXCIgKi8gJ2ludGVyc2VjdGlvbi1vYnNlcnZlcicpO1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEludGVyc2VjdGlvbk9ic2VydmVyTG9hZGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9