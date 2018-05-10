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
    app.get('/robots.txt', (req, res) => {
      res.set('Content-Type', 'text/plain');
      res.send(`User-agent: * 
Allow: *
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
    
    // no collection name provided, set the root sitemapindex for all collections
    if( !collection ) {
      return res.send(await this.getRoot());
    }

    // send express response, we are going to stream out the xml result
    this.getCollection(collection.replace(/^-/,''), res);
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
  ${sitemaps.join('\n')}
</sitemapindex>`;
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
          {term: {isPartOf: `/collection/${id}`}}
        ]
      }
    };
    let limit = 250;

    // find total records
    let result = await records.esSearch({
      _source : ['name'],
      from : 0,
      size : 0,
      query : query
    });

    // given limit size above, send records in limit sized chunks
    for( var i = 0; i < result.hits.total; i += limit ) {
      let urls = await this._getCollectionPart(i, limit, query);
      resp.write(urls.join('\n')+'\n');
    }

    // finish our sitemap xml and end response
    resp.write('</urlset>');
    resp.end();
  }

  /**
   * @method _getCollectionPart
   * @description given a limit and offset (from/size) and a collection
   * query, respond with a string array of sitemap xml <url> tags. Helper
   * for getCollection().
   * 
   * @param {Integer} from 
   * @param {Integer} size 
   * @param {Object} query 
   * 
   * @return {Promise} resolve to string array
   */
  async _getCollectionPart(from, size, query) {
    let urls = await records.esSearch({
      _source : ['name'],
      query, from, size
    });

    let hits = urls.hits.hits || [];
    return hits.map(result => `<url>
        <loc>${config.server.url}/record${result._id}</loc>
        <changefreq>weekly</changefreq>
        <priority>.5</priority>
    </url>`);
  }

}

module.exports = new SitemapModel();