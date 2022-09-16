// default services.
// the service model will ensure these are added

module.exports = [
  {
    id : 'essync',
    title : 'Elastic Search Sync',
    description : 'Notify Elastic Search indexer when fedora updates',
    type : 'WebhookService',
    url : 'http://essync:3333'
  },
  {
    id : 'es-record-transform',
    title : 'Elastic Search - Record Record Transform',
    description : 'Used for updating Elastic Search indexes when fedora updates',
    type : 'TransformService',
    transform : '/etc/fin/transforms/es-record.js'
  },
  {
    id : 'es-collection-transform',
    title : 'Elastic Search - Collection Collection Transform',
    description : 'Used for updating Elastic Search indexes when fedora updates',
    type : 'TransformService',
    transform : '/etc/fin/transforms/es-collection.js'
  },
  {
    id : 'es-application-transform',
    title : 'Elastic Search - Application Transform',
    description : 'Used for updating Elastic Search indexes when fedora updates',
    type : 'TransformService',
    transform : '/etc/fin/transforms/es-application.js'
  },
  {
    id : 'ucd-lib-client',
    description : 'UCD Library DAMS Client UI',
    type : 'ClientService',
    url : 'http://ucd-lib-client:8000'
  },
  {
    id : 'api',
    description : 'UCD Api for frontend client',
    type : 'GlobalService',
    urlTemplate : 'http://api:3000{{svcPath}}'
  }
];