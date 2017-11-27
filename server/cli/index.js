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
  .command('list', 'list items in project', function (yargs) {
    console.log('listing items in project :)')
  })
  .strict()
  .help('help')
  .argv