// https://github.com/ucd-library/pgdm-ui/tree/master/app/elements/pages/connect

import { html } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

export default function render() { 
return html`
    <style>
        :host {
            display: block;
            /* padding-bottom: 8px; */
            background: black;
            box-sizing: border-box;
        }

        /*
        .plyr__controls {
            margin: 0 auto;
            width: calc(100vw / 1.8);
        }
        */

        .container {
            padding: 10px;
        }

        video {
            max-width: 100%;
            height: auto;
            max-height: 600px;
        }

        .plyr__video-wrapper {
            text-align: center;
        }

        .plyr--full-ui input[type=range] {
            color: #daaa00 !important;
        }

        button.plyr__control.plyr__control--overlaid,
        button.plyr__control.plyr__control:hover {
            background: rgba(218,170,0,1.0) !important;
        }

        .plyr__control:focus {
            background: rgba(218,170,0,1.0) !important;
        }
        .plyr--full-ui input[type=range] {
            padding: 2px !important;
            border: 1px solid transparent !important;
        }
        .plyr--full-ui input[type=range]:focus {
            border: 1px dashed rgba(218,170,0,1.0) !important;
        }
        .plyr__tab-focus {
            outline: 0 !important;
            background: transparent !important;
        }

        paper-spinner-lite {
            --paper-spinner-color: var(--default-secondary-color);
        }

        #loading {
            text-align: center;
        }
    </style>
    
    <div class="container">
        <div id="sprite-plyr" style="display: none;"></div> 
        <video ?hidden="${!this.libsLoaded}" id="video" playsinline controls crossorigin>
            ${repeat(this.tracks, (t) => 
                html`<track kind="${t.kind}" label="${t.label}" src="${t.src}" srclang="${t.srclang}" default="${t.default}" />`)}
        </video>
        <div id="loading" ?hidden="${this.libsLoaded}">
            <paper-spinner-lite ?active="${!this.libsLoaded}"></paper-spinner-lite>
        </div>
    </div>
`
}
