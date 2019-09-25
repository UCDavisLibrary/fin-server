
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
    let mediaType = 'text';

    record['@type'].forEach(element => {
      let el = element.toLowerCase();
      if (el.includes('imagelist')) mediaType = 'imageList';
      else if (el.includes('imageobject')) mediaType = 'image';
      else if (el === 'http://schema.org/video' || el === 'http://schema.org/videoobject') mediaType = 'video';
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

  countMediaItems(mediaObj) {
    if ( !mediaObj ) return false;
    let count = 0;
    Object.keys(mediaObj).forEach(key => {
      count += mediaObj[key].length;
    });
    return count;
  }

  flattenMediaList(mediaObj) {
    let array = [];

    Object.keys(mediaObj).forEach(key => {
      mediaObj[key].forEach(element => {
        // TODO: We don't really want to include the streaming video as a download option
        // Should we still include it on the thumbnails?
        if (this.getType(element) !== 'streamingVideo') {
          // Check and make sure you're only looping hasParts that belong to imageLists
          // We don't care about video hasParts right here, because these are just thumbnails
          if (element.hasPart && this.getType(element) === 'imageList') {
            element.hasPart.forEach((el) => {
              array.push(el);
            });
          } else {
            array.push(element);
          }
        }
      });
    });

    return array;
  }

  organizeMediaList(mediaListArray) {
    mediaListArray.map(item => item.position = parseInt(item.position))
      .sort((a, b) => {
        if(a.position > b.position) return 1;
        if(a.position < b.position) return -1;
        return 1;
      });
    
    return mediaListArray;
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
          if ( !element.error ) {
            // Locate a streaming video
            if ( this.getType(element) === 'streamingVideo' ) return element;
            // Locate a regular video
            else if (element.video) return element;
          } else {
            console.log("Error: ", element.error);
          }
        });
        vidId = mpdObj['@id'];
      } else if ( this.getType(element) === 'streamingVideo' ) {
        mpdObj = element;
        vidId  = mpdObj['@id'];
      } else {
        mpdObj = element;
        vidId  = (mpdObj['clientMedia'] ? mpdObj['clientMedia']['@id'] : mpdObj['video']['@id']);
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
        return { src: id + '/' + element.name, name: element.name };
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
      let name = (element.video.name ? element.video.name : '');
      let obj = {
        name: name,
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