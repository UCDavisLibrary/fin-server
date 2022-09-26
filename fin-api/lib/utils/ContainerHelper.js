const config = require('../config');

class ContainerHelper {
  constructor(graph={}, id, idIsFinPath=false) {
    if( typeof graph === 'string' ) {
      graph = JSON.parse(graph);
    }

    if( !id ) {
      if( Array.isArray(graph) ) {
        throw new Error('id is required to create wrapper from graph array');
      } else {
        id = graph['@id'];
      }
    }

    if( idIsFinPath ) {
      this._finId = id;
      id = config.host+config.fcBasePath+id;
    }

    if( id ) {
      if( Array.isArray(graph) ) {
        graph = graph.find(c => c['@id'] === id);
        if( !graph ) throw new Error('Unable to find id in graph: '+id);
      } else if( graph['@id'] !== id ) {
        throw new Error('Unable to find id in graph: '+id);
      }
    }

    this.graph = graph;
  }

  isType(type) {
    return this.graph['@type'].indexOf(type) > -1;
  }

  getFinPath() {
    return this.graph['@id'].split(config.fcBasePath)[1];
  }

  getValue(prop) {
    prop = this.graph[prop];
    if( !prop ) return null;

    if( Array.isArray(prop) ) {
      return prop.map(p => this._getIdOrValue(p));
    }
    return [this._getIdOrValue(p)];
  }

  getFirstValue(prop) {
    let value = this.getValue(prop);
    if( Array.isArray(value) ) return value[0];
    return value;
  }

  _getIdOrValue(val) {
    if( typeof val !== 'object' ) return val;
    if( val['@id'] ) return val['@id'];
    if( val['@value'] ) return val['@value'];
    return val;
  }

}

module.exports = ContainerHelper;