const DEFAULT_WALK_ATTRIBUTES = ['hasPart', 'associatedMedia', 'caption', 'transcript'];

module.exports = (id, graph, walkAttributes) => {
  if( !walkAttributes ) {
    walkAttributes = DEFAULT_WALK_ATTRIBUTES;
  }

  let tmp = {};
  graph.forEach(item => {
    tmp[item['@id']] = item;
    if( !id && item.isRootRecord ) id = item['@id'];
  });
  graph = tmp;

  if( !id ) throw new Error('No id provided and no root record found in graph');

  let record = graph[id];
  if( !record ) return {};

  _concat(record, graph, walkAttributes);
  return record;
}

function _concat(record, graph, walkAttributes) {
  let obj;

  for( let attr of walkAttributes ) {
    obj = record[attr];
    if( !obj ) continue;

    if( !Array.isArray(obj) ) obj = [obj]; 

    for( let i = 0; i < obj.length; i++ ) {
      let item = obj[i];

      if( !(item instanceof Object) ) continue;
      if( !item['@id'] || Object.keys(item).length !== 1 ) continue;
      if( !graph[item['@id']] ) continue;

      obj[i] = graph[item['@id']];
      _concat(obj[i], graph, walkAttributes);
    }

    if( obj.length === 1 ) record[attr] = obj[0];
    else record[attr] = obj;
  }
}