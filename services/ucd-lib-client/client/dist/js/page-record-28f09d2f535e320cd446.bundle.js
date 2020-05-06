(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{133:function(e,t){e.exports=e=>(class extends e{constructor(){super(),this._injectModel("MediaModel")}_getImgPath(e){return this.MediaModel.getImgPath(e)}_getImgUrl(e,t,i){return this.MediaModel.getImgUrl(e,t,i)}_getImageMediaList(e){return this.MediaModel.getImageMediaList(e)}})},144:function(e,t,i){"use strict";var n=i(4),o=i(145),a=i.n(o),r=i(155),s=i.n(r);class l extends n.a{static get template(){let e=document.createElement("template");return e.innerHTML=a.a,e}static get properties(){return{text:{type:String,value:"",observer:"_onTextUpdate"},copying:{type:Boolean,value:!1}}}_onTextUpdate(){this.$.citeText.innerHTML=this.text||"",this.$.copyArea.value=s()(this.text).trim()}_onCopyClicked(){this.$.copyArea.style.height=this.$.citeText.offsetHeight-10+"px",this.$.copyArea.style.width=this.$.citeText.offsetWidth-10+"px",this.copying=!0,this.$.copyArea.focus(),this.$.copyArea.setSelectionRange(0,9999),document.execCommand("Copy"),this.$.icon.icon="check",setTimeout(()=>{this.$.icon.icon="content-copy",this.copying=!1},3e3)}}customElements.define("app-copy-cite",l)},145:function(e,t){e.exports='<style>\n  :host {\n    display: block;\n  }\n  [hidden] {\n    display:none !important;\n  }\n  textarea {\n    width: 100%;\n    font-size: var(--font-size);\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    /* width: 85px; */\n    text-transform: uppercase;\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-heavy);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n  }\n\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  \n  .copyButton[active] span {\n    display: none;\n  }\n\n  #citeText {\n    padding-bottom: 10px;\n    overflow: auto;\n    word-break: break-word;\n  }\n\n  .buttons {\n    display: flex;\n  }\n</style>\n\n<div hidden$="[[copying]]" id="citeText"></div>\n<textarea hidden$="[[!copying]]" id="copyArea"></textarea>\n\n<div class="buttons">\n  <div>\n    <slot></slot>\n  </div>\n  <button active$="[[copying]]" on-click="_onCopyClicked" class="copyButton">\n    <iron-icon icon="content-copy" id="icon"></iron-icon>\n    <span>Copy</span>\n  </button>\n</div>\n'},146:function(e,t,i){"use strict";var n=i(4),o=i(147),a=i.n(o);class r extends n.a{static get template(){let e=document.createElement("template");return e.innerHTML=a.a,e}static get properties(){return{role:{type:String,value:"tablist",reflectToAttribute:!0},selected:{type:String,value:"",notify:!0,observer:"_renderTabs"},tabs:{type:Array,value:()=>[],observer:"_renderTabs"}}}_renderTabs(){this.tabs&&(this.selected||!this.tabs.length?this.tabs.forEach((e,t)=>{let i=e.value===this.selected;this.set(`tabs.${t}.selected`,i),this.set(`tabs.${t}.ariaSelected`,i+""),e.label||this.set(`tabs.${t}.label`,e.value)}):this.selected=this.tabs[0])}_onTabClicked(e){"keyup"===e.type&&13!==e.which||(this.selected=e.currentTarget.getAttribute("value"))}}customElements.define("app-tabs",r)},147:function(e,t){e.exports='<style>\n  :host {\n    display : block;\n  }\n  .layout {\n    display: flex;\n  }\n  .tab {\n    flex: 1;\n    cursor: pointer;\n    text-transform: uppercase;\n    padding: 12px 0 9px 0;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: normal;\n    color: var(--gray-text);\n    border-bottom: 2px solid var(--gray-text);\n  }\n  .tab:focus {\n    border-bottom-color: var(--default-secondary-color);\n    outline: none;\n  }\n  .tab[selected] {\n    cursor: default;\n    font-weight: bold;\n    color: var(--default-primary-color);\n    border-bottom: 4px solid var(--default-primary-color);\n    padding: 12px 0 7px 0;\n  }\n</style>\n\n<div class="layout">\n  <template is="dom-repeat" items="[[tabs]]">\n    <div class="tab" \n      role="tab" \n      tabindex="0" \n      aria-selected$="[[item.ariaSelected]]"\n      selected$="[[item.selected]]"\n      on-click="_onTabClicked" \n      on-keyup="_onTabClicked"\n      value$="[[item.value]]">\n      [[item.label]]\n    </div>\n  </template>\n</div>'},179:function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: block;\n    background-color: var(--super-light-background-color);\n  }\n\n  /*\n  app-media-viewer {\n    position: relative;\n  }\n  */\n\n  .container.top {\n    padding: 20px 0;\n    background-color: var(--light-background-color);\n  }\n\n  input {\n    padding: 0 0 0 5px;\n    display: block;\n    border: none;\n    height: 38px;\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    width: 85px;\n    text-transform: uppercase;\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-heavy);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n  }\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  .copyButton[active] span {\n    display: none;\n  }\n\n  h3 {\n    margin: 0 0 10px 0;\n    color: var(--default-primary-color);\n  }\n\n  .label {\n    font-weight: var(--font-weight-heavy);\n    color: var(--default-primary-color);\n  }\n\n  .section {\n    margin-bottom: 15px;\n  }\n  .section.bordered {\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px dashed var(--medium-background-color);\n  }\n\n  .overview {\n    display: flex; \n    width: 100%;\n  }\n\n  .overview > div {\n    flex : 1;\n    padding : 0 10px;\n  }\n\n  .type-date-collection {\n    display: flex;\n    /* align-items: center; */\n  }\n\n  .resource-type {\n    text-transform: capitalize;\n  }\n  .resource-type iron-icon {\n    color: var(--default-primary-color);\n  }\n\n  paper-toast {\n    --paper-toast-background-color: var(--default-secondary-color);\n    --paper-toast-color: var(--default-primary-color);\n  }\n\n  #descriptionValue p,\n  #descriptionValue h1,\n  #descriptionValue h2,\n  #descriptionValue h3 {\n    margin-top: 0;\n  }\n\n  #link {\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  .metadata-row {\n    display: flex;\n    margin: 30px 20px;\n  }\n  .metadata-row .attr {\n    flex: 0.25;\n    color: var(--default-primary-color);\n    font-weight: var(--font-weight-heavy); \n  }\n  .metadata-row .value {\n    flex: 0.75;\n    word-break: break-word;\n  }\n\n  .cite-container {\n    padding: 15px 0;\n    margin: 0 15px;\n    border-bottom: 1px dashed var(--medium-background-color);\n    display: flex;\n  }\n  .cite-container .label {\n    padding-right: 10px;\n    flex: 0.25;\n    color: var(--default-primary-color);\n    font-weight: var(--font-weight-heavy); \n  }\n  .cite-container .text {\n    flex: 0.75;\n  }\n\n  .hidden {\n    display: none !important;\n  }\n\n  .fc-break {\n    height: 10px;\n  }\n\n  img[rights] {\n    height: 22px;\n    width: 22px;\n    vertical-align: sub;\n  }\n\n  @media( max-width: 550px ) {\n    .metadata-row {\n      display: block;\n    }\n  }\n\n  @media( max-width: 768px ) {\n    .overview {\n      display: block;\n    }\n    .cite-container {\n      display: block;\n      padding: 15px 0 15px 15px;\n      margin: 0;\n    }\n    .type-date-collection {\n      display: block;\n    }\n    .type-date-collection > div {\n      margin: 15px 5px;\n    }\n  }\n</style>\n\n<app-media-viewer></app-media-viewer>\n\n<div class="container top">\n  <div class="overview">\n    <div>\n      <h3>[[name]]</h3>\n      \n      <div hidden$="[[!alternativeHeadline]]" class="section">\n        <div style="font-weight: bold;">[[alternativeHeadline]]</div>\n      </div>\n\n      <div class="section type-date-collection">\n        \x3c!-- \n          /** \n            TODO: add back in when we figure out consolidated resource type \n          **/\n          \n          <div style="flex:.75">\n            <div class="label">Resource Type</div>\n            <div class="resource-type">\n              <iron-icon icon="fin-icons:[[resourceType]]"></iron-icon>\n              <div id="resourceType"></div>\n            </div>\n          </div>\n        --\x3e\n\n         <div style="flex:.5;padding-right:30px" hidden$="[[!date]]">\n           <div class="label">Date</div>\n           <div>[[date]]</div>\n         </div>\n         <div >\n           <div class="label">Collection</div>\n           <div>[[collectionName]]</div>\n         </div>\n       </div>\n    </div>\n    <div>\n      <div style="display: flex; align-items: center" class="section bordered">\n        <span class="label" style="padding-right: 10px; display:inline-block">Permalink</span>\n        <div style="flex:1">\n          <input id="link" type="text" />\n        </div>\n        <button on-click="_copyLink" id="copyButton" class="copyButton">\n          <iron-icon icon="content-copy" id="copyIcon"></iron-icon>\n          <span>Copy</span>\n        </button>\n      </div>\n\n      <div class="section bordered">\n        <div class="label">Download Options</div>\n        <app-media-download id="download" hidden$="[[isBagOfFiles]]"></app-media-download>\n        <app-fs-media-download id="download" hidden$="[[!isBagOfFiles]]"></app-fs-media-download>\n      </div>\n\n      \x3c!--\n        <div class="section bordered">\n          <div class="label">Download Image Bundle</div>\n\n          <form action$="/api/tar/[[tarName]]" method="POST" target="_blank">\n            <input type="text" hidden name="paths" id="tarPaths" style="display:none">\n            <input type="submit" value="Download Tar">\n          </form>\n        </div>\n      --\x3e\n\n      <div hidden$="[[!rights]]">\n        <a href$="[[rights.link]]" target="_block">\n          <img src$="[[rights.icon]]" rights />\n          <span>[[rights.label]]</span>\n        </a>\n      </div>\n\n    </div>\n  </div>\x3c!-- end overview --\x3e\n</div>\n\n<div class="container" style="padding-bottom: 50px">\n  <app-record-metadata-layout>\n    <div slot="left">\n      <div class="metadata-row">\n          <div class="attr">Collection</div>\n          <div class="value" id="collectionValue"></div>\n        </div>\n\n      <div class="metadata-row" id="description">\n        <div class="attr">Description</div>\n        <div class="value" id="descriptionValue"></div>\n      </div>\n\n      <div class="metadata-row" id="identifier">\n        <div class="attr">ARK / DOI</div>\n        <div class="value" id="identifierValue"></div>\n      </div>\n\n      <div class="metadata-row" id="creator">\n        <div class="attr">Creator</div>\n        <div class="value" id="creatorValue"></div>\n      </div>\n\n      <div class="metadata-row" id="publisher">\n        <div class="attr">Publisher</div>\n        <div class="value" id="publisherValue"></div>\n      </div>\n\n      <div class="metadata-row" id="subject">\n        <div class="attr">Subject</div>\n        <div class="value" id="subjectValue"></div>\n      </div>\n\n      <div class="metadata-row">\n        <div class="attr">Fedora Link</div>\n        <div class="value" id="fedoraValue"></div>\n      </div>\n    </div>\n    \n    <div slot="right">\n      <div class="cite-container">\n        <div class="label">MLA</div>\n        <div class="text">\n          <app-copy-cite id="mla"></app-copy-cite>\n        </div>\n      </div>\n\n      <div class="cite-container">\n        <div class="label">APA</div>\n        <div class="text">\n          <app-copy-cite id="apa"></app-copy-cite>\n        </div>\n      </div>\n\n      <div class="cite-container">\n        <div class="label">Chicago</div>\n        <div class="text">\n          <app-copy-cite id="chicago"></app-copy-cite>\n        </div>\n      </div>\n      \n    </div>\n  </app-record-metadata-layout>\n</div>'},180:function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: block;\n  }\n\n  .info {\n    margin: 10px 0;\n    font-size: var(--font-size-sm);\n  }\n  \n  a {\n    display: block;\n    padding: 8px;\n    color : var(--default-primary-color);\n    background-color : var(--default-secondary-color);\n    text-transform: uppercase;\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-heavy);\n    text-decoration: none;\n    white-space: nowrap;\n    height: 24px;\n  }\n  \n  select {\n    margin-right: 15px;\n    padding: 5px 40px 5px 10px;\n    height: 40px;\n    border: none;\n    border-radius: 0;\n   \n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n\n    background-position: right 10px center;\n    background-size: 10px 6px;\n    background-repeat: no-repeat;\n    background-image: url(\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCA2IiB3aWR0aD0iMTBweCIgaGVpZ2h0PSI2cHgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMDAyNjU1O308L3N0eWxlPjwvZGVmcz48Zz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMCAwIDEwIDAgNSA2IDAgMCIvPjwvZz48L3N2Zz4=\');\n    /* TODO: Seems to cause problem w/width of select box being too small\n    @apply --fin-search-box-select-inverse;\n    */\n    background-color: var(--medium-background-color); \n    color: var(--default-primary-color);\n  }\n\n  select.plainText {\n    padding: 0;\n    border: 0;\n    background: transparent;\n    color: black;\n  }\n\n  button {\n    white-space: nowrap;\n    text-transform: uppercase;\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-heavy);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n    padding: 8px;\n    line-height: calc(var(--font-size) * 1.625);\n  }\n  \n  /* for IE */\n  select::-ms-expand {\n    display: none;\n  }\n  select option {\n    text-transform: uppercase;\n  }\n\n  .layout {\n    display:flex; \n    align-items: center;\n  }\n\n  .layout.btns > * {\n    width: 33%\n  }\n\n  .radio {\n    margin-bottom: 10px;\n  }\n</style>\n\n\n<div id="wrapper">\n  <div class="layout" hidden$="[[!hasMultipleDownloadMedia]]">\n    <div class="radio" style="margin-right: 40px">\n      <input id="single" type="radio" name="set-size" checked on-click="_toggleMultipleDownload" /> \n      <label for="single">Single</label>\n    </div>\n    <div class="radio">\n      <input id="fullset" type="radio" name="set-size" on-click="_toggleMultipleDownload"/> \n      <label for="fullset">Full Set ([[fullSetCount]] files)</label>\n    </div>\n  </div>\n</div>\n\n<div hidden$="[[fullSetSelected]]">\n  <div class="layout btns" style="margin-bottom: 5px;" hidden$="[[!selectedMediaHasSources]]">\n    <select id="downloadOptions" on-change="_onChangeDownloadOptions" ></select>\n    <select id="format" on-change="_onFormatSelected" hidden$="[[!showImageFormats]]"></select>\n    <a id="downloadBtn" href="[[href]]" \n      on-click="_onDownloadClicked" \n      download \n      target="_blank" \n      rel="noopener" \n      style="white-space: nowrap; text-align: center;">\n        <span>\n          Download\n        </span>\n    </a>\n  </div>\n</div>\n\n<div hidden$="[[fullSetSelected]]">\n  <div hidden$="[[selectedMediaHasSources]]" >\n    <em>No downloadable items available</em>\n  </div>\n</div>\n\n\n<form id="downloadZip" \naction$="/api/zip/[[zipName]]" \nmethod="POST" \ntarget="_blank" \nhidden$="[[!fullSetSelected]]">    \n  <input type="text" hidden name="paths" id="zipPaths" style="display: none;">\n  <button on-click="_onDownloadFullSetClicked">\n    <iron-icon icon="file-download"></iron-icon>&nbsp;<span>Download Archive</span>\n  </button>\n</form>'},182:function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: block;\n  }\n\n  .layout {\n    display: flex;\n  }\n  .layout > * {\n    flex : 1;\n  }\n\n  h2 {\n    border-bottom: 1px solid var(--medium-background-color);\n    color: var(--default-primary-color);\n    padding-bottom: 10px;\n    padding-left: 5px;\n  }\n</style>\n\n<iron-media-query query="(max-width: 900px)" query-matches="{{mobile}}"></iron-media-query>\n\n<app-tabs \n  tabs="[[tabs]]" \n  selected="{{selectedTab}}" \n  hidden$="[[!mobile]]">\n</app-tabs>\n\n<div class="layout">\n  <div hidden$="[[!showLeft]]">\n    <h2>Item Data</h2>\n    <slot name="left"></slot>\n  </div>\n  <div hidden$="[[!showRight]]" style="max-width: 100vw;">\n    <h2>Cite this Item</h2>\n    <slot name="right"></slot>\n  </div>\n</div>'},184:function(e,t){e.exports='<style>\n  :host {\n    display: block;\n    background: black;\n    padding: 20px 0;\n    /* position: relative; */\n    box-sizing: border-box;\n  }\n\n  paper-spinner-lite {\n    --paper-spinner-color: var(--default-secondary-color);\n  }\n\n  #loading {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  img {\n    width: 100%;\n  }\n\n  .layout {\n    text-align: center;\n  }\n\n  [hidden] {\n    display: none !important;\n  }\n</style>\n\n<div id="loading" hidden$="[[!loading]]">\n  <paper-spinner-lite active$="[[loading]]"></paper-spinner-lite>\n</div>\n\n<div class="layout" hidden$="[[loading]]" style="line-height: 0">\n  <img id="img" />\n</div>'},188:function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: block;\n    background-color: var(--default-primary-color);\n  }\n\n  :host([single-image]) {\n    background-color: transparent;\n    padding: 0 8px 8px 8px;\n  }\n\n  :host([single-image]) paper-icon-button,\n  :host([single-image]) app-share-btn,\n  :host app-share-btn,\n  :host paper-icon-button {\n    background-color: var(--default-primary-color);\n  }\n\n\n  .layout {\n    display: flex;\n    align-items: center;\n  }\n\n  #thumbnailInnerContainer {\n    padding-top: 7px;\n  }\n\n \n  #thumbnails {\n    /* (50px width + 10px margin + 4px border) * 8 thumbnails */\n    max-width: 512px;\n  }\n\n\n  #thumbnails {\n    overflow: hidden;\n  }\n\n  #thumbnails > div {\n    white-space: nowrap;\n    margin-left: 0;\n    will-change: margin-left;\n    transition: margin-left 250ms ease-out;\n  }\n\n  .thumbnail {\n    margin: 0 5px 5px 6px;\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n    color: white;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-color: black;    \n    border: 2px solid transparent;\n  }\n\n  .thumbnail:active {\n    border: 1px solid var(--default-secondary-color);\n  }\n\n  .thumbnail:focus {\n    outline: var(--default-outline);\n  }\n  \n  .thumbnail[selected] {\n    border: 2px solid var(--default-secondary-color);\n  }\n\n  iron-icon {\n    shape-rendering: geometricPrecision !important;\n    width: 28px !important;\n    height: 28px !important;\n  }\n\n  paper-icon-button {\n    color: var(--default-secondary-color);\n    min-width: 40px;\n  }\n\n  paper-icon-button:focus {\n    border-radius: 0 !important;\n  }\n\n  paper-icon-button[disabled] {\n    color: var(--gray-text);\n    min-width: 40px;\n  }\n\n  paper-icon-button[invisible] {\n    visibility: hidden;\n  }\n\n  .zoom-btns[pad] {\n    margin-right: 30px;\n  }\n</style>\n\n\n<div class="layout">\n\n  <div id="navLeft" hidden$="[[singleImage]]">\n    <paper-icon-button noink \n      tabindex="0" \n      icon="chevron-left" \n      alt="Page thumbnails left"\n      disabled$="[[!showNavLeft]]"\n      invisible$="[[!showNavLeft]]"\n      on-click="_pageLeft">\n    </paper-icon-button>\n  </div>\n\n  <div id="thumbnails" hidden$="[[singleImage]]">\n    <div id="thumbnailInnerContainer">\n      <template is="dom-repeat" items="[[thumbnails]]">\n        <button \n          class="thumbnail"\n          alt$="Page #[[item.position]]"\n          title$="[[item.id]]"\n          media-id$="[[item.id]]"\n          disabled$="[[item.disabled]]"\n          selected$="[[item.selected]]" \n          style$="background-image:url([[item.src]])"\n          on-click="_onThumbnailClicked">\n            <iron-icon icon="fin-icons:[[item.icon]]"></iron-icon>\n        </button>\n      </template>\n    </div>\n  </div>\n\n  <div id="navRight" hidden$="[[singleImage]]">\n    <paper-icon-button noink \n      tabindex="0" \n      icon="chevron-right" \n      alt="Page thumbnails right"\n      disabled$="[[!showNavRight]]"\n      invisible$="[[!showNavRight]]"\n      on-click="_pageRight">\n    </paper-icon-button>\n  </div>\n\n  <div style="flex:1"></div>\n  \n  <div id="buttonWrapper" hidden$="[[breakControls]]" style="white-space: nowrap">\n    <paper-icon-button id="zoomOut1" noink tabindex="0" icon="zoom-out" hidden$="[[!isLightbox]]" on-click="_onZoomOutClicked"></paper-icon-button>\n    <paper-icon-button noink icon="zoom-in" tabindex="0" hidden$="[[!isLightbox]]" on-click="_onZoomInClicked"></paper-icon-button>\n    \n    <app-share-btn id="shareBtn" role="button"></app-share-btn>\n\n    <span hidden$="[[!showOpenLightbox]]" class="zoom-btns" pad$="[[!showOpenLightbox]]">\n      <paper-icon-button noink icon="zoom-in" tabindex="0" hidden$="[[isLightbox]]" on-click="_onZoomInClicked"></paper-icon-button>\n      <paper-icon-button noink icon="fin-icons:close" tabindex="0" hidden$="[[!isLightbox]]" on-click="_onCloseClicked"></paper-icon-button>\n    </span>\n  </div>\n</div>\n\n<div hidden$="[[!breakControls]]" style="text-align: right">\n  <paper-icon-button id="zoomOut2" noink tabindex="0" icon="zoom-out" hidden$="[[!isLightbox]]" on-click="_onZoomOutClicked"></paper-icon-button>\n  <paper-icon-button noink icon="zoom-in" tabindex="0" hidden$="[[!isLightbox]]" on-click="_onZoomInClicked"></paper-icon-button>\n  \n  <app-share-btn></app-share-btn>\n  \n  <span hidden$="[[!showOpenLightbox]]" class="zoom-btns">\n    <paper-icon-button noink icon="zoom-in" tabindex="0" hidden$="[[isLightbox]]" on-click="_onZoomInClicked"></paper-icon-button>\n    <paper-icon-button noink icon="fin-icons:close" tabindex="0" hidden$="[[!isLightbox]]" on-click="_onCloseClicked"></paper-icon-button>\n  </span>\n</div>\n'},189:function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: inline-block;\n    position: relative;\n  }\n\n  #popup {\n    display: none;\n    z-index: 5;\n    background: white;\n    padding: 10px;\n    position: absolute;\n    bottom: 70px;\n    right: -20px;\n    min-width: 200px;\n  }\n\n  .layout {\n    display: flex;\n    margin-bottom: 5px;\n    justify-content: center;\n  }\n\n  input {\n    font-size: var(--font-size);\n    padding: 0 0 0 5px;\n    display: block;\n    border: none;\n    height: 38px;\n    outline: none;\n  }\n\n  #link {\n    width: 100%;\n    border-top: 1px solid var(--medium-background-color);\n    border-left: 1px solid var(--medium-background-color);\n    border-bottom: 1px solid var(--medium-background-color);\n    box-sizing: border-box;\n  }\n\n  .social {\n    margin: 8px;\n    display: inline-block;\n    cursor: pointer;\n    height: 40px;\n    width: 40px;\n    border: 2px solid transparent;\n    outline: none;\n  }\n  .social:focus {\n    border: var(--default-outline);\n    border-radius: 20px;\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    text-transform: uppercase;\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-heavy);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n    padding: 0 5px;\n  }\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  .copyButton[active] span {\n    display: none;\n  }\n\n  #main {\n    color: var(--default-secondary-color);\n  }\n\n  .arrow-down {\n    position: absolute;\n    width: 0; \n    height: 0; \n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n    border-top: 20px solid white;\n    bottom: -20px;\n    right: 20px;\n  }\n\n  paper-icon-button:focus {\n    border-radius: 0 !important;\n  }\n</style>\n\n<div id="popup">\n  <div class="layout">\n    <img id="facebook" \n      role="button" \n      tabindex="0" \n      src="/images/social-icons/icon-facebook.svg" \n      class="social" \n      on-click="_onSocialIconClick"\n      on-keyup="_onSocialIconClick" />\n    <img id="twitter" \n      role="button" \n      tabindex="0" \n      src="/images/social-icons/icon-twitter.svg" \n      class="social" \n      on-click="_onSocialIconClick"\n      on-keyup="_onSocialIconClick" />\n    <img id="pinterest" \n      role="button" \n      tabindex="0" \n      src="/images/social-icons/icon-pinterest.svg" \n      class="social" \n      on-click="_onSocialIconClick"\n      on-keyup="_onSocialIconClick" />\n  </div>\n  <div>\n    <div style="display: flex; align-items: center" class="section bordered">\n      <div style="flex:1">\n        <input id="link" type="text" />\n      </div>\n      <button on-click="_copyLink" id="copyButton" class="copyButton">\n        <iron-icon icon="content-copy" id="copyIcon"></iron-icon>\n      </button>\n    </div>\n  </div>\n  <div class="arrow-down"></div>\n</div>\n\n<paper-icon-button \n  id="main" \n  noink \n  icon="social:share" \n\n  on-click="_onBtnClicked">\n</paper-icon-button>\n\n'},190:function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: none;\n    position: absolute;\n    z-index: 1000;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    background-color: black;    \n    animation: show 350ms ease-out;\n  }\n\n  :host #nav.single {\n    padding: 10px;\n    background-color: transparent;\n  }\n\n  @keyframes show {\n    from {\n      /* top: -100vh; */\n      opacity: 0.5;\n      transform: scale(1.3);\n    }\n    to {\n      /* top: 0; */\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  #viewer { \n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: black;\n  }\n\n  paper-spinner-lite {\n    --paper-spinner-color: var(--default-secondary-color);\n  }\n  \n  .spinner-layout {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  #nav {\n    z-index: 2000;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n</style>\n\n\x3c!-- make sure background is blacked out... iOS hack --\x3e\n<div id="safeCover" style="display:none;position:absolute;z-index:999;top:0;left:0;width:100vw;height:100vh;background-color:black;"></div>\n\n<div id="viewer" hidden$="[[loading]]"></div>\n<div class="spinner-layout" hidden$="[[!loading]]">\n  <paper-spinner-lite active$="[[loading]]"></paper-spinner-lite>\n</div>\n\n<app-media-viewer-nav \n  id="nav"\n  is-lightbox\n  on-zoom-in="_onZoomInClicked"\n  on-zoom-out="_onZoomOutClicked"\n  on-close="_onCloseClicked">\n</app-media-viewer-nav>'},209:function(e,t,i){"use strict";i.r(t);var n=i(4),o=i(154),a=i(179),r=i.n(a),s=i(80),l=i(75),d=i(51),c=i.n(d),h=i(180),p=i.n(h),u=i(32),m=i.n(u),g=i(133),v=i.n(g),b=i(20),y=i.n(b),f=i(156),w=i.n(f);class x extends(Mixin(n.a).with(EventInterface,m.a,v.a)){static get template(){let e=document.createElement("template");return e.innerHTML=p.a,e}static get properties(){return{defaultImage:{type:Boolean,value:!0},formats:{type:Array,value:()=>[]},href:{type:String,value:""},imageSizes:{type:Array,value:()=>[]},hasMultipleDownloadMedia:{type:Boolean,value:!1},selectedMediaHasSources:{type:Boolean,value:!1},fullSetCount:{type:Boolean,value:0},fullSetSelected:{type:Boolean,value:!1},downloadOptions:{type:Array,value:()=>[]},showImageFormats:{type:Boolean,value:!1}}}constructor(){super(),this.active=!0,this._injectModel("AppStateModel","MediaModel")}async ready(){super.ready();let e=await this.AppStateModel.getSelectedRecord();if(e){this._onSelectedRecordUpdate(e);let t=await this.AppStateModel.getSelectedRecordMedia();t&&this._onSelectedRecordMediaUpdate(t)}}_onSelectedRecordUpdate(e){if(this.rootRecord=e,!e)return;let t=0;for(let i in e.media){for(let n of e.media[i])if("imageList"===i?e.media.imageList.forEach(e=>{t+=e.hasPart.length}):t+=this._getDownloadSources(n,!0).length,t>1)break;if(t>1)break}this.hasMultipleDownloadMedia=t>1,this.hasMultipleDownloadMedia&&(this.$.single.checked=!0,this.$.fullset.checked=!1),this.fullSetSelected=!1}_onSelectedRecordMediaUpdate(e){this.showImageFormats=!1,this.fullSetSelected=!1;let t=this._getDownloadSources(e);0!==t.length?(this.selectedMediaHasSources=!0,this.fullSetCount=this._getAllNativeDownloadSources().length,this.allSources=t,this.downloadOptions=t,this.$.downloadOptions.innerHTML=t.map((e,t)=>`<option value="${t}" ${0===t?"selected":""}>${e.label}</option>`).join(),this.$.downloadOptions.value="0",this._setDownloadHref(t[0])):this.selectedMediaHasSources=!1}_getDownloadSources(e,t=!1){let i=[];return e?(e.clientMediaDownload&&(Array.isArray(e.clientMediaDownload)?e.clientMediaDownload.length&&(e=e.clientMediaDownload[0]):e=e.clientMediaDownload),"VideoObject"===c.a.getMediaType(e)?i=i.concat(this._getVideoSources(e)):"AudioObject"===c.a.getMediaType(e)?i=i.concat(this._getAudioSources(e)):"ImageObject"===c.a.getMediaType(e)?(this.showImageFormats=!0,i=i.concat(this._getImageSources(e,t)),this._renderImgFormats(e,null,"FR")):"ImageList"===c.a.getMediaType(e)&&(e.hasPart||[]).forEach(e=>{i=i.concat(this._getImageSources(e,t))}),i):i}_setDownloadHref(e){let t=e.src;if("image"===e.type){let i=this.$.format.value;e.originalFormat===i&&"FR"===e.imageType||(t+=e.service+i)}this.sourceType=e.type,this.href=t}_getImageSources(e,t=!1){let i=this._getImageFormat(e);if(t)return[{record:e,type:"image",src:y.a.fcrepoBasePath+e["@id"],originalFormat:i,filename:e.filename||e.name,label:e.filename||e.name}];let n=[];for(let t of y.a.imageDownload.sizes){let o=Math.floor(e.image.width*t.ratio),a=Math.floor(e.image.height*t.ratio),r=o+","+a;n.push({record:e,type:"image",src:y.a.fcrepoBasePath+e["@id"],service:`/svc:iiif/full/${r}/0/default.`,originalFormat:i,imageType:t.imageType,filename:e.filename||e["@id"].split("/").pop(),label:t.label+" "+o+" x "+a+" px",width:o,height:a})}return n}_getAudioSources(e){return[{record:e,src:y.a.fcrepoBasePath+e["@id"],type:"audio",filename:e.filename||e["@id"].split("/").pop(),label:this._getTypeLabel(e)+(e.fileSize?" ("+w()(e.fileSize)+") ":"")}]}_getVideoSources(e){let t=[{record:e,type:"video",src:y.a.fcrepoBasePath+e["@id"],filename:e.filename||e["@id"].split("/").pop(),label:this._getTypeLabel(e)+(e.fileSize?" ("+w()(e.fileSize)+") ":"")}],i=e.transcript||[];return Array.isArray(i)||(i=[i]),i.filter(e=>!0!==e.error).forEach(e=>{t.push({record:e,src:y.a.fcrepoBasePath+e["@id"],type:"transcript",filename:e.filename||e["@id"].split("/").pop(),label:this._getTypeLabel(e)+" (video transcript only)"})}),t}_getTypeLabel(e){let t=e.encodingFormat||e.fileFormat;return t?t.split("/").pop():e["@id"].split("/").pop().split(".").pop()}_onChangeDownloadOptions(e){let t=this.downloadOptions[parseInt(e.currentTarget.value)];"image"===t.type&&this._renderImgFormats(t.record,this.$.format.value,t.imageType),this._setDownloadHref(t)}_renderImgFormats(e,t,i){let n=this._getImageFormat(e);t||(t=n);let o=y.a.imageDownload.formats.slice(0);-1===o.indexOf(n)&&"FR"===i&&o.push(n),this.formats=o,this.$.format.innerHTML="",this.formats.forEach(e=>{let o=document.createElement("option");o.innerHTML=e+(e===n&&"FR"===i?" (native)":""),o.value=e,e===t&&o.setAttribute("selected","selected"),this.$.format.appendChild(o)})}_getImageFormat(e){let t=(e.fileFormat||e["@id"].split(".").pop()||"").replace(/.*\//,"").toLowerCase();return"jpeg"===t&&(t="jpg"),t}_onFormatSelected(){let e=this.$.format.value.replace(/ .*/,""),t=this.downloadOptions[parseInt(this.$.downloadOptions.value)];this._renderImgFormats(t.record,e,t.imageType),this._setDownloadHref(t)}_toggleMultipleDownload(){this.fullSetSelected=!!this.$.fullset.checked,this._setZipPaths()}_setZipPaths(){let e={};this.zipName=this.rootRecord.name.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase();let t=this._getAllNativeDownloadSources();for(let i of t)e[i.filename]=i.src;this.$.zipPaths.value=JSON.stringify(e)}_getAllNativeDownloadSources(){let e=[];for(let t in this.rootRecord.media)for(let i of this.rootRecord.media[t])e=e.concat(this._getDownloadSources(i,!0));return e}_onDownloadFullSetClicked(){this.$.downloadZip.submit();let e=this.rootRecord["@id"].replace(y.a.fcrepoBasePath,"");gtag("event","download",{event_category:"fullset",event_label:e,value:1})}_onDownloadClicked(){let e=this.href.replace(y.a.fcrepoBasePath,"");gtag("event","download",{event_category:this.sourceType,event_label:e,value:1})}}customElements.define("app-media-download",x);var k=i(130);function _(){return k.b`

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
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-heavy);
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

`}function M(){return k.b`

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
    font-size: var(--font-size);
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
            <iron-icon icon="${"search"===this.mode?"close":"fin-icons:search"}" @click="${this._onClearSearchClicked}"></iron-icon>
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

`}function $(){return k.b`

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

`}class S extends k.a{static get properties(){return{itemHeight:{type:Number,attribute:"item-height"},items:{type:Array},renderedItems:{type:Array}}}constructor(){super(),this.render=$.bind(this),this.itemHeight=20,this.renderedItems=[],this.items=[],this.height=-1,this._onResize=this._onResize.bind(this),this.addEventListener("scroll",()=>this._onViewportUpdate())}firstUpdated(){this.positionEle=this.querySelector(".app-virtual-scroller-scroll-panel")}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._onResize),this._cacheHeight()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}createRenderRoot(){return this}_onResize(e){this._cacheHeight(!0)}_cacheHeight(e=!0){this.height=this.offsetHeight,!0===e&&this._onViewportUpdate()}setItemRenderer(e,t){this.renderItem=e,this.renderItemScope=t||this}updated(e){e.has("items")&&(this.scrollTop=0,this.totalScrollHeight=this.itemHeight*this.items.length,this.positionEle.style.height=this.itemHeight*this.items.length+"px"),(e.has("itemHeight")||e.has("items"))&&this._onViewportUpdate(!0)}_onViewportUpdate(e=!1){this.height<=0&&this._cacheHeight(!1);let t=Math.floor(this.scrollTop/this.itemHeight)-1;t<0&&(t=0);let i=t+Math.ceil(this.height/this.itemHeight)+2;if(i>=this.items.length&&(i=this.items.length),this.firstItem===t&&this.lastItem===i&&!1===e)return;if(this.itemHeight*(i-1)>this.height&&this.scrollTop+this.height+5>this.totalScrollHeight)return;this.firstItem=t,this.lastItem=i;let n=[];for(let e=t;e<i;e++)n.push({index:e,top:this.itemHeight*e});this.renderedItems=n,Array.from(this.querySelectorAll(".vs-row")).forEach(e=>e.removeAttribute("hover"))}renderItems(){return this.renderedItems.length>this.items.length?k.b``:this.renderedItems.map(e=>e.index>=this.items.length?k.b``:k.b`
        <div
          class="vs-row"
          @mouseover="${this._onRowMouseOver}"
          @mouseout="${this._onRowMouseOut}" 
          style="position: absolute; left: 0; right: 0; top: ${e.top}px; height: ${this.itemHeight}px">
          ${this.renderItem.apply(this.renderItemScope,[e.index])}
        </div>`)}_onRowMouseOver(e){e.currentTarget.setAttribute("hover","true")}_onRowMouseOut(e){e.currentTarget.removeAttribute("hover")}renderItem(e){throw new Error("You must override this method")}}customElements.define("app-virtual-scroller",S);i(181),i(79);const T={folder:["folder"],"fin-icons:image-solid":["tif","tiff","gif","jpg","jp2","jpeg","webp","bmp","png"],"fin-icons:video-solid":["avi","mp4","flv","wmv","mov"],"fin-icons:sound-solid":["wav","mp3","mid","aif"],"fin-icons:text-solid":["doc","docx","txt","rtf",".odt"],"fin-icons:spreadsheet-solid":["ods","csv","tsv","xsl","xslx"],"fin-icons:pdf-solid":["pdf"],"fin-icons:compressed-solid":["zip","rar","arj","gz","tgz"]},R="fin-icons:file-solid";class I extends(Mixin(k.a).with(LitCorkUtils)){static get properties(){return{title:{type:String},loadingFiles:{type:Boolean},loadingSearch:{type:Boolean},currentDir:{type:String},files:{type:Array},selectedFile:{type:String},mode:{type:String},thumbnail:{type:String},lineHeight:{type:Number}}}constructor(){super(),this.render=M.bind(this),this.reset(),this._injectModel("AppStateModel","RecordModel"),this.iconMap={};for(let e in T)for(let t of T[e])this.iconMap[t]=e;window.addEventListener("resize",()=>this._onResize())}firstUpdated(){this.contentBody=this.shadowRoot.querySelector(".content-body"),this.scrollPanel=this.shadowRoot.querySelector("app-virtual-scroller"),this.scrollPanel.setItemRenderer(this.renderRow,this),this.parentNode.removeChild(this),document.body.appendChild(this),this.filenameWidth="30px"}updated(e){if(e.has("selectedFile")){for(let e of this.files)e.selected=e.fullUrl===this.selectedFile;this.scrollPanel.requestUpdate()}}_onResize(){if(!this.contentBody)return;window.innerWidth>700?this.scrollPanel.style.height=window.innerHeight-335-100+"px":this.scrollPanel.style.height=window.innerHeight-335+"px",this.filenameWidth=this.scrollPanel.offsetWidth-155+"px",this.scrollPanel.requestUpdate()}_onAppStateUpdate(e){if(this.selectedRecord!==e.selectedRecord){if(!e.selectedRecord)return this.reset();this.reset(),this.selectedRecord=e.selectedRecord,this.selectedRecordMedia=e.selectedRecordMedia,this.selectedRecord&&this.selectedRecord["@type"].includes("http://digital.ucdavis.edu/schema#bagOfFiles")&&(this._browseDirectory(),this.title=this.selectedRecord.name||this.selectedRecord.title,this.thumbnail=this.selectedRecord.thumbnailUrl||"")}}async show(){this.style.display="block",document.body.style.overflow="hidden",window.scrollTo(0,0),this._onResize(),this._onAppStateUpdate(await this.AppStateModel.get()),setTimeout(()=>{this._onResize(),this.scrollPanel._onResize()},50)}hide(){this.style.display="none",document.body.style.overflow="auto"}reset(){this.selectedRecord=null,this.loadingFiles=!1,this.loadingSearch=!1,this.currentDir="/",this.files=[],this.lineHeight=41,this.selectedFile=""}_renderBreadcrumbs(){if("search"===this.mode)return k.b`<iron-icon icon="chevron-right"></iron-icon>
      <span class="breadcrumb">Search Results</span>`;let e=[];return this.currentDir.replace(/^\//,"").split("/").map(t=>(e.push(t),""===t?k.b``:k.b`<iron-icon icon="chevron-right"></iron-icon>
        <a class="breadcrumb" @click="${this._onBreadcrumbClicked}" dir="${"/"+e.join("/")}">${t}</a>`))}renderRow(e){let t=this.files[e],i=this._getIcon(t);return k.b`
      <div class="row" style="height: ${this.lineHeight-1}px" ?directory="${t.isDirectory}" ?selected="${t.selected}" index="${e}" @click="${this._onItemClicked}" .context="${this}">
        <div>
          <div class="icon">
            <iron-icon icon="${i}"></iron-icon>
          </div>
          <div class="file" style="width: ${this.filenameWidth}">
            <div class="filename">${t.filename}</div>
            <div class="directory" ?hidden="${"browse"===this.mode}">${t.directory||"/"}</div>
          </div>
          <div class="filesize">${void 0!==t.fileSize?w()(t.fileSize):"-"}</div>
          <div class="selected-file">
            <iron-icon icon="check" ?hidden="${!t.selected}"></iron-icon>
          </div>
        </div>
      </div>
    `}_getIcon(e){let t=e.isDirectory?"folder":(e.filename||"").split(".").pop(),i=this.iconMap[t];return i||R}_onItemClicked(e){let t=parseInt(e.currentTarget.getAttribute("index")),i=e.currentTarget.context,n=i.files[t];n.isDirectory?i._browseDirectory(n["@id"].replace(i.selectedRecord["@id"],"")):i.selectedFile=n.fullUrl}_onInputKeyup(e){let t=e.currentTarget.value;this._autocompleteTimer&&clearTimeout(this._autocompleteTimer),this._autocompleteTimer=setTimeout(()=>{this._autocompleteTimer=null,this._typeaheadSearch(t)},300)}async _typeaheadSearch(e){if(this.typeaheadSearchText=e,""===e)return this.files=[],void this._browseDirectory();this.mode="search",this.lineHeight=52,this.selectedFile="";let t={text:e,filters:{collectionId:{type:"keyword",value:[this.selectedRecord.collectionId],op:"or"},"@id":{type:"prefix",value:this.selectedRecord["@id"]}},sort:null,limit:9999,offset:0,facets:{},textFields:["filename"]},i=await this.RecordModel.typeaheadSearch(t,{allRecords:!0});this.typeaheadSearchText===e&&this.setFiles(i.payload.results,!1)}async _browseDirectory(e){if("browse"===this.mode&&this.currentDir===e)return;this.mode="browse",this.lineHeight=45,this.shadowRoot.querySelector("#searchInput").value="",this.selectedFile="",e||(e=this.currentDir?this.currentDir:"/"),this.currentDir=e;let t={filters:{directParent:{type:"keyword",value:[this.selectedRecord["@id"]+this.currentDir.replace(/\/$/,"")],op:"or"}},sort:null,limit:9999,offset:0,facets:{},textFields:[]},i=await this.RecordModel.typeaheadSearch(t,{debug:!0,allRecords:!0});this.setFiles(i.payload.results)}setFiles(e,t=!0){e=e.map(e=>(e.directory=e.directParent.replace(this.selectedRecord["@id"],""),e["@type"].includes("http://fedora.info/definitions/v4/repository#Binary")?e.isFile=!0:(e.isDirectory=!0,e.filename=e["@id"].split("/").pop()),e.fullUrl=this._getFullFileUrl(e),e.selected=e.fullUrl===this.selectedFile,e)),t&&e.sort((e,t)=>e.filename.toLowerCase()>t.filename.toLowerCase()?1:-1),this.files=e}_getFullFileUrl(e){return window.location.protocol+"//"+window.location.host+"/fcrepo/rest"+e["@id"]}_onClearSearchClicked(){this._browseDirectory(this.currentDir)}_onBreadcrumbClicked(e){this._browseDirectory(e.currentTarget.getAttribute("dir"))}}customElements.define("app-fs-viewer",I);class C extends(Mixin(k.a).with(LitCorkUtils)){static get properties(){return{mode:{type:String}}}constructor(){super(),this.render=_.bind(this),this.mode="single",this._injectModel("AppStateModel")}async firstUpdated(){this.fsViewer=this.shadowRoot.querySelector("app-fs-viewer"),this._onAppStateUpdate(await this.AppStateModel.get())}_onAppStateUpdate(e){this.selectedRecord=e.selectedRecord,this.selectedRecordMedia=e.selectedRecordMedia}_toggleMultipleDownload(e){this.mode=e.currentTarget.id}_onDownloadClicked(e){if("keyup"!==e.type||13===e.which)if("single"===this.mode)this.fsViewer.show();else if(this.selectedRecordMedia.clientMediaDownload){let e=this.selectedRecordMedia.clientMediaDownload;Array.isArray(e)&&(e=e[0]),"object"==typeof e&&(e=e["@id"]),e="/fcrepo/rest/"+e,console.log("downloading archive using: "+e),open(e,"_blank")}else{let e="/api/zip/bag-of-files"+this.selectedRecordMedia["@id"];open(e,"_blank"),console.log("downloading archive using: "+e)}}_renderDownloadBtn(e){return"single"===this.mode?k.b`<iron-icon icon='file-download'></iron-icon> Browse for file`:k.b`<iron-icon icon='file-download'></iron-icon> Download Archive`}}customElements.define("app-fs-media-download",C);var A=i(182),z=i.n(A);i(146),i(71),i(183);class D extends n.a{static get template(){let e=document.createElement("template");return e.innerHTML=z.a,e}static get properties(){return{mobile:{type:Boolean,value:!1,observer:"_updateVisiblePanels"},selectedTab:{type:Number,value:"data",observer:"_updateVisiblePanels"},showRight:{type:Boolean,value:!0},showLeft:{type:Boolean,value:!0},tabs:{type:Array,value:()=>[{label:"Item Data",value:"data"},{label:"Cite Item",value:"cite"}]}}}_updateVisiblePanels(){this.showRight=!0,this.showLeft=!0,this.mobile&&("data"===this.selectedTab?this.showRight=!1:this.showLeft=!1)}}customElements.define("app-record-metadata-layout",D);i(144);function F(){return k.b`

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

`}i(151);var B=i(184),O=i.n(B),U=i(24),E=i.n(U);class P extends(Mixin(n.a).with(EventInterface,E.a,v.a)){static get template(){let e=document.createElement("template");return e.innerHTML=O.a,e}static get properties(){return{record:{type:Object,value:()=>{}},media:{type:Object,value:()=>{}},loading:{type:Boolean,value:!1},height:{type:Number,value:600},hasMultipleImages:{type:Boolean,value:!1}}}constructor(){super(),this.active=!0}async ready(){super.ready();let e=await this.AppStateModel.getSelectedRecordMedia();e&&this._onSelectedRecordMediaUpdate(e)}_onSelectedRecordMediaUpdate(e){if(!e)return;let t=c.a.getMediaType(e);"ImageList"!==t&&"ImageObject"!==t||(this.media=e,this._renderImg())}_renderImg(){this.media.hasPart&&this.media.hasPart.length>0&&(this.media.image=this.media.hasPart[0].image),this.media.image.width<this.height&&(this.height=this.media.image.width);let e=this._getImgUrl(this.media.image.url,"",this.height),t=600/this.media.image.height,i=this.media.image.width*t,n=this.offsetWidth-20;n<1&&(n=1);let o=Math.ceil(n>i?this.height:n/i*this.height),a=new Image;this.loading=!0,this.$.loading.style.height=o+"px",a.onload=()=>{this.loading=!1,this.$.img.style.height="auto"},a.src=e,this.$.img.style.maxWidth=i+"px",this.$.img.src=e}}customElements.define("app-image-viewer",P);var H=i(185);function j(){return k.b`
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
            ${Object(H.a)(this.tracks,e=>k.b`<track kind="${e.kind}" label="${e.label}" src="${e.src}" srclang="${e.srclang}" default="${e.default}" />`)}
        </video>
        <div id="loading" ?hidden="${this.libsLoaded}">
            <paper-spinner-lite ?active="${!this.libsLoaded}"></paper-spinner-lite>
        </div>
    </div>
`}i(12);var N=new class{async load(){return this.loaded?this.loaded:this.loading?(await this.loading,this.loaded):(this.loading=new Promise(async(e,t)=>{const n=(await i.e(11).then(i.t.bind(null,207,7))).default,o=await i.e(11).then(i.t.bind(null,208,7));await o.polyfill.installAll(),this.loaded={plyr:n,shaka:o},e(this.loaded)}),this.loading)}},V=i(148),W=i.n(V),Z=i(157),q=i.n(Z),X=i(158),K=i.n(X);let Y=W.a+q.a,G=K.a;class J{constructor(e){}remove(){return!0}destroy(){}append(e){}setTextVisibility(e){}isTextVisible(){return!1}}class Q extends(Mixin(k.a).with(LitCorkUtils)){static get properties(){return{player:{type:Object},tracks:{type:Array},libsLoaded:{type:Boolean}}}constructor(){super(),this.render=j.bind(this),this._injectModel("AppStateModel","MediaModel"),this.tracks=[],this.player={},this.libsLoaded=!1}_onAppStateUpdate(e){this.fullPath!==e.location.fullpath&&this._stop(),this.fullPath=e.location.fullpath}async firstUpdated(e){let t=await this.AppStateModel.getSelectedRecordMedia();t&&this._onSelectedRecordMediaUpdate(t),this.fullPath=(await this.AppStateModel.get()).location.fullpath,G.indexOf("data:image/svg+xml;base64")>-1&&(G=atob(G.replace("data:image/svg+xml;base64,",""))),this.shadowRoot.querySelector("#sprite-plyr").innerHTML=G;let i=document.createElement("style");i.innerHTML=Y,window.ShadyDOM&&window.ShadyDOM.inUse?(document.head.appendChild(i),this.hideControls=!1):(this.shadowRoot.appendChild(i),this.hideControls=!0)}async _onSelectedRecordMediaUpdate(e){if(!e)return;let t=c.a.getMediaType(e);if("VideoObject"!==t&&"StreamingVideo"!==t)return;if(this.media=e,this.tracks=c.a.asArray(e,"caption").filter(e=>void 0!==e["@id"]).map(e=>{let t=e.language,i="en"===t;return{kind:"captions",label:c.a.getLanguage(t),srclang:t,src:e["@id"],default:i}}),this.libsLoaded)return void this._loadVideo();let{plyr:i,shaka:n}=await N.load(),o=i.supported("video","html5",!0),a=n.Player.isBrowserSupported();if(!o||!a)return alert("Your browser does not support video playback");let r=this.shadowRoot.getElementById("video");this.plyr=new i(r,{hideControls:this.hideControls,fullscreen:{enabled:!1},captions:{update:!1},controls:["play-large","play","progress","current-time","mute","volume"]}),this.shaka=new n.Player(r),this.shaka.configure({textDisplayFactory:J}),this.shaka.addEventListener("error",e=>console.error("shaka error",e)),this.libsLoaded=!0,await this._loadVideo()}async _loadVideo(){if(!this.media)return;let e=c.a.getMediaType(this.media),t=y.a.fcrepoBasePath+this.media["@id"];"StreamingVideo"===e&&(t+="/playlist.m3u8");try{await this.shaka.load(t)}catch(e){console.error("Error code: ",e.code,"object",e)}}_stop(){this.shadowRoot.querySelector("#video").pause(),void 0!==this.plyr&&null!==this.plyr&&0!=Object.entries(this.plyr).length&&this.plyr.stop()}}function ee(){return k.b`
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

  ${W.a}
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
`}customElements.define("app-video-viewer",Q);let te=W.a+q.a,ie=K.a;class ne extends(Mixin(k.a).with(LitCorkUtils)){static get properties(){return{}}constructor(){super(),this.render=ee.bind(this),this._injectModel("AppStateModel","MediaModel"),this.libsLoaded=!1}_onAppStateUpdate(e){this.fullPath!==e.location.fullpath&&this._stop(),this.fullPath=e.location.fullpath}async firstUpdated(e){this.$.audio=this.shadowRoot.getElementById("audio_player"),this.$.poster=this.shadowRoot.getElementById("audio_poster");let t=await this.AppStateModel.getSelectedRecordMedia();t&&this._onSelectedRecordMediaUpdate(t),this.fullPath=(await this.AppStateModel.get()).location.fullpath,ie.indexOf("data:image/svg+xml;base64")>-1&&(ie=atob(ie.replace("data:image/svg+xml;base64,",""))),this.shadowRoot.querySelector("#sprite-plyr").innerHTML=ie;let i=document.createElement("style");i.innerHTML=te,window.ShadyDOM&&window.ShadyDOM.inUse?(document.head.appendChild(i),this.hideControls=!1):(this.shadowRoot.appendChild(i),this.hideControls=!0)}async _onSelectedRecordMediaUpdate(e){if(!e)return;if("AudioObject"!==c.a.getMediaType(e))return;if(this.media=e,this.libsLoaded)return void this._loadAudio();let{plyr:t}=await N.load();this.audioPlayer=new t(this.$.audio,{fullscreen:{enabled:!1},captions:{update:!1},controls:["play-large","play","progress","current-time","mute","volume"]}),this.style.display="block",this.libsLoaded=!0,this._loadAudio()}_loadAudio(){let e=this.shadowRoot.querySelector("#audio_player source");e.src=y.a.fcrepoBasePath+this.media["@id"],e.type=this.media.fileFormat||this.media.hasMimeType||this.media.encodingFormat||"";try{this.audioPlayer.stop();let e=this.shadowRoot.querySelector('input[type="range"][data-plyr="seek"]');e&&(e.value=0)}catch(e){}this.shadowRoot.querySelector("#audio_player").load();let t=this.media.thumbnailUrl?this.media.thumbnailUrl+"/svc:iiif/full/,400/0/default.jpg":"";t?(this.$.poster.style.display="block",this.$.poster.style.backgroundImage="url("+t+")"):this.$.poster.style.display="none"}_stop(){this.audioPlayer&&this.audioPlayer.stop()}}customElements.define("app-audio-viewer",ne);var oe=i(188),ae=i.n(oe),re=(i(142),i(189)),se=i.n(re);const le={facebook:"https://www.facebook.com/sharer/sharer.php",twitter:"https://twitter.com/intent/tweet",pinterest:"https://pinterest.com/pin/create/button/"};class de extends(Mixin(n.a).with(EventInterface,E.a,v.a)){static get template(){let e=document.createElement("template");return e.innerHTML=se.a,e}static get properties(){return{visible:{type:Boolean,value:!1}}}constructor(){super(),this.active=!0}ready(){super.ready(),window.addEventListener("click",()=>{this.visible&&this.hide()}),this.addEventListener("keyup",e=>{this.visible&&27===e.which&&(this.hide(),e.preventDefault(),e.stopPropagation())}),this.$.popup.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation()})}_onAppStateUpdate(){setTimeout(()=>{this.$.link.value=window.location.href},100)}hide(){this.visible=!1,this.$.popup.style.display="none"}_onBtnClicked(e){this.visible=!this.visible,this.$.popup.style.display=this.visible?"block":"none",setTimeout(()=>this.$.facebook.focus(),100),e.preventDefault(),e.stopPropagation()}_onSocialIconClick(e){let t=this.AppStateModel.getSelectedRecord(),i=this.AppStateModel.getSelectedRecordMedia();if("keyup"===e.type&&13!==e.which)return;let n=e.currentTarget.id,o=le[n],a={},r=i.name||i.title||t.name||t.title;if("pinterest"===n){let e=this._getImgPath(i);e&&(a.media=window.location.protocol+"//"+window.location.host+this._getImgUrl(e)),a.description=r,a.url=window.location.href}else if("facebook"===n)a.u=window.location.href;else{if("twitter"!==n)throw new Error("Unknown social media type: "+n);{let e=r+" - "+window.location.href+" #UCDavisLibrary #DigitalCollections";if(e.length>280){let t=e.length+3-280;r=r.substr(0,r.length-t)+"...",e=r+" - "+window.location.href+" #UCDavisLibrary #DigitalCollections"}a.text=e}}o+=this._createQs(a),window.open(o,"_blank","height=400,width=500")}_createQs(e){let t=[];for(let i in e)t.push(i+"="+encodeURIComponent(e[i]));return"?"+t.join("&")}_copyLink(){this.$.link.focus(),this.$.link.setSelectionRange(0,9999),document.execCommand("Copy"),this.$.copyIcon.icon="check",this.$.copyButton.setAttribute("active","active"),setTimeout(()=>{this.$.copyIcon.icon="content-copy",this.$.copyButton.removeAttribute("active","active")},3e3)}}customElements.define("app-share-btn",de);class ce extends(Mixin(n.a).with(EventInterface,E.a,v.a)){static get template(){let e=document.createElement("template");return e.innerHTML=ae.a,e}static get properties(){return{totalThumbnailWidth:{type:Number,value:64},icon:{type:String,value:""},iconWidth:{type:Number,value:40},thumbnails:{type:Array,value:()=>[]},thumbnailsPerFrame:{type:Number,value:10},leftMostThumbnail:{type:Number,value:0},breakControls:{type:Boolean,value:!1,reflect:!0,notify:!0},showNavLeft:{type:Boolean,value:!1},showNavRight:{type:Boolean,value:!1},isLightbox:{type:Boolean,value:!1},singleImage:{type:Boolean,value:!1,reflectToAttribute:!0},mediaList:{type:Array,value:()=>[]},showOpenLightbox:{type:Boolean,value:!1}}}constructor(){super(),this.active=!0,window.addEventListener("resize",()=>this._resize()),window.addEventListener("touchend",e=>this._onTouchEnd(e)),window.addEventListener("touchcancel",e=>this._onTouchEnd(e)),window.addEventListener("touchmove",e=>this._onTouchMove(e)),this.addEventListener("touchstart",e=>this._onTouchStart(e))}connectedCallback(){super.connectedCallback(),this._resize()}async ready(){super.ready();let e=await this.AppStateModel.getSelectedRecord();if(e){this._onSelectedRecordUpdate(e);let t=await this.AppStateModel.getSelectedRecordMedia();t&&this._onSelectedRecordMediaUpdate(t)}}_onAppStateUpdate(e){void 0!==e.mediaViewerNavLeftMostThumbnail&&e.mediaViewerNavLeftMostThumbnail!==this.leftMostThumbnail&&(this.leftMostThumbnail=e.mediaViewerNavLeftMostThumbnail,this._resize())}_onTouchEnd(e){if(!this.touchAction)return;this.touchAction=!1;let t=this.touchStartX-this.touchCurrentX;Math.abs(t)>this.totalThumbnailWidth/2&&(t<0?this._pageLeft():this._pageRight())}_onTouchMove(e){this.touchAction&&(this.touchCurrentX=e.touches[0].clientX)}_onTouchStart(e){this.touchAction=!0,this.touchStartX=e.touches[0].clientX,this.touchCurrentX=e.touches[0].clientX}_resize(){let e,t=window.innerWidth;if(0===t)return;t-=16,this._setNavBreak(t),this.breakControls?e=2*this.iconWidth:(e=4*this.iconWidth,this.isLightbox&&(e+=2*this.iconWidth));let i=Math.min(t-e,512);this.thumbnailsPerFrame=Math.max(Math.floor(i/this.totalThumbnailWidth),1),this.$.thumbnails.style.width=this.thumbnailsPerFrame*this.totalThumbnailWidth+"px",this.showNavLeft=0!==this.leftMostThumbnail,this.showNavRight=!this._showingLastThumbFrame(),this._updateThumbnailContainerPos()}_getTotalIconWidth(){let e=4*this.iconWidth;return this.isLightbox&&(e+=2*this.iconWidth),e}_setNavBreak(e){let t=4*this.iconWidth;this.isLightbox&&(t+=2*this.iconWidth),t+4*this.totalThumbnailWidth>e?this.breakControls=!0:this.breakControls=!1}_pageLeft(){this.leftMostThumbnail=this.leftMostThumbnail-this.thumbnailsPerFrame,this.leftMostThumbnail<0&&(this.leftMostThumbnail=0),this._resize(),this.AppStateModel.set({mediaViewerNavLeftMostThumbnail:this.leftMostThumbnail})}_pageRight(){this._showingLastThumbFrame()||(this.leftMostThumbnail=this.leftMostThumbnail+this.thumbnailsPerFrame,this._resize(),this.AppStateModel.set({mediaViewerNavLeftMostThumbnail:this.leftMostThumbnail}))}_showingLastThumbFrame(){return this.leftMostThumbnail+this.thumbnailsPerFrame>this.thumbnails.length-1}_updateThumbnailContainerPos(){this.$.thumbnailInnerContainer.style.marginLeft=-1*this.leftMostThumbnail*(this.totalThumbnailWidth+1)+"px";let e=this.leftMostThumbnail+this.thumbnailsPerFrame;this.thumbnails.forEach((t,i)=>{this.set(`thumbnails.${i}.disabled`,i<this.leftMostThumbnail||i>=e)})}_onSelectedRecordUpdate(e){this.leftMostThumbnail=0,e&&1!==c.a.countMediaItems(e.media)?(this.mediaList=c.a.flattenMediaList(e.media),this.mediaList=c.a.organizeMediaList(this.mediaList),this.thumbnails=this.mediaList.map(e=>{let{fileType:t,iconType:i}=this._getFileAndIconType(e);if(this.isLightbox&&"image"!==t)return null;let n=e.thumbnailUrl;return n&&!n.match(/\/svc:iiif\//)&&(n+="/svc:iiif/full/,50/0/default.jpg"),{id:e["@id"],icon:i,position:e.position,selected:!1,disabled:!1,src:n}}).filter(e=>!!e).filter(e=>"blank-round"!==e.icon),this.singleImage=!(0!==this.thumbnails.length&&this.thumbnails.length>1),this._resize(),this.AppStateModel.set({mediaViewerNavLeftMostThumbnail:0})):this.singleImage=!0}_onSelectedRecordMediaUpdate(e){if(this.media=e,!e)return;this.thumbnails.forEach((e,t)=>{this.set(`thumbnails.${t}.selected`,this.media["@id"]===e.id)});let{fileType:t,iconType:i}=this._getFileAndIconType(e);this.showOpenLightbox="image"===t}_getFileAndIconType(e){let t="",i=t,n=t,o="";(e.fileFormat||e.encodingFormat)&&(t=e.fileFormat?e.fileFormat:e.encodingFormat,i=t.split("/").shift(),n=t.split("/").pop());let a=c.a.getMediaType(e);return"AudioObject"===a||"audio"===i?o="sound-round":"VideoObject"===a||"StreamingVideo"===a||"video"===i?o="video-round":"pdf"===n?o="blank-round":"360"===i&&(o="360-round"),{fileType:i,iconType:o}}_onThumbnailClicked(e){let t=e.currentTarget.getAttribute("media-id");this.AppStateModel.setLocation(t)}_onZoomInClicked(e){this.dispatchEvent(new CustomEvent("zoom-in"))}_onZoomOutClicked(e){this.dispatchEvent(new CustomEvent("zoom-out"))}_onCloseClicked(e){this.dispatchEvent(new CustomEvent("close"))}setFocus(){if(this.singleImage)this.breakControls?this.$.zoomOut2.focus():this.$.zoomOut1.focus();else{let e=this.shadowRoot.querySelector("button");e&&e.focus()}window.scrollTo(0,0)}}customElements.define("app-media-viewer-nav",ce);var he=i(190),pe=i.n(he),ue=(i(191),i(192)),me=i.n(ue);class ge extends(Mixin(n.a).with(EventInterface,E.a,v.a)){static get template(){let e=document.createElement("template");return e.innerHTML=`<style>${me.a}</style>${pe.a}`,e}properties(){return{bounds:{type:Array,value:null},maxImageSize:{type:Number,value:2048},media:{type:Object,value:()=>{}},visible:{type:Boolean,value:!1},loading:{type:Boolean,value:!1}}}constructor(){super(),this.active=!0,window.addEventListener("keyup",e=>{this.visible&&27===e.which&&this.hide()})}async ready(){super.ready(),this.parentElement.removeChild(this),document.body.appendChild(this),this.shadowRoot.removeChild(this.$.safeCover),document.body.appendChild(this.$.safeCover);let e=await this.AppStateModel.getSelectedRecordMedia();e&&this._onSelectedRecordMediaUpdate(e)}_onAppStateUpdate(e){e.showLightbox&&!this.visible?this.show():!e.showLightbox&&this.visible&&this.hide()}_onSelectedRecordMediaUpdate(e){this.media=e,this.visible&&this.render()}async show(){this.visible=!0,this.style.display="block",this.$.safeCover.style.display="block",document.querySelector("fin-app").style.display="none",document.body.style.overflow="hidden",window.scrollTo(0,0),this.render(),setTimeout(()=>{this.$.nav._resize(),this.$.nav.setFocus()},25)}async hide(){this.visible=!1,this.style.display="none",this.$.safeCover.style.display="none",document.body.style.overflow="auto",document.querySelector("fin-app").style.display="block"}_loadImage(e){return new Promise((t,i)=>{var n=new Image;n.onload=()=>{let e=[n.naturalHeight,n.naturalWidth];this.bounds=[[0,0],e],t()},n.src=e})}async render(){if(this.renderedMedia===this.media)return;this.renderedMedia=this.media;let e=this.renderedMedia["@id"];this.renderedMedia.associatedMedia&&this.renderedMedia.media.imageList&&(e=this.renderedMedia.image.url);let t=this._getImgUrl(e,"","");this.loadingUrl=t,this.loading=!0,this.imageOverlay&&(this.renderedUrl="",this.viewer.removeLayer(this.imageOverlay),this.imageOverlay=null),await this._loadImage(t),t===this.loadingUrl&&t!==this.renderedUrl&&(this.renderedUrl=t,this.loading=!1,this.viewer||(this.viewer=L.map(this.$.viewer,{crs:L.CRS.Simple,minZoom:-4,zoomControl:!1})),this.imageOverlay=L.imageOverlay(t,this.bounds).addTo(this.viewer),this.viewer.fitBounds(this.bounds),this.shadowRoot.querySelector(".leaflet-control-attribution").style.display="none")}_onCloseClicked(){this.AppStateModel.set({showLightbox:!1})}_onZoomInClicked(){this.viewer.zoomIn()}_onZoomOutClicked(){this.viewer.zoomOut()}}customElements.define("app-image-viewer-lightbox",ge);class ve extends(Mixin(k.a).with(LitCorkUtils)){static get properties(){return{mediaType:{type:String},tallControls:{type:Boolean},bagOfFilesImage:{type:String}}}constructor(){super(),this.render=F.bind(this),this._injectModel("AppStateModel","RecordModel"),this.mediaType="image",this.bagOfFilesImage=""}async firstUpdated(){this.$.lightbox=this.shadowRoot.getElementById("lightbox"),this.$.lightbox||(this.$.lightbox=document.getElementById("lightbox")),this._onAppStateUpdate(await this.AppStateModel.get())}_onRecordUpdate(e){}_onAppStateUpdate(e){if(!e.selectedRecordMedia)return this.selectedRecordMediaId="",this.mediaType="";if(e.selectedRecordMedia["@id"]===this.selectedRecordMediaId)return;this.selectedRecordMediaId=e.selectedRecordMedia["@id"];let t=c.a.getMediaType(e.selectedRecordMedia).toLowerCase().replace(/object/i,"");"imagelist"===t?t="image":"streamingvideo"===t&&(t="video"),"bagoffiles"===t&&e.selectedRecordMedia.thumbnailUrl?this.bagOfFilesImage=e.selectedRecordMedia.thumbnailUrl:this.bagOfFilesImage="",this.mediaType=t}_onZoomIn(e){this.AppStateModel.set({showLightbox:!0}),this.$.lightbox.show()}}customElements.define("app-media-viewer",ve),i.d(t,"default",(function(){return be}));class be extends(Mixin(n.a).with(EventInterface,m.a,v.a)){static get template(){let e=document.createElement("template");return e.innerHTML=r.a,e}static get properties(){return{currentRecordId:{type:String,value:""},name:{type:String,value:""},collectionName:{type:String,value:""},date:{type:String,value:""},size:{type:String,value:""},rights:{type:Object,value:()=>{}},metadata:{type:Array,value:()=>[]},isBagOfFiles:{type:Boolean,value:!1}}}constructor(){super(),this.active=!0,this._injectModel("AppStateModel"),this._injectModel("RecordModel")}async ready(){super.ready();let e=await this.AppStateModel.getSelectedRecord();if(e){await this._onSelectedRecordUpdate(e);let t=await this.AppStateModel.getSelectedRecordMedia();t&&this._onSelectedRecordMediaUpdate(t)}}_onRecordUpdate(e){"loading"===e.state&&(this.renderedRecordId=null,this.record=null,this.$.description.classList.add("hidden"),this.description="",this.alternativeHeadline="",this.$.link.value="",this.date="",this.collectionName="",this.rights=null,this.$.collectionValue.innerHTML="",this.$.mla.text="",this.$.apa.text="",this.$.chicago.text="",this.$.identifier.classList.add("hidden"),this.$.creator.classList.add("hidden"),this.$.subject.classList.add("hidden"),this.$.publisher.classList.add("hidden"),this.$.fedoraValue.innerHTML="",this.metadata=[],this.isBagOfFiles=!1)}async _onSelectedRecordUpdate(e){if(e&&(!e["@id"]||e["@id"]!==this.renderedRecordId)){if(this.renderedRecordId=e["@id"],this.record=e,this.record.description?(this.$.description.classList.remove("hidden"),this.$.descriptionValue.innerHTML=o.markdown.toHTML(this.record.description)):this.$.description.classList.add("hidden"),this.description=this.record.description||"",this.alternativeHeadline=this.record.alternativeHeadline||"",this.$.link.value=window.location.href,this.date=c.a.getYearFromDate(this.record.datePublished),this.record.license&&this.record.license["@id"]&&s[this.record.license["@id"]]){let e=s[this.record.license["@id"]];this.rights={link:this.record.license["@id"],label:e.text,icon:`/images/rights-icons/${e.icon}.svg`}}else this.rights=null;if(this.collectionName=this.record.collectionId||"",this.collectionName){let e=await this._getCollection(this.collectionName);this.collectionName=e.name,this.record.collectionName=e.name}this._renderIdentifier(e),this._renderCreators(e),this._renderSubjects(e),this._renderPublisher(e),this.$.collectionValue.innerHTML=`<a href="${e.collectionId}">${this.collectionName}</a>`,this._renderFcLink(e),this._updateMetadataRows(),this.$.mla.text=await l.default.renderEsRecord(this.record,"mla"),this.$.apa.text=await l.default.renderEsRecord(this.record,"apa"),this.$.chicago.text=await l.default.renderEsRecord(this.record,"chicago"),this.isBagOfFiles=this.record["@type"].includes("http://digital.ucdavis.edu/schema#bagOfFiles")}}_renderFcLink(e,t){let i=e["@type"].find(e=>e.match(/binary/i))?"/fcr:metadata":"",n=this._getHost()+"fcrepo/rest"+e["@id"]+i,o=`<a href="${n}">${e["@id"]}</a>`;t&&e["@id"]!==t["@id"]&&(i=t["@type"].find(e=>e.match(/binary/i))?"/fcr:metadata":"",n=this._getHost()+"fcrepo/rest"+t["@id"]+i,o+=`<div class="fc-break"></div><div><a href="${n}">${t["@id"]}</a></div>`),this.$.fedoraValue.innerHTML=o}_renderSelectedMedia(){let e=this._getImageMediaList(this.record);if(this.record.associatedMedia)if(e.length){let t=e[0];for(let i of e)i["@id"]===window.location.pathname&&(t=i);this._setSelectedRecordMedia(t)}else this._setSelectedRecordMedia(this.record);else this._setSelectedRecordMedia(this.record)}_renderCreators(e){let t=c.a.asArray(e,"creators");if(0===t.length)return this.$.creator.classList.add("hidden");this.$.creatorValue.innerHTML=t.map(t=>{let i=this.RecordModel.emptySearchDocument();return this.RecordModel.appendKeywordFilter(i,"creators",t),this.RecordModel.appendKeywordFilter(i,"isPartOf.@id",e.collectionId),`<a href="${this._getHost()+"search/"+this.RecordModel.searchDocumentToUrl(i)}">${t}</a>`}).join(", "),this.$.creator.classList.remove("hidden")}_renderSubjects(e){let t=c.a.asArray(e,"abouts");if(0===t.length)return this.$.subject.classList.add("hidden");this.$.subjectValue.innerHTML=t.map(t=>{let i=this.RecordModel.emptySearchDocument();return this.RecordModel.appendKeywordFilter(i,"abouts.raw",t),this.RecordModel.appendKeywordFilter(i,"isPartOf.@id",e.collectionId),`<a href="${this._getHost()+"search/"+this.RecordModel.searchDocumentToUrl(i)}">${t}</a>`}).join(", "),this.$.subject.classList.remove("hidden")}_renderPublisher(e){let t=c.a.asArray(e,"publisher").filter(e=>!!e.name);if(0===t.length)return this.$.publisher.classList.add("hidden");this.$.publisherValue.innerHTML=t.map(e=>e.name).join(", "),this.$.publisher.classList.remove("hidden")}_renderIdentifier(e,t){if(!e.identifier)return this.$.identifier.classList.add("hidden");let i=Array.isArray(e.identifier)?e.identifier:[e.identifier];if(i=i.filter(e=>!!e.match(/^(ark|doi)/)),i.length){if(t&&t.identifier){let e=Array.isArray(t.identifier)?t.identifier:[t.identifier];e=e.filter(e=>!!e.match(/^(ark|doi)/));for(let t of e)-1===i.indexOf(t)&&i.push(t)}this.$.identifier.classList.remove("hidden"),this.$.identifierValue.innerHTML=i.map(e=>`<div><a href="${this._getHost()}${e}">${e}</a></div>`).join("")}else this.$.identifier.classList.add("hidden")}_getHost(){return window.location.protocol+"//"+window.location.host+"/"}_onSelectedRecordMediaUpdate(e){this.name=this.record.name||"",this._renderIdentifier(this.record,e),this._renderFcLink(this.record,e)}_updateMetadataRows(){let e=[];this._addMetadataRow(e,"name","Item Name"),this._addMetadataRow(e,"collectionName","Collection"),this._addMetadataRow(e,"date","Date"),this._addMetadataRow(e,"resourceType","Resource Type"),this.metadata=e}_addMetadataRow(e,t,i){this[t]&&e.push({attr:i||t,value:this[t]})}_copyLink(){this.$.link.focus(),this.$.link.setSelectionRange(0,9999),document.execCommand("Copy"),this.$.copyIcon.icon="check",this.$.copyButton.setAttribute("active","active"),setTimeout(()=>{this.$.copyIcon.icon="content-copy",this.$.copyButton.removeAttribute("active","active")},3e3)}}customElements.define("app-record",be)}}]);