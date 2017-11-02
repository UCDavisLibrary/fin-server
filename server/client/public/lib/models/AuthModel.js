var {BaseModel} = require('@ucd-lib/cork-app-utils');
var AuthStore = require('../stores/AuthStore');
var AuthService = require('../services/AuthService');


class AuthModel extends BaseModel {
  
    constructor() {
      super();
      this.store = AuthStore;
      this.service = AuthService;

      this.getUser();
    }

    async getUser() {
      return await this.service.getUser();
    }

}

module.exports = new AuthModel();