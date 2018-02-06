var {BaseModel} = require('@ucd-lib/cork-app-utils');
var AuthStore = require('../stores/AuthStore');
var AuthService = require('../services/AuthService');


class AuthModel extends BaseModel {
  
    constructor() {
      super();
      this.store = AuthStore;
      this.service = AuthService;

      this.register('AuthModel');
    }

    async getUser() {
      return await this.service.getUser();
    }

    login() {
      window.location = '/auth/cas/login';
    }

    logout() {
      window.location = '/auth/logout'
    }

}

module.exports = new AuthModel();