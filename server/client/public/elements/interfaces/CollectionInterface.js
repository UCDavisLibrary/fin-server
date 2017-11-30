module.exports = subclass => 
class CollectionInterface extends subclass {
  constructor() {
    super();
    this._injectModel('CollectionModel');
  }

  async _getCollectionOverview() {
    return this.CollectionModel.overview();
  }

  _getCollection(id) {
    return this.CollectionModel.get(id);
  }

  _getCollectionByShortId(shortId) {
    return this.CollectionModel.getByShortId(shortId);
  }

}