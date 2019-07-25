import {PolymerElement, html} from "@polymer/polymer"
import template from "./app-video-viewer.html"

import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"

import config from "../../../../lib/config"

import Plyr from "plyr"

export default class AppVideoViewer extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, MediaInterface) {

  static get template() {
    return html([template]);
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
      },
      player: {
        type: Object,
        value : null
      }
    }
  }

  constructor() {
    super();

    console.log("App Video Viewer");
    // https://github.com/sampotts/plyr

    this.player = new Plyr('#player', {
      title: 'Example Title',
      enabled: true,
      debug: true,
      loop: true
    });
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
  }

}

customElements.define('app-video-viewer', AppVideoViewer);