const ldp = require('./lib/ldp');
const pubsub = require('./lib/pubsub');

(async function() {
  await pubsub.init();
  pubsub.on('message', handleMessage);
  pubsub.listen();
  
  async function handleMessage(msg) {
    if( msg.action === 'update' ) {
      ldp.update(msg.id, msg.jsonld);
    } else if( msg.action === 'delete' ) {
      ldp.delete(msg.id);
    } else {
      console.warn('Unknown message action: '+msg.action, msg);
    }
  }
})();
