let ex = require('./export');
let im = require('./import');
let api  = require('../api');
let config = require('../config');

(async function() {
  config.host = 'http://localhost:3000'
  config.jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpybWVyekB1Y2RhdmlzLmVkdSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NTcyNzExODQsImV4cCI6MTU1ODQ4MDc4NCwiaXNzIjoibGlicmFyeS51Y2RhdmlzLmVkdSJ9.azRUulpf6BXO55ZXL93YBd9Ycj6vSUU_TxUvZGw9nDo';

  // await new ex(api).run({
  //   collectionName: 'ex-sherry-lehmann', 
  //   fsRoot: process.cwd()+'/io-out-test',
  //   ignoreBinary : true
  // });

  await new im(api).run({
    collectionName: 'testing-io', 
    fsPath: process.cwd()+'/test/ex-sherry-lehmann',
    ignorePost: true,
    ignoreRemoval: true
  });
})();