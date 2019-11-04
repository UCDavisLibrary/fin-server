const {BaseModel} = require('@ucd-lib/cork-app-utils');
const config = require('../config');
const utils = require('../utils/index');

const IMAGE_LIST = 'http://digital.ucdavis.edu/schema#ImageList';
const IMAGE_LIST_360 = 'http://digital.ucdavis.edu/schema#ImageList360';

class MediaModel extends BaseModel {
  
  constructor() {
    super();

    this.TYPES = {
      IMAGE_LIST, IMAGE_LIST_360
    };

    this.register('MediaModel');
  }

  /**
   * @method getImgPath
   * @description given a record, return the root image path
   * for this record.  The default order of lookup is workExample,
   * id if of mimeType image, associatedMedia
   * 
   * @param {Object} record
   * 
   * @returns {String} 
   */
  getImgPath(record) {
    if( record.image ) {
      return record.image.url;
    }

    if( record.workExample ) {
      if( Array.isArray(record.workExample) ) return record.workExample[0]['@id'];
      return record.workExample['@id'];
    }

    if( record.fileFormat && record.fileFormat.match(/^image/i) ) {
      return record['@id'];
    }

    if( record.associatedMedia ) {
      if( Array.isArray(record.associatedMedia) ) return record.associatedMedia[0]['@id'];
      return record.associatedMedia['@id'];
    }

    return '';
  }

  getImgUrl(path, width='', height='', options={}) {
    let size;

    if( width === null ) width = '';
    if( height === null ) height = '';
    if( !width && !height ) size = 'full';
    else size = width+','+height;

    let region = options.region || 'full';
    let quality = options.quality || 'default';
    let rotation = options.rotation || 0;
    let format = options.format || 'jpg';

    path = `${path}/svc:iiif/${region}/${size}/${rotation}/${quality}.${format}`;
    if( path.indexOf(config.fcrepoBasePath) !== 0 ) path = config.fcrepoBasePath+path;
    
    return path; 
  }

  get360Media(record) {
    let list = this.getImageMediaList(record, IMAGE_LIST_360) || [];
    if( list.length ) record._has360ImageList = true;
    return list;
  }

  /**
   * @method getImageMediaList
   * @description given a root record that has been has it's hasParts/associatedMedia
   * filled in, return the first image list found.
   * 
   * @param {Object} rootRecord a filled in root record
   * @returns {Array}
   */
  getImageMediaList(rootRecord, type) {
    if ( !rootRecord || !rootRecord._imageList ) return rootRecord;
    
    if( rootRecord._imageList && rootRecord._imageList.length ) return rootRecord._imageList;
    
    if( !rootRecord.associatedMedia ) return [];

    // see if we have an image list
    for( var i = 0; i < rootRecord.associatedMedia.length; i++ ) {
      let types = rootRecord.associatedMedia[i]['@type'];
      if( types && types.indexOf(type || IMAGE_LIST) > -1 ) {
        rootRecord._imageList = rootRecord.associatedMedia[i].hasPart || [];
        rootRecord._imageList.forEach(item => item.position = parseInt(item.position));
        rootRecord._imageList.sort((a, b) => {
          if( a.position > b.position ) return 1;
          if( a.position < b.position ) return -1;
          return 1;
        });

        return rootRecord._imageList;
      }
    }

    // if no image list, return list of images
    let imageRecords = [];
    for( var i = 0; i < rootRecord.associatedMedia.length; i++ ) {
      let ff = rootRecord.associatedMedia[i].fileFormat;
      if( ff && ff.match(/^image/i) ) {
        imageRecords.push(rootRecord.associatedMedia[i]);
      }
    }
    rootRecord._imageList = imageRecords;

    return imageRecords;
  }

  /**
   * @method formatVideoForPlyr
   * @description return a config object ready to be plugged into plyr
   * 
   * @param {Object} mediaRecord video container
   * @param {Object} rootRecord root container for media
   * 
   * @return {Object}
   */
  // formatVideoForPlyr(mediaRecord, rootRecord={}) {
  //   let transcripts = [], captions = [];

  //   if( mediaRecord.caption ) {
  //     utils.asArray(mediaRecord, 'caption').forEach(caption => {
  //       if( !caption['@id'] ) return;

  //       let lng = caption.language;
  //       let setDefault = (lng === 'en' ? true : false);

  //       let obj = {
  //         kind: 'captions',
  //         label: utils.getLanguage(lng),
  //         srclang: lng,
  //         src: caption['@id'],
  //         default: setDefault
  //       };

  //       captions.push(obj);
  //     });
  //   }

  //   let sources = [{
  //     name: mediaRecord.name || rootRecord.name || '',
  //     src: config.fcrepoBasePath+mediaRecord['@id'],
  //     type: mediaRecord.encodingFormat || mediaRecord.fileFormat || '',
  //     size: mediaRecord.videoQuality ? parseInt(mediaRecord.videoQuality) : null,
  //     fileSize: mediaRecord ? parseInt(mediaRecord.contentSize) : null,
  //     width: mediaRecord.videoFrameSize ? parseInt(mediaRecord.videoFrameSize.split("x")[0]) : 0,
  //     height: mediaRecord.videoFrameSize ? parseInt(mediaRecord.videoFrameSize.split("x")[1]) : 0,
  //     license: mediaRecord.license ? 'license' : 'none'
  //   }];

  //   return {
  //     id: mediaRecord['@id'],
  //     name: mediaRecord.name || rootRecord.name || '',
  //     poster: mediaRecord.thumbnailUrl || mediaRecord.image || rootRecord.image,
  //     encodingFormat: mediaRecord.encodingFormat,
  //     videoQuality: mediaRecord.videoQuality ? parseInt(mediaRecord.videoQuality) : null,
  //     width: mediaRecord.videoFrameSize ? parseInt(mediaRecord.videoFrameSize.split("x")[0]) : 0,
  //     height: mediaRecord.videoFrameSize ? parseInt(mediaRecord.videoFrameSize.split("x")[1]) : 0,
  //     sources: sources,
  //     transcripts: transcripts,
  //     captions: captions
  //   }
  // }

}

module.exports = new MediaModel();