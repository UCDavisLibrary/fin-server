var yargs = require('yargs')
var argv = yargs
  .usage('usage: $0 <command>')
  .command('admin', 'preform admin functions', function (yargs) {
    return require('./cmds/admin')(yargs);
  })
  .command('list', 'list items in project', function (yargs) {
    console.log('listing items in project :)')
  })
  .strict()
  .help('help')
  .argv

// var yargs = require("yargs");

// var argv = yargs.usage("$0 command")
//     .command("foo", "top level command", function(yargs) {
//         return yargs
//             .command("bar", "child command of foo", function() {
//                 console.log("barr!");
//             });
//     })
//     .demand(1, "must provide a valid command")
//     .help("h")
//     .alias("h", "help")
//     .argv