const {BaseModel} = require('@ucd-lib/cork-app-utils');
const RecordVcStore = require('../stores/RecordVcStore');

class RecordVcModel extends BaseModel {

  constructor() {
    super();

    this.store = RecordVcStore;
    // this.EventBus.on('selected-record-update', e => this._onSelectedRecordUpdate(e));
    this.register('RecordVcModel');
  }

  /**
   * @method _onSelectedRecordUpdate
   * @description listen for record search update events, transform data for ui and emit event to update
   * 
   * @param {Object} e 
   */
  // _onSelectedRecordUpdate(e) {
  translate(e) {
    if( e && e.clientMedia ) {
      // debugger;
      // translate collection and related nodes/items to ui model
      const item = {
        id : e.root['@id'],
        name : e.root.name,
        collectionId : e.root.isPartOf[0]['@id'],
        collectionName : e.root.creator.name,
        collectionItemsCount : 42,
        collectionImg : e.root.image.url,
        clientMedia : e.clientMedia,
        date : e.root.yearPublished,
        publisher : e.root.publisher.name,
        keywords : ['?'],

        callNumber : e.root.identifier[0].split(';')[1].trim(),
        // .filter(id => id.match(/^.*,.*box:.*,.*folder:.*$/i)

        arkDoi : ['?'],
        fedoraLinks : ['?'],
        citationText : '?',
        root : e.root
      }

      // todo save translated data to store
      // todo this really will emit from this.store.setRecordSearchState() or similar
      // this.emit('record-vc-update', item); 
      return item;
    }
  }

}

module.exports = new RecordVcModel();