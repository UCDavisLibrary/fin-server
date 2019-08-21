// https://github.com/sampotts/plyr
// https://github.com/google/shaka-player/
// https://github.com/google/shaka-player/tree/master/docs/tutorials

import { LitElement, html } from "lit-element"
import render from "./app-video-viewer.tpl.js"

// Sets globals Mixin and EventInterface
import "@ucd-lib/cork-app-utils"
import config from "../../../../lib/config"
import utils from "../../../../lib/utils"
import videoLibs from "../../../../lib/utils/video-lib-loader"

//import Plyr from "plyr"
//import Shaka from "shaka-player"
import spriteSheet from "plyr/dist/plyr.svg"
let SPRITE_SHEET = spriteSheet

export default class AppVideoViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {
  
  static get properties() {
    return {
      url: {
        type: String,
        default: ''
      },
      fileType: {
        type: String,
        default: ''
      },
      poster: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel');
  }

  firstUpdated() {
    // webpack module is base64 encoded URL, check if this happened 
    // and decode, then set svg to innerHtml inside the shadow dom.
    if( SPRITE_SHEET.indexOf('data:image/svg+xml;base64') > -1 ) {
      SPRITE_SHEET = atob(SPRITE_SHEET.replace('data:image/svg+xml;base64,', ''));
    }
    this.shadowRoot.querySelector('#sprite-plyr').innerHTML = SPRITE_SHEET;
  }

  updated(props) {
    if (props.has('url') && props.get('url') !== this.url) {
      this.shadowRoot.querySelector('video').load();
    }
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateModel, called when a records media is selected
   * 
   * @param {Object} media 
  **/
  async _onSelectedRecordMediaUpdate(media) {
    this.media = media;
    //console.log("app-video-viewer.js this.media: ", this.media);

    if (utils.isVideo(this.media) === false) {
      return;
    }

    try { 
      let { plyr, shaka_player } = await videoLibs.load();
      this.plyr = plyr;
      this.shaka_player = shaka_player;
      //console.log("videoLibs loaded");
    } catch(error) {
      console.log("videoLibs.load() error: ", error);
    }
    
    this.poster = this.media['thumbnailUrl'];
    const plyr_supported = this.plyr.supported('video', 'html5', true);
    //console.log("plyr_supported: ", plyr_supported);

    const shaka_supported = this.shaka_player.Player.isBrowserSupported();
    //console.log("shaka_supported: ", shaka_supported);

    this.$.player = this.shadowRoot.getElementById("player");
    let videoObject = utils.formatVideo(media);
    //console.log("videoObject: ", videoObject);
    let videoUri  = videoObject['id'];
    this.title    = videoObject['name'];
    this.poster   = videoObject['poster'];
    this.sources  = videoObject['sources'];

    const player = new this.plyr(this.$.player, {
      title: this.title,
      blankVideo: 'https://cdn.plyr.io/static/blank.mp4',
      debug: false
    });

    player.source = {
      type: 'video',
      title: this.title,
      poster: this.poster,
      source: this.sources
    }

    if ( shaka_supported === true ) {
      let manifestUri = config.fcrepoBasePath+videoUri;
      const shaka = new this.shaka_player.Player(this.$.player);

      //console.log(shaka.getConfiguration());

      try { 
        await shaka.load(manifestUri); 
        console.log('The video has now been loaded');
      } catch(error) {
        console.error('Error code: ', error.code, 'object', error);
      }
    } else {
      console.warn("Your browser is not supported");
    }
  }
}

customElements.define('app-video-viewer', AppVideoViewer);