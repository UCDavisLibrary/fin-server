let rights = require('./rights');

let rightsMap = {};
for( var key in rights ) {
  rightsMap[key] =  rights[key].text;
}

module.exports = {
  fcrepoBasePath : '/fcrepo/rest',

  // facets to show on left side
  elasticSearch : {
    facets : {
      'fileFormats' : {
        label : 'File Format',
        type : 'facet'
      },
      'creators' : {
        label : 'Creator',
        type : 'facet'
      },
      yearPublished : {
        label : 'Published',
        type : 'range'
      },
      license : {
        label : 'Rights',
        type : 'facet',
        valueMap : rightsMap
      },
      type : {
        label : 'Type',
        type : 'facet',
        ignore : ['CreativeWork']
      },
      about : {
        label : 'Subject',
        type : 'facet'
      }
    },

    textFields : ['name', 'description', 'keywords'],
    
    // max number of facets filter options
    maxFacetCount : 50
  }
}
