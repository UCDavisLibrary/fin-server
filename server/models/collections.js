var es = require('../lib/esClient');
var config = require('../config');

class CollectionsModel {

  async get(id) {
    return stubData[id];
    // return es.search({
    //   index : config.elasticsearch.collections.alias,
    //   body : {
    //     query : {
    //       terms : {
    //         _id : [id]
    //       }
    //     }
    //   }
    // });
  }

  async overview() {
    let arr = [];
    for( let key in stubData ) {
      arr.push(stubData[key]);
    }
    return arr;

    // return es.search({
    //   index : config.elasticsearch.collections.alias,
    //   body : {}
    // });
  }
}

var stubData = {
  '1234' : {
    id : '1234',
    title : 'Amerine\'s Wine Labels Collection',
    description : 'Lots of wine labels. Pretty pictures',
    thumbnail : 'amerine.jpg',
    highlighted : true
  },
  '4567' : {
    id : '4567',
    title : 'The Slater Collection',
    description : 'Stuff and stuff',
    thumbnail : 'eastman.jpg',
    highlighted : true
  },
  '7890' : {
    id : '7890',
    title : 'The Eastman Collection',
    description : 'Lots of cool CA pictures',
    thumbnail : 'slater.jpg',
    highlighted : true
  }
}


module.exports = new CollectionsModel();