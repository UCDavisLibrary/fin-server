import CSL from 'citeproc'

import locale from "./styles/locales-en-US.xml"
import apa from "./styles/apa.csl"
import mla from "./styles/modern-language-association.csl"
import chicago from "./styles/chicago-author-date.csl"

class CitationsModel {

  constructor() {
    this.engines = {
      apa : new CSL.Engine(this, apa),
      mla : new CSL.Engine(this, mla),
      chicago : new CSL.Engine(this, chicago)
    }

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
    return locale;
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
   * @returns {String} citation rendered as HTML
   */
  render(cslJson, format) {
    if( !this.engines[format] ) throw new Error('Invalid citation format: '+format);

    this.data[cslJson.id] = cslJson;

    let engine = this.engines[format];
    engine.updateItems([cslJson.id]);
    return engine.makeBibliography()[1].join('\n')
  }
}

let test = new CitationsModel();

let json = {
  "id": "Item-1",
  "type": "book",
  "title": "Digital Typography",
  "publisher": "Center for the Study of Language and Information",
  "number-of-pages": "685",
  "source": "Amazon.com",
  "ISBN": "1575860104",
  "author": [
    {
      "family": "Knuth",
      "given": "Donald E."
    }
  ],
  "issued": {
    "date-parts": [
      [
        "1998",
        6,
        1
      ]
    ]
  }
}
console.log(test.render(json, 'mla'))
console.log(test.render(json, 'chicago'))

export default test;