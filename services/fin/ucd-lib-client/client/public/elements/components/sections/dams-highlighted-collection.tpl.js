import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

export default function render() { 
return html`

<style>
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
  .divider {
    width: 0;
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
    .divider {
      width: 40px;
      min-width: 40px;
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
    .divider {
      width: 100px;
      min-width: 100px;
    }
  }

  @media (min-width: 1601px) {

  }
</style>  
<div class="${ classMap(this.getContainerClasses()) }">

  <div class="img-flex">
    <div class="img-container">
      ${this._imgSrc ? html`
        <img src="${this._imgSrc}">
      ` : html``}
    </div>
  </div>
  <div class="divider"></div>
  <div class="text-container">
    <div class="title" role="heading" aria-level="2">${this._collectionTitle}</div>
    <div class="subtitle">${this._itemCt} item${this._itemCt === 1 ? "" : "s"}</div>
    <div class="description">${this._collectionDesc}</div>
    <a href="${this._href}">Placeholder for button</a>
  </div>
</div>
`;}