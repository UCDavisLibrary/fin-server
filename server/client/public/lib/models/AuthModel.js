var BaseModel = require('cork-app-utils').BaseModel;
var AuthStore = require('../stores/AuthStore');
var AuthService = require('../services/AuthService');


class AuthModel extends BaseModel {
  
    constructor() {
      super();
      this.store = AuthStore;
      this.service = AuthService;
    }

}

module.exports = new AuthModel();