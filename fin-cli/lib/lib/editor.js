const path = require('path');
const fs = require('fs');
const os = require('os');
const spawn = require('child_process').spawn;

const Editors = {
  vscode : {
    cmd : 'code',
    args : ['-n', '-w']
  }
}

module.exports = (body, options = {}) => {
  if( !options.editor ) options.editor = 'vscode';
  if( !Editors[options.editor] ) {
    let parts = options.editor.split(' ');
    let cmd = parts.shift();
    Editors[cmd] = {cmd, args: parts};
  }
  if( !options.ext ) options.ext = 'ttl';

  console.log(`Close ${options.editor} window to save`);

  return new Promise(async (resolve, reject) => {
    var file = prepTmpFile(body, options.ext);
    var editor = Editors[options.editor];
    var opts = editor.args.slice(0)
    opts.push(file);

    var vscode = spawn(editor.cmd, opts);      
    vscode.on('close', () => {
      var newbody = fs.readFileSync(file, 'utf-8');
      fs.unlinkSync(file);
      resolve({file, body: newbody});
    });
  });
}

function prepTmpFile(body, ext) {
  var dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fcrepo-'));
  var file = path.join(dir, 'fccli-editor.'+ext);
  fs.writeFileSync(file, body);
  return file;
}