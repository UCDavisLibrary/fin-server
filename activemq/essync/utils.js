const config = require('ucdlib-dams-utils/config');

function cleanupData(data) {
  if( data['@context'] ) delete data['@context'];

  var re = new RegExp('^'+config.fcrepo.host);

  for( var key in data ) {
    if( Array.isArray(data[key]) ) {
      data[key] = data[key].map(item => cleanUrl(re, item));
    } else if( typeof data[key] === 'string' ) {
      data[key] = cleanUrl(re, data[key]);
    }
  }
}

function cleanUrl(re, value) {
  if( value.match(re) ) {
    return value.replace(re, config.server.url);
  } 
  return value;
}

module.exports = {
  cleanupData
}