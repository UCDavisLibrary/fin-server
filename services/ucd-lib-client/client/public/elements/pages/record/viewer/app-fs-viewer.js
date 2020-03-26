import { LitElement } from 'lit-element';
import render from "./app-fs-viewer.tpl.js"


export default class AppFsViewer extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      loadingFiles : {type: Boolean},
      loadingSearch : {type: Boolean},
      currentDir : {type: String},
      displayFiles : {type: Array},
      mode : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.reset();

    this._injectModels('AppStateModel', 'RecordModel');
  }

  _onAppStateUpdate(e) {
    if( !e.selectedRecord ) {
      return this.reset();
    }
    if( this.selectedRecord === e.selectedRecord ) return;
    this.selectedRecord = e.selectedRecord;
    this.load(e.selectedRecord.id);
  }

  reset() {
    this.loadingFiles = false;
    this.loadingSearch = false;
    this.currentDir = '/';
    this.isSearch = false;
    this.isBrowse = true;
    this.displayFiles = [];
  }

  load(id) {
    this.loadingFiles = true;
    let result = await this.RecordModel.getFiles(id);
    if( this.selectedRecord['@id'] !== id ) return;
  }

}

customElements.define('app-fs-viewer', AppFsViewer);
