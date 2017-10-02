var request = require('request');
var jwt = require('../lib/jwt');
var config = require('../config');
var path = require('path');
var fs = require('fs');

var token = jwt.create('simple-acl-bot', true);
console.log(token);

(async function() {
  await send('acl', path.join(__dirname, 'acl.ttl'));
  await send('foo', path.join(__dirname, 'foo.ttl'));
  await send('acl/authz', path.join(__dirname, 'authz.ttl'));
  require('../lib/reindex');
})()

async function send(path, file) {
  console.log('Creating', `${config.fcrepo.host}${config.fcrepo.root}${path}`)

  var options = {
    method: 'DELETE',
    uri: `${config.fcrepo.host}${config.fcrepo.root}${path}/fcr:tombstone`,
    headers : {
      'Authorization': `Bearer ${token}`,
    }
  }

  try { 
    var resp = await awaitRequest(options);
    console.log('Deleted existing resource tombstone')
  } catch(e) {
    console.log(e.message);
  }


  var options = {
    method: 'PUT',
    uri: `${config.fcrepo.host}${config.fcrepo.root}${path}`,
    body: fs.createReadStream(file),
    headers : {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'text/turtle'
    }
  }

  try { 
    await awaitRequest(options);
    console.log('Created new resource');
  } catch(e) {
    console.log(e.message);
  }
}

function awaitRequest(options) {
  return new Promise((resolve, reject) => {
    request(options,  (error, response, body) => {
      if( error ) return reject(error);
      resolve({response, body});
    });
  });
}
