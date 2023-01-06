const {ElasticSearchModel} = require('@ucd-lib/fin-service-utils');

class ItemsModel extends ElasticSearchModel {

  constructor() {
    super('item');
    this.transformService = 'es-item-transform';
  }

  is(id, types=[]) {
    if( id.match(/^\/item\//) ) return true;
    return false;
  }

  /**
   * @method getChildren
   * @description child from fcrepo path
   * 
   * @param {String} id record id

   * 
   * @return {Promise} resolves to record
   */
  async getChildren(id) {
    let result = await this.esSearch({
      from: 0,
      size: 10000,
      query: {
        wildcard : {
          'node.@id' : {
            value : id+'/*'
          }
        }
      }
    });

    return (result.hits.hits || []).map(item => item._source);
  }

  async getFiles(id, files=[]) {
    let searchDocument = {
      "filters":{
        "directParent":{
            type:"keyword",
            value:[id],
            "op":"or"
        }
      }
    }
    let resp = await this.search(searchDocument, {allRecords: true, noLimit: true});

    let types;
    for( let result of resp.results ) {
      types = result['@type'] || [];
      if( types.includes('http://fedora.info/definitions/v4/repository#Resource') ) {
        files.push({
          filename: result.filename, 
          path: result['@id'],
          fileFormat : result.fileFormat,
          fileSize : result.fileSize
        });
      } else if( types.includes('http://www.w3.org/ns/ldp#BasicContainer') ) {
        await this.getFiles(result['@id'], files);
      }
    }

    return files;
  }

}

module.exports = new ItemsModel();