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
      'subjects_raw' : {
        label : 'Subject',
        type : 'facet'
      },
      yearPublished : {
        label : 'Published',
        type : 'range'
      },
      type : {
        label : 'Type',
        type : 'facet',
        ignore : ['CreativeWork']
      }
    },

    textFields : ['name', 'description', 'keywords'],
    
    // max number of facets filter options
    maxFacetCount : 50
  }
}
