

module.exports = {

  server : {
    url : process.env.UCD_DAMS_URL || 'http://localhost:3000',
    cookieSecret : process.env.SERVER_COOKIE_SECRET || 'changeme'
  },

  cas : {
    url : process.env.CAS_URL || 'https://cas.ucdavis.edu/cas'
  },

  fcrepo : {
    host : 'http://fcrepo:8080',
    root : '/fcrepo/rest/'
  },

  jwt : {
    secret : process.env.JWT_SECRET,
    issuer : process.env.JWT_ISSUER,
    // expires in seconds
    ttl : process.env.JWT_TTL ? parseInt(process.env.JWT_TTL) : (60 * 60),
    cookieName : process.env.JWT_COOKIE_NAME || 'fedora-jwt'
  },


  jsonld : {
    compactContext : {
      "created": {
        "@id" : "http://fedora.info/definitions/v4/repository#created",
        "@type" : "http://www.w3.org/2001/XMLSchema#dateTime"
      },
      "createdBy": "http://fedora.info/definitions/v4/repository#createdBy",
      "hasParent": "http://fedora.info/definitions/v4/repository#hasParent",
      "lastModified": {
        "@id" : "http://fedora.info/definitions/v4/repository#lastModified",
        "@type" : "http://www.w3.org/2001/XMLSchema#dateTime"
      },
      "lastModifiedBy": "http://fedora.info/definitions/v4/repository#lastModifiedBy",
      "title": "http://purl.org/dc/elements/1.1/title",
      "writable" : "http://fedora.info/definitions/v4/repository#writable",
      "hasParent": {
        "@id": "http://fedora.info/definitions/v4/repository#hasParent", 
        "@type": "@id"
      },
      "contains": {
        "@id": "http://www.w3.org/ns/ldp#contains", 
        "@type": "@id"
      }
    },

    keep : ['@context', '@type', '@id']
  },

  elasticsearch : {
    alias : 'fcrepo-search',
    recordSchemaType : 'fcrepo-record',
    host : 'http://elastic:changeme@elasticsearch:9200',
    log : 'error'
  }
}