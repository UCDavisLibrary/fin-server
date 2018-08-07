const hdt = require('hdt');

class HdtWrapper {

  // constructor() {
  //   this.documents = {};
  // }

  // async closeAll() {
  //   for( var key in this.document ) {
      
  //   }
  // }

  /**
   * @method getSubject
   * @description given a document and a subject uri, retrieve the first entry that matches the
   * given uri.  Returns null if not found
   * 
   * @param {String} document full path to hdt file
   * @param {String} uri uri of subject to find
   * 
   * @returns {Promise} resolves to triple or null
   */
  async getSubject(document, uri) {
    // TODO: is it better to leave docs open?
    // if( !this.documents[document] ) {
    //   this.documents[document] = await hdt.fromFile(document);
    // }
    // document = this.documents[document];
    document = await hdt.fromFile(document);

    let result = await hdtDoc.searchTriples(uri, null, null, {offset: 0, limit: 1});
    if( result.totalCount === 0 ) return null;
    return result.triples[0];
  }

}