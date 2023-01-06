import { html } from 'lit';
import sharedStylesCss from "../styles/shared-styles";
// import { classMap } from 'lit/directives/class-map';
// import { styleMap } from 'lit/directives/style-map';

import SharedHtml from '../utils/shared-html';
import linksCss from "@ucd-lib/theme-sass/1_base_html/_links.css";
import buttonsCss from "@ucd-lib/theme-sass/2_base_class/_buttons.css";
import headingsCss from "@ucd-lib/theme-sass/2_base_class/_headings.css";

export default function render() { 
return html`
<style>
  ${linksCss}
  ${buttonsCss}
  ${headingsCss}
  
  :host {
    display: block;
    position: relative;
    background-color: var(--super-light-background-color);
  }

  .citation {
      background-color: var(--color-aggie-blue-30);
      display: flex;
      width: 100vw;
    }

    .citation a {
      padding: .3rem;
    }

    .citation a.btn-copy {
      background-color: var(--color-aggie-gold);
    }

    .citation a.btn-copy:hover {
      background-color: var(--color-aggie-blue);
      color: var(--color-aggie-gold);
    }

    .citation a.btn-apa {
      background-color: var(--color-aggie-blue-50);
      margin-right: .5rem;
      min-width: 8ch;
    }

    .citation a.btn-apa::after {
      content: ' ';
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid black;
      margin-left: 0.8rem;
    }

    .cite-graphic {
      margin: auto;
      width: 33%;
    }

    .citation .header-dots {
      margin: 0;
    }

    .cite-collection {
      margin: auto;
      width: 67%;
      padding: 2rem;
    }

    .cite-collection h2,
    .collection-highlights h2 {
      margin-bottom: .3rem;
    }

    .cite-collection p {
      margin-bottom: 3rem;
    }

  ${sharedStylesCss}

</style>
<div class="citation">
  <div class="cite-graphic">
    <img src="/images/watercolors/citation-watercolor-800px-square.png" width="100%" alt="cite this collection image" />
  </div>
  <div class="cite-collection">
    <h2>Cite This Collection</h2>

    ${ SharedHtml.headerDots() }

    <p>
      Loomis, Benjamin Franklin, Thompson, Peter Julian "Jack", Eastman, Jervie Henry, Riesen, John D, Myers, Loomis, Simmons, Mirl H. (1997).
      Eastman's Originals Collection. Retrieved September 28, 2022, from https://digital.ucdavis.edu/collection/eastman
    </p>

    <a href="" class="btn btn-apa">APA</a>
    <a href="" class="btn btn-copy">Copy Text</a>

  </div>
</div>
`;}