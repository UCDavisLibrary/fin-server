import { html, unsafeCSS } from 'lit';

import { sharedStyles } from "../../styles/shared-styles";
import SharedHtml from '../../utils/shared-html';
import jsonStyles from 'json-formatter-js/dist/json-formatter.css';
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
    ${unsafeCSS(jsonStyles)}
    :host {
      display: block;
      position: relative;
      font-size: .9rem;
      width: 100vw;
    }

    :host > div {
      padding: 0 40px;
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2.1rem;
      font-weight: 700;
      color: var(--color-aggie-blue);
    }

    h3 {
      font-size: 1.7rem;
      font-weight: 700;
    }

    .title-section {
      display: flex;
      min-height: 42vw;
    }

    .title-section > div {
      flex: 1;
      padding: 2rem;
      width: 50%;
    }

    .collection-header {
      margin: auto;
    }

    a.btn--alt {
      padding-top: 0;
      padding-bottom: 0;
      color: white;
    }

    .image-overlay {
      position: relative;
    }

    .watercolor-bg {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }

    .featured-image {
      z-index: 50;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      transform: rotate(356deg)
    }

    .watercolor-fg {
      z-index: 100;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }

    .content-warning {
      padding: 2rem;
      background-color: var(--color-aggie-gold-30);
      font-style: italic;
    }

    .detail-section {
      line-height: 1.7rem;
      width: 60%;
      margin: 0 auto;
    }

    .description {
      margin: 2rem 0;
    }

    .label {
      font-weight: bold;
      padding-right: 0.3rem;
    }

    .collection-highlights {
      text-align: center;
    }

    .card-2-4 {
      width: 75%;
      margin: 0 auto;
    }
    .card-2,
    .card-2-4,
    .card-trio,
    .card-5-plus {
      display: grid;
      grid-template-columns: auto;
      grid-gap: var(--spacing-sm);
    }
    .card-2 dams-collection-card,
    .card-2-4 dams-collection-card,
    .card-trio dams-collection-card,
    .card-5-plus dams-collection-card {
      margin-bottom: var(--spacing-default);
    }

    .collection-highlights a.btn--primary {
      color: var(--color-aggie-blue);
      padding-top: .3rem;
      padding-bottom: .3rem;
      margin: 1rem 0 3rem;
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

    .admin-heading {
      margin-top: 5rem;
      text-align: center;
    }

    .admin-content {
      border-style: inset;
      border-color: rgb(235, 243, 250);
      margin: 2rem;
    }

    .admin-box-title {
      text-align: center;
      font-weight: normal;
      margin: 0;
    }

    @media (min-width: 767px) {
      .card-2,
      .card-2-4 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .card-trio,
      .card-5-plus {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      
      .card-trio {
        margin-right: 0;
        margin-left: 0;
      }
    }

    @media (max-width: 600px) {
      
      .title-section {
        display: block;
        min-height: 90vh;
      }

      .title-section > div {
        width: 80%;
        margin: auto;
        height: 30vh;
      }
      
      .detail-section {
        width: 80%;
      }

      .citation {
        display: block;
      }

      .cite-graphic,
      .cite-collection {
        width: 80%;
        padding-top: 0;
      }

    }

    
  </style>
  
    <div class="title-section">
      <div class="image-overlay">
        <img class="watercolor-bg" src="/images/watercolors/collection-watercolor-thiebaud-icing-back.png" width="100%" alt="something" />
        <img class="featured-image" src="/images/stub/amerine.jpg" width="60%" alt="something" />
        <img class="watercolor-fg" src="/images/watercolors/collection-watercolor-thiebaud-icing-front.png" width="100%" alt="something" />
      </div>
      <div class="collection-header">
        <h1>Amerine (Maynard) Menu Collection</h1>
        <h3>Collection #D-060</h3>
        <a href="${this._href}" class="btn--alt btn--round">View 42 items</a>
      </div>
    </div>

    <div class="detail-section">
      <div class="content-warning">
        Due to the nature of the historical items in this collection, some materials may be considered harmful, offensive or misrepresentative.
        There may be occurences of language, positions and values that do not align with our current values and practices at UC Davis.
      </div>
      <p class="description">
        Maynard A. Amerine (1911-1998) was Professor of Viticulture and Enology at the University of California, Davis. He was an author, lecturer, bibliographer, and consultant on wine matters. This collection of over 1,500 menus and wine lists complements Amerine’s larger wine label collection. It spans several decades and chronicles dining experiences in United States and European restaurants, at bon voyage and welcome home celebrations, at UC Davis Department of Enology events and parties, at meetings of food and wine societies, aboard ships and airlines, and more. Menu styles vary from simple lists of items and prices to hand-illustrated works of art. Some menus are pristine, while others bear the marks of their use through stains of food and drink, personal notes on the wine selection, or the collected signatures of organizers and guests.
      </p>

      <div style="margin-bottom: .4rem;">
        <span class="label">Coverage: </span> Date
      </div>
      <div style="margin-bottom: .4rem;">
        <span class="label">Subjects: </span> <a href="">Keyword</a>, <a href="">Keyword</a>
      </div>
      <div style="margin-bottom: 3rem;">
        <span class="label">Finding Aid: </span> <a href="">Online Archive of California</a>
      </div>
    </div>

    <div class="collection-highlights">
      <h2>Collection Highlights</h2>
      ${ SharedHtml.headerDots() }
      
      <div class="card-trio">
        <dams-item-card .collection="${{}}"></dams-item-card>
        <dams-item-card .collection="${{}}"></dams-item-card>
        <dams-item-card .collection="${{}}"></dams-item-card>
      </div>
      <div class="card-trio">
        <dams-item-card .collection="${{}}"></dams-item-card>
        <dams-item-card .collection="${{}}"></dams-item-card>
        <dams-item-card .collection="${{}}"></dams-item-card>
      </div>

      <a href="" class="btn btn--primary">View all collection items</a>

    </div>

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

    <h2 class="admin-heading">Admin ${this.collectionId}</h2>
    <div class="admin-content">
      <h4 class="admin-box-title">essync</h4>
      <!-- json injected admin data -->
    </div>
  
  `;}