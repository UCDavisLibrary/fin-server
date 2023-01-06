const CHILD_LINKS = ['hasPart', 'associatedMedia'];
const PARENT_LINKS = ['isPartOf', 'encodesCreativeWork'];

class RecordGraph {

  constructor(data) {
    this.data = data;
    this.index = {};
    this.root = null;
    this.init();
  }

  init() {
    for( let item of this.data.node ) {
      item.id = item['@id'];

      // if the node id is the main data id, this is the root
      if( item['@id'] === this.data.id ) {
        this.root = item;
      }

      // clean uri's from type names
      item['@shortType'] = (item['@type'] || []).map(uri => uri.replace(/.*#/, '').replace(/.*\//, ''))

      // create a quick lookup index by node URI
      this.index[item['@id']] = item;
    }
  }

  /**
   * @method getChildren
   * @description get all hasPart and associatedMedia nodes
   * 
   * @param {Object|String} nodeOrPath 
   * @returns {Array<Object>}
   */
  getChildren(nodeOrPath) {
    let children = {};
    if( !nodeOrPath ) return children;

    let container = this.getContainer(nodeOrPath);
    if( !container ) return children;

    CHILD_LINKS.forEach(prop => {
      children[prop] = [];
      this.asArray(container[prop]).forEach(item => {
        children[prop].push(this.getContainer(item));
      });
    });

    console.log(children);
    return children;
  }

  /**
   * @method getContainer
   * @description give a string path, return the container for path.  If
   * a container is given, the container is returned.
   * 
   * @param {String|Object} nodeOrPath 
   * @returns 
   */
  getContainer(nodeOrPath) {
    if( typeof nodeOrPath === 'string' ) {
      return this.index[nodeOrPath];
    }
    return this.index[nodeOrPath['@id']];
  }

  /**
   * @method asArray
   * @description given a value of a property, return as array.  If
   * the value is undefined or null, returns empty array.
   * 
   * @param {*} val 
   * @returns {Array}
   */
  asArray(val) {
    if( val === undefined || val === null ) return [];
    if( Array.isArray(val) ) return val;
    return [val];
  }

}

export default RecordGraph;