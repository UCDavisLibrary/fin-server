const config = require('../../config.js');

class Utils {

  compactAllTypes(graph) {
    if( graph['@graph'] ) graph = graph['@graph'];
    if( graph.node ) graph = graph.node;
    for( let node of graph ) {
      node['@type'] = this.compactTypes(node['@type']);
    }
  }

  compactTypes(types=[]) {
    return types.filter(type => {
      for( let re of config.elasticsearch.compactTypeInclude ) {
        if( type.match(re) ) return true;
      }
      return false;
    });
  }

  singleNode(id, graph) {
    if( graph['@graph'] ) graph = graph['@graph'];
    if( graph.node ) graph = graph.node;
    return [graph.find(node => node['@id'] === id)];
  }

}

module.exports = new Utils();