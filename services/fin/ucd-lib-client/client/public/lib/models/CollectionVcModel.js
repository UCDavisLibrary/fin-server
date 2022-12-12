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
      // const rootNode = e.payload.node[0];

      // const collection = {
      //   id : e.payload.id,
      //   description : rootNode.description,
      //   items : [

      //   ]
      // };
      // debugger;

      // e.payload.results.forEach(result => {
      //   const associatedMedia = result.getChildren(result.data.id).associatedMedia;
      //   let collectionItemsCount = 0;
      //   associatedMedia.forEach(media => {
      //     collectionItemsCount += media.hasPart ? media.hasPart.length : 0;
      //   });

      //   matchedRecords.push({
      //     id : result.root['@id'],               // ie '/item/ark:/pets/ashley'
      //     title : result.root.name,              // different for collections? might need to loop over nodes
      //     thumbnailUrl : result.root.thumbnailUrl,  // main image to show
      //     mediaType : null,                      // for media type icon, not sure on variety of icons
      //     collectionItemsCount,
      //     collection : result.root.publisher ? result.root.publisher.name : '', // for detail display
      //     creator : result.root.creator ? result.root.creator.name : '',    // for detail display
      //     date : result.root.yearPublished,      // for detail display
      //     format : [
      //       'Image'                              // todo pull from @type or maybe data.node.fileFormat ?  
      //     ],
      //     subject : null                         // todo search filters by subject, where to source from ?

      //     // todo image dimensions
      //   });
      // });

      // e.payload.collectionVcResults = matchedRecords;
      e.dust = 'hi';

      // 

      // todo save translated data to store
      // todo this really will emit from this.store.setRecordSearchState() or similar
      this.emit('collection-vc-update', e); 
    }
  }

}

module.exports = new CollectionVcModel();