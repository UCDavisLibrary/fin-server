const api = require('../../..');
const config = require('./config');
const request = require('request');

class AuthModel {

  _request(options) {
    return new Promise((resolve, reject) => {
      request(options,  (error, response, body) => {
        if( error ) return reject(error);
        resolve({response, body});
      });
    });
  }

  async loginRefreshToken(options) {
    var req = {
      method : 'POST',
      uri : (options.host ? options.host : config.host) + '/auth/token/verify',
      form : {
        username: options.username, 
        token: options.refreshToken
      }
    }

    var {response, body} = await this._request(req);

    if( api.isSuccess(response) ) {
      body = JSON.parse(body);

      if( body.error ) {
        return false;
      } else {
        config.jwt = body.jwt;
        return true;
      }
    }
    return false;
  }

  async getRefreshToken(jwt, options = {}) {
    var req = {
      method : 'GET',
      uri : (options.host ? options.host : config.host) + '/auth/token/create',
      headers : {
        Authorization : `Bearer ${jwt}`
      },
      qs : {
        username: options.username
      }
    }

    var {response, body} = await this._request(req);
    
    if( api.isSuccess(response) ) {
      body = JSON.parse(body);

      if( body.success ) {
        config.refreshToken = body.token;
      }
    }
  }

  async loginPassword(options) {
    var req = {
      method : 'POST',
      uri : (options.host ? options.host : config.host) + '/auth/local',
      form : {
        username: options.username, 
        password: options.password
      }
    }

    var {response, body} = await this._request(req);
    var body = JSON.parse(body);

    if( body.error ) {
      return false;
    } else {
      config.username = options.username;
      config.password = options.password;
      config.jwt = body.jwt;
      return true;
    }
  }

}

module.exports = new AuthModel();