const env = process.env;

const config = {
  /**
   * Fin server host url eg. http://mydams.org
   */
  host : env.FCREPO_HOST || '',
  fcBasePath : env.FCREPO_REST_PATH || '/fcrepo/rest',
  
  roles : {
    admin : 'admin'
  },

  /**
   * Auth Information
   */
  jwt : env.FCREPO_JWT || '',
  refreshToken : '',
  username : env.FCREPO_USERNAME || 'fedoraUser',
  password : env.FCREPO_PASSWORD || 'fedoraUser',

  adminUsername : env.FCREPO_ADMIN_USERNAME || 'fedoraAdmin',
  adminPassword : env.FCREPO_ADMIN_PASSWORD || 'fedoraAdmin',

  // are we making direct calls to fcrepo or via the fin gateway?
  directAccess : false,

  /**
   * Open transaction token
   */
  transactionToken : '',

  /**
   * User agent header
   */
  userAgent : 'fin-api'
}

module.exports = config;