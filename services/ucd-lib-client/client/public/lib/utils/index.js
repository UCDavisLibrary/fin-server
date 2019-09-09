
class Utils {

  getYearFromDate(date) {
    if( !date ) return '';
    date = date+'';

    date = date.match(/^(\d{4})/);
    if( !date ) return '';
    return date[0];
  }

  /**
   * @method asArray
   * @description given a record object, return a key as an array.
   * If the key doesn't exist, the array will be empty.  Singletons will
   * be converted to single item arrays and keys that are already arrays
   * will be return as is.
   * 
   * @param {Object} item most likely a JSON-LD record
   * @param {String} key key/attribute to access in item/record
   * 
   * @return {Array}
   */
  asArray(item = {}, key) {
    let value = item[key] || [];
    return Array.isArray(value) ? value : [value];
  }

  /**
   * @method formatVideo
   * @description return a properly formatted video object from the raw media object
   * 
   * @param {Object} object
   * 
   * @return {Object}
  */
  formatVideo(object) {
    let videoObj, mpdObj, vidId, sources;

    object.map(element => {
      if ( element['hasPart'] ) {
        mpdObj = element['hasPart'].find((element) => {
          // Locate a streaming video
          if (element.encodingFormat === "application/dash+xml") return element;
          // Locate a regular video
          else if (element.video) return element;
        });
        vidId = mpdObj['@id'];
      } else {
        mpdObj = element;
        vidId = mpdObj['video']['@id'];
      }
    });

    let rawObj;
    if ( object[0].hasPart ) {
      rawObj = object[0].hasPart.filter(element => !element.error);
    } else {
      rawObj = object.filter(element => element.video);
    }

    sources = rawObj.map(element => {
      let obj = {
        src: ((element.video && element.video['@id']) ? element.video['@id'] : element['@id']),
        type: (element.encodingFormat ? element.encodingFormat : element.fileFormat),
        size: (element.videoQuality ? parseInt(element.videoQuality) : element.contentSize),
        fileSize: parseInt(element.fileSize),
        width: (element.videoFrameSize ? parseInt(element.videoFrameSize.split("x")[0]) : 0 ),
        height: (element.videoFrameSize ? parseInt(element.videoFrameSize.split("x")[1]) : 0 ),
        license: (element.license ? 'license' : 'none'),
        transcript: (element.video ? false : true)
      };
      return obj;
    });

    // Sort so the transcripts go last
    sources.sort((a, b) => a.transcript - b.transcript);

    videoObj = {
      id: vidId,
      name: mpdObj['name'],
      poster: mpdObj['thumbnailUrl'],
      encodingFormat: mpdObj['encodingFormat'],
      videoQuality: parseInt(mpdObj['videoQuality']),
      width: parseInt(mpdObj.videoFrameSize.split("x")[0]),
      height: parseInt(mpdObj.videoFrameSize.split("x")[1]),
      sources: sources
    }

    return videoObj;
  }
}

module.exports = new Utils();