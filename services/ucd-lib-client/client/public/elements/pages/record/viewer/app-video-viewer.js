import {PolymerElement, html} from "@polymer/polymer"
import template from "./app-video-viewer.html"

import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"

import config from "../../../../lib/config"

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
      }
    }
  }

  constructor() {
    super();

    console.log("App Video Viewer");
    // https://github.com/sampotts/plyr
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    console.log("media: ", media);

    let url = config.fcrepoBasePath+media['@id'];
    
    this.url = url;
  }

}

customElements.define('app-video-viewer', AppVideoViewer);