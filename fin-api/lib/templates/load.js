const fs = require('fs');
const path = require('path');

const cache = {};
const templates = [
  'acl.ttl', 
  'aclPatch.sparql', 
  'authorization.ttl', 
  'group.ttl', 
  'service.ttl', 
  'serviceContainer.ttl',
  'collectionGroups.ttl',
  'collectionRoot.ttl'
];

templates.forEach(template => {
  if( fs.readFileSync ) { // fs module wasn't mocked, ie not webpack
    cache[template] = fs.readFileSync(path.join(__dirname, template), 'utf-8');
  } else {
    cache[template] = require('./'+template);
  }
});

/**
* @method loadTemplate
* @description load a template from the templates dir.  if vars are passed
* replace {{}} syntax w/ vars
* 
* @param {String} name name of template to load
* @param {Object} vars Optional.  variables to replace
* 
* @returns {String}
*/
module.exports = function(name, vars = {}) {
  let template = cache[name];
  for( let key in vars ) {
    template = template.replace(new RegExp(`{{${key}}}`, 'g'), vars[key]);
  }
  return template;
}