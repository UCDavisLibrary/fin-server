const serviceModel = require('../../services');

class ServiceWorkflowUtils {

  async runTasks(req) {
    if( !req.finService.workflow || req.method !== 'POST' ) return null;
    return  this.createWorkflow(req);
  }

  async createWorkflow(req) {
    return serviceModel.createWorkflowContainer(req.finService, (req.user || {}).username || 'anonymous');
  }

}

module.exports = new ServiceWorkflowUtils();