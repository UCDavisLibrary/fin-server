import { PolymerElement } from "@polymer/polymer"
import template from "./app-video-viewer.html"

/* https://github.com/sampotts/plyr */
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

  load() {
    super.load();

    // Trying to debug SVG loading error
    // https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    let url = config.fcrepoBasePath+media['@id'];
    
    this.url = url;
    this.poster = media['thumbnailUrl'];

    const supported = Plyr.supported('video', 'html5', true);
    //console.log("supported: ", supported);
    
    const player = new Plyr(this.$.player, {
      debug: true
    });
  }

}

customElements.define('app-video-viewer', AppVideoViewer);