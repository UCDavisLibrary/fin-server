var jsonld = require('jsonld');
var util = require('util');
var config = require('../config');

jsonld.compact = util.promisify(jsonld.compact);

var context = config.jsonld.compactContext;
var keep = config.jsonld.keep;

class JsonldUtils {

  async compact(doc) {
    return await jsonld.compact(doc, context);
  }

  async clean(doc) {
    doc = await this.compact(doc);

    for( var key in doc ) {
      if( !context[key] && keep.indexOf(key) === -1 ) {
        delete doc[key];
      }
    }

    return doc;
  }
}

module.exports = new JsonldUtils();