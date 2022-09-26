// loader for URL package... webpack mock doesn't support the URL object
// if we are in browser land, use the global URL, otherwise use lib.
let URL;
if( typeof window === 'undefined' ) {
  URL = require('url').URL;
} else {
  URL = window.URL;
}
module.exports = URL;