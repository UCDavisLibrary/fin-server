const config = require('../config.js');

/**
 * @class FinModelLoader
 * @description dynamically load Fin models from disk
 */
class FinModelLoader {

  constructor() {
    this.load();
  }

  load() {
    this.models = require(config.models.rootDir);
  }

  names() {
    return Object.keys(this.models);
  }

  get(model) {
    if( !this.models[model] ) {
      throw new Error('Unknown model: '+model);
    }

    return this.models[model];
  }

}

module.exports = new FinModelLoader();