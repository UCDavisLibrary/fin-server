const {config} = require('@ucd-lib/fin-node-utils');

config.essync = {

  basePath : '/collection',

  // map of attributes to reduce and names to reduce to
  reduceAttributes : {
    creator : 'creators',
    about : 'abouts',
    fileFormat : 'fileFormats',
    indexableContent : 'indexableContents'
  },

  // if these attributes exist, the ISO 8601 date will be stripped for
  // everything but the year and a new attribute created with the name
  // of the given key in the hash
  dateToYear : {
    datePublished : 'yearPublished'
  },

  // attributes to traverse when walking up the record tree
  parentConnections : ['isPartOf','encodesCreativeWork'],

  // attributes to traverse when walking down the record tree
  childConnections : ['hasPart', 'associatedMedia'],

  // svc: names for frame services 
  frameServices : {
    collection : 'es-collection-frame',
    record : 'es-record-frame'
  },

  transformServices : {
    collection : 'es-collection-transform',
    record : 'es-record-transform'
  }
}

module.exports = config;