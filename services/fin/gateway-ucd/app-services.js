module.exports = [
  {
    id : 'iiif',
    description : 'International Image Interoperability Framework Service',
    type : 'ProxyService',
    supportedType : 'http://www.w3.org/ns/ldp#NonRDFSource',
    urlTemplate : 'http://loris:5004{{fcPath}}{{svcPath}}'
  },
  {
    id : 'tesseract',
    description : 'Image OCR',
    type : 'ProxyService',
    supportedType : 'http://www.w3.org/ns/ldp#NonRDFSource',
    urlTemplate : 'http://tesseract:3333{{fcPath}}?svcPath={{svcPath}}'
  },
  {
    id : 'cas',
    description : 'UCD CAS authentication service',
    type : 'AuthenticationService',
    url : 'http://cas:8000'
  },
  {
    id : 'reindex',
    description : 'Reindex item or collection',
    type : 'ProxyService',
    urlTemplate : 'http://essync:3000/reindex/{{fcPath}}{{svcPath}}'
  }
];