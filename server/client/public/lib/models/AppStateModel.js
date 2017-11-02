var {AppStateModel} = require('@ucd-lib/cork-app-state');
var AppStateStore = require('../stores/AppStateStore');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();
    this.store = AppStateStore;
  }

}

module.exports = new AppStateModelImpl();