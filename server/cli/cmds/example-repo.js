const { spawn } = require('child_process');
const fs = require('fs-extra');
const {jwt} = require('@ucd-lib/fin-node-utils');

const USER = 'fin-example-user';
const REPO = 'fin-example-repository';
const REPO_URL = `https://github.com/UCDavisLibrary/${REPO}`;

async function run() {
  let repoDir = '/'+REPO;
  let token = jwt.create(USER, true);

  if( fs.existsSync(repoDir) ) {
    console.log('Cleaning existing repo');
    await fs.remove(repoDir);
  }

  await exec(`git clone ${REPO_URL}`, {cwd: '/'});
  await exec(`fin config set host http://localhost:3001`);
  await exec(`fin config set basePath /fcrepo/rest`);
  await exec(`fin config set jwt ${token}`);
  await exec(`./initialize`, {cwd: repoDir});
}

function exec(cmd, options = {}) {
  console.log(cmd);

  options.shell = '/bin/bash';
  let args = cmd.split(' ');
  cmd = args.shift();

  return new Promise((resolve, reject) => {
    
    let ps = spawn(cmd, args, options);

    ps.stdout.on('data', data => console.log(data.toString()));
    ps.stderr.on('data', data => console.error(data.toString()));
    ps.on('close', (code) => {
      if (code !== 0) reject();
      else resolve();
    });
  });
}

module.exports = run;
