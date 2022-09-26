/**
 * All methods return this response
 */

class ApiResponse {

  constructor() {
    // all http responses made for method call
    this.httpStack = [];

    // last http response made for method call
    this.last = null;
    
    // data to return for method (may be a response)
    this.data = null;
    
    // was there an known error
    this.error = null;
  }

  /**
   * @method checkStatus
   * @description check the status code of the last response
   * 
   * @param {Number} statusCode
   * 
   * @returns {Boolean} 
   */
  checkStatus(statusCode) {
    if( !this.last ) return false;
    return (this.last.statusCode === statusCode);
  }

  /**
   * @method push
   * @description push a new http response on to the http
   * stack.  Optionally set response as data
   * 
   * @param {Object} response http response
   * @param {Boolean} setData set http response as data
   */
  push(response, setData = false) {
    this.httpStack.push(response);
    this.last = response;
    if( setData ) this.setData(response);
    return this;
  }

  /**
   * @method appendResponse
   * @description append a ApiResponse httpStack to
   * this response httpStack
   * 
   * @param {ApiResponse} response
   **/
  appendResponse(response) {
    this.httpStack = this.httpStack.concat(response.httpStack);
    this.last = response.last;

    if( !this.error && response.error ) {
      this.error = response.error;
    }

    this.setData(response.data);
    return this;
  }

  setData(response) {
    this.data = response;
    return this;
  }

  setError(error) {
    if( typeof error === 'string' ) {
      error = new Error(error);
    }

    this.error = error;
    return this;
  }

  debugHttpStack(options={}) {
    if( options.breaks === undefined ) options.breaks = true;
    if( options.reqHeaders === undefined ) options.reqHeaders = true;
    if( options.resHeaders === undefined ) options.resHeaders = true;
    if( options.reqBody === undefined ) options.reqBody = true;
    if( options.resBody === undefined ) options.resBody = true;
    if( options.status === undefined ) options.status = true;

    if( options.breaks ) console.log('START HTTP REQUEST STACK TRACE');
    this.httpStack.forEach(r => {
      if( options.breaks ) console.log('\n+++ START REQUEST');
      console.log(r.request.method+' '+r.request.path);
      if( options.status ) console.log(r.statusCode);
      if( options.reqHeaders ) {
        if( options.breaks ) console.log('REQUEST HEADERS');
        console.log(r.request.headers);
      }
      if( options.reqBody ) {
        if( options.breaks ) console.log('REQUEST BODY');
        console.log(r.request.body);
      }
      if( options.resHeaders ) {
        if( options.breaks ) console.log('RESPONSE HEADERS');
        console.log(r.headers);
      }
      if( options.resBody ) {
        if( options.breaks ) console.log('RESPONSE BODY')
        if( options.body ) console.log(r.body);
      }
      if( options.breaks ) console.log('--- END REQUEST\n');
    });
    if( options.breaks ) console.log('END HTTP REQUEST STACK TRACE');
  }

}

module.exports = ApiResponse;