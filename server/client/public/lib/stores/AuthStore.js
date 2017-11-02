var {BaseStore} = require('@ucd-lib/cork-app-utils');

class AuthStore extends BaseStore {

  constructor() {
    super();
    this.CUSTOM_STATES = {
      PENDING : 'pending',
      NOT_LOGGED_IN : 'notLoggedIn',
      LOGGED_IN : 'loggedIn'
    }


    this.events = {
      AUTH_UPDATE : 'auth-update'
    }

    this.data = {
      state : this.CUSTOM_STATES.PENDING,
      user : null
    }
  }

  setUser(user) {
    this.data = {
      payload : user,
      state: user.isAnonymous ? this.CUSTOM_STATES.NOT_LOGGED_IN : this.CUSTOM_STATES.LOGGED_IN
    };
    console.log(this.data);
    this.emit(this.events.AUTH_UPDATE, this.data);
  }

  notLoggedIn() {
    this.data = {
      payload : {},
      state : this.CUSTOM_STATES.NOT_LOGGED_IN
    }

    this.emit(this.events.AUTH_UPDATE, this.data);
  }

}

module.exports = new AuthStore();