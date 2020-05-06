// https://github.com/sampotts/plyr
// https://github.com/google/shaka-player/
// https://github.com/google/shaka-player/tree/master/docs/tutorials

import { LitElement } from "lit-element"
import render from "./app-audio-viewer.tpl.js"

import "@ucd-lib/cork-app-utils"
import config from "../../../../lib/config"
import utils from "../../../../lib/utils"
import videoLibs from "../../../../lib/utils/video-lib-loader"

import plyrCss from "plyr/dist/plyr.css"
import shakaCss from "shaka-player/dist/controls.css"
let AUDIO_STYLES = plyrCss+shakaCss;

import spriteSheet from "plyr/dist/plyr.svg"
let SPRITE_SHEET = spriteSheet

export default class AppAudioViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {
  
  static get properties() {
    return {}
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel', 'MediaModel');
    this.libsLoaded = false;
  }

  _onAppStateUpdate(e) {
    if ( this.fullPath !== e.location.fullpath ) { 
      this._stop();
    }

    this.fullPath = e.location.fullpath;
  }

  async firstUpdated(e) {
    this.$.audio  = this.shadowRoot.getElementById('audio_player');
    this.$.poster = this.shadowRoot.getElementById('audio_poster');

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
    plyrStyles.innerHTML = AUDIO_STYLES;
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
    if ( utils.getMediaType(media) !== 'AudioObject' ) return;

    this.media = media;

    if( this.libsLoaded ) {
      this._loadAudio();
      return;
    }

    // dynamically load plyr and shaka libs
    let {plyr} = await videoLibs.load();

    this.audioPlayer = new plyr(this.$.audio, {
      fullscreen : {enabled: false},
      captions: {update: false},
      controls : ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume']
    });

    this.style.display = 'block';
    this.libsLoaded = true;
    this._loadAudio();
  }

  _loadAudio() {
    let sourceEle = this.shadowRoot.querySelector('#audio_player source');
    sourceEle.src = config.fcrepoBasePath+this.media['@id'];
    sourceEle.type = this.media.fileFormat || this.media.hasMimeType || this.media.encodingFormat || '';
    
    // FF Hack.  Range slider not going back to 0 on stop
    try {
      this.audioPlayer.stop();
      let ele = this.shadowRoot.querySelector('input[type="range"][data-plyr="seek"]');
      if( ele ) ele.value = 0;
    } catch(e) {}

    this.shadowRoot.querySelector('#audio_player').load();

    let poster = this.media.thumbnailUrl  ? this.media.thumbnailUrl+'/svc:iiif/full/,400/0/default.jpg' : '';
    if ( poster ) {
      this.$.poster.style.display = 'block';
      this.$.poster.style.backgroundImage = "url(" + poster + ")";
    } else {
      this.$.poster.style.display = 'none';
    }
  }

  /**
   * Stop playback and reset to start
   **/
  _stop() {
    if( !this.audioPlayer ) return;
    this.audioPlayer.stop();
  }
}

customElements.define('app-audio-viewer', AppAudioViewer);