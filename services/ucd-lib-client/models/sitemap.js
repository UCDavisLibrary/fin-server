const collections = require('./collections');
const records = require('./records');
const config = require('../config');

const COLLECTIONS_SITEMAP = '_collections';

class SitemapModel {

  /**
   * @method middleware
   * @description wireup middleware for sitemap
   * 
   * @param {Object} app express app instance
   */
  middleware(app) {
    let allow = 'Disallow: /';
    if( config.server.url.match('https://digital.ucdavis.edu') ) {
      allow = 'Allow: /';
    }

    app.get(/^\/sitemap.*/, (req, res) => this._onRequest(req, res));
    app.get('/robots.txt', (req, res) => {
      res.set('Content-Type', 'text/plain');
      res.send(`User-agent: * 
${allow}

Sitemap: ${config.server.url}/sitemap.xml`);
    });
  }

  /**
   * @method _onRequest
   * @description handle any request that starts with /sitemap.  Bound
   * to express app route above
   * 
   * @param {Object} req express request
   * @param {Object} res express response
   */
  async _onRequest(req, res) {
    let collection = req.url
      .replace(/^\/sitemap/, '')
      .replace(/\.xml$/, '');

    res.set('Content-Type', 'application/xml');
    
    try {
      // no collection name provided, set the root sitemapindex for all collections
      if( !collection ) {
        return res.send(await this.getRoot());
      }

      collection = collection.replace(/^-/,'');
      if( collection === COLLECTIONS_SITEMAP ) {
        return await this.getCollections(res);
      }

      // send express response, we are going to stream out the xml result
      this.getCollection(collection.replace(/^-/,''), res);
    } catch(e) {
      res.set('Content-Type', 'application/json');
      res.status(500).json({
        error : true,
        message : e.message,
        stack : e.stack
      });
    }
  }

  /**
   * @method getRoot
   * @description create the root sitemapindex for all collections
   * 
   * @returns {Promise} resolves to xml string
   */
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
  <sitemap>
    <loc>${config.server.url}/sitemap-${COLLECTIONS_SITEMAP}.xml</loc>
  </sitemap>
  ${sitemaps.join('\n')}
</sitemapindex>`;
  }

  /**
   * @method getCollections
   * 
   */
  async getCollections(resp) {
    resp.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);

    let sitemaps = await collections.esSearch({
      _source : ['name']
    });

    (sitemaps.hits.hits || [])
      .map(result => {
        return `${config.server.url}${result._id}`
      })
      .forEach(url => {
        resp.write(`<url>
          <loc>${url}</loc>
          <changefreq>weekly</changefreq>
          <priority>.5</priority>
        </url>\n`);
      });

    resp.write('</urlset>');
    resp.end();
  }

  /**
   * @method getCollection
   * @description create sitemap file for a collection.  Unlike get root above,
   * this method takes the collection id AND express response object as we are
   * going to stream the sitemap xml as it may be large (10k+ records)
   * 
   * @param {String} id collection slug
   * @param {Object} resp express response object
   * 
   * @returns {Promise} resolves to xml string
   */
  async getCollection(id, resp) {
    // set xml header
    resp.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);

    // create our es query
    let query = {
      bool: {
        filter: [
          {term: {isRootRecord: true}},
          {term: {'isPartOf.@id': `/collection/${id}`}}
        ]
      }
    };

    let chunkSize = 250;
    let time = '30s';

    // find records and start scroll
    let result = await records.esSearch({
      _source : ['name'],
      query : query,
      size: 250
    }, {scroll: time});

    let sent = result.hits.hits.length;
    result.hits.hits.forEach(result => this._writeResult(resp, result));
    
    while( result.hits.total > sent ) {
      result = await records.esScroll({
        scrollId: result._scroll_id,
        scroll: time
      });

      result.hits.hits.forEach(result => this._writeResult(resp, result));
      sent += result.hits.hits.length;
    }

    // finish our sitemap xml and end response
    resp.write('</urlset>');
    resp.end();
  }

  /**
   * @method _writeResult
   * @description write a single result for sitemap
   * 
   * @param {Object} resp express response
   * @param {Object} result elasticsearch record result
   */
  _writeResult(resp, result) {
    resp.write(`<url>
        <loc>${config.server.url}${result._id}</loc>
        <changefreq>weekly</changefreq>
        <priority>.5</priority>
    </url>\n`);
  }

}

module.exports = new SitemapModel();