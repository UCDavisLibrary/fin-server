const config = require('./config');

/**
 * Construct prefix header based on global params and config
 */
module.exports = function(args, sparql = false) {
  if( args.options['no-prefix'] ) {
    return '';
  }

  var prefixes = [];
  for( var key in config.globalPrefix ) {
    prefixes.push(addPrefix(key, config.globalPrefix[key], sparql));
  }

  if( args.options.prefix ) {
    if( Array.isArray(args.options.prefix) ) {
      args.options.prefix.forEach(prefix => {
        addArgPrefix(prefix, prefixes, sparql);
      });
    } else {
      addArgPrefix(args.options.prefix, prefixes, sparql);
    }
  }

  return prefixes.join('\n');
}

function parseArgPrefix(prefix) {
  prefix = prefix.split('=').map(part => part.trim());
  return {key: prefix[0], value: prefix[1]};
}

function addArgPrefix(arg, prefixes, sparql) {
  let prefix = parseArgPrefix(arg);

  if( !config.globalPrefix[prefix.key] ) {
    prefixes.push(addPrefix(prefix.key, prefix.value, sparql));
  }
}

function addPrefix(key, value, sparql) {
  if( sparql ) return `PREFIX ${key}: <${value}>`;
  else return `@prefix ${key}: <${value}> .`
}