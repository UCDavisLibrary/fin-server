(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();e.exports=function(e){return function(t){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e._injectModel("MediaModel"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e),o(n,[{key:"_getImgPath",value:function(e){return this.MediaModel.getImgPath(e)}},{key:"_getImgUrl",value:function(e,t,n){return this.MediaModel.getImgUrl(e,t,n)}},{key:"_getImageMediaList",value:function(e){return this.MediaModel.getImageMediaList(e)}}]),n}()}},171:function(e,t,n){"use strict";var o=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(9),a=s(n(179));n(178),n(169);var c=s(n(61)),l=s(n(60)),u=s(n(35));function s(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.active=!0,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Mixin(i.PolymerElement).with(EventInterface,c.default,l.default,u.default)),r(t,null,[{key:"properties",get:function(){return{selectedCollection:{type:String,value:""}}}},{key:"template",get:function(){var e=document.createElement("template");return e.innerHTML=a.default,e}}]),r(t,[{key:"ready",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"ready",this).call(this),e.t0=this,e.next=4,this.CollectionModel.overview();case 4:e.t1=e.sent,e.t0._setCollections.call(e.t0,e.t1);case 6:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function o(r,i){try{var a=t[r](i),c=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(c).then(function(e){o("next",e)},function(e){o("throw",e)});e(c)}("next")})});return function(){return n.apply(this,arguments)}}()},{key:"_setCollections",value:function(e){var t={};e.payload.forEach(function(e){t[e["@id"]]=e.name}),this.$.searchInput.browse=t}},{key:"_onBrowse",value:function(e){var t=e.detail;if(this.$.searchInput.browseValue="Browse",!t||"Browse"===t)return this.RecordModel.setSearchLocation(this._getEmptySearchDocument());this._setWindowLocation(t)}},{key:"_onSearch",value:function(e){var t=this._getCurrentSearchDocument();this._setPaging(t,0),this._setTextFilter(t,e.detail),this.RecordModel.setSearchLocation(t)}},{key:"_onRecordSearchUpdate",value:function(e){try{this.$.searchInput.value=e.searchDocument.text||""}catch(e){this.$.searchInput.value=""}}},{key:"_onSelectedCollectionUpdate",value:function(e){this.selectedCollection=e}}]),t}();customElements.define("app-search-header",p)},178:function(e,t,n){"use strict";var o,r,i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=(o=['<iron-icon icon="fin-icons:account" style="width: 40px; height:40px"></iron-icon>'],r=['<iron-icon icon="fin-icons:account" style="width: 40px; height:40px"></iron-icon>'],Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(r)}}))),l=n(9),u=n(40),s=(i=u)&&i.__esModule?i:{default:i};var p=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.active=!0,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Mixin(l.PolymerElement).with(EventInterface,s.default)),a(t,null,[{key:"template",get:function(){return(0,l.html)(c)}}]),a(t,[{key:"_onAuthUpdate",value:function(e){"loggedIn"===e.state?this.style.display="block":this.style.display="none"}}]),t}();customElements.define("app-auth-header",p)},179:function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: block;\n    background-color: var(--default-primary-color);\n    color: var(--inverse-text-color);\n    padding: 15px;\n  }\n\n  app-auth-header {\n    margin-left: 10px;\n  }\n  \n  fin-search-box {\n    display: inline-block;\n    width: 100%;\n    box-sizing: border-box;\n    max-width: 525px;\n  }\n\n  .layout {\n    display: flex;\n    align-items: center;\n  }\n  \n  h2 {\n    margin: 0;\n    white-space: nowrap;\n  }\n  h2 a {\n    color: var(--default-secondary-color);\n    text-decoration: none;\n  }\n  h2 a:visited {\n    color: var(--default-secondary-color);\n    text-decoration: none;\n  }\n\n  img {\n    height: 50px;\n  }\n\n  .logo, h2 {\n    padding-right: 20px;\n    display: none;\n  }\n\n  .filler {\n    flex: .25;\n    display: none;\n  }\n\n  .logo-sm {\n    margin-right: 10px;\n  }\n\n  iron-icon.search-icon {\n    color: var(--default-secondary-color);\n  }\n\n  @media( min-width: 700px ) {\n    .logo {\n      display: block;\n    }\n    .logo-sm {\n      display: none;\n    }\n  }\n\n  @media( min-width: 815px ) {\n    h2 {\n      display: block;\n    }\n  }\n\n  @media( min-width: 1100px ) {\n    .filler {\n      display: block;\n    }\n  }\n</style>\n\n<div class="layout">\n  <a href="/" class="logo"><img border="0" src="/images/ucd-lib-logo-white.png" /></a>\n  <a href="/" class="logo-sm"><img border="0" src="/images/ucd-lib-logo-white-sm.png" /></a>\n  <h2><a href="/">Digital Collections</a></h2>\n  <div class="filler"></div>\n  <div style="flex:1; text-align:right">\n    <fin-search-box \n      id="searchInput" \n      on-search="_onSearch" \n      on-browse="_onBrowse"\n      placeholder="Search Keyword(s)">\n      <iron-icon icon="fin-icons:search" class="search-icon" slot="button-content"></iron-icon>\n    </fin-search-box>\n  </div>\n  <app-auth-header></app-auth-header>\n</div>\n\n'},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(9),a=n(242),c=(o=a)&&o.__esModule?o:{default:o};var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.PolymerElement),r(t,[{key:"_renderTabs",value:function(){var e=this;this.tabs&&(this.selected||!this.tabs.length?this.tabs.forEach(function(t,n){var o=t.value===e.selected;e.set("tabs."+n+".selected",o),e.set("tabs."+n+".ariaSelected",o+""),t.label||e.set("tabs."+n+".label",t.value)}):this.selected=this.tabs[0])}},{key:"_onTabClicked",value:function(e){"keyup"===e.type&&13!==e.which||(this.selected=e.currentTarget.getAttribute("value"))}}],[{key:"template",get:function(){var e=document.createElement("template");return e.innerHTML=c.default,e}},{key:"properties",get:function(){return{role:{type:String,value:"tablist",reflectToAttribute:!0},selected:{type:String,value:"",notify:!0,observer:"_renderTabs"},tabs:{type:Array,value:function(){return[]},observer:"_renderTabs"}}}}]),t}();t.default=l,customElements.define("app-tabs",l)},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(9),i=c(n(245)),a=c(n(244));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.PolymerElement),o(t,[{key:"_onTextUpdate",value:function(){this.$.citeText.innerHTML=this.text||"",this.$.copyArea.value=(0,a.default)(this.text).trim()}},{key:"_onCopyClicked",value:function(){var e=this;this.$.copyArea.style.height=this.$.citeText.offsetHeight-10+"px",this.$.copyArea.style.width=this.$.citeText.offsetWidth-10+"px",this.copying=!0,this.$.copyArea.focus(),this.$.copyArea.setSelectionRange(0,9999),document.execCommand("Copy"),this.$.icon.icon="check",setTimeout(function(){e.$.icon.icon="content-copy",e.copying=!1},3e3)}}],[{key:"template",get:function(){var e=document.createElement("template");return e.innerHTML=i.default,e}},{key:"properties",get:function(){return{text:{type:String,value:"",observer:"_onTextUpdate"},copying:{type:Boolean,value:!1}}}}]),t}();t.default=l,customElements.define("app-copy-cite",l)},196:function(e,t,n){"use strict";var o,r=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(9),c=n(289),l=(o=c)&&o.__esModule?o:{default:o};function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function o(r,i){try{var a=t[r](i),c=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(c).then(function(e){o("next",e)},function(e){o("throw",e)});e(c)}("next")})}}var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.active=!0,e._injectModel("AppStateModel","CollectionModel","RecordModel"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Mixin(a.PolymerElement).with(EventInterface)),i(t,null,[{key:"properties",get:function(){return{collection:{type:Object,value:null},record:{type:Object,value:null},name:{type:String,value:""}}}},{key:"template",get:function(){var e=document.createElement("template");return e.innerHTML=l.default,e}}]),i(t,[{key:"ready",value:function(){var e=u(regeneratorRuntime.mark(function e(){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"ready",this).call(this),this.$.layout.style.width=window.innerWidth-55+"px",window.addEventListener("resize",function(){n.$.layout.style.width=window.innerWidth-55+"px"}),e.t0=this,e.next=6,this.AppStateModel.get();case 6:e.t1=e.sent,e.t0._onAppStateUpdate.call(e.t0,e.t1);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_onAppStateUpdate",value:function(){var e=u(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.lastLocation&&"search"===t.lastLocation.page?this.lastSearch=t.lastLocation.pathname:this.lastSearch=null,this.record=null,this.collection=null,"search"===t.location.page&&t.selectedCollection&&(this.collection=t.selectedCollection),"record"!==t.location.page){e.next=17;break}return this.currentRecordId=t.location.pathname,e.next=8,this.RecordModel.get(this.currentRecordId);case 8:if(this.record=e.sent,this.record=this.record.payload,!this.record.collectionId){e.next=16;break}return e.next=13,this.CollectionModel.get(this.record.collectionId);case 13:this.collection=e.sent,e.next=17;break;case 16:this.collection=null;case 17:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"_onCollectionClicked",value:function(e){"keyup"===e.type&&13!==e.which||this.AppStateModel.setLocation(this.lastSearch||(this.collection?this.collection["@id"]:"/search"))}}]),t}();customElements.define("app-search-breadcrumb",s)},242:function(e,t){e.exports='<style>\n  :host {\n    display : block;\n  }\n  .layout {\n    display: flex;\n  }\n  .tab {\n    flex: 1;\n    cursor: pointer;\n    text-transform: uppercase;\n    padding: 12px 0 9px 0;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: normal;\n    color: var(--gray-text);\n    border-bottom: 2px solid var(--gray-text);\n  }\n  .tab:focus {\n    border-bottom-color: var(--default-secondary-color);\n    outline: none;\n  }\n  .tab[selected] {\n    cursor: default;\n    font-weight: bold;\n    color: var(--default-primary-color);\n    border-bottom: 4px solid var(--default-primary-color);\n    padding: 12px 0 7px 0;\n  }\n</style>\n\n<div class="layout">\n  <template is="dom-repeat" items="[[tabs]]">\n    <div class="tab" \n      role="tab" \n      tabindex="0" \n      aria-selected$="[[item.ariaSelected]]"\n      selected$="[[item.selected]]"\n      on-click="_onTabClicked" \n      on-keyup="_onTabClicked"\n      value$="[[item.value]]">\n      [[item.label]]\n    </div>\n  </template>\n</div>'},245:function(e,t){e.exports='<style>\n  :host {\n    display: block;\n  }\n  [hidden] {\n    display:none !important;\n  }\n  textarea {\n    width: 100%;\n    font-size: var(--font-size);\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    width: 85px;\n    text-transform: uppercase;\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-heavy);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n  }\n\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  \n  .copyButton[active] span {\n    display: none;\n  }\n\n  #citeText {\n    padding-bottom: 10px;\n    overflow: auto;\n  }\n\n  .buttons {\n    display: flex;\n  }\n</style>\n\n<div hidden$="[[copying]]" id="citeText"></div>\n<textarea hidden$="[[!copying]]" id="copyArea"></textarea>\n\n<div class="buttons">\n  <div>\n    <slot></slot>\n  </div>\n  <button active$="[[copying]]" on-click="_onCopyClicked" class="copyButton">\n    <iron-icon icon="content-copy" id="icon"></iron-icon>\n    <span>Copy</span>\n  </button>\n</div>\n'},289:function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: block;\n    color: var(--default-primary-color);\n    background-image: url(\'/images/header-colorbar.png\');\n    background-size: cover;\n    background-position: left center;    \n  }\n\n  .layout {\n    padding: 0 15px;\n  }\n\n  .layout > div {\n    margin: 0 5px;\n  }\n\n  a,\n  iron-icon {\n    cursor: pointer;\n  }\n\n  a:focus {\n    outline-color: var(--default-primary-color);\n  }\n</style>\n\n<div class="layout" hidden$="[[!selected]]" id="layout">\n  <a href="/search" tabindex="0">Search</a>\n  \n  <span hidden$="[[!collection]]">&gt;</span>\n  <span hidden$="[[!collection]]"><a on-click="_onCollectionClicked" tabindex="0">[[collection.name]]</a></span>\n\n  <span hidden$="[[!record]]">&gt;</span>\n  <span hidden$="[[!record]]">[[record.name]]</span>\n</div>'}}]);