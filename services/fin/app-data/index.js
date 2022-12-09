const express = require('express');
const {logger, config} = require('@ucd-lib/fin-service-utils');
const {exec, spawn} = require('child_process')
const path = require('path');
const {CronJob} = require('cron');
const app = express();

function run(script, env={}) {
  script = path.resolve(__dirname, 'scripts', script+'.sh');
  env = Object.assign({}, process.env, env);
  let opts = {shell:true, env};

  return new Promise((resolve, reject) => {
    const cmd = spawn(script, opts);
    cmd.stdout.on('data', data => logger.info(data.toString()));
    cmd.stderr.on('data', data => logger.error(data.toString()));
    cmd.on('close', code => {
      logger.info(script+' completed.  code: '+code);
      resolve(code)
    });
  });
}

app.get('/backup', (req, res) => {
  run('backup');
  res.json({started: true});
});

app.get('/restore', (req, res) => {
  run('restore');
  res.json({started: true});
});

if( config.backups.enabled === true ) {
  new CronJob(config.backups.cron,
    () => run('backup'),
    null,
    true,
    'America/Los_Angeles'
  );
}

if( config.backups.env ) {
  logger.info('DATA_ENV flag set, checking init state');
  run('init');
}

app.listen(3000, () => {
  logger.info('Backup service running on port 3000');
})