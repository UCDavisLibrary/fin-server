(self["webpackChunk"] = self["webpackChunk"] || []).push([["page-record"],{

/***/ "./public/elements/pages/record/app-copy-cite.html":
/*!*********************************************************!*\
  !*** ./public/elements/pages/record/app-copy-cite.html ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<style>\n  :host {\n    display: block;\n  }\n  [hidden] {\n    display:none !important;\n  }\n  textarea {\n    width: 100%;\n    font-size: var(--fs-p);\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    /* width: 85px; */\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    font-weight: var(--fw-bold);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n  }\n\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  \n  .copyButton[active] span {\n    display: none;\n  }\n\n  #citeText {\n    padding-bottom: 10px;\n    overflow: auto;\n    word-break: break-word;\n  }\n\n  .buttons {\n    display: flex;\n  }\n</style>\n\n<div hidden$=\"[[copying]]\" id=\"citeText\"></div>\n<textarea hidden$=\"[[!copying]]\" id=\"copyArea\"></textarea>\n\n<div class=\"buttons\">\n  <div>\n    <slot></slot>\n  </div>\n  <button active$=\"[[copying]]\" on-click=\"_onCopyClicked\" class=\"copyButton\">\n    <iron-icon icon=\"content-copy\" id=\"icon\"></iron-icon>\n    <span>Copy</span>\n  </button>\n</div>\n";

/***/ }),

/***/ "./public/elements/pages/record/app-media-download.html":
/*!**************************************************************!*\
  !*** ./public/elements/pages/record/app-media-download.html ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n  }\n\n  .info {\n    margin: 10px 0;\n    font-size: var(--fs-sm);\n  }\n  \n  a {\n    display: block;\n    padding: 8px;\n    color : var(--default-primary-color);\n    background-color : var(--default-secondary-color);\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    font-weight: var(--fw-bold);\n    text-decoration: none;\n    white-space: nowrap;\n    height: 24px;\n  }\n  \n  select {\n    margin-right: 15px;\n    padding: 5px 40px 5px 10px;\n    height: 40px;\n    border: none;\n    border-radius: 0;\n   \n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n\n    background-position: right 10px center;\n    background-size: 10px 6px;\n    background-repeat: no-repeat;\n    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCA2IiB3aWR0aD0iMTBweCIgaGVpZ2h0PSI2cHgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMDAyNjU1O308L3N0eWxlPjwvZGVmcz48Zz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMCAwIDEwIDAgNSA2IDAgMCIvPjwvZz48L3N2Zz4=');\n    /* TODO: Seems to cause problem w/width of select box being too small\n    @apply --fin-search-box-select-inverse;\n    */\n    background-color: var(--medium-background-color); \n    color: var(--default-primary-color);\n  }\n\n  select.plainText {\n    padding: 0;\n    border: 0;\n    background: transparent;\n    color: black;\n  }\n\n  button {\n    white-space: nowrap;\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    font-weight: var(--fw-bold);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n    padding: 8px;\n    line-height: calc(var(--fs-p) * 1.625);\n  }\n  \n  /* for IE */\n  select::-ms-expand {\n    display: none;\n  }\n  select option {\n    text-transform: uppercase;\n  }\n\n  .layout {\n    display:flex; \n    align-items: center;\n  }\n\n  .layout.btns > * {\n    width: 33%\n  }\n\n  .radio {\n    margin-bottom: 10px;\n  }\n</style>\n\n\n<div id=\"wrapper\">\n  <div class=\"layout\" hidden$=\"[[!hasMultipleDownloadMedia]]\">\n    <div class=\"radio\" style=\"margin-right: 40px\">\n      <input id=\"single\" type=\"radio\" name=\"set-size\" checked on-click=\"_toggleMultipleDownload\" /> \n      <label for=\"single\">Single</label>\n    </div>\n    <div class=\"radio\">\n      <input id=\"fullset\" type=\"radio\" name=\"set-size\" on-click=\"_toggleMultipleDownload\"/> \n      <label for=\"fullset\">Full Set ([[fullSetCount]] files)</label>\n    </div>\n  </div>\n</div>\n\n<div hidden$=\"[[fullSetSelected]]\">\n  <div class=\"layout btns\" style=\"margin-bottom: 5px;\" hidden$=\"[[!selectedMediaHasSources]]\">\n    <select id=\"downloadOptions\" on-change=\"_onChangeDownloadOptions\" ></select>\n    <select id=\"format\" on-change=\"_onFormatSelected\" hidden$=\"[[!showImageFormats]]\"></select>\n    <a id=\"downloadBtn\" href=\"[[href]]\" \n      on-click=\"_onDownloadClicked\" \n      download \n      target=\"_blank\" \n      rel=\"noopener\" \n      style=\"white-space: nowrap; text-align: center;\">\n        <span>\n          Download\n        </span>\n    </a>\n  </div>\n</div>\n\n<div hidden$=\"[[fullSetSelected]]\">\n  <div hidden$=\"[[selectedMediaHasSources]]\" >\n    <em>No downloadable items available</em>\n  </div>\n</div>\n\n\n<form id=\"downloadZip\" \naction$=\"/api/zip/[[zipName]]\" \nmethod=\"POST\" \ntarget=\"_blank\" \nhidden$=\"[[!fullSetSelected]]\">    \n  <input type=\"text\" hidden name=\"paths\" id=\"zipPaths\" style=\"display: none;\">\n  <button on-click=\"_onDownloadFullSetClicked\">\n    <iron-icon icon=\"file-download\"></iron-icon>&nbsp;<span>Download Archive</span>\n  </button>\n</form>";

/***/ }),

/***/ "./public/elements/pages/record/app-record-metadata-layout.html":
/*!**********************************************************************!*\
  !*** ./public/elements/pages/record/app-record-metadata-layout.html ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n  }\n\n  .layout {\n    display: flex;\n  }\n  .layout > * {\n    flex : 1;\n  }\n\n  h2 {\n    border-bottom: 1px solid var(--medium-background-color);\n    color: var(--default-primary-color);\n    padding-bottom: 10px;\n    padding-left: 5px;\n  }\n</style>\n\n<iron-media-query query=\"(max-width: 900px)\" query-matches=\"{{mobile}}\"></iron-media-query>\n\n<app-tabs \n  tabs=\"[[tabs]]\" \n  selected=\"{{selectedTab}}\" \n  hidden$=\"[[!mobile]]\">\n</app-tabs>\n\n<div class=\"layout\">\n  <div hidden$=\"[[!showLeft]]\">\n    <h2>Item Data</h2>\n    <slot name=\"left\"></slot>\n  </div>\n  <div hidden$=\"[[!showRight]]\" style=\"max-width: 100vw;\">\n    <h2>Cite this Item</h2>\n    <slot name=\"right\"></slot>\n  </div>\n</div>";

/***/ }),

/***/ "./public/elements/pages/record/app-record.html":
/*!******************************************************!*\
  !*** ./public/elements/pages/record/app-record.html ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    background-color: var(--super-light-background-color);\n  }\n\n  /*\n  app-media-viewer {\n    position: relative;\n  }\n  */\n\n  .container.top {\n    padding: 20px 0;\n    background-color: var(--light-background-color);\n  }\n\n  input {\n    padding: 0 0 0 5px;\n    display: block;\n    border: none;\n    height: 38px;\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    width: 85px;\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    font-weight: var(--fw-bold);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n  }\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  .copyButton[active] span {\n    display: none;\n  }\n\n  h3 {\n    margin: 0 0 10px 0;\n    /* color: var(--default-primary-color); */\n  }\n\n  .label {\n    font-weight: var(--fw-bold);\n    color: var(--default-primary-color);\n  }\n\n  .section {\n    margin-bottom: 15px;\n  }\n  .section.bordered {\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px dashed var(--medium-background-color);\n  }\n\n  .overview {\n    display: flex; \n    width: 100%;\n  }\n\n  .overview > div {\n    flex : 1;\n    padding : 0 10px;\n  }\n\n  .type-date-collection {\n    display: flex;\n    /* align-items: center; */\n  }\n\n  .resource-type {\n    text-transform: capitalize;\n  }\n  .resource-type iron-icon {\n    color: var(--default-primary-color);\n  }\n\n  paper-toast {\n    --paper-toast-background-color: var(--default-secondary-color);\n    --paper-toast-color: var(--default-primary-color);\n  }\n\n  #descriptionValue p,\n  #descriptionValue h1,\n  #descriptionValue h2,\n  #descriptionValue h3 {\n    margin-top: 0;\n  }\n\n  #link {\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  .metadata-row {\n    display: flex;\n    margin: 30px 20px;\n  }\n  .metadata-row .attr {\n    flex: 0.25;\n    color: var(--default-primary-color);\n    font-weight: var(--fw-bold); \n  }\n  .metadata-row .value {\n    flex: 0.75;\n    word-break: break-word;\n  }\n\n  .cite-container {\n    padding: 15px 0;\n    margin: 0 15px;\n    border-bottom: 1px dashed var(--medium-background-color);\n    display: flex;\n  }\n  .cite-container .label {\n    padding-right: 10px;\n    flex: 0.25;\n    color: var(--default-primary-color);\n    font-weight: var(--fw-bold); \n  }\n  .cite-container .text {\n    flex: 0.75;\n  }\n\n  .hidden {\n    display: none !important;\n  }\n\n  .fc-break {\n    height: 10px;\n  }\n\n  .rights {\n    font-size: var(--fs-p);\n    font-style: italic;\n    text-transform: capitalize;\n  }\n\n  .rights-break {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-top: 1px dashed var(--medium-background-color);\n  }\n\n  img[rights] {\n    height: 22px;\n    width: 22px;\n    vertical-align: sub;\n  }\n\n  @media( max-width: 550px ) {\n    .metadata-row {\n      display: block;\n    }\n  }\n\n  @media( max-width: 768px ) {\n    .overview {\n      display: block;\n    }\n    .cite-container {\n      display: block;\n      padding: 15px 0 15px 15px;\n      margin: 0;\n    }\n    .type-date-collection {\n      display: block;\n    }\n    .type-date-collection > div {\n      margin: 15px 5px;\n    }\n  }\n</style>\n\n<app-media-viewer></app-media-viewer>\n\n<div class=\"container top\">\n  <div class=\"overview\">\n    <div>\n      <h3>[[name]]</h3>\n      \n      <div hidden$=\"[[!alternativeHeadline]]\" class=\"section\">\n        <div style=\"font-weight: bold;\">[[alternativeHeadline]]</div>\n      </div>\n\n      <div hidden$=\"[[!rights]]\" class=\"rights\">\n        <div class=\"rights-break\"></div>\n        <div>\n          <a href$=\"[[rights.link]]\" target=\"_blank\">\n            <img src$=\"[[rights.icon]]\" rights />&nbsp;\n            <span>[[rights.label]]</span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n    <div>\n      <div style=\"display: flex; align-items: center\" class=\"section bordered\">\n        <span class=\"label\" style=\"padding-right: 10px; display:inline-block\">Permalink</span>\n        <div style=\"flex:1\">\n          <input id=\"link\" type=\"text\" />\n        </div>\n        <button on-click=\"_copyLink\" id=\"copyButton\" class=\"copyButton\">\n          <iron-icon icon=\"content-copy\" id=\"copyIcon\"></iron-icon>\n          <span>Copy</span>\n        </button>\n      </div>\n\n      <div class=\"section\">\n        <div class=\"label\">Download</div>\n        <app-media-download id=\"download\" hidden$=\"[[isBagOfFiles]]\"></app-media-download>\n        <app-fs-media-download id=\"download\" hidden$=\"[[!isBagOfFiles]]\"></app-fs-media-download>\n      </div>\n\n    </div>\n  </div><!-- end overview -->\n</div>\n\n<div class=\"container\" style=\"padding-bottom: 50px\">\n  <app-record-metadata-layout>\n    <div slot=\"left\">\n      <div class=\"metadata-row\">\n        <div class=\"attr\">Collection</div>\n        <div class=\"value\" id=\"collectionValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\">\n        <div class=\"attr\">Date</div>\n        <div class=\"value\" id=\"dateValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\" id=\"publisher\">\n        <div class=\"attr\">Publisher</div>\n        <div class=\"value\" id=\"publisherValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\" id=\"subject\">\n        <div class=\"attr\">Subject</div>\n        <div class=\"value\" id=\"subjectValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\" id=\"description\">\n        <div class=\"attr\">Description</div>\n        <div class=\"value\" id=\"descriptionValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\" id=\"callNumber\">\n        <div class=\"attr\">Call Number</div>\n        <div class=\"value\" id=\"callNumberValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\" id=\"identifier\">\n        <div class=\"attr\">ARK / DOI</div>\n        <div class=\"value\" id=\"identifierValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\" id=\"creator\">\n        <div class=\"attr\">Creator</div>\n        <div class=\"value\" id=\"creatorValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\">\n        <div class=\"attr\">Fedora Link</div>\n        <div class=\"value\" id=\"fedoraValue\"></div>\n      </div>\n    </div>\n    \n    <div slot=\"right\">\n      <div class=\"cite-container\">\n        <div class=\"label\">MLA</div>\n        <div class=\"text\">\n          <app-copy-cite id=\"mla\"></app-copy-cite>\n        </div>\n      </div>\n\n      <div class=\"cite-container\">\n        <div class=\"label\">APA</div>\n        <div class=\"text\">\n          <app-copy-cite id=\"apa\"></app-copy-cite>\n        </div>\n      </div>\n\n      <div class=\"cite-container\">\n        <div class=\"label\">Chicago</div>\n        <div class=\"text\">\n          <app-copy-cite id=\"chicago\"></app-copy-cite>\n        </div>\n      </div>\n      \n    </div>\n  </app-record-metadata-layout>\n</div>";

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-image-viewer-lightbox.html":
/*!****************************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-image-viewer-lightbox.html ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: none;\n    position: absolute;\n    z-index: 1000;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    background-color: black;    \n    animation: show 350ms ease-out;\n  }\n\n  :host #nav.single {\n    padding: 10px;\n    background-color: transparent;\n  }\n\n  @keyframes show {\n    from {\n      /* top: -100vh; */\n      opacity: 0.5;\n      transform: scale(1.3);\n    }\n    to {\n      /* top: 0; */\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  #viewer { \n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: black;\n  }\n\n  paper-spinner-lite {\n    --paper-spinner-color: var(--default-secondary-color);\n  }\n  \n  .spinner-layout {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  #nav {\n    z-index: 2000;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n</style>\n\n<!-- make sure background is blacked out... iOS hack -->\n<div id=\"safeCover\" style=\"display:none;position:absolute;z-index:999;top:0;left:0;width:100vw;height:100vh;background-color:black;\"></div>\n\n<div id=\"viewer\" hidden$=\"[[loading]]\"></div>\n<div class=\"spinner-layout\" hidden$=\"[[!loading]]\">\n  <paper-spinner-lite active$=\"[[loading]]\"></paper-spinner-lite>\n</div>\n\n<app-media-viewer-nav \n  id=\"nav\"\n  is-lightbox\n  on-zoom-in=\"_onZoomInClicked\"\n  on-zoom-out=\"_onZoomOutClicked\"\n  on-close=\"_onCloseClicked\">\n</app-media-viewer-nav>";

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-image-viewer.html":
/*!*******************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-image-viewer.html ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<style>\n  :host {\n    display: block;\n    background: black;\n    padding: 20px 0;\n    /* position: relative; */\n    box-sizing: border-box;\n  }\n\n  paper-spinner-lite {\n    --paper-spinner-color: var(--default-secondary-color);\n  }\n\n  #loading {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  img {\n    width: 100%;\n  }\n\n  .layout {\n    text-align: center;\n  }\n\n  [hidden] {\n    display: none !important;\n  }\n</style>\n\n<div id=\"loading\" hidden$=\"[[!loading]]\">\n  <paper-spinner-lite active$=\"[[loading]]\"></paper-spinner-lite>\n</div>\n\n<div class=\"layout\" hidden$=\"[[loading]]\" style=\"line-height: 0\">\n  <img id=\"img\" />\n</div>";

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-media-viewer-nav.html":
/*!***********************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-media-viewer-nav.html ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    background-color: var(--default-primary-color);\n  }\n\n  :host([single-image]) {\n    background-color: transparent;\n    padding: 0 8px 8px 8px;\n  }\n\n  :host([single-image]) paper-icon-button,\n  :host([single-image]) app-share-btn,\n  :host app-share-btn,\n  :host paper-icon-button {\n    background-color: var(--default-primary-color);\n  }\n\n\n  .layout {\n    display: flex;\n    align-items: center;\n  }\n\n  #thumbnailInnerContainer {\n    padding-top: 7px;\n  }\n\n \n  #thumbnails {\n    /* (50px width + 10px margin + 4px border) * 8 thumbnails */\n    max-width: 512px;\n  }\n\n\n  #thumbnails {\n    overflow: hidden;\n  }\n\n  #thumbnails > div {\n    white-space: nowrap;\n    margin-left: 0;\n    will-change: margin-left;\n    transition: margin-left 250ms ease-out;\n  }\n\n  .thumbnail {\n    margin: 0 5px 5px 6px;\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n    color: white;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-color: black;    \n    border: 2px solid transparent;\n  }\n\n  .thumbnail:active {\n    border: 1px solid var(--default-secondary-color);\n  }\n\n  .thumbnail:focus {\n    outline: var(--default-outline);\n  }\n  \n  .thumbnail[selected] {\n    border: 2px solid var(--default-secondary-color);\n  }\n\n  iron-icon {\n    shape-rendering: geometricPrecision !important;\n    width: 28px !important;\n    height: 28px !important;\n  }\n\n  paper-icon-button {\n    color: var(--default-secondary-color);\n    min-width: 40px;\n  }\n\n  paper-icon-button:focus {\n    border-radius: 0 !important;\n  }\n\n  paper-icon-button[disabled] {\n    color: var(--gray-text);\n    min-width: 40px;\n  }\n\n  paper-icon-button[invisible] {\n    visibility: hidden;\n  }\n\n  .zoom-btns[pad] {\n    margin-right: 30px;\n  }\n</style>\n\n\n<div class=\"layout\">\n\n  <div id=\"navLeft\" hidden$=\"[[singleImage]]\">\n    <paper-icon-button noink \n      tabindex=\"0\" \n      icon=\"chevron-left\" \n      alt=\"Page thumbnails left\"\n      disabled$=\"[[!showNavLeft]]\"\n      invisible$=\"[[!showNavLeft]]\"\n      on-click=\"_pageLeft\">\n    </paper-icon-button>\n  </div>\n\n  <div id=\"thumbnails\" hidden$=\"[[singleImage]]\">\n    <div id=\"thumbnailInnerContainer\">\n      <template is=\"dom-repeat\" items=\"[[thumbnails]]\">\n        <button \n          class=\"thumbnail\"\n          alt$=\"Page #[[item.position]]\"\n          title$=\"[[item.id]]\"\n          media-id$=\"[[item.id]]\"\n          disabled$=\"[[item.disabled]]\"\n          selected$=\"[[item.selected]]\" \n          style$=\"background-image:url([[item.src]])\"\n          on-click=\"_onThumbnailClicked\">\n            <iron-icon icon=\"fin-icons:[[item.icon]]\"></iron-icon>\n        </button>\n      </template>\n    </div>\n  </div>\n\n  <div id=\"navRight\" hidden$=\"[[singleImage]]\">\n    <paper-icon-button noink \n      tabindex=\"0\" \n      icon=\"chevron-right\" \n      alt=\"Page thumbnails right\"\n      disabled$=\"[[!showNavRight]]\"\n      invisible$=\"[[!showNavRight]]\"\n      on-click=\"_pageRight\">\n    </paper-icon-button>\n  </div>\n\n  <div style=\"flex:1\"></div>\n  \n  <div id=\"buttonWrapper\" hidden$=\"[[breakControls]]\" style=\"white-space: nowrap\">\n    <paper-icon-button id=\"zoomOut1\" noink tabindex=\"0\" icon=\"zoom-out\" hidden$=\"[[!isLightbox]]\" on-click=\"_onZoomOutClicked\"></paper-icon-button>\n    <paper-icon-button noink icon=\"zoom-in\" tabindex=\"0\" hidden$=\"[[!isLightbox]]\" on-click=\"_onZoomInClicked\"></paper-icon-button>\n    \n    <app-share-btn id=\"shareBtn\" role=\"button\"></app-share-btn>\n\n    <span hidden$=\"[[!showOpenLightbox]]\" class=\"zoom-btns\" pad$=\"[[!showOpenLightbox]]\">\n      <paper-icon-button noink icon=\"zoom-in\" tabindex=\"0\" hidden$=\"[[isLightbox]]\" on-click=\"_onZoomInClicked\"></paper-icon-button>\n      <paper-icon-button noink icon=\"fin-icons:close\" tabindex=\"0\" hidden$=\"[[!isLightbox]]\" on-click=\"_onCloseClicked\"></paper-icon-button>\n    </span>\n  </div>\n</div>\n\n<div hidden$=\"[[!breakControls]]\" style=\"text-align: right\">\n  <paper-icon-button id=\"zoomOut2\" noink tabindex=\"0\" icon=\"zoom-out\" hidden$=\"[[!isLightbox]]\" on-click=\"_onZoomOutClicked\"></paper-icon-button>\n  <paper-icon-button noink icon=\"zoom-in\" tabindex=\"0\" hidden$=\"[[!isLightbox]]\" on-click=\"_onZoomInClicked\"></paper-icon-button>\n  \n  <app-share-btn></app-share-btn>\n  \n  <span hidden$=\"[[!showOpenLightbox]]\" class=\"zoom-btns\">\n    <paper-icon-button noink icon=\"zoom-in\" tabindex=\"0\" hidden$=\"[[isLightbox]]\" on-click=\"_onZoomInClicked\"></paper-icon-button>\n    <paper-icon-button noink icon=\"fin-icons:close\" tabindex=\"0\" hidden$=\"[[!isLightbox]]\" on-click=\"_onCloseClicked\"></paper-icon-button>\n  </span>\n</div>\n";

/***/ }),

/***/ "./public/elements/utils/app-share-btn.html":
/*!**************************************************!*\
  !*** ./public/elements/utils/app-share-btn.html ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: inline-block;\n    position: relative;\n  }\n\n  #popup {\n    display: none;\n    z-index: 5;\n    background: white;\n    padding: 10px;\n    position: absolute;\n    bottom: 70px;\n    right: -20px;\n    min-width: 200px;\n  }\n\n  .layout {\n    display: flex;\n    margin-bottom: 5px;\n    justify-content: center;\n  }\n\n  input {\n    font-size: var(--fs-p);\n    padding: 0 0 0 5px;\n    display: block;\n    border: none;\n    height: 38px;\n    outline: none;\n  }\n\n  #link {\n    width: 100%;\n    border-top: 1px solid var(--medium-background-color);\n    border-left: 1px solid var(--medium-background-color);\n    border-bottom: 1px solid var(--medium-background-color);\n    box-sizing: border-box;\n  }\n\n  .social {\n    margin: 8px;\n    display: inline-block;\n    cursor: pointer;\n    height: 40px;\n    width: 40px;\n    border: 2px solid transparent;\n    outline: none;\n  }\n  .social:focus {\n    border: var(--default-outline);\n    border-radius: 20px;\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    font-weight: var(--fw-bold);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n    padding: 0 5px;\n  }\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  .copyButton[active] span {\n    display: none;\n  }\n\n  #main {\n    color: var(--default-secondary-color);\n  }\n\n  .arrow-down {\n    position: absolute;\n    width: 0; \n    height: 0; \n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n    border-top: 20px solid white;\n    bottom: -20px;\n    right: 20px;\n  }\n\n  paper-icon-button:focus {\n    border-radius: 0 !important;\n  }\n</style>\n\n<div id=\"popup\">\n  <div class=\"layout\">\n    <img id=\"facebook\" \n      role=\"button\" \n      tabindex=\"0\" \n      src=\"/images/social-icons/icon-facebook.svg\" \n      class=\"social\" \n      on-click=\"_onSocialIconClick\"\n      on-keyup=\"_onSocialIconClick\" />\n    <img id=\"twitter\" \n      role=\"button\" \n      tabindex=\"0\" \n      src=\"/images/social-icons/icon-twitter.svg\" \n      class=\"social\" \n      on-click=\"_onSocialIconClick\"\n      on-keyup=\"_onSocialIconClick\" />\n    <img id=\"pinterest\" \n      role=\"button\" \n      tabindex=\"0\" \n      src=\"/images/social-icons/icon-pinterest.svg\" \n      class=\"social\" \n      on-click=\"_onSocialIconClick\"\n      on-keyup=\"_onSocialIconClick\" />\n  </div>\n  <div>\n    <div style=\"display: flex; align-items: center\" class=\"section bordered\">\n      <div style=\"flex:1\">\n        <input id=\"link\" type=\"text\" />\n      </div>\n      <button on-click=\"_copyLink\" id=\"copyButton\" class=\"copyButton\">\n        <iron-icon icon=\"content-copy\" id=\"copyIcon\"></iron-icon>\n      </button>\n    </div>\n  </div>\n  <div class=\"arrow-down\"></div>\n</div>\n\n<paper-icon-button \n  id=\"main\" \n  noink \n  icon=\"social:share\" \n\n  on-click=\"_onBtnClicked\">\n</paper-icon-button>\n\n";

/***/ }),

/***/ "./public/elements/utils/app-tabs.html":
/*!*********************************************!*\
  !*** ./public/elements/utils/app-tabs.html ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<style>\n  :host {\n    display : block;\n  }\n  .layout {\n    display: flex;\n  }\n  .tab {\n    flex: 1;\n    cursor: pointer;\n    text-transform: uppercase;\n    padding: 12px 0 9px 0;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: normal;\n    color: var(--gray-text);\n    border-bottom: 2px solid var(--gray-text);\n  }\n  .tab:focus {\n    border-bottom-color: var(--default-secondary-color);\n    outline: none;\n  }\n  .tab[selected] {\n    cursor: default;\n    font-weight: bold;\n    color: var(--default-primary-color);\n    border-bottom: 4px solid var(--default-primary-color);\n    padding: 12px 0 7px 0;\n  }\n</style>\n\n<div class=\"layout\">\n  <template is=\"dom-repeat\" items=\"[[tabs]]\">\n    <div class=\"tab\" \n      role=\"tab\" \n      tabindex=\"0\" \n      aria-selected$=\"[[item.ariaSelected]]\"\n      selected$=\"[[item.selected]]\"\n      on-click=\"_onTabClicked\" \n      on-keyup=\"_onTabClicked\"\n      value$=\"[[item.value]]\">\n      [[item.label]]\n    </div>\n  </template>\n</div>";

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

/***/ "./public/elements/pages/record/app-fs-media-download.js":
/*!***************************************************************!*\
  !*** ./public/elements/pages/record/app-fs-media-download.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppFsMediaDownload)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _app_fs_media_download_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-fs-media-download.tpl.js */ "./public/elements/pages/record/app-fs-media-download.tpl.js");
/* harmony import */ var _viewer_app_fs_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer/app-fs-viewer */ "./public/elements/pages/record/viewer/app-fs-viewer.js");





class AppFsMediaDownload extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      mode : {type: String}
    }
  }

  constructor() {
    super();
    this.render = _app_fs_media_download_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.mode = 'single'

    this._injectModel('AppStateModel');
  }

  async firstUpdated() {
    this.fsViewer = this.shadowRoot.querySelector('app-fs-viewer');
    this._onAppStateUpdate(await this.AppStateModel.get());
  }

  _onAppStateUpdate(e) {
    this.selectedRecord = e.selectedRecord;
    this.selectedRecordMedia = e.selectedRecordMedia;
  }

  _toggleMultipleDownload(e) {
    this.mode = e.currentTarget.id;
  }

  _onDownloadClicked(e) {
    if( e.type === 'keyup' && e.which !== 13 ) return;

    if( this.mode === 'single' ) {
      this.fsViewer.show();
    } else {
      if( this.selectedRecordMedia.clientMediaDownload ) {
        let url = this.selectedRecordMedia.clientMediaDownload;
        if( Array.isArray(url) ) url = url[0];
        if( typeof url === 'object' ) url = url['@id'];
        url = '/fcrepo/rest/'+url;
        console.log('downloading archive using: '+url);
        open(url, '_blank');
      } else {
        let url = '/api/zip/bag-of-files'+this.selectedRecordMedia['@id'];
        open(url, '_blank');
        console.log('downloading archive using: '+url);
      }
    }
  }

  _renderDownloadBtn(mode) {
    if( this.mode === 'single' ) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`<iron-icon icon='file-download'></iron-icon> Browse for file`;
    } else {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`<iron-icon icon='file-download'></iron-icon> Download Archive`;
    }
  }
}

customElements.define('app-fs-media-download', AppFsMediaDownload);


/***/ }),

/***/ "./public/elements/pages/record/app-fs-media-download.tpl.js":
/*!*******************************************************************!*\
  !*** ./public/elements/pages/record/app-fs-media-download.tpl.js ***!
  \*******************************************************************/
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
    display: block;
  }

  .layout {
    display:flex; 
    align-items: center;
  }

  .layout.btns > * {
    width: 33%
  }

  .radio {
    margin-bottom: 10px;
  }

  a {
    cursor: pointer;
    display: inline-block;
    padding: 8px 12px 8px 8px;
    color : var(--default-primary-color);
    background-color : var(--default-secondary-color);
    text-transform: uppercase;
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    text-decoration: none;
    white-space: nowrap;
    height: 24px;
  }
  a iron-icon {
    vertical-align: middle;
  }
</style> 

<div id="wrapper">
  <div class="layout">
    <div class="radio" style="margin-right: 40px">
      <input id="single" type="radio" name="set-fs-dl-type" checked @click="${this._toggleMultipleDownload}" /> 
      <label for="single">Single</label>
    </div>
    <div class="radio">
      <input id="archive" type="radio" name="set-fs-dl-type" @click="${this._toggleMultipleDownload}"/> 
      <label for="archive">Archive</label>
    </div>
  </div>
</div>

<a id="downloadBtn" @click="${this._onDownloadClicked}" @keyup="${this._onDownloadClicked}" tabindex="0">
  ${this._renderDownloadBtn(this.mode)}
</a>

<app-fs-viewer></app-fs-viewer>

`;}

/***/ }),

/***/ "./public/elements/pages/record/app-media-download.js":
/*!************************************************************!*\
  !*** ./public/elements/pages/record/app-media-download.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppMediaDownload)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_media_download_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-media-download.html */ "./public/elements/pages/record/app-media-download.html");
/* harmony import */ var _app_media_download_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_media_download_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/CollectionInterface */ "./public/elements/interfaces/CollectionInterface.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/MediaInterface */ "./public/elements/interfaces/MediaInterface.js");
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/config */ "./public/lib/config.js");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/utils */ "./public/lib/utils/index.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bytes */ "./public/node_modules/bytes/index.js");
/* harmony import */ var bytes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bytes__WEBPACK_IMPORTED_MODULE_6__);











class AppMediaDownload extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
      .with(EventInterface, (_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_2___default()), (_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3___default())) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_media_download_html__WEBPACK_IMPORTED_MODULE_1___default());
    return tag;
  }

  static get properties() {
    return {
      defaultImage: {
        type : Boolean,
        value : true
      },
      formats : {
        type : Array,
        value : () => []
      },
      href : {
        type : String,
        value : ''
      },
      imageSizes : {
        type : Array,
        value : () => []
      },
      hasMultipleDownloadMedia: {
        type: Boolean,
        value: false
      },
      selectedMediaHasSources : {
        type : Boolean,
        value : false
      },
      fullSetCount : {
        type : Boolean,
        value : 0
      },
      fullSetSelected: {
        type : Boolean,
        value : false
      },
      downloadOptions: {
        type: Array,
        value: () => []
      },
      showImageFormats : {
        type : Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    this._injectModel('AppStateModel', 'MediaModel');
  }

  async ready() {
    super.ready();
    let selectedRecord = await this.AppStateModel.getSelectedRecord();
    if( selectedRecord ) {
      this._onSelectedRecordUpdate(selectedRecord);
      let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
      if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
    }
  }

  _onSelectedRecordUpdate(record) {
    this.rootRecord = record;
    if( !record ) return;

    // find out if the number of download options is greater than 1
    let sourceCount = 0;
    for( let type in record.media ) {
      for( let media of record.media[type] ) {
        if( type === 'imageList' ) {
          record.media.imageList.forEach(list => {
            sourceCount += list.hasPart.length;
          });
        } else {
          sourceCount += this._getDownloadSources(media, true).length;
        }
        
        if( sourceCount > 1 ) break;
      }
      if( sourceCount > 1 ) break;
    }

    this.hasMultipleDownloadMedia = (sourceCount > 1);
    if( this.hasMultipleDownloadMedia ) {
      this.$.single.checked = true;
      this.$.fullset.checked = false;
    }

    this.fullSetSelected = false;
  }

  _onSelectedRecordMediaUpdate(media) {
    this.showImageFormats = false;
    this.fullSetSelected = false;

    let sources = this._getDownloadSources(media);

    if ( sources.length === 0 ) {
      this.selectedMediaHasSources = false;
      return;
    }

    this.selectedMediaHasSources = true;
    this.fullSetCount = this._getAllNativeDownloadSources().length;

    this.allSources = sources;
    this.downloadOptions = sources;
    this.$.downloadOptions.innerHTML = sources
      .map((item, index) => `<option value="${index}" ${index === 0 ? 'selected' : ''}>${item.label}</option>`)
      .join()
    this.$.downloadOptions.value = '0';

    this._setDownloadHref(sources[0]);
  }

  _getDownloadSources(record, nativeImageOnly=false) {
    let sources = [];
    if( !record ) return sources;

    if( record.clientMediaDownload ) {
      if( Array.isArray(record.clientMediaDownload) ) {
        if( record.clientMediaDownload.length ) {
          record = record.clientMediaDownload[0];
        }
      } else {
        record = record.clientMediaDownload;
      }
    }

    if (_lib_utils__WEBPACK_IMPORTED_MODULE_5___default().getMediaType(record) === 'VideoObject') {
      sources = sources.concat(this._getVideoSources(record));
    } else if (_lib_utils__WEBPACK_IMPORTED_MODULE_5___default().getMediaType(record) === 'AudioObject') {
      sources = sources.concat(this._getAudioSources(record));
    } else if (_lib_utils__WEBPACK_IMPORTED_MODULE_5___default().getMediaType(record) === 'ImageObject' ) {
      this.showImageFormats = true;
      sources = sources.concat(this._getImageSources(record, nativeImageOnly));
      this._renderImgFormats(record, null, 'FR');
    } else if (_lib_utils__WEBPACK_IMPORTED_MODULE_5___default().getMediaType(record) === 'ImageList' ) {
      (record.hasPart || []).forEach(img => {
        sources = sources.concat(this._getImageSources(img, nativeImageOnly));
      });
    }

    return sources;
  }

  _setDownloadHref(source) {
    let href = source.src;
    if( source.type === 'image' ) {
      let format = this.$.format.value;
      if( source.originalFormat !== format || source.imageType !== 'FR' ) {
        href += source.service+format;
      }
    }

    this.sourceType = source.type; // stored for analytics
    this.href = href;
  }

  /**
   * @method _getImageSources
   * @description the download sources list for image media
   * 
   * @param {Object} imageRecord the image media
   * @param {Boolean} nativeImageOnly In the sources list, should only the native 
   * image be returned or all available size options?
   * 
   * @returns {Array} 
   */
  _getImageSources(imageRecord, nativeImageOnly=false) {
    let format = this._getImageFormat(imageRecord);

    if( nativeImageOnly ) {
      return [{
        record : imageRecord,
        type : 'image',
        src :  (_lib_config__WEBPACK_IMPORTED_MODULE_4___default().fcrepoBasePath)+imageRecord['@id'],
        originalFormat : format,
        filename : imageRecord.filename || imageRecord.name,
        label : imageRecord.filename || imageRecord.name
      }]
    }

    let sources = [];
    for( let size of (_lib_config__WEBPACK_IMPORTED_MODULE_4___default().imageDownload.sizes) ) {
      let width = Math.floor(imageRecord.image.width * size.ratio);
      let height = Math.floor(imageRecord.image.height * size.ratio);
      let iiifSize = width+','+height;
      sources.push({
        record : imageRecord,
        type : 'image',
        src :  (_lib_config__WEBPACK_IMPORTED_MODULE_4___default().fcrepoBasePath)+imageRecord['@id'],
        service : `/svc:iiif/full/${iiifSize}/0/default.`,
        originalFormat : format,
        imageType : size.imageType,
        filename : imageRecord.filename || imageRecord['@id'].split('/').pop(),
        label : size.label+' '+width+' x '+height+' px',
        width, height
      });
    }

    return sources;
  }

  _getAudioSources(audioRecord) {
    return [{
      record: audioRecord,
      src: (_lib_config__WEBPACK_IMPORTED_MODULE_4___default().fcrepoBasePath) + audioRecord['@id'],
      type: 'audio',
      filename : audioRecord.filename || audioRecord['@id'].split('/').pop(),
      label: this._getTypeLabel(audioRecord) + (audioRecord.fileSize ? ' (' + bytes__WEBPACK_IMPORTED_MODULE_6___default()(audioRecord.fileSize) + ') ' : '')
    }];
  }

  _getVideoSources(videoRecord) {
    let sources = [{
      record : videoRecord,
      type : 'video',
      src : (_lib_config__WEBPACK_IMPORTED_MODULE_4___default().fcrepoBasePath) + videoRecord['@id'],
      filename : videoRecord.filename || videoRecord['@id'].split('/').pop(),
      label : this._getTypeLabel(videoRecord) + (videoRecord.fileSize ? ' (' + bytes__WEBPACK_IMPORTED_MODULE_6___default()(videoRecord.fileSize) + ') ' : '')
    }];

    let transcripts = videoRecord.transcript || [];
    if( !Array.isArray(transcripts) ) transcripts = [transcripts];

    transcripts
      .filter(transcript => transcript.error !== true)
      .forEach(transcript => {
        sources.push({
          record: transcript,
          src: (_lib_config__WEBPACK_IMPORTED_MODULE_4___default().fcrepoBasePath) + transcript['@id'],
          type: 'transcript',
          filename : transcript.filename || transcript['@id'].split('/').pop(),
          label: this._getTypeLabel(transcript) + ' (video transcript only)'
        });
      });

    return sources;
  }

  /**
   * @method _getTypeLabel
   * @description get a nice label for a media type.  Uses the encodingFormat or fileFormat, splits apart
   * mime type and takes second arg (part after slash).  Falls back on file extension if not encodingFormat
   * or fileFormat is provided.
   * 
   * @param {Object} record file media record
   * 
   * @returns {String}
   */
  _getTypeLabel(record) {
    let type = record.encodingFormat || record.fileFormat;
    if( type ) return type.split('/').pop();
    return record['@id'].split('/').pop().split('.').pop();
  }

  /**
   * @method _onChangeDownloadOptions
   * @description bound to download options select element on-change event
   * 
   * @param {Object} e 
   */
  _onChangeDownloadOptions(e) {
    let source = this.downloadOptions[parseInt(e.currentTarget.value)];

    if( source.type === 'image' ) {
      this._renderImgFormats(source.record, this.$.format.value, source.imageType);
    }

    this._setDownloadHref(source);
  }

  /**
   * @method _renderImgFormats
   * @private
   * @description render image formats select element based of static format 
   * list and additional native format if not in list and size is at
   * full resolution.
   */
  _renderImgFormats(imageRecord, selectedFormat, selectedSize) {
    let originalFormat = this._getImageFormat(imageRecord);
    if( !selectedFormat ) selectedFormat = originalFormat;

    let formats = _lib_config__WEBPACK_IMPORTED_MODULE_4___default().imageDownload.formats.slice(0);
    if( formats.indexOf(originalFormat) === -1 && selectedSize === 'FR' ) {
      formats.push(originalFormat);
    }

    this.formats = formats;
    this.$.format.innerHTML = '';

    this.formats.forEach(format => {
      let option = document.createElement('option');
      option.innerHTML = format + ((format === originalFormat && selectedSize === 'FR') ? ' (native)' : '');
      option.value = format;

      if (format === selectedFormat) {
        option.setAttribute('selected', 'selected');
      }
      
      this.$.format.appendChild(option);
    });
  }

  /**
   * @method _getImageFormat
   * @description get the image format. Looks at the schema.org fileFormat parameter or falls back to the url
   * 
   * @returns {String}
   */
  _getImageFormat(imageRecord) {
    let originalFormat = (imageRecord.fileFormat || imageRecord['@id'].split('.').pop() || '')
      .replace(/.*\//, '').toLowerCase();
    // hack
    if( originalFormat === 'jpeg' ) originalFormat = 'jpg';
    return originalFormat;
  }

  /**
   * @method _onFormatSelected
   * @private
   * @description when a format is selected, render the download button.
   */
  _onFormatSelected() {
    let selectedFormat = this.$.format.value.replace(/ .*/, '');
    let source = this.downloadOptions[parseInt(this.$.downloadOptions.value)];
    this._renderImgFormats(source.record, selectedFormat, source.imageType);
    this._setDownloadHref(source);
  }

  /**
   * @method _toggleMultipleDownload
   * @description bound to radio buttons click event
   */
  _toggleMultipleDownload() {
    this.fullSetSelected = this.$.fullset.checked ? true : false;
    this._setZipPaths();
  }

  /**
   * @method _setZipPaths
   * @description set the fullset/zip form elements.
   */
  _setZipPaths() {
    let urls = {};
    this.zipName = this.rootRecord.name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();

    let sources = this._getAllNativeDownloadSources();

    for( let source of sources ) {
      urls[source.filename] = source.src;
    }

    this.$.zipPaths.value = JSON.stringify(urls);
  }

  /**
   * @method _getAllNativeDownloadSources
   * @description for the current root record, return all media records that are
   * available for download.  Note, for images, there is only only record per image,
   * the native format.
   * 
   * @return {Array}
   */
  _getAllNativeDownloadSources() {
    let sources = [];
    for( let type in this.rootRecord.media ) {
      for( let media of this.rootRecord.media[type] ) {
        sources = sources.concat(this._getDownloadSources(media, true));
      }
    }
    return sources;
  }

  /**
   * @method _downloadZip
   * @description bound to download set button click event
   */
  _onDownloadFullSetClicked() {
    this.$.downloadZip.submit();

    let path = this.rootRecord['@id'].replace((_lib_config__WEBPACK_IMPORTED_MODULE_4___default().fcrepoBasePath), '');
    gtag('event', 'download', {
      'event_category': 'fullset',
      'event_label': path,
      'value': 1
    });
  }

  /**
   * @method _onDownloadClicked
   * @description bound to download button click event, record analytics
   */
  _onDownloadClicked() {
    let path = this.href.replace((_lib_config__WEBPACK_IMPORTED_MODULE_4___default().fcrepoBasePath), '');

    gtag('event', 'download', {
      'event_category': this.sourceType,
      'event_label': path,
      'value': 1
    });
  }

}

customElements.define('app-media-download', AppMediaDownload);

/***/ }),

/***/ "./public/elements/pages/record/app-record-metadata-layout.js":
/*!********************************************************************!*\
  !*** ./public/elements/pages/record/app-record-metadata-layout.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppRecordMetadataLayout)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_record_metadata_layout_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-record-metadata-layout.html */ "./public/elements/pages/record/app-record-metadata-layout.html");
/* harmony import */ var _app_record_metadata_layout_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_record_metadata_layout_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_app_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/app-tabs */ "./public/elements/utils/app-tabs.js");
/* harmony import */ var _polymer_iron_pages_iron_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-pages/iron-pages */ "./public/node_modules/@polymer/iron-pages/iron-pages.js");
/* harmony import */ var _polymer_iron_media_query_iron_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query */ "./public/node_modules/@polymer/iron-media-query/iron-media-query.js");



// import "@polymer/paper-tabs/paper-tabs"
// import "@polymer/paper-tabs/paper-tab"




class AppRecordMetadataLayout extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_record_metadata_layout_html__WEBPACK_IMPORTED_MODULE_1___default());
    return tag;
  }

  static get properties() {
    return {
      mobile : {
        type : Boolean,
        value : false,
        observer : '_updateVisiblePanels'
      },
      selectedTab : {
        type : Number,
        value : 'data',
        observer : '_updateVisiblePanels'
      },
      showRight : {
        type : Boolean,
        value : true
      },
      showLeft : {
        type : Boolean,
        value : true
      },
      tabs : {
        type : Array,
        value : () => [
          {label : 'Item Data', value: 'data'},
          {label : 'Cite Item', value: 'cite'}
        ]
      }
    };
  }

  /**
   * @method _updateVisiblePanels
   * @description called when `mobile` or `selectedTab` property is updated
   * Set the correct panel to display.
   */
  _updateVisiblePanels() {
    this.showRight = true;
    this.showLeft = true;

    if( !this.mobile ) return;
    
    if( this.selectedTab === 'data' ) this.showRight = false;
    else this.showLeft = false;
  }

}

customElements.define('app-record-metadata-layout', AppRecordMetadataLayout);

/***/ }),

/***/ "./public/elements/pages/record/app-record.js":
/*!****************************************************!*\
  !*** ./public/elements/pages/record/app-record.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppRecord)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown */ "./public/node_modules/markdown/lib/index.js");
/* harmony import */ var _app_record_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-record.html */ "./public/elements/pages/record/app-record.html");
/* harmony import */ var _app_record_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_record_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_rights_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/rights.json */ "./public/lib/rights.json");
/* harmony import */ var _lib_models_CitationsModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/models/CitationsModel */ "./public/lib/models/CitationsModel/index.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/utils */ "./public/lib/utils/index.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_media_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-media-download */ "./public/elements/pages/record/app-media-download.js");
/* harmony import */ var _app_fs_media_download__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-fs-media-download */ "./public/elements/pages/record/app-fs-media-download.js");
/* harmony import */ var _app_record_metadata_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-record-metadata-layout */ "./public/elements/pages/record/app-record-metadata-layout.js");
/* harmony import */ var _app_copy_cite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-copy-cite */ "./public/elements/pages/record/app-copy-cite.js");
/* harmony import */ var _viewer_app_media_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./viewer/app-media-viewer */ "./public/elements/pages/record/viewer/app-media-viewer.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../interfaces/CollectionInterface */ "./public/elements/interfaces/CollectionInterface.js");
/* harmony import */ var _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../interfaces/MediaInterface */ "./public/elements/interfaces/MediaInterface.js");
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_12__);

















class AppRecord extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
      .with(EventInterface, (_interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_11___default()), (_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_12___default())) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_record_html__WEBPACK_IMPORTED_MODULE_2___default());
    return tag;
  }

  static get properties() {
    return {
      currentRecordId : {
        type : String,
        value : ''
      },
      name : {
        type : String,
        value : ''
      },
      collectionName : {
        type : String,
        value : ''
      },
      date : {
        type : String,
        value : ''
      },
      size : {
        type : String,
        value : ''
      },
      rights : {
        type : Object,
        value : () => {}
      },
      metadata : {
        type : Array,
        value : () => []
      },
      isBagOfFiles : {
        type : Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    this._injectModel('AppStateModel');
    this._injectModel('RecordModel');
  }

  async ready() {
    super.ready();

    let selectedRecord = await this.AppStateModel.getSelectedRecord();
    if( selectedRecord ) {
      await this._onSelectedRecordUpdate(selectedRecord);
      let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
      if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
    }
  }

  /**
   * @method _onRecordUpdate
   * @description from RecordModel, listen for loading events and reset UI.
   * 
   * @param {Object} e state event 
   */
  _onRecordUpdate(e) {
    if( e.state !== 'loading' ) return;

    this.renderedRecordId = null;
    this.record = null;
    this.$.description.classList.add('hidden');
    this.description = '';
    this.alternativeHeadline = '';
    this.$.link.value = '';
    this.date = '';
    this.collectionName = '';
    this.rights = null;
    this.$.collectionValue.innerHTML = '';
    this.$.mla.text = '';
    this.$.apa.text = '';
    this.$.chicago.text = '';
    this.$.identifier.classList.add('hidden');
    this.$.creator.classList.add('hidden');
    this.$.subject.classList.add('hidden');
    this.$.publisher.classList.add('hidden');
    this.$.fedoraValue.innerHTML = '';
    this.metadata = [];
    this.isBagOfFiles = false;
  }

  /**
   * @method _onSelectedRecordUpdate
   * @description from AppStateInterface, called when a record is selected
   * 
   * @param {Object} record selected record
   */
  async _onSelectedRecordUpdate(record) {
    if( !record ) return;
    if( record['@id'] && record['@id'] === this.renderedRecordId ) return;

    this.renderedRecordId = record['@id'];
    this.record = record;

    if( this.record.description ) {
      this.$.description.classList.remove('hidden');
      this.$.descriptionValue.innerHTML = markdown__WEBPACK_IMPORTED_MODULE_1__.markdown.toHTML(this.record.description);
    } else {
      this.$.description.classList.add('hidden');
    }

    this.description = this.record.description || '';
    this.alternativeHeadline = this.record.alternativeHeadline || '';
    this.$.link.value = window.location.href;

    this.$.dateValue.innerHTML = this.record.datePublished || 'Undated';

    // TODO: add back in when we figure out consolidated resource type 
    // this.$.resourceType.innerHTML = this.record.type ? '<div>'+this.record.type.join('</div><div>')+'</div>' : 'Unknown';
    if( this.record.license &&
        this.record.license['@id'] && 
        _lib_rights_json__WEBPACK_IMPORTED_MODULE_3__[this.record.license['@id']] ) {

      let def = _lib_rights_json__WEBPACK_IMPORTED_MODULE_3__[this.record.license['@id']];
      this.rights = {
        link : this.record.license['@id'],
        label : def.text.toLowerCase(),
        icon : `/images/rights-icons/${def.icon}.svg`
      }
    } else {
      this.rights = null;
    }

    this.collectionName = this.record.collectionId || '';
    if( this.collectionName ) {
      let collection = await this._getCollection(this.collectionName);
      this.collectionName = collection.name;
      this.record.collectionName = collection.name;
    }

    // Attach a recod to the download options
    // this.$.download.setRootRecord(record);

    // find arks or doi
    this._renderIdentifier(record);
    this._renderCreators(record);
    this._renderSubjects(record);
    this._renderPublisher(record);

    // set collection link
    this.$.collectionValue.innerHTML = `<a href="${record.collectionId}">${this.collectionName}</a>`;

    // set fedora collection link
    this._renderFcLink(record);

    // this._updateMetadataRows();
    // this._setTarHref();

    // render citations.. this might need to load library, do it last
    this.$.mla.text = await _lib_models_CitationsModel__WEBPACK_IMPORTED_MODULE_4__["default"].renderEsRecord(this.record, 'mla');
    this.$.apa.text = await _lib_models_CitationsModel__WEBPACK_IMPORTED_MODULE_4__["default"].renderEsRecord(this.record, 'apa');
    this.$.chicago.text = await _lib_models_CitationsModel__WEBPACK_IMPORTED_MODULE_4__["default"].renderEsRecord(this.record, 'chicago');

    this.isBagOfFiles = this.record['@type'].includes('http://digital.ucdavis.edu/schema#BagOfFiles');
  }

  _renderFcLink(record, media) {
    let metadataPart = record['@type'].find(type => type.match(/binary/i)) ? '/fcr:metadata' : '';
    let link = this._getHost()+'fcrepo/rest'+record['@id']+metadataPart;
    let html = `<a href="${link}">${record['@id']}</a>`;

    if( media && record['@id'] !== media['@id'] ) {
      metadataPart = media['@type'].find(type => type.match(/binary/i)) ? '/fcr:metadata' : '';
      link = this._getHost()+'fcrepo/rest'+media['@id']+metadataPart;
      html += `<div class="fc-break"></div><div><a href="${link}">${media['@id']}</a></div>`;
    }

    this.$.fedoraValue.innerHTML = html;
  }

  _renderSelectedMedia() {
    let imageList = this._getImageMediaList(this.record);
    if( this.record.associatedMedia ) { 
      if( imageList.length ) {

        // see if url has selected an image
        let selected = imageList[0];
        for( let img of imageList ) {
          if( img['@id'] === window.location.pathname ) {
            selected = img;
          }
        }

        this._setSelectedRecordMedia(selected);
      } else {
        this._setSelectedRecordMedia(this.record);
      }
    } else {
      this._setSelectedRecordMedia(this.record);
    }
  }

  /**
   * @method _renderCreators
   * @description render creator field
   * 
   * @param {Object} record
   */
  _renderCreators(record) {
    // filter to those w/ labels
    let creators = _lib_utils__WEBPACK_IMPORTED_MODULE_5___default().asArray(record, 'creators');

    if( creators.length === 0 ) {
      return this.$.creator.classList.add('hidden');
    }

    // TODO: label is under creator.name
    this.$.creatorValue.innerHTML = creators 
      .map(creator => {
        let searchDoc = this.RecordModel.emptySearchDocument();
        this.RecordModel.appendKeywordFilter(searchDoc, 'creators', creator);
        this.RecordModel.appendKeywordFilter(searchDoc, 'isPartOf.@id', record.collectionId);
        let link = this._getHost()+'search/'+this.RecordModel.searchDocumentToUrl(searchDoc);
        return `<a href="${link}">${creator}</a>`;
      })
      .join(', ');

    this.$.creator.classList.remove('hidden');
  }

  /**
   * @method _renderSubjects
   * @description render subject field, which is really 'abouts' derived from 'schema:about'
   * 
   * @param {Object} record
   */
  _renderSubjects(record) {
    // filter to those w/ labels
    let subjects = _lib_utils__WEBPACK_IMPORTED_MODULE_5___default().asArray(record, 'abouts');
    // .filter(subject => subject.name ? true : false);

    if( subjects.length === 0 ) {
      return this.$.subject.classList.add('hidden');
    }

    // TODO: label is under creator.name
    this.$.subjectValue.innerHTML = subjects 
      .map(subject => {
        // subject = subject.name;
        let searchDoc = this.RecordModel.emptySearchDocument();
        this.RecordModel.appendKeywordFilter(searchDoc, 'abouts.raw', subject);
        this.RecordModel.appendKeywordFilter(searchDoc, 'isPartOf.@id', record.collectionId);
        let link = this._getHost()+'search/'+this.RecordModel.searchDocumentToUrl(searchDoc);
        return `<a href="${link}">${subject}</a>`;
      })
      .join(', ');

    this.$.subject.classList.remove('hidden');
  }

  /**
   * @method _renderPublisher
   * @description render publisher field
   * 
   * @param {Object} record
   */
  _renderPublisher(record) {
    // filter to those w/ labels
    let publishers = _lib_utils__WEBPACK_IMPORTED_MODULE_5___default().asArray(record, 'publisher')
      .filter(publisher => publisher.name ? true : false);

    if( publishers.length === 0 ) {
      return this.$.publisher.classList.add('hidden');
    }

    this.$.publisherValue.innerHTML = publishers 
      .map(publisher => publisher.name)
      .join(', ');

    this.$.publisher.classList.remove('hidden');
  }

  /**
   * @method _renderIdentifier
   * @description render ark/doi field
   * 
   * @param {Object} record 
   */
  _renderIdentifier(record, media) {
    if( !record.identifier ) {
      return this.$.identifier.classList.add('hidden');
    }

    let ids = Array.isArray(record.identifier) ? record.identifier : [record.identifier];
    let arks = ids.filter(id => id.match(/^(ark|doi)/) ? true : false);

    if( arks.length ) {

      // if we are passed a selected media, append identifiers as well
      if( media && media.identifier ) {
        let mediaIds = Array.isArray(media.identifier) ? media.identifier : [media.identifier];
        mediaIds = mediaIds.filter(id => id.match(/^(ark|doi)/) ? true : false);
        for( let id of mediaIds ) {
          if( arks.indexOf(id) === -1 ) arks.push(id);
        }
      }

      this.$.identifier.classList.remove('hidden');
      this.$.identifierValue.innerHTML = arks.map(id => `<div><a href="${this._getHost()}${id}">${id}</a></div>`).join('')
    } else {
      this.$.identifier.classList.add('hidden');
    }

    if( !record.identifiers ) {
      return this.$.libLocation.classList.add('hidden');
    }

    let callNumber = Array.isArray(record.identifiers) ? record.identifiers : [record.identifiers];
    callNumber = callNumber.filter(id => id.match(/^.*,.*box:.*,.*folder:.*$/i) ? true : false);
    if( callNumber.length ) {
      this.$.callNumberValue.innerHTML = callNumber.map(id => `<div>${id}</div>`).join('')
      this.$.callNumber.classList.remove('hidden');
    } else {
      this.$.callNumber.classList.add('hidden');
    }
  }

  /**
   * @method _getHost
   * @description helper for getting protocol/host of window
   * 
   * @returns {String}
   */
  _getHost() {
    return window.location.protocol+'//'+window.location.host+'/';
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} record 
   */
  _onSelectedRecordMediaUpdate(record) {
    // if( record._has360ImageList ) {
    //   this.$.download.style.display = 'none';
    //   return;
    // }

    this.name = this.record.name || '';

    // if (!record.image) return;

    // this.$.download.render({
    //   resolution : [record.image.width, record.image.height],
    //   fileFormat : record.image.encodingFormat,
    //   size : record.image.contentSize ? parseInt(record.image.contentSize) : 0,
    //   url : record.image.url
    // });

    this._renderIdentifier(this.record, record);
    this._renderFcLink(this.record, record);
  }

  /**
   * @method _updateMetadataRows
   * @description update metadata table
   */
  // _updateMetadataRows() {
  //   let metadata = [];

  //   this._addMetadataRow(metadata, 'name', 'Item Name');
  //   this._addMetadataRow(metadata, 'collectionName', 'Collection');
  //   this._addMetadataRow(metadata, 'date', 'Date');
  //   this._addMetadataRow(metadata, 'resourceType', 'Resource Type');

  //   this.metadata = metadata;
  // }

  /**
   * @method _addMetadataRow
   * @description update metadata table row
   * 
   * @param {Array} metadata 
   * @param {String} attr 
   * @param {String} label 
   */
  _addMetadataRow(metadata, attr, label) {
    if( !this[attr] ) return;
    metadata.push({
      attr: label || attr, 
      value: this[attr]
    });
  }

  /**
   * @method _copyLink
   * @description bound to click event on button.  Copy text to clipboard
   * show UI interaction.
   */
  _copyLink() {
    this.$.link.focus();
    this.$.link.setSelectionRange(0, 9999);
    document.execCommand("Copy");

    this.$.copyIcon.icon = 'check';
    this.$.copyButton.setAttribute('active', 'active');

    setTimeout(() => {
      this.$.copyIcon.icon = 'content-copy';
      this.$.copyButton.removeAttribute('active', 'active');
    }, 3000);
  }

}

customElements.define('app-record', AppRecord);

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-audio-viewer.js":
/*!*****************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-audio-viewer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppAudioViewer)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _app_audio_viewer_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-audio-viewer.tpl.js */ "./public/elements/pages/record/viewer/app-audio-viewer.tpl.js");
/* harmony import */ var _ucd_lib_cork_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/cork-app-utils */ "./public/node_modules/@ucd-lib/cork-app-utils/index.js");
/* harmony import */ var _ucd_lib_cork_app_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ucd_lib_cork_app_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/config */ "./public/lib/config.js");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../lib/utils */ "./public/lib/utils/index.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_utils_video_lib_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib/utils/video-lib-loader */ "./public/lib/utils/video-lib-loader.js");
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! plyr/dist/plyr.css */ "./public/node_modules/plyr/dist/plyr.css");
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shaka_player_dist_controls_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shaka-player/dist/controls.css */ "./public/node_modules/shaka-player/dist/controls.css");
/* harmony import */ var shaka_player_dist_controls_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(shaka_player_dist_controls_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var plyr_dist_plyr_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! plyr/dist/plyr.svg */ "./public/node_modules/plyr/dist/plyr.svg");
/* harmony import */ var plyr_dist_plyr_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(plyr_dist_plyr_svg__WEBPACK_IMPORTED_MODULE_8__);
// https://github.com/sampotts/plyr
// https://github.com/google/shaka-player/
// https://github.com/google/shaka-player/tree/master/docs/tutorials











let AUDIO_STYLES = (plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_6___default())+(shaka_player_dist_controls_css__WEBPACK_IMPORTED_MODULE_7___default());


let SPRITE_SHEET = (plyr_dist_plyr_svg__WEBPACK_IMPORTED_MODULE_8___default());

class AppAudioViewer extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(LitCorkUtils) {
  
  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.render = _app_audio_viewer_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this._injectModel('AppStateModel', 'MediaModel');
    this.libsLoaded = false;
  }

  _onAppStateUpdate(e) {
    if ( this.fullPath !== e.location.fullpath ) { 
      this._stop();
    }

    this.fullPath = e.location.fullpath;
  }

  async firstUpdated(e) {
    this.$.audio  = this.shadowRoot.getElementById('audio_player');
    this.$.poster = this.shadowRoot.getElementById('audio_poster');

    let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
    if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);

    this.fullPath = (await this.AppStateModel.get()).location.fullpath;
    
    // webpack module is base64 encoded URL, check if this happened 
    // and decode, then set svg to innerHtml inside the shadow dom.
    if( SPRITE_SHEET.indexOf('data:image/svg+xml;base64') > -1 ) {
      SPRITE_SHEET = atob(SPRITE_SHEET.replace('data:image/svg+xml;base64,', ''));
    }
    this.shadowRoot.querySelector('#sprite-plyr').innerHTML = SPRITE_SHEET;

    // decide where to put css
    // The PLYR library isn't aware of shadydom so we need to manually
    // place our styles in document.head w/o shadydom touching them.
    let plyrStyles = document.createElement('style');
    plyrStyles.innerHTML = AUDIO_STYLES;
    if( window.ShadyDOM && window.ShadyDOM.inUse ) {
      document.head.appendChild(plyrStyles);
      this.hideControls = false;
    } else {
      this.shadowRoot.appendChild(plyrStyles);
      this.hideControls = true;
    }
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateModel, called when a records media is selected
   * 
   * @param {Object} media 
  **/
  async _onSelectedRecordMediaUpdate(media) {
    if( !media ) return;
    if ( _lib_utils__WEBPACK_IMPORTED_MODULE_4___default().getMediaType(media) !== 'AudioObject' ) return;

    this.media = media;

    if( this.libsLoaded ) {
      this._loadAudio();
      return;
    }

    // dynamically load plyr and shaka libs
    let {plyr} = await _lib_utils_video_lib_loader__WEBPACK_IMPORTED_MODULE_5__["default"].load();

    this.audioPlayer = new plyr(this.$.audio, {
      fullscreen : {enabled: false},
      captions: {update: false},
      controls : ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume']
    });

    this.style.display = 'block';
    this.libsLoaded = true;
    this._loadAudio();
  }

  _loadAudio() {
    let sourceEle = this.shadowRoot.querySelector('#audio_player source');
    sourceEle.src = (_lib_config__WEBPACK_IMPORTED_MODULE_3___default().fcrepoBasePath)+this.media['@id'];
    sourceEle.type = this.media.fileFormat || this.media.hasMimeType || this.media.encodingFormat || '';
    
    // FF Hack.  Range slider not going back to 0 on stop
    try {
      this.audioPlayer.stop();
      let ele = this.shadowRoot.querySelector('input[type="range"][data-plyr="seek"]');
      if( ele ) ele.value = 0;
    } catch(e) {}

    this.shadowRoot.querySelector('#audio_player').load();

    let poster = this.media.thumbnailUrl  ? this.media.thumbnailUrl+'/svc:iiif/full/,400/0/default.jpg' : '';
    if ( poster ) {
      this.$.poster.style.display = 'block';
      this.$.poster.style.backgroundImage = "url(" + poster + ")";
    } else {
      this.$.poster.style.display = 'none';
    }
  }

  /**
   * Stop playback and reset to start
   **/
  _stop() {
    if( !this.audioPlayer ) return;
    this.audioPlayer.stop();
  }
}

customElements.define('app-audio-viewer', AppAudioViewer);

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-audio-viewer.tpl.js":
/*!*********************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-audio-viewer.tpl.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! plyr/dist/plyr.css */ "./public/node_modules/plyr/dist/plyr.css");
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_1__);



function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
<style>
  :host {
    display: none;
    padding: 20px;
    background: black;
    box-sizing: border-box;
  }

  .container {
    display: block;
    width: 100%;
  }

  #audio_poster {
    display: none;
    margin: 0 auto;
    margin-bottom: 10px;
    max-width: 400px;
    height: 400px;
    border: 1px solid black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .layout {
    display: flex;
    justify-content: center;
  }

  .plyr--audio {
    max-width: 500px !important;
    width: 100%;
    border-radius: 5px;
  }

  .plyr--full-ui input[type=range] {
    color: #daaa00 !important;
  }

  button.plyr__control.plyr__control--overlaid,
  button.plyr__control.plyr__control:hover {
    background: rgba(218,170,0,1.0);
  }

  @media(max-width: 768px) {

  }

  ${(plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_1___default())}
</style>
<div class="container">
  <div id="sprite-plyr" style="display: none;"></div>
  <div id="audio_poster"></div>

  <div class="layout">
    <audio id="audio_player" controls>
      <source>
    </audio>
  </div>

</div>
`
}

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-fs-viewer.js":
/*!**************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-fs-viewer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppFsViewer)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _app_fs_viewer_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-fs-viewer.tpl.js */ "./public/elements/pages/record/viewer/app-fs-viewer.tpl.js");
/* harmony import */ var _utils_app_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/app-virtual-scroller */ "./public/elements/utils/app-virtual-scroller.js");
/* harmony import */ var _polymer_iron_icons_editor_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-icons/editor-icons */ "./public/node_modules/@polymer/iron-icons/editor-icons.js");
/* harmony import */ var _ucd_lib_fin_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ucd-lib/fin-icons */ "./public/node_modules/@ucd-lib/fin-icons/fin-icons.js");
/* harmony import */ var bytes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bytes */ "./public/node_modules/bytes/index.js");
/* harmony import */ var bytes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bytes__WEBPACK_IMPORTED_MODULE_5__);







const ICONS = {
  'folder' : ['folder'],
  'fin-icons:image-solid' : ['tif', 'tiff', 'gif', 'jpg', 'jp2', 'jpeg', 'webp', 'bmp', 'png'],
  'fin-icons:video-solid' : ['avi', 'mp4', 'flv', 'wmv', 'mov'],
  'fin-icons:sound-solid' : ['wav', 'mp3', 'mid', 'aif'],
  'fin-icons:text-solid' : ['doc', 'docx', 'txt', 'rtf', '.odt'],
  'fin-icons:spreadsheet-solid' : ['ods', 'csv', 'tsv', 'xsl', 'xslx'],
  'fin-icons:pdf-solid' : ['pdf'],
  'fin-icons:compressed-solid' : ['zip', 'rar', 'arj', 'gz', 'tgz']
}
const UNKNOWN_ICON = 'fin-icons:file-solid';

class AppFsViewer extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      title : {type: String},
      loadingFiles : {type: Boolean},
      loadingSearch : {type: Boolean},
      currentDir : {type: String},
      files : {type: Array},
      selectedFile : {type: String},
      mode : {type: String},
      thumbnail : {type: String},
      lineHeight : {type: Number},
    }
  }

  constructor() {
    super();
    this.render = _app_fs_viewer_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.reset();

    this._injectModel('AppStateModel', 'RecordModel');

    this.iconMap = {};
    for( let icon in ICONS ) {
      for( let ext of ICONS[icon] ) {
        this.iconMap[ext] = icon;
      }
    }

    window.addEventListener('resize', () => this._onResize());
  }

  firstUpdated() {
    this.contentBody = this.shadowRoot.querySelector('.content-body');
    this.scrollPanel = this.shadowRoot.querySelector('app-virtual-scroller');
    this.scrollPanel.setItemRenderer(this.renderRow, this);

    this.parentNode.removeChild(this);
    document.body.appendChild(this);

    this.filenameWidth = '30px';

    // setTimeout(() => {
    //   this.show();
    // }, 1000)
    
  }

  updated(props) {
    if( props.has('selectedFile') ) {
      for( let file of this.files ) {
        file.selected = (file.fullUrl === this.selectedFile);
      }
      this.scrollPanel.requestUpdate();
    }
  }

  // connectedCallback() {
  //   super.connectedCallback();
  //   this.background = this.querySelector('#background');
  //   this.background.style.display = 'none';
  //   this.shadowRoot.removeChild(this.background);
  //   document.body.appendChild(this.background);
  // }

  _onResize() {
    if( !this.contentBody ) return;
    // this.scrollPanel.style.height = (this.contentBody.offsetHeight - 175)+'px';

    let baseHeight = 335;
    if( window.innerWidth > 700 ) {
      this.scrollPanel.style.height = (window.innerHeight - baseHeight - 100)+'px';
    } else {
      this.scrollPanel.style.height = (window.innerHeight - baseHeight)+'px';
    }

    
    this.filenameWidth = ( this.scrollPanel.offsetWidth - 155 )+'px';
    this.scrollPanel.requestUpdate();
  }

  _onAppStateUpdate(e) {
    if( this.selectedRecord === e.selectedRecord ) return;
    if( !e.selectedRecord ) {
      return this.reset();
    }

    this.reset();

    this.selectedRecord = e.selectedRecord;
    this.selectedRecordMedia = e.selectedRecordMedia;

    if( this.selectedRecord && this.selectedRecord['@type'].includes('http://digital.ucdavis.edu/schema#BagOfFiles') ) {
      this._browseDirectory();
      this.title = this.selectedRecord.name || this.selectedRecord.title;
      this.thumbnail = this.selectedRecord.thumbnailUrl || '';
    }
  }

  async show() {
    this.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    this._onResize();

    this._onAppStateUpdate(await this.AppStateModel.get());

    setTimeout(() => {
      this._onResize();
      this.scrollPanel._onResize();
    }, 50);
  }

  hide() {
    this.style.display = 'none'
    document.body.style.overflow = 'auto';
  }

  reset() {
    this.selectedRecord = null;
    this.loadingFiles = false;
    this.loadingSearch = false;
    this.currentDir = '/';
    this.files = [];
    this.lineHeight = 41;
    this.selectedFile = '';
  }

  _renderBreadcrumbs() {
    if( this.mode === 'search' ) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`<iron-icon icon="chevron-right"></iron-icon>
      <span class="breadcrumb">Search Results</span>`;
    }

    let fullDirPath = [];

    return this.currentDir
      .replace(/^\//, '')
      .split('/')
      .map(dir =>  {
        fullDirPath.push(dir) 
        if( dir === '' ) return lit_element__WEBPACK_IMPORTED_MODULE_0__.html``;

        return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`<iron-icon icon="chevron-right"></iron-icon>
        <a class="breadcrumb" @click="${this._onBreadcrumbClicked}" dir="${'/'+fullDirPath.join('/')}">${dir}</a>`
      });
  }

  renderRow(index) {
    let file = this.files[index];
    let icon = this._getIcon(file);

    return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
      <div class="row" style="height: ${this.lineHeight-1}px" ?directory="${file.isDirectory}" ?selected="${file.selected}" index="${index}" @click="${this._onItemClicked}" .context="${this}">
        <div>
          <div class="icon">
            <iron-icon icon="${icon}"></iron-icon>
          </div>
          <div class="file" style="width: ${this.filenameWidth}">
            <div class="filename">${file.filename}</div>
            <div class="directory" ?hidden="${this.mode === 'browse'}">${file.directory || '/'}</div>
          </div>
          <div class="filesize">${file.fileSize !== undefined ? bytes__WEBPACK_IMPORTED_MODULE_5___default()(file.fileSize) : '-'}</div>
          <div class="selected-file">
            <iron-icon icon="check" ?hidden="${!file.selected}"></iron-icon>
          </div>
        </div>
      </div>
    `
  }

  _getIcon(file) {
    let ext = file.isDirectory ? 'folder' : (file.filename || '').split('.').pop();
    let icon = this.iconMap[ext];
    if( icon ) return icon;
    return UNKNOWN_ICON;
  }

  _onItemClicked(e) {
    let index = parseInt(e.currentTarget.getAttribute('index'));
    
    // stupid hack, let html always scopes events to render host
    let $this = e.currentTarget.context;
    let file = $this.files[index];

    if( file.isDirectory ) {
      $this._browseDirectory(file['@id'].replace($this.selectedRecord['@id'], ''));
    } else {
      $this.selectedFile = file.fullUrl;
    }
  }

  _onInputKeyup(e) {
    let text = e.currentTarget.value;

    if( this._autocompleteTimer ) {
      clearTimeout(this._autocompleteTimer);
    }
    this._autocompleteTimer = setTimeout(() => {
      this._autocompleteTimer = null;
      this._typeaheadSearch(text);
    }, 300);
  }

  async _typeaheadSearch(text) {
    this.typeaheadSearchText = text;
    if( text === '' ) {
      this.files = [];
      this._browseDirectory();
      return;
    }

    this.mode = 'search';
    this.lineHeight = 52;
    this.selectedFile = '';

    let searchDoc = {
      text,
      filters : {
        'collectionId' : {
          type: 'keyword',
          value: [this.selectedRecord.collectionId],
          op: 'or'
        },
        '@id' : {
          type : 'prefix',
          value : this.selectedRecord['@id']
        }
      },
      sort : null,
      limit: 9999,
      offset: 0,
      facets: {},
      textFields : ['filename']
    }

    let resp = await this.RecordModel.typeaheadSearch(searchDoc, {allRecords: true});
    if( this.typeaheadSearchText !== text ) return;

    this.setFiles(resp.payload.results, false);
  }

  async _browseDirectory(dir) {
    if( this.mode === 'browse' && this.currentDir === dir ) return;

    this.mode = 'browse';
    this.lineHeight = 45;
    this.shadowRoot.querySelector('#searchInput').value = '';
    this.selectedFile = '';

    if( !dir ) {
      if( this.currentDir ) dir = this.currentDir;
      else dir = '/';
    }

    this.currentDir = dir;

    let searchDoc = {
      filters : {
        // 'collectionId' : {
        //   type: 'keyword',
        //   value: [this.selectedRecord.collectionId],
        //   op: 'or'
        // },
        'directParent' : {
          type : 'keyword',
          value : [this.selectedRecord['@id']+this.currentDir.replace(/\/$/, '')],
          op : 'or'
        }
      },
      sort : null,
      limit: 9999,
      offset: 0,
      facets: {},
      textFields : []
    }

    let resp = await this.RecordModel.typeaheadSearch(searchDoc, {debug: true, allRecords: true});
    this.setFiles(resp.payload.results);
  }

  setFiles(files, sort=true) {
    files = files.map(file => {
      file.directory = file.directParent.replace(this.selectedRecord['@id'], '');
      if( file['@type'].includes('http://fedora.info/definitions/v4/repository#Binary') ) {
        file.isFile = true;
      } else {
        file.isDirectory = true;
        file.filename = file['@id'].split('/').pop();
      }
      file.fullUrl = this._getFullFileUrl(file);
      file.selected = (file.fullUrl === this.selectedFile);
      return file;
    });

    if( sort ) {
      files.sort((a,b) => a.filename.toLowerCase() > b.filename.toLowerCase() ? 1 : -1);
    }

    this.files = files;
  }

  _getFullFileUrl(file) {
    return window.location.protocol + '//' + window.location.host + '/fcrepo/rest' + file['@id'];
  }

  _onClearSearchClicked() {
    this._browseDirectory(this.currentDir);
  }

  _onBreadcrumbClicked(e) {
    this._browseDirectory(e.currentTarget.getAttribute('dir'));
  }

}

customElements.define('app-fs-viewer', AppFsViewer);


/***/ }),

/***/ "./public/elements/pages/record/viewer/app-fs-viewer.tpl.js":
/*!******************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-fs-viewer.tpl.js ***!
  \******************************************************************/
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
    position: absolute;
    z-index: 10000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    /* animation: 300ms linear fs-viewer-animate-in; */
  }

  @keyframes fs-viewer-animate-in {
    0% {
      transform: scale(1.2);
      opacity: 0.5
    }
    100% {
      transform: scale(1);
      opacity: 1
    }
  }

  .layout {
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
  }

  .content {
    margin: 50px 0;
    height: calc(100vh - 100px);
    width: 700px;
    background-color: var(--super-light-background-color);
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin: 0;
  }

  .content-body {
    flex: 1;
    padding: 20px;
  }

  .header-layout {
    color: var(--default-primary-color);
    background-color: var(--light-background-color);
    padding: 20px;
    display: flex;
  }

  .header-image {
    margin-right: 20px;
  }

  .header-image .img, .header-image iron-icon[icon="fin-icons:various-outline-stacked"] {
    height: 100px;
    width: 100px;
  }

  #searchInput {
    font-size: 16px;
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    padding: 0 5px;
    background: white;
    border: none;
    height: 45px;
    outline: none;
    background-color: white;
    border-radius: 0;
  }

  .row {
    /* height: 100%; */
  }

  .vs-row[hover] {
    background-color: var(--color-light-yellow);
  }

  .row {
    cursor: pointer;
    /* background-color: var(--color-light-yellow); */
  }

  .row > div {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 8px;
    border-bottom: 1px solid var(--medium-background-color);
  }

  .row[selected] {
    background-color: var(--color-light-yellow);
  }

  .row .directory {
    font-size: 11px; 
    line-height: 12px; 
    color: #888;
    margin-bottom: 6px;
  }

  .row .icon {
    width: 30px;
  }

  .row .filesize {
    width: 75px;
  }

  .row .icon, .row .filesize {
    padding: 6px 0;
  }

  /* .row .file {
    flex: 1;
  } */

  .row .directory, .row .filename {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .row .selected-file {
    width: 25px;
  }

  button.search {
    background-color: white;
    color: var(--default-secondary-color);
    border: none;
    margin: 0;
    padding: 5px;
    height: 45px;
  }

  iron-icon[icon="home"] {
    cursor: pointer;
    color: var(--default-secondary-color);
  }

  iron-icon[icon="chevron-right"] {
    color: var(--medium-background-color);
  }

  iron-icon[icon="folder"] {
    color: var(--color-aggie-blue);
  }
  iron-icon[icon="fin-icons:image-solid"] {
    color: var(--color-aggie-gold);
  }
  iron-icon[icon="fin-icons:video-solid"] {
    color: var(--color-pinot);
  }
  iron-icon[icon="fin-icons:sound-solid"] {
    color: var(--color-redbud);
  }
  iron-icon[icon="fin-icons:text-solid"] {
    color: var(--color-putah-creek);
  }
  iron-icon[icon="fin-icons:spreadsheet-solid"] {
    color: var(--color-quad);
  }
  iron-icon[icon="fin-icons:pdf-solid"] {
    color: var(--double-decker);
  }
  iron-icon[icon="fin-icons:compressed-solid"] {
    color: var(--color-poppy);
  }
  iron-icon[icon="fin-icons:file-solid"] {
    color: var(--color-grey);
  }
  iron-icon[icon="check"] {
    color: var(--default-secondary-color);
  }

  .table-header {
    display: flex;
    font-size: var(--fs-p);
    color: var(--color-grey);
    font-style: italic;
    padding: 10px 0;
  }

  .table-header > div {
    padding-left: 5px;
  }

  .breadcrumbs {
    color: var(--default-primary-color);
  }

  .breadcrumbs .breadcrumb {
    cursor: pointer;
  }

  app-virtual-scroller {
    flex: 1;
    background-color: white;
  }

  .break {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed var(--medium-background-color);
  }

  .footer {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  .cancel-btn {
    border: 1px solid var(--default-secondary-color);
    color: var(--default-primary-color);
    padding: 6px 10px;
    margin: 0 15px 0 0;
    background-color: transparent;
    border-radius: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 20px;
    cursor: pointer;
  }

  .download-btn {
    border: 1px solid var(--default-secondary-color);
    background-color: var(--default-secondary-color);
    color: var(--default-primary-color);
    padding: 6px 10px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
  }
  .download-button:visited {
    color: var(--default-primary-color);
  }

  a[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 700px) {
    .content {
      margin: 0;
      flex: 1;
      width: 100%;
      height: calc(100vh);
    }
  }
</style>

<div class="layout">
<div class="content">

  
    <div class="header-layout">
      <div class="header-image">
        <iron-icon icon="fin-icons:various-outline-stacked" ?hidden="${this.thumbnail}"></iron-icon>
        <div class="img" style="background-image: url(${this.thumbnail}); background-size: cover; background-position: center center;" ?hidden="${!this.thumbnail}" ></div>
      </div>
      <div style="flex:1">
        <h2>${this.title}</h2>
        <div>${this.files.length} files</div>
        <div style="display: flex">
          <input id="searchInput" type="text" placeholder="Search Files" @keyup="${this._onInputKeyup}" />
          <button class="search">
            <iron-icon icon="${this.mode === 'search' ? 'close' : 'fin-icons:search'}" @click="${this._onClearSearchClicked}"></iron-icon>
          </button>
        </div>
      </div>
    </div>

    <div class="content-body">
      <div class="breadcrumbs">
        <iron-icon icon="home" @click="${this._onBreadcrumbClicked}" dir="/"></iron-icon>
        ${this._renderBreadcrumbs()}
      </div>

      <div class="break"></div>

      <div class="table-header">
        <div style="flex:1">Name</div> 
        <div style="width: 115px">Size</div>
      </div>
      <app-virtual-scroller item-height="${this.lineHeight}" .items="${this.files}"></app-virtual-scroller>

      <div class="footer">
        <div style="flex: 1"></div>
        <div>
          <button class="cancel-btn" @click="${this.hide}">Cancel</button>
        </div>
        <div>
          <a class="download-btn" ?disabled="${!this.selectedFile}" href="${this.selectedFile}" target="_blank">Download</a>
        </div>
      </div> <!-- footer -->
    </div>


</div> <!-- content -->
</div> <!-- layout -->

`;}

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-image-viewer-lightbox.js":
/*!**************************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-image-viewer-lightbox.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppImageViewer)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_image_viewer_lightbox_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-image-viewer-lightbox.html */ "./public/elements/pages/record/viewer/app-image-viewer-lightbox.html");
/* harmony import */ var _app_image_viewer_lightbox_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_image_viewer_lightbox_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polymer_paper_spinner_paper_spinner_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner-lite */ "./public/node_modules/@polymer/paper-spinner/paper-spinner-lite.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./public/node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./public/node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../interfaces/AppStateInterface */ "./public/elements/interfaces/AppStateInterface.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../interfaces/MediaInterface */ "./public/elements/interfaces/MediaInterface.js");
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../lib/config */ "./public/lib/config.js");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_config__WEBPACK_IMPORTED_MODULE_7__);











class AppImageViewer extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
  .with(EventInterface, (_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_5___default()), (_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_6___default())) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = `<style>${(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4___default())}</style>${(_app_image_viewer_lightbox_html__WEBPACK_IMPORTED_MODULE_1___default())}`;
    return tag;
  }

  properties() {
    return {
      bounds : {
        type : Array,
        value : null
      },
      maxImageSize : {
        type : Number,
        value : 2048
      },
      media : {
        type : Object,
        value : () => {}
      },
      visible : {
        type : Boolean,
        value : false
      },
      loading : {
        type : Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;

    window.addEventListener('keyup', (e) => {
      if( this.visible && e.which === 27 ) this.hide();
    });
  }

  async ready() {
    super.ready();
    
    this.parentElement.removeChild(this);
    document.body.appendChild(this);

    this.shadowRoot.removeChild(this.$.safeCover);
    document.body.appendChild(this.$.safeCover);

    let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
    if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   */
  _onAppStateUpdate(e) {
    if( e.showLightbox && !this.visible ) {
      this.show();
    } else if( !e.showLightbox && this.visible ) {
      this.hide();
    }
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    this.media = media;
    if( this.visible ) this.render();
  }

  /**
   * @method show
   */
  async show() {
    this.visible = true;
    this.style.display = 'block';
    this.$.safeCover.style.display = 'block';

    document.querySelector('fin-app').style.display = 'none';
    document.body.style.overflow = 'hidden';
    window.scrollTo(0,0);

    this.render();

    setTimeout(() => {
      this.$.nav._resize();
      this.$.nav.setFocus();
    }, 25);
  }

  /**
   * @method hide
   */
  async hide() {
    this.visible = false;
    this.style.display = 'none';
    this.$.safeCover.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.querySelector('fin-app').style.display = 'block';
  }

  /**
   * @method _loadImage
   * @description preload image and set bounds to image dimensions
   * 
   * @param {String} url url of image to load
   * 
   * @returns {Promise} resolves when image is loaded and bounds array has been set
   */
   _loadImage(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();

      img.onload = () => {
        let res = [img.naturalHeight, img.naturalWidth];
        this.bounds = [[0,0], res];
        resolve();
      };

      img.src = url;
    });
  }

  /**
   * @method render
   * @description render leaflet canvas based on fedora id
   * 
   */
  async render() {
    if( this.renderedMedia === this.media ) return;

    this.renderedMedia = this.media;
    let id = this.renderedMedia['@id'];
    if ( this.renderedMedia.associatedMedia && this.renderedMedia.media.imageList ) {
      id = this.renderedMedia.image.url;
    }
    
    let url = this._getImgUrl(id, '', '');

    // used to check state below
    this.loadingUrl = url;

    this.loading = true;
    if( this.imageOverlay ) {
      this.renderedUrl = '';
      this.viewer.removeLayer(this.imageOverlay);
      this.imageOverlay = null;
    }

    await this._loadImage(url);

    // check that we 
    //  - didn't have a new request that took longer than an old request
    //  - that we didn't already render this url
    if( url !== this.loadingUrl ) return;
    if( url === this.renderedUrl ) return;

    this.renderedUrl = url;

    this.loading = false;

    if( !this.viewer ) {
      this.viewer = L.map(this.$.viewer, {
        crs: L.CRS.Simple,
        minZoom: -4,
        zoomControl : false
      });
    }

    this.imageOverlay = L.imageOverlay(url, this.bounds).addTo(this.viewer);
    this.viewer.fitBounds(this.bounds);

    this.shadowRoot.querySelector('.leaflet-control-attribution').style.display = 'none';
  }

  /**
   * @method _onCloseClicked
   * @description bound to view nav close event
   */
  _onCloseClicked() {
    this.AppStateModel.set({showLightbox: false});
  }

  /**
   * @method _onZoomInClicked
   * @description bound to view nav zoom-in event
   */
  _onZoomInClicked() {
    this.viewer.zoomIn();
  }

  /**
   * @method _onZoomOutClicked
   * @description bound to view nav zoom-out event
   */
  _onZoomOutClicked() {
    this.viewer.zoomOut();
  }

}

customElements.define('app-image-viewer-lightbox', AppImageViewer);

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-image-viewer.js":
/*!*****************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-image-viewer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppImageViewer)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner-lite */ "./public/node_modules/@polymer/paper-spinner/paper-spinner-lite.js");
/* harmony import */ var _app_image_viewer_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-image-viewer.html */ "./public/elements/pages/record/viewer/app-image-viewer.html");
/* harmony import */ var _app_image_viewer_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_image_viewer_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/utils */ "./public/lib/utils/index.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../interfaces/AppStateInterface */ "./public/elements/interfaces/AppStateInterface.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../interfaces/MediaInterface */ "./public/elements/interfaces/MediaInterface.js");
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_5__);









class AppImageViewer extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
  .with(EventInterface, (_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_4___default()), (_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_5___default())) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_image_viewer_html__WEBPACK_IMPORTED_MODULE_2___default());
    return tag;
  }

  static get properties() {
    return {
      record : {
        type : Object,
        value : () => {}
      },
      media : {
        type : Object,
        value : () => {}
      },
      loading: {
        type : Boolean,
        value : false
      },
      height : {
        type : Number,
        value : 600
      },
      hasMultipleImages : {
        type : Boolean,
        value : false
      },
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  async ready() {
    super.ready();

    let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
    if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    if( !media ) return;
    let getMediaType = _lib_utils__WEBPACK_IMPORTED_MODULE_3___default().getMediaType(media);
    if (getMediaType !== 'ImageList' && getMediaType !== 'ImageObject') return;

    this.media = media;
    this._renderImg();
  }

  _renderImg() {
    if ( this.media.hasPart && this.media.hasPart.length > 0 ) {
      this.media.image = this.media.hasPart[0].image;
    }

    // TODO: Justin please review.  Fixes the problem w/the height being too large since 
    //       the problem seems to originate in this.height 
    //       being set to 600 in this component's properties.
    if ( this.media.image.width < this.height) this.height = this.media.image.width;
    let url = this._getImgUrl(this.media.image.url, '', this.height);
    let r = 600 / this.media.image.height;
    let w = this.media.image.width * r;

    let eleWidth = this.offsetWidth-20;
    if ( eleWidth < 1 ) eleWidth = 1;

    let startHeight = Math.ceil(eleWidth > w ? this.height : ((eleWidth/w)*this.height));

    let img = new Image();
    this.loading = true;
    
    this.$.loading.style.height = startHeight+'px';
    
    img.onload = () => {
      this.loading = false;
      this.$.img.style.height = 'auto';
    };
    img.src = url;

    this.$.img.style.maxWidth = w + 'px';
    this.$.img.src = url;
  }
}

customElements.define('app-image-viewer', AppImageViewer);

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-media-viewer-nav.js":
/*!*********************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-media-viewer-nav.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppMediaViewerNav)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_media_viewer_nav_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-media-viewer-nav.html */ "./public/elements/pages/record/viewer/app-media-viewer-nav.html");
/* harmony import */ var _app_media_viewer_nav_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_media_viewer_nav_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/AppStateInterface */ "./public/elements/interfaces/AppStateInterface.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces/MediaInterface */ "./public/elements/interfaces/MediaInterface.js");
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _polymer_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button */ "./public/node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _utils_app_share_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/app-share-btn */ "./public/elements/utils/app-share-btn.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/utils */ "./public/lib/utils/index.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_utils__WEBPACK_IMPORTED_MODULE_6__);










class AppMediaViewerNav extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
  .with(EventInterface, (_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_2___default()), (_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3___default())) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_media_viewer_nav_html__WEBPACK_IMPORTED_MODULE_1___default());
    return tag;
  }

  static get properties() {
    return {
      // thumbnail width w/ border and margin
      totalThumbnailWidth : {
        type : Number,
        value : 64,
      },
      icon: {
        type: String,
        value: ''
      },
      iconWidth : {
        type : Number,
        value : 40
      },
      thumbnails : {
        type : Array,
        value : () => []
      },
      thumbnailsPerFrame : {
        type : Number,
        value : 10
      },
      leftMostThumbnail : {
        type : Number,
        value : 0
      },
      breakControls : {
        type : Boolean,
        value : false,
        reflect: true,
        notify : true
      },
      showNavLeft : {
        type : Boolean,
        value : false
      },
      showNavRight : {
        type : Boolean,
        value : false
      },
      isLightbox : {
        type : Boolean,
        value : false
      },
      singleImage : {
        type : Boolean,
        value : false,
        reflectToAttribute: true
      },
      mediaList : {
        type : Array,
        value : () => []
      },
      showOpenLightbox : {
        type: Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;

    window.addEventListener('resize', () => this._resize());
    window.addEventListener('touchend', (e) => this._onTouchEnd(e));
    window.addEventListener('touchcancel', (e) => this._onTouchEnd(e));
    window.addEventListener('touchmove', (e) => this._onTouchMove(e));
    this.addEventListener('touchstart', (e) => this._onTouchStart(e));
  }

  connectedCallback() {
    super.connectedCallback();
    this._resize();
  }

  async ready() {
    super.ready();
    let selectedRecord = await this.AppStateModel.getSelectedRecord();
    if( selectedRecord ) {
      this._onSelectedRecordUpdate(selectedRecord);
      let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
      if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
    }
  }

  _onAppStateUpdate(e) {
    if( e.mediaViewerNavLeftMostThumbnail === undefined ) return;
    if( e.mediaViewerNavLeftMostThumbnail === this.leftMostThumbnail ) return;
    this.leftMostThumbnail = e.mediaViewerNavLeftMostThumbnail;
    this._resize();
  }

  /**
   * @method _onTouchEnd
   * @description bound to window touch end/cancel events. if we are
   * performing a touch (swipe) action, see if we have reached the 
   * threshold for swipe and if so, page left/right
   *  
   * @param {Object} e HTML touch event
   */
  _onTouchEnd(e) {
    if( !this.touchAction ) return;
    this.touchAction = false;

    let diff = this.touchStartX - this.touchCurrentX;
    let sdiff = Math.abs(diff);

    if( sdiff > this.totalThumbnailWidth / 2 ) {
      if( diff < 0 ) this._pageLeft();
      else this._pageRight();
    }
  }

  /**
   * @method _onTouchMove
   * @description bound to windows touch move event. if we are performing 
   * a touch (swipe) action, need to keep track of current x offset
   * 
   * @param {Object} e HTML touch event
   */
  _onTouchMove(e) {
    if( !this.touchAction ) return;
    this.touchCurrentX = e.touches[0].clientX;
  }

  /**
   * @method _onTouchStart
   * @description bound to this elements touchstart event.
   * start performing a touch (swipe) action
   * 
   * @param {Object} e HTML touch event
   */
  _onTouchStart(e) {
    this.touchAction = true;
    this.touchStartX = e.touches[0].clientX;
    this.touchCurrentX = e.touches[0].clientX;
  }

  /**
   * @method _resize
   * @description update thumbnail preview on resize
   * 
   */
  _resize() {
    // let w = this.offsetWidth;
    let w = window.innerWidth;
    
    // grrrr
    if( w === 0 ) {
      // console.log('Ignoreing resize')
      // setTimeout(() => this._resize(), 200);
      return;
    }

    w -= 16; // padding

    this._setNavBreak(w);

    let iconsWidth;
    if( this.breakControls ) {
      iconsWidth = this.iconWidth * 2;
    } else {
      iconsWidth = this.iconWidth * 4;
      if( this.isLightbox ) iconsWidth += this.iconWidth * 2;
    }

    let availableThumbSpace = Math.min(w - iconsWidth, 512);
    this.thumbnailsPerFrame = Math.max(Math.floor(availableThumbSpace / this.totalThumbnailWidth), 1);
    this.$.thumbnails.style.width = (this.thumbnailsPerFrame*this.totalThumbnailWidth)+'px';

    this.showNavLeft = (this.leftMostThumbnail !== 0);
    this.showNavRight = !this._showingLastThumbFrame();

    this._updateThumbnailContainerPos();
  }

  _getTotalIconWidth() {
    let totalIconWidth = this.iconWidth * 4; // nav icons and default icons
    if( this.isLightbox ) totalIconWidth += this.iconWidth * 2;
    return totalIconWidth;
  }

  _setNavBreak(width) {
    let totalIconWidth = this.iconWidth * 4; // nav icons and default icons
    if( this.isLightbox ) totalIconWidth += this.iconWidth * 2;

    if( totalIconWidth + (this.totalThumbnailWidth * 4) > width ) {
      this.breakControls = true;
    } else {
      this.breakControls = false;
    }
  }

  _pageLeft() {
    this.leftMostThumbnail = this.leftMostThumbnail - this.thumbnailsPerFrame;
    if( this.leftMostThumbnail < 0 ) this.leftMostThumbnail = 0;
    this._resize();
    this.AppStateModel.set({mediaViewerNavLeftMostThumbnail: this.leftMostThumbnail});
  }

  _pageRight() {
    if( this._showingLastThumbFrame() ) return;
    this.leftMostThumbnail = this.leftMostThumbnail + this.thumbnailsPerFrame;
    this._resize();
    this.AppStateModel.set({mediaViewerNavLeftMostThumbnail: this.leftMostThumbnail});
  }

  _showingLastThumbFrame() {
    if( this.leftMostThumbnail + this.thumbnailsPerFrame > this.thumbnails.length-1 ) {
      return true;
    }
    return false;
  }

  _updateThumbnailContainerPos() {
    // that +1 is a hack, what am I missing !?
    this.$.thumbnailInnerContainer.style.marginLeft = (-1 * this.leftMostThumbnail * (this.totalThumbnailWidth + 1)) + 'px';

    let lastThumb = this.leftMostThumbnail + this.thumbnailsPerFrame;
    this.thumbnails.forEach((thumbnail, index) => {
      this.set(`thumbnails.${index}.disabled`, (index < this.leftMostThumbnail || index >= lastThumb));
    });
  }

  /**
   * @method _onSelectedRecordUpdate
   * @description from AppStateInterface, called when a record is selected
   * 
   * @param {Object} record selected record
   */
  _onSelectedRecordUpdate(record) {
    this.leftMostThumbnail = 0;

    if( !record ) {
      this.singleImage = true;
      return;
    }
    
    if (_lib_utils__WEBPACK_IMPORTED_MODULE_6___default().countMediaItems(record.media) === 1) {
      this.singleImage = true;
      return;
    }

    this.mediaList = _lib_utils__WEBPACK_IMPORTED_MODULE_6___default().flattenMediaList(record.media);
    this.mediaList = _lib_utils__WEBPACK_IMPORTED_MODULE_6___default().organizeMediaList(this.mediaList);

    this.thumbnails = this.mediaList.map(media => {
      let {fileType, iconType} = this._getFileAndIconType(media);

      if( this.isLightbox && fileType !== 'image' ) {
        return null;
      }

      let thumbnailUrl = media.thumbnailUrl;
      if( thumbnailUrl && !thumbnailUrl.match(/\/svc:iiif\//) ) {
        thumbnailUrl += '/svc:iiif/full/,50/0/default.jpg';
      }

      let thumbnail = {
        id: media['@id'],
        icon: iconType,
        position: media.position,
        selected: false,
        disabled: false,
        src: thumbnailUrl 
        // thumbnail: url
      }

      return thumbnail;
    })
    .filter(item => item ? true : false)
    // TODO: Filtering out the text based files for now until we get the PDF/text viewer set up correctly
    .filter(element => element.icon !== 'blank-round');

    this.singleImage = (this.thumbnails.length !== 0 && this.thumbnails.length > 1) ? false : true;
    this._resize();

    this.AppStateModel.set({mediaViewerNavLeftMostThumbnail: 0});
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    this.media = media;
    if( !media ) return;

    this.thumbnails.forEach((thumbnail, index) => {
      this.set(`thumbnails.${index}.selected`, (this.media['@id'] === thumbnail.id));
    });

    let {fileType, iconType} = this._getFileAndIconType(media);
    
    this.showOpenLightbox = (fileType === 'image') ? true : false;
  }

  _getFileAndIconType(media) {
    let _file = '';
    let fileType   = _file;
    let fileFormat = _file;
    let iconType   = '';

    if (media.fileFormat || media.encodingFormat) {
      _file = (media.fileFormat ? media.fileFormat : media.encodingFormat);

      
      fileType   = _file.split('/').shift();
      fileFormat = _file.split('/').pop();
    }

    let type = _lib_utils__WEBPACK_IMPORTED_MODULE_6___default().getMediaType(media);
    if (type === 'AudioObject' || fileType === 'audio') iconType = 'sound-round';
    else if (type === 'VideoObject' || type === 'StreamingVideo' || fileType === 'video') iconType = 'video-round';
    else if (fileFormat === 'pdf') iconType = 'blank-round';
    // TODO: Get back to this
    else if (fileType === '360')   iconType = '360-round';

    return {fileType, iconType};
  }

  /**
   * @method _onThumbnailClicked
   * @description bound to thumbnail click event.  select a media object
   * 
   * @param {Object} e HTML click event
   */
  _onThumbnailClicked(e) {
    let id = e.currentTarget.getAttribute('media-id');
    this.AppStateModel.setLocation(id);
  }

  /**
   * @method _onZoomInClicked
   * @description bound to zoom icon click event.  emit zoom event
   * 
   * @param {Object} e HTML click event
   */
  _onZoomInClicked(e) {
    this.dispatchEvent(new CustomEvent('zoom-in'));
  }

  /**
   * @method _onZoomOutClicked
   * @description bound to zoom icon click event.  emit zoom event
   * 
   * @param {Object} e HTML click event
   */
  _onZoomOutClicked(e) {
    this.dispatchEvent(new CustomEvent('zoom-out'));
  }

  /**
   * @method _onCloseClicked
   * @description bound to close icon click event.  emit close event
   * 
   * @param {Object} e HTML click event
   */
  _onCloseClicked(e) {
    this.dispatchEvent(new CustomEvent('close'));
  }

  /**
   * @method setFocus
   * @description set focus to first clickable element
   */
  setFocus() {
    if( this.singleImage ) {
      if( !this.breakControls ) this.$.zoomOut1.focus();
      else this.$.zoomOut2.focus();
    } else {
      let firstBtn = this.shadowRoot.querySelector('button');
      if( firstBtn ) firstBtn.focus();
    }
    window.scrollTo(0,0);
  }
}

customElements.define('app-media-viewer-nav', AppMediaViewerNav);

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-media-viewer.js":
/*!*****************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-media-viewer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppMediaViewer)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _app_media_viewer_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-media-viewer.tpl */ "./public/elements/pages/record/viewer/app-media-viewer.tpl.js");
/* harmony import */ var _polymer_iron_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-pages */ "./public/node_modules/@polymer/iron-pages/iron-pages.js");
/* harmony import */ var _app_image_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-image-viewer */ "./public/elements/pages/record/viewer/app-image-viewer.js");
/* harmony import */ var _app_video_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-video-viewer */ "./public/elements/pages/record/viewer/app-video-viewer.js");
/* harmony import */ var _app_audio_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-audio-viewer */ "./public/elements/pages/record/viewer/app-audio-viewer.js");
/* harmony import */ var _app_media_viewer_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-media-viewer-nav */ "./public/elements/pages/record/viewer/app-media-viewer-nav.js");
/* harmony import */ var _app_image_viewer_lightbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-image-viewer-lightbox */ "./public/elements/pages/record/viewer/app-image-viewer-lightbox.js");
/* harmony import */ var _ucd_lib_cork_app_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ucd-lib/cork-app-utils */ "./public/node_modules/@ucd-lib/cork-app-utils/index.js");
/* harmony import */ var _ucd_lib_cork_app_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ucd_lib_cork_app_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../lib/utils */ "./public/lib/utils/index.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_utils__WEBPACK_IMPORTED_MODULE_9__);






// import "./app-360-image-viewer"









class AppMediaViewer extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(LitCorkUtils) {

    static get properties() {
      return {
        mediaType: {
          type: String
        },
        tallControls : {type: Boolean},
        bagOfFilesImage : {type: String}
      }
    }

    constructor() {
      super();
      this.render = _app_media_viewer_tpl__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
      this._injectModel('AppStateModel', 'RecordModel');
      this.mediaType = 'image';
      this.bagOfFilesImage = '';
    }

    async firstUpdated() {
      this.$.lightbox = this.shadowRoot.getElementById('lightbox');
      if( !this.$.lightbox ) this.$.lightbox = document.getElementById('lightbox');

      this._onAppStateUpdate(await this.AppStateModel.get());
    }

    /**
     * @method _onRecordUpdate
     * @description from RecordModel, listen for loading events and reset UI.
     * 
     * @param {Object} e state event 
     */
    _onRecordUpdate(e) {
      // if( e.state !== 'loading' ) return;
      // this.mediaType = '';
    }

    _onAppStateUpdate(e) {
      if( !e.selectedRecordMedia ) {
        this.selectedRecordMediaId = '';
        return this.mediaType = '';
      }
      if( e.selectedRecordMedia['@id'] === this.selectedRecordMediaId ) {
        return;
      }

      this.selectedRecordMediaId = e.selectedRecordMedia['@id'];

      let mediaType = _lib_utils__WEBPACK_IMPORTED_MODULE_9___default().getMediaType(e.selectedRecordMedia).toLowerCase().replace(/object/i, '');
      if ( mediaType === "imagelist" ) {
        mediaType = "image";
      } else if ( mediaType === "streamingvideo" ){
        mediaType = "video";
      }

      if( mediaType === 'bagoffiles' && e.selectedRecordMedia.thumbnailUrl ) {
        this.bagOfFilesImage = e.selectedRecordMedia.thumbnailUrl;
      } else {
        this.bagOfFilesImage = '';
      }

      this.mediaType = mediaType;
    }


    /**
     * @method _onZoomIn
     * @description bound to zoom event in app-media-viewer-nav. 
     * 
     * @param {Object} e custom HTML event
     */
    _onZoomIn(e) {
      this.AppStateModel.set({showLightbox: true});
      this.$.lightbox.show();
    }
  }

  customElements.define('app-media-viewer', AppMediaViewer);

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-media-viewer.tpl.js":
/*!*********************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-media-viewer.tpl.js ***!
  \*********************************************************************/
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
    display: block;
    position: relative;
    box-sizing: border-box;
    background: black;
  }

  .wrapper {
    /* display: flex; */
    /* flex-direction: column; */
    /* min-height:250px; */
  }

  #bagoffiles {
    text-align: center;
  }

  #bagoffiles iron-icon {
    width: 100%;
    height: 100%;
    max-width: 150px;
    max-height: 150px;
    color: var(--color-grey);
  }

  iron-pages {
    /* flex: 1; */
    min-height: 250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  img {
    max-width: 100%;
  }
</style>

<div class="wrapper">
  <app-image-viewer-lightbox id="lightbox"></app-image-viewer-lightbox>

  <iron-pages selected="${this.mediaType}" attr-for-selected="id" selected-attribute="visible">
    <!-- <app-360-image-viewer id="360"></app-360-image-viewer> -->
    <div id="bagoffiles">
      <iron-icon icon="fin-icons:various-outline-stacked" ?hidden="${this.bagOfFilesImage}"></iron-icon>
      <img src="${this.bagOfFilesImage}" ?hidden="${!this.bagOfFilesImage}" />
    </div>
    <app-image-viewer id="image"></app-image-viewer>
    <app-video-viewer id="video"></app-video-viewer>
    <app-audio-viewer id="audio"></app-audio-viewer>
  </iron-pages>

  <app-media-viewer-nav @zoom-in="${this._onZoomIn}"></app-media-viewer-nav>
</div>

`;}

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-video-viewer.js":
/*!*****************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-video-viewer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppVideoViewer)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _app_video_viewer_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-video-viewer.tpl.js */ "./public/elements/pages/record/viewer/app-video-viewer.tpl.js");
/* harmony import */ var _ucd_lib_cork_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/cork-app-utils */ "./public/node_modules/@ucd-lib/cork-app-utils/index.js");
/* harmony import */ var _ucd_lib_cork_app_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ucd_lib_cork_app_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/config */ "./public/lib/config.js");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../lib/utils */ "./public/lib/utils/index.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_utils_video_lib_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib/utils/video-lib-loader */ "./public/lib/utils/video-lib-loader.js");
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! plyr/dist/plyr.css */ "./public/node_modules/plyr/dist/plyr.css");
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shaka_player_dist_controls_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shaka-player/dist/controls.css */ "./public/node_modules/shaka-player/dist/controls.css");
/* harmony import */ var shaka_player_dist_controls_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(shaka_player_dist_controls_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var plyr_dist_plyr_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! plyr/dist/plyr.svg */ "./public/node_modules/plyr/dist/plyr.svg");
/* harmony import */ var plyr_dist_plyr_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(plyr_dist_plyr_svg__WEBPACK_IMPORTED_MODULE_8__);
// https://github.com/sampotts/plyr
// https://github.com/google/shaka-player/
// https://github.com/google/shaka-player/tree/master/docs/tutorials












let VIDEO_STYLES = (plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_6___default())+(shaka_player_dist_controls_css__WEBPACK_IMPORTED_MODULE_7___default());


let SPRITE_SHEET = (plyr_dist_plyr_svg__WEBPACK_IMPORTED_MODULE_8___default())

// Very dump.  To remove the 'Shaka Player TextTrack'
// you have to override this...
class SimpleTextDisplayer {
  constructor(video) {}
  remove() {return true}
  destroy() {}
  append(cues) {}
  setTextVisibility(on) {}
  isTextVisible() {return false}
}

class AppVideoViewer extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(LitCorkUtils) {
  
  static get properties() {
    return {
      player: {type: Object},
      tracks: {type: Array},
      libsLoaded : {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = _app_video_viewer_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this._injectModel('AppStateModel', 'MediaModel');
    this.tracks = [];
    this.player = {};
    this.libsLoaded = false;
  }

  _onAppStateUpdate(e) {
    if ( this.fullPath !== e.location.fullpath ) { 
      this._stop();
    }

    this.fullPath = e.location.fullpath;
  }

  async firstUpdated(e) {
    let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
    if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);

    this.fullPath = (await this.AppStateModel.get()).location.fullpath;
    
    // webpack module is base64 encoded URL, check if this happened 
    // and decode, then set svg to innerHtml inside the shadow dom.
    if( SPRITE_SHEET.indexOf('data:image/svg+xml;base64') > -1 ) {
      SPRITE_SHEET = atob(SPRITE_SHEET.replace('data:image/svg+xml;base64,', ''));
    }
    this.shadowRoot.querySelector('#sprite-plyr').innerHTML = SPRITE_SHEET;
  
    // decide where to put css
    // The PLYR library isn't aware of shadydom so we need to manually
    // place our styles in document.head w/o shadydom touching them.
    let plyrStyles = document.createElement('style');
    plyrStyles.innerHTML = VIDEO_STYLES;
    if( window.ShadyDOM && window.ShadyDOM.inUse ) {
      document.head.appendChild(plyrStyles);
      this.hideControls = false;
    } else {
      this.shadowRoot.appendChild(plyrStyles);
      this.hideControls = true;
    }
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateModel, called when a records media is selected
   * 
   * @param {Object} media 
  **/
  async _onSelectedRecordMediaUpdate(media) {
    if( !media ) return;
    let mediaType = _lib_utils__WEBPACK_IMPORTED_MODULE_4___default().getMediaType(media);
    if (mediaType !== 'VideoObject' && mediaType !== 'StreamingVideo') return;

    this.media = media;

    // find associated captions and prep to tracks array
    this.tracks = _lib_utils__WEBPACK_IMPORTED_MODULE_4___default().asArray(media, 'caption')
      .filter(caption => caption['@id'] !== undefined )
      .map(caption => {
        let lng = caption.language;
        let setDefault = (lng === 'en' ? true : false);

        return {
          kind: 'captions',
          label: _lib_utils__WEBPACK_IMPORTED_MODULE_4___default().getLanguage(lng),
          srclang: lng,
          src: caption['@id'],
          default: setDefault
        };
      });

    // if we have already loaded the player and shaka libraries
    // then we can go ahead and load the video
    if( this.libsLoaded ) {
      this._loadVideo();
      return;
    }

    // dynamically load plyr and shaka libs
    let {plyr, shaka} = await _lib_utils_video_lib_loader__WEBPACK_IMPORTED_MODULE_5__["default"].load();

    // alert user if video playback is not supported
    let plyr_supported = plyr.supported('video', 'html5', true);
    let shaka_supported = shaka.Player.isBrowserSupported();
    if( !plyr_supported || !shaka_supported ) {
      return alert('Your browser does not support video playback');
    }

    let videoEle = this.shadowRoot.getElementById('video');


    this.plyr = new plyr(videoEle, {
      hideControls: this.hideControls,
      fullscreen : {enabled: false},
      captions: {update: false},
      // keyboard: {global: true},
      controls : ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume']
    });

    // Construct a Player to wrap around the <video> tag.
    this.shaka = new shaka.Player(videoEle, );
    this.shaka.configure({
      textDisplayFactory : SimpleTextDisplayer
    });

    this.shaka.addEventListener('error', e => console.error('shaka error', e));
    
    this.libsLoaded = true;
    await this._loadVideo();
  }

  /**
   * @method _loadVideo
   * @description load url into shaka for current media
   */
  async _loadVideo() {
    if( !this.media ) return;

    let mediaType = _lib_utils__WEBPACK_IMPORTED_MODULE_4___default().getMediaType(this.media);
    let manifestUri = (_lib_config__WEBPACK_IMPORTED_MODULE_3___default().fcrepoBasePath)+this.media['@id'];

    if( mediaType === 'StreamingVideo' ) {
      manifestUri += '/playlist.m3u8'
    }

    try {
      await this.shaka.load(manifestUri);
    } catch(error) {
      console.error('Error code: ', error.code, 'object', error);
    }
  }

  /**
   * Stop playback and reset to start
   */
  _stop() {
    const video = this.shadowRoot.querySelector('#video');
    video.pause();

    if ( this.plyr === undefined || this.plyr === null ) return;

    if (Object.entries(this.plyr).length != 0) {
      this.plyr.stop();
    };
  }
}

customElements.define('app-video-viewer', AppVideoViewer);

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-video-viewer.tpl.js":
/*!*********************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-video-viewer.tpl.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/repeat */ "./public/node_modules/lit-html/directives/repeat.js");
// https://github.com/ucd-library/pgdm-ui/tree/master/app/elements/pages/connect




function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
    <style>
        :host {
            display: block;
            /* padding-bottom: 8px; */
            background: black;
            box-sizing: border-box;
        }

        /*
        .plyr__controls {
            margin: 0 auto;
            width: calc(100vw / 1.8);
        }
        */

        .container {
            padding: 10px;
        }

        video {
            max-width: 100%;
            height: auto;
            max-height: 600px;
        }

        .plyr__video-wrapper {
            text-align: center;
        }

        .plyr--full-ui input[type=range] {
            color: #daaa00 !important;
        }

        button.plyr__control.plyr__control--overlaid,
        button.plyr__control.plyr__control:hover {
            background: rgba(218,170,0,1.0) !important;
        }

        .plyr__control:focus {
            background: rgba(218,170,0,1.0) !important;
        }
        .plyr--full-ui input[type=range] {
            padding: 2px !important;
            border: 1px solid transparent !important;
        }
        .plyr--full-ui input[type=range]:focus {
            border: 1px dashed rgba(218,170,0,1.0) !important;
        }
        .plyr__tab-focus {
            outline: 0 !important;
            background: transparent !important;
        }

        paper-spinner-lite {
            --paper-spinner-color: var(--default-secondary-color);
        }

        #loading {
            text-align: center;
        }
    </style>
    
    <div class="container">
        <div id="sprite-plyr" style="display: none;"></div> 
        <video ?hidden="${!this.libsLoaded}" id="video" playsinline controls crossorigin>
            ${(0,lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_1__.repeat)(this.tracks, (t) => 
                lit_element__WEBPACK_IMPORTED_MODULE_0__.html`<track kind="${t.kind}" label="${t.label}" src="${t.src}" srclang="${t.srclang}" default="${t.default}" />`)}
        </video>
        <div id="loading" ?hidden="${this.libsLoaded}">
            <paper-spinner-lite ?active="${!this.libsLoaded}"></paper-spinner-lite>
        </div>
    </div>
`
}


/***/ }),

/***/ "./public/elements/utils/app-share-btn.js":
/*!************************************************!*\
  !*** ./public/elements/utils/app-share-btn.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppShareBtn)
/* harmony export */ });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_share_btn_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-share-btn.html */ "./public/elements/utils/app-share-btn.html");
/* harmony import */ var _app_share_btn_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_share_btn_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/AppStateInterface */ "./public/elements/interfaces/AppStateInterface.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/MediaInterface */ "./public/elements/interfaces/MediaInterface.js");
/* harmony import */ var _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3__);






const BASE_SHARE_LINKS = {
  facebook : 'https://www.facebook.com/sharer/sharer.php',
  twitter : 'https://twitter.com/intent/tweet',
  // pinterest can also add ?media and ?description
  pinterest : 'https://pinterest.com/pin/create/button/'
}

class AppShareBtn extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__.PolymerElement)
  .with(EventInterface, (_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_2___default()), (_interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3___default())) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = (_app_share_btn_html__WEBPACK_IMPORTED_MODULE_1___default());
    return tag;
  }

  static get properties() {
    return {
      visible : {
        type : Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  ready() {
    super.ready();

    // handle outside clicks
    window.addEventListener('click', () => {
      if( this.visible ) this.hide();
    });
    this.addEventListener('keyup', (e) => {
      if( this.visible && e.which === 27 ) {
        this.hide();
        e.preventDefault();
        e.stopPropagation();
      }
    });

    this.$.popup.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }

  _onAppStateUpdate() {
    setTimeout(() => {
      this.$.link.value = window.location.href;
    }, 100);
  }

  /**
   * @method hide
   * @description hide popup
   */
  hide() {
    this.visible = false;
    this.$.popup.style.display = 'none';
  }

  /**
   * @method _onBtnClicked
   * @description bound to main icon, toggles popup when clicked
   * 
   * @param {Object} e HTML click event
   */
  _onBtnClicked(e) {
    this.visible = !this.visible;
    this.$.popup.style.display = this.visible ? 'block' : 'none';
    
    setTimeout(() => this.$.facebook.focus(), 100);
    e.preventDefault();
    e.stopPropagation();
  }

  /**
   * @method _onSelectedRecordUpdate
   * @description from AppStateInterface, called when a record is selected
   * 
   * @param {Object} record selected record
   */
  // _onSelectedRecordMediaUpdate(record) {
  //   console.log(record);
  //   this.record = record;
  // }

  /**
   * @method _onSocialIconClick
   * @description bound to social icon buttons.  Called when one os clicked
   * 
   * @param {Object} e HTML click event 
   */
  _onSocialIconClick(e) {
    let record = this.AppStateModel.getSelectedRecord();
    let media = this.AppStateModel.getSelectedRecordMedia();

    if( e.type === 'keyup' && e.which !== 13 ) return;
    let id = e.currentTarget['id'];

    let url = BASE_SHARE_LINKS[id];
    let qso = {};
    let name = (media.name || media.title || record.name || record.title);

    if( id === 'pinterest' ) {  
      let path = this._getImgPath(media);
      if( path ) {
        qso.media = window.location.protocol+'//'+window.location.host+this._getImgUrl(path);
      }
      qso.description = name;
      qso.url = window.location.href;
    } else if ( id === 'facebook' ) {
      qso.u = window.location.href;
    } else if( id === 'twitter' ) {
      let text = name+' - '+window.location.href+' #UCDavisLibrary #DigitalCollections';
      if( text.length > 280) {
        let diff = (text.length + 3) - 280;
        name = name.substr(0, name.length-diff)+'...';
        text = name+' - '+window.location.href+' #UCDavisLibrary #DigitalCollections';
      }

      qso.text = text;
    } else {
      throw new Error('Unknown social media type: '+id);
    }

    url += this._createQs(qso);
    window.open(url, '_blank', 'height=400,width=500');
  }

  _createQs(qso) {
    let query = [];
    for( let key in qso ) {
      query.push(key+'='+encodeURIComponent(qso[key]));
    }
    return '?'+query.join('&');
  }

  /**
   * @method _copyLink
   * @description bound to click event on button.  Copy text to clipboard
   * show UI interaction.
   */
  _copyLink() {
    // this.$.link.select();
    this.$.link.focus();
    this.$.link.setSelectionRange(0, 9999);
    document.execCommand("Copy");

    this.$.copyIcon.icon = 'check';
    this.$.copyButton.setAttribute('active', 'active');

    setTimeout(() => {
      this.$.copyIcon.icon = 'content-copy';
      this.$.copyButton.removeAttribute('active', 'active');
    }, 3000);
  }

}

customElements.define('app-share-btn', AppShareBtn);

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

/***/ "./public/elements/utils/app-virtual-scroller.js":
/*!*******************************************************!*\
  !*** ./public/elements/utils/app-virtual-scroller.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppVirtualScroller)
/* harmony export */ });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _app_virtual_scroller_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-virtual-scroller.tpl.js */ "./public/elements/utils/app-virtual-scroller.tpl.js");




class AppVirtualScroller extends lit_element__WEBPACK_IMPORTED_MODULE_0__.LitElement {

  static get properties() {
    return {
      itemHeight : {
        type: Number,
        attribute: 'item-height'
      },
      items : {type: Array},
      renderedItems : {type: Array}
    }
  }

  constructor() {
    super();
    this.render = _app_virtual_scroller_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.itemHeight = 20;
    this.renderedItems = [];
    this.items = [];
    this.height = -1;

    this._onResize = this._onResize.bind(this);
    this.addEventListener('scroll', () => this._onViewportUpdate());
  }

  firstUpdated() {
    this.positionEle = this.querySelector('.app-virtual-scroller-scroll-panel');
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('resize', this._onResize);
    this._cacheHeight();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._onResize);
  }

  createRenderRoot() {
    return this;
  }

  _onResize(e) {
    this._cacheHeight(true);
  }

  _cacheHeight(callViewportUpdate=true) {
    this.height = this.offsetHeight;
    if( callViewportUpdate === true ) this._onViewportUpdate();
  }

  setItemRenderer(renderer, scope) {
    this.renderItem = renderer;
    this.renderItemScope = scope || this;
  }

  updated(props) {
    if( props.has('items') ) {
      this.scrollTop = 0;
      this.totalScrollHeight = this.itemHeight*this.items.length;
      this.positionEle.style.height = (this.itemHeight*this.items.length)+'px';
    }
    if( props.has('itemHeight') || props.has('items') ) {
      this._onViewportUpdate(true);
    }

  }

  _onViewportUpdate(force=false) {
    if( this.height <= 0 ) this._cacheHeight(false);

    let firstItem = Math.floor(this.scrollTop / this.itemHeight) - 1;
    if( firstItem < 0 ) firstItem = 0;

    let lastItem = firstItem + Math.ceil(this.height / this.itemHeight) + 2;
    if( lastItem >= this.items.length ) lastItem = this.items.length;

    if( this.firstItem === firstItem && this.lastItem === lastItem && force === false ) return;
    
    // check for iOS overscroll and ignore
    if( this.itemHeight * (lastItem-1) > this.height &&
       this.scrollTop + this.height + 5 > this.totalScrollHeight ) {
      // console.log('overflow protection!');
      return;
    }
    
    this.firstItem = firstItem;
    this.lastItem = lastItem;

    let items = [];
    for( let i = firstItem; i < lastItem; i++ ) {
      items.push({index: i, top: this.itemHeight*i});
    }
    this.renderedItems = items;

    Array.from(this.querySelectorAll('.vs-row'))
      .forEach(ele => ele.removeAttribute('hover'));
  }

  renderItems() {
    // update triggered from nested object
    if( this.renderedItems.length > this.items.length ) {
      // console.log('ignoring out of date render');
      return lit_element__WEBPACK_IMPORTED_MODULE_0__.html``;
    }

    return this.renderedItems.map(item => {
      // badness
      if( item.index >= this.items.length ) {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__.html``;
      }

      return lit_element__WEBPACK_IMPORTED_MODULE_0__.html`
        <div
          class="vs-row"
          @mouseover="${this._onRowMouseOver}"
          @mouseout="${this._onRowMouseOut}" 
          style="position: absolute; left: 0; right: 0; top: ${item.top}px; height: ${this.itemHeight}px">
          ${this.renderItem.apply(this.renderItemScope, [item.index])}
        </div>`
      });
  }

  _onRowMouseOver(e) {
    e.currentTarget.setAttribute('hover', 'true');
  }

  _onRowMouseOut(e) {
    e.currentTarget.removeAttribute('hover');
  }

  renderItem(index) {
    throw new Error('You must override this method');
  }

}

customElements.define('app-virtual-scroller', AppVirtualScroller);


/***/ }),

/***/ "./public/elements/utils/app-virtual-scroller.tpl.js":
/*!***********************************************************!*\
  !*** ./public/elements/utils/app-virtual-scroller.tpl.js ***!
  \***********************************************************/
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
  app-virtual-scroller {
    display: block;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  app-virtual-scroller .app-virtual-scroller-scroll-panel {
    position: relative;
    /* border: 2px solid red; */
  }
</style>  

<div class="app-virtual-scroller-scroll-panel">
  ${this.renderItems()}
</div>

`;}

/***/ }),

/***/ "./public/lib/utils/video-lib-loader.js":
/*!**********************************************!*\
  !*** ./public/lib/utils/video-lib-loader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class VideoLibLoader {
  async load() {
    if ( this.loaded ) return this.loaded;

    if ( this.loading ) {
      await this.loading;
      return this.loaded;
    }

    this.loading = new Promise(async (resolve, reject) => {
      const plyr = ( await __webpack_require__.e(/*! import() | video-libs */ "video-libs").then(__webpack_require__.t.bind(__webpack_require__, /*! plyr */ "./public/node_modules/plyr/dist/plyr.min.js", 23)) ).default;
      // const plyr = ( await import(/* webpackChunkName: "video-libs" */ 'plyr/src/js/plyr') ).default;
      const shaka = await __webpack_require__.e(/*! import() | video-libs */ "video-libs").then(__webpack_require__.t.bind(__webpack_require__, /*! shaka-player */ "./public/node_modules/shaka-player/dist/shaka-player.compiled.js", 23));
      
      // Install the polyfills before doing anything with the library
      await shaka.polyfill.installAll();

      this.loaded = {plyr, shaka};

      resolve(this.loaded);
    });

    return this.loading;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new VideoLibLoader());

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuVm1DOztBQUVwQjtBQUNmLE9BQU8sNkNBQUk7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUVyQjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLGlFQUFlLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvYXBwLWNvcHktY2l0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvYXBwLW1lZGlhLWRvd25sb2FkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC9hcHAtcmVjb3JkLW1ldGFkYXRhLWxheW91dC5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvYXBwLXJlY29yZC5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvdmlld2VyL2FwcC1pbWFnZS12aWV3ZXItbGlnaHRib3guaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL3ZpZXdlci9hcHAtaW1hZ2Utdmlld2VyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC92aWV3ZXIvYXBwLW1lZGlhLXZpZXdlci1uYXYuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvYXBwLXNoYXJlLWJ0bi5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9hcHAtdGFicy5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9pbnRlcmZhY2VzL01lZGlhSW50ZXJmYWNlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvYXBwLWNvcHktY2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL2FwcC1mcy1tZWRpYS1kb3dubG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL2FwcC1mcy1tZWRpYS1kb3dubG9hZC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC9hcHAtbWVkaWEtZG93bmxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC9hcHAtcmVjb3JkLW1ldGFkYXRhLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL2FwcC1yZWNvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC92aWV3ZXIvYXBwLWF1ZGlvLXZpZXdlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL3ZpZXdlci9hcHAtYXVkaW8tdmlld2VyLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL3ZpZXdlci9hcHAtZnMtdmlld2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvdmlld2VyL2FwcC1mcy12aWV3ZXIudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvdmlld2VyL2FwcC1pbWFnZS12aWV3ZXItbGlnaHRib3guanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC92aWV3ZXIvYXBwLWltYWdlLXZpZXdlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL3ZpZXdlci9hcHAtbWVkaWEtdmlld2VyLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL3ZpZXdlci9hcHAtbWVkaWEtdmlld2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvdmlld2VyL2FwcC1tZWRpYS12aWV3ZXIudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvdmlld2VyL2FwcC12aWRlby12aWV3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC92aWV3ZXIvYXBwLXZpZGVvLXZpZXdlci50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL2FwcC1zaGFyZS1idG4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL2FwcC10YWJzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9hcHAtdmlydHVhbC1zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvYXBwLXZpcnR1YWwtc2Nyb2xsZXIudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9saWIvdXRpbHMvdmlkZW8tbGliLWxvYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFtoaWRkZW5dIHtcXG4gICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXApO1xcbiAgfVxcblxcbiAgLmNvcHlCdXR0b24ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIC8qIHdpZHRoOiA4NXB4OyAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXNtKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5jb3B5QnV0dG9uW2FjdGl2ZV0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuICBcXG4gIC5jb3B5QnV0dG9uW2FjdGl2ZV0gc3BhbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjY2l0ZVRleHQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB9XFxuXFxuICAuYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IGhpZGRlbiQ9XFxcIltbY29weWluZ11dXFxcIiBpZD1cXFwiY2l0ZVRleHRcXFwiPjwvZGl2Plxcbjx0ZXh0YXJlYSBoaWRkZW4kPVxcXCJbWyFjb3B5aW5nXV1cXFwiIGlkPVxcXCJjb3B5QXJlYVxcXCI+PC90ZXh0YXJlYT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXG4gIDxkaXY+XFxuICAgIDxzbG90Pjwvc2xvdD5cXG4gIDwvZGl2PlxcbiAgPGJ1dHRvbiBhY3RpdmUkPVxcXCJbW2NvcHlpbmddXVxcXCIgb24tY2xpY2s9XFxcIl9vbkNvcHlDbGlja2VkXFxcIiBjbGFzcz1cXFwiY29weUJ1dHRvblxcXCI+XFxuICAgIDxpcm9uLWljb24gaWNvbj1cXFwiY29udGVudC1jb3B5XFxcIiBpZD1cXFwiaWNvblxcXCI+PC9pcm9uLWljb24+XFxuICAgIDxzcGFuPkNvcHk8L3NwYW4+XFxuICA8L2J1dHRvbj5cXG48L2Rpdj5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlIGluY2x1ZGU9XFxcInNoYXJlZC1zdHlsZXNcXFwiPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5pbmZvIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtc20pO1xcbiAgfVxcbiAgXFxuICBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY29sb3IgOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXNtKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGhlaWdodDogMjRweDtcXG4gIH1cXG4gIFxcbiAgc2VsZWN0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggNDBweCA1cHggMTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbXMtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW8tYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG5cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTBweCBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCA2cHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXhNQ0EySWlCM2FXUjBhRDBpTVRCd2VDSWdhR1ZwWjJoMFBTSTJjSGdpUGp4a1pXWnpQanh6ZEhsc1pUNHVZMnh6TFRGN1ptbHNiRG9qTURBeU5qVTFPMzA4TDNOMGVXeGxQand2WkdWbWN6NDhaejQ4Y0c5c2VXZHZiaUJqYkdGemN6MGlZMnh6TFRFaUlIQnZhVzUwY3owaU1DQXdJREV3SURBZ05TQTJJREFnTUNJdlBqd3ZaejQ4TDNOMlp6ND0nKTtcXG4gICAgLyogVE9ETzogU2VlbXMgdG8gY2F1c2UgcHJvYmxlbSB3L3dpZHRoIG9mIHNlbGVjdCBib3ggYmVpbmcgdG9vIHNtYWxsXFxuICAgIEBhcHBseSAtLWZpbi1zZWFyY2gtYm94LXNlbGVjdC1pbnZlcnNlO1xcbiAgICAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7IFxcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIHNlbGVjdC5wbGFpblRleHQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXNtKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1mcy1wKSAqIDEuNjI1KTtcXG4gIH1cXG4gIFxcbiAgLyogZm9yIElFICovXFxuICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgc2VsZWN0IG9wdGlvbiB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB9XFxuXFxuICAubGF5b3V0IHtcXG4gICAgZGlzcGxheTpmbGV4OyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5sYXlvdXQuYnRucyA+ICoge1xcbiAgICB3aWR0aDogMzMlXFxuICB9XFxuXFxuICAucmFkaW8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuXFxuPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJsYXlvdXRcXFwiIGhpZGRlbiQ9XFxcIltbIWhhc011bHRpcGxlRG93bmxvYWRNZWRpYV1dXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicmFkaW9cXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwic2luZ2xlXFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwic2V0LXNpemVcXFwiIGNoZWNrZWQgb24tY2xpY2s9XFxcIl90b2dnbGVNdWx0aXBsZURvd25sb2FkXFxcIiAvPiBcXG4gICAgICA8bGFiZWwgZm9yPVxcXCJzaW5nbGVcXFwiPlNpbmdsZTwvbGFiZWw+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyYWRpb1xcXCI+XFxuICAgICAgPGlucHV0IGlkPVxcXCJmdWxsc2V0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwic2V0LXNpemVcXFwiIG9uLWNsaWNrPVxcXCJfdG9nZ2xlTXVsdGlwbGVEb3dubG9hZFxcXCIvPiBcXG4gICAgICA8bGFiZWwgZm9yPVxcXCJmdWxsc2V0XFxcIj5GdWxsIFNldCAoW1tmdWxsU2V0Q291bnRdXSBmaWxlcyk8L2xhYmVsPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgaGlkZGVuJD1cXFwiW1tmdWxsU2V0U2VsZWN0ZWRdXVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJsYXlvdXQgYnRuc1xcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206IDVweDtcXFwiIGhpZGRlbiQ9XFxcIltbIXNlbGVjdGVkTWVkaWFIYXNTb3VyY2VzXV1cXFwiPlxcbiAgICA8c2VsZWN0IGlkPVxcXCJkb3dubG9hZE9wdGlvbnNcXFwiIG9uLWNoYW5nZT1cXFwiX29uQ2hhbmdlRG93bmxvYWRPcHRpb25zXFxcIiA+PC9zZWxlY3Q+XFxuICAgIDxzZWxlY3QgaWQ9XFxcImZvcm1hdFxcXCIgb24tY2hhbmdlPVxcXCJfb25Gb3JtYXRTZWxlY3RlZFxcXCIgaGlkZGVuJD1cXFwiW1shc2hvd0ltYWdlRm9ybWF0c11dXFxcIj48L3NlbGVjdD5cXG4gICAgPGEgaWQ9XFxcImRvd25sb2FkQnRuXFxcIiBocmVmPVxcXCJbW2hyZWZdXVxcXCIgXFxuICAgICAgb24tY2xpY2s9XFxcIl9vbkRvd25sb2FkQ2xpY2tlZFxcXCIgXFxuICAgICAgZG93bmxvYWQgXFxuICAgICAgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIFxcbiAgICAgIHJlbD1cXFwibm9vcGVuZXJcXFwiIFxcbiAgICAgIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTogbm93cmFwOyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIj5cXG4gICAgICAgIDxzcGFuPlxcbiAgICAgICAgICBEb3dubG9hZFxcbiAgICAgICAgPC9zcGFuPlxcbiAgICA8L2E+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48ZGl2IGhpZGRlbiQ9XFxcIltbZnVsbFNldFNlbGVjdGVkXV1cXFwiPlxcbiAgPGRpdiBoaWRkZW4kPVxcXCJbW3NlbGVjdGVkTWVkaWFIYXNTb3VyY2VzXV1cXFwiID5cXG4gICAgPGVtPk5vIGRvd25sb2FkYWJsZSBpdGVtcyBhdmFpbGFibGU8L2VtPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuXFxuPGZvcm0gaWQ9XFxcImRvd25sb2FkWmlwXFxcIiBcXG5hY3Rpb24kPVxcXCIvYXBpL3ppcC9bW3ppcE5hbWVdXVxcXCIgXFxubWV0aG9kPVxcXCJQT1NUXFxcIiBcXG50YXJnZXQ9XFxcIl9ibGFua1xcXCIgXFxuaGlkZGVuJD1cXFwiW1shZnVsbFNldFNlbGVjdGVkXV1cXFwiPiAgICBcXG4gIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBoaWRkZW4gbmFtZT1cXFwicGF0aHNcXFwiIGlkPVxcXCJ6aXBQYXRoc1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIj5cXG4gIDxidXR0b24gb24tY2xpY2s9XFxcIl9vbkRvd25sb2FkRnVsbFNldENsaWNrZWRcXFwiPlxcbiAgICA8aXJvbi1pY29uIGljb249XFxcImZpbGUtZG93bmxvYWRcXFwiPjwvaXJvbi1pY29uPiZuYnNwOzxzcGFuPkRvd25sb2FkIEFyY2hpdmU8L3NwYW4+XFxuICA8L2J1dHRvbj5cXG48L2Zvcm0+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSBpbmNsdWRlPVxcXCJzaGFyZWQtc3R5bGVzXFxcIj5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAubGF5b3V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5sYXlvdXQgPiAqIHtcXG4gICAgZmxleCA6IDE7XFxuICB9XFxuXFxuICBoMiB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48aXJvbi1tZWRpYS1xdWVyeSBxdWVyeT1cXFwiKG1heC13aWR0aDogOTAwcHgpXFxcIiBxdWVyeS1tYXRjaGVzPVxcXCJ7e21vYmlsZX19XFxcIj48L2lyb24tbWVkaWEtcXVlcnk+XFxuXFxuPGFwcC10YWJzIFxcbiAgdGFicz1cXFwiW1t0YWJzXV1cXFwiIFxcbiAgc2VsZWN0ZWQ9XFxcInt7c2VsZWN0ZWRUYWJ9fVxcXCIgXFxuICBoaWRkZW4kPVxcXCJbWyFtb2JpbGVdXVxcXCI+XFxuPC9hcHAtdGFicz5cXG5cXG48ZGl2IGNsYXNzPVxcXCJsYXlvdXRcXFwiPlxcbiAgPGRpdiBoaWRkZW4kPVxcXCJbWyFzaG93TGVmdF1dXFxcIj5cXG4gICAgPGgyPkl0ZW0gRGF0YTwvaDI+XFxuICAgIDxzbG90IG5hbWU9XFxcImxlZnRcXFwiPjwvc2xvdD5cXG4gIDwvZGl2PlxcbiAgPGRpdiBoaWRkZW4kPVxcXCJbWyFzaG93UmlnaHRdXVxcXCIgc3R5bGU9XFxcIm1heC13aWR0aDogMTAwdnc7XFxcIj5cXG4gICAgPGgyPkNpdGUgdGhpcyBJdGVtPC9oMj5cXG4gICAgPHNsb3QgbmFtZT1cXFwicmlnaHRcXFwiPjwvc2xvdD5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXBlci1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIH1cXG5cXG4gIC8qXFxuICBhcHAtbWVkaWEtdmlld2VyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgKi9cXG5cXG4gIC5jb250YWluZXIudG9wIHtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIH1cXG5cXG4gIGlucHV0IHtcXG4gICAgcGFkZGluZzogMCAwIDAgNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICB9XFxuXFxuICAuY29weUJ1dHRvbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgd2lkdGg6IDg1cHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtc20pO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctYm9sZCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLmNvcHlCdXR0b25bYWN0aXZlXSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG4gIC5jb3B5QnV0dG9uW2FjdGl2ZV0gc3BhbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBoMyB7XFxuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcXG4gICAgLyogY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7ICovXFxuICB9XFxuXFxuICAubGFiZWwge1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctYm9sZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgfVxcblxcbiAgLnNlY3Rpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgfVxcbiAgLnNlY3Rpb24uYm9yZGVyZWQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICB9XFxuXFxuICAub3ZlcnZpZXcge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAub3ZlcnZpZXcgPiBkaXYge1xcbiAgICBmbGV4IDogMTtcXG4gICAgcGFkZGluZyA6IDAgMTBweDtcXG4gIH1cXG5cXG4gIC50eXBlLWRhdGUtY29sbGVjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICB9XFxuXFxuICAucmVzb3VyY2UtdHlwZSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgfVxcbiAgLnJlc291cmNlLXR5cGUgaXJvbi1pY29uIHtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuXFxuICBwYXBlci10b2FzdCB7XFxuICAgIC0tcGFwZXItdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICAtLXBhcGVyLXRvYXN0LWNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgfVxcblxcbiAgI2Rlc2NyaXB0aW9uVmFsdWUgcCxcXG4gICNkZXNjcmlwdGlvblZhbHVlIGgxLFxcbiAgI2Rlc2NyaXB0aW9uVmFsdWUgaDIsXFxuICAjZGVzY3JpcHRpb25WYWx1ZSBoMyB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuXFxuICAjbGluayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcblxcbiAgLm1ldGFkYXRhLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMzBweCAyMHB4O1xcbiAgfVxcbiAgLm1ldGFkYXRhLXJvdyAuYXR0ciB7XFxuICAgIGZsZXg6IDAuMjU7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctYm9sZCk7IFxcbiAgfVxcbiAgLm1ldGFkYXRhLXJvdyAudmFsdWUge1xcbiAgICBmbGV4OiAwLjc1O1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgfVxcblxcbiAgLmNpdGUtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbiAgICBtYXJnaW46IDAgMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuY2l0ZS1jb250YWluZXIgLmxhYmVsIHtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgZmxleDogMC4yNTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1ib2xkKTsgXFxuICB9XFxuICAuY2l0ZS1jb250YWluZXIgLnRleHQge1xcbiAgICBmbGV4OiAwLjc1O1xcbiAgfVxcblxcbiAgLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5mYy1icmVhayB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gIH1cXG5cXG4gIC5yaWdodHMge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXApO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgfVxcblxcbiAgLnJpZ2h0cy1icmVhayB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgdmFyKC0tbWVkaXVtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgfVxcblxcbiAgaW1nW3JpZ2h0c10ge1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xcbiAgfVxcblxcbiAgQG1lZGlhKCBtYXgtd2lkdGg6IDU1MHB4ICkge1xcbiAgICAubWV0YWRhdGEtcm93IHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhKCBtYXgtd2lkdGg6IDc2OHB4ICkge1xcbiAgICAub3ZlcnZpZXcge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC5jaXRlLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcGFkZGluZzogMTVweCAwIDE1cHggMTVweDtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgLnR5cGUtZGF0ZS1jb2xsZWN0aW9uIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICAudHlwZS1kYXRlLWNvbGxlY3Rpb24gPiBkaXYge1xcbiAgICAgIG1hcmdpbjogMTVweCA1cHg7XFxuICAgIH1cXG4gIH1cXG48L3N0eWxlPlxcblxcbjxhcHAtbWVkaWEtdmlld2VyPjwvYXBwLW1lZGlhLXZpZXdlcj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgdG9wXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcIm92ZXJ2aWV3XFxcIj5cXG4gICAgPGRpdj5cXG4gICAgICA8aDM+W1tuYW1lXV08L2gzPlxcbiAgICAgIFxcbiAgICAgIDxkaXYgaGlkZGVuJD1cXFwiW1shYWx0ZXJuYXRpdmVIZWFkbGluZV1dXFxcIiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDtcXFwiPltbYWx0ZXJuYXRpdmVIZWFkbGluZV1dPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBoaWRkZW4kPVxcXCJbWyFyaWdodHNdXVxcXCIgY2xhc3M9XFxcInJpZ2h0c1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyaWdodHMtYnJlYWtcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgPGEgaHJlZiQ9XFxcIltbcmlnaHRzLmxpbmtdXVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjJD1cXFwiW1tyaWdodHMuaWNvbl1dXFxcIiByaWdodHMgLz4mbmJzcDtcXG4gICAgICAgICAgICA8c3Bhbj5bW3JpZ2h0cy5sYWJlbF1dPC9zcGFuPlxcbiAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXY+XFxuICAgICAgPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlclxcXCIgY2xhc3M9XFxcInNlY3Rpb24gYm9yZGVyZWRcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImxhYmVsXFxcIiBzdHlsZT1cXFwicGFkZGluZy1yaWdodDogMTBweDsgZGlzcGxheTppbmxpbmUtYmxvY2tcXFwiPlBlcm1hbGluazwvc3Bhbj5cXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcImZsZXg6MVxcXCI+XFxuICAgICAgICAgIDxpbnB1dCBpZD1cXFwibGlua1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGJ1dHRvbiBvbi1jbGljaz1cXFwiX2NvcHlMaW5rXFxcIiBpZD1cXFwiY29weUJ1dHRvblxcXCIgY2xhc3M9XFxcImNvcHlCdXR0b25cXFwiPlxcbiAgICAgICAgICA8aXJvbi1pY29uIGljb249XFxcImNvbnRlbnQtY29weVxcXCIgaWQ9XFxcImNvcHlJY29uXFxcIj48L2lyb24taWNvbj5cXG4gICAgICAgICAgPHNwYW4+Q29weTwvc3Bhbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFiZWxcXFwiPkRvd25sb2FkPC9kaXY+XFxuICAgICAgICA8YXBwLW1lZGlhLWRvd25sb2FkIGlkPVxcXCJkb3dubG9hZFxcXCIgaGlkZGVuJD1cXFwiW1tpc0JhZ09mRmlsZXNdXVxcXCI+PC9hcHAtbWVkaWEtZG93bmxvYWQ+XFxuICAgICAgICA8YXBwLWZzLW1lZGlhLWRvd25sb2FkIGlkPVxcXCJkb3dubG9hZFxcXCIgaGlkZGVuJD1cXFwiW1shaXNCYWdPZkZpbGVzXV1cXFwiPjwvYXBwLWZzLW1lZGlhLWRvd25sb2FkPlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PjwhLS0gZW5kIG92ZXJ2aWV3IC0tPlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiA1MHB4XFxcIj5cXG4gIDxhcHAtcmVjb3JkLW1ldGFkYXRhLWxheW91dD5cXG4gICAgPGRpdiBzbG90PVxcXCJsZWZ0XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtZXRhZGF0YS1yb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXR0clxcXCI+Q29sbGVjdGlvbjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidmFsdWVcXFwiIGlkPVxcXCJjb2xsZWN0aW9uVmFsdWVcXFwiPjwvZGl2PlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1ldGFkYXRhLXJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhdHRyXFxcIj5EYXRlPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2YWx1ZVxcXCIgaWQ9XFxcImRhdGVWYWx1ZVxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWV0YWRhdGEtcm93XFxcIiBpZD1cXFwicHVibGlzaGVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImF0dHJcXFwiPlB1Ymxpc2hlcjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidmFsdWVcXFwiIGlkPVxcXCJwdWJsaXNoZXJWYWx1ZVxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWV0YWRhdGEtcm93XFxcIiBpZD1cXFwic3ViamVjdFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhdHRyXFxcIj5TdWJqZWN0PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2YWx1ZVxcXCIgaWQ9XFxcInN1YmplY3RWYWx1ZVxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWV0YWRhdGEtcm93XFxcIiBpZD1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXR0clxcXCI+RGVzY3JpcHRpb248L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInZhbHVlXFxcIiBpZD1cXFwiZGVzY3JpcHRpb25WYWx1ZVxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWV0YWRhdGEtcm93XFxcIiBpZD1cXFwiY2FsbE51bWJlclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhdHRyXFxcIj5DYWxsIE51bWJlcjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidmFsdWVcXFwiIGlkPVxcXCJjYWxsTnVtYmVyVmFsdWVcXFwiPjwvZGl2PlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1ldGFkYXRhLXJvd1xcXCIgaWQ9XFxcImlkZW50aWZpZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXR0clxcXCI+QVJLIC8gRE9JPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2YWx1ZVxcXCIgaWQ9XFxcImlkZW50aWZpZXJWYWx1ZVxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWV0YWRhdGEtcm93XFxcIiBpZD1cXFwiY3JlYXRvclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhdHRyXFxcIj5DcmVhdG9yPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2YWx1ZVxcXCIgaWQ9XFxcImNyZWF0b3JWYWx1ZVxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWV0YWRhdGEtcm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImF0dHJcXFwiPkZlZG9yYSBMaW5rPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2YWx1ZVxcXCIgaWQ9XFxcImZlZG9yYVZhbHVlXFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIFxcbiAgICA8ZGl2IHNsb3Q9XFxcInJpZ2h0XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjaXRlLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYWJlbFxcXCI+TUxBPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0XFxcIj5cXG4gICAgICAgICAgPGFwcC1jb3B5LWNpdGUgaWQ9XFxcIm1sYVxcXCI+PC9hcHAtY29weS1jaXRlPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2l0ZS1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFiZWxcXFwiPkFQQTwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dFxcXCI+XFxuICAgICAgICAgIDxhcHAtY29weS1jaXRlIGlkPVxcXCJhcGFcXFwiPjwvYXBwLWNvcHktY2l0ZT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNpdGUtY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxhYmVsXFxcIj5DaGljYWdvPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0XFxcIj5cXG4gICAgICAgICAgPGFwcC1jb3B5LWNpdGUgaWQ9XFxcImNoaWNhZ29cXFwiPjwvYXBwLWNvcHktY2l0ZT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIFxcbiAgICA8L2Rpdj5cXG4gIDwvYXBwLXJlY29yZC1tZXRhZGF0YS1sYXlvdXQ+XFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSBpbmNsdWRlPVxcXCJzaGFyZWQtc3R5bGVzXFxcIj5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAgICBcXG4gICAgYW5pbWF0aW9uOiBzaG93IDM1MG1zIGVhc2Utb3V0O1xcbiAgfVxcblxcbiAgOmhvc3QgI25hdi5zaW5nbGUge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgc2hvdyB7XFxuICAgIGZyb20ge1xcbiAgICAgIC8qIHRvcDogLTEwMHZoOyAqL1xcbiAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIC8qIHRvcDogMDsgKi9cXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gICN2aWV3ZXIgeyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgcGFwZXItc3Bpbm5lci1saXRlIHtcXG4gICAgLS1wYXBlci1zcGlubmVyLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuICBcXG4gIC5zcGlubmVyLWxheW91dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNuYXYge1xcbiAgICB6LWluZGV4OiAyMDAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48IS0tIG1ha2Ugc3VyZSBiYWNrZ3JvdW5kIGlzIGJsYWNrZWQgb3V0Li4uIGlPUyBoYWNrIC0tPlxcbjxkaXYgaWQ9XFxcInNhZmVDb3ZlclxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojk5OTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwdnc7aGVpZ2h0OjEwMHZoO2JhY2tncm91bmQtY29sb3I6YmxhY2s7XFxcIj48L2Rpdj5cXG5cXG48ZGl2IGlkPVxcXCJ2aWV3ZXJcXFwiIGhpZGRlbiQ9XFxcIltbbG9hZGluZ11dXFxcIj48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJzcGlubmVyLWxheW91dFxcXCIgaGlkZGVuJD1cXFwiW1shbG9hZGluZ11dXFxcIj5cXG4gIDxwYXBlci1zcGlubmVyLWxpdGUgYWN0aXZlJD1cXFwiW1tsb2FkaW5nXV1cXFwiPjwvcGFwZXItc3Bpbm5lci1saXRlPlxcbjwvZGl2PlxcblxcbjxhcHAtbWVkaWEtdmlld2VyLW5hdiBcXG4gIGlkPVxcXCJuYXZcXFwiXFxuICBpcy1saWdodGJveFxcbiAgb24tem9vbS1pbj1cXFwiX29uWm9vbUluQ2xpY2tlZFxcXCJcXG4gIG9uLXpvb20tb3V0PVxcXCJfb25ab29tT3V0Q2xpY2tlZFxcXCJcXG4gIG9uLWNsb3NlPVxcXCJfb25DbG9zZUNsaWNrZWRcXFwiPlxcbjwvYXBwLW1lZGlhLXZpZXdlci1uYXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG5cXG4gIHBhcGVyLXNwaW5uZXItbGl0ZSB7XFxuICAgIC0tcGFwZXItc3Bpbm5lci1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgfVxcblxcbiAgI2xvYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmxheW91dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIFtoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBpZD1cXFwibG9hZGluZ1xcXCIgaGlkZGVuJD1cXFwiW1shbG9hZGluZ11dXFxcIj5cXG4gIDxwYXBlci1zcGlubmVyLWxpdGUgYWN0aXZlJD1cXFwiW1tsb2FkaW5nXV1cXFwiPjwvcGFwZXItc3Bpbm5lci1saXRlPlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImxheW91dFxcXCIgaGlkZGVuJD1cXFwiW1tsb2FkaW5nXV1cXFwiIHN0eWxlPVxcXCJsaW5lLWhlaWdodDogMFxcXCI+XFxuICA8aW1nIGlkPVxcXCJpbWdcXFwiIC8+XFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSBpbmNsdWRlPVxcXCJzaGFyZWQtc3R5bGVzXFxcIj5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuXFxuICA6aG9zdChbc2luZ2xlLWltYWdlXSkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZzogMCA4cHggOHB4IDhweDtcXG4gIH1cXG5cXG4gIDpob3N0KFtzaW5nbGUtaW1hZ2VdKSBwYXBlci1pY29uLWJ1dHRvbixcXG4gIDpob3N0KFtzaW5nbGUtaW1hZ2VdKSBhcHAtc2hhcmUtYnRuLFxcbiAgOmhvc3QgYXBwLXNoYXJlLWJ0bixcXG4gIDpob3N0IHBhcGVyLWljb24tYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG5cXG4gIC5sYXlvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI3RodW1ibmFpbElubmVyQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDdweDtcXG4gIH1cXG5cXG4gXFxuICAjdGh1bWJuYWlscyB7XFxuICAgIC8qICg1MHB4IHdpZHRoICsgMTBweCBtYXJnaW4gKyA0cHggYm9yZGVyKSAqIDggdGh1bWJuYWlscyAqL1xcbiAgICBtYXgtd2lkdGg6IDUxMnB4O1xcbiAgfVxcblxcblxcbiAgI3RodW1ibmFpbHMge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcblxcbiAgI3RodW1ibmFpbHMgPiBkaXYge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgd2lsbC1jaGFuZ2U6IG1hcmdpbi1sZWZ0O1xcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAyNTBtcyBlYXNlLW91dDtcXG4gIH1cXG5cXG4gIC50aHVtYm5haWwge1xcbiAgICBtYXJnaW46IDAgNXB4IDVweCA2cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAgICBcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICAudGh1bWJuYWlsOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC50aHVtYm5haWw6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiB2YXIoLS1kZWZhdWx0LW91dGxpbmUpO1xcbiAgfVxcbiAgXFxuICAudGh1bWJuYWlsW3NlbGVjdGVkXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIGlyb24taWNvbiB7XFxuICAgIHNoYXBlLXJlbmRlcmluZzogZ2VvbWV0cmljUHJlY2lzaW9uICFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiAyOHB4ICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMjhweCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcGFwZXItaWNvbi1idXR0b24ge1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxuICB9XFxuXFxuICBwYXBlci1pY29uLWJ1dHRvbjpmb2N1cyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIHBhcGVyLWljb24tYnV0dG9uW2Rpc2FibGVkXSB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LXRleHQpO1xcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxuICB9XFxuXFxuICBwYXBlci1pY29uLWJ1dHRvbltpbnZpc2libGVdIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcblxcbiAgLnpvb20tYnRuc1twYWRdIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuXFxuPGRpdiBjbGFzcz1cXFwibGF5b3V0XFxcIj5cXG5cXG4gIDxkaXYgaWQ9XFxcIm5hdkxlZnRcXFwiIGhpZGRlbiQ9XFxcIltbc2luZ2xlSW1hZ2VdXVxcXCI+XFxuICAgIDxwYXBlci1pY29uLWJ1dHRvbiBub2luayBcXG4gICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxuICAgICAgaWNvbj1cXFwiY2hldnJvbi1sZWZ0XFxcIiBcXG4gICAgICBhbHQ9XFxcIlBhZ2UgdGh1bWJuYWlscyBsZWZ0XFxcIlxcbiAgICAgIGRpc2FibGVkJD1cXFwiW1shc2hvd05hdkxlZnRdXVxcXCJcXG4gICAgICBpbnZpc2libGUkPVxcXCJbWyFzaG93TmF2TGVmdF1dXFxcIlxcbiAgICAgIG9uLWNsaWNrPVxcXCJfcGFnZUxlZnRcXFwiPlxcbiAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGlkPVxcXCJ0aHVtYm5haWxzXFxcIiBoaWRkZW4kPVxcXCJbW3NpbmdsZUltYWdlXV1cXFwiPlxcbiAgICA8ZGl2IGlkPVxcXCJ0aHVtYm5haWxJbm5lckNvbnRhaW5lclxcXCI+XFxuICAgICAgPHRlbXBsYXRlIGlzPVxcXCJkb20tcmVwZWF0XFxcIiBpdGVtcz1cXFwiW1t0aHVtYm5haWxzXV1cXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBcXG4gICAgICAgICAgY2xhc3M9XFxcInRodW1ibmFpbFxcXCJcXG4gICAgICAgICAgYWx0JD1cXFwiUGFnZSAjW1tpdGVtLnBvc2l0aW9uXV1cXFwiXFxuICAgICAgICAgIHRpdGxlJD1cXFwiW1tpdGVtLmlkXV1cXFwiXFxuICAgICAgICAgIG1lZGlhLWlkJD1cXFwiW1tpdGVtLmlkXV1cXFwiXFxuICAgICAgICAgIGRpc2FibGVkJD1cXFwiW1tpdGVtLmRpc2FibGVkXV1cXFwiXFxuICAgICAgICAgIHNlbGVjdGVkJD1cXFwiW1tpdGVtLnNlbGVjdGVkXV1cXFwiIFxcbiAgICAgICAgICBzdHlsZSQ9XFxcImJhY2tncm91bmQtaW1hZ2U6dXJsKFtbaXRlbS5zcmNdXSlcXFwiXFxuICAgICAgICAgIG9uLWNsaWNrPVxcXCJfb25UaHVtYm5haWxDbGlja2VkXFxcIj5cXG4gICAgICAgICAgICA8aXJvbi1pY29uIGljb249XFxcImZpbi1pY29uczpbW2l0ZW0uaWNvbl1dXFxcIj48L2lyb24taWNvbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvdGVtcGxhdGU+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGlkPVxcXCJuYXZSaWdodFxcXCIgaGlkZGVuJD1cXFwiW1tzaW5nbGVJbWFnZV1dXFxcIj5cXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIG5vaW5rIFxcbiAgICAgIHRhYmluZGV4PVxcXCIwXFxcIiBcXG4gICAgICBpY29uPVxcXCJjaGV2cm9uLXJpZ2h0XFxcIiBcXG4gICAgICBhbHQ9XFxcIlBhZ2UgdGh1bWJuYWlscyByaWdodFxcXCJcXG4gICAgICBkaXNhYmxlZCQ9XFxcIltbIXNob3dOYXZSaWdodF1dXFxcIlxcbiAgICAgIGludmlzaWJsZSQ9XFxcIltbIXNob3dOYXZSaWdodF1dXFxcIlxcbiAgICAgIG9uLWNsaWNrPVxcXCJfcGFnZVJpZ2h0XFxcIj5cXG4gICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBzdHlsZT1cXFwiZmxleDoxXFxcIj48L2Rpdj5cXG4gIFxcbiAgPGRpdiBpZD1cXFwiYnV0dG9uV3JhcHBlclxcXCIgaGlkZGVuJD1cXFwiW1ticmVha0NvbnRyb2xzXV1cXFwiIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTogbm93cmFwXFxcIj5cXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIGlkPVxcXCJ6b29tT3V0MVxcXCIgbm9pbmsgdGFiaW5kZXg9XFxcIjBcXFwiIGljb249XFxcInpvb20tb3V0XFxcIiBoaWRkZW4kPVxcXCJbWyFpc0xpZ2h0Ym94XV1cXFwiIG9uLWNsaWNrPVxcXCJfb25ab29tT3V0Q2xpY2tlZFxcXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIG5vaW5rIGljb249XFxcInpvb20taW5cXFwiIHRhYmluZGV4PVxcXCIwXFxcIiBoaWRkZW4kPVxcXCJbWyFpc0xpZ2h0Ym94XV1cXFwiIG9uLWNsaWNrPVxcXCJfb25ab29tSW5DbGlja2VkXFxcIj48L3BhcGVyLWljb24tYnV0dG9uPlxcbiAgICBcXG4gICAgPGFwcC1zaGFyZS1idG4gaWQ9XFxcInNoYXJlQnRuXFxcIiByb2xlPVxcXCJidXR0b25cXFwiPjwvYXBwLXNoYXJlLWJ0bj5cXG5cXG4gICAgPHNwYW4gaGlkZGVuJD1cXFwiW1shc2hvd09wZW5MaWdodGJveF1dXFxcIiBjbGFzcz1cXFwiem9vbS1idG5zXFxcIiBwYWQkPVxcXCJbWyFzaG93T3BlbkxpZ2h0Ym94XV1cXFwiPlxcbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBub2luayBpY29uPVxcXCJ6b29tLWluXFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgaGlkZGVuJD1cXFwiW1tpc0xpZ2h0Ym94XV1cXFwiIG9uLWNsaWNrPVxcXCJfb25ab29tSW5DbGlja2VkXFxcIj48L3BhcGVyLWljb24tYnV0dG9uPlxcbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBub2luayBpY29uPVxcXCJmaW4taWNvbnM6Y2xvc2VcXFwiIHRhYmluZGV4PVxcXCIwXFxcIiBoaWRkZW4kPVxcXCJbWyFpc0xpZ2h0Ym94XV1cXFwiIG9uLWNsaWNrPVxcXCJfb25DbG9zZUNsaWNrZWRcXFwiPjwvcGFwZXItaWNvbi1idXR0b24+XFxuICAgIDwvc3Bhbj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgaGlkZGVuJD1cXFwiW1shYnJlYWtDb250cm9sc11dXFxcIiBzdHlsZT1cXFwidGV4dC1hbGlnbjogcmlnaHRcXFwiPlxcbiAgPHBhcGVyLWljb24tYnV0dG9uIGlkPVxcXCJ6b29tT3V0MlxcXCIgbm9pbmsgdGFiaW5kZXg9XFxcIjBcXFwiIGljb249XFxcInpvb20tb3V0XFxcIiBoaWRkZW4kPVxcXCJbWyFpc0xpZ2h0Ym94XV1cXFwiIG9uLWNsaWNrPVxcXCJfb25ab29tT3V0Q2xpY2tlZFxcXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cXG4gIDxwYXBlci1pY29uLWJ1dHRvbiBub2luayBpY29uPVxcXCJ6b29tLWluXFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgaGlkZGVuJD1cXFwiW1shaXNMaWdodGJveF1dXFxcIiBvbi1jbGljaz1cXFwiX29uWm9vbUluQ2xpY2tlZFxcXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cXG4gIFxcbiAgPGFwcC1zaGFyZS1idG4+PC9hcHAtc2hhcmUtYnRuPlxcbiAgXFxuICA8c3BhbiBoaWRkZW4kPVxcXCJbWyFzaG93T3BlbkxpZ2h0Ym94XV1cXFwiIGNsYXNzPVxcXCJ6b29tLWJ0bnNcXFwiPlxcbiAgICA8cGFwZXItaWNvbi1idXR0b24gbm9pbmsgaWNvbj1cXFwiem9vbS1pblxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiIGhpZGRlbiQ9XFxcIltbaXNMaWdodGJveF1dXFxcIiBvbi1jbGljaz1cXFwiX29uWm9vbUluQ2xpY2tlZFxcXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIG5vaW5rIGljb249XFxcImZpbi1pY29uczpjbG9zZVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiIGhpZGRlbiQ9XFxcIltbIWlzTGlnaHRib3hdXVxcXCIgb24tY2xpY2s9XFxcIl9vbkNsb3NlQ2xpY2tlZFxcXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cXG4gIDwvc3Bhbj5cXG48L2Rpdj5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlIGluY2x1ZGU9XFxcInNoYXJlZC1zdHlsZXNcXFwiPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gICNwb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNzBweDtcXG4gICAgcmlnaHQ6IC0yMHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgfVxcblxcbiAgLmxheW91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtcCk7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcblxcbiAgI2xpbmsge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICAuc29jaWFsIHtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG4gIC5zb2NpYWw6Zm9jdXMge1xcbiAgICBib3JkZXI6IHZhcigtLWRlZmF1bHQtb3V0bGluZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB9XFxuXFxuICAuY29weUJ1dHRvbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1ib2xkKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgfVxcbiAgLmNvcHlCdXR0b25bYWN0aXZlXSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG4gIC5jb3B5QnV0dG9uW2FjdGl2ZV0gc3BhbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjbWFpbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAuYXJyb3ctZG93biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDA7IFxcbiAgICBoZWlnaHQ6IDA7IFxcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItdG9wOiAyMHB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3R0b206IC0yMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gIH1cXG5cXG4gIHBhcGVyLWljb24tYnV0dG9uOmZvY3VzIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBpZD1cXFwicG9wdXBcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwibGF5b3V0XFxcIj5cXG4gICAgPGltZyBpZD1cXFwiZmFjZWJvb2tcXFwiIFxcbiAgICAgIHJvbGU9XFxcImJ1dHRvblxcXCIgXFxuICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiIFxcbiAgICAgIHNyYz1cXFwiL2ltYWdlcy9zb2NpYWwtaWNvbnMvaWNvbi1mYWNlYm9vay5zdmdcXFwiIFxcbiAgICAgIGNsYXNzPVxcXCJzb2NpYWxcXFwiIFxcbiAgICAgIG9uLWNsaWNrPVxcXCJfb25Tb2NpYWxJY29uQ2xpY2tcXFwiXFxuICAgICAgb24ta2V5dXA9XFxcIl9vblNvY2lhbEljb25DbGlja1xcXCIgLz5cXG4gICAgPGltZyBpZD1cXFwidHdpdHRlclxcXCIgXFxuICAgICAgcm9sZT1cXFwiYnV0dG9uXFxcIiBcXG4gICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxuICAgICAgc3JjPVxcXCIvaW1hZ2VzL3NvY2lhbC1pY29ucy9pY29uLXR3aXR0ZXIuc3ZnXFxcIiBcXG4gICAgICBjbGFzcz1cXFwic29jaWFsXFxcIiBcXG4gICAgICBvbi1jbGljaz1cXFwiX29uU29jaWFsSWNvbkNsaWNrXFxcIlxcbiAgICAgIG9uLWtleXVwPVxcXCJfb25Tb2NpYWxJY29uQ2xpY2tcXFwiIC8+XFxuICAgIDxpbWcgaWQ9XFxcInBpbnRlcmVzdFxcXCIgXFxuICAgICAgcm9sZT1cXFwiYnV0dG9uXFxcIiBcXG4gICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxuICAgICAgc3JjPVxcXCIvaW1hZ2VzL3NvY2lhbC1pY29ucy9pY29uLXBpbnRlcmVzdC5zdmdcXFwiIFxcbiAgICAgIGNsYXNzPVxcXCJzb2NpYWxcXFwiIFxcbiAgICAgIG9uLWNsaWNrPVxcXCJfb25Tb2NpYWxJY29uQ2xpY2tcXFwiXFxuICAgICAgb24ta2V5dXA9XFxcIl9vblNvY2lhbEljb25DbGlja1xcXCIgLz5cXG4gIDwvZGl2PlxcbiAgPGRpdj5cXG4gICAgPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlclxcXCIgY2xhc3M9XFxcInNlY3Rpb24gYm9yZGVyZWRcXFwiPlxcbiAgICAgIDxkaXYgc3R5bGU9XFxcImZsZXg6MVxcXCI+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImxpbmtcXFwiIHR5cGU9XFxcInRleHRcXFwiIC8+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGJ1dHRvbiBvbi1jbGljaz1cXFwiX2NvcHlMaW5rXFxcIiBpZD1cXFwiY29weUJ1dHRvblxcXCIgY2xhc3M9XFxcImNvcHlCdXR0b25cXFwiPlxcbiAgICAgICAgPGlyb24taWNvbiBpY29uPVxcXCJjb250ZW50LWNvcHlcXFwiIGlkPVxcXCJjb3B5SWNvblxcXCI+PC9pcm9uLWljb24+XFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJhcnJvdy1kb3duXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cXG48cGFwZXItaWNvbi1idXR0b24gXFxuICBpZD1cXFwibWFpblxcXCIgXFxuICBub2luayBcXG4gIGljb249XFxcInNvY2lhbDpzaGFyZVxcXCIgXFxuXFxuICBvbi1jbGljaz1cXFwiX29uQnRuQ2xpY2tlZFxcXCI+XFxuPC9wYXBlci1pY29uLWJ1dHRvbj5cXG5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5IDogYmxvY2s7XFxuICB9XFxuICAubGF5b3V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC50YWIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHBhZGRpbmc6IDEycHggMCA5cHggMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgY29sb3I6IHZhcigtLWdyYXktdGV4dCk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ncmF5LXRleHQpO1xcbiAgfVxcbiAgLnRhYjpmb2N1cyB7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG4gIC50YWJbc2VsZWN0ZWRdIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxMnB4IDAgN3B4IDA7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJsYXlvdXRcXFwiPlxcbiAgPHRlbXBsYXRlIGlzPVxcXCJkb20tcmVwZWF0XFxcIiBpdGVtcz1cXFwiW1t0YWJzXV1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJcXFwiIFxcbiAgICAgIHJvbGU9XFxcInRhYlxcXCIgXFxuICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiIFxcbiAgICAgIGFyaWEtc2VsZWN0ZWQkPVxcXCJbW2l0ZW0uYXJpYVNlbGVjdGVkXV1cXFwiXFxuICAgICAgc2VsZWN0ZWQkPVxcXCJbW2l0ZW0uc2VsZWN0ZWRdXVxcXCJcXG4gICAgICBvbi1jbGljaz1cXFwiX29uVGFiQ2xpY2tlZFxcXCIgXFxuICAgICAgb24ta2V5dXA9XFxcIl9vblRhYkNsaWNrZWRcXFwiXFxuICAgICAgdmFsdWUkPVxcXCJbW2l0ZW0udmFsdWVdXVxcXCI+XFxuICAgICAgW1tpdGVtLmxhYmVsXV1cXG4gICAgPC9kaXY+XFxuICA8L3RlbXBsYXRlPlxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gc3ViY2xhc3MgPT4gXG4gIGNsYXNzIE1lZGlhSW50ZXJmYWNlIGV4dGVuZHMgc3ViY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2luamVjdE1vZGVsKCdNZWRpYU1vZGVsJyk7XG4gICAgfVxuXG4gICAgX2dldEltZ1BhdGgocmVjb3JkKSB7XG4gICAgICByZXR1cm4gdGhpcy5NZWRpYU1vZGVsLmdldEltZ1BhdGgocmVjb3JkKTtcbiAgICB9XG5cbiAgICBfZ2V0SW1nVXJsKHBhdGgsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHJldHVybiB0aGlzLk1lZGlhTW9kZWwuZ2V0SW1nVXJsKHBhdGgsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIF9nZXRJbWFnZU1lZGlhTGlzdChyb290UmVjb3JkKSB7XG4gICAgICByZXR1cm4gdGhpcy5NZWRpYU1vZGVsLmdldEltYWdlTWVkaWFMaXN0KHJvb3RSZWNvcmQpO1xuICAgIH1cblxuICB9IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtY29weS1jaXRlLmh0bWxcIlxuaW1wb3J0IHN0cmlwdGFncyBmcm9tIFwic3RyaXB0YWdzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29weUNpdGUgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dCA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJyxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX29uVGV4dFVwZGF0ZSdcbiAgICAgIH0sXG4gICAgICBjb3B5aW5nIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblRleHRVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvICd0ZXh0JyBwcm9wZXJ0eSBvYnNlcnZlclxuICAgKi9cbiAgX29uVGV4dFVwZGF0ZSgpIHtcbiAgICB0aGlzLiQuY2l0ZVRleHQuaW5uZXJIVE1MID0gdGhpcy50ZXh0IHx8ICcnO1xuICAgIHRoaXMuJC5jb3B5QXJlYS52YWx1ZSA9IHN0cmlwdGFncyh0aGlzLnRleHQpLnRyaW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNvcHlDbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBjb3B5IGJ0biBjbGljayBldmVudFxuICAgKi9cbiAgX29uQ29weUNsaWNrZWQoKSB7XG4gICAgLy8gZmlyc3Qgc2V0IGNvcnJlY3QgaGVpZ2h0XG4gICAgdGhpcy4kLmNvcHlBcmVhLnN0eWxlLmhlaWdodCA9ICh0aGlzLiQuY2l0ZVRleHQub2Zmc2V0SGVpZ2h0LTEwKSsncHgnO1xuICAgIHRoaXMuJC5jb3B5QXJlYS5zdHlsZS53aWR0aCA9ICh0aGlzLiQuY2l0ZVRleHQub2Zmc2V0V2lkdGgtMTApKydweCc7XG4gIFxuICAgIHRoaXMuY29weWluZyA9IHRydWU7XG4gICAgLy8gdGhpcy4kLmNvcHlBcmVhLnNlbGVjdCgpO1xuICAgIHRoaXMuJC5jb3B5QXJlYS5mb2N1cygpO1xuICAgIHRoaXMuJC5jb3B5QXJlYS5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5KTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIkNvcHlcIik7XG4gICAgdGhpcy4kLmljb24uaWNvbiA9ICdjaGVjayc7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuJC5pY29uLmljb24gPSAnY29udGVudC1jb3B5JztcbiAgICAgIHRoaXMuY29weWluZyA9IGZhbHNlO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtY29weS1jaXRlJywgQXBwQ29weUNpdGUpOyIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2FwcC1mcy1tZWRpYS1kb3dubG9hZC50cGwuanNcIlxuXG5pbXBvcnQgXCIuL3ZpZXdlci9hcHAtZnMtdmlld2VyXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwRnNNZWRpYURvd25sb2FkIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlIDoge3R5cGU6IFN0cmluZ31cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RlID0gJ3NpbmdsZSdcblxuICAgIHRoaXMuX2luamVjdE1vZGVsKCdBcHBTdGF0ZU1vZGVsJyk7XG4gIH1cblxuICBhc3luYyBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5mc1ZpZXdlciA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdhcHAtZnMtdmlld2VyJyk7XG4gICAgdGhpcy5fb25BcHBTdGF0ZVVwZGF0ZShhd2FpdCB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkpO1xuICB9XG5cbiAgX29uQXBwU3RhdGVVcGRhdGUoZSkge1xuICAgIHRoaXMuc2VsZWN0ZWRSZWNvcmQgPSBlLnNlbGVjdGVkUmVjb3JkO1xuICAgIHRoaXMuc2VsZWN0ZWRSZWNvcmRNZWRpYSA9IGUuc2VsZWN0ZWRSZWNvcmRNZWRpYTtcbiAgfVxuXG4gIF90b2dnbGVNdWx0aXBsZURvd25sb2FkKGUpIHtcbiAgICB0aGlzLm1vZGUgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gIH1cblxuICBfb25Eb3dubG9hZENsaWNrZWQoZSkge1xuICAgIGlmKCBlLnR5cGUgPT09ICdrZXl1cCcgJiYgZS53aGljaCAhPT0gMTMgKSByZXR1cm47XG5cbiAgICBpZiggdGhpcy5tb2RlID09PSAnc2luZ2xlJyApIHtcbiAgICAgIHRoaXMuZnNWaWV3ZXIuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiggdGhpcy5zZWxlY3RlZFJlY29yZE1lZGlhLmNsaWVudE1lZGlhRG93bmxvYWQgKSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnNlbGVjdGVkUmVjb3JkTWVkaWEuY2xpZW50TWVkaWFEb3dubG9hZDtcbiAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkodXJsKSApIHVybCA9IHVybFswXTtcbiAgICAgICAgaWYoIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnICkgdXJsID0gdXJsWydAaWQnXTtcbiAgICAgICAgdXJsID0gJy9mY3JlcG8vcmVzdC8nK3VybDtcbiAgICAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkaW5nIGFyY2hpdmUgdXNpbmc6ICcrdXJsKTtcbiAgICAgICAgb3Blbih1cmwsICdfYmxhbmsnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB1cmwgPSAnL2FwaS96aXAvYmFnLW9mLWZpbGVzJyt0aGlzLnNlbGVjdGVkUmVjb3JkTWVkaWFbJ0BpZCddO1xuICAgICAgICBvcGVuKHVybCwgJ19ibGFuaycpO1xuICAgICAgICBjb25zb2xlLmxvZygnZG93bmxvYWRpbmcgYXJjaGl2ZSB1c2luZzogJyt1cmwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJEb3dubG9hZEJ0bihtb2RlKSB7XG4gICAgaWYoIHRoaXMubW9kZSA9PT0gJ3NpbmdsZScgKSB7XG4gICAgICByZXR1cm4gaHRtbGA8aXJvbi1pY29uIGljb249J2ZpbGUtZG93bmxvYWQnPjwvaXJvbi1pY29uPiBCcm93c2UgZm9yIGZpbGVgO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaHRtbGA8aXJvbi1pY29uIGljb249J2ZpbGUtZG93bmxvYWQnPjwvaXJvbi1pY29uPiBEb3dubG9hZCBBcmNoaXZlYDtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZnMtbWVkaWEtZG93bmxvYWQnLCBBcHBGc01lZGlhRG93bmxvYWQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5sYXlvdXQge1xuICAgIGRpc3BsYXk6ZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5sYXlvdXQuYnRucyA+ICoge1xuICAgIHdpZHRoOiAzMyVcbiAgfVxuXG4gIC5yYWRpbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogOHB4IDEycHggOHB4IDhweDtcbiAgICBjb2xvciA6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvciA6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtc20pO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1ib2xkKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cbiAgYSBpcm9uLWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbjwvc3R5bGU+IFxuXG48ZGl2IGlkPVwid3JhcHBlclwiPlxuICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInJhZGlvXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDQwcHhcIj5cbiAgICAgIDxpbnB1dCBpZD1cInNpbmdsZVwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzZXQtZnMtZGwtdHlwZVwiIGNoZWNrZWQgQGNsaWNrPVwiJHt0aGlzLl90b2dnbGVNdWx0aXBsZURvd25sb2FkfVwiIC8+IFxuICAgICAgPGxhYmVsIGZvcj1cInNpbmdsZVwiPlNpbmdsZTwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJhZGlvXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJhcmNoaXZlXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNldC1mcy1kbC10eXBlXCIgQGNsaWNrPVwiJHt0aGlzLl90b2dnbGVNdWx0aXBsZURvd25sb2FkfVwiLz4gXG4gICAgICA8bGFiZWwgZm9yPVwiYXJjaGl2ZVwiPkFyY2hpdmU8L2xhYmVsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48YSBpZD1cImRvd25sb2FkQnRuXCIgQGNsaWNrPVwiJHt0aGlzLl9vbkRvd25sb2FkQ2xpY2tlZH1cIiBAa2V5dXA9XCIke3RoaXMuX29uRG93bmxvYWRDbGlja2VkfVwiIHRhYmluZGV4PVwiMFwiPlxuICAke3RoaXMuX3JlbmRlckRvd25sb2FkQnRuKHRoaXMubW9kZSl9XG48L2E+XG5cbjxhcHAtZnMtdmlld2VyPjwvYXBwLWZzLXZpZXdlcj5cblxuYDt9IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtbWVkaWEtZG93bmxvYWQuaHRtbFwiXG5cbmltcG9ydCBDb2xsZWN0aW9uSW50ZXJmYWNlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0NvbGxlY3Rpb25JbnRlcmZhY2VcIlxuaW1wb3J0IE1lZGlhSW50ZXJmYWNlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL01lZGlhSW50ZXJmYWNlXCJcblxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vbGliL2NvbmZpZ1wiXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiXG5pbXBvcnQgYnl0ZXMgZnJvbSBcImJ5dGVzXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBNZWRpYURvd25sb2FkIGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gICAgICAud2l0aChFdmVudEludGVyZmFjZSwgQ29sbGVjdGlvbkludGVyZmFjZSwgTWVkaWFJbnRlcmZhY2UpIHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0SW1hZ2U6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGZvcm1hdHMgOiB7XG4gICAgICAgIHR5cGUgOiBBcnJheSxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiBbXVxuICAgICAgfSxcbiAgICAgIGhyZWYgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBpbWFnZVNpemVzIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW11cbiAgICAgIH0sXG4gICAgICBoYXNNdWx0aXBsZURvd25sb2FkTWVkaWE6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWRNZWRpYUhhc1NvdXJjZXMgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuICAgICAgZnVsbFNldENvdW50IDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiAwXG4gICAgICB9LFxuICAgICAgZnVsbFNldFNlbGVjdGVkOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuICAgICAgZG93bmxvYWRPcHRpb25zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogKCkgPT4gW11cbiAgICAgIH0sXG4gICAgICBzaG93SW1hZ2VGb3JtYXRzIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2luamVjdE1vZGVsKCdBcHBTdGF0ZU1vZGVsJywgJ01lZGlhTW9kZWwnKTtcbiAgfVxuXG4gIGFzeW5jIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgbGV0IHNlbGVjdGVkUmVjb3JkID0gYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkKCk7XG4gICAgaWYoIHNlbGVjdGVkUmVjb3JkICkge1xuICAgICAgdGhpcy5fb25TZWxlY3RlZFJlY29yZFVwZGF0ZShzZWxlY3RlZFJlY29yZCk7XG4gICAgICBsZXQgc2VsZWN0ZWRSZWNvcmRNZWRpYSA9IGF3YWl0IHRoaXMuQXBwU3RhdGVNb2RlbC5nZXRTZWxlY3RlZFJlY29yZE1lZGlhKCk7XG4gICAgICBpZiggc2VsZWN0ZWRSZWNvcmRNZWRpYSApIHRoaXMuX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShzZWxlY3RlZFJlY29yZE1lZGlhKTtcbiAgICB9XG4gIH1cblxuICBfb25TZWxlY3RlZFJlY29yZFVwZGF0ZShyZWNvcmQpIHtcbiAgICB0aGlzLnJvb3RSZWNvcmQgPSByZWNvcmQ7XG4gICAgaWYoICFyZWNvcmQgKSByZXR1cm47XG5cbiAgICAvLyBmaW5kIG91dCBpZiB0aGUgbnVtYmVyIG9mIGRvd25sb2FkIG9wdGlvbnMgaXMgZ3JlYXRlciB0aGFuIDFcbiAgICBsZXQgc291cmNlQ291bnQgPSAwO1xuICAgIGZvciggbGV0IHR5cGUgaW4gcmVjb3JkLm1lZGlhICkge1xuICAgICAgZm9yKCBsZXQgbWVkaWEgb2YgcmVjb3JkLm1lZGlhW3R5cGVdICkge1xuICAgICAgICBpZiggdHlwZSA9PT0gJ2ltYWdlTGlzdCcgKSB7XG4gICAgICAgICAgcmVjb3JkLm1lZGlhLmltYWdlTGlzdC5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgc291cmNlQ291bnQgKz0gbGlzdC5oYXNQYXJ0Lmxlbmd0aDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3VyY2VDb3VudCArPSB0aGlzLl9nZXREb3dubG9hZFNvdXJjZXMobWVkaWEsIHRydWUpLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIHNvdXJjZUNvdW50ID4gMSApIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYoIHNvdXJjZUNvdW50ID4gMSApIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuaGFzTXVsdGlwbGVEb3dubG9hZE1lZGlhID0gKHNvdXJjZUNvdW50ID4gMSk7XG4gICAgaWYoIHRoaXMuaGFzTXVsdGlwbGVEb3dubG9hZE1lZGlhICkge1xuICAgICAgdGhpcy4kLnNpbmdsZS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJC5mdWxsc2V0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmZ1bGxTZXRTZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShtZWRpYSkge1xuICAgIHRoaXMuc2hvd0ltYWdlRm9ybWF0cyA9IGZhbHNlO1xuICAgIHRoaXMuZnVsbFNldFNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgc291cmNlcyA9IHRoaXMuX2dldERvd25sb2FkU291cmNlcyhtZWRpYSk7XG5cbiAgICBpZiAoIHNvdXJjZXMubGVuZ3RoID09PSAwICkge1xuICAgICAgdGhpcy5zZWxlY3RlZE1lZGlhSGFzU291cmNlcyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRNZWRpYUhhc1NvdXJjZXMgPSB0cnVlO1xuICAgIHRoaXMuZnVsbFNldENvdW50ID0gdGhpcy5fZ2V0QWxsTmF0aXZlRG93bmxvYWRTb3VyY2VzKCkubGVuZ3RoO1xuXG4gICAgdGhpcy5hbGxTb3VyY2VzID0gc291cmNlcztcbiAgICB0aGlzLmRvd25sb2FkT3B0aW9ucyA9IHNvdXJjZXM7XG4gICAgdGhpcy4kLmRvd25sb2FkT3B0aW9ucy5pbm5lckhUTUwgPSBzb3VyY2VzXG4gICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gYDxvcHRpb24gdmFsdWU9XCIke2luZGV4fVwiICR7aW5kZXggPT09IDAgPyAnc2VsZWN0ZWQnIDogJyd9PiR7aXRlbS5sYWJlbH08L29wdGlvbj5gKVxuICAgICAgLmpvaW4oKVxuICAgIHRoaXMuJC5kb3dubG9hZE9wdGlvbnMudmFsdWUgPSAnMCc7XG5cbiAgICB0aGlzLl9zZXREb3dubG9hZEhyZWYoc291cmNlc1swXSk7XG4gIH1cblxuICBfZ2V0RG93bmxvYWRTb3VyY2VzKHJlY29yZCwgbmF0aXZlSW1hZ2VPbmx5PWZhbHNlKSB7XG4gICAgbGV0IHNvdXJjZXMgPSBbXTtcbiAgICBpZiggIXJlY29yZCApIHJldHVybiBzb3VyY2VzO1xuXG4gICAgaWYoIHJlY29yZC5jbGllbnRNZWRpYURvd25sb2FkICkge1xuICAgICAgaWYoIEFycmF5LmlzQXJyYXkocmVjb3JkLmNsaWVudE1lZGlhRG93bmxvYWQpICkge1xuICAgICAgICBpZiggcmVjb3JkLmNsaWVudE1lZGlhRG93bmxvYWQubGVuZ3RoICkge1xuICAgICAgICAgIHJlY29yZCA9IHJlY29yZC5jbGllbnRNZWRpYURvd25sb2FkWzBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNvcmQgPSByZWNvcmQuY2xpZW50TWVkaWFEb3dubG9hZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXRpbHMuZ2V0TWVkaWFUeXBlKHJlY29yZCkgPT09ICdWaWRlb09iamVjdCcpIHtcbiAgICAgIHNvdXJjZXMgPSBzb3VyY2VzLmNvbmNhdCh0aGlzLl9nZXRWaWRlb1NvdXJjZXMocmVjb3JkKSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5nZXRNZWRpYVR5cGUocmVjb3JkKSA9PT0gJ0F1ZGlvT2JqZWN0Jykge1xuICAgICAgc291cmNlcyA9IHNvdXJjZXMuY29uY2F0KHRoaXMuX2dldEF1ZGlvU291cmNlcyhyZWNvcmQpKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmdldE1lZGlhVHlwZShyZWNvcmQpID09PSAnSW1hZ2VPYmplY3QnICkge1xuICAgICAgdGhpcy5zaG93SW1hZ2VGb3JtYXRzID0gdHJ1ZTtcbiAgICAgIHNvdXJjZXMgPSBzb3VyY2VzLmNvbmNhdCh0aGlzLl9nZXRJbWFnZVNvdXJjZXMocmVjb3JkLCBuYXRpdmVJbWFnZU9ubHkpKTtcbiAgICAgIHRoaXMuX3JlbmRlckltZ0Zvcm1hdHMocmVjb3JkLCBudWxsLCAnRlInKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmdldE1lZGlhVHlwZShyZWNvcmQpID09PSAnSW1hZ2VMaXN0JyApIHtcbiAgICAgIChyZWNvcmQuaGFzUGFydCB8fCBbXSkuZm9yRWFjaChpbWcgPT4ge1xuICAgICAgICBzb3VyY2VzID0gc291cmNlcy5jb25jYXQodGhpcy5fZ2V0SW1hZ2VTb3VyY2VzKGltZywgbmF0aXZlSW1hZ2VPbmx5KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlcztcbiAgfVxuXG4gIF9zZXREb3dubG9hZEhyZWYoc291cmNlKSB7XG4gICAgbGV0IGhyZWYgPSBzb3VyY2Uuc3JjO1xuICAgIGlmKCBzb3VyY2UudHlwZSA9PT0gJ2ltYWdlJyApIHtcbiAgICAgIGxldCBmb3JtYXQgPSB0aGlzLiQuZm9ybWF0LnZhbHVlO1xuICAgICAgaWYoIHNvdXJjZS5vcmlnaW5hbEZvcm1hdCAhPT0gZm9ybWF0IHx8IHNvdXJjZS5pbWFnZVR5cGUgIT09ICdGUicgKSB7XG4gICAgICAgIGhyZWYgKz0gc291cmNlLnNlcnZpY2UrZm9ybWF0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc291cmNlVHlwZSA9IHNvdXJjZS50eXBlOyAvLyBzdG9yZWQgZm9yIGFuYWx5dGljc1xuICAgIHRoaXMuaHJlZiA9IGhyZWY7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZ2V0SW1hZ2VTb3VyY2VzXG4gICAqIEBkZXNjcmlwdGlvbiB0aGUgZG93bmxvYWQgc291cmNlcyBsaXN0IGZvciBpbWFnZSBtZWRpYVxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGltYWdlUmVjb3JkIHRoZSBpbWFnZSBtZWRpYVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG5hdGl2ZUltYWdlT25seSBJbiB0aGUgc291cmNlcyBsaXN0LCBzaG91bGQgb25seSB0aGUgbmF0aXZlIFxuICAgKiBpbWFnZSBiZSByZXR1cm5lZCBvciBhbGwgYXZhaWxhYmxlIHNpemUgb3B0aW9ucz9cbiAgICogXG4gICAqIEByZXR1cm5zIHtBcnJheX0gXG4gICAqL1xuICBfZ2V0SW1hZ2VTb3VyY2VzKGltYWdlUmVjb3JkLCBuYXRpdmVJbWFnZU9ubHk9ZmFsc2UpIHtcbiAgICBsZXQgZm9ybWF0ID0gdGhpcy5fZ2V0SW1hZ2VGb3JtYXQoaW1hZ2VSZWNvcmQpO1xuXG4gICAgaWYoIG5hdGl2ZUltYWdlT25seSApIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICByZWNvcmQgOiBpbWFnZVJlY29yZCxcbiAgICAgICAgdHlwZSA6ICdpbWFnZScsXG4gICAgICAgIHNyYyA6ICBjb25maWcuZmNyZXBvQmFzZVBhdGgraW1hZ2VSZWNvcmRbJ0BpZCddLFxuICAgICAgICBvcmlnaW5hbEZvcm1hdCA6IGZvcm1hdCxcbiAgICAgICAgZmlsZW5hbWUgOiBpbWFnZVJlY29yZC5maWxlbmFtZSB8fCBpbWFnZVJlY29yZC5uYW1lLFxuICAgICAgICBsYWJlbCA6IGltYWdlUmVjb3JkLmZpbGVuYW1lIHx8IGltYWdlUmVjb3JkLm5hbWVcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgbGV0IHNvdXJjZXMgPSBbXTtcbiAgICBmb3IoIGxldCBzaXplIG9mIGNvbmZpZy5pbWFnZURvd25sb2FkLnNpemVzICkge1xuICAgICAgbGV0IHdpZHRoID0gTWF0aC5mbG9vcihpbWFnZVJlY29yZC5pbWFnZS53aWR0aCAqIHNpemUucmF0aW8pO1xuICAgICAgbGV0IGhlaWdodCA9IE1hdGguZmxvb3IoaW1hZ2VSZWNvcmQuaW1hZ2UuaGVpZ2h0ICogc2l6ZS5yYXRpbyk7XG4gICAgICBsZXQgaWlpZlNpemUgPSB3aWR0aCsnLCcraGVpZ2h0O1xuICAgICAgc291cmNlcy5wdXNoKHtcbiAgICAgICAgcmVjb3JkIDogaW1hZ2VSZWNvcmQsXG4gICAgICAgIHR5cGUgOiAnaW1hZ2UnLFxuICAgICAgICBzcmMgOiAgY29uZmlnLmZjcmVwb0Jhc2VQYXRoK2ltYWdlUmVjb3JkWydAaWQnXSxcbiAgICAgICAgc2VydmljZSA6IGAvc3ZjOmlpaWYvZnVsbC8ke2lpaWZTaXplfS8wL2RlZmF1bHQuYCxcbiAgICAgICAgb3JpZ2luYWxGb3JtYXQgOiBmb3JtYXQsXG4gICAgICAgIGltYWdlVHlwZSA6IHNpemUuaW1hZ2VUeXBlLFxuICAgICAgICBmaWxlbmFtZSA6IGltYWdlUmVjb3JkLmZpbGVuYW1lIHx8IGltYWdlUmVjb3JkWydAaWQnXS5zcGxpdCgnLycpLnBvcCgpLFxuICAgICAgICBsYWJlbCA6IHNpemUubGFiZWwrJyAnK3dpZHRoKycgeCAnK2hlaWdodCsnIHB4JyxcbiAgICAgICAgd2lkdGgsIGhlaWdodFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZXM7XG4gIH1cblxuICBfZ2V0QXVkaW9Tb3VyY2VzKGF1ZGlvUmVjb3JkKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICByZWNvcmQ6IGF1ZGlvUmVjb3JkLFxuICAgICAgc3JjOiBjb25maWcuZmNyZXBvQmFzZVBhdGggKyBhdWRpb1JlY29yZFsnQGlkJ10sXG4gICAgICB0eXBlOiAnYXVkaW8nLFxuICAgICAgZmlsZW5hbWUgOiBhdWRpb1JlY29yZC5maWxlbmFtZSB8fCBhdWRpb1JlY29yZFsnQGlkJ10uc3BsaXQoJy8nKS5wb3AoKSxcbiAgICAgIGxhYmVsOiB0aGlzLl9nZXRUeXBlTGFiZWwoYXVkaW9SZWNvcmQpICsgKGF1ZGlvUmVjb3JkLmZpbGVTaXplID8gJyAoJyArIGJ5dGVzKGF1ZGlvUmVjb3JkLmZpbGVTaXplKSArICcpICcgOiAnJylcbiAgICB9XTtcbiAgfVxuXG4gIF9nZXRWaWRlb1NvdXJjZXModmlkZW9SZWNvcmQpIHtcbiAgICBsZXQgc291cmNlcyA9IFt7XG4gICAgICByZWNvcmQgOiB2aWRlb1JlY29yZCxcbiAgICAgIHR5cGUgOiAndmlkZW8nLFxuICAgICAgc3JjIDogY29uZmlnLmZjcmVwb0Jhc2VQYXRoICsgdmlkZW9SZWNvcmRbJ0BpZCddLFxuICAgICAgZmlsZW5hbWUgOiB2aWRlb1JlY29yZC5maWxlbmFtZSB8fCB2aWRlb1JlY29yZFsnQGlkJ10uc3BsaXQoJy8nKS5wb3AoKSxcbiAgICAgIGxhYmVsIDogdGhpcy5fZ2V0VHlwZUxhYmVsKHZpZGVvUmVjb3JkKSArICh2aWRlb1JlY29yZC5maWxlU2l6ZSA/ICcgKCcgKyBieXRlcyh2aWRlb1JlY29yZC5maWxlU2l6ZSkgKyAnKSAnIDogJycpXG4gICAgfV07XG5cbiAgICBsZXQgdHJhbnNjcmlwdHMgPSB2aWRlb1JlY29yZC50cmFuc2NyaXB0IHx8IFtdO1xuICAgIGlmKCAhQXJyYXkuaXNBcnJheSh0cmFuc2NyaXB0cykgKSB0cmFuc2NyaXB0cyA9IFt0cmFuc2NyaXB0c107XG5cbiAgICB0cmFuc2NyaXB0c1xuICAgICAgLmZpbHRlcih0cmFuc2NyaXB0ID0+IHRyYW5zY3JpcHQuZXJyb3IgIT09IHRydWUpXG4gICAgICAuZm9yRWFjaCh0cmFuc2NyaXB0ID0+IHtcbiAgICAgICAgc291cmNlcy5wdXNoKHtcbiAgICAgICAgICByZWNvcmQ6IHRyYW5zY3JpcHQsXG4gICAgICAgICAgc3JjOiBjb25maWcuZmNyZXBvQmFzZVBhdGggKyB0cmFuc2NyaXB0WydAaWQnXSxcbiAgICAgICAgICB0eXBlOiAndHJhbnNjcmlwdCcsXG4gICAgICAgICAgZmlsZW5hbWUgOiB0cmFuc2NyaXB0LmZpbGVuYW1lIHx8IHRyYW5zY3JpcHRbJ0BpZCddLnNwbGl0KCcvJykucG9wKCksXG4gICAgICAgICAgbGFiZWw6IHRoaXMuX2dldFR5cGVMYWJlbCh0cmFuc2NyaXB0KSArICcgKHZpZGVvIHRyYW5zY3JpcHQgb25seSknXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gc291cmNlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9nZXRUeXBlTGFiZWxcbiAgICogQGRlc2NyaXB0aW9uIGdldCBhIG5pY2UgbGFiZWwgZm9yIGEgbWVkaWEgdHlwZS4gIFVzZXMgdGhlIGVuY29kaW5nRm9ybWF0IG9yIGZpbGVGb3JtYXQsIHNwbGl0cyBhcGFydFxuICAgKiBtaW1lIHR5cGUgYW5kIHRha2VzIHNlY29uZCBhcmcgKHBhcnQgYWZ0ZXIgc2xhc2gpLiAgRmFsbHMgYmFjayBvbiBmaWxlIGV4dGVuc2lvbiBpZiBub3QgZW5jb2RpbmdGb3JtYXRcbiAgICogb3IgZmlsZUZvcm1hdCBpcyBwcm92aWRlZC5cbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmQgZmlsZSBtZWRpYSByZWNvcmRcbiAgICogXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBfZ2V0VHlwZUxhYmVsKHJlY29yZCkge1xuICAgIGxldCB0eXBlID0gcmVjb3JkLmVuY29kaW5nRm9ybWF0IHx8IHJlY29yZC5maWxlRm9ybWF0O1xuICAgIGlmKCB0eXBlICkgcmV0dXJuIHR5cGUuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICByZXR1cm4gcmVjb3JkWydAaWQnXS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykucG9wKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25DaGFuZ2VEb3dubG9hZE9wdGlvbnNcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGRvd25sb2FkIG9wdGlvbnMgc2VsZWN0IGVsZW1lbnQgb24tY2hhbmdlIGV2ZW50XG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcbiAgICovXG4gIF9vbkNoYW5nZURvd25sb2FkT3B0aW9ucyhlKSB7XG4gICAgbGV0IHNvdXJjZSA9IHRoaXMuZG93bmxvYWRPcHRpb25zW3BhcnNlSW50KGUuY3VycmVudFRhcmdldC52YWx1ZSldO1xuXG4gICAgaWYoIHNvdXJjZS50eXBlID09PSAnaW1hZ2UnICkge1xuICAgICAgdGhpcy5fcmVuZGVySW1nRm9ybWF0cyhzb3VyY2UucmVjb3JkLCB0aGlzLiQuZm9ybWF0LnZhbHVlLCBzb3VyY2UuaW1hZ2VUeXBlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXREb3dubG9hZEhyZWYoc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJJbWdGb3JtYXRzXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiByZW5kZXIgaW1hZ2UgZm9ybWF0cyBzZWxlY3QgZWxlbWVudCBiYXNlZCBvZiBzdGF0aWMgZm9ybWF0IFxuICAgKiBsaXN0IGFuZCBhZGRpdGlvbmFsIG5hdGl2ZSBmb3JtYXQgaWYgbm90IGluIGxpc3QgYW5kIHNpemUgaXMgYXRcbiAgICogZnVsbCByZXNvbHV0aW9uLlxuICAgKi9cbiAgX3JlbmRlckltZ0Zvcm1hdHMoaW1hZ2VSZWNvcmQsIHNlbGVjdGVkRm9ybWF0LCBzZWxlY3RlZFNpemUpIHtcbiAgICBsZXQgb3JpZ2luYWxGb3JtYXQgPSB0aGlzLl9nZXRJbWFnZUZvcm1hdChpbWFnZVJlY29yZCk7XG4gICAgaWYoICFzZWxlY3RlZEZvcm1hdCApIHNlbGVjdGVkRm9ybWF0ID0gb3JpZ2luYWxGb3JtYXQ7XG5cbiAgICBsZXQgZm9ybWF0cyA9IGNvbmZpZy5pbWFnZURvd25sb2FkLmZvcm1hdHMuc2xpY2UoMCk7XG4gICAgaWYoIGZvcm1hdHMuaW5kZXhPZihvcmlnaW5hbEZvcm1hdCkgPT09IC0xICYmIHNlbGVjdGVkU2l6ZSA9PT0gJ0ZSJyApIHtcbiAgICAgIGZvcm1hdHMucHVzaChvcmlnaW5hbEZvcm1hdCk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtYXRzID0gZm9ybWF0cztcbiAgICB0aGlzLiQuZm9ybWF0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgdGhpcy5mb3JtYXRzLmZvckVhY2goZm9ybWF0ID0+IHtcbiAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBmb3JtYXQgKyAoKGZvcm1hdCA9PT0gb3JpZ2luYWxGb3JtYXQgJiYgc2VsZWN0ZWRTaXplID09PSAnRlInKSA/ICcgKG5hdGl2ZSknIDogJycpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gZm9ybWF0O1xuXG4gICAgICBpZiAoZm9ybWF0ID09PSBzZWxlY3RlZEZvcm1hdCkge1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLiQuZm9ybWF0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZ2V0SW1hZ2VGb3JtYXRcbiAgICogQGRlc2NyaXB0aW9uIGdldCB0aGUgaW1hZ2UgZm9ybWF0LiBMb29rcyBhdCB0aGUgc2NoZW1hLm9yZyBmaWxlRm9ybWF0IHBhcmFtZXRlciBvciBmYWxscyBiYWNrIHRvIHRoZSB1cmxcbiAgICogXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBfZ2V0SW1hZ2VGb3JtYXQoaW1hZ2VSZWNvcmQpIHtcbiAgICBsZXQgb3JpZ2luYWxGb3JtYXQgPSAoaW1hZ2VSZWNvcmQuZmlsZUZvcm1hdCB8fCBpbWFnZVJlY29yZFsnQGlkJ10uc3BsaXQoJy4nKS5wb3AoKSB8fCAnJylcbiAgICAgIC5yZXBsYWNlKC8uKlxcLy8sICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGhhY2tcbiAgICBpZiggb3JpZ2luYWxGb3JtYXQgPT09ICdqcGVnJyApIG9yaWdpbmFsRm9ybWF0ID0gJ2pwZyc7XG4gICAgcmV0dXJuIG9yaWdpbmFsRm9ybWF0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uRm9ybWF0U2VsZWN0ZWRcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIHdoZW4gYSBmb3JtYXQgaXMgc2VsZWN0ZWQsIHJlbmRlciB0aGUgZG93bmxvYWQgYnV0dG9uLlxuICAgKi9cbiAgX29uRm9ybWF0U2VsZWN0ZWQoKSB7XG4gICAgbGV0IHNlbGVjdGVkRm9ybWF0ID0gdGhpcy4kLmZvcm1hdC52YWx1ZS5yZXBsYWNlKC8gLiovLCAnJyk7XG4gICAgbGV0IHNvdXJjZSA9IHRoaXMuZG93bmxvYWRPcHRpb25zW3BhcnNlSW50KHRoaXMuJC5kb3dubG9hZE9wdGlvbnMudmFsdWUpXTtcbiAgICB0aGlzLl9yZW5kZXJJbWdGb3JtYXRzKHNvdXJjZS5yZWNvcmQsIHNlbGVjdGVkRm9ybWF0LCBzb3VyY2UuaW1hZ2VUeXBlKTtcbiAgICB0aGlzLl9zZXREb3dubG9hZEhyZWYoc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF90b2dnbGVNdWx0aXBsZURvd25sb2FkXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byByYWRpbyBidXR0b25zIGNsaWNrIGV2ZW50XG4gICAqL1xuICBfdG9nZ2xlTXVsdGlwbGVEb3dubG9hZCgpIHtcbiAgICB0aGlzLmZ1bGxTZXRTZWxlY3RlZCA9IHRoaXMuJC5mdWxsc2V0LmNoZWNrZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5fc2V0WmlwUGF0aHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zZXRaaXBQYXRoc1xuICAgKiBAZGVzY3JpcHRpb24gc2V0IHRoZSBmdWxsc2V0L3ppcCBmb3JtIGVsZW1lbnRzLlxuICAgKi9cbiAgX3NldFppcFBhdGhzKCkge1xuICAgIGxldCB1cmxzID0ge307XG4gICAgdGhpcy56aXBOYW1lID0gdGhpcy5yb290UmVjb3JkLm5hbWUucmVwbGFjZSgvW15hLXpBLVowLTldL2csICctJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBzb3VyY2VzID0gdGhpcy5fZ2V0QWxsTmF0aXZlRG93bmxvYWRTb3VyY2VzKCk7XG5cbiAgICBmb3IoIGxldCBzb3VyY2Ugb2Ygc291cmNlcyApIHtcbiAgICAgIHVybHNbc291cmNlLmZpbGVuYW1lXSA9IHNvdXJjZS5zcmM7XG4gICAgfVxuXG4gICAgdGhpcy4kLnppcFBhdGhzLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodXJscyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZ2V0QWxsTmF0aXZlRG93bmxvYWRTb3VyY2VzXG4gICAqIEBkZXNjcmlwdGlvbiBmb3IgdGhlIGN1cnJlbnQgcm9vdCByZWNvcmQsIHJldHVybiBhbGwgbWVkaWEgcmVjb3JkcyB0aGF0IGFyZVxuICAgKiBhdmFpbGFibGUgZm9yIGRvd25sb2FkLiAgTm90ZSwgZm9yIGltYWdlcywgdGhlcmUgaXMgb25seSBvbmx5IHJlY29yZCBwZXIgaW1hZ2UsXG4gICAqIHRoZSBuYXRpdmUgZm9ybWF0LlxuICAgKiBcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBfZ2V0QWxsTmF0aXZlRG93bmxvYWRTb3VyY2VzKCkge1xuICAgIGxldCBzb3VyY2VzID0gW107XG4gICAgZm9yKCBsZXQgdHlwZSBpbiB0aGlzLnJvb3RSZWNvcmQubWVkaWEgKSB7XG4gICAgICBmb3IoIGxldCBtZWRpYSBvZiB0aGlzLnJvb3RSZWNvcmQubWVkaWFbdHlwZV0gKSB7XG4gICAgICAgIHNvdXJjZXMgPSBzb3VyY2VzLmNvbmNhdCh0aGlzLl9nZXREb3dubG9hZFNvdXJjZXMobWVkaWEsIHRydWUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZXM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZG93bmxvYWRaaXBcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGRvd25sb2FkIHNldCBidXR0b24gY2xpY2sgZXZlbnRcbiAgICovXG4gIF9vbkRvd25sb2FkRnVsbFNldENsaWNrZWQoKSB7XG4gICAgdGhpcy4kLmRvd25sb2FkWmlwLnN1Ym1pdCgpO1xuXG4gICAgbGV0IHBhdGggPSB0aGlzLnJvb3RSZWNvcmRbJ0BpZCddLnJlcGxhY2UoY29uZmlnLmZjcmVwb0Jhc2VQYXRoLCAnJyk7XG4gICAgZ3RhZygnZXZlbnQnLCAnZG93bmxvYWQnLCB7XG4gICAgICAnZXZlbnRfY2F0ZWdvcnknOiAnZnVsbHNldCcsXG4gICAgICAnZXZlbnRfbGFiZWwnOiBwYXRoLFxuICAgICAgJ3ZhbHVlJzogMVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uRG93bmxvYWRDbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBkb3dubG9hZCBidXR0b24gY2xpY2sgZXZlbnQsIHJlY29yZCBhbmFseXRpY3NcbiAgICovXG4gIF9vbkRvd25sb2FkQ2xpY2tlZCgpIHtcbiAgICBsZXQgcGF0aCA9IHRoaXMuaHJlZi5yZXBsYWNlKGNvbmZpZy5mY3JlcG9CYXNlUGF0aCwgJycpO1xuXG4gICAgZ3RhZygnZXZlbnQnLCAnZG93bmxvYWQnLCB7XG4gICAgICAnZXZlbnRfY2F0ZWdvcnknOiB0aGlzLnNvdXJjZVR5cGUsXG4gICAgICAnZXZlbnRfbGFiZWwnOiBwYXRoLFxuICAgICAgJ3ZhbHVlJzogMVxuICAgIH0pO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtbWVkaWEtZG93bmxvYWQnLCBBcHBNZWRpYURvd25sb2FkKTsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtcmVjb3JkLW1ldGFkYXRhLWxheW91dC5odG1sXCI7XG5cbi8vIGltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRhYnMvcGFwZXItdGFic1wiXG4vLyBpbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYlwiXG5pbXBvcnQgXCIuLi8uLi91dGlscy9hcHAtdGFic1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1wYWdlcy9pcm9uLXBhZ2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLW1lZGlhLXF1ZXJ5L2lyb24tbWVkaWEtcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwUmVjb3JkTWV0YWRhdGFMYXlvdXQgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9iaWxlIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX3VwZGF0ZVZpc2libGVQYW5lbHMnXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWRUYWIgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogJ2RhdGEnLFxuICAgICAgICBvYnNlcnZlciA6ICdfdXBkYXRlVmlzaWJsZVBhbmVscydcbiAgICAgIH0sXG4gICAgICBzaG93UmlnaHQgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IHRydWVcbiAgICAgIH0sXG4gICAgICBzaG93TGVmdCA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHRhYnMgOiB7XG4gICAgICAgIHR5cGUgOiBBcnJheSxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiBbXG4gICAgICAgICAge2xhYmVsIDogJ0l0ZW0gRGF0YScsIHZhbHVlOiAnZGF0YSd9LFxuICAgICAgICAgIHtsYWJlbCA6ICdDaXRlIEl0ZW0nLCB2YWx1ZTogJ2NpdGUnfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF91cGRhdGVWaXNpYmxlUGFuZWxzXG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsZWQgd2hlbiBgbW9iaWxlYCBvciBgc2VsZWN0ZWRUYWJgIHByb3BlcnR5IGlzIHVwZGF0ZWRcbiAgICogU2V0IHRoZSBjb3JyZWN0IHBhbmVsIHRvIGRpc3BsYXkuXG4gICAqL1xuICBfdXBkYXRlVmlzaWJsZVBhbmVscygpIHtcbiAgICB0aGlzLnNob3dSaWdodCA9IHRydWU7XG4gICAgdGhpcy5zaG93TGVmdCA9IHRydWU7XG5cbiAgICBpZiggIXRoaXMubW9iaWxlICkgcmV0dXJuO1xuICAgIFxuICAgIGlmKCB0aGlzLnNlbGVjdGVkVGFiID09PSAnZGF0YScgKSB0aGlzLnNob3dSaWdodCA9IGZhbHNlO1xuICAgIGVsc2UgdGhpcy5zaG93TGVmdCA9IGZhbHNlO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtcmVjb3JkLW1ldGFkYXRhLWxheW91dCcsIEFwcFJlY29yZE1ldGFkYXRhTGF5b3V0KTsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IHttYXJrZG93bn0gZnJvbSBcIm1hcmtkb3duXCJcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1yZWNvcmQuaHRtbFwiXG5pbXBvcnQgcmlnaHRzRGVmaW5pdGlvbnMgZnJvbSBcIi4uLy4uLy4uL2xpYi9yaWdodHMuanNvblwiXG5pbXBvcnQgY2l0YXRpb25zIGZyb20gXCIuLi8uLi8uLi9saWIvbW9kZWxzL0NpdGF0aW9uc01vZGVsXCJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCJcblxuaW1wb3J0IFwiLi9hcHAtbWVkaWEtZG93bmxvYWRcIlxuaW1wb3J0IFwiLi9hcHAtZnMtbWVkaWEtZG93bmxvYWRcIlxuaW1wb3J0IFwiLi9hcHAtcmVjb3JkLW1ldGFkYXRhLWxheW91dFwiXG5pbXBvcnQgXCIuL2FwcC1jb3B5LWNpdGVcIlxuaW1wb3J0IFwiLi92aWV3ZXIvYXBwLW1lZGlhLXZpZXdlclwiXG5cbmltcG9ydCBDb2xsZWN0aW9uSW50ZXJmYWNlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0NvbGxlY3Rpb25JbnRlcmZhY2VcIlxuaW1wb3J0IE1lZGlhSW50ZXJmYWNlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL01lZGlhSW50ZXJmYWNlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwUmVjb3JkIGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gICAgICAud2l0aChFdmVudEludGVyZmFjZSwgQ29sbGVjdGlvbkludGVyZmFjZSwgTWVkaWFJbnRlcmZhY2UpIHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50UmVjb3JkSWQgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBuYW1lIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgY29sbGVjdGlvbk5hbWUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBkYXRlIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgc2l6ZSA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIHJpZ2h0cyA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiB7fVxuICAgICAgfSxcbiAgICAgIG1ldGFkYXRhIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW11cbiAgICAgIH0sXG4gICAgICBpc0JhZ09mRmlsZXMgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnKTtcbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnUmVjb3JkTW9kZWwnKTtcbiAgfVxuXG4gIGFzeW5jIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICBsZXQgc2VsZWN0ZWRSZWNvcmQgPSBhd2FpdCB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0U2VsZWN0ZWRSZWNvcmQoKTtcbiAgICBpZiggc2VsZWN0ZWRSZWNvcmQgKSB7XG4gICAgICBhd2FpdCB0aGlzLl9vblNlbGVjdGVkUmVjb3JkVXBkYXRlKHNlbGVjdGVkUmVjb3JkKTtcbiAgICAgIGxldCBzZWxlY3RlZFJlY29yZE1lZGlhID0gYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkTWVkaWEoKTtcbiAgICAgIGlmKCBzZWxlY3RlZFJlY29yZE1lZGlhICkgdGhpcy5fb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKHNlbGVjdGVkUmVjb3JkTWVkaWEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblJlY29yZFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBSZWNvcmRNb2RlbCwgbGlzdGVuIGZvciBsb2FkaW5nIGV2ZW50cyBhbmQgcmVzZXQgVUkuXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBzdGF0ZSBldmVudCBcbiAgICovXG4gIF9vblJlY29yZFVwZGF0ZShlKSB7XG4gICAgaWYoIGUuc3RhdGUgIT09ICdsb2FkaW5nJyApIHJldHVybjtcblxuICAgIHRoaXMucmVuZGVyZWRSZWNvcmRJZCA9IG51bGw7XG4gICAgdGhpcy5yZWNvcmQgPSBudWxsO1xuICAgIHRoaXMuJC5kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gJyc7XG4gICAgdGhpcy5hbHRlcm5hdGl2ZUhlYWRsaW5lID0gJyc7XG4gICAgdGhpcy4kLmxpbmsudmFsdWUgPSAnJztcbiAgICB0aGlzLmRhdGUgPSAnJztcbiAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gJyc7XG4gICAgdGhpcy5yaWdodHMgPSBudWxsO1xuICAgIHRoaXMuJC5jb2xsZWN0aW9uVmFsdWUuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy4kLm1sYS50ZXh0ID0gJyc7XG4gICAgdGhpcy4kLmFwYS50ZXh0ID0gJyc7XG4gICAgdGhpcy4kLmNoaWNhZ28udGV4dCA9ICcnO1xuICAgIHRoaXMuJC5pZGVudGlmaWVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRoaXMuJC5jcmVhdG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRoaXMuJC5zdWJqZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRoaXMuJC5wdWJsaXNoZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgdGhpcy4kLmZlZG9yYVZhbHVlLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMubWV0YWRhdGEgPSBbXTtcbiAgICB0aGlzLmlzQmFnT2ZGaWxlcyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VsZWN0ZWRSZWNvcmRVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGZyb20gQXBwU3RhdGVJbnRlcmZhY2UsIGNhbGxlZCB3aGVuIGEgcmVjb3JkIGlzIHNlbGVjdGVkXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkIHNlbGVjdGVkIHJlY29yZFxuICAgKi9cbiAgYXN5bmMgX29uU2VsZWN0ZWRSZWNvcmRVcGRhdGUocmVjb3JkKSB7XG4gICAgaWYoICFyZWNvcmQgKSByZXR1cm47XG4gICAgaWYoIHJlY29yZFsnQGlkJ10gJiYgcmVjb3JkWydAaWQnXSA9PT0gdGhpcy5yZW5kZXJlZFJlY29yZElkICkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZW5kZXJlZFJlY29yZElkID0gcmVjb3JkWydAaWQnXTtcbiAgICB0aGlzLnJlY29yZCA9IHJlY29yZDtcblxuICAgIGlmKCB0aGlzLnJlY29yZC5kZXNjcmlwdGlvbiApIHtcbiAgICAgIHRoaXMuJC5kZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMuJC5kZXNjcmlwdGlvblZhbHVlLmlubmVySFRNTCA9IG1hcmtkb3duLnRvSFRNTCh0aGlzLnJlY29yZC5kZXNjcmlwdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy5yZWNvcmQuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgdGhpcy5hbHRlcm5hdGl2ZUhlYWRsaW5lID0gdGhpcy5yZWNvcmQuYWx0ZXJuYXRpdmVIZWFkbGluZSB8fCAnJztcbiAgICB0aGlzLiQubGluay52YWx1ZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG4gICAgdGhpcy4kLmRhdGVWYWx1ZS5pbm5lckhUTUwgPSB0aGlzLnJlY29yZC5kYXRlUHVibGlzaGVkIHx8ICdVbmRhdGVkJztcblxuICAgIC8vIFRPRE86IGFkZCBiYWNrIGluIHdoZW4gd2UgZmlndXJlIG91dCBjb25zb2xpZGF0ZWQgcmVzb3VyY2UgdHlwZSBcbiAgICAvLyB0aGlzLiQucmVzb3VyY2VUeXBlLmlubmVySFRNTCA9IHRoaXMucmVjb3JkLnR5cGUgPyAnPGRpdj4nK3RoaXMucmVjb3JkLnR5cGUuam9pbignPC9kaXY+PGRpdj4nKSsnPC9kaXY+JyA6ICdVbmtub3duJztcbiAgICBpZiggdGhpcy5yZWNvcmQubGljZW5zZSAmJlxuICAgICAgICB0aGlzLnJlY29yZC5saWNlbnNlWydAaWQnXSAmJiBcbiAgICAgICAgcmlnaHRzRGVmaW5pdGlvbnNbdGhpcy5yZWNvcmQubGljZW5zZVsnQGlkJ11dICkge1xuXG4gICAgICBsZXQgZGVmID0gcmlnaHRzRGVmaW5pdGlvbnNbdGhpcy5yZWNvcmQubGljZW5zZVsnQGlkJ11dO1xuICAgICAgdGhpcy5yaWdodHMgPSB7XG4gICAgICAgIGxpbmsgOiB0aGlzLnJlY29yZC5saWNlbnNlWydAaWQnXSxcbiAgICAgICAgbGFiZWwgOiBkZWYudGV4dC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBpY29uIDogYC9pbWFnZXMvcmlnaHRzLWljb25zLyR7ZGVmLmljb259LnN2Z2BcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yaWdodHMgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSB0aGlzLnJlY29yZC5jb2xsZWN0aW9uSWQgfHwgJyc7XG4gICAgaWYoIHRoaXMuY29sbGVjdGlvbk5hbWUgKSB7XG4gICAgICBsZXQgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMuX2dldENvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uTmFtZSk7XG4gICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbi5uYW1lO1xuICAgICAgdGhpcy5yZWNvcmQuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uLm5hbWU7XG4gICAgfVxuXG4gICAgLy8gQXR0YWNoIGEgcmVjb2QgdG8gdGhlIGRvd25sb2FkIG9wdGlvbnNcbiAgICAvLyB0aGlzLiQuZG93bmxvYWQuc2V0Um9vdFJlY29yZChyZWNvcmQpO1xuXG4gICAgLy8gZmluZCBhcmtzIG9yIGRvaVxuICAgIHRoaXMuX3JlbmRlcklkZW50aWZpZXIocmVjb3JkKTtcbiAgICB0aGlzLl9yZW5kZXJDcmVhdG9ycyhyZWNvcmQpO1xuICAgIHRoaXMuX3JlbmRlclN1YmplY3RzKHJlY29yZCk7XG4gICAgdGhpcy5fcmVuZGVyUHVibGlzaGVyKHJlY29yZCk7XG5cbiAgICAvLyBzZXQgY29sbGVjdGlvbiBsaW5rXG4gICAgdGhpcy4kLmNvbGxlY3Rpb25WYWx1ZS5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiR7cmVjb3JkLmNvbGxlY3Rpb25JZH1cIj4ke3RoaXMuY29sbGVjdGlvbk5hbWV9PC9hPmA7XG5cbiAgICAvLyBzZXQgZmVkb3JhIGNvbGxlY3Rpb24gbGlua1xuICAgIHRoaXMuX3JlbmRlckZjTGluayhyZWNvcmQpO1xuXG4gICAgLy8gdGhpcy5fdXBkYXRlTWV0YWRhdGFSb3dzKCk7XG4gICAgLy8gdGhpcy5fc2V0VGFySHJlZigpO1xuXG4gICAgLy8gcmVuZGVyIGNpdGF0aW9ucy4uIHRoaXMgbWlnaHQgbmVlZCB0byBsb2FkIGxpYnJhcnksIGRvIGl0IGxhc3RcbiAgICB0aGlzLiQubWxhLnRleHQgPSBhd2FpdCBjaXRhdGlvbnMucmVuZGVyRXNSZWNvcmQodGhpcy5yZWNvcmQsICdtbGEnKTtcbiAgICB0aGlzLiQuYXBhLnRleHQgPSBhd2FpdCBjaXRhdGlvbnMucmVuZGVyRXNSZWNvcmQodGhpcy5yZWNvcmQsICdhcGEnKTtcbiAgICB0aGlzLiQuY2hpY2Fnby50ZXh0ID0gYXdhaXQgY2l0YXRpb25zLnJlbmRlckVzUmVjb3JkKHRoaXMucmVjb3JkLCAnY2hpY2FnbycpO1xuXG4gICAgdGhpcy5pc0JhZ09mRmlsZXMgPSB0aGlzLnJlY29yZFsnQHR5cGUnXS5pbmNsdWRlcygnaHR0cDovL2RpZ2l0YWwudWNkYXZpcy5lZHUvc2NoZW1hI0JhZ09mRmlsZXMnKTtcbiAgfVxuXG4gIF9yZW5kZXJGY0xpbmsocmVjb3JkLCBtZWRpYSkge1xuICAgIGxldCBtZXRhZGF0YVBhcnQgPSByZWNvcmRbJ0B0eXBlJ10uZmluZCh0eXBlID0+IHR5cGUubWF0Y2goL2JpbmFyeS9pKSkgPyAnL2ZjcjptZXRhZGF0YScgOiAnJztcbiAgICBsZXQgbGluayA9IHRoaXMuX2dldEhvc3QoKSsnZmNyZXBvL3Jlc3QnK3JlY29yZFsnQGlkJ10rbWV0YWRhdGFQYXJ0O1xuICAgIGxldCBodG1sID0gYDxhIGhyZWY9XCIke2xpbmt9XCI+JHtyZWNvcmRbJ0BpZCddfTwvYT5gO1xuXG4gICAgaWYoIG1lZGlhICYmIHJlY29yZFsnQGlkJ10gIT09IG1lZGlhWydAaWQnXSApIHtcbiAgICAgIG1ldGFkYXRhUGFydCA9IG1lZGlhWydAdHlwZSddLmZpbmQodHlwZSA9PiB0eXBlLm1hdGNoKC9iaW5hcnkvaSkpID8gJy9mY3I6bWV0YWRhdGEnIDogJyc7XG4gICAgICBsaW5rID0gdGhpcy5fZ2V0SG9zdCgpKydmY3JlcG8vcmVzdCcrbWVkaWFbJ0BpZCddK21ldGFkYXRhUGFydDtcbiAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJmYy1icmVha1wiPjwvZGl2PjxkaXY+PGEgaHJlZj1cIiR7bGlua31cIj4ke21lZGlhWydAaWQnXX08L2E+PC9kaXY+YDtcbiAgICB9XG5cbiAgICB0aGlzLiQuZmVkb3JhVmFsdWUuaW5uZXJIVE1MID0gaHRtbDtcbiAgfVxuXG4gIF9yZW5kZXJTZWxlY3RlZE1lZGlhKCkge1xuICAgIGxldCBpbWFnZUxpc3QgPSB0aGlzLl9nZXRJbWFnZU1lZGlhTGlzdCh0aGlzLnJlY29yZCk7XG4gICAgaWYoIHRoaXMucmVjb3JkLmFzc29jaWF0ZWRNZWRpYSApIHsgXG4gICAgICBpZiggaW1hZ2VMaXN0Lmxlbmd0aCApIHtcblxuICAgICAgICAvLyBzZWUgaWYgdXJsIGhhcyBzZWxlY3RlZCBhbiBpbWFnZVxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBpbWFnZUxpc3RbMF07XG4gICAgICAgIGZvciggbGV0IGltZyBvZiBpbWFnZUxpc3QgKSB7XG4gICAgICAgICAgaWYoIGltZ1snQGlkJ10gPT09IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSApIHtcbiAgICAgICAgICAgIHNlbGVjdGVkID0gaW1nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldFNlbGVjdGVkUmVjb3JkTWVkaWEoc2VsZWN0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRSZWNvcmRNZWRpYSh0aGlzLnJlY29yZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFNlbGVjdGVkUmVjb3JkTWVkaWEodGhpcy5yZWNvcmQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJDcmVhdG9yc1xuICAgKiBAZGVzY3JpcHRpb24gcmVuZGVyIGNyZWF0b3IgZmllbGRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICovXG4gIF9yZW5kZXJDcmVhdG9ycyhyZWNvcmQpIHtcbiAgICAvLyBmaWx0ZXIgdG8gdGhvc2Ugdy8gbGFiZWxzXG4gICAgbGV0IGNyZWF0b3JzID0gdXRpbHMuYXNBcnJheShyZWNvcmQsICdjcmVhdG9ycycpO1xuXG4gICAgaWYoIGNyZWF0b3JzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgIHJldHVybiB0aGlzLiQuY3JlYXRvci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBsYWJlbCBpcyB1bmRlciBjcmVhdG9yLm5hbWVcbiAgICB0aGlzLiQuY3JlYXRvclZhbHVlLmlubmVySFRNTCA9IGNyZWF0b3JzIFxuICAgICAgLm1hcChjcmVhdG9yID0+IHtcbiAgICAgICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuUmVjb3JkTW9kZWwuZW1wdHlTZWFyY2hEb2N1bWVudCgpO1xuICAgICAgICB0aGlzLlJlY29yZE1vZGVsLmFwcGVuZEtleXdvcmRGaWx0ZXIoc2VhcmNoRG9jLCAnY3JlYXRvcnMnLCBjcmVhdG9yKTtcbiAgICAgICAgdGhpcy5SZWNvcmRNb2RlbC5hcHBlbmRLZXl3b3JkRmlsdGVyKHNlYXJjaERvYywgJ2lzUGFydE9mLkBpZCcsIHJlY29yZC5jb2xsZWN0aW9uSWQpO1xuICAgICAgICBsZXQgbGluayA9IHRoaXMuX2dldEhvc3QoKSsnc2VhcmNoLycrdGhpcy5SZWNvcmRNb2RlbC5zZWFyY2hEb2N1bWVudFRvVXJsKHNlYXJjaERvYyk7XG4gICAgICAgIHJldHVybiBgPGEgaHJlZj1cIiR7bGlua31cIj4ke2NyZWF0b3J9PC9hPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJywgJyk7XG5cbiAgICB0aGlzLiQuY3JlYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJTdWJqZWN0c1xuICAgKiBAZGVzY3JpcHRpb24gcmVuZGVyIHN1YmplY3QgZmllbGQsIHdoaWNoIGlzIHJlYWxseSAnYWJvdXRzJyBkZXJpdmVkIGZyb20gJ3NjaGVtYTphYm91dCdcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICovXG4gIF9yZW5kZXJTdWJqZWN0cyhyZWNvcmQpIHtcbiAgICAvLyBmaWx0ZXIgdG8gdGhvc2Ugdy8gbGFiZWxzXG4gICAgbGV0IHN1YmplY3RzID0gdXRpbHMuYXNBcnJheShyZWNvcmQsICdhYm91dHMnKTtcbiAgICAvLyAuZmlsdGVyKHN1YmplY3QgPT4gc3ViamVjdC5uYW1lID8gdHJ1ZSA6IGZhbHNlKTtcblxuICAgIGlmKCBzdWJqZWN0cy5sZW5ndGggPT09IDAgKSB7XG4gICAgICByZXR1cm4gdGhpcy4kLnN1YmplY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogbGFiZWwgaXMgdW5kZXIgY3JlYXRvci5uYW1lXG4gICAgdGhpcy4kLnN1YmplY3RWYWx1ZS5pbm5lckhUTUwgPSBzdWJqZWN0cyBcbiAgICAgIC5tYXAoc3ViamVjdCA9PiB7XG4gICAgICAgIC8vIHN1YmplY3QgPSBzdWJqZWN0Lm5hbWU7XG4gICAgICAgIGxldCBzZWFyY2hEb2MgPSB0aGlzLlJlY29yZE1vZGVsLmVtcHR5U2VhcmNoRG9jdW1lbnQoKTtcbiAgICAgICAgdGhpcy5SZWNvcmRNb2RlbC5hcHBlbmRLZXl3b3JkRmlsdGVyKHNlYXJjaERvYywgJ2Fib3V0cy5yYXcnLCBzdWJqZWN0KTtcbiAgICAgICAgdGhpcy5SZWNvcmRNb2RlbC5hcHBlbmRLZXl3b3JkRmlsdGVyKHNlYXJjaERvYywgJ2lzUGFydE9mLkBpZCcsIHJlY29yZC5jb2xsZWN0aW9uSWQpO1xuICAgICAgICBsZXQgbGluayA9IHRoaXMuX2dldEhvc3QoKSsnc2VhcmNoLycrdGhpcy5SZWNvcmRNb2RlbC5zZWFyY2hEb2N1bWVudFRvVXJsKHNlYXJjaERvYyk7XG4gICAgICAgIHJldHVybiBgPGEgaHJlZj1cIiR7bGlua31cIj4ke3N1YmplY3R9PC9hPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJywgJyk7XG5cbiAgICB0aGlzLiQuc3ViamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJQdWJsaXNoZXJcbiAgICogQGRlc2NyaXB0aW9uIHJlbmRlciBwdWJsaXNoZXIgZmllbGRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICovXG4gIF9yZW5kZXJQdWJsaXNoZXIocmVjb3JkKSB7XG4gICAgLy8gZmlsdGVyIHRvIHRob3NlIHcvIGxhYmVsc1xuICAgIGxldCBwdWJsaXNoZXJzID0gdXRpbHMuYXNBcnJheShyZWNvcmQsICdwdWJsaXNoZXInKVxuICAgICAgLmZpbHRlcihwdWJsaXNoZXIgPT4gcHVibGlzaGVyLm5hbWUgPyB0cnVlIDogZmFsc2UpO1xuXG4gICAgaWYoIHB1Ymxpc2hlcnMubGVuZ3RoID09PSAwICkge1xuICAgICAgcmV0dXJuIHRoaXMuJC5wdWJsaXNoZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgdGhpcy4kLnB1Ymxpc2hlclZhbHVlLmlubmVySFRNTCA9IHB1Ymxpc2hlcnMgXG4gICAgICAubWFwKHB1Ymxpc2hlciA9PiBwdWJsaXNoZXIubmFtZSlcbiAgICAgIC5qb2luKCcsICcpO1xuXG4gICAgdGhpcy4kLnB1Ymxpc2hlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJJZGVudGlmaWVyXG4gICAqIEBkZXNjcmlwdGlvbiByZW5kZXIgYXJrL2RvaSBmaWVsZFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZCBcbiAgICovXG4gIF9yZW5kZXJJZGVudGlmaWVyKHJlY29yZCwgbWVkaWEpIHtcbiAgICBpZiggIXJlY29yZC5pZGVudGlmaWVyICkge1xuICAgICAgcmV0dXJuIHRoaXMuJC5pZGVudGlmaWVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIGxldCBpZHMgPSBBcnJheS5pc0FycmF5KHJlY29yZC5pZGVudGlmaWVyKSA/IHJlY29yZC5pZGVudGlmaWVyIDogW3JlY29yZC5pZGVudGlmaWVyXTtcbiAgICBsZXQgYXJrcyA9IGlkcy5maWx0ZXIoaWQgPT4gaWQubWF0Y2goL14oYXJrfGRvaSkvKSA/IHRydWUgOiBmYWxzZSk7XG5cbiAgICBpZiggYXJrcy5sZW5ndGggKSB7XG5cbiAgICAgIC8vIGlmIHdlIGFyZSBwYXNzZWQgYSBzZWxlY3RlZCBtZWRpYSwgYXBwZW5kIGlkZW50aWZpZXJzIGFzIHdlbGxcbiAgICAgIGlmKCBtZWRpYSAmJiBtZWRpYS5pZGVudGlmaWVyICkge1xuICAgICAgICBsZXQgbWVkaWFJZHMgPSBBcnJheS5pc0FycmF5KG1lZGlhLmlkZW50aWZpZXIpID8gbWVkaWEuaWRlbnRpZmllciA6IFttZWRpYS5pZGVudGlmaWVyXTtcbiAgICAgICAgbWVkaWFJZHMgPSBtZWRpYUlkcy5maWx0ZXIoaWQgPT4gaWQubWF0Y2goL14oYXJrfGRvaSkvKSA/IHRydWUgOiBmYWxzZSk7XG4gICAgICAgIGZvciggbGV0IGlkIG9mIG1lZGlhSWRzICkge1xuICAgICAgICAgIGlmKCBhcmtzLmluZGV4T2YoaWQpID09PSAtMSApIGFya3MucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy4kLmlkZW50aWZpZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB0aGlzLiQuaWRlbnRpZmllclZhbHVlLmlubmVySFRNTCA9IGFya3MubWFwKGlkID0+IGA8ZGl2PjxhIGhyZWY9XCIke3RoaXMuX2dldEhvc3QoKX0ke2lkfVwiPiR7aWR9PC9hPjwvZGl2PmApLmpvaW4oJycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5pZGVudGlmaWVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIGlmKCAhcmVjb3JkLmlkZW50aWZpZXJzICkge1xuICAgICAgcmV0dXJuIHRoaXMuJC5saWJMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBsZXQgY2FsbE51bWJlciA9IEFycmF5LmlzQXJyYXkocmVjb3JkLmlkZW50aWZpZXJzKSA/IHJlY29yZC5pZGVudGlmaWVycyA6IFtyZWNvcmQuaWRlbnRpZmllcnNdO1xuICAgIGNhbGxOdW1iZXIgPSBjYWxsTnVtYmVyLmZpbHRlcihpZCA9PiBpZC5tYXRjaCgvXi4qLC4qYm94Oi4qLC4qZm9sZGVyOi4qJC9pKSA/IHRydWUgOiBmYWxzZSk7XG4gICAgaWYoIGNhbGxOdW1iZXIubGVuZ3RoICkge1xuICAgICAgdGhpcy4kLmNhbGxOdW1iZXJWYWx1ZS5pbm5lckhUTUwgPSBjYWxsTnVtYmVyLm1hcChpZCA9PiBgPGRpdj4ke2lkfTwvZGl2PmApLmpvaW4oJycpXG4gICAgICB0aGlzLiQuY2FsbE51bWJlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmNhbGxOdW1iZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2dldEhvc3RcbiAgICogQGRlc2NyaXB0aW9uIGhlbHBlciBmb3IgZ2V0dGluZyBwcm90b2NvbC9ob3N0IG9mIHdpbmRvd1xuICAgKiBcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIF9nZXRIb3N0KCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wrJy8vJyt3aW5kb3cubG9jYXRpb24uaG9zdCsnLyc7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBmcm9tIEFwcFN0YXRlSW50ZXJmYWNlLCBjYWxsZWQgd2hlbiBhIHJlY29yZHMgbWVkaWEgaXMgc2VsZWN0ZWRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmQgXG4gICAqL1xuICBfb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKHJlY29yZCkge1xuICAgIC8vIGlmKCByZWNvcmQuX2hhczM2MEltYWdlTGlzdCApIHtcbiAgICAvLyAgIHRoaXMuJC5kb3dubG9hZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cblxuICAgIHRoaXMubmFtZSA9IHRoaXMucmVjb3JkLm5hbWUgfHwgJyc7XG5cbiAgICAvLyBpZiAoIXJlY29yZC5pbWFnZSkgcmV0dXJuO1xuXG4gICAgLy8gdGhpcy4kLmRvd25sb2FkLnJlbmRlcih7XG4gICAgLy8gICByZXNvbHV0aW9uIDogW3JlY29yZC5pbWFnZS53aWR0aCwgcmVjb3JkLmltYWdlLmhlaWdodF0sXG4gICAgLy8gICBmaWxlRm9ybWF0IDogcmVjb3JkLmltYWdlLmVuY29kaW5nRm9ybWF0LFxuICAgIC8vICAgc2l6ZSA6IHJlY29yZC5pbWFnZS5jb250ZW50U2l6ZSA/IHBhcnNlSW50KHJlY29yZC5pbWFnZS5jb250ZW50U2l6ZSkgOiAwLFxuICAgIC8vICAgdXJsIDogcmVjb3JkLmltYWdlLnVybFxuICAgIC8vIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVySWRlbnRpZmllcih0aGlzLnJlY29yZCwgcmVjb3JkKTtcbiAgICB0aGlzLl9yZW5kZXJGY0xpbmsodGhpcy5yZWNvcmQsIHJlY29yZCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfdXBkYXRlTWV0YWRhdGFSb3dzXG4gICAqIEBkZXNjcmlwdGlvbiB1cGRhdGUgbWV0YWRhdGEgdGFibGVcbiAgICovXG4gIC8vIF91cGRhdGVNZXRhZGF0YVJvd3MoKSB7XG4gIC8vICAgbGV0IG1ldGFkYXRhID0gW107XG5cbiAgLy8gICB0aGlzLl9hZGRNZXRhZGF0YVJvdyhtZXRhZGF0YSwgJ25hbWUnLCAnSXRlbSBOYW1lJyk7XG4gIC8vICAgdGhpcy5fYWRkTWV0YWRhdGFSb3cobWV0YWRhdGEsICdjb2xsZWN0aW9uTmFtZScsICdDb2xsZWN0aW9uJyk7XG4gIC8vICAgdGhpcy5fYWRkTWV0YWRhdGFSb3cobWV0YWRhdGEsICdkYXRlJywgJ0RhdGUnKTtcbiAgLy8gICB0aGlzLl9hZGRNZXRhZGF0YVJvdyhtZXRhZGF0YSwgJ3Jlc291cmNlVHlwZScsICdSZXNvdXJjZSBUeXBlJyk7XG5cbiAgLy8gICB0aGlzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4gIC8vIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfYWRkTWV0YWRhdGFSb3dcbiAgICogQGRlc2NyaXB0aW9uIHVwZGF0ZSBtZXRhZGF0YSB0YWJsZSByb3dcbiAgICogXG4gICAqIEBwYXJhbSB7QXJyYXl9IG1ldGFkYXRhIFxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXR0ciBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGxhYmVsIFxuICAgKi9cbiAgX2FkZE1ldGFkYXRhUm93KG1ldGFkYXRhLCBhdHRyLCBsYWJlbCkge1xuICAgIGlmKCAhdGhpc1thdHRyXSApIHJldHVybjtcbiAgICBtZXRhZGF0YS5wdXNoKHtcbiAgICAgIGF0dHI6IGxhYmVsIHx8IGF0dHIsIFxuICAgICAgdmFsdWU6IHRoaXNbYXR0cl1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9jb3B5TGlua1xuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gY2xpY2sgZXZlbnQgb24gYnV0dG9uLiAgQ29weSB0ZXh0IHRvIGNsaXBib2FyZFxuICAgKiBzaG93IFVJIGludGVyYWN0aW9uLlxuICAgKi9cbiAgX2NvcHlMaW5rKCkge1xuICAgIHRoaXMuJC5saW5rLmZvY3VzKCk7XG4gICAgdGhpcy4kLmxpbmsuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OSk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDb3B5XCIpO1xuXG4gICAgdGhpcy4kLmNvcHlJY29uLmljb24gPSAnY2hlY2snO1xuICAgIHRoaXMuJC5jb3B5QnV0dG9uLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJ2FjdGl2ZScpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiQuY29weUljb24uaWNvbiA9ICdjb250ZW50LWNvcHknO1xuICAgICAgdGhpcy4kLmNvcHlCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnLCAnYWN0aXZlJyk7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1yZWNvcmQnLCBBcHBSZWNvcmQpOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYW1wb3R0cy9wbHlyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL3NoYWthLXBsYXllci9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvc2hha2EtcGxheWVyL3RyZWUvbWFzdGVyL2RvY3MvdHV0b3JpYWxzXG5cbmltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLWF1ZGlvLXZpZXdlci50cGwuanNcIjtcblxuaW1wb3J0IFwiQHVjZC1saWIvY29yay1hcHAtdXRpbHNcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9jb25maWdcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgdmlkZW9MaWJzIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvdXRpbHMvdmlkZW8tbGliLWxvYWRlclwiO1xuXG5pbXBvcnQgcGx5ckNzcyBmcm9tIFwicGx5ci9kaXN0L3BseXIuY3NzXCI7XG5pbXBvcnQgc2hha2FDc3MgZnJvbSBcInNoYWthLXBsYXllci9kaXN0L2NvbnRyb2xzLmNzc1wiO1xubGV0IEFVRElPX1NUWUxFUyA9IHBseXJDc3Mrc2hha2FDc3M7XG5cbmltcG9ydCBzcHJpdGVTaGVldCBmcm9tIFwicGx5ci9kaXN0L3BseXIuc3ZnXCI7XG5sZXQgU1BSSVRFX1NIRUVUID0gc3ByaXRlU2hlZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEF1ZGlvVmlld2VyIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG4gIFxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2luamVjdE1vZGVsKCdBcHBTdGF0ZU1vZGVsJywgJ01lZGlhTW9kZWwnKTtcbiAgICB0aGlzLmxpYnNMb2FkZWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9vbkFwcFN0YXRlVXBkYXRlKGUpIHtcbiAgICBpZiAoIHRoaXMuZnVsbFBhdGggIT09IGUubG9jYXRpb24uZnVsbHBhdGggKSB7IFxuICAgICAgdGhpcy5fc3RvcCgpO1xuICAgIH1cblxuICAgIHRoaXMuZnVsbFBhdGggPSBlLmxvY2F0aW9uLmZ1bGxwYXRoO1xuICB9XG5cbiAgYXN5bmMgZmlyc3RVcGRhdGVkKGUpIHtcbiAgICB0aGlzLiQuYXVkaW8gID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdhdWRpb19wbGF5ZXInKTtcbiAgICB0aGlzLiQucG9zdGVyID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdhdWRpb19wb3N0ZXInKTtcblxuICAgIGxldCBzZWxlY3RlZFJlY29yZE1lZGlhID0gYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkTWVkaWEoKTtcbiAgICBpZiggc2VsZWN0ZWRSZWNvcmRNZWRpYSApIHRoaXMuX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShzZWxlY3RlZFJlY29yZE1lZGlhKTtcblxuICAgIHRoaXMuZnVsbFBhdGggPSAoYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpKS5sb2NhdGlvbi5mdWxscGF0aDtcbiAgICBcbiAgICAvLyB3ZWJwYWNrIG1vZHVsZSBpcyBiYXNlNjQgZW5jb2RlZCBVUkwsIGNoZWNrIGlmIHRoaXMgaGFwcGVuZWQgXG4gICAgLy8gYW5kIGRlY29kZSwgdGhlbiBzZXQgc3ZnIHRvIGlubmVySHRtbCBpbnNpZGUgdGhlIHNoYWRvdyBkb20uXG4gICAgaWYoIFNQUklURV9TSEVFVC5pbmRleE9mKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0JykgPiAtMSApIHtcbiAgICAgIFNQUklURV9TSEVFVCA9IGF0b2IoU1BSSVRFX1NIRUVULnJlcGxhY2UoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJywgJycpKTtcbiAgICB9XG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNzcHJpdGUtcGx5cicpLmlubmVySFRNTCA9IFNQUklURV9TSEVFVDtcblxuICAgIC8vIGRlY2lkZSB3aGVyZSB0byBwdXQgY3NzXG4gICAgLy8gVGhlIFBMWVIgbGlicmFyeSBpc24ndCBhd2FyZSBvZiBzaGFkeWRvbSBzbyB3ZSBuZWVkIHRvIG1hbnVhbGx5XG4gICAgLy8gcGxhY2Ugb3VyIHN0eWxlcyBpbiBkb2N1bWVudC5oZWFkIHcvbyBzaGFkeWRvbSB0b3VjaGluZyB0aGVtLlxuICAgIGxldCBwbHlyU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBwbHlyU3R5bGVzLmlubmVySFRNTCA9IEFVRElPX1NUWUxFUztcbiAgICBpZiggd2luZG93LlNoYWR5RE9NICYmIHdpbmRvdy5TaGFkeURPTS5pblVzZSApIHtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocGx5clN0eWxlcyk7XG4gICAgICB0aGlzLmhpZGVDb250cm9scyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQocGx5clN0eWxlcyk7XG4gICAgICB0aGlzLmhpZGVDb250cm9scyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBBcHBTdGF0ZU1vZGVsLCBjYWxsZWQgd2hlbiBhIHJlY29yZHMgbWVkaWEgaXMgc2VsZWN0ZWRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtZWRpYSBcbiAgKiovXG4gIGFzeW5jIF9vblNlbGVjdGVkUmVjb3JkTWVkaWFVcGRhdGUobWVkaWEpIHtcbiAgICBpZiggIW1lZGlhICkgcmV0dXJuO1xuICAgIGlmICggdXRpbHMuZ2V0TWVkaWFUeXBlKG1lZGlhKSAhPT0gJ0F1ZGlvT2JqZWN0JyApIHJldHVybjtcblxuICAgIHRoaXMubWVkaWEgPSBtZWRpYTtcblxuICAgIGlmKCB0aGlzLmxpYnNMb2FkZWQgKSB7XG4gICAgICB0aGlzLl9sb2FkQXVkaW8oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBkeW5hbWljYWxseSBsb2FkIHBseXIgYW5kIHNoYWthIGxpYnNcbiAgICBsZXQge3BseXJ9ID0gYXdhaXQgdmlkZW9MaWJzLmxvYWQoKTtcblxuICAgIHRoaXMuYXVkaW9QbGF5ZXIgPSBuZXcgcGx5cih0aGlzLiQuYXVkaW8sIHtcbiAgICAgIGZ1bGxzY3JlZW4gOiB7ZW5hYmxlZDogZmFsc2V9LFxuICAgICAgY2FwdGlvbnM6IHt1cGRhdGU6IGZhbHNlfSxcbiAgICAgIGNvbnRyb2xzIDogWydwbGF5LWxhcmdlJywgJ3BsYXknLCAncHJvZ3Jlc3MnLCAnY3VycmVudC10aW1lJywgJ211dGUnLCAndm9sdW1lJ11cbiAgICB9KTtcblxuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy5saWJzTG9hZGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9sb2FkQXVkaW8oKTtcbiAgfVxuXG4gIF9sb2FkQXVkaW8oKSB7XG4gICAgbGV0IHNvdXJjZUVsZSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fcGxheWVyIHNvdXJjZScpO1xuICAgIHNvdXJjZUVsZS5zcmMgPSBjb25maWcuZmNyZXBvQmFzZVBhdGgrdGhpcy5tZWRpYVsnQGlkJ107XG4gICAgc291cmNlRWxlLnR5cGUgPSB0aGlzLm1lZGlhLmZpbGVGb3JtYXQgfHwgdGhpcy5tZWRpYS5oYXNNaW1lVHlwZSB8fCB0aGlzLm1lZGlhLmVuY29kaW5nRm9ybWF0IHx8ICcnO1xuICAgIFxuICAgIC8vIEZGIEhhY2suICBSYW5nZSBzbGlkZXIgbm90IGdvaW5nIGJhY2sgdG8gMCBvbiBzdG9wXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuYXVkaW9QbGF5ZXIuc3RvcCgpO1xuICAgICAgbGV0IGVsZSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFuZ2VcIl1bZGF0YS1wbHlyPVwic2Vla1wiXScpO1xuICAgICAgaWYoIGVsZSApIGVsZS52YWx1ZSA9IDA7XG4gICAgfSBjYXRjaChlKSB7fVxuXG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19wbGF5ZXInKS5sb2FkKCk7XG5cbiAgICBsZXQgcG9zdGVyID0gdGhpcy5tZWRpYS50aHVtYm5haWxVcmwgID8gdGhpcy5tZWRpYS50aHVtYm5haWxVcmwrJy9zdmM6aWlpZi9mdWxsLyw0MDAvMC9kZWZhdWx0LmpwZycgOiAnJztcbiAgICBpZiAoIHBvc3RlciApIHtcbiAgICAgIHRoaXMuJC5wb3N0ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLiQucG9zdGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgcG9zdGVyICsgXCIpXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5wb3N0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBwbGF5YmFjayBhbmQgcmVzZXQgdG8gc3RhcnRcbiAgICoqL1xuICBfc3RvcCgpIHtcbiAgICBpZiggIXRoaXMuYXVkaW9QbGF5ZXIgKSByZXR1cm47XG4gICAgdGhpcy5hdWRpb1BsYXllci5zdG9wKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtYXVkaW8tdmlld2VyJywgQXBwQXVkaW9WaWV3ZXIpOyIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcGx5ckNzcyBmcm9tIFwicGx5ci9kaXN0L3BseXIuY3NzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICNhdWRpb19wb3N0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuXG4gIC5sYXlvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAucGx5ci0tYXVkaW8ge1xuICAgIG1heC13aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAucGx5ci0tZnVsbC11aSBpbnB1dFt0eXBlPXJhbmdlXSB7XG4gICAgY29sb3I6ICNkYWFhMDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIGJ1dHRvbi5wbHlyX19jb250cm9sLnBseXJfX2NvbnRyb2wtLW92ZXJsYWlkLFxuICBidXR0b24ucGx5cl9fY29udHJvbC5wbHlyX19jb250cm9sOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxOCwxNzAsMCwxLjApO1xuICB9XG5cbiAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcblxuICB9XG5cbiAgJHtwbHlyQ3NzfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBpZD1cInNwcml0ZS1wbHlyXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvZGl2PlxuICA8ZGl2IGlkPVwiYXVkaW9fcG9zdGVyXCI+PC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgIDxhdWRpbyBpZD1cImF1ZGlvX3BsYXllclwiIGNvbnRyb2xzPlxuICAgICAgPHNvdXJjZT5cbiAgICA8L2F1ZGlvPlxuICA8L2Rpdj5cblxuPC9kaXY+XG5gXG59IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLWZzLXZpZXdlci50cGwuanNcIlxuaW1wb3J0IFwiLi4vLi4vLi4vdXRpbHMvYXBwLXZpcnR1YWwtc2Nyb2xsZXJcIlxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29ucy9lZGl0b3ItaWNvbnNcIlxuaW1wb3J0IFwiQHVjZC1saWIvZmluLWljb25zXCJcbmltcG9ydCBieXRlcyBmcm9tIFwiYnl0ZXNcIlxuXG5jb25zdCBJQ09OUyA9IHtcbiAgJ2ZvbGRlcicgOiBbJ2ZvbGRlciddLFxuICAnZmluLWljb25zOmltYWdlLXNvbGlkJyA6IFsndGlmJywgJ3RpZmYnLCAnZ2lmJywgJ2pwZycsICdqcDInLCAnanBlZycsICd3ZWJwJywgJ2JtcCcsICdwbmcnXSxcbiAgJ2Zpbi1pY29uczp2aWRlby1zb2xpZCcgOiBbJ2F2aScsICdtcDQnLCAnZmx2JywgJ3dtdicsICdtb3YnXSxcbiAgJ2Zpbi1pY29uczpzb3VuZC1zb2xpZCcgOiBbJ3dhdicsICdtcDMnLCAnbWlkJywgJ2FpZiddLFxuICAnZmluLWljb25zOnRleHQtc29saWQnIDogWydkb2MnLCAnZG9jeCcsICd0eHQnLCAncnRmJywgJy5vZHQnXSxcbiAgJ2Zpbi1pY29uczpzcHJlYWRzaGVldC1zb2xpZCcgOiBbJ29kcycsICdjc3YnLCAndHN2JywgJ3hzbCcsICd4c2x4J10sXG4gICdmaW4taWNvbnM6cGRmLXNvbGlkJyA6IFsncGRmJ10sXG4gICdmaW4taWNvbnM6Y29tcHJlc3NlZC1zb2xpZCcgOiBbJ3ppcCcsICdyYXInLCAnYXJqJywgJ2d6JywgJ3RneiddXG59XG5jb25zdCBVTktOT1dOX0lDT04gPSAnZmluLWljb25zOmZpbGUtc29saWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBGc1ZpZXdlciBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGxvYWRpbmdGaWxlcyA6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGxvYWRpbmdTZWFyY2ggOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBjdXJyZW50RGlyIDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBmaWxlcyA6IHt0eXBlOiBBcnJheX0sXG4gICAgICBzZWxlY3RlZEZpbGUgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIG1vZGUgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHRodW1ibmFpbCA6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgbGluZUhlaWdodCA6IHt0eXBlOiBOdW1iZXJ9LFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVzZXQoKTtcblxuICAgIHRoaXMuX2luamVjdE1vZGVsKCdBcHBTdGF0ZU1vZGVsJywgJ1JlY29yZE1vZGVsJyk7XG5cbiAgICB0aGlzLmljb25NYXAgPSB7fTtcbiAgICBmb3IoIGxldCBpY29uIGluIElDT05TICkge1xuICAgICAgZm9yKCBsZXQgZXh0IG9mIElDT05TW2ljb25dICkge1xuICAgICAgICB0aGlzLmljb25NYXBbZXh0XSA9IGljb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMuX29uUmVzaXplKCkpO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuY29udGVudEJvZHkgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm9keScpO1xuICAgIHRoaXMuc2Nyb2xsUGFuZWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignYXBwLXZpcnR1YWwtc2Nyb2xsZXInKTtcbiAgICB0aGlzLnNjcm9sbFBhbmVsLnNldEl0ZW1SZW5kZXJlcih0aGlzLnJlbmRlclJvdywgdGhpcyk7XG5cbiAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzKTtcblxuICAgIHRoaXMuZmlsZW5hbWVXaWR0aCA9ICczMHB4JztcblxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgdGhpcy5zaG93KCk7XG4gICAgLy8gfSwgMTAwMClcbiAgICBcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiggcHJvcHMuaGFzKCdzZWxlY3RlZEZpbGUnKSApIHtcbiAgICAgIGZvciggbGV0IGZpbGUgb2YgdGhpcy5maWxlcyApIHtcbiAgICAgICAgZmlsZS5zZWxlY3RlZCA9IChmaWxlLmZ1bGxVcmwgPT09IHRoaXMuc2VsZWN0ZWRGaWxlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsUGFuZWwucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAvLyAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gIC8vICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcjYmFja2dyb3VuZCcpO1xuICAvLyAgIHRoaXMuYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAvLyAgIHRoaXMuc2hhZG93Um9vdC5yZW1vdmVDaGlsZCh0aGlzLmJhY2tncm91bmQpO1xuICAvLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kKTtcbiAgLy8gfVxuXG4gIF9vblJlc2l6ZSgpIHtcbiAgICBpZiggIXRoaXMuY29udGVudEJvZHkgKSByZXR1cm47XG4gICAgLy8gdGhpcy5zY3JvbGxQYW5lbC5zdHlsZS5oZWlnaHQgPSAodGhpcy5jb250ZW50Qm9keS5vZmZzZXRIZWlnaHQgLSAxNzUpKydweCc7XG5cbiAgICBsZXQgYmFzZUhlaWdodCA9IDMzNTtcbiAgICBpZiggd2luZG93LmlubmVyV2lkdGggPiA3MDAgKSB7XG4gICAgICB0aGlzLnNjcm9sbFBhbmVsLnN0eWxlLmhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBiYXNlSGVpZ2h0IC0gMTAwKSsncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjcm9sbFBhbmVsLnN0eWxlLmhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBiYXNlSGVpZ2h0KSsncHgnO1xuICAgIH1cblxuICAgIFxuICAgIHRoaXMuZmlsZW5hbWVXaWR0aCA9ICggdGhpcy5zY3JvbGxQYW5lbC5vZmZzZXRXaWR0aCAtIDE1NSApKydweCc7XG4gICAgdGhpcy5zY3JvbGxQYW5lbC5yZXF1ZXN0VXBkYXRlKCk7XG4gIH1cblxuICBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgaWYoIHRoaXMuc2VsZWN0ZWRSZWNvcmQgPT09IGUuc2VsZWN0ZWRSZWNvcmQgKSByZXR1cm47XG4gICAgaWYoICFlLnNlbGVjdGVkUmVjb3JkICkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICB0aGlzLnNlbGVjdGVkUmVjb3JkID0gZS5zZWxlY3RlZFJlY29yZDtcbiAgICB0aGlzLnNlbGVjdGVkUmVjb3JkTWVkaWEgPSBlLnNlbGVjdGVkUmVjb3JkTWVkaWE7XG5cbiAgICBpZiggdGhpcy5zZWxlY3RlZFJlY29yZCAmJiB0aGlzLnNlbGVjdGVkUmVjb3JkWydAdHlwZSddLmluY2x1ZGVzKCdodHRwOi8vZGlnaXRhbC51Y2RhdmlzLmVkdS9zY2hlbWEjQmFnT2ZGaWxlcycpICkge1xuICAgICAgdGhpcy5fYnJvd3NlRGlyZWN0b3J5KCk7XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5zZWxlY3RlZFJlY29yZC5uYW1lIHx8IHRoaXMuc2VsZWN0ZWRSZWNvcmQudGl0bGU7XG4gICAgICB0aGlzLnRodW1ibmFpbCA9IHRoaXMuc2VsZWN0ZWRSZWNvcmQudGh1bWJuYWlsVXJsIHx8ICcnO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNob3coKSB7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG4gICAgdGhpcy5fb25SZXNpemUoKTtcblxuICAgIHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fb25SZXNpemUoKTtcbiAgICAgIHRoaXMuc2Nyb2xsUGFuZWwuX29uUmVzaXplKCk7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFJlY29yZCA9IG51bGw7XG4gICAgdGhpcy5sb2FkaW5nRmlsZXMgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRpbmdTZWFyY2ggPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnREaXIgPSAnLyc7XG4gICAgdGhpcy5maWxlcyA9IFtdO1xuICAgIHRoaXMubGluZUhlaWdodCA9IDQxO1xuICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gJyc7XG4gIH1cblxuICBfcmVuZGVyQnJlYWRjcnVtYnMoKSB7XG4gICAgaWYoIHRoaXMubW9kZSA9PT0gJ3NlYXJjaCcgKSB7XG4gICAgICByZXR1cm4gaHRtbGA8aXJvbi1pY29uIGljb249XCJjaGV2cm9uLXJpZ2h0XCI+PC9pcm9uLWljb24+XG4gICAgICA8c3BhbiBjbGFzcz1cImJyZWFkY3J1bWJcIj5TZWFyY2ggUmVzdWx0czwvc3Bhbj5gO1xuICAgIH1cblxuICAgIGxldCBmdWxsRGlyUGF0aCA9IFtdO1xuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERpclxuICAgICAgLnJlcGxhY2UoL15cXC8vLCAnJylcbiAgICAgIC5zcGxpdCgnLycpXG4gICAgICAubWFwKGRpciA9PiAge1xuICAgICAgICBmdWxsRGlyUGF0aC5wdXNoKGRpcikgXG4gICAgICAgIGlmKCBkaXIgPT09ICcnICkgcmV0dXJuIGh0bWxgYDtcblxuICAgICAgICByZXR1cm4gaHRtbGA8aXJvbi1pY29uIGljb249XCJjaGV2cm9uLXJpZ2h0XCI+PC9pcm9uLWljb24+XG4gICAgICAgIDxhIGNsYXNzPVwiYnJlYWRjcnVtYlwiIEBjbGljaz1cIiR7dGhpcy5fb25CcmVhZGNydW1iQ2xpY2tlZH1cIiBkaXI9XCIkeycvJytmdWxsRGlyUGF0aC5qb2luKCcvJyl9XCI+JHtkaXJ9PC9hPmBcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyUm93KGluZGV4KSB7XG4gICAgbGV0IGZpbGUgPSB0aGlzLmZpbGVzW2luZGV4XTtcbiAgICBsZXQgaWNvbiA9IHRoaXMuX2dldEljb24oZmlsZSk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImhlaWdodDogJHt0aGlzLmxpbmVIZWlnaHQtMX1weFwiID9kaXJlY3Rvcnk9XCIke2ZpbGUuaXNEaXJlY3Rvcnl9XCIgP3NlbGVjdGVkPVwiJHtmaWxlLnNlbGVjdGVkfVwiIGluZGV4PVwiJHtpbmRleH1cIiBAY2xpY2s9XCIke3RoaXMuX29uSXRlbUNsaWNrZWR9XCIgLmNvbnRleHQ9XCIke3RoaXN9XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgIDxpcm9uLWljb24gaWNvbj1cIiR7aWNvbn1cIj48L2lyb24taWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZVwiIHN0eWxlPVwid2lkdGg6ICR7dGhpcy5maWxlbmFtZVdpZHRofVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVuYW1lXCI+JHtmaWxlLmZpbGVuYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpcmVjdG9yeVwiID9oaWRkZW49XCIke3RoaXMubW9kZSA9PT0gJ2Jyb3dzZSd9XCI+JHtmaWxlLmRpcmVjdG9yeSB8fCAnLyd9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVzaXplXCI+JHtmaWxlLmZpbGVTaXplICE9PSB1bmRlZmluZWQgPyBieXRlcyhmaWxlLmZpbGVTaXplKSA6ICctJ308L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtZmlsZVwiPlxuICAgICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiY2hlY2tcIiA/aGlkZGVuPVwiJHshZmlsZS5zZWxlY3RlZH1cIj48L2lyb24taWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gIH1cblxuICBfZ2V0SWNvbihmaWxlKSB7XG4gICAgbGV0IGV4dCA9IGZpbGUuaXNEaXJlY3RvcnkgPyAnZm9sZGVyJyA6IChmaWxlLmZpbGVuYW1lIHx8ICcnKS5zcGxpdCgnLicpLnBvcCgpO1xuICAgIGxldCBpY29uID0gdGhpcy5pY29uTWFwW2V4dF07XG4gICAgaWYoIGljb24gKSByZXR1cm4gaWNvbjtcbiAgICByZXR1cm4gVU5LTk9XTl9JQ09OO1xuICB9XG5cbiAgX29uSXRlbUNsaWNrZWQoZSkge1xuICAgIGxldCBpbmRleCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZGV4JykpO1xuICAgIFxuICAgIC8vIHN0dXBpZCBoYWNrLCBsZXQgaHRtbCBhbHdheXMgc2NvcGVzIGV2ZW50cyB0byByZW5kZXIgaG9zdFxuICAgIGxldCAkdGhpcyA9IGUuY3VycmVudFRhcmdldC5jb250ZXh0O1xuICAgIGxldCBmaWxlID0gJHRoaXMuZmlsZXNbaW5kZXhdO1xuXG4gICAgaWYoIGZpbGUuaXNEaXJlY3RvcnkgKSB7XG4gICAgICAkdGhpcy5fYnJvd3NlRGlyZWN0b3J5KGZpbGVbJ0BpZCddLnJlcGxhY2UoJHRoaXMuc2VsZWN0ZWRSZWNvcmRbJ0BpZCddLCAnJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlLmZ1bGxVcmw7XG4gICAgfVxuICB9XG5cbiAgX29uSW5wdXRLZXl1cChlKSB7XG4gICAgbGV0IHRleHQgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG5cbiAgICBpZiggdGhpcy5fYXV0b2NvbXBsZXRlVGltZXIgKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYXV0b2NvbXBsZXRlVGltZXIpO1xuICAgIH1cbiAgICB0aGlzLl9hdXRvY29tcGxldGVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVGltZXIgPSBudWxsO1xuICAgICAgdGhpcy5fdHlwZWFoZWFkU2VhcmNoKHRleHQpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBhc3luYyBfdHlwZWFoZWFkU2VhcmNoKHRleHQpIHtcbiAgICB0aGlzLnR5cGVhaGVhZFNlYXJjaFRleHQgPSB0ZXh0O1xuICAgIGlmKCB0ZXh0ID09PSAnJyApIHtcbiAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgIHRoaXMuX2Jyb3dzZURpcmVjdG9yeSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubW9kZSA9ICdzZWFyY2gnO1xuICAgIHRoaXMubGluZUhlaWdodCA9IDUyO1xuICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gJyc7XG5cbiAgICBsZXQgc2VhcmNoRG9jID0ge1xuICAgICAgdGV4dCxcbiAgICAgIGZpbHRlcnMgOiB7XG4gICAgICAgICdjb2xsZWN0aW9uSWQnIDoge1xuICAgICAgICAgIHR5cGU6ICdrZXl3b3JkJyxcbiAgICAgICAgICB2YWx1ZTogW3RoaXMuc2VsZWN0ZWRSZWNvcmQuY29sbGVjdGlvbklkXSxcbiAgICAgICAgICBvcDogJ29yJ1xuICAgICAgICB9LFxuICAgICAgICAnQGlkJyA6IHtcbiAgICAgICAgICB0eXBlIDogJ3ByZWZpeCcsXG4gICAgICAgICAgdmFsdWUgOiB0aGlzLnNlbGVjdGVkUmVjb3JkWydAaWQnXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc29ydCA6IG51bGwsXG4gICAgICBsaW1pdDogOTk5OSxcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIGZhY2V0czoge30sXG4gICAgICB0ZXh0RmllbGRzIDogWydmaWxlbmFtZSddXG4gICAgfVxuXG4gICAgbGV0IHJlc3AgPSBhd2FpdCB0aGlzLlJlY29yZE1vZGVsLnR5cGVhaGVhZFNlYXJjaChzZWFyY2hEb2MsIHthbGxSZWNvcmRzOiB0cnVlfSk7XG4gICAgaWYoIHRoaXMudHlwZWFoZWFkU2VhcmNoVGV4dCAhPT0gdGV4dCApIHJldHVybjtcblxuICAgIHRoaXMuc2V0RmlsZXMocmVzcC5wYXlsb2FkLnJlc3VsdHMsIGZhbHNlKTtcbiAgfVxuXG4gIGFzeW5jIF9icm93c2VEaXJlY3RvcnkoZGlyKSB7XG4gICAgaWYoIHRoaXMubW9kZSA9PT0gJ2Jyb3dzZScgJiYgdGhpcy5jdXJyZW50RGlyID09PSBkaXIgKSByZXR1cm47XG5cbiAgICB0aGlzLm1vZGUgPSAnYnJvd3NlJztcbiAgICB0aGlzLmxpbmVIZWlnaHQgPSA0NTtcbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3NlYXJjaElucHV0JykudmFsdWUgPSAnJztcbiAgICB0aGlzLnNlbGVjdGVkRmlsZSA9ICcnO1xuXG4gICAgaWYoICFkaXIgKSB7XG4gICAgICBpZiggdGhpcy5jdXJyZW50RGlyICkgZGlyID0gdGhpcy5jdXJyZW50RGlyO1xuICAgICAgZWxzZSBkaXIgPSAnLyc7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50RGlyID0gZGlyO1xuXG4gICAgbGV0IHNlYXJjaERvYyA9IHtcbiAgICAgIGZpbHRlcnMgOiB7XG4gICAgICAgIC8vICdjb2xsZWN0aW9uSWQnIDoge1xuICAgICAgICAvLyAgIHR5cGU6ICdrZXl3b3JkJyxcbiAgICAgICAgLy8gICB2YWx1ZTogW3RoaXMuc2VsZWN0ZWRSZWNvcmQuY29sbGVjdGlvbklkXSxcbiAgICAgICAgLy8gICBvcDogJ29yJ1xuICAgICAgICAvLyB9LFxuICAgICAgICAnZGlyZWN0UGFyZW50JyA6IHtcbiAgICAgICAgICB0eXBlIDogJ2tleXdvcmQnLFxuICAgICAgICAgIHZhbHVlIDogW3RoaXMuc2VsZWN0ZWRSZWNvcmRbJ0BpZCddK3RoaXMuY3VycmVudERpci5yZXBsYWNlKC9cXC8kLywgJycpXSxcbiAgICAgICAgICBvcCA6ICdvcidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNvcnQgOiBudWxsLFxuICAgICAgbGltaXQ6IDk5OTksXG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICBmYWNldHM6IHt9LFxuICAgICAgdGV4dEZpZWxkcyA6IFtdXG4gICAgfVxuXG4gICAgbGV0IHJlc3AgPSBhd2FpdCB0aGlzLlJlY29yZE1vZGVsLnR5cGVhaGVhZFNlYXJjaChzZWFyY2hEb2MsIHtkZWJ1ZzogdHJ1ZSwgYWxsUmVjb3JkczogdHJ1ZX0pO1xuICAgIHRoaXMuc2V0RmlsZXMocmVzcC5wYXlsb2FkLnJlc3VsdHMpO1xuICB9XG5cbiAgc2V0RmlsZXMoZmlsZXMsIHNvcnQ9dHJ1ZSkge1xuICAgIGZpbGVzID0gZmlsZXMubWFwKGZpbGUgPT4ge1xuICAgICAgZmlsZS5kaXJlY3RvcnkgPSBmaWxlLmRpcmVjdFBhcmVudC5yZXBsYWNlKHRoaXMuc2VsZWN0ZWRSZWNvcmRbJ0BpZCddLCAnJyk7XG4gICAgICBpZiggZmlsZVsnQHR5cGUnXS5pbmNsdWRlcygnaHR0cDovL2ZlZG9yYS5pbmZvL2RlZmluaXRpb25zL3Y0L3JlcG9zaXRvcnkjQmluYXJ5JykgKSB7XG4gICAgICAgIGZpbGUuaXNGaWxlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbGUuaXNEaXJlY3RvcnkgPSB0cnVlO1xuICAgICAgICBmaWxlLmZpbGVuYW1lID0gZmlsZVsnQGlkJ10uc3BsaXQoJy8nKS5wb3AoKTtcbiAgICAgIH1cbiAgICAgIGZpbGUuZnVsbFVybCA9IHRoaXMuX2dldEZ1bGxGaWxlVXJsKGZpbGUpO1xuICAgICAgZmlsZS5zZWxlY3RlZCA9IChmaWxlLmZ1bGxVcmwgPT09IHRoaXMuc2VsZWN0ZWRGaWxlKTtcbiAgICAgIHJldHVybiBmaWxlO1xuICAgIH0pO1xuXG4gICAgaWYoIHNvcnQgKSB7XG4gICAgICBmaWxlcy5zb3J0KChhLGIpID0+IGEuZmlsZW5hbWUudG9Mb3dlckNhc2UoKSA+IGIuZmlsZW5hbWUudG9Mb3dlckNhc2UoKSA/IDEgOiAtMSk7XG4gICAgfVxuXG4gICAgdGhpcy5maWxlcyA9IGZpbGVzO1xuICB9XG5cbiAgX2dldEZ1bGxGaWxlVXJsKGZpbGUpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgJy9mY3JlcG8vcmVzdCcgKyBmaWxlWydAaWQnXTtcbiAgfVxuXG4gIF9vbkNsZWFyU2VhcmNoQ2xpY2tlZCgpIHtcbiAgICB0aGlzLl9icm93c2VEaXJlY3RvcnkodGhpcy5jdXJyZW50RGlyKTtcbiAgfVxuXG4gIF9vbkJyZWFkY3J1bWJDbGlja2VkKGUpIHtcbiAgICB0aGlzLl9icm93c2VEaXJlY3RvcnkoZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGlyJykpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZnMtdmlld2VyJywgQXBwRnNWaWV3ZXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgLyogYW5pbWF0aW9uOiAzMDBtcyBsaW5lYXIgZnMtdmlld2VyLWFuaW1hdGUtaW47ICovXG4gIH1cblxuICBAa2V5ZnJhbWVzIGZzLXZpZXdlci1hbmltYXRlLWluIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICBvcGFjaXR5OiAwLjVcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMVxuICAgIH1cbiAgfVxuXG4gIC5sYXlvdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgbWFyZ2luOiA1MHB4IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXBlci1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmNvbnRlbnQtYm9keSB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLmhlYWRlci1sYXlvdXQge1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5oZWFkZXItaW1hZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5oZWFkZXItaW1hZ2UgLmltZywgLmhlYWRlci1pbWFnZSBpcm9uLWljb25baWNvbj1cImZpbi1pY29uczp2YXJpb3VzLW91dGxpbmUtc3RhY2tlZFwiXSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cblxuICAjc2VhcmNoSW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAucm93IHtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIH1cblxuICAudnMtcm93W2hvdmVyXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQteWVsbG93KTtcbiAgfVxuXG4gIC5yb3cge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC15ZWxsb3cpOyAqL1xuICB9XG5cbiAgLnJvdyA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICAucm93W3NlbGVjdGVkXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQteWVsbG93KTtcbiAgfVxuXG4gIC5yb3cgLmRpcmVjdG9yeSB7XG4gICAgZm9udC1zaXplOiAxMXB4OyBcbiAgICBsaW5lLWhlaWdodDogMTJweDsgXG4gICAgY29sb3I6ICM4ODg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB9XG5cbiAgLnJvdyAuaWNvbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cblxuICAucm93IC5maWxlc2l6ZSB7XG4gICAgd2lkdGg6IDc1cHg7XG4gIH1cblxuICAucm93IC5pY29uLCAucm93IC5maWxlc2l6ZSB7XG4gICAgcGFkZGluZzogNnB4IDA7XG4gIH1cblxuICAvKiAucm93IC5maWxlIHtcbiAgICBmbGV4OiAxO1xuICB9ICovXG5cbiAgLnJvdyAuZGlyZWN0b3J5LCAucm93IC5maWxlbmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLnJvdyAuc2VsZWN0ZWQtZmlsZSB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICBidXR0b24uc2VhcmNoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxuXG4gIGlyb24taWNvbltpY29uPVwiaG9tZVwiXSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XG4gIH1cblxuICBpcm9uLWljb25baWNvbj1cImNoZXZyb24tcmlnaHRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICBpcm9uLWljb25baWNvbj1cImZvbGRlclwiXSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFnZ2llLWJsdWUpO1xuICB9XG4gIGlyb24taWNvbltpY29uPVwiZmluLWljb25zOmltYWdlLXNvbGlkXCJdIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWdnaWUtZ29sZCk7XG4gIH1cbiAgaXJvbi1pY29uW2ljb249XCJmaW4taWNvbnM6dmlkZW8tc29saWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1waW5vdCk7XG4gIH1cbiAgaXJvbi1pY29uW2ljb249XCJmaW4taWNvbnM6c291bmQtc29saWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1yZWRidWQpO1xuICB9XG4gIGlyb24taWNvbltpY29uPVwiZmluLWljb25zOnRleHQtc29saWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wdXRhaC1jcmVlayk7XG4gIH1cbiAgaXJvbi1pY29uW2ljb249XCJmaW4taWNvbnM6c3ByZWFkc2hlZXQtc29saWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1xdWFkKTtcbiAgfVxuICBpcm9uLWljb25baWNvbj1cImZpbi1pY29uczpwZGYtc29saWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1kb3VibGUtZGVja2VyKTtcbiAgfVxuICBpcm9uLWljb25baWNvbj1cImZpbi1pY29uczpjb21wcmVzc2VkLXNvbGlkXCJdIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcG9wcHkpO1xuICB9XG4gIGlyb24taWNvbltpY29uPVwiZmluLWljb25zOmZpbGUtc29saWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgfVxuICBpcm9uLWljb25baWNvbj1cImNoZWNrXCJdIHtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICB9XG5cbiAgLnRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXApO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG5cbiAgLnRhYmxlLWhlYWRlciA+IGRpdiB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cblxuICAuYnJlYWRjcnVtYnMge1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xuICB9XG5cbiAgLmJyZWFkY3J1bWJzIC5icmVhZGNydW1iIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBhcHAtdmlydHVhbC1zY3JvbGxlciB7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5icmVhayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLW1lZGl1bS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmNhbmNlbC1idG4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBtYXJnaW46IDAgMTVweCAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuZG93bmxvYWQtYnRuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5kb3dubG9hZC1idXR0b246dmlzaXRlZCB7XG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XG4gIH1cblxuICBhW2Rpc2FibGVkXSB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuY29udGVudCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmbGV4OiAxO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImxheW91dFwiPlxuPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblxuICBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxheW91dFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1pbWFnZVwiPlxuICAgICAgICA8aXJvbi1pY29uIGljb249XCJmaW4taWNvbnM6dmFyaW91cy1vdXRsaW5lLXN0YWNrZWRcIiA/aGlkZGVuPVwiJHt0aGlzLnRodW1ibmFpbH1cIj48L2lyb24taWNvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy50aHVtYm5haWx9KTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcIiA/aGlkZGVuPVwiJHshdGhpcy50aHVtYm5haWx9XCIgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxleDoxXCI+XG4gICAgICAgIDxoMj4ke3RoaXMudGl0bGV9PC9oMj5cbiAgICAgICAgPGRpdj4ke3RoaXMuZmlsZXMubGVuZ3RofSBmaWxlczwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleFwiPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInNlYXJjaElucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBGaWxlc1wiIEBrZXl1cD1cIiR7dGhpcy5fb25JbnB1dEtleXVwfVwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlYXJjaFwiPlxuICAgICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiJHt0aGlzLm1vZGUgPT09ICdzZWFyY2gnID8gJ2Nsb3NlJyA6ICdmaW4taWNvbnM6c2VhcmNoJ31cIiBAY2xpY2s9XCIke3RoaXMuX29uQ2xlYXJTZWFyY2hDbGlja2VkfVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJyZWFkY3J1bWJzXCI+XG4gICAgICAgIDxpcm9uLWljb24gaWNvbj1cImhvbWVcIiBAY2xpY2s9XCIke3RoaXMuX29uQnJlYWRjcnVtYkNsaWNrZWR9XCIgZGlyPVwiL1wiPjwvaXJvbi1pY29uPlxuICAgICAgICAke3RoaXMuX3JlbmRlckJyZWFkY3J1bWJzKCl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImJyZWFrXCI+PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImZsZXg6MVwiPk5hbWU8L2Rpdj4gXG4gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTE1cHhcIj5TaXplPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhcHAtdmlydHVhbC1zY3JvbGxlciBpdGVtLWhlaWdodD1cIiR7dGhpcy5saW5lSGVpZ2h0fVwiIC5pdGVtcz1cIiR7dGhpcy5maWxlc31cIj48L2FwcC12aXJ0dWFsLXNjcm9sbGVyPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmbGV4OiAxXCI+PC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1idG5cIiBAY2xpY2s9XCIke3RoaXMuaGlkZX1cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgY2xhc3M9XCJkb3dubG9hZC1idG5cIiA/ZGlzYWJsZWQ9XCIkeyF0aGlzLnNlbGVjdGVkRmlsZX1cIiBocmVmPVwiJHt0aGlzLnNlbGVjdGVkRmlsZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Eb3dubG9hZDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gPCEtLSBmb290ZXIgLS0+XG4gICAgPC9kaXY+XG5cblxuPC9kaXY+IDwhLS0gY29udGVudCAtLT5cbjwvZGl2PiA8IS0tIGxheW91dCAtLT5cblxuYDt9IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtaW1hZ2Utdmlld2VyLWxpZ2h0Ym94Lmh0bWxcIlxuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXItbGl0ZVwiXG5pbXBvcnQgXCJsZWFmbGV0XCJcbmltcG9ydCBsZWFmbGV0Q3NzIGZyb20gXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIlxuXG5pbXBvcnQgQXBwU3RhdGVJbnRlcmZhY2UgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvQXBwU3RhdGVJbnRlcmZhY2VcIlxuaW1wb3J0IE1lZGlhSW50ZXJmYWNlIGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL01lZGlhSW50ZXJmYWNlXCJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9jb25maWdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBJbWFnZVZpZXdlciBleHRlbmRzIE1peGluKFBvbHltZXJFbGVtZW50KVxuICAud2l0aChFdmVudEludGVyZmFjZSwgQXBwU3RhdGVJbnRlcmZhY2UsIE1lZGlhSW50ZXJmYWNlKSB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gYDxzdHlsZT4ke2xlYWZsZXRDc3N9PC9zdHlsZT4ke3RlbXBsYXRlfWA7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvdW5kcyA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6IG51bGxcbiAgICAgIH0sXG4gICAgICBtYXhJbWFnZVNpemUgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogMjA0OFxuICAgICAgfSxcbiAgICAgIG1lZGlhIDoge1xuICAgICAgICB0eXBlIDogT2JqZWN0LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IHt9XG4gICAgICB9LFxuICAgICAgdmlzaWJsZSA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIGlmKCB0aGlzLnZpc2libGUgJiYgZS53aGljaCA9PT0gMjcgKSB0aGlzLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcyk7XG5cbiAgICB0aGlzLnNoYWRvd1Jvb3QucmVtb3ZlQ2hpbGQodGhpcy4kLnNhZmVDb3Zlcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLiQuc2FmZUNvdmVyKTtcblxuICAgIGxldCBzZWxlY3RlZFJlY29yZE1lZGlhID0gYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkTWVkaWEoKTtcbiAgICBpZiggc2VsZWN0ZWRSZWNvcmRNZWRpYSApIHRoaXMuX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShzZWxlY3RlZFJlY29yZE1lZGlhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkFwcFN0YXRlVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBBcHBTdGF0ZU1vZGVsIGFwcC1zdGF0ZS11cGRhdGUgZXZlbnRcbiAgICovXG4gIF9vbkFwcFN0YXRlVXBkYXRlKGUpIHtcbiAgICBpZiggZS5zaG93TGlnaHRib3ggJiYgIXRoaXMudmlzaWJsZSApIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSBpZiggIWUuc2hvd0xpZ2h0Ym94ICYmIHRoaXMudmlzaWJsZSApIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlbGVjdGVkUmVjb3JkTWVkaWFVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGZyb20gQXBwU3RhdGVJbnRlcmZhY2UsIGNhbGxlZCB3aGVuIGEgcmVjb3JkcyBtZWRpYSBpcyBzZWxlY3RlZFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IG1lZGlhIFxuICAgKi9cbiAgX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShtZWRpYSkge1xuICAgIHRoaXMubWVkaWEgPSBtZWRpYTtcbiAgICBpZiggdGhpcy52aXNpYmxlICkgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNob3dcbiAgICovXG4gIGFzeW5jIHNob3coKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMuJC5zYWZlQ292ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmaW4tYXBwJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsMCk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiQubmF2Ll9yZXNpemUoKTtcbiAgICAgIHRoaXMuJC5uYXYuc2V0Rm9jdXMoKTtcbiAgICB9LCAyNSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBoaWRlXG4gICAqL1xuICBhc3luYyBoaWRlKCkge1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLiQuc2FmZUNvdmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmaW4tYXBwJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfbG9hZEltYWdlXG4gICAqIEBkZXNjcmlwdGlvbiBwcmVsb2FkIGltYWdlIGFuZCBzZXQgYm91bmRzIHRvIGltYWdlIGRpbWVuc2lvbnNcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgdXJsIG9mIGltYWdlIHRvIGxvYWRcbiAgICogXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSByZXNvbHZlcyB3aGVuIGltYWdlIGlzIGxvYWRlZCBhbmQgYm91bmRzIGFycmF5IGhhcyBiZWVuIHNldFxuICAgKi9cbiAgIF9sb2FkSW1hZ2UodXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlcyA9IFtpbWcubmF0dXJhbEhlaWdodCwgaW1nLm5hdHVyYWxXaWR0aF07XG4gICAgICAgIHRoaXMuYm91bmRzID0gW1swLDBdLCByZXNdO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuXG4gICAgICBpbWcuc3JjID0gdXJsO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVuZGVyXG4gICAqIEBkZXNjcmlwdGlvbiByZW5kZXIgbGVhZmxldCBjYW52YXMgYmFzZWQgb24gZmVkb3JhIGlkXG4gICAqIFxuICAgKi9cbiAgYXN5bmMgcmVuZGVyKCkge1xuICAgIGlmKCB0aGlzLnJlbmRlcmVkTWVkaWEgPT09IHRoaXMubWVkaWEgKSByZXR1cm47XG5cbiAgICB0aGlzLnJlbmRlcmVkTWVkaWEgPSB0aGlzLm1lZGlhO1xuICAgIGxldCBpZCA9IHRoaXMucmVuZGVyZWRNZWRpYVsnQGlkJ107XG4gICAgaWYgKCB0aGlzLnJlbmRlcmVkTWVkaWEuYXNzb2NpYXRlZE1lZGlhICYmIHRoaXMucmVuZGVyZWRNZWRpYS5tZWRpYS5pbWFnZUxpc3QgKSB7XG4gICAgICBpZCA9IHRoaXMucmVuZGVyZWRNZWRpYS5pbWFnZS51cmw7XG4gICAgfVxuICAgIFxuICAgIGxldCB1cmwgPSB0aGlzLl9nZXRJbWdVcmwoaWQsICcnLCAnJyk7XG5cbiAgICAvLyB1c2VkIHRvIGNoZWNrIHN0YXRlIGJlbG93XG4gICAgdGhpcy5sb2FkaW5nVXJsID0gdXJsO1xuXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiggdGhpcy5pbWFnZU92ZXJsYXkgKSB7XG4gICAgICB0aGlzLnJlbmRlcmVkVXJsID0gJyc7XG4gICAgICB0aGlzLnZpZXdlci5yZW1vdmVMYXllcih0aGlzLmltYWdlT3ZlcmxheSk7XG4gICAgICB0aGlzLmltYWdlT3ZlcmxheSA9IG51bGw7XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5fbG9hZEltYWdlKHVybCk7XG5cbiAgICAvLyBjaGVjayB0aGF0IHdlIFxuICAgIC8vICAtIGRpZG4ndCBoYXZlIGEgbmV3IHJlcXVlc3QgdGhhdCB0b29rIGxvbmdlciB0aGFuIGFuIG9sZCByZXF1ZXN0XG4gICAgLy8gIC0gdGhhdCB3ZSBkaWRuJ3QgYWxyZWFkeSByZW5kZXIgdGhpcyB1cmxcbiAgICBpZiggdXJsICE9PSB0aGlzLmxvYWRpbmdVcmwgKSByZXR1cm47XG4gICAgaWYoIHVybCA9PT0gdGhpcy5yZW5kZXJlZFVybCApIHJldHVybjtcblxuICAgIHRoaXMucmVuZGVyZWRVcmwgPSB1cmw7XG5cbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgIGlmKCAhdGhpcy52aWV3ZXIgKSB7XG4gICAgICB0aGlzLnZpZXdlciA9IEwubWFwKHRoaXMuJC52aWV3ZXIsIHtcbiAgICAgICAgY3JzOiBMLkNSUy5TaW1wbGUsXG4gICAgICAgIG1pblpvb206IC00LFxuICAgICAgICB6b29tQ29udHJvbCA6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmltYWdlT3ZlcmxheSA9IEwuaW1hZ2VPdmVybGF5KHVybCwgdGhpcy5ib3VuZHMpLmFkZFRvKHRoaXMudmlld2VyKTtcbiAgICB0aGlzLnZpZXdlci5maXRCb3VuZHModGhpcy5ib3VuZHMpO1xuXG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ2xvc2VDbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byB2aWV3IG5hdiBjbG9zZSBldmVudFxuICAgKi9cbiAgX29uQ2xvc2VDbGlja2VkKCkge1xuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXQoe3Nob3dMaWdodGJveDogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblpvb21JbkNsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIHZpZXcgbmF2IHpvb20taW4gZXZlbnRcbiAgICovXG4gIF9vblpvb21JbkNsaWNrZWQoKSB7XG4gICAgdGhpcy52aWV3ZXIuem9vbUluKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25ab29tT3V0Q2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gdmlldyBuYXYgem9vbS1vdXQgZXZlbnRcbiAgICovXG4gIF9vblpvb21PdXRDbGlja2VkKCkge1xuICAgIHRoaXMudmlld2VyLnpvb21PdXQoKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWltYWdlLXZpZXdlci1saWdodGJveCcsIEFwcEltYWdlVmlld2VyKTsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGVcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1pbWFnZS12aWV3ZXIuaHRtbFwiXG5cbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3V0aWxzXCJcblxuaW1wb3J0IEFwcFN0YXRlSW50ZXJmYWNlIGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL0FwcFN0YXRlSW50ZXJmYWNlXCJcbmltcG9ydCBNZWRpYUludGVyZmFjZSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9NZWRpYUludGVyZmFjZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEltYWdlVmlld2VyIGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gIC53aXRoKEV2ZW50SW50ZXJmYWNlLCBBcHBTdGF0ZUludGVyZmFjZSwgTWVkaWFJbnRlcmZhY2UpIHtcbiAgXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY29yZCA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiB7fVxuICAgICAgfSxcbiAgICAgIG1lZGlhIDoge1xuICAgICAgICB0eXBlIDogT2JqZWN0LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IHt9XG4gICAgICB9LFxuICAgICAgbG9hZGluZzoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGhlaWdodCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiA2MDBcbiAgICAgIH0sXG4gICAgICBoYXNNdWx0aXBsZUltYWdlcyA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBhc3luYyByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuXG4gICAgbGV0IHNlbGVjdGVkUmVjb3JkTWVkaWEgPSBhd2FpdCB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0U2VsZWN0ZWRSZWNvcmRNZWRpYSgpO1xuICAgIGlmKCBzZWxlY3RlZFJlY29yZE1lZGlhICkgdGhpcy5fb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKHNlbGVjdGVkUmVjb3JkTWVkaWEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBBcHBTdGF0ZUludGVyZmFjZSwgY2FsbGVkIHdoZW4gYSByZWNvcmRzIG1lZGlhIGlzIHNlbGVjdGVkXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gbWVkaWEgXG4gICAqL1xuICBfb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKG1lZGlhKSB7XG4gICAgaWYoICFtZWRpYSApIHJldHVybjtcbiAgICBsZXQgZ2V0TWVkaWFUeXBlID0gdXRpbHMuZ2V0TWVkaWFUeXBlKG1lZGlhKTtcbiAgICBpZiAoZ2V0TWVkaWFUeXBlICE9PSAnSW1hZ2VMaXN0JyAmJiBnZXRNZWRpYVR5cGUgIT09ICdJbWFnZU9iamVjdCcpIHJldHVybjtcblxuICAgIHRoaXMubWVkaWEgPSBtZWRpYTtcbiAgICB0aGlzLl9yZW5kZXJJbWcoKTtcbiAgfVxuXG4gIF9yZW5kZXJJbWcoKSB7XG4gICAgaWYgKCB0aGlzLm1lZGlhLmhhc1BhcnQgJiYgdGhpcy5tZWRpYS5oYXNQYXJ0Lmxlbmd0aCA+IDAgKSB7XG4gICAgICB0aGlzLm1lZGlhLmltYWdlID0gdGhpcy5tZWRpYS5oYXNQYXJ0WzBdLmltYWdlO1xuICAgIH1cblxuICAgIC8vIFRPRE86IEp1c3RpbiBwbGVhc2UgcmV2aWV3LiAgRml4ZXMgdGhlIHByb2JsZW0gdy90aGUgaGVpZ2h0IGJlaW5nIHRvbyBsYXJnZSBzaW5jZSBcbiAgICAvLyAgICAgICB0aGUgcHJvYmxlbSBzZWVtcyB0byBvcmlnaW5hdGUgaW4gdGhpcy5oZWlnaHQgXG4gICAgLy8gICAgICAgYmVpbmcgc2V0IHRvIDYwMCBpbiB0aGlzIGNvbXBvbmVudCdzIHByb3BlcnRpZXMuXG4gICAgaWYgKCB0aGlzLm1lZGlhLmltYWdlLndpZHRoIDwgdGhpcy5oZWlnaHQpIHRoaXMuaGVpZ2h0ID0gdGhpcy5tZWRpYS5pbWFnZS53aWR0aDtcbiAgICBsZXQgdXJsID0gdGhpcy5fZ2V0SW1nVXJsKHRoaXMubWVkaWEuaW1hZ2UudXJsLCAnJywgdGhpcy5oZWlnaHQpO1xuICAgIGxldCByID0gNjAwIC8gdGhpcy5tZWRpYS5pbWFnZS5oZWlnaHQ7XG4gICAgbGV0IHcgPSB0aGlzLm1lZGlhLmltYWdlLndpZHRoICogcjtcblxuICAgIGxldCBlbGVXaWR0aCA9IHRoaXMub2Zmc2V0V2lkdGgtMjA7XG4gICAgaWYgKCBlbGVXaWR0aCA8IDEgKSBlbGVXaWR0aCA9IDE7XG5cbiAgICBsZXQgc3RhcnRIZWlnaHQgPSBNYXRoLmNlaWwoZWxlV2lkdGggPiB3ID8gdGhpcy5oZWlnaHQgOiAoKGVsZVdpZHRoL3cpKnRoaXMuaGVpZ2h0KSk7XG5cbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLiQubG9hZGluZy5zdHlsZS5oZWlnaHQgPSBzdGFydEhlaWdodCsncHgnO1xuICAgIFxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuJC5pbWcuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIH07XG4gICAgaW1nLnNyYyA9IHVybDtcblxuICAgIHRoaXMuJC5pbWcuc3R5bGUubWF4V2lkdGggPSB3ICsgJ3B4JztcbiAgICB0aGlzLiQuaW1nLnNyYyA9IHVybDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1pbWFnZS12aWV3ZXInLCBBcHBJbWFnZVZpZXdlcik7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtbWVkaWEtdmlld2VyLW5hdi5odG1sXCJcblxuaW1wb3J0IEFwcFN0YXRlSW50ZXJmYWNlIGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL0FwcFN0YXRlSW50ZXJmYWNlXCJcbmltcG9ydCBNZWRpYUludGVyZmFjZSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9NZWRpYUludGVyZmFjZVwiXG5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uXCJcbmltcG9ydCBcIi4uLy4uLy4uL3V0aWxzL2FwcC1zaGFyZS1idG5cIlxuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvdXRpbHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBNZWRpYVZpZXdlck5hdiBleHRlbmRzIE1peGluKFBvbHltZXJFbGVtZW50KVxuICAud2l0aChFdmVudEludGVyZmFjZSwgQXBwU3RhdGVJbnRlcmZhY2UsIE1lZGlhSW50ZXJmYWNlKSB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gdGh1bWJuYWlsIHdpZHRoIHcvIGJvcmRlciBhbmQgbWFyZ2luXG4gICAgICB0b3RhbFRodW1ibmFpbFdpZHRoIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDY0LFxuICAgICAgfSxcbiAgICAgIGljb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG4gICAgICBpY29uV2lkdGggOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogNDBcbiAgICAgIH0sXG4gICAgICB0aHVtYm5haWxzIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW11cbiAgICAgIH0sXG4gICAgICB0aHVtYm5haWxzUGVyRnJhbWUgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogMTBcbiAgICAgIH0sXG4gICAgICBsZWZ0TW9zdFRodW1ibmFpbCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAwXG4gICAgICB9LFxuICAgICAgYnJlYWtDb250cm9scyA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2UsXG4gICAgICAgIHJlZmxlY3Q6IHRydWUsXG4gICAgICAgIG5vdGlmeSA6IHRydWVcbiAgICAgIH0sXG4gICAgICBzaG93TmF2TGVmdCA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBzaG93TmF2UmlnaHQgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuICAgICAgaXNMaWdodGJveCA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBzaW5nbGVJbWFnZSA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG1lZGlhTGlzdCA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IFtdXG4gICAgICB9LFxuICAgICAgc2hvd09wZW5MaWdodGJveCA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMuX3Jlc2l6ZSgpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4gdGhpcy5fb25Ub3VjaEVuZChlKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgKGUpID0+IHRoaXMuX29uVG91Y2hFbmQoZSkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4gdGhpcy5fb25Ub3VjaE1vdmUoZSkpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB0aGlzLl9vblRvdWNoU3RhcnQoZSkpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9yZXNpemUoKTtcbiAgfVxuXG4gIGFzeW5jIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgbGV0IHNlbGVjdGVkUmVjb3JkID0gYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkKCk7XG4gICAgaWYoIHNlbGVjdGVkUmVjb3JkICkge1xuICAgICAgdGhpcy5fb25TZWxlY3RlZFJlY29yZFVwZGF0ZShzZWxlY3RlZFJlY29yZCk7XG4gICAgICBsZXQgc2VsZWN0ZWRSZWNvcmRNZWRpYSA9IGF3YWl0IHRoaXMuQXBwU3RhdGVNb2RlbC5nZXRTZWxlY3RlZFJlY29yZE1lZGlhKCk7XG4gICAgICBpZiggc2VsZWN0ZWRSZWNvcmRNZWRpYSApIHRoaXMuX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShzZWxlY3RlZFJlY29yZE1lZGlhKTtcbiAgICB9XG4gIH1cblxuICBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgaWYoIGUubWVkaWFWaWV3ZXJOYXZMZWZ0TW9zdFRodW1ibmFpbCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuO1xuICAgIGlmKCBlLm1lZGlhVmlld2VyTmF2TGVmdE1vc3RUaHVtYm5haWwgPT09IHRoaXMubGVmdE1vc3RUaHVtYm5haWwgKSByZXR1cm47XG4gICAgdGhpcy5sZWZ0TW9zdFRodW1ibmFpbCA9IGUubWVkaWFWaWV3ZXJOYXZMZWZ0TW9zdFRodW1ibmFpbDtcbiAgICB0aGlzLl9yZXNpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblRvdWNoRW5kXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byB3aW5kb3cgdG91Y2ggZW5kL2NhbmNlbCBldmVudHMuIGlmIHdlIGFyZVxuICAgKiBwZXJmb3JtaW5nIGEgdG91Y2ggKHN3aXBlKSBhY3Rpb24sIHNlZSBpZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIFxuICAgKiB0aHJlc2hvbGQgZm9yIHN3aXBlIGFuZCBpZiBzbywgcGFnZSBsZWZ0L3JpZ2h0XG4gICAqICBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgSFRNTCB0b3VjaCBldmVudFxuICAgKi9cbiAgX29uVG91Y2hFbmQoZSkge1xuICAgIGlmKCAhdGhpcy50b3VjaEFjdGlvbiApIHJldHVybjtcbiAgICB0aGlzLnRvdWNoQWN0aW9uID0gZmFsc2U7XG5cbiAgICBsZXQgZGlmZiA9IHRoaXMudG91Y2hTdGFydFggLSB0aGlzLnRvdWNoQ3VycmVudFg7XG4gICAgbGV0IHNkaWZmID0gTWF0aC5hYnMoZGlmZik7XG5cbiAgICBpZiggc2RpZmYgPiB0aGlzLnRvdGFsVGh1bWJuYWlsV2lkdGggLyAyICkge1xuICAgICAgaWYoIGRpZmYgPCAwICkgdGhpcy5fcGFnZUxlZnQoKTtcbiAgICAgIGVsc2UgdGhpcy5fcGFnZVJpZ2h0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uVG91Y2hNb3ZlXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byB3aW5kb3dzIHRvdWNoIG1vdmUgZXZlbnQuIGlmIHdlIGFyZSBwZXJmb3JtaW5nIFxuICAgKiBhIHRvdWNoIChzd2lwZSkgYWN0aW9uLCBuZWVkIHRvIGtlZXAgdHJhY2sgb2YgY3VycmVudCB4IG9mZnNldFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgSFRNTCB0b3VjaCBldmVudFxuICAgKi9cbiAgX29uVG91Y2hNb3ZlKGUpIHtcbiAgICBpZiggIXRoaXMudG91Y2hBY3Rpb24gKSByZXR1cm47XG4gICAgdGhpcy50b3VjaEN1cnJlbnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Ub3VjaFN0YXJ0XG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byB0aGlzIGVsZW1lbnRzIHRvdWNoc3RhcnQgZXZlbnQuXG4gICAqIHN0YXJ0IHBlcmZvcm1pbmcgYSB0b3VjaCAoc3dpcGUpIGFjdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgSFRNTCB0b3VjaCBldmVudFxuICAgKi9cbiAgX29uVG91Y2hTdGFydChlKSB7XG4gICAgdGhpcy50b3VjaEFjdGlvbiA9IHRydWU7XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIHRoaXMudG91Y2hDdXJyZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3Jlc2l6ZVxuICAgKiBAZGVzY3JpcHRpb24gdXBkYXRlIHRodW1ibmFpbCBwcmV2aWV3IG9uIHJlc2l6ZVxuICAgKiBcbiAgICovXG4gIF9yZXNpemUoKSB7XG4gICAgLy8gbGV0IHcgPSB0aGlzLm9mZnNldFdpZHRoO1xuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgXG4gICAgLy8gZ3JycnJcbiAgICBpZiggdyA9PT0gMCApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdJZ25vcmVpbmcgcmVzaXplJylcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fcmVzaXplKCksIDIwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdyAtPSAxNjsgLy8gcGFkZGluZ1xuXG4gICAgdGhpcy5fc2V0TmF2QnJlYWsodyk7XG5cbiAgICBsZXQgaWNvbnNXaWR0aDtcbiAgICBpZiggdGhpcy5icmVha0NvbnRyb2xzICkge1xuICAgICAgaWNvbnNXaWR0aCA9IHRoaXMuaWNvbldpZHRoICogMjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWNvbnNXaWR0aCA9IHRoaXMuaWNvbldpZHRoICogNDtcbiAgICAgIGlmKCB0aGlzLmlzTGlnaHRib3ggKSBpY29uc1dpZHRoICs9IHRoaXMuaWNvbldpZHRoICogMjtcbiAgICB9XG5cbiAgICBsZXQgYXZhaWxhYmxlVGh1bWJTcGFjZSA9IE1hdGgubWluKHcgLSBpY29uc1dpZHRoLCA1MTIpO1xuICAgIHRoaXMudGh1bWJuYWlsc1BlckZyYW1lID0gTWF0aC5tYXgoTWF0aC5mbG9vcihhdmFpbGFibGVUaHVtYlNwYWNlIC8gdGhpcy50b3RhbFRodW1ibmFpbFdpZHRoKSwgMSk7XG4gICAgdGhpcy4kLnRodW1ibmFpbHMuc3R5bGUud2lkdGggPSAodGhpcy50aHVtYm5haWxzUGVyRnJhbWUqdGhpcy50b3RhbFRodW1ibmFpbFdpZHRoKSsncHgnO1xuXG4gICAgdGhpcy5zaG93TmF2TGVmdCA9ICh0aGlzLmxlZnRNb3N0VGh1bWJuYWlsICE9PSAwKTtcbiAgICB0aGlzLnNob3dOYXZSaWdodCA9ICF0aGlzLl9zaG93aW5nTGFzdFRodW1iRnJhbWUoKTtcblxuICAgIHRoaXMuX3VwZGF0ZVRodW1ibmFpbENvbnRhaW5lclBvcygpO1xuICB9XG5cbiAgX2dldFRvdGFsSWNvbldpZHRoKCkge1xuICAgIGxldCB0b3RhbEljb25XaWR0aCA9IHRoaXMuaWNvbldpZHRoICogNDsgLy8gbmF2IGljb25zIGFuZCBkZWZhdWx0IGljb25zXG4gICAgaWYoIHRoaXMuaXNMaWdodGJveCApIHRvdGFsSWNvbldpZHRoICs9IHRoaXMuaWNvbldpZHRoICogMjtcbiAgICByZXR1cm4gdG90YWxJY29uV2lkdGg7XG4gIH1cblxuICBfc2V0TmF2QnJlYWsod2lkdGgpIHtcbiAgICBsZXQgdG90YWxJY29uV2lkdGggPSB0aGlzLmljb25XaWR0aCAqIDQ7IC8vIG5hdiBpY29ucyBhbmQgZGVmYXVsdCBpY29uc1xuICAgIGlmKCB0aGlzLmlzTGlnaHRib3ggKSB0b3RhbEljb25XaWR0aCArPSB0aGlzLmljb25XaWR0aCAqIDI7XG5cbiAgICBpZiggdG90YWxJY29uV2lkdGggKyAodGhpcy50b3RhbFRodW1ibmFpbFdpZHRoICogNCkgPiB3aWR0aCApIHtcbiAgICAgIHRoaXMuYnJlYWtDb250cm9scyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnJlYWtDb250cm9scyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIF9wYWdlTGVmdCgpIHtcbiAgICB0aGlzLmxlZnRNb3N0VGh1bWJuYWlsID0gdGhpcy5sZWZ0TW9zdFRodW1ibmFpbCAtIHRoaXMudGh1bWJuYWlsc1BlckZyYW1lO1xuICAgIGlmKCB0aGlzLmxlZnRNb3N0VGh1bWJuYWlsIDwgMCApIHRoaXMubGVmdE1vc3RUaHVtYm5haWwgPSAwO1xuICAgIHRoaXMuX3Jlc2l6ZSgpO1xuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXQoe21lZGlhVmlld2VyTmF2TGVmdE1vc3RUaHVtYm5haWw6IHRoaXMubGVmdE1vc3RUaHVtYm5haWx9KTtcbiAgfVxuXG4gIF9wYWdlUmlnaHQoKSB7XG4gICAgaWYoIHRoaXMuX3Nob3dpbmdMYXN0VGh1bWJGcmFtZSgpICkgcmV0dXJuO1xuICAgIHRoaXMubGVmdE1vc3RUaHVtYm5haWwgPSB0aGlzLmxlZnRNb3N0VGh1bWJuYWlsICsgdGhpcy50aHVtYm5haWxzUGVyRnJhbWU7XG4gICAgdGhpcy5fcmVzaXplKCk7XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldCh7bWVkaWFWaWV3ZXJOYXZMZWZ0TW9zdFRodW1ibmFpbDogdGhpcy5sZWZ0TW9zdFRodW1ibmFpbH0pO1xuICB9XG5cbiAgX3Nob3dpbmdMYXN0VGh1bWJGcmFtZSgpIHtcbiAgICBpZiggdGhpcy5sZWZ0TW9zdFRodW1ibmFpbCArIHRoaXMudGh1bWJuYWlsc1BlckZyYW1lID4gdGhpcy50aHVtYm5haWxzLmxlbmd0aC0xICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIF91cGRhdGVUaHVtYm5haWxDb250YWluZXJQb3MoKSB7XG4gICAgLy8gdGhhdCArMSBpcyBhIGhhY2ssIHdoYXQgYW0gSSBtaXNzaW5nICE/XG4gICAgdGhpcy4kLnRodW1ibmFpbElubmVyQ29udGFpbmVyLnN0eWxlLm1hcmdpbkxlZnQgPSAoLTEgKiB0aGlzLmxlZnRNb3N0VGh1bWJuYWlsICogKHRoaXMudG90YWxUaHVtYm5haWxXaWR0aCArIDEpKSArICdweCc7XG5cbiAgICBsZXQgbGFzdFRodW1iID0gdGhpcy5sZWZ0TW9zdFRodW1ibmFpbCArIHRoaXMudGh1bWJuYWlsc1BlckZyYW1lO1xuICAgIHRoaXMudGh1bWJuYWlscy5mb3JFYWNoKCh0aHVtYm5haWwsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLnNldChgdGh1bWJuYWlscy4ke2luZGV4fS5kaXNhYmxlZGAsIChpbmRleCA8IHRoaXMubGVmdE1vc3RUaHVtYm5haWwgfHwgaW5kZXggPj0gbGFzdFRodW1iKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25TZWxlY3RlZFJlY29yZFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBBcHBTdGF0ZUludGVyZmFjZSwgY2FsbGVkIHdoZW4gYSByZWNvcmQgaXMgc2VsZWN0ZWRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmQgc2VsZWN0ZWQgcmVjb3JkXG4gICAqL1xuICBfb25TZWxlY3RlZFJlY29yZFVwZGF0ZShyZWNvcmQpIHtcbiAgICB0aGlzLmxlZnRNb3N0VGh1bWJuYWlsID0gMDtcblxuICAgIGlmKCAhcmVjb3JkICkge1xuICAgICAgdGhpcy5zaW5nbGVJbWFnZSA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmICh1dGlscy5jb3VudE1lZGlhSXRlbXMocmVjb3JkLm1lZGlhKSA9PT0gMSkge1xuICAgICAgdGhpcy5zaW5nbGVJbWFnZSA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tZWRpYUxpc3QgPSB1dGlscy5mbGF0dGVuTWVkaWFMaXN0KHJlY29yZC5tZWRpYSk7XG4gICAgdGhpcy5tZWRpYUxpc3QgPSB1dGlscy5vcmdhbml6ZU1lZGlhTGlzdCh0aGlzLm1lZGlhTGlzdCk7XG5cbiAgICB0aGlzLnRodW1ibmFpbHMgPSB0aGlzLm1lZGlhTGlzdC5tYXAobWVkaWEgPT4ge1xuICAgICAgbGV0IHtmaWxlVHlwZSwgaWNvblR5cGV9ID0gdGhpcy5fZ2V0RmlsZUFuZEljb25UeXBlKG1lZGlhKTtcblxuICAgICAgaWYoIHRoaXMuaXNMaWdodGJveCAmJiBmaWxlVHlwZSAhPT0gJ2ltYWdlJyApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGxldCB0aHVtYm5haWxVcmwgPSBtZWRpYS50aHVtYm5haWxVcmw7XG4gICAgICBpZiggdGh1bWJuYWlsVXJsICYmICF0aHVtYm5haWxVcmwubWF0Y2goL1xcL3N2YzppaWlmXFwvLykgKSB7XG4gICAgICAgIHRodW1ibmFpbFVybCArPSAnL3N2YzppaWlmL2Z1bGwvLDUwLzAvZGVmYXVsdC5qcGcnO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGh1bWJuYWlsID0ge1xuICAgICAgICBpZDogbWVkaWFbJ0BpZCddLFxuICAgICAgICBpY29uOiBpY29uVHlwZSxcbiAgICAgICAgcG9zaXRpb246IG1lZGlhLnBvc2l0aW9uLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgc3JjOiB0aHVtYm5haWxVcmwgXG4gICAgICAgIC8vIHRodW1ibmFpbDogdXJsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aHVtYm5haWw7XG4gICAgfSlcbiAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSA/IHRydWUgOiBmYWxzZSlcbiAgICAvLyBUT0RPOiBGaWx0ZXJpbmcgb3V0IHRoZSB0ZXh0IGJhc2VkIGZpbGVzIGZvciBub3cgdW50aWwgd2UgZ2V0IHRoZSBQREYvdGV4dCB2aWV3ZXIgc2V0IHVwIGNvcnJlY3RseVxuICAgIC5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lmljb24gIT09ICdibGFuay1yb3VuZCcpO1xuXG4gICAgdGhpcy5zaW5nbGVJbWFnZSA9ICh0aGlzLnRodW1ibmFpbHMubGVuZ3RoICE9PSAwICYmIHRoaXMudGh1bWJuYWlscy5sZW5ndGggPiAxKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB0aGlzLl9yZXNpemUoKTtcblxuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXQoe21lZGlhVmlld2VyTmF2TGVmdE1vc3RUaHVtYm5haWw6IDB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlbGVjdGVkUmVjb3JkTWVkaWFVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGZyb20gQXBwU3RhdGVJbnRlcmZhY2UsIGNhbGxlZCB3aGVuIGEgcmVjb3JkcyBtZWRpYSBpcyBzZWxlY3RlZFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IG1lZGlhIFxuICAgKi9cbiAgX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShtZWRpYSkge1xuICAgIHRoaXMubWVkaWEgPSBtZWRpYTtcbiAgICBpZiggIW1lZGlhICkgcmV0dXJuO1xuXG4gICAgdGhpcy50aHVtYm5haWxzLmZvckVhY2goKHRodW1ibmFpbCwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuc2V0KGB0aHVtYm5haWxzLiR7aW5kZXh9LnNlbGVjdGVkYCwgKHRoaXMubWVkaWFbJ0BpZCddID09PSB0aHVtYm5haWwuaWQpKTtcbiAgICB9KTtcblxuICAgIGxldCB7ZmlsZVR5cGUsIGljb25UeXBlfSA9IHRoaXMuX2dldEZpbGVBbmRJY29uVHlwZShtZWRpYSk7XG4gICAgXG4gICAgdGhpcy5zaG93T3BlbkxpZ2h0Ym94ID0gKGZpbGVUeXBlID09PSAnaW1hZ2UnKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIF9nZXRGaWxlQW5kSWNvblR5cGUobWVkaWEpIHtcbiAgICBsZXQgX2ZpbGUgPSAnJztcbiAgICBsZXQgZmlsZVR5cGUgICA9IF9maWxlO1xuICAgIGxldCBmaWxlRm9ybWF0ID0gX2ZpbGU7XG4gICAgbGV0IGljb25UeXBlICAgPSAnJztcblxuICAgIGlmIChtZWRpYS5maWxlRm9ybWF0IHx8IG1lZGlhLmVuY29kaW5nRm9ybWF0KSB7XG4gICAgICBfZmlsZSA9IChtZWRpYS5maWxlRm9ybWF0ID8gbWVkaWEuZmlsZUZvcm1hdCA6IG1lZGlhLmVuY29kaW5nRm9ybWF0KTtcblxuICAgICAgXG4gICAgICBmaWxlVHlwZSAgID0gX2ZpbGUuc3BsaXQoJy8nKS5zaGlmdCgpO1xuICAgICAgZmlsZUZvcm1hdCA9IF9maWxlLnNwbGl0KCcvJykucG9wKCk7XG4gICAgfVxuXG4gICAgbGV0IHR5cGUgPSB1dGlscy5nZXRNZWRpYVR5cGUobWVkaWEpO1xuICAgIGlmICh0eXBlID09PSAnQXVkaW9PYmplY3QnIHx8IGZpbGVUeXBlID09PSAnYXVkaW8nKSBpY29uVHlwZSA9ICdzb3VuZC1yb3VuZCc7XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ1ZpZGVvT2JqZWN0JyB8fCB0eXBlID09PSAnU3RyZWFtaW5nVmlkZW8nIHx8IGZpbGVUeXBlID09PSAndmlkZW8nKSBpY29uVHlwZSA9ICd2aWRlby1yb3VuZCc7XG4gICAgZWxzZSBpZiAoZmlsZUZvcm1hdCA9PT0gJ3BkZicpIGljb25UeXBlID0gJ2JsYW5rLXJvdW5kJztcbiAgICAvLyBUT0RPOiBHZXQgYmFjayB0byB0aGlzXG4gICAgZWxzZSBpZiAoZmlsZVR5cGUgPT09ICczNjAnKSAgIGljb25UeXBlID0gJzM2MC1yb3VuZCc7XG5cbiAgICByZXR1cm4ge2ZpbGVUeXBlLCBpY29uVHlwZX07XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25UaHVtYm5haWxDbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byB0aHVtYm5haWwgY2xpY2sgZXZlbnQuICBzZWxlY3QgYSBtZWRpYSBvYmplY3RcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIEhUTUwgY2xpY2sgZXZlbnRcbiAgICovXG4gIF9vblRodW1ibmFpbENsaWNrZWQoZSkge1xuICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ21lZGlhLWlkJyk7XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblpvb21JbkNsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIHpvb20gaWNvbiBjbGljayBldmVudC4gIGVtaXQgem9vbSBldmVudFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgSFRNTCBjbGljayBldmVudFxuICAgKi9cbiAgX29uWm9vbUluQ2xpY2tlZChlKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnem9vbS1pbicpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblpvb21PdXRDbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byB6b29tIGljb24gY2xpY2sgZXZlbnQuICBlbWl0IHpvb20gZXZlbnRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIEhUTUwgY2xpY2sgZXZlbnRcbiAgICovXG4gIF9vblpvb21PdXRDbGlja2VkKGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd6b29tLW91dCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNsb3NlQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gY2xvc2UgaWNvbiBjbGljayBldmVudC4gIGVtaXQgY2xvc2UgZXZlbnRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIEhUTUwgY2xpY2sgZXZlbnRcbiAgICovXG4gIF9vbkNsb3NlQ2xpY2tlZChlKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnKSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBzZXRGb2N1c1xuICAgKiBAZGVzY3JpcHRpb24gc2V0IGZvY3VzIHRvIGZpcnN0IGNsaWNrYWJsZSBlbGVtZW50XG4gICAqL1xuICBzZXRGb2N1cygpIHtcbiAgICBpZiggdGhpcy5zaW5nbGVJbWFnZSApIHtcbiAgICAgIGlmKCAhdGhpcy5icmVha0NvbnRyb2xzICkgdGhpcy4kLnpvb21PdXQxLmZvY3VzKCk7XG4gICAgICBlbHNlIHRoaXMuJC56b29tT3V0Mi5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZmlyc3RCdG4gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgICBpZiggZmlyc3RCdG4gKSBmaXJzdEJ0bi5mb2N1cygpO1xuICAgIH1cbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1tZWRpYS12aWV3ZXItbmF2JywgQXBwTWVkaWFWaWV3ZXJOYXYpOyIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIlxuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9hcHAtbWVkaWEtdmlld2VyLnRwbFwiXG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1wYWdlcydcblxuaW1wb3J0IFwiLi9hcHAtaW1hZ2Utdmlld2VyXCJcbi8vIGltcG9ydCBcIi4vYXBwLTM2MC1pbWFnZS12aWV3ZXJcIlxuaW1wb3J0IFwiLi9hcHAtdmlkZW8tdmlld2VyXCJcbmltcG9ydCBcIi4vYXBwLWF1ZGlvLXZpZXdlclwiXG5cbmltcG9ydCBcIi4vYXBwLW1lZGlhLXZpZXdlci1uYXZcIlxuaW1wb3J0IFwiLi9hcHAtaW1hZ2Utdmlld2VyLWxpZ2h0Ym94XCJcblxuaW1wb3J0IFwiQHVjZC1saWIvY29yay1hcHAtdXRpbHNcIlxuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvdXRpbHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBNZWRpYVZpZXdlciBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVkaWFUeXBlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIHRhbGxDb250cm9scyA6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgICAgYmFnT2ZGaWxlc0ltYWdlIDoge3R5cGU6IFN0cmluZ31cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnLCAnUmVjb3JkTW9kZWwnKTtcbiAgICAgIHRoaXMubWVkaWFUeXBlID0gJ2ltYWdlJztcbiAgICAgIHRoaXMuYmFnT2ZGaWxlc0ltYWdlID0gJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgdGhpcy4kLmxpZ2h0Ym94ID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdsaWdodGJveCcpO1xuICAgICAgaWYoICF0aGlzLiQubGlnaHRib3ggKSB0aGlzLiQubGlnaHRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlnaHRib3gnKTtcblxuICAgICAgdGhpcy5fb25BcHBTdGF0ZVVwZGF0ZShhd2FpdCB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgX29uUmVjb3JkVXBkYXRlXG4gICAgICogQGRlc2NyaXB0aW9uIGZyb20gUmVjb3JkTW9kZWwsIGxpc3RlbiBmb3IgbG9hZGluZyBldmVudHMgYW5kIHJlc2V0IFVJLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIHN0YXRlIGV2ZW50IFxuICAgICAqL1xuICAgIF9vblJlY29yZFVwZGF0ZShlKSB7XG4gICAgICAvLyBpZiggZS5zdGF0ZSAhPT0gJ2xvYWRpbmcnICkgcmV0dXJuO1xuICAgICAgLy8gdGhpcy5tZWRpYVR5cGUgPSAnJztcbiAgICB9XG5cbiAgICBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgICBpZiggIWUuc2VsZWN0ZWRSZWNvcmRNZWRpYSApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJlY29yZE1lZGlhSWQgPSAnJztcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWFUeXBlID0gJyc7XG4gICAgICB9XG4gICAgICBpZiggZS5zZWxlY3RlZFJlY29yZE1lZGlhWydAaWQnXSA9PT0gdGhpcy5zZWxlY3RlZFJlY29yZE1lZGlhSWQgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZWxlY3RlZFJlY29yZE1lZGlhSWQgPSBlLnNlbGVjdGVkUmVjb3JkTWVkaWFbJ0BpZCddO1xuXG4gICAgICBsZXQgbWVkaWFUeXBlID0gdXRpbHMuZ2V0TWVkaWFUeXBlKGUuc2VsZWN0ZWRSZWNvcmRNZWRpYSkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9vYmplY3QvaSwgJycpO1xuICAgICAgaWYgKCBtZWRpYVR5cGUgPT09IFwiaW1hZ2VsaXN0XCIgKSB7XG4gICAgICAgIG1lZGlhVHlwZSA9IFwiaW1hZ2VcIjtcbiAgICAgIH0gZWxzZSBpZiAoIG1lZGlhVHlwZSA9PT0gXCJzdHJlYW1pbmd2aWRlb1wiICl7XG4gICAgICAgIG1lZGlhVHlwZSA9IFwidmlkZW9cIjtcbiAgICAgIH1cblxuICAgICAgaWYoIG1lZGlhVHlwZSA9PT0gJ2JhZ29mZmlsZXMnICYmIGUuc2VsZWN0ZWRSZWNvcmRNZWRpYS50aHVtYm5haWxVcmwgKSB7XG4gICAgICAgIHRoaXMuYmFnT2ZGaWxlc0ltYWdlID0gZS5zZWxlY3RlZFJlY29yZE1lZGlhLnRodW1ibmFpbFVybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmFnT2ZGaWxlc0ltYWdlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWVkaWFUeXBlID0gbWVkaWFUeXBlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBfb25ab29tSW5cbiAgICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gem9vbSBldmVudCBpbiBhcHAtbWVkaWEtdmlld2VyLW5hdi4gXG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGUgY3VzdG9tIEhUTUwgZXZlbnRcbiAgICAgKi9cbiAgICBfb25ab29tSW4oZSkge1xuICAgICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldCh7c2hvd0xpZ2h0Ym94OiB0cnVlfSk7XG4gICAgICB0aGlzLiQubGlnaHRib3guc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLW1lZGlhLXZpZXdlcicsIEFwcE1lZGlhVmlld2VyKTsiLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gIH1cblxuICAud3JhcHBlciB7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xuICAgIC8qIG1pbi1oZWlnaHQ6MjUwcHg7ICovXG4gIH1cblxuICAjYmFnb2ZmaWxlcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgI2JhZ29mZmlsZXMgaXJvbi1pY29uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XG4gIH1cblxuICBpcm9uLXBhZ2VzIHtcbiAgICAvKiBmbGV4OiAxOyAqL1xuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICA8YXBwLWltYWdlLXZpZXdlci1saWdodGJveCBpZD1cImxpZ2h0Ym94XCI+PC9hcHAtaW1hZ2Utdmlld2VyLWxpZ2h0Ym94PlxuXG4gIDxpcm9uLXBhZ2VzIHNlbGVjdGVkPVwiJHt0aGlzLm1lZGlhVHlwZX1cIiBhdHRyLWZvci1zZWxlY3RlZD1cImlkXCIgc2VsZWN0ZWQtYXR0cmlidXRlPVwidmlzaWJsZVwiPlxuICAgIDwhLS0gPGFwcC0zNjAtaW1hZ2Utdmlld2VyIGlkPVwiMzYwXCI+PC9hcHAtMzYwLWltYWdlLXZpZXdlcj4gLS0+XG4gICAgPGRpdiBpZD1cImJhZ29mZmlsZXNcIj5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImZpbi1pY29uczp2YXJpb3VzLW91dGxpbmUtc3RhY2tlZFwiID9oaWRkZW49XCIke3RoaXMuYmFnT2ZGaWxlc0ltYWdlfVwiPjwvaXJvbi1pY29uPlxuICAgICAgPGltZyBzcmM9XCIke3RoaXMuYmFnT2ZGaWxlc0ltYWdlfVwiID9oaWRkZW49XCIkeyF0aGlzLmJhZ09mRmlsZXNJbWFnZX1cIiAvPlxuICAgIDwvZGl2PlxuICAgIDxhcHAtaW1hZ2Utdmlld2VyIGlkPVwiaW1hZ2VcIj48L2FwcC1pbWFnZS12aWV3ZXI+XG4gICAgPGFwcC12aWRlby12aWV3ZXIgaWQ9XCJ2aWRlb1wiPjwvYXBwLXZpZGVvLXZpZXdlcj5cbiAgICA8YXBwLWF1ZGlvLXZpZXdlciBpZD1cImF1ZGlvXCI+PC9hcHAtYXVkaW8tdmlld2VyPlxuICA8L2lyb24tcGFnZXM+XG5cbiAgPGFwcC1tZWRpYS12aWV3ZXItbmF2IEB6b29tLWluPVwiJHt0aGlzLl9vblpvb21Jbn1cIj48L2FwcC1tZWRpYS12aWV3ZXItbmF2PlxuPC9kaXY+XG5cbmA7fSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYW1wb3R0cy9wbHlyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL3NoYWthLXBsYXllci9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvc2hha2EtcGxheWVyL3RyZWUvbWFzdGVyL2RvY3MvdHV0b3JpYWxzXG5cbmltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIlxuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9hcHAtdmlkZW8tdmlld2VyLnRwbC5qc1wiXG5cbmltcG9ydCBcIkB1Y2QtbGliL2NvcmstYXBwLXV0aWxzXCJcblxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2NvbmZpZ1wiXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi91dGlsc1wiXG5pbXBvcnQgdmlkZW9MaWJzIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvdXRpbHMvdmlkZW8tbGliLWxvYWRlclwiXG5cbmltcG9ydCBwbHlyQ3NzIGZyb20gXCJwbHlyL2Rpc3QvcGx5ci5jc3NcIlxuaW1wb3J0IHNoYWthQ3NzIGZyb20gXCJzaGFrYS1wbGF5ZXIvZGlzdC9jb250cm9scy5jc3NcIlxubGV0IFZJREVPX1NUWUxFUyA9IHBseXJDc3Mrc2hha2FDc3M7XG5cbmltcG9ydCBzcHJpdGVTaGVldCBmcm9tIFwicGx5ci9kaXN0L3BseXIuc3ZnXCJcbmxldCBTUFJJVEVfU0hFRVQgPSBzcHJpdGVTaGVldFxuXG4vLyBWZXJ5IGR1bXAuICBUbyByZW1vdmUgdGhlICdTaGFrYSBQbGF5ZXIgVGV4dFRyYWNrJ1xuLy8geW91IGhhdmUgdG8gb3ZlcnJpZGUgdGhpcy4uLlxuY2xhc3MgU2ltcGxlVGV4dERpc3BsYXllciB7XG4gIGNvbnN0cnVjdG9yKHZpZGVvKSB7fVxuICByZW1vdmUoKSB7cmV0dXJuIHRydWV9XG4gIGRlc3Ryb3koKSB7fVxuICBhcHBlbmQoY3Vlcykge31cbiAgc2V0VGV4dFZpc2liaWxpdHkob24pIHt9XG4gIGlzVGV4dFZpc2libGUoKSB7cmV0dXJuIGZhbHNlfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBWaWRlb1ZpZXdlciBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuICBcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGF5ZXI6IHt0eXBlOiBPYmplY3R9LFxuICAgICAgdHJhY2tzOiB7dHlwZTogQXJyYXl9LFxuICAgICAgbGlic0xvYWRlZCA6IHt0eXBlOiBCb29sZWFufVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnQXBwU3RhdGVNb2RlbCcsICdNZWRpYU1vZGVsJyk7XG4gICAgdGhpcy50cmFja3MgPSBbXTtcbiAgICB0aGlzLnBsYXllciA9IHt9O1xuICAgIHRoaXMubGlic0xvYWRlZCA9IGZhbHNlO1xuICB9XG5cbiAgX29uQXBwU3RhdGVVcGRhdGUoZSkge1xuICAgIGlmICggdGhpcy5mdWxsUGF0aCAhPT0gZS5sb2NhdGlvbi5mdWxscGF0aCApIHsgXG4gICAgICB0aGlzLl9zdG9wKCk7XG4gICAgfVxuXG4gICAgdGhpcy5mdWxsUGF0aCA9IGUubG9jYXRpb24uZnVsbHBhdGg7XG4gIH1cblxuICBhc3luYyBmaXJzdFVwZGF0ZWQoZSkge1xuICAgIGxldCBzZWxlY3RlZFJlY29yZE1lZGlhID0gYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkTWVkaWEoKTtcbiAgICBpZiggc2VsZWN0ZWRSZWNvcmRNZWRpYSApIHRoaXMuX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShzZWxlY3RlZFJlY29yZE1lZGlhKTtcblxuICAgIHRoaXMuZnVsbFBhdGggPSAoYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpKS5sb2NhdGlvbi5mdWxscGF0aDtcbiAgICBcbiAgICAvLyB3ZWJwYWNrIG1vZHVsZSBpcyBiYXNlNjQgZW5jb2RlZCBVUkwsIGNoZWNrIGlmIHRoaXMgaGFwcGVuZWQgXG4gICAgLy8gYW5kIGRlY29kZSwgdGhlbiBzZXQgc3ZnIHRvIGlubmVySHRtbCBpbnNpZGUgdGhlIHNoYWRvdyBkb20uXG4gICAgaWYoIFNQUklURV9TSEVFVC5pbmRleE9mKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0JykgPiAtMSApIHtcbiAgICAgIFNQUklURV9TSEVFVCA9IGF0b2IoU1BSSVRFX1NIRUVULnJlcGxhY2UoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJywgJycpKTtcbiAgICB9XG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNzcHJpdGUtcGx5cicpLmlubmVySFRNTCA9IFNQUklURV9TSEVFVDtcbiAgXG4gICAgLy8gZGVjaWRlIHdoZXJlIHRvIHB1dCBjc3NcbiAgICAvLyBUaGUgUExZUiBsaWJyYXJ5IGlzbid0IGF3YXJlIG9mIHNoYWR5ZG9tIHNvIHdlIG5lZWQgdG8gbWFudWFsbHlcbiAgICAvLyBwbGFjZSBvdXIgc3R5bGVzIGluIGRvY3VtZW50LmhlYWQgdy9vIHNoYWR5ZG9tIHRvdWNoaW5nIHRoZW0uXG4gICAgbGV0IHBseXJTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHBseXJTdHlsZXMuaW5uZXJIVE1MID0gVklERU9fU1RZTEVTO1xuICAgIGlmKCB3aW5kb3cuU2hhZHlET00gJiYgd2luZG93LlNoYWR5RE9NLmluVXNlICkge1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChwbHlyU3R5bGVzKTtcbiAgICAgIHRoaXMuaGlkZUNvbnRyb2xzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChwbHlyU3R5bGVzKTtcbiAgICAgIHRoaXMuaGlkZUNvbnRyb2xzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBmcm9tIEFwcFN0YXRlTW9kZWwsIGNhbGxlZCB3aGVuIGEgcmVjb3JkcyBtZWRpYSBpcyBzZWxlY3RlZFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IG1lZGlhIFxuICAqKi9cbiAgYXN5bmMgX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShtZWRpYSkge1xuICAgIGlmKCAhbWVkaWEgKSByZXR1cm47XG4gICAgbGV0IG1lZGlhVHlwZSA9IHV0aWxzLmdldE1lZGlhVHlwZShtZWRpYSk7XG4gICAgaWYgKG1lZGlhVHlwZSAhPT0gJ1ZpZGVvT2JqZWN0JyAmJiBtZWRpYVR5cGUgIT09ICdTdHJlYW1pbmdWaWRlbycpIHJldHVybjtcblxuICAgIHRoaXMubWVkaWEgPSBtZWRpYTtcblxuICAgIC8vIGZpbmQgYXNzb2NpYXRlZCBjYXB0aW9ucyBhbmQgcHJlcCB0byB0cmFja3MgYXJyYXlcbiAgICB0aGlzLnRyYWNrcyA9IHV0aWxzLmFzQXJyYXkobWVkaWEsICdjYXB0aW9uJylcbiAgICAgIC5maWx0ZXIoY2FwdGlvbiA9PiBjYXB0aW9uWydAaWQnXSAhPT0gdW5kZWZpbmVkIClcbiAgICAgIC5tYXAoY2FwdGlvbiA9PiB7XG4gICAgICAgIGxldCBsbmcgPSBjYXB0aW9uLmxhbmd1YWdlO1xuICAgICAgICBsZXQgc2V0RGVmYXVsdCA9IChsbmcgPT09ICdlbicgPyB0cnVlIDogZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogJ2NhcHRpb25zJyxcbiAgICAgICAgICBsYWJlbDogdXRpbHMuZ2V0TGFuZ3VhZ2UobG5nKSxcbiAgICAgICAgICBzcmNsYW5nOiBsbmcsXG4gICAgICAgICAgc3JjOiBjYXB0aW9uWydAaWQnXSxcbiAgICAgICAgICBkZWZhdWx0OiBzZXREZWZhdWx0XG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIC8vIGlmIHdlIGhhdmUgYWxyZWFkeSBsb2FkZWQgdGhlIHBsYXllciBhbmQgc2hha2EgbGlicmFyaWVzXG4gICAgLy8gdGhlbiB3ZSBjYW4gZ28gYWhlYWQgYW5kIGxvYWQgdGhlIHZpZGVvXG4gICAgaWYoIHRoaXMubGlic0xvYWRlZCApIHtcbiAgICAgIHRoaXMuX2xvYWRWaWRlbygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGR5bmFtaWNhbGx5IGxvYWQgcGx5ciBhbmQgc2hha2EgbGlic1xuICAgIGxldCB7cGx5ciwgc2hha2F9ID0gYXdhaXQgdmlkZW9MaWJzLmxvYWQoKTtcblxuICAgIC8vIGFsZXJ0IHVzZXIgaWYgdmlkZW8gcGxheWJhY2sgaXMgbm90IHN1cHBvcnRlZFxuICAgIGxldCBwbHlyX3N1cHBvcnRlZCA9IHBseXIuc3VwcG9ydGVkKCd2aWRlbycsICdodG1sNScsIHRydWUpO1xuICAgIGxldCBzaGFrYV9zdXBwb3J0ZWQgPSBzaGFrYS5QbGF5ZXIuaXNCcm93c2VyU3VwcG9ydGVkKCk7XG4gICAgaWYoICFwbHlyX3N1cHBvcnRlZCB8fCAhc2hha2Ffc3VwcG9ydGVkICkge1xuICAgICAgcmV0dXJuIGFsZXJ0KCdZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB2aWRlbyBwbGF5YmFjaycpO1xuICAgIH1cblxuICAgIGxldCB2aWRlb0VsZSA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKTtcblxuXG4gICAgdGhpcy5wbHlyID0gbmV3IHBseXIodmlkZW9FbGUsIHtcbiAgICAgIGhpZGVDb250cm9sczogdGhpcy5oaWRlQ29udHJvbHMsXG4gICAgICBmdWxsc2NyZWVuIDoge2VuYWJsZWQ6IGZhbHNlfSxcbiAgICAgIGNhcHRpb25zOiB7dXBkYXRlOiBmYWxzZX0sXG4gICAgICAvLyBrZXlib2FyZDoge2dsb2JhbDogdHJ1ZX0sXG4gICAgICBjb250cm9scyA6IFsncGxheS1sYXJnZScsICdwbGF5JywgJ3Byb2dyZXNzJywgJ2N1cnJlbnQtdGltZScsICdtdXRlJywgJ3ZvbHVtZSddXG4gICAgfSk7XG5cbiAgICAvLyBDb25zdHJ1Y3QgYSBQbGF5ZXIgdG8gd3JhcCBhcm91bmQgdGhlIDx2aWRlbz4gdGFnLlxuICAgIHRoaXMuc2hha2EgPSBuZXcgc2hha2EuUGxheWVyKHZpZGVvRWxlLCApO1xuICAgIHRoaXMuc2hha2EuY29uZmlndXJlKHtcbiAgICAgIHRleHREaXNwbGF5RmFjdG9yeSA6IFNpbXBsZVRleHREaXNwbGF5ZXJcbiAgICB9KTtcblxuICAgIHRoaXMuc2hha2EuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlID0+IGNvbnNvbGUuZXJyb3IoJ3NoYWthIGVycm9yJywgZSkpO1xuICAgIFxuICAgIHRoaXMubGlic0xvYWRlZCA9IHRydWU7XG4gICAgYXdhaXQgdGhpcy5fbG9hZFZpZGVvKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfbG9hZFZpZGVvXG4gICAqIEBkZXNjcmlwdGlvbiBsb2FkIHVybCBpbnRvIHNoYWthIGZvciBjdXJyZW50IG1lZGlhXG4gICAqL1xuICBhc3luYyBfbG9hZFZpZGVvKCkge1xuICAgIGlmKCAhdGhpcy5tZWRpYSApIHJldHVybjtcblxuICAgIGxldCBtZWRpYVR5cGUgPSB1dGlscy5nZXRNZWRpYVR5cGUodGhpcy5tZWRpYSk7XG4gICAgbGV0IG1hbmlmZXN0VXJpID0gY29uZmlnLmZjcmVwb0Jhc2VQYXRoK3RoaXMubWVkaWFbJ0BpZCddO1xuXG4gICAgaWYoIG1lZGlhVHlwZSA9PT0gJ1N0cmVhbWluZ1ZpZGVvJyApIHtcbiAgICAgIG1hbmlmZXN0VXJpICs9ICcvcGxheWxpc3QubTN1OCdcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5zaGFrYS5sb2FkKG1hbmlmZXN0VXJpKTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb2RlOiAnLCBlcnJvci5jb2RlLCAnb2JqZWN0JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHBsYXliYWNrIGFuZCByZXNldCB0byBzdGFydFxuICAgKi9cbiAgX3N0b3AoKSB7XG4gICAgY29uc3QgdmlkZW8gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3ZpZGVvJyk7XG4gICAgdmlkZW8ucGF1c2UoKTtcblxuICAgIGlmICggdGhpcy5wbHlyID09PSB1bmRlZmluZWQgfHwgdGhpcy5wbHlyID09PSBudWxsICkgcmV0dXJuO1xuXG4gICAgaWYgKE9iamVjdC5lbnRyaWVzKHRoaXMucGx5cikubGVuZ3RoICE9IDApIHtcbiAgICAgIHRoaXMucGx5ci5zdG9wKCk7XG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC12aWRlby12aWV3ZXInLCBBcHBWaWRlb1ZpZXdlcik7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3VjZC1saWJyYXJ5L3BnZG0tdWkvdHJlZS9tYXN0ZXIvYXBwL2VsZW1lbnRzL3BhZ2VzL2Nvbm5lY3RcblxuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IHJlcGVhdCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvcmVwZWF0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAvKiBwYWRkaW5nLWJvdHRvbTogOHB4OyAqL1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgLnBseXJfX2NvbnRyb2xzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLyAxLjgpO1xuICAgICAgICB9XG4gICAgICAgICovXG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdmlkZW8ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGx5cl9fdmlkZW8td3JhcHBlciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucGx5ci0tZnVsbC11aSBpbnB1dFt0eXBlPXJhbmdlXSB7XG4gICAgICAgICAgICBjb2xvcjogI2RhYWEwMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLnBseXJfX2NvbnRyb2wucGx5cl9fY29udHJvbC0tb3ZlcmxhaWQsXG4gICAgICAgIGJ1dHRvbi5wbHlyX19jb250cm9sLnBseXJfX2NvbnRyb2w6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMTgsMTcwLDAsMS4wKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBseXJfX2NvbnRyb2w6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMTgsMTcwLDAsMS4wKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5wbHlyLS1mdWxsLXVpIGlucHV0W3R5cGU9cmFuZ2VdIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAucGx5ci0tZnVsbC11aSBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgyMTgsMTcwLDAsMS4wKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5wbHlyX190YWItZm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLXNwaW5uZXItbGl0ZSB7XG4gICAgICAgICAgICAtLXBhcGVyLXNwaW5uZXItY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgICNsb2FkaW5nIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGlkPVwic3ByaXRlLXBseXJcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9kaXY+IFxuICAgICAgICA8dmlkZW8gP2hpZGRlbj1cIiR7IXRoaXMubGlic0xvYWRlZH1cIiBpZD1cInZpZGVvXCIgcGxheXNpbmxpbmUgY29udHJvbHMgY3Jvc3NvcmlnaW4+XG4gICAgICAgICAgICAke3JlcGVhdCh0aGlzLnRyYWNrcywgKHQpID0+IFxuICAgICAgICAgICAgICAgIGh0bWxgPHRyYWNrIGtpbmQ9XCIke3Qua2luZH1cIiBsYWJlbD1cIiR7dC5sYWJlbH1cIiBzcmM9XCIke3Quc3JjfVwiIHNyY2xhbmc9XCIke3Quc3JjbGFuZ31cIiBkZWZhdWx0PVwiJHt0LmRlZmF1bHR9XCIgLz5gKX1cbiAgICAgICAgPC92aWRlbz5cbiAgICAgICAgPGRpdiBpZD1cImxvYWRpbmdcIiA/aGlkZGVuPVwiJHt0aGlzLmxpYnNMb2FkZWR9XCI+XG4gICAgICAgICAgICA8cGFwZXItc3Bpbm5lci1saXRlID9hY3RpdmU9XCIkeyF0aGlzLmxpYnNMb2FkZWR9XCI+PC9wYXBlci1zcGlubmVyLWxpdGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYFxufVxuIiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtc2hhcmUtYnRuLmh0bWxcIlxuXG5pbXBvcnQgQXBwU3RhdGVJbnRlcmZhY2UgZnJvbSBcIi4uL2ludGVyZmFjZXMvQXBwU3RhdGVJbnRlcmZhY2VcIlxuaW1wb3J0IE1lZGlhSW50ZXJmYWNlIGZyb20gXCIuLi9pbnRlcmZhY2VzL01lZGlhSW50ZXJmYWNlXCJcblxuY29uc3QgQkFTRV9TSEFSRV9MSU5LUyA9IHtcbiAgZmFjZWJvb2sgOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwJyxcbiAgdHdpdHRlciA6ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldCcsXG4gIC8vIHBpbnRlcmVzdCBjYW4gYWxzbyBhZGQgP21lZGlhIGFuZCA/ZGVzY3JpcHRpb25cbiAgcGludGVyZXN0IDogJ2h0dHBzOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFNoYXJlQnRuIGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gIC53aXRoKEV2ZW50SW50ZXJmYWNlLCBBcHBTdGF0ZUludGVyZmFjZSwgTWVkaWFJbnRlcmZhY2UpIHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2aXNpYmxlIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIC8vIGhhbmRsZSBvdXRzaWRlIGNsaWNrc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmKCB0aGlzLnZpc2libGUgKSB0aGlzLmhpZGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIGlmKCB0aGlzLnZpc2libGUgJiYgZS53aGljaCA9PT0gMjcgKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLiQucG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vbkFwcFN0YXRlVXBkYXRlKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy4kLmxpbmsudmFsdWUgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaGlkZVxuICAgKiBAZGVzY3JpcHRpb24gaGlkZSBwb3B1cFxuICAgKi9cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLiQucG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkJ0bkNsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIG1haW4gaWNvbiwgdG9nZ2xlcyBwb3B1cCB3aGVuIGNsaWNrZWRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIEhUTUwgY2xpY2sgZXZlbnRcbiAgICovXG4gIF9vbkJ0bkNsaWNrZWQoZSkge1xuICAgIHRoaXMudmlzaWJsZSA9ICF0aGlzLnZpc2libGU7XG4gICAgdGhpcy4kLnBvcHVwLnN0eWxlLmRpc3BsYXkgPSB0aGlzLnZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgIFxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy4kLmZhY2Vib29rLmZvY3VzKCksIDEwMCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25TZWxlY3RlZFJlY29yZFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBBcHBTdGF0ZUludGVyZmFjZSwgY2FsbGVkIHdoZW4gYSByZWNvcmQgaXMgc2VsZWN0ZWRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmQgc2VsZWN0ZWQgcmVjb3JkXG4gICAqL1xuICAvLyBfb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKHJlY29yZCkge1xuICAvLyAgIGNvbnNvbGUubG9nKHJlY29yZCk7XG4gIC8vICAgdGhpcy5yZWNvcmQgPSByZWNvcmQ7XG4gIC8vIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Tb2NpYWxJY29uQ2xpY2tcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIHNvY2lhbCBpY29uIGJ1dHRvbnMuICBDYWxsZWQgd2hlbiBvbmUgb3MgY2xpY2tlZFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgSFRNTCBjbGljayBldmVudCBcbiAgICovXG4gIF9vblNvY2lhbEljb25DbGljayhlKSB7XG4gICAgbGV0IHJlY29yZCA9IHRoaXMuQXBwU3RhdGVNb2RlbC5nZXRTZWxlY3RlZFJlY29yZCgpO1xuICAgIGxldCBtZWRpYSA9IHRoaXMuQXBwU3RhdGVNb2RlbC5nZXRTZWxlY3RlZFJlY29yZE1lZGlhKCk7XG5cbiAgICBpZiggZS50eXBlID09PSAna2V5dXAnICYmIGUud2hpY2ggIT09IDEzICkgcmV0dXJuO1xuICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldFsnaWQnXTtcblxuICAgIGxldCB1cmwgPSBCQVNFX1NIQVJFX0xJTktTW2lkXTtcbiAgICBsZXQgcXNvID0ge307XG4gICAgbGV0IG5hbWUgPSAobWVkaWEubmFtZSB8fCBtZWRpYS50aXRsZSB8fCByZWNvcmQubmFtZSB8fCByZWNvcmQudGl0bGUpO1xuXG4gICAgaWYoIGlkID09PSAncGludGVyZXN0JyApIHsgIFxuICAgICAgbGV0IHBhdGggPSB0aGlzLl9nZXRJbWdQYXRoKG1lZGlhKTtcbiAgICAgIGlmKCBwYXRoICkge1xuICAgICAgICBxc28ubWVkaWEgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wrJy8vJyt3aW5kb3cubG9jYXRpb24uaG9zdCt0aGlzLl9nZXRJbWdVcmwocGF0aCk7XG4gICAgICB9XG4gICAgICBxc28uZGVzY3JpcHRpb24gPSBuYW1lO1xuICAgICAgcXNvLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH0gZWxzZSBpZiAoIGlkID09PSAnZmFjZWJvb2snICkge1xuICAgICAgcXNvLnUgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9IGVsc2UgaWYoIGlkID09PSAndHdpdHRlcicgKSB7XG4gICAgICBsZXQgdGV4dCA9IG5hbWUrJyAtICcrd2luZG93LmxvY2F0aW9uLmhyZWYrJyAjVUNEYXZpc0xpYnJhcnkgI0RpZ2l0YWxDb2xsZWN0aW9ucyc7XG4gICAgICBpZiggdGV4dC5sZW5ndGggPiAyODApIHtcbiAgICAgICAgbGV0IGRpZmYgPSAodGV4dC5sZW5ndGggKyAzKSAtIDI4MDtcbiAgICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDAsIG5hbWUubGVuZ3RoLWRpZmYpKycuLi4nO1xuICAgICAgICB0ZXh0ID0gbmFtZSsnIC0gJyt3aW5kb3cubG9jYXRpb24uaHJlZisnICNVQ0RhdmlzTGlicmFyeSAjRGlnaXRhbENvbGxlY3Rpb25zJztcbiAgICAgIH1cblxuICAgICAgcXNvLnRleHQgPSB0ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gc29jaWFsIG1lZGlhIHR5cGU6ICcraWQpO1xuICAgIH1cblxuICAgIHVybCArPSB0aGlzLl9jcmVhdGVRcyhxc28pO1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycsICdoZWlnaHQ9NDAwLHdpZHRoPTUwMCcpO1xuICB9XG5cbiAgX2NyZWF0ZVFzKHFzbykge1xuICAgIGxldCBxdWVyeSA9IFtdO1xuICAgIGZvciggbGV0IGtleSBpbiBxc28gKSB7XG4gICAgICBxdWVyeS5wdXNoKGtleSsnPScrZW5jb2RlVVJJQ29tcG9uZW50KHFzb1trZXldKSk7XG4gICAgfVxuICAgIHJldHVybiAnPycrcXVlcnkuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2NvcHlMaW5rXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBjbGljayBldmVudCBvbiBidXR0b24uICBDb3B5IHRleHQgdG8gY2xpcGJvYXJkXG4gICAqIHNob3cgVUkgaW50ZXJhY3Rpb24uXG4gICAqL1xuICBfY29weUxpbmsoKSB7XG4gICAgLy8gdGhpcy4kLmxpbmsuc2VsZWN0KCk7XG4gICAgdGhpcy4kLmxpbmsuZm9jdXMoKTtcbiAgICB0aGlzLiQubGluay5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5KTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIkNvcHlcIik7XG5cbiAgICB0aGlzLiQuY29weUljb24uaWNvbiA9ICdjaGVjayc7XG4gICAgdGhpcy4kLmNvcHlCdXR0b24uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnYWN0aXZlJyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuJC5jb3B5SWNvbi5pY29uID0gJ2NvbnRlbnQtY29weSc7XG4gICAgICB0aGlzLiQuY29weUJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScsICdhY3RpdmUnKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXNoYXJlLWJ0bicsIEFwcFNoYXJlQnRuKTsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC10YWJzLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBUYWJzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvbGUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJ3RhYmxpc3QnLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGUgOiB0cnVlXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWQgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJycsXG4gICAgICAgIG5vdGlmeSA6IHRydWUsXG4gICAgICAgIG9ic2VydmVyIDogJ19yZW5kZXJUYWJzJ1xuICAgICAgfSxcbiAgICAgIHRhYnMgOiB7XG4gICAgICAgIHR5cGUgOiBBcnJheSxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiBbXSxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX3JlbmRlclRhYnMnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3JlbmRlclRhYnNcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvICd0YWJzJyBwcm9wZXJ0eSBvYnNlcnZlclxuICAgKi9cbiAgX3JlbmRlclRhYnMoKSB7XG4gICAgaWYoICF0aGlzLnRhYnMgKSByZXR1cm47XG5cbiAgICBpZiggIXRoaXMuc2VsZWN0ZWQgJiYgdGhpcy50YWJzLmxlbmd0aCApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnRhYnNbMF07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RlZCA9ICh0YWIudmFsdWUgPT09IHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5zZXQoYHRhYnMuJHtpbmRleH0uc2VsZWN0ZWRgLCBzZWxlY3RlZCk7XG4gICAgICB0aGlzLnNldChgdGFicy4ke2luZGV4fS5hcmlhU2VsZWN0ZWRgLCBzZWxlY3RlZCsnJyk7XG4gICAgICBpZiggIXRhYi5sYWJlbCApIHRoaXMuc2V0KGB0YWJzLiR7aW5kZXh9LmxhYmVsYCwgdGFiLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vblRhYkNsaWNrZWQoZSkge1xuICAgIGlmKCBlLnR5cGUgPT09ICdrZXl1cCcgJiYgZS53aGljaCAhPT0gMTMgKSByZXR1cm47XG4gICAgdGhpcy5zZWxlY3RlZCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC10YWJzJywgQXBwVGFicyk7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLXZpcnR1YWwtc2Nyb2xsZXIudHBsLmpzXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBWaXJ0dWFsU2Nyb2xsZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1IZWlnaHQgOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgYXR0cmlidXRlOiAnaXRlbS1oZWlnaHQnXG4gICAgICB9LFxuICAgICAgaXRlbXMgOiB7dHlwZTogQXJyYXl9LFxuICAgICAgcmVuZGVyZWRJdGVtcyA6IHt0eXBlOiBBcnJheX1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLml0ZW1IZWlnaHQgPSAyMDtcbiAgICB0aGlzLnJlbmRlcmVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5oZWlnaHQgPSAtMTtcblxuICAgIHRoaXMuX29uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHRoaXMuX29uVmlld3BvcnRVcGRhdGUoKSk7XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5wb3NpdGlvbkVsZSA9IHRoaXMucXVlcnlTZWxlY3RvcignLmFwcC12aXJ0dWFsLXNjcm9sbGVyLXNjcm9sbC1wYW5lbCcpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZSk7XG4gICAgdGhpcy5fY2FjaGVIZWlnaHQoKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uUmVzaXplKTtcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfb25SZXNpemUoZSkge1xuICAgIHRoaXMuX2NhY2hlSGVpZ2h0KHRydWUpO1xuICB9XG5cbiAgX2NhY2hlSGVpZ2h0KGNhbGxWaWV3cG9ydFVwZGF0ZT10cnVlKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLm9mZnNldEhlaWdodDtcbiAgICBpZiggY2FsbFZpZXdwb3J0VXBkYXRlID09PSB0cnVlICkgdGhpcy5fb25WaWV3cG9ydFVwZGF0ZSgpO1xuICB9XG5cbiAgc2V0SXRlbVJlbmRlcmVyKHJlbmRlcmVyLCBzY29wZSkge1xuICAgIHRoaXMucmVuZGVySXRlbSA9IHJlbmRlcmVyO1xuICAgIHRoaXMucmVuZGVySXRlbVNjb3BlID0gc2NvcGUgfHwgdGhpcztcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiggcHJvcHMuaGFzKCdpdGVtcycpICkge1xuICAgICAgdGhpcy5zY3JvbGxUb3AgPSAwO1xuICAgICAgdGhpcy50b3RhbFNjcm9sbEhlaWdodCA9IHRoaXMuaXRlbUhlaWdodCp0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICAgIHRoaXMucG9zaXRpb25FbGUuc3R5bGUuaGVpZ2h0ID0gKHRoaXMuaXRlbUhlaWdodCp0aGlzLml0ZW1zLmxlbmd0aCkrJ3B4JztcbiAgICB9XG4gICAgaWYoIHByb3BzLmhhcygnaXRlbUhlaWdodCcpIHx8IHByb3BzLmhhcygnaXRlbXMnKSApIHtcbiAgICAgIHRoaXMuX29uVmlld3BvcnRVcGRhdGUodHJ1ZSk7XG4gICAgfVxuXG4gIH1cblxuICBfb25WaWV3cG9ydFVwZGF0ZShmb3JjZT1mYWxzZSkge1xuICAgIGlmKCB0aGlzLmhlaWdodCA8PSAwICkgdGhpcy5fY2FjaGVIZWlnaHQoZmFsc2UpO1xuXG4gICAgbGV0IGZpcnN0SXRlbSA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGxUb3AgLyB0aGlzLml0ZW1IZWlnaHQpIC0gMTtcbiAgICBpZiggZmlyc3RJdGVtIDwgMCApIGZpcnN0SXRlbSA9IDA7XG5cbiAgICBsZXQgbGFzdEl0ZW0gPSBmaXJzdEl0ZW0gKyBNYXRoLmNlaWwodGhpcy5oZWlnaHQgLyB0aGlzLml0ZW1IZWlnaHQpICsgMjtcbiAgICBpZiggbGFzdEl0ZW0gPj0gdGhpcy5pdGVtcy5sZW5ndGggKSBsYXN0SXRlbSA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuXG4gICAgaWYoIHRoaXMuZmlyc3RJdGVtID09PSBmaXJzdEl0ZW0gJiYgdGhpcy5sYXN0SXRlbSA9PT0gbGFzdEl0ZW0gJiYgZm9yY2UgPT09IGZhbHNlICkgcmV0dXJuO1xuICAgIFxuICAgIC8vIGNoZWNrIGZvciBpT1Mgb3ZlcnNjcm9sbCBhbmQgaWdub3JlXG4gICAgaWYoIHRoaXMuaXRlbUhlaWdodCAqIChsYXN0SXRlbS0xKSA+IHRoaXMuaGVpZ2h0ICYmXG4gICAgICAgdGhpcy5zY3JvbGxUb3AgKyB0aGlzLmhlaWdodCArIDUgPiB0aGlzLnRvdGFsU2Nyb2xsSGVpZ2h0ICkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ292ZXJmbG93IHByb3RlY3Rpb24hJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZmlyc3RJdGVtID0gZmlyc3RJdGVtO1xuICAgIHRoaXMubGFzdEl0ZW0gPSBsYXN0SXRlbTtcblxuICAgIGxldCBpdGVtcyA9IFtdO1xuICAgIGZvciggbGV0IGkgPSBmaXJzdEl0ZW07IGkgPCBsYXN0SXRlbTsgaSsrICkge1xuICAgICAgaXRlbXMucHVzaCh7aW5kZXg6IGksIHRvcDogdGhpcy5pdGVtSGVpZ2h0Kml9KTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlZEl0ZW1zID0gaXRlbXM7XG5cbiAgICBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLnZzLXJvdycpKVxuICAgICAgLmZvckVhY2goZWxlID0+IGVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hvdmVyJykpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoKSB7XG4gICAgLy8gdXBkYXRlIHRyaWdnZXJlZCBmcm9tIG5lc3RlZCBvYmplY3RcbiAgICBpZiggdGhpcy5yZW5kZXJlZEl0ZW1zLmxlbmd0aCA+IHRoaXMuaXRlbXMubGVuZ3RoICkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2lnbm9yaW5nIG91dCBvZiBkYXRlIHJlbmRlcicpO1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlZEl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgIC8vIGJhZG5lc3NcbiAgICAgIGlmKCBpdGVtLmluZGV4ID49IHRoaXMuaXRlbXMubGVuZ3RoICkge1xuICAgICAgICByZXR1cm4gaHRtbGBgO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidnMtcm93XCJcbiAgICAgICAgICBAbW91c2VvdmVyPVwiJHt0aGlzLl9vblJvd01vdXNlT3Zlcn1cIlxuICAgICAgICAgIEBtb3VzZW91dD1cIiR7dGhpcy5fb25Sb3dNb3VzZU91dH1cIiBcbiAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgcmlnaHQ6IDA7IHRvcDogJHtpdGVtLnRvcH1weDsgaGVpZ2h0OiAke3RoaXMuaXRlbUhlaWdodH1weFwiPlxuICAgICAgICAgICR7dGhpcy5yZW5kZXJJdGVtLmFwcGx5KHRoaXMucmVuZGVySXRlbVNjb3BlLCBbaXRlbS5pbmRleF0pfVxuICAgICAgICA8L2Rpdj5gXG4gICAgICB9KTtcbiAgfVxuXG4gIF9vblJvd01vdXNlT3ZlcihlKSB7XG4gICAgZS5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnaG92ZXInLCAndHJ1ZScpO1xuICB9XG5cbiAgX29uUm93TW91c2VPdXQoZSkge1xuICAgIGUuY3VycmVudFRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2hvdmVyJyk7XG4gIH1cblxuICByZW5kZXJJdGVtKGluZGV4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZCcpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtdmlydHVhbC1zY3JvbGxlcicsIEFwcFZpcnR1YWxTY3JvbGxlcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgYXBwLXZpcnR1YWwtc2Nyb2xsZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG5cbiAgYXBwLXZpcnR1YWwtc2Nyb2xsZXIgLmFwcC12aXJ0dWFsLXNjcm9sbGVyLXNjcm9sbC1wYW5lbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cbiAgfVxuPC9zdHlsZT4gIFxuXG48ZGl2IGNsYXNzPVwiYXBwLXZpcnR1YWwtc2Nyb2xsZXItc2Nyb2xsLXBhbmVsXCI+XG4gICR7dGhpcy5yZW5kZXJJdGVtcygpfVxuPC9kaXY+XG5cbmA7fSIsImNsYXNzIFZpZGVvTGliTG9hZGVyIHtcbiAgYXN5bmMgbG9hZCgpIHtcbiAgICBpZiAoIHRoaXMubG9hZGVkICkgcmV0dXJuIHRoaXMubG9hZGVkO1xuXG4gICAgaWYgKCB0aGlzLmxvYWRpbmcgKSB7XG4gICAgICBhd2FpdCB0aGlzLmxvYWRpbmc7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkaW5nID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcGx5ciA9ICggYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidmlkZW8tbGlic1wiICovICdwbHlyJykgKS5kZWZhdWx0O1xuICAgICAgLy8gY29uc3QgcGx5ciA9ICggYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidmlkZW8tbGlic1wiICovICdwbHlyL3NyYy9qcy9wbHlyJykgKS5kZWZhdWx0O1xuICAgICAgY29uc3Qgc2hha2EgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ2aWRlby1saWJzXCIgKi8gJ3NoYWthLXBsYXllcicpO1xuICAgICAgXG4gICAgICAvLyBJbnN0YWxsIHRoZSBwb2x5ZmlsbHMgYmVmb3JlIGRvaW5nIGFueXRoaW5nIHdpdGggdGhlIGxpYnJhcnlcbiAgICAgIGF3YWl0IHNoYWthLnBvbHlmaWxsLmluc3RhbGxBbGwoKTtcblxuICAgICAgdGhpcy5sb2FkZWQgPSB7cGx5ciwgc2hha2F9O1xuXG4gICAgICByZXNvbHZlKHRoaXMubG9hZGVkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZpZGVvTGliTG9hZGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9