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

        .plyr__controls {
            margin: 0 auto;
            width: calc(100vw / 1.8);
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
        <video id="player" playsinline controls crossorigin>
            <track kind="captions" 
                label="English captions" 
                src="/fcrepo/rest/collection/butterflies/monarchs/monarch1/videos/mb_v_mp4/caption.vtt" 
                srclang="en" 
                default />
        </video>
    </div>
`
}
