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

    this.parentElement.removeChild(this);
    document.body.appendChild(this);
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
    this.load(e.selectedRecord.id);
  }

  show() {
    this.style.display = 'block';
    // this.background.style.style = 'block';
  }

  hide() {
    this.style.display = 'none'
  }

  reset() {
    this.loadingFiles = false;
    this.loadingSearch = false;
    this.currentDir = '/';
    this.isSearch = false;
    this.isBrowse = true;
    this.files = [];
  }

  async load(id) {
    // this.loadingFiles = true;
    // let result = await this.RecordModel.getFiles(id);
    // if( this.selectedRecord['@id'] !== id ) return;
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

}

customElements.define('app-fs-viewer', AppFsViewer);
