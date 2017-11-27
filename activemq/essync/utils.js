const {config} = require('@ucd-lib/fin-node-utils');
const {URL} = require('url');

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

  return data;
}

function cleanUrl(re, value) {
  if( typeof value === 'string' && value.match(re) ) {
    return value.replace(re, config.server.url);
  }
  return value;
}

function isCollection(types) {
  for( let i = 0; i < types.length; i++ ) {
    if( types[i].match(/:Collection$/) ) {
      return true;
    }
  }
  return false;
}

function isDotPath(path) {
  if( path.match(/http/) ) {
    let urlInfo = new URL(path);
    path = urlInfo.pathname;
  }
  
  path = path.split('/');
  for( var i = 0; i < path.length; i++ ) {
    if( path[i].match(/^\./) ) {
      return true;
    }
  }
  
  return false;
}


module.exports = {
  cleanupData,
  isCollection,
  isDotPath
}