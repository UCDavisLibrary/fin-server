import { html } from 'lit';

export default function render() {
return html`
<style include="shared-styles">
  :host {
    display: block;
    width: var(--grid-cell-width);
    background-color: white;
    
  }

  :host(:hover), :host(:focus) {
    /* border: 2px solid var(--default-secondary-color);
    margin: -2px 0 0 -2px;
    outline: none !important; */
  }

  @keyframes show-img {
    from {opacity: 0}
    to {opacity: 1}
  }

  img {
    animation: show-img 300ms linear;
    box-sizing: border-box;
    display:none;
    /* width: var(--grid-cell-width); */
    /* background-size: cover;
    background-color: transparent;
    background-position: center center; */
    /* position: absolute;
    top: 0;
    left: 0; */
    cursor: pointer;
    border: solid 2px transparent;
    transition: border-color .3s ease-in-out;
  }

  img:hover, img:focus {
    border-color: var(--default-secondary-color);
    /* margin: -2px 0 0 -2px;
    outline: none !important; */
  }

  .collection-name {
    color: var(--color-aggie-blue-70);
    font-size: .95rem;
  }

  .year {
    color: var(--gray-text);
    font-weight: var(--fw-light);
    flex: 1;
  }

  .footer {
    display : flex; 
    align-items : center; 
    margin-top : 10px;
  }

  h4 {
    margin: 5px 0;
    color: var(--default-primary-color);
  }

  iron-icon {
    color: var(--default-primary-color);
  }

  .image {
    position: relative; 
    background-size: cover;
    background-color: transparent;
    background-position: center center;
    width: 250px;
  }

  .card-text {
    padding: 15px;
    line-height: 1.3;
  }

  .video-thumbnail {
    z-index: 1000;
    width: 30px; 
    height: 30px;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url('https://via.placeholder.com/25');
  }
</style>

<!--hidden$="${!this.isImage}" -->
<div   
  class="image" 
  id="imgRoot"
  >
  <img id="img" src="${this.data.thumbnailUrl}" style="height:${this.imgHeight}px; width: 100%; display: block" onload="this.style.display='block';" />
  <div ?hidden="[[!isVideo]]" class="video-thumbnail"></div>
</div>

<div class="card-text">
  <div class="collection-name">${this.data.title}</div>
</div>
`;}