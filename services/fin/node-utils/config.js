const fs = require('fs');
const path = require('path');
const env = process.env;
const COMMON_URI = require('./lib/common-rdf-uris');

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
    cacheExpireTime : process.env.FIN_CACHE_EXPIRE || (60*60*12)
  },

  gateway : {
    host : 'http://gateway:3001'
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
    database : env.PG_DATABASE || 'fcrepo',
    searchPath : ['public', 'essync', 'label_service', 'finac']
  },

  jwt : {
    jwksUri : process.env.JWT_JWKS_URI,
    secret : process.env.JWT_SECRET,
    issuer : process.env.JWT_ISSUER,
    // expires in seconds
    ttl : process.env.JWT_TTL ? parseInt(process.env.JWT_TTL) : (60 * 60 * 24 * 14),
    cookieName : process.env.JWT_COOKIE_NAME || 'fin-jwt'
  },

  oidc : {
    clientId : env.OIDC_CLIENT_ID,
    baseUrl : env.OIDC_BASE_URL,
    secret : env.OIDC_SECRET,
    scopes : env.OIDC_SCOPES || 'roles openid profile email acr',
    finLdpServiceName : env.OIDC_FIN_LDP_SERVICE_NAME || 'keycloak-oidc'
  },

  finac : {
    agents : {
      admin : 'admin',
      discover : 'discover',
      protected : 'protected',
      public : 'public'
    },
    defaultAccessTime : 60 * 60 * 3 // 3 hours
  },

  essync : {
    ignoreTypes : [
      COMMON_URI.TYPES.BINARY,
      COMMON_URI.TYPES.FIN_IO_INDIRECT,
      COMMON_URI.TYPES.WEBAC
    ],
    
    // if these attributes exist, the ISO 8601 date will be stripped for
    // everything but the year and a new attribute created with the name
    // of the given key in the hash
    dateToYear : {
      datePublished : 'yearPublished'
    },

    bagOfFiles : {
      type : 'http://digital.ucdavis.edu/schema#BagOfFiles'
    }
  },

  elasticsearch : {
    host : esHostname,
    port : esPort,
    username : process.env.ELASTIC_USERNAME || 'elastic',
    password : process.env.ELASTIC_PASSWORD || 'elastic',
    get connStr () {
      return `http://${this.host}:${this.port}`
    }, 
    log : process.env.ES_LOG_LEVEL || 'error',
    compactTypeInclude : [
      new RegExp('http://digital.ucdavis.edu/schema#'),
      new RegExp('http://schema.org/')
    ],
    fields : {
      exclude : [
        'node.indexableContent', 
        'node.createdBy', 'node.lastModifiedBy', 'node._', 'node.textIndexable'
      ],
      excludeCompact : [
        'node.indexableContent', 
        'node.createdBy', 'node.lastModifiedBy', 'node._',
        'node.image', 'node.textIndexable', 'node.lastModified'
      ]
    }
  },

  redis : {
    host : process.env.REDIS_HOST || 'redis',
    port : process.env.REDIS_PORT || 6379,
    refreshTokenExpire : (86400 * 30)
  },

  backups : {
    enabled : (env.DATA_BACKUPS === 'true'),
    cron : env.BACKUP_CRON || '0 4 * * *',
    env : env.DATA_ENV
  },

  models : {
    rootDir : env.FIN_MODEL_ROOT || '/fin/services/models'
  },

  google : {serviceAccountExists, serviceAccountFile},

  workflow : {
    root : '/.workflow'
  }

}