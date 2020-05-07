(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{152:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i(7);var n=i(44);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
let s=null;const a={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){s=new n.a({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return s&&s.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(t){return void 0===t&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(t),!this.invalid},_getValidity:function(t){return!this.hasValidator()||this._validator.validate(t)}}},153:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i(7);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const n={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}}},161:function(t,e,i){"use strict";var n=i(4),s=(i(142),i(72),i(162)),a=i.n(s);class o extends n.a{static get template(){let t=document.createElement("template");return t.innerHTML=a.a,t}static get properties(){return{itemsPerPage:{type:Number,value:10},currentIndex:{type:Number,value:1},textMode:{type:Boolean,value:!1},textDisplay:{type:String,computed:"_computeTextDisplay(currentIndex, totalResults, itemsPerPage)"},totalResults:{type:Number,value:1},numShownPages:{type:Number,value:5},pages:{type:Array,value:function(){return[]}},lastPageIndex:{type:Number,value:1},firstPage:{type:Boolean,value:!0},lastPage:{type:Boolean,value:!1},loading:{type:Boolean,value:!1}}}static get observers(){return["_onPageChanged(currentIndex, itemsPerPage, totalResults)"]}_computeTextDisplay(t,e,i){if(0===e)return"No results found";var n=t+i<e?t+i:e,s=t+1;return s>n&&(s=n),`Showing ${s} to ${n} of ${e}`}_onPageChanged(){this.firstPage=!1,this.lastPage=!1;var t=[];this.currentPage=Math.floor(this.currentIndex/this.itemsPerPage)+1;var e=Math.floor(this.numShownPages/2);this.lastPageIndex=Math.max(Math.ceil(this.totalResults/this.itemsPerPage),1);var i=this.currentPage-e,n=this.currentPage+e;i<1&&(n=1-i+n),n>this.lastPageIndex&&(i-=n-this.lastPageIndex,n=this.lastPageIndex),i<1&&(i=1),this.firstPage=1===this.currentPage,1===i&&(i=2),this.lastPage=this.currentPage===this.lastPageIndex,n===this.lastPageIndex&&(n=this.lastPageIndex-1);for(var s=i;s<=n;s++)t.push({index:s,selected:s===this.currentPage});this.$.lastPage.style.display=this.lastPageIndex>1?"inline-block":"none",this.$.startEllipsis.style.display=i>2?"inline-block":"none",this.$.stopEllipsis.style.display=n<this.lastPageIndex-1?"inline-block":"none",this.pages=t}previous(){this._fireNav({page:this.currentPage-1,startIndex:(this.currentPage-2)*this.itemsPerPage})}next(){this._fireNav({page:this.currentPage+1,startIndex:this.currentPage*this.itemsPerPage})}_selectPage(t){if("keyup"!==t.type||13===t.which){var e=parseInt(t.currentTarget.innerHTML);this._fireNav({page:e,startIndex:(e-1)*this.itemsPerPage})}}previousSection(){var t=Math.floor(this.numShownPages/2)+1,e=this.pages[0].index-t;e<1&&(e=1),this._fireNav({page:e,startIndex:(e-1)*this.itemsPerPage})}nextSection(){var t=Math.floor(this.numShownPages/2)+1,e=this.pages[this.pages.length-1].index+t;e>this.lastPageIndex&&(e=this.lastPageIndex),this._fireNav({page:e,startIndex:(e-1)*this.itemsPerPage})}_fireNav(t){this.dispatchEvent(new CustomEvent("nav",{detail:t}))}}window.customElements.define("cork-pagination",o)},162:function(t,e){t.exports='<style>\n  :host {\n    display: block;\n  }\n\n  #root {\n    display: flex;\n    align-items: center;\n  }\n\n  .ellipsis {\n    display: none;\n  }\n\n  paper-icon-button {\n    color: var(--cork-color, --default-primary-color);\n    border: 2px solid transparent;\n    border-radius: 20px;\n  }\n  paper-icon-button[disabled] {\n     color: var(--cork-disabled-color, var(--disabled-color, #ccc));\n  }\n\n  a {\n    color: var(--cork-color, --default-primary-color);\n    cursor: pointer;\n    text-align: center;\n    min-width: 20px;\n    border-radius: 25px;\n    display: inline-block;\n    padding: 5px;\n    margin: 0 3px;\n    font-size: 14px;\n    line-height: 20px;\n    border: 2px solid transparent;\n  }\n\n  a:hover {\n    background: var(--cork-background-color-light, var(--light-background-color, #eee));\n  }\n\n  a[selected] {\n    background: var(--cork-background-color, var(--medium-background-color, #ccc));\n    color: white;\n  }\n\n  a:focus, paper-icon-button:focus {\n    outline: none;\n    border : 2px dotted var(--default-secondary-color);\n  }\n\n  [hidden] {\n    display: none;\n  }\n\n  .text-display {\n    font-style: italic;\n  }\n\n  .xsm-lastpage {\n    display: none;\n  }\n\n  @media (max-width: 500px) {\n    .ellipsis, .single:not([selected]) {\n      display: none !important;\n    }\n    .xsm-lastpage {\n      display: inline;\n    }\n    a[selected] {\n      color: var(--default-text-color, \'black\');\n      background: transparent;\n    }\n  }\n</style>\n\n<div id="root">\n  <paper-icon-button tabindex="0" disabled$="[[firstPage]]" icon="arrow-back" on-click="previous"></paper-icon-button>\n\n  <div style="flex:1"></div>\n\n  <div hidden$="[[loading]]">\n    <div hidden$="[[!textMode]]" class="text-display">[[textDisplay]]</div>\n  </div>\n\n  <div hidden$="[[textMode]]">\n    <a selected$="[[firstPage]]" class="single" tabindex="0" on-click="_selectPage" on-keyup="_selectPage">\n      1<span class="xsm-lastpage"> / [[lastPageIndex]]</span>\n    </a>\n    <a id="startEllipsis" class="ellipsis" tabindex="0" on-click="previousSection" on-keyup="_selectPage">...</a>\n\n    <template is="dom-repeat" items="[[pages]]">\n      <a class="single" selected$="[[item.selected]]" tabindex="0" on-click="_selectPage" on-keyup="_selectPage">\n        [[item.index]]<span class="xsm-lastpage"> / [[lastPageIndex]]</span>\n      </a>\n    </template>\n\n    <a id="stopEllipsis" class="ellipsis" tabindex="0" on-click="nextSection" on-keyup="_selectPage">...</a>\n    <a id="lastPage" class="single" selected$="[[lastPage]]" tabindex="0" on-click="_selectPage" on-keyup="_selectPage">\n      [[lastPageIndex]]<span class="xsm-lastpage"> / [[lastPageIndex]]</span>\n    </a>\n  </div>\n\n  <div style="flex:1"></div>\n\n  <paper-icon-button disabled$="[[lastPage]]" tabindex="0" icon="arrow-forward" on-click="next"></paper-icon-button>\n</div>'},168:function(t,e,i){"use strict";var n=i(4),s=(i(41),i(72),i(169)),a=i.n(s);class o extends n.a{static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},label:{type:String,value:""}}}static get template(){let t=document.createElement("template");return t.innerHTML=a.a,t}open(){for(var t=5,e=0;e<this.children.length;e++)t+=this.children[e].offsetHeight;this.$.content.style.height=t+"px",this.opened=!0}close(){this.$.content.style.height="0px",this.opened=!1}toggle(){this.opened?this.close():this.open()}}customElements.define("cork-toggle-panel",o)},169:function(t,e){t.exports='<style>\n  :host {\n    display: block;\n  }\n\n  #label {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    @apply --cork-toggle-panel-label;\n  }\n\n  #content {\n    overflow: hidden;\n    height: 0;\n    transition: height 250ms ease-out;\n    @apply --cork-toggle-panel-content;\n  }\n\n  iron-icon {\n    color: var(--cork-drop-down-arrow-color, #912046);\n    transform: rotateX(0);\n    transition: transform 250ms ease-out;\n  }\n\n  iron-icon[closed] {\n    transform: rotate(-90deg);\n  }\n\n</style>\n\n<div id="label" on-click="toggle">\n  <div style="flex:1">[[label]]</div>\n  <iron-icon icon="arrow-drop-down" closed$="[[!opened]]"></iron-icon>\n</div>\n\n<div id="content">\n  <slot></slot>\n</div>'},200:function(t,e,i){"use strict";i(7);var n=i(9),s=i(5);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const a=Object(n.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){a.instance||(a.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async((function(){this._text=t}),100)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});a.instance=null,a.requestAvailability=function(){a.instance||(a.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(a.instance)};var o=i(152),l=i(2);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
if(
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(n.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[o.a],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){a.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Object(l.b)(this).observeNodes(function(t){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Object(l.b)(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/}return t},_bindValueChanged:function(t,e){e&&(void 0===t?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=8==t.keyCode||9==t.keyCode||13==t.keyCode||27==t.keyCode,i=19==t.keyCode||20==t.keyCode||45==t.keyCode||46==t.keyCode||144==t.keyCode||145==t.keyCode||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!(e||0==t.charCode&&i)},_onKeypress:function(t){if(this.allowedPattern||"number"===this.inputElement.type){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(i)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&""===this.bindValue?t=!1:this.hasValidator()&&(t=o.a.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}}),!window.polymerSkipLoadingFontRoboto){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(t)}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const r=s.a`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;r.setAttribute("style","display: none;"),document.head.appendChild(r.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const c={attached:function(){this.fire("addon-attached")},update:function(t){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(n.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[c],properties:{_charCounterStr:{type:String,value:"0"}},update:function(t){if(t.inputElement){t.value=t.value||"";var e=t.value.toString().length.toString();t.inputElement.hasAttribute("maxlength")&&(e+="/"+t.inputElement.getAttribute("maxlength")),this._charCounterStr=e}}});i(52),i(70);var h=i(16);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const d=s.a`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;d.setAttribute("style","display: none;"),document.head.appendChild(d.content),Object(n.a)({_template:s.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class\$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class\$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class\$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return Object(h.b)(this.attrForValue)},get _inputElement(){return Object(l.b)(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(t){this._addons||(this._addons=[]);var e=t.target;-1===this._addons.indexOf(e)&&(this._addons.push(e),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(t){this._handleValueAndAutoValidate(t.target)},_onValueChanged:function(t){var e=t.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===e.value||""===e.value)||this._handleValueAndAutoValidate(t.target)},_handleValue:function(t){var e=this._inputElementValue;e||0===e||"number"===t.type&&!t.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:t,value:e,invalid:this.invalid})},_handleValueAndAutoValidate:function(t){var e;this.autoValidate&&t&&(e=t.validate?t.validate(this._inputElementValue):t.checkValidity(),this.invalid=!e);this._handleValue(t)},_onIronInputValidate:function(t){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(t){for(var e,i=0;e=this._addons[i];i++)e.update(t)},_computeInputContentClass:function(t,e,i,n,s){var a="input-content";if(t)s&&(a+=" label-is-hidden"),n&&(a+=" is-invalid");else{var o=this.querySelector("label");e||s?(a+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?a+=" is-invalid":i&&(a+=" label-is-highlighted")):(o&&(this.$.labelAndInputContainer.style.position="relative"),n&&(a+=" is-invalid"))}return i&&(a+=" focused"),a},_computeUnderlineClass:function(t,e){var i="underline";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(t,e){var i="add-on-content";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(n.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      };
    </style>

    <slot></slot>
`,is:"paper-input-error",behaviors:[c],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(t){this._setInvalid(t.invalid)}});var p=i(153),u=(i(29),i(35)),_=i(42),f=i(4);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const m={NextLabelID:1,NextAddonID:1,NextInputID:1},b={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!f.a&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(t,e){return t=t?t+" "+e:e},_onAddonAttached:function(t){var e=Object(l.b)(t).rootTarget;if(e.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,e.id);else{var i="paper-input-add-on-"+m.NextAddonID++;e.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(t){_.a._focusBlurHandler.call(this,t),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",e),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(t){try{var e=this.inputElement.selectionStart;this.value=t,this.inputElement.selectionStart=e,this.inputElement.selectionEnd=e}catch(e){this.value=t}},_computeAlwaysFloatLabel:function(t,e){return e||t},_updateAriaLabelledBy:function(){var t,e=Object(l.b)(this.root).querySelector("label");e?(e.id?t=e.id:(t="paper-input-label-"+m.NextLabelID++,e.id=t),this._ariaLabelledBy=t):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+m.NextInputID++)},_onChange:function(t){this.shadowRoot&&this.fire(t.type,{sourceEvent:t},{node:this,bubbles:t.bubbles,cancelable:t.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var t=document.activeElement;t instanceof HTMLElement&&t!==document.body&&t!==document.documentElement||this._focusableElement.focus()}}},y=[_.a,u.a,b];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(n.a)({is:"paper-input",_template:s.a`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate\$="[[autoValidate]]" disabled\$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden\$="[[!label]]" aria-hidden="true" for\$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id\$="[[_inputId]]" maxlength\$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby\$="[[_ariaLabelledBy]]" aria-describedby\$="[[_ariaDescribedBy]]" disabled\$="[[disabled]]" title\$="[[title]]" type\$="[[type]]" pattern\$="[[pattern]]" required\$="[[required]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]" min\$="[[min]]" max\$="[[max]]" step\$="[[step]]" name\$="[[name]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" list\$="[[list]]" size\$="[[size]]" autocapitalize\$="[[autocapitalize]]" autocorrect\$="[[autocorrect]]" on-change="_onChange" tabindex\$="[[tabIndex]]" autosave\$="[[autosave]]" results\$="[[results]]" accept\$="[[accept]]" multiple\$="[[multiple]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[y,p.a],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}})},201:function(t,e,i){"use strict";i(7),i(52),i(41),i(142),i(73),i(34);var n=i(5);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=n.a`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(s.content);var a=i(25),o=i(42),l=i(53),r=i(9),c=i(2);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Object(r.a)({_template:n.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-flex-auto;

        position: relative;
        padding: 0 12px;
        overflow: hidden;
        cursor: pointer;
        vertical-align: middle;

        @apply --paper-font-common-base;
        @apply --paper-tab;
      }

      :host(:focus) {
        outline: none;
      }

      :host([link]) {
        padding: 0;
      }

      .tab-content {
        height: 100%;
        transform: translateZ(0);
          -webkit-transform: translateZ(0);
        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);
        @apply --layout-horizontal;
        @apply --layout-center-center;
        @apply --layout-flex-auto;
        @apply --paper-tab-content;
      }

      :host(:not(.iron-selected)) > .tab-content {
        opacity: 0.8;

        @apply --paper-tab-content-unselected;
      }

      :host(:focus) .tab-content {
        opacity: 1;
        font-weight: 700;
      }

      paper-ripple {
        color: var(--paper-tab-ink, var(--paper-yellow-a100));
      }

      .tab-content > ::slotted(a) {
        @apply --layout-flex-auto;

        height: 100%;
      }
    </style>

    <div class="tab-content">
      <slot></slot>
    </div>
`,is:"paper-tab",behaviors:[o.a,a.a,l.a],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var t=Object(c.b)(this).parentNode;return!!t&&!!t.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(t){if(this.link){var e=this.queryEffectiveChildren("a");if(!e)return;if(t.target===e)return;e.click()}}});var h=i(35),d=i(55);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const p={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(t){this.multi?this._toggleSelected(t):this.selected=t},multiChanged:function(t){this._selection.multi=t,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map((function(t){return this._indexToValue(this.indexOf(t))}),this).filter((function(t){return null!=t}),this)):d.a._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(t){t=t||[];var e=(this._valuesToItems(t)||[]).filter((function(t){return null!=t}));this._selection.clear(e);for(var i=0;i<e.length;i++)this._selection.setItemSelected(e[i],!0);this.fallbackSelection&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))},_selectionChange:function(){var t=this._selection.get();this.multi?(this._setSelectedItems(t),this._setSelectedItem(t.length?t[0]:null)):null!=t?(this._setSelectedItems([t]),this._setSelectedItem(t)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(t){var e=this.selectedValues.indexOf(t);e<0?this.push("selectedValues",t):this.splice("selectedValues",e,1)},_valuesToItems:function(t){return null==t?null:t.map((function(t){return this._valueToItem(t)}),this)}},u=[d.a,p],_={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(t){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var e=this._valueToItem(t);e&&e.hasAttribute("disabled")||(this._setFocusedItem(e),p.select.apply(this,arguments))},_resetTabindices:function(){var t=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach((function(e){e.setAttribute("tabindex",e===t?"0":"-1"),e.setAttribute("aria-selected",this._selection.isSelected(e))}),this)},_updateMultiselectable:function(t){t?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(t){if(-1===this._MODIFIER_KEYS.indexOf(t.key)){this.cancelDebouncer("_clearSearchText");for(var e,i=this._searchText||"",n=(i+=(t.key&&1==t.key.length?t.key:String.fromCharCode(t.keyCode)).toLocaleLowerCase()).length,s=0;e=this.items[s];s++)if(!e.hasAttribute("disabled")){var a=this.attrForItemTitle||"textContent",o=(e[a]||e.getAttribute(a)||"").trim();if(!(o.length<n)&&o.slice(0,n).toLocaleLowerCase()==i){this._setFocusedItem(e);break}}this._searchText=i,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var t=this.items.length,e=Number(this.indexOf(this.focusedItem)),i=1;i<t+1;i++){var n=this.items[(e-i+t)%t];if(!n.hasAttribute("disabled")){var s=Object(c.b)(n).getOwnerRoot()||document;if(this._setFocusedItem(n),Object(c.b)(s).activeElement==n)return}}},_focusNext:function(){for(var t=this.items.length,e=Number(this.indexOf(this.focusedItem)),i=1;i<t+1;i++){var n=this.items[(e+i)%t];if(!n.hasAttribute("disabled")){var s=Object(c.b)(n).getOwnerRoot()||document;if(this._setFocusedItem(n),Object(c.b)(s).activeElement==n)return}}},_applySelection:function(t,e){e?t.setAttribute("aria-selected","true"):t.setAttribute("aria-selected","false"),d.a._applySelection.apply(this,arguments)},_focusedItemChanged:function(t,e){e&&e.setAttribute("tabindex","-1"),!t||t.hasAttribute("disabled")||this.disabled||(t.setAttribute("tabindex","0"),t.focus())},_onIronItemsChanged:function(t){t.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");_._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",e),_._shiftTabPressed=!1}),1)},_onFocus:function(t){if(!_._shiftTabPressed){var e=Object(c.b)(t).rootTarget;(e===this||void 0===e.tabIndex||this.isLightDescendant(e))&&(this._defaultFocusAsync=this.async((function(){var t=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),t?this._setFocusedItem(t):this.items[0]&&this._focusNext()})))}},_onUpKey:function(t){this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onEscKey:function(t){var e=this.focusedItem;e&&e.blur()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down esc")||this._focusWithKeyboardEvent(t),t.stopPropagation()},_activateHandler:function(t){d.a._activateHandler.call(this,t),t.stopPropagation()},_disabledChanged:function(t){t?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)},_shiftTabPressed:!1},f=[[u,h.a,_],{hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(t){this._isRTL?this._focusNext():this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onRightKey:function(t){this._isRTL?this._focusPrevious():this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down left right esc")||this._focusWithKeyboardEvent(t)}}];var m=i(54);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Object(r.a)({_template:n.a`
    <style>
      :host {
        @apply --layout;
        @apply --layout-center;

        height: 48px;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        @apply --paper-tabs;
      }

      :host(:dir(rtl)) {
        @apply --layout-horizontal-reverse;
      }

      #tabsContainer {
        position: relative;
        height: 100%;
        white-space: nowrap;
        overflow: hidden;
        @apply --layout-flex-auto;
        @apply --paper-tabs-container;
      }

      #tabsContent {
        height: 100%;
        -moz-flex-basis: auto;
        -ms-flex-basis: auto;
        flex-basis: auto;
        @apply --paper-tabs-content;
      }

      #tabsContent.scrollable {
        position: absolute;
        white-space: nowrap;
      }

      #tabsContent:not(.scrollable),
      #tabsContent.scrollable.fit-container {
        @apply --layout-horizontal;
      }

      #tabsContent.scrollable.fit-container {
        min-width: 100%;
      }

      #tabsContent.scrollable.fit-container > ::slotted(*) {
        /* IE - prevent tabs from compressing when they should scroll. */
        -ms-flex: 1 0 auto;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
      }

      .hidden {
        display: none;
      }

      .not-visible {
        opacity: 0;
        cursor: default;
      }

      paper-icon-button {
        width: 48px;
        height: 48px;
        padding: 12px;
        margin: 0 4px;
      }

      #selectionBar {
        position: absolute;
        height: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));
          -webkit-transform: scale(0);
        transform: scale(0);
          -webkit-transform-origin: left center;
        transform-origin: left center;
          transition: -webkit-transform;
        transition: transform;

        @apply --paper-tabs-selection-bar;
      }

      #selectionBar.align-bottom {
        top: 0;
        bottom: auto;
      }

      #selectionBar.expand {
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
      }

      #selectionBar.contract {
        transition-duration: 0.18s;
        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
      }

      #tabsContent > ::slotted(:not(#selectionBar)) {
        height: 100%;
      }
    </style>

    <paper-icon-button icon="paper-tabs:chevron-left" class\$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>

    <div id="tabsContainer" on-track="_scroll" on-down="_down">
      <div id="tabsContent" class\$="[[_computeTabsContentClass(scrollable, fitContainer)]]">
        <div id="selectionBar" class\$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>
        <slot></slot>
      </div>
    </div>

    <paper-icon-button icon="paper-tabs:chevron-right" class\$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>
`,is:"paper-tabs",behaviors:[m.a,f],properties:{noink:{type:Boolean,value:!1,observer:"_noinkChanged"},noBar:{type:Boolean,value:!1},noSlide:{type:Boolean,value:!1},scrollable:{type:Boolean,value:!1},fitContainer:{type:Boolean,value:!1},disableDrag:{type:Boolean,value:!1},hideScrollButtons:{type:Boolean,value:!1},alignBottom:{type:Boolean,value:!1},selectable:{type:String,value:"paper-tab"},autoselect:{type:Boolean,value:!1},autoselectDelay:{type:Number,value:0},_step:{type:Number,value:10},_holdDelay:{type:Number,value:1},_leftHidden:{type:Boolean,value:!1},_rightHidden:{type:Boolean,value:!1},_previousTab:{type:Object}},hostAttributes:{role:"tablist"},listeners:{"iron-resize":"_onTabSizingChanged","iron-items-changed":"_onTabSizingChanged","iron-select":"_onIronSelect","iron-deselect":"_onIronDeselect"},keyBindings:{"left:keyup right:keyup":"_onArrowKeyup"},created:function(){this._holdJob=null,this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,this._bindDelayedActivationHandler=this._delayedActivationHandler.bind(this),this.addEventListener("blur",this._onBlurCapture.bind(this),!0)},ready:function(){this.setScrollDirection("y",this.$.tabsContainer)},detached:function(){this._cancelPendingActivation()},_noinkChanged:function(t){Object(c.b)(this).querySelectorAll("paper-tab").forEach(t?this._setNoinkAttribute:this._removeNoinkAttribute)},_setNoinkAttribute:function(t){t.setAttribute("noink","")},_removeNoinkAttribute:function(t){t.removeAttribute("noink")},_computeScrollButtonClass:function(t,e,i){return!e||i?"hidden":t?"not-visible":""},_computeTabsContentClass:function(t,e){return t?"scrollable"+(e?" fit-container":""):" fit-container"},_computeSelectionBarClass:function(t,e){return t?"hidden":e?"align-bottom":""},_onTabSizingChanged:function(){this.debounce("_onTabSizingChanged",(function(){this._scroll(),this._tabChanged(this.selectedItem)}),10)},_onIronSelect:function(t){this._tabChanged(t.detail.item,this._previousTab),this._previousTab=t.detail.item,this.cancelDebouncer("tab-changed")},_onIronDeselect:function(t){this.debounce("tab-changed",(function(){this._tabChanged(null,this._previousTab),this._previousTab=null}),1)},_activateHandler:function(){this._cancelPendingActivation(),_._activateHandler.apply(this,arguments)},_scheduleActivation:function(t,e){this._pendingActivationItem=t,this._pendingActivationTimeout=this.async(this._bindDelayedActivationHandler,e)},_delayedActivationHandler:function(){var t=this._pendingActivationItem;this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,t.fire(this.activateEvent,null,{bubbles:!0,cancelable:!0})},_cancelPendingActivation:function(){void 0!==this._pendingActivationTimeout&&(this.cancelAsync(this._pendingActivationTimeout),this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0)},_onArrowKeyup:function(t){this.autoselect&&this._scheduleActivation(this.focusedItem,this.autoselectDelay)},_onBlurCapture:function(t){t.target===this._pendingActivationItem&&this._cancelPendingActivation()},get _tabContainerScrollSize(){return Math.max(0,this.$.tabsContainer.scrollWidth-this.$.tabsContainer.offsetWidth)},_scroll:function(t,e){if(this.scrollable){var i=e&&-e.ddx||0;this._affectScroll(i)}},_down:function(t){this.async((function(){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null)}),1)},_affectScroll:function(t){this.$.tabsContainer.scrollLeft+=t;var e=this.$.tabsContainer.scrollLeft;this._leftHidden=0===e,this._rightHidden=e===this._tabContainerScrollSize},_onLeftScrollButtonDown:function(){this._scrollToLeft(),this._holdJob=setInterval(this._scrollToLeft.bind(this),this._holdDelay)},_onRightScrollButtonDown:function(){this._scrollToRight(),this._holdJob=setInterval(this._scrollToRight.bind(this),this._holdDelay)},_onScrollButtonUp:function(){clearInterval(this._holdJob),this._holdJob=null},_scrollToLeft:function(){this._affectScroll(-this._step)},_scrollToRight:function(){this._affectScroll(this._step)},_tabChanged:function(t,e){if(!t)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(0,0);var i=this.$.tabsContent.getBoundingClientRect(),n=i.width,s=t.getBoundingClientRect(),a=s.left-i.left;if(this._pos={width:this._calcPercent(s.width,n),left:this._calcPercent(a,n)},this.noSlide||null==e)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(this._pos.width,this._pos.left);var o=e.getBoundingClientRect(),l=this.items.indexOf(e),r=this.items.indexOf(t);this.$.selectionBar.classList.add("expand");var c=l<r;this._isRTL&&(c=!c),c?this._positionBar(this._calcPercent(s.left+s.width-o.left,n)-5,this._left):this._positionBar(this._calcPercent(o.left+o.width-s.left,n)-5,this._calcPercent(a,n)+5),this.scrollable&&this._scrollToSelectedIfNeeded(s.width,a)},_scrollToSelectedIfNeeded:function(t,e){var i=e-this.$.tabsContainer.scrollLeft;i<0?this.$.tabsContainer.scrollLeft+=i:(i+=t-this.$.tabsContainer.offsetWidth)>0&&(this.$.tabsContainer.scrollLeft+=i)},_calcPercent:function(t,e){return 100*t/e},_positionBar:function(t,e){t=t||0,e=e||0,this._width=t,this._left=e,this.transform("translateX("+e+"%) scaleX("+t/100+")",this.$.selectionBar)},_onBarTransitionEnd:function(t){var e=this.$.selectionBar.classList;e.contains("expand")?(e.remove("expand"),e.add("contract"),this._positionBar(this._pos.width,this._pos.left)):e.contains("contract")&&e.remove("contract")}})},202:function(t,e,i){"use strict";i(7),i(70);var n=i(153),s=i(152);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const a={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(t){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){void 0!==this.value&&null!==this.value||(this.value="on")}},o=[n.a,s.a,a];var l=i(143),r=i(53);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const c={_checkedChanged:function(){a._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){r.a._buttonStateChanged.call(this),this.disabled||this.isAttached&&(this.checked=this.active)}},h=[l.a,o,c];var d=i(9),p=i(5),u=i(76);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const _=p.a`<style>
  :host {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
    /* -1px is a sentinel for the default and is replaced in \`attached\`. */
    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
    @apply --paper-font-common-base;
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:focus) {
    outline: none;
  }

  .hidden {
    display: none;
  }

  #checkboxContainer {
    display: inline-block;
    position: relative;
    width: var(--calculated-paper-checkbox-size);
    height: var(--calculated-paper-checkbox-size);
    min-width: var(--calculated-paper-checkbox-size);
    margin: var(--paper-checkbox-margin, initial);
    vertical-align: var(--paper-checkbox-vertical-align, middle);
    background-color: var(--paper-checkbox-unchecked-background-color, transparent);
  }

  #ink {
    position: absolute;

    /* Center the ripple in the checkbox by negative offsetting it by
     * (inkWidth - rippleWidth) / 2 */
    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    width: var(--calculated-paper-checkbox-ink-size);
    height: var(--calculated-paper-checkbox-ink-size);
    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
  }

  #ink:dir(rtl) {
    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: auto;
  }

  #ink[checked] {
    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
  }

  #checkbox {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: solid 2px;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    border-radius: 2px;
    pointer-events: none;
    -webkit-transition: background-color 140ms, border-color 140ms;
    transition: background-color 140ms, border-color 140ms;
  }

  /* checkbox checked animations */
  #checkbox.checked #checkmark {
    -webkit-animation: checkmark-expand 140ms ease-out forwards;
    animation: checkmark-expand 140ms ease-out forwards;
  }

  @-webkit-keyframes checkmark-expand {
    0% {
      -webkit-transform: scale(0, 0) rotate(45deg);
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(45deg);
    }
  }

  @keyframes checkmark-expand {
    0% {
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      transform: scale(1, 1) rotate(45deg);
    }
  }

  #checkbox.checked {
    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
    border-color: var(--paper-checkbox-checked-color, var(--primary-color));
  }

  #checkmark {
    position: absolute;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-color: var(--paper-checkbox-checkmark-color, white);
    -webkit-transform-origin: 97% 86%;
    transform-origin: 97% 86%;
    box-sizing: content-box; /* protect against page-level box-sizing */
  }

  #checkmark:dir(rtl) {
    -webkit-transform-origin: 50% 14%;
    transform-origin: 50% 14%;
  }

  /* label */
  #checkboxLabel {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: var(--paper-checkbox-label-spacing, 8px);
    white-space: normal;
    line-height: normal;
    color: var(--paper-checkbox-label-color, var(--primary-text-color));
    @apply --paper-checkbox-label;
  }

  :host([checked]) #checkboxLabel {
    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
    @apply --paper-checkbox-label-checked;
  }

  #checkboxLabel:dir(rtl) {
    padding-right: var(--paper-checkbox-label-spacing, 8px);
    padding-left: 0;
  }

  #checkboxLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #checkbox {
    opacity: 0.5;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
  }

  :host([disabled][checked]) #checkbox {
    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #checkboxLabel  {
    opacity: 0.65;
  }

  /* invalid state */
  #checkbox.invalid:not(.checked) {
    border-color: var(--paper-checkbox-error-color, var(--error-color));
  }
</style>

<div id="checkboxContainer">
  <div id="checkbox" class\$="[[_computeCheckboxClass(checked, invalid)]]">
    <div id="checkmark" class\$="[[_computeCheckmarkClass(checked)]]"></div>
  </div>
</div>

<div id="checkboxLabel"><slot></slot></div>`;_.setAttribute("strip-whitespace",""),Object(d.a)({_template:_,is:"paper-checkbox",behaviors:[h],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(u.a)(this,(function(){if("-1px"===this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim()){var t=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),e="px",i=t.match(/[A-Za-z]+$/);null!==i&&(e=i[0]);var n=parseFloat(t),s=8/3*n;"px"===e&&(s=Math.floor(s))%2!=n%2&&s++,this.updateStyles({"--paper-checkbox-ink-size":s+e})}}))},_computeCheckboxClass:function(t,e){var i="";return t&&(i+="checked "),e&&(i+="invalid"),i},_computeCheckmarkClass:function(t){return t?"":"hidden"},_createRipple:function(){return this._rippleContainer=this.$.checkboxContainer,l.b._createRipple.call(this)}})},203:function(t,e,i){"use strict";i(7),i(35);var n=i(54),s=i(2);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const a={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(t,e){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),e)if("document"===t)this.scrollTarget=this._doc;else if("string"==typeof t){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[t]:Object(s.b)(this.ownerDocument).querySelector("#"+t)}else this._isValidScrollTarget()&&(this._oldScrollTarget=t,this._toggleScrollListener(this._shouldHaveListener,t))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(t){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=t)},set _scrollLeft(t){this.scrollTarget===this._doc?window.scrollTo(t,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t)},scroll:function(t,e){var i;"object"==typeof t?(i=t.left,e=t.top):i=t,i=i||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(i,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(t,e){var i=e===this._doc?window:e;t?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(t){this._shouldHaveListener=t,this._toggleScrollListener(t,this.scrollTarget)}};var o=i(78),l=i(9),r=i(77),c=i(10),h=i(14),d=i(17),p=i(5),u=i(1),_=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),f=_&&_[1]>=8,m=null!=d.b,b=m?c.a:0,y=m?c.b:1,v=m?c.c:2;o.a||(Polymer.OptionalMutableDataBehavior={}),Object(l.a)({_template:p.a`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[r.a,n.a,a,o.a],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_collection:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _itemsParent(){return Object(s.b)(Object(s.b)(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var t=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,t-this._physicalCount)},set _virtualStart(t){t=this._clamp(t,0,this._maxVirtualStart),this.grid&&(t-=t%this._itemsPerRow),this._virtualStartVal=t},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(t){(t%=this._physicalCount)<0&&(t=this._physicalCount+t),this.grid&&(t-=t%this._itemsPerRow),this._physicalStartVal=t},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(t){this._physicalCountVal=t},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var t=this._firstVisibleIndexVal;if(null==t){var e=this._physicalTop+this._scrollOffset;t=this._iterateItems((function(t,i){return(e+=this._getPhysicalSizeIncrement(t))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=t}return t},get lastVisibleIndex(){var t=this._lastVisibleIndexVal;if(null==t){if(this.grid)t=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var e=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,n){e<this._scrollBottom&&(t=n),e+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=t}return t},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,b),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(t){this.style.webkitOverflowScrolling=t===this?"touch":"",this.style.overflowY=t===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,b)},updateViewportBoundaries:function(){var t=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=Boolean("rtl"===t.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var t=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),e=t-this._scrollPosition,i=e>=0;if(this._scrollPosition=t,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(e)>this._physicalSize&&this._physicalSize>0){e-=this._scrollOffset;var n=Math.round(e/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+n,this._physicalStart=this._physicalStart+n,this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._update()}else if(this._physicalCount>0){var s=this._getReusables(i);i?(this._physicalTop=s.physicalTop,this._virtualStart=this._virtualStart+s.indexes.length,this._physicalStart=this._physicalStart+s.indexes.length):(this._virtualStart=this._virtualStart-s.indexes.length,this._physicalStart=this._physicalStart-s.indexes.length),this._update(s.indexes,i?null:s.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),v)}},_getReusables:function(t){var e,i,n,s=[],a=this._hiddenContentSize*this._ratio,o=this._virtualStart,l=this._virtualEnd,r=this._physicalCount,c=this._physicalTop+this._scrollOffset,h=this._physicalBottom+this._scrollOffset,d=this._scrollTop,p=this._scrollBottom;for(t?(e=this._physicalStart,this._physicalEnd,i=d-c):(e=this._physicalEnd,this._physicalStart,i=h-p);i-=n=this._getPhysicalSizeIncrement(e),!(s.length>=r||i<=a);)if(t){if(l+s.length+1>=this._virtualCount)break;if(c+n>=d-this._scrollOffset)break;s.push(e),c+=n,e=(e+1)%r}else{if(o-s.length<=0)break;if(c+this._physicalSize-n<=p)break;s.push(e),c-=n,e=0===e?r-1:e-1}return{indexes:s,physicalTop:c-this._scrollOffset}},_update:function(t,e){if(!(t&&0===t.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(t),this._updateMetrics(t),e)for(;e.length;){var i=e.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(t){var e,i;this._ensureTemplatized();var n=new Array(t);for(e=0;e<t;e++)i=this.stamp(null),n[e]=i.root.querySelector("*"),this._itemsParent.appendChild(i.root);return n},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(t){var e=this._clamp(this._physicalCount+t,3,this._virtualCount-this._virtualStart);if(e=this._convertIndexToCompleteRow(e),this.grid){var i=e%this._itemsPerRow;i&&e-i<=this._physicalCount&&(e+=this._itemsPerRow),e-=i}var n=e-this._physicalCount,s=Math.round(.5*this._physicalCount);if(!(n<0)){if(n>0){var a=window.performance.now();[].push.apply(this._physicalItems,this._createPool(n));for(var o=0;o<n;o++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+n,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+n),this._update(),this._templateCost=(window.performance.now()-a)/n,s=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===s||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,s)),y):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,s),v))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var t=this._getReusables(!0);this._physicalTop=t.physicalTop,this._virtualStart=this._virtualStart+t.indexes.length,this._physicalStart=this._physicalStart+t.indexes.length,this._update(t.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var t={__key__:!0};t[this.as]=!0,t[this.indexAs]=!0,t[this.selectedAs]=!0,t.tabIndex=!0,this._instanceProps=t,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(t,e){void 0!==e&&(this.notifyResize(),d.b?Object(d.b)():Object(s.c)(),t&&this._updateGridMetrics())},_itemsChanged:function(t){if("items"===t.path)this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._collection=(this.items,null),this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,b);else if("items.splices"===t.path){if(this._adjustVirtualIndex(t.value.indexSplices),this._virtualCount=this.items?this.items.length:0,t.value.indexSplices.some((function(t){return t.addedCount>0||t.removed.length>0}))){var e=this._getActiveElement();this.contains(e)&&e.blur()}var i=t.value.indexSplices.some((function(t){return t.index+t.addedCount>=this._virtualStart&&t.index<=this._virtualEnd}),this);this._isClientFull()&&!i||this._debounce("_render",this._render,b)}else"items.length"!==t.path&&this._forwardItemPath(t.path,t.value)},_forwardItemPath:function(t,e){var i,n,s,a=(t=t.slice(6)).indexOf(".");-1===a&&(a=t.length);var o=this.modelForElement(this._offscreenFocusedItem);if(m){var l=parseInt(t.substring(0,a),10);if((i=this._isIndexRendered(l))?(n=this._getPhysicalIndex(l),s=this.modelForElement(this._physicalItems[n])):o&&(s=o),!s||s[this.indexAs]!==l)return}else{var r=t.substring(0,a);if(o&&o.__key__===r)s=o;else if(n=this._physicalIndexForKey[r],!(s=this.modelForElement(this._physicalItems[n]))||s.__key__!==r)return}t=t.substring(a+1),t=this.as+(t?"."+t:""),m?s._setPendingPropertyOrPath(t,e,!1,!0):s.notifyPath(t,e,!0),s._flushProperties&&s._flushProperties(!0),i&&(this._updateMetrics([n]),this._positionItems(),this._updateScrollerSize())},_adjustVirtualIndex:function(t){t.forEach((function(t){if(t.removed.forEach(this._removeItem,this),t.index<this._virtualStart){var e=Math.max(t.addedCount-t.removed.length,t.index-this._virtualStart);this._virtualStart=this._virtualStart+e,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+e)}}),this)},_removeItem:function(t){this.$.selector.deselect(t),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===t&&this._removeFocusedItem()},_iterateItems:function(t,e){var i,n,s,a;if(2===arguments.length&&e){for(a=0;a<e.length;a++)if(i=e[a],n=this._computeVidx(i),null!=(s=t.call(this,i,n)))return s}else{for(i=this._physicalStart,n=this._virtualStart;i<this._physicalCount;i++,n++)if(null!=(s=t.call(this,i,n)))return s;for(i=0;i<this._physicalStart;i++,n++)if(null!=(s=t.call(this,i,n)))return s}},_computeVidx:function(t){return t>=this._physicalStart?this._virtualStart+(t-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+t},_assignModels:function(t){this._iterateItems((function(t,e){var i=this._physicalItems[t],n=this.items&&this.items[e];if(null!=n){var s=this.modelForElement(i);s.__key__=this._collection?this._collection.getKey(n):null,this._forwardProperty(s,this.as,n),this._forwardProperty(s,this.selectedAs,this.$.selector.isSelected(n)),this._forwardProperty(s,this.indexAs,e),this._forwardProperty(s,"tabIndex",this._focusedVirtualIndex===e?0:-1),this._physicalIndexForKey[s.__key__]=t,s._flushProperties&&s._flushProperties(!0),i.removeAttribute("hidden")}else i.setAttribute("hidden","")}),t)},_updateMetrics:function(t){d.b?Object(d.b)():Object(s.c)();var e=0,i=0,n=this._physicalAverageCount,a=this._physicalAverage;this._iterateItems((function(t,n){i+=this._physicalSizes[t],this._physicalSizes[t]=this._physicalItems[t].offsetHeight,e+=this._physicalSizes[t],this._physicalAverageCount+=this._physicalSizes[t]?1:0}),t),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+e-i,this._itemsPerRow=1),this._physicalAverageCount!==n&&(this._physicalAverage=Math.round((a*n+e)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var t=this._physicalTop;if(this.grid){var e=this._itemsPerRow*this._itemWidth,i=(this._viewportWidth-e)/2;this._iterateItems((function(e,n){var s=n%this._itemsPerRow,a=Math.floor(s*this._itemWidth+i);this._isRTL&&(a*=-1),this.translate3d(a+"px",t+"px",0,this._physicalItems[e]),this._shouldRenderNextRow(n)&&(t+=this._rowHeight)}))}else this._iterateItems((function(e,i){this.translate3d(0,t+"px",0,this._physicalItems[e]),t+=this._physicalSizes[e]}))},_getPhysicalSizeIncrement:function(t){return this.grid?this._computeVidx(t)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[t]},_shouldRenderNextRow:function(t){return t%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var t=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==t){this._physicalTop=this._physicalTop-t;var e=this._scrollTop;!f&&e>0&&this._resetScrollPosition(e-t)}},_resetScrollPosition:function(t){this.scrollTarget&&t>=0&&(this._scrollTop=t,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(t){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((t=(t=(t=t||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(t){return this.scrollToIndex(this.items.indexOf(t))},scrollToIndex:function(t){if(!("number"!=typeof t||t<0||t>this.items.length-1)&&(d.b?Object(d.b)():Object(s.c)(),0!==this._physicalCount)){t=this._clamp(t,0,this._virtualCount-1),(!this._isIndexRendered(t)||t>=this._maxVirtualStart)&&(this._virtualStart=this.grid?t-2*this._itemsPerRow:t-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var e=this._physicalStart,i=this._virtualStart,n=0,a=this._hiddenContentSize;i<t&&n<=a;)n+=this._getPhysicalSizeIncrement(e),e=(e+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+n),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null;Math.abs(this._viewportHeight-this._scrollTargetHeight);this.updateViewportBoundaries(),this._isVisible?(this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),b)},selectItem:function(t){return this.selectIndex(this.items.indexOf(t))},selectIndex:function(t){if(!(t<0||t>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(t)){var e=this.modelForElement(this._physicalItems[this._getPhysicalIndex(t)]);e&&(e[this.selectedAs]=!0),this.updateSizeForIndex(t)}this.$.selector.selectIndex?this.$.selector.selectIndex(t):this.$.selector.select(this.items[t])}},deselectItem:function(t){return this.deselectIndex(this.items.indexOf(t))},deselectIndex:function(t){if(!(t<0||t>=this._virtualCount)){if(this._isIndexRendered(t))this.modelForElement(this._physicalItems[this._getPhysicalIndex(t)])[this.selectedAs]=!1,this.updateSizeForIndex(t);this.$.selector.deselectIndex?this.$.selector.deselectIndex(t):this.$.selector.deselect(this.items[t])}},toggleSelectionForItem:function(t){return this.toggleSelectionForIndex(this.items.indexOf(t))},toggleSelectionForIndex:function(t){(this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(t):this.$.selector.isSelected(this.items[t]))?this.deselectIndex(t):this.selectIndex(t)},clearSelection:function(){this._iterateItems((function(t,e){this.modelForElement(this._physicalItems[t])[this.selectedAs]=!1})),this.$.selector.clearSelection()},_selectionEnabledChanged:function(t){(t?this.listen:this.unlisten).call(this,this,"tap","_selectionHandler")},_selectionHandler:function(t){var e=this.modelForElement(t.target);if(e){var i,n,a=Object(s.b)(t).path[0],o=this._getActiveElement(),l=this._physicalItems[this._getPhysicalIndex(e[this.indexAs])];"input"!==a.localName&&"button"!==a.localName&&"select"!==a.localName&&(i=e.tabIndex,e.tabIndex=-100,n=o?o.tabIndex:-1,e.tabIndex=i,o&&l!==o&&l.contains(o)&&-100!==n||this.toggleSelectionForItem(e[this.as]))}},_multiSelectionChanged:function(t){this.clearSelection(),this.$.selector.multi=t},updateSizeForItem:function(t){return this.updateSizeForIndex(this.items.indexOf(t))},updateSizeForIndex:function(t){return this._isIndexRendered(t)?(this._updateMetrics([this._getPhysicalIndex(t)]),this._positionItems(),null):null},_manageFocus:function(){var t=this._focusedVirtualIndex;t>=0&&t<this._virtualCount?this._isIndexRendered(t)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(t){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(t/this._itemsPerRow)*this._itemsPerRow:t},_isIndexRendered:function(t){return t>=this._virtualStart&&t<=this._virtualEnd},_isIndexVisible:function(t){return t>=this.firstVisibleIndex&&t<=this.lastVisibleIndex},_getPhysicalIndex:function(t){return m?(this._physicalStart+(t-this._virtualStart))%this._physicalCount:this._physicalIndexForKey[this._collection.getKey(this.items[t])]},focusItem:function(t){this._focusPhysicalItem(t)},_focusPhysicalItem:function(t){if(!(t<0||t>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(t)||this.scrollToIndex(t);var e,i=this._physicalItems[this._getPhysicalIndex(t)],n=this.modelForElement(i);n.tabIndex=-100,-100===i.tabIndex&&(e=i),e||(e=Object(s.b)(i).querySelector('[tabindex="-100"]')),n.tabIndex=0,this._focusedVirtualIndex=t,e&&e.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var t=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var e=this.stamp(null);this._focusBackfillItem=e.root.querySelector("*"),this._itemsParent.appendChild(e.root)}this._offscreenFocusedItem=this._physicalItems[t],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[t]=this._focusBackfillItem,this._focusedPhysicalIndex=t,this.translate3d(0,"-10000px",0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(this._offscreenFocusedItem&&!(this._focusedVirtualIndex<0)){this._assignModels();var t=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),e=this._physicalItems[t];if(e){var i=this.modelForElement(e),n=this.modelForElement(this._offscreenFocusedItem);i[this.as]===n[this.as]?(this._focusBackfillItem=e,i.tabIndex=-1,this._physicalItems[t]=this._offscreenFocusedItem,this.translate3d(0,"-10000px",0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(t){var e=this.modelForElement(t.target),i=this.modelForElement(this._focusedItem),n=null!==this._offscreenFocusedItem,s=this._focusedVirtualIndex;e&&(i===e?this._isIndexVisible(s)||this.scrollToIndex(s):(this._restoreFocusedItem(),i&&(i.tabIndex=-1),e.tabIndex=0,s=e[this.indexAs],this._focusedVirtualIndex=s,this._focusedPhysicalIndex=this._getPhysicalIndex(s),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],n&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(t){switch(t.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&t.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&t.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(t)}},_clamp:function(t,e,i){return Math.min(i,Math.max(e,t))},_debounce:function(t,e,i){m?(this._debouncers=this._debouncers||{},this._debouncers[t]=h.a.debounce(this._debouncers[t],i,e.bind(this)),Object(d.a)(this._debouncers[t])):Object(s.a)(this.debounce(t,e))},_forwardProperty:function(t,e,i){m?t._setPendingProperty(e,i):t[e]=i},_forwardHostPropV2:function(t,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).forwardHostProp(t,e)}),this)},_notifyInstancePropV2:function(t,e,i){if(Object(u.e)(this.as,e)){var n=t[this.indexAs];e==this.as&&(this.items[n]=i),this.notifyPath(Object(u.i)(this.as,"items."+n,e),i)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(t,e,i){0===e.indexOf(this.as+".")&&this.notifyPath("items."+t.__key__+"."+e.slice(this.as.length+1),i)},_forwardParentPath:function(t,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).notifyPath(t,e,!0)}),this)},_forwardParentProp:function(t,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&(this.modelForElement(i)[t]=e)}),this)},_getActiveElement:function(){var t=this._itemsParent.node.domHost;return Object(s.b)(t?t.root:document).activeElement}})}}]);