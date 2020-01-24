(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-record~page-search"],{

/***/ "./public/elements/auth/app-auth-header.js":
/*!*************************************************!*\
  !*** ./public/elements/auth/app-auth-header.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["<iron-icon icon=\"fin-icons:account\" style=\"width: 40px; height:40px\"></iron-icon>"], ["<iron-icon icon=\"fin-icons:account\" style=\"width: 40px; height:40px\"></iron-icon>"]);

var _polymerElement = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");

var _AuthInterface = __webpack_require__(/*! ../interfaces/AuthInterface */ "./public/elements/interfaces/AuthInterface.js");

var _AuthInterface2 = _interopRequireDefault(_AuthInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppAuthHeader = function (_Mixin$with) {
  _inherits(AppAuthHeader, _Mixin$with);

  _createClass(AppAuthHeader, null, [{
    key: "template",
    get: function get() {
      return (0, _polymerElement.html)(_templateObject);
    }
  }]);

  function AppAuthHeader() {
    _classCallCheck(this, AppAuthHeader);

    var _this = _possibleConstructorReturn(this, (AppAuthHeader.__proto__ || Object.getPrototypeOf(AppAuthHeader)).call(this));

    _this.active = true;
    return _this;
  }

  /**
   * @method _onAuthUpdate
   * @description from AuthInterface. called whenever auth state changes
   */


  _createClass(AppAuthHeader, [{
    key: "_onAuthUpdate",
    value: function _onAuthUpdate(e) {
      if (e.state === 'loggedIn') this.style.display = 'block';else this.style.display = 'none';
    }
  }]);

  return AppAuthHeader;
}(Mixin(_polymerElement.PolymerElement).with(EventInterface, _AuthInterface2.default));

customElements.define('app-auth-header', AppAuthHeader);

/***/ }),

/***/ "./public/elements/interfaces/MediaInterface.js":
/*!******************************************************!*\
  !*** ./public/elements/interfaces/MediaInterface.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (subclass) {
  return function (_subclass) {
    _inherits(MediaInterface, _subclass);

    function MediaInterface() {
      _classCallCheck(this, MediaInterface);

      var _this = _possibleConstructorReturn(this, (MediaInterface.__proto__ || Object.getPrototypeOf(MediaInterface)).call(this));

      _this._injectModel('MediaModel');
      return _this;
    }

    _createClass(MediaInterface, [{
      key: '_getImgPath',
      value: function _getImgPath(record) {
        return this.MediaModel.getImgPath(record);
      }
    }, {
      key: '_getImgUrl',
      value: function _getImgUrl(path, width, height) {
        return this.MediaModel.getImgUrl(path, width, height);
      }
    }, {
      key: '_getImageMediaList',
      value: function _getImageMediaList(rootRecord) {
        return this.MediaModel.getImageMediaList(rootRecord);
      }
    }]);

    return MediaInterface;
  }(subclass);
};

/***/ }),

/***/ "./public/elements/pages/record/app-copy-cite.html":
/*!*********************************************************!*\
  !*** ./public/elements/pages/record/app-copy-cite.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  :host {\n    display: block;\n  }\n  [hidden] {\n    display:none !important;\n  }\n  textarea {\n    width: 100%;\n    font-size: var(--font-size);\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    width: 85px;\n    text-transform: uppercase;\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-heavy);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n  }\n\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  \n  .copyButton[active] span {\n    display: none;\n  }\n\n  #citeText {\n    padding-bottom: 10px;\n    overflow: auto;\n  }\n\n  .buttons {\n    display: flex;\n  }\n</style>\n\n<div hidden$=\"[[copying]]\" id=\"citeText\"></div>\n<textarea hidden$=\"[[!copying]]\" id=\"copyArea\"></textarea>\n\n<div class=\"buttons\">\n  <div>\n    <slot></slot>\n  </div>\n  <button active$=\"[[copying]]\" on-click=\"_onCopyClicked\" class=\"copyButton\">\n    <iron-icon icon=\"content-copy\" id=\"icon\"></iron-icon>\n    <span>Copy</span>\n  </button>\n</div>\n";

/***/ }),

/***/ "./public/elements/pages/record/app-copy-cite.js":
/*!*******************************************************!*\
  !*** ./public/elements/pages/record/app-copy-cite.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");

var _appCopyCite = __webpack_require__(/*! ./app-copy-cite.html */ "./public/elements/pages/record/app-copy-cite.html");

var _appCopyCite2 = _interopRequireDefault(_appCopyCite);

var _striptags = __webpack_require__(/*! striptags */ "./public/node_modules/striptags/src/striptags.js");

var _striptags2 = _interopRequireDefault(_striptags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppCopyCite = function (_PolymerElement) {
  _inherits(AppCopyCite, _PolymerElement);

  function AppCopyCite() {
    _classCallCheck(this, AppCopyCite);

    return _possibleConstructorReturn(this, (AppCopyCite.__proto__ || Object.getPrototypeOf(AppCopyCite)).apply(this, arguments));
  }

  _createClass(AppCopyCite, [{
    key: "_onTextUpdate",


    /**
     * @method _onTextUpdate
     * @description bound to 'text' property observer
     */
    value: function _onTextUpdate() {
      this.$.citeText.innerHTML = this.text || '';
      this.$.copyArea.value = (0, _striptags2.default)(this.text).trim();
    }

    /**
     * @method _onCopyClicked
     * @description bound to copy btn click event
     */

  }, {
    key: "_onCopyClicked",
    value: function _onCopyClicked() {
      var _this2 = this;

      // first set correct height
      this.$.copyArea.style.height = this.$.citeText.offsetHeight - 10 + 'px';
      this.$.copyArea.style.width = this.$.citeText.offsetWidth - 10 + 'px';

      this.copying = true;
      // this.$.copyArea.select();
      this.$.copyArea.focus();
      this.$.copyArea.setSelectionRange(0, 9999);
      document.execCommand("Copy");
      this.$.icon.icon = 'check';

      setTimeout(function () {
        _this2.$.icon.icon = 'content-copy';
        _this2.copying = false;
      }, 3000);
    }
  }], [{
    key: "template",
    get: function get() {
      var tag = document.createElement('template');
      tag.innerHTML = _appCopyCite2.default;
      return tag;
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        text: {
          type: String,
          value: '',
          observer: '_onTextUpdate'
        },
        copying: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return AppCopyCite;
}(_polymerElement.PolymerElement);

exports.default = AppCopyCite;


customElements.define('app-copy-cite', AppCopyCite);

/***/ }),

/***/ "./public/elements/pages/search/app-search-breadcrumb.html":
/*!*****************************************************************!*\
  !*** ./public/elements/pages/search/app-search-breadcrumb.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    color: var(--default-primary-color);\n    background-image: url('/images/header-colorbar.png');\n    background-size: cover;\n    background-position: left center;    \n  }\n\n  .layout {\n    padding: 0 15px;\n  }\n\n  .layout > div {\n    margin: 0 5px;\n  }\n\n  a,\n  iron-icon {\n    cursor: pointer;\n  }\n\n  a:focus {\n    outline-color: var(--default-primary-color);\n  }\n</style>\n\n<div class=\"layout\" hidden$=\"[[!selected]]\" id=\"layout\">\n  <a href=\"/search\" tabindex=\"0\">Search</a>\n  \n  <span hidden$=\"[[!collection]]\">&gt;</span>\n  <span hidden$=\"[[!collection]]\"><a on-click=\"_onCollectionClicked\" tabindex=\"0\">[[collection.name]]</a></span>\n\n  <span hidden$=\"[[!record]]\">&gt;</span>\n  <span hidden$=\"[[!record]]\">[[record.name]]</span>\n</div>";

/***/ }),

/***/ "./public/elements/pages/search/app-search-breadcrumb.js":
/*!***************************************************************!*\
  !*** ./public/elements/pages/search/app-search-breadcrumb.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");

var _appSearchBreadcrumb = __webpack_require__(/*! ./app-search-breadcrumb.html */ "./public/elements/pages/search/app-search-breadcrumb.html");

var _appSearchBreadcrumb2 = _interopRequireDefault(_appSearchBreadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppSearchBreadcrumb = function (_Mixin$with) {
  _inherits(AppSearchBreadcrumb, _Mixin$with);

  _createClass(AppSearchBreadcrumb, null, [{
    key: "properties",
    get: function get() {
      return {
        collection: {
          type: Object,
          value: null
        },
        record: {
          type: Object,
          value: null
        },
        name: {
          type: String,
          value: ''
        }
      };
    }
  }, {
    key: "template",
    get: function get() {
      var tag = document.createElement('template');
      tag.innerHTML = _appSearchBreadcrumb2.default;
      return tag;
    }
  }]);

  function AppSearchBreadcrumb() {
    _classCallCheck(this, AppSearchBreadcrumb);

    var _this = _possibleConstructorReturn(this, (AppSearchBreadcrumb.__proto__ || Object.getPrototypeOf(AppSearchBreadcrumb)).call(this));

    _this.active = true;
    _this._injectModel('AppStateModel', 'CollectionModel', 'RecordModel');
    return _this;
  }

  _createClass(AppSearchBreadcrumb, [{
    key: "ready",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _get(AppSearchBreadcrumb.prototype.__proto__ || Object.getPrototypeOf(AppSearchBreadcrumb.prototype), "ready", this).call(this);
                this.$.layout.style.width = window.innerWidth - 55 + 'px';
                window.addEventListener('resize', function () {
                  _this2.$.layout.style.width = window.innerWidth - 55 + 'px';
                });

                _context.t0 = this;
                _context.next = 6;
                return this.AppStateModel.get();

              case 6:
                _context.t1 = _context.sent;

                _context.t0._onAppStateUpdate.call(_context.t0, _context.t1);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function ready() {
        return _ref.apply(this, arguments);
      }

      return ready;
    }()

    /**
     * @method _onAppStateUpdate
     * @description listen to app state update events and if this is a record, set record collection
     * as the current collection
     */

  }, {
    key: "_onAppStateUpdate",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (e.lastLocation && e.lastLocation.page === 'search') {
                  this.lastSearch = e.lastLocation.pathname;
                } else {
                  this.lastSearch = null;
                }

                this.record = null;
                this.collection = null;

                if (e.location.page === 'search' && e.selectedCollection) {
                  this.collection = e.selectedCollection;
                }

                if (!(e.location.page === 'record')) {
                  _context2.next = 17;
                  break;
                }

                this.currentRecordId = e.location.pathname;

                _context2.next = 8;
                return this.RecordModel.get(this.currentRecordId);

              case 8:
                this.record = _context2.sent;

                this.record = this.record.payload;

                if (!this.record.collectionId) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 13;
                return this.CollectionModel.get(this.record.collectionId);

              case 13:
                this.collection = _context2.sent;
                _context2.next = 17;
                break;

              case 16:
                this.collection = null;

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _onAppStateUpdate(_x) {
        return _ref2.apply(this, arguments);
      }

      return _onAppStateUpdate;
    }()

    /**
     * @method _onSearchClicked
     * @description bound to search anchor tag click event.  nav to search
     */
    // _onSearchClicked(e) {
    //   if( e.type === 'keyup' && e.which !== 13 ) return;
    //   this._setWindowLocation(this.lastSearch || '/search');
    // }

    /**
     * @method _onCollectionClicked
     * @description bound to collection anchor tag click event.  start a collection query
     */

  }, {
    key: "_onCollectionClicked",
    value: function _onCollectionClicked(e) {
      if (e.type === 'keyup' && e.which !== 13) return;
      this.AppStateModel.setLocation(this.lastSearch || (this.collection ? this.collection['@id'] : '/search'));
    }

    /**
     * @method _onSelectedCollectionUpdate
     * @description CollectionInterface, fired when selected collection updates
     */
    // _onSelectedCollectionUpdate(e) {
    //   console.log(e);
    //   if( !e ) {
    //     if( !this.record ) {
    //       this.collection = null;
    //     }
    //     return;
    //   }

    //   if( this.collection && this.collection['@id'] === e['@id'] ) return;
    //   this.collection = e;
    //   this.record = null;
    // }

  }]);

  return AppSearchBreadcrumb;
}(Mixin(_polymerElement.PolymerElement).with(EventInterface));

customElements.define('app-search-breadcrumb', AppSearchBreadcrumb);

/***/ }),

/***/ "./public/elements/pages/search/app-search-header.html":
/*!*************************************************************!*\
  !*** ./public/elements/pages/search/app-search-header.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    background-color: var(--default-primary-color);\n    color: var(--inverse-text-color);\n    padding: 15px;\n  }\n\n  app-auth-header {\n    margin-left: 10px;\n  }\n  \n  fin-search-box {\n    display: inline-block;\n    width: 100%;\n    box-sizing: border-box;\n    max-width: 525px;\n  }\n\n  .layout {\n    display: flex;\n    align-items: center;\n  }\n  \n  h2 {\n    margin: 0;\n    white-space: nowrap;\n  }\n  h2 a {\n    color: var(--default-secondary-color);\n    text-decoration: none;\n  }\n  h2 a:visited {\n    color: var(--default-secondary-color);\n    text-decoration: none;\n  }\n\n  img {\n    height: 50px;\n  }\n\n  .logo, h2 {\n    padding-right: 20px;\n    display: none;\n  }\n\n  .filler {\n    flex: .25;\n    display: none;\n  }\n\n  .logo-sm {\n    margin-right: 10px;\n  }\n\n  iron-icon.search-icon {\n    color: var(--default-secondary-color);\n  }\n\n  @media( min-width: 700px ) {\n    .logo {\n      display: block;\n    }\n    .logo-sm {\n      display: none;\n    }\n  }\n\n  @media( min-width: 815px ) {\n    h2 {\n      display: block;\n    }\n  }\n\n  @media( min-width: 1100px ) {\n    .filler {\n      display: block;\n    }\n  }\n</style>\n\n<div class=\"layout\">\n  <a href=\"/\" class=\"logo\"><img border=\"0\" src=\"/images/ucd-lib-logo-white.png\" /></a>\n  <a href=\"/\" class=\"logo-sm\"><img border=\"0\" src=\"/images/ucd-lib-logo-white-sm.png\" /></a>\n  <h2><a href=\"/\">Digital Collections</a></h2>\n  <div class=\"filler\"></div>\n  <div style=\"flex:1; text-align:right\">\n    <fin-search-box \n      id=\"searchInput\" \n      on-search=\"_onSearch\" \n      on-browse=\"_onBrowse\"\n      placeholder=\"Search Keyword(s)\">\n      <iron-icon icon=\"fin-icons:search\" class=\"search-icon\" slot=\"button-content\"></iron-icon>\n    </fin-search-box>\n  </div>\n  <app-auth-header></app-auth-header>\n</div>\n\n";

/***/ }),

/***/ "./public/elements/pages/search/app-search-header.js":
/*!***********************************************************!*\
  !*** ./public/elements/pages/search/app-search-header.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");

var _appSearchHeader = __webpack_require__(/*! ./app-search-header.html */ "./public/elements/pages/search/app-search-header.html");

var _appSearchHeader2 = _interopRequireDefault(_appSearchHeader);

__webpack_require__(/*! ../../auth/app-auth-header */ "./public/elements/auth/app-auth-header.js");

__webpack_require__(/*! @ucd-lib/fin-search-box */ "./public/node_modules/@ucd-lib/fin-search-box/fin-search-box.js");

var _RecordInterface = __webpack_require__(/*! ../../interfaces/RecordInterface */ "./public/elements/interfaces/RecordInterface.js");

var _RecordInterface2 = _interopRequireDefault(_RecordInterface);

var _CollectionInterface = __webpack_require__(/*! ../../interfaces/CollectionInterface */ "./public/elements/interfaces/CollectionInterface.js");

var _CollectionInterface2 = _interopRequireDefault(_CollectionInterface);

var _AppStateInterface = __webpack_require__(/*! ../../interfaces/AppStateInterface */ "./public/elements/interfaces/AppStateInterface.js");

var _AppStateInterface2 = _interopRequireDefault(_AppStateInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppSearchHeader = function (_Mixin$with) {
  _inherits(AppSearchHeader, _Mixin$with);

  _createClass(AppSearchHeader, null, [{
    key: "properties",
    get: function get() {
      return {
        selectedCollection: {
          type: String,
          value: ''
        }
      };
    }
  }, {
    key: "template",
    get: function get() {
      var tag = document.createElement('template');
      tag.innerHTML = _appSearchHeader2.default;
      return tag;
    }
  }]);

  function AppSearchHeader() {
    _classCallCheck(this, AppSearchHeader);

    var _this = _possibleConstructorReturn(this, (AppSearchHeader.__proto__ || Object.getPrototypeOf(AppSearchHeader)).call(this));

    _this.active = true;
    return _this;
  }

  _createClass(AppSearchHeader, [{
    key: "ready",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _get(AppSearchHeader.prototype.__proto__ || Object.getPrototypeOf(AppSearchHeader.prototype), "ready", this).call(this);
                _context.t0 = this;
                _context.next = 4;
                return this.CollectionModel.overview();

              case 4:
                _context.t1 = _context.sent;

                _context.t0._setCollections.call(_context.t0, _context.t1);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function ready() {
        return _ref.apply(this, arguments);
      }

      return ready;
    }()

    /**
     * @method _setCollections
     * @description when the element is ready, the collection model is called 
     * for the collection list.  this renders is.
     * 
     * @param {Object} e 
     */

  }, {
    key: "_setCollections",
    value: function _setCollections(e) {
      var overview = e.payload;

      var browse = {};
      overview.forEach(function (item) {
        browse[item['@id']] = item.name;
      });

      this.$.searchInput.browse = browse;
    }

    /**
     * @method _onBrowse
     * @description bound to fin-search-box `browse` event.  Called when user
     * selects a specific collection to browse
     * 
     * @param {Object} e 
     */

  }, {
    key: "_onBrowse",
    value: function _onBrowse(e) {
      var id = e.detail;

      this.$.searchInput.browseValue = 'Browse';

      if (!id || id === 'Browse') {
        return this.RecordModel.setSearchLocation(this._getEmptySearchDocument());
      }

      this._setWindowLocation(id);
    }

    /**
     * @method _onSearch
     * @description bound to fin-search-box `search` event.  called when user
     * hits enter or clicked the search icon.  start a text search
     * 
     * @param {Object} e
     */

  }, {
    key: "_onSearch",
    value: function _onSearch(e) {
      var searchDoc = this._getCurrentSearchDocument();
      this._setPaging(searchDoc, 0);
      this._setTextFilter(searchDoc, e.detail);
      this.RecordModel.setSearchLocation(searchDoc);
    }

    /**
     * @method _onEsSearchUpdate
     * @description from RecordInterface, called when search state updates
     * 
     * @param {*} e 
     */

  }, {
    key: "_onRecordSearchUpdate",
    value: function _onRecordSearchUpdate(e) {
      try {
        this.$.searchInput.value = e.searchDocument.text || '';
      } catch (e) {
        this.$.searchInput.value = '';
      }
    }

    /**
     * @method _onSelectedCollectionUpdate
     * @description from CollectionInterface, called when a collection is selected.
     * This is done by setting a collection filter.
     * 
     * @param {Object} selected currently selected collection 
     */

  }, {
    key: "_onSelectedCollectionUpdate",
    value: function _onSelectedCollectionUpdate(selected) {
      this.selectedCollection = selected;
    }
  }]);

  return AppSearchHeader;
}(Mixin(_polymerElement.PolymerElement).with(EventInterface, _RecordInterface2.default, _CollectionInterface2.default, _AppStateInterface2.default));

customElements.define('app-search-header', AppSearchHeader);

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");

var _appTabs = __webpack_require__(/*! ./app-tabs.html */ "./public/elements/utils/app-tabs.html");

var _appTabs2 = _interopRequireDefault(_appTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppTabs = function (_PolymerElement) {
  _inherits(AppTabs, _PolymerElement);

  function AppTabs() {
    _classCallCheck(this, AppTabs);

    return _possibleConstructorReturn(this, (AppTabs.__proto__ || Object.getPrototypeOf(AppTabs)).apply(this, arguments));
  }

  _createClass(AppTabs, [{
    key: "_renderTabs",


    /**
     * @method _renderTabs
     * @description bound to 'tabs' property observer
     */
    value: function _renderTabs() {
      var _this2 = this;

      if (!this.tabs) return;

      if (!this.selected && this.tabs.length) {
        this.selected = this.tabs[0];
        return;
      }

      this.tabs.forEach(function (tab, index) {
        var selected = tab.value === _this2.selected;
        _this2.set("tabs." + index + ".selected", selected);
        _this2.set("tabs." + index + ".ariaSelected", selected + '');
        if (!tab.label) _this2.set("tabs." + index + ".label", tab.value);
      });
    }
  }, {
    key: "_onTabClicked",
    value: function _onTabClicked(e) {
      if (e.type === 'keyup' && e.which !== 13) return;
      this.selected = e.currentTarget.getAttribute('value');
    }
  }], [{
    key: "template",
    get: function get() {
      var tag = document.createElement('template');
      tag.innerHTML = _appTabs2.default;
      return tag;
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        role: {
          type: String,
          value: 'tablist',
          reflectToAttribute: true
        },
        selected: {
          type: String,
          value: '',
          notify: true,
          observer: '_renderTabs'
        },
        tabs: {
          type: Array,
          value: function value() {
            return [];
          },
          observer: '_renderTabs'
        }
      };
    }
  }]);

  return AppTabs;
}(_polymerElement.PolymerElement);

exports.default = AppTabs;


customElements.define('app-tabs', AppTabs);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvYXV0aC9hcHAtYXV0aC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2ludGVyZmFjZXMvTWVkaWFJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC9hcHAtY29weS1jaXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC9hcHAtY29weS1jaXRlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvYXBwLXNlYXJjaC1icmVhZGNydW1iLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9hcHAtc2VhcmNoLWJyZWFkY3J1bWIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3NlYXJjaC9hcHAtc2VhcmNoLWhlYWRlci5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvYXBwLXNlYXJjaC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL2FwcC10YWJzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL2FwcC10YWJzLmpzIl0sIm5hbWVzIjpbIkFwcEF1dGhIZWFkZXIiLCJhY3RpdmUiLCJlIiwic3RhdGUiLCJzdHlsZSIsImRpc3BsYXkiLCJNaXhpbiIsIndpdGgiLCJFdmVudEludGVyZmFjZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9pbmplY3RNb2RlbCIsInJlY29yZCIsIk1lZGlhTW9kZWwiLCJnZXRJbWdQYXRoIiwicGF0aCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0SW1nVXJsIiwicm9vdFJlY29yZCIsImdldEltYWdlTWVkaWFMaXN0Iiwic3ViY2xhc3MiLCJBcHBDb3B5Q2l0ZSIsIiQiLCJjaXRlVGV4dCIsImlubmVySFRNTCIsInRleHQiLCJjb3B5QXJlYSIsInZhbHVlIiwidHJpbSIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwiY29weWluZyIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJkb2N1bWVudCIsImV4ZWNDb21tYW5kIiwiaWNvbiIsInNldFRpbWVvdXQiLCJ0YWciLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsIlN0cmluZyIsIm9ic2VydmVyIiwiQm9vbGVhbiIsIkFwcFNlYXJjaEJyZWFkY3J1bWIiLCJjb2xsZWN0aW9uIiwiT2JqZWN0IiwibmFtZSIsImxheW91dCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiQXBwU3RhdGVNb2RlbCIsImdldCIsIl9vbkFwcFN0YXRlVXBkYXRlIiwibGFzdExvY2F0aW9uIiwicGFnZSIsImxhc3RTZWFyY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwic2VsZWN0ZWRDb2xsZWN0aW9uIiwiY3VycmVudFJlY29yZElkIiwiUmVjb3JkTW9kZWwiLCJwYXlsb2FkIiwiY29sbGVjdGlvbklkIiwiQ29sbGVjdGlvbk1vZGVsIiwid2hpY2giLCJzZXRMb2NhdGlvbiIsIkFwcFNlYXJjaEhlYWRlciIsIm92ZXJ2aWV3IiwiX3NldENvbGxlY3Rpb25zIiwiYnJvd3NlIiwiZm9yRWFjaCIsIml0ZW0iLCJzZWFyY2hJbnB1dCIsImlkIiwiZGV0YWlsIiwiYnJvd3NlVmFsdWUiLCJzZXRTZWFyY2hMb2NhdGlvbiIsIl9nZXRFbXB0eVNlYXJjaERvY3VtZW50IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwic2VhcmNoRG9jIiwiX2dldEN1cnJlbnRTZWFyY2hEb2N1bWVudCIsIl9zZXRQYWdpbmciLCJfc2V0VGV4dEZpbHRlciIsInNlYXJjaERvY3VtZW50Iiwic2VsZWN0ZWQiLCJBcHBUYWJzIiwidGFicyIsImxlbmd0aCIsInRhYiIsImluZGV4Iiwic2V0IiwibGFiZWwiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwicm9sZSIsInJlZmxlY3RUb0F0dHJpYnV0ZSIsIm5vdGlmeSIsIkFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGE7Ozs7O3dCQUdrQjtBQUNwQjtBQUNEOzs7QUFFRCwyQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLE1BQUwsR0FBYyxJQUFkO0FBRlk7QUFHYjs7QUFFRDs7Ozs7Ozs7a0NBSWNDLEMsRUFBRztBQUNmLFVBQUlBLEVBQUVDLEtBQUYsS0FBWSxVQUFoQixFQUE0QixLQUFLQyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsT0FBckIsQ0FBNUIsS0FDSyxLQUFLRCxLQUFMLENBQVdDLE9BQVgsR0FBcUIsTUFBckI7QUFDTjs7OztFQW5CeUJDLHNDQUNyQkMsSUFEcUIsQ0FDaEJDLGNBRGdCLDBCOztBQXNCNUJDLGVBQWVDLE1BQWYsQ0FBc0IsaUJBQXRCLEVBQXlDVixhQUF6QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBVyxPQUFPQyxPQUFQLEdBQWlCO0FBQUE7QUFBQTs7QUFFYiw4QkFBYztBQUFBOztBQUFBOztBQUVaLFlBQUtDLFlBQUwsQ0FBa0IsWUFBbEI7QUFGWTtBQUdiOztBQUxZO0FBQUE7QUFBQSxrQ0FPREMsTUFQQyxFQU9PO0FBQ2xCLGVBQU8sS0FBS0MsVUFBTCxDQUFnQkMsVUFBaEIsQ0FBMkJGLE1BQTNCLENBQVA7QUFDRDtBQVRZO0FBQUE7QUFBQSxpQ0FXRkcsSUFYRSxFQVdJQyxLQVhKLEVBV1dDLE1BWFgsRUFXbUI7QUFDOUIsZUFBTyxLQUFLSixVQUFMLENBQWdCSyxTQUFoQixDQUEwQkgsSUFBMUIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxNQUF2QyxDQUFQO0FBQ0Q7QUFiWTtBQUFBO0FBQUEseUNBZU1FLFVBZk4sRUFla0I7QUFDN0IsZUFBTyxLQUFLTixVQUFMLENBQWdCTyxpQkFBaEIsQ0FBa0NELFVBQWxDLENBQVA7QUFD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LElBQUYsS0FBVyxPQUFYLElBQXNCekMsRUFBRW1FLEtBQUYsS0FBWSxFQUF0QyxFQUEyQztBQUMzQyxXQUFLb0IsUUFBTCxHQUFnQnZGLEVBQUUrRixhQUFGLENBQWdCQyxZQUFoQixDQUE2QixPQUE3QixDQUFoQjtBQUNEOzs7d0JBbERxQjtBQUNwQixVQUFJekQsTUFBTUosU0FBU0ssYUFBVCxDQUF1QixVQUF2QixDQUFWO0FBQ0FELFVBQUlkLFNBQUo7QUFDQSxhQUFPYyxHQUFQO0FBQ0Q7Ozt3QkFFdUI7QUFDdEIsYUFBTztBQUNMMEQsY0FBTztBQUNMeEQsZ0JBQU9DLE1BREY7QUFFTGQsaUJBQVEsU0FGSDtBQUdMc0UsOEJBQXFCO0FBSGhCLFNBREY7QUFNTFgsa0JBQVc7QUFDVDlDLGdCQUFPQyxNQURFO0FBRVRkLGlCQUFRLEVBRkM7QUFHVHVFLGtCQUFTLElBSEE7QUFJVHhELG9CQUFXO0FBSkYsU0FOTjtBQVlMOEMsY0FBTztBQUNMaEQsZ0JBQU8yRCxLQURGO0FBRUx4RSxpQkFBUTtBQUFBLG1CQUFNLEVBQU47QUFBQSxXQUZIO0FBR0xlLG9CQUFXO0FBSE47QUFaRixPQUFQO0FBa0JEOzs7Ozs7a0JBM0JrQjZDLE87OztBQXdEckJqRixlQUFlQyxNQUFmLENBQXNCLFVBQXRCLEVBQWtDZ0YsT0FBbEMsRSIsImZpbGUiOiJwYWdlLXJlY29yZH5wYWdlLXNlYXJjaC5pZS1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BvbHltZXJFbGVtZW50LCBodG1sfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IEF1dGhJbnRlcmZhY2UgZnJvbSBcIi4uL2ludGVyZmFjZXMvQXV0aEludGVyZmFjZVwiXG5cbmNsYXNzIEFwcEF1dGhIZWFkZXIgZXh0ZW5kcyBNaXhpbihQb2x5bWVyRWxlbWVudClcbiAgICAgIC53aXRoKEV2ZW50SW50ZXJmYWNlLCBBdXRoSW50ZXJmYWNlKSB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGA8aXJvbi1pY29uIGljb249XCJmaW4taWNvbnM6YWNjb3VudFwiIHN0eWxlPVwid2lkdGg6IDQwcHg7IGhlaWdodDo0MHB4XCI+PC9pcm9uLWljb24+YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQXV0aFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBBdXRoSW50ZXJmYWNlLiBjYWxsZWQgd2hlbmV2ZXIgYXV0aCBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBfb25BdXRoVXBkYXRlKGUpIHtcbiAgICBpZiggZS5zdGF0ZSA9PT0gJ2xvZ2dlZEluJykgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBlbHNlIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1hdXRoLWhlYWRlcicsIEFwcEF1dGhIZWFkZXIpOyIsIm1vZHVsZS5leHBvcnRzID0gc3ViY2xhc3MgPT4gXG4gIGNsYXNzIE1lZGlhSW50ZXJmYWNlIGV4dGVuZHMgc3ViY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2luamVjdE1vZGVsKCdNZWRpYU1vZGVsJyk7XG4gICAgfVxuXG4gICAgX2dldEltZ1BhdGgocmVjb3JkKSB7XG4gICAgICByZXR1cm4gdGhpcy5NZWRpYU1vZGVsLmdldEltZ1BhdGgocmVjb3JkKTtcbiAgICB9XG5cbiAgICBfZ2V0SW1nVXJsKHBhdGgsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHJldHVybiB0aGlzLk1lZGlhTW9kZWwuZ2V0SW1nVXJsKHBhdGgsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIF9nZXRJbWFnZU1lZGlhTGlzdChyb290UmVjb3JkKSB7XG4gICAgICByZXR1cm4gdGhpcy5NZWRpYU1vZGVsLmdldEltYWdlTWVkaWFMaXN0KHJvb3RSZWNvcmQpO1xuICAgIH1cblxuICB9IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBbaGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgfVxcblxcbiAgLmNvcHlCdXR0b24ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIHdpZHRoOiA4NXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1oZWF2eSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmNvcHlCdXR0b25bYWN0aXZlXSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG4gIFxcbiAgLmNvcHlCdXR0b25bYWN0aXZlXSBzcGFuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNjaXRlVGV4dCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG5cXG4gIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgaGlkZGVuJD1cXFwiW1tjb3B5aW5nXV1cXFwiIGlkPVxcXCJjaXRlVGV4dFxcXCI+PC9kaXY+XFxuPHRleHRhcmVhIGhpZGRlbiQ9XFxcIltbIWNvcHlpbmddXVxcXCIgaWQ9XFxcImNvcHlBcmVhXFxcIj48L3RleHRhcmVhPlxcblxcbjxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcbiAgPGRpdj5cXG4gICAgPHNsb3Q+PC9zbG90PlxcbiAgPC9kaXY+XFxuICA8YnV0dG9uIGFjdGl2ZSQ9XFxcIltbY29weWluZ11dXFxcIiBvbi1jbGljaz1cXFwiX29uQ29weUNsaWNrZWRcXFwiIGNsYXNzPVxcXCJjb3B5QnV0dG9uXFxcIj5cXG4gICAgPGlyb24taWNvbiBpY29uPVxcXCJjb250ZW50LWNvcHlcXFwiIGlkPVxcXCJpY29uXFxcIj48L2lyb24taWNvbj5cXG4gICAgPHNwYW4+Q29weTwvc3Bhbj5cXG4gIDwvYnV0dG9uPlxcbjwvZGl2PlxcblwiOyIsImltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLWNvcHktY2l0ZS5odG1sXCJcbmltcG9ydCBzdHJpcHRhZ3MgZnJvbSBcInN0cmlwdGFnc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvcHlDaXRlIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJycsXG4gICAgICAgIG9ic2VydmVyIDogJ19vblRleHRVcGRhdGUnXG4gICAgICB9LFxuICAgICAgY29weWluZyA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25UZXh0VXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byAndGV4dCcgcHJvcGVydHkgb2JzZXJ2ZXJcbiAgICovXG4gIF9vblRleHRVcGRhdGUoKSB7XG4gICAgdGhpcy4kLmNpdGVUZXh0LmlubmVySFRNTCA9IHRoaXMudGV4dCB8fCAnJztcbiAgICB0aGlzLiQuY29weUFyZWEudmFsdWUgPSBzdHJpcHRhZ3ModGhpcy50ZXh0KS50cmltKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Db3B5Q2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gY29weSBidG4gY2xpY2sgZXZlbnRcbiAgICovXG4gIF9vbkNvcHlDbGlja2VkKCkge1xuICAgIC8vIGZpcnN0IHNldCBjb3JyZWN0IGhlaWdodFxuICAgIHRoaXMuJC5jb3B5QXJlYS5zdHlsZS5oZWlnaHQgPSAodGhpcy4kLmNpdGVUZXh0Lm9mZnNldEhlaWdodC0xMCkrJ3B4JztcbiAgICB0aGlzLiQuY29weUFyZWEuc3R5bGUud2lkdGggPSAodGhpcy4kLmNpdGVUZXh0Lm9mZnNldFdpZHRoLTEwKSsncHgnO1xuICBcbiAgICB0aGlzLmNvcHlpbmcgPSB0cnVlO1xuICAgIC8vIHRoaXMuJC5jb3B5QXJlYS5zZWxlY3QoKTtcbiAgICB0aGlzLiQuY29weUFyZWEuZm9jdXMoKTtcbiAgICB0aGlzLiQuY29weUFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OSk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDb3B5XCIpO1xuICAgIHRoaXMuJC5pY29uLmljb24gPSAnY2hlY2snO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiQuaWNvbi5pY29uID0gJ2NvbnRlbnQtY29weSc7XG4gICAgICB0aGlzLmNvcHlpbmcgPSBmYWxzZTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWNvcHktY2l0ZScsIEFwcENvcHlDaXRlKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlIGluY2x1ZGU9XFxcInNoYXJlZC1zdHlsZXNcXFwiPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9oZWFkZXItY29sb3JiYXIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyOyAgICBcXG4gIH1cXG5cXG4gIC5sYXlvdXQge1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICB9XFxuXFxuICAubGF5b3V0ID4gZGl2IHtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG4gIH1cXG5cXG4gIGEsXFxuICBpcm9uLWljb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICBhOmZvY3VzIHtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgY2xhc3M9XFxcImxheW91dFxcXCIgaGlkZGVuJD1cXFwiW1shc2VsZWN0ZWRdXVxcXCIgaWQ9XFxcImxheW91dFxcXCI+XFxuICA8YSBocmVmPVxcXCIvc2VhcmNoXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+U2VhcmNoPC9hPlxcbiAgXFxuICA8c3BhbiBoaWRkZW4kPVxcXCJbWyFjb2xsZWN0aW9uXV1cXFwiPiZndDs8L3NwYW4+XFxuICA8c3BhbiBoaWRkZW4kPVxcXCJbWyFjb2xsZWN0aW9uXV1cXFwiPjxhIG9uLWNsaWNrPVxcXCJfb25Db2xsZWN0aW9uQ2xpY2tlZFxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPltbY29sbGVjdGlvbi5uYW1lXV08L2E+PC9zcGFuPlxcblxcbiAgPHNwYW4gaGlkZGVuJD1cXFwiW1shcmVjb3JkXV1cXFwiPiZndDs8L3NwYW4+XFxuICA8c3BhbiBoaWRkZW4kPVxcXCJbWyFyZWNvcmRdXVxcXCI+W1tyZWNvcmQubmFtZV1dPC9zcGFuPlxcbjwvZGl2PlwiOyIsImltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLXNlYXJjaC1icmVhZGNydW1iLmh0bWxcIlxuXG5jbGFzcyBBcHBTZWFyY2hCcmVhZGNydW1iIGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gICAgICAgIC53aXRoKEV2ZW50SW50ZXJmYWNlKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xsZWN0aW9uIDoge1xuICAgICAgICB0eXBlIDogT2JqZWN0LFxuICAgICAgICB2YWx1ZSA6IG51bGxcbiAgICAgIH0sXG4gICAgICByZWNvcmQgOiB7XG4gICAgICAgIHR5cGUgOiBPYmplY3QsXG4gICAgICAgIHZhbHVlIDogbnVsbFxuICAgICAgfSxcbiAgICAgIG5hbWUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnLCAnQ29sbGVjdGlvbk1vZGVsJywgJ1JlY29yZE1vZGVsJyk7XG4gIH1cblxuICBhc3luYyByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuJC5sYXlvdXQuc3R5bGUud2lkdGggPSAod2luZG93LmlubmVyV2lkdGgtNTUpKydweCc7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMuJC5sYXlvdXQuc3R5bGUud2lkdGggPSAod2luZG93LmlubmVyV2lkdGgtNTUpKydweCc7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9vbkFwcFN0YXRlVXBkYXRlKGF3YWl0IHRoaXMuQXBwU3RhdGVNb2RlbC5nZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25BcHBTdGF0ZVVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gbGlzdGVuIHRvIGFwcCBzdGF0ZSB1cGRhdGUgZXZlbnRzIGFuZCBpZiB0aGlzIGlzIGEgcmVjb3JkLCBzZXQgcmVjb3JkIGNvbGxlY3Rpb25cbiAgICogYXMgdGhlIGN1cnJlbnQgY29sbGVjdGlvblxuICAgKi9cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoZSkge1xuICAgIGlmKCBlLmxhc3RMb2NhdGlvbiAmJiBlLmxhc3RMb2NhdGlvbi5wYWdlID09PSAnc2VhcmNoJyApIHtcbiAgICAgIHRoaXMubGFzdFNlYXJjaCA9IGUubGFzdExvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhc3RTZWFyY2ggPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMucmVjb3JkID0gbnVsbDtcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSAgbnVsbDtcblxuICAgIGlmKCBlLmxvY2F0aW9uLnBhZ2UgPT09ICdzZWFyY2gnICYmIGUuc2VsZWN0ZWRDb2xsZWN0aW9uICkge1xuICAgICAgdGhpcy5jb2xsZWN0aW9uID0gZS5zZWxlY3RlZENvbGxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYoIGUubG9jYXRpb24ucGFnZSA9PT0gJ3JlY29yZCcgKSB7XG4gICAgICB0aGlzLmN1cnJlbnRSZWNvcmRJZCA9IGUubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgIHRoaXMucmVjb3JkID0gYXdhaXQgdGhpcy5SZWNvcmRNb2RlbC5nZXQodGhpcy5jdXJyZW50UmVjb3JkSWQpO1xuICAgICAgdGhpcy5yZWNvcmQgPSB0aGlzLnJlY29yZC5wYXlsb2FkO1xuXG4gICAgICBpZiggdGhpcy5yZWNvcmQuY29sbGVjdGlvbklkICkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5nZXQodGhpcy5yZWNvcmQuY29sbGVjdGlvbklkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VhcmNoQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gc2VhcmNoIGFuY2hvciB0YWcgY2xpY2sgZXZlbnQuICBuYXYgdG8gc2VhcmNoXG4gICAqL1xuICAvLyBfb25TZWFyY2hDbGlja2VkKGUpIHtcbiAgLy8gICBpZiggZS50eXBlID09PSAna2V5dXAnICYmIGUud2hpY2ggIT09IDEzICkgcmV0dXJuO1xuICAvLyAgIHRoaXMuX3NldFdpbmRvd0xvY2F0aW9uKHRoaXMubGFzdFNlYXJjaCB8fCAnL3NlYXJjaCcpO1xuICAvLyB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ29sbGVjdGlvbkNsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGNvbGxlY3Rpb24gYW5jaG9yIHRhZyBjbGljayBldmVudC4gIHN0YXJ0IGEgY29sbGVjdGlvbiBxdWVyeVxuICAgKi9cbiAgX29uQ29sbGVjdGlvbkNsaWNrZWQoZSkge1xuICAgIGlmKCBlLnR5cGUgPT09ICdrZXl1cCcgJiYgZS53aGljaCAhPT0gMTMgKSByZXR1cm47XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKHRoaXMubGFzdFNlYXJjaCB8fCAodGhpcy5jb2xsZWN0aW9uID8gdGhpcy5jb2xsZWN0aW9uWydAaWQnXSA6ICcvc2VhcmNoJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VsZWN0ZWRDb2xsZWN0aW9uVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBDb2xsZWN0aW9uSW50ZXJmYWNlLCBmaXJlZCB3aGVuIHNlbGVjdGVkIGNvbGxlY3Rpb24gdXBkYXRlc1xuICAgKi9cbiAgLy8gX29uU2VsZWN0ZWRDb2xsZWN0aW9uVXBkYXRlKGUpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhlKTtcbiAgLy8gICBpZiggIWUgKSB7XG4gIC8vICAgICBpZiggIXRoaXMucmVjb3JkICkge1xuICAvLyAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBudWxsO1xuICAvLyAgICAgfVxuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cblxuICAvLyAgIGlmKCB0aGlzLmNvbGxlY3Rpb24gJiYgdGhpcy5jb2xsZWN0aW9uWydAaWQnXSA9PT0gZVsnQGlkJ10gKSByZXR1cm47XG4gIC8vICAgdGhpcy5jb2xsZWN0aW9uID0gZTtcbiAgLy8gICB0aGlzLnJlY29yZCA9IG51bGw7XG4gIC8vIH1cblxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtc2VhcmNoLWJyZWFkY3J1bWInLCBBcHBTZWFyY2hCcmVhZGNydW1iKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlIGluY2x1ZGU9XFxcInNoYXJlZC1zdHlsZXNcXFwiPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWludmVyc2UtdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuXFxuICBhcHAtYXV0aC1oZWFkZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIH1cXG4gIFxcbiAgZmluLXNlYXJjaC1ib3gge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXgtd2lkdGg6IDUyNXB4O1xcbiAgfVxcblxcbiAgLmxheW91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIGgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgfVxcbiAgaDIgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG4gIGgyIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gIH1cXG5cXG4gIC5sb2dvLCBoMiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuZmlsbGVyIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmxvZ28tc20ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuXFxuICBpcm9uLWljb24uc2VhcmNoLWljb24ge1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgfVxcblxcbiAgQG1lZGlhKCBtaW4td2lkdGg6IDcwMHB4ICkge1xcbiAgICAubG9nbyB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgLmxvZ28tc20ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSggbWluLXdpZHRoOiA4MTVweCApIHtcXG4gICAgaDIge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEoIG1pbi13aWR0aDogMTEwMHB4ICkge1xcbiAgICAuZmlsbGVyIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBjbGFzcz1cXFwibGF5b3V0XFxcIj5cXG4gIDxhIGhyZWY9XFxcIi9cXFwiIGNsYXNzPVxcXCJsb2dvXFxcIj48aW1nIGJvcmRlcj1cXFwiMFxcXCIgc3JjPVxcXCIvaW1hZ2VzL3VjZC1saWItbG9nby13aGl0ZS5wbmdcXFwiIC8+PC9hPlxcbiAgPGEgaHJlZj1cXFwiL1xcXCIgY2xhc3M9XFxcImxvZ28tc21cXFwiPjxpbWcgYm9yZGVyPVxcXCIwXFxcIiBzcmM9XFxcIi9pbWFnZXMvdWNkLWxpYi1sb2dvLXdoaXRlLXNtLnBuZ1xcXCIgLz48L2E+XFxuICA8aDI+PGEgaHJlZj1cXFwiL1xcXCI+RGlnaXRhbCBDb2xsZWN0aW9uczwvYT48L2gyPlxcbiAgPGRpdiBjbGFzcz1cXFwiZmlsbGVyXFxcIj48L2Rpdj5cXG4gIDxkaXYgc3R5bGU9XFxcImZsZXg6MTsgdGV4dC1hbGlnbjpyaWdodFxcXCI+XFxuICAgIDxmaW4tc2VhcmNoLWJveCBcXG4gICAgICBpZD1cXFwic2VhcmNoSW5wdXRcXFwiIFxcbiAgICAgIG9uLXNlYXJjaD1cXFwiX29uU2VhcmNoXFxcIiBcXG4gICAgICBvbi1icm93c2U9XFxcIl9vbkJyb3dzZVxcXCJcXG4gICAgICBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoIEtleXdvcmQocylcXFwiPlxcbiAgICAgIDxpcm9uLWljb24gaWNvbj1cXFwiZmluLWljb25zOnNlYXJjaFxcXCIgY2xhc3M9XFxcInNlYXJjaC1pY29uXFxcIiBzbG90PVxcXCJidXR0b24tY29udGVudFxcXCI+PC9pcm9uLWljb24+XFxuICAgIDwvZmluLXNlYXJjaC1ib3g+XFxuICA8L2Rpdj5cXG4gIDxhcHAtYXV0aC1oZWFkZXI+PC9hcHAtYXV0aC1oZWFkZXI+XFxuPC9kaXY+XFxuXFxuXCI7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtc2VhcmNoLWhlYWRlci5odG1sXCJcblxuaW1wb3J0IFwiLi4vLi4vYXV0aC9hcHAtYXV0aC1oZWFkZXJcIjtcbmltcG9ydCBcIkB1Y2QtbGliL2Zpbi1zZWFyY2gtYm94XCJcblxuaW1wb3J0IFJlY29yZEludGVyZmFjZSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL1JlY29yZEludGVyZmFjZSdcbmltcG9ydCBDb2xsZWN0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvQ29sbGVjdGlvbkludGVyZmFjZSdcbmltcG9ydCBBcHBTdGF0ZUludGVyZmFjZSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0FwcFN0YXRlSW50ZXJmYWNlJ1xuXG5jbGFzcyBBcHBTZWFyY2hIZWFkZXIgZXh0ZW5kcyBNaXhpbihQb2x5bWVyRWxlbWVudClcbiAgICAgIC53aXRoKEV2ZW50SW50ZXJmYWNlLCBSZWNvcmRJbnRlcmZhY2UsIENvbGxlY3Rpb25JbnRlcmZhY2UsIEFwcFN0YXRlSW50ZXJmYWNlKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZENvbGxlY3Rpb24gOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBhc3luYyByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX3NldENvbGxlY3Rpb25zKGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLm92ZXJ2aWV3KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3NldENvbGxlY3Rpb25zXG4gICAqIEBkZXNjcmlwdGlvbiB3aGVuIHRoZSBlbGVtZW50IGlzIHJlYWR5LCB0aGUgY29sbGVjdGlvbiBtb2RlbCBpcyBjYWxsZWQgXG4gICAqIGZvciB0aGUgY29sbGVjdGlvbiBsaXN0LiAgdGhpcyByZW5kZXJzIGlzLlxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgXG4gICAqL1xuICBfc2V0Q29sbGVjdGlvbnMoZSkge1xuICAgIGxldCBvdmVydmlldyA9IGUucGF5bG9hZDtcblxuICAgIGxldCBicm93c2UgPSB7fTtcbiAgICBvdmVydmlldy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgYnJvd3NlW2l0ZW1bJ0BpZCddXSA9IGl0ZW0ubmFtZTtcbiAgICB9KTtcblxuICAgIHRoaXMuJC5zZWFyY2hJbnB1dC5icm93c2UgPSBicm93c2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Ccm93c2VcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGZpbi1zZWFyY2gtYm94IGBicm93c2VgIGV2ZW50LiAgQ2FsbGVkIHdoZW4gdXNlclxuICAgKiBzZWxlY3RzIGEgc3BlY2lmaWMgY29sbGVjdGlvbiB0byBicm93c2VcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIFxuICAgKi9cbiAgX29uQnJvd3NlKGUpIHtcbiAgICBsZXQgaWQgPSBlLmRldGFpbDtcblxuICAgIHRoaXMuJC5zZWFyY2hJbnB1dC5icm93c2VWYWx1ZSA9ICdCcm93c2UnO1xuXG4gICAgaWYoICFpZCB8fCBpZCA9PT0gJ0Jyb3dzZScgKSB7XG4gICAgICByZXR1cm4gdGhpcy5SZWNvcmRNb2RlbC5zZXRTZWFyY2hMb2NhdGlvbih0aGlzLl9nZXRFbXB0eVNlYXJjaERvY3VtZW50KCkpO1xuICAgIH1cblxuICAgIHRoaXMuX3NldFdpbmRvd0xvY2F0aW9uKGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlYXJjaFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gZmluLXNlYXJjaC1ib3ggYHNlYXJjaGAgZXZlbnQuICBjYWxsZWQgd2hlbiB1c2VyXG4gICAqIGhpdHMgZW50ZXIgb3IgY2xpY2tlZCB0aGUgc2VhcmNoIGljb24uICBzdGFydCBhIHRleHQgc2VhcmNoXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZVxuICAgKi9cbiAgX29uU2VhcmNoKGUpIHtcbiAgICBsZXQgc2VhcmNoRG9jID0gdGhpcy5fZ2V0Q3VycmVudFNlYXJjaERvY3VtZW50KCk7XG4gICAgdGhpcy5fc2V0UGFnaW5nKHNlYXJjaERvYywgMCk7XG4gICAgdGhpcy5fc2V0VGV4dEZpbHRlcihzZWFyY2hEb2MsIGUuZGV0YWlsKTtcbiAgICB0aGlzLlJlY29yZE1vZGVsLnNldFNlYXJjaExvY2F0aW9uKHNlYXJjaERvYyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Fc1NlYXJjaFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBSZWNvcmRJbnRlcmZhY2UsIGNhbGxlZCB3aGVuIHNlYXJjaCBzdGF0ZSB1cGRhdGVzXG4gICAqIFxuICAgKiBAcGFyYW0geyp9IGUgXG4gICAqL1xuICBfb25SZWNvcmRTZWFyY2hVcGRhdGUoZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLiQuc2VhcmNoSW5wdXQudmFsdWUgPSBlLnNlYXJjaERvY3VtZW50LnRleHQgfHwgJyc7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICB0aGlzLiQuc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25TZWxlY3RlZENvbGxlY3Rpb25VcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGZyb20gQ29sbGVjdGlvbkludGVyZmFjZSwgY2FsbGVkIHdoZW4gYSBjb2xsZWN0aW9uIGlzIHNlbGVjdGVkLlxuICAgKiBUaGlzIGlzIGRvbmUgYnkgc2V0dGluZyBhIGNvbGxlY3Rpb24gZmlsdGVyLlxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdGVkIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xsZWN0aW9uIFxuICAgKi9cbiAgX29uU2VsZWN0ZWRDb2xsZWN0aW9uVXBkYXRlKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5zZWxlY3RlZENvbGxlY3Rpb24gPSBzZWxlY3RlZDtcbiAgfVxuXG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1zZWFyY2gtaGVhZGVyJywgQXBwU2VhcmNoSGVhZGVyKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5IDogYmxvY2s7XFxuICB9XFxuICAubGF5b3V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC50YWIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHBhZGRpbmc6IDEycHggMCA5cHggMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgY29sb3I6IHZhcigtLWdyYXktdGV4dCk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ncmF5LXRleHQpO1xcbiAgfVxcbiAgLnRhYjpmb2N1cyB7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG4gIC50YWJbc2VsZWN0ZWRdIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxMnB4IDAgN3B4IDA7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJsYXlvdXRcXFwiPlxcbiAgPHRlbXBsYXRlIGlzPVxcXCJkb20tcmVwZWF0XFxcIiBpdGVtcz1cXFwiW1t0YWJzXV1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJcXFwiIFxcbiAgICAgIHJvbGU9XFxcInRhYlxcXCIgXFxuICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiIFxcbiAgICAgIGFyaWEtc2VsZWN0ZWQkPVxcXCJbW2l0ZW0uYXJpYVNlbGVjdGVkXV1cXFwiXFxuICAgICAgc2VsZWN0ZWQkPVxcXCJbW2l0ZW0uc2VsZWN0ZWRdXVxcXCJcXG4gICAgICBvbi1jbGljaz1cXFwiX29uVGFiQ2xpY2tlZFxcXCIgXFxuICAgICAgb24ta2V5dXA9XFxcIl9vblRhYkNsaWNrZWRcXFwiXFxuICAgICAgdmFsdWUkPVxcXCJbW2l0ZW0udmFsdWVdXVxcXCI+XFxuICAgICAgW1tpdGVtLmxhYmVsXV1cXG4gICAgPC9kaXY+XFxuICA8L3RlbXBsYXRlPlxcbjwvZGl2PlwiOyIsImltcG9ydCB7UG9seW1lckVsZW1lbnR9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLXRhYnMuaHRtbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFRhYnMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm9sZSA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAndGFibGlzdCcsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZSA6IHRydWVcbiAgICAgIH0sXG4gICAgICBzZWxlY3RlZCA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJyxcbiAgICAgICAgbm90aWZ5IDogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX3JlbmRlclRhYnMnXG4gICAgICB9LFxuICAgICAgdGFicyA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IFtdLFxuICAgICAgICBvYnNlcnZlciA6ICdfcmVuZGVyVGFicydcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVuZGVyVGFic1xuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gJ3RhYnMnIHByb3BlcnR5IG9ic2VydmVyXG4gICAqL1xuICBfcmVuZGVyVGFicygpIHtcbiAgICBpZiggIXRoaXMudGFicyApIHJldHVybjtcblxuICAgIGlmKCAhdGhpcy5zZWxlY3RlZCAmJiB0aGlzLnRhYnMubGVuZ3RoICkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudGFic1swXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHNlbGVjdGVkID0gKHRhYi52YWx1ZSA9PT0gdGhpcy5zZWxlY3RlZCk7XG4gICAgICB0aGlzLnNldChgdGFicy4ke2luZGV4fS5zZWxlY3RlZGAsIHNlbGVjdGVkKTtcbiAgICAgIHRoaXMuc2V0KGB0YWJzLiR7aW5kZXh9LmFyaWFTZWxlY3RlZGAsIHNlbGVjdGVkKycnKTtcbiAgICAgIGlmKCAhdGFiLmxhYmVsICkgdGhpcy5zZXQoYHRhYnMuJHtpbmRleH0ubGFiZWxgLCB0YWIudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uVGFiQ2xpY2tlZChlKSB7XG4gICAgaWYoIGUudHlwZSA9PT0gJ2tleXVwJyAmJiBlLndoaWNoICE9PSAxMyApIHJldHVybjtcbiAgICB0aGlzLnNlbGVjdGVkID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXRhYnMnLCBBcHBUYWJzKTsiXSwic291cmNlUm9vdCI6IiJ9