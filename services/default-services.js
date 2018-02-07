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
    webhook : 'http://essync:3333'
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
    id : 'serialization',
    description : 'Serializes all fedora data to filesystem',
    type : 'WebhookService',
    webhook : 'http://serialization:3333'
  },
  {
    id : 'cas',
    description : 'UCD CAS authentication service',
    type : 'AuthenticationService',
    url : 'http://cas:8000'
  },
  {
    id : 'ucd-lib-client',
    description : 'UCD Library DAMS Client UI',
    type : 'ClientService',
    url : 'http://ucd-lib-client:8000'
  }
];