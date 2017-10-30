var BaseStore = require('cork-app-utils').BaseStore;

class AppStateStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      location : {}
    }

    this.events = {
      APP_STATE_UPDATE : 'app-state-update'
    }
  }

  set(state) {
    this.data = Object.assign({}, this.data, state);
    this.emit(this.events.APP_STATE_UPDATE, this.data);
  }

  get() {
    return this.data;
  }

}

module.exports = new AppStateStore();