const ARGS = {
  s : 'status',
  H : 'reqHeaders',
  B : 'reqBody',
  h : 'resHeaders',
  b : 'resBody'
}

function handle(method, response, cliArgs={}) {
  if( !cliArgs.options ) return;
  if( !cliArgs.options.debug ) return;

  let options = {
    breaks : true
  }

  for( let key in ARGS ) {
    options[ARGS[key]] = (cliArgs.options.debug.indexOf(key) > -1) ? true : false;
  }
  
  console.log('\nDEBUG: '+method);
  response.debugHttpStack(options);
  console.log();
}

function wrapOpts(command) {
  command.option('-d, --debug <print>', '[hbsHB] Specify what components to print to user. Value should '+
  'be any combination of hbsHB where: H=request headers, B=request body,'+
  'h=response headers, b=response body and s=response HTTP status code')
  return command;
}

module.exports = {wrapOpts, handle};