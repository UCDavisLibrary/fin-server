import { html } from 'lit';

import linksCss from "@ucd-lib/theme-sass/1_base_html/_links.css";
import buttonsCss from "@ucd-lib/theme-sass/2_base_class/_buttons.css";
import headingsCss from "@ucd-lib/theme-sass/2_base_class/_headings.css";


export default function render() {
  return html`
  <style include="shared-styles">
    ${linksCss}
    ${buttonsCss}
    ${headingsCss}

    :host {
      display: block;
      background-color: var(--super-light-background-color);
    }

    [hidden] { display: none !important; }

    .container {
      width: 60%;
      margin: auto;
    }

    .container h3 {
      font-size: 1.7rem;
      font-weight: 700;
      text-align: center;
      color: var(--color-black-60);
      margin-bottom: .5rem;
    }

    .copyright {
      text-align: center;
      color: var(--color-aggie-blue-80);
    }

    .copyright span {
      font-size: 1.25rem;
      vertical-align: middle;
      font-weight: bold;
    }

    .copyright-text {
      font-size: 0.875rem;
      text-decoration: underline;
      display: inline;
    }

    /* .container.top {
      padding: 20px 0;
      background-color: var(--light-background-color);
    } */

    /* input {
      padding: 0 0 0 5px;
      display: block;
      border: none;
      height: 38px;
    }

    .copyButton {
      white-space: nowrap;
      height: 38px;
      width: 85px;
      text-transform: uppercase;
      font-size: var(--fs-sm);
      font-weight: var(--fw-bold);
      background-color: var(--default-secondary-color);
      color: var(--default-primary-color);
      border-radius: 0;
      border: none;
      cursor: pointer;
    }
    .copyButton[active] {
      text-align: center;
      background-color: var(--default-primary-color);
      color: var(--default-secondary-color);
    }
    .copyButton[active] span {
      display: none;
    }

    h3 {
      margin: 0 0 10px 0;
    }

    */

    .label {
      font-weight: var(--fw-bold);
      color: var(--default-primary-color);
    }

    .section {
      margin-bottom: 15px;
    }
    .section.bordered {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px dashed var(--medium-background-color);
    }

    /*
    .overview {
      display: flex; 
      width: 100%;
    }

    .overview > div {
      flex : 1;
      padding : 0 10px;
    }

    .type-date-collection {
      display: flex;
    }

    .resource-type {
      text-transform: capitalize;
    }
    .resource-type iron-icon {
      color: var(--default-primary-color);
    }

    paper-toast {
      --paper-toast-background-color: var(--default-secondary-color);
      --paper-toast-color: var(--default-primary-color);
    }

    #descriptionValue p,
    #descriptionValue h1,
    #descriptionValue h2,
    #descriptionValue h3 {
      margin-top: 0;
    }

    #link {
      width: 100%;
      box-sizing: border-box;
    }
    */

    .metadata-row, 
    .download-section {
       display: flex;
      margin: 30px 20px;
    }
    .metadata-row .attr,
    .download-section .label {
      flex: 0.25;
      color: var(--default-primary-color);
      font-weight: var(--fw-bold); 
    }
    .metadata-row .value,
    .download-section .download-options {
      flex: 0.75;
      word-break: break-word;
    }
    
    /*
    .cite-container {
      padding: 15px 0;
      margin: 0 15px;
      border-bottom: 1px dashed var(--medium-background-color);
      display: flex;
    }
    .cite-container .label {
      padding-right: 10px;
      flex: 0.25;
      color: var(--default-primary-color);
      font-weight: var(--fw-bold); 
    }
    .cite-container .text {
      flex: 0.75;
    }

    .hidden {
      display: none !important;
    }

    .fc-break {
      height: 10px;
    }

    .rights {
      font-size: var(--fs-p);
      font-style: italic;
      text-transform: capitalize;
    }

    .rights-break {
      margin-top: 10px;
      margin-bottom: 10px;
      border-top: 1px dashed var(--medium-background-color);
    }

    img[rights] {
      height: 22px;
      width: 22px;
      vertical-align: sub;
    }

    @media( max-width: 550px ) {
      .metadata-row {
        display: block;
      }
    }

    @media( max-width: 768px ) {
      .overview {
        display: block;
      }
      .cite-container {
        display: block;
        padding: 15px 0 15px 15px;
        margin: 0;
      }
      .type-date-collection {
        display: block;
      }
      .type-date-collection > div {
        margin: 15px 5px;
      }
    } */

    .part-of {
      background-image: url(/images/watercolors/blue--1.webp);
      background-size: cover;
      display: flex;
      height: 12rem;
      margin: 3rem 0;
    }

    .part-of img {
      max-width: 100%;
      max-height: 100%;
    }

    .part-of div {
      margin: 2rem;
      flex: 1;
    }

    .part-of div:nth-child(1) {
      text-align: center;
    }

    .part-of .collection-info {
      flex: 2;
      margin: auto 0;
    }
    
    .part-of .collection-info h4 {
      margin: .3rem 0;
    }
    
    .part-of .collection-info p {
      margin: 0;
    }

    .part-of .collection-info a {
      font-weight: 800;
      text-decoration: none;
    }

    #identifierValue a,
    #fedoraValue a {
      display: block;
    }

    #identifierValue a:nth-child(1),
    #fedoraValue a:nth-child(1) {
      padding-bottom: 1rem;
    }

    @media (max-width: 756px) {
      .container {
        width: 85%;
      }
    }

    @media (max-width: 600px) {
      .container {
        width: 95%;
      }
      
      .metadata-row, 
      .download-section {
        display: block;
      }
    }

  </style>

  <app-media-viewer></app-media-viewer>

  <!-- <div class="container top">
    <div class="overview">
      <div>
        <div ?hidden="${!this.alternativeHeadline}" class="section">
          <div style="font-weight: bold;">${this.alternativeHeadline}</div>
        </div>

        <div ?hidden="${!this.rights}" class="rights">
          <div class="rights-break"></div>
          <div>
            <a href="${this.rights.link}" target="_blank">
              <img src="${this.rights.icon}" rights />&nbsp;
              <span>${this.rights.label}</span>
            </a>
          </div>
        </div>

      </div>
      <div>
        <div style="display: flex; align-items: center" class="section bordered">
          <span class="label" style="padding-right: 10px; display:inline-block">Permalink</span>
          <div style="flex:1">
            <input id="link" type="text" />
          </div>
          <button on-click="_copyLink" id="copyButton" class="copyButton">
            <iron-icon icon="content-copy" id="copyIcon"></iron-icon>
            <span>Copy</span>
          </button>
        </div>

        <div class="section">
          <div class="label">Download</div>
          <app-media-download id="download" ?hidden="${this.isBagOfFiles}"></app-media-download>
          <app-fs-media-download id="download" ?hidden="${!this.isBagOfFiles}"></app-fs-media-download>
        </div>

      </div>
    </div>
  </div> -->

  
  <div class="container" style="padding-bottom: 50px">

    <h3>${this.name}</h3>
    <div class="copyright"><span>&copy;</span> <a href="http://rightsstatements.org/vocab/InC-NC/1.0/" class="copyright-text">In Copyright - Non-Commercial Use Permitted</a></div>


    <div class="part-of">
      <div><img src="${this.collectionImg}" alt="" /></div>
      <div class="collection-info">
        <p style="font-style: italic;">part of digital collection</p>
        <h4>${this.collectionName}</h4>
        <a href="">42 items</a>
      </div>
      
    </div>


    <div class="download-section">
      <div class="label">Download</div>
      <div class="download-options">
        <app-media-download id="download" ?hidden="${this.isBagOfFiles}"></app-media-download>
        <app-fs-media-download id="download" ?hidden="${!this.isBagOfFiles}"></app-fs-media-download>
      </div>
    </div>

    <div class="metadata-row">
      <div class="attr">Date</div>
      <div class="value" id="dateValue">${this.date}</div>
    </div>

    <div class="metadata-row" id="publisher">
      <div class="attr">Publisher</div>
      <div class="value" id="publisherValue">${this.publisher}</div>
    </div>

    <div class="metadata-row" id="subject">
      <div class="attr">Subjects</div>
      <div class="value" id="subjectValue">
        ${this.keywords.map((item, index) => html`${index > 0 ? ', ' : ''}<a href="">${item}</a>`)}
      </div>
    </div>

    <div class="metadata-row" id="callNumber">
      <div class="attr">Call Number</div>
      <div class="value" id="callNumberValue">${this.callNumber}</div>
    </div>

    <div class="metadata-row" id="identifier">
      <div class="attr">ARK / DOI</div>
      <div class="value" id="identifierValue">
        ${this.arkDoi.map(link => html`<a href="${link}">${link}</a>`)}
      </div>
    </div>

    <div class="metadata-row">
      <div class="attr">Fedora Link</div>
      <div class="value" id="fedoraValue">
        ${this.fedoraLinks.map(link => html`<a href="${link}">${link}</a>`)}
      </div>
    </div>

  </div>

  <app-citation .record="${this.record.root}"></app-citation>
`;}
