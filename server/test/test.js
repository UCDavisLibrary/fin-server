
var jsonld = require('jsonld');
var request = require('request');
var jwt = require('../lib/jwt');

var config = require('../config');
var token = jwt.create('reindex-crawler', true);

request({
  uri: `http://fcrepo:8080/fcrepo/rest/foo`,
  headers : {
    'Authorization': `Bearer ${token}`,
    'Accept':'application/ld+json'
  }
}, (error, response, body) => {
  if( error ) return console.log(error);
  console.log(body);
});


// var text = `
// @prefix acl: <http://www.w3.org/ns/auth/acl#>.
// @prefix dc: <http://purl.org/dc/elements/1.1/>.

// <> acl:accessControl </fcrepo/rest/acl>;
//    dc:title "Hello, World!".
// `;


// jsonld.fromRDF(text, {format: 'text/turtle'}, function(err, doc) {
//   // doc is JSON-LD 
//   console.log(err);
//   console.log(doc);
// });