const {config} = require('@ucd-lib/fin-service-utils');

config.essync = {

  // if these attributes exist, the ISO 8601 date will be stripped for
  // everything but the year and a new attribute created with the name
  // of the given key in the hash
  dateToYear : {
    datePublished : 'yearPublished'
  },

  bagOfFiles : {
    type : 'http://digital.ucdavis.edu/schema#BagOfFiles'
  },

  // svc: names for frame services 
  // frameServices : {
  //   collection : 'es-collection-frame',
  //   record : 'es-record-frame'
  // },

  transformServices : {
    collection : 'es-collection-transform',
    record : 'es-record-transform',
    application : 'es-application-transform'
  }
}

module.exports = config;