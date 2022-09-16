
class ControllerUtils {

  errorResponse(e, message) {
    let details = this.errorToDetails(e);
    return {
      error: true, 
      message, details
    }
  }

  errorToDetails(e) {
    return {
      message : e.message,
      details : e.details
    }
  }

}

module.exports = new ControllerUtils();