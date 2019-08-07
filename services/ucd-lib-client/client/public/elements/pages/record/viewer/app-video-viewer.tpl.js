// https://github.com/ucd-library/pgdm-ui/tree/master/app/elements/pages/connect

import { html } from 'lit-element';
import plyrCss from "plyr/dist/plyr.css"

export default function render() { 
return html`
    <style>${plyrCss}</style>
    <style>
        :host {
            display: block;
        }
    </style>
    <div id="sprite-plyr" style="display: none;"></div>

    <video id="player" playsinline controls crossorigin>
        <source src="${this.url}" type="${this.fileFormat}" />
    </video>
`
}
