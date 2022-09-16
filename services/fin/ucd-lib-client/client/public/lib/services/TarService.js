class TarService {
  constructor() {
    this.baseUrl = '/api/tar';
  }

  create(filename, paths) {
    return `${this.baseUrl}/${filename}?paths=${encodeURIComponent(JSON.stringify(paths))}`;
  }
}

module.exports = new TarService();