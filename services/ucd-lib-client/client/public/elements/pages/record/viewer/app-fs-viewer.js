import { LitElement, html } from 'lit-element';
import render from "./app-fs-viewer.tpl.js"
import "../../../utils/app-virtual-scroller"
import "@polymer/iron-icons/editor-icons"
import bytes from "bytes"

export default class AppFsViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      title : {type: String},
      loadingFiles : {type: Boolean},
      loadingSearch : {type: Boolean},
      currentDir : {type: String},
      files : {type: Array},
      mode : {type: String},
      lineHeight : {type: Number},
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.reset();

    this._injectModel('AppStateModel', 'RecordModel');

    window.addEventListener('resize', () => this._onResize());
  }

  firstUpdated() {
    this.contentBody = this.shadowRoot.querySelector('.content-body');
    this.scrollPanel = this.shadowRoot.querySelector('app-virtual-scroller');
    this.scrollPanel.setItemRenderer(this.renderRow, this);

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

  _onResize() {
    if( !this.contentBody ) return;
    this.scrollPanel.style.height = (this.contentBody.offsetHeight - 175)+'px';
  }

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
      this.title = this.selectedRecord.name || this.selectedRecord.title;
    }
  }

  show() {
    this.style.display = 'block';
    document.body.style.overflow = 'hidden';

    this._onResize();

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
    this.files = [];
    this.lineHeight = 25;
  }

  _renderBreadcrumbs() {
    if( this.mode === 'search' ) {
      return html`<iron-icon icon="chevron-right"></iron-icon>
      <span class="breadcrumb">Search Results</span>`;
    }

    let fullDirPath = [];

    return this.currentDir
      .replace(/^\//, '')
      .split('/')
      .map(dir =>  {
        fullDirPath.push(dir) 
        if( dir === '' ) return html``;

        return html`<iron-icon icon="chevron-right"></iron-icon>
        <a class="breadcrumb" @click="${this._onBreadcrumbClicked}" dir="${'/'+fullDirPath.join('/')}">${dir}</a>`
      });
  }

  renderRow(index) {
    let file = this.files[index];
    let icon = file.isDirectory ? 'folder' : 'editor:insert-drive-file';

    return html`<div class="row" ?directory="${file.isDirectory}" index="${index}" @click="${this._onItemClicked}" .context="${this}">
      <div class="icon">
        <iron-icon icon="${icon}"></iron-icon>
      </div>
      <div class="file">
        <div class="filename">${file.filename}</div>
        <div class="directory" ?hidden="${this.mode === 'browse'}">${file.directory || '/'}</div>
      </div>
      <div class="filesize">${file.fileSize !== undefined ? bytes(file.fileSize) : ''}</div>
    </div>`
  }

  _onItemClicked(e) {
    let index = parseInt(e.currentTarget.getAttribute('index'));
    
    // stupid hack, let html always scopes events to render host
    let $this = e.currentTarget.context;
    let file = $this.files[index];

    if( file.isDirectory ) {
      $this._browseDirectory(file['@id'].replace($this.selectedRecord['@id'], ''));
    }
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
      this._browseDirectory();
      this.files = [];
      return;
    }

    this.mode = 'search';
    this.lineHeight = 45;

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

    this.setFiles(resp.payload.results, false);
  }

  async _browseDirectory(dir) {
    if( this.mode === 'browse' && this.currentDir === dir ) return;

    this.mode = 'browse';
    this.lineHeight = 39;
    this.shadowRoot.querySelector('#searchInput').value = '';

    if( !dir ) {
      if( this.currentDir ) dir = this.currentDir;
      else dir = '/';
    }

    this.currentDir = dir;

    let searchDoc = {
      filters : {
        // 'collectionId' : {
        //   type: 'keyword',
        //   value: [this.selectedRecord.collectionId],
        //   op: 'or'
        // },
        'directParent' : {
          type : 'keyword',
          value : [this.selectedRecord['@id']+this.currentDir.replace(/\/$/, '')],
          op : 'or'
        }
      },
      sort : null,
      limit: 9999,
      offset: 0,
      facets: {},
      textFields : []
    }

    let resp = await this.RecordModel.typeaheadSearch(searchDoc, {debug: true, allRecords: true});
    this.setFiles(resp.payload.results);
  }

  setFiles(files, sort=true) {
    files = files.map(file => {
      file.directory = file.directParent.replace(this.selectedRecord['@id'], '');
      if( file['@type'].includes('http://fedora.info/definitions/v4/repository#Binary') ) {
        file.isFile = true;
      } else {
        file.isDirectory = true;
        file.filename = file['@id'].split('/').pop();
      }
      return file;
    })

    if( sort ) {
      files.sort((a,b) => a.filename.toLowerCase() > b.filename.toLowerCase() ? 1 : -1);
    }

    this.files = files;
  }

  _onClearSearchClicked() {
    this._browseDirectory(this.currentDir);
  }

  _onBreadcrumbClicked(e) {
    this._browseDirectory(e.currentTarget.getAttribute('dir'));
  }

}

customElements.define('app-fs-viewer', AppFsViewer);
