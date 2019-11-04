import {PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./app-media-download.html"

import CollectionInterface from "../../interfaces/CollectionInterface"
import MediaInterface from "../../interfaces/MediaInterface"

import config from "../../../lib/config"
import utils from "../../../lib/utils"
import bytes from "bytes"


export default class AppMediaDownload extends Mixin(PolymerElement)
      .with(EventInterface, CollectionInterface, MediaInterface) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
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


  _onSelectedRecordUpdate(record) {
    this.rootRecord = record;

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
    this.$.format.style.display = "initial";
    this.$.downloadOptions.style.display = "initial";
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

    this.allSources = sources;
    this.downloadOptions = sources;

    this._setDownloadHref(sources[0]);
  }

  _getDownloadSources(record, nativeImageOnly=false) {
    let sources = [];

    if( record.clientMediaDownload ) {
      if( Array.isArray(record.clientMediaDownload) ) {
        if( record.clientMediaDownload.length ) {
          record = record.clientMediaDownload[0];
        }
      } else {
        record = record.clientMediaDownload;
      }
    }

    if (utils.getMediaType(record) === 'VideoObject') {
      sources = sources.concat(this._getVideoSources(record));
    } else if (utils.getMediaType(record) === 'AudioObject') {
      sources = sources.concat(this._getAudioSources(record));
    } else if (utils.getMediaType(record) === 'ImageObject' ) {
      this.showImageFormats = true;
      sources = sources.concat(this._getImageSources(record, nativeImageOnly));
      this._renderImgFormats(record, null, 'FR');
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
        src :  config.fcrepoBasePath+imageRecord['@id'],
        originalFormat : format,
        filename : imageRecord.filename || imageRecord.name,
        label : imageRecord.filename || imageRecord.name
      }]
    }

    let sources = [];
    for( let size of config.imageDownload.sizes ) {
      let width = Math.floor(imageRecord.image.width * size.ratio);
      let height = Math.floor(imageRecord.image.height * size.ratio);
      let iiifSize = width+','+height;
      sources.push({
        record : imageRecord,
        type : 'image',
        src :  config.fcrepoBasePath+imageRecord['@id'],
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
      src: config.fcrepoBasePath + audioRecord['@id'],
      type: 'audio',
      filename : audioRecord.filename || audioRecord['@id'].split('/').pop(),
      label: this._getTypeLabel(audioRecord) + (audioRecord.fileSize ? ' (' + bytes(audioRecord.fileSize) + ') ' : '')
    }];
  }

  _getVideoSources(videoRecord) {
    let sources = [{
      record : videoRecord,
      type : 'video',
      src : config.fcrepoBasePath + videoRecord['@id'],
      filename : videoRecord.filename || videoRecord['@id'].split('/').pop(),
      label : this._getTypeLabel(videoRecord) + (videoRecord.fileSize ? ' (' + bytes(videoRecord.fileSize) + ') ' : '')
    }];

    let transcripts = videoRecord.transcript || [];
    if( !Array.isArray(transcripts) ) transcripts = [transcripts];

    transcripts
      .filter(transcript => transcript.error !== true)
      .forEach(transcript => {
        sources.push({
          record: transcript,
          src: config.fcrepoBasePath + transcript['@id'],
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

    let formats = config.imageDownload.formats.slice(0);
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

    if ( this.fullSetSelected ) {
      this.$.format.style.display = "none";
      this.$.downloadOptions.style.display = "none";
    } else {
      this.$.format.style.display = "initial";
      this.$.downloadOptions.style.display = "initial";
    }
    
    this._setTarPaths();
  }

  /**
   * @method _setTarPaths
   * @description set the fullset/tar form elements.
   */
  _setTarPaths() {
    let urls = {};
    this.tarName = this.rootRecord.name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();

    let sources = [];
    for( let type in this.rootRecord.media ) {
      for( let media of this.rootRecord.media[type] ) {
        sources = sources.concat(this._getDownloadSources(media, true));
      }
    }

    for( let source of sources ) {
      urls[source.filename] = source.src;
    } 
    console.log(urls)

    this.$.tarPaths.value = JSON.stringify(urls);
  }

  /**
   * @method _downloadTar
   * @description bound to download set button click event
   */
  _onDownloadFullSetClicked() {
    this.$.downloadTar.submit();

    let path = this.rootRecord['@id'].replace(config.fcrepoBasePath, '');
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
    let path = this.href.replace(config.fcrepoBasePath, '');

    gtag('event', 'download', {
      'event_category': this.sourceType,
      'event_label': path,
      'value': 1
    });
  }

}

customElements.define('app-media-download', AppMediaDownload);