const WORKSPACE_DIR = '/data/workspace';
const UPLOAD_DIR = '/data/uploads';

const express = require('express');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: UPLOAD_DIR+'/' });
const fs = require('fs-extra');
const uuid = require('uuid');
const convert = require('./lib/convert');
const path = require('path');



(async function() {
  if( fs.existsSync(WORKSPACE_DIR) ) {
    await fs.remove(WORKSPACE_DIR);
  }
  if( fs.existsSync(UPLOAD_DIR) ) {
    await fs.remove(UPLOAD_DIR)
  }
  await fs.mkdirp(WORKSPACE_DIR);
  await fs.mkdirp(UPLOAD_DIR);
})();


app.get('/', (req, res) => {
  res.send('Please POST file');
});

app.post('/', upload.any(), async (req, res) => {
  if( !req.files ) {
    return res.status(400).send('No file found, please POST file with content-type="multipart/form-data"');
  }
  if( req.files.length > 1 ) {
    for( let file of req.files ) {
      await fs.remove(file.path);
    }
    return res.status(400).send('More than one file found, please POST one video file at a time');
  }

  let file = req.files[0];
  let outputdir = path.join(WORKSPACE_DIR, uuid.v4());

  try {
    let zipFile = await convert.run(file.path, file.originalname, outputdir);

    res.set('content-type', 'application/zip');
    res.set('content-disposition', `attachment; filename="${path.parse(file.originalname).name}.zip"`);
    fs.createReadStream(zipFile)
      .pipe(res)
      .on('close', async () => {
        await convert.cleanup(file.path, outputdir);
      });
  } catch(e) {
    await convert.cleanup(file.path, outputdir);
    res.status(500).send(e.message);
  }
});

app.listen(3333, () => {
  console.log('video-stream-converter up and running on port 3000');
});