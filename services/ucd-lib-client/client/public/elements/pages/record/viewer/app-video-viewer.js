import { PolymerElement } from "@polymer/polymer"
import template from "./app-video-viewer.html"

/* https://github.com/sampotts/plyr */
// Trying to debug SVG loading error
// https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2
// https://github.com/xDae/react-plyr/blob/master/src/defaultProps.js

import Plyr from "plyr"
import plyrCss from "plyr/dist/plyr.css"

import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"

import config from "../../../../lib/config"

export default class AppVideoViewer extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, MediaInterface) {

  static get template() {
    let tag = document.createElement('template');
    
    tag.innerHTML = `<style>${plyrCss}</style>${template}`;
    
    return tag;

    //return html([template]);
  }

  static get properties() {
    return {
      url : {
        type: String,
        default: ''
      },
      poster : {
        type: String,
        default: ''
      }
    }
  }

  constructor() {
    super();
    console.log("App Video Viewer");
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    //console.log("media:", media);
    let url = config.fcrepoBasePath+media['@id'];
    
    this.url = url;
    this.poster = media['thumbnailUrl'];

    //const supported = Plyr.supported('video', 'html5', true);
    //console.log("supported: ", supported);
    
    const player = new Plyr(this.$.player);
    player.source = {
      type: 'video',
      title: 'Example Title',
      sources: [
        {
          src: this.url,
          type: media['encodingFormat']
        }
      ],
      poster: this.poster,
      loadSprite: true,
      iconPrefix: 'plyr',
      iconUrl: '../../../../images/sprite/',
      
      // Blank video (used to prevent errors on source change)
      blankVideo: '../../../../node_modules/plyr/dist/blank.mp4'
    }
  }
}

customElements.define('app-video-viewer', AppVideoViewer);