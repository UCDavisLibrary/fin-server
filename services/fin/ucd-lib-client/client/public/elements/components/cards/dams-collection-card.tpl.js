import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }
  .container {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  .img-container {
    width: 100%;
    position: relative;
    padding-top: 75%;
    background-image: url(/images/logos/logo-white-512.png);
    background-color: var(--color-black-20);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .img-container img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .head {
    border: 3px solid transparent;
    transition: .3s;
  }
  .container:hover .head, .container:focus .head {
    border: 3px solid var(--color-dams-secondary);
  }
  h5 {
    margin: 10px 0 5px 0;
    color: var(--color-h5);
    font-size: var(--fs-h5);
    font-weight: var(--fw-h5);
  }
  .subtitle {
    font-size: var(--fs-p);
    font-weight: var(--fw-extra-bold);
    color: var(--color-aggie-blue-70);
    margin-bottom: 20px;
  }
  .gold-dots {
    width: 0;
    transition: .4s;
    border-bottom: 5px dotted var(--color-dams-secondary);
  }
  .container:hover .gold-dots, .container:focus .gold-dots {
    width: 100%;
  }

</style>  
<div class="container"><a href="${this.href}">
  <div class="head">
    <div class="img-container">
      ${this.imgSrc ? html`
        <img src="${this.imgSrc}">
      ` : html``}
    </div>
  </div>
  <div class="body">
    <h5>${this.cardTitle}</h5>
    <div class="subtitle">${this.itemCt} item${this.itemCt === 1 ? "" : "s"}</div>
  </div>
  <div class="footer">
    <div class="gold-dots"></div>
  </div></a>


</div>
`;}