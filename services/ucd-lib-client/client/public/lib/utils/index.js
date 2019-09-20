
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
   * @method findMediaFromId
   * @description given a record object, use the id (@id) to return
   * the entire object
   * 
   * @param {Array} record most likely a JSON-LD record
   * @param {String} id @id to access in item/record
   * 
   * @return {Array}
   */
  findMediaFromId(record = [], id) {
    if (!Array.isArray(record)) return false;
    return record.filter(element => element['@id'] === id );
  }

  getType(record) {
    if (record.error) return;
    let mediaType = 'image';

    record['@type'].forEach(element => {
      let el = element.toLowerCase();

      if (el.includes('imagelist')) mediaType = 'imageList';
      else if (el.includes('imageobject')) mediaType = 'image';
      else if (el === 'http://schema.org/video') mediaType = 'video';
      else if (el.includes('streamingvideo')) mediaType = 'streamingVideo';
      else if (el.includes('audioobject')) mediaType = 'audio';
    });

    return mediaType;
  }

  getLanguage(lng) {
    let dict = [
      {
        key: 'en',
        name: 'English',
      },
      {
        key: 'fr',
        name: 'French',
      },
    ];

    return dict.find(element => element.key == lng);
  }

  /**
   * @method formatVideo
   * @description return a properly formatted video object
   * 
   * @param {Object || Array} media
   * 
   * @return {Object}
  */
  formatVideo(rawMedia) {
    //console.log("formatVideo(rawMedia) ", rawMedia);
    
    let media = [], videoObj = [], mpdObj, vidId, sources = [], transcripts = [], captions = [];

    if (rawMedia instanceof Object) {
      media.push(rawMedia);
    }

    media.map(element => {
      if ( element['hasPart'] ) {
        mpdObj = element['hasPart'].find((element) => {
          // Locate a streaming video
          if (element.encodingFormat === "application/dash+xml") return element;
          // Locate a regular video
          else if (element.video) return element;
        });
        vidId = mpdObj['@id'];
      } else if ( this.getType(element) === 'streamingVideo' ) {
        mpdObj = element;
        vidId  = mpdObj['@id'];
      } else {
        mpdObj = element;
        vidId = mpdObj['video']['@id'];
      }
    });

    let rawObj;
    if ( media[0].hasPart ) {
      rawObj = media[0].hasPart.filter(element => !element.error && element.video);
    } else {
      rawObj = media.filter(element => element.video);
    }

    let id = mpdObj.parent['@id'];
    if (mpdObj.transcript) {
      transcripts = this.asArray(mpdObj, 'transcript').map(element => {
        return { src: id + '/' + element.name };
      });
    }

    if (mpdObj.caption) {
      this.asArray(mpdObj, 'caption').map(element => {
        let _id = element['@id'];
        this.findMediaFromId(media[0].hasPart, _id).forEach(caption => {
          let lng = caption.language;
          let setDefault = (lng === 'en' ? true : false);

          let obj = {
            kind: 'captions',
            label: this.getLanguage(lng).name,
            srclang: this.getLanguage(lng).key,
            src: caption['@id'],
            default: setDefault
          };

          captions.push(obj);
        });
      });
    }

    sources = rawObj.map(element => {
      let obj = {
        src: ((element.video && element.video['@id']) ? element.video['@id'] : element['@id']),
        type: (element.encodingFormat ? element.encodingFormat : element.fileFormat),
        size: parseInt(element.videoQuality),
        fileSize: parseInt(element.contentSize),
        width: (element.videoFrameSize ? parseInt(element.videoFrameSize.split("x")[0]) : 0 ),
        height: (element.videoFrameSize ? parseInt(element.videoFrameSize.split("x")[1]) : 0 ),
        license: (element.license ? 'license' : 'none')
      };

      return obj;
    });

    videoObj = {
      id: vidId,
      name: mpdObj['name'],
      poster: mpdObj['thumbnailUrl'],
      encodingFormat: mpdObj['encodingFormat'],
      videoQuality: parseInt(mpdObj['videoQuality']),
      width: parseInt(mpdObj.videoFrameSize.split("x")[0]),
      height: parseInt(mpdObj.videoFrameSize.split("x")[1]),
      sources: sources,
      transcripts: transcripts,
      captions: captions
    }

    return videoObj;
  }
}

module.exports = new Utils();