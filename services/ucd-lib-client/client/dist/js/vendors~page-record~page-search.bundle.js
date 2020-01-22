(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return a});n(3);var i=n(23),r=n(38),o=n(51);
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
const s={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=t)},_createRipple:function(){var t=o.a._createRipple();return t.id="ink",t.setAttribute("center",""),t.classList.add("circle"),t}},a=[i.a,r.a,o.a,s]},137:function(t,e,n){"use strict";n(3),n(50),n(37),n(142),n(70),n(30);var i=n(2);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=i["a"]`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(r.content);n(141);var o=n(31),s=n(52);
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
const a={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(t){this.multi?this._toggleSelected(t):this.selected=t},multiChanged:function(t){this._selection.multi=t,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map(function(t){return this._indexToValue(this.indexOf(t))},this).filter(function(t){return null!=t},this)):s.a._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(t){t=t||[];var e=(this._valuesToItems(t)||[]).filter(function(t){return null!==t&&void 0!==t});this._selection.clear(e);for(var n=0;n<e.length;n++)this._selection.setItemSelected(e[n],!0);this.fallbackSelection&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))},_selectionChange:function(){var t=this._selection.get();this.multi?(this._setSelectedItems(t),this._setSelectedItem(t.length?t[0]:null)):null!==t&&void 0!==t?(this._setSelectedItems([t]),this._setSelectedItem(t)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(t){var e=this.selectedValues.indexOf(t);e<0?this.push("selectedValues",t):this.splice("selectedValues",e,1)},_valuesToItems:function(t){return null==t?null:t.map(function(t){return this._valueToItem(t)},this)}},l=[s.a,a];var c=n(1);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const u={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(t){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var e=this._valueToItem(t);e&&e.hasAttribute("disabled")||(this._setFocusedItem(e),a.select.apply(this,arguments))},_resetTabindices:function(){var t=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach(function(e){e.setAttribute("tabindex",e===t?"0":"-1"),e.setAttribute("aria-selected",this._selection.isSelected(e))},this)},_updateMultiselectable:function(t){t?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(t){if(-1===this._MODIFIER_KEYS.indexOf(t.key)){this.cancelDebouncer("_clearSearchText");for(var e,n=this._searchText||"",i=(n+=(t.key&&1==t.key.length?t.key:String.fromCharCode(t.keyCode)).toLocaleLowerCase()).length,r=0;e=this.items[r];r++)if(!e.hasAttribute("disabled")){var o=this.attrForItemTitle||"textContent",s=(e[o]||e.getAttribute(o)||"").trim();if(!(s.length<i)&&s.slice(0,i).toLocaleLowerCase()==n){this._setFocusedItem(e);break}}this._searchText=n,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var t=this.items.length,e=Number(this.indexOf(this.focusedItem)),n=1;n<t+1;n++){var i=this.items[(e-n+t)%t];if(!i.hasAttribute("disabled")){var r=Object(c.b)(i).getOwnerRoot()||document;if(this._setFocusedItem(i),Object(c.b)(r).activeElement==i)return}}},_focusNext:function(){for(var t=this.items.length,e=Number(this.indexOf(this.focusedItem)),n=1;n<t+1;n++){var i=this.items[(e+n)%t];if(!i.hasAttribute("disabled")){var r=Object(c.b)(i).getOwnerRoot()||document;if(this._setFocusedItem(i),Object(c.b)(r).activeElement==i)return}}},_applySelection:function(t,e){e?t.setAttribute("aria-selected","true"):t.setAttribute("aria-selected","false"),s.a._applySelection.apply(this,arguments)},_focusedItemChanged:function(t,e){e&&e.setAttribute("tabindex","-1"),!t||t.hasAttribute("disabled")||this.disabled||(t.setAttribute("tabindex","0"),t.focus())},_onIronItemsChanged:function(t){t.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");u._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",e),u._shiftTabPressed=!1},1)},_onFocus:function(t){if(!u._shiftTabPressed){var e=Object(c.b)(t).rootTarget;(e===this||void 0===e.tabIndex||this.isLightDescendant(e))&&(this._defaultFocusAsync=this.async(function(){var t=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),t?this._setFocusedItem(t):this.items[0]&&this._focusNext()}))}},_onUpKey:function(t){this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onEscKey:function(t){var e=this.focusedItem;e&&e.blur()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down esc")||this._focusWithKeyboardEvent(t),t.stopPropagation()},_activateHandler:function(t){s.a._activateHandler.call(this,t),t.stopPropagation()},_disabledChanged:function(t){t?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)},_shiftTabPressed:!1},h=[[l,o.a,u],{hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(t){this._isRTL?this._focusNext():this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onRightKey:function(t){this._isRTL?this._focusPrevious():this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down left right esc")||this._focusWithKeyboardEvent(t)}}];var p=n(53),f=n(7);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Object(f.a)({_template:i["a"]`
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
`,is:"paper-tabs",behaviors:[p.a,h],properties:{noink:{type:Boolean,value:!1,observer:"_noinkChanged"},noBar:{type:Boolean,value:!1},noSlide:{type:Boolean,value:!1},scrollable:{type:Boolean,value:!1},fitContainer:{type:Boolean,value:!1},disableDrag:{type:Boolean,value:!1},hideScrollButtons:{type:Boolean,value:!1},alignBottom:{type:Boolean,value:!1},selectable:{type:String,value:"paper-tab"},autoselect:{type:Boolean,value:!1},autoselectDelay:{type:Number,value:0},_step:{type:Number,value:10},_holdDelay:{type:Number,value:1},_leftHidden:{type:Boolean,value:!1},_rightHidden:{type:Boolean,value:!1},_previousTab:{type:Object}},hostAttributes:{role:"tablist"},listeners:{"iron-resize":"_onTabSizingChanged","iron-items-changed":"_onTabSizingChanged","iron-select":"_onIronSelect","iron-deselect":"_onIronDeselect"},keyBindings:{"left:keyup right:keyup":"_onArrowKeyup"},created:function(){this._holdJob=null,this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,this._bindDelayedActivationHandler=this._delayedActivationHandler.bind(this),this.addEventListener("blur",this._onBlurCapture.bind(this),!0)},ready:function(){this.setScrollDirection("y",this.$.tabsContainer)},detached:function(){this._cancelPendingActivation()},_noinkChanged:function(t){Object(c.b)(this).querySelectorAll("paper-tab").forEach(t?this._setNoinkAttribute:this._removeNoinkAttribute)},_setNoinkAttribute:function(t){t.setAttribute("noink","")},_removeNoinkAttribute:function(t){t.removeAttribute("noink")},_computeScrollButtonClass:function(t,e,n){return!e||n?"hidden":t?"not-visible":""},_computeTabsContentClass:function(t,e){return t?"scrollable"+(e?" fit-container":""):" fit-container"},_computeSelectionBarClass:function(t,e){return t?"hidden":e?"align-bottom":""},_onTabSizingChanged:function(){this.debounce("_onTabSizingChanged",function(){this._scroll(),this._tabChanged(this.selectedItem)},10)},_onIronSelect:function(t){this._tabChanged(t.detail.item,this._previousTab),this._previousTab=t.detail.item,this.cancelDebouncer("tab-changed")},_onIronDeselect:function(t){this.debounce("tab-changed",function(){this._tabChanged(null,this._previousTab),this._previousTab=null},1)},_activateHandler:function(){this._cancelPendingActivation(),u._activateHandler.apply(this,arguments)},_scheduleActivation:function(t,e){this._pendingActivationItem=t,this._pendingActivationTimeout=this.async(this._bindDelayedActivationHandler,e)},_delayedActivationHandler:function(){var t=this._pendingActivationItem;this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,t.fire(this.activateEvent,null,{bubbles:!0,cancelable:!0})},_cancelPendingActivation:function(){void 0!==this._pendingActivationTimeout&&(this.cancelAsync(this._pendingActivationTimeout),this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0)},_onArrowKeyup:function(t){this.autoselect&&this._scheduleActivation(this.focusedItem,this.autoselectDelay)},_onBlurCapture:function(t){t.target===this._pendingActivationItem&&this._cancelPendingActivation()},get _tabContainerScrollSize(){return Math.max(0,this.$.tabsContainer.scrollWidth-this.$.tabsContainer.offsetWidth)},_scroll:function(t,e){if(this.scrollable){var n=e&&-e.ddx||0;this._affectScroll(n)}},_down:function(t){this.async(function(){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null)},1)},_affectScroll:function(t){this.$.tabsContainer.scrollLeft+=t;var e=this.$.tabsContainer.scrollLeft;this._leftHidden=0===e,this._rightHidden=e===this._tabContainerScrollSize},_onLeftScrollButtonDown:function(){this._scrollToLeft(),this._holdJob=setInterval(this._scrollToLeft.bind(this),this._holdDelay)},_onRightScrollButtonDown:function(){this._scrollToRight(),this._holdJob=setInterval(this._scrollToRight.bind(this),this._holdDelay)},_onScrollButtonUp:function(){clearInterval(this._holdJob),this._holdJob=null},_scrollToLeft:function(){this._affectScroll(-this._step)},_scrollToRight:function(){this._affectScroll(this._step)},_tabChanged:function(t,e){if(!t)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(0,0);var n=this.$.tabsContent.getBoundingClientRect(),i=n.width,r=t.getBoundingClientRect(),o=r.left-n.left;if(this._pos={width:this._calcPercent(r.width,i),left:this._calcPercent(o,i)},this.noSlide||null==e)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(this._pos.width,this._pos.left);var s=e.getBoundingClientRect(),a=this.items.indexOf(e),l=this.items.indexOf(t);this.$.selectionBar.classList.add("expand");var c=a<l;this._isRTL&&(c=!c),c?this._positionBar(this._calcPercent(r.left+r.width-s.left,i)-5,this._left):this._positionBar(this._calcPercent(s.left+s.width-r.left,i)-5,this._calcPercent(o,i)+5),this.scrollable&&this._scrollToSelectedIfNeeded(r.width,o)},_scrollToSelectedIfNeeded:function(t,e){var n=e-this.$.tabsContainer.scrollLeft;n<0?this.$.tabsContainer.scrollLeft+=n:(n+=t-this.$.tabsContainer.offsetWidth)>0&&(this.$.tabsContainer.scrollLeft+=n)},_calcPercent:function(t,e){return 100*t/e},_positionBar:function(t,e){t=t||0,e=e||0,this._width=t,this._left=e,this.transform("translateX("+e+"%) scaleX("+t/100+")",this.$.selectionBar)},_onBarTransitionEnd:function(t){var e=this.$.selectionBar.classList;e.contains("expand")?(e.remove("expand"),e.add("contract"),this._positionBar(this._pos.width,this._pos.left)):e.contains("contract")&&e.remove("contract")}})},140:function(t,e,n){e.markdown=n(179),e.parse=e.markdown.toHTML},141:function(t,e,n){"use strict";n(3),n(50);var i=n(23),r=n(38),o=n(51),s=n(7),a=n(1),l=n(2);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({_template:l["a"]`
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
`,is:"paper-tab",behaviors:[r.a,i.a,o.a],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var t=Object(a.b)(this).parentNode;return!!t&&!!t.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(t){if(this.link){var e=this.queryEffectiveChildren("a");if(!e)return;if(t.target===e)return;e.click()}}})},142:function(t,e,n){"use strict";n(3),n(37),n(66);var i=n(131),r=n(7),o=n(2);
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
const s=o["a"]`
<dom-module id="paper-icon-button">
  <template strip-whitespace>
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]" alt\$="[[alt]]"></iron-icon>
  </template>
</dom-module>
`;s.setAttribute("style","display: none;"),document.body.appendChild(s.content),Object(r.a)({is:"paper-icon-button",hostAttributes:{role:"button",tabindex:"0"},behaviors:[i.a],properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(t,e){var n=this.getAttribute("aria-label");n&&e!=n||this.setAttribute("aria-label",t)}})},175:function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},176:function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},177:function(t,e){var n,i,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(t){i=s}}();var l,c=[],u=!1,h=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&f())}function f(){if(!u){var t=a(p);u=!0;for(var e=c.length;e;){for(l=c,c=[];++h<e;)l&&l[h].run();h=-1,e=c.length}l=null,u=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function b(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||u||a(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=b,r.addListener=b,r.once=b,r.off=b,r.removeListener=b,r.removeAllListeners=b,r.emit=b,r.prependListener=b,r.prependOnceListener=b,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},178:function(t,e,n){(function(t,i){var r=/%[sdj%]/g;e.format=function(t){if(!_(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var i=arguments,o=i.length,s=String(t).replace(r,function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(t){return"[Circular]"}default:return t}}),l=i[n];n<o;l=i[++n])b(l)||!m(l)?s+=" "+l:s+=" "+a(l);return s},e.deprecate=function(n,r){if(v(t.process))return function(){return e.deprecate(n,r).apply(this,arguments)};if(!0===i.noDeprecation)return n;var o=!1;return function(){if(!o){if(i.throwDeprecation)throw new Error(r);i.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var o,s={};function a(t,n){var i={seen:[],stylize:c};return arguments.length>=3&&(i.depth=arguments[2]),arguments.length>=4&&(i.colors=arguments[3]),d(n)?i.showHidden=n:n&&e._extend(i,n),v(i.showHidden)&&(i.showHidden=!1),v(i.depth)&&(i.depth=2),v(i.colors)&&(i.colors=!1),v(i.customInspect)&&(i.customInspect=!0),i.colors&&(i.stylize=l),u(i,t,i.depth)}function l(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function c(t,e){return t}function u(t,n,i){if(t.customInspect&&n&&S(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var r=n.inspect(i,t);return _(r)||(r=u(t,r,i)),r}var o=function(t,e){if(v(e))return t.stylize("undefined","undefined");if(_(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(g(e))return t.stylize(""+e,"number");if(d(e))return t.stylize(""+e,"boolean");if(b(e))return t.stylize("null","null")}(t,n);if(o)return o;var s=Object.keys(n),a=function(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),w(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return h(n);if(0===s.length){if(S(n)){var l=n.name?": "+n.name:"";return t.stylize("[Function"+l+"]","special")}if(y(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(k(n))return t.stylize(Date.prototype.toString.call(n),"date");if(w(n))return h(n)}var c,m="",x=!1,A=["{","}"];(f(n)&&(x=!0,A=["[","]"]),S(n))&&(m=" [Function"+(n.name?": "+n.name:"")+"]");return y(n)&&(m=" "+RegExp.prototype.toString.call(n)),k(n)&&(m=" "+Date.prototype.toUTCString.call(n)),w(n)&&(m=" "+h(n)),0!==s.length||x&&0!=n.length?i<0?y(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),c=x?function(t,e,n,i,r){for(var o=[],s=0,a=e.length;s<a;++s)I(e,String(s))?o.push(p(t,e,n,i,String(s),!0)):o.push("");return r.forEach(function(r){r.match(/^\d+$/)||o.push(p(t,e,n,i,r,!0))}),o}(t,n,i,a,s):s.map(function(e){return p(t,n,i,a,e,x)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(c,m,A)):A[0]+m+A[1]}function h(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,i,r,o){var s,a,l;if((l=Object.getOwnPropertyDescriptor(e,r)||{value:e[r]}).get?a=l.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):l.set&&(a=t.stylize("[Setter]","special")),I(i,r)||(s="["+r+"]"),a||(t.seen.indexOf(l.value)<0?(a=b(n)?u(t,l.value,null):u(t,l.value,n-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+a.split("\n").map(function(t){return"   "+t}).join("\n")):a=t.stylize("[Circular]","special")),v(s)){if(o&&r.match(/^\d+$/))return a;(s=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function f(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function b(t){return null===t}function g(t){return"number"==typeof t}function _(t){return"string"==typeof t}function v(t){return void 0===t}function y(t){return m(t)&&"[object RegExp]"===x(t)}function m(t){return"object"==typeof t&&null!==t}function k(t){return m(t)&&"[object Date]"===x(t)}function w(t){return m(t)&&("[object Error]"===x(t)||t instanceof Error)}function S(t){return"function"==typeof t}function x(t){return Object.prototype.toString.call(t)}function A(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(v(o)&&(o=i.env.NODE_DEBUG||""),t=t.toUpperCase(),!s[t])if(new RegExp("\\b"+t+"\\b","i").test(o)){var n=i.pid;s[t]=function(){var i=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,i)}}else s[t]=function(){};return s[t]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=f,e.isBoolean=d,e.isNull=b,e.isNullOrUndefined=function(t){return null==t},e.isNumber=g,e.isString=_,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=v,e.isRegExp=y,e.isObject=m,e.isDate=k,e.isError=w,e.isFunction=S,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(176);var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function I(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){var t,n;console.log("%s - %s",(t=new Date,n=[A(t.getHours()),A(t.getMinutes()),A(t.getSeconds())].join(":"),[t.getDate(),T[t.getMonth()],n].join(" ")),e.format.apply(e,arguments))},e.inherits=n(175),e._extend=function(t,e){if(!e||!m(e))return t;for(var n=Object.keys(e),i=n.length;i--;)t[n[i]]=e[n[i]];return t}}).call(this,n(67),n(177))},179:function(t,e,n){!function(t){var e=t.Markdown=function(t){switch(typeof t){case"undefined":this.dialect=e.dialects.Gruber;break;case"object":this.dialect=t;break;default:if(!(t in e.dialects))throw new Error("Unknown Markdown dialect '"+String(t)+"'");this.dialect=e.dialects[t]}this.em_state=[],this.strong_state=[],this.debug_indent=""};function i(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function r(){var t=n(178);return"Markdown.mk_block( "+t.inspect(this.toString())+", "+t.inspect(this.trailing)+", "+t.inspect(this.lineNumber)+" )"}t.parse=function(t,n){return new e(n).toTree(t)},t.toHTML=function(e,n,i){var r=t.toHTMLTree(e,n,i);return t.renderJsonML(r)},t.toHTMLTree=function(t,e,n){"string"==typeof t&&(t=this.parse(t,e));var i=f(t),r={};i&&i.references&&(r=i.references);var o=function t(e,n,i){var r;i=i||{};var o=e.slice(0);"function"==typeof i.preprocessTreeNode&&(o=i.preprocessTreeNode(o,n));var s=f(o);if(s){for(r in o[1]={},s)o[1][r]=s[r];s=o[1]}if("string"==typeof o)return o;switch(o[0]){case"header":o[0]="h"+o[1].level,delete o[1].level;break;case"bulletlist":o[0]="ul";break;case"numberlist":o[0]="ol";break;case"listitem":o[0]="li";break;case"para":o[0]="p";break;case"markdown":o[0]="html",s&&delete s.references;break;case"code_block":o[0]="pre",r=s?2:1;var a=["code"];a.push.apply(a,o.splice(r,o.length-r)),o[r]=a;break;case"inlinecode":o[0]="code";break;case"img":o[1].src=o[1].href,delete o[1].href;break;case"linebreak":o[0]="br";break;case"link":o[0]="a";break;case"link_ref":o[0]="a";var l=n[s.ref];if(!l)return s.original;delete s.ref,s.href=l.href,l.title&&(s.title=l.title),delete s.original;break;case"img_ref":o[0]="img";var l=n[s.ref];if(!l)return s.original;delete s.ref,s.src=l.href,l.title&&(s.title=l.title),delete s.original}r=1;if(s){for(var c in o[1]){r=2;break}1===r&&o.splice(r,1)}for(;r<o.length;++r)o[r]=t(o[r],n,i);return o}(t,r,n);return function t(e){var n=f(e)?2:1;for(;n<e.length;)"string"==typeof e[n]?n+1<e.length&&"string"==typeof e[n+1]?e[n]+=e.splice(n+1,1)[0]:++n:(t(e[n]),++n)}(o),o};var o=e.mk_block=function(t,e,n){1==arguments.length&&(e="\n\n");var o=new String(t);return o.trailing=e,o.inspect=r,o.toSource=i,void 0!=n&&(o.lineNumber=n),o};function s(t){for(var e=0,n=-1;-1!==(n=t.indexOf("\n",n+1));)e++;return e}function l(t,e){var n=t+"_state",i="strong"==t?"em_state":"strong_state";function r(t){this.len_after=t,this.name="close_"+e}return function(o,s){if(this[n][0]==e)return this[n].shift(),[o.length,new r(o.length-e.length)];var a=this[i].slice(),l=this[n].slice();this[n].unshift(e);var c=this.processInline(o.substr(e.length)),u=c[c.length-1];this[n].shift();return u instanceof r?(c.pop(),[o.length-u.len_after,[t].concat(c)]):(this[i]=a,this[n]=l,[e.length,e])}}e.prototype.split_blocks=function(t,e){t=t.replace(/(\r\n|\n|\r)/g,"\n");var n,i=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,r=[],a=1;for(null!=(n=/^(\s*\n)/.exec(t))&&(a+=s(n[0]),i.lastIndex=n[0].length);null!==(n=i.exec(t));)"\n#"==n[2]&&(n[2]="\n",i.lastIndex--),r.push(o(n[1],n[2],a)),a+=s(n[0]);return r},e.prototype.processBlock=function(t,e){var n=this.dialect.block,i=n.__order__;if("__call__"in n)return n.__call__.call(this,t,e);for(var r=0;r<i.length;r++){var o=n[i[r]].call(this,t,e);if(o)return(!u(o)||o.length>0&&!u(o[0]))&&this.debug(i[r],"didn't return a proper array"),o}return[]},e.prototype.processInline=function(t){return this.dialect.inline.__call__.call(this,String(t))},e.prototype.toTree=function(t,e){var n=t instanceof Array?t:this.split_blocks(t),i=this.tree;try{for(this.tree=e||this.tree||["markdown"];n.length;){var r=this.processBlock(n.shift(),n);r.length&&this.tree.push.apply(this.tree,r)}return this.tree}finally{e&&(this.tree=i)}},e.prototype.debug=function(){var t=Array.prototype.slice.call(arguments);t.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,t),"undefined"!=typeof console&&void 0!==console.log&&console.log.apply(null,t)},e.prototype.loop_re_over_block=function(t,e,n){for(var i,r=e.valueOf();r.length&&null!=(i=t.exec(r));)r=r.substr(i[0].length),n.call(this,i);return r},e.dialects={},e.dialects.Gruber={block:{atxHeader:function(t,e){var n=t.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(n){var i=["header",{level:n[1].length}];return Array.prototype.push.apply(i,this.processInline(n[2])),n[0].length<t.length&&e.unshift(o(t.substr(n[0].length),t.trailing,t.lineNumber+2)),[i]}},setextHeader:function(t,e){var n=t.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(n){var i=["header",{level:"="===n[2]?1:2},n[1]];return n[0].length<t.length&&e.unshift(o(t.substr(n[0].length),t.trailing,t.lineNumber+2)),[i]}},code:function(t,e){var n=[],i=/^(?: {0,3}\t| {4})(.*)\n?/;if(t.match(i)){t:for(;;){var r=this.loop_re_over_block(i,t.valueOf(),function(t){n.push(t[1])});if(r.length){e.unshift(o(r,t.trailing));break t}if(!e.length)break t;if(!e[0].match(i))break t;n.push(t.trailing.replace(/[^\n]/g,"").substring(2)),t=e.shift()}return[["code_block",n.join("\n")]]}},horizRule:function(t,e){var n=t.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(n){var i=[["hr"]];return n[1]&&i.unshift.apply(i,this.processBlock(n[1],[])),n[3]&&e.unshift(o(n[3])),i}},lists:function(){var t="[*+-]|\\d+\\.",e=/[*+-]/,n=new RegExp("^( {0,3})("+t+")[ \t]+"),i="(?: {0,3}\\t| {4})";function r(t,e,n,i){if(e)t.push(["para"].concat(n));else{var r=t[t.length-1]instanceof Array&&"para"==t[t.length-1][0]?t[t.length-1]:t;i&&t.length>1&&n.unshift(i);for(var o=0;o<n.length;o++){var s=n[o];"string"==typeof s&&r.length>1&&"string"==typeof r[r.length-1]?r[r.length-1]+=s:r.push(s)}}}function s(t,e){for(var n=new RegExp("^("+i+"{"+t+"}.*?\\n?)*$"),r=new RegExp("^"+i+"{"+t+"}","gm"),s=[];e.length>0&&n.exec(e[0]);){var a=e.shift(),l=a.replace(r,"");s.push(o(l,a.trailing,a.lineNumber))}return s}function a(t,e,n){var i=t.list,r=i[i.length-1];if(!(r[1]instanceof Array&&"para"==r[1][0]))if(e+1==n.length)r.push(["para"].concat(r.splice(1,r.length-1)));else{var o=r.pop();r.push(["para"].concat(r.splice(1,r.length-1)),o)}}return function(o,l){var u=o.match(n);if(u){for(var h,p,f,d=[],b=B(u),g=!1,_=[d[0].list];;){for(var v=o.split(/(?=\n)/),y="",m=0;m<v.length;m++){var k="",w=v[m].replace(/^\n/,function(t){return k=t,""}),S=(f=d.length,new RegExp("(?:^("+i+"{0,"+f+"} {0,3})("+t+")\\s+)|(^"+i+"{0,"+(f-1)+"}[ ]{0,4})"));if(void 0!==(u=w.match(S))[1]){y.length&&(r(h,g,this.processInline(y),k),g=!1,y=""),u[1]=u[1].replace(/ {0,3}\t/g,"    ");var x=Math.floor(u[1].length/4)+1;if(x>d.length)b=B(u),h.push(b),h=b[1]=["listitem"];else{var A=!1;for(p=0;p<d.length;p++)if(d[p].indent==u[1]){b=d[p].list,d.splice(p+1,d.length-(p+1)),A=!0;break}A||(++x<=d.length?(d.splice(x,d.length-x),b=d[x-1].list):(b=B(u),h.push(b))),h=["listitem"],b.push(h)}k=""}w.length>u[0].length&&(y+=k+w.substr(u[0].length))}y.length&&(r(h,g,this.processInline(y),k),g=!1,y="");var T=s(d.length,l);T.length>0&&(c(d,a,this),h.push.apply(h,this.toTree(T,[])));var I=l[0]&&l[0].valueOf()||"";if(!I.match(n)&&!I.match(/^ /))break;o=l.shift();var C=this.dialect.block.horizRule(o,l);if(C){_.push.apply(_,C);break}c(d,a,this),g=!0}return _}function B(t){var n=e.exec(t[2])?["bulletlist"]:["numberlist"];return d.push({list:n,indent:t[1]}),n}}}(),blockquote:function(t,e){if(t.match(/^>/m)){var n=[];if(">"!=t[0]){for(var i=t.split(/\n/),r=[],s=t.lineNumber;i.length&&">"!=i[0][0];)r.push(i.shift()),s++;var a=o(r.join("\n"),"\n",t.lineNumber);n.push.apply(n,this.processBlock(a,[])),t=o(i.join("\n"),t.trailing,s)}for(;e.length&&">"==e[0][0];){var l=e.shift();t=o(t+t.trailing+l,l.trailing,t.lineNumber)}var c=t.replace(/^> ?/gm,""),u=(this.tree,this.toTree(c,["blockquote"])),p=f(u);return p&&p.references&&(delete p.references,h(p)&&u.splice(1,1)),n.push(u),n}},referenceDefn:function(t,e){var n=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(t.match(n)){f(this.tree)||this.tree.splice(1,0,{});var i=f(this.tree);void 0===i.references&&(i.references={});var r=this.loop_re_over_block(n,t,function(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1));var e=i.references[t[1].toLowerCase()]={href:t[2]};void 0!==t[4]?e.title=t[4]:void 0!==t[5]&&(e.title=t[5])});return r.length&&e.unshift(o(r,t.trailing)),[]}},para:function(t,e){return[["para"].concat(this.processInline(t))]}}},e.dialects.Gruber.inline={__oneElement__:function(t,e,n){var i,r;return e=e||this.dialect.inline.__patterns__,(i=new RegExp("([\\s\\S]*?)("+(e.source||e)+")").exec(t))?i[1]?[i[1].length,i[1]]:(i[2]in this.dialect.inline&&(r=this.dialect.inline[i[2]].call(this,t.substr(i.index),i,n||[])),r=r||[i[2].length,i[2]]):[t.length,t]},__call__:function(t,e){var n,i=[];function r(t){"string"==typeof t&&"string"==typeof i[i.length-1]?i[i.length-1]+=t:i.push(t)}for(;t.length>0;)n=this.dialect.inline.__oneElement__.call(this,t,e,i),t=t.substr(n.shift()),c(n,r);return i},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(t){return this.dialect.inline.__escape__.exec(t)?[2,t.charAt(1)]:[1,"\\"]},"![":function(t){var e=t.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1)),e[2]=this.dialect.inline.__call__.call(this,e[2],/\\/)[0];var n={alt:e[1],href:e[2]||""};return void 0!==e[4]&&(n.title=e[4]),[e[0].length,["img",n]]}return(e=t.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/))?[e[0].length,["img_ref",{alt:e[1],ref:e[2].toLowerCase(),original:e[0]}]]:[2,"!["]},"[":function(t){var n=String(t),i=e.DialectHelpers.inline_until_char.call(this,t.substr(1),"]");if(!i)return[1,"["];var r,o,s=1+i[0],a=i[1],l=(t=t.substr(s)).match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(l){var c=l[1];if(s+=l[0].length,c&&"<"==c[0]&&">"==c[c.length-1]&&(c=c.substring(1,c.length-1)),!l[3])for(var u=1,h=0;h<c.length;h++)switch(c[h]){case"(":u++;break;case")":0==--u&&(s-=c.length-h,c=c.substring(0,h))}return o={href:(c=this.dialect.inline.__call__.call(this,c,/\\/)[0])||""},void 0!==l[3]&&(o.title=l[3]),r=["link",o].concat(a),[s,r]}return(l=t.match(/^\s*\[(.*?)\]/))?(s+=l[0].length,r=["link_ref",o={ref:(l[1]||String(a)).toLowerCase(),original:n.substr(0,s)}].concat(a),[s,r]):1==a.length&&"string"==typeof a[0]?(r=["link_ref",o={ref:a[0].toLowerCase(),original:n.substr(0,s)},a[0]],[s,r]):[1,"["]},"<":function(t){var e;return null!=(e=t.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?e[3]?[e[0].length,["link",{href:"mailto:"+e[3]},e[3]]]:"mailto"==e[2]?[e[0].length,["link",{href:e[1]},e[1].substr("mailto:".length)]]:[e[0].length,["link",{href:e[1]},e[1]]]:[1,"<"]},"`":function(t){var e=t.match(/(`+)(([\s\S]*?)\1)/);return e&&e[2]?[e[1].length+e[2].length,["inlinecode",e[3]]]:[1,"`"]},"  \n":function(t){return[3,["linebreak"]]}},e.dialects.Gruber.inline["**"]=l("strong","**"),e.dialects.Gruber.inline.__=l("strong","__"),e.dialects.Gruber.inline["*"]=l("em","*"),e.dialects.Gruber.inline._=l("em","_"),e.buildBlockOrder=function(t){var e=[];for(var n in t)"__order__"!=n&&"__call__"!=n&&e.push(n);t.__order__=e},e.buildInlinePatterns=function(t){var e=[];for(var n in t)if(!n.match(/^__.*__$/)){var i=n.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");e.push(1==n.length?i:"(?:"+i+")")}e=e.join("|"),t.__patterns__=e;var r=t.__call__;t.__call__=function(t,n){return void 0!=n?r.call(this,t,n):r.call(this,t,e)}},e.DialectHelpers={},e.DialectHelpers.inline_until_char=function(t,e){for(var n=0,i=[];;){if(t.charAt(n)==e)return[++n,i];if(n>=t.length)return null;var r=this.dialect.inline.__oneElement__.call(this,t.substr(n));n+=r[0],i.push.apply(i,r.slice(1))}},e.subclassDialect=function(t){function e(){}function n(){}return e.prototype=t.block,n.prototype=t.inline,{block:new e,inline:new n}},e.buildBlockOrder(e.dialects.Gruber.block),e.buildInlinePatterns(e.dialects.Gruber.inline),e.dialects.Maruku=e.subclassDialect(e.dialects.Gruber),e.dialects.Maruku.processMetaHash=function(t){for(var e=function(t){var e=t.split(""),n=[""],i=!1;for(;e.length;){var r=e.shift();switch(r){case" ":i?n[n.length-1]+=r:n.push("");break;case"'":case'"':i=!i;break;case"\\":r=e.shift();default:n[n.length-1]+=r}}return n}(t),n={},i=0;i<e.length;++i)if(/^#/.test(e[i]))n.id=e[i].substring(1);else if(/^\./.test(e[i]))n.class?n.class=n.class+e[i].replace(/./," "):n.class=e[i].substring(1);else if(/\=/.test(e[i])){var r=e[i].split(/\=/);n[r[0]]=r[1]}return n},e.dialects.Maruku.block.document_meta=function(t,e){if(!(t.lineNumber>1)&&t.match(/^(?:\w+:.*\n)*\w+:.*$/)){f(this.tree)||this.tree.splice(1,0,{});var n=t.split(/\n/);for(p in n){var i=n[p].match(/(\w+):\s*(.*)$/),r=i[1].toLowerCase(),o=i[2];this.tree[1][r]=o}return[]}},e.dialects.Maruku.block.block_meta=function(t,e){var n=t.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(n){var i,r=this.dialect.processMetaHash(n[2]);if(""===n[1]){var o=this.tree[this.tree.length-1];if(i=f(o),"string"==typeof o)return;for(a in i||(i={},o.splice(1,0,i)),r)i[a]=r[a];return[]}var s=t.replace(/\n.*$/,""),l=this.processBlock(s,[]);for(a in(i=f(l[0]))||(i={},l[0].splice(1,0,i)),r)i[a]=r[a];return l}},e.dialects.Maruku.block.definition_list=function(t,e){var n,i=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,r=["dl"];if(a=t.match(i)){for(var o=[t];e.length&&i.exec(e[0]);)o.push(e.shift());for(var s=0;s<o.length;++s){var a,l=(a=o[s].match(i))[1].replace(/\n$/,"").split(/\n/),c=a[2].split(/\n:\s+/);for(n=0;n<l.length;++n)r.push(["dt",l[n]]);for(n=0;n<c.length;++n)r.push(["dd"].concat(this.processInline(c[n].replace(/(\n)\s+/,"$1"))))}return[r]}},e.dialects.Maruku.block.table=function(t,e){var n,i,r=function(t,e){(e=e||"\\s").match(/^[\\|\[\]{}?*.+^$]$/)&&(e="\\"+e);for(var n,i=[],r=new RegExp("^((?:\\\\.|[^\\\\"+e+"])*)"+e+"(.*)");n=t.match(r);)i.push(n[1]),t=n[2];return i.push(t),i};if(i=t.match(/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/))i[3]=i[3].replace(/^\s*\|/gm,"");else if(!(i=t.match(/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/)))return;var o=["table",["thead",["tr"]],["tbody"]];i[2]=i[2].replace(/\|\s*$/,"").split("|");var s=[];for(c(i[2],function(t){t.match(/^\s*-+:\s*$/)?s.push({align:"right"}):t.match(/^\s*:-+\s*$/)?s.push({align:"left"}):t.match(/^\s*:-+:\s*$/)?s.push({align:"center"}):s.push({})}),i[1]=r(i[1].replace(/\|\s*$/,""),"|"),n=0;n<i[1].length;n++)o[1][1].push(["th",s[n]||{}].concat(this.processInline(i[1][n].trim())));return c(i[3].replace(/\|\s*$/gm,"").split("\n"),function(t){var e=["tr"];for(t=r(t,"|"),n=0;n<t.length;n++)e.push(["td",s[n]||{}].concat(this.processInline(t[n].trim())));o[2].push(e)},this),[o]},e.dialects.Maruku.inline["{:"]=function(t,e,n){if(!n.length)return[2,"{:"];var i=n[n.length-1];if("string"==typeof i)return[2,"{:"];var r=t.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!r)return[2,"{:"];var o=this.dialect.processMetaHash(r[1]),s=f(i);for(var a in s||(s={},i.splice(1,0,s)),o)s[a]=o[a];return[r[0].length,""]},e.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,e.buildBlockOrder(e.dialects.Maruku.block),e.buildInlinePatterns(e.dialects.Maruku.inline);var c,u=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)};c=Array.prototype.forEach?function(t,e,n){return t.forEach(e,n)}:function(t,e,n){for(var i=0;i<t.length;i++)e.call(n||t,t[i],i,t)};var h=function(t){for(var e in t)if(hasOwnProperty.call(t,e))return!1;return!0};function f(t){return u(t)&&t.length>1&&"object"==typeof t[1]&&!u(t[1])?t[1]:void 0}function d(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function b(t){if("string"==typeof t)return d(t);var e=t.shift(),n={},i=[];for(!t.length||"object"!=typeof t[0]||t[0]instanceof Array||(n=t.shift());t.length;)i.push(b(t.shift()));var r="";for(var o in n)r+=" "+o+'="'+d(n[o])+'"';return"img"==e||"br"==e||"hr"==e?"<"+e+r+"/>":"<"+e+r+">"+i.join("")+"</"+e+">"}t.renderJsonML=function(t,e){(e=e||{}).root=e.root||!1;var n=[];if(e.root)n.push(b(t));else for(t.shift(),!t.length||"object"!=typeof t[0]||t[0]instanceof Array||t.shift();t.length;)n.push(b(t.shift()));return n.join("\n\n")}}(e)}}]);