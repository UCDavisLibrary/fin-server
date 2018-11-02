function classSupport() {
  try {
    eval("class Foo {}");
  } catch (e) { return false; }
  return true;
}

(function() {
  var version = '';
  if( window.CORK_LOADER_VERSIONS ) {
    version = '?_='+CORK_LOADER_VERSIONS.loader;
    console.log('Using loader version: '+CORK_LOADER_VERSIONS.loader);
  } else {
    console.warn('No loader version specified');
  }

  document.open();
  if( !classSupport() ) {
    console.log('No class support, adding babel polyfills. using ie compatibility build');
    document.write('<script src="/loader/polyfills/babel-polyfill.js'+version+'"></script>');
  }
  document.write('<script src="/loader/polyfills/webcomponents-loader.js'+version+'" ></script>');
  document.close();
})();

function addScript(src) {
  var ele = document.createElement('script');
  ele.src = src;
  document.head.appendChild(ele);
}

function load() {
  console.log('Webcomponents ready');

  var version = '';
  if( window.CORK_LOADER_VERSIONS ) {
    version = '?_='+CORK_LOADER_VERSIONS.bundle;
    console.log('Using client bundle version: '+CORK_LOADER_VERSIONS.bundle);
  } else {
    console.warn('No client bundle version specified');
  }

  if( classSupport() ) addScript('/js/bundle.js'+version);
  else addScript('/js/ie-bundle.js'+version);
}

if( window.WebComponents && WebComponents.ready) load();
else window.addEventListener('WebComponentsReady', load);