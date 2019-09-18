// https://github.com/sampotts/plyr
// https://github.com/google/shaka-player/
// https://github.com/google/shaka-player/tree/master/docs/tutorials

import { LitElement } from "lit-element"
import render from "./app-audio-viewer.tpl.js"

import "@ucd-lib/cork-app-utils"
import config from "../../../../lib/config"
import utils from "../../../../lib/utils"
import videoLibs from "../../../../lib/utils/video-lib-loader"

import spriteSheet from "plyr/dist/plyr.svg"
let SPRITE_SHEET = spriteSheet

export default class AppAudioViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {
  
  static get properties() {
    return {
      src: {
        type: String
      },
      type: {
        type: String
      }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel');
    this.src = '';
  }

  _onAppStateUpdate(e) {
    if ( this.fullPath !== e.location.fullpath ) { 
      this._stop();
    }

    this.fullPath = e.location.fullpath;
  }

  async firstUpdated(e) {
    this.fullPath = (await this.AppStateModel.get()).location.fullpath;
    
    // webpack module is base64 encoded URL, check if this happened 
    // and decode, then set svg to innerHtml inside the shadow dom.
    if( SPRITE_SHEET.indexOf('data:image/svg+xml;base64') > -1 ) {
      SPRITE_SHEET = atob(SPRITE_SHEET.replace('data:image/svg+xml;base64,', ''));
    }
    this.shadowRoot.querySelector('#sprite-plyr').innerHTML = SPRITE_SHEET;
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateModel, called when a records media is selected
   * 
   * @param {Object} media 
  **/
  async _onSelectedRecordMediaUpdate(media) {
    let getMediaType = utils.getType(media);

    if (getMediaType === 'audio') console.log("audio");
    else return;

    this.media = media;

    try {
      let libs = await videoLibs.load();
      this.audioPlyr = libs.plyr;
      console.log("videoLibs loaded");
    } catch(error) {
      console.log("videoLibs.load() error: ", error);
    }

    let plyr_supported = this.audioPlyr.supported('video', 'html5', true);
    //console.log("plyr_supported: ", plyr_supported);

    this.src  = config.fcrepoBasePath+this.media['@id'];
    this.type = this.media.encodingFormat;
    
    this.$.audio = this.shadowRoot.getElementById('audio_player');
    this.audioPlayer = new this.audioPlyr(this.$.audio, {
      debug: false
    });
  }

  /**
   * Stop playback and reset to start
   **/
  _stop() {
    const audio = this.shadowRoot.getElementById('audio_player');
    audio.pause();

    /* TODO: Fix
      ERROR: 
        app-audio-viewer.js:99 Uncaught TypeError: Cannot convert undefined or null to object
        at Function.entries (<anonymous>)
        at HTMLElement._stop (app-audio-viewer.js:99)
        at HTMLElement._onAppStateUpdate (app-audio-viewer.js:39)
        at EventBus._eb_handlers.<computed> (LitCorkUtils.js:142)
        at EventBus.../node_modules/events/events.js.EventEmitter.emit (events.js:96)
        at BaseStore.js:87
    *
    if (Object.entries(this.audioPlayer).length != 0) {
      this.audioPlayer.stop();
    };
    */
  }
}

customElements.define('app-audio-viewer', AppAudioViewer);