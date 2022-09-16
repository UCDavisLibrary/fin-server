const net = require('net');
const DELAY_TIME = 2500;

/**
 * @function waitUntil
 * @description promise resolves when TCP response is recieved on host/port
 * 
 * @param {String} host
 * @param {Number} port
 * @param {Number} delayTime Optional.  Time to wait between connect attempts.  Defaults
 * to 2.5s.
 * 
 * @returns {Promise}
 */
module.exports = function waitUntil(host, port, delayTime) {
  if( !delayTime ) delayTime = DELAY_TIME;
  port = parseInt(port);

  return new Promise((resolve, reject) => {
    setTimeout(() => attempt(host, port, delayTime, resolve), delayTime);
  });
}

function attempt(host, port, delayTime, resolve) {
  let client = new net.Socket();
  client.connect(port, host, function() {
    resolve();
    client.destroy();
  });
  client.on('error', function(e) {
    setTimeout(() => attempt(host, port, delayTime, resolve), delayTime);
    client.destroy(); 
  });
}