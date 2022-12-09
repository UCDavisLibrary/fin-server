import { LitElement} from 'lit';
import render from "./app-collection.tpl.js";

import "../../components/cards/dams-item-card";

class AppCollection extends Mixin(LitElement) 
      .with(LitCorkUtils) {

  static get properties() {
    return {
    
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;
    this._injectModel('AppStateModel', 'CollectionModel', 'RecordModel', 'CollectionVcModel');
  }

  /**
   * @method _onAppStateUpdate
   * @description on the App update, the state is determined and by checking
   * the location
   * 
   * @param {Object} e 
   */
   async _onAppStateUpdate(e) {
    if( e.location.path[0] !== 'collection') return;

    const collectionId = e.location.fullpath; // ie '/collection/sherry-lehmann'

    // build query to search all related items for this collection
    const query = this.RecordModel.urlToSearchDocument(['', encodeURIComponent(JSON.stringify([
      ["collectionId","or", collectionId]
    ])),'', '10']);

    let collections = await this.RecordModel.search(query);

    // handle results in _onCollectionVcUpdate event bus callback

  }

  /**
   * @description _onCollectionVcUpdate, fired when collection viewController updates
   * @param {*} e 
   */
   _onCollectionVcUpdate(e) {
    if( e.state !== 'loaded' ) return;
    debugger;
    // this.collectionResults = e.payload.results.filter(c => c.collection);
  }
  
}

customElements.define('app-collection', AppCollection);