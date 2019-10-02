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

    if (getMediaType !== 'audio') return;

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

    this.src      = config.fcrepoBasePath+this.media['@id'];
    this.type     = this.media.encodingFormat;
    this.poster   = this.media.thumbnailUrl;
    this.$.audio  = this.shadowRoot.getElementById('audio_player');
    this.$.poster = this.shadowRoot.getElementById('audio_poster');

    this.$.poster.style.display = 'none';
    if ( this.poster ) {
      this.$.poster.style.display = 'block';
      this.$.poster.style.backgroundImage = "url(" + this.poster + ")";
    }
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

    if ( this.audioPlayer === undefined || this.audioPlayer === null) return;

    if (Object.entries(this.audioPlayer).length !== 0) {
      this.audioPlayer.stop();
    };

  }
}

customElements.define('app-audio-viewer', AppAudioViewer);