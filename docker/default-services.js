// default services.
// the service model will ensure these are added
module.exports = [
  {
    name : 'iiif',
    description : 'International Image Interoperability Framework Service',
    type : 'ProxyService',
    urlTemplate : 'http://loris:5004{{fcPath}}{{svcPath}}'
  },
  {
    name : 'essync',
    description : 'Update Elastic Search indexes when fedora updates',
    type : 'WebhookService',
    webhook : 'http://essync:3333'
  },
  {
    name : 'serialization',
    description : 'Serializes all fedora data to filesystem',
    type : 'WebhookService',
    webhook : 'http://serialization:3333'
  }
];