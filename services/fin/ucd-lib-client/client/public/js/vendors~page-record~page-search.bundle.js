(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~page-record~page-search"],{

/***/ "./public/node_modules/@polymer/paper-spinner/paper-spinner-behavior.js":
/*!******************************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-spinner/paper-spinner-behavior.js ***!
  \******************************************************************************/
/*! exports provided: PaperSpinnerBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperSpinnerBehavior", function() { return PaperSpinnerBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
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


/** @polymerBehavior */
const PaperSpinnerBehavior = {

  properties: {
    /**
     * Displays the spinner.
     */
    active: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '__activeChanged'
    },

    /**
     * Alternative text content for accessibility support.
     * If alt is present, it will add an aria-label whose content matches alt
     * when active. If alt is not present, it will default to 'loading' as the
     * alt value.
     */
    alt: {type: String, value: 'loading', observer: '__altChanged'},

    __coolingDown: {type: Boolean, value: false}
  },

  __computeContainerClasses: function(active, coolingDown) {
    return [
      active || coolingDown ? 'active' : '',
      coolingDown ? 'cooldown' : ''
    ].join(' ');
  },

  __activeChanged: function(active, old) {
    this.__setAriaHidden(!active);
    this.__coolingDown = !active && old;
  },

  __altChanged: function(alt) {
    // user-provided `aria-label` takes precedence over prototype default
    if (alt === 'loading') {
      this.alt = this.getAttribute('aria-label') || alt;
    } else {
      this.__setAriaHidden(alt === '');
      this.setAttribute('aria-label', alt);
    }
  },

  __setAriaHidden: function(hidden) {
    var attr = 'aria-hidden';
    if (hidden) {
      this.setAttribute(attr, 'true');
    } else {
      this.removeAttribute(attr);
    }
  },

  __reset: function() {
    this.active = false;
    this.__coolingDown = false;
  }
};


/***/ }),

/***/ "./public/node_modules/@polymer/paper-spinner/paper-spinner-lite.js":
/*!**************************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-spinner/paper-spinner-lite.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./public/node_modules/@polymer/paper-styles/color.js");
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./public/node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./public/node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
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









const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer">
      <div class="circle-clipper left"></div>
      <div class="circle-clipper right"></div>
    </div>
  </div>
`;
template.setAttribute('strip-whitespace', '');

/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a single color material design circular spinner.

    <paper-spinner-lite active></paper-spinner-lite>

The default spinner is blue. It can be customized to be a different color.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner-lite alt="Loading contacts list" active></paper-spinner-lite>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-color` | Color of the spinner | `--google-blue-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner-lite
@hero hero.svg
@demo demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,

  is: 'paper-spinner-lite',

  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});


/***/ }),

/***/ "./public/node_modules/@polymer/paper-spinner/paper-spinner-styles.js":
/*!****************************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-spinner/paper-spinner-styles.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="paper-spinner-styles">
  <template>
    <style>
      /*
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/

      /*
       * Constants:
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 3).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *      SHRINK_TIME = 400ms
       */

      :host {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;

        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        --paper-spinner-container-rotation-duration: 1568ms;

        /* ARCTIME */
        --paper-spinner-expand-contract-duration: 1333ms;

        /* 4 * ARCTIME */
        --paper-spinner-full-cycle-duration: 5332ms;

        /* SHRINK_TIME */
        --paper-spinner-cooldown-duration: 400ms;
      }

      #spinnerContainer {
        width: 100%;
        height: 100%;

        /* The spinner does not have any contents that would have to be
         * flipped if the direction changes. Always use ltr so that the
         * style works out correctly in both cases. */
        direction: ltr;
      }

      #spinnerContainer.active {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
      }

      @-webkit-keyframes container-rotate {
        to { -webkit-transform: rotate(360deg) }
      }

      @keyframes container-rotate {
        to { transform: rotate(360deg) }
      }

      .spinner-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        white-space: nowrap;
        color: var(--paper-spinner-color, var(--google-blue-500));
      }

      .layer-1 {
        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));
      }

      .layer-2 {
        color: var(--paper-spinner-layer-2-color, var(--google-red-500));
      }

      .layer-3 {
        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));
      }

      .layer-4 {
        color: var(--paper-spinner-layer-4-color, var(--google-green-500));
      }

      /**
       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
       *
       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
       * guarantee that the animation will start _exactly_ after that value. So we avoid using
       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it
       * seems).
       */
      .active .spinner-layer {
        -webkit-animation-name: fill-unfill-rotate;
        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-name: fill-unfill-rotate;
        animation-duration: var(--paper-spinner-full-cycle-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .active .spinner-layer.layer-1 {
        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;
        animation-name: fill-unfill-rotate, layer-1-fade-in-out;
      }

      .active .spinner-layer.layer-2 {
        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;
        animation-name: fill-unfill-rotate, layer-2-fade-in-out;
      }

      .active .spinner-layer.layer-3 {
        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;
        animation-name: fill-unfill-rotate, layer-3-fade-in-out;
      }

      .active .spinner-layer.layer-4 {
        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;
        animation-name: fill-unfill-rotate, layer-4-fade-in-out;
      }

      @-webkit-keyframes fill-unfill-rotate {
        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @-webkit-keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @-webkit-keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      .circle-clipper {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
      }

      /**
       * Patch the gap that appear between the two adjacent div.circle-clipper while the
       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).
       */
      .spinner-layer::after {
        left: 45%;
        width: 10%;
        border-top-style: solid;
      }

      .spinner-layer::after,
      .circle-clipper::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 0;
        border-width: var(--paper-spinner-stroke-width, 3px);
        border-radius: 50%;
      }

      .circle-clipper::after {
        bottom: 0;
        width: 200%;
        border-style: solid;
        border-bottom-color: transparent !important;
      }

      .circle-clipper.left::after {
        left: 0;
        border-right-color: transparent !important;
        -webkit-transform: rotate(129deg);
        transform: rotate(129deg);
      }

      .circle-clipper.right::after {
        left: -100%;
        border-left-color: transparent !important;
        -webkit-transform: rotate(-129deg);
        transform: rotate(-129deg);
      }

      .active .gap-patch::after,
      .active .circle-clipper::after {
        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-duration: var(--paper-spinner-expand-contract-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
      }

      .active .circle-clipper.left::after {
        -webkit-animation-name: left-spin;
        animation-name: left-spin;
      }

      .active .circle-clipper.right::after {
        -webkit-animation-name: right-spin;
        animation-name: right-spin;
      }

      @-webkit-keyframes left-spin {
        0% { -webkit-transform: rotate(130deg) }
        50% { -webkit-transform: rotate(-5deg) }
        to { -webkit-transform: rotate(130deg) }
      }

      @keyframes left-spin {
        0% { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
      }

      @-webkit-keyframes right-spin {
        0% { -webkit-transform: rotate(-130deg) }
        50% { -webkit-transform: rotate(5deg) }
        to { -webkit-transform: rotate(-130deg) }
      }

      @keyframes right-spin {
        0% { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
      }

      #spinnerContainer.cooldown {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      @-webkit-keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);


/***/ }),

/***/ "./public/node_modules/markdown/lib/index.js":
/*!***************************************************!*\
  !*** ./public/node_modules/markdown/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// super simple module for the most common nodejs use case.
exports.markdown = __webpack_require__(/*! ./markdown */ "./public/node_modules/markdown/lib/markdown.js");
exports.parse = exports.markdown.toHTML;


/***/ }),

/***/ "./public/node_modules/markdown/lib/markdown.js":
/*!******************************************************!*\
  !*** ./public/node_modules/markdown/lib/markdown.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

/*jshint browser:true, devel:true */

(function( expose ) {

/**
 *  class Markdown
 *
 *  Markdown processing in Javascript done right. We have very particular views
 *  on what constitutes 'right' which include:
 *
 *  - produces well-formed HTML (this means that em and strong nesting is
 *    important)
 *
 *  - has an intermediate representation to allow processing of parsed data (We
 *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
 *
 *  - is easily extensible to add new dialects without having to rewrite the
 *    entire parsing mechanics
 *
 *  - has a good test suite
 *
 *  This implementation fulfills all of these (except that the test suite could
 *  do with expanding to automatically run all the fixtures from other Markdown
 *  implementations.)
 *
 *  ##### Intermediate Representation
 *
 *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
 *
 *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
 **/
var Markdown = expose.Markdown = function(dialect) {
  switch (typeof dialect) {
    case "undefined":
      this.dialect = Markdown.dialects.Gruber;
      break;
    case "object":
      this.dialect = dialect;
      break;
    default:
      if ( dialect in Markdown.dialects ) {
        this.dialect = Markdown.dialects[dialect];
      }
      else {
        throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
      }
      break;
  }
  this.em_state = [];
  this.strong_state = [];
  this.debug_indent = "";
};

/**
 *  parse( markdown, [dialect] ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *
 *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
 **/
expose.parse = function( source, dialect ) {
  // dialect will default if undefined
  var md = new Markdown( dialect );
  return md.toTree( source );
};

/**
 *  toHTML( markdown, [dialect]  ) -> String
 *  toHTML( md_tree ) -> String
 *  - markdown (String): markdown string to parse
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Take markdown (either as a string or as a JsonML tree) and run it through
 *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
 **/
expose.toHTML = function toHTML( source , dialect , options ) {
  var input = expose.toHTMLTree( source , dialect , options );

  return expose.renderJsonML( input );
};

/**
 *  toHTMLTree( markdown, [dialect] ) -> JsonML
 *  toHTMLTree( md_tree ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
 *  to this function, it is first parsed into a markdown tree by calling
 *  [[parse]].
 **/
expose.toHTMLTree = function toHTMLTree( input, dialect , options ) {
  // convert string input to an MD tree
  if ( typeof input ==="string" ) input = this.parse( input, dialect );

  // Now convert the MD tree to an HTML tree

  // remove references from the tree
  var attrs = extract_attr( input ),
      refs = {};

  if ( attrs && attrs.references ) {
    refs = attrs.references;
  }

  var html = convert_tree_to_html( input, refs , options );
  merge_text_nodes( html );
  return html;
};

// For Spidermonkey based engines
function mk_block_toSource() {
  return "Markdown.mk_block( " +
          uneval(this.toString()) +
          ", " +
          uneval(this.trailing) +
          ", " +
          uneval(this.lineNumber) +
          " )";
}

// node
function mk_block_inspect() {
  var util = __webpack_require__(/*! util */ "../node_modules/util/util.js");
  return "Markdown.mk_block( " +
          util.inspect(this.toString()) +
          ", " +
          util.inspect(this.trailing) +
          ", " +
          util.inspect(this.lineNumber) +
          " )";

}

var mk_block = Markdown.mk_block = function(block, trail, line) {
  // Be helpful for default case in tests.
  if ( arguments.length == 1 ) trail = "\n\n";

  var s = new String(block);
  s.trailing = trail;
  // To make it clear its not just a string
  s.inspect = mk_block_inspect;
  s.toSource = mk_block_toSource;

  if ( line != undefined )
    s.lineNumber = line;

  return s;
};

function count_lines( str ) {
  var n = 0, i = -1;
  while ( ( i = str.indexOf("\n", i + 1) ) !== -1 ) n++;
  return n;
}

// Internal - split source into rough blocks
Markdown.prototype.split_blocks = function splitBlocks( input, startLine ) {
  input = input.replace(/(\r\n|\n|\r)/g, "\n");
  // [\s\S] matches _anything_ (newline or space)
  // [^] is equivalent but doesn't work in IEs.
  var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
      blocks = [],
      m;

  var line_no = 1;

  if ( ( m = /^(\s*\n)/.exec(input) ) != null ) {
    // skip (but count) leading blank lines
    line_no += count_lines( m[0] );
    re.lastIndex = m[0].length;
  }

  while ( ( m = re.exec(input) ) !== null ) {
    if (m[2] == "\n#") {
      m[2] = "\n";
      re.lastIndex--;
    }
    blocks.push( mk_block( m[1], m[2], line_no ) );
    line_no += count_lines( m[0] );
  }

  return blocks;
};

/**
 *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
 *  - block (String): the block to process
 *  - next (Array): the following blocks
 *
 * Process `block` and return an array of JsonML nodes representing `block`.
 *
 * It does this by asking each block level function in the dialect to process
 * the block until one can. Succesful handling is indicated by returning an
 * array (with zero or more JsonML nodes), failure by a false value.
 *
 * Blocks handlers are responsible for calling [[Markdown#processInline]]
 * themselves as appropriate.
 *
 * If the blocks were split incorrectly or adjacent blocks need collapsing you
 * can adjust `next` in place using shift/splice etc.
 *
 * If any of this default behaviour is not right for the dialect, you can
 * define a `__call__` method on the dialect that will get invoked to handle
 * the block processing.
 */
Markdown.prototype.processBlock = function processBlock( block, next ) {
  var cbs = this.dialect.block,
      ord = cbs.__order__;

  if ( "__call__" in cbs ) {
    return cbs.__call__.call(this, block, next);
  }

  for ( var i = 0; i < ord.length; i++ ) {
    //D:this.debug( "Testing", ord[i] );
    var res = cbs[ ord[i] ].call( this, block, next );
    if ( res ) {
      //D:this.debug("  matched");
      if ( !isArray(res) || ( res.length > 0 && !( isArray(res[0]) ) ) )
        this.debug(ord[i], "didn't return a proper array");
      //D:this.debug( "" );
      return res;
    }
  }

  // Uhoh! no match! Should we throw an error?
  return [];
};

Markdown.prototype.processInline = function processInline( block ) {
  return this.dialect.inline.__call__.call( this, String( block ) );
};

/**
 *  Markdown#toTree( source ) -> JsonML
 *  - source (String): markdown source to parse
 *
 *  Parse `source` into a JsonML tree representing the markdown document.
 **/
// custom_tree means set this.tree to `custom_tree` and restore old value on return
Markdown.prototype.toTree = function toTree( source, custom_root ) {
  var blocks = source instanceof Array ? source : this.split_blocks( source );

  // Make tree a member variable so its easier to mess with in extensions
  var old_tree = this.tree;
  try {
    this.tree = custom_root || this.tree || [ "markdown" ];

    blocks:
    while ( blocks.length ) {
      var b = this.processBlock( blocks.shift(), blocks );

      // Reference blocks and the like won't return any content
      if ( !b.length ) continue blocks;

      this.tree.push.apply( this.tree, b );
    }
    return this.tree;
  }
  finally {
    if ( custom_root ) {
      this.tree = old_tree;
    }
  }
};

// Noop by default
Markdown.prototype.debug = function () {
  var args = Array.prototype.slice.call( arguments);
  args.unshift(this.debug_indent);
  if ( typeof print !== "undefined" )
      print.apply( print, args );
  if ( typeof console !== "undefined" && typeof console.log !== "undefined" )
      console.log.apply( null, args );
}

Markdown.prototype.loop_re_over_block = function( re, block, cb ) {
  // Dont use /g regexps with this
  var m,
      b = block.valueOf();

  while ( b.length && (m = re.exec(b) ) != null ) {
    b = b.substr( m[0].length );
    cb.call(this, m);
  }
  return b;
};

/**
 * Markdown.dialects
 *
 * Namespace of built-in dialects.
 **/
Markdown.dialects = {};

/**
 * Markdown.dialects.Gruber
 *
 * The default dialect that follows the rules set out by John Gruber's
 * markdown.pl as closely as possible. Well actually we follow the behaviour of
 * that script which in some places is not exactly what the syntax web page
 * says.
 **/
Markdown.dialects.Gruber = {
  block: {
    atxHeader: function atxHeader( block, next ) {
      var m = block.match( /^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/ );

      if ( !m ) return undefined;

      var header = [ "header", { level: m[ 1 ].length } ];
      Array.prototype.push.apply(header, this.processInline(m[ 2 ]));

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    setextHeader: function setextHeader( block, next ) {
      var m = block.match( /^(.*)\n([-=])\2\2+(?:\n|$)/ );

      if ( !m ) return undefined;

      var level = ( m[ 2 ] === "=" ) ? 1 : 2;
      var header = [ "header", { level : level }, m[ 1 ] ];

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    code: function code( block, next ) {
      // |    Foo
      // |bar
      // should be a code block followed by a paragraph. Fun
      //
      // There might also be adjacent code block to merge.

      var ret = [],
          re = /^(?: {0,3}\t| {4})(.*)\n?/,
          lines;

      // 4 spaces + content
      if ( !block.match( re ) ) return undefined;

      block_search:
      do {
        // Now pull out the rest of the lines
        var b = this.loop_re_over_block(
                  re, block.valueOf(), function( m ) { ret.push( m[1] ); } );

        if ( b.length ) {
          // Case alluded to in first comment. push it back on as a new block
          next.unshift( mk_block(b, block.trailing) );
          break block_search;
        }
        else if ( next.length ) {
          // Check the next block - it might be code too
          if ( !next[0].match( re ) ) break block_search;

          // Pull how how many blanks lines follow - minus two to account for .join
          ret.push ( block.trailing.replace(/[^\n]/g, "").substring(2) );

          block = next.shift();
        }
        else {
          break block_search;
        }
      } while ( true );

      return [ [ "code_block", ret.join("\n") ] ];
    },

    horizRule: function horizRule( block, next ) {
      // this needs to find any hr in the block to handle abutting blocks
      var m = block.match( /^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/ );

      if ( !m ) {
        return undefined;
      }

      var jsonml = [ [ "hr" ] ];

      // if there's a leading abutting block, process it
      if ( m[ 1 ] ) {
        jsonml.unshift.apply( jsonml, this.processBlock( m[ 1 ], [] ) );
      }

      // if there's a trailing abutting block, stick it into next
      if ( m[ 3 ] ) {
        next.unshift( mk_block( m[ 3 ] ) );
      }

      return jsonml;
    },

    // There are two types of lists. Tight and loose. Tight lists have no whitespace
    // between the items (and result in text just in the <li>) and loose lists,
    // which have an empty line between list items, resulting in (one or more)
    // paragraphs inside the <li>.
    //
    // There are all sorts weird edge cases about the original markdown.pl's
    // handling of lists:
    //
    // * Nested lists are supposed to be indented by four chars per level. But
    //   if they aren't, you can get a nested list by indenting by less than
    //   four so long as the indent doesn't match an indent of an existing list
    //   item in the 'nest stack'.
    //
    // * The type of the list (bullet or number) is controlled just by the
    //    first item at the indent. Subsequent changes are ignored unless they
    //    are for nested lists
    //
    lists: (function( ) {
      // Use a closure to hide a few variables.
      var any_list = "[*+-]|\\d+\\.",
          bullet_list = /[*+-]/,
          number_list = /\d+\./,
          // Capture leading indent as it matters for determining nested lists.
          is_list_re = new RegExp( "^( {0,3})(" + any_list + ")[ \t]+" ),
          indent_re = "(?: {0,3}\\t| {4})";

      // TODO: Cache this regexp for certain depths.
      // Create a regexp suitable for matching an li for a given stack depth
      function regex_for_depth( depth ) {

        return new RegExp(
          // m[1] = indent, m[2] = list_type
          "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" +
          // m[3] = cont
          "(^" + indent_re + "{0," + (depth-1) + "}[ ]{0,4})"
        );
      }
      function expand_tab( input ) {
        return input.replace( / {0,3}\t/g, "    " );
      }

      // Add inline content `inline` to `li`. inline comes from processInline
      // so is an array of content
      function add(li, loose, inline, nl) {
        if ( loose ) {
          li.push( [ "para" ].concat(inline) );
          return;
        }
        // Hmmm, should this be any block level element or just paras?
        var add_to = li[li.length -1] instanceof Array && li[li.length - 1][0] == "para"
                   ? li[li.length -1]
                   : li;

        // If there is already some content in this list, add the new line in
        if ( nl && li.length > 1 ) inline.unshift(nl);

        for ( var i = 0; i < inline.length; i++ ) {
          var what = inline[i],
              is_str = typeof what == "string";
          if ( is_str && add_to.length > 1 && typeof add_to[add_to.length-1] == "string" ) {
            add_to[ add_to.length-1 ] += what;
          }
          else {
            add_to.push( what );
          }
        }
      }

      // contained means have an indent greater than the current one. On
      // *every* line in the block
      function get_contained_blocks( depth, blocks ) {

        var re = new RegExp( "^(" + indent_re + "{" + depth + "}.*?\\n?)*$" ),
            replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
            ret = [];

        while ( blocks.length > 0 ) {
          if ( re.exec( blocks[0] ) ) {
            var b = blocks.shift(),
                // Now remove that indent
                x = b.replace( replace, "");

            ret.push( mk_block( x, b.trailing, b.lineNumber ) );
          }
          else {
            break;
          }
        }
        return ret;
      }

      // passed to stack.forEach to turn list items up the stack into paras
      function paragraphify(s, i, stack) {
        var list = s.list;
        var last_li = list[list.length-1];

        if ( last_li[1] instanceof Array && last_li[1][0] == "para" ) {
          return;
        }
        if ( i + 1 == stack.length ) {
          // Last stack frame
          // Keep the same array, but replace the contents
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ) );
        }
        else {
          var sublist = last_li.pop();
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ), sublist );
        }
      }

      // The matcher function
      return function( block, next ) {
        var m = block.match( is_list_re );
        if ( !m ) return undefined;

        function make_list( m ) {
          var list = bullet_list.exec( m[2] )
                   ? ["bulletlist"]
                   : ["numberlist"];

          stack.push( { list: list, indent: m[1] } );
          return list;
        }


        var stack = [], // Stack of lists for nesting.
            list = make_list( m ),
            last_li,
            loose = false,
            ret = [ stack[0].list ],
            i;

        // Loop to search over block looking for inner block elements and loose lists
        loose_search:
        while ( true ) {
          // Split into lines preserving new lines at end of line
          var lines = block.split( /(?=\n)/ );

          // We have to grab all lines for a li and call processInline on them
          // once as there are some inline things that can span lines.
          var li_accumulate = "";

          // Loop over the lines in this block looking for tight lists.
          tight_search:
          for ( var line_no = 0; line_no < lines.length; line_no++ ) {
            var nl = "",
                l = lines[line_no].replace(/^\n/, function(n) { nl = n; return ""; });

            // TODO: really should cache this
            var line_re = regex_for_depth( stack.length );

            m = l.match( line_re );
            //print( "line:", uneval(l), "\nline match:", uneval(m) );

            // We have a list item
            if ( m[1] !== undefined ) {
              // Process the previous list item, if any
              if ( li_accumulate.length ) {
                add( last_li, loose, this.processInline( li_accumulate ), nl );
                // Loose mode will have been dealt with. Reset it
                loose = false;
                li_accumulate = "";
              }

              m[1] = expand_tab( m[1] );
              var wanted_depth = Math.floor(m[1].length/4)+1;
              //print( "want:", wanted_depth, "stack:", stack.length);
              if ( wanted_depth > stack.length ) {
                // Deep enough for a nested list outright
                //print ( "new nested list" );
                list = make_list( m );
                last_li.push( list );
                last_li = list[1] = [ "listitem" ];
              }
              else {
                // We aren't deep enough to be strictly a new level. This is
                // where Md.pl goes nuts. If the indent matches a level in the
                // stack, put it there, else put it one deeper then the
                // wanted_depth deserves.
                var found = false;
                for ( i = 0; i < stack.length; i++ ) {
                  if ( stack[ i ].indent != m[1] ) continue;
                  list = stack[ i ].list;
                  stack.splice( i+1, stack.length - (i+1) );
                  found = true;
                  break;
                }

                if (!found) {
                  //print("not found. l:", uneval(l));
                  wanted_depth++;
                  if ( wanted_depth <= stack.length ) {
                    stack.splice(wanted_depth, stack.length - wanted_depth);
                    //print("Desired depth now", wanted_depth, "stack:", stack.length);
                    list = stack[wanted_depth-1].list;
                    //print("list:", uneval(list) );
                  }
                  else {
                    //print ("made new stack for messy indent");
                    list = make_list(m);
                    last_li.push(list);
                  }
                }

                //print( uneval(list), "last", list === stack[stack.length-1].list );
                last_li = [ "listitem" ];
                list.push(last_li);
              } // end depth of shenegains
              nl = "";
            }

            // Add content
            if ( l.length > m[0].length ) {
              li_accumulate += nl + l.substr( m[0].length );
            }
          } // tight_search

          if ( li_accumulate.length ) {
            add( last_li, loose, this.processInline( li_accumulate ), nl );
            // Loose mode will have been dealt with. Reset it
            loose = false;
            li_accumulate = "";
          }

          // Look at the next block - we might have a loose list. Or an extra
          // paragraph for the current li
          var contained = get_contained_blocks( stack.length, next );

          // Deal with code blocks or properly nested lists
          if ( contained.length > 0 ) {
            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            last_li.push.apply( last_li, this.toTree( contained, [] ) );
          }

          var next_block = next[0] && next[0].valueOf() || "";

          if ( next_block.match(is_list_re) || next_block.match( /^ / ) ) {
            block = next.shift();

            // Check for an HR following a list: features/lists/hr_abutting
            var hr = this.dialect.block.horizRule( block, next );

            if ( hr ) {
              ret.push.apply(ret, hr);
              break;
            }

            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            loose = true;
            continue loose_search;
          }
          break;
        } // loose_search

        return ret;
      };
    })(),

    blockquote: function blockquote( block, next ) {
      if ( !block.match( /^>/m ) )
        return undefined;

      var jsonml = [];

      // separate out the leading abutting block, if any. I.e. in this case:
      //
      //  a
      //  > b
      //
      if ( block[ 0 ] != ">" ) {
        var lines = block.split( /\n/ ),
            prev = [],
            line_no = block.lineNumber;

        // keep shifting lines until you find a crotchet
        while ( lines.length && lines[ 0 ][ 0 ] != ">" ) {
            prev.push( lines.shift() );
            line_no++;
        }

        var abutting = mk_block( prev.join( "\n" ), "\n", block.lineNumber );
        jsonml.push.apply( jsonml, this.processBlock( abutting, [] ) );
        // reassemble new block of just block quotes!
        block = mk_block( lines.join( "\n" ), block.trailing, line_no );
      }


      // if the next block is also a blockquote merge it in
      while ( next.length && next[ 0 ][ 0 ] == ">" ) {
        var b = next.shift();
        block = mk_block( block + block.trailing + b, b.trailing, block.lineNumber );
      }

      // Strip off the leading "> " and re-process as a block.
      var input = block.replace( /^> ?/gm, "" ),
          old_tree = this.tree,
          processedBlock = this.toTree( input, [ "blockquote" ] ),
          attr = extract_attr( processedBlock );

      // If any link references were found get rid of them
      if ( attr && attr.references ) {
        delete attr.references;
        // And then remove the attribute object if it's empty
        if ( isEmpty( attr ) ) {
          processedBlock.splice( 1, 1 );
        }
      }

      jsonml.push( processedBlock );
      return jsonml;
    },

    referenceDefn: function referenceDefn( block, next) {
      var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
      // interesting matches are [ , ref_id, url, , title, title ]

      if ( !block.match(re) )
        return undefined;

      // make an attribute node if it doesn't exist
      if ( !extract_attr( this.tree ) ) {
        this.tree.splice( 1, 0, {} );
      }

      var attrs = extract_attr( this.tree );

      // make a references hash if it doesn't exist
      if ( attrs.references === undefined ) {
        attrs.references = {};
      }

      var b = this.loop_re_over_block(re, block, function( m ) {

        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        var ref = attrs.references[ m[1].toLowerCase() ] = {
          href: m[2]
        };

        if ( m[4] !== undefined )
          ref.title = m[4];
        else if ( m[5] !== undefined )
          ref.title = m[5];

      } );

      if ( b.length )
        next.unshift( mk_block( b, block.trailing ) );

      return [];
    },

    para: function para( block, next ) {
      // everything's a para!
      return [ ["para"].concat( this.processInline( block ) ) ];
    }
  }
};

Markdown.dialects.Gruber.inline = {

    __oneElement__: function oneElement( text, patterns_or_re, previous_nodes ) {
      var m,
          res,
          lastIndex = 0;

      patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
      var re = new RegExp( "([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")" );

      m = re.exec( text );
      if (!m) {
        // Just boring text
        return [ text.length, text ];
      }
      else if ( m[1] ) {
        // Some un-interesting text matched. Return that first
        return [ m[1].length, m[1] ];
      }

      var res;
      if ( m[2] in this.dialect.inline ) {
        res = this.dialect.inline[ m[2] ].call(
                  this,
                  text.substr( m.index ), m, previous_nodes || [] );
      }
      // Default for now to make dev easier. just slurp special and output it.
      res = res || [ m[2].length, m[2] ];
      return res;
    },

    __call__: function inline( text, patterns ) {

      var out = [],
          res;

      function add(x) {
        //D:self.debug("  adding output", uneval(x));
        if ( typeof x == "string" && typeof out[out.length-1] == "string" )
          out[ out.length-1 ] += x;
        else
          out.push(x);
      }

      while ( text.length > 0 ) {
        res = this.dialect.inline.__oneElement__.call(this, text, patterns, out );
        text = text.substr( res.shift() );
        forEach(res, add )
      }

      return out;
    },

    // These characters are intersting elsewhere, so have rules for them so that
    // chunks of plain text blocks don't include them
    "]": function () {},
    "}": function () {},

    __escape__ : /^\\[\\`\*_{}\[\]()#\+.!\-]/,

    "\\": function escaped( text ) {
      // [ length of input processed, node/children to add... ]
      // Only esacape: \ ` * _ { } [ ] ( ) # * + - . !
      if ( this.dialect.inline.__escape__.exec( text ) )
        return [ 2, text.charAt( 1 ) ];
      else
        // Not an esacpe
        return [ 1, "\\" ];
    },

    "![": function image( text ) {

      // Unlike images, alt text is plain text only. no other elements are
      // allowed in there

      // ![Alt text](/path/to/img.jpg "Optional title")
      //      1          2            3       4         <--- captures
      var m = text.match( /^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/ );

      if ( m ) {
        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        m[2] = this.dialect.inline.__call__.call( this, m[2], /\\/ )[0];

        var attrs = { alt: m[1], href: m[2] || "" };
        if ( m[4] !== undefined)
          attrs.title = m[4];

        return [ m[0].length, [ "img", attrs ] ];
      }

      // ![Alt text][id]
      m = text.match( /^!\[(.*?)\][ \t]*\[(.*?)\]/ );

      if ( m ) {
        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion
        return [ m[0].length, [ "img_ref", { alt: m[1], ref: m[2].toLowerCase(), original: m[0] } ] ];
      }

      // Just consume the '!['
      return [ 2, "![" ];
    },

    "[": function link( text ) {

      var orig = String(text);
      // Inline content is possible inside `link text`
      var res = Markdown.DialectHelpers.inline_until_char.call( this, text.substr(1), "]" );

      // No closing ']' found. Just consume the [
      if ( !res ) return [ 1, "[" ];

      var consumed = 1 + res[ 0 ],
          children = res[ 1 ],
          link,
          attrs;

      // At this point the first [...] has been parsed. See what follows to find
      // out which kind of link we are (reference or direct url)
      text = text.substr( consumed );

      // [link text](/path/to/img.jpg "Optional title")
      //                 1            2       3         <--- captures
      // This will capture up to the last paren in the block. We then pull
      // back based on if there a matching ones in the url
      //    ([here](/url/(test))
      // The parens have to be balanced
      var m = text.match( /^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/ );
      if ( m ) {
        var url = m[1];
        consumed += m[0].length;

        if ( url && url[0] == "<" && url[url.length-1] == ">" )
          url = url.substring( 1, url.length - 1 );

        // If there is a title we don't have to worry about parens in the url
        if ( !m[3] ) {
          var open_parens = 1; // One open that isn't in the capture
          for ( var len = 0; len < url.length; len++ ) {
            switch ( url[len] ) {
            case "(":
              open_parens++;
              break;
            case ")":
              if ( --open_parens == 0) {
                consumed -= url.length - len;
                url = url.substring(0, len);
              }
              break;
            }
          }
        }

        // Process escapes only
        url = this.dialect.inline.__call__.call( this, url, /\\/ )[0];

        attrs = { href: url || "" };
        if ( m[3] !== undefined)
          attrs.title = m[3];

        link = [ "link", attrs ].concat( children );
        return [ consumed, link ];
      }

      // [Alt text][id]
      // [Alt text] [id]
      m = text.match( /^\s*\[(.*?)\]/ );

      if ( m ) {

        consumed += m[ 0 ].length;

        // [links][] uses links as its reference
        attrs = { ref: ( m[ 1 ] || String(children) ).toLowerCase(),  original: orig.substr( 0, consumed ) };

        link = [ "link_ref", attrs ].concat( children );

        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion.
        // Store the original so that conversion can revert if the ref isn't found.
        return [ consumed, link ];
      }

      // [id]
      // Only if id is plain (no formatting.)
      if ( children.length == 1 && typeof children[0] == "string" ) {

        attrs = { ref: children[0].toLowerCase(),  original: orig.substr( 0, consumed ) };
        link = [ "link_ref", attrs, children[0] ];
        return [ consumed, link ];
      }

      // Just consume the "["
      return [ 1, "[" ];
    },


    "<": function autoLink( text ) {
      var m;

      if ( ( m = text.match( /^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/ ) ) != null ) {
        if ( m[3] ) {
          return [ m[0].length, [ "link", { href: "mailto:" + m[3] }, m[3] ] ];

        }
        else if ( m[2] == "mailto" ) {
          return [ m[0].length, [ "link", { href: m[1] }, m[1].substr("mailto:".length ) ] ];
        }
        else
          return [ m[0].length, [ "link", { href: m[1] }, m[1] ] ];
      }

      return [ 1, "<" ];
    },

    "`": function inlineCode( text ) {
      // Inline code block. as many backticks as you like to start it
      // Always skip over the opening ticks.
      var m = text.match( /(`+)(([\s\S]*?)\1)/ );

      if ( m && m[2] )
        return [ m[1].length + m[2].length, [ "inlinecode", m[3] ] ];
      else {
        // TODO: No matching end code found - warn!
        return [ 1, "`" ];
      }
    },

    "  \n": function lineBreak( text ) {
      return [ 3, [ "linebreak" ] ];
    }

};

// Meta Helper/generator method for em and strong handling
function strong_em( tag, md ) {

  var state_slot = tag + "_state",
      other_slot = tag == "strong" ? "em_state" : "strong_state";

  function CloseTag(len) {
    this.len_after = len;
    this.name = "close_" + md;
  }

  return function ( text, orig_match ) {

    if ( this[state_slot][0] == md ) {
      // Most recent em is of this type
      //D:this.debug("closing", md);
      this[state_slot].shift();

      // "Consume" everything to go back to the recrusion in the else-block below
      return[ text.length, new CloseTag(text.length-md.length) ];
    }
    else {
      // Store a clone of the em/strong states
      var other = this[other_slot].slice(),
          state = this[state_slot].slice();

      this[state_slot].unshift(md);

      //D:this.debug_indent += "  ";

      // Recurse
      var res = this.processInline( text.substr( md.length ) );
      //D:this.debug_indent = this.debug_indent.substr(2);

      var last = res[res.length - 1];

      //D:this.debug("processInline from", tag + ": ", uneval( res ) );

      var check = this[state_slot].shift();
      if ( last instanceof CloseTag ) {
        res.pop();
        // We matched! Huzzah.
        var consumed = text.length - last.len_after;
        return [ consumed, [ tag ].concat(res) ];
      }
      else {
        // Restore the state of the other kind. We might have mistakenly closed it.
        this[other_slot] = other;
        this[state_slot] = state;

        // We can't reuse the processed result as it could have wrong parsing contexts in it.
        return [ md.length, md ];
      }
    }
  }; // End returned function
}

Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
Markdown.dialects.Gruber.inline["*"]  = strong_em("em", "*");
Markdown.dialects.Gruber.inline["_"]  = strong_em("em", "_");


// Build default order from insertion order.
Markdown.buildBlockOrder = function(d) {
  var ord = [];
  for ( var i in d ) {
    if ( i == "__order__" || i == "__call__" ) continue;
    ord.push( i );
  }
  d.__order__ = ord;
};

// Build patterns for inline matcher
Markdown.buildInlinePatterns = function(d) {
  var patterns = [];

  for ( var i in d ) {
    // __foo__ is reserved and not a pattern
    if ( i.match( /^__.*__$/) ) continue;
    var l = i.replace( /([\\.*+?|()\[\]{}])/g, "\\$1" )
             .replace( /\n/, "\\n" );
    patterns.push( i.length == 1 ? l : "(?:" + l + ")" );
  }

  patterns = patterns.join("|");
  d.__patterns__ = patterns;
  //print("patterns:", uneval( patterns ) );

  var fn = d.__call__;
  d.__call__ = function(text, pattern) {
    if ( pattern != undefined ) {
      return fn.call(this, text, pattern);
    }
    else
    {
      return fn.call(this, text, patterns);
    }
  };
};

Markdown.DialectHelpers = {};
Markdown.DialectHelpers.inline_until_char = function( text, want ) {
  var consumed = 0,
      nodes = [];

  while ( true ) {
    if ( text.charAt( consumed ) == want ) {
      // Found the character we were looking for
      consumed++;
      return [ consumed, nodes ];
    }

    if ( consumed >= text.length ) {
      // No closing char found. Abort.
      return null;
    }

    var res = this.dialect.inline.__oneElement__.call(this, text.substr( consumed ) );
    consumed += res[ 0 ];
    // Add any returned nodes.
    nodes.push.apply( nodes, res.slice( 1 ) );
  }
}

// Helper function to make sub-classing a dialect easier
Markdown.subclassDialect = function( d ) {
  function Block() {}
  Block.prototype = d.block;
  function Inline() {}
  Inline.prototype = d.inline;

  return { block: new Block(), inline: new Inline() };
};

Markdown.buildBlockOrder ( Markdown.dialects.Gruber.block );
Markdown.buildInlinePatterns( Markdown.dialects.Gruber.inline );

Markdown.dialects.Maruku = Markdown.subclassDialect( Markdown.dialects.Gruber );

Markdown.dialects.Maruku.processMetaHash = function processMetaHash( meta_string ) {
  var meta = split_meta_hash( meta_string ),
      attr = {};

  for ( var i = 0; i < meta.length; ++i ) {
    // id: #foo
    if ( /^#/.test( meta[ i ] ) ) {
      attr.id = meta[ i ].substring( 1 );
    }
    // class: .foo
    else if ( /^\./.test( meta[ i ] ) ) {
      // if class already exists, append the new one
      if ( attr["class"] ) {
        attr["class"] = attr["class"] + meta[ i ].replace( /./, " " );
      }
      else {
        attr["class"] = meta[ i ].substring( 1 );
      }
    }
    // attribute: foo=bar
    else if ( /\=/.test( meta[ i ] ) ) {
      var s = meta[ i ].split( /\=/ );
      attr[ s[ 0 ] ] = s[ 1 ];
    }
  }

  return attr;
}

function split_meta_hash( meta_string ) {
  var meta = meta_string.split( "" ),
      parts = [ "" ],
      in_quotes = false;

  while ( meta.length ) {
    var letter = meta.shift();
    switch ( letter ) {
      case " " :
        // if we're in a quoted section, keep it
        if ( in_quotes ) {
          parts[ parts.length - 1 ] += letter;
        }
        // otherwise make a new part
        else {
          parts.push( "" );
        }
        break;
      case "'" :
      case '"' :
        // reverse the quotes and move straight on
        in_quotes = !in_quotes;
        break;
      case "\\" :
        // shift off the next letter to be used straight away.
        // it was escaped so we'll keep it whatever it is
        letter = meta.shift();
      default :
        parts[ parts.length - 1 ] += letter;
        break;
    }
  }

  return parts;
}

Markdown.dialects.Maruku.block.document_meta = function document_meta( block, next ) {
  // we're only interested in the first block
  if ( block.lineNumber > 1 ) return undefined;

  // document_meta blocks consist of one or more lines of `Key: Value\n`
  if ( ! block.match( /^(?:\w+:.*\n)*\w+:.*$/ ) ) return undefined;

  // make an attribute node if it doesn't exist
  if ( !extract_attr( this.tree ) ) {
    this.tree.splice( 1, 0, {} );
  }

  var pairs = block.split( /\n/ );
  for ( p in pairs ) {
    var m = pairs[ p ].match( /(\w+):\s*(.*)$/ ),
        key = m[ 1 ].toLowerCase(),
        value = m[ 2 ];

    this.tree[ 1 ][ key ] = value;
  }

  // document_meta produces no content!
  return [];
};

Markdown.dialects.Maruku.block.block_meta = function block_meta( block, next ) {
  // check if the last line of the block is an meta hash
  var m = block.match( /(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/ );
  if ( !m ) return undefined;

  // process the meta hash
  var attr = this.dialect.processMetaHash( m[ 2 ] );

  var hash;

  // if we matched ^ then we need to apply meta to the previous block
  if ( m[ 1 ] === "" ) {
    var node = this.tree[ this.tree.length - 1 ];
    hash = extract_attr( node );

    // if the node is a string (rather than JsonML), bail
    if ( typeof node === "string" ) return undefined;

    // create the attribute hash if it doesn't exist
    if ( !hash ) {
      hash = {};
      node.splice( 1, 0, hash );
    }

    // add the attributes in
    for ( a in attr ) {
      hash[ a ] = attr[ a ];
    }

    // return nothing so the meta hash is removed
    return [];
  }

  // pull the meta hash off the block and process what's left
  var b = block.replace( /\n.*$/, "" ),
      result = this.processBlock( b, [] );

  // get or make the attributes hash
  hash = extract_attr( result[ 0 ] );
  if ( !hash ) {
    hash = {};
    result[ 0 ].splice( 1, 0, hash );
  }

  // attach the attributes to the block
  for ( a in attr ) {
    hash[ a ] = attr[ a ];
  }

  return result;
};

Markdown.dialects.Maruku.block.definition_list = function definition_list( block, next ) {
  // one or more terms followed by one or more definitions, in a single block
  var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
      list = [ "dl" ],
      i, m;

  // see if we're dealing with a tight or loose block
  if ( ( m = block.match( tight ) ) ) {
    // pull subsequent tight DL blocks out of `next`
    var blocks = [ block ];
    while ( next.length && tight.exec( next[ 0 ] ) ) {
      blocks.push( next.shift() );
    }

    for ( var b = 0; b < blocks.length; ++b ) {
      var m = blocks[ b ].match( tight ),
          terms = m[ 1 ].replace( /\n$/, "" ).split( /\n/ ),
          defns = m[ 2 ].split( /\n:\s+/ );

      // print( uneval( m ) );

      for ( i = 0; i < terms.length; ++i ) {
        list.push( [ "dt", terms[ i ] ] );
      }

      for ( i = 0; i < defns.length; ++i ) {
        // run inline processing over the definition
        list.push( [ "dd" ].concat( this.processInline( defns[ i ].replace( /(\n)\s+/, "$1" ) ) ) );
      }
    }
  }
  else {
    return undefined;
  }

  return [ list ];
};

// splits on unescaped instances of @ch. If @ch is not a character the result
// can be unpredictable

Markdown.dialects.Maruku.block.table = function table (block, next) {

    var _split_on_unescaped = function(s, ch) {
        ch = ch || '\\s';
        if (ch.match(/^[\\|\[\]{}?*.+^$]$/)) { ch = '\\' + ch; }
        var res = [ ],
            r = new RegExp('^((?:\\\\.|[^\\\\' + ch + '])*)' + ch + '(.*)'),
            m;
        while(m = s.match(r)) {
            res.push(m[1]);
            s = m[2];
        }
        res.push(s);
        return res;
    }

    var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
        // find at least an unescaped pipe in each line
        no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
        i, m;
    if (m = block.match(leading_pipe)) {
        // remove leading pipes in contents
        // (header and horizontal rule already have the leading pipe left out)
        m[3] = m[3].replace(/^\s*\|/gm, '');
    } else if (! ( m = block.match(no_leading_pipe))) {
        return undefined;
    }

    var table = [ "table", [ "thead", [ "tr" ] ], [ "tbody" ] ];

    // remove trailing pipes, then split on pipes
    // (no escaped pipes are allowed in horizontal rule)
    m[2] = m[2].replace(/\|\s*$/, '').split('|');

    // process alignment
    var html_attrs = [ ];
    forEach (m[2], function (s) {
        if (s.match(/^\s*-+:\s*$/))       html_attrs.push({align: "right"});
        else if (s.match(/^\s*:-+\s*$/))  html_attrs.push({align: "left"});
        else if (s.match(/^\s*:-+:\s*$/)) html_attrs.push({align: "center"});
        else                              html_attrs.push({});
    });

    // now for the header, avoid escaped pipes
    m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ''), '|');
    for (i = 0; i < m[1].length; i++) {
        table[1][1].push(['th', html_attrs[i] || {}].concat(
            this.processInline(m[1][i].trim())));
    }

    // now for body contents
    forEach (m[3].replace(/\|\s*$/mg, '').split('\n'), function (row) {
        var html_row = ['tr'];
        row = _split_on_unescaped(row, '|');
        for (i = 0; i < row.length; i++) {
            html_row.push(['td', html_attrs[i] || {}].concat(this.processInline(row[i].trim())));
        }
        table[2].push(html_row);
    }, this);

    return [table];
}

Markdown.dialects.Maruku.inline[ "{:" ] = function inline_meta( text, matches, out ) {
  if ( !out.length ) {
    return [ 2, "{:" ];
  }

  // get the preceeding element
  var before = out[ out.length - 1 ];

  if ( typeof before === "string" ) {
    return [ 2, "{:" ];
  }

  // match a meta hash
  var m = text.match( /^\{:\s*((?:\\\}|[^\}])*)\s*\}/ );

  // no match, false alarm
  if ( !m ) {
    return [ 2, "{:" ];
  }

  // attach the attributes to the preceeding element
  var meta = this.dialect.processMetaHash( m[ 1 ] ),
      attr = extract_attr( before );

  if ( !attr ) {
    attr = {};
    before.splice( 1, 0, attr );
  }

  for ( var k in meta ) {
    attr[ k ] = meta[ k ];
  }

  // cut out the string and replace it with nothing
  return [ m[ 0 ].length, "" ];
};

Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;

Markdown.buildBlockOrder ( Markdown.dialects.Maruku.block );
Markdown.buildInlinePatterns( Markdown.dialects.Maruku.inline );

var isArray = Array.isArray || function(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
};

var forEach;
// Don't mess with Array.prototype. Its not friendly
if ( Array.prototype.forEach ) {
  forEach = function( arr, cb, thisp ) {
    return arr.forEach( cb, thisp );
  };
}
else {
  forEach = function(arr, cb, thisp) {
    for (var i = 0; i < arr.length; i++) {
      cb.call(thisp || arr, arr[i], i, arr);
    }
  }
}

var isEmpty = function( obj ) {
  for ( var key in obj ) {
    if ( hasOwnProperty.call( obj, key ) ) {
      return false;
    }
  }

  return true;
}

function extract_attr( jsonml ) {
  return isArray(jsonml)
      && jsonml.length > 1
      && typeof jsonml[ 1 ] === "object"
      && !( isArray(jsonml[ 1 ]) )
      ? jsonml[ 1 ]
      : undefined;
}



/**
 *  renderJsonML( jsonml[, options] ) -> String
 *  - jsonml (Array): JsonML array to render to XML
 *  - options (Object): options
 *
 *  Converts the given JsonML into well-formed XML.
 *
 *  The options currently understood are:
 *
 *  - root (Boolean): wether or not the root node should be included in the
 *    output, or just its children. The default `false` is to not include the
 *    root itself.
 */
expose.renderJsonML = function( jsonml, options ) {
  options = options || {};
  // include the root element in the rendered output?
  options.root = options.root || false;

  var content = [];

  if ( options.root ) {
    content.push( render_tree( jsonml ) );
  }
  else {
    jsonml.shift(); // get rid of the tag
    if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
      jsonml.shift(); // get rid of the attributes
    }

    while ( jsonml.length ) {
      content.push( render_tree( jsonml.shift() ) );
    }
  }

  return content.join( "\n\n" );
};

function escapeHTML( text ) {
  return text.replace( /&/g, "&amp;" )
             .replace( /</g, "&lt;" )
             .replace( />/g, "&gt;" )
             .replace( /"/g, "&quot;" )
             .replace( /'/g, "&#39;" );
}

function render_tree( jsonml ) {
  // basic case
  if ( typeof jsonml === "string" ) {
    return escapeHTML( jsonml );
  }

  var tag = jsonml.shift(),
      attributes = {},
      content = [];

  if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
    attributes = jsonml.shift();
  }

  while ( jsonml.length ) {
    content.push( render_tree( jsonml.shift() ) );
  }

  var tag_attrs = "";
  for ( var a in attributes ) {
    tag_attrs += " " + a + '="' + escapeHTML( attributes[ a ] ) + '"';
  }

  // be careful about adding whitespace here for inline elements
  if ( tag == "img" || tag == "br" || tag == "hr" ) {
    return "<"+ tag + tag_attrs + "/>";
  }
  else {
    return "<"+ tag + tag_attrs + ">" + content.join( "" ) + "</" + tag + ">";
  }
}

function convert_tree_to_html( tree, references, options ) {
  var i;
  options = options || {};

  // shallow clone
  var jsonml = tree.slice( 0 );

  if ( typeof options.preprocessTreeNode === "function" ) {
      jsonml = options.preprocessTreeNode(jsonml, references);
  }

  // Clone attributes if they exist
  var attrs = extract_attr( jsonml );
  if ( attrs ) {
    jsonml[ 1 ] = {};
    for ( i in attrs ) {
      jsonml[ 1 ][ i ] = attrs[ i ];
    }
    attrs = jsonml[ 1 ];
  }

  // basic case
  if ( typeof jsonml === "string" ) {
    return jsonml;
  }

  // convert this node
  switch ( jsonml[ 0 ] ) {
    case "header":
      jsonml[ 0 ] = "h" + jsonml[ 1 ].level;
      delete jsonml[ 1 ].level;
      break;
    case "bulletlist":
      jsonml[ 0 ] = "ul";
      break;
    case "numberlist":
      jsonml[ 0 ] = "ol";
      break;
    case "listitem":
      jsonml[ 0 ] = "li";
      break;
    case "para":
      jsonml[ 0 ] = "p";
      break;
    case "markdown":
      jsonml[ 0 ] = "html";
      if ( attrs ) delete attrs.references;
      break;
    case "code_block":
      jsonml[ 0 ] = "pre";
      i = attrs ? 2 : 1;
      var code = [ "code" ];
      code.push.apply( code, jsonml.splice( i, jsonml.length - i ) );
      jsonml[ i ] = code;
      break;
    case "inlinecode":
      jsonml[ 0 ] = "code";
      break;
    case "img":
      jsonml[ 1 ].src = jsonml[ 1 ].href;
      delete jsonml[ 1 ].href;
      break;
    case "linebreak":
      jsonml[ 0 ] = "br";
    break;
    case "link":
      jsonml[ 0 ] = "a";
      break;
    case "link_ref":
      jsonml[ 0 ] = "a";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.href = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
    case "img_ref":
      jsonml[ 0 ] = "img";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.src = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
  }

  // convert all the children
  i = 1;

  // deal with the attribute node, if it exists
  if ( attrs ) {
    // if there are keys, skip over it
    for ( var key in jsonml[ 1 ] ) {
        i = 2;
        break;
    }
    // if there aren't, remove it
    if ( i === 1 ) {
      jsonml.splice( i, 1 );
    }
  }

  for ( ; i < jsonml.length; ++i ) {
    jsonml[ i ] = convert_tree_to_html( jsonml[ i ], references, options );
  }

  return jsonml;
}


// merges adjacent text nodes into a single node
function merge_text_nodes( jsonml ) {
  // skip the tag name and attribute hash
  var i = extract_attr( jsonml ) ? 2 : 1;

  while ( i < jsonml.length ) {
    // if it's a string check the next item too
    if ( typeof jsonml[ i ] === "string" ) {
      if ( i + 1 < jsonml.length && typeof jsonml[ i + 1 ] === "string" ) {
        // merge the second string into the first and remove it
        jsonml[ i ] += jsonml.splice( i + 1, 1 )[ 0 ];
      }
      else {
        ++i;
      }
    }
    // if it's not a string recurse
    else {
      merge_text_nodes( jsonml[ i ] );
      ++i;
    }
  }
}

} )( (function() {
  if ( false ) {}
  else {
    return exports;
  }
} )() );


/***/ }),

/***/ "./public/node_modules/striptags/src/striptags.js":
/*!********************************************************!*\
  !*** ./public/node_modules/striptags/src/striptags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

(function (global) {

    // minimal symbol polyfill for IE11 and others
    if (typeof Symbol !== 'function') {
        var Symbol = function(name) {
            return name;
        }

        Symbol.nonNative = true;
    }

    const STATE_PLAINTEXT = Symbol('plaintext');
    const STATE_HTML      = Symbol('html');
    const STATE_COMMENT   = Symbol('comment');

    const ALLOWED_TAGS_REGEX  = /<(\w*)>/g;
    const NORMALIZE_TAG_REGEX = /<\/?([^\s\/>]+)/;

    function striptags(html, allowable_tags, tag_replacement) {
        html            = html || '';
        allowable_tags  = allowable_tags || [];
        tag_replacement = tag_replacement || '';

        let context = init_context(allowable_tags, tag_replacement);

        return striptags_internal(html, context);
    }

    function init_striptags_stream(allowable_tags, tag_replacement) {
        allowable_tags  = allowable_tags || [];
        tag_replacement = tag_replacement || '';

        let context = init_context(allowable_tags, tag_replacement);

        return function striptags_stream(html) {
            return striptags_internal(html || '', context);
        };
    }

    striptags.init_streaming_mode = init_striptags_stream;

    function init_context(allowable_tags, tag_replacement) {
        allowable_tags = parse_allowable_tags(allowable_tags);

        return {
            allowable_tags : allowable_tags,
            tag_replacement: tag_replacement,

            state         : STATE_PLAINTEXT,
            tag_buffer    : '',
            depth         : 0,
            in_quote_char : ''
        };
    }

    function striptags_internal(html, context) {
        let allowable_tags  = context.allowable_tags;
        let tag_replacement = context.tag_replacement;

        let state         = context.state;
        let tag_buffer    = context.tag_buffer;
        let depth         = context.depth;
        let in_quote_char = context.in_quote_char;
        let output        = '';

        for (let idx = 0, length = html.length; idx < length; idx++) {
            let char = html[idx];

            if (state === STATE_PLAINTEXT) {
                switch (char) {
                    case '<':
                        state       = STATE_HTML;
                        tag_buffer += char;
                        break;

                    default:
                        output += char;
                        break;
                }
            }

            else if (state === STATE_HTML) {
                switch (char) {
                    case '<':
                        // ignore '<' if inside a quote
                        if (in_quote_char) {
                            break;
                        }

                        // we're seeing a nested '<'
                        depth++;
                        break;

                    case '>':
                        // ignore '>' if inside a quote
                        if (in_quote_char) {
                            break;
                        }

                        // something like this is happening: '<<>>'
                        if (depth) {
                            depth--;

                            break;
                        }

                        // this is closing the tag in tag_buffer
                        in_quote_char = '';
                        state         = STATE_PLAINTEXT;
                        tag_buffer   += '>';

                        if (allowable_tags.has(normalize_tag(tag_buffer))) {
                            output += tag_buffer;
                        } else {
                            output += tag_replacement;
                        }

                        tag_buffer = '';
                        break;

                    case '"':
                    case '\'':
                        // catch both single and double quotes

                        if (char === in_quote_char) {
                            in_quote_char = '';
                        } else {
                            in_quote_char = in_quote_char || char;
                        }

                        tag_buffer += char;
                        break;

                    case '-':
                        if (tag_buffer === '<!-') {
                            state = STATE_COMMENT;
                        }

                        tag_buffer += char;
                        break;

                    case ' ':
                    case '\n':
                        if (tag_buffer === '<') {
                            state      = STATE_PLAINTEXT;
                            output    += '< ';
                            tag_buffer = '';

                            break;
                        }

                        tag_buffer += char;
                        break;

                    default:
                        tag_buffer += char;
                        break;
                }
            }

            else if (state === STATE_COMMENT) {
                switch (char) {
                    case '>':
                        if (tag_buffer.slice(-2) == '--') {
                            // close the comment
                            state = STATE_PLAINTEXT;
                        }

                        tag_buffer = '';
                        break;

                    default:
                        tag_buffer += char;
                        break;
                }
            }
        }

        // save the context for future iterations
        context.state         = state;
        context.tag_buffer    = tag_buffer;
        context.depth         = depth;
        context.in_quote_char = in_quote_char;

        return output;
    }

    function parse_allowable_tags(allowable_tags) {
        let tag_set = new Set();

        if (typeof allowable_tags === 'string') {
            let match;

            while ((match = ALLOWED_TAGS_REGEX.exec(allowable_tags))) {
                tag_set.add(match[1]);
            }
        }

        else if (!Symbol.nonNative &&
                 typeof allowable_tags[Symbol.iterator] === 'function') {

            tag_set = new Set(allowable_tags);
        }

        else if (typeof allowable_tags.forEach === 'function') {
            // IE11 compatible
            allowable_tags.forEach(tag_set.add, tag_set);
        }

        return tag_set;
    }

    function normalize_tag(tag_buffer) {
        let match = NORMALIZE_TAG_REGEX.exec(tag_buffer);

        return match ? match[1].toLowerCase() : null;
    }

    if (true) {
        // AMD
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function module_factory() { return striptags; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }

    else {}
}(this));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1saXRlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL21hcmtkb3duL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL21hcmtkb3duL2xpYi9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL3N0cmlwdGFncy9zcmMvc3RyaXB0YWdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0Qzs7QUFFNUM7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseURBQXlEOztBQUVuRSxvQkFBb0I7QUFDcEIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEM7QUFDSjtBQUNMOztBQUUrQjtBQUNOOztBQUVLOztBQUVqRSxpQkFBaUIsMkVBQUk7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUFPO0FBQ1A7O0FBRUE7O0FBRUEsY0FBYywrRUFBb0I7QUFDbEMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdEVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG9DQUFvQztBQUNuRCxlQUFlLG9DQUFvQztBQUNuRCxlQUFlLG9DQUFvQztBQUNuRCxlQUFlLG9DQUFvQztBQUNuRCxlQUFlLG9DQUFvQztBQUNuRCxlQUFlLG9DQUFvQztBQUNuRCxlQUFlLG9DQUFvQztBQUNuRCxlQUFlLHFDQUFxQztBQUNwRDs7QUFFQTtBQUNBLGVBQWUsNEJBQTRCO0FBQzNDLGVBQWUsNEJBQTRCO0FBQzNDLGVBQWUsNEJBQTRCO0FBQzNDLGVBQWUsNEJBQTRCO0FBQzNDLGVBQWUsNEJBQTRCO0FBQzNDLGVBQWUsNEJBQTRCO0FBQzNDLGVBQWUsNEJBQTRCO0FBQzNDLGVBQWUsNkJBQTZCO0FBQzVDOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYTtBQUNiLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYTtBQUNiLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWixhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYixhQUFhO0FBQ2IsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYTtBQUNiLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYTtBQUNiLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWixhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYixhQUFhO0FBQ2IsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYTtBQUNiLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWixhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYixZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYTtBQUNiLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWixhQUFhO0FBQ2IsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGFBQWE7QUFDYixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYTtBQUNiLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN2VkE7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxrRUFBWTtBQUN2Qzs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMsMENBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxJQUFJOztBQUVwQzs7QUFFQSxnQ0FBZ0MsdUJBQXVCO0FBQ3ZEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0MsZ0JBQWdCOztBQUVoRDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsSUFBSSxLQUFLLEVBQUU7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxrQkFBa0IsRUFBRTs7QUFFMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esd0VBQXdFLEdBQUc7O0FBRTNFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJO0FBQzVDLDRCQUE0QixJQUFJLE1BQU0sRUFBRTs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCLEVBQUUsSUFBSTtBQUN4RDtBQUNBLCtCQUErQixvQkFBb0IsSUFBSSxJQUFJO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxJQUFJO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsY0FBYztBQUNoRSxxREFBcUQsY0FBYztBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyx3QkFBd0I7QUFDeEQ7QUFDQSwrREFBK0QsUUFBUSxXQUFXLEVBQUU7O0FBRXBGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsTUFBTSxpQkFBaUI7O0FBRXZCLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBLGdDQUFnQyxFQUFFO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFEQUFxRDtBQUNqRzs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMseUJBQXlCOztBQUVwRTtBQUNBO0FBQ0EsMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQTtBQUNBLDJDQUEyQyxhQUFhO0FBQ3hEOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSSxFQUFFLFlBQVksS0FBSyxTQUFTO0FBQ2hFOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7O0FBRUEsa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLGFBQWEsZ0JBQWdCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixJQUFJLFVBQVUsSUFBSTtBQUM3QztBQUNBLDhCQUE4QixJQUFJLDJCQUEyQixJQUFJO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGVBQWU7QUFDMUUsMkRBQTJELGNBQWM7QUFDekUsMkRBQTJELGdCQUFnQjtBQUMzRSw0REFBNEQ7QUFDNUQsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEMsbURBQW1EO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsMEJBQTBCLFlBQVksS0FBSyxTQUFTOztBQUVwRDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLG1CQUFtQjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsT0FBTyxLQUE4QixHQUFHLEVBR3JDO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzVyREQsa0NBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsY0FBYztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSxJQUEwQztBQUNsRDtBQUNBLFFBQVEsbUNBQU8sMkJBQTJCLGtCQUFrQixFQUFFO0FBQUEsb0dBQUM7QUFDL0Q7O0FBRUEsU0FBUyxFQVFKO0FBQ0wsQ0FBQyIsImZpbGUiOiJ2ZW5kb3JzfnBhZ2UtcmVjb3JkfnBhZ2Utc2VhcmNoLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlclNwaW5uZXJCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogRGlzcGxheXMgdGhlIHNwaW5uZXIuXG4gICAgICovXG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfX2FjdGl2ZUNoYW5nZWQnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFsdGVybmF0aXZlIHRleHQgY29udGVudCBmb3IgYWNjZXNzaWJpbGl0eSBzdXBwb3J0LlxuICAgICAqIElmIGFsdCBpcyBwcmVzZW50LCBpdCB3aWxsIGFkZCBhbiBhcmlhLWxhYmVsIHdob3NlIGNvbnRlbnQgbWF0Y2hlcyBhbHRcbiAgICAgKiB3aGVuIGFjdGl2ZS4gSWYgYWx0IGlzIG5vdCBwcmVzZW50LCBpdCB3aWxsIGRlZmF1bHQgdG8gJ2xvYWRpbmcnIGFzIHRoZVxuICAgICAqIGFsdCB2YWx1ZS5cbiAgICAgKi9cbiAgICBhbHQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnbG9hZGluZycsIG9ic2VydmVyOiAnX19hbHRDaGFuZ2VkJ30sXG5cbiAgICBfX2Nvb2xpbmdEb3duOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfVxuICB9LFxuXG4gIF9fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXM6IGZ1bmN0aW9uKGFjdGl2ZSwgY29vbGluZ0Rvd24pIHtcbiAgICByZXR1cm4gW1xuICAgICAgYWN0aXZlIHx8IGNvb2xpbmdEb3duID8gJ2FjdGl2ZScgOiAnJyxcbiAgICAgIGNvb2xpbmdEb3duID8gJ2Nvb2xkb3duJyA6ICcnXG4gICAgXS5qb2luKCcgJyk7XG4gIH0sXG5cbiAgX19hY3RpdmVDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmUsIG9sZCkge1xuICAgIHRoaXMuX19zZXRBcmlhSGlkZGVuKCFhY3RpdmUpO1xuICAgIHRoaXMuX19jb29saW5nRG93biA9ICFhY3RpdmUgJiYgb2xkO1xuICB9LFxuXG4gIF9fYWx0Q2hhbmdlZDogZnVuY3Rpb24oYWx0KSB7XG4gICAgLy8gdXNlci1wcm92aWRlZCBgYXJpYS1sYWJlbGAgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHByb3RvdHlwZSBkZWZhdWx0XG4gICAgaWYgKGFsdCA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICB0aGlzLmFsdCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgYWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9fc2V0QXJpYUhpZGRlbihhbHQgPT09ICcnKTtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgYWx0KTtcbiAgICB9XG4gIH0sXG5cbiAgX19zZXRBcmlhSGlkZGVuOiBmdW5jdGlvbihoaWRkZW4pIHtcbiAgICB2YXIgYXR0ciA9ICdhcmlhLWhpZGRlbic7XG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ciwgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgfVxuICB9LFxuXG4gIF9fcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fX2Nvb2xpbmdEb3duID0gZmFsc2U7XG4gIH1cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItc3Bpbm5lci1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVyU3Bpbm5lckJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj48L3N0eWxlPlxuXG4gIDxkaXYgaWQ9XCJzcGlubmVyQ29udGFpbmVyXCIgY2xhc3MtbmFtZT1cIltbX19jb21wdXRlQ29udGFpbmVyQ2xhc3NlcyhhY3RpdmUsIF9fY29vbGluZ0Rvd24pXV1cIiBvbi1hbmltYXRpb25lbmQ9XCJfX3Jlc2V0XCIgb24td2Via2l0LWFuaW1hdGlvbi1lbmQ9XCJfX3Jlc2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHJpcC13aGl0ZXNwYWNlJywgJycpO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1Byb2dyZXNzICZcbmFjdGl2aXR5XShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYWN0aXZpdHkuaHRtbClcblxuRWxlbWVudCBwcm92aWRpbmcgYSBzaW5nbGUgY29sb3IgbWF0ZXJpYWwgZGVzaWduIGNpcmN1bGFyIHNwaW5uZXIuXG5cbiAgICA8cGFwZXItc3Bpbm5lci1saXRlIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXItbGl0ZT5cblxuVGhlIGRlZmF1bHQgc3Bpbm5lciBpcyBibHVlLiBJdCBjYW4gYmUgY3VzdG9taXplZCB0byBiZSBhIGRpZmZlcmVudCBjb2xvci5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQWx0IGF0dHJpYnV0ZSBzaG91bGQgYmUgc2V0IHRvIHByb3ZpZGUgYWRlcXVhdGUgY29udGV4dCBmb3IgYWNjZXNzaWJpbGl0eS4gSWZcbm5vdCBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG8gJ2xvYWRpbmcnLiBFbXB0eSBhbHQgY2FuIGJlIHByb3ZpZGVkIHRvIG1hcmsgdGhlXG5lbGVtZW50IGFzIGRlY29yYXRpdmUgaWYgYWx0ZXJuYXRpdmUgY29udGVudCBpcyBwcm92aWRlZCBpbiBhbm90aGVyIGZvcm0gKGUuZy4gYVxudGV4dCBibG9jayBmb2xsb3dpbmcgdGhlIHNwaW5uZXIpLlxuXG4gICAgPHBhcGVyLXNwaW5uZXItbGl0ZSBhbHQ9XCJMb2FkaW5nIGNvbnRhY3RzIGxpc3RcIiBhY3RpdmU+PC9wYXBlci1zcGlubmVyLWxpdGU+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1zcGlubmVyLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBzcGlubmVyIHwgYC0tZ29vZ2xlLWJsdWUtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGhgIHwgVGhlIHdpZHRoIG9mIHRoZSBzcGlubmVyIHN0cm9rZSB8IDNweFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXNwaW5uZXItbGl0ZVxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItc3Bpbm5lci1saXRlJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlclNwaW5uZXJCZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cInBhcGVyLXNwaW5uZXItc3R5bGVzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAvKlxuICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgLyogU1RZTEVTIEZPUiBUSEUgU1BJTk5FUiAqL1xuICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAvKlxuICAgICAgICogQ29uc3RhbnRzOlxuICAgICAgICogICAgICBBUkNTSVpFICAgICA9IDI3MCBkZWdyZWVzIChhbW91bnQgb2YgY2lyY2xlIHRoZSBhcmMgdGFrZXMgdXApXG4gICAgICAgKiAgICAgIEFSQ1RJTUUgICAgID0gMTMzM21zICh0aW1lIGl0IHRha2VzIHRvIGV4cGFuZCBhbmQgY29udHJhY3QgYXJjKVxuICAgICAgICogICAgICBBUkNTVEFSVFJPVCA9IDIxNiBkZWdyZWVzIChob3cgbXVjaCB0aGUgc3RhcnQgbG9jYXRpb24gb2YgdGhlIGFyY1xuICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZCByb3RhdGUgZWFjaCB0aW1lLCAyMTYgZ2l2ZXMgdXMgYVxuICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUgcG9pbnRlZCBzdGFyIHNoYXBlIChpdCdzIDM2MC81ICogMykuXG4gICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIGEgNyBwb2ludGVkIHN0YXIsIHdlIG1pZ2h0IGRvXG4gICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzYwLzcgKiAzID0gMTU0LjI4NilcbiAgICAgICAqICAgICAgU0hSSU5LX1RJTUUgPSA0MDBtc1xuICAgICAgICovXG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG5cbiAgICAgICAgLyogMzYwICogQVJDVElNRSAvIChBUkNTVEFSVFJPVCArICgzNjAtQVJDU0laRSkpICovXG4gICAgICAgIC0tcGFwZXItc3Bpbm5lci1jb250YWluZXItcm90YXRpb24tZHVyYXRpb246IDE1NjhtcztcblxuICAgICAgICAvKiBBUkNUSU1FICovXG4gICAgICAgIC0tcGFwZXItc3Bpbm5lci1leHBhbmQtY29udHJhY3QtZHVyYXRpb246IDEzMzNtcztcblxuICAgICAgICAvKiA0ICogQVJDVElNRSAqL1xuICAgICAgICAtLXBhcGVyLXNwaW5uZXItZnVsbC1jeWNsZS1kdXJhdGlvbjogNTMzMm1zO1xuXG4gICAgICAgIC8qIFNIUklOS19USU1FICovXG4gICAgICAgIC0tcGFwZXItc3Bpbm5lci1jb29sZG93bi1kdXJhdGlvbjogNDAwbXM7XG4gICAgICB9XG5cbiAgICAgICNzcGlubmVyQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAvKiBUaGUgc3Bpbm5lciBkb2VzIG5vdCBoYXZlIGFueSBjb250ZW50cyB0aGF0IHdvdWxkIGhhdmUgdG8gYmVcbiAgICAgICAgICogZmxpcHBlZCBpZiB0aGUgZGlyZWN0aW9uIGNoYW5nZXMuIEFsd2F5cyB1c2UgbHRyIHNvIHRoYXQgdGhlXG4gICAgICAgICAqIHN0eWxlIHdvcmtzIG91dCBjb3JyZWN0bHkgaW4gYm90aCBjYXNlcy4gKi9cbiAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICB9XG5cbiAgICAgICNzcGlubmVyQ29udGFpbmVyLmFjdGl2ZSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjb250YWluZXItcm90YXRlIHZhcigtLXBhcGVyLXNwaW5uZXItY29udGFpbmVyLXJvdGF0aW9uLWR1cmF0aW9uKSBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbjogY29udGFpbmVyLXJvdGF0ZSB2YXIoLS1wYXBlci1zcGlubmVyLWNvbnRhaW5lci1yb3RhdGlvbi1kdXJhdGlvbikgbGluZWFyIGluZmluaXRlO1xuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgY29udGFpbmVyLXJvdGF0ZSB7XG4gICAgICAgIHRvIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBjb250YWluZXItcm90YXRlIHtcbiAgICAgICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH1cbiAgICAgIH1cblxuICAgICAgLnNwaW5uZXItbGF5ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1zcGlubmVyLWNvbG9yLCB2YXIoLS1nb29nbGUtYmx1ZS01MDApKTtcbiAgICAgIH1cblxuICAgICAgLmxheWVyLTEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItc3Bpbm5lci1sYXllci0xLWNvbG9yLCB2YXIoLS1nb29nbGUtYmx1ZS01MDApKTtcbiAgICAgIH1cblxuICAgICAgLmxheWVyLTIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItc3Bpbm5lci1sYXllci0yLWNvbG9yLCB2YXIoLS1nb29nbGUtcmVkLTUwMCkpO1xuICAgICAgfVxuXG4gICAgICAubGF5ZXItMyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1zcGlubmVyLWxheWVyLTMtY29sb3IsIHZhcigtLWdvb2dsZS15ZWxsb3ctNTAwKSk7XG4gICAgICB9XG5cbiAgICAgIC5sYXllci00IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLXNwaW5uZXItbGF5ZXItNC1jb2xvciwgdmFyKC0tZ29vZ2xlLWdyZWVuLTUwMCkpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIElNUE9SVEFOVCBOT1RFIEFCT1VUIENTUyBBTklNQVRJT04gUFJPUEVSVElFUyAoa2VhbnVsZWUpOlxuICAgICAgICpcbiAgICAgICAqIGlPUyBTYWZhcmkgKHRlc3RlZCBvbiBpT1MgOC4xKSBkb2VzIG5vdCBoYW5kbGUgYW5pbWF0aW9uLWRlbGF5IHZlcnkgd2VsbCAtIGl0IGRvZXNuJ3RcbiAgICAgICAqIGd1YXJhbnRlZSB0aGF0IHRoZSBhbmltYXRpb24gd2lsbCBzdGFydCBfZXhhY3RseV8gYWZ0ZXIgdGhhdCB2YWx1ZS4gU28gd2UgYXZvaWQgdXNpbmdcbiAgICAgICAqIGFuaW1hdGlvbi1kZWxheSBhbmQgaW5zdGVhZCBzZXQgY3VzdG9tIGtleWZyYW1lcyBmb3IgZWFjaCBjb2xvciAoYXMgbGF5ZXItMnVuZGFudCBhcyBpdFxuICAgICAgICogc2VlbXMpLlxuICAgICAgICovXG4gICAgICAuYWN0aXZlIC5zcGlubmVyLWxheWVyIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmlsbC11bmZpbGwtcm90YXRlO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItc3Bpbm5lci1mdWxsLWN5Y2xlLWR1cmF0aW9uKTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSk7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmaWxsLXVuZmlsbC1yb3RhdGU7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItc3Bpbm5lci1mdWxsLWN5Y2xlLWR1cmF0aW9uKTtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZSAuc3Bpbm5lci1sYXllci5sYXllci0xIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmlsbC11bmZpbGwtcm90YXRlLCBsYXllci0xLWZhZGUtaW4tb3V0O1xuICAgICAgICBhbmltYXRpb24tbmFtZTogZmlsbC11bmZpbGwtcm90YXRlLCBsYXllci0xLWZhZGUtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAuYWN0aXZlIC5zcGlubmVyLWxheWVyLmxheWVyLTIge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmaWxsLXVuZmlsbC1yb3RhdGUsIGxheWVyLTItZmFkZS1pbi1vdXQ7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmaWxsLXVuZmlsbC1yb3RhdGUsIGxheWVyLTItZmFkZS1pbi1vdXQ7XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmUgLnNwaW5uZXItbGF5ZXIubGF5ZXItMyB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZpbGwtdW5maWxsLXJvdGF0ZSwgbGF5ZXItMy1mYWRlLWluLW91dDtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZpbGwtdW5maWxsLXJvdGF0ZSwgbGF5ZXItMy1mYWRlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZSAuc3Bpbm5lci1sYXllci5sYXllci00IHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmlsbC11bmZpbGwtcm90YXRlLCBsYXllci00LWZhZGUtaW4tb3V0O1xuICAgICAgICBhbmltYXRpb24tbmFtZTogZmlsbC11bmZpbGwtcm90YXRlLCBsYXllci00LWZhZGUtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmlsbC11bmZpbGwtcm90YXRlIHtcbiAgICAgICAgMTIuNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZykgfSAvKiAwLjUgKiBBUkNTSVpFICovXG4gICAgICAgIDI1JSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpIH0gLyogMSAgICogQVJDU0laRSAqL1xuICAgICAgICAzNy41JSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKSB9IC8qIDEuNSAqIEFSQ1NJWkUgKi9cbiAgICAgICAgNTAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDU0MGRlZykgfSAvKiAyICAgKiBBUkNTSVpFICovXG4gICAgICAgIDYyLjUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2NzVkZWcpIH0gLyogMi41ICogQVJDU0laRSAqL1xuICAgICAgICA3NSUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoODEwZGVnKSB9IC8qIDMgICAqIEFSQ1NJWkUgKi9cbiAgICAgICAgODcuNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDk0NWRlZykgfSAvKiAzLjUgKiBBUkNTSVpFICovXG4gICAgICAgIHRvICAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMDgwZGVnKSB9IC8qIDQgICAqIEFSQ1NJWkUgKi9cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBmaWxsLXVuZmlsbC1yb3RhdGUge1xuICAgICAgICAxMi41JSB7IHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZykgfSAvKiAwLjUgKiBBUkNTSVpFICovXG4gICAgICAgIDI1JSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKSB9IC8qIDEgICAqIEFSQ1NJWkUgKi9cbiAgICAgICAgMzcuNSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg0MDVkZWcpIH0gLyogMS41ICogQVJDU0laRSAqL1xuICAgICAgICA1MCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDU0MGRlZykgfSAvKiAyICAgKiBBUkNTSVpFICovXG4gICAgICAgIDYyLjUlIHsgdHJhbnNmb3JtOiByb3RhdGUoNjc1ZGVnKSB9IC8qIDIuNSAqIEFSQ1NJWkUgKi9cbiAgICAgICAgNzUlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSg4MTBkZWcpIH0gLyogMyAgICogQVJDU0laRSAqL1xuICAgICAgICA4Ny41JSB7IHRyYW5zZm9ybTogcm90YXRlKDk0NWRlZykgfSAvKiAzLjUgKiBBUkNTSVpFICovXG4gICAgICAgIHRvICAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMTA4MGRlZykgfSAvKiA0ICAgKiBBUkNTSVpFICovXG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBsYXllci0xLWZhZGUtaW4tb3V0IHtcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgMjUlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDI2JSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICA4OSUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgOTAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMSB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgbGF5ZXItMS1mYWRlLWluLW91dCB7XG4gICAgICAgIDAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDI1JSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICAyNiUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgODklIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDkwJSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICB0byB7IG9wYWNpdHk6IDEgfVxuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbGF5ZXItMi1mYWRlLWluLW91dCB7XG4gICAgICAgIDAlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDE1JSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICAyNSUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgNTAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDUxJSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICB0byB7IG9wYWNpdHk6IDAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGxheWVyLTItZmFkZS1pbi1vdXQge1xuICAgICAgICAwJSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICAxNSUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgMjUlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDUwJSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICA1MSUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAwIH1cbiAgICAgIH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGxheWVyLTMtZmFkZS1pbi1vdXQge1xuICAgICAgICAwJSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICA0MCUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgNTAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDc1JSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICA3NiUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAwIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBsYXllci0zLWZhZGUtaW4tb3V0IHtcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgNDAlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDUwJSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICA3NSUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgNzYlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMCB9XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBsYXllci00LWZhZGUtaW4tb3V0IHtcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgNjUlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDc1JSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICA5MCUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAwIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBsYXllci00LWZhZGUtaW4tb3V0IHtcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgNjUlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDc1JSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICA5MCUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAwIH1cbiAgICAgIH1cblxuICAgICAgLmNpcmNsZS1jbGlwcGVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBQYXRjaCB0aGUgZ2FwIHRoYXQgYXBwZWFyIGJldHdlZW4gdGhlIHR3byBhZGphY2VudCBkaXYuY2lyY2xlLWNsaXBwZXIgd2hpbGUgdGhlXG4gICAgICAgKiBzcGlubmVyIGlzIHJvdGF0aW5nIChhcHBlYXJzIG9uIENocm9tZSA1MCwgU2FmYXJpIDkuMS4xLCBhbmQgRWRnZSkuXG4gICAgICAgKi9cbiAgICAgIC5zcGlubmVyLWxheWVyOjphZnRlciB7XG4gICAgICAgIGxlZnQ6IDQ1JTtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gICAgICB9XG5cbiAgICAgIC5zcGlubmVyLWxheWVyOjphZnRlcixcbiAgICAgIC5jaXJjbGUtY2xpcHBlcjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvcmRlci13aWR0aDogdmFyKC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGgsIDNweCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cblxuICAgICAgLmNpcmNsZS1jbGlwcGVyOjphZnRlciB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDIwMCU7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtY2xpcHBlci5sZWZ0OjphZnRlciB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjlkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjlkZWcpO1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLWNsaXBwZXIucmlnaHQ6OmFmdGVyIHtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMjlkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTI5ZGVnKTtcbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZSAuZ2FwLXBhdGNoOjphZnRlcixcbiAgICAgIC5hY3RpdmUgLmNpcmNsZS1jbGlwcGVyOjphZnRlciB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1zcGlubmVyLWV4cGFuZC1jb250cmFjdC1kdXJhdGlvbik7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLXNwaW5uZXItZXhwYW5kLWNvbnRyYWN0LWR1cmF0aW9uKTtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZSAuY2lyY2xlLWNsaXBwZXIubGVmdDo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsZWZ0LXNwaW47XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBsZWZ0LXNwaW47XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmUgLmNpcmNsZS1jbGlwcGVyLnJpZ2h0OjphZnRlciB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJpZ2h0LXNwaW47XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiByaWdodC1zcGluO1xuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbGVmdC1zcGluIHtcbiAgICAgICAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZykgfVxuICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKSB9XG4gICAgICAgIHRvIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBsZWZ0LXNwaW4ge1xuICAgICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZykgfVxuICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZykgfVxuICAgICAgICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZykgfVxuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcmlnaHQtc3BpbiB7XG4gICAgICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKSB9XG4gICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNWRlZykgfVxuICAgICAgICB0byB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZykgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHJpZ2h0LXNwaW4ge1xuICAgICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpIH1cbiAgICAgICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoNWRlZykgfVxuICAgICAgICB0byB7IHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpIH1cbiAgICAgIH1cblxuICAgICAgI3NwaW5uZXJDb250YWluZXIuY29vbGRvd24ge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogY29udGFpbmVyLXJvdGF0ZSB2YXIoLS1wYXBlci1zcGlubmVyLWNvbnRhaW5lci1yb3RhdGlvbi1kdXJhdGlvbikgbGluZWFyIGluZmluaXRlLCBmYWRlLW91dCB2YXIoLS1wYXBlci1zcGlubmVyLWNvb2xkb3duLWR1cmF0aW9uKSBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSk7XG4gICAgICAgIGFuaW1hdGlvbjogY29udGFpbmVyLXJvdGF0ZSB2YXIoLS1wYXBlci1zcGlubmVyLWNvbnRhaW5lci1yb3RhdGlvbi1kdXJhdGlvbikgbGluZWFyIGluZmluaXRlLCBmYWRlLW91dCB2YXIoLS1wYXBlci1zcGlubmVyLWNvb2xkb3duLWR1cmF0aW9uKSBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSk7XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlLW91dCB7XG4gICAgICAgIDAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMCB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAgICAgICAwJSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICB0byB7IG9wYWNpdHk6IDAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLy8gc3VwZXIgc2ltcGxlIG1vZHVsZSBmb3IgdGhlIG1vc3QgY29tbW9uIG5vZGVqcyB1c2UgY2FzZS5cbmV4cG9ydHMubWFya2Rvd24gPSByZXF1aXJlKFwiLi9tYXJrZG93blwiKTtcbmV4cG9ydHMucGFyc2UgPSBleHBvcnRzLm1hcmtkb3duLnRvSFRNTDtcbiIsIi8vIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4vLyBDb3B5cmlnaHQgKGMpIDIwMDktMjAxMCBEb21pbmljIEJhZ2dvdHRcbi8vIENvcHlyaWdodCAoYykgMjAwOS0yMDEwIEFzaCBCZXJsaW5cbi8vIENvcHlyaWdodCAoYykgMjAxMSBDaHJpc3RvcGggRG9ybiA8Y2hyaXN0b3BoQGNocmlzdG9waGRvcm4uY29tPiAoaHR0cDovL3d3dy5jaHJpc3RvcGhkb3JuLmNvbSlcblxuLypqc2hpbnQgYnJvd3Nlcjp0cnVlLCBkZXZlbDp0cnVlICovXG5cbihmdW5jdGlvbiggZXhwb3NlICkge1xuXG4vKipcbiAqICBjbGFzcyBNYXJrZG93blxuICpcbiAqICBNYXJrZG93biBwcm9jZXNzaW5nIGluIEphdmFzY3JpcHQgZG9uZSByaWdodC4gV2UgaGF2ZSB2ZXJ5IHBhcnRpY3VsYXIgdmlld3NcbiAqICBvbiB3aGF0IGNvbnN0aXR1dGVzICdyaWdodCcgd2hpY2ggaW5jbHVkZTpcbiAqXG4gKiAgLSBwcm9kdWNlcyB3ZWxsLWZvcm1lZCBIVE1MICh0aGlzIG1lYW5zIHRoYXQgZW0gYW5kIHN0cm9uZyBuZXN0aW5nIGlzXG4gKiAgICBpbXBvcnRhbnQpXG4gKlxuICogIC0gaGFzIGFuIGludGVybWVkaWF0ZSByZXByZXNlbnRhdGlvbiB0byBhbGxvdyBwcm9jZXNzaW5nIG9mIHBhcnNlZCBkYXRhIChXZVxuICogICAgaW4gZmFjdCBoYXZlIHR3bywgYm90aCBhcyBbSnNvbk1MXTogYSBtYXJrZG93biB0cmVlIGFuZCBhbiBIVE1MIHRyZWUpLlxuICpcbiAqICAtIGlzIGVhc2lseSBleHRlbnNpYmxlIHRvIGFkZCBuZXcgZGlhbGVjdHMgd2l0aG91dCBoYXZpbmcgdG8gcmV3cml0ZSB0aGVcbiAqICAgIGVudGlyZSBwYXJzaW5nIG1lY2hhbmljc1xuICpcbiAqICAtIGhhcyBhIGdvb2QgdGVzdCBzdWl0ZVxuICpcbiAqICBUaGlzIGltcGxlbWVudGF0aW9uIGZ1bGZpbGxzIGFsbCBvZiB0aGVzZSAoZXhjZXB0IHRoYXQgdGhlIHRlc3Qgc3VpdGUgY291bGRcbiAqICBkbyB3aXRoIGV4cGFuZGluZyB0byBhdXRvbWF0aWNhbGx5IHJ1biBhbGwgdGhlIGZpeHR1cmVzIGZyb20gb3RoZXIgTWFya2Rvd25cbiAqICBpbXBsZW1lbnRhdGlvbnMuKVxuICpcbiAqICAjIyMjIyBJbnRlcm1lZGlhdGUgUmVwcmVzZW50YXRpb25cbiAqXG4gKiAgKlRPRE8qIFRhbGsgYWJvdXQgdGhpcyA6KSBJdHMgSnNvbk1MLCBidXQgZG9jdW1lbnQgdGhlIG5vZGUgbmFtZXMgd2UgdXNlLlxuICpcbiAqICBbSnNvbk1MXTogaHR0cDovL2pzb25tbC5vcmcvIFwiSlNPTiBNYXJrdXAgTGFuZ3VhZ2VcIlxuICoqL1xudmFyIE1hcmtkb3duID0gZXhwb3NlLk1hcmtkb3duID0gZnVuY3Rpb24oZGlhbGVjdCkge1xuICBzd2l0Y2ggKHR5cGVvZiBkaWFsZWN0KSB7XG4gICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgdGhpcy5kaWFsZWN0ID0gTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgdGhpcy5kaWFsZWN0ID0gZGlhbGVjdDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoIGRpYWxlY3QgaW4gTWFya2Rvd24uZGlhbGVjdHMgKSB7XG4gICAgICAgIHRoaXMuZGlhbGVjdCA9IE1hcmtkb3duLmRpYWxlY3RzW2RpYWxlY3RdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gTWFya2Rvd24gZGlhbGVjdCAnXCIgKyBTdHJpbmcoZGlhbGVjdCkgKyBcIidcIik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxuICB0aGlzLmVtX3N0YXRlID0gW107XG4gIHRoaXMuc3Ryb25nX3N0YXRlID0gW107XG4gIHRoaXMuZGVidWdfaW5kZW50ID0gXCJcIjtcbn07XG5cbi8qKlxuICogIHBhcnNlKCBtYXJrZG93biwgW2RpYWxlY3RdICkgLT4gSnNvbk1MXG4gKiAgLSBtYXJrZG93biAoU3RyaW5nKTogbWFya2Rvd24gc3RyaW5nIHRvIHBhcnNlXG4gKiAgLSBkaWFsZWN0IChTdHJpbmcgfCBEaWFsZWN0KTogdGhlIGRpYWxlY3QgdG8gdXNlLCBkZWZhdWx0cyB0byBncnViZXJcbiAqXG4gKiAgUGFyc2UgYG1hcmtkb3duYCBhbmQgcmV0dXJuIGEgbWFya2Rvd24gZG9jdW1lbnQgYXMgYSBNYXJrZG93bi5Kc29uTUwgdHJlZS5cbiAqKi9cbmV4cG9zZS5wYXJzZSA9IGZ1bmN0aW9uKCBzb3VyY2UsIGRpYWxlY3QgKSB7XG4gIC8vIGRpYWxlY3Qgd2lsbCBkZWZhdWx0IGlmIHVuZGVmaW5lZFxuICB2YXIgbWQgPSBuZXcgTWFya2Rvd24oIGRpYWxlY3QgKTtcbiAgcmV0dXJuIG1kLnRvVHJlZSggc291cmNlICk7XG59O1xuXG4vKipcbiAqICB0b0hUTUwoIG1hcmtkb3duLCBbZGlhbGVjdF0gICkgLT4gU3RyaW5nXG4gKiAgdG9IVE1MKCBtZF90cmVlICkgLT4gU3RyaW5nXG4gKiAgLSBtYXJrZG93biAoU3RyaW5nKTogbWFya2Rvd24gc3RyaW5nIHRvIHBhcnNlXG4gKiAgLSBtZF90cmVlIChNYXJrZG93bi5Kc29uTUwpOiBwYXJzZWQgbWFya2Rvd24gdHJlZVxuICpcbiAqICBUYWtlIG1hcmtkb3duIChlaXRoZXIgYXMgYSBzdHJpbmcgb3IgYXMgYSBKc29uTUwgdHJlZSkgYW5kIHJ1biBpdCB0aHJvdWdoXG4gKiAgW1t0b0hUTUxUcmVlXV0gdGhlbiB0dXJuIGl0IGludG8gYSB3ZWxsLWZvcm1hdGVkIEhUTUwgZnJhZ21lbnQuXG4gKiovXG5leHBvc2UudG9IVE1MID0gZnVuY3Rpb24gdG9IVE1MKCBzb3VyY2UgLCBkaWFsZWN0ICwgb3B0aW9ucyApIHtcbiAgdmFyIGlucHV0ID0gZXhwb3NlLnRvSFRNTFRyZWUoIHNvdXJjZSAsIGRpYWxlY3QgLCBvcHRpb25zICk7XG5cbiAgcmV0dXJuIGV4cG9zZS5yZW5kZXJKc29uTUwoIGlucHV0ICk7XG59O1xuXG4vKipcbiAqICB0b0hUTUxUcmVlKCBtYXJrZG93biwgW2RpYWxlY3RdICkgLT4gSnNvbk1MXG4gKiAgdG9IVE1MVHJlZSggbWRfdHJlZSApIC0+IEpzb25NTFxuICogIC0gbWFya2Rvd24gKFN0cmluZyk6IG1hcmtkb3duIHN0cmluZyB0byBwYXJzZVxuICogIC0gZGlhbGVjdCAoU3RyaW5nIHwgRGlhbGVjdCk6IHRoZSBkaWFsZWN0IHRvIHVzZSwgZGVmYXVsdHMgdG8gZ3J1YmVyXG4gKiAgLSBtZF90cmVlIChNYXJrZG93bi5Kc29uTUwpOiBwYXJzZWQgbWFya2Rvd24gdHJlZVxuICpcbiAqICBUdXJuIG1hcmtkb3duIGludG8gSFRNTCwgcmVwcmVzZW50ZWQgYXMgYSBKc29uTUwgdHJlZS4gSWYgYSBzdHJpbmcgaXMgZ2l2ZW5cbiAqICB0byB0aGlzIGZ1bmN0aW9uLCBpdCBpcyBmaXJzdCBwYXJzZWQgaW50byBhIG1hcmtkb3duIHRyZWUgYnkgY2FsbGluZ1xuICogIFtbcGFyc2VdXS5cbiAqKi9cbmV4cG9zZS50b0hUTUxUcmVlID0gZnVuY3Rpb24gdG9IVE1MVHJlZSggaW5wdXQsIGRpYWxlY3QgLCBvcHRpb25zICkge1xuICAvLyBjb252ZXJ0IHN0cmluZyBpbnB1dCB0byBhbiBNRCB0cmVlXG4gIGlmICggdHlwZW9mIGlucHV0ID09PVwic3RyaW5nXCIgKSBpbnB1dCA9IHRoaXMucGFyc2UoIGlucHV0LCBkaWFsZWN0ICk7XG5cbiAgLy8gTm93IGNvbnZlcnQgdGhlIE1EIHRyZWUgdG8gYW4gSFRNTCB0cmVlXG5cbiAgLy8gcmVtb3ZlIHJlZmVyZW5jZXMgZnJvbSB0aGUgdHJlZVxuICB2YXIgYXR0cnMgPSBleHRyYWN0X2F0dHIoIGlucHV0ICksXG4gICAgICByZWZzID0ge307XG5cbiAgaWYgKCBhdHRycyAmJiBhdHRycy5yZWZlcmVuY2VzICkge1xuICAgIHJlZnMgPSBhdHRycy5yZWZlcmVuY2VzO1xuICB9XG5cbiAgdmFyIGh0bWwgPSBjb252ZXJ0X3RyZWVfdG9faHRtbCggaW5wdXQsIHJlZnMgLCBvcHRpb25zICk7XG4gIG1lcmdlX3RleHRfbm9kZXMoIGh0bWwgKTtcbiAgcmV0dXJuIGh0bWw7XG59O1xuXG4vLyBGb3IgU3BpZGVybW9ua2V5IGJhc2VkIGVuZ2luZXNcbmZ1bmN0aW9uIG1rX2Jsb2NrX3RvU291cmNlKCkge1xuICByZXR1cm4gXCJNYXJrZG93bi5ta19ibG9jayggXCIgK1xuICAgICAgICAgIHVuZXZhbCh0aGlzLnRvU3RyaW5nKCkpICtcbiAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgIHVuZXZhbCh0aGlzLnRyYWlsaW5nKSArXG4gICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICB1bmV2YWwodGhpcy5saW5lTnVtYmVyKSArXG4gICAgICAgICAgXCIgKVwiO1xufVxuXG4vLyBub2RlXG5mdW5jdGlvbiBta19ibG9ja19pbnNwZWN0KCkge1xuICB2YXIgdXRpbCA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuICByZXR1cm4gXCJNYXJrZG93bi5ta19ibG9jayggXCIgK1xuICAgICAgICAgIHV0aWwuaW5zcGVjdCh0aGlzLnRvU3RyaW5nKCkpICtcbiAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgIHV0aWwuaW5zcGVjdCh0aGlzLnRyYWlsaW5nKSArXG4gICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICB1dGlsLmluc3BlY3QodGhpcy5saW5lTnVtYmVyKSArXG4gICAgICAgICAgXCIgKVwiO1xuXG59XG5cbnZhciBta19ibG9jayA9IE1hcmtkb3duLm1rX2Jsb2NrID0gZnVuY3Rpb24oYmxvY2ssIHRyYWlsLCBsaW5lKSB7XG4gIC8vIEJlIGhlbHBmdWwgZm9yIGRlZmF1bHQgY2FzZSBpbiB0ZXN0cy5cbiAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID09IDEgKSB0cmFpbCA9IFwiXFxuXFxuXCI7XG5cbiAgdmFyIHMgPSBuZXcgU3RyaW5nKGJsb2NrKTtcbiAgcy50cmFpbGluZyA9IHRyYWlsO1xuICAvLyBUbyBtYWtlIGl0IGNsZWFyIGl0cyBub3QganVzdCBhIHN0cmluZ1xuICBzLmluc3BlY3QgPSBta19ibG9ja19pbnNwZWN0O1xuICBzLnRvU291cmNlID0gbWtfYmxvY2tfdG9Tb3VyY2U7XG5cbiAgaWYgKCBsaW5lICE9IHVuZGVmaW5lZCApXG4gICAgcy5saW5lTnVtYmVyID0gbGluZTtcblxuICByZXR1cm4gcztcbn07XG5cbmZ1bmN0aW9uIGNvdW50X2xpbmVzKCBzdHIgKSB7XG4gIHZhciBuID0gMCwgaSA9IC0xO1xuICB3aGlsZSAoICggaSA9IHN0ci5pbmRleE9mKFwiXFxuXCIsIGkgKyAxKSApICE9PSAtMSApIG4rKztcbiAgcmV0dXJuIG47XG59XG5cbi8vIEludGVybmFsIC0gc3BsaXQgc291cmNlIGludG8gcm91Z2ggYmxvY2tzXG5NYXJrZG93bi5wcm90b3R5cGUuc3BsaXRfYmxvY2tzID0gZnVuY3Rpb24gc3BsaXRCbG9ja3MoIGlucHV0LCBzdGFydExpbmUgKSB7XG4gIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nLCBcIlxcblwiKTtcbiAgLy8gW1xcc1xcU10gbWF0Y2hlcyBfYW55dGhpbmdfIChuZXdsaW5lIG9yIHNwYWNlKVxuICAvLyBbXl0gaXMgZXF1aXZhbGVudCBidXQgZG9lc24ndCB3b3JrIGluIElFcy5cbiAgdmFyIHJlID0gLyhbXFxzXFxTXSs/KSgkfFxcbiN8XFxuKD86XFxzKlxcbnwkKSspL2csXG4gICAgICBibG9ja3MgPSBbXSxcbiAgICAgIG07XG5cbiAgdmFyIGxpbmVfbm8gPSAxO1xuXG4gIGlmICggKCBtID0gL14oXFxzKlxcbikvLmV4ZWMoaW5wdXQpICkgIT0gbnVsbCApIHtcbiAgICAvLyBza2lwIChidXQgY291bnQpIGxlYWRpbmcgYmxhbmsgbGluZXNcbiAgICBsaW5lX25vICs9IGNvdW50X2xpbmVzKCBtWzBdICk7XG4gICAgcmUubGFzdEluZGV4ID0gbVswXS5sZW5ndGg7XG4gIH1cblxuICB3aGlsZSAoICggbSA9IHJlLmV4ZWMoaW5wdXQpICkgIT09IG51bGwgKSB7XG4gICAgaWYgKG1bMl0gPT0gXCJcXG4jXCIpIHtcbiAgICAgIG1bMl0gPSBcIlxcblwiO1xuICAgICAgcmUubGFzdEluZGV4LS07XG4gICAgfVxuICAgIGJsb2Nrcy5wdXNoKCBta19ibG9jayggbVsxXSwgbVsyXSwgbGluZV9ubyApICk7XG4gICAgbGluZV9ubyArPSBjb3VudF9saW5lcyggbVswXSApO1xuICB9XG5cbiAgcmV0dXJuIGJsb2Nrcztcbn07XG5cbi8qKlxuICogIE1hcmtkb3duI3Byb2Nlc3NCbG9jayggYmxvY2ssIG5leHQgKSAtPiB1bmRlZmluZWQgfCBbIEpzb25NTCwgLi4uIF1cbiAqICAtIGJsb2NrIChTdHJpbmcpOiB0aGUgYmxvY2sgdG8gcHJvY2Vzc1xuICogIC0gbmV4dCAoQXJyYXkpOiB0aGUgZm9sbG93aW5nIGJsb2Nrc1xuICpcbiAqIFByb2Nlc3MgYGJsb2NrYCBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIEpzb25NTCBub2RlcyByZXByZXNlbnRpbmcgYGJsb2NrYC5cbiAqXG4gKiBJdCBkb2VzIHRoaXMgYnkgYXNraW5nIGVhY2ggYmxvY2sgbGV2ZWwgZnVuY3Rpb24gaW4gdGhlIGRpYWxlY3QgdG8gcHJvY2Vzc1xuICogdGhlIGJsb2NrIHVudGlsIG9uZSBjYW4uIFN1Y2Nlc2Z1bCBoYW5kbGluZyBpcyBpbmRpY2F0ZWQgYnkgcmV0dXJuaW5nIGFuXG4gKiBhcnJheSAod2l0aCB6ZXJvIG9yIG1vcmUgSnNvbk1MIG5vZGVzKSwgZmFpbHVyZSBieSBhIGZhbHNlIHZhbHVlLlxuICpcbiAqIEJsb2NrcyBoYW5kbGVycyBhcmUgcmVzcG9uc2libGUgZm9yIGNhbGxpbmcgW1tNYXJrZG93biNwcm9jZXNzSW5saW5lXV1cbiAqIHRoZW1zZWx2ZXMgYXMgYXBwcm9wcmlhdGUuXG4gKlxuICogSWYgdGhlIGJsb2NrcyB3ZXJlIHNwbGl0IGluY29ycmVjdGx5IG9yIGFkamFjZW50IGJsb2NrcyBuZWVkIGNvbGxhcHNpbmcgeW91XG4gKiBjYW4gYWRqdXN0IGBuZXh0YCBpbiBwbGFjZSB1c2luZyBzaGlmdC9zcGxpY2UgZXRjLlxuICpcbiAqIElmIGFueSBvZiB0aGlzIGRlZmF1bHQgYmVoYXZpb3VyIGlzIG5vdCByaWdodCBmb3IgdGhlIGRpYWxlY3QsIHlvdSBjYW5cbiAqIGRlZmluZSBhIGBfX2NhbGxfX2AgbWV0aG9kIG9uIHRoZSBkaWFsZWN0IHRoYXQgd2lsbCBnZXQgaW52b2tlZCB0byBoYW5kbGVcbiAqIHRoZSBibG9jayBwcm9jZXNzaW5nLlxuICovXG5NYXJrZG93bi5wcm90b3R5cGUucHJvY2Vzc0Jsb2NrID0gZnVuY3Rpb24gcHJvY2Vzc0Jsb2NrKCBibG9jaywgbmV4dCApIHtcbiAgdmFyIGNicyA9IHRoaXMuZGlhbGVjdC5ibG9jayxcbiAgICAgIG9yZCA9IGNicy5fX29yZGVyX187XG5cbiAgaWYgKCBcIl9fY2FsbF9fXCIgaW4gY2JzICkge1xuICAgIHJldHVybiBjYnMuX19jYWxsX18uY2FsbCh0aGlzLCBibG9jaywgbmV4dCk7XG4gIH1cblxuICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBvcmQubGVuZ3RoOyBpKysgKSB7XG4gICAgLy9EOnRoaXMuZGVidWcoIFwiVGVzdGluZ1wiLCBvcmRbaV0gKTtcbiAgICB2YXIgcmVzID0gY2JzWyBvcmRbaV0gXS5jYWxsKCB0aGlzLCBibG9jaywgbmV4dCApO1xuICAgIGlmICggcmVzICkge1xuICAgICAgLy9EOnRoaXMuZGVidWcoXCIgIG1hdGNoZWRcIik7XG4gICAgICBpZiAoICFpc0FycmF5KHJlcykgfHwgKCByZXMubGVuZ3RoID4gMCAmJiAhKCBpc0FycmF5KHJlc1swXSkgKSApIClcbiAgICAgICAgdGhpcy5kZWJ1ZyhvcmRbaV0sIFwiZGlkbid0IHJldHVybiBhIHByb3BlciBhcnJheVwiKTtcbiAgICAgIC8vRDp0aGlzLmRlYnVnKCBcIlwiICk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVob2ghIG5vIG1hdGNoISBTaG91bGQgd2UgdGhyb3cgYW4gZXJyb3I/XG4gIHJldHVybiBbXTtcbn07XG5cbk1hcmtkb3duLnByb3RvdHlwZS5wcm9jZXNzSW5saW5lID0gZnVuY3Rpb24gcHJvY2Vzc0lubGluZSggYmxvY2sgKSB7XG4gIHJldHVybiB0aGlzLmRpYWxlY3QuaW5saW5lLl9fY2FsbF9fLmNhbGwoIHRoaXMsIFN0cmluZyggYmxvY2sgKSApO1xufTtcblxuLyoqXG4gKiAgTWFya2Rvd24jdG9UcmVlKCBzb3VyY2UgKSAtPiBKc29uTUxcbiAqICAtIHNvdXJjZSAoU3RyaW5nKTogbWFya2Rvd24gc291cmNlIHRvIHBhcnNlXG4gKlxuICogIFBhcnNlIGBzb3VyY2VgIGludG8gYSBKc29uTUwgdHJlZSByZXByZXNlbnRpbmcgdGhlIG1hcmtkb3duIGRvY3VtZW50LlxuICoqL1xuLy8gY3VzdG9tX3RyZWUgbWVhbnMgc2V0IHRoaXMudHJlZSB0byBgY3VzdG9tX3RyZWVgIGFuZCByZXN0b3JlIG9sZCB2YWx1ZSBvbiByZXR1cm5cbk1hcmtkb3duLnByb3RvdHlwZS50b1RyZWUgPSBmdW5jdGlvbiB0b1RyZWUoIHNvdXJjZSwgY3VzdG9tX3Jvb3QgKSB7XG4gIHZhciBibG9ja3MgPSBzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSA/IHNvdXJjZSA6IHRoaXMuc3BsaXRfYmxvY2tzKCBzb3VyY2UgKTtcblxuICAvLyBNYWtlIHRyZWUgYSBtZW1iZXIgdmFyaWFibGUgc28gaXRzIGVhc2llciB0byBtZXNzIHdpdGggaW4gZXh0ZW5zaW9uc1xuICB2YXIgb2xkX3RyZWUgPSB0aGlzLnRyZWU7XG4gIHRyeSB7XG4gICAgdGhpcy50cmVlID0gY3VzdG9tX3Jvb3QgfHwgdGhpcy50cmVlIHx8IFsgXCJtYXJrZG93blwiIF07XG5cbiAgICBibG9ja3M6XG4gICAgd2hpbGUgKCBibG9ja3MubGVuZ3RoICkge1xuICAgICAgdmFyIGIgPSB0aGlzLnByb2Nlc3NCbG9jayggYmxvY2tzLnNoaWZ0KCksIGJsb2NrcyApO1xuXG4gICAgICAvLyBSZWZlcmVuY2UgYmxvY2tzIGFuZCB0aGUgbGlrZSB3b24ndCByZXR1cm4gYW55IGNvbnRlbnRcbiAgICAgIGlmICggIWIubGVuZ3RoICkgY29udGludWUgYmxvY2tzO1xuXG4gICAgICB0aGlzLnRyZWUucHVzaC5hcHBseSggdGhpcy50cmVlLCBiICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRyZWU7XG4gIH1cbiAgZmluYWxseSB7XG4gICAgaWYgKCBjdXN0b21fcm9vdCApIHtcbiAgICAgIHRoaXMudHJlZSA9IG9sZF90cmVlO1xuICAgIH1cbiAgfVxufTtcblxuLy8gTm9vcCBieSBkZWZhdWx0XG5NYXJrZG93bi5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cyk7XG4gIGFyZ3MudW5zaGlmdCh0aGlzLmRlYnVnX2luZGVudCk7XG4gIGlmICggdHlwZW9mIHByaW50ICE9PSBcInVuZGVmaW5lZFwiIClcbiAgICAgIHByaW50LmFwcGx5KCBwcmludCwgYXJncyApO1xuICBpZiAoIHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjb25zb2xlLmxvZyAhPT0gXCJ1bmRlZmluZWRcIiApXG4gICAgICBjb25zb2xlLmxvZy5hcHBseSggbnVsbCwgYXJncyApO1xufVxuXG5NYXJrZG93bi5wcm90b3R5cGUubG9vcF9yZV9vdmVyX2Jsb2NrID0gZnVuY3Rpb24oIHJlLCBibG9jaywgY2IgKSB7XG4gIC8vIERvbnQgdXNlIC9nIHJlZ2V4cHMgd2l0aCB0aGlzXG4gIHZhciBtLFxuICAgICAgYiA9IGJsb2NrLnZhbHVlT2YoKTtcblxuICB3aGlsZSAoIGIubGVuZ3RoICYmIChtID0gcmUuZXhlYyhiKSApICE9IG51bGwgKSB7XG4gICAgYiA9IGIuc3Vic3RyKCBtWzBdLmxlbmd0aCApO1xuICAgIGNiLmNhbGwodGhpcywgbSk7XG4gIH1cbiAgcmV0dXJuIGI7XG59O1xuXG4vKipcbiAqIE1hcmtkb3duLmRpYWxlY3RzXG4gKlxuICogTmFtZXNwYWNlIG9mIGJ1aWx0LWluIGRpYWxlY3RzLlxuICoqL1xuTWFya2Rvd24uZGlhbGVjdHMgPSB7fTtcblxuLyoqXG4gKiBNYXJrZG93bi5kaWFsZWN0cy5HcnViZXJcbiAqXG4gKiBUaGUgZGVmYXVsdCBkaWFsZWN0IHRoYXQgZm9sbG93cyB0aGUgcnVsZXMgc2V0IG91dCBieSBKb2huIEdydWJlcidzXG4gKiBtYXJrZG93bi5wbCBhcyBjbG9zZWx5IGFzIHBvc3NpYmxlLiBXZWxsIGFjdHVhbGx5IHdlIGZvbGxvdyB0aGUgYmVoYXZpb3VyIG9mXG4gKiB0aGF0IHNjcmlwdCB3aGljaCBpbiBzb21lIHBsYWNlcyBpcyBub3QgZXhhY3RseSB3aGF0IHRoZSBzeW50YXggd2ViIHBhZ2VcbiAqIHNheXMuXG4gKiovXG5NYXJrZG93bi5kaWFsZWN0cy5HcnViZXIgPSB7XG4gIGJsb2NrOiB7XG4gICAgYXR4SGVhZGVyOiBmdW5jdGlvbiBhdHhIZWFkZXIoIGJsb2NrLCBuZXh0ICkge1xuICAgICAgdmFyIG0gPSBibG9jay5tYXRjaCggL14oI3sxLDZ9KVxccyooLio/KVxccyojKlxccyooPzpcXG58JCkvICk7XG5cbiAgICAgIGlmICggIW0gKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICB2YXIgaGVhZGVyID0gWyBcImhlYWRlclwiLCB7IGxldmVsOiBtWyAxIF0ubGVuZ3RoIH0gXTtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGhlYWRlciwgdGhpcy5wcm9jZXNzSW5saW5lKG1bIDIgXSkpO1xuXG4gICAgICBpZiAoIG1bMF0ubGVuZ3RoIDwgYmxvY2subGVuZ3RoIClcbiAgICAgICAgbmV4dC51bnNoaWZ0KCBta19ibG9jayggYmxvY2suc3Vic3RyKCBtWzBdLmxlbmd0aCApLCBibG9jay50cmFpbGluZywgYmxvY2subGluZU51bWJlciArIDIgKSApO1xuXG4gICAgICByZXR1cm4gWyBoZWFkZXIgXTtcbiAgICB9LFxuXG4gICAgc2V0ZXh0SGVhZGVyOiBmdW5jdGlvbiBzZXRleHRIZWFkZXIoIGJsb2NrLCBuZXh0ICkge1xuICAgICAgdmFyIG0gPSBibG9jay5tYXRjaCggL14oLiopXFxuKFstPV0pXFwyXFwyKyg/OlxcbnwkKS8gKTtcblxuICAgICAgaWYgKCAhbSApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBsZXZlbCA9ICggbVsgMiBdID09PSBcIj1cIiApID8gMSA6IDI7XG4gICAgICB2YXIgaGVhZGVyID0gWyBcImhlYWRlclwiLCB7IGxldmVsIDogbGV2ZWwgfSwgbVsgMSBdIF07XG5cbiAgICAgIGlmICggbVswXS5sZW5ndGggPCBibG9jay5sZW5ndGggKVxuICAgICAgICBuZXh0LnVuc2hpZnQoIG1rX2Jsb2NrKCBibG9jay5zdWJzdHIoIG1bMF0ubGVuZ3RoICksIGJsb2NrLnRyYWlsaW5nLCBibG9jay5saW5lTnVtYmVyICsgMiApICk7XG5cbiAgICAgIHJldHVybiBbIGhlYWRlciBdO1xuICAgIH0sXG5cbiAgICBjb2RlOiBmdW5jdGlvbiBjb2RlKCBibG9jaywgbmV4dCApIHtcbiAgICAgIC8vIHwgICAgRm9vXG4gICAgICAvLyB8YmFyXG4gICAgICAvLyBzaG91bGQgYmUgYSBjb2RlIGJsb2NrIGZvbGxvd2VkIGJ5IGEgcGFyYWdyYXBoLiBGdW5cbiAgICAgIC8vXG4gICAgICAvLyBUaGVyZSBtaWdodCBhbHNvIGJlIGFkamFjZW50IGNvZGUgYmxvY2sgdG8gbWVyZ2UuXG5cbiAgICAgIHZhciByZXQgPSBbXSxcbiAgICAgICAgICByZSA9IC9eKD86IHswLDN9XFx0fCB7NH0pKC4qKVxcbj8vLFxuICAgICAgICAgIGxpbmVzO1xuXG4gICAgICAvLyA0IHNwYWNlcyArIGNvbnRlbnRcbiAgICAgIGlmICggIWJsb2NrLm1hdGNoKCByZSApICkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgYmxvY2tfc2VhcmNoOlxuICAgICAgZG8ge1xuICAgICAgICAvLyBOb3cgcHVsbCBvdXQgdGhlIHJlc3Qgb2YgdGhlIGxpbmVzXG4gICAgICAgIHZhciBiID0gdGhpcy5sb29wX3JlX292ZXJfYmxvY2soXG4gICAgICAgICAgICAgICAgICByZSwgYmxvY2sudmFsdWVPZigpLCBmdW5jdGlvbiggbSApIHsgcmV0LnB1c2goIG1bMV0gKTsgfSApO1xuXG4gICAgICAgIGlmICggYi5sZW5ndGggKSB7XG4gICAgICAgICAgLy8gQ2FzZSBhbGx1ZGVkIHRvIGluIGZpcnN0IGNvbW1lbnQuIHB1c2ggaXQgYmFjayBvbiBhcyBhIG5ldyBibG9ja1xuICAgICAgICAgIG5leHQudW5zaGlmdCggbWtfYmxvY2soYiwgYmxvY2sudHJhaWxpbmcpICk7XG4gICAgICAgICAgYnJlYWsgYmxvY2tfc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBuZXh0Lmxlbmd0aCApIHtcbiAgICAgICAgICAvLyBDaGVjayB0aGUgbmV4dCBibG9jayAtIGl0IG1pZ2h0IGJlIGNvZGUgdG9vXG4gICAgICAgICAgaWYgKCAhbmV4dFswXS5tYXRjaCggcmUgKSApIGJyZWFrIGJsb2NrX3NlYXJjaDtcblxuICAgICAgICAgIC8vIFB1bGwgaG93IGhvdyBtYW55IGJsYW5rcyBsaW5lcyBmb2xsb3cgLSBtaW51cyB0d28gdG8gYWNjb3VudCBmb3IgLmpvaW5cbiAgICAgICAgICByZXQucHVzaCAoIGJsb2NrLnRyYWlsaW5nLnJlcGxhY2UoL1teXFxuXS9nLCBcIlwiKS5zdWJzdHJpbmcoMikgKTtcblxuICAgICAgICAgIGJsb2NrID0gbmV4dC5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGJyZWFrIGJsb2NrX3NlYXJjaDtcbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoIHRydWUgKTtcblxuICAgICAgcmV0dXJuIFsgWyBcImNvZGVfYmxvY2tcIiwgcmV0LmpvaW4oXCJcXG5cIikgXSBdO1xuICAgIH0sXG5cbiAgICBob3JpelJ1bGU6IGZ1bmN0aW9uIGhvcml6UnVsZSggYmxvY2ssIG5leHQgKSB7XG4gICAgICAvLyB0aGlzIG5lZWRzIHRvIGZpbmQgYW55IGhyIGluIHRoZSBibG9jayB0byBoYW5kbGUgYWJ1dHRpbmcgYmxvY2tzXG4gICAgICB2YXIgbSA9IGJsb2NrLm1hdGNoKCAvXig/OihbXFxzXFxTXSo/KVxcbik/WyBcXHRdKihbLV8qXSkoPzpbIFxcdF0qXFwyKXsyLH1bIFxcdF0qKD86XFxuKFtcXHNcXFNdKikpPyQvICk7XG5cbiAgICAgIGlmICggIW0gKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBqc29ubWwgPSBbIFsgXCJoclwiIF0gXTtcblxuICAgICAgLy8gaWYgdGhlcmUncyBhIGxlYWRpbmcgYWJ1dHRpbmcgYmxvY2ssIHByb2Nlc3MgaXRcbiAgICAgIGlmICggbVsgMSBdICkge1xuICAgICAgICBqc29ubWwudW5zaGlmdC5hcHBseSgganNvbm1sLCB0aGlzLnByb2Nlc3NCbG9jayggbVsgMSBdLCBbXSApICk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHRoZXJlJ3MgYSB0cmFpbGluZyBhYnV0dGluZyBibG9jaywgc3RpY2sgaXQgaW50byBuZXh0XG4gICAgICBpZiAoIG1bIDMgXSApIHtcbiAgICAgICAgbmV4dC51bnNoaWZ0KCBta19ibG9jayggbVsgMyBdICkgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGpzb25tbDtcbiAgICB9LFxuXG4gICAgLy8gVGhlcmUgYXJlIHR3byB0eXBlcyBvZiBsaXN0cy4gVGlnaHQgYW5kIGxvb3NlLiBUaWdodCBsaXN0cyBoYXZlIG5vIHdoaXRlc3BhY2VcbiAgICAvLyBiZXR3ZWVuIHRoZSBpdGVtcyAoYW5kIHJlc3VsdCBpbiB0ZXh0IGp1c3QgaW4gdGhlIDxsaT4pIGFuZCBsb29zZSBsaXN0cyxcbiAgICAvLyB3aGljaCBoYXZlIGFuIGVtcHR5IGxpbmUgYmV0d2VlbiBsaXN0IGl0ZW1zLCByZXN1bHRpbmcgaW4gKG9uZSBvciBtb3JlKVxuICAgIC8vIHBhcmFncmFwaHMgaW5zaWRlIHRoZSA8bGk+LlxuICAgIC8vXG4gICAgLy8gVGhlcmUgYXJlIGFsbCBzb3J0cyB3ZWlyZCBlZGdlIGNhc2VzIGFib3V0IHRoZSBvcmlnaW5hbCBtYXJrZG93bi5wbCdzXG4gICAgLy8gaGFuZGxpbmcgb2YgbGlzdHM6XG4gICAgLy9cbiAgICAvLyAqIE5lc3RlZCBsaXN0cyBhcmUgc3VwcG9zZWQgdG8gYmUgaW5kZW50ZWQgYnkgZm91ciBjaGFycyBwZXIgbGV2ZWwuIEJ1dFxuICAgIC8vICAgaWYgdGhleSBhcmVuJ3QsIHlvdSBjYW4gZ2V0IGEgbmVzdGVkIGxpc3QgYnkgaW5kZW50aW5nIGJ5IGxlc3MgdGhhblxuICAgIC8vICAgZm91ciBzbyBsb25nIGFzIHRoZSBpbmRlbnQgZG9lc24ndCBtYXRjaCBhbiBpbmRlbnQgb2YgYW4gZXhpc3RpbmcgbGlzdFxuICAgIC8vICAgaXRlbSBpbiB0aGUgJ25lc3Qgc3RhY2snLlxuICAgIC8vXG4gICAgLy8gKiBUaGUgdHlwZSBvZiB0aGUgbGlzdCAoYnVsbGV0IG9yIG51bWJlcikgaXMgY29udHJvbGxlZCBqdXN0IGJ5IHRoZVxuICAgIC8vICAgIGZpcnN0IGl0ZW0gYXQgdGhlIGluZGVudC4gU3Vic2VxdWVudCBjaGFuZ2VzIGFyZSBpZ25vcmVkIHVubGVzcyB0aGV5XG4gICAgLy8gICAgYXJlIGZvciBuZXN0ZWQgbGlzdHNcbiAgICAvL1xuICAgIGxpc3RzOiAoZnVuY3Rpb24oICkge1xuICAgICAgLy8gVXNlIGEgY2xvc3VyZSB0byBoaWRlIGEgZmV3IHZhcmlhYmxlcy5cbiAgICAgIHZhciBhbnlfbGlzdCA9IFwiWyorLV18XFxcXGQrXFxcXC5cIixcbiAgICAgICAgICBidWxsZXRfbGlzdCA9IC9bKistXS8sXG4gICAgICAgICAgbnVtYmVyX2xpc3QgPSAvXFxkK1xcLi8sXG4gICAgICAgICAgLy8gQ2FwdHVyZSBsZWFkaW5nIGluZGVudCBhcyBpdCBtYXR0ZXJzIGZvciBkZXRlcm1pbmluZyBuZXN0ZWQgbGlzdHMuXG4gICAgICAgICAgaXNfbGlzdF9yZSA9IG5ldyBSZWdFeHAoIFwiXiggezAsM30pKFwiICsgYW55X2xpc3QgKyBcIilbIFxcdF0rXCIgKSxcbiAgICAgICAgICBpbmRlbnRfcmUgPSBcIig/OiB7MCwzfVxcXFx0fCB7NH0pXCI7XG5cbiAgICAgIC8vIFRPRE86IENhY2hlIHRoaXMgcmVnZXhwIGZvciBjZXJ0YWluIGRlcHRocy5cbiAgICAgIC8vIENyZWF0ZSBhIHJlZ2V4cCBzdWl0YWJsZSBmb3IgbWF0Y2hpbmcgYW4gbGkgZm9yIGEgZ2l2ZW4gc3RhY2sgZGVwdGhcbiAgICAgIGZ1bmN0aW9uIHJlZ2V4X2Zvcl9kZXB0aCggZGVwdGggKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAgICAgLy8gbVsxXSA9IGluZGVudCwgbVsyXSA9IGxpc3RfdHlwZVxuICAgICAgICAgIFwiKD86XihcIiArIGluZGVudF9yZSArIFwiezAsXCIgKyBkZXB0aCArIFwifSB7MCwzfSkoXCIgKyBhbnlfbGlzdCArIFwiKVxcXFxzKyl8XCIgK1xuICAgICAgICAgIC8vIG1bM10gPSBjb250XG4gICAgICAgICAgXCIoXlwiICsgaW5kZW50X3JlICsgXCJ7MCxcIiArIChkZXB0aC0xKSArIFwifVsgXXswLDR9KVwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBleHBhbmRfdGFiKCBpbnB1dCApIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoIC8gezAsM31cXHQvZywgXCIgICAgXCIgKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGlubGluZSBjb250ZW50IGBpbmxpbmVgIHRvIGBsaWAuIGlubGluZSBjb21lcyBmcm9tIHByb2Nlc3NJbmxpbmVcbiAgICAgIC8vIHNvIGlzIGFuIGFycmF5IG9mIGNvbnRlbnRcbiAgICAgIGZ1bmN0aW9uIGFkZChsaSwgbG9vc2UsIGlubGluZSwgbmwpIHtcbiAgICAgICAgaWYgKCBsb29zZSApIHtcbiAgICAgICAgICBsaS5wdXNoKCBbIFwicGFyYVwiIF0uY29uY2F0KGlubGluZSkgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSG1tbSwgc2hvdWxkIHRoaXMgYmUgYW55IGJsb2NrIGxldmVsIGVsZW1lbnQgb3IganVzdCBwYXJhcz9cbiAgICAgICAgdmFyIGFkZF90byA9IGxpW2xpLmxlbmd0aCAtMV0gaW5zdGFuY2VvZiBBcnJheSAmJiBsaVtsaS5sZW5ndGggLSAxXVswXSA9PSBcInBhcmFcIlxuICAgICAgICAgICAgICAgICAgID8gbGlbbGkubGVuZ3RoIC0xXVxuICAgICAgICAgICAgICAgICAgIDogbGk7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBzb21lIGNvbnRlbnQgaW4gdGhpcyBsaXN0LCBhZGQgdGhlIG5ldyBsaW5lIGluXG4gICAgICAgIGlmICggbmwgJiYgbGkubGVuZ3RoID4gMSApIGlubGluZS51bnNoaWZ0KG5sKTtcblxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBpbmxpbmUubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgdmFyIHdoYXQgPSBpbmxpbmVbaV0sXG4gICAgICAgICAgICAgIGlzX3N0ciA9IHR5cGVvZiB3aGF0ID09IFwic3RyaW5nXCI7XG4gICAgICAgICAgaWYgKCBpc19zdHIgJiYgYWRkX3RvLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFkZF90b1thZGRfdG8ubGVuZ3RoLTFdID09IFwic3RyaW5nXCIgKSB7XG4gICAgICAgICAgICBhZGRfdG9bIGFkZF90by5sZW5ndGgtMSBdICs9IHdoYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkX3RvLnB1c2goIHdoYXQgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY29udGFpbmVkIG1lYW5zIGhhdmUgYW4gaW5kZW50IGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCBvbmUuIE9uXG4gICAgICAvLyAqZXZlcnkqIGxpbmUgaW4gdGhlIGJsb2NrXG4gICAgICBmdW5jdGlvbiBnZXRfY29udGFpbmVkX2Jsb2NrcyggZGVwdGgsIGJsb2NrcyApIHtcblxuICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKCBcIl4oXCIgKyBpbmRlbnRfcmUgKyBcIntcIiArIGRlcHRoICsgXCJ9Lio/XFxcXG4/KSokXCIgKSxcbiAgICAgICAgICAgIHJlcGxhY2UgPSBuZXcgUmVnRXhwKFwiXlwiICsgaW5kZW50X3JlICsgXCJ7XCIgKyBkZXB0aCArIFwifVwiLCBcImdtXCIpLFxuICAgICAgICAgICAgcmV0ID0gW107XG5cbiAgICAgICAgd2hpbGUgKCBibG9ja3MubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICBpZiAoIHJlLmV4ZWMoIGJsb2Nrc1swXSApICkge1xuICAgICAgICAgICAgdmFyIGIgPSBibG9ja3Muc2hpZnQoKSxcbiAgICAgICAgICAgICAgICAvLyBOb3cgcmVtb3ZlIHRoYXQgaW5kZW50XG4gICAgICAgICAgICAgICAgeCA9IGIucmVwbGFjZSggcmVwbGFjZSwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldC5wdXNoKCBta19ibG9jayggeCwgYi50cmFpbGluZywgYi5saW5lTnVtYmVyICkgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cblxuICAgICAgLy8gcGFzc2VkIHRvIHN0YWNrLmZvckVhY2ggdG8gdHVybiBsaXN0IGl0ZW1zIHVwIHRoZSBzdGFjayBpbnRvIHBhcmFzXG4gICAgICBmdW5jdGlvbiBwYXJhZ3JhcGhpZnkocywgaSwgc3RhY2spIHtcbiAgICAgICAgdmFyIGxpc3QgPSBzLmxpc3Q7XG4gICAgICAgIHZhciBsYXN0X2xpID0gbGlzdFtsaXN0Lmxlbmd0aC0xXTtcblxuICAgICAgICBpZiAoIGxhc3RfbGlbMV0gaW5zdGFuY2VvZiBBcnJheSAmJiBsYXN0X2xpWzFdWzBdID09IFwicGFyYVwiICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGkgKyAxID09IHN0YWNrLmxlbmd0aCApIHtcbiAgICAgICAgICAvLyBMYXN0IHN0YWNrIGZyYW1lXG4gICAgICAgICAgLy8gS2VlcCB0aGUgc2FtZSBhcnJheSwgYnV0IHJlcGxhY2UgdGhlIGNvbnRlbnRzXG4gICAgICAgICAgbGFzdF9saS5wdXNoKCBbXCJwYXJhXCJdLmNvbmNhdCggbGFzdF9saS5zcGxpY2UoMSwgbGFzdF9saS5sZW5ndGggLSAxKSApICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIHN1Ymxpc3QgPSBsYXN0X2xpLnBvcCgpO1xuICAgICAgICAgIGxhc3RfbGkucHVzaCggW1wicGFyYVwiXS5jb25jYXQoIGxhc3RfbGkuc3BsaWNlKDEsIGxhc3RfbGkubGVuZ3RoIC0gMSkgKSwgc3VibGlzdCApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBtYXRjaGVyIGZ1bmN0aW9uXG4gICAgICByZXR1cm4gZnVuY3Rpb24oIGJsb2NrLCBuZXh0ICkge1xuICAgICAgICB2YXIgbSA9IGJsb2NrLm1hdGNoKCBpc19saXN0X3JlICk7XG4gICAgICAgIGlmICggIW0gKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VfbGlzdCggbSApIHtcbiAgICAgICAgICB2YXIgbGlzdCA9IGJ1bGxldF9saXN0LmV4ZWMoIG1bMl0gKVxuICAgICAgICAgICAgICAgICAgID8gW1wiYnVsbGV0bGlzdFwiXVxuICAgICAgICAgICAgICAgICAgIDogW1wibnVtYmVybGlzdFwiXTtcblxuICAgICAgICAgIHN0YWNrLnB1c2goIHsgbGlzdDogbGlzdCwgaW5kZW50OiBtWzFdIH0gKTtcbiAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdmFyIHN0YWNrID0gW10sIC8vIFN0YWNrIG9mIGxpc3RzIGZvciBuZXN0aW5nLlxuICAgICAgICAgICAgbGlzdCA9IG1ha2VfbGlzdCggbSApLFxuICAgICAgICAgICAgbGFzdF9saSxcbiAgICAgICAgICAgIGxvb3NlID0gZmFsc2UsXG4gICAgICAgICAgICByZXQgPSBbIHN0YWNrWzBdLmxpc3QgXSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gTG9vcCB0byBzZWFyY2ggb3ZlciBibG9jayBsb29raW5nIGZvciBpbm5lciBibG9jayBlbGVtZW50cyBhbmQgbG9vc2UgbGlzdHNcbiAgICAgICAgbG9vc2Vfc2VhcmNoOlxuICAgICAgICB3aGlsZSAoIHRydWUgKSB7XG4gICAgICAgICAgLy8gU3BsaXQgaW50byBsaW5lcyBwcmVzZXJ2aW5nIG5ldyBsaW5lcyBhdCBlbmQgb2YgbGluZVxuICAgICAgICAgIHZhciBsaW5lcyA9IGJsb2NrLnNwbGl0KCAvKD89XFxuKS8gKTtcblxuICAgICAgICAgIC8vIFdlIGhhdmUgdG8gZ3JhYiBhbGwgbGluZXMgZm9yIGEgbGkgYW5kIGNhbGwgcHJvY2Vzc0lubGluZSBvbiB0aGVtXG4gICAgICAgICAgLy8gb25jZSBhcyB0aGVyZSBhcmUgc29tZSBpbmxpbmUgdGhpbmdzIHRoYXQgY2FuIHNwYW4gbGluZXMuXG4gICAgICAgICAgdmFyIGxpX2FjY3VtdWxhdGUgPSBcIlwiO1xuXG4gICAgICAgICAgLy8gTG9vcCBvdmVyIHRoZSBsaW5lcyBpbiB0aGlzIGJsb2NrIGxvb2tpbmcgZm9yIHRpZ2h0IGxpc3RzLlxuICAgICAgICAgIHRpZ2h0X3NlYXJjaDpcbiAgICAgICAgICBmb3IgKCB2YXIgbGluZV9ubyA9IDA7IGxpbmVfbm8gPCBsaW5lcy5sZW5ndGg7IGxpbmVfbm8rKyApIHtcbiAgICAgICAgICAgIHZhciBubCA9IFwiXCIsXG4gICAgICAgICAgICAgICAgbCA9IGxpbmVzW2xpbmVfbm9dLnJlcGxhY2UoL15cXG4vLCBmdW5jdGlvbihuKSB7IG5sID0gbjsgcmV0dXJuIFwiXCI7IH0pO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiByZWFsbHkgc2hvdWxkIGNhY2hlIHRoaXNcbiAgICAgICAgICAgIHZhciBsaW5lX3JlID0gcmVnZXhfZm9yX2RlcHRoKCBzdGFjay5sZW5ndGggKTtcblxuICAgICAgICAgICAgbSA9IGwubWF0Y2goIGxpbmVfcmUgKTtcbiAgICAgICAgICAgIC8vcHJpbnQoIFwibGluZTpcIiwgdW5ldmFsKGwpLCBcIlxcbmxpbmUgbWF0Y2g6XCIsIHVuZXZhbChtKSApO1xuXG4gICAgICAgICAgICAvLyBXZSBoYXZlIGEgbGlzdCBpdGVtXG4gICAgICAgICAgICBpZiAoIG1bMV0gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgcHJldmlvdXMgbGlzdCBpdGVtLCBpZiBhbnlcbiAgICAgICAgICAgICAgaWYgKCBsaV9hY2N1bXVsYXRlLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICBhZGQoIGxhc3RfbGksIGxvb3NlLCB0aGlzLnByb2Nlc3NJbmxpbmUoIGxpX2FjY3VtdWxhdGUgKSwgbmwgKTtcbiAgICAgICAgICAgICAgICAvLyBMb29zZSBtb2RlIHdpbGwgaGF2ZSBiZWVuIGRlYWx0IHdpdGguIFJlc2V0IGl0XG4gICAgICAgICAgICAgICAgbG9vc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsaV9hY2N1bXVsYXRlID0gXCJcIjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG1bMV0gPSBleHBhbmRfdGFiKCBtWzFdICk7XG4gICAgICAgICAgICAgIHZhciB3YW50ZWRfZGVwdGggPSBNYXRoLmZsb29yKG1bMV0ubGVuZ3RoLzQpKzE7XG4gICAgICAgICAgICAgIC8vcHJpbnQoIFwid2FudDpcIiwgd2FudGVkX2RlcHRoLCBcInN0YWNrOlwiLCBzdGFjay5sZW5ndGgpO1xuICAgICAgICAgICAgICBpZiAoIHdhbnRlZF9kZXB0aCA+IHN0YWNrLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAvLyBEZWVwIGVub3VnaCBmb3IgYSBuZXN0ZWQgbGlzdCBvdXRyaWdodFxuICAgICAgICAgICAgICAgIC8vcHJpbnQgKCBcIm5ldyBuZXN0ZWQgbGlzdFwiICk7XG4gICAgICAgICAgICAgICAgbGlzdCA9IG1ha2VfbGlzdCggbSApO1xuICAgICAgICAgICAgICAgIGxhc3RfbGkucHVzaCggbGlzdCApO1xuICAgICAgICAgICAgICAgIGxhc3RfbGkgPSBsaXN0WzFdID0gWyBcImxpc3RpdGVtXCIgXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBhcmVuJ3QgZGVlcCBlbm91Z2ggdG8gYmUgc3RyaWN0bHkgYSBuZXcgbGV2ZWwuIFRoaXMgaXNcbiAgICAgICAgICAgICAgICAvLyB3aGVyZSBNZC5wbCBnb2VzIG51dHMuIElmIHRoZSBpbmRlbnQgbWF0Y2hlcyBhIGxldmVsIGluIHRoZVxuICAgICAgICAgICAgICAgIC8vIHN0YWNrLCBwdXQgaXQgdGhlcmUsIGVsc2UgcHV0IGl0IG9uZSBkZWVwZXIgdGhlbiB0aGVcbiAgICAgICAgICAgICAgICAvLyB3YW50ZWRfZGVwdGggZGVzZXJ2ZXMuXG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yICggaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgIGlmICggc3RhY2tbIGkgXS5pbmRlbnQgIT0gbVsxXSApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgbGlzdCA9IHN0YWNrWyBpIF0ubGlzdDtcbiAgICAgICAgICAgICAgICAgIHN0YWNrLnNwbGljZSggaSsxLCBzdGFjay5sZW5ndGggLSAoaSsxKSApO1xuICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgLy9wcmludChcIm5vdCBmb3VuZC4gbDpcIiwgdW5ldmFsKGwpKTtcbiAgICAgICAgICAgICAgICAgIHdhbnRlZF9kZXB0aCsrO1xuICAgICAgICAgICAgICAgICAgaWYgKCB3YW50ZWRfZGVwdGggPD0gc3RhY2subGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICBzdGFjay5zcGxpY2Uod2FudGVkX2RlcHRoLCBzdGFjay5sZW5ndGggLSB3YW50ZWRfZGVwdGgpO1xuICAgICAgICAgICAgICAgICAgICAvL3ByaW50KFwiRGVzaXJlZCBkZXB0aCBub3dcIiwgd2FudGVkX2RlcHRoLCBcInN0YWNrOlwiLCBzdGFjay5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gc3RhY2tbd2FudGVkX2RlcHRoLTFdLmxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIC8vcHJpbnQoXCJsaXN0OlwiLCB1bmV2YWwobGlzdCkgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL3ByaW50IChcIm1hZGUgbmV3IHN0YWNrIGZvciBtZXNzeSBpbmRlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QgPSBtYWtlX2xpc3QobSk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RfbGkucHVzaChsaXN0KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3ByaW50KCB1bmV2YWwobGlzdCksIFwibGFzdFwiLCBsaXN0ID09PSBzdGFja1tzdGFjay5sZW5ndGgtMV0ubGlzdCApO1xuICAgICAgICAgICAgICAgIGxhc3RfbGkgPSBbIFwibGlzdGl0ZW1cIiBdO1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChsYXN0X2xpKTtcbiAgICAgICAgICAgICAgfSAvLyBlbmQgZGVwdGggb2Ygc2hlbmVnYWluc1xuICAgICAgICAgICAgICBubCA9IFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBjb250ZW50XG4gICAgICAgICAgICBpZiAoIGwubGVuZ3RoID4gbVswXS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgIGxpX2FjY3VtdWxhdGUgKz0gbmwgKyBsLnN1YnN0ciggbVswXS5sZW5ndGggKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIHRpZ2h0X3NlYXJjaFxuXG4gICAgICAgICAgaWYgKCBsaV9hY2N1bXVsYXRlLmxlbmd0aCApIHtcbiAgICAgICAgICAgIGFkZCggbGFzdF9saSwgbG9vc2UsIHRoaXMucHJvY2Vzc0lubGluZSggbGlfYWNjdW11bGF0ZSApLCBubCApO1xuICAgICAgICAgICAgLy8gTG9vc2UgbW9kZSB3aWxsIGhhdmUgYmVlbiBkZWFsdCB3aXRoLiBSZXNldCBpdFxuICAgICAgICAgICAgbG9vc2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGxpX2FjY3VtdWxhdGUgPSBcIlwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIExvb2sgYXQgdGhlIG5leHQgYmxvY2sgLSB3ZSBtaWdodCBoYXZlIGEgbG9vc2UgbGlzdC4gT3IgYW4gZXh0cmFcbiAgICAgICAgICAvLyBwYXJhZ3JhcGggZm9yIHRoZSBjdXJyZW50IGxpXG4gICAgICAgICAgdmFyIGNvbnRhaW5lZCA9IGdldF9jb250YWluZWRfYmxvY2tzKCBzdGFjay5sZW5ndGgsIG5leHQgKTtcblxuICAgICAgICAgIC8vIERlYWwgd2l0aCBjb2RlIGJsb2NrcyBvciBwcm9wZXJseSBuZXN0ZWQgbGlzdHNcbiAgICAgICAgICBpZiAoIGNvbnRhaW5lZC5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCBsaXN0aXRlbXMgdXAgdGhlIHN0YWNrIGFyZSBwYXJhZ3JhcGhzXG4gICAgICAgICAgICBmb3JFYWNoKCBzdGFjaywgcGFyYWdyYXBoaWZ5LCB0aGlzKTtcblxuICAgICAgICAgICAgbGFzdF9saS5wdXNoLmFwcGx5KCBsYXN0X2xpLCB0aGlzLnRvVHJlZSggY29udGFpbmVkLCBbXSApICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG5leHRfYmxvY2sgPSBuZXh0WzBdICYmIG5leHRbMF0udmFsdWVPZigpIHx8IFwiXCI7XG5cbiAgICAgICAgICBpZiAoIG5leHRfYmxvY2subWF0Y2goaXNfbGlzdF9yZSkgfHwgbmV4dF9ibG9jay5tYXRjaCggL14gLyApICkge1xuICAgICAgICAgICAgYmxvY2sgPSBuZXh0LnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBhbiBIUiBmb2xsb3dpbmcgYSBsaXN0OiBmZWF0dXJlcy9saXN0cy9ocl9hYnV0dGluZ1xuICAgICAgICAgICAgdmFyIGhyID0gdGhpcy5kaWFsZWN0LmJsb2NrLmhvcml6UnVsZSggYmxvY2ssIG5leHQgKTtcblxuICAgICAgICAgICAgaWYgKCBociApIHtcbiAgICAgICAgICAgICAgcmV0LnB1c2guYXBwbHkocmV0LCBocik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgYWxsIGxpc3RpdGVtcyB1cCB0aGUgc3RhY2sgYXJlIHBhcmFncmFwaHNcbiAgICAgICAgICAgIGZvckVhY2goIHN0YWNrLCBwYXJhZ3JhcGhpZnksIHRoaXMpO1xuXG4gICAgICAgICAgICBsb29zZSA9IHRydWU7XG4gICAgICAgICAgICBjb250aW51ZSBsb29zZV9zZWFyY2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIGxvb3NlX3NlYXJjaFxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH0pKCksXG5cbiAgICBibG9ja3F1b3RlOiBmdW5jdGlvbiBibG9ja3F1b3RlKCBibG9jaywgbmV4dCApIHtcbiAgICAgIGlmICggIWJsb2NrLm1hdGNoKCAvXj4vbSApIClcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgdmFyIGpzb25tbCA9IFtdO1xuXG4gICAgICAvLyBzZXBhcmF0ZSBvdXQgdGhlIGxlYWRpbmcgYWJ1dHRpbmcgYmxvY2ssIGlmIGFueS4gSS5lLiBpbiB0aGlzIGNhc2U6XG4gICAgICAvL1xuICAgICAgLy8gIGFcbiAgICAgIC8vICA+IGJcbiAgICAgIC8vXG4gICAgICBpZiAoIGJsb2NrWyAwIF0gIT0gXCI+XCIgKSB7XG4gICAgICAgIHZhciBsaW5lcyA9IGJsb2NrLnNwbGl0KCAvXFxuLyApLFxuICAgICAgICAgICAgcHJldiA9IFtdLFxuICAgICAgICAgICAgbGluZV9ubyA9IGJsb2NrLmxpbmVOdW1iZXI7XG5cbiAgICAgICAgLy8ga2VlcCBzaGlmdGluZyBsaW5lcyB1bnRpbCB5b3UgZmluZCBhIGNyb3RjaGV0XG4gICAgICAgIHdoaWxlICggbGluZXMubGVuZ3RoICYmIGxpbmVzWyAwIF1bIDAgXSAhPSBcIj5cIiApIHtcbiAgICAgICAgICAgIHByZXYucHVzaCggbGluZXMuc2hpZnQoKSApO1xuICAgICAgICAgICAgbGluZV9ubysrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFidXR0aW5nID0gbWtfYmxvY2soIHByZXYuam9pbiggXCJcXG5cIiApLCBcIlxcblwiLCBibG9jay5saW5lTnVtYmVyICk7XG4gICAgICAgIGpzb25tbC5wdXNoLmFwcGx5KCBqc29ubWwsIHRoaXMucHJvY2Vzc0Jsb2NrKCBhYnV0dGluZywgW10gKSApO1xuICAgICAgICAvLyByZWFzc2VtYmxlIG5ldyBibG9jayBvZiBqdXN0IGJsb2NrIHF1b3RlcyFcbiAgICAgICAgYmxvY2sgPSBta19ibG9jayggbGluZXMuam9pbiggXCJcXG5cIiApLCBibG9jay50cmFpbGluZywgbGluZV9ubyApO1xuICAgICAgfVxuXG5cbiAgICAgIC8vIGlmIHRoZSBuZXh0IGJsb2NrIGlzIGFsc28gYSBibG9ja3F1b3RlIG1lcmdlIGl0IGluXG4gICAgICB3aGlsZSAoIG5leHQubGVuZ3RoICYmIG5leHRbIDAgXVsgMCBdID09IFwiPlwiICkge1xuICAgICAgICB2YXIgYiA9IG5leHQuc2hpZnQoKTtcbiAgICAgICAgYmxvY2sgPSBta19ibG9jayggYmxvY2sgKyBibG9jay50cmFpbGluZyArIGIsIGIudHJhaWxpbmcsIGJsb2NrLmxpbmVOdW1iZXIgKTtcbiAgICAgIH1cblxuICAgICAgLy8gU3RyaXAgb2ZmIHRoZSBsZWFkaW5nIFwiPiBcIiBhbmQgcmUtcHJvY2VzcyBhcyBhIGJsb2NrLlxuICAgICAgdmFyIGlucHV0ID0gYmxvY2sucmVwbGFjZSggL14+ID8vZ20sIFwiXCIgKSxcbiAgICAgICAgICBvbGRfdHJlZSA9IHRoaXMudHJlZSxcbiAgICAgICAgICBwcm9jZXNzZWRCbG9jayA9IHRoaXMudG9UcmVlKCBpbnB1dCwgWyBcImJsb2NrcXVvdGVcIiBdICksXG4gICAgICAgICAgYXR0ciA9IGV4dHJhY3RfYXR0ciggcHJvY2Vzc2VkQmxvY2sgKTtcblxuICAgICAgLy8gSWYgYW55IGxpbmsgcmVmZXJlbmNlcyB3ZXJlIGZvdW5kIGdldCByaWQgb2YgdGhlbVxuICAgICAgaWYgKCBhdHRyICYmIGF0dHIucmVmZXJlbmNlcyApIHtcbiAgICAgICAgZGVsZXRlIGF0dHIucmVmZXJlbmNlcztcbiAgICAgICAgLy8gQW5kIHRoZW4gcmVtb3ZlIHRoZSBhdHRyaWJ1dGUgb2JqZWN0IGlmIGl0J3MgZW1wdHlcbiAgICAgICAgaWYgKCBpc0VtcHR5KCBhdHRyICkgKSB7XG4gICAgICAgICAgcHJvY2Vzc2VkQmxvY2suc3BsaWNlKCAxLCAxICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAganNvbm1sLnB1c2goIHByb2Nlc3NlZEJsb2NrICk7XG4gICAgICByZXR1cm4ganNvbm1sO1xuICAgIH0sXG5cbiAgICByZWZlcmVuY2VEZWZuOiBmdW5jdGlvbiByZWZlcmVuY2VEZWZuKCBibG9jaywgbmV4dCkge1xuICAgICAgdmFyIHJlID0gL15cXHMqXFxbKC4qPylcXF06XFxzKihcXFMrKSg/OlxccysoPzooWydcIl0pKC4qPylcXDN8XFwoKC4qPylcXCkpKT9cXG4/LztcbiAgICAgIC8vIGludGVyZXN0aW5nIG1hdGNoZXMgYXJlIFsgLCByZWZfaWQsIHVybCwgLCB0aXRsZSwgdGl0bGUgXVxuXG4gICAgICBpZiAoICFibG9jay5tYXRjaChyZSkgKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAvLyBtYWtlIGFuIGF0dHJpYnV0ZSBub2RlIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmICggIWV4dHJhY3RfYXR0ciggdGhpcy50cmVlICkgKSB7XG4gICAgICAgIHRoaXMudHJlZS5zcGxpY2UoIDEsIDAsIHt9ICk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhdHRycyA9IGV4dHJhY3RfYXR0ciggdGhpcy50cmVlICk7XG5cbiAgICAgIC8vIG1ha2UgYSByZWZlcmVuY2VzIGhhc2ggaWYgaXQgZG9lc24ndCBleGlzdFxuICAgICAgaWYgKCBhdHRycy5yZWZlcmVuY2VzID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgIGF0dHJzLnJlZmVyZW5jZXMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIGIgPSB0aGlzLmxvb3BfcmVfb3Zlcl9ibG9jayhyZSwgYmxvY2ssIGZ1bmN0aW9uKCBtICkge1xuXG4gICAgICAgIGlmICggbVsyXSAmJiBtWzJdWzBdID09IFwiPFwiICYmIG1bMl1bbVsyXS5sZW5ndGgtMV0gPT0gXCI+XCIgKVxuICAgICAgICAgIG1bMl0gPSBtWzJdLnN1YnN0cmluZyggMSwgbVsyXS5sZW5ndGggLSAxICk7XG5cbiAgICAgICAgdmFyIHJlZiA9IGF0dHJzLnJlZmVyZW5jZXNbIG1bMV0udG9Mb3dlckNhc2UoKSBdID0ge1xuICAgICAgICAgIGhyZWY6IG1bMl1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIG1bNF0gIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgcmVmLnRpdGxlID0gbVs0XTtcbiAgICAgICAgZWxzZSBpZiAoIG1bNV0gIT09IHVuZGVmaW5lZCApXG4gICAgICAgICAgcmVmLnRpdGxlID0gbVs1XTtcblxuICAgICAgfSApO1xuXG4gICAgICBpZiAoIGIubGVuZ3RoIClcbiAgICAgICAgbmV4dC51bnNoaWZ0KCBta19ibG9jayggYiwgYmxvY2sudHJhaWxpbmcgKSApO1xuXG4gICAgICByZXR1cm4gW107XG4gICAgfSxcblxuICAgIHBhcmE6IGZ1bmN0aW9uIHBhcmEoIGJsb2NrLCBuZXh0ICkge1xuICAgICAgLy8gZXZlcnl0aGluZydzIGEgcGFyYSFcbiAgICAgIHJldHVybiBbIFtcInBhcmFcIl0uY29uY2F0KCB0aGlzLnByb2Nlc3NJbmxpbmUoIGJsb2NrICkgKSBdO1xuICAgIH1cbiAgfVxufTtcblxuTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyLmlubGluZSA9IHtcblxuICAgIF9fb25lRWxlbWVudF9fOiBmdW5jdGlvbiBvbmVFbGVtZW50KCB0ZXh0LCBwYXR0ZXJuc19vcl9yZSwgcHJldmlvdXNfbm9kZXMgKSB7XG4gICAgICB2YXIgbSxcbiAgICAgICAgICByZXMsXG4gICAgICAgICAgbGFzdEluZGV4ID0gMDtcblxuICAgICAgcGF0dGVybnNfb3JfcmUgPSBwYXR0ZXJuc19vcl9yZSB8fCB0aGlzLmRpYWxlY3QuaW5saW5lLl9fcGF0dGVybnNfXztcbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoIFwiKFtcXFxcc1xcXFxTXSo/KShcIiArIChwYXR0ZXJuc19vcl9yZS5zb3VyY2UgfHwgcGF0dGVybnNfb3JfcmUpICsgXCIpXCIgKTtcblxuICAgICAgbSA9IHJlLmV4ZWMoIHRleHQgKTtcbiAgICAgIGlmICghbSkge1xuICAgICAgICAvLyBKdXN0IGJvcmluZyB0ZXh0XG4gICAgICAgIHJldHVybiBbIHRleHQubGVuZ3RoLCB0ZXh0IF07XG4gICAgICB9XG4gICAgICBlbHNlIGlmICggbVsxXSApIHtcbiAgICAgICAgLy8gU29tZSB1bi1pbnRlcmVzdGluZyB0ZXh0IG1hdGNoZWQuIFJldHVybiB0aGF0IGZpcnN0XG4gICAgICAgIHJldHVybiBbIG1bMV0ubGVuZ3RoLCBtWzFdIF07XG4gICAgICB9XG5cbiAgICAgIHZhciByZXM7XG4gICAgICBpZiAoIG1bMl0gaW4gdGhpcy5kaWFsZWN0LmlubGluZSApIHtcbiAgICAgICAgcmVzID0gdGhpcy5kaWFsZWN0LmlubGluZVsgbVsyXSBdLmNhbGwoXG4gICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgdGV4dC5zdWJzdHIoIG0uaW5kZXggKSwgbSwgcHJldmlvdXNfbm9kZXMgfHwgW10gKTtcbiAgICAgIH1cbiAgICAgIC8vIERlZmF1bHQgZm9yIG5vdyB0byBtYWtlIGRldiBlYXNpZXIuIGp1c3Qgc2x1cnAgc3BlY2lhbCBhbmQgb3V0cHV0IGl0LlxuICAgICAgcmVzID0gcmVzIHx8IFsgbVsyXS5sZW5ndGgsIG1bMl0gXTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSxcblxuICAgIF9fY2FsbF9fOiBmdW5jdGlvbiBpbmxpbmUoIHRleHQsIHBhdHRlcm5zICkge1xuXG4gICAgICB2YXIgb3V0ID0gW10sXG4gICAgICAgICAgcmVzO1xuXG4gICAgICBmdW5jdGlvbiBhZGQoeCkge1xuICAgICAgICAvL0Q6c2VsZi5kZWJ1ZyhcIiAgYWRkaW5nIG91dHB1dFwiLCB1bmV2YWwoeCkpO1xuICAgICAgICBpZiAoIHR5cGVvZiB4ID09IFwic3RyaW5nXCIgJiYgdHlwZW9mIG91dFtvdXQubGVuZ3RoLTFdID09IFwic3RyaW5nXCIgKVxuICAgICAgICAgIG91dFsgb3V0Lmxlbmd0aC0xIF0gKz0geDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG91dC5wdXNoKHgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAoIHRleHQubGVuZ3RoID4gMCApIHtcbiAgICAgICAgcmVzID0gdGhpcy5kaWFsZWN0LmlubGluZS5fX29uZUVsZW1lbnRfXy5jYWxsKHRoaXMsIHRleHQsIHBhdHRlcm5zLCBvdXQgKTtcbiAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyKCByZXMuc2hpZnQoKSApO1xuICAgICAgICBmb3JFYWNoKHJlcywgYWRkIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dDtcbiAgICB9LFxuXG4gICAgLy8gVGhlc2UgY2hhcmFjdGVycyBhcmUgaW50ZXJzdGluZyBlbHNld2hlcmUsIHNvIGhhdmUgcnVsZXMgZm9yIHRoZW0gc28gdGhhdFxuICAgIC8vIGNodW5rcyBvZiBwbGFpbiB0ZXh0IGJsb2NrcyBkb24ndCBpbmNsdWRlIHRoZW1cbiAgICBcIl1cIjogZnVuY3Rpb24gKCkge30sXG4gICAgXCJ9XCI6IGZ1bmN0aW9uICgpIHt9LFxuXG4gICAgX19lc2NhcGVfXyA6IC9eXFxcXFtcXFxcYFxcKl97fVxcW1xcXSgpI1xcKy4hXFwtXS8sXG5cbiAgICBcIlxcXFxcIjogZnVuY3Rpb24gZXNjYXBlZCggdGV4dCApIHtcbiAgICAgIC8vIFsgbGVuZ3RoIG9mIGlucHV0IHByb2Nlc3NlZCwgbm9kZS9jaGlsZHJlbiB0byBhZGQuLi4gXVxuICAgICAgLy8gT25seSBlc2FjYXBlOiBcXCBgICogXyB7IH0gWyBdICggKSAjICogKyAtIC4gIVxuICAgICAgaWYgKCB0aGlzLmRpYWxlY3QuaW5saW5lLl9fZXNjYXBlX18uZXhlYyggdGV4dCApIClcbiAgICAgICAgcmV0dXJuIFsgMiwgdGV4dC5jaGFyQXQoIDEgKSBdO1xuICAgICAgZWxzZVxuICAgICAgICAvLyBOb3QgYW4gZXNhY3BlXG4gICAgICAgIHJldHVybiBbIDEsIFwiXFxcXFwiIF07XG4gICAgfSxcblxuICAgIFwiIVtcIjogZnVuY3Rpb24gaW1hZ2UoIHRleHQgKSB7XG5cbiAgICAgIC8vIFVubGlrZSBpbWFnZXMsIGFsdCB0ZXh0IGlzIHBsYWluIHRleHQgb25seS4gbm8gb3RoZXIgZWxlbWVudHMgYXJlXG4gICAgICAvLyBhbGxvd2VkIGluIHRoZXJlXG5cbiAgICAgIC8vICFbQWx0IHRleHRdKC9wYXRoL3RvL2ltZy5qcGcgXCJPcHRpb25hbCB0aXRsZVwiKVxuICAgICAgLy8gICAgICAxICAgICAgICAgIDIgICAgICAgICAgICAzICAgICAgIDQgICAgICAgICA8LS0tIGNhcHR1cmVzXG4gICAgICB2YXIgbSA9IHRleHQubWF0Y2goIC9eIVxcWyguKj8pXFxdWyBcXHRdKlxcKFsgXFx0XSooW15cIildKj8pKD86WyBcXHRdKyhbXCInXSkoLio/KVxcMyk/WyBcXHRdKlxcKS8gKTtcblxuICAgICAgaWYgKCBtICkge1xuICAgICAgICBpZiAoIG1bMl0gJiYgbVsyXVswXSA9PSBcIjxcIiAmJiBtWzJdW21bMl0ubGVuZ3RoLTFdID09IFwiPlwiIClcbiAgICAgICAgICBtWzJdID0gbVsyXS5zdWJzdHJpbmcoIDEsIG1bMl0ubGVuZ3RoIC0gMSApO1xuXG4gICAgICAgIG1bMl0gPSB0aGlzLmRpYWxlY3QuaW5saW5lLl9fY2FsbF9fLmNhbGwoIHRoaXMsIG1bMl0sIC9cXFxcLyApWzBdO1xuXG4gICAgICAgIHZhciBhdHRycyA9IHsgYWx0OiBtWzFdLCBocmVmOiBtWzJdIHx8IFwiXCIgfTtcbiAgICAgICAgaWYgKCBtWzRdICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgYXR0cnMudGl0bGUgPSBtWzRdO1xuXG4gICAgICAgIHJldHVybiBbIG1bMF0ubGVuZ3RoLCBbIFwiaW1nXCIsIGF0dHJzIF0gXTtcbiAgICAgIH1cblxuICAgICAgLy8gIVtBbHQgdGV4dF1baWRdXG4gICAgICBtID0gdGV4dC5tYXRjaCggL14hXFxbKC4qPylcXF1bIFxcdF0qXFxbKC4qPylcXF0vICk7XG5cbiAgICAgIGlmICggbSApIHtcbiAgICAgICAgLy8gV2UgY2FuJ3QgY2hlY2sgaWYgdGhlIHJlZmVyZW5jZSBpcyBrbm93biBoZXJlIGFzIGl0IGxpa2VseSB3b250IGJlXG4gICAgICAgIC8vIGZvdW5kIHRpbGwgYWZ0ZXIuIENoZWNrIGl0IGluIG1kIHRyZWUtPmhtdGwgdHJlZSBjb252ZXJzaW9uXG4gICAgICAgIHJldHVybiBbIG1bMF0ubGVuZ3RoLCBbIFwiaW1nX3JlZlwiLCB7IGFsdDogbVsxXSwgcmVmOiBtWzJdLnRvTG93ZXJDYXNlKCksIG9yaWdpbmFsOiBtWzBdIH0gXSBdO1xuICAgICAgfVxuXG4gICAgICAvLyBKdXN0IGNvbnN1bWUgdGhlICchWydcbiAgICAgIHJldHVybiBbIDIsIFwiIVtcIiBdO1xuICAgIH0sXG5cbiAgICBcIltcIjogZnVuY3Rpb24gbGluayggdGV4dCApIHtcblxuICAgICAgdmFyIG9yaWcgPSBTdHJpbmcodGV4dCk7XG4gICAgICAvLyBJbmxpbmUgY29udGVudCBpcyBwb3NzaWJsZSBpbnNpZGUgYGxpbmsgdGV4dGBcbiAgICAgIHZhciByZXMgPSBNYXJrZG93bi5EaWFsZWN0SGVscGVycy5pbmxpbmVfdW50aWxfY2hhci5jYWxsKCB0aGlzLCB0ZXh0LnN1YnN0cigxKSwgXCJdXCIgKTtcblxuICAgICAgLy8gTm8gY2xvc2luZyAnXScgZm91bmQuIEp1c3QgY29uc3VtZSB0aGUgW1xuICAgICAgaWYgKCAhcmVzICkgcmV0dXJuIFsgMSwgXCJbXCIgXTtcblxuICAgICAgdmFyIGNvbnN1bWVkID0gMSArIHJlc1sgMCBdLFxuICAgICAgICAgIGNoaWxkcmVuID0gcmVzWyAxIF0sXG4gICAgICAgICAgbGluayxcbiAgICAgICAgICBhdHRycztcblxuICAgICAgLy8gQXQgdGhpcyBwb2ludCB0aGUgZmlyc3QgWy4uLl0gaGFzIGJlZW4gcGFyc2VkLiBTZWUgd2hhdCBmb2xsb3dzIHRvIGZpbmRcbiAgICAgIC8vIG91dCB3aGljaCBraW5kIG9mIGxpbmsgd2UgYXJlIChyZWZlcmVuY2Ugb3IgZGlyZWN0IHVybClcbiAgICAgIHRleHQgPSB0ZXh0LnN1YnN0ciggY29uc3VtZWQgKTtcblxuICAgICAgLy8gW2xpbmsgdGV4dF0oL3BhdGgvdG8vaW1nLmpwZyBcIk9wdGlvbmFsIHRpdGxlXCIpXG4gICAgICAvLyAgICAgICAgICAgICAgICAgMSAgICAgICAgICAgIDIgICAgICAgMyAgICAgICAgIDwtLS0gY2FwdHVyZXNcbiAgICAgIC8vIFRoaXMgd2lsbCBjYXB0dXJlIHVwIHRvIHRoZSBsYXN0IHBhcmVuIGluIHRoZSBibG9jay4gV2UgdGhlbiBwdWxsXG4gICAgICAvLyBiYWNrIGJhc2VkIG9uIGlmIHRoZXJlIGEgbWF0Y2hpbmcgb25lcyBpbiB0aGUgdXJsXG4gICAgICAvLyAgICAoW2hlcmVdKC91cmwvKHRlc3QpKVxuICAgICAgLy8gVGhlIHBhcmVucyBoYXZlIHRvIGJlIGJhbGFuY2VkXG4gICAgICB2YXIgbSA9IHRleHQubWF0Y2goIC9eXFxzKlxcKFsgXFx0XSooW15cIiddKikoPzpbIFxcdF0rKFtcIiddKSguKj8pXFwyKT9bIFxcdF0qXFwpLyApO1xuICAgICAgaWYgKCBtICkge1xuICAgICAgICB2YXIgdXJsID0gbVsxXTtcbiAgICAgICAgY29uc3VtZWQgKz0gbVswXS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCB1cmwgJiYgdXJsWzBdID09IFwiPFwiICYmIHVybFt1cmwubGVuZ3RoLTFdID09IFwiPlwiIClcbiAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKCAxLCB1cmwubGVuZ3RoIC0gMSApO1xuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgdGl0bGUgd2UgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCBwYXJlbnMgaW4gdGhlIHVybFxuICAgICAgICBpZiAoICFtWzNdICkge1xuICAgICAgICAgIHZhciBvcGVuX3BhcmVucyA9IDE7IC8vIE9uZSBvcGVuIHRoYXQgaXNuJ3QgaW4gdGhlIGNhcHR1cmVcbiAgICAgICAgICBmb3IgKCB2YXIgbGVuID0gMDsgbGVuIDwgdXJsLmxlbmd0aDsgbGVuKysgKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKCB1cmxbbGVuXSApIHtcbiAgICAgICAgICAgIGNhc2UgXCIoXCI6XG4gICAgICAgICAgICAgIG9wZW5fcGFyZW5zKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIilcIjpcbiAgICAgICAgICAgICAgaWYgKCAtLW9wZW5fcGFyZW5zID09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdW1lZCAtPSB1cmwubGVuZ3RoIC0gbGVuO1xuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMCwgbGVuKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9jZXNzIGVzY2FwZXMgb25seVxuICAgICAgICB1cmwgPSB0aGlzLmRpYWxlY3QuaW5saW5lLl9fY2FsbF9fLmNhbGwoIHRoaXMsIHVybCwgL1xcXFwvIClbMF07XG5cbiAgICAgICAgYXR0cnMgPSB7IGhyZWY6IHVybCB8fCBcIlwiIH07XG4gICAgICAgIGlmICggbVszXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGF0dHJzLnRpdGxlID0gbVszXTtcblxuICAgICAgICBsaW5rID0gWyBcImxpbmtcIiwgYXR0cnMgXS5jb25jYXQoIGNoaWxkcmVuICk7XG4gICAgICAgIHJldHVybiBbIGNvbnN1bWVkLCBsaW5rIF07XG4gICAgICB9XG5cbiAgICAgIC8vIFtBbHQgdGV4dF1baWRdXG4gICAgICAvLyBbQWx0IHRleHRdIFtpZF1cbiAgICAgIG0gPSB0ZXh0Lm1hdGNoKCAvXlxccypcXFsoLio/KVxcXS8gKTtcblxuICAgICAgaWYgKCBtICkge1xuXG4gICAgICAgIGNvbnN1bWVkICs9IG1bIDAgXS5sZW5ndGg7XG5cbiAgICAgICAgLy8gW2xpbmtzXVtdIHVzZXMgbGlua3MgYXMgaXRzIHJlZmVyZW5jZVxuICAgICAgICBhdHRycyA9IHsgcmVmOiAoIG1bIDEgXSB8fCBTdHJpbmcoY2hpbGRyZW4pICkudG9Mb3dlckNhc2UoKSwgIG9yaWdpbmFsOiBvcmlnLnN1YnN0ciggMCwgY29uc3VtZWQgKSB9O1xuXG4gICAgICAgIGxpbmsgPSBbIFwibGlua19yZWZcIiwgYXR0cnMgXS5jb25jYXQoIGNoaWxkcmVuICk7XG5cbiAgICAgICAgLy8gV2UgY2FuJ3QgY2hlY2sgaWYgdGhlIHJlZmVyZW5jZSBpcyBrbm93biBoZXJlIGFzIGl0IGxpa2VseSB3b250IGJlXG4gICAgICAgIC8vIGZvdW5kIHRpbGwgYWZ0ZXIuIENoZWNrIGl0IGluIG1kIHRyZWUtPmhtdGwgdHJlZSBjb252ZXJzaW9uLlxuICAgICAgICAvLyBTdG9yZSB0aGUgb3JpZ2luYWwgc28gdGhhdCBjb252ZXJzaW9uIGNhbiByZXZlcnQgaWYgdGhlIHJlZiBpc24ndCBmb3VuZC5cbiAgICAgICAgcmV0dXJuIFsgY29uc3VtZWQsIGxpbmsgXTtcbiAgICAgIH1cblxuICAgICAgLy8gW2lkXVxuICAgICAgLy8gT25seSBpZiBpZCBpcyBwbGFpbiAobm8gZm9ybWF0dGluZy4pXG4gICAgICBpZiAoIGNoaWxkcmVuLmxlbmd0aCA9PSAxICYmIHR5cGVvZiBjaGlsZHJlblswXSA9PSBcInN0cmluZ1wiICkge1xuXG4gICAgICAgIGF0dHJzID0geyByZWY6IGNoaWxkcmVuWzBdLnRvTG93ZXJDYXNlKCksICBvcmlnaW5hbDogb3JpZy5zdWJzdHIoIDAsIGNvbnN1bWVkICkgfTtcbiAgICAgICAgbGluayA9IFsgXCJsaW5rX3JlZlwiLCBhdHRycywgY2hpbGRyZW5bMF0gXTtcbiAgICAgICAgcmV0dXJuIFsgY29uc3VtZWQsIGxpbmsgXTtcbiAgICAgIH1cblxuICAgICAgLy8gSnVzdCBjb25zdW1lIHRoZSBcIltcIlxuICAgICAgcmV0dXJuIFsgMSwgXCJbXCIgXTtcbiAgICB9LFxuXG5cbiAgICBcIjxcIjogZnVuY3Rpb24gYXV0b0xpbmsoIHRleHQgKSB7XG4gICAgICB2YXIgbTtcblxuICAgICAgaWYgKCAoIG0gPSB0ZXh0Lm1hdGNoKCAvXjwoPzooKGh0dHBzP3xmdHB8bWFpbHRvKTpbXj5dKyl8KC4qP0AuKj9cXC5bYS16QS1aXSspKT4vICkgKSAhPSBudWxsICkge1xuICAgICAgICBpZiAoIG1bM10gKSB7XG4gICAgICAgICAgcmV0dXJuIFsgbVswXS5sZW5ndGgsIFsgXCJsaW5rXCIsIHsgaHJlZjogXCJtYWlsdG86XCIgKyBtWzNdIH0sIG1bM10gXSBdO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIG1bMl0gPT0gXCJtYWlsdG9cIiApIHtcbiAgICAgICAgICByZXR1cm4gWyBtWzBdLmxlbmd0aCwgWyBcImxpbmtcIiwgeyBocmVmOiBtWzFdIH0sIG1bMV0uc3Vic3RyKFwibWFpbHRvOlwiLmxlbmd0aCApIF0gXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIFsgbVswXS5sZW5ndGgsIFsgXCJsaW5rXCIsIHsgaHJlZjogbVsxXSB9LCBtWzFdIF0gXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFsgMSwgXCI8XCIgXTtcbiAgICB9LFxuXG4gICAgXCJgXCI6IGZ1bmN0aW9uIGlubGluZUNvZGUoIHRleHQgKSB7XG4gICAgICAvLyBJbmxpbmUgY29kZSBibG9jay4gYXMgbWFueSBiYWNrdGlja3MgYXMgeW91IGxpa2UgdG8gc3RhcnQgaXRcbiAgICAgIC8vIEFsd2F5cyBza2lwIG92ZXIgdGhlIG9wZW5pbmcgdGlja3MuXG4gICAgICB2YXIgbSA9IHRleHQubWF0Y2goIC8oYCspKChbXFxzXFxTXSo/KVxcMSkvICk7XG5cbiAgICAgIGlmICggbSAmJiBtWzJdIClcbiAgICAgICAgcmV0dXJuIFsgbVsxXS5sZW5ndGggKyBtWzJdLmxlbmd0aCwgWyBcImlubGluZWNvZGVcIiwgbVszXSBdIF07XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gVE9ETzogTm8gbWF0Y2hpbmcgZW5kIGNvZGUgZm91bmQgLSB3YXJuIVxuICAgICAgICByZXR1cm4gWyAxLCBcImBcIiBdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBcIiAgXFxuXCI6IGZ1bmN0aW9uIGxpbmVCcmVhayggdGV4dCApIHtcbiAgICAgIHJldHVybiBbIDMsIFsgXCJsaW5lYnJlYWtcIiBdIF07XG4gICAgfVxuXG59O1xuXG4vLyBNZXRhIEhlbHBlci9nZW5lcmF0b3IgbWV0aG9kIGZvciBlbSBhbmQgc3Ryb25nIGhhbmRsaW5nXG5mdW5jdGlvbiBzdHJvbmdfZW0oIHRhZywgbWQgKSB7XG5cbiAgdmFyIHN0YXRlX3Nsb3QgPSB0YWcgKyBcIl9zdGF0ZVwiLFxuICAgICAgb3RoZXJfc2xvdCA9IHRhZyA9PSBcInN0cm9uZ1wiID8gXCJlbV9zdGF0ZVwiIDogXCJzdHJvbmdfc3RhdGVcIjtcblxuICBmdW5jdGlvbiBDbG9zZVRhZyhsZW4pIHtcbiAgICB0aGlzLmxlbl9hZnRlciA9IGxlbjtcbiAgICB0aGlzLm5hbWUgPSBcImNsb3NlX1wiICsgbWQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCB0ZXh0LCBvcmlnX21hdGNoICkge1xuXG4gICAgaWYgKCB0aGlzW3N0YXRlX3Nsb3RdWzBdID09IG1kICkge1xuICAgICAgLy8gTW9zdCByZWNlbnQgZW0gaXMgb2YgdGhpcyB0eXBlXG4gICAgICAvL0Q6dGhpcy5kZWJ1ZyhcImNsb3NpbmdcIiwgbWQpO1xuICAgICAgdGhpc1tzdGF0ZV9zbG90XS5zaGlmdCgpO1xuXG4gICAgICAvLyBcIkNvbnN1bWVcIiBldmVyeXRoaW5nIHRvIGdvIGJhY2sgdG8gdGhlIHJlY3J1c2lvbiBpbiB0aGUgZWxzZS1ibG9jayBiZWxvd1xuICAgICAgcmV0dXJuWyB0ZXh0Lmxlbmd0aCwgbmV3IENsb3NlVGFnKHRleHQubGVuZ3RoLW1kLmxlbmd0aCkgXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBTdG9yZSBhIGNsb25lIG9mIHRoZSBlbS9zdHJvbmcgc3RhdGVzXG4gICAgICB2YXIgb3RoZXIgPSB0aGlzW290aGVyX3Nsb3RdLnNsaWNlKCksXG4gICAgICAgICAgc3RhdGUgPSB0aGlzW3N0YXRlX3Nsb3RdLnNsaWNlKCk7XG5cbiAgICAgIHRoaXNbc3RhdGVfc2xvdF0udW5zaGlmdChtZCk7XG5cbiAgICAgIC8vRDp0aGlzLmRlYnVnX2luZGVudCArPSBcIiAgXCI7XG5cbiAgICAgIC8vIFJlY3Vyc2VcbiAgICAgIHZhciByZXMgPSB0aGlzLnByb2Nlc3NJbmxpbmUoIHRleHQuc3Vic3RyKCBtZC5sZW5ndGggKSApO1xuICAgICAgLy9EOnRoaXMuZGVidWdfaW5kZW50ID0gdGhpcy5kZWJ1Z19pbmRlbnQuc3Vic3RyKDIpO1xuXG4gICAgICB2YXIgbGFzdCA9IHJlc1tyZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgIC8vRDp0aGlzLmRlYnVnKFwicHJvY2Vzc0lubGluZSBmcm9tXCIsIHRhZyArIFwiOiBcIiwgdW5ldmFsKCByZXMgKSApO1xuXG4gICAgICB2YXIgY2hlY2sgPSB0aGlzW3N0YXRlX3Nsb3RdLnNoaWZ0KCk7XG4gICAgICBpZiAoIGxhc3QgaW5zdGFuY2VvZiBDbG9zZVRhZyApIHtcbiAgICAgICAgcmVzLnBvcCgpO1xuICAgICAgICAvLyBXZSBtYXRjaGVkISBIdXp6YWguXG4gICAgICAgIHZhciBjb25zdW1lZCA9IHRleHQubGVuZ3RoIC0gbGFzdC5sZW5fYWZ0ZXI7XG4gICAgICAgIHJldHVybiBbIGNvbnN1bWVkLCBbIHRhZyBdLmNvbmNhdChyZXMpIF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgc3RhdGUgb2YgdGhlIG90aGVyIGtpbmQuIFdlIG1pZ2h0IGhhdmUgbWlzdGFrZW5seSBjbG9zZWQgaXQuXG4gICAgICAgIHRoaXNbb3RoZXJfc2xvdF0gPSBvdGhlcjtcbiAgICAgICAgdGhpc1tzdGF0ZV9zbG90XSA9IHN0YXRlO1xuXG4gICAgICAgIC8vIFdlIGNhbid0IHJldXNlIHRoZSBwcm9jZXNzZWQgcmVzdWx0IGFzIGl0IGNvdWxkIGhhdmUgd3JvbmcgcGFyc2luZyBjb250ZXh0cyBpbiBpdC5cbiAgICAgICAgcmV0dXJuIFsgbWQubGVuZ3RoLCBtZCBdO1xuICAgICAgfVxuICAgIH1cbiAgfTsgLy8gRW5kIHJldHVybmVkIGZ1bmN0aW9uXG59XG5cbk1hcmtkb3duLmRpYWxlY3RzLkdydWJlci5pbmxpbmVbXCIqKlwiXSA9IHN0cm9uZ19lbShcInN0cm9uZ1wiLCBcIioqXCIpO1xuTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyLmlubGluZVtcIl9fXCJdID0gc3Ryb25nX2VtKFwic3Ryb25nXCIsIFwiX19cIik7XG5NYXJrZG93bi5kaWFsZWN0cy5HcnViZXIuaW5saW5lW1wiKlwiXSAgPSBzdHJvbmdfZW0oXCJlbVwiLCBcIipcIik7XG5NYXJrZG93bi5kaWFsZWN0cy5HcnViZXIuaW5saW5lW1wiX1wiXSAgPSBzdHJvbmdfZW0oXCJlbVwiLCBcIl9cIik7XG5cblxuLy8gQnVpbGQgZGVmYXVsdCBvcmRlciBmcm9tIGluc2VydGlvbiBvcmRlci5cbk1hcmtkb3duLmJ1aWxkQmxvY2tPcmRlciA9IGZ1bmN0aW9uKGQpIHtcbiAgdmFyIG9yZCA9IFtdO1xuICBmb3IgKCB2YXIgaSBpbiBkICkge1xuICAgIGlmICggaSA9PSBcIl9fb3JkZXJfX1wiIHx8IGkgPT0gXCJfX2NhbGxfX1wiICkgY29udGludWU7XG4gICAgb3JkLnB1c2goIGkgKTtcbiAgfVxuICBkLl9fb3JkZXJfXyA9IG9yZDtcbn07XG5cbi8vIEJ1aWxkIHBhdHRlcm5zIGZvciBpbmxpbmUgbWF0Y2hlclxuTWFya2Rvd24uYnVpbGRJbmxpbmVQYXR0ZXJucyA9IGZ1bmN0aW9uKGQpIHtcbiAgdmFyIHBhdHRlcm5zID0gW107XG5cbiAgZm9yICggdmFyIGkgaW4gZCApIHtcbiAgICAvLyBfX2Zvb19fIGlzIHJlc2VydmVkIGFuZCBub3QgYSBwYXR0ZXJuXG4gICAgaWYgKCBpLm1hdGNoKCAvXl9fLipfXyQvKSApIGNvbnRpbnVlO1xuICAgIHZhciBsID0gaS5yZXBsYWNlKCAvKFtcXFxcLiorP3woKVxcW1xcXXt9XSkvZywgXCJcXFxcJDFcIiApXG4gICAgICAgICAgICAgLnJlcGxhY2UoIC9cXG4vLCBcIlxcXFxuXCIgKTtcbiAgICBwYXR0ZXJucy5wdXNoKCBpLmxlbmd0aCA9PSAxID8gbCA6IFwiKD86XCIgKyBsICsgXCIpXCIgKTtcbiAgfVxuXG4gIHBhdHRlcm5zID0gcGF0dGVybnMuam9pbihcInxcIik7XG4gIGQuX19wYXR0ZXJuc19fID0gcGF0dGVybnM7XG4gIC8vcHJpbnQoXCJwYXR0ZXJuczpcIiwgdW5ldmFsKCBwYXR0ZXJucyApICk7XG5cbiAgdmFyIGZuID0gZC5fX2NhbGxfXztcbiAgZC5fX2NhbGxfXyA9IGZ1bmN0aW9uKHRleHQsIHBhdHRlcm4pIHtcbiAgICBpZiAoIHBhdHRlcm4gIT0gdW5kZWZpbmVkICkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgdGV4dCwgcGF0dGVybik7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCB0ZXh0LCBwYXR0ZXJucyk7XG4gICAgfVxuICB9O1xufTtcblxuTWFya2Rvd24uRGlhbGVjdEhlbHBlcnMgPSB7fTtcbk1hcmtkb3duLkRpYWxlY3RIZWxwZXJzLmlubGluZV91bnRpbF9jaGFyID0gZnVuY3Rpb24oIHRleHQsIHdhbnQgKSB7XG4gIHZhciBjb25zdW1lZCA9IDAsXG4gICAgICBub2RlcyA9IFtdO1xuXG4gIHdoaWxlICggdHJ1ZSApIHtcbiAgICBpZiAoIHRleHQuY2hhckF0KCBjb25zdW1lZCApID09IHdhbnQgKSB7XG4gICAgICAvLyBGb3VuZCB0aGUgY2hhcmFjdGVyIHdlIHdlcmUgbG9va2luZyBmb3JcbiAgICAgIGNvbnN1bWVkKys7XG4gICAgICByZXR1cm4gWyBjb25zdW1lZCwgbm9kZXMgXTtcbiAgICB9XG5cbiAgICBpZiAoIGNvbnN1bWVkID49IHRleHQubGVuZ3RoICkge1xuICAgICAgLy8gTm8gY2xvc2luZyBjaGFyIGZvdW5kLiBBYm9ydC5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciByZXMgPSB0aGlzLmRpYWxlY3QuaW5saW5lLl9fb25lRWxlbWVudF9fLmNhbGwodGhpcywgdGV4dC5zdWJzdHIoIGNvbnN1bWVkICkgKTtcbiAgICBjb25zdW1lZCArPSByZXNbIDAgXTtcbiAgICAvLyBBZGQgYW55IHJldHVybmVkIG5vZGVzLlxuICAgIG5vZGVzLnB1c2guYXBwbHkoIG5vZGVzLCByZXMuc2xpY2UoIDEgKSApO1xuICB9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBtYWtlIHN1Yi1jbGFzc2luZyBhIGRpYWxlY3QgZWFzaWVyXG5NYXJrZG93bi5zdWJjbGFzc0RpYWxlY3QgPSBmdW5jdGlvbiggZCApIHtcbiAgZnVuY3Rpb24gQmxvY2soKSB7fVxuICBCbG9jay5wcm90b3R5cGUgPSBkLmJsb2NrO1xuICBmdW5jdGlvbiBJbmxpbmUoKSB7fVxuICBJbmxpbmUucHJvdG90eXBlID0gZC5pbmxpbmU7XG5cbiAgcmV0dXJuIHsgYmxvY2s6IG5ldyBCbG9jaygpLCBpbmxpbmU6IG5ldyBJbmxpbmUoKSB9O1xufTtcblxuTWFya2Rvd24uYnVpbGRCbG9ja09yZGVyICggTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyLmJsb2NrICk7XG5NYXJrZG93bi5idWlsZElubGluZVBhdHRlcm5zKCBNYXJrZG93bi5kaWFsZWN0cy5HcnViZXIuaW5saW5lICk7XG5cbk1hcmtkb3duLmRpYWxlY3RzLk1hcnVrdSA9IE1hcmtkb3duLnN1YmNsYXNzRGlhbGVjdCggTWFya2Rvd24uZGlhbGVjdHMuR3J1YmVyICk7XG5cbk1hcmtkb3duLmRpYWxlY3RzLk1hcnVrdS5wcm9jZXNzTWV0YUhhc2ggPSBmdW5jdGlvbiBwcm9jZXNzTWV0YUhhc2goIG1ldGFfc3RyaW5nICkge1xuICB2YXIgbWV0YSA9IHNwbGl0X21ldGFfaGFzaCggbWV0YV9zdHJpbmcgKSxcbiAgICAgIGF0dHIgPSB7fTtcblxuICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBtZXRhLmxlbmd0aDsgKytpICkge1xuICAgIC8vIGlkOiAjZm9vXG4gICAgaWYgKCAvXiMvLnRlc3QoIG1ldGFbIGkgXSApICkge1xuICAgICAgYXR0ci5pZCA9IG1ldGFbIGkgXS5zdWJzdHJpbmcoIDEgKTtcbiAgICB9XG4gICAgLy8gY2xhc3M6IC5mb29cbiAgICBlbHNlIGlmICggL15cXC4vLnRlc3QoIG1ldGFbIGkgXSApICkge1xuICAgICAgLy8gaWYgY2xhc3MgYWxyZWFkeSBleGlzdHMsIGFwcGVuZCB0aGUgbmV3IG9uZVxuICAgICAgaWYgKCBhdHRyW1wiY2xhc3NcIl0gKSB7XG4gICAgICAgIGF0dHJbXCJjbGFzc1wiXSA9IGF0dHJbXCJjbGFzc1wiXSArIG1ldGFbIGkgXS5yZXBsYWNlKCAvLi8sIFwiIFwiICk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYXR0cltcImNsYXNzXCJdID0gbWV0YVsgaSBdLnN1YnN0cmluZyggMSApO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBhdHRyaWJ1dGU6IGZvbz1iYXJcbiAgICBlbHNlIGlmICggL1xcPS8udGVzdCggbWV0YVsgaSBdICkgKSB7XG4gICAgICB2YXIgcyA9IG1ldGFbIGkgXS5zcGxpdCggL1xcPS8gKTtcbiAgICAgIGF0dHJbIHNbIDAgXSBdID0gc1sgMSBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRyO1xufVxuXG5mdW5jdGlvbiBzcGxpdF9tZXRhX2hhc2goIG1ldGFfc3RyaW5nICkge1xuICB2YXIgbWV0YSA9IG1ldGFfc3RyaW5nLnNwbGl0KCBcIlwiICksXG4gICAgICBwYXJ0cyA9IFsgXCJcIiBdLFxuICAgICAgaW5fcXVvdGVzID0gZmFsc2U7XG5cbiAgd2hpbGUgKCBtZXRhLmxlbmd0aCApIHtcbiAgICB2YXIgbGV0dGVyID0gbWV0YS5zaGlmdCgpO1xuICAgIHN3aXRjaCAoIGxldHRlciApIHtcbiAgICAgIGNhc2UgXCIgXCIgOlxuICAgICAgICAvLyBpZiB3ZSdyZSBpbiBhIHF1b3RlZCBzZWN0aW9uLCBrZWVwIGl0XG4gICAgICAgIGlmICggaW5fcXVvdGVzICkge1xuICAgICAgICAgIHBhcnRzWyBwYXJ0cy5sZW5ndGggLSAxIF0gKz0gbGV0dGVyO1xuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSBtYWtlIGEgbmV3IHBhcnRcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcGFydHMucHVzaCggXCJcIiApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIidcIiA6XG4gICAgICBjYXNlICdcIicgOlxuICAgICAgICAvLyByZXZlcnNlIHRoZSBxdW90ZXMgYW5kIG1vdmUgc3RyYWlnaHQgb25cbiAgICAgICAgaW5fcXVvdGVzID0gIWluX3F1b3RlcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiXFxcXFwiIDpcbiAgICAgICAgLy8gc2hpZnQgb2ZmIHRoZSBuZXh0IGxldHRlciB0byBiZSB1c2VkIHN0cmFpZ2h0IGF3YXkuXG4gICAgICAgIC8vIGl0IHdhcyBlc2NhcGVkIHNvIHdlJ2xsIGtlZXAgaXQgd2hhdGV2ZXIgaXQgaXNcbiAgICAgICAgbGV0dGVyID0gbWV0YS5zaGlmdCgpO1xuICAgICAgZGVmYXVsdCA6XG4gICAgICAgIHBhcnRzWyBwYXJ0cy5sZW5ndGggLSAxIF0gKz0gbGV0dGVyO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbk1hcmtkb3duLmRpYWxlY3RzLk1hcnVrdS5ibG9jay5kb2N1bWVudF9tZXRhID0gZnVuY3Rpb24gZG9jdW1lbnRfbWV0YSggYmxvY2ssIG5leHQgKSB7XG4gIC8vIHdlJ3JlIG9ubHkgaW50ZXJlc3RlZCBpbiB0aGUgZmlyc3QgYmxvY2tcbiAgaWYgKCBibG9jay5saW5lTnVtYmVyID4gMSApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgLy8gZG9jdW1lbnRfbWV0YSBibG9ja3MgY29uc2lzdCBvZiBvbmUgb3IgbW9yZSBsaW5lcyBvZiBgS2V5OiBWYWx1ZVxcbmBcbiAgaWYgKCAhIGJsb2NrLm1hdGNoKCAvXig/Olxcdys6LipcXG4pKlxcdys6LiokLyApICkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAvLyBtYWtlIGFuIGF0dHJpYnV0ZSBub2RlIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgaWYgKCAhZXh0cmFjdF9hdHRyKCB0aGlzLnRyZWUgKSApIHtcbiAgICB0aGlzLnRyZWUuc3BsaWNlKCAxLCAwLCB7fSApO1xuICB9XG5cbiAgdmFyIHBhaXJzID0gYmxvY2suc3BsaXQoIC9cXG4vICk7XG4gIGZvciAoIHAgaW4gcGFpcnMgKSB7XG4gICAgdmFyIG0gPSBwYWlyc1sgcCBdLm1hdGNoKCAvKFxcdyspOlxccyooLiopJC8gKSxcbiAgICAgICAga2V5ID0gbVsgMSBdLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIHZhbHVlID0gbVsgMiBdO1xuXG4gICAgdGhpcy50cmVlWyAxIF1bIGtleSBdID0gdmFsdWU7XG4gIH1cblxuICAvLyBkb2N1bWVudF9tZXRhIHByb2R1Y2VzIG5vIGNvbnRlbnQhXG4gIHJldHVybiBbXTtcbn07XG5cbk1hcmtkb3duLmRpYWxlY3RzLk1hcnVrdS5ibG9jay5ibG9ja19tZXRhID0gZnVuY3Rpb24gYmxvY2tfbWV0YSggYmxvY2ssIG5leHQgKSB7XG4gIC8vIGNoZWNrIGlmIHRoZSBsYXN0IGxpbmUgb2YgdGhlIGJsb2NrIGlzIGFuIG1ldGEgaGFzaFxuICB2YXIgbSA9IGJsb2NrLm1hdGNoKCAvKF58XFxuKSB7MCwzfVxcezpcXHMqKCg/OlxcXFxcXH18W15cXH1dKSopXFxzKlxcfSQvICk7XG4gIGlmICggIW0gKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIC8vIHByb2Nlc3MgdGhlIG1ldGEgaGFzaFxuICB2YXIgYXR0ciA9IHRoaXMuZGlhbGVjdC5wcm9jZXNzTWV0YUhhc2goIG1bIDIgXSApO1xuXG4gIHZhciBoYXNoO1xuXG4gIC8vIGlmIHdlIG1hdGNoZWQgXiB0aGVuIHdlIG5lZWQgdG8gYXBwbHkgbWV0YSB0byB0aGUgcHJldmlvdXMgYmxvY2tcbiAgaWYgKCBtWyAxIF0gPT09IFwiXCIgKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnRyZWVbIHRoaXMudHJlZS5sZW5ndGggLSAxIF07XG4gICAgaGFzaCA9IGV4dHJhY3RfYXR0ciggbm9kZSApO1xuXG4gICAgLy8gaWYgdGhlIG5vZGUgaXMgYSBzdHJpbmcgKHJhdGhlciB0aGFuIEpzb25NTCksIGJhaWxcbiAgICBpZiAoIHR5cGVvZiBub2RlID09PSBcInN0cmluZ1wiICkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIC8vIGNyZWF0ZSB0aGUgYXR0cmlidXRlIGhhc2ggaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIGlmICggIWhhc2ggKSB7XG4gICAgICBoYXNoID0ge307XG4gICAgICBub2RlLnNwbGljZSggMSwgMCwgaGFzaCApO1xuICAgIH1cblxuICAgIC8vIGFkZCB0aGUgYXR0cmlidXRlcyBpblxuICAgIGZvciAoIGEgaW4gYXR0ciApIHtcbiAgICAgIGhhc2hbIGEgXSA9IGF0dHJbIGEgXTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gbm90aGluZyBzbyB0aGUgbWV0YSBoYXNoIGlzIHJlbW92ZWRcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBwdWxsIHRoZSBtZXRhIGhhc2ggb2ZmIHRoZSBibG9jayBhbmQgcHJvY2VzcyB3aGF0J3MgbGVmdFxuICB2YXIgYiA9IGJsb2NrLnJlcGxhY2UoIC9cXG4uKiQvLCBcIlwiICksXG4gICAgICByZXN1bHQgPSB0aGlzLnByb2Nlc3NCbG9jayggYiwgW10gKTtcblxuICAvLyBnZXQgb3IgbWFrZSB0aGUgYXR0cmlidXRlcyBoYXNoXG4gIGhhc2ggPSBleHRyYWN0X2F0dHIoIHJlc3VsdFsgMCBdICk7XG4gIGlmICggIWhhc2ggKSB7XG4gICAgaGFzaCA9IHt9O1xuICAgIHJlc3VsdFsgMCBdLnNwbGljZSggMSwgMCwgaGFzaCApO1xuICB9XG5cbiAgLy8gYXR0YWNoIHRoZSBhdHRyaWJ1dGVzIHRvIHRoZSBibG9ja1xuICBmb3IgKCBhIGluIGF0dHIgKSB7XG4gICAgaGFzaFsgYSBdID0gYXR0clsgYSBdO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbk1hcmtkb3duLmRpYWxlY3RzLk1hcnVrdS5ibG9jay5kZWZpbml0aW9uX2xpc3QgPSBmdW5jdGlvbiBkZWZpbml0aW9uX2xpc3QoIGJsb2NrLCBuZXh0ICkge1xuICAvLyBvbmUgb3IgbW9yZSB0ZXJtcyBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBkZWZpbml0aW9ucywgaW4gYSBzaW5nbGUgYmxvY2tcbiAgdmFyIHRpZ2h0ID0gL14oKD86W15cXHM6XS4qXFxuKSspOlxccysoW1xcc1xcU10rKSQvLFxuICAgICAgbGlzdCA9IFsgXCJkbFwiIF0sXG4gICAgICBpLCBtO1xuXG4gIC8vIHNlZSBpZiB3ZSdyZSBkZWFsaW5nIHdpdGggYSB0aWdodCBvciBsb29zZSBibG9ja1xuICBpZiAoICggbSA9IGJsb2NrLm1hdGNoKCB0aWdodCApICkgKSB7XG4gICAgLy8gcHVsbCBzdWJzZXF1ZW50IHRpZ2h0IERMIGJsb2NrcyBvdXQgb2YgYG5leHRgXG4gICAgdmFyIGJsb2NrcyA9IFsgYmxvY2sgXTtcbiAgICB3aGlsZSAoIG5leHQubGVuZ3RoICYmIHRpZ2h0LmV4ZWMoIG5leHRbIDAgXSApICkge1xuICAgICAgYmxvY2tzLnB1c2goIG5leHQuc2hpZnQoKSApO1xuICAgIH1cblxuICAgIGZvciAoIHZhciBiID0gMDsgYiA8IGJsb2Nrcy5sZW5ndGg7ICsrYiApIHtcbiAgICAgIHZhciBtID0gYmxvY2tzWyBiIF0ubWF0Y2goIHRpZ2h0ICksXG4gICAgICAgICAgdGVybXMgPSBtWyAxIF0ucmVwbGFjZSggL1xcbiQvLCBcIlwiICkuc3BsaXQoIC9cXG4vICksXG4gICAgICAgICAgZGVmbnMgPSBtWyAyIF0uc3BsaXQoIC9cXG46XFxzKy8gKTtcblxuICAgICAgLy8gcHJpbnQoIHVuZXZhbCggbSApICk7XG5cbiAgICAgIGZvciAoIGkgPSAwOyBpIDwgdGVybXMubGVuZ3RoOyArK2kgKSB7XG4gICAgICAgIGxpc3QucHVzaCggWyBcImR0XCIsIHRlcm1zWyBpIF0gXSApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKCBpID0gMDsgaSA8IGRlZm5zLmxlbmd0aDsgKytpICkge1xuICAgICAgICAvLyBydW4gaW5saW5lIHByb2Nlc3Npbmcgb3ZlciB0aGUgZGVmaW5pdGlvblxuICAgICAgICBsaXN0LnB1c2goIFsgXCJkZFwiIF0uY29uY2F0KCB0aGlzLnByb2Nlc3NJbmxpbmUoIGRlZm5zWyBpIF0ucmVwbGFjZSggLyhcXG4pXFxzKy8sIFwiJDFcIiApICkgKSApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIFsgbGlzdCBdO1xufTtcblxuLy8gc3BsaXRzIG9uIHVuZXNjYXBlZCBpbnN0YW5jZXMgb2YgQGNoLiBJZiBAY2ggaXMgbm90IGEgY2hhcmFjdGVyIHRoZSByZXN1bHRcbi8vIGNhbiBiZSB1bnByZWRpY3RhYmxlXG5cbk1hcmtkb3duLmRpYWxlY3RzLk1hcnVrdS5ibG9jay50YWJsZSA9IGZ1bmN0aW9uIHRhYmxlIChibG9jaywgbmV4dCkge1xuXG4gICAgdmFyIF9zcGxpdF9vbl91bmVzY2FwZWQgPSBmdW5jdGlvbihzLCBjaCkge1xuICAgICAgICBjaCA9IGNoIHx8ICdcXFxccyc7XG4gICAgICAgIGlmIChjaC5tYXRjaCgvXltcXFxcfFxcW1xcXXt9PyouK14kXSQvKSkgeyBjaCA9ICdcXFxcJyArIGNoOyB9XG4gICAgICAgIHZhciByZXMgPSBbIF0sXG4gICAgICAgICAgICByID0gbmV3IFJlZ0V4cCgnXigoPzpcXFxcXFxcXC58W15cXFxcXFxcXCcgKyBjaCArICddKSopJyArIGNoICsgJyguKiknKSxcbiAgICAgICAgICAgIG07XG4gICAgICAgIHdoaWxlKG0gPSBzLm1hdGNoKHIpKSB7XG4gICAgICAgICAgICByZXMucHVzaChtWzFdKTtcbiAgICAgICAgICAgIHMgPSBtWzJdO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoKHMpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHZhciBsZWFkaW5nX3BpcGUgPSAvXiB7MCwzfVxcfCguKylcXG4gezAsM31cXHxcXHMqKFtcXC06XStbXFwtfCA6XSopXFxuKCg/OlxccypcXHwuKig/OlxcbnwkKSkqKSg/PVxcbnwkKS8sXG4gICAgICAgIC8vIGZpbmQgYXQgbGVhc3QgYW4gdW5lc2NhcGVkIHBpcGUgaW4gZWFjaCBsaW5lXG4gICAgICAgIG5vX2xlYWRpbmdfcGlwZSA9IC9eIHswLDN9KFxcUyg/OlxcXFwufFteXFxcXHxdKSpcXHwuKilcXG4gezAsM30oW1xcLTpdK1xccypcXHxbXFwtfCA6XSopXFxuKCg/Oig/OlxcXFwufFteXFxcXHxdKSpcXHwuKig/OlxcbnwkKSkqKSg/PVxcbnwkKS8sXG4gICAgICAgIGksIG07XG4gICAgaWYgKG0gPSBibG9jay5tYXRjaChsZWFkaW5nX3BpcGUpKSB7XG4gICAgICAgIC8vIHJlbW92ZSBsZWFkaW5nIHBpcGVzIGluIGNvbnRlbnRzXG4gICAgICAgIC8vIChoZWFkZXIgYW5kIGhvcml6b250YWwgcnVsZSBhbHJlYWR5IGhhdmUgdGhlIGxlYWRpbmcgcGlwZSBsZWZ0IG91dClcbiAgICAgICAgbVszXSA9IG1bM10ucmVwbGFjZSgvXlxccypcXHwvZ20sICcnKTtcbiAgICB9IGVsc2UgaWYgKCEgKCBtID0gYmxvY2subWF0Y2gobm9fbGVhZGluZ19waXBlKSkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgdGFibGUgPSBbIFwidGFibGVcIiwgWyBcInRoZWFkXCIsIFsgXCJ0clwiIF0gXSwgWyBcInRib2R5XCIgXSBdO1xuXG4gICAgLy8gcmVtb3ZlIHRyYWlsaW5nIHBpcGVzLCB0aGVuIHNwbGl0IG9uIHBpcGVzXG4gICAgLy8gKG5vIGVzY2FwZWQgcGlwZXMgYXJlIGFsbG93ZWQgaW4gaG9yaXpvbnRhbCBydWxlKVxuICAgIG1bMl0gPSBtWzJdLnJlcGxhY2UoL1xcfFxccyokLywgJycpLnNwbGl0KCd8Jyk7XG5cbiAgICAvLyBwcm9jZXNzIGFsaWdubWVudFxuICAgIHZhciBodG1sX2F0dHJzID0gWyBdO1xuICAgIGZvckVhY2ggKG1bMl0sIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIGlmIChzLm1hdGNoKC9eXFxzKi0rOlxccyokLykpICAgICAgIGh0bWxfYXR0cnMucHVzaCh7YWxpZ246IFwicmlnaHRcIn0pO1xuICAgICAgICBlbHNlIGlmIChzLm1hdGNoKC9eXFxzKjotK1xccyokLykpICBodG1sX2F0dHJzLnB1c2goe2FsaWduOiBcImxlZnRcIn0pO1xuICAgICAgICBlbHNlIGlmIChzLm1hdGNoKC9eXFxzKjotKzpcXHMqJC8pKSBodG1sX2F0dHJzLnB1c2goe2FsaWduOiBcImNlbnRlclwifSk7XG4gICAgICAgIGVsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sX2F0dHJzLnB1c2goe30pO1xuICAgIH0pO1xuXG4gICAgLy8gbm93IGZvciB0aGUgaGVhZGVyLCBhdm9pZCBlc2NhcGVkIHBpcGVzXG4gICAgbVsxXSA9IF9zcGxpdF9vbl91bmVzY2FwZWQobVsxXS5yZXBsYWNlKC9cXHxcXHMqJC8sICcnKSwgJ3wnKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbVsxXS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0YWJsZVsxXVsxXS5wdXNoKFsndGgnLCBodG1sX2F0dHJzW2ldIHx8IHt9XS5jb25jYXQoXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NJbmxpbmUobVsxXVtpXS50cmltKCkpKSk7XG4gICAgfVxuXG4gICAgLy8gbm93IGZvciBib2R5IGNvbnRlbnRzXG4gICAgZm9yRWFjaCAobVszXS5yZXBsYWNlKC9cXHxcXHMqJC9tZywgJycpLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gKHJvdykge1xuICAgICAgICB2YXIgaHRtbF9yb3cgPSBbJ3RyJ107XG4gICAgICAgIHJvdyA9IF9zcGxpdF9vbl91bmVzY2FwZWQocm93LCAnfCcpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBodG1sX3Jvdy5wdXNoKFsndGQnLCBodG1sX2F0dHJzW2ldIHx8IHt9XS5jb25jYXQodGhpcy5wcm9jZXNzSW5saW5lKHJvd1tpXS50cmltKCkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGVbMl0ucHVzaChodG1sX3Jvdyk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gW3RhYmxlXTtcbn1cblxuTWFya2Rvd24uZGlhbGVjdHMuTWFydWt1LmlubGluZVsgXCJ7OlwiIF0gPSBmdW5jdGlvbiBpbmxpbmVfbWV0YSggdGV4dCwgbWF0Y2hlcywgb3V0ICkge1xuICBpZiAoICFvdXQubGVuZ3RoICkge1xuICAgIHJldHVybiBbIDIsIFwiezpcIiBdO1xuICB9XG5cbiAgLy8gZ2V0IHRoZSBwcmVjZWVkaW5nIGVsZW1lbnRcbiAgdmFyIGJlZm9yZSA9IG91dFsgb3V0Lmxlbmd0aCAtIDEgXTtcblxuICBpZiAoIHR5cGVvZiBiZWZvcmUgPT09IFwic3RyaW5nXCIgKSB7XG4gICAgcmV0dXJuIFsgMiwgXCJ7OlwiIF07XG4gIH1cblxuICAvLyBtYXRjaCBhIG1ldGEgaGFzaFxuICB2YXIgbSA9IHRleHQubWF0Y2goIC9eXFx7OlxccyooKD86XFxcXFxcfXxbXlxcfV0pKilcXHMqXFx9LyApO1xuXG4gIC8vIG5vIG1hdGNoLCBmYWxzZSBhbGFybVxuICBpZiAoICFtICkge1xuICAgIHJldHVybiBbIDIsIFwiezpcIiBdO1xuICB9XG5cbiAgLy8gYXR0YWNoIHRoZSBhdHRyaWJ1dGVzIHRvIHRoZSBwcmVjZWVkaW5nIGVsZW1lbnRcbiAgdmFyIG1ldGEgPSB0aGlzLmRpYWxlY3QucHJvY2Vzc01ldGFIYXNoKCBtWyAxIF0gKSxcbiAgICAgIGF0dHIgPSBleHRyYWN0X2F0dHIoIGJlZm9yZSApO1xuXG4gIGlmICggIWF0dHIgKSB7XG4gICAgYXR0ciA9IHt9O1xuICAgIGJlZm9yZS5zcGxpY2UoIDEsIDAsIGF0dHIgKTtcbiAgfVxuXG4gIGZvciAoIHZhciBrIGluIG1ldGEgKSB7XG4gICAgYXR0clsgayBdID0gbWV0YVsgayBdO1xuICB9XG5cbiAgLy8gY3V0IG91dCB0aGUgc3RyaW5nIGFuZCByZXBsYWNlIGl0IHdpdGggbm90aGluZ1xuICByZXR1cm4gWyBtWyAwIF0ubGVuZ3RoLCBcIlwiIF07XG59O1xuXG5NYXJrZG93bi5kaWFsZWN0cy5NYXJ1a3UuaW5saW5lLl9fZXNjYXBlX18gPSAvXlxcXFxbXFxcXGBcXCpfe31cXFtcXF0oKSNcXCsuIVxcLXw6XS87XG5cbk1hcmtkb3duLmJ1aWxkQmxvY2tPcmRlciAoIE1hcmtkb3duLmRpYWxlY3RzLk1hcnVrdS5ibG9jayApO1xuTWFya2Rvd24uYnVpbGRJbmxpbmVQYXR0ZXJucyggTWFya2Rvd24uZGlhbGVjdHMuTWFydWt1LmlubGluZSApO1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PSBcIltvYmplY3QgQXJyYXldXCI7XG59O1xuXG52YXIgZm9yRWFjaDtcbi8vIERvbid0IG1lc3Mgd2l0aCBBcnJheS5wcm90b3R5cGUuIEl0cyBub3QgZnJpZW5kbHlcbmlmICggQXJyYXkucHJvdG90eXBlLmZvckVhY2ggKSB7XG4gIGZvckVhY2ggPSBmdW5jdGlvbiggYXJyLCBjYiwgdGhpc3AgKSB7XG4gICAgcmV0dXJuIGFyci5mb3JFYWNoKCBjYiwgdGhpc3AgKTtcbiAgfTtcbn1cbmVsc2Uge1xuICBmb3JFYWNoID0gZnVuY3Rpb24oYXJyLCBjYiwgdGhpc3ApIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY2IuY2FsbCh0aGlzcCB8fCBhcnIsIGFycltpXSwgaSwgYXJyKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGlzRW1wdHkgPSBmdW5jdGlvbiggb2JqICkge1xuICBmb3IgKCB2YXIga2V5IGluIG9iaiApIHtcbiAgICBpZiAoIGhhc093blByb3BlcnR5LmNhbGwoIG9iaiwga2V5ICkgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RfYXR0cigganNvbm1sICkge1xuICByZXR1cm4gaXNBcnJheShqc29ubWwpXG4gICAgICAmJiBqc29ubWwubGVuZ3RoID4gMVxuICAgICAgJiYgdHlwZW9mIGpzb25tbFsgMSBdID09PSBcIm9iamVjdFwiXG4gICAgICAmJiAhKCBpc0FycmF5KGpzb25tbFsgMSBdKSApXG4gICAgICA/IGpzb25tbFsgMSBdXG4gICAgICA6IHVuZGVmaW5lZDtcbn1cblxuXG5cbi8qKlxuICogIHJlbmRlckpzb25NTCgganNvbm1sWywgb3B0aW9uc10gKSAtPiBTdHJpbmdcbiAqICAtIGpzb25tbCAoQXJyYXkpOiBKc29uTUwgYXJyYXkgdG8gcmVuZGVyIHRvIFhNTFxuICogIC0gb3B0aW9ucyAoT2JqZWN0KTogb3B0aW9uc1xuICpcbiAqICBDb252ZXJ0cyB0aGUgZ2l2ZW4gSnNvbk1MIGludG8gd2VsbC1mb3JtZWQgWE1MLlxuICpcbiAqICBUaGUgb3B0aW9ucyBjdXJyZW50bHkgdW5kZXJzdG9vZCBhcmU6XG4gKlxuICogIC0gcm9vdCAoQm9vbGVhbik6IHdldGhlciBvciBub3QgdGhlIHJvb3Qgbm9kZSBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlXG4gKiAgICBvdXRwdXQsIG9yIGp1c3QgaXRzIGNoaWxkcmVuLiBUaGUgZGVmYXVsdCBgZmFsc2VgIGlzIHRvIG5vdCBpbmNsdWRlIHRoZVxuICogICAgcm9vdCBpdHNlbGYuXG4gKi9cbmV4cG9zZS5yZW5kZXJKc29uTUwgPSBmdW5jdGlvbigganNvbm1sLCBvcHRpb25zICkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgLy8gaW5jbHVkZSB0aGUgcm9vdCBlbGVtZW50IGluIHRoZSByZW5kZXJlZCBvdXRwdXQ/XG4gIG9wdGlvbnMucm9vdCA9IG9wdGlvbnMucm9vdCB8fCBmYWxzZTtcblxuICB2YXIgY29udGVudCA9IFtdO1xuXG4gIGlmICggb3B0aW9ucy5yb290ICkge1xuICAgIGNvbnRlbnQucHVzaCggcmVuZGVyX3RyZWUoIGpzb25tbCApICk7XG4gIH1cbiAgZWxzZSB7XG4gICAganNvbm1sLnNoaWZ0KCk7IC8vIGdldCByaWQgb2YgdGhlIHRhZ1xuICAgIGlmICgganNvbm1sLmxlbmd0aCAmJiB0eXBlb2YganNvbm1sWyAwIF0gPT09IFwib2JqZWN0XCIgJiYgISgganNvbm1sWyAwIF0gaW5zdGFuY2VvZiBBcnJheSApICkge1xuICAgICAganNvbm1sLnNoaWZ0KCk7IC8vIGdldCByaWQgb2YgdGhlIGF0dHJpYnV0ZXNcbiAgICB9XG5cbiAgICB3aGlsZSAoIGpzb25tbC5sZW5ndGggKSB7XG4gICAgICBjb250ZW50LnB1c2goIHJlbmRlcl90cmVlKCBqc29ubWwuc2hpZnQoKSApICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQuam9pbiggXCJcXG5cXG5cIiApO1xufTtcblxuZnVuY3Rpb24gZXNjYXBlSFRNTCggdGV4dCApIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSggLyYvZywgXCImYW1wO1wiIClcbiAgICAgICAgICAgICAucmVwbGFjZSggLzwvZywgXCImbHQ7XCIgKVxuICAgICAgICAgICAgIC5yZXBsYWNlKCAvPi9nLCBcIiZndDtcIiApXG4gICAgICAgICAgICAgLnJlcGxhY2UoIC9cIi9nLCBcIiZxdW90O1wiIClcbiAgICAgICAgICAgICAucmVwbGFjZSggLycvZywgXCImIzM5O1wiICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcl90cmVlKCBqc29ubWwgKSB7XG4gIC8vIGJhc2ljIGNhc2VcbiAgaWYgKCB0eXBlb2YganNvbm1sID09PSBcInN0cmluZ1wiICkge1xuICAgIHJldHVybiBlc2NhcGVIVE1MKCBqc29ubWwgKTtcbiAgfVxuXG4gIHZhciB0YWcgPSBqc29ubWwuc2hpZnQoKSxcbiAgICAgIGF0dHJpYnV0ZXMgPSB7fSxcbiAgICAgIGNvbnRlbnQgPSBbXTtcblxuICBpZiAoIGpzb25tbC5sZW5ndGggJiYgdHlwZW9mIGpzb25tbFsgMCBdID09PSBcIm9iamVjdFwiICYmICEoIGpzb25tbFsgMCBdIGluc3RhbmNlb2YgQXJyYXkgKSApIHtcbiAgICBhdHRyaWJ1dGVzID0ganNvbm1sLnNoaWZ0KCk7XG4gIH1cblxuICB3aGlsZSAoIGpzb25tbC5sZW5ndGggKSB7XG4gICAgY29udGVudC5wdXNoKCByZW5kZXJfdHJlZSgganNvbm1sLnNoaWZ0KCkgKSApO1xuICB9XG5cbiAgdmFyIHRhZ19hdHRycyA9IFwiXCI7XG4gIGZvciAoIHZhciBhIGluIGF0dHJpYnV0ZXMgKSB7XG4gICAgdGFnX2F0dHJzICs9IFwiIFwiICsgYSArICc9XCInICsgZXNjYXBlSFRNTCggYXR0cmlidXRlc1sgYSBdICkgKyAnXCInO1xuICB9XG5cbiAgLy8gYmUgY2FyZWZ1bCBhYm91dCBhZGRpbmcgd2hpdGVzcGFjZSBoZXJlIGZvciBpbmxpbmUgZWxlbWVudHNcbiAgaWYgKCB0YWcgPT0gXCJpbWdcIiB8fCB0YWcgPT0gXCJiclwiIHx8IHRhZyA9PSBcImhyXCIgKSB7XG4gICAgcmV0dXJuIFwiPFwiKyB0YWcgKyB0YWdfYXR0cnMgKyBcIi8+XCI7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIFwiPFwiKyB0YWcgKyB0YWdfYXR0cnMgKyBcIj5cIiArIGNvbnRlbnQuam9pbiggXCJcIiApICsgXCI8L1wiICsgdGFnICsgXCI+XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udmVydF90cmVlX3RvX2h0bWwoIHRyZWUsIHJlZmVyZW5jZXMsIG9wdGlvbnMgKSB7XG4gIHZhciBpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBzaGFsbG93IGNsb25lXG4gIHZhciBqc29ubWwgPSB0cmVlLnNsaWNlKCAwICk7XG5cbiAgaWYgKCB0eXBlb2Ygb3B0aW9ucy5wcmVwcm9jZXNzVHJlZU5vZGUgPT09IFwiZnVuY3Rpb25cIiApIHtcbiAgICAgIGpzb25tbCA9IG9wdGlvbnMucHJlcHJvY2Vzc1RyZWVOb2RlKGpzb25tbCwgcmVmZXJlbmNlcyk7XG4gIH1cblxuICAvLyBDbG9uZSBhdHRyaWJ1dGVzIGlmIHRoZXkgZXhpc3RcbiAgdmFyIGF0dHJzID0gZXh0cmFjdF9hdHRyKCBqc29ubWwgKTtcbiAgaWYgKCBhdHRycyApIHtcbiAgICBqc29ubWxbIDEgXSA9IHt9O1xuICAgIGZvciAoIGkgaW4gYXR0cnMgKSB7XG4gICAgICBqc29ubWxbIDEgXVsgaSBdID0gYXR0cnNbIGkgXTtcbiAgICB9XG4gICAgYXR0cnMgPSBqc29ubWxbIDEgXTtcbiAgfVxuXG4gIC8vIGJhc2ljIGNhc2VcbiAgaWYgKCB0eXBlb2YganNvbm1sID09PSBcInN0cmluZ1wiICkge1xuICAgIHJldHVybiBqc29ubWw7XG4gIH1cblxuICAvLyBjb252ZXJ0IHRoaXMgbm9kZVxuICBzd2l0Y2ggKCBqc29ubWxbIDAgXSApIHtcbiAgICBjYXNlIFwiaGVhZGVyXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwiaFwiICsganNvbm1sWyAxIF0ubGV2ZWw7XG4gICAgICBkZWxldGUganNvbm1sWyAxIF0ubGV2ZWw7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYnVsbGV0bGlzdFwiOlxuICAgICAganNvbm1sWyAwIF0gPSBcInVsXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibnVtYmVybGlzdFwiOlxuICAgICAganNvbm1sWyAwIF0gPSBcIm9sXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibGlzdGl0ZW1cIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJsaVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInBhcmFcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJwXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWFya2Rvd25cIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJodG1sXCI7XG4gICAgICBpZiAoIGF0dHJzICkgZGVsZXRlIGF0dHJzLnJlZmVyZW5jZXM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY29kZV9ibG9ja1wiOlxuICAgICAganNvbm1sWyAwIF0gPSBcInByZVwiO1xuICAgICAgaSA9IGF0dHJzID8gMiA6IDE7XG4gICAgICB2YXIgY29kZSA9IFsgXCJjb2RlXCIgXTtcbiAgICAgIGNvZGUucHVzaC5hcHBseSggY29kZSwganNvbm1sLnNwbGljZSggaSwganNvbm1sLmxlbmd0aCAtIGkgKSApO1xuICAgICAganNvbm1sWyBpIF0gPSBjb2RlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImlubGluZWNvZGVcIjpcbiAgICAgIGpzb25tbFsgMCBdID0gXCJjb2RlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaW1nXCI6XG4gICAgICBqc29ubWxbIDEgXS5zcmMgPSBqc29ubWxbIDEgXS5ocmVmO1xuICAgICAgZGVsZXRlIGpzb25tbFsgMSBdLmhyZWY7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibGluZWJyZWFrXCI6XG4gICAgICBqc29ubWxbIDAgXSA9IFwiYnJcIjtcbiAgICBicmVhaztcbiAgICBjYXNlIFwibGlua1wiOlxuICAgICAganNvbm1sWyAwIF0gPSBcImFcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsaW5rX3JlZlwiOlxuICAgICAganNvbm1sWyAwIF0gPSBcImFcIjtcblxuICAgICAgLy8gZ3JhYiB0aGlzIHJlZiBhbmQgY2xlYW4gdXAgdGhlIGF0dHJpYnV0ZSBub2RlXG4gICAgICB2YXIgcmVmID0gcmVmZXJlbmNlc1sgYXR0cnMucmVmIF07XG5cbiAgICAgIC8vIGlmIHRoZSByZWZlcmVuY2UgZXhpc3RzLCBtYWtlIHRoZSBsaW5rXG4gICAgICBpZiAoIHJlZiApIHtcbiAgICAgICAgZGVsZXRlIGF0dHJzLnJlZjtcblxuICAgICAgICAvLyBhZGQgaW4gdGhlIGhyZWYgYW5kIHRpdGxlLCBpZiBwcmVzZW50XG4gICAgICAgIGF0dHJzLmhyZWYgPSByZWYuaHJlZjtcbiAgICAgICAgaWYgKCByZWYudGl0bGUgKSB7XG4gICAgICAgICAgYXR0cnMudGl0bGUgPSByZWYudGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgcmlkIG9mIHRoZSB1bm5lZWRlZCBvcmlnaW5hbCB0ZXh0XG4gICAgICAgIGRlbGV0ZSBhdHRycy5vcmlnaW5hbDtcbiAgICAgIH1cbiAgICAgIC8vIHRoZSByZWZlcmVuY2UgZG9lc24ndCBleGlzdCwgc28gcmV2ZXJ0IHRvIHBsYWluIHRleHRcbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYXR0cnMub3JpZ2luYWw7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaW1nX3JlZlwiOlxuICAgICAganNvbm1sWyAwIF0gPSBcImltZ1wiO1xuXG4gICAgICAvLyBncmFiIHRoaXMgcmVmIGFuZCBjbGVhbiB1cCB0aGUgYXR0cmlidXRlIG5vZGVcbiAgICAgIHZhciByZWYgPSByZWZlcmVuY2VzWyBhdHRycy5yZWYgXTtcblxuICAgICAgLy8gaWYgdGhlIHJlZmVyZW5jZSBleGlzdHMsIG1ha2UgdGhlIGxpbmtcbiAgICAgIGlmICggcmVmICkge1xuICAgICAgICBkZWxldGUgYXR0cnMucmVmO1xuXG4gICAgICAgIC8vIGFkZCBpbiB0aGUgaHJlZiBhbmQgdGl0bGUsIGlmIHByZXNlbnRcbiAgICAgICAgYXR0cnMuc3JjID0gcmVmLmhyZWY7XG4gICAgICAgIGlmICggcmVmLnRpdGxlICkge1xuICAgICAgICAgIGF0dHJzLnRpdGxlID0gcmVmLnRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IHJpZCBvZiB0aGUgdW5uZWVkZWQgb3JpZ2luYWwgdGV4dFxuICAgICAgICBkZWxldGUgYXR0cnMub3JpZ2luYWw7XG4gICAgICB9XG4gICAgICAvLyB0aGUgcmVmZXJlbmNlIGRvZXNuJ3QgZXhpc3QsIHNvIHJldmVydCB0byBwbGFpbiB0ZXh0XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF0dHJzLm9yaWdpbmFsO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxuICAvLyBjb252ZXJ0IGFsbCB0aGUgY2hpbGRyZW5cbiAgaSA9IDE7XG5cbiAgLy8gZGVhbCB3aXRoIHRoZSBhdHRyaWJ1dGUgbm9kZSwgaWYgaXQgZXhpc3RzXG4gIGlmICggYXR0cnMgKSB7XG4gICAgLy8gaWYgdGhlcmUgYXJlIGtleXMsIHNraXAgb3ZlciBpdFxuICAgIGZvciAoIHZhciBrZXkgaW4ganNvbm1sWyAxIF0gKSB7XG4gICAgICAgIGkgPSAyO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gaWYgdGhlcmUgYXJlbid0LCByZW1vdmUgaXRcbiAgICBpZiAoIGkgPT09IDEgKSB7XG4gICAgICBqc29ubWwuc3BsaWNlKCBpLCAxICk7XG4gICAgfVxuICB9XG5cbiAgZm9yICggOyBpIDwganNvbm1sLmxlbmd0aDsgKytpICkge1xuICAgIGpzb25tbFsgaSBdID0gY29udmVydF90cmVlX3RvX2h0bWwoIGpzb25tbFsgaSBdLCByZWZlcmVuY2VzLCBvcHRpb25zICk7XG4gIH1cblxuICByZXR1cm4ganNvbm1sO1xufVxuXG5cbi8vIG1lcmdlcyBhZGphY2VudCB0ZXh0IG5vZGVzIGludG8gYSBzaW5nbGUgbm9kZVxuZnVuY3Rpb24gbWVyZ2VfdGV4dF9ub2RlcygganNvbm1sICkge1xuICAvLyBza2lwIHRoZSB0YWcgbmFtZSBhbmQgYXR0cmlidXRlIGhhc2hcbiAgdmFyIGkgPSBleHRyYWN0X2F0dHIoIGpzb25tbCApID8gMiA6IDE7XG5cbiAgd2hpbGUgKCBpIDwganNvbm1sLmxlbmd0aCApIHtcbiAgICAvLyBpZiBpdCdzIGEgc3RyaW5nIGNoZWNrIHRoZSBuZXh0IGl0ZW0gdG9vXG4gICAgaWYgKCB0eXBlb2YganNvbm1sWyBpIF0gPT09IFwic3RyaW5nXCIgKSB7XG4gICAgICBpZiAoIGkgKyAxIDwganNvbm1sLmxlbmd0aCAmJiB0eXBlb2YganNvbm1sWyBpICsgMSBdID09PSBcInN0cmluZ1wiICkge1xuICAgICAgICAvLyBtZXJnZSB0aGUgc2Vjb25kIHN0cmluZyBpbnRvIHRoZSBmaXJzdCBhbmQgcmVtb3ZlIGl0XG4gICAgICAgIGpzb25tbFsgaSBdICs9IGpzb25tbC5zcGxpY2UoIGkgKyAxLCAxIClbIDAgXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICArK2k7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIGl0J3Mgbm90IGEgc3RyaW5nIHJlY3Vyc2VcbiAgICBlbHNlIHtcbiAgICAgIG1lcmdlX3RleHRfbm9kZXMoIGpzb25tbFsgaSBdICk7XG4gICAgICArK2k7XG4gICAgfVxuICB9XG59XG5cbn0gKSggKGZ1bmN0aW9uKCkge1xuICBpZiAoIHR5cGVvZiBleHBvcnRzID09PSBcInVuZGVmaW5lZFwiICkge1xuICAgIHdpbmRvdy5tYXJrZG93biA9IHt9O1xuICAgIHJldHVybiB3aW5kb3cubWFya2Rvd247XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGV4cG9ydHM7XG4gIH1cbn0gKSgpICk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoZ2xvYmFsKSB7XG5cbiAgICAvLyBtaW5pbWFsIHN5bWJvbCBwb2x5ZmlsbCBmb3IgSUUxMSBhbmQgb3RoZXJzXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIFN5bWJvbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgU3ltYm9sLm5vbk5hdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgU1RBVEVfUExBSU5URVhUID0gU3ltYm9sKCdwbGFpbnRleHQnKTtcbiAgICBjb25zdCBTVEFURV9IVE1MICAgICAgPSBTeW1ib2woJ2h0bWwnKTtcbiAgICBjb25zdCBTVEFURV9DT01NRU5UICAgPSBTeW1ib2woJ2NvbW1lbnQnKTtcblxuICAgIGNvbnN0IEFMTE9XRURfVEFHU19SRUdFWCAgPSAvPChcXHcqKT4vZztcbiAgICBjb25zdCBOT1JNQUxJWkVfVEFHX1JFR0VYID0gLzxcXC8/KFteXFxzXFwvPl0rKS87XG5cbiAgICBmdW5jdGlvbiBzdHJpcHRhZ3MoaHRtbCwgYWxsb3dhYmxlX3RhZ3MsIHRhZ19yZXBsYWNlbWVudCkge1xuICAgICAgICBodG1sICAgICAgICAgICAgPSBodG1sIHx8ICcnO1xuICAgICAgICBhbGxvd2FibGVfdGFncyAgPSBhbGxvd2FibGVfdGFncyB8fCBbXTtcbiAgICAgICAgdGFnX3JlcGxhY2VtZW50ID0gdGFnX3JlcGxhY2VtZW50IHx8ICcnO1xuXG4gICAgICAgIGxldCBjb250ZXh0ID0gaW5pdF9jb250ZXh0KGFsbG93YWJsZV90YWdzLCB0YWdfcmVwbGFjZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBzdHJpcHRhZ3NfaW50ZXJuYWwoaHRtbCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdF9zdHJpcHRhZ3Nfc3RyZWFtKGFsbG93YWJsZV90YWdzLCB0YWdfcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgYWxsb3dhYmxlX3RhZ3MgID0gYWxsb3dhYmxlX3RhZ3MgfHwgW107XG4gICAgICAgIHRhZ19yZXBsYWNlbWVudCA9IHRhZ19yZXBsYWNlbWVudCB8fCAnJztcblxuICAgICAgICBsZXQgY29udGV4dCA9IGluaXRfY29udGV4dChhbGxvd2FibGVfdGFncywgdGFnX3JlcGxhY2VtZW50KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3RyaXB0YWdzX3N0cmVhbShodG1sKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaXB0YWdzX2ludGVybmFsKGh0bWwgfHwgJycsIGNvbnRleHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0cmlwdGFncy5pbml0X3N0cmVhbWluZ19tb2RlID0gaW5pdF9zdHJpcHRhZ3Nfc3RyZWFtO1xuXG4gICAgZnVuY3Rpb24gaW5pdF9jb250ZXh0KGFsbG93YWJsZV90YWdzLCB0YWdfcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgYWxsb3dhYmxlX3RhZ3MgPSBwYXJzZV9hbGxvd2FibGVfdGFncyhhbGxvd2FibGVfdGFncyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFsbG93YWJsZV90YWdzIDogYWxsb3dhYmxlX3RhZ3MsXG4gICAgICAgICAgICB0YWdfcmVwbGFjZW1lbnQ6IHRhZ19yZXBsYWNlbWVudCxcblxuICAgICAgICAgICAgc3RhdGUgICAgICAgICA6IFNUQVRFX1BMQUlOVEVYVCxcbiAgICAgICAgICAgIHRhZ19idWZmZXIgICAgOiAnJyxcbiAgICAgICAgICAgIGRlcHRoICAgICAgICAgOiAwLFxuICAgICAgICAgICAgaW5fcXVvdGVfY2hhciA6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RyaXB0YWdzX2ludGVybmFsKGh0bWwsIGNvbnRleHQpIHtcbiAgICAgICAgbGV0IGFsbG93YWJsZV90YWdzICA9IGNvbnRleHQuYWxsb3dhYmxlX3RhZ3M7XG4gICAgICAgIGxldCB0YWdfcmVwbGFjZW1lbnQgPSBjb250ZXh0LnRhZ19yZXBsYWNlbWVudDtcblxuICAgICAgICBsZXQgc3RhdGUgICAgICAgICA9IGNvbnRleHQuc3RhdGU7XG4gICAgICAgIGxldCB0YWdfYnVmZmVyICAgID0gY29udGV4dC50YWdfYnVmZmVyO1xuICAgICAgICBsZXQgZGVwdGggICAgICAgICA9IGNvbnRleHQuZGVwdGg7XG4gICAgICAgIGxldCBpbl9xdW90ZV9jaGFyID0gY29udGV4dC5pbl9xdW90ZV9jaGFyO1xuICAgICAgICBsZXQgb3V0cHV0ICAgICAgICA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDAsIGxlbmd0aCA9IGh0bWwubGVuZ3RoOyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICBsZXQgY2hhciA9IGh0bWxbaWR4XTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBTVEFURV9QTEFJTlRFWFQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSAgICAgICA9IFNUQVRFX0hUTUw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdfYnVmZmVyICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSBTVEFURV9IVE1MKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlICc8JyBpZiBpbnNpZGUgYSBxdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluX3F1b3RlX2NoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UncmUgc2VlaW5nIGEgbmVzdGVkICc8J1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlICc+JyBpZiBpbnNpZGUgYSBxdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluX3F1b3RlX2NoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc29tZXRoaW5nIGxpa2UgdGhpcyBpcyBoYXBwZW5pbmc6ICc8PD4+J1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGNsb3NpbmcgdGhlIHRhZyBpbiB0YWdfYnVmZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbl9xdW90ZV9jaGFyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSAgICAgICAgID0gU1RBVEVfUExBSU5URVhUO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnX2J1ZmZlciAgICs9ICc+JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsbG93YWJsZV90YWdzLmhhcyhub3JtYWxpemVfdGFnKHRhZ19idWZmZXIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSB0YWdfYnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gdGFnX3JlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdfYnVmZmVyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcJyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXRjaCBib3RoIHNpbmdsZSBhbmQgZG91YmxlIHF1b3Rlc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gaW5fcXVvdGVfY2hhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluX3F1b3RlX2NoYXIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5fcXVvdGVfY2hhciA9IGluX3F1b3RlX2NoYXIgfHwgY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnX2J1ZmZlciArPSBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnX2J1ZmZlciA9PT0gJzwhLScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNUQVRFX0NPTU1FTlQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ19idWZmZXIgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ19idWZmZXIgPT09ICc8Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlICAgICAgPSBTVEFURV9QTEFJTlRFWFQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICAgICs9ICc8ICc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnX2J1ZmZlciA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ19idWZmZXIgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdfYnVmZmVyICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSBTVEFURV9DT01NRU5UKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ19idWZmZXIuc2xpY2UoLTIpID09ICctLScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbG9zZSB0aGUgY29tbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEVfUExBSU5URVhUO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdfYnVmZmVyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnX2J1ZmZlciArPSBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2F2ZSB0aGUgY29udGV4dCBmb3IgZnV0dXJlIGl0ZXJhdGlvbnNcbiAgICAgICAgY29udGV4dC5zdGF0ZSAgICAgICAgID0gc3RhdGU7XG4gICAgICAgIGNvbnRleHQudGFnX2J1ZmZlciAgICA9IHRhZ19idWZmZXI7XG4gICAgICAgIGNvbnRleHQuZGVwdGggICAgICAgICA9IGRlcHRoO1xuICAgICAgICBjb250ZXh0LmluX3F1b3RlX2NoYXIgPSBpbl9xdW90ZV9jaGFyO1xuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VfYWxsb3dhYmxlX3RhZ3MoYWxsb3dhYmxlX3RhZ3MpIHtcbiAgICAgICAgbGV0IHRhZ19zZXQgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhbGxvd2FibGVfdGFncyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxldCBtYXRjaDtcblxuICAgICAgICAgICAgd2hpbGUgKChtYXRjaCA9IEFMTE9XRURfVEFHU19SRUdFWC5leGVjKGFsbG93YWJsZV90YWdzKSkpIHtcbiAgICAgICAgICAgICAgICB0YWdfc2V0LmFkZChtYXRjaFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmICghU3ltYm9sLm5vbk5hdGl2ZSAmJlxuICAgICAgICAgICAgICAgICB0eXBlb2YgYWxsb3dhYmxlX3RhZ3NbU3ltYm9sLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAgICAgICB0YWdfc2V0ID0gbmV3IFNldChhbGxvd2FibGVfdGFncyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgYWxsb3dhYmxlX3RhZ3MuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gSUUxMSBjb21wYXRpYmxlXG4gICAgICAgICAgICBhbGxvd2FibGVfdGFncy5mb3JFYWNoKHRhZ19zZXQuYWRkLCB0YWdfc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YWdfc2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZV90YWcodGFnX2J1ZmZlcikge1xuICAgICAgICBsZXQgbWF0Y2ggPSBOT1JNQUxJWkVfVEFHX1JFR0VYLmV4ZWModGFnX2J1ZmZlcik7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKSA6IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTURcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uIG1vZHVsZV9mYWN0b3J5KCkgeyByZXR1cm4gc3RyaXB0YWdzOyB9KTtcbiAgICB9XG5cbiAgICBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAvLyBOb2RlXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gc3RyaXB0YWdzO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyXG4gICAgICAgIGdsb2JhbC5zdHJpcHRhZ3MgPSBzdHJpcHRhZ3M7XG4gICAgfVxufSh0aGlzKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9