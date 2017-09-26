var jsonld = require('jsonld');
var util = require('util');
var config = require('../config');

jsonld.compact = util.promisify(jsonld.compact);

class JsonldUtils {

  async compact(doc) {
    return await jsonld.compact(doc, config.jsonld.compactContext);
  }

  async clean(doc) {
    doc = await this.compact(doc);

    for( var key in doc ) {
      if( !config.jsonld.compactContext[key] && 
           config.jsonld.keep.indexOf(key) === -1 ) {
        delete doc[key];
      }
    }

    return doc;
  }
}

module.exports = new JsonldUtils();