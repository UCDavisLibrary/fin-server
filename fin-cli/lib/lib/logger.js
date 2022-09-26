class Logger {

  init(vorpal) {
    this.vorpal = vorpal;
  }

  _getOutput() {
    if( !this.vorpal ) return console;
    return this.vorpal.activeCommand || console;
  }

  log() {
    var output = this._getOutput();
    output.log.apply(output, arguments);
  }

  redraw(msg) {
    this.vorpal.ui.redraw(msg);
  }

  error(msg, response) {
    if( response ) {
      this.log(`ERROR
${response.statusCode} ${msg}

==REQUEST==
${response.request.uri.href}
${JSON.stringify(response.request.headers, '  ', '  ')}

==RESPONSE==
${JSON.stringify(response.headers, '  ', '  ')}
`);
    } else {
      this.log(msg);
    }
  }

  logHttpStack(response) {
    response.httpStack.forEach(r => {
      this.log(r.request.method, r.request.path,  r.statusCode);
    });
  }

}

module.exports = new Logger();