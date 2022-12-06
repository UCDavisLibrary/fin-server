import { html } from 'lit';

export default function render() {
return html`
<style include="shared-styles">
  :host {
    display: block;
    background-color: white;
    margin: 2rem 10px;
    border: 2px solid transparent;
    transition: background-color .3s ease-in-out;
  }
  
  :host(:hover), :host(:focus) {
    cursor: pointer;
    /*border: 2px solid var(--default-secondary-color);*/
    outline: none !important;
    background-color: var(--color-aggie-gold-30);
  }

  .img {
    height: 250px;
    width: var(--grid-cell-width);
    background-size: cover;
    background-color: white;
    background-position: center center;
  }

  .collection-title {
    color: var(--color-aggie-blue-80);
    font-weight: bold;
  }

  .year {
    color: var(--gray-text);
    flex: 1;
  }

  .spacer {
    flex: 1;
    border-bottom: 6px dotted var(--color-dams-secondary); 
    padding: .4rem;
  }

  .footer {
    display : flex; 
    align-items : center; 
    margin-top : 10px;
  }

  .layout {
    display: flex;
    padding: 1rem;
  }

  h4 {
    margin: 10px 0;
    color: var(--default-primary-color);
  }

  iron-icon {
    color: var(--default-primary-color);
  }

  .flex-vertical {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .data {
    padding: 0 0 0 2.5rem;
    flex: 1;
    overflow: hidden;
  }

  .collection-details {
    padding-top: 1rem;
  }

  .collection-details .label {
    font-weight: bold;
    padding-right: .3rem;
  }

  .collection-details p {
    margin: .2rem 0;
  }

  @media(max-width: 600px) {
    .img {
      height: auto;
      width: 150px;
    }

    .data {
      padding: 0 0 0 1.5rem;
    }

    :host {
      display: block;
      background-color: white;
      margin: 10px 0;
    }
  }
</style>

<div class="layout">
  <div style="background-image: url('${this.imgUrl}')" ?hidden="${!this.isImage}" class="img" ></div>

  <div class="data">
    <div class="flex-vertical">
      <div class="collection-title">${this.title}</div>
      
      <div class="spacer"></div>

      <div class="collection-details">
        <p><span class="label">Collection:</span> ${this.collectionName}</p>
        <p><span class="label">Creator:</span> ${this.creator}</p>
        <p><span class="label">Date:</span> ${this.date}</p>
        <p><span class="label">Format:</span> ${this.format}</p>
      </div>
      
    </div>
  </div>
</div>
`;}