
class ControllerUtils {

  errorResponse(e, message) {
    return {
      error: true, 
      message: message, 
      details: this.errorToDetails(e)
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