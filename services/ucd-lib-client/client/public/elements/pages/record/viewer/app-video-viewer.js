// https://github.com/sampotts/plyr

// Trying to debug SVG loading error
// https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2
// https://github.com/xDae/react-plyr/blob/master/src/defaultProps.js

import { LitElement, html } from "lit-element"
import render from "./app-video-viewer.tpl.js"

// Sets globals Mixin and EventInterface
import "@ucd-lib/cork-app-utils"
import config from "../../../../lib/config"
import utils from "../../../../lib/utils"

import Plyr from "plyr"
import spriteSheet from "plyr/dist/plyr.svg"
let SPRITE_SHEET = spriteSheet

// https://github.com/google/shaka-player/
import Shaka from "shaka-player"

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
    
    this.poster = this.media['thumbnailUrl'];
    const plyr_supported = Plyr.supported('video', 'html5', true);
    //console.log("plyr_supported: ", plyr_supported);

    // https://github.com/google/shaka-player/tree/master/docs/tutorials
    const shaka_supported = Shaka.Player.isBrowserSupported();
    //console.log("shaka_supported: ", shaka_supported);

    this.$.player = this.shadowRoot.getElementById("player");

    let videoObject = utils.formatVideo(media);
    console.log("videoObject: ", videoObject);
    let videoUri  = videoObject['id'];
    this.title    = videoObject['name'];
    this.poster   = videoObject['poster'];

    if ( shaka_supported === true ) {
      // Install built-in polyfills
      Shaka.polyfill.installAll();

      let manifestUri = config.fcrepoBasePath+videoUri;
      const shaka = new Shaka.Player(this.$.player);

      shaka.load(manifestUri).then(function() {
        console.log('The video has now been loaded');
      }).catch(function() {
        console.error('Error code: ', error.code, 'object', error);
      });

    } else {
      const player = new Plyr(this.$.player);

      player.source = {
        type: 'video',
        title: this.title,
        poster: this.poster,
        sources: [
          {
            src: config.fcrepoBasePath+videoObject['id'],
            type: videoObject['encodingFormat']
          }
        ]
      };
    }
  }
}

customElements.define('app-video-viewer', AppVideoViewer);