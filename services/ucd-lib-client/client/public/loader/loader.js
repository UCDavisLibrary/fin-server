function classSupport() {
  try {
    eval("class Foo {}");
  } catch (e) { return false; }
  return true;
}

(function() {
  let version = '';
  if( window.CORK_LOADER_VERSIONS ) {
    version = '?_='+CORK_LOADER_VERSIONS.loader;
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
  let version = '';
  if( window.CORK_LOADER_VERSIONS ) {
    version = '?_='+CORK_LOADER_VERSIONS.bundle;
  }

  console.log('Webcomponents ready.');

  if( classSupport() ) addScript('/js/bundle.js'+version);
  else addScript('/js/ie-bundle.js'+version);
}

if( window.WebComponents && WebComponents.ready) load();
else window.addEventListener('WebComponentsReady', load);