// https://github.com/ucd-library/pgdm-ui/tree/master/app/elements/pages/connect

import { html } from 'lit-element';
import plyrCss from "plyr/dist/plyr.css"

import shakaCss from "shaka-player/dist/controls.css"

export default function render() { 
return html`
    <style>${plyrCss}</style>
    <style>${shakaCss}</style>
    <style>
        :host {
            display: block;
            background-color: black;
            text-align: center;
        }
    </style>
    <div class="container">
        <div id="sprite-plyr" style="display: none;"></div>
        <video id="player" autoplay playsinline controls></video>
        <!--
        <video id="player" 
            src="http://localhost:3000/fcrepo/rest/collection/butterflies/monarchs/monarch1/videos/mb_v_mp4/monarch_butterfly.mp4" 
            type="video/mp4" 
            playsinline controls crossorigin></video>
        -->
    </div>
`
}
