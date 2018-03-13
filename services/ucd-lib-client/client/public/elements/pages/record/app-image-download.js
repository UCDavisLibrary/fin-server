import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-image-download.html"

import bytes from "bytes"

const SIZES = [
  {
    title : 'Small',
    label : 'S',
    ratio : 0.25
  },
  {
    title : 'Medium',
    label : 'M',
    ratio : 0.5
  },
  {
    title : 'Large',
    label : 'L',
    ratio : 0.75
  },
  {
    title : 'Full Resolution',
    label : 'FR',
    ratio : 1
  }
]

const FORMATS = ['png', 'jpg', 'webp'];

export default class AppImageDownload extends PolymerElement {

  static get template() {
    return template;
  }

  static get properties() {
    return {
      href : {
        type : String,
        value : ''
      },
      resolution : {
        type : String,
        value : ''
      },
      size : {
        type : String,
        value : ''
      },
      resolutionTitle : {
        type : String,
        value : 'Full Resolution'
      },
      fileFormat : {
        type : String,
        value : ''
      },
      sizes : {
        type : Array,
        value : () => []
      },
      formats : {
        type : Array,
        value : () => []
      },
      defaultImage : {
        type : Boolean,
        value : true
      }
    }
  }

  /**
   * @method render
   * @description render download icon from given options
   * 
   * @param {Object} options render options
   * @param {Array} options.resolution image resolution
   * @param {String} options.size full resolution image size
   * @param {String} options.fileFormat default mime type
   * @param {String} options.url fedora image url
   */
  render(options) {
    this.options = options;
    this.selectedSize = SIZES.length - 1;
    this.sizes = SIZES.map(format => {
      return {
        title : format.title,
        label : format.label,
        size : [
          Math.floor(options.resolution[0] * format.ratio),
          Math.floor(options.resolution[1] * format.ratio)
        ],
        selected : (format.label === 'FR')
      }
    });
    this.size = bytes(options.size);
    
    
    this.originalFormat = options.fileFormat.replace(/.*\//, '').toLowerCase();

    this.$.format.value = this.originalFormat;
    this.defaultImage = true;

    this._renderFormats();
    
  }

  /**
   * @method _renderFormats
   * @private
   * @description render formats select element based of static format 
   * list and additional native format if not in list and size is at
   * full resolution.
   */
  _renderFormats() {
    let formats = FORMATS.slice(0);
    if( this.originalFormat &&
        this.selectedSize === SIZES.length - 1 &&
        formats.indexOf(this.originalFormat) === -1 ) {
      formats.unshift(this.originalFormat);
    }
    this.formats = formats;

    this._renderDownloadHref();
  }

  /**
   * @method _onSizeSelected
   * @private
   * @description called when user selects a size button.  Toggle over buttons
   * to off state and updates formats based on current size.
   */
  _onSizeSelected(e) {
    this.selectedSize = parseInt(e.currentTarget.getAttribute('index'));
    
    this.sizes = this.sizes.map((size, index) => {
      size.selected = (this.selectedSize === index);
      return Object.assign({}, size);
    });
    this.resolutionTitle = this.sizes[this.selectedSize].title;

    this._renderFormats();
  }

  /**
   * @method _onFormatSelected
   * @private
   * @description when a format is selected, render the download button.
   */
  _onFormatSelected() {
    this.selectedFormat = this.$.format.value.replace(/ .*/, '');
    this._renderDownloadHref();
  }

  /**
   * @method _renderDownloadHref
   * @private
   * @description render the href of the download button based
   * and selected size and format.
   * 
   * This method will make sure the format select element is correct.
   * Because the select element options are generated by a template repeat
   * tag, we need to make sure then options have rendered.  So we call 
   * requestAnimationFrame to pause to allow time for generation.  This
   * is probably NOT the best way to do things.
   */
  _renderDownloadHref() {
    requestAnimationFrame(() => {
      this.resolution = this.sizes[this.selectedSize].size.join(' x ')+' px';

      if( !this.selectedFormat || this.formats.indexOf(this.selectedFormat) === -1 ) {
        this.selectedFormat = this.formats[0].replace(/ .*/, '');
        this.$.format.value = this.formats[0];
      }
      if( this.$.format.value !== this.selectedFormat ) {
        this.$.format.value = this.selectedFormat;
      }

      if( this.selectedFormat === this.originalFormat && 
        this.selectedSize === SIZES.length -1 ) {
        this.defaultImage = true;
        return this.href = this.options.url;
      }

      this.defaultImage = false;

      let size = this.sizes[this.selectedSize].size.join(',');

      this.href = '/fcrepo/rest' + this.options.url + `/svc:iiif/full/${size}/0/default.${this.selectedFormat}`;
    });
  }

}

customElements.define('app-image-download', AppImageDownload);