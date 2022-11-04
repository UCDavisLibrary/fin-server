import { html, css } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import linksCss from "@ucd-lib/theme-sass/1_base_html/_links.css";
// import index1Css from "@ucd-lib/theme-sass/1_base_html/_index.css";
import buttonsCss from "@ucd-lib/theme-sass/2_base_class/_buttons.css";
import headingsCss from "@ucd-lib/theme-sass/2_base_class/_headings.css";
// import index2Css from "@ucd-lib/theme-sass/2_base_class/_index.css";
// import index3Css from "@ucd-lib/theme-sass/3_objects/_index.css";
// import index4Css from "@ucd-lib/theme-sass/4_component/_index.css";
// import index5Css from "@ucd-lib/theme-sass/5_layout/_index.css";
// import index6Css from "@ucd-lib/theme-sass/6_utility/_index.css";
// import faCss from "@fortawesome/fontawesome-free/css/all.css";
// console.log(faCss);

export default function render() { 
return html`

<style>
  /* ${css`faCss`} */
  ${linksCss}
  ${buttonsCss}
  ${headingsCss}
  :host {
    display: block;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .img-container {
    position: relative;
    padding-top: 75%;
    width: 100%;
    background-image: url(/images/logos/logo-white-512.png);
    background-color: var(--color-black-20);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .img-flex {
    flex-grow: 1;
  }
  .img-container img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .text-container {
    flex-grow: 1;
    align-self: flex-start;
    padding-left: 2rem;
  }
  .title {
    color: var(--color-h3);
    font-size: var(--fs-h3);
    font-weight: var(--fw-h3);
    margin-bottom: 5px;
    margin-top: 40px;
  }
  .subtitle {
    color: var(--color-h5);
    font-size: var(--fs-h5);
    font-weight: var(--fw-h5);
    margin-bottom: 20px;
  }
  .description {
    color: var(--color-p);
    font-size: var(--fs-p);
    font-weight: var(--fw-p);
    margin-bottom: 40px;
  }
  .btn--alt {
    padding-top: 0;
    padding-bottom: 0;
  }
  @media (min-width: 767px) {
    .container {
      flex-direction: row;
    }
    .container.image-right {
      flex-direction: row-reverse;
    }
    .img-flex {
      flex-grow: unset;
      width: calc(50% - 20px);
      min-width: calc(50% - 20px);
    }
    .title {
      margin-top: 0;
    }
    .text-container {
      align-self: center;
    }
  }

  @media (min-width: 1060px) {
    .img-flex {
      width: calc(50% - 50px);
      min-width: calc(50% - 50px);
    }
  }

  @media (min-width: 1601px) {

  }
</style>  
<div class="${ classMap(this.getContainerClasses()) }">

  <div class="img-flex">
    <div class="img-container">
      <!-- ${this._imgSrc ? html`
        <img src="${this._imgSrc}">
      ` : html``} -->
      <img src="/images/eastman-demo.jpeg">
    </div>
  </div>

  <!-- <div class="text-container">
    <div class="title" role="heading" aria-level="2">${this._collectionTitle}</div>
    <div class="subtitle">${this._itemCt} item${this._itemCt === 1 ? "" : "s"}</div>
    <div class="description">${this._collectionDesc}</div>
    <a href="${this._href}" class="btn--alt btn--round">Explore this collection</a>
  </div> -->

  <div class="text-container">
    <h3 class="heading--primary">Eastman's Originals</h3>
    <div class="subtitle">13,258 items</div>
    <div class="description">
      Photographs, negatives and postcards captured by Jervie Henry Eastman for a wide
      variety of northern California locations and events, including dam construction, logging, mining, food processing,
      and commmunity buildings and activities from circa 1890 - 1960.
    </div>
    <a href="${this._href}" class="btn--alt btn--round">Explore this collection</a>
  </div>

</div>
`;}