import { html } from 'lit-element';
import plyrCss from "plyr/dist/plyr.css"

export default function render() { 
return html`
<style>
  :host {
    display: none;
    padding: 20px;
    background: black;
    box-sizing: border-box;
  }

  .container {
    display: block;
    width: 100%;
  }

  #audio_poster {
    display: none;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 400px;
    height: 400px;
    border: 1px solid black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .plyr--audio {
    width: 50%;
    margin: 0 auto;
    border-radius: 5px;
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
  <div id="audio_poster"></div>
  <audio id="audio_player" controls>
    <source>
  </audio>
</div>
`
}