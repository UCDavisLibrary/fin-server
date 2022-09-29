var N3 = require('n3');
var parser = N3.Parser();

// parse turtle using n3 library
module.exports = function(turtle) {
  return new Promise((resolve, reject) => {
    var resp = {
      triples : [],
      prefixes : {}
    }

    parser.parse(turtle, (error, triple, prefixes) => {
      if( error ) return reject(error);

      if( triple ) {
        resp.triples.push(triple);
      } else {
        resp.prefixes = prefixes;
        resolve(resp);
      }
    });
  });
}