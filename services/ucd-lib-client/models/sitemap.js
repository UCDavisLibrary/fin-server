const collections = require('./collections');
const records = require('./records');
const config = require('../config');

class SitemapModel {

  /**
   * @method middleware
   * @description wireup middleware for sitemap
   * 
   * @param {Object} app express app instance
   */
  middleware(app) {
    app.get(/^\/sitemap.*/, (req, res) => this._onRequest(req, res));
  }

  async _onRequest(req, res) {
    let collection = req.url
      .replace(/^\/sitemap/, '')
      .replace(/\.xml$/, '');

    res.set('Content-Type', 'application/xml');
    
    if( !collection ) {
      return res.send(await this.getRoot());
    }

    res.send(await this.getCollection(collection.replace(/^-/,'')));
  }

  async getRoot() {
    let sitemaps = await collections.esSearch({
      _source : ['name']
    });

    let hits = sitemaps.hits.hits || [];
    sitemaps = hits.map(result => `<sitemap>
    <loc>${config.server.url}/sitemap-${result._id.replace('/collection/','')}.xml</loc>
</sitemap>`);

    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps.join('\n')}
</sitemapindex>`;
  }

  async getCollection(id) {
    let urls = await records.esSearch({
      _source : ['name'],
      query : {
        bool: {
          filter: [
            {term: {isRootRecord: true}},
            {term: {isPartOf: `/collection/${id}`}}
          ]
        }
      }
    });

    let hits = urls.hits.hits || [];
    urls = hits.map(result => `<url>
    <loc>${config.server.url}/record${result._id}</loc>
    <changefreq>weekly</changefreq>
    <priority>.5</priority>
</url>`);

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('\n')}
</urlset>`
  }

}

module.exports = new SitemapModel();