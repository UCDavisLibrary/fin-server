import { html } from 'lit';
// import { styleMap } from 'lit/directives/style-map';

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
    width: 100%;
    border-bottom: 5px dotted var(--color-dams-secondary);
  }

  .marketing-highlight {
    display: block;
    background-color: #fff;
    color: inherit;
    text-decoration: none;
  }

  /* .marketing-highlight:hover .marketing-highlight__image .u-background-image {
    transform: scale(1.1);
  } */

  .marketing-highlight__image {
    position: relative;
    overflow: hidden;
    margin: 1rem 0 0;
    padding: 1rem;
    transition: background-color .3s ease-in-out;
  }

  .marketing-highlight__image:hover {
    background-color: var(--color-aggie-gold-30);
  }

  /* .marketing-highlight__image .u-background-image {
    transition: transform .3s ease-in-out;
  } */

  .marketing-highlight__title {
    font-size: 1rem;
    margin-bottom: 0;
    color: var(--color-aggie-blue-80);
    text-align: center;
  }

  /* .marketing-highlight__items {
    font-size: 1rem;
    color: var(--color-aggie-blue-80);
    font-weight: 600;
    line-height: 1.25;
    margin: 0.5rem 0 1rem;
  } */

  .u-background-image {
    /* background-size: cover;
    background-position: center; */
    background-repeat: no-repeat;
    object-fit: contain;
    background-size: contain;
    background-position: bottom center;
  }
  .aspect--4x3 {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 75%;
  }

  .media-type {
    position: absolute;
    right: 0.25rem;
    bottom: 0.25rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color-aggie-blue-80);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .media-type__icon {
    width: 1.4rem;
  }
/* 
  .media-type__icon image {
    fill: red;
  } */

</style>  

<!-- <div class="container"><a href="${this.href}">
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
</div> -->


<a href="" class="marketing-highlight category-brand--secondary u-space-mb o-box">
  <div class="marketing-highlight__image">
    <div class="aspect--4x3 u-background-image" role="img" aria-label="" style="background-image:url(${this.data.thumbnailUrl});"></div>
    <div class="media-type">
      <img class="media-type__icon" src="/images/icons/item-stack-blank.svg">
      <!-- <svg class="media-type__icon">
        <image href="/images/icons/item-stack-blank.svg" />
      </svg> -->
        <!-- <ucdlib-icon class="vertical-link__image" icon="ucd-public:fa-box-archive"></ucdlib-icon>  -->
        <!-- <ucdlib-icon class="vertical-link__image" src="/images/icons/item-stack-blank.svg"></ucdlib-icon> -->
    </div>
  </div>
  <div class="gold-dots"></div>
  <div class="marketing-highlight__body">
    <p class="marketing-highlight__title">${this.truncatedTitle}</p>
  </div>
</a>


`;}