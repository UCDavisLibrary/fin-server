import { html } from 'lit-element';
import plyrCss from "plyr/dist/plyr.css"

export default function render() { 
return html`
    <style>
        :host {
            display: block;
            padding: 10px 20px;
            background: black;
            box-sizing: border-box;
        }

        .plyr--full-ui input[type=range] {
            color: #daaa00 !important;
        }

        button.plyr__control.plyr__control--overlaid,
        button.plyr__control.plyr__control:hover {
            background: rgba(218,170,0,1.0);
        }

        ${plyrCss}
    </style>
    <div class="container">
        <div id="sprite-plyr" style="display: none;"></div>
        <audio id="audio_player" controls>
            <source src="${this.src}" type="${this.type}">
        </audio>
    </div>
`
}
