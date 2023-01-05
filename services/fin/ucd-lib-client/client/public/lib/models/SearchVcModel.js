const {BaseModel} = require('@ucd-lib/cork-app-utils');
const SearchVcStore = require('../stores/SearchVcStore');

class SearchVcModel extends BaseModel {

  constructor() {
    super();

    this.store = SearchVcStore;
    this.EventBus.on('record-search-update', e => this._onRecordSearchUpdate(e));
    this.register('SearchVcModel');
  }

  /**
   * @method _onRecordSearchUpdate
   * @description listen for record search update events, transform data for ui and emit event to update
   * 
   * @param {Object} e 
   */
  async _onRecordSearchUpdate(e) {
    if( e.state === 'loaded' ) {

      // translate RecordGraph's to ui model
      const matchedRecords = [];
      e.payload.results.forEach(result => {
        // const associatedMedia = result.getChildren(result.data.id).associatedMedia;

        // let collectionItemsCount = 0;
        // associatedMedia.forEach(media => {
        //   collectionItemsCount += media.hasPart ? media.hasPart.length : 0;
        // });

        // todo could belong to multiple collections.. which should be listed? or collectionIds as array type?
        // also this index0 sometimes is oac and not /collection/*
        let collectionId;
        if( Array.isArray(result.root.isPartOf) ) {
          collectionId = result.root.isPartOf.filter(c => c['@id'].indexOf('/collection') > -1)[0]; //result.root.isPartOf[0]['@id']; 
        } else {
          collectionId = result.root.isPartOf['@id'];
        }

        matchedRecords.push({
          id : result.root['@id'],               // ie '/item/ark:/pets/ashley'
          collectionId,                          // ie '/collection/sherry-lehmann'
          title : result.root.name,              // different for collections? might need to loop over nodes
          thumbnailUrl : result.root.thumbnailUrl,  // main image to show
          mediaType : null,                      // todo for media type icon, not sure on variety of icons
          // collectionItemsCount,
          collection : result.root.publisher ? result.root.publisher.name : '', // for detail display
          creator : result.root.creator ? result.root.creator.name : '',    // for detail display
          date : result.root.yearPublished,      // for detail display
          format : [
            'Image'                              // todo pull from @type or maybe data.node.fileFormat ?  
          ],
          subject : null                         // todo search filters by subject, where to source from ?

          // todo image dimensions?
        });
      });

      e.payload.results = matchedRecords;

      // todo save translated data to store
      // todo this really will emit from this.store.setRecordSearchState() or similar
      this.emit('search-vc-update', e); 
    }
  }

}

module.exports = new SearchVcModel();