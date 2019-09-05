
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
    let videoObj, mpdObj, vidId;

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

    let sources = object.filter(element => {
      if (element.video) return element;
    }).map(element => {
      let obj = {
        src: element.video['@id'],
        type: element.encodingFormat,
        size: parseInt(element.videoQuality),
        fileSize: parseInt(element.contentSize),
        width: parseInt(element.videoFrameSize.split("x")[0]),
        height: parseInt(element.videoFrameSize.split("x")[1]),
        license: element.license
      }

      return obj;
    });

    // TODO: Justin => is there a way to chain these together or make the code more efficient?
    let transcripts = 
      object.filter(element => element.transcript && element.transcript.length > 0)
            .map(el => el.transcript);

    let tempTranscriptsArray = [];
    if ( transcripts.length > 0 ) {
      transcripts[0].forEach((el, index, array) => {
        let extension = array[index]['@id'].split('.').pop();
        let obj = {
          src: array[index]['@id'],
          type: extension
        }
        tempTranscriptsArray.push(obj);
      });
    }

    transcripts = tempTranscriptsArray;
    
    videoObj = {
      id: vidId,
      name: mpdObj['name'],
      poster: mpdObj['thumbnailUrl'],
      encodingFormat: mpdObj['encodingFormat'],
      videoQuality: parseInt(mpdObj['videoQuality']),
      height: parseInt(mpdObj['videoQuality']),
      sources: sources,
      transcripts: transcripts
    }

    return videoObj;
  }
}

module.exports = new Utils();