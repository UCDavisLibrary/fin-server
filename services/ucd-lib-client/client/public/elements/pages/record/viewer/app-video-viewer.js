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
let SPRITE_SHEET = spriteSheet;

// https://github.com/google/shaka-player/
import Shaka from "shaka-player"
import { timingSafeEqual } from "crypto";

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
    console.log("app-video-viewer.js this.media: ", this.media);
    
    this.poster = this.media['thumbnailUrl'];

    const plyr_supported = Plyr.supported('video', 'html5', true);
    //console.log("plyr_supported: ", plyr_supported);

    const shaka_supported = Shaka.Player.isBrowserSupported();
    //console.log("shaka_supported: ", shaka_supported);

    this.$.player = this.shadowRoot.getElementById("player");
    const player = new Plyr(this.$.player, {
      debug: false
    });

    /* 
      TODO:
        Just putting this here for now.  There may be a better place to move it.
    */
    let _sources = [];
    let _source = {};
    
    if (this.media.associatedMedia) {
      this.title = this.media['name'];

      this.media.associatedMedia.forEach(function(element){
        let videoFrameSize = element.videoFrameSize.split("x");    
        _source = {
          src: config.fcrepoBasePath+element.video['@id'],
          type: element.encodingFormat,
          size: videoFrameSize['1'],
        }
        _sources.push(_source);
      });
      //console.log("_sources A: ", _sources);
    } else if (this.media.video) {
      this.title = this.media.alternativeHeadline;
      let videoFrameSize = this.media.videoFrameSize.split("x");

      _source = {
        src: config.fcrepoBasePath+this.media.video['@id'],
        type: this.media['encodingFormat'],
        size: videoFrameSize['1']
      }
      _sources.push(_source);
      //console.log("_sources B: ", _sources);
    }

    player.source = {
      type: 'video',
      title: this.title,
      poster: this.poster,
      sources: _sources
    };

    /*
    if ( shaka_supported === true ) {
      // Install built-in polyfills
      Shaka.polyfill.installAll();

      // These are temp values that will be replaced w/the values that come from Fedora
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
    }
    */

  }
}

customElements.define('app-video-viewer', AppVideoViewer);