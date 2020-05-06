// https://github.com/sampotts/plyr
// https://github.com/google/shaka-player/
// https://github.com/google/shaka-player/tree/master/docs/tutorials

import { LitElement } from "lit-element"
import render from "./app-video-viewer.tpl.js"

import "@ucd-lib/cork-app-utils"

import config from "../../../../lib/config"
import utils from "../../../../lib/utils"
import videoLibs from "../../../../lib/utils/video-lib-loader"

import plyrCss from "plyr/dist/plyr.css"
import shakaCss from "shaka-player/dist/controls.css"
let VIDEO_STYLES = plyrCss+shakaCss;

import spriteSheet from "plyr/dist/plyr.svg"
let SPRITE_SHEET = spriteSheet

// Very dump.  To remove the 'Shaka Player TextTrack'
// you have to override this...
class SimpleTextDisplayer {
  constructor(video) {}
  remove() {return true}
  destroy() {}
  append(cues) {}
  setTextVisibility(on) {}
  isTextVisible() {return false}
}

export default class AppVideoViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {
  
  static get properties() {
    return {
      player: {type: Object},
      tracks: {type: Array},
      libsLoaded : {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel', 'MediaModel');
    this.tracks = [];
    this.player = {};
    this.libsLoaded = false;
  }

  _onAppStateUpdate(e) {
    if ( this.fullPath !== e.location.fullpath ) { 
      this._stop();
    }

    this.fullPath = e.location.fullpath;
  }

  async firstUpdated(e) {
    let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
    if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);

    this.fullPath = (await this.AppStateModel.get()).location.fullpath;
    
    // webpack module is base64 encoded URL, check if this happened 
    // and decode, then set svg to innerHtml inside the shadow dom.
    if( SPRITE_SHEET.indexOf('data:image/svg+xml;base64') > -1 ) {
      SPRITE_SHEET = atob(SPRITE_SHEET.replace('data:image/svg+xml;base64,', ''));
    }
    this.shadowRoot.querySelector('#sprite-plyr').innerHTML = SPRITE_SHEET;
  
    // decide where to put css
    // The PLYR library isn't aware of shadydom so we need to manually
    // place our styles in document.head w/o shadydom touching them.
    let plyrStyles = document.createElement('style');
    plyrStyles.innerHTML = VIDEO_STYLES;
    if( window.ShadyDOM && window.ShadyDOM.inUse ) {
      document.head.appendChild(plyrStyles);
      this.hideControls = false;
    } else {
      this.shadowRoot.appendChild(plyrStyles);
      this.hideControls = true;
    }
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateModel, called when a records media is selected
   * 
   * @param {Object} media 
  **/
  async _onSelectedRecordMediaUpdate(media) {
    if( !media ) return;
    let mediaType = utils.getMediaType(media);
    if (mediaType !== 'VideoObject' && mediaType !== 'StreamingVideo') return;

    this.media = media;

    // find associated captions and prep to tracks array
    this.tracks = utils.asArray(media, 'caption')
      .filter(caption => caption['@id'] !== undefined )
      .map(caption => {
        let lng = caption.language;
        let setDefault = (lng === 'en' ? true : false);

        return {
          kind: 'captions',
          label: utils.getLanguage(lng),
          srclang: lng,
          src: caption['@id'],
          default: setDefault
        };
      });

    // if we have already loaded the player and shaka libraries
    // then we can go ahead and load the video
    if( this.libsLoaded ) {
      this._loadVideo();
      return;
    }

    // dynamically load plyr and shaka libs
    let {plyr, shaka} = await videoLibs.load();

    // alert user if video playback is not supported
    let plyr_supported = plyr.supported('video', 'html5', true);
    let shaka_supported = shaka.Player.isBrowserSupported();
    if( !plyr_supported || !shaka_supported ) {
      return alert('Your browser does not support video playback');
    }

    let videoEle = this.shadowRoot.getElementById('video');


    this.plyr = new plyr(videoEle, {
      hideControls: this.hideControls,
      fullscreen : {enabled: false},
      captions: {update: false},
      // keyboard: {global: true},
      controls : ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume']
    });

    // Construct a Player to wrap around the <video> tag.
    this.shaka = new shaka.Player(videoEle, );
    this.shaka.configure({
      textDisplayFactory : SimpleTextDisplayer
    });

    this.shaka.addEventListener('error', e => console.error('shaka error', e));
    
    this.libsLoaded = true;
    await this._loadVideo();
  }

  /**
   * @method _loadVideo
   * @description load url into shaka for current media
   */
  async _loadVideo() {
    if( !this.media ) return;

    let mediaType = utils.getMediaType(this.media);
    let manifestUri = config.fcrepoBasePath+this.media['@id'];

    if( mediaType === 'StreamingVideo' ) {
      manifestUri += '/playlist.m3u8'
    }

    try {
      await this.shaka.load(manifestUri);
    } catch(error) {
      console.error('Error code: ', error.code, 'object', error);
    }
  }

  /**
   * Stop playback and reset to start
   */
  _stop() {
    const video = this.shadowRoot.querySelector('#video');
    video.pause();

    if ( this.plyr === undefined || this.plyr === null ) return;

    if (Object.entries(this.plyr).length != 0) {
      this.plyr.stop();
    };
  }
}

customElements.define('app-video-viewer', AppVideoViewer);