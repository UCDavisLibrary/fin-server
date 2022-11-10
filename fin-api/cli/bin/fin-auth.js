const {Command} = require('commander');
const config = require('../lib/cli/ConfigCli');
const program = new Command();

program.command('login')
  .description('Login using UCD CAS Authentication')
  .option('--local, -l <username>', 'Login using local UCD DAMS authentication')
  .option('--headless, -h', 'Login without local browser, copy and paste token')
  .option('--super-user, -s <username>', 'Login as a user with admin privileges using root server credentials')
  .action(options => {
    config.login(options);
  });

program.command('logout')
  .description('Logout current user')
  .action(() => {
    config.logout();
  });

program.parse(process.argv);