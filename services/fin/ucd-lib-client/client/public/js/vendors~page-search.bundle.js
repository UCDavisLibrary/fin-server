(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~page-search"],{

/***/ "./public/node_modules/@polymer/font-roboto/roboto.js":
/*!************************************************************!*\
  !*** ./public/node_modules/@polymer/font-roboto/roboto.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

 // ensure this file can only be parsed as a module.

// Give the user the choice to opt out of font loading.
if (!window.polymerSkipLoadingFontRoboto) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.crossOrigin = 'anonymous';
  link.href =
      'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic';
  document.head.appendChild(link);
}


/***/ }),

/***/ "./public/node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js":
/*!*********************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js ***!
  \*********************************************************************************/
/*! exports provided: IronA11yAnnouncer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronA11yAnnouncer", function() { return IronA11yAnnouncer; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
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





/**
`iron-a11y-announcer` is a singleton element that is intended to add a11y
to features that require on-demand announcement from screen readers. In
order to make use of the announcer, it is best to request its availability
in the announcing element.

Example:

    Polymer({

      is: 'x-chatty',

      attached: function() {
        // This will create the singleton element if it has not
        // been created yet:
        Polymer.IronA11yAnnouncer.requestAvailability();
      }
    });

After the `iron-a11y-announcer` has been made available, elements can
make announces by firing bubbling `iron-announce` events.

Example:

    this.fire('iron-announce', {
      text: 'This is an announcement!'
    }, { bubbles: true });

Note: announcements are only audible if you have a screen reader enabled.

@group Iron Elements
@demo demo/index.html
*/
const IronA11yAnnouncer = Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,

  is: 'iron-a11y-announcer',

  properties: {

    /**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */
    mode: {type: String, value: 'polite'},

    _text: {type: String, value: ''}
  },

  created: function() {
    if (!IronA11yAnnouncer.instance) {
      IronA11yAnnouncer.instance = this;
    }

    document.body.addEventListener(
        'iron-announce', this._onIronAnnounce.bind(this));
  },

  /**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */
  announce: function(text) {
    this._text = '';
    this.async(function() {
      this._text = text;
    }, 100);
  },

  _onIronAnnounce: function(event) {
    if (event.detail && event.detail.text) {
      this.announce(event.detail.text);
    }
  }
});

IronA11yAnnouncer.instance = null;

IronA11yAnnouncer.requestAvailability = function() {
  if (!IronA11yAnnouncer.instance) {
    IronA11yAnnouncer.instance = document.createElement('iron-a11y-announcer');
  }

  document.body.appendChild(IronA11yAnnouncer.instance);
};


/***/ }),

/***/ "./public/node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js":
/*!*****************************************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js ***!
  \*****************************************************************************************************/
/*! exports provided: IronCheckedElementBehaviorImpl, IronCheckedElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronCheckedElementBehaviorImpl", function() { return IronCheckedElementBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronCheckedElementBehavior", function() { return IronCheckedElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./public/node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./public/node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
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





/**
 * Use `IronCheckedElementBehavior` to implement a custom element that has a
 * `checked` property, which can be used for validation if the element is also
 * `required`. Element instances implementing this behavior will also be
 * registered for use in an `iron-form` element.
 *
 * @demo demo/index.html
 * @polymerBehavior IronCheckedElementBehavior
 */
const IronCheckedElementBehaviorImpl = {

  properties: {
    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */

    /**
     * Gets or sets the state, `true` is checked and `false` is unchecked.
     */
    checked: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      notify: true,
      observer: '_checkedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {type: Boolean, value: true, reflectToAttribute: true},

    /* Overriden from IronFormElementBehavior */
    value: {type: String, value: 'on', observer: '_valueChanged'}
  },

  observers: ['_requiredChanged(required)'],

  created: function() {
    // Used by `iron-form` to handle the case that an element with this behavior
    // doesn't have a role of 'checkbox' or 'radio', but should still only be
    // included when the form is serialized if `this.checked === true`.
    this._hasIronCheckedElementBehavior = true;
  },

  /**
   * Returns false if the element is required and not checked, and true
   * otherwise.
   * @param {*=} _value Ignored.
   * @return {boolean} true if `required` is false or if `checked` is true.
   */
  _getValidity: function(_value) {
    return this.disabled || !this.required || this.checked;
  },

  /**
   * Update the aria-required label when `required` is changed.
   */
  _requiredChanged: function() {
    if (this.required) {
      this.setAttribute('aria-required', 'true');
    } else {
      this.removeAttribute('aria-required');
    }
  },

  /**
   * Fire `iron-changed` when the checked state changes.
   */
  _checkedChanged: function() {
    this.active = this.checked;
    this.fire('iron-change');
  },

  /**
   * Reset value to 'on' if it is set to `undefined`.
   */
  _valueChanged: function() {
    if (this.value === undefined || this.value === null) {
      this.value = 'on';
    }
  }
};

/** @polymerBehavior */
const IronCheckedElementBehavior = [
  _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronFormElementBehavior"],
  _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronValidatableBehavior"],
  IronCheckedElementBehaviorImpl
];


/***/ }),

/***/ "./public/node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js":
/*!***********************************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js ***!
  \***********************************************************************************************/
/*! exports provided: IronFormElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronFormElementBehavior", function() { return IronFormElementBehavior; });
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


/**
  IronFormElementBehavior adds a `name`, `value` and `required` properties to
  a custom element. It mostly exists for backcompatibility with Polymer 1.x, and
  is probably not something you want to use.

  @demo demo/index.html
  @polymerBehavior
 */
const IronFormElementBehavior = {

  properties: {
    /**
     * The name of this element.
     */
    name: {type: String},

    /**
     * The value for this element.
     * @type {*}
     */
    value: {notify: true, type: String},

    /**
     * Set to true to mark the input as required. If used in a form, a
     * custom element that uses this behavior should also use
     * IronValidatableBehavior and define a custom validation method.
     * Otherwise, a `required` element will always be considered valid.
     * It's also strongly recommended to provide a visual style for the element
     * when its value is invalid.
     */
    required: {type: Boolean, value: false},
  },

  // Empty implementations for backcompatibility.
  attached: function() {},
  detached: function() {}
};


/***/ }),

/***/ "./public/node_modules/@polymer/iron-input/iron-input.js":
/*!***************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-input/iron-input.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js */ "./public/node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./public/node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
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








/**
`<iron-input>` is a wrapper to a native `<input>` element, that adds two-way
binding and prevention of invalid input. To use it, you must distribute a native
`<input>` yourself. You can continue to use the native `input` as you would
normally:

    <iron-input>
      <input>
    </iron-input>

    <iron-input>
      <input type="email" disabled>
    </iron-input>

### Two-way binding

By default you can only get notified of changes to a native `<input>`'s `value`
due to user input:

    <input value="{{myValue::input}}">

This means that if you imperatively set the value (i.e. `someNativeInput.value =
'foo'`), no events will be fired and this change cannot be observed.

`iron-input` adds the `bind-value` property that mirrors the native `input`'s
'`value` property; this property can be used for two-way data binding.
`bind-value` will notify if it is changed either by user input or by script.

    <iron-input bind-value="{{myValue}}">
      <input>
    </iron-input>

Note: this means that if you want to imperatively set the native `input`'s, you
_must_ set `bind-value` instead, so that the wrapper `iron-input` can be
notified.

### Validation

`iron-input` uses the native `input`'s validation. For simplicity, `iron-input`
has a `validate()` method (which internally just checks the distributed
`input`'s validity), which sets an `invalid` attribute that can also be used for
styling.

To validate automatically as you type, you can use the `auto-validate`
attribute.

`iron-input` also fires an `iron-input-validate` event after `validate()` is
called. You can use it to implement a custom validator:

    var CatsOnlyValidator = {
      validate: function(ironInput) {
        var valid = !ironInput.bindValue || ironInput.bindValue === 'cat';
        ironInput.invalid = !valid;
        return valid;
      }
    }
    ironInput.addEventListener('iron-input-validate', function() {
      CatsOnly.validate(input2);
    });

You can also use an element implementing an
[`IronValidatorBehavior`](/element/PolymerElements/iron-validatable-behavior).
This example can also be found in the demo for this element:

    <iron-input validator="cats-only">
      <input>
    </iron-input>

### Preventing invalid input

It may be desirable to only allow users to enter certain characters. You can use
the `allowed-pattern` attribute to accomplish this. This feature is separate
from validation, and `allowed-pattern` does not affect how the input is
validated.

    // Only allow typing digits, but a valid input has exactly 5 digits.
    <iron-input allowed-pattern="[0-9]">
      <input pattern="\d{5}">
    </iron-input>

@demo demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,

  is: 'iron-input',
  behaviors: [_polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronValidatableBehavior"]],

  /**
   * Fired whenever `validate()` is called.
   *
   * @event iron-input-validate
   */

  properties: {

    /**
     * Use this property instead of `value` for two-way data binding, or to
     * set a default value for the input. **Do not** use the distributed
     * input's `value` property to set a default value.
     */
    bindValue: {type: String, value: ''},

    /**
     * Computed property that echoes `bindValue` (mostly used for Polymer 1.0
     * backcompatibility, if you were one-way binding to the Polymer 1.0
     * `input is="iron-input"` value attribute).
     */
    value: {type: String, computed: '_computeValue(bindValue)'},

    /**
     * Regex-like list of characters allowed as input; all characters not in the
     * list will be rejected. The recommended format should be a list of allowed
     * characters, for example, `[a-zA-Z0-9.+-!;:]`.
     *
     * This pattern represents the allowed characters for the field; as the user
     * inputs text, each individual character will be checked against the
     * pattern (rather than checking the entire value as a whole). If a
     * character is not a match, it will be rejected.
     *
     * Pasted input will have each character checked individually; if any
     * character doesn't match `allowedPattern`, the entire pasted string will
     * be rejected.
     *
     * Note: if you were using `iron-input` in 1.0, you were also required to
     * set `prevent-invalid-input`. This is no longer needed as of Polymer 2.0,
     * and will be set automatically for you if an `allowedPattern` is provided.
     *
     */
    allowedPattern: {type: String},

    /**
     * Set to true to auto-validate the input value as you type.
     */
    autoValidate: {type: Boolean, value: false},

    /**
     * The native input element.
     */
    _inputElement: Object,
  },

  observers: ['_bindValueChanged(bindValue, _inputElement)'],
  listeners: {'input': '_onInput', 'keypress': '_onKeypress'},

  created: function() {
    _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yAnnouncer"].requestAvailability();
    this._previousValidInput = '';
    this._patternAlreadyChecked = false;
  },

  attached: function() {
    // If the input is added at a later time, update the internal reference.
    this._observer = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(this).observeNodes(function(info) {
      this._initSlottedInput();
    }.bind(this));
  },

  detached: function() {
    if (this._observer) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(this).unobserveNodes(this._observer);
      this._observer = null;
    }
  },

  /**
   * Returns the distributed input element.
   */
  get inputElement() {
    return this._inputElement;
  },

  _initSlottedInput: function() {
    this._inputElement = this.getEffectiveChildren()[0];

    if (this.inputElement && this.inputElement.value) {
      this.bindValue = this.inputElement.value;
    }

    this.fire('iron-input-ready');
  },

  get _patternRegExp() {
    var pattern;
    if (this.allowedPattern) {
      pattern = new RegExp(this.allowedPattern);
    } else {
      switch (this.inputElement.type) {
        case 'number':
          pattern = /[0-9.,e-]/;
          break;
      }
    }
    return pattern;
  },

  /**
   * @suppress {checkTypes}
   */
  _bindValueChanged: function(bindValue, inputElement) {
    // The observer could have run before attached() when we have actually
    // initialized this property.
    if (!inputElement) {
      return;
    }

    if (bindValue === undefined) {
      inputElement.value = null;
    } else if (bindValue !== inputElement.value) {
      this.inputElement.value = bindValue;
    }

    if (this.autoValidate) {
      this.validate();
    }

    // manually notify because we don't want to notify until after setting value
    this.fire('bind-value-changed', {value: bindValue});
  },

  _onInput: function() {
    // Need to validate each of the characters pasted if they haven't
    // been validated inside `_onKeypress` already.
    if (this.allowedPattern && !this._patternAlreadyChecked) {
      var valid = this._checkPatternValidity();
      if (!valid) {
        this._announceInvalidCharacter(
            'Invalid string of characters not entered.');
        this.inputElement.value = this._previousValidInput;
      }
    }
    this.bindValue = this._previousValidInput = this.inputElement.value;
    this._patternAlreadyChecked = false;
  },

  _isPrintable: function(event) {
    // What a control/printable character is varies wildly based on the browser.
    // - most control characters (arrows, backspace) do not send a `keypress`
    // event
    //   in Chrome, but the *do* on Firefox
    // - in Firefox, when they do send a `keypress` event, control chars have
    //   a charCode = 0, keyCode = xx (for ex. 40 for down arrow)
    // - printable characters always send a keypress event.
    // - in Firefox, printable chars always have a keyCode = 0. In Chrome, the
    // keyCode
    //   always matches the charCode.
    // None of this makes any sense.

    // For these keys, ASCII code == browser keycode.
    var anyNonPrintable = (event.keyCode == 8) ||  // backspace
        (event.keyCode == 9) ||                    // tab
        (event.keyCode == 13) ||                   // enter
        (event.keyCode == 27);                     // escape

    // For these keys, make sure it's a browser keycode and not an ASCII code.
    var mozNonPrintable = (event.keyCode == 19) ||  // pause
        (event.keyCode == 20) ||                    // caps lock
        (event.keyCode == 45) ||                    // insert
        (event.keyCode == 46) ||                    // delete
        (event.keyCode == 144) ||                   // num lock
        (event.keyCode == 145) ||                   // scroll lock
        (event.keyCode > 32 &&
         event.keyCode < 41) ||  // page up/down, end, home, arrows
        (event.keyCode > 111 && event.keyCode < 124);  // fn keys

    return !anyNonPrintable && !(event.charCode == 0 && mozNonPrintable);
  },

  _onKeypress: function(event) {
    if (!this.allowedPattern && this.inputElement.type !== 'number') {
      return;
    }
    var regexp = this._patternRegExp;
    if (!regexp) {
      return;
    }

    // Handle special keys and backspace
    if (event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }

    // Check the pattern either here or in `_onInput`, but not in both.
    this._patternAlreadyChecked = true;

    var thisChar = String.fromCharCode(event.charCode);
    if (this._isPrintable(event) && !regexp.test(thisChar)) {
      event.preventDefault();
      this._announceInvalidCharacter(
          'Invalid character ' + thisChar + ' not entered.');
    }
  },

  _checkPatternValidity: function() {
    var regexp = this._patternRegExp;
    if (!regexp) {
      return true;
    }
    for (var i = 0; i < this.inputElement.value.length; i++) {
      if (!regexp.test(this.inputElement.value[i])) {
        return false;
      }
    }
    return true;
  },

  /**
   * Returns true if `value` is valid. The validator provided in `validator`
   * will be used first, then any constraints.
   * @return {boolean} True if the value is valid.
   */
  validate: function() {
    if (!this.inputElement) {
      this.invalid = false;
      return true;
    }

    // Use the nested input's native validity.
    var valid = this.inputElement.checkValidity();

    // Only do extra checking if the browser thought this was valid.
    if (valid) {
      // Empty, required input is invalid
      if (this.required && this.bindValue === '') {
        valid = false;
      } else if (this.hasValidator()) {
        valid = _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronValidatableBehavior"].validate.call(this, this.bindValue);
      }
    }

    this.invalid = !valid;
    this.fire('iron-input-validate');
    return valid;
  },

  _announceInvalidCharacter: function(message) {
    this.fire('iron-announce', {text: message});
  },

  _computeValue: function(bindValue) {
    return bindValue;
  }
});


/***/ }),

/***/ "./public/node_modules/@polymer/iron-list/iron-list.js":
/*!*************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-list/iron-list.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./public/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./public/node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js */ "./public/node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_mutable_data_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/mutable-data-behavior.js */ "./public/node_modules/@polymer/polymer/lib/legacy/mutable-data-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_legacy_templatizer_behavior_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/templatizer-behavior.js */ "./public/node_modules/@polymer/polymer/lib/legacy/templatizer-behavior.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./public/node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./public/node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./public/node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/path.js */ "./public/node_modules/@polymer/polymer/lib/utils/path.js");
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















var IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
var IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
var DEFAULT_PHYSICAL_COUNT = 3;
var HIDDEN_Y = '-10000px';
var ITEM_WIDTH = 0;
var ITEM_HEIGHT = 1;
var SECRET_TABINDEX = -100;
var IS_V2 = _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"] != null;
var ANIMATION_FRAME = IS_V2 ? _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"] : 0;
var IDLE_TIME = IS_V2 ? _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["idlePeriod"] : 1;
var MICRO_TASK = IS_V2 ? _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["microTask"] : 2;

/* Polymer.OptionalMutableDataBehavior is only available with Polymer 2.0. */
if (!_polymer_polymer_lib_legacy_mutable_data_behavior_js__WEBPACK_IMPORTED_MODULE_4__["OptionalMutableDataBehavior"]) {
  /** @polymerBehavior */
  Polymer.OptionalMutableDataBehavior = {};
}

/**

`iron-list` displays a virtual, 'infinite' list. The template inside
the iron-list element represents the DOM to create for each list item.
The `items` property specifies an array of list item data.

For performance reasons, not every item in the list is rendered at once;
instead a small subset of actual template elements *(enough to fill the
viewport)* are rendered and reused as the user scrolls. As such, it is important
that all state of the list template is bound to the model driving it, since the
view may be reused with a new model at any time. Particularly, any state that
may change as the result of a user interaction with the list item must be bound
to the model to avoid view state inconsistency.

### Sizing iron-list

`iron-list` must either be explicitly sized, or delegate scrolling to an
explicitly sized parent. By "explicitly sized", we mean it either has an
explicit CSS `height` property set via a class or inline style, or else is sized
by other layout means (e.g. the `flex` or `fit` classes).

#### Flexbox - [jsbin](https://jsbin.com/vejoni/edit?html,output)

```html
<template is="x-list">
  <style>
    :host {
      display: block;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    iron-list {
      flex: 1 1 auto;
    }
  </style>
  <app-toolbar>App name</app-toolbar>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Explicit size - [jsbin](https://jsbin.com/vopucus/edit?html,output)
```html
<template is="x-list">
  <style>
    :host {
      display: block;
    }

    iron-list {
      height: 100vh; /* don't use % values unless the parent element is sized.
*\/
    }
  </style>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Main document scrolling -
[jsbin](https://jsbin.com/wevirow/edit?html,output)
```html
<head>
  <style>
    body {
      height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
    }

    app-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }

    iron-list {
      /* add padding since the app-toolbar is fixed at the top *\/
      padding-top: 64px;
    }
  </style>
</head>
<body>
  <app-toolbar>App name</app-toolbar>
  <iron-list scroll-target="document">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</body>
```

`iron-list` must be given a `<template>` which contains exactly one element. In
the examples above we used a `<div>`, but you can provide any element (including
custom elements).

### Template model

List item templates should bind to template models of the following structure:

```js
{
  index: 0,        // index in the item array
  selected: false, // true if the current item is selected
  tabIndex: -1,    // a dynamically generated tabIndex for focus management
  item: {}         // user data corresponding to items[index]
}
```

Alternatively, you can change the property name used as data index by changing
the `indexAs` property. The `as` property defines the name of the variable to
add to the binding scope for the array.

For example, given the following `data` array:

##### data.json

```js
[
  {"name": "Bob"},
  {"name": "Tim"},
  {"name": "Mike"}
]
```

The following code would render the list (note the name property is bound from
the model object provided to the template scope):

```html
<iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
<iron-list items="[[data]]" as="item">
  <template>
    <div>
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Grid layout

`iron-list` supports a grid layout in addition to linear layout by setting
the `grid` attribute.  In this case, the list template item must have both fixed
width and height (e.g. via CSS). Based on this, the number of items
per row are determined automatically based on the size of the list viewport.

### Accessibility

`iron-list` automatically manages the focus state for the items. It also
provides a `tabIndex` property within the template scope that can be used for
keyboard navigation. For example, users can press the up and down keys to move
to previous and next items in the list:

```html
<iron-list items="[[data]]" as="item">
  <template>
    <div tabindex$="[[tabIndex]]">
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Styling

You can use the `--iron-list-items-container` mixin to style the container of
items:

```css
iron-list {
 --iron-list-items-container: {
    margin: auto;
  };
}
```

### Resizing

`iron-list` lays out the items when it receives a notification via the
`iron-resize` event. This event is fired by any element that implements
`IronResizableBehavior`.

By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will
trigger this event automatically. If you hide the list manually (e.g. you use
`display: none`) you might want to implement `IronResizableBehavior` or fire
this event manually right after the list became visible again. For example:

```js
document.querySelector('iron-list').fire('iron-resize');
```

### When should `<iron-list>` be used?

`iron-list` should be used when a page has significantly more DOM nodes than the
ones visible on the screen. e.g. the page has 500 nodes, but only 20 are visible
at a time. This is why we refer to it as a `virtual` list. In this case, a
`dom-repeat` will still create 500 nodes which could slow down the web app, but
`iron-list` will only create 20.

However, having an `iron-list` does not mean that you can load all the data at
once. Say you have a million records in the database, you want to split the data
into pages so you can bring in a page at the time. The page could contain 500
items, and iron-list will only render 20.

@group Iron Element
@element iron-list
@demo demo/index.html

*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"]`
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
`,

  is: 'iron-list',

  properties: {

    /**
     * An array containing items determining how many instances of the template
     * to stamp and that that each template instance should bind to.
     */
    items: {type: Array},

    /**
     * The name of the variable to add to the binding scope for the array
     * element associated with a given template instance.
     */
    as: {type: String, value: 'item'},

    /**
     * The name of the variable to add to the binding scope with the index
     * for the row.
     */
    indexAs: {type: String, value: 'index'},

    /**
     * The name of the variable to add to the binding scope to indicate
     * if the row is selected.
     */
    selectedAs: {type: String, value: 'selected'},

    /**
     * When true, the list is rendered as a grid. Grid items must have
     * fixed width and height set via CSS. e.g.
     *
     * ```html
     * <iron-list grid>
     *   <template>
     *      <div style="width: 100px; height: 100px;"> 100x100 </div>
     *   </template>
     * </iron-list>
     * ```
     */
    grid: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '_gridChanged'
    },

    /**
     * When true, tapping a row will select the item, placing its data model
     * in the set of selected items retrievable via the selection property.
     *
     * Note that tapping focusable elements within the list item will not
     * result in selection, since they are presumed to have their * own action.
     */
    selectionEnabled: {type: Boolean, value: false},

    /**
     * When `multiSelection` is false, this is the currently selected item, or
     * `null` if no item is selected.
     */
    selectedItem: {type: Object, notify: true},

    /**
     * When `multiSelection` is true, this is an array that contains the
     * selected items.
     */
    selectedItems: {type: Object, notify: true},

    /**
     * When `true`, multiple items may be selected at once (in this case,
     * `selected` is an array of currently selected items).  When `false`,
     * only one item may be selected at a time.
     */
    multiSelection: {type: Boolean, value: false},

    /**
     * The offset top from the scrolling element to the iron-list element.
     * This value can be computed using the position returned by
     * `getBoundingClientRect()` although it's preferred to use a constant value
     * when possible.
     *
     * This property is useful when an external scrolling element is used and
     * there's some offset between the scrolling element and the list. For
     * example: a header is placed above the list.
     */
    scrollOffset: {type: Number, value: 0}
  },

  observers: [
    '_itemsChanged(items.*)',
    '_selectionEnabledChanged(selectionEnabled)',
    '_multiSelectionChanged(multiSelection)',
    '_setOverflow(scrollTarget, scrollOffset)'
  ],

  behaviors: [
    _polymer_polymer_lib_legacy_templatizer_behavior_js__WEBPACK_IMPORTED_MODULE_7__["Templatizer"],
    _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronResizableBehavior"],
    _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronScrollTargetBehavior"],
    _polymer_polymer_lib_legacy_mutable_data_behavior_js__WEBPACK_IMPORTED_MODULE_4__["OptionalMutableDataBehavior"]
  ],

  /**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */
  _ratio: 0.5,

  /**
   * The padding-top value for the list.
   */
  _scrollerPaddingTop: 0,

  /**
   * This value is the same as `scrollTop`.
   */
  _scrollPosition: 0,

  /**
   * The sum of the heights of all the tiles in the DOM.
   */
  _physicalSize: 0,

  /**
   * The average `offsetHeight` of the tiles observed till now.
   */
  _physicalAverage: 0,

  /**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */
  _physicalAverageCount: 0,

  /**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */
  _physicalTop: 0,

  /**
   * The number of items in the list.
   */
  _virtualCount: 0,

  /**
   * The estimated scroll height based on `_physicalAverage`
   */
  _estScrollHeight: 0,

  /**
   * The scroll height of the dom node
   */
  _scrollHeight: 0,

  /**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportHeight: 0,

  /**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportWidth: 0,

  /**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!TemplatizerNode>}
   */
  _physicalItems: null,

  /**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */
  _physicalSizes: null,

  /**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */
  _firstVisibleIndexVal: null,

  /**
   * A Polymer collection for the items.
   * @type {?Polymer.Collection}
   */
  _collection: null,

  /**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */
  _lastVisibleIndexVal: null,

  /**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */
  _maxPages: 2,

  /**
   * The currently focused physical item.
   */
  _focusedItem: null,

  /**
   * The virtual index of the focused item.
   */
  _focusedVirtualIndex: -1,

  /**
   * The physical index of the focused item.
   */
  _focusedPhysicalIndex: -1,

  /**
   * The the item that is focused if it is moved offscreen.
   * @private {?TemplatizerNode}
   */
  _offscreenFocusedItem: null,

  /**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
   */
  _focusBackfillItem: null,

  /**
   * The maximum items per row
   */
  _itemsPerRow: 1,

  /**
   * The width of each grid item
   */
  _itemWidth: 0,

  /**
   * The height of the row in grid layout.
   */
  _rowHeight: 0,

  /**
   * The cost of stamping a template in ms.
   */
  _templateCost: 0,

  /**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   */
  _parentModel: true,

  /**
   * The bottom of the physical content.
   */
  get _physicalBottom() {
    return this._physicalTop + this._physicalSize;
  },

  /**
   * The bottom of the scroll.
   */
  get _scrollBottom() {
    return this._scrollPosition + this._viewportHeight;
  },

  /**
   * The n-th item rendered in the last physical item.
   */
  get _virtualEnd() {
    return this._virtualStart + this._physicalCount - 1;
  },

  /**
   * The height of the physical content that isn't on the screen.
   */
  get _hiddenContentSize() {
    var size =
        this.grid ? this._physicalRows * this._rowHeight : this._physicalSize;
    return size - this._viewportHeight;
  },

  /**
   * The parent node for the _userTemplate.
   */
  get _itemsParent() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(this._userTemplate).parentNode);
  },

  /**
   * The maximum scroll top value.
   */
  get _maxScrollTop() {
    return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
  },

  /**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */
  get _maxVirtualStart() {
    var virtualCount = this._convertIndexToCompleteRow(this._virtualCount);
    return Math.max(0, virtualCount - this._physicalCount);
  },

  set _virtualStart(val) {
    val = this._clamp(val, 0, this._maxVirtualStart);
    if (this.grid) {
      val = val - (val % this._itemsPerRow);
    }
    this._virtualStartVal = val;
  },

  get _virtualStart() {
    return this._virtualStartVal || 0;
  },

  /**
   * The k-th tile that is at the top of the scrolling list.
   */
  set _physicalStart(val) {
    val = val % this._physicalCount;
    if (val < 0) {
      val = this._physicalCount + val;
    }
    if (this.grid) {
      val = val - (val % this._itemsPerRow);
    }
    this._physicalStartVal = val;
  },

  get _physicalStart() {
    return this._physicalStartVal || 0;
  },

  /**
   * The k-th tile that is at the bottom of the scrolling list.
   */
  get _physicalEnd() {
    return (this._physicalStart + this._physicalCount - 1) %
        this._physicalCount;
  },

  set _physicalCount(val) {
    this._physicalCountVal = val;
  },

  get _physicalCount() {
    return this._physicalCountVal || 0;
  },

  /**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */
  get _optPhysicalSize() {
    return this._viewportHeight === 0 ? Infinity :
                                        this._viewportHeight * this._maxPages;
  },

  /**
   * True if the current list is visible.
   */
  get _isVisible() {
    return Boolean(this.offsetWidth || this.offsetHeight);
  },

  /**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */
  get firstVisibleIndex() {
    var idx = this._firstVisibleIndexVal;
    if (idx == null) {
      var physicalOffset = this._physicalTop + this._scrollOffset;

      idx = this._iterateItems(function(pidx, vidx) {
        physicalOffset += this._getPhysicalSizeIncrement(pidx);

        if (physicalOffset > this._scrollPosition) {
          return this.grid ? vidx - (vidx % this._itemsPerRow) : vidx;
        }
        // Handle a partially rendered final row in grid mode
        if (this.grid && this._virtualCount - 1 === vidx) {
          return vidx - (vidx % this._itemsPerRow);
        }
      }) ||
          0;
      this._firstVisibleIndexVal = idx;
    }
    return idx;
  },

  /**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */
  get lastVisibleIndex() {
    var idx = this._lastVisibleIndexVal;
    if (idx == null) {
      if (this.grid) {
        idx = Math.min(
            this._virtualCount,
            this.firstVisibleIndex + this._estRowsInView * this._itemsPerRow -
                1);
      } else {
        var physicalOffset = this._physicalTop + this._scrollOffset;
        this._iterateItems(function(pidx, vidx) {
          if (physicalOffset < this._scrollBottom) {
            idx = vidx;
          }
          physicalOffset += this._getPhysicalSizeIncrement(pidx);
        });
      }
      this._lastVisibleIndexVal = idx;
    }
    return idx;
  },

  get _defaultScrollTarget() {
    return this;
  },

  get _virtualRowCount() {
    return Math.ceil(this._virtualCount / this._itemsPerRow);
  },

  get _estRowsInView() {
    return Math.ceil(this._viewportHeight / this._rowHeight);
  },

  get _physicalRows() {
    return Math.ceil(this._physicalCount / this._itemsPerRow);
  },

  get _scrollOffset() {
    return this._scrollerPaddingTop + this.scrollOffset;
  },

  ready: function() {
    this.addEventListener('focus', this._didFocus.bind(this), true);
  },

  attached: function() {
    this._debounce('_render', this._render, ANIMATION_FRAME);
    // `iron-resize` is fired when the list is attached if the event is added
    // before attached causing unnecessary work.
    this.listen(this, 'iron-resize', '_resizeHandler');
    this.listen(this, 'keydown', '_keydownHandler');
  },

  detached: function() {
    this.unlisten(this, 'iron-resize', '_resizeHandler');
    this.unlisten(this, 'keydown', '_keydownHandler');
  },

  /**
   * Set the overflow property if this element has its own scrolling region
   */
  _setOverflow: function(scrollTarget) {
    this.style.webkitOverflowScrolling = scrollTarget === this ? 'touch' : '';
    this.style.overflowY = scrollTarget === this ? 'auto' : '';
    // Clear cache.
    this._lastVisibleIndexVal = null;
    this._firstVisibleIndexVal = null;
    this._debounce('_render', this._render, ANIMATION_FRAME);
  },

  /**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */
  updateViewportBoundaries: function() {
    var styles = window.getComputedStyle(this);
    this._scrollerPaddingTop =
        this.scrollTarget === this ? 0 : parseInt(styles['padding-top'], 10);
    this._isRTL = Boolean(styles.direction === 'rtl');
    this._viewportWidth = this.$.items.offsetWidth;
    this._viewportHeight = this._scrollTargetHeight;
    this.grid && this._updateGridMetrics();
  },

  /**
   * Recycles the physical items when needed.
   */
  _scrollHandler: function() {
    var scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
    var delta = scrollTop - this._scrollPosition;
    var isScrollingDown = delta >= 0;
    // Track the current scroll position.
    this._scrollPosition = scrollTop;
    // Clear indexes for first and last visible indexes.
    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
    // Random access.
    if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
      delta = delta - this._scrollOffset;
      var idxAdjustment =
          Math.round(delta / this._physicalAverage) * this._itemsPerRow;
      this._virtualStart = this._virtualStart + idxAdjustment;
      this._physicalStart = this._physicalStart + idxAdjustment;
      // Estimate new physical offset.
      this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) *
          this._physicalAverage;
      this._update();
    } else if (this._physicalCount > 0) {
      var reusables = this._getReusables(isScrollingDown);
      if (isScrollingDown) {
        this._physicalTop = reusables.physicalTop;
        this._virtualStart = this._virtualStart + reusables.indexes.length;
        this._physicalStart = this._physicalStart + reusables.indexes.length;
      } else {
        this._virtualStart = this._virtualStart - reusables.indexes.length;
        this._physicalStart = this._physicalStart - reusables.indexes.length;
      }
      this._update(
          reusables.indexes, isScrollingDown ? null : reusables.indexes);
      this._debounce(
          '_increasePoolIfNeeded',
          this._increasePoolIfNeeded.bind(this, 0),
          MICRO_TASK);
    }
  },

  /**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */
  _getReusables: function(fromTop) {
    var ith, lastIth, offsetContent, physicalItemHeight;
    var idxs = [];
    var protectedOffsetContent = this._hiddenContentSize * this._ratio;
    var virtualStart = this._virtualStart;
    var virtualEnd = this._virtualEnd;
    var physicalCount = this._physicalCount;
    var top = this._physicalTop + this._scrollOffset;
    var bottom = this._physicalBottom + this._scrollOffset;
    var scrollTop = this._scrollTop;
    var scrollBottom = this._scrollBottom;

    if (fromTop) {
      ith = this._physicalStart;
      lastIth = this._physicalEnd;
      offsetContent = scrollTop - top;
    } else {
      ith = this._physicalEnd;
      lastIth = this._physicalStart;
      offsetContent = bottom - scrollBottom;
    }
    while (true) {
      physicalItemHeight = this._getPhysicalSizeIncrement(ith);
      offsetContent = offsetContent - physicalItemHeight;
      if (idxs.length >= physicalCount ||
          offsetContent <= protectedOffsetContent) {
        break;
      }
      if (fromTop) {
        // Check that index is within the valid range.
        if (virtualEnd + idxs.length + 1 >= this._virtualCount) {
          break;
        }
        // Check that the index is not visible.
        if (top + physicalItemHeight >= scrollTop - this._scrollOffset) {
          break;
        }
        idxs.push(ith);
        top = top + physicalItemHeight;
        ith = (ith + 1) % physicalCount;
      } else {
        // Check that index is within the valid range.
        if (virtualStart - idxs.length <= 0) {
          break;
        }
        // Check that the index is not visible.
        if (top + this._physicalSize - physicalItemHeight <= scrollBottom) {
          break;
        }
        idxs.push(ith);
        top = top - physicalItemHeight;
        ith = (ith === 0) ? physicalCount - 1 : ith - 1;
      }
    }
    return {indexes: idxs, physicalTop: top - this._scrollOffset};
  },

  /**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */
  _update: function(itemSet, movingUp) {
    if ((itemSet && itemSet.length === 0) || this._physicalCount === 0) {
      return;
    }
    this._manageFocus();
    this._assignModels(itemSet);
    this._updateMetrics(itemSet);
    // Adjust offset after measuring.
    if (movingUp) {
      while (movingUp.length) {
        var idx = movingUp.pop();
        this._physicalTop -= this._getPhysicalSizeIncrement(idx);
      }
    }
    this._positionItems();
    this._updateScrollerSize();
  },

  /**
   * Creates a pool of DOM elements and attaches them to the local dom.
   *
   * @param {number} size Size of the pool
   */
  _createPool: function(size) {
    this._ensureTemplatized();
    var i, inst;
    var physicalItems = new Array(size);
    for (i = 0; i < size; i++) {
      inst = this.stamp(null);
      // TODO(blasten):
      // First element child is item; Safari doesn't support children[0]
      // on a doc fragment. Test this to see if it still matters.
      physicalItems[i] = inst.root.querySelector('*');
      this._itemsParent.appendChild(inst.root);
    }
    return physicalItems;
  },

  _isClientFull: function() {
    return this._scrollBottom != 0 &&
        this._physicalBottom - 1 >= this._scrollBottom &&
        this._physicalTop <= this._scrollPosition;
  },

  /**
   * Increases the pool size.
   */
  _increasePoolIfNeeded: function(count) {
    var nextPhysicalCount = this._clamp(
        this._physicalCount + count,
        DEFAULT_PHYSICAL_COUNT,
        this._virtualCount - this._virtualStart);
    nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);
    if (this.grid) {
      var correction = nextPhysicalCount % this._itemsPerRow;
      if (correction && nextPhysicalCount - correction <= this._physicalCount) {
        nextPhysicalCount += this._itemsPerRow;
      }
      nextPhysicalCount -= correction;
    }
    var delta = nextPhysicalCount - this._physicalCount;
    var nextIncrease = Math.round(this._physicalCount * 0.5);

    if (delta < 0) {
      return;
    }
    if (delta > 0) {
      var ts = window.performance.now();
      // Concat arrays in place.
      [].push.apply(this._physicalItems, this._createPool(delta));
      // Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
      // support it.
      for (var i = 0; i < delta; i++) {
        this._physicalSizes.push(0);
      }
      this._physicalCount = this._physicalCount + delta;
      // Update the physical start if it needs to preserve the model of the
      // focused item. In this situation, the focused item is currently rendered
      // and its model would have changed after increasing the pool if the
      // physical start remained unchanged.
      if (this._physicalStart > this._physicalEnd &&
          this._isIndexRendered(this._focusedVirtualIndex) &&
          this._getPhysicalIndex(this._focusedVirtualIndex) <
              this._physicalEnd) {
        this._physicalStart = this._physicalStart + delta;
      }
      this._update();
      this._templateCost = (window.performance.now() - ts) / delta;
      nextIncrease = Math.round(this._physicalCount * 0.5);
    }
    // The upper bounds is not fixed when dealing with a grid that doesn't
    // fill it's last row with the exact number of items per row.
    if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) {
      // Do nothing.
    } else if (!this._isClientFull()) {
      this._debounce(
          '_increasePoolIfNeeded',
          this._increasePoolIfNeeded.bind(this, nextIncrease),
          MICRO_TASK);
    } else if (this._physicalSize < this._optPhysicalSize) {
      // Yield and increase the pool during idle time until the physical size is
      // optimal.
      this._debounce(
          '_increasePoolIfNeeded',
          this._increasePoolIfNeeded.bind(
              this,
              this._clamp(
                  Math.round(50 / this._templateCost), 1, nextIncrease)),
          IDLE_TIME);
    }
  },

  /**
   * Renders the a new list.
   */
  _render: function() {
    if (!this.isAttached || !this._isVisible) {
      return;
    }
    if (this._physicalCount !== 0) {
      var reusables = this._getReusables(true);
      this._physicalTop = reusables.physicalTop;
      this._virtualStart = this._virtualStart + reusables.indexes.length;
      this._physicalStart = this._physicalStart + reusables.indexes.length;
      this._update(reusables.indexes);
      this._update();
      this._increasePoolIfNeeded(0);
    } else if (this._virtualCount > 0) {
      // Initial render
      this.updateViewportBoundaries();
      this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);
    }
  },

  /**
   * Templetizes the user template.
   */
  _ensureTemplatized: function() {
    if (this.ctor) {
      return;
    }
    this._userTemplate = this.queryEffectiveChildren('template');
    if (!this._userTemplate) {
      console.warn('iron-list requires a template to be provided in light-dom');
    }
    var instanceProps = {};
    instanceProps.__key__ = true;
    instanceProps[this.as] = true;
    instanceProps[this.indexAs] = true;
    instanceProps[this.selectedAs] = true;
    instanceProps.tabIndex = true;
    this._instanceProps = instanceProps;
    this.templatize(this._userTemplate, this.mutableData);
  },

  _gridChanged: function(newGrid, oldGrid) {
    if (typeof oldGrid === 'undefined')
      return;
    this.notifyResize();
    _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"] ? Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])() : Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["flush"])();
    newGrid && this._updateGridMetrics();
  },

  /**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */
  _itemsChanged: function(change) {
    if (change.path === 'items') {
      this._virtualStart = 0;
      this._physicalTop = 0;
      this._virtualCount = this.items ? this.items.length : 0;
      this._collection =
          this.items && undefined ? undefined.get(this.items) : null;
      this._physicalIndexForKey = {};
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      this._physicalCount = this._physicalCount || 0;
      this._physicalItems = this._physicalItems || [];
      this._physicalSizes = this._physicalSizes || [];
      this._physicalStart = 0;
      if (this._scrollTop > this._scrollOffset) {
        this._resetScrollPosition(0);
      }
      this._removeFocusedItem();
      this._debounce('_render', this._render, ANIMATION_FRAME);
    } else if (change.path === 'items.splices') {
      this._adjustVirtualIndex(change.value.indexSplices);
      this._virtualCount = this.items ? this.items.length : 0;
      // Only blur if at least one item is added or removed.
      var itemAddedOrRemoved = change.value.indexSplices.some(function(splice) {
        return splice.addedCount > 0 || splice.removed.length > 0;
      });
      if (itemAddedOrRemoved) {
        // Only blur activeElement if it is a descendant of the list (#505,
        // #507).
        var activeElement = this._getActiveElement();
        if (this.contains(activeElement)) {
          activeElement.blur();
        }
      }
      // Render only if the affected index is rendered.
      var affectedIndexRendered =
          change.value.indexSplices.some(function(splice) {
            return splice.index + splice.addedCount >= this._virtualStart &&
                splice.index <= this._virtualEnd;
          }, this);
      if (!this._isClientFull() || affectedIndexRendered) {
        this._debounce('_render', this._render, ANIMATION_FRAME);
      }
    } else if (change.path !== 'items.length') {
      this._forwardItemPath(change.path, change.value);
    }
  },

  _forwardItemPath: function(path, value) {
    path = path.slice(6);  // 'items.'.length == 6
    var dot = path.indexOf('.');
    if (dot === -1) {
      dot = path.length;
    }
    var isIndexRendered;
    var pidx;
    var inst;
    var offscreenInstance = this.modelForElement(this._offscreenFocusedItem);
    if (IS_V2) {
      var vidx = parseInt(path.substring(0, dot), 10);
      isIndexRendered = this._isIndexRendered(vidx);
      if (isIndexRendered) {
        pidx = this._getPhysicalIndex(vidx);
        inst = this.modelForElement(this._physicalItems[pidx]);
      } else if (offscreenInstance) {
        inst = offscreenInstance;
      }

      if (!inst || inst[this.indexAs] !== vidx) {
        return;
      }
    } else {
      // Polymer 1.x - get physical instance by key (`#1`), not index.
      var key = path.substring(0, dot);
      if (offscreenInstance && offscreenInstance.__key__ === key) {
        inst = offscreenInstance;
      } else {
        pidx = this._physicalIndexForKey[key];
        inst = this.modelForElement(this._physicalItems[pidx]);

        if (!inst || inst.__key__ !== key) {
          return;
        }
      }
    }
    path = path.substring(dot + 1);
    path = this.as + (path ? '.' + path : '');
    IS_V2 ? inst._setPendingPropertyOrPath(path, value, false, true) :
            inst.notifyPath(path, value, true);
    inst._flushProperties && inst._flushProperties(true);
    // TODO(blasten): V1 doesn't do this and it's a bug
    if (isIndexRendered) {
      this._updateMetrics([pidx]);
      this._positionItems();
      this._updateScrollerSize();
    }
  },

  /**
   * @param {!Array<!PolymerSplice>} splices
   */
  _adjustVirtualIndex: function(splices) {
    splices.forEach(function(splice) {
      // deselect removed items
      splice.removed.forEach(this._removeItem, this);
      // We only need to care about changes happening above the current position
      if (splice.index < this._virtualStart) {
        var delta = Math.max(
            splice.addedCount - splice.removed.length,
            splice.index - this._virtualStart);
        this._virtualStart = this._virtualStart + delta;
        if (this._focusedVirtualIndex >= 0) {
          this._focusedVirtualIndex = this._focusedVirtualIndex + delta;
        }
      }
    }, this);
  },

  _removeItem: function(item) {
    this.$.selector.deselect(item);
    // remove the current focused item
    if (this._focusedItem &&
        this.modelForElement(this._focusedItem)[this.as] === item) {
      this._removeFocusedItem();
    }
  },

  /**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */
  _iterateItems: function(fn, itemSet) {
    var pidx, vidx, rtn, i;

    if (arguments.length === 2 && itemSet) {
      for (i = 0; i < itemSet.length; i++) {
        pidx = itemSet[i];
        vidx = this._computeVidx(pidx);
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    } else {
      pidx = this._physicalStart;
      vidx = this._virtualStart;
      for (; pidx < this._physicalCount; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
      for (pidx = 0; pidx < this._physicalStart; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    }
  },

  /**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */
  _computeVidx: function(pidx) {
    if (pidx >= this._physicalStart) {
      return this._virtualStart + (pidx - this._physicalStart);
    }
    return this._virtualStart + (this._physicalCount - this._physicalStart) +
        pidx;
  },

  /**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */
  _assignModels: function(itemSet) {
    this._iterateItems(function(pidx, vidx) {
      var el = this._physicalItems[pidx];
      var item = this.items && this.items[vidx];
      if (item != null) {
        var inst = this.modelForElement(el);
        inst.__key__ = this._collection ? this._collection.getKey(item) : null;
        this._forwardProperty(inst, this.as, item);
        this._forwardProperty(
            inst, this.selectedAs, this.$.selector.isSelected(item));
        this._forwardProperty(inst, this.indexAs, vidx);
        this._forwardProperty(
            inst, 'tabIndex', this._focusedVirtualIndex === vidx ? 0 : -1);
        this._physicalIndexForKey[inst.__key__] = pidx;
        inst._flushProperties && inst._flushProperties(true);
        el.removeAttribute('hidden');
      } else {
        el.setAttribute('hidden', '');
      }
    }, itemSet);
  },

  /**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */
  _updateMetrics: function(itemSet) {
    // Make sure we distributed all the physical items
    // so we can measure them.
    _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"] ? Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])() : Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["flush"])();

    var newPhysicalSize = 0;
    var oldPhysicalSize = 0;
    var prevAvgCount = this._physicalAverageCount;
    var prevPhysicalAvg = this._physicalAverage;

    this._iterateItems(function(pidx, vidx) {
      oldPhysicalSize += this._physicalSizes[pidx];
      this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
      newPhysicalSize += this._physicalSizes[pidx];
      this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
    }, itemSet);

    if (this.grid) {
      this._updateGridMetrics();
      this._physicalSize =
          Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
    } else {
      oldPhysicalSize = (this._itemsPerRow === 1) ?
          oldPhysicalSize :
          Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
      this._physicalSize =
          this._physicalSize + newPhysicalSize - oldPhysicalSize;
      this._itemsPerRow = 1;
    }
    // Update the average if it measured something.
    if (this._physicalAverageCount !== prevAvgCount) {
      this._physicalAverage = Math.round(
          ((prevPhysicalAvg * prevAvgCount) + newPhysicalSize) /
          this._physicalAverageCount);
    }
  },

  _updateGridMetrics: function() {
    this._itemWidth = this._physicalCount > 0 ?
        this._physicalItems[0].getBoundingClientRect().width :
        200;
    this._rowHeight =
        this._physicalCount > 0 ? this._physicalItems[0].offsetHeight : 200;
    this._itemsPerRow = this._itemWidth ?
        Math.floor(this._viewportWidth / this._itemWidth) :
        this._itemsPerRow;
  },

  /**
   * Updates the position of the physical items.
   */
  _positionItems: function() {
    this._adjustScrollPosition();

    var y = this._physicalTop;

    if (this.grid) {
      var totalItemWidth = this._itemsPerRow * this._itemWidth;
      var rowOffset = (this._viewportWidth - totalItemWidth) / 2;

      this._iterateItems(function(pidx, vidx) {
        var modulus = vidx % this._itemsPerRow;
        var x = Math.floor((modulus * this._itemWidth) + rowOffset);
        if (this._isRTL) {
          x = x * -1;
        }
        this.translate3d(x + 'px', y + 'px', 0, this._physicalItems[pidx]);
        if (this._shouldRenderNextRow(vidx)) {
          y += this._rowHeight;
        }
      });
    } else {
      this._iterateItems(function(pidx, vidx) {
        this.translate3d(0, y + 'px', 0, this._physicalItems[pidx]);
        y += this._physicalSizes[pidx];
      });
    }
  },

  _getPhysicalSizeIncrement: function(pidx) {
    if (!this.grid) {
      return this._physicalSizes[pidx];
    }
    if (this._computeVidx(pidx) % this._itemsPerRow !== this._itemsPerRow - 1) {
      return 0;
    }
    return this._rowHeight;
  },

  /**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param {number} vidx Virtual index
   * @return {boolean}
   */
  _shouldRenderNextRow: function(vidx) {
    return vidx % this._itemsPerRow === this._itemsPerRow - 1;
  },

  /**
   * Adjusts the scroll position when it was overestimated.
   */
  _adjustScrollPosition: function() {
    var deltaHeight = this._virtualStart === 0 ?
        this._physicalTop :
        Math.min(this._scrollPosition + this._physicalTop, 0);
    // Note: the delta can be positive or negative.
    if (deltaHeight !== 0) {
      this._physicalTop = this._physicalTop - deltaHeight;
      var scrollTop = this._scrollTop;
      // juking scroll position during interial scrolling on iOS is no bueno
      if (!IOS_TOUCH_SCROLLING && scrollTop > 0) {
        this._resetScrollPosition(scrollTop - deltaHeight);
      }
    }
  },

  /**
   * Sets the position of the scroll.
   */
  _resetScrollPosition: function(pos) {
    if (this.scrollTarget && pos >= 0) {
      this._scrollTop = pos;
      this._scrollPosition = this._scrollTop;
    }
  },

  /**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */
  _updateScrollerSize: function(forceUpdate) {
    if (this.grid) {
      this._estScrollHeight = this._virtualRowCount * this._rowHeight;
    } else {
      this._estScrollHeight =
          (this._physicalBottom +
           Math.max(
               this._virtualCount - this._physicalCount - this._virtualStart,
               0) *
               this._physicalAverage);
    }
    forceUpdate = forceUpdate || this._scrollHeight === 0;
    forceUpdate = forceUpdate ||
        this._scrollPosition >= this._estScrollHeight - this._physicalSize;
    forceUpdate = forceUpdate ||
        this.grid && this.$.items.style.height < this._estScrollHeight;
    // Amortize height adjustment, so it won't trigger large repaints too often.
    if (forceUpdate ||
        Math.abs(this._estScrollHeight - this._scrollHeight) >=
            this._viewportHeight) {
      this.$.items.style.height = this._estScrollHeight + 'px';
      this._scrollHeight = this._estScrollHeight;
    }
  },

  /**
   * Scroll to a specific item in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToItem
   * @param {(Object)} item The item to be scrolled to
   */
  scrollToItem: function(item) {
    return this.scrollToIndex(this.items.indexOf(item));
  },

  /**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */
  scrollToIndex: function(idx) {
    if (typeof idx !== 'number' || idx < 0 || idx > this.items.length - 1) {
      return;
    }
    _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"] ? Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])() : Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["flush"])();
    // Items should have been rendered prior scrolling to an index.
    if (this._physicalCount === 0) {
      return;
    }
    idx = this._clamp(idx, 0, this._virtualCount - 1);
    // Update the virtual start only when needed.
    if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) {
      this._virtualStart =
          this.grid ? (idx - this._itemsPerRow * 2) : (idx - 1);
    }
    this._manageFocus();
    this._assignModels();
    this._updateMetrics();
    // Estimate new physical offset.
    this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) *
        this._physicalAverage;

    var currentTopItem = this._physicalStart;
    var currentVirtualItem = this._virtualStart;
    var targetOffsetTop = 0;
    var hiddenContentSize = this._hiddenContentSize;
    // scroll to the item as much as we can.
    while (currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize) {
      targetOffsetTop =
          targetOffsetTop + this._getPhysicalSizeIncrement(currentTopItem);
      currentTopItem = (currentTopItem + 1) % this._physicalCount;
      currentVirtualItem++;
    }
    this._updateScrollerSize(true);
    this._positionItems();
    this._resetScrollPosition(
        this._physicalTop + this._scrollOffset + targetOffsetTop);
    this._increasePoolIfNeeded(0);
    // clear cached visible index.
    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
  },

  /**
   * Reset the physical average and the average count.
   */
  _resetAverage: function() {
    this._physicalAverage = 0;
    this._physicalAverageCount = 0;
  },

  /**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */
  _resizeHandler: function() {
    this._debounce('_render', function() {
      // clear cached visible index.
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      // Skip the resize event on touch devices when the address bar slides up.
      var delta = Math.abs(this._viewportHeight - this._scrollTargetHeight);
      this.updateViewportBoundaries();
      if (this._isVisible) {
        // Reinstall the scroll event listener.
        this.toggleScrollListener(true);
        this._resetAverage();
        this._render();
      } else {
        // Uninstall the scroll event listener.
        this.toggleScrollListener(false);
      }
    }, ANIMATION_FRAME);
  },

  /**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item instance.
   */
  selectItem: function(item) {
    return this.selectIndex(this.items.indexOf(item));
  },

  /**
   * Selects the item at the given index in the items array.
   *
   * @method selectIndex
   * @param {number} index The index of the item in the items array.
   */
  selectIndex: function(index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }
    if (!this.multiSelection && this.selectedItem) {
      this.clearSelection();
    }
    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(
          this._physicalItems[this._getPhysicalIndex(index)]);
      if (model) {
        model[this.selectedAs] = true;
      }
      this.updateSizeForIndex(index);
    }
    if (this.$.selector.selectIndex) {
      // v2
      this.$.selector.selectIndex(index);
    } else {
      // v1
      this.$.selector.select(this.items[index]);
    }
  },

  /**
   * Deselects the given item.
   *
   * @method deselect
   * @param {Object} item The item instance.
   */
  deselectItem: function(item) {
    return this.deselectIndex(this.items.indexOf(item));
  },

  /**
   * Deselects the item at the given index in the items array.
   *
   * @method deselectIndex
   * @param {number} index The index of the item in the items array.
   */
  deselectIndex: function(index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }
    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(
          this._physicalItems[this._getPhysicalIndex(index)]);
      model[this.selectedAs] = false;
      this.updateSizeForIndex(index);
    }
    if (this.$.selector.deselectIndex) {
      // v2
      this.$.selector.deselectIndex(index);
    } else {
      // v1
      this.$.selector.deselect(this.items[index]);
    }
  },

  /**
   * Selects or deselects a given item depending on whether the item
   * has already been selected.
   *
   * @method toggleSelectionForItem
   * @param {Object} item The item object.
   */
  toggleSelectionForItem: function(item) {
    return this.toggleSelectionForIndex(this.items.indexOf(item));
  },

  /**
   * Selects or deselects the item at the given index in the items array
   * depending on whether the item has already been selected.
   *
   * @method toggleSelectionForIndex
   * @param {number} index The index of the item in the items array.
   */
  toggleSelectionForIndex: function(index) {
    var isSelected = this.$.selector.isIndexSelected ?
        this.$.selector.isIndexSelected(index) :
        this.$.selector.isSelected(this.items[index]);
    isSelected ? this.deselectIndex(index) : this.selectIndex(index);
  },

  /**
   * Clears the current selection in the list.
   *
   * @method clearSelection
   */
  clearSelection: function() {
    this._iterateItems(function(pidx, vidx) {
      this.modelForElement(this._physicalItems[pidx])[this.selectedAs] = false;
    });
    this.$.selector.clearSelection();
  },

  /**
   * Add an event listener to `tap` if `selectionEnabled` is true,
   * it will remove the listener otherwise.
   */
  _selectionEnabledChanged: function(selectionEnabled) {
    var handler = selectionEnabled ? this.listen : this.unlisten;
    handler.call(this, this, 'tap', '_selectionHandler');
  },

  /**
   * Select an item from an event object.
   */
  _selectionHandler: function(e) {
    var model = this.modelForElement(e.target);
    if (!model) {
      return;
    }
    var modelTabIndex, activeElTabIndex;
    var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(e).path[0];
    var activeEl = this._getActiveElement();
    var physicalItem =
        this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];
    // Safari does not focus certain form controls via mouse
    // https://bugs.webkit.org/show_bug.cgi?id=118043
    if (target.localName === 'input' || target.localName === 'button' ||
        target.localName === 'select') {
      return;
    }
    // Set a temporary tabindex
    modelTabIndex = model.tabIndex;
    model.tabIndex = SECRET_TABINDEX;
    activeElTabIndex = activeEl ? activeEl.tabIndex : -1;
    model.tabIndex = modelTabIndex;
    // Only select the item if the tap wasn't on a focusable child
    // or the element bound to `tabIndex`
    if (activeEl && physicalItem !== activeEl &&
        physicalItem.contains(activeEl) &&
        activeElTabIndex !== SECRET_TABINDEX) {
      return;
    }
    this.toggleSelectionForItem(model[this.as]);
  },

  _multiSelectionChanged: function(multiSelection) {
    this.clearSelection();
    this.$.selector.multi = multiSelection;
  },

  /**
   * Updates the size of a given list item.
   *
   * @method updateSizeForItem
   * @param {Object} item The item instance.
   */
  updateSizeForItem: function(item) {
    return this.updateSizeForIndex(this.items.indexOf(item));
  },

  /**
   * Updates the size of the item at the given index in the items array.
   *
   * @method updateSizeForIndex
   * @param {number} index The index of the item in the items array.
   */
  updateSizeForIndex: function(index) {
    if (!this._isIndexRendered(index)) {
      return null;
    }
    this._updateMetrics([this._getPhysicalIndex(index)]);
    this._positionItems();
    return null;
  },

  /**
   * Creates a temporary backfill item in the rendered pool of physical items
   * to replace the main focused item. The focused item has tabIndex = 0
   * and might be currently focused by the user.
   *
   * This dynamic replacement helps to preserve the focus state.
   */
  _manageFocus: function() {
    var fidx = this._focusedVirtualIndex;

    if (fidx >= 0 && fidx < this._virtualCount) {
      // if it's a valid index, check if that index is rendered
      // in a physical item.
      if (this._isIndexRendered(fidx)) {
        this._restoreFocusedItem();
      } else {
        this._createFocusBackfillItem();
      }
    } else if (this._virtualCount > 0 && this._physicalCount > 0) {
      // otherwise, assign the initial focused index.
      this._focusedPhysicalIndex = this._physicalStart;
      this._focusedVirtualIndex = this._virtualStart;
      this._focusedItem = this._physicalItems[this._physicalStart];
    }
  },

  /**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */
  _convertIndexToCompleteRow: function(idx) {
    // when grid == false _itemPerRow can be unset.
    this._itemsPerRow = this._itemsPerRow || 1;
    return this.grid ? Math.ceil(idx / this._itemsPerRow) * this._itemsPerRow :
                       idx;
  },

  _isIndexRendered: function(idx) {
    return idx >= this._virtualStart && idx <= this._virtualEnd;
  },

  _isIndexVisible: function(idx) {
    return idx >= this.firstVisibleIndex && idx <= this.lastVisibleIndex;
  },

  _getPhysicalIndex: function(vidx) {
    return IS_V2 ?
        (this._physicalStart + (vidx - this._virtualStart)) %
            this._physicalCount :
        this._physicalIndexForKey[this._collection.getKey(this.items[vidx])];
  },

  focusItem: function(idx) {
    this._focusPhysicalItem(idx);
  },

  _focusPhysicalItem: function(idx) {
    if (idx < 0 || idx >= this._virtualCount) {
      return;
    }
    this._restoreFocusedItem();
    // scroll to index to make sure it's rendered
    if (!this._isIndexRendered(idx)) {
      this.scrollToIndex(idx);
    }
    var physicalItem = this._physicalItems[this._getPhysicalIndex(idx)];
    var model = this.modelForElement(physicalItem);
    var focusable;
    // set a secret tab index
    model.tabIndex = SECRET_TABINDEX;
    // check if focusable element is the physical item
    if (physicalItem.tabIndex === SECRET_TABINDEX) {
      focusable = physicalItem;
    }
    // search for the element which tabindex is bound to the secret tab index
    if (!focusable) {
      focusable = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(physicalItem)
                      .querySelector('[tabindex="' + SECRET_TABINDEX + '"]');
    }
    // restore the tab index
    model.tabIndex = 0;
    // focus the focusable element
    this._focusedVirtualIndex = idx;
    focusable && focusable.focus();
  },

  _removeFocusedItem: function() {
    if (this._offscreenFocusedItem) {
      this._itemsParent.removeChild(this._offscreenFocusedItem);
    }
    this._offscreenFocusedItem = null;
    this._focusBackfillItem = null;
    this._focusedItem = null;
    this._focusedVirtualIndex = -1;
    this._focusedPhysicalIndex = -1;
  },

  _createFocusBackfillItem: function() {
    var fpidx = this._focusedPhysicalIndex;

    if (this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    }
    if (!this._focusBackfillItem) {
      // Create a physical item.
      var inst = this.stamp(null);
      this._focusBackfillItem = inst.root.querySelector('*');
      this._itemsParent.appendChild(inst.root);
    }
    // Set the offcreen focused physical item.
    this._offscreenFocusedItem = this._physicalItems[fpidx];
    this.modelForElement(this._offscreenFocusedItem).tabIndex = 0;
    this._physicalItems[fpidx] = this._focusBackfillItem;
    this._focusedPhysicalIndex = fpidx;
    // Hide the focused physical.
    this.translate3d(0, HIDDEN_Y, 0, this._offscreenFocusedItem);
  },

  _restoreFocusedItem: function() {
    if (!this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    }
    // Assign models to the focused index.
    this._assignModels();
    // Get the new physical index for the focused index.
    var fpidx = this._focusedPhysicalIndex =
        this._getPhysicalIndex(this._focusedVirtualIndex);

    var onScreenItem = this._physicalItems[fpidx];
    if (!onScreenItem) {
      return;
    }
    var onScreenInstance = this.modelForElement(onScreenItem);
    var offScreenInstance = this.modelForElement(this._offscreenFocusedItem);
    // Restores the physical item only when it has the same model
    // as the offscreen one. Use key for comparison since users can set
    // a new item via set('items.idx').
    if (onScreenInstance[this.as] === offScreenInstance[this.as]) {
      // Flip the focus backfill.
      this._focusBackfillItem = onScreenItem;
      onScreenInstance.tabIndex = -1;
      // Restore the focused physical item.
      this._physicalItems[fpidx] = this._offscreenFocusedItem;
      // Hide the physical item that backfills.
      this.translate3d(0, HIDDEN_Y, 0, this._focusBackfillItem);
    } else {
      this._removeFocusedItem();
      this._focusBackfillItem = null;
    }
    this._offscreenFocusedItem = null;
  },

  _didFocus: function(e) {
    var targetModel = this.modelForElement(e.target);
    var focusedModel = this.modelForElement(this._focusedItem);
    var hasOffscreenFocusedItem = this._offscreenFocusedItem !== null;
    var fidx = this._focusedVirtualIndex;
    if (!targetModel) {
      return;
    }
    if (focusedModel === targetModel) {
      // If the user focused the same item, then bring it into view if it's not
      // visible.
      if (!this._isIndexVisible(fidx)) {
        this.scrollToIndex(fidx);
      }
    } else {
      this._restoreFocusedItem();
      // Restore tabIndex for the currently focused item.
      if (focusedModel) {
        focusedModel.tabIndex = -1;
      }
      // Set the tabIndex for the next focused item.
      targetModel.tabIndex = 0;
      fidx = targetModel[this.indexAs];
      this._focusedVirtualIndex = fidx;
      this._focusedPhysicalIndex = this._getPhysicalIndex(fidx);
      this._focusedItem = this._physicalItems[this._focusedPhysicalIndex];
      if (hasOffscreenFocusedItem && !this._offscreenFocusedItem) {
        this._update();
      }
    }
  },

  _keydownHandler: function(e) {
    switch (e.keyCode) {
      case /* ARROW_DOWN */ 40:
        if (this._focusedVirtualIndex < this._virtualCount - 1)
          e.preventDefault();
        this._focusPhysicalItem(
            this._focusedVirtualIndex + (this.grid ? this._itemsPerRow : 1));
        break;
      case /* ARROW_RIGHT */ 39:
        if (this.grid)
          this._focusPhysicalItem(
              this._focusedVirtualIndex + (this._isRTL ? -1 : 1));
        break;
      case /* ARROW_UP */ 38:
        if (this._focusedVirtualIndex > 0)
          e.preventDefault();
        this._focusPhysicalItem(
            this._focusedVirtualIndex - (this.grid ? this._itemsPerRow : 1));
        break;
      case /* ARROW_LEFT */ 37:
        if (this.grid)
          this._focusPhysicalItem(
              this._focusedVirtualIndex + (this._isRTL ? 1 : -1));
        break;
      case /* ENTER */ 13:
        this._focusPhysicalItem(this._focusedVirtualIndex);
        if (this.selectionEnabled)
          this._selectionHandler(e);
        break;
    }
  },

  _clamp: function(v, min, max) {
    return Math.min(max, Math.max(min, v));
  },

  _debounce: function(name, cb, asyncModule) {
    if (IS_V2) {
      this._debouncers = this._debouncers || {};
      this._debouncers[name] = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_9__["Debouncer"].debounce(
          this._debouncers[name], asyncModule, cb.bind(this));
      Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["enqueueDebouncer"])(this._debouncers[name]);
    } else {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["addDebouncer"])(this.debounce(name, cb));
    }
  },

  _forwardProperty: function(inst, name, value) {
    if (IS_V2) {
      inst._setPendingProperty(name, value);
    } else {
      inst[name] = value;
    }
  },

  /* Templatizer bindings for v2 */
  _forwardHostPropV2: function(prop, value) {
    (this._physicalItems || [])
        .concat([this._offscreenFocusedItem, this._focusBackfillItem])
        .forEach(function(item) {
          if (item) {
            this.modelForElement(item).forwardHostProp(prop, value);
          }
        }, this);
  },

  _notifyInstancePropV2: function(inst, prop, value) {
    if (Object(_polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__["matches"])(this.as, prop)) {
      var idx = inst[this.indexAs];
      if (prop == this.as) {
        this.items[idx] = value;
      }
      this.notifyPath(Object(_polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__["translate"])(this.as, 'items.' + idx, prop), value);
    }
  },

  /* Templatizer bindings for v1 */
  _getStampedChildren: function() {
    return this._physicalItems;
  },

  _forwardInstancePath: function(inst, path, value) {
    if (path.indexOf(this.as + '.') === 0) {
      this.notifyPath(
          'items.' + inst.__key__ + '.' + path.slice(this.as.length + 1),
          value);
    }
  },

  _forwardParentPath: function(path, value) {
    (this._physicalItems || [])
        .concat([this._offscreenFocusedItem, this._focusBackfillItem])
        .forEach(function(item) {
          if (item) {
            this.modelForElement(item).notifyPath(path, value, true);
          }
        }, this);
  },

  _forwardParentProp: function(prop, value) {
    (this._physicalItems || [])
        .concat([this._offscreenFocusedItem, this._focusBackfillItem])
        .forEach(function(item) {
          if (item) {
            this.modelForElement(item)[prop] = value;
          }
        }, this);
  },

  /* Gets the activeElement of the shadow root/host that contains the list. */
  _getActiveElement: function() {
    var itemsHost = this._itemsParent.node.domHost;
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(itemsHost ? itemsHost.root : document).activeElement;
  }
});


/***/ }),

/***/ "./public/node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js":
/*!*******************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js ***!
  \*******************************************************************************/
/*! exports provided: IronMenuBehaviorImpl, IronMenuBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenuBehaviorImpl", function() { return IronMenuBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenuBehavior", function() { return IronMenuBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./public/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_selector_iron_multi_selectable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-selector/iron-multi-selectable.js */ "./public/node_modules/@polymer/iron-selector/iron-multi-selectable.js");
/* harmony import */ var _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-selector/iron-selectable.js */ "./public/node_modules/@polymer/iron-selector/iron-selectable.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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







/**
 * `IronMenuBehavior` implements accessible menu behavior.
 *
 * @demo demo/index.html
 * @polymerBehavior IronMenuBehavior
 */
const IronMenuBehaviorImpl = {

  properties: {

    /**
     * Returns the currently focused item.
     * @type {?Object}
     */
    focusedItem:
        {observer: '_focusedItemChanged', readOnly: true, type: Object},

    /**
     * The attribute to use on menu items to look up the item title. Typing the
     * first letter of an item when the menu is open focuses that item. If
     * unset, `textContent` will be used.
     */
    attrForItemTitle: {type: String},

    /**
     * @type {boolean}
     */
    disabled: {
      type: Boolean,
      value: false,
      observer: '_disabledChanged',
    },
  },

  /**
   * The list of keys has been taken from
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
   * @private
   */
  _MODIFIER_KEYS: [
    'Alt',
    'AltGraph',
    'CapsLock',
    'Control',
    'Fn',
    'FnLock',
    'Hyper',
    'Meta',
    'NumLock',
    'OS',
    'ScrollLock',
    'Shift',
    'Super',
    'Symbol',
    'SymbolLock'
  ],

  /** @private */
  _SEARCH_RESET_TIMEOUT_MS: 1000,

  /** @private */
  _previousTabIndex: 0,

  hostAttributes: {
    'role': 'menu',
  },

  observers: ['_updateMultiselectable(multi)'],

  listeners: {
    'focus': '_onFocus',
    'keydown': '_onKeydown',
    'iron-items-changed': '_onIronItemsChanged'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'up': '_onUpKey',
    'down': '_onDownKey',
    'esc': '_onEscKey',
    'shift+tab:keydown': '_onShiftTabDown'
  },

  attached: function() {
    this._resetTabindices();
  },

  /**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @param {string|number} value the value to select.
   */
  select: function(value) {
    // Cancel automatically focusing a default item if the menu received focus
    // through a user action selecting a particular item.
    if (this._defaultFocusAsync) {
      this.cancelAsync(this._defaultFocusAsync);
      this._defaultFocusAsync = null;
    }
    var item = this._valueToItem(value);
    if (item && item.hasAttribute('disabled'))
      return;
    this._setFocusedItem(item);
    _polymer_iron_selector_iron_multi_selectable_js__WEBPACK_IMPORTED_MODULE_2__["IronMultiSelectableBehaviorImpl"].select.apply(this, arguments);
  },

  /**
   * Resets all tabindex attributes to the appropriate value based on the
   * current selection state. The appropriate value is `0` (focusable) for
   * the default selected item, and `-1` (not keyboard focusable) for all
   * other items. Also sets the correct initial values for aria-selected
   * attribute, true for default selected item and false for others.
   */
  _resetTabindices: function() {
    var firstSelectedItem = this.multi ?
        (this.selectedItems && this.selectedItems[0]) :
        this.selectedItem;

    this.items.forEach(function(item) {
      item.setAttribute('tabindex', item === firstSelectedItem ? '0' : '-1');
      item.setAttribute('aria-selected', this._selection.isSelected(item));
    }, this);
  },

  /**
   * Sets appropriate ARIA based on whether or not the menu is meant to be
   * multi-selectable.
   *
   * @param {boolean} multi True if the menu should be multi-selectable.
   */
  _updateMultiselectable: function(multi) {
    if (multi) {
      this.setAttribute('aria-multiselectable', 'true');
    } else {
      this.removeAttribute('aria-multiselectable');
    }
  },

  /**
   * Given a KeyboardEvent, this method will focus the appropriate item in the
   * menu (if there is a relevant item, and it is possible to focus it).
   *
   * @param {KeyboardEvent} event A KeyboardEvent.
   */
  _focusWithKeyboardEvent: function(event) {
    // Make sure that the key pressed is not a modifier key.
    // getModifierState is not being used, as it is not available in Safari
    // earlier than 10.0.2 (https://trac.webkit.org/changeset/206725/webkit)
    if (this._MODIFIER_KEYS.indexOf(event.key) !== -1)
      return;

    this.cancelDebouncer('_clearSearchText');

    var searchText = this._searchText || '';
    var key = event.key && event.key.length == 1 ?
        event.key :
        String.fromCharCode(event.keyCode);
    searchText += key.toLocaleLowerCase();

    var searchLength = searchText.length;

    for (var i = 0, item; item = this.items[i]; i++) {
      if (item.hasAttribute('disabled')) {
        continue;
      }

      var attr = this.attrForItemTitle || 'textContent';
      var title = (item[attr] || item.getAttribute(attr) || '').trim();

      if (title.length < searchLength) {
        continue;
      }

      if (title.slice(0, searchLength).toLocaleLowerCase() == searchText) {
        this._setFocusedItem(item);
        break;
      }
    }

    this._searchText = searchText;
    this.debounce(
        '_clearSearchText',
        this._clearSearchText,
        this._SEARCH_RESET_TIMEOUT_MS);
  },

  _clearSearchText: function() {
    this._searchText = '';
  },

  /**
   * Focuses the previous item (relative to the currently focused item) in the
   * menu, disabled items will be skipped.
   * Loop until length + 1 to handle case of single item in menu.
   */
  _focusPrevious: function() {
    var length = this.items.length;
    var curFocusIndex = Number(this.indexOf(this.focusedItem));

    for (var i = 1; i < length + 1; i++) {
      var item = this.items[(curFocusIndex - i + length) % length];
      if (!item.hasAttribute('disabled')) {
        var owner = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(item).getOwnerRoot() || document;
        this._setFocusedItem(item);

        // Focus might not have worked, if the element was hidden or not
        // focusable. In that case, try again.
        if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(owner).activeElement == item) {
          return;
        }
      }
    }
  },

  /**
   * Focuses the next item (relative to the currently focused item) in the
   * menu, disabled items will be skipped.
   * Loop until length + 1 to handle case of single item in menu.
   */
  _focusNext: function() {
    var length = this.items.length;
    var curFocusIndex = Number(this.indexOf(this.focusedItem));

    for (var i = 1; i < length + 1; i++) {
      var item = this.items[(curFocusIndex + i) % length];
      if (!item.hasAttribute('disabled')) {
        var owner = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(item).getOwnerRoot() || document;
        this._setFocusedItem(item);

        // Focus might not have worked, if the element was hidden or not
        // focusable. In that case, try again.
        if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(owner).activeElement == item) {
          return;
        }
      }
    }
  },

  /**
   * Mutates items in the menu based on provided selection details, so that
   * all items correctly reflect selection state.
   *
   * @param {Element} item An item in the menu.
   * @param {boolean} isSelected True if the item should be shown in a
   * selected state, otherwise false.
   */
  _applySelection: function(item, isSelected) {
    if (isSelected) {
      item.setAttribute('aria-selected', 'true');
    } else {
      item.setAttribute('aria-selected', 'false');
    }
    _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_3__["IronSelectableBehavior"]._applySelection.apply(this, arguments);
  },

  /**
   * Discretely updates tabindex values among menu items as the focused item
   * changes.
   *
   * @param {Element} focusedItem The element that is currently focused.
   * @param {?Element} old The last element that was considered focused, if
   * applicable.
   */
  _focusedItemChanged: function(focusedItem, old) {
    old && old.setAttribute('tabindex', '-1');
    if (focusedItem && !focusedItem.hasAttribute('disabled') &&
        !this.disabled) {
      focusedItem.setAttribute('tabindex', '0');
      focusedItem.focus();
    }
  },

  /**
   * A handler that responds to mutation changes related to the list of items
   * in the menu.
   *
   * @param {CustomEvent} event An event containing mutation records as its
   * detail.
   */
  _onIronItemsChanged: function(event) {
    if (event.detail.addedNodes.length) {
      this._resetTabindices();
    }
  },

  /**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onShiftTabDown: function(event) {
    var oldTabIndex = this.getAttribute('tabindex');

    IronMenuBehaviorImpl._shiftTabPressed = true;

    this._setFocusedItem(null);

    this.setAttribute('tabindex', '-1');

    this.async(function() {
      this.setAttribute('tabindex', oldTabIndex);
      IronMenuBehaviorImpl._shiftTabPressed = false;
      // NOTE(cdata): polymer/polymer#1305
    }, 1);
  },

  /**
   * Handler that is called when the menu receives focus.
   *
   * @param {FocusEvent} event A focus event.
   */
  _onFocus: function(event) {
    if (IronMenuBehaviorImpl._shiftTabPressed) {
      // do not focus the menu itself
      return;
    }

    // Do not focus the selected tab if the deepest target is part of the
    // menu element's local DOM and is focusable.
    var rootTarget =
        /** @type {?HTMLElement} */ (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(event).rootTarget);
    if (rootTarget !== this && typeof rootTarget.tabIndex !== 'undefined' &&
        !this.isLightDescendant(rootTarget)) {
      return;
    }

    // clear the cached focus item
    this._defaultFocusAsync = this.async(function() {
      // focus the selected item when the menu receives focus, or the first item
      // if no item is selected
      var firstSelectedItem = this.multi ?
          (this.selectedItems && this.selectedItems[0]) :
          this.selectedItem;

      this._setFocusedItem(null);

      if (firstSelectedItem) {
        this._setFocusedItem(firstSelectedItem);
      } else if (this.items[0]) {
        // We find the first none-disabled item (if one exists)
        this._focusNext();
      }
    });
  },

  /**
   * Handler that is called when the up key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onUpKey: function(event) {
    // up and down arrows moves the focus
    this._focusPrevious();
    event.detail.keyboardEvent.preventDefault();
  },

  /**
   * Handler that is called when the down key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onDownKey: function(event) {
    this._focusNext();
    event.detail.keyboardEvent.preventDefault();
  },

  /**
   * Handler that is called when the esc key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onEscKey: function(event) {
    var focusedItem = this.focusedItem;
    if (focusedItem) {
      focusedItem.blur();
    }
  },

  /**
   * Handler that is called when a keydown event is detected.
   *
   * @param {KeyboardEvent} event A keyboard event.
   */
  _onKeydown: function(event) {
    if (!this.keyboardEventMatchesKeys(event, 'up down esc')) {
      // all other keys focus the menu item starting with that character
      this._focusWithKeyboardEvent(event);
    }
    event.stopPropagation();
  },

  // override _activateHandler
  _activateHandler: function(event) {
    _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_3__["IronSelectableBehavior"]._activateHandler.call(this, event);
    event.stopPropagation();
  },

  /**
   * Updates this element's tab index when it's enabled/disabled.
   * @param {boolean} disabled
   */
  _disabledChanged: function(disabled) {
    if (disabled) {
      this._previousTabIndex =
          this.hasAttribute('tabindex') ? this.tabIndex : 0;
      this.removeAttribute(
          'tabindex');  // No tabindex means not tab-able or select-able.
    } else if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', this._previousTabIndex);
    }
  }
};

IronMenuBehaviorImpl._shiftTabPressed = false;

/** @polymerBehavior */
const IronMenuBehavior =
    [_polymer_iron_selector_iron_multi_selectable_js__WEBPACK_IMPORTED_MODULE_2__["IronMultiSelectableBehavior"], _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yKeysBehavior"], IronMenuBehaviorImpl];


/***/ }),

/***/ "./public/node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js":
/*!**********************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js ***!
  \**********************************************************************************/
/*! exports provided: IronMenubarBehaviorImpl, IronMenubarBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenubarBehaviorImpl", function() { return IronMenubarBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenubarBehavior", function() { return IronMenubarBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-menu-behavior.js */ "./public/node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
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




/**
 * `IronMenubarBehavior` implements accessible menubar behavior.
 *
 * @polymerBehavior IronMenubarBehavior
 */
const IronMenubarBehaviorImpl = {

  hostAttributes: {'role': 'menubar'},

  /**
   * @type {!Object}
   */
  keyBindings: {'left': '_onLeftKey', 'right': '_onRightKey'},

  _onUpKey: function(event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },

  _onDownKey: function(event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },

  get _isRTL() {
    return window.getComputedStyle(this)['direction'] === 'rtl';
  },

  _onLeftKey: function(event) {
    if (this._isRTL) {
      this._focusNext();
    } else {
      this._focusPrevious();
    }
    event.detail.keyboardEvent.preventDefault();
  },

  _onRightKey: function(event) {
    if (this._isRTL) {
      this._focusPrevious();
    } else {
      this._focusNext();
    }
    event.detail.keyboardEvent.preventDefault();
  },

  _onKeydown: function(event) {
    if (this.keyboardEventMatchesKeys(event, 'up down left right esc')) {
      return;
    }

    // all other keys focus the menu item starting with that character
    this._focusWithKeyboardEvent(event);
  }

};

/** @polymerBehavior */
const IronMenubarBehavior = [_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronMenuBehavior"], IronMenubarBehaviorImpl];


/***/ }),

/***/ "./public/node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js":
/*!*************************************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js ***!
  \*************************************************************************************************/
/*! exports provided: IronScrollTargetBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronScrollTargetBehavior", function() { return IronScrollTargetBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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




/**
 * `Polymer.IronScrollTargetBehavior` allows an element to respond to scroll
 * events from a designated scroll target.
 *
 * Elements that consume this behavior can override the `_scrollHandler`
 * method to add logic on the scroll event.
 *
 * @demo demo/scrolling-region.html Scrolling Region
 * @demo demo/document.html Document Element
 * @polymerBehavior
 */
const IronScrollTargetBehavior = {

  properties: {

    /**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */
    scrollTarget: {
      type: HTMLElement,
      value: function() {
        return this._defaultScrollTarget;
      }
    }
  },

  observers: ['_scrollTargetChanged(scrollTarget, isAttached)'],

  /**
   * True if the event listener should be installed.
   */
  _shouldHaveListener: true,

  _scrollTargetChanged: function(scrollTarget, isAttached) {
    var eventTarget;

    if (this._oldScrollTarget) {
      this._toggleScrollListener(false, this._oldScrollTarget);
      this._oldScrollTarget = null;
    }
    if (!isAttached) {
      return;
    }
    // Support element id references
    if (scrollTarget === 'document') {
      this.scrollTarget = this._doc;

    } else if (typeof scrollTarget === 'string') {
      var domHost = this.domHost;

      this.scrollTarget = domHost && domHost.$ ?
          domHost.$[scrollTarget] :
          Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this.ownerDocument).querySelector('#' + scrollTarget);

    } else if (this._isValidScrollTarget()) {
      this._oldScrollTarget = scrollTarget;
      this._toggleScrollListener(this._shouldHaveListener, scrollTarget);
    }
  },

  /**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */
  _scrollHandler: function scrollHandler() {},

  /**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */
  get _defaultScrollTarget() {
    return this._doc;
  },

  /**
   * Shortcut for the document element
   *
   * @type {Element}
   */
  get _doc() {
    return this.ownerDocument.documentElement;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  get _scrollTop() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageYOffset :
                                               this.scrollTarget.scrollTop;
    }
    return 0;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  get _scrollLeft() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageXOffset :
                                               this.scrollTarget.scrollLeft;
    }
    return 0;
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  set _scrollTop(top) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(window.pageXOffset, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  set _scrollLeft(left) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, window.pageYOffset);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
    }
  },

  /**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */
  scroll: function(leftOrOptions, top) {
    var left;

    if (typeof leftOrOptions === 'object') {
      left = leftOrOptions.left;
      top = leftOrOptions.top;
    } else {
      left = leftOrOptions;
    }

    left = left || 0;
    top = top || 0;
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetWidth() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerWidth :
                                               this.scrollTarget.offsetWidth;
    }
    return 0;
  },

  /**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetHeight() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerHeight :
                                               this.scrollTarget.offsetHeight;
    }
    return 0;
  },

  /**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */
  _isValidScrollTarget: function() {
    return this.scrollTarget instanceof HTMLElement;
  },

  _toggleScrollListener: function(yes, scrollTarget) {
    var eventTarget = scrollTarget === this._doc ? window : scrollTarget;
    if (yes) {
      if (!this._boundScrollHandler) {
        this._boundScrollHandler = this._scrollHandler.bind(this);
        eventTarget.addEventListener('scroll', this._boundScrollHandler);
      }
    } else {
      if (this._boundScrollHandler) {
        eventTarget.removeEventListener('scroll', this._boundScrollHandler);
        this._boundScrollHandler = null;
      }
    }
  },

  /**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */
  toggleScrollListener: function(yes) {
    this._shouldHaveListener = yes;
    this._toggleScrollListener(yes, this.scrollTarget);
  }

};


/***/ }),

/***/ "./public/node_modules/@polymer/iron-selector/iron-multi-selectable.js":
/*!*****************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-selector/iron-multi-selectable.js ***!
  \*****************************************************************************/
/*! exports provided: IronMultiSelectableBehaviorImpl, IronMultiSelectableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMultiSelectableBehaviorImpl", function() { return IronMultiSelectableBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMultiSelectableBehavior", function() { return IronMultiSelectableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_selectable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-selectable.js */ "./public/node_modules/@polymer/iron-selector/iron-selectable.js");
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




/**
 * @polymerBehavior IronMultiSelectableBehavior
 */
const IronMultiSelectableBehaviorImpl = {
  properties: {

    /**
     * If true, multiple selections are allowed.
     */
    multi: {type: Boolean, value: false, observer: 'multiChanged'},

    /**
     * Gets or sets the selected elements. This is used instead of `selected`
     * when `multi` is true.
     */
    selectedValues: {
      type: Array,
      notify: true,
      value: function() {
        return [];
      }
    },

    /**
     * Returns an array of currently selected items.
     */
    selectedItems: {
      type: Array,
      readOnly: true,
      notify: true,
      value: function() {
        return [];
      }
    },

  },

  observers: ['_updateSelected(selectedValues.splices)'],

  /**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @method select
   * @param {string|number} value the value to select.
   */
  select: function(value) {
    if (this.multi) {
      this._toggleSelected(value);
    } else {
      this.selected = value;
    }
  },

  multiChanged: function(multi) {
    this._selection.multi = multi;
    this._updateSelected();
  },

  // UNUSED, FOR API COMPATIBILITY
  get _shouldUpdateSelection() {
    return this.selected != null ||
        (this.selectedValues != null && this.selectedValues.length);
  },

  _updateAttrForSelected: function() {
    if (!this.multi) {
      _iron_selectable_js__WEBPACK_IMPORTED_MODULE_1__["IronSelectableBehavior"]._updateAttrForSelected.apply(this);
    } else if (this.selectedItems && this.selectedItems.length > 0) {
      this.selectedValues =
          this.selectedItems
              .map(
                  function(selectedItem) {
                    return this._indexToValue(this.indexOf(selectedItem));
                  },
                  this)
              .filter(function(unfilteredValue) {
                return unfilteredValue != null;
              }, this);
    }
  },

  _updateSelected: function() {
    if (this.multi) {
      this._selectMulti(this.selectedValues);
    } else {
      this._selectSelected(this.selected);
    }
  },

  _selectMulti: function(values) {
    values = values || [];

    var selectedItems =
        (this._valuesToItems(values) || []).filter(function(item) {
          return item !== null && item !== undefined;
        });

    // clear all but the current selected items
    this._selection.clear(selectedItems);

    // select only those not selected yet
    for (var i = 0; i < selectedItems.length; i++) {
      this._selection.setItemSelected(selectedItems[i], true);
    }

    // Check for items, since this array is populated only when attached
    if (this.fallbackSelection && !this._selection.get().length) {
      var fallback = this._valueToItem(this.fallbackSelection);
      if (fallback) {
        this.select(this.fallbackSelection);
      }
    }
  },

  _selectionChange: function() {
    var s = this._selection.get();
    if (this.multi) {
      this._setSelectedItems(s);
      this._setSelectedItem(s.length ? s[0] : null);
    } else {
      if (s !== null && s !== undefined) {
        this._setSelectedItems([s]);
        this._setSelectedItem(s);
      } else {
        this._setSelectedItems([]);
        this._setSelectedItem(null);
      }
    }
  },

  _toggleSelected: function(value) {
    var i = this.selectedValues.indexOf(value);
    var unselected = i < 0;
    if (unselected) {
      this.push('selectedValues', value);
    } else {
      this.splice('selectedValues', i, 1);
    }
  },

  _valuesToItems: function(values) {
    return (values == null) ? null : values.map(function(value) {
      return this._valueToItem(value);
    }, this);
  }
};

/** @polymerBehavior */
const IronMultiSelectableBehavior =
    [_iron_selectable_js__WEBPACK_IMPORTED_MODULE_1__["IronSelectableBehavior"], IronMultiSelectableBehaviorImpl];


/***/ }),

/***/ "./public/node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js":
/*!*********************************************************************************************!*\
  !*** ./public/node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js ***!
  \*********************************************************************************************/
/*! exports provided: IronValidatableBehaviorMeta, IronValidatableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronValidatableBehaviorMeta", function() { return IronValidatableBehaviorMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronValidatableBehavior", function() { return IronValidatableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-meta/iron-meta.js */ "./public/node_modules/@polymer/iron-meta/iron-meta.js");
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




/**
 * Singleton IronMeta instance.
 */
let IronValidatableBehaviorMeta = null;

/**
 * `Use IronValidatableBehavior` to implement an element that validates
 * user input. Use the related `IronValidatorBehavior` to add custom
 * validation logic to an iron-input.
 *
 * By default, an `<iron-form>` element validates its fields when the user
 * presses the submit button. To validate a form imperatively, call the form's
 * `validate()` method, which in turn will call `validate()` on all its
 * children. By using `IronValidatableBehavior`, your custom element
 * will get a public `validate()`, which will return the validity of the
 * element, and a corresponding `invalid` attribute, which can be used for
 * styling.
 *
 * To implement the custom validation logic of your element, you must override
 * the protected `_getValidity()` method of this behaviour, rather than
 * `validate()`. See
 * [this](https://github.com/PolymerElements/iron-form/blob/master/demo/simple-element.html)
 * for an example.
 *
 * ### Accessibility
 *
 * Changing the `invalid` property, either manually or by calling `validate()`
 * will update the `aria-invalid` attribute.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
const IronValidatableBehavior = {

  properties: {
    /**
     * Name of the validator to use.
     */
    validator: {type: String},

    /**
     * True if the last call to `validate` is invalid.
     */
    invalid: {
      notify: true,
      reflectToAttribute: true,
      type: Boolean,
      value: false,
      observer: '_invalidChanged'
    },
  },

  registered: function() {
    IronValidatableBehaviorMeta = new _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__["IronMeta"]({type: 'validator'});
  },

  _invalidChanged: function() {
    if (this.invalid) {
      this.setAttribute('aria-invalid', 'true');
    } else {
      this.removeAttribute('aria-invalid');
    }
  },

  /* Recompute this every time it's needed, because we don't know if the
   * underlying IronValidatableBehaviorMeta has changed. */
  get _validator() {
    return IronValidatableBehaviorMeta &&
        IronValidatableBehaviorMeta.byKey(this.validator);
  },

  /**
   * @return {boolean} True if the validator `validator` exists.
   */
  hasValidator: function() {
    return this._validator != null;
  },

  /**
   * Returns true if the `value` is valid, and updates `invalid`. If you want
   * your element to have custom validation logic, do not override this method;
   * override `_getValidity(value)` instead.

   * @param {Object} value Deprecated: The value to be validated. By default,
   * it is passed to the validator's `validate()` function, if a validator is
   set.
   * If this argument is not specified, then the element's `value` property
   * is used, if it exists.
   * @return {boolean} True if `value` is valid.
   */
  validate: function(value) {
    // If this is an element that also has a value property, and there was
    // no explicit value argument passed, use the element's property instead.
    if (value === undefined && this.value !== undefined)
      this.invalid = !this._getValidity(this.value);
    else
      this.invalid = !this._getValidity(value);
    return !this.invalid;
  },

  /**
   * Returns true if `value` is valid.  By default, it is passed
   * to the validator's `validate()` function, if a validator is set. You
   * should override this method if you want to implement custom validity
   * logic for your element.
   *
   * @param {Object} value The value to be validated.
   * @return {boolean} True if `value` is valid.
   */

  _getValidity: function(value) {
    if (this.hasValidator()) {
      return this._validator.validate(value);
    }
    return true;
  }
};


/***/ }),

/***/ "./public/node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js":
/*!****************************************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js ***!
  \****************************************************************************************/
/*! exports provided: PaperCheckedElementBehaviorImpl, PaperCheckedElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperCheckedElementBehaviorImpl", function() { return PaperCheckedElementBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperCheckedElementBehavior", function() { return PaperCheckedElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-checked-element-behavior/iron-checked-element-behavior.js */ "./public/node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js");
/* harmony import */ var _paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-inky-focus-behavior.js */ "./public/node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
/* harmony import */ var _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-ripple-behavior.js */ "./public/node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
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







/**
 * Use `PaperCheckedElementBehavior` to implement a custom element that has a
 * `checked` property similar to `IronCheckedElementBehavior` and is compatible
 * with having a ripple effect.
 * @polymerBehavior PaperCheckedElementBehavior
 */
const PaperCheckedElementBehaviorImpl = {
  /**
   * Synchronizes the element's checked state with its ripple effect.
   */
  _checkedChanged: function() {
    _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronCheckedElementBehaviorImpl"]._checkedChanged.call(this);
    if (this.hasRipple()) {
      if (this.checked) {
        this._ripple.setAttribute('checked', '');
      } else {
        this._ripple.removeAttribute('checked');
      }
    }
  },

  /**
   * Synchronizes the element's `active` and `checked` state.
   */
  _buttonStateChanged: function() {
    _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"]._buttonStateChanged.call(this);
    if (this.disabled) {
      return;
    }
    if (this.isAttached) {
      this.checked = this.active;
    }
  }
};

/** @polymerBehavior */
const PaperCheckedElementBehavior = [
  _paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__["PaperInkyFocusBehavior"],
  _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronCheckedElementBehavior"],
  PaperCheckedElementBehaviorImpl
];


/***/ }),

/***/ "./public/node_modules/@polymer/paper-checkbox/paper-checkbox.js":
/*!***********************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-checkbox/paper-checkbox.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./public/node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-checked-element-behavior.js */ "./public/node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js");
/* harmony import */ var _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-inky-focus-behavior.js */ "./public/node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./public/node_modules/@polymer/polymer/lib/utils/render-status.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/









const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`<style>
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

<div id="checkboxLabel"><slot></slot></div>`;
template.setAttribute('strip-whitespace', '');

/**
Material design:
[Checkbox](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-checkbox)

`paper-checkbox` is a button that can be either checked or unchecked. User can
tap the checkbox to check or uncheck it. Usually you use checkboxes to allow
user to select multiple options from a set. If you have a single ON/OFF option,
avoid using a single checkbox and use `paper-toggle-button` instead.

Example:

    <paper-checkbox>label</paper-checkbox>

    <paper-checkbox checked> label</paper-checkbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-checkbox-unchecked-background-color` | Checkbox background color when the input is not checked | `transparent`
`--paper-checkbox-unchecked-color` | Checkbox border color when the input is not checked | `--primary-text-color`
`--paper-checkbox-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--primary-text-color`
`--paper-checkbox-checked-color` | Checkbox color when the input is checked | `--primary-color`
`--paper-checkbox-checked-ink-color` | Selected/focus ripple color when the input is checked | `--primary-color`
`--paper-checkbox-checkmark-color` | Checkmark color | `white`
`--paper-checkbox-label-color` | Label color | `--primary-text-color`
`--paper-checkbox-label-checked-color` | Label color when the input is checked | `--paper-checkbox-label-color`
`--paper-checkbox-label-spacing` | Spacing between the label and the checkbox | `8px`
`--paper-checkbox-label` | Mixin applied to the label | `{}`
`--paper-checkbox-label-checked` | Mixin applied to the label when the input is checked | `{}`
`--paper-checkbox-error-color` | Checkbox color when invalid | `--error-color`
`--paper-checkbox-size` | Size of the checkbox | `18px`
`--paper-checkbox-ink-size` | Size of the ripple | `48px`
`--paper-checkbox-margin` | Margin around the checkbox container | `initial`
`--paper-checkbox-vertical-align` | Vertical alignment of the checkbox container | `middle`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.

@demo demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: template,

  is: 'paper-checkbox',

  behaviors: [_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__["PaperCheckedElementBehavior"]],

  /** @private */
  hostAttributes: {role: 'checkbox', 'aria-checked': false, tabindex: 0},

  properties: {
    /**
     * Fired when the checked state changes due to user interaction.
     *
     * @event change
     */

    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */
    ariaActiveAttribute: {type: String, value: 'aria-checked'}
  },

  attached: function() {
    // Wait until styles have resolved to check for the default sentinel.
    // See polymer#4009 for more details.
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(this, function() {
      var inkSize =
          this.getComputedStyleValue('--calculated-paper-checkbox-ink-size')
              .trim();
      // If unset, compute and set the default `--paper-checkbox-ink-size`.
      if (inkSize === '-1px') {
        var checkboxSizeText =
            this.getComputedStyleValue('--calculated-paper-checkbox-size')
                .trim();

        var units = 'px';
        var unitsMatches = checkboxSizeText.match(/[A-Za-z]+$/);
        if (unitsMatches !== null) {
          units = unitsMatches[0];
        }

        var checkboxSize = parseFloat(checkboxSizeText);
        var defaultInkSize = (8 / 3) * checkboxSize;

        if (units === 'px') {
          defaultInkSize = Math.floor(defaultInkSize);

          // The checkbox and ripple need to have the same parity so that their
          // centers align.
          if (defaultInkSize % 2 !== checkboxSize % 2) {
            defaultInkSize++;
          }
        }

        this.updateStyles({
          '--paper-checkbox-ink-size': defaultInkSize + units,
        });
      }
    });
  },

  _computeCheckboxClass: function(checked, invalid) {
    var className = '';
    if (checked) {
      className += 'checked ';
    }
    if (invalid) {
      className += 'invalid';
    }
    return className;
  },

  _computeCheckmarkClass: function(checked) {
    return checked ? '' : 'hidden';
  },

  // create ripple inside the checkboxContainer
  _createRipple: function() {
    this._rippleContainer = this.$.checkboxContainer;
    return _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperInkyFocusBehaviorImpl"]._createRipple.call(this);
  }

});


/***/ }),

/***/ "./public/node_modules/@polymer/paper-input/paper-input-addon-behavior.js":
/*!********************************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-input/paper-input-addon-behavior.js ***!
  \********************************************************************************/
/*! exports provided: PaperInputAddonBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInputAddonBehavior", function() { return PaperInputAddonBehavior; });
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


/**
 * Use `Polymer.PaperInputAddonBehavior` to implement an add-on for
 * `<paper-input-container>`. A add-on appears below the input, and may display
 * information based on the input value and validity such as a character counter
 * or an error message.
 * @polymerBehavior
 */
const PaperInputAddonBehavior = {
  attached: function() {
    this.fire('addon-attached');
  },

  /**
   * The function called by `<paper-input-container>` when the input value or
   * validity changes.
   * @param {{
   *   invalid: boolean,
   *   inputElement: (Element|undefined),
   *   value: (string|undefined)
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function(state) {}

};


/***/ }),

/***/ "./public/node_modules/@polymer/paper-input/paper-input-behavior.js":
/*!**************************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-input/paper-input-behavior.js ***!
  \**************************************************************************/
/*! exports provided: PaperInputHelper, PaperInputBehaviorImpl, PaperInputBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInputHelper", function() { return PaperInputHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInputBehaviorImpl", function() { return PaperInputBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInputBehavior", function() { return PaperInputBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./public/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./public/node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./public/node_modules/@polymer/polymer/polymer-element.js");
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







// Generate unique, monotonically increasing IDs for labels (needed by
// aria-labelledby) and add-ons.
const PaperInputHelper = {};

PaperInputHelper.NextLabelID = 1;
PaperInputHelper.NextAddonID = 1;
PaperInputHelper.NextInputID = 1;

/**
 * Use `PaperInputBehavior` to implement inputs with `<paper-input-container>`.
 * This behavior is implemented by `<paper-input>`. It exposes a number of
 * properties from `<paper-input-container>` and `<input is="iron-input">` and
 * they should be bound in your template.
 *
 * The input element can be accessed by the `inputElement` property if you need
 * to access properties or methods that are not exposed.
 * @polymerBehavior PaperInputBehavior
 */
const PaperInputBehaviorImpl = {

  properties: {
    /**
     * Fired when the input changes due to user interaction.
     *
     * @event change
     */

    /**
     * The label for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * `<label>`'s content and `hidden` property, e.g.
     * `<label hidden$="[[!label]]">[[label]]</label>` in your `template`
     */
    label: {type: String},

    /**
     * The value for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<iron-input>`'s `bindValue`
     * property, or the value property of your input that is `notify:true`.
     * @type {*}
     */
    value: {notify: true, type: String},

    /**
     * Set to true to disable this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * both the `<paper-input-container>`'s and the input's `disabled` property.
     */
    disabled: {type: Boolean, value: false},

    /**
     * Returns true if the value is invalid. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to both the
     * `<paper-input-container>`'s and the input's `invalid` property.
     *
     * If `autoValidate` is true, the `invalid` attribute is managed
     * automatically, which can clobber attempts to manage it manually.
     */
    invalid: {type: Boolean, value: false, notify: true},

    /**
     * Set this to specify the pattern allowed by `preventInvalidInput`. If
     * you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `allowedPattern`
     * property.
     */
    allowedPattern: {type: String},

    /**
     * The type of the input. The supported types are the
     * [native input's
     * types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the (Polymer 1) `<input is="iron-input">`'s or
     * (Polymer 2)
     * `<iron-input>`'s `type` property.
     */
    type: {type: String},

    /**
     * The datalist of the input (if any). This should match the id of an
     * existing `<datalist>`. If you're using PaperInputBehavior to implement
     * your own paper-input-like element, bind this to the `<input
     * is="iron-input">`'s `list` property.
     */
    list: {type: String},

    /**
     * A pattern to validate the `input` with. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `pattern` property.
     */
    pattern: {type: String},

    /**
     * Set to true to mark the input as required. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `required` property.
     */
    required: {type: Boolean, value: false},

    /**
     * The error message to display when the input is invalid. If you're using
     * PaperInputBehavior to implement your own paper-input-like element,
     * bind this to the `<paper-input-error>`'s content, if using.
     */
    errorMessage: {type: String},

    /**
     * Set to true to show a character counter.
     */
    charCounter: {type: Boolean, value: false},

    /**
     * Set to true to disable the floating label. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `noLabelFloat` property.
     */
    noLabelFloat: {type: Boolean, value: false},

    /**
     * Set to true to always float the label. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to the
     * `<paper-input-container>`'s `alwaysFloatLabel` property.
     */
    alwaysFloatLabel: {type: Boolean, value: false},

    /**
     * Set to true to auto-validate the input value. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `autoValidate` property.
     */
    autoValidate: {type: Boolean, value: false},

    /**
     * Name of the validator to use. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<input is="iron-input">`'s `validator` property.
     */
    validator: {type: String},

    // HTMLInputElement attributes for binding if needed

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocomplete`
     * property.
     */
    autocomplete: {type: String, value: 'off'},

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autofocus`
     * property.
     */
    autofocus: {type: Boolean, observer: '_autofocusChanged'},

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `inputmode`
     * property.
     */
    inputmode: {type: String},

    /**
     * The minimum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `minlength`
     * property.
     */
    minlength: {type: Number},

    /**
     * The maximum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `maxlength`
     * property.
     */
    maxlength: {type: Number},

    /**
     * The minimum (numeric or date-time) input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `min` property.
     */
    min: {type: String},

    /**
     * The maximum (numeric or date-time) input value.
     * Can be a String (e.g. `"2000-01-01"`) or a Number (e.g. `2`).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `max` property.
     */
    max: {type: String},

    /**
     * Limits the numeric or date-time increments.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `step` property.
     */
    step: {type: String},

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `name` property.
     */
    name: {type: String},

    /**
     * A placeholder string in addition to the label. If this is set, the label
     * will always float.
     */
    placeholder: {
      type: String,
      // need to set a default so _computeAlwaysFloatLabel is run
      value: ''
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `readonly`
     * property.
     */
    readonly: {type: Boolean, value: false},

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `size` property.
     */
    size: {type: Number},

    // Nonstandard attributes for binding if needed

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocapitalize`
     * property.
     */
    autocapitalize: {type: String, value: 'none'},

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocorrect`
     * property.
     */
    autocorrect: {type: String, value: 'off'},

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autosave`
     * property, used with type=search.
     */
    autosave: {type: String},

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `results` property,
     * used with type=search.
     */
    results: {type: Number},

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `accept` property,
     * used with type=file.
     */
    accept: {type: String},

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the`<input is="iron-input">`'s `multiple` property,
     * used with type=file.
     */
    multiple: {type: Boolean},

    /** @private */
    _ariaDescribedBy: {type: String, value: ''},

    /** @private */
    _ariaLabelledBy: {type: String, value: ''},

    /** @private */
    _inputId: {type: String, value: ''}
  },

  listeners: {
    'addon-attached': '_onAddonAttached',
  },

  /**
   * @type {!Object}
   */
  keyBindings: {'shift+tab:keydown': '_onShiftTabDown'},

  /** @private */
  hostAttributes: {tabindex: 0},

  /**
   * Returns a reference to the input element.
   * @return {!HTMLElement}
   */
  get inputElement() {
    // Chrome generates audit errors if an <input type="password"> has a
    // duplicate ID, which is almost always true in Shady DOM. Generate
    // a unique ID instead.
    if (!this.$) {
      this.$ = {}
    }
    if (!this.$.input) {
      this._generateInputId();
      this.$.input = this.$$('#' + this._inputId);
    }
    return this.$.input;
  },

  /**
   * Returns a reference to the focusable element.
   * @return {!HTMLElement}
   */
  get _focusableElement() {
    return this.inputElement;
  },

  created: function() {
    // These types have some default placeholder text; overlapping
    // the label on top of it looks terrible. Auto-float the label in this case.
    this._typesThatHaveText =
        ['date', 'datetime', 'datetime-local', 'month', 'time', 'week', 'file'];
  },

  attached: function() {
    this._updateAriaLabelledBy();

    // In the 2.0 version of the element, this is handled in `onIronInputReady`,
    // i.e. after the native input has finished distributing. In the 1.0
    // version, the input is in the shadow tree, so it's already available.
    if (!_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"] && this.inputElement &&
        this._typesThatHaveText.indexOf(this.inputElement.type) !== -1) {
      this.alwaysFloatLabel = true;
    }
  },

  _appendStringWithSpace: function(str, more) {
    if (str) {
      str = str + ' ' + more;
    } else {
      str = more;
    }
    return str;
  },

  _onAddonAttached: function(event) {
    var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).rootTarget;
    if (target.id) {
      this._ariaDescribedBy =
          this._appendStringWithSpace(this._ariaDescribedBy, target.id);
    } else {
      var id = 'paper-input-add-on-' + PaperInputHelper.NextAddonID++;
      target.id = id;
      this._ariaDescribedBy =
          this._appendStringWithSpace(this._ariaDescribedBy, id);
    }
  },

  /**
   * Validates the input element and sets an error style if needed.
   *
   * @return {boolean}
   */
  validate: function() {
    return this.inputElement.validate();
  },

  /**
   * Forward focus to inputElement. Overriden from IronControlState.
   */
  _focusBlurHandler: function(event) {
    _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"]._focusBlurHandler.call(this, event);

    // Forward the focus to the nested input.
    if (this.focused && !this._shiftTabPressed && this._focusableElement) {
      this._focusableElement.focus();
    }
  },

  /**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onShiftTabDown: function(event) {
    var oldTabIndex = this.getAttribute('tabindex');
    this._shiftTabPressed = true;
    this.setAttribute('tabindex', '-1');
    this.async(function() {
      this.setAttribute('tabindex', oldTabIndex);
      this._shiftTabPressed = false;
    }, 1);
  },

  /**
   * If `autoValidate` is true, then validates the element.
   */
  _handleAutoValidate: function() {
    if (this.autoValidate)
      this.validate();
  },

  /**
   * Restores the cursor to its original position after updating the value.
   * @param {string} newValue The value that should be saved.
   */
  updateValueAndPreserveCaret: function(newValue) {
    // Not all elements might have selection, and even if they have the
    // right properties, accessing them might throw an exception (like for
    // <input type=number>)
    try {
      var start = this.inputElement.selectionStart;
      this.value = newValue;

      // The cursor automatically jumps to the end after re-setting the value,
      // so restore it to its original position.
      this.inputElement.selectionStart = start;
      this.inputElement.selectionEnd = start;
    } catch (e) {
      // Just set the value and give up on the caret.
      this.value = newValue;
    }
  },

  _computeAlwaysFloatLabel: function(alwaysFloatLabel, placeholder) {
    return placeholder || alwaysFloatLabel;
  },

  _updateAriaLabelledBy: function() {
    var label = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).querySelector('label');
    if (!label) {
      this._ariaLabelledBy = '';
      return;
    }
    var labelledBy;
    if (label.id) {
      labelledBy = label.id;
    } else {
      labelledBy = 'paper-input-label-' + PaperInputHelper.NextLabelID++;
      label.id = labelledBy;
    }
    this._ariaLabelledBy = labelledBy;
  },

  _generateInputId: function() {
    if (!this._inputId || this._inputId === '') {
      this._inputId = 'input-' + PaperInputHelper.NextInputID++;
    }
  },

  _onChange: function(event) {
    // In the Shadow DOM, the `change` event is not leaked into the
    // ancestor tree, so we must do this manually.
    // See
    // https://w3c.github.io/webcomponents/spec/shadow/#events-that-are-not-leaked-into-ancestor-trees.
    if (this.shadowRoot) {
      this.fire(
          event.type,
          {sourceEvent: event},
          {node: this, bubbles: event.bubbles, cancelable: event.cancelable});
    }
  },

  _autofocusChanged: function() {
    // Firefox doesn't respect the autofocus attribute if it's applied after
    // the page is loaded (Chrome/WebKit do respect it), preventing an
    // autofocus attribute specified in markup from taking effect when the
    // element is upgraded. As a workaround, if the autofocus property is set,
    // and the focus hasn't already been moved elsewhere, we take focus.
    if (this.autofocus && this._focusableElement) {
      // In IE 11, the default document.activeElement can be the page's
      // outermost html element, but there are also cases (under the
      // polyfill?) in which the activeElement is not a real HTMLElement, but
      // just a plain object. We identify the latter case as having no valid
      // activeElement.
      var activeElement = document.activeElement;
      var isActiveElementValid = activeElement instanceof HTMLElement;

      // Has some other element has already taken the focus?
      var isSomeElementActive = isActiveElementValid &&
          activeElement !== document.body &&
          activeElement !== document.documentElement; /* IE 11 */
      if (!isSomeElementActive) {
        // No specific element has taken the focus yet, so we can take it.
        this._focusableElement.focus();
      }
    }
  }
};

/** @polymerBehavior */
const PaperInputBehavior =
    [_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yKeysBehavior"], PaperInputBehaviorImpl];


/***/ }),

/***/ "./public/node_modules/@polymer/paper-input/paper-input-char-counter.js":
/*!******************************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-input/paper-input-char-counter.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./public/node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_input_addon_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paper-input-addon-behavior.js */ "./public/node_modules/@polymer/paper-input/paper-input-addon-behavior.js");
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








/*
`<paper-input-char-counter>` is a character counter for use with
`<paper-input-container>`. It shows the number of characters entered in the
input and the max length if it is specified.

    <paper-input-container>
      <input maxlength="20">
      <paper-input-char-counter></paper-input-char-counter>
    </paper-input-container>

### Styling

The following mixin is available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-char-counter` | Mixin applied to the element | `{}`
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
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
`,

  is: 'paper-input-char-counter',
  behaviors: [_paper_input_addon_behavior_js__WEBPACK_IMPORTED_MODULE_4__["PaperInputAddonBehavior"]],
  properties: {_charCounterStr: {type: String, value: '0'}},

  /**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function(state) {
    if (!state.inputElement) {
      return;
    }

    state.value = state.value || '';

    var counter = state.value.toString().length.toString();

    if (state.inputElement.hasAttribute('maxlength')) {
      counter += '/' + state.inputElement.getAttribute('maxlength');
    }

    this._charCounterStr = counter;
  }
});


/***/ }),

/***/ "./public/node_modules/@polymer/paper-input/paper-input-container.js":
/*!***************************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-input/paper-input-container.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./public/node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./public/node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./public/node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js */ "./public/node_modules/@polymer/polymer/lib/utils/case-map.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
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









const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`
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
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);

/*
`<paper-input-container>` is a container for a `<label>`, an `<iron-input>` or
`<textarea>` and optional add-on elements such as an error message or character
counter, used to implement Material Design text fields.

For example:

    <paper-input-container>
      <label slot="label">Your name</label>
      <iron-input slot="input">
        <input>
      </iron-input>
      // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
instead of the above.
    </paper-input-container>

You can style the nested `<input>` however you want; if you want it to look like
a Material Design input, you can style it with the
--paper-input-container-shared-input-style mixin.

Do not wrap `<paper-input-container>` around elements that already include it,
such as `<paper-input>`. Doing so may cause events to bounce infinitely between
the container and its contained element.

### Listening for input changes

By default, it listens for changes on the `bind-value` attribute on its children
nodes and perform tasks such as auto-validating and label styling when the
`bind-value` changes. You can configure the attribute it listens to with the
`attr-for-value` attribute.

### Using a custom input element

You can use a custom input element in a `<paper-input-container>`, for example
to implement a compound input field like a social security number input. The
custom input element should have the `paper-input-input` class, have a
`notify:true` value property and optionally implements
`Polymer.IronValidatableBehavior` if it is validatable.

    <paper-input-container attr-for-value="ssn-value">
      <label slot="label">Social security number</label>
      <ssn-input slot="input" class="paper-input-input"></ssn-input>
    </paper-input-container>


If you're using a `<paper-input-container>` imperatively, it's important to make
sure that you attach its children (the `iron-input` and the optional `label`)
before you attach the `<paper-input-container>` itself, so that it can be set up
correctly.

### Validation

If the `auto-validate` attribute is set, the input container will validate the
input and update the container styling when the input value changes.

### Add-ons

Add-ons are child elements of a `<paper-input-container>` with the `add-on`
attribute and implements the `Polymer.PaperInputAddonBehavior` behavior. They
are notified when the input value or validity changes, and may implement
functionality such as error messages or character counters. They appear at the
bottom of the input.

### Prefixes and suffixes
These are child elements of a `<paper-input-container>` with the `prefix`
or `suffix` attribute, and are displayed inline with the input, before or after.

    <paper-input-container>
      <div slot="prefix">$</div>
      <label slot="label">Total</label>
      <iron-input slot="input">
        <input>
      </iron-input>
      // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
instead of the above. <paper-icon-button slot="suffix"
icon="clear"></paper-icon-button>
    </paper-input-container>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-color` | Label and underline color when the input is not focused | `--secondary-text-color`
`--paper-input-container-focus-color` | Label and underline color when the input is focused | `--primary-color`
`--paper-input-container-invalid-color` | Label and underline color when the input is is invalid | `--error-color`
`--paper-input-container-input-color` | Input foreground color | `--primary-text-color`
`--paper-input-container` | Mixin applied to the container | `{}`
`--paper-input-container-disabled` | Mixin applied to the container when it's disabled | `{}`
`--paper-input-container-label` | Mixin applied to the label | `{}`
`--paper-input-container-label-focus` | Mixin applied to the label when the input is focused | `{}`
`--paper-input-container-label-floating` | Mixin applied to the label when floating | `{}`
`--paper-input-container-input` | Mixin applied to the input | `{}`
`--paper-input-container-input-align` | The vertical-align property of the input | `bottom`
`--paper-input-container-input-disabled` | Mixin applied to the input when the component is disabled | `{}`
`--paper-input-container-input-focus` | Mixin applied to the input when focused | `{}`
`--paper-input-container-input-invalid` | Mixin applied to the input when invalid | `{}`
`--paper-input-container-input-webkit-spinner` | Mixin applied to the webkit spinner | `{}`
`--paper-input-container-input-webkit-clear` | Mixin applied to the webkit clear button | `{}`
`--paper-input-container-input-webkit-calendar-picker-indicator` | Mixin applied to the webkit calendar picker indicator | `{}`
`--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer clear button | `{}`
`--paper-input-container-underline` | Mixin applied to the underline | `{}`
`--paper-input-container-underline-focus` | Mixin applied to the underline when the input is focused | `{}`
`--paper-input-container-underline-disabled` | Mixin applied to the underline when the input is disabled | `{}`
`--paper-input-prefix` | Mixin applied to the input prefix | `{}`
`--paper-input-suffix` | Mixin applied to the input suffix | `{}`

This element is `display:block` by default, but you can set the `inline`
attribute to make it `display:inline-block`.
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`
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
`,

  is: 'paper-input-container',

  properties: {
    /**
     * Set to true to disable the floating label. The label disappears when the
     * input value is not null.
     */
    noLabelFloat: {type: Boolean, value: false},

    /**
     * Set to true to always float the floating label.
     */
    alwaysFloatLabel: {type: Boolean, value: false},

    /**
     * The attribute to listen for value changes on.
     */
    attrForValue: {type: String, value: 'bind-value'},

    /**
     * Set to true to auto-validate the input value when it changes.
     */
    autoValidate: {type: Boolean, value: false},

    /**
     * True if the input is invalid. This property is set automatically when the
     * input value changes if auto-validating, or when the `iron-input-validate`
     * event is heard from a child.
     */
    invalid: {observer: '_invalidChanged', type: Boolean, value: false},

    /**
     * True if the input has focus.
     */
    focused: {readOnly: true, type: Boolean, value: false, notify: true},

    _addons: {
      type: Array
      // do not set a default value here intentionally - it will be initialized
      // lazily when a distributed child is attached, which may occur before
      // configuration for this element in polyfill.
    },

    _inputHasContent: {type: Boolean, value: false},

    _inputSelector:
        {type: String, value: 'input,iron-input,textarea,.paper-input-input'},

    _boundOnFocus: {
      type: Function,
      value: function() {
        return this._onFocus.bind(this);
      }
    },

    _boundOnBlur: {
      type: Function,
      value: function() {
        return this._onBlur.bind(this);
      }
    },

    _boundOnInput: {
      type: Function,
      value: function() {
        return this._onInput.bind(this);
      }
    },

    _boundValueChanged: {
      type: Function,
      value: function() {
        return this._onValueChanged.bind(this);
      }
    }
  },

  listeners: {
    'addon-attached': '_onAddonAttached',
    'iron-input-validate': '_onIronInputValidate'
  },

  get _valueChangedEvent() {
    return this.attrForValue + '-changed';
  },

  get _propertyForValue() {
    return Object(_polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_6__["dashToCamelCase"])(this.attrForValue);
  },

  get _inputElement() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_5__["dom"])(this).querySelector(this._inputSelector);
  },

  get _inputElementValue() {
    return this._inputElement[this._propertyForValue] ||
        this._inputElement.value;
  },

  ready: function() {
    // Paper-input treats a value of undefined differently at startup than
    // the rest of the time (specifically: it does not validate it at startup,
    // but it does after that. We need to track whether the first time we
    // encounter the value is basically this first time, so that we can validate
    // it correctly the rest of the time. See
    // https://github.com/PolymerElements/paper-input/issues/605
    this.__isFirstValueUpdate = true;
    if (!this._addons) {
      this._addons = [];
    }
    this.addEventListener('focus', this._boundOnFocus, true);
    this.addEventListener('blur', this._boundOnBlur, true);
  },

  attached: function() {
    if (this.attrForValue) {
      this._inputElement.addEventListener(
          this._valueChangedEvent, this._boundValueChanged);
    } else {
      this.addEventListener('input', this._onInput);
    }

    // Only validate when attached if the input already has a value.
    if (this._inputElementValue && this._inputElementValue != '') {
      this._handleValueAndAutoValidate(this._inputElement);
    } else {
      this._handleValue(this._inputElement);
    }
  },

  /** @private */
  _onAddonAttached: function(event) {
    if (!this._addons) {
      this._addons = [];
    }
    var target = event.target;
    if (this._addons.indexOf(target) === -1) {
      this._addons.push(target);
      if (this.isAttached) {
        this._handleValue(this._inputElement);
      }
    }
  },

  /** @private */
  _onFocus: function() {
    this._setFocused(true);
  },

  /** @private */
  _onBlur: function() {
    this._setFocused(false);
    this._handleValueAndAutoValidate(this._inputElement);
  },

  /** @private */
  _onInput: function(event) {
    this._handleValueAndAutoValidate(event.target);
  },

  /** @private */
  _onValueChanged: function(event) {
    var input = event.target;

    // Paper-input treats a value of undefined differently at startup than
    // the rest of the time (specifically: it does not validate it at startup,
    // but it does after that. If this is in fact the bootup case, ignore
    // validation, just this once.
    if (this.__isFirstValueUpdate) {
      this.__isFirstValueUpdate = false;
      if (input.value === undefined || input.value === '') {
        return;
      }
    }

    this._handleValueAndAutoValidate(event.target);
  },

  /** @private */
  _handleValue: function(inputElement) {
    var value = this._inputElementValue;

    // type="number" hack needed because this.value is empty until it's valid
    if (value || value === 0 ||
        (inputElement.type === 'number' && !inputElement.checkValidity())) {
      this._inputHasContent = true;
    } else {
      this._inputHasContent = false;
    }

    this.updateAddons(
        {inputElement: inputElement, value: value, invalid: this.invalid});
  },

  /** @private */
  _handleValueAndAutoValidate: function(inputElement) {
    if (this.autoValidate && inputElement) {
      var valid;

      if (inputElement.validate) {
        valid = inputElement.validate(this._inputElementValue);
      } else {
        valid = inputElement.checkValidity();
      }
      this.invalid = !valid;
    }

    // Call this last to notify the add-ons.
    this._handleValue(inputElement);
  },

  /** @private */
  _onIronInputValidate: function(event) {
    this.invalid = this._inputElement.invalid;
  },

  /** @private */
  _invalidChanged: function() {
    if (this._addons) {
      this.updateAddons({invalid: this.invalid});
    }
  },

  /**
   * Call this to update the state of add-ons.
   * @param {Object} state Add-on state.
   */
  updateAddons: function(state) {
    for (var addon, index = 0; addon = this._addons[index]; index++) {
      addon.update(state);
    }
  },

  /** @private */
  _computeInputContentClass: function(
      noLabelFloat, alwaysFloatLabel, focused, invalid, _inputHasContent) {
    var cls = 'input-content';
    if (!noLabelFloat) {
      var label = this.querySelector('label');

      if (alwaysFloatLabel || _inputHasContent) {
        cls += ' label-is-floating';
        // If the label is floating, ignore any offsets that may have been
        // applied from a prefix element.
        this.$.labelAndInputContainer.style.position = 'static';

        if (invalid) {
          cls += ' is-invalid';
        } else if (focused) {
          cls += ' label-is-highlighted';
        }
      } else {
        // When the label is not floating, it should overlap the input element.
        if (label) {
          this.$.labelAndInputContainer.style.position = 'relative';
        }
        if (invalid) {
          cls += ' is-invalid';
        }
      }
    } else {
      if (_inputHasContent) {
        cls += ' label-is-hidden';
      }
      if (invalid) {
        cls += ' is-invalid';
      }
    }
    if (focused) {
      cls += ' focused';
    }
    return cls;
  },

  /** @private */
  _computeUnderlineClass: function(focused, invalid) {
    var cls = 'underline';
    if (invalid) {
      cls += ' is-invalid';
    } else if (focused) {
      cls += ' is-highlighted'
    }
    return cls;
  },

  /** @private */
  _computeAddOnContentClass: function(focused, invalid) {
    var cls = 'add-on-content';
    if (invalid) {
      cls += ' is-invalid';
    } else if (focused) {
      cls += ' is-highlighted'
    }
    return cls;
  }
});


/***/ }),

/***/ "./public/node_modules/@polymer/paper-input/paper-input-error.js":
/*!***********************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-input/paper-input-error.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./public/node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./public/node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_input_addon_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-input-addon-behavior.js */ "./public/node_modules/@polymer/paper-input/paper-input-addon-behavior.js");
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









/*
`<paper-input-error>` is an error message for use with
`<paper-input-container>`. The error is displayed when the
`<paper-input-container>` is `invalid`.

    <paper-input-container>
      <input pattern="[0-9]*">
      <paper-input-error slot="add-on">Only numbers are
allowed!</paper-input-error>
    </paper-input-container>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-invalid-color` | The foreground color of the error | `--error-color`
`--paper-input-error` | Mixin applied to the error | `{}`
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
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
`,

  is: 'paper-input-error',
  behaviors: [_paper_input_addon_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperInputAddonBehavior"]],

  properties: {
    /**
     * True if the error is showing.
     */
    invalid: {readOnly: true, reflectToAttribute: true, type: Boolean}
  },

  /**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function(state) {
    this._setInvalid(state.invalid);
  }
});


/***/ }),

/***/ "./public/node_modules/@polymer/paper-input/paper-input.js":
/*!*****************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-input/paper-input.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_input_iron_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-input/iron-input.js */ "./public/node_modules/@polymer/iron-input/iron-input.js");
/* harmony import */ var _paper_input_char_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-input-char-counter.js */ "./public/node_modules/@polymer/paper-input/paper-input-char-counter.js");
/* harmony import */ var _paper_input_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-input-container.js */ "./public/node_modules/@polymer/paper-input/paper-input-container.js");
/* harmony import */ var _paper_input_error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paper-input-error.js */ "./public/node_modules/@polymer/paper-input/paper-input-error.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./public/node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./public/node_modules/@polymer/polymer/lib/elements/dom-module.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_input_behavior_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paper-input-behavior.js */ "./public/node_modules/@polymer/paper-input/paper-input-behavior.js");
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












/**
Material design: [Text
fields](https://www.google.com/design/spec/components/text-fields.html)

`<paper-input>` is a single-line text field with Material Design styling.

    <paper-input label="Input label"></paper-input>

It may include an optional error message or character counter.

    <paper-input error-message="Invalid input!" label="Input
label"></paper-input> <paper-input char-counter label="Input
label"></paper-input>

It can also include custom prefix or suffix elements, which are displayed
before or after the text input itself. In order for an element to be
considered as a prefix, it must have the `prefix` attribute (and similarly
for `suffix`).

    <paper-input label="total">
      <div prefix>$</div>
      <paper-icon-button slot="suffix" icon="clear"></paper-icon-button>
    </paper-input>

A `paper-input` can use the native `type=search` or `type=file` features.
However, since we can't control the native styling of the input (search icon,
file button, date placeholder, etc.), in these cases the label will be
automatically floated. The `placeholder` attribute can still be used for
additional informational text.

    <paper-input label="search!" type="search"
        placeholder="search for cats" autosave="test" results="5">
    </paper-input>

See `Polymer.PaperInputBehavior` for more API docs.

### Focus

To focus a paper-input, you can call the native `focus()` method as long as the
paper input has a tab index. Similarly, `blur()` will blur the element.

### Styling

See `Polymer.PaperInputContainer` for a list of custom properties used to
style this element.

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer reveal button (the eyeball) | {}

@group Paper Elements
@element paper-input
@hero hero.svg
@demo demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__["Polymer"])({
  is: 'paper-input',

  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__["html"]`
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
  `,

  behaviors: [_paper_input_behavior_js__WEBPACK_IMPORTED_MODULE_9__["PaperInputBehavior"], _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__["IronFormElementBehavior"]],

  properties: {
    value: {
      // Required for the correct TypeScript type-generation
      type: String
    }
  },

  /**
   * Returns a reference to the focusable element. Overridden from
   * PaperInputBehavior to correctly focus the native input.
   *
   * @return {!HTMLElement}
   */
  get _focusableElement() {
    return this.inputElement._inputElement;
  },

  // Note: This event is only available in the 1.0 version of this element.
  // In 2.0, the functionality of `_onIronInputReady` is done in
  // PaperInputBehavior::attached.
  listeners: {'iron-input-ready': '_onIronInputReady'},

  _onIronInputReady: function() {
    // Even though this is only used in the next line, save this for
    // backwards compatibility, since the native input had this ID until 2.0.5.
    if (!this.$.nativeInput) {
      this.$.nativeInput = this.$$('input');
    }
    if (this.inputElement &&
        this._typesThatHaveText.indexOf(this.$.nativeInput.type) !== -1) {
      this.alwaysFloatLabel = true;
    }

    // Only validate when attached if the input already has a value.
    if (!!this.inputElement.bindValue) {
      this.$.container._handleValueAndAutoValidate(this.inputElement);
    }
  },
});


/***/ }),

/***/ "./public/node_modules/@polymer/paper-styles/typography.js":
/*!*****************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-styles/typography.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_font_roboto_roboto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/font-roboto/roboto.js */ "./public/node_modules/@polymer/font-roboto/roboto.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
/*
Typographic styles are provided matching the Material Design standard styles:
http://www.google.com/design/spec/style/typography.html#typography-standard-styles

Note that these are English/Latin centric styles. You may need to further adjust
line heights and weights for CJK typesetting. See the notes in the Material
Design typography section.
*/





const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`<custom-style>
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
</custom-style>`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);


/***/ }),

/***/ "./public/node_modules/@polymer/paper-tabs/paper-tab.js":
/*!**************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-tabs/paper-tab.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./public/node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./public/node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./public/node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-ripple-behavior.js */ "./public/node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/










/*
`paper-tab` is styled to look like a tab. It should be used in conjunction with
`paper-tabs`.

Example:

    <paper-tabs selected="0">
      <paper-tab>TAB 1</paper-tab>
      <paper-tab>TAB 2</paper-tab>
      <paper-tab>TAB 3</paper-tab>
    </paper-tabs>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-tab-ink` | Ink color | `--paper-yellow-a100`
`--paper-tab` | Mixin applied to the tab | `{}`
`--paper-tab-content` | Mixin applied to the tab content | `{}`
`--paper-tab-content-unselected` | Mixin applied to the tab content when the tab is not selected | `{}`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`
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
`,

  is: 'paper-tab',

  behaviors: [_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_3__["IronControlState"], _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__["IronButtonState"], _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_4__["PaperRippleBehavior"]],

  properties: {

    /**
     * If true, the tab will forward keyboard clicks (enter/space) to
     * the first anchor element found in its descendants
     */
    link: {type: Boolean, value: false, reflectToAttribute: true}

  },

  /** @private */
  hostAttributes: {role: 'tab'},

  listeners: {down: '_updateNoink', tap: '_onTap'},

  attached: function() {
    this._updateNoink();
  },

  get _parentNoink() {
    var parent = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(this).parentNode;
    return !!parent && !!parent.noink;
  },

  _updateNoink: function() {
    this.noink = !!this.noink || !!this._parentNoink;
  },

  _onTap: function(event) {
    if (this.link) {
      var anchor = this.queryEffectiveChildren('a');

      if (!anchor) {
        return;
      }

      // Don't get stuck in a loop delegating
      // the listener from the child anchor
      if (event.target === anchor) {
        return;
      }

      anchor.click();
    }
  }
});


/***/ }),

/***/ "./public/node_modules/@polymer/paper-tabs/paper-tabs-icons.js":
/*!*********************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-tabs/paper-tabs-icons.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-iconset-svg/iron-iconset-svg.js */ "./public/node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;
document.head.appendChild(template.content);


/***/ }),

/***/ "./public/node_modules/@polymer/paper-tabs/paper-tabs.js":
/*!***************************************************************!*\
  !*** ./public/node_modules/@polymer/paper-tabs/paper-tabs.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./public/node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./public/node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon.js */ "./public/node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button.js */ "./public/node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./public/node_modules/@polymer/paper-styles/color.js");
/* harmony import */ var _paper_tabs_icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-tabs-icons.js */ "./public/node_modules/@polymer/paper-tabs/paper-tabs-icons.js");
/* harmony import */ var _paper_tab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-tab.js */ "./public/node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menu-behavior.js */ "./public/node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menubar-behavior.js */ "./public/node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./public/node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./public/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./public/node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/















/**
Material design: [Tabs](https://www.google.com/design/spec/components/tabs.html)

`paper-tabs` makes it easy to explore and switch between different views or
functional aspects of an app, or to browse categorized data sets.

Use `selected` property to get or set the selected tab.

Example:

    <paper-tabs selected="0">
      <paper-tab>TAB 1</paper-tab>
      <paper-tab>TAB 2</paper-tab>
      <paper-tab>TAB 3</paper-tab>
    </paper-tabs>

See <a href="?active=paper-tab">paper-tab</a> for more information about
`paper-tab`.

A common usage for `paper-tabs` is to use it along with `iron-pages` to switch
between different views.

    <paper-tabs selected="{{selected}}">
      <paper-tab>Tab 1</paper-tab>
      <paper-tab>Tab 2</paper-tab>
      <paper-tab>Tab 3</paper-tab>
    </paper-tabs>

    <iron-pages selected="{{selected}}">
      <div>Page 1</div>
      <div>Page 2</div>
      <div>Page 3</div>
    </iron-pages>

To use links in tabs, add `link` attribute to `paper-tab` and put an `<a>`
element in `paper-tab` with a `tabindex` of -1.

Example:

<pre><code>
&lt;style is="custom-style">
  .link {
    &#64;apply --layout-horizontal;
    &#64;apply --layout-center-center;
  }
&lt;/style>

&lt;paper-tabs selected="0">
  &lt;paper-tab link>
    &lt;a href="#link1" class="link" tabindex="-1">TAB ONE&lt;/a>
  &lt;/paper-tab>
  &lt;paper-tab link>
    &lt;a href="#link2" class="link" tabindex="-1">TAB TWO&lt;/a>
  &lt;/paper-tab>
  &lt;paper-tab link>
    &lt;a href="#link3" class="link" tabindex="-1">TAB THREE&lt;/a>
  &lt;/paper-tab>
&lt;/paper-tabs>
</code></pre>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-tabs-selection-bar-color` | Color for the selection bar | `--paper-yellow-a100`
`--paper-tabs-selection-bar` | Mixin applied to the selection bar | `{}`
`--paper-tabs` | Mixin applied to the tabs | `{}`
`--paper-tabs-content` | Mixin applied to the content container of tabs | `{}`
`--paper-tabs-container` | Mixin applied to the layout container of tabs | `{}`

@demo demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_10__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__["html"]`
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
`,

  is: 'paper-tabs',
  behaviors: [_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_9__["IronResizableBehavior"], _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_8__["IronMenubarBehavior"]],

  properties: {
    /**
     * If true, ink ripple effect is disabled. When this property is changed,
     * all descendant `<paper-tab>` elements have their `noink` property
     * changed to the new value as well.
     */
    noink: {type: Boolean, value: false, observer: '_noinkChanged'},

    /**
     * If true, the bottom bar to indicate the selected tab will not be shown.
     */
    noBar: {type: Boolean, value: false},

    /**
     * If true, the slide effect for the bottom bar is disabled.
     */
    noSlide: {type: Boolean, value: false},

    /**
     * If true, tabs are scrollable and the tab width is based on the label
     * width.
     */
    scrollable: {type: Boolean, value: false},

    /**
     * If true, tabs expand to fit their container. This currently only applies
     * when scrollable is true.
     */
    fitContainer: {type: Boolean, value: false},

    /**
     * If true, dragging on the tabs to scroll is disabled.
     */
    disableDrag: {type: Boolean, value: false},

    /**
     * If true, scroll buttons (left/right arrow) will be hidden for scrollable
     * tabs.
     */
    hideScrollButtons: {type: Boolean, value: false},

    /**
     * If true, the tabs are aligned to bottom (the selection bar appears at the
     * top).
     */
    alignBottom: {type: Boolean, value: false},

    selectable: {type: String, value: 'paper-tab'},

    /**
     * If true, tabs are automatically selected when focused using the
     * keyboard.
     */
    autoselect: {type: Boolean, value: false},

    /**
     * The delay (in milliseconds) between when the user stops interacting
     * with the tabs through the keyboard and when the focused item is
     * automatically selected (if `autoselect` is true).
     */
    autoselectDelay: {type: Number, value: 0},

    _step: {type: Number, value: 10},

    _holdDelay: {type: Number, value: 1},

    _leftHidden: {type: Boolean, value: false},

    _rightHidden: {type: Boolean, value: false},

    _previousTab: {type: Object}
  },

  /** @private */
  hostAttributes: {role: 'tablist'},

  listeners: {
    'iron-resize': '_onTabSizingChanged',
    'iron-items-changed': '_onTabSizingChanged',
    'iron-select': '_onIronSelect',
    'iron-deselect': '_onIronDeselect'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {'left:keyup right:keyup': '_onArrowKeyup'},

  created: function() {
    this._holdJob = null;
    this._pendingActivationItem = undefined;
    this._pendingActivationTimeout = undefined;
    this._bindDelayedActivationHandler =
        this._delayedActivationHandler.bind(this);
    this.addEventListener('blur', this._onBlurCapture.bind(this), true);
  },

  ready: function() {
    this.setScrollDirection('y', this.$.tabsContainer);
  },

  detached: function() {
    this._cancelPendingActivation();
  },

  _noinkChanged: function(noink) {
    var childTabs = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_11__["dom"])(this).querySelectorAll('paper-tab');
    childTabs.forEach(
        noink ? this._setNoinkAttribute : this._removeNoinkAttribute);
  },

  _setNoinkAttribute: function(element) {
    element.setAttribute('noink', '');
  },

  _removeNoinkAttribute: function(element) {
    element.removeAttribute('noink');
  },

  _computeScrollButtonClass: function(
      hideThisButton, scrollable, hideScrollButtons) {
    if (!scrollable || hideScrollButtons) {
      return 'hidden';
    }

    if (hideThisButton) {
      return 'not-visible';
    }

    return '';
  },

  _computeTabsContentClass: function(scrollable, fitContainer) {
    return scrollable ? 'scrollable' + (fitContainer ? ' fit-container' : '') :
                        ' fit-container';
  },

  _computeSelectionBarClass: function(noBar, alignBottom) {
    if (noBar) {
      return 'hidden';
    } else if (alignBottom) {
      return 'align-bottom';
    }

    return '';
  },

  // TODO(cdata): Add `track` response back in when gesture lands.

  _onTabSizingChanged: function() {
    this.debounce('_onTabSizingChanged', function() {
      this._scroll();
      this._tabChanged(this.selectedItem);
    }, 10);
  },

  _onIronSelect: function(event) {
    this._tabChanged(event.detail.item, this._previousTab);
    this._previousTab = event.detail.item;
    this.cancelDebouncer('tab-changed');
  },

  _onIronDeselect: function(event) {
    this.debounce('tab-changed', function() {
      this._tabChanged(null, this._previousTab);
      this._previousTab = null;
      // See polymer/polymer#1305
    }, 1);
  },

  _activateHandler: function() {
    // Cancel item activations scheduled by keyboard events when any other
    // action causes an item to be activated (e.g. clicks).
    this._cancelPendingActivation();

    _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_7__["IronMenuBehaviorImpl"]._activateHandler.apply(this, arguments);
  },

  /**
   * Activates an item after a delay (in milliseconds).
   */
  _scheduleActivation: function(item, delay) {
    this._pendingActivationItem = item;
    this._pendingActivationTimeout =
        this.async(this._bindDelayedActivationHandler, delay);
  },

  /**
   * Activates the last item given to `_scheduleActivation`.
   */
  _delayedActivationHandler: function() {
    var item = this._pendingActivationItem;
    this._pendingActivationItem = undefined;
    this._pendingActivationTimeout = undefined;
    item.fire(this.activateEvent, null, {bubbles: true, cancelable: true});
  },

  /**
   * Cancels a previously scheduled item activation made with
   * `_scheduleActivation`.
   */
  _cancelPendingActivation: function() {
    if (this._pendingActivationTimeout !== undefined) {
      this.cancelAsync(this._pendingActivationTimeout);
      this._pendingActivationItem = undefined;
      this._pendingActivationTimeout = undefined;
    }
  },

  _onArrowKeyup: function(event) {
    if (this.autoselect) {
      this._scheduleActivation(this.focusedItem, this.autoselectDelay);
    }
  },

  _onBlurCapture: function(event) {
    // Cancel a scheduled item activation (if any) when that item is
    // blurred.
    if (event.target === this._pendingActivationItem) {
      this._cancelPendingActivation();
    }
  },

  get _tabContainerScrollSize() {
    return Math.max(
        0, this.$.tabsContainer.scrollWidth - this.$.tabsContainer.offsetWidth);
  },

  _scroll: function(e, detail) {
    if (!this.scrollable) {
      return;
    }

    var ddx = (detail && -detail.ddx) || 0;
    this._affectScroll(ddx);
  },

  _down: function(e) {
    // go one beat async to defeat IronMenuBehavior
    // autorefocus-on-no-selection timeout
    this.async(function() {
      if (this._defaultFocusAsync) {
        this.cancelAsync(this._defaultFocusAsync);
        this._defaultFocusAsync = null;
      }
    }, 1);
  },

  _affectScroll: function(dx) {
    this.$.tabsContainer.scrollLeft += dx;

    var scrollLeft = this.$.tabsContainer.scrollLeft;

    this._leftHidden = scrollLeft === 0;
    this._rightHidden = scrollLeft === this._tabContainerScrollSize;
  },

  _onLeftScrollButtonDown: function() {
    this._scrollToLeft();
    this._holdJob = setInterval(this._scrollToLeft.bind(this), this._holdDelay);
  },

  _onRightScrollButtonDown: function() {
    this._scrollToRight();
    this._holdJob =
        setInterval(this._scrollToRight.bind(this), this._holdDelay);
  },

  _onScrollButtonUp: function() {
    clearInterval(this._holdJob);
    this._holdJob = null;
  },

  _scrollToLeft: function() {
    this._affectScroll(-this._step);
  },

  _scrollToRight: function() {
    this._affectScroll(this._step);
  },

  _tabChanged: function(tab, old) {
    if (!tab) {
      // Remove the bar without animation.
      this.$.selectionBar.classList.remove('expand');
      this.$.selectionBar.classList.remove('contract');
      this._positionBar(0, 0);
      return;
    }

    var r = this.$.tabsContent.getBoundingClientRect();
    var w = r.width;
    var tabRect = tab.getBoundingClientRect();
    var tabOffsetLeft = tabRect.left - r.left;

    this._pos = {
      width: this._calcPercent(tabRect.width, w),
      left: this._calcPercent(tabOffsetLeft, w)
    };

    if (this.noSlide || old == null) {
      // Position the bar without animation.
      this.$.selectionBar.classList.remove('expand');
      this.$.selectionBar.classList.remove('contract');
      this._positionBar(this._pos.width, this._pos.left);
      return;
    }

    var oldRect = old.getBoundingClientRect();
    var oldIndex = this.items.indexOf(old);
    var index = this.items.indexOf(tab);
    var m = 5;

    // bar animation: expand
    this.$.selectionBar.classList.add('expand');

    var moveRight = oldIndex < index;
    var isRTL = this._isRTL;
    if (isRTL) {
      moveRight = !moveRight;
    }

    if (moveRight) {
      this._positionBar(
          this._calcPercent(tabRect.left + tabRect.width - oldRect.left, w) - m,
          this._left);
    } else {
      this._positionBar(
          this._calcPercent(oldRect.left + oldRect.width - tabRect.left, w) - m,
          this._calcPercent(tabOffsetLeft, w) + m);
    }

    if (this.scrollable) {
      this._scrollToSelectedIfNeeded(tabRect.width, tabOffsetLeft);
    }
  },

  _scrollToSelectedIfNeeded: function(tabWidth, tabOffsetLeft) {
    var l = tabOffsetLeft - this.$.tabsContainer.scrollLeft;
    if (l < 0) {
      this.$.tabsContainer.scrollLeft += l;
    } else {
      l += (tabWidth - this.$.tabsContainer.offsetWidth);
      if (l > 0) {
        this.$.tabsContainer.scrollLeft += l;
      }
    }
  },

  _calcPercent: function(w, w0) {
    return 100 * w / w0;
  },

  _positionBar: function(width, left) {
    width = width || 0;
    left = left || 0;

    this._width = width;
    this._left = left;
    this.transform(
        'translateX(' + left + '%) scaleX(' + (width / 100) + ')',
        this.$.selectionBar);
  },

  _onBarTransitionEnd: function(e) {
    var cl = this.$.selectionBar.classList;
    // bar animation: expand -> contract
    if (cl.contains('expand')) {
      cl.remove('expand');
      cl.add('contract');
      this._positionBar(this._pos.width, this._pos.left);
      // bar animation done
    } else if (cl.contains('contract')) {
      cl.remove('contract');
    }
  }
});


/***/ }),

/***/ "./public/node_modules/@ucd-lib/cork-toggle-panel/cork-toggle-panel.html":
/*!*******************************************************************************!*\
  !*** ./public/node_modules/@ucd-lib/cork-toggle-panel/cork-toggle-panel.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  :host {\n    display: block;\n  }\n\n  #label {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    @apply --cork-toggle-panel-label;\n  }\n\n  #content {\n    overflow: hidden;\n    height: 0;\n    transition: height 250ms ease-out;\n    @apply --cork-toggle-panel-content;\n  }\n\n  iron-icon {\n    color: var(--cork-drop-down-arrow-color, #912046);\n    transform: rotateX(0);\n    transition: transform 250ms ease-out;\n  }\n\n  iron-icon[closed] {\n    transform: rotate(-90deg);\n  }\n\n</style>\n\n<div id=\"label\" on-click=\"toggle\">\n  <div style=\"flex:1\">[[label]]</div>\n  <iron-icon icon=\"arrow-drop-down\" closed$=\"[[!opened]]\"></iron-icon>\n</div>\n\n<div id=\"content\">\n  <slot></slot>\n</div>";

/***/ }),

/***/ "./public/node_modules/@ucd-lib/cork-toggle-panel/cork-toggle-panel.js":
/*!*****************************************************************************!*\
  !*** ./public/node_modules/@ucd-lib/cork-toggle-panel/cork-toggle-panel.js ***!
  \*****************************************************************************/
/*! exports provided: CorkTogglePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorkTogglePanel", function() { return CorkTogglePanel; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./public/node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_iron_icons_iron_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-icons/iron-icons */ "./public/node_modules/@polymer/iron-icons/iron-icons.js");
/* harmony import */ var _cork_toggle_panel_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cork-toggle-panel.html */ "./public/node_modules/@ucd-lib/cork-toggle-panel/cork-toggle-panel.html");
/* harmony import */ var _cork_toggle_panel_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cork_toggle_panel_html__WEBPACK_IMPORTED_MODULE_3__);






class CorkTogglePanel extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {

  static get properties() {
    return {
      opened: {
        type: Boolean,
        value: false,
        notify : true
      },
      label: {
        type : String,
        value : ''
      }
    };
  }

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _cork_toggle_panel_html__WEBPACK_IMPORTED_MODULE_3___default.a;
    return tag;
  }

  open() {
    var h = 5;
    for( var i = 0; i < this.children.length; i++ ) {
      h += this.children[i].offsetHeight;
    }
    this.$.content.style.height = h+'px';
    this.opened = true;
  }

  close() {
    this.$.content.style.height = '0px';
    this.opened = false;
  }

  toggle() {
    if( this.opened ) this.close();
    else this.open();
  }

}

customElements.define('cork-toggle-panel', CorkTogglePanel);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2ZvbnQtcm9ib3RvL3JvYm90by5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tYTExeS1hbm5vdW5jZXIvaXJvbi1hMTF5LWFubm91bmNlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yL2lyb24tY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWlucHV0L2lyb24taW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWxpc3QvaXJvbi1saXN0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1tZW51LWJlaGF2aW9yL2lyb24tbWVudS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tbWVudS1iZWhhdmlvci9pcm9uLW1lbnViYXItYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLXNjcm9sbC10YXJnZXQtYmVoYXZpb3IvaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1zZWxlY3Rvci9pcm9uLW11bHRpLXNlbGVjdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1hZGRvbi1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYnMtaWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL25vZGVfbW9kdWxlcy9AdWNkLWxpYi9jb3JrLXRvZ2dsZS1wYW5lbC9jb3JrLXRvZ2dsZS1wYW5lbC5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9ub2RlX21vZHVsZXMvQHVjZC1saWIvY29yay10b2dnbGUtcGFuZWwvY29yay10b2dnbGUtcGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRDOztBQUVzQjtBQUNOOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUssR0FBRyxnQkFBZ0I7O0FBRXhCOztBQUVBO0FBQ0E7QUFDQTtBQUNPLDBCQUEwQix5RkFBTztBQUN4QyxhQUFhLDJFQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4QkFBOEI7O0FBRXpDLFlBQVk7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFD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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUcsY0FBYztBQUNqQixHQUFHLGNBQWM7QUFDakIsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxNQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlGQUFTO0FBQ1QsYUFBYSw0RUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxPQUFPLGNBQWMsZUFBZSxtQkFBbUIsY0FBYzs7QUFFaEg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFlBQVk7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0QkFBNEI7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2QkFBNkI7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZUFBZTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0Qjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNEJBQTRCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksK0ZBQVc7QUFDZixJQUFJLGlIQUFxQjtBQUN6QixJQUFJLDRIQUF3QjtBQUM1QixJQUFJLGdIQUE2QjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0ZBQUcsQ0FBQyxzRkFBRztBQUNsQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QixhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQUssR0FBRyxrRkFBSyxLQUFLLHdGQUFPO0FBQzdCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNM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QTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzRkFBRztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNGQUFHO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0NBQXdDOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcE9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRTRDO0FBQ0o7O0FBRW9CO0FBQzVELGlCQUFpQiwyRUFBSTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL2xCRCxvQ0FBb0MscUJBQXFCLEtBQUssY0FBYyxzQkFBc0Isb0JBQW9CLDBCQUEwQix1Q0FBdUMsS0FBSyxnQkFBZ0IsdUJBQXVCLGdCQUFnQix3Q0FBd0MseUNBQXlDLEtBQUssaUJBQWlCLHdEQUF3RCw0QkFBNEIsMkNBQTJDLEtBQUsseUJBQXlCLGdDQUFnQyxLQUFLLHNPOzs7Ozs7Ozs7Ozs7QUNBNWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStEO0FBQzFCO0FBQ0U7O0FBRVE7O0FBRXhDLDhCQUE4QiwrRUFBYzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0RCIsImZpbGUiOiJ2ZW5kb3JzfnBhZ2Utc2VhcmNoLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuXG5leHBvcnQge307IC8vIGVuc3VyZSB0aGlzIGZpbGUgY2FuIG9ubHkgYmUgcGFyc2VkIGFzIGEgbW9kdWxlLlxuXG4vLyBHaXZlIHRoZSB1c2VyIHRoZSBjaG9pY2UgdG8gb3B0IG91dCBvZiBmb250IGxvYWRpbmcuXG5pZiAoIXdpbmRvdy5wb2x5bWVyU2tpcExvYWRpbmdGb250Um9ib3RvKSB7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICBsaW5rLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gIGxpbmsuaHJlZiA9XG4gICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytNb25vOjQwMCw3MDB8Um9ib3RvOjQwMCwzMDAsMzAwaXRhbGljLDQwMGl0YWxpYyw1MDAsNTAwaXRhbGljLDcwMCw3MDBpdGFsaWMnO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbmBpcm9uLWExMXktYW5ub3VuY2VyYCBpcyBhIHNpbmdsZXRvbiBlbGVtZW50IHRoYXQgaXMgaW50ZW5kZWQgdG8gYWRkIGExMXlcbnRvIGZlYXR1cmVzIHRoYXQgcmVxdWlyZSBvbi1kZW1hbmQgYW5ub3VuY2VtZW50IGZyb20gc2NyZWVuIHJlYWRlcnMuIEluXG5vcmRlciB0byBtYWtlIHVzZSBvZiB0aGUgYW5ub3VuY2VyLCBpdCBpcyBiZXN0IHRvIHJlcXVlc3QgaXRzIGF2YWlsYWJpbGl0eVxuaW4gdGhlIGFubm91bmNpbmcgZWxlbWVudC5cblxuRXhhbXBsZTpcblxuICAgIFBvbHltZXIoe1xuXG4gICAgICBpczogJ3gtY2hhdHR5JyxcblxuICAgICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgY3JlYXRlIHRoZSBzaW5nbGV0b24gZWxlbWVudCBpZiBpdCBoYXMgbm90XG4gICAgICAgIC8vIGJlZW4gY3JlYXRlZCB5ZXQ6XG4gICAgICAgIFBvbHltZXIuSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG5BZnRlciB0aGUgYGlyb24tYTExeS1hbm5vdW5jZXJgIGhhcyBiZWVuIG1hZGUgYXZhaWxhYmxlLCBlbGVtZW50cyBjYW5cbm1ha2UgYW5ub3VuY2VzIGJ5IGZpcmluZyBidWJibGluZyBgaXJvbi1hbm5vdW5jZWAgZXZlbnRzLlxuXG5FeGFtcGxlOlxuXG4gICAgdGhpcy5maXJlKCdpcm9uLWFubm91bmNlJywge1xuICAgICAgdGV4dDogJ1RoaXMgaXMgYW4gYW5ub3VuY2VtZW50ISdcbiAgICB9LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG5cbk5vdGU6IGFubm91bmNlbWVudHMgYXJlIG9ubHkgYXVkaWJsZSBpZiB5b3UgaGF2ZSBhIHNjcmVlbiByZWFkZXIgZW5hYmxlZC5cblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cbmV4cG9ydCBjb25zdCBJcm9uQTExeUFubm91bmNlciA9IFBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgY2xpcDogcmVjdCgwcHgsMHB4LDBweCwwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdiBhcmlhLWxpdmUkPVwiW1ttb2RlXV1cIj5bW190ZXh0XV08L2Rpdj5cbmAsXG5cbiAgaXM6ICdpcm9uLWExMXktYW5ub3VuY2VyJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgb2YgbW9kZSBpcyB1c2VkIHRvIHNldCB0aGUgYGFyaWEtbGl2ZWAgYXR0cmlidXRlXG4gICAgICogZm9yIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBhbm5vdW5jZWQuIFZhbGlkIHZhbHVlcyBhcmU6IGBvZmZgLFxuICAgICAqIGBwb2xpdGVgIGFuZCBgYXNzZXJ0aXZlYC5cbiAgICAgKi9cbiAgICBtb2RlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3BvbGl0ZSd9LFxuXG4gICAgX3RleHQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ31cbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIUlyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlKSB7XG4gICAgICBJcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnaXJvbi1hbm5vdW5jZScsIHRoaXMuX29uSXJvbkFubm91bmNlLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYXVzZSBhIHRleHQgc3RyaW5nIHRvIGJlIGFubm91bmNlZCBieSBzY3JlZW4gcmVhZGVycy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHRleHQgdGhhdCBzaG91bGQgYmUgYW5ub3VuY2VkLlxuICAgKi9cbiAgYW5ub3VuY2U6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB0aGlzLl90ZXh0ID0gJyc7XG4gICAgdGhpcy5hc3luYyhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICAgIH0sIDEwMCk7XG4gIH0sXG5cbiAgX29uSXJvbkFubm91bmNlOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLnRleHQpIHtcbiAgICAgIHRoaXMuYW5ub3VuY2UoZXZlbnQuZGV0YWlsLnRleHQpO1xuICAgIH1cbiAgfVxufSk7XG5cbklyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlID0gbnVsbDtcblxuSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIUlyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlKSB7XG4gICAgSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpcm9uLWExMXktYW5ub3VuY2VyJyk7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKElyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlKTtcbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblZhbGlkYXRhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogVXNlIGBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGEgY3VzdG9tIGVsZW1lbnQgdGhhdCBoYXMgYVxuICogYGNoZWNrZWRgIHByb3BlcnR5LCB3aGljaCBjYW4gYmUgdXNlZCBmb3IgdmFsaWRhdGlvbiBpZiB0aGUgZWxlbWVudCBpcyBhbHNvXG4gKiBgcmVxdWlyZWRgLiBFbGVtZW50IGluc3RhbmNlcyBpbXBsZW1lbnRpbmcgdGhpcyBiZWhhdmlvciB3aWxsIGFsc28gYmVcbiAqIHJlZ2lzdGVyZWQgZm9yIHVzZSBpbiBhbiBgaXJvbi1mb3JtYCBlbGVtZW50LlxuICpcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICogQHBvbHltZXJCZWhhdmlvciBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgaXJvbi1jaGFuZ2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgc3RhdGUsIGB0cnVlYCBpcyBjaGVja2VkIGFuZCBgZmFsc2VgIGlzIHVuY2hlY2tlZC5cbiAgICAgKi9cbiAgICBjaGVja2VkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfY2hlY2tlZENoYW5nZWQnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBidXR0b24gdG9nZ2xlcyB0aGUgYWN0aXZlIHN0YXRlIHdpdGggZWFjaCB0YXAgb3IgcHJlc3NcbiAgICAgKiBvZiB0aGUgc3BhY2ViYXIuXG4gICAgICovXG4gICAgdG9nZ2xlczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyogT3ZlcnJpZGVuIGZyb20gSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IgKi9cbiAgICB2YWx1ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdvbicsIG9ic2VydmVyOiAnX3ZhbHVlQ2hhbmdlZCd9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19yZXF1aXJlZENoYW5nZWQocmVxdWlyZWQpJ10sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlZCBieSBgaXJvbi1mb3JtYCB0byBoYW5kbGUgdGhlIGNhc2UgdGhhdCBhbiBlbGVtZW50IHdpdGggdGhpcyBiZWhhdmlvclxuICAgIC8vIGRvZXNuJ3QgaGF2ZSBhIHJvbGUgb2YgJ2NoZWNrYm94JyBvciAncmFkaW8nLCBidXQgc2hvdWxkIHN0aWxsIG9ubHkgYmVcbiAgICAvLyBpbmNsdWRlZCB3aGVuIHRoZSBmb3JtIGlzIHNlcmlhbGl6ZWQgaWYgYHRoaXMuY2hlY2tlZCA9PT0gdHJ1ZWAuXG4gICAgdGhpcy5faGFzSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IgPSB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIGFuZCBub3QgY2hlY2tlZCwgYW5kIHRydWVcbiAgICogb3RoZXJ3aXNlLlxuICAgKiBAcGFyYW0geyo9fSBfdmFsdWUgSWdub3JlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBgcmVxdWlyZWRgIGlzIGZhbHNlIG9yIGlmIGBjaGVja2VkYCBpcyB0cnVlLlxuICAgKi9cbiAgX2dldFZhbGlkaXR5OiBmdW5jdGlvbihfdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5yZXF1aXJlZCB8fCB0aGlzLmNoZWNrZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgYXJpYS1yZXF1aXJlZCBsYWJlbCB3aGVuIGByZXF1aXJlZGAgaXMgY2hhbmdlZC5cbiAgICovXG4gIF9yZXF1aXJlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1yZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXJlcXVpcmVkJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBGaXJlIGBpcm9uLWNoYW5nZWRgIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcy5cbiAgICovXG4gIF9jaGVja2VkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5maXJlKCdpcm9uLWNoYW5nZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNldCB2YWx1ZSB0byAnb24nIGlmIGl0IGlzIHNldCB0byBgdW5kZWZpbmVkYC5cbiAgICovXG4gIF92YWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQgfHwgdGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52YWx1ZSA9ICdvbic7XG4gICAgfVxuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yID0gW1xuICBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcixcbiAgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3IsXG4gIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbFxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqXG4gIElyb25Gb3JtRWxlbWVudEJlaGF2aW9yIGFkZHMgYSBgbmFtZWAsIGB2YWx1ZWAgYW5kIGByZXF1aXJlZGAgcHJvcGVydGllcyB0b1xuICBhIGN1c3RvbSBlbGVtZW50LiBJdCBtb3N0bHkgZXhpc3RzIGZvciBiYWNrY29tcGF0aWJpbGl0eSB3aXRoIFBvbHltZXIgMS54LCBhbmRcbiAgaXMgcHJvYmFibHkgbm90IHNvbWV0aGluZyB5b3Ugd2FudCB0byB1c2UuXG5cbiAgQGRlbW8gZGVtby9pbmRleC5odG1sXG4gIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25Gb3JtRWxlbWVudEJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICovXG4gICAgbmFtZToge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKi9cbiAgICB2YWx1ZToge25vdGlmeTogdHJ1ZSwgdHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIG1hcmsgdGhlIGlucHV0IGFzIHJlcXVpcmVkLiBJZiB1c2VkIGluIGEgZm9ybSwgYVxuICAgICAqIGN1c3RvbSBlbGVtZW50IHRoYXQgdXNlcyB0aGlzIGJlaGF2aW9yIHNob3VsZCBhbHNvIHVzZVxuICAgICAqIElyb25WYWxpZGF0YWJsZUJlaGF2aW9yIGFuZCBkZWZpbmUgYSBjdXN0b20gdmFsaWRhdGlvbiBtZXRob2QuXG4gICAgICogT3RoZXJ3aXNlLCBhIGByZXF1aXJlZGAgZWxlbWVudCB3aWxsIGFsd2F5cyBiZSBjb25zaWRlcmVkIHZhbGlkLlxuICAgICAqIEl0J3MgYWxzbyBzdHJvbmdseSByZWNvbW1lbmRlZCB0byBwcm92aWRlIGEgdmlzdWFsIHN0eWxlIGZvciB0aGUgZWxlbWVudFxuICAgICAqIHdoZW4gaXRzIHZhbHVlIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuICB9LFxuXG4gIC8vIEVtcHR5IGltcGxlbWVudGF0aW9ucyBmb3IgYmFja2NvbXBhdGliaWxpdHkuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHt9LFxuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7fVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQTExeUFubm91bmNlcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWFubm91bmNlci9pcm9uLWExMXktYW5ub3VuY2VyLmpzJztcbmltcG9ydCB7SXJvblZhbGlkYXRhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuYDxpcm9uLWlucHV0PmAgaXMgYSB3cmFwcGVyIHRvIGEgbmF0aXZlIGA8aW5wdXQ+YCBlbGVtZW50LCB0aGF0IGFkZHMgdHdvLXdheVxuYmluZGluZyBhbmQgcHJldmVudGlvbiBvZiBpbnZhbGlkIGlucHV0LiBUbyB1c2UgaXQsIHlvdSBtdXN0IGRpc3RyaWJ1dGUgYSBuYXRpdmVcbmA8aW5wdXQ+YCB5b3Vyc2VsZi4gWW91IGNhbiBjb250aW51ZSB0byB1c2UgdGhlIG5hdGl2ZSBgaW5wdXRgIGFzIHlvdSB3b3VsZFxubm9ybWFsbHk6XG5cbiAgICA8aXJvbi1pbnB1dD5cbiAgICAgIDxpbnB1dD5cbiAgICA8L2lyb24taW5wdXQ+XG5cbiAgICA8aXJvbi1pbnB1dD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBkaXNhYmxlZD5cbiAgICA8L2lyb24taW5wdXQ+XG5cbiMjIyBUd28td2F5IGJpbmRpbmdcblxuQnkgZGVmYXVsdCB5b3UgY2FuIG9ubHkgZ2V0IG5vdGlmaWVkIG9mIGNoYW5nZXMgdG8gYSBuYXRpdmUgYDxpbnB1dD5gJ3MgYHZhbHVlYFxuZHVlIHRvIHVzZXIgaW5wdXQ6XG5cbiAgICA8aW5wdXQgdmFsdWU9XCJ7e215VmFsdWU6OmlucHV0fX1cIj5cblxuVGhpcyBtZWFucyB0aGF0IGlmIHlvdSBpbXBlcmF0aXZlbHkgc2V0IHRoZSB2YWx1ZSAoaS5lLiBgc29tZU5hdGl2ZUlucHV0LnZhbHVlID1cbidmb28nYCksIG5vIGV2ZW50cyB3aWxsIGJlIGZpcmVkIGFuZCB0aGlzIGNoYW5nZSBjYW5ub3QgYmUgb2JzZXJ2ZWQuXG5cbmBpcm9uLWlucHV0YCBhZGRzIHRoZSBgYmluZC12YWx1ZWAgcHJvcGVydHkgdGhhdCBtaXJyb3JzIHRoZSBuYXRpdmUgYGlucHV0YCdzXG4nYHZhbHVlYCBwcm9wZXJ0eTsgdGhpcyBwcm9wZXJ0eSBjYW4gYmUgdXNlZCBmb3IgdHdvLXdheSBkYXRhIGJpbmRpbmcuXG5gYmluZC12YWx1ZWAgd2lsbCBub3RpZnkgaWYgaXQgaXMgY2hhbmdlZCBlaXRoZXIgYnkgdXNlciBpbnB1dCBvciBieSBzY3JpcHQuXG5cbiAgICA8aXJvbi1pbnB1dCBiaW5kLXZhbHVlPVwie3tteVZhbHVlfX1cIj5cbiAgICAgIDxpbnB1dD5cbiAgICA8L2lyb24taW5wdXQ+XG5cbk5vdGU6IHRoaXMgbWVhbnMgdGhhdCBpZiB5b3Ugd2FudCB0byBpbXBlcmF0aXZlbHkgc2V0IHRoZSBuYXRpdmUgYGlucHV0YCdzLCB5b3Vcbl9tdXN0XyBzZXQgYGJpbmQtdmFsdWVgIGluc3RlYWQsIHNvIHRoYXQgdGhlIHdyYXBwZXIgYGlyb24taW5wdXRgIGNhbiBiZVxubm90aWZpZWQuXG5cbiMjIyBWYWxpZGF0aW9uXG5cbmBpcm9uLWlucHV0YCB1c2VzIHRoZSBuYXRpdmUgYGlucHV0YCdzIHZhbGlkYXRpb24uIEZvciBzaW1wbGljaXR5LCBgaXJvbi1pbnB1dGBcbmhhcyBhIGB2YWxpZGF0ZSgpYCBtZXRob2QgKHdoaWNoIGludGVybmFsbHkganVzdCBjaGVja3MgdGhlIGRpc3RyaWJ1dGVkXG5gaW5wdXRgJ3MgdmFsaWRpdHkpLCB3aGljaCBzZXRzIGFuIGBpbnZhbGlkYCBhdHRyaWJ1dGUgdGhhdCBjYW4gYWxzbyBiZSB1c2VkIGZvclxuc3R5bGluZy5cblxuVG8gdmFsaWRhdGUgYXV0b21hdGljYWxseSBhcyB5b3UgdHlwZSwgeW91IGNhbiB1c2UgdGhlIGBhdXRvLXZhbGlkYXRlYFxuYXR0cmlidXRlLlxuXG5gaXJvbi1pbnB1dGAgYWxzbyBmaXJlcyBhbiBgaXJvbi1pbnB1dC12YWxpZGF0ZWAgZXZlbnQgYWZ0ZXIgYHZhbGlkYXRlKClgIGlzXG5jYWxsZWQuIFlvdSBjYW4gdXNlIGl0IHRvIGltcGxlbWVudCBhIGN1c3RvbSB2YWxpZGF0b3I6XG5cbiAgICB2YXIgQ2F0c09ubHlWYWxpZGF0b3IgPSB7XG4gICAgICB2YWxpZGF0ZTogZnVuY3Rpb24oaXJvbklucHV0KSB7XG4gICAgICAgIHZhciB2YWxpZCA9ICFpcm9uSW5wdXQuYmluZFZhbHVlIHx8IGlyb25JbnB1dC5iaW5kVmFsdWUgPT09ICdjYXQnO1xuICAgICAgICBpcm9uSW5wdXQuaW52YWxpZCA9ICF2YWxpZDtcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgfVxuICAgIH1cbiAgICBpcm9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1pbnB1dC12YWxpZGF0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgQ2F0c09ubHkudmFsaWRhdGUoaW5wdXQyKTtcbiAgICB9KTtcblxuWW91IGNhbiBhbHNvIHVzZSBhbiBlbGVtZW50IGltcGxlbWVudGluZyBhblxuW2BJcm9uVmFsaWRhdG9yQmVoYXZpb3JgXSgvZWxlbWVudC9Qb2x5bWVyRWxlbWVudHMvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvcikuXG5UaGlzIGV4YW1wbGUgY2FuIGFsc28gYmUgZm91bmQgaW4gdGhlIGRlbW8gZm9yIHRoaXMgZWxlbWVudDpcblxuICAgIDxpcm9uLWlucHV0IHZhbGlkYXRvcj1cImNhdHMtb25seVwiPlxuICAgICAgPGlucHV0PlxuICAgIDwvaXJvbi1pbnB1dD5cblxuIyMjIFByZXZlbnRpbmcgaW52YWxpZCBpbnB1dFxuXG5JdCBtYXkgYmUgZGVzaXJhYmxlIHRvIG9ubHkgYWxsb3cgdXNlcnMgdG8gZW50ZXIgY2VydGFpbiBjaGFyYWN0ZXJzLiBZb3UgY2FuIHVzZVxudGhlIGBhbGxvd2VkLXBhdHRlcm5gIGF0dHJpYnV0ZSB0byBhY2NvbXBsaXNoIHRoaXMuIFRoaXMgZmVhdHVyZSBpcyBzZXBhcmF0ZVxuZnJvbSB2YWxpZGF0aW9uLCBhbmQgYGFsbG93ZWQtcGF0dGVybmAgZG9lcyBub3QgYWZmZWN0IGhvdyB0aGUgaW5wdXQgaXNcbnZhbGlkYXRlZC5cblxuICAgIC8vIE9ubHkgYWxsb3cgdHlwaW5nIGRpZ2l0cywgYnV0IGEgdmFsaWQgaW5wdXQgaGFzIGV4YWN0bHkgNSBkaWdpdHMuXG4gICAgPGlyb24taW5wdXQgYWxsb3dlZC1wYXR0ZXJuPVwiWzAtOV1cIj5cbiAgICAgIDxpbnB1dCBwYXR0ZXJuPVwiXFxkezV9XCI+XG4gICAgPC9pcm9uLWlucHV0PlxuXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPHNsb3QgaWQ9XCJjb250ZW50XCI+PC9zbG90PlxuYCxcblxuICBpczogJ2lyb24taW5wdXQnLFxuICBiZWhhdmlvcnM6IFtJcm9uVmFsaWRhdGFibGVCZWhhdmlvcl0sXG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW5ldmVyIGB2YWxpZGF0ZSgpYCBpcyBjYWxsZWQuXG4gICAqXG4gICAqIEBldmVudCBpcm9uLWlucHV0LXZhbGlkYXRlXG4gICAqL1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIHByb3BlcnR5IGluc3RlYWQgb2YgYHZhbHVlYCBmb3IgdHdvLXdheSBkYXRhIGJpbmRpbmcsIG9yIHRvXG4gICAgICogc2V0IGEgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGlucHV0LiAqKkRvIG5vdCoqIHVzZSB0aGUgZGlzdHJpYnV0ZWRcbiAgICAgKiBpbnB1dCdzIGB2YWx1ZWAgcHJvcGVydHkgdG8gc2V0IGEgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKi9cbiAgICBiaW5kVmFsdWU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ30sXG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlZCBwcm9wZXJ0eSB0aGF0IGVjaG9lcyBgYmluZFZhbHVlYCAobW9zdGx5IHVzZWQgZm9yIFBvbHltZXIgMS4wXG4gICAgICogYmFja2NvbXBhdGliaWxpdHksIGlmIHlvdSB3ZXJlIG9uZS13YXkgYmluZGluZyB0byB0aGUgUG9seW1lciAxLjBcbiAgICAgKiBgaW5wdXQgaXM9XCJpcm9uLWlucHV0XCJgIHZhbHVlIGF0dHJpYnV0ZSkuXG4gICAgICovXG4gICAgdmFsdWU6IHt0eXBlOiBTdHJpbmcsIGNvbXB1dGVkOiAnX2NvbXB1dGVWYWx1ZShiaW5kVmFsdWUpJ30sXG5cbiAgICAvKipcbiAgICAgKiBSZWdleC1saWtlIGxpc3Qgb2YgY2hhcmFjdGVycyBhbGxvd2VkIGFzIGlucHV0OyBhbGwgY2hhcmFjdGVycyBub3QgaW4gdGhlXG4gICAgICogbGlzdCB3aWxsIGJlIHJlamVjdGVkLiBUaGUgcmVjb21tZW5kZWQgZm9ybWF0IHNob3VsZCBiZSBhIGxpc3Qgb2YgYWxsb3dlZFxuICAgICAqIGNoYXJhY3RlcnMsIGZvciBleGFtcGxlLCBgW2EtekEtWjAtOS4rLSE7Ol1gLlxuICAgICAqXG4gICAgICogVGhpcyBwYXR0ZXJuIHJlcHJlc2VudHMgdGhlIGFsbG93ZWQgY2hhcmFjdGVycyBmb3IgdGhlIGZpZWxkOyBhcyB0aGUgdXNlclxuICAgICAqIGlucHV0cyB0ZXh0LCBlYWNoIGluZGl2aWR1YWwgY2hhcmFjdGVyIHdpbGwgYmUgY2hlY2tlZCBhZ2FpbnN0IHRoZVxuICAgICAqIHBhdHRlcm4gKHJhdGhlciB0aGFuIGNoZWNraW5nIHRoZSBlbnRpcmUgdmFsdWUgYXMgYSB3aG9sZSkuIElmIGFcbiAgICAgKiBjaGFyYWN0ZXIgaXMgbm90IGEgbWF0Y2gsIGl0IHdpbGwgYmUgcmVqZWN0ZWQuXG4gICAgICpcbiAgICAgKiBQYXN0ZWQgaW5wdXQgd2lsbCBoYXZlIGVhY2ggY2hhcmFjdGVyIGNoZWNrZWQgaW5kaXZpZHVhbGx5OyBpZiBhbnlcbiAgICAgKiBjaGFyYWN0ZXIgZG9lc24ndCBtYXRjaCBgYWxsb3dlZFBhdHRlcm5gLCB0aGUgZW50aXJlIHBhc3RlZCBzdHJpbmcgd2lsbFxuICAgICAqIGJlIHJlamVjdGVkLlxuICAgICAqXG4gICAgICogTm90ZTogaWYgeW91IHdlcmUgdXNpbmcgYGlyb24taW5wdXRgIGluIDEuMCwgeW91IHdlcmUgYWxzbyByZXF1aXJlZCB0b1xuICAgICAqIHNldCBgcHJldmVudC1pbnZhbGlkLWlucHV0YC4gVGhpcyBpcyBubyBsb25nZXIgbmVlZGVkIGFzIG9mIFBvbHltZXIgMi4wLFxuICAgICAqIGFuZCB3aWxsIGJlIHNldCBhdXRvbWF0aWNhbGx5IGZvciB5b3UgaWYgYW4gYGFsbG93ZWRQYXR0ZXJuYCBpcyBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqL1xuICAgIGFsbG93ZWRQYXR0ZXJuOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGF1dG8tdmFsaWRhdGUgdGhlIGlucHV0IHZhbHVlIGFzIHlvdSB0eXBlLlxuICAgICAqL1xuICAgIGF1dG9WYWxpZGF0ZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmF0aXZlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgX2lucHV0RWxlbWVudDogT2JqZWN0LFxuICB9LFxuXG4gIG9ic2VydmVyczogWydfYmluZFZhbHVlQ2hhbmdlZChiaW5kVmFsdWUsIF9pbnB1dEVsZW1lbnQpJ10sXG4gIGxpc3RlbmVyczogeydpbnB1dCc6ICdfb25JbnB1dCcsICdrZXlwcmVzcyc6ICdfb25LZXlwcmVzcyd9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIElyb25BMTF5QW5ub3VuY2VyLnJlcXVlc3RBdmFpbGFiaWxpdHkoKTtcbiAgICB0aGlzLl9wcmV2aW91c1ZhbGlkSW5wdXQgPSAnJztcbiAgICB0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQgPSBmYWxzZTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGFkZGVkIGF0IGEgbGF0ZXIgdGltZSwgdXBkYXRlIHRoZSBpbnRlcm5hbCByZWZlcmVuY2UuXG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBkb20odGhpcykub2JzZXJ2ZU5vZGVzKGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgIHRoaXMuX2luaXRTbG90dGVkSW5wdXQoKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIGRvbSh0aGlzKS51bm9ic2VydmVOb2Rlcyh0aGlzLl9vYnNlcnZlcik7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgZ2V0IGlucHV0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50O1xuICB9LFxuXG4gIF9pbml0U2xvdHRlZElucHV0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnQgPSB0aGlzLmdldEVmZmVjdGl2ZUNoaWxkcmVuKClbMF07XG5cbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUpIHtcbiAgICAgIHRoaXMuYmluZFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5maXJlKCdpcm9uLWlucHV0LXJlYWR5Jyk7XG4gIH0sXG5cbiAgZ2V0IF9wYXR0ZXJuUmVnRXhwKCkge1xuICAgIHZhciBwYXR0ZXJuO1xuICAgIGlmICh0aGlzLmFsbG93ZWRQYXR0ZXJuKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cCh0aGlzLmFsbG93ZWRQYXR0ZXJuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoICh0aGlzLmlucHV0RWxlbWVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgcGF0dGVybiA9IC9bMC05LixlLV0vO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfSxcblxuICAvKipcbiAgICogQHN1cHByZXNzIHtjaGVja1R5cGVzfVxuICAgKi9cbiAgX2JpbmRWYWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uKGJpbmRWYWx1ZSwgaW5wdXRFbGVtZW50KSB7XG4gICAgLy8gVGhlIG9ic2VydmVyIGNvdWxkIGhhdmUgcnVuIGJlZm9yZSBhdHRhY2hlZCgpIHdoZW4gd2UgaGF2ZSBhY3R1YWxseVxuICAgIC8vIGluaXRpYWxpemVkIHRoaXMgcHJvcGVydHkuXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYmluZFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChiaW5kVmFsdWUgIT09IGlucHV0RWxlbWVudC52YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBiaW5kVmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0b1ZhbGlkYXRlKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gbWFudWFsbHkgbm90aWZ5IGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byBub3RpZnkgdW50aWwgYWZ0ZXIgc2V0dGluZyB2YWx1ZVxuICAgIHRoaXMuZmlyZSgnYmluZC12YWx1ZS1jaGFuZ2VkJywge3ZhbHVlOiBiaW5kVmFsdWV9KTtcbiAgfSxcblxuICBfb25JbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgLy8gTmVlZCB0byB2YWxpZGF0ZSBlYWNoIG9mIHRoZSBjaGFyYWN0ZXJzIHBhc3RlZCBpZiB0aGV5IGhhdmVuJ3RcbiAgICAvLyBiZWVuIHZhbGlkYXRlZCBpbnNpZGUgYF9vbktleXByZXNzYCBhbHJlYWR5LlxuICAgIGlmICh0aGlzLmFsbG93ZWRQYXR0ZXJuICYmICF0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQpIHtcbiAgICAgIHZhciB2YWxpZCA9IHRoaXMuX2NoZWNrUGF0dGVyblZhbGlkaXR5KCk7XG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIHRoaXMuX2Fubm91bmNlSW52YWxpZENoYXJhY3RlcihcbiAgICAgICAgICAgICdJbnZhbGlkIHN0cmluZyBvZiBjaGFyYWN0ZXJzIG5vdCBlbnRlcmVkLicpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IHRoaXMuX3ByZXZpb3VzVmFsaWRJbnB1dDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5iaW5kVmFsdWUgPSB0aGlzLl9wcmV2aW91c1ZhbGlkSW5wdXQgPSB0aGlzLmlucHV0RWxlbWVudC52YWx1ZTtcbiAgICB0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQgPSBmYWxzZTtcbiAgfSxcblxuICBfaXNQcmludGFibGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gV2hhdCBhIGNvbnRyb2wvcHJpbnRhYmxlIGNoYXJhY3RlciBpcyB2YXJpZXMgd2lsZGx5IGJhc2VkIG9uIHRoZSBicm93c2VyLlxuICAgIC8vIC0gbW9zdCBjb250cm9sIGNoYXJhY3RlcnMgKGFycm93cywgYmFja3NwYWNlKSBkbyBub3Qgc2VuZCBhIGBrZXlwcmVzc2BcbiAgICAvLyBldmVudFxuICAgIC8vICAgaW4gQ2hyb21lLCBidXQgdGhlICpkbyogb24gRmlyZWZveFxuICAgIC8vIC0gaW4gRmlyZWZveCwgd2hlbiB0aGV5IGRvIHNlbmQgYSBga2V5cHJlc3NgIGV2ZW50LCBjb250cm9sIGNoYXJzIGhhdmVcbiAgICAvLyAgIGEgY2hhckNvZGUgPSAwLCBrZXlDb2RlID0geHggKGZvciBleC4gNDAgZm9yIGRvd24gYXJyb3cpXG4gICAgLy8gLSBwcmludGFibGUgY2hhcmFjdGVycyBhbHdheXMgc2VuZCBhIGtleXByZXNzIGV2ZW50LlxuICAgIC8vIC0gaW4gRmlyZWZveCwgcHJpbnRhYmxlIGNoYXJzIGFsd2F5cyBoYXZlIGEga2V5Q29kZSA9IDAuIEluIENocm9tZSwgdGhlXG4gICAgLy8ga2V5Q29kZVxuICAgIC8vICAgYWx3YXlzIG1hdGNoZXMgdGhlIGNoYXJDb2RlLlxuICAgIC8vIE5vbmUgb2YgdGhpcyBtYWtlcyBhbnkgc2Vuc2UuXG5cbiAgICAvLyBGb3IgdGhlc2Uga2V5cywgQVNDSUkgY29kZSA9PSBicm93c2VyIGtleWNvZGUuXG4gICAgdmFyIGFueU5vblByaW50YWJsZSA9IChldmVudC5rZXlDb2RlID09IDgpIHx8ICAvLyBiYWNrc3BhY2VcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gOSkgfHwgICAgICAgICAgICAgICAgICAgIC8vIHRhYlxuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAxMykgfHwgICAgICAgICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMjcpOyAgICAgICAgICAgICAgICAgICAgIC8vIGVzY2FwZVxuXG4gICAgLy8gRm9yIHRoZXNlIGtleXMsIG1ha2Ugc3VyZSBpdCdzIGEgYnJvd3NlciBrZXljb2RlIGFuZCBub3QgYW4gQVNDSUkgY29kZS5cbiAgICB2YXIgbW96Tm9uUHJpbnRhYmxlID0gKGV2ZW50LmtleUNvZGUgPT0gMTkpIHx8ICAvLyBwYXVzZVxuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAyMCkgfHwgICAgICAgICAgICAgICAgICAgIC8vIGNhcHMgbG9ja1xuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSA0NSkgfHwgICAgICAgICAgICAgICAgICAgIC8vIGluc2VydFxuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSA0NikgfHwgICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZVxuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAxNDQpIHx8ICAgICAgICAgICAgICAgICAgIC8vIG51bSBsb2NrXG4gICAgICAgIChldmVudC5rZXlDb2RlID09IDE0NSkgfHwgICAgICAgICAgICAgICAgICAgLy8gc2Nyb2xsIGxvY2tcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPiAzMiAmJlxuICAgICAgICAgZXZlbnQua2V5Q29kZSA8IDQxKSB8fCAgLy8gcGFnZSB1cC9kb3duLCBlbmQsIGhvbWUsIGFycm93c1xuICAgICAgICAoZXZlbnQua2V5Q29kZSA+IDExMSAmJiBldmVudC5rZXlDb2RlIDwgMTI0KTsgIC8vIGZuIGtleXNcblxuICAgIHJldHVybiAhYW55Tm9uUHJpbnRhYmxlICYmICEoZXZlbnQuY2hhckNvZGUgPT0gMCAmJiBtb3pOb25QcmludGFibGUpO1xuICB9LFxuXG4gIF9vbktleXByZXNzOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5hbGxvd2VkUGF0dGVybiAmJiB0aGlzLmlucHV0RWxlbWVudC50eXBlICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcmVnZXhwID0gdGhpcy5fcGF0dGVyblJlZ0V4cDtcbiAgICBpZiAoIXJlZ2V4cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBzcGVjaWFsIGtleXMgYW5kIGJhY2tzcGFjZVxuICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuYWx0S2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdGhlIHBhdHRlcm4gZWl0aGVyIGhlcmUgb3IgaW4gYF9vbklucHV0YCwgYnV0IG5vdCBpbiBib3RoLlxuICAgIHRoaXMuX3BhdHRlcm5BbHJlYWR5Q2hlY2tlZCA9IHRydWU7XG5cbiAgICB2YXIgdGhpc0NoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmNoYXJDb2RlKTtcbiAgICBpZiAodGhpcy5faXNQcmludGFibGUoZXZlbnQpICYmICFyZWdleHAudGVzdCh0aGlzQ2hhcikpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9hbm5vdW5jZUludmFsaWRDaGFyYWN0ZXIoXG4gICAgICAgICAgJ0ludmFsaWQgY2hhcmFjdGVyICcgKyB0aGlzQ2hhciArICcgbm90IGVudGVyZWQuJyk7XG4gICAgfVxuICB9LFxuXG4gIF9jaGVja1BhdHRlcm5WYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlZ2V4cCA9IHRoaXMuX3BhdHRlcm5SZWdFeHA7XG4gICAgaWYgKCFyZWdleHApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXJlZ2V4cC50ZXN0KHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gVGhlIHZhbGlkYXRvciBwcm92aWRlZCBpbiBgdmFsaWRhdG9yYFxuICAgKiB3aWxsIGJlIHVzZWQgZmlyc3QsIHRoZW4gYW55IGNvbnN0cmFpbnRzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB2YWxpZC5cbiAgICovXG4gIHZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLmludmFsaWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIFVzZSB0aGUgbmVzdGVkIGlucHV0J3MgbmF0aXZlIHZhbGlkaXR5LlxuICAgIHZhciB2YWxpZCA9IHRoaXMuaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcblxuICAgIC8vIE9ubHkgZG8gZXh0cmEgY2hlY2tpbmcgaWYgdGhlIGJyb3dzZXIgdGhvdWdodCB0aGlzIHdhcyB2YWxpZC5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIC8vIEVtcHR5LCByZXF1aXJlZCBpbnB1dCBpcyBpbnZhbGlkXG4gICAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiB0aGlzLmJpbmRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNWYWxpZGF0b3IoKSkge1xuICAgICAgICB2YWxpZCA9IElyb25WYWxpZGF0YWJsZUJlaGF2aW9yLnZhbGlkYXRlLmNhbGwodGhpcywgdGhpcy5iaW5kVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaW52YWxpZCA9ICF2YWxpZDtcbiAgICB0aGlzLmZpcmUoJ2lyb24taW5wdXQtdmFsaWRhdGUnKTtcbiAgICByZXR1cm4gdmFsaWQ7XG4gIH0sXG5cbiAgX2Fubm91bmNlSW52YWxpZENoYXJhY3RlcjogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIHRoaXMuZmlyZSgnaXJvbi1hbm5vdW5jZScsIHt0ZXh0OiBtZXNzYWdlfSk7XG4gIH0sXG5cbiAgX2NvbXB1dGVWYWx1ZTogZnVuY3Rpb24oYmluZFZhbHVlKSB7XG4gICAgcmV0dXJuIGJpbmRWYWx1ZTtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcblxuaW1wb3J0IHtJcm9uUmVzaXphYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblNjcm9sbFRhcmdldEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXNjcm9sbC10YXJnZXQtYmVoYXZpb3IvaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7T3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yIGFzIE9wdGlvbmFsTXV0YWJsZURhdGFCZWhhdmlvciQwfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvbXV0YWJsZS1kYXRhLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lciBhcyBQb2x5bWVyJDB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7YWRkRGVib3VuY2VyLCBkb20sIGZsdXNoIGFzIGZsdXNoJDB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge1RlbXBsYXRpemVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvdGVtcGxhdGl6ZXItYmVoYXZpb3IuanMnO1xuaW1wb3J0IHthbmltYXRpb25GcmFtZSwgaWRsZVBlcmlvZCwgbWljcm9UYXNrfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luYy5qcyc7XG5pbXBvcnQge0RlYm91bmNlcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2UuanMnO1xuaW1wb3J0IHtlbnF1ZXVlRGVib3VuY2VyLCBmbHVzaH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZmx1c2guanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge21hdGNoZXMsIHRyYW5zbGF0ZX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcGF0aC5qcyc7XG5cbnZhciBJT1MgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUCg/OmhvbmV8YWQ7KD86IFU7KT8gQ1BVKSBPUyAoXFxkKykvKTtcbnZhciBJT1NfVE9VQ0hfU0NST0xMSU5HID0gSU9TICYmIElPU1sxXSA+PSA4O1xudmFyIERFRkFVTFRfUEhZU0lDQUxfQ09VTlQgPSAzO1xudmFyIEhJRERFTl9ZID0gJy0xMDAwMHB4JztcbnZhciBJVEVNX1dJRFRIID0gMDtcbnZhciBJVEVNX0hFSUdIVCA9IDE7XG52YXIgU0VDUkVUX1RBQklOREVYID0gLTEwMDtcbnZhciBJU19WMiA9IGZsdXNoICE9IG51bGw7XG52YXIgQU5JTUFUSU9OX0ZSQU1FID0gSVNfVjIgPyBhbmltYXRpb25GcmFtZSA6IDA7XG52YXIgSURMRV9USU1FID0gSVNfVjIgPyBpZGxlUGVyaW9kIDogMTtcbnZhciBNSUNST19UQVNLID0gSVNfVjIgPyBtaWNyb1Rhc2sgOiAyO1xuXG4vKiBQb2x5bWVyLk9wdGlvbmFsTXV0YWJsZURhdGFCZWhhdmlvciBpcyBvbmx5IGF2YWlsYWJsZSB3aXRoIFBvbHltZXIgMi4wLiAqL1xuaWYgKCFPcHRpb25hbE11dGFibGVEYXRhQmVoYXZpb3IkMCkge1xuICAvKiogQHBvbHltZXJCZWhhdmlvciAqL1xuICBQb2x5bWVyLk9wdGlvbmFsTXV0YWJsZURhdGFCZWhhdmlvciA9IHt9O1xufVxuXG4vKipcblxuYGlyb24tbGlzdGAgZGlzcGxheXMgYSB2aXJ0dWFsLCAnaW5maW5pdGUnIGxpc3QuIFRoZSB0ZW1wbGF0ZSBpbnNpZGVcbnRoZSBpcm9uLWxpc3QgZWxlbWVudCByZXByZXNlbnRzIHRoZSBET00gdG8gY3JlYXRlIGZvciBlYWNoIGxpc3QgaXRlbS5cblRoZSBgaXRlbXNgIHByb3BlcnR5IHNwZWNpZmllcyBhbiBhcnJheSBvZiBsaXN0IGl0ZW0gZGF0YS5cblxuRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIG5vdCBldmVyeSBpdGVtIGluIHRoZSBsaXN0IGlzIHJlbmRlcmVkIGF0IG9uY2U7XG5pbnN0ZWFkIGEgc21hbGwgc3Vic2V0IG9mIGFjdHVhbCB0ZW1wbGF0ZSBlbGVtZW50cyAqKGVub3VnaCB0byBmaWxsIHRoZVxudmlld3BvcnQpKiBhcmUgcmVuZGVyZWQgYW5kIHJldXNlZCBhcyB0aGUgdXNlciBzY3JvbGxzLiBBcyBzdWNoLCBpdCBpcyBpbXBvcnRhbnRcbnRoYXQgYWxsIHN0YXRlIG9mIHRoZSBsaXN0IHRlbXBsYXRlIGlzIGJvdW5kIHRvIHRoZSBtb2RlbCBkcml2aW5nIGl0LCBzaW5jZSB0aGVcbnZpZXcgbWF5IGJlIHJldXNlZCB3aXRoIGEgbmV3IG1vZGVsIGF0IGFueSB0aW1lLiBQYXJ0aWN1bGFybHksIGFueSBzdGF0ZSB0aGF0XG5tYXkgY2hhbmdlIGFzIHRoZSByZXN1bHQgb2YgYSB1c2VyIGludGVyYWN0aW9uIHdpdGggdGhlIGxpc3QgaXRlbSBtdXN0IGJlIGJvdW5kXG50byB0aGUgbW9kZWwgdG8gYXZvaWQgdmlldyBzdGF0ZSBpbmNvbnNpc3RlbmN5LlxuXG4jIyMgU2l6aW5nIGlyb24tbGlzdFxuXG5gaXJvbi1saXN0YCBtdXN0IGVpdGhlciBiZSBleHBsaWNpdGx5IHNpemVkLCBvciBkZWxlZ2F0ZSBzY3JvbGxpbmcgdG8gYW5cbmV4cGxpY2l0bHkgc2l6ZWQgcGFyZW50LiBCeSBcImV4cGxpY2l0bHkgc2l6ZWRcIiwgd2UgbWVhbiBpdCBlaXRoZXIgaGFzIGFuXG5leHBsaWNpdCBDU1MgYGhlaWdodGAgcHJvcGVydHkgc2V0IHZpYSBhIGNsYXNzIG9yIGlubGluZSBzdHlsZSwgb3IgZWxzZSBpcyBzaXplZFxuYnkgb3RoZXIgbGF5b3V0IG1lYW5zIChlLmcuIHRoZSBgZmxleGAgb3IgYGZpdGAgY2xhc3NlcykuXG5cbiMjIyMgRmxleGJveCAtIFtqc2Jpbl0oaHR0cHM6Ly9qc2Jpbi5jb20vdmVqb25pL2VkaXQ/aHRtbCxvdXRwdXQpXG5cbmBgYGh0bWxcbjx0ZW1wbGF0ZSBpcz1cIngtbGlzdFwiPlxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgaXJvbi1saXN0IHtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGFwcC10b29sYmFyPkFwcCBuYW1lPC9hcHAtdG9vbGJhcj5cbiAgPGlyb24tbGlzdCBpdGVtcz1cIltbaXRlbXNdXVwiPlxuICAgIDx0ZW1wbGF0ZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIC4uLlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9pcm9uLWxpc3Q+XG48L3RlbXBsYXRlPlxuYGBgXG4jIyMjIEV4cGxpY2l0IHNpemUgLSBbanNiaW5dKGh0dHBzOi8vanNiaW4uY29tL3ZvcHVjdXMvZWRpdD9odG1sLG91dHB1dClcbmBgYGh0bWxcbjx0ZW1wbGF0ZSBpcz1cIngtbGlzdFwiPlxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaXJvbi1saXN0IHtcbiAgICAgIGhlaWdodDogMTAwdmg7IC8qIGRvbid0IHVzZSAlIHZhbHVlcyB1bmxlc3MgdGhlIHBhcmVudCBlbGVtZW50IGlzIHNpemVkLlxuKlxcL1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGlyb24tbGlzdCBpdGVtcz1cIltbaXRlbXNdXVwiPlxuICAgIDx0ZW1wbGF0ZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIC4uLlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9pcm9uLWxpc3Q+XG48L3RlbXBsYXRlPlxuYGBgXG4jIyMjIE1haW4gZG9jdW1lbnQgc2Nyb2xsaW5nIC1cbltqc2Jpbl0oaHR0cHM6Ly9qc2Jpbi5jb20vd2V2aXJvdy9lZGl0P2h0bWwsb3V0cHV0KVxuYGBgaHRtbFxuPGhlYWQ+XG4gIDxzdHlsZT5cbiAgICBib2R5IHtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICBhcHAtdG9vbGJhciB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgaXJvbi1saXN0IHtcbiAgICAgIC8qIGFkZCBwYWRkaW5nIHNpbmNlIHRoZSBhcHAtdG9vbGJhciBpcyBmaXhlZCBhdCB0aGUgdG9wICpcXC9cbiAgICAgIHBhZGRpbmctdG9wOiA2NHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvaGVhZD5cbjxib2R5PlxuICA8YXBwLXRvb2xiYXI+QXBwIG5hbWU8L2FwcC10b29sYmFyPlxuICA8aXJvbi1saXN0IHNjcm9sbC10YXJnZXQ9XCJkb2N1bWVudFwiPlxuICAgIDx0ZW1wbGF0ZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIC4uLlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9pcm9uLWxpc3Q+XG48L2JvZHk+XG5gYGBcblxuYGlyb24tbGlzdGAgbXVzdCBiZSBnaXZlbiBhIGA8dGVtcGxhdGU+YCB3aGljaCBjb250YWlucyBleGFjdGx5IG9uZSBlbGVtZW50LiBJblxudGhlIGV4YW1wbGVzIGFib3ZlIHdlIHVzZWQgYSBgPGRpdj5gLCBidXQgeW91IGNhbiBwcm92aWRlIGFueSBlbGVtZW50IChpbmNsdWRpbmdcbmN1c3RvbSBlbGVtZW50cykuXG5cbiMjIyBUZW1wbGF0ZSBtb2RlbFxuXG5MaXN0IGl0ZW0gdGVtcGxhdGVzIHNob3VsZCBiaW5kIHRvIHRlbXBsYXRlIG1vZGVscyBvZiB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZTpcblxuYGBganNcbntcbiAgaW5kZXg6IDAsICAgICAgICAvLyBpbmRleCBpbiB0aGUgaXRlbSBhcnJheVxuICBzZWxlY3RlZDogZmFsc2UsIC8vIHRydWUgaWYgdGhlIGN1cnJlbnQgaXRlbSBpcyBzZWxlY3RlZFxuICB0YWJJbmRleDogLTEsICAgIC8vIGEgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIHRhYkluZGV4IGZvciBmb2N1cyBtYW5hZ2VtZW50XG4gIGl0ZW06IHt9ICAgICAgICAgLy8gdXNlciBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gaXRlbXNbaW5kZXhdXG59XG5gYGBcblxuQWx0ZXJuYXRpdmVseSwgeW91IGNhbiBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgdXNlZCBhcyBkYXRhIGluZGV4IGJ5IGNoYW5naW5nXG50aGUgYGluZGV4QXNgIHByb3BlcnR5LiBUaGUgYGFzYCBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0b1xuYWRkIHRvIHRoZSBiaW5kaW5nIHNjb3BlIGZvciB0aGUgYXJyYXkuXG5cbkZvciBleGFtcGxlLCBnaXZlbiB0aGUgZm9sbG93aW5nIGBkYXRhYCBhcnJheTpcblxuIyMjIyMgZGF0YS5qc29uXG5cbmBgYGpzXG5bXG4gIHtcIm5hbWVcIjogXCJCb2JcIn0sXG4gIHtcIm5hbWVcIjogXCJUaW1cIn0sXG4gIHtcIm5hbWVcIjogXCJNaWtlXCJ9XG5dXG5gYGBcblxuVGhlIGZvbGxvd2luZyBjb2RlIHdvdWxkIHJlbmRlciB0aGUgbGlzdCAobm90ZSB0aGUgbmFtZSBwcm9wZXJ0eSBpcyBib3VuZCBmcm9tXG50aGUgbW9kZWwgb2JqZWN0IHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBzY29wZSk6XG5cbmBgYGh0bWxcbjxpcm9uLWFqYXggdXJsPVwiZGF0YS5qc29uXCIgbGFzdC1yZXNwb25zZT1cInt7ZGF0YX19XCIgYXV0bz48L2lyb24tYWpheD5cbjxpcm9uLWxpc3QgaXRlbXM9XCJbW2RhdGFdXVwiIGFzPVwiaXRlbVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgIE5hbWU6IFtbaXRlbS5uYW1lXV1cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbjwvaXJvbi1saXN0PlxuYGBgXG5cbiMjIyBHcmlkIGxheW91dFxuXG5gaXJvbi1saXN0YCBzdXBwb3J0cyBhIGdyaWQgbGF5b3V0IGluIGFkZGl0aW9uIHRvIGxpbmVhciBsYXlvdXQgYnkgc2V0dGluZ1xudGhlIGBncmlkYCBhdHRyaWJ1dGUuICBJbiB0aGlzIGNhc2UsIHRoZSBsaXN0IHRlbXBsYXRlIGl0ZW0gbXVzdCBoYXZlIGJvdGggZml4ZWRcbndpZHRoIGFuZCBoZWlnaHQgKGUuZy4gdmlhIENTUykuIEJhc2VkIG9uIHRoaXMsIHRoZSBudW1iZXIgb2YgaXRlbXNcbnBlciByb3cgYXJlIGRldGVybWluZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiB0aGUgc2l6ZSBvZiB0aGUgbGlzdCB2aWV3cG9ydC5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuYGlyb24tbGlzdGAgYXV0b21hdGljYWxseSBtYW5hZ2VzIHRoZSBmb2N1cyBzdGF0ZSBmb3IgdGhlIGl0ZW1zLiBJdCBhbHNvXG5wcm92aWRlcyBhIGB0YWJJbmRleGAgcHJvcGVydHkgd2l0aGluIHRoZSB0ZW1wbGF0ZSBzY29wZSB0aGF0IGNhbiBiZSB1c2VkIGZvclxua2V5Ym9hcmQgbmF2aWdhdGlvbi4gRm9yIGV4YW1wbGUsIHVzZXJzIGNhbiBwcmVzcyB0aGUgdXAgYW5kIGRvd24ga2V5cyB0byBtb3ZlXG50byBwcmV2aW91cyBhbmQgbmV4dCBpdGVtcyBpbiB0aGUgbGlzdDpcblxuYGBgaHRtbFxuPGlyb24tbGlzdCBpdGVtcz1cIltbZGF0YV1dXCIgYXM9XCJpdGVtXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHRhYmluZGV4JD1cIltbdGFiSW5kZXhdXVwiPlxuICAgICAgTmFtZTogW1tpdGVtLm5hbWVdXVxuICAgIDwvZGl2PlxuICA8L3RlbXBsYXRlPlxuPC9pcm9uLWxpc3Q+XG5gYGBcblxuIyMjIFN0eWxpbmdcblxuWW91IGNhbiB1c2UgdGhlIGAtLWlyb24tbGlzdC1pdGVtcy1jb250YWluZXJgIG1peGluIHRvIHN0eWxlIHRoZSBjb250YWluZXIgb2Zcbml0ZW1zOlxuXG5gYGBjc3Ncbmlyb24tbGlzdCB7XG4gLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyOiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9O1xufVxuYGBgXG5cbiMjIyBSZXNpemluZ1xuXG5gaXJvbi1saXN0YCBsYXlzIG91dCB0aGUgaXRlbXMgd2hlbiBpdCByZWNlaXZlcyBhIG5vdGlmaWNhdGlvbiB2aWEgdGhlXG5gaXJvbi1yZXNpemVgIGV2ZW50LiBUaGlzIGV2ZW50IGlzIGZpcmVkIGJ5IGFueSBlbGVtZW50IHRoYXQgaW1wbGVtZW50c1xuYElyb25SZXNpemFibGVCZWhhdmlvcmAuXG5cbkJ5IGRlZmF1bHQsIGVsZW1lbnRzIHN1Y2ggYXMgYGlyb24tcGFnZXNgLCBgcGFwZXItdGFic2Agb3IgYHBhcGVyLWRpYWxvZ2Agd2lsbFxudHJpZ2dlciB0aGlzIGV2ZW50IGF1dG9tYXRpY2FsbHkuIElmIHlvdSBoaWRlIHRoZSBsaXN0IG1hbnVhbGx5IChlLmcuIHlvdSB1c2VcbmBkaXNwbGF5OiBub25lYCkgeW91IG1pZ2h0IHdhbnQgdG8gaW1wbGVtZW50IGBJcm9uUmVzaXphYmxlQmVoYXZpb3JgIG9yIGZpcmVcbnRoaXMgZXZlbnQgbWFudWFsbHkgcmlnaHQgYWZ0ZXIgdGhlIGxpc3QgYmVjYW1lIHZpc2libGUgYWdhaW4uIEZvciBleGFtcGxlOlxuXG5gYGBqc1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaXJvbi1saXN0JykuZmlyZSgnaXJvbi1yZXNpemUnKTtcbmBgYFxuXG4jIyMgV2hlbiBzaG91bGQgYDxpcm9uLWxpc3Q+YCBiZSB1c2VkP1xuXG5gaXJvbi1saXN0YCBzaG91bGQgYmUgdXNlZCB3aGVuIGEgcGFnZSBoYXMgc2lnbmlmaWNhbnRseSBtb3JlIERPTSBub2RlcyB0aGFuIHRoZVxub25lcyB2aXNpYmxlIG9uIHRoZSBzY3JlZW4uIGUuZy4gdGhlIHBhZ2UgaGFzIDUwMCBub2RlcywgYnV0IG9ubHkgMjAgYXJlIHZpc2libGVcbmF0IGEgdGltZS4gVGhpcyBpcyB3aHkgd2UgcmVmZXIgdG8gaXQgYXMgYSBgdmlydHVhbGAgbGlzdC4gSW4gdGhpcyBjYXNlLCBhXG5gZG9tLXJlcGVhdGAgd2lsbCBzdGlsbCBjcmVhdGUgNTAwIG5vZGVzIHdoaWNoIGNvdWxkIHNsb3cgZG93biB0aGUgd2ViIGFwcCwgYnV0XG5gaXJvbi1saXN0YCB3aWxsIG9ubHkgY3JlYXRlIDIwLlxuXG5Ib3dldmVyLCBoYXZpbmcgYW4gYGlyb24tbGlzdGAgZG9lcyBub3QgbWVhbiB0aGF0IHlvdSBjYW4gbG9hZCBhbGwgdGhlIGRhdGEgYXRcbm9uY2UuIFNheSB5b3UgaGF2ZSBhIG1pbGxpb24gcmVjb3JkcyBpbiB0aGUgZGF0YWJhc2UsIHlvdSB3YW50IHRvIHNwbGl0IHRoZSBkYXRhXG5pbnRvIHBhZ2VzIHNvIHlvdSBjYW4gYnJpbmcgaW4gYSBwYWdlIGF0IHRoZSB0aW1lLiBUaGUgcGFnZSBjb3VsZCBjb250YWluIDUwMFxuaXRlbXMsIGFuZCBpcm9uLWxpc3Qgd2lsbCBvbmx5IHJlbmRlciAyMC5cblxuQGdyb3VwIElyb24gRWxlbWVudFxuQGVsZW1lbnQgaXJvbi1saXN0XG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcblxuKi9cblBvbHltZXIkMCh7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1heC1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHtcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgI2l0ZW1zIHtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1saXN0LWl0ZW1zLWNvbnRhaW5lcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtncmlkXSkpICNpdGVtcyA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAjaXRlbXMgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8YXJyYXktc2VsZWN0b3IgaWQ9XCJzZWxlY3RvclwiIGl0ZW1zPVwie3tpdGVtc319XCIgc2VsZWN0ZWQ9XCJ7e3NlbGVjdGVkSXRlbXN9fVwiIHNlbGVjdGVkLWl0ZW09XCJ7e3NlbGVjdGVkSXRlbX19XCI+PC9hcnJheS1zZWxlY3Rvcj5cblxuICAgIDxkaXYgaWQ9XCJpdGVtc1wiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ2lyb24tbGlzdCcsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgY29udGFpbmluZyBpdGVtcyBkZXRlcm1pbmluZyBob3cgbWFueSBpbnN0YW5jZXMgb2YgdGhlIHRlbXBsYXRlXG4gICAgICogdG8gc3RhbXAgYW5kIHRoYXQgdGhhdCBlYWNoIHRlbXBsYXRlIGluc3RhbmNlIHNob3VsZCBiaW5kIHRvLlxuICAgICAqL1xuICAgIGl0ZW1zOiB7dHlwZTogQXJyYXl9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGFkZCB0byB0aGUgYmluZGluZyBzY29wZSBmb3IgdGhlIGFycmF5XG4gICAgICogZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiB0ZW1wbGF0ZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBhczoge3R5cGU6IFN0cmluZywgdmFsdWU6ICdpdGVtJ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgdG8gYWRkIHRvIHRoZSBiaW5kaW5nIHNjb3BlIHdpdGggdGhlIGluZGV4XG4gICAgICogZm9yIHRoZSByb3cuXG4gICAgICovXG4gICAgaW5kZXhBczoge3R5cGU6IFN0cmluZywgdmFsdWU6ICdpbmRleCd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGFkZCB0byB0aGUgYmluZGluZyBzY29wZSB0byBpbmRpY2F0ZVxuICAgICAqIGlmIHRoZSByb3cgaXMgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgc2VsZWN0ZWRBczoge3R5cGU6IFN0cmluZywgdmFsdWU6ICdzZWxlY3RlZCd9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgbGlzdCBpcyByZW5kZXJlZCBhcyBhIGdyaWQuIEdyaWQgaXRlbXMgbXVzdCBoYXZlXG4gICAgICogZml4ZWQgd2lkdGggYW5kIGhlaWdodCBzZXQgdmlhIENTUy4gZS5nLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpcm9uLWxpc3QgZ3JpZD5cbiAgICAgKiAgIDx0ZW1wbGF0ZT5cbiAgICAgKiAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwcHg7IGhlaWdodDogMTAwcHg7XCI+IDEwMHgxMDAgPC9kaXY+XG4gICAgICogICA8L3RlbXBsYXRlPlxuICAgICAqIDwvaXJvbi1saXN0PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdyaWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICBvYnNlcnZlcjogJ19ncmlkQ2hhbmdlZCdcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0YXBwaW5nIGEgcm93IHdpbGwgc2VsZWN0IHRoZSBpdGVtLCBwbGFjaW5nIGl0cyBkYXRhIG1vZGVsXG4gICAgICogaW4gdGhlIHNldCBvZiBzZWxlY3RlZCBpdGVtcyByZXRyaWV2YWJsZSB2aWEgdGhlIHNlbGVjdGlvbiBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB0YXBwaW5nIGZvY3VzYWJsZSBlbGVtZW50cyB3aXRoaW4gdGhlIGxpc3QgaXRlbSB3aWxsIG5vdFxuICAgICAqIHJlc3VsdCBpbiBzZWxlY3Rpb24sIHNpbmNlIHRoZXkgYXJlIHByZXN1bWVkIHRvIGhhdmUgdGhlaXIgKiBvd24gYWN0aW9uLlxuICAgICAqL1xuICAgIHNlbGVjdGlvbkVuYWJsZWQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBgbXVsdGlTZWxlY3Rpb25gIGlzIGZhbHNlLCB0aGlzIGlzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSwgb3JcbiAgICAgKiBgbnVsbGAgaWYgbm8gaXRlbSBpcyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW06IHt0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGBtdWx0aVNlbGVjdGlvbmAgaXMgdHJ1ZSwgdGhpcyBpcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZVxuICAgICAqIHNlbGVjdGVkIGl0ZW1zLlxuICAgICAqL1xuICAgIHNlbGVjdGVkSXRlbXM6IHt0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGB0cnVlYCwgbXVsdGlwbGUgaXRlbXMgbWF5IGJlIHNlbGVjdGVkIGF0IG9uY2UgKGluIHRoaXMgY2FzZSxcbiAgICAgKiBgc2VsZWN0ZWRgIGlzIGFuIGFycmF5IG9mIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtcykuICBXaGVuIGBmYWxzZWAsXG4gICAgICogb25seSBvbmUgaXRlbSBtYXkgYmUgc2VsZWN0ZWQgYXQgYSB0aW1lLlxuICAgICAqL1xuICAgIG11bHRpU2VsZWN0aW9uOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvZmZzZXQgdG9wIGZyb20gdGhlIHNjcm9sbGluZyBlbGVtZW50IHRvIHRoZSBpcm9uLWxpc3QgZWxlbWVudC5cbiAgICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBjb21wdXRlZCB1c2luZyB0aGUgcG9zaXRpb24gcmV0dXJuZWQgYnlcbiAgICAgKiBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClgIGFsdGhvdWdoIGl0J3MgcHJlZmVycmVkIHRvIHVzZSBhIGNvbnN0YW50IHZhbHVlXG4gICAgICogd2hlbiBwb3NzaWJsZS5cbiAgICAgKlxuICAgICAqIFRoaXMgcHJvcGVydHkgaXMgdXNlZnVsIHdoZW4gYW4gZXh0ZXJuYWwgc2Nyb2xsaW5nIGVsZW1lbnQgaXMgdXNlZCBhbmRcbiAgICAgKiB0aGVyZSdzIHNvbWUgb2Zmc2V0IGJldHdlZW4gdGhlIHNjcm9sbGluZyBlbGVtZW50IGFuZCB0aGUgbGlzdC4gRm9yXG4gICAgICogZXhhbXBsZTogYSBoZWFkZXIgaXMgcGxhY2VkIGFib3ZlIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIHNjcm9sbE9mZnNldDoge3R5cGU6IE51bWJlciwgdmFsdWU6IDB9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ19pdGVtc0NoYW5nZWQoaXRlbXMuKiknLFxuICAgICdfc2VsZWN0aW9uRW5hYmxlZENoYW5nZWQoc2VsZWN0aW9uRW5hYmxlZCknLFxuICAgICdfbXVsdGlTZWxlY3Rpb25DaGFuZ2VkKG11bHRpU2VsZWN0aW9uKScsXG4gICAgJ19zZXRPdmVyZmxvdyhzY3JvbGxUYXJnZXQsIHNjcm9sbE9mZnNldCknXG4gIF0sXG5cbiAgYmVoYXZpb3JzOiBbXG4gICAgVGVtcGxhdGl6ZXIsXG4gICAgSXJvblJlc2l6YWJsZUJlaGF2aW9yLFxuICAgIElyb25TY3JvbGxUYXJnZXRCZWhhdmlvcixcbiAgICBPcHRpb25hbE11dGFibGVEYXRhQmVoYXZpb3IkMFxuICBdLFxuXG4gIC8qKlxuICAgKiBUaGUgcmF0aW8gb2YgaGlkZGVuIHRpbGVzIHRoYXQgc2hvdWxkIHJlbWFpbiBpbiB0aGUgc2Nyb2xsIGRpcmVjdGlvbi5cbiAgICogUmVjb21tZW5kZWQgdmFsdWUgfjAuNSwgc28gaXQgd2lsbCBkaXN0cmlidXRlIHRpbGVzIGV2ZW5seSBpbiBib3RoXG4gICAqIGRpcmVjdGlvbnMuXG4gICAqL1xuICBfcmF0aW86IDAuNSxcblxuICAvKipcbiAgICogVGhlIHBhZGRpbmctdG9wIHZhbHVlIGZvciB0aGUgbGlzdC5cbiAgICovXG4gIF9zY3JvbGxlclBhZGRpbmdUb3A6IDAsXG5cbiAgLyoqXG4gICAqIFRoaXMgdmFsdWUgaXMgdGhlIHNhbWUgYXMgYHNjcm9sbFRvcGAuXG4gICAqL1xuICBfc2Nyb2xsUG9zaXRpb246IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBzdW0gb2YgdGhlIGhlaWdodHMgb2YgYWxsIHRoZSB0aWxlcyBpbiB0aGUgRE9NLlxuICAgKi9cbiAgX3BoeXNpY2FsU2l6ZTogMCxcblxuICAvKipcbiAgICogVGhlIGF2ZXJhZ2UgYG9mZnNldEhlaWdodGAgb2YgdGhlIHRpbGVzIG9ic2VydmVkIHRpbGwgbm93LlxuICAgKi9cbiAgX3BoeXNpY2FsQXZlcmFnZTogMCxcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiB0aWxlcyB3aGljaCBgb2Zmc2V0SGVpZ2h0YCA+IDAgb2JzZXJ2ZWQgdW50aWwgbm93LlxuICAgKi9cbiAgX3BoeXNpY2FsQXZlcmFnZUNvdW50OiAwLFxuXG4gIC8qKlxuICAgKiBUaGUgWSBwb3NpdGlvbiBvZiB0aGUgaXRlbSByZW5kZXJlZCBpbiB0aGUgYF9waHlzaWNhbFN0YXJ0YFxuICAgKiB0aWxlIHJlbGF0aXZlIHRvIHRoZSBzY3JvbGxpbmcgbGlzdC5cbiAgICovXG4gIF9waHlzaWNhbFRvcDogMCxcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdC5cbiAgICovXG4gIF92aXJ0dWFsQ291bnQ6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBlc3RpbWF0ZWQgc2Nyb2xsIGhlaWdodCBiYXNlZCBvbiBgX3BoeXNpY2FsQXZlcmFnZWBcbiAgICovXG4gIF9lc3RTY3JvbGxIZWlnaHQ6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBzY3JvbGwgaGVpZ2h0IG9mIHRoZSBkb20gbm9kZVxuICAgKi9cbiAgX3Njcm9sbEhlaWdodDogMCxcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgbGlzdC4gVGhpcyBpcyByZWZlcnJlZCBhcyB0aGUgdmlld3BvcnQgaW4gdGhlIGNvbnRleHQgb2ZcbiAgICogbGlzdC5cbiAgICovXG4gIF92aWV3cG9ydEhlaWdodDogMCxcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBsaXN0LiBUaGlzIGlzIHJlZmVycmVkIGFzIHRoZSB2aWV3cG9ydCBpbiB0aGUgY29udGV4dCBvZlxuICAgKiBsaXN0LlxuICAgKi9cbiAgX3ZpZXdwb3J0V2lkdGg6IDAsXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIERPTSBub2RlcyB0aGF0IGFyZSBjdXJyZW50bHkgaW4gdGhlIHRyZWVcbiAgICogQHR5cGUgez9BcnJheTwhVGVtcGxhdGl6ZXJOb2RlPn1cbiAgICovXG4gIF9waHlzaWNhbEl0ZW1zOiBudWxsLFxuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBoZWlnaHRzIGZvciBlYWNoIGl0ZW0gaW4gYF9waHlzaWNhbEl0ZW1zYFxuICAgKiBAdHlwZSB7P0FycmF5PG51bWJlcj59XG4gICAqL1xuICBfcGh5c2ljYWxTaXplczogbnVsbCxcblxuICAvKipcbiAgICogQSBjYWNoZWQgdmFsdWUgZm9yIHRoZSBmaXJzdCB2aXNpYmxlIGluZGV4LlxuICAgKiBTZWUgYGZpcnN0VmlzaWJsZUluZGV4YFxuICAgKiBAdHlwZSB7P251bWJlcn1cbiAgICovXG4gIF9maXJzdFZpc2libGVJbmRleFZhbDogbnVsbCxcblxuICAvKipcbiAgICogQSBQb2x5bWVyIGNvbGxlY3Rpb24gZm9yIHRoZSBpdGVtcy5cbiAgICogQHR5cGUgez9Qb2x5bWVyLkNvbGxlY3Rpb259XG4gICAqL1xuICBfY29sbGVjdGlvbjogbnVsbCxcblxuICAvKipcbiAgICogQSBjYWNoZWQgdmFsdWUgZm9yIHRoZSBsYXN0IHZpc2libGUgaW5kZXguXG4gICAqIFNlZSBgbGFzdFZpc2libGVJbmRleGBcbiAgICogQHR5cGUgez9udW1iZXJ9XG4gICAqL1xuICBfbGFzdFZpc2libGVJbmRleFZhbDogbnVsbCxcblxuICAvKipcbiAgICogVGhlIG1heCBudW1iZXIgb2YgcGFnZXMgdG8gcmVuZGVyLiBPbmUgcGFnZSBpcyBlcXVpdmFsZW50IHRvIHRoZSBoZWlnaHQgb2ZcbiAgICogdGhlIGxpc3QuXG4gICAqL1xuICBfbWF4UGFnZXM6IDIsXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgKi9cbiAgX2ZvY3VzZWRJdGVtOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgdmlydHVhbCBpbmRleCBvZiB0aGUgZm9jdXNlZCBpdGVtLlxuICAgKi9cbiAgX2ZvY3VzZWRWaXJ0dWFsSW5kZXg6IC0xLFxuXG4gIC8qKlxuICAgKiBUaGUgcGh5c2ljYWwgaW5kZXggb2YgdGhlIGZvY3VzZWQgaXRlbS5cbiAgICovXG4gIF9mb2N1c2VkUGh5c2ljYWxJbmRleDogLTEsXG5cbiAgLyoqXG4gICAqIFRoZSB0aGUgaXRlbSB0aGF0IGlzIGZvY3VzZWQgaWYgaXQgaXMgbW92ZWQgb2Zmc2NyZWVuLlxuICAgKiBAcHJpdmF0ZSB7P1RlbXBsYXRpemVyTm9kZX1cbiAgICovXG4gIF9vZmZzY3JlZW5Gb2N1c2VkSXRlbTogbnVsbCxcblxuICAvKipcbiAgICogVGhlIGl0ZW0gdGhhdCBiYWNrZmlsbHMgdGhlIGBfb2Zmc2NyZWVuRm9jdXNlZEl0ZW1gIGluIHRoZSBwaHlzaWNhbCBpdGVtc1xuICAgKiBsaXN0IHdoZW4gdGhhdCBpdGVtIGlzIG1vdmVkIG9mZnNjcmVlbi5cbiAgICovXG4gIF9mb2N1c0JhY2tmaWxsSXRlbTogbnVsbCxcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gaXRlbXMgcGVyIHJvd1xuICAgKi9cbiAgX2l0ZW1zUGVyUm93OiAxLFxuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgZWFjaCBncmlkIGl0ZW1cbiAgICovXG4gIF9pdGVtV2lkdGg6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHJvdyBpbiBncmlkIGxheW91dC5cbiAgICovXG4gIF9yb3dIZWlnaHQ6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBjb3N0IG9mIHN0YW1waW5nIGEgdGVtcGxhdGUgaW4gbXMuXG4gICAqL1xuICBfdGVtcGxhdGVDb3N0OiAwLFxuXG4gIC8qKlxuICAgKiBOZWVkZWQgdG8gcGFzcyBldmVudC5tb2RlbCBwcm9wZXJ0eSB0byBkZWNsYXJhdGl2ZSBldmVudCBoYW5kbGVycyAtXG4gICAqIHNlZSBwb2x5bWVyL3BvbHltZXIjNDMzOS5cbiAgICovXG4gIF9wYXJlbnRNb2RlbDogdHJ1ZSxcblxuICAvKipcbiAgICogVGhlIGJvdHRvbSBvZiB0aGUgcGh5c2ljYWwgY29udGVudC5cbiAgICovXG4gIGdldCBfcGh5c2ljYWxCb3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fcGh5c2ljYWxTaXplO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgYm90dG9tIG9mIHRoZSBzY3JvbGwuXG4gICAqL1xuICBnZXQgX3Njcm9sbEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsUG9zaXRpb24gKyB0aGlzLl92aWV3cG9ydEhlaWdodDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIG4tdGggaXRlbSByZW5kZXJlZCBpbiB0aGUgbGFzdCBwaHlzaWNhbCBpdGVtLlxuICAgKi9cbiAgZ2V0IF92aXJ0dWFsRW5kKCkge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnQgKyB0aGlzLl9waHlzaWNhbENvdW50IC0gMTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgcGh5c2ljYWwgY29udGVudCB0aGF0IGlzbid0IG9uIHRoZSBzY3JlZW4uXG4gICAqL1xuICBnZXQgX2hpZGRlbkNvbnRlbnRTaXplKCkge1xuICAgIHZhciBzaXplID1cbiAgICAgICAgdGhpcy5ncmlkID8gdGhpcy5fcGh5c2ljYWxSb3dzICogdGhpcy5fcm93SGVpZ2h0IDogdGhpcy5fcGh5c2ljYWxTaXplO1xuICAgIHJldHVybiBzaXplIC0gdGhpcy5fdmlld3BvcnRIZWlnaHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBwYXJlbnQgbm9kZSBmb3IgdGhlIF91c2VyVGVtcGxhdGUuXG4gICAqL1xuICBnZXQgX2l0ZW1zUGFyZW50KCkge1xuICAgIHJldHVybiBkb20oZG9tKHRoaXMuX3VzZXJUZW1wbGF0ZSkucGFyZW50Tm9kZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIHNjcm9sbCB0b3AgdmFsdWUuXG4gICAqL1xuICBnZXQgX21heFNjcm9sbFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0IC0gdGhpcy5fdmlld3BvcnRIZWlnaHQgKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBsYXJnZXN0IG4tdGggdmFsdWUgZm9yIGFuIGl0ZW0gc3VjaCB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCBpblxuICAgKiBgX3BoeXNpY2FsU3RhcnRgLlxuICAgKi9cbiAgZ2V0IF9tYXhWaXJ0dWFsU3RhcnQoKSB7XG4gICAgdmFyIHZpcnR1YWxDb3VudCA9IHRoaXMuX2NvbnZlcnRJbmRleFRvQ29tcGxldGVSb3codGhpcy5fdmlydHVhbENvdW50KTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgdmlydHVhbENvdW50IC0gdGhpcy5fcGh5c2ljYWxDb3VudCk7XG4gIH0sXG5cbiAgc2V0IF92aXJ0dWFsU3RhcnQodmFsKSB7XG4gICAgdmFsID0gdGhpcy5fY2xhbXAodmFsLCAwLCB0aGlzLl9tYXhWaXJ0dWFsU3RhcnQpO1xuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgIHZhbCA9IHZhbCAtICh2YWwgJSB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgfVxuICAgIHRoaXMuX3ZpcnR1YWxTdGFydFZhbCA9IHZhbDtcbiAgfSxcblxuICBnZXQgX3ZpcnR1YWxTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbFN0YXJ0VmFsIHx8IDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBrLXRoIHRpbGUgdGhhdCBpcyBhdCB0aGUgdG9wIG9mIHRoZSBzY3JvbGxpbmcgbGlzdC5cbiAgICovXG4gIHNldCBfcGh5c2ljYWxTdGFydCh2YWwpIHtcbiAgICB2YWwgPSB2YWwgJSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgIGlmICh2YWwgPCAwKSB7XG4gICAgICB2YWwgPSB0aGlzLl9waHlzaWNhbENvdW50ICsgdmFsO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICB2YWwgPSB2YWwgLSAodmFsICUgdGhpcy5faXRlbXNQZXJSb3cpO1xuICAgIH1cbiAgICB0aGlzLl9waHlzaWNhbFN0YXJ0VmFsID0gdmFsO1xuICB9LFxuXG4gIGdldCBfcGh5c2ljYWxTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxTdGFydFZhbCB8fCAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgay10aCB0aWxlIHRoYXQgaXMgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2Nyb2xsaW5nIGxpc3QuXG4gICAqL1xuICBnZXQgX3BoeXNpY2FsRW5kKCkge1xuICAgIHJldHVybiAodGhpcy5fcGh5c2ljYWxTdGFydCArIHRoaXMuX3BoeXNpY2FsQ291bnQgLSAxKSAlXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gIH0sXG5cbiAgc2V0IF9waHlzaWNhbENvdW50KHZhbCkge1xuICAgIHRoaXMuX3BoeXNpY2FsQ291bnRWYWwgPSB2YWw7XG4gIH0sXG5cbiAgZ2V0IF9waHlzaWNhbENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9waHlzaWNhbENvdW50VmFsIHx8IDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFuIG9wdGltYWwgcGh5c2ljYWwgc2l6ZSBzdWNoIHRoYXQgd2Ugd2lsbCBoYXZlIGVub3VnaCBwaHlzaWNhbCBpdGVtc1xuICAgKiB0byBmaWxsIHVwIHRoZSB2aWV3cG9ydCBhbmQgcmVjeWNsZSB3aGVuIHRoZSB1c2VyIHNjcm9sbHMuXG4gICAqXG4gICAqIFRoaXMgZGVmYXVsdCB2YWx1ZSBhc3N1bWVzIHRoYXQgd2Ugd2lsbCBhdCBsZWFzdCBoYXZlIHRoZSBlcXVpdmFsZW50XG4gICAqIHRvIGEgdmlld3BvcnQgb2YgcGh5c2ljYWwgaXRlbXMgYWJvdmUgYW5kIGJlbG93IHRoZSB1c2VyJ3Mgdmlld3BvcnQuXG4gICAqL1xuICBnZXQgX29wdFBoeXNpY2FsU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlld3BvcnRIZWlnaHQgPT09IDAgPyBJbmZpbml0eSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmlld3BvcnRIZWlnaHQgKiB0aGlzLl9tYXhQYWdlcztcbiAgfSxcblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgY3VycmVudCBsaXN0IGlzIHZpc2libGUuXG4gICAqL1xuICBnZXQgX2lzVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLm9mZnNldFdpZHRoIHx8IHRoaXMub2Zmc2V0SGVpZ2h0KTtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IHZpc2libGUgaXRlbSBpbiB0aGUgdmlld3BvcnQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZmlyc3RWaXNpYmxlSW5kZXgoKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsO1xuICAgIGlmIChpZHggPT0gbnVsbCkge1xuICAgICAgdmFyIHBoeXNpY2FsT2Zmc2V0ID0gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG5cbiAgICAgIGlkeCA9IHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICAgIHBoeXNpY2FsT2Zmc2V0ICs9IHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChwaWR4KTtcblxuICAgICAgICBpZiAocGh5c2ljYWxPZmZzZXQgPiB0aGlzLl9zY3JvbGxQb3NpdGlvbikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQgPyB2aWR4IC0gKHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdykgOiB2aWR4O1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBhIHBhcnRpYWxseSByZW5kZXJlZCBmaW5hbCByb3cgaW4gZ3JpZCBtb2RlXG4gICAgICAgIGlmICh0aGlzLmdyaWQgJiYgdGhpcy5fdmlydHVhbENvdW50IC0gMSA9PT0gdmlkeCkge1xuICAgICAgICAgIHJldHVybiB2aWR4IC0gKHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8XG4gICAgICAgICAgMDtcbiAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gaWR4O1xuICAgIH1cbiAgICByZXR1cm4gaWR4O1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpbmRleCBvZiB0aGUgbGFzdCB2aXNpYmxlIGl0ZW0gaW4gdGhlIHZpZXdwb3J0LlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGxhc3RWaXNpYmxlSW5kZXgoKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWw7XG4gICAgaWYgKGlkeCA9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICAgIGlkeCA9IE1hdGgubWluKFxuICAgICAgICAgICAgdGhpcy5fdmlydHVhbENvdW50LFxuICAgICAgICAgICAgdGhpcy5maXJzdFZpc2libGVJbmRleCArIHRoaXMuX2VzdFJvd3NJblZpZXcgKiB0aGlzLl9pdGVtc1BlclJvdyAtXG4gICAgICAgICAgICAgICAgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGh5c2ljYWxPZmZzZXQgPSB0aGlzLl9waHlzaWNhbFRvcCArIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgICBpZiAocGh5c2ljYWxPZmZzZXQgPCB0aGlzLl9zY3JvbGxCb3R0b20pIHtcbiAgICAgICAgICAgIGlkeCA9IHZpZHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBoeXNpY2FsT2Zmc2V0ICs9IHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChwaWR4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gaWR4O1xuICAgIH1cbiAgICByZXR1cm4gaWR4O1xuICB9LFxuXG4gIGdldCBfZGVmYXVsdFNjcm9sbFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBnZXQgX3ZpcnR1YWxSb3dDb3VudCgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3ZpcnR1YWxDb3VudCAvIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgfSxcblxuICBnZXQgX2VzdFJvd3NJblZpZXcoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLl92aWV3cG9ydEhlaWdodCAvIHRoaXMuX3Jvd0hlaWdodCk7XG4gIH0sXG5cbiAgZ2V0IF9waHlzaWNhbFJvd3MoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLl9waHlzaWNhbENvdW50IC8gdGhpcy5faXRlbXNQZXJSb3cpO1xuICB9LFxuXG4gIGdldCBfc2Nyb2xsT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxlclBhZGRpbmdUb3AgKyB0aGlzLnNjcm9sbE9mZnNldDtcbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2RpZEZvY3VzLmJpbmQodGhpcyksIHRydWUpO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgQU5JTUFUSU9OX0ZSQU1FKTtcbiAgICAvLyBgaXJvbi1yZXNpemVgIGlzIGZpcmVkIHdoZW4gdGhlIGxpc3QgaXMgYXR0YWNoZWQgaWYgdGhlIGV2ZW50IGlzIGFkZGVkXG4gICAgLy8gYmVmb3JlIGF0dGFjaGVkIGNhdXNpbmcgdW5uZWNlc3Nhcnkgd29yay5cbiAgICB0aGlzLmxpc3Rlbih0aGlzLCAnaXJvbi1yZXNpemUnLCAnX3Jlc2l6ZUhhbmRsZXInKTtcbiAgICB0aGlzLmxpc3Rlbih0aGlzLCAna2V5ZG93bicsICdfa2V5ZG93bkhhbmRsZXInKTtcbiAgfSxcblxuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy51bmxpc3Rlbih0aGlzLCAnaXJvbi1yZXNpemUnLCAnX3Jlc2l6ZUhhbmRsZXInKTtcbiAgICB0aGlzLnVubGlzdGVuKHRoaXMsICdrZXlkb3duJywgJ19rZXlkb3duSGFuZGxlcicpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG92ZXJmbG93IHByb3BlcnR5IGlmIHRoaXMgZWxlbWVudCBoYXMgaXRzIG93biBzY3JvbGxpbmcgcmVnaW9uXG4gICAqL1xuICBfc2V0T3ZlcmZsb3c6IGZ1bmN0aW9uKHNjcm9sbFRhcmdldCkge1xuICAgIHRoaXMuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBzY3JvbGxUYXJnZXQgPT09IHRoaXMgPyAndG91Y2gnIDogJyc7XG4gICAgdGhpcy5zdHlsZS5vdmVyZmxvd1kgPSBzY3JvbGxUYXJnZXQgPT09IHRoaXMgPyAnYXV0bycgOiAnJztcbiAgICAvLyBDbGVhciBjYWNoZS5cbiAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCB0aGlzLl9yZW5kZXIsIEFOSU1BVElPTl9GUkFNRSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEludm9rZSB0aGlzIG1ldGhvZCBpZiB5b3UgZHluYW1pY2FsbHkgdXBkYXRlIHRoZSB2aWV3cG9ydCdzXG4gICAqIHNpemUgb3IgQ1NTIHBhZGRpbmcuXG4gICAqXG4gICAqIEBtZXRob2QgdXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzXG4gICAqL1xuICB1cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKTtcbiAgICB0aGlzLl9zY3JvbGxlclBhZGRpbmdUb3AgPVxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcyA/IDAgOiBwYXJzZUludChzdHlsZXNbJ3BhZGRpbmctdG9wJ10sIDEwKTtcbiAgICB0aGlzLl9pc1JUTCA9IEJvb2xlYW4oc3R5bGVzLmRpcmVjdGlvbiA9PT0gJ3J0bCcpO1xuICAgIHRoaXMuX3ZpZXdwb3J0V2lkdGggPSB0aGlzLiQuaXRlbXMub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5fdmlld3BvcnRIZWlnaHQgPSB0aGlzLl9zY3JvbGxUYXJnZXRIZWlnaHQ7XG4gICAgdGhpcy5ncmlkICYmIHRoaXMuX3VwZGF0ZUdyaWRNZXRyaWNzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlY3ljbGVzIHRoZSBwaHlzaWNhbCBpdGVtcyB3aGVuIG5lZWRlZC5cbiAgICovXG4gIF9zY3JvbGxIYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5fbWF4U2Nyb2xsVG9wLCB0aGlzLl9zY3JvbGxUb3ApKTtcbiAgICB2YXIgZGVsdGEgPSBzY3JvbGxUb3AgLSB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgICB2YXIgaXNTY3JvbGxpbmdEb3duID0gZGVsdGEgPj0gMDtcbiAgICAvLyBUcmFjayB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24uXG4gICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxUb3A7XG4gICAgLy8gQ2xlYXIgaW5kZXhlcyBmb3IgZmlyc3QgYW5kIGxhc3QgdmlzaWJsZSBpbmRleGVzLlxuICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAvLyBSYW5kb20gYWNjZXNzLlxuICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPiB0aGlzLl9waHlzaWNhbFNpemUgJiYgdGhpcy5fcGh5c2ljYWxTaXplID4gMCkge1xuICAgICAgZGVsdGEgPSBkZWx0YSAtIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICAgIHZhciBpZHhBZGp1c3RtZW50ID1cbiAgICAgICAgICBNYXRoLnJvdW5kKGRlbHRhIC8gdGhpcy5fcGh5c2ljYWxBdmVyYWdlKSAqIHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgaWR4QWRqdXN0bWVudDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgaWR4QWRqdXN0bWVudDtcbiAgICAgIC8vIEVzdGltYXRlIG5ldyBwaHlzaWNhbCBvZmZzZXQuXG4gICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IE1hdGguZmxvb3IodGhpcy5fdmlydHVhbFN0YXJ0IC8gdGhpcy5faXRlbXNQZXJSb3cpICpcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2U7XG4gICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwKSB7XG4gICAgICB2YXIgcmV1c2FibGVzID0gdGhpcy5fZ2V0UmV1c2FibGVzKGlzU2Nyb2xsaW5nRG93bik7XG4gICAgICBpZiAoaXNTY3JvbGxpbmdEb3duKSB7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gcmV1c2FibGVzLnBoeXNpY2FsVG9wO1xuICAgICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQgKyByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0IC0gcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCAtIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZShcbiAgICAgICAgICByZXVzYWJsZXMuaW5kZXhlcywgaXNTY3JvbGxpbmdEb3duID8gbnVsbCA6IHJldXNhYmxlcy5pbmRleGVzKTtcbiAgICAgIHRoaXMuX2RlYm91bmNlKFxuICAgICAgICAgICdfaW5jcmVhc2VQb29sSWZOZWVkZWQnLFxuICAgICAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkLmJpbmQodGhpcywgMCksXG4gICAgICAgICAgTUlDUk9fVEFTSyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBpbmRleGVzIG9mIHRoZSBwaHlzaWNhbCBpdGVtc1xuICAgKiB0aGF0IG1pZ2h0IGJlIHJldXNlZCBhbmQgdGhlIHBoeXNpY2FsVG9wLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZyb21Ub3AgSWYgdGhlIHBvdGVudGlhbCByZXVzYWJsZSBpdGVtcyBhcmUgYWJvdmUgdGhlIHNjcm9sbGluZyByZWdpb24uXG4gICAqL1xuICBfZ2V0UmV1c2FibGVzOiBmdW5jdGlvbihmcm9tVG9wKSB7XG4gICAgdmFyIGl0aCwgbGFzdEl0aCwgb2Zmc2V0Q29udGVudCwgcGh5c2ljYWxJdGVtSGVpZ2h0O1xuICAgIHZhciBpZHhzID0gW107XG4gICAgdmFyIHByb3RlY3RlZE9mZnNldENvbnRlbnQgPSB0aGlzLl9oaWRkZW5Db250ZW50U2l6ZSAqIHRoaXMuX3JhdGlvO1xuICAgIHZhciB2aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgdmFyIHZpcnR1YWxFbmQgPSB0aGlzLl92aXJ0dWFsRW5kO1xuICAgIHZhciBwaHlzaWNhbENvdW50ID0gdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICB2YXIgdG9wID0gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gICAgdmFyIGJvdHRvbSA9IHRoaXMuX3BoeXNpY2FsQm90dG9tICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLl9zY3JvbGxUb3A7XG4gICAgdmFyIHNjcm9sbEJvdHRvbSA9IHRoaXMuX3Njcm9sbEJvdHRvbTtcblxuICAgIGlmIChmcm9tVG9wKSB7XG4gICAgICBpdGggPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgbGFzdEl0aCA9IHRoaXMuX3BoeXNpY2FsRW5kO1xuICAgICAgb2Zmc2V0Q29udGVudCA9IHNjcm9sbFRvcCAtIHRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRoID0gdGhpcy5fcGh5c2ljYWxFbmQ7XG4gICAgICBsYXN0SXRoID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgIG9mZnNldENvbnRlbnQgPSBib3R0b20gLSBzY3JvbGxCb3R0b207XG4gICAgfVxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBwaHlzaWNhbEl0ZW1IZWlnaHQgPSB0aGlzLl9nZXRQaHlzaWNhbFNpemVJbmNyZW1lbnQoaXRoKTtcbiAgICAgIG9mZnNldENvbnRlbnQgPSBvZmZzZXRDb250ZW50IC0gcGh5c2ljYWxJdGVtSGVpZ2h0O1xuICAgICAgaWYgKGlkeHMubGVuZ3RoID49IHBoeXNpY2FsQ291bnQgfHxcbiAgICAgICAgICBvZmZzZXRDb250ZW50IDw9IHByb3RlY3RlZE9mZnNldENvbnRlbnQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoZnJvbVRvcCkge1xuICAgICAgICAvLyBDaGVjayB0aGF0IGluZGV4IGlzIHdpdGhpbiB0aGUgdmFsaWQgcmFuZ2UuXG4gICAgICAgIGlmICh2aXJ0dWFsRW5kICsgaWR4cy5sZW5ndGggKyAxID49IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIGluZGV4IGlzIG5vdCB2aXNpYmxlLlxuICAgICAgICBpZiAodG9wICsgcGh5c2ljYWxJdGVtSGVpZ2h0ID49IHNjcm9sbFRvcCAtIHRoaXMuX3Njcm9sbE9mZnNldCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlkeHMucHVzaChpdGgpO1xuICAgICAgICB0b3AgPSB0b3AgKyBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgICAgIGl0aCA9IChpdGggKyAxKSAlIHBoeXNpY2FsQ291bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDaGVjayB0aGF0IGluZGV4IGlzIHdpdGhpbiB0aGUgdmFsaWQgcmFuZ2UuXG4gICAgICAgIGlmICh2aXJ0dWFsU3RhcnQgLSBpZHhzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgaW5kZXggaXMgbm90IHZpc2libGUuXG4gICAgICAgIGlmICh0b3AgKyB0aGlzLl9waHlzaWNhbFNpemUgLSBwaHlzaWNhbEl0ZW1IZWlnaHQgPD0gc2Nyb2xsQm90dG9tKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWR4cy5wdXNoKGl0aCk7XG4gICAgICAgIHRvcCA9IHRvcCAtIHBoeXNpY2FsSXRlbUhlaWdodDtcbiAgICAgICAgaXRoID0gKGl0aCA9PT0gMCkgPyBwaHlzaWNhbENvdW50IC0gMSA6IGl0aCAtIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7aW5kZXhlczogaWR4cywgcGh5c2ljYWxUb3A6IHRvcCAtIHRoaXMuX3Njcm9sbE9mZnNldH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgbGlzdCBvZiBpdGVtcywgc3RhcnRpbmcgZnJvbSB0aGUgYF92aXJ0dWFsU3RhcnRgIGl0ZW0uXG4gICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBpdGVtU2V0XG4gICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBtb3ZpbmdVcFxuICAgKi9cbiAgX3VwZGF0ZTogZnVuY3Rpb24oaXRlbVNldCwgbW92aW5nVXApIHtcbiAgICBpZiAoKGl0ZW1TZXQgJiYgaXRlbVNldC5sZW5ndGggPT09IDApIHx8IHRoaXMuX3BoeXNpY2FsQ291bnQgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWFuYWdlRm9jdXMoKTtcbiAgICB0aGlzLl9hc3NpZ25Nb2RlbHMoaXRlbVNldCk7XG4gICAgdGhpcy5fdXBkYXRlTWV0cmljcyhpdGVtU2V0KTtcbiAgICAvLyBBZGp1c3Qgb2Zmc2V0IGFmdGVyIG1lYXN1cmluZy5cbiAgICBpZiAobW92aW5nVXApIHtcbiAgICAgIHdoaWxlIChtb3ZpbmdVcC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGlkeCA9IG1vdmluZ1VwLnBvcCgpO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCAtPSB0aGlzLl9nZXRQaHlzaWNhbFNpemVJbmNyZW1lbnQoaWR4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcG9zaXRpb25JdGVtcygpO1xuICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGVyU2l6ZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcG9vbCBvZiBET00gZWxlbWVudHMgYW5kIGF0dGFjaGVzIHRoZW0gdG8gdGhlIGxvY2FsIGRvbS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgU2l6ZSBvZiB0aGUgcG9vbFxuICAgKi9cbiAgX2NyZWF0ZVBvb2w6IGZ1bmN0aW9uKHNpemUpIHtcbiAgICB0aGlzLl9lbnN1cmVUZW1wbGF0aXplZCgpO1xuICAgIHZhciBpLCBpbnN0O1xuICAgIHZhciBwaHlzaWNhbEl0ZW1zID0gbmV3IEFycmF5KHNpemUpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIGluc3QgPSB0aGlzLnN0YW1wKG51bGwpO1xuICAgICAgLy8gVE9ETyhibGFzdGVuKTpcbiAgICAgIC8vIEZpcnN0IGVsZW1lbnQgY2hpbGQgaXMgaXRlbTsgU2FmYXJpIGRvZXNuJ3Qgc3VwcG9ydCBjaGlsZHJlblswXVxuICAgICAgLy8gb24gYSBkb2MgZnJhZ21lbnQuIFRlc3QgdGhpcyB0byBzZWUgaWYgaXQgc3RpbGwgbWF0dGVycy5cbiAgICAgIHBoeXNpY2FsSXRlbXNbaV0gPSBpbnN0LnJvb3QucXVlcnlTZWxlY3RvcignKicpO1xuICAgICAgdGhpcy5faXRlbXNQYXJlbnQuYXBwZW5kQ2hpbGQoaW5zdC5yb290KTtcbiAgICB9XG4gICAgcmV0dXJuIHBoeXNpY2FsSXRlbXM7XG4gIH0sXG5cbiAgX2lzQ2xpZW50RnVsbDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEJvdHRvbSAhPSAwICYmXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQm90dG9tIC0gMSA+PSB0aGlzLl9zY3JvbGxCb3R0b20gJiZcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPD0gdGhpcy5fc2Nyb2xsUG9zaXRpb247XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluY3JlYXNlcyB0aGUgcG9vbCBzaXplLlxuICAgKi9cbiAgX2luY3JlYXNlUG9vbElmTmVlZGVkOiBmdW5jdGlvbihjb3VudCkge1xuICAgIHZhciBuZXh0UGh5c2ljYWxDb3VudCA9IHRoaXMuX2NsYW1wKFxuICAgICAgICB0aGlzLl9waHlzaWNhbENvdW50ICsgY291bnQsXG4gICAgICAgIERFRkFVTFRfUEhZU0lDQUxfQ09VTlQsXG4gICAgICAgIHRoaXMuX3ZpcnR1YWxDb3VudCAtIHRoaXMuX3ZpcnR1YWxTdGFydCk7XG4gICAgbmV4dFBoeXNpY2FsQ291bnQgPSB0aGlzLl9jb252ZXJ0SW5kZXhUb0NvbXBsZXRlUm93KG5leHRQaHlzaWNhbENvdW50KTtcbiAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICB2YXIgY29ycmVjdGlvbiA9IG5leHRQaHlzaWNhbENvdW50ICUgdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICBpZiAoY29ycmVjdGlvbiAmJiBuZXh0UGh5c2ljYWxDb3VudCAtIGNvcnJlY3Rpb24gPD0gdGhpcy5fcGh5c2ljYWxDb3VudCkge1xuICAgICAgICBuZXh0UGh5c2ljYWxDb3VudCArPSB0aGlzLl9pdGVtc1BlclJvdztcbiAgICAgIH1cbiAgICAgIG5leHRQaHlzaWNhbENvdW50IC09IGNvcnJlY3Rpb247XG4gICAgfVxuICAgIHZhciBkZWx0YSA9IG5leHRQaHlzaWNhbENvdW50IC0gdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICB2YXIgbmV4dEluY3JlYXNlID0gTWF0aC5yb3VuZCh0aGlzLl9waHlzaWNhbENvdW50ICogMC41KTtcblxuICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgdmFyIHRzID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgLy8gQ29uY2F0IGFycmF5cyBpbiBwbGFjZS5cbiAgICAgIFtdLnB1c2guYXBwbHkodGhpcy5fcGh5c2ljYWxJdGVtcywgdGhpcy5fY3JlYXRlUG9vbChkZWx0YSkpO1xuICAgICAgLy8gUHVzaCAwcyBpbnRvIHBoeXNpY2FsU2l6ZXMuIENhbid0IHVzZSBBcnJheS5maWxsIGJlY2F1c2UgSUUxMSBkb2Vzbid0XG4gICAgICAvLyBzdXBwb3J0IGl0LlxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWx0YTsgaSsrKSB7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZXMucHVzaCgwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQgPSB0aGlzLl9waHlzaWNhbENvdW50ICsgZGVsdGE7XG4gICAgICAvLyBVcGRhdGUgdGhlIHBoeXNpY2FsIHN0YXJ0IGlmIGl0IG5lZWRzIHRvIHByZXNlcnZlIHRoZSBtb2RlbCBvZiB0aGVcbiAgICAgIC8vIGZvY3VzZWQgaXRlbS4gSW4gdGhpcyBzaXR1YXRpb24sIHRoZSBmb2N1c2VkIGl0ZW0gaXMgY3VycmVudGx5IHJlbmRlcmVkXG4gICAgICAvLyBhbmQgaXRzIG1vZGVsIHdvdWxkIGhhdmUgY2hhbmdlZCBhZnRlciBpbmNyZWFzaW5nIHRoZSBwb29sIGlmIHRoZVxuICAgICAgLy8gcGh5c2ljYWwgc3RhcnQgcmVtYWluZWQgdW5jaGFuZ2VkLlxuICAgICAgaWYgKHRoaXMuX3BoeXNpY2FsU3RhcnQgPiB0aGlzLl9waHlzaWNhbEVuZCAmJlxuICAgICAgICAgIHRoaXMuX2lzSW5kZXhSZW5kZXJlZCh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4KSAmJlxuICAgICAgICAgIHRoaXMuX2dldFBoeXNpY2FsSW5kZXgodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCkgPFxuICAgICAgICAgICAgICB0aGlzLl9waHlzaWNhbEVuZCkge1xuICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCArIGRlbHRhO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUNvc3QgPSAod2luZG93LnBlcmZvcm1hbmNlLm5vdygpIC0gdHMpIC8gZGVsdGE7XG4gICAgICBuZXh0SW5jcmVhc2UgPSBNYXRoLnJvdW5kKHRoaXMuX3BoeXNpY2FsQ291bnQgKiAwLjUpO1xuICAgIH1cbiAgICAvLyBUaGUgdXBwZXIgYm91bmRzIGlzIG5vdCBmaXhlZCB3aGVuIGRlYWxpbmcgd2l0aCBhIGdyaWQgdGhhdCBkb2Vzbid0XG4gICAgLy8gZmlsbCBpdCdzIGxhc3Qgcm93IHdpdGggdGhlIGV4YWN0IG51bWJlciBvZiBpdGVtcyBwZXIgcm93LlxuICAgIGlmICh0aGlzLl92aXJ0dWFsRW5kID49IHRoaXMuX3ZpcnR1YWxDb3VudCAtIDEgfHwgbmV4dEluY3JlYXNlID09PSAwKSB7XG4gICAgICAvLyBEbyBub3RoaW5nLlxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzQ2xpZW50RnVsbCgpKSB7XG4gICAgICB0aGlzLl9kZWJvdW5jZShcbiAgICAgICAgICAnX2luY3JlYXNlUG9vbElmTmVlZGVkJyxcbiAgICAgICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZC5iaW5kKHRoaXMsIG5leHRJbmNyZWFzZSksXG4gICAgICAgICAgTUlDUk9fVEFTSyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9waHlzaWNhbFNpemUgPCB0aGlzLl9vcHRQaHlzaWNhbFNpemUpIHtcbiAgICAgIC8vIFlpZWxkIGFuZCBpbmNyZWFzZSB0aGUgcG9vbCBkdXJpbmcgaWRsZSB0aW1lIHVudGlsIHRoZSBwaHlzaWNhbCBzaXplIGlzXG4gICAgICAvLyBvcHRpbWFsLlxuICAgICAgdGhpcy5fZGVib3VuY2UoXG4gICAgICAgICAgJ19pbmNyZWFzZVBvb2xJZk5lZWRlZCcsXG4gICAgICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQuYmluZChcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgdGhpcy5fY2xhbXAoXG4gICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKDUwIC8gdGhpcy5fdGVtcGxhdGVDb3N0KSwgMSwgbmV4dEluY3JlYXNlKSksXG4gICAgICAgICAgSURMRV9USU1FKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGEgbmV3IGxpc3QuXG4gICAqL1xuICBfcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCB8fCAhdGhpcy5faXNWaXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9waHlzaWNhbENvdW50ICE9PSAwKSB7XG4gICAgICB2YXIgcmV1c2FibGVzID0gdGhpcy5fZ2V0UmV1c2FibGVzKHRydWUpO1xuICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSByZXVzYWJsZXMucGh5c2ljYWxUb3A7XG4gICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQgKyByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCArIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgIHRoaXMuX3VwZGF0ZShyZXVzYWJsZXMuaW5kZXhlcyk7XG4gICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkKDApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdmlydHVhbENvdW50ID4gMCkge1xuICAgICAgLy8gSW5pdGlhbCByZW5kZXJcbiAgICAgIHRoaXMudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZChERUZBVUxUX1BIWVNJQ0FMX0NPVU5UKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRlbXBsZXRpemVzIHRoZSB1c2VyIHRlbXBsYXRlLlxuICAgKi9cbiAgX2Vuc3VyZVRlbXBsYXRpemVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3VzZXJUZW1wbGF0ZSA9IHRoaXMucXVlcnlFZmZlY3RpdmVDaGlsZHJlbigndGVtcGxhdGUnKTtcbiAgICBpZiAoIXRoaXMuX3VzZXJUZW1wbGF0ZSkge1xuICAgICAgY29uc29sZS53YXJuKCdpcm9uLWxpc3QgcmVxdWlyZXMgYSB0ZW1wbGF0ZSB0byBiZSBwcm92aWRlZCBpbiBsaWdodC1kb20nKTtcbiAgICB9XG4gICAgdmFyIGluc3RhbmNlUHJvcHMgPSB7fTtcbiAgICBpbnN0YW5jZVByb3BzLl9fa2V5X18gPSB0cnVlO1xuICAgIGluc3RhbmNlUHJvcHNbdGhpcy5hc10gPSB0cnVlO1xuICAgIGluc3RhbmNlUHJvcHNbdGhpcy5pbmRleEFzXSA9IHRydWU7XG4gICAgaW5zdGFuY2VQcm9wc1t0aGlzLnNlbGVjdGVkQXNdID0gdHJ1ZTtcbiAgICBpbnN0YW5jZVByb3BzLnRhYkluZGV4ID0gdHJ1ZTtcbiAgICB0aGlzLl9pbnN0YW5jZVByb3BzID0gaW5zdGFuY2VQcm9wcztcbiAgICB0aGlzLnRlbXBsYXRpemUodGhpcy5fdXNlclRlbXBsYXRlLCB0aGlzLm11dGFibGVEYXRhKTtcbiAgfSxcblxuICBfZ3JpZENoYW5nZWQ6IGZ1bmN0aW9uKG5ld0dyaWQsIG9sZEdyaWQpIHtcbiAgICBpZiAodHlwZW9mIG9sZEdyaWQgPT09ICd1bmRlZmluZWQnKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5UmVzaXplKCk7XG4gICAgZmx1c2ggPyBmbHVzaCgpIDogZmx1c2gkMCgpO1xuICAgIG5ld0dyaWQgJiYgdGhpcy5fdXBkYXRlR3JpZE1ldHJpY3MoKTtcbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGl0ZW1zIGhhdmUgY2hhbmdlZC4gVGhhdCBpcywgcmVhc3NpZ25tZW50c1xuICAgKiB0byBgaXRlbXNgLCBzcGxpY2VzIG9yIHVwZGF0ZXMgdG8gYSBzaW5nbGUgaXRlbS5cbiAgICovXG4gIF9pdGVtc0NoYW5nZWQ6IGZ1bmN0aW9uKGNoYW5nZSkge1xuICAgIGlmIChjaGFuZ2UucGF0aCA9PT0gJ2l0ZW1zJykge1xuICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gMDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gMDtcbiAgICAgIHRoaXMuX3ZpcnR1YWxDb3VudCA9IHRoaXMuaXRlbXMgPyB0aGlzLml0ZW1zLmxlbmd0aCA6IDA7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uID1cbiAgICAgICAgICB0aGlzLml0ZW1zICYmIHVuZGVmaW5lZCA/IHVuZGVmaW5lZC5nZXQodGhpcy5pdGVtcykgOiBudWxsO1xuICAgICAgdGhpcy5fcGh5c2ljYWxJbmRleEZvcktleSA9IHt9O1xuICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9waHlzaWNhbENvdW50ID0gdGhpcy5fcGh5c2ljYWxDb3VudCB8fCAwO1xuICAgICAgdGhpcy5fcGh5c2ljYWxJdGVtcyA9IHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW107XG4gICAgICB0aGlzLl9waHlzaWNhbFNpemVzID0gdGhpcy5fcGh5c2ljYWxTaXplcyB8fCBbXTtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSAwO1xuICAgICAgaWYgKHRoaXMuX3Njcm9sbFRvcCA+IHRoaXMuX3Njcm9sbE9mZnNldCkge1xuICAgICAgICB0aGlzLl9yZXNldFNjcm9sbFBvc2l0aW9uKDApO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVtb3ZlRm9jdXNlZEl0ZW0oKTtcbiAgICAgIHRoaXMuX2RlYm91bmNlKCdfcmVuZGVyJywgdGhpcy5fcmVuZGVyLCBBTklNQVRJT05fRlJBTUUpO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnBhdGggPT09ICdpdGVtcy5zcGxpY2VzJykge1xuICAgICAgdGhpcy5fYWRqdXN0VmlydHVhbEluZGV4KGNoYW5nZS52YWx1ZS5pbmRleFNwbGljZXMpO1xuICAgICAgdGhpcy5fdmlydHVhbENvdW50ID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMubGVuZ3RoIDogMDtcbiAgICAgIC8vIE9ubHkgYmx1ciBpZiBhdCBsZWFzdCBvbmUgaXRlbSBpcyBhZGRlZCBvciByZW1vdmVkLlxuICAgICAgdmFyIGl0ZW1BZGRlZE9yUmVtb3ZlZCA9IGNoYW5nZS52YWx1ZS5pbmRleFNwbGljZXMuc29tZShmdW5jdGlvbihzcGxpY2UpIHtcbiAgICAgICAgcmV0dXJuIHNwbGljZS5hZGRlZENvdW50ID4gMCB8fCBzcGxpY2UucmVtb3ZlZC5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgICBpZiAoaXRlbUFkZGVkT3JSZW1vdmVkKSB7XG4gICAgICAgIC8vIE9ubHkgYmx1ciBhY3RpdmVFbGVtZW50IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiB0aGUgbGlzdCAoIzUwNSxcbiAgICAgICAgLy8gIzUwNykuXG4gICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZ2V0QWN0aXZlRWxlbWVudCgpO1xuICAgICAgICBpZiAodGhpcy5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBSZW5kZXIgb25seSBpZiB0aGUgYWZmZWN0ZWQgaW5kZXggaXMgcmVuZGVyZWQuXG4gICAgICB2YXIgYWZmZWN0ZWRJbmRleFJlbmRlcmVkID1cbiAgICAgICAgICBjaGFuZ2UudmFsdWUuaW5kZXhTcGxpY2VzLnNvbWUoZnVuY3Rpb24oc3BsaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3BsaWNlLmluZGV4ICsgc3BsaWNlLmFkZGVkQ291bnQgPj0gdGhpcy5fdmlydHVhbFN0YXJ0ICYmXG4gICAgICAgICAgICAgICAgc3BsaWNlLmluZGV4IDw9IHRoaXMuX3ZpcnR1YWxFbmQ7XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICBpZiAoIXRoaXMuX2lzQ2xpZW50RnVsbCgpIHx8IGFmZmVjdGVkSW5kZXhSZW5kZXJlZCkge1xuICAgICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgQU5JTUFUSU9OX0ZSQU1FKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5wYXRoICE9PSAnaXRlbXMubGVuZ3RoJykge1xuICAgICAgdGhpcy5fZm9yd2FyZEl0ZW1QYXRoKGNoYW5nZS5wYXRoLCBjaGFuZ2UudmFsdWUpO1xuICAgIH1cbiAgfSxcblxuICBfZm9yd2FyZEl0ZW1QYXRoOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKDYpOyAgLy8gJ2l0ZW1zLicubGVuZ3RoID09IDZcbiAgICB2YXIgZG90ID0gcGF0aC5pbmRleE9mKCcuJyk7XG4gICAgaWYgKGRvdCA9PT0gLTEpIHtcbiAgICAgIGRvdCA9IHBhdGgubGVuZ3RoO1xuICAgIH1cbiAgICB2YXIgaXNJbmRleFJlbmRlcmVkO1xuICAgIHZhciBwaWR4O1xuICAgIHZhciBpbnN0O1xuICAgIHZhciBvZmZzY3JlZW5JbnN0YW5jZSA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKTtcbiAgICBpZiAoSVNfVjIpIHtcbiAgICAgIHZhciB2aWR4ID0gcGFyc2VJbnQocGF0aC5zdWJzdHJpbmcoMCwgZG90KSwgMTApO1xuICAgICAgaXNJbmRleFJlbmRlcmVkID0gdGhpcy5faXNJbmRleFJlbmRlcmVkKHZpZHgpO1xuICAgICAgaWYgKGlzSW5kZXhSZW5kZXJlZCkge1xuICAgICAgICBwaWR4ID0gdGhpcy5fZ2V0UGh5c2ljYWxJbmRleCh2aWR4KTtcbiAgICAgICAgaW5zdCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pO1xuICAgICAgfSBlbHNlIGlmIChvZmZzY3JlZW5JbnN0YW5jZSkge1xuICAgICAgICBpbnN0ID0gb2Zmc2NyZWVuSW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIGlmICghaW5zdCB8fCBpbnN0W3RoaXMuaW5kZXhBc10gIT09IHZpZHgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBQb2x5bWVyIDEueCAtIGdldCBwaHlzaWNhbCBpbnN0YW5jZSBieSBrZXkgKGAjMWApLCBub3QgaW5kZXguXG4gICAgICB2YXIga2V5ID0gcGF0aC5zdWJzdHJpbmcoMCwgZG90KTtcbiAgICAgIGlmIChvZmZzY3JlZW5JbnN0YW5jZSAmJiBvZmZzY3JlZW5JbnN0YW5jZS5fX2tleV9fID09PSBrZXkpIHtcbiAgICAgICAgaW5zdCA9IG9mZnNjcmVlbkluc3RhbmNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGlkeCA9IHRoaXMuX3BoeXNpY2FsSW5kZXhGb3JLZXlba2V5XTtcbiAgICAgICAgaW5zdCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pO1xuXG4gICAgICAgIGlmICghaW5zdCB8fCBpbnN0Ll9fa2V5X18gIT09IGtleSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoZG90ICsgMSk7XG4gICAgcGF0aCA9IHRoaXMuYXMgKyAocGF0aCA/ICcuJyArIHBhdGggOiAnJyk7XG4gICAgSVNfVjIgPyBpbnN0Ll9zZXRQZW5kaW5nUHJvcGVydHlPclBhdGgocGF0aCwgdmFsdWUsIGZhbHNlLCB0cnVlKSA6XG4gICAgICAgICAgICBpbnN0Lm5vdGlmeVBhdGgocGF0aCwgdmFsdWUsIHRydWUpO1xuICAgIGluc3QuX2ZsdXNoUHJvcGVydGllcyAmJiBpbnN0Ll9mbHVzaFByb3BlcnRpZXModHJ1ZSk7XG4gICAgLy8gVE9ETyhibGFzdGVuKTogVjEgZG9lc24ndCBkbyB0aGlzIGFuZCBpdCdzIGEgYnVnXG4gICAgaWYgKGlzSW5kZXhSZW5kZXJlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlTWV0cmljcyhbcGlkeF0pO1xuICAgICAgdGhpcy5fcG9zaXRpb25JdGVtcygpO1xuICAgICAgdGhpcy5fdXBkYXRlU2Nyb2xsZXJTaXplKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFBcnJheTwhUG9seW1lclNwbGljZT59IHNwbGljZXNcbiAgICovXG4gIF9hZGp1c3RWaXJ0dWFsSW5kZXg6IGZ1bmN0aW9uKHNwbGljZXMpIHtcbiAgICBzcGxpY2VzLmZvckVhY2goZnVuY3Rpb24oc3BsaWNlKSB7XG4gICAgICAvLyBkZXNlbGVjdCByZW1vdmVkIGl0ZW1zXG4gICAgICBzcGxpY2UucmVtb3ZlZC5mb3JFYWNoKHRoaXMuX3JlbW92ZUl0ZW0sIHRoaXMpO1xuICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIGNhcmUgYWJvdXQgY2hhbmdlcyBoYXBwZW5pbmcgYWJvdmUgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgIGlmIChzcGxpY2UuaW5kZXggPCB0aGlzLl92aXJ0dWFsU3RhcnQpIHtcbiAgICAgICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoXG4gICAgICAgICAgICBzcGxpY2UuYWRkZWRDb3VudCAtIHNwbGljZS5yZW1vdmVkLmxlbmd0aCxcbiAgICAgICAgICAgIHNwbGljZS5pbmRleCAtIHRoaXMuX3ZpcnR1YWxTdGFydCk7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCArIGRlbHRhO1xuICAgICAgICBpZiAodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyBkZWx0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9LFxuXG4gIF9yZW1vdmVJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgdGhpcy4kLnNlbGVjdG9yLmRlc2VsZWN0KGl0ZW0pO1xuICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCBmb2N1c2VkIGl0ZW1cbiAgICBpZiAodGhpcy5fZm9jdXNlZEl0ZW0gJiZcbiAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fZm9jdXNlZEl0ZW0pW3RoaXMuYXNdID09PSBpdGVtKSB7XG4gICAgICB0aGlzLl9yZW1vdmVGb2N1c2VkSXRlbSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRXhlY3V0ZXMgYSBwcm92aWRlZCBmdW5jdGlvbiBwZXIgZXZlcnkgcGh5c2ljYWwgaW5kZXggaW4gYGl0ZW1TZXRgXG4gICAqIGBpdGVtU2V0YCBkZWZhdWx0IHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGVudGlyZSBzZXQgb2YgcGh5c2ljYWxcbiAgICogaW5kZXhlcy5cbiAgICpcbiAgICogQHBhcmFtIHshZnVuY3Rpb24obnVtYmVyLCBudW1iZXIpfSBmblxuICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgKi9cbiAgX2l0ZXJhdGVJdGVtczogZnVuY3Rpb24oZm4sIGl0ZW1TZXQpIHtcbiAgICB2YXIgcGlkeCwgdmlkeCwgcnRuLCBpO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgaXRlbVNldCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1TZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGlkeCA9IGl0ZW1TZXRbaV07XG4gICAgICAgIHZpZHggPSB0aGlzLl9jb21wdXRlVmlkeChwaWR4KTtcbiAgICAgICAgaWYgKChydG4gPSBmbi5jYWxsKHRoaXMsIHBpZHgsIHZpZHgpKSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHJ0bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwaWR4ID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgIHZpZHggPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgICBmb3IgKDsgcGlkeCA8IHRoaXMuX3BoeXNpY2FsQ291bnQ7IHBpZHgrKywgdmlkeCsrKSB7XG4gICAgICAgIGlmICgocnRuID0gZm4uY2FsbCh0aGlzLCBwaWR4LCB2aWR4KSkgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAocGlkeCA9IDA7IHBpZHggPCB0aGlzLl9waHlzaWNhbFN0YXJ0OyBwaWR4KyssIHZpZHgrKykge1xuICAgICAgICBpZiAoKHJ0biA9IGZuLmNhbGwodGhpcywgcGlkeCwgdmlkeCkpICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gcnRuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2aXJ0dWFsIGluZGV4IGZvciBhIGdpdmVuIHBoeXNpY2FsIGluZGV4XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwaWR4IFBoeXNpY2FsIGluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIF9jb21wdXRlVmlkeDogZnVuY3Rpb24ocGlkeCkge1xuICAgIGlmIChwaWR4ID49IHRoaXMuX3BoeXNpY2FsU3RhcnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnQgKyAocGlkeCAtIHRoaXMuX3BoeXNpY2FsU3RhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbFN0YXJ0ICsgKHRoaXMuX3BoeXNpY2FsQ291bnQgLSB0aGlzLl9waHlzaWNhbFN0YXJ0KSArXG4gICAgICAgIHBpZHg7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFzc2lnbnMgdGhlIGRhdGEgbW9kZWxzIHRvIGEgZ2l2ZW4gc2V0IG9mIGl0ZW1zLlxuICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgKi9cbiAgX2Fzc2lnbk1vZGVsczogZnVuY3Rpb24oaXRlbVNldCkge1xuICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICB2YXIgZWwgPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdO1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXNbdmlkeF07XG4gICAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBpbnN0ID0gdGhpcy5tb2RlbEZvckVsZW1lbnQoZWwpO1xuICAgICAgICBpbnN0Ll9fa2V5X18gPSB0aGlzLl9jb2xsZWN0aW9uID8gdGhpcy5fY29sbGVjdGlvbi5nZXRLZXkoaXRlbSkgOiBudWxsO1xuICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoaW5zdCwgdGhpcy5hcywgaXRlbSk7XG4gICAgICAgIHRoaXMuX2ZvcndhcmRQcm9wZXJ0eShcbiAgICAgICAgICAgIGluc3QsIHRoaXMuc2VsZWN0ZWRBcywgdGhpcy4kLnNlbGVjdG9yLmlzU2VsZWN0ZWQoaXRlbSkpO1xuICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoaW5zdCwgdGhpcy5pbmRleEFzLCB2aWR4KTtcbiAgICAgICAgdGhpcy5fZm9yd2FyZFByb3BlcnR5KFxuICAgICAgICAgICAgaW5zdCwgJ3RhYkluZGV4JywgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9PT0gdmlkeCA/IDAgOiAtMSk7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsSW5kZXhGb3JLZXlbaW5zdC5fX2tleV9fXSA9IHBpZHg7XG4gICAgICAgIGluc3QuX2ZsdXNoUHJvcGVydGllcyAmJiBpbnN0Ll9mbHVzaFByb3BlcnRpZXModHJ1ZSk7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgIH1cbiAgICB9LCBpdGVtU2V0KTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgaGVpZ2h0IGZvciBhIGdpdmVuIHNldCBvZiBpdGVtcy5cbiAgICpcbiAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPj19IGl0ZW1TZXRcbiAgICovXG4gIF91cGRhdGVNZXRyaWNzOiBmdW5jdGlvbihpdGVtU2V0KSB7XG4gICAgLy8gTWFrZSBzdXJlIHdlIGRpc3RyaWJ1dGVkIGFsbCB0aGUgcGh5c2ljYWwgaXRlbXNcbiAgICAvLyBzbyB3ZSBjYW4gbWVhc3VyZSB0aGVtLlxuICAgIGZsdXNoID8gZmx1c2goKSA6IGZsdXNoJDAoKTtcblxuICAgIHZhciBuZXdQaHlzaWNhbFNpemUgPSAwO1xuICAgIHZhciBvbGRQaHlzaWNhbFNpemUgPSAwO1xuICAgIHZhciBwcmV2QXZnQ291bnQgPSB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudDtcbiAgICB2YXIgcHJldlBoeXNpY2FsQXZnID0gdGhpcy5fcGh5c2ljYWxBdmVyYWdlO1xuXG4gICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgIG9sZFBoeXNpY2FsU2l6ZSArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgICAgdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgbmV3UGh5c2ljYWxTaXplICs9IHRoaXMuX3BoeXNpY2FsU2l6ZXNbcGlkeF07XG4gICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdID8gMSA6IDA7XG4gICAgfSwgaXRlbVNldCk7XG5cbiAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICB0aGlzLl91cGRhdGVHcmlkTWV0cmljcygpO1xuICAgICAgdGhpcy5fcGh5c2ljYWxTaXplID1cbiAgICAgICAgICBNYXRoLmNlaWwodGhpcy5fcGh5c2ljYWxDb3VudCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAqIHRoaXMuX3Jvd0hlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkUGh5c2ljYWxTaXplID0gKHRoaXMuX2l0ZW1zUGVyUm93ID09PSAxKSA/XG4gICAgICAgICAgb2xkUGh5c2ljYWxTaXplIDpcbiAgICAgICAgICBNYXRoLmNlaWwodGhpcy5fcGh5c2ljYWxDb3VudCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAqIHRoaXMuX3Jvd0hlaWdodDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZSA9XG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxTaXplICsgbmV3UGh5c2ljYWxTaXplIC0gb2xkUGh5c2ljYWxTaXplO1xuICAgICAgdGhpcy5faXRlbXNQZXJSb3cgPSAxO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIGF2ZXJhZ2UgaWYgaXQgbWVhc3VyZWQgc29tZXRoaW5nLlxuICAgIGlmICh0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCAhPT0gcHJldkF2Z0NvdW50KSB7XG4gICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2UgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICgocHJldlBoeXNpY2FsQXZnICogcHJldkF2Z0NvdW50KSArIG5ld1BoeXNpY2FsU2l6ZSkgL1xuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZUNvdW50KTtcbiAgICB9XG4gIH0sXG5cbiAgX3VwZGF0ZUdyaWRNZXRyaWNzOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9pdGVtV2lkdGggPSB0aGlzLl9waHlzaWNhbENvdW50ID4gMCA/XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOlxuICAgICAgICAyMDA7XG4gICAgdGhpcy5fcm93SGVpZ2h0ID1cbiAgICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudCA+IDAgPyB0aGlzLl9waHlzaWNhbEl0ZW1zWzBdLm9mZnNldEhlaWdodCA6IDIwMDtcbiAgICB0aGlzLl9pdGVtc1BlclJvdyA9IHRoaXMuX2l0ZW1XaWR0aCA/XG4gICAgICAgIE1hdGguZmxvb3IodGhpcy5fdmlld3BvcnRXaWR0aCAvIHRoaXMuX2l0ZW1XaWR0aCkgOlxuICAgICAgICB0aGlzLl9pdGVtc1BlclJvdztcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHBoeXNpY2FsIGl0ZW1zLlxuICAgKi9cbiAgX3Bvc2l0aW9uSXRlbXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2FkanVzdFNjcm9sbFBvc2l0aW9uKCk7XG5cbiAgICB2YXIgeSA9IHRoaXMuX3BoeXNpY2FsVG9wO1xuXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdmFyIHRvdGFsSXRlbVdpZHRoID0gdGhpcy5faXRlbXNQZXJSb3cgKiB0aGlzLl9pdGVtV2lkdGg7XG4gICAgICB2YXIgcm93T2Zmc2V0ID0gKHRoaXMuX3ZpZXdwb3J0V2lkdGggLSB0b3RhbEl0ZW1XaWR0aCkgLyAyO1xuXG4gICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICB2YXIgbW9kdWx1cyA9IHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdztcbiAgICAgICAgdmFyIHggPSBNYXRoLmZsb29yKChtb2R1bHVzICogdGhpcy5faXRlbVdpZHRoKSArIHJvd09mZnNldCk7XG4gICAgICAgIGlmICh0aGlzLl9pc1JUTCkge1xuICAgICAgICAgIHggPSB4ICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2xhdGUzZCh4ICsgJ3B4JywgeSArICdweCcsIDAsIHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pO1xuICAgICAgICBpZiAodGhpcy5fc2hvdWxkUmVuZGVyTmV4dFJvdyh2aWR4KSkge1xuICAgICAgICAgIHkgKz0gdGhpcy5fcm93SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUzZCgwLCB5ICsgJ3B4JywgMCwgdGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XSk7XG4gICAgICAgIHkgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBfZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50OiBmdW5jdGlvbihwaWR4KSB7XG4gICAgaWYgKCF0aGlzLmdyaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcHV0ZVZpZHgocGlkeCkgJSB0aGlzLl9pdGVtc1BlclJvdyAhPT0gdGhpcy5faXRlbXNQZXJSb3cgLSAxKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Jvd0hlaWdodDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucywgYmFzZWQgb24gdGhlIGN1cnJlbnQgaW5kZXgsXG4gICAqIHdoZXRoZXIgb3Igbm90IHRoZSBuZXh0IGluZGV4IHdpbGwgbmVlZFxuICAgKiB0byBiZSByZW5kZXJlZCBvbiBhIG5ldyByb3cuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2aWR4IFZpcnR1YWwgaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIF9zaG91bGRSZW5kZXJOZXh0Um93OiBmdW5jdGlvbih2aWR4KSB7XG4gICAgcmV0dXJuIHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdyA9PT0gdGhpcy5faXRlbXNQZXJSb3cgLSAxO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzY3JvbGwgcG9zaXRpb24gd2hlbiBpdCB3YXMgb3ZlcmVzdGltYXRlZC5cbiAgICovXG4gIF9hZGp1c3RTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlbHRhSGVpZ2h0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ID09PSAwID9cbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgOlxuICAgICAgICBNYXRoLm1pbih0aGlzLl9zY3JvbGxQb3NpdGlvbiArIHRoaXMuX3BoeXNpY2FsVG9wLCAwKTtcbiAgICAvLyBOb3RlOiB0aGUgZGVsdGEgY2FuIGJlIHBvc2l0aXZlIG9yIG5lZ2F0aXZlLlxuICAgIGlmIChkZWx0YUhlaWdodCAhPT0gMCkge1xuICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSB0aGlzLl9waHlzaWNhbFRvcCAtIGRlbHRhSGVpZ2h0O1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuX3Njcm9sbFRvcDtcbiAgICAgIC8vIGp1a2luZyBzY3JvbGwgcG9zaXRpb24gZHVyaW5nIGludGVyaWFsIHNjcm9sbGluZyBvbiBpT1MgaXMgbm8gYnVlbm9cbiAgICAgIGlmICghSU9TX1RPVUNIX1NDUk9MTElORyAmJiBzY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsVG9wIC0gZGVsdGFIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbC5cbiAgICovXG4gIF9yZXNldFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbihwb3MpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxUYXJnZXQgJiYgcG9zID49IDApIHtcbiAgICAgIHRoaXMuX3Njcm9sbFRvcCA9IHBvcztcbiAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVG9wO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgc2Nyb2xsIGhlaWdodCwgdGhhdCdzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRlbnQsXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlVXBkYXRlIElmIHRydWUsIHVwZGF0ZXMgdGhlIGhlaWdodCBubyBtYXR0ZXIgd2hhdC5cbiAgICovXG4gIF91cGRhdGVTY3JvbGxlclNpemU6IGZ1bmN0aW9uKGZvcmNlVXBkYXRlKSB7XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0ID0gdGhpcy5fdmlydHVhbFJvd0NvdW50ICogdGhpcy5fcm93SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgPVxuICAgICAgICAgICh0aGlzLl9waHlzaWNhbEJvdHRvbSArXG4gICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgdGhpcy5fdmlydHVhbENvdW50IC0gdGhpcy5fcGh5c2ljYWxDb3VudCAtIHRoaXMuX3ZpcnR1YWxTdGFydCxcbiAgICAgICAgICAgICAgIDApICpcbiAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSk7XG4gICAgfVxuICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHwgdGhpcy5fc2Nyb2xsSGVpZ2h0ID09PSAwO1xuICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHxcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPj0gdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0IC0gdGhpcy5fcGh5c2ljYWxTaXplO1xuICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHxcbiAgICAgICAgdGhpcy5ncmlkICYmIHRoaXMuJC5pdGVtcy5zdHlsZS5oZWlnaHQgPCB0aGlzLl9lc3RTY3JvbGxIZWlnaHQ7XG4gICAgLy8gQW1vcnRpemUgaGVpZ2h0IGFkanVzdG1lbnQsIHNvIGl0IHdvbid0IHRyaWdnZXIgbGFyZ2UgcmVwYWludHMgdG9vIG9mdGVuLlxuICAgIGlmIChmb3JjZVVwZGF0ZSB8fFxuICAgICAgICBNYXRoLmFicyh0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl9zY3JvbGxIZWlnaHQpID49XG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydEhlaWdodCkge1xuICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLmhlaWdodCA9IHRoaXMuX2VzdFNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9lc3RTY3JvbGxIZWlnaHQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gYSBzcGVjaWZpYyBpdGVtIGluIHRoZSB2aXJ0dWFsIGxpc3QgcmVnYXJkbGVzc1xuICAgKiBvZiB0aGUgcGh5c2ljYWwgaXRlbXMgaW4gdGhlIERPTSB0cmVlLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcm9sbFRvSXRlbVxuICAgKiBAcGFyYW0geyhPYmplY3QpfSBpdGVtIFRoZSBpdGVtIHRvIGJlIHNjcm9sbGVkIHRvXG4gICAqL1xuICBzY3JvbGxUb0l0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxUb0luZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNjcm9sbCB0byBhIHNwZWNpZmljIGluZGV4IGluIHRoZSB2aXJ0dWFsIGxpc3QgcmVnYXJkbGVzc1xuICAgKiBvZiB0aGUgcGh5c2ljYWwgaXRlbXMgaW4gdGhlIERPTSB0cmVlLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcm9sbFRvSW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkeCBUaGUgaW5kZXggb2YgdGhlIGl0ZW1cbiAgICovXG4gIHNjcm9sbFRvSW5kZXg6IGZ1bmN0aW9uKGlkeCkge1xuICAgIGlmICh0eXBlb2YgaWR4ICE9PSAnbnVtYmVyJyB8fCBpZHggPCAwIHx8IGlkeCA+IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmbHVzaCA/IGZsdXNoKCkgOiBmbHVzaCQwKCk7XG4gICAgLy8gSXRlbXMgc2hvdWxkIGhhdmUgYmVlbiByZW5kZXJlZCBwcmlvciBzY3JvbGxpbmcgdG8gYW4gaW5kZXguXG4gICAgaWYgKHRoaXMuX3BoeXNpY2FsQ291bnQgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWR4ID0gdGhpcy5fY2xhbXAoaWR4LCAwLCB0aGlzLl92aXJ0dWFsQ291bnQgLSAxKTtcbiAgICAvLyBVcGRhdGUgdGhlIHZpcnR1YWwgc3RhcnQgb25seSB3aGVuIG5lZWRlZC5cbiAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpZHgpIHx8IGlkeCA+PSB0aGlzLl9tYXhWaXJ0dWFsU3RhcnQpIHtcbiAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9XG4gICAgICAgICAgdGhpcy5ncmlkID8gKGlkeCAtIHRoaXMuX2l0ZW1zUGVyUm93ICogMikgOiAoaWR4IC0gMSk7XG4gICAgfVxuICAgIHRoaXMuX21hbmFnZUZvY3VzKCk7XG4gICAgdGhpcy5fYXNzaWduTW9kZWxzKCk7XG4gICAgdGhpcy5fdXBkYXRlTWV0cmljcygpO1xuICAgIC8vIEVzdGltYXRlIG5ldyBwaHlzaWNhbCBvZmZzZXQuXG4gICAgdGhpcy5fcGh5c2ljYWxUb3AgPSBNYXRoLmZsb29yKHRoaXMuX3ZpcnR1YWxTdGFydCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAqXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZTtcblxuICAgIHZhciBjdXJyZW50VG9wSXRlbSA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgdmFyIGN1cnJlbnRWaXJ0dWFsSXRlbSA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICB2YXIgdGFyZ2V0T2Zmc2V0VG9wID0gMDtcbiAgICB2YXIgaGlkZGVuQ29udGVudFNpemUgPSB0aGlzLl9oaWRkZW5Db250ZW50U2l6ZTtcbiAgICAvLyBzY3JvbGwgdG8gdGhlIGl0ZW0gYXMgbXVjaCBhcyB3ZSBjYW4uXG4gICAgd2hpbGUgKGN1cnJlbnRWaXJ0dWFsSXRlbSA8IGlkeCAmJiB0YXJnZXRPZmZzZXRUb3AgPD0gaGlkZGVuQ29udGVudFNpemUpIHtcbiAgICAgIHRhcmdldE9mZnNldFRvcCA9XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0VG9wICsgdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KGN1cnJlbnRUb3BJdGVtKTtcbiAgICAgIGN1cnJlbnRUb3BJdGVtID0gKGN1cnJlbnRUb3BJdGVtICsgMSkgJSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgICAgY3VycmVudFZpcnR1YWxJdGVtKys7XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGVyU2l6ZSh0cnVlKTtcbiAgICB0aGlzLl9wb3NpdGlvbkl0ZW1zKCk7XG4gICAgdGhpcy5fcmVzZXRTY3JvbGxQb3NpdGlvbihcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9zY3JvbGxPZmZzZXQgKyB0YXJnZXRPZmZzZXRUb3ApO1xuICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkKDApO1xuICAgIC8vIGNsZWFyIGNhY2hlZCB2aXNpYmxlIGluZGV4LlxuICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogUmVzZXQgdGhlIHBoeXNpY2FsIGF2ZXJhZ2UgYW5kIHRoZSBhdmVyYWdlIGNvdW50LlxuICAgKi9cbiAgX3Jlc2V0QXZlcmFnZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlID0gMDtcbiAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCA9IDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgaGFuZGxlciBmb3IgdGhlIGBpcm9uLXJlc2l6ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ5IGBJcm9uUmVzaXphYmxlQmVoYXZpb3JgXG4gICAqIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVzaXplZC5cbiAgICovXG4gIF9yZXNpemVIYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gY2xlYXIgY2FjaGVkIHZpc2libGUgaW5kZXguXG4gICAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgIC8vIFNraXAgdGhlIHJlc2l6ZSBldmVudCBvbiB0b3VjaCBkZXZpY2VzIHdoZW4gdGhlIGFkZHJlc3MgYmFyIHNsaWRlcyB1cC5cbiAgICAgIHZhciBkZWx0YSA9IE1hdGguYWJzKHRoaXMuX3ZpZXdwb3J0SGVpZ2h0IC0gdGhpcy5fc2Nyb2xsVGFyZ2V0SGVpZ2h0KTtcbiAgICAgIHRoaXMudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgICBpZiAodGhpcy5faXNWaXNpYmxlKSB7XG4gICAgICAgIC8vIFJlaW5zdGFsbCB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICB0aGlzLnRvZ2dsZVNjcm9sbExpc3RlbmVyKHRydWUpO1xuICAgICAgICB0aGlzLl9yZXNldEF2ZXJhZ2UoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVbmluc3RhbGwgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgdGhpcy50b2dnbGVTY3JvbGxMaXN0ZW5lcihmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgQU5JTUFUSU9OX0ZSQU1FKTtcbiAgfSxcblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgZ2l2ZW4gaXRlbS5cbiAgICpcbiAgICogQG1ldGhvZCBzZWxlY3RJdGVtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIGluc3RhbmNlLlxuICAgKi9cbiAgc2VsZWN0SXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdEluZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICpcbiAgICogQG1ldGhvZCBzZWxlY3RJbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICovXG4gIHNlbGVjdEluZGV4OiBmdW5jdGlvbihpbmRleCkge1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5fdmlydHVhbENvdW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5tdWx0aVNlbGVjdGlvbiAmJiB0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNJbmRleFJlbmRlcmVkKGluZGV4KSkge1xuICAgICAgdmFyIG1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQoXG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGluZGV4KV0pO1xuICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgIG1vZGVsW3RoaXMuc2VsZWN0ZWRBc10gPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVTaXplRm9ySW5kZXgoaW5kZXgpO1xuICAgIH1cbiAgICBpZiAodGhpcy4kLnNlbGVjdG9yLnNlbGVjdEluZGV4KSB7XG4gICAgICAvLyB2MlxuICAgICAgdGhpcy4kLnNlbGVjdG9yLnNlbGVjdEluZGV4KGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdjFcbiAgICAgIHRoaXMuJC5zZWxlY3Rvci5zZWxlY3QodGhpcy5pdGVtc1tpbmRleF0pO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRGVzZWxlY3RzIHRoZSBnaXZlbiBpdGVtLlxuICAgKlxuICAgKiBAbWV0aG9kIGRlc2VsZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIGluc3RhbmNlLlxuICAgKi9cbiAgZGVzZWxlY3RJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzZWxlY3RJbmRleCh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZXNlbGVjdHMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICpcbiAgICogQG1ldGhvZCBkZXNlbGVjdEluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgKi9cbiAgZGVzZWxlY3RJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNJbmRleFJlbmRlcmVkKGluZGV4KSkge1xuICAgICAgdmFyIG1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQoXG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGluZGV4KV0pO1xuICAgICAgbW9kZWxbdGhpcy5zZWxlY3RlZEFzXSA9IGZhbHNlO1xuICAgICAgdGhpcy51cGRhdGVTaXplRm9ySW5kZXgoaW5kZXgpO1xuICAgIH1cbiAgICBpZiAodGhpcy4kLnNlbGVjdG9yLmRlc2VsZWN0SW5kZXgpIHtcbiAgICAgIC8vIHYyXG4gICAgICB0aGlzLiQuc2VsZWN0b3IuZGVzZWxlY3RJbmRleChpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHYxXG4gICAgICB0aGlzLiQuc2VsZWN0b3IuZGVzZWxlY3QodGhpcy5pdGVtc1tpbmRleF0pO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2VsZWN0cyBvciBkZXNlbGVjdHMgYSBnaXZlbiBpdGVtIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBpdGVtXG4gICAqIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBtZXRob2QgdG9nZ2xlU2VsZWN0aW9uRm9ySXRlbVxuICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSBvYmplY3QuXG4gICAqL1xuICB0b2dnbGVTZWxlY3Rpb25Gb3JJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMudG9nZ2xlU2VsZWN0aW9uRm9ySW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgfSxcblxuICAvKipcbiAgICogU2VsZWN0cyBvciBkZXNlbGVjdHMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBpdGVtcyBhcnJheVxuICAgKiBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgaXRlbSBoYXMgYWxyZWFkeSBiZWVuIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAbWV0aG9kIHRvZ2dsZVNlbGVjdGlvbkZvckluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgKi9cbiAgdG9nZ2xlU2VsZWN0aW9uRm9ySW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgdmFyIGlzU2VsZWN0ZWQgPSB0aGlzLiQuc2VsZWN0b3IuaXNJbmRleFNlbGVjdGVkID9cbiAgICAgICAgdGhpcy4kLnNlbGVjdG9yLmlzSW5kZXhTZWxlY3RlZChpbmRleCkgOlxuICAgICAgICB0aGlzLiQuc2VsZWN0b3IuaXNTZWxlY3RlZCh0aGlzLml0ZW1zW2luZGV4XSk7XG4gICAgaXNTZWxlY3RlZCA/IHRoaXMuZGVzZWxlY3RJbmRleChpbmRleCkgOiB0aGlzLnNlbGVjdEluZGV4KGluZGV4KTtcbiAgfSxcblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpbiB0aGUgbGlzdC5cbiAgICpcbiAgICogQG1ldGhvZCBjbGVhclNlbGVjdGlvblxuICAgKi9cbiAgY2xlYXJTZWxlY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdKVt0aGlzLnNlbGVjdGVkQXNdID0gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy4kLnNlbGVjdG9yLmNsZWFyU2VsZWN0aW9uKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBgdGFwYCBpZiBgc2VsZWN0aW9uRW5hYmxlZGAgaXMgdHJ1ZSxcbiAgICogaXQgd2lsbCByZW1vdmUgdGhlIGxpc3RlbmVyIG90aGVyd2lzZS5cbiAgICovXG4gIF9zZWxlY3Rpb25FbmFibGVkQ2hhbmdlZDogZnVuY3Rpb24oc2VsZWN0aW9uRW5hYmxlZCkge1xuICAgIHZhciBoYW5kbGVyID0gc2VsZWN0aW9uRW5hYmxlZCA/IHRoaXMubGlzdGVuIDogdGhpcy51bmxpc3RlbjtcbiAgICBoYW5kbGVyLmNhbGwodGhpcywgdGhpcywgJ3RhcCcsICdfc2VsZWN0aW9uSGFuZGxlcicpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3QgYW4gaXRlbSBmcm9tIGFuIGV2ZW50IG9iamVjdC5cbiAgICovXG4gIF9zZWxlY3Rpb25IYW5kbGVyOiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQoZS50YXJnZXQpO1xuICAgIGlmICghbW9kZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG1vZGVsVGFiSW5kZXgsIGFjdGl2ZUVsVGFiSW5kZXg7XG4gICAgdmFyIHRhcmdldCA9IGRvbShlKS5wYXRoWzBdO1xuICAgIHZhciBhY3RpdmVFbCA9IHRoaXMuX2dldEFjdGl2ZUVsZW1lbnQoKTtcbiAgICB2YXIgcGh5c2ljYWxJdGVtID1cbiAgICAgICAgdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9nZXRQaHlzaWNhbEluZGV4KG1vZGVsW3RoaXMuaW5kZXhBc10pXTtcbiAgICAvLyBTYWZhcmkgZG9lcyBub3QgZm9jdXMgY2VydGFpbiBmb3JtIGNvbnRyb2xzIHZpYSBtb3VzZVxuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMTgwNDNcbiAgICBpZiAodGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2lucHV0JyB8fCB0YXJnZXQubG9jYWxOYW1lID09PSAnYnV0dG9uJyB8fFxuICAgICAgICB0YXJnZXQubG9jYWxOYW1lID09PSAnc2VsZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTZXQgYSB0ZW1wb3JhcnkgdGFiaW5kZXhcbiAgICBtb2RlbFRhYkluZGV4ID0gbW9kZWwudGFiSW5kZXg7XG4gICAgbW9kZWwudGFiSW5kZXggPSBTRUNSRVRfVEFCSU5ERVg7XG4gICAgYWN0aXZlRWxUYWJJbmRleCA9IGFjdGl2ZUVsID8gYWN0aXZlRWwudGFiSW5kZXggOiAtMTtcbiAgICBtb2RlbC50YWJJbmRleCA9IG1vZGVsVGFiSW5kZXg7XG4gICAgLy8gT25seSBzZWxlY3QgdGhlIGl0ZW0gaWYgdGhlIHRhcCB3YXNuJ3Qgb24gYSBmb2N1c2FibGUgY2hpbGRcbiAgICAvLyBvciB0aGUgZWxlbWVudCBib3VuZCB0byBgdGFiSW5kZXhgXG4gICAgaWYgKGFjdGl2ZUVsICYmIHBoeXNpY2FsSXRlbSAhPT0gYWN0aXZlRWwgJiZcbiAgICAgICAgcGh5c2ljYWxJdGVtLmNvbnRhaW5zKGFjdGl2ZUVsKSAmJlxuICAgICAgICBhY3RpdmVFbFRhYkluZGV4ICE9PSBTRUNSRVRfVEFCSU5ERVgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVTZWxlY3Rpb25Gb3JJdGVtKG1vZGVsW3RoaXMuYXNdKTtcbiAgfSxcblxuICBfbXVsdGlTZWxlY3Rpb25DaGFuZ2VkOiBmdW5jdGlvbihtdWx0aVNlbGVjdGlvbikge1xuICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB0aGlzLiQuc2VsZWN0b3IubXVsdGkgPSBtdWx0aVNlbGVjdGlvbjtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc2l6ZSBvZiBhIGdpdmVuIGxpc3QgaXRlbS5cbiAgICpcbiAgICogQG1ldGhvZCB1cGRhdGVTaXplRm9ySXRlbVxuICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSBpbnN0YW5jZS5cbiAgICovXG4gIHVwZGF0ZVNpemVGb3JJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlU2l6ZUZvckluZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHNpemUgb2YgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICpcbiAgICogQG1ldGhvZCB1cGRhdGVTaXplRm9ySW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAqL1xuICB1cGRhdGVTaXplRm9ySW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLl9pc0luZGV4UmVuZGVyZWQoaW5kZXgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlTWV0cmljcyhbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpbmRleCldKTtcbiAgICB0aGlzLl9wb3NpdGlvbkl0ZW1zKCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSB0ZW1wb3JhcnkgYmFja2ZpbGwgaXRlbSBpbiB0aGUgcmVuZGVyZWQgcG9vbCBvZiBwaHlzaWNhbCBpdGVtc1xuICAgKiB0byByZXBsYWNlIHRoZSBtYWluIGZvY3VzZWQgaXRlbS4gVGhlIGZvY3VzZWQgaXRlbSBoYXMgdGFiSW5kZXggPSAwXG4gICAqIGFuZCBtaWdodCBiZSBjdXJyZW50bHkgZm9jdXNlZCBieSB0aGUgdXNlci5cbiAgICpcbiAgICogVGhpcyBkeW5hbWljIHJlcGxhY2VtZW50IGhlbHBzIHRvIHByZXNlcnZlIHRoZSBmb2N1cyBzdGF0ZS5cbiAgICovXG4gIF9tYW5hZ2VGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZpZHggPSB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4O1xuXG4gICAgaWYgKGZpZHggPj0gMCAmJiBmaWR4IDwgdGhpcy5fdmlydHVhbENvdW50KSB7XG4gICAgICAvLyBpZiBpdCdzIGEgdmFsaWQgaW5kZXgsIGNoZWNrIGlmIHRoYXQgaW5kZXggaXMgcmVuZGVyZWRcbiAgICAgIC8vIGluIGEgcGh5c2ljYWwgaXRlbS5cbiAgICAgIGlmICh0aGlzLl9pc0luZGV4UmVuZGVyZWQoZmlkeCkpIHtcbiAgICAgICAgdGhpcy5fcmVzdG9yZUZvY3VzZWRJdGVtKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jcmVhdGVGb2N1c0JhY2tmaWxsSXRlbSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fdmlydHVhbENvdW50ID4gMCAmJiB0aGlzLl9waHlzaWNhbENvdW50ID4gMCkge1xuICAgICAgLy8gb3RoZXJ3aXNlLCBhc3NpZ24gdGhlIGluaXRpYWwgZm9jdXNlZCBpbmRleC5cbiAgICAgIHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgICB0aGlzLl9mb2N1c2VkSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fcGh5c2ljYWxTdGFydF07XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHJhbmRvbSBpbmRleCB0byB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdGhhdCBjb21wbGV0ZXMgaXQncyByb3cuXG4gICAqIEFsbG93cyBmb3IgYmV0dGVyIG9yZGVyIGFuZCBmaWxsIGNvbXB1dGF0aW9uIHdoZW4gZ3JpZCA9PSB0cnVlLlxuICAgKi9cbiAgX2NvbnZlcnRJbmRleFRvQ29tcGxldGVSb3c6IGZ1bmN0aW9uKGlkeCkge1xuICAgIC8vIHdoZW4gZ3JpZCA9PSBmYWxzZSBfaXRlbVBlclJvdyBjYW4gYmUgdW5zZXQuXG4gICAgdGhpcy5faXRlbXNQZXJSb3cgPSB0aGlzLl9pdGVtc1BlclJvdyB8fCAxO1xuICAgIHJldHVybiB0aGlzLmdyaWQgPyBNYXRoLmNlaWwoaWR4IC8gdGhpcy5faXRlbXNQZXJSb3cpICogdGhpcy5faXRlbXNQZXJSb3cgOlxuICAgICAgICAgICAgICAgICAgICAgICBpZHg7XG4gIH0sXG5cbiAgX2lzSW5kZXhSZW5kZXJlZDogZnVuY3Rpb24oaWR4KSB7XG4gICAgcmV0dXJuIGlkeCA+PSB0aGlzLl92aXJ0dWFsU3RhcnQgJiYgaWR4IDw9IHRoaXMuX3ZpcnR1YWxFbmQ7XG4gIH0sXG5cbiAgX2lzSW5kZXhWaXNpYmxlOiBmdW5jdGlvbihpZHgpIHtcbiAgICByZXR1cm4gaWR4ID49IHRoaXMuZmlyc3RWaXNpYmxlSW5kZXggJiYgaWR4IDw9IHRoaXMubGFzdFZpc2libGVJbmRleDtcbiAgfSxcblxuICBfZ2V0UGh5c2ljYWxJbmRleDogZnVuY3Rpb24odmlkeCkge1xuICAgIHJldHVybiBJU19WMiA/XG4gICAgICAgICh0aGlzLl9waHlzaWNhbFN0YXJ0ICsgKHZpZHggLSB0aGlzLl92aXJ0dWFsU3RhcnQpKSAlXG4gICAgICAgICAgICB0aGlzLl9waHlzaWNhbENvdW50IDpcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxJbmRleEZvcktleVt0aGlzLl9jb2xsZWN0aW9uLmdldEtleSh0aGlzLml0ZW1zW3ZpZHhdKV07XG4gIH0sXG5cbiAgZm9jdXNJdGVtOiBmdW5jdGlvbihpZHgpIHtcbiAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbShpZHgpO1xuICB9LFxuXG4gIF9mb2N1c1BoeXNpY2FsSXRlbTogZnVuY3Rpb24oaWR4KSB7XG4gICAgaWYgKGlkeCA8IDAgfHwgaWR4ID49IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAvLyBzY3JvbGwgdG8gaW5kZXggdG8gbWFrZSBzdXJlIGl0J3MgcmVuZGVyZWRcbiAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpZHgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvSW5kZXgoaWR4KTtcbiAgICB9XG4gICAgdmFyIHBoeXNpY2FsSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpZHgpXTtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChwaHlzaWNhbEl0ZW0pO1xuICAgIHZhciBmb2N1c2FibGU7XG4gICAgLy8gc2V0IGEgc2VjcmV0IHRhYiBpbmRleFxuICAgIG1vZGVsLnRhYkluZGV4ID0gU0VDUkVUX1RBQklOREVYO1xuICAgIC8vIGNoZWNrIGlmIGZvY3VzYWJsZSBlbGVtZW50IGlzIHRoZSBwaHlzaWNhbCBpdGVtXG4gICAgaWYgKHBoeXNpY2FsSXRlbS50YWJJbmRleCA9PT0gU0VDUkVUX1RBQklOREVYKSB7XG4gICAgICBmb2N1c2FibGUgPSBwaHlzaWNhbEl0ZW07XG4gICAgfVxuICAgIC8vIHNlYXJjaCBmb3IgdGhlIGVsZW1lbnQgd2hpY2ggdGFiaW5kZXggaXMgYm91bmQgdG8gdGhlIHNlY3JldCB0YWIgaW5kZXhcbiAgICBpZiAoIWZvY3VzYWJsZSkge1xuICAgICAgZm9jdXNhYmxlID0gZG9tKHBoeXNpY2FsSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignW3RhYmluZGV4PVwiJyArIFNFQ1JFVF9UQUJJTkRFWCArICdcIl0nKTtcbiAgICB9XG4gICAgLy8gcmVzdG9yZSB0aGUgdGFiIGluZGV4XG4gICAgbW9kZWwudGFiSW5kZXggPSAwO1xuICAgIC8vIGZvY3VzIHRoZSBmb2N1c2FibGUgZWxlbWVudFxuICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSBpZHg7XG4gICAgZm9jdXNhYmxlICYmIGZvY3VzYWJsZS5mb2N1cygpO1xuICB9LFxuXG4gIF9yZW1vdmVGb2N1c2VkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKSB7XG4gICAgICB0aGlzLl9pdGVtc1BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSk7XG4gICAgfVxuICAgIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtID0gbnVsbDtcbiAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IG51bGw7XG4gICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSBudWxsO1xuICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSAtMTtcbiAgICB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9IC0xO1xuICB9LFxuXG4gIF9jcmVhdGVGb2N1c0JhY2tmaWxsSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZwaWR4ID0gdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXg7XG5cbiAgICBpZiAodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gfHwgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSkge1xuICAgICAgLy8gQ3JlYXRlIGEgcGh5c2ljYWwgaXRlbS5cbiAgICAgIHZhciBpbnN0ID0gdGhpcy5zdGFtcChudWxsKTtcbiAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID0gaW5zdC5yb290LnF1ZXJ5U2VsZWN0b3IoJyonKTtcbiAgICAgIHRoaXMuX2l0ZW1zUGFyZW50LmFwcGVuZENoaWxkKGluc3Qucm9vdCk7XG4gICAgfVxuICAgIC8vIFNldCB0aGUgb2ZmY3JlZW4gZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1tmcGlkeF07XG4gICAgdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pLnRhYkluZGV4ID0gMDtcbiAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XSA9IHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtO1xuICAgIHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID0gZnBpZHg7XG4gICAgLy8gSGlkZSB0aGUgZm9jdXNlZCBwaHlzaWNhbC5cbiAgICB0aGlzLnRyYW5zbGF0ZTNkKDAsIEhJRERFTl9ZLCAwLCB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSk7XG4gIH0sXG5cbiAgX3Jlc3RvcmVGb2N1c2VkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSB8fCB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBBc3NpZ24gbW9kZWxzIHRvIHRoZSBmb2N1c2VkIGluZGV4LlxuICAgIHRoaXMuX2Fzc2lnbk1vZGVscygpO1xuICAgIC8vIEdldCB0aGUgbmV3IHBoeXNpY2FsIGluZGV4IGZvciB0aGUgZm9jdXNlZCBpbmRleC5cbiAgICB2YXIgZnBpZHggPSB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9XG4gICAgICAgIHRoaXMuX2dldFBoeXNpY2FsSW5kZXgodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCk7XG5cbiAgICB2YXIgb25TY3JlZW5JdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1tmcGlkeF07XG4gICAgaWYgKCFvblNjcmVlbkl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG9uU2NyZWVuSW5zdGFuY2UgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChvblNjcmVlbkl0ZW0pO1xuICAgIHZhciBvZmZTY3JlZW5JbnN0YW5jZSA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKTtcbiAgICAvLyBSZXN0b3JlcyB0aGUgcGh5c2ljYWwgaXRlbSBvbmx5IHdoZW4gaXQgaGFzIHRoZSBzYW1lIG1vZGVsXG4gICAgLy8gYXMgdGhlIG9mZnNjcmVlbiBvbmUuIFVzZSBrZXkgZm9yIGNvbXBhcmlzb24gc2luY2UgdXNlcnMgY2FuIHNldFxuICAgIC8vIGEgbmV3IGl0ZW0gdmlhIHNldCgnaXRlbXMuaWR4JykuXG4gICAgaWYgKG9uU2NyZWVuSW5zdGFuY2VbdGhpcy5hc10gPT09IG9mZlNjcmVlbkluc3RhbmNlW3RoaXMuYXNdKSB7XG4gICAgICAvLyBGbGlwIHRoZSBmb2N1cyBiYWNrZmlsbC5cbiAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID0gb25TY3JlZW5JdGVtO1xuICAgICAgb25TY3JlZW5JbnN0YW5jZS50YWJJbmRleCA9IC0xO1xuICAgICAgLy8gUmVzdG9yZSB0aGUgZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgICAgdGhpcy5fcGh5c2ljYWxJdGVtc1tmcGlkeF0gPSB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbTtcbiAgICAgIC8vIEhpZGUgdGhlIHBoeXNpY2FsIGl0ZW0gdGhhdCBiYWNrZmlsbHMuXG4gICAgICB0aGlzLnRyYW5zbGF0ZTNkKDAsIEhJRERFTl9ZLCAwLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbW92ZUZvY3VzZWRJdGVtKCk7XG4gICAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtID0gbnVsbDtcbiAgfSxcblxuICBfZGlkRm9jdXM6IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdGFyZ2V0TW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChlLnRhcmdldCk7XG4gICAgdmFyIGZvY3VzZWRNb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX2ZvY3VzZWRJdGVtKTtcbiAgICB2YXIgaGFzT2Zmc2NyZWVuRm9jdXNlZEl0ZW0gPSB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSAhPT0gbnVsbDtcbiAgICB2YXIgZmlkeCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXg7XG4gICAgaWYgKCF0YXJnZXRNb2RlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZm9jdXNlZE1vZGVsID09PSB0YXJnZXRNb2RlbCkge1xuICAgICAgLy8gSWYgdGhlIHVzZXIgZm9jdXNlZCB0aGUgc2FtZSBpdGVtLCB0aGVuIGJyaW5nIGl0IGludG8gdmlldyBpZiBpdCdzIG5vdFxuICAgICAgLy8gdmlzaWJsZS5cbiAgICAgIGlmICghdGhpcy5faXNJbmRleFZpc2libGUoZmlkeCkpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0luZGV4KGZpZHgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAgIC8vIFJlc3RvcmUgdGFiSW5kZXggZm9yIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBpdGVtLlxuICAgICAgaWYgKGZvY3VzZWRNb2RlbCkge1xuICAgICAgICBmb2N1c2VkTW9kZWwudGFiSW5kZXggPSAtMTtcbiAgICAgIH1cbiAgICAgIC8vIFNldCB0aGUgdGFiSW5kZXggZm9yIHRoZSBuZXh0IGZvY3VzZWQgaXRlbS5cbiAgICAgIHRhcmdldE1vZGVsLnRhYkluZGV4ID0gMDtcbiAgICAgIGZpZHggPSB0YXJnZXRNb2RlbFt0aGlzLmluZGV4QXNdO1xuICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IGZpZHg7XG4gICAgICB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9IHRoaXMuX2dldFBoeXNpY2FsSW5kZXgoZmlkeCk7XG4gICAgICB0aGlzLl9mb2N1c2VkSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXhdO1xuICAgICAgaWYgKGhhc09mZnNjcmVlbkZvY3VzZWRJdGVtICYmICF0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSkge1xuICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2tleWRvd25IYW5kbGVyOiBmdW5jdGlvbihlKSB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgLyogQVJST1dfRE9XTiAqLyA0MDpcbiAgICAgICAgaWYgKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPCB0aGlzLl92aXJ0dWFsQ291bnQgLSAxKVxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0oXG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ICsgKHRoaXMuZ3JpZCA/IHRoaXMuX2l0ZW1zUGVyUm93IDogMSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLyogQVJST1dfUklHSFQgKi8gMzk6XG4gICAgICAgIGlmICh0aGlzLmdyaWQpXG4gICAgICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0oXG4gICAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyAodGhpcy5faXNSVEwgPyAtMSA6IDEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIEFSUk9XX1VQICovIDM4OlxuICAgICAgICBpZiAodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA+IDApXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbShcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggLSAodGhpcy5ncmlkID8gdGhpcy5faXRlbXNQZXJSb3cgOiAxKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBBUlJPV19MRUZUICovIDM3OlxuICAgICAgICBpZiAodGhpcy5ncmlkKVxuICAgICAgICAgIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKFxuICAgICAgICAgICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ICsgKHRoaXMuX2lzUlRMID8gMSA6IC0xKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBFTlRFUiAqLyAxMzpcbiAgICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0odGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkVuYWJsZWQpXG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uSGFuZGxlcihlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuXG4gIF9jbGFtcDogZnVuY3Rpb24odiwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHYpKTtcbiAgfSxcblxuICBfZGVib3VuY2U6IGZ1bmN0aW9uKG5hbWUsIGNiLCBhc3luY01vZHVsZSkge1xuICAgIGlmIChJU19WMikge1xuICAgICAgdGhpcy5fZGVib3VuY2VycyA9IHRoaXMuX2RlYm91bmNlcnMgfHwge307XG4gICAgICB0aGlzLl9kZWJvdW5jZXJzW25hbWVdID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgICAgIHRoaXMuX2RlYm91bmNlcnNbbmFtZV0sIGFzeW5jTW9kdWxlLCBjYi5iaW5kKHRoaXMpKTtcbiAgICAgIGVucXVldWVEZWJvdW5jZXIodGhpcy5fZGVib3VuY2Vyc1tuYW1lXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZERlYm91bmNlcih0aGlzLmRlYm91bmNlKG5hbWUsIGNiKSk7XG4gICAgfVxuICB9LFxuXG4gIF9mb3J3YXJkUHJvcGVydHk6IGZ1bmN0aW9uKGluc3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKElTX1YyKSB7XG4gICAgICBpbnN0Ll9zZXRQZW5kaW5nUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0W25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIC8qIFRlbXBsYXRpemVyIGJpbmRpbmdzIGZvciB2MiAqL1xuICBfZm9yd2FyZEhvc3RQcm9wVjI6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gICAgKHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW10pXG4gICAgICAgIC5jb25jYXQoW3RoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbV0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQoaXRlbSkuZm9yd2FyZEhvc3RQcm9wKHByb3AsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICB9LFxuXG4gIF9ub3RpZnlJbnN0YW5jZVByb3BWMjogZnVuY3Rpb24oaW5zdCwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAobWF0Y2hlcyh0aGlzLmFzLCBwcm9wKSkge1xuICAgICAgdmFyIGlkeCA9IGluc3RbdGhpcy5pbmRleEFzXTtcbiAgICAgIGlmIChwcm9wID09IHRoaXMuYXMpIHtcbiAgICAgICAgdGhpcy5pdGVtc1tpZHhdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLm5vdGlmeVBhdGgodHJhbnNsYXRlKHRoaXMuYXMsICdpdGVtcy4nICsgaWR4LCBwcm9wKSwgdmFsdWUpO1xuICAgIH1cbiAgfSxcblxuICAvKiBUZW1wbGF0aXplciBiaW5kaW5ncyBmb3IgdjEgKi9cbiAgX2dldFN0YW1wZWRDaGlsZHJlbjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsSXRlbXM7XG4gIH0sXG5cbiAgX2ZvcndhcmRJbnN0YW5jZVBhdGg6IGZ1bmN0aW9uKGluc3QsIHBhdGgsIHZhbHVlKSB7XG4gICAgaWYgKHBhdGguaW5kZXhPZih0aGlzLmFzICsgJy4nKSA9PT0gMCkge1xuICAgICAgdGhpcy5ub3RpZnlQYXRoKFxuICAgICAgICAgICdpdGVtcy4nICsgaW5zdC5fX2tleV9fICsgJy4nICsgcGF0aC5zbGljZSh0aGlzLmFzLmxlbmd0aCArIDEpLFxuICAgICAgICAgIHZhbHVlKTtcbiAgICB9XG4gIH0sXG5cbiAgX2ZvcndhcmRQYXJlbnRQYXRoOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgICh0aGlzLl9waHlzaWNhbEl0ZW1zIHx8IFtdKVxuICAgICAgICAuY29uY2F0KFt0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSwgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW1dKVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KGl0ZW0pLm5vdGlmeVBhdGgocGF0aCwgdmFsdWUsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gIH0sXG5cbiAgX2ZvcndhcmRQYXJlbnRQcm9wOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkge1xuICAgICh0aGlzLl9waHlzaWNhbEl0ZW1zIHx8IFtdKVxuICAgICAgICAuY29uY2F0KFt0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSwgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW1dKVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KGl0ZW0pW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgfSxcblxuICAvKiBHZXRzIHRoZSBhY3RpdmVFbGVtZW50IG9mIHRoZSBzaGFkb3cgcm9vdC9ob3N0IHRoYXQgY29udGFpbnMgdGhlIGxpc3QuICovXG4gIF9nZXRBY3RpdmVFbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXNIb3N0ID0gdGhpcy5faXRlbXNQYXJlbnQubm9kZS5kb21Ib3N0O1xuICAgIHJldHVybiBkb20oaXRlbXNIb3N0ID8gaXRlbXNIb3N0LnJvb3QgOiBkb2N1bWVudCkuYWN0aXZlRWxlbWVudDtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkExMXlLZXlzQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvbk11bHRpU2VsZWN0YWJsZUJlaGF2aW9yLCBJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9pcm9uLXNlbGVjdG9yL2lyb24tbXVsdGktc2VsZWN0YWJsZS5qcyc7XG5pbXBvcnQge0lyb25TZWxlY3RhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tc2VsZWN0b3IvaXJvbi1zZWxlY3RhYmxlLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuXG4vKipcbiAqIGBJcm9uTWVudUJlaGF2aW9yYCBpbXBsZW1lbnRzIGFjY2Vzc2libGUgbWVudSBiZWhhdmlvci5cbiAqXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqIEBwb2x5bWVyQmVoYXZpb3IgSXJvbk1lbnVCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbk1lbnVCZWhhdmlvckltcGwgPSB7XG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudGx5IGZvY3VzZWQgaXRlbS5cbiAgICAgKiBAdHlwZSB7P09iamVjdH1cbiAgICAgKi9cbiAgICBmb2N1c2VkSXRlbTpcbiAgICAgICAge29ic2VydmVyOiAnX2ZvY3VzZWRJdGVtQ2hhbmdlZCcsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiBPYmplY3R9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGF0dHJpYnV0ZSB0byB1c2Ugb24gbWVudSBpdGVtcyB0byBsb29rIHVwIHRoZSBpdGVtIHRpdGxlLiBUeXBpbmcgdGhlXG4gICAgICogZmlyc3QgbGV0dGVyIG9mIGFuIGl0ZW0gd2hlbiB0aGUgbWVudSBpcyBvcGVuIGZvY3VzZXMgdGhhdCBpdGVtLiBJZlxuICAgICAqIHVuc2V0LCBgdGV4dENvbnRlbnRgIHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBhdHRyRm9ySXRlbVRpdGxlOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgb2JzZXJ2ZXI6ICdfZGlzYWJsZWRDaGFuZ2VkJyxcbiAgICB9LFxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBrZXlzIGhhcyBiZWVuIHRha2VuIGZyb21cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnQvZ2V0TW9kaWZpZXJTdGF0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX01PRElGSUVSX0tFWVM6IFtcbiAgICAnQWx0JyxcbiAgICAnQWx0R3JhcGgnLFxuICAgICdDYXBzTG9jaycsXG4gICAgJ0NvbnRyb2wnLFxuICAgICdGbicsXG4gICAgJ0ZuTG9jaycsXG4gICAgJ0h5cGVyJyxcbiAgICAnTWV0YScsXG4gICAgJ051bUxvY2snLFxuICAgICdPUycsXG4gICAgJ1Njcm9sbExvY2snLFxuICAgICdTaGlmdCcsXG4gICAgJ1N1cGVyJyxcbiAgICAnU3ltYm9sJyxcbiAgICAnU3ltYm9sTG9jaydcbiAgXSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX1NFQVJDSF9SRVNFVF9USU1FT1VUX01TOiAxMDAwLFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfcHJldmlvdXNUYWJJbmRleDogMCxcblxuICBob3N0QXR0cmlidXRlczoge1xuICAgICdyb2xlJzogJ21lbnUnLFxuICB9LFxuXG4gIG9ic2VydmVyczogWydfdXBkYXRlTXVsdGlzZWxlY3RhYmxlKG11bHRpKSddLFxuXG4gIGxpc3RlbmVyczoge1xuICAgICdmb2N1cyc6ICdfb25Gb2N1cycsXG4gICAgJ2tleWRvd24nOiAnX29uS2V5ZG93bicsXG4gICAgJ2lyb24taXRlbXMtY2hhbmdlZCc6ICdfb25Jcm9uSXRlbXNDaGFuZ2VkJ1xuICB9LFxuXG4gIC8qKlxuICAgKiBAdHlwZSB7IU9iamVjdH1cbiAgICovXG4gIGtleUJpbmRpbmdzOiB7XG4gICAgJ3VwJzogJ19vblVwS2V5JyxcbiAgICAnZG93bic6ICdfb25Eb3duS2V5JyxcbiAgICAnZXNjJzogJ19vbkVzY0tleScsXG4gICAgJ3NoaWZ0K3RhYjprZXlkb3duJzogJ19vblNoaWZ0VGFiRG93bidcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmVzZXRUYWJpbmRpY2VzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIGdpdmVuIHZhbHVlLiBJZiB0aGUgYG11bHRpYCBwcm9wZXJ0eSBpcyB0cnVlLCB0aGVuIHRoZSBzZWxlY3RlZFxuICAgKiBzdGF0ZSBvZiB0aGUgYHZhbHVlYCB3aWxsIGJlIHRvZ2dsZWQ7IG90aGVyd2lzZSB0aGUgYHZhbHVlYCB3aWxsIGJlXG4gICAqIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHZhbHVlIHRoZSB2YWx1ZSB0byBzZWxlY3QuXG4gICAqL1xuICBzZWxlY3Q6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy8gQ2FuY2VsIGF1dG9tYXRpY2FsbHkgZm9jdXNpbmcgYSBkZWZhdWx0IGl0ZW0gaWYgdGhlIG1lbnUgcmVjZWl2ZWQgZm9jdXNcbiAgICAvLyB0aHJvdWdoIGEgdXNlciBhY3Rpb24gc2VsZWN0aW5nIGEgcGFydGljdWxhciBpdGVtLlxuICAgIGlmICh0aGlzLl9kZWZhdWx0Rm9jdXNBc3luYykge1xuICAgICAgdGhpcy5jYW5jZWxBc3luYyh0aGlzLl9kZWZhdWx0Rm9jdXNBc3luYyk7XG4gICAgICB0aGlzLl9kZWZhdWx0Rm9jdXNBc3luYyA9IG51bGw7XG4gICAgfVxuICAgIHZhciBpdGVtID0gdGhpcy5fdmFsdWVUb0l0ZW0odmFsdWUpO1xuICAgIGlmIChpdGVtICYmIGl0ZW0uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuX3NldEZvY3VzZWRJdGVtKGl0ZW0pO1xuICAgIElyb25NdWx0aVNlbGVjdGFibGVCZWhhdmlvckltcGwuc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc2V0cyBhbGwgdGFiaW5kZXggYXR0cmlidXRlcyB0byB0aGUgYXBwcm9wcmlhdGUgdmFsdWUgYmFzZWQgb24gdGhlXG4gICAqIGN1cnJlbnQgc2VsZWN0aW9uIHN0YXRlLiBUaGUgYXBwcm9wcmlhdGUgdmFsdWUgaXMgYDBgIChmb2N1c2FibGUpIGZvclxuICAgKiB0aGUgZGVmYXVsdCBzZWxlY3RlZCBpdGVtLCBhbmQgYC0xYCAobm90IGtleWJvYXJkIGZvY3VzYWJsZSkgZm9yIGFsbFxuICAgKiBvdGhlciBpdGVtcy4gQWxzbyBzZXRzIHRoZSBjb3JyZWN0IGluaXRpYWwgdmFsdWVzIGZvciBhcmlhLXNlbGVjdGVkXG4gICAqIGF0dHJpYnV0ZSwgdHJ1ZSBmb3IgZGVmYXVsdCBzZWxlY3RlZCBpdGVtIGFuZCBmYWxzZSBmb3Igb3RoZXJzLlxuICAgKi9cbiAgX3Jlc2V0VGFiaW5kaWNlczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZpcnN0U2VsZWN0ZWRJdGVtID0gdGhpcy5tdWx0aSA/XG4gICAgICAgICh0aGlzLnNlbGVjdGVkSXRlbXMgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zWzBdKSA6XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIGl0ZW0gPT09IGZpcnN0U2VsZWN0ZWRJdGVtID8gJzAnIDogJy0xJyk7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRoaXMuX3NlbGVjdGlvbi5pc1NlbGVjdGVkKGl0ZW0pKTtcbiAgICB9LCB0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhcHByb3ByaWF0ZSBBUklBIGJhc2VkIG9uIHdoZXRoZXIgb3Igbm90IHRoZSBtZW51IGlzIG1lYW50IHRvIGJlXG4gICAqIG11bHRpLXNlbGVjdGFibGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbXVsdGkgVHJ1ZSBpZiB0aGUgbWVudSBzaG91bGQgYmUgbXVsdGktc2VsZWN0YWJsZS5cbiAgICovXG4gIF91cGRhdGVNdWx0aXNlbGVjdGFibGU6IGZ1bmN0aW9uKG11bHRpKSB7XG4gICAgaWYgKG11bHRpKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1tdWx0aXNlbGVjdGFibGUnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tdWx0aXNlbGVjdGFibGUnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgS2V5Ym9hcmRFdmVudCwgdGhpcyBtZXRob2Qgd2lsbCBmb2N1cyB0aGUgYXBwcm9wcmlhdGUgaXRlbSBpbiB0aGVcbiAgICogbWVudSAoaWYgdGhlcmUgaXMgYSByZWxldmFudCBpdGVtLCBhbmQgaXQgaXMgcG9zc2libGUgdG8gZm9jdXMgaXQpLlxuICAgKlxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IEEgS2V5Ym9hcmRFdmVudC5cbiAgICovXG4gIF9mb2N1c1dpdGhLZXlib2FyZEV2ZW50OiBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBrZXkgcHJlc3NlZCBpcyBub3QgYSBtb2RpZmllciBrZXkuXG4gICAgLy8gZ2V0TW9kaWZpZXJTdGF0ZSBpcyBub3QgYmVpbmcgdXNlZCwgYXMgaXQgaXMgbm90IGF2YWlsYWJsZSBpbiBTYWZhcmlcbiAgICAvLyBlYXJsaWVyIHRoYW4gMTAuMC4yIChodHRwczovL3RyYWMud2Via2l0Lm9yZy9jaGFuZ2VzZXQvMjA2NzI1L3dlYmtpdClcbiAgICBpZiAodGhpcy5fTU9ESUZJRVJfS0VZUy5pbmRleE9mKGV2ZW50LmtleSkgIT09IC0xKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy5jYW5jZWxEZWJvdW5jZXIoJ19jbGVhclNlYXJjaFRleHQnKTtcblxuICAgIHZhciBzZWFyY2hUZXh0ID0gdGhpcy5fc2VhcmNoVGV4dCB8fCAnJztcbiAgICB2YXIga2V5ID0gZXZlbnQua2V5ICYmIGV2ZW50LmtleS5sZW5ndGggPT0gMSA/XG4gICAgICAgIGV2ZW50LmtleSA6XG4gICAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XG4gICAgc2VhcmNoVGV4dCArPSBrZXkudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgIHZhciBzZWFyY2hMZW5ndGggPSBzZWFyY2hUZXh0Lmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBpdGVtOyBpdGVtID0gdGhpcy5pdGVtc1tpXTsgaSsrKSB7XG4gICAgICBpZiAoaXRlbS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBhdHRyID0gdGhpcy5hdHRyRm9ySXRlbVRpdGxlIHx8ICd0ZXh0Q29udGVudCc7XG4gICAgICB2YXIgdGl0bGUgPSAoaXRlbVthdHRyXSB8fCBpdGVtLmdldEF0dHJpYnV0ZShhdHRyKSB8fCAnJykudHJpbSgpO1xuXG4gICAgICBpZiAodGl0bGUubGVuZ3RoIDwgc2VhcmNoTGVuZ3RoKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGl0bGUuc2xpY2UoMCwgc2VhcmNoTGVuZ3RoKS50b0xvY2FsZUxvd2VyQ2FzZSgpID09IHNlYXJjaFRleHQpIHtcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXNlZEl0ZW0oaXRlbSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3NlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgIHRoaXMuZGVib3VuY2UoXG4gICAgICAgICdfY2xlYXJTZWFyY2hUZXh0JyxcbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2hUZXh0LFxuICAgICAgICB0aGlzLl9TRUFSQ0hfUkVTRVRfVElNRU9VVF9NUyk7XG4gIH0sXG5cbiAgX2NsZWFyU2VhcmNoVGV4dDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2VhcmNoVGV4dCA9ICcnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBwcmV2aW91cyBpdGVtIChyZWxhdGl2ZSB0byB0aGUgY3VycmVudGx5IGZvY3VzZWQgaXRlbSkgaW4gdGhlXG4gICAqIG1lbnUsIGRpc2FibGVkIGl0ZW1zIHdpbGwgYmUgc2tpcHBlZC5cbiAgICogTG9vcCB1bnRpbCBsZW5ndGggKyAxIHRvIGhhbmRsZSBjYXNlIG9mIHNpbmdsZSBpdGVtIGluIG1lbnUuXG4gICAqL1xuICBfZm9jdXNQcmV2aW91czogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIHZhciBjdXJGb2N1c0luZGV4ID0gTnVtYmVyKHRoaXMuaW5kZXhPZih0aGlzLmZvY3VzZWRJdGVtKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxlbmd0aCArIDE7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zWyhjdXJGb2N1c0luZGV4IC0gaSArIGxlbmd0aCkgJSBsZW5ndGhdO1xuICAgICAgaWYgKCFpdGVtLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICB2YXIgb3duZXIgPSBkb20oaXRlbSkuZ2V0T3duZXJSb290KCkgfHwgZG9jdW1lbnQ7XG4gICAgICAgIHRoaXMuX3NldEZvY3VzZWRJdGVtKGl0ZW0pO1xuXG4gICAgICAgIC8vIEZvY3VzIG1pZ2h0IG5vdCBoYXZlIHdvcmtlZCwgaWYgdGhlIGVsZW1lbnQgd2FzIGhpZGRlbiBvciBub3RcbiAgICAgICAgLy8gZm9jdXNhYmxlLiBJbiB0aGF0IGNhc2UsIHRyeSBhZ2Fpbi5cbiAgICAgICAgaWYgKGRvbShvd25lcikuYWN0aXZlRWxlbWVudCA9PSBpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBuZXh0IGl0ZW0gKHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBpdGVtKSBpbiB0aGVcbiAgICogbWVudSwgZGlzYWJsZWQgaXRlbXMgd2lsbCBiZSBza2lwcGVkLlxuICAgKiBMb29wIHVudGlsIGxlbmd0aCArIDEgdG8gaGFuZGxlIGNhc2Ugb2Ygc2luZ2xlIGl0ZW0gaW4gbWVudS5cbiAgICovXG4gIF9mb2N1c05leHQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICB2YXIgY3VyRm9jdXNJbmRleCA9IE51bWJlcih0aGlzLmluZGV4T2YodGhpcy5mb2N1c2VkSXRlbSkpO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW5ndGggKyAxOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1soY3VyRm9jdXNJbmRleCArIGkpICUgbGVuZ3RoXTtcbiAgICAgIGlmICghaXRlbS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgdmFyIG93bmVyID0gZG9tKGl0ZW0pLmdldE93bmVyUm9vdCgpIHx8IGRvY3VtZW50O1xuICAgICAgICB0aGlzLl9zZXRGb2N1c2VkSXRlbShpdGVtKTtcblxuICAgICAgICAvLyBGb2N1cyBtaWdodCBub3QgaGF2ZSB3b3JrZWQsIGlmIHRoZSBlbGVtZW50IHdhcyBoaWRkZW4gb3Igbm90XG4gICAgICAgIC8vIGZvY3VzYWJsZS4gSW4gdGhhdCBjYXNlLCB0cnkgYWdhaW4uXG4gICAgICAgIGlmIChkb20ob3duZXIpLmFjdGl2ZUVsZW1lbnQgPT0gaXRlbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTXV0YXRlcyBpdGVtcyBpbiB0aGUgbWVudSBiYXNlZCBvbiBwcm92aWRlZCBzZWxlY3Rpb24gZGV0YWlscywgc28gdGhhdFxuICAgKiBhbGwgaXRlbXMgY29ycmVjdGx5IHJlZmxlY3Qgc2VsZWN0aW9uIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGl0ZW0gQW4gaXRlbSBpbiB0aGUgbWVudS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc1NlbGVjdGVkIFRydWUgaWYgdGhlIGl0ZW0gc2hvdWxkIGJlIHNob3duIGluIGFcbiAgICogc2VsZWN0ZWQgc3RhdGUsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIF9hcHBseVNlbGVjdGlvbjogZnVuY3Rpb24oaXRlbSwgaXNTZWxlY3RlZCkge1xuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgfVxuICAgIElyb25TZWxlY3RhYmxlQmVoYXZpb3IuX2FwcGx5U2VsZWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERpc2NyZXRlbHkgdXBkYXRlcyB0YWJpbmRleCB2YWx1ZXMgYW1vbmcgbWVudSBpdGVtcyBhcyB0aGUgZm9jdXNlZCBpdGVtXG4gICAqIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZm9jdXNlZEl0ZW0gVGhlIGVsZW1lbnQgdGhhdCBpcyBjdXJyZW50bHkgZm9jdXNlZC5cbiAgICogQHBhcmFtIHs/RWxlbWVudH0gb2xkIFRoZSBsYXN0IGVsZW1lbnQgdGhhdCB3YXMgY29uc2lkZXJlZCBmb2N1c2VkLCBpZlxuICAgKiBhcHBsaWNhYmxlLlxuICAgKi9cbiAgX2ZvY3VzZWRJdGVtQ2hhbmdlZDogZnVuY3Rpb24oZm9jdXNlZEl0ZW0sIG9sZCkge1xuICAgIG9sZCAmJiBvbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgIGlmIChmb2N1c2VkSXRlbSAmJiAhZm9jdXNlZEl0ZW0uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmXG4gICAgICAgICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBmb2N1c2VkSXRlbS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgIGZvY3VzZWRJdGVtLmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgdGhhdCByZXNwb25kcyB0byBtdXRhdGlvbiBjaGFuZ2VzIHJlbGF0ZWQgdG8gdGhlIGxpc3Qgb2YgaXRlbXNcbiAgICogaW4gdGhlIG1lbnUuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEFuIGV2ZW50IGNvbnRhaW5pbmcgbXV0YXRpb24gcmVjb3JkcyBhcyBpdHNcbiAgICogZGV0YWlsLlxuICAgKi9cbiAgX29uSXJvbkl0ZW1zQ2hhbmdlZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGV0YWlsLmFkZGVkTm9kZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9yZXNldFRhYmluZGljZXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIHNoaWZ0K3RhYiBrZXlwcmVzcyBpcyBkZXRlY3RlZCBieSB0aGUgbWVudS5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQSBrZXkgY29tYmluYXRpb24gZXZlbnQuXG4gICAqL1xuICBfb25TaGlmdFRhYkRvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIG9sZFRhYkluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG5cbiAgICBJcm9uTWVudUJlaGF2aW9ySW1wbC5fc2hpZnRUYWJQcmVzc2VkID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NldEZvY3VzZWRJdGVtKG51bGwpO1xuXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICB0aGlzLmFzeW5jKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jywgb2xkVGFiSW5kZXgpO1xuICAgICAgSXJvbk1lbnVCZWhhdmlvckltcGwuX3NoaWZ0VGFiUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgLy8gTk9URShjZGF0YSk6IHBvbHltZXIvcG9seW1lciMxMzA1XG4gICAgfSwgMSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgbWVudSByZWNlaXZlcyBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtGb2N1c0V2ZW50fSBldmVudCBBIGZvY3VzIGV2ZW50LlxuICAgKi9cbiAgX29uRm9jdXM6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKElyb25NZW51QmVoYXZpb3JJbXBsLl9zaGlmdFRhYlByZXNzZWQpIHtcbiAgICAgIC8vIGRvIG5vdCBmb2N1cyB0aGUgbWVudSBpdHNlbGZcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEbyBub3QgZm9jdXMgdGhlIHNlbGVjdGVkIHRhYiBpZiB0aGUgZGVlcGVzdCB0YXJnZXQgaXMgcGFydCBvZiB0aGVcbiAgICAvLyBtZW51IGVsZW1lbnQncyBsb2NhbCBET00gYW5kIGlzIGZvY3VzYWJsZS5cbiAgICB2YXIgcm9vdFRhcmdldCA9XG4gICAgICAgIC8qKiBAdHlwZSB7P0hUTUxFbGVtZW50fSAqLyAoZG9tKGV2ZW50KS5yb290VGFyZ2V0KTtcbiAgICBpZiAocm9vdFRhcmdldCAhPT0gdGhpcyAmJiB0eXBlb2Ygcm9vdFRhcmdldC50YWJJbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgIXRoaXMuaXNMaWdodERlc2NlbmRhbnQocm9vdFRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjbGVhciB0aGUgY2FjaGVkIGZvY3VzIGl0ZW1cbiAgICB0aGlzLl9kZWZhdWx0Rm9jdXNBc3luYyA9IHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICAvLyBmb2N1cyB0aGUgc2VsZWN0ZWQgaXRlbSB3aGVuIHRoZSBtZW51IHJlY2VpdmVzIGZvY3VzLCBvciB0aGUgZmlyc3QgaXRlbVxuICAgICAgLy8gaWYgbm8gaXRlbSBpcyBzZWxlY3RlZFxuICAgICAgdmFyIGZpcnN0U2VsZWN0ZWRJdGVtID0gdGhpcy5tdWx0aSA/XG4gICAgICAgICAgKHRoaXMuc2VsZWN0ZWRJdGVtcyAmJiB0aGlzLnNlbGVjdGVkSXRlbXNbMF0pIDpcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbTtcblxuICAgICAgdGhpcy5fc2V0Rm9jdXNlZEl0ZW0obnVsbCk7XG5cbiAgICAgIGlmIChmaXJzdFNlbGVjdGVkSXRlbSkge1xuICAgICAgICB0aGlzLl9zZXRGb2N1c2VkSXRlbShmaXJzdFNlbGVjdGVkSXRlbSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXRlbXNbMF0pIHtcbiAgICAgICAgLy8gV2UgZmluZCB0aGUgZmlyc3Qgbm9uZS1kaXNhYmxlZCBpdGVtIChpZiBvbmUgZXhpc3RzKVxuICAgICAgICB0aGlzLl9mb2N1c05leHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSB1cCBrZXkgaXMgcHJlc3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQSBrZXkgY29tYmluYXRpb24gZXZlbnQuXG4gICAqL1xuICBfb25VcEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyB1cCBhbmQgZG93biBhcnJvd3MgbW92ZXMgdGhlIGZvY3VzXG4gICAgdGhpcy5fZm9jdXNQcmV2aW91cygpO1xuICAgIGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgZG93biBrZXkgaXMgcHJlc3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQSBrZXkgY29tYmluYXRpb24gZXZlbnQuXG4gICAqL1xuICBfb25Eb3duS2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX2ZvY3VzTmV4dCgpO1xuICAgIGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgZXNjIGtleSBpcyBwcmVzc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBIGtleSBjb21iaW5hdGlvbiBldmVudC5cbiAgICovXG4gIF9vbkVzY0tleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgZm9jdXNlZEl0ZW0gPSB0aGlzLmZvY3VzZWRJdGVtO1xuICAgIGlmIChmb2N1c2VkSXRlbSkge1xuICAgICAgZm9jdXNlZEl0ZW0uYmx1cigpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIGEga2V5ZG93biBldmVudCBpcyBkZXRlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBBIGtleWJvYXJkIGV2ZW50LlxuICAgKi9cbiAgX29uS2V5ZG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMua2V5Ym9hcmRFdmVudE1hdGNoZXNLZXlzKGV2ZW50LCAndXAgZG93biBlc2MnKSkge1xuICAgICAgLy8gYWxsIG90aGVyIGtleXMgZm9jdXMgdGhlIG1lbnUgaXRlbSBzdGFydGluZyB3aXRoIHRoYXQgY2hhcmFjdGVyXG4gICAgICB0aGlzLl9mb2N1c1dpdGhLZXlib2FyZEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0sXG5cbiAgLy8gb3ZlcnJpZGUgX2FjdGl2YXRlSGFuZGxlclxuICBfYWN0aXZhdGVIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgIElyb25TZWxlY3RhYmxlQmVoYXZpb3IuX2FjdGl2YXRlSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGlzIGVsZW1lbnQncyB0YWIgaW5kZXggd2hlbiBpdCdzIGVuYWJsZWQvZGlzYWJsZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWRcbiAgICovXG4gIF9kaXNhYmxlZENoYW5nZWQ6IGZ1bmN0aW9uKGRpc2FibGVkKSB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9wcmV2aW91c1RhYkluZGV4ID1cbiAgICAgICAgICB0aGlzLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSA/IHRoaXMudGFiSW5kZXggOiAwO1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoXG4gICAgICAgICAgJ3RhYmluZGV4Jyk7ICAvLyBObyB0YWJpbmRleCBtZWFucyBub3QgdGFiLWFibGUgb3Igc2VsZWN0LWFibGUuXG4gICAgfSBlbHNlIGlmICghdGhpcy5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXMuX3ByZXZpb3VzVGFiSW5kZXgpO1xuICAgIH1cbiAgfVxufTtcblxuSXJvbk1lbnVCZWhhdmlvckltcGwuX3NoaWZ0VGFiUHJlc3NlZCA9IGZhbHNlO1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25NZW51QmVoYXZpb3IgPVxuICAgIFtJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3IsIElyb25BMTF5S2V5c0JlaGF2aW9yLCBJcm9uTWVudUJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbk1lbnVCZWhhdmlvcn0gZnJvbSAnLi9pcm9uLW1lbnUtYmVoYXZpb3IuanMnO1xuXG4vKipcbiAqIGBJcm9uTWVudWJhckJlaGF2aW9yYCBpbXBsZW1lbnRzIGFjY2Vzc2libGUgbWVudWJhciBiZWhhdmlvci5cbiAqXG4gKiBAcG9seW1lckJlaGF2aW9yIElyb25NZW51YmFyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25NZW51YmFyQmVoYXZpb3JJbXBsID0ge1xuXG4gIGhvc3RBdHRyaWJ1dGVzOiB7J3JvbGUnOiAnbWVudWJhcid9LFxuXG4gIC8qKlxuICAgKiBAdHlwZSB7IU9iamVjdH1cbiAgICovXG4gIGtleUJpbmRpbmdzOiB7J2xlZnQnOiAnX29uTGVmdEtleScsICdyaWdodCc6ICdfb25SaWdodEtleSd9LFxuXG4gIF9vblVwS2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuZm9jdXNlZEl0ZW0uY2xpY2soKTtcbiAgICBldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIF9vbkRvd25LZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5mb2N1c2VkSXRlbS5jbGljaygpO1xuICAgIGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG5cbiAgZ2V0IF9pc1JUTCgpIHtcbiAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcylbJ2RpcmVjdGlvbiddID09PSAncnRsJztcbiAgfSxcblxuICBfb25MZWZ0S2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLl9pc1JUTCkge1xuICAgICAgdGhpcy5fZm9jdXNOZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZvY3VzUHJldmlvdXMoKTtcbiAgICB9XG4gICAgZXZlbnQuZGV0YWlsLmtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSxcblxuICBfb25SaWdodEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5faXNSVEwpIHtcbiAgICAgIHRoaXMuX2ZvY3VzUHJldmlvdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXNOZXh0KCk7XG4gICAgfVxuICAgIGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG5cbiAgX29uS2V5ZG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5rZXlib2FyZEV2ZW50TWF0Y2hlc0tleXMoZXZlbnQsICd1cCBkb3duIGxlZnQgcmlnaHQgZXNjJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhbGwgb3RoZXIga2V5cyBmb2N1cyB0aGUgbWVudSBpdGVtIHN0YXJ0aW5nIHdpdGggdGhhdCBjaGFyYWN0ZXJcbiAgICB0aGlzLl9mb2N1c1dpdGhLZXlib2FyZEV2ZW50KGV2ZW50KTtcbiAgfVxuXG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25NZW51YmFyQmVoYXZpb3IgPSBbSXJvbk1lbnVCZWhhdmlvciwgSXJvbk1lbnViYXJCZWhhdmlvckltcGxdO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcblxuLyoqXG4gKiBgUG9seW1lci5Jcm9uU2Nyb2xsVGFyZ2V0QmVoYXZpb3JgIGFsbG93cyBhbiBlbGVtZW50IHRvIHJlc3BvbmQgdG8gc2Nyb2xsXG4gKiBldmVudHMgZnJvbSBhIGRlc2lnbmF0ZWQgc2Nyb2xsIHRhcmdldC5cbiAqXG4gKiBFbGVtZW50cyB0aGF0IGNvbnN1bWUgdGhpcyBiZWhhdmlvciBjYW4gb3ZlcnJpZGUgdGhlIGBfc2Nyb2xsSGFuZGxlcmBcbiAqIG1ldGhvZCB0byBhZGQgbG9naWMgb24gdGhlIHNjcm9sbCBldmVudC5cbiAqXG4gKiBAZGVtbyBkZW1vL3Njcm9sbGluZy1yZWdpb24uaHRtbCBTY3JvbGxpbmcgUmVnaW9uXG4gKiBAZGVtbyBkZW1vL2RvY3VtZW50Lmh0bWwgRG9jdW1lbnQgRWxlbWVudFxuICogQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvblNjcm9sbFRhcmdldEJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgZWxlbWVudCB0aGF0IHdpbGwgaGFuZGxlIHRoZSBzY3JvbGwgZXZlbnRcbiAgICAgKiBvbiB0aGUgYmVoYWxmIG9mIHRoZSBjdXJyZW50IGVsZW1lbnQuIFRoaXMgaXMgdHlwaWNhbGx5IGEgcmVmZXJlbmNlIHRvIGFuXG4gICAgICplbGVtZW50LCBidXQgdGhlcmUgYXJlIGEgZmV3IG1vcmUgcG9zaWJpbGl0aWVzOlxuICAgICAqXG4gICAgICogIyMjIEVsZW1lbnRzIGlkXG4gICAgICpcbiAgICAgKmBgYGh0bWxcbiAgICAgKiA8ZGl2IGlkPVwic2Nyb2xsYWJsZS1lbGVtZW50XCIgc3R5bGU9XCJvdmVyZmxvdzogYXV0bztcIj5cbiAgICAgKiAgPHgtZWxlbWVudCBzY3JvbGwtdGFyZ2V0PVwic2Nyb2xsYWJsZS1lbGVtZW50XCI+XG4gICAgICogICAgPCEtLSBDb250ZW50LS0+XG4gICAgICogIDwveC1lbGVtZW50PlxuICAgICAqIDwvZGl2PlxuICAgICAqYGBgXG4gICAgICogSW4gdGhpcyBjYXNlLCB0aGUgYHNjcm9sbFRhcmdldGAgd2lsbCBwb2ludCB0byB0aGUgb3V0ZXIgZGl2IGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiAjIyMgRG9jdW1lbnQgc2Nyb2xsaW5nXG4gICAgICpcbiAgICAgKiBGb3IgZG9jdW1lbnQgc2Nyb2xsaW5nLCB5b3UgY2FuIHVzZSB0aGUgcmVzZXJ2ZWQgd29yZCBgZG9jdW1lbnRgOlxuICAgICAqXG4gICAgICpgYGBodG1sXG4gICAgICogPHgtZWxlbWVudCBzY3JvbGwtdGFyZ2V0PVwiZG9jdW1lbnRcIj5cbiAgICAgKiAgIDwhLS0gQ29udGVudCAtLT5cbiAgICAgKiA8L3gtZWxlbWVudD5cbiAgICAgKmBgYFxuICAgICAqXG4gICAgICogIyMjIEVsZW1lbnRzIHJlZmVyZW5jZVxuICAgICAqXG4gICAgICpgYGBqc1xuICAgICAqIGFwcEhlYWRlci5zY3JvbGxUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsYWJsZS1lbGVtZW50Jyk7XG4gICAgICpgYGBcbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAZGVmYXVsdCBkb2N1bWVudFxuICAgICAqL1xuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgdHlwZTogSFRNTEVsZW1lbnQsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0U2Nyb2xsVGFyZ2V0O1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX3Njcm9sbFRhcmdldENoYW5nZWQoc2Nyb2xsVGFyZ2V0LCBpc0F0dGFjaGVkKSddLFxuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBldmVudCBsaXN0ZW5lciBzaG91bGQgYmUgaW5zdGFsbGVkLlxuICAgKi9cbiAgX3Nob3VsZEhhdmVMaXN0ZW5lcjogdHJ1ZSxcblxuICBfc2Nyb2xsVGFyZ2V0Q2hhbmdlZDogZnVuY3Rpb24oc2Nyb2xsVGFyZ2V0LCBpc0F0dGFjaGVkKSB7XG4gICAgdmFyIGV2ZW50VGFyZ2V0O1xuXG4gICAgaWYgKHRoaXMuX29sZFNjcm9sbFRhcmdldCkge1xuICAgICAgdGhpcy5fdG9nZ2xlU2Nyb2xsTGlzdGVuZXIoZmFsc2UsIHRoaXMuX29sZFNjcm9sbFRhcmdldCk7XG4gICAgICB0aGlzLl9vbGRTY3JvbGxUYXJnZXQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoIWlzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBlbGVtZW50IGlkIHJlZmVyZW5jZXNcbiAgICBpZiAoc2Nyb2xsVGFyZ2V0ID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldCA9IHRoaXMuX2RvYztcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNjcm9sbFRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBkb21Ib3N0ID0gdGhpcy5kb21Ib3N0O1xuXG4gICAgICB0aGlzLnNjcm9sbFRhcmdldCA9IGRvbUhvc3QgJiYgZG9tSG9zdC4kID9cbiAgICAgICAgICBkb21Ib3N0LiRbc2Nyb2xsVGFyZ2V0XSA6XG4gICAgICAgICAgZG9tKHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvcignIycgKyBzY3JvbGxUYXJnZXQpO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHRoaXMuX29sZFNjcm9sbFRhcmdldCA9IHNjcm9sbFRhcmdldDtcbiAgICAgIHRoaXMuX3RvZ2dsZVNjcm9sbExpc3RlbmVyKHRoaXMuX3Nob3VsZEhhdmVMaXN0ZW5lciwgc2Nyb2xsVGFyZ2V0KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJ1bnMgb24gZXZlcnkgc2Nyb2xsIGV2ZW50LiBDb25zdW1lciBvZiB0aGlzIGJlaGF2aW9yIG1heSBvdmVycmlkZSB0aGlzXG4gICAqIG1ldGhvZC5cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX3Njcm9sbEhhbmRsZXI6IGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIoKSB7fSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgc2Nyb2xsIHRhcmdldC4gQ29uc3VtZXJzIG9mIHRoaXMgYmVoYXZpb3IgbWF5IHdhbnQgdG8gY3VzdG9taXplXG4gICAqIHRoZSBkZWZhdWx0IHNjcm9sbCB0YXJnZXQuXG4gICAqXG4gICAqIEB0eXBlIHtFbGVtZW50fVxuICAgKi9cbiAgZ2V0IF9kZWZhdWx0U2Nyb2xsVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9kb2M7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3J0Y3V0IGZvciB0aGUgZG9jdW1lbnQgZWxlbWVudFxuICAgKlxuICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICovXG4gIGdldCBfZG9jKCkge1xuICAgIHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIGNvbnRlbnQgb2YgYW4gZWxlbWVudCBpcyBzY3JvbGxlZFxuICAgKiB1cHdhcmQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgX3Njcm9sbFRvcCgpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYyA/IHdpbmRvdy5wYWdlWU9mZnNldCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG51bWJlciBvZiBwaXhlbHMgdGhhdCB0aGUgY29udGVudCBvZiBhbiBlbGVtZW50IGlzIHNjcm9sbGVkIHRvIHRoZVxuICAgKiBsZWZ0LlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IF9zY3JvbGxMZWZ0KCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jID8gd2luZG93LnBhZ2VYT2Zmc2V0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG51bWJlciBvZiBwaXhlbHMgdGhhdCB0aGUgY29udGVudCBvZiBhbiBlbGVtZW50IGlzIHNjcm9sbGVkXG4gICAqIHVwd2FyZC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHNldCBfc2Nyb2xsVG9wKHRvcCkge1xuICAgIGlmICh0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnBhZ2VYT2Zmc2V0LCB0b3ApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIGNvbnRlbnQgb2YgYW4gZWxlbWVudCBpcyBzY3JvbGxlZCB0byB0aGVcbiAgICogbGVmdC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHNldCBfc2Nyb2xsTGVmdChsZWZ0KSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyhsZWZ0LCB3aW5kb3cucGFnZVlPZmZzZXQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdGhlIGNvbnRlbnQgdG8gYSBwYXJ0aWN1bGFyIHBsYWNlLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcm9sbFxuICAgKiBAcGFyYW0ge251bWJlcnwhe2xlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9fSBsZWZ0T3JPcHRpb25zIFRoZSBsZWZ0IHBvc2l0aW9uIG9yIHNjcm9sbCBvcHRpb25zXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gdG9wIFRoZSB0b3AgcG9zaXRpb25cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHNjcm9sbDogZnVuY3Rpb24obGVmdE9yT3B0aW9ucywgdG9wKSB7XG4gICAgdmFyIGxlZnQ7XG5cbiAgICBpZiAodHlwZW9mIGxlZnRPck9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZWZ0ID0gbGVmdE9yT3B0aW9ucy5sZWZ0O1xuICAgICAgdG9wID0gbGVmdE9yT3B0aW9ucy50b3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSBsZWZ0T3JPcHRpb25zO1xuICAgIH1cblxuICAgIGxlZnQgPSBsZWZ0IHx8IDA7XG4gICAgdG9wID0gdG9wIHx8IDA7XG4gICAgaWYgKHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyhsZWZ0LCB0b3ApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IHRvcDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHdpZHRoIG9mIHRoZSBzY3JvbGwgdGFyZ2V0LlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IF9zY3JvbGxUYXJnZXRXaWR0aCgpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYyA/IHdpbmRvdy5pbm5lcldpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0V2lkdGg7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBoZWlnaHQgb2YgdGhlIHNjcm9sbCB0YXJnZXQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgX3Njcm9sbFRhcmdldEhlaWdodCgpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYyA/IHdpbmRvdy5pbm5lckhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc2Nyb2xsIHRhcmdldCBpcyBhIHZhbGlkIEhUTUxFbGVtZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgX2lzVmFsaWRTY3JvbGxUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNjcm9sbFRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9LFxuXG4gIF90b2dnbGVTY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24oeWVzLCBzY3JvbGxUYXJnZXQpIHtcbiAgICB2YXIgZXZlbnRUYXJnZXQgPSBzY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYyA/IHdpbmRvdyA6IHNjcm9sbFRhcmdldDtcbiAgICBpZiAoeWVzKSB7XG4gICAgICBpZiAoIXRoaXMuX2JvdW5kU2Nyb2xsSGFuZGxlcikge1xuICAgICAgICB0aGlzLl9ib3VuZFNjcm9sbEhhbmRsZXIgPSB0aGlzLl9zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2JvdW5kU2Nyb2xsSGFuZGxlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9ib3VuZFNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fYm91bmRTY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5fYm91bmRTY3JvbGxIYW5kbGVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSB5ZXMgVHJ1ZSB0byBhZGQgdGhlIGV2ZW50LCBGYWxzZSB0byByZW1vdmUgaXQuXG4gICAqL1xuICB0b2dnbGVTY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24oeWVzKSB7XG4gICAgdGhpcy5fc2hvdWxkSGF2ZUxpc3RlbmVyID0geWVzO1xuICAgIHRoaXMuX3RvZ2dsZVNjcm9sbExpc3RlbmVyKHllcywgdGhpcy5zY3JvbGxUYXJnZXQpO1xuICB9XG5cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvblNlbGVjdGFibGVCZWhhdmlvcn0gZnJvbSAnLi9pcm9uLXNlbGVjdGFibGUuanMnO1xuXG4vKipcbiAqIEBwb2x5bWVyQmVoYXZpb3IgSXJvbk11bHRpU2VsZWN0YWJsZUJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3JJbXBsID0ge1xuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBtdWx0aXBsZSBzZWxlY3Rpb25zIGFyZSBhbGxvd2VkLlxuICAgICAqL1xuICAgIG11bHRpOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCBvYnNlcnZlcjogJ211bHRpQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBzZWxlY3RlZCBlbGVtZW50cy4gVGhpcyBpcyB1c2VkIGluc3RlYWQgb2YgYHNlbGVjdGVkYFxuICAgICAqIHdoZW4gYG11bHRpYCBpcyB0cnVlLlxuICAgICAqL1xuICAgIHNlbGVjdGVkVmFsdWVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtcy5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSxcblxuICB9LFxuXG4gIG9ic2VydmVyczogWydfdXBkYXRlU2VsZWN0ZWQoc2VsZWN0ZWRWYWx1ZXMuc3BsaWNlcyknXSxcblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgZ2l2ZW4gdmFsdWUuIElmIHRoZSBgbXVsdGlgIHByb3BlcnR5IGlzIHRydWUsIHRoZW4gdGhlIHNlbGVjdGVkXG4gICAqIHN0YXRlIG9mIHRoZSBgdmFsdWVgIHdpbGwgYmUgdG9nZ2xlZDsgb3RoZXJ3aXNlIHRoZSBgdmFsdWVgIHdpbGwgYmVcbiAgICogc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBtZXRob2Qgc2VsZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gdmFsdWUgdGhlIHZhbHVlIHRvIHNlbGVjdC5cbiAgICovXG4gIHNlbGVjdDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodGhpcy5tdWx0aSkge1xuICAgICAgdGhpcy5fdG9nZ2xlU2VsZWN0ZWQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIG11bHRpQ2hhbmdlZDogZnVuY3Rpb24obXVsdGkpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24ubXVsdGkgPSBtdWx0aTtcbiAgICB0aGlzLl91cGRhdGVTZWxlY3RlZCgpO1xuICB9LFxuXG4gIC8vIFVOVVNFRCwgRk9SIEFQSSBDT01QQVRJQklMSVRZXG4gIGdldCBfc2hvdWxkVXBkYXRlU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkICE9IG51bGwgfHxcbiAgICAgICAgKHRoaXMuc2VsZWN0ZWRWYWx1ZXMgIT0gbnVsbCAmJiB0aGlzLnNlbGVjdGVkVmFsdWVzLmxlbmd0aCk7XG4gIH0sXG5cbiAgX3VwZGF0ZUF0dHJGb3JTZWxlY3RlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLm11bHRpKSB7XG4gICAgICBJcm9uU2VsZWN0YWJsZUJlaGF2aW9yLl91cGRhdGVBdHRyRm9yU2VsZWN0ZWQuYXBwbHkodGhpcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPVxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtc1xuICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbmRleFRvVmFsdWUodGhpcy5pbmRleE9mKHNlbGVjdGVkSXRlbSkpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRoaXMpXG4gICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24odW5maWx0ZXJlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZmlsdGVyZWRWYWx1ZSAhPSBudWxsO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgX3VwZGF0ZVNlbGVjdGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5tdWx0aSkge1xuICAgICAgdGhpcy5fc2VsZWN0TXVsdGkodGhpcy5zZWxlY3RlZFZhbHVlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbGVjdFNlbGVjdGVkKHRoaXMuc2VsZWN0ZWQpO1xuICAgIH1cbiAgfSxcblxuICBfc2VsZWN0TXVsdGk6IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHZhbHVlcyA9IHZhbHVlcyB8fCBbXTtcblxuICAgIHZhciBzZWxlY3RlZEl0ZW1zID1cbiAgICAgICAgKHRoaXMuX3ZhbHVlc1RvSXRlbXModmFsdWVzKSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbSAhPT0gbnVsbCAmJiBpdGVtICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgLy8gY2xlYXIgYWxsIGJ1dCB0aGUgY3VycmVudCBzZWxlY3RlZCBpdGVtc1xuICAgIHRoaXMuX3NlbGVjdGlvbi5jbGVhcihzZWxlY3RlZEl0ZW1zKTtcblxuICAgIC8vIHNlbGVjdCBvbmx5IHRob3NlIG5vdCBzZWxlY3RlZCB5ZXRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbi5zZXRJdGVtU2VsZWN0ZWQoc2VsZWN0ZWRJdGVtc1tpXSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGl0ZW1zLCBzaW5jZSB0aGlzIGFycmF5IGlzIHBvcHVsYXRlZCBvbmx5IHdoZW4gYXR0YWNoZWRcbiAgICBpZiAodGhpcy5mYWxsYmFja1NlbGVjdGlvbiAmJiAhdGhpcy5fc2VsZWN0aW9uLmdldCgpLmxlbmd0aCkge1xuICAgICAgdmFyIGZhbGxiYWNrID0gdGhpcy5fdmFsdWVUb0l0ZW0odGhpcy5mYWxsYmFja1NlbGVjdGlvbik7XG4gICAgICBpZiAoZmFsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5mYWxsYmFja1NlbGVjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9zZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzID0gdGhpcy5fc2VsZWN0aW9uLmdldCgpO1xuICAgIGlmICh0aGlzLm11bHRpKSB7XG4gICAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW1zKHMpO1xuICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKHMubGVuZ3RoID8gc1swXSA6IG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocyAhPT0gbnVsbCAmJiBzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtcyhbc10pO1xuICAgICAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW0ocyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW1zKFtdKTtcbiAgICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfdG9nZ2xlU2VsZWN0ZWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGkgPSB0aGlzLnNlbGVjdGVkVmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIHZhciB1bnNlbGVjdGVkID0gaSA8IDA7XG4gICAgaWYgKHVuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMucHVzaCgnc2VsZWN0ZWRWYWx1ZXMnLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3BsaWNlKCdzZWxlY3RlZFZhbHVlcycsIGksIDEpO1xuICAgIH1cbiAgfSxcblxuICBfdmFsdWVzVG9JdGVtczogZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgcmV0dXJuICh2YWx1ZXMgPT0gbnVsbCkgPyBudWxsIDogdmFsdWVzLm1hcChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlVG9JdGVtKHZhbHVlKTtcbiAgICB9LCB0aGlzKTtcbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3IgPVxuICAgIFtJcm9uU2VsZWN0YWJsZUJlaGF2aW9yLCBJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uTWV0YX0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZXRhL2lyb24tbWV0YS5qcyc7XG5cbi8qKlxuICogU2luZ2xldG9uIElyb25NZXRhIGluc3RhbmNlLlxuICovXG5leHBvcnQgbGV0IElyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YSA9IG51bGw7XG5cbi8qKlxuICogYFVzZSBJcm9uVmFsaWRhdGFibGVCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGFuIGVsZW1lbnQgdGhhdCB2YWxpZGF0ZXNcbiAqIHVzZXIgaW5wdXQuIFVzZSB0aGUgcmVsYXRlZCBgSXJvblZhbGlkYXRvckJlaGF2aW9yYCB0byBhZGQgY3VzdG9tXG4gKiB2YWxpZGF0aW9uIGxvZ2ljIHRvIGFuIGlyb24taW5wdXQuXG4gKlxuICogQnkgZGVmYXVsdCwgYW4gYDxpcm9uLWZvcm0+YCBlbGVtZW50IHZhbGlkYXRlcyBpdHMgZmllbGRzIHdoZW4gdGhlIHVzZXJcbiAqIHByZXNzZXMgdGhlIHN1Ym1pdCBidXR0b24uIFRvIHZhbGlkYXRlIGEgZm9ybSBpbXBlcmF0aXZlbHksIGNhbGwgdGhlIGZvcm0nc1xuICogYHZhbGlkYXRlKClgIG1ldGhvZCwgd2hpY2ggaW4gdHVybiB3aWxsIGNhbGwgYHZhbGlkYXRlKClgIG9uIGFsbCBpdHNcbiAqIGNoaWxkcmVuLiBCeSB1c2luZyBgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JgLCB5b3VyIGN1c3RvbSBlbGVtZW50XG4gKiB3aWxsIGdldCBhIHB1YmxpYyBgdmFsaWRhdGUoKWAsIHdoaWNoIHdpbGwgcmV0dXJuIHRoZSB2YWxpZGl0eSBvZiB0aGVcbiAqIGVsZW1lbnQsIGFuZCBhIGNvcnJlc3BvbmRpbmcgYGludmFsaWRgIGF0dHJpYnV0ZSwgd2hpY2ggY2FuIGJlIHVzZWQgZm9yXG4gKiBzdHlsaW5nLlxuICpcbiAqIFRvIGltcGxlbWVudCB0aGUgY3VzdG9tIHZhbGlkYXRpb24gbG9naWMgb2YgeW91ciBlbGVtZW50LCB5b3UgbXVzdCBvdmVycmlkZVxuICogdGhlIHByb3RlY3RlZCBgX2dldFZhbGlkaXR5KClgIG1ldGhvZCBvZiB0aGlzIGJlaGF2aW91ciwgcmF0aGVyIHRoYW5cbiAqIGB2YWxpZGF0ZSgpYC4gU2VlXG4gKiBbdGhpc10oaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9pcm9uLWZvcm0vYmxvYi9tYXN0ZXIvZGVtby9zaW1wbGUtZWxlbWVudC5odG1sKVxuICogZm9yIGFuIGV4YW1wbGUuXG4gKlxuICogIyMjIEFjY2Vzc2liaWxpdHlcbiAqXG4gKiBDaGFuZ2luZyB0aGUgYGludmFsaWRgIHByb3BlcnR5LCBlaXRoZXIgbWFudWFsbHkgb3IgYnkgY2FsbGluZyBgdmFsaWRhdGUoKWBcbiAqIHdpbGwgdXBkYXRlIHRoZSBgYXJpYS1pbnZhbGlkYCBhdHRyaWJ1dGUuXG4gKlxuICogQGRlbW8gZGVtby9pbmRleC5odG1sXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uVmFsaWRhdGFibGVCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgdmFsaWRhdG9yIHRvIHVzZS5cbiAgICAgKi9cbiAgICB2YWxpZGF0b3I6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgbGFzdCBjYWxsIHRvIGB2YWxpZGF0ZWAgaXMgaW52YWxpZC5cbiAgICAgKi9cbiAgICBpbnZhbGlkOiB7XG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgb2JzZXJ2ZXI6ICdfaW52YWxpZENoYW5nZWQnXG4gICAgfSxcbiAgfSxcblxuICByZWdpc3RlcmVkOiBmdW5jdGlvbigpIHtcbiAgICBJcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEgPSBuZXcgSXJvbk1ldGEoe3R5cGU6ICd2YWxpZGF0b3InfSk7XG4gIH0sXG5cbiAgX2ludmFsaWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pbnZhbGlkKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgIH1cbiAgfSxcblxuICAvKiBSZWNvbXB1dGUgdGhpcyBldmVyeSB0aW1lIGl0J3MgbmVlZGVkLCBiZWNhdXNlIHdlIGRvbid0IGtub3cgaWYgdGhlXG4gICAqIHVuZGVybHlpbmcgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhIGhhcyBjaGFuZ2VkLiAqL1xuICBnZXQgX3ZhbGlkYXRvcigpIHtcbiAgICByZXR1cm4gSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhICYmXG4gICAgICAgIElyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YS5ieUtleSh0aGlzLnZhbGlkYXRvcik7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbGlkYXRvciBgdmFsaWRhdG9yYCBleGlzdHMuXG4gICAqL1xuICBoYXNWYWxpZGF0b3I6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IgIT0gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBgdmFsdWVgIGlzIHZhbGlkLCBhbmQgdXBkYXRlcyBgaW52YWxpZGAuIElmIHlvdSB3YW50XG4gICAqIHlvdXIgZWxlbWVudCB0byBoYXZlIGN1c3RvbSB2YWxpZGF0aW9uIGxvZ2ljLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2Q7XG4gICAqIG92ZXJyaWRlIGBfZ2V0VmFsaWRpdHkodmFsdWUpYCBpbnN0ZWFkLlxuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBEZXByZWNhdGVkOiBUaGUgdmFsdWUgdG8gYmUgdmFsaWRhdGVkLiBCeSBkZWZhdWx0LFxuICAgKiBpdCBpcyBwYXNzZWQgdG8gdGhlIHZhbGlkYXRvcidzIGB2YWxpZGF0ZSgpYCBmdW5jdGlvbiwgaWYgYSB2YWxpZGF0b3IgaXNcbiAgIHNldC5cbiAgICogSWYgdGhpcyBhcmd1bWVudCBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIHRoZSBlbGVtZW50J3MgYHZhbHVlYCBwcm9wZXJ0eVxuICAgKiBpcyB1c2VkLCBpZiBpdCBleGlzdHMuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC5cbiAgICovXG4gIHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vIElmIHRoaXMgaXMgYW4gZWxlbWVudCB0aGF0IGFsc28gaGFzIGEgdmFsdWUgcHJvcGVydHksIGFuZCB0aGVyZSB3YXNcbiAgICAvLyBubyBleHBsaWNpdCB2YWx1ZSBhcmd1bWVudCBwYXNzZWQsIHVzZSB0aGUgZWxlbWVudCdzIHByb3BlcnR5IGluc3RlYWQuXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgdGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgdGhpcy5pbnZhbGlkID0gIXRoaXMuX2dldFZhbGlkaXR5KHRoaXMudmFsdWUpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuaW52YWxpZCA9ICF0aGlzLl9nZXRWYWxpZGl0eSh2YWx1ZSk7XG4gICAgcmV0dXJuICF0aGlzLmludmFsaWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLiAgQnkgZGVmYXVsdCwgaXQgaXMgcGFzc2VkXG4gICAqIHRvIHRoZSB2YWxpZGF0b3IncyBgdmFsaWRhdGUoKWAgZnVuY3Rpb24sIGlmIGEgdmFsaWRhdG9yIGlzIHNldC4gWW91XG4gICAqIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB5b3Ugd2FudCB0byBpbXBsZW1lbnQgY3VzdG9tIHZhbGlkaXR5XG4gICAqIGxvZ2ljIGZvciB5b3VyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgdmFsaWRhdGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuXG4gICAqL1xuXG4gIF9nZXRWYWxpZGl0eTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodGhpcy5oYXNWYWxpZGF0b3IoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yLCBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL2lyb24tY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yL2lyb24tY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yLmpzJztcblxuaW1wb3J0IHtQYXBlcklua3lGb2N1c0JlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWlua3ktZm9jdXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQYXBlclJpcHBsZUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogVXNlIGBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JgIHRvIGltcGxlbWVudCBhIGN1c3RvbSBlbGVtZW50IHRoYXQgaGFzIGFcbiAqIGBjaGVja2VkYCBwcm9wZXJ0eSBzaW1pbGFyIHRvIGBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcmAgYW5kIGlzIGNvbXBhdGlibGVcbiAqIHdpdGggaGF2aW5nIGEgcmlwcGxlIGVmZmVjdC5cbiAqIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsID0ge1xuICAvKipcbiAgICogU3luY2hyb25pemVzIHRoZSBlbGVtZW50J3MgY2hlY2tlZCBzdGF0ZSB3aXRoIGl0cyByaXBwbGUgZWZmZWN0LlxuICAgKi9cbiAgX2NoZWNrZWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGwuX2NoZWNrZWRDaGFuZ2VkLmNhbGwodGhpcyk7XG4gICAgaWYgKHRoaXMuaGFzUmlwcGxlKCkpIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5fcmlwcGxlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZS5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFN5bmNocm9uaXplcyB0aGUgZWxlbWVudCdzIGBhY3RpdmVgIGFuZCBgY2hlY2tlZGAgc3RhdGUuXG4gICAqL1xuICBfYnV0dG9uU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBQYXBlclJpcHBsZUJlaGF2aW9yLl9idXR0b25TdGF0ZUNoYW5nZWQuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmFjdGl2ZTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yID0gW1xuICBQYXBlcklua3lGb2N1c0JlaGF2aW9yLFxuICBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcixcbiAgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbFxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7UGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UGFwZXJJbmt5Rm9jdXNCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWJlaGF2aW9ycy9wYXBlci1pbmt5LWZvY3VzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge2FmdGVyTmV4dFJlbmRlcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVuZGVyLXN0YXR1cy5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGA8c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemU6IHZhcigtLXBhcGVyLWNoZWNrYm94LXNpemUsIDE4cHgpO1xuICAgIC8qIC0xcHggaXMgYSBzZW50aW5lbCBmb3IgdGhlIGRlZmF1bHQgYW5kIGlzIHJlcGxhY2VkIGluIFxcYGF0dGFjaGVkXFxgLiAqL1xuICAgIC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1pbmstc2l6ZTogdmFyKC0tcGFwZXItY2hlY2tib3gtaW5rLXNpemUsIC0xcHgpO1xuICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgOmhvc3QoOmZvY3VzKSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjY2hlY2tib3hDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUpO1xuICAgIG1pbi13aWR0aDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKTtcbiAgICBtYXJnaW46IHZhcigtLXBhcGVyLWNoZWNrYm94LW1hcmdpbiwgaW5pdGlhbCk7XG4gICAgdmVydGljYWwtYWxpZ246IHZhcigtLXBhcGVyLWNoZWNrYm94LXZlcnRpY2FsLWFsaWduLCBtaWRkbGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gIH1cblxuICAjaW5rIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAvKiBDZW50ZXIgdGhlIHJpcHBsZSBpbiB0aGUgY2hlY2tib3ggYnkgbmVnYXRpdmUgb2Zmc2V0dGluZyBpdCBieVxuICAgICAqIChpbmtXaWR0aCAtIHJpcHBsZVdpZHRoKSAvIDIgKi9cbiAgICB0b3A6IGNhbGMoMHB4IC0gKHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtaW5rLXNpemUpIC0gdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKSkgLyAyKTtcbiAgICBsZWZ0OiBjYWxjKDBweCAtICh2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplKSAtIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSkpIC8gMik7XG4gICAgd2lkdGg6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtaW5rLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1pbmstc2l6ZSk7XG4gICAgY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1pbmstY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gICNpbms6ZGlyKHJ0bCkge1xuICAgIHJpZ2h0OiBjYWxjKDBweCAtICh2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplKSAtIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSkpIC8gMik7XG4gICAgbGVmdDogYXV0bztcbiAgfVxuXG4gICNpbmtbY2hlY2tlZF0ge1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC1jaGVja2VkLWluay1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICB9XG5cbiAgI2NoZWNrYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAycHg7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTQwbXMsIGJvcmRlci1jb2xvciAxNDBtcztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zLCBib3JkZXItY29sb3IgMTQwbXM7XG4gIH1cblxuICAvKiBjaGVja2JveCBjaGVja2VkIGFuaW1hdGlvbnMgKi9cbiAgI2NoZWNrYm94LmNoZWNrZWQgI2NoZWNrbWFyayB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrbWFyay1leHBhbmQgMTQwbXMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBjaGVja21hcmstZXhwYW5kIDE0MG1zIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG5cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGNoZWNrbWFyay1leHBhbmQge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAwKSByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgY2hlY2ttYXJrLWV4cGFuZCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKSByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gIH1cblxuICAjY2hlY2tib3guY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICB9XG5cbiAgI2NoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNiU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogY2FsYygyLzE1ICogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKSk7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogY2FsYygyLzE1ICogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC1jaGVja21hcmstY29sb3IsIHdoaXRlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDk3JSA4NiU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogOTclIDg2JTtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogcHJvdGVjdCBhZ2FpbnN0IHBhZ2UtbGV2ZWwgYm94LXNpemluZyAqL1xuICB9XG5cbiAgI2NoZWNrbWFyazpkaXIocnRsKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTQlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxNCU7XG4gIH1cblxuICAvKiBsYWJlbCAqL1xuICAjY2hlY2tib3hMYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFwZXItY2hlY2tib3gtbGFiZWwtc3BhY2luZywgOHB4KTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LWxhYmVsLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBAYXBwbHkgLS1wYXBlci1jaGVja2JveC1sYWJlbDtcbiAgfVxuXG4gIDpob3N0KFtjaGVja2VkXSkgI2NoZWNrYm94TGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC1sYWJlbC1jaGVja2VkLWNvbG9yLCB2YXIoLS1wYXBlci1jaGVja2JveC1sYWJlbC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSkpO1xuICAgIEBhcHBseSAtLXBhcGVyLWNoZWNrYm94LWxhYmVsLWNoZWNrZWQ7XG4gIH1cblxuICAjY2hlY2tib3hMYWJlbDpkaXIocnRsKSB7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFwZXItY2hlY2tib3gtbGFiZWwtc3BhY2luZywgOHB4KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAjY2hlY2tib3hMYWJlbFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLyogZGlzYWJsZWQgc3RhdGUgKi9cblxuICA6aG9zdChbZGlzYWJsZWRdKSAjY2hlY2tib3gge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gIH1cblxuICA6aG9zdChbZGlzYWJsZWRdW2NoZWNrZWRdKSAjY2hlY2tib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgOmhvc3QoW2Rpc2FibGVkXSkgI2NoZWNrYm94TGFiZWwgIHtcbiAgICBvcGFjaXR5OiAwLjY1O1xuICB9XG5cbiAgLyogaW52YWxpZCBzdGF0ZSAqL1xuICAjY2hlY2tib3guaW52YWxpZDpub3QoLmNoZWNrZWQpIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LWVycm9yLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICB9XG48L3N0eWxlPlxuXG48ZGl2IGlkPVwiY2hlY2tib3hDb250YWluZXJcIj5cbiAgPGRpdiBpZD1cImNoZWNrYm94XCIgY2xhc3NcXCQ9XCJbW19jb21wdXRlQ2hlY2tib3hDbGFzcyhjaGVja2VkLCBpbnZhbGlkKV1dXCI+XG4gICAgPGRpdiBpZD1cImNoZWNrbWFya1wiIGNsYXNzXFwkPVwiW1tfY29tcHV0ZUNoZWNrbWFya0NsYXNzKGNoZWNrZWQpXV1cIj48L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBpZD1cImNoZWNrYm94TGFiZWxcIj48c2xvdD48L3Nsb3Q+PC9kaXY+YDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bQ2hlY2tib3hdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzZWxlY3Rpb24tY29udHJvbHMtY2hlY2tib3gpXG5cbmBwYXBlci1jaGVja2JveGAgaXMgYSBidXR0b24gdGhhdCBjYW4gYmUgZWl0aGVyIGNoZWNrZWQgb3IgdW5jaGVja2VkLiBVc2VyIGNhblxudGFwIHRoZSBjaGVja2JveCB0byBjaGVjayBvciB1bmNoZWNrIGl0LiBVc3VhbGx5IHlvdSB1c2UgY2hlY2tib3hlcyB0byBhbGxvd1xudXNlciB0byBzZWxlY3QgbXVsdGlwbGUgb3B0aW9ucyBmcm9tIGEgc2V0LiBJZiB5b3UgaGF2ZSBhIHNpbmdsZSBPTi9PRkYgb3B0aW9uLFxuYXZvaWQgdXNpbmcgYSBzaW5nbGUgY2hlY2tib3ggYW5kIHVzZSBgcGFwZXItdG9nZ2xlLWJ1dHRvbmAgaW5zdGVhZC5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1jaGVja2JveD5sYWJlbDwvcGFwZXItY2hlY2tib3g+XG5cbiAgICA8cGFwZXItY2hlY2tib3ggY2hlY2tlZD4gbGFiZWw8L3BhcGVyLWNoZWNrYm94PlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItY2hlY2tib3gtdW5jaGVja2VkLWJhY2tncm91bmQtY29sb3JgIHwgQ2hlY2tib3ggYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgY2hlY2tlZCB8IGB0cmFuc3BhcmVudGBcbmAtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvcmAgfCBDaGVja2JveCBib3JkZXIgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGNoZWNrZWQgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtaW5rLWNvbG9yYCB8IFNlbGVjdGVkL2ZvY3VzIHJpcHBsZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgY2hlY2tlZCB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWNoZWNrYm94LWNoZWNrZWQtY29sb3JgIHwgQ2hlY2tib3ggY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1jaGVja2VkLWluay1jb2xvcmAgfCBTZWxlY3RlZC9mb2N1cyByaXBwbGUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1jaGVja21hcmstY29sb3JgIHwgQ2hlY2ttYXJrIGNvbG9yIHwgYHdoaXRlYFxuYC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY29sb3JgIHwgTGFiZWwgY29sb3IgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1sYWJlbC1jaGVja2VkLWNvbG9yYCB8IExhYmVsIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGNoZWNrZWQgfCBgLS1wYXBlci1jaGVja2JveC1sYWJlbC1jb2xvcmBcbmAtLXBhcGVyLWNoZWNrYm94LWxhYmVsLXNwYWNpbmdgIHwgU3BhY2luZyBiZXR3ZWVuIHRoZSBsYWJlbCBhbmQgdGhlIGNoZWNrYm94IHwgYDhweGBcbmAtLXBhcGVyLWNoZWNrYm94LWxhYmVsYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHwgYHt9YFxuYC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY2hlY2tlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB3aGVuIHRoZSBpbnB1dCBpcyBjaGVja2VkIHwgYHt9YFxuYC0tcGFwZXItY2hlY2tib3gtZXJyb3ItY29sb3JgIHwgQ2hlY2tib3ggY29sb3Igd2hlbiBpbnZhbGlkIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1zaXplYCB8IFNpemUgb2YgdGhlIGNoZWNrYm94IHwgYDE4cHhgXG5gLS1wYXBlci1jaGVja2JveC1pbmstc2l6ZWAgfCBTaXplIG9mIHRoZSByaXBwbGUgfCBgNDhweGBcbmAtLXBhcGVyLWNoZWNrYm94LW1hcmdpbmAgfCBNYXJnaW4gYXJvdW5kIHRoZSBjaGVja2JveCBjb250YWluZXIgfCBgaW5pdGlhbGBcbmAtLXBhcGVyLWNoZWNrYm94LXZlcnRpY2FsLWFsaWduYCB8IFZlcnRpY2FsIGFsaWdubWVudCBvZiB0aGUgY2hlY2tib3ggY29udGFpbmVyIHwgYG1pZGRsZWBcblxuVGhpcyBlbGVtZW50IGFwcGxpZXMgdGhlIG1peGluIGAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2VgIGJ1dCBkb2VzIG5vdCBpbXBvcnRcbmBwYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sYC4gSW4gb3JkZXIgdG8gYXBwbHkgdGhlIGBSb2JvdG9gIGZvbnQgdG8gdGhpc1xuZWxlbWVudCwgbWFrZSBzdXJlIHlvdSd2ZSBpbXBvcnRlZCBgcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbGAuXG5cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItY2hlY2tib3gnLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcl0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ2NoZWNrYm94JywgJ2FyaWEtY2hlY2tlZCc6IGZhbHNlLCB0YWJpbmRleDogMH0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgKlxuICAgICAqIEBldmVudCBjaGFuZ2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBldmVudCBpcm9uLWNoYW5nZVxuICAgICAqL1xuICAgIGFyaWFBY3RpdmVBdHRyaWJ1dGU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnYXJpYS1jaGVja2VkJ31cbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gV2FpdCB1bnRpbCBzdHlsZXMgaGF2ZSByZXNvbHZlZCB0byBjaGVjayBmb3IgdGhlIGRlZmF1bHQgc2VudGluZWwuXG4gICAgLy8gU2VlIHBvbHltZXIjNDAwOSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgIGFmdGVyTmV4dFJlbmRlcih0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbmtTaXplID1cbiAgICAgICAgICB0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplJylcbiAgICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgIC8vIElmIHVuc2V0LCBjb21wdXRlIGFuZCBzZXQgdGhlIGRlZmF1bHQgYC0tcGFwZXItY2hlY2tib3gtaW5rLXNpemVgLlxuICAgICAgaWYgKGlua1NpemUgPT09ICctMXB4Jykge1xuICAgICAgICB2YXIgY2hlY2tib3hTaXplVGV4dCA9XG4gICAgICAgICAgICB0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUnKVxuICAgICAgICAgICAgICAgIC50cmltKCk7XG5cbiAgICAgICAgdmFyIHVuaXRzID0gJ3B4JztcbiAgICAgICAgdmFyIHVuaXRzTWF0Y2hlcyA9IGNoZWNrYm94U2l6ZVRleHQubWF0Y2goL1tBLVphLXpdKyQvKTtcbiAgICAgICAgaWYgKHVuaXRzTWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHVuaXRzID0gdW5pdHNNYXRjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoZWNrYm94U2l6ZSA9IHBhcnNlRmxvYXQoY2hlY2tib3hTaXplVGV4dCk7XG4gICAgICAgIHZhciBkZWZhdWx0SW5rU2l6ZSA9ICg4IC8gMykgKiBjaGVja2JveFNpemU7XG5cbiAgICAgICAgaWYgKHVuaXRzID09PSAncHgnKSB7XG4gICAgICAgICAgZGVmYXVsdElua1NpemUgPSBNYXRoLmZsb29yKGRlZmF1bHRJbmtTaXplKTtcblxuICAgICAgICAgIC8vIFRoZSBjaGVja2JveCBhbmQgcmlwcGxlIG5lZWQgdG8gaGF2ZSB0aGUgc2FtZSBwYXJpdHkgc28gdGhhdCB0aGVpclxuICAgICAgICAgIC8vIGNlbnRlcnMgYWxpZ24uXG4gICAgICAgICAgaWYgKGRlZmF1bHRJbmtTaXplICUgMiAhPT0gY2hlY2tib3hTaXplICUgMikge1xuICAgICAgICAgICAgZGVmYXVsdElua1NpemUrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgICAgJy0tcGFwZXItY2hlY2tib3gtaW5rLXNpemUnOiBkZWZhdWx0SW5rU2l6ZSArIHVuaXRzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBfY29tcHV0ZUNoZWNrYm94Q2xhc3M6IGZ1bmN0aW9uKGNoZWNrZWQsIGludmFsaWQpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gJyc7XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnY2hlY2tlZCAnO1xuICAgIH1cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY2xhc3NOYW1lICs9ICdpbnZhbGlkJztcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfSxcblxuICBfY29tcHV0ZUNoZWNrbWFya0NsYXNzOiBmdW5jdGlvbihjaGVja2VkKSB7XG4gICAgcmV0dXJuIGNoZWNrZWQgPyAnJyA6ICdoaWRkZW4nO1xuICB9LFxuXG4gIC8vIGNyZWF0ZSByaXBwbGUgaW5zaWRlIHRoZSBjaGVja2JveENvbnRhaW5lclxuICBfY3JlYXRlUmlwcGxlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSB0aGlzLiQuY2hlY2tib3hDb250YWluZXI7XG4gICAgcmV0dXJuIFBhcGVySW5reUZvY3VzQmVoYXZpb3JJbXBsLl9jcmVhdGVSaXBwbGUuY2FsbCh0aGlzKTtcbiAgfVxuXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqXG4gKiBVc2UgYFBvbHltZXIuUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3JgIHRvIGltcGxlbWVudCBhbiBhZGQtb24gZm9yXG4gKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLiBBIGFkZC1vbiBhcHBlYXJzIGJlbG93IHRoZSBpbnB1dCwgYW5kIG1heSBkaXNwbGF5XG4gKiBpbmZvcm1hdGlvbiBiYXNlZCBvbiB0aGUgaW5wdXQgdmFsdWUgYW5kIHZhbGlkaXR5IHN1Y2ggYXMgYSBjaGFyYWN0ZXIgY291bnRlclxuICogb3IgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcGVySW5wdXRBZGRvbkJlaGF2aW9yID0ge1xuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5maXJlKCdhZGRvbi1hdHRhY2hlZCcpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb24gY2FsbGVkIGJ5IGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgd2hlbiB0aGUgaW5wdXQgdmFsdWUgb3JcbiAgICogdmFsaWRpdHkgY2hhbmdlcy5cbiAgICogQHBhcmFtIHt7XG4gICAqICAgaW52YWxpZDogYm9vbGVhbixcbiAgICogICBpbnB1dEVsZW1lbnQ6IChFbGVtZW50fHVuZGVmaW5lZCksXG4gICAqICAgdmFsdWU6IChzdHJpbmd8dW5kZWZpbmVkKVxuICAgKiB9fSBzdGF0ZSAtXG4gICAqICAgICBpbnB1dEVsZW1lbnQ6IFRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiAgICAgdmFsdWU6IFRoZSBpbnB1dCB2YWx1ZS5cbiAgICogICAgIGludmFsaWQ6IFRydWUgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAqL1xuICB1cGRhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7fVxuXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25BMTF5S2V5c0JlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25Db250cm9sU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuLy8gR2VuZXJhdGUgdW5pcXVlLCBtb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgSURzIGZvciBsYWJlbHMgKG5lZWRlZCBieVxuLy8gYXJpYS1sYWJlbGxlZGJ5KSBhbmQgYWRkLW9ucy5cbmV4cG9ydCBjb25zdCBQYXBlcklucHV0SGVscGVyID0ge307XG5cblBhcGVySW5wdXRIZWxwZXIuTmV4dExhYmVsSUQgPSAxO1xuUGFwZXJJbnB1dEhlbHBlci5OZXh0QWRkb25JRCA9IDE7XG5QYXBlcklucHV0SGVscGVyLk5leHRJbnB1dElEID0gMTtcblxuLyoqXG4gKiBVc2UgYFBhcGVySW5wdXRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGlucHV0cyB3aXRoIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAuXG4gKiBUaGlzIGJlaGF2aW9yIGlzIGltcGxlbWVudGVkIGJ5IGA8cGFwZXItaW5wdXQ+YC4gSXQgZXhwb3NlcyBhIG51bWJlciBvZlxuICogcHJvcGVydGllcyBmcm9tIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgYW5kIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCBhbmRcbiAqIHRoZXkgc2hvdWxkIGJlIGJvdW5kIGluIHlvdXIgdGVtcGxhdGUuXG4gKlxuICogVGhlIGlucHV0IGVsZW1lbnQgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBgaW5wdXRFbGVtZW50YCBwcm9wZXJ0eSBpZiB5b3UgbmVlZFxuICogdG8gYWNjZXNzIHByb3BlcnRpZXMgb3IgbWV0aG9kcyB0aGF0IGFyZSBub3QgZXhwb3NlZC5cbiAqIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJJbnB1dEJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYXBlcklucHV0QmVoYXZpb3JJbXBsID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSBpbnB1dCBjaGFuZ2VzIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uLlxuICAgICAqXG4gICAgICogQGV2ZW50IGNoYW5nZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIGZvciB0aGlzIGlucHV0LiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICogYDxsYWJlbD5gJ3MgY29udGVudCBhbmQgYGhpZGRlbmAgcHJvcGVydHksIGUuZy5cbiAgICAgKiBgPGxhYmVsIGhpZGRlbiQ9XCJbWyFsYWJlbF1dXCI+W1tsYWJlbF1dPC9sYWJlbD5gIGluIHlvdXIgYHRlbXBsYXRlYFxuICAgICAqL1xuICAgIGxhYmVsOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBmb3IgdGhpcyBpbnB1dC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAqIHRoZSBgPGlyb24taW5wdXQ+YCdzIGBiaW5kVmFsdWVgXG4gICAgICogcHJvcGVydHksIG9yIHRoZSB2YWx1ZSBwcm9wZXJ0eSBvZiB5b3VyIGlucHV0IHRoYXQgaXMgYG5vdGlmeTp0cnVlYC5cbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKi9cbiAgICB2YWx1ZToge25vdGlmeTogdHJ1ZSwgdHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBpbnB1dC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAqIGJvdGggdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBhbmQgdGhlIGlucHV0J3MgYGRpc2FibGVkYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIGludmFsaWQuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3JcbiAgICAgKiB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG8gYm90aCB0aGVcbiAgICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYW5kIHRoZSBpbnB1dCdzIGBpbnZhbGlkYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIElmIGBhdXRvVmFsaWRhdGVgIGlzIHRydWUsIHRoZSBgaW52YWxpZGAgYXR0cmlidXRlIGlzIG1hbmFnZWRcbiAgICAgKiBhdXRvbWF0aWNhbGx5LCB3aGljaCBjYW4gY2xvYmJlciBhdHRlbXB0cyB0byBtYW5hZ2UgaXQgbWFudWFsbHkuXG4gICAgICovXG4gICAgaW52YWxpZDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGlzIHRvIHNwZWNpZnkgdGhlIHBhdHRlcm4gYWxsb3dlZCBieSBgcHJldmVudEludmFsaWRJbnB1dGAuIElmXG4gICAgICogeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGFsbG93ZWRQYXR0ZXJuYFxuICAgICAqIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGFsbG93ZWRQYXR0ZXJuOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBpbnB1dC4gVGhlIHN1cHBvcnRlZCB0eXBlcyBhcmUgdGhlXG4gICAgICogW25hdGl2ZSBpbnB1dCdzXG4gICAgICogdHlwZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNGb3JtXzxpbnB1dD5fdHlwZXMpLlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIChQb2x5bWVyIDEpIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIG9yXG4gICAgICogKFBvbHltZXIgMilcbiAgICAgKiBgPGlyb24taW5wdXQ+YCdzIGB0eXBlYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICB0eXBlOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhbGlzdCBvZiB0aGUgaW5wdXQgKGlmIGFueSkuIFRoaXMgc2hvdWxkIG1hdGNoIHRoZSBpZCBvZiBhblxuICAgICAqIGV4aXN0aW5nIGA8ZGF0YWxpc3Q+YC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnRcbiAgICAgKiB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dFxuICAgICAqIGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbGlzdGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgbGlzdDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBBIHBhdHRlcm4gdG8gdmFsaWRhdGUgdGhlIGBpbnB1dGAgd2l0aC4gSWYgeW91J3JlIHVzaW5nXG4gICAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmRcbiAgICAgKiB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcGF0dGVybmAgcHJvcGVydHkuXG4gICAgICovXG4gICAgcGF0dGVybjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBtYXJrIHRoZSBpbnB1dCBhcyByZXF1aXJlZC4gSWYgeW91J3JlIHVzaW5nXG4gICAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmRcbiAgICAgKiB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcmVxdWlyZWRgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBlcnJvciBtZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGUgaW5wdXQgaXMgaW52YWxpZC4gSWYgeW91J3JlIHVzaW5nXG4gICAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsXG4gICAgICogYmluZCB0aGlzIHRvIHRoZSBgPHBhcGVyLWlucHV0LWVycm9yPmAncyBjb250ZW50LCBpZiB1c2luZy5cbiAgICAgKi9cbiAgICBlcnJvck1lc3NhZ2U6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gc2hvdyBhIGNoYXJhY3RlciBjb3VudGVyLlxuICAgICAqL1xuICAgIGNoYXJDb3VudGVyOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhlIGZsb2F0aW5nIGxhYmVsLiBJZiB5b3UncmUgdXNpbmdcbiAgICAgKiBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZFxuICAgICAqIHRoaXMgdG8gdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBgbm9MYWJlbEZsb2F0YCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBub0xhYmVsRmxvYXQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gYWx3YXlzIGZsb2F0IHRoZSBsYWJlbC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvclxuICAgICAqIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGVcbiAgICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYGFsd2F5c0Zsb2F0TGFiZWxgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGFsd2F5c0Zsb2F0TGFiZWw6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gYXV0by12YWxpZGF0ZSB0aGUgaW5wdXQgdmFsdWUuIElmIHlvdSdyZSB1c2luZ1xuICAgICAqIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kXG4gICAgICogdGhpcyB0byB0aGUgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGBhdXRvVmFsaWRhdGVgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGF1dG9WYWxpZGF0ZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIHRoZSB2YWxpZGF0b3IgdG8gdXNlLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvXG4gICAgICogaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvXG4gICAgICogdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGB2YWxpZGF0b3JgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHZhbGlkYXRvcjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvLyBIVE1MSW5wdXRFbGVtZW50IGF0dHJpYnV0ZXMgZm9yIGJpbmRpbmcgaWYgbmVlZGVkXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b2NvbXBsZXRlYFxuICAgICAqIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGF1dG9jb21wbGV0ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdvZmYnfSxcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvZm9jdXNgXG4gICAgICogcHJvcGVydHkuXG4gICAgICovXG4gICAgYXV0b2ZvY3VzOiB7dHlwZTogQm9vbGVhbiwgb2JzZXJ2ZXI6ICdfYXV0b2ZvY3VzQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGlucHV0bW9kZWBcbiAgICAgKiBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBpbnB1dG1vZGU6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbWlubGVuZ3RoYFxuICAgICAqIHByb3BlcnR5LlxuICAgICAqL1xuICAgIG1pbmxlbmd0aDoge3R5cGU6IE51bWJlcn0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtYXhsZW5ndGhgXG4gICAgICogcHJvcGVydHkuXG4gICAgICovXG4gICAgbWF4bGVuZ3RoOiB7dHlwZTogTnVtYmVyfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIChudW1lcmljIG9yIGRhdGUtdGltZSkgaW5wdXQgdmFsdWUuXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1pbmAgcHJvcGVydHkuXG4gICAgICovXG4gICAgbWluOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIChudW1lcmljIG9yIGRhdGUtdGltZSkgaW5wdXQgdmFsdWUuXG4gICAgICogQ2FuIGJlIGEgU3RyaW5nIChlLmcuIGBcIjIwMDAtMDEtMDFcImApIG9yIGEgTnVtYmVyIChlLmcuIGAyYCkuXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1heGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgbWF4OiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIExpbWl0cyB0aGUgbnVtZXJpYyBvciBkYXRlLXRpbWUgaW5jcmVtZW50cy5cbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgc3RlcGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgc3RlcDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbmFtZWAgcHJvcGVydHkuXG4gICAgICovXG4gICAgbmFtZToge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBBIHBsYWNlaG9sZGVyIHN0cmluZyBpbiBhZGRpdGlvbiB0byB0aGUgbGFiZWwuIElmIHRoaXMgaXMgc2V0LCB0aGUgbGFiZWxcbiAgICAgKiB3aWxsIGFsd2F5cyBmbG9hdC5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgLy8gbmVlZCB0byBzZXQgYSBkZWZhdWx0IHNvIF9jb21wdXRlQWx3YXlzRmxvYXRMYWJlbCBpcyBydW5cbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcmVhZG9ubHlgXG4gICAgICogcHJvcGVydHkuXG4gICAgICovXG4gICAgcmVhZG9ubHk6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHNpemVgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHNpemU6IHt0eXBlOiBOdW1iZXJ9LFxuXG4gICAgLy8gTm9uc3RhbmRhcmQgYXR0cmlidXRlcyBmb3IgYmluZGluZyBpZiBuZWVkZWRcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvY2FwaXRhbGl6ZWBcbiAgICAgKiBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBhdXRvY2FwaXRhbGl6ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdub25lJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b2NvcnJlY3RgXG4gICAgICogcHJvcGVydHkuXG4gICAgICovXG4gICAgYXV0b2NvcnJlY3Q6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnb2ZmJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b3NhdmVgXG4gICAgICogcHJvcGVydHksIHVzZWQgd2l0aCB0eXBlPXNlYXJjaC5cbiAgICAgKi9cbiAgICBhdXRvc2F2ZToge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgcmVzdWx0c2AgcHJvcGVydHksXG4gICAgICogdXNlZCB3aXRoIHR5cGU9c2VhcmNoLlxuICAgICAqL1xuICAgIHJlc3VsdHM6IHt0eXBlOiBOdW1iZXJ9LFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGFjY2VwdGAgcHJvcGVydHksXG4gICAgICogdXNlZCB3aXRoIHR5cGU9ZmlsZS5cbiAgICAgKi9cbiAgICBhY2NlcHQ6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGVgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbXVsdGlwbGVgIHByb3BlcnR5LFxuICAgICAqIHVzZWQgd2l0aCB0eXBlPWZpbGUuXG4gICAgICovXG4gICAgbXVsdGlwbGU6IHt0eXBlOiBCb29sZWFufSxcblxuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIF9hcmlhRGVzY3JpYmVkQnk6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ30sXG5cbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICBfYXJpYUxhYmVsbGVkQnk6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ30sXG5cbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICBfaW5wdXRJZDoge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnfVxuICB9LFxuXG4gIGxpc3RlbmVyczoge1xuICAgICdhZGRvbi1hdHRhY2hlZCc6ICdfb25BZGRvbkF0dGFjaGVkJyxcbiAgfSxcblxuICAvKipcbiAgICogQHR5cGUgeyFPYmplY3R9XG4gICAqL1xuICBrZXlCaW5kaW5nczogeydzaGlmdCt0YWI6a2V5ZG93bic6ICdfb25TaGlmdFRhYkRvd24nfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgaG9zdEF0dHJpYnV0ZXM6IHt0YWJpbmRleDogMH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldCBpbnB1dEVsZW1lbnQoKSB7XG4gICAgLy8gQ2hyb21lIGdlbmVyYXRlcyBhdWRpdCBlcnJvcnMgaWYgYW4gPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiPiBoYXMgYVxuICAgIC8vIGR1cGxpY2F0ZSBJRCwgd2hpY2ggaXMgYWxtb3N0IGFsd2F5cyB0cnVlIGluIFNoYWR5IERPTS4gR2VuZXJhdGVcbiAgICAvLyBhIHVuaXF1ZSBJRCBpbnN0ZWFkLlxuICAgIGlmICghdGhpcy4kKSB7XG4gICAgICB0aGlzLiQgPSB7fVxuICAgIH1cbiAgICBpZiAoIXRoaXMuJC5pbnB1dCkge1xuICAgICAgdGhpcy5fZ2VuZXJhdGVJbnB1dElkKCk7XG4gICAgICB0aGlzLiQuaW5wdXQgPSB0aGlzLiQkKCcjJyArIHRoaXMuX2lucHV0SWQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy4kLmlucHV0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBmb2N1c2FibGUgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUhUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IF9mb2N1c2FibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudDtcbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBUaGVzZSB0eXBlcyBoYXZlIHNvbWUgZGVmYXVsdCBwbGFjZWhvbGRlciB0ZXh0OyBvdmVybGFwcGluZ1xuICAgIC8vIHRoZSBsYWJlbCBvbiB0b3Agb2YgaXQgbG9va3MgdGVycmlibGUuIEF1dG8tZmxvYXQgdGhlIGxhYmVsIGluIHRoaXMgY2FzZS5cbiAgICB0aGlzLl90eXBlc1RoYXRIYXZlVGV4dCA9XG4gICAgICAgIFsnZGF0ZScsICdkYXRldGltZScsICdkYXRldGltZS1sb2NhbCcsICdtb250aCcsICd0aW1lJywgJ3dlZWsnLCAnZmlsZSddO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVBcmlhTGFiZWxsZWRCeSgpO1xuXG4gICAgLy8gSW4gdGhlIDIuMCB2ZXJzaW9uIG9mIHRoZSBlbGVtZW50LCB0aGlzIGlzIGhhbmRsZWQgaW4gYG9uSXJvbklucHV0UmVhZHlgLFxuICAgIC8vIGkuZS4gYWZ0ZXIgdGhlIG5hdGl2ZSBpbnB1dCBoYXMgZmluaXNoZWQgZGlzdHJpYnV0aW5nLiBJbiB0aGUgMS4wXG4gICAgLy8gdmVyc2lvbiwgdGhlIGlucHV0IGlzIGluIHRoZSBzaGFkb3cgdHJlZSwgc28gaXQncyBhbHJlYWR5IGF2YWlsYWJsZS5cbiAgICBpZiAoIVBvbHltZXJFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50ICYmXG4gICAgICAgIHRoaXMuX3R5cGVzVGhhdEhhdmVUZXh0LmluZGV4T2YodGhpcy5pbnB1dEVsZW1lbnQudHlwZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFsd2F5c0Zsb2F0TGFiZWwgPSB0cnVlO1xuICAgIH1cbiAgfSxcblxuICBfYXBwZW5kU3RyaW5nV2l0aFNwYWNlOiBmdW5jdGlvbihzdHIsIG1vcmUpIHtcbiAgICBpZiAoc3RyKSB7XG4gICAgICBzdHIgPSBzdHIgKyAnICcgKyBtb3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBtb3JlO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9LFxuXG4gIF9vbkFkZG9uQXR0YWNoZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGRvbShldmVudCkucm9vdFRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmlkKSB7XG4gICAgICB0aGlzLl9hcmlhRGVzY3JpYmVkQnkgPVxuICAgICAgICAgIHRoaXMuX2FwcGVuZFN0cmluZ1dpdGhTcGFjZSh0aGlzLl9hcmlhRGVzY3JpYmVkQnksIHRhcmdldC5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpZCA9ICdwYXBlci1pbnB1dC1hZGQtb24tJyArIFBhcGVySW5wdXRIZWxwZXIuTmV4dEFkZG9uSUQrKztcbiAgICAgIHRhcmdldC5pZCA9IGlkO1xuICAgICAgdGhpcy5fYXJpYURlc2NyaWJlZEJ5ID1cbiAgICAgICAgICB0aGlzLl9hcHBlbmRTdHJpbmdXaXRoU3BhY2UodGhpcy5fYXJpYURlc2NyaWJlZEJ5LCBpZCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgdGhlIGlucHV0IGVsZW1lbnQgYW5kIHNldHMgYW4gZXJyb3Igc3R5bGUgaWYgbmVlZGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgdmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC52YWxpZGF0ZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3J3YXJkIGZvY3VzIHRvIGlucHV0RWxlbWVudC4gT3ZlcnJpZGVuIGZyb20gSXJvbkNvbnRyb2xTdGF0ZS5cbiAgICovXG4gIF9mb2N1c0JsdXJIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgIElyb25Db250cm9sU3RhdGUuX2ZvY3VzQmx1ckhhbmRsZXIuY2FsbCh0aGlzLCBldmVudCk7XG5cbiAgICAvLyBGb3J3YXJkIHRoZSBmb2N1cyB0byB0aGUgbmVzdGVkIGlucHV0LlxuICAgIGlmICh0aGlzLmZvY3VzZWQgJiYgIXRoaXMuX3NoaWZ0VGFiUHJlc3NlZCAmJiB0aGlzLl9mb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBzaGlmdCt0YWIga2V5cHJlc3MgaXMgZGV0ZWN0ZWQgYnkgdGhlIG1lbnUuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEEga2V5IGNvbWJpbmF0aW9uIGV2ZW50LlxuICAgKi9cbiAgX29uU2hpZnRUYWJEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBvbGRUYWJJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIHRoaXMuX3NoaWZ0VGFiUHJlc3NlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgdGhpcy5hc3luYyhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIG9sZFRhYkluZGV4KTtcbiAgICAgIHRoaXMuX3NoaWZ0VGFiUHJlc3NlZCA9IGZhbHNlO1xuICAgIH0sIDEpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJZiBgYXV0b1ZhbGlkYXRlYCBpcyB0cnVlLCB0aGVuIHZhbGlkYXRlcyB0aGUgZWxlbWVudC5cbiAgICovXG4gIF9oYW5kbGVBdXRvVmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmF1dG9WYWxpZGF0ZSlcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVzdG9yZXMgdGhlIGN1cnNvciB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb24gYWZ0ZXIgdXBkYXRpbmcgdGhlIHZhbHVlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFsdWUgVGhlIHZhbHVlIHRoYXQgc2hvdWxkIGJlIHNhdmVkLlxuICAgKi9cbiAgdXBkYXRlVmFsdWVBbmRQcmVzZXJ2ZUNhcmV0OiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgIC8vIE5vdCBhbGwgZWxlbWVudHMgbWlnaHQgaGF2ZSBzZWxlY3Rpb24sIGFuZCBldmVuIGlmIHRoZXkgaGF2ZSB0aGVcbiAgICAvLyByaWdodCBwcm9wZXJ0aWVzLCBhY2Nlc3NpbmcgdGhlbSBtaWdodCB0aHJvdyBhbiBleGNlcHRpb24gKGxpa2UgZm9yXG4gICAgLy8gPGlucHV0IHR5cGU9bnVtYmVyPilcbiAgICB0cnkge1xuICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgIC8vIFRoZSBjdXJzb3IgYXV0b21hdGljYWxseSBqdW1wcyB0byB0aGUgZW5kIGFmdGVyIHJlLXNldHRpbmcgdGhlIHZhbHVlLFxuICAgICAgLy8gc28gcmVzdG9yZSBpdCB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb24uXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0O1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc3RhcnQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSnVzdCBzZXQgdGhlIHZhbHVlIGFuZCBnaXZlIHVwIG9uIHRoZSBjYXJldC5cbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsOiBmdW5jdGlvbihhbHdheXNGbG9hdExhYmVsLCBwbGFjZWhvbGRlcikge1xuICAgIHJldHVybiBwbGFjZWhvbGRlciB8fCBhbHdheXNGbG9hdExhYmVsO1xuICB9LFxuXG4gIF91cGRhdGVBcmlhTGFiZWxsZWRCeTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxhYmVsID0gZG9tKHRoaXMucm9vdCkucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcbiAgICBpZiAoIWxhYmVsKSB7XG4gICAgICB0aGlzLl9hcmlhTGFiZWxsZWRCeSA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbGFiZWxsZWRCeTtcbiAgICBpZiAobGFiZWwuaWQpIHtcbiAgICAgIGxhYmVsbGVkQnkgPSBsYWJlbC5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWxsZWRCeSA9ICdwYXBlci1pbnB1dC1sYWJlbC0nICsgUGFwZXJJbnB1dEhlbHBlci5OZXh0TGFiZWxJRCsrO1xuICAgICAgbGFiZWwuaWQgPSBsYWJlbGxlZEJ5O1xuICAgIH1cbiAgICB0aGlzLl9hcmlhTGFiZWxsZWRCeSA9IGxhYmVsbGVkQnk7XG4gIH0sXG5cbiAgX2dlbmVyYXRlSW5wdXRJZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9pbnB1dElkIHx8IHRoaXMuX2lucHV0SWQgPT09ICcnKSB7XG4gICAgICB0aGlzLl9pbnB1dElkID0gJ2lucHV0LScgKyBQYXBlcklucHV0SGVscGVyLk5leHRJbnB1dElEKys7XG4gICAgfVxuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBJbiB0aGUgU2hhZG93IERPTSwgdGhlIGBjaGFuZ2VgIGV2ZW50IGlzIG5vdCBsZWFrZWQgaW50byB0aGVcbiAgICAvLyBhbmNlc3RvciB0cmVlLCBzbyB3ZSBtdXN0IGRvIHRoaXMgbWFudWFsbHkuXG4gICAgLy8gU2VlXG4gICAgLy8gaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9zaGFkb3cvI2V2ZW50cy10aGF0LWFyZS1ub3QtbGVha2VkLWludG8tYW5jZXN0b3ItdHJlZXMuXG4gICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgdGhpcy5maXJlKFxuICAgICAgICAgIGV2ZW50LnR5cGUsXG4gICAgICAgICAge3NvdXJjZUV2ZW50OiBldmVudH0sXG4gICAgICAgICAge25vZGU6IHRoaXMsIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsIGNhbmNlbGFibGU6IGV2ZW50LmNhbmNlbGFibGV9KTtcbiAgICB9XG4gIH0sXG5cbiAgX2F1dG9mb2N1c0NoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIEZpcmVmb3ggZG9lc24ndCByZXNwZWN0IHRoZSBhdXRvZm9jdXMgYXR0cmlidXRlIGlmIGl0J3MgYXBwbGllZCBhZnRlclxuICAgIC8vIHRoZSBwYWdlIGlzIGxvYWRlZCAoQ2hyb21lL1dlYktpdCBkbyByZXNwZWN0IGl0KSwgcHJldmVudGluZyBhblxuICAgIC8vIGF1dG9mb2N1cyBhdHRyaWJ1dGUgc3BlY2lmaWVkIGluIG1hcmt1cCBmcm9tIHRha2luZyBlZmZlY3Qgd2hlbiB0aGVcbiAgICAvLyBlbGVtZW50IGlzIHVwZ3JhZGVkLiBBcyBhIHdvcmthcm91bmQsIGlmIHRoZSBhdXRvZm9jdXMgcHJvcGVydHkgaXMgc2V0LFxuICAgIC8vIGFuZCB0aGUgZm9jdXMgaGFzbid0IGFscmVhZHkgYmVlbiBtb3ZlZCBlbHNld2hlcmUsIHdlIHRha2UgZm9jdXMuXG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzICYmIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgIC8vIEluIElFIDExLCB0aGUgZGVmYXVsdCBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGNhbiBiZSB0aGUgcGFnZSdzXG4gICAgICAvLyBvdXRlcm1vc3QgaHRtbCBlbGVtZW50LCBidXQgdGhlcmUgYXJlIGFsc28gY2FzZXMgKHVuZGVyIHRoZVxuICAgICAgLy8gcG9seWZpbGw/KSBpbiB3aGljaCB0aGUgYWN0aXZlRWxlbWVudCBpcyBub3QgYSByZWFsIEhUTUxFbGVtZW50LCBidXRcbiAgICAgIC8vIGp1c3QgYSBwbGFpbiBvYmplY3QuIFdlIGlkZW50aWZ5IHRoZSBsYXR0ZXIgY2FzZSBhcyBoYXZpbmcgbm8gdmFsaWRcbiAgICAgIC8vIGFjdGl2ZUVsZW1lbnQuXG4gICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICB2YXIgaXNBY3RpdmVFbGVtZW50VmFsaWQgPSBhY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIC8vIEhhcyBzb21lIG90aGVyIGVsZW1lbnQgaGFzIGFscmVhZHkgdGFrZW4gdGhlIGZvY3VzP1xuICAgICAgdmFyIGlzU29tZUVsZW1lbnRBY3RpdmUgPSBpc0FjdGl2ZUVsZW1lbnRWYWxpZCAmJlxuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IC8qIElFIDExICovXG4gICAgICBpZiAoIWlzU29tZUVsZW1lbnRBY3RpdmUpIHtcbiAgICAgICAgLy8gTm8gc3BlY2lmaWMgZWxlbWVudCBoYXMgdGFrZW4gdGhlIGZvY3VzIHlldCwgc28gd2UgY2FuIHRha2UgaXQuXG4gICAgICAgIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJbnB1dEJlaGF2aW9yID1cbiAgICBbSXJvbkNvbnRyb2xTdGF0ZSwgSXJvbkExMXlLZXlzQmVoYXZpb3IsIFBhcGVySW5wdXRCZWhhdmlvckltcGxdO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJbnB1dEFkZG9uQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaW5wdXQtYWRkb24tYmVoYXZpb3IuanMnO1xuXG4vKlxuYDxwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+YCBpcyBhIGNoYXJhY3RlciBjb3VudGVyIGZvciB1c2Ugd2l0aFxuYDxwYXBlci1pbnB1dC1jb250YWluZXI+YC4gSXQgc2hvd3MgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGVudGVyZWQgaW4gdGhlXG5pbnB1dCBhbmQgdGhlIG1heCBsZW5ndGggaWYgaXQgaXMgc3BlY2lmaWVkLlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxpbnB1dCBtYXhsZW5ndGg9XCIyMFwiPlxuICAgICAgPHBhcGVyLWlucHV0LWNoYXItY291bnRlcj48L3BhcGVyLWlucHV0LWNoYXItY291bnRlcj5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBtaXhpbiBpcyBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWlucHV0LWNoYXItY291bnRlcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBlbGVtZW50IHwgYHt9YFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZsb2F0OiByaWdodDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNhcHRpb247XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNoYXItY291bnRlcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6ZGlyKHJ0bCkpIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzcGFuPltbX2NoYXJDb3VudGVyU3RyXV08L3NwYW4+XG5gLFxuXG4gIGlzOiAncGFwZXItaW5wdXQtY2hhci1jb3VudGVyJyxcbiAgYmVoYXZpb3JzOiBbUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3JdLFxuICBwcm9wZXJ0aWVzOiB7X2NoYXJDb3VudGVyU3RyOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJzAnfX0sXG5cbiAgLyoqXG4gICAqIFRoaXMgb3ZlcnJpZGVzIHRoZSB1cGRhdGUgZnVuY3Rpb24gaW4gUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3IuXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgIGlucHV0RWxlbWVudDogKEVsZW1lbnR8dW5kZWZpbmVkKSxcbiAgICogICB2YWx1ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgKiAgIGludmFsaWQ6IGJvb2xlYW5cbiAgICogfX0gc3RhdGUgLVxuICAgKiAgICAgaW5wdXRFbGVtZW50OiBUaGUgaW5wdXQgZWxlbWVudC5cbiAgICogICAgIHZhbHVlOiBUaGUgaW5wdXQgdmFsdWUuXG4gICAqICAgICBpbnZhbGlkOiBUcnVlIGlmIHRoZSBpbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgKi9cbiAgdXBkYXRlOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGlmICghc3RhdGUuaW5wdXRFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhdGUudmFsdWUgPSBzdGF0ZS52YWx1ZSB8fCAnJztcblxuICAgIHZhciBjb3VudGVyID0gc3RhdGUudmFsdWUudG9TdHJpbmcoKS5sZW5ndGgudG9TdHJpbmcoKTtcblxuICAgIGlmIChzdGF0ZS5pbnB1dEVsZW1lbnQuaGFzQXR0cmlidXRlKCdtYXhsZW5ndGgnKSkge1xuICAgICAgY291bnRlciArPSAnLycgKyBzdGF0ZS5pbnB1dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGFyQ291bnRlclN0ciA9IGNvdW50ZXI7XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7ZGFzaFRvQ2FtZWxDYXNlfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9jYXNlLW1hcC5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbjxjdXN0b20tc3R5bGU+XG4gIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxuICAgIGh0bWwge1xuICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItc2hhcmVkLWlucHV0LXN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogdG8gbWFrZSBhIHN0YWNraW5nIGNvbnRleHQgKi9cbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWFsaWduLCBib3R0b20pO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgIH07XG4gICAgfVxuICA8L3N0eWxlPlxuPC9jdXN0b20tc3R5bGU+XG5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50KTtcblxuLypcbmA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgaXMgYSBjb250YWluZXIgZm9yIGEgYDxsYWJlbD5gLCBhbiBgPGlyb24taW5wdXQ+YCBvclxuYDx0ZXh0YXJlYT5gIGFuZCBvcHRpb25hbCBhZGQtb24gZWxlbWVudHMgc3VjaCBhcyBhbiBlcnJvciBtZXNzYWdlIG9yIGNoYXJhY3RlclxuY291bnRlciwgdXNlZCB0byBpbXBsZW1lbnQgTWF0ZXJpYWwgRGVzaWduIHRleHQgZmllbGRzLlxuXG5Gb3IgZXhhbXBsZTpcblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXI+XG4gICAgICA8bGFiZWwgc2xvdD1cImxhYmVsXCI+WW91ciBuYW1lPC9sYWJlbD5cbiAgICAgIDxpcm9uLWlucHV0IHNsb3Q9XCJpbnB1dFwiPlxuICAgICAgICA8aW5wdXQ+XG4gICAgICA8L2lyb24taW5wdXQ+XG4gICAgICAvLyBJbiBQb2x5bWVyIDEuMCwgeW91IHdvdWxkIHVzZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiIHNsb3Q9XCJpbnB1dFwiPmBcbmluc3RlYWQgb2YgdGhlIGFib3ZlLlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG5Zb3UgY2FuIHN0eWxlIHRoZSBuZXN0ZWQgYDxpbnB1dD5gIGhvd2V2ZXIgeW91IHdhbnQ7IGlmIHlvdSB3YW50IGl0IHRvIGxvb2sgbGlrZVxuYSBNYXRlcmlhbCBEZXNpZ24gaW5wdXQsIHlvdSBjYW4gc3R5bGUgaXQgd2l0aCB0aGVcbi0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZSBtaXhpbi5cblxuRG8gbm90IHdyYXAgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBhcm91bmQgZWxlbWVudHMgdGhhdCBhbHJlYWR5IGluY2x1ZGUgaXQsXG5zdWNoIGFzIGA8cGFwZXItaW5wdXQ+YC4gRG9pbmcgc28gbWF5IGNhdXNlIGV2ZW50cyB0byBib3VuY2UgaW5maW5pdGVseSBiZXR3ZWVuXG50aGUgY29udGFpbmVyIGFuZCBpdHMgY29udGFpbmVkIGVsZW1lbnQuXG5cbiMjIyBMaXN0ZW5pbmcgZm9yIGlucHV0IGNoYW5nZXNcblxuQnkgZGVmYXVsdCwgaXQgbGlzdGVucyBmb3IgY2hhbmdlcyBvbiB0aGUgYGJpbmQtdmFsdWVgIGF0dHJpYnV0ZSBvbiBpdHMgY2hpbGRyZW5cbm5vZGVzIGFuZCBwZXJmb3JtIHRhc2tzIHN1Y2ggYXMgYXV0by12YWxpZGF0aW5nIGFuZCBsYWJlbCBzdHlsaW5nIHdoZW4gdGhlXG5gYmluZC12YWx1ZWAgY2hhbmdlcy4gWW91IGNhbiBjb25maWd1cmUgdGhlIGF0dHJpYnV0ZSBpdCBsaXN0ZW5zIHRvIHdpdGggdGhlXG5gYXR0ci1mb3ItdmFsdWVgIGF0dHJpYnV0ZS5cblxuIyMjIFVzaW5nIGEgY3VzdG9tIGlucHV0IGVsZW1lbnRcblxuWW91IGNhbiB1c2UgYSBjdXN0b20gaW5wdXQgZWxlbWVudCBpbiBhIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAsIGZvciBleGFtcGxlXG50byBpbXBsZW1lbnQgYSBjb21wb3VuZCBpbnB1dCBmaWVsZCBsaWtlIGEgc29jaWFsIHNlY3VyaXR5IG51bWJlciBpbnB1dC4gVGhlXG5jdXN0b20gaW5wdXQgZWxlbWVudCBzaG91bGQgaGF2ZSB0aGUgYHBhcGVyLWlucHV0LWlucHV0YCBjbGFzcywgaGF2ZSBhXG5gbm90aWZ5OnRydWVgIHZhbHVlIHByb3BlcnR5IGFuZCBvcHRpb25hbGx5IGltcGxlbWVudHNcbmBQb2x5bWVyLklyb25WYWxpZGF0YWJsZUJlaGF2aW9yYCBpZiBpdCBpcyB2YWxpZGF0YWJsZS5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXIgYXR0ci1mb3ItdmFsdWU9XCJzc24tdmFsdWVcIj5cbiAgICAgIDxsYWJlbCBzbG90PVwibGFiZWxcIj5Tb2NpYWwgc2VjdXJpdHkgbnVtYmVyPC9sYWJlbD5cbiAgICAgIDxzc24taW5wdXQgc2xvdD1cImlucHV0XCIgY2xhc3M9XCJwYXBlci1pbnB1dC1pbnB1dFwiPjwvc3NuLWlucHV0PlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG5cbklmIHlvdSdyZSB1c2luZyBhIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgaW1wZXJhdGl2ZWx5LCBpdCdzIGltcG9ydGFudCB0byBtYWtlXG5zdXJlIHRoYXQgeW91IGF0dGFjaCBpdHMgY2hpbGRyZW4gKHRoZSBgaXJvbi1pbnB1dGAgYW5kIHRoZSBvcHRpb25hbCBgbGFiZWxgKVxuYmVmb3JlIHlvdSBhdHRhY2ggdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgaXRzZWxmLCBzbyB0aGF0IGl0IGNhbiBiZSBzZXQgdXBcbmNvcnJlY3RseS5cblxuIyMjIFZhbGlkYXRpb25cblxuSWYgdGhlIGBhdXRvLXZhbGlkYXRlYCBhdHRyaWJ1dGUgaXMgc2V0LCB0aGUgaW5wdXQgY29udGFpbmVyIHdpbGwgdmFsaWRhdGUgdGhlXG5pbnB1dCBhbmQgdXBkYXRlIHRoZSBjb250YWluZXIgc3R5bGluZyB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBjaGFuZ2VzLlxuXG4jIyMgQWRkLW9uc1xuXG5BZGQtb25zIGFyZSBjaGlsZCBlbGVtZW50cyBvZiBhIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAgd2l0aCB0aGUgYGFkZC1vbmBcbmF0dHJpYnV0ZSBhbmQgaW1wbGVtZW50cyB0aGUgYFBvbHltZXIuUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3JgIGJlaGF2aW9yLiBUaGV5XG5hcmUgbm90aWZpZWQgd2hlbiB0aGUgaW5wdXQgdmFsdWUgb3IgdmFsaWRpdHkgY2hhbmdlcywgYW5kIG1heSBpbXBsZW1lbnRcbmZ1bmN0aW9uYWxpdHkgc3VjaCBhcyBlcnJvciBtZXNzYWdlcyBvciBjaGFyYWN0ZXIgY291bnRlcnMuIFRoZXkgYXBwZWFyIGF0IHRoZVxuYm90dG9tIG9mIHRoZSBpbnB1dC5cblxuIyMjIFByZWZpeGVzIGFuZCBzdWZmaXhlc1xuVGhlc2UgYXJlIGNoaWxkIGVsZW1lbnRzIG9mIGEgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCB3aXRoIHRoZSBgcHJlZml4YFxub3IgYHN1ZmZpeGAgYXR0cmlidXRlLCBhbmQgYXJlIGRpc3BsYXllZCBpbmxpbmUgd2l0aCB0aGUgaW5wdXQsIGJlZm9yZSBvciBhZnRlci5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXI+XG4gICAgICA8ZGl2IHNsb3Q9XCJwcmVmaXhcIj4kPC9kaXY+XG4gICAgICA8bGFiZWwgc2xvdD1cImxhYmVsXCI+VG90YWw8L2xhYmVsPlxuICAgICAgPGlyb24taW5wdXQgc2xvdD1cImlucHV0XCI+XG4gICAgICAgIDxpbnB1dD5cbiAgICAgIDwvaXJvbi1pbnB1dD5cbiAgICAgIC8vIEluIFBvbHltZXIgMS4wLCB5b3Ugd291bGQgdXNlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCIgc2xvdD1cImlucHV0XCI+YFxuaW5zdGVhZCBvZiB0aGUgYWJvdmUuIDxwYXBlci1pY29uLWJ1dHRvbiBzbG90PVwic3VmZml4XCJcbmljb249XCJjbGVhclwiPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3JgIHwgTGFiZWwgYW5kIHVuZGVybGluZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgZm9jdXNlZCB8IGAtLXNlY29uZGFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yYCB8IExhYmVsIGFuZCB1bmRlcmxpbmUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvcmAgfCBMYWJlbCBhbmQgdW5kZXJsaW5lIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGlzIGludmFsaWQgfCBgLS1lcnJvci1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1jb2xvcmAgfCBJbnB1dCBmb3JlZ3JvdW5kIGNvbG9yIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgd2hlbiBpdCdzIGRpc2FibGVkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZvY3VzYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZmxvYXRpbmdgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgbGFiZWwgd2hlbiBmbG9hdGluZyB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1hbGlnbmAgfCBUaGUgdmVydGljYWwtYWxpZ24gcHJvcGVydHkgb2YgdGhlIGlucHV0IHwgYGJvdHRvbWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtZm9jdXNgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgd2hlbiBmb2N1c2VkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWludmFsaWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgd2hlbiBpbnZhbGlkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHdlYmtpdCBzcGlubmVyIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1jbGVhcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB3ZWJraXQgY2xlYXIgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHdlYmtpdCBjYWxlbmRhciBwaWNrZXIgaW5kaWNhdG9yIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIEludGVybmV0IEV4cGxvcmVyIGNsZWFyIGJ1dHRvbiB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmVgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdW5kZXJsaW5lIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZS1mb2N1c2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB1bmRlcmxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdW5kZXJsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtcHJlZml4YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHByZWZpeCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LXN1ZmZpeGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCBzdWZmaXggfCBge31gXG5cblRoaXMgZWxlbWVudCBpcyBgZGlzcGxheTpibG9ja2AgYnkgZGVmYXVsdCwgYnV0IHlvdSBjYW4gc2V0IHRoZSBgaW5saW5lYFxuYXR0cmlidXRlIHRvIG1ha2UgaXQgYGRpc3BsYXk6aW5saW5lLWJsb2NrYC5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbmxpbmVdKSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMC4zMztcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5mbG9hdGVkLWxhYmVsLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jYXB0aW9uO1xuICAgICAgfVxuXG4gICAgICAudW5kZXJsaW5lIHtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmZvY3VzZWQtbGluZSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcblxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAsMSwxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsMSwxKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lLWZvY3VzO1xuICAgICAgfVxuXG4gICAgICAudW5kZXJsaW5lLmlzLWhpZ2hsaWdodGVkIC5mb2N1c2VkLWxpbmUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdHJhbnNpdGlvbi1lYXNpbmc7XG4gICAgICB9XG5cbiAgICAgIC51bmRlcmxpbmUuaXMtaW52YWxpZCAuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRyYW5zaXRpb24tZWFzaW5nO1xuICAgICAgfVxuXG4gICAgICAudW5mb2N1c2VkLWxpbmUge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSAudW5mb2N1c2VkLWxpbmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZS1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LWF1dG87XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1yZWxhdGl2ZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMsIHdpZHRoIDAuMjVzO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMsIHdpZHRoIDAuMjVzO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAgICAgLyogRml4IGZvciBzYWZhcmkgbm90IGZvY3VzaW5nIDAtaGVpZ2h0IGRhdGUvdGltZSBpbnB1dHMgd2l0aCAtd2Via2l0LWFwcGVyYW5jZTogbm9uZTsgKi9cbiAgICAgICAgbWluLWhlaWdodDogMXB4O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWw7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRyYW5zaXRpb24tZWFzaW5nO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1mbG9hdGluZyA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtZmxvYXRpbmcgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzUlKSBzY2FsZSgwLjc1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NSUpIHNjYWxlKDAuNzUpO1xuXG4gICAgICAgIC8qIFNpbmNlIHdlIHNjYWxlIHRvIDc1LzEwMCBvZiB0aGUgc2l6ZSwgd2UgYWN0dWFsbHkgaGF2ZSAxMDAvNzUgb2YgdGhlXG4gICAgICAgIG9yaWdpbmFsIHNwYWNlIG5vdyBhdmFpbGFibGUgKi9cbiAgICAgICAgd2lkdGg6IDEzMyU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZsb2F0aW5nO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6ZGlyKHJ0bCkpIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWZsb2F0aW5nIDo6c2xvdHRlZChsYWJlbCksXG4gICAgICA6aG9zdCg6ZGlyKHJ0bCkpIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWZsb2F0aW5nIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWhpZ2hsaWdodGVkIDo6c2xvdHRlZChsYWJlbCksXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1oaWdobGlnaHRlZCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZm9jdXM7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWhpZGRlbiA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtaGlkZGVuIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaW5wdXQpLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlyb24taW5wdXQpLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKHRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpcm9uLWF1dG9ncm93LXRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZCgucGFwZXItaW5wdXQtaW5wdXQpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZTtcbiAgICAgICAgLyogVGhlIGFwcGx5IHNoaW0gZG9lc24ndCBhcHBseSB0aGUgbmVzdGVkIGNvbG9yIGN1c3RvbSBwcm9wZXJ0eSxcbiAgICAgICAgICBzbyB3ZSBoYXZlIHRvIHJlLWFwcGx5IGl0IGhlcmUuICovXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpbnB1dCk6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaW5wdXQpOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZChpbnB1dCksXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZChpcm9uLWlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmZvY3VzZWQgOjpzbG90dGVkKHRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmZvY3VzZWQgOjpzbG90dGVkKGlyb24tYXV0b2dyb3ctdGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuZm9jdXNlZCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWlucHV0KSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1mb2N1cztcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoaW5wdXQpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoaXJvbi1pbnB1dCksXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZChpcm9uLWF1dG9ncm93LXRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1pbnB1dCkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtaW52YWxpZDtcbiAgICAgIH1cblxuICAgICAgLnByZWZpeCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtbm9uZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtcHJlZml4O1xuICAgICAgfVxuXG4gICAgICAuc3VmZml4IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1ub25lO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LXN1ZmZpeDtcbiAgICAgIH1cblxuICAgICAgLyogRmlyZWZveCBzZXRzIGEgbWluLXdpZHRoIG9uIHRoZSBpbnB1dCwgd2hpY2ggY2FuIGNhdXNlIGxheW91dCBpc3N1ZXMgKi9cbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpbnB1dCkge1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZCh0ZXh0YXJlYSkge1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5hZGQtb24tY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmFkZC1vbi1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKCopIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICAuYWRkLW9uLWNvbnRlbnQuaXMtaGlnaGxpZ2h0ZWQgOjpzbG90dGVkKCopIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxvYXRlZC1sYWJlbC1wbGFjZWhvbGRlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGhpZGRlbj1cIltbbm9MYWJlbEZsb2F0XV1cIj4mbmJzcDs8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInByZWZpeFwiPjxzbG90IG5hbWU9XCJwcmVmaXhcIj48L3Nsb3Q+PC9zcGFuPlxuXG4gICAgICA8ZGl2IGNsYXNzXFwkPVwiW1tfY29tcHV0ZUlucHV0Q29udGVudENsYXNzKG5vTGFiZWxGbG9hdCxhbHdheXNGbG9hdExhYmVsLGZvY3VzZWQsaW52YWxpZCxfaW5wdXRIYXNDb250ZW50KV1dXCIgaWQ9XCJsYWJlbEFuZElucHV0Q29udGFpbmVyXCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPjwvc2xvdD5cbiAgICAgICAgPHNsb3QgbmFtZT1cImlucHV0XCI+PC9zbG90PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3VmZml4XCI+PHNsb3QgbmFtZT1cInN1ZmZpeFwiPjwvc2xvdD48L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzXFwkPVwiW1tfY29tcHV0ZVVuZGVybGluZUNsYXNzKGZvY3VzZWQsaW52YWxpZCldXVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInVuZm9jdXNlZC1saW5lXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9jdXNlZC1saW5lXCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzXFwkPVwiW1tfY29tcHV0ZUFkZE9uQ29udGVudENsYXNzKGZvY3VzZWQsaW52YWxpZCldXVwiPlxuICAgICAgPHNsb3QgbmFtZT1cImFkZC1vblwiPjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdwYXBlci1pbnB1dC1jb250YWluZXInLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoZSBmbG9hdGluZyBsYWJlbC4gVGhlIGxhYmVsIGRpc2FwcGVhcnMgd2hlbiB0aGVcbiAgICAgKiBpbnB1dCB2YWx1ZSBpcyBub3QgbnVsbC5cbiAgICAgKi9cbiAgICBub0xhYmVsRmxvYXQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gYWx3YXlzIGZsb2F0IHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgICAgKi9cbiAgICBhbHdheXNGbG9hdExhYmVsOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhdHRyaWJ1dGUgdG8gbGlzdGVuIGZvciB2YWx1ZSBjaGFuZ2VzIG9uLlxuICAgICAqL1xuICAgIGF0dHJGb3JWYWx1ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdiaW5kLXZhbHVlJ30sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhdXRvLXZhbGlkYXRlIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIGl0IGNoYW5nZXMuXG4gICAgICovXG4gICAgYXV0b1ZhbGlkYXRlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGlucHV0IGlzIGludmFsaWQuIFRoaXMgcHJvcGVydHkgaXMgc2V0IGF1dG9tYXRpY2FsbHkgd2hlbiB0aGVcbiAgICAgKiBpbnB1dCB2YWx1ZSBjaGFuZ2VzIGlmIGF1dG8tdmFsaWRhdGluZywgb3Igd2hlbiB0aGUgYGlyb24taW5wdXQtdmFsaWRhdGVgXG4gICAgICogZXZlbnQgaXMgaGVhcmQgZnJvbSBhIGNoaWxkLlxuICAgICAqL1xuICAgIGludmFsaWQ6IHtvYnNlcnZlcjogJ19pbnZhbGlkQ2hhbmdlZCcsIHR5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBpbnB1dCBoYXMgZm9jdXMuXG4gICAgICovXG4gICAgZm9jdXNlZDoge3JlYWRPbmx5OiB0cnVlLCB0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICBfYWRkb25zOiB7XG4gICAgICB0eXBlOiBBcnJheVxuICAgICAgLy8gZG8gbm90IHNldCBhIGRlZmF1bHQgdmFsdWUgaGVyZSBpbnRlbnRpb25hbGx5IC0gaXQgd2lsbCBiZSBpbml0aWFsaXplZFxuICAgICAgLy8gbGF6aWx5IHdoZW4gYSBkaXN0cmlidXRlZCBjaGlsZCBpcyBhdHRhY2hlZCwgd2hpY2ggbWF5IG9jY3VyIGJlZm9yZVxuICAgICAgLy8gY29uZmlndXJhdGlvbiBmb3IgdGhpcyBlbGVtZW50IGluIHBvbHlmaWxsLlxuICAgIH0sXG5cbiAgICBfaW5wdXRIYXNDb250ZW50OiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIF9pbnB1dFNlbGVjdG9yOlxuICAgICAgICB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2lucHV0LGlyb24taW5wdXQsdGV4dGFyZWEsLnBhcGVyLWlucHV0LWlucHV0J30sXG5cbiAgICBfYm91bmRPbkZvY3VzOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2JvdW5kT25CbHVyOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uQmx1ci5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfYm91bmRPbklucHV0OiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2JvdW5kVmFsdWVDaGFuZ2VkOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uVmFsdWVDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGxpc3RlbmVyczoge1xuICAgICdhZGRvbi1hdHRhY2hlZCc6ICdfb25BZGRvbkF0dGFjaGVkJyxcbiAgICAnaXJvbi1pbnB1dC12YWxpZGF0ZSc6ICdfb25Jcm9uSW5wdXRWYWxpZGF0ZSdcbiAgfSxcblxuICBnZXQgX3ZhbHVlQ2hhbmdlZEV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJGb3JWYWx1ZSArICctY2hhbmdlZCc7XG4gIH0sXG5cbiAgZ2V0IF9wcm9wZXJ0eUZvclZhbHVlKCkge1xuICAgIHJldHVybiBkYXNoVG9DYW1lbENhc2UodGhpcy5hdHRyRm9yVmFsdWUpO1xuICB9LFxuXG4gIGdldCBfaW5wdXRFbGVtZW50KCkge1xuICAgIHJldHVybiBkb20odGhpcykucXVlcnlTZWxlY3Rvcih0aGlzLl9pbnB1dFNlbGVjdG9yKTtcbiAgfSxcblxuICBnZXQgX2lucHV0RWxlbWVudFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dEVsZW1lbnRbdGhpcy5fcHJvcGVydHlGb3JWYWx1ZV0gfHxcbiAgICAgICAgdGhpcy5faW5wdXRFbGVtZW50LnZhbHVlO1xuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBQYXBlci1pbnB1dCB0cmVhdHMgYSB2YWx1ZSBvZiB1bmRlZmluZWQgZGlmZmVyZW50bHkgYXQgc3RhcnR1cCB0aGFuXG4gICAgLy8gdGhlIHJlc3Qgb2YgdGhlIHRpbWUgKHNwZWNpZmljYWxseTogaXQgZG9lcyBub3QgdmFsaWRhdGUgaXQgYXQgc3RhcnR1cCxcbiAgICAvLyBidXQgaXQgZG9lcyBhZnRlciB0aGF0LiBXZSBuZWVkIHRvIHRyYWNrIHdoZXRoZXIgdGhlIGZpcnN0IHRpbWUgd2VcbiAgICAvLyBlbmNvdW50ZXIgdGhlIHZhbHVlIGlzIGJhc2ljYWxseSB0aGlzIGZpcnN0IHRpbWUsIHNvIHRoYXQgd2UgY2FuIHZhbGlkYXRlXG4gICAgLy8gaXQgY29ycmVjdGx5IHRoZSByZXN0IG9mIHRoZSB0aW1lLiBTZWVcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWlucHV0L2lzc3Vlcy82MDVcbiAgICB0aGlzLl9faXNGaXJzdFZhbHVlVXBkYXRlID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuX2FkZG9ucykge1xuICAgICAgdGhpcy5fYWRkb25zID0gW107XG4gICAgfVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9ib3VuZE9uRm9jdXMsIHRydWUpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2JvdW5kT25CbHVyLCB0cnVlKTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYXR0ckZvclZhbHVlKSB7XG4gICAgICB0aGlzLl9pbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICB0aGlzLl92YWx1ZUNoYW5nZWRFdmVudCwgdGhpcy5fYm91bmRWYWx1ZUNoYW5nZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fb25JbnB1dCk7XG4gICAgfVxuXG4gICAgLy8gT25seSB2YWxpZGF0ZSB3aGVuIGF0dGFjaGVkIGlmIHRoZSBpbnB1dCBhbHJlYWR5IGhhcyBhIHZhbHVlLlxuICAgIGlmICh0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSAmJiB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSAhPSAnJykge1xuICAgICAgdGhpcy5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUodGhpcy5faW5wdXRFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGFuZGxlVmFsdWUodGhpcy5faW5wdXRFbGVtZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9vbkFkZG9uQXR0YWNoZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9hZGRvbnMpIHtcbiAgICAgIHRoaXMuX2FkZG9ucyA9IFtdO1xuICAgIH1cbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0aGlzLl9hZGRvbnMuaW5kZXhPZih0YXJnZXQpID09PSAtMSkge1xuICAgICAgdGhpcy5fYWRkb25zLnB1c2godGFyZ2V0KTtcbiAgICAgIGlmICh0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlVmFsdWUodGhpcy5faW5wdXRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9vbkZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9zZXRGb2N1c2VkKHRydWUpO1xuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfb25CbHVyOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKTtcbiAgICB0aGlzLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZSh0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfb25JbnB1dDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZShldmVudC50YXJnZXQpO1xuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfb25WYWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGlucHV0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgLy8gUGFwZXItaW5wdXQgdHJlYXRzIGEgdmFsdWUgb2YgdW5kZWZpbmVkIGRpZmZlcmVudGx5IGF0IHN0YXJ0dXAgdGhhblxuICAgIC8vIHRoZSByZXN0IG9mIHRoZSB0aW1lIChzcGVjaWZpY2FsbHk6IGl0IGRvZXMgbm90IHZhbGlkYXRlIGl0IGF0IHN0YXJ0dXAsXG4gICAgLy8gYnV0IGl0IGRvZXMgYWZ0ZXIgdGhhdC4gSWYgdGhpcyBpcyBpbiBmYWN0IHRoZSBib290dXAgY2FzZSwgaWdub3JlXG4gICAgLy8gdmFsaWRhdGlvbiwganVzdCB0aGlzIG9uY2UuXG4gICAgaWYgKHRoaXMuX19pc0ZpcnN0VmFsdWVVcGRhdGUpIHtcbiAgICAgIHRoaXMuX19pc0ZpcnN0VmFsdWVVcGRhdGUgPSBmYWxzZTtcbiAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUoZXZlbnQudGFyZ2V0KTtcbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbihpbnB1dEVsZW1lbnQpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZTtcblxuICAgIC8vIHR5cGU9XCJudW1iZXJcIiBoYWNrIG5lZWRlZCBiZWNhdXNlIHRoaXMudmFsdWUgaXMgZW1wdHkgdW50aWwgaXQncyB2YWxpZFxuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCB8fFxuICAgICAgICAoaW5wdXRFbGVtZW50LnR5cGUgPT09ICdudW1iZXInICYmICFpbnB1dEVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpKSkge1xuICAgICAgdGhpcy5faW5wdXRIYXNDb250ZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faW5wdXRIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVBZGRvbnMoXG4gICAgICAgIHtpbnB1dEVsZW1lbnQ6IGlucHV0RWxlbWVudCwgdmFsdWU6IHZhbHVlLCBpbnZhbGlkOiB0aGlzLmludmFsaWR9KTtcbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlOiBmdW5jdGlvbihpbnB1dEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5hdXRvVmFsaWRhdGUgJiYgaW5wdXRFbGVtZW50KSB7XG4gICAgICB2YXIgdmFsaWQ7XG5cbiAgICAgIGlmIChpbnB1dEVsZW1lbnQudmFsaWRhdGUpIHtcbiAgICAgICAgdmFsaWQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGUodGhpcy5faW5wdXRFbGVtZW50VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWQgPSBpbnB1dEVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5pbnZhbGlkID0gIXZhbGlkO1xuICAgIH1cblxuICAgIC8vIENhbGwgdGhpcyBsYXN0IHRvIG5vdGlmeSB0aGUgYWRkLW9ucy5cbiAgICB0aGlzLl9oYW5kbGVWYWx1ZShpbnB1dEVsZW1lbnQpO1xuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfb25Jcm9uSW5wdXRWYWxpZGF0ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmludmFsaWQgPSB0aGlzLl9pbnB1dEVsZW1lbnQuaW52YWxpZDtcbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX2ludmFsaWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fYWRkb25zKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFkZG9ucyh7aW52YWxpZDogdGhpcy5pbnZhbGlkfSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgdG8gdXBkYXRlIHRoZSBzdGF0ZSBvZiBhZGQtb25zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgQWRkLW9uIHN0YXRlLlxuICAgKi9cbiAgdXBkYXRlQWRkb25zOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGZvciAodmFyIGFkZG9uLCBpbmRleCA9IDA7IGFkZG9uID0gdGhpcy5fYWRkb25zW2luZGV4XTsgaW5kZXgrKykge1xuICAgICAgYWRkb24udXBkYXRlKHN0YXRlKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9jb21wdXRlSW5wdXRDb250ZW50Q2xhc3M6IGZ1bmN0aW9uKFxuICAgICAgbm9MYWJlbEZsb2F0LCBhbHdheXNGbG9hdExhYmVsLCBmb2N1c2VkLCBpbnZhbGlkLCBfaW5wdXRIYXNDb250ZW50KSB7XG4gICAgdmFyIGNscyA9ICdpbnB1dC1jb250ZW50JztcbiAgICBpZiAoIW5vTGFiZWxGbG9hdCkge1xuICAgICAgdmFyIGxhYmVsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuXG4gICAgICBpZiAoYWx3YXlzRmxvYXRMYWJlbCB8fCBfaW5wdXRIYXNDb250ZW50KSB7XG4gICAgICAgIGNscyArPSAnIGxhYmVsLWlzLWZsb2F0aW5nJztcbiAgICAgICAgLy8gSWYgdGhlIGxhYmVsIGlzIGZsb2F0aW5nLCBpZ25vcmUgYW55IG9mZnNldHMgdGhhdCBtYXkgaGF2ZSBiZWVuXG4gICAgICAgIC8vIGFwcGxpZWQgZnJvbSBhIHByZWZpeCBlbGVtZW50LlxuICAgICAgICB0aGlzLiQubGFiZWxBbmRJbnB1dENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9jdXNlZCkge1xuICAgICAgICAgIGNscyArPSAnIGxhYmVsLWlzLWhpZ2hsaWdodGVkJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV2hlbiB0aGUgbGFiZWwgaXMgbm90IGZsb2F0aW5nLCBpdCBzaG91bGQgb3ZlcmxhcCB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgdGhpcy4kLmxhYmVsQW5kSW5wdXRDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKF9pbnB1dEhhc0NvbnRlbnQpIHtcbiAgICAgICAgY2xzICs9ICcgbGFiZWwtaXMtaGlkZGVuJztcbiAgICAgIH1cbiAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgIGNscyArPSAnIGlzLWludmFsaWQnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm9jdXNlZCkge1xuICAgICAgY2xzICs9ICcgZm9jdXNlZCc7XG4gICAgfVxuICAgIHJldHVybiBjbHM7XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9jb21wdXRlVW5kZXJsaW5lQ2xhc3M6IGZ1bmN0aW9uKGZvY3VzZWQsIGludmFsaWQpIHtcbiAgICB2YXIgY2xzID0gJ3VuZGVybGluZSc7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNscyArPSAnIGlzLWludmFsaWQnO1xuICAgIH0gZWxzZSBpZiAoZm9jdXNlZCkge1xuICAgICAgY2xzICs9ICcgaXMtaGlnaGxpZ2h0ZWQnXG4gICAgfVxuICAgIHJldHVybiBjbHM7XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9jb21wdXRlQWRkT25Db250ZW50Q2xhc3M6IGZ1bmN0aW9uKGZvY3VzZWQsIGludmFsaWQpIHtcbiAgICB2YXIgY2xzID0gJ2FkZC1vbi1jb250ZW50JztcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgfSBlbHNlIGlmIChmb2N1c2VkKSB7XG4gICAgICBjbHMgKz0gJyBpcy1oaWdobGlnaHRlZCdcbiAgICB9XG4gICAgcmV0dXJuIGNscztcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySW5wdXRBZGRvbkJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWlucHV0LWFkZG9uLWJlaGF2aW9yLmpzJztcblxuLypcbmA8cGFwZXItaW5wdXQtZXJyb3I+YCBpcyBhbiBlcnJvciBtZXNzYWdlIGZvciB1c2Ugd2l0aFxuYDxwYXBlci1pbnB1dC1jb250YWluZXI+YC4gVGhlIGVycm9yIGlzIGRpc3BsYXllZCB3aGVuIHRoZVxuYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBpcyBgaW52YWxpZGAuXG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyPlxuICAgICAgPGlucHV0IHBhdHRlcm49XCJbMC05XSpcIj5cbiAgICAgIDxwYXBlci1pbnB1dC1lcnJvciBzbG90PVwiYWRkLW9uXCI+T25seSBudW1iZXJzIGFyZVxuYWxsb3dlZCE8L3BhcGVyLWlucHV0LWVycm9yPlxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3JgIHwgVGhlIGZvcmVncm91bmQgY29sb3Igb2YgdGhlIGVycm9yIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci1pbnB1dC1lcnJvcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBlcnJvciB8IGB7fWBcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtZXJyb3I7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaW52YWxpZF0pIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH07XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pbnB1dC1lcnJvcicsXG4gIGJlaGF2aW9yczogW1BhcGVySW5wdXRBZGRvbkJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgZXJyb3IgaXMgc2hvd2luZy5cbiAgICAgKi9cbiAgICBpbnZhbGlkOiB7cmVhZE9ubHk6IHRydWUsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSwgdHlwZTogQm9vbGVhbn1cbiAgfSxcblxuICAvKipcbiAgICogVGhpcyBvdmVycmlkZXMgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpbiBQYXBlcklucHV0QWRkb25CZWhhdmlvci5cbiAgICogQHBhcmFtIHt7XG4gICAqICAgaW5wdXRFbGVtZW50OiAoRWxlbWVudHx1bmRlZmluZWQpLFxuICAgKiAgIHZhbHVlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAqICAgaW52YWxpZDogYm9vbGVhblxuICAgKiB9fSBzdGF0ZSAtXG4gICAqICAgICBpbnB1dEVsZW1lbnQ6IFRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiAgICAgdmFsdWU6IFRoZSBpbnB1dCB2YWx1ZS5cbiAgICogICAgIGludmFsaWQ6IFRydWUgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAqL1xuICB1cGRhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgdGhpcy5fc2V0SW52YWxpZChzdGF0ZS5pbnZhbGlkKTtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taW5wdXQvaXJvbi1pbnB1dC5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmpzJztcbmltcG9ydCAnLi9wYXBlci1pbnB1dC1jb250YWluZXIuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWlucHV0LWVycm9yLmpzJztcblxuaW1wb3J0IHtJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtEb21Nb2R1bGV9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1tb2R1bGUuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7UGFwZXJJbnB1dEJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWlucHV0LWJlaGF2aW9yLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtUZXh0XG5maWVsZHNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy90ZXh0LWZpZWxkcy5odG1sKVxuXG5gPHBhcGVyLWlucHV0PmAgaXMgYSBzaW5nbGUtbGluZSB0ZXh0IGZpZWxkIHdpdGggTWF0ZXJpYWwgRGVzaWduIHN0eWxpbmcuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJJbnB1dCBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+XG5cbkl0IG1heSBpbmNsdWRlIGFuIG9wdGlvbmFsIGVycm9yIG1lc3NhZ2Ugb3IgY2hhcmFjdGVyIGNvdW50ZXIuXG5cbiAgICA8cGFwZXItaW5wdXQgZXJyb3ItbWVzc2FnZT1cIkludmFsaWQgaW5wdXQhXCIgbGFiZWw9XCJJbnB1dFxubGFiZWxcIj48L3BhcGVyLWlucHV0PiA8cGFwZXItaW5wdXQgY2hhci1jb3VudGVyIGxhYmVsPVwiSW5wdXRcbmxhYmVsXCI+PC9wYXBlci1pbnB1dD5cblxuSXQgY2FuIGFsc28gaW5jbHVkZSBjdXN0b20gcHJlZml4IG9yIHN1ZmZpeCBlbGVtZW50cywgd2hpY2ggYXJlIGRpc3BsYXllZFxuYmVmb3JlIG9yIGFmdGVyIHRoZSB0ZXh0IGlucHV0IGl0c2VsZi4gSW4gb3JkZXIgZm9yIGFuIGVsZW1lbnQgdG8gYmVcbmNvbnNpZGVyZWQgYXMgYSBwcmVmaXgsIGl0IG11c3QgaGF2ZSB0aGUgYHByZWZpeGAgYXR0cmlidXRlIChhbmQgc2ltaWxhcmx5XG5mb3IgYHN1ZmZpeGApLlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwidG90YWxcIj5cbiAgICAgIDxkaXYgcHJlZml4PiQ8L2Rpdj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBzbG90PVwic3VmZml4XCIgaWNvbj1cImNsZWFyXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICA8L3BhcGVyLWlucHV0PlxuXG5BIGBwYXBlci1pbnB1dGAgY2FuIHVzZSB0aGUgbmF0aXZlIGB0eXBlPXNlYXJjaGAgb3IgYHR5cGU9ZmlsZWAgZmVhdHVyZXMuXG5Ib3dldmVyLCBzaW5jZSB3ZSBjYW4ndCBjb250cm9sIHRoZSBuYXRpdmUgc3R5bGluZyBvZiB0aGUgaW5wdXQgKHNlYXJjaCBpY29uLFxuZmlsZSBidXR0b24sIGRhdGUgcGxhY2Vob2xkZXIsIGV0Yy4pLCBpbiB0aGVzZSBjYXNlcyB0aGUgbGFiZWwgd2lsbCBiZVxuYXV0b21hdGljYWxseSBmbG9hdGVkLiBUaGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgY2FuIHN0aWxsIGJlIHVzZWQgZm9yXG5hZGRpdGlvbmFsIGluZm9ybWF0aW9uYWwgdGV4dC5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cInNlYXJjaCFcIiB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZm9yIGNhdHNcIiBhdXRvc2F2ZT1cInRlc3RcIiByZXN1bHRzPVwiNVwiPlxuICAgIDwvcGFwZXItaW5wdXQ+XG5cblNlZSBgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JgIGZvciBtb3JlIEFQSSBkb2NzLlxuXG4jIyMgRm9jdXNcblxuVG8gZm9jdXMgYSBwYXBlci1pbnB1dCwgeW91IGNhbiBjYWxsIHRoZSBuYXRpdmUgYGZvY3VzKClgIG1ldGhvZCBhcyBsb25nIGFzIHRoZVxucGFwZXIgaW5wdXQgaGFzIGEgdGFiIGluZGV4LiBTaW1pbGFybHksIGBibHVyKClgIHdpbGwgYmx1ciB0aGUgZWxlbWVudC5cblxuIyMjIFN0eWxpbmdcblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRDb250YWluZXJgIGZvciBhIGxpc3Qgb2YgY3VzdG9tIHByb3BlcnRpZXMgdXNlZCB0b1xuc3R5bGUgdGhpcyBlbGVtZW50LlxuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIEludGVybmV0IEV4cGxvcmVyIHJldmVhbCBidXR0b24gKHRoZSBleWViYWxsKSB8IHt9XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaW5wdXRcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgaXM6ICdwYXBlci1pbnB1dCcsXG5cbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgLyogRmlyZWZveCBzZXRzIGEgbWluLXdpZHRoIG9uIHRoZSBpbnB1dCwgd2hpY2ggY2FuIGNhdXNlIGxheW91dCBpc3N1ZXMgKi9cbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAvKiBJbiAxLngsIHRoZSA8aW5wdXQ+IGlzIGRpc3RyaWJ1dGVkIHRvIHBhcGVyLWlucHV0LWNvbnRhaW5lciwgd2hpY2ggc3R5bGVzIGl0LlxuICAgICAgSW4gMi54IHRoZSA8aXJvbi1pbnB1dD4gaXMgZGlzdHJpYnV0ZWQgdG8gcGFwZXItaW5wdXQtY29udGFpbmVyLCB3aGljaCBzdHlsZXNcbiAgICAgIGl0LCBidXQgaW4gb3JkZXIgZm9yIHRoaXMgdG8gd29yayBjb3JyZWN0bHksIHdlIG5lZWQgdG8gcmVzZXQgc29tZVxuICAgICAgb2YgdGhlIG5hdGl2ZSBpbnB1dCdzIHByb3BlcnRpZXMgdG8gaW5oZXJpdCAoZnJvbSB0aGUgaXJvbi1pbnB1dCkgKi9cbiAgICAgIGlyb24taW5wdXQgPiBpbnB1dCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgICAgICAgd29yZC1zcGFjaW5nOiBpbmhlcml0O1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OmRpc2FibGVkIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgICAgIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNsZWFyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbXMtY2xlYXIge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbXMtcmV2ZWFsIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLXJldmVhbDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgbGFiZWwge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lciBpZD1cImNvbnRhaW5lclwiIG5vLWxhYmVsLWZsb2F0PVwiW1tub0xhYmVsRmxvYXRdXVwiIGFsd2F5cy1mbG9hdC1sYWJlbD1cIltbX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsKGFsd2F5c0Zsb2F0TGFiZWwscGxhY2Vob2xkZXIpXV1cIiBhdXRvLXZhbGlkYXRlXFwkPVwiW1thdXRvVmFsaWRhdGVdXVwiIGRpc2FibGVkXFwkPVwiW1tkaXNhYmxlZF1dXCIgaW52YWxpZD1cIltbaW52YWxpZF1dXCI+XG5cbiAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIiBzbG90PVwicHJlZml4XCI+PC9zbG90PlxuXG4gICAgICA8bGFiZWwgaGlkZGVuXFwkPVwiW1shbGFiZWxdXVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvclxcJD1cIltbX2lucHV0SWRdXVwiIHNsb3Q9XCJsYWJlbFwiPltbbGFiZWxdXTwvbGFiZWw+XG5cbiAgICAgIDwhLS0gTmVlZCB0byBiaW5kIG1heGxlbmd0aCBzbyB0aGF0IHRoZSBwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIgd29ya3MgY29ycmVjdGx5IC0tPlxuICAgICAgPGlyb24taW5wdXQgYmluZC12YWx1ZT1cInt7dmFsdWV9fVwiIHNsb3Q9XCJpbnB1dFwiIGNsYXNzPVwiaW5wdXQtZWxlbWVudFwiIGlkXFwkPVwiW1tfaW5wdXRJZF1dXCIgbWF4bGVuZ3RoXFwkPVwiW1ttYXhsZW5ndGhdXVwiIGFsbG93ZWQtcGF0dGVybj1cIltbYWxsb3dlZFBhdHRlcm5dXVwiIGludmFsaWQ9XCJ7e2ludmFsaWR9fVwiIHZhbGlkYXRvcj1cIltbdmFsaWRhdG9yXV1cIj5cbiAgICAgICAgPGlucHV0IGFyaWEtbGFiZWxsZWRieVxcJD1cIltbX2FyaWFMYWJlbGxlZEJ5XV1cIiBhcmlhLWRlc2NyaWJlZGJ5XFwkPVwiW1tfYXJpYURlc2NyaWJlZEJ5XV1cIiBkaXNhYmxlZFxcJD1cIltbZGlzYWJsZWRdXVwiIHRpdGxlXFwkPVwiW1t0aXRsZV1dXCIgdHlwZVxcJD1cIltbdHlwZV1dXCIgcGF0dGVyblxcJD1cIltbcGF0dGVybl1dXCIgcmVxdWlyZWRcXCQ9XCJbW3JlcXVpcmVkXV1cIiBhdXRvY29tcGxldGVcXCQ9XCJbW2F1dG9jb21wbGV0ZV1dXCIgYXV0b2ZvY3VzXFwkPVwiW1thdXRvZm9jdXNdXVwiIGlucHV0bW9kZVxcJD1cIltbaW5wdXRtb2RlXV1cIiBtaW5sZW5ndGhcXCQ9XCJbW21pbmxlbmd0aF1dXCIgbWF4bGVuZ3RoXFwkPVwiW1ttYXhsZW5ndGhdXVwiIG1pblxcJD1cIltbbWluXV1cIiBtYXhcXCQ9XCJbW21heF1dXCIgc3RlcFxcJD1cIltbc3RlcF1dXCIgbmFtZVxcJD1cIltbbmFtZV1dXCIgcGxhY2Vob2xkZXJcXCQ9XCJbW3BsYWNlaG9sZGVyXV1cIiByZWFkb25seVxcJD1cIltbcmVhZG9ubHldXVwiIGxpc3RcXCQ9XCJbW2xpc3RdXVwiIHNpemVcXCQ9XCJbW3NpemVdXVwiIGF1dG9jYXBpdGFsaXplXFwkPVwiW1thdXRvY2FwaXRhbGl6ZV1dXCIgYXV0b2NvcnJlY3RcXCQ9XCJbW2F1dG9jb3JyZWN0XV1cIiBvbi1jaGFuZ2U9XCJfb25DaGFuZ2VcIiB0YWJpbmRleFxcJD1cIltbdGFiSW5kZXhdXVwiIGF1dG9zYXZlXFwkPVwiW1thdXRvc2F2ZV1dXCIgcmVzdWx0c1xcJD1cIltbcmVzdWx0c11dXCIgYWNjZXB0XFwkPVwiW1thY2NlcHRdXVwiIG11bHRpcGxlXFwkPVwiW1ttdWx0aXBsZV1dXCI+XG4gICAgICA8L2lyb24taW5wdXQ+XG5cbiAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIiBzbG90PVwic3VmZml4XCI+PC9zbG90PlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZXJyb3JNZXNzYWdlXV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0LWVycm9yIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIHNsb3Q9XCJhZGQtb25cIj5bW2Vycm9yTWVzc2FnZV1dPC9wYXBlci1pbnB1dC1lcnJvcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjaGFyQ291bnRlcl1dXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIgc2xvdD1cImFkZC1vblwiPjwvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuICBgLFxuXG4gIGJlaGF2aW9yczogW1BhcGVySW5wdXRCZWhhdmlvciwgSXJvbkZvcm1FbGVtZW50QmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgLy8gUmVxdWlyZWQgZm9yIHRoZSBjb3JyZWN0IFR5cGVTY3JpcHQgdHlwZS1nZW5lcmF0aW9uXG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGZvY3VzYWJsZSBlbGVtZW50LiBPdmVycmlkZGVuIGZyb21cbiAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGNvcnJlY3RseSBmb2N1cyB0aGUgbmF0aXZlIGlucHV0LlxuICAgKlxuICAgKiBAcmV0dXJuIHshSFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgX2ZvY3VzYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50Ll9pbnB1dEVsZW1lbnQ7XG4gIH0sXG5cbiAgLy8gTm90ZTogVGhpcyBldmVudCBpcyBvbmx5IGF2YWlsYWJsZSBpbiB0aGUgMS4wIHZlcnNpb24gb2YgdGhpcyBlbGVtZW50LlxuICAvLyBJbiAyLjAsIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGBfb25Jcm9uSW5wdXRSZWFkeWAgaXMgZG9uZSBpblxuICAvLyBQYXBlcklucHV0QmVoYXZpb3I6OmF0dGFjaGVkLlxuICBsaXN0ZW5lcnM6IHsnaXJvbi1pbnB1dC1yZWFkeSc6ICdfb25Jcm9uSW5wdXRSZWFkeSd9LFxuXG4gIF9vbklyb25JbnB1dFJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBFdmVuIHRob3VnaCB0aGlzIGlzIG9ubHkgdXNlZCBpbiB0aGUgbmV4dCBsaW5lLCBzYXZlIHRoaXMgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHNpbmNlIHRoZSBuYXRpdmUgaW5wdXQgaGFkIHRoaXMgSUQgdW50aWwgMi4wLjUuXG4gICAgaWYgKCF0aGlzLiQubmF0aXZlSW5wdXQpIHtcbiAgICAgIHRoaXMuJC5uYXRpdmVJbnB1dCA9IHRoaXMuJCQoJ2lucHV0Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJlxuICAgICAgICB0aGlzLl90eXBlc1RoYXRIYXZlVGV4dC5pbmRleE9mKHRoaXMuJC5uYXRpdmVJbnB1dC50eXBlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWx3YXlzRmxvYXRMYWJlbCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gT25seSB2YWxpZGF0ZSB3aGVuIGF0dGFjaGVkIGlmIHRoZSBpbnB1dCBhbHJlYWR5IGhhcyBhIHZhbHVlLlxuICAgIGlmICghIXRoaXMuaW5wdXRFbGVtZW50LmJpbmRWYWx1ZSkge1xuICAgICAgdGhpcy4kLmNvbnRhaW5lci5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUodGhpcy5pbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfSxcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuVHlwb2dyYXBoaWMgc3R5bGVzIGFyZSBwcm92aWRlZCBtYXRjaGluZyB0aGUgTWF0ZXJpYWwgRGVzaWduIHN0YW5kYXJkIHN0eWxlczpcbmh0dHA6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9zdHlsZS90eXBvZ3JhcGh5Lmh0bWwjdHlwb2dyYXBoeS1zdGFuZGFyZC1zdHlsZXNcblxuTm90ZSB0aGF0IHRoZXNlIGFyZSBFbmdsaXNoL0xhdGluIGNlbnRyaWMgc3R5bGVzLiBZb3UgbWF5IG5lZWQgdG8gZnVydGhlciBhZGp1c3RcbmxpbmUgaGVpZ2h0cyBhbmQgd2VpZ2h0cyBmb3IgQ0pLIHR5cGVzZXR0aW5nLiBTZWUgdGhlIG5vdGVzIGluIHRoZSBNYXRlcmlhbFxuRGVzaWduIHR5cG9ncmFwaHkgc2VjdGlvbi5cbiovXG5cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2ZvbnQtcm9ib3RvL3JvYm90by5qcyc7XG5cbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuY29uc3QgdGVtcGxhdGUgPSBodG1sYDxjdXN0b20tc3R5bGU+XG4gIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxuICAgIGh0bWwge1xuXG4gICAgICAvKiBTaGFyZWQgU3R5bGVzICovXG4gICAgICAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U6IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnTm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgfTtcblxuICAgICAgLS1wYXBlci1mb250LWNvbW1vbi1jb2RlOiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCAnQ29uc29sYXMnLCAnTWVubG8nLCBtb25vc3BhY2U7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgfTtcblxuICAgICAgLS1wYXBlci1mb250LWNvbW1vbi1leHBlbnNpdmUta2VybmluZzoge1xuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgfTtcblxuICAgICAgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA6IHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9O1xuXG4gICAgICAvKiBNYXRlcmlhbCBGb250IFN0eWxlcyAqL1xuXG4gICAgICAtLXBhcGVyLWZvbnQtZGlzcGxheTQ6IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMTEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjA0NGVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMTIwcHg7XG4gICAgICB9O1xuXG4gICAgICAtLXBhcGVyLWZvbnQtZGlzcGxheTM6IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uMDI2ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgfTtcblxuICAgICAgLS1wYXBlci1mb250LWRpc3BsYXkyOiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG5cbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4wMThlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICB9O1xuXG4gICAgICAtLXBhcGVyLWZvbnQtZGlzcGxheTE6IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcblxuICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgfTtcblxuICAgICAgLS1wYXBlci1mb250LWhlYWRsaW5lOiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG5cbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4wMTJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICB9O1xuXG4gICAgICAtLXBhcGVyLWZvbnQtdGl0bGU6IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICB9O1xuXG4gICAgICAtLXBhcGVyLWZvbnQtc3ViaGVhZDoge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9O1xuXG4gICAgICAtLXBhcGVyLWZvbnQtYm9keTI6IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcblxuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfTtcblxuICAgICAgLS1wYXBlci1mb250LWJvZHkxOiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG5cbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIH07XG5cbiAgICAgIC0tcGFwZXItZm9udC1jYXB0aW9uOiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcblxuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIH07XG5cbiAgICAgIC0tcGFwZXItZm9udC1tZW51OiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcblxuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfTtcblxuICAgICAgLS1wYXBlci1mb250LWJ1dHRvbjoge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG5cbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMThlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9O1xuXG4gICAgICAtLXBhcGVyLWZvbnQtY29kZTI6IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tY29kZTtcblxuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgfTtcblxuICAgICAgLS1wYXBlci1mb250LWNvZGUxOiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWNvZGU7XG5cbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIH07XG5cbiAgICB9XG5cbiAgPC9zdHlsZT5cbjwvY3VzdG9tLXN0eWxlPmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5cbmltcG9ydCB7SXJvbkJ1dHRvblN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWJ1dHRvbi1zdGF0ZS5qcyc7XG5pbXBvcnQge0lyb25Db250cm9sU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5qcyc7XG5pbXBvcnQge1BhcGVyUmlwcGxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWJlaGF2aW9ycy9wYXBlci1yaXBwbGUtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuYHBhcGVyLXRhYmAgaXMgc3R5bGVkIHRvIGxvb2sgbGlrZSBhIHRhYi4gSXQgc2hvdWxkIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aFxuYHBhcGVyLXRhYnNgLlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLXRhYnMgc2VsZWN0ZWQ9XCIwXCI+XG4gICAgICA8cGFwZXItdGFiPlRBQiAxPC9wYXBlci10YWI+XG4gICAgICA8cGFwZXItdGFiPlRBQiAyPC9wYXBlci10YWI+XG4gICAgICA8cGFwZXItdGFiPlRBQiAzPC9wYXBlci10YWI+XG4gICAgPC9wYXBlci10YWJzPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItdGFiLWlua2AgfCBJbmsgY29sb3IgfCBgLS1wYXBlci15ZWxsb3ctYTEwMGBcbmAtLXBhcGVyLXRhYmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0YWIgfCBge31gXG5gLS1wYXBlci10YWItY29udGVudGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0YWIgY29udGVudCB8IGB7fWBcbmAtLXBhcGVyLXRhYi1jb250ZW50LXVuc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGFiIGNvbnRlbnQgd2hlbiB0aGUgdGFiIGlzIG5vdCBzZWxlY3RlZCB8IGB7fWBcblxuVGhpcyBlbGVtZW50IGFwcGxpZXMgdGhlIG1peGluIGAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2VgIGJ1dCBkb2VzIG5vdCBpbXBvcnRcbmBwYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sYC4gSW4gb3JkZXIgdG8gYXBwbHkgdGhlIGBSb2JvdG9gIGZvbnQgdG8gdGhpc1xuZWxlbWVudCwgbWFrZSBzdXJlIHlvdSd2ZSBpbXBvcnRlZCBgcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbGAuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1pbmxpbmU7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItanVzdGlmaWVkO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1hdXRvO1xuXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdGFiO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6Zm9jdXMpIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2xpbmtdKSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIC50YWItY29udGVudCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKTtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1hdXRvO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10YWItY29udGVudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdCguaXJvbi1zZWxlY3RlZCkpID4gLnRhYi1jb250ZW50IHtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRhYi1jb250ZW50LXVuc2VsZWN0ZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpmb2N1cykgLnRhYi1jb250ZW50IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItcmlwcGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLXRhYi1pbmssIHZhcigtLXBhcGVyLXllbGxvdy1hMTAwKSk7XG4gICAgICB9XG5cbiAgICAgIC50YWItY29udGVudCA+IDo6c2xvdHRlZChhKSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LWF1dG87XG5cbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdwYXBlci10YWInLFxuXG4gIGJlaGF2aW9yczogW0lyb25Db250cm9sU3RhdGUsIElyb25CdXR0b25TdGF0ZSwgUGFwZXJSaXBwbGVCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIHRhYiB3aWxsIGZvcndhcmQga2V5Ym9hcmQgY2xpY2tzIChlbnRlci9zcGFjZSkgdG9cbiAgICAgKiB0aGUgZmlyc3QgYW5jaG9yIGVsZW1lbnQgZm91bmQgaW4gaXRzIGRlc2NlbmRhbnRzXG4gICAgICovXG4gICAgbGluazoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfVxuXG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ3RhYid9LFxuXG4gIGxpc3RlbmVyczoge2Rvd246ICdfdXBkYXRlTm9pbmsnLCB0YXA6ICdfb25UYXAnfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdXBkYXRlTm9pbmsoKTtcbiAgfSxcblxuICBnZXQgX3BhcmVudE5vaW5rKCkge1xuICAgIHZhciBwYXJlbnQgPSBkb20odGhpcykucGFyZW50Tm9kZTtcbiAgICByZXR1cm4gISFwYXJlbnQgJiYgISFwYXJlbnQubm9pbms7XG4gIH0sXG5cbiAgX3VwZGF0ZU5vaW5rOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm5vaW5rID0gISF0aGlzLm5vaW5rIHx8ICEhdGhpcy5fcGFyZW50Tm9pbms7XG4gIH0sXG5cbiAgX29uVGFwOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLmxpbmspIHtcbiAgICAgIHZhciBhbmNob3IgPSB0aGlzLnF1ZXJ5RWZmZWN0aXZlQ2hpbGRyZW4oJ2EnKTtcblxuICAgICAgaWYgKCFhbmNob3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBEb24ndCBnZXQgc3R1Y2sgaW4gYSBsb29wIGRlbGVnYXRpbmdcbiAgICAgIC8vIHRoZSBsaXN0ZW5lciBmcm9tIHRoZSBjaGlsZCBhbmNob3JcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGFuY2hvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFuY2hvci5jbGljaygpO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWljb25zZXQtc3ZnL2lyb24taWNvbnNldC1zdmcuanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGA8aXJvbi1pY29uc2V0LXN2ZyBuYW1lPVwicGFwZXItdGFic1wiIHNpemU9XCIyNFwiPlxuPHN2Zz48ZGVmcz5cbjxnIGlkPVwiY2hldnJvbi1sZWZ0XCI+PHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiPjwvcGF0aD48L2c+XG48ZyBpZD1cImNoZXZyb24tcmlnaHRcIj48cGF0aCBkPVwiTTEwIDZMOC41OSA3LjQxIDEzLjE3IDEybC00LjU4IDQuNTlMMTAgMThsNi02elwiPjwvcGF0aD48L2c+XG48L2RlZnM+PC9zdmc+XG48L2lyb24taWNvbnNldC1zdmc+YDtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnLi9wYXBlci10YWJzLWljb25zLmpzJztcbmltcG9ydCAnLi9wYXBlci10YWIuanMnO1xuXG5pbXBvcnQge0lyb25NZW51QmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9pcm9uLW1lbnUtYmVoYXZpb3IvaXJvbi1tZW51LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvbk1lbnViYXJCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZW51LWJlaGF2aW9yL2lyb24tbWVudWJhci1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25SZXNpemFibGVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1RhYnNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy90YWJzLmh0bWwpXG5cbmBwYXBlci10YWJzYCBtYWtlcyBpdCBlYXN5IHRvIGV4cGxvcmUgYW5kIHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudCB2aWV3cyBvclxuZnVuY3Rpb25hbCBhc3BlY3RzIG9mIGFuIGFwcCwgb3IgdG8gYnJvd3NlIGNhdGVnb3JpemVkIGRhdGEgc2V0cy5cblxuVXNlIGBzZWxlY3RlZGAgcHJvcGVydHkgdG8gZ2V0IG9yIHNldCB0aGUgc2VsZWN0ZWQgdGFiLlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLXRhYnMgc2VsZWN0ZWQ9XCIwXCI+XG4gICAgICA8cGFwZXItdGFiPlRBQiAxPC9wYXBlci10YWI+XG4gICAgICA8cGFwZXItdGFiPlRBQiAyPC9wYXBlci10YWI+XG4gICAgICA8cGFwZXItdGFiPlRBQiAzPC9wYXBlci10YWI+XG4gICAgPC9wYXBlci10YWJzPlxuXG5TZWUgPGEgaHJlZj1cIj9hY3RpdmU9cGFwZXItdGFiXCI+cGFwZXItdGFiPC9hPiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dFxuYHBhcGVyLXRhYmAuXG5cbkEgY29tbW9uIHVzYWdlIGZvciBgcGFwZXItdGFic2AgaXMgdG8gdXNlIGl0IGFsb25nIHdpdGggYGlyb24tcGFnZXNgIHRvIHN3aXRjaFxuYmV0d2VlbiBkaWZmZXJlbnQgdmlld3MuXG5cbiAgICA8cGFwZXItdGFicyBzZWxlY3RlZD1cInt7c2VsZWN0ZWR9fVwiPlxuICAgICAgPHBhcGVyLXRhYj5UYWIgMTwvcGFwZXItdGFiPlxuICAgICAgPHBhcGVyLXRhYj5UYWIgMjwvcGFwZXItdGFiPlxuICAgICAgPHBhcGVyLXRhYj5UYWIgMzwvcGFwZXItdGFiPlxuICAgIDwvcGFwZXItdGFicz5cblxuICAgIDxpcm9uLXBhZ2VzIHNlbGVjdGVkPVwie3tzZWxlY3RlZH19XCI+XG4gICAgICA8ZGl2PlBhZ2UgMTwvZGl2PlxuICAgICAgPGRpdj5QYWdlIDI8L2Rpdj5cbiAgICAgIDxkaXY+UGFnZSAzPC9kaXY+XG4gICAgPC9pcm9uLXBhZ2VzPlxuXG5UbyB1c2UgbGlua3MgaW4gdGFicywgYWRkIGBsaW5rYCBhdHRyaWJ1dGUgdG8gYHBhcGVyLXRhYmAgYW5kIHB1dCBhbiBgPGE+YFxuZWxlbWVudCBpbiBgcGFwZXItdGFiYCB3aXRoIGEgYHRhYmluZGV4YCBvZiAtMS5cblxuRXhhbXBsZTpcblxuPHByZT48Y29kZT5cbiZsdDtzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxuICAubGluayB7XG4gICAgJiM2NDthcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICYjNjQ7YXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgfVxuJmx0Oy9zdHlsZT5cblxuJmx0O3BhcGVyLXRhYnMgc2VsZWN0ZWQ9XCIwXCI+XG4gICZsdDtwYXBlci10YWIgbGluaz5cbiAgICAmbHQ7YSBocmVmPVwiI2xpbmsxXCIgY2xhc3M9XCJsaW5rXCIgdGFiaW5kZXg9XCItMVwiPlRBQiBPTkUmbHQ7L2E+XG4gICZsdDsvcGFwZXItdGFiPlxuICAmbHQ7cGFwZXItdGFiIGxpbms+XG4gICAgJmx0O2EgaHJlZj1cIiNsaW5rMlwiIGNsYXNzPVwibGlua1wiIHRhYmluZGV4PVwiLTFcIj5UQUIgVFdPJmx0Oy9hPlxuICAmbHQ7L3BhcGVyLXRhYj5cbiAgJmx0O3BhcGVyLXRhYiBsaW5rPlxuICAgICZsdDthIGhyZWY9XCIjbGluazNcIiBjbGFzcz1cImxpbmtcIiB0YWJpbmRleD1cIi0xXCI+VEFCIFRIUkVFJmx0Oy9hPlxuICAmbHQ7L3BhcGVyLXRhYj5cbiZsdDsvcGFwZXItdGFicz5cbjwvY29kZT48L3ByZT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXRhYnMtc2VsZWN0aW9uLWJhci1jb2xvcmAgfCBDb2xvciBmb3IgdGhlIHNlbGVjdGlvbiBiYXIgfCBgLS1wYXBlci15ZWxsb3ctYTEwMGBcbmAtLXBhcGVyLXRhYnMtc2VsZWN0aW9uLWJhcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBzZWxlY3Rpb24gYmFyIHwgYHt9YFxuYC0tcGFwZXItdGFic2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0YWJzIHwgYHt9YFxuYC0tcGFwZXItdGFicy1jb250ZW50YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNvbnRlbnQgY29udGFpbmVyIG9mIHRhYnMgfCBge31gXG5gLS1wYXBlci10YWJzLWNvbnRhaW5lcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYXlvdXQgY29udGFpbmVyIG9mIHRhYnMgfCBge31gXG5cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG5cbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAgICAgLyogTk9URTogQm90aCB2YWx1ZXMgYXJlIG5lZWRlZCwgc2luY2Ugc29tZSBwaG9uZXMgcmVxdWlyZSB0aGUgdmFsdWUgdG8gYmUgXFxgdHJhbnNwYXJlbnRcXGAuICovXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci10YWJzO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6ZGlyKHJ0bCkpIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWwtcmV2ZXJzZTtcbiAgICAgIH1cblxuICAgICAgI3RhYnNDb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtYXV0bztcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdGFicy1jb250YWluZXI7XG4gICAgICB9XG5cbiAgICAgICN0YWJzQ29udGVudCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLW1vei1mbGV4LWJhc2lzOiBhdXRvO1xuICAgICAgICAtbXMtZmxleC1iYXNpczogYXV0bztcbiAgICAgICAgZmxleC1iYXNpczogYXV0bztcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdGFicy1jb250ZW50O1xuICAgICAgfVxuXG4gICAgICAjdGFic0NvbnRlbnQuc2Nyb2xsYWJsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgI3RhYnNDb250ZW50Om5vdCguc2Nyb2xsYWJsZSksXG4gICAgICAjdGFic0NvbnRlbnQuc2Nyb2xsYWJsZS5maXQtY29udGFpbmVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICB9XG5cbiAgICAgICN0YWJzQ29udGVudC5zY3JvbGxhYmxlLmZpdC1jb250YWluZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgICN0YWJzQ29udGVudC5zY3JvbGxhYmxlLmZpdC1jb250YWluZXIgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICAvKiBJRSAtIHByZXZlbnQgdGFicyBmcm9tIGNvbXByZXNzaW5nIHdoZW4gdGhleSBzaG91bGQgc2Nyb2xsLiAqL1xuICAgICAgICAtbXMtZmxleDogMSAwIGF1dG87XG4gICAgICAgIC13ZWJraXQtZmxleDogMSAwIGF1dG87XG4gICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLm5vdC12aXNpYmxlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICB9XG5cbiAgICAgICNzZWxlY3Rpb25CYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXBhcGVyLXRhYnMtc2VsZWN0aW9uLWJhci1jb2xvciwgdmFyKC0tcGFwZXIteWVsbG93LWExMDApKTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci10YWJzLXNlbGVjdGlvbi1iYXI7XG4gICAgICB9XG5cbiAgICAgICNzZWxlY3Rpb25CYXIuYWxpZ24tYm90dG9tIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICB9XG5cbiAgICAgICNzZWxlY3Rpb25CYXIuZXhwYW5kIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpO1xuICAgICAgfVxuXG4gICAgICAjc2VsZWN0aW9uQmFyLmNvbnRyYWN0IHtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xOHM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSk7XG4gICAgICB9XG5cbiAgICAgICN0YWJzQ29udGVudCA+IDo6c2xvdHRlZCg6bm90KCNzZWxlY3Rpb25CYXIpKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJwYXBlci10YWJzOmNoZXZyb24tbGVmdFwiIGNsYXNzXFwkPVwiW1tfY29tcHV0ZVNjcm9sbEJ1dHRvbkNsYXNzKF9sZWZ0SGlkZGVuLCBzY3JvbGxhYmxlLCBoaWRlU2Nyb2xsQnV0dG9ucyldXVwiIG9uLXVwPVwiX29uU2Nyb2xsQnV0dG9uVXBcIiBvbi1kb3duPVwiX29uTGVmdFNjcm9sbEJ1dHRvbkRvd25cIiB0YWJpbmRleD1cIi0xXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cblxuICAgIDxkaXYgaWQ9XCJ0YWJzQ29udGFpbmVyXCIgb24tdHJhY2s9XCJfc2Nyb2xsXCIgb24tZG93bj1cIl9kb3duXCI+XG4gICAgICA8ZGl2IGlkPVwidGFic0NvbnRlbnRcIiBjbGFzc1xcJD1cIltbX2NvbXB1dGVUYWJzQ29udGVudENsYXNzKHNjcm9sbGFibGUsIGZpdENvbnRhaW5lcildXVwiPlxuICAgICAgICA8ZGl2IGlkPVwic2VsZWN0aW9uQmFyXCIgY2xhc3NcXCQ9XCJbW19jb21wdXRlU2VsZWN0aW9uQmFyQ2xhc3Mobm9CYXIsIGFsaWduQm90dG9tKV1dXCIgb24tdHJhbnNpdGlvbmVuZD1cIl9vbkJhclRyYW5zaXRpb25FbmRcIj48L2Rpdj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8cGFwZXItaWNvbi1idXR0b24gaWNvbj1cInBhcGVyLXRhYnM6Y2hldnJvbi1yaWdodFwiIGNsYXNzXFwkPVwiW1tfY29tcHV0ZVNjcm9sbEJ1dHRvbkNsYXNzKF9yaWdodEhpZGRlbiwgc2Nyb2xsYWJsZSwgaGlkZVNjcm9sbEJ1dHRvbnMpXV1cIiBvbi11cD1cIl9vblNjcm9sbEJ1dHRvblVwXCIgb24tZG93bj1cIl9vblJpZ2h0U2Nyb2xsQnV0dG9uRG93blwiIHRhYmluZGV4PVwiLTFcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuYCxcblxuICBpczogJ3BhcGVyLXRhYnMnLFxuICBiZWhhdmlvcnM6IFtJcm9uUmVzaXphYmxlQmVoYXZpb3IsIElyb25NZW51YmFyQmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBpbmsgcmlwcGxlIGVmZmVjdCBpcyBkaXNhYmxlZC4gV2hlbiB0aGlzIHByb3BlcnR5IGlzIGNoYW5nZWQsXG4gICAgICogYWxsIGRlc2NlbmRhbnQgYDxwYXBlci10YWI+YCBlbGVtZW50cyBoYXZlIHRoZWlyIGBub2lua2AgcHJvcGVydHlcbiAgICAgKiBjaGFuZ2VkIHRvIHRoZSBuZXcgdmFsdWUgYXMgd2VsbC5cbiAgICAgKi9cbiAgICBub2luazoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgb2JzZXJ2ZXI6ICdfbm9pbmtDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgYm90dG9tIGJhciB0byBpbmRpY2F0ZSB0aGUgc2VsZWN0ZWQgdGFiIHdpbGwgbm90IGJlIHNob3duLlxuICAgICAqL1xuICAgIG5vQmFyOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBzbGlkZSBlZmZlY3QgZm9yIHRoZSBib3R0b20gYmFyIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIG5vU2xpZGU6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGFicyBhcmUgc2Nyb2xsYWJsZSBhbmQgdGhlIHRhYiB3aWR0aCBpcyBiYXNlZCBvbiB0aGUgbGFiZWxcbiAgICAgKiB3aWR0aC5cbiAgICAgKi9cbiAgICBzY3JvbGxhYmxlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRhYnMgZXhwYW5kIHRvIGZpdCB0aGVpciBjb250YWluZXIuIFRoaXMgY3VycmVudGx5IG9ubHkgYXBwbGllc1xuICAgICAqIHdoZW4gc2Nyb2xsYWJsZSBpcyB0cnVlLlxuICAgICAqL1xuICAgIGZpdENvbnRhaW5lcjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBkcmFnZ2luZyBvbiB0aGUgdGFicyB0byBzY3JvbGwgaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZURyYWc6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc2Nyb2xsIGJ1dHRvbnMgKGxlZnQvcmlnaHQgYXJyb3cpIHdpbGwgYmUgaGlkZGVuIGZvciBzY3JvbGxhYmxlXG4gICAgICogdGFicy5cbiAgICAgKi9cbiAgICBoaWRlU2Nyb2xsQnV0dG9uczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgdGFicyBhcmUgYWxpZ25lZCB0byBib3R0b20gKHRoZSBzZWxlY3Rpb24gYmFyIGFwcGVhcnMgYXQgdGhlXG4gICAgICogdG9wKS5cbiAgICAgKi9cbiAgICBhbGlnbkJvdHRvbToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICBzZWxlY3RhYmxlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3BhcGVyLXRhYid9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGFicyBhcmUgYXV0b21hdGljYWxseSBzZWxlY3RlZCB3aGVuIGZvY3VzZWQgdXNpbmcgdGhlXG4gICAgICoga2V5Ym9hcmQuXG4gICAgICovXG4gICAgYXV0b3NlbGVjdDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVsYXkgKGluIG1pbGxpc2Vjb25kcykgYmV0d2VlbiB3aGVuIHRoZSB1c2VyIHN0b3BzIGludGVyYWN0aW5nXG4gICAgICogd2l0aCB0aGUgdGFicyB0aHJvdWdoIHRoZSBrZXlib2FyZCBhbmQgd2hlbiB0aGUgZm9jdXNlZCBpdGVtIGlzXG4gICAgICogYXV0b21hdGljYWxseSBzZWxlY3RlZCAoaWYgYGF1dG9zZWxlY3RgIGlzIHRydWUpLlxuICAgICAqL1xuICAgIGF1dG9zZWxlY3REZWxheToge3R5cGU6IE51bWJlciwgdmFsdWU6IDB9LFxuXG4gICAgX3N0ZXA6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAxMH0sXG5cbiAgICBfaG9sZERlbGF5OiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMX0sXG5cbiAgICBfbGVmdEhpZGRlbjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICBfcmlnaHRIaWRkZW46IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgX3ByZXZpb3VzVGFiOiB7dHlwZTogT2JqZWN0fVxuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICd0YWJsaXN0J30sXG5cbiAgbGlzdGVuZXJzOiB7XG4gICAgJ2lyb24tcmVzaXplJzogJ19vblRhYlNpemluZ0NoYW5nZWQnLFxuICAgICdpcm9uLWl0ZW1zLWNoYW5nZWQnOiAnX29uVGFiU2l6aW5nQ2hhbmdlZCcsXG4gICAgJ2lyb24tc2VsZWN0JzogJ19vbklyb25TZWxlY3QnLFxuICAgICdpcm9uLWRlc2VsZWN0JzogJ19vbklyb25EZXNlbGVjdCdcbiAgfSxcblxuICAvKipcbiAgICogQHR5cGUgeyFPYmplY3R9XG4gICAqL1xuICBrZXlCaW5kaW5nczogeydsZWZ0OmtleXVwIHJpZ2h0OmtleXVwJzogJ19vbkFycm93S2V5dXAnfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9ob2xkSm9iID0gbnVsbDtcbiAgICB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvbkl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcGVuZGluZ0FjdGl2YXRpb25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2JpbmREZWxheWVkQWN0aXZhdGlvbkhhbmRsZXIgPVxuICAgICAgICB0aGlzLl9kZWxheWVkQWN0aXZhdGlvbkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXJDYXB0dXJlLmJpbmQodGhpcyksIHRydWUpO1xuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldFNjcm9sbERpcmVjdGlvbigneScsIHRoaXMuJC50YWJzQ29udGFpbmVyKTtcbiAgfSxcblxuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY2FuY2VsUGVuZGluZ0FjdGl2YXRpb24oKTtcbiAgfSxcblxuICBfbm9pbmtDaGFuZ2VkOiBmdW5jdGlvbihub2luaykge1xuICAgIHZhciBjaGlsZFRhYnMgPSBkb20odGhpcykucXVlcnlTZWxlY3RvckFsbCgncGFwZXItdGFiJyk7XG4gICAgY2hpbGRUYWJzLmZvckVhY2goXG4gICAgICAgIG5vaW5rID8gdGhpcy5fc2V0Tm9pbmtBdHRyaWJ1dGUgOiB0aGlzLl9yZW1vdmVOb2lua0F0dHJpYnV0ZSk7XG4gIH0sXG5cbiAgX3NldE5vaW5rQXR0cmlidXRlOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25vaW5rJywgJycpO1xuICB9LFxuXG4gIF9yZW1vdmVOb2lua0F0dHJpYnV0ZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdub2luaycpO1xuICB9LFxuXG4gIF9jb21wdXRlU2Nyb2xsQnV0dG9uQ2xhc3M6IGZ1bmN0aW9uKFxuICAgICAgaGlkZVRoaXNCdXR0b24sIHNjcm9sbGFibGUsIGhpZGVTY3JvbGxCdXR0b25zKSB7XG4gICAgaWYgKCFzY3JvbGxhYmxlIHx8IGhpZGVTY3JvbGxCdXR0b25zKSB7XG4gICAgICByZXR1cm4gJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgaWYgKGhpZGVUaGlzQnV0dG9uKSB7XG4gICAgICByZXR1cm4gJ25vdC12aXNpYmxlJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH0sXG5cbiAgX2NvbXB1dGVUYWJzQ29udGVudENsYXNzOiBmdW5jdGlvbihzY3JvbGxhYmxlLCBmaXRDb250YWluZXIpIHtcbiAgICByZXR1cm4gc2Nyb2xsYWJsZSA/ICdzY3JvbGxhYmxlJyArIChmaXRDb250YWluZXIgPyAnIGZpdC1jb250YWluZXInIDogJycpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICcgZml0LWNvbnRhaW5lcic7XG4gIH0sXG5cbiAgX2NvbXB1dGVTZWxlY3Rpb25CYXJDbGFzczogZnVuY3Rpb24obm9CYXIsIGFsaWduQm90dG9tKSB7XG4gICAgaWYgKG5vQmFyKSB7XG4gICAgICByZXR1cm4gJ2hpZGRlbic7XG4gICAgfSBlbHNlIGlmIChhbGlnbkJvdHRvbSkge1xuICAgICAgcmV0dXJuICdhbGlnbi1ib3R0b20nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfSxcblxuICAvLyBUT0RPKGNkYXRhKTogQWRkIGB0cmFja2AgcmVzcG9uc2UgYmFjayBpbiB3aGVuIGdlc3R1cmUgbGFuZHMuXG5cbiAgX29uVGFiU2l6aW5nQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kZWJvdW5jZSgnX29uVGFiU2l6aW5nQ2hhbmdlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fc2Nyb2xsKCk7XG4gICAgICB0aGlzLl90YWJDaGFuZ2VkKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9LCAxMCk7XG4gIH0sXG5cbiAgX29uSXJvblNlbGVjdDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl90YWJDaGFuZ2VkKGV2ZW50LmRldGFpbC5pdGVtLCB0aGlzLl9wcmV2aW91c1RhYik7XG4gICAgdGhpcy5fcHJldmlvdXNUYWIgPSBldmVudC5kZXRhaWwuaXRlbTtcbiAgICB0aGlzLmNhbmNlbERlYm91bmNlcigndGFiLWNoYW5nZWQnKTtcbiAgfSxcblxuICBfb25Jcm9uRGVzZWxlY3Q6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5kZWJvdW5jZSgndGFiLWNoYW5nZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3RhYkNoYW5nZWQobnVsbCwgdGhpcy5fcHJldmlvdXNUYWIpO1xuICAgICAgdGhpcy5fcHJldmlvdXNUYWIgPSBudWxsO1xuICAgICAgLy8gU2VlIHBvbHltZXIvcG9seW1lciMxMzA1XG4gICAgfSwgMSk7XG4gIH0sXG5cbiAgX2FjdGl2YXRlSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gQ2FuY2VsIGl0ZW0gYWN0aXZhdGlvbnMgc2NoZWR1bGVkIGJ5IGtleWJvYXJkIGV2ZW50cyB3aGVuIGFueSBvdGhlclxuICAgIC8vIGFjdGlvbiBjYXVzZXMgYW4gaXRlbSB0byBiZSBhY3RpdmF0ZWQgKGUuZy4gY2xpY2tzKS5cbiAgICB0aGlzLl9jYW5jZWxQZW5kaW5nQWN0aXZhdGlvbigpO1xuXG4gICAgSXJvbk1lbnVCZWhhdmlvckltcGwuX2FjdGl2YXRlSGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgYW4gaXRlbSBhZnRlciBhIGRlbGF5IChpbiBtaWxsaXNlY29uZHMpLlxuICAgKi9cbiAgX3NjaGVkdWxlQWN0aXZhdGlvbjogZnVuY3Rpb24oaXRlbSwgZGVsYXkpIHtcbiAgICB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvbkl0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uVGltZW91dCA9XG4gICAgICAgIHRoaXMuYXN5bmModGhpcy5fYmluZERlbGF5ZWRBY3RpdmF0aW9uSGFuZGxlciwgZGVsYXkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGxhc3QgaXRlbSBnaXZlbiB0byBgX3NjaGVkdWxlQWN0aXZhdGlvbmAuXG4gICAqL1xuICBfZGVsYXllZEFjdGl2YXRpb25IYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uSXRlbTtcbiAgICB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvbkl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcGVuZGluZ0FjdGl2YXRpb25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIGl0ZW0uZmlyZSh0aGlzLmFjdGl2YXRlRXZlbnQsIG51bGwsIHtidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbmNlbHMgYSBwcmV2aW91c2x5IHNjaGVkdWxlZCBpdGVtIGFjdGl2YXRpb24gbWFkZSB3aXRoXG4gICAqIGBfc2NoZWR1bGVBY3RpdmF0aW9uYC5cbiAgICovXG4gIF9jYW5jZWxQZW5kaW5nQWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uVGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNhbmNlbEFzeW5jKHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uVGltZW91dCk7XG4gICAgICB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvbkl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvblRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxuXG4gIF9vbkFycm93S2V5dXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuYXV0b3NlbGVjdCkge1xuICAgICAgdGhpcy5fc2NoZWR1bGVBY3RpdmF0aW9uKHRoaXMuZm9jdXNlZEl0ZW0sIHRoaXMuYXV0b3NlbGVjdERlbGF5KTtcbiAgICB9XG4gIH0sXG5cbiAgX29uQmx1ckNhcHR1cmU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gQ2FuY2VsIGEgc2NoZWR1bGVkIGl0ZW0gYWN0aXZhdGlvbiAoaWYgYW55KSB3aGVuIHRoYXQgaXRlbSBpc1xuICAgIC8vIGJsdXJyZWQuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5fcGVuZGluZ0FjdGl2YXRpb25JdGVtKSB7XG4gICAgICB0aGlzLl9jYW5jZWxQZW5kaW5nQWN0aXZhdGlvbigpO1xuICAgIH1cbiAgfSxcblxuICBnZXQgX3RhYkNvbnRhaW5lclNjcm9sbFNpemUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgICAgICAwLCB0aGlzLiQudGFic0NvbnRhaW5lci5zY3JvbGxXaWR0aCAtIHRoaXMuJC50YWJzQ29udGFpbmVyLm9mZnNldFdpZHRoKTtcbiAgfSxcblxuICBfc2Nyb2xsOiBmdW5jdGlvbihlLCBkZXRhaWwpIHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZHggPSAoZGV0YWlsICYmIC1kZXRhaWwuZGR4KSB8fCAwO1xuICAgIHRoaXMuX2FmZmVjdFNjcm9sbChkZHgpO1xuICB9LFxuXG4gIF9kb3duOiBmdW5jdGlvbihlKSB7XG4gICAgLy8gZ28gb25lIGJlYXQgYXN5bmMgdG8gZGVmZWF0IElyb25NZW51QmVoYXZpb3JcbiAgICAvLyBhdXRvcmVmb2N1cy1vbi1uby1zZWxlY3Rpb24gdGltZW91dFxuICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5fZGVmYXVsdEZvY3VzQXN5bmMpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxBc3luYyh0aGlzLl9kZWZhdWx0Rm9jdXNBc3luYyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRGb2N1c0FzeW5jID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfSxcblxuICBfYWZmZWN0U2Nyb2xsOiBmdW5jdGlvbihkeCkge1xuICAgIHRoaXMuJC50YWJzQ29udGFpbmVyLnNjcm9sbExlZnQgKz0gZHg7XG5cbiAgICB2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJC50YWJzQ29udGFpbmVyLnNjcm9sbExlZnQ7XG5cbiAgICB0aGlzLl9sZWZ0SGlkZGVuID0gc2Nyb2xsTGVmdCA9PT0gMDtcbiAgICB0aGlzLl9yaWdodEhpZGRlbiA9IHNjcm9sbExlZnQgPT09IHRoaXMuX3RhYkNvbnRhaW5lclNjcm9sbFNpemU7XG4gIH0sXG5cbiAgX29uTGVmdFNjcm9sbEJ1dHRvbkRvd246IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Njcm9sbFRvTGVmdCgpO1xuICAgIHRoaXMuX2hvbGRKb2IgPSBzZXRJbnRlcnZhbCh0aGlzLl9zY3JvbGxUb0xlZnQuYmluZCh0aGlzKSwgdGhpcy5faG9sZERlbGF5KTtcbiAgfSxcblxuICBfb25SaWdodFNjcm9sbEJ1dHRvbkRvd246IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Njcm9sbFRvUmlnaHQoKTtcbiAgICB0aGlzLl9ob2xkSm9iID1cbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5fc2Nyb2xsVG9SaWdodC5iaW5kKHRoaXMpLCB0aGlzLl9ob2xkRGVsYXkpO1xuICB9LFxuXG4gIF9vblNjcm9sbEJ1dHRvblVwOiBmdW5jdGlvbigpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2hvbGRKb2IpO1xuICAgIHRoaXMuX2hvbGRKb2IgPSBudWxsO1xuICB9LFxuXG4gIF9zY3JvbGxUb0xlZnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2FmZmVjdFNjcm9sbCgtdGhpcy5fc3RlcCk7XG4gIH0sXG5cbiAgX3Njcm9sbFRvUmlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2FmZmVjdFNjcm9sbCh0aGlzLl9zdGVwKTtcbiAgfSxcblxuICBfdGFiQ2hhbmdlZDogZnVuY3Rpb24odGFiLCBvbGQpIHtcbiAgICBpZiAoIXRhYikge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBiYXIgd2l0aG91dCBhbmltYXRpb24uXG4gICAgICB0aGlzLiQuc2VsZWN0aW9uQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZCcpO1xuICAgICAgdGhpcy4kLnNlbGVjdGlvbkJhci5jbGFzc0xpc3QucmVtb3ZlKCdjb250cmFjdCcpO1xuICAgICAgdGhpcy5fcG9zaXRpb25CYXIoMCwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHIgPSB0aGlzLiQudGFic0NvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHcgPSByLndpZHRoO1xuICAgIHZhciB0YWJSZWN0ID0gdGFiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB0YWJPZmZzZXRMZWZ0ID0gdGFiUmVjdC5sZWZ0IC0gci5sZWZ0O1xuXG4gICAgdGhpcy5fcG9zID0ge1xuICAgICAgd2lkdGg6IHRoaXMuX2NhbGNQZXJjZW50KHRhYlJlY3Qud2lkdGgsIHcpLFxuICAgICAgbGVmdDogdGhpcy5fY2FsY1BlcmNlbnQodGFiT2Zmc2V0TGVmdCwgdylcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMubm9TbGlkZSB8fCBvbGQgPT0gbnVsbCkge1xuICAgICAgLy8gUG9zaXRpb24gdGhlIGJhciB3aXRob3V0IGFuaW1hdGlvbi5cbiAgICAgIHRoaXMuJC5zZWxlY3Rpb25CYXIuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kJyk7XG4gICAgICB0aGlzLiQuc2VsZWN0aW9uQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRyYWN0Jyk7XG4gICAgICB0aGlzLl9wb3NpdGlvbkJhcih0aGlzLl9wb3Mud2lkdGgsIHRoaXMuX3Bvcy5sZWZ0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb2xkUmVjdCA9IG9sZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgb2xkSW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2Yob2xkKTtcbiAgICB2YXIgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YodGFiKTtcbiAgICB2YXIgbSA9IDU7XG5cbiAgICAvLyBiYXIgYW5pbWF0aW9uOiBleHBhbmRcbiAgICB0aGlzLiQuc2VsZWN0aW9uQmFyLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpO1xuXG4gICAgdmFyIG1vdmVSaWdodCA9IG9sZEluZGV4IDwgaW5kZXg7XG4gICAgdmFyIGlzUlRMID0gdGhpcy5faXNSVEw7XG4gICAgaWYgKGlzUlRMKSB7XG4gICAgICBtb3ZlUmlnaHQgPSAhbW92ZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmIChtb3ZlUmlnaHQpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uQmFyKFxuICAgICAgICAgIHRoaXMuX2NhbGNQZXJjZW50KHRhYlJlY3QubGVmdCArIHRhYlJlY3Qud2lkdGggLSBvbGRSZWN0LmxlZnQsIHcpIC0gbSxcbiAgICAgICAgICB0aGlzLl9sZWZ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9zaXRpb25CYXIoXG4gICAgICAgICAgdGhpcy5fY2FsY1BlcmNlbnQob2xkUmVjdC5sZWZ0ICsgb2xkUmVjdC53aWR0aCAtIHRhYlJlY3QubGVmdCwgdykgLSBtLFxuICAgICAgICAgIHRoaXMuX2NhbGNQZXJjZW50KHRhYk9mZnNldExlZnQsIHcpICsgbSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xuICAgICAgdGhpcy5fc2Nyb2xsVG9TZWxlY3RlZElmTmVlZGVkKHRhYlJlY3Qud2lkdGgsIHRhYk9mZnNldExlZnQpO1xuICAgIH1cbiAgfSxcblxuICBfc2Nyb2xsVG9TZWxlY3RlZElmTmVlZGVkOiBmdW5jdGlvbih0YWJXaWR0aCwgdGFiT2Zmc2V0TGVmdCkge1xuICAgIHZhciBsID0gdGFiT2Zmc2V0TGVmdCAtIHRoaXMuJC50YWJzQ29udGFpbmVyLnNjcm9sbExlZnQ7XG4gICAgaWYgKGwgPCAwKSB7XG4gICAgICB0aGlzLiQudGFic0NvbnRhaW5lci5zY3JvbGxMZWZ0ICs9IGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgKz0gKHRhYldpZHRoIC0gdGhpcy4kLnRhYnNDb250YWluZXIub2Zmc2V0V2lkdGgpO1xuICAgICAgaWYgKGwgPiAwKSB7XG4gICAgICAgIHRoaXMuJC50YWJzQ29udGFpbmVyLnNjcm9sbExlZnQgKz0gbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2NhbGNQZXJjZW50OiBmdW5jdGlvbih3LCB3MCkge1xuICAgIHJldHVybiAxMDAgKiB3IC8gdzA7XG4gIH0sXG5cbiAgX3Bvc2l0aW9uQmFyOiBmdW5jdGlvbih3aWR0aCwgbGVmdCkge1xuICAgIHdpZHRoID0gd2lkdGggfHwgMDtcbiAgICBsZWZ0ID0gbGVmdCB8fCAwO1xuXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLl9sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnRyYW5zZm9ybShcbiAgICAgICAgJ3RyYW5zbGF0ZVgoJyArIGxlZnQgKyAnJSkgc2NhbGVYKCcgKyAod2lkdGggLyAxMDApICsgJyknLFxuICAgICAgICB0aGlzLiQuc2VsZWN0aW9uQmFyKTtcbiAgfSxcblxuICBfb25CYXJUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGNsID0gdGhpcy4kLnNlbGVjdGlvbkJhci5jbGFzc0xpc3Q7XG4gICAgLy8gYmFyIGFuaW1hdGlvbjogZXhwYW5kIC0+IGNvbnRyYWN0XG4gICAgaWYgKGNsLmNvbnRhaW5zKCdleHBhbmQnKSkge1xuICAgICAgY2wucmVtb3ZlKCdleHBhbmQnKTtcbiAgICAgIGNsLmFkZCgnY29udHJhY3QnKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uQmFyKHRoaXMuX3Bvcy53aWR0aCwgdGhpcy5fcG9zLmxlZnQpO1xuICAgICAgLy8gYmFyIGFuaW1hdGlvbiBkb25lXG4gICAgfSBlbHNlIGlmIChjbC5jb250YWlucygnY29udHJhY3QnKSkge1xuICAgICAgY2wucmVtb3ZlKCdjb250cmFjdCcpO1xuICAgIH1cbiAgfVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gICNsYWJlbCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgQGFwcGx5IC0tY29yay10b2dnbGUtcGFuZWwtbGFiZWw7XFxuICB9XFxuXFxuICAjY29udGVudCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGhlaWdodDogMDtcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDI1MG1zIGVhc2Utb3V0O1xcbiAgICBAYXBwbHkgLS1jb3JrLXRvZ2dsZS1wYW5lbC1jb250ZW50O1xcbiAgfVxcblxcbiAgaXJvbi1pY29uIHtcXG4gICAgY29sb3I6IHZhcigtLWNvcmstZHJvcC1kb3duLWFycm93LWNvbG9yLCAjOTEyMDQ2KTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1vdXQ7XFxuICB9XFxuXFxuICBpcm9uLWljb25bY2xvc2VkXSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICB9XFxuXFxuPC9zdHlsZT5cXG5cXG48ZGl2IGlkPVxcXCJsYWJlbFxcXCIgb24tY2xpY2s9XFxcInRvZ2dsZVxcXCI+XFxuICA8ZGl2IHN0eWxlPVxcXCJmbGV4OjFcXFwiPltbbGFiZWxdXTwvZGl2PlxcbiAgPGlyb24taWNvbiBpY29uPVxcXCJhcnJvdy1kcm9wLWRvd25cXFwiIGNsb3NlZCQ9XFxcIltbIW9wZW5lZF1dXFxcIj48L2lyb24taWNvbj5cXG48L2Rpdj5cXG5cXG48ZGl2IGlkPVxcXCJjb250ZW50XFxcIj5cXG4gIDxzbG90Pjwvc2xvdD5cXG48L2Rpdj5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiXG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb25zL2lyb24taWNvbnNcIlxuXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vY29yay10b2dnbGUtcGFuZWwuaHRtbFwiXG5cbmV4cG9ydCBjbGFzcyBDb3JrVG9nZ2xlUGFuZWwgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBub3RpZnkgOiB0cnVlXG4gICAgICB9LFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB2YXIgaCA9IDU7XG4gICAgZm9yKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrICkge1xuICAgICAgaCArPSB0aGlzLmNoaWxkcmVuW2ldLm9mZnNldEhlaWdodDtcbiAgICB9XG4gICAgdGhpcy4kLmNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gaCsncHgnO1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuJC5jb250ZW50LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYoIHRoaXMub3BlbmVkICkgdGhpcy5jbG9zZSgpO1xuICAgIGVsc2UgdGhpcy5vcGVuKCk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvcmstdG9nZ2xlLXBhbmVsJywgQ29ya1RvZ2dsZVBhbmVsKTsiXSwic291cmNlUm9vdCI6IiJ9