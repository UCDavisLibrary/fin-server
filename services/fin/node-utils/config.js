const fs = require('fs');
const path = require('path');
const env = process.env;

let defaultServices = [];
if( fs.existsSync('/etc/fin') ) {
  fs.readdirSync('/etc/fin')
    .forEach(file => {
      if( file.match(/.*-services.js$/) ) {
        let serviceDef = require(path.join('/etc/fin', file));
        if( Array.isArray(serviceDef) ) {
          defaultServices = defaultServices.concat(serviceDef);
        } else {
          defaultServices.push(serviceDef);
        }
      }
    });
}

var fcrepoHostname = process.env.FCREPO_HOST || 'fcrepo';
var esHostname = process.env.ES_HOST || 'elasticsearch';
var esPort = process.env.ES_PORT || 9200;

let serviceAccountFile = process.env.GOOGLE_SERVICE_ACCOUNT_FILE || '/etc/fin/webapp-service-account.json';
let serviceAccountExists = fs.existsSync(serviceAccountFile) && fs.lstatSync(serviceAccountFile).isFile();

module.exports = {

  server : {
    url : process.env.FIN_URL || 'http://localhost:3000',
    loglevel : process.env.FIN_LOG_LEVEL || 'info',
    cookieSecret : process.env.FIN_COOKIE_SECRET || 'changeme',
    cookieMaxAge : process.env.FIN_COOKIE_MAX_AGE ? parseInt(process.env.SERVER_COOKIE_MAX_AGE) : (1000 * 60 * 60 * 24 * 7),
    allowOrigins : (process.env.FIN_ALLOW_ORIGINS || '').split(',').filter(domain => domain !== '').map(domain => domain.trim()),
    cacheExpireTime : process.env.FIN_CACHE_EXPIRE || (60*60*12),
    hdtCacheDir : process.env.FIN_HDT_CACHE_DIR || '/etc/fin/hdt-cache'
  },

  gateway : {
    host : 'http://gateway:3001'
  },

  defaultServices : defaultServices,

  cas : {
    url : process.env.CAS_URL || 'https://cas.ucdavis.edu/cas'
  },

  rdf : {
    baseUrl : 'http://digital.ucdavis.edu/schema#',
    prefix : 'ucdlib'
  },

  fcrepo : {
    hostname : fcrepoHostname,
    host : `http://${fcrepoHostname}:8080`,
    root : '/fcrepo/rest',
    stomp : {
      port : 61613,
      queue : '/queue/fedora'
    }
  },

  pg : {
    host : env.PG_HOST || 'postgres',
    port : env.PG_PORT || 5432,
    user : env.PG_USER || 'postgres',
    database : env.PG_DATABASE || 'fcrepo'
  },

  jwt : {
    secret : process.env.JWT_SECRET,
    issuer : process.env.JWT_ISSUER,
    // expires in seconds
    ttl : process.env.JWT_TTL ? parseInt(process.env.JWT_TTL) : (60 * 60 * 24 * 14),
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
    host : esHostname,
    port : esPort,
    username : process.env.ELASTIC_USERNAME || 'elastic',
    password : process.env.ELASTIC_PASSWORD || 'elastic',
    get connStr () {
      return `http://${this.host}:${this.port}`
    }, 
    log : process.env.ES_LOG_LEVEL || 'error',
    application : {
      alias : 'fin-applications',
      schemaType : 'fin-applications'
    },
    fields : {
      exclude : ['node.indexableContent', 'node.indexableContents', 'node.createdBy', 'node.lastModifiedBy', 'node.directParent', 'node._'],
      fill : ['hasPart', 'associatedMedia', 'caption', 'transcript']
    }
  },

  redis : {
    host : process.env.REDIS_HOST || 'redis',
    port : process.env.REDIS_PORT || 6379,
    refreshTokenExpire : (86400 * 30)
  },

  google : {serviceAccountExists, serviceAccountFile},

  workflow : {
    root : '/.workflow'
  }

}