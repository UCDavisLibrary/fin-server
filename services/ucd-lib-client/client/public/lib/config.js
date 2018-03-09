module.exports = {
  // facets to show on left side

  elasticSearch : {
    facets : {
      'fileFormat' : {
        label : 'File Format',
        type : 'facet'
      },
      'creator' : {
        label : 'Creator',
        type : 'facet'
      },
      'subject_raw' : {
        label : 'Subject',
        type : 'facet'
      }
      // 'winetype.raw' : {
      //   label : 'Wine Type',
      //   type : 'facet'
      // },
      // vintage : {
      //   label : 'Vintage',
      //   type : 'range'
      // },
      // publication_date : {
      //   label : 'Published',
      //   type : 'range'
      // },
      // perprice : {
      //   label : 'Bottle Price',
      //   type : 'range',
      //   isDollar : true
      // },
      // 'country.raw' : {
      //   label : 'Country',
      //   type : 'facet'
      // },
      // 'bottletype.raw' : {
      //   label : 'Bottle Size',
      //   type : 'facet'
      // }
    },

    textFields : ['name', 'description'],
    
    // max number of facets filter options
    maxFacetCount : 50
  }
}