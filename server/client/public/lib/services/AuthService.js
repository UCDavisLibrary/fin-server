const {BaseService} = require('@ucd-lib/cork-app-utils');
const AuthStore = require('../stores/AuthStore');

class AuthSerivce extends BaseService {

  constructor() {
    super();
    this.store = AuthStore;
    this.initAuthRequested = false;
  }

  async getUser() {
    if( this.initAuthRequested ) {
      return this.store.data;
    }
    this.initAuthRequested = true;

    return this.request({
      url : '/auth/user',
      onLoad : result => {
        if( !result.body.loggedIn ) this.store.notLoggedIn();
        else this.store.setUser(result.body);
      },
      onError : e => {
        throw e;
      }
    });
  }

}

module.exports = new AuthSerivce();