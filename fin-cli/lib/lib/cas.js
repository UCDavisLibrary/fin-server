const http = require('http');
const {URL} = require('url');
const config = require('./config');
const logger = require('./logger');
const open = require('open');
const portfinder = require('portfinder');
const path = require('path');
const fs = require('fs');

class CASLogin {

  async login() {
    let server = new CASLoginServer();

    try {
      await server.login();
    } catch(e) {
      throw e;
    }
  }

}

class CASLoginServer {

  login() {
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      this._initServer();
    });
  }

  async _initServer() {
    var port = await portfinder.getPortPromise();

    let authUrl = new URL(config.host+'/auth/cas/login');
    authUrl.searchParams.set('cliRedirectUrl', `http://localhost:${port}`);
    authUrl.searchParams.set('provideJwt', 'true');
    authUrl.searchParams.set('force', 'true');
    authUrl = authUrl.href;

    this.server = http.createServer(async (req, res) => {
      let url = new URL(`http://localhost:${port}${req.url}`);

      let jwt = url.searchParams.get('jwt');
      let username = url.searchParams.get('username');

      // if a jwt and username is not provided in request, ignore request
      // otherwise things like a favicon request could mess us up
      if( !jwt || !username ) return;

      config.jwt = jwt;
      config.username = username;

      await this._respondWithFile(req, res, 200, path.join('..', 'templates', 'login.html'));

      this.resolve();

      this.server.close();
    });

    this.server.listen(port, function() {
      logger.log();
      logger.log('Visit this URL on any device to log in:');
      logger.log(authUrl);
      logger.log();
      logger.log('Waiting for authentication...');

      open(authUrl);
    });

    this.server.on('error', (e) => {
      console.log('Failed to login with localhost :(');
      console.error(e);
      this.server.close();
      this.reject(e);
    });
  }

  _respondWithFile(req, res, statusCode, filename) {
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname, filename), 'utf-8', (err, response) => {
        if (err) {
          return reject(err);
        }
        res.writeHead(statusCode, {
          'Content-Length': response.length,
          'Content-Type': 'text/html'
        });
        res.end(response);

        setTimeout(() => {
          req.socket.destroy()
          resolve()
        }, 100);
      });
    });
  };

}

module.exports = new CASLogin();