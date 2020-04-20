import { LitElement, html } from 'lit-element';
import render from "./app-fs-viewer.tpl.js"
import "../../../utils/app-virtual-scroller"
import "@polymer/iron-icons/editor-icons"
import "@ucd-lib/fin-icons"
import bytes from "bytes"

const ICONS = {
  'folder' : ['folder'],
  'fin-icons:image-solid' : ['tif', 'tiff', 'gif', 'jpg', 'jp2', 'jpeg', 'webp', 'bmp', 'png'],
  'fin-icons:video-solid' : ['avi', 'mp4', 'flv', 'wmv', 'mov'],
  'fin-icons:sound-solid' : ['wav', 'mp3', 'mid', 'aif'],
  'fin-icons:text-solid' : ['doc', 'docx', 'txt', 'rtf', '.odt'],
  'fin-icons:spreadsheet-solid' : ['ods', 'csv', 'tsv', 'xsl', 'xslx'],
  'fin-icons:pdf-solid' : ['pdf'],
  'fin-icons:compressed-solid' : ['zip', 'rar', 'arj', 'gz', 'tgz']
}
const UNKNOWN_ICON = 'fin-icons:file-solid';

export default class AppFsViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      title : {type: String},
      loadingFiles : {type: Boolean},
      loadingSearch : {type: Boolean},
      currentDir : {type: String},
      files : {type: Array},
      selectedFile : {type: String},
      mode : {type: String},
      thumbnail : {type: String},
      lineHeight : {type: Number},
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.reset();

    this._injectModel('AppStateModel', 'RecordModel');

    this.iconMap = {};
    for( let icon in ICONS ) {
      for( let ext of ICONS[icon] ) {
        this.iconMap[ext] = icon;
      }
    }

    window.addEventListener('resize', () => this._onResize());
  }

  firstUpdated() {
    this.contentBody = this.shadowRoot.querySelector('.content-body');
    this.scrollPanel = this.shadowRoot.querySelector('app-virtual-scroller');
    this.scrollPanel.setItemRenderer(this.renderRow, this);

    this.parentNode.removeChild(this);
    document.body.appendChild(this);

    this.filenameWidth = '30px';

    // setTimeout(() => {
    //   this.show();
    // }, 1000)
    
  }

  updated(props) {
    if( props.has('selectedFile') ) {
      for( let file of this.files ) {
        file.selected = (file.fullUrl === this.selectedFile);
      }
      this.scrollPanel.requestUpdate();
    }
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
    // this.scrollPanel.style.height = (this.contentBody.offsetHeight - 175)+'px';

    let baseHeight = 335;
    if( window.innerWidth > 700 ) {
      this.scrollPanel.style.height = (window.innerHeight - baseHeight - 100)+'px';
    } else {
      this.scrollPanel.style.height = (window.innerHeight - baseHeight)+'px';
    }

    
    this.filenameWidth = ( this.scrollPanel.offsetWidth - 155 )+'px';
    this.scrollPanel.requestUpdate();
  }

  _onAppStateUpdate(e) {
    if( this.selectedRecord === e.selectedRecord ) return;
    if( !e.selectedRecord ) {
      return this.reset();
    }

    this.reset();

    this.selectedRecord = e.selectedRecord;
    this.selectedRecordMedia = e.selectedRecordMedia;

    if( this.selectedRecord && this.selectedRecord['@type'].includes('http://digital.ucdavis.edu/schema#bagOfFiles') ) {
      this._browseDirectory();
      this.title = this.selectedRecord.name || this.selectedRecord.title;
      this.thumbnail = this.selectedRecord.thumbnailUrl || '';
    }
  }

  async show() {
    this.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    this._onResize();

    this._onAppStateUpdate(await this.AppStateModel.get());

    setTimeout(() => {
      this._onResize();
      this.scrollPanel._onResize();
    }, 50);
  }

  hide() {
    this.style.display = 'none'
    document.body.style.overflow = 'auto';
  }

  reset() {
    this.selectedRecord = null;
    this.loadingFiles = false;
    this.loadingSearch = false;
    this.currentDir = '/';
    this.files = [];
    this.lineHeight = 41;
    this.selectedFile = '';
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
    let icon = this._getIcon(file);

    return html`
      <div class="row" style="height: ${this.lineHeight-1}px" ?directory="${file.isDirectory}" ?selected="${file.selected}" index="${index}" @click="${this._onItemClicked}" .context="${this}">
        <div>
          <div class="icon">
            <iron-icon icon="${icon}"></iron-icon>
          </div>
          <div class="file" style="width: ${this.filenameWidth}">
            <div class="filename">${file.filename}</div>
            <div class="directory" ?hidden="${this.mode === 'browse'}">${file.directory || '/'}</div>
          </div>
          <div class="filesize">${file.fileSize !== undefined ? bytes(file.fileSize) : '-'}</div>
          <div class="selected-file">
            <iron-icon icon="check" ?hidden="${!file.selected}"></iron-icon>
          </div>
        </div>
      </div>
    `
  }

  _getIcon(file) {
    let ext = file.isDirectory ? 'folder' : (file.filename || '').split('.').pop();
    let icon = this.iconMap[ext];
    if( icon ) return icon;
    return UNKNOWN_ICON;
  }

  _onItemClicked(e) {
    let index = parseInt(e.currentTarget.getAttribute('index'));
    
    // stupid hack, let html always scopes events to render host
    let $this = e.currentTarget.context;
    let file = $this.files[index];

    if( file.isDirectory ) {
      $this._browseDirectory(file['@id'].replace($this.selectedRecord['@id'], ''));
    } else {
      $this.selectedFile = file.fullUrl;
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
    }, 300);
  }

  async _typeaheadSearch(text) {
    this.typeaheadSearchText = text;
    if( text === '' ) {
      this.files = [];
      this._browseDirectory();
      return;
    }

    this.mode = 'search';
    this.lineHeight = 52;
    this.selectedFile = '';

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
    this.lineHeight = 45;
    this.shadowRoot.querySelector('#searchInput').value = '';
    this.selectedFile = '';

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
      file.fullUrl = this._getFullFileUrl(file);
      file.selected = (file.fullUrl === this.selectedFile);
      return file;
    });

    if( sort ) {
      files.sort((a,b) => a.filename.toLowerCase() > b.filename.toLowerCase() ? 1 : -1);
    }

    this.files = files;
  }

  _getFullFileUrl(file) {
    return window.location.protocol + '//' + window.location.host + '/fcrepo/rest' + file['@id'];
  }

  _onClearSearchClicked() {
    this._browseDirectory(this.currentDir);
  }

  _onBreadcrumbClicked(e) {
    this._browseDirectory(e.currentTarget.getAttribute('dir'));
  }

}

customElements.define('app-fs-viewer', AppFsViewer);
