const config = require('./config');
const request = require('request');

/**
 * If we have a refresh token or a username/password and the jwt is expired
 * attempt to generate a new jwt
 */
class Auth {

  async getJwt() {
    if( config.jwt ) {
      // check that jwt is not expired
      let payload = Buffer.from(config.jwt.split('.')[1], 'base64');
      payload = JSON.parse(payload);
      if( payload.exp*1000 > Date.now() ) {
        return config.jwt;
      }
    }

    // now we either don't have a jwt or we have an exired jwt
    
    // check if we have a refresh token
    if( config.refreshToken && config.username ) {
      let success = await this.loginRefreshToken();
      if( success ) return config.jwt;
    }

    // check if we have a username / password
    if( config.password && config.username ) {
      let success = await this.loginPassword();
      if( success ) return config.jwt;
    }

    config.jwt = '';
    return '';
  }

  async loginRefreshToken() {
    var req = {
      method : 'POST',
      uri : `${config.host}/auth/token/verify`,
      form : {
        username: config.username, 
        token: config.refreshToken
      }
    }

    var {response, body} = await this.request(req);

    if( response.statusCode >= 200 && response.statusCode < 300 ) {
      var body = JSON.parse(body);

      if( !body.error ) {
        config.jwt = body.jwt;
        return true;
      }
    }
    return false;
  }

  async loginPassword() {
    var req = {
      method : 'POST',
      uri : `${config.host}/auth/local`,
      form : {
        username: config.username, 
        password: config.password
      }
    }

    var {response, body} = await this.request(req);

    if( response.statusCode >= 200 && response.statusCode < 300 ) {
      var body = JSON.parse(body);

      if( !body.error ) {
        config.jwt = body.jwt;
        return true;
      }
    }
    return false;
  }

  // promise based request
  request(options) {  
    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if( error ) {
          response = {
            request : {
              method : options.method || 'GET',
              path : options.uri,
              headers : options.headers,
              body : options.body
            }
          }
          return reject({response, error});
        }
        resolve({response, body});
      });
    });
  }

}

module.exports = new Auth();