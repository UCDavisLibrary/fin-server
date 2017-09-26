var CASAuthentication = require('cas-authentication');
var jwt = require('./jwt');
var config = require('../config');

class AuthUtils {

  constructor() {
    // Create a new instance of CASAuthentication. 
    this.cas = new CASAuthentication({
      cas_url     : config.cas.url,
      service_url : config.server.url
    });

    jwt.init(this.cas);
   

    this.middleware = {
      bounce : require('../middleware/bounce')(this.cas)
    }
  }
}

module.exports = new AuthUtils();