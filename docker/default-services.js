// default services.
// the service model will ensure these are added

let testFrame = {
  "@context": {
    "dc": "http://purl.org/dc/elements/1.1/",
    "title" : {
      "@id": "dc:title"
    },
    "description" : {
      "@id": "dc:description"
    }
  },
  "@explicit": true,
  "title": {},
  "description": {}
}

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
    description : 'Update Elastic Search indexes when fedora updates',
    type : 'WebhookService',
    webhook : 'http://essync:3333'
  },
  {
    id : 'serialization',
    description : 'Serializes all fedora data to filesystem',
    type : 'WebhookService',
    webhook : 'http://serialization:3333'
  },
  { 
    id : 'demo-frame-service',
    description : 'A demo of the frame service',
    type : 'FrameService',
    supportedType : 'http://www.w3.org/ns/ldp#Container',
    frame : testFrame
  }
];