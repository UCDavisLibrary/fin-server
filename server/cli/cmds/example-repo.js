const { exec } = require('child_process');
const fs = require('fs-extra');

const REPO = 'fin-example-repository';
const REPO_URL = `https://github.com/UCDavisLibrary/${REPO}`;

module.exports = async () => {
  let repoDir = '/'+REPO;

  if( fs.existsSync(repoDir) ) {
    await fs.remove(repoDir);
  }

  let response = await execP(`git clone ${REPO_URL}`, {cwd: '/'});
  console.log(response.stderr);
  console.log(response.stdout);

  response = await execP(`./initialize`, {cwd: repoDir});
  console.log(response.stderr);
  console.log(response.stdout);
}

function execP(cmd, options = {}) {
  console.log(cmd);
  options.shell = '/bin/bash';
  options.maxBuffer = 100000 * 1024;

  return new Promise((resolve, reject) => {
    exec(cmd, options, (error, stdout, stderr) => {
      if( error ) reject(error);
      else resolve({stdout, stderr});
    });
  });
}
