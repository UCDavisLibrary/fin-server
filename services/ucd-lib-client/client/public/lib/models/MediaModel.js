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
    if( !rootRecord.associatedMedia ) return [];

    // see if we have an image list
    for( var i = 0; i < rootRecord.associatedMedia.length; i++ ) {
      let ef = rootRecord.associatedMedia[i].encodingFormat;
      if( ef && ef.toLowerCase().replace(/ /g, '') === 'imagelist' ) {
        rootRecord._imageList = rootRecord.associatedMedia[i]._hasPart || [];
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

}

module.exports = new MediaModel();