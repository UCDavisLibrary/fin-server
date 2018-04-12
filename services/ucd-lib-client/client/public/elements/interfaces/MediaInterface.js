module.exports = subclass => 
  class MediaInterface extends subclass {
    constructor() {
      super();
      this._injectModel('MediaModel');
    }

    _getImgPath(record) {
      return this.MediaModel.getImgPath(record);
    }

    _getImgUrl(path, width, height) {
      return this.MediaModel.getImgUrl(path, width, height);
    }

    _getImageMediaList(rootRecord) {
      return this.MediaModel.getImageMediaList(rootRecord);
    }

  }