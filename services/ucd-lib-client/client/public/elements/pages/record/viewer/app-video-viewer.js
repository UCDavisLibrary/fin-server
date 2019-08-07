// https://github.com/sampotts/plyr

// Trying to debug SVG loading error
// https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2
// https://github.com/xDae/react-plyr/blob/master/src/defaultProps.js

import { LitElement, html } from "lit-element"
import render from "./app-video-viewer.tpl.js"

// Sets globals Mixin and EventInterface
import "@ucd-lib/cork-app-utils"
import config from "../../../../lib/config"

import Plyr from "plyr"
import spriteSheet from "plyr/dist/plyr.svg"
let SPRITE_SHEET = spriteSheet;

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
    //console.log("media: ", media);

    this.$.player = this.shadowRoot.getElementById("player");

    this.url = config.fcrepoBasePath+media['@id'];
    this.fileType = media['encodingFormat'];

    const plyr_supported = Plyr.supported('video', 'html5', true);
    //console.log("plyr_supported: ", plyr_supported);

    const shaka_supported = Shaka.Player.isBrowserSupported();
    //console.log("shaka_supported: ", shaka_supported);

    if ( shaka_supported === true ) {

      // Install built-in polyfills
      Shaka.polyfill.installAll();

      /* These are temp values that will be replaced w/the values that come from Fedora */
      let manifestUri ='https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

      this.width = "768";
      this.height = "576";

      const shakaInstance = new Shaka.Player(this.$.player);
      
      // https://shaka-player-demo.appspot.com/docs/api/tutorial-config.html
      //console.log("player.getConfiguration: ", shakaInstance.getConfiguration());
      shakaInstance.configure({
        streaming: {
          bufferingGoal: 120
        }
      });
      
      shakaInstance.load(manifestUri).then(function() {
        console.log('The video has now been loaded');
      }).catch(function() {
        console.error('Error code: ', error.code, 'object', error);
      });

    } else {

      console.log("Shaka is not supported, use the fallback player");

      this.poster = media['thumbnailUrl'];
      this.width = media.video.videoFrameSize['1'];
      this.height = media.video.videoFrameSize['0'];

      const player = new Plyr(this.$.player);
      player.source = {
        debug: true,
        type: 'video',
        title: media['alternativeHeadline'],
        sources: [
          {
            src: this.url,
            type: this.fileType,
            size: 1080
          }
        ],
      };

    }
  }
}

customElements.define('app-video-viewer', AppVideoViewer);