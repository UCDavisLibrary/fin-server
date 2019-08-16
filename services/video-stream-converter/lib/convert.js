const path = require('path');
const fs = require('fs-extra');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const BASE_FFMPEG_VIDEO_PARAMS = "-preset slow -tune film -vsync passthrough -write_tmcd 0 -an -c:v libx264 -x264opts 'keyint=25:min-keyint=25:no-scenecut' -crf 22";
const MP4BOX = '/gpac/gpac-0.8.0/bin/gcc/MP4Box';

class Convert {

  async run(infile, orgFilename, outputdir) {
    if( fs.existsSync(outputdir) ) await fs.remove(outputdir);
    
    let compressedDir = path.join(outputdir, 'compressed');
    await fs.mkdirp(compressedDir);

    let fileNames = this.getFileNames(orgFilename, compressedDir);
 
    let stdout, stderr;
    console.log('audio');
    ({stdout, stderr} = await exec(this.audioCmd(infile, fileNames.audio)));
    console.log(stdout, stderr);
    console.log('high res');
    ({stdout, stderr} = await exec(this.highResCmd(infile, fileNames.highRes)));
    console.log(stdout, stderr);
    console.log('low res');
    ({stdout, stderr} = await exec(this.lowResCmd(infile, fileNames.lowRes)));
    console.log(stdout, stderr);

    console.log('manifest');
    ({stdout, stderr} = await exec(this.manifestCmd(fileNames)));
    console.log(stdout, stderr);

    console.log('compress');
    console.log(`zip -r ../${fileNames.zip} ./*`, {cwd: compressedDir});
    ({stdout, stderr} = await exec(`zip -r ../${fileNames.zip} ./*`, {cwd: compressedDir}));
    console.log(stdout, stderr);
    console.log('done');

    return path.join(outputdir, fileNames.zip);
  }

  async cleanup(infile, outputdir) {
    await fs.remove(infile);
    await fs.remove(outputdir);
  }

  manifestCmd(fileNames) {
    return `${MP4BOX} -dash-strict 2000 -rap -frag-rap -bs-switching no -profile "dashavc264:live" "${fileNames.highRes}" "${fileNames.lowRes}"  "${fileNames.audio}" -out "${fileNames.manifest}"`;
  }

  audioCmd(infile, outputdir) {
    return `ffmpeg -y -i "${infile}" -c:a aac -b:a 192k -vn "${outputdir}"`
  }

  highResCmd(infile, outfile) {
    return `ffmpeg -y -i "${infile}" ${BASE_FFMPEG_VIDEO_PARAMS} -maxrate 5000k -bufsize 10000k -pix_fmt yuv420p -f mp4 "${outfile}"`
  }

  lowResCmd(infile, outfile) {
    return `ffmpeg -y -i "${infile}" ${BASE_FFMPEG_VIDEO_PARAMS} -maxrate 2000k -bufsize 4000k -pix_fmt yuv420p -f mp4 "${outfile}"`
  }

  getFileNames(orgFilename, outputdir) {
    let info = path.parse(orgFilename);
    return {
      lowRes : path.join(outputdir, info.name+'_2000.mp4'),
      highRes : path.join(outputdir, info.name+'_5000.mp4'),
      audio : path.join(outputdir, info.name+'.m4a'),
      manifest : path.join(outputdir, info.name+'.mpd'),
      zip : info.name+'.zip'
    }
  }

}

module.exports = new Convert();