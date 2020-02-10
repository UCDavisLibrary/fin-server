class CitationsModel {

  constructor() {
    // citeproc as a round about way of rendering data can only pass id,
    // so you have to store object somewhere
    this.data = {};
    this.engineList = ['apa', 'mla', 'chicago'];
    this.engineListLabels = ['APA', 'MLA', 'Chicago'];
  }

  /**
   * @method retrieveLocale
   * @description Given a language tag in RFC-4646 form, this method retrieves the
   * locale definition file.  This method must return a valid *serialized*
   * CSL locale. (In other words, an blob of XML as an unparsed string.  The
   * processor will fail on a native XML object or buffer).  We always return EN-US for
   * now.
   */
  retrieveLocale() {
    return this.locale;
  }

  /**
   * @method retrieveItem
   * @description Given an identifier, this retrieves one citation item.  This method
   * must return a valid CSL-JSON object.  Part of citeproc workflow :/
   * 
   * @param {String} id 
   */
  retrieveItem(id) {
    return this.data[id]
  }

  /**
   * @method render
   * @description render a record cslJSon with a given citation.  currently apa, 
   * mla and chicago formats accepted.
   * 
   * @param {Object} cslJson record as CSL-JSON object
   * @param {String} format citation format
   * 
   * @returns {Promise} resolves to string, citation rendered as HTML
   */
  async render(cslJson, format) {
    await this._loadEngines();

    if( !this.engines[format] ) throw new Error('Invalid citation format: '+format);

    this.data[cslJson.id] = cslJson;

    let engine = this.engines[format];
    engine.updateItems([cslJson.id]);
    return engine.makeBibliography()[1].join('\n')
  }

  /**
   * @method _loadEngines
   * @description citeproc is a large library, lets not load anything until required
   * 
   * @return {Promise} resolves when CSL rendering engines are loaded
   */
  async _loadEngines() {
    if( this.engines ) return;

    if( this.loadingEngines ) {
      await this.loadingEngines;
      return;
    }

    this.loadingEngines = new Promise(async (resolve, reject) => {
      const CSL = await import(/* webpackChunkName: "csl" */ 'citeproc');
      this.locale = (await import(/* webpackChunkName: "csl" */ './styles/locales-en-US.xml')).default;
      const apa = await import(/* webpackChunkName: "csl" */ './styles/apa.csl');
      const mla = await import(/* webpackChunkName: "csl" */ './styles/modern-language-association.csl');
      const chicago = await import(/* webpackChunkName: "csl" */ './styles/chicago-author-date.csl');
  
  
      this.engines = {
        apa : new CSL.Engine(this, apa.default),
        mla : new CSL.Engine(this, mla.default),
        chicago : new CSL.Engine(this, chicago.default)
      }

      resolve();
    });

    return this.loadingEngines;
  }

  esRecordToCslJson(record) {
    let d = new Date();

    let publisher = this._getRecordValue(record, 'publisher');
    if( publisher ) {
      publisher = publisher.find(item => item.name ? true : false);
      if( publisher ) publisher = publisher.name;
    }

    let cslJson = {
      id : record['@id'],
      URL : record['@type'].includes('http://schema.org/Collection') ? window.location.origin + record['@id'] : window.location.href,
      title : this._getRecordValue(record, 'name', true),
      type : 'webpage',
      publisher,
      source : window.location.host,
      accessed : {
        'date-parts': [[ d.getFullYear(), d.getMonth()+1, d.getDate()]]
      }
    }

    if( record.collectionName ) {
      cslJson['collection-title'] = record.collectionName;
    }

    let creator = (this._getRecordValue(record, 'creator') || [])
      .filter(v => v.name ? true : false)
      .map(v => v.name);
    if( creator.length ) {
      cslJson.author = creator.map(name => ({family: name}));
    }

    let datePublished = this._getRecordValue(record, 'datePublished', true);
    let yearPublished = this._getRecordValue(record, 'yearPublished', true);
    if( datePublished ) {
      cslJson.issued = {
        "raw": datePublished
      }
    } else if( yearPublished ) {
      cslJson.issued = {
        "raw": yearPublished+''
      }
    }

    return cslJson;
  }

  _getRecordValue(record, value, first) {
    if( !record[value] ) return undefined;
    value = record[value];
    if( !Array.isArray(value) ) value = [value];
    if( first ) {
      if( !value.length ) return undefined;
      return value[0];
    } 
    return value;
  }

  /**
   * @method renderEsRecord
   * @description render a record citation in provided format
   * 
   * @param {Object} record
   * @param {String} format
   * 
   * @returns {Promise} resolves to string
   */
  renderEsRecord(record, format) {
    return this.render(this.esRecordToCslJson(record), format);
  }
}

export default new CitationsModel();