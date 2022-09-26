const env = process.env;

class Config {

  constructor() {
    /**
     * Fin server host url eg. http://mydams.org
     */
    this.host = env.FCREPO_HOST || '';
    this.fcBasePath = env.FCREPO_REST_PATH || '/fcrepo/rest'
    
    /**
     * Auth Information
     */
    this.jwt = env.FCREPO_JWT || '';
    this.refreshToken = '';
    this.username = env.FCREPO_USERNAME || 'fedoraUser';
    this.password = env.FCREPO_PASSWORD || 'fedoraUser';

    // are we making direct calls to fcrepo or via the fin gateway?
    this.directAccess = false;

    /**
     * Open transaction token
     */
    this.transactionToken = '';

    /**
     * User agent header
     */
    this.userAgent = 'fin-node-api';
  }

}

module.exports = new Config();