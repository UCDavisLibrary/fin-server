var jwt = require('jsonwebtoken');

var token = jwt.sign({ username: 'jrmerz' }, 'testtestest', {'issuer': 'library.ucdavis.edu'});
console.log('jrmerz', token);

var token = jwt.sign({ username: 'bob' }, 'testtestest', {'issuer': 'library.ucdavis.edu'});
console.log('bob', token);

token = jwt.sign({ username: 'superuser', admin: true }, 'testtestest', {'issuer': 'library.ucdavis.edu'});
console.log('superuser', token);