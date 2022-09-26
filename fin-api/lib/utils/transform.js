const N3 = require('n3');
const assert = require('assert');
const jsonld = require('jsonld').promises;
const processContext = require('jsonld').processContext;
const uuid = require('uuid/v4');

const CONTAINER_TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';

/**
 * Utility library for json-ld to/from turtle
 */
class TransformUtils {

  async turtleToJsonLd(turtle, compacted=false) {
    let {prefixes, triples} = await this._getTurtleTriples(turtle); 
    return finalizeJsonLd(prefixes, triples, compacted);
  }

  async jsonldToTurtle(json) {
    if( typeof json === 'string' ) {
      json = JSON.parse(json);
    }

    let ids = ensureRootIds(json);

    // let namespaces = await parseNamespaces(json)
    let dataset = await jsonld.toRDF(json, {format: 'application/nquads'});
    let turtle = await ntToTurtle(dataset);

    ids.forEach(id => {
      let re = new RegExp(id, 'g');
      turtle = turtle.replace(re, '');
    });

    return turtle;
  }

  /**
   * @method diffToSparql
   * @description takes two turtle files and returns a sparql update of the diff
   */
  async diffToSparql(turtleSrc, turtleDst, options={}) {
    let src = await this._getTurtleTriples(turtleSrc); 
    let dst = await this._getTurtleTriples(turtleDst);

    let deletes = [];
    let inserts = [];

    src.triples.forEach(srcTriple => {
      let found = dst.triples.find(dstTriple => tripleEquals(srcTriple, dstTriple));
      if( !found ) deletes.push(srcTriple);
    });

    dst.triples.forEach(dstTriple => {
      let found = src.triples.find(srcTriple => tripleEquals(srcTriple, dstTriple));
      if( !found ) inserts.push(dstTriple);
    });

    if( inserts.length ) {
      inserts = inserts.map(triple => tripleToSqarl(triple)).join(' .\n  ')+' .';
    } else {
      inserts = '';
    }
    if( deletes.length ) {
      deletes = deletes.map(triple => tripleToSqarl(triple)).join(' .\n  ')+' .';
    } else {
      deletes = '';
    }
    
    let sparql = `DELETE {
  ${deletes}
}
INSERT {
  ${inserts}
}
WHERE {}`;

    if( !options.includeParseInfo ) return sparql;
    return {sparql, deletes, inserts}
  }

  async _getTurtleTriples(turtle) {
    var parser = new N3.Parser();
    var triples = [];

    return new Promise((resolve, reject) => {
      parser.parse(turtle, function (err, triple, foo, bar) {
        if( err ) return reject(err);
        
        if( triple ) {
          triples.push({
              subject: term(triple.subject),
              predicate: term(triple.predicate),
              object: term(triple.object)
          });
        } else {
          resolve({prefixes: parser._prefixes, triples});
        }
      });
    });
  }
}

function tripleEquals(triple1, triple2) {
  try {
    assert.deepEqual(triple1, triple2);
    return true;
  } catch(e) {
    return false;
  }
}

function finalizeJsonLd(prefixes, triples, compacted) {
  let bySubject = {};

  // group by subject
  triples.forEach(triple => {
    if( !bySubject[triple.subject.value] ) {
      bySubject[triple.subject.value] = {};
    }

    let subj = bySubject[triple.subject.value];
    if( !subj[triple.predicate.value] ) {
      subj[triple.predicate.value] = [];
    }

    if( triple.object.type === 'IRI' ) {
      subj[triple.predicate.value].push({
        '@id' : triple.object.value
      });
    } else {
      let val = {
        '@value' : triple.object.value
      };
      if( triple.object.datatype ) {
        val['@type'] = triple.object.datatype
      }
      subj[triple.predicate.value].push(val);
    }
  });

  let array = [];
  for( let key in bySubject ) {
    let subject = bySubject[key];

    // set the key
    subject['@id'] = key;

    // map the @types
    if( subject[CONTAINER_TYPE] ) {
      subject['@type'] = subject[CONTAINER_TYPE].map(item => item['@id']);
      delete subject[CONTAINER_TYPE];
    }

    array.push(subject);
  } 

  return array;
}

function ntToTurtle(dataset, namespaces) {
  var parser = new N3.Parser();
  // var writer = new N3.Writer({ prefixes: namespaces });
  var writer = new N3.Writer();

  return new Promise((resolve, reject) => {
    parser.parse(dataset, (parseErr, triple) => {
      if (parseErr) return reject (parseErr);
      
      if( triple ) {
        writer.addTriple(triple);
      } else {
        writer.end((err, data) => {
          if( err ) return reject(err);
          resolve(data);
        });
      }
    });
  });
};

function parseNamespaces(data) {
  return new Promise((resolve, reject) => {
    // processContext (null, null, function (notused, initialContext) {
      processContext (null, data, function (err, parsedContext) {
        if( err ) return reject(err);

        var namespaces = {};
        Object.keys(parsedContext.mappings).forEach((key, idx, arr) => {
          var value = parsedContext.mappings[key];
          if (value.reverse === false && value['@type'] === undefined && value['@id']) {
            namespaces[key] = value['@id'];
          }
        });

        resolve(namespaces);
      });
    // });
  });
};

function tripleToSqarl(triple) {
  return termToSqarl(triple.subject) + ' ' +
         termToSqarl(triple.predicate) + ' ' +
         termToSqarl(triple.object);
}

function termToSqarl(term) {
  if( term.type === 'IRI' ) return `<${term.value}>`;
  if( term.type === 'literal' ) {
    // hack, this doesn't wrap data type correctly :(
    // N3.Util.createLiteral(term.value, term.datatype);
    // also hack to escape quotes... this util sucks...
    return N3.Util.createLiteral(term.value.replace(/"/g, '\\"'))+'^^<'+term.datatype+'>';
  }
  return '""';
}


function term(str) {
  if (N3.Util.isBlank(str)) {
      return {
          type: 'blank node',
          value: str
      };
  } else if (N3.Util.isLiteral(str)) {
      var ret = {
          type: 'literal',
          value: N3.Util.getLiteralValue(str),
          datatype: N3.Util.getLiteralType(str),
      };

      var language = N3.Util.getLiteralLanguage(str);
      if (language !== '') {
          ret.language = language;
      }

      return ret;
  } else {
      return {
          type: 'IRI',
          value: str
      };
  }
};

function ensureRootIds(json) {
  if( !Array.isArray(json) ) {
    return [ensureRootId(json)];
  }

  return json.map(obj => ensureRootId(obj));
}

function ensureRootId(json) {
  if( json['@id'] && json['@id'].match(/^http/) ) return;
  json['@id'] = 'http://'+uuid()+'.com';
  return json['@id'];
}

module.exports = new TransformUtils();