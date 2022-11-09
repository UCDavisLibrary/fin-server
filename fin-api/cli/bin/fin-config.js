const {Command} = require('commander');
const config = require('../lib/cli/ConfigCli');
const program = new Command();

program
  .command('show')
  .action(() => {
    config.display();
  });

program
  .command('help')
  .action(() => {
    console.log(config.getConfigDocs());
  });

program
  .command('set <attribute> <value>')
  .action((attribute, value) => {
    config.setAttribute({attribute, value});
  });


program.parse(process.argv);