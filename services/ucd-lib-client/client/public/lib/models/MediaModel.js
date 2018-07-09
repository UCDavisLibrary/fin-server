const {BaseModel} = require('@ucd-lib/cork-app-utils');
const config = require('../config');

class MediaModel extends BaseModel {
  
  constructor() {
    super();

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
      return record.image.path;
    }

    if( record.workExample ) {
      if( Array.isArray(record.workExample) ) return record.workExample[0];
      return record.workExample;
    }

    if( record.fileFormat && record.fileFormat.match(/^image/i) ) {
      return record.id;
    }

    if( record.associatedMedia ) {
      if( Array.isArray(record.associatedMedia) ) return record.associatedMedia[0];
      return record.associatedMedia;
    }

    return '';
  }

  getImgUrl(path, width='', height='', format='jpg') {
    if( width === null ) width = '';
    if( height === null ) height = '';
    
    let size = width+','+height;
    if( !width && !height ) size = 'full';

    return `${config.fcrepoBasePath}${path}/svc:iiif/full/${size}/0/default.${format}`;
  }

  /**
   * @method getImageMediaList
   * @description given a root record that has been has it's hasParts/associatedMedia
   * filled in, return the first image list found.
   * 
   * @param {Object} rootRecord a filled in root record
   * @returns {Array}
   */
  getImageMediaList(rootRecord) {
    if( rootRecord._imageList ) return rootRecord._imageList;
    if( !rootRecord._associatedMedia ) return [];

    // see if we have an image list
    for( var i = 0; i < rootRecord._associatedMedia.length; i++ ) {
      let ef = rootRecord._associatedMedia[i].encodingFormat;
      if( ef && ef.toLowerCase().replace(/ /g, '') === 'imagelist' ) {
        rootRecord._imageList = rootRecord._associatedMedia[i]._hasPart || [];
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
    for( var i = 0; i < rootRecord._associatedMedia.length; i++ ) {
      let ff = rootRecord._associatedMedia[i].fileFormat;
      if( ff && ff.match(/^image/i) ) {
        imageRecords.push(rootRecord._associatedMedia[i]);
      }
    }
    rootRecord._imageList = imageRecords;

    return imageRecords;
  }

}

module.exports = new MediaModel();