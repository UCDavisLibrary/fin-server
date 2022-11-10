const {Command} = require('commander');
const http = require('../lib/cli/HttpCli');
const program = new Command();

const stdOptionWrapper = http.stdOptionWrapper;

stdOptionWrapper(
  program
    .command('get [path]')
    .action((path, options) => {
      http.get({path, options});
    })
)

stdOptionWrapper(
  program.command('post [path]')
    .description('Create new resources within a LDP container')
    .option('-p --prefix <prefix>', 'Additional header prefix')
    .option('-@ --data-binary <binary>', 'Specify a data file to add.  Can be to stdin')
    .option('-t --data-string <data>', 'Specify a string to be used as turtle formatted triples, use defined prefixes')
    .action((path, options) => {
      http.post({path, options})
    })
);

// put
stdOptionWrapper(
  program.command('put [path]')
    .description('Create a resource with a specified path, or replace the triples associated with a resource with the triples provided in the request body')
    .option('-p --prefix <prefix>', 'Additional header prefix')
    .option('-l --partial', 'When supplying only user metadata, not the entire container')
    .option('-@ --data-binary <binary>', 'Specify a data file to add.  Can be to stdin')
    .option('-t --data-string <data>', 'Specify a string to be used as turtle formatted triples, use defined prefixes')
    .action((path, options) => {
      http.put({path, options});
    })
);

stdOptionWrapper(
  program.command('patch [path]')
    .description('Modify the triples associated with a resource with SPARQL-Update')
    .option('-p --prefix <prefix>', 'Additional header prefix')
    .option('-@ --data-binary <binary>', 'Specify a data file to add.  Can be to stdin')
    .option('-t --data-string <data>', 'Specify a string to be used as turtle formatted triples, use defined prefixes')
    .action((path, options) => {
      http.patch({path, options});
    })
);

stdOptionWrapper(
  program.command('delete [path]')
    .option('-p --permanent', 'Permanently delete resource (remove /fcr:tombstone')
    .description('Delete a resource')
    .action((path, options) => {
      http.delete({path, options});
    })
);


stdOptionWrapper(
  program.command('find-delete [path]')
    .option('-p --permanent', 'Permanently delete resource (remove /fcr:tombstone')
    .description('Find all resources at path and delete.  Best done as root')
    .action((path, options) => {
      http.findDelete({path, options});
    })
);

stdOptionWrapper(
  program.command('head [path]')
    .description('Retrieve the resource headers')
    .action((path, options) => {
      http.head({path, options});
    })
);

stdOptionWrapper(
  program.command('move <path> <destination>')
    .description('Move a resource (and its subtree) to a new location')
    .action((path, destination, options) => {
      http.move({path, destination, options});
    })
);

stdOptionWrapper(
  program.command('copy <path> <destination>')
    .description('Copy a resource (and its subtree) to a new location')
    .action((path, destination, options) => {
      http.copy({path, destination, options});
    })
);


stdOptionWrapper(
  program.command('transaction start')
  .description('Start a new LDP transation')
  .action((options) => {
    console.log('transaction start', options);
  })
)

program.parse(process.argv);