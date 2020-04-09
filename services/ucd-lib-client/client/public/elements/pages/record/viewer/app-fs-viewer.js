import { LitElement, html } from 'lit-element';
import render from "./app-fs-viewer.tpl.js"
import "../../../utils/app-virtual-scroller"

export default class AppFsViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      loadingFiles : {type: Boolean},
      loadingSearch : {type: Boolean},
      currentDir : {type: String},
      files : {type: Array},
      mode : {type: String},
      isSearch : {type: Boolean},
      isBrowse : {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.renderRow = this.renderRow.bind(this);

    this.reset();

    this._injectModel('AppStateModel', 'RecordModel');
  }

  firstUpdated() {
    this.scrollPanel = this.shadowRoot.querySelector('app-virtual-scroller');
    this.scrollPanel.renderItem = this.renderRow;

    this.parentNode.removeChild(this);
    document.body.appendChild(this);

    this.show();
  }

  // connectedCallback() {
  //   super.connectedCallback();
  //   this.background = this.querySelector('#background');
  //   this.background.style.display = 'none';
  //   this.shadowRoot.removeChild(this.background);
  //   document.body.appendChild(this.background);
  // }

  _onAppStateUpdate(e) {
    if( !e.selectedRecord ) {
      return this.reset();
    }

    if( this.selectedRecord === e.selectedRecord ) return;

    this.selectedRecord = e.selectedRecord;
    this.selectedRecordMedia = e.selectedRecordMedia;

    this.files = [];
    this.currentDir = '';

    if( this.selectedRecord && this.selectedRecord['@type'].includes('http://digital.ucdavis.edu/schema#bagOfFiles') ) {
      this._browseDirectory();
    }
  }

  show() {
    this.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if( this.selectedRecord ) {
      this._browseDirectory();
    }
  }

  hide() {
    this.style.display = 'none'
    document.body.style.overflow = 'auto';
  }

  reset() {
    this.loadingFiles = false;
    this.loadingSearch = false;
    this.currentDir = '/';
    this.isSearch = false;
    this.isBrowse = true;
    this.files = [];
  }

  _renderBreadcrumbs() {
    if( this.mode === 'search' ) {
      return html`<iron-icon icon="chevron-right"></iron-icon>
      <span class="breadcrumb">Search Results</span>`;
    }

    return this.currentDir
      .replace(/^\//, '')
      .split('/')
      .map(dir => html`
        <iron-icon icon="chevron-right"></iron-icon>
        <a class="breadcrumb">${dir}</a>
      `);
  }

  renderRow(index) {
    return html`<div>${index}</div>`
  }

  _onInputKeyup(e) {
    let text = e.currentTarget.value;

    if( this._autocompleteTimer ) {
      clearTimeout(this._autocompleteTimer);
    }
    this._autocompleteTimer = setTimeout(() => {
      this._autocompleteTimer = null;
      this._typeaheadSearch(text);
    }, 200);
  }

  async _typeaheadSearch(text) {
    this.typeaheadSearchText = text;
    if( text === '' ) {
      this.browseDir();
      this.files = [];
      return;
    }

    let searchDoc = {
      text,
      filters : {
        'collectionId' : {
          type: 'keyword',
          value: [this.selectedRecord.collectionId],
          op: 'or'
        },
        '@id' : {
          type : 'prefix',
          value : this.selectedRecord['@id']
        }
      },
      sort : null,
      limit: 9999,
      offset: 0,
      facets: {},
      textFields : ['filename']
    }

    let resp = await this.RecordModel.typeaheadSearch(searchDoc, {allRecords: true});
    if( this.typeaheadSearchText !== text ) return;

    this.files = resp.payload.results;
  }

  async _browseDirectory(dir) {
    if( !dir ) {
      if( this.currentDir ) dir = this.currentDir;
      else dir = '/';
    }

    this.currentDir = dir;

    let searchDoc = {
      filters : {
        'collectionId' : {
          type: 'keyword',
          value: [this.selectedRecord.collectionId],
          op: 'or'
        },
        'directParent' : {
          type : 'keyword',
          value : [this.selectedRecord['@id']+this.currentDir],
          op : 'or'
        }
      },
      sort : null,
      limit: 9999,
      offset: 0,
      facets: {}
    }

    let resp = await this.RecordModel.typeaheadSearch(searchDoc, {debug: true, allRecords: true});
    console.log(resp.payload);
    this.files = resp.payload.results;
    console.log(this.files);

  }

}

customElements.define('app-fs-viewer', AppFsViewer);
