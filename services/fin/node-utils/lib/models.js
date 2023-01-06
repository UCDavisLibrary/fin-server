const config = require('../config.js');

/**
 * @class FinModelLoader
 * @description dynamically load Fin models from disk
 */
class FinModelLoader {

  /**
   * @method load
   * @description load all models.  models might (and often do) use
   * the service utils library, so this call ALWAYS needs to be async.
   */
  load() {
    if( this.models ) return;
    return new Promise((resolve, reject) => {
      setImmediate(() => {
        try {
          this.models = require(config.models.rootDir);
          resolve();
        } catch(e) {
          reject(e);
        }
      });
    });
  }

  /**
   * @method names
   * @description return list of all model names 
   * 
   * @returns {Promise<Array>}
   */
  async names() {
    await this.load();
    return Object.keys(this.models);
  }


  /**
   * @method get
   * @description return a model 
   * 
   * @param {String} model name of model
   * @returns 
   */
  async get(model) {
    await this.load();

    if( !this.models[model] ) {
      throw new Error('Unknown model: '+model);
    }

    return this.models[model];
  }

}

module.exports = new FinModelLoader();