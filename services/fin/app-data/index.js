const express = require('express');
const {logger, config} = require('@ucd-lib/fin-service-utils');
const {exec} = require('child_process')
const path = require('path');
const {CronJob} = require('cron');
const { backups } = require('../node-utils/config');
const app = express();

function run(script, env={}) {
  script = path.resolve(__dirname, 'scripts', script+'.sh');
  env = Object.assign({}, process.env, env);
  let opts = {
    env
  }

  return new Promise((resolve, reject) => {
    exec(script, opts, (error, stdout, stderr) => {
      logger.info(script, {stdout, stderr});

      if( error ) reject(error);
      else resolve({stdout, stderr});
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

// if( config.backups.env ) {
if( process.env.DATA_ENV ) {
  run('init');
}

app.listen(3000, () => {
  logger.info('Backup service running on port 3000');
})