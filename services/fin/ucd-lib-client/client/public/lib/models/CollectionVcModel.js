const {BaseModel} = require('@ucd-lib/cork-app-utils');
const CollectionVcStore = require('../stores/CollectionVcStore');

class CollectionVcModel extends BaseModel {

  constructor() {
    super();

    this.store = CollectionVcStore;
    this.EventBus.on('collection-update', e => this._onCollectionUpdate(e));
    this.register('CollectionVcModel');
  }

  /**
   * @method _onCollectionUpdate
   * @description listen for record search update events, transform data for ui and emit event to update
   * 
   * @param {Object} e 
   */
  async _onCollectionUpdate(e) {
    if( e.state === 'loaded' ) {

      // translate collection and related nodes/items to ui model
      const rootNode = e.payload.node[0];
      // e.payload.node.shift();
      // todo this will come from admin application storage pref
      // let highlightedCollections = [];
      // for( let i = 1; i < 7 && e.payload.node.length > i; i++ ) {
      //   highlightedCollections.push({
      //     id : e.payload.node[i]['@id'],
          // title : e.payload.node[i].?,
          // thumbnailUrl : e.payload.node[i].?,
        // });
      // }

      const collection = {
        id : e.payload.id,
        description : rootNode.description,
        title : rootNode.name,
        thumbnailUrl : rootNode.image.url,
        keywords : rootNode.keywords,
        callNumber : rootNode.image.url.split(rootNode['@id']+'/')[1].split('/')[0], // hack to splice from image url, find actual source
        // items : [
        //   e.payload.node
        // ],
        yearPublished : rootNode.yearPublished
        // highlightedCollections
      };

      e.payload.results = collection;

      // todo save translated data to store
      // todo this really will emit from this.store.setRecordSearchState() or similar
      this.emit('collection-vc-update', e); 
    }
  }

}

module.exports = new CollectionVcModel();