var {BaseModel} = require('@ucd-lib/cork-app-utils');
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