(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-record"],{

/***/ "./public/elements/interfaces/MediaInterface.js":
/*!******************************************************!*\
  !*** ./public/elements/interfaces/MediaInterface.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ "./public/elements/pages/record/app-copy-cite.html":
/*!*********************************************************!*\
  !*** ./public/elements/pages/record/app-copy-cite.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  :host {\n    display: block;\n  }\n  [hidden] {\n    display:none !important;\n  }\n  textarea {\n    width: 100%;\n    font-size: var(--fs-p);\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    /* width: 85px; */\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    font-weight: var(--fw-bold);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n  }\n\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  \n  .copyButton[active] span {\n    display: none;\n  }\n\n  #citeText {\n    padding-bottom: 10px;\n    overflow: auto;\n    word-break: break-word;\n  }\n\n  .buttons {\n    display: flex;\n  }\n</style>\n\n<div hidden$=\"[[copying]]\" id=\"citeText\"></div>\n<textarea hidden$=\"[[!copying]]\" id=\"copyArea\"></textarea>\n\n<div class=\"buttons\">\n  <div>\n    <slot></slot>\n  </div>\n  <button active$=\"[[copying]]\" on-click=\"_onCopyClicked\" class=\"copyButton\">\n    <iron-icon icon=\"content-copy\" id=\"icon\"></iron-icon>\n    <span>Copy</span>\n  </button>\n</div>\n";

/***/ }),

/***/ "./public/elements/pages/record/app-copy-cite.js":
/*!*******************************************************!*\
  !*** ./public/elements/pages/record/app-copy-cite.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppCopyCite; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_copy_cite_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-copy-cite.html */ "./public/elements/pages/record/app-copy-cite.html");
/* harmony import */ var _app_copy_cite_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_copy_cite_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! striptags */ "./public/node_modules/striptags/src/striptags.js");
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(striptags__WEBPACK_IMPORTED_MODULE_2__);




class AppCopyCite extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_copy_cite_html__WEBPACK_IMPORTED_MODULE_1___default.a;
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppFsMediaDownload; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _app_fs_media_download_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-fs-media-download.tpl.js */ "./public/elements/pages/record/app-fs-media-download.tpl.js");
/* harmony import */ var _viewer_app_fs_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer/app-fs-viewer */ "./public/elements/pages/record/viewer/app-fs-viewer.js");





class AppFsMediaDownload extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
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
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<iron-icon icon='file-download'></iron-icon> Browse for file`;
    } else {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<iron-icon icon='file-download'></iron-icon> Download Archive`;
    }
  }
}

customElements.define('app-fs-media-download', AppFsMediaDownload);


/***/ }),

/***/ "./public/elements/pages/record/app-fs-media-download.tpl.js":
/*!*******************************************************************!*\
  !*** ./public/elements/pages/record/app-fs-media-download.tpl.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");


function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

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

/***/ "./public/elements/pages/record/app-media-download.html":
/*!**************************************************************!*\
  !*** ./public/elements/pages/record/app-media-download.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n  }\n\n  .info {\n    margin: 10px 0;\n    font-size: var(--fs-sm);\n  }\n  \n  a {\n    display: block;\n    padding: 8px;\n    color : var(--default-primary-color);\n    background-color : var(--default-secondary-color);\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    font-weight: var(--fw-bold);\n    text-decoration: none;\n    white-space: nowrap;\n    height: 24px;\n  }\n  \n  select {\n    margin-right: 15px;\n    padding: 5px 40px 5px 10px;\n    height: 40px;\n    border: none;\n    border-radius: 0;\n   \n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n\n    background-position: right 10px center;\n    background-size: 10px 6px;\n    background-repeat: no-repeat;\n    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCA2IiB3aWR0aD0iMTBweCIgaGVpZ2h0PSI2cHgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMDAyNjU1O308L3N0eWxlPjwvZGVmcz48Zz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMCAwIDEwIDAgNSA2IDAgMCIvPjwvZz48L3N2Zz4=');\n    /* TODO: Seems to cause problem w/width of select box being too small\n    @apply --fin-search-box-select-inverse;\n    */\n    background-color: var(--medium-background-color); \n    color: var(--default-primary-color);\n  }\n\n  select.plainText {\n    padding: 0;\n    border: 0;\n    background: transparent;\n    color: black;\n  }\n\n  button {\n    white-space: nowrap;\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    font-weight: var(--fw-bold);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n    padding: 8px;\n    line-height: calc(var(--fs-p) * 1.625);\n  }\n  \n  /* for IE */\n  select::-ms-expand {\n    display: none;\n  }\n  select option {\n    text-transform: uppercase;\n  }\n\n  .layout {\n    display:flex; \n    align-items: center;\n  }\n\n  .layout.btns > * {\n    width: 33%\n  }\n\n  .radio {\n    margin-bottom: 10px;\n  }\n</style>\n\n\n<div id=\"wrapper\">\n  <div class=\"layout\" hidden$=\"[[!hasMultipleDownloadMedia]]\">\n    <div class=\"radio\" style=\"margin-right: 40px\">\n      <input id=\"single\" type=\"radio\" name=\"set-size\" checked on-click=\"_toggleMultipleDownload\" /> \n      <label for=\"single\">Single</label>\n    </div>\n    <div class=\"radio\">\n      <input id=\"fullset\" type=\"radio\" name=\"set-size\" on-click=\"_toggleMultipleDownload\"/> \n      <label for=\"fullset\">Full Set ([[fullSetCount]] files)</label>\n    </div>\n  </div>\n</div>\n\n<div hidden$=\"[[fullSetSelected]]\">\n  <div class=\"layout btns\" style=\"margin-bottom: 5px;\" hidden$=\"[[!selectedMediaHasSources]]\">\n    <select id=\"downloadOptions\" on-change=\"_onChangeDownloadOptions\" ></select>\n    <select id=\"format\" on-change=\"_onFormatSelected\" hidden$=\"[[!showImageFormats]]\"></select>\n    <a id=\"downloadBtn\" href=\"[[href]]\" \n      on-click=\"_onDownloadClicked\" \n      download \n      target=\"_blank\" \n      rel=\"noopener\" \n      style=\"white-space: nowrap; text-align: center;\">\n        <span>\n          Download\n        </span>\n    </a>\n  </div>\n</div>\n\n<div hidden$=\"[[fullSetSelected]]\">\n  <div hidden$=\"[[selectedMediaHasSources]]\" >\n    <em>No downloadable items available</em>\n  </div>\n</div>\n\n\n<form id=\"downloadZip\" \naction$=\"/api/zip/[[zipName]]\" \nmethod=\"POST\" \ntarget=\"_blank\" \nhidden$=\"[[!fullSetSelected]]\">    \n  <input type=\"text\" hidden name=\"paths\" id=\"zipPaths\" style=\"display: none;\">\n  <button on-click=\"_onDownloadFullSetClicked\">\n    <iron-icon icon=\"file-download\"></iron-icon>&nbsp;<span>Download Archive</span>\n  </button>\n</form>";

/***/ }),

/***/ "./public/elements/pages/record/app-media-download.js":
/*!************************************************************!*\
  !*** ./public/elements/pages/record/app-media-download.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppMediaDownload; });
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











class AppMediaDownload extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
      .with(EventInterface, _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_2___default.a, _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3___default.a) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_media_download_html__WEBPACK_IMPORTED_MODULE_1___default.a;
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

    if (_lib_utils__WEBPACK_IMPORTED_MODULE_5___default.a.getMediaType(record) === 'VideoObject') {
      sources = sources.concat(this._getVideoSources(record));
    } else if (_lib_utils__WEBPACK_IMPORTED_MODULE_5___default.a.getMediaType(record) === 'AudioObject') {
      sources = sources.concat(this._getAudioSources(record));
    } else if (_lib_utils__WEBPACK_IMPORTED_MODULE_5___default.a.getMediaType(record) === 'ImageObject' ) {
      this.showImageFormats = true;
      sources = sources.concat(this._getImageSources(record, nativeImageOnly));
      this._renderImgFormats(record, null, 'FR');
    } else if (_lib_utils__WEBPACK_IMPORTED_MODULE_5___default.a.getMediaType(record) === 'ImageList' ) {
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
        src :  _lib_config__WEBPACK_IMPORTED_MODULE_4___default.a.fcrepoBasePath+imageRecord['@id'],
        originalFormat : format,
        filename : imageRecord.filename || imageRecord.name,
        label : imageRecord.filename || imageRecord.name
      }]
    }

    let sources = [];
    for( let size of _lib_config__WEBPACK_IMPORTED_MODULE_4___default.a.imageDownload.sizes ) {
      let width = Math.floor(imageRecord.image.width * size.ratio);
      let height = Math.floor(imageRecord.image.height * size.ratio);
      let iiifSize = width+','+height;
      sources.push({
        record : imageRecord,
        type : 'image',
        src :  _lib_config__WEBPACK_IMPORTED_MODULE_4___default.a.fcrepoBasePath+imageRecord['@id'],
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
      src: _lib_config__WEBPACK_IMPORTED_MODULE_4___default.a.fcrepoBasePath + audioRecord['@id'],
      type: 'audio',
      filename : audioRecord.filename || audioRecord['@id'].split('/').pop(),
      label: this._getTypeLabel(audioRecord) + (audioRecord.fileSize ? ' (' + bytes__WEBPACK_IMPORTED_MODULE_6___default()(audioRecord.fileSize) + ') ' : '')
    }];
  }

  _getVideoSources(videoRecord) {
    let sources = [{
      record : videoRecord,
      type : 'video',
      src : _lib_config__WEBPACK_IMPORTED_MODULE_4___default.a.fcrepoBasePath + videoRecord['@id'],
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
          src: _lib_config__WEBPACK_IMPORTED_MODULE_4___default.a.fcrepoBasePath + transcript['@id'],
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

    let formats = _lib_config__WEBPACK_IMPORTED_MODULE_4___default.a.imageDownload.formats.slice(0);
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

    let path = this.rootRecord['@id'].replace(_lib_config__WEBPACK_IMPORTED_MODULE_4___default.a.fcrepoBasePath, '');
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
    let path = this.href.replace(_lib_config__WEBPACK_IMPORTED_MODULE_4___default.a.fcrepoBasePath, '');

    gtag('event', 'download', {
      'event_category': this.sourceType,
      'event_label': path,
      'value': 1
    });
  }

}

customElements.define('app-media-download', AppMediaDownload);

/***/ }),

/***/ "./public/elements/pages/record/app-record-metadata-layout.html":
/*!**********************************************************************!*\
  !*** ./public/elements/pages/record/app-record-metadata-layout.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n  }\n\n  .layout {\n    display: flex;\n  }\n  .layout > * {\n    flex : 1;\n  }\n\n  h2 {\n    border-bottom: 1px solid var(--medium-background-color);\n    color: var(--default-primary-color);\n    padding-bottom: 10px;\n    padding-left: 5px;\n  }\n</style>\n\n<iron-media-query query=\"(max-width: 900px)\" query-matches=\"{{mobile}}\"></iron-media-query>\n\n<app-tabs \n  tabs=\"[[tabs]]\" \n  selected=\"{{selectedTab}}\" \n  hidden$=\"[[!mobile]]\">\n</app-tabs>\n\n<div class=\"layout\">\n  <div hidden$=\"[[!showLeft]]\">\n    <h2>Item Data</h2>\n    <slot name=\"left\"></slot>\n  </div>\n  <div hidden$=\"[[!showRight]]\" style=\"max-width: 100vw;\">\n    <h2>Cite this Item</h2>\n    <slot name=\"right\"></slot>\n  </div>\n</div>";

/***/ }),

/***/ "./public/elements/pages/record/app-record-metadata-layout.js":
/*!********************************************************************!*\
  !*** ./public/elements/pages/record/app-record-metadata-layout.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppRecordMetadataLayout; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_record_metadata_layout_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-record-metadata-layout.html */ "./public/elements/pages/record/app-record-metadata-layout.html");
/* harmony import */ var _app_record_metadata_layout_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_record_metadata_layout_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_app_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/app-tabs */ "./public/elements/utils/app-tabs.js");
/* harmony import */ var _polymer_iron_pages_iron_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-pages/iron-pages */ "./public/node_modules/@polymer/iron-pages/iron-pages.js");
/* harmony import */ var _polymer_iron_media_query_iron_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query */ "./public/node_modules/@polymer/iron-media-query/iron-media-query.js");



// import "@polymer/paper-tabs/paper-tabs"
// import "@polymer/paper-tabs/paper-tab"




class AppRecordMetadataLayout extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_record_metadata_layout_html__WEBPACK_IMPORTED_MODULE_1___default.a;
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

/***/ "./public/elements/pages/record/app-record.html":
/*!******************************************************!*\
  !*** ./public/elements/pages/record/app-record.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    background-color: var(--super-light-background-color);\n  }\n\n  /*\n  app-media-viewer {\n    position: relative;\n  }\n  */\n\n  .container.top {\n    padding: 20px 0;\n    background-color: var(--light-background-color);\n  }\n\n  input {\n    padding: 0 0 0 5px;\n    display: block;\n    border: none;\n    height: 38px;\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    width: 85px;\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    font-weight: var(--fw-bold);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n  }\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  .copyButton[active] span {\n    display: none;\n  }\n\n  h3 {\n    margin: 0 0 10px 0;\n    /* color: var(--default-primary-color); */\n  }\n\n  .label {\n    font-weight: var(--fw-bold);\n    color: var(--default-primary-color);\n  }\n\n  .section {\n    margin-bottom: 15px;\n  }\n  .section.bordered {\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px dashed var(--medium-background-color);\n  }\n\n  .overview {\n    display: flex; \n    width: 100%;\n  }\n\n  .overview > div {\n    flex : 1;\n    padding : 0 10px;\n  }\n\n  .type-date-collection {\n    display: flex;\n    /* align-items: center; */\n  }\n\n  .resource-type {\n    text-transform: capitalize;\n  }\n  .resource-type iron-icon {\n    color: var(--default-primary-color);\n  }\n\n  paper-toast {\n    --paper-toast-background-color: var(--default-secondary-color);\n    --paper-toast-color: var(--default-primary-color);\n  }\n\n  #descriptionValue p,\n  #descriptionValue h1,\n  #descriptionValue h2,\n  #descriptionValue h3 {\n    margin-top: 0;\n  }\n\n  #link {\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  .metadata-row {\n    display: flex;\n    margin: 30px 20px;\n  }\n  .metadata-row .attr {\n    flex: 0.25;\n    color: var(--default-primary-color);\n    font-weight: var(--fw-bold); \n  }\n  .metadata-row .value {\n    flex: 0.75;\n    word-break: break-word;\n  }\n\n  .cite-container {\n    padding: 15px 0;\n    margin: 0 15px;\n    border-bottom: 1px dashed var(--medium-background-color);\n    display: flex;\n  }\n  .cite-container .label {\n    padding-right: 10px;\n    flex: 0.25;\n    color: var(--default-primary-color);\n    font-weight: var(--fw-bold); \n  }\n  .cite-container .text {\n    flex: 0.75;\n  }\n\n  .hidden {\n    display: none !important;\n  }\n\n  .fc-break {\n    height: 10px;\n  }\n\n  .rights {\n    font-size: var(--fs-p);\n    font-style: italic;\n    text-transform: capitalize;\n  }\n\n  .rights-break {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-top: 1px dashed var(--medium-background-color);\n  }\n\n  img[rights] {\n    height: 22px;\n    width: 22px;\n    vertical-align: sub;\n  }\n\n  @media( max-width: 550px ) {\n    .metadata-row {\n      display: block;\n    }\n  }\n\n  @media( max-width: 768px ) {\n    .overview {\n      display: block;\n    }\n    .cite-container {\n      display: block;\n      padding: 15px 0 15px 15px;\n      margin: 0;\n    }\n    .type-date-collection {\n      display: block;\n    }\n    .type-date-collection > div {\n      margin: 15px 5px;\n    }\n  }\n</style>\n\n<app-media-viewer></app-media-viewer>\n\n<div class=\"container top\">\n  <div class=\"overview\">\n    <div>\n      <h3>[[name]]</h3>\n      \n      <div hidden$=\"[[!alternativeHeadline]]\" class=\"section\">\n        <div style=\"font-weight: bold;\">[[alternativeHeadline]]</div>\n      </div>\n\n      <div hidden$=\"[[!rights]]\" class=\"rights\">\n        <div class=\"rights-break\"></div>\n        <div>\n          <a href$=\"[[rights.link]]\" target=\"_blank\">\n            <img src$=\"[[rights.icon]]\" rights />&nbsp;\n            <span>[[rights.label]]</span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n    <div>\n      <div style=\"display: flex; align-items: center\" class=\"section bordered\">\n        <span class=\"label\" style=\"padding-right: 10px; display:inline-block\">Permalink</span>\n        <div style=\"flex:1\">\n          <input id=\"link\" type=\"text\" />\n        </div>\n        <button on-click=\"_copyLink\" id=\"copyButton\" class=\"copyButton\">\n          <iron-icon icon=\"content-copy\" id=\"copyIcon\"></iron-icon>\n          <span>Copy</span>\n        </button>\n      </div>\n\n      <div class=\"section\">\n        <div class=\"label\">Download</div>\n        <app-media-download id=\"download\" hidden$=\"[[isBagOfFiles]]\"></app-media-download>\n        <app-fs-media-download id=\"download\" hidden$=\"[[!isBagOfFiles]]\"></app-fs-media-download>\n      </div>\n\n    </div>\n  </div><!-- end overview -->\n</div>\n\n<div class=\"container\" style=\"padding-bottom: 50px\">\n  <app-record-metadata-layout>\n    <div slot=\"left\">\n      <div class=\"metadata-row\">\n        <div class=\"attr\">Collection</div>\n        <div class=\"value\" id=\"collectionValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\">\n        <div class=\"attr\">Date</div>\n        <div class=\"value\" id=\"dateValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\" id=\"publisher\">\n        <div class=\"attr\">Publisher</div>\n        <div class=\"value\" id=\"publisherValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\" id=\"subject\">\n        <div class=\"attr\">Subject</div>\n        <div class=\"value\" id=\"subjectValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\" id=\"description\">\n        <div class=\"attr\">Description</div>\n        <div class=\"value\" id=\"descriptionValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\" id=\"callNumber\">\n        <div class=\"attr\">Call Number</div>\n        <div class=\"value\" id=\"callNumberValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\" id=\"identifier\">\n        <div class=\"attr\">ARK / DOI</div>\n        <div class=\"value\" id=\"identifierValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\" id=\"creator\">\n        <div class=\"attr\">Creator</div>\n        <div class=\"value\" id=\"creatorValue\"></div>\n      </div>\n\n      <div class=\"metadata-row\">\n        <div class=\"attr\">Fedora Link</div>\n        <div class=\"value\" id=\"fedoraValue\"></div>\n      </div>\n    </div>\n    \n    <div slot=\"right\">\n      <div class=\"cite-container\">\n        <div class=\"label\">MLA</div>\n        <div class=\"text\">\n          <app-copy-cite id=\"mla\"></app-copy-cite>\n        </div>\n      </div>\n\n      <div class=\"cite-container\">\n        <div class=\"label\">APA</div>\n        <div class=\"text\">\n          <app-copy-cite id=\"apa\"></app-copy-cite>\n        </div>\n      </div>\n\n      <div class=\"cite-container\">\n        <div class=\"label\">Chicago</div>\n        <div class=\"text\">\n          <app-copy-cite id=\"chicago\"></app-copy-cite>\n        </div>\n      </div>\n      \n    </div>\n  </app-record-metadata-layout>\n</div>";

/***/ }),

/***/ "./public/elements/pages/record/app-record.js":
/*!****************************************************!*\
  !*** ./public/elements/pages/record/app-record.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppRecord; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown */ "./public/node_modules/markdown/lib/index.js");
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_record_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-record.html */ "./public/elements/pages/record/app-record.html");
/* harmony import */ var _app_record_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_record_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_rights_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/rights.json */ "./public/lib/rights.json");
var _lib_rights_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../lib/rights.json */ "./public/lib/rights.json", 1);
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

















class AppRecord extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
      .with(EventInterface, _interfaces_CollectionInterface__WEBPACK_IMPORTED_MODULE_11___default.a, _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_12___default.a) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_record_html__WEBPACK_IMPORTED_MODULE_2___default.a;
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
      this.$.descriptionValue.innerHTML = markdown__WEBPACK_IMPORTED_MODULE_1__["markdown"].toHTML(this.record.description);
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
    let creators = _lib_utils__WEBPACK_IMPORTED_MODULE_5___default.a.asArray(record, 'creators');

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
    let subjects = _lib_utils__WEBPACK_IMPORTED_MODULE_5___default.a.asArray(record, 'abouts');
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
    let publishers = _lib_utils__WEBPACK_IMPORTED_MODULE_5___default.a.asArray(record, 'publisher')
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppAudioViewer; });
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











let AUDIO_STYLES = plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_6___default.a+shaka_player_dist_controls_css__WEBPACK_IMPORTED_MODULE_7___default.a;


let SPRITE_SHEET = plyr_dist_plyr_svg__WEBPACK_IMPORTED_MODULE_8___default.a;

class AppAudioViewer extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
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
    if ( _lib_utils__WEBPACK_IMPORTED_MODULE_4___default.a.getMediaType(media) !== 'AudioObject' ) return;

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
    sourceEle.src = _lib_config__WEBPACK_IMPORTED_MODULE_3___default.a.fcrepoBasePath+this.media['@id'];
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! plyr/dist/plyr.css */ "./public/node_modules/plyr/dist/plyr.css");
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_1__);



function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
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

  ${plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_1___default.a}
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppFsViewer; });
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

class AppFsViewer extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
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
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<iron-icon icon="chevron-right"></iron-icon>
      <span class="breadcrumb">Search Results</span>`;
    }

    let fullDirPath = [];

    return this.currentDir
      .replace(/^\//, '')
      .split('/')
      .map(dir =>  {
        fullDirPath.push(dir) 
        if( dir === '' ) return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<iron-icon icon="chevron-right"></iron-icon>
        <a class="breadcrumb" @click="${this._onBreadcrumbClicked}" dir="${'/'+fullDirPath.join('/')}">${dir}</a>`
      });
  }

  renderRow(index) {
    let file = this.files[index];
    let icon = this._getIcon(file);

    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");


function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

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

/***/ "./public/elements/pages/record/viewer/app-image-viewer-lightbox.html":
/*!****************************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-image-viewer-lightbox.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: none;\n    position: absolute;\n    z-index: 1000;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    background-color: black;    \n    animation: show 350ms ease-out;\n  }\n\n  :host #nav.single {\n    padding: 10px;\n    background-color: transparent;\n  }\n\n  @keyframes show {\n    from {\n      /* top: -100vh; */\n      opacity: 0.5;\n      transform: scale(1.3);\n    }\n    to {\n      /* top: 0; */\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  #viewer { \n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: black;\n  }\n\n  paper-spinner-lite {\n    --paper-spinner-color: var(--default-secondary-color);\n  }\n  \n  .spinner-layout {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  #nav {\n    z-index: 2000;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n</style>\n\n<!-- make sure background is blacked out... iOS hack -->\n<div id=\"safeCover\" style=\"display:none;position:absolute;z-index:999;top:0;left:0;width:100vw;height:100vh;background-color:black;\"></div>\n\n<div id=\"viewer\" hidden$=\"[[loading]]\"></div>\n<div class=\"spinner-layout\" hidden$=\"[[!loading]]\">\n  <paper-spinner-lite active$=\"[[loading]]\"></paper-spinner-lite>\n</div>\n\n<app-media-viewer-nav \n  id=\"nav\"\n  is-lightbox\n  on-zoom-in=\"_onZoomInClicked\"\n  on-zoom-out=\"_onZoomOutClicked\"\n  on-close=\"_onCloseClicked\">\n</app-media-viewer-nav>";

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-image-viewer-lightbox.js":
/*!**************************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-image-viewer-lightbox.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppImageViewer; });
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











class AppImageViewer extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
  .with(EventInterface, _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_5___default.a, _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_6___default.a) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = `<style>${leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4___default.a}</style>${_app_image_viewer_lightbox_html__WEBPACK_IMPORTED_MODULE_1___default.a}`;
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

/***/ "./public/elements/pages/record/viewer/app-image-viewer.html":
/*!*******************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-image-viewer.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  :host {\n    display: block;\n    background: black;\n    padding: 20px 0;\n    /* position: relative; */\n    box-sizing: border-box;\n  }\n\n  paper-spinner-lite {\n    --paper-spinner-color: var(--default-secondary-color);\n  }\n\n  #loading {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  img {\n    width: 100%;\n  }\n\n  .layout {\n    text-align: center;\n  }\n\n  [hidden] {\n    display: none !important;\n  }\n</style>\n\n<div id=\"loading\" hidden$=\"[[!loading]]\">\n  <paper-spinner-lite active$=\"[[loading]]\"></paper-spinner-lite>\n</div>\n\n<div class=\"layout\" hidden$=\"[[loading]]\" style=\"line-height: 0\">\n  <img id=\"img\" />\n</div>";

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-image-viewer.js":
/*!*****************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-image-viewer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppImageViewer; });
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









class AppImageViewer extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
  .with(EventInterface, _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_4___default.a, _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_5___default.a) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_image_viewer_html__WEBPACK_IMPORTED_MODULE_2___default.a;
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
    let getMediaType = _lib_utils__WEBPACK_IMPORTED_MODULE_3___default.a.getMediaType(media);
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

/***/ "./public/elements/pages/record/viewer/app-media-viewer-nav.html":
/*!***********************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-media-viewer-nav.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: block;\n    background-color: var(--default-primary-color);\n  }\n\n  :host([single-image]) {\n    background-color: transparent;\n    padding: 0 8px 8px 8px;\n  }\n\n  :host([single-image]) paper-icon-button,\n  :host([single-image]) app-share-btn,\n  :host app-share-btn,\n  :host paper-icon-button {\n    background-color: var(--default-primary-color);\n  }\n\n\n  .layout {\n    display: flex;\n    align-items: center;\n  }\n\n  #thumbnailInnerContainer {\n    padding-top: 7px;\n  }\n\n \n  #thumbnails {\n    /* (50px width + 10px margin + 4px border) * 8 thumbnails */\n    max-width: 512px;\n  }\n\n\n  #thumbnails {\n    overflow: hidden;\n  }\n\n  #thumbnails > div {\n    white-space: nowrap;\n    margin-left: 0;\n    will-change: margin-left;\n    transition: margin-left 250ms ease-out;\n  }\n\n  .thumbnail {\n    margin: 0 5px 5px 6px;\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n    color: white;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-color: black;    \n    border: 2px solid transparent;\n  }\n\n  .thumbnail:active {\n    border: 1px solid var(--default-secondary-color);\n  }\n\n  .thumbnail:focus {\n    outline: var(--default-outline);\n  }\n  \n  .thumbnail[selected] {\n    border: 2px solid var(--default-secondary-color);\n  }\n\n  iron-icon {\n    shape-rendering: geometricPrecision !important;\n    width: 28px !important;\n    height: 28px !important;\n  }\n\n  paper-icon-button {\n    color: var(--default-secondary-color);\n    min-width: 40px;\n  }\n\n  paper-icon-button:focus {\n    border-radius: 0 !important;\n  }\n\n  paper-icon-button[disabled] {\n    color: var(--gray-text);\n    min-width: 40px;\n  }\n\n  paper-icon-button[invisible] {\n    visibility: hidden;\n  }\n\n  .zoom-btns[pad] {\n    margin-right: 30px;\n  }\n</style>\n\n\n<div class=\"layout\">\n\n  <div id=\"navLeft\" hidden$=\"[[singleImage]]\">\n    <paper-icon-button noink \n      tabindex=\"0\" \n      icon=\"chevron-left\" \n      alt=\"Page thumbnails left\"\n      disabled$=\"[[!showNavLeft]]\"\n      invisible$=\"[[!showNavLeft]]\"\n      on-click=\"_pageLeft\">\n    </paper-icon-button>\n  </div>\n\n  <div id=\"thumbnails\" hidden$=\"[[singleImage]]\">\n    <div id=\"thumbnailInnerContainer\">\n      <template is=\"dom-repeat\" items=\"[[thumbnails]]\">\n        <button \n          class=\"thumbnail\"\n          alt$=\"Page #[[item.position]]\"\n          title$=\"[[item.id]]\"\n          media-id$=\"[[item.id]]\"\n          disabled$=\"[[item.disabled]]\"\n          selected$=\"[[item.selected]]\" \n          style$=\"background-image:url([[item.src]])\"\n          on-click=\"_onThumbnailClicked\">\n            <iron-icon icon=\"fin-icons:[[item.icon]]\"></iron-icon>\n        </button>\n      </template>\n    </div>\n  </div>\n\n  <div id=\"navRight\" hidden$=\"[[singleImage]]\">\n    <paper-icon-button noink \n      tabindex=\"0\" \n      icon=\"chevron-right\" \n      alt=\"Page thumbnails right\"\n      disabled$=\"[[!showNavRight]]\"\n      invisible$=\"[[!showNavRight]]\"\n      on-click=\"_pageRight\">\n    </paper-icon-button>\n  </div>\n\n  <div style=\"flex:1\"></div>\n  \n  <div id=\"buttonWrapper\" hidden$=\"[[breakControls]]\" style=\"white-space: nowrap\">\n    <paper-icon-button id=\"zoomOut1\" noink tabindex=\"0\" icon=\"zoom-out\" hidden$=\"[[!isLightbox]]\" on-click=\"_onZoomOutClicked\"></paper-icon-button>\n    <paper-icon-button noink icon=\"zoom-in\" tabindex=\"0\" hidden$=\"[[!isLightbox]]\" on-click=\"_onZoomInClicked\"></paper-icon-button>\n    \n    <app-share-btn id=\"shareBtn\" role=\"button\"></app-share-btn>\n\n    <span hidden$=\"[[!showOpenLightbox]]\" class=\"zoom-btns\" pad$=\"[[!showOpenLightbox]]\">\n      <paper-icon-button noink icon=\"zoom-in\" tabindex=\"0\" hidden$=\"[[isLightbox]]\" on-click=\"_onZoomInClicked\"></paper-icon-button>\n      <paper-icon-button noink icon=\"fin-icons:close\" tabindex=\"0\" hidden$=\"[[!isLightbox]]\" on-click=\"_onCloseClicked\"></paper-icon-button>\n    </span>\n  </div>\n</div>\n\n<div hidden$=\"[[!breakControls]]\" style=\"text-align: right\">\n  <paper-icon-button id=\"zoomOut2\" noink tabindex=\"0\" icon=\"zoom-out\" hidden$=\"[[!isLightbox]]\" on-click=\"_onZoomOutClicked\"></paper-icon-button>\n  <paper-icon-button noink icon=\"zoom-in\" tabindex=\"0\" hidden$=\"[[!isLightbox]]\" on-click=\"_onZoomInClicked\"></paper-icon-button>\n  \n  <app-share-btn></app-share-btn>\n  \n  <span hidden$=\"[[!showOpenLightbox]]\" class=\"zoom-btns\">\n    <paper-icon-button noink icon=\"zoom-in\" tabindex=\"0\" hidden$=\"[[isLightbox]]\" on-click=\"_onZoomInClicked\"></paper-icon-button>\n    <paper-icon-button noink icon=\"fin-icons:close\" tabindex=\"0\" hidden$=\"[[!isLightbox]]\" on-click=\"_onCloseClicked\"></paper-icon-button>\n  </span>\n</div>\n";

/***/ }),

/***/ "./public/elements/pages/record/viewer/app-media-viewer-nav.js":
/*!*********************************************************************!*\
  !*** ./public/elements/pages/record/viewer/app-media-viewer-nav.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppMediaViewerNav; });
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










class AppMediaViewerNav extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
  .with(EventInterface, _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_2___default.a, _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3___default.a) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_media_viewer_nav_html__WEBPACK_IMPORTED_MODULE_1___default.a;
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
    
    if (_lib_utils__WEBPACK_IMPORTED_MODULE_6___default.a.countMediaItems(record.media) === 1) {
      this.singleImage = true;
      return;
    }

    this.mediaList = _lib_utils__WEBPACK_IMPORTED_MODULE_6___default.a.flattenMediaList(record.media);
    this.mediaList = _lib_utils__WEBPACK_IMPORTED_MODULE_6___default.a.organizeMediaList(this.mediaList);

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

    let type = _lib_utils__WEBPACK_IMPORTED_MODULE_6___default.a.getMediaType(media);
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppMediaViewer; });
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









class AppMediaViewer extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
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

      let mediaType = _lib_utils__WEBPACK_IMPORTED_MODULE_9___default.a.getMediaType(e.selectedRecordMedia).toLowerCase().replace(/object/i, '');
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");


function render() {
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppVideoViewer; });
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












let VIDEO_STYLES = plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_6___default.a+shaka_player_dist_controls_css__WEBPACK_IMPORTED_MODULE_7___default.a;


let SPRITE_SHEET = plyr_dist_plyr_svg__WEBPACK_IMPORTED_MODULE_8___default.a

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

class AppVideoViewer extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
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
    let mediaType = _lib_utils__WEBPACK_IMPORTED_MODULE_4___default.a.getMediaType(media);
    if (mediaType !== 'VideoObject' && mediaType !== 'StreamingVideo') return;

    this.media = media;

    // find associated captions and prep to tracks array
    this.tracks = _lib_utils__WEBPACK_IMPORTED_MODULE_4___default.a.asArray(media, 'caption')
      .filter(caption => caption['@id'] !== undefined )
      .map(caption => {
        let lng = caption.language;
        let setDefault = (lng === 'en' ? true : false);

        return {
          kind: 'captions',
          label: _lib_utils__WEBPACK_IMPORTED_MODULE_4___default.a.getLanguage(lng),
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

    let mediaType = _lib_utils__WEBPACK_IMPORTED_MODULE_4___default.a.getMediaType(this.media);
    let manifestUri = _lib_config__WEBPACK_IMPORTED_MODULE_3___default.a.fcrepoBasePath+this.media['@id'];

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/repeat */ "./public/node_modules/lit-html/directives/repeat.js");
// https://github.com/ucd-library/pgdm-ui/tree/master/app/elements/pages/connect




function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
            ${Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_1__["repeat"])(this.tracks, (t) => 
                lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<track kind="${t.kind}" label="${t.label}" src="${t.src}" srclang="${t.srclang}" default="${t.default}" />`)}
        </video>
        <div id="loading" ?hidden="${this.libsLoaded}">
            <paper-spinner-lite ?active="${!this.libsLoaded}"></paper-spinner-lite>
        </div>
    </div>
`
}


/***/ }),

/***/ "./public/elements/utils/app-share-btn.html":
/*!**************************************************!*\
  !*** ./public/elements/utils/app-share-btn.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style include=\"shared-styles\">\n  :host {\n    display: inline-block;\n    position: relative;\n  }\n\n  #popup {\n    display: none;\n    z-index: 5;\n    background: white;\n    padding: 10px;\n    position: absolute;\n    bottom: 70px;\n    right: -20px;\n    min-width: 200px;\n  }\n\n  .layout {\n    display: flex;\n    margin-bottom: 5px;\n    justify-content: center;\n  }\n\n  input {\n    font-size: var(--fs-p);\n    padding: 0 0 0 5px;\n    display: block;\n    border: none;\n    height: 38px;\n    outline: none;\n  }\n\n  #link {\n    width: 100%;\n    border-top: 1px solid var(--medium-background-color);\n    border-left: 1px solid var(--medium-background-color);\n    border-bottom: 1px solid var(--medium-background-color);\n    box-sizing: border-box;\n  }\n\n  .social {\n    margin: 8px;\n    display: inline-block;\n    cursor: pointer;\n    height: 40px;\n    width: 40px;\n    border: 2px solid transparent;\n    outline: none;\n  }\n  .social:focus {\n    border: var(--default-outline);\n    border-radius: 20px;\n  }\n\n  .copyButton {\n    white-space: nowrap;\n    height: 38px;\n    text-transform: uppercase;\n    font-size: var(--fs-sm);\n    font-weight: var(--fw-bold);\n    background-color: var(--default-secondary-color);\n    color: var(--default-primary-color);\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n    padding: 0 5px;\n  }\n  .copyButton[active] {\n    text-align: center;\n    background-color: var(--default-primary-color);\n    color: var(--default-secondary-color);\n  }\n  .copyButton[active] span {\n    display: none;\n  }\n\n  #main {\n    color: var(--default-secondary-color);\n  }\n\n  .arrow-down {\n    position: absolute;\n    width: 0; \n    height: 0; \n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n    border-top: 20px solid white;\n    bottom: -20px;\n    right: 20px;\n  }\n\n  paper-icon-button:focus {\n    border-radius: 0 !important;\n  }\n</style>\n\n<div id=\"popup\">\n  <div class=\"layout\">\n    <img id=\"facebook\" \n      role=\"button\" \n      tabindex=\"0\" \n      src=\"/images/social-icons/icon-facebook.svg\" \n      class=\"social\" \n      on-click=\"_onSocialIconClick\"\n      on-keyup=\"_onSocialIconClick\" />\n    <img id=\"twitter\" \n      role=\"button\" \n      tabindex=\"0\" \n      src=\"/images/social-icons/icon-twitter.svg\" \n      class=\"social\" \n      on-click=\"_onSocialIconClick\"\n      on-keyup=\"_onSocialIconClick\" />\n    <img id=\"pinterest\" \n      role=\"button\" \n      tabindex=\"0\" \n      src=\"/images/social-icons/icon-pinterest.svg\" \n      class=\"social\" \n      on-click=\"_onSocialIconClick\"\n      on-keyup=\"_onSocialIconClick\" />\n  </div>\n  <div>\n    <div style=\"display: flex; align-items: center\" class=\"section bordered\">\n      <div style=\"flex:1\">\n        <input id=\"link\" type=\"text\" />\n      </div>\n      <button on-click=\"_copyLink\" id=\"copyButton\" class=\"copyButton\">\n        <iron-icon icon=\"content-copy\" id=\"copyIcon\"></iron-icon>\n      </button>\n    </div>\n  </div>\n  <div class=\"arrow-down\"></div>\n</div>\n\n<paper-icon-button \n  id=\"main\" \n  noink \n  icon=\"social:share\" \n\n  on-click=\"_onBtnClicked\">\n</paper-icon-button>\n\n";

/***/ }),

/***/ "./public/elements/utils/app-share-btn.js":
/*!************************************************!*\
  !*** ./public/elements/utils/app-share-btn.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppShareBtn; });
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

class AppShareBtn extends Mixin(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])
  .with(EventInterface, _interfaces_AppStateInterface__WEBPACK_IMPORTED_MODULE_2___default.a, _interfaces_MediaInterface__WEBPACK_IMPORTED_MODULE_3___default.a) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_share_btn_html__WEBPACK_IMPORTED_MODULE_1___default.a;
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppTabs; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./public/node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _app_tabs_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-tabs.html */ "./public/elements/utils/app-tabs.html");
/* harmony import */ var _app_tabs_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_tabs_html__WEBPACK_IMPORTED_MODULE_1__);



class AppTabs extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = _app_tabs_html__WEBPACK_IMPORTED_MODULE_1___default.a;
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppVirtualScroller; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _app_virtual_scroller_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-virtual-scroller.tpl.js */ "./public/elements/utils/app-virtual-scroller.tpl.js");




class AppVirtualScroller extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {

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
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }

    return this.renderedItems.map(item => {
      // badness
      if( item.index >= this.items.length ) {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
      }

      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");


function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class VideoLibLoader {
  async load() {
    if ( this.loaded ) return this.loaded;

    if ( this.loading ) {
      await this.loading;
      return this.loaded;
    }

    this.loading = new Promise(async (resolve, reject) => {
      const plyr = ( await __webpack_require__.e(/*! import() | video-libs */ "vendors~video-libs").then(__webpack_require__.t.bind(null, /*! plyr */ "./public/node_modules/plyr/dist/plyr.min.js", 7)) ).default;
      // const plyr = ( await import(/* webpackChunkName: "video-libs" */ 'plyr/src/js/plyr') ).default;
      const shaka = await __webpack_require__.e(/*! import() | video-libs */ "vendors~video-libs").then(__webpack_require__.t.bind(null, /*! shaka-player */ "./public/node_modules/shaka-player/dist/shaka-player.compiled.js", 7));
      
      // Install the polyfills before doing anything with the library
      await shaka.polyfill.installAll();

      this.loaded = {plyr, shaka};

      resolve(this.loaded);
    });

    return this.loading;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (new VideoLibLoader());

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvaW50ZXJmYWNlcy9NZWRpYUludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL2FwcC1jb3B5LWNpdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL2FwcC1jb3B5LWNpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC9hcHAtZnMtbWVkaWEtZG93bmxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC9hcHAtZnMtbWVkaWEtZG93bmxvYWQudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvYXBwLW1lZGlhLWRvd25sb2FkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC9hcHAtbWVkaWEtZG93bmxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC9hcHAtcmVjb3JkLW1ldGFkYXRhLWxheW91dC5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvYXBwLXJlY29yZC1tZXRhZGF0YS1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC9hcHAtcmVjb3JkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC9hcHAtcmVjb3JkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvdmlld2VyL2FwcC1hdWRpby12aWV3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC92aWV3ZXIvYXBwLWF1ZGlvLXZpZXdlci50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC92aWV3ZXIvYXBwLWZzLXZpZXdlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL3ZpZXdlci9hcHAtZnMtdmlld2VyLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL3ZpZXdlci9hcHAtaW1hZ2Utdmlld2VyLWxpZ2h0Ym94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC92aWV3ZXIvYXBwLWltYWdlLXZpZXdlci1saWdodGJveC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL3ZpZXdlci9hcHAtaW1hZ2Utdmlld2VyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC92aWV3ZXIvYXBwLWltYWdlLXZpZXdlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL3ZpZXdlci9hcHAtbWVkaWEtdmlld2VyLW5hdi5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvdmlld2VyL2FwcC1tZWRpYS12aWV3ZXItbmF2LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9yZWNvcmQvdmlld2VyL2FwcC1tZWRpYS12aWV3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC92aWV3ZXIvYXBwLW1lZGlhLXZpZXdlci50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3JlY29yZC92aWV3ZXIvYXBwLXZpZGVvLXZpZXdlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcmVjb3JkL3ZpZXdlci9hcHAtdmlkZW8tdmlld2VyLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvYXBwLXNoYXJlLWJ0bi5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9hcHAtc2hhcmUtYnRuLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9hcHAtdGFicy5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9hcHAtdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvYXBwLXZpcnR1YWwtc2Nyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3V0aWxzL2FwcC12aXJ0dWFsLXNjcm9sbGVyLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbGliL3V0aWxzL3ZpZGVvLWxpYi1sb2FkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEc7Ozs7Ozs7Ozs7O0FDbkJBLG9DQUFvQyxxQkFBcUIsS0FBSyxjQUFjLDhCQUE4QixLQUFLLGNBQWMsa0JBQWtCLDZCQUE2QixLQUFLLG1CQUFtQiwwQkFBMEIsbUJBQW1CLHFCQUFxQixtQ0FBbUMsOEJBQThCLGtDQUFrQyx1REFBdUQsMENBQTBDLHVCQUF1QixtQkFBbUIsc0JBQXNCLEtBQUssMkJBQTJCLHlCQUF5QixxREFBcUQsNENBQTRDLEtBQUssa0NBQWtDLG9CQUFvQixLQUFLLGlCQUFpQiwyQkFBMkIscUJBQXFCLDZCQUE2QixLQUFLLGdCQUFnQixvQkFBb0IsS0FBSyxzWTs7Ozs7Ozs7Ozs7O0FDQWgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRDtBQUNwQjtBQUNWOztBQUVsQiwwQkFBMEIsK0VBQWM7O0FBRXZEO0FBQ0E7QUFDQSxvQkFBb0IsMERBQVE7QUFDNUI7QUFDQTs7QUFFQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0I7QUFDQSxzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUFDN0I7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQSxHOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsNktBQW1EO0FBQzlFO0FBQ0EsMEJBQTBCLDBNQUEyRDs7QUFFckY7QUFDQTs7QUFFQSxxQkFBcUI7O0FBRXJCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRWUsbUZBQW9CLEUiLCJmaWxlIjoicGFnZS1yZWNvcmQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBzdWJjbGFzcyA9PiBcbiAgY2xhc3MgTWVkaWFJbnRlcmZhY2UgZXh0ZW5kcyBzdWJjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5faW5qZWN0TW9kZWwoJ01lZGlhTW9kZWwnKTtcbiAgICB9XG5cbiAgICBfZ2V0SW1nUGF0aChyZWNvcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLk1lZGlhTW9kZWwuZ2V0SW1nUGF0aChyZWNvcmQpO1xuICAgIH1cblxuICAgIF9nZXRJbWdVcmwocGF0aCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgcmV0dXJuIHRoaXMuTWVkaWFNb2RlbC5nZXRJbWdVcmwocGF0aCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgX2dldEltYWdlTWVkaWFMaXN0KHJvb3RSZWNvcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLk1lZGlhTW9kZWwuZ2V0SW1hZ2VNZWRpYUxpc3Qocm9vdFJlY29yZCk7XG4gICAgfVxuXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFtoaWRkZW5dIHtcXG4gICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXApO1xcbiAgfVxcblxcbiAgLmNvcHlCdXR0b24ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIC8qIHdpZHRoOiA4NXB4OyAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXNtKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5jb3B5QnV0dG9uW2FjdGl2ZV0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuICBcXG4gIC5jb3B5QnV0dG9uW2FjdGl2ZV0gc3BhbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjY2l0ZVRleHQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB9XFxuXFxuICAuYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IGhpZGRlbiQ9XFxcIltbY29weWluZ11dXFxcIiBpZD1cXFwiY2l0ZVRleHRcXFwiPjwvZGl2Plxcbjx0ZXh0YXJlYSBoaWRkZW4kPVxcXCJbWyFjb3B5aW5nXV1cXFwiIGlkPVxcXCJjb3B5QXJlYVxcXCI+PC90ZXh0YXJlYT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXG4gIDxkaXY+XFxuICAgIDxzbG90Pjwvc2xvdD5cXG4gIDwvZGl2PlxcbiAgPGJ1dHRvbiBhY3RpdmUkPVxcXCJbW2NvcHlpbmddXVxcXCIgb24tY2xpY2s9XFxcIl9vbkNvcHlDbGlja2VkXFxcIiBjbGFzcz1cXFwiY29weUJ1dHRvblxcXCI+XFxuICAgIDxpcm9uLWljb24gaWNvbj1cXFwiY29udGVudC1jb3B5XFxcIiBpZD1cXFwiaWNvblxcXCI+PC9pcm9uLWljb24+XFxuICAgIDxzcGFuPkNvcHk8L3NwYW4+XFxuICA8L2J1dHRvbj5cXG48L2Rpdj5cXG5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1jb3B5LWNpdGUuaHRtbFwiXG5pbXBvcnQgc3RyaXB0YWdzIGZyb20gXCJzdHJpcHRhZ3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb3B5Q2l0ZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0IDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnLFxuICAgICAgICBvYnNlcnZlciA6ICdfb25UZXh0VXBkYXRlJ1xuICAgICAgfSxcbiAgICAgIGNvcHlpbmcgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uVGV4dFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gJ3RleHQnIHByb3BlcnR5IG9ic2VydmVyXG4gICAqL1xuICBfb25UZXh0VXBkYXRlKCkge1xuICAgIHRoaXMuJC5jaXRlVGV4dC5pbm5lckhUTUwgPSB0aGlzLnRleHQgfHwgJyc7XG4gICAgdGhpcy4kLmNvcHlBcmVhLnZhbHVlID0gc3RyaXB0YWdzKHRoaXMudGV4dCkudHJpbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ29weUNsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGNvcHkgYnRuIGNsaWNrIGV2ZW50XG4gICAqL1xuICBfb25Db3B5Q2xpY2tlZCgpIHtcbiAgICAvLyBmaXJzdCBzZXQgY29ycmVjdCBoZWlnaHRcbiAgICB0aGlzLiQuY29weUFyZWEuc3R5bGUuaGVpZ2h0ID0gKHRoaXMuJC5jaXRlVGV4dC5vZmZzZXRIZWlnaHQtMTApKydweCc7XG4gICAgdGhpcy4kLmNvcHlBcmVhLnN0eWxlLndpZHRoID0gKHRoaXMuJC5jaXRlVGV4dC5vZmZzZXRXaWR0aC0xMCkrJ3B4JztcbiAgXG4gICAgdGhpcy5jb3B5aW5nID0gdHJ1ZTtcbiAgICAvLyB0aGlzLiQuY29weUFyZWEuc2VsZWN0KCk7XG4gICAgdGhpcy4kLmNvcHlBcmVhLmZvY3VzKCk7XG4gICAgdGhpcy4kLmNvcHlBcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTkpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiQ29weVwiKTtcbiAgICB0aGlzLiQuaWNvbi5pY29uID0gJ2NoZWNrJztcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy4kLmljb24uaWNvbiA9ICdjb250ZW50LWNvcHknO1xuICAgICAgdGhpcy5jb3B5aW5nID0gZmFsc2U7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1jb3B5LWNpdGUnLCBBcHBDb3B5Q2l0ZSk7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLWZzLW1lZGlhLWRvd25sb2FkLnRwbC5qc1wiXG5cbmltcG9ydCBcIi4vdmlld2VyL2FwcC1mcy12aWV3ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBGc01lZGlhRG93bmxvYWQgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGUgOiB7dHlwZTogU3RyaW5nfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGUgPSAnc2luZ2xlJ1xuXG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnKTtcbiAgfVxuXG4gIGFzeW5jIGZpcnN0VXBkYXRlZCgpIHtcbiAgICB0aGlzLmZzVmlld2VyID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2FwcC1mcy12aWV3ZXInKTtcbiAgICB0aGlzLl9vbkFwcFN0YXRlVXBkYXRlKGF3YWl0IHRoaXMuQXBwU3RhdGVNb2RlbC5nZXQoKSk7XG4gIH1cblxuICBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgdGhpcy5zZWxlY3RlZFJlY29yZCA9IGUuc2VsZWN0ZWRSZWNvcmQ7XG4gICAgdGhpcy5zZWxlY3RlZFJlY29yZE1lZGlhID0gZS5zZWxlY3RlZFJlY29yZE1lZGlhO1xuICB9XG5cbiAgX3RvZ2dsZU11bHRpcGxlRG93bmxvYWQoZSkge1xuICAgIHRoaXMubW9kZSA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgfVxuXG4gIF9vbkRvd25sb2FkQ2xpY2tlZChlKSB7XG4gICAgaWYoIGUudHlwZSA9PT0gJ2tleXVwJyAmJiBlLndoaWNoICE9PSAxMyApIHJldHVybjtcblxuICAgIGlmKCB0aGlzLm1vZGUgPT09ICdzaW5nbGUnICkge1xuICAgICAgdGhpcy5mc1ZpZXdlci5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCB0aGlzLnNlbGVjdGVkUmVjb3JkTWVkaWEuY2xpZW50TWVkaWFEb3dubG9hZCApIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuc2VsZWN0ZWRSZWNvcmRNZWRpYS5jbGllbnRNZWRpYURvd25sb2FkO1xuICAgICAgICBpZiggQXJyYXkuaXNBcnJheSh1cmwpICkgdXJsID0gdXJsWzBdO1xuICAgICAgICBpZiggdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgKSB1cmwgPSB1cmxbJ0BpZCddO1xuICAgICAgICB1cmwgPSAnL2ZjcmVwby9yZXN0LycrdXJsO1xuICAgICAgICBjb25zb2xlLmxvZygnZG93bmxvYWRpbmcgYXJjaGl2ZSB1c2luZzogJyt1cmwpO1xuICAgICAgICBvcGVuKHVybCwgJ19ibGFuaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHVybCA9ICcvYXBpL3ppcC9iYWctb2YtZmlsZXMnK3RoaXMuc2VsZWN0ZWRSZWNvcmRNZWRpYVsnQGlkJ107XG4gICAgICAgIG9wZW4odXJsLCAnX2JsYW5rJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZGluZyBhcmNoaXZlIHVzaW5nOiAnK3VybCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckRvd25sb2FkQnRuKG1vZGUpIHtcbiAgICBpZiggdGhpcy5tb2RlID09PSAnc2luZ2xlJyApIHtcbiAgICAgIHJldHVybiBodG1sYDxpcm9uLWljb24gaWNvbj0nZmlsZS1kb3dubG9hZCc+PC9pcm9uLWljb24+IEJyb3dzZSBmb3IgZmlsZWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBodG1sYDxpcm9uLWljb24gaWNvbj0nZmlsZS1kb3dubG9hZCc+PC9pcm9uLWljb24+IERvd25sb2FkIEFyY2hpdmVgO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1mcy1tZWRpYS1kb3dubG9hZCcsIEFwcEZzTWVkaWFEb3dubG9hZCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmxheW91dCB7XG4gICAgZGlzcGxheTpmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmxheW91dC5idG5zID4gKiB7XG4gICAgd2lkdGg6IDMzJVxuICB9XG5cbiAgLnJhZGlvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA4cHggMTJweCA4cHggOHB4O1xuICAgIGNvbG9yIDogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxuICBhIGlyb24taWNvbiB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuPC9zdHlsZT4gXG5cbjxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW9cIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogNDBweFwiPlxuICAgICAgPGlucHV0IGlkPVwic2luZ2xlXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNldC1mcy1kbC10eXBlXCIgY2hlY2tlZCBAY2xpY2s9XCIke3RoaXMuX3RvZ2dsZU11bHRpcGxlRG93bmxvYWR9XCIgLz4gXG4gICAgICA8bGFiZWwgZm9yPVwic2luZ2xlXCI+U2luZ2xlPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW9cIj5cbiAgICAgIDxpbnB1dCBpZD1cImFyY2hpdmVcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2V0LWZzLWRsLXR5cGVcIiBAY2xpY2s9XCIke3RoaXMuX3RvZ2dsZU11bHRpcGxlRG93bmxvYWR9XCIvPiBcbiAgICAgIDxsYWJlbCBmb3I9XCJhcmNoaXZlXCI+QXJjaGl2ZTwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxhIGlkPVwiZG93bmxvYWRCdG5cIiBAY2xpY2s9XCIke3RoaXMuX29uRG93bmxvYWRDbGlja2VkfVwiIEBrZXl1cD1cIiR7dGhpcy5fb25Eb3dubG9hZENsaWNrZWR9XCIgdGFiaW5kZXg9XCIwXCI+XG4gICR7dGhpcy5fcmVuZGVyRG93bmxvYWRCdG4odGhpcy5tb2RlKX1cbjwvYT5cblxuPGFwcC1mcy12aWV3ZXI+PC9hcHAtZnMtdmlld2VyPlxuXG5gO30iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlIGluY2x1ZGU9XFxcInNoYXJlZC1zdHlsZXNcXFwiPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5pbmZvIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtc20pO1xcbiAgfVxcbiAgXFxuICBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY29sb3IgOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXNtKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGhlaWdodDogMjRweDtcXG4gIH1cXG4gIFxcbiAgc2VsZWN0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggNDBweCA1cHggMTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbXMtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW8tYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG5cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTBweCBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCA2cHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXhNQ0EySWlCM2FXUjBhRDBpTVRCd2VDSWdhR1ZwWjJoMFBTSTJjSGdpUGp4a1pXWnpQanh6ZEhsc1pUNHVZMnh6TFRGN1ptbHNiRG9qTURBeU5qVTFPMzA4TDNOMGVXeGxQand2WkdWbWN6NDhaejQ4Y0c5c2VXZHZiaUJqYkdGemN6MGlZMnh6TFRFaUlIQnZhVzUwY3owaU1DQXdJREV3SURBZ05TQTJJREFnTUNJdlBqd3ZaejQ4TDNOMlp6ND0nKTtcXG4gICAgLyogVE9ETzogU2VlbXMgdG8gY2F1c2UgcHJvYmxlbSB3L3dpZHRoIG9mIHNlbGVjdCBib3ggYmVpbmcgdG9vIHNtYWxsXFxuICAgIEBhcHBseSAtLWZpbi1zZWFyY2gtYm94LXNlbGVjdC1pbnZlcnNlO1xcbiAgICAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7IFxcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIHNlbGVjdC5wbGFpblRleHQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXNtKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1mcy1wKSAqIDEuNjI1KTtcXG4gIH1cXG4gIFxcbiAgLyogZm9yIElFICovXFxuICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgc2VsZWN0IG9wdGlvbiB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB9XFxuXFxuICAubGF5b3V0IHtcXG4gICAgZGlzcGxheTpmbGV4OyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5sYXlvdXQuYnRucyA+ICoge1xcbiAgICB3aWR0aDogMzMlXFxuICB9XFxuXFxuICAucmFkaW8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuXFxuPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJsYXlvdXRcXFwiIGhpZGRlbiQ9XFxcIltbIWhhc011bHRpcGxlRG93bmxvYWRNZWRpYV1dXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicmFkaW9cXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDQwcHhcXFwiPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwic2luZ2xlXFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwic2V0LXNpemVcXFwiIGNoZWNrZWQgb24tY2xpY2s9XFxcIl90b2dnbGVNdWx0aXBsZURvd25sb2FkXFxcIiAvPiBcXG4gICAgICA8bGFiZWwgZm9yPVxcXCJzaW5nbGVcXFwiPlNpbmdsZTwvbGFiZWw+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyYWRpb1xcXCI+XFxuICAgICAgPGlucHV0IGlkPVxcXCJmdWxsc2V0XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwic2V0LXNpemVcXFwiIG9uLWNsaWNrPVxcXCJfdG9nZ2xlTXVsdGlwbGVEb3dubG9hZFxcXCIvPiBcXG4gICAgICA8bGFiZWwgZm9yPVxcXCJmdWxsc2V0XFxcIj5GdWxsIFNldCAoW1tmdWxsU2V0Q291bnRdXSBmaWxlcyk8L2xhYmVsPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgaGlkZGVuJD1cXFwiW1tmdWxsU2V0U2VsZWN0ZWRdXVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJsYXlvdXQgYnRuc1xcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206IDVweDtcXFwiIGhpZGRlbiQ9XFxcIltbIXNlbGVjdGVkTWVkaWFIYXNTb3VyY2VzXV1cXFwiPlxcbiAgICA8c2VsZWN0IGlkPVxcXCJkb3dubG9hZE9wdGlvbnNcXFwiIG9uLWNoYW5nZT1cXFwiX29uQ2hhbmdlRG93bmxvYWRPcHRpb25zXFxcIiA+PC9zZWxlY3Q+XFxuICAgIDxzZWxlY3QgaWQ9XFxcImZvcm1hdFxcXCIgb24tY2hhbmdlPVxcXCJfb25Gb3JtYXRTZWxlY3RlZFxcXCIgaGlkZGVuJD1cXFwiW1shc2hvd0ltYWdlRm9ybWF0c11dXFxcIj48L3NlbGVjdD5cXG4gICAgPGEgaWQ9XFxcImRvd25sb2FkQnRuXFxcIiBocmVmPVxcXCJbW2hyZWZdXVxcXCIgXFxuICAgICAgb24tY2xpY2s9XFxcIl9vbkRvd25sb2FkQ2xpY2tlZFxcXCIgXFxuICAgICAgZG93bmxvYWQgXFxuICAgICAgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIFxcbiAgICAgIHJlbD1cXFwibm9vcGVuZXJcXFwiIFxcbiAgICAgIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTogbm93cmFwOyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIj5cXG4gICAgICAgIDxzcGFuPlxcbiAgICAgICAgICBEb3dubG9hZFxcbiAgICAgICAgPC9zcGFuPlxcbiAgICA8L2E+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48ZGl2IGhpZGRlbiQ9XFxcIltbZnVsbFNldFNlbGVjdGVkXV1cXFwiPlxcbiAgPGRpdiBoaWRkZW4kPVxcXCJbW3NlbGVjdGVkTWVkaWFIYXNTb3VyY2VzXV1cXFwiID5cXG4gICAgPGVtPk5vIGRvd25sb2FkYWJsZSBpdGVtcyBhdmFpbGFibGU8L2VtPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuXFxuPGZvcm0gaWQ9XFxcImRvd25sb2FkWmlwXFxcIiBcXG5hY3Rpb24kPVxcXCIvYXBpL3ppcC9bW3ppcE5hbWVdXVxcXCIgXFxubWV0aG9kPVxcXCJQT1NUXFxcIiBcXG50YXJnZXQ9XFxcIl9ibGFua1xcXCIgXFxuaGlkZGVuJD1cXFwiW1shZnVsbFNldFNlbGVjdGVkXV1cXFwiPiAgICBcXG4gIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBoaWRkZW4gbmFtZT1cXFwicGF0aHNcXFwiIGlkPVxcXCJ6aXBQYXRoc1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIj5cXG4gIDxidXR0b24gb24tY2xpY2s9XFxcIl9vbkRvd25sb2FkRnVsbFNldENsaWNrZWRcXFwiPlxcbiAgICA8aXJvbi1pY29uIGljb249XFxcImZpbGUtZG93bmxvYWRcXFwiPjwvaXJvbi1pY29uPiZuYnNwOzxzcGFuPkRvd25sb2FkIEFyY2hpdmU8L3NwYW4+XFxuICA8L2J1dHRvbj5cXG48L2Zvcm0+XCI7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtbWVkaWEtZG93bmxvYWQuaHRtbFwiXG5cbmltcG9ydCBDb2xsZWN0aW9uSW50ZXJmYWNlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0NvbGxlY3Rpb25JbnRlcmZhY2VcIlxuaW1wb3J0IE1lZGlhSW50ZXJmYWNlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL01lZGlhSW50ZXJmYWNlXCJcblxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vbGliL2NvbmZpZ1wiXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiXG5pbXBvcnQgYnl0ZXMgZnJvbSBcImJ5dGVzXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBNZWRpYURvd25sb2FkIGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gICAgICAud2l0aChFdmVudEludGVyZmFjZSwgQ29sbGVjdGlvbkludGVyZmFjZSwgTWVkaWFJbnRlcmZhY2UpIHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0SW1hZ2U6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGZvcm1hdHMgOiB7XG4gICAgICAgIHR5cGUgOiBBcnJheSxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiBbXVxuICAgICAgfSxcbiAgICAgIGhyZWYgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBpbWFnZVNpemVzIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW11cbiAgICAgIH0sXG4gICAgICBoYXNNdWx0aXBsZURvd25sb2FkTWVkaWE6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWRNZWRpYUhhc1NvdXJjZXMgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuICAgICAgZnVsbFNldENvdW50IDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiAwXG4gICAgICB9LFxuICAgICAgZnVsbFNldFNlbGVjdGVkOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9LFxuICAgICAgZG93bmxvYWRPcHRpb25zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogKCkgPT4gW11cbiAgICAgIH0sXG4gICAgICBzaG93SW1hZ2VGb3JtYXRzIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2luamVjdE1vZGVsKCdBcHBTdGF0ZU1vZGVsJywgJ01lZGlhTW9kZWwnKTtcbiAgfVxuXG4gIGFzeW5jIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgbGV0IHNlbGVjdGVkUmVjb3JkID0gYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkKCk7XG4gICAgaWYoIHNlbGVjdGVkUmVjb3JkICkge1xuICAgICAgdGhpcy5fb25TZWxlY3RlZFJlY29yZFVwZGF0ZShzZWxlY3RlZFJlY29yZCk7XG4gICAgICBsZXQgc2VsZWN0ZWRSZWNvcmRNZWRpYSA9IGF3YWl0IHRoaXMuQXBwU3RhdGVNb2RlbC5nZXRTZWxlY3RlZFJlY29yZE1lZGlhKCk7XG4gICAgICBpZiggc2VsZWN0ZWRSZWNvcmRNZWRpYSApIHRoaXMuX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShzZWxlY3RlZFJlY29yZE1lZGlhKTtcbiAgICB9XG4gIH1cblxuICBfb25TZWxlY3RlZFJlY29yZFVwZGF0ZShyZWNvcmQpIHtcbiAgICB0aGlzLnJvb3RSZWNvcmQgPSByZWNvcmQ7XG4gICAgaWYoICFyZWNvcmQgKSByZXR1cm47XG5cbiAgICAvLyBmaW5kIG91dCBpZiB0aGUgbnVtYmVyIG9mIGRvd25sb2FkIG9wdGlvbnMgaXMgZ3JlYXRlciB0aGFuIDFcbiAgICBsZXQgc291cmNlQ291bnQgPSAwO1xuICAgIGZvciggbGV0IHR5cGUgaW4gcmVjb3JkLm1lZGlhICkge1xuICAgICAgZm9yKCBsZXQgbWVkaWEgb2YgcmVjb3JkLm1lZGlhW3R5cGVdICkge1xuICAgICAgICBpZiggdHlwZSA9PT0gJ2ltYWdlTGlzdCcgKSB7XG4gICAgICAgICAgcmVjb3JkLm1lZGlhLmltYWdlTGlzdC5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgc291cmNlQ291bnQgKz0gbGlzdC5oYXNQYXJ0Lmxlbmd0aDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3VyY2VDb3VudCArPSB0aGlzLl9nZXREb3dubG9hZFNvdXJjZXMobWVkaWEsIHRydWUpLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIHNvdXJjZUNvdW50ID4gMSApIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYoIHNvdXJjZUNvdW50ID4gMSApIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuaGFzTXVsdGlwbGVEb3dubG9hZE1lZGlhID0gKHNvdXJjZUNvdW50ID4gMSk7XG4gICAgaWYoIHRoaXMuaGFzTXVsdGlwbGVEb3dubG9hZE1lZGlhICkge1xuICAgICAgdGhpcy4kLnNpbmdsZS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJC5mdWxsc2V0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmZ1bGxTZXRTZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShtZWRpYSkge1xuICAgIHRoaXMuc2hvd0ltYWdlRm9ybWF0cyA9IGZhbHNlO1xuICAgIHRoaXMuZnVsbFNldFNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgc291cmNlcyA9IHRoaXMuX2dldERvd25sb2FkU291cmNlcyhtZWRpYSk7XG5cbiAgICBpZiAoIHNvdXJjZXMubGVuZ3RoID09PSAwICkge1xuICAgICAgdGhpcy5zZWxlY3RlZE1lZGlhSGFzU291cmNlcyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRNZWRpYUhhc1NvdXJjZXMgPSB0cnVlO1xuICAgIHRoaXMuZnVsbFNldENvdW50ID0gdGhpcy5fZ2V0QWxsTmF0aXZlRG93bmxvYWRTb3VyY2VzKCkubGVuZ3RoO1xuXG4gICAgdGhpcy5hbGxTb3VyY2VzID0gc291cmNlcztcbiAgICB0aGlzLmRvd25sb2FkT3B0aW9ucyA9IHNvdXJjZXM7XG4gICAgdGhpcy4kLmRvd25sb2FkT3B0aW9ucy5pbm5lckhUTUwgPSBzb3VyY2VzXG4gICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gYDxvcHRpb24gdmFsdWU9XCIke2luZGV4fVwiICR7aW5kZXggPT09IDAgPyAnc2VsZWN0ZWQnIDogJyd9PiR7aXRlbS5sYWJlbH08L29wdGlvbj5gKVxuICAgICAgLmpvaW4oKVxuICAgIHRoaXMuJC5kb3dubG9hZE9wdGlvbnMudmFsdWUgPSAnMCc7XG5cbiAgICB0aGlzLl9zZXREb3dubG9hZEhyZWYoc291cmNlc1swXSk7XG4gIH1cblxuICBfZ2V0RG93bmxvYWRTb3VyY2VzKHJlY29yZCwgbmF0aXZlSW1hZ2VPbmx5PWZhbHNlKSB7XG4gICAgbGV0IHNvdXJjZXMgPSBbXTtcbiAgICBpZiggIXJlY29yZCApIHJldHVybiBzb3VyY2VzO1xuXG4gICAgaWYoIHJlY29yZC5jbGllbnRNZWRpYURvd25sb2FkICkge1xuICAgICAgaWYoIEFycmF5LmlzQXJyYXkocmVjb3JkLmNsaWVudE1lZGlhRG93bmxvYWQpICkge1xuICAgICAgICBpZiggcmVjb3JkLmNsaWVudE1lZGlhRG93bmxvYWQubGVuZ3RoICkge1xuICAgICAgICAgIHJlY29yZCA9IHJlY29yZC5jbGllbnRNZWRpYURvd25sb2FkWzBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNvcmQgPSByZWNvcmQuY2xpZW50TWVkaWFEb3dubG9hZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXRpbHMuZ2V0TWVkaWFUeXBlKHJlY29yZCkgPT09ICdWaWRlb09iamVjdCcpIHtcbiAgICAgIHNvdXJjZXMgPSBzb3VyY2VzLmNvbmNhdCh0aGlzLl9nZXRWaWRlb1NvdXJjZXMocmVjb3JkKSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5nZXRNZWRpYVR5cGUocmVjb3JkKSA9PT0gJ0F1ZGlvT2JqZWN0Jykge1xuICAgICAgc291cmNlcyA9IHNvdXJjZXMuY29uY2F0KHRoaXMuX2dldEF1ZGlvU291cmNlcyhyZWNvcmQpKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmdldE1lZGlhVHlwZShyZWNvcmQpID09PSAnSW1hZ2VPYmplY3QnICkge1xuICAgICAgdGhpcy5zaG93SW1hZ2VGb3JtYXRzID0gdHJ1ZTtcbiAgICAgIHNvdXJjZXMgPSBzb3VyY2VzLmNvbmNhdCh0aGlzLl9nZXRJbWFnZVNvdXJjZXMocmVjb3JkLCBuYXRpdmVJbWFnZU9ubHkpKTtcbiAgICAgIHRoaXMuX3JlbmRlckltZ0Zvcm1hdHMocmVjb3JkLCBudWxsLCAnRlInKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmdldE1lZGlhVHlwZShyZWNvcmQpID09PSAnSW1hZ2VMaXN0JyApIHtcbiAgICAgIChyZWNvcmQuaGFzUGFydCB8fCBbXSkuZm9yRWFjaChpbWcgPT4ge1xuICAgICAgICBzb3VyY2VzID0gc291cmNlcy5jb25jYXQodGhpcy5fZ2V0SW1hZ2VTb3VyY2VzKGltZywgbmF0aXZlSW1hZ2VPbmx5KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlcztcbiAgfVxuXG4gIF9zZXREb3dubG9hZEhyZWYoc291cmNlKSB7XG4gICAgbGV0IGhyZWYgPSBzb3VyY2Uuc3JjO1xuICAgIGlmKCBzb3VyY2UudHlwZSA9PT0gJ2ltYWdlJyApIHtcbiAgICAgIGxldCBmb3JtYXQgPSB0aGlzLiQuZm9ybWF0LnZhbHVlO1xuICAgICAgaWYoIHNvdXJjZS5vcmlnaW5hbEZvcm1hdCAhPT0gZm9ybWF0IHx8IHNvdXJjZS5pbWFnZVR5cGUgIT09ICdGUicgKSB7XG4gICAgICAgIGhyZWYgKz0gc291cmNlLnNlcnZpY2UrZm9ybWF0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc291cmNlVHlwZSA9IHNvdXJjZS50eXBlOyAvLyBzdG9yZWQgZm9yIGFuYWx5dGljc1xuICAgIHRoaXMuaHJlZiA9IGhyZWY7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZ2V0SW1hZ2VTb3VyY2VzXG4gICAqIEBkZXNjcmlwdGlvbiB0aGUgZG93bmxvYWQgc291cmNlcyBsaXN0IGZvciBpbWFnZSBtZWRpYVxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGltYWdlUmVjb3JkIHRoZSBpbWFnZSBtZWRpYVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG5hdGl2ZUltYWdlT25seSBJbiB0aGUgc291cmNlcyBsaXN0LCBzaG91bGQgb25seSB0aGUgbmF0aXZlIFxuICAgKiBpbWFnZSBiZSByZXR1cm5lZCBvciBhbGwgYXZhaWxhYmxlIHNpemUgb3B0aW9ucz9cbiAgICogXG4gICAqIEByZXR1cm5zIHtBcnJheX0gXG4gICAqL1xuICBfZ2V0SW1hZ2VTb3VyY2VzKGltYWdlUmVjb3JkLCBuYXRpdmVJbWFnZU9ubHk9ZmFsc2UpIHtcbiAgICBsZXQgZm9ybWF0ID0gdGhpcy5fZ2V0SW1hZ2VGb3JtYXQoaW1hZ2VSZWNvcmQpO1xuXG4gICAgaWYoIG5hdGl2ZUltYWdlT25seSApIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICByZWNvcmQgOiBpbWFnZVJlY29yZCxcbiAgICAgICAgdHlwZSA6ICdpbWFnZScsXG4gICAgICAgIHNyYyA6ICBjb25maWcuZmNyZXBvQmFzZVBhdGgraW1hZ2VSZWNvcmRbJ0BpZCddLFxuICAgICAgICBvcmlnaW5hbEZvcm1hdCA6IGZvcm1hdCxcbiAgICAgICAgZmlsZW5hbWUgOiBpbWFnZVJlY29yZC5maWxlbmFtZSB8fCBpbWFnZVJlY29yZC5uYW1lLFxuICAgICAgICBsYWJlbCA6IGltYWdlUmVjb3JkLmZpbGVuYW1lIHx8IGltYWdlUmVjb3JkLm5hbWVcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgbGV0IHNvdXJjZXMgPSBbXTtcbiAgICBmb3IoIGxldCBzaXplIG9mIGNvbmZpZy5pbWFnZURvd25sb2FkLnNpemVzICkge1xuICAgICAgbGV0IHdpZHRoID0gTWF0aC5mbG9vcihpbWFnZVJlY29yZC5pbWFnZS53aWR0aCAqIHNpemUucmF0aW8pO1xuICAgICAgbGV0IGhlaWdodCA9IE1hdGguZmxvb3IoaW1hZ2VSZWNvcmQuaW1hZ2UuaGVpZ2h0ICogc2l6ZS5yYXRpbyk7XG4gICAgICBsZXQgaWlpZlNpemUgPSB3aWR0aCsnLCcraGVpZ2h0O1xuICAgICAgc291cmNlcy5wdXNoKHtcbiAgICAgICAgcmVjb3JkIDogaW1hZ2VSZWNvcmQsXG4gICAgICAgIHR5cGUgOiAnaW1hZ2UnLFxuICAgICAgICBzcmMgOiAgY29uZmlnLmZjcmVwb0Jhc2VQYXRoK2ltYWdlUmVjb3JkWydAaWQnXSxcbiAgICAgICAgc2VydmljZSA6IGAvc3ZjOmlpaWYvZnVsbC8ke2lpaWZTaXplfS8wL2RlZmF1bHQuYCxcbiAgICAgICAgb3JpZ2luYWxGb3JtYXQgOiBmb3JtYXQsXG4gICAgICAgIGltYWdlVHlwZSA6IHNpemUuaW1hZ2VUeXBlLFxuICAgICAgICBmaWxlbmFtZSA6IGltYWdlUmVjb3JkLmZpbGVuYW1lIHx8IGltYWdlUmVjb3JkWydAaWQnXS5zcGxpdCgnLycpLnBvcCgpLFxuICAgICAgICBsYWJlbCA6IHNpemUubGFiZWwrJyAnK3dpZHRoKycgeCAnK2hlaWdodCsnIHB4JyxcbiAgICAgICAgd2lkdGgsIGhlaWdodFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZXM7XG4gIH1cblxuICBfZ2V0QXVkaW9Tb3VyY2VzKGF1ZGlvUmVjb3JkKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICByZWNvcmQ6IGF1ZGlvUmVjb3JkLFxuICAgICAgc3JjOiBjb25maWcuZmNyZXBvQmFzZVBhdGggKyBhdWRpb1JlY29yZFsnQGlkJ10sXG4gICAgICB0eXBlOiAnYXVkaW8nLFxuICAgICAgZmlsZW5hbWUgOiBhdWRpb1JlY29yZC5maWxlbmFtZSB8fCBhdWRpb1JlY29yZFsnQGlkJ10uc3BsaXQoJy8nKS5wb3AoKSxcbiAgICAgIGxhYmVsOiB0aGlzLl9nZXRUeXBlTGFiZWwoYXVkaW9SZWNvcmQpICsgKGF1ZGlvUmVjb3JkLmZpbGVTaXplID8gJyAoJyArIGJ5dGVzKGF1ZGlvUmVjb3JkLmZpbGVTaXplKSArICcpICcgOiAnJylcbiAgICB9XTtcbiAgfVxuXG4gIF9nZXRWaWRlb1NvdXJjZXModmlkZW9SZWNvcmQpIHtcbiAgICBsZXQgc291cmNlcyA9IFt7XG4gICAgICByZWNvcmQgOiB2aWRlb1JlY29yZCxcbiAgICAgIHR5cGUgOiAndmlkZW8nLFxuICAgICAgc3JjIDogY29uZmlnLmZjcmVwb0Jhc2VQYXRoICsgdmlkZW9SZWNvcmRbJ0BpZCddLFxuICAgICAgZmlsZW5hbWUgOiB2aWRlb1JlY29yZC5maWxlbmFtZSB8fCB2aWRlb1JlY29yZFsnQGlkJ10uc3BsaXQoJy8nKS5wb3AoKSxcbiAgICAgIGxhYmVsIDogdGhpcy5fZ2V0VHlwZUxhYmVsKHZpZGVvUmVjb3JkKSArICh2aWRlb1JlY29yZC5maWxlU2l6ZSA/ICcgKCcgKyBieXRlcyh2aWRlb1JlY29yZC5maWxlU2l6ZSkgKyAnKSAnIDogJycpXG4gICAgfV07XG5cbiAgICBsZXQgdHJhbnNjcmlwdHMgPSB2aWRlb1JlY29yZC50cmFuc2NyaXB0IHx8IFtdO1xuICAgIGlmKCAhQXJyYXkuaXNBcnJheSh0cmFuc2NyaXB0cykgKSB0cmFuc2NyaXB0cyA9IFt0cmFuc2NyaXB0c107XG5cbiAgICB0cmFuc2NyaXB0c1xuICAgICAgLmZpbHRlcih0cmFuc2NyaXB0ID0+IHRyYW5zY3JpcHQuZXJyb3IgIT09IHRydWUpXG4gICAgICAuZm9yRWFjaCh0cmFuc2NyaXB0ID0+IHtcbiAgICAgICAgc291cmNlcy5wdXNoKHtcbiAgICAgICAgICByZWNvcmQ6IHRyYW5zY3JpcHQsXG4gICAgICAgICAgc3JjOiBjb25maWcuZmNyZXBvQmFzZVBhdGggKyB0cmFuc2NyaXB0WydAaWQnXSxcbiAgICAgICAgICB0eXBlOiAndHJhbnNjcmlwdCcsXG4gICAgICAgICAgZmlsZW5hbWUgOiB0cmFuc2NyaXB0LmZpbGVuYW1lIHx8IHRyYW5zY3JpcHRbJ0BpZCddLnNwbGl0KCcvJykucG9wKCksXG4gICAgICAgICAgbGFiZWw6IHRoaXMuX2dldFR5cGVMYWJlbCh0cmFuc2NyaXB0KSArICcgKHZpZGVvIHRyYW5zY3JpcHQgb25seSknXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gc291cmNlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9nZXRUeXBlTGFiZWxcbiAgICogQGRlc2NyaXB0aW9uIGdldCBhIG5pY2UgbGFiZWwgZm9yIGEgbWVkaWEgdHlwZS4gIFVzZXMgdGhlIGVuY29kaW5nRm9ybWF0IG9yIGZpbGVGb3JtYXQsIHNwbGl0cyBhcGFydFxuICAgKiBtaW1lIHR5cGUgYW5kIHRha2VzIHNlY29uZCBhcmcgKHBhcnQgYWZ0ZXIgc2xhc2gpLiAgRmFsbHMgYmFjayBvbiBmaWxlIGV4dGVuc2lvbiBpZiBub3QgZW5jb2RpbmdGb3JtYXRcbiAgICogb3IgZmlsZUZvcm1hdCBpcyBwcm92aWRlZC5cbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmQgZmlsZSBtZWRpYSByZWNvcmRcbiAgICogXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBfZ2V0VHlwZUxhYmVsKHJlY29yZCkge1xuICAgIGxldCB0eXBlID0gcmVjb3JkLmVuY29kaW5nRm9ybWF0IHx8IHJlY29yZC5maWxlRm9ybWF0O1xuICAgIGlmKCB0eXBlICkgcmV0dXJuIHR5cGUuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICByZXR1cm4gcmVjb3JkWydAaWQnXS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykucG9wKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25DaGFuZ2VEb3dubG9hZE9wdGlvbnNcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGRvd25sb2FkIG9wdGlvbnMgc2VsZWN0IGVsZW1lbnQgb24tY2hhbmdlIGV2ZW50XG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBcbiAgICovXG4gIF9vbkNoYW5nZURvd25sb2FkT3B0aW9ucyhlKSB7XG4gICAgbGV0IHNvdXJjZSA9IHRoaXMuZG93bmxvYWRPcHRpb25zW3BhcnNlSW50KGUuY3VycmVudFRhcmdldC52YWx1ZSldO1xuXG4gICAgaWYoIHNvdXJjZS50eXBlID09PSAnaW1hZ2UnICkge1xuICAgICAgdGhpcy5fcmVuZGVySW1nRm9ybWF0cyhzb3VyY2UucmVjb3JkLCB0aGlzLiQuZm9ybWF0LnZhbHVlLCBzb3VyY2UuaW1hZ2VUeXBlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXREb3dubG9hZEhyZWYoc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJJbWdGb3JtYXRzXG4gICAqIEBwcml2YXRlXG4gICAqIEBkZXNjcmlwdGlvbiByZW5kZXIgaW1hZ2UgZm9ybWF0cyBzZWxlY3QgZWxlbWVudCBiYXNlZCBvZiBzdGF0aWMgZm9ybWF0IFxuICAgKiBsaXN0IGFuZCBhZGRpdGlvbmFsIG5hdGl2ZSBmb3JtYXQgaWYgbm90IGluIGxpc3QgYW5kIHNpemUgaXMgYXRcbiAgICogZnVsbCByZXNvbHV0aW9uLlxuICAgKi9cbiAgX3JlbmRlckltZ0Zvcm1hdHMoaW1hZ2VSZWNvcmQsIHNlbGVjdGVkRm9ybWF0LCBzZWxlY3RlZFNpemUpIHtcbiAgICBsZXQgb3JpZ2luYWxGb3JtYXQgPSB0aGlzLl9nZXRJbWFnZUZvcm1hdChpbWFnZVJlY29yZCk7XG4gICAgaWYoICFzZWxlY3RlZEZvcm1hdCApIHNlbGVjdGVkRm9ybWF0ID0gb3JpZ2luYWxGb3JtYXQ7XG5cbiAgICBsZXQgZm9ybWF0cyA9IGNvbmZpZy5pbWFnZURvd25sb2FkLmZvcm1hdHMuc2xpY2UoMCk7XG4gICAgaWYoIGZvcm1hdHMuaW5kZXhPZihvcmlnaW5hbEZvcm1hdCkgPT09IC0xICYmIHNlbGVjdGVkU2l6ZSA9PT0gJ0ZSJyApIHtcbiAgICAgIGZvcm1hdHMucHVzaChvcmlnaW5hbEZvcm1hdCk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtYXRzID0gZm9ybWF0cztcbiAgICB0aGlzLiQuZm9ybWF0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgdGhpcy5mb3JtYXRzLmZvckVhY2goZm9ybWF0ID0+IHtcbiAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBmb3JtYXQgKyAoKGZvcm1hdCA9PT0gb3JpZ2luYWxGb3JtYXQgJiYgc2VsZWN0ZWRTaXplID09PSAnRlInKSA/ICcgKG5hdGl2ZSknIDogJycpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gZm9ybWF0O1xuXG4gICAgICBpZiAoZm9ybWF0ID09PSBzZWxlY3RlZEZvcm1hdCkge1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLiQuZm9ybWF0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZ2V0SW1hZ2VGb3JtYXRcbiAgICogQGRlc2NyaXB0aW9uIGdldCB0aGUgaW1hZ2UgZm9ybWF0LiBMb29rcyBhdCB0aGUgc2NoZW1hLm9yZyBmaWxlRm9ybWF0IHBhcmFtZXRlciBvciBmYWxscyBiYWNrIHRvIHRoZSB1cmxcbiAgICogXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBfZ2V0SW1hZ2VGb3JtYXQoaW1hZ2VSZWNvcmQpIHtcbiAgICBsZXQgb3JpZ2luYWxGb3JtYXQgPSAoaW1hZ2VSZWNvcmQuZmlsZUZvcm1hdCB8fCBpbWFnZVJlY29yZFsnQGlkJ10uc3BsaXQoJy4nKS5wb3AoKSB8fCAnJylcbiAgICAgIC5yZXBsYWNlKC8uKlxcLy8sICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGhhY2tcbiAgICBpZiggb3JpZ2luYWxGb3JtYXQgPT09ICdqcGVnJyApIG9yaWdpbmFsRm9ybWF0ID0gJ2pwZyc7XG4gICAgcmV0dXJuIG9yaWdpbmFsRm9ybWF0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uRm9ybWF0U2VsZWN0ZWRcbiAgICogQHByaXZhdGVcbiAgICogQGRlc2NyaXB0aW9uIHdoZW4gYSBmb3JtYXQgaXMgc2VsZWN0ZWQsIHJlbmRlciB0aGUgZG93bmxvYWQgYnV0dG9uLlxuICAgKi9cbiAgX29uRm9ybWF0U2VsZWN0ZWQoKSB7XG4gICAgbGV0IHNlbGVjdGVkRm9ybWF0ID0gdGhpcy4kLmZvcm1hdC52YWx1ZS5yZXBsYWNlKC8gLiovLCAnJyk7XG4gICAgbGV0IHNvdXJjZSA9IHRoaXMuZG93bmxvYWRPcHRpb25zW3BhcnNlSW50KHRoaXMuJC5kb3dubG9hZE9wdGlvbnMudmFsdWUpXTtcbiAgICB0aGlzLl9yZW5kZXJJbWdGb3JtYXRzKHNvdXJjZS5yZWNvcmQsIHNlbGVjdGVkRm9ybWF0LCBzb3VyY2UuaW1hZ2VUeXBlKTtcbiAgICB0aGlzLl9zZXREb3dubG9hZEhyZWYoc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF90b2dnbGVNdWx0aXBsZURvd25sb2FkXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byByYWRpbyBidXR0b25zIGNsaWNrIGV2ZW50XG4gICAqL1xuICBfdG9nZ2xlTXVsdGlwbGVEb3dubG9hZCgpIHtcbiAgICB0aGlzLmZ1bGxTZXRTZWxlY3RlZCA9IHRoaXMuJC5mdWxsc2V0LmNoZWNrZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5fc2V0WmlwUGF0aHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zZXRaaXBQYXRoc1xuICAgKiBAZGVzY3JpcHRpb24gc2V0IHRoZSBmdWxsc2V0L3ppcCBmb3JtIGVsZW1lbnRzLlxuICAgKi9cbiAgX3NldFppcFBhdGhzKCkge1xuICAgIGxldCB1cmxzID0ge307XG4gICAgdGhpcy56aXBOYW1lID0gdGhpcy5yb290UmVjb3JkLm5hbWUucmVwbGFjZSgvW15hLXpBLVowLTldL2csICctJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBzb3VyY2VzID0gdGhpcy5fZ2V0QWxsTmF0aXZlRG93bmxvYWRTb3VyY2VzKCk7XG5cbiAgICBmb3IoIGxldCBzb3VyY2Ugb2Ygc291cmNlcyApIHtcbiAgICAgIHVybHNbc291cmNlLmZpbGVuYW1lXSA9IHNvdXJjZS5zcmM7XG4gICAgfVxuXG4gICAgdGhpcy4kLnppcFBhdGhzLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodXJscyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZ2V0QWxsTmF0aXZlRG93bmxvYWRTb3VyY2VzXG4gICAqIEBkZXNjcmlwdGlvbiBmb3IgdGhlIGN1cnJlbnQgcm9vdCByZWNvcmQsIHJldHVybiBhbGwgbWVkaWEgcmVjb3JkcyB0aGF0IGFyZVxuICAgKiBhdmFpbGFibGUgZm9yIGRvd25sb2FkLiAgTm90ZSwgZm9yIGltYWdlcywgdGhlcmUgaXMgb25seSBvbmx5IHJlY29yZCBwZXIgaW1hZ2UsXG4gICAqIHRoZSBuYXRpdmUgZm9ybWF0LlxuICAgKiBcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBfZ2V0QWxsTmF0aXZlRG93bmxvYWRTb3VyY2VzKCkge1xuICAgIGxldCBzb3VyY2VzID0gW107XG4gICAgZm9yKCBsZXQgdHlwZSBpbiB0aGlzLnJvb3RSZWNvcmQubWVkaWEgKSB7XG4gICAgICBmb3IoIGxldCBtZWRpYSBvZiB0aGlzLnJvb3RSZWNvcmQubWVkaWFbdHlwZV0gKSB7XG4gICAgICAgIHNvdXJjZXMgPSBzb3VyY2VzLmNvbmNhdCh0aGlzLl9nZXREb3dubG9hZFNvdXJjZXMobWVkaWEsIHRydWUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZXM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZG93bmxvYWRaaXBcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGRvd25sb2FkIHNldCBidXR0b24gY2xpY2sgZXZlbnRcbiAgICovXG4gIF9vbkRvd25sb2FkRnVsbFNldENsaWNrZWQoKSB7XG4gICAgdGhpcy4kLmRvd25sb2FkWmlwLnN1Ym1pdCgpO1xuXG4gICAgbGV0IHBhdGggPSB0aGlzLnJvb3RSZWNvcmRbJ0BpZCddLnJlcGxhY2UoY29uZmlnLmZjcmVwb0Jhc2VQYXRoLCAnJyk7XG4gICAgZ3RhZygnZXZlbnQnLCAnZG93bmxvYWQnLCB7XG4gICAgICAnZXZlbnRfY2F0ZWdvcnknOiAnZnVsbHNldCcsXG4gICAgICAnZXZlbnRfbGFiZWwnOiBwYXRoLFxuICAgICAgJ3ZhbHVlJzogMVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uRG93bmxvYWRDbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBkb3dubG9hZCBidXR0b24gY2xpY2sgZXZlbnQsIHJlY29yZCBhbmFseXRpY3NcbiAgICovXG4gIF9vbkRvd25sb2FkQ2xpY2tlZCgpIHtcbiAgICBsZXQgcGF0aCA9IHRoaXMuaHJlZi5yZXBsYWNlKGNvbmZpZy5mY3JlcG9CYXNlUGF0aCwgJycpO1xuXG4gICAgZ3RhZygnZXZlbnQnLCAnZG93bmxvYWQnLCB7XG4gICAgICAnZXZlbnRfY2F0ZWdvcnknOiB0aGlzLnNvdXJjZVR5cGUsXG4gICAgICAnZXZlbnRfbGFiZWwnOiBwYXRoLFxuICAgICAgJ3ZhbHVlJzogMVxuICAgIH0pO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtbWVkaWEtZG93bmxvYWQnLCBBcHBNZWRpYURvd25sb2FkKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlIGluY2x1ZGU9XFxcInNoYXJlZC1zdHlsZXNcXFwiPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5sYXlvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmxheW91dCA+ICoge1xcbiAgICBmbGV4IDogMTtcXG4gIH1cXG5cXG4gIGgyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIH1cXG48L3N0eWxlPlxcblxcbjxpcm9uLW1lZGlhLXF1ZXJ5IHF1ZXJ5PVxcXCIobWF4LXdpZHRoOiA5MDBweClcXFwiIHF1ZXJ5LW1hdGNoZXM9XFxcInt7bW9iaWxlfX1cXFwiPjwvaXJvbi1tZWRpYS1xdWVyeT5cXG5cXG48YXBwLXRhYnMgXFxuICB0YWJzPVxcXCJbW3RhYnNdXVxcXCIgXFxuICBzZWxlY3RlZD1cXFwie3tzZWxlY3RlZFRhYn19XFxcIiBcXG4gIGhpZGRlbiQ9XFxcIltbIW1vYmlsZV1dXFxcIj5cXG48L2FwcC10YWJzPlxcblxcbjxkaXYgY2xhc3M9XFxcImxheW91dFxcXCI+XFxuICA8ZGl2IGhpZGRlbiQ9XFxcIltbIXNob3dMZWZ0XV1cXFwiPlxcbiAgICA8aDI+SXRlbSBEYXRhPC9oMj5cXG4gICAgPHNsb3QgbmFtZT1cXFwibGVmdFxcXCI+PC9zbG90PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGhpZGRlbiQ9XFxcIltbIXNob3dSaWdodF1dXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOiAxMDB2dztcXFwiPlxcbiAgICA8aDI+Q2l0ZSB0aGlzIEl0ZW08L2gyPlxcbiAgICA8c2xvdCBuYW1lPVxcXCJyaWdodFxcXCI+PC9zbG90PlxcbiAgPC9kaXY+XFxuPC9kaXY+XCI7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vYXBwLXJlY29yZC1tZXRhZGF0YS1sYXlvdXQuaHRtbFwiO1xuXG4vLyBpbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYnNcIlxuLy8gaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWJcIlxuaW1wb3J0IFwiLi4vLi4vdXRpbHMvYXBwLXRhYnNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24tcGFnZXMvaXJvbi1wYWdlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1tZWRpYS1xdWVyeS9pcm9uLW1lZGlhLXF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFJlY29yZE1ldGFkYXRhTGF5b3V0IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vYmlsZSA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyIDogJ191cGRhdGVWaXNpYmxlUGFuZWxzJ1xuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkVGFiIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6ICdkYXRhJyxcbiAgICAgICAgb2JzZXJ2ZXIgOiAnX3VwZGF0ZVZpc2libGVQYW5lbHMnXG4gICAgICB9LFxuICAgICAgc2hvd1JpZ2h0IDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiB0cnVlXG4gICAgICB9LFxuICAgICAgc2hvd0xlZnQgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IHRydWVcbiAgICAgIH0sXG4gICAgICB0YWJzIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW1xuICAgICAgICAgIHtsYWJlbCA6ICdJdGVtIERhdGEnLCB2YWx1ZTogJ2RhdGEnfSxcbiAgICAgICAgICB7bGFiZWwgOiAnQ2l0ZSBJdGVtJywgdmFsdWU6ICdjaXRlJ31cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfdXBkYXRlVmlzaWJsZVBhbmVsc1xuICAgKiBAZGVzY3JpcHRpb24gY2FsbGVkIHdoZW4gYG1vYmlsZWAgb3IgYHNlbGVjdGVkVGFiYCBwcm9wZXJ0eSBpcyB1cGRhdGVkXG4gICAqIFNldCB0aGUgY29ycmVjdCBwYW5lbCB0byBkaXNwbGF5LlxuICAgKi9cbiAgX3VwZGF0ZVZpc2libGVQYW5lbHMoKSB7XG4gICAgdGhpcy5zaG93UmlnaHQgPSB0cnVlO1xuICAgIHRoaXMuc2hvd0xlZnQgPSB0cnVlO1xuXG4gICAgaWYoICF0aGlzLm1vYmlsZSApIHJldHVybjtcbiAgICBcbiAgICBpZiggdGhpcy5zZWxlY3RlZFRhYiA9PT0gJ2RhdGEnICkgdGhpcy5zaG93UmlnaHQgPSBmYWxzZTtcbiAgICBlbHNlIHRoaXMuc2hvd0xlZnQgPSBmYWxzZTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXJlY29yZC1tZXRhZGF0YS1sYXlvdXQnLCBBcHBSZWNvcmRNZXRhZGF0YUxheW91dCk7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSBpbmNsdWRlPVxcXCJzaGFyZWQtc3R5bGVzXFxcIj5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cGVyLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgfVxcblxcbiAgLypcXG4gIGFwcC1tZWRpYS12aWV3ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAqL1xcblxcbiAgLmNvbnRhaW5lci50b3Age1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMzhweDtcXG4gIH1cXG5cXG4gIC5jb3B5QnV0dG9uIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICB3aWR0aDogODVweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1ib2xkKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAuY29weUJ1dHRvblthY3RpdmVdIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgfVxcbiAgLmNvcHlCdXR0b25bYWN0aXZlXSBzcGFuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIGgzIHtcXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbiAgICAvKiBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTsgKi9cXG4gIH1cXG5cXG4gIC5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1ib2xkKTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAuc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICB9XFxuICAuc2VjdGlvbi5ib3JkZXJlZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLW1lZGl1bS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5vdmVydmlldyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5vdmVydmlldyA+IGRpdiB7XFxuICAgIGZsZXggOiAxO1xcbiAgICBwYWRkaW5nIDogMCAxMHB4O1xcbiAgfVxcblxcbiAgLnR5cGUtZGF0ZS1jb2xsZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gIH1cXG5cXG4gIC5yZXNvdXJjZS10eXBlIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB9XFxuICAucmVzb3VyY2UtdHlwZSBpcm9uLWljb24ge1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIHBhcGVyLXRvYXN0IHtcXG4gICAgLS1wYXBlci10b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIC0tcGFwZXItdG9hc3QtY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAjZGVzY3JpcHRpb25WYWx1ZSBwLFxcbiAgI2Rlc2NyaXB0aW9uVmFsdWUgaDEsXFxuICAjZGVzY3JpcHRpb25WYWx1ZSBoMixcXG4gICNkZXNjcmlwdGlvblZhbHVlIGgzIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG5cXG4gICNsaW5rIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICAubWV0YWRhdGEtcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAzMHB4IDIwcHg7XFxuICB9XFxuICAubWV0YWRhdGEtcm93IC5hdHRyIHtcXG4gICAgZmxleDogMC4yNTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1ib2xkKTsgXFxuICB9XFxuICAubWV0YWRhdGEtcm93IC52YWx1ZSB7XFxuICAgIGZsZXg6IDAuNzU7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB9XFxuXFxuICAuY2l0ZS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxuICAgIG1hcmdpbjogMCAxNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLW1lZGl1bS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5jaXRlLWNvbnRhaW5lciAubGFiZWwge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBmbGV4OiAwLjI1O1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpOyBcXG4gIH1cXG4gIC5jaXRlLWNvbnRhaW5lciAudGV4dCB7XFxuICAgIGZsZXg6IDAuNzU7XFxuICB9XFxuXFxuICAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmZjLWJyZWFrIHtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgLnJpZ2h0cyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtcCk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB9XFxuXFxuICAucmlnaHRzLWJyZWFrIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICB9XFxuXFxuICBpbWdbcmlnaHRzXSB7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XFxuICB9XFxuXFxuICBAbWVkaWEoIG1heC13aWR0aDogNTUwcHggKSB7XFxuICAgIC5tZXRhZGF0YS1yb3cge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEoIG1heC13aWR0aDogNzY4cHggKSB7XFxuICAgIC5vdmVydmlldyB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgLmNpdGUtY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwYWRkaW5nOiAxNXB4IDAgMTVweCAxNXB4O1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbiAgICAudHlwZS1kYXRlLWNvbGxlY3Rpb24ge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC50eXBlLWRhdGUtY29sbGVjdGlvbiA+IGRpdiB7XFxuICAgICAgbWFyZ2luOiAxNXB4IDVweDtcXG4gICAgfVxcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGFwcC1tZWRpYS12aWV3ZXI+PC9hcHAtbWVkaWEtdmlld2VyPlxcblxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciB0b3BcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwib3ZlcnZpZXdcXFwiPlxcbiAgICA8ZGl2PlxcbiAgICAgIDxoMz5bW25hbWVdXTwvaDM+XFxuICAgICAgXFxuICAgICAgPGRpdiBoaWRkZW4kPVxcXCJbWyFhbHRlcm5hdGl2ZUhlYWRsaW5lXV1cXFwiIGNsYXNzPVxcXCJzZWN0aW9uXFxcIj5cXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkO1xcXCI+W1thbHRlcm5hdGl2ZUhlYWRsaW5lXV08L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGhpZGRlbiQ9XFxcIltbIXJpZ2h0c11dXFxcIiBjbGFzcz1cXFwicmlnaHRzXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJpZ2h0cy1icmVha1xcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICA8YSBocmVmJD1cXFwiW1tyaWdodHMubGlua11dXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmMkPVxcXCJbW3JpZ2h0cy5pY29uXV1cXFwiIHJpZ2h0cyAvPiZuYnNwO1xcbiAgICAgICAgICAgIDxzcGFuPltbcmlnaHRzLmxhYmVsXV08L3NwYW4+XFxuICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdj5cXG4gICAgICA8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyXFxcIiBjbGFzcz1cXFwic2VjdGlvbiBib3JkZXJlZFxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwibGFiZWxcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLXJpZ2h0OiAxMHB4OyBkaXNwbGF5OmlubGluZS1ibG9ja1xcXCI+UGVybWFsaW5rPC9zcGFuPlxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwiZmxleDoxXFxcIj5cXG4gICAgICAgICAgPGlucHV0IGlkPVxcXCJsaW5rXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJfY29weUxpbmtcXFwiIGlkPVxcXCJjb3B5QnV0dG9uXFxcIiBjbGFzcz1cXFwiY29weUJ1dHRvblxcXCI+XFxuICAgICAgICAgIDxpcm9uLWljb24gaWNvbj1cXFwiY29udGVudC1jb3B5XFxcIiBpZD1cXFwiY29weUljb25cXFwiPjwvaXJvbi1pY29uPlxcbiAgICAgICAgICA8c3Bhbj5Db3B5PC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYWJlbFxcXCI+RG93bmxvYWQ8L2Rpdj5cXG4gICAgICAgIDxhcHAtbWVkaWEtZG93bmxvYWQgaWQ9XFxcImRvd25sb2FkXFxcIiBoaWRkZW4kPVxcXCJbW2lzQmFnT2ZGaWxlc11dXFxcIj48L2FwcC1tZWRpYS1kb3dubG9hZD5cXG4gICAgICAgIDxhcHAtZnMtbWVkaWEtZG93bmxvYWQgaWQ9XFxcImRvd25sb2FkXFxcIiBoaWRkZW4kPVxcXCJbWyFpc0JhZ09mRmlsZXNdXVxcXCI+PC9hcHAtZnMtbWVkaWEtZG93bmxvYWQ+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+PCEtLSBlbmQgb3ZlcnZpZXcgLS0+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiBzdHlsZT1cXFwicGFkZGluZy1ib3R0b206IDUwcHhcXFwiPlxcbiAgPGFwcC1yZWNvcmQtbWV0YWRhdGEtbGF5b3V0PlxcbiAgICA8ZGl2IHNsb3Q9XFxcImxlZnRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1ldGFkYXRhLXJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhdHRyXFxcIj5Db2xsZWN0aW9uPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2YWx1ZVxcXCIgaWQ9XFxcImNvbGxlY3Rpb25WYWx1ZVxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWV0YWRhdGEtcm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImF0dHJcXFwiPkRhdGU8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInZhbHVlXFxcIiBpZD1cXFwiZGF0ZVZhbHVlXFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtZXRhZGF0YS1yb3dcXFwiIGlkPVxcXCJwdWJsaXNoZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXR0clxcXCI+UHVibGlzaGVyPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2YWx1ZVxcXCIgaWQ9XFxcInB1Ymxpc2hlclZhbHVlXFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtZXRhZGF0YS1yb3dcXFwiIGlkPVxcXCJzdWJqZWN0XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImF0dHJcXFwiPlN1YmplY3Q8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInZhbHVlXFxcIiBpZD1cXFwic3ViamVjdFZhbHVlXFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtZXRhZGF0YS1yb3dcXFwiIGlkPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhdHRyXFxcIj5EZXNjcmlwdGlvbjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidmFsdWVcXFwiIGlkPVxcXCJkZXNjcmlwdGlvblZhbHVlXFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtZXRhZGF0YS1yb3dcXFwiIGlkPVxcXCJjYWxsTnVtYmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImF0dHJcXFwiPkNhbGwgTnVtYmVyPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2YWx1ZVxcXCIgaWQ9XFxcImNhbGxOdW1iZXJWYWx1ZVxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWV0YWRhdGEtcm93XFxcIiBpZD1cXFwiaWRlbnRpZmllclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhdHRyXFxcIj5BUksgLyBET0k8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInZhbHVlXFxcIiBpZD1cXFwiaWRlbnRpZmllclZhbHVlXFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtZXRhZGF0YS1yb3dcXFwiIGlkPVxcXCJjcmVhdG9yXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImF0dHJcXFwiPkNyZWF0b3I8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInZhbHVlXFxcIiBpZD1cXFwiY3JlYXRvclZhbHVlXFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtZXRhZGF0YS1yb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXR0clxcXCI+RmVkb3JhIExpbms8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInZhbHVlXFxcIiBpZD1cXFwiZmVkb3JhVmFsdWVcXFwiPjwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgXFxuICAgIDxkaXYgc2xvdD1cXFwicmlnaHRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNpdGUtY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxhYmVsXFxcIj5NTEE8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHRcXFwiPlxcbiAgICAgICAgICA8YXBwLWNvcHktY2l0ZSBpZD1cXFwibWxhXFxcIj48L2FwcC1jb3B5LWNpdGU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjaXRlLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYWJlbFxcXCI+QVBBPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0XFxcIj5cXG4gICAgICAgICAgPGFwcC1jb3B5LWNpdGUgaWQ9XFxcImFwYVxcXCI+PC9hcHAtY29weS1jaXRlPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2l0ZS1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFiZWxcXFwiPkNoaWNhZ288L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHRcXFwiPlxcbiAgICAgICAgICA8YXBwLWNvcHktY2l0ZSBpZD1cXFwiY2hpY2Fnb1xcXCI+PC9hcHAtY29weS1jaXRlPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgXFxuICAgIDwvZGl2PlxcbiAgPC9hcHAtcmVjb3JkLW1ldGFkYXRhLWxheW91dD5cXG48L2Rpdj5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IHttYXJrZG93bn0gZnJvbSBcIm1hcmtkb3duXCJcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1yZWNvcmQuaHRtbFwiXG5pbXBvcnQgcmlnaHRzRGVmaW5pdGlvbnMgZnJvbSBcIi4uLy4uLy4uL2xpYi9yaWdodHMuanNvblwiXG5pbXBvcnQgY2l0YXRpb25zIGZyb20gXCIuLi8uLi8uLi9saWIvbW9kZWxzL0NpdGF0aW9uc01vZGVsXCJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCJcblxuaW1wb3J0IFwiLi9hcHAtbWVkaWEtZG93bmxvYWRcIlxuaW1wb3J0IFwiLi9hcHAtZnMtbWVkaWEtZG93bmxvYWRcIlxuaW1wb3J0IFwiLi9hcHAtcmVjb3JkLW1ldGFkYXRhLWxheW91dFwiXG5pbXBvcnQgXCIuL2FwcC1jb3B5LWNpdGVcIlxuaW1wb3J0IFwiLi92aWV3ZXIvYXBwLW1lZGlhLXZpZXdlclwiXG5cbmltcG9ydCBDb2xsZWN0aW9uSW50ZXJmYWNlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0NvbGxlY3Rpb25JbnRlcmZhY2VcIlxuaW1wb3J0IE1lZGlhSW50ZXJmYWNlIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL01lZGlhSW50ZXJmYWNlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwUmVjb3JkIGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gICAgICAud2l0aChFdmVudEludGVyZmFjZSwgQ29sbGVjdGlvbkludGVyZmFjZSwgTWVkaWFJbnRlcmZhY2UpIHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50UmVjb3JkSWQgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBuYW1lIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgY29sbGVjdGlvbk5hbWUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlIDogJydcbiAgICAgIH0sXG4gICAgICBkYXRlIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnXG4gICAgICB9LFxuICAgICAgc2l6ZSA6IHtcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcbiAgICAgICAgdmFsdWUgOiAnJ1xuICAgICAgfSxcbiAgICAgIHJpZ2h0cyA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiB7fVxuICAgICAgfSxcbiAgICAgIG1ldGFkYXRhIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW11cbiAgICAgIH0sXG4gICAgICBpc0JhZ09mRmlsZXMgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnKTtcbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnUmVjb3JkTW9kZWwnKTtcbiAgfVxuXG4gIGFzeW5jIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICBsZXQgc2VsZWN0ZWRSZWNvcmQgPSBhd2FpdCB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0U2VsZWN0ZWRSZWNvcmQoKTtcbiAgICBpZiggc2VsZWN0ZWRSZWNvcmQgKSB7XG4gICAgICBhd2FpdCB0aGlzLl9vblNlbGVjdGVkUmVjb3JkVXBkYXRlKHNlbGVjdGVkUmVjb3JkKTtcbiAgICAgIGxldCBzZWxlY3RlZFJlY29yZE1lZGlhID0gYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkTWVkaWEoKTtcbiAgICAgIGlmKCBzZWxlY3RlZFJlY29yZE1lZGlhICkgdGhpcy5fb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKHNlbGVjdGVkUmVjb3JkTWVkaWEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblJlY29yZFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBSZWNvcmRNb2RlbCwgbGlzdGVuIGZvciBsb2FkaW5nIGV2ZW50cyBhbmQgcmVzZXQgVUkuXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBzdGF0ZSBldmVudCBcbiAgICovXG4gIF9vblJlY29yZFVwZGF0ZShlKSB7XG4gICAgaWYoIGUuc3RhdGUgIT09ICdsb2FkaW5nJyApIHJldHVybjtcblxuICAgIHRoaXMucmVuZGVyZWRSZWNvcmRJZCA9IG51bGw7XG4gICAgdGhpcy5yZWNvcmQgPSBudWxsO1xuICAgIHRoaXMuJC5kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gJyc7XG4gICAgdGhpcy5hbHRlcm5hdGl2ZUhlYWRsaW5lID0gJyc7XG4gICAgdGhpcy4kLmxpbmsudmFsdWUgPSAnJztcbiAgICB0aGlzLmRhdGUgPSAnJztcbiAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gJyc7XG4gICAgdGhpcy5yaWdodHMgPSBudWxsO1xuICAgIHRoaXMuJC5jb2xsZWN0aW9uVmFsdWUuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy4kLm1sYS50ZXh0ID0gJyc7XG4gICAgdGhpcy4kLmFwYS50ZXh0ID0gJyc7XG4gICAgdGhpcy4kLmNoaWNhZ28udGV4dCA9ICcnO1xuICAgIHRoaXMuJC5pZGVudGlmaWVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRoaXMuJC5jcmVhdG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRoaXMuJC5zdWJqZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRoaXMuJC5wdWJsaXNoZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgdGhpcy4kLmZlZG9yYVZhbHVlLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMubWV0YWRhdGEgPSBbXTtcbiAgICB0aGlzLmlzQmFnT2ZGaWxlcyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VsZWN0ZWRSZWNvcmRVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGZyb20gQXBwU3RhdGVJbnRlcmZhY2UsIGNhbGxlZCB3aGVuIGEgcmVjb3JkIGlzIHNlbGVjdGVkXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkIHNlbGVjdGVkIHJlY29yZFxuICAgKi9cbiAgYXN5bmMgX29uU2VsZWN0ZWRSZWNvcmRVcGRhdGUocmVjb3JkKSB7XG4gICAgaWYoICFyZWNvcmQgKSByZXR1cm47XG4gICAgaWYoIHJlY29yZFsnQGlkJ10gJiYgcmVjb3JkWydAaWQnXSA9PT0gdGhpcy5yZW5kZXJlZFJlY29yZElkICkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZW5kZXJlZFJlY29yZElkID0gcmVjb3JkWydAaWQnXTtcbiAgICB0aGlzLnJlY29yZCA9IHJlY29yZDtcblxuICAgIGlmKCB0aGlzLnJlY29yZC5kZXNjcmlwdGlvbiApIHtcbiAgICAgIHRoaXMuJC5kZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMuJC5kZXNjcmlwdGlvblZhbHVlLmlubmVySFRNTCA9IG1hcmtkb3duLnRvSFRNTCh0aGlzLnJlY29yZC5kZXNjcmlwdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy5yZWNvcmQuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgdGhpcy5hbHRlcm5hdGl2ZUhlYWRsaW5lID0gdGhpcy5yZWNvcmQuYWx0ZXJuYXRpdmVIZWFkbGluZSB8fCAnJztcbiAgICB0aGlzLiQubGluay52YWx1ZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG4gICAgdGhpcy4kLmRhdGVWYWx1ZS5pbm5lckhUTUwgPSB0aGlzLnJlY29yZC5kYXRlUHVibGlzaGVkIHx8ICdVbmRhdGVkJztcblxuICAgIC8vIFRPRE86IGFkZCBiYWNrIGluIHdoZW4gd2UgZmlndXJlIG91dCBjb25zb2xpZGF0ZWQgcmVzb3VyY2UgdHlwZSBcbiAgICAvLyB0aGlzLiQucmVzb3VyY2VUeXBlLmlubmVySFRNTCA9IHRoaXMucmVjb3JkLnR5cGUgPyAnPGRpdj4nK3RoaXMucmVjb3JkLnR5cGUuam9pbignPC9kaXY+PGRpdj4nKSsnPC9kaXY+JyA6ICdVbmtub3duJztcbiAgICBpZiggdGhpcy5yZWNvcmQubGljZW5zZSAmJlxuICAgICAgICB0aGlzLnJlY29yZC5saWNlbnNlWydAaWQnXSAmJiBcbiAgICAgICAgcmlnaHRzRGVmaW5pdGlvbnNbdGhpcy5yZWNvcmQubGljZW5zZVsnQGlkJ11dICkge1xuXG4gICAgICBsZXQgZGVmID0gcmlnaHRzRGVmaW5pdGlvbnNbdGhpcy5yZWNvcmQubGljZW5zZVsnQGlkJ11dO1xuICAgICAgdGhpcy5yaWdodHMgPSB7XG4gICAgICAgIGxpbmsgOiB0aGlzLnJlY29yZC5saWNlbnNlWydAaWQnXSxcbiAgICAgICAgbGFiZWwgOiBkZWYudGV4dC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBpY29uIDogYC9pbWFnZXMvcmlnaHRzLWljb25zLyR7ZGVmLmljb259LnN2Z2BcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yaWdodHMgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuY29sbGVjdGlvbk5hbWUgPSB0aGlzLnJlY29yZC5jb2xsZWN0aW9uSWQgfHwgJyc7XG4gICAgaWYoIHRoaXMuY29sbGVjdGlvbk5hbWUgKSB7XG4gICAgICBsZXQgY29sbGVjdGlvbiA9IGF3YWl0IHRoaXMuX2dldENvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uTmFtZSk7XG4gICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbi5uYW1lO1xuICAgICAgdGhpcy5yZWNvcmQuY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uLm5hbWU7XG4gICAgfVxuXG4gICAgLy8gQXR0YWNoIGEgcmVjb2QgdG8gdGhlIGRvd25sb2FkIG9wdGlvbnNcbiAgICAvLyB0aGlzLiQuZG93bmxvYWQuc2V0Um9vdFJlY29yZChyZWNvcmQpO1xuXG4gICAgLy8gZmluZCBhcmtzIG9yIGRvaVxuICAgIHRoaXMuX3JlbmRlcklkZW50aWZpZXIocmVjb3JkKTtcbiAgICB0aGlzLl9yZW5kZXJDcmVhdG9ycyhyZWNvcmQpO1xuICAgIHRoaXMuX3JlbmRlclN1YmplY3RzKHJlY29yZCk7XG4gICAgdGhpcy5fcmVuZGVyUHVibGlzaGVyKHJlY29yZCk7XG5cbiAgICAvLyBzZXQgY29sbGVjdGlvbiBsaW5rXG4gICAgdGhpcy4kLmNvbGxlY3Rpb25WYWx1ZS5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiR7cmVjb3JkLmNvbGxlY3Rpb25JZH1cIj4ke3RoaXMuY29sbGVjdGlvbk5hbWV9PC9hPmA7XG5cbiAgICAvLyBzZXQgZmVkb3JhIGNvbGxlY3Rpb24gbGlua1xuICAgIHRoaXMuX3JlbmRlckZjTGluayhyZWNvcmQpO1xuXG4gICAgLy8gdGhpcy5fdXBkYXRlTWV0YWRhdGFSb3dzKCk7XG4gICAgLy8gdGhpcy5fc2V0VGFySHJlZigpO1xuXG4gICAgLy8gcmVuZGVyIGNpdGF0aW9ucy4uIHRoaXMgbWlnaHQgbmVlZCB0byBsb2FkIGxpYnJhcnksIGRvIGl0IGxhc3RcbiAgICB0aGlzLiQubWxhLnRleHQgPSBhd2FpdCBjaXRhdGlvbnMucmVuZGVyRXNSZWNvcmQodGhpcy5yZWNvcmQsICdtbGEnKTtcbiAgICB0aGlzLiQuYXBhLnRleHQgPSBhd2FpdCBjaXRhdGlvbnMucmVuZGVyRXNSZWNvcmQodGhpcy5yZWNvcmQsICdhcGEnKTtcbiAgICB0aGlzLiQuY2hpY2Fnby50ZXh0ID0gYXdhaXQgY2l0YXRpb25zLnJlbmRlckVzUmVjb3JkKHRoaXMucmVjb3JkLCAnY2hpY2FnbycpO1xuXG4gICAgdGhpcy5pc0JhZ09mRmlsZXMgPSB0aGlzLnJlY29yZFsnQHR5cGUnXS5pbmNsdWRlcygnaHR0cDovL2RpZ2l0YWwudWNkYXZpcy5lZHUvc2NoZW1hI0JhZ09mRmlsZXMnKTtcbiAgfVxuXG4gIF9yZW5kZXJGY0xpbmsocmVjb3JkLCBtZWRpYSkge1xuICAgIGxldCBtZXRhZGF0YVBhcnQgPSByZWNvcmRbJ0B0eXBlJ10uZmluZCh0eXBlID0+IHR5cGUubWF0Y2goL2JpbmFyeS9pKSkgPyAnL2ZjcjptZXRhZGF0YScgOiAnJztcbiAgICBsZXQgbGluayA9IHRoaXMuX2dldEhvc3QoKSsnZmNyZXBvL3Jlc3QnK3JlY29yZFsnQGlkJ10rbWV0YWRhdGFQYXJ0O1xuICAgIGxldCBodG1sID0gYDxhIGhyZWY9XCIke2xpbmt9XCI+JHtyZWNvcmRbJ0BpZCddfTwvYT5gO1xuXG4gICAgaWYoIG1lZGlhICYmIHJlY29yZFsnQGlkJ10gIT09IG1lZGlhWydAaWQnXSApIHtcbiAgICAgIG1ldGFkYXRhUGFydCA9IG1lZGlhWydAdHlwZSddLmZpbmQodHlwZSA9PiB0eXBlLm1hdGNoKC9iaW5hcnkvaSkpID8gJy9mY3I6bWV0YWRhdGEnIDogJyc7XG4gICAgICBsaW5rID0gdGhpcy5fZ2V0SG9zdCgpKydmY3JlcG8vcmVzdCcrbWVkaWFbJ0BpZCddK21ldGFkYXRhUGFydDtcbiAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJmYy1icmVha1wiPjwvZGl2PjxkaXY+PGEgaHJlZj1cIiR7bGlua31cIj4ke21lZGlhWydAaWQnXX08L2E+PC9kaXY+YDtcbiAgICB9XG5cbiAgICB0aGlzLiQuZmVkb3JhVmFsdWUuaW5uZXJIVE1MID0gaHRtbDtcbiAgfVxuXG4gIF9yZW5kZXJTZWxlY3RlZE1lZGlhKCkge1xuICAgIGxldCBpbWFnZUxpc3QgPSB0aGlzLl9nZXRJbWFnZU1lZGlhTGlzdCh0aGlzLnJlY29yZCk7XG4gICAgaWYoIHRoaXMucmVjb3JkLmFzc29jaWF0ZWRNZWRpYSApIHsgXG4gICAgICBpZiggaW1hZ2VMaXN0Lmxlbmd0aCApIHtcblxuICAgICAgICAvLyBzZWUgaWYgdXJsIGhhcyBzZWxlY3RlZCBhbiBpbWFnZVxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBpbWFnZUxpc3RbMF07XG4gICAgICAgIGZvciggbGV0IGltZyBvZiBpbWFnZUxpc3QgKSB7XG4gICAgICAgICAgaWYoIGltZ1snQGlkJ10gPT09IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSApIHtcbiAgICAgICAgICAgIHNlbGVjdGVkID0gaW1nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldFNlbGVjdGVkUmVjb3JkTWVkaWEoc2VsZWN0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRSZWNvcmRNZWRpYSh0aGlzLnJlY29yZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFNlbGVjdGVkUmVjb3JkTWVkaWEodGhpcy5yZWNvcmQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJDcmVhdG9yc1xuICAgKiBAZGVzY3JpcHRpb24gcmVuZGVyIGNyZWF0b3IgZmllbGRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICovXG4gIF9yZW5kZXJDcmVhdG9ycyhyZWNvcmQpIHtcbiAgICAvLyBmaWx0ZXIgdG8gdGhvc2Ugdy8gbGFiZWxzXG4gICAgbGV0IGNyZWF0b3JzID0gdXRpbHMuYXNBcnJheShyZWNvcmQsICdjcmVhdG9ycycpO1xuXG4gICAgaWYoIGNyZWF0b3JzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgIHJldHVybiB0aGlzLiQuY3JlYXRvci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBsYWJlbCBpcyB1bmRlciBjcmVhdG9yLm5hbWVcbiAgICB0aGlzLiQuY3JlYXRvclZhbHVlLmlubmVySFRNTCA9IGNyZWF0b3JzIFxuICAgICAgLm1hcChjcmVhdG9yID0+IHtcbiAgICAgICAgbGV0IHNlYXJjaERvYyA9IHRoaXMuUmVjb3JkTW9kZWwuZW1wdHlTZWFyY2hEb2N1bWVudCgpO1xuICAgICAgICB0aGlzLlJlY29yZE1vZGVsLmFwcGVuZEtleXdvcmRGaWx0ZXIoc2VhcmNoRG9jLCAnY3JlYXRvcnMnLCBjcmVhdG9yKTtcbiAgICAgICAgdGhpcy5SZWNvcmRNb2RlbC5hcHBlbmRLZXl3b3JkRmlsdGVyKHNlYXJjaERvYywgJ2lzUGFydE9mLkBpZCcsIHJlY29yZC5jb2xsZWN0aW9uSWQpO1xuICAgICAgICBsZXQgbGluayA9IHRoaXMuX2dldEhvc3QoKSsnc2VhcmNoLycrdGhpcy5SZWNvcmRNb2RlbC5zZWFyY2hEb2N1bWVudFRvVXJsKHNlYXJjaERvYyk7XG4gICAgICAgIHJldHVybiBgPGEgaHJlZj1cIiR7bGlua31cIj4ke2NyZWF0b3J9PC9hPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJywgJyk7XG5cbiAgICB0aGlzLiQuY3JlYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJTdWJqZWN0c1xuICAgKiBAZGVzY3JpcHRpb24gcmVuZGVyIHN1YmplY3QgZmllbGQsIHdoaWNoIGlzIHJlYWxseSAnYWJvdXRzJyBkZXJpdmVkIGZyb20gJ3NjaGVtYTphYm91dCdcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICovXG4gIF9yZW5kZXJTdWJqZWN0cyhyZWNvcmQpIHtcbiAgICAvLyBmaWx0ZXIgdG8gdGhvc2Ugdy8gbGFiZWxzXG4gICAgbGV0IHN1YmplY3RzID0gdXRpbHMuYXNBcnJheShyZWNvcmQsICdhYm91dHMnKTtcbiAgICAvLyAuZmlsdGVyKHN1YmplY3QgPT4gc3ViamVjdC5uYW1lID8gdHJ1ZSA6IGZhbHNlKTtcblxuICAgIGlmKCBzdWJqZWN0cy5sZW5ndGggPT09IDAgKSB7XG4gICAgICByZXR1cm4gdGhpcy4kLnN1YmplY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogbGFiZWwgaXMgdW5kZXIgY3JlYXRvci5uYW1lXG4gICAgdGhpcy4kLnN1YmplY3RWYWx1ZS5pbm5lckhUTUwgPSBzdWJqZWN0cyBcbiAgICAgIC5tYXAoc3ViamVjdCA9PiB7XG4gICAgICAgIC8vIHN1YmplY3QgPSBzdWJqZWN0Lm5hbWU7XG4gICAgICAgIGxldCBzZWFyY2hEb2MgPSB0aGlzLlJlY29yZE1vZGVsLmVtcHR5U2VhcmNoRG9jdW1lbnQoKTtcbiAgICAgICAgdGhpcy5SZWNvcmRNb2RlbC5hcHBlbmRLZXl3b3JkRmlsdGVyKHNlYXJjaERvYywgJ2Fib3V0cy5yYXcnLCBzdWJqZWN0KTtcbiAgICAgICAgdGhpcy5SZWNvcmRNb2RlbC5hcHBlbmRLZXl3b3JkRmlsdGVyKHNlYXJjaERvYywgJ2lzUGFydE9mLkBpZCcsIHJlY29yZC5jb2xsZWN0aW9uSWQpO1xuICAgICAgICBsZXQgbGluayA9IHRoaXMuX2dldEhvc3QoKSsnc2VhcmNoLycrdGhpcy5SZWNvcmRNb2RlbC5zZWFyY2hEb2N1bWVudFRvVXJsKHNlYXJjaERvYyk7XG4gICAgICAgIHJldHVybiBgPGEgaHJlZj1cIiR7bGlua31cIj4ke3N1YmplY3R9PC9hPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJywgJyk7XG5cbiAgICB0aGlzLiQuc3ViamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJQdWJsaXNoZXJcbiAgICogQGRlc2NyaXB0aW9uIHJlbmRlciBwdWJsaXNoZXIgZmllbGRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICovXG4gIF9yZW5kZXJQdWJsaXNoZXIocmVjb3JkKSB7XG4gICAgLy8gZmlsdGVyIHRvIHRob3NlIHcvIGxhYmVsc1xuICAgIGxldCBwdWJsaXNoZXJzID0gdXRpbHMuYXNBcnJheShyZWNvcmQsICdwdWJsaXNoZXInKVxuICAgICAgLmZpbHRlcihwdWJsaXNoZXIgPT4gcHVibGlzaGVyLm5hbWUgPyB0cnVlIDogZmFsc2UpO1xuXG4gICAgaWYoIHB1Ymxpc2hlcnMubGVuZ3RoID09PSAwICkge1xuICAgICAgcmV0dXJuIHRoaXMuJC5wdWJsaXNoZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgdGhpcy4kLnB1Ymxpc2hlclZhbHVlLmlubmVySFRNTCA9IHB1Ymxpc2hlcnMgXG4gICAgICAubWFwKHB1Ymxpc2hlciA9PiBwdWJsaXNoZXIubmFtZSlcbiAgICAgIC5qb2luKCcsICcpO1xuXG4gICAgdGhpcy4kLnB1Ymxpc2hlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJJZGVudGlmaWVyXG4gICAqIEBkZXNjcmlwdGlvbiByZW5kZXIgYXJrL2RvaSBmaWVsZFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZCBcbiAgICovXG4gIF9yZW5kZXJJZGVudGlmaWVyKHJlY29yZCwgbWVkaWEpIHtcbiAgICBpZiggIXJlY29yZC5pZGVudGlmaWVyICkge1xuICAgICAgcmV0dXJuIHRoaXMuJC5pZGVudGlmaWVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIGxldCBpZHMgPSBBcnJheS5pc0FycmF5KHJlY29yZC5pZGVudGlmaWVyKSA/IHJlY29yZC5pZGVudGlmaWVyIDogW3JlY29yZC5pZGVudGlmaWVyXTtcbiAgICBsZXQgYXJrcyA9IGlkcy5maWx0ZXIoaWQgPT4gaWQubWF0Y2goL14oYXJrfGRvaSkvKSA/IHRydWUgOiBmYWxzZSk7XG5cbiAgICBpZiggYXJrcy5sZW5ndGggKSB7XG5cbiAgICAgIC8vIGlmIHdlIGFyZSBwYXNzZWQgYSBzZWxlY3RlZCBtZWRpYSwgYXBwZW5kIGlkZW50aWZpZXJzIGFzIHdlbGxcbiAgICAgIGlmKCBtZWRpYSAmJiBtZWRpYS5pZGVudGlmaWVyICkge1xuICAgICAgICBsZXQgbWVkaWFJZHMgPSBBcnJheS5pc0FycmF5KG1lZGlhLmlkZW50aWZpZXIpID8gbWVkaWEuaWRlbnRpZmllciA6IFttZWRpYS5pZGVudGlmaWVyXTtcbiAgICAgICAgbWVkaWFJZHMgPSBtZWRpYUlkcy5maWx0ZXIoaWQgPT4gaWQubWF0Y2goL14oYXJrfGRvaSkvKSA/IHRydWUgOiBmYWxzZSk7XG4gICAgICAgIGZvciggbGV0IGlkIG9mIG1lZGlhSWRzICkge1xuICAgICAgICAgIGlmKCBhcmtzLmluZGV4T2YoaWQpID09PSAtMSApIGFya3MucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy4kLmlkZW50aWZpZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB0aGlzLiQuaWRlbnRpZmllclZhbHVlLmlubmVySFRNTCA9IGFya3MubWFwKGlkID0+IGA8ZGl2PjxhIGhyZWY9XCIke3RoaXMuX2dldEhvc3QoKX0ke2lkfVwiPiR7aWR9PC9hPjwvZGl2PmApLmpvaW4oJycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5pZGVudGlmaWVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIGlmKCAhcmVjb3JkLmlkZW50aWZpZXJzICkge1xuICAgICAgcmV0dXJuIHRoaXMuJC5saWJMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBsZXQgY2FsbE51bWJlciA9IEFycmF5LmlzQXJyYXkocmVjb3JkLmlkZW50aWZpZXJzKSA/IHJlY29yZC5pZGVudGlmaWVycyA6IFtyZWNvcmQuaWRlbnRpZmllcnNdO1xuICAgIGNhbGxOdW1iZXIgPSBjYWxsTnVtYmVyLmZpbHRlcihpZCA9PiBpZC5tYXRjaCgvXi4qLC4qYm94Oi4qLC4qZm9sZGVyOi4qJC9pKSA/IHRydWUgOiBmYWxzZSk7XG4gICAgaWYoIGNhbGxOdW1iZXIubGVuZ3RoICkge1xuICAgICAgdGhpcy4kLmNhbGxOdW1iZXJWYWx1ZS5pbm5lckhUTUwgPSBjYWxsTnVtYmVyLm1hcChpZCA9PiBgPGRpdj4ke2lkfTwvZGl2PmApLmpvaW4oJycpXG4gICAgICB0aGlzLiQuY2FsbE51bWJlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmNhbGxOdW1iZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2dldEhvc3RcbiAgICogQGRlc2NyaXB0aW9uIGhlbHBlciBmb3IgZ2V0dGluZyBwcm90b2NvbC9ob3N0IG9mIHdpbmRvd1xuICAgKiBcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIF9nZXRIb3N0KCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wrJy8vJyt3aW5kb3cubG9jYXRpb24uaG9zdCsnLyc7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBmcm9tIEFwcFN0YXRlSW50ZXJmYWNlLCBjYWxsZWQgd2hlbiBhIHJlY29yZHMgbWVkaWEgaXMgc2VsZWN0ZWRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmQgXG4gICAqL1xuICBfb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKHJlY29yZCkge1xuICAgIC8vIGlmKCByZWNvcmQuX2hhczM2MEltYWdlTGlzdCApIHtcbiAgICAvLyAgIHRoaXMuJC5kb3dubG9hZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cblxuICAgIHRoaXMubmFtZSA9IHRoaXMucmVjb3JkLm5hbWUgfHwgJyc7XG5cbiAgICAvLyBpZiAoIXJlY29yZC5pbWFnZSkgcmV0dXJuO1xuXG4gICAgLy8gdGhpcy4kLmRvd25sb2FkLnJlbmRlcih7XG4gICAgLy8gICByZXNvbHV0aW9uIDogW3JlY29yZC5pbWFnZS53aWR0aCwgcmVjb3JkLmltYWdlLmhlaWdodF0sXG4gICAgLy8gICBmaWxlRm9ybWF0IDogcmVjb3JkLmltYWdlLmVuY29kaW5nRm9ybWF0LFxuICAgIC8vICAgc2l6ZSA6IHJlY29yZC5pbWFnZS5jb250ZW50U2l6ZSA/IHBhcnNlSW50KHJlY29yZC5pbWFnZS5jb250ZW50U2l6ZSkgOiAwLFxuICAgIC8vICAgdXJsIDogcmVjb3JkLmltYWdlLnVybFxuICAgIC8vIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVySWRlbnRpZmllcih0aGlzLnJlY29yZCwgcmVjb3JkKTtcbiAgICB0aGlzLl9yZW5kZXJGY0xpbmsodGhpcy5yZWNvcmQsIHJlY29yZCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfdXBkYXRlTWV0YWRhdGFSb3dzXG4gICAqIEBkZXNjcmlwdGlvbiB1cGRhdGUgbWV0YWRhdGEgdGFibGVcbiAgICovXG4gIC8vIF91cGRhdGVNZXRhZGF0YVJvd3MoKSB7XG4gIC8vICAgbGV0IG1ldGFkYXRhID0gW107XG5cbiAgLy8gICB0aGlzLl9hZGRNZXRhZGF0YVJvdyhtZXRhZGF0YSwgJ25hbWUnLCAnSXRlbSBOYW1lJyk7XG4gIC8vICAgdGhpcy5fYWRkTWV0YWRhdGFSb3cobWV0YWRhdGEsICdjb2xsZWN0aW9uTmFtZScsICdDb2xsZWN0aW9uJyk7XG4gIC8vICAgdGhpcy5fYWRkTWV0YWRhdGFSb3cobWV0YWRhdGEsICdkYXRlJywgJ0RhdGUnKTtcbiAgLy8gICB0aGlzLl9hZGRNZXRhZGF0YVJvdyhtZXRhZGF0YSwgJ3Jlc291cmNlVHlwZScsICdSZXNvdXJjZSBUeXBlJyk7XG5cbiAgLy8gICB0aGlzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4gIC8vIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfYWRkTWV0YWRhdGFSb3dcbiAgICogQGRlc2NyaXB0aW9uIHVwZGF0ZSBtZXRhZGF0YSB0YWJsZSByb3dcbiAgICogXG4gICAqIEBwYXJhbSB7QXJyYXl9IG1ldGFkYXRhIFxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXR0ciBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGxhYmVsIFxuICAgKi9cbiAgX2FkZE1ldGFkYXRhUm93KG1ldGFkYXRhLCBhdHRyLCBsYWJlbCkge1xuICAgIGlmKCAhdGhpc1thdHRyXSApIHJldHVybjtcbiAgICBtZXRhZGF0YS5wdXNoKHtcbiAgICAgIGF0dHI6IGxhYmVsIHx8IGF0dHIsIFxuICAgICAgdmFsdWU6IHRoaXNbYXR0cl1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9jb3B5TGlua1xuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gY2xpY2sgZXZlbnQgb24gYnV0dG9uLiAgQ29weSB0ZXh0IHRvIGNsaXBib2FyZFxuICAgKiBzaG93IFVJIGludGVyYWN0aW9uLlxuICAgKi9cbiAgX2NvcHlMaW5rKCkge1xuICAgIHRoaXMuJC5saW5rLmZvY3VzKCk7XG4gICAgdGhpcy4kLmxpbmsuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OSk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDb3B5XCIpO1xuXG4gICAgdGhpcy4kLmNvcHlJY29uLmljb24gPSAnY2hlY2snO1xuICAgIHRoaXMuJC5jb3B5QnV0dG9uLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJ2FjdGl2ZScpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiQuY29weUljb24uaWNvbiA9ICdjb250ZW50LWNvcHknO1xuICAgICAgdGhpcy4kLmNvcHlCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnLCAnYWN0aXZlJyk7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1yZWNvcmQnLCBBcHBSZWNvcmQpOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYW1wb3R0cy9wbHlyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL3NoYWthLXBsYXllci9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvc2hha2EtcGxheWVyL3RyZWUvbWFzdGVyL2RvY3MvdHV0b3JpYWxzXG5cbmltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLWF1ZGlvLXZpZXdlci50cGwuanNcIjtcblxuaW1wb3J0IFwiQHVjZC1saWIvY29yay1hcHAtdXRpbHNcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9jb25maWdcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgdmlkZW9MaWJzIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvdXRpbHMvdmlkZW8tbGliLWxvYWRlclwiO1xuXG5pbXBvcnQgcGx5ckNzcyBmcm9tIFwicGx5ci9kaXN0L3BseXIuY3NzXCI7XG5pbXBvcnQgc2hha2FDc3MgZnJvbSBcInNoYWthLXBsYXllci9kaXN0L2NvbnRyb2xzLmNzc1wiO1xubGV0IEFVRElPX1NUWUxFUyA9IHBseXJDc3Mrc2hha2FDc3M7XG5cbmltcG9ydCBzcHJpdGVTaGVldCBmcm9tIFwicGx5ci9kaXN0L3BseXIuc3ZnXCI7XG5sZXQgU1BSSVRFX1NIRUVUID0gc3ByaXRlU2hlZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEF1ZGlvVmlld2VyIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG4gIFxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2luamVjdE1vZGVsKCdBcHBTdGF0ZU1vZGVsJywgJ01lZGlhTW9kZWwnKTtcbiAgICB0aGlzLmxpYnNMb2FkZWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9vbkFwcFN0YXRlVXBkYXRlKGUpIHtcbiAgICBpZiAoIHRoaXMuZnVsbFBhdGggIT09IGUubG9jYXRpb24uZnVsbHBhdGggKSB7IFxuICAgICAgdGhpcy5fc3RvcCgpO1xuICAgIH1cblxuICAgIHRoaXMuZnVsbFBhdGggPSBlLmxvY2F0aW9uLmZ1bGxwYXRoO1xuICB9XG5cbiAgYXN5bmMgZmlyc3RVcGRhdGVkKGUpIHtcbiAgICB0aGlzLiQuYXVkaW8gID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdhdWRpb19wbGF5ZXInKTtcbiAgICB0aGlzLiQucG9zdGVyID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdhdWRpb19wb3N0ZXInKTtcblxuICAgIGxldCBzZWxlY3RlZFJlY29yZE1lZGlhID0gYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkTWVkaWEoKTtcbiAgICBpZiggc2VsZWN0ZWRSZWNvcmRNZWRpYSApIHRoaXMuX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShzZWxlY3RlZFJlY29yZE1lZGlhKTtcblxuICAgIHRoaXMuZnVsbFBhdGggPSAoYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpKS5sb2NhdGlvbi5mdWxscGF0aDtcbiAgICBcbiAgICAvLyB3ZWJwYWNrIG1vZHVsZSBpcyBiYXNlNjQgZW5jb2RlZCBVUkwsIGNoZWNrIGlmIHRoaXMgaGFwcGVuZWQgXG4gICAgLy8gYW5kIGRlY29kZSwgdGhlbiBzZXQgc3ZnIHRvIGlubmVySHRtbCBpbnNpZGUgdGhlIHNoYWRvdyBkb20uXG4gICAgaWYoIFNQUklURV9TSEVFVC5pbmRleE9mKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0JykgPiAtMSApIHtcbiAgICAgIFNQUklURV9TSEVFVCA9IGF0b2IoU1BSSVRFX1NIRUVULnJlcGxhY2UoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJywgJycpKTtcbiAgICB9XG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNzcHJpdGUtcGx5cicpLmlubmVySFRNTCA9IFNQUklURV9TSEVFVDtcblxuICAgIC8vIGRlY2lkZSB3aGVyZSB0byBwdXQgY3NzXG4gICAgLy8gVGhlIFBMWVIgbGlicmFyeSBpc24ndCBhd2FyZSBvZiBzaGFkeWRvbSBzbyB3ZSBuZWVkIHRvIG1hbnVhbGx5XG4gICAgLy8gcGxhY2Ugb3VyIHN0eWxlcyBpbiBkb2N1bWVudC5oZWFkIHcvbyBzaGFkeWRvbSB0b3VjaGluZyB0aGVtLlxuICAgIGxldCBwbHlyU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBwbHlyU3R5bGVzLmlubmVySFRNTCA9IEFVRElPX1NUWUxFUztcbiAgICBpZiggd2luZG93LlNoYWR5RE9NICYmIHdpbmRvdy5TaGFkeURPTS5pblVzZSApIHtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocGx5clN0eWxlcyk7XG4gICAgICB0aGlzLmhpZGVDb250cm9scyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQocGx5clN0eWxlcyk7XG4gICAgICB0aGlzLmhpZGVDb250cm9scyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBBcHBTdGF0ZU1vZGVsLCBjYWxsZWQgd2hlbiBhIHJlY29yZHMgbWVkaWEgaXMgc2VsZWN0ZWRcbiAgICogXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtZWRpYSBcbiAgKiovXG4gIGFzeW5jIF9vblNlbGVjdGVkUmVjb3JkTWVkaWFVcGRhdGUobWVkaWEpIHtcbiAgICBpZiggIW1lZGlhICkgcmV0dXJuO1xuICAgIGlmICggdXRpbHMuZ2V0TWVkaWFUeXBlKG1lZGlhKSAhPT0gJ0F1ZGlvT2JqZWN0JyApIHJldHVybjtcblxuICAgIHRoaXMubWVkaWEgPSBtZWRpYTtcblxuICAgIGlmKCB0aGlzLmxpYnNMb2FkZWQgKSB7XG4gICAgICB0aGlzLl9sb2FkQXVkaW8oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBkeW5hbWljYWxseSBsb2FkIHBseXIgYW5kIHNoYWthIGxpYnNcbiAgICBsZXQge3BseXJ9ID0gYXdhaXQgdmlkZW9MaWJzLmxvYWQoKTtcblxuICAgIHRoaXMuYXVkaW9QbGF5ZXIgPSBuZXcgcGx5cih0aGlzLiQuYXVkaW8sIHtcbiAgICAgIGZ1bGxzY3JlZW4gOiB7ZW5hYmxlZDogZmFsc2V9LFxuICAgICAgY2FwdGlvbnM6IHt1cGRhdGU6IGZhbHNlfSxcbiAgICAgIGNvbnRyb2xzIDogWydwbGF5LWxhcmdlJywgJ3BsYXknLCAncHJvZ3Jlc3MnLCAnY3VycmVudC10aW1lJywgJ211dGUnLCAndm9sdW1lJ11cbiAgICB9KTtcblxuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy5saWJzTG9hZGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9sb2FkQXVkaW8oKTtcbiAgfVxuXG4gIF9sb2FkQXVkaW8oKSB7XG4gICAgbGV0IHNvdXJjZUVsZSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjYXVkaW9fcGxheWVyIHNvdXJjZScpO1xuICAgIHNvdXJjZUVsZS5zcmMgPSBjb25maWcuZmNyZXBvQmFzZVBhdGgrdGhpcy5tZWRpYVsnQGlkJ107XG4gICAgc291cmNlRWxlLnR5cGUgPSB0aGlzLm1lZGlhLmZpbGVGb3JtYXQgfHwgdGhpcy5tZWRpYS5oYXNNaW1lVHlwZSB8fCB0aGlzLm1lZGlhLmVuY29kaW5nRm9ybWF0IHx8ICcnO1xuICAgIFxuICAgIC8vIEZGIEhhY2suICBSYW5nZSBzbGlkZXIgbm90IGdvaW5nIGJhY2sgdG8gMCBvbiBzdG9wXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuYXVkaW9QbGF5ZXIuc3RvcCgpO1xuICAgICAgbGV0IGVsZSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFuZ2VcIl1bZGF0YS1wbHlyPVwic2Vla1wiXScpO1xuICAgICAgaWYoIGVsZSApIGVsZS52YWx1ZSA9IDA7XG4gICAgfSBjYXRjaChlKSB7fVxuXG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNhdWRpb19wbGF5ZXInKS5sb2FkKCk7XG5cbiAgICBsZXQgcG9zdGVyID0gdGhpcy5tZWRpYS50aHVtYm5haWxVcmwgID8gdGhpcy5tZWRpYS50aHVtYm5haWxVcmwrJy9zdmM6aWlpZi9mdWxsLyw0MDAvMC9kZWZhdWx0LmpwZycgOiAnJztcbiAgICBpZiAoIHBvc3RlciApIHtcbiAgICAgIHRoaXMuJC5wb3N0ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLiQucG9zdGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgcG9zdGVyICsgXCIpXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5wb3N0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBwbGF5YmFjayBhbmQgcmVzZXQgdG8gc3RhcnRcbiAgICoqL1xuICBfc3RvcCgpIHtcbiAgICBpZiggIXRoaXMuYXVkaW9QbGF5ZXIgKSByZXR1cm47XG4gICAgdGhpcy5hdWRpb1BsYXllci5zdG9wKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtYXVkaW8tdmlld2VyJywgQXBwQXVkaW9WaWV3ZXIpOyIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcGx5ckNzcyBmcm9tIFwicGx5ci9kaXN0L3BseXIuY3NzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICNhdWRpb19wb3N0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuXG4gIC5sYXlvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAucGx5ci0tYXVkaW8ge1xuICAgIG1heC13aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAucGx5ci0tZnVsbC11aSBpbnB1dFt0eXBlPXJhbmdlXSB7XG4gICAgY29sb3I6ICNkYWFhMDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIGJ1dHRvbi5wbHlyX19jb250cm9sLnBseXJfX2NvbnRyb2wtLW92ZXJsYWlkLFxuICBidXR0b24ucGx5cl9fY29udHJvbC5wbHlyX19jb250cm9sOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxOCwxNzAsMCwxLjApO1xuICB9XG5cbiAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcblxuICB9XG5cbiAgJHtwbHlyQ3NzfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBpZD1cInNwcml0ZS1wbHlyXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvZGl2PlxuICA8ZGl2IGlkPVwiYXVkaW9fcG9zdGVyXCI+PC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgIDxhdWRpbyBpZD1cImF1ZGlvX3BsYXllclwiIGNvbnRyb2xzPlxuICAgICAgPHNvdXJjZT5cbiAgICA8L2F1ZGlvPlxuICA8L2Rpdj5cblxuPC9kaXY+XG5gXG59IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLWZzLXZpZXdlci50cGwuanNcIlxuaW1wb3J0IFwiLi4vLi4vLi4vdXRpbHMvYXBwLXZpcnR1YWwtc2Nyb2xsZXJcIlxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29ucy9lZGl0b3ItaWNvbnNcIlxuaW1wb3J0IFwiQHVjZC1saWIvZmluLWljb25zXCJcbmltcG9ydCBieXRlcyBmcm9tIFwiYnl0ZXNcIlxuXG5jb25zdCBJQ09OUyA9IHtcbiAgJ2ZvbGRlcicgOiBbJ2ZvbGRlciddLFxuICAnZmluLWljb25zOmltYWdlLXNvbGlkJyA6IFsndGlmJywgJ3RpZmYnLCAnZ2lmJywgJ2pwZycsICdqcDInLCAnanBlZycsICd3ZWJwJywgJ2JtcCcsICdwbmcnXSxcbiAgJ2Zpbi1pY29uczp2aWRlby1zb2xpZCcgOiBbJ2F2aScsICdtcDQnLCAnZmx2JywgJ3dtdicsICdtb3YnXSxcbiAgJ2Zpbi1pY29uczpzb3VuZC1zb2xpZCcgOiBbJ3dhdicsICdtcDMnLCAnbWlkJywgJ2FpZiddLFxuICAnZmluLWljb25zOnRleHQtc29saWQnIDogWydkb2MnLCAnZG9jeCcsICd0eHQnLCAncnRmJywgJy5vZHQnXSxcbiAgJ2Zpbi1pY29uczpzcHJlYWRzaGVldC1zb2xpZCcgOiBbJ29kcycsICdjc3YnLCAndHN2JywgJ3hzbCcsICd4c2x4J10sXG4gICdmaW4taWNvbnM6cGRmLXNvbGlkJyA6IFsncGRmJ10sXG4gICdmaW4taWNvbnM6Y29tcHJlc3NlZC1zb2xpZCcgOiBbJ3ppcCcsICdyYXInLCAnYXJqJywgJ2d6JywgJ3RneiddXG59XG5jb25zdCBVTktOT1dOX0lDT04gPSAnZmluLWljb25zOmZpbGUtc29saWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBGc1ZpZXdlciBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGxvYWRpbmdGaWxlcyA6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGxvYWRpbmdTZWFyY2ggOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBjdXJyZW50RGlyIDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBmaWxlcyA6IHt0eXBlOiBBcnJheX0sXG4gICAgICBzZWxlY3RlZEZpbGUgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIG1vZGUgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHRodW1ibmFpbCA6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgbGluZUhlaWdodCA6IHt0eXBlOiBOdW1iZXJ9LFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVzZXQoKTtcblxuICAgIHRoaXMuX2luamVjdE1vZGVsKCdBcHBTdGF0ZU1vZGVsJywgJ1JlY29yZE1vZGVsJyk7XG5cbiAgICB0aGlzLmljb25NYXAgPSB7fTtcbiAgICBmb3IoIGxldCBpY29uIGluIElDT05TICkge1xuICAgICAgZm9yKCBsZXQgZXh0IG9mIElDT05TW2ljb25dICkge1xuICAgICAgICB0aGlzLmljb25NYXBbZXh0XSA9IGljb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMuX29uUmVzaXplKCkpO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuY29udGVudEJvZHkgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm9keScpO1xuICAgIHRoaXMuc2Nyb2xsUGFuZWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignYXBwLXZpcnR1YWwtc2Nyb2xsZXInKTtcbiAgICB0aGlzLnNjcm9sbFBhbmVsLnNldEl0ZW1SZW5kZXJlcih0aGlzLnJlbmRlclJvdywgdGhpcyk7XG5cbiAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzKTtcblxuICAgIHRoaXMuZmlsZW5hbWVXaWR0aCA9ICczMHB4JztcblxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgdGhpcy5zaG93KCk7XG4gICAgLy8gfSwgMTAwMClcbiAgICBcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiggcHJvcHMuaGFzKCdzZWxlY3RlZEZpbGUnKSApIHtcbiAgICAgIGZvciggbGV0IGZpbGUgb2YgdGhpcy5maWxlcyApIHtcbiAgICAgICAgZmlsZS5zZWxlY3RlZCA9IChmaWxlLmZ1bGxVcmwgPT09IHRoaXMuc2VsZWN0ZWRGaWxlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsUGFuZWwucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAvLyAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gIC8vICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcjYmFja2dyb3VuZCcpO1xuICAvLyAgIHRoaXMuYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAvLyAgIHRoaXMuc2hhZG93Um9vdC5yZW1vdmVDaGlsZCh0aGlzLmJhY2tncm91bmQpO1xuICAvLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kKTtcbiAgLy8gfVxuXG4gIF9vblJlc2l6ZSgpIHtcbiAgICBpZiggIXRoaXMuY29udGVudEJvZHkgKSByZXR1cm47XG4gICAgLy8gdGhpcy5zY3JvbGxQYW5lbC5zdHlsZS5oZWlnaHQgPSAodGhpcy5jb250ZW50Qm9keS5vZmZzZXRIZWlnaHQgLSAxNzUpKydweCc7XG5cbiAgICBsZXQgYmFzZUhlaWdodCA9IDMzNTtcbiAgICBpZiggd2luZG93LmlubmVyV2lkdGggPiA3MDAgKSB7XG4gICAgICB0aGlzLnNjcm9sbFBhbmVsLnN0eWxlLmhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBiYXNlSGVpZ2h0IC0gMTAwKSsncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjcm9sbFBhbmVsLnN0eWxlLmhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBiYXNlSGVpZ2h0KSsncHgnO1xuICAgIH1cblxuICAgIFxuICAgIHRoaXMuZmlsZW5hbWVXaWR0aCA9ICggdGhpcy5zY3JvbGxQYW5lbC5vZmZzZXRXaWR0aCAtIDE1NSApKydweCc7XG4gICAgdGhpcy5zY3JvbGxQYW5lbC5yZXF1ZXN0VXBkYXRlKCk7XG4gIH1cblxuICBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgaWYoIHRoaXMuc2VsZWN0ZWRSZWNvcmQgPT09IGUuc2VsZWN0ZWRSZWNvcmQgKSByZXR1cm47XG4gICAgaWYoICFlLnNlbGVjdGVkUmVjb3JkICkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICB0aGlzLnNlbGVjdGVkUmVjb3JkID0gZS5zZWxlY3RlZFJlY29yZDtcbiAgICB0aGlzLnNlbGVjdGVkUmVjb3JkTWVkaWEgPSBlLnNlbGVjdGVkUmVjb3JkTWVkaWE7XG5cbiAgICBpZiggdGhpcy5zZWxlY3RlZFJlY29yZCAmJiB0aGlzLnNlbGVjdGVkUmVjb3JkWydAdHlwZSddLmluY2x1ZGVzKCdodHRwOi8vZGlnaXRhbC51Y2RhdmlzLmVkdS9zY2hlbWEjQmFnT2ZGaWxlcycpICkge1xuICAgICAgdGhpcy5fYnJvd3NlRGlyZWN0b3J5KCk7XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5zZWxlY3RlZFJlY29yZC5uYW1lIHx8IHRoaXMuc2VsZWN0ZWRSZWNvcmQudGl0bGU7XG4gICAgICB0aGlzLnRodW1ibmFpbCA9IHRoaXMuc2VsZWN0ZWRSZWNvcmQudGh1bWJuYWlsVXJsIHx8ICcnO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNob3coKSB7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG4gICAgdGhpcy5fb25SZXNpemUoKTtcblxuICAgIHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fb25SZXNpemUoKTtcbiAgICAgIHRoaXMuc2Nyb2xsUGFuZWwuX29uUmVzaXplKCk7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFJlY29yZCA9IG51bGw7XG4gICAgdGhpcy5sb2FkaW5nRmlsZXMgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRpbmdTZWFyY2ggPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnREaXIgPSAnLyc7XG4gICAgdGhpcy5maWxlcyA9IFtdO1xuICAgIHRoaXMubGluZUhlaWdodCA9IDQxO1xuICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gJyc7XG4gIH1cblxuICBfcmVuZGVyQnJlYWRjcnVtYnMoKSB7XG4gICAgaWYoIHRoaXMubW9kZSA9PT0gJ3NlYXJjaCcgKSB7XG4gICAgICByZXR1cm4gaHRtbGA8aXJvbi1pY29uIGljb249XCJjaGV2cm9uLXJpZ2h0XCI+PC9pcm9uLWljb24+XG4gICAgICA8c3BhbiBjbGFzcz1cImJyZWFkY3J1bWJcIj5TZWFyY2ggUmVzdWx0czwvc3Bhbj5gO1xuICAgIH1cblxuICAgIGxldCBmdWxsRGlyUGF0aCA9IFtdO1xuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERpclxuICAgICAgLnJlcGxhY2UoL15cXC8vLCAnJylcbiAgICAgIC5zcGxpdCgnLycpXG4gICAgICAubWFwKGRpciA9PiAge1xuICAgICAgICBmdWxsRGlyUGF0aC5wdXNoKGRpcikgXG4gICAgICAgIGlmKCBkaXIgPT09ICcnICkgcmV0dXJuIGh0bWxgYDtcblxuICAgICAgICByZXR1cm4gaHRtbGA8aXJvbi1pY29uIGljb249XCJjaGV2cm9uLXJpZ2h0XCI+PC9pcm9uLWljb24+XG4gICAgICAgIDxhIGNsYXNzPVwiYnJlYWRjcnVtYlwiIEBjbGljaz1cIiR7dGhpcy5fb25CcmVhZGNydW1iQ2xpY2tlZH1cIiBkaXI9XCIkeycvJytmdWxsRGlyUGF0aC5qb2luKCcvJyl9XCI+JHtkaXJ9PC9hPmBcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyUm93KGluZGV4KSB7XG4gICAgbGV0IGZpbGUgPSB0aGlzLmZpbGVzW2luZGV4XTtcbiAgICBsZXQgaWNvbiA9IHRoaXMuX2dldEljb24oZmlsZSk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImhlaWdodDogJHt0aGlzLmxpbmVIZWlnaHQtMX1weFwiID9kaXJlY3Rvcnk9XCIke2ZpbGUuaXNEaXJlY3Rvcnl9XCIgP3NlbGVjdGVkPVwiJHtmaWxlLnNlbGVjdGVkfVwiIGluZGV4PVwiJHtpbmRleH1cIiBAY2xpY2s9XCIke3RoaXMuX29uSXRlbUNsaWNrZWR9XCIgLmNvbnRleHQ9XCIke3RoaXN9XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgIDxpcm9uLWljb24gaWNvbj1cIiR7aWNvbn1cIj48L2lyb24taWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZVwiIHN0eWxlPVwid2lkdGg6ICR7dGhpcy5maWxlbmFtZVdpZHRofVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVuYW1lXCI+JHtmaWxlLmZpbGVuYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpcmVjdG9yeVwiID9oaWRkZW49XCIke3RoaXMubW9kZSA9PT0gJ2Jyb3dzZSd9XCI+JHtmaWxlLmRpcmVjdG9yeSB8fCAnLyd9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVzaXplXCI+JHtmaWxlLmZpbGVTaXplICE9PSB1bmRlZmluZWQgPyBieXRlcyhmaWxlLmZpbGVTaXplKSA6ICctJ308L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtZmlsZVwiPlxuICAgICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiY2hlY2tcIiA/aGlkZGVuPVwiJHshZmlsZS5zZWxlY3RlZH1cIj48L2lyb24taWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gIH1cblxuICBfZ2V0SWNvbihmaWxlKSB7XG4gICAgbGV0IGV4dCA9IGZpbGUuaXNEaXJlY3RvcnkgPyAnZm9sZGVyJyA6IChmaWxlLmZpbGVuYW1lIHx8ICcnKS5zcGxpdCgnLicpLnBvcCgpO1xuICAgIGxldCBpY29uID0gdGhpcy5pY29uTWFwW2V4dF07XG4gICAgaWYoIGljb24gKSByZXR1cm4gaWNvbjtcbiAgICByZXR1cm4gVU5LTk9XTl9JQ09OO1xuICB9XG5cbiAgX29uSXRlbUNsaWNrZWQoZSkge1xuICAgIGxldCBpbmRleCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZGV4JykpO1xuICAgIFxuICAgIC8vIHN0dXBpZCBoYWNrLCBsZXQgaHRtbCBhbHdheXMgc2NvcGVzIGV2ZW50cyB0byByZW5kZXIgaG9zdFxuICAgIGxldCAkdGhpcyA9IGUuY3VycmVudFRhcmdldC5jb250ZXh0O1xuICAgIGxldCBmaWxlID0gJHRoaXMuZmlsZXNbaW5kZXhdO1xuXG4gICAgaWYoIGZpbGUuaXNEaXJlY3RvcnkgKSB7XG4gICAgICAkdGhpcy5fYnJvd3NlRGlyZWN0b3J5KGZpbGVbJ0BpZCddLnJlcGxhY2UoJHRoaXMuc2VsZWN0ZWRSZWNvcmRbJ0BpZCddLCAnJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlLmZ1bGxVcmw7XG4gICAgfVxuICB9XG5cbiAgX29uSW5wdXRLZXl1cChlKSB7XG4gICAgbGV0IHRleHQgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG5cbiAgICBpZiggdGhpcy5fYXV0b2NvbXBsZXRlVGltZXIgKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYXV0b2NvbXBsZXRlVGltZXIpO1xuICAgIH1cbiAgICB0aGlzLl9hdXRvY29tcGxldGVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVGltZXIgPSBudWxsO1xuICAgICAgdGhpcy5fdHlwZWFoZWFkU2VhcmNoKHRleHQpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBhc3luYyBfdHlwZWFoZWFkU2VhcmNoKHRleHQpIHtcbiAgICB0aGlzLnR5cGVhaGVhZFNlYXJjaFRleHQgPSB0ZXh0O1xuICAgIGlmKCB0ZXh0ID09PSAnJyApIHtcbiAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgIHRoaXMuX2Jyb3dzZURpcmVjdG9yeSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubW9kZSA9ICdzZWFyY2gnO1xuICAgIHRoaXMubGluZUhlaWdodCA9IDUyO1xuICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gJyc7XG5cbiAgICBsZXQgc2VhcmNoRG9jID0ge1xuICAgICAgdGV4dCxcbiAgICAgIGZpbHRlcnMgOiB7XG4gICAgICAgICdjb2xsZWN0aW9uSWQnIDoge1xuICAgICAgICAgIHR5cGU6ICdrZXl3b3JkJyxcbiAgICAgICAgICB2YWx1ZTogW3RoaXMuc2VsZWN0ZWRSZWNvcmQuY29sbGVjdGlvbklkXSxcbiAgICAgICAgICBvcDogJ29yJ1xuICAgICAgICB9LFxuICAgICAgICAnQGlkJyA6IHtcbiAgICAgICAgICB0eXBlIDogJ3ByZWZpeCcsXG4gICAgICAgICAgdmFsdWUgOiB0aGlzLnNlbGVjdGVkUmVjb3JkWydAaWQnXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc29ydCA6IG51bGwsXG4gICAgICBsaW1pdDogOTk5OSxcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIGZhY2V0czoge30sXG4gICAgICB0ZXh0RmllbGRzIDogWydmaWxlbmFtZSddXG4gICAgfVxuXG4gICAgbGV0IHJlc3AgPSBhd2FpdCB0aGlzLlJlY29yZE1vZGVsLnR5cGVhaGVhZFNlYXJjaChzZWFyY2hEb2MsIHthbGxSZWNvcmRzOiB0cnVlfSk7XG4gICAgaWYoIHRoaXMudHlwZWFoZWFkU2VhcmNoVGV4dCAhPT0gdGV4dCApIHJldHVybjtcblxuICAgIHRoaXMuc2V0RmlsZXMocmVzcC5wYXlsb2FkLnJlc3VsdHMsIGZhbHNlKTtcbiAgfVxuXG4gIGFzeW5jIF9icm93c2VEaXJlY3RvcnkoZGlyKSB7XG4gICAgaWYoIHRoaXMubW9kZSA9PT0gJ2Jyb3dzZScgJiYgdGhpcy5jdXJyZW50RGlyID09PSBkaXIgKSByZXR1cm47XG5cbiAgICB0aGlzLm1vZGUgPSAnYnJvd3NlJztcbiAgICB0aGlzLmxpbmVIZWlnaHQgPSA0NTtcbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3NlYXJjaElucHV0JykudmFsdWUgPSAnJztcbiAgICB0aGlzLnNlbGVjdGVkRmlsZSA9ICcnO1xuXG4gICAgaWYoICFkaXIgKSB7XG4gICAgICBpZiggdGhpcy5jdXJyZW50RGlyICkgZGlyID0gdGhpcy5jdXJyZW50RGlyO1xuICAgICAgZWxzZSBkaXIgPSAnLyc7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50RGlyID0gZGlyO1xuXG4gICAgbGV0IHNlYXJjaERvYyA9IHtcbiAgICAgIGZpbHRlcnMgOiB7XG4gICAgICAgIC8vICdjb2xsZWN0aW9uSWQnIDoge1xuICAgICAgICAvLyAgIHR5cGU6ICdrZXl3b3JkJyxcbiAgICAgICAgLy8gICB2YWx1ZTogW3RoaXMuc2VsZWN0ZWRSZWNvcmQuY29sbGVjdGlvbklkXSxcbiAgICAgICAgLy8gICBvcDogJ29yJ1xuICAgICAgICAvLyB9LFxuICAgICAgICAnZGlyZWN0UGFyZW50JyA6IHtcbiAgICAgICAgICB0eXBlIDogJ2tleXdvcmQnLFxuICAgICAgICAgIHZhbHVlIDogW3RoaXMuc2VsZWN0ZWRSZWNvcmRbJ0BpZCddK3RoaXMuY3VycmVudERpci5yZXBsYWNlKC9cXC8kLywgJycpXSxcbiAgICAgICAgICBvcCA6ICdvcidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNvcnQgOiBudWxsLFxuICAgICAgbGltaXQ6IDk5OTksXG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICBmYWNldHM6IHt9LFxuICAgICAgdGV4dEZpZWxkcyA6IFtdXG4gICAgfVxuXG4gICAgbGV0IHJlc3AgPSBhd2FpdCB0aGlzLlJlY29yZE1vZGVsLnR5cGVhaGVhZFNlYXJjaChzZWFyY2hEb2MsIHtkZWJ1ZzogdHJ1ZSwgYWxsUmVjb3JkczogdHJ1ZX0pO1xuICAgIHRoaXMuc2V0RmlsZXMocmVzcC5wYXlsb2FkLnJlc3VsdHMpO1xuICB9XG5cbiAgc2V0RmlsZXMoZmlsZXMsIHNvcnQ9dHJ1ZSkge1xuICAgIGZpbGVzID0gZmlsZXMubWFwKGZpbGUgPT4ge1xuICAgICAgZmlsZS5kaXJlY3RvcnkgPSBmaWxlLmRpcmVjdFBhcmVudC5yZXBsYWNlKHRoaXMuc2VsZWN0ZWRSZWNvcmRbJ0BpZCddLCAnJyk7XG4gICAgICBpZiggZmlsZVsnQHR5cGUnXS5pbmNsdWRlcygnaHR0cDovL2ZlZG9yYS5pbmZvL2RlZmluaXRpb25zL3Y0L3JlcG9zaXRvcnkjQmluYXJ5JykgKSB7XG4gICAgICAgIGZpbGUuaXNGaWxlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbGUuaXNEaXJlY3RvcnkgPSB0cnVlO1xuICAgICAgICBmaWxlLmZpbGVuYW1lID0gZmlsZVsnQGlkJ10uc3BsaXQoJy8nKS5wb3AoKTtcbiAgICAgIH1cbiAgICAgIGZpbGUuZnVsbFVybCA9IHRoaXMuX2dldEZ1bGxGaWxlVXJsKGZpbGUpO1xuICAgICAgZmlsZS5zZWxlY3RlZCA9IChmaWxlLmZ1bGxVcmwgPT09IHRoaXMuc2VsZWN0ZWRGaWxlKTtcbiAgICAgIHJldHVybiBmaWxlO1xuICAgIH0pO1xuXG4gICAgaWYoIHNvcnQgKSB7XG4gICAgICBmaWxlcy5zb3J0KChhLGIpID0+IGEuZmlsZW5hbWUudG9Mb3dlckNhc2UoKSA+IGIuZmlsZW5hbWUudG9Mb3dlckNhc2UoKSA/IDEgOiAtMSk7XG4gICAgfVxuXG4gICAgdGhpcy5maWxlcyA9IGZpbGVzO1xuICB9XG5cbiAgX2dldEZ1bGxGaWxlVXJsKGZpbGUpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgJy9mY3JlcG8vcmVzdCcgKyBmaWxlWydAaWQnXTtcbiAgfVxuXG4gIF9vbkNsZWFyU2VhcmNoQ2xpY2tlZCgpIHtcbiAgICB0aGlzLl9icm93c2VEaXJlY3RvcnkodGhpcy5jdXJyZW50RGlyKTtcbiAgfVxuXG4gIF9vbkJyZWFkY3J1bWJDbGlja2VkKGUpIHtcbiAgICB0aGlzLl9icm93c2VEaXJlY3RvcnkoZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGlyJykpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZnMtdmlld2VyJywgQXBwRnNWaWV3ZXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgLyogYW5pbWF0aW9uOiAzMDBtcyBsaW5lYXIgZnMtdmlld2VyLWFuaW1hdGUtaW47ICovXG4gIH1cblxuICBAa2V5ZnJhbWVzIGZzLXZpZXdlci1hbmltYXRlLWluIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICBvcGFjaXR5OiAwLjVcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMVxuICAgIH1cbiAgfVxuXG4gIC5sYXlvdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgbWFyZ2luOiA1MHB4IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXBlci1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmNvbnRlbnQtYm9keSB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLmhlYWRlci1sYXlvdXQge1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5oZWFkZXItaW1hZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5oZWFkZXItaW1hZ2UgLmltZywgLmhlYWRlci1pbWFnZSBpcm9uLWljb25baWNvbj1cImZpbi1pY29uczp2YXJpb3VzLW91dGxpbmUtc3RhY2tlZFwiXSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cblxuICAjc2VhcmNoSW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAucm93IHtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIH1cblxuICAudnMtcm93W2hvdmVyXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQteWVsbG93KTtcbiAgfVxuXG4gIC5yb3cge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC15ZWxsb3cpOyAqL1xuICB9XG5cbiAgLnJvdyA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICAucm93W3NlbGVjdGVkXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQteWVsbG93KTtcbiAgfVxuXG4gIC5yb3cgLmRpcmVjdG9yeSB7XG4gICAgZm9udC1zaXplOiAxMXB4OyBcbiAgICBsaW5lLWhlaWdodDogMTJweDsgXG4gICAgY29sb3I6ICM4ODg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB9XG5cbiAgLnJvdyAuaWNvbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cblxuICAucm93IC5maWxlc2l6ZSB7XG4gICAgd2lkdGg6IDc1cHg7XG4gIH1cblxuICAucm93IC5pY29uLCAucm93IC5maWxlc2l6ZSB7XG4gICAgcGFkZGluZzogNnB4IDA7XG4gIH1cblxuICAvKiAucm93IC5maWxlIHtcbiAgICBmbGV4OiAxO1xuICB9ICovXG5cbiAgLnJvdyAuZGlyZWN0b3J5LCAucm93IC5maWxlbmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLnJvdyAuc2VsZWN0ZWQtZmlsZSB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICBidXR0b24uc2VhcmNoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxuXG4gIGlyb24taWNvbltpY29uPVwiaG9tZVwiXSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XG4gIH1cblxuICBpcm9uLWljb25baWNvbj1cImNoZXZyb24tcmlnaHRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICBpcm9uLWljb25baWNvbj1cImZvbGRlclwiXSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFnZ2llLWJsdWUpO1xuICB9XG4gIGlyb24taWNvbltpY29uPVwiZmluLWljb25zOmltYWdlLXNvbGlkXCJdIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWdnaWUtZ29sZCk7XG4gIH1cbiAgaXJvbi1pY29uW2ljb249XCJmaW4taWNvbnM6dmlkZW8tc29saWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1waW5vdCk7XG4gIH1cbiAgaXJvbi1pY29uW2ljb249XCJmaW4taWNvbnM6c291bmQtc29saWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1yZWRidWQpO1xuICB9XG4gIGlyb24taWNvbltpY29uPVwiZmluLWljb25zOnRleHQtc29saWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wdXRhaC1jcmVlayk7XG4gIH1cbiAgaXJvbi1pY29uW2ljb249XCJmaW4taWNvbnM6c3ByZWFkc2hlZXQtc29saWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1xdWFkKTtcbiAgfVxuICBpcm9uLWljb25baWNvbj1cImZpbi1pY29uczpwZGYtc29saWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1kb3VibGUtZGVja2VyKTtcbiAgfVxuICBpcm9uLWljb25baWNvbj1cImZpbi1pY29uczpjb21wcmVzc2VkLXNvbGlkXCJdIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcG9wcHkpO1xuICB9XG4gIGlyb24taWNvbltpY29uPVwiZmluLWljb25zOmZpbGUtc29saWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgfVxuICBpcm9uLWljb25baWNvbj1cImNoZWNrXCJdIHtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICB9XG5cbiAgLnRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLXApO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG5cbiAgLnRhYmxlLWhlYWRlciA+IGRpdiB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cblxuICAuYnJlYWRjcnVtYnMge1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xuICB9XG5cbiAgLmJyZWFkY3J1bWJzIC5icmVhZGNydW1iIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBhcHAtdmlydHVhbC1zY3JvbGxlciB7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5icmVhayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLW1lZGl1bS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmNhbmNlbC1idG4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBtYXJnaW46IDAgMTVweCAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuZG93bmxvYWQtYnRuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5kb3dubG9hZC1idXR0b246dmlzaXRlZCB7XG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XG4gIH1cblxuICBhW2Rpc2FibGVkXSB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuY29udGVudCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmbGV4OiAxO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImxheW91dFwiPlxuPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblxuICBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxheW91dFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1pbWFnZVwiPlxuICAgICAgICA8aXJvbi1pY29uIGljb249XCJmaW4taWNvbnM6dmFyaW91cy1vdXRsaW5lLXN0YWNrZWRcIiA/aGlkZGVuPVwiJHt0aGlzLnRodW1ibmFpbH1cIj48L2lyb24taWNvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy50aHVtYm5haWx9KTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcIiA/aGlkZGVuPVwiJHshdGhpcy50aHVtYm5haWx9XCIgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPVwiZmxleDoxXCI+XG4gICAgICAgIDxoMj4ke3RoaXMudGl0bGV9PC9oMj5cbiAgICAgICAgPGRpdj4ke3RoaXMuZmlsZXMubGVuZ3RofSBmaWxlczwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleFwiPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInNlYXJjaElucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBGaWxlc1wiIEBrZXl1cD1cIiR7dGhpcy5fb25JbnB1dEtleXVwfVwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlYXJjaFwiPlxuICAgICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiJHt0aGlzLm1vZGUgPT09ICdzZWFyY2gnID8gJ2Nsb3NlJyA6ICdmaW4taWNvbnM6c2VhcmNoJ31cIiBAY2xpY2s9XCIke3RoaXMuX29uQ2xlYXJTZWFyY2hDbGlja2VkfVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJyZWFkY3J1bWJzXCI+XG4gICAgICAgIDxpcm9uLWljb24gaWNvbj1cImhvbWVcIiBAY2xpY2s9XCIke3RoaXMuX29uQnJlYWRjcnVtYkNsaWNrZWR9XCIgZGlyPVwiL1wiPjwvaXJvbi1pY29uPlxuICAgICAgICAke3RoaXMuX3JlbmRlckJyZWFkY3J1bWJzKCl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImJyZWFrXCI+PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImZsZXg6MVwiPk5hbWU8L2Rpdj4gXG4gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTE1cHhcIj5TaXplPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhcHAtdmlydHVhbC1zY3JvbGxlciBpdGVtLWhlaWdodD1cIiR7dGhpcy5saW5lSGVpZ2h0fVwiIC5pdGVtcz1cIiR7dGhpcy5maWxlc31cIj48L2FwcC12aXJ0dWFsLXNjcm9sbGVyPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmbGV4OiAxXCI+PC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1idG5cIiBAY2xpY2s9XCIke3RoaXMuaGlkZX1cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgY2xhc3M9XCJkb3dubG9hZC1idG5cIiA/ZGlzYWJsZWQ9XCIkeyF0aGlzLnNlbGVjdGVkRmlsZX1cIiBocmVmPVwiJHt0aGlzLnNlbGVjdGVkRmlsZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Eb3dubG9hZDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gPCEtLSBmb290ZXIgLS0+XG4gICAgPC9kaXY+XG5cblxuPC9kaXY+IDwhLS0gY29udGVudCAtLT5cbjwvZGl2PiA8IS0tIGxheW91dCAtLT5cblxuYDt9IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSBpbmNsdWRlPVxcXCJzaGFyZWQtc3R5bGVzXFxcIj5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAgICBcXG4gICAgYW5pbWF0aW9uOiBzaG93IDM1MG1zIGVhc2Utb3V0O1xcbiAgfVxcblxcbiAgOmhvc3QgI25hdi5zaW5nbGUge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgc2hvdyB7XFxuICAgIGZyb20ge1xcbiAgICAgIC8qIHRvcDogLTEwMHZoOyAqL1xcbiAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIC8qIHRvcDogMDsgKi9cXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gICN2aWV3ZXIgeyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgcGFwZXItc3Bpbm5lci1saXRlIHtcXG4gICAgLS1wYXBlci1zcGlubmVyLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuICBcXG4gIC5zcGlubmVyLWxheW91dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNuYXYge1xcbiAgICB6LWluZGV4OiAyMDAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48IS0tIG1ha2Ugc3VyZSBiYWNrZ3JvdW5kIGlzIGJsYWNrZWQgb3V0Li4uIGlPUyBoYWNrIC0tPlxcbjxkaXYgaWQ9XFxcInNhZmVDb3ZlclxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojk5OTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwdnc7aGVpZ2h0OjEwMHZoO2JhY2tncm91bmQtY29sb3I6YmxhY2s7XFxcIj48L2Rpdj5cXG5cXG48ZGl2IGlkPVxcXCJ2aWV3ZXJcXFwiIGhpZGRlbiQ9XFxcIltbbG9hZGluZ11dXFxcIj48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJzcGlubmVyLWxheW91dFxcXCIgaGlkZGVuJD1cXFwiW1shbG9hZGluZ11dXFxcIj5cXG4gIDxwYXBlci1zcGlubmVyLWxpdGUgYWN0aXZlJD1cXFwiW1tsb2FkaW5nXV1cXFwiPjwvcGFwZXItc3Bpbm5lci1saXRlPlxcbjwvZGl2PlxcblxcbjxhcHAtbWVkaWEtdmlld2VyLW5hdiBcXG4gIGlkPVxcXCJuYXZcXFwiXFxuICBpcy1saWdodGJveFxcbiAgb24tem9vbS1pbj1cXFwiX29uWm9vbUluQ2xpY2tlZFxcXCJcXG4gIG9uLXpvb20tb3V0PVxcXCJfb25ab29tT3V0Q2xpY2tlZFxcXCJcXG4gIG9uLWNsb3NlPVxcXCJfb25DbG9zZUNsaWNrZWRcXFwiPlxcbjwvYXBwLW1lZGlhLXZpZXdlci1uYXY+XCI7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtaW1hZ2Utdmlld2VyLWxpZ2h0Ym94Lmh0bWxcIlxuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXItbGl0ZVwiXG5pbXBvcnQgXCJsZWFmbGV0XCJcbmltcG9ydCBsZWFmbGV0Q3NzIGZyb20gXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIlxuXG5pbXBvcnQgQXBwU3RhdGVJbnRlcmZhY2UgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvQXBwU3RhdGVJbnRlcmZhY2VcIlxuaW1wb3J0IE1lZGlhSW50ZXJmYWNlIGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL01lZGlhSW50ZXJmYWNlXCJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9jb25maWdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBJbWFnZVZpZXdlciBleHRlbmRzIE1peGluKFBvbHltZXJFbGVtZW50KVxuICAud2l0aChFdmVudEludGVyZmFjZSwgQXBwU3RhdGVJbnRlcmZhY2UsIE1lZGlhSW50ZXJmYWNlKSB7XG5cbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0YWcuaW5uZXJIVE1MID0gYDxzdHlsZT4ke2xlYWZsZXRDc3N9PC9zdHlsZT4ke3RlbXBsYXRlfWA7XG4gICAgcmV0dXJuIHRhZztcbiAgfVxuXG4gIHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvdW5kcyA6IHtcbiAgICAgICAgdHlwZSA6IEFycmF5LFxuICAgICAgICB2YWx1ZSA6IG51bGxcbiAgICAgIH0sXG4gICAgICBtYXhJbWFnZVNpemUgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogMjA0OFxuICAgICAgfSxcbiAgICAgIG1lZGlhIDoge1xuICAgICAgICB0eXBlIDogT2JqZWN0LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IHt9XG4gICAgICB9LFxuICAgICAgdmlzaWJsZSA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIGlmKCB0aGlzLnZpc2libGUgJiYgZS53aGljaCA9PT0gMjcgKSB0aGlzLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcyk7XG5cbiAgICB0aGlzLnNoYWRvd1Jvb3QucmVtb3ZlQ2hpbGQodGhpcy4kLnNhZmVDb3Zlcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLiQuc2FmZUNvdmVyKTtcblxuICAgIGxldCBzZWxlY3RlZFJlY29yZE1lZGlhID0gYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkTWVkaWEoKTtcbiAgICBpZiggc2VsZWN0ZWRSZWNvcmRNZWRpYSApIHRoaXMuX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShzZWxlY3RlZFJlY29yZE1lZGlhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkFwcFN0YXRlVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBBcHBTdGF0ZU1vZGVsIGFwcC1zdGF0ZS11cGRhdGUgZXZlbnRcbiAgICovXG4gIF9vbkFwcFN0YXRlVXBkYXRlKGUpIHtcbiAgICBpZiggZS5zaG93TGlnaHRib3ggJiYgIXRoaXMudmlzaWJsZSApIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSBpZiggIWUuc2hvd0xpZ2h0Ym94ICYmIHRoaXMudmlzaWJsZSApIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlbGVjdGVkUmVjb3JkTWVkaWFVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGZyb20gQXBwU3RhdGVJbnRlcmZhY2UsIGNhbGxlZCB3aGVuIGEgcmVjb3JkcyBtZWRpYSBpcyBzZWxlY3RlZFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IG1lZGlhIFxuICAgKi9cbiAgX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZShtZWRpYSkge1xuICAgIHRoaXMubWVkaWEgPSBtZWRpYTtcbiAgICBpZiggdGhpcy52aXNpYmxlICkgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNob3dcbiAgICovXG4gIGFzeW5jIHNob3coKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMuJC5zYWZlQ292ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmaW4tYXBwJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsMCk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiQubmF2Ll9yZXNpemUoKTtcbiAgICAgIHRoaXMuJC5uYXYuc2V0Rm9jdXMoKTtcbiAgICB9LCAyNSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBoaWRlXG4gICAqL1xuICBhc3luYyBoaWRlKCkge1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLiQuc2FmZUNvdmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmaW4tYXBwJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfbG9hZEltYWdlXG4gICAqIEBkZXNjcmlwdGlvbiBwcmVsb2FkIGltYWdlIGFuZCBzZXQgYm91bmRzIHRvIGltYWdlIGRpbWVuc2lvbnNcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgdXJsIG9mIGltYWdlIHRvIGxvYWRcbiAgICogXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSByZXNvbHZlcyB3aGVuIGltYWdlIGlzIGxvYWRlZCBhbmQgYm91bmRzIGFycmF5IGhhcyBiZWVuIHNldFxuICAgKi9cbiAgIF9sb2FkSW1hZ2UodXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlcyA9IFtpbWcubmF0dXJhbEhlaWdodCwgaW1nLm5hdHVyYWxXaWR0aF07XG4gICAgICAgIHRoaXMuYm91bmRzID0gW1swLDBdLCByZXNdO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuXG4gICAgICBpbWcuc3JjID0gdXJsO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVuZGVyXG4gICAqIEBkZXNjcmlwdGlvbiByZW5kZXIgbGVhZmxldCBjYW52YXMgYmFzZWQgb24gZmVkb3JhIGlkXG4gICAqIFxuICAgKi9cbiAgYXN5bmMgcmVuZGVyKCkge1xuICAgIGlmKCB0aGlzLnJlbmRlcmVkTWVkaWEgPT09IHRoaXMubWVkaWEgKSByZXR1cm47XG5cbiAgICB0aGlzLnJlbmRlcmVkTWVkaWEgPSB0aGlzLm1lZGlhO1xuICAgIGxldCBpZCA9IHRoaXMucmVuZGVyZWRNZWRpYVsnQGlkJ107XG4gICAgaWYgKCB0aGlzLnJlbmRlcmVkTWVkaWEuYXNzb2NpYXRlZE1lZGlhICYmIHRoaXMucmVuZGVyZWRNZWRpYS5tZWRpYS5pbWFnZUxpc3QgKSB7XG4gICAgICBpZCA9IHRoaXMucmVuZGVyZWRNZWRpYS5pbWFnZS51cmw7XG4gICAgfVxuICAgIFxuICAgIGxldCB1cmwgPSB0aGlzLl9nZXRJbWdVcmwoaWQsICcnLCAnJyk7XG5cbiAgICAvLyB1c2VkIHRvIGNoZWNrIHN0YXRlIGJlbG93XG4gICAgdGhpcy5sb2FkaW5nVXJsID0gdXJsO1xuXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiggdGhpcy5pbWFnZU92ZXJsYXkgKSB7XG4gICAgICB0aGlzLnJlbmRlcmVkVXJsID0gJyc7XG4gICAgICB0aGlzLnZpZXdlci5yZW1vdmVMYXllcih0aGlzLmltYWdlT3ZlcmxheSk7XG4gICAgICB0aGlzLmltYWdlT3ZlcmxheSA9IG51bGw7XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5fbG9hZEltYWdlKHVybCk7XG5cbiAgICAvLyBjaGVjayB0aGF0IHdlIFxuICAgIC8vICAtIGRpZG4ndCBoYXZlIGEgbmV3IHJlcXVlc3QgdGhhdCB0b29rIGxvbmdlciB0aGFuIGFuIG9sZCByZXF1ZXN0XG4gICAgLy8gIC0gdGhhdCB3ZSBkaWRuJ3QgYWxyZWFkeSByZW5kZXIgdGhpcyB1cmxcbiAgICBpZiggdXJsICE9PSB0aGlzLmxvYWRpbmdVcmwgKSByZXR1cm47XG4gICAgaWYoIHVybCA9PT0gdGhpcy5yZW5kZXJlZFVybCApIHJldHVybjtcblxuICAgIHRoaXMucmVuZGVyZWRVcmwgPSB1cmw7XG5cbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgIGlmKCAhdGhpcy52aWV3ZXIgKSB7XG4gICAgICB0aGlzLnZpZXdlciA9IEwubWFwKHRoaXMuJC52aWV3ZXIsIHtcbiAgICAgICAgY3JzOiBMLkNSUy5TaW1wbGUsXG4gICAgICAgIG1pblpvb206IC00LFxuICAgICAgICB6b29tQ29udHJvbCA6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmltYWdlT3ZlcmxheSA9IEwuaW1hZ2VPdmVybGF5KHVybCwgdGhpcy5ib3VuZHMpLmFkZFRvKHRoaXMudmlld2VyKTtcbiAgICB0aGlzLnZpZXdlci5maXRCb3VuZHModGhpcy5ib3VuZHMpO1xuXG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ2xvc2VDbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byB2aWV3IG5hdiBjbG9zZSBldmVudFxuICAgKi9cbiAgX29uQ2xvc2VDbGlja2VkKCkge1xuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXQoe3Nob3dMaWdodGJveDogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblpvb21JbkNsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIHZpZXcgbmF2IHpvb20taW4gZXZlbnRcbiAgICovXG4gIF9vblpvb21JbkNsaWNrZWQoKSB7XG4gICAgdGhpcy52aWV3ZXIuem9vbUluKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25ab29tT3V0Q2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gdmlldyBuYXYgem9vbS1vdXQgZXZlbnRcbiAgICovXG4gIF9vblpvb21PdXRDbGlja2VkKCkge1xuICAgIHRoaXMudmlld2VyLnpvb21PdXQoKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWltYWdlLXZpZXdlci1saWdodGJveCcsIEFwcEltYWdlVmlld2VyKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcblxcbiAgcGFwZXItc3Bpbm5lci1saXRlIHtcXG4gICAgLS1wYXBlci1zcGlubmVyLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAjbG9hZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubGF5b3V0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuPC9zdHlsZT5cXG5cXG48ZGl2IGlkPVxcXCJsb2FkaW5nXFxcIiBoaWRkZW4kPVxcXCJbWyFsb2FkaW5nXV1cXFwiPlxcbiAgPHBhcGVyLXNwaW5uZXItbGl0ZSBhY3RpdmUkPVxcXCJbW2xvYWRpbmddXVxcXCI+PC9wYXBlci1zcGlubmVyLWxpdGU+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwibGF5b3V0XFxcIiBoaWRkZW4kPVxcXCJbW2xvYWRpbmddXVxcXCIgc3R5bGU9XFxcImxpbmUtaGVpZ2h0OiAwXFxcIj5cXG4gIDxpbWcgaWQ9XFxcImltZ1xcXCIgLz5cXG48L2Rpdj5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGVcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1pbWFnZS12aWV3ZXIuaHRtbFwiXG5cbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3V0aWxzXCJcblxuaW1wb3J0IEFwcFN0YXRlSW50ZXJmYWNlIGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL0FwcFN0YXRlSW50ZXJmYWNlXCJcbmltcG9ydCBNZWRpYUludGVyZmFjZSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9NZWRpYUludGVyZmFjZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEltYWdlVmlld2VyIGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gIC53aXRoKEV2ZW50SW50ZXJmYWNlLCBBcHBTdGF0ZUludGVyZmFjZSwgTWVkaWFJbnRlcmZhY2UpIHtcbiAgXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY29yZCA6IHtcbiAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiB7fVxuICAgICAgfSxcbiAgICAgIG1lZGlhIDoge1xuICAgICAgICB0eXBlIDogT2JqZWN0LFxuICAgICAgICB2YWx1ZSA6ICgpID0+IHt9XG4gICAgICB9LFxuICAgICAgbG9hZGluZzoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGhlaWdodCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiA2MDBcbiAgICAgIH0sXG4gICAgICBoYXNNdWx0aXBsZUltYWdlcyA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBhc3luYyByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuXG4gICAgbGV0IHNlbGVjdGVkUmVjb3JkTWVkaWEgPSBhd2FpdCB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0U2VsZWN0ZWRSZWNvcmRNZWRpYSgpO1xuICAgIGlmKCBzZWxlY3RlZFJlY29yZE1lZGlhICkgdGhpcy5fb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKHNlbGVjdGVkUmVjb3JkTWVkaWEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBBcHBTdGF0ZUludGVyZmFjZSwgY2FsbGVkIHdoZW4gYSByZWNvcmRzIG1lZGlhIGlzIHNlbGVjdGVkXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gbWVkaWEgXG4gICAqL1xuICBfb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKG1lZGlhKSB7XG4gICAgaWYoICFtZWRpYSApIHJldHVybjtcbiAgICBsZXQgZ2V0TWVkaWFUeXBlID0gdXRpbHMuZ2V0TWVkaWFUeXBlKG1lZGlhKTtcbiAgICBpZiAoZ2V0TWVkaWFUeXBlICE9PSAnSW1hZ2VMaXN0JyAmJiBnZXRNZWRpYVR5cGUgIT09ICdJbWFnZU9iamVjdCcpIHJldHVybjtcblxuICAgIHRoaXMubWVkaWEgPSBtZWRpYTtcbiAgICB0aGlzLl9yZW5kZXJJbWcoKTtcbiAgfVxuXG4gIF9yZW5kZXJJbWcoKSB7XG4gICAgaWYgKCB0aGlzLm1lZGlhLmhhc1BhcnQgJiYgdGhpcy5tZWRpYS5oYXNQYXJ0Lmxlbmd0aCA+IDAgKSB7XG4gICAgICB0aGlzLm1lZGlhLmltYWdlID0gdGhpcy5tZWRpYS5oYXNQYXJ0WzBdLmltYWdlO1xuICAgIH1cblxuICAgIC8vIFRPRE86IEp1c3RpbiBwbGVhc2UgcmV2aWV3LiAgRml4ZXMgdGhlIHByb2JsZW0gdy90aGUgaGVpZ2h0IGJlaW5nIHRvbyBsYXJnZSBzaW5jZSBcbiAgICAvLyAgICAgICB0aGUgcHJvYmxlbSBzZWVtcyB0byBvcmlnaW5hdGUgaW4gdGhpcy5oZWlnaHQgXG4gICAgLy8gICAgICAgYmVpbmcgc2V0IHRvIDYwMCBpbiB0aGlzIGNvbXBvbmVudCdzIHByb3BlcnRpZXMuXG4gICAgaWYgKCB0aGlzLm1lZGlhLmltYWdlLndpZHRoIDwgdGhpcy5oZWlnaHQpIHRoaXMuaGVpZ2h0ID0gdGhpcy5tZWRpYS5pbWFnZS53aWR0aDtcbiAgICBsZXQgdXJsID0gdGhpcy5fZ2V0SW1nVXJsKHRoaXMubWVkaWEuaW1hZ2UudXJsLCAnJywgdGhpcy5oZWlnaHQpO1xuICAgIGxldCByID0gNjAwIC8gdGhpcy5tZWRpYS5pbWFnZS5oZWlnaHQ7XG4gICAgbGV0IHcgPSB0aGlzLm1lZGlhLmltYWdlLndpZHRoICogcjtcblxuICAgIGxldCBlbGVXaWR0aCA9IHRoaXMub2Zmc2V0V2lkdGgtMjA7XG4gICAgaWYgKCBlbGVXaWR0aCA8IDEgKSBlbGVXaWR0aCA9IDE7XG5cbiAgICBsZXQgc3RhcnRIZWlnaHQgPSBNYXRoLmNlaWwoZWxlV2lkdGggPiB3ID8gdGhpcy5oZWlnaHQgOiAoKGVsZVdpZHRoL3cpKnRoaXMuaGVpZ2h0KSk7XG5cbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLiQubG9hZGluZy5zdHlsZS5oZWlnaHQgPSBzdGFydEhlaWdodCsncHgnO1xuICAgIFxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuJC5pbWcuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIH07XG4gICAgaW1nLnNyYyA9IHVybDtcblxuICAgIHRoaXMuJC5pbWcuc3R5bGUubWF4V2lkdGggPSB3ICsgJ3B4JztcbiAgICB0aGlzLiQuaW1nLnNyYyA9IHVybDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1pbWFnZS12aWV3ZXInLCBBcHBJbWFnZVZpZXdlcik7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSBpbmNsdWRlPVxcXCJzaGFyZWQtc3R5bGVzXFxcIj5cXG4gIDpob3N0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuXFxuICA6aG9zdChbc2luZ2xlLWltYWdlXSkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZzogMCA4cHggOHB4IDhweDtcXG4gIH1cXG5cXG4gIDpob3N0KFtzaW5nbGUtaW1hZ2VdKSBwYXBlci1pY29uLWJ1dHRvbixcXG4gIDpob3N0KFtzaW5nbGUtaW1hZ2VdKSBhcHAtc2hhcmUtYnRuLFxcbiAgOmhvc3QgYXBwLXNoYXJlLWJ0bixcXG4gIDpob3N0IHBhcGVyLWljb24tYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG5cXG4gIC5sYXlvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI3RodW1ibmFpbElubmVyQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDdweDtcXG4gIH1cXG5cXG4gXFxuICAjdGh1bWJuYWlscyB7XFxuICAgIC8qICg1MHB4IHdpZHRoICsgMTBweCBtYXJnaW4gKyA0cHggYm9yZGVyKSAqIDggdGh1bWJuYWlscyAqL1xcbiAgICBtYXgtd2lkdGg6IDUxMnB4O1xcbiAgfVxcblxcblxcbiAgI3RodW1ibmFpbHMge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcblxcbiAgI3RodW1ibmFpbHMgPiBkaXYge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgd2lsbC1jaGFuZ2U6IG1hcmdpbi1sZWZ0O1xcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAyNTBtcyBlYXNlLW91dDtcXG4gIH1cXG5cXG4gIC50aHVtYm5haWwge1xcbiAgICBtYXJnaW46IDAgNXB4IDVweCA2cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAgICBcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICAudGh1bWJuYWlsOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC50aHVtYm5haWw6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiB2YXIoLS1kZWZhdWx0LW91dGxpbmUpO1xcbiAgfVxcbiAgXFxuICAudGh1bWJuYWlsW3NlbGVjdGVkXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gIGlyb24taWNvbiB7XFxuICAgIHNoYXBlLXJlbmRlcmluZzogZ2VvbWV0cmljUHJlY2lzaW9uICFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiAyOHB4ICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMjhweCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgcGFwZXItaWNvbi1idXR0b24ge1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxuICB9XFxuXFxuICBwYXBlci1pY29uLWJ1dHRvbjpmb2N1cyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIHBhcGVyLWljb24tYnV0dG9uW2Rpc2FibGVkXSB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LXRleHQpO1xcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxuICB9XFxuXFxuICBwYXBlci1pY29uLWJ1dHRvbltpbnZpc2libGVdIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcblxcbiAgLnpvb20tYnRuc1twYWRdIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuXFxuPGRpdiBjbGFzcz1cXFwibGF5b3V0XFxcIj5cXG5cXG4gIDxkaXYgaWQ9XFxcIm5hdkxlZnRcXFwiIGhpZGRlbiQ9XFxcIltbc2luZ2xlSW1hZ2VdXVxcXCI+XFxuICAgIDxwYXBlci1pY29uLWJ1dHRvbiBub2luayBcXG4gICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxuICAgICAgaWNvbj1cXFwiY2hldnJvbi1sZWZ0XFxcIiBcXG4gICAgICBhbHQ9XFxcIlBhZ2UgdGh1bWJuYWlscyBsZWZ0XFxcIlxcbiAgICAgIGRpc2FibGVkJD1cXFwiW1shc2hvd05hdkxlZnRdXVxcXCJcXG4gICAgICBpbnZpc2libGUkPVxcXCJbWyFzaG93TmF2TGVmdF1dXFxcIlxcbiAgICAgIG9uLWNsaWNrPVxcXCJfcGFnZUxlZnRcXFwiPlxcbiAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGlkPVxcXCJ0aHVtYm5haWxzXFxcIiBoaWRkZW4kPVxcXCJbW3NpbmdsZUltYWdlXV1cXFwiPlxcbiAgICA8ZGl2IGlkPVxcXCJ0aHVtYm5haWxJbm5lckNvbnRhaW5lclxcXCI+XFxuICAgICAgPHRlbXBsYXRlIGlzPVxcXCJkb20tcmVwZWF0XFxcIiBpdGVtcz1cXFwiW1t0aHVtYm5haWxzXV1cXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBcXG4gICAgICAgICAgY2xhc3M9XFxcInRodW1ibmFpbFxcXCJcXG4gICAgICAgICAgYWx0JD1cXFwiUGFnZSAjW1tpdGVtLnBvc2l0aW9uXV1cXFwiXFxuICAgICAgICAgIHRpdGxlJD1cXFwiW1tpdGVtLmlkXV1cXFwiXFxuICAgICAgICAgIG1lZGlhLWlkJD1cXFwiW1tpdGVtLmlkXV1cXFwiXFxuICAgICAgICAgIGRpc2FibGVkJD1cXFwiW1tpdGVtLmRpc2FibGVkXV1cXFwiXFxuICAgICAgICAgIHNlbGVjdGVkJD1cXFwiW1tpdGVtLnNlbGVjdGVkXV1cXFwiIFxcbiAgICAgICAgICBzdHlsZSQ9XFxcImJhY2tncm91bmQtaW1hZ2U6dXJsKFtbaXRlbS5zcmNdXSlcXFwiXFxuICAgICAgICAgIG9uLWNsaWNrPVxcXCJfb25UaHVtYm5haWxDbGlja2VkXFxcIj5cXG4gICAgICAgICAgICA8aXJvbi1pY29uIGljb249XFxcImZpbi1pY29uczpbW2l0ZW0uaWNvbl1dXFxcIj48L2lyb24taWNvbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvdGVtcGxhdGU+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGlkPVxcXCJuYXZSaWdodFxcXCIgaGlkZGVuJD1cXFwiW1tzaW5nbGVJbWFnZV1dXFxcIj5cXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIG5vaW5rIFxcbiAgICAgIHRhYmluZGV4PVxcXCIwXFxcIiBcXG4gICAgICBpY29uPVxcXCJjaGV2cm9uLXJpZ2h0XFxcIiBcXG4gICAgICBhbHQ9XFxcIlBhZ2UgdGh1bWJuYWlscyByaWdodFxcXCJcXG4gICAgICBkaXNhYmxlZCQ9XFxcIltbIXNob3dOYXZSaWdodF1dXFxcIlxcbiAgICAgIGludmlzaWJsZSQ9XFxcIltbIXNob3dOYXZSaWdodF1dXFxcIlxcbiAgICAgIG9uLWNsaWNrPVxcXCJfcGFnZVJpZ2h0XFxcIj5cXG4gICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBzdHlsZT1cXFwiZmxleDoxXFxcIj48L2Rpdj5cXG4gIFxcbiAgPGRpdiBpZD1cXFwiYnV0dG9uV3JhcHBlclxcXCIgaGlkZGVuJD1cXFwiW1ticmVha0NvbnRyb2xzXV1cXFwiIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTogbm93cmFwXFxcIj5cXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIGlkPVxcXCJ6b29tT3V0MVxcXCIgbm9pbmsgdGFiaW5kZXg9XFxcIjBcXFwiIGljb249XFxcInpvb20tb3V0XFxcIiBoaWRkZW4kPVxcXCJbWyFpc0xpZ2h0Ym94XV1cXFwiIG9uLWNsaWNrPVxcXCJfb25ab29tT3V0Q2xpY2tlZFxcXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIG5vaW5rIGljb249XFxcInpvb20taW5cXFwiIHRhYmluZGV4PVxcXCIwXFxcIiBoaWRkZW4kPVxcXCJbWyFpc0xpZ2h0Ym94XV1cXFwiIG9uLWNsaWNrPVxcXCJfb25ab29tSW5DbGlja2VkXFxcIj48L3BhcGVyLWljb24tYnV0dG9uPlxcbiAgICBcXG4gICAgPGFwcC1zaGFyZS1idG4gaWQ9XFxcInNoYXJlQnRuXFxcIiByb2xlPVxcXCJidXR0b25cXFwiPjwvYXBwLXNoYXJlLWJ0bj5cXG5cXG4gICAgPHNwYW4gaGlkZGVuJD1cXFwiW1shc2hvd09wZW5MaWdodGJveF1dXFxcIiBjbGFzcz1cXFwiem9vbS1idG5zXFxcIiBwYWQkPVxcXCJbWyFzaG93T3BlbkxpZ2h0Ym94XV1cXFwiPlxcbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBub2luayBpY29uPVxcXCJ6b29tLWluXFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgaGlkZGVuJD1cXFwiW1tpc0xpZ2h0Ym94XV1cXFwiIG9uLWNsaWNrPVxcXCJfb25ab29tSW5DbGlja2VkXFxcIj48L3BhcGVyLWljb24tYnV0dG9uPlxcbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBub2luayBpY29uPVxcXCJmaW4taWNvbnM6Y2xvc2VcXFwiIHRhYmluZGV4PVxcXCIwXFxcIiBoaWRkZW4kPVxcXCJbWyFpc0xpZ2h0Ym94XV1cXFwiIG9uLWNsaWNrPVxcXCJfb25DbG9zZUNsaWNrZWRcXFwiPjwvcGFwZXItaWNvbi1idXR0b24+XFxuICAgIDwvc3Bhbj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgaGlkZGVuJD1cXFwiW1shYnJlYWtDb250cm9sc11dXFxcIiBzdHlsZT1cXFwidGV4dC1hbGlnbjogcmlnaHRcXFwiPlxcbiAgPHBhcGVyLWljb24tYnV0dG9uIGlkPVxcXCJ6b29tT3V0MlxcXCIgbm9pbmsgdGFiaW5kZXg9XFxcIjBcXFwiIGljb249XFxcInpvb20tb3V0XFxcIiBoaWRkZW4kPVxcXCJbWyFpc0xpZ2h0Ym94XV1cXFwiIG9uLWNsaWNrPVxcXCJfb25ab29tT3V0Q2xpY2tlZFxcXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cXG4gIDxwYXBlci1pY29uLWJ1dHRvbiBub2luayBpY29uPVxcXCJ6b29tLWluXFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgaGlkZGVuJD1cXFwiW1shaXNMaWdodGJveF1dXFxcIiBvbi1jbGljaz1cXFwiX29uWm9vbUluQ2xpY2tlZFxcXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cXG4gIFxcbiAgPGFwcC1zaGFyZS1idG4+PC9hcHAtc2hhcmUtYnRuPlxcbiAgXFxuICA8c3BhbiBoaWRkZW4kPVxcXCJbWyFzaG93T3BlbkxpZ2h0Ym94XV1cXFwiIGNsYXNzPVxcXCJ6b29tLWJ0bnNcXFwiPlxcbiAgICA8cGFwZXItaWNvbi1idXR0b24gbm9pbmsgaWNvbj1cXFwiem9vbS1pblxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiIGhpZGRlbiQ9XFxcIltbaXNMaWdodGJveF1dXFxcIiBvbi1jbGljaz1cXFwiX29uWm9vbUluQ2xpY2tlZFxcXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIG5vaW5rIGljb249XFxcImZpbi1pY29uczpjbG9zZVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiIGhpZGRlbiQ9XFxcIltbIWlzTGlnaHRib3hdXVxcXCIgb24tY2xpY2s9XFxcIl9vbkNsb3NlQ2xpY2tlZFxcXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cXG4gIDwvc3Bhbj5cXG48L2Rpdj5cXG5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1tZWRpYS12aWV3ZXItbmF2Lmh0bWxcIlxuXG5pbXBvcnQgQXBwU3RhdGVJbnRlcmZhY2UgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvQXBwU3RhdGVJbnRlcmZhY2VcIlxuaW1wb3J0IE1lZGlhSW50ZXJmYWNlIGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL01lZGlhSW50ZXJmYWNlXCJcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b25cIlxuaW1wb3J0IFwiLi4vLi4vLi4vdXRpbHMvYXBwLXNoYXJlLWJ0blwiXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi91dGlsc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcE1lZGlhVmlld2VyTmF2IGV4dGVuZHMgTWl4aW4oUG9seW1lckVsZW1lbnQpXG4gIC53aXRoKEV2ZW50SW50ZXJmYWNlLCBBcHBTdGF0ZUludGVyZmFjZSwgTWVkaWFJbnRlcmZhY2UpIHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyB0aHVtYm5haWwgd2lkdGggdy8gYm9yZGVyIGFuZCBtYXJnaW5cbiAgICAgIHRvdGFsVGh1bWJuYWlsV2lkdGggOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlIDogNjQsXG4gICAgICB9LFxuICAgICAgaWNvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcbiAgICAgIGljb25XaWR0aCA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiA0MFxuICAgICAgfSxcbiAgICAgIHRodW1ibmFpbHMgOiB7XG4gICAgICAgIHR5cGUgOiBBcnJheSxcbiAgICAgICAgdmFsdWUgOiAoKSA9PiBbXVxuICAgICAgfSxcbiAgICAgIHRodW1ibmFpbHNQZXJGcmFtZSA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgdmFsdWUgOiAxMFxuICAgICAgfSxcbiAgICAgIGxlZnRNb3N0VGh1bWJuYWlsIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICB2YWx1ZSA6IDBcbiAgICAgIH0sXG4gICAgICBicmVha0NvbnRyb2xzIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdDogdHJ1ZSxcbiAgICAgICAgbm90aWZ5IDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNob3dOYXZMZWZ0IDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHNob3dOYXZSaWdodCA6IHtcbiAgICAgICAgdHlwZSA6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBpc0xpZ2h0Ym94IDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHNpbmdsZUltYWdlIDoge1xuICAgICAgICB0eXBlIDogQm9vbGVhbixcbiAgICAgICAgdmFsdWUgOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuICAgICAgbWVkaWFMaXN0IDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW11cbiAgICAgIH0sXG4gICAgICBzaG93T3BlbkxpZ2h0Ym94IDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5fcmVzaXplKCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChlKSA9PiB0aGlzLl9vblRvdWNoRW5kKGUpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAoZSkgPT4gdGhpcy5fb25Ub3VjaEVuZChlKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB0aGlzLl9vblRvdWNoTW92ZShlKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHRoaXMuX29uVG91Y2hTdGFydChlKSk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX3Jlc2l6ZSgpO1xuICB9XG5cbiAgYXN5bmMgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICBsZXQgc2VsZWN0ZWRSZWNvcmQgPSBhd2FpdCB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0U2VsZWN0ZWRSZWNvcmQoKTtcbiAgICBpZiggc2VsZWN0ZWRSZWNvcmQgKSB7XG4gICAgICB0aGlzLl9vblNlbGVjdGVkUmVjb3JkVXBkYXRlKHNlbGVjdGVkUmVjb3JkKTtcbiAgICAgIGxldCBzZWxlY3RlZFJlY29yZE1lZGlhID0gYXdhaXQgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkTWVkaWEoKTtcbiAgICAgIGlmKCBzZWxlY3RlZFJlY29yZE1lZGlhICkgdGhpcy5fb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKHNlbGVjdGVkUmVjb3JkTWVkaWEpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkFwcFN0YXRlVXBkYXRlKGUpIHtcbiAgICBpZiggZS5tZWRpYVZpZXdlck5hdkxlZnRNb3N0VGh1bWJuYWlsID09PSB1bmRlZmluZWQgKSByZXR1cm47XG4gICAgaWYoIGUubWVkaWFWaWV3ZXJOYXZMZWZ0TW9zdFRodW1ibmFpbCA9PT0gdGhpcy5sZWZ0TW9zdFRodW1ibmFpbCApIHJldHVybjtcbiAgICB0aGlzLmxlZnRNb3N0VGh1bWJuYWlsID0gZS5tZWRpYVZpZXdlck5hdkxlZnRNb3N0VGh1bWJuYWlsO1xuICAgIHRoaXMuX3Jlc2l6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uVG91Y2hFbmRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIHdpbmRvdyB0b3VjaCBlbmQvY2FuY2VsIGV2ZW50cy4gaWYgd2UgYXJlXG4gICAqIHBlcmZvcm1pbmcgYSB0b3VjaCAoc3dpcGUpIGFjdGlvbiwgc2VlIGlmIHdlIGhhdmUgcmVhY2hlZCB0aGUgXG4gICAqIHRocmVzaG9sZCBmb3Igc3dpcGUgYW5kIGlmIHNvLCBwYWdlIGxlZnQvcmlnaHRcbiAgICogIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBIVE1MIHRvdWNoIGV2ZW50XG4gICAqL1xuICBfb25Ub3VjaEVuZChlKSB7XG4gICAgaWYoICF0aGlzLnRvdWNoQWN0aW9uICkgcmV0dXJuO1xuICAgIHRoaXMudG91Y2hBY3Rpb24gPSBmYWxzZTtcblxuICAgIGxldCBkaWZmID0gdGhpcy50b3VjaFN0YXJ0WCAtIHRoaXMudG91Y2hDdXJyZW50WDtcbiAgICBsZXQgc2RpZmYgPSBNYXRoLmFicyhkaWZmKTtcblxuICAgIGlmKCBzZGlmZiA+IHRoaXMudG90YWxUaHVtYm5haWxXaWR0aCAvIDIgKSB7XG4gICAgICBpZiggZGlmZiA8IDAgKSB0aGlzLl9wYWdlTGVmdCgpO1xuICAgICAgZWxzZSB0aGlzLl9wYWdlUmlnaHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25Ub3VjaE1vdmVcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIHdpbmRvd3MgdG91Y2ggbW92ZSBldmVudC4gaWYgd2UgYXJlIHBlcmZvcm1pbmcgXG4gICAqIGEgdG91Y2ggKHN3aXBlKSBhY3Rpb24sIG5lZWQgdG8ga2VlcCB0cmFjayBvZiBjdXJyZW50IHggb2Zmc2V0XG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBIVE1MIHRvdWNoIGV2ZW50XG4gICAqL1xuICBfb25Ub3VjaE1vdmUoZSkge1xuICAgIGlmKCAhdGhpcy50b3VjaEFjdGlvbiApIHJldHVybjtcbiAgICB0aGlzLnRvdWNoQ3VycmVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblRvdWNoU3RhcnRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIHRoaXMgZWxlbWVudHMgdG91Y2hzdGFydCBldmVudC5cbiAgICogc3RhcnQgcGVyZm9ybWluZyBhIHRvdWNoIChzd2lwZSkgYWN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBIVE1MIHRvdWNoIGV2ZW50XG4gICAqL1xuICBfb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICB0aGlzLnRvdWNoQWN0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgdGhpcy50b3VjaEN1cnJlbnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfcmVzaXplXG4gICAqIEBkZXNjcmlwdGlvbiB1cGRhdGUgdGh1bWJuYWlsIHByZXZpZXcgb24gcmVzaXplXG4gICAqIFxuICAgKi9cbiAgX3Jlc2l6ZSgpIHtcbiAgICAvLyBsZXQgdyA9IHRoaXMub2Zmc2V0V2lkdGg7XG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBcbiAgICAvLyBncnJyclxuICAgIGlmKCB3ID09PSAwICkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0lnbm9yZWluZyByZXNpemUnKVxuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9yZXNpemUoKSwgMjAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3IC09IDE2OyAvLyBwYWRkaW5nXG5cbiAgICB0aGlzLl9zZXROYXZCcmVhayh3KTtcblxuICAgIGxldCBpY29uc1dpZHRoO1xuICAgIGlmKCB0aGlzLmJyZWFrQ29udHJvbHMgKSB7XG4gICAgICBpY29uc1dpZHRoID0gdGhpcy5pY29uV2lkdGggKiAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBpY29uc1dpZHRoID0gdGhpcy5pY29uV2lkdGggKiA0O1xuICAgICAgaWYoIHRoaXMuaXNMaWdodGJveCApIGljb25zV2lkdGggKz0gdGhpcy5pY29uV2lkdGggKiAyO1xuICAgIH1cblxuICAgIGxldCBhdmFpbGFibGVUaHVtYlNwYWNlID0gTWF0aC5taW4odyAtIGljb25zV2lkdGgsIDUxMik7XG4gICAgdGhpcy50aHVtYm5haWxzUGVyRnJhbWUgPSBNYXRoLm1heChNYXRoLmZsb29yKGF2YWlsYWJsZVRodW1iU3BhY2UgLyB0aGlzLnRvdGFsVGh1bWJuYWlsV2lkdGgpLCAxKTtcbiAgICB0aGlzLiQudGh1bWJuYWlscy5zdHlsZS53aWR0aCA9ICh0aGlzLnRodW1ibmFpbHNQZXJGcmFtZSp0aGlzLnRvdGFsVGh1bWJuYWlsV2lkdGgpKydweCc7XG5cbiAgICB0aGlzLnNob3dOYXZMZWZ0ID0gKHRoaXMubGVmdE1vc3RUaHVtYm5haWwgIT09IDApO1xuICAgIHRoaXMuc2hvd05hdlJpZ2h0ID0gIXRoaXMuX3Nob3dpbmdMYXN0VGh1bWJGcmFtZSgpO1xuXG4gICAgdGhpcy5fdXBkYXRlVGh1bWJuYWlsQ29udGFpbmVyUG9zKCk7XG4gIH1cblxuICBfZ2V0VG90YWxJY29uV2lkdGgoKSB7XG4gICAgbGV0IHRvdGFsSWNvbldpZHRoID0gdGhpcy5pY29uV2lkdGggKiA0OyAvLyBuYXYgaWNvbnMgYW5kIGRlZmF1bHQgaWNvbnNcbiAgICBpZiggdGhpcy5pc0xpZ2h0Ym94ICkgdG90YWxJY29uV2lkdGggKz0gdGhpcy5pY29uV2lkdGggKiAyO1xuICAgIHJldHVybiB0b3RhbEljb25XaWR0aDtcbiAgfVxuXG4gIF9zZXROYXZCcmVhayh3aWR0aCkge1xuICAgIGxldCB0b3RhbEljb25XaWR0aCA9IHRoaXMuaWNvbldpZHRoICogNDsgLy8gbmF2IGljb25zIGFuZCBkZWZhdWx0IGljb25zXG4gICAgaWYoIHRoaXMuaXNMaWdodGJveCApIHRvdGFsSWNvbldpZHRoICs9IHRoaXMuaWNvbldpZHRoICogMjtcblxuICAgIGlmKCB0b3RhbEljb25XaWR0aCArICh0aGlzLnRvdGFsVGh1bWJuYWlsV2lkdGggKiA0KSA+IHdpZHRoICkge1xuICAgICAgdGhpcy5icmVha0NvbnRyb2xzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5icmVha0NvbnRyb2xzID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgX3BhZ2VMZWZ0KCkge1xuICAgIHRoaXMubGVmdE1vc3RUaHVtYm5haWwgPSB0aGlzLmxlZnRNb3N0VGh1bWJuYWlsIC0gdGhpcy50aHVtYm5haWxzUGVyRnJhbWU7XG4gICAgaWYoIHRoaXMubGVmdE1vc3RUaHVtYm5haWwgPCAwICkgdGhpcy5sZWZ0TW9zdFRodW1ibmFpbCA9IDA7XG4gICAgdGhpcy5fcmVzaXplKCk7XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldCh7bWVkaWFWaWV3ZXJOYXZMZWZ0TW9zdFRodW1ibmFpbDogdGhpcy5sZWZ0TW9zdFRodW1ibmFpbH0pO1xuICB9XG5cbiAgX3BhZ2VSaWdodCgpIHtcbiAgICBpZiggdGhpcy5fc2hvd2luZ0xhc3RUaHVtYkZyYW1lKCkgKSByZXR1cm47XG4gICAgdGhpcy5sZWZ0TW9zdFRodW1ibmFpbCA9IHRoaXMubGVmdE1vc3RUaHVtYm5haWwgKyB0aGlzLnRodW1ibmFpbHNQZXJGcmFtZTtcbiAgICB0aGlzLl9yZXNpemUoKTtcbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuc2V0KHttZWRpYVZpZXdlck5hdkxlZnRNb3N0VGh1bWJuYWlsOiB0aGlzLmxlZnRNb3N0VGh1bWJuYWlsfSk7XG4gIH1cblxuICBfc2hvd2luZ0xhc3RUaHVtYkZyYW1lKCkge1xuICAgIGlmKCB0aGlzLmxlZnRNb3N0VGh1bWJuYWlsICsgdGhpcy50aHVtYm5haWxzUGVyRnJhbWUgPiB0aGlzLnRodW1ibmFpbHMubGVuZ3RoLTEgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX3VwZGF0ZVRodW1ibmFpbENvbnRhaW5lclBvcygpIHtcbiAgICAvLyB0aGF0ICsxIGlzIGEgaGFjaywgd2hhdCBhbSBJIG1pc3NpbmcgIT9cbiAgICB0aGlzLiQudGh1bWJuYWlsSW5uZXJDb250YWluZXIuc3R5bGUubWFyZ2luTGVmdCA9ICgtMSAqIHRoaXMubGVmdE1vc3RUaHVtYm5haWwgKiAodGhpcy50b3RhbFRodW1ibmFpbFdpZHRoICsgMSkpICsgJ3B4JztcblxuICAgIGxldCBsYXN0VGh1bWIgPSB0aGlzLmxlZnRNb3N0VGh1bWJuYWlsICsgdGhpcy50aHVtYm5haWxzUGVyRnJhbWU7XG4gICAgdGhpcy50aHVtYm5haWxzLmZvckVhY2goKHRodW1ibmFpbCwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuc2V0KGB0aHVtYm5haWxzLiR7aW5kZXh9LmRpc2FibGVkYCwgKGluZGV4IDwgdGhpcy5sZWZ0TW9zdFRodW1ibmFpbCB8fCBpbmRleCA+PSBsYXN0VGh1bWIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlbGVjdGVkUmVjb3JkVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBmcm9tIEFwcFN0YXRlSW50ZXJmYWNlLCBjYWxsZWQgd2hlbiBhIHJlY29yZCBpcyBzZWxlY3RlZFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZCBzZWxlY3RlZCByZWNvcmRcbiAgICovXG4gIF9vblNlbGVjdGVkUmVjb3JkVXBkYXRlKHJlY29yZCkge1xuICAgIHRoaXMubGVmdE1vc3RUaHVtYm5haWwgPSAwO1xuXG4gICAgaWYoICFyZWNvcmQgKSB7XG4gICAgICB0aGlzLnNpbmdsZUltYWdlID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgaWYgKHV0aWxzLmNvdW50TWVkaWFJdGVtcyhyZWNvcmQubWVkaWEpID09PSAxKSB7XG4gICAgICB0aGlzLnNpbmdsZUltYWdlID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1lZGlhTGlzdCA9IHV0aWxzLmZsYXR0ZW5NZWRpYUxpc3QocmVjb3JkLm1lZGlhKTtcbiAgICB0aGlzLm1lZGlhTGlzdCA9IHV0aWxzLm9yZ2FuaXplTWVkaWFMaXN0KHRoaXMubWVkaWFMaXN0KTtcblxuICAgIHRoaXMudGh1bWJuYWlscyA9IHRoaXMubWVkaWFMaXN0Lm1hcChtZWRpYSA9PiB7XG4gICAgICBsZXQge2ZpbGVUeXBlLCBpY29uVHlwZX0gPSB0aGlzLl9nZXRGaWxlQW5kSWNvblR5cGUobWVkaWEpO1xuXG4gICAgICBpZiggdGhpcy5pc0xpZ2h0Ym94ICYmIGZpbGVUeXBlICE9PSAnaW1hZ2UnICkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbGV0IHRodW1ibmFpbFVybCA9IG1lZGlhLnRodW1ibmFpbFVybDtcbiAgICAgIGlmKCB0aHVtYm5haWxVcmwgJiYgIXRodW1ibmFpbFVybC5tYXRjaCgvXFwvc3ZjOmlpaWZcXC8vKSApIHtcbiAgICAgICAgdGh1bWJuYWlsVXJsICs9ICcvc3ZjOmlpaWYvZnVsbC8sNTAvMC9kZWZhdWx0LmpwZyc7XG4gICAgICB9XG5cbiAgICAgIGxldCB0aHVtYm5haWwgPSB7XG4gICAgICAgIGlkOiBtZWRpYVsnQGlkJ10sXG4gICAgICAgIGljb246IGljb25UeXBlLFxuICAgICAgICBwb3NpdGlvbjogbWVkaWEucG9zaXRpb24sXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBzcmM6IHRodW1ibmFpbFVybCBcbiAgICAgICAgLy8gdGh1bWJuYWlsOiB1cmxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRodW1ibmFpbDtcbiAgICB9KVxuICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtID8gdHJ1ZSA6IGZhbHNlKVxuICAgIC8vIFRPRE86IEZpbHRlcmluZyBvdXQgdGhlIHRleHQgYmFzZWQgZmlsZXMgZm9yIG5vdyB1bnRpbCB3ZSBnZXQgdGhlIFBERi90ZXh0IHZpZXdlciBzZXQgdXAgY29ycmVjdGx5XG4gICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuaWNvbiAhPT0gJ2JsYW5rLXJvdW5kJyk7XG5cbiAgICB0aGlzLnNpbmdsZUltYWdlID0gKHRoaXMudGh1bWJuYWlscy5sZW5ndGggIT09IDAgJiYgdGhpcy50aHVtYm5haWxzLmxlbmd0aCA+IDEpID8gZmFsc2UgOiB0cnVlO1xuICAgIHRoaXMuX3Jlc2l6ZSgpO1xuXG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldCh7bWVkaWFWaWV3ZXJOYXZMZWZ0TW9zdFRodW1ibmFpbDogMH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU2VsZWN0ZWRSZWNvcmRNZWRpYVVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gZnJvbSBBcHBTdGF0ZUludGVyZmFjZSwgY2FsbGVkIHdoZW4gYSByZWNvcmRzIG1lZGlhIGlzIHNlbGVjdGVkXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gbWVkaWEgXG4gICAqL1xuICBfb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKG1lZGlhKSB7XG4gICAgdGhpcy5tZWRpYSA9IG1lZGlhO1xuICAgIGlmKCAhbWVkaWEgKSByZXR1cm47XG5cbiAgICB0aGlzLnRodW1ibmFpbHMuZm9yRWFjaCgodGh1bWJuYWlsLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5zZXQoYHRodW1ibmFpbHMuJHtpbmRleH0uc2VsZWN0ZWRgLCAodGhpcy5tZWRpYVsnQGlkJ10gPT09IHRodW1ibmFpbC5pZCkpO1xuICAgIH0pO1xuXG4gICAgbGV0IHtmaWxlVHlwZSwgaWNvblR5cGV9ID0gdGhpcy5fZ2V0RmlsZUFuZEljb25UeXBlKG1lZGlhKTtcbiAgICBcbiAgICB0aGlzLnNob3dPcGVuTGlnaHRib3ggPSAoZmlsZVR5cGUgPT09ICdpbWFnZScpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgX2dldEZpbGVBbmRJY29uVHlwZShtZWRpYSkge1xuICAgIGxldCBfZmlsZSA9ICcnO1xuICAgIGxldCBmaWxlVHlwZSAgID0gX2ZpbGU7XG4gICAgbGV0IGZpbGVGb3JtYXQgPSBfZmlsZTtcbiAgICBsZXQgaWNvblR5cGUgICA9ICcnO1xuXG4gICAgaWYgKG1lZGlhLmZpbGVGb3JtYXQgfHwgbWVkaWEuZW5jb2RpbmdGb3JtYXQpIHtcbiAgICAgIF9maWxlID0gKG1lZGlhLmZpbGVGb3JtYXQgPyBtZWRpYS5maWxlRm9ybWF0IDogbWVkaWEuZW5jb2RpbmdGb3JtYXQpO1xuXG4gICAgICBcbiAgICAgIGZpbGVUeXBlICAgPSBfZmlsZS5zcGxpdCgnLycpLnNoaWZ0KCk7XG4gICAgICBmaWxlRm9ybWF0ID0gX2ZpbGUuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICB9XG5cbiAgICBsZXQgdHlwZSA9IHV0aWxzLmdldE1lZGlhVHlwZShtZWRpYSk7XG4gICAgaWYgKHR5cGUgPT09ICdBdWRpb09iamVjdCcgfHwgZmlsZVR5cGUgPT09ICdhdWRpbycpIGljb25UeXBlID0gJ3NvdW5kLXJvdW5kJztcbiAgICBlbHNlIGlmICh0eXBlID09PSAnVmlkZW9PYmplY3QnIHx8IHR5cGUgPT09ICdTdHJlYW1pbmdWaWRlbycgfHwgZmlsZVR5cGUgPT09ICd2aWRlbycpIGljb25UeXBlID0gJ3ZpZGVvLXJvdW5kJztcbiAgICBlbHNlIGlmIChmaWxlRm9ybWF0ID09PSAncGRmJykgaWNvblR5cGUgPSAnYmxhbmstcm91bmQnO1xuICAgIC8vIFRPRE86IEdldCBiYWNrIHRvIHRoaXNcbiAgICBlbHNlIGlmIChmaWxlVHlwZSA9PT0gJzM2MCcpICAgaWNvblR5cGUgPSAnMzYwLXJvdW5kJztcblxuICAgIHJldHVybiB7ZmlsZVR5cGUsIGljb25UeXBlfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblRodW1ibmFpbENsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIHRodW1ibmFpbCBjbGljayBldmVudC4gIHNlbGVjdCBhIG1lZGlhIG9iamVjdFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgSFRNTCBjbGljayBldmVudFxuICAgKi9cbiAgX29uVGh1bWJuYWlsQ2xpY2tlZChlKSB7XG4gICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnbWVkaWEtaWQnKTtcbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuc2V0TG9jYXRpb24oaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uWm9vbUluQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gem9vbSBpY29uIGNsaWNrIGV2ZW50LiAgZW1pdCB6b29tIGV2ZW50XG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBIVE1MIGNsaWNrIGV2ZW50XG4gICAqL1xuICBfb25ab29tSW5DbGlja2VkKGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd6b29tLWluJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uWm9vbU91dENsaWNrZWRcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIHpvb20gaWNvbiBjbGljayBldmVudC4gIGVtaXQgem9vbSBldmVudFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgSFRNTCBjbGljayBldmVudFxuICAgKi9cbiAgX29uWm9vbU91dENsaWNrZWQoZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3pvb20tb3V0JykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ2xvc2VDbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byBjbG9zZSBpY29uIGNsaWNrIGV2ZW50LiAgZW1pdCBjbG9zZSBldmVudFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgSFRNTCBjbGljayBldmVudFxuICAgKi9cbiAgX29uQ2xvc2VDbGlja2VkKGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNldEZvY3VzXG4gICAqIEBkZXNjcmlwdGlvbiBzZXQgZm9jdXMgdG8gZmlyc3QgY2xpY2thYmxlIGVsZW1lbnRcbiAgICovXG4gIHNldEZvY3VzKCkge1xuICAgIGlmKCB0aGlzLnNpbmdsZUltYWdlICkge1xuICAgICAgaWYoICF0aGlzLmJyZWFrQ29udHJvbHMgKSB0aGlzLiQuem9vbU91dDEuZm9jdXMoKTtcbiAgICAgIGVsc2UgdGhpcy4kLnpvb21PdXQyLmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaXJzdEJ0biA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICAgIGlmKCBmaXJzdEJ0biApIGZpcnN0QnRuLmZvY3VzKCk7XG4gICAgfVxuICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLW1lZGlhLXZpZXdlci1uYXYnLCBBcHBNZWRpYVZpZXdlck5hdik7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiXG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2FwcC1tZWRpYS12aWV3ZXIudHBsXCJcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLXBhZ2VzJ1xuXG5pbXBvcnQgXCIuL2FwcC1pbWFnZS12aWV3ZXJcIlxuLy8gaW1wb3J0IFwiLi9hcHAtMzYwLWltYWdlLXZpZXdlclwiXG5pbXBvcnQgXCIuL2FwcC12aWRlby12aWV3ZXJcIlxuaW1wb3J0IFwiLi9hcHAtYXVkaW8tdmlld2VyXCJcblxuaW1wb3J0IFwiLi9hcHAtbWVkaWEtdmlld2VyLW5hdlwiXG5pbXBvcnQgXCIuL2FwcC1pbWFnZS12aWV3ZXItbGlnaHRib3hcIlxuXG5pbXBvcnQgXCJAdWNkLWxpYi9jb3JrLWFwcC11dGlsc1wiXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi91dGlsc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcE1lZGlhVmlld2VyIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZWRpYVR5cGU6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgdGFsbENvbnRyb2xzIDoge3R5cGU6IEJvb2xlYW59LFxuICAgICAgICBiYWdPZkZpbGVzSW1hZ2UgOiB7dHlwZTogU3RyaW5nfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLl9pbmplY3RNb2RlbCgnQXBwU3RhdGVNb2RlbCcsICdSZWNvcmRNb2RlbCcpO1xuICAgICAgdGhpcy5tZWRpYVR5cGUgPSAnaW1hZ2UnO1xuICAgICAgdGhpcy5iYWdPZkZpbGVzSW1hZ2UgPSAnJztcbiAgICB9XG5cbiAgICBhc3luYyBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICB0aGlzLiQubGlnaHRib3ggPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2xpZ2h0Ym94Jyk7XG4gICAgICBpZiggIXRoaXMuJC5saWdodGJveCApIHRoaXMuJC5saWdodGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWdodGJveCcpO1xuXG4gICAgICB0aGlzLl9vbkFwcFN0YXRlVXBkYXRlKGF3YWl0IHRoaXMuQXBwU3RhdGVNb2RlbC5nZXQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBfb25SZWNvcmRVcGRhdGVcbiAgICAgKiBAZGVzY3JpcHRpb24gZnJvbSBSZWNvcmRNb2RlbCwgbGlzdGVuIGZvciBsb2FkaW5nIGV2ZW50cyBhbmQgcmVzZXQgVUkuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGUgc3RhdGUgZXZlbnQgXG4gICAgICovXG4gICAgX29uUmVjb3JkVXBkYXRlKGUpIHtcbiAgICAgIC8vIGlmKCBlLnN0YXRlICE9PSAnbG9hZGluZycgKSByZXR1cm47XG4gICAgICAvLyB0aGlzLm1lZGlhVHlwZSA9ICcnO1xuICAgIH1cblxuICAgIF9vbkFwcFN0YXRlVXBkYXRlKGUpIHtcbiAgICAgIGlmKCAhZS5zZWxlY3RlZFJlY29yZE1lZGlhICkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUmVjb3JkTWVkaWFJZCA9ICcnO1xuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYVR5cGUgPSAnJztcbiAgICAgIH1cbiAgICAgIGlmKCBlLnNlbGVjdGVkUmVjb3JkTWVkaWFbJ0BpZCddID09PSB0aGlzLnNlbGVjdGVkUmVjb3JkTWVkaWFJZCApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbGVjdGVkUmVjb3JkTWVkaWFJZCA9IGUuc2VsZWN0ZWRSZWNvcmRNZWRpYVsnQGlkJ107XG5cbiAgICAgIGxldCBtZWRpYVR5cGUgPSB1dGlscy5nZXRNZWRpYVR5cGUoZS5zZWxlY3RlZFJlY29yZE1lZGlhKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL29iamVjdC9pLCAnJyk7XG4gICAgICBpZiAoIG1lZGlhVHlwZSA9PT0gXCJpbWFnZWxpc3RcIiApIHtcbiAgICAgICAgbWVkaWFUeXBlID0gXCJpbWFnZVwiO1xuICAgICAgfSBlbHNlIGlmICggbWVkaWFUeXBlID09PSBcInN0cmVhbWluZ3ZpZGVvXCIgKXtcbiAgICAgICAgbWVkaWFUeXBlID0gXCJ2aWRlb1wiO1xuICAgICAgfVxuXG4gICAgICBpZiggbWVkaWFUeXBlID09PSAnYmFnb2ZmaWxlcycgJiYgZS5zZWxlY3RlZFJlY29yZE1lZGlhLnRodW1ibmFpbFVybCApIHtcbiAgICAgICAgdGhpcy5iYWdPZkZpbGVzSW1hZ2UgPSBlLnNlbGVjdGVkUmVjb3JkTWVkaWEudGh1bWJuYWlsVXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5iYWdPZkZpbGVzSW1hZ2UgPSAnJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5tZWRpYVR5cGUgPSBtZWRpYVR5cGU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIF9vblpvb21JblxuICAgICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byB6b29tIGV2ZW50IGluIGFwcC1tZWRpYS12aWV3ZXItbmF2LiBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZSBjdXN0b20gSFRNTCBldmVudFxuICAgICAqL1xuICAgIF9vblpvb21JbihlKSB7XG4gICAgICB0aGlzLkFwcFN0YXRlTW9kZWwuc2V0KHtzaG93TGlnaHRib3g6IHRydWV9KTtcbiAgICAgIHRoaXMuJC5saWdodGJveC5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtbWVkaWEtdmlld2VyJywgQXBwTWVkaWFWaWV3ZXIpOyIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXG4gICAgLyogbWluLWhlaWdodDoyNTBweDsgKi9cbiAgfVxuXG4gICNiYWdvZmZpbGVzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAjYmFnb2ZmaWxlcyBpcm9uLWljb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgfVxuXG4gIGlyb24tcGFnZXMge1xuICAgIC8qIGZsZXg6IDE7ICovXG4gICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gIDxhcHAtaW1hZ2Utdmlld2VyLWxpZ2h0Ym94IGlkPVwibGlnaHRib3hcIj48L2FwcC1pbWFnZS12aWV3ZXItbGlnaHRib3g+XG5cbiAgPGlyb24tcGFnZXMgc2VsZWN0ZWQ9XCIke3RoaXMubWVkaWFUeXBlfVwiIGF0dHItZm9yLXNlbGVjdGVkPVwiaWRcIiBzZWxlY3RlZC1hdHRyaWJ1dGU9XCJ2aXNpYmxlXCI+XG4gICAgPCEtLSA8YXBwLTM2MC1pbWFnZS12aWV3ZXIgaWQ9XCIzNjBcIj48L2FwcC0zNjAtaW1hZ2Utdmlld2VyPiAtLT5cbiAgICA8ZGl2IGlkPVwiYmFnb2ZmaWxlc1wiPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmluLWljb25zOnZhcmlvdXMtb3V0bGluZS1zdGFja2VkXCIgP2hpZGRlbj1cIiR7dGhpcy5iYWdPZkZpbGVzSW1hZ2V9XCI+PC9pcm9uLWljb24+XG4gICAgICA8aW1nIHNyYz1cIiR7dGhpcy5iYWdPZkZpbGVzSW1hZ2V9XCIgP2hpZGRlbj1cIiR7IXRoaXMuYmFnT2ZGaWxlc0ltYWdlfVwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGFwcC1pbWFnZS12aWV3ZXIgaWQ9XCJpbWFnZVwiPjwvYXBwLWltYWdlLXZpZXdlcj5cbiAgICA8YXBwLXZpZGVvLXZpZXdlciBpZD1cInZpZGVvXCI+PC9hcHAtdmlkZW8tdmlld2VyPlxuICAgIDxhcHAtYXVkaW8tdmlld2VyIGlkPVwiYXVkaW9cIj48L2FwcC1hdWRpby12aWV3ZXI+XG4gIDwvaXJvbi1wYWdlcz5cblxuICA8YXBwLW1lZGlhLXZpZXdlci1uYXYgQHpvb20taW49XCIke3RoaXMuX29uWm9vbUlufVwiPjwvYXBwLW1lZGlhLXZpZXdlci1uYXY+XG48L2Rpdj5cblxuYDt9IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3NhbXBvdHRzL3BseXJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvc2hha2EtcGxheWVyL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9zaGFrYS1wbGF5ZXIvdHJlZS9tYXN0ZXIvZG9jcy90dXRvcmlhbHNcblxuaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiXG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2FwcC12aWRlby12aWV3ZXIudHBsLmpzXCJcblxuaW1wb3J0IFwiQHVjZC1saWIvY29yay1hcHAtdXRpbHNcIlxuXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvY29uZmlnXCJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3V0aWxzXCJcbmltcG9ydCB2aWRlb0xpYnMgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi91dGlscy92aWRlby1saWItbG9hZGVyXCJcblxuaW1wb3J0IHBseXJDc3MgZnJvbSBcInBseXIvZGlzdC9wbHlyLmNzc1wiXG5pbXBvcnQgc2hha2FDc3MgZnJvbSBcInNoYWthLXBsYXllci9kaXN0L2NvbnRyb2xzLmNzc1wiXG5sZXQgVklERU9fU1RZTEVTID0gcGx5ckNzcytzaGFrYUNzcztcblxuaW1wb3J0IHNwcml0ZVNoZWV0IGZyb20gXCJwbHlyL2Rpc3QvcGx5ci5zdmdcIlxubGV0IFNQUklURV9TSEVFVCA9IHNwcml0ZVNoZWV0XG5cbi8vIFZlcnkgZHVtcC4gIFRvIHJlbW92ZSB0aGUgJ1NoYWthIFBsYXllciBUZXh0VHJhY2snXG4vLyB5b3UgaGF2ZSB0byBvdmVycmlkZSB0aGlzLi4uXG5jbGFzcyBTaW1wbGVUZXh0RGlzcGxheWVyIHtcbiAgY29uc3RydWN0b3IodmlkZW8pIHt9XG4gIHJlbW92ZSgpIHtyZXR1cm4gdHJ1ZX1cbiAgZGVzdHJveSgpIHt9XG4gIGFwcGVuZChjdWVzKSB7fVxuICBzZXRUZXh0VmlzaWJpbGl0eShvbikge31cbiAgaXNUZXh0VmlzaWJsZSgpIHtyZXR1cm4gZmFsc2V9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFZpZGVvVmlld2VyIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG4gIFxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYXllcjoge3R5cGU6IE9iamVjdH0sXG4gICAgICB0cmFja3M6IHt0eXBlOiBBcnJheX0sXG4gICAgICBsaWJzTG9hZGVkIDoge3R5cGU6IEJvb2xlYW59XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2luamVjdE1vZGVsKCdBcHBTdGF0ZU1vZGVsJywgJ01lZGlhTW9kZWwnKTtcbiAgICB0aGlzLnRyYWNrcyA9IFtdO1xuICAgIHRoaXMucGxheWVyID0ge307XG4gICAgdGhpcy5saWJzTG9hZGVkID0gZmFsc2U7XG4gIH1cblxuICBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgaWYgKCB0aGlzLmZ1bGxQYXRoICE9PSBlLmxvY2F0aW9uLmZ1bGxwYXRoICkgeyBcbiAgICAgIHRoaXMuX3N0b3AoKTtcbiAgICB9XG5cbiAgICB0aGlzLmZ1bGxQYXRoID0gZS5sb2NhdGlvbi5mdWxscGF0aDtcbiAgfVxuXG4gIGFzeW5jIGZpcnN0VXBkYXRlZChlKSB7XG4gICAgbGV0IHNlbGVjdGVkUmVjb3JkTWVkaWEgPSBhd2FpdCB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0U2VsZWN0ZWRSZWNvcmRNZWRpYSgpO1xuICAgIGlmKCBzZWxlY3RlZFJlY29yZE1lZGlhICkgdGhpcy5fb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKHNlbGVjdGVkUmVjb3JkTWVkaWEpO1xuXG4gICAgdGhpcy5mdWxsUGF0aCA9IChhd2FpdCB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkpLmxvY2F0aW9uLmZ1bGxwYXRoO1xuICAgIFxuICAgIC8vIHdlYnBhY2sgbW9kdWxlIGlzIGJhc2U2NCBlbmNvZGVkIFVSTCwgY2hlY2sgaWYgdGhpcyBoYXBwZW5lZCBcbiAgICAvLyBhbmQgZGVjb2RlLCB0aGVuIHNldCBzdmcgdG8gaW5uZXJIdG1sIGluc2lkZSB0aGUgc2hhZG93IGRvbS5cbiAgICBpZiggU1BSSVRFX1NIRUVULmluZGV4T2YoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQnKSA+IC0xICkge1xuICAgICAgU1BSSVRFX1NIRUVUID0gYXRvYihTUFJJVEVfU0hFRVQucmVwbGFjZSgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnLCAnJykpO1xuICAgIH1cbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3Nwcml0ZS1wbHlyJykuaW5uZXJIVE1MID0gU1BSSVRFX1NIRUVUO1xuICBcbiAgICAvLyBkZWNpZGUgd2hlcmUgdG8gcHV0IGNzc1xuICAgIC8vIFRoZSBQTFlSIGxpYnJhcnkgaXNuJ3QgYXdhcmUgb2Ygc2hhZHlkb20gc28gd2UgbmVlZCB0byBtYW51YWxseVxuICAgIC8vIHBsYWNlIG91ciBzdHlsZXMgaW4gZG9jdW1lbnQuaGVhZCB3L28gc2hhZHlkb20gdG91Y2hpbmcgdGhlbS5cbiAgICBsZXQgcGx5clN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgcGx5clN0eWxlcy5pbm5lckhUTUwgPSBWSURFT19TVFlMRVM7XG4gICAgaWYoIHdpbmRvdy5TaGFkeURPTSAmJiB3aW5kb3cuU2hhZHlET00uaW5Vc2UgKSB7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHBseXJTdHlsZXMpO1xuICAgICAgdGhpcy5oaWRlQ29udHJvbHMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHBseXJTdHlsZXMpO1xuICAgICAgdGhpcy5oaWRlQ29udHJvbHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlbGVjdGVkUmVjb3JkTWVkaWFVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIGZyb20gQXBwU3RhdGVNb2RlbCwgY2FsbGVkIHdoZW4gYSByZWNvcmRzIG1lZGlhIGlzIHNlbGVjdGVkXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gbWVkaWEgXG4gICoqL1xuICBhc3luYyBfb25TZWxlY3RlZFJlY29yZE1lZGlhVXBkYXRlKG1lZGlhKSB7XG4gICAgaWYoICFtZWRpYSApIHJldHVybjtcbiAgICBsZXQgbWVkaWFUeXBlID0gdXRpbHMuZ2V0TWVkaWFUeXBlKG1lZGlhKTtcbiAgICBpZiAobWVkaWFUeXBlICE9PSAnVmlkZW9PYmplY3QnICYmIG1lZGlhVHlwZSAhPT0gJ1N0cmVhbWluZ1ZpZGVvJykgcmV0dXJuO1xuXG4gICAgdGhpcy5tZWRpYSA9IG1lZGlhO1xuXG4gICAgLy8gZmluZCBhc3NvY2lhdGVkIGNhcHRpb25zIGFuZCBwcmVwIHRvIHRyYWNrcyBhcnJheVxuICAgIHRoaXMudHJhY2tzID0gdXRpbHMuYXNBcnJheShtZWRpYSwgJ2NhcHRpb24nKVxuICAgICAgLmZpbHRlcihjYXB0aW9uID0+IGNhcHRpb25bJ0BpZCddICE9PSB1bmRlZmluZWQgKVxuICAgICAgLm1hcChjYXB0aW9uID0+IHtcbiAgICAgICAgbGV0IGxuZyA9IGNhcHRpb24ubGFuZ3VhZ2U7XG4gICAgICAgIGxldCBzZXREZWZhdWx0ID0gKGxuZyA9PT0gJ2VuJyA/IHRydWUgOiBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiAnY2FwdGlvbnMnLFxuICAgICAgICAgIGxhYmVsOiB1dGlscy5nZXRMYW5ndWFnZShsbmcpLFxuICAgICAgICAgIHNyY2xhbmc6IGxuZyxcbiAgICAgICAgICBzcmM6IGNhcHRpb25bJ0BpZCddLFxuICAgICAgICAgIGRlZmF1bHQ6IHNldERlZmF1bHRcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgLy8gaWYgd2UgaGF2ZSBhbHJlYWR5IGxvYWRlZCB0aGUgcGxheWVyIGFuZCBzaGFrYSBsaWJyYXJpZXNcbiAgICAvLyB0aGVuIHdlIGNhbiBnbyBhaGVhZCBhbmQgbG9hZCB0aGUgdmlkZW9cbiAgICBpZiggdGhpcy5saWJzTG9hZGVkICkge1xuICAgICAgdGhpcy5fbG9hZFZpZGVvKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZHluYW1pY2FsbHkgbG9hZCBwbHlyIGFuZCBzaGFrYSBsaWJzXG4gICAgbGV0IHtwbHlyLCBzaGFrYX0gPSBhd2FpdCB2aWRlb0xpYnMubG9hZCgpO1xuXG4gICAgLy8gYWxlcnQgdXNlciBpZiB2aWRlbyBwbGF5YmFjayBpcyBub3Qgc3VwcG9ydGVkXG4gICAgbGV0IHBseXJfc3VwcG9ydGVkID0gcGx5ci5zdXBwb3J0ZWQoJ3ZpZGVvJywgJ2h0bWw1JywgdHJ1ZSk7XG4gICAgbGV0IHNoYWthX3N1cHBvcnRlZCA9IHNoYWthLlBsYXllci5pc0Jyb3dzZXJTdXBwb3J0ZWQoKTtcbiAgICBpZiggIXBseXJfc3VwcG9ydGVkIHx8ICFzaGFrYV9zdXBwb3J0ZWQgKSB7XG4gICAgICByZXR1cm4gYWxlcnQoJ1lvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHZpZGVvIHBsYXliYWNrJyk7XG4gICAgfVxuXG4gICAgbGV0IHZpZGVvRWxlID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpO1xuXG5cbiAgICB0aGlzLnBseXIgPSBuZXcgcGx5cih2aWRlb0VsZSwge1xuICAgICAgaGlkZUNvbnRyb2xzOiB0aGlzLmhpZGVDb250cm9scyxcbiAgICAgIGZ1bGxzY3JlZW4gOiB7ZW5hYmxlZDogZmFsc2V9LFxuICAgICAgY2FwdGlvbnM6IHt1cGRhdGU6IGZhbHNlfSxcbiAgICAgIC8vIGtleWJvYXJkOiB7Z2xvYmFsOiB0cnVlfSxcbiAgICAgIGNvbnRyb2xzIDogWydwbGF5LWxhcmdlJywgJ3BsYXknLCAncHJvZ3Jlc3MnLCAnY3VycmVudC10aW1lJywgJ211dGUnLCAndm9sdW1lJ11cbiAgICB9KTtcblxuICAgIC8vIENvbnN0cnVjdCBhIFBsYXllciB0byB3cmFwIGFyb3VuZCB0aGUgPHZpZGVvPiB0YWcuXG4gICAgdGhpcy5zaGFrYSA9IG5ldyBzaGFrYS5QbGF5ZXIodmlkZW9FbGUsICk7XG4gICAgdGhpcy5zaGFrYS5jb25maWd1cmUoe1xuICAgICAgdGV4dERpc3BsYXlGYWN0b3J5IDogU2ltcGxlVGV4dERpc3BsYXllclxuICAgIH0pO1xuXG4gICAgdGhpcy5zaGFrYS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGUgPT4gY29uc29sZS5lcnJvcignc2hha2EgZXJyb3InLCBlKSk7XG4gICAgXG4gICAgdGhpcy5saWJzTG9hZGVkID0gdHJ1ZTtcbiAgICBhd2FpdCB0aGlzLl9sb2FkVmlkZW8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9sb2FkVmlkZW9cbiAgICogQGRlc2NyaXB0aW9uIGxvYWQgdXJsIGludG8gc2hha2EgZm9yIGN1cnJlbnQgbWVkaWFcbiAgICovXG4gIGFzeW5jIF9sb2FkVmlkZW8oKSB7XG4gICAgaWYoICF0aGlzLm1lZGlhICkgcmV0dXJuO1xuXG4gICAgbGV0IG1lZGlhVHlwZSA9IHV0aWxzLmdldE1lZGlhVHlwZSh0aGlzLm1lZGlhKTtcbiAgICBsZXQgbWFuaWZlc3RVcmkgPSBjb25maWcuZmNyZXBvQmFzZVBhdGgrdGhpcy5tZWRpYVsnQGlkJ107XG5cbiAgICBpZiggbWVkaWFUeXBlID09PSAnU3RyZWFtaW5nVmlkZW8nICkge1xuICAgICAgbWFuaWZlc3RVcmkgKz0gJy9wbGF5bGlzdC5tM3U4J1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnNoYWthLmxvYWQobWFuaWZlc3RVcmkpO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvZGU6ICcsIGVycm9yLmNvZGUsICdvYmplY3QnLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgcGxheWJhY2sgYW5kIHJlc2V0IHRvIHN0YXJ0XG4gICAqL1xuICBfc3RvcCgpIHtcbiAgICBjb25zdCB2aWRlbyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjdmlkZW8nKTtcbiAgICB2aWRlby5wYXVzZSgpO1xuXG4gICAgaWYgKCB0aGlzLnBseXIgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnBseXIgPT09IG51bGwgKSByZXR1cm47XG5cbiAgICBpZiAoT2JqZWN0LmVudHJpZXModGhpcy5wbHlyKS5sZW5ndGggIT0gMCkge1xuICAgICAgdGhpcy5wbHlyLnN0b3AoKTtcbiAgICB9O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXZpZGVvLXZpZXdlcicsIEFwcFZpZGVvVmlld2VyKTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdWNkLWxpYnJhcnkvcGdkbS11aS90cmVlL21hc3Rlci9hcHAvZWxlbWVudHMvcGFnZXMvY29ubmVjdFxuXG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgcmVwZWF0IH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9yZXBlYXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIC8qIHBhZGRpbmctYm90dG9tOiA4cHg7ICovXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAucGx5cl9fY29udHJvbHMge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAvIDEuOCk7XG4gICAgICAgIH1cbiAgICAgICAgKi9cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICB2aWRlbyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbHlyX192aWRlby13cmFwcGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbHlyLS1mdWxsLXVpIGlucHV0W3R5cGU9cmFuZ2VdIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZGFhYTAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ucGx5cl9fY29udHJvbC5wbHlyX19jb250cm9sLS1vdmVybGFpZCxcbiAgICAgICAgYnV0dG9uLnBseXJfX2NvbnRyb2wucGx5cl9fY29udHJvbDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxOCwxNzAsMCwxLjApICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAucGx5cl9fY29udHJvbDpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxOCwxNzAsMCwxLjApICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnBseXItLWZ1bGwtdWkgaW5wdXRbdHlwZT1yYW5nZV0ge1xuICAgICAgICAgICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5wbHlyLS1mdWxsLXVpIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDIxOCwxNzAsMCwxLjApICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnBseXJfX3RhYi1mb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItc3Bpbm5lci1saXRlIHtcbiAgICAgICAgICAgIC0tcGFwZXItc3Bpbm5lci1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgI2xvYWRpbmcge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJzcHJpdGUtcGx5clwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj4gXG4gICAgICAgIDx2aWRlbyA/aGlkZGVuPVwiJHshdGhpcy5saWJzTG9hZGVkfVwiIGlkPVwidmlkZW9cIiBwbGF5c2lubGluZSBjb250cm9scyBjcm9zc29yaWdpbj5cbiAgICAgICAgICAgICR7cmVwZWF0KHRoaXMudHJhY2tzLCAodCkgPT4gXG4gICAgICAgICAgICAgICAgaHRtbGA8dHJhY2sga2luZD1cIiR7dC5raW5kfVwiIGxhYmVsPVwiJHt0LmxhYmVsfVwiIHNyYz1cIiR7dC5zcmN9XCIgc3JjbGFuZz1cIiR7dC5zcmNsYW5nfVwiIGRlZmF1bHQ9XCIke3QuZGVmYXVsdH1cIiAvPmApfVxuICAgICAgICA8L3ZpZGVvPlxuICAgICAgICA8ZGl2IGlkPVwibG9hZGluZ1wiID9oaWRkZW49XCIke3RoaXMubGlic0xvYWRlZH1cIj5cbiAgICAgICAgICAgIDxwYXBlci1zcGlubmVyLWxpdGUgP2FjdGl2ZT1cIiR7IXRoaXMubGlic0xvYWRlZH1cIj48L3BhcGVyLXNwaW5uZXItbGl0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlIGluY2x1ZGU9XFxcInNoYXJlZC1zdHlsZXNcXFwiPlxcbiAgOmhvc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gICNwb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNzBweDtcXG4gICAgcmlnaHQ6IC0yMHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgfVxcblxcbiAgLmxheW91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtcCk7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcblxcbiAgI2xpbmsge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICAuc29jaWFsIHtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG4gIC5zb2NpYWw6Zm9jdXMge1xcbiAgICBib3JkZXI6IHZhcigtLWRlZmF1bHQtb3V0bGluZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB9XFxuXFxuICAuY29weUJ1dHRvbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1zbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1ib2xkKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgfVxcbiAgLmNvcHlCdXR0b25bYWN0aXZlXSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG4gIC5jb3B5QnV0dG9uW2FjdGl2ZV0gc3BhbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjbWFpbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAuYXJyb3ctZG93biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDA7IFxcbiAgICBoZWlnaHQ6IDA7IFxcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItdG9wOiAyMHB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3R0b206IC0yMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gIH1cXG5cXG4gIHBhcGVyLWljb24tYnV0dG9uOmZvY3VzIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPGRpdiBpZD1cXFwicG9wdXBcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwibGF5b3V0XFxcIj5cXG4gICAgPGltZyBpZD1cXFwiZmFjZWJvb2tcXFwiIFxcbiAgICAgIHJvbGU9XFxcImJ1dHRvblxcXCIgXFxuICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiIFxcbiAgICAgIHNyYz1cXFwiL2ltYWdlcy9zb2NpYWwtaWNvbnMvaWNvbi1mYWNlYm9vay5zdmdcXFwiIFxcbiAgICAgIGNsYXNzPVxcXCJzb2NpYWxcXFwiIFxcbiAgICAgIG9uLWNsaWNrPVxcXCJfb25Tb2NpYWxJY29uQ2xpY2tcXFwiXFxuICAgICAgb24ta2V5dXA9XFxcIl9vblNvY2lhbEljb25DbGlja1xcXCIgLz5cXG4gICAgPGltZyBpZD1cXFwidHdpdHRlclxcXCIgXFxuICAgICAgcm9sZT1cXFwiYnV0dG9uXFxcIiBcXG4gICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxuICAgICAgc3JjPVxcXCIvaW1hZ2VzL3NvY2lhbC1pY29ucy9pY29uLXR3aXR0ZXIuc3ZnXFxcIiBcXG4gICAgICBjbGFzcz1cXFwic29jaWFsXFxcIiBcXG4gICAgICBvbi1jbGljaz1cXFwiX29uU29jaWFsSWNvbkNsaWNrXFxcIlxcbiAgICAgIG9uLWtleXVwPVxcXCJfb25Tb2NpYWxJY29uQ2xpY2tcXFwiIC8+XFxuICAgIDxpbWcgaWQ9XFxcInBpbnRlcmVzdFxcXCIgXFxuICAgICAgcm9sZT1cXFwiYnV0dG9uXFxcIiBcXG4gICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxuICAgICAgc3JjPVxcXCIvaW1hZ2VzL3NvY2lhbC1pY29ucy9pY29uLXBpbnRlcmVzdC5zdmdcXFwiIFxcbiAgICAgIGNsYXNzPVxcXCJzb2NpYWxcXFwiIFxcbiAgICAgIG9uLWNsaWNrPVxcXCJfb25Tb2NpYWxJY29uQ2xpY2tcXFwiXFxuICAgICAgb24ta2V5dXA9XFxcIl9vblNvY2lhbEljb25DbGlja1xcXCIgLz5cXG4gIDwvZGl2PlxcbiAgPGRpdj5cXG4gICAgPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlclxcXCIgY2xhc3M9XFxcInNlY3Rpb24gYm9yZGVyZWRcXFwiPlxcbiAgICAgIDxkaXYgc3R5bGU9XFxcImZsZXg6MVxcXCI+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImxpbmtcXFwiIHR5cGU9XFxcInRleHRcXFwiIC8+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGJ1dHRvbiBvbi1jbGljaz1cXFwiX2NvcHlMaW5rXFxcIiBpZD1cXFwiY29weUJ1dHRvblxcXCIgY2xhc3M9XFxcImNvcHlCdXR0b25cXFwiPlxcbiAgICAgICAgPGlyb24taWNvbiBpY29uPVxcXCJjb250ZW50LWNvcHlcXFwiIGlkPVxcXCJjb3B5SWNvblxcXCI+PC9pcm9uLWljb24+XFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJhcnJvdy1kb3duXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG5cXG48cGFwZXItaWNvbi1idXR0b24gXFxuICBpZD1cXFwibWFpblxcXCIgXFxuICBub2luayBcXG4gIGljb249XFxcInNvY2lhbDpzaGFyZVxcXCIgXFxuXFxuICBvbi1jbGljaz1cXFwiX29uQnRuQ2xpY2tlZFxcXCI+XFxuPC9wYXBlci1pY29uLWJ1dHRvbj5cXG5cXG5cIjsiLCJpbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIlxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2FwcC1zaGFyZS1idG4uaHRtbFwiXG5cbmltcG9ydCBBcHBTdGF0ZUludGVyZmFjZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9BcHBTdGF0ZUludGVyZmFjZVwiXG5pbXBvcnQgTWVkaWFJbnRlcmZhY2UgZnJvbSBcIi4uL2ludGVyZmFjZXMvTWVkaWFJbnRlcmZhY2VcIlxuXG5jb25zdCBCQVNFX1NIQVJFX0xJTktTID0ge1xuICBmYWNlYm9vayA6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHAnLFxuICB0d2l0dGVyIDogJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0JyxcbiAgLy8gcGludGVyZXN0IGNhbiBhbHNvIGFkZCA/bWVkaWEgYW5kID9kZXNjcmlwdGlvblxuICBwaW50ZXJlc3QgOiAnaHR0cHM6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLydcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwU2hhcmVCdG4gZXh0ZW5kcyBNaXhpbihQb2x5bWVyRWxlbWVudClcbiAgLndpdGgoRXZlbnRJbnRlcmZhY2UsIEFwcFN0YXRlSW50ZXJmYWNlLCBNZWRpYUludGVyZmFjZSkge1xuXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGFnLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2libGUgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZSA6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuXG4gICAgLy8gaGFuZGxlIG91dHNpZGUgY2xpY2tzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYoIHRoaXMudmlzaWJsZSApIHRoaXMuaGlkZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgaWYoIHRoaXMudmlzaWJsZSAmJiBlLndoaWNoID09PSAyNyApIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuJC5wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uQXBwU3RhdGVVcGRhdGUoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiQubGluay52YWx1ZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBoaWRlXG4gICAqIEBkZXNjcmlwdGlvbiBoaWRlIHBvcHVwXG4gICAqL1xuICBoaWRlKCkge1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuJC5wb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQnRuQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gbWFpbiBpY29uLCB0b2dnbGVzIHBvcHVwIHdoZW4gY2xpY2tlZFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgSFRNTCBjbGljayBldmVudFxuICAgKi9cbiAgX29uQnRuQ2xpY2tlZChlKSB7XG4gICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgICB0aGlzLiQucG9wdXAuc3R5bGUuZGlzcGxheSA9IHRoaXMudmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLiQuZmFjZWJvb2suZm9jdXMoKSwgMTAwKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNlbGVjdGVkUmVjb3JkVXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBmcm9tIEFwcFN0YXRlSW50ZXJmYWNlLCBjYWxsZWQgd2hlbiBhIHJlY29yZCBpcyBzZWxlY3RlZFxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZCBzZWxlY3RlZCByZWNvcmRcbiAgICovXG4gIC8vIF9vblNlbGVjdGVkUmVjb3JkTWVkaWFVcGRhdGUocmVjb3JkKSB7XG4gIC8vICAgY29uc29sZS5sb2cocmVjb3JkKTtcbiAgLy8gICB0aGlzLnJlY29yZCA9IHJlY29yZDtcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblNvY2lhbEljb25DbGlja1xuICAgKiBAZGVzY3JpcHRpb24gYm91bmQgdG8gc29jaWFsIGljb24gYnV0dG9ucy4gIENhbGxlZCB3aGVuIG9uZSBvcyBjbGlja2VkXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gZSBIVE1MIGNsaWNrIGV2ZW50IFxuICAgKi9cbiAgX29uU29jaWFsSWNvbkNsaWNrKGUpIHtcbiAgICBsZXQgcmVjb3JkID0gdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkKCk7XG4gICAgbGV0IG1lZGlhID0gdGhpcy5BcHBTdGF0ZU1vZGVsLmdldFNlbGVjdGVkUmVjb3JkTWVkaWEoKTtcblxuICAgIGlmKCBlLnR5cGUgPT09ICdrZXl1cCcgJiYgZS53aGljaCAhPT0gMTMgKSByZXR1cm47XG4gICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0WydpZCddO1xuXG4gICAgbGV0IHVybCA9IEJBU0VfU0hBUkVfTElOS1NbaWRdO1xuICAgIGxldCBxc28gPSB7fTtcbiAgICBsZXQgbmFtZSA9IChtZWRpYS5uYW1lIHx8IG1lZGlhLnRpdGxlIHx8IHJlY29yZC5uYW1lIHx8IHJlY29yZC50aXRsZSk7XG5cbiAgICBpZiggaWQgPT09ICdwaW50ZXJlc3QnICkgeyAgXG4gICAgICBsZXQgcGF0aCA9IHRoaXMuX2dldEltZ1BhdGgobWVkaWEpO1xuICAgICAgaWYoIHBhdGggKSB7XG4gICAgICAgIHFzby5tZWRpYSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCsnLy8nK3dpbmRvdy5sb2NhdGlvbi5ob3N0K3RoaXMuX2dldEltZ1VybChwYXRoKTtcbiAgICAgIH1cbiAgICAgIHFzby5kZXNjcmlwdGlvbiA9IG5hbWU7XG4gICAgICBxc28udXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfSBlbHNlIGlmICggaWQgPT09ICdmYWNlYm9vaycgKSB7XG4gICAgICBxc28udSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH0gZWxzZSBpZiggaWQgPT09ICd0d2l0dGVyJyApIHtcbiAgICAgIGxldCB0ZXh0ID0gbmFtZSsnIC0gJyt3aW5kb3cubG9jYXRpb24uaHJlZisnICNVQ0RhdmlzTGlicmFyeSAjRGlnaXRhbENvbGxlY3Rpb25zJztcbiAgICAgIGlmKCB0ZXh0Lmxlbmd0aCA+IDI4MCkge1xuICAgICAgICBsZXQgZGlmZiA9ICh0ZXh0Lmxlbmd0aCArIDMpIC0gMjgwO1xuICAgICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGgtZGlmZikrJy4uLic7XG4gICAgICAgIHRleHQgPSBuYW1lKycgLSAnK3dpbmRvdy5sb2NhdGlvbi5ocmVmKycgI1VDRGF2aXNMaWJyYXJ5ICNEaWdpdGFsQ29sbGVjdGlvbnMnO1xuICAgICAgfVxuXG4gICAgICBxc28udGV4dCA9IHRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBzb2NpYWwgbWVkaWEgdHlwZTogJytpZCk7XG4gICAgfVxuXG4gICAgdXJsICs9IHRoaXMuX2NyZWF0ZVFzKHFzbyk7XG4gICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJywgJ2hlaWdodD00MDAsd2lkdGg9NTAwJyk7XG4gIH1cblxuICBfY3JlYXRlUXMocXNvKSB7XG4gICAgbGV0IHF1ZXJ5ID0gW107XG4gICAgZm9yKCBsZXQga2V5IGluIHFzbyApIHtcbiAgICAgIHF1ZXJ5LnB1c2goa2V5Kyc9JytlbmNvZGVVUklDb21wb25lbnQocXNvW2tleV0pKTtcbiAgICB9XG4gICAgcmV0dXJuICc/JytxdWVyeS5qb2luKCcmJyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfY29weUxpbmtcbiAgICogQGRlc2NyaXB0aW9uIGJvdW5kIHRvIGNsaWNrIGV2ZW50IG9uIGJ1dHRvbi4gIENvcHkgdGV4dCB0byBjbGlwYm9hcmRcbiAgICogc2hvdyBVSSBpbnRlcmFjdGlvbi5cbiAgICovXG4gIF9jb3B5TGluaygpIHtcbiAgICAvLyB0aGlzLiQubGluay5zZWxlY3QoKTtcbiAgICB0aGlzLiQubGluay5mb2N1cygpO1xuICAgIHRoaXMuJC5saW5rLnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTkpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiQ29weVwiKTtcblxuICAgIHRoaXMuJC5jb3B5SWNvbi5pY29uID0gJ2NoZWNrJztcbiAgICB0aGlzLiQuY29weUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICdhY3RpdmUnKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy4kLmNvcHlJY29uLmljb24gPSAnY29udGVudC1jb3B5JztcbiAgICAgIHRoaXMuJC5jb3B5QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJywgJ2FjdGl2ZScpO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtc2hhcmUtYnRuJywgQXBwU2hhcmVCdG4pOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICA6aG9zdCB7XFxuICAgIGRpc3BsYXkgOiBibG9jaztcXG4gIH1cXG4gIC5sYXlvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLnRhYiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcGFkZGluZzogMTJweCAwIDlweCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheS10ZXh0KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWdyYXktdGV4dCk7XFxuICB9XFxuICAudGFiOmZvY3VzIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tZGVmYXVsdC1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbiAgLnRhYltzZWxlY3RlZF0ge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEycHggMCA3cHggMDtcXG4gIH1cXG48L3N0eWxlPlxcblxcbjxkaXYgY2xhc3M9XFxcImxheW91dFxcXCI+XFxuICA8dGVtcGxhdGUgaXM9XFxcImRvbS1yZXBlYXRcXFwiIGl0ZW1zPVxcXCJbW3RhYnNdXVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYlxcXCIgXFxuICAgICAgcm9sZT1cXFwidGFiXFxcIiBcXG4gICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxuICAgICAgYXJpYS1zZWxlY3RlZCQ9XFxcIltbaXRlbS5hcmlhU2VsZWN0ZWRdXVxcXCJcXG4gICAgICBzZWxlY3RlZCQ9XFxcIltbaXRlbS5zZWxlY3RlZF1dXFxcIlxcbiAgICAgIG9uLWNsaWNrPVxcXCJfb25UYWJDbGlja2VkXFxcIiBcXG4gICAgICBvbi1rZXl1cD1cXFwiX29uVGFiQ2xpY2tlZFxcXCJcXG4gICAgICB2YWx1ZSQ9XFxcIltbaXRlbS52YWx1ZV1dXFxcIj5cXG4gICAgICBbW2l0ZW0ubGFiZWxdXVxcbiAgICA8L2Rpdj5cXG4gIDwvdGVtcGxhdGU+XFxuPC9kaXY+XCI7IiwiaW1wb3J0IHtQb2x5bWVyRWxlbWVudH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9hcHAtdGFicy5odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVGFicyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRhZy5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICByb2xlIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICd0YWJsaXN0JyxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlIDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLFxuICAgICAgICB2YWx1ZSA6ICcnLFxuICAgICAgICBub3RpZnkgOiB0cnVlLFxuICAgICAgICBvYnNlcnZlciA6ICdfcmVuZGVyVGFicydcbiAgICAgIH0sXG4gICAgICB0YWJzIDoge1xuICAgICAgICB0eXBlIDogQXJyYXksXG4gICAgICAgIHZhbHVlIDogKCkgPT4gW10sXG4gICAgICAgIG9ic2VydmVyIDogJ19yZW5kZXJUYWJzJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJUYWJzXG4gICAqIEBkZXNjcmlwdGlvbiBib3VuZCB0byAndGFicycgcHJvcGVydHkgb2JzZXJ2ZXJcbiAgICovXG4gIF9yZW5kZXJUYWJzKCkge1xuICAgIGlmKCAhdGhpcy50YWJzICkgcmV0dXJuO1xuXG4gICAgaWYoICF0aGlzLnNlbGVjdGVkICYmIHRoaXMudGFicy5sZW5ndGggKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50YWJzWzBdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgc2VsZWN0ZWQgPSAodGFiLnZhbHVlID09PSB0aGlzLnNlbGVjdGVkKTtcbiAgICAgIHRoaXMuc2V0KGB0YWJzLiR7aW5kZXh9LnNlbGVjdGVkYCwgc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5zZXQoYHRhYnMuJHtpbmRleH0uYXJpYVNlbGVjdGVkYCwgc2VsZWN0ZWQrJycpO1xuICAgICAgaWYoICF0YWIubGFiZWwgKSB0aGlzLnNldChgdGFicy4ke2luZGV4fS5sYWJlbGAsIHRhYi52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBfb25UYWJDbGlja2VkKGUpIHtcbiAgICBpZiggZS50eXBlID09PSAna2V5dXAnICYmIGUud2hpY2ggIT09IDEzICkgcmV0dXJuO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtdGFicycsIEFwcFRhYnMpOyIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2FwcC12aXJ0dWFsLXNjcm9sbGVyLnRwbC5qc1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVmlydHVhbFNjcm9sbGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtSGVpZ2h0IDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGF0dHJpYnV0ZTogJ2l0ZW0taGVpZ2h0J1xuICAgICAgfSxcbiAgICAgIGl0ZW1zIDoge3R5cGU6IEFycmF5fSxcbiAgICAgIHJlbmRlcmVkSXRlbXMgOiB7dHlwZTogQXJyYXl9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5pdGVtSGVpZ2h0ID0gMjA7XG4gICAgdGhpcy5yZW5kZXJlZEl0ZW1zID0gW107XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuaGVpZ2h0ID0gLTE7XG5cbiAgICB0aGlzLl9vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB0aGlzLl9vblZpZXdwb3J0VXBkYXRlKCkpO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMucG9zaXRpb25FbGUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5hcHAtdmlydHVhbC1zY3JvbGxlci1zY3JvbGwtcGFuZWwnKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25SZXNpemUpO1xuICAgIHRoaXMuX2NhY2hlSGVpZ2h0KCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZSk7XG4gIH1cblxuICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX29uUmVzaXplKGUpIHtcbiAgICB0aGlzLl9jYWNoZUhlaWdodCh0cnVlKTtcbiAgfVxuXG4gIF9jYWNoZUhlaWdodChjYWxsVmlld3BvcnRVcGRhdGU9dHJ1ZSkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5vZmZzZXRIZWlnaHQ7XG4gICAgaWYoIGNhbGxWaWV3cG9ydFVwZGF0ZSA9PT0gdHJ1ZSApIHRoaXMuX29uVmlld3BvcnRVcGRhdGUoKTtcbiAgfVxuXG4gIHNldEl0ZW1SZW5kZXJlcihyZW5kZXJlciwgc2NvcGUpIHtcbiAgICB0aGlzLnJlbmRlckl0ZW0gPSByZW5kZXJlcjtcbiAgICB0aGlzLnJlbmRlckl0ZW1TY29wZSA9IHNjb3BlIHx8IHRoaXM7XG4gIH1cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgaWYoIHByb3BzLmhhcygnaXRlbXMnKSApIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9wID0gMDtcbiAgICAgIHRoaXMudG90YWxTY3JvbGxIZWlnaHQgPSB0aGlzLml0ZW1IZWlnaHQqdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgICB0aGlzLnBvc2l0aW9uRWxlLnN0eWxlLmhlaWdodCA9ICh0aGlzLml0ZW1IZWlnaHQqdGhpcy5pdGVtcy5sZW5ndGgpKydweCc7XG4gICAgfVxuICAgIGlmKCBwcm9wcy5oYXMoJ2l0ZW1IZWlnaHQnKSB8fCBwcm9wcy5oYXMoJ2l0ZW1zJykgKSB7XG4gICAgICB0aGlzLl9vblZpZXdwb3J0VXBkYXRlKHRydWUpO1xuICAgIH1cblxuICB9XG5cbiAgX29uVmlld3BvcnRVcGRhdGUoZm9yY2U9ZmFsc2UpIHtcbiAgICBpZiggdGhpcy5oZWlnaHQgPD0gMCApIHRoaXMuX2NhY2hlSGVpZ2h0KGZhbHNlKTtcblxuICAgIGxldCBmaXJzdEl0ZW0gPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsVG9wIC8gdGhpcy5pdGVtSGVpZ2h0KSAtIDE7XG4gICAgaWYoIGZpcnN0SXRlbSA8IDAgKSBmaXJzdEl0ZW0gPSAwO1xuXG4gICAgbGV0IGxhc3RJdGVtID0gZmlyc3RJdGVtICsgTWF0aC5jZWlsKHRoaXMuaGVpZ2h0IC8gdGhpcy5pdGVtSGVpZ2h0KSArIDI7XG4gICAgaWYoIGxhc3RJdGVtID49IHRoaXMuaXRlbXMubGVuZ3RoICkgbGFzdEl0ZW0gPSB0aGlzLml0ZW1zLmxlbmd0aDtcblxuICAgIGlmKCB0aGlzLmZpcnN0SXRlbSA9PT0gZmlyc3RJdGVtICYmIHRoaXMubGFzdEl0ZW0gPT09IGxhc3RJdGVtICYmIGZvcmNlID09PSBmYWxzZSApIHJldHVybjtcbiAgICBcbiAgICAvLyBjaGVjayBmb3IgaU9TIG92ZXJzY3JvbGwgYW5kIGlnbm9yZVxuICAgIGlmKCB0aGlzLml0ZW1IZWlnaHQgKiAobGFzdEl0ZW0tMSkgPiB0aGlzLmhlaWdodCAmJlxuICAgICAgIHRoaXMuc2Nyb2xsVG9wICsgdGhpcy5oZWlnaHQgKyA1ID4gdGhpcy50b3RhbFNjcm9sbEhlaWdodCApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvdmVyZmxvdyBwcm90ZWN0aW9uIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmZpcnN0SXRlbSA9IGZpcnN0SXRlbTtcbiAgICB0aGlzLmxhc3RJdGVtID0gbGFzdEl0ZW07XG5cbiAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICBmb3IoIGxldCBpID0gZmlyc3RJdGVtOyBpIDwgbGFzdEl0ZW07IGkrKyApIHtcbiAgICAgIGl0ZW1zLnB1c2goe2luZGV4OiBpLCB0b3A6IHRoaXMuaXRlbUhlaWdodCppfSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZWRJdGVtcyA9IGl0ZW1zO1xuXG4gICAgQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy52cy1yb3cnKSlcbiAgICAgIC5mb3JFYWNoKGVsZSA9PiBlbGUucmVtb3ZlQXR0cmlidXRlKCdob3ZlcicpKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKCkge1xuICAgIC8vIHVwZGF0ZSB0cmlnZ2VyZWQgZnJvbSBuZXN0ZWQgb2JqZWN0XG4gICAgaWYoIHRoaXMucmVuZGVyZWRJdGVtcy5sZW5ndGggPiB0aGlzLml0ZW1zLmxlbmd0aCApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpZ25vcmluZyBvdXQgb2YgZGF0ZSByZW5kZXInKTtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZWRJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAvLyBiYWRuZXNzXG4gICAgICBpZiggaXRlbS5pbmRleCA+PSB0aGlzLml0ZW1zLmxlbmd0aCApIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInZzLXJvd1wiXG4gICAgICAgICAgQG1vdXNlb3Zlcj1cIiR7dGhpcy5fb25Sb3dNb3VzZU92ZXJ9XCJcbiAgICAgICAgICBAbW91c2VvdXQ9XCIke3RoaXMuX29uUm93TW91c2VPdXR9XCIgXG4gICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHJpZ2h0OiAwOyB0b3A6ICR7aXRlbS50b3B9cHg7IGhlaWdodDogJHt0aGlzLml0ZW1IZWlnaHR9cHhcIj5cbiAgICAgICAgICAke3RoaXMucmVuZGVySXRlbS5hcHBseSh0aGlzLnJlbmRlckl0ZW1TY29wZSwgW2l0ZW0uaW5kZXhdKX1cbiAgICAgICAgPC9kaXY+YFxuICAgICAgfSk7XG4gIH1cblxuICBfb25Sb3dNb3VzZU92ZXIoZSkge1xuICAgIGUuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2hvdmVyJywgJ3RydWUnKTtcbiAgfVxuXG4gIF9vblJvd01vdXNlT3V0KGUpIHtcbiAgICBlLmN1cnJlbnRUYXJnZXQucmVtb3ZlQXR0cmlidXRlKCdob3ZlcicpO1xuICB9XG5cbiAgcmVuZGVySXRlbShpbmRleCkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QnKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXZpcnR1YWwtc2Nyb2xsZXInLCBBcHBWaXJ0dWFsU2Nyb2xsZXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIGFwcC12aXJ0dWFsLXNjcm9sbGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgfVxuXG4gIGFwcC12aXJ0dWFsLXNjcm9sbGVyIC5hcHAtdmlydHVhbC1zY3JvbGxlci1zY3JvbGwtcGFuZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXG4gIH1cbjwvc3R5bGU+ICBcblxuPGRpdiBjbGFzcz1cImFwcC12aXJ0dWFsLXNjcm9sbGVyLXNjcm9sbC1wYW5lbFwiPlxuICAke3RoaXMucmVuZGVySXRlbXMoKX1cbjwvZGl2PlxuXG5gO30iLCJjbGFzcyBWaWRlb0xpYkxvYWRlciB7XG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgaWYgKCB0aGlzLmxvYWRlZCApIHJldHVybiB0aGlzLmxvYWRlZDtcblxuICAgIGlmICggdGhpcy5sb2FkaW5nICkge1xuICAgICAgYXdhaXQgdGhpcy5sb2FkaW5nO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZGVkO1xuICAgIH1cblxuICAgIHRoaXMubG9hZGluZyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHBseXIgPSAoIGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInZpZGVvLWxpYnNcIiAqLyAncGx5cicpICkuZGVmYXVsdDtcbiAgICAgIC8vIGNvbnN0IHBseXIgPSAoIGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInZpZGVvLWxpYnNcIiAqLyAncGx5ci9zcmMvanMvcGx5cicpICkuZGVmYXVsdDtcbiAgICAgIGNvbnN0IHNoYWthID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidmlkZW8tbGlic1wiICovICdzaGFrYS1wbGF5ZXInKTtcbiAgICAgIFxuICAgICAgLy8gSW5zdGFsbCB0aGUgcG9seWZpbGxzIGJlZm9yZSBkb2luZyBhbnl0aGluZyB3aXRoIHRoZSBsaWJyYXJ5XG4gICAgICBhd2FpdCBzaGFrYS5wb2x5ZmlsbC5pbnN0YWxsQWxsKCk7XG5cbiAgICAgIHRoaXMubG9hZGVkID0ge3BseXIsIHNoYWthfTtcblxuICAgICAgcmVzb2x2ZSh0aGlzLmxvYWRlZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWaWRlb0xpYkxvYWRlcigpOyJdLCJzb3VyY2VSb290IjoiIn0=