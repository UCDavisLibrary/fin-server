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
          type: 'video/mp4'
          //type: media['encodingFormat']
        }
      ],
      poster: this.poster,
      iconPrefix: 'plyr',
      iconUrl: '../../../../images/sprite/',
      
      // Blank video (used to prevent errors on source change)
      blankVideo: '../../../../node_modules/plyr/dist/blank.mp4',
      
      // Selectors  
      // Change these to match your template if using custom HTML
      selectors: {
        editable: 'input, textarea, select, [contenteditable]',
        container: '.plyr',
        controls: {
          container: null,
          wrapper: '.plyr__controls',
        },
        labels: '[data-plyr]',
        buttons: {
          play: '[data-plyr="play"]',
          pause: '[data-plyr="pause"]',
          restart: '[data-plyr="restart"]',
          rewind: '[data-plyr="rewind"]',
          fastForward: '[data-plyr="fast-forward"]',
          mute: '[data-plyr="mute"]',
          captions: '[data-plyr="captions"]',
          download: '[data-plyr="download"]',
          fullscreen: '[data-plyr="fullscreen"]',
          pip: '[data-plyr="pip"]',
          airplay: '[data-plyr="airplay"]',
          settings: '[data-plyr="settings"]',
          loop: '[data-plyr="loop"]',
        },
        inputs: {
          seek: '[data-plyr="seek"]',
          volume: '[data-plyr="volume"]',
          speed: '[data-plyr="speed"]',
          language: '[data-plyr="language"]',
          quality: '[data-plyr="quality"]',
        },
        display: {
          currentTime: '.plyr__time--current',
          duration: '.plyr__time--duration',
          buffer: '.plyr__progress__buffer',
          loop: '.plyr__progress__loop', // Used later
          volume: '.plyr__volume--display',
        },
        progress: '.plyr__progress',
        captions: '.plyr__captions',
        caption: '.plyr__caption',
        menu: {
          quality: '.js-plyr__menu__list--quality',
        },
      },

      // Class hooks added to the player in different states
      classNames: {
        type: 'plyr--{0}',
        provider: 'plyr--{0}',
        video: 'plyr__video-wrapper',
        embed: 'plyr__video-embed',
        embedContainer: 'plyr__video-embed__container',
        poster: 'plyr__poster',
        posterEnabled: 'plyr__poster-enabled',
        ads: 'plyr__ads',
        control: 'plyr__control',
        controlPressed: 'plyr__control--pressed',
        playing: 'plyr--playing',
        paused: 'plyr--paused',
        stopped: 'plyr--stopped',
        loading: 'plyr--loading',
        hover: 'plyr--hover',
        tooltip: 'plyr__tooltip',
        cues: 'plyr__cues',
        hidden: 'plyr__sr-only',
        hideControls: 'plyr--hide-controls',
        isIos: 'plyr--is-ios',
        isTouch: 'plyr--is-touch',
        uiSupported: 'plyr--full-ui',
        noTransition: 'plyr--no-transition',
        display: {
          time: 'plyr__time',
        },
        menu: {
          value: 'plyr__menu__value',
          badge: 'plyr__badge',
          open: 'plyr--menu-open',
        },
        captions: {
          enabled: 'plyr--captions-enabled',
          active: 'plyr--captions-active',
        },
        fullscreen: {
          enabled: 'plyr--fullscreen-enabled',
          fallback: 'plyr--fullscreen-fallback',
        },
        pip: {
          supported: 'plyr--pip-supported',
          active: 'plyr--pip-active',
        },
        airplay: {
          supported: 'plyr--airplay-supported',
          active: 'plyr--airplay-active',
        },
        tabFocus: 'plyr__tab-focus',
        previewThumbnails: {
          // Tooltip thumbs
          thumbContainer: 'plyr__preview-thumb',
          thumbContainerShown: 'plyr__preview-thumb--is-shown',
          imageContainer: 'plyr__preview-thumb__image-container',
          timeContainer: 'plyr__preview-thumb__time-container',
          // Scrubbing
          scrubbingContainer: 'plyr__preview-scrubbing',
          scrubbingContainerShown: 'plyr__preview-scrubbing--is-shown',
        }
      }
    }
  }
}

customElements.define('app-video-viewer', AppVideoViewer);