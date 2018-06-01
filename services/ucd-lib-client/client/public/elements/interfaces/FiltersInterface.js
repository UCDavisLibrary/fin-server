module.exports = subclass => 
  class FiltersInterface extends subclass {
    constructor() {
      super();
      this._injectModel('FiltersModel');
    }

  }