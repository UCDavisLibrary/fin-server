// https://github.com/ucd-library/pgdm-ui/tree/master/app/elements/pages/connect

import { html } from 'lit-element';
import plyrCss from "plyr/dist/plyr.css"
import shakaCss from "shaka-player/dist/controls.css"

export default function render() { 
return html`
    <style>
        :host {
            display: block;
            position: relative;
            padding-bottom: 8px;
            background: black;
            box-sizing: border-box;
        }

        .container {
            position: relative;
        }

        app-image-viewer-nav {
            position: absolute;
            z-index: 1000000;
            bottom: 0;
            right: 0;
            background: none;
        }

        .plyr__controls {
            margin: 0 auto;
            width: calc(100vw / 1.5);
        }

        .plyr__video-wrapper {
            text-align: center;
        }

        .plyr--full-ui input[type=range] {
            color: #daaa00 !important;
        }

        button.plyr__control.plyr__control--overlaid,
        button.plyr__control.plyr__control:hover {
            background: rgba(218,170,0,1.0);
        }

        ${plyrCss}
        ${shakaCss}
    </style>
    <div class="container">
        <div id="sprite-plyr" style="display: none;"></div>
        <video id="player" playsinline controls crossorigin></video>
    </div>
`
}
