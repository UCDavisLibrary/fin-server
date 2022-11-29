const {BaseModel} = require('@ucd-lib/cork-app-utils');
const RecordSearchVCStore = require('../stores/RecordSearchVCStore');

class RecordSearchVCModel extends BaseModel {

  constructor() {
    super();

    this.store = RecordSearchVCStore;
    this.EventBus.on('record-search-update', e => this._onRecordSearchUpdate(e));
    this.register('RecordSearchVCModel');
  }

  /**
   * @method _onRecordSearchUpdate
   * @description listen for record search update events, transform data for ui and emit event to update
   * 
   * @param {Object} e 
   */
  async _onRecordSearchUpdate(e) {
    if( e.state === 'loaded' ) {

      debugger;
      // translate RecordGraph's to ui model
      const matchedRecords = [];
      e.payload.results.forEach(result => {
        const associatedMedia = result.getChildren(result.data.id).associatedMedia;
        let collectionItemsCount = 0;
        associatedMedia.forEach(media => {
          collectionItemsCount += media.hasPart ? media.hasPart.length : 0;
        });

        matchedRecords.push({
          id : result.root['@id'],               // ie '/item/ark:/pets/ashley'
          title : result.root.name,              // different for collections? might need to loop over nodes
          thumbnailUrl : result.root.thumbnailUrl,  // main image to show
          mediaType : null,                      // for media type icon, not sure on variety of icons
          collectionItemsCount,
          collection : result.root.publisher ? result.root.publisher.name : '', // for detail display
          creator : result.root.creator ? result.root.creator.name : '',    // for detail display
          date : result.root.yearPublished,      // for detail display
          format : [
            'Image'                              // todo pull from @type or maybe data.node.fileFormat ?  
          ],
          subject : null                         // todo search filters by subject, where to source from ?

          // todo image dimensions
        });
      });
      e.payload.results = matchedRecords;

      // todo save translated data to store
      // todo this really will emit from this.store.setRecordSearchState() or similar
      this.emit('record-search-vc-update', e); 
    }
  }

}

module.exports = new RecordSearchVCModel();