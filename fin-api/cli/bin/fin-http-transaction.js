const {Command} = require('commander');
const http = require('../lib/cli/HttpCli');
const program = new Command();

const stdOptionWrapper = http.stdOptionWrapper;

stdOptionWrapper(
  program
    .command('start')
    .action((options) => {
      http.startTransaction({options});
    })
)

stdOptionWrapper(
  program
    .command('commit')
    .action((options) => {
      http.commitTransaction({options});
    })
)

stdOptionWrapper(
  program
    .command('rollback')
    .action((options) => {
      http.rollbackTransaction({options});
    })
)

program.parse(process.argv);