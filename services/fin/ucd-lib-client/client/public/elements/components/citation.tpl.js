import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import SharedHtml from '../utils/shared-html';
// import sharedStylesCss from "../styles/shared-styles";
import { sharedStyles } from "../styles/shared-styles";

// import { classMap } from 'lit/directives/class-map';
// import { styleMap } from 'lit/directives/style-map';

import linksCss from "@ucd-lib/theme-sass/1_base_html/_links.css";
import buttonsCss from "@ucd-lib/theme-sass/2_base_class/_buttons.css";
import headingsCss from "@ucd-lib/theme-sass/2_base_class/_headings.css";

export default function render() { 
return html`
<style>
  ${sharedStyles}
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

    .citation .btn-copy {
      padding: .3rem;
      background-color: var(--color-aggie-gold);
      cursor: pointer;
      border: none;
    }

    .citation .btn-copy:hover {
      background-color: var(--color-aggie-blue);
      color: var(--color-aggie-gold);
    }

    .citation .btn-apa {
      background-color: var(--color-aggie-blue-50);
      margin-right: .5rem;
      min-width: 8ch;
      height: 3.18rem;

      /* arrow styles */
      display: inline-block;
      margin: 0;      
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;      
      background-image:
        linear-gradient(45deg, transparent 50%, var(--color-aggie-blue) 50%),
        linear-gradient(135deg, var(--color-aggie-blue) 50%, transparent 50%),
        linear-gradient(to right, #ccc, #ccc);
      background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        calc(100% - 2.5em) 0.5em;
      background-position-y: center;
      background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
      background-repeat: no-repeat;
      outline: 0;
      padding-right: 1.5rem;
      margin-right: .7rem;
    }

    .cite-graphic {
      margin: auto;
      width: 33%;
    }

    .citation .header-dots {
      margin: 0;
      align-items: start;
      padding-bottom: 1rem;
    }

    .cite-collection {
      margin: auto;
      width: 67%;
      padding: 2rem;
    }

    .cite-collection h2,
    .collection-highlights h2 {
      margin-bottom: 1rem;
      font-weight: 600;
      color: var(--default-primary-color);
    }

    .cite-collection p {
      margin-bottom: 3rem;
      margin-top: 0;
    }

    @media (max-width: 600px) {
      .citation {
        display: block;
      }

      .cite-graphic {
        width: 70%;
      }

      .cite-collection {
        padding-top: 0;
      }
    }

</style>
<div class="citation">
  <div class="cite-graphic">
    <img src="/images/watercolors/citation-watercolor-800px-square.png" width="100%" alt="cite this collection image" />
  </div>
  <div class="cite-collection">
    <h2>Cite This Collection</h2>

    ${ SharedHtml.headerDots() }

    <p>
      ${unsafeHTML(this.selectedCitation.text)}
    </p>

    <!-- <a href="" class="btn btn-apa">APA</a> -->
    <select class="btn btn-apa" @change="${this._citeChange}">
      <option value="apa">APA</option>
      <option value="mla">MLA</option>
      <option value="chicago">Chicago</option>
    </select>
    <div class="btn btn-copy" @click="${this._copyCiteText}">Copy Text</div>

  </div>
</div>
`;}
