const fs = require('fs');

let defaultServices = [];
if( fs.existsSync('/etc/fin/default-services.js') ) {
  defaultServices = require('/etc/fin/default-services.js');
}

var fcrepoHostname = process.env.FCREPO_HOST || 'fcrepo';
var esHostname = process.env.ES_HOST || 'elasticsearch';

module.exports = {

  server : {
    url : process.env.FIN_URL || 'http://localhost:3000',
    loglevel : process.env.FIN_LOG_LEVEL || 'info',
    cookieSecret : process.env.FIN_COOKIE_SECRET || 'changeme',
    cookieMaxAge : process.env.FIN_COOKIE_MAX_AGE ? parseInt(process.env.SERVER_COOKIE_MAX_AGE) : (1000 * 86400 * 30),
    allowOrigins : (process.env.FIN_ALLOW_ORIGINS || '').split(',').filter(domain => domain !== '').map(domain => domain.trim())
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
    log : process.env.ES_LOG_LEVEL || 'error'
  },

  redis : {
    host : process.env.REDIS_HOST || 'redis',
    port : process.env.REDIS_PORT || 6379,
    refreshTokenExpire : (86400 * 30)
  }

}