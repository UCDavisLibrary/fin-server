class CitationsModel {

  constructor() {
    // citeproc as a round about way of rendering data can only pass id,
    // so you have to store object somewhere
    this.data = {};
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

    let cslJson = {
      id : record['@id'],
      URL : window.location.href,
      title : record.name,
      type : 'webpage',
      publisher : record.publisher,
      source : window.location.host,
      accessed : {
        'date-parts': [[ d.getFullYear(), d.getMonth()+1, d.getDate()]]
      }
    }

    if( record.collectionName ) {
      cslJson['collection-title'] = record.collectionName;
    }

    if( record.creator ) {
      cslJson.author = [{
        family: record.creator
      }];
    }

    if( record.datePublished ) {
      cslJson.issued = {
        "raw": record.datePublished
      }
    } else if( record.yearPublished ) {
      cslJson.issued = {
        "raw": record.yearPublished+''
      }
    }

    return cslJson;
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