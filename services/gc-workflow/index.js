const ldp = require('./lib/ldp');
const pubsub = require('./lib/pubsub');
const express = require('express');
const Busboy = require('busboy');
const app = express();

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

async function gcsUpload(req, workflowId) {
  if( !req.finService.workflow.gcsFilePost ) return;

  let form = await parsePost(req, workflowId);

  for( let fieldname in form.files ) {
    form.fields[fieldname] = await form.files[fieldname];
  }
  return form.fields;
}

function parsePost(req, workflowId) {
  let busboy = new Busboy({ headers: req.headers });
  let form = {
    fields : {},
    files : {}
  };

  let p = new Promise((resolve, reject) => {

    busboy.on('file', async (fieldname, file, filename, encoding, mimetype) => {
      // form.files[fieldname] = {file, filename}
      form.files[fieldname] = gcs.uploadFile({
        pairTreeId : workflowId,
        filename : filename,
        fileStream : file
      });
    });
    busboy.on('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
      form.fields[fieldname] = val;
    });

    busboy.on('finish', () => resolve(form));
  });

  req.pipe(busboy);
  return p;
}

app.listen(3000, () => {
  console.log('gc-worker up and running');
});