import { html, unsafeCSS } from 'lit';

import { sharedStyles } from "../../styles/shared-styles";


export default function render() { 
  return html`
  <style include="shared-styles">
  ${sharedStyles}
    :host {
      display: block;
    }

    [hidden] { display: none !important; }

    .info {
      margin: 10px 0;
      font-size: var(--fs-sm);
    }
    
    a {
      display: block;
      padding: 8px;
      color : var(--default-primary-color);
      background-color : var(--default-secondary-color);
      text-transform: uppercase;
      font-size: var(--fs-sm);
      font-weight: var(--fw-bold);
      text-decoration: none;
      white-space: nowrap;
      height: 24px;
    }
    
    select {
      margin-right: 15px;
      padding: 5px 40px 5px 10px;
      height: 40px;
      border: none;
      border-radius: 0;
    
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      appearance: none;

      background-position: right 10px center;
      background-size: 10px 6px;
      background-repeat: no-repeat;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCA2IiB3aWR0aD0iMTBweCIgaGVpZ2h0PSI2cHgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMDAyNjU1O308L3N0eWxlPjwvZGVmcz48Zz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMCAwIDEwIDAgNSA2IDAgMCIvPjwvZz48L3N2Zz4=');
      /* TODO: Seems to cause problem w/width of select box being too small
      @apply --fin-search-box-select-inverse;
      */
      background-color: var(--medium-background-color); 
      color: var(--default-primary-color);
    }

    select.plainText {
      padding: 0;
      border: 0;
      background: transparent;
      color: black;
    }

    button {
      white-space: nowrap;
      text-transform: uppercase;
      font-size: var(--fs-sm);
      font-weight: var(--fw-bold);
      background-color: var(--default-secondary-color);
      color: var(--default-primary-color);
      border-radius: 0;
      border: none;
      cursor: pointer;
      padding: 8px;
      line-height: calc(var(--fs-p) * 1.625);
    }
    
    /* for IE */
    select::-ms-expand {
      display: none;
    }
    select option {
      text-transform: uppercase;
    }

    .layout {
      display:flex; 
      align-items: center;
    }

    .layout.btns > * {
      max-width: 30%
    }

    .radio {
      margin-bottom: 10px;
    }

    #downloadBtn {
      padding: 0.75rem 0;
      font-size: .9rem;
      min-width: 6rem;
      text-transform: none;
    }

    #downloadOptions,
    #format {
      min-height: 2.7rem;
      background-color: var(--color-aggie-blue-50);
      font-size: .9rem;
      font-weight: bold;
      padding: 0 1rem;
    }

    @media( max-width: 600px ) {
      .layout.btns > * {
        width: 33%;
        max-width: 33%;
      }
      #downloadBtn {
        min-width: auto;
        text-overflow: clip;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  </style>


  <div id="wrapper">
    <div class="layout" ?hidden="${!this.hasMultipleDownloadMedia}">
      <div class="radio" style="margin-right: 40px">
        <input id="single" type="radio" name="set-size" checked @click="${this._toggleMultipleDownload}" /> 
        <label for="single">Selected Page</label>
      </div>
      <div class="radio">
        <input id="fullset" type="radio" name="set-size" @click="${this._toggleMultipleDownload}"/> 
        <label for="fullset">All Pages (${this.fullSetCount} files)</label>
      </div>
    </div>
  </div>

  <div ?hidden="${this.fullSetSelected}">
    <div class="layout btns" style="margin-bottom: 5px;" ?hidden="${!this.selectedMediaHasSources}">
      <select id="downloadOptions" @change="${this._onChangeDownloadOptions}"></select>
      <select id="format" @change="${this._onFormatSelected}" ?hidden="${!this.showImageFormats}"></select>
      <a id="downloadBtn" href="${this.href}" 
        @click="${this._onDownloadClicked}" 
        download 
        target="_blank" 
        rel="noopener" 
        style="white-space: nowrap; text-align: center;">
          <span>
            Download
          </span>
      </a>
    </div>
  </div>

  <div ?hidden="${this.fullSetSelected}">
    <div ?hidden="${this.selectedMediaHasSources}" >
      <em>No downloadable items available</em>
    </div>
  </div>

  <form id="downloadZip" 
    action="/api/zip/${this.zipName}" 
    method="post" 
    target="_blank" 
    ?hidden="${!this.fullSetSelected}">    
    <input type="text" hidden name="paths" id="zipPaths" style="display: none;">
    <button @click="${this._onDownloadFullSetClicked}">
      <iron-icon icon="file-download"></iron-icon>&nbsp;<span>Download Archive</span>
    </button>
  </form>

  `;}