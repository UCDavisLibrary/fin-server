(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-about"],{

/***/ "./public/elements/pages/about/app-about.html":
/*!****************************************************!*\
  !*** ./public/elements/pages/about/app-about.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    position: relative;\n    background-color: var(--super-light-background-color);\n  }\n\n  .text-container {\n    margin: 0;\n    padding: 50px 10px 50px 10px;\n  }\n\n  h1, h2 {\n    color: var(--default-primary-color);\n  }\n\n  h2 {\n    margin: 15px 0 0 0px;\n  }\n\n  .yellow-line {\n    margin: 0 auto 0 0;\n    text-align: left;\n    width: 50px;\n    height: 4px;\n\n    border-color: var(--default-secondary-color);\n    background-color: var(--default-secondary-color);\n  }\n</style>\n\n<app-header-colorbar height=\"8\" flipped></app-header-colorbar>\n\n<div class=\"text-container\">  \n  <div>\n    <h1>About Digital Collections</h1>\n    <div class=\"yellow-line\">&nbsp;</div>\n  </div>\n  \n  <p>\n    The UC Davis Digital Collections is a locally developed digital repository that \n    was designed to store and manage the digital assets of UC Davis. These Digital \n    Collections are intended to increase access to previously undiscoverable digital \n    assets held by the University Library.\n  </p>\n  \n  <p>\n    Initially launched in 2018, the repository currently stores <span>[[count]]</span> digital assets. \n    Assests will be added continually as they are ready.\n  </p>\n  \n  <h2>Platform</h2>\n  \n  <p>\n    The Digital Asset Management System is built on the Fedora Linked Data Platform. \n    Custom microservices are implemented using a Fedora (API-X) extension method as a general \n    methodology. The User Interface was built with web-components anticipating a need for \n    UI flexibility as the digital collection grows. For a more detailed explanation of \n    the development, see our \n    <a href=\"https://github.com/UCDavisLibrary/fin-server/wiki/Fin-Server-Overview\">Fin Server Overview</a> or\n    <a href=\"https://github.com/UCDavisLibrary/fin-server/blob/master/docs/README.md\">Developer Documentation.</a>\n  </p>\n  \n  <h2>Contact</h2>\n  <div>\n    <ul>\n      <li><a href=\"mailto:eanebeker@ucdavis.edu\">Eric A Nebeker - Digital Assets Specialist</a></li>\n    </ul>\n  </div>\n  \n  <h2>Implementation Team</h2>\n  <div>\n    <ul>\n      <li><a href=\"https://www.library.ucdavis.edu/author/quinn-hart\">Quinn Hart - Team Lead</a></li>\n      <li><a href=\"https://www.library.ucdavis.edu/author/justin-merz\">Justin Merz - Lead Developer</a></li>\n      <li><a href=\"https://www.library.ucdavis.edu/author/kimmy-hescock\">Kimmy Hescock - User Experience Designer</a></li>\n    </ul>\n  </div>\n  \n  <h2>Members of the DAMS Steering Committee</h2>\n  <div>\n    <ul>\n      <li><a href=\"https://www.library.ucdavis.edu/author/peter-brantley\">Peter Brantley</a></li>\n      <li><a href=\"https://www.library.ucdavis.edu/author/vessela-ensberg\">Vessela Ensberg</a></li>\n      <li><a href=\"https://www.library.ucdavis.edu/author/bob-heyer-gray\">Robert Heyer-Gray</a></li>\n      <li><a href=\"https://www.library.ucdavis.edu/author/xiaoli-li\">Xiaoli Li</a></li>\n      <li><a href=\"https://www.library.ucdavis.edu/author/kevin-miller\">Kevin Miller</a></li>\n      <li><a href=\"https://www.library.ucdavis.edu/author/eric-nebeker\">Eric Nebeker</a></li>\n      <li><a href=\"https://www.library.ucdavis.edu/author/dale-snapp\">Dale Snapp</a></li>\n      <li><a href=\"https://www.library.ucdavis.edu/author/carl-stahmer\">Carl Stahmer</a></li>\n      <li><a href=\"https://www.library.ucdavis.edu/author/neil-weingarten\">Neil Weingarten</a></li>\n    </ul>\n  </div>\n  \n  <p>\n    The UC Davis Library DAMS was a project of the Library's \n    <a href=\"https://www.library.ucdavis.edu/service/online-strategy-2/\">Online Strategy team.</a>\n  </p>\n</div>\n<app-header-colorbar height=\"8\" flipped></app-header-colorbar>\n";

/***/ }),

/***/ "./public/elements/pages/about/app-about.js":
/*!**************************************************!*\
  !*** ./public/elements/pages/about/app-about.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_about_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-about.html */ "./public/elements/pages/about/app-about.html");
/* harmony import */ var _app_about_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_about_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_app_header_colorbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/app-header-colorbar */ "./public/elements/utils/app-header-colorbar.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/AppStateInterface */ "./public/elements/interfaces/AppStateInterface.js");
/* harmony import */ var _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_3__);







class AppAbout extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) 
      .with(EventInterface, _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_3___default.a) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_about_html__WEBPACK_IMPORTED_MODULE_1___default.a;
    return tag;
  }

  static get properties() {
    return {
    
    };
  }

  constructor() {
    super();
    this.active = true;
    this._injectModel('AppStateModel');
  }
  
}

customElements.define('app-about', AppAbout);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvYWJvdXQvYXBwLWFib3V0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2Fib3V0L2FwcC1hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw4REFBOEQscUJBQXFCLHlCQUF5Qiw0REFBNEQsS0FBSyx1QkFBdUIsZ0JBQWdCLG1DQUFtQyxLQUFLLGNBQWMsMENBQTBDLEtBQUssVUFBVSwyQkFBMkIsS0FBSyxvQkFBb0IseUJBQXlCLHVCQUF1QixrQkFBa0Isa0JBQWtCLHFEQUFxRCx1REFBdUQsS0FBSywwTUFBME0sNDhGOzs7Ozs7Ozs7Ozs7QUNBdHdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdFOztBQUV4QjtBQUNDOztBQUUwQjs7QUFFbkUsNkJBQTZCLCtFQUFjO0FBQzNDLDRCQUE0QixvRUFBaUI7O0FBRTdDO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2QyIsImZpbGUiOiJwYWdlLWFib3V0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGUgaW5jbHVkZT1cXFwic2hhcmVkLXN0eWxlc1xcXCI+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cGVyLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgfVxcblxcbiAgLnRleHQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHggNTBweCAxMHB4O1xcbiAgfVxcblxcbiAgaDEsIGgyIHtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuXFxuICBoMiB7XFxuICAgIG1hcmdpbjogMTVweCAwIDAgMHB4O1xcbiAgfVxcblxcbiAgLnllbGxvdy1saW5lIHtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48YXBwLWhlYWRlci1jb2xvcmJhciBoZWlnaHQ9XFxcIjhcXFwiIGZsaXBwZWQ+PC9hcHAtaGVhZGVyLWNvbG9yYmFyPlxcblxcbjxkaXYgY2xhc3M9XFxcInRleHQtY29udGFpbmVyXFxcIj4gIFxcbiAgPGRpdj5cXG4gICAgPGgxPkFib3V0IERpZ2l0YWwgQ29sbGVjdGlvbnM8L2gxPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ5ZWxsb3ctbGluZVxcXCI+Jm5ic3A7PC9kaXY+XFxuICA8L2Rpdj5cXG4gIFxcbiAgPHA+XFxuICAgIFRoZSBVQyBEYXZpcyBEaWdpdGFsIENvbGxlY3Rpb25zIGlzIGEgbG9jYWxseSBkZXZlbG9wZWQgZGlnaXRhbCByZXBvc2l0b3J5IHRoYXQgXFxuICAgIHdhcyBkZXNpZ25lZCB0byBzdG9yZSBhbmQgbWFuYWdlIHRoZSBkaWdpdGFsIGFzc2V0cyBvZiBVQyBEYXZpcy4gVGhlc2UgRGlnaXRhbCBcXG4gICAgQ29sbGVjdGlvbnMgYXJlIGludGVuZGVkIHRvIGluY3JlYXNlIGFjY2VzcyB0byBwcmV2aW91c2x5IHVuZGlzY292ZXJhYmxlIGRpZ2l0YWwgXFxuICAgIGFzc2V0cyBoZWxkIGJ5IHRoZSBVbml2ZXJzaXR5IExpYnJhcnkuXFxuICA8L3A+XFxuICBcXG4gIDxwPlxcbiAgICBJbml0aWFsbHkgbGF1bmNoZWQgaW4gMjAxOCwgdGhlIHJlcG9zaXRvcnkgY3VycmVudGx5IHN0b3JlcyA8c3Bhbj5bW2NvdW50XV08L3NwYW4+IGRpZ2l0YWwgYXNzZXRzLiBcXG4gICAgQXNzZXN0cyB3aWxsIGJlIGFkZGVkIGNvbnRpbnVhbGx5IGFzIHRoZXkgYXJlIHJlYWR5LlxcbiAgPC9wPlxcbiAgXFxuICA8aDI+UGxhdGZvcm08L2gyPlxcbiAgXFxuICA8cD5cXG4gICAgVGhlIERpZ2l0YWwgQXNzZXQgTWFuYWdlbWVudCBTeXN0ZW0gaXMgYnVpbHQgb24gdGhlIEZlZG9yYSBMaW5rZWQgRGF0YSBQbGF0Zm9ybS4gXFxuICAgIEN1c3RvbSBtaWNyb3NlcnZpY2VzIGFyZSBpbXBsZW1lbnRlZCB1c2luZyBhIEZlZG9yYSAoQVBJLVgpIGV4dGVuc2lvbiBtZXRob2QgYXMgYSBnZW5lcmFsIFxcbiAgICBtZXRob2RvbG9neS4gVGhlIFVzZXIgSW50ZXJmYWNlIHdhcyBidWlsdCB3aXRoIHdlYi1jb21wb25lbnRzIGFudGljaXBhdGluZyBhIG5lZWQgZm9yIFxcbiAgICBVSSBmbGV4aWJpbGl0eSBhcyB0aGUgZGlnaXRhbCBjb2xsZWN0aW9uIGdyb3dzLiBGb3IgYSBtb3JlIGRldGFpbGVkIGV4cGxhbmF0aW9uIG9mIFxcbiAgICB0aGUgZGV2ZWxvcG1lbnQsIHNlZSBvdXIgXFxuICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9VQ0RhdmlzTGlicmFyeS9maW4tc2VydmVyL3dpa2kvRmluLVNlcnZlci1PdmVydmlld1xcXCI+RmluIFNlcnZlciBPdmVydmlldzwvYT4gb3JcXG4gICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL1VDRGF2aXNMaWJyYXJ5L2Zpbi1zZXJ2ZXIvYmxvYi9tYXN0ZXIvZG9jcy9SRUFETUUubWRcXFwiPkRldmVsb3BlciBEb2N1bWVudGF0aW9uLjwvYT5cXG4gIDwvcD5cXG4gIFxcbiAgPGgyPkNvbnRhY3Q8L2gyPlxcbiAgPGRpdj5cXG4gICAgPHVsPlxcbiAgICAgIDxsaT48YSBocmVmPVxcXCJtYWlsdG86ZWFuZWJla2VyQHVjZGF2aXMuZWR1XFxcIj5FcmljIEEgTmViZWtlciAtIERpZ2l0YWwgQXNzZXRzIFNwZWNpYWxpc3Q8L2E+PC9saT5cXG4gICAgPC91bD5cXG4gIDwvZGl2PlxcbiAgXFxuICA8aDI+SW1wbGVtZW50YXRpb24gVGVhbTwvaDI+XFxuICA8ZGl2PlxcbiAgICA8dWw+XFxuICAgICAgPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL3F1aW5uLWhhcnRcXFwiPlF1aW5uIEhhcnQgLSBUZWFtIExlYWQ8L2E+PC9saT5cXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvanVzdGluLW1lcnpcXFwiPkp1c3RpbiBNZXJ6IC0gTGVhZCBEZXZlbG9wZXI8L2E+PC9saT5cXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3Iva2ltbXktaGVzY29ja1xcXCI+S2ltbXkgSGVzY29jayAtIFVzZXIgRXhwZXJpZW5jZSBEZXNpZ25lcjwvYT48L2xpPlxcbiAgICA8L3VsPlxcbiAgPC9kaXY+XFxuICBcXG4gIDxoMj5NZW1iZXJzIG9mIHRoZSBEQU1TIFN0ZWVyaW5nIENvbW1pdHRlZTwvaDI+XFxuICA8ZGl2PlxcbiAgICA8dWw+XFxuICAgICAgPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL3BldGVyLWJyYW50bGV5XFxcIj5QZXRlciBCcmFudGxleTwvYT48L2xpPlxcbiAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci92ZXNzZWxhLWVuc2JlcmdcXFwiPlZlc3NlbGEgRW5zYmVyZzwvYT48L2xpPlxcbiAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9ib2ItaGV5ZXItZ3JheVxcXCI+Um9iZXJ0IEhleWVyLUdyYXk8L2E+PC9saT5cXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IveGlhb2xpLWxpXFxcIj5YaWFvbGkgTGk8L2E+PC9saT5cXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3Iva2V2aW4tbWlsbGVyXFxcIj5LZXZpbiBNaWxsZXI8L2E+PC9saT5cXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvZXJpYy1uZWJla2VyXFxcIj5FcmljIE5lYmVrZXI8L2E+PC9saT5cXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvZGFsZS1zbmFwcFxcXCI+RGFsZSBTbmFwcDwvYT48L2xpPlxcbiAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9jYXJsLXN0YWhtZXJcXFwiPkNhcmwgU3RhaG1lcjwvYT48L2xpPlxcbiAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9uZWlsLXdlaW5nYXJ0ZW5cXFwiPk5laWwgV2VpbmdhcnRlbjwvYT48L2xpPlxcbiAgICA8L3VsPlxcbiAgPC9kaXY+XFxuICBcXG4gIDxwPlxcbiAgICBUaGUgVUMgRGF2aXMgTGlicmFyeSBEQU1TIHdhcyBhIHByb2plY3Qgb2YgdGhlIExpYnJhcnkncyBcXG4gICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9zZXJ2aWNlL29ubGluZS1zdHJhdGVneS0yL1xcXCI+T25saW5lIFN0cmF0ZWd5IHRlYW0uPC9hPlxcbiAgPC9wPlxcbjwvZGl2PlxcbjxhcHAtaGVhZGVyLWNvbG9yYmFyIGhlaWdodD1cXFwiOFxcXCIgZmxpcHBlZD48L2FwcC1oZWFkZXItY29sb3JiYXI+XFxuXCI7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtYWJvdXQuaHRtbFwiO1xuaW1wb3J0IFwiLi4vLi4vdXRpbHMvYXBwLWhlYWRlci1jb2xvcmJhclwiO1xuXG5pbXBvcnQgQXBwU3RhdGVJbnRlcmZhY2UgZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvQXBwU3RhdGVJbnRlcmZhY2VcIjtcblxuY2xhc3MgQXBwQWJvdXQgZXh0ZW5kcyBNaXhpbihQb2x5bWVyRWxlbWVudCkgXG4gICAgICAud2l0aChFdmVudEludGVyZmFjZSwgQXBwU3RhdGVJbnRlcmZhY2UpIHtcbiAgXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICBcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnKTtcbiAgfVxuICBcbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtYWJvdXQnLCBBcHBBYm91dCk7Il0sInNvdXJjZVJvb3QiOiIifQ==