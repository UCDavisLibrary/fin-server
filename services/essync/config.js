const {config} = require('@ucd-lib/fin-node-utils');

config.essync = {

  basePath : '/collection',

  // map of attributes to reduce and names to reduce to
  reduceAttributes : {
    creator : 'creators',
    subject : 'subjects',
    fileFormat : 'fileFormats'
  },

  // svc: names for frame services 
  frameServices : {
    collection : 'es-collection-frame',
    record : 'es-record-frame'
  }
}

module.exports = config;