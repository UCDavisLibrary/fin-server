!function(e){function t(t){for(var n,r,o=t[0],s=t[1],a=0,c=[];a<o.length;a++)r=o[a],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);c.length;)c.shift()()}var n={},i={2:0};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=function(e){return r.p+""+({0:"vendors~page-record~page-search",1:"csl",3:"observer-polyfill",4:"page-about",5:"page-home",6:"page-record",7:"page-search",8:"vendors~csl",9:"vendors~page-record",10:"vendors~page-search",11:"vendors~video-libs"}[e]||e)+"-28f09d2f535e320cd446.bundle.js"}(e);var l=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}i[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/js/",r.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var l=s;r(r.s=122)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e},function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"i",(function(){return a})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return d})),n.d(t,"h",(function(){return p}));n(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function i(e){return e.indexOf(".")>=0}function r(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function o(e,t){return 0===e.indexOf(t+".")}function s(e,t){return 0===t.indexOf(e+".")}function a(e,t,n){return t+n.slice(e.length)}function l(e,t){return e===t||o(e,t)||s(e,t)}function c(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let i=e[n].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function h(e){return Array.isArray(e)?c(e).split("."):e.toString().split(".")}function d(e,t,n){let i=e,r=h(t);for(let e=0;e<r.length;e++){if(!i)return;i=i[r[e]]}return n&&(n.path=r.join(".")),i}function p(e,t,n){let i=e,r=h(t),o=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++){if(i=i[r[e]],!i)return}i[o]=n}else i[t]=n;return r.join(".")}},function(e,t,n){"use strict";n(6);var i=n(0),r=(n(3),n(40)),o=n(10);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function s(e){return"slot"===e.localName}let a=class{static getFlattenedNodes(e){const t=Object(i.a)(e);return s(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>s(e)?(e=e,Object(i.a)(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){s(this._target)?this._listenSlots([this._target]):Object(i.a)(this._target).children&&(this._listenSlots(Object(i.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){s(this._target)?this._unlistenSlots([this._target]):Object(i.a)(this._target).children&&(this._unlistenSlots(Object(i.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,o.c.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=Object(r.a)(t,this._effectiveNodes);for(let t,i=0;i<n.length&&(t=n[i]);i++)for(let n,i=0;i<t.removed.length&&(n=t.removed[i]);i++)e.removedNodes.push(n);for(let i,r=0;r<n.length&&(i=n[r]);r++)for(let n=i.index;n<i.index+i.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];s(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];s(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};var l=n(17);n(14);n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return l.b})),n.d(t,"a",(function(){return l.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const c=Element.prototype,h=c.matches||c.matchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.oMatchesSelector||c.webkitMatchesSelector,d=function(e,t){return h.call(e,t)};class p{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new a(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(Object(i.a)(this.node).contains(e))return!0;let t=e,n=e.ownerDocument;for(;t&&t!==n&&t!==this.node;)t=Object(i.a)(t).parentNode||Object(i.a)(t).host;return t===this.node}getOwnerRoot(){return Object(i.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(i.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=Object(i.a)(this.node).assignedSlot;for(;t;)e.push(t),t=Object(i.a)(t).assignedSlot;return e}importNode(e,t){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(i.a)(n).importNode(e,t)}getEffectiveChildNodes(){return a.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),n=[];for(let i,r=0,o=t.length;r<o&&(i=t[r]);r++)i.nodeType===Node.ELEMENT_NODE&&d(i,e)&&n.push(i);return n}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function u(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}}class f{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}p.prototype.cloneNode,p.prototype.appendChild,p.prototype.insertBefore,p.prototype.removeChild,p.prototype.replaceChild,p.prototype.setAttribute,p.prototype.removeAttribute,p.prototype.querySelector,p.prototype.querySelectorAll,p.prototype.parentNode,p.prototype.firstChild,p.prototype.lastChild,p.prototype.nextSibling,p.prototype.previousSibling,p.prototype.firstElementChild,p.prototype.lastElementChild,p.prototype.nextElementSibling,p.prototype.previousElementSibling,p.prototype.childNodes,p.prototype.children,p.prototype.classList,p.prototype.textContent,p.prototype.innerHTML;let g=p;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(p.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=p.prototype[t])}),u(e.prototype,["classList"]),g=e,Object.defineProperties(f.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&m(e).getOwnerRoot(),n=this.path;for(let e=0;e<n.length;e++){const i=n[e];if(m(i).getOwnerRoot()===t)return i}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let n=0;n<t.length;n++){let i=t[n];e[i]=function(){return this.node[i].apply(this.node,arguments)}}}(p.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),u(p.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(e){this.node[i]=e},configurable:!0})}}(p.prototype,["textContent","innerHTML","className"]);const m=function(e){if((e=e||document)instanceof g)return e;if(e instanceof f)return e;let t=e.__domApi;return t||(t=e instanceof Event?new f(e):new g(e),e.__domApi=t),t}},function(e,t,n){"use strict";n.d(t,"i",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return h})),n.d(t,"h",(function(){return d})),n.d(t,"b",(function(){return p}));n(6);var i=n(13);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let o=Object(i.a)(document.baseURI||window.location.href);let s=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let a=!1;let l=!1;let c=!1;let h=!1;let d=!1;let p=!0},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(22),r=n(5);n.d(t,"b",(function(){return r.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=Object(i.a)(HTMLElement)},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class i{constructor(e){this.value=e.toString()}toString(){return this.value}}function r(e){if(e instanceof i)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const o=function(e,...t){const n=document.createElement("template");return n.innerHTML=t.reduce((t,n,o)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof i)return r(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(n)+e[o+1],e[0]),n}},function(e,t,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e}},function(e,t,n){"use strict";var i=n(27),r=(n(9),n(77),n(6),n(23)),o=n(18),s=n(39),a=n(3),l=n(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let c=!1;function h(){if(a.c&&!a.i){if(!c){c=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const d=Object(s.a)(Object(o.b)(Object(r.a)(HTMLElement)));customElements.define("dom-bind",class extends d{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),a.g)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,n,i){this.mutableData=!0}connectedCallback(){h()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(l.a)(Object(l.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});var p=n(4),u=n(21),f=n(14),g=n(17),m=n(1),v=n(10);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const y=Object(o.b)(p.a);class _ extends y{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),h()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=Object(l.a)(Object(l.a)(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=Object(u.b)(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let n=this.__instances;for(let i,r=0;r<n.length&&(i=n[r]);r++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if(Object(m.e)(this.as,t)){let i=e[this.itemsIndexAs];t==this.as&&(this.items[i]=n);let r=Object(m.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${i}`,t);this.notifyPath(r,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let n=0;n<t.length;n++)0===e.indexOf(t[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=f.a.debounce(this.__renderDebouncer,t>0?v.d.after(t):v.c,e.bind(this)),Object(g.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(g.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=n;this.__filterFn&&(t=t.filter((t,n,i)=>this.__filterFn(e[t],n,i))),this.__sortFn&&t.sort((t,n)=>this.__sortFn(e[t],e[n]));const n=this.__itemsIdxToInstIdx={};let i=0;const r=Math.min(t.length,this.__limit);for(;i<r;i++){let r=this.__instances[i],o=t[i],s=e[o];n[o]=i,r?(r._setPendingProperty(this.as,s),r._setPendingProperty(this.indexAs,i),r._setPendingProperty(this.itemsIndexAs,o),r._flushProperties()):this.__insertInstance(s,i,o)}for(let e=this.__instances.length-1;e>=i;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const n=Object(l.a)(t.root);for(let e=0;e<t.children.length;e++){let i=t.children[e];n.appendChild(i)}return t}__attachInstance(e,t){let n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,n){let i={};return i[this.as]=e,i[this.indexAs]=t,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(e,t,n){let i=this.__pool.pop();i?(i._setPendingProperty(this.as,e),i._setPendingProperty(this.indexAs,t),i._setPendingProperty(this.itemsIndexAs,n),i._flushProperties()):i=this.__stampInstance(e,t,n);let r=this.__instances[t+1],o=r?r.children[0]:this;return Object(l.a)(Object(l.a)(this).parentNode).insertBefore(i.root,o),this.__instances[t]=i,i}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let n=e.slice(6),i=n.indexOf("."),r=i<0?n:n.substring(0,i);if(r==parseInt(r,10)){let e=i<0?"":n.substring(i+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[r],s=this.__instances[o];if(s){let n=this.as+(e?"."+e:"");s._setPendingPropertyOrPath(n,t,!1,!0),s._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Object(u.a)(this.template,e)}}customElements.define(_.is,_);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class b extends p.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=f.a.debounce(this.__renderDebouncer,v.c,()=>this.__render()),Object(g.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=Object(l.a)(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(l.a)(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),h()||(this.style.display="none"),this.if&&this.__debounceRender()}render(){Object(g.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=Object(l.a)(this).parentNode;if(e){if(!this.__ctor){let e=Object(l.a)(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!Object(l.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=Object(u.b)(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(m.g)(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(Object(l.a)(this).previousSibling!==t[t.length-1])for(let n,i=0;i<t.length&&(n=t[i]);i++)Object(l.a)(e).insertBefore(n,this)}}else this.__instance=new this.__ctor,Object(l.a)(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=Object(l.a)(e[0]).parentNode;if(t){t=Object(l.a)(t);for(let n,i=0;i<e.length&&(n=e[i]);i++)t.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(b.is,b);var w=n(8),z=n(40),C=n(22);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let S=Object(w.a)(e=>{let t=Object(C.a)(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let n=t.path;if(n==JSCompiler_renameProperty("items",this)){let n=t.base||[],i=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),i){let e=Object(z.a)(n,i);this.__applySplices(e)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let n=0;n<e.length;n++){let i=e[n];t.forEach((e,n)=>{e<i.index||(e>=i.index+i.removed.length?t.set(n,e+i.addedCount-i.removed.length):t.set(n,-1))});for(let e=0;e<i.addedCount;e++){let n=i.index+e;t.has(this.items[n])&&t.set(this.items[n],n)}}this.__updateLinks();let n=0;t.forEach((e,i)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,t.delete(i)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((n,i)=>{t==e++&&this.deselect(i)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let n;this.__selectedMap.delete(e),this.multi&&(n=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(p.a);class M extends S{static get is(){return"array-selector"}static get template(){return null}}customElements.define(M.is,M);var x=n(50),E=n(19),O=n(11);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const A=new x.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){A.processStyles(),Object(E.c)(e,t)},styleElement(e){A.processStyles()},styleDocument(e){A.processStyles(),Object(E.c)(document.body,e)},getComputedStyleValue:(e,t)=>Object(E.b)(e,t),flushCustomStyles(){},nativeCss:O.c,nativeShadow:O.d,cssBuild:O.a,disableRuntime:O.b}),window.ShadyCSS.CustomStyleInterface=A;var L=n(30);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const H="include",P=window.ShadyCSS.CustomStyleInterface;class T extends HTMLElement{constructor(){super(),this._style=null,P.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(H);return t&&(e.removeAttribute(H),e.textContent=Object(L.a)(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",T);n(78);var R=n(5);n.d(t,"a",(function(){return V})),n.d(t,"b",(function(){return R.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const V=Object(i.a)(HTMLElement).prototype},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let i=0;function r(){}r.prototype.__mixinApplications,r.prototype.__mixinSet;const o=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=i++;return function(i){let r=i.__mixinSet;if(r&&r[n])return i;let o=t,s=o.get(i);s||(s=e(i),o.set(i,s));let a=Object.create(s.__mixinSet||r||null);return a[n]=!0,s.__mixinSet=a,s}}},function(e,t,n){"use strict";var i=n(27),r=n(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},s={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},s);function l(e,t,n,i){!function(e,t,n){const i=e._noAccessors,r=Object.getOwnPropertyNames(e);for(let o=0;o<r.length;o++){let s=r[o];if(!(s in n))if(i)t[s]=e[s];else{let n=Object.getOwnPropertyDescriptor(e,s);n&&(n.configurable=!0,Object.defineProperty(t,s,n))}}}(t,e,i);for(let e in o)t[e]&&(n[e]=n[e]||[],n[e].push(t[e]))}function c(e,t){for(const n in t){const i=e[n],r=t[n];e[n]=!("value"in r)&&i&&"value"in i?Object.assign({value:i.value},r):r}}function h(e,t,n){let i;const o={};class h extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(i)for(let e,t=0;t<i.length;t++)e=i[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(i)for(let e=0;e<i.length;e++)c(t,i[e].properties);return c(t,e.properties),t}static get observers(){let t=[];if(i)for(let e,n=0;n<i.length;n++)e=i[n],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=o.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=h.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),r.c&&d(e);const t=Object.getPrototypeOf(this);let n=o.beforeRegister;if(n)for(let e=0;e<n.length;e++)n[e].call(t);if(n=o.registered,n)for(let e=0;e<n.length;e++)n[e].call(t)}}_applyListeners(){super._applyListeners();const e=o.listeners;if(e)for(let t=0;t<e.length;t++){const n=e[t];if(n)for(let e in n)this._addMethodEventListenerToNode(this,e,n[e])}}_ensureAttributes(){const e=o.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const n=e[t];for(let e in n)this._ensureAttribute(e,n[e])}super._ensureAttributes()}ready(){super.ready();let e=o.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=o.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=o.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();let i=o.attributeChanged;if(i)for(let r=0;r<i.length;r++)i[r].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);let e=t.prototype.behaviors;i=function e(t,n,i){n=n||[];for(let r=t.length-1;r>=0;r--){let o=t[r];o?Array.isArray(o)?e(o,n):n.indexOf(o)<0&&(!i||i.indexOf(o)<0)&&n.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,e),h.prototype.behaviors=e?e.concat(n):i}const d=t=>{i&&function(e,t,n){for(let i=0;i<t.length;i++)l(e,t[i],n,a)}(t,i,o),l(t,e,o,s)};return r.c||d(h.prototype),h.generatedFrom=e,h}n(6);n.d(t,"a",(function(){return d}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const d=function(e){let t;return t="function"==typeof e?e:d.Class(e),customElements.define(t.is,t),t};d.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let n=t?t(Object(i.a)(HTMLElement)):Object(i.a)(HTMLElement);return n=h(e,n,e.behaviors),n.is=n.prototype.is=e.is,n}},function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return d}));n(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let i=0,r=0,o=[],s=0,a=document.createTextNode("");new window.MutationObserver((function(){const e=o.length;for(let t=0;t<e;t++){let e=o[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}o.splice(0,e),r+=e})).observe(a,{characterData:!0});const l={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},c={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},h={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},d={run:e=>(a.textContent=s++,o.push(e),i++),cancel(e){const t=e-r;if(t>=0){if(!o[t])throw new Error("invalid async handle: "+e);o[t]=null}}}},function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=!(window.ShadyDOM&&window.ShadyDOM.inUse);let r,o;function s(e){r=(!e||!e.shimcssproperties)&&(i||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(o=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);const l=r},function(e,t,n){e.exports={BaseModel:n(84),BaseStore:n(86),BaseService:n(88),BaseMixin:n(90),Mixin:n(91),EventBus:n(28),EventInterface:n(92),LitCorkUtils:n(93),fetch:n(56),LightDom:n(94)}},function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c}));n(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let i,r,o=/(url\()([^)]*)(\))/g,s=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(e,t){if(e&&s.test(e))return e;if("//"===e)return e;if(void 0===i){i=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",i="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),i)try{return new URL(e,t).href}catch(t){return e}return r||(r=document.implementation.createHTMLDocument("temp"),r.base=r.createElement("base"),r.head.appendChild(r.base),r.anchor=r.createElement("a"),r.body.appendChild(r.anchor)),r.base.href=t,r.anchor.href=e,r.anchor.href||e}function l(e,t){return e.replace(o,(function(e,n,i,r){return n+"'"+a(i.replace(/["']/g,""),t)+"'"+r}))}function c(e){return e.substring(0,e.lastIndexOf("/")+1)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));n(6),n(8),n(10);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class i{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,r.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),r.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,n){return e instanceof i?e._cancelAsync():e=new i,e.setConfig(t,n),e}}let r=new Set;const o=function(e){r.add(e)},s=function(){const e=Boolean(r.size);return r.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e}},function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,r=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,o=/@media\s(.*)/},function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));n(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const i={},r=/-[a-z]/g,o=/([A-Z])/g;function s(e){return i[e]||(i[e]=e.indexOf("-")<0?e:e.replace(r,e=>e[1].toUpperCase()))}function a(e){return i[e]||(i[e]=e.replace(o,"-$1").toLowerCase())}},function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));n(6);var i=n(14);n.d(t,"a",(function(){return i.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Object(i.c)()}while(e||t)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var i=n(8);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(e,t,n,i,r){let o;r&&(o="object"==typeof n&&null!==n,o&&(i=e.__dataTemp[t]));let s=i!==n&&(i==i||n==n);return o&&s&&(e.__dataTemp[t]=n),s}const o=Object(i.a)(e=>{return class extends e{_shouldPropertyChange(e,t,n){return r(this,e,t,n,!0)}}}),s=Object(i.a)(e=>{return class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return r(this,e,t,n,this.mutableData)}}});o._mutablePropertyChange=r},function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var i=n(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(e,t){for(let n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function o(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():""}function s(e){const t=i.b.test(e)||i.c.test(e);return i.b.lastIndex=0,i.c.lastIndex=0,t}},function(e,t,n){let i=n(80),r={};for(var o in i)r[o]=i[o].text;e.exports={fcrepoBasePath:"/fcrepo/rest",metadata:{title:"UC Davis Digital Collections",description:"The UC Davis Digital Collections is a locally developed digital repository that was designed to store and manage the digital assets of UC Davis. These Digital Collections are intended to increase access to previously undiscoverable digital assets held by the University Library."},gaCode:"UA-65988958-10",imageDownload:{sizes:[{label:"Full Resolution",imageType:"FR",ratio:1},{label:"Large",imageType:"L",ratio:.75},{label:"Medium",imageType:"M",ratio:.5},{label:"Small",imageType:"S",ratio:.25}],formats:["png","jpg"]},elasticSearch:{facets:{fileFormats:{label:"File Format",type:"facet",valueMap:e=>{if(e.match(/^video\/(.*)/i))return"Video ("+e.match(/^video\/(.*)/)[1]+")";if(e.match(/^image\/(.*)/i))return"Image ("+e.match(/^image\/(.*)/)[1]+")";if("application/pdf"===e)return"PDF";if(e.match(/(\w*)\/(.*)/)){let t=e.match(/(\w*)\/(.*)/);return t[1]+" ("+t[2]+")"}return e}},creators:{label:"Creator",type:"facet"},yearPublished:{label:"Published",type:"range"},license:{label:"Rights",type:"facet",valueMap:r},"type.raw":{label:"Type",type:"facet",typeahead:"type",ignore:["CreativeWork","MediaObject"],valueMap:e=>e.replace(/(.)([A-Z])/g,"$1 $2")},"abouts.raw":{label:"Subject",type:"facet",typeahead:"abouts"}},textFields:{record:["name","description","identifiers","abouts","keywords","alternativeHeadline","indexableContents"],collection:["name","description","about","keywords"]},maxFacetCount:50}}},function(e,t,n){"use strict";n.d(t,"b",(function(){return _})),n.d(t,"a",(function(){return b}));n(6);var i=n(23),r=n(18),o=n(3),s=n(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a=null;function l(){return a}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});const c=Object(i.a)(l),h=Object(r.a)(c);const d=Object(i.a)(class{});class p extends d{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,n(e)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(e,t,n)}}_showHideChildren(e){let t=this.children;for(let n=0;n<t.length;n++){let i=t[n];if(Boolean(e)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),Object(s.a)(Object(s.a)(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const e=i.__polymerReplaced__;e&&Object(s.a)(Object(s.a)(e).parentNode).replaceChild(i,e)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}p.prototype.__dataHost,p.prototype.__templatizeOptions,p.prototype._methodHost,p.prototype.__templatizeOwner,p.prototype.__hostProps;const u=Object(r.a)(p);function f(e){let t=e.__dataHost;return t&&t._methodHost||t}function g(e,t,n){let i=n.mutableData?u:p;_.mixin&&(i=_.mixin(i));let r=class extends i{};return r.prototype.__templatizeOptions=n,r.prototype._bindTemplate(e),function(e,t,n,i){let r=n.hostProps||{};for(let t in i.instanceProps){delete r[t];let n=i.notifyInstanceProp;n&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:y(t,n)})}if(i.forwardHostProp&&t.__dataHost)for(let t in r)n.hasHostProps||(n.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,n){e.__dataHost._setPendingPropertyOrPath("_host_"+t,n[t],!0,!0)}})}(r,e,t,n),r}function m(e,t,n){let i=n.forwardHostProp;if(i&&t.hasHostProps){let r=t.templatizeTemplateClass;if(!r){let e=n.mutableData?h:c;r=t.templatizeTemplateClass=class extends e{};let o=t.hostProps;for(let e in o)r.prototype._addPropertyEffect("_host_"+e,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:v(e,i)}),r.prototype._createNotifyingProperty("_host_"+e)}!function(e,t){a=e,Object.setPrototypeOf(e,t.prototype),new t,a=null}(e,r),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function v(e,t){return function(e,n,i){t.call(e.__templatizeOwner,n.substring("_host_".length),i[n])}}function y(e,t){return function(e,n,i){t.call(e.__templatizeOwner,e,n,i[n])}}function _(e,t,n){if(o.g&&!f(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:p)._parseTemplate(e),r=i.templatizeInstanceClass;r||(r=g(e,i,n),i.templatizeInstanceClass=r),m(e,i,n);let s=class extends r{};return s.prototype._methodHost=f(e),s.prototype.__dataHost=e,s.prototype.__templatizeOwner=t,s.prototype.__hostProps=i.hostProps,s=s,s}function b(e,t){let n;for(;t;)if(n=t.__templatizeInstance){if(n.__dataHost==e)return n;t=n.__dataHost}else t=Object(s.a)(t).parentNode;return null}},function(e,t,n){"use strict";n(6);var i=n(3),r=n(8),o=n(30),s=n(13),a=n(29),l=n(23);const c=[];var h=n(38);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const d=Object(r.a)(e=>{const t=Object(h.a)(e);function n(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const n=e.properties;n&&(t=function(e){const t={};for(let n in e){const i=e[n];t[n]="function"==typeof i?{type:i}:i}return t}(n))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){e=this.prototype,c.push(e);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(e=>this.attributeNameForProperty(e)):[]}var e;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=i(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=n(this);this.__properties=Object.assign({},e&&e._properties,i(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});var p=n(0);n.d(t,"a",(function(){return g}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const u="3.3.1",f=window.ShadyCSS&&window.ShadyCSS.cssBuild,g=Object(r.a)(e=>{const t=d(Object(l.a)(e));return class extends t{static get polymerElementVersion(){return u}static _finalizeClass(){t._finalizeClass.call(this);const e=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):i.c||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let o in e)t=this.prototype,n=o,i=e[o],r=e,i.computed&&(i.readOnly=!0),i.computed&&(t._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):t._createComputedProperty(n,i.computed,r)),i.readOnly&&!t._hasReadOnlyEffect(n)?t._createReadOnlyProperty(n,!i.computed):!1===i.readOnly&&t._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),i.reflectToAttribute&&!t._hasReflectEffect(n)?t._createReflectedProperty(n):!1===i.reflectToAttribute&&t._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),i.notify&&!t._hasNotifyEffect(n)?t._createNotifyingProperty(n):!1===i.notify&&t._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),i.observer&&t._createPropertyObserver(n,i.observer,r[i.observer]),t._addPropertyToAttributeMap(n);var t,n,i,r}static createObservers(e,t){const n=this.prototype;for(let i=0;i<e.length;i++)n._createMethodObserver(e[i],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;if(e&&(!i.g||i.a)&&(t=a.a.import(e,"template"),i.g&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=Object(s.a)(e.url);else{const e=a.a.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=i.e,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let i=t[n];"value"in i&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=i)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let n=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return Object(s.b)(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const n=this.importPath;!function(e,t,n,i){if(!f){const r=t.content.querySelectorAll("style"),s=Object(o.c)(t),a=Object(o.b)(n),l=t.content.firstElementChild;for(let n=0;n<a.length;n++){let r=a[n];r.textContent=e._processStyleText(r.textContent,i),t.content.insertBefore(r,l)}let c=0;for(let t=0;t<s.length;t++){let n=s[t],o=r[c];o!==n?(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)):c++,n.textContent=e._processStyleText(n.textContent,i)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n)}(this,t,e,n?Object(s.c)(n):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=Object(p.a)(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e)),i.h&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Object(s.c)(this.importPath)),Object(s.c)(e,t)}static _parseTemplateContent(e,n,i){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,i)}static _addTemplatePropertyEffect(e,n,r){return!i.c||n in this._properties||console.warn(`Property '${n}' used in template but not declared in 'properties'; `+"attribute will not be observed."),t._addTemplatePropertyEffect.call(this,e,n,r)}}})},function(e,t,n){"use strict";n(6);var i=n(0),r=n(8),o=n(1),s=n(16),a=n(37);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l={"dom-if":!0,"dom-repeat":!0};let c=!1,h=!1;function d(e){(function(){if(!c){c=!0;const e=document.createElement("textarea");e.placeholder="a",h=e.placeholder===e.textContent}return h})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function p(e){let t=e.getAttribute("is");if(t&&l[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function u(e,t){let n=t.parentInfo&&u(e,t.parentInfo);if(!n)return e;for(let e=n.firstChild,i=0;e;e=e.nextSibling)if(t.parentIndex===i++)return e}function f(e,t,n,i){i.id&&(t[i.id]=n)}function g(e,t,n){if(n.events&&n.events.length)for(let i,r=0,o=n.events;r<o.length&&(i=o[r]);r++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function m(e,t,n){n.templateInfo&&(t._templateInfo=n.templateInfo)}const v=Object(r.a)(e=>{return class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let i=!1,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(r,t,n)||i,d(r),r.firstChild&&this._parseTemplateChildNodes(r,t,n),r.hasAttributes&&r.hasAttributes()&&(i=this._parseTemplateNodeAttributes(r,t,n)||i),i}static _parseTemplateChildNodes(e,t,n){if("script"!==e.localName&&"style"!==e.localName)for(let i,r=e.firstChild,o=0;r;r=i){if("template"==r.localName&&(r=p(r)),i=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=i;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,i=n.nextSibling,e.removeChild(n),n=i;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let s={parentIndex:o,parentInfo:n};this._parseTemplateNode(r,t,s)&&(s.infoIndex=t.nodeInfoList.push(s)-1),r.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,n){let i=e,r=this._parseTemplate(i,t);return(r.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),n.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,n){let i=!1,r=Array.from(e.attributes);for(let o,s=r.length-1;o=r[s];s--)i=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||i;return i}static _parseTemplateNodeAttribute(e,t,n,i,r){return"on-"===i.slice(0,3)?(e.removeAttribute(i),n.events=n.events||[],n.events.push({name:i.slice(3),value:r}),!0):"id"===i&&(n.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),n=t.nodeInfoList,i=t.content||e.content,r=document.importNode(i,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let o=r.nodeList=new Array(n.length);r.$={};for(let e,t=0,i=n.length;t<i&&(e=n[t]);t++){let n=o[t]=u(r,e);f(0,r.$,n,e),m(0,n,e),g(this,n,e)}return r=r,r}_addMethodEventListenerToNode(e,t,n,i){let r=function(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}(i=i||e,0,n);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}});var y=n(3);n.d(t,"a",(function(){return Y}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
let _=0;const b={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},w=/[A-Z]/;function z(e,t){let n=e[t];if(n){if(!e.hasOwnProperty(t)){n=e[t]=Object.create(e[t]);for(let e in n){let t=n[e],i=n[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}}else n=e[t]={};return n}function C(e,t,n,i,r,o){if(t){let s=!1,a=_++;for(let l in n)S(e,t,a,l,n,i,r,o)&&(s=!0);return s}return!1}function S(e,t,n,i,r,s,a,l){let c=!1,h=t[a?Object(o.g)(i):i];if(h)for(let t,o=0,d=h.length;o<d&&(t=h[o]);o++)t.info&&t.info.lastRun===n||a&&!M(i,t.trigger)||(t.info&&(t.info.lastRun=n),t.fn(e,i,r,s,t.info,a,l),c=!0);return c}function M(e,t){if(t){let n=t.name;return n==e||!(!t.structured||!Object(o.b)(n,e))||!(!t.wildcard||!Object(o.c)(n,e))}return!0}function x(e,t,n,i,r){let o="string"==typeof r.method?e[r.method]:r.method,s=r.property;o?o.call(e,e.__data[s],i[s]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function E(e,t,n){let i=Object(o.g)(t);if(i!==t){return O(e,Object(s.a)(i)+"-changed",n[t],t),!0}return!1}function O(e,t,n,r){let o={value:n,queueProperty:!0};r&&(o.path=r),Object(i.a)(e).dispatchEvent(new CustomEvent(t,{detail:o}))}function A(e,t,n,i,r,s){let a=(s?Object(o.g)(t):t)!=t?t:null,l=a?Object(o.a)(e,a):e.__data[t];a&&void 0===l&&(l=n[t]),O(e,r.eventName,l,a)}function L(e,t,n,i,r){let o=e.__data[t];y.f&&(o=Object(y.f)(o,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,o)}function H(e,t,n,i,r){let o=j(e,t,n,i,r),s=r.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[s]?e._setPendingProperty(s,o,!0):e[s]=o}function P(e,t,n,i,r,o,a){n.bindings=n.bindings||[];let l={kind:i,target:r,parts:o,literal:a,isCompound:1!==o.length};if(n.bindings.push(l),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(l)){let{event:e,negate:t}=l.parts[0];l.listenerEvent=e||Object(s.a)(r)+"-changed",l.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<l.parts.length;n++){let i=l.parts[n];i.compoundIndex=n,T(e,t,l,i,c)}}function T(e,t,n,i,r){if(!i.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let o=i.dependencies,s={index:r,binding:n,part:i,evaluator:e};for(let n=0;n<o.length;n++){let i=o[n];"string"==typeof i&&(i=B(i),i.wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:R,info:s,trigger:i})}}}function R(e,t,n,i,r,s,a){let l=a[r.index],c=r.binding,h=r.part;if(s&&h.source&&t.length>h.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let i=n[t];t=Object(o.i)(h.source,c.target,t),l._setPendingPropertyOrPath(t,i,!1,!0)&&e._enqueueClient(l)}else{!function(e,t,n,i,r){r=function(e,t,n,i){if(n.isCompound){let r=e.__dataCompoundStorage[n.target];r[i.compoundIndex]=t,t=r.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,r,n,i),y.f&&(r=Object(y.f)(r,n.target,n.kind,t));if("attribute"==n.kind)e._valueToNodeAttribute(t,r,n.target);else{let i=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?t[b.READ_ONLY]&&t[b.READ_ONLY][i]||t._setPendingProperty(i,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,r)}}(e,l,c,h,r.evaluator._evaluateBinding(e,h,t,n,i,s))}}function V(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,o=new Array(r.length);for(let e=0;e<r.length;e++)o[e]=r[e].literal;let s=t.target;n[s]=o,t.literal&&"property"==t.kind&&("className"===s&&(e=Object(i.a)(e)),e[s]=t.literal)}}function k(e,t,n){if(n.listenerEvent){let i=n.parts[0];e.addEventListener(n.listenerEvent,(function(e){!function(e,t,n,i,r){let s,a=e.detail,l=a&&a.path;l?(i=Object(o.i)(n,i,l),s=a&&a.value):s=e.currentTarget[n],s=r?!s:s,t[b.READ_ONLY]&&t[b.READ_ONLY][i]||!t._setPendingPropertyOrPath(i,s,!0,Boolean(l))||a&&a.queueProperty||t._invalidateProperties()}(e,t,n.target,i.source,i.negate)}))}}function I(e,t,n,i,r,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let s={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:o};for(let r,o=0;o<t.args.length&&(r=t.args[o]);o++)r.literal||e._addPropertyEffect(r.rootProperty,n,{fn:i,info:s,trigger:r});o&&e._addPropertyEffect(t.methodName,n,{fn:i,info:s})}function j(e,t,n,i,r){let o=e._methodHost||e,s=o[r.methodName];if(s){let i=e._marshalArgs(r.args,t,n);return s.apply(o,i)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const D=[],N=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function U(e){let t="";for(let n=0;n<e.length;n++){t+=e[n].literal||""}return t}function F(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:D};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let n=B(e);return n.literal||(t.static=!1),n}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function B(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},i=t[0];switch("-"===i&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=Object(o.g)(t),n.structured=Object(o.d)(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n}function q(e,t,n){let i=Object(o.a)(e,n);return void 0===i&&(i=t[n]),i}function $(e,t,n,i){e.notifyPath(n+".splices",{indexSplices:i}),e.notifyPath(n+".length",t.length)}function K(e,t,n,i,r,o){$(e,t,n,[{index:i,addedCount:r,removed:o,object:t,type:"splice"}])}const Y=Object(r.a)(e=>{const t=v(Object(a.a)(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return b}_initializeProperties(){super._initializeProperties(),Z.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[b.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==b.READ_ONLY);let i=z(this,t)[e];i||(i=this[t][e]=[]),i.push(n)}_removePropertyEffect(e,t,n){let i=z(this,t)[e],r=i.indexOf(n);r>=0&&i.splice(r,1)}_hasPropertyEffect(e,t){let n=this[t];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,b.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,b.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,b.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,b.COMPUTE)}_setPendingPropertyOrPath(e,t,n,i){if(i||Object(o.g)(Array.isArray(e)?e[0]:e)!==e){if(!i){let n=Object(o.a)(this,e);if(!(e=Object(o.h)(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return function(e,t,n){let i=e.__dataLinkedPaths;if(i){let r;for(let s in i){let a=i[s];Object(o.c)(s,t)?(r=Object(o.i)(s,a,t),e._setPendingPropertyOrPath(r,n,!0,!0)):Object(o.c)(a,t)&&(r=Object(o.i)(a,s,t),e._setPendingPropertyOrPath(r,n,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,n){n===e[t]&&"object"!=typeof n||("className"===t&&(e=Object(i.a)(e)),e[t]=n)}_setPendingProperty(e,t,n){let i=this.__dataHasPaths&&Object(o.d)(e),r=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),i?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(i||this[b.NOTIFY]&&this[b.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[b.READ_ONLY]&&this[b.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let i=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,n,i){let r=e[b.COMPUTE];if(r){let o=t;for(;C(e,r,o,n,i);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}(this,t,n,i);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,n,i),this._flushClients(),C(this,this[b.REFLECT],t,n,i),C(this,this[b.OBSERVE],t,n,i),r&&function(e,t,n,i,r){let o,s,a=e[b.NOTIFY],l=_++;for(let s in t)t[s]&&(a&&S(e,a,l,s,n,i,r)?o=!0:r&&E(e,s,n)&&(o=!0));o&&(s=e.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,r,t,n,i),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[b.PROPAGATE]&&C(this,this[b.PROPAGATE],e,t,n);let i=this.__templateInfo;for(;i;)C(this,i.propertyEffects,e,t,n,i.nodeList),i=i.nextTemplateInfo}linkPaths(e,t){e=Object(o.f)(e),t=Object(o.f)(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Object(o.f)(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:""};$(this,Object(o.a)(this,e,n),n.path,t)}get(e,t){return Object(o.a)(t||this,e)}set(e,t,n){n?Object(o.h)(n,e,t):this[b.READ_ONLY]&&this[b.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:""},i=Object(o.a)(this,e,n),r=i.length,s=i.push(...t);return t.length&&K(this,i,n.path,r,t.length,[]),s}pop(e){let t={path:""},n=Object(o.a)(this,e,t),i=Boolean(n.length),r=n.pop();return i&&K(this,n,t.path,n.length,0,[r]),r}splice(e,t,n,...i){let r,s={path:""},a=Object(o.a)(this,e,s);return t<0?t=a.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?a.splice(t):a.splice(t,n,...i),(i.length||r.length)&&K(this,a,s.path,t,i.length,r),r}shift(e){let t={path:""},n=Object(o.a)(this,e,t),i=Boolean(n.length),r=n.shift();return i&&K(this,n,t.path,0,0,[r]),r}unshift(e,...t){let n={path:""},i=Object(o.a)(this,e,n),r=i.unshift(...t);return t.length&&K(this,i,n.path,0,t.length,[]),r}notifyPath(e,t){let n;if(1==arguments.length){let i={path:""};t=Object(o.a)(this,e,i),n=i.path}else n=Array.isArray(e)?Object(o.f)(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var n;this._addPropertyEffect(e,b.READ_ONLY),t&&(this["_set"+(n=e,n[0].toUpperCase()+n.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let i={property:e,method:t,dynamicFn:Boolean(n)};this._addPropertyEffect(e,b.OBSERVE,{fn:x,info:i,trigger:{name:e}}),n&&this._addPropertyEffect(t,b.OBSERVE,{fn:x,info:i,trigger:{name:t}})}_createMethodObserver(e,t){let n=F(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");I(this,n,b.OBSERVE,j,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,b.NOTIFY,{fn:A,info:{eventName:Object(s.a)(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,b.REFLECT,{fn:L,info:{attrName:t}})}_createComputedProperty(e,t,n){let i=F(t);if(!i)throw new Error("Malformed computed expression '"+t+"'");I(this,i,b.COMPUTE,H,e,n)}_marshalArgs(e,t,n){const i=this.__data,r=[];for(let s=0,a=e.length;s<a;s++){let{name:a,structured:l,wildcard:c,value:h,literal:d}=e[s];if(!d)if(c){const e=Object(o.c)(a,t),r=q(i,n,e?t:a);h={path:e?t:a,value:r,base:e?Object(o.a)(i,a):r}}else h=l?q(i,n,a):i[a];r[s]=h}return r}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),i=this.__templateInfo==n;if(!i)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t&&(n=Object.create(n),n.wasPreBound=i,!i&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=n,n.previousTemplateInfo=e,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(e,t,n){(e.hostProps=e.hostProps||{})[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e){Z.beginHosting(this);let t=super._stampTemplate(e);Z.endHosting(this);let n=this._bindTemplate(e,!0);if(n.nodeList=t.nodeList,!n.wasPreBound){let e=n.childNodes=[];for(let n=t.firstChild;n;n=n.nextSibling)e.push(n)}return t.templateInfo=n,function(e,t){let{nodeList:n,nodeInfoList:i}=t;if(i.length)for(let t=0;t<i.length;t++){let r=i[t],o=n[t],s=r.bindings;if(s)for(let t=0;t<s.length;t++){let n=s[t];V(o,n),k(o,e,n)}o.__dataHost=e}}(this,n),this.__dataReady&&C(this,n.propertyEffects,this.__data,null,!1,n.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let n=t.childNodes;for(let e=0;e<n.length;e++){let t=n[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,n,i){let r=t._parseTemplateNode.call(this,e,n,i);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=U(t)||" ",P(this,n,i,"text","textContent",t),r=!0)}return r}static _parseTemplateNodeAttribute(e,n,i,r,o){let a=this._parseBindings(o,n);if(a){let t=r,o="property";w.test(r)?o="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),o="attribute");let l=U(a);return l&&"attribute"==o&&("class"==r&&e.hasAttribute("class")&&(l+=" "+e.getAttribute(r)),e.setAttribute(r,l)),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===o&&(r=Object(s.b)(r)),P(this,n,i,o,r,a,l),!0}return t._parseTemplateNodeAttribute.call(this,e,n,i,r,o)}static _parseTemplateNestedTemplate(e,n,i){let r=t._parseTemplateNestedTemplate.call(this,e,n,i),o=i.templateInfo.hostProps;for(let e in o){P(this,n,i,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}])}return r}static _parseBindings(e,t){let n,i=[],r=0;for(;null!==(n=N.exec(e));){n.index>r&&i.push({literal:e.slice(r,n.index)});let o=n[1][0],s=Boolean(n[2]),a=n[3].trim(),l=!1,c="",h=-1;"{"==o&&(h=a.indexOf("::"))>0&&(c=a.substring(h+2),a=a.substring(0,h),l=!0);let d=F(a),p=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||p.push(n)}let i=t.dynamicFns;(i&&i[n]||d.static)&&(p.push(n),d.dynamicFn=!0)}else p.push(a);i.push({source:a,mode:o,negate:s,customEvent:l,signature:d,dependencies:p,event:c}),r=N.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&i.push({literal:t})}return i.length?i:null}static _evaluateBinding(e,t,n,i,r,s){let a;return a=t.signature?j(e,n,i,0,t.signature):n!=t.source?Object(o.a)(e,t.source):s&&Object(o.d)(n)?Object(o.a)(e,n):e.__data[n],t.negate&&(a=!a),a}}});const Z=new class{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}}},function(e,t,n){const{AppStateInterface:i}=n(46);e.exports=e=>(class extends(Mixin(e).with(i)){_getSelectedRecord(){return this.AppStateModel.getSelectedRecord()}_getSelectedRecordMedia(){return this.AppStateModel.getSelectedRecordMedia()}})},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));n(7),n(42);var i=n(35),r=n(2);
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
const o={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,n=Object(r.b)(t).localTarget;this.isLightDescendant(n)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,n=Object(r.b)(t).localTarget;this.isLightDescendant(n)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},s=[i.a,o]},function(e,t){e.exports=e=>(class extends e{constructor(){super(),this._injectModel("AuthModel")}ready(){super.ready(),this._onAuthUpdate(this.AuthModel.store.getUser())}_onAuthUpdate(e){}async _getUser(){return this.AuthModel.getUser()}_logout(){this.AuthModel.logout()}_login(){this.AuthModel.login()}})},function(e,t,n){"use strict";var i=n(11);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function o(e){return function e(t,n){let i=n.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;i=n.substring(e,t.start-1),i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(i),i=i.replace(h.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let r=t.parsedSelector=t.selector=i.trim();t.atRule=0===r.indexOf(u),t.atRule?0===r.indexOf(p)?t.type=a.MEDIA_RULE:r.match(h.keyframesRule)&&(t.type=a.KEYFRAMES_RULE,t.keyframesName=t.selector.split(h.multipleSpaces).pop()):0===r.indexOf(d)?t.type=a.MIXIN_RULE:t.type=a.STYLE_RULE}let r=t.rules;if(r)for(let t,i=0,o=r.length;i<o&&(t=r[i]);i++)e(t,n);return t}(function(e){let t=new r;t.start=0,t.end=e.length;let n=t;for(let i=0,o=e.length;i<o;i++)if(e[i]===l){n.rules||(n.rules=[]);let e=n,t=e.rules[e.rules.length-1]||null;n=new r,n.start=i+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[i]===c&&(n.end=i+1,n=n.parent||t);return t}(e=e.replace(h.comments,"").replace(h.port,"")),e)}function s(e,t,n=""){let i="";if(e.cssText||e.rules){let n=e.rules;if(n&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(d)}(n))for(let e,r=0,o=n.length;r<o&&(e=n[r]);r++)i=s(e,t,i);else i=t?e.cssText:function(e){return function(e){return e.replace(h.mixinApply,"").replace(h.varApply,"")}(e=function(e){return e.replace(h.customProp,"").replace(h.mixinProp,"")}(e))}(e.cssText),i=i.trim(),i&&(i="  "+i+"\n")}return i&&(e.selector&&(n+=e.selector+" "+l+"\n"),n+=i,e.selector&&(n+=c+"\n\n")),n}const a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",h={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},d="--",p="@media",u="@";var f=n(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const g=new Set,m="shady-unscoped";function v(e){const t=e.textContent;if(!g.has(t)){g.add(t);const n=e.cloneNode(!0);document.head.appendChild(n)}}function y(e){return e.hasAttribute(m)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function _(e,t){return e?("string"==typeof e&&(e=o(e)),t&&w(e,t),s(e,i.c)):""}function b(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=o(e.textContent)),e.__cssRules||null}function w(e,t,n,i){if(!e)return;let r=!1,o=e.type;if(i&&o===a.MEDIA_RULE){let t=e.selector.match(f.a);t&&(window.matchMedia(t[1]).matches||(r=!0))}o===a.STYLE_RULE?t(e):n&&o===a.KEYFRAMES_RULE?n(e):o===a.MIXIN_RULE&&(r=!0);let s=e.rules;if(s&&!r)for(let e,r=0,o=s.length;r<o&&(e=s[r]);r++)w(e,t,n,i)}function z(e,t){let n=0;for(let i=t,r=e.length;i<r;i++)if("("===e[i])n++;else if(")"===e[i]&&0==--n)return i;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;const C="css-build";function S(e){if(void 0!==i.a)return i.a;if(void 0===e.__cssBuild){const t=e.getAttribute(C);if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===C)return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=t}}return e.__cssBuild||""}function M(e){return""!==S(e)}var x=n(19);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const E=/;\s*/m,O=/^\s*(initial)|(inherit)\s*$/,A=/\s*!important/,L="_-_";class H{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let P=null;class T{constructor(){this._currentElement=null,this._measureElement=null,this._map=new H}detectMixin(e){return Object(x.a)(e)}gatherStyles(e){const t=function(e){const t=[],n=e.querySelectorAll("style");for(let e=0;e<n.length;e++){const r=n[e];y(r)?i.d||(v(r),r.parentNode.removeChild(r)):(t.push(r.textContent),r.parentNode.removeChild(r))}return t.join("").trim()}(e.content);if(t){const n=document.createElement("style");return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=""){let n=b(e);return this.transformRules(n,t),e.textContent=_(n),n}transformCustomStyle(e){let t=b(e);return w(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=_(t),t}transformRules(e,t){this._currentElement=t,w(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(f.c,(e,n,i,r)=>this._produceCssProperties(e,n,i,r,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const n={};let i=!1;return w(t,t=>{i=i||t===e,i||t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))}),n}_consumeCssProperties(e,t){let n=null;for(;n=f.b.exec(e);){let i=n[0],r=n[1],o=n.index,s=o+i.indexOf("@apply"),a=o+i.length,l=e.slice(0,s),c=e.slice(a),h=t?this._fallbacksFromPreviousRules(t):{};Object.assign(h,this._cssTextToMap(l));let d=this._atApplyToCssProperties(r,h);e=`${l}${d}${c}`,f.b.lastIndex=o+d.length}return e}_atApplyToCssProperties(e,t){e=e.replace(E,"");let n=[],i=this._map.get(e);if(i||(this._map.set(e,{}),i=this._map.get(e)),i){let r,o,s;this._currentElement&&(i.dependants[this._currentElement]=!0);const a=i.properties;for(r in a)s=t&&t[r],o=[r,": var(",e,L,r],s&&o.push(",",s.replace(A,"")),o.push(")"),A.test(a[r])&&o.push(" !important"),n.push(o.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,t){let n=O.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let n,i,r=e.split(";"),o={};for(let e,s,a=0;a<r.length;a++)e=r[a],e&&(s=e.split(":"),s.length>1&&(n=s[0].trim(),i=s.slice(1).join(":"),t&&(i=this._replaceInitialOrInherit(n,i)),o[n]=i));return o}_invalidateMixinEntry(e){if(P)for(let t in e.dependants)t!==this._currentElement&&P(t)}_produceCssProperties(e,t,n,i,r){if(n&&function e(t,n){let i=t.indexOf("var(");if(-1===i)return n(t,"","","");let r=z(t,i+3),o=t.substring(i+4,r),s=t.substring(0,i),a=e(t.substring(r+1),n),l=o.indexOf(",");return-1===l?n(s,o.trim(),"",a):n(s,o.substring(0,l).trim(),o.substring(l+1).trim(),a)}(n,(e,t)=>{t&&this._map.get(t)&&(i=`@apply ${t};`)}),!i)return e;let o=this._consumeCssProperties(""+i,r),s=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(o,!0),l=a,c=this._map.get(t),h=c&&c.properties;h?l=Object.assign(Object.create(h),a):this._map.set(t,l);let d,p,u=[],f=!1;for(d in l)p=a[d],void 0===p&&(p="initial"),!h||d in h||(f=!0),u.push(`${t}${L}${d}: ${p}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),n&&(s=`${e};${s}`),`${s}${u.join("; ")};`}}T.prototype.detectMixin=T.prototype.detectMixin,T.prototype.transformStyle=T.prototype.transformStyle,T.prototype.transformCustomStyle=T.prototype.transformCustomStyle,T.prototype.transformRules=T.prototype.transformRules,T.prototype.transformRule=T.prototype.transformRule,T.prototype.transformTemplate=T.prototype.transformTemplate,T.prototype._separator=L,Object.defineProperty(T.prototype,"invalidCallback",{get:()=>P,set(e){P=e}});var R=T;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var V={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const k="_applyShimCurrentVersion",I="_applyShimNextVersion",j="_applyShimValidatingVersion",D=Promise.resolve();function N(e){let t=V[e];t&&function(e){e[k]=e[k]||0,e[j]=e[j]||0,e[I]=(e[I]||0)+1}(t)}function U(e){return e[k]===e[I]}function F(e){return!U(e)&&e[j]===e[I]}function B(e){e[j]=e[I],e._validating||(e._validating=!0,D.then((function(){e[k]=e[I],e._validating=!1})))}n(50);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const q=new R;class ${constructor(){this.customStyleInterface=null,q.invalidCallback=N}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{q.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),M(e))return;V[t]=e;let n=q.transformTemplate(e,t);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let n=e[t],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&q.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&Object(x.c)(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,n="",i="";return t?t.indexOf("-")>-1?n=t:(i=t,n=e.getAttribute&&e.getAttribute("is")||""):(n=e.is,i=e.extends),{is:n,typeExtension:i}}(e),n=V[t];if((!n||!M(n))&&n&&!U(n)){F(n)||(this.prepareTemplate(n,t),B(n));let i=e.shadowRoot;if(i){let e=i.querySelector("style");e&&(e.__cssRules=n._styleAst,e.textContent=_(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new $;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,i){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>Object(x.b)(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:i.c,nativeShadow:i.d,cssBuild:i.a,disableRuntime:i.b},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=q;var K=n(22),Y=n(39),Z=n(37),G=n(8);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const J=/:host\(:dir\((ltr|rtl)\)\)/g,W=':host([dir="$1"])',X=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Q=':host([dir="$2"]) $1',ee=/:dir\((?:ltr|rtl)\)/,te=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),ne=[];let ie=null,re="";function oe(){re=document.documentElement.getAttribute("dir")}function se(e){if(!e.__autoDirOptOut){e.setAttribute("dir",re)}}function ae(){oe(),re=document.documentElement.getAttribute("dir");for(let e=0;e<ne.length;e++)se(ne[e])}const le=Object(G.a)(e=>{te||ie||(oe(),ie=new MutationObserver(ae),ie.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Object(Z.a)(e);class n extends t{static _processStyleText(e,n){return e=t._processStyleText.call(this,e,n),!te&&ee.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(J,W),t=t.replace(X,Q),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(ie&&ie.takeRecords().length&&ae(),ne.push(this),se(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=ne.indexOf(this);e>-1&&ne.splice(e,1)}}}return n.__activateDir=!1,n});n(76);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ce(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?ce():window.addEventListener("DOMContentLoaded",ce);var he=n(2),de=n(31),pe=n(14),ue=n(10),fe=n(1),ge=n(0);n(6);
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const me=window.ShadyDOM,ve=window.ShadyCSS;function ye(e,t){return Object(ge.a)(e).getRootNode()===t}n.d(t,"a",(function(){return be}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let _e=window.ShadyCSS;const be=Object(G.a)(e=>{const t=le(Object(Y.a)(Object(K.a)(e))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,n,i){t!==n&&(super.attributeChangedCallback(e,t,n,i),this.attributeChanged(e,t,n))}attributeChanged(e,t,n){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!e||!t)return e||t;let n=Object.getOwnPropertyNames(t);for(let i,r=0;r<n.length&&(i=n[r]);r++){let n=Object.getOwnPropertyDescriptor(t,i);n&&Object.defineProperty(e,i,n)}return e}mixin(e,t){for(let n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n=n||{},t=null==t?{}:t;let i=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});i.detail=t;let r=n.node||this;return Object(ge.a)(r).dispatchEvent(i),i}listen(e,t,n){e=e||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),r=i.get(e);r||(r={},i.set(e,r));let o=t+n;r[o]||(r[o]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e=e||this;let i=this.__boundListeners&&this.__boundListeners.get(e),r=t+n,o=i&&i[r];o&&(this._removeEventListenerFromNode(e,t,o),i[r]=null)}setScrollDirection(e,t){Object(de.c)(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=Object(ge.a)(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Object(he.b)(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(he.b)(this).getEffectiveChildNodes()}queryDistributedElements(e){return Object(he.b)(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let n,i=0;n=e[i];i++)n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Object(he.b)(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&Object(ge.a)(this).contains(e)&&Object(ge.a)(this).getRootNode()===Object(ge.a)(e).getRootNode()}isLocalDescendant(e){return this.root===Object(ge.a)(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!me||!ve)return null;if(!me.handlesDynamicScoping)return null;const n=ve.ScopingShim;if(!n)return null;const i=n.scopeForNode(e),r=Object(ge.a)(e).getRootNode(),o=e=>{if(!ye(e,r))return;const t=Array.from(me.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const o=t[e];if(!ye(o,r))continue;const s=n.currentScopeForNode(o);s!==i&&(""!==s&&n.unscopeNode(o,s),n.scopeNode(o,i))}};if(o(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const n=e[t];for(let e=0;e<n.addedNodes.length;e++){const t=n.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&o(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return _e.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=pe.a.debounce(this._debouncers[e],n>0?ue.d.after(n):ue.c,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?ue.d.run(e.bind(this),t):~ue.c.run(e.bind(this))}cancelAsync(e){e<0?ue.c.cancel(~e):ue.d.cancel(e)}create(e,t){let n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(let e in t)n[e]=t[e];return n}elementMatches(e,t){return Object(he.d)(t||this,e)}toggleAttribute(e,t){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(t=!n.hasAttribute(e)),t?(Object(ge.a)(n).setAttribute(e,""),!0):(Object(ge.a)(n).removeAttribute(e),!1)}toggleClass(e,t,n){n=n||this,1==arguments.length&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,i){i=i||this,this.transform("translate3d("+e+","+t+","+n+")",i)}arrayDelete(e,t){let n;if(Array.isArray(e)){if(n=e.indexOf(t),n>=0)return e.splice(n,1)}else{if(n=Object(fe.a)(this,e).indexOf(t),n>=0)return this.splice(e,n,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return i.prototype.is="",i})},function(e,t,n){const i=n(85).EventEmitter;e.exports=new class extends i{constructor(){super(),this.setMaxListeners(1e4)}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(6);var i=n(13),r=n(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let o={},s={};function a(e,t){o[e]=s[e.toLowerCase()]=t}function l(e){return o[e]||s[e.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let n=l(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,i){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Object(i.c)(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Object(i.a)(t)}return this.__assetpath}register(e){if(e=e||this.id){if(r.g&&void 0!==l(e))throw a(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,a(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}c.prototype.modules=o,customElements.define("dom-module",c)},function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return g}));var i=n(29),r=n(13);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o="link[rel=import][type~=css]",s="include",a="shady-unscoped";function l(e){return i.a.import(e)}function c(e){let t=e.body?e.body:e;const n=Object(r.b)(t.textContent,e.baseURI),i=document.createElement("style");return i.textContent=n,i}function h(e){const t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...d(t[e]));return n}function d(e){const t=l(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...f(t));const n=t.querySelector("template");n&&e.push(...p(n,t.assetpath)),t._styles=e}return t._styles}function p(e,t){if(!e._styles){const n=[],i=e.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let o=i[e],a=o.getAttribute(s);a&&n.push(...h(a).filter((function(e,t,n){return n.indexOf(e)===t}))),t&&(o.textContent=Object(r.b)(o.textContent,t)),n.push(o)}e._styles=n}return e._styles}function u(e){let t=l(e);return t?f(t):[]}function f(e){const t=[],n=e.querySelectorAll(o);for(let e=0;e<n.length;e++){let i=n[e];if(i.import){const e=i.import,n=i.hasAttribute(a);if(n&&!e._unscopedStyle){const t=c(e);t.setAttribute(a,""),e._unscopedStyle=t}else e._style||(e._style=c(e));t.push(n?e._unscopedStyle:e._style)}}return t}function g(e){let t=e.trim().split(/\s+/),n="";for(let e=0;e<t.length;e++)n+=m(t[e]);return n}function m(e){let t=l(e);if(t&&void 0===t._cssText){let e=v(t),n=t.querySelector("template");n&&(e+=function(e,t){let n="";const i=p(e,t);for(let e=0;e<i.length;e++){let t=i[e];t.parentNode&&t.parentNode.removeChild(t),n+=t.textContent}return n}(n,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function v(e){let t="",n=f(e);for(let e=0;e<n.length;e++)t+=n[e].textContent;return t}},function(e,t,n){"use strict";n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return D}));n(6);var i=n(10),r=n(14),o=n(3),s=n(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a="string"==typeof document.head.style.touchAction,l="__polymerGestures",c="__polymerGesturesHandled",h="__polymerGesturesTouchAction",d=25,p=5,u=2500,f=["mousedown","mousemove","mouseup","click"],g=[0,1,4,2],m=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function v(e){return f.indexOf(e)>-1}let y=!1;function _(e){if(!v(e)&&"touchend"!==e)return a&&y&&o.d?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){y=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let b=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const w=[],z={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},C={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function S(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let n=e.getRootNode();if(e.id){let i=n.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<i.length;e++)t.push(i[e])}}return t}let M=function(e){let t=e.sourceCapabilities;var n;if((!t||t.firesTouchEvents)&&(e[c]={skip:!0},"click"===e.type)){let t=!1,i=H(e);for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)w.push(i[e]);else if(n=i[e],z[n.localName]){let n=S(i[e]);for(let e=0;e<n.length;e++)t=t||w.indexOf(n[e])>-1}if(i[e]===O.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function x(e){let t=b?["click"]:f;for(let n,i=0;i<t.length;i++)n=t[i],e?(w.length=0,document.addEventListener(n,M,!0)):document.removeEventListener(n,M,!0)}function E(e){let t=e.type;if(!v(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!m&&(t=g[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let O={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function A(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function L(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}o.b&&document.addEventListener("touchend",(function(e){if(!o.b)return;O.mouse.mouseIgnoreJob||x(!0),O.mouse.target=H(e)[0],O.mouse.mouseIgnoreJob=r.a.debounce(O.mouse.mouseIgnoreJob,i.d.after(u),(function(){x(),O.mouse.target=null,O.mouse.mouseIgnoreJob=null}))}),!!y&&{passive:!0});const H=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],P={},T=[];function R(e){const t=H(e);return t.length>0?t[0]:e.target}function V(e){let t,n=e.type,i=e.currentTarget[l];if(!i)return;let r=i[n];if(r){if(!e[c]&&(e[c]={},"touch"===n.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(O.touch.id=t.identifier),O.touch.id!==t.identifier)return;a||"touchstart"!==n&&"touchmove"!==n||function(e){let t=e.changedTouches[0],n=e.type;if("touchstart"===n)O.touch.x=t.clientX,O.touch.y=t.clientY,O.touch.scrollDecided=!1;else if("touchmove"===n){if(O.touch.scrollDecided)return;O.touch.scrollDecided=!0;let n=function(e){let t="auto",n=H(e);for(let e,i=0;i<n.length;i++)if(e=n[i],e[h]){t=e[h];break}return t}(e),i=!1,r=Math.abs(O.touch.x-t.clientX),o=Math.abs(O.touch.y-t.clientY);e.cancelable&&("none"===n?i=!0:"pan-x"===n?i=o>r:"pan-y"===n&&(i=r>o)),i?e.preventDefault():U("track")}}(e)}if(t=e[c],!t.skip){for(let n,i=0;i<T.length;i++)n=T[i],r[n.name]&&!t[n.name]&&n.flow&&n.flow.start.indexOf(e.type)>-1&&n.reset&&n.reset();for(let i,o=0;o<T.length;o++)i=T[o],r[i.name]&&!t[i.name]&&(t[i.name]=!0,i[n](e))}}}function k(e,t,n){return!!P[t]&&(function(e,t,n){let i=P[t],r=i.deps,o=i.name,s=e[l];s||(e[l]=s={});for(let t,n,i=0;i<r.length;i++)t=r[i],b&&v(t)&&"click"!==t||(n=s[t],n||(s[t]=n={_count:0}),0===n._count&&e.addEventListener(t,V,_(t)),n[o]=(n[o]||0)+1,n._count=(n._count||0)+1);e.addEventListener(t,n),i.touchAction&&D(e,i.touchAction)}(e,t,n),!0)}function I(e,t,n){return!!P[t]&&(function(e,t,n){let i=P[t],r=i.deps,o=i.name,s=e[l];if(s)for(let t,n,i=0;i<r.length;i++)t=r[i],n=s[t],n&&n[o]&&(n[o]=(n[o]||1)-1,n._count=(n._count||1)-1,0===n._count&&e.removeEventListener(t,V,_(t)));e.removeEventListener(t,n)}(e,t,n),!0)}function j(e){T.push(e);for(let t=0;t<e.emits.length;t++)P[e.emits[t]]=e}function D(e,t){a&&e instanceof HTMLElement&&i.c.run(()=>{e.style.touchAction=t}),e[h]=t}function N(e,t,n){let i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=n,Object(s.a)(e).dispatchEvent(i),i.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function U(e){let t=function(e){for(let t,n=0;n<T.length;n++){t=T[n];for(let n,i=0;i<t.emits.length;i++)if(n=t.emits[i],n===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function F(e,t,n,i){t&&N(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:i,prevent:function(e){return U(e)}})}function B(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let i=Math.abs(e.x-t),r=Math.abs(e.y-n);return i>=p||r>=p}function q(e,t,n){if(!t)return;let i,r=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],s=o.x-e.x,a=o.y-e.y,l=0;r&&(i=o.x-r.x,l=o.y-r.y),N(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:s,dy:a,ddx:i,ddy:l,sourceEvent:n,hover:function(){return function(e,t){let n=document.elementFromPoint(e,t),i=n;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let r=i;if(i=i.shadowRoot.elementFromPoint(e,t),r===i)break;i&&(n=i)}return n}(n.clientX,n.clientY)}})}function $(e,t,n){let i=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),o=R(n||t);!o||C[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(r)||i<=d&&r<=d||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=R(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),i=e.pageX,r=e.pageY;return!(i>=n.left&&i<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(t))&&(e.prevent||N(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}j({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){L(this.info)},mousedown:function(e){if(!E(e))return;let t=R(e),n=this;A(this.info,(function(e){E(e)||(F("up",t,e),L(n.info))}),(function(e){E(e)&&F("up",t,e),L(n.info)})),F("down",t,e)},touchstart:function(e){F("down",R(e),e.changedTouches[0],e)},touchend:function(e){F("up",R(e),e.changedTouches[0],e)}}),j({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,L(this.info)},mousedown:function(e){if(!E(e))return;let t=R(e),n=this,i=function(e){let i=e.clientX,r=e.clientY;B(n.info,i,r)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&U("tap"),n.info.addMove({x:i,y:r}),E(e)||(n.info.state="end",L(n.info)),t&&q(n.info,t,e),n.info.started=!0)};A(this.info,i,(function(e){n.info.started&&i(e),L(n.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=R(e),n=e.changedTouches[0],i=n.clientX,r=n.clientY;B(this.info,i,r)&&("start"===this.info.state&&U("tap"),this.info.addMove({x:i,y:r}),q(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=R(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),q(this.info,t,n))}}),j({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){E(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){E(e)&&$(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){$(this.info,e.changedTouches[0],e)}})},function(e,t){e.exports=e=>(class extends e{constructor(){super(),this._injectModel("CollectionModel")}async _getCollectionOverview(){return this.CollectionModel.overview()}async _getCollection(e){return this.CollectionModel.get(e)}})},function(e,t){e.exports=e=>(class extends e{constructor(){super(),this._injectModel("RecordModel")}_defaultRecordSearch(e){return this.RecordModel.defaultSearch(e)}_getRecord(e){return this.RecordModel.get(e)}_searchDocumentToUrl(e,t){return this.RecordModel.searchDocumentToUrl(e,t)}_urlToSearchDocument(e){return this.RecordModel.urlToSearchDocument(e)}_getEmptySearchDocument(){return this.RecordModel.emptySearchDocument()}_setKeywordFilter(e,t,n,i){return this.RecordModel.setKeywordFilter(e,t,n,i)}_appendKeywordFilter(e,t,n,i){return this.RecordModel.appendKeywordFilter(e,t,n)}_removeKeywordFilter(e,t,n){return this.RecordModel.removeKeywordFilter(e,t,n)}_searchRecords(e,t){return this.RecordModel.search(e,t)}_getCurrentSearchDocument(){return this.RecordModel.getCurrentSearchDocument()}_setTextFilter(e,t){return this.RecordModel.setTextFilter(e,t)}_setPaging(e,t,n){return this.RecordModel.setPaging(e,t,n)}_appendRangeFilter(e,t,n){return this.RecordModel.appendRangeFilter(e,t,n)}_removeRangeFilter(e,t){return this.RecordModel.removeRangeFilter(e,t)}})},function(e,t,n){"use strict";n(7);var i=n(44),r=n(9),o=n(2);
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
Object(r.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new i.a({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var n=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(n){var i=Object(o.b)(e.root||e);return i.insertBefore(n,i.childNodes[0]),e._svgIcon=n}return null},removeIcon:function(e){e._svgIcon&&(Object(o.b)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return Object(o.b)(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,n){if(e){var i=e.cloneNode(!0),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=i.getAttribute("viewBox")||"0 0 "+t+" "+t,s="pointer-events: none; display: block; width: 100%; height: 100%;";return n&&i.hasAttribute("mirror-in-rtl")&&(s+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),r.setAttribute("viewBox",o),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("focusable","false"),r.style.cssText=s,r.appendChild(i).removeAttribute("id"),r}return null}})},function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));n(7);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var i={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},r={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},o={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},s=/[a-z0-9*]/,a=/U\+/,l=/^arrow/,c=/^space(bar)?/,h=/^escape$/;function d(e,t){var n="";if(e){var i=e.toLowerCase();" "===i||c.test(i)?n="space":h.test(i)?n="esc":1==i.length?t&&!s.test(i)||(n=i):n=l.test(i)?i.replace("arrow",""):"multiply"==i?"*":i}return n}function p(e,t){return e.key?d(e.key,t):e.detail&&e.detail.key?d(e.detail.key,t):(n=e.keyIdentifier,o="",n&&(n in i?o=i[n]:a.test(n)?(n=parseInt(n.replace("U+","0x"),16),o=String.fromCharCode(n).toLowerCase()):o=n.toLowerCase()),o||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):r[e]),t}(e.keyCode)||"");var n,o}function u(e,t){return p(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function f(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var n=t.split(":"),i=n[0],r=n[1];return i in o?(e[o[i]]=!0,e.hasModifiers=!0):(e.key=i,e.event=r||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}const g={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var n=f(t),i=0;i<n.length;++i)if(u(n[i],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var n=e[0].hasModifiers;return n===t[0].hasModifiers?0:n?-1:1}))},_addKeyBinding:function(e,t){f(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],n=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,n]),this.keyEventTarget.addEventListener(e,n)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,n,i;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],n=e[1],i=e[2],t.removeEventListener(n,i)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var n=0;n<e.length;n++){var i=e[n][0],r=e[n][1];if(u(i,t)&&(this._triggerKeyHandler(i,r,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,n){var i=Object.create(e);i.keyboardEvent=n;var r=new CustomEvent(e.event,{detail:i,cancelable:!0});this[t].call(this,r),r.defaultPrevented&&n.preventDefault()}}},function(e,t,n){const{AppStateModel:i}=n(46),r=n(103),o=n(20),s=n(43);e.exports=new class extends i{constructor(){super(),this.store=r,this._sendGA()}set(e){if(e.location){e.lastLocation=s(this.store.data.location);let t=e.location.path?e.location.path[0]:"home";t||(t="home"),"collection"===t&&(t=2===e.location.path.length?"search":"record"),e.location.page=t}return this._sendGA(),super.set(e)}_sendGA(){if(!window.gtag)return console.warn("No global gtag variable set for analytics events");this.lastGaLocation!==window.location.pathname&&(this.lastGaLocation=window.location.pathname,gtag("config",o.gaCode,{page_path:window.location.pathname}))}setSelectedRecord(e){this.store.setSelectedRecord(e)}getSelectedRecord(){return this.store.getSelectedRecord()}setSelectedRecordMedia(e){this.store.setSelectedRecordMedia(e)}getSelectedRecordMedia(){return this.store.getSelectedRecordMedia()}setSelectedCollection(e){this.store.setSelectedCollection(e)}getSelectedCollection(){return this.store.getSelectedCollection()}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(6);var i=n(8),r=n(16),o=n(38);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s={};let a=HTMLElement.prototype;for(;a;){let e=Object.getOwnPropertyNames(a);for(let t=0;t<e.length;t++)s[e[t]]=!0;a=Object.getPrototypeOf(a)}const l=Object(i.a)(e=>{const t=Object(o.a)(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Object(r.b)(e[t]))}static attributeNameForProperty(e){return Object(r.a)(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch(t){n=e}break;case Array:try{n=JSON.parse(e)}catch(t){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){!function(e,t){if(!s[t]){let n=e[t];void 0!==n&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(6);var i=n(8),r=n(10),o=n(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=r.c,a=Object(i.a)(e=>{return class extends e{static createProperties(e){const t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let i=this.__data[e],r=this._shouldPropertyChange(e,t,i);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=i),this.__data[e]=t,this.__dataPending[e]=t),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,s.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n))}_shouldPropertiesChange(e,t,n){return Boolean(t)}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n==n||t==t)}attributeChangedCallback(e,t,n,i){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,i)}_attributeToProperty(e,t,n){if(!this.__serializing){const i=this.__dataAttributes,r=i&&i[e]||e;this[r]=this._deserializeValue(t,n||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){const i=this._serializeValue(t);"class"!==n&&"name"!==n&&"slot"!==n||(e=Object(o.a)(e)),void 0===i?e.removeAttribute(n):e.setAttribute(n,i)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}})},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(6);var i=n(8),r=n(31);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=Object(i.a)(e=>{return class extends e{_addEventListenerToNode(e,t,n){Object(r.a)(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){Object(r.b)(e,t,n)||super._removeEventListenerFromNode(e,t,n)}}})},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function i(e,t,n){return{index:e,removed:t,addedCount:n}}const r=0,o=1,s=2,a=3;function l(e,t,n,l,c,d){let p,u=0,f=0,g=Math.min(n-t,d-c);if(0==t&&0==c&&(u=function(e,t,n){for(let i=0;i<n;i++)if(!h(e[i],t[i]))return i;return n}(e,l,g)),n==e.length&&d==l.length&&(f=function(e,t,n){let i=e.length,r=t.length,o=0;for(;o<n&&h(e[--i],t[--r]);)o++;return o}(e,l,g-u)),c+=u,d-=f,(n-=f)-(t+=u)==0&&d-c==0)return[];if(t==n){for(p=i(t,[],0);c<d;)p.removed.push(l[c++]);return[p]}if(c==d)return[i(t,[],n-t)];let m=function(e){let t=e.length-1,n=e[0].length-1,i=e[t][n],l=[];for(;t>0||n>0;){if(0==t){l.push(s),n--;continue}if(0==n){l.push(a),t--;continue}let c,h=e[t-1][n-1],d=e[t-1][n],p=e[t][n-1];c=d<p?d<h?d:h:p<h?p:h,c==h?(h==i?l.push(r):(l.push(o),i=h),t--,n--):c==d?(l.push(a),t--,i=d):(l.push(s),n--,i=p)}return l.reverse(),l}(function(e,t,n,i,r,o){let s=o-r+1,a=n-t+1,l=new Array(s);for(let e=0;e<s;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let n=1;n<s;n++)for(let o=1;o<a;o++)if(h(e[t+o-1],i[r+n-1]))l[n][o]=l[n-1][o-1];else{let e=l[n-1][o]+1,t=l[n][o-1]+1;l[n][o]=e<t?e:t}return l}(e,t,n,l,c,d));p=void 0;let v=[],y=t,_=c;for(let e=0;e<m.length;e++)switch(m[e]){case r:p&&(v.push(p),p=void 0),y++,_++;break;case o:p||(p=i(y,[],0)),p.addedCount++,y++,p.removed.push(l[_]),_++;break;case s:p||(p=i(y,[],0)),p.addedCount++,y++;break;case a:p||(p=i(y,[],0)),p.removed.push(l[_]),_++}return p&&v.push(p),v}function c(e,t){return l(e,0,e.length,t,0,t.length)}function h(e,t){return e===t}},function(e,t,n){"use strict";n(52),n(44);var i=n(9),r=n(2),o=n(5),s=n(7);
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
Object(i.a)({_template:o.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:s.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(r.b)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(r.b)(this.root).appendChild(this._img))}})},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(7),n(2);
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
const i={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}}},function(e,t,n){(function(t){var n=function(){"use strict";function e(e,t){return null!=t&&e instanceof t}var n,i,r;try{n=Map}catch(e){n=function(){}}try{i=Set}catch(e){i=function(){}}try{r=Promise}catch(e){r=function(){}}function o(s,l,c,h,d){"object"==typeof l&&(c=l.depth,h=l.prototype,d=l.includeNonEnumerable,l=l.circular);var p=[],u=[],f=void 0!==t;return void 0===l&&(l=!0),void 0===c&&(c=1/0),function s(c,g){if(null===c)return null;if(0===g)return c;var m,v;if("object"!=typeof c)return c;if(e(c,n))m=new n;else if(e(c,i))m=new i;else if(e(c,r))m=new r((function(e,t){c.then((function(t){e(s(t,g-1))}),(function(e){t(s(e,g-1))}))}));else if(o.__isArray(c))m=[];else if(o.__isRegExp(c))m=new RegExp(c.source,a(c)),c.lastIndex&&(m.lastIndex=c.lastIndex);else if(o.__isDate(c))m=new Date(c.getTime());else{if(f&&t.isBuffer(c))return m=new t(c.length),c.copy(m),m;e(c,Error)?m=Object.create(c):void 0===h?(v=Object.getPrototypeOf(c),m=Object.create(v)):(m=Object.create(h),v=h)}if(l){var y=p.indexOf(c);if(-1!=y)return u[y];p.push(c),u.push(m)}for(var _ in e(c,n)&&c.forEach((function(e,t){var n=s(t,g-1),i=s(e,g-1);m.set(n,i)})),e(c,i)&&c.forEach((function(e){var t=s(e,g-1);m.add(t)})),c){var b;v&&(b=Object.getOwnPropertyDescriptor(v,_)),b&&null==b.set||(m[_]=s(c[_],g-1))}if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(c);for(_=0;_<w.length;_++){var z=w[_];(!(S=Object.getOwnPropertyDescriptor(c,z))||S.enumerable||d)&&(m[z]=s(c[z],g-1),S.enumerable||Object.defineProperty(m,z,{enumerable:!1}))}}if(d){var C=Object.getOwnPropertyNames(c);for(_=0;_<C.length;_++){var S,M=C[_];(S=Object.getOwnPropertyDescriptor(c,M))&&S.enumerable||(m[M]=s(c[M],g-1),Object.defineProperty(m,M,{enumerable:!1}))}}return m}(s,c)}function s(e){return Object.prototype.toString.call(e)}function a(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return o.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},o.__objToStr=s,o.__isDate=function(e){return"object"==typeof e&&"[object Date]"===s(e)},o.__isArray=function(e){return"object"==typeof e&&"[object Array]"===s(e)},o.__isRegExp=function(e){return"object"==typeof e&&"[object RegExp]"===s(e)},o.__getRegExpFlags=a,o}();e.exports&&(e.exports=n)}).call(this,n(104).Buffer)},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(7);var i=n(9);
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
class r{constructor(e){r[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return r.types[e]&&r.types[e][t]}set value(e){var t=this.type,n=this.key;t&&n&&(t=r.types[t]=r.types[t]||{},null==e?delete t[n]:t[n]=e)}get list(){if(this.type){var e=r.types[this.type];return e?Object.keys(e).map((function(e){return o[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}r[" "]=function(){},r.types={};var o=r.types;Object(i.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,n){var i=new r({type:e,key:t});return void 0!==n&&n!==i.value?i.value=n:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new r({type:this.type,key:e}).value}})},function(e,t){e.exports=new class{constructor(){this.models={}}registerModel(e,t){if(this.models[e])throw new Error(`A model has already been registered with name: ${e}`);this.models[e]=t}getModel(e){if(!this.models[e])throw new Error(`No model has been registered with name: ${e}`);return this.models[e]}}},function(e,t,n){e.exports={AppStateInterface:n(49),AppStateModel:n(98),AppStateStore:n(99),"app-route":n(123)}},function(e,t,n){const{BaseStore:i}=n(12),r=n(43);e.exports=new class extends i{constructor(){super(),this.data={byId:{},defaultSearch:{},search:{state:this.STATE.INIT}},this.events={RECORD_UPDATE:"record-update",RECORD_SEARCH_UPDATE:"record-search-update",DEFAULT_RECORD_SEARCH_UPDATE:"default-record-search-update"}}getRecord(e){let t=e.split("/").filter(e=>""!==e);for(let e=t.length-1;e>=0;e--){let n="/"+t.join("/");if(this.data.byId[n])return this.data.byId[n];t.splice(e,1)}return null}setRecordLoading(e,t){this._setRecordState({state:this.STATE.LOADING,id:e,request:t})}setRecordLoaded(e,t){this._setRecordState({state:this.STATE.LOADED,rootId:t["@id"],payload:t,id:e})}setRecordError(e,t){this._setRecordState({state:this.STATE.ERROR,error:t,id:e})}_setRecordState(e){this.data.byId[e.id]=e,e.rootId&&(this.data.byId[e.rootId]=e),this.emit(this.events.RECORD_UPDATE,e)}setSearchLoaded(e,t){this._setSearchState({state:this.STATE.LOADED,searchDocument:e,payload:t})}setSearchLoading(e,t){this._setSearchState({state:this.STATE.LOADING,searchDocument:e,request:t})}setSearchError(e,t,n=!1){this._setSearchState({state:this.STATE.ERROR,searchDocument:e,error:t,showErrorMessage:n})}_setSearchState(e){this.data.search=e,this.emit(this.events.RECORD_SEARCH_UPDATE,e)}getSearch(){return r(this.data.search)}setDefaultSearchLoading(e,t,n){this._setDefaultSearchState({id:e,searchDocument:t,state:this.STATE.LOADING,request:n})}setDefaultSearchLoaded(e,t,n){this._setDefaultSearchState({id:e,searchDocument:t,state:this.STATE.LOADED,payload:n})}setDefaultSearchError(e,t,n){this._setDefaultSearchState({id:e,searchDocument:t,state:this.STATE.ERROR,error:n})}getDefaultSearch(e){return this.data.defaultSearch[e]}_setDefaultSearchState(e){this.data.defaultSearch[e.id]=e,this.emit(this.events.DEFAULT_SEARCH_UPDATE,this.data.defaultSearch[e.id])}}},function(e,t,n){const{BaseModel:i}=n(12),r=n(59),o=n(114),s=n(47),a=n(36);e.exports=new class extends i{constructor(){super(),this.store=r,this.service=o,this.EventBus.on(s.events.RECORD_SEARCH_UPDATE,this._onSearchDocumentUpdate.bind(this)),APP_CONFIG.collections&&this.store.setCollectionOverviewLoaded(APP_CONFIG.collections),this.register("CollectionModel")}async overview(){let e=this.store.data.overview;return"init"===e.state?await this.service.overview():"loading"===e.state&&await e.request,this.store.data.overview}async get(e){return"loaded"!==this.store.data.overview.state&&await this.overview(),this.store.data.byId[e]}getSelectedCollection(){return this.store.data.selected}search(e){return this.service.search(e)}async _onSearchDocumentUpdate(e){let t=null;e.searchDocument.filters["isPartOf.@id"]&&(t=await this.get(e.searchDocument.filters["isPartOf.@id"].value[0])),!e.searchDocument.filters["isPartOf.@id"]&&e.searchDocument.text?("loading"===e.state&&this.search({text:e.searchDocument.text}),this.emit("show-collection-search-results",!0)):this.emit("show-collection-search-results",!1),a.setSelectedCollection(t),a.set({searchCollection:t})}}},function(e,t){e.exports=e=>(class extends e{constructor(){super(),this._injectModel("AppStateModel")}ready(){super.ready(),this._onAppStateUpdate&&this._getAppState().then(e=>this._onAppStateUpdate(e))}_setAppState(e){return this.AppStateModel.set(e)}_getAppState(){return this.AppStateModel.get()}_setWindowLocation(e){this.AppStateModel.setLocation(e)}})},function(e,t,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let i,r=null,o=window.HTMLImports&&window.HTMLImports.whenReady||null;function s(e){requestAnimationFrame((function(){o?o(e):(r||(r=new Promise(e=>{i=e}),"complete"===document.readyState?i():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&i()})),r.then((function(){e&&e()})))}))}n.d(t,"a",(function(){return d}));const a="__seenByShadyCSS",l="__shadyCSSCachedStyle";let c=null,h=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,s(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&h&&(this.enqueued=!0,s(h))}addCustomStyle(e){e[a]||(e[a]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[l])return e[l];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const n=e[t];if(n[l])continue;const i=this.getStyleForCustomStyle(n);if(i){const e=i.__appliedElement||i;c&&c(e),n[l]=e}}return e}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>c,set(e){c=e}},validateCallback:{get:()=>h,set(e){let t=!1;h||(t=!0),h=e,t&&this.enqueueDocumentValidation()}}})},function(e,t){const n={en:"English",fr:"French"};e.exports=new class{getYearFromDate(e){return e&&(e=(e+="").match(/^(\d{4})/))?e[0]:""}asArray(e={},t){let n=e[t]||[];return Array.isArray(n)?n:[n]}findMediaFromId(e=[],t){return!!Array.isArray(e)&&e.filter(e=>e["@id"]===t)}getMediaType(e){if(e.error)return null;let t=e["@type"]||[];return t.includes("http://digital.ucdavis.edu/schema#ImageList")?"ImageList":t.includes("http://schema.org/ImageObject")?"ImageObject":t.includes("http://digital.ucdavis.edu/schema#StreamingVideo")?"StreamingVideo":t.includes("http://schema.org/VideoObject")?"VideoObject":t.includes("http://schema.org/AudioObject")?"AudioObject":t.includes("http://digital.ucdavis.edu/schema#bagOfFiles")?"BagOfFiles":null}getLanguage(e){return n[e]}countMediaItems(e){if(!e)return!1;let t=0;for(let n in e)"imageList"===n?e.imageList.forEach(e=>t+=e.hasPart.length):t+=e[n].length;return t}flattenMediaList(e){let t=[];return Object.keys(e).forEach(n=>{e[n].forEach(e=>{e.hasPart&&"ImageList"===this.getMediaType(e)?e.hasPart.forEach(e=>{t.push(e)}):t.push(e)})}),t}getImages(e){let t=[];for(let n in e)"image"===n?t=t.concat(e[n]):"imageList"===n&&(t=t.concat(...e[n].map(e=>e.hasPart)));return t}organizeMediaList(e){return e.map(e=>e.position=e.position?parseInt(e.position):0).sort((e,t)=>e.position>t.position?1:e.position<t.position?-1:1),e}}},function(e,t,n){"use strict";n(7);
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
const i=n(5).a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content);var r=document.createElement("style");r.textContent="[hidden] { display: none !important; }",document.head.appendChild(r)},function(e,t,n){"use strict";n(7);var i=n(35),r=n(9),o=n(2),s=n(5),a={distance:function(e,t,n,i){var r=e-n,o=t-i;return Math.sqrt(r*r+o*o)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function l(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function c(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),Object(o.b)(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}l.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var n=a.distance(e,t,0,0),i=a.distance(e,t,this.width,0),r=a.distance(e,t,0,this.height),o=a.distance(e,t,this.width,this.height);return Math.max(n,i,r,o)}},c.MAX_RADIUS=300,c.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=a.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?a.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,n=1.1*Math.min(Math.sqrt(e+t),c.MAX_RADIUS)+5,i=1.1-n/c.MAX_RADIUS*.2,r=this.mouseInteractionSeconds/i,o=n*(1-Math.pow(80,-r));return Math.abs(o)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,c.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,c.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new l(this.element)},draw:function(){var e,t,n;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,n=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+n+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+n+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,n=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=a.now(),this.center?(this.xStart=t,this.yStart=n,this.slideDistance=a.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=n,this.slideDistance=a.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=a.now())},remove:function(){Object(o.b)(this.waveContainer.parentNode).removeChild(this.waveContainer)}},Object(r.a)({_template:s.a`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[i.a],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==this.parentNode.nodeType?this.keyEventTarget=Object(o.b)(this).getOwnerRoot().host:this.keyEventTarget=this.parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach((function(t){t.upAction(e)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var e=new c(this);return Object(o.b)(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}});var h=n(25);n.d(t,"a",(function(){return d}));
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
const d={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){h.b._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&Object(o.b)(t).appendChild(this._ripple),e){var n=Object(o.b)(this._rippleContainer||this),i=Object(o.b)(e).rootTarget;n.deepContains(i)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(7);var i=n(2),r=n(3),o=new Set;const s={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(o.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():r.i||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Object(i.b)(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(o.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?o.delete(this):o.add(this)}}},function(e,t,n){"use strict";n(7);var i=n(2),r=n(16);
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
class o{constructor(e){this.selection=[],this.selectCallback=e}get(){return this.multi?this.selection.slice():this.selection[0]}clear(e){this.selection.slice().forEach((function(t){(!e||e.indexOf(t)<0)&&this.setItemSelected(t,!1)}),this)}isSelected(e){return this.selection.indexOf(e)>=0}setItemSelected(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var n=this.selection.indexOf(e);n>=0&&this.selection.splice(n,1)}this.selectCallback&&this.selectCallback(e,t)}}select(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))}toggle(e){this.setItemSelected(e,!this.isSelected(e))}}n.d(t,"a",(function(){return s}));
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
const s={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new o(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&Object(i.b)(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=e-1;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))-1+e)%e),this.selected=this._indexToValue(t)},selectNext:function(){var e=0;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=Object(i.b)(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(e){if(this.items){var t=this._valueToItem(this.selected);t?this._selection.select(t):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return null==e?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(!this.attrForSelected)return Number(e);for(var t,n=0;t=this.items[n];n++)if(this._valueForItem(t)==e)return n},_indexToValue:function(e){if(!this.attrForSelected)return e;var t=this.items[e];return t?this._valueForItem(t):void 0},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return-1===t?null:t}var n=e[Object(r.b)(this.attrForSelected)];return null!=n?n:e.getAttribute(this.attrForSelected)},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return Object(i.b)(e).observeNodes((function(e){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})}))},_activateHandler:function(e){for(var t=e.target,n=this.items;t&&t!=this;){var i=n.indexOf(t);if(i>=0){var r=this._indexToValue(i);return void this._itemActivate(r,t)}t=t.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}}},function(e,t,n){n(89),e.exports=self.fetch.bind(self)},function(e,t,n){var{BaseStore:i}=n(12);e.exports=new class extends i{constructor(){super(),this.CUSTOM_STATES={PENDING:"pending",NOT_LOGGED_IN:"notLoggedIn",LOGGED_IN:"loggedIn"},this.events={AUTH_UPDATE:"auth-update"},this.data={state:this.CUSTOM_STATES.PENDING,user:null}}getUser(){return this.data}setUser(e){this.data={user:e,state:e.loggedIn?this.CUSTOM_STATES.LOGGED_IN:this.CUSTOM_STATES.NOT_LOGGED_IN},this.emit(this.events.AUTH_UPDATE,this.data)}notLoggedIn(){this.data={user:null,state:this.CUSTOM_STATES.NOT_LOGGED_IN},this.emit(this.events.AUTH_UPDATE,this.data)}}},function(e,t,n){const i=n(108),r=n(47),o=n(109),s=n(36),a=n(20),l=n(51);e.exports=new class extends i{constructor(){super(),this.service=o,this.store=r,this.store.config=a.elasticSearch,this.MAX_WINDOW=1e4,this.EventBus.on("app-state-update",e=>this._onAppStateUpdate(e)),this.service.setModel(this),this.register("RecordModel")}async _onAppStateUpdate(e){if("record"!==e.location.page)return this.currentRecordId=null,this.currentMediaId=null,s.setSelectedRecord(null),void s.setSelectedRecordMedia(null);let t="/"+e.location.path.join("/"),n=await this.get(t);if(n.rootId!==this.currentRecordId&&(this.currentRecordId=n.rootId,s.setSelectedRecord(n.payload)),this.currentMediaId!==t){this.currentMediaId=t;for(let e in n.payload.media){let i=n.payload.media[e];for(let n of i)if("imageList"===e){for(let e of n.hasPart)if(e["@id"]===t)return void s.setSelectedRecordMedia(e)}else if(n["@id"]===t)return void s.setSelectedRecordMedia(n)}n.payload.media.imageList&&n.payload.media.imageList[0].hasPart.length?s.setSelectedRecordMedia(n.payload.media.imageList[0].hasPart[0]):n.payload.media.video?s.setSelectedRecordMedia(n.payload.media.video[0]):n.payload.media.audio?s.setSelectedRecordMedia(n.payload.media.audio[0]):n.payload.media.image?s.setSelectedRecordMedia(n.payload.media.image[0]):n.payload.media.bagOfFiles?s.setSelectedRecordMedia(n.payload.media.bagOfFiles[0]):s.setSelectedRecordMedia(null)}}async defaultSearch(e){let t=e;if(t||(t="default"),this.store.getDefaultSearch(t)){let e=this.store.getDefaultSearch(t);return e.state===this.store.STATE.LOADING&&await e.request,this.store.getDefaultSearch(t)}let n=this.emptySearchDocument();return e&&this.appendKeywordFilter(n,"collectionId",e,"and"),await this.service.defaultSearch(t,n),this.store.getDefaultSearch(t)}createMediaObject(e){if(!1!==e.isRootRecord){if(e.media={},e.clientMedia){let t=l.asArray(e,"clientMedia").map(e=>e["@id"]);e.clientMedia=this.findRecords(t,e),e.clientMedia.forEach(t=>{if(t.clientMediaDownload){let n=l.asArray(t,"clientMediaDownload").map(e=>e["@id"]);t.clientMediaDownload=this.findRecords(n,e)}this._appendMediaTypes(t,e.media)})}else this._walkMedia(e,e.media);for(let t in e.media)e.media[t].forEach(n=>{n.thumbnailUrl&&"string"==typeof n.thumbnailUrl||(n.thumbnailUrl&&"object"==typeof n.thumbnailUrl?n.thumbnailUrl="/fcrepo/rest"+n.thumbnailUrl["@id"]:n.thumbnail&&"object"==typeof n.thumbnail?n.thumbnailUrl="/fcrepo/rest"+n.thumbnail["@id"]:n.image&&n.image.url?n.thumbnailUrl=n.image.url:"video"!==t&&"audio"!==t||(n.thumbnailUrl=!!e.image&&e.image.url))});return e}}_walkMedia(e,t,n=[]){if(Array.isArray(e))e.forEach(e=>this._walkMedia(e,t,n));else if("object"==typeof e&&null!==e){if(n.indexOf(e)>-1)return;n.push(e),e["@type"]&&this._appendMediaTypes(e,t);for(let i in e)"object"==typeof e[i]&&this._walkMedia(e[i],t,n)}}_appendMediaTypes(e,t){let n=l.getMediaType(e);if(n)return"AudioObject"===n?(t.audio||(t.audio=[]),t.audio.push(e)):"VideoObject"===n||"StreamingVideo"===n?(t.video||(t.video=[]),t.video.push(e)):"ImageObject"!==n||e["@type"].includes("http://digital.ucdavis.edu/schema#ImageListItem")?"ImageList"===n?(t.imageList||(t.imageList=[]),this._cleanupImageList(e),t.imageList.push(e)):"Binary"===n?(t.binaryFiles||(t.binaryFiles=[]),t.binaryFiles.push(e)):"BagOfFiles"===n?(t.bagOfFiles||(t.bagOfFiles=[]),t.bagOfFiles.push(e)):void 0:(t.image||(t.image=[]),t.image.push(e))}_cleanupImageList(e){e.hasPart||(e.hasPart=[]),Array.isArray(e.hasPart)||(e.hasPart=[e.hasPart]),e.hasPart.forEach(t=>{t["@type"]||(t["@type"]=[]),-1===t["@type"].indexOf("http://schema.org/ImageObject")&&t["@type"].push("http://schema.org/ImageObject"),t["@type"].push("http://digital.ucdavis.edu/schema#ImageListItem"),t.isPartOf={"@id":e["@id"]},t.position=parseInt(t.position)}),e.hasPart.sort((e,t)=>e.position<t.position?-1:e.position>t.position?1:0)}findRecords(e,t,n=[],i={}){if(Array.isArray(t))t.forEach(t=>this.findRecords(e,t,n,i));else if("object"==typeof t&&null!==t){if(i[t["@id"]])return n;i[t["@id"]]=!0,Object.keys(t).length>1&&e.indexOf(t["@id"])>-1&&n.push(t);for(let r in t)"object"==typeof t[r]&&this.findRecords(e,t[r],n,i)}return n}async get(e){let t=this.store.getRecord(e);return t&&t.request?await t.request:t&&"loaded"===t.state?t.id!==e&&this.store.setRecordLoaded(e,t.payload):await this.service.get(e),this.store.getRecord(e)}setSearchLocation(e){s.setLocation("/search/"+this.searchDocumentToUrl(e))}async search(e={}){e.filters||(e.filters={});let t="";e.filters["isPartOf.@id"]&&(t=e.filters["isPartOf.@id"].value[0]);let n=await this.defaultSearch(t),i=!1;for(var r in e.filters){if("isPartOf.@id"===r)continue;if("facet"===a.elasticSearch.facets[r].type){let o=n.payload.aggregations.facets[r];void 0===o?(i=!0,console.warn(`Collection '${t}' unknown bucket '${r}', correcting search.`),delete e.filters[r]):(e.filters[r].value=e.filters[r].value.filter(e=>void 0!==o[e]||(console.warn(`Collection '${t}' bucket '${r}' has no value: '${e}', correcting search.`,n.payload.aggregations.facets),i=!0,!1)),e.filters[r].value.length||delete e.filters[r])}}if(i)return await this.search(e,!1);if(e.limit+e.offset>this.MAX_WINDOW)return this.store.setSearchError(e,new Error("Sorry, digital.ucdavis.edu does not serve more than 10,000 results for a query"),!0),this.store.getSearch();let o=JSON.stringify(e,"  ","  ");if(o===this.searchCache)return this.store.getSearch();this.searchCache=o;try{await this.service.search(e)}catch(e){}return this.store.getSearch()}getCurrentSearchDocument(){return this.store.data.search.searchDocument?this.store.getSearch().searchDocument:this.emptySearchDocument()}typeaheadSearch(e,t={}){try{return this.service.typeaheadSearch(e,t)}catch(t){return{searchDocument:e,error:t,state:"error"}}}}},function(e,t,n){var{BaseStore:i}=n(12);e.exports=new class extends i{constructor(){super(),this.data={byId:{},overview:{state:this.STATE.INIT},search:{state:this.STATE.INIT}},this.events={COLLECTION_OVERVIEW_UPDATE:"collection-overview-update",COLLECTION_SEARCH_UPDATE:"collection-search-update"}}setSearchLoading(e,t){this._setSearchState({state:this.STATE.LOADING,request:t,searchDocument:e})}setSearchLoaded(e,t){this._setSearchState({state:this.STATE.LOADED,searchDocument:e,payload:t})}setSearchError(e,t){this._setSearchState({state:this.STATE.ERROR,searchDocument:e,error:t})}_setSearchState(e){this.data.search=e,this.emit(this.events.COLLECTION_SEARCH_UPDATE,this.data.search)}setCollectionOverviewLoading(e){this._setCollectionOverviewState({state:this.STATE.LOADING,request:e})}setCollectionOverviewLoaded(e){(e=e.results).forEach(e=>{e._id=e["@id"],this.data.byId[e["@id"]]=e}),e.sort((e,t)=>e.name>t.name?1:e.name<t.name?-1:0),this._setCollectionOverviewState({state:this.STATE.LOADED,payload:e})}setCollectionOverviewError(e){this._setCollectionOverviewState({state:this.STATE.ERROR,error:e})}_setCollectionOverviewState(e){this.data.overview=e,this.emit(this.events.COLLECTION_OVERVIEW_UPDATE,this.data.overview)}}},function(e,t){const n=["createdBy","lastModifiedBy","yearPublished","collectionId","isRootRecord","parent","creators","abouts","identifiers","fileFormats","indexableContents","indexableContent","type","textIndexable","media","clientMedia","clientMediaDownload"],i=["associatedMedia","hasPart"],r={lastModified:"dateModified"};e.exports=function e(t){if(t["@context"]={"@vocab":"http://schema.org/"},!0===t.error)return t.error={description:t.message},delete t.message,t;let o=t["@type"];if(o)for(let e=o.length-1;e>=0;e--)o[e].match(/^http:\/\/schema.org/)||o.splice(e,1);n.forEach(e=>{t[e]&&delete t[e]});for(let e in r)t[e]&&(t[r[e]]||(t[r[e]]=t[e]),delete t[e]);return t.image?(t.image["@type"]="ImageObject",t.image.colorPalette&&delete t.image.colorPalette,t.image.iiif&&delete t.image.iiif,t.filename&&(t.image.name||(t.image.name=t.filename),delete t.filename),t.fileSize&&(t.image.contentSize||(t.image.contentSize=t.fileSize),delete t.fileSize),t.fileFormat&&(t.image.encodingFormat||(t.image.encodingFormat=t.fileFormat),delete t.fileFormat)):(t.filename&&(t.name||(t.name=t.filename),delete t.filename),t.fileSize&&(t.contentSize||(t.contentSize=t.fileSize),delete t.fileSize),t.fileFormat&&(t.encodingFormat||(t.encodingFormat=t.fileFormat),delete t.fileFormat)),t.license&&(t.license["@id"]?t.license=t.license["@id"]:t.license.name?t.license=t.license.name:delete t.license),i.forEach(n=>{let i=t[n]||[];Array.isArray(i)||(i=[i]),i.forEach(t=>e(t))}),t}},function(e,t){e.exports='<custom-style>\n  <style>\n    html {\n      --default-primary-color : #002655;\n      --light-primary-color   : #335379;\n      \n      --default-secondary-color : #daaa00;\n      --light-secondary-color   : #9be7ff;\n      --dark-secondary-color    : #2286c3;\n\n      --medium-background-color : #B2BDCF;\n      --light-background-color : #D6DCE6;\n      --super-light-background-color: #f3f3f3;\n    \n      --text-primary-color      : black;\n      --primary-text-color      : var(--text-primary-color);\n      --secondary-text-color    : var(--default-secondary-color);\n      --inverse-text-color      : white;\n      --gray-text               : #8B8B8B;\n      --text-disabled           : var(--gray-text);\n\n      --color-aggie-blue        : #002851;\n      --color-aggie-gold        : #FFBF00;\n      --color-pinot             : #76236C;\n      --color-redbud            : #C6007E;\n      --color-putah-creek       : #008EAA;\n      --color-quad              : #3DAE2B;\n      --double-decker           : #C10230;\n      --color-poppy             : #F18A00;\n      --color-grey              : #808080;\n      --color-light-yellow      : #ede2c0;\n\n      --max-width               : 1200px;\n      --max-text-width          : 650px;\n      --font-size               : 16px;\n      --font-size-sm            : 14px;\n      --font-weight             : 400;\n      --font-weight-light       : 200;\n      --font-weight-heavy       : 700;\n\n      --layout-sm               : 768px;\n      --grid-cell-width         : 250px;\n\n      --default-outline         : 2px dotted var(--default-secondary-color);\n      \n      --paper-icon-button-ink-color : transparent;\n\n     /**\n      * Custom mixins\n      */\n      --fin-search-box-select: {\n        font-size: var(--font-size);\n        font-weight: var(--font-weight);\n        color: var(--default-primary-color);\n        background-color: var(--default-secondary-color);\n        width: 100px;\n      }\n      --fin-search-box-select-inverse: {\n        @apply(--fin-search-box-select);\n        color: var(--default-secondary-color);\n        background-color: var(--default-primary-color);\n      }\n      --fin-search-box-input: {\n        padding-left: 10px;\n        font-size: var(--font-size);\n        background-color: white;\n      }\n      --cork-drop-down-arrow-color: var(--default-primary-color);\n      --cork-toggle-panel-label : {\n        padding: 10px 0;\n        color: var(--default-primary-color);\n        font-weight: var(--font-weight-heavy);\n      }\n    }\n    body, html {\n      /* @apply --paper-font-common-base; */\n      font-family      : proxima-nova,"Lucida Grande","Lucida Sans","Helvetica Neue",Helvetica,Arial,sans-serif;\n      font-size        : var(--font-size);\n      font-weight      : var(--font-weight);\n      line-height      : calc(var(--font-size) * 1.625);\n      margin           : 0;\n      padding          : 0;\n      background-color : var(--default-background-color);\n      color            : var(--text-primary-color);\n      max-width        : 100vw;\n    }\n  </style>\n</custom-style>'},function(e,t){e.exports='<dom-module id="shared-styles">\n  <template>\n    <style>\n      paper-tabs {\n        --paper-tabs-selection-bar: {\n          border-bottom: 3px solid var(--default-primary-color);\n        }\n      }\n      paper-tab {\n        --paper-tab-content-unselected : {    \n          text-transform: uppercase;\n          color: var(--text-disabled);\n        }\n        --paper-tab-content : {\n          text-transform: uppercase;\n          color: var(--default-primary-color);\n        }\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      button {\n        margin: 0;\n        padding: 0;\n      }\n\n      input {\n        border-radius: 0;\n      }\n\n      input, select, button {\n        font-size        : var(--font-size);\n        font-weight      : var(--font-weight);\n        color            : var(--text-primary-color);\n        font-family      : proxima-nova,"Lucida Grande","Lucida Sans","Helvetica Neue",Helvetica,Arial,sans-serif;\n      }\n      \n      a:focus, button:focus, select:focus, div[tabindex]:focus {\n        outline: var(--default-outline);\n      }\n\n      paper-icon-button {\n        border: 2px solid transparent;\n        /*background-color: var(--default-primary-color);*/\n      }\n\n      paper-icon-button:focus {\n        border: var(--default-outline);\n        border-radius: 20px;\n      }\n\n      main {\n        display: flex;\n        justify-content: center;\n      }\n\n      main > * {\n        max-width: 1000px;\n        width: 100%;\n      }\n\n      ul.menu {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n      }\n\n      a {\n        text-decoration: underline;\n        color: var(--default-primary-color);\n      }\n\n      a.italic {\n        color: var(--default-secondary-color);\n        font-style: italic;\n      }\n\n      a.gold {\n        color: var(--default-secondary-color);\n      }\n\n      .text-container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n      \n      .text-container > * {\n        max-width: var(--max-text-width);\n        width: 100%;\n      }\n\n      .container {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      .container > * {\n        max-width: var(--max-width);\n        width: 100%;\n        justify-content: center;\n      }\n\n      fin-search-box > iron-icon {\n        color: var(--default-secondary-color);\n      }\n    </style>\n  </template>\n</dom-module>'},function(e,t,n){"use strict";var i=n(100),r=n(101),o=n(102);function s(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function a(e){var t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function l(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,i){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===i[e]&&(i[e]={}),i[e][t[1]]=n):i[e]=n};case"bracket":return function(e,n,i){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==i[e]?i[e]=[].concat(i[e],n):i[e]=[n]:i[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),i=Object.create(null);return"string"!=typeof e?i:(e=e.trim().replace(/^[?#&]/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),s=t.length>0?t.join("="):void 0;s=void 0===s?null:o(s),n(o(r),s,i)})),Object.keys(i).sort().reduce((function(e,t){var n=i[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):i}t.extract=a,t.parse=l,t.stringify=function(e,t){!1===(t=r({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=function(){});var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,i){return null===n?[s(t,e),"[",i,"]"].join(""):[s(t,e),"[",s(i,e),"]=",s(n,e)].join("")};case"bracket":return function(t,n){return null===n?s(t,e):[s(t,e),"[]=",s(n,e)].join("")};default:return function(t,n){return null===n?s(t,e):[s(t,e),"=",s(n,e)].join("")}}}(t);return e?Object.keys(e).sort(t.sort).map((function(i){var r=e[i];if(void 0===r)return"";if(null===r)return s(i,t);if(Array.isArray(r)){var o=[];return r.slice().forEach((function(e){void 0!==e&&o.push(n(i,e,o.length))})),o.join("&")}return s(i,t)+"="+s(r,t)})).filter((function(e){return e.length>0})).join("&"):""},t.parseUrl=function(e,t){return{url:e.split("?")[0]||"",query:l(a(e),t)}}},function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: block;\n    background-color: var(--default-primary-color);\n    color: var(--inverse-text-color);\n    padding: 15px;\n  }\n\n  app-auth-header {\n    margin-left: 10px;\n  }\n  \n  fin-search-box {\n    display: inline-block;\n    width: 100%;\n    box-sizing: border-box;\n    max-width: 525px;\n  }\n\n  .layout {\n    display: flex;\n    align-items: center;\n  }\n  \n  h2 {\n    margin: 0;\n    white-space: nowrap;\n  }\n  h2 a {\n    color: var(--default-secondary-color);\n    text-decoration: none;\n  }\n  h2 a:visited {\n    color: var(--default-secondary-color);\n    text-decoration: none;\n  }\n\n  img {\n    height: 50px;\n  }\n\n  .logo, h2 {\n    padding-right: 20px;\n    display: none;\n  }\n\n  .filler {\n    flex: .25;\n    display: none;\n  }\n\n  .logo-sm {\n    margin-right: 10px;\n  }\n\n  iron-icon.search-icon {\n    color: var(--default-secondary-color);\n  }\n\n  @media( min-width: 700px ) {\n    .logo {\n      display: block;\n    }\n    .logo-sm {\n      display: none;\n    }\n  }\n\n  @media( min-width: 815px ) {\n    h2 {\n      display: block;\n    }\n  }\n\n  @media( min-width: 1100px ) {\n    .filler {\n      display: block;\n    }\n  }\n</style>\n\n<div class="layout">\n  <a href="/" class="logo"><img border="0" src="/images/ucd-lib-logo-white.png" /></a>\n  <a href="/" class="logo-sm"><img border="0" src="/images/ucd-lib-logo-white-sm.png" /></a>\n  <h2><a href="/">Digital Collections</a></h2>\n  <div class="filler"></div>\n  <div style="flex:1; text-align:right">\n    <fin-search-box \n      id="searchInput" \n      on-search="_onSearch" \n      on-browse="_onBrowse"\n      placeholder="Search Keyword(s)">\n      <iron-icon icon="fin-icons:search" class="search-icon" slot="button-content"></iron-icon>\n    </fin-search-box>\n  </div>\n  <app-auth-header></app-auth-header>\n</div>\n\n'},function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: block;\n  }\n  .root {\n    display: flex;\n    align-items: center;\n  }\n  input {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0 5px;\n    background: white;\n    border: none;\n    height: 45px;\n    outline: none;\n    @apply --fin-search-box-input;\n  }\n  button {\n    background: white;\n    height: 45px;\n    border: none;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 0;\n    cursor: pointer;\n    @apply --fin-search-box-button;\n  }\n  select {\n    outline-offset: 1px;\n    margin-left: 20px;\n    border: none;\n    background-color: white;\n    border-radius: 0;\n    height: 45px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n    -webkit-border-radius: 0px;\n    -moz-border-radius: 0px;\n    -ms-border-radius: 0px;\n    -o-border-radius: 0px;\n    padding: 5px 30px 5px 10px;\n    background-position: right 10px center;\n    background-size: 10px 6px;\n    background-repeat: no-repeat;\n    background-image: url(\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCA2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMjg1NTt9PC9zdHlsZT48L2RlZnM+PGc+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjAgMCAxMCAwIDUgNiAwIDAiLz48L2c+PC9zdmc+\');\n    @apply --fin-search-box-select;\n  }\n  /* for IE */\n  select::-ms-expand {\n      display: none;\n  }\n  @media(max-width: 600px) {\n    select {\n      margin-left: 10px;\n    }\n  }\n</style>\n\n<div class="root">\n  <div style="flex:1">\n    <input \n      id="input" \n      type="text"\n      on-keyup="_onKeyUp"\n      placeholder="[[placeholder]]" />\n  </div>\n  <button on-click="_fireSearch">\n    <slot name="button-content"></slot>\n  </button>\n  <select id="select" on-change="_fireBrowse"></select>\n</div>'},function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: block;\n    color: var(--default-primary-color);\n    background-image: url(\'/images/header-colorbar.png\');\n    background-size: cover;\n    background-position: left center;    \n  }\n\n  .layout {\n    padding: 0 15px;\n  }\n\n  .layout > div {\n    margin: 0 5px;\n  }\n\n  a,\n  iron-icon {\n    cursor: pointer;\n  }\n\n  a:focus {\n    outline-color: var(--default-primary-color);\n  }\n</style>\n\n<div class="layout" hidden$="[[!selected]]" id="layout">\n  <a on-click="_onSearchClicked" tabindex="0">Search</a>\n  \n  <span hidden$="[[!collection]]">&gt;</span>\n  <span hidden$="[[!collection]]"><a on-click="_onCollectionClicked" tabindex="0">[[collection.name]]</a></span>\n\n  <span hidden$="[[!record]]">&gt;</span>\n  <span hidden$="[[!record]]">Item</span>\n</div>'},function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: block;\n    color: var(--inverse-text-color);\n  }\n  a {\n    color: var(--inverse-text-color);\n    cursor: pointer;\n    text-decoration: none;\n  }\n  .icon-container {\n    display: flex;\n    align-items: center;\n  }\n</style>\n\n<div hidden$="[[!loggedIn]]">\n  <div>Logged in as:</div>\n  <div class="icon-container">\n    <iron-icon icon="fin-icons:account"></iron-icon>&nbsp;&nbsp;\n    <div>[[user.username]]</div>\n  </div>\n  <div>\n    <a on-click="_logout" class="gold">Log Out</a>\n  </div>\n</div>\n<div hidden$="[[loggedIn]]">\n  <a on-click="_login">Login</a>\n</div>'},function(e,t){e.exports='<style>\n  :host {\n    display: block;\n    margin: 0;\n    padding: 0;    \n    width: 100%;\n    max-width: var(--max-width);\n\n    color: white;\n    background: var(--secondary-background-color);\n  }\n\n  footer {\n    padding: 70px 35px 20px 20px;\n  }\n\n  a,\n  a:visited {\n    cursor: pointer;\n    color: var(--inverse-text-color);\n    text-decoration: none;\n  }  \n\n  .lib-logo  {    \n    margin-bottom: 30px;\n  }\n\n  .lib-logo img {\n    height: 45px;\n    max-width: 200px;\n  }\n\n  .lib-email:hover {\n    text-decoration: underline;\n  }\n\n  .row {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n\n  ul,\n  ul li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  .menu.vertical a {\n    display: block;\n    padding: 4px;\n  }\n  \n  .menu.vertical a:hover {\n    background-color: var(--default-primary-color);\n    -webkit-transition: all .2s ease-in-out;\n    -moz-transition: all .2s ease-in-out;\n    transition: all .2s ease-in-out;\n  }\n\n  .menu.horizontal {\n    display: block;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n  .menu.horizontal li {\n    display: inline-block;\n    white-space: nowrap;\n  }\n  .menu.horizontal li a {\n    display: block;\n  }\n  .menu.horizontal li a::after {\n    content: "|";\n    padding: 0 10px;\n  }\n  .menu.horizontal li:last-child a::after {\n    content: " ";\n  }\n\n  .donate {\n    margin-top: 15px;\n  }\n  .donate > a {\n    display: inline-block !important;\n    padding: 8px !important;\n    font-weight: 700;\n    border: 1px solid white;\n    white-space: normal !important;\n  }\n  .donate > a:hover {\n    background: rgba(21,118,240,.32) !important;\n  }\n\n  .ucd-logo {\n    display: inline-block;\n    margin-top: 70px;\n    margin-bottom: 30px;\n    width: 100%;\n    position: relative;  \n  }\n  .ucd-logo > hr {\n    margin-top: 0;\n    margin-bottom: 0;\n    top: 50%;\n    width: 100%;\n    position: absolute;\n    border-top: 1px solid rgba(255,255,255,.25);\n    border-bottom: none;\n    border-right: none;\n    border-left: none;\n  }\n  .ucd-logo > div {\n    display: inline-block;\n    position: relative;\n  }\n  .ucd-logo > div > img {    \n    padding: 0 25px;\n    height: 100px;\n    background: var(--default-primary-color);\n  }\n\n  @media( max-width: 768px ) {\n    .row {\n      flex-direction: column;\n      text-align: left;\n    }\n\n    h2 {\n      margin-top: 30px;\n      margin-bottom: 10px;\n    }\n\n    .menu.vertical li a {\n      padding: 0;\n    }\n  }\n</style>\n\n<footer role="contentinfo">\n  <div class="row">\n    <div class="col"> \x3c!-- col start --\x3e\n      <div class="lib-logo">\n          <a href="https://library.ucdavis.edu" target="_blank" rel="noopener">\n            <img src="/images/ucd-lib-logo-white.png" alt="UC Davis Library Logo">\n          </a>\n      </div>\n      <p>\n        UC Davis Library<br />\n        100 NW Quad<br />\n        University of California, Davis<br />\n        Davis, CA 95616<br />\n        (530) 752-8792<br /><br />\n        <a href="mailto:library@ucdavis.edu" class="lib-email">library@ucdavis.edu</a>\n      </p>\n    </div>\x3c!-- col end --\x3e\n\n    <div class="col" role="navigation">\x3c!-- col start --\x3e\n      <h2>Digital Collections</h2>\n      <ul class="menu vertical">\n        <li><a href="/#collections">Collections</a></li>\n        <li><a href="/search">Items</a></li>        \n        <li><a href="/about">About Digital Collections</a></li>\n      </ul>\n    </div>\x3c!-- col end --\x3e\n\n    <div class="col" role="navigation">\x3c!-- col start --\x3e\n      <h2>Library Info</h2>\n      <ul class="menu vertical">\n        <li><a href="https://library.ucdavis.edu/special-collections/" target="_blank" rel="noopener">Special Collections</a></li>\n        <li><a href="https://library.ucdavis.edu/news/" target="_blank" rel="noopener">News</a></li>\n        <li><a href="https://library.ucdavis.edu/about/" target="_blank" rel="noopener">About the Library</a></li>\n        <li><a href="https://library.ucdavis.edu/library/" target="_blank" rel="noopener">Visit</a></li>\n        <li><a href="https://library.ucdavis.edu/service/careers/" target="_blank" rel="noopener">Careers</a></li>\n        <li class="donate">\n          <a href="http://give.ucdavis.edu/ULIB" target="_blank" rel="noopener">Give to the UC Davis Library</a>\n        </li>\n      </ul>\n    </div>\x3c!-- col end --\x3e\n\n    <div class="col" role="navigation">\x3c!-- col start --\x3e\n      <h2>Account</h2>\n      <ul class="menu vertical">\n        <li>\n          <app-auth-footer></app-auth-footer>\n        </li>\n      </ul>\n    </div>\x3c!-- col end --\x3e\n  </div>\x3c!-- row end --\x3e\n\n  <div class="bottom-links" style="text-align: center;">\n    <div class="ucd-logo">\x3c!-- ucd-logo --\x3e\n      <hr />\n      <div>\n        <img src="/images/ucd-logo.svg" alt="UC Davis Logo">\n      </div>\n    </div>\n\n    <div>\n      <p>University of California, Davis, One Shields Avenue, Davis, CA 95616 | 530-752-1011</p>\n      <ul class="menu horizontal">\n        <li><a href="/help/">Help</a></li>\n        <li><a href="/general-support/">Questions or comments?</a></li>\n        <li><a href="https://www.ucdavis.edu/help/privacy-accessibility/" target="_blank" rel="noopener">Privacy &amp; Accessibility</a></li>\n        <li><a href="https://occr.ucdavis.edu/poc/" target="_blank" rel="noopener">Principles of Community</a></li>\n        <li><a href="https://www.ucdavis.edu/" target="_blank" rel="noopener">UC Davis</a></li>\n        <li><a href="https://www.universityofcalifornia.edu/" target="_blank" rel="noopener">University of California</a></li>\n      </ul>\n      <p>Copyright &copy; 2020 The Regents of the University of California, Davis campus. All rights reserved.</p>\n    </div>\n  </div>\n</footer>'},function(e,t){e.exports='<style include="shared-styles">\n  :host {\n    display: block;\n    background: var(--default-primary-color);\n  }\n\n  #loading {\n    width: 100%;\n    min-height: 700px;\n    height: 75vh;\n    display: flex; \n    flex-direction: column;\n    justify-content: center; \n    align-items: center;\n    background-color: white;\n  }\n\n  #loading img {\n    animation: showLoading 400ms ease-in;\n  }\n\n  @keyframes showLoading {\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n  }\n\n  .footer {\n    display: flex; \n    justify-content: center;\n  }\n\n  .mobile-filters-layout {\n    display: flex;\n  }\n\n  .main-content {\n    flex: 1;\n  }\n\n  .loading-dots {\n    text-align: center;\n    z-index: 5;\n    color: var(--default-primary-color);\n  }\n\n  .dot {\n    display: inline;\n    margin-left: 0.2em;\n    margin-right: 0.2em;\n    position: relative;\n    font-size: 3.5em;\n    opacity: 0;\n    animation: showHideDot 2.5s ease-in-out infinite;\n  }\n\n  .dot.one { animation-delay: 0.2s; }\n  .dot.two { animation-delay: 0.4s; }\n  .dot.three { animation-delay: 0.6s; }\n\n  @keyframes showHideDot {\n    0% { opacity: 0; }\n    50% { opacity: 1; }\n    60% { opacity: 1; }\n    100% { opacity: 0; }\n  }\n\n  #drawer-background {\n    opacity: .7;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 100vw;\n    background: black;\n    z-index: 5;\n    display: none;\n    animation: fadeIn 300ms;\n  }\n\n  #drawer {\n    position: absolute;\n    top: 0;\n    left: -335px;\n    bottom: 0;\n    background: white;\n    width: 300px;\n    z-index: 10;\n    transition: left 300ms ease-out;\n    background-color: var(--light-background-color);\n  }\n\n  #drawer[open] {\n    left: 0;\n  }\n\n  #outerDrawer {\n    position: relative;\n  }\n\n  #drawer-background[open] {\n    display: block;\n  }\n\n  #drawer app-filters-panel {\n    width: 300px;\n  }\n\n  @media( min-width: 975px ) {\n    #outerDrawer {\n      display: none;\n    }\n  }\n</style>\n\n<app-route app-routes="[[appRoutes]]"></app-route>\n\n<app-search-header hidden$="[[!showSearchHeader]]"></app-search-header>\n<app-search-breadcrumb hidden$="[[!showBreadcrumb]]"></app-search-breadcrumb>\n\n<div class="mobile-filters-layout">\n  <div id="outerDrawer">\n    <div id="drawer" open$="[[drawerOpen]]">\n      <app-filters-panel on-toggle-drawer="_toggleDrawer"></app-filters-panel>\n    </div>\n    <div id="drawer-background" open$="[[drawerOpen]]" on-click="_toggleDrawer"></div>\n  </div>\n\n  <div class="main-content">\n    <iron-pages selected="[[page]]" attr-for-selected="id" selected-attribute="visible">\n      <div id="loading">\n        <img src="/images/logos/logo-icon.svg" style="max-width: 128px" />\n        <div class="loading-dots">\n          <h1 class="dot one">.</h1><h1 class="dot two">.</h1><h1 class="dot three">.</h1>\n        </div>\n      </div>\n      <app-home id="home"></app-home>\n      <app-search id="search"></app-search>\n      <app-record id="record"></app-record>\n      <app-about id="about"></app-about>\n    </iron-pages>\n    \n    <div class="footer">\n      <app-footer></app-footer>\n    </div>\n  </div>\n</div>\n\n'},function(e,t,n){"use strict";n(7),n(73);
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
const i=n(5).a`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},function(e,t,n){"use strict";n(7);var i=n(54),r=n(55),o=n(9),s=n(5);
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
Object(o.a)({_template:s.a`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[i.a,r.a],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(e,t){this.async(this.notifyResize)}})},function(e,t,n){"use strict";n(41),n(34);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const i=n(5).a`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(i.content)},function(e,t,n){"use strict";n(7);
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
const i=n(5).a`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);t.default=new class{constructor(){this.data={},this.engineList=["apa","mla","chicago"],this.engineListLabels=["APA","MLA","Chicago"]}retrieveLocale(){return this.locale}retrieveItem(e){return this.data[e]}async render(e,t){if(await this._loadEngines(),!this.engines[t])throw new Error("Invalid citation format: "+t);this.data[e.id]=e;let n=this.engines[t];return n.updateItems([e.id]),n.makeBibliography()[1].join("\n")}async _loadEngines(){if(!this.engines){if(!this.loadingEngines)return this.loadingEngines=new Promise(async(e,t)=>{const i=await Promise.all([n.e(8),n.e(1)]).then(n.t.bind(null,124,7));this.locale=(await Promise.all([n.e(8),n.e(1)]).then(n.t.bind(null,125,7))).default;const r=await Promise.all([n.e(8),n.e(1)]).then(n.t.bind(null,126,7)),o=await Promise.all([n.e(8),n.e(1)]).then(n.t.bind(null,127,7)),s=await Promise.all([n.e(8),n.e(1)]).then(n.t.bind(null,128,7));this.engines={apa:new i.Engine(this,r.default),mla:new i.Engine(this,o.default),chicago:new i.Engine(this,s.default)},e()}),this.loadingEngines;await this.loadingEngines}}esRecordToCslJson(e){let t=new Date,n=this._getRecordValue(e,"publisher");n&&(n=n.find(e=>!!e.name),n&&(n=n.name));let i={id:e["@id"],URL:e["@type"].includes("http://schema.org/Collection")?window.location.origin+e["@id"]:window.location.href,title:this._getRecordValue(e,"name",!0),type:"webpage",publisher:n,source:window.location.host,accessed:{"date-parts":[[t.getFullYear(),t.getMonth()+1,t.getDate()]]}};e.collectionName&&(i["collection-title"]=e.collectionName);let r=(this._getRecordValue(e,"creator")||[]).filter(e=>!!e.name).map(e=>e.name);r.length&&(i.author=r.map(e=>({family:e})));let o=this._getRecordValue(e,"datePublished",!0),s=this._getRecordValue(e,"yearPublished",!0);return o?i.issued={raw:o}:s&&(i.issued={raw:s+""}),i}_getRecordValue(e,t,n){if(e[t]){if(t=e[t],Array.isArray(t)||(t=[t]),n){if(!t.length)return;return t[0]}return t}}renderEsRecord(e,t){return this.render(this.esRecordToCslJson(e),t)}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let i=!1,r=[],o=[];function s(){i=!0,requestAnimationFrame((function(){i=!1,a(r),setTimeout((function(){!function(e){for(let t=0,n=e.length;t<n;t++)l(e.shift())}(o)}))}))}function a(e){for(;e.length;)l(e.shift())}function l(e){const t=e[0],n=e[1],i=e[2];try{n.apply(t,i)}catch(e){setTimeout(()=>{throw e})}}function c(e,t,n){i||s(),o.push([e,t,n])}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(21);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const r={templatize(e,t){this._templatizerTemplate=e,this.ctor=Object(i.b)(e,this,{mutableData:Boolean(t),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(e){return new this.ctor(e)},modelForElement(e){return Object(i.a)(this._templatizerTemplate,e)}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(18);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r;r=i.a._mutablePropertyChange;const o={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,n){return r(this,e,t,n,this.mutableData)}}},function(e,t,n){"use strict";n(41),n(34);const i=n(5).a`<iron-iconset-svg name="fin-icons" size="24">
<svg><defs>
 <g id="account">
  <g>
    <style type="text/css">
    .st0{fill:#008EAA;}
    .st1{fill:#F3F3F3;}
  </style>
    <path class="st0" d="M18.6,20.1c2.4-1.9,3.9-4.9,3.9-8.1c0-5.8-4.7-10.5-10.5-10.5S1.5,6.2,1.5,12c0,3.3,1.5,6.2,3.9,8.1H18.6z"/>
    <path class="st1" d="M12,22.5c2.5,0,4.8-0.9,6.6-2.4c-0.9-3.2-3.5-5.5-6.6-5.5s-5.7,2.3-6.6,5.5C7.2,21.6,9.5,22.5,12,22.5z"/>
    <circle class="st1" cx="12" cy="9.9" r="3.5"/>
  </g>
</g>
<g id="close">
  <g>
    <polygon points="18.26 8.26 15.74 5.74 12 9.47 8.26 5.74 5.74 8.26 9.47 12 5.74 15.74 8.26 18.26 12 14.53 15.74 18.26 18.26 15.74 14.53 12 18.26 8.26"/>
  </g>
</g>
<g id="grid">
  <title>icon-grid</title>
  <rect x="17.08" y="5.5" width="5.42" height="5.42"/>
  <rect x="9.29" y="5.5" width="5.42" height="5.42"/>
  <rect x="1.5" y="5.5" width="5.42" height="5.42"/>
  <rect x="17.08" y="13.08" width="5.42" height="5.42"/>
  <rect x="9.29" y="13.08" width="5.42" height="5.42"/>
  <rect x="1.5" y="13.08" width="5.42" height="5.42"/>
</g>
<g id="list">
  <title>icon-list</title>
  <rect x="1.5" y="5.5" width="3" height="3"/>
  <rect x="6.61" y="5.51" width="15.89" height="3"/>
  <rect x="1.5" y="10.5" width="3" height="3"/>
  <rect x="6.61" y="10.5" width="15.89" height="3"/>
  <rect x="1.5" y="15.5" width="3" height="3"/>
  <rect x="6.61" y="15.5" width="15.89" height="3"/>
</g>
<g id="360-outline-stacked">
  <title>icon-360-outline-stacked</title>
  <path d="M17.61,16.29V2.72a1.34,1.34,0,0,0-1.34-1.34H2.7A1.34,1.34,0,0,0,1.36,2.72V16.29A1.35,1.35,0,0,0,2.7,17.64H16.27A1.35,1.35,0,0,0,17.61,16.29Zm-15.21,0V2.72a.3.3,0,0,1,.3-.3H16.27a.31.31,0,0,1,.31.3V16.29a.31.31,0,0,1-.31.31H2.7A.3.3,0,0,1,2.4,16.29Z"/>
  <path d="M20.13,18.79V5.21a1.34,1.34,0,0,0-1.34-1.34h-.14v1h.14a.31.31,0,0,1,.3.3V18.79a.31.31,0,0,1-.3.3H5.21a.31.31,0,0,1-.3-.3v-.14h-1v.14a1.34,1.34,0,0,0,1.34,1.34H18.79A1.34,1.34,0,0,0,20.13,18.79Z"/>
  <path d="M21.3,6.36h-.14v1h.14a.3.3,0,0,1,.3.31V21.28a.3.3,0,0,1-.3.3H7.73a.31.31,0,0,1-.31-.3v-.14h-1v.14a1.34,1.34,0,0,0,1.34,1.34H21.3a1.34,1.34,0,0,0,1.34-1.34V7.71A1.35,1.35,0,0,0,21.3,6.36Z"/>
  <g id="rotate-left">
    <path d="M6.73,7.92,6,7.15a4.27,4.27,0,0,0-.88,2.11H6.18A3.4,3.4,0,0,1,6.73,7.92Zm-.55,2.42H5.09A4.27,4.27,0,0,0,6,12.45l.76-.77A3.34,3.34,0,0,1,6.18,10.34Zm.55,2.88a4.37,4.37,0,0,0,2.11.88V13a3.38,3.38,0,0,1-1.33-.56ZM9.92,5.5V3.84L7.46,6.31,9.92,8.72V6.6a3.24,3.24,0,0,1,0,6.4v1.1a4.33,4.33,0,0,0,0-8.6Z"/>
  </g>
</g>
<g id="360-outline">
  <title>icon-360-outline</title>
  <path d="M20.92,22.5H3.08A1.58,1.58,0,0,1,1.5,20.92V3.08A1.58,1.58,0,0,1,3.08,1.5H20.92A1.58,1.58,0,0,1,22.5,3.08V20.92A1.58,1.58,0,0,1,20.92,22.5ZM3.08,2.5a.58.58,0,0,0-.58.58V20.92a.58.58,0,0,0,.58.58H20.92a.58.58,0,0,0,.58-.58V3.08a.58.58,0,0,0-.58-.58Z"/>
  <g id="rotate-left">
    <path d="M8.33,9.9,7.27,8.83a6,6,0,0,0-1.22,2.92H7.57A4.34,4.34,0,0,1,8.33,9.9Zm-.76,3.35H6.05a5.93,5.93,0,0,0,1.22,2.92L8.32,15.1A4.39,4.39,0,0,1,7.57,13.25Zm.76,4a6,6,0,0,0,2.92,1.21V16.92a4.41,4.41,0,0,1-1.85-.77ZM12.75,6.55V4.25L9.34,7.66,12.75,11V8.07a4.49,4.49,0,0,1,0,8.86v1.52a6,6,0,0,0,0-11.9Z"/>
  </g>
</g>
<g id="blank-stacked">
  <title>icon-blank-stacked</title>
  <path d="M17.61,16.29V2.72a1.34,1.34,0,0,0-1.34-1.34H2.7A1.34,1.34,0,0,0,1.36,2.72V16.29A1.35,1.35,0,0,0,2.7,17.64H16.27A1.35,1.35,0,0,0,17.61,16.29Zm-15.21,0V2.72a.3.3,0,0,1,.3-.3H16.27a.31.31,0,0,1,.31.3V16.29a.31.31,0,0,1-.31.31H2.7A.3.3,0,0,1,2.4,16.29Z"/>
  <path d="M20.13,18.79V5.21a1.34,1.34,0,0,0-1.34-1.34h-.14v1h.14a.31.31,0,0,1,.3.3V18.79a.31.31,0,0,1-.3.3H5.21a.31.31,0,0,1-.3-.3v-.14h-1v.14a1.34,1.34,0,0,0,1.34,1.34H18.79A1.34,1.34,0,0,0,20.13,18.79Z"/>
  <path d="M21.3,6.36h-.14v1h.14a.3.3,0,0,1,.3.31V21.28a.3.3,0,0,1-.3.3H7.73a.31.31,0,0,1-.31-.3v-.14h-1v.14a1.34,1.34,0,0,0,1.34,1.34H21.3a1.34,1.34,0,0,0,1.34-1.34V7.71A1.35,1.35,0,0,0,21.3,6.36Z"/>
</g>
<g id="sound-outline-stacked">
  <title>icon-sound-outline-stacked</title>
  <path d="M13.05,6.23a.55.55,0,0,0-.78.78,3.37,3.37,0,0,1,0,4.79.54.54,0,0,0,0,.78.6.6,0,0,0,.39.16.5.5,0,0,0,.39-.16,4.45,4.45,0,0,0,0-6.35Z"/>
  <path d="M10.65,7.33a.5.5,0,0,0,0,.73A1.74,1.74,0,0,1,11.2,9.4a2.07,2.07,0,0,1-.55,1.39.5.5,0,0,0,0,.73.71.71,0,0,0,.57.09.42.42,0,0,0,.16-.09,2.9,2.9,0,0,0,.85-2.12V9.12a2.54,2.54,0,0,0-.85-1.79A.5.5,0,0,0,10.65,7.33Z"/>
  <path d="M6.49,7.74H4.78a.38.38,0,0,0-.4.41v2.52a.39.39,0,0,0,.4.42H6.49l2.26,2.14a.4.4,0,0,0,.63-.33v-7a.39.39,0,0,0-.63-.33Z"/>
  <path d="M17.61,16.29V2.72a1.34,1.34,0,0,0-1.34-1.34H2.7A1.34,1.34,0,0,0,1.36,2.72V16.29A1.35,1.35,0,0,0,2.7,17.64H16.27A1.35,1.35,0,0,0,17.61,16.29Zm-15.21,0V2.72a.3.3,0,0,1,.3-.3H16.27a.31.31,0,0,1,.31.3V16.29a.31.31,0,0,1-.31.31H2.7A.3.3,0,0,1,2.4,16.29Z"/>
  <path d="M20.13,18.79V5.21a1.34,1.34,0,0,0-1.34-1.34h-.14v1h.14a.31.31,0,0,1,.3.3V18.79a.31.31,0,0,1-.3.3H5.21a.31.31,0,0,1-.3-.3v-.14h-1v.14a1.34,1.34,0,0,0,1.34,1.34H18.79A1.34,1.34,0,0,0,20.13,18.79Z"/>
  <path d="M21.3,6.36h-.14v1h.14a.3.3,0,0,1,.3.31V21.28a.3.3,0,0,1-.3.3H7.73a.31.31,0,0,1-.31-.3v-.14h-1v.14a1.34,1.34,0,0,0,1.34,1.34H21.3a1.34,1.34,0,0,0,1.34-1.34V7.71A1.35,1.35,0,0,0,21.3,6.36Z"/>
</g>
<g id="sound-outline">
  <title>icon-sound-outline</title>
  <path d="M16.4,8.2a.66.66,0,1,0-.93.93,4,4,0,0,1,0,5.74.64.64,0,0,0,0,.93.72.72,0,0,0,.46.2.62.62,0,0,0,.47-.2,5.31,5.31,0,0,0,0-7.6Z"/>
  <path d="M13.52,9.52a.61.61,0,0,0,0,.88,2.07,2.07,0,0,1,.66,1.6,2.49,2.49,0,0,1-.66,1.66.61.61,0,0,0,0,.88.89.89,0,0,0,.68.1.54.54,0,0,0,.2-.1,3.49,3.49,0,0,0,1-2.54c0-.11,0-.23,0-.34a3,3,0,0,0-1-2.14A.61.61,0,0,0,13.52,9.52Z"/>
  <path d="M8.52,10h-2a.46.46,0,0,0-.48.5v3a.47.47,0,0,0,.48.51h2l2.72,2.57a.49.49,0,0,0,.76-.4V7.83a.47.47,0,0,0-.76-.4Z"/>
  <path d="M20.92,22.5H3.08A1.58,1.58,0,0,1,1.5,20.92V3.08A1.58,1.58,0,0,1,3.08,1.5H20.92A1.58,1.58,0,0,1,22.5,3.08V20.92A1.58,1.58,0,0,1,20.92,22.5ZM3.08,2.5a.58.58,0,0,0-.58.58V20.92a.58.58,0,0,0,.58.58H20.92a.58.58,0,0,0,.58-.58V3.08a.58.58,0,0,0-.58-.58Z"/>
</g>
<g id="various-outline-stacked">
  <title>icon-various-outline-stacked</title>
  <circle cx="6.84" cy="11.56" r="1.82"/>
  <circle cx="11.93" cy="11.56" r="1.82"/>
  <circle cx="9.38" cy="7.2" r="1.82"/>
  <path d="M17.61,16.29V2.72a1.34,1.34,0,0,0-1.34-1.34H2.7A1.34,1.34,0,0,0,1.36,2.72V16.29A1.35,1.35,0,0,0,2.7,17.64H16.27A1.35,1.35,0,0,0,17.61,16.29Zm-15.21,0V2.72a.3.3,0,0,1,.3-.3H16.27a.31.31,0,0,1,.31.3V16.29a.31.31,0,0,1-.31.31H2.7A.3.3,0,0,1,2.4,16.29Z"/>
  <path d="M20.13,18.79V5.21a1.34,1.34,0,0,0-1.34-1.34h-.14v1h.14a.31.31,0,0,1,.3.3V18.79a.31.31,0,0,1-.3.3H5.21a.31.31,0,0,1-.3-.3v-.14h-1v.14a1.34,1.34,0,0,0,1.34,1.34H18.79A1.34,1.34,0,0,0,20.13,18.79Z"/>
  <path d="M21.3,6.36h-.14v1h.14a.3.3,0,0,1,.3.31V21.28a.3.3,0,0,1-.3.3H7.73a.31.31,0,0,1-.31-.3v-.14h-1v.14a1.34,1.34,0,0,0,1.34,1.34H21.3a1.34,1.34,0,0,0,1.34-1.34V7.71A1.35,1.35,0,0,0,21.3,6.36Z"/>
</g>
<g id="video-outline-stacked">
  <title>icon-video-outline-stacked</title>
  <path d="M17.61,16.29V2.72a1.34,1.34,0,0,0-1.34-1.34H2.7A1.34,1.34,0,0,0,1.36,2.72V16.29A1.35,1.35,0,0,0,2.7,17.64H16.27A1.35,1.35,0,0,0,17.61,16.29Zm-15.21,0V2.72a.3.3,0,0,1,.3-.3H16.27a.31.31,0,0,1,.31.3V16.29a.31.31,0,0,1-.31.31H2.7A.3.3,0,0,1,2.4,16.29Z"/>
  <path d="M20.13,18.79V5.21a1.34,1.34,0,0,0-1.34-1.34h-.14v1h.14a.31.31,0,0,1,.3.3V18.79a.31.31,0,0,1-.3.3H5.21a.31.31,0,0,1-.3-.3v-.14h-1v.14a1.34,1.34,0,0,0,1.34,1.34H18.79A1.34,1.34,0,0,0,20.13,18.79Z"/>
  <path d="M21.3,6.36h-.14v1h.14a.3.3,0,0,1,.3.31V21.28a.3.3,0,0,1-.3.3H7.73a.31.31,0,0,1-.31-.3v-.14h-1v.14a1.34,1.34,0,0,0,1.34,1.34H21.3a1.34,1.34,0,0,0,1.34-1.34V7.71A1.35,1.35,0,0,0,21.3,6.36Z"/>
  <path d="M12.46,8.92l-5-3.34A.5.5,0,0,0,6.7,6v6.69a.5.5,0,0,0,.79.38l5-3.34a.49.49,0,0,0,0-.77Z"/>
</g>
<g id="video-outline">
  <title>icon-video-outline</title>
  <path d="M15.58,11.55,9.74,7.61a.59.59,0,0,0-.94.45v7.88a.59.59,0,0,0,.94.45l5.84-3.94a.57.57,0,0,0,0-.9Z"/>
  <path d="M20.92,22.5H3.08A1.58,1.58,0,0,1,1.5,20.92V3.08A1.58,1.58,0,0,1,3.08,1.5H20.92A1.58,1.58,0,0,1,22.5,3.08V20.92A1.58,1.58,0,0,1,20.92,22.5ZM3.08,2.5a.58.58,0,0,0-.58.58V20.92a.58.58,0,0,0,.58.58H20.92a.58.58,0,0,0,.58-.58V3.08a.58.58,0,0,0-.58-.58Z"/>
</g>
<g id="360-round">
  <title>icon-360-circle</title>
  <g style="opacity:0.7000000000000001">
    <circle cx="12" cy="12" r="10.5"/>
  </g>
  <path d="M12,1.5A10.5,10.5,0,1,1,1.5,12,10.5,10.5,0,0,1,12,1.5m0-1A11.5,11.5,0,1,0,23.5,12,11.51,11.51,0,0,0,12,.5Z" style="fill:#fff"/>
  <path d="M12.75,6.05V3.75L9.34,7.16l3.41,3.34V7.57a4.49,4.49,0,0,1,0,8.86V18a6,6,0,0,0,0-11.9ZM8.32,16.74A6,6,0,0,0,11.25,18V16.43a4.56,4.56,0,0,1-1.85-.78Zm-.75-4H6.05a5.93,5.93,0,0,0,1.22,2.92L8.32,14.6a4.39,4.39,0,0,1-.75-1.85ZM8.33,9.4,7.27,8.33a6,6,0,0,0-1.22,2.92H7.57A4.34,4.34,0,0,1,8.33,9.4Z" style="fill:#fff"/>
</g>
<g id="blank-round">
  <title>icon-blank-circle</title>
  <g style="opacity:0.7000000000000001">
    <circle cx="12" cy="12" r="10.5"/>
  </g>
  <path d="M12,1.5A10.5,10.5,0,1,1,1.5,12,10.5,10.5,0,0,1,12,1.5m0-1A11.5,11.5,0,1,0,23.5,12,11.51,11.51,0,0,0,12,.5Z" style="fill:#fff"/>
  <path d="M4.29,9.37H6.92a1.69,1.69,0,0,1,1.82,1.75,1.68,1.68,0,0,1-1.82,1.73H5.64v1.78H4.29Zm2.45,1.15H5.64V11.7h1.1a.59.59,0,1,0,0-1.18Z" style="fill:#fff"/>
  <path d="M9.74,9.37H12a2.64,2.64,0,1,1,0,5.26H9.74ZM12,13.45A1.4,1.4,0,0,0,13.41,12,1.35,1.35,0,0,0,12,10.55H11.1v2.9Z" style="fill:#fff"/>
  <path d="M15.86,9.37h3.85v1.15H17.22v.87h2.44v1.15H17.22v2.09H15.86Z" style="fill:#fff"/>
</g>
<g id="sound-round">
  <title>icon-sound-circle</title>
  <g style="opacity:0.7000000000000001">
    <circle cx="12" cy="12" r="10.5"/>
  </g>
  <path d="M12,1.5A10.5,10.5,0,1,1,1.5,12,10.5,10.5,0,0,1,12,1.5m0-1A11.5,11.5,0,1,0,23.5,12,11.51,11.51,0,0,0,12,.5Z" style="fill:#fff"/>
  <path d="M16,8.52a.6.6,0,0,0-.85.85,3.69,3.69,0,0,1,0,5.26.58.58,0,0,0,0,.85.62.62,0,0,0,.43.19.52.52,0,0,0,.42-.19,4.85,4.85,0,0,0,0-7Z" style="fill:#fff"/>
  <path d="M13.39,9.73a.55.55,0,0,0,0,.8A1.9,1.9,0,0,1,14,12a2.27,2.27,0,0,1-.61,1.52.55.55,0,0,0,0,.8.81.81,0,0,0,.63.1.4.4,0,0,0,.18-.1A3.15,3.15,0,0,0,15.14,12c0-.1,0-.21,0-.31a2.76,2.76,0,0,0-.93-2A.56.56,0,0,0,13.39,9.73Z" style="fill:#fff"/>
  <path d="M8.81,10.17H6.94a.43.43,0,0,0-.44.46v2.76a.43.43,0,0,0,.44.46H8.81l2.49,2.36a.45.45,0,0,0,.7-.37V8.18a.44.44,0,0,0-.7-.37Z" style="fill:#fff"/>
</g>
<g id="video-round">
  <title>icon-video-circle</title>
  <g style="opacity:0.7000000000000001">
    <circle cx="12" cy="12" r="10.5"/>
  </g>
  <path d="M12,1.5A10.5,10.5,0,1,1,1.5,12,10.5,10.5,0,0,1,12,1.5m0-1A11.5,11.5,0,1,0,23.5,12,11.51,11.51,0,0,0,12,.5Z" style="fill:#fff"/>
  <path d="M15.58,11.55,9.74,7.61a.59.59,0,0,0-.94.45v7.88a.59.59,0,0,0,.94.45l5.84-3.94a.57.57,0,0,0,0-.9Z" style="fill:#fff"/>
</g>
<g id="search">
  <title>icon-search</title>
  <path d="M22.16,20.08l-5.25-5.24a8.38,8.38,0,1,0-1.53,1.77l5.13,5.12a1.15,1.15,0,0,0,.82.35,1.18,1.18,0,0,0,.83-2ZM9.88,16.35a6,6,0,1,1,6-6.05A6.06,6.06,0,0,1,9.88,16.35Z"/>
</g>
<g id="360-solid">
  <title>icon-360-solid</title>
  <path d="M20.92,22.5H3.08A1.58,1.58,0,0,1,1.5,20.92V3.08A1.58,1.58,0,0,1,3.08,1.5H20.92A1.58,1.58,0,0,1,22.5,3.08V20.92A1.58,1.58,0,0,1,20.92,22.5Z"/>
  <rect x="3" y="3.5" width="18" height="18" style="fill:none"/>
  <g id="rotate-left">
    <path d="M8.33,9.9,7.27,8.83a6,6,0,0,0-1.22,2.92H7.57A4.34,4.34,0,0,1,8.33,9.9Zm-.76,3.35H6.05a5.93,5.93,0,0,0,1.22,2.92L8.32,15.1A4.39,4.39,0,0,1,7.57,13.25Zm.76,4a6,6,0,0,0,2.92,1.21V16.92a4.41,4.41,0,0,1-1.85-.77ZM12.75,6.55V4.25L9.34,7.66,12.75,11V8.07a4.49,4.49,0,0,1,0,8.86v1.52a6,6,0,0,0,0-11.9Z" style="fill:#fff"/>
  </g>
</g>
<g id="compressed-solid">
  <title>icon-compressed-solid</title>
  <path d="M20.92,22.5H3.08A1.58,1.58,0,0,1,1.5,20.92V3.08A1.58,1.58,0,0,1,3.08,1.5H20.92A1.58,1.58,0,0,1,22.5,3.08V20.92A1.58,1.58,0,0,1,20.92,22.5Z"/>
  <path d="M15,6.16A.52.52,0,0,0,14.62,6H6.53A.53.53,0,0,0,6,6.53V17.47a.53.53,0,0,0,.53.53H17.47a.53.53,0,0,0,.53-.53V9.38A.52.52,0,0,0,17.84,9Zm2,10.78H11.27v-6H9.75v6H7.06V7.06h6.23v3.65h3.65Zm0-7.29H14.35V7l.05,0L16.94,9.6l0,.05Z" style="fill:#fff"/>
</g>
<g id="file-solid">
  <title>icon-file-solid</title>
  <path d="M20.92,22.5H3.08A1.58,1.58,0,0,1,1.5,20.92V3.08A1.58,1.58,0,0,1,3.08,1.5H20.92A1.58,1.58,0,0,1,22.5,3.08V20.92A1.58,1.58,0,0,1,20.92,22.5Z"/>
  <path d="M14.62,6H6.53A.53.53,0,0,0,6,6.53V17.47a.53.53,0,0,0,.53.53H17.47a.53.53,0,0,0,.53-.53V9.38A.52.52,0,0,0,17.84,9L15,6.16A.52.52,0,0,0,14.62,6Zm2.32,10.94H7.06V7.06h6.23v3.65h3.65Zm0-7.29H14.35V7l.05,0L16.94,9.6l0,.05Z" style="fill:#fff"/>
</g>
<g id="image-solid">
  <title>icon-image-solid</title>
  <path d="M20.92,22.5H3.08A1.58,1.58,0,0,1,1.5,20.92V3.08A1.58,1.58,0,0,1,3.08,1.5H20.92A1.58,1.58,0,0,1,22.5,3.08V20.92A1.58,1.58,0,0,1,20.92,22.5Z"/>
  <path d="M6.44,18H17.56a.44.44,0,0,0,.4-.62L14.5,10.65l-3,4.91L8.78,13.38l-2.73,4A.45.45,0,0,0,6.44,18Z" style="fill:#fff"/>
  <circle cx="10.25" cy="7.92" r="1.92" style="fill:#fff"/>
</g>
<g id="pdf-solid">
  <title>icon-pdf-solid</title>
  <path d="M20.92,22.5H3.08A1.58,1.58,0,0,1,1.5,20.92V3.08A1.58,1.58,0,0,1,3.08,1.5H20.92A1.58,1.58,0,0,1,22.5,3.08V20.92A1.58,1.58,0,0,1,20.92,22.5Z"/>
  <path d="M5,9.62H7.39a1.58,1.58,0,1,1,0,3.15H6.23v1.61H5Zm2.22,1h-1v1.08h1a.53.53,0,0,0,.57-.53A.54.54,0,0,0,7.22,10.65Z" style="fill:#fff"/>
  <path d="M10,9.62h2a2.39,2.39,0,1,1,0,4.76H10Zm2,3.69A1.27,1.27,0,0,0,13.28,12,1.23,1.23,0,0,0,12,10.69h-.78v2.62Z" style="fill:#fff"/>
  <path d="M15.5,9.62H19v1H16.73v.8H19v1H16.73v1.89H15.5Z" style="fill:#fff"/>
</g>
<g id="sound-solid">
  <title>icon-sound-solid</title>
  <path d="M20.92,22.5H3.08A1.58,1.58,0,0,1,1.5,20.92V3.08A1.58,1.58,0,0,1,3.08,1.5H20.92A1.58,1.58,0,0,1,22.5,3.08V20.92A1.58,1.58,0,0,1,20.92,22.5Z"/>
  <path d="M16.4,8.2a.66.66,0,1,0-.93.93,4,4,0,0,1,0,5.74.64.64,0,0,0,0,.93.72.72,0,0,0,.46.2.62.62,0,0,0,.47-.2,5.31,5.31,0,0,0,0-7.6Z" style="fill:#fff"/>
  <path d="M13.52,9.52a.61.61,0,0,0,0,.88,2.07,2.07,0,0,1,.66,1.6,2.49,2.49,0,0,1-.66,1.66.61.61,0,0,0,0,.88.89.89,0,0,0,.68.1.54.54,0,0,0,.2-.1,3.49,3.49,0,0,0,1-2.54c0-.11,0-.23,0-.34a3,3,0,0,0-1-2.14A.61.61,0,0,0,13.52,9.52Z" style="fill:#fff"/>
  <path d="M8.52,10h-2a.46.46,0,0,0-.48.5v3a.47.47,0,0,0,.48.51h2l2.72,2.57a.49.49,0,0,0,.76-.4V7.83a.47.47,0,0,0-.76-.4Z" style="fill:#fff"/>
</g>
<g id="spreadsheet-solid">
  <title>icon-spreadsheet-solid</title>
  <path d="M20.92,22.5H3.08A1.58,1.58,0,0,1,1.5,20.92V3.08A1.58,1.58,0,0,1,3.08,1.5H20.92A1.58,1.58,0,0,1,22.5,3.08V20.92A1.58,1.58,0,0,1,20.92,22.5Z"/>
  <path d="M17.47,6H6.53A.53.53,0,0,0,6,6.53V17.47a.53.53,0,0,0,.53.53H17.47a.53.53,0,0,0,.53-.53V6.53A.53.53,0,0,0,17.47,6ZM7.06,7.06h9.88v9.88H7.06Z" style="fill:#fff"/>
  <polygon points="18 10.71 18 9.65 10.71 9.65 10.71 6 9.65 6 9.65 9.65 6 9.65 6 10.71 9.65 10.71 9.65 13.29 6 13.29 6 14.35 9.65 14.35 9.65 18 10.71 18 10.71 14.35 18 14.35 18 13.29 10.71 13.29 10.71 10.71 18 10.71" style="fill:#fff"/>
</g>
<g id="text-solid">
  <title>icon-text-solid</title>
  <path d="M20.92,22.5H3.08A1.58,1.58,0,0,1,1.5,20.92V3.08A1.58,1.58,0,0,1,3.08,1.5H20.92A1.58,1.58,0,0,1,22.5,3.08V20.92A1.58,1.58,0,0,1,20.92,22.5Z"/>
  <rect x="6.5" y="9.81" width="11" height="1.06" rx="0.49" style="fill:#fff"/>
  <rect x="6.5" y="13.13" width="11" height="1.06" rx="0.49" style="fill:#fff"/>
  <rect x="6.5" y="16.44" width="5.5" height="1.06" rx="0.49" style="fill:#fff"/>
  <rect x="6.5" y="6.5" width="11" height="1.06" rx="0.49" style="fill:#fff"/>
</g>
<g id="video-solid">
  <title>icon-video-solid</title>
  <path d="M20.92,22.5H3.08A1.58,1.58,0,0,1,1.5,20.92V3.08A1.58,1.58,0,0,1,3.08,1.5H20.92A1.58,1.58,0,0,1,22.5,3.08V20.92A1.58,1.58,0,0,1,20.92,22.5Z"/>
  <path d="M15.28,11.55,9.44,7.61a.59.59,0,0,0-.94.45v7.88a.59.59,0,0,0,.94.45l5.84-3.94a.57.57,0,0,0,0-.9Z" style="fill:#fff"/>
</g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(i.content)},function(e){e.exports=JSON.parse('{"http://rightsstatements.org/vocab/InC/1.0/":{"text":"IN COPYRIGHT","icon":"InC"},"http://rightsstatements.org/vocab/InC-OW-EU/1.0/":{"text":"IN COPYRIGHT - EU ORPHAN WORK","icon":"InC"},"http://rightsstatements.org/vocab/InC-EDU/1.0/":{"text":"IN COPYRIGHT - EDUCATIONAL USE PERMITTED","icon":"InC"},"http://rightsstatements.org/vocab/InC-NC/1.0/":{"text":"IN COPYRIGHT - NON-COMMERCIAL USE PERMITTED","icon":"InC"},"http://rightsstatements.org/vocab/InC-RUU/1.0/":{"text":"IN COPYRIGHT - RIGHTS-HOLDER(S) UNLOCATABLE OR UNIDENTIFIABLE","icon":"InC"},"http://rightsstatements.org/vocab/NoC-NC/1.0/":{"text":"NO COPYRIGHT - NON-COMMERCIAL USE ONLY","icon":"NoC"},"http://rightsstatements.org/vocab/NoC-OKLR/1.0/":{"text":"NO COPYRIGHT - OTHER KNOWN LEGAL RESTRICTIONS","icon":"NoC"},"http://rightsstatements.org/vocab/NoC-US/1.0/":{"text":"NO COPYRIGHT - UNITED STATES","icon":"NoC"},"http://rightsstatements.org/vocab/CNE/1.0/":{"text":"COPYRIGHT NOT EVALUATED","icon":"Other"},"http://rightsstatements.org/vocab/UND/1.0/":{"text":"COPYRIGHT UNDETERMINED","icon":"Other"},"http://rightsstatements.org/vocab/NKC/1.0/":{"text":"NO KNOWN COPYRIGHT","icon":"Other"}}')},function(e,t,n){"use strict";var i=n(4),r=n(65),o=n.n(r);class s extends i.a{static get properties(){return{placeholder:{type:String,value:""},browse:{type:Object,observer:"_onBrowseOptionsChange",value:()=>({})}}}static get template(){let e=document.createElement("template");return e.innerHTML=o.a,e}get browseValue(){return this._browseValue||"Browse"}set browseValue(e){this._browseValue=e,this.$.select.value=e}get value(){return this.$.input.value}set value(e){this.$.input.value=e}_fireSearch(){this.dispatchEvent(new CustomEvent("search",{detail:this.$.input.value,bubbles:!0,composed:!0}))}_fireBrowse(){this.dispatchEvent(new CustomEvent("browse",{detail:this.$.select.value,bubbles:!0,composed:!0}))}_onKeyUp(e){13===e.which&&this._fireSearch()}_onBrowseOptionsChange(){var e;this.$.select.innerHTML="",(e=document.createElement("option")).value="Browse",e.textContent="Browse",e.setAttribute("selected","selected"),this.$.select.appendChild(e),(e=document.createElement("option")).value="",e.textContent="All Items",this.$.select.appendChild(e);for(let t in this.browse)(e=document.createElement("option")).textContent=this.browse[t],e.value=t,this.$.select.appendChild(e)}}customElements.define("fin-search-box",s)},function(e,t,n){(function(e){var i=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},i=0;i<t.length;i++)n[t[i]]=Object.getOwnPropertyDescriptor(e,t[i]);return n},r=/%[sdj%]/g;t.format=function(e){if(!v(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(a(arguments[n]));return t.join(" ")}n=1;for(var i=arguments,o=i.length,s=String(e).replace(r,(function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(e){return"[Circular]"}default:return e}})),l=i[n];n<o;l=i[++n])g(l)||!b(l)?s+=" "+l:s+=" "+a(l);return s},t.deprecate=function(n,i){if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,i).apply(this,arguments)};var r=!1;return function(){if(!r){if(e.throwDeprecation)throw new Error(i);e.traceDeprecation?console.trace(i):console.error(i),r=!0}return n.apply(this,arguments)}};var o,s={};function a(e,n){var i={seen:[],stylize:c};return arguments.length>=3&&(i.depth=arguments[2]),arguments.length>=4&&(i.colors=arguments[3]),f(n)?i.showHidden=n:n&&t._extend(i,n),y(i.showHidden)&&(i.showHidden=!1),y(i.depth)&&(i.depth=2),y(i.colors)&&(i.colors=!1),y(i.customInspect)&&(i.customInspect=!0),i.colors&&(i.stylize=l),h(i,e,i.depth)}function l(e,t){var n=a.styles[t];return n?"["+a.colors[n][0]+"m"+e+"["+a.colors[n][1]+"m":e}function c(e,t){return e}function h(e,n,i){if(e.customInspect&&n&&C(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var r=n.inspect(i,e);return v(r)||(r=h(e,r,i)),r}var o=function(e,t){if(y(t))return e.stylize("undefined","undefined");if(v(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(m(t))return e.stylize(""+t,"number");if(f(t))return e.stylize(""+t,"boolean");if(g(t))return e.stylize("null","null")}(e,n);if(o)return o;var s=Object.keys(n),a=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(n)),z(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return d(n);if(0===s.length){if(C(n)){var l=n.name?": "+n.name:"";return e.stylize("[Function"+l+"]","special")}if(_(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return e.stylize(Date.prototype.toString.call(n),"date");if(z(n))return d(n)}var c,b="",S=!1,M=["{","}"];(u(n)&&(S=!0,M=["[","]"]),C(n))&&(b=" [Function"+(n.name?": "+n.name:"")+"]");return _(n)&&(b=" "+RegExp.prototype.toString.call(n)),w(n)&&(b=" "+Date.prototype.toUTCString.call(n)),z(n)&&(b=" "+d(n)),0!==s.length||S&&0!=n.length?i<0?_(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),c=S?function(e,t,n,i,r){for(var o=[],s=0,a=t.length;s<a;++s)O(t,String(s))?o.push(p(e,t,n,i,String(s),!0)):o.push("");return r.forEach((function(r){r.match(/^\d+$/)||o.push(p(e,t,n,i,r,!0))})),o}(e,n,i,a,s):s.map((function(t){return p(e,n,i,a,t,S)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(c,b,M)):M[0]+b+M[1]}function d(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,i,r,o){var s,a,l;if((l=Object.getOwnPropertyDescriptor(t,r)||{value:t[r]}).get?a=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(a=e.stylize("[Setter]","special")),O(i,r)||(s="["+r+"]"),a||(e.seen.indexOf(l.value)<0?(a=g(n)?h(e,l.value,null):h(e,l.value,n-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+a.split("\n").map((function(e){return"   "+e})).join("\n")):a=e.stylize("[Circular]","special")),y(s)){if(o&&r.match(/^\d+$/))return a;(s=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function u(e){return Array.isArray(e)}function f(e){return"boolean"==typeof e}function g(e){return null===e}function m(e){return"number"==typeof e}function v(e){return"string"==typeof e}function y(e){return void 0===e}function _(e){return b(e)&&"[object RegExp]"===S(e)}function b(e){return"object"==typeof e&&null!==e}function w(e){return b(e)&&"[object Date]"===S(e)}function z(e){return b(e)&&("[object Error]"===S(e)||e instanceof Error)}function C(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function M(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(y(o)&&(o=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!s[n])if(new RegExp("\\b"+n+"\\b","i").test(o)){var i=e.pid;s[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,i,e)}}else s[n]=function(){};return s[n]},t.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=u,t.isBoolean=f,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=v,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=y,t.isRegExp=_,t.isObject=b,t.isDate=w,t.isError=z,t.isFunction=C,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(120);var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function E(){var e=new Date,t=[M(e.getHours()),M(e.getMinutes()),M(e.getSeconds())].join(":");return[e.getDate(),x[e.getMonth()],t].join(" ")}function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",E(),t.format.apply(t,arguments))},t.inherits=n(121),t._extend=function(e,t){if(!t||!b(t))return e;for(var n=Object.keys(t),i=n.length;i--;)e[n[i]]=t[n[i]];return e};var A="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function L(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(A&&e[A]){var t;if("function"!=typeof(t=e[A]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,A,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,i=new Promise((function(e,i){t=e,n=i})),r=[],o=0;o<arguments.length;o++)r.push(arguments[o]);r.push((function(e,i){e?n(e):t(i)}));try{e.apply(this,r)}catch(e){n(e)}return i}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),A&&Object.defineProperty(t,A,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,i(e))},t.promisify.custom=A,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i]);var r=n.pop();if("function"!=typeof r)throw new TypeError("The last argument must be of type Function");var o=this,s=function(){return r.apply(o,arguments)};t.apply(this,n).then((function(t){e.nextTick(s,null,t)}),(function(t){e.nextTick(L,t,s)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,i(t)),n}}).call(this,n(119))},function(e,t,n){"use strict";var i=n(4);class r extends i.a{static get properties(){return{height:{value:36,type:Number,observer:"_updateHeight"},flipped:{value:!1,type:Boolean,observer:"_flip"}}}static get template(){return i.b`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 36px;
        background-image: url('');
        background-position: center;
        background-size: cover;
      }
    </style>`}constructor(){super(),this.imageUrl="/images/header-colorbar.png",this.fippedImageUrl="/images/header-colorbar-flipped.png"}_updateHeight(){this.height>36&&(this.height=36),this.style.height=this.height+"px"}_flip(){this.flipped?this.style.backgroundImage=`url('${this.fippedImageUrl}')`:this.style.backgroundImage=`url('${this.imageUrl}')`}}customElements.define("app-header-colorbar",r)},function(e,t,n){const i=n(28),r=n(45);e.exports=class{get EventBus(){return i}register(e){e||console.warn("Name not passed to register().  This will fail in IE, cause, you know, IE.");var t=e||this.__proto__.constructor.name;r.registerModel(t,this)}emit(e,t){setTimeout(()=>{i.emit(e,t)},0)}}},function(e,t,n){"use strict";var i,r="object"==typeof Reflect?Reflect:null,o=r&&"function"==typeof r.apply?r.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};i=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var l=10;function c(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function h(e,t,n,i){var r,o,s,a;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"==typeof s?s=o[t]=i?[n,s]:[s,n]:i?s.unshift(n):s.push(n),(r=c(e))>0&&s.length>r&&!s.warned){s.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=s.length,a=l,console&&console.warn&&console.warn(a)}return e}function d(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,o(this.listener,this.target,e))}function p(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=d.bind(i);return r.listener=n,i.wrapFn=r,r}function u(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):g(r,r.length)}function f(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function g(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");l=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return c(this)},a.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,r=this._events;if(void 0!==r)i=i&&void 0===r.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var l=r[e];if(void 0===l)return!1;if("function"==typeof l)o(l,this,t);else{var c=l.length,h=g(l,c);for(n=0;n<c;++n)o(h[n],this,t)}return!0},a.prototype.addListener=function(e,t){return h(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return h(this,e,t,!0)},a.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,p(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,p(this,e,t)),this},a.prototype.removeListener=function(e,t){var n,i,r,o,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,r=o;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,s||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)"removeListener"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},a.prototype.listeners=function(e){return u(this,e,!0)},a.prototype.rawListeners=function(e){return u(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):f.call(e,t)},a.prototype.listenerCount=f,a.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}},function(e,t,n){const i=n(28),r=n(87);e.exports=class{constructor(){this.STATE={INIT:"init",LOADING:"loading",LOADED:"loaded",ERROR:"error",SAVING:"saving",SAVE_ERROR:"save-error",SAVE_SUCCESS:"save-success",DELETING:"deleting",DELETE_ERROR:"delete-error",DELETED:"deleted"}}get EventBus(){return i}emit(e,t){setTimeout(()=>{i.emit(e,t)},0)}stateChanged(e,t){return!(e||!t)||(!(!e||t)||!(!e&&!t)&&(e.state!==t.state||!r(e,t)))}}},function(e,t,n){"use strict";var i=Array.isArray,r=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var s,a,l,c=i(t),h=i(n);if(c&&h){if((a=t.length)!=n.length)return!1;for(s=a;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(c!=h)return!1;var d=t instanceof Date,p=n instanceof Date;if(d!=p)return!1;if(d&&p)return t.getTime()==n.getTime();var u=t instanceof RegExp,f=n instanceof RegExp;if(u!=f)return!1;if(u&&f)return t.toString()==n.toString();var g=r(t);if((a=g.length)!==r(n).length)return!1;for(s=a;0!=s--;)if(!o.call(n,g[s]))return!1;for(s=a;0!=s--;)if(!e(t[l=g[s]],n[l]))return!1;return!0}return t!=t&&n!=n}},function(e,t,n){const i=n(56);e.exports=class{constructor(){this.rootUrl="","undefined"!=typeof window&&(this.rootUrl=window.location.protocol+"//"+window.location.host),this.ERROR_MESSAGES={REQUEST:"Request Error",STATUS_CODE:"Invalid status code",JSON:"Invalid JSON response",APPLICATION_ERROR:"Application Error"}}async request(e){if(!e.store){if(!this.store)return console.error(new Error("No store provided"));e.store=this.store}if(e.fetchOptions||(e.fetchOptions={}),e.fetchOptions.credentials||(e.fetchOptions.credentials="include"),e.json&&e.fetchOptions&&e.fetchOptions.body&&"object"==typeof e.fetchOptions.body&&(e.fetchOptions.body=JSON.stringify(e.fetchOptions.body),e.fetchOptions.headers||(e.fetchOptions.headers={}),e.fetchOptions.headers["Content-Type"]="application/json"),e.qs){let n=[];for(var t in e.qs)n.push(`${t}=${e.qs[t]}`);e.url+="?"+n.join("&")}if(e.checkCached){var n=e.checkCached();if(this.isLoaded(n))return n;if(this.isLoading(n)){if(!n.request)throw new Error("checkCached set but no request object found",n);return n.request}}let i=this._request(e);return e.onLoading&&e.onLoading(i),await i}_request(e){return e.fetchOptions||(e.fetchOptions={}),new Promise(async(t,n)=>{var r=null;try{r=await i(e.url,e.fetchOptions)}catch(t){return this._handleError(e,n,{error:!0,details:t,response:r,message:this.ERROR_MESSAGES.REQUEST})}if(r.status<200||r.status>299)return this._handleError(e,n,{error:!0,response:r,message:this.ERROR_MESSAGES.STATUS_CODE});if(r.headers.has("Content-Type")&&r.headers.get("Content-Type").match(/application\/json/i)){var o=null;try{o=await r.json()}catch(t){return this._handleError(e,n,{error:!0,details:t,response:r,message:this.ERROR_MESSAGES.JSON})}if(o.error)return this._handleError(e,n,{error:!0,details:o,response:r,message:this.ERROR_MESSAGES.APPLICATION_ERROR})}else o=await r.text();e.onLoad&&e.onLoad({response:r,body:o}),t({response:r,body:o})})}async _handleError(e,t,n){if(n.response&&!n.payload)if(n.response.headers.has("Content-Type")&&n.response.headers.get("Content-Type").match(/application\/json/i))try{n.payload=await n.response.json()}catch(e){n.payload={}}else n.payload=await n.response.text();e.onError&&e.onError(n),t(n)}isLoaded(e){return this.store?!(!e||e.state!==this.store.STATE.LOADED):console.warn("Checking LOADED state but no store set for service")}isLoading(e){return this.store?!(!e||e.state!==this.store.STATE.LOADING):console.warn("Checking LOADED state but no store set for service")}}},function(e,t,n){"use strict";n.r(t),n.d(t,"Headers",(function(){return c})),n.d(t,"Request",(function(){return m})),n.d(t,"Response",(function(){return y})),n.d(t,"DOMException",(function(){return b})),n.d(t,"fetch",(function(){return w}));var i={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(i.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(e){return e&&r.indexOf(Object.prototype.toString.call(e))>-1};function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function a(e){return"string"!=typeof e&&(e=String(e)),e}function l(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return i.iterable&&(t[Symbol.iterator]=function(){return t}),t}function c(e){this.map={},e instanceof c?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function h(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function p(e){var t=new FileReader,n=d(t);return t.readAsArrayBuffer(e),n}function u(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:i.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:i.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:i.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():i.arrayBuffer&&i.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=u(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||o(e))?this._bodyArrayBuffer=u(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):i.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i.blob&&(this.blob=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var e,t,n,i=h(this);if(i)return i;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=d(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),i=0;i<t.length;i++)n[i]=String.fromCharCode(t[i]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(e,t){e=s(e),t=a(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},c.prototype.delete=function(e){delete this.map[s(e)]},c.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},c.prototype.set=function(e,t){this.map[s(e)]=a(t)},c.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},c.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),l(e)},c.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),l(e)},c.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),l(e)},i.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(e,t){var n,i,r=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new c(t.headers)),this.method=(n=t.method||this.method||"GET",i=n.toUpperCase(),g.indexOf(i)>-1?i:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function v(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),i=n.shift().replace(/\+/g," "),r=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(i),decodeURIComponent(r))}})),t}function y(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new c(t.headers),this.url=t.url||"",this._initBody(e)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},f.call(m.prototype),f.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},y.error=function(){var e=new y(null,{status:0,statusText:""});return e.type="error",e};var _=[301,302,303,307,308];y.redirect=function(e,t){if(-1===_.indexOf(t))throw new RangeError("Invalid status code");return new y(null,{status:t,headers:{location:e}})};var b=self.DOMException;try{new b}catch(e){(b=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),b.prototype.constructor=b}function w(e,t){return new Promise((function(n,r){var o=new m(e,t);if(o.signal&&o.signal.aborted)return r(new b("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var e,t,i={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new c,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var n=e.split(":"),i=n.shift().trim();if(i){var r=n.join(":").trim();t.append(i,r)}})),t)};i.url="responseURL"in s?s.responseURL:i.headers.get("X-Request-URL");var r="response"in s?s.response:s.responseText;n(new y(r,i))},s.onerror=function(){r(new TypeError("Network request failed"))},s.ontimeout=function(){r(new TypeError("Network request failed"))},s.onabort=function(){r(new b("Aborted","AbortError"))},s.open(o.method,o.url,!0),"include"===o.credentials?s.withCredentials=!0:"omit"===o.credentials&&(s.withCredentials=!1),"responseType"in s&&i.blob&&(s.responseType="blob"),o.headers.forEach((function(e,t){s.setRequestHeader(t,e)})),o.signal&&(o.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&o.signal.removeEventListener("abort",a)}),s.send(void 0===o._bodyInit?null:o._bodyInit)}))}w.polyfill=!0,self.fetch||(self.fetch=w,self.Headers=c,self.Request=m,self.Response=y)},function(e,t){class n{ready(){this.listening=!0}}"undefined"!=typeof window&&(window.BaseMixin=n),e.exports=n},function(e,t){class n{constructor(e){this.superclass=e}with(...e){return e.reduce((e,t)=>t(e),this.superclass)}}const i=e=>new n(e);"undefined"!=typeof window&&(window.Mixin=i),e.exports=i},function(e,t,n){const i=n(28),r=n(45),o=e=>(class extends e{static get properties(){return{listening:{type:Boolean,value:!0,observer:"_onListenUpdate"}}}set bind(e){this._bind=Object.assign(this.bind,e)}get bind(){return this._bind||(this._bind={}),this._bind}constructor(){super(),this.bind={},this._eb_handlers={},this._eb_handlersSet=!1,this._eb_unregisterOnDetach=!0,this._debounce_handlers={}}ready(){super.ready(),this._eb_init()}connectedCallback(){super.connectedCallback(),this._eb_init()}_eb_init(){if(!this._eb_handlersSet)for(var e in this._eb_handlersSet=!0,this._debugEventInterface&&console.log(this.nodeName,"ready and connected to DOM, attaching event listeners",this.bind),this.bind)this[this.bind[e]]?this._eb_init_fn(e):console.warn(`${this.nodeName} could not bind event ${e} to ${this.bind[e]}`)}_eb_init_fn(e){this[this.bind[e]]=this[this.bind[e]].bind(this),this._eb_handlers[e]=(...t)=>{this.listening?(this._debugEventInterface&&console.log(this.nodeName,"received event",e,", triggering function:",this.bind[e]),this[this.bind[e]].apply(this,t)):this._debugEventInterface&&console.warn(this.nodeName,"ignoring",e,"event, element not listening")},i.on(e,this._eb_handlers[e])}disconnectedCallback(){if(super.disconnectedCallback(),this._debugEventInterface&&console.log(this.nodeName,"disconnected from DOM, removing event listeners"),this._eb_unregisterOnDetach&&this._eb_handlersSet)for(var e in this._eb_handlersSet=!1,this.bind){if(!this[this.bind[e]])continue;let t=i.listenerCount(e);i.removeListener(e,this._eb_handlers[e]),i.listenerCount(e)!==t-1&&console.warn(this.nodeName,"On element detach, failed to remove event listener for: ",e),this._debugEventInterface&&console.log(this.nodeName,"removing event listener for:",e)}}EventBus(){return i}_injectModel(...e){e.forEach(e=>{"string"==typeof e?this._injectModelStr(e):this._bindModelObj(e)})}_injectModelStr(e){this[e]=r.getModel(e),this._bindModelObj(this[e])}_bindModelObj(e){e.events&&this._registerModelEvents(e.events),e.store&&e.store.events&&this._registerModelEvents(e.store.events)}_registerModelEvents(e){for(var t in e){var n=this._getMethodNameFromEvent(e[t]);this[n]?(this._debugEventInterface&&console.log(this.nodeName,"auto-bind:",n+" -> "+e[t],!0),this.bind[e[t]]=n):this._debugEventInterface&&console.log(this.nodeName,"auto-bind:",n+" -> "+e[t],!1)}}_getMethodNameFromEvent(e){return"_on"+e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}emit(e,t){i.emit(e,t)}fire(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}debounce(e,t,n){this._debounce_handlers[e]&&clearTimeout(this._debounce_handlers[e]),this._debounce_handlers[e]=setTimeout(()=>{delete this._debounce_handlers[e],t()},n)}_onListenUpdate(){}});"undefined"!=typeof window&&(window.EventInterface=o),e.exports=o},function(e,t,n){const i=n(28),r=n(45),o=e=>(class extends e{static get properties(){return{listening:{type:Boolean}}}set bind(e){this._bind=Object.assign(this.bind,e)}get bind(){return this._bind||(this._bind={}),this._bind}constructor(){super(),this.bind={},this._eb_handlers={},this._eb_handlersSet=!1,this._eb_unregisterOnDetach=!0,this._debounce_handlers={},this.listening=!0}connectedCallback(){super.connectedCallback(),this._eb_init()}_eb_init(){if(!this._eb_handlersSet)for(var e in this._eb_handlersSet=!0,this._debugLitCorkUtils&&console.log(this.nodeName,"ready and connected to DOM, attaching event listeners",this.bind),this.bind)this[this.bind[e]]?this._eb_init_fn(e):console.warn(`${this.nodeName} could not bind event ${e} to ${this.bind[e]}`)}_eb_init_fn(e){this[this.bind[e]]=this[this.bind[e]].bind(this),this._eb_handlers[e]=(...t)=>{this.listening?(this._debugLitCorkUtils&&console.log(this.nodeName,"received event",e,", triggering function:",this.bind[e]),this[this.bind[e]].apply(this,t)):this._debugLitCorkUtils&&console.warn(this.nodeName,"ignoring",e,"event, element not listening")},i.on(e,this._eb_handlers[e])}disconnectedCallback(){if(super.disconnectedCallback(),this._debugLitCorkUtils&&console.log(this.nodeName,"disconnected from DOM, removing event listeners"),this._eb_unregisterOnDetach&&this._eb_handlersSet)for(var e in this._eb_handlersSet=!1,this.bind){if(!this[this.bind[e]])continue;let t=i.listenerCount(e);i.removeListener(e,this._eb_handlers[e]),i.listenerCount(e)!==t-1&&console.warn(this.nodeName,"On element detach, failed to remove event listener for: ",e),this._debugLitCorkUtils&&console.log(this.nodeName,"removing event listener for:",e)}}EventBus(){return i}_injectModel(...e){e.forEach(e=>{"string"==typeof e?this._injectModelStr(e):this._bindModelObj(e)})}_injectModelStr(e){this[e]=r.getModel(e),this._bindModelObj(this[e])}_bindModelObj(e){e.events&&this._registerModelEvents(e.events),e.store&&e.store.events&&this._registerModelEvents(e.store.events)}_registerModelEvents(e){for(var t in e){var n=this._getMethodNameFromEvent(e[t]);this[n]?(this._debugLitCorkUtils&&console.log(this.nodeName,"auto-bind:",n+" -> "+e[t],!0),this.bind[e[t]]=n):this._debugLitCorkUtils&&console.log(this.nodeName,"auto-bind:",n+" -> "+e[t],!1)}}_getMethodNameFromEvent(e){return"_on"+e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}emit(e,t){i.emit(e,t)}fire(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}byId(e){return this.shadowRoot?this.shadowRoot.querySelector("#"+e):this.querySelector("#"+e)}$(e){return this.shadowRoot?this.shadowRoot.querySelector(e):this.querySelector(e)}$$(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):this.querySelector(e)}updated(e){e.has("listening")&&this._onListenUpdate()}_onListenUpdate(){}});"undefined"!=typeof window&&(window.LitCorkUtils=o),e.exports=o},function(e,t){e.exports=e=>(class extends e{_attachDom(e){if(window.ShadyDOM&&window.ShadyDOM.inUse)return super._attachDom(e);let t=e.querySelectorAll("style");for(var n=0;n<t.length;n++)t[n].parentNode.removeChild(t[n]),this._stylesInserted||(t[n].setAttribute("id",this.nodeName.toLowerCase()+"-styles"),document.head.appendChild(t[n]));return this.appendChild(e),e}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):super.querySelector(e)}querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):super.querySelectorAll(e)}})},function(e,t,n){e.exports={AuthModel:n(96),AppStateModel:n(36),RecordModel:n(58),CollectionModel:n(48),MediaModel:n(115),CitationModel:n(75),SeoModel:n(116),FiltersModel:n(118)}},function(e,t,n){var{BaseModel:i}=n(12),r=n(57),o=n(97);e.exports=new class extends i{constructor(){super(),this.store=r,this.service=o,this.register("AuthModel")}async getUser(){return await this.service.getUser()}login(){window.location="/auth/cas/login"}logout(){window.location="/auth/logout"}}},function(e,t,n){const{BaseService:i}=n(12),r=n(57);e.exports=new class extends i{constructor(){super(),this.store=r,this.initAuthRequested=!1}async getUser(){return this.initAuthRequested?this.store.data:(this.initAuthRequested=!0,this.request({url:"/auth/user",onLoad:e=>{e.body.loggedIn?this.store.setUser(e.body):this.store.notLoggedIn()},onError:e=>{throw e}}))}}},function(e,t,n){var{BaseModel:i}=n(12);e.exports=class extends i{constructor(){super(),this.register("AppStateModel")}setLocationElement(e){this.locationElement=e}setLocation(e){if(!this.locationElement)return console.warn("Call to setWindowLocation but no locationElement set");this.locationElement.setWindowLocation(e)}async get(){return this.store.data}set(e){return this.store.set(e),this.get()}}},function(e,t,n){const{BaseStore:i}=n(12);e.exports=class extends i{constructor(){super(),this.data={location:{}},this.events={APP_STATE_UPDATE:"app-state-update"}}set(e){this.stateChanged(this.data,e)&&(this.data=Object.assign({},this.data,e),this.emit(this.events.APP_STATE_UPDATE,this.data))}get(){return this.data}}},function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,l=s(e),c=1;c<arguments.length;c++){for(var h in n=Object(arguments[c]))r.call(n,h)&&(l[h]=n[h]);if(i){a=i(n);for(var d=0;d<a.length;d++)o.call(n,a[d])&&(l[a[d]]=n[a[d]])}}return l}},function(e,t,n){"use strict";var i=new RegExp("%[a-f0-9]{2}","gi"),r=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),i=e.slice(t);return Array.prototype.concat.call([],o(n),o(i))}function s(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(i),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(i);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=r.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var i=s(n[0]);i!==n[0]&&(t[n[0]]=i)}n=r.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),a=0;a<o.length;a++){var l=o[a];e=e.replace(new RegExp(l,"g"),t[l])}return e}(e)}}},function(e,t,n){const{AppStateStore:i}=n(46);e.exports=new class extends i{constructor(){super(),this.data.selectedRecord=null,this.data.selectedRecordMedia=null,this.data.selectedCollection=null,this.events.SELECTED_RECORD_UPDATE="selected-record-update",this.events.SELECTED_RECORD_MEDIA_UPDATE="selected-record-media-update",this.events.SELECTED_COLLECTION_UPDATE="selected-collection-update"}set(e){super.set(e)}setSelectedRecord(e){this.data.selectedRecord!==e&&(this.set({selectedRecord:e}),this.emit(this.events.SELECTED_RECORD_UPDATE,e))}getSelectedRecord(){return this.data.selectedRecord}setSelectedRecordMedia(e){this.data.selectedRecordMedia!==e&&(this.set({selectedRecordMedia:e}),this.emit(this.events.SELECTED_RECORD_MEDIA_UPDATE,e))}getSelectedRecordMedia(){return this.data.selectedRecordMedia}setSelectedCollection(e){this.data.selectedCollection!==e&&(this.set({selectedCollection:e}),this.emit(this.events.SELECTED_COLLECTION_UPDATE,e))}getSelectedCollection(){return this.data.selectedCollection}}},function(e,t,n){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var i=n(105),r=n(106),o=n(107);function s(){return l.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(e,t){if(s()<t)throw new RangeError("Invalid typed array length");return l.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=l.prototype:(null===e&&(e=new l(t)),e.length=t),e}function l(e,t,n){if(!(l.TYPED_ARRAY_SUPPORT||this instanceof l))return new l(e,t,n);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return d(this,e)}return c(this,e,t,n)}function c(e,t,n,i){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,i){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(i||0))throw new RangeError("'length' is out of bounds");t=void 0===n&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,n):new Uint8Array(t,n,i);l.TYPED_ARRAY_SUPPORT?(e=t).__proto__=l.prototype:e=p(e,t);return e}(e,t,n,i):"string"==typeof t?function(e,t,n){"string"==typeof n&&""!==n||(n="utf8");if(!l.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var i=0|f(t,n),r=(e=a(e,i)).write(t,n);r!==i&&(e=e.slice(0,r));return e}(e,t,n):function(e,t){if(l.isBuffer(t)){var n=0|u(t.length);return 0===(e=a(e,n)).length?e:(t.copy(e,0,0,n),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(i=t.length)!=i?a(e,0):p(e,t);if("Buffer"===t.type&&o(t.data))return p(e,t.data)}var i;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function h(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function d(e,t){if(h(t),e=a(e,t<0?0:0|u(t)),!l.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function p(e,t){var n=t.length<0?0:0|u(t.length);e=a(e,n);for(var i=0;i<n;i+=1)e[i]=255&t[i];return e}function u(e){if(e>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|e}function f(e,t){if(l.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return U(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return F(e).length;default:if(i)return U(e).length;t=(""+t).toLowerCase(),i=!0}}function g(e,t,n){var i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return L(this,t,n);case"utf8":case"utf-8":return x(this,t,n);case"ascii":return O(this,t,n);case"latin1":case"binary":return A(this,t,n);case"base64":return M(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return H(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function m(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function v(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=l.from(t,i)),l.isBuffer(t))return 0===t.length?-1:y(e,t,n,i,r);if("number"==typeof t)return t&=255,l.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):y(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function y(e,t,n,i,r){var o,s=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;s=2,a/=2,l/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(r){var h=-1;for(o=n;o<a;o++)if(c(e,o)===c(t,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===l)return h*s}else-1!==h&&(o-=o-h),h=-1}else for(n+l>a&&(n=a-l),o=n;o>=0;o--){for(var d=!0,p=0;p<l;p++)if(c(e,o+p)!==c(t,p)){d=!1;break}if(d)return o}return-1}function _(e,t,n,i){n=Number(n)||0;var r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");i>o/2&&(i=o/2);for(var s=0;s<i;++s){var a=parseInt(t.substr(2*s,2),16);if(isNaN(a))return s;e[n+s]=a}return s}function b(e,t,n,i){return B(U(t,e.length-n),e,n,i)}function w(e,t,n,i){return B(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function z(e,t,n,i){return w(e,t,n,i)}function C(e,t,n,i){return B(F(t),e,n,i)}function S(e,t,n,i){return B(function(e,t){for(var n,i,r,o=[],s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),i=n>>8,r=n%256,o.push(r),o.push(i);return o}(t,e.length-n),e,n,i)}function M(e,t,n){return 0===t&&n===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(t,n))}function x(e,t,n){n=Math.min(e.length,n);for(var i=[],r=t;r<n;){var o,s,a,l,c=e[r],h=null,d=c>239?4:c>223?3:c>191?2:1;if(r+d<=n)switch(d){case 1:c<128&&(h=c);break;case 2:128==(192&(o=e[r+1]))&&(l=(31&c)<<6|63&o)>127&&(h=l);break;case 3:o=e[r+1],s=e[r+2],128==(192&o)&&128==(192&s)&&(l=(15&c)<<12|(63&o)<<6|63&s)>2047&&(l<55296||l>57343)&&(h=l);break;case 4:o=e[r+1],s=e[r+2],a=e[r+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(l=(15&c)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&l<1114112&&(h=l)}null===h?(h=65533,d=1):h>65535&&(h-=65536,i.push(h>>>10&1023|55296),h=56320|1023&h),i.push(h),r+=d}return function(e){var t=e.length;if(t<=E)return String.fromCharCode.apply(String,e);var n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=E));return n}(i)}t.Buffer=l,t.SlowBuffer=function(e){+e!=e&&(e=0);return l.alloc(+e)},t.INSPECT_MAX_BYTES=50,l.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=s(),l.poolSize=8192,l._augment=function(e){return e.__proto__=l.prototype,e},l.from=function(e,t,n){return c(null,e,t,n)},l.TYPED_ARRAY_SUPPORT&&(l.prototype.__proto__=Uint8Array.prototype,l.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&l[Symbol.species]===l&&Object.defineProperty(l,Symbol.species,{value:null,configurable:!0})),l.alloc=function(e,t,n){return function(e,t,n,i){return h(t),t<=0?a(e,t):void 0!==n?"string"==typeof i?a(e,t).fill(n,i):a(e,t).fill(n):a(e,t)}(null,e,t,n)},l.allocUnsafe=function(e){return d(null,e)},l.allocUnsafeSlow=function(e){return d(null,e)},l.isBuffer=function(e){return!(null==e||!e._isBuffer)},l.compare=function(e,t){if(!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,i=t.length,r=0,o=Math.min(n,i);r<o;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!o(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var i=l.allocUnsafe(t),r=0;for(n=0;n<e.length;++n){var s=e[n];if(!l.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(i,r),r+=s.length}return i},l.byteLength=f,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)m(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},l.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?x(this,0,e):g.apply(this,arguments)},l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){var e="",n=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(e+=" ... ")),"<Buffer "+e+">"},l.prototype.compare=function(e,t,n,i,r){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;for(var o=(r>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0),a=Math.min(o,s),c=this.slice(i,r),h=e.slice(t,n),d=0;d<a;++d)if(c[d]!==h[d]){o=c[d],s=h[d];break}return o<s?-1:s<o?1:0},l.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},l.prototype.indexOf=function(e,t,n){return v(this,e,t,n,!0)},l.prototype.lastIndexOf=function(e,t,n){return v(this,e,t,n,!1)},l.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(n)?(n|=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}var r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var o=!1;;)switch(i){case"hex":return _(this,e,t,n);case"utf8":case"utf-8":return b(this,e,t,n);case"ascii":return w(this,e,t,n);case"latin1":case"binary":return z(this,e,t,n);case"base64":return C(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var E=4096;function O(e,t,n){var i="";n=Math.min(e.length,n);for(var r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function A(e,t,n){var i="";n=Math.min(e.length,n);for(var r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function L(e,t,n){var i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);for(var r="",o=t;o<n;++o)r+=N(e[o]);return r}function H(e,t,n){for(var i=e.slice(t,n),r="",o=0;o<i.length;o+=2)r+=String.fromCharCode(i[o]+256*i[o+1]);return r}function P(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function T(e,t,n,i,r,o){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<o)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function R(e,t,n,i){t<0&&(t=65535+t+1);for(var r=0,o=Math.min(e.length-n,2);r<o;++r)e[n+r]=(t&255<<8*(i?r:1-r))>>>8*(i?r:1-r)}function V(e,t,n,i){t<0&&(t=4294967295+t+1);for(var r=0,o=Math.min(e.length-n,4);r<o;++r)e[n+r]=t>>>8*(i?r:3-r)&255}function k(e,t,n,i,r,o){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function I(e,t,n,i,o){return o||k(e,0,n,4),r.write(e,t,n,i,23,4),n+4}function j(e,t,n,i,o){return o||k(e,0,n,8),r.write(e,t,n,i,52,8),n+8}l.prototype.slice=function(e,t){var n,i=this.length;if((e=~~e)<0?(e+=i)<0&&(e=0):e>i&&(e=i),(t=void 0===t?i:~~t)<0?(t+=i)<0&&(t=0):t>i&&(t=i),t<e&&(t=e),l.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=l.prototype;else{var r=t-e;n=new l(r,void 0);for(var o=0;o<r;++o)n[o]=this[o+e]}return n},l.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||P(e,t,this.length);for(var i=this[e],r=1,o=0;++o<t&&(r*=256);)i+=this[e+o]*r;return i},l.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||P(e,t,this.length);for(var i=this[e+--t],r=1;t>0&&(r*=256);)i+=this[e+--t]*r;return i},l.prototype.readUInt8=function(e,t){return t||P(e,1,this.length),this[e]},l.prototype.readUInt16LE=function(e,t){return t||P(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUInt16BE=function(e,t){return t||P(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUInt32LE=function(e,t){return t||P(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUInt32BE=function(e,t){return t||P(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||P(e,t,this.length);for(var i=this[e],r=1,o=0;++o<t&&(r*=256);)i+=this[e+o]*r;return i>=(r*=128)&&(i-=Math.pow(2,8*t)),i},l.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||P(e,t,this.length);for(var i=t,r=1,o=this[e+--i];i>0&&(r*=256);)o+=this[e+--i]*r;return o>=(r*=128)&&(o-=Math.pow(2,8*t)),o},l.prototype.readInt8=function(e,t){return t||P(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){t||P(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},l.prototype.readInt16BE=function(e,t){t||P(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},l.prototype.readInt32LE=function(e,t){return t||P(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return t||P(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readFloatLE=function(e,t){return t||P(e,4,this.length),r.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return t||P(e,4,this.length),r.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return t||P(e,8,this.length),r.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return t||P(e,8,this.length),r.read(this,e,!1,52,8)},l.prototype.writeUIntLE=function(e,t,n,i){(e=+e,t|=0,n|=0,i)||T(this,e,t,n,Math.pow(2,8*n)-1,0);var r=1,o=0;for(this[t]=255&e;++o<n&&(r*=256);)this[t+o]=e/r&255;return t+n},l.prototype.writeUIntBE=function(e,t,n,i){(e=+e,t|=0,n|=0,i)||T(this,e,t,n,Math.pow(2,8*n)-1,0);var r=n-1,o=1;for(this[t+r]=255&e;--r>=0&&(o*=256);)this[t+r]=e/o&255;return t+n},l.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||T(this,e,t,1,255,0),l.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},l.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||T(this,e,t,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):R(this,e,t,!0),t+2},l.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||T(this,e,t,2,65535,0),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):R(this,e,t,!1),t+2},l.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||T(this,e,t,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):V(this,e,t,!0),t+4},l.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||T(this,e,t,4,4294967295,0),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):V(this,e,t,!1),t+4},l.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t|=0,!i){var r=Math.pow(2,8*n-1);T(this,e,t,n,r-1,-r)}var o=0,s=1,a=0;for(this[t]=255&e;++o<n&&(s*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},l.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t|=0,!i){var r=Math.pow(2,8*n-1);T(this,e,t,n,r-1,-r)}var o=n-1,s=1,a=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},l.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||T(this,e,t,1,127,-128),l.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||T(this,e,t,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):R(this,e,t,!0),t+2},l.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||T(this,e,t,2,32767,-32768),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):R(this,e,t,!1),t+2},l.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||T(this,e,t,4,2147483647,-2147483648),l.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):V(this,e,t,!0),t+4},l.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||T(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),l.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):V(this,e,t,!1),t+4},l.prototype.writeFloatLE=function(e,t,n){return I(this,e,t,!0,n)},l.prototype.writeFloatBE=function(e,t,n){return I(this,e,t,!1,n)},l.prototype.writeDoubleLE=function(e,t,n){return j(this,e,t,!0,n)},l.prototype.writeDoubleBE=function(e,t,n){return j(this,e,t,!1,n)},l.prototype.copy=function(e,t,n,i){if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);var r,o=i-n;if(this===e&&n<t&&t<i)for(r=o-1;r>=0;--r)e[r+t]=this[r+n];else if(o<1e3||!l.TYPED_ARRAY_SUPPORT)for(r=0;r<o;++r)e[r+t]=this[r+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t);return o},l.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),1===e.length){var r=e.charCodeAt(0);r<256&&(e=r)}if(void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!l.isEncoding(i))throw new TypeError("Unknown encoding: "+i)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{var s=l.isBuffer(e)?e:U(new l(e,i).toString()),a=s.length;for(o=0;o<n-t;++o)this[o+t]=s[o%a]}return this};var D=/[^+\/0-9A-Za-z-_]/g;function N(e){return e<16?"0"+e.toString(16):e.toString(16)}function U(e,t){var n;t=t||1/0;for(var i=e.length,r=null,o=[],s=0;s<i;++s){if((n=e.charCodeAt(s))>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(t-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function F(e){return i.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(D,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function B(e,t,n,i){for(var r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}}).call(this,n(74))},function(e,t,n){"use strict";t.byteLength=function(e){var t=c(e),n=t[0],i=t[1];return 3*(n+i)/4-i},t.toByteArray=function(e){for(var t,n=c(e),i=n[0],s=n[1],a=new o(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),l=0,h=s>0?i-4:i,d=0;d<h;d+=4)t=r[e.charCodeAt(d)]<<18|r[e.charCodeAt(d+1)]<<12|r[e.charCodeAt(d+2)]<<6|r[e.charCodeAt(d+3)],a[l++]=t>>16&255,a[l++]=t>>8&255,a[l++]=255&t;2===s&&(t=r[e.charCodeAt(d)]<<2|r[e.charCodeAt(d+1)]>>4,a[l++]=255&t);1===s&&(t=r[e.charCodeAt(d)]<<10|r[e.charCodeAt(d+1)]<<4|r[e.charCodeAt(d+2)]>>2,a[l++]=t>>8&255,a[l++]=255&t);return a},t.fromByteArray=function(e){for(var t,n=e.length,r=n%3,o=[],s=0,a=n-r;s<a;s+=16383)o.push(h(e,s,s+16383>a?a:s+16383));1===r?(t=e[n-1],o.push(i[t>>2]+i[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],o.push(i[t>>10]+i[t>>4&63]+i[t<<2&63]+"="));return o.join("")};for(var i=[],r=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,l=s.length;a<l;++a)i[a]=s[a],r[s.charCodeAt(a)]=a;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function h(e,t,n){for(var r,o,s=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(i[(o=r)>>18&63]+i[o>>12&63]+i[o>>6&63]+i[63&o]);return s.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,n,i,r){var o,s,a=8*r-i-1,l=(1<<a)-1,c=l>>1,h=-7,d=n?r-1:0,p=n?-1:1,u=e[t+d];for(d+=p,o=u&(1<<-h)-1,u>>=-h,h+=a;h>0;o=256*o+e[t+d],d+=p,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=i;h>0;s=256*s+e[t+d],d+=p,h-=8);if(0===o)o=1-c;else{if(o===l)return s?NaN:1/0*(u?-1:1);s+=Math.pow(2,i),o-=c}return(u?-1:1)*s*Math.pow(2,o-i)},t.write=function(e,t,n,i,r,o){var s,a,l,c=8*o-r-1,h=(1<<c)-1,d=h>>1,p=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,u=i?0:o-1,f=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=h):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),(t+=s+d>=1?p/l:p*Math.pow(2,1-d))*l>=2&&(s++,l/=2),s+d>=h?(a=0,s=h):s+d>=1?(a=(t*l-1)*Math.pow(2,r),s+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,r),s=0));r>=8;e[n+u]=255&a,u+=f,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;e[n+u]=255&s,u+=f,s/=256,c-=8);e[n+u-f]|=128*g}},function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},function(e,t,n){const{BaseModel:i}=n(12),r=n(20);e.exports=class extends i{constructor(){for(var e in super(),this.defaultTextFields=["title","description"],this.facets={},r.elasticSearch.facets)this.facets[e]={type:r.elasticSearch.facets[e].type}}emptySearchDocument(){return{text:"",filters:{},sort:null,limit:10,offset:0,facets:this.facets}}urlToSearchDocument(e){if(!Array.isArray(e))throw new Error("UrlParts should be an array");let t=this.emptySearchDocument(),n=0;for(;e.length>0;){let i=decodeURIComponent(e.splice(0,1)[0]);switch(n){case 0:t.text=i;break;case 1:t.filters=i?this._parseUrlFilters(i):{};break;case 2:t.sort=i?JSON.parse(i):null;break;case 3:t.limit=i?parseInt(i):10;break;case 4:t.offset=i?parseInt(i):0}n++}return t}_parseUrlFilters(e=""){let t={};return JSON.parse(e).forEach(e=>{t[e[0]]=this._setUrlFilterOp({type:this._parseUrlFilterType(e[1]),value:this._parseUrlFilterValue(e)},e[1])}),t}_setUrlFilterOp(e,t){return"range"!==t&&(e.op=t),e}_parseUrlFilterType(e){return"or"===e||"and"===e?"keyword":e}_parseUrlFilterValue(e){return"range"===e[1]?e[2]:e.splice(2,e.length)}searchDocumentToUrl(e,t=!1){let n=[];if(e.filters)for(var i in e.filters){let t=e.filters[i],r=[i,t.op||t.type];Array.isArray(t.value)?r=r.concat(t.value):r.push(t.value),n.push(r)}return!t||e.text||e.sort||e.offset||1!==n.length||10!==e.limit||3!==n[0].length||"isPartOf.@id"!==n[0][0]||"or"!==n[0][1]||!n[0][2].match(/^\/collection\//)?[encodeURIComponent(e.text),encodeURIComponent(JSON.stringify(n)),encodeURIComponent(e.sort?JSON.stringify(e.sort):""),e.limit||"",e.offset||""].join("/"):n[0][2]}setSort(e,t,n){return t?"object"==typeof t?e.sort=key:n&&(e.sort={[t]:n}):e.sort=null,e.offset=0,e}setPaging(e,t,n){return void 0!==t&&(e.offset=t),void 0!==n&&(e.limit=n),e}setTextFilter(e,t){return e.text=t,e}clearFilters(e){return e.text="",e.filters={},e}appendKeywordFilter(e,t,n,i="or"){return e.filters[t]?e.filters[t].value.push(n):e.filters[t]={type:"keyword",op:i,value:[n]},e}setKeywordFilter(e,t,n,i="or"){return e.filters[t]={type:"keyword",op:i,value:[n]},e}async removeKeywordFilter(e,t,n){if(!e.filters[t])return e;if(void 0===n)delete e.filters[t];else{let i=e.filters[t],r=i.value.indexOf(n);if(-1===r)return e;i.value.splice(r,1),0===i.value.length&&delete e.filters[t]}return e}appendRangeFilter(e,t,n){return e.filters[t]={type:"range",value:n},e}removeRangeFilter(e,t){return e.filters[t]?(delete e.filters[t],e):e}}},function(e,t,n){const{BaseService:i}=n(12),r=n(47),o=n(110),s=n(20),a=n(113);e.exports=new class extends i{constructor(){super(),this.store=r,this.baseUrl="/api/records"}setModel(e){this.model=e}get(e){return this.request({url:`${this.baseUrl}${e}?root=true`,checkCached:()=>this.store.getRecord(e),onLoading:t=>this.store.setRecordLoading(e,t),onLoad:t=>this.store.setRecordLoaded(e,this.model.createMediaObject(a(null,t.body))),onError:t=>this.store.setRecordError(e,t)})}search(e={},t=!0){e.textFields||(e.textFields=s.elasticSearch.textFields.record);let n=this.store.data.search.searchDocument||{};return o(n,e)?this.store.getSearch():this.request({url:`${this.baseUrl}/search${t?"?debug=true":""}`,fetchOptions:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},onLoading:t=>this.store.setSearchLoading(e,t),onLoad:t=>this.store.setSearchLoaded(e,t.body),onError:t=>this.store.setSearchError(e,t)})}typeaheadSearch(e={},t={}){e.textFields||(e.textFields=s.elasticSearch.textFields.record);let n={};return t.debug&&(n.debug=!0),t.allRecords&&(n.all=!0),new Promise((t,i)=>{this.request({url:`${this.baseUrl}/search`,fetchOptions:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},qs:n,onLoad:n=>t({searchDocument:e,payload:n.body,state:"loaded"}),onError:t=>i({searchDocument:e,error:t,state:"error"})})})}defaultSearch(e,t={}){return this.request({url:`${this.baseUrl}/search?debug=true`,fetchOptions:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},onLoading:n=>this.store.setDefaultSearchLoading(e,t,n),onLoad:n=>this.store.setDefaultSearchLoaded(e,t,n.body),onError:n=>this.store.setDefaultSearchError(e,t,n)})}}},function(e,t,n){var i=Array.prototype.slice,r=n(111),o=n(112),s=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:function(e,t,n){var c,h;if(a(e)||a(t))return!1;if(e.prototype!==t.prototype)return!1;if(o(e))return!!o(t)&&(e=i.call(e),t=i.call(t),s(e,t,n));if(l(e)){if(!l(t))return!1;if(e.length!==t.length)return!1;for(c=0;c<e.length;c++)if(e[c]!==t[c])return!1;return!0}try{var d=r(e),p=r(t)}catch(e){return!1}if(d.length!=p.length)return!1;for(d.sort(),p.sort(),c=d.length-1;c>=0;c--)if(d[c]!=p[c])return!1;for(c=d.length-1;c>=0;c--)if(h=d[c],!s(e[h],t[h],n))return!1;return typeof e==typeof t}(e,t,n))};function a(e){return null==e}function l(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}},function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}(e.exports="function"==typeof Object.keys?Object.keys:n).shim=n},function(e,t){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function i(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}(t=e.exports=n?i:r).supported=i,t.unsupported=r},function(e,t){const n=["hasPart","associatedMedia","caption","transcript"];e.exports=(e,t,i)=>{i||(i=n);let r={};if(t.forEach(t=>{r[t["@id"]]=t,!e&&t.isRootRecord&&(e=t["@id"])}),t=r,!e)throw new Error("No id provided and no root record found in graph");let o=t[e];return o?(function e(t,n,i){let r;for(let o of i)if(r=t[o],r){Array.isArray(r)||(r=[r]);for(let t=0;t<r.length;t++){let o=r[t];o instanceof Object&&(o["@id"]&&1===Object.keys(o).length&&n[o["@id"]]&&(r[t]=n[o["@id"]],e(r[t],n,i)))}1===r.length?t[o]=r[0]:t[o]=r}}(o,t,i),o):{}}},function(e,t,n){const{BaseService:i}=n(12),r=n(59),o=n(20);e.exports=new class extends i{constructor(){super(),this.store=r,this.baseUrl="/api/collections"}async overview(){return this.request({url:`${this.baseUrl}/all`,checkCached:()=>this.store.data.overview,onLoading:e=>this.store.setCollectionOverviewLoading(e),onLoad:e=>this.store.setCollectionOverviewLoaded(e.body),onError:e=>this.store.setCollectionOverviewError(e)})}async search(e={}){return e.textFields=o.elasticSearch.textFields.collection,this.request({url:this.baseUrl+"/search?debug=true",fetchOptions:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},onLoading:t=>this.store.setSearchLoading(e,t),onLoad:t=>this.store.setSearchLoaded(e,t.body),onError:t=>this.store.setSearchError(e,t)})}}},function(e,t,n){const{BaseModel:i}=n(12),r=n(20),o=(n(51),"http://digital.ucdavis.edu/schema#ImageList"),s="http://digital.ucdavis.edu/schema#ImageList360";e.exports=new class extends i{constructor(){super(),this.TYPES={IMAGE_LIST:o,IMAGE_LIST_360:s},this.register("MediaModel")}getImgPath(e){return e.image?e.image.url:e.workExample?Array.isArray(e.workExample)?e.workExample[0]["@id"]:e.workExample["@id"]:e.fileFormat&&e.fileFormat.match(/^image/i)?e["@id"]:e.associatedMedia?Array.isArray(e.associatedMedia)?e.associatedMedia[0]["@id"]:e.associatedMedia["@id"]:""}getImgUrl(e,t="",n="",i={}){let o;null===t&&(t=""),null===n&&(n=""),o=t||n?t+","+n:"full";let s=i.region||"full",a=i.quality||"default";return 0!==(e=`${e}/svc:iiif/${s}/${o}/${i.rotation||0}/${a}.${i.format||"jpg"}`).indexOf(r.fcrepoBasePath)&&(e=r.fcrepoBasePath+e),e}get360Media(e){let t=this.getImageMediaList(e,s)||[];return t.length&&(e._has360ImageList=!0),t}getImageMediaList(e,t){if(!e||!e._imageList)return e;if(e._imageList&&e._imageList.length)return e._imageList;if(!e.associatedMedia)return[];for(var n=0;n<e.associatedMedia.length;n++){let i=e.associatedMedia[n]["@type"];if(i&&i.indexOf(t||o)>-1)return e._imageList=e.associatedMedia[n].hasPart||[],e._imageList.forEach(e=>e.position=parseInt(e.position)),e._imageList.sort((e,t)=>e.position>t.position?1:e.position<t.position?-1:1),e._imageList}let i=[];for(n=0;n<e.associatedMedia.length;n++){let t=e.associatedMedia[n].fileFormat;t&&t.match(/^image/i)&&i.push(e.associatedMedia[n])}return e._imageList=i,i}}},function(e,t,n){const{BaseModel:i}=n(12),r=n(36),o=n(48),s=n(20),a=n(43),l=n(60),c=n(117);e.exports=new class extends i{constructor(){super(),"undefined"!=typeof window&&(this.ele=document.querySelector("#seo-jsonld"),this.EventBus.on(r.store.events.APP_STATE_UPDATE,e=>this._onAppStateUpdate(e)),this.EventBus.on(r.store.events.SELECTED_RECORD_UPDATE,e=>this._onAppStateUpdate(e)),this.EventBus.on(o.store.events.SELECTED_COLLECTION_UPDATE,e=>this._onAppStateUpdate(e)))}async _onAppStateUpdate(){let e=r.store.data,t="record"===e.location.page,n=!(!e.location.pathname.match(/^\/search\//)||!o.getSelectedCollection());if(n||2!==e.location.path.length||"collection"!==e.location.path[0]||(n="/"+e.location.path.join("/")),e.selectedRecord&&t)this._setJsonLd(e.selectedRecord),this._setMetaTags({title:e.selectedRecord.name+" - "+s.metadata.title,description:e.selectedRecord.description||"",keywords:(e.selectedRecord.abouts||[]).join(", ")});else if(n){let e=o.getSelectedCollection();e||"string"!=typeof n||(e=await o.get(n)),this._setCollectionJsonLd(e),this._setMetaTags({title:e.name+" - "+s.metadata.title,description:e.description||"",keywords:(e.abouts||[]).join(", ")})}else t||(this._clearJsonLd(),this._setMetaTags({title:s.metadata.title,description:s.metadata.description,keywords:""}))}_setMetaTags(e){document.title=e.title||"",this._setMetaTag("description",e.description||""),this._setMetaTag("keywords",e.keywords||"")}_setMetaTag(e,t){let n=document.head.querySelector(`meta[name=${e}]`);n&&n.setAttribute("content",t)}_setJsonLd(e){let t=a(e);for(var n in t)"_"===n[0]&&delete t[n];t=l(t),this.ele.innerHTML=JSON.stringify(t,"  ","  ")}_setCollectionJsonLd(e){let t=a(e);for(var n in t)"_"===n[0]&&delete t[n];t=c(t,window.location.protocol+"//"+window.location.host),this.ele.innerHTML=JSON.stringify(t,"  ","  ")}_clearJsonLd(){this.ele.innerHTML=""}}},function(e,t,n){const i=n(60),r="http://schema.org/Dataset";e.exports=(e,t="https://digital.ucdavis.edu")=>{let n=(e=i(e))["@type"];return n&&-1===n.indexOf(r)&&n.push(r),e.hasPart&&delete e.hasPart,e.url=t+e["@id"],e.provider={"@type":"Organization",email:"library@ucdavis.edu",url:t,name:"University of California, Davis, Library",description:"UC Davis Library, Digital Collections",image:t+"/images/ucd-lib-logo-rgb.png"},e.publisher||(e.publisher={"@type":"Organization",name:"University of California, Davis, Library",description:"UC Davis Library, Digital Collections",image:t+"/images/ucd-lib-logo-rgb.png"}),e.includedInDataCatalog={"@type":"DataCatalog",name:"UC Davis Library, Digital Collections"},e.distribution={"@type":"DataDownload",name:e["@id"].replace(/\/collection\//,""),contentUrl:t+"/fcrepo/rest"+e["@id"],encodingFormat:"text/html"},e.creator&&delete e.creator,e}},function(e,t,n){const{BaseModel:i}=n(12),r=n(58),o=n(48),s=n(20);e.exports=new class extends i{constructor(){super(),this.updateTimer=-1,this.selectedCollection=null,this.EventBus.on(r.store.events.RECORD_SEARCH_UPDATE,e=>this._update()),this.EventBus.on(o.store.events.SELECTED_COLLECTION_UPDATE,e=>{this.selectedCollection=e?e["@id"]:"",this._update()}),this.events={FILTER_BUCKETS_UPDATE:"filter-buckets-update"},this.register("FiltersModel")}_update(){-1!==this.updateTimer&&clearTimeout(this.updateTimer),this.updateTimer=setTimeout(()=>{for(var e in this.updateTimer=-1,s.elasticSearch.facets)this._updateFilter(e)},100)}_updateFilter(e){"loaded"===r.store.data.search.state&&setTimeout(()=>this._updateFilterAsync(e),0)}async _updateFilterAsync(e){let t=r.store.data.search;if("loaded"!==t.state)return;var n=[];if(t.searchDocument.filters[e]&&(n=t.searchDocument.filters[e].value||[]),!n)return this._fireUpdate({filter:e,buckets:[]});let i=t.payload.aggregations.facets[e]||{},o=this.selectedCollection,a=await r.defaultSearch(this.selectedCollection);if(o!==this.selectedCollection)return;let l=a.payload.aggregations.facets[e]||{},c=s.elasticSearch.facets[e].ignore;c&&c.length&&c.forEach(e=>{l[e]&&delete l[e]});let h=[];for(var d in l){let e={key:d,sortKey:d.toLowerCase().replace(/\W/g,""),doc_count:i[d]||0};n.indexOf(d)>-1?e.active=!0:e.active=!1,e.empty=!e.doc_count,e.disabled=!e.active&&e.empty,h.push(e)}h.sort((e,t)=>e.active&&0===e.doc_count?-1:t.active&&0===t.doc_count?1:e.doc_count<t.doc_count?1:e.doc_count>t.doc_count?-1:e.sortKey>t.sortKey?1:e.sortKey<t.sortKey?-1:0),this._fireUpdate({filter:e,buckets:h})}_fireUpdate(e){this.emit(this.events.FILTER_BUCKETS_UPDATE,e)}}},function(e,t){var n,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var l,c=[],h=!1,d=-1;function p(){h&&l&&(h=!1,l.length?c=l.concat(c):d=-1,c.length&&u())}function u(){if(!h){var e=a(p);h=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,h=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||h||a(u)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){"use strict";n.r(t);var i=n(4),r=(n(52),n(7)),o=n(5);
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
const s=o.a`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;s.setAttribute("style","display: none;"),document.head.appendChild(s.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const a=o.a`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;a.setAttribute("style","display: none;"),document.head.appendChild(a.content);var l=n(25),c=n(42),h=n(53);
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
const d={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){l.b._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){l.b._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},p=[l.a,c.a,h.a,d];var u=n(9);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const f=r.b`
  <style include="paper-material-styles">
    /* Need to specify the same specificity as the styles imported from paper-material. */
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;

      @apply --paper-font-common-base;
      @apply --paper-button;
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }

    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;

      @apply --paper-button-disabled;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }


    :host([animated]) {
      @apply --shadow-transition;
    }

    paper-ripple {
      color: var(--paper-button-ink-color);
    }
  </style>

  <slot></slot>`;f.setAttribute("strip-whitespace",""),Object(u.a)({_template:f,is:"paper-button",behaviors:[p],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?d._calculateElevation.apply(this):this._setElevation(0)}});n(71),n(72),n(41),n(34);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const g=o.a`<iron-iconset-svg name="social" size="24">
<svg><defs>
<g id="cake"><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"></path></g>
<g id="domain"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></g>
<g id="group"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
<g id="group-add"><path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"></path></g>
<g id="location-city"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path></g>
<g id="mood"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="mood-bad"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path></g>
<g id="notifications"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></g>
<g id="notifications-active"><path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path></g>
<g id="notifications-none"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path></g>
<g id="notifications-off"><path d="M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"></path></g>
<g id="notifications-paused"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z"></path></g>
<g id="pages"><path d="M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"></path></g>
<g id="party-mode"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z"></path></g>
<g id="people"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
<g id="people-outline"><path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></g>
<g id="person"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
<g id="person-add"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
<g id="person-outline"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="plus-one"><path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"></path></g>
<g id="poll"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="public"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></g>
<g id="school"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></g>
<g id="sentiment-dissatisfied"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"></path></g>
<g id="sentiment-neutral"><path d="M9 14h6v1.5H9z"></path><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="sentiment-satisfied"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z"></path></g>
<g id="sentiment-very-dissatisfied"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path></g>
<g id="sentiment-very-satisfied"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="share"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></g>
<g id="whatshot"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(g.content);n(79),n(12),n(70);var m=n(61),v=n.n(m);let y=document.createElement("div");y.style.display="none",y.innerHTML=v.a,document.head.appendChild(y);var _=n(62),b=n.n(_);const w=document.createElement("template");w.innerHTML=b.a,document.head.appendChild(w.content);n(95);var z=n(64),C=n.n(z),S=n(26),M=n.n(S);class x extends(Mixin(i.a).with(EventInterface,M.a)){static get template(){return i.b`<iron-icon icon="fin-icons:account" style="width: 40px; height:40px"></iron-icon>`}constructor(){super(),this.active=!0}_onAuthUpdate(e){"loggedIn"===e.state?this.style.display="block":this.style.display="none"}}customElements.define("app-auth-header",x);n(81);var E=n(33),O=n.n(E),A=n(32),L=n.n(A),H=n(24),P=n.n(H);class T extends(Mixin(i.a).with(EventInterface,O.a,L.a,P.a)){static get properties(){return{selectedCollection:{type:String,value:""}}}static get template(){let e=document.createElement("template");return e.innerHTML=C.a,e}constructor(){super(),this.active=!0}async ready(){super.ready(),this._setCollections(await this.CollectionModel.overview())}_setCollections(e){let t=e.payload,n={};t.forEach(e=>{n[e["@id"]]=e.name}),this.$.searchInput.browse=n}_onBrowse(e){let t=e.detail;if(this.$.searchInput.browseValue="Browse",!t||"Browse"===t)return this.RecordModel.setSearchLocation(this._getEmptySearchDocument());this._setWindowLocation(t)}_onSearch(e){let t=this._getCurrentSearchDocument();this._setPaging(t,0),this._setTextFilter(t,e.detail),this.RecordModel.setSearchLocation(t)}_onRecordSearchUpdate(e){try{this.$.searchInput.value=e.searchDocument.text||""}catch(e){this.$.searchInput.value=""}}_onSelectedCollectionUpdate(e){this.selectedCollection=e}}customElements.define("app-search-header",T);var R=n(66),V=n.n(R);n(82);class k extends(Mixin(i.a).with(EventInterface)){static get properties(){return{collection:{type:Object,value:null},record:{type:Object,value:null},name:{type:String,value:""}}}static get template(){let e=document.createElement("template");return e.innerHTML=V.a,e}constructor(){super(),this.active=!0,this.lastSearchForCollection={},this._injectModel("AppStateModel","CollectionModel","RecordModel")}async ready(){super.ready(),this.$.layout.style.width=window.innerWidth-55+"px",window.addEventListener("resize",()=>{this.$.layout.style.width=window.innerWidth-55+"px"}),this._onAppStateUpdate(await this.AppStateModel.get())}async _onAppStateUpdate(e){e.lastLocation&&"search"===e.lastLocation.page?this.lastSearch=e.lastLocation.pathname:this.lastSearch=null,this.record=null,this.collection=null,"search"===e.location.page&&e.searchCollection?(this.searchCollection=e.searchCollection,this.lastSearchForCollection[e.searchCollection["@id"]]=e.location.pathname):"search"===e.location.page&&(this.searchCollection=null),"record"===e.location.page&&(this.currentRecordId=e.location.pathname,this.record=await this.RecordModel.get(this.currentRecordId),this.record=this.record.payload,this.record.collectionId?this.collection=await this.CollectionModel.get(this.record.collectionId):this.collection=null)}_onSearchClicked(e){"keyup"===e.type&&13!==e.which||this.AppStateModel.setLocation(this.lastSearch||"/search")}_onCollectionClicked(e){if("keyup"===e.type&&13!==e.which)return;let t=this.lastSearch||"/search";this.searchCollection&&this.lastSearchForCollection[this.searchCollection["@id"]]?t=this.lastSearchForCollection[this.searchCollection["@id"]]:this.collection&&this.collection["@id"]&&(t=this.collection["@id"]),this.AppStateModel.setLocation(t)}}customElements.define("app-search-breadcrumb",k);var I=n(67),j=n.n(I);class D extends(Mixin(i.a).with(EventInterface,M.a)){static get template(){let e=document.createElement("template");return e.innerHTML=j.a,e}static get properties(){return{loggedIn:{type:Boolean,value:!1},user:{type:Object,value:()=>{}}}}constructor(){super(),this.active=!0}_onAuthUpdate(e){"loggedIn"===e.state?(this.user=e.user,this.loggedIn=!0):this.loggedIn=!1}}customElements.define("app-auth-footer",D);var N=n(68),U=n.n(N);class F extends(Mixin(i.a).with(EventInterface,P.a)){static get template(){let e=document.createElement("template");return e.innerHTML=U.a,e}static get properties(){return{}}constructor(){super(),this.active=!0}}customElements.define("app-footer",F);n(83);var B=n(69),q=n.n(B);n.d(t,"FinApp",(function(){return $}));class $ extends(Mixin(i.a).with(EventInterface,P.a,M.a,L.a,O.a)){static get template(){return Object(i.b)([q.a])}static get properties(){return{page:{type:String,value:"loading"},appRoutes:{type:Array,value:()=>APP_CONFIG.appRoutes},showSearchHeader:{type:Boolean,value:!1},showBreadcrumb:{type:Boolean,value:!1},drawerOpen:{type:Boolean,value:!1}}}constructor(){super(),this.active=!0,this.SEARCH_HEADER_PAGES=["about","record","search"],this.BREADCRUMB_PAGES=["record","search"],this.loadedPages={}}ready(){let e=document.querySelector("#loading");e&&document.body.removeChild(e),super.ready(),this.AuthModel.store.setUser(APP_CONFIG.user)}async _onAppStateUpdate(e){if(this.drawerOpen=!!e.filtersDrawerOpen,e.location.page===this.page)return;this.showBreadcrumb=this.BREADCRUMB_PAGES.includes(e.location.page),this.showSearchHeader=this.SEARCH_HEADER_PAGES.includes(e.location.page),this.appState=e,window.scrollTo(0,0);let t=e.location.page;this.loadedPages[t]||(this.page="loading",this.loadedPages[t]=this.loadPage(t)),await this.loadedPages[t],this.page=t}loadPage(e){return"home"===e?n.e(5).then(n.bind(null,204)):"search"===e?Promise.all([n.e(0),n.e(10),n.e(7)]).then(n.bind(null,210)):"record"===e?Promise.all([n.e(0),n.e(9),n.e(6)]).then(n.bind(null,209)):"about"===e?n.e(4).then(n.bind(null,205)):void 0}_toggleDrawer(){this.AppStateModel.set({filtersDrawerOpen:!this.drawerOpen})}}customElements.define("fin-app",$)},function(e,t,n){"use strict";n.r(t);var i=n(4),r=(n(7),n(9)),o=n(2);
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
Object(r.a)({is:"iron-location",_template:null,properties:{path:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.pathname)}},query:{type:String,notify:!0,value:function(){return window.location.search.slice(1)}},hash:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},dwellTime:{type:Number,value:2e3},urlSpaceRegex:{type:String,value:""},encodeSpaceAsPlusInQuery:{type:Boolean,value:!1},_urlSpaceRegExp:{computed:"_makeRegExp(urlSpaceRegex)"},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["_updateUrl(path, query, hash)"],created:function(){this.__location=window.location},attached:function(){this.listen(window,"hashchange","_hashChanged"),this.listen(window,"location-changed","_urlChanged"),this.listen(window,"popstate","_urlChanged"),this.listen(document.body,"click","_globalOnClick"),this._lastChangedAt=window.performance.now()-(this.dwellTime-200),this._initialized=!0,this._urlChanged()},detached:function(){this.unlisten(window,"hashchange","_hashChanged"),this.unlisten(window,"location-changed","_urlChanged"),this.unlisten(window,"popstate","_urlChanged"),this.unlisten(document.body,"click","_globalOnClick"),this._initialized=!1},_hashChanged:function(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1))},_urlChanged:function(){this._dontUpdateUrl=!0,this._hashChanged(),this.path=window.decodeURIComponent(this.__location.pathname),this.query=this.__location.search.substring(1),this._dontUpdateUrl=!1,this._updateUrl()},_getUrl:function(){var e=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F"),t="";this.query&&(t="?"+this.query.replace(/\#/g,"%23"),t=this.encodeSpaceAsPlusInQuery?t.replace(/\+/g,"%2B").replace(/ /g,"+").replace(/%20/g,"+"):t.replace(/\+/g,"%2B").replace(/ /g,"%20"));var n="";return this.hash&&(n="#"+window.encodeURI(this.hash)),e+t+n},_updateUrl:function(){if(!this._dontUpdateUrl&&this._initialized&&(this.path!==window.decodeURIComponent(this.__location.pathname)||this.query!==this.__location.search.substring(1)||this.hash!==window.decodeURIComponent(this.__location.hash.substring(1)))){var e=this._getUrl(),t=new URL(e,this.__location.protocol+"//"+this.__location.host).href,n=window.performance.now(),i=this._lastChangedAt+this.dwellTime>n;this._lastChangedAt=n,i?window.history.replaceState({},"",t):window.history.pushState({},"",t),this.fire("location-changed",{},{node:window})}},_globalOnClick:function(e){if(!e.defaultPrevented){var t=this._getSameOriginLinkHref(e);t&&(e.preventDefault(),t!==this.__location.href&&(window.history.pushState({},"",t),this.fire("location-changed",{},{node:window})))}},_getSameOriginLinkHref:function(e){if(0!==e.button)return null;if(e.metaKey||e.ctrlKey||e.shiftKey)return null;for(var t=Object(o.b)(e).path,n=null,i=0;i<t.length;i++){var r=t[i];if("A"===r.tagName&&r.href){n=r;break}}if(!n)return null;if("_blank"===n.target)return null;if(("_top"===n.target||"_parent"===n.target)&&window.top!==window)return null;if(n.download)return null;var s,a,l,c=n.href;if(s=null!=document.baseURI?new URL(c,document.baseURI):new URL(c),a=this.__location.origin?this.__location.origin:this.__location.protocol+"//"+this.__location.host,s.origin)l=s.origin;else{var h=s.host,d=s.port,p=s.protocol;("https:"===p&&"443"===d||"http:"===p&&"80"===d)&&(h=s.hostname),l=p+"//"+h}if(l!==a)return null;var u=s.pathname+s.search+s.hash;return"/"!==u[0]&&(u="/"+u),this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(u)?null:new URL(u,this.__location.href).href},_makeRegExp:function(e){return RegExp(e)}}),
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
Object(r.a)({is:"iron-query-params",_template:null,properties:{paramsString:{type:String,notify:!0,observer:"paramsStringChanged"},paramsObject:{type:Object,notify:!0},_dontReact:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["paramsObjectChanged(paramsObject.*)"],paramsStringChanged:function(){this._dontReact=!0,this.paramsObject=this._decodeParams(this.paramsString),this._dontReact=!1},paramsObjectChanged:function(){this._dontReact||(this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,"?").replace(/%2F/g,"/").replace(/'/g,"%27"))},_encodeParams:function(e){var t=[];for(var n in e){var i=e[n];""===i?t.push(encodeURIComponent(n)):i&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(i.toString()))}return t.join("&")},_decodeParams:function(e){for(var t={},n=(e=(e||"").replace(/\+/g,"%20")).split("&"),i=0;i<n.length;i++){var r=n[i].split("=");r[0]&&(t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]||""))}return t}});var s=n(5);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const a={properties:{route:{type:Object,notify:!0},queryParams:{type:Object,notify:!0},path:{type:String,notify:!0}},observers:["_locationChanged(path, queryParams)","_routeChanged(route.prefix, route.path)","_routeQueryParamsChanged(route.__queryParams)"],created:function(){this.linkPaths("route.__queryParams","queryParams"),this.linkPaths("queryParams","route.__queryParams")},_locationChanged:function(){this.route&&this.route.path===this.path&&this.queryParams===this.route.__queryParams||(this.route={prefix:"",path:this.path,__queryParams:this.queryParams})},_routeChanged:function(){this.route&&(this.path=this.route.prefix+this.route.path)},_routeQueryParamsChanged:function(e){this.route&&(this.queryParams=e)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(r.a)({_template:s.a`
    <iron-query-params params-string="{{__query}}" params-object="{{queryParams}}">
    </iron-query-params>
    <iron-location path="{{__path}}" query="{{__query}}" hash="{{__hash}}" url-space-regex="[[urlSpaceRegex]]" dwell-time="[[dwellTime]]">
    </iron-location>
  `,is:"app-location",properties:{route:{type:Object,notify:!0},useHashAsPath:{type:Boolean,value:!1},urlSpaceRegex:{type:String,notify:!0},__queryParams:{type:Object},__path:{type:String},__query:{type:String},__hash:{type:String},path:{type:String,observer:"__onPathChanged"},_isReady:{type:Boolean},dwellTime:{type:Number}},behaviors:[a],observers:["__computeRoutePath(useHashAsPath, __hash, __path)"],ready:function(){this._isReady=!0},__computeRoutePath:function(){this.path=this.useHashAsPath?this.__hash:this.__path},__onPathChanged:function(){this._isReady&&(this.useHashAsPath?this.__hash=this.path:this.__path=this.path)}});var l=n(12),c=n(63),h=n.n(c),d=n(49),p=n.n(d);class u extends(Object(l.Mixin)(i.a).with(l.EventInterface,p.a)){static get template(){return i.b`<app-location url-space-regex="[[appRoutesRegex]]"></app-location>`}static get properties(){return{route:{type:Object},appRoutes:{type:Array,value:[]},appRoutesRegex:{type:RegExp,computed:"_makeRegex(appRoutes)"},debug:{type:Boolean,value:!1}}}constructor(){super(),this.AppStateModel.setLocationElement(this),this._setLocationObject();let e=window.location.href.replace(window.location.origin,"");window.history.replaceState({location:this.location},null,e),this._onLocationChange(),window.addEventListener("location-changed",e=>{this._replaceHistoryState(),this._onLocationChange()}),window.addEventListener("popstate",e=>{e.state&&(this.location=e.state.location,this._onLocationChange())})}ready(){super.ready(),this.debug&&this._initDebugging()}_replaceHistoryState(e){this._setLocationObject(e),window.history.replaceState({location:this.location},null,this.location.fullpath)}_initDebugging(){let e=history.pushState,t=history.replaceState;history.pushState=function(t){let n=new CustomEvent("history-push-state",{detail:t});return window.dispatchEvent(n),e.apply(history,arguments)},history.replaceState=function(e){let n=new CustomEvent("history-replace-state",{detail:e});return window.dispatchEvent(n),t.apply(history,arguments)},window.addEventListener("history-push-state",e=>console.log("history-push-state",e.detail)),window.addEventListener("history-replace-state",e=>console.log("history-replace-state",e.detail))}setWindowLocation(e){if("object"==typeof e){let t=e.path;if(e.qs){let n=[];for(let t in e.qs)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e.qs[t]));t+="?"+n.join("&")}e.hash&&(t+="#"+e.hash),e=t}window.history.state&&window.history.state.location&&window.history.state.location.fullpath===e||(window.history.pushState({},null,e),this._replaceHistoryState(e),this._onLocationChange())}_makeRegex(){let e=this.appRoutes.map(e=>"/"+e+"(/.*)?");e.push("/(\\?|#)+.*");let t="^("+e.join("|")+")$";return t=new RegExp(t,"i"),t}_setLocationObject(e){return this.location={fullpath:e||window.location.href.replace(window.location.origin,""),pathname:window.location.pathname,path:window.location.pathname.replace(/(^\/|\/$)/g,"").split("/"),query:h.a.parse(window.location.search),hash:window.location.hash.replace(/^#/,"")},location}_onLocationChange(){this._setAppState({location:this.location})}}customElements.define("app-route",u)}]);