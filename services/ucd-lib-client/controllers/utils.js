const {logger} = require('@ucd-lib/fin-node-utils');

class ControllerUtils {

  errorResponse(e, message) {
    logger.error(e);
    let details = this.errorToDetails(e);
    return {
      error: true, 
      message, details
    }
  }

  errorToDetails(e) {
    return {
      message : e.message,
      details : e.details,
      stack : e.stack
    }
  }

}

module.exports = new ControllerUtils();