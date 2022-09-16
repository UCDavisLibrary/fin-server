import { html } from 'lit-element';
import { sharedStyles } from '../styles/shared-styles';

export default function render() { 
return html`
<style>${sharedStyles}</style>
<style>
  :host {
    display: block;
    --header-height: 76px;
  }
  .nav {
    display: flex;
    background: var(--default-primary-color);
    background-size: cover;
    background-position: center;
    height: var(--header-height);
    align-items: center;
  }
  h4 {
    padding: 0px 30px;
  }
  h4 a, h4 a:visited {
    text-decoration: none;
    color: var(--color-aggie-gold);
  }

  .btn {
    position: relative;
    transform: skew(-20deg);
  }

  .parallelogram {
    height: var(--header-height);
    /* transform: skew(-20deg); */
    background: transparent;
    display: flex;
    justify-content: center;
  	align-items: center;
    transition: 0.3s;
    padding: 0 20px;
    text-decoration: none;
    text-transform: uppercase;
    min-width: 74px;
  }

  .parallelogram > * {
    color: white;
    transform: skew(20deg); /* UNSKEW */
    font-size: .84rem;
  }

  .btn:active .parallelogram, 
  .btn:focus .parallelogram, 
  .btn:hover .parallelogram,
  .btn:focus-within .parallelogram, 
  .parallelogram:focus {
    background: var(--color-aggie-gold);
    color: var(--color-dams-primary);
  }

  btn:active .parallelogram > *, 
  .btn:focus .parallelogram > *, 
  .btn:hover .parallelogram > *,
  .btn:focus-within .parallelogram > *, 
  .parallelogram:focus > * {
    color: var(--color-dams-primary);
  }

  .dropdown-content {
    list-style: none;
    margin: 0;
    padding: 0;
    transform: skew(20deg); /* UNSKEW */
    display: none;
    position: absolute;
    left: 31px;
    background-color: var(--color-aggie-gold-20);
    width: 100%;
    z-index: 1000;
  }

  .dropdown-content[visible] {
    display: block;
  }

  .dropdown-content a {
    color: var(--color-dams-primary);
    /* color: black; */
    padding: 2px 10px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  .dropdown-content a:hover,
  .dropdown-content a:focus {
    background-color: var(--color-aggie-gold);
  }

  .ucd-logo-container {
    display: flex;
    align-self: stretch;
    align-items: center;
    background-image: linear-gradient( 110deg, 
      var(--default-primary-color) 15%, 
      var(--color-aggie-blue-80) 15% 22%, 
      var(--color-aggie-blue-70) 18%
    );
    padding: 0 10px 0 50px;
  }
  .ucd-logo-container img {
    height: 20px;
  }
  .ucd-logo-container a {
    line-height: 0;
  }
</style>
<div class="nav">
  <h4><a href="/">Digital Collections</a></h4>
  ${this.choices.map((choice, index) => html`
    <div class="btn" 
      @mouseover="${this._onBtnMouseOver}" 
      @mouseout="${this._onBtnMouseOut}"
      @keydown="${this._onBtnKeyDown}"
      @focusout="${this._onFocusOut}"
      index="${index}"
      tabindex="${choice.href ? -1 : 0}">
      ${choice.href ? 
        html`<a class="parallelogram" href="${choice.href}"><span>${choice.text}</span></a>` :
        html`<div class="parallelogram" 
            aria-haspopup="true"
            @click="${this._onBtnClick}" 
            index="${index}">
            <span>${choice.text}</span>
          </div>`
      }

      <ul class="dropdown-content" 
        @click="${this._onDropdownClick}"
        role="menu"
        ?visible="${choice.dropdownVisible}">
        ${choice.dropdown ? 
            choice.dropdown.map((option) => 
              html `<li role="menuitem" tabindex="-1"><a href="${option.href}">${option.text}</a></li>`
            ): 
              html ``
        }
      </ul>
    </div>
  `)}
    
  <div style="flex:1"></div>
  <div class="ucd-logo-container">
    <a href="https://ucdavis.edu"><img src="/images/logos/ucd-logo-white.svg" /></a>
  </div>
</div>
`;}
