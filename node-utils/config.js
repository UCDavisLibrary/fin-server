const fs = require('fs');

let defaultServices = [];
if( fs.existsSync('/etc/dams/default-services.js') ) {
  defaultServices = require('/etc/dams/default-services.js');
}

var fcrepoHostname = 'fcrepo';
var redisHostname = 'redis';
var esHostname = 'elasticsearch';

module.exports = {

  server : {
    url : process.env.DAMS_URL || 'http://localhost:3000',
    loglevel : process.env.DAMS_LOG_LEVEL || 'info',
    cookieSecret : process.env.SERVER_COOKIE_SECRET || 'changeme',
    cookieMaxAge : process.env.SERVER_COOKIE_MAX_AGE ? parseInt(process.env.SERVER_COOKIE_MAX_AGE) : (1000 * 86400 * 30)
  },

  defaultServices : defaultServices,

  cas : {
    url : process.env.CAS_URL || 'https://cas.ucdavis.edu/cas'
  },

  fcrepo : {
    hostname : fcrepoHostname,
    host : `http://${fcrepoHostname}:8080`,
    root : '/fcrepo/rest',
    stomp : {
      port : 61613,
      topic : '/topic/fedora'
    }
  },

  jwt : {
    secret : process.env.JWT_SECRET,
    issuer : process.env.JWT_ISSUER,
    // expires in seconds
    ttl : process.env.JWT_TTL ? parseInt(process.env.JWT_TTL) : (60 * 60),
    cookieName : process.env.JWT_COOKIE_NAME || 'fin-jwt'
  },

  elasticsearch : {
    record : {
      alias : 'fcrepo-records',
      schemaType : 'fcrepo-record'
    },
    collection : {
      alias : 'fcrepo-collections',
      schemaType : 'fcrepo-collection',
    },
    host : `http://elastic:changeme@${esHostname}:9200`,
    log : 'error'
  },

  redis : {
    host : redisHostname,
    port : 6379,
    refreshTokenExpire : (86400 * 30)
  }

}