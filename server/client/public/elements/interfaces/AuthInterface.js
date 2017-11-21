module.exports = subclass => 
  class AuthInterface extends subclass {
    constructor() {
      super();
      this._injectModel('AuthModel');
    }

    ready() {
      super.ready();

      this.AuthModel.getUser()
        .then(e => this.AuthModel.store.data)
        .catch(e => console.error(e));
    }

    _onAuthUpdate(e) {
      // implement me
    }

    async _getUser() {
      return this.AuthModel.getUser();
    }

    _logout() {
      this.AuthModel.logout();
    }

    _login() {
      this.AuthModel.login();
    }
  }