export default subclass => 
  class SearchInterface extends subclass {
    
      constructor() {
        super();
        this._iocInject('SearchModel');
      }
      
      async _search(query) {
        return await this.SearchModel.search(query);
      }
  }