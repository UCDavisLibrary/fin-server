const {config} = require('@ucd-lib/fin-node-utils');

config.essync = {

  basePath : '/collection',

  // properties to set local ids for
  // localIds : ['@id', 'hasPart', 'isPartOf', 'exampleOfWork', 'workExample',
  //             'associatedMedia', 'encodesCreativeWork', 'parent'],

  // svc: names for frame services 
  frameServices : {
    collection : 'es-collection-frame',
    record : 'es-record-frame'
  }
}

module.exports = config;