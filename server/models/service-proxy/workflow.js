const serviceModel = require('../services');
const Busboy = require('busboy');
const gcs = require('./gcs');

class ServiceWorkflowUtils {

  async runTasks(req) {
    let workflowId = await this.createWorkflow(req);
    let formFields = await this.gcsUpload(req, workflowId);
    return {workflowId, formFields};
  }

  async createWorkflow(req) {
    if( !req.finService.workflow || req.method !== 'POST' ) return;
    return serviceModel.createWorkflowContainer(req.finService.id, (req.user || {}).username || 'anonymous');
  }

  async gcsUpload(req, workflowId) {
    if( !req.finService.workflow || req.method !== 'POST' ) return;
    if( !req.finService.workflow.gcsFileUpload ) return;
    let form = await parsePost(req);

    for( let fieldname in form.files ) {
      let f = form.files[fieldname];
      let gcsPath = await gcs.uploadFile({
        pairTreeId : workflowId,
        filename : f.fieldname,
        fileStream : f.file
      });
      form.fields[fieldname] = gcsPath;
    }

    return form.fields;
  }
}

function parsePost(req) {
  let busboy = new Busboy({ headers: req.headers });
  let form = {
    files : {},
    fields : {}
  };

  let p = new Promise((resolve, reject) => {

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      form.files[fieldname] = {file, filename}
    });
    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      form.fields[fieldname] = val;
    });

    busboy.on('finish', () => resolve(form));
  });

  req.pipe(busboy);
  return p;
}


module.exports = ServiceWorkflowUtils;