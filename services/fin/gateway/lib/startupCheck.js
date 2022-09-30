/**
 * Wait for fcrepo to respond before we attempt to start server
 */
const api = require('@ucd-lib/fin-api');

module.exports = async function(callback) {
  let c = 0;
  while( !(await check(c)) ) {
    c++;
  }

  callback();
}

async function check(count) {
  await wait(count);
  let resp = await api.get({path: '/'});
  if( resp.error ) return false;
  return resp.checkStatus(200) || resp.checkStatus(401);
}

function wait(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), count*100);
  });
}