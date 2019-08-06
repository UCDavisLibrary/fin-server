// https://github.com/sampotts/plyr

// Trying to debug SVG loading error
// https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2
// https://github.com/xDae/react-plyr/blob/master/src/defaultProps.js

import { LitElement, html, css } from "lit-element"
import render from "./app-video-viewer.tpl.js"

// Sets globals Mixin and EventInterface
import "@ucd-lib/cork-app-utils"
import config from "../../../../lib/config"

import Plyr from "plyr"

export default class AppVideoViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {
  
  static get properties() {
    return {
      url: {
        type: String,
        default: ''
      },
      poster: {
        type: String,
        default: ''
      }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel', 'MediaModel');
  }

  render() {
    //console.log(this.shadowRoot); // log shadow root
    
    return html([template]);
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("connected");

    setTimeout(() => {
      // hack for injecting sprite sheet
      if( this._init ) return;
      this._init = true;

      let ele = document.querySelector('#sprite-plyr');
      ele.parentElement.removeChild(ele);
      this.shadowRoot.appendChild(ele);
    }, 2000);

    let media = this.AppStateModel.getSelectedRecordMedia();
    if (media) {
      this._onSelectedRecordMediaUpdate(media);
    }
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateModel, called when a records media is selected
   * 
   * @param {Object} media 
  **/
  _onSelectedRecordMediaUpdate(media) {
    console.log("media: ", media);

    let url = config.fcrepoBasePath+media['@id'];
    this.url = url;
    this.poster = media['thumbnailUrl'];

    const supported = Plyr.supported('video', 'html5', true);
    //console.log("supported: ", supported);

    this.$.player = this.shadowRoot.getElementById("player");
    const player = new Plyr(this.$.player, {
      captions: {
        active: true,
        update: true,
        language: 'en'
      }
    });

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
      // Blank video (used to prevent errors on source change)
      blankVideo: '../../../../node_modules/plyr/dist/blank.mp4'
    };
  }
}

customElements.define('app-video-viewer', AppVideoViewer);