import { html } from 'lit';

import SharedHtml from '../../utils/shared-html';
import { sharedStyles } from "../../styles/shared-styles";
import priorityLinksCss from "@ucd-lib/theme-sass/4_component/_priority-links.css";
import iconsCss from "@ucd-lib/theme-sass/4_component/_icons.css";
import categoryBrandCss from "@ucd-lib/theme-sass/4_component/_category-brand.css";
import verticalLinksCss from "@ucd-lib/theme-sass/4_component/_vertical-link.css";
import mobileBarCss from "@ucd-lib/theme-sass/4_component/_mobile-bar.css";
import navToggleCss from "@ucd-lib/theme-sass/4_component/_nav-toggle.css";
import headingsCss from "@ucd-lib/theme-sass/2_base_class/_headings.css";
import linksCss from "@ucd-lib/theme-sass/1_base_html/_links.css";
import buttonsCss from "@ucd-lib/theme-sass/2_base_class/_buttons.css";

export default function render() {
  return html`
    <style>
      ${sharedStyles}
      ${priorityLinksCss}
      ${iconsCss}
      ${categoryBrandCss}
      ${verticalLinksCss}
      ${mobileBarCss}
      ${navToggleCss}
      ${headingsCss}
      ${linksCss}
      ${buttonsCss}
      :host {
        display: block;
        position: relative;
        background-color: var(--super-light-background-color);
      }

      .text-container {
        margin: 0;
        padding: 50px 10px 50px 10px;
      }

      h1, h4 {
        color: var(--default-primary-color);
      }

      h4 {
        margin: 15px 0 0 0px;
      }

      .yellow-line {
        margin: 0 auto 0 0;
        text-align: left;
        width: 50px;
        height: 4px;

        border-color: var(--default-secondary-color);
        background-color: var(--default-secondary-color);
      }

      .fw-light {
        font-weight: 200;
        font-style: normal;
        margin: 0.75rem 0 0.25rem;
        padding: 0;
        line-height: 1.2;
      }

      .title-section {
        text-align: center;
        border-bottom: dotted 5px var(--default-secondary-color);
      }


    </style>

    <div class="text-container">  
      <div class="title-section">
        <h1>About<br><span class="fw-light">Digital Collections</span></h1>
      </div>
      
      <p>
        The UC Davis Digital Collections is a locally developed digital repository that 
        was designed to store and manage the digital assets of UC Davis. These Digital 
        Collections are intended to increase access to previously undiscoverable digital 
        assets held by the University Library.
      </p>
      
      <p>
        Initially launched in 2018, the repository currently stores <span>${this.count}</span> digital assets. 
        Assests will be added continually as they are ready.
      </p>
      
      <h4>Platform</h4>
      
      <p>
        The Digital Asset Management System is built on the Fedora Linked Data Platform. 
        Custom microservices are implemented using a Fedora (API-X) extension method as a general 
        methodology. The User Interface was built with web-components anticipating a need for 
        UI flexibility as the digital collection grows. For a more detailed explanation of 
        the development, see our 
        <a href="https://github.com/UCDavisLibrary/fin-server/wiki/Fin-Server-Overview">Fin Server Overview</a> or
        <a href="https://github.com/UCDavisLibrary/fin-server/blob/master/docs/README.md">Developer Documentation.</a>
      </p>
      
      <h4>Contact</h4>
      <div>
        <ul>
          <li><a href="mailto:eanebeker@ucdavis.edu">Eric A Nebeker</a> (Digital Assets Specialist)</li>
        </ul>
      </div>
      
      <h4>Implementation Team</h4>
      <div>
        <ul>
          <li><a href="https://www.library.ucdavis.edu/person/quinn-hart">Quinn Hart</a> (Team Lead)</li>
          <li><a href="https://www.library.ucdavis.edu/person/justin-merz">Justin Merz</a> (Lead Developer)</li>
          <li><a href="https://www.library.ucdavis.edu/person/dusty-cartwright">Dusty Cartwright</a> (Developer)</li>
          <li><a href="https://www.library.ucdavis.edu/person/kimmy-hescock">Kimmy Hescock</a> (User Experience Designer)</li>
        </ul>
      </div>
      
      <h4>DAMS Steering Committee Members</h4>
      <div>
        <ul>
          <li><a href="https://www.library.ucdavis.edu/person/peter-brantley">Peter Brantley</a></li>
          <li><a href="https://www.library.ucdavis.edu/person/vessela-ensberg">Vessela Ensberg</a></li>
          <li><a href="https://www.library.ucdavis.edu/person/xiaoli-li">Xiaoli Li</a></li>
          <li><a href="https://www.library.ucdavis.edu/person/kevin-miller">Kevin Miller</a></li>
          <li><a href="https://www.library.ucdavis.edu/person/eric-nebeker">Eric Nebeker</a></li>
          <li><a href="https://www.library.ucdavis.edu/person/dale-snapp">Dale Snapp</a></li>
          <li><a href="https://www.library.ucdavis.edu/person/carl-stahmer">Carl Stahmer</a></li>
          <li><a href="https://www.library.ucdavis.edu/person/neil-weingarten">Neil Weingarten</a></li>
        </ul>
      </div>
      
      <p>
        The UC Davis Digital Collections was a project of the UC Davis Library's 
        <a href="https://www.library.ucdavis.edu/online-strategy/">Online Strategy team.</a>
      </p>
    </div>
`;}