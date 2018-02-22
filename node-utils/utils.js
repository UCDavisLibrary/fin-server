const {URL} = require('url');

/**
 * @method getRootDomain
 * @description given a url string, return the root domain name. So for
 * http://sub.host.com/foo would return host.com.
 * 
 * @param {String} url
 * 
 * @returns {String}
 */
function getRootDomain(url) {
  if( !url.match(/^http/) ) url = 'http://'+url;
  url = new URL(url);
  let parts = url.hostname.replace(/\.$/, '').split('.');
  if( parts.length === 1) return parts[0];
  return parts.splice(parts.length-2, parts.length-1).join('.').toLowerCase();
}

module.exports = {
  getRootDomain
}