const MessageServer = require('ucdlib-dams-utils/MessageServer');

class EsSyncMessageServer extends MessageServer {

  constructor() {
    super('Elastic Search Sync');
  }

  async handleMessage(msg) {
    console.log('essync');
    console.log(msg);
  }

}

new EsSyncMessageServer();