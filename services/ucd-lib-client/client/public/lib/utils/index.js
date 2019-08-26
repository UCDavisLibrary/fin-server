
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
   * @method formatBytes
   * @description return bytes as the appropriate data size (Bytes, KB, MB, etc)
   * 
   * @param {Object} bytes - a number
   * 
   * @return {String}
  */
  // https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + '\xa0' + sizes[i];
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
    let videoObj, mpdObj, vidId, sources = {};

    object.map(element => {
      if ( element['hasPart'] ) {
        mpdObj = element['hasPart'].find((element) => {
          if (element['encodingFormat'] === "application/dash+xml") return element;
        });

        vidId = mpdObj['@id'];
      } else {
        mpdObj = element;
        vidId = mpdObj['video']['@id'];
      }
    });

    sources = object.filter(element => {
      if (element.video) return element;
    }).map(element => {
      let obj = {
        src: element.video['@id'],
        type: element.encodingFormat,
        size: parseInt(element.videoQuality),
        license: element.license
      }

      return obj;
    });

    videoObj = {
      id: vidId,
      name: mpdObj['name'],
      poster: mpdObj['thumbnailUrl'],
      encodingFormat: mpdObj['encodingFormat'],
      videoQuality: parseInt(mpdObj['videoQuality']),
      sources: sources
    }

    return videoObj;
  }
}

module.exports = new Utils();