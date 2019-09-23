// https://github.com/sampotts/plyr
// https://github.com/google/shaka-player/
// https://github.com/google/shaka-player/tree/master/docs/tutorials

import { LitElement } from "lit-element"
import render from "./app-video-viewer.tpl.js"

import "@ucd-lib/cork-app-utils"
import config from "../../../../lib/config"
import utils from "../../../../lib/utils"
import videoLibs from "../../../../lib/utils/video-lib-loader"

import spriteSheet from "plyr/dist/plyr.svg"
let SPRITE_SHEET = spriteSheet

export default class AppVideoViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {
  
  static get properties() {
    return {
      player: {
        type: Object
      },
      tracks: {
        type: Array
      }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel');
    this.tracks = [];
    this.player = {};
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
    //console.log("app-video-viewer(media): ", media);
    
    let getMediaType = utils.getType(media);
    if (getMediaType !== 'video' && getMediaType !== 'streamingVideo') return;

    this.media = media;

    try {
      let libs = await videoLibs.load();
      this.plyr = libs.plyr;
      this.shaka_player = libs.shaka_player;
      console.log("videoLibs loaded");
    } catch(error) {
      console.log("videoLibs.load() error: ", error);
    }

    let plyr_supported = this.plyr.supported('video', 'html5', true);
    //console.log("plyr_supported: ", plyr_supported);

    let shaka_supported = this.shaka_player.Player.isBrowserSupported();
    //console.log("shaka_supported: ", shaka_supported);

    let videoObject = utils.formatVideo(this.media);
    let videoUri = videoObject['id'];
    let title    = videoObject['name'];
    let poster   = videoObject['poster'];
    let width    = videoObject['width'];
    let height   = videoObject['height'];
    let sources  = videoObject['sources'];

    this.$.video = this.shadowRoot.getElementById('video');
    this.$.video.style.width     = width + "px";
    this.$.video.style.maxWidth  = "calc(" + height + " / " + width +  " * 100%)";
    this.$.video.style.maxHeight = "calc(" + height + " / " + width +  " * 100%)";

    if (videoObject['transcripts']) {
      let transcripts = utils.asArray(videoObject, 'transcripts').map(element => {
        return config.fcrepoBasePath + element.src;
      });
    }

    if (videoObject['captions']) {
      this.tracks = utils.asArray(videoObject, 'captions').map(element => {
        let temp = Object.assign({}, element);
        temp.src = config.fcrepoBasePath + element.src;
        return temp;
      });
    }

    this.player = new this.plyr(this.$.video, {
      title: title,
      blankVideo: 'https://cdn.plyr.io/static/blank.mp4',
      quality: videoObject['videoQuality'],
      debug: false
    });

    // WebVTT Validator recommended by Plyr.io
    // https://quuz.org/webvtt/
    this.player.source = {
      type: 'video',
      title: title,
      poster: poster,
      source: sources,
      tracks: this.tracks
    }

    if ( shaka_supported === true ) {
      let manifestUri = config.fcrepoBasePath+videoUri;

      // Functional demo uri
      //let manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8';
  
      const shaka = new this.shaka_player.Player(this.$.video);
      //console.log("shaka config: ", shaka.getConfiguration());

      try { 
        await shaka.load(manifestUri);
      } catch(error) {
        console.error('Error code: ', error.code, 'object', error);
      }
    } else {
      console.warn("Your browser is not supported");
    }
  }

  /**
   * Stop playback and reset to start
   */
  _stop() {
    const video = this.shadowRoot.querySelector('#video');
    video.pause();

    if ( this.player === undefined || this.player === null ) return;

    if (Object.entries(this.player).length != 0) {
      this.player.stop();
    };
  }
}

customElements.define('app-video-viewer', AppVideoViewer);