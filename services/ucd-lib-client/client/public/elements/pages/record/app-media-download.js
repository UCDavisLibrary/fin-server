import {PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-media-download.html"

import CollectionInterface from "../../interfaces/CollectionInterface"
import MediaInterface from "../../interfaces/MediaInterface"

import MediaModel from "../../../lib/models/MediaModel"

import config from "../../../lib/config"
import utils from "../../../lib/utils"
import bytes from "bytes"

// Full Resolution - Default
const IMG_SIZES = [
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

const IMG_FORMATS = ['png', 'jpg', 'webp'];

export default class AppMediaDownload extends Mixin(PolymerElement)
      .with(EventInterface, CollectionInterface, MediaInterface) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
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
      isVideo: {
        type: Boolean,
        value: false
      },
      isMediaType: {
        type: String,
        value: 'image'
      },
      size : {
        type : String,
        value : ''
      },
      imageSizes : {
        type : Array,
        value : () => []
      },
      sources: {
        type: Array,
        value: () => []
      },
      formats : {
        type : Array,
        value : () => []
      },
      defaultImage: {
        type : Boolean,
        value : true
      },
      hasMultipleSources: {
        type: Boolean,
        value: false
      },
      multipleSourcesSelected: {
        type : Boolean,
        value : false
      }
    }
  }

  constructor() {
    super();
    this.active = true;
    this._injectModel('AppStateModel');
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
    if (options === undefined) return;
    this.options = options;
    this.originalFormat = options.fileFormat.replace(/.*\//, '').toLowerCase();
    this.size = bytes(options.size);

    this.$.format.value = this.originalFormat;
    this.defaultImage = true;

    this.imageSizes = IMG_SIZES.map((format, index) => {
      return {
        title : format.title,
        label : format.label,
        width: Math.floor(options.resolution[0] * format.ratio),
        height: Math.floor(options.resolution[1] * format.ratio),
        selected : (this.selectedSize === index)
      }
    });

    this._renderImgFormats();
  }

  setRootRecord(record) {
    if( this.rootRecord === record ) return;
    this.rootRecord = record;
    this.multipleSourcesSelected = false;
    this.selectedSize = IMG_SIZES.length - 1;
  }

  _onSelectedRecordMediaUpdate(record) {
    if (utils.getType(record) === 'video') {
      this.isVideo = true;
      this.sources = this._getVideoSources(record);
      this.href    = this.sources[0].src;
    } else if (utils.getType(record) === 'streamingVideo') {
      // They can't download a streaming video so offer up any available fallback
      this.isVideo = true;
      this.rootRecord.media.video.forEach(element => {
        if (utils.getType(element) === 'video') {
          this.sources = this._getVideoSources(element);
          this.href    = this.sources[0].src;
        }
      });
    } else if (utils.getType(record) === 'audio') {
      this.isVideo = true;
      this.sources = this._getAudioSources(record);
      this.href    = this.sources[0].src;
    } else {
      this.isVideo = false;
      this.sources = this._getImageSources(record);
      if (this.sources.length > 1){
        this.imagelist = this.sources;
      };

      this.imageSizes = IMG_SIZES.map((format, index) => {
        return {
          title : format.title,
          label : format.label,
          width: Math.floor(this.sources[0].image.width * format.ratio),
          height: Math.floor(this.sources[0].image.height * format.ratio),
          selected : (this.selectedSize === index)
        }
      });

      this._renderImgFormats();
    }

    if ( this.sources.length === 0 ) {
      this.$.wrapper.style.display = "none";
      this.$.msg.innerHTML = '<em>No downloadable items available</em>';
      return;
    }

    this.$.wrapper.style.display = 'initial';
    this.$.msg.innerHTML = '';
    this.downloadOptions = this.sources;

    if (this.downloadOptions.length === 1) {
      this.$.videoDownloadOptions.disabled  = true;
      this.$.videoDownloadOptions.classList.add("plainText");
    } else {
      this.$.videoDownloadOptions.disabled = false;
      this.$.videoDownloadOptions.classList.remove("plainText");
    }

    if (this.downloadOptions && this.downloadOptions.length > 1) this.hasMultipleSources = true;
    else this.hasMultipleSources = false;
  }

  _getImageSources(imageRecord) {
    let sources = [], image = imageRecord;

    if (utils.getType(image) === 'imageList') {
      sources = image.hasPart;
    } else {
      sources.push(image);
    };

    return sources;
  }

  _getAudioSources(audioRecord) {
    let sources = [], obj = {}, audio = audioRecord;
    
    obj = {
      src: config.fcrepoBasePath + audio['@id'],
      type: audio.encodingFormat.split('/').pop(),
      label: audio.encodingFormat.split('/').pop() + (bytes(audio.fileSize) ? ' (' + bytes(audio.fileSize) + ') ' : '')
    };

    sources.push(obj);

    return sources;
  }

  _getVideoSources(videoRecord) {
    let sources = [];

    let video = utils.formatVideo(videoRecord);

    if (video.sources && video.sources.length > 0) {
      video.sources.forEach(element => {
        element.type = ((element.type !== undefined) ? element.type.replace(/.*\//, '') : '');
        element.fileSize = bytes(element.fileSize);
        element.src  = config.fcrepoBasePath+element.src;
        element.label = element.type + (element.fileSize ? ' (' + element.fileSize + ') ' : '');
      });

      sources = video.sources;

      if (video.transcripts && video.transcripts.length > 0) {
        video.transcripts.forEach(transcript => {
          let obj = {
            src: config.fcrepoBasePath + transcript.src,
            type: transcript.src.split('.').pop(),
            label: transcript.src.split('.').pop() + ' (transcript only)'
          }

          sources.push(obj);
        });
      }
    }

    return sources;
  }

  _onChangeVideoDownloadOptions(e) {
    let selectedValue = e.currentTarget.value;
    this.href = this.downloadOptions[selectedValue].src;
  }

  /**
   * @method _renderImgFormats
   * @private
   * @description render image formats select element based of static format 
   * list and additional native format if not in list and size is at
   * full resolution.
   */
  _renderImgFormats() {
    let formats;

    formats = IMG_FORMATS.slice(0);
    if( this.originalFormat &&
        this.selectedSize === IMG_SIZES.length - 1 &&
        formats.indexOf(this.originalFormat) === -1 ) {
      formats.unshift(this.originalFormat);
    }

    this.formats = formats;
    this.$.format.innerHTML = '';
    this.formats.forEach(format => {
      let option = document.createElement('option');
      option.textContent = format + ((format === this.originalFormat) ? ' (native)' : '');
      option.value = format;

      if (format === this.originalFormat) {
        option.setAttribute('selected', 'selected');
      }
      
      this.$.format.appendChild(option);
    });
    
    this._renderDownloadHref();
  }

  /**
   * @method _onSizeSelected
   * @private
   * @description called when user selects a size button.  Toggle over buttons
   * to off state and updates formats based on current size.
  */
  _onSizeChange(e) {
    let selected = e.currentTarget.value;

    this.imageSizes = this.imageSizes.map((size, index) => {
      if( selected === size.label ) {
        size.selected = true;
        this.selectedSize = index;
      } else {
        size.selected = false;
      }
      
      return Object.assign({}, size);
    });
    
    this._renderImgFormats();
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
      // this.resolution = this.imageSizes[this.selectedSize].size.join(' x ')+' px';
      
      if( !this.selectedFormat || this.formats.indexOf(this.selectedFormat) === -1 ) {
        this.selectedFormat = this.formats[0].replace(/ .*/, '');
        this.$.format.value = this.formats[0];
      }

      if( this.$.format.value !== this.selectedFormat ) {
        this.$.format.value = this.selectedFormat;
      }

      this._setTarPaths();

      if (this.isVideo) return;

      if (!this.options && this.imagelist) this.options = this.imagelist[0].image;
      
      if( this.selectedFormat === this.originalFormat && this.selectedSize === IMG_SIZES.length -1 ) {
        this.defaultImage = true;
        return this.href = this.options.url;
      }

      this.defaultImage = false;

      let size = this.imageSizes[this.selectedSize];
      size = size.width + ',' + size.height;

      this.href = this.options.url + `/svc:iiif/full/${size}/0/default.${this.selectedFormat}`;
    });
  }

  /**
   * @method _onDownloadClicked
   * @description bound to download button click event, record analytics
   */
  _onDownloadClicked() {
    let path = this.href.replace(config.fcrepoBasePath, '');
    gtag('event', 'download', {
      'event_category': 'image',
      'event_label': path,
      'value': 1
    });
  }

  /**
   * @method _toggleMultipleDownload
   * @description bound to radio buttons click event
   */
  _toggleMultipleDownload() {
    this.multipleSourcesSelected = this.$.fullset.checked ? true : false;
  }

  _setTarPaths() {
    if( !IMG_SIZES[this.selectedSize] ) return;
    let origin = false, urls = {};

    if( this.selectedFormat === this.originalFormat && this.selectedSize === IMG_SIZES.length -1 ) {
      origin = true;
    }

    if ( this.hasMultipleSources ) {
      this.imagelist.forEach(item => {
        let name = item.filename || item.name;
        if( origin ) {
          urls[name] = item['@id'];
        } else {
          let s = IMG_SIZES[this.selectedSize];
          name = name.replace(/\.[a-z]*$/, `_${s.label}_.${this.selectedFormat}`);
          let w = Math.floor(item.image.width * s.ratio);
          let h = Math.floor(item.image.height * s.ratio);
          urls[name] = MediaModel.getImgUrl(item['@id'], w, h, {format:this.selectedFormat}).replace(config.fcrepoBasePath, '');
        }
      });
    }

    this.$.tarPaths.value = JSON.stringify(urls);
    this.tarName = this.rootRecord.name.replace(/[^a-zA-Z0-9]/g, '');
  }

  /**
   * @method _downloadTar
   * @description bound to download set button click event
   */
  _downloadTar() {
    this.$.downloadTar.submit();
  }

}

customElements.define('app-media-download', AppMediaDownload);