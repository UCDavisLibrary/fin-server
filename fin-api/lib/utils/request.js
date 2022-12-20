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

  let directAccess = options.directAccess !== undefined ? options.directAccess : config.directAccess;
  if( (options.jwt || config.jwt) && directAccess === false ) {
    authUsed = true;
    options.headers['Authorization'] = `Bearer ${options.jwt || config.jwt}`;

  } else if( directAccess === true ) {
    authUsed = true;
    let payload = {};
    let principals = [];

    if( options.jwt || config.jwt ) {
      payload = auth.getJwtPayload(options.jwt || config.jwt);

      if( payload.username ) {
        principals.push(payload.username);
      }

      (payload.roles || []).forEach(role => {
        if( !principals.includes(role) ) principals.push(role);
      });
    }

    if( options.superuser === true || config.superuser === true ) {
      if( !principals.includes(config.roles.admin) ) {
        principals.push(config.roles.admin);
      }
      let basicAuth = Buffer.from(config.adminUsername+':'+config.adminPassword).toString('base64');
      options.headers['Authorization'] = `Basic ${basicAuth}`;
    } else {
      let basicAuth = Buffer.from(config.username+':'+config.password).toString('base64');
      options.headers['Authorization'] = `Basic ${basicAuth}`;
    }

    if( principals.length ) {    
      options.headers['x-fin-principal'] = principals.join(',');
    }
  }

  if( options.transactionToken || config.transactionToken ) {
    options.headers['Atomic-ID'] = options.transactionToken || config.transactionToken;
  }

  // browsers are going to try and cache requests event though we may be switching
  // accept header, just set to no-cache for this library
  options.headers['Cache-Control'] = 'no-cache';
  
  options.headers['User-Agent'] = config.userAgent;

  let writeStream = options.writeStream;
  if( writeStream !== undefined ) delete options.writeStream;

  if( writeStream ) return download(options, writeStream, authUsed);

  if( options.printCurl ) printCurl(options);

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

      response.request.url = options.uri;
      response.finAuthenticated = authUsed;
      resolve(response);
    });
  });
}

function printCurl(options) {
  let headers = [];
  let body = '';

  for( let key in options.headers ) {
    if( ['Cache-Control', 'User-Agent'].includes(key) ) continue;
    if( key === 'Authorization' ) {
      headers.push(`-u "${Buffer.from(options.headers[key].replace(/Basic /, ''), 'base64').toString('utf8')}"`);
      continue;
    }
    headers.push(`-H "${key}: ${options.headers[key].replace(/"/g, '\\"')}"`);
  }
  if( options.body && options.body.path ) {
    body = `--binary-data "@${options.body.path}"`
  }

  let method = '-X '+options.method;
  if( options.method === 'HEAD' ) method = '-I'

  console.log(`curl ${method} ${headers.join(' ')} ${options.uri}`);
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