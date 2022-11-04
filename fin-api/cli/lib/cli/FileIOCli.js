const api = require('../../..');

const path = require('path');
const location = require('../lib/location');
const debug = require('../lib/debug');

class FileIOCli {

  init(vorpal) {
    debug.wrapOpts(vorpal
      .command('io import <root-fs-path> ')
      .option('-m, --force-metadata-update', 'Always re-PUT metadata, ignore sha check')
      .option('-r --dry-run', 'do not write any containers')
      .option('-r --sync-deletes', 'Remove files from fedora that do not exist on disk')
      .description('Import a collection from Fin filesystem representation. root-fs-path should be the folder containing the .fin and collection-name.ttl files')
      .action(args => this.import(args)))

    debug.wrapOpts(vorpal
      .command('io export <root-fcrepo-path> [fs-path]')
      .option('-n --clean', 'Completely remove directory if it exists before starting export')
      .option('-i --ignore-binary', 'Ignore binary files, metadata only export')
      .option('-i --ignore-metadata', 'Ignore metadata files, binary only export')
      .option('-r --dry-run', 'do not download any files')
      .option('-f --include-filter <path-regex>', 'only download files match fcrepo path regex. supply with slashes and do not include collection name; ex: /part\\/.*/i')
      .option('-s --sub-paths <paths>', 'only export containers under specified nested fcrepo paths. Comma separate')
      .option('-h --host <url>', 'Set remote fedora host, just for this command')
      .description('Export collection to Fin filesystem representation'))
      .action(args => this.export(args));
  }

  async import(args) {
    let rootPath = location.makeAbsolutePath(args['root-fs-path'] || '.');
    let includeFilter = args.options['include-filter'] ? this._paramToRegex(args.options['include-filter']) : null;
    let dryRun = args.options['dry-run'] || false;
    let subPaths = args.options['sub-paths'] ? args.options['sub-paths'].split(',').map(p => p.trim()) : false;
    // let fcrepoPath = args.options['collection-path'] || '';

    let forceMetadataUpdate = args.options['force-metadata-update'] || false;
    let ignoreRemoval = args.options['sync-deletes'] ? false : true;

    await api.io.import.run({
      fsPath : rootPath, 
      includeFilter, dryRun,
      forceMetadataUpdate,
      ignoreRemoval
    });
  }

  async export(args) {
    let dir = location.makeAbsolutePath(args['fs-path'] || '.');

    let cleanDir = args.options['clean'] || false;
    let ignoreBinary = args.options['ignore-binary'] || false;
    let ignoreMetadata = args.options['ignore-metadata'] || false;
    let includeFilter = args.options['include-filter'] ? this._paramToRegex(args.options['include-filter']) : null;
    let dryRun = args.options['dry-run'] || false;
    let subPaths = args.options['sub-paths'] ? args.options['sub-paths'].split(',').map(p => p.trim()) : false;

    if( args.options['host'] ) {
      api.setConfig({host: args.options['host']});
    }

    await api.io.export.run({
      fcrepoPath: args['root-fcrepo-path'], 
      fsRoot: dir,
      cleanDir, ignoreBinary, ignoreMetadata,
      includeFilter, dryRun, subPaths
    });
  }

  _paramToRegex(param) {
    let parts = param.replace(/^\//, '').split('/');
    let flag = parts.pop();
    return new RegExp(parts.join('/'), flag);
  }

}



module.exports = new FileIOCli();