const {AppStateInterface} = require('@ucd-lib/cork-app-state');

module.exports = subclass => 
  class AppStateInterfaceImpl extends Mixin(subclass).with(AppStateInterface) {
    
  }