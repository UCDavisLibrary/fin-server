// default services.
// the service model will ensure these are added

module.exports = [
  {
    id : 'iiif',
    description : 'International Image Interoperability Framework Service',
    type : 'ProxyService',
    supportedType : 'http://www.w3.org/ns/ldp#NonRDFSource',
    urlTemplate : 'http://loris:5004{{fcPath}}{{svcPath}}'
  },
  {
    id : 'essync',
    title : 'Elastic Search Sync',
    description : 'Notify Elastic Search indexer when fedora updates',
    type : 'WebhookService',
    url : 'http://essync:3333'
  },
  {
    id : 'auto-generator-demo',
    title : 'Auto Generator Demo',
    description : 'Demo of automatic container generation',
    type : 'WebhookService',
    url : 'http://auto-generator-demo:3333'
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
    id : 'es-record-frame',
    title : 'Elastic Search - Collection Record Frame',
    description : 'Used for updating Elastic Search indexes when fedora updates',
    type : 'FrameService',
    frame : require('./frames/es-record.json')
  },
  {
    id : 'es-collection-frame',
    title : 'Elastic Search - Collection Frame',
    description : 'Used for updating Search indexes when fedora updates',
    type : 'FrameService',
    frame : require('./frames/es-collection.json')
  },
  {
    id : 'cas',
    description : 'UCD CAS authentication service',
    type : 'AuthenticationService',
    url : 'http://cas:8000'
  },
  {
    id : 'basic',
    title : 'Basic Authentication',
    description : 'Basic username/password authentication service',
    type : 'AuthenticationService',
    url : 'http://basic-auth:8000'
  },
  {
    id : 'ucd-lib-client',
    description : 'UCD Library DAMS Client UI',
    type : 'ClientService',
    url : 'http://ucd-lib-client:8000'
  }
];