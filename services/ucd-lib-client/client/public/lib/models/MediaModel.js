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

  getImgUrl(path, width='', height='') {
    if( width === null ) width = '';
    if( height === null ) height = '';

    return `${config.fcrepoBasePath}${path}/svc:iiif/full/${width},${height}/0/default.png`;
  }


}

module.exports = new MediaModel();