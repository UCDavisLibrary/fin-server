/**
 * Wrapper for API requests with Authorization token
 */
const requestCallback = require('request');
const config = require('../config');
const auth = require('../auth');

async function request(options) {
  // this sets config.jwt
  await auth.getJwt();

  if( !options.headers ) options.headers = {};

  let authUsed = false;
  if( options.jwt || config.jwt ) {
    authUsed = true;
    options.headers['Authorization'] = `Bearer ${options.jwt || config.jwt}`;
  }

  // browsers are going to try and cache requests event though we may be switching
  // accept header, just set to no-cache for this library
  options.headers['Cache-Control'] = 'no-cache';
  
  options.headers['User-Agent'] = config.userAgent;

  let writeStream = options.writeStream;
  if( writeStream !== undefined ) delete options.writeStream;

  if( writeStream ) return download(options, writeStream, authUsed);

  return new Promise((resolve, reject) => {
    requestCallback(options, (error, response, body) => {
      if( error ) {
        response = {
          request : {
            path : options.uri,
            headers : options.headers,
            body : options.body
          },
          response : {}
        }
        return reject({response, error});
      }

      response.finAuthenticated = authUsed;
      resolve(response);
    });
  });
}



function download(options, writeStream, authUsed) {
  return new Promise((resolve, reject) => {
    let handled = false;
    let response;

    writeStream.on('close', () => {
      if( handled ) return;
      handled = true;
      resolve(response);
    });

    requestCallback(options)
      .on('error', error => {
        if( handled ) return;
        handled = true;

        response = {
          request : {
            path : options.uri,
            headers : options.headers,
            body : options.body
          },
          response : {}
        }
        reject({response, error});
      })
      .on('response', res => {
        res.authUsed = authUsed;
        response = res;
      })
      .pipe(writeStream)
  });
}

module.exports = request;