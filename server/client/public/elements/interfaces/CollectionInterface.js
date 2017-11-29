module.exports = subclass => 
class CollectionInterface extends subclass {
  constructor() {
    super();
    this._injectModel('CollectionModel');
  }

  async _getCollectionOverview() {
    return this.CollectionModel.overview();
  }

  _selectCollection(id) {
    this.CollectionModel.select(id);
  }

  _getCollection(id) {
    return this.CollectionModel.get(id);
  }

}