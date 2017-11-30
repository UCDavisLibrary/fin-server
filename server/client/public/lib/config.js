module.exports = {
  // facets to show on left side

  elasticSearch : {
    facets : {
      'hasMimeType' : {
        label : 'Mime-Type',
        type : 'facet'
      },
      'dc:creator' : {
        label : 'Creator',
        type : 'facet'
      },
      'dc:subject' : {
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

    textFields : ['title', 'description'],
    
    // max number of facets filter options
    maxFacetCount : 50
  }
}