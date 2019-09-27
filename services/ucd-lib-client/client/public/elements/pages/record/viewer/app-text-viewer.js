import { LitElement } from "lit-element"
import render from "./app-text-viewer.tpl.js"

import "@ucd-lib/cork-app-utils"
import config from "../../../../lib/config"

export default class AppTextViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {
  
  static get properties() {
    return {
      src: {
        type: String
      },
      type: {
        type: String
      }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel');
    this.src = '';
  }

  _onAppStateUpdate(e) {
    if ( this.fullPath !== e.location.fullpath ) { 

    }

    this.fullPath = e.location.fullpath;
  }

  async firstUpdated(e) {
    this.fullPath = (await this.AppStateModel.get()).location.fullpath;
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateModel, called when a records media is selected
   * 
   * @param {Object} media 
  **/
  async _onSelectedRecordMediaUpdate(media) {
    //console.log("app-text-viewer(media): ", media); 
  }
}

customElements.define('app-text-viewer', AppTextViewer);