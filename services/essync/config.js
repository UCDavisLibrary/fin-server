const {config} = require('@ucd-lib/fin-node-utils');

config.essync = {

  basePath : '/collection',

  // map of attributes to reduce and names to reduce to
  reduceAttributes : {
    creator : 'creators',
    subject : 'subjects',
    fileFormat : 'fileFormats'
  },

  // attributes to traverse when walking up the record tree
  parentConnections : ['isPartOf','encodesCreativeWork'],

  // attributes to traverse when walking down the record tree
  childConnections : ['hasPart', 'associatedMedia'],

  // svc: names for frame services 
  frameServices : {
    collection : 'es-collection-frame',
    record : 'es-record-frame'
  }
}

module.exports = config;