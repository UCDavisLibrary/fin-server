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

      // temp
      let randomThumbnails = [
        { url: "https://stage.library.ucdavis.edu/wp-content/uploads/2022/09/sherry-lehmann-d7mm2n_4-3.jpg", width: "389", height: "292" },
        { url: "https://stage.library.ucdavis.edu/wp-content/uploads/2022/09/059-Boy_Scout_Cabin_4-3.jpg", width: "389", height: "292" },
        { url: "https://stage.library.ucdavis.edu/wp-content/uploads/2022/10/ASC_RareBooks_LookingGlass005.jpg", width: "210", height: "292" },
        { url: "https://stage.library.ucdavis.edu/wp-content/uploads/2022/10/ASC_RareBooks_GoblinMarket003.jpg", width: "291", height: "292" },
        { url: "https://stage.library.ucdavis.edu/wp-content/uploads/2022/10/ASC_RareBooks_LookingGlass001-Edit.jpg", width: "233", height: "292" },
        { url: "https://stage.library.ucdavis.edu/wp-content/uploads/2022/10/ASC_RareBooks_ShadowForms002-Edit.jpg", width: "292", height: "292" },
        { url: "https://stage.library.ucdavis.edu/wp-content/uploads/2022/09/NVWL_Slide_30_4-3.jpg", width: "389", height: "292" },
        { url: "https://stage.library.ucdavis.edu/wp-content/uploads/2022/09/d74w7z-0-web.png", width: "252", height: "292" }
      ];

      if( matchedRecords.length === 0 ) {
        while( matchedRecords.length < 8 ) {
          let thumbnail = randomThumbnails[matchedRecords.length];
          matchedRecords.push({
            id : '/item/ark:/pets/ashley',
            title : 'A title of significance that is quite long and unwieldy ugh',
            thumbnailUrl : thumbnail.url,
            mediaType : null,
            collectionItemsCount: 42,
            collection : 'Dusty',
            creator : 'Dusty',
            date : 1986,
            format : [
              'Image'
            ],
            subject : null,
            image : {
              width: thumbnail.width,
              height: thumbnail.height
            }
          });
        }
      }

      e.payload.results = matchedRecords;

      // todo save translated data to store
      // todo this really will emit from this.store.setRecordSearchState() or similar
      this.emit('record-search-vc-update', e); 
    }
  }

}

module.exports = new RecordSearchVCModel();