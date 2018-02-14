var yargs = require('yargs');

process.on('unhandledRejection', (e) => {
  console.error(e);
});

var argv = yargs
  .usage('usage: $0 <command>')
  .command('admin', 'preform admin functions', function (yargs) {
    return require('./cmds/admin')(yargs);
  })
  .command('example', 'init repo with example data', function (yargs) {
    require('./cmds/example-repo')();
  })
  .command('cache', 'admin redis cache', function (yargs) {
    return require('./cmds/cache')(yargs);
  })
  .strict()
  .help('help')
  .argv